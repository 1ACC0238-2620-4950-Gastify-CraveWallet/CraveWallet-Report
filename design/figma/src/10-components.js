// Componentes de UI de CraveWallet (Material Design 3 + Design System 3.1.1).
// Todos reciben el tema `th` para que el wireframe y el mock-up salgan de la
// misma especificación y solo cambie la fidelidad.

var W = 360, H = 800;           // Clase compacta 360 x 800 dp (3.1.1.3)
var PAD = 16;                   // space-4: padding horizontal de pantalla
var NAV_Y = 720;                // NavigationBar de 80 dp

var STATUS = {
  activa: { label: 'Activa', icon: 'check_circle-fill', tok: 'success' },
  hoy: { label: 'Cobro hoy', icon: 'notifications_active-fill', tok: 'accent' },
  pronto: { label: 'Pronto', icon: 'schedule-fill', tok: 'warning' },
  sinuso: { label: 'Sin usar', icon: 'visibility_off-fill', tok: 'onSurfaceVariant' },
  cancelada: { label: 'Cancelada', icon: 'cancel-fill', tok: 'error' },
  pendiente: { label: 'Pendiente', icon: 'hourglass_empty-fill', tok: 'info' }
};

var SHADOW = { e1: 1, e3: 3, e6: 6 };

// ----- Estructura de pantalla ----------------------------------------------

function statusBar(th, o) {
  o = o || {};
  var ink = o.ink || 'onSurface';
  return F({ name: 'Status bar', x: 0, y: 0, w: W, h: 32 }, [
    T('9:41', { x: 20, y: 7, ts: 'label', color: ink }),
    I('signal_cellular_4_bar', { x: 286, y: 8, size: 16, color: ink }),
    I('wifi', { x: 306, y: 8, size: 16, color: ink }),
    I('battery_full', { x: 326, y: 8, size: 16, color: ink })
  ]);
}

function gesturePill(th) {
  return R({ name: 'Gesture bar', x: 126, y: 788, w: 108, h: 4, r: 2, fill: 'onSurface' });
}

function iconBtn(th, icon, o) {
  o = o || {};
  return F({ name: o.name || ('Icon button / ' + icon), x: o.x, y: o.y, w: 48, h: 48, r: 24, fill: o.fill || null, go: o.go }, [
    I(icon, { x: 12, y: 12, size: 24, color: o.color || 'onSurface' })
  ].concat(o.badge ? [F({ name: 'Badge', x: 28, y: 6, w: 16, h: 16, r: 8, fill: 'accent', dir: 'H', main: 'center', cross: 'center' }, [
    T(o.badge, { ts: 'small', wt: 600, s: 10, lh: 12, color: 'accentInk' })
  ])] : []));
}

// AppBar superior (small top app bar de M3). nav: 'back' | 'close'.
function appBar(th, o) {
  var ch = [];
  var tx = PAD;
  if (o.nav) {
    ch.push(iconBtn(th, o.nav === 'close' ? 'close' : 'arrow_back', {
      x: 4, y: 8, name: o.nav === 'close' ? 'Cerrar' : 'Atrás',
      go: o.navGo || { back: true }
    }));
    tx = 56;
  }
  ch.push(T(o.title, { name: 'Título', x: tx, y: 18, ts: 'title', color: 'onSurface' }));
  var acts = o.actions || [];
  for (var i = 0; i < acts.length; i++) {
    ch.push(iconBtn(th, acts[i].icon, { x: W - 4 - 48 * (acts.length - i), y: 8, go: acts[i].go, name: acts[i].name, badge: acts[i].badge }));
  }
  return F({ name: 'Top app bar', x: 0, y: o.y || 32, w: W, h: 64, fill: o.fill || null }, ch);
}

// NavigationBar inferior con los 4 destinos de 3.1.2.5.
var NAV_ITEMS = [
  { k: 'inicio', label: 'Inicio', icon: 'home', to: 'I1' },
  { k: 'gastos', label: 'Gastos', icon: 'receipt_long', to: 'G1' },
  { k: 'analisis', label: 'Análisis', icon: 'bar_chart', to: 'N1' },
  { k: 'perfil', label: 'Perfil', icon: 'person', to: 'P1' }
];
function bottomNav(th, active, o) {
  o = o || {};
  var items = [];
  for (var i = 0; i < NAV_ITEMS.length; i++) {
    var it = NAV_ITEMS[i];
    var on = it.k === active;
    var kids = [
      F({ name: 'Indicador', x: 13, y: 12, w: 64, h: 32, r: 16, fill: on ? 'primaryContainer' : null }, [
        I(on ? it.icon + '-fill' : it.icon, { x: 20, y: 4, size: 24, color: on ? 'onPrimaryContainer' : 'onSurfaceVariant' })
      ]),
      T(it.label, { name: 'Etiqueta', x: 0, y: 48, w: 90, align: 'center', ts: 'label', s: 12, lh: 16, color: on ? 'onSurface' : 'onSurfaceVariant', wt: on ? 600 : 500 })
    ];
    if (it.k === 'inicio' && o.badge) {
      kids.push(F({ name: 'Badge', x: 52, y: 8, w: 18, h: 18, r: 9, fill: 'accent', stroke: 'surface', strokeW: 2, dir: 'H', main: 'center', cross: 'center' }, [
        T(o.badge, { ts: 'small', s: 10, lh: 12, color: 'accentInk', wt: 700 })
      ]));
    }
    if (it.k === 'analisis' && o.lock) {
      kids.push(F({ name: 'Candado', x: 54, y: 8, w: 18, h: 18, r: 9, fill: 'onSurface', dir: 'H', main: 'center', cross: 'center' }, [
        I('lock-fill', { size: 12, color: 'surface' })
      ]));
    }
    items.push(F({ name: 'Destino / ' + it.label, x: i * 90, y: 0, w: 90, h: 80, go: on ? null : { to: it.to, tr: 'fade' } }, kids));
  }
  return F({ name: 'Navigation bar', x: 0, y: NAV_Y, w: W, h: 80, fill: 'surface', shadow: 'e1' }, items);
}

// FAB extendido (color-accent). El contenido usa color-on-surface porque el
// blanco sobre #F97316 da 2.8:1 y no cumple WCAG AA para texto de 14 sp.
function fab(th, o) {
  o = o || {};
  return F({
    name: 'FAB / Agregar', x: W - PAD - 132, y: NAV_Y - 16 - 56, w: 132, h: 56, r: 16, fill: 'accent', shadow: 'e3',
    dir: 'H', gap: 8, main: 'center', cross: 'center', go: o.go
  }, [I('add', { size: 24, color: 'accentInk' }), T('Agregar', { ts: 'label', s: 16, lh: 20, wt: 600, color: 'accentInk' })]);
}

// ----- Controles -------------------------------------------------------------

// Botones. kind: filled | tonal | outlined | text | danger | dangerText
function btn(th, label, o) {
  o = o || {};
  var kind = o.kind || 'filled';
  var hgt = o.h || 48;
  var fill = null, ink = 'primary', stroke = null;
  if (kind === 'filled') { fill = 'primary'; ink = 'onPrimary'; }
  if (kind === 'tonal') { fill = 'primaryContainer'; ink = 'onPrimaryContainer'; }
  if (kind === 'outlined') { stroke = 'onSurfaceVariant'; ink = 'primary'; }
  if (kind === 'danger') { fill = 'error'; ink = 'onSurface'; }
  if (kind === 'dangerText') { ink = 'onSurface'; }
  if (kind === 'disabled') { fill = { c: 'onSurface', a: 0.12 }; ink = { c: 'onSurface', a: 0.38 }; }
  if (o.ink) ink = o.ink;
  var kids = [];
  if (o.icon) kids.push(I(o.icon, { size: 20, color: kind === 'dangerText' ? 'error' : ink }));
  kids.push(T(label, { ts: 'label', s: hgt >= 56 ? 16 : 14, lh: 20, wt: 600, color: ink }));
  return F({
    name: o.name || ('Button / ' + label), x: o.x, y: o.y, w: o.w, h: hgt, r: hgt >= 56 ? 16 : 8,
    fill: fill, stroke: stroke, strokeW: 1, dir: 'H', gap: 8, pad: [0, o.px === undefined ? 20 : o.px, 0, o.px === undefined ? 20 : o.px],
    main: 'center', cross: 'center', fillW: o.fillW, go: o.go
  }, kids);
}

// Campo de texto con etiqueta superior (outlined text field, radio 8 px).
// state: default | focus | error | filled | disabled
function field(th, o) {
  var st = o.state || 'default';
  var stroke = st === 'error' ? 'error' : (st === 'focus' ? 'primary' : 'onSurfaceVariant');
  var sw = (st === 'error' || st === 'focus') ? 2 : 1;
  var hasVal = !!o.value;
  var row = [];
  if (o.leading) row.push(I(o.leading, { size: 20, color: 'onSurfaceVariant' }));
  row.push(T(hasVal ? o.value : (o.placeholder || ''), {
    name: hasVal ? 'Valor' : 'Placeholder', ts: 'bodyL', color: hasVal ? 'onSurface' : 'onSurfaceVariant', fillW: true
  }));
  if (st === 'error') row.push(I('error-fill', { size: 20, color: 'error' }));
  if (o.trailing) row.push(I(o.trailing, { size: 24, color: 'onSurface' }));
  var kids = [
    T(o.label + (o.req ? ' *' : ''), { name: 'Etiqueta', ts: 'label', color: 'onSurface' }),
    F({ name: 'Campo', h: 56, r: 8, fill: 'surface', stroke: stroke, strokeW: sw, dir: 'H', gap: 8, pad: [0, 12, 0, 16], cross: 'center', fillW: true, go: o.go }, row)
  ];
  if (o.helper) {
    kids.push(F({ name: 'Ayuda', dir: 'H', gap: 4, cross: 'start', fillW: true }, [
      st === 'error' ? I('error', { size: 16, color: 'error' }) : null,
      T(o.helper, { ts: 'caption', color: st === 'error' ? 'onSurface' : 'onSurfaceVariant', fillW: true })
    ]));
  }
  return F({ name: 'Text field / ' + o.label + (st !== 'default' ? ' / ' + st : ''), x: o.x, y: o.y, w: o.w || (W - 2 * PAD), dir: 'V', gap: 4 }, kids);
}

// Chip de filtro (radio 4 px según 3.1.1.1).
function chip(th, label, o) {
  o = o || {};
  var on = !!o.selected;
  var kids = [];
  if (on) kids.push(I('check', { size: 18, color: 'onPrimaryContainer' }));
  else if (o.icon) kids.push(I(o.icon, { size: 18, color: 'onSurface' }));
  kids.push(T(label, { ts: 'label', color: on ? 'onPrimaryContainer' : 'onSurface' }));
  if (o.drop) kids.push(I('expand_more', { size: 18, color: 'onSurface' }));
  return F({
    name: 'Chip / ' + label, x: o.x, y: o.y, h: 32, r: 8, fill: on ? 'primaryContainer' : 'surface',
    stroke: on ? null : 'onSurfaceVariant', strokeW: 1, dir: 'H', gap: 6, pad: [0, 12, 0, on || o.icon ? 8 : 12], cross: 'center', go: o.go
  }, kids);
}

// Etiqueta de estado de suscripción (3.1.2.2). Ícono + texto: no depende del color.
function badge(th, st, o) {
  o = o || {};
  var s = STATUS[st];
  return F({
    name: 'Status / ' + s.label, x: o.x, y: o.y, h: 22, r: 4, fill: { c: s.tok, a: th.id === 'wf' ? 1 : 0.16 },
    dir: 'H', gap: 4, pad: [0, 8, 0, 6], cross: 'center'
  }, [
    I(s.icon, { size: 14, color: th.id === 'wf' ? 'onSurface' : s.tok }),
    T(s.label, { ts: 'currency', color: 'onSurface' })
  ]);
}

function avatar(th, key, o) {
  o = o || {};
  var b = BRANDS[key];
  var sz = o.size || 40;
  var wf = th.id === 'wf';
  return F({
    name: 'Avatar / ' + b.n, x: o.x, y: o.y, w: sz, h: sz, r: Math.round(sz * 0.3),
    fill: wf ? 'surfaceVariant' : b.c, dir: 'H', main: 'center', cross: 'center'
  }, [T(b.i, { font: th.fontH, wt: 700, s: Math.round(sz * 0.36), lh: Math.round(sz * 0.44), color: wf ? 'onSurfaceVariant' : (b.ink || '#FFFFFF') })]);
}

function userAvatar(th, initials, o) {
  var sz = o.size || 40;
  return F({ name: 'Avatar / Usuario', x: o.x, y: o.y, w: sz, h: sz, r: sz / 2, fill: o.fill || 'primaryContainer', dir: 'H', main: 'center', cross: 'center', go: o.go }, [
    T(initials, { font: th.fontH, wt: 600, s: Math.round(sz * 0.38), lh: Math.round(sz * 0.5), color: o.ink || 'onPrimaryContainer' })
  ]);
}

function toggle(th, on, o) {
  o = o || {};
  return F({
    name: 'Switch / ' + (on ? 'On' : 'Off'), x: o.x, y: o.y, w: 52, h: 32, r: 16,
    fill: on ? 'primary' : 'surfaceVariant', stroke: on ? null : 'onSurfaceVariant', strokeW: 2, go: o.go
  }, [
    on ? E({ name: 'Knob', x: 24, y: 4, w: 24, h: 24, fill: 'onPrimary' })
      : E({ name: 'Knob', x: 8, y: 8, w: 16, h: 16, fill: 'onSurfaceVariant' }),
    on ? I('check', { name: 'Knob icon', x: 28, y: 8, size: 16, color: 'primary' }) : null
  ]);
}

function radio(th, on, o) {
  return I(on ? 'radio_button_checked' : 'radio_button_unchecked', { x: o.x, y: o.y, size: 24, color: on ? 'primary' : 'onSurfaceVariant' });
}

// Indicador de pasos del alta (esquema secuencial de 3.1.2.1).
function stepper(th, step, o) {
  var names = ['Servicio', 'Detalles', 'Recordatorio'];
  var ch = [];
  for (var i = 0; i < 3; i++) {
    var n = i + 1, done = n < step, cur = n === step;
    var cx = 16 + i * 116;
    ch.push(F({ name: 'Paso ' + n, x: cx, y: 0, w: 96, h: 48, dir: 'V', gap: 4, cross: 'center' }, [
      F({ name: 'Círculo', w: 24, h: 24, r: 12, fill: (done || cur) ? 'primary' : 'surface', stroke: (done || cur) ? null : 'onSurfaceVariant', strokeW: 1.5, dir: 'H', main: 'center', cross: 'center' }, [
        done ? I('check', { size: 16, color: 'onPrimary' }) : T(String(n), { ts: 'currency', wt: 600, color: cur ? 'onPrimary' : 'onSurfaceVariant' })
      ]),
      T(names[i], { ts: 'caption', wt: cur ? 600 : 400, color: (done || cur) ? 'onSurface' : 'onSurfaceVariant' })
    ]));
    if (i < 2) ch.push(R({ name: 'Conector', x: cx + 72, y: 11, w: 68, h: 2, r: 1, fill: done ? 'primary' : 'surfaceVariant' }));
  }
  return F({ name: 'Stepper / Paso ' + step + ' de 3', x: 0, y: o.y, w: W, h: 48 }, ch);
}

function segmented(th, opts, idx, o) {
  var ch = [];
  var segW = (o.w || (W - 2 * PAD)) / opts.length;
  for (var i = 0; i < opts.length; i++) {
    var on = i === idx;
    ch.push(F({ name: 'Segmento / ' + opts[i], w: segW, h: 40, fill: on ? 'primaryContainer' : null, dir: 'H', gap: 6, main: 'center', cross: 'center', go: o.gos ? o.gos[i] : null }, [
      on ? I('check', { size: 18, color: 'onPrimaryContainer' }) : null,
      T(opts[i], { ts: 'label', color: on ? 'onPrimaryContainer' : 'onSurface' })
    ]));
  }
  return F({ name: 'Segmented button', x: o.x === undefined ? PAD : o.x, y: o.y, w: o.w || (W - 2 * PAD), h: 40, r: 8, stroke: 'onSurfaceVariant', strokeW: 1, clip: true, dir: 'H' }, ch);
}

function sectionHeader(th, title, o) {
  o = o || {};
  return F({ name: 'Section / ' + title, x: PAD, y: o.y, w: W - 2 * PAD, h: 48, dir: 'H', main: 'between', cross: 'center' }, [
    T(title, { ts: 'section', color: 'onSurface' }),
    o.action ? F({ name: 'Acción / ' + o.action, h: 48, dir: 'H', gap: 2, pad: [0, 4, 0, 8], cross: 'center', go: o.go }, [
      T(o.action, { ts: 'label', color: 'primary' }), I('chevron_right', { size: 20, color: 'primary' })
    ]) : null
  ]);
}

// Tarjeta de suscripción para listas (radio 16, elevación 1).
function subCard(th, s, o) {
  o = o || {};
  var b = BRANDS[s.k];
  var right = [T(s.amt, { name: 'Monto', font: th.fontH, wt: 600, s: 16, lh: 22, color: 'onSurface' })];
  if (s.orig) right.push(T(s.orig, { name: 'Moneda original', ts: 'currency', color: 'onSurfaceVariant' }));
  return F({ name: 'Subscription card / ' + b.n, x: o.x === undefined ? PAD : o.x, y: o.y, w: W - 2 * PAD, h: 84, r: 16, fill: 'surface', shadow: 'e1', go: o.go }, [
    avatar(th, s.k, { x: 12, y: 22 }),
    T(b.n, { name: 'Servicio', x: 64, y: 12, ts: 'bodyEm', color: 'onSurface' }),
    T(s.cat + ' · ' + s.date, { name: 'Meta', x: 64, y: 33, ts: 'caption', color: 'onSurfaceVariant' }),
    badge(th, s.st, { x: 64, y: 52 }),
    F({ name: 'Importe', x: 196, y: 12, w: 120, dir: 'V', gap: 2, cross: 'end' }, right)
  ]);
}

// Fila de lista de ajustes (64 dp, objetivo táctil completo).
function listRow(th, o) {
  var kids = [];
  if (o.icon) kids.push(F({ name: 'Ícono', w: 40, h: 40, r: 20, fill: o.iconFill || 'surfaceVariant', dir: 'H', main: 'center', cross: 'center' }, [I(o.icon, { size: 22, color: o.iconColor || 'onSurface' })]));
  var txt = [T(o.title, { name: 'Título', ts: 'bodyEm', s: o.big ? 16 : 14, lh: o.big ? 22 : 20, color: o.titleColor || 'onSurface', fillW: true })];
  if (o.sub) txt.push(T(o.sub, { name: 'Detalle', ts: 'caption', color: 'onSurfaceVariant', fillW: true }));
  kids.push(F({ name: 'Textos', dir: 'V', gap: 2, fillW: true }, txt));
  if (o.value) kids.push(T(o.value, { name: 'Valor', ts: 'bodyEm', color: 'onSurface' }));
  if (o.trailing === 'chevron') kids.push(I('chevron_right', { size: 24, color: 'onSurfaceVariant' }));
  if (o.trailing === 'toggle') kids.push(toggle(th, o.on, { go: o.toggleGo }));
  if (o.trailing === 'radio') kids.push(I(o.on ? 'radio_button_checked' : 'radio_button_unchecked', { size: 24, color: o.on ? 'primary' : 'onSurfaceVariant' }));
  if (o.trailing === 'open') kids.push(I('open_in_new', { size: 20, color: 'onSurfaceVariant' }));
  return F({ name: 'List item / ' + o.title, x: o.x === undefined ? 0 : o.x, y: o.y, w: o.w || (W - 2 * PAD), h: o.h || 64, dir: 'H', gap: 12, pad: [0, o.pr === undefined ? 12 : o.pr, 0, o.pl === undefined ? 12 : o.pl], cross: 'center', fill: o.fill || null, go: o.go }, kids);
}

function divider(th, x, y, w) {
  return R({ name: 'Divider', x: x, y: y, w: w, h: 1, fill: 'surfaceVariant' });
}

function card(th, o, children) {
  return F({ name: o.name || 'Card', x: o.x === undefined ? PAD : o.x, y: o.y, w: o.w || (W - 2 * PAD), h: o.h, r: 16, fill: o.fill || 'surface', shadow: o.flat ? null : 'e1', stroke: o.stroke, strokeW: 1, clip: o.clip, dir: o.dir, gap: o.gap, pad: o.pad, cross: o.cross, main: o.main, go: o.go }, children);
}

// Aviso en línea. tone: error | accent | info | neutral. Siempre ícono + texto
// en color-on-surface sobre un contenedor tenue.
function banner(th, o) {
  var tones = { error: 'error', accent: 'accent', info: 'primary', neutral: 'onSurfaceVariant', success: 'success' };
  var tok = tones[o.tone || 'info'];
  var bg = o.tone === 'accent' ? 'accentContainer' : (o.tone === 'info' ? 'primaryContainer' : { c: tok, a: th.id === 'wf' ? 0.25 : 0.12 });
  if (o.tone === 'neutral') bg = 'surfaceVariant';
  var txt = [];
  if (o.title) txt.push(T(o.title, { name: 'Título', ts: 'bodyEm', color: 'onSurface', fillW: true }));
  if (o.text) txt.push(T(o.text, { name: 'Texto', ts: 'caption', s: 13, lh: 18, color: 'onSurface', fillW: true }));
  if (o.actions) {
    var acts = [];
    for (var i = 0; i < o.actions.length; i++) acts.push(F({ name: 'Acción / ' + o.actions[i].label, h: 36, dir: 'H', cross: 'center', pad: [0, 4, 0, 0], go: o.actions[i].go }, [
      T(o.actions[i].label, { ts: 'label', color: th.id === 'wf' ? 'onSurface' : 'primaryDark', underline: true })
    ]));
    txt.push(F({ name: 'Acciones', dir: 'H', gap: 16 }, acts));
  }
  return F({ name: 'Banner / ' + (o.title || o.text), x: o.x === undefined ? PAD : o.x, y: o.y, w: o.w || (W - 2 * PAD), r: 12, fill: bg, dir: 'H', gap: 12, pad: [12, 12, 12, 12], cross: 'start', go: o.go }, [
    I(o.icon, { size: 24, color: th.id === 'wf' ? 'onSurface' : (o.tone === 'neutral' ? 'onSurface' : tok) }),
    F({ name: 'Contenido', dir: 'V', gap: 4, fillW: true }, txt)
  ]);
}

function snackbar(th, text, o) {
  o = o || {};
  return F({ name: 'Snackbar', x: PAD, y: o.y || (NAV_Y - 16 - 64), w: W - 2 * PAD, r: 8, fill: 'onSurface', shadow: 'e3', dir: 'H', gap: 8, pad: [14, 8, 14, 16], cross: 'center' }, [
    T(text, { ts: 'body', color: th.id === 'wf' ? '#FFFFFF' : 'surface', fillW: true }),
    o.action ? F({ name: 'Acción / ' + o.action, h: 36, pad: [0, 8, 0, 8], dir: 'H', cross: 'center', go: o.go }, [T(o.action, { ts: 'label', wt: 600, color: th.id === 'wf' ? '#FFFFFF' : 'primaryContainer' })]) : null
  ]);
}

function scrim(th) {
  return R({ name: 'Scrim', x: 0, y: 0, w: W, h: H, fill: { c: '#000000', a: th.id === 'dk' ? 0.6 : 0.4 } });
}

// Bottom sheet modal (radio 24 en la parte superior, 3.1.1.1).
function sheet(th, o, children) {
  var top = o.top === undefined ? 40 : o.top;
  return F({ name: o.name || 'Bottom sheet', x: 0, y: top, w: W, h: H - top, r: [24, 24, 0, 0], fill: 'surface', shadow: 'e3', clip: true }, [
    F({ name: 'Drag handle', x: 132, y: 0, w: 96, h: 24, go: o.handleGo }, [R({ name: 'Handle', x: 32, y: 10, w: 32, h: 4, r: 2, fill: 'onSurfaceVariant' })])
  ].concat(children));
}

// Diálogo modal (radio 24). actions: [{label, kind, go}]
function dialog(th, o) {
  var acts = [];
  for (var i = 0; i < o.actions.length; i++) {
    var a = o.actions[i];
    acts.push(btn(th, a.label, { kind: a.kind || 'text', fillW: !!o.stack, go: a.go, h: 48, px: 16 }));
  }
  var body = [];
  if (o.icon) body.push(F({ name: 'Ícono', w: 48, h: 48, r: 24, fill: o.iconFill || 'primaryContainer', dir: 'H', main: 'center', cross: 'center' }, [I(o.icon, { size: 24, color: o.iconColor || 'onPrimaryContainer' })]));
  body.push(T(o.title, { name: 'Título', ts: 'section', s: 20, lh: 26, align: o.icon ? 'center' : 'left', color: 'onSurface', fillW: true }));
  body.push(T(o.text, { name: 'Texto', ts: 'body', align: o.icon ? 'center' : 'left', color: 'onSurface', fillW: true }));
  body.push(F({ name: 'Acciones', dir: o.stack ? 'V' : 'H', gap: 8, main: 'end', fillW: true, pad: [8, 0, 0, 0] }, acts));
  return F({ name: 'Dialog / ' + o.title, x: 24, y: o.y, w: W - 48, r: 24, fill: 'surface', shadow: 'e3', dir: 'V', gap: 16, pad: [24, 24, 20, 24], cross: 'center' }, body);
}

// Gráfico de barras: data [{m, v}], sel = índice resaltado.
function barChart(th, o) {
  var w = o.w, h = o.h, max = o.max || 500, step = o.step || 100;
  var plotH = h - 28, plotX = 44, plotW = w - plotX - 4;
  var ch = [];
  for (var g = 0; g <= max; g += step) {
    var gy = plotH - Math.round(plotH * g / max);
    ch.push(R({ name: 'Grid', x: plotX, y: gy, w: plotW, h: 1, fill: 'surfaceVariant' }));
    ch.push(T('S/ ' + g, { name: 'Eje', x: 0, y: gy - 8, w: 40, align: 'right', ts: 'small', color: 'onSurfaceVariant' }));
  }
  var n = o.data.length, slot = plotW / n, bw = Math.min(28, slot - 16);
  for (var i = 0; i < n; i++) {
    var d = o.data[i], on = i === o.sel;
    var bh = Math.round(plotH * d.v / max);
    var bx = Math.round(plotX + slot * i + (slot - bw) / 2);
    ch.push(F({ name: 'Barra / ' + d.m, x: Math.round(plotX + slot * i), y: 0, w: Math.round(slot), h: h, go: o.gos ? o.gos[i] : null }, [
      R({ name: 'Barra', x: Math.round((slot - bw) / 2), y: plotH - bh, w: bw, h: bh, r: [6, 6, 0, 0], fill: on ? 'primary' : 'primaryContainer', stroke: on ? null : (th.id === 'wf' ? null : 'primary'), strokeW: 1 }),
      T(d.m, { name: 'Mes', x: 0, y: plotH + 8, w: Math.round(slot), align: 'center', ts: 'caption', wt: on ? 700 : 400, color: 'onSurface' })
    ]));
  }
  return F({ name: o.name || 'Bar chart', x: o.x, y: o.y, w: w, h: h }, ch);
}

// Dona por categoría usando sectores (arcData en Figma).
function donut(th, o) {
  var ch = [], a = -Math.PI / 2, gap = 0.035;
  for (var i = 0; i < o.data.length; i++) {
    var d = o.data[i];
    var sweep = 2 * Math.PI * d.pct / 100;
    ch.push(ARC({ name: 'Sector / ' + d.n, x: 0, y: 0, w: o.size, h: o.size, start: a + gap / 2, end: a + sweep - gap / 2, inner: 0.62, fill: th.id === 'wf' ? ['#3A3A3A', '#7A7A7A', '#A5A5A5', '#C7C7C7', '#DEDEDE'][i] : d.tok }));
    a += sweep;
  }
  ch.push(F({ name: 'Centro', x: 0, y: o.size / 2 - 22, w: o.size, dir: 'V', cross: 'center' }, [
    T(o.center, { font: th.fontH, wt: 700, s: 18, lh: 24, color: 'onSurface' }),
    T(o.centerSub, { ts: 'caption', color: 'onSurfaceVariant' })
  ]));
  return F({ name: 'Donut chart', x: o.x, y: o.y, w: o.size, h: o.size }, ch);
}

function progressBar(th, o) {
  return F({ name: 'Progress', x: o.x, y: o.y, w: o.w, h: o.h || 8, r: (o.h || 8) / 2, fill: 'surfaceVariant', clip: true, fillW: o.fillW }, [
    R({ name: 'Valor', x: 0, y: 0, w: Math.max(4, Math.round(o.w * o.pct / 100)), h: o.h || 8, r: (o.h || 8) / 2, fill: o.fill || 'primary' })
  ]);
}

// Marcador de imagen o ilustración en wireframe/mock-up.
function illustration(th, icon, o) {
  var sz = o.size || 96;
  return F({ name: 'Ilustración', x: o.x, y: o.y, w: sz, h: sz, r: sz / 2, fill: o.fill || 'primaryContainer', dir: 'H', main: 'center', cross: 'center' }, [
    I(icon, { size: Math.round(sz * 0.5), color: o.color || 'primary' })
  ]);
}

// Marco base de pantalla. body = nodos absolutos.
function phone(th, id, body) {
  var s = SCREENS[id];
  return F({ name: id + ' · ' + s.title, w: W, h: H, fill: 'bg', clip: true, screen: id }, body);
}

// Contenedor con scroll vertical (o horizontal) para el prototipo.
function scroller(o, children) {
  return F({ name: o.name || 'Scroll', x: o.x || 0, y: o.y, w: o.w || W, h: o.h, clip: true, scroll: o.dir || 'V' }, children);
}
