// Backend HTML: dibuja el mismo árbol de nodos que el plugin de Figma con
// posicionamiento absoluto y flexbox, para exportar las láminas del informe
// con Chrome headless. Se ejecuta en el mismo contexto que src/*.js.

var H_MAIN = { start: 'flex-start', center: 'center', end: 'flex-end', between: 'space-between' };
var H_CROSS = { start: 'flex-start', center: 'center', end: 'flex-end', stretch: 'stretch' };
var H_SHADOW = {
  e1: '0 1px 3px rgba(0,0,0,0.12)',
  e3: '0 4px 8px rgba(0,0,0,0.16)',
  e6: '0 6px 12px rgba(0,0,0,0.20)'
};

function hColor(th, ref) {
  var c = resolveColor(th, ref);
  if (!c) return null;
  var rgb = hexToRgb(c.hex);
  return 'rgba(' + Math.round(rgb.r * 255) + ',' + Math.round(rgb.g * 255) + ',' + Math.round(rgb.b * 255) + ',' + c.a + ')';
}
function hEsc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function hRadius(r) {
  if (r === undefined || r === null) return '';
  if (typeof r === 'number') return 'border-radius:' + r + 'px;';
  return 'border-radius:' + r[0] + 'px ' + r[1] + 'px ' + r[2] + 'px ' + r[3] + 'px;';
}

// Estilos de posición y tamaño comunes.
function hBox(n, pdir, isText) {
  var s = '';
  var inFlow = pdir && !n.abs;
  if (!inFlow) s += 'position:absolute;left:' + (n.x || 0) + 'px;top:' + (n.y || 0) + 'px;';
  else s += 'position:relative;flex-shrink:0;';
  var w = n.w, h = n.h;
  if (inFlow && n.fillW) {
    if (pdir === 'H') s += 'flex:1 1 0;min-width:0;';
    else s += 'align-self:stretch;';
  } else if (w !== undefined && !isText) s += 'width:' + w + 'px;';
  else if (w !== undefined && isText) s += 'width:' + w + 'px;';
  if (inFlow && n.fillH) {
    if (pdir === 'V') s += 'flex:1 1 0;min-height:0;';
    else s += 'align-self:stretch;';
  } else if (h !== undefined && !isText) s += 'height:' + h + 'px;';
  if (n.opacity !== undefined) s += 'opacity:' + n.opacity + ';';
  if (n.blur) s += 'filter:blur(' + n.blur + 'px);';
  return s;
}

function hStroke(th, n) {
  if (!n.stroke) return '';
  return '<div style="position:absolute;inset:0;pointer-events:none;box-sizing:border-box;' + hRadius(n.r) +
    'border:' + (n.strokeW || 1) + 'px ' + (n.dash ? 'dashed' : 'solid') + ' ' + hColor(th, n.stroke) + '"></div>';
}

var H_HOT = false;

function hNode(th, n, pdir) {
  if (!n) return '';
  var t = n.t;
  if (t === 'diamond') {
    var pts = (n.w / 2) + ',1 ' + (n.w - 1) + ',' + (n.h / 2) + ' ' + (n.w / 2) + ',' + (n.h - 1) + ' 1,' + (n.h / 2);
    return '<svg style="position:absolute;left:' + n.x + 'px;top:' + n.y + 'px" width="' + n.w + '" height="' + n.h + '"><polygon points="' + pts + '" fill="' + hColor(th, n.fill) + '" stroke="' + hColor(th, n.stroke) + '" stroke-width="' + (n.strokeW || 1) + '"/></svg>';
  }
  if (t === 'frame') {
    var s = hBox(n, pdir, false) + 'box-sizing:border-box;';
    if (n.fill) s += 'background:' + hColor(th, n.fill) + ';';
    s += hRadius(n.r);
    if (n.shadow) s += 'box-shadow:' + H_SHADOW[n.shadow] + ';';
    if (n.clip) s += 'overflow:hidden;';
    if (H_HOT && n.go) s += 'outline:3px dashed #DC2626;outline-offset:-3px;';
    if (n.dir) {
      s += 'display:flex;flex-direction:' + (n.dir === 'H' ? 'row' : 'column') + ';';
      s += 'justify-content:' + H_MAIN[n.main || 'start'] + ';align-items:' + H_CROSS[n.cross || 'start'] + ';';
      if (n.gap) s += 'gap:' + n.gap + 'px;';
      if (n.pad !== undefined) {
        var p = typeof n.pad === 'number' ? [n.pad, n.pad, n.pad, n.pad] : n.pad;
        s += 'padding:' + p[0] + 'px ' + p[1] + 'px ' + p[2] + 'px ' + p[3] + 'px;';
      }
      if (n.w === undefined && !n.fillW) s += 'width:max-content;';
    }
    var inner = '';
    for (var i = 0; i < n.ch.length; i++) inner += hNode(th, n.ch[i], n.dir || null);
    return '<div data-n="' + hEsc(n.name || '') + '" style="' + s + '">' + inner + hStroke(th, n) + '</div>';
  }
  if (t === 'text') {
    var f = textFont(th, n);
    var st = hBox(n, pdir, true);
    st += 'font-family:\'' + f.family + '\';font-weight:' + f.weight + ';font-size:' + f.size + 'px;line-height:' + f.lh + 'px;';
    st += 'color:' + hColor(th, n.color || 'onSurface') + ';';
    st += 'white-space:' + ((n.w !== undefined || n.fillW) ? 'pre-wrap' : 'pre') + ';';
    if (n.align) st += 'text-align:' + n.align + ';';
    if (n.ls) st += 'letter-spacing:' + n.ls + 'px;';
    if (n.underline) st += 'text-decoration:underline;text-underline-offset:3px;';
    if (n.strike) st += 'text-decoration:line-through;';
    return '<div data-n="' + hEsc(n.name || '') + '" style="' + st + '">' + hEsc(n.text) + '</div>';
  }
  if (t === 'icon') {
    var sz = n.size || 24;
    var stI = hBox({ x: n.x, y: n.y, w: sz, h: sz, abs: n.abs }, pdir, false);
    return '<div data-n="icon/' + n.icon + '" style="' + stI + '"><svg width="' + sz + '" height="' + sz + '" viewBox="' + (ICON_VB[n.icon] || '0 -960 960 960') + '" style="display:block"><path d="' + ICONS[n.icon] + '" fill="' + hColor(th, n.color || 'onSurface') + '"/></svg></div>';
  }
  if (t === 'rect' || t === 'ellipse') {
    var sR = hBox(n, pdir, false) + 'box-sizing:border-box;';
    if (n.fill) sR += 'background:' + hColor(th, n.fill) + ';';
    sR += t === 'ellipse' ? 'border-radius:50%;' : hRadius(n.r);
    var strokeR = n.stroke ? hStroke(th, { stroke: n.stroke, strokeW: n.strokeW, dash: n.dash, r: t === 'ellipse' ? 9999 : n.r }) : '';
    return '<div data-n="' + hEsc(n.name || t) + '" style="' + sR + '">' + strokeR + '</div>';
  }
  if (t === 'arc') {
    var r = n.w / 2, ri = r * n.inner;
    function pt(rad, a) { return (r + rad * Math.cos(a)).toFixed(2) + ' ' + (r + rad * Math.sin(a)).toFixed(2); }
    var large = (n.end - n.start) > Math.PI ? 1 : 0;
    var d = 'M ' + pt(r, n.start) + ' A ' + r + ' ' + r + ' 0 ' + large + ' 1 ' + pt(r, n.end) +
      ' L ' + pt(ri, n.end) + ' A ' + ri + ' ' + ri + ' 0 ' + large + ' 0 ' + pt(ri, n.start) + ' Z';
    return '<svg style="position:absolute;left:' + n.x + 'px;top:' + n.y + 'px" width="' + n.w + '" height="' + n.h + '"><path d="' + d + '" fill="' + hColor(th, n.fill) + '"/></svg>';
  }
  if (t === 'line') {
    var pts = n.points, col = hColor(th, n.color || 'onSurface'), sw = n.sw || 2;
    var poly = pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' ');
    var out = '<polyline points="' + poly + '" fill="none" stroke="' + col + '" stroke-width="' + sw + '" stroke-linejoin="round"' + (n.dash ? ' stroke-dasharray="' + n.dash.join(' ') + '"' : '') + '/>';
    if (n.arrow !== false) {
      var a = pts[pts.length - 2], b = pts[pts.length - 1];
      var ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      var al = 6 + sw * 3, aw = al * 0.6;
      var p1 = [b[0] - al * Math.cos(ang) + aw * Math.sin(ang), b[1] - al * Math.sin(ang) - aw * Math.cos(ang)];
      var p2 = [b[0] - al * Math.cos(ang) - aw * Math.sin(ang), b[1] - al * Math.sin(ang) + aw * Math.cos(ang)];
      out += '<polygon points="' + b.join(',') + ' ' + p1.join(',') + ' ' + p2.join(',') + '" fill="' + col + '"/>';
    }
    return '<svg style="position:absolute;left:0;top:0;overflow:visible" width="1" height="1">' + out + '</svg>';
  }
  if (t === 'ref') {
    var sc = SCREENS[n.ref];
    var node = sc.build(THEMES[n.th || 'hf']);
    var scale = n.scale || 1;
    var prevHot = H_HOT;
    H_HOT = !!n.hot;
    var inner = hNode(THEMES[n.th || 'hf'], Object.assign({}, node, { x: 0, y: 0 }), null);
    H_HOT = prevHot;
    return '<div style="position:absolute;left:' + n.x + 'px;top:' + n.y + 'px;width:' + (W * scale) + 'px;height:' + (H * scale) + 'px;overflow:hidden;' +
      (n.r ? 'border-radius:' + n.r + 'px;' : '') + (n.shadow ? 'box-shadow:' + H_SHADOW[n.shadow] + ';' : '') +
      (n.stroke ? 'outline:' + (n.strokeW || 1) + 'px ' + (n.dash ? 'dashed' : 'solid') + ' ' + hColor(THEMES.hf, n.stroke) + ';outline-offset:' + (n.outlineOffset || 0) + 'px;' : '') + '">' +
      '<div style="position:absolute;left:0;top:0;width:' + W + 'px;height:' + H + 'px;transform:scale(' + scale + ');transform-origin:0 0">' +
      inner + '</div></div>';
  }
  return '';
}

function htmlDocument(th, node) {
  return '<!doctype html><html><head><meta charset="utf-8">' +
    '<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700&display=block" rel="stylesheet">' +
    '<style>html,body{margin:0;padding:0}body{width:' + node.w + 'px;height:' + node.h + 'px;position:relative;-webkit-font-smoothing:antialiased}</style>' +
    '</head><body>' + hNode(th, Object.assign({}, node, { x: 0, y: 0 }), null) + '</body></html>';
}
