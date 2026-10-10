// Uso:
//   node tools/build.mjs plugin            -> genera plugin/code.js
//   node tools/build.mjs render [filtro]   -> exporta las láminas PNG del informe
//   node tools/build.mjs screen I1 [hf|wf] -> exporta una pantalla suelta (revisión)
//   node tools/build.mjs check             -> contraste WCAG y enlaces del prototipo
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import os from 'node:os';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(ROOT, 'src');
const OUT_IMG = path.resolve(ROOT, '../../docs/images/chapter_3');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

function sources() {
  return fs.readdirSync(SRC).filter((f) => f.endsWith('.js')).sort()
    .filter((f) => !f.startsWith('90-'))
    .map((f) => fs.readFileSync(path.join(SRC, f), 'utf8'));
}

function context() {
  const ctx = vm.createContext({ console, Math, JSON, String, Object, Array, Error, parseInt });
  const code = sources().join('\n;\n') + '\n;\n' + fs.readFileSync(path.join(ROOT, 'tools/html-backend.js'), 'utf8');
  vm.runInContext(code + '\n;this.__api = { SCREENS, SCREEN_ORDER, THEMES, htmlDocument, BOARDS: typeof BOARDS !== "undefined" ? BOARDS : null, protoTable: typeof protoTable !== "undefined" ? protoTable : null, TOKENS, contrast, resolveColor };', ctx);
  return ctx.__api;
}

// Chrome headless escribe la captura pero con un perfil aislado no siempre
// termina: se espera a que el archivo exista y deje de crecer, y se cierra.
function shoot(html, file, w, h, scale) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'cw-'));
  const htmlPath = path.join(tmp, 'page.html');
  fs.writeFileSync(htmlPath, html);
  if (fs.existsSync(file)) fs.rmSync(file);
  const child = spawn(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    '--disable-extensions', '--disable-component-update', '--disable-sync',
    '--user-data-dir=' + path.join(tmp, 'profile'),
    '--force-device-scale-factor=' + (scale || 1), '--window-size=' + w + ',' + h,
    '--virtual-time-budget=6000', '--screenshot=' + file, 'file://' + htmlPath
  ], { detached: true, stdio: 'ignore' });
  return new Promise((resolve, reject) => {
    let last = -1, stable = 0, waited = 0;
    const timer = setInterval(() => {
      waited += 250;
      const size = fs.existsSync(file) ? fs.statSync(file).size : -1;
      if (size > 0 && size === last) stable += 1; else stable = 0;
      last = size;
      if (stable >= 3 || waited > 90000) {
        clearInterval(timer);
        try { process.kill(-child.pid, 'SIGKILL'); } catch (e) { /* ya terminó */ }
        setTimeout(() => fs.rmSync(tmp, { recursive: true, force: true }), 500);
        if (size > 0) resolve(file); else reject(new Error('sin captura: ' + file));
      }
    }, 250);
  });
}

async function pool(items, n, fn) {
  const queue = items.slice();
  const workers = Array.from({ length: n }, async () => {
    while (queue.length) await fn(queue.shift());
  });
  await Promise.all(workers);
}

const [mode, a1, a2] = process.argv.slice(2);

if (mode === 'screen') {
  const api = context();
  const th = api.THEMES[a2 || 'hf'];
  const node = api.SCREENS[a1].build(th);
  const out = path.join(process.env.OUT || os.tmpdir(), `${a1}-${th.id}.png`);
  await shoot(api.htmlDocument(th, node), out, node.w, node.h, 1);
  console.log(out);
}

if (mode === 'render') {
  const api = context();
  const boards = api.BOARDS().filter((b) => b.file && (!a1 || b.file.includes(a1)));
  fs.mkdirSync(OUT_IMG, { recursive: true });
  await pool(boards, 4, async (b) => {
    const out = path.join(OUT_IMG, b.file + '.png');
    await shoot(api.htmlDocument(api.THEMES[b.th], b.node), out, b.node.w, b.node.h, b.scale || 1);
    console.log('ok', path.relative(process.cwd(), out));
  });
}

if (mode === 'plugin') {
  const parts = fs.readdirSync(SRC).filter((f) => f.endsWith('.js')).sort()
    .map((f) => `// ---- src/${f} ----\n` + fs.readFileSync(path.join(SRC, f), 'utf8'));
  const header = '// Archivo generado por tools/build.mjs a partir de src/. No editar a mano.\n';
  fs.writeFileSync(path.join(ROOT, 'plugin/code.js'), header + parts.join('\n'));
  console.log('plugin/code.js', fs.statSync(path.join(ROOT, 'plugin/code.js')).size, 'bytes');
}

if (mode === 'check') {
  const api = context();
  const rows = api.protoTable();
  const ids = new Set(api.SCREEN_ORDER);
  const bad = rows.filter((r) => r.to && !ids.has(r.to));
  const reach = new Set(['I1', 'N1', 'P1', 'I2', 'A9', 'N4', 'N5', 'N6']);
  let grew = true;
  while (grew) {
    grew = false;
    for (const r of rows) if (reach.has(r.from) && r.to && !reach.has(r.to)) { reach.add(r.to); grew = true; }
  }
  const outs = {};
  for (const r of rows) outs[r.from] = (outs[r.from] || 0) + 1;
  console.log('enlaces:', rows.length, 'destinos inválidos:', bad.length, bad);
  console.log('no alcanzables:', api.SCREEN_ORDER.filter((s) => !reach.has(s)));
  console.log('sin salida:', api.SCREEN_ORDER.filter((s) => !outs[s]));
}
