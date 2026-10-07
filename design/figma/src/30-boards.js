// Láminas del archivo de Figma y del informe: wireframes, wireflows,
// mock-ups, user flows, mapa del prototipo, design system y portada.

var LAMINAS = [
  { k: '01_inicio_gastos', t: 'Inicio y Gastos', s: ['I1', 'I2', 'G1', 'G2'] },
  { k: '02_detalle_alta', t: 'Detalle y alta de una suscripción (paso 1)', s: ['G3', 'A1', 'A2'] },
  { k: '03_alta_validacion', t: 'Alta: validación, moneda y vista previa en soles', s: ['A3', 'A4', 'A5'] },
  { k: '04_alta_recordatorio', t: 'Alta: recordatorio, permiso y resultado', s: ['A6', 'A7', 'I3', 'I4'] },
  { k: '05_alta_alternas', t: 'Alta: salidas alternas', s: ['A8', 'A9'] },
  { k: '06_analisis_1', t: 'Análisis (1 de 2)', s: ['N1', 'N2', 'N3'] },
  { k: '07_analisis_2', t: 'Análisis (2 de 2): estados alternos', s: ['N4', 'N5', 'N6'] },
  { k: '08_perfil_1', t: 'Perfil y recordatorios (1 de 3)', s: ['P1', 'P2', 'P3', 'P4'] },
  { k: '09_perfil_2', t: 'Perfil y recordatorios (2 de 3)', s: ['P5', 'P6', 'P7'] },
  { k: '10_perfil_3', t: 'Perfil y recordatorios (3 de 3)', s: ['P8', 'P9'] }
];

var BOARD_PAD = 64;

function boardHeader(th, title, sub, w) {
  return [
    T(title, { name: 'Título', x: BOARD_PAD, y: 56, font: th.fontH, wt: 700, s: 36, lh: 44, color: th.boardInk }),
    T(sub, { name: 'Subtítulo', x: BOARD_PAD, y: 108, w: w - 2 * BOARD_PAD, font: th.fontB, wt: 400, s: 18, lh: 26, color: th.boardSub })
  ];
}

function screenBoard(thId, lam, idx) {
  var th = THEMES[thId];
  var n = lam.s.length;
  var w = 2 * BOARD_PAD + n * W + (n - 1) * 56;
  var h = 200 + H + 120;
  var kind = thId === 'wf' ? 'Wireframes ' : (thId === 'dk' ? 'Mock-ups en modo oscuro ' : 'Mock-ups ');
  var title = idx < 0 ? kind.trim() + ': ' + lam.t.toLowerCase() : kind + (idx + 1) + '. ' + lam.t;
  var ch = boardHeader(th, title,
    lam.s.map(function (id) { return id + ' ' + SCREENS[id].title; }).join(' · '), w);
  for (var i = 0; i < n; i++) {
    var id = lam.s[i], x = BOARD_PAD + i * (W + 56);
    ch.push(REF({ name: id, ref: id, th: thId, own: true, x: x, y: 200, scale: 1, shadow: 'e3', r: thId === 'wf' ? 0 : 0 }));
    ch.push(T(id + '  ' + SCREENS[id].title, { name: 'Pie', x: x, y: 200 + H + 20, w: W, font: th.fontH, wt: 600, s: 18, lh: 24, color: th.boardInk }));
    ch.push(T(SCREENS[id].us, { name: 'Historias', x: x, y: 200 + H + 48, w: W, font: th.fontB, wt: 400, s: 15, lh: 20, color: th.boardSub }));
  }
  return F({ name: title, w: w, h: h, fill: th.board, darkMode: thId === 'dk' }, ch);
}

// Lámina resumen del modo oscuro con una pantalla por área.
var DARK_KEY = { k: 'clave', t: 'Pantallas clave', s: ['I1', 'G1', 'A5', 'N1', 'P4'] };

// ----------------------------------------------------------------------------
// Diagramas de flujo (wireflows y user flows)
// ----------------------------------------------------------------------------

var FLOW_INK = {
  wf: { main: '#1F1F1F', alt: '#7A7A7A', err: '#7A7A7A' },
  hf: { main: '#15803D', alt: '#B45309', err: '#DC2626' }
};

var GOALS = [
  {
    k: 'ug1', n: 1, t: 'Agregar una suscripción recurrente de forma manual',
    persona: 'Renzo Salazar (Profesional Joven Activo)',
    goal: 'registrar Notion Plus, que no está en el catálogo, ver cuánto le costará en soles y dejar agendado el recordatorio.',
    us: 'US05, US12, US14, US15, US34, US39',
    nodes: {
      I1: [0, 0], A1: [1, 0], A2: [2, 0], A4: [3, 0], A5: [4, 0],
      D1: [0.5, 0, 'dec', '¿Plan gratuito con 5 de 5?'], A9: [0.5, 1],
      D2: [4, 0.5, 'dec', '¿Campos obligatorios completos?'], A3: [5, 0.5],
      A6: [4, 1], A7: [3, 1], D3: [2.5, 1, 'dec', '¿Permite el calendario?'], I3: [2, 1],
      I4: [2.5, 2], A8: [4, 2],
      X1: [0.5, 1.82, 'pill', 'Ahora no: vuelve a I1'],
      X2: [1.2, 1, 'end', 'Suscripción agregada con recordatorio'],
      X3: [1.5, 2, 'end', 'Agregada; aviso solo por notificación'],
      X4: [5, 2, 'pill', 'Descartar: vuelve a I1 · Seguir editando: vuelve a A5']
    },
    wf: [
      { f: 'I1', t: 'A1', l: 'Toca Agregar (FAB)' },
      { f: 'I1', t: 'A9', k: 'alt', o: 'b', i: 't', l: 'Plan gratuito con 5 de 5: toca Agregar' },
      { f: 'A9', t: 'X1', k: 'alt', o: 'b', i: 't', l: 'Toca Ahora no' },
      { f: 'A1', t: 'A2', l: 'Toca Ingresar manualmente' },
      { f: 'A2', t: 'A4', l: 'Completa los campos y abre Moneda' },
      { f: 'A2', t: 'A3', k: 'err', o: 'b', i: 'l', l: 'Toca Continuar con campos vacíos' },
      { f: 'A3', t: 'A4', k: 'alt', o: 't', i: 't', lane: -0.5, l: 'Completa los campos' },
      { f: 'A4', t: 'A5', l: 'Elige USD' },
      { f: 'A5', t: 'A6', o: 'b', i: 't', l: 'Toca Continuar' },
      { f: 'A6', t: 'A7', l: 'Toca Activar recordatorio' },
      { f: 'A7', t: 'I3', l: 'Toca Permitir' },
      { f: 'A7', t: 'I4', k: 'alt', o: 'b', i: 't', l: 'Toca Ahora no' },
      { f: 'I3', t: 'X2', k: 'main' },
      { f: 'I4', t: 'X3', k: 'alt' },
      { f: 'A6', t: 'A8', k: 'alt', o: 'b', i: 't', l: 'Toca Cerrar (X) o Descartar' },
      { f: 'A8', t: 'X4', k: 'alt' }
    ],
    uf: [
      { f: 'I1', t: 'D1', l: 'Toca Agregar' },
      { f: 'D1', t: 'A1', l: 'No' },
      { f: 'D1', t: 'A9', k: 'alt', o: 'b', i: 't', l: 'Sí' },
      { f: 'A9', t: 'X1', k: 'alt', o: 'b', i: 't', l: 'Toca Ahora no' },
      { f: 'A1', t: 'A2', l: 'Toca Ingresar manualmente' },
      { f: 'A2', t: 'A4', l: 'Completa los campos' },
      { f: 'A2', t: 'D2', k: 'err', o: 'b', i: 'l', l: 'Toca Continuar con campos vacíos' },
      { f: 'A4', t: 'A5', l: 'Elige USD' },
      { f: 'A5', t: 'D2', o: 'b', i: 't', l: 'Toca Continuar' },
      { f: 'D2', t: 'A6', o: 'b', i: 't', l: 'Sí' },
      { f: 'D2', t: 'A3', k: 'err', o: 'r', i: 'l', l: 'No' },
      { f: 'A3', t: 'A4', k: 'alt', o: 't', i: 't', lane: -0.5, l: 'Corrige los campos marcados' },
      { f: 'A6', t: 'A7', l: 'Toca Activar recordatorio' },
      { f: 'A7', t: 'D3' },
      { f: 'D3', t: 'I3', l: 'Sí' },
      { f: 'D3', t: 'I4', k: 'alt', o: 'b', i: 't', l: 'No' },
      { f: 'I3', t: 'X2' },
      { f: 'I4', t: 'X3', k: 'alt' },
      { f: 'A6', t: 'A8', k: 'alt', o: 'b', i: 't', l: 'Toca Cerrar (X)' },
      { f: 'A8', t: 'X4', k: 'alt' }
    ]
  },
  {
    k: 'ug2', n: 2, t: 'Revisar el gráfico detallado de gastos mensuales',
    persona: 'Renzo Salazar (Profesional Joven Activo)',
    goal: 'entender en qué mes subió su gasto y cuánto pesa cada categoría, todo en soles.',
    us: 'US08, US09, US16, US17, US21, US37',
    nodes: {
      I1: [0, 0], N1: [2, 0], N2: [3, 0], N3: [4, 0],
      D1: [0.5, 0, 'dec', '¿Es Premium?'], D2: [1, 0, 'dec', '¿Tiene un mes de datos?'], D3: [1.5, 0, 'dec', '¿Hay conexión?'],
      N5: [0.5, 1], N4: [1, 1], N6: [1.5, 1],
      X1: [0.5, 1.82, 'pill', 'Ver Premium (P1) o Ahora no (I1)'],
      X2: [1, 1.82, 'pill', 'Ir a Gastos (G1)'],
      X3: [4, 1, 'end', 'Sabe qué subió su gasto y por qué']
    },
    wf: [
      { f: 'I1', t: 'N1', l: 'Toca Análisis en la barra' },
      { f: 'I1', t: 'N5', k: 'alt', o: 'b', i: 't', odx: -50, lane: 0.7, lseg: 'last', l: 'Plan gratuito' },
      { f: 'I1', t: 'N4', k: 'alt', o: 'b', i: 't', odx: 0, lane: 0.45, lseg: 'last', l: 'Sin un mes de datos' },
      { f: 'I1', t: 'N6', k: 'alt', o: 'b', i: 't', odx: 50, lane: 0.2, lseg: 'last', l: 'Sin conexión' },
      { f: 'N5', t: 'X1', k: 'alt', o: 'b', i: 't' },
      { f: 'N4', t: 'X2', k: 'alt', o: 'b', i: 't' },
      { f: 'N6', t: 'N1', k: 'alt', o: 'r', i: 'b', l: 'Toca Reintentar' },
      { f: 'N1', t: 'N2', l: 'Toca la barra Sep' },
      { f: 'N2', t: 'N3', l: 'Toca Streaming' },
      { f: 'N3', t: 'X3', o: 'b', i: 't' }
    ],
    uf: [
      { f: 'I1', t: 'D1', l: 'Toca Análisis' },
      { f: 'D1', t: 'D2', l: 'Sí' },
      { f: 'D2', t: 'D3', l: 'Sí' },
      { f: 'D3', t: 'N1', l: 'Sí' },
      { f: 'D1', t: 'N5', k: 'alt', o: 'b', i: 't', l: 'No' },
      { f: 'D2', t: 'N4', k: 'alt', o: 'b', i: 't', l: 'No' },
      { f: 'D3', t: 'N6', k: 'err', o: 'b', i: 't', l: 'No' },
      { f: 'N5', t: 'X1', k: 'alt', o: 'b', i: 't' },
      { f: 'N4', t: 'X2', k: 'alt', o: 'b', i: 't' },
      { f: 'N6', t: 'N1', k: 'alt', o: 'r', i: 'b', l: 'Toca Reintentar' },
      { f: 'N1', t: 'N2', l: 'Toca la barra Sep' },
      { f: 'N2', t: 'N3', l: 'Toca Streaming' },
      { f: 'N3', t: 'X3', o: 'b', i: 't' }
    ]
  },
  {
    k: 'ug3', n: 3, t: 'Configurar una alerta de pago próximo',
    persona: 'Renzo Salazar (Profesional Joven Activo)',
    goal: 'activar la notificación push y recibir el aviso 3 días antes de cada cobro, sin conectar su banco.',
    us: 'US12, US28, US36',
    nodes: {
      I1: [0, 0], P1: [1, 0], P2: [2, 0], P3: [3, 0], P4: [4, 0], P5: [5, 0],
      D1: [3.5, 0, 'dec', '¿Permite las notificaciones?'], P9: [3, 1],
      P6: [5, 1], D2: [4.5, 1, 'dec', '¿Aplica el cambio?'], P7: [4, 1], P8: [4, 2],
      X1: [2, 1, 'pill', 'Ahora no: vuelve a P2'],
      X2: [4.5, 2, 'pill', 'Cancelar o deslizar hacia abajo: vuelve a P4'],
      X3: [3, 2, 'end', 'Aviso push 3 días antes de cada cobro']
    },
    wf: [
      { f: 'I1', t: 'P1', l: 'Toca Perfil' },
      { f: 'P1', t: 'P2', l: 'Toca Recordatorios' },
      { f: 'P2', t: 'P3', l: 'Activa Notificación push' },
      { f: 'P3', t: 'P4', l: 'Toca Permitir' },
      { f: 'P3', t: 'P9', k: 'alt', o: 'b', i: 't', odx: -40, idx: -40, l: 'Toca No permitir' },
      { f: 'P9', t: 'P4', k: 'alt', o: 't', i: 'b', odx: 40, idx: -40, lane: 0.5, l: 'Toca Abrir ajustes' },
      { f: 'P9', t: 'X1', k: 'alt', o: 'l', i: 'r' },
      { f: 'P4', t: 'P5', l: 'Toca ¿Cuándo avisarte?' },
      { f: 'P5', t: 'P6', o: 'b', i: 't', l: 'Elige 3 días antes' },
      { f: 'P6', t: 'P7', l: 'Toca Aplicar' },
      { f: 'P6', t: 'X2', k: 'alt', o: 'b', i: 't', l: 'Toca Cancelar' },
      { f: 'P7', t: 'P8', o: 'b', i: 't', l: 'Toca Guardar cambios' },
      { f: 'P8', t: 'X3', o: 'l', i: 'r' }
    ],
    uf: [
      { f: 'I1', t: 'P1', l: 'Toca Perfil' },
      { f: 'P1', t: 'P2', l: 'Toca Recordatorios' },
      { f: 'P2', t: 'P3', l: 'Activa Notificación push' },
      { f: 'P3', t: 'D1' },
      { f: 'D1', t: 'P4', l: 'Sí' },
      { f: 'D1', t: 'P9', k: 'err', o: 'b', i: 't', idx: -40, lane: 0.25, l: 'No' },
      { f: 'P9', t: 'P4', k: 'alt', o: 't', i: 'b', odx: 40, idx: -40, lane: 0.6, l: 'Toca Abrir ajustes' },
      { f: 'P9', t: 'X1', k: 'alt', o: 'l', i: 'r' },
      { f: 'P4', t: 'P5', l: 'Toca ¿Cuándo avisarte?' },
      { f: 'P5', t: 'P6', o: 'b', i: 't', l: 'Elige 3 días antes' },
      { f: 'P6', t: 'D2', l: 'Toca Aplicar' },
      { f: 'D2', t: 'P7', l: 'Sí' },
      { f: 'D2', t: 'X2', k: 'alt', o: 'b', i: 't', l: 'No' },
      { f: 'P7', t: 'P8', o: 'b', i: 't', l: 'Toca Guardar cambios' },
      { f: 'P8', t: 'X3', o: 'l', i: 'r' }
    ]
  }
];

var TW = 180, TH = 400, TCAP = 46;

function flowBoard(thId, goal) {
  var th = THEMES[thId];
  var isUF = thId === 'hf';
  var PX = isUF ? 480 : 400, PY = isUF ? 680 : 640;
  var X0 = BOARD_PAD + 40, Y0 = 320;
  var ink = FLOW_INK[thId];
  function frac(v) { return v - Math.floor(v); }
  function cx(c) { return frac(c) === 0.5 ? X0 + Math.floor(c) * PX + TW + (PX - TW) / 2 : X0 + c * PX + TW / 2; }
  function cyMid(r) { return frac(r) === 0.5 ? Y0 + Math.floor(r) * PY + TH + TCAP + (PY - TH - TCAP) / 2 : Y0 + r * PY + TH / 2; }
  function laneY(v) { return v < 0 ? Y0 - 56 : Y0 + Math.floor(v) * PY + TH + TCAP + (PY - TH - TCAP) * frac(v); }

  var boxes = {}, nodes = [], maxX = 0, maxY = 0;
  for (var id in goal.nodes) {
    var d = goal.nodes[id];
    var kind = d[2] || 'screen';
    if (kind === 'dec' && !isUF) continue;
    var b;
    if (kind === 'screen') {
      b = { x: cx(d[0]) - TW / 2, y: Y0 + d[1] * PY, w: TW, h: TH, cap: TCAP };
      nodes.push(REF({ name: id, ref: id, th: thId, x: b.x, y: b.y, scale: 0.5, shadow: 'e1' }));
      nodes.push(T(id + '  ' + SCREENS[id].title, { x: b.x, y: b.y + TH + 8, w: TW + 110, font: th.fontH, wt: 600, s: 13, lh: 17, color: th.boardInk }));
      nodes.push(T(SCREENS[id].us, { x: b.x, y: b.y + TH + 26, w: TW + 110, font: th.fontB, s: 11, lh: 14, color: th.boardSub }));
    } else if (kind === 'dec') {
      b = { w: 156, h: 104 };
      b.x = cx(d[0]) - b.w / 2; b.y = cyMid(d[1]) - b.h / 2; b.cap = 0;
      nodes.push({ t: 'diamond', name: 'Decisión / ' + d[3], x: b.x, y: b.y, w: b.w, h: b.h, fill: '#FFFFFF', stroke: '#475569', strokeW: 1.5 });
      nodes.push(F({ name: 'Texto', x: b.x + 28, y: b.y + 20, w: b.w - 56, h: b.h - 40, dir: 'V', main: 'center', cross: 'center' }, [
        T(d[3], { w: b.w - 56, align: 'center', font: th.fontB, wt: 500, s: 12, lh: 15, color: '#0F172A' })
      ]));
    } else {
      var end = kind === 'end';
      var lines = Math.ceil(d[3].length * 7.2 / 176);
      b = { w: 210, h: 22 + lines * 18 };
      b.x = cx(d[0]) - b.w / 2;
      b.y = (frac(d[1]) === 0 && d[1] > 0 && !end) ? Y0 + d[1] * PY + 20 : cyMid(d[1]) - b.h / 2;
      if (frac(d[1]) > 0 && frac(d[1]) !== 0.5) b.y = Y0 + d[1] * PY;
      b.cap = 0;
      nodes.push(F({ name: (end ? 'Fin / ' : 'Retorno / ') + d[3], x: b.x, y: b.y, w: b.w, h: b.h, r: b.h / 2, fill: end ? (isUF ? '#DCFCE7' : '#E3E3E3') : '#FFFFFF', stroke: end ? (isUF ? ink.main : '#1F1F1F') : '#64748B', strokeW: 1.5, dash: end ? null : [6, 4], dir: 'H', main: 'center', cross: 'center', pad: [0, 16, 0, 16] }, [
        T(d[3], { w: b.w - 32, align: 'center', font: th.fontB, wt: end ? 600 : 500, s: 12, lh: 16, color: '#0F172A' })
      ]));
    }
    boxes[id] = b;
    maxX = Math.max(maxX, b.x + b.w + 40); maxY = Math.max(maxY, b.y + b.h + (b.cap || 0) + 20);
  }

  function anchor(b, side, off) {
    off = off || 0;
    if (side === 'r') return [b.x + b.w, b.y + b.h / 2 + off];
    if (side === 'l') return [b.x, b.y + b.h / 2 + off];
    if (side === 't') return [b.x + b.w / 2 + off, b.y];
    return [b.x + b.w / 2 + off, b.y + b.h + (b.cap || 0)];
  }

  var edges = isUF ? goal.uf : goal.wf, lines = [], labels = [];
  for (var e = 0; e < edges.length; e++) {
    var ed = edges[e], A = boxes[ed.f], B = boxes[ed.t];
    if (!A || !B) throw new Error('Flujo ' + goal.k + ': nodo inexistente ' + ed.f + ' → ' + ed.t);
    var o = ed.o, inn = ed.i;
    if (!o) { var right = B.x > A.x; o = right ? 'r' : 'l'; inn = right ? 'l' : 'r'; }
    var p0 = anchor(A, o, ed.odx), p1 = anchor(B, inn, ed.idx);
    var pts;
    var hv = function (s) { return s === 'l' || s === 'r'; };
    if (hv(o) && hv(inn)) {
      if (Math.abs(p0[1] - p1[1]) < 1) pts = [p0, [p1[0], p0[1]]];
      else { var mx = (p0[0] + p1[0]) / 2; pts = [p0, [mx, p0[1]], [mx, p1[1]], p1]; }
    } else if (!hv(o) && !hv(inn)) {
      if (Math.abs(p0[0] - p1[0]) < 1) pts = [p0, [p0[0], p1[1]]];
      else { var ly = ed.lane !== undefined ? laneY(ed.lane) : (p0[1] + p1[1]) / 2; pts = [p0, [p0[0], ly], [p1[0], ly], p1]; }
    } else if (!hv(o)) pts = [p0, [p0[0], p1[1]], p1];
    else pts = [p0, [p1[0], p0[1]], p1];
    var kind2 = ed.k || 'main';
    var col = ink[kind2];
    lines.push(L({ name: 'Flecha / ' + ed.f + ' → ' + ed.t, points: pts, color: col, sw: 2, dash: kind2 === 'main' ? null : [7, 5] }));
    if (ed.l) {
      var best = 0, bl = -1;
      for (var s = 0; s < pts.length - 1; s++) {
        var len = Math.abs(pts[s + 1][0] - pts[s][0]) + Math.abs(pts[s + 1][1] - pts[s][1]);
        if (len > bl) { bl = len; best = s; }
      }
      if (ed.lseg === 'last') {
        best = pts.length - 2;
        bl = Math.abs(pts[best + 1][0] - pts[best][0]) + Math.abs(pts[best + 1][1] - pts[best][1]);
      }
      var a = pts[best], z = pts[best + 1];
      var mxl = (a[0] + z[0]) / 2, myl = (a[1] + z[1]) / 2;
      var short = ed.l.length <= 3;
      var lw = short ? 36 : Math.min(160, Math.max(70, ed.l.length * 6.6 + 20));
      var nl = short ? 1 : Math.ceil(ed.l.length * 6.6 / (lw - 20));
      var lh = 12 + nl * 16;
      var horiz = Math.abs(a[1] - z[1]) < 1;
      var lx = mxl - lw / 2, lyy = myl - lh / 2;
      if (horiz && bl < lw + 24) lyy = myl - lh - 8;
      if (!horiz && bl < lh + 24) { lx = mxl + 10; }
      labels.push(F({ name: 'Etiqueta / ' + ed.l, x: Math.round(lx), y: Math.round(lyy), w: lw, h: lh, r: 6, fill: '#FFFFFF', stroke: col, strokeW: 1, dash: kind2 === 'main' ? null : [4, 3], dir: 'H', main: 'center', cross: 'center', pad: [0, 6, 0, 6] }, [
        T(ed.l, { w: lw - 12, align: 'center', font: th.fontB, wt: short ? 600 : 400, s: 12, lh: 16, color: '#0F172A' })
      ]));
    }
  }

  var w = Math.max(maxX + BOARD_PAD, 1600), h = maxY + BOARD_PAD;
  var legend = flowLegend(th, isUF, ink, w);
  var title = (isUF ? 'User flow ' : 'Wireflow ') + goal.n + ': ' + goal.t;
  var sub = 'Persona: ' + goal.persona + '. Objetivo: ' + goal.goal + ' Historias: ' + goal.us + '.' + (isUF ? ' Incluye caminos alternos y de error.' : ' Miniaturas al 50 % del wireframe.');
  var head = boardHeader(th, title, sub, w - 520);
  return F({ name: title, w: w, h: h, fill: th.board }, head.concat([legend]).concat(lines).concat(nodes).concat(labels));
}

function flowLegend(th, isUF, ink, w) {
  var items = [['main', isUF ? 'Camino feliz' : 'Camino principal'], ['alt', isUF ? 'Camino alterno o retorno' : 'Alternativa, error o retorno']];
  if (isUF) items.push(['err', 'Error']);
  var ch = [];
  for (var i = 0; i < items.length; i++) {
    ch.push(L({ points: [[16, 24 + i * 30], [72, 24 + i * 30]], color: ink[items[i][0]], sw: 2, dash: items[i][0] === 'main' ? null : [7, 5] }));
    ch.push(T(items[i][1], { x: 88, y: 15 + i * 30, font: th.fontB, wt: 500, s: 14, lh: 18, color: th.boardInk }));
  }
  var y2 = 24 + items.length * 30;
  if (isUF) {
    ch.push({ t: 'diamond', x: 16, y: y2 - 8, w: 40, h: 28, fill: '#FFFFFF', stroke: '#475569', strokeW: 1.5 });
    ch.push(T('Decisión', { x: 88, y: y2 - 3, font: th.fontB, wt: 500, s: 14, lh: 18, color: th.boardInk }));
    y2 += 34;
  }
  ch.push(F({ x: 16, y: y2 - 8, w: 56, h: 24, r: 12, fill: '#FFFFFF', stroke: '#64748B', strokeW: 1.5, dash: [6, 4] }, []));
  ch.push(T('Retorno a otra pantalla', { x: 88, y: y2 - 5, font: th.fontB, wt: 500, s: 14, lh: 18, color: th.boardInk }));
  y2 += 32;
  ch.push(F({ x: 16, y: y2 - 8, w: 56, h: 24, r: 12, fill: isUF ? '#DCFCE7' : '#E3E3E3', stroke: isUF ? ink.main : '#1F1F1F', strokeW: 1.5 }, []));
  ch.push(T('Objetivo cumplido', { x: 88, y: y2 - 5, font: th.fontB, wt: 500, s: 14, lh: 18, color: th.boardInk }));
  return F({ name: 'Leyenda', x: w - BOARD_PAD - 400, y: 48, w: 400, h: y2 + 32, r: 12, fill: '#FFFFFF', stroke: '#CBD5E1', strokeW: 1 }, ch);
}

// ----------------------------------------------------------------------------
// Prototipo: distribución de pantallas, tabla de interacciones y mapa
// ----------------------------------------------------------------------------

var PROTO_ROWS = [
  { t: 'Inicio y Gastos', s: ['I1', 'I2', 'I3', 'I4', 'G1', 'G2', 'G3'] },
  { t: 'Agregar suscripción (User Goal 1)', s: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9'] },
  { t: 'Análisis (User Goal 2)', s: ['N1', 'N2', 'N3', 'N4', 'N5', 'N6'] },
  { t: 'Perfil y recordatorios (User Goal 3)', s: ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9'] }
];
var PROTO_FLOWS = [
  { id: 'I1', name: 'CraveWallet · Prototipo completo (UG1, UG2 y UG3)' },
  { id: 'N1', name: 'UG2 · Revisar el gráfico de gastos' },
  { id: 'P1', name: 'UG3 · Configurar una alerta de pago' },
  { id: 'I2', name: 'Alterno · Inicio sin gastos (usuaria nueva)' },
  { id: 'A9', name: 'Alterno · Límite del plan gratuito' },
  { id: 'N4', name: 'Alterno · Análisis sin datos' },
  { id: 'N5', name: 'Alterno · Análisis solo para Premium' },
  { id: 'N6', name: 'Alterno · Análisis sin conexión' }
];
var TR_LABEL = {
  push: 'Push ←', pushBack: 'Push →', up: 'Move in ↑', down: 'Move out ↓', smart: 'Smart animate', fade: 'Dissolve'
};

function protoTable() {
  var rows = [];
  function walk(sid, n) {
    if (!n) return;
    if (n.go) rows.push({ from: sid, name: n.name || n.t, to: n.go.back ? null : n.go.to, back: !!n.go.back, tr: n.go.back ? 'Back' : TR_LABEL[n.go.tr], trig: n.go.trig === 'drag' ? 'On drag' : 'On tap' });
    if (n.ch) for (var i = 0; i < n.ch.length; i++) walk(sid, n.ch[i]);
  }
  for (var i = 0; i < SCREEN_ORDER.length; i++) walk(SCREEN_ORDER[i], SCREENS[SCREEN_ORDER[i]].build(THEMES.hf));
  return rows;
}

function protoMapBoard() {
  var th = THEMES.hf, sc = 0.4, tw = W * sc, thh = H * sc, gx = 36;
  var maxN = 9;
  var w = 2 * BOARD_PAD + maxN * tw + (maxN - 1) * gx;
  var ch = boardHeader(th, 'Mapa del prototipo', 'Las zonas con interacción llevan borde rojo punteado; las pantallas con borde verde son puntos de inicio de un flujo en Figma.', w);
  var y = 200;
  var starts = {};
  for (var f = 0; f < PROTO_FLOWS.length; f++) starts[PROTO_FLOWS[f].id] = true;
  for (var r = 0; r < PROTO_ROWS.length; r++) {
    ch.push(T(PROTO_ROWS[r].t, { x: BOARD_PAD, y: y, font: th.fontH, wt: 600, s: 20, lh: 26, color: th.boardInk }));
    for (var i = 0; i < PROTO_ROWS[r].s.length; i++) {
      var id = PROTO_ROWS[r].s[i], x = BOARD_PAD + i * (tw + gx);
      ch.push(REF({ ref: id, th: 'hf', x: x, y: y + 40, scale: sc, hot: true, stroke: starts[id] ? '#15803D' : null, strokeW: 4, outlineOffset: 3 }));
      ch.push(T(id + '  ' + SCREENS[id].title, { x: x, y: y + 48 + thh, w: tw + 20, font: th.fontB, wt: 600, s: 12, lh: 16, color: th.boardInk }));
    }
    y += 40 + thh + 60;
  }
  return F({ name: 'Mapa del prototipo', w: w, h: y + 20, fill: th.board }, ch);
}

// ----------------------------------------------------------------------------
// Design System aplicado (componentes de la app)
// ----------------------------------------------------------------------------

function dsBoard(thId) {
  var dark = thId === 'dk';
  var th = THEMES[thId || 'hf'];
  var w = 1880, ch = boardHeader(th, dark ? 'Design System en modo oscuro' : 'Design System aplicado a la app móvil',
    dark ? 'Mismos tokens con valores para superficies oscuras: se conserva el matiz y se aclaran los colores de texto y acción. Contraste WCAG calculado sobre color/surface (#151E31).'
      : 'Tokens de color, escala tipográfica y componentes de 3.1.1, con el contraste WCAG calculado sobre el fondo en que se usan.', w);
  var keys = ['bg', 'surface', 'surfaceVariant', 'onSurface', 'onSurfaceVariant', 'primary', 'primaryContainer', 'onPrimaryContainer', 'primaryDark', 'accent', 'accentContainer', 'success', 'warning', 'error', 'info'];
  var pairs = dark
    ? { onSurface: DARK.surface, onSurfaceVariant: DARK.surface, primary: DARK.surface, onPrimaryContainer: DARK.primaryContainer, primaryDark: DARK.primaryContainer, accent: DARK.accentInk, error: DARK.surface, success: DARK.surface, warning: DARK.surface, info: DARK.surface }
    : { onSurface: '#FFFFFF', onSurfaceVariant: '#FFFFFF', primary: '#FFFFFF', onPrimaryContainer: '#E0E4FF', primaryDark: '#FFFFFF', accent: '#0F172A', error: '#FFFFFF', success: '#FFFFFF', warning: '#0F172A', info: '#0F172A' };
  ch.push(T('Color', { x: BOARD_PAD, y: 176, font: th.fontH, wt: 600, s: 22, lh: 28, color: th.boardInk }));
  for (var i = 0; i < keys.length; i++) {
    var k = keys[i], col = i % 8, row = Math.floor(i / 8);
    var x = BOARD_PAD + col * 216, y = 220 + row * 168;
    var hex = dark ? DARK[k] : TOKENS[k].hex;
    var note = pairs[k] ? 'vs ' + pairs[k] + ': ' + contrast(hex, pairs[k]).toFixed(1) + ':1' : '';
    ch.push(F({ name: 'Swatch / ' + TOKENS[k].v, x: x, y: y, w: 200, h: 152, r: 12, fill: 'surface', stroke: dark ? '#334155' : '#CBD5E1', strokeW: 1, clip: true }, [
      R({ x: 0, y: 0, w: 200, h: 80, fill: k }),
      T(TOKENS[k].v, { x: 12, y: 88, font: th.fontB, wt: 600, s: 13, lh: 18, color: 'onSurface' }),
      T(hex, { x: 12, y: 108, font: th.fontB, s: 12, lh: 16, color: 'onSurfaceVariant' }),
      T(note, { x: 12, y: 126, font: th.fontB, s: 11, lh: 16, color: 'onSurfaceVariant' })
    ]));
  }
  ch.push(T('Tipografía', { x: BOARD_PAD, y: 572, font: th.fontH, wt: 600, s: 22, lh: 28, color: th.boardInk }));
  var ty = 616, roles = ['amount', 'headline', 'title', 'section', 'bodyL', 'body', 'bodyEm', 'caption', 'small'];
  for (var t = 0; t < roles.length; t++) {
    var sp = TYPE[roles[t]];
    var fam = sp.f === 'h' ? 'Poppins' : 'Inter';
    ch.push(T(sp.name.replace('Mobile/', '') + ' · ' + fam + ' ' + sp.w + ' · ' + sp.s + ' sp', { x: BOARD_PAD, y: ty + 4, w: 360, font: 'Inter', s: 13, lh: 18, color: th.boardSub }));
    ch.push(T(roles[t] === 'amount' ? 'S/ 433.22' : 'Mañana te cobran Spotify', { x: BOARD_PAD + 380, y: ty, ts: roles[t], color: 'onSurface' }));
    ty += sp.lh + 18;
  }
  var cx0 = 980;
  ch.push(T('Componentes', { x: cx0, y: 572, font: th.fontH, wt: 600, s: 22, lh: 28, color: th.boardInk }));
  var comps = [
    F({ name: 'Botones', x: cx0, y: 616, dir: 'H', gap: 12, cross: 'center' }, [btn(th, 'Continuar', { h: 56, comp: true }), btn(th, 'Ingresar manualmente', { kind: 'tonal' }), btn(th, 'Descartar', { kind: 'outlined' }), btn(th, 'Cancelar suscripción', { kind: 'dangerText', icon: 'cancel' }), btn(th, 'Guardar', { kind: 'disabled' })]),
    F({ name: 'Campos', x: cx0, y: 700, dir: 'H', gap: 16, cross: 'start' }, [
      field(th, { label: 'Nombre del servicio', req: true, placeholder: 'Ej. Notion Plus', w: 196 }),
      field(th, { label: 'Moneda', value: 'USD', state: 'focus', trailing: 'expand_more', w: 196 }),
      field(th, { label: 'Monto', req: true, placeholder: 'Ej. 79.90', state: 'error', helper: 'Ingresa un monto mayor a 0.', w: 196 }),
      field(th, { label: 'Próximo cobro', value: '03/11/2026', state: 'filled', trailing: 'calendar_month', w: 196 })
    ]),
    F({ name: 'Estados', x: cx0, y: 836, dir: 'H', gap: 8, cross: 'center' }, [badge(th, 'activa'), badge(th, 'hoy'), badge(th, 'pronto'), badge(th, 'sinuso'), badge(th, 'cancelada'), badge(th, 'pendiente')]),
    F({ name: 'Chips y switches', x: cx0, y: 880, dir: 'H', gap: 8, cross: 'center' }, [chip(th, 'Todas', { selected: true }), chip(th, 'Streaming', {}), chip(th, 'Estado', { drop: true }), toggle(th, true), toggle(th, false), I('radio_button_checked', { size: 24, color: 'primary' })]),
    subCard(th, SUBS[1], { x: cx0, y: 936 }),
    F({ name: 'FAB', x: cx0 + 344, y: 950, w: 140, h: 56 }, [Object.assign(fab(th, {}), { x: 0, y: 0 })]),
    F({ name: 'Navigation bar', x: cx0, y: 1040, w: W, h: 80 }, [Object.assign(bottomNav(th, 'inicio', { badge: '1' }), { y: 0 })]),
    F({ name: 'Snackbar', x: cx0 + 380, y: 1040, w: 360, h: 80 }, [Object.assign(snackbar(th, 'Notion Plus agregado.', { action: 'Deshacer' }), { x: 0, y: 8 })])
  ];
  ch = ch.concat(comps);
  return F({ name: dark ? 'Design System · Modo oscuro' : 'Design System', w: w, h: 1180, fill: th.board, darkMode: dark }, ch);
}

function coverBoard() {
  var th = THEMES.hf;
  return F({ name: 'Portada', w: 1600, h: 900, fill: 'primary' }, [
    F({ name: 'Isotipo', x: 96, y: 120, w: 72, h: 72, r: 20, fill: 'surface', dir: 'H', main: 'center', cross: 'center' }, [I('account_balance_wallet-fill', { size: 40, color: 'primary' })]),
    T('CraveWallet', { x: 96, y: 220, font: 'Poppins', wt: 700, s: 72, lh: 84, color: 'onPrimary' }),
    T('3.1.4 Mobile Applications UX/UI Design', { x: 96, y: 316, font: 'Poppins', wt: 600, s: 32, lh: 40, color: 'onPrimary' }),
    T('Wireframes · Wireflows · Mock-ups · User flows · Prototipo\nAndroid · Material Design 3 · 360 x 800 dp', { x: 96, y: 380, w: 900, font: 'Inter', s: 22, lh: 34, color: 'onPrimary' }),
    T('Páginas del archivo\n00 Portada\n01 Design System\n02 Wireframes\n03 Wireflows\n04 Mock-ups\n05 User Flows\n06 Prototype\n07 Modo oscuro\n08 Prototype · Modo oscuro', { x: 1080, y: 120, w: 420, font: 'Inter', s: 20, lh: 34, color: 'onPrimary' }),
    T('Gastify · Ingeniería de Software · UPC · 2026', { x: 96, y: 800, font: 'Inter', wt: 500, s: 18, lh: 24, color: 'onPrimary' })
  ]);
}

// Todas las láminas, en el orden en que se crean las páginas de Figma.
function BOARDS() {
  var out = [];
  out.push({ page: '00 Portada', th: 'hf', node: coverBoard() });
  out.push({ page: '01 Design System', th: 'hf', node: dsBoard(), file: 'mobile_design_system' });
  for (var i = 0; i < LAMINAS.length; i++) out.push({ page: '02 Wireframes', th: 'wf', node: screenBoard('wf', LAMINAS[i], i), file: 'mobile_wireframe_' + LAMINAS[i].k });
  for (var g = 0; g < GOALS.length; g++) out.push({ page: '03 Wireflows', th: 'wf', node: flowBoard('wf', GOALS[g]), file: 'mobile_wireflow_' + GOALS[g].k });
  for (var j = 0; j < LAMINAS.length; j++) out.push({ page: '04 Mock-ups', th: 'hf', node: screenBoard('hf', LAMINAS[j], j), file: 'mobile_mockup_' + LAMINAS[j].k });
  for (var u = 0; u < GOALS.length; u++) out.push({ page: '05 User Flows', th: 'hf', node: flowBoard('hf', GOALS[u]), file: 'mobile_userflow_' + GOALS[u].k });
  out.push({ page: null, th: 'hf', node: protoMapBoard(), file: 'mobile_prototype_map' });
  out.push({ page: '07 Modo oscuro', th: 'dk', node: dsBoard('dk'), file: 'mobile_design_system_dark' });
  out.push({ page: '07 Modo oscuro', th: 'dk', node: screenBoard('dk', DARK_KEY, -1), file: 'mobile_mockup_dark_clave' });
  for (var d = 0; d < LAMINAS.length; d++) out.push({ page: '07 Modo oscuro', th: 'dk', node: screenBoard('dk', LAMINAS[d], d), file: 'mobile_mockup_dark_' + LAMINAS[d].k });
  return out;
}
