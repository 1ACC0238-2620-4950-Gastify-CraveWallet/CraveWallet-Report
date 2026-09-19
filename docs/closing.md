# Conclusiones

El proceso de needfinding —seis entrevistas a profundidad distribuidas entre dos segmentos objetivo— validó empíricamente la hipótesis central del proyecto: los cobros silenciosos, la opacidad del tipo de cambio y la ausencia de alertas anticipadas generan un patrón real y recurrente de Budget Mismatch en el perfil de estudiante universitario digital y en el de profesional joven activo. Esta confirmación convirtió los supuestos del Lean UX Canvas en requisitos concretos y trazables, eliminando ambigüedades antes de iniciar el diseño de la solución.

La aplicación del proceso Lean UX permitió al equipo formular hipótesis verificables desde la primera entrega, evitando construir funcionalidades sin sustento en comportamiento observado. La síntesis de hallazgos en User Personas, User Journey Maps, Empathy Maps y User Task Matrix proporcionó una base compartida de conocimiento que orientó cada decisión de diseño posterior, desde la priorización del Product Backlog hasta la elección de los Bounded Contexts.

El modelado estratégico mediante Domain-Driven Design —Big Picture EventStorming, Context Mapping y arquitectura C4— produjo una descomposición del dominio en tres Bounded Contexts cohesivos (Subscription Management, Delivery Expense Management y Premium & Billing) con fronteras explícitas y patrones de integración documentados (ACL, Partnership, Customer/Supplier, Conformist). Esta estructura anticipa los puntos de cambio más probables del sistema y reduce el acoplamiento entre equipos en entregas futuras.

Los seis Spikes de investigación técnica (SP01-SP06) demostraron la viabilidad de las cuatro integraciones críticas —ExchangeRate-API, calendario nativo, Stripe SDK y Google Places API— antes de comprometer esfuerzo de implementación. En particular, la estrategia de caché de 24 horas para el tipo de cambio y el uso de webhooks de Stripe para la activación del plan Premium resolvieron los riesgos técnicos de mayor impacto sobre la propuesta de valor diferencial del producto.

El equipo consolidó prácticas de trabajo colaborativo basadas en GitFlow con ramas de feature y fix, commits convencionales y revisión cruzada de pull requests, lo que permitió integrar contribuciones paralelas de cinco integrantes sin pérdida de trazabilidad entre los artefactos del informe y el historial de cambios del repositorio.

# Glosario

**Anti-Corruption Layer (ACL).** Patrón de Context Mapping que interpone un adaptador entre dos Bounded Contexts —o entre un contexto y un sistema externo— para traducir modelos sin contaminar el dominio propio. En CraveWallet se aplica en la integración con ExchangeRate-API y con Stripe.

**Bounded Context.** Límite explícito dentro del cual un modelo de dominio es coherente y un mismo término tiene un único significado. CraveWallet define tres: Subscription Management, Delivery Expense Management y Premium & Billing.

**Context Mapping.** Técnica de Domain-Driven Design que documenta las relaciones de integración entre Bounded Contexts y los sistemas externos, especificando el lado que dicta el modelo (upstream) y el que se adapta (downstream).

**Domain-Driven Design (DDD).** Enfoque de diseño de software que centra el modelo en el dominio del negocio y su lógica, promoviendo una colaboración estrecha entre expertos del dominio y desarrolladores a través de un lenguaje ubicuo compartido.

**EventStorming.** Taller colaborativo de modelado que descubre el flujo de Domain Events de un sistema mediante notas adhesivas, distinguiendo eventos, comandos, actores, políticas y sistemas externos. El equipo lo aplicó en dos modalidades: Big Picture (As-Is y To-Be) y detalle por Bounded Context.

**Flutter.** Framework de desarrollo móvil multiplataforma de Google, basado en el lenguaje Dart, que genera aplicaciones nativas para Android e iOS desde una única base de código. Es el stack de la capa móvil de CraveWallet.

**GitFlow.** Estrategia de ramificación para Git que organiza el trabajo en ramas de largo plazo (`main`, `develop`) y ramas de corto plazo (`feature/`, `fix/`, `release/`), facilitando el desarrollo paralelo y los releases controlados.

**Lean UX.** Marco de trabajo que combina pensamiento de diseño, metodologías ágiles y modelo de negocio Lean para validar hipótesis sobre el usuario antes de invertir en construcción. El equipo aplicó sus artefactos principales: Problem Statements, Assumptions, Hypothesis Statements y Lean UX Canvas.

**Product Backlog.** Lista priorizada y estimada de todos los requisitos del producto (User Stories, Technical Stories y Spike Stories). El Product Backlog de CraveWallet contiene 40 US, 6 TS y 6 SS, gestionados en Trello.

**Shared Kernel.** Subconjunto del modelo de dominio que dos Bounded Contexts comparten y mantienen conjuntamente. En CraveWallet, el identificador de usuario `UserId` es el Shared Kernel entre Subscription Management y Delivery Expense Management.

**Spike Story.** Historia técnica de investigación, sin entregable de código productivo, cuyo objetivo es reducir incertidumbre sobre la viabilidad o el comportamiento de una tecnología o integración antes de implementarla en una historia de usuario.

**Spring Boot.** Framework de Java que simplifica la configuración y el arranque de aplicaciones backend basadas en Spring. El REST API Backend de CraveWallet usa Spring Boot con Java 21.

**Ubiquitous Language.** Vocabulario compartido y acordado entre el equipo de desarrollo y los expertos del dominio, usado de forma consistente en el código, los diagramas y la documentación. El glosario de dominio de CraveWallet está definido en la sección 2.3.6.

# Bibliografía

<!-- pdf:only
::: {#refs}
:::
-->

## Dominio de negocio

Deloitte. (2024). *Digital Media Trends: 18th edition*. Deloitte Insights. https://www2.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey.html

Imawan, R., Putra, W. P., Alqahtani, R., Milakis, E. D., & Dumchykov, M. (2025). Enhancing financial literacy in young adults: An Android-based personal finance management tool. *Journal of Hypermedia & Technology-Enhanced Learning*, *3*(1), 64–89. https://doi.org/10.58536/j-hytel.166

Tetteh, F. K., & Owusu Kwateng, K. (2025). The pathways from digital financial literacy to sustained engagement with mobile financial services: A technology continuance theory perspective. *Journal of Financial Services Marketing*, *31*(1). https://doi.org/10.1057/s41264-025-00335-6

Gartner. (2024). *Gartner forecasts worldwide public cloud end-user spending to reach $723 billion in 2025*. Gartner. https://www.gartner.com/en/newsroom/press-releases/2024-11-19-gartner-forecasts-worldwide-public-cloud-end-user-spending-to-reach-723-billion-dollars-in-2025

Kantar. (2024). *Estudio de comportamiento del consumidor digital: Delivery y servicios online en Lima*. Kantar Perú. https://www.kantar.com/peru

Ministerio de Transportes y Comunicaciones. (2023). *Encuesta Nacional de Demanda de Servicios de Telecomunicaciones*. MTC del Perú. https://www.mtc.gob.pe

PricewaterhouseCoopers Perú. (2024). *Digitalización y gasto profesional en Lima: Perspectivas para millennials*. PwC Perú. https://www.pwc.pe

Statista Research Department. (2024). *Number of subscription-based digital services used per person in Latin America*. Statista. https://www.statista.com

Superintendencia de Banca, Seguros y AFP. (2023). *Encuesta Nacional de Capacidades Financieras en el Perú*. SBS. https://www.sbs.gob.pe

## Métodos y técnicas de ingeniería de software

Gothelf, J., & Seiden, J. (2021). *Lean UX: Creating great products with agile teams* (3.a ed.). O'Reilly Media.

Portigal, S. (2013). *Interviewing users: How to uncover compelling insights*. Rosenfeld Media.

## Lenguajes, frameworks y herramientas

Mushtaq, F., Azam, F., & Anwar, M. W. (2024). Performance comparison of single code base development tools: Flutter, React Native, and Xamarin. En *2024 14th International Conference on Software Technology and Engineering (ICSTE 2024)* (pp. 17–23). IEEE. https://doi.org/10.1109/ICSTE68572.2024.00011

Zou, D., & Darus, M. Y. (2024). A comparative analysis of cross-platform mobile development frameworks. En *2024 IEEE 6th Symposium on Computers & Informatics (ISCI)* (pp. 1–6). IEEE. https://doi.org/10.1109/ISCI62787.2024.10667693

BudgetBakers. (2026). *Everything about Premium*. Wallet Help Center. https://support.budgetbakers.com/hc/en-us/articles/7151349344018-Everything-about-Premium

CNBC Select. (2026). *Best subscription trackers of 2026*. CNBC. https://www.cnbc.com/select/best-subscription-trackers/

Diario Financiero. (2023). *Nuestro viaje ha terminado: fintech española Fintonic cierra sus operaciones en Chile*. Diario Financiero. https://www.df.cl/mercados/banca-fintech/nuestro-viaje-ha-terminado-fintech-espanola-fintonic-cierra-sus

Fintonic. (2026). *Organiza tu dinero y ahorra con la app de Fintonic*. https://www.fintonic.com/es-ES/inicio/

Rocket Money. (2026). *The 7 best subscription management apps in 2026*. Rocket Money. https://www.rocketmoney.com/learn/personal-finance/best-subscription-management-apps

Spendee. (2026). *What is Spendee Premium?* Spendee Help Center. https://help.spendee.com/article/202-what-is-spendee-premium


# Anexos

## Anexo A. Product Backlog en Trello

El Product Backlog de CraveWallet se gestiona en Trello. El tablero organiza las 40 User Stories, 6 Technical Stories y 6 Spike Stories de la especificación en cuatro listas, una por sprint, respetando la priorización y estimación descritas en la sección 2.4.3.

**Enlace público del tablero:** [CraveWallet – Product Backlog](https://trello.com/b/W0MvIjVH/cravewallet-product-backlog)

![Product Backlog de CraveWallet en Trello](images/chapter_2/Product_Backlog_Trello.png)

*Figura A1. Product Backlog de CraveWallet en Trello.*
