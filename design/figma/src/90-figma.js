// Backend de Figma: recorre el mismo árbol de nodos y lo crea con la Plugin
// API. Genera variables de color, estilos de texto, componentes (íconos y
// pantallas), las páginas del archivo y las interacciones del prototipo.

var F_MAIN = { start: 'MIN', center: 'CENTER', end: 'MAX', between: 'SPACE_BETWEEN' };
var F_CROSS = { start: 'MIN', center: 'CENTER', end: 'MAX', stretch: 'MIN' };
var F_SHADOW = {
  e1: { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.12 }, offset: { x: 0, y: 1 }, radius: 3, spread: 0, visible: true, blendMode: 'NORMAL' },
  e3: { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.16 }, offset: { x: 0, y: 4 }, radius: 8, spread: 0, visible: true, blendMode: 'NORMAL' },
  e6: { type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.2 }, offset: { x: 0, y: 6 }, radius: 12, spread: 0, visible: true, blendMode: 'NORMAL' }
};
var WEIGHT_NAMES = { 400: ['regular'], 500: ['medium'], 600: ['semibold'], 700: ['bold'] };

var FONTS = {};      // 'Poppins|600' -> FontName
var VARS = {};       // token -> Variable
var STYLES = {};     // rol tipográfico -> TextStyle
var ICON_COMPS = {}; // nombre -> ComponentNode
var VARS_DK = {};    // token -> Variable de la colección oscura (si no hay modos)
var COLLECTION = null, DARK_MODE_ID = null;

async function loadFonts() {
  var avail = await figma.listAvailableFontsAsync();
  var fams = ['Poppins', 'Inter'];
  for (var f = 0; f < fams.length; f++) {
    for (var w in WEIGHT_NAMES) {
      var found = null;
      for (var i = 0; i < avail.length; i++) {
        var fn = avail[i].fontName;
        if (fn.family !== fams[f]) continue;
        var st = fn.style.toLowerCase().replace(/\s+/g, '');
        if (WEIGHT_NAMES[w].indexOf(st) >= 0) { found = fn; break; }
      }
      if (!found) found = { family: 'Inter', style: w === '400' ? 'Regular' : (w === '500' ? 'Medium' : (w === '600' ? 'Semi Bold' : 'Bold')) };
      await figma.loadFontAsync(found);
      FONTS[fams[f] + '|' + w] = found;
    }
  }
}

function fontName(family, weight) {
  return FONTS[family + '|' + weight] || FONTS['Inter|' + weight] || FONTS['Inter|400'];
}

function createVariables() {
  var col = figma.variables.createVariableCollection('CraveWallet · Tokens');
  var mode = col.modes[0].modeId;
  col.renameMode(mode, 'Light');
  COLLECTION = col;
  // El modo Dark requiere un plan con varios modos; si el archivo está en el
  // plan Starter, el modo oscuro usa una segunda colección de un solo modo.
  try { DARK_MODE_ID = col.addMode('Dark'); } catch (e) { DARK_MODE_ID = null; }
  var colDk = DARK_MODE_ID ? null : figma.variables.createVariableCollection('CraveWallet · Tokens (modo oscuro)');
  for (var k in TOKENS) {
    var v = figma.variables.createVariable(TOKENS[k].v, col, 'COLOR');
    var c = hexToRgb(TOKENS[k].hex);
    v.setValueForMode(mode, { r: c.r, g: c.g, b: c.b, a: 1 });
    var d = hexToRgb(DARK[k]);
    if (DARK_MODE_ID) v.setValueForMode(DARK_MODE_ID, { r: d.r, g: d.g, b: d.b, a: 1 });
    else {
      var vd = figma.variables.createVariable(TOKENS[k].v, colDk, 'COLOR');
      vd.setValueForMode(colDk.modes[0].modeId, { r: d.r, g: d.g, b: d.b, a: 1 });
      VARS_DK[k] = vd;
    }
    VARS[k] = v;
  }
}

function setDark(node) {
  if (DARK_MODE_ID) node.setExplicitVariableModeForCollection(COLLECTION, DARK_MODE_ID);
}

function createTextStyles() {
  for (var role in TYPE) {
    var sp = TYPE[role];
    var st = figma.createTextStyle();
    st.name = sp.name;
    st.fontName = fontName(sp.f === 'h' ? 'Poppins' : 'Inter', sp.w);
    st.fontSize = sp.s;
    st.lineHeight = { unit: 'PIXELS', value: sp.lh };
    STYLES[role] = st;
  }
}

function solid(th, ref) {
  var c = resolveColor(th, ref);
  if (!c) return null;
  var p = { type: 'SOLID', color: hexToRgb(c.hex), opacity: c.a };
  var bank = (th.id === 'dk' && !DARK_MODE_ID) ? VARS_DK : VARS;
  if (c.token && bank[c.token]) p = figma.variables.setBoundVariableForPaint(p, 'color', bank[c.token]);
  return p;
}

function applyRadius(node, r) {
  if (r === undefined || r === null) return;
  if (typeof r === 'number') node.cornerRadius = r;
  else { node.topLeftRadius = r[0]; node.topRightRadius = r[1]; node.bottomRightRadius = r[2]; node.bottomLeftRadius = r[3]; }
}

function applyStroke(th, node, n) {
  if (!n.stroke) return;
  node.strokes = [solid(th, n.stroke)];
  node.strokeWeight = n.strokeW || 1;
  node.strokeAlign = 'INSIDE';
  if (n.dash) node.dashPattern = n.dash;
}

function place(node, n, pdir) {
  if (pdir && n.abs) node.layoutPositioning = 'ABSOLUTE';
  if (!pdir || n.abs) { node.x = n.x || 0; node.y = n.y || 0; }
}

function buildIconComponents(parent) {
  var names = Object.keys(ICONS).sort();
  var holder = figma.createFrame();
  parent.appendChild(holder);
  holder.name = 'Íconos · Material Symbols Rounded';
  holder.layoutMode = 'HORIZONTAL';
  holder.layoutWrap = 'WRAP';
  holder.itemSpacing = 24; holder.counterAxisSpacing = 24;
  holder.paddingTop = holder.paddingBottom = holder.paddingLeft = holder.paddingRight = 32;
  holder.resize(1880, 100);
  holder.primaryAxisSizingMode = 'FIXED';
  holder.counterAxisSizingMode = 'AUTO';
  holder.fills = [solid(THEMES.hf, 'surface')];
  for (var i = 0; i < names.length; i++) {
    var vb = ICON_VB[names[i]] || '0 -960 960 960';
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="' + vb + '"><path d="' + ICONS[names[i]] + '" fill="#0F172A"/></svg>';
    var tmp = figma.createNodeFromSvg(svg);
    var comp = figma.createComponent();
    holder.appendChild(comp);
    comp.name = 'Icon/' + names[i];
    comp.resize(24, 24);
    comp.fills = [];
    var kids = tmp.children.slice();
    for (var k = 0; k < kids.length; k++) {
      comp.appendChild(kids[k]);
      kids[k].constraints = { horizontal: 'SCALE', vertical: 'SCALE' };
    }
    tmp.remove();
    ICON_COMPS[names[i]] = comp;
  }
  return holder;
}

function recolor(th, node, color) {
  var vecs = node.findAll(function (x) { return x.type === 'VECTOR' || x.type === 'BOOLEAN_OPERATION'; });
  for (var i = 0; i < vecs.length; i++) vecs[i].fills = [solid(th, color)];
}

// Crea el nodo `n` dentro de `parent`. pdir = dirección del auto layout del padre.
async function fBuild(th, n, parent, pdir, ctx) {
  if (!n) return null;
  var node = null;
  var t = n.t;

  if (t === 'frame') {
    node = n.comp || n.screen && ctx.screenComp ? figma.createComponent() : figma.createFrame();
    parent.appendChild(node);
    node.name = n.name || 'Frame';
    node.fills = n.fill ? [solid(th, n.fill)] : [];
    applyStroke(th, node, n);
    applyRadius(node, n.r);
    node.clipsContent = !!n.clip;
    var fx = [];
    if (n.shadow) fx.push(F_SHADOW[n.shadow]);
    if (n.blur) fx.push({ type: 'LAYER_BLUR', blurType: 'NORMAL', radius: n.blur, visible: true });
    if (fx.length) node.effects = fx;
    if (n.opacity !== undefined) node.opacity = n.opacity;
    if (n.dir) {
      node.layoutMode = n.dir === 'H' ? 'HORIZONTAL' : 'VERTICAL';
      node.itemSpacing = n.gap || 0;
      var p = n.pad === undefined ? [0, 0, 0, 0] : (typeof n.pad === 'number' ? [n.pad, n.pad, n.pad, n.pad] : n.pad);
      node.paddingTop = p[0]; node.paddingRight = p[1]; node.paddingBottom = p[2]; node.paddingLeft = p[3];
      node.primaryAxisAlignItems = F_MAIN[n.main || 'start'];
      node.counterAxisAlignItems = F_CROSS[n.cross || 'start'];
    }
    node.resize(Math.max(1, n.w === undefined ? 100 : n.w), Math.max(1, n.h === undefined ? 100 : n.h));
    place(node, n, pdir);
    var canSize = !!n.dir || (!!pdir && !n.abs);
    if (canSize) {
      node.layoutSizingHorizontal = (pdir && !n.abs && n.fillW) ? 'FILL' : ((n.w === undefined && n.dir) ? 'HUG' : 'FIXED');
      node.layoutSizingVertical = (pdir && !n.abs && n.fillH) ? 'FILL' : ((n.h === undefined && n.dir) ? 'HUG' : 'FIXED');
    }
    for (var i = 0; i < n.ch.length; i++) await fBuild(th, n.ch[i], node, n.dir || null, ctx);
    if (n.scroll) node.overflowDirection = n.scroll === 'H' ? 'HORIZONTAL' : 'VERTICAL';
    if (n.darkMode) setDark(node);
  } else if (t === 'text') {
    if (!n.text) return null;
    node = figma.createText();
    parent.appendChild(node);
    var f = textFont(th, n);
    node.fontName = fontName(f.family, f.weight);
    node.characters = n.text;
    node.fontSize = f.size;
    node.lineHeight = { unit: 'PIXELS', value: f.lh };
    if (th.id === 'hf' && n.ts && STYLES[n.ts] && n.s === undefined && n.wt === undefined && n.lh === undefined && n.font === undefined) {
      await node.setTextStyleIdAsync(STYLES[n.ts].id);
    }
    node.fills = [solid(th, n.color || 'onSurface')];
    node.name = n.name || n.text.slice(0, 40);
    if (n.align) node.textAlignHorizontal = n.align === 'center' ? 'CENTER' : (n.align === 'right' ? 'RIGHT' : 'LEFT');
    if (n.underline) node.textDecoration = 'UNDERLINE';
    if (n.strike) node.textDecoration = 'STRIKETHROUGH';
    if (n.ls) node.letterSpacing = { unit: 'PIXELS', value: n.ls };
    place(node, n, pdir);
    if (n.w !== undefined) { node.textAutoResize = 'HEIGHT'; node.resize(n.w, Math.max(1, node.height)); }
    else if (pdir && n.fillW && !n.abs) { node.layoutSizingHorizontal = 'FILL'; node.textAutoResize = 'HEIGHT'; }
    else node.textAutoResize = 'WIDTH_AND_HEIGHT';
  } else if (t === 'icon') {
    var sz = n.size || 24;
    node = ICON_COMPS[n.icon].createInstance();
    parent.appendChild(node);
    node.name = 'icon/' + n.icon;
    if (sz !== 24) node.resize(sz, sz);
    recolor(th, node, n.color || 'onSurface');
    place(node, n, pdir);
  } else if (t === 'rect' || t === 'ellipse' || t === 'arc') {
    node = t === 'rect' ? figma.createRectangle() : figma.createEllipse();
    parent.appendChild(node);
    node.name = n.name || (t === 'rect' ? 'Rectangle' : 'Ellipse');
    node.resize(Math.max(0.01, n.w), Math.max(0.01, n.h));
    node.fills = n.fill ? [solid(th, n.fill)] : [];
    applyStroke(th, node, n);
    if (t === 'rect') applyRadius(node, n.r);
    if (t === 'arc') node.arcData = { startingAngle: n.start, endingAngle: n.end, innerRadius: n.inner };
    place(node, n, pdir);
  } else if (t === 'diamond') {
    node = figma.createPolygon();
    parent.appendChild(node);
    node.name = n.name || 'Decisión';
    node.pointCount = 4;
    node.resize(n.w, n.h);
    node.fills = [solid(th, n.fill)];
    node.strokes = [solid(th, n.stroke)];
    node.strokeWeight = n.strokeW || 1;
    place(node, n, pdir);
  } else if (t === 'line') {
    node = figma.createVector();
    parent.appendChild(node);
    node.name = n.name || 'Flecha';
    var minX = Infinity, minY = Infinity;
    for (var a = 0; a < n.points.length; a++) { minX = Math.min(minX, n.points[a][0]); minY = Math.min(minY, n.points[a][1]); }
    var verts = [], segs = [];
    for (var b = 0; b < n.points.length; b++) {
      var vtx = { x: n.points[b][0] - minX, y: n.points[b][1] - minY, strokeCap: 'NONE', strokeJoin: 'ROUND' };
      if (b === n.points.length - 1 && n.arrow !== false) vtx.strokeCap = 'ARROW_EQUILATERAL';
      verts.push(vtx);
      if (b > 0) segs.push({ start: b - 1, end: b });
    }
    await node.setVectorNetworkAsync({ vertices: verts, segments: segs, regions: [] });
    node.strokes = [solid(th, n.color || 'onSurface')];
    node.strokeWeight = n.sw || 2;
    if (n.dash) node.dashPattern = n.dash;
    node.fills = [];
    node.x = minX; node.y = minY;
  } else if (t === 'ref') {
    var thR = THEMES[n.th || 'hf'];
    var key = (n.th || 'hf') + ':' + n.ref;
    if (n.own) {
      var root = SCREENS[n.ref].build(thR);
      root.x = n.x; root.y = n.y;
      var prev = ctx.screenComp;
      ctx.screenComp = true;
      node = await fBuild(thR, root, parent, pdir, { screenComp: true, collect: false, links: ctx.links });
      ctx.screenComp = prev;
      node.description = SCREENS[n.ref].title + ' — ' + SCREENS[n.ref].us;
      if (n.shadow) node.effects = [F_SHADOW[n.shadow]];
      ctx.comps[key] = node;
    } else if (ctx.comps[key]) {
      node = ctx.comps[key].createInstance();
      parent.appendChild(node);
      node.rescale(n.scale || 1);
      if (n.shadow) node.effects = [F_SHADOW[n.shadow]];
      node.x = n.x; node.y = n.y;
    }
  }

  if (node && n.go && ctx.collect) ctx.links.push({ node: node, go: n.go });
  return node;
}

function fTransition(tr) {
  var ease = { type: 'EASE_IN_AND_OUT' };
  if (tr === 'push') return { type: 'PUSH', direction: 'LEFT', matchLayers: false, easing: ease, duration: 0.3 };
  if (tr === 'pushBack') return { type: 'PUSH', direction: 'RIGHT', matchLayers: false, easing: ease, duration: 0.3 };
  if (tr === 'up') return { type: 'MOVE_IN', direction: 'TOP', matchLayers: false, easing: { type: 'EASE_OUT' }, duration: 0.3 };
  if (tr === 'down') return { type: 'MOVE_OUT', direction: 'BOTTOM', matchLayers: false, easing: { type: 'EASE_IN' }, duration: 0.25 };
  if (tr === 'smart') return { type: 'SMART_ANIMATE', easing: ease, duration: 0.3 };
  if (tr === 'fade') return { type: 'DISSOLVE', easing: { type: 'EASE_OUT' }, duration: 0.2 };
  return null;
}

// Construye las 31 pantallas como frames de primer nivel en `pp`, con sus
// interacciones y puntos de inicio. Devuelve el número de interacciones.
async function buildPrototype(pp, th, prefix, ctx) {
  await figma.setCurrentPageAsync(pp);
  var frames = {};
  var pctx = { comps: ctx.comps, links: [], collect: true, screenComp: false };
  var y = 0;
  for (var r = 0; r < PROTO_ROWS.length; r++) {
    var label = figma.createText();
    pp.appendChild(label);
    label.fontName = fontName('Poppins', 600);
    label.characters = prefix + PROTO_ROWS[r].t;
    label.fontSize = 40;
    label.fills = [{ type: 'SOLID', color: hexToRgb(th.id === 'dk' ? '#94A3B8' : '#0F172A') }];
    label.x = 0; label.y = y;
    for (var s = 0; s < PROTO_ROWS[r].s.length; s++) {
      var id = PROTO_ROWS[r].s[s];
      figma.notify('CraveWallet: ' + prefix + 'prototipo · ' + id, { timeout: 800 });
      var fr = await fBuild(th, SCREENS[id].build(th), pp, null, pctx);
      if (th.id === 'dk') setDark(fr);
      fr.x = s * (W + 120);
      fr.y = y + 80;
      frames[id] = fr;
    }
    y += 80 + H + 240;
  }
  if (th.id === 'dk') pp.backgrounds = [{ type: 'SOLID', color: hexToRgb('#05080F') }];

  var byNode = {};
  for (var l = 0; l < pctx.links.length; l++) {
    var lk = pctx.links[l];
    var action;
    if (lk.go.back) action = { type: 'BACK' };
    else action = { type: 'NODE', destinationId: frames[lk.go.to].id, navigation: 'NAVIGATE', transition: fTransition(lk.go.tr), resetScrollPosition: true };
    var trig = lk.go.trig === 'drag' ? { type: 'ON_DRAG' } : { type: 'ON_CLICK' };
    var k2 = lk.node.id;
    if (!byNode[k2]) byNode[k2] = { node: lk.node, reactions: [] };
    byNode[k2].reactions.push({ trigger: trig, actions: [action] });
  }
  for (var nid in byNode) await byNode[nid].node.setReactionsAsync(byNode[nid].reactions);

  var starts = [];
  for (var f = 0; f < PROTO_FLOWS.length; f++) starts.push({ nodeId: frames[PROTO_FLOWS[f].id].id, name: prefix + PROTO_FLOWS[f].name });
  pp.flowStartingPoints = starts;
  return pctx.links.length;
}

async function main() {
  figma.notify('CraveWallet: preparando fuentes, variables y estilos…', { timeout: 4000 });
  await loadFonts();
  createVariables();
  createTextStyles();

  var pages = {};
  var cover = figma.root.children[0];
  cover.name = '00 Portada';
  pages['00 Portada'] = cover;
  function page(name) {
    if (!pages[name]) { var p = figma.createPage(); p.name = name; pages[name] = p; }
    return pages[name];
  }
  var order = ['00 Portada', '01 Design System', '02 Wireframes', '03 Wireflows', '04 Mock-ups', '05 User Flows', '06 Prototype', '07 Modo oscuro', '08 Prototype · Modo oscuro'];
  for (var o = 0; o < order.length; o++) page(order[o]);

  await figma.setCurrentPageAsync(pages['01 Design System']);
  var iconsHolder = buildIconComponents(pages['01 Design System']);

  var ctx = { comps: {}, links: [], collect: false, screenComp: false };
  var pageY = {};
  var boards = BOARDS();
  for (var i = 0; i < boards.length; i++) {
    var b = boards[i];
    if (!b.page) continue;
    var pg = pages[b.page];
    await figma.setCurrentPageAsync(pg);
    figma.notify('CraveWallet: ' + b.page + ' · ' + b.node.name, { timeout: 1500 });
    var node = await fBuild(THEMES[b.th], b.node, pg, null, ctx);
    node.x = 0;
    node.y = pageY[b.page] || 0;
    pageY[b.page] = node.y + node.height + 240;
  }
  iconsHolder.x = 0;
  iconsHolder.y = pageY['01 Design System'] || 0;

  var nLinks = await buildPrototype(pages['06 Prototype'], THEMES.hf, '', ctx);
  nLinks += await buildPrototype(pages['08 Prototype · Modo oscuro'], THEMES.dk, 'Modo oscuro · ', ctx);

  await figma.setCurrentPageAsync(cover);
  figma.viewport.scrollAndZoomIntoView(cover.children);
  figma.closePlugin('CraveWallet listo: ' + SCREEN_ORDER.length + ' pantallas en modo claro y oscuro, ' + nLinks + ' interacciones de prototipo' + (DARK_MODE_ID ? '.' : ' (modo oscuro con colección propia: el plan no admite modos).'));
}

main().catch(function (e) {
  console.error(e);
  figma.closePlugin('Error al generar: ' + (e && e.message ? e.message : e));
});
