// CraveWallet — generador del archivo de Figma de la sección 3.1.4.
// Núcleo: tokens del Design System (sección 3.1.1), temas de fidelidad y el
// DSL de nodos que comparten el backend de Figma y el backend HTML.
//
// El código evita sintaxis que el sandbox de plugins de Figma no siempre
// acepta (optional chaining, nullish coalescing, campos de clase).

// ---------------------------------------------------------------------------
// Tokens (3.1.1.1 Colors). La clave es el nombre corto; `v` es el nombre de la
// variable de Figma, que replica el token del Design System.
// ---------------------------------------------------------------------------
var TOKENS = {
  bg: { hex: '#F8FAFC', v: 'color/background' },
  surface: { hex: '#FFFFFF', v: 'color/surface' },
  surfaceVariant: { hex: '#EEF2F7', v: 'color/surface-variant' },
  onSurface: { hex: '#0F172A', v: 'color/on-surface' },
  onSurfaceVariant: { hex: '#64748B', v: 'color/on-surface-variant' },
  primary: { hex: '#3B4FD8', v: 'color/primary' },
  primaryContainer: { hex: '#E0E4FF', v: 'color/primary-container' },
  onPrimary: { hex: '#FFFFFF', v: 'color/on-primary' },
  onPrimaryContainer: { hex: '#0A1172', v: 'color/on-primary-container' },
  primaryDark: { hex: '#2537B0', v: 'color/primary-dark' },
  accent: { hex: '#F97316', v: 'color/accent' },
  accentContainer: { hex: '#FFF0E0', v: 'color/accent-container' },
  onAccent: { hex: '#FFFFFF', v: 'color/on-accent' },
  success: { hex: '#22C55E', v: 'color/success' },
  warning: { hex: '#FBBF24', v: 'color/warning' },
  error: { hex: '#EF4444', v: 'color/error' },
  info: { hex: '#38BDF8', v: 'color/info' },
  // Ajuste de accesibilidad: contenido sobre color-accent (el blanco da 2.8:1).
  accentInk: { hex: '#0F172A', v: 'color/on-accent-accessible' }
};

// Modo oscuro. El Design System (3.1.1) solo define el modo claro; estos
// valores mantienen el matiz de cada token y se aclaran los colores que se
// usan como texto o acción para que todos los pares cumplan WCAG AA sobre
// las superficies oscuras (mínimo 5.7:1).
var DARK = {
  bg: '#0B1120', surface: '#151E31', surfaceVariant: '#1E293B', onSurface: '#F1F5F9', onSurfaceVariant: '#94A3B8',
  primary: '#AAB4FF', primaryContainer: '#2A3AA8', onPrimary: '#0A1172', onPrimaryContainer: '#E0E4FF', primaryDark: '#C7CDFF',
  accent: '#FB923C', accentContainer: '#3A2416', onAccent: '#0F172A',
  success: '#4ADE80', warning: '#FCD34D', error: '#F87171', info: '#7DD3FC', accentInk: '#0F172A'
};

// Wireframe: la misma estructura en grises. Un solo tono oscuro para la acción
// principal; los estados se leen por ícono y texto, nunca por color.
var WF_COLORS = {
  bg: '#FFFFFF', surface: '#FFFFFF', surfaceVariant: '#EDEDED', onSurface: '#1F1F1F',
  onSurfaceVariant: '#6B6B6B', primary: '#2E2E2E', primaryContainer: '#E3E3E3',
  onPrimary: '#FFFFFF', onPrimaryContainer: '#1F1F1F', primaryDark: '#000000',
  accent: '#D0D0D0', accentContainer: '#F1F1F1', onAccent: '#1F1F1F', accentInk: '#1F1F1F',
  success: '#7A7A7A', warning: '#9A9A9A', error: '#2E2E2E', info: '#8A8A8A'
};

var THEMES = {
  hf: { id: 'hf', fontH: 'Poppins', fontB: 'Inter', board: '#E9EEF5', boardInk: '#0F172A', boardSub: '#475569' },
  wf: { id: 'wf', fontH: 'Inter', fontB: 'Inter', board: '#F2F2F2', boardInk: '#1F1F1F', boardSub: '#5C5C5C' },
  dk: { id: 'dk', fontH: 'Poppins', fontB: 'Inter', board: '#05080F', boardInk: '#F1F5F9', boardSub: '#94A3B8' }
};

// Escala tipográfica móvil (3.1.1.3, roles Material 3 + tabla 3.1.1.1).
var TYPE = {
  amount: { f: 'h', w: 700, s: 32, lh: 40, name: 'Mobile/Monto principal' },
  headline: { f: 'h', w: 600, s: 28, lh: 36, name: 'Mobile/Headline Medium' },
  title: { f: 'h', w: 600, s: 22, lh: 28, name: 'Mobile/Title Large' },
  section: { f: 'h', w: 600, s: 18, lh: 24, name: 'Mobile/Heading 2' },
  bodyL: { f: 'b', w: 400, s: 16, lh: 24, name: 'Mobile/Body Large' },
  body: { f: 'b', w: 400, s: 14, lh: 20, name: 'Mobile/Body Medium' },
  bodyEm: { f: 'b', w: 500, s: 14, lh: 20, name: 'Mobile/Body enfatizado' },
  label: { f: 'b', w: 500, s: 14, lh: 20, name: 'Mobile/Label Large' },
  caption: { f: 'b', w: 400, s: 12, lh: 16, name: 'Mobile/Caption' },
  currency: { f: 'b', w: 500, s: 12, lh: 16, name: 'Mobile/Código de moneda' },
  small: { f: 'b', w: 400, s: 11, lh: 16, name: 'Mobile/Label Small' }
};

// Colores de marca de los servicios (solo para el avatar con la inicial; el
// nombre del servicio siempre va escrito al lado).
var BRANDS = {
  spotify: { n: 'Spotify Premium', c: '#1DB954', i: 'S', ink: '#0F172A' },
  linkedin: { n: 'LinkedIn Premium', c: '#0A66C2', i: 'in' },
  max: { n: 'Max', c: '#002BE7', i: 'M' },
  smartfit: { n: 'Smart Fit Black', c: '#FFC20E', i: 'SF', ink: '#0F172A' },
  youtube: { n: 'YouTube Premium', c: '#FF0000', i: 'YT' },
  prime: { n: 'Amazon Prime', c: '#00A8E1', i: 'a', ink: '#0F172A' },
  pedidosya: { n: 'PedidosYa Plus', c: '#FA0050', i: 'P' },
  notion: { n: 'Notion Plus', c: '#191919', i: 'N' },
  netflix: { n: 'Netflix', c: '#E50914', i: 'N' },
  disney: { n: 'Disney+', c: '#113CCF', i: 'D+' },
  googleone: { n: 'Google One', c: '#4285F4', i: 'G' },
  chatgpt: { n: 'ChatGPT Plus', c: '#10A37F', i: 'AI' },
  rappi: { n: 'Rappi Prime', c: '#FF441F', i: 'R' },
  crunchy: { n: 'Crunchyroll', c: '#F47521', i: 'C' },
  platzi: { n: 'Platzi', c: '#98CA3F', i: 'P', ink: '#0F172A' },
  coursera: { n: 'Coursera Plus', c: '#0056D2', i: 'C' }
};

// ---------------------------------------------------------------------------
// Datos de ejemplo compartidos por todas las pantallas (Renzo Salazar,
// persona del Segmento 2, plan Premium). Tipo de cambio del día: S/ 3.76.
// ---------------------------------------------------------------------------
var FX = { rate: '3.76', prev: '3.73', updated: 'hoy, 08:00' };
var SUBS = [
  { k: 'spotify', cat: 'Música', amt: 'S/ 20.90', orig: null, date: '6 oct', when: 'Mañana', st: 'hoy' },
  { k: 'linkedin', cat: 'Productividad', amt: 'S/ 150.36', orig: 'USD 39.99', date: '9 oct', when: 'En 4 días', st: 'pronto' },
  { k: 'max', cat: 'Streaming', amt: 'S/ 34.90', orig: null, date: '12 oct', when: 'En 7 días', st: 'pronto' },
  { k: 'smartfit', cat: 'Fitness', amt: 'S/ 129.90', orig: null, date: '15 oct', when: 'En 10 días', st: 'sinuso' },
  { k: 'youtube', cat: 'Streaming', amt: 'S/ 25.90', orig: null, date: '18 oct', when: 'En 13 días', st: 'activa' },
  { k: 'prime', cat: 'Streaming', amt: 'S/ 56.36', orig: 'USD 14.99', date: '22 oct', when: 'En 17 días', st: 'activa' },
  { k: 'pedidosya', cat: 'Delivery', amt: 'S/ 14.90', orig: null, date: '27 oct', when: 'En 22 días', st: 'activa' }
];
var TOTAL = 'S/ 433.22';
var TOTAL_NEW = 'S/ 478.34';
var CATS = [
  { n: 'Productividad', icon: 'work', v: 150.36, pct: 35, amt: 'S/ 150.36', tok: 'primary' },
  { n: 'Fitness', icon: 'fitness_center', v: 129.90, pct: 30, amt: 'S/ 129.90', tok: 'accent' },
  { n: 'Streaming', icon: 'play_circle', v: 117.16, pct: 27, amt: 'S/ 117.16', tok: 'info' },
  { n: 'Música', icon: 'headphones', v: 20.90, pct: 5, amt: 'S/ 20.90', tok: 'success' },
  { n: 'Delivery', icon: 'moped', v: 14.90, pct: 3, amt: 'S/ 14.90', tok: 'warning' }
];
var MONTHS = [
  { m: 'May', v: 389.40 }, { m: 'Jun', v: 402.10 }, { m: 'Jul', v: 398.75 },
  { m: 'Ago', v: 421.60 }, { m: 'Sep', v: 401.15 }, { m: 'Oct', v: 433.22 }
];

// ---------------------------------------------------------------------------
// Utilidades de color
// ---------------------------------------------------------------------------
function hexToRgb(hex) {
  var h = hex.replace('#', '');
  return { r: parseInt(h.substr(0, 2), 16) / 255, g: parseInt(h.substr(2, 2), 16) / 255, b: parseInt(h.substr(4, 2), 16) / 255 };
}
function lum(hex) {
  var c = hexToRgb(hex);
  function ch(v) { return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }
  return 0.2126 * ch(c.r) + 0.7152 * ch(c.g) + 0.0722 * ch(c.b);
}
function contrast(a, b) {
  var la = lum(a), lb = lum(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}

// Resuelve una referencia de color a { hex, a, token }.
// Formas: 'primary' (token), '#RRGGBB', { c: 'primary', a: 0.12 }.
function resolveColor(th, ref) {
  if (ref === null || ref === undefined) return null;
  var a = 1, key = ref;
  if (typeof ref === 'object') { key = ref.c; a = ref.a === undefined ? 1 : ref.a; }
  if (key.charAt(0) === '#') return { hex: key, a: a, token: null };
  if (th.id === 'wf') return { hex: WF_COLORS[key], a: a, token: null };
  if (th.id === 'dk') return { hex: DARK[key], a: a, token: key };
  if (!TOKENS[key]) throw new Error('Token desconocido: ' + key);
  return { hex: TOKENS[key].hex, a: a, token: key };
}

// ---------------------------------------------------------------------------
// DSL de nodos
//   F(props, children)  frame (auto layout con dir: 'H' | 'V')
//   T(text, props)      texto (props.ts = rol tipográfico de TYPE)
//   I(name, props)      ícono Material Symbols
//   R(props) / E(props) rectángulo / elipse;  ARC(props) sector de dona
//   L(props)            línea con flecha opcional (points: [[x,y], ...])
//   REF(props)          instancia de una pantalla ya construida (componente)
// Props comunes: name, x, y, w, h, fill, stroke, strokeW, dash, r, clip,
// shadow, opacity, blur, abs, fillW, fillH, go (enlace de prototipo).
// ---------------------------------------------------------------------------
function F(props, children) {
  var n = { t: 'frame', ch: (children || []).filter(Boolean) };
  for (var k in props) n[k] = props[k];
  return n;
}
function T(text, props) {
  var n = { t: 'text', text: text };
  for (var k in props) n[k] = props[k];
  return n;
}
function I(name, props) {
  if (!ICONS[name]) throw new Error('Ícono no incluido: ' + name);
  var n = { t: 'icon', icon: name, size: 24 };
  for (var k in props) n[k] = props[k];
  return n;
}
function R(props) { var n = { t: 'rect' }; for (var k in props) n[k] = props[k]; return n; }
function E(props) { var n = { t: 'ellipse' }; for (var k in props) n[k] = props[k]; return n; }
function ARC(props) { var n = { t: 'arc' }; for (var k in props) n[k] = props[k]; return n; }
function L(props) { var n = { t: 'line' }; for (var k in props) n[k] = props[k]; return n; }
function REF(props) { var n = { t: 'ref' }; for (var k in props) n[k] = props[k]; return n; }

// Resuelve la familia y el peso de un nodo de texto según el tema.
function textFont(th, n) {
  var spec = n.ts ? TYPE[n.ts] : TYPE.body;
  var fam = n.font || ((n.f || spec.f) === 'h' ? th.fontH : th.fontB);
  return {
    family: fam,
    weight: n.wt || spec.w,
    size: n.s || spec.s,
    lh: n.lh || (n.s ? Math.round(n.s * 1.35) : spec.lh)
  };
}

// Pantallas registradas: id -> { title, us, build(th) }.
var SCREENS = {};
var SCREEN_ORDER = [];
function screen(id, title, us, build) {
  SCREENS[id] = { id: id, title: title, us: us, build: build };
  SCREEN_ORDER.push(id);
}
