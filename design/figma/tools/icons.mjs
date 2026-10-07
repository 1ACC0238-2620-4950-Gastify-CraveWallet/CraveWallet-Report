// Regenera src/05-icons.js con los íconos Material Symbols Rounded que usan
// las fuentes (busca I('nombre') e icon: 'nombre').
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(ROOT, 'src');
const CDN = 'https://cdn.jsdelivr.net/npm/@material-symbols/svg-400/rounded/';

// Se ejecutan todas las láminas con un registro de íconos permisivo para
// recolectar exactamente los nombres que se dibujan.
const names = new Set();
const code = fs.readdirSync(SRC).filter((x) => x.endsWith('.js') && x < '90' && x !== '05-icons.js').sort()
  .map((f) => fs.readFileSync(path.join(SRC, f), 'utf8')).join('\n;\n');
const ctx = vm.createContext({ console, Math, JSON, String, Object, Array, Error, parseInt,
  ICONS: new Proxy({}, { get: (t, k) => { if (typeof k === 'string') names.add(k); return 'M0 0'; } }) });
vm.runInContext(code.replace(/^var ICONS[^;]*;/m, '') + '\n;BOARDS(); for (var id in SCREENS) { SCREENS[id].build(THEMES.hf); SCREENS[id].build(THEMES.wf); }', ctx);

const out = {};
const vbs = {};
for (const n of [...names].sort()) {
  const res = await fetch(CDN + n + '.svg');
  if (!res.ok) { console.warn('no existe', n); continue; }
  const svg = await res.text();
  out[n] = [...svg.matchAll(/ d="([^"]+)"/g)].map((m) => m[1]).join(' ');
  const vb = svg.match(/viewBox="([^"]+)"/)[1];
  if (vb !== '0 -960 960 960') vbs[n] = vb;
}
const body = Object.entries(out).map(([k, v]) => JSON.stringify(k) + ':' + JSON.stringify(v)).join(',\n');
fs.writeFileSync(path.join(SRC, '05-icons.js'),
  '// Material Symbols Rounded (peso 400, óptica 24). Fuente: @material-symbols/svg-400 (Apache 2.0).\n' +
  '// Generado por tools/icons.mjs. viewBox 0 -960 960 960 salvo los de ICON_VB.\nvar ICONS = {\n' + body + '\n};\nvar ICON_VB = ' + JSON.stringify(vbs) + ';\n');
console.log(Object.keys(out).length, 'íconos');
