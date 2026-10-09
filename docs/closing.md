# Conclusiones

Las seis entrevistas, tres por cada segmento objetivo, muestran el mismo problema: los participantes olvidan las renovaciones, no conocen el monto en soles de sus servicios en dólares y no controlan su gasto en delivery. Ninguno recibe un aviso antes del cobro, y todos relatan al menos un cargo automático que descubrieron después de producirse.

Las seis entrevistas sustentan las hipótesis de centralizar suscripciones, estimar importes en soles y anticipar renovaciones. La reducción de cargos inesperados, la retención y la conversión a Premium se medirán cuando el producto esté en uso.

Los artefactos de Needfinding y la especificación conectan las necesidades de Camila Torres y Renzo Salazar con 52 historias priorizadas en el Product Backlog, cuyo tablero se presenta en el Anexo A.

El diseño estratégico separa tres contextos: Subscription Management, Delivery Expense Management y Premium & Billing. Esta separación distingue las suscripciones que el usuario paga a terceros, los gastos puntuales de delivery y la facturación del plan de CraveWallet, y protege cada modelo de los cambios en ExchangeRate-API, Google Places y Stripe mediante capas anticorrupción.

El diseño de la aplicación móvil y del landing page aplica un mismo Design System y permite recorrer, en el prototipo, los tres objetivos principales del usuario: agregar una suscripción, revisar su gasto mensual y configurar una alerta de pago.

Los seis spikes (SP01–SP06) investigan las integraciones con ExchangeRate-API, el calendario nativo y Stripe, y sus resultados alimentarán las historias de implementación de los siguientes sprints.

En el Sprint 1 el equipo publicó el landing en Vercel, desplegó en Render un REST API con PostgreSQL y autenticación JWT que documenta 16 operaciones y supera 32 pruebas automatizadas, y compiló la aplicación Android en Kotlin y Jetpack Compose, instalada en un celular físico y conectada al API público con 9 pruebas de integración. Siguen en investigación las integraciones con Stripe y con el calendario nativo.

# Glosario

**Anti-Corruption Layer (ACL).** Patrón de Context Mapping que interpone un adaptador entre dos Bounded Contexts, o entre un contexto y un sistema externo, para traducir modelos sin contaminar el dominio propio. En CraveWallet se propone en las integraciones con ExchangeRate-API, Stripe y Google Places.

**Bounded Context.** Límite explícito dentro del cual un modelo de dominio es coherente y un mismo término tiene un único significado. CraveWallet propone tres: Subscription Management, Delivery Expense Management y Premium & Billing.

**Context Mapping.** Técnica de Domain-Driven Design que documenta las relaciones de integración entre Bounded Contexts y los sistemas externos, especificando el lado que dicta el modelo (upstream) y el que se adapta (downstream).

**Domain-Driven Design (DDD).** Enfoque de diseño de software que centra el modelo en el dominio del negocio y su lógica, promoviendo una colaboración estrecha entre expertos del dominio y desarrolladores a través de un lenguaje ubicuo compartido.

**EventStorming.** Taller colaborativo de modelado que descubre el flujo de Domain Events de un sistema mediante notas adhesivas, distinguiendo eventos, comandos, actores, políticas y sistemas externos. El equipo lo aplicó en dos modalidades: Big Picture (As-Is y To-Be) y detalle por Bounded Context.

**GitFlow.** Estrategia de ramificación para Git que organiza el trabajo en ramas de largo plazo (`main`, `develop`) y ramas de corto plazo (`feature/`, `fix/`, `release/`), facilitando el desarrollo paralelo y los releases controlados.

**Kotlin y Jetpack Compose.** Kotlin es el lenguaje oficial de Android y Jetpack Compose, el toolkit declarativo de Google para construir interfaces nativas con Material 3. Son el stack de la capa móvil de CraveWallet.

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

Brown, S. (s. f.-a). Deployment diagram. Recuperado 9 de octubre de 2026, de https://c4model.com/diagrams/deployment

Brown, S. (s. f.-b). The C4 model for visualising software architecture. Recuperado 7 de octubre de 2026, de https://c4model.com/

BudgetBakers. (2026). Everything about Premium. Wallet Help Center. https://support.budgetbakers.com/hc/en-us/articles/7151349344018-Everything-about-Premium

DDD Crew. (s. f.-a). Context Mapping. Recuperado 7 de octubre de 2026, de https://github.com/ddd-crew/context-mapping

DDD Crew. (s. f.-b). Domain Message Flow Modelling. Recuperado 7 de octubre de 2026, de https://github.com/ddd-crew/domain-message-flow-modelling

DDD Crew. (s. f.-c). The Bounded Context Canvas. Recuperado 6 de octubre de 2026, de https://github.com/ddd-crew/bounded-context-canvas

Evans, E. (2003). Domain-Driven Design: Tackling Complexity in the Heart of Software. Addison-Wesley.

ExchangeRate-API. (s. f.). Pair conversion requests. Recuperado 7 de octubre de 2026, de https://www.exchangerate-api.com/docs/pair-conversion-requests

Fintonic. (s. f.). Organiza tu dinero y ahorra con la app de Fintonic. Fintonic. Recuperado 7 de octubre de 2026, de https://www.fintonic.com/es-ES/inicio/

Google. (s. f.-a). Material Design 3. Recuperado 8 de octubre de 2026, de https://m3.material.io/

Google. (s. f.-b). Text Search (New). Recuperado 7 de octubre de 2026, de https://developers.google.com/maps/documentation/places/web-service/text-search

Gothelf, J. (2021). How to use the Lean UX Canvas. https://jeffgothelf.com/blog/how-to-use-the-lean-ux-canvas/

Gothelf, J., & Seiden, J. (2021). Lean UX: Creating Great Products with Agile Teams (3.ª ed.). O’Reilly Media.

Laubheimer, P. (2016). Wireflows: A UX Deliverable for Workflows and Apps. Nielsen Norman Group. https://www.nngroup.com/articles/wireflows/

Portigal, S. (2013). Interviewing Users: How to Uncover Compelling Insights. Rosenfeld Media.

Spendee. (2025). What is Spendee Premium? Spendee Help Center. https://help.spendee.com/article/202-what-is-spendee-premium

Stripe. (s. f.-a). Receive Stripe events in your webhook endpoint. Recuperado 7 de octubre de 2026, de https://docs.stripe.com/webhooks

Stripe. (s. f.-b). Using webhooks with subscriptions. Recuperado 7 de octubre de 2026, de https://docs.stripe.com/billing/subscriptions/webhooks

Structurizr. (s. f.). Structurizr DSL: Language reference. Recuperado 9 de octubre de 2026, de https://docs.structurizr.com/dsl/language

Superintendencia de Banca, Seguros y AFP, & CAF. (s. f.). Encuesta de Medición de Capacidades Financieras: Perú 2022. SBS y CAF. Recuperado 6 de octubre de 2026, de https://www.sbs.gob.pe/Portals/4/jer/CIFRAS-ENCUESTA/2022/Brochure_ENCUESTA_CAPACIDADES%20FINANACIERAS%202022_vr.pdf

World Wide Web Consortium. (2018). Web Content Accessibility Guidelines (WCAG) 2.1. https://www.w3.org/TR/WCAG21/

<!-- pdf:omit-end -->

# Anexos

## Anexo A. Product Backlog en Trello

El Product Backlog de CraveWallet se gestiona en Trello. El tablero organiza las 40 User Stories, 6 Technical Stories y 6 Spike Stories de la especificación en cuatro listas, una por sprint, respetando la priorización y estimación descritas en la sección 2.4.3.

**Enlace público del tablero:** [CraveWallet – Product Backlog](https://trello.com/b/W0MvIjVH/cravewallet-product-backlog)

La figura 128 muestra la distribución de las historias en el tablero descrito en la sección 2.4.3.

![Product Backlog de CraveWallet en Trello](images/chapter_2/Product_Backlog_Trello.png)

<!-- pdf:omit-start -->

*Figura 128. Product Backlog de CraveWallet en Trello.*

<!-- pdf:omit-end -->

*Fuente: tablero de Trello del equipo Gastify.*
