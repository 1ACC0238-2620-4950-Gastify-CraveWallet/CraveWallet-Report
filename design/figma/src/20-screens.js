// Pantallas de la aplicación móvil de CraveWallet (360 x 800 dp).
// Código de pantalla = letra del área + número: I Inicio, G Gastos,
// A Agregar suscripción, N Análisis, P Perfil y recordatorios.
// `go` describe el enlace del prototipo: { to, tr, trig } o { back: true }.
//   tr: push | up (bottom sheet) | down | smart | fade

var CATS_NEW = [
  { n: 'Productividad', icon: 'work', pct: 41, amt: 'S/ 195.48', tok: 'primary', count: 2 },
  { n: 'Fitness', icon: 'fitness_center', pct: 27, amt: 'S/ 129.90', tok: 'accent', count: 1 },
  { n: 'Streaming', icon: 'play_circle', pct: 25, amt: 'S/ 117.16', tok: 'info', count: 3 },
  { n: 'Música', icon: 'headphones', pct: 4, amt: 'S/ 20.90', tok: 'success', count: 1 },
  { n: 'Delivery', icon: 'moped', pct: 3, amt: 'S/ 14.90', tok: 'warning', count: 1 }
];
var CAT_COUNT = { 'Productividad': 1, 'Fitness': 1, 'Streaming': 3, 'Música': 1, 'Delivery': 1 };
// Gasto mensual real de Renzo: LinkedIn Premium empezó en agosto.
var HIST = [
  { m: 'May', v: 267.06 }, { m: 'Jun', v: 282.26 }, { m: 'Jul', v: 282.56 },
  { m: 'Ago', v: 433.77 }, { m: 'Sep', v: 431.57 }, { m: 'Oct', v: 433.22 }
];
var HEAT = [
  { n: 'Productividad', v: [0, 0, 0, 151, 149, 150] },
  { n: 'Fitness', v: [130, 130, 130, 130, 130, 130] },
  { n: 'Streaming', v: [116, 117, 117, 117, 117, 117] },
  { n: 'Música', v: [21, 21, 21, 21, 21, 21] },
  { n: 'Delivery', v: [0, 15, 15, 15, 15, 15] }
];

// Quita los enlaces de una pantalla de fondo cuando encima va un diálogo o una
// hoja modal: en el prototipo solo responde la capa superior.
function stripGo(n) {
  if (!n) return n;
  delete n.go;
  if (n.ch) for (var i = 0; i < n.ch.length; i++) stripGo(n.ch[i]);
  return n;
}

function catIcon(th, c, sz, x, y) {
  sz = sz || 40;
  return F({ name: 'Ícono / ' + c.n, x: x, y: y, w: sz, h: sz, r: sz / 2, fill: { c: c.tok, a: th.id === 'wf' ? 1 : 0.16 }, dir: 'H', main: 'center', cross: 'center' }, [
    I(c.icon, { size: Math.round(sz * 0.55), color: th.id === 'wf' ? 'onSurface' : (c.tok === 'warning' ? 'onSurface' : c.tok) })
  ]);
}

// ============================================================================
// I · Inicio
// ============================================================================

function homeHeader(th, name) {
  return F({ name: 'Encabezado', x: 0, y: 32, w: W, h: 64 }, [
    T('Hola, ' + name, { name: 'Saludo', x: PAD, y: 8, ts: 'title', color: 'onSurface' }),
    T('Lunes 5 de octubre', { name: 'Fecha', x: PAD, y: 38, ts: 'caption', color: 'onSurfaceVariant' }),
    iconBtn(th, 'search', { x: 248, y: 8, name: 'Buscar', go: { to: 'G1', tr: 'fade' } }),
    userAvatar(th, name === 'Renzo' ? 'RS' : 'CT', { x: 304, y: 12, size: 40, go: { to: 'P1', tr: 'fade' } })
  ]);
}

function totalCard(th, o) {
  return card(th, { name: 'Resumen mensual', y: o.y, h: 168, fill: 'primary' }, [
    T('Gasto mensual en suscripciones', { x: 20, y: 20, ts: 'body', color: 'onPrimary' }),
    T(o.total, { name: 'Total', x: 20, y: 44, ts: 'amount', color: 'onPrimary' }),
    T(o.count + ' · todo en soles', { x: 20, y: 88, ts: 'caption', color: 'onPrimary' }),
    R({ name: 'Separador', x: 20, y: 116, w: 288, h: 1, fill: { c: 'onPrimary', a: 0.3 } }),
    I('currency_exchange', { x: 20, y: 134, size: 18, color: 'onPrimary' }),
    T('TC S/ ' + FX.rate + ' · ' + FX.updated, { x: 44, y: 135, ts: 'caption', color: 'onPrimary' }),
    o.analysis === false ? null : F({ name: 'Ver análisis', x: 196, y: 120, w: 116, h: 48, dir: 'H', gap: 4, main: 'end', cross: 'center', go: { to: 'N1', tr: 'fade' } }, [
      T('Ver análisis', { ts: 'label', color: 'onPrimary', underline: true }), I('arrow_forward', { size: 18, color: 'onPrimary' })
    ])
  ]);
}

function upcomingCard(th, s, x) {
  var b = BRANDS[s.k];
  return F({ name: 'Próximo cobro / ' + b.n, x: x, y: 4, w: 152, h: 148, r: 16, fill: 'surface', shadow: 'e1', dir: 'V', gap: 4, pad: [14, 14, 14, 14], go: s.k === 'linkedin' ? { to: 'G3', tr: 'push' } : null }, [
    F({ name: 'Fila', dir: 'H', main: 'between', cross: 'start', fillW: true, h: 44 }, [avatar(th, s.k, {}), badge(th, s.st, {})]),
    T(b.n, { name: 'Servicio', ts: 'bodyEm', color: 'onSurface', fillW: true }),
    T(s.when + ' · ' + s.date, { name: 'Fecha', ts: 'caption', color: 'onSurfaceVariant' }),
    T(s.amt, { name: 'Monto', font: th.fontH, wt: 700, s: 18, lh: 24, color: 'onSurface' })
  ]);
}

function categoryRow(th, c, y, go) {
  return F({ name: 'Categoría / ' + c.n, x: PAD, y: y, w: W - 2 * PAD, h: 56, dir: 'H', gap: 12, cross: 'center', go: go }, [
    catIcon(th, c, 40),
    F({ name: 'Detalle', dir: 'V', gap: 6, fillW: true }, [
      T(c.n, { ts: 'bodyEm', color: 'onSurface' }),
      progressBar(th, { w: 160, pct: c.pct * 2, fill: th.id === 'wf' ? 'onSurfaceVariant' : c.tok, h: 6 })
    ]),
    F({ name: 'Cifras', dir: 'V', gap: 2, cross: 'end', w: 84 }, [
      T(c.pct + ' %', { ts: 'bodyEm', color: 'onSurface' }),
      T(c.amt, { ts: 'caption', color: 'onSurfaceVariant' })
    ])
  ]);
}

function homeScreen(th, id, v) {
  var added = v === 'added' || v === 'nocal';
  var cats = added ? CATS_NEW : CATS;
  var content = [
    totalCard(th, { y: 8, total: added ? TOTAL_NEW : TOTAL, count: added ? '8 suscripciones activas' : '7 suscripciones activas' }),
    card(th, { name: 'Alerta de cobro', y: 192, h: 96, fill: 'accentContainer', flat: true, go: { to: 'G1', tr: 'fade' } }, [
      F({ name: 'Ícono', x: 16, y: 16, w: 40, h: 40, r: 20, fill: 'accent', dir: 'H', main: 'center', cross: 'center' }, [I('notifications_active-fill', { size: 22, color: 'accentInk' })]),
      T('Mañana te cobran Spotify', { x: 68, y: 16, w: 220, ts: 'bodyEm', s: 16, lh: 22, color: 'onSurface' }),
      T('S/ 20.90. ¿Lo dejamos pasar? Revísalo antes del cobro.', { x: 68, y: 42, w: 220, ts: 'caption', s: 13, lh: 18, color: 'onSurface' }),
      I('chevron_right', { x: 296, y: 36, size: 24, color: 'onSurface' })
    ]),
    sectionHeader(th, 'Próximos cobros', { y: 300, action: 'Ver todos', go: { to: 'G1', tr: 'fade' } }),
    scroller({ name: 'Carrusel de próximos cobros', y: 348, h: 156, dir: 'H' }, [
      F({ name: 'Tarjetas', x: 0, y: 0, w: 16 + 5 * 164, h: 156 }, [
        upcomingCard(th, SUBS[0], 16), upcomingCard(th, SUBS[1], 180), upcomingCard(th, SUBS[2], 344), upcomingCard(th, SUBS[3], 508),
        F({ name: 'Ver todos', x: 672, y: 4, w: 152, h: 148, r: 16, stroke: 'onSurfaceVariant', strokeW: 1, dir: 'V', gap: 8, main: 'center', cross: 'center', go: { to: 'G1', tr: 'fade' } }, [
          I('receipt_long', { size: 28, color: 'primary' }), T('Ver los ' + (added ? 8 : 7), { ts: 'label', color: 'primary' })
        ])
      ])
    ]),
    sectionHeader(th, 'Por categoría', { y: 516, action: 'Análisis', go: { to: 'N1', tr: 'fade' } })
  ];
  for (var i = 0; i < cats.length; i++) content.push(categoryRow(th, cats[i], 564 + i * 60));
  content.push(banner(th, {
    y: 876, tone: 'info', icon: 'savings', title: 'Smart Fit: sin uso hace 34 días',
    text: 'Si la cancelas antes del 15 oct, ahorras S/ 129.90 este mes.',
    actions: [{ label: 'Revisar', go: { to: 'G1', tr: 'fade' } }]
  }));
  content.push(R({ name: 'Espacio para el FAB', x: 0, y: 990, w: W, h: 90 }));

  var body = [
    statusBar(th), homeHeader(th, 'Renzo'),
    scroller({ name: 'Contenido', y: 96, h: 624 }, content)
  ];
  if (v === 'added') {
    body.push(fab(th, { go: { to: 'A1', tr: 'up' } }));
    body[body.length - 1].y = NAV_Y - 16 - 56 - 72;
    body.push(snackbar(th, 'Notion Plus agregado. Te avisaremos el 2 nov.', { action: 'Deshacer', go: { to: 'I1', tr: 'fade' } }));
  } else if (v === 'nocal') {
    body.push(fab(th, { go: { to: 'A1', tr: 'up' } }));
    body[body.length - 1].y = NAV_Y - 16 - 56 - 88;
    body.push(snackbar(th, 'Notion Plus agregado. Sin calendario: te avisaremos por notificación.', { action: 'Ajustes', go: { to: 'P2', tr: 'push' }, y: NAV_Y - 16 - 72 }));
  } else {
    body.push(fab(th, { go: { to: 'A1', tr: 'up' } }));
  }
  body.push(bottomNav(th, 'inicio', { badge: '1' }));
  return phone(th, id, body);
}

screen('I1', 'Inicio', 'US08, US09, US10, US17, US35', function (th) { return homeScreen(th, 'I1', null); });

screen('I2', 'Inicio sin gastos', 'US04, US05', function (th) {
  return phone(th, 'I2', [
    statusBar(th), homeHeader(th, 'Camila'),
    totalCard(th, { y: 104, total: 'S/ 0.00', count: '0 suscripciones', analysis: false }),
    illustration(th, 'account_balance_wallet', { x: 120, y: 304, size: 120 }),
    T('Aún no tienes gastos registrados.', { x: PAD, y: 448, w: W - 2 * PAD, align: 'center', ts: 'section', color: 'onSurface' }),
    T('Agrega tu primera suscripción y toma el control.', { x: 40, y: 480, w: W - 80, align: 'center', ts: 'body', color: 'onSurfaceVariant' }),
    btn(th, 'Agregar mi primera suscripción', { x: PAD, y: 540, w: W - 2 * PAD, h: 56, icon: 'add', go: { to: 'A1', tr: 'up' } }),
    F({ name: 'Consejo', x: PAD, y: 616, w: W - 2 * PAD, dir: 'H', gap: 8, main: 'center', cross: 'center' }, [
      I('info', { size: 18, color: 'onSurfaceVariant' }),
      T('Empieza por las que se cobran en dólares.', { ts: 'caption', color: 'onSurfaceVariant' })
    ]),
    bottomNav(th, 'inicio', {})
  ]);
});

screen('I3', 'Inicio con la nueva suscripción', 'US05, US12, US17', function (th) { return homeScreen(th, 'I3', 'added'); });
screen('I4', 'Guardado sin calendario', 'US14, US36', function (th) { return homeScreen(th, 'I4', 'nocal'); });

// ============================================================================
// G · Gastos
// ============================================================================

function gastosScreen(th, id, swiped) {
  var list = [];
  for (var i = 0; i < SUBS.length; i++) {
    var s = SUBS[i];
    var go = null;
    if (s.k === 'linkedin') go = { to: 'G3', tr: 'push' };
    if (s.k === 'max') go = swiped ? { to: 'G1', tr: 'smart', trig: 'drag' } : { to: 'G2', tr: 'smart', trig: 'drag' };
    if (s.k === 'max') {
      list.push(F({ name: 'Acción de deslizar', x: PAD, y: 4 + i * 92, w: W - 2 * PAD, h: 84, r: 16, fill: 'surfaceVariant', go: swiped ? { to: 'G1', tr: 'smart' } : null }, [
        F({ name: 'Marcar sin usar', x: 232, y: 0, w: 96, h: 84, dir: 'V', gap: 4, main: 'center', cross: 'center' }, [
          I('visibility_off', { size: 24, color: 'onSurface' }), T('Sin usar', { ts: 'currency', color: 'onSurface' })
        ])
      ]));
    }
    list.push(subCard(th, s, { y: 4 + i * 92, x: (swiped && s.k === 'max') ? PAD - 104 : PAD, go: go }));
  }
  list.push(R({ name: 'Espacio para el FAB', x: 0, y: 4 + 7 * 92, w: W, h: 88 }));
  var chips = F({ name: 'Filtros', x: 0, y: 0, dir: 'H', gap: 8, pad: [8, 16, 8, 16], cross: 'center' }, [
    chip(th, 'Todas', { selected: true }), chip(th, 'Estado', { drop: true }), chip(th, 'Streaming', {}), chip(th, 'Productividad', {}),
    chip(th, 'Fitness', {}), chip(th, 'Música', {}), chip(th, 'Delivery', {})
  ]);
  return phone(th, id, [
    statusBar(th),
    appBar(th, { title: 'Gastos', actions: [{ icon: 'sort', name: 'Ordenar' }] }),
    F({ name: 'Search bar', x: PAD, y: 96, w: W - 2 * PAD, h: 56, r: 8, fill: 'surface', stroke: 'onSurfaceVariant', strokeW: 1, dir: 'H', gap: 12, pad: [0, 16, 0, 16], cross: 'center' }, [
      I('search', { size: 24, color: 'onSurface' }), T('Buscar por nombre o categoría', { ts: 'bodyL', color: 'onSurfaceVariant' })
    ]),
    scroller({ name: 'Chips de filtro', y: 156, h: 48, dir: 'H' }, [chips]),
    F({ name: 'Resumen de la lista', x: PAD, y: 204, w: W - 2 * PAD, h: 44, dir: 'H', main: 'between', cross: 'center' }, [
      T('7 activas · ' + TOTAL + ' al mes', { ts: 'caption', color: 'onSurfaceVariant' }),
      F({ name: 'Orden', h: 44, dir: 'H', gap: 4, cross: 'center' }, [I('sort', { size: 18, color: 'primary' }), T('Próximo cobro', { ts: 'label', color: 'primary' })])
    ]),
    scroller({ name: 'Lista de suscripciones', y: 248, h: 472 }, list),
    fab(th, { go: { to: 'A1', tr: 'up' } }),
    bottomNav(th, 'gastos', { badge: '1' })
  ]);
}

screen('G1', 'Gastos', 'US10, US15, US27', function (th) { return gastosScreen(th, 'G1', false); });
screen('G2', 'Deslizar una tarjeta', 'US06 (gesto de 3.1.1.3)', function (th) { return gastosScreen(th, 'G2', true); });

screen('G3', 'Detalle de la suscripción', 'US11, US15, US16, US29, US37', function (th) {
  var hist = [['9 sep 2026', 'S/ 149.16', 'TC 3.73'], ['9 ago 2026', 'S/ 150.76', 'TC 3.77']];
  var rows = [];
  for (var i = 0; i < hist.length; i++) {
    rows.push(F({ name: 'Cobro / ' + hist[i][0], x: 0, y: 56 * i, w: W - 2 * PAD, h: 56, dir: 'H', main: 'between', cross: 'center', pad: [0, 16, 0, 16] }, [
      T(hist[i][0], { ts: 'body', color: 'onSurface' }),
      F({ name: 'Importe', dir: 'V', cross: 'end' }, [T(hist[i][1], { ts: 'bodyEm', color: 'onSurface' }), T('USD 39.99 · ' + hist[i][2], { ts: 'caption', color: 'onSurfaceVariant' })])
    ]));
    if (i < hist.length - 1) rows.push(divider(th, 16, 56 * (i + 1), W - 2 * PAD - 32));
  }
  var content = [
    avatar(th, 'linkedin', { x: PAD, y: 8, size: 56 }),
    T('LinkedIn Premium', { x: 84, y: 8, ts: 'title', color: 'onSurface' }),
    T('Productividad · Mensual', { x: 84, y: 38, ts: 'caption', color: 'onSurfaceVariant' }),
    badge(th, 'pronto', { x: 84, y: 58 }),
    card(th, { name: 'Monto', y: 100, h: 176 }, [
      T('Próximo cobro · 9 oct (en 4 días)', { x: 16, y: 16, ts: 'caption', color: 'onSurfaceVariant' }),
      T('S/ 150.36', { x: 16, y: 36, ts: 'amount', color: 'onSurface' }),
      T('USD 39.99 × TC S/ 3.76', { x: 16, y: 78, ts: 'currency', color: 'onSurfaceVariant' }),
      divider(th, 16, 104, 296),
      F({ name: 'Variación', x: 16, y: 116, w: 296, dir: 'H', gap: 8, cross: 'center' }, [I('trending_up', { size: 20, color: 'onSurface' }), T('S/ 1.20 más que el cobro anterior (TC 3.73)', { ts: 'caption', color: 'onSurface', fillW: true })]),
      F({ name: 'Actualización', x: 16, y: 144, w: 296, dir: 'H', gap: 8, cross: 'center' }, [I('sync', { size: 20, color: 'onSurfaceVariant' }), T('Tipo de cambio actualizado ' + FX.updated, { ts: 'caption', color: 'onSurfaceVariant' })])
    ]),
    card(th, { name: 'Recordatorio', y: 292, h: 72, flat: true, stroke: 'surfaceVariant', go: { to: 'P2', tr: 'push' } }, [
      listRow(th, { x: 0, y: 4, w: W - 2 * PAD, icon: 'notifications_active', iconFill: 'primaryContainer', iconColor: 'onPrimaryContainer', title: 'Recordatorio', sub: 'Jue 8 oct, 9:00 a. m. · en tu calendario', trailing: 'chevron' })
    ]),
    sectionHeader(th, 'Historial de cobros', { y: 376 }),
    card(th, { name: 'Historial', y: 424, h: 112, flat: true, stroke: 'surfaceVariant' }, rows),
    sectionHeader(th, 'Notas', { y: 548 }),
    T('"Lo saqué para buscar trabajo. ¿Lo sigo necesitando?"', { x: PAD, y: 594, w: W - 2 * PAD, ts: 'body', color: 'onSurface' }),
    btn(th, 'Editar', { x: PAD, y: 640, w: W - 2 * PAD, kind: 'outlined', icon: 'edit' }),
    btn(th, 'Cancelar suscripción', { x: PAD, y: 696, w: W - 2 * PAD, kind: 'dangerText', icon: 'cancel' }),
    R({ name: 'Espacio final', x: 0, y: 744, w: W, h: 24 })
  ];
  return phone(th, 'G3', [
    statusBar(th),
    appBar(th, { title: 'Detalle', nav: 'back', actions: [{ icon: 'edit', name: 'Editar' }, { icon: 'more_vert', name: 'Más opciones' }] }),
    scroller({ name: 'Contenido', y: 96, h: 624 }, content),
    bottomNav(th, 'gastos', { badge: '1' })
  ]);
});

// ============================================================================
// A · Agregar suscripción (bottom sheet con stepper de 3 pasos)
// ============================================================================

function addSheet(th, id, step, children, footer, o) {
  o = o || {};
  var closeGo = step === 1 ? { to: 'I1', tr: 'down' } : { to: 'A8', tr: 'fade' };
  var kids = [
    iconBtn(th, 'close', { x: 4, y: 20, name: 'Cerrar', go: closeGo }),
    T('Agregar gasto', { name: 'Título', x: 56, y: 30, ts: 'title', color: 'onSurface' }),
    T('Paso ' + step + ' de 3', { name: 'Progreso', x: 264, y: 36, w: 80, align: 'right', ts: 'caption', color: 'onSurfaceVariant' }),
    stepper(th, step, { y: 76 })
  ].concat(children);
  if (footer) {
    kids.push(F({ name: 'Acciones', x: 0, y: 672, w: W, h: 88, fill: 'surface', dir: 'H', gap: 8, pad: [16, 16, 16, 16] }, [
      R({ name: 'Separador', x: 0, y: 0, w: W, h: 1, fill: 'surfaceVariant', abs: true }),
      btn(th, footer[0].label, { kind: 'outlined', h: 56, fillW: true, go: footer[0].go }),
      btn(th, footer[1].label, { kind: footer[1].kind || 'filled', h: 56, fillW: true, go: footer[1].go })
    ]));
  }
  var body = [statusBar(th), scrim(th), sheet(th, { top: 40, handleGo: step === 1 ? { to: 'I1', tr: 'down', trig: 'drag' } : null }, kids)];
  if (o.overlay) body = body.map(stripGo).concat(o.overlay);
  return phone(th, id, body);
}

screen('A1', 'Elegir el servicio', 'US04, US05', function (th) {
  var keys = ['netflix', 'spotify', 'disney', 'max', 'smartfit', 'googleone', 'chatgpt', 'rappi', 'crunchy'];
  var tiles = [];
  for (var i = 0; i < keys.length; i++) {
    var c = i % 3, r = Math.floor(i / 3);
    tiles.push(F({ name: 'Servicio / ' + BRANDS[keys[i]].n, x: PAD + c * 112, y: 248 + r * 100, w: 104, h: 92, r: 12, fill: 'surface', stroke: 'surfaceVariant', strokeW: 1, dir: 'V', gap: 8, main: 'center', cross: 'center', pad: [8, 4, 8, 4] }, [
      avatar(th, keys[i], {}), T(BRANDS[keys[i]].n, { ts: 'caption', color: 'onSurface', align: 'center', w: 96 })
    ]));
  }
  return addSheet(th, 'A1', 1, [
    F({ name: 'Buscar servicio', x: PAD, y: 140, w: W - 2 * PAD, h: 56, r: 8, fill: 'surface', stroke: 'onSurfaceVariant', strokeW: 1, dir: 'H', gap: 12, pad: [0, 16, 0, 16], cross: 'center' }, [
      I('search', { size: 24, color: 'onSurface' }), T('Buscar servicio (ej. Netflix)', { ts: 'bodyL', color: 'onSurfaceVariant' })
    ]),
    T('Populares en Perú', { x: PAD, y: 214, ts: 'section', color: 'onSurface' })
  ].concat(tiles).concat([
    divider(th, PAD, 560, W - 2 * PAD),
    T('¿No está en la lista? Regístralo a mano.', { x: PAD, y: 576, ts: 'body', color: 'onSurfaceVariant' }),
    btn(th, 'Ingresar manualmente', { x: PAD, y: 608, w: W - 2 * PAD, h: 56, kind: 'tonal', icon: 'edit', go: { to: 'A2', tr: 'push' } })
  ]), null);
});

// Formulario del paso 2. v: empty | error | menu | filled
function detailForm(th, v) {
  var err = v === 'error';
  var filled = v === 'menu' || v === 'filled';
  var tapGo = (err || v === 'empty') ? { to: 'A4', tr: 'smart' } : null;
  var items = [];
  if (err) items.push(banner(th, { x: 0, y: 0, w: W - 2 * PAD, tone: 'error', icon: 'error', title: 'Faltan 4 datos obligatorios', text: 'Revisa los campos marcados para continuar.' }));
  items.push(field(th, {
    label: 'Nombre del servicio', req: true, placeholder: 'Ej. Notion Plus', value: filled ? 'Notion Plus' : null,
    state: err ? 'error' : (filled ? 'filled' : 'default'), helper: err ? 'Ingresa el nombre del servicio.' : null, go: tapGo
  }));
  items.push(F({ name: 'Monto y moneda', dir: 'H', gap: 12, cross: 'start', fillW: true }, [
    field(th, { label: 'Monto', req: true, w: 196, placeholder: 'Ej. 79.90', value: filled ? '12.00' : null, state: err ? 'error' : (filled ? 'filled' : 'default'), helper: err ? 'Ingresa un monto mayor a 0.' : null, go: tapGo }),
    field(th, { label: 'Moneda', w: 120, value: v === 'filled' ? 'USD' : 'PEN', state: v === 'menu' ? 'focus' : 'filled', trailing: v === 'menu' ? 'keyboard_arrow_up' : 'expand_more', go: tapGo })
  ]));
  if (v === 'filled') {
    items.push(banner(th, { x: 0, y: 0, w: W - 2 * PAD, tone: 'info', icon: 'currency_exchange', title: '≈ S/ 45.12 al mes', text: 'Con el tipo de cambio de hoy (S/ 3.76, 08:00). Lo actualizamos cada día.' }));
  }
  items.push(field(th, { label: 'Frecuencia', value: 'Mensual', state: 'filled', trailing: 'expand_more', go: tapGo }));
  items.push(field(th, { label: 'Próximo cobro', req: true, placeholder: 'dd/mm/aaaa', value: filled ? '03/11/2026' : null, state: err ? 'error' : (filled ? 'filled' : 'default'), trailing: 'calendar_month', helper: err ? 'Elige la fecha del próximo cobro.' : null, go: tapGo }));
  items.push(field(th, { label: 'Categoría', req: true, placeholder: 'Elige una categoría', value: filled ? 'Productividad' : null, state: err ? 'error' : (filled ? 'filled' : 'default'), trailing: 'expand_more', helper: err ? 'Elige una categoría.' : null, go: tapGo }));
  items.push(field(th, { label: 'Notas (opcional)', placeholder: 'Máx. 120 caracteres', value: filled ? 'Plan personal para mis proyectos' : null, state: filled ? 'filled' : 'default' }));
  return [
    T('Completa los datos. Los campos con * son obligatorios.', { x: PAD, y: 136, w: W - 2 * PAD, ts: 'body', color: 'onSurfaceVariant' }),
    scroller({ name: 'Formulario', y: 168, h: 504 }, [
      F({ name: 'Campos', x: PAD, y: 8, w: W - 2 * PAD, dir: 'V', gap: 16 }, items),
      R({ name: 'Espacio final', x: 0, y: 760, w: W, h: 24 })
    ])
  ];
}

function currencyMenu(th) {
  var opts = [['PEN', 'Sol peruano', true, null], ['USD', 'Dólar estadounidense', false, { to: 'A5', tr: 'smart' }], ['EUR', 'Euro', false, null]];
  var rows = [];
  for (var i = 0; i < opts.length; i++) {
    rows.push(F({ name: 'Opción / ' + opts[i][0], w: 232, h: 48, dir: 'H', gap: 12, pad: [0, 12, 0, 16], cross: 'center', fill: opts[i][2] ? 'primaryContainer' : null, go: opts[i][3] }, [
      T(opts[i][0], { ts: 'bodyEm', color: 'onSurface', w: 36 }),
      T(opts[i][1], { ts: 'body', color: 'onSurface', fillW: true }),
      opts[i][2] ? I('check', { size: 20, color: 'onPrimaryContainer' }) : null
    ]));
  }
  // Debajo del campo Moneda: 40 (sheet) + 168 (formulario) + 8 + 80 + 16 + 80 = 392
  return F({ name: 'Menú / Moneda', x: 112, y: 396, w: 232, r: 8, fill: 'surface', shadow: 'e3', dir: 'V', pad: [8, 0, 8, 0] }, rows);
}

screen('A2', 'Ingresar los datos', 'US05', function (th) {
  return addSheet(th, 'A2', 2, detailForm(th, 'empty'), [
    { label: 'Descartar', go: { to: 'A8', tr: 'fade' } }, { label: 'Continuar', go: { to: 'A3', tr: 'smart' } }
  ]);
});
screen('A3', 'Campos obligatorios vacíos', 'US05', function (th) {
  return addSheet(th, 'A3', 2, detailForm(th, 'error'), [
    { label: 'Descartar', go: { to: 'A8', tr: 'fade' } }, { label: 'Continuar', go: { to: 'A4', tr: 'smart' } }
  ]);
});
screen('A4', 'Elegir la moneda', 'US05, US15', function (th) {
  return addSheet(th, 'A4', 2, detailForm(th, 'menu'), [
    { label: 'Descartar', go: { to: 'A8', tr: 'fade' } }, { label: 'Continuar', go: { to: 'A5', tr: 'smart' } }
  ], { overlay: [currencyMenu(th)] });
});
screen('A5', 'Vista previa en soles', 'US34, US16', function (th) {
  return addSheet(th, 'A5', 2, detailForm(th, 'filled'), [
    { label: 'Descartar', go: { to: 'A8', tr: 'fade' } }, { label: 'Continuar', go: { to: 'A6', tr: 'push' } }
  ]);
});

function stepThree(th) {
  return [
    card(th, { name: 'Resumen', y: 140, h: 120, flat: true, stroke: 'surfaceVariant' }, [
      avatar(th, 'notion', { x: 16, y: 16, size: 48 }),
      T('Notion Plus', { x: 76, y: 16, ts: 'bodyEm', s: 16, lh: 22, color: 'onSurface' }),
      T('Productividad · Mensual', { x: 76, y: 40, ts: 'caption', color: 'onSurfaceVariant' }),
      F({ name: 'Importe', x: 196, y: 16, w: 116, dir: 'V', cross: 'end', gap: 2 }, [
        T('S/ 45.12', { font: th.fontH, wt: 700, s: 18, lh: 24, color: 'onSurface' }), T('USD 12.00', { ts: 'currency', color: 'onSurfaceVariant' })
      ]),
      divider(th, 16, 76, 296),
      F({ name: 'Próximo cobro', x: 16, y: 86, dir: 'H', gap: 8, cross: 'center' }, [I('event', { size: 20, color: 'onSurface' }), T('Próximo cobro: martes 3 nov 2026', { ts: 'body', color: 'onSurface' })])
    ]),
    T('¿Con cuánta anticipación te avisamos?', { x: PAD, y: 280, ts: 'label', color: 'onSurface' }),
    F({ name: 'Anticipación', x: PAD, y: 308, dir: 'H', gap: 8, h: 48, cross: 'center' }, [
      chip(th, '24 h antes', { selected: true }), chip(th, '3 días antes', {}), chip(th, '7 días antes', {})
    ]),
    card(th, { name: 'Calendario', y: 372, h: 72, flat: true, stroke: 'surfaceVariant' }, [
      listRow(th, { x: 0, y: 4, w: W - 2 * PAD, icon: 'calendar_month', iconFill: 'primaryContainer', iconColor: 'onPrimaryContainer', title: 'Agendar en mi calendario', sub: 'Evento el lun 2 nov, 9:00 a. m.', trailing: 'toggle', on: true })
    ]),
    banner(th, { y: 460, tone: 'neutral', icon: 'notifications', text: 'Las notificaciones push se configuran en Perfil › Recordatorios.' })
  ];
}

screen('A6', 'Activar el recordatorio', 'US12', function (th) {
  return addSheet(th, 'A6', 3, stepThree(th), [
    { label: 'Atrás', go: { back: true } }, { label: 'Activar recordatorio', go: { to: 'A7', tr: 'fade' } }
  ]);
});

screen('A7', 'Permiso de calendario', 'US14', function (th) {
  return addSheet(th, 'A7', 3, stepThree(th), [{ label: 'Atrás' }, { label: 'Activar recordatorio' }], {
    overlay: [scrim(th), dialog(th, {
      y: 216, icon: 'calendar_month', title: '¿Permitir acceso a tu calendario?', stack: true,
      text: 'CraveWallet solo crea un evento 24 h antes de cada cobro. No lee ni cambia tus otros eventos.',
      actions: [{ label: 'Permitir', kind: 'filled', go: { to: 'I3', tr: 'down' } }, { label: 'Ahora no', kind: 'text', go: { to: 'I4', tr: 'down' } }]
    })]
  });
});

screen('A8', 'Descartar el alta', 'US05', function (th) {
  return addSheet(th, 'A8', 2, detailForm(th, 'filled'), [{ label: 'Descartar' }, { label: 'Continuar' }], {
    overlay: [scrim(th), dialog(th, {
      y: 280, title: '¿Descartar este gasto?', text: 'Se perderán los datos de Notion Plus que ingresaste.',
      actions: [{ label: 'Seguir editando', kind: 'text', go: { back: true } }, { label: 'Descartar', kind: 'filled', go: { to: 'I1', tr: 'down' } }]
    })]
  });
});

screen('A9', 'Límite del plan gratuito', 'US39, US21', function (th) {
  var perks = ['Suscripciones sin límite', 'Análisis mensual y por categoría', 'Precio en soles, sin tipo de cambio'];
  var rows = [];
  for (var i = 0; i < perks.length; i++) rows.push(F({ name: 'Beneficio', dir: 'H', gap: 8, cross: 'center' }, [I('check_circle', { size: 20, color: 'primary' }), T(perks[i], { ts: 'body', color: 'onSurface' })]));
  return phone(th, 'A9', [
    statusBar(th), stripGo(homeHeader(th, 'Camila')),
    totalCard(th, { y: 104, total: 'S/ 138.64', count: '5 suscripciones activas', analysis: false }),
    scrim(th),
    sheet(th, { top: 288, handleGo: { back: true, trig: 'drag' } }, [
      illustration(th, 'workspace_premium', { x: 148, y: 32, size: 64 }),
      T('Llegaste a 5 de 5 suscripciones', { x: PAD, y: 108, w: W - 2 * PAD, align: 'center', ts: 'section', s: 20, lh: 26, color: 'onSurface' }),
      progressBar(th, { x: 48, y: 148, w: 264, pct: 100, h: 8 }),
      T('5 de 5 en el plan gratuito', { x: PAD, y: 162, w: W - 2 * PAD, align: 'center', ts: 'caption', color: 'onSurfaceVariant' }),
      F({ name: 'Beneficios', x: 40, y: 196, dir: 'V', gap: 10 }, rows),
      btn(th, 'Ver Premium · S/ 9.90 al mes', { x: PAD, y: 316, w: W - 2 * PAD, h: 56, go: { to: 'P1', tr: 'push' } }),
      btn(th, 'Ahora no', { x: PAD, y: 380, w: W - 2 * PAD, kind: 'text', go: { back: true } })
    ])
  ]);
});

// ============================================================================
// N · Análisis (Premium)
// ============================================================================

function premiumTag(th) {
  return F({ name: 'Tag / Premium', x: 252, y: 52, h: 28, r: 4, fill: 'primaryContainer', dir: 'H', gap: 4, pad: [0, 8, 0, 6], cross: 'center' }, [
    I('workspace_premium-fill', { size: 16, color: 'onPrimaryContainer' }), T('Premium', { ts: 'currency', color: 'onPrimaryContainer' })
  ]);
}

function heatmap(th, o) {
  var cw = 38, ch = 30, lx = 96;
  var nodes = [];
  for (var m = 0; m < 6; m++) nodes.push(T(HIST[m].m, { x: lx + m * cw, y: 0, w: cw - 2, align: 'center', ts: 'small', color: 'onSurfaceVariant' }));
  for (var r = 0; r < HEAT.length; r++) {
    nodes.push(T(HEAT[r].n, { x: 0, y: 20 + r * ch + 7, ts: 'caption', color: 'onSurface' }));
    for (var c = 0; c < 6; c++) {
      var v = HEAT[r].v[c];
      var a = v === 0 ? 0 : 0.1 + 0.35 * (v / 151);
      nodes.push(F({ name: 'Celda', x: lx + c * cw, y: 20 + r * ch, w: cw - 2, h: ch - 2, r: 4, fill: v === 0 ? 'surface' : { c: 'primary', a: th.id === 'wf' ? a + 0.1 : a }, stroke: v === 0 ? 'surfaceVariant' : null, strokeW: 1, dir: 'H', main: 'center', cross: 'center' }, [
        T(v === 0 ? '—' : String(v), { ts: 'small', s: 10, lh: 12, wt: 500, color: 'onSurface' })
      ]));
    }
  }
  return F({ name: 'Heatmap', x: o.x, y: o.y, w: lx + 6 * cw, h: 20 + HEAT.length * ch }, nodes);
}

function analysisScreen(th, id, v) {
  var sel = v === 'sep' ? 4 : 5;
  var dy = v === 'offline' ? 144 : 0;
  var cats = [];
  for (var i = 0; i < CATS.length; i++) {
    var c = CATS[i];
    cats.push(F({ name: 'Categoría / ' + c.n, x: 0, y: i * 60, w: W - 2 * PAD, h: 60, dir: 'H', gap: 12, pad: [0, 8, 0, 16], cross: 'center', go: c.n === 'Streaming' ? { to: 'N3', tr: 'push' } : null }, [
      catIcon(th, c, 36),
      F({ name: 'Textos', dir: 'V', fillW: true }, [T(c.n, { ts: 'bodyEm', color: 'onSurface' }), T(c.amt + ' · ' + CAT_COUNT[c.n] + (CAT_COUNT[c.n] > 1 ? ' suscripciones' : ' suscripción'), { ts: 'caption', color: 'onSurfaceVariant' })]),
      T(c.pct + ' %', { ts: 'bodyEm', color: 'onSurface' }),
      I('chevron_right', { size: 24, color: 'onSurfaceVariant' })
    ]));
  }
  var legend = [];
  for (var j = 0; j < CATS.length; j++) {
    legend.push(F({ name: 'Leyenda / ' + CATS[j].n, dir: 'H', gap: 8, cross: 'center', w: 144 }, [
      R({ w: 10, h: 10, r: 2, fill: th.id === 'wf' ? ['#3A3A3A', '#7A7A7A', '#A5A5A5', '#C7C7C7', '#DEDEDE'][j] : CATS[j].tok }),
      T(CATS[j].n, { ts: 'caption', color: 'onSurface', fillW: true }), T(CATS[j].pct + ' %', { ts: 'currency', color: 'onSurface' })
    ]));
  }
  var isSep = v === 'sep';
  var content = [];
  if (v === 'offline') content.push(banner(th, { y: 8, tone: 'neutral', icon: 'wifi_off', title: 'Sin conexión', text: 'Mostramos tus datos guardados hoy, 08:00. Revisamos el tipo de cambio en cuanto vuelvas a estar en línea.', actions: [{ label: 'Reintentar', go: { to: 'N1', tr: 'fade' } }] }));
  content = content.concat([
    segmented(th, ['Mes', '6 meses', 'Año'], 1, { y: 8 + dy }),
    T(isSep ? 'Septiembre 2026' : 'Octubre 2026', { name: 'Periodo', x: PAD, y: 64 + dy, ts: 'caption', color: 'onSurfaceVariant' }),
    T(isSep ? 'S/ 431.57' : TOTAL, { name: 'Total del periodo', x: PAD, y: 82 + dy, ts: 'amount', color: 'onSurface' }),
    F({ name: 'Variación', x: PAD, y: 126 + dy, dir: 'H', gap: 6, cross: 'center' }, [
      I(isSep ? 'trending_down' : 'trending_up', { size: 20, color: 'onSurface' }),
      T(isSep ? 'S/ 2.20 menos que agosto (S/ 433.77)' : 'S/ 1.65 más que septiembre (S/ 431.57)', { ts: 'body', color: 'onSurface' })
    ]),
    card(th, { name: 'Gasto mensual', y: 164 + dy, h: 236 }, [
      T('Gasto mensual en soles', { x: 16, y: 16, ts: 'bodyEm', color: 'onSurface' }),
      barChart(th, { x: 8, y: 52, w: 312, h: 168, data: HIST, sel: sel, gos: [null, null, null, null, { to: 'N2', tr: 'smart' }, { to: 'N1', tr: 'smart' }] }),
      isSep ? F({ name: 'Tooltip', x: 110, y: 58, w: 132, r: 8, fill: 'onSurface', dir: 'V', gap: 2, pad: [8, 12, 8, 12] }, [
        T('Sep · S/ 431.57', { ts: 'bodyEm', color: th.id === 'wf' ? '#FFFFFF' : 'surface' }), T('7 suscripciones', { ts: 'caption', color: th.id === 'wf' ? '#FFFFFF' : 'surface' })
      ]) : null
    ]),
    F({ name: 'Ayuda', x: PAD, y: 408 + dy, dir: 'H', gap: 6, cross: 'center' }, [I('touch_app', { size: 18, color: 'onSurfaceVariant' }), T('Toca una barra para ver ese mes.', { ts: 'caption', color: 'onSurfaceVariant' })]),
    banner(th, { y: 440 + dy, tone: 'info', icon: 'insights', title: 'Desde agosto gastas S/ 150 más al mes', text: 'Es LinkedIn Premium, que se cobra en dólares.', actions: [{ label: 'Ver suscripción', go: { to: 'G3', tr: 'push' } }] }),
    sectionHeader(th, 'Por categoría', { y: 556 + dy }),
    card(th, { name: 'Dona', y: 604 + dy, h: 172 }, [
      donut(th, { x: 16, y: 16, size: 140, data: CATS, center: '5', centerSub: 'categorías' }),
      F({ name: 'Leyenda', x: 172, y: 26, dir: 'V', gap: 12 }, legend)
    ]),
    card(th, { name: 'Categorías', y: 792 + dy, h: 300, clip: true }, cats),
    card(th, { name: 'Mapa de calor', y: 1108 + dy, h: 232 }, [
      T('Mapa de calor por mes', { x: 16, y: 16, ts: 'bodyEm', color: 'onSurface' }),
      T('Más intenso = más gasto. Montos en soles.', { x: 16, y: 38, ts: 'caption', color: 'onSurfaceVariant' }),
      heatmap(th, { x: 16, y: 66 })
    ]),
    R({ name: 'Espacio final', x: 0, y: 1350 + dy, w: W, h: 24 })
  ]);
  return phone(th, id, [
    statusBar(th),
    appBar(th, { title: 'Análisis' }),
    premiumTag(th),
    scroller({ name: 'Contenido', y: 96, h: 624 }, content),
    bottomNav(th, 'analisis', { badge: '1' })
  ]);
}

screen('N1', 'Análisis mensual', 'US08, US09, US17', function (th) { return analysisScreen(th, 'N1', null); });
screen('N2', 'Mes seleccionado', 'US09, US17', function (th) { return analysisScreen(th, 'N2', 'sep'); });

screen('N3', 'Detalle de una categoría', 'US09, US15, US37', function (th) {
  var subs = [SUBS[5], SUBS[2], SUBS[4]];
  var shares = [48, 30, 22];
  var rows = [];
  for (var i = 0; i < subs.length; i++) {
    var s = subs[i];
    rows.push(F({ name: 'Suscripción / ' + BRANDS[s.k].n, x: 0, y: i * 72, w: W - 2 * PAD, h: 72, dir: 'H', gap: 12, pad: [0, 16, 0, 16], cross: 'center' }, [
      avatar(th, s.k, {}),
      F({ name: 'Textos', dir: 'V', gap: 6, fillW: true }, [
        T(BRANDS[s.k].n, { ts: 'bodyEm', color: 'onSurface' }),
        progressBar(th, { w: 140, pct: shares[i], h: 6, fill: th.id === 'wf' ? 'onSurfaceVariant' : 'info' })
      ]),
      F({ name: 'Cifras', dir: 'V', cross: 'end', gap: 2 }, [T(s.amt, { ts: 'bodyEm', color: 'onSurface' }), T(s.orig ? s.orig : shares[i] + ' %', { ts: 'caption', color: 'onSurfaceVariant' })])
    ]));
  }
  var streamHist = [];
  var sv = [116.26, 116.56, 116.86, 117.31, 116.71, 117.16];
  for (var k = 0; k < 6; k++) streamHist.push({ m: HIST[k].m, v: sv[k] });
  return phone(th, 'N3', [
    statusBar(th),
    appBar(th, { title: 'Streaming', nav: 'back' }),
    scroller({ name: 'Contenido', y: 96, h: 624 }, [
      catIcon(th, CATS[2], 48, PAD, 0),
      T('S/ 117.16', { x: 76, y: 0, ts: 'amount', color: 'onSurface' }),
      T('27 % de tu gasto de octubre · 3 suscripciones', { x: 76, y: 42, ts: 'caption', color: 'onSurfaceVariant' }),
      card(th, { name: 'Tendencia', y: 80, h: 200 }, [
        T('Últimos 6 meses', { x: 16, y: 16, ts: 'bodyEm', color: 'onSurface' }),
        barChart(th, { x: 8, y: 48, w: 312, h: 136, data: streamHist, sel: 5, max: 150, step: 50 })
      ]),
      T('Tu gasto en streaming se mantiene estable: entre S/ 116 y S/ 118 al mes.', { x: PAD, y: 292, w: W - 2 * PAD, ts: 'body', color: 'onSurface' }),
      card(th, { name: 'Suscripciones', y: 344, h: 216, clip: true }, rows),
      banner(th, { y: 576, tone: 'info', icon: 'currency_exchange', title: 'Amazon Prime se cobra en dólares', text: 'Este mes pagas S/ 0.45 más que en septiembre por el tipo de cambio (S/ 3.73 → S/ 3.76).' }),
      R({ name: 'Espacio final', x: 0, y: 690, w: W, h: 24 })
    ]),
    bottomNav(th, 'analisis', { badge: '1' })
  ]);
});


screen('N4', 'Análisis sin datos', 'Estado vacío (3.1.2.2)', function (th) {
  var bars = [];
  var hs = [60, 84, 72, 104, 92, 116];
  for (var i = 0; i < 6; i++) bars.push(R({ name: 'Barra fantasma', x: 40 + i * 46, y: 150 - hs[i], w: 26, h: hs[i], r: [6, 6, 0, 0], stroke: 'onSurfaceVariant', strokeW: 1, dash: [4, 4] }));
  return phone(th, 'N4', [
    statusBar(th),
    appBar(th, { title: 'Análisis' }),
    premiumTag(th),
    card(th, { name: 'Gráfico vacío', y: 112, h: 176, flat: true, stroke: 'surfaceVariant' }, bars.concat([R({ name: 'Base', x: 24, y: 150, w: 280, h: 1, fill: 'onSurfaceVariant' })])),
    illustration(th, 'bar_chart', { x: 140, y: 320, size: 80 }),
    T('Aún no hay datos para analizar', { x: PAD, y: 420, w: W - 2 * PAD, align: 'center', ts: 'section', color: 'onSurface' }),
    T('Registra al menos un mes de gastos para ver tu análisis.', { x: 40, y: 452, w: W - 80, align: 'center', ts: 'body', color: 'onSurfaceVariant' }),
    btn(th, 'Ir a Gastos', { x: 80, y: 516, w: 200, h: 56, icon: 'receipt_long', go: { to: 'G1', tr: 'fade' } }),
    bottomNav(th, 'analisis', {})
  ]);
});

screen('N5', 'Análisis solo para Premium', 'US21, US39', function (th) {
  var perks = ['Gasto mensual y por categoría en soles', 'Mapa de calor de tus suscripciones', 'Suscripciones sin límite (hoy: 5 de 5)'];
  var rows = [];
  for (var i = 0; i < perks.length; i++) rows.push(F({ name: 'Beneficio', dir: 'H', gap: 8, cross: 'center', fillW: true }, [I('check_circle', { size: 20, color: 'primary' }), T(perks[i], { ts: 'body', color: 'onSurface', fillW: true })]));
  return phone(th, 'N5', [
    statusBar(th),
    appBar(th, { title: 'Análisis' }),
    F({ name: 'Vista previa bloqueada', x: 0, y: 96, w: W, h: 330, blur: 6, opacity: 0.6 }, [
      card(th, { name: 'Gráfico', y: 8, h: 236 }, [barChart(th, { x: 8, y: 52, w: 312, h: 168, data: HIST, sel: 5 })])
    ]),
    card(th, { name: 'Premium', y: 196, h: 500, dir: 'V', gap: 14, pad: [24, 20, 20, 20], cross: 'center', fill: 'surface' }, [
      F({ name: 'Candado', w: 56, h: 56, r: 28, fill: 'primaryContainer', dir: 'H', main: 'center', cross: 'center' }, [I('lock-fill', { size: 28, color: 'onPrimaryContainer' })]),
      T('Análisis es parte de Premium', { ts: 'section', s: 20, lh: 26, color: 'onSurface', align: 'center', fillW: true }),
      F({ name: 'Beneficios', dir: 'V', gap: 10, fillW: true }, rows),
      T('S/ 9.90 al mes, en soles. Cancela cuando quieras.', { ts: 'caption', color: 'onSurfaceVariant', align: 'center', fillW: true }),
      btn(th, 'Ver Premium', { h: 56, fillW: true, icon: 'workspace_premium', go: { to: 'P1', tr: 'push' } }),
      btn(th, 'Ahora no', { kind: 'text', fillW: true, go: { to: 'I1', tr: 'fade' } })
    ]),
    bottomNav(th, 'analisis', { lock: true })
  ]);
});

screen('N6', 'Análisis sin conexión', 'US16', function (th) { return analysisScreen(th, 'N6', 'offline'); });

// ============================================================================
// P · Perfil y recordatorios
// ============================================================================

screen('P1', 'Perfil', 'US03, US33', function (th) {
  function group(y, rows, name) {
    var kids = [];
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      kids.push(listRow(th, { x: 0, y: i * 64, w: W - 2 * PAD, icon: r[0], title: r[1], sub: r[2], trailing: 'chevron', go: r[3] }));
      if (i < rows.length - 1) kids.push(divider(th, 64, (i + 1) * 64, W - 2 * PAD - 64));
    }
    return card(th, { name: name, y: y, h: rows.length * 64, clip: true }, kids);
  }
  return phone(th, 'P1', [
    statusBar(th),
    appBar(th, { title: 'Perfil' }),
    scroller({ name: 'Contenido', y: 96, h: 624 }, [
      card(th, { name: 'Usuario', y: 8, h: 96 }, [
        userAvatar(th, 'RS', { x: 16, y: 20, size: 56, fill: 'primary', ink: 'onPrimary' }),
        T('Renzo Salazar', { x: 88, y: 16, ts: 'section', color: 'onSurface' }),
        T('renzo.salazar@gmail.com', { x: 88, y: 42, ts: 'caption', color: 'onSurfaceVariant' }),
        F({ name: 'Tag / Premium', x: 88, y: 62, h: 24, r: 4, fill: 'primaryContainer', dir: 'H', gap: 4, pad: [0, 8, 0, 6], cross: 'center' }, [I('workspace_premium-fill', { size: 16, color: 'onPrimaryContainer' }), T('Premium', { ts: 'currency', color: 'onPrimaryContainer' })])
      ]),
      T('Preferencias', { x: PAD, y: 124, ts: 'label', color: 'onSurfaceVariant' }),
      group(152, [
        ['notifications', 'Recordatorios', 'Calendario activo · push desactivado', { to: 'P2', tr: 'push' }],
        ['currency_exchange', 'Moneda de referencia', 'Soles (PEN)', null],
        ['sync', 'Tipo de cambio', 'Automático · S/ 3.76 ' + FX.updated, null]
      ], 'Preferencias'),
      T('Cuenta', { x: PAD, y: 364, ts: 'label', color: 'onSurfaceVariant' }),
      group(392, [
        ['person', 'Datos de la cuenta', 'Correo y contraseña', null],
        ['workspace_premium', 'Plan Premium', 'S/ 9.90 al mes · se renueva el 1 nov', null],
        ['shield', 'Ayuda y privacidad', 'No pedimos acceso a tu banco', null]
      ], 'Cuenta'),
      card(th, { name: 'Cerrar sesión', y: 604, h: 64, clip: true }, [listRow(th, { x: 0, y: 0, w: W - 2 * PAD, icon: 'logout', title: 'Cerrar sesión' })]),
      T('CraveWallet 1.0 · Gastify', { x: PAD, y: 684, w: W - 2 * PAD, align: 'center', ts: 'caption', color: 'onSurfaceVariant' }),
      R({ name: 'Espacio final', x: 0, y: 700, w: W, h: 24 })
    ]),
    bottomNav(th, 'perfil', { badge: '1' })
  ]);
});

var REMIND = {
  d1: [['LinkedIn Premium', 'Jue 8 oct', '9 oct', 'S/ 150.36'], ['Max', 'Dom 11 oct', '12 oct', 'S/ 34.90'], ['Smart Fit Black', 'Mié 14 oct', '15 oct', 'S/ 129.90'], ['YouTube Premium', 'Sáb 17 oct', '18 oct', 'S/ 25.90']],
  d3: [['LinkedIn Premium', 'Mar 6 oct', '9 oct', 'S/ 150.36'], ['Max', 'Vie 9 oct', '12 oct', 'S/ 34.90'], ['Smart Fit Black', 'Lun 12 oct', '15 oct', 'S/ 129.90'], ['YouTube Premium', 'Jue 15 oct', '18 oct', 'S/ 25.90']]
};

// v: off | on | changed | saved | denied
function remindersScreen(th, id, v) {
  var pushOn = v === 'on' || v === 'changed' || v === 'saved';
  var three = v === 'changed' || v === 'saved';
  var dy = v === 'denied' ? 152 : 0;
  var list = three ? REMIND.d3 : REMIND.d1;
  var rows = [];
  for (var i = 0; i < list.length; i++) {
    rows.push(F({ name: 'Aviso / ' + list[i][0], x: 0, y: i * 64, w: W - 2 * PAD, h: 64, dir: 'H', gap: 12, pad: [0, 16, 0, 16], cross: 'center' }, [
      F({ name: 'Fecha', w: 40, h: 40, r: 8, fill: 'surfaceVariant', dir: 'H', main: 'center', cross: 'center' }, [I('alarm', { size: 20, color: 'onSurface' })]),
      F({ name: 'Textos', dir: 'V', fillW: true }, [T(list[i][0], { ts: 'bodyEm', color: 'onSurface' }), T('Aviso ' + list[i][1].toLowerCase() + ', 9:00 a. m.', { ts: 'caption', color: 'onSurfaceVariant' })]),
      F({ name: 'Cobro', dir: 'V', cross: 'end' }, [T(list[i][3], { ts: 'caption', wt: 500, color: 'onSurface' }), T('cobro ' + list[i][2], { ts: 'caption', color: 'onSurfaceVariant' })])
    ]));
    if (i < list.length - 1) rows.push(divider(th, 68, (i + 1) * 64, W - 2 * PAD - 84));
  }
  var pushSub = pushOn ? 'Activada en este teléfono' : (v === 'denied' ? 'Bloqueada en los ajustes del teléfono' : 'Desactivada');
  var toggleGo = pushOn ? { to: 'P2', tr: 'smart' } : { to: 'P3', tr: 'fade' };
  var content = [
    T('Te avisamos antes de cada cobro para que decidas a tiempo si lo pagas o lo cancelas.', { x: PAD, y: 8, w: W - 2 * PAD, ts: 'body', color: 'onSurface' })
  ];
  if (v === 'denied') content.push(banner(th, {
    y: 64, tone: 'error', icon: 'notifications_off', title: 'Las notificaciones están bloqueadas',
    text: 'Actívalas en los ajustes del teléfono para recibir avisos push. El evento en tu calendario sigue activo.',
    actions: [{ label: 'Abrir ajustes', go: { to: 'P4', tr: 'fade' } }, { label: 'Ahora no', go: { to: 'P2', tr: 'fade' } }]
  }));
  content = content.concat([
    T('Canales', { x: PAD, y: 64 + dy, ts: 'label', color: 'onSurfaceVariant' }),
    card(th, { name: 'Canales', y: 92 + dy, h: 145, clip: true }, [
      listRow(th, { x: 0, y: 0, w: W - 2 * PAD, h: 72, icon: 'calendar_month', title: 'Evento en calendario', sub: 'Google Calendar · renzo.salazar@gmail.com', trailing: 'toggle', on: true }),
      divider(th, 64, 72, W - 2 * PAD - 64),
      listRow(th, { x: 0, y: 73, w: W - 2 * PAD, h: 72, icon: pushOn ? 'notifications_active' : (v === 'denied' ? 'notifications_off' : 'notifications'), title: 'Notificación push', sub: pushSub, trailing: 'toggle', on: pushOn, toggleGo: toggleGo, go: toggleGo })
    ]),
    T('Anticipación', { x: PAD, y: 257 + dy, ts: 'label', color: 'onSurfaceVariant' }),
    card(th, { name: 'Anticipación', y: 285 + dy, h: 145, clip: true }, [
      listRow(th, { x: 0, y: 0, w: W - 2 * PAD, h: 72, icon: 'alarm', title: '¿Cuándo avisarte?', sub: three ? '3 días antes del cobro' : '1 día antes (24 h)', trailing: 'chevron', go: pushOn ? { to: 'P5', tr: 'up' } : null }),
      divider(th, 64, 72, W - 2 * PAD - 64),
      listRow(th, { x: 0, y: 73, w: W - 2 * PAD, h: 72, icon: 'schedule', title: 'Hora del aviso', sub: '9:00 a. m.', trailing: 'chevron' })
    ]),
    T('Próximos avisos (' + list.length + ')', { x: PAD, y: 450 + dy, ts: 'label', color: 'onSurfaceVariant' }),
    card(th, { name: 'Próximos avisos', y: 478 + dy, h: 256, clip: true }, rows),
    R({ name: 'Espacio final', x: 0, y: 744 + dy, w: W, h: 24 })
  ]);
  var canSave = v === 'changed';
  var body = [
    statusBar(th),
    appBar(th, { title: 'Recordatorios', nav: 'back', navGo: v === 'off' ? { back: true } : { to: 'P1', tr: 'pushBack' } }),
    scroller({ name: 'Contenido', y: 96, h: 544 }, content),
    F({ name: 'Barra de guardado', x: 0, y: 640, w: W, h: 80, fill: 'surface', dir: 'H', pad: [12, 16, 12, 16] }, [
      R({ name: 'Separador', x: 0, y: 0, w: W, h: 1, fill: 'surfaceVariant', abs: true }),
      btn(th, v === 'saved' ? 'Cambios guardados' : 'Guardar cambios', { kind: (canSave || v === 'on') ? 'filled' : 'disabled', h: 56, fillW: true, icon: v === 'saved' ? 'check' : null, go: canSave ? { to: 'P8', tr: 'fade' } : null })
    ]),
    bottomNav(th, 'perfil', { badge: '1' })
  ];
  if (v === 'saved') body.splice(4, 0, snackbar(th, 'Listo. Te avisaremos 3 días antes de cada cobro.', { action: 'Deshacer', go: { to: 'P7', tr: 'fade' }, y: 640 - 12 - 64 }));
  return phone(th, id, body);
}

screen('P2', 'Recordatorios', 'US12, US28', function (th) { return remindersScreen(th, 'P2', 'off'); });

screen('P3', 'Permiso de notificaciones', 'US36', function (th) {
  var n = stripGo(remindersScreen(th, 'P3', 'off'));
  n.ch.push(scrim(th));
  n.ch.push(dialog(th, {
    y: 236, icon: 'notifications', title: '¿Permitir que CraveWallet te envíe notificaciones?', stack: true,
    text: 'Te avisaremos antes de cada cobro, aunque no abras tu calendario.',
    actions: [{ label: 'Permitir', kind: 'tonal', go: { to: 'P4', tr: 'smart' } }, { label: 'No permitir', kind: 'tonal', go: { to: 'P9', tr: 'fade' } }]
  }));
  return n;
});

screen('P4', 'Notificaciones activadas', 'US36', function (th) { return remindersScreen(th, 'P4', 'on'); });

function anticipationSheet(th, id, selIdx) {
  var n = stripGo(remindersScreen(th, id, 'on'));
  var opts = ['El mismo día del cobro', '1 día antes (24 h)', '3 días antes', '7 días antes'];
  var rows = [];
  for (var i = 0; i < opts.length; i++) {
    rows.push(listRow(th, { x: 0, y: 92 + i * 56, w: W, h: 56, pl: 24, pr: 20, title: opts[i], trailing: 'radio', on: i === selIdx, go: (i === 2 && selIdx !== 2) ? { to: 'P6', tr: 'smart' } : ((i === 1 && selIdx !== 1) ? { to: 'P5', tr: 'smart' } : null) }));
  }
  n.ch.push(scrim(th));
  n.ch.push(sheet(th, { top: 288, handleGo: { to: 'P4', tr: 'down', trig: 'drag' } }, [
    T('¿Cuándo avisarte?', { x: 24, y: 32, ts: 'section', s: 20, lh: 26, color: 'onSurface' }),
    T('Aplica a todas tus suscripciones activas.', { x: 24, y: 62, ts: 'caption', color: 'onSurfaceVariant' })
  ].concat(rows).concat([
    banner(th, { x: PAD, y: 324, tone: 'info', icon: 'info', text: 'Para cobros en dólares, 3 días te dan tiempo de revisar tu saldo.' }),
    F({ name: 'Acciones', x: 0, y: 424, w: W, h: 88, dir: 'H', gap: 8, pad: [16, 16, 16, 16] }, [
      btn(th, 'Cancelar', { kind: 'outlined', h: 56, fillW: true, go: { to: 'P4', tr: 'down' } }),
      btn(th, 'Aplicar', { h: 56, fillW: true, go: selIdx === 2 ? { to: 'P7', tr: 'down' } : { to: 'P4', tr: 'down' } })
    ])
  ])));
  return n;
}

screen('P5', 'Elegir la anticipación', 'US12', function (th) { return anticipationSheet(th, 'P5', 1); });
screen('P6', 'Anticipación elegida', 'US12', function (th) { return anticipationSheet(th, 'P6', 2); });
screen('P7', 'Cambios por guardar', 'US12, US28', function (th) { return remindersScreen(th, 'P7', 'changed'); });
screen('P8', 'Recordatorios guardados', 'US28, US36', function (th) { return remindersScreen(th, 'P8', 'saved'); });
screen('P9', 'Notificaciones bloqueadas', 'US36', function (th) { return remindersScreen(th, 'P9', 'denied'); });
