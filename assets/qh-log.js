/*!
 * qh-log.js — 303329.xyz 全链路诊断日志
 *
 * 引入（必须放在 <head> 最前，早于 Supabase SDK）：
 *   <script src="/assets/qh-log.js" data-page="chat" data-ver="2026.11.28.1"></script>
 *
 * 用法：
 *   qhAct('send_message', { kind:'text', peer:'u_123' })   // 业务打点，永不抛错
 *   QHLOG.export()                                        // 一键导出（右下角「诊断」同效）
 *   QHLOG.text()                                          // 取纯文本（控制台/复制用）
 *   QHLOG.debug(true)                                     // 打开逐条 console 输出
 *
 * 设计：
 *   - 环形缓冲 500 条 / 256KB，超出丢最旧；localStorage 节流 800ms 落盘
 *   - 落盘失败自动降级为纯内存，业务无感；logger 自身异常绝不递归、绝不外溢
 *   - 记录：JS 错误、未捕获 Promise、资源加载失败、fetch 全量、业务动作、页面生命周期
 *   - 脱敏：用户 ID 只留前 4 后 2，邮箱/手机号/token/JWT 全部打码
 */
(function () {
  'use strict';

  if (window.QHLOG && window.QHLOG.__qh === 1) return;

  /* ================= 0. 环境与常量 ================= */
  var SELF = document.currentScript;
  if (!SELF) {
    var ss = document.getElementsByTagName('script');
    for (var si = ss.length - 1; si >= 0; si--) {
      if (/\/qh-log\.js(\?|$)/.test(ss[si].src || '')) { SELF = ss[si]; break; }
    }
  }
  var PAGE = (SELF && SELF.getAttribute('data-page')) || pathName() || 'root';
  var VER  = (SELF && SELF.getAttribute('data-ver')) || '0';
  var KEY      = 'qh_log_v1';
  var SID_KEY  = 'qh_log_sid';
  var MAX_ITEMS = 500;
  var MAX_BYTES = 256 * 1024;
  var FLUSH_MS  = 800;
  var FLUSH_ON_HIDE = true;

  var UA = '';
  try { UA = navigator.userAgent || ''; } catch (e) {}

  var SID = '';
  try { SID = sessionStorage.getItem(SID_KEY) || ''; } catch (e) {}
  if (!SID) {
    SID = 's-' + Date.now().toString(36).slice(-5) + Math.random().toString(36).slice(2, 5);
    try { sessionStorage.setItem(SID_KEY, SID); } catch (e) {}
  }

  function pathName() {
    try {
      return location.pathname.replace(/^\/+/, '').replace(/\.html?$/i, '').replace(/\//g, '_') || 'root';
    } catch (e) { return 'root'; }
  }

  /* ================= 1. 脱敏 ================= */
  function mask(s) {
    return String(s == null ? '' : s)
      .replace(/([?&](?:apikey|key|token|access_token|refresh_token|secret)=)[^&#]*/gi, '$1***')
      .replace(/Bearer\s+[A-Za-z0-9._\-]{6,}/g, 'Bearer ***')
      .replace(/sb_publishable_[A-Za-z0-9_\-]+/g, 'sb_publishable_***')
      .replace(/sb_secret_[A-Za-z0-9_\-]+/g, 'sb_secret_***')
      .replace(/eyJ[A-Za-z0-9_\-]{8,}\.[A-Za-z0-9_\-]{8,}\.[A-Za-z0-9_\-]{4,}/g, '<jwt>')
      .replace(/([a-z0-9._%+\-]{1,64})@([a-z0-9.\-]+\.[a-z]{2,})/gi, function (_, a, b) {
        return a.slice(0, 1) + '***@' + b;
      })
      .replace(/\b1[3-9]\d{9}\b/g, function (m) { return m.slice(0, 3) + '****' + m.slice(7); });
  }

  function maskId(id) {
    var s = String(id == null ? '' : id);
    if (!s) return '';
    if (s.length <= 6) return s.slice(0, 2) + '**';
    return s.slice(0, 4) + '…' + s.slice(-2);
  }

  function readUid() {
    try {
      var s = localStorage.getItem('qiaohua_session');
      if (s) {
        var o = JSON.parse(s);
        if (o && o.id) return 'acc:' + o.id;
      }
      var g = localStorage.getItem('qiaohua_guest_id');
      if (g) return 'guest:' + g;
    } catch (e) {}
    return '';
  }

  var UID = readUid();

  /* ================= 2. 缓冲 ================= */
  var buf = [];
  var seq = 0;
  var bytes = 0;
  var persist = true;
  var flushTimer = null;
  var inLog = false;
  var failCount = 0;
  var verbose = false;
  var warnedStorage = false;

  function approx(it) {
    var n = 88 + (it.m ? it.m.length : 0) + (it.e ? it.e.length : 0);
    if (it.d) { try { n += JSON.stringify(it.d).length; } catch (e) { n += 60; } }
    return n;
  }

  function trim() {
    while (buf.length > MAX_ITEMS) {
      bytes -= approx(buf.shift());
    }
    while (bytes > MAX_BYTES && buf.length > 40) {
      bytes -= approx(buf.shift());
    }
    if (bytes < 0) bytes = 0;
  }

  function shortStack(st) {
    if (!st) return '';
    try {
      var lines = String(st).split('\n').slice(0, 4);
      return mask(lines.join(' | ').replace(/https?:\/\/[^\/\s)]+/g, function (m) {
        return m.length > 48 ? '…' : m;
      }).slice(0, 320));
    } catch (e) { return ''; }
  }

  function clean(v, depth) {
    depth = depth || 0;
    if (v === null || v === undefined) return v;
    var t = typeof v;
    if (t === 'string') return mask(v.slice(0, 300));
    if (t === 'number' || t === 'boolean') return v;
    if (t === 'function') return '[fn]';
    if (t !== 'object') return String(v);
    if (depth >= 2) return Array.isArray(v) ? '[array]' : '[obj]';
    try {
      if (Object.prototype.toString.call(v) === '[object Error]') {
        return { name: v.name, message: mask(String(v.message || '').slice(0, 200)), stack: shortStack(v.stack) };
      }
      if (typeof File !== 'undefined' && v instanceof File) return { file: v.name, size: v.size, type: v.type };
      if (typeof Blob !== 'undefined' && v instanceof Blob) return { blob: v.size, type: v.type };
      if (typeof FormData !== 'undefined' && v instanceof FormData) return '[FormData]';
      if (typeof Element !== 'undefined' && v instanceof Element) return '<' + String(v.tagName || '?').toLowerCase() + '>';
      if (Array.isArray(v)) return v.slice(0, 8).map(function (x) { return clean(x, depth + 1); });
      var out = {}, n = 0, k;
      for (k in v) {
        if (!Object.prototype.hasOwnProperty.call(v, k)) continue;
        if (n++ >= 16) { out['…'] = 'more'; break; }
        try { out[k] = clean(v[k], depth + 1); } catch (e) { out[k] = '[!]'; }
      }
      return out;
    } catch (e) {
      return '[unserializable]';
    }
  }

  function log(level, ev, msg, data) {
    if (inLog) return;
    inLog = true;
    try {
      var it = {
        t: Date.now(),
        p: PAGE,
        l: level,
        e: String(ev || 'ev').slice(0, 60),
        m: msg == null ? '' : mask(String(msg).slice(0, 400)),
        d: data === undefined ? undefined : clean(data),
        q: ++seq
      };
      buf.push(it);
      bytes += approx(it);
      trim();
      if (verbose || level === 'error' || level === 'warn') {
        try { console.warn('[QHLOG:' + PAGE + ']', ev, msg, data === undefined ? '' : data); } catch (e) {}
      }
      scheduleFlush();
    } catch (e) {
      failCount++;
      if (failCount <= 2) { try { console.warn('[QHLOG] internal', e); } catch (_) {} }
    } finally {
      inLog = false;
    }
  }

  /* ================= 3. 落盘 ================= */
  function scheduleFlush() {
    if (!persist || flushTimer) return;
    try {
      flushTimer = setTimeout(function () { flushTimer = null; flush(); }, FLUSH_MS);
    } catch (e) { flushTimer = null; }
  }

  function flush() {
    if (!persist) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(buf));
    } catch (e) {
      // 配额满：先丢最旧一半再试一次，仍失败就彻底停写（内存版继续可用）
      try {
        buf.splice(0, Math.max(1, Math.ceil(buf.length / 2)));
        bytes = 0;
        for (var i = 0; i < buf.length; i++) bytes += approx(buf[i]);
        localStorage.setItem(KEY, JSON.stringify(buf));
      } catch (e2) {
        persist = false;
        if (!warnedStorage) {
          warnedStorage = true;
          try { console.warn('[QHLOG] storage disabled', e2 && e2.name); } catch (_) {}
        }
      }
    }
  }

  function load() {
    try {
      var s = localStorage.getItem(KEY);
      if (!s) return;
      var arr = JSON.parse(s);
      if (!Array.isArray(arr) || !arr.length) return;
      var out = [];
      for (var i = 0; i < arr.length; i++) {
        var it = arr[i];
        if (!it || typeof it.t !== 'number') continue;
        out.push({
          t: it.t, p: it.p || PAGE, l: it.l || 'info',
          e: String(it.e || '').slice(0, 60),
          m: String(it.m || '').slice(0, 400),
          d: it.d, q: it.q || 0
        });
      }
      buf = out;
      bytes = 0;
      for (var j = 0; j < buf.length; j++) {
        bytes += approx(buf[j]);
        if (buf[j].q > seq) seq = buf[j].q;
      }
      trim();
    } catch (e) {
      persist = false;
    }
  }

  load();

  /* ================= 4. fetch 包装 ================= */
  var netSeq = 0;

  function shortUrl(u) {
    var s = String(u == null ? '' : u);
    s = s.replace(/^https?:\/\/[^\/]+/i, '');
    if (s.length > 140) s = s.slice(0, 140) + '…';
    return mask(s);
  }

  function briefBody(b) {
    if (b == null) return '';
    try {
      if (typeof b === 'string') {
        if (b.length > 500) return 'text(' + b.length + ')';
        if (/^[\[{]/.test(b.replace(/^\s+/, ''))) {
          var o = JSON.parse(b);
          if (Array.isArray(o)) return 'json[array ' + o.length + ']';
          var keys = [];
          for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) keys.push(k);
          return 'json{' + keys.slice(0, 12).join(',') + '}';
        }
        return 'text(' + b.length + ')';
      }
      if (typeof FormData !== 'undefined' && b instanceof FormData) {
        var n = 0;
        try { b.forEach(function () { n++; }); } catch (e) {}
        return 'formdata(' + n + ')';
      }
      if (typeof Blob !== 'undefined' && b instanceof Blob) return 'blob(' + b.size + ',' + (b.type || '?') + ')';
      if (typeof URLSearchParams !== 'undefined' && b instanceof URLSearchParams) return 'params(' + b.toString().length + ')';
      return Object.prototype.toString.call(b);
    } catch (e) { return '[body]'; }
  }

  (function hookFetch() {
    var nativeFetch = window.fetch;
    if (typeof nativeFetch !== 'function' || nativeFetch.__qh) return;
    var wrapped = function (input, init) {
      var url = '', method = 'GET';
      try {
        if (typeof input === 'string') url = input;
        else if (input && typeof input.url === 'string') { url = input.url; method = input.method || 'GET'; }
        if (init && init.method) method = String(init.method);
        method = String(method).toUpperCase();
      } catch (e) {}
      var sid = ++netSeq;
      var t0 = Date.now();
      var short = shortUrl(url);
      log('net', 'req', method + ' ' + short, { id: sid, body: briefBody(init && init.body) });

      var ret;
      try {
        ret = nativeFetch.apply(this, arguments);
      } catch (err) {
        log('error', 'req_throw', method + ' ' + short, { id: sid, err: err });
        throw err;
      }
      if (!ret || typeof ret.then !== 'function') return ret;
      return ret.then(function (res) {
        try {
          var ms = Date.now() - t0;
          var ok = !!(res && res.status >= 200 && res.status < 400);
          var size = '';
          try { size = (res.headers && res.headers.get('content-length')) || ''; } catch (e) {}
          log(ok ? 'net' : 'warn', 'res', (res ? res.status : '?') + ' ' + method + ' ' + short,
            { id: sid, ms: ms, size: size });
          if (ms > 3000) log('warn', 'slow', method + ' ' + short + ' 耗时 ' + ms + 'ms', { id: sid });
          if (!ok && res && typeof res.clone === 'function') {
            try {
              res.clone().text().then(function (t) {
                log('warn', 'res_body', short, { id: sid, body: String(t).replace(/\s+/g, ' ').slice(0, 260) });
              }, function () {});
            } catch (e) {}
          }
        } catch (e) {}
        return res;
      }, function (err) {
        try {
          log('error', 'req_fail', method + ' ' + short, {
            id: sid, ms: Date.now() - t0,
            name: (err && err.name) || '', msg: (err && err.message) || String(err)
          });
        } catch (e) {}
        throw err;
      });
    };
    wrapped.__qh = 1;
    try { window.fetch = wrapped; } catch (e) {}
  })();

  /* ================= 5. 全局钩子 ================= */
  function onError(ev) {
    try {
      var t = ev && ev.target;
      if (t && t !== window && t !== document && (t.src || t.href)) {
        log('error', 'res_fail', (t.tagName || '?') + ' ' + shortUrl(t.src || t.href), {
          tag: String(t.tagName || ''), url: shortUrl(t.src || t.href)
        });
        return;
      }
      var msg = (ev && ev.message) ? ev.message : 'unknown error';
      var where = '';
      if (ev && ev.filename) {
        where = shortUrl(ev.filename) + (ev.lineno ? ':' + ev.lineno + ':' + (ev.colno || 0) : '');
      }
      log('error', 'js_error', msg, {
        at: where,
        name: (ev && ev.error && ev.error.name) || '',
        stack: (ev && ev.error && ev.error.stack) ? ev.error.stack : ''
      });
    } catch (e) {}
  }

  function onRejection(ev) {
    try {
      var r = ev && ev.reason;
      var msg = (r && r.message) ? r.message : String(r);
      log('error', 'promise_reject', msg, {
        name: (r && r.name) || '',
        stack: (r && r.stack) ? r.stack : '',
        type: Object.prototype.toString.call(r)
      });
    } catch (e) {}
  }

  try { window.addEventListener('error', onError, true); } catch (e) {}
  try { window.addEventListener('unhandledrejection', onRejection); } catch (e) {}

  try {
    window.addEventListener('offline', function () { log('warn', 'net_state', 'offline', {}); });
    window.addEventListener('online', function () { log('info', 'net_state', 'online', {}); });
  } catch (e) {}

  try {
    document.addEventListener('visibilitychange', function () {
      var v = document.visibilityState;
      log('info', 'visibility', v, {});
      if (v === 'hidden' && FLUSH_ON_HIDE) {
        if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
        flush();
      }
    });
  } catch (e) {}

  try {
    window.addEventListener('pagehide', function (e) {
      log('info', 'bye', 'pagehide', { persisted: !!(e && e.persisted) });
      if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
      flush();
    });
  } catch (e) {}

  try {
    window.addEventListener('beforeunload', function () {
      log('info', 'bye', 'beforeunload', {});
      if (flushTimer) { clearTimeout(flushTimer); flushTimer = null; }
      flush();
    });
  } catch (e) {}

  /* ================= 6. 环境头部 ================= */
  function fmt2(n) { return n < 10 ? '0' + n : '' + n; }

  function fmtTime(ts) {
    var d = new Date(ts);
    return fmt2(d.getHours()) + ':' + fmt2(d.getMinutes()) + ':' + fmt2(d.getSeconds()) + '.' + ('00' + d.getMilliseconds()).slice(-3);
  }

  function fmtFull(ts) {
    var d = new Date(ts);
    return d.getFullYear() + '-' + fmt2(d.getMonth() + 1) + '-' + fmt2(d.getDate()) + ' ' +
      fmt2(d.getHours()) + ':' + fmt2(d.getMinutes()) + ':' + fmt2(d.getSeconds());
  }

  function browserName() {
    var m;
    if ((m = /(Edg|Edge)\/([\d.]+)/.exec(UA))) return 'Edge ' + m[2];
    if ((m = /(OPR)\/([\d.]+)/.exec(UA))) return 'Opera ' + m[2];
    if ((m = /(Chrome)\/([\d.]+)/.exec(UA))) return 'Chrome ' + m[2];
    if ((m = /(Firefox)\/([\d.]+)/.exec(UA))) return 'Firefox ' + m[2];
    if ((m = /Version\/([\d.]+).*Safari/.exec(UA))) return 'Safari ' + m[1];
    if (/MicroMessenger/i.test(UA)) return 'WeChat WebView';
    return UA.slice(0, 60);
  }

  function netInfo() {
    try {
      var c = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      if (!c) return '';
      var a = [];
      if (c.effectiveType) a.push(c.effectiveType);
      if (c.downlink) a.push('↓' + c.downlink + 'Mbps');
      if (c.rtt) a.push('rtt ' + c.rtt + 'ms');
      return a.length ? ' / ' + a.join(' ') : '';
    } catch (e) { return ''; }
  }

  function memInfo() {
    try {
      var m = performance.memory;
      if (!m) return 'n/a';
      return Math.round(m.usedJSHeapSize / 1048576) + '/' + Math.round(m.jsHeapSizeLimit / 1048576) + ' MB';
    } catch (e) { return 'n/a'; }
  }

  function storageInfo() {
    try {
      var s = localStorage.getItem(KEY) || '';
      return Math.round(s.length / 1024) + ' KB';
    } catch (e) { return 'n/a'; }
  }

  function navType() {
    try {
      var n = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
      if (n && n.type) return n.type;
    } catch (e) {}
    try {
      var t = performance.timing;
      var d = Math.round(t.responseEnd - t.navigationStart);
      if (isFinite(d) && d > 0) return 'nav(t=' + d + 'ms)';
    } catch (e) {}
    return '?';
  }

  function buildHeader() {
    var L = [];
    L.push('==================== 303329.xyz 诊断日志 ====================');
    L.push('导出时间   : ' + fmtFull(Date.now()) + ' (UTC' + tzOffset() + ')');
    L.push('页面       : ' + PAGE + '    ' + (location.href || ''));
    L.push('版本       : ' + VER);
    L.push('会话标识   : ' + SID);
    L.push('用户标识   : ' + (UID ? maskId(UID) : '未登录 / 游客') + (UID ? '   (' + UID.split(':')[0] + ')' : ''));
    L.push('浏览器     : ' + browserName());
    L.push('系统语言   : ' + (navigator.platform || '?') + ' / ' + (navigator.language || '?') + ' / ' + tzName());
    L.push('屏幕       : ' + screenInfo() + '   视口 ' + window.innerWidth + 'x' + window.innerHeight);
    L.push('网络       : ' + (navigator.onLine ? 'online' : 'offline') + netInfo());
    L.push('内存       : ' + memInfo());
    L.push('日志       : ' + buf.length + ' 条（上限 ' + MAX_ITEMS + '）/ 落盘 ' + storageInfo() + ' / 写入' + (persist ? '正常' : '已降级为内存'));
    L.push('导航       : ' + navType() + '   referrer=' + (document.referrer ? shortUrl(document.referrer) : '无'));
    L.push('可见性     : ' + (document.visibilityState || '?') + '   屏幕方向 ' + orientation());
    L.push('UA         : ' + UA);
    L.push('============================================================');
    return L.join('\n');
  }

  function tzOffset() {
    try {
      var m = -new Date().getTimezoneOffset();
      return (m >= 0 ? '+' : '-') + fmt2(Math.floor(Math.abs(m) / 60)) + ':' + fmt2(Math.abs(m) % 60);
    } catch (e) { return '+00:00'; }
  }

  function screenInfo() {
    try {
      return screen.width + 'x' + screen.height + ' @' + (window.devicePixelRatio || 1) + 'x';
    } catch (e) { return 'n/a'; }
  }

  function orientation() {
    try {
      if (screen.orientation && screen.orientation.type) return screen.orientation.type;
      if (window.orientation !== undefined) return 'angle ' + window.orientation;
    } catch (e) {}
    return '?';
  }

  function tzName() {
    try { return Intl.DateTimeFormat().resolvedOptions().timeZone || '?'; } catch (e) { return '?'; }
  }

  function line(it) {
    var s = '[' + fmtTime(it.t) + '] ' + pad(it.l.toUpperCase(), 5) + ' ' + pad(it.e, 16) + ' ' + (it.m || '');
    if (it.p && it.p !== PAGE) s = '[' + fmtTime(it.t) + '] ' + pad(it.l.toUpperCase(), 5) + ' {' + it.p + '} ' + it.e + ' ' + (it.m || '');
    if (it.d !== undefined && it.d !== null) {
      var d = '';
      try { d = JSON.stringify(it.d); } catch (e) { d = '[data]'; }
      if (d && d !== '{}') s += '  · ' + (d.length > 700 ? d.slice(0, 700) + '…' : d);
    }
    return s;
  }

  function pad(s, n) {
    s = String(s == null ? '' : s);
    while (s.length < n) s += ' ';
    return s.slice(0, n);
  }

  function buildText() {
    var head = buildHeader();
    var body = [];
    for (var i = 0; i < buf.length; i++) body.push(line(buf[i]));
    return head + '\n' + body.join('\n') + '\n';
  }

  /* ================= 7. 导出 UI ================= */
  function download(txt) {
    var name = 'qh-log-' + PAGE + '-' + Date.now() + '.txt';
    try {
      var blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
      if (navigator.msSaveOrOpenBlob) { navigator.msSaveOrOpenBlob(blob, name); return true; }
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = name;
      a.rel = 'noopener';
      a.style.cssText = 'position:fixed;left:-9999px;top:-9999px';
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        try { a.remove(); URL.revokeObjectURL(url); } catch (e) {}
      }, 5000);
      return true;
    } catch (e) {
      return false;
    }
  }

  function copyText(txt, btn) {
    var done = function () {
      if (!btn) return;
      var old = btn.textContent;
      btn.textContent = '已复制';
      setTimeout(function () { btn.textContent = old; }, 1500);
    };
    var legacy = function () {
      try {
        var ta = document.getElementById('qhlog-ta');
        if (ta) {
          ta.focus();
          ta.select();
          try { ta.setSelectionRange(0, txt.length); } catch (e) {}
          document.execCommand('copy');
          done();
        }
      } catch (e) {}
    };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(txt).then(done, legacy);
      } else {
        legacy();
      }
    } catch (e) { legacy(); }
  }

  function showText(txt) {
    try {
      var old = document.getElementById('qhlog-modal');
      if (old) old.parentNode.removeChild(old);

      var wrap = document.createElement('div');
      wrap.id = 'qhlog-modal';
      wrap.style.cssText = 'position:fixed;inset:0;z-index:2147483600;background:rgba(8,8,10,.86);' +
        'display:flex;align-items:center;justify-content:center;padding:14px;' +
        'font:12px/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;';

      var box = document.createElement('div');
      box.style.cssText = 'width:min(940px,100%);max-height:92vh;display:flex;flex-direction:column;gap:10px;' +
        'background:#15161a;border:1px solid #34363f;border-radius:12px;padding:14px;color:#e9e9ef;' +
        'box-shadow:0 24px 70px rgba(0,0,0,.6);';

      var head = document.createElement('div');
      head.style.cssText = 'display:flex;align-items:center;gap:10px;flex-wrap:wrap;';
      head.innerHTML = '<b style="font:600 13px -apple-system,sans-serif">诊断日志</b>' +
        '<span style="font:11px -apple-system,sans-serif;color:#8b8f9a">' + buf.length + ' 条 · ' +
        Math.round(txt.length / 1024) + ' KB · 全选复制后发给站长</span>';

      var spacer = document.createElement('span');
      spacer.style.cssText = 'flex:1';
      head.appendChild(spacer);

      var bCopy = document.createElement('button');
      bCopy.type = 'button';
      bCopy.textContent = '复制全部';
      bCopy.style.cssText = 'border:0;border-radius:7px;padding:7px 12px;background:#5b5bd6;color:#fff;' +
        'font:600 12px -apple-system,sans-serif;cursor:pointer';

      var bClose = document.createElement('button');
      bClose.type = 'button';
      bClose.textContent = '关闭';
      bClose.style.cssText = 'border:1px solid #3a3d47;border-radius:7px;padding:7px 12px;background:transparent;' +
        'color:#c9ccd6;font:600 12px -apple-system,sans-serif;cursor:pointer';

      var ta = document.createElement('textarea');
      ta.id = 'qhlog-ta';
      ta.readOnly = true;
      ta.spellcheck = false;
      ta.value = txt;
      ta.style.cssText = 'width:100%;height:min(62vh,560px);resize:vertical;background:#0f1014;color:#d8dae2;' +
        'border:1px solid #2c2e36;border-radius:8px;padding:10px;outline:none;' +
        'font:11px/1.6 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;white-space:pre;overflow:auto';

      bCopy.onclick = function () { copyText(txt, bCopy); };
      bClose.onclick = function () { try { wrap.parentNode.removeChild(wrap); } catch (e) {} };

      head.appendChild(bCopy);
      head.appendChild(bClose);
      box.appendChild(head);
      box.appendChild(ta);
      wrap.appendChild(box);

      wrap.addEventListener('click', function (e) { if (e.target === wrap) bClose.onclick(); });
      (document.body || document.documentElement).appendChild(wrap);
      setTimeout(function () {
        try { ta.focus(); ta.setSelectionRange(0, 0); ta.scrollTop = 0; } catch (e) {}
      }, 60);
    } catch (e) {}
  }

  function exportLog() {
    var txt = '';
    try { txt = buildText(); } catch (e) { txt = '日志生成失败: ' + e; }
    log('info', 'export', '导出诊断日志', { items: buf.length, chars: txt.length });
    var restricted = /MicroMessenger|QQ\/|Weibo|AlipayClient|DingTalk|Lark|wxwork|baiduboxapp|Quark/i.test(UA);
    var ok = false;
    if (!restricted) { ok = download(txt); }
    if (ok) {
      log('info', 'export_ok', '已触发下载', {});
      toast('日志已导出到下载文件夹');
    } else {
      log('info', 'export_modal', '改用弹窗展示', { restricted: restricted });
      showText(txt);
    }
  }

  function toast(msg) {
    try {
      var el = document.createElement('div');
      el.textContent = msg;
      el.style.cssText = 'position:fixed;left:50%;bottom:64px;transform:translateX(-50%);z-index:2147483601;' +
        'background:rgba(20,21,26,.95);color:#e9e9ef;border:1px solid #3a3d47;border-radius:999px;' +
        'padding:9px 18px;font:12px -apple-system,sans-serif;pointer-events:none;opacity:0;transition:opacity .2s';
      (document.body || document.documentElement).appendChild(el);
      setTimeout(function () { el.style.opacity = '1'; }, 20);
      setTimeout(function () {
        el.style.opacity = '0';
        setTimeout(function () { try { el.remove(); } catch (e) {} }, 260);
      }, 2200);
    } catch (e) {}
  }

  function installBtn() {
    try {
      if (document.getElementById('qhlog-btn')) return;
      var b = document.createElement('button');
      b.id = 'qhlog-btn';
      b.type = 'button';
      b.title = '导出诊断日志';
      b.setAttribute('aria-label', '导出诊断日志');
      b.textContent = '诊断';
      b.style.cssText = 'position:fixed;right:6px;bottom:4px;z-index:2147483599;padding:2px 6px;border:0;' +
        'border-radius:4px;background:transparent;color:inherit;font:10px/1.5 -apple-system,BlinkMacSystemFont,sans-serif;' +
        'opacity:.18;cursor:pointer;transition:opacity .2s;pointer-events:auto;-webkit-user-select:none;user-select:none';
      b.onmouseenter = function () { b.style.opacity = '.85'; };
      b.onmouseleave = function () { b.style.opacity = '.18'; };
      b.ontouchstart = function () { b.style.opacity = '.85'; };
      b.onclick = function (e) {
        try { e.preventDefault(); } catch (err) {}
        try { exportLog(); } catch (err) {}
      };
      (document.body || document.documentElement).appendChild(b);
    } catch (e) {}
  }

  /* ================= 8. 启动 ================= */
  function boot() {
    log('info', 'boot', '页面启动', {
      nav: navType(),
      vis: document.visibilityState,
      ref: document.referrer ? shortUrl(document.referrer) : '',
      dpr: window.devicePixelRatio || 1,
      vw: window.innerWidth,
      vh: window.innerHeight
    });
    try {
      window.addEventListener('load', function () {
        var ms = 0;
        try {
          var n = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
          ms = n ? Math.round(n.loadEventEnd || n.duration || 0) : 0;
        } catch (e) {}
        log('info', 'page_load', 'load 完成', { ms: ms });
      });
    } catch (e) {}
  }

  boot();

  if (document.body) {
    installBtn();
  } else {
    try {
      document.addEventListener('DOMContentLoaded', installBtn);
    } catch (e) {}
    // 兜底：module 脚本会阻塞 DOMContentLoaded，这里轮询 body 一出现就挂按钮
    try {
      var btnTries = 0;
      var btnTimer = setInterval(function () {
        if (document.body) {
          clearInterval(btnTimer);
          installBtn();
        } else if (++btnTries > 150) {
          clearInterval(btnTimer);
        }
      }, 100);
    } catch (e) {}
  }

  window.QHLOG = {
    __qh: 1,
    page: PAGE,
    ver: VER,
    sid: SID,
    log: log,
    act: function (name, data, msg) { log('act', name || 'action', msg || '', data); },
    info: function (ev, msg, data) { log('info', ev, msg, data); },
    warn: function (ev, msg, data) { log('warn', ev, msg, data); },
    error: function (ev, msg, data) { log('error', ev, msg, data); },
    export: exportLog,
    text: buildText,
    debug: function (on) { verbose = !!on; },
    clear: function () {
      buf = [];
      bytes = 0;
      try { localStorage.removeItem(KEY); } catch (e) {}
    },
    stats: function () { return { items: buf.length, bytes: bytes, persist: persist, page: PAGE, ver: VER, sid: SID }; }
  };

  /* 业务侧统一入口：永不抛错，未加载 logger 也不影响原逻辑 */
  window.qhAct = function (name, data, msg) {
    try {
      if (window.QHLOG) window.QHLOG.act(name, data, msg);
    } catch (e) {}
  };
})();
