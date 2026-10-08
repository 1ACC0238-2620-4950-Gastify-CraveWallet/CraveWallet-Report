# Fuentes del diseño estratégico de CraveWallet

Estas fuentes corresponden a las cinco secciones asignadas: 2.5.1.2, 2.5.1.3,
2.5.2, 2.5.3.1 y 2.5.3.2. Representan el diseño propuesto del informe.

| Sección | Fuente editable | Figuras del informe |
| --- | --- | --- |
| Domain Message Flows | [strategic-design.drawio](strategic-design.drawio), páginas `message-flow-*` | 18–21: registro de suscripción, gasto, activación y cancelación de Premium |
| Bounded Context Canvases | [strategic-design.drawio](strategic-design.drawio), páginas `canvas-*` | 22–24: un canvas por contexto |
| Context Mapping | [strategic-design.drawio](strategic-design.drawio), página `context-map-revised` | 25 |
| C4 Context y Containers | [workspace.dsl](workspace.dsl), vistas `SystemContext` y `Containers`; también disponibles en el archivo `.drawio` | 26–27 |

## Editar los diagramas

Abre `strategic-design.drawio` en [diagrams.net](https://app.diagrams.net/).
Las cajas, textos y flechas son objetos editables. Las diez páginas corresponden
a las diez imágenes; no son capturas incrustadas. Los SVG de
[`docs/images/chapter_2`](../../images/chapter_2/) también conservan textos y
figuras vectoriales, y pueden incorporarse al tablero de Miro del equipo como
referencia visual. El repositorio no contiene el enlace del tablero ni una copia
editable nativa de Miro.

Para C4, importa `workspace.dsl` en Structurizr o usa su distribución local. El
modelo distingue las relaciones de contexto de las relaciones de contenedor;
no depende de relaciones implícitas. Se puede validar con:

```powershell
java -jar structurizr.war validate -workspace docs/diagrams/chapter_2/workspace.dsl
```

Las imágenes incluidas en el informe tienen una composición manual del mismo
modelo, con las tecnologías y responsabilidades establecidas en las secciones
2.5 y 2.6. Los tres contextos son módulos del backend, no contenedores C4
independientes. La autenticación es una capacidad técnica del backend.

## Regenerar las imágenes

El generador requiere Python 3 y Pillow, con Arial en Windows o DejaVu Sans en
Linux. Desde la raíz del repositorio:

```powershell
python scripts/generate-strategic-diagrams.py
```

El script escribe los diez pares PNG/SVG y el archivo `.drawio`. Edita el
generador para cambios reproducibles; si modificas el `.drawio` directamente,
exporta su página a PNG/SVG y actualiza el contenido correspondiente del informe.
Regenerar desde el script sustituye las modificaciones manuales de esas fuentes.

## Criterios aplicados

- Cada flujo conserva emisor, receptor, orden, tipo, nombre y datos. Una consulta
  muestra también su respuesta. Los eventos internos no presuponen un bus.
- Cada canvas agrupa las colaboraciones según quién las inicia e identifica
  propósito, clasificación, roles, lenguaje, decisiones, supuestos, métricas y
  preguntas abiertas. Las métricas son propuestas, sin resultados inventados.
- El Context Map distingue influencia U/D de dirección de petición. Las ACL
  están en el consumidor; Customer/Supplier es un acuerdo propuesto. Compartir
  el Dashboard no implica Shared Kernel.
- C4 muestra personas y sistemas en contexto; aplicaciones, almacenes,
  responsabilidades y tecnologías en contenedores. Los webhooks de Stripe
  llegan al backend; el calendario se opera desde el cliente móvil.
- Activar Premium requiere confirmación verificada. Cancelar su renovación
  conserva el período pagado. El criterio de US22 se alinea con esa confirmación.

## Referencias y atribución

Los flujos, canvases y Context Map son elaboraciones de Gastify adaptadas de
[DDD Crew: Domain Message Flow Modelling](https://github.com/ddd-crew/domain-message-flow-modelling),
[Bounded Context Canvas v5](https://github.com/ddd-crew/bounded-context-canvas) y
[Context Mapping](https://github.com/ddd-crew/context-mapping). Los README de
las tres referencias y el canvas v5 identifican CC BY 4.0; estas adaptaciones
conservan la atribución y se distribuyen bajo
[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

Las vistas de arquitectura siguen el
[modelo C4](https://c4model.com/diagrams) y su
[modelo editable en Structurizr DSL](https://docs.structurizr.com/dsl).
La facturación toma como referencia la
[documentación oficial de Stripe sobre webhooks de suscripciones](https://docs.stripe.com/billing/subscriptions/webhooks).
