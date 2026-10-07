// Simulador mínimo de la Plugin API de Figma para ejecutar plugin/code.js en
// Node y detectar errores (fuentes sin cargar, tamaños inválidos, reacciones
// con destinos fuera de página, etc.) antes de correrlo en Figma.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
let seq = 0;
const loaded = new Set();
const stats = { nodes: 0, reactions: 0, instances: 0, comps: 0 };

function fail(msg) { throw new Error('[fake-figma] ' + msg); }

class Node {
  constructor(type) {
    this.type = type; this.id = '1:' + (++seq); this.children = []; this.parent = null;
    this.x = 0; this.y = 0; this.width = 100; this.height = 100; this.name = type;
    this.layoutMode = 'NONE'; this._fills = []; this.reactions = []; stats.nodes++;
  }
  get fills() { return this._fills; }
  set fills(v) {
    if (!Array.isArray(v)) fail('fills debe ser arreglo en ' + this.name);
    for (const p of v) { if (!p || p.type !== 'SOLID' || !p.color) fail('paint inválido en ' + this.name + ': ' + JSON.stringify(p)); }
    this._fills = v;
  }
  appendChild(c) {
    if (c.parent) c.parent.children.splice(c.parent.children.indexOf(c), 1);
    this.children.push(c); c.parent = this;
  }
  setExplicitVariableModeForCollection(col, mode) {
    if (typeof col !== 'object' || !col.modes.some((m) => m.modeId === mode)) fail('modo inválido');
    if (!['FRAME', 'COMPONENT', 'INSTANCE'].includes(this.type)) fail('modo explícito en ' + this.type);
    this._mode = mode;
  }
  remove() { if (this.parent) this.parent.children.splice(this.parent.children.indexOf(this), 1); this.parent = null; }
  resize(w, h) {
    if (!(w > 0) || !(h > 0) || !isFinite(w) || !isFinite(h)) fail('resize inválido ' + w + 'x' + h + ' en ' + this.name);
    this.width = w; this.height = h;
  }
  rescale(s) { if (!(s > 0)) fail('rescale'); this.width *= s; this.height *= s; }
  findAll(fn) { const out = []; const walk = (n) => { for (const c of n.children) { if (fn(c)) out.push(c); walk(c); } }; walk(this); return out; }
  set layoutSizingHorizontal(v) { this._checkSizing(v, 'H'); this._lsh = v; }
  get layoutSizingHorizontal() { return this._lsh; }
  set layoutSizingVertical(v) { this._checkSizing(v, 'V'); this._lsv = v; }
  get layoutSizingVertical() { return this._lsv; }
  _checkSizing(v, ax) {
    const pAL = this.parent && this.parent.layoutMode && this.parent.layoutMode !== 'NONE';
    if (v === 'FILL' && !pAL) fail('FILL sin padre auto layout: ' + this.name);
    if (v === 'HUG' && this.layoutMode === 'NONE' && this.type !== 'TEXT') fail('HUG sin auto layout: ' + this.name);
    if (!pAL && this.layoutMode === 'NONE' && this.type !== 'TEXT') fail('layoutSizing en nodo sin auto layout: ' + this.name);
    if (this._abs && v === 'FILL') fail('FILL en absoluto');
  }
  set layoutPositioning(v) {
    if (v === 'ABSOLUTE' && !(this.parent && this.parent.layoutMode !== 'NONE')) fail('ABSOLUTE sin padre auto layout: ' + this.name);
    this._abs = v === 'ABSOLUTE';
  }
  async setReactionsAsync(rs) {
    for (const r of rs) {
      if (!r.trigger || !r.actions || !r.actions.length) fail('reacción incompleta');
      if (!['ON_CLICK', 'ON_DRAG'].includes(r.trigger.type)) fail('trigger ' + r.trigger.type);
      for (const a of r.actions) {
        if (a.type === 'BACK') continue;
        if (a.type !== 'NODE' || a.navigation !== 'NAVIGATE') fail('acción inválida');
        const dest = NODES.get(a.destinationId);
        if (!dest || dest.parent !== currentPage) fail('destino no es frame de primer nivel de la página: ' + a.destinationId);
        const t = a.transition;
        if (t) {
          const simple = ['DISSOLVE', 'SMART_ANIMATE'].includes(t.type);
          const dir = ['MOVE_IN', 'MOVE_OUT', 'PUSH', 'SLIDE_IN', 'SLIDE_OUT'].includes(t.type);
          if (!simple && !dir) fail('transición ' + t.type);
          if (dir && (!['LEFT', 'RIGHT', 'TOP', 'BOTTOM'].includes(t.direction) || typeof t.matchLayers !== 'boolean')) fail('transición direccional incompleta');
          if (!(t.duration > 0 && t.duration < 2) || !t.easing) fail('duración/easing');
        }
      }
    }
    let top = this; while (top.parent && top.parent.type !== 'PAGE') top = top.parent;
    if (!top.parent || top.parent !== currentPage) fail('reacción fuera de la página actual');
    this.reactions = rs; stats.reactions += rs.length;
  }
  createInstance() {
    if (this.type !== 'COMPONENT') fail('createInstance en ' + this.type);
    stats.instances++;
    const inst = new Node('INSTANCE'); inst.width = this.width; inst.height = this.height; inst.name = this.name;
    const clone = (src, dst) => { for (const c of src.children) { const n = new Node(c.type); n.name = c.name; dst.appendChild(n); clone(c, n); } };
    clone(this, inst);
    currentPage.appendChild(inst);
    return inst;
  }
}
const NODES = new Map();
function make(type) { const n = new Node(type); NODES.set(n.id, n); return n; }

class TextNode extends Node {
  constructor() { super('TEXT'); this._fontName = null; }
  set fontName(f) { if (!loaded.has(f.family + '|' + f.style)) fail('fuente no cargada ' + JSON.stringify(f)); this._fontName = f; }
  get fontName() { return this._fontName; }
  set characters(s) { if (!this._fontName) fail('characters antes de fontName'); if (typeof s !== 'string' || !s.length) fail('texto vacío en ' + this.name); this._ch = s; }
  get characters() { return this._ch; }
  async setTextStyleIdAsync(id) { if (!STYLE_IDS.has(id)) fail('estilo inexistente'); }
}
const STYLE_IDS = new Set();

const root = { children: [] };
function newPage(name) { const p = make('PAGE'); p.name = name; p.parent = null; root.children.push(p); p.flowStartingPoints = []; return p; }
let currentPage = newPage('Page 1');

const AVAILABLE = [];
for (const fam of ['Poppins', 'Inter']) for (const st of ['Regular', 'Medium', fam === 'Inter' ? 'Semi Bold' : 'SemiBold', 'Bold']) AVAILABLE.push({ fontName: { family: fam, style: st } });

const figma = {
  root,
  get currentPage() { return currentPage; },
  set currentPage(v) { fail('currentPage es de solo lectura con dynamic-page'); },
  async setCurrentPageAsync(p) { currentPage = p; },
  async listAvailableFontsAsync() { return AVAILABLE; },
  async loadFontAsync(f) { if (!AVAILABLE.some((a) => a.fontName.family === f.family && a.fontName.style === f.style)) fail('fuente no disponible ' + JSON.stringify(f)); loaded.add(f.family + '|' + f.style); },
  createPage() { return newPage('Page'); },
  createFrame() { const n = make('FRAME'); currentPage.appendChild(n); return n; },
  createComponent() { stats.comps++; const n = make('COMPONENT'); currentPage.appendChild(n); return n; },
  createText() { const n = new TextNode(); NODES.set(n.id, n); currentPage.appendChild(n); return n; },
  createRectangle() { const n = make('RECTANGLE'); currentPage.appendChild(n); return n; },
  createEllipse() { const n = make('ELLIPSE'); currentPage.appendChild(n); return n; },
  createPolygon() { const n = make('POLYGON'); currentPage.appendChild(n); return n; },
  createVector() {
    const n = make('VECTOR'); currentPage.appendChild(n);
    n.setVectorNetworkAsync = async (net) => {
      if (!net.vertices.length || net.segments.some((s) => s.end >= net.vertices.length)) fail('red vectorial inválida');
      for (const v of net.vertices) if (!isFinite(v.x) || !isFinite(v.y) || v.x < 0 || v.y < 0) fail('vértice inválido');
    };
    return n;
  },
  createNodeFromSvg(svg) {
    if (!/viewBox="[^"]+"/.test(svg) || !/ d="[Mm]/.test(svg)) fail('svg inválido');
    const f = make('FRAME'); currentPage.appendChild(f); const v = make('VECTOR'); f.appendChild(v); return f;
  },
  createTextStyle() { const s = { id: 'S:' + (++seq) }; STYLE_IDS.add(s.id); return s; },
  variables: {
    createVariableCollection(name) {
      const col = { name, modes: [{ modeId: 'm1' }], renameMode() {},
        addMode(n) { if (process.env.FAKE_NO_MODES) throw new Error('in addMode: Limited to 1 modes only'); col.modes.push({ modeId: 'm2' }); return 'm2'; } };
      return col;
    },
    createVariable(name, col, type) { if (typeof col !== 'object' || type !== 'COLOR') fail('createVariable'); return { id: 'V:' + name, setValueForMode(m, v) { if (v.a === undefined) fail('color sin alfa'); } }; },
    setBoundVariableForPaint(p, field, v) { if (field !== 'color' || !v) fail('bind'); return Object.assign({}, p, { boundVariables: { color: { type: 'VARIABLE_ALIAS', id: v.id } } }); }
  },
  notify() {},
  viewport: { scrollAndZoomIntoView() {} },
  closePlugin(msg) { console.log('closePlugin:', msg); figma.done = msg; }
};

const code = fs.readFileSync(path.join(ROOT, 'plugin/code.js'), 'utf8');
const ctx = vm.createContext({ figma, console, Math, JSON, String, Object, Array, Error, parseInt, Infinity, isFinite, Promise });
const t0 = Date.now();
vm.runInContext(code, ctx);
await new Promise((r) => { const iv = setInterval(() => { if (figma.done) { clearInterval(iv); r(); } }, 50); });
console.log('páginas:', root.children.map((p) => p.name + ' (' + p.children.length + ')').join(', '));
const proto = root.children.find((p) => p.name === '06 Prototype');
console.log('flow starts:', proto.flowStartingPoints.length, '| stats', stats, '|', Date.now() - t0, 'ms');
if (/^Error/.test(figma.done)) process.exit(1);
