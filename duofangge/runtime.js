/* =========================================================================
 * 躲方格2024 —— 编程猫 Kitten 项目 -> HTML 运行时
 * 说明：
 *   - 解释执行 game.js 中的积木脚本（block graph）
 *   - 舞台坐标系：原点居中，x∈[-w/2,w/2]，y 向上，y∈[-h/2,h/2]
 *   - 离线模式：云变量落本地(localStorage)，排行榜仅展示本地数据
 * ========================================================================= */
(function () {
  "use strict";

  const G = window.GAME;
  const SW = G.stage.width;   // 620
  const SH = G.stage.height;  // 900

  // ---------- 键盘码 ----------
  const KEYCODE = {
    32: "Space", 37: "Left", 38: "Up", 39: "Right", 40: "Down",
    65: "A", 66: "B", 67: "C", 68: "D", 69: "E", 70: "F", 71: "G", 72: "H",
    73: "I", 74: "J", 75: "K", 76: "L", 77: "M", 78: "N", 79: "O", 80: "P",
    81: "Q", 82: "R", 83: "S", 84: "T", 85: "U", 86: "V", 87: "W", 88: "X",
    89: "Y", 90: "Z",
    48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7",
    56: "8", 57: "9",
  };

  // ---------- DOM ----------
  const canvas = document.getElementById("stage");
  const ctx = canvas.getContext("2d");
  canvas.width = SW;
  canvas.height = SH;

  const penCanvas = document.createElement("canvas");
  penCanvas.width = SW;
  penCanvas.height = SH;
  const penCtx = penCanvas.getContext("2d");

  const bubbleLayer = document.getElementById("bubbleLayer");
  const overlay = document.getElementById("overlay");
  const rankingPanel = document.getElementById("rankingPanel");
  const rankingBody = document.getElementById("rankingBody");

  // ---------- 运行时全局状态 ----------
  const runtime = {
    epoch: 0,
    threads: new Set(),
    answer: "",
    choice: { content: "", index: 0 },
    keysDown: new Set(),
    mouse: { x: 0, y: 0 },
    timerValue: 0,
    timerRunning: false,
    rankingVisible: false,
    activeSceneId: null,
    assets: {},   // asset path -> HTMLImageElement
    sprites: {},  // id -> Sprite
    clones: [],   // live clones (Sprite)
    variableShown: {},   // varId -> bool (显示状态)
    cloudShown: {},      // varId -> bool
  };

  // ---------- 变量 ----------
  const vars = {};        // varId -> value
  const cloudVars = {};   // varId -> value (localStorage 持久化)
  const LS_KEY = "duofangge_cloud";

  function loadCloud() {
    try {
      const s = localStorage.getItem(LS_KEY);
      if (s) Object.assign(cloudVars, JSON.parse(s));
    } catch (e) {}
  }
  function saveCloud() {
    try { localStorage.setItem(LS_KEY, JSON.stringify(cloudVars)); } catch (e) {}
  }

  G.variables.forEach(v => { vars[v.id] = v.value; runtime.variableShown[v.id] = !!v.visible; });
  G.cloudVariables.forEach(v => {
    if (!(v.id in cloudVars)) cloudVars[v.id] = 0;
    runtime.cloudShown[v.id] = !!v.visible;
  });

  function varName(id) {
    const v = G.variables.find(x => x.id === id) || G.cloudVariables.find(x => x.id === id);
    return v ? v.name : id;
  }

  // ---------- 连接图构建 ----------
  function buildConns(connections) {
    const out = {};
    for (const bid in connections) {
      const d = { next: null, value: {}, stmt: {} };
      for (const tid in connections[bid]) {
        const m = connections[bid][tid];
        if (m.type === "next") d.next = tid;
        else if (m.type === "input") {
          if (m.input_type === "value") d.value[m.input_name] = tid;
          else d.stmt[m.input_name] = tid;
        }
      }
      out[bid] = d;
    }
    return out;
  }

  // ---------- 精灵 ----------
  class Sprite {
    constructor(def) {
      this.id = def.id;
      this.name = def.name;
      this.scene = def.scene;
      this.x = def.x; this.y = def.y;
      this.scale = def.scale;
      this.rotation = def.rotation || 0;
      this.visible = !!def.visible;
      this.draggable = def.draggable;
      this.currentStyleId = def.currentStyleId;
      this.costumes = def.costumes;   // styleId -> {asset,name,pivot,rotateCenter}
      this.scripts = def.scripts;     // {blocks, connections}
      this.blocks = def.scripts && def.scripts.blocks || {};
      this.conns = buildConns(def.scripts && def.scripts.connections || {});
      this.isClone = false;
      this.sourceId = null;
      this.effect = { filter: "none" };
      this.opacity = 1;
      this.glide = null; // 滑行动画状态
    }

    costume() {
      return this.costumes[this.currentStyleId] || null;
    }
    getW() {
      const c = this.costume();
      const img = c && c.asset ? runtime.assets[c.asset] : null;
      const nw = img && img.naturalWidth ? img.naturalWidth : 100;
      return nw * this.scale / 100;
    }
    getH() {
      const c = this.costume();
      const img = c && c.asset ? runtime.assets[c.asset] : null;
      const nh = img && img.naturalHeight ? img.naturalHeight : 100;
      return nh * this.scale / 100;
    }
    // 世界坐标 AABB（y 向上）
    bounds() {
      const w = this.getW(), h = this.getH();
      return { left: this.x - w / 2, right: this.x + w / 2, top: this.y + h / 2, bottom: this.y - h / 2 };
    }
  }

  // 初始化精灵
  G.sprites.forEach(def => { runtime.sprites[def.id] = new Sprite(def); });

  // ---------- 场景 ----------
  const scenes = G.scenes;
  const sceneById = {};
  scenes.forEach(s => { sceneById[s.id] = s; });

  function actorsInScene(sceneId) {
    return Object.values(runtime.sprites).filter(s => s.scene === sceneId);
  }
  // 图层顺序：按 group_order 内 group -> actors
  function sceneLayerOrder(sceneId) {
    const scene = sceneById[sceneId];
    const seen = new Set();
    const order = [];
    (scene.groupOrder || []).forEach(gid => {
      const grp = G.groups[gid];
      if (!grp) return;
      (grp.actors || []).forEach(aid => {
        const sp = runtime.sprites[aid];
        if (sp && sp.scene === sceneId && !seen.has(aid)) { seen.add(aid); order.push(sp); }
      });
    });
    // 补上未在 group_order 中的角色
    actorsInScene(sceneId).forEach(sp => { if (!seen.has(sp.id)) order.push(sp); });
    return order;
  }

  function sceneSprite(sceneId) {
    const scene = sceneById[sceneId];
    if (!scene) return null;
    return new Sprite({
      id: "__scene", name: "舞台", scene: sceneId, x: 0, y: 0, scale: 100,
      visible: true, costumes: {}, scripts: scene.scripts,
    });
  }

  // ---------- 线程 ----------
  class ThreadAbort extends Error {}
  let threadSeq = 0;

  function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
  }
  async function tick() {
    await new Promise(res => requestAnimationFrame(res));
  }
  function checkAbort(th) {
    if (th.aborted || th.epoch !== runtime.epoch) throw new ThreadAbort();
  }

  function spawn(fn, self) {
    const th = { id: ++threadSeq, epoch: runtime.epoch, aborted: false, self };
    runtime.threads.add(th);
    fn(th).catch(err => {
      if (!(err instanceof ThreadAbort)) console.error(err);
    }).finally(() => runtime.threads.delete(th));
    return th;
  }

  // ---------- 积木求值 ----------
  function evalValue(bid, self, th) {
    const b = self.blocks[bid];
    if (!b) return 0;
    const f = b.fields || {};
    const c = self.conns[bid] || { value: {} };
    const V = name => (name in c.value ? evalValue(c.value[name], self, th) : (name in (b.shadows||{}) ? 0 : 0));

    switch (b.type) {
      case "math_number":
        if ("NUM" in f) return Number(f.NUM);
        if ("TEXT" in f) return f.TEXT;
        return 0;
      case "text":
        return f.TEXT || "";
      case "variables_get":
        return vars[f.VAR];
      case "cloud_variables_get":
        return cloudVars[f.VAR];
      case "broadcast_input":
        return f.MESSAGE || "";
      case "logic_compare": {
        const a = V("A"), bb = V("B");
        switch (f.OP) {
          case "EQ": return a == bb;
          case "NEQ": return a != bb;
          case "LT": return Number(a) < Number(bb);
          case "LTE": return Number(a) <= Number(bb);
          case "GT": return Number(a) > Number(bb);
          case "GTE": return Number(a) >= Number(bb);
        }
        return false;
      }
      case "math_arithmetic": {
        const a = Number(V("A")), bb = Number(V("B"));
        switch (f.OP) {
          case "ADD": return a + bb;
          case "MINUS": return a - bb;
          case "MULTIPLY": return a * bb;
          case "DIVIDE": return a / bb;
          case "POWER": return Math.pow(a, bb);
          case "MOD": return a % bb;
        }
        return 0;
      }
      case "math_round": {
        const n = Number(V("NUM"));
        if (f.OP === "ROUNDDOWN") return Math.floor(n);
        if (f.OP === "ROUNDUP") return Math.ceil(n);
        return Math.round(n);
      }
      case "random": {
        const a = Math.round(Number(V("a"))), bb = Math.round(Number(V("b")));
        const lo = Math.min(a, bb), hi = Math.max(a, bb);
        return Math.floor(Math.random() * (hi - lo + 1)) + lo;
      }
      case "text_join": {
        let n = 2;
        const m = /items="(\d+)"/.exec(b.mutation || "");
        if (m) n = parseInt(m[1], 10);
        let out = "";
        for (let i = 0; i < n; i++) out += String(V("ADD" + i));
        return out;
      }
      case "get_answer": return runtime.answer;
      case "get_timer": return runtime.timerValue;
      case "get_stage_info": return f.info === "width" ? SW : SH;
      case "get_mouse_info": return f.position === "x" ? runtime.mouse.x : runtime.mouse.y;
      case "get_3": {
        const target = f.sprite === "__self" ? self : runtime.sprites[f.sprite];
        if (!target) return 0;
        switch (f.attribute) {
          case "0": return target.x;
          case "1": return target.y;
          case "2": return target.rotation;
          case "5": return target.scale;
          default: return 0;
        }
      }
      case "get_current_scene": return f.scene;   // 场景常量
      case "get_current_costume": return f.style_id; // 造型常量
      case "get_choice_or_index":
        return f.type === "select_content" ? runtime.choice.content : runtime.choice.index;
      case "bump":
        return touching(f.sprite1, f.sprite2, self);
      case "self_out_of_boundary": return outOfBoundary(self, f.boundary);
      case "check_key": {
        const k = KEYCODE[parseInt(f.key, 10)] || f.key;
        return runtime.keysDown.has(k);
      }
      case "is_ranking_show_hide":
        return f.VAL === "hide" ? !runtime.rankingVisible : runtime.rankingVisible;
      case "user_id_get": return "local";
      case "get_audios":
      case "get_whole_audios":
        return f.sound_id || "";
      default:
        return 0;
    }
  }

  function resolveSprites(ref, self) {
    if (ref === "__self") return [self];
    const base = runtime.sprites[ref];
    if (!base) return [];
    return [base].concat(runtime.clones.filter(c => c.sourceId === ref));
  }

  function touching(refA, refB, self) {
    const allA = resolveSprites(refA, self);
    const allB = resolveSprites(refB, self);
    const SHRINK = 0.82;
    for (const sa of allA) {
      if (!sa.visible) continue;
      for (const sb of allB) {
        if (!sb.visible || sa === sb) continue;
        const ba = sa.bounds(), bb = sb.bounds();
        const wa = (ba.right - ba.left) * SHRINK;
        const ha = (ba.top - ba.bottom) * SHRINK;
        const wb = (bb.right - bb.left) * SHRINK;
        const hb = (bb.top - bb.bottom) * SHRINK;
        if (Math.abs(sa.x - sb.x) < (wa + wb) / 2 &&
            Math.abs(sa.y - sb.y) < (ha + hb) / 2) {
          return true;
        }
      }
    }
    return false;
  }

  function outOfBoundary(self, boundary) {
    const b = self.bounds();
    const hw = SW / 2, hh = SH / 2;
    switch (String(boundary)) {
      case "0": return b.bottom > hh;   // 上方出界
      case "1": return b.top < -hh;     // 下方出界
      case "2": return b.right < -hw;   // 左侧出界
      case "3": return b.top < -hh;     // 下方出界（本项目实际使用，方块下落到底）
      case "4": return b.left > hw;     // 右侧出界
      default: return false;
    }
  }

  // ---------- 积木执行 ----------
  async function execBlock(bid, self, th) {
    checkAbort(th);
    const b = self.blocks[bid];
    if (!b) return;
    const f = b.fields || {};
    const c = self.conns[bid] || { next: null, value: {}, stmt: {} };
    const V = name => (name in c.value ? evalValue(c.value[name], self, th) : 0);
    const body = c.stmt.DO !== undefined ? c.stmt.DO : (c.stmt.DO0 !== undefined ? c.stmt.DO0 : null);
    const runBody = async (id) => { if (id) await runChain(id, self, th); };

    switch (b.type) {
      case "controls_if": {
        if (evalValue(c.value.IF0, self, th)) {
          await runBody(c.stmt.DO0);
        } else if (c.stmt.ELSE) {
          await runChain(c.stmt.ELSE, self, th);
        }
        return;
      }
      case "repeat_forever":
        while (true) { checkAbort(th); await runBody(body); await tick(); }
      case "repeat_n_times": {
        const n = Math.max(0, Math.round(Number(V("times"))));
        for (let i = 0; i < n; i++) { checkAbort(th); await runBody(body); }
        return;
      }
      case "repeat_forever_until": {
        while (!evalValue(c.value.condition, self, th)) { checkAbort(th); await runBody(body); await tick(); }
        return;
      }
      case "when": {
        while (!evalValue(c.value.condition, self, th)) { checkAbort(th); await tick(); }
        await runBody(body);
        return;
      }
      case "wait": {
        const secs = Number(V("time")) || 0;
        const target = performance.now() + secs * 1000;
        while (performance.now() < target) { checkAbort(th); await tick(); }
        return;
      }
      case "variables_set":
        vars[f.VAR] = evalValue(c.value.VALUE, self, th);
        return;
      case "change_variable":
        vars[f.valname] = Number(vars[f.valname] || 0) + (f.method === "increase" ? 1 : -1) * Number(V("n"));
        return;
      case "change_cloud_variable":
        cloudVars[f.valname] = Number(cloudVars[f.valname] || 0) + (f.method === "increase" ? 1 : -1) * Number(V("n"));
        saveCloud();
        return;
      case "self_broadcast":
        broadcast(V("message"));
        return;
      case "self_disappear": self.visible = false; return;
      case "self_appear": self.visible = true; return;
      case "self_ask": {
        runtime.answer = await askModal(String(V("text")));
        return;
      }
      case "create_stage_dialog": {
        showBubble(self, String(V("text")));
        return;
      }
      case "ask_and_choose": {
        const q = String(V("question"));
        let n = 2;
        const m = /items="(\d+)"/.exec(b.mutation || "");
        if (m) n = parseInt(m[1], 10);
        const choices = [];
        for (let i = 0; i < n; i++) choices.push(String(V("CHOICE" + i)));
        const idx = await chooseModal(q, choices);
        runtime.choice.index = idx + 1;             // 1-based
        runtime.choice.content = choices[idx];
        return;
      }
      case "self_set_position":
        if (f.coordinary === "x") self.x = Number(V("value"));
        else self.y = Number(V("value"));
        return;
      case "self_change_coordinate": {
        const d = Number(V("value")) * (f.increase === "decrease" ? -1 : 1);
        if (f.coordinary === "x") self.x += d; else self.y += d;
        return;
      }
      case "self_move_to":
        self.x = Number(V("x")); self.y = Number(V("y")); return;
      case "self_glide_to": {
        const secs = Number(V("time")) || 1;
        const tx = Number(V("x")), ty = Number(V("y"));
        const sx = self.x, sy = self.y;
        const t0 = performance.now();
        while (true) {
          checkAbort(th);
          const p = Math.min(1, (performance.now() - t0) / (secs * 1000));
          self.x = sx + (tx - sx) * p;
          self.y = sy + (ty - sy) * p;
          if (p >= 1) break;
          await tick();
        }
        return;
      }
      case "self_change_scale_2":
        self.scale += Number(V("scale")) * (f.increase === "decrease" ? -1 : 1);
        return;
      case "set_scale":
        self.scale = Number(V("scale")); return;
      case "set_costume": {
        const sid = c.value.index ? evalValue(c.value.index, self, th) : f.style_id;
        if (sid && self.costumes[sid]) self.currentStyleId = sid;
        return;
      }
      case "set_entity_show_hide": {
        const t = runtime.sprites[f.sprite];
        if (t) t.visible = f.type === "show";
        return;
      }
      case "self_gradually_show_hide": {
        const secs = Number(V("time")) || 0.5;
        const show = f.is_show === "show";
        self.visible = true;
        const t0 = performance.now();
        while (true) {
          checkAbort(th);
          const p = Math.min(1, (performance.now() - t0) / (secs * 1000));
          self.opacity = show ? p : (1 - p);
          if (p >= 1) break;
          await tick();
        }
        if (!show) self.visible = false;
        self.opacity = 1;
        return;
      }
      case "self_set_effect_2": {
        const val = Number(V("val")) || 0;
        self.effect.filter = (f.scope === "0" || f.scope === 0) ? "hue-rotate(" + val + "deg)" : "none";
        return;
      }
      case "self_set_pen_color":
        self.penColor = f.color || "#000"; return;
      case "stamp": {
        const text = String(V("text"));
        const size = Number(V("size")) || 18;
        const align = f.align || "left";
        drawStamp(self, text, size, align);
        return;
      }
      case "clear_drawing":
        penCtx.clearRect(0, 0, SW, SH); return;
      case "dispose_clone":
        disposeClone(self); return;
      case "mirror":
        spawnMirror(f.sprite === "__self" ? self : runtime.sprites[f.sprite]); return;
      case "switch_to_screen":
        switchScene(evalValue(c.value.screen, self, th)); return;
      case "set_timer_state":
        if (f.actions === "start") runtime.timerRunning = true;
        else if (f.actions === "stop") runtime.timerRunning = false;
        else if (f.actions === "reset") runtime.timerValue = 0;
        return;
      case "show_hide_timer":
        document.getElementById("timerDisplay").style.display = f.state === "show" ? "block" : "none";
        return;
      case "show_hide_variable":
        runtime.variableShown[f.VAR] = f.FUNC === "show";
        return;
      case "show_hide_cloud_variable":
        runtime.cloudShown[f.VAR] = f.FUNC === "show";
        return;
      case "play_audio_2":
      case "stop_audio_2":
        return; // 音频已剥离
      case "show_ranking": {
        const name = varName(f.VAR);
        runtime.rankingVisible = true;
        rankingBody.innerHTML = "<div class='rank-row'>本地数据 · " + escapeHtml(name) + "</div>" +
          "<div class='rank-row'>你：" + Number(cloudVars[f.VAR] || 0) + "</div>";
        rankingPanel.style.display = "block";
        return;
      }
      case "hide_ranking":
        runtime.rankingVisible = false;
        rankingPanel.style.display = "none";
        return;
      default:
        return;
    }
  }

  async function runChain(bid, self, th) {
    let cur = bid;
    const seen = new Set();
    while (cur && !seen.has(cur)) {
      seen.add(cur);
      checkAbort(th);
      await execBlock(cur, self, th);
      cur = (self.conns[cur] && self.conns[cur].next) || null;
    }
  }

  // 帽子积木的 body：优先 DO 语句输入，否则 next
  function hatBody(self, hatId) {
    const c = self.conns[hatId];
    if (!c) return null;
    if (c.stmt.DO !== undefined) return c.stmt.DO;
    if (c.stmt.DO0 !== undefined) return c.stmt.DO0;
    return c.next;
  }

  function findHats(self, type) {
    const out = [];
    for (const bid in self.blocks) if (self.blocks[bid].type === type) out.push(bid);
    return out;
  }

  // ---------- 广播 ----------
  function broadcast(msg) {
    const listeners = [];
    // 场景级监听
    const sc = sceneSprite(runtime.activeSceneId);
    if (sc && sc.scripts && sc.scripts.blocks) listeners.push(sc);
    // 角色 + 克隆监听
    actorsInScene(runtime.activeSceneId).forEach(sp => listeners.push(sp));
    runtime.clones.forEach(sp => listeners.push(sp));

    listeners.forEach(sp => {
      for (const bid in sp.blocks) {
        const b = sp.blocks[bid];
        if (b.type === "self_listen") {
          const c = sp.conns[bid];
          const msgBid = c && c.value.message;
          const m = msgBid ? evalValue(msgBid, sp, { epoch: runtime.epoch, aborted: false, self: sp }) : "";
          if (m === msg) {
            const body = hatBody(sp, bid);
            if (body) spawn(th => runChain(body, sp, th), sp);
          }
        }
      }
    });
  }

  // ---------- 克隆（镜像） ----------
  function spawnMirror(source) {
    if (!source) return;
    const clone = new Sprite({
      id: "clone_" + (++threadSeq) + "_" + Date.now(),
      name: source.name, scene: source.scene,
      x: source.x, y: source.y, scale: source.scale, rotation: source.rotation,
      visible: source.visible, costumes: source.costumes,
      currentStyleId: source.currentStyleId, scripts: source.scripts,
    });
    clone.isClone = true;
    clone.sourceId = source.id;
    clone.blocks = source.blocks;
    clone.conns = source.conns;
    runtime.clones.push(clone);
    // 运行“作为镜像启动”
    for (const bid in clone.blocks) {
      if (clone.blocks[bid].type === "start_as_a_mirror") {
        const body = hatBody(clone, bid);
        if (body) spawn(th => runChain(body, clone, th), clone);
      }
    }
  }

  function disposeClone(self) {
    const i = runtime.clones.indexOf(self);
    if (i >= 0) runtime.clones.splice(i, 1);
  }

  // 激活场景时启动的角色触发器：on_running_group_activated + when（根积木）
  function activateActorScripts(sp) {
    for (const bid in sp.blocks) {
      const t = sp.blocks[bid].type;
      if (t === "on_running_group_activated" || t === "when") {
        const body = t === "when" ? bid : hatBody(sp, bid);
        if (body) spawn(th => runChain(body, sp, th), sp);
      }
    }
  }

  // ---------- 场景切换 ----------
  function switchScene(targetId) {
    let id = targetId;
    if (id === "__next_scene") {
      const idx = scenes.findIndex(s => s.id === runtime.activeSceneId);
      const next = scenes[(idx + 1) % scenes.length];
      id = next ? next.id : targetId;
    }
    if (!sceneById[id]) id = scenes[0].id;

    runtime.epoch++;
    for (const th of runtime.threads) th.aborted = true;
    runtime.threads.clear();
    runtime.clones = [];
    runtime.activeSceneId = id;
    bubbleLayer.innerHTML = "";

    const sc = sceneSprite(id);
    if (sc && sc.scripts && sc.scripts.blocks) {
      for (const bid in sc.blocks) {
        if (sc.blocks[bid].type === "on_running_group_activated") {
          const body = hatBody(sc, bid);
          if (body) spawn(th => runChain(body, sc, th), sc);
        }
      }
    }
    actorsInScene(id).forEach(activateActorScripts);
  }

  // ---------- 绿旗 ----------
  function greenFlag() {
    loadCloud();
    const first = scenes[0];
    switchScene(first.id);   // 激活初始场景
    // 绿旗：运行场景级 start_on_click（本项目仅“进入界面”有此积木）
    const sc = sceneSprite(first.id);
    if (sc && sc.scripts && sc.scripts.blocks) {
      for (const bid in sc.blocks) {
        if (sc.blocks[bid].type === "start_on_click") {
          const body = hatBody(sc, bid);
          if (body) spawn(th => runChain(body, sc, th), sc);
        }
      }
    }
  }

  // ---------- 输入 ----------
  function stagePointFromEvent(e) {
    const r = canvas.getBoundingClientRect();
    const px = (e.clientX - r.left) * (SW / r.width);
    const py = (e.clientY - r.top) * (SH / r.height);
    return { px, py, x: px - SW / 2, y: SH / 2 - py };
  }

  function hitTest(px, py) {
    // 从最上层到最下层
    const order = sceneLayerOrder(runtime.activeSceneId).slice().reverse();
    for (const sp of order) {
      if (!sp.visible) continue;
      const w = sp.getW(), h = sp.getH();
      const sx = sp.x + SW / 2, sy = SH / 2 - sp.y;
      if (px >= sx - w / 2 && px <= sx + w / 2 && py >= sy - h / 2 && py <= sy + h / 2) {
        return sp;
      }
    }
    return null;
  }

  function dispatchTap(tapped) {
    const listeners = actorsInScene(runtime.activeSceneId).concat(runtime.clones);
    const sc = sceneSprite(runtime.activeSceneId);
    if (sc && sc.scripts && sc.scripts.blocks) listeners.push(sc);
    listeners.forEach(sp => {
      for (const bid in sp.blocks) {
        const b = sp.blocks[bid];
        if (b.type !== "sprite_on_tap") continue;
        const actor = b.fields.actor;
        let match = false;
        if (tapped) {
          const targetIds = new Set([tapped.id]);
          if (tapped.isClone) targetIds.add(tapped.sourceId);
          if (actor === "__self") match = (sp === tapped);
          else match = targetIds.has(actor);
        } else {
          match = (actor === "__scene");
        }
        if (match) {
          const body = hatBody(sp, bid);
          if (body) spawn(th => runChain(body, sp, th), sp);
        }
      }
    });
  }

  canvas.addEventListener("mousemove", e => { const p = stagePointFromEvent(e); runtime.mouse = { x: p.x, y: p.y }; });
  canvas.addEventListener("mousedown", e => {
    const p = stagePointFromEvent(e);
    runtime.mouse = { x: p.x, y: p.y };
    dispatchTap(hitTest(p.px, p.py));
  });
  canvas.addEventListener("touchstart", e => {
    e.preventDefault();
    const t = e.touches[0];
    const p = stagePointFromEvent({ clientX: t.clientX, clientY: t.clientY });
    runtime.mouse = { x: p.x, y: p.y };
    dispatchTap(hitTest(p.px, p.py));
  }, { passive: false });

  window.addEventListener("keydown", e => {
    const k = KEYCODE[e.keyCode] || e.key;
    runtime.keysDown.add(k);
    // on_keydown 帽（仅活跃场景）
    const listeners = actorsInScene(runtime.activeSceneId).concat(runtime.clones);
    const sc = sceneSprite(runtime.activeSceneId);
    if (sc && sc.scripts && sc.scripts.blocks) listeners.push(sc);
    listeners.forEach(sp => {
      for (const bid in sp.blocks) {
        const b = sp.blocks[bid];
        if (b.type === "on_keydown") {
          const kk = KEYCODE[parseInt(b.fields.key, 10)] || b.fields.key;
          if (kk === k) {
            const body = hatBody(sp, bid);
            if (body) spawn(th => runChain(body, sp, th), sp);
          }
        }
      }
    });
  });
  window.addEventListener("keyup", e => {
    const k = KEYCODE[e.keyCode] || e.key;
    runtime.keysDown.delete(k);
  });

  // ---------- 渲染 ----------
  function renderBackground() {
    const scene = sceneById[runtime.activeSceneId];
    const asset = scene && G.styleAssets[scene.styleId];
    const img = asset ? runtime.assets[asset] : null;
    ctx.clearRect(0, 0, SW, SH);
    if (img && img.complete && img.naturalWidth) {
      // 背景造型按自然尺寸居中绘制，超出部分裁剪（与 Kitten 一致）
      const nw = img.naturalWidth, nh = img.naturalHeight;
      ctx.drawImage(img, (SW - nw) / 2, (SH - nh) / 2, nw, nh);
    } else {
      ctx.fillStyle = "#f4f6fb";
      ctx.fillRect(0, 0, SW, SH);
    }
  }

  function drawSprite(sp) {
    if (!sp.visible) return;
    const cost = sp.costume();
    const img = cost && cost.asset ? runtime.assets[cost.asset] : null;
    const w = sp.getW(), h = sp.getH();
    const cx = sp.x + SW / 2, cy = SH / 2 - sp.y;
    ctx.save();
    ctx.globalAlpha = sp.opacity;
    ctx.filter = sp.effect.filter;
    ctx.translate(cx, cy);
    if (sp.rotation) ctx.rotate(-sp.rotation * Math.PI / 180);
    if (img && img.complete && img.naturalWidth) {
      ctx.drawImage(img, -w / 2, -h / 2, w, h);
    } else {
      ctx.fillStyle = "rgba(200,200,200,0.5)";
      ctx.fillRect(-w / 2, -h / 2, w, h);
    }
    ctx.restore();
  }

  function drawStamp(sp, text, size, align) {
    const cx = sp.x + SW / 2, cy = SH / 2 - sp.y;
    penCtx.save();
    penCtx.font = size + "px sans-serif";
    penCtx.fillStyle = sp.penColor || "#000";
    penCtx.textAlign = align === "left" ? "left" : (align === "right" ? "right" : "center");
    penCtx.fillText(text, cx, cy);
    penCtx.restore();
  }

  // 变量/云变量显示
  function renderVariables() {
    const shown = [];
    G.variables.forEach(v => {
      if (runtime.variableShown[v.id]) shown.push({ name: v.name, val: vars[v.id] });
    });
    G.cloudVariables.forEach(v => {
      if (runtime.cloudShown[v.id]) shown.push({ name: v.name, val: cloudVars[v.id], cloud: true });
    });
    const box = document.getElementById("varBox");
    if (shown.length) {
      box.style.display = "block";
      box.innerHTML = shown.map(s =>
        "<div class='var'><span>" + escapeHtml(s.name) + "</span> " + Number(s.val) + "</div>"
      ).join("");
    } else {
      box.style.display = "none";
    }
  }

  function renderLoop(now) {
    // 计时器
    if (runtime.timerRunning) {
      // 使用增量时间
      if (!runtime._lastT) runtime._lastT = now;
      runtime.timerValue += (now - runtime._lastT) / 1000;
    }
    runtime._lastT = now;
    const td = document.getElementById("timerDisplay");
    if (td.style.display !== "none") td.textContent = runtime.timerValue.toFixed(2);

    renderBackground();
    ctx.drawImage(penCanvas, 0, 0);

    const order = sceneLayerOrder(runtime.activeSceneId);
    const drawList = [];
    order.forEach(sp => {
      drawList.push(sp);
      runtime.clones.filter(c => c.sourceId === sp.id).forEach(c => drawList.push(c));
    });
    // 其余克隆（source 不在当前场景）不渲染
    drawList.forEach(drawSprite);

    renderVariables();
    requestAnimationFrame(renderLoop);
  }

  // ---------- 对话框 UI ----------
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  function askModal(text) {
    return new Promise(res => {
      overlay.style.display = "flex";
      overlay.innerHTML =
        "<div class='dlg'><div class='dlg-q'>" + escapeHtml(text) + "</div>" +
        "<input id='askInput' class='dlg-input' placeholder='输入后回车' />" +
        "<button id='askOk' class='dlg-btn'>确定</button></div>";
      const input = document.getElementById("askInput");
      const ok = document.getElementById("askOk");
      const done = v => { overlay.style.display = "none"; overlay.innerHTML = ""; res(v); };
      ok.onclick = () => done(input.value);
      input.addEventListener("keydown", e => { if (e.key === "Enter") done(input.value); });
      input.focus();
    });
  }

  function chooseModal(question, choices) {
    return new Promise(res => {
      overlay.style.display = "flex";
      overlay.innerHTML =
        "<div class='dlg'><div class='dlg-q'>" + escapeHtml(question) + "</div>" +
        choices.map((c, i) => "<button class='dlg-btn choice' data-i='" + i + "'>" + escapeHtml(c) + "</button>").join("") +
        "</div>";
      overlay.querySelectorAll(".choice").forEach(btn => {
        btn.onclick = () => { overlay.style.display = "none"; overlay.innerHTML = ""; res(parseInt(btn.dataset.i, 10)); };
      });
    });
  }

  function showBubble(self, text) {
    bubbleLayer.innerHTML = "";
    const cost = self.costume();
    const h = self.getH();
    const cx = self.x + SW / 2, cy = SH / 2 - self.y - h / 2;
    const b = document.createElement("div");
    b.className = "bubble";
    b.textContent = text;
    b.style.left = (cx - 60) + "px";
    b.style.top = Math.max(4, cy - 50) + "px";
    bubbleLayer.appendChild(b);
    // 3 秒后消失（或下次对话/切场景替换）
    setTimeout(() => { if (b.parentNode) b.remove(); }, 3500);
  }

  // ---------- 资源加载 ----------
  function preloadAssets() {
    const paths = new Set();
    Object.values(G.styleAssets).forEach(p => paths.add(p));
    return Promise.all(Array.from(paths).map(p => new Promise(res => {
      const img = new Image();
      img.onload = () => { runtime.assets[p] = img; res(); };
      img.onerror = () => { res(); };
      img.src = p;
    })));
  }

  // ---------- 启动 ----------
  async function boot() {
    await preloadAssets();
    greenFlag();
    requestAnimationFrame(renderLoop);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();

  // 调试导出（便于测试与排查）
  window.__game = {
    runtime,
    get activeScene() { const s = sceneById[runtime.activeSceneId]; return s ? s.name : null; },
    get cloneCount() { return runtime.clones.length; },
    get threadCount() { return runtime.threads.size; },
    get varValues() { return { vars, cloudVars }; },
    gotoScene: name => { const s = scenes.find(x => x.name === name); if (s) switchScene(s.id); },
  };
})();
