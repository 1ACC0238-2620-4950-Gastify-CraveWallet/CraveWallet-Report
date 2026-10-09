// Reemplaza en el archivo "CraveWallet Landing" las cifras sin fuente de la
// sección "El Problema" y el badge falso de la sección "Descarga".
// Compara el texto sin importar saltos de línea ni espacios repetidos.
var REPLACEMENTS = [
  ['S/ 350', '2 meses'],
  ['gasto mensual estimado', 'para descubrir un cobro'],
  ['en suscripciones y delivery, por joven limeño', 'olvidado, al revisar el banco'],
  ['Cap. I · estimación interna', 'Entrevistas Cap. II, n = 6'],
  ['77%', '41%'],
  ['no lleva ningún control', 'bajo el nivel mínimo'],
  ['de sus gastos recurrentes digitales', 'de educación financiera en el Perú'],
  ['SBS Perú, 2023', 'SBS, encuesta 2022'],
  ['Datos locales, sin servidores externos', 'Sin conectar tu banco']
];

function norm(s) { return s.replace(/\s+/g, ' ').trim(); }

async function main() {
  var changed = [], tops = {}, found = {};
  for (var p = 0; p < figma.root.children.length; p++) {
    var page = figma.root.children[p];
    await page.loadAsync();
    var texts = page.findAllWithCriteria({ types: ['TEXT'] });
    for (var i = 0; i < texts.length; i++) {
      var t = texts[i];
      var cur = norm(t.characters);
      for (var r = 0; r < REPLACEMENTS.length; r++) {
        if (cur !== norm(REPLACEMENTS[r][0])) continue;
        var fonts = t.getRangeAllFontNames(0, t.characters.length);
        for (var f = 0; f < fonts.length; f++) await figma.loadFontAsync(fonts[f]);
        t.characters = REPLACEMENTS[r][1];
        changed.push(t.id);
        found[r] = (found[r] || 0) + 1;
        var top = t; while (top.parent && top.parent.type !== 'PAGE') top = top.parent;
        tops[top.id] = top;
      }
    }
  }
  var missing = REPLACEMENTS.filter(function (_, r) { return !found[r]; }).map(function (x) { return x[0]; });
  var frames = Object.keys(tops).map(function (k) { return tops[k]; });
  if (frames.length) {
    await figma.setCurrentPageAsync(frames[0].parent);
    figma.currentPage.selection = frames.filter(function (n) { return n.parent === figma.currentPage; });
    figma.viewport.scrollAndZoomIntoView(figma.currentPage.selection);
  }
  figma.closePlugin(changed.length + ' textos corregidos en ' + frames.length + ' frames' +
    (missing.length ? '. No encontrados: ' + missing.join(' | ') : '.'));
}

main().catch(function (e) { figma.closePlugin('Error: ' + (e && e.message ? e.message : e)); });
