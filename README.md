# Registro de Versiones del Informe

La tabla 1 registra las versiones del informe, su fecha, su autor y los cambios incorporados en cada una.

*Tabla 1. Registro de Versiones del Informe.*

| Versión | Fecha | Autor | Descripción de modificación                                                                                                                                                                                                                                                        |
| --- | --- | --- |------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| AV1 | 15/09/2026 | Todo el equipo | Primera versión                                                                                                                                                                                                                                                                    |
| AV1 — revisión | 07/10/2026 | Anghelo Faustino | Corrección de fuentes, Lean UX, flujos de mensajes, Context Map y coherencia del diseño.                                                                                                                                                                                           |
| AV1 — revisión de diseño estratégico | 07/10/2026 | Alexander Aliaga | Corrección de las secciones 2.5.1.2, 2.5.1.3, 2.5.2, 2.5.3.1 y 2.5.3.2; fuentes editables, referencias y alineación del criterio de activación de Premium.                                                                                                                         |
| TB1 — avance | 08/10/2026 | Mario Sejuro | Redacción de las referencias a tablas y figuras y de oraciones extensas del Capítulo II; fuentes del Capítulo III; herramientas del 4.1.1 en tablas Markdown.                                                                                                                      |
| TB1 — revisión de arquitectura | 09/10/2026 | Alexander Aliaga | Exportación de las seis vistas C4 en Structurizr; despliegue en Render y Vercel, stack Android y distinción de integraciones pendientes.                                                                                                                                           |
| TB1 — evidencias de despliegue | 09/10/2026 | Alexander Aliaga | Capturas públicas de Vercel y arranque de Render, copia de evidencia Live versionada y verificación HTTP del health; figuras 107, 108, 120 y 123 con procedencia.                                                                                                                  |
| TB1 — Student Outcome y capítulo 4 | 09/10/2026 | Mario Sejuro | Acciones y conclusiones TB1 en Student Outcome, alineación de la tabla de commits de testing, repositorio de la aplicación en la tabla 142 y retiro de la sección 4.3.                                                                                                             |
| TB1 — revisión de redacción | 09/10/2026 | Mario Sejuro | Reescritura de frases genéricas y retiro del estado pendiente en los capítulos I, II y III; precio de Premium unificado en S/ 9.99.                                                                                                                                                |
| TB1 — evidencia móvil | 09/10/2026 | Sebastián Roman | Registro de la prueba en LDPlayer (capturas M1–M6, resultados y salida de Gradle) y aclaración de que las figuras 111 y 112 provienen del emulador.                                                                                                                                |
| TB1 — Swagger público | 09/10/2026 | Anghelo Faustino | Enlace y captura de Swagger en Render; documentación del despliegue `445bee1` y verificación de acceso público a OpenAPI con recursos protegidos por JWT.                                                                                                                          |
| TB1 — Lean UX Canvas | 09/10/2026 | Anghelo Faustino | Tabla editable del Lean UX Canvas en lugar de imagen.                                                                                                                                                                                                                              |
| TB1 — Sprint Backlog y evidencias audiovisuales | 10/10/2026 | Josué Carpio | Organización del Sprint Backlog 1 en Trello con 12 tareas, incorporación de su enlace y captura en el Capítulo IV, grabación del video de navegación de la Landing Page, aplicación Android y Swagger UI, realización de audit y del recorrido del prototipo interactivo en Figma. |

*Fuente: elaboración del equipo Gastify*


# Project Report Collaboration Insights

La figura 1 muestra la actividad de los integrantes en el repositorio del informe, como evidencia del trabajo colaborativo.

![Collaboration Insights — CraveWallet](docs/images/collaboration_insights.png)

<!-- pdf:omit-start -->

*Figura 1. Collaboration Insights — CraveWallet.*

<!-- pdf:omit-end -->

*Fuente: captura de GitHub del repositorio CraveWallet-Report.*

En TB1 el informe se elaboró con GitFlow: cada sección se redactó en una rama `feature`, `fix` o `docs` creada desde `develop` y se integró mediante pull request. Mario Sejuro redactó el diseño de interfaces del capítulo III y la configuración del capítulo IV; Anghelo Faustino y Alexander Aliaga incorporaron las evidencias de despliegue y de arquitectura; Sebastián Roman revisó leyendas, citas y fuentes de las figuras y tablas; y Josué Carpio actualizó las fotografías del equipo. Los commits de cada integrante en los repositorios de código y del informe se muestran en la tabla 160 de la sección 4.2.1.9, y los cambios de cada versión, en la tabla 1.

<!-- pdf:omit-start -->

# Contenido

### [Capítulo I: Presentación](docs/chapter_1.md#capítulo-i-presentación)
- [1.1. Startup Profile](docs/chapter_1.md#11-startup-profile)
  - [1.1.1. Descripción de la Startup](docs/chapter_1.md#111-descripción-de-la-startup)
  - [1.1.2. Perfiles de integrantes del equipo](docs/chapter_1.md#112-perfiles-de-integrantes-del-equipo)
- [1.2. Solution Profile](docs/chapter_1.md#12-solution-profile)
  - [1.2.1. Antecedentes y problemática](docs/chapter_1.md#121-antecedentes-y-problemática)
  - [1.2.2. Lean UX Process](docs/chapter_1.md#122-lean-ux-process)
- [1.3. Segmentos objetivo](docs/chapter_1.md#13-segmentos-objetivo)

### [Capítulo II: Requirements Development and Software Solution Design](docs/chapter_2.md#capítulo-ii-requirements-development-and-software-solution-design)
- [2.1. Competidores](docs/chapter_2.md#21-competidores)
  - [2.1.1. Análisis competitivo](docs/chapter_2.md#211-análisis-competitivo)
  - [2.1.2. Estrategias y tácticas frente a competidores](docs/chapter_2.md#212-estrategias-y-tácticas-frente-a-competidores)
- [2.2. Entrevistas](docs/chapter_2.md#22-entrevistas)
  - [2.2.1. Diseño de entrevistas](docs/chapter_2.md#221-diseño-de-entrevistas)
  - [2.2.2. Registro de entrevistas](docs/chapter_2.md#222-registro-de-entrevistas)
  - [2.2.3. Análisis de entrevistas](docs/chapter_2.md#223-análisis-de-entrevistas)
- [2.3. Needfinding](docs/chapter_2.md#23-needfinding)
  - [2.3.1. User Personas](docs/chapter_2.md#231-user-personas)
  - [2.3.2. User Task Matrix](docs/chapter_2.md#232-user-task-matrix)
  - [2.3.3. User Journey Mapping](docs/chapter_2.md#233-user-journey-mapping)
  - [2.3.4. Empathy Mapping](docs/chapter_2.md#234-empathy-mapping)
  - [2.3.5. Big Picture EventStorming](docs/chapter_2.md#235-big-picture-eventstorming)
  - [2.3.6. Ubiquitous Language](docs/chapter_2.md#236-ubiquitous-language)
- [2.4. Requirements specification](docs/chapter_2.md#24-requirements-specification)
  - [2.4.1. User Stories](docs/chapter_2.md#241-user-stories)
  - [2.4.2. Impact Mapping](docs/chapter_2.md#242-impact-mapping)
  - [2.4.3. Product Backlog](docs/chapter_2.md#243-product-backlog)
- [2.5. Strategic-Level Domain-Driven Design](docs/chapter_2.md#25-strategic-level-domain-driven-design)
  - [2.5.1. EventStorming](docs/chapter_2.md#251-eventstorming)
  - [2.5.2. Context Mapping](docs/chapter_2.md#252-context-mapping)
  - [2.5.3. Software Architecture](docs/chapter_2.md#253-software-architecture)
- [2.6. Tactical-Level Domain-Driven Design](docs/chapter_2.md#26-tactical-level-domain-driven-design)
  - [2.6.1. Bounded Context: Subscription Management](docs/chapter_2.md#261-bounded-context-subscription-management)
  - [2.6.2. Bounded Context: Delivery Expense Management](docs/chapter_2.md#262-bounded-context-delivery-expense-management)
  - [2.6.3. Bounded Context: Premium & Billing](docs/chapter_2.md#263-bounded-context-premium--billing)

### [Capítulo III: Solution UI/UX Design](docs/chapter_3.md#capítulo-iii-solution-uiux-design)
- [3.1. Product design](docs/chapter_3.md#31-product-design)
  - [3.1.1. Style Guidelines](docs/chapter_3.md#311-style-guidelines)
  - [3.1.2. Information Architecture](docs/chapter_3.md#312-information-architecture)
  - [3.1.3. Landing Page UI Design](docs/chapter_3.md#313-landing-page-ui-design)
  - [3.1.4. Mobile Applications UX/UI Design](docs/chapter_3.md#314-mobile-applications-uxui-design)

### [Capítulo IV: Product Implementation & Validation](docs/chapter_4.md#capítulo-iv-product-implementation--validation)
- [4.1. Software Configuration Management](docs/chapter_4.md#41-software-configuration-management)
  - [4.1.1. Software Development Environment Configuration](docs/chapter_4.md#411-software-development-environment-configuration)
  - [4.1.2. Source Code Management](docs/chapter_4.md#412-source-code-management)
  - [4.1.3. Source Code Style Guide & Conventions](docs/chapter_4.md#413-source-code-style-guide--conventions)
  - [4.1.4. Software Deployment Configuration](docs/chapter_4.md#414-software-deployment-configuration)
- [4.2. Landing Page & Mobile Application Implementation](docs/chapter_4.md#42-landing-page--mobile-application-implementation)
  - [4.2.1. Sprint 1](docs/chapter_4.md#421-sprint-1)

### [Conclusiones](docs/closing.md#conclusiones)

### [Glosario](docs/closing.md#glosario)

### [Bibliografía](docs/closing.md#bibliografía)

### [Anexos](docs/closing.md#anexos)

<!-- pdf:omit-end -->

<!-- pdf:only
\tableofcontents
-->

# Student Outcome

El curso contribuye al cumplimiento del siguiente Student Outcome ABET:

**ABET - EAC - Student Outcome 7**

**Criterio:** La capacidad de adquirir y aplicar nuevos conocimientos según sea necesario, utilizando estrategias de aprendizaje apropiadas.

Los siguientes cuadros describen las acciones realizadas por cada integrante y las conclusiones que sustentan el logro de los dos criterios del Student Outcome durante las entregas AV1 y TB1.

## Criterio 1

Actualiza conceptos y conocimientos necesarios para su desarrollo profesional y en especial para su proyecto en soluciones de software.

La tabla 2 resume las acciones de cada integrante que sustentan el primer criterio.

*Tabla 2. Criterio 1.*

| Integrante | Acciones realizadas en AV1 y TB1 |
| --- | --- |
| **Aliaga, Alexander** | **AV1:** Documentó el Big Picture EventStorming del proceso actual y el EventStorming de diseño de CraveWallet. Organizó los eventos, actores, sistemas, problemas y oportunidades del escenario As-Is; desarrolló el Candidate Context Discovery, los Domain Message Flows y los Bounded Context Canvases que sustentan los contextos de Suscripciones, Gastos y Premium.<br><br>**TB1:** Generó las seis vistas C4 con Structurizr (DSL, modelo y exportaciones), publicó los diagramas nativos de Miro de los flujos de mensajes y los canvases, y reunió la evidencia pública del despliegue: capturas del landing en Vercel, de la pantalla de arranque de Render y del health del API, con su procedencia y huella SHA-256. |
| **Carpio Peña, Josué Francisco** | **AV1:** Registró y consolidó la información de las entrevistas del Segmento 2, incluyendo datos demográficos, ocupación, fecha, duración y responsable. Corrigió la identificación de los entrevistados y organizó los enlaces y tiempos de inicio del video consolidado para mantener trazabilidad entre las grabaciones y el análisis de entrevistas.<br><br>**TB1:** Reemplazó las fotografías de los cinco integrantes del capítulo 1 por retratos con el mismo encuadre, fondo y tamaño, y los integró al informe mediante un pull request revisado. |
| **Faustino Hurtado, Anghelo Edwin** | **AV1:** Registró las entrevistas de Leonardo Sánchez, Darío Romero y Eduardo Aguirre, incorporando sus enlaces, fechas, horarios, duraciones y perfiles. Integró las evidencias de User Personas y As-Is Journey Maps, preparó la carátula y los metadatos de la entrega, y documentó el Product Backlog de 52 elementos con su enlace y evidencia visual en Trello.<br><br>**TB1:** Implementó el backend en Java 21 y Spring Boot con autenticación JWT, suscripciones, gastos de Delivery con presupuesto, cotización USD/PEN con caché y datos de recordatorio (16 endpoints y 32 pruebas). Lo desplegó en Render con PostgreSQL 17, documentó sus contratos con OpenAPI y conectó la aplicación Android al API público. |
| **Roman Zeballos, Sebastian Jared** | **AV1:** Desarrolló el análisis de competidores y el diseño de entrevistas; consolidó el análisis cuantitativo de los dos segmentos y elaboró los artefactos de Needfinding. Especificó las 40 User Stories, 6 Technical Stories y 6 Spike Stories, estructuró el Ubiquitous Language, elaboró los cuatro Impact Maps en UXPressia y organizó la priorización y estimación del Product Backlog.<br><br>**TB1:** Desarrolló la aplicación Android en Kotlin y Jetpack Compose a partir de los wireframes y el Design System (Inicio, Gastos, Análisis, Perfil, alta de suscripción y recordatorios). Agregó las secciones de planes, preguntas frecuentes y novedades del landing, escribió los escenarios Gherkin de sus historias y revisó leyendas, citas y fuentes de las figuras y tablas del informe. |
| **Sejuro Medina, Mario Gabriel** | **AV1:** Redactó la descripción de la startup, el Lean UX Process y los segmentos objetivo; revisó las User Stories para alinearlas con la rúbrica. Desarrolló el Context Mapping, los diagramas C4 de contexto, contenedores y despliegue, y el diseño táctico de los Bounded Contexts Subscription Management, Delivery Expense Management y Premium & Billing con sus diagramas de componentes, clases y base de datos.<br><br>**TB1:** Diseñó la guía de estilo, la arquitectura de información, el landing (3.1.3) y la UX/UI de la app móvil (3.1.4) en Figma, con wireframes, wireflows, mock-ups en modo claro y oscuro, user flows y prototipo. Implementó el landing en Next.js 16 con modo oscuro y versión en español e inglés, y lo publicó en Vercel con cifras sustentadas en las entrevistas y la encuesta de la SBS. |

*Fuente: elaboración del equipo Gastify.*


**Conclusiones**

**AV1:** Los aportes individuales actualizaron y aplicaron conocimientos de Lean UX, investigación de usuarios, ingeniería de requisitos, EventStorming, priorización ágil, C4 Model y Domain-Driven Design sobre el problema real de gestionar suscripciones y gastos recurrentes. El resultado mantiene trazabilidad entre la problemática, las entrevistas, los artefactos de Needfinding, los requisitos y la arquitectura propuesta para CraveWallet.

**TB1:** Los aportes aplicaron conocimientos nuevos en la implementación: diseño de interfaces en Figma, desarrollo del landing en Next.js, de la aplicación en Kotlin y Jetpack Compose y del backend en Java y Spring Boot, y despliegue en Vercel y Render. Cada producto quedó enlazado con las historias de usuario y los contratos documentados en los capítulos anteriores.

## Criterio 2

Reconoce la necesidad del aprendizaje permanente para el desempeño profesional y el desarrollo de proyectos en soluciones de software.

La tabla 3 resume las acciones de cada integrante que sustentan el segundo criterio.

*Tabla 3. Criterio 2.*

| Integrante | Acciones realizadas en AV1 y TB1 |
| --- | --- |
| **Aliaga, Alexander** | **AV1:** Estudió la diferencia entre EventStorming As-Is y To-Be, así como el uso correcto de eventos, comandos, políticas, vistas y sistemas externos. Aplicó Candidate Context Discovery y Bounded Context Canvas para convertir los hallazgos del dominio en fronteras de responsabilidad que podrán revisarse durante la implementación.<br><br>**TB1:** Aprendió a modelar arquitectura como código con Structurizr y a exportar vistas reproducibles, y adoptó las capturas nativas de cada herramienta, con procedencia y huella registradas, como forma de sustentar las figuras del informe. |
| **Carpio Peña, Josué Francisco** | **AV1:** Profundizó en buenas prácticas para documentar entrevistas, normalizar metadatos y construir un video consolidado con tiempos verificables. Reforzó el uso de Git y GitHub para corregir información compartida sin perder la trazabilidad de los cambios realizados por el equipo.<br><br>**TB1:** Aplicó el flujo de ramas y pull requests del repositorio, con la verificación `Commit policy`, para corregir material compartido sin afectar el trabajo de los demás. |
| **Faustino Hurtado, Anghelo Edwin** | **AV1:** Aprendió a transformar entrevistas en evidencias documentales consistentes y a relacionarlas con User Personas y Journey Maps. Fortaleció el uso de Markdown, Git, GitHub y Trello para integrar perfiles, enlaces, material visual y un Product Backlog versionado dentro del informe académico.<br><br>**TB1:** Incorporó Flyway para versionar el esquema, bloqueos transaccionales para proteger el cupo, los reintentos y el presupuesto, y el despliegue en contenedores con Docker y Render. Verificó cada incremento con pruebas de integración y con GitHub Actions. |
| **Roman Zeballos, Sebastian Jared** | **AV1:** Investigó técnicas de análisis competitivo, Needfinding, redacción de criterios de aceptación y estimación con Story Points. Aprendió a construir Impact Maps en UXPressia y a conectar objetivos de negocio, actores, impactos, entregables e historias de usuario antes de priorizarlas en el backlog.<br><br>**TB1:** Aprendió Jetpack Compose, Material 3 y Navigation Compose para convertir un Design System en pantallas nativas, y aplicó Gherkin para traducir criterios de aceptación en escenarios comprobables. |
| **Sejuro Medina, Mario Gabriel** | **AV1:** Estudió Lean UX, Context Mapping, C4 Model y diseño táctico de Domain-Driven Design para definir agregados, value objects, servicios, repositorios y adaptadores. Profundizó en la representación de arquitectura y en la separación de responsabilidades entre los contextos del dominio y servicios externos como Stripe y ExchangeRate-API.<br><br>**TB1:** Aprendió a generar archivos de Figma con su Plugin API, a configurar rutas por idioma y modo oscuro en Next.js 16 y a publicar con despliegue continuo en Vercel. Incorporó pautas de accesibilidad (WCAG 2.1) y de Material Design 3 como referencias citadas en el diseño. |

*Fuente: elaboración del equipo Gastify.*


**Conclusiones**

**AV1:** El equipo comprobó que cada sección exigió aprendizaje autónomo de métodos, herramientas y tecnologías que no se dominaban al inicio. Ese conocimiento se transfirió mediante commits, revisiones e integración en `develop`, quedando disponible para los demás integrantes. Las siguientes entregas requerirán mantener la consulta de documentación, la validación con usuarios y la revisión colaborativa para implementar y comprobar la solución móvil.

**TB1:** Las herramientas nuevas (Structurizr, Flyway, Docker, Render, Vercel, Jetpack Compose y el plugin de Figma) se aprendieron durante el Sprint 1 y se compartieron mediante commits, documentación versionada y pull requests. Para el siguiente Sprint se mantendrá la revisión entre integrantes de los cambios en el código.

# Objetivos SMART

Cada integrante plantea dos objetivos para su desarrollo profesional luego de terminar la carrera. Cada meta establece un resultado específico, una medida verificable, una acción viable y relevante para su perfil, y un plazo definido.

## Alexander Aliaga

La tabla 4 detalla los objetivos SMART de Alexander Aliaga.

*Tabla 4. Alexander Aliaga.*

| Objetivo | Medible | Alcanzable y relevante | Plazo |
| --- | --- | --- | --- |
| **Objetivo 1**<br>Completar una formación especializada en Domain-Driven Design y arquitectura de software. | Finalizar el programa elegido y publicar un caso de estudio con tres Bounded Contexts, Context Map y diagramas de arquitectura en un repositorio público. | Cuatro horas semanales de estudio y práctica sobre EventStorming y Bounded Context Canvases ya aplicados en CraveWallet; fortalece su capacidad para modelar dominios complejos. | Dentro de los 12 meses posteriores a la graduación. |
| **Objetivo 2**<br>Facilitar sesiones de EventStorming para proyectos de software. | Facilitar tres sesiones documentadas, cada una con eventos, decisiones de diseño y acciones de seguimiento aprobadas por los participantes. | Una sesión cada seis meses en proyectos académicos, personales o profesionales; consolida la habilidad de traducir necesidades del negocio en modelos de dominio. | Dentro de los 18 meses posteriores a la graduación. |

*Fuente: elaboración del equipo Gastify.*


## Josué Francisco Carpio Peña

La tabla 5 detalla los objetivos SMART de Josué Francisco Carpio Peña.

*Tabla 5. Josué Francisco Carpio Peña.*

| Objetivo | Medible | Alcanzable y relevante | Plazo |
| --- | --- | --- | --- |
| **Objetivo 1**<br>Obtener la certificación CompTIA Security+. | Aprobar el examen oficial; previamente, lograr al menos 85 % en tres simulacros consecutivos. | Seis horas semanales de estudio sobre seguridad de redes, gestión de riesgos y respuesta a incidentes; formaliza el interés en ciberseguridad reflejado en su perfil profesional. | Dentro de los 12 meses posteriores a la graduación. |
| **Objetivo 2**<br>Construir un portafolio técnico de ciberseguridad aplicada. | Resolver seis retos Capture The Flag y publicar un informe técnico por cada reto en un repositorio o blog profesional. | Un reto cada tres meses, combinando laboratorios guiados y práctica autónoma; convierte conocimientos de seguridad en evidencia verificable para puestos de desarrollo seguro. | Dentro de los 18 meses posteriores a la graduación. |

*Fuente: elaboración del equipo Gastify.*


## Anghelo Edwin Faustino Hurtado

La tabla 6 detalla los objetivos SMART de Anghelo Edwin Faustino Hurtado.

*Tabla 6. Anghelo Edwin Faustino Hurtado.*

| Objetivo | Medible | Alcanzable y relevante | Plazo |
| --- | --- | --- | --- |
| **Objetivo 1**<br>Obtener la certificación AWS Certified Developer - Associate. | Aprobar el examen oficial; antes, desplegar una API REST con Spring Boot, base de datos, autenticación y CI/CD como proyecto de práctica. | Cinco horas semanales de estudio y práctica; complementa su formación full-stack con despliegue en la nube y fortalece el perfil de desarrollo de productos digitales. | Dentro de los 12 meses posteriores a la graduación. |
| **Objetivo 2**<br>Desplegar una aplicación full-stack propia orientada a resolver un problema cotidiano. | Publicar una aplicación con frontend Angular, backend Spring Boot, base de datos y al menos 50 usuarios de prueba que registren retroalimentación. | Reutiliza conocimientos de APIs REST, Git, experiencia de usuario y validación con entrevistas aplicados en CraveWallet. | Dentro de los 18 meses posteriores a la graduación. |

*Fuente: elaboración del equipo Gastify.*


## Sebastian Jared Roman Zeballos

La tabla 7 detalla los objetivos SMART de Sebastian Jared Roman Zeballos.

*Tabla 7. Sebastian Jared Roman Zeballos.*

| Objetivo | Medible | Alcanzable y relevante | Plazo |
| --- | --- | --- | --- |
| **Objetivo 1**<br>Completar el Google UX Design Professional Certificate. | Aprobar los siete cursos y publicar el proyecto final junto con dos casos de estudio en un portafolio en línea. | Seis horas semanales de dedicación; amplía el trabajo de interfaces y experiencia de usuario desarrollado en CraveWallet. | Dentro de los 9 meses posteriores a la graduación. |
| **Objetivo 2**<br>Construir un portafolio de interfaces web accesibles. | Publicar cinco proyectos frontend con diseño responsive, integración de APIs y cumplimiento de los criterios WCAG 2.1 nivel AA. | Un proyecto cada dos meses con Angular, TypeScript, HTML y CSS; fortalece el perfil de desarrollo de interfaces web escalables. | Dentro de los 12 meses posteriores a la graduación. |

*Fuente: elaboración del equipo Gastify.*


## Mario Gabriel Sejuro Medina

La tabla 8 detalla los objetivos SMART de Mario Gabriel Sejuro Medina.

*Tabla 8. Mario Gabriel Sejuro Medina.*

| Objetivo | Medible | Alcanzable y relevante | Plazo |
| --- | --- | --- | --- |
| **Objetivo 1**<br>Completar una especialización en desarrollo móvil nativo con Kotlin y Jetpack Compose. | Finalizar la especialización y publicar tres aplicaciones Android funcionales en un repositorio público, incluyendo pruebas unitarias en al menos una de ellas. | Cinco horas semanales de estudio y práctica; profundiza su interés en desarrollo móvil y permite aplicar las decisiones de arquitectura planteadas en CraveWallet. | Dentro de los 12 meses posteriores a la graduación. |
| **Objetivo 2**<br>Diseñar y desplegar una aplicación móvil fintech con arquitectura mantenible. | Publicar una aplicación móvil conectada a un backend Spring Boot, con autenticación, persistencia y una integración externa en entorno de prueba. | Extiende la experiencia con Kotlin, Spring Boot, Stripe y ExchangeRate-API documentada en el proyecto; construye un caso de estudio para puestos de desarrollo móvil. | Dentro de los 18 meses posteriores a la graduación. |

*Fuente: elaboración del equipo Gastify.*
