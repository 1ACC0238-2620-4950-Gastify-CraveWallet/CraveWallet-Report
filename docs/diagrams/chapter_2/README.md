# Fuentes editables de diseño y arquitectura

El diseño DDD y la arquitectura C4 utilizan sus herramientas correspondientes.
Miro conserva los ocho diagramas DDD de las figuras 19–26. Structurizr es la
fuente de las seis vistas C4 de las figuras 27–30, 33 y 36.

## Diagramas DDD en Miro

Los flujos, canvases y Context Map son objetos nativos del
[tablero del equipo](https://miro.com/app/board/uXjVEcjtdBM=/).
La lectura guardada en [miro-board.svg](miro-board.svg) y el
[manifiesto](miro-board.json) conservan 304 objetos y diez marcos. Los dos marcos
C4 de esa lectura son antecedentes del diseño: las vistas vigentes de arquitectura
se mantienen en Structurizr y sus PNG ya no se regeneran desde Miro.

| Figura | Contenido | Fuente colaborativa | Página de la copia local |
| --- | --- | --- | --- |
| 19 | A. Registrar una suscripción y preparar el aviso | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232310) | `message-flow-subscription` |
| 20 | B. Registrar un gasto y comparar el presupuesto | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232311) | `message-flow-delivery` |
| 21 | C. Activar o renovar Premium tras un pago confirmado | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232312) | `message-flow-premium-activation` |
| 22 | D. Cancelar la renovación y volver a Free | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232313) | `message-flow-premium-cancellation` |
| 23 | Bounded Context Canvas: Subscription Management | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232307) | `canvas-subscription` |
| 24 | Bounded Context Canvas: Delivery Expense Management | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232308) | `canvas-delivery` |
| 25 | Bounded Context Canvas: Premium & Billing | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232309) | `canvas-premium` |
| 26 | CraveWallet: Context Map | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232314) | `context-map-revised` |

## Referencias utilizadas

Se reconstruyó en Miro la estructura del
[Bounded Context Canvas v5](https://github.com/ddd-crew/bounded-context-canvas),
con propósito, clasificación, roles, colaboraciones entrantes y salientes,
lenguaje, decisiones, supuestos, métricas y preguntas abiertas. Es una adaptación
con objetos nativos; no una importación del respaldo oficial. El README de DDD
Crew indica que su plantilla de Miroverse corresponde a v4 y ofrece un respaldo
aparte; esta adaptación usa la estructura v5 publicada en el repositorio.

Los flujos siguen el formato **Combined Message & Contents** de
[Domain Message Flow Modelling](https://github.com/ddd-crew/domain-message-flow-modelling):
cada tarjeta contiene orden, nombre y datos, junto a una flecha entre emisor y
receptor. Las cajas repetidas representan al mismo participante. Las respuestas
son explícitas y los eventos internos no presuponen un bus de mensajes.

El mapa sigue
[Context Mapping](https://github.com/ddd-crew/context-mapping): influencia U/D,
Customer/Supplier propuesto, ACL en el consumidor y Separate Ways entre
Suscripciones y Gastos. El Dashboard compone lecturas sin compartir agregados.
Las tres adaptaciones mantienen la atribución a DDD Crew y
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), indicada en sus README
y en el canvas v5.

## Arquitectura C4 en Structurizr

Se siguió el formato del [repositorio de referencia Pozzo](https://github.com/kerolabs/pozzo-doc/blob/aad7cab9b07e48f65ed4ea9efaa5b02fde5e2211/docs/architecture/workspace.dsl):
un único modelo DSL, vistas de contexto, contenedores y componentes, y nodos
anidados para ubicar instancias en el despliegue. Las responsabilidades, tecnologías
e infraestructura se sustentan en los repositorios de CraveWallet.

- [workspace.dsl](workspace.dsl): elementos, relaciones, tecnologías y seis vistas.
- [workspace.json](workspace.json): modelo nativo exportado por Structurizr con
  posiciones y rutas de conectores; mantiene la fuente DSL codificada.
- [structurizr-export.json](structurizr-export.json): renderizador, fecha,
  huellas SHA-256 del DSL/JSON y correspondencia de vistas con imágenes.

| Figura | Vista de Structurizr | Imagen del informe |
| --- | --- | --- |
| 27 | SystemContext | `system-context-revised.png` |
| 28 | Containers | `containers-revised.png` |
| 29 | Deployment | `deployment_diagram.png` |
| 30 | SubscriptionComponents | `subscription-components-revised.png` |
| 33 | DeliveryComponents | `delivery-components-revised.png` |
| 36 | PremiumComponents | `premium-components-revised.png` |

Los PNG/SVG C4 se exportan con el **renderizador oficial de Structurizr**.
Los archivos `*-key.png` y `*-key.svg` contienen sus leyendas nativas. Se utilizan
fronteras de sistema/contenedor, personas, bases de datos y nodos de despliegue.
Los contornos y relaciones ámbar discontinuos marcan integraciones propuestas.
Los componentes describen el diseño por responsabilidades, no una extracción
automática del código. El despliegue documenta Render y Vercel; el nodo Android
se identifica como destino pendiente de validación física.

### Exportar

Requiere Java 21 o superior, Python 3 y la
[distribución oficial de Structurizr con Playwright](https://docs.structurizr.com/binaries).
La exportación se verificó con `structurizr-2026.09.19-playwright.war`.
Desde la raíz del repositorio:

```powershell
.\scripts\export-c4.ps1 -WarPath C:\herramientas\structurizr-2026.09.19-playwright.war
```

El script valida el DSL, exporta el JSON, aplica la distribución con
`scripts/layout-c4.py` y exporta los PNG/SVG mediante Structurizr. El script
Python modifica solo posiciones, tamaños y rutas de las vistas; no dibuja
imágenes ni define reglas de negocio. Al cambiar los elementos del DSL, actualiza
sus posiciones en el script de distribución. Para un ajuste manual en Structurizr,
exporta directamente el JSON guardado y conserva ese archivo con sus cambios.

### Abrir en Structurizr

Para revisar y mover elementos con la distribución aprobada, copia `workspace.json`
a una carpeta de datos vacía y ejecuta:

```powershell
java -jar structurizr.war local C:\ruta\a\carpeta-de-datos
```

Abre `http://localhost:8080` y entra al editor de diagramas. Conserva el JSON
modificado al terminar. El contenido del modelo se edita en el DSL; regenerarlo
con el script restaura las posiciones definidas allí. La distribución estándar
sin Playwright permite ver y editar; para exportar PNG/SVG se requiere la variante
con Playwright. No es necesaria una cuenta de Structurizr para este uso local.

## Copias DDD y regeneración

`strategic-design.drawio` contiene ocho páginas DDD portátiles para diagrams.net.
Los PNG/SVG DDD son vistas derivadas de la lectura guardada de Miro; **no son
exportaciones oficiales de su interfaz**. La lectura conserva los extremos y
direcciones de los conectores, pero sus puntos de giro se recalculan en la copia.

```powershell
python scripts/export-miro-snapshots.py
```

Requiere Python 3, Pillow y Arial en Windows o DejaVu Sans en Linux. El script
omite los marcos C4 para conservar las exportaciones de Structurizr. Después de
editar Miro, actualiza la lectura nativa antes de regenerar las vistas DDD.
