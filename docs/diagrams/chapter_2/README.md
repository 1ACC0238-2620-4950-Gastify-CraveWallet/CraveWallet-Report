# Fuentes del diseño estratégico de CraveWallet

Las figuras de las cinco secciones asignadas (2.5.1.2, 2.5.1.3, 2.5.2,
2.5.3.1 y 2.5.3.2) se mantienen como formas, textos y conectores nativos en
[el tablero de Miro](https://miro.com/app/board/uXjVEcjtdBM=/). Se crearon diez marcos editables, con 304 objetos
en total; las imágenes del informe no están incrustadas como sustituto de los
diagramas editables. El tablero representa el diseño propuesto del informe.

| Figura | Contenido | Fuente colaborativa | Página de la copia local |
| --- | --- | --- | --- |
| 18 | A. Registrar una suscripción y preparar el aviso | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232310) | `message-flow-subscription` |
| 19 | B. Registrar un gasto y comparar el presupuesto | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232311) | `message-flow-delivery` |
| 20 | C. Activar o renovar Premium tras un pago confirmado | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232312) | `message-flow-premium-activation` |
| 21 | D. Cancelar la renovación y volver a Free | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232313) | `message-flow-premium-cancellation` |
| 22 | Bounded Context Canvas | Subscription Management | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232307) | `canvas-subscription` |
| 23 | Bounded Context Canvas | Delivery Expense Management | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232308) | `canvas-delivery` |
| 24 | Bounded Context Canvas | Premium & Billing | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232309) | `canvas-premium` |
| 25 | CraveWallet | Context Map | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232314) | `context-map-revised` |
| 26 | C4 | Contexto del sistema CraveWallet | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232315) | `system-context-revised` |
| 27 | C4 | Contenedores de CraveWallet | [Editar en Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232316) | `containers-revised` |

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

Las vistas de arquitectura siguen el [modelo C4](https://c4model.com/diagrams)
y conservan un modelo adicional en [Structurizr DSL](workspace.dsl).
Los tres contextos son módulos internos de la REST API, no contenedores separados.
El cliente móvil opera el calendario; los webhooks de Stripe llegan al backend.
Los números de las flechas C4 remiten a la leyenda de relaciones de cada vista.

## Copia local y figuras del informe

- [miro-board.svg](miro-board.svg) conserva la lectura de los objetos nativos de
  Miro en formato Canvas Composer, incluidos los identificadores del tablero.
  Es un formato especializado de intercambio; no un SVG gráfico convencional.
- [miro-board.json](miro-board.json) registra la fecha de lectura y los enlaces
  a los diez marcos. No contiene credenciales ni tokens.
- [strategic-design.drawio](strategic-design.drawio) es una copia portátil para
  [diagrams.net](https://app.diagrams.net/), derivada de esa misma lectura.
- Los PNG/SVG convencionales de [imágenes del capítulo](../../images/chapter_2/)
  son vistas estáticas derivadas de los objetos guardados. **No son exportaciones
  oficiales PNG de la interfaz de Miro.** La lectura de Miro no expone los puntos
  de giro de sus conectores; la copia local recalcula el recorrido de las flechas
  sin alterar emisor, receptor ni dirección. Para una captura idéntica del tablero,
  utiliza la exportación de marcos desde la interfaz de Miro.

Para regenerar las vistas estáticas a partir de la copia guardada:

```powershell
python scripts/export-miro-snapshots.py
```

Requiere Python 3 y Pillow, con Arial en Windows o DejaVu Sans en Linux. El script
lee el contenido de `miro-board.svg`; no define los mensajes ni las reglas de
negocio. Después de editar Miro, actualiza la lectura nativa antes de regenerar.
El generador anterior con contenido definido en Python fue retirado para evitar
que sobrescriba estos diagramas con la versión previa.

Para validar el modelo C4 con la distribución local de Structurizr:

```powershell
java -jar structurizr.war validate -workspace docs/diagrams/chapter_2/workspace.dsl
```

La activación de Premium requiere confirmación verificada; cancelar la renovación
conserva el período pagado. Estas reglas siguen la
[documentación oficial de Stripe](https://docs.stripe.com/billing/subscriptions/webhooks)
y el criterio de US22. Las métricas y las políticas abiertas son propuestas; no
se añaden resultados de integración ni mediciones que el repositorio no acredita.
