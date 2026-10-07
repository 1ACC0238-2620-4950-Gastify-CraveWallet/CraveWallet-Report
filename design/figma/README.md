# CraveWallet · Archivo de Figma de la sección 3.1.4

Este directorio genera el archivo de Figma de **3.1.4 Mobile Applications UX/UI Design** y las láminas PNG del informe a partir de una sola especificación de pantallas, para que el informe y Figma no se desalineen.

```
src/00-core.js        Tokens del Design System (3.1.1), temas wireframe/mock-up y DSL de nodos
src/05-icons.js       Material Symbols Rounded (generado por tools/icons.mjs)
src/10-components.js  Componentes Material 3 (NavigationBar, FAB, campos, chips, diálogos…)
src/20-screens.js     Las 31 pantallas (I, G, A, N, P) y sus enlaces de prototipo
src/30-boards.js      Láminas, wireflows, user flows, mapa del prototipo, Design System y portada
src/90-figma.js       Backend de Figma: variables, estilos, componentes, páginas e interacciones
plugin/               Plugin de Figma listo para importar (code.js es generado)
tools/                Build, exportación de PNG, simulador de la Plugin API e íconos
```

## Generar el archivo en Figma

1. Abrir **Figma Desktop** y crear un archivo de diseño nuevo y vacío.
2. Menú **Plugins → Development → Import plugin from manifest…** y elegir `design/figma/plugin/manifest.json`.
3. Ejecutar **Plugins → Development → CraveWallet · 3.1.4 Mobile UX/UI**. Tarda alrededor de un minuto.
4. En la página **06 Prototype**, en la pestaña *Prototype* sin nada seleccionado, elegir el dispositivo **Android Large (360 × 800)**.
   Haz lo mismo en **08 Prototype · Modo oscuro**.
5. Archivo publicado: https://www.figma.com/design/lIN0zLBZ4E0PmQudY5JOip/Mobile-UX-UI?node-id=1-32&t=o4MJV6YoUPiTIhVj-1

El plugin crea nueve páginas (Portada, Design System, Wireframes, Wireflows, Mock-ups, User Flows, Prototype, Modo oscuro y Prototype · Modo oscuro), la colección de variables `CraveWallet · Tokens` con los modos Light y Dark, los estilos de texto `Mobile/*`, 64 íconos como componentes, las pantallas de wireframe y mock-up como componentes (los diagramas usan instancias) y dos prototipos de 31 frames (claro y oscuro) con 186 interacciones y 8 puntos de inicio cada uno.

Si el plan del archivo solo admite un modo de variables, el plugin crea una segunda colección `CraveWallet · Tokens (modo oscuro)` y el resultado se ve igual.

## Regenerar después de un cambio

```bash
node tools/icons.mjs          # solo si se usan íconos nuevos
node tools/build.mjs check    # enlaces del prototipo: destinos, alcanzabilidad y salidas
node tools/build.mjs plugin   # regenera plugin/code.js
node tools/fake-figma.mjs     # ejecuta el plugin contra un simulador de la Plugin API
node tools/build.mjs render   # exporta las láminas a docs/images/chapter_3/mobile_*.png
```

`render` usa Google Chrome en modo headless y las fuentes Poppins e Inter de Google Fonts.
