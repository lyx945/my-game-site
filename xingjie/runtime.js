/* =========================================================================
 * 星界审判：自由意志的曙光 —— 编程猫 Kitten 项目 -> HTML 运行时
 * 舞台：960x720，坐标原点居中，x∈[-480,480]，y 向上，y∈[-360,360]
 * 朝向：弧度制，0=朝上，顺时针为正（Scratch 约定）
 * ========================================================================= */
(function () {
  "use strict";

  const G = window.GAME;
  const SW = G.stage.width;   // 960
  const SH = G.stage.height;  // 720

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
  penCanvas.width = SW; penCanvas.height = SH;
  const penCtx = penCanvas.getContext("2d");

  const bubbleLayer = document.getElementById("bubbleLayer");
  const overlay = document.getElementById("overlay");
  const rankingPanel = document.getElementById("rankingPanel");
  const rankingBody = document.getElementById("rankingBody");

  // ---------- 运行时状态 ----------
  const runtime = {
    epoch: 0, threads: new Set(),
    answer: "", choice: { content: "", index: 0 },
    keysDown: new Set(), mouseDown: false,
    mouse: { x: 0, y: 0 },
    timerValue: 0, timerRunning: false,
    rankingVisible: false, activeSceneId: null,
    assets: {}, sprites: {}, clones: [],
    variableShown: {}, cloudShown: {},
    lastMousePos: {}, penPrev: {},
  };

  // ---------- 变量 / 列表 ----------
  const globalVars = {};   // 全局变量 varId -> value
  const lists = {};        // 列表 varId -> array
  const varMeta = {};      // varId -> {name, isGlobal, type}
  G.variables.forEach(v => {
    varMeta[v.id] = { name: v.name, isGlobal: v.isGlobal, type: v.type };
    if (v.type === "list") lists[v.id] = Array.isArray(v.value) ? v.value.slice() : [];
    else globalVars[v.id] = v.value;
    runtime.variableShown[v.id] = !!v.visible;
  });
  G.cloudVariables.forEach(v => { runtime.cloudShown[v.id] = !!v.visible; });

  function varName(id) { const m = varMeta[id]; return m ? m.name : id; }
  function isListVar(id) { return varMeta[id] && varMeta[id].type === "list"; }

  function getVar(id, self) {
    if (isListVar(id)) return lists[id];
    if (varMeta[id] && varMeta[id].isGlobal === false) {
      return (self && self.localVars[id] !== undefined) ? self.localVars[id] : 0;
    }
    return (id in globalVars) ? globalVars[id] : 0;
  }
  function setVar(id, val, self) {
    if (isListVar(id)) { lists[id] = val; return; }
    if (varMeta[id] && varMeta[id].isGlobal === false) {
      if (self) self.localVars[id] = val;
      return;
    }
    globalVars[id] = val;
  }

  // ---------- 连接图 ----------
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
  let cloneSeq = 0;
  class Sprite {
    constructor(def) {
      this.id = def.id; this.name = def.name; this.scene = def.scene;
      this.x = def.x; this.y = def.y; this.scale = def.scale;
      this.rotation = def.rotation || 0;
      this.rotationType = def.rotationType || 0;
      this.visible = !!def.visible; this.draggable = def.draggable;
      this.currentStyleId = def.currentStyleId;
      this.costumes = def.costumes;
      this.scripts = def.scripts;
      this.blocks = def.scripts && def.scripts.blocks || {};
      this.conns = buildConns(def.scripts && def.scripts.connections || {});
      this.isClone = !!def.isClone; this.sourceId = def.sourceId || null;
      this.cloneIndex = def.cloneIndex || 0;
      this.opacity = 1; this.filter = "none";
      this.effects = { "0": 0, "1": 0, "4": 0 };
      this.penColor = "#000"; this.penDown = false;
      this.roleCamp = "";
      // 局部变量
      this.localVars = {};
      G.variables.forEach(v => { if (v.isGlobal === false) this.localVars[v.id] = v.value; });
      // 物理
      this.vx = 0; this.vy = 0; this.physicsEnabled = false;
      this.gravityDir = 0; this.gravityVal = 0; this.restitution = 0.5;
    }
    costume() { return this.costumes[this.currentStyleId] || null; }
    getW() {
      const c = this.costume(); const img = c && c.asset ? runtime.assets[c.asset] : null;
      return (img && img.naturalWidth ? img.naturalWidth : 100) * this.scale / 100;
    }
    getH() {
      const c = this.costume(); const img = c && c.asset ? runtime.assets[c.asset] : null;
      return (img && img.naturalHeight ? img.naturalHeight : 100) * this.scale / 100;
    }
    bounds() {
      const w = this.getW(), h = this.getH();
      return { left: this.x - w / 2, right: this.x + w / 2, top: this.y + h / 2, bottom: this.y - h / 2 };
    }
  }

  G.sprites.forEach(def => { runtime.sprites[def.id] = new Sprite(def); });

  // ---------- 场景 ----------
  const scenes = G.scenes;
  const sceneById = {};
  scenes.forEach(s => { sceneById[s.id] = s; });
  function actorsInScene(id) { return Object.values(runtime.sprites).filter(s => s.scene === id); }
  function sceneSprite(id) {
    const scene = sceneById[id];
    if (!scene) return null;
    return new Sprite({ id: "__scene", name: "舞台", scene: id, x: 0, y: 0, scale: 100, visible: true, costumes: {}, scripts: scene.scripts });
  }
  function sceneLayerOrder(id) {
    const scene = sceneById[id];
    const seen = new Set(); const order = [];
    (scene.groupOrder || []).forEach(gid => {
      const grp = G.groups[gid]; if (!grp) return;
      (grp.actors || []).forEach(aid => {
        const sp = runtime.sprites[aid];
        if (sp && sp.scene === id && !seen.has(aid)) { seen.add(aid); order.push(sp); }
      });
    });
    actorsInScene(id).forEach(sp => { if (!seen.has(sp.id)) order.push(sp); });
    return order;
  }

  // ---------- 函数（自定义积木）注册 ----------
  const funcRegistry = {};  // defId -> {sprite, paramNames, bodyId}
  function registerFunctions() {
    for (const sp of Object.values(runtime.sprites)) {
      for (const bid in sp.blocks) {
        const b = sp.blocks[bid];
        if (b.type === "procedures_2_defnoreturn") {
          const c = sp.conns[bid] || { value: {} };
          const paramNames = [];
          let i = 0;
          while ("PARAMS" + i in c.value) {
            const pb = sp.blocks[c.value["PARAMS" + i]];
            paramNames.push(pb ? pb.fields.param_name : ("p" + i));
            i++;
          }
          funcRegistry[bid] = { sprite: sp, paramNames, bodyId: (c.stmt && c.stmt.STACK) || null };
        }
      }
    }
  }

  // ---------- 线程 ----------
  class ThreadAbort extends Error {}
  class BreakSignal extends Error {}
  let threadSeq = 0;
  function tick() { return new Promise(res => requestAnimationFrame(res)); }
  function checkAbort(th) {
    if (th.aborted) throw new ThreadAbort();
    if (!th.persistent && th.epoch !== runtime.epoch) throw new ThreadAbort();
  }
  function spawn(fn, self, persistent) {
    const th = { id: ++threadSeq, epoch: runtime.epoch, aborted: false, self, frames: [], persistent: !!persistent };
    runtime.threads.add(th);
    fn(th).catch(err => { if (!(err instanceof ThreadAbort)) console.error(err); })
      .finally(() => runtime.threads.delete(th));
    return th;
  }

  // ---------- 音频 ----------
  const audioPool = {};
  let audioUnlocked = false;
  let pendingAudios = [];
  function unlockAudio() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    const ps = pendingAudios; pendingAudios = [];
    ps.forEach(sr => playAudio(sr));
  }
  function getAudio(soundRef) {
    if (soundRef === "all" || !soundRef) return null;
    const info = G.audio[soundRef];
    if (!info || !info.asset) return null;
    if (!audioPool[soundRef]) {
      const a = new Audio(info.asset);
      a.loop = false;
      audioPool[soundRef] = a;
    }
    return audioPool[soundRef];
  }
  function playAudio(soundRef) {
    const a = getAudio(soundRef);
    if (!a) return;
    if (audioUnlocked) { a.currentTime = 0; a.play().catch(() => {}); }
    else { pendingAudios.push(soundRef); }
  }
  function stopAudio(soundRef) {
    if (soundRef === "all" || !soundRef) { Object.values(audioPool).forEach(a => { a.pause(); a.currentTime = 0; }); return; }
    const a = audioPool[soundRef]; if (a) { a.pause(); a.currentTime = 0; }
  }
  async function playAudioAndWait(soundRef) {
    const a = getAudio(soundRef);
    if (!a) return;
    a.currentTime = 0;
    if (audioUnlocked) {
      try { await a.play(); await new Promise(r => { a.onended = r; }); } catch (e) {}
    }
  }

  // ---------- 求值 ----------
  function evalValue(bid, self, th) {
    const b = self.blocks[bid];
    if (!b) return 0;
    const f = b.fields || {};
    const c = self.conns[bid] || { value: {} };
    const V = name => (name in c.value ? evalValue(c.value[name], self, th) : 0);

    switch (b.type) {
      case "math_number": return ("NUM" in f) ? Number(f.NUM) : (f.TEXT || 0);
      case "text": return f.TEXT || "";
      case "default_value": return f.TEXT || "";
      case "controller_shadow": return Number(f.NUM || 0);
      case "variables_get": return getVar(f.VAR, self);
      case "cloud_variables_get": return 0;
      case "broadcast_input": return f.MESSAGE || "";
      case "lists_get": return lists[f.VAR] || [];
      case "lists_is_exist": {
        const arr = V("VAR"); const val = V("VALUE");
        return Array.isArray(arr) && arr.some(x => x == val);
      }
      case "lists_index_of": {
        const arr = V("VAR"); const val = V("VALUE");
        if (!Array.isArray(arr)) return 0;
        for (let i = 0; i < arr.length; i++) if (arr[i] == val) return i + 1;
        return 0;
      }
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
      case "logic_negate": return !V("BOOL");
      case "logic_operation": {
        const a = V("A"), bb = V("B");
        return f.OP === "AND" ? (a && bb) : (a || bb);
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
        let n = 2; const m = /items="(\d+)"/.exec(b.mutation || ""); if (m) n = parseInt(m[1], 10);
        let out = ""; for (let i = 0; i < n; i++) out += String(V("ADD" + i)); return out;
      }
      case "get_answer": return runtime.answer;
      case "get_timer": return runtime.timerValue;
      case "get_stage_info": return f.info === "width" ? SW : SH;
      case "get_mouse_info": return f.position === "x" ? runtime.mouse.x : runtime.mouse.y;
      case "mouse_down": return runtime.mouseDown;
      case "get_3": {
        const t = f.sprite === "__self" ? self : runtime.sprites[f.sprite];
        if (!t) return 0;
        switch (f.attribute) {
          case "0": return t.x;
          case "1": return t.y;
          case "3": return t.rotation * 180 / Math.PI;  // 方向（度）
          case "5": return t.scale;
          case "8": return t.effects["0"] || 0;
          default: return 0;
        }
      }
      case "get_current_scene": return f.scene;
      case "get_current_costume": return f.style_id;
      case "get_choice_or_index": return f.type === "select_content" ? runtime.choice.content : runtime.choice.index;
      case "bump": return touching(f.sprite1, f.sprite2, self);
      case "self_out_of_boundary": return outOfBoundary(self, f.boundary);
      case "check_key": return runtime.keysDown.has(KEYCODE[parseInt(f.key, 10)] || f.key);
      case "is_ranking_show_hide": return f.VAL === "hide" ? !runtime.rankingVisible : runtime.rankingVisible;
      case "user_id_get": return "local";
      case "get_audios": case "get_whole_audios": return f.sound_id || "";
      case "self_distance_to": {
        const t = resolveTarget(f.sprite, self); if (!t) return 0;
        return Math.hypot(t.x - self.x, t.y - self.y);
      }
      case "get_current_clone_index": return self.cloneIndex;
      case "get_clone_index_property": {
        const idx = Math.floor(Number(V("index")));
        const target = f.sprite === "__self" ? self : runtime.sprites[f.sprite];
        const clone = findCloneByIndex(target, idx);
        if (!clone) return 0;
        if (f.attribute === "0") return clone.x;
        if (f.attribute === "1") return clone.y;
        return clone.localVars[f.attribute] !== undefined ? clone.localVars[f.attribute] : 0;
      }
      case "procedures_2_parameter":
      case "procedures_2_stable_parameter":
        for (let i = th.frames.length - 1; i >= 0; i--) {
          if (f.param_name in th.frames[i]) return th.frames[i][f.param_name];
        }
        return 0;
      default: return 0;
    }
  }

  function resolveTarget(ref, self) {
    if (ref === "__self") return self;
    if (ref === "__mouse" || ref === "__pointer") return { x: runtime.mouse.x, y: runtime.mouse.y };
    if (ref === "__random") return { x: (Math.random() * 2 - 1) * SW / 2, y: (Math.random() * 2 - 1) * SH / 2 };
    return runtime.sprites[ref] || null;
  }

  function resolveSprites(ref, self) {
    if (ref === "__self") return [self];
    const base = runtime.sprites[ref];
    if (base) return [base].concat(runtime.clones.filter(c => c.sourceId === ref));
    // 分组引用：返回组内所有角色及其克隆
    const grp = G.groups[ref];
    if (grp && grp.actors) {
      const out = [];
      grp.actors.forEach(aid => {
        const sp = runtime.sprites[aid];
        if (sp) { out.push(sp); runtime.clones.filter(c => c.sourceId === aid).forEach(c => out.push(c)); }
      });
      return out;
    }
    return [];
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
        const wa = (ba.right - ba.left) * SHRINK, ha = (ba.top - ba.bottom) * SHRINK;
        const wb = (bb.right - bb.left) * SHRINK, hb = (bb.top - bb.bottom) * SHRINK;
        if (Math.abs(sa.x - sb.x) < (wa + wb) / 2 && Math.abs(sa.y - sb.y) < (ha + hb) / 2) return true;
      }
    }
    return false;
  }
  function outOfBoundary(self, boundary) {
    const b = self.bounds(); const hw = SW / 2, hh = SH / 2;
    switch (String(boundary)) {
      case "0": return b.bottom > hh;
      case "1": return b.top < -hh;
      case "2": return b.right < -hw;
      case "3": return b.top < -hh;
      case "4": return b.left > hw;
      default: return false;
    }
  }
  function findCloneByIndex(source, idx) {
    const arr = [source].concat(runtime.clones.filter(c => c.sourceId === (source && source.id)));
    return arr[idx] || null;
  }

  // ---------- 执行 ----------
  async function execBlock(bid, self, th) {
    checkAbort(th);
    const b = self.blocks[bid];
    if (!b) return;
    const f = b.fields || {};
    const c = self.conns[bid] || { next: null, value: {}, stmt: {} };
    const V = name => (name in c.value ? evalValue(c.value[name], self, th) : 0);
    const body = c.stmt.DO !== undefined ? c.stmt.DO : (c.stmt.DO0 !== undefined ? c.stmt.DO0 : null);
    const runBody = async id => { if (id) await runChain(id, self, th); };

    switch (b.type) {
      case "controls_if": {
        if (evalValue(c.value.IF0, self, th)) await runBody(c.stmt.DO0);
        else if (c.stmt.ELSE) await runChain(c.stmt.ELSE, self, th);
        return;
      }
      case "repeat_forever":
        while (true) { checkAbort(th); try { await runBody(body); } catch (e) { if (e instanceof BreakSignal) break; throw e; } await tick(); }
      case "repeat_n_times": {
        const n = Math.max(0, Math.round(Number(V("times"))));
        for (let i = 0; i < n; i++) { checkAbort(th); try { await runBody(body); } catch (e) { if (e instanceof BreakSignal) break; throw e; } }
        return;
      }
      case "repeat_forever_until": {
        while (!evalValue(c.value.condition, self, th)) { checkAbort(th); try { await runBody(body); } catch (e) { if (e instanceof BreakSignal) break; throw e; } await tick(); }
        return;
      }
      case "when": {
        // 当[条件]：条件成立时反复执行（类似 forever-if），是帽子循环
        while (true) {
          checkAbort(th);
          if (evalValue(c.value.condition, self, th)) {
            try { await runBody(body); } catch (e) { if (!(e instanceof BreakSignal)) throw e; }
          }
          await tick();
        }
      }
      case "wait_until":
        while (!evalValue(c.value.condition, self, th)) { checkAbort(th); await tick(); }
        return;
      case "warp":
        await runBody(body); return;
      case "break": throw new BreakSignal();
      case "stop": {
        if (f.scope === "1") { throw new ThreadAbort(); }
        for (const t of runtime.threads) {
          if (t === th) continue;  // 不终止当前线程（后续的对白/重启需要继续执行）
          if (f.scope === "2" && t.self !== self) continue; // 只停本角色其它脚本
          t.aborted = true;
        }
        return;
      }
      case "restart": location.reload(); return;
      case "wait": {
        const secs = Number(V("time")) || 0;
        const target = performance.now() + secs * 1000;
        while (performance.now() < target) { checkAbort(th); await tick(); }
        return;
      }
      case "variables_set": setVar(f.VAR, evalValue(c.value.VALUE, self, th), self); return;
      case "change_variable": setVar(f.valname, Number(getVar(f.valname, self) || 0) + (f.method === "increase" ? 1 : -1) * Number(V("n")), self); return;
      case "change_cloud_variable": return;
      case "lists_append": { const arr = V("VAR"); if (Array.isArray(arr)) arr.push(V("VALUE")); return; }
      case "lists_delete": {
        const arr = V("VAR"); if (!Array.isArray(arr)) return;
        const idxVal = Number(V("INDEX"));
        if (idxVal >= 1) arr.splice(idxVal - 1, 1);
        else if (f.TYPE === "first") arr.shift();
        else if (f.TYPE === "last") arr.pop();
        else if (f.TYPE === "all") arr.length = 0;
        else if (f.TYPE === "random") arr.splice(Math.floor(Math.random() * arr.length), 1);
        return;
      }
      case "lists_replace": {
        const arr = V("VAR"); if (!Array.isArray(arr)) return;
        const idxVal = Number(V("INDEX"));
        if (idxVal >= 1 && idxVal <= arr.length) arr[idxVal - 1] = V("VALUE");
        else if (f.TYPE === "first" && arr.length) arr[0] = V("VALUE");
        return;
      }
      case "self_broadcast": broadcast(V("message")); return;
      case "self_disappear": self.visible = false; return;
      case "self_appear": self.visible = true; return;
      case "self_ask": runtime.answer = await askModal(String(V("text"))); return;
      case "create_stage_dialog": {
        const actor = f.actor === "__self" ? self : (runtime.sprites[f.actor] || self);
        await showDialog(actor, String(V("text")));
        return;
      }
      case "ask_and_choose": {
        const q = String(V("question"));
        let n = 2; const m = /items="(\d+)"/.exec(b.mutation || ""); if (m) n = parseInt(m[1], 10);
        const choices = []; for (let i = 0; i < n; i++) choices.push(String(V("CHOICE" + i)));
        const idx = await chooseModal(q, choices);
        runtime.choice.index = idx + 1; runtime.choice.content = choices[idx];
        return;
      }
      case "self_set_position": if (f.coordinary === "x") self.x = Number(V("value")); else self.y = Number(V("value")); return;
      case "self_change_coordinate": {
        const d = Number(V("value")) * (f.increase === "decrease" ? -1 : 1);
        if (f.coordinary === "x") self.x += d; else self.y += d; return;
      }
      case "self_move_to": self.x = Number(V("x")); self.y = Number(V("y")); return;
      case "self_move_specify": {
        const t = resolveTarget(f.target, self); if (t) { self.x = t.x; self.y = t.y; } return;
      }
      case "self_go_forward": {
        const s = Number(V("steps"));
        self.x += Math.sin(self.rotation) * s;
        self.y += Math.cos(self.rotation) * s;
        return;
      }
      case "self_rotate": self.rotation += Number(V("degrees")) * Math.PI / 180; return;
      case "self_face_to": {
        const t = resolveTarget(f.sprite, self); if (!t) return;
        self.rotation = Math.atan2(t.x - self.x, t.y - self.y);
        return;
      }
      case "self_rotate_around": {
        const t = runtime.sprites[f.sprite]; if (!t) return;
        const deg = Number(V("degrees")) * Math.PI / 180;
        const dx = self.x - t.x, dy = self.y - t.y;
        const r = Math.hypot(dx, dy);
        const a = Math.atan2(dy, dx) + deg;
        self.x = t.x + Math.cos(a) * r;
        self.y = t.y + Math.sin(a) * r;
        self.rotation += deg;
        return;
      }
      case "self_bounce_off_edge": {
        const b = self.bounds(); const hw = SW / 2, hh = SH / 2;
        if (b.left < -hw || b.right > hw) self.rotation = Math.PI - self.rotation;
        if (b.top > hh || b.bottom < -hh) self.rotation = -self.rotation;
        return;
      }
      case "self_glide_to": {
        const secs = Number(V("time")) || 1; const tx = Number(V("x")), ty = Number(V("y"));
        const sx = self.x, sy = self.y; const t0 = performance.now();
        while (true) { checkAbort(th); const p = Math.min(1, (performance.now() - t0) / (secs * 1000));
          self.x = sx + (tx - sx) * p; self.y = sy + (ty - sy) * p; if (p >= 1) break; await tick(); }
        return;
      }
      case "self_change_scale_2": self.scale += Number(V("scale")) * (f.increase === "decrease" ? -1 : 1); return;
      case "set_scale": self.scale = Number(V("scale")); return;
      case "set_width_height_scale": self.scale = Number(V("value")); return;
      case "add_width_height_scale_2": {
        self.scale += Number(V("value")) * (f.increase === "decrease" ? -1 : 1);
        return;
      }
      case "set_costume": {
        const sid = c.value.index ? evalValue(c.value.index, self, th) : f.style_id;
        if (sid && self.costumes[sid]) self.currentStyleId = sid;
        return;
      }
      case "set_entity_show_hide": {
        // sprite 可能是角色 id 或分组 id；type 支持 show/hide/grad_show/grad_hide
        const targets = resolveSprites(f.sprite, self);
        if (!targets.length) return;
        const ttype = f.type;
        if (ttype === "show") { targets.forEach(t => { t.visible = true; t.opacity = 1; }); return; }
        if (ttype === "hide") { targets.forEach(t => t.visible = false); return; }
        const show = ttype === "grad_show";
        const secs = Number(V("time")) || 1;
        targets.forEach(t => { t.visible = true; t.opacity = show ? 0 : 1; });
        const t0 = performance.now();
        while (true) {
          checkAbort(th);
          const p = Math.min(1, (performance.now() - t0) / (secs * 1000));
          const o = show ? p : (1 - p);
          targets.forEach(t => { t.opacity = o; });
          if (p >= 1) break;
          await tick();
        }
        if (!show) targets.forEach(t => { t.visible = false; t.opacity = 1; });
        return;
      }
      case "self_gradually_show_hide": {
        const secs = Number(V("time")) || 0.5; const show = f.is_show === "show";
        self.visible = true; const t0 = performance.now();
        while (true) { checkAbort(th); const p = Math.min(1, (performance.now() - t0) / (secs * 1000));
          self.opacity = show ? p : (1 - p); if (p >= 1) break; await tick(); }
        if (!show) self.visible = false; self.opacity = 1; return;
      }
      case "self_set_effect_2": self.effects[String(f.scope)] = Number(V("val")) || 0; return;
      case "self_change_effect_3": {
        self.effects[String(f.scope)] = (self.effects[String(f.scope)] || 0) + (f.increase === "increase" ? 1 : -1) * Number(V("steps"));
        return;
      }
      case "self_set_pen_color": self.penColor = f.color || "#000"; return;
      case "self_change_pen_color_property_2": return;
      case "self_pen_down": self.penDown = true; return;
      case "stamp": { const text = String(V("text")); const size = Number(V("size")) || 18; drawStamp(self, text, size, f.align || "left"); return; }
      case "clear_drawing": penCtx.clearRect(0, 0, SW, SH); return;
      case "dispose_clone": disposeClone(self); return;
      case "mirror": spawnMirror(f.sprite === "__self" ? self : runtime.sprites[f.sprite]); return;
      case "switch_to_screen": switchScene(evalValue(c.value.screen, self, th)); return;
      case "set_scene_transition": return;
      case "set_timer_state":
        if (f.actions === "start") runtime.timerRunning = true;
        else if (f.actions === "stop") runtime.timerRunning = false;
        else if (f.actions === "reset") runtime.timerValue = 0;
        return;
      case "show_hide_timer": document.getElementById("timerDisplay").style.display = f.state === "show" ? "block" : "none"; return;
      case "show_hide_variable": runtime.variableShown[f.VAR] = f.FUNC === "show"; return;
      case "show_hide_cloud_variable": runtime.cloudShown[f.VAR] = f.FUNC === "show"; return;
      case "self_set_role_camp": self.roleCamp = f.role_camp; return;
      case "play_audio_2": playAudio(V("audio")); return;
      case "play_audio_and_wait_2": await playAudioAndWait(V("audio")); return;
      case "stop_audio_2": stopAudio(V("audio")); return;
      case "show_ranking": case "hide_ranking": return;
      case "procedures_2_callnoreturn": {
        const m = /def_id="([^"]+)"/.exec(b.mutation || "");
        let def = m && funcRegistry[m[1]];
        if (!def) { for (const k in funcRegistry) { const d = funcRegistry[k]; if (d && d.sprite.blocks[k] && d.sprite.blocks[k].fields.NAME === f.NAME) { def = d; break; } } }
        if (!def) return;
        const args = {};
        def.paramNames.forEach((pn, i) => { args[pn] = ("ARG" + i) in c.value ? evalValue(c.value["ARG" + i], self, th) : 0; });
        th.frames.push(args);
        try { if (def.bodyId) await runChain(def.bodyId, def.sprite, th); }
        finally { th.frames.pop(); }
        return;
      }
      default: return;
    }
  }

  async function runChain(bid, self, th) {
    let cur = bid; const seen = new Set();
    while (cur && !seen.has(cur)) {
      seen.add(cur); checkAbort(th);
      await execBlock(cur, self, th);
      cur = (self.conns[cur] && self.conns[cur].next) || null;
    }
  }

  function hatBody(self, hatId) {
    const c = self.conns[hatId]; if (!c) return null;
    if (c.stmt.DO !== undefined) return c.stmt.DO;
    if (c.stmt.DO0 !== undefined) return c.stmt.DO0;
    return c.next;
  }

  // ---------- 广播 ----------
  function broadcast(msg) {
    const listeners = [];
    const sc = sceneSprite(runtime.activeSceneId);
    if (sc && sc.scripts && sc.scripts.blocks) listeners.push(sc);
    actorsInScene(runtime.activeSceneId).forEach(sp => listeners.push(sp));
    runtime.clones.forEach(sp => listeners.push(sp));
    listeners.forEach(sp => {
      for (const bid in sp.blocks) {
        const b = sp.blocks[bid];
        if (b.type === "self_listen") {
          const c = sp.conns[bid];
          const msgBid = c && c.value.message;
          const mm = msgBid ? evalValue(msgBid, sp, { epoch: runtime.epoch, aborted: false, self: sp, frames: [] }) : "";
          if (mm === msg) { const body = hatBody(sp, bid); if (body) spawn(th => runChain(body, sp, th), sp); }
        }
      }
    });
  }

  // ---------- 克隆 ----------
  const CLONE_VISUAL_BLOCKS = new Set([
    "self_appear", "self_move_specify", "self_move_to", "self_glide_to",
    "self_go_forward", "self_rotate", "self_face_to", "self_change_scale_2",
    "set_scale", "self_set_effect_2", "self_change_effect_3",
    "self_set_position", "self_change_coordinate", "self_gradually_show_hide",
  ]);
  function cloneShouldBeVisible(source) {
    // 若克隆体的所有 start_as_a_mirror 帽子体里都没有任何视觉操作
    // （例如「你」的 wait→dispose_clone 临时克隆），则不渲染，避免残影。
    let hasHat = false;
    for (const bid in source.blocks) {
      if (source.blocks[bid].type !== "start_as_a_mirror") continue;
      hasHat = true;
      const body = hatBody(source, bid);
      if (!body) continue;
      const stack = [body], visited = new Set();
      while (stack.length) {
        const cur = stack.pop();
        if (!cur || visited.has(cur)) continue;
        visited.add(cur);
        const b = source.blocks[cur];
        if (!b) continue;
        if (CLONE_VISUAL_BLOCKS.has(b.type)) return true;
        const c = source.conns[cur];
        if (!c) continue;
        if (c.next) stack.push(c.next);
        for (const k in c.stmt) stack.push(c.stmt[k]);
      }
    }
    return !hasHat; // 没有帽子则继承本体可见性；有帽子但无视觉操作则不显示
  }
  function spawnMirror(source) {
    if (!source) return;
    const clone = new Sprite({
      id: "clone_" + (++cloneSeq), name: source.name, scene: source.scene,
      x: source.x, y: source.y, scale: source.scale, rotation: source.rotation,
      visible: source.visible, costumes: source.costumes, currentStyleId: source.currentStyleId,
      scripts: source.scripts, isClone: true, sourceId: source.id,
      cloneIndex: runtime.clones.filter(c => c.sourceId === source.id).length,
    });
    clone.localVars = Object.assign({}, source.localVars);
    if (!cloneShouldBeVisible(source)) clone.visible = false;
    runtime.clones.push(clone);
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

  // ---------- 场景切换 ----------
  function activateActorScripts(sp) {
    for (const bid in sp.blocks) {
      const t = sp.blocks[bid].type;
      if (t === "on_running_group_activated" || t === "when") {
        const body = t === "when" ? bid : hatBody(sp, bid);
        if (body) spawn(th => runChain(body, sp, th), sp);
      }
    }
  }
  function switchScene(targetId) {
    let id = targetId;
    if (id === "__next_scene") {
      const idx = scenes.findIndex(s => s.id === runtime.activeSceneId);
      const next = scenes[(idx + 1) % scenes.length];
      id = next ? next.id : targetId;
    }
    if (!sceneById[id]) id = scenes[0].id;
    runtime.epoch++;
    // 只终止场景级线程；start_on_click 等持久线程保留
    for (const th of runtime.threads) if (!th.persistent) th.aborted = true;
    // 克隆体保留（渲染时仅显示当前场景角色的克隆）
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

  function greenFlag() {
    // 绿旗：start_on_click 在所有角色 + 场景上触发（全局，持久）
    for (const sp of Object.values(runtime.sprites)) {
      for (const bid in sp.blocks) {
        if (sp.blocks[bid].type === "start_on_click") {
          const body = hatBody(sp, bid);
          if (body) spawn(th => runChain(body, sp, th), sp, true);
        }
      }
    }
    for (const sc of scenes) {
      const ss = sceneSprite(sc.id);
      if (ss && ss.scripts && ss.scripts.blocks) {
        for (const bid in ss.blocks) {
          if (ss.blocks[bid].type === "start_on_click") {
            const body = hatBody(ss, bid);
            if (body) spawn(th => runChain(body, ss, th), ss, true);
          }
        }
      }
    }
    // 激活初始场景
    switchScene(scenes[0].id);
  }

  // ---------- 输入 ----------
  function stagePointFromEvent(e) {
    const r = canvas.getBoundingClientRect();
    const px = (e.clientX - r.left) * (SW / r.width);
    const py = (e.clientY - r.top) * (SH / r.height);
    return { px, py, x: px - SW / 2, y: SH / 2 - py };
  }
  function hitTest(px, py) {
    const order = sceneLayerOrder(runtime.activeSceneId).slice().reverse();
    for (const sp of order) {
      if (!sp.visible) continue;
      const w = sp.getW(), h = sp.getH();
      const sx = sp.x + SW / 2, sy = SH / 2 - sp.y;
      if (px >= sx - w / 2 && px <= sx + w / 2 && py >= sy - h / 2 && py <= sy + h / 2) return sp;
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
          const ids = new Set([tapped.id]); if (tapped.isClone) ids.add(tapped.sourceId);
          if (actor === "__self") match = (sp === tapped); else match = ids.has(actor);
        } else match = (actor === "__scene");
        if (match) { const body = hatBody(sp, bid); if (body) spawn(th => runChain(body, sp, th), sp); }
      }
    });
  }

  canvas.addEventListener("mousemove", e => { const p = stagePointFromEvent(e); runtime.mouse = { x: p.x, y: p.y }; });
  canvas.addEventListener("mousedown", e => { unlockAudio(); runtime.mouseDown = true; const p = stagePointFromEvent(e); runtime.mouse = { x: p.x, y: p.y }; dispatchTap(hitTest(p.px, p.py)); });
  window.addEventListener("mouseup", () => { runtime.mouseDown = false; });
  canvas.addEventListener("touchstart", e => {
    e.preventDefault(); unlockAudio(); runtime.mouseDown = true;
    const t = e.touches[0]; const p = stagePointFromEvent({ clientX: t.clientX, clientY: t.clientY });
    runtime.mouse = { x: p.x, y: p.y };
    dispatchTap(hitTest(p.px, p.py));
  }, { passive: false });
  window.addEventListener("touchend", () => { runtime.mouseDown = false; });

  window.addEventListener("keydown", e => {
    unlockAudio();
    const k = KEYCODE[e.keyCode] || e.key;
    runtime.keysDown.add(k);
    const listeners = actorsInScene(runtime.activeSceneId).concat(runtime.clones);
    const sc = sceneSprite(runtime.activeSceneId);
    if (sc && sc.scripts && sc.scripts.blocks) listeners.push(sc);
    listeners.forEach(sp => {
      for (const bid in sp.blocks) {
        const b = sp.blocks[bid];
        if (b.type === "on_keydown") {
          const kk = KEYCODE[parseInt(b.fields.key, 10)] || b.fields.key;
          if (kk === k || kk === "any") { const body = hatBody(sp, bid); if (body) spawn(th => runChain(body, sp, th), sp); }
        }
      }
    });
  });
  window.addEventListener("keyup", e => { const k = KEYCODE[e.keyCode] || e.key; runtime.keysDown.delete(k); });

  // ---------- 渲染 ----------
  function renderBackground() {
    const scene = sceneById[runtime.activeSceneId];
    const asset = scene && G.styleAssets[scene.styleId];
    const img = asset ? runtime.assets[asset] : null;
    ctx.clearRect(0, 0, SW, SH);
    if (img && img.complete && img.naturalWidth) {
      const nw = img.naturalWidth, nh = img.naturalHeight;
      ctx.drawImage(img, (SW - nw) / 2, (SH - nh) / 2, nw, nh);
    } else { ctx.fillStyle = "#f4f6fb"; ctx.fillRect(0, 0, SW, SH); }
  }
  function drawSprite(sp) {
    if (!sp.visible) return;
    const cost = sp.costume();
    const img = cost && cost.asset ? runtime.assets[cost.asset] : null;
    const w = sp.getW(), h = sp.getH();
    // 造型锚点（pivot）：角色 (x,y) 对齐到造型的 pivot 点，造型中心相对 pivot 偏移
    const s = sp.scale / 100;
    const px = cost && cost.pivot ? (cost.pivot.x || 0) : 0;
    const py = cost && cost.pivot ? (cost.pivot.y || 0) : 0;
    const cx = sp.x + SW / 2, cy = SH / 2 - sp.y;
    ctx.save();
    ctx.globalAlpha = sp.opacity;
    // 应用特效
    const e = sp.effects;
    let flt = [];
    if (e["0"]) flt.push("hue-rotate(" + Number(e["0"]) + "deg)");
    if (e["1"]) flt.push("brightness(" + (1 + Number(e["1"]) / 100) + ")");
    if (e["4"]) flt.push("opacity(" + Math.max(0, 1 - Number(e["4"]) / 100) + ")");
    ctx.filter = flt.length ? flt.join(" ") : "none";
    ctx.translate(cx, cy);
    if (sp.rotation) ctx.rotate(-sp.rotation);
    if (img && img.complete && img.naturalWidth) ctx.drawImage(img, -px * s - w / 2, -py * s - h / 2, w, h);
    else { ctx.fillStyle = "rgba(200,200,200,0.5)"; ctx.fillRect(-px * s - w / 2, -py * s - h / 2, w, h); }
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

  function renderVariables() {
    const shown = [];
    G.variables.forEach(v => { if (runtime.variableShown[v.id] && v.type !== "list") shown.push({ name: v.name, val: globalVars[v.id] }); });
    const box = document.getElementById("varBox");
    if (shown.length) { box.style.display = "block"; box.innerHTML = shown.map(s => "<div class='var'><span>" + escapeHtml(s.name) + "</span> " + Number(s.val) + "</div>").join(""); }
    else box.style.display = "none";
  }

  // 物理步进 + 画笔 + 渲染主循环
  function physicsStep(dt) {
    for (const sp of runtime.clones) {
      if (!sp.physicsEnabled) continue;
      const gx = Math.sin(sp.gravityDir * Math.PI / 180) * sp.gravityVal;
      const gy = Math.cos(sp.gravityDir * Math.PI / 180) * sp.gravityVal;
      sp.vx += gx * dt; sp.vy += gy * dt;
      sp.x += sp.vx * dt; sp.y += sp.vy * dt;
      const b = sp.bounds(); const hw = SW / 2, hh = SH / 2;
      if (b.left < -hw) { sp.x = -hw + sp.getW() / 2; sp.vx = Math.abs(sp.vx) * sp.restitution; }
      if (b.right > hw) { sp.x = hw - sp.getW() / 2; sp.vx = -Math.abs(sp.vx) * sp.restitution; }
      if (b.top > hh) { sp.y = hh - sp.getH() / 2; sp.vy = -Math.abs(sp.vy) * sp.restitution; }
      if (b.bottom < -hh) { sp.y = -hh + sp.getH() / 2; sp.vy = Math.abs(sp.vy) * sp.restitution; }
    }
  }

  let lastFrameT = 0;
  function renderLoop(now) {
    const dt = Math.min(0.05, (now - lastFrameT) / 1000 || 0.016);
    lastFrameT = now;
    if (runtime.timerRunning) runtime.timerValue += dt;
    const td = document.getElementById("timerDisplay");
    if (td.style.display !== "none") td.textContent = runtime.timerValue.toFixed(2);

    physicsStep(dt);

    renderBackground();
    // 画笔轨迹
    for (const sp of Object.values(runtime.sprites).concat(runtime.clones)) {
      if (sp.penDown && sp.visible) {
        const key = sp.id;
        const prev = runtime.penPrev[key];
        const cx = sp.x + SW / 2, cy = SH / 2 - sp.y;
        if (prev) { penCtx.strokeStyle = sp.penColor; penCtx.lineWidth = 2; penCtx.beginPath(); penCtx.moveTo(prev.x, prev.y); penCtx.lineTo(cx, cy); penCtx.stroke(); }
        runtime.penPrev[key] = { x: cx, y: cy };
      }
    }
    ctx.drawImage(penCanvas, 0, 0);

    const order = sceneLayerOrder(runtime.activeSceneId);
    const drawList = [];
    order.forEach(sp => { drawList.push(sp); runtime.clones.filter(c => c.sourceId === sp.id).forEach(c => drawList.push(c)); });
    drawList.forEach(drawSprite);

    renderVariables();
    requestAnimationFrame(renderLoop);
  }

  // ---------- 对话框 UI ----------
  function escapeHtml(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function askModal(text) {
    return new Promise(res => {
      overlay.style.display = "flex";
      overlay.innerHTML = "<div class='dlg'><div class='dlg-q'>" + escapeHtml(text) + "</div><input id='askInput' class='dlg-input' placeholder='输入后回车' /><button id='askOk' class='dlg-btn'>确定</button></div>";
      const input = document.getElementById("askInput"); const ok = document.getElementById("askOk");
      const done = v => { overlay.style.display = "none"; overlay.innerHTML = ""; res(v); };
      ok.onclick = () => done(input.value);
      input.addEventListener("keydown", e => { if (e.key === "Enter") done(input.value); });
      input.focus();
    });
  }
  function chooseModal(question, choices) {
    return new Promise(res => {
      overlay.style.display = "flex";
      overlay.innerHTML = "<div class='dlg'><div class='dlg-q'>" + escapeHtml(question) + "</div>" + choices.map((c, i) => "<button class='dlg-btn choice' data-i='" + i + "'>" + escapeHtml(c) + "</button>").join("") + "</div>";
      overlay.querySelectorAll(".choice").forEach(btn => { btn.onclick = () => { overlay.style.display = "none"; overlay.innerHTML = ""; res(parseInt(btn.dataset.i, 10)); }; });
    });
  }
  function showDialog(actor, text) {
    return new Promise(res => {
      bubbleLayer.innerHTML = "";
      const h = actor.getH();
      const cx = actor.x + SW / 2, cy = SH / 2 - actor.y - h / 2;
      const b = document.createElement("div");
      b.className = "bubble";
      b.textContent = text;
      b.style.left = Math.max(140, Math.min(SW - 140, cx)) + "px";
      b.style.top = Math.max(4, cy - 60) + "px";
      bubbleLayer.appendChild(b);
      let done = false;
      const dismiss = () => { if (done) return; done = true; b.remove(); res(); };
      // 点击画面任意处继续（异步注册，避免触发对话的同一次点击被吞）
      setTimeout(() => {
        canvas.addEventListener("mousedown", dismiss);
        canvas.addEventListener("touchstart", dismiss);
      }, 50);
      setTimeout(() => { if (!done) dismiss(); }, 30000); // 30s 兜底自动关闭
    });
  }

  // ---------- 资源加载 ----------
  function preloadAssets() {
    const paths = new Set();
    Object.values(G.styleAssets).forEach(p => paths.add(p));
    return Promise.all(Array.from(paths).map(p => new Promise(res => {
      const img = new Image();
      img.onload = () => { runtime.assets[p] = img; res(); };
      img.onerror = () => res();
      img.src = p;
    })));
  }

  async function boot() {
    registerFunctions();
    await preloadAssets();
    const ld = document.getElementById("loading");
    if (ld) ld.style.display = "none";
    greenFlag();
    requestAnimationFrame(renderLoop);
  }

  window.__game = {
    runtime,
    get activeScene() { const s = sceneById[runtime.activeSceneId]; return s ? s.name : null; },
    get cloneCount() { return runtime.clones.length; },
    get threadCount() { return runtime.threads.size; },
    get varValues() { return { globalVars, lists }; },
    gotoScene: name => { const s = scenes.find(x => x.name === name); if (s) switchScene(s.id); },
  };

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
