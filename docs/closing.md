# Conclusiones

El informe registra seis entrevistas, tres por cada segmento objetivo. Los relatos recogidos describen dificultades para recordar renovaciones, interpretar cargos en dólares y controlar el gasto de delivery. Estos hallazgos orientan la propuesta de CraveWallet, pero corresponden a la muestra entrevistada y no permiten estimar la frecuencia del problema en toda la población de jóvenes peruanos.

El proceso Lean UX permitió formular supuestos e hipótesis sobre los beneficios de centralizar suscripciones, mostrar importes en soles y anticipar las renovaciones. Las metas de reducción de cargos inesperados, retención y conversión a Premium son objetivos de evaluación de la propuesta. Las entrevistas no demuestran que esas metas se hayan alcanzado; para evaluarlas se requieren pruebas del producto y mediciones durante su uso.

Los artefactos de Needfinding y la especificación reúnen las necesidades identificadas, los arquetipos, los recorridos y las historias propuestas. Su función es orientar la priorización del Product Backlog y permitir que el equipo contraste los requisitos con las evidencias de las entrevistas. El Anexo A enlaza el tablero del equipo y conserva su captura; debe comprobarse y actualizarse antes de la entrega.

El diseño propone tres contextos: Subscription Management, Delivery Expense Management y Premium & Billing. La separación distingue las suscripciones que el usuario paga a terceros, los gastos puntuales de delivery y la facturación del plan de CraveWallet. Los diagramas documentan una propuesta de solución; sus fronteras, contratos y reglas requieren revisión durante la implementación.

El Product Backlog incluye seis spikes (SP01–SP06) para investigar y prototipar la integración con ExchangeRate-API, el calendario nativo y Stripe. Este informe no presenta resultados experimentales de los seis spikes que permitan concluir que las integraciones ya fueron validadas. Cada spike deberá cerrar con su prototipo o documento de investigación, el resultado obtenido y las limitaciones encontradas.

El repositorio del informe conserva las contribuciones del equipo mediante ramas y commits. Para las siguientes entregas, el equipo deberá comprobar la coherencia entre los documentos, actualizar los artefactos según los hallazgos y conservar las evidencias que permitan sustentar cada resultado declarado.

# Glosario

**Anti-Corruption Layer (ACL).** Patrón de Context Mapping que interpone un adaptador entre dos Bounded Contexts —o entre un contexto y un sistema externo— para traducir modelos sin contaminar el dominio propio. En CraveWallet se propone en las integraciones con ExchangeRate-API, Stripe y Google Places.

**Bounded Context.** Límite explícito dentro del cual un modelo de dominio es coherente y un mismo término tiene un único significado. CraveWallet propone tres: Subscription Management, Delivery Expense Management y Premium & Billing.

**Context Mapping.** Técnica de Domain-Driven Design que documenta las relaciones de integración entre Bounded Contexts y los sistemas externos, especificando el lado que dicta el modelo (upstream) y el que se adapta (downstream).

**Domain-Driven Design (DDD).** Enfoque de diseño de software que centra el modelo en el dominio del negocio y su lógica, promoviendo una colaboración estrecha entre expertos del dominio y desarrolladores a través de un lenguaje ubicuo compartido.

**EventStorming.** Taller colaborativo de modelado que descubre el flujo de Domain Events de un sistema mediante notas adhesivas, distinguiendo eventos, comandos, actores, políticas y sistemas externos. El equipo lo aplicó en dos modalidades: Big Picture (As-Is y To-Be) y detalle por Bounded Context.

**Flutter.** Framework de desarrollo móvil multiplataforma de Google, basado en el lenguaje Dart, que genera aplicaciones nativas para Android e iOS desde una única base de código. Es el stack de la capa móvil de CraveWallet.

**GitFlow.** Estrategia de ramificación para Git que organiza el trabajo en ramas de largo plazo (`main`, `develop`) y ramas de corto plazo (`feature/`, `fix/`, `release/`), facilitando el desarrollo paralelo y los releases controlados.

**Lean UX.** Marco de trabajo que combina pensamiento de diseño, metodologías ágiles y modelo de negocio Lean para validar hipótesis sobre el usuario antes de invertir en construcción. El equipo aplicó sus artefactos principales: Problem Statements, Assumptions, Hypothesis Statements y Lean UX Canvas.

**Product Backlog.** Lista priorizada y estimada de todos los requisitos del producto (User Stories, Technical Stories y Spike Stories). El Product Backlog de CraveWallet contiene 40 US, 6 TS y 6 SP, gestionados en Trello.

**Shared Kernel.** Subconjunto del modelo y código que dos Bounded Contexts comparten y mantienen conjuntamente. CraveWallet no propone este patrón: usar `UserId` para correlacionar registros no establece un modelo compartido. Subscription Management y Delivery Expense Management mantienen modelos independientes (Separate Ways).

**Spike Story.** Historia técnica de investigación, sin entregable de código productivo, cuyo objetivo es reducir incertidumbre sobre la viabilidad o el comportamiento de una tecnología o integración antes de implementarla en una historia de usuario.

**Spring Boot.** Framework de Java que simplifica la configuración y el arranque de aplicaciones backend basadas en Spring. El REST API Backend de CraveWallet usa Spring Boot con Java 21.

**Ubiquitous Language.** Vocabulario compartido y acordado entre el equipo de desarrollo y los expertos del dominio, usado de forma consistente en el código, los diagramas y la documentación. El glosario de dominio de CraveWallet está definido en la sección 2.3.6.

# Bibliografía

<!-- pdf:only
::: {#refs}
:::
-->

<!-- pdf:omit-start -->

Brown, S. (s. f.). The C4 model for visualising software architecture. Recuperado 7 de octubre de 2026, de https://c4model.com/

BudgetBakers. (2026). Everything about Premium. Wallet Help Center. https://support.budgetbakers.com/hc/en-us/articles/7151349344018-Everything-about-Premium

DDD Crew. (s. f.-a). Context Mapping. Recuperado 7 de octubre de 2026, de https://github.com/ddd-crew/context-mapping

DDD Crew. (s. f.-b). Domain Message Flow Modelling. Recuperado 7 de octubre de 2026, de https://github.com/ddd-crew/domain-message-flow-modelling

DDD Crew. (s. f.-c). The Bounded Context Canvas. Recuperado 6 de octubre de 2026, de https://github.com/ddd-crew/bounded-context-canvas

Evans, E. (2003). Domain-Driven Design: Tackling Complexity in the Heart of Software. Addison-Wesley.

ExchangeRate-API. (s. f.). Pair conversion requests. Recuperado 7 de octubre de 2026, de https://www.exchangerate-api.com/docs/pair-conversion-requests

Fintonic. (s. f.). Organiza tu dinero y ahorra con la app de Fintonic. Fintonic. Recuperado 7 de octubre de 2026, de https://www.fintonic.com/es-ES/inicio/

Google. (s. f.). Text Search (New). Recuperado 7 de octubre de 2026, de https://developers.google.com/maps/documentation/places/web-service/text-search

Gothelf, J. (2021). How to use the Lean UX Canvas. https://jeffgothelf.com/blog/how-to-use-the-lean-ux-canvas/

Gothelf, J., & Seiden, J. (2021). Lean UX: Creating Great Products with Agile Teams (3.ª ed.). O’Reilly Media.

Portigal, S. (2013). Interviewing Users: How to Uncover Compelling Insights. Rosenfeld Media.

Spendee. (2025). What is Spendee Premium? Spendee Help Center. https://help.spendee.com/article/202-what-is-spendee-premium

Stripe. (s. f.-a). Receive Stripe events in your webhook endpoint. Recuperado 7 de octubre de 2026, de https://docs.stripe.com/webhooks

Stripe. (s. f.-b). Using webhooks with subscriptions. Recuperado 7 de octubre de 2026, de https://docs.stripe.com/billing/subscriptions/webhooks

Superintendencia de Banca, Seguros y AFP, & CAF. (s. f.). Encuesta de Medición de Capacidades Financieras: Perú 2022. SBS y CAF. Recuperado 6 de octubre de 2026, de https://www.sbs.gob.pe/Portals/4/jer/CIFRAS-ENCUESTA/2022/Brochure_ENCUESTA_CAPACIDADES%20FINANACIERAS%202022_vr.pdf

<!-- pdf:omit-end -->

# Anexos

## Anexo A. Product Backlog en Trello

El Product Backlog de CraveWallet se gestiona en Trello. El tablero organiza las 40 User Stories, 6 Technical Stories y 6 Spike Stories de la especificación en cuatro listas, una por sprint, respetando la priorización y estimación descritas en la sección 2.4.3.

**Enlace público del tablero:** [CraveWallet – Product Backlog](https://trello.com/b/W0MvIjVH/cravewallet-product-backlog)

La figura 38 muestra la distribución de las historias en el tablero descrito en la sección 2.4.3.

![Product Backlog de CraveWallet en Trello](images/chapter_2/Product_Backlog_Trello.png)

<!-- pdf:omit-start -->

*Figura 38. Product Backlog de CraveWallet en Trello.*

<!-- pdf:omit-end -->

*Fuente: tablero de Trello del equipo Gastify.*
