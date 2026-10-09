# Capítulo IV: Product Implementation & Validation

## 4.1. Software Configuration Management

### 4.1.1. Software Development Environment Configuration

El equipo usa las siguientes herramientas para gestionar, diseñar, desarrollar y probar CraveWallet, agrupadas en cuatro actividades.

#### Project Management

La tabla 138 describe las herramientas usadas.

*Tabla 138. Herramientas de gestión del proyecto.*

| Herramienta | Uso en CraveWallet | Sitio |
| --- | --- | --- |
| GitHub Projects | Backlog del producto, planificación de sprints y seguimiento de issues en tableros Kanban. | <https://github.com/features/project-management> |
| Trello | Tablero del Product Backlog con una lista por sprint y columnas *To Do*, *In Progress* y *Done* (sección 2.4.3). | <https://trello.com/> |

*Fuente: elaboración del equipo Gastify.*

#### Product UX/UI Design

La tabla 139 detalla las herramientas para investigar a los usuarios, modelar el dominio y construir los prototipos.

*Tabla 139. Herramientas de investigación, diseño y modelado.*

| Herramienta | Uso en CraveWallet | Sitio |
| --- | --- | --- |
| Figma | Wireframes, mock-ups, Design System y prototipos del landing page y de la aplicación móvil (sección 3.1). | <https://www.figma.com/> |
| UXPressia | User Personas, Empathy Maps, Journey Maps e Impact Maps (secciones 2.3 y 2.4.2). | <https://uxpressia.com/> |
| Miro | EventStorming, Domain Message Flows, Bounded Context Canvases y Context Map (sección 2.5). | <https://miro.com/> |
| Structurizr | Diagramas C4 de contexto, contenedores y componentes, versionados como DSL (sección 2.5.3). | <https://structurizr.com/> |

*Fuente: elaboración del equipo Gastify.*

#### Software Development

El landing page se construye con Next.js, React y TypeScript; el backend, con Java 21 y Spring Boot; y la aplicación Android, con Kotlin y Jetpack Compose, según el diagrama de contenedores de la sección 2.5.3.2 y el repositorio móvil citado en 4.2.1.8. La tabla 140 agrupa las herramientas por producto.

*Tabla 140. Herramientas y tecnologías de desarrollo.*

| Producto | Herramienta | Uso en CraveWallet | Sitio |
| --- | --- | --- | --- |
| Todos | GitHub | Repositorios, control de versiones con Git y revisión de pull requests. | <https://github.com/> |
| Landing page | Visual Studio Code | Editor principal, con soporte para TypeScript, React y Tailwind CSS. | <https://code.visualstudio.com/> |
| Landing page | WebStorm | IDE alternativo de JetBrains para JavaScript y TypeScript. | <https://www.jetbrains.com/webstorm/> |
| Landing page | TypeScript 5 | Lenguaje del landing page, con verificación estática de tipos. | <https://www.typescriptlang.org/> |
| Landing page | React 19 | Componentes de la interfaz del landing page. | <https://react.dev/> |
| Landing page | Next.js 16 | Framework de React para el enrutamiento, la generación estática y el build. | <https://nextjs.org/> |
| Landing page | Tailwind CSS 4 | Estilos con clases de utilidad sobre los tokens del Design System. | <https://tailwindcss.com/> |
| Landing page | Vercel | Despliegue automático del landing page al integrar cambios en `main` (sección 4.1.4). | <https://vercel.com/> |
| Backend | IntelliJ IDEA | IDE del backend, con soporte para Maven, Spring Boot, pruebas y depuración. | <https://www.jetbrains.com/idea/> |
| Backend | Java 21 | Lenguaje del REST API y de los tres Bounded Contexts. | <https://openjdk.org/projects/jdk/21/> |
| Backend | Spring Boot 3.5.16 | REST API con validación, seguridad JWT y servicios de aplicación. Versión declarada en el `pom.xml` del backend. | <https://spring.io/projects/spring-boot> |
| Backend | Spring Data JPA | Repositorios de la Infrastructure Layer de cada Bounded Context. | <https://spring.io/projects/spring-data-jpa> |
| Backend | Maven | Dependencias, compilación, pruebas y empaquetado del backend. | <https://maven.apache.org/> |
| Backend | PostgreSQL 17 | Base publicada en Render y verificada con Flyway V1–V3 y pruebas remotas; evidencia en 4.2.1.8. Compose conserva una configuración local no ejecutada. | <https://www.postgresql.org/> |
| Backend | H2 2.3.232 | Persistencia en memoria para ejecución local y pruebas de usuarios, sesiones, suscripciones, gastos y presupuestos. | <https://www.h2database.com/> |
| Backend | Flyway | Migraciones V1–V3 del esquema; JPA valida las tablas sin crearlas automáticamente. | <https://www.red-gate.com/products/flyway/> |
| Backend | Docker Compose | Configuración del contenedor PostgreSQL; el backend se ejecutó como aplicación Java local. | <https://www.docker.com/> |
| Aplicación móvil | Kotlin y Jetpack Compose | Interfaz y lógica de presentación de la aplicación Android; stack declarado en el repositorio móvil citado en 4.2.1.8. | <https://developer.android.com/compose> |
| Aplicación móvil | Android Studio | Emulador de Android y herramientas del SDK para probar la aplicación. | <https://developer.android.com/studio> |

*Fuente: elaboración del equipo Gastify.*

#### Software Testing

Los criterios de aceptación de las User Stories se escriben en Gherkin, como indica la tabla 141.

*Tabla 141. Herramientas de prueba.*

| Herramienta | Uso en CraveWallet | Sitio |
| --- | --- | --- |
| Gherkin | Escenarios *Given / When / Then* de los criterios de aceptación (sección 2.4.1), base de las pruebas de aceptación. | <https://cucumber.io/docs/gherkin/reference/> |
| JUnit 5 y Spring Boot Test | Suite ejecutable del backend, con pruebas unitarias y de integración mediante MockMvc, JWT y H2. | [Suite versionada del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/tree/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/src/test/java/pe/edu/upc/gastify/cravewallet) |
| Mockito y servidor HTTP local | Simulación del proveedor de cotización y comprobación de respuestas inválidas, caché y caídas sin depender de Internet. | [Pruebas de cotización](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/src/test/java/pe/edu/upc/gastify/cravewallet/ExchangeRateServiceTest.java) |
| Swagger UI y OpenAPI | Ejecución manual de solicitudes y consulta de los contratos publicados por el backend local. | [Especificación capturada](evidence/backend/openapi.json) |

*Fuente: elaboración del equipo Gastify.*

### 4.1.2. Source Code Management

El código fuente se gestiona en **GitHub**, bajo la organización [`1ACC0238-2620-4950-Gastify-CraveWallet`](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet).

Los repositorios del proyecto se listan en la tabla 142.

*Tabla 142. Repositorios del proyecto.*

| Repositorio | Descripción | URL |
| :--- | :--- | :--- |
| `CraveWallet-Report` | Informe del proyecto en formato Markdown | https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report |
| `cravewallet-landing` | Landing page (Next.js 16, React 19, TypeScript y Tailwind CSS 4) | https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/cravewallet-landing |
| `CraveWallet-Backend` | REST API del producto (Java 21 y Spring Boot 3) | https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend |

*Fuente: elaboración del equipo Gastify.*

***

**GitFlow**

El equipo usa **GitFlow** como estrategia de ramas: dos ramas permanentes y ramas de soporte de corta duración.

**Main Branches (ramas principales):**

* **`main`:** Rama principal del repositorio. Contiene únicamente código estable que ha sido verificado y aprobado para producción. Cada merge a esta rama representa una versión entregable del producto.
* **`develop`:** Rama de integración continua. Todos los features y fixes aprobados se fusionan aquí antes de ser promovidos a `main`. Es la rama base desde la que se crean las ramas de soporte.

**Support Branches (ramas de soporte):**

* **`feature/<nombre>`:** Creada a partir de `develop`. Se utiliza para desarrollar nuevas funcionalidades o secciones del reporte. Al finalizar el trabajo, se fusiona de vuelta en `develop` mediante un pull request.
* **`fix/<nombre>`:** Creada a partir de `develop`. Se utiliza para corregir errores encontrados en funcionalidades ya integradas en `develop`.
* **`docs/<nombre>`:** Creada a partir de `develop`. Se utiliza para agregar o actualizar documentación del informe sin impacto en el código de producción.
* **`hotfix/<nombre>`:** Creada directamente a partir de `main`. Se utiliza para corregir errores críticos en producción de forma urgente; se fusiona tanto en `main` como en `develop`.

***

**Conventional Commits**

Los mensajes de commit siguen el estándar **Conventional Commits**, con este formato:

```
<tipo>(<alcance>): <descripción breve>
```

La tabla 143 describe los tipos de commit utilizados en el proyecto.

*Tabla 143. Tipos de commit.*

| Tipo | Descripción |
| :--- | :--- |
| `feat` | Se añade una nueva funcionalidad al producto. |
| `fix` | Se corrige un error en el código o en el contenido del reporte. |
| `docs` | Cambios exclusivos en documentación, sin impacto en la lógica del sistema. |
| `style` | Cambios de formato o estilo que no afectan el comportamiento (espacios, indentación). |
| `refactor` | Mejoras internas del código que no añaden funcionalidad ni corrigen errores. |
| `chore` | Tareas de mantenimiento sin impacto en el código de producción (dependencias, configuración). |

*Fuente: elaboración del equipo Gastify.*

Ejemplo de commit real del proyecto:

```
feat(landing): build CraveWallet landing page
```

La figura 107 muestra el network graph de ramas del repositorio CraveWallet-Report en GitHub.

![Network graph de ramas del repositorio CraveWallet-Report en GitHub](images/chapter_4/network.png)

<!-- pdf:omit-start -->

*Figura 107. Network graph de ramas del repositorio CraveWallet-Report en GitHub.*

<!-- pdf:omit-end -->

*Fuente: captura del repositorio en GitHub.*

***

### 4.1.3. Source Code Style Guide & Conventions

Todos los repositorios siguen las mismas convenciones de estilo y nomenclatura. Toda la nomenclatura del código se escribe en **inglés**.

***

#### Convenciones generales de nomenclatura

Cada tipo de elemento usa una convención de capitalización:

* **PascalCase:** Nombres de componentes React, interfaces TypeScript, tipos y clases Java (`UserProfile`, `SubscriptionCard`, `SubscriptionController`).
* **camelCase:** Variables locales, parámetros, métodos Java, hooks y props (`userId`, `isLoading`, `handleSubmit`, `registerSubscription`).
* **lowercase con puntos:** Paquetes Java (`pe.edu.upc.gastify.cravewallet.subscriptions.domain.model`).
* **kebab-case:** Nombres de archivos, rutas de URL, selectores CSS/Tailwind personalizados y nombres de ramas Git (`user-profile.tsx`, `feature/subscription-list`).
* **SCREAMING_SNAKE_CASE:** Constantes globales, constantes `static final` de Java e identificadores de entorno (`API_BASE_URL`, `MAX_SUBSCRIPTIONS`).
* **snake_case:** Tablas y columnas de PostgreSQL (`subscriptions`, `renewal_date`).

***

#### HTML & CSS Style Guide

Basado en la *Google HTML/CSS Style Guide* y las directrices de la W3C:

* **HTML:** Uso obligatorio de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`) para mejorar el SEO y la accesibilidad. Indentación de 2 espacios. Uso de comillas dobles para todos los atributos. Los atributos `alt` en imágenes son obligatorios.
* **CSS / Tailwind CSS:** Se prioriza el uso de clases de utilidad de Tailwind CSS sobre hojas de estilo personalizadas. Cuando se requieran estilos globales adicionales, se definen en `globals.css` utilizando variables CSS (`--color-primary`). Se prohíbe el uso de estilos en línea (`style=""`).

***

#### TypeScript & React Style Guide

Siguiendo la *Google JavaScript Style Guide*, las directrices de MDN y la guía oficial de React:

* **TypeScript:** Tipado estricto habilitado (`strict: true` en `tsconfig.json`). Se prefiere `interface` sobre `type` para definir la forma de objetos. Los tipos de retorno de funciones se declaran explícitamente cuando no son evidentes.
* **Sintaxis:** Uso exclusivo de ES6+ (`arrow functions`, `destructuring`, `template literals`, `optional chaining`). Se prefiere `const` para todas las declaraciones; `let` se usa solo cuando la reasignación es estrictamente necesaria. Se prohíbe `var`.
* **React:** Los componentes se escriben exclusivamente como funciones (componentes funcionales). Los nombres de componentes siguen **PascalCase** y multi-word para evitar conflictos con elementos HTML estándar (correcto: `FeatureCard`; incorrecto: `Card`). Los efectos secundarios se gestionan con `useEffect`; el estado local con `useState` o `useReducer`.

***

#### Java & Spring Boot Style Guide

Basado en la *Google Java Style Guide* y las guías de referencia de Spring:

* **Formato:** Indentación de 4 espacios, una clase pública por archivo y llaves en la misma línea de la declaración. Los `import` se declaran de forma explícita, sin comodines (`*`).
* **Capas:** Cada Bounded Context se organiza en los paquetes `domain`, `application`, `interfaces` e `infrastructure`, como se describe en la sección 2.6. La capa `domain` no depende de Spring ni de JPA.
* **Spring:** Inyección de dependencias por constructor (sin `@Autowired` en atributos). Los controladores REST solo traducen peticiones a comandos o consultas y delegan en los servicios de aplicación. Los endpoints usan sustantivos en plural y kebab-case (`/api/v1/subscriptions`, `/api/v1/delivery-expenses`).
* **Modelado:** Los Value Objects y los DTO se declaran como `record` inmutables. Las entidades JPA se mantienen separadas de las entidades de dominio y se convierten mediante mappers.

***

#### Gherkin Conventions

Para la redacción de criterios de aceptación de las User Stories:

* **Formato:** Estructura estricta `Given / When / Then / And`.
* **Lenguaje:** Las especificaciones se redactan desde la perspectiva del negocio y del usuario, evitando detalles técnicos de implementación en los pasos de Gherkin.
* **Idioma:** El contenido de los escenarios se redacta en español para facilitar la validación con stakeholders no técnicos.

***

#### Referencias de estándares adoptados

La tabla 144 relaciona cada tecnología con la guía de estilo de referencia adoptada.

*Tabla 144. Referencias de estándares adoptados.*

| Tecnología | Referencia |
| :--- | :--- |
| HTML / CSS | Google HTML/CSS Style Guide / W3C |
| TypeScript | TypeScript Deep Dive / Microsoft TSConfig Reference |
| JavaScript | Google JS Style Guide / MDN Web Docs |
| React | React Docs — Thinking in React |
| Tailwind CSS | Tailwind CSS Docs — Utility-First Fundamentals |
| Java | Google Java Style Guide |
| Spring Boot | Spring Boot Reference Documentation |
| Gherkin | Gherkin Conventions for Readable Specifications |

*Fuente: elaboración del equipo Gastify.*

***

### 4.1.4. Software Deployment Configuration

El landing page se despliega en **Vercel**, que publica automáticamente cada cambio integrado en la rama `main` del repositorio `cravewallet-landing`.

***

**Herramientas y tecnologías desplegadas en el landing page:**

* **Next.js 16:** Framework utilizado como base del landing page, que provee el sistema de build y las optimizaciones de rendimiento en producción.
* **TypeScript:** Lenguaje compilado a JavaScript en tiempo de build; Vercel ejecuta `tsc` y `next build` como parte del pipeline de despliegue.
* **Tailwind CSS 4:** Procesado mediante PostCSS durante el build; los estilos no utilizados son eliminados automáticamente (purge) para reducir el tamaño del bundle.

***

**Pasos para el despliegue del Landing Page en Vercel:**

1. Conectar el repositorio `cravewallet-landing` a un proyecto en Vercel desde el dashboard de la plataforma.
2. Seleccionar la rama `main` como rama de producción y configurar el framework preset como **Next.js**.
3. Definir las variables de entorno necesarias en la sección *Environment Variables* del proyecto en Vercel.
4. Vercel ejecuta automáticamente `npm run build` (`next build`) al detectar un nuevo push o merge en `main`.
5. Una vez completado el build, el sitio queda publicado en la URL asignada por Vercel y disponible de forma global mediante su CDN.

La publicación pública se acredita con la figura 116 de 4.2.1.8 y el [registro del despliegue Production exitoso](evidence/deployment/vercel-production.json), cuyo commit coincide con `main` en el corte revisado. La captura del dashboard privado de Vercel queda pendiente de acceso a la cuenta del proyecto.

> **[IMAGEN PENDIENTE]:** Captura de la sección *Settings > Git* del proyecto en Vercel, mostrando la conexión con el repositorio de GitHub y la rama de producción configurada.

#### Configuración de ejecución del backend

El REST API se ejecutó localmente con Java 21 y el perfil `local`, que utiliza H2 en memoria y escucha en `127.0.0.1:8080`. Flyway aplica V1 para usuarios y sesiones, V2 para suscripciones y V3 para gastos de delivery y presupuestos. La tabla 145 distingue la configuración utilizada de los perfiles preparados para una base externa.

*Tabla 145. Configuración de ejecución del backend.*

| Elemento | Configuración verificada o preparada |
| --- | --- |
| Proyecto | `CraveWallet-Backend`, paquete raíz `pe.edu.upc.gastify.cravewallet`, commit `2f36260`. |
| Construcción | Java 21, Spring Boot 3.5.16, Maven Wrapper; comando `mvnw.cmd -B verify`. |
| Perfil ejecutado | `local`, H2 2.3.232 en memoria, `spring.jpa.hibernate.ddl-auto=validate` y Flyway habilitado. |
| API local | Puerto 8080; `/actuator/health`, `/v3/api-docs` y `/swagger-ui.html`. Las rutas de negocio requieren JWT. |
| Perfil `postgres` | URL, usuario y contraseña mediante `DATABASE_URL`, `DATABASE_USERNAME` y `DATABASE_PASSWORD`; requiere `JWT_SECRET` de al menos 32 bytes. Preparado, sin ejecución verificada. |
| Perfil `prod` | Exige las variables de base de datos y `JWT_SECRET`; Swagger público deshabilitado. No existe despliegue remoto verificado. |
| Datos y secretos locales | H2 pierde sus datos al detener el proceso. Sin `JWT_SECRET` se genera una clave efímera para el perfil local; no se publica una contraseña de usuario ni un token de acceso predeterminados. |

*Fuente: [configuración, migraciones y guía de ejecución del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/tree/2f36260dc1aa9b8e4ef71a7184847795e6cb6867), y [resultado de Maven](evidence/backend/maven-verify.txt).*

Con el servidor iniciado, se accede a `http://localhost:8080/swagger-ui.html`. Swagger muestra la versión del backend, el servidor local y las operaciones agrupadas por controlador (figura 109).

![Documentación OpenAPI del backend CraveWallet en Swagger UI.](evidence/backend/swagger-overview.jpg)

*Figura 109. Documentación OpenAPI del backend CraveWallet en Swagger UI.*

*Fuente: captura propia de Swagger UI, CraveWallet-Backend `2f36260`, entorno local H2, 8 de octubre de 2026 (America/Lima), con datos ficticios.*

## 4.2. Landing Page & Mobile Application Implementation

### 4.2.1. Sprint 1

#### 4.2.1.1. Sprint Planning 1

El alcance técnico del backend para TB1 comprende la autenticación, el portafolio de suscripciones, la conversión USD/PEN, los datos de recordatorios y el registro de gastos con presupuesto mensual. El objetivo es que estas operaciones puedan probarse mediante REST antes de conectar el cliente móvil. La tabla 146 presenta el objetivo y el incremento disponible al 8 de octubre de 2026.

*Tabla 146. Objetivo y alcance del backend presentado para TB1.*

| Aspecto | Alcance del backend |
| --- | --- |
| Objetivo técnico | Permitir que un usuario autenticado registre suscripciones y gastos propios, consulte sus totales y preserve sus datos frente a reintentos o solicitudes simultáneas. |
| Historias relacionadas | TS01–TS05 y las operaciones asociadas de US01–US03, US05–US13, US18 y US33. La cobertura es por operación de backend; no acredita sus pantallas ni el flujo completo en Android. |
| Incremento disponible | 16 métodos/rutas: seis de autenticación y perfil, seis de suscripciones y recordatorio, uno de cotización y tres de Delivery. |
| Verificación | 32 pruebas automatizadas aprobadas; ejercicio de las 16 rutas en el servidor local y revisión de Swagger con datos ficticios. |
| Alcance por cantidad de rutas | 16 de 22 rutas del inventario de trabajo: 72,7 %. Health, Swagger, filtros y reintentos no se cuentan como endpoints adicionales. |
| Trabajo restante | Búsqueda de comercios y cinco rutas de Premium; validación en dispositivo Android y evidencia de los spikes. El REST API ya está publicado con PostgreSQL en Render. |

*Fuente: [inventario versionado de endpoints](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs/tb1-endpoint-coverage.md) y evidencias de las secciones 4.2.1.5–4.2.1.7.*

El porcentaje corresponde al conteo de rutas del inventario técnico derivado de TS01–TS06 y las tablas de Interface Layer del capítulo II. No mide el esfuerzo de cada historia ni certifica por sí solo el porcentaje total de la entrega. Las fechas y acuerdos de una reunión de planificación no se deducen de los commits.

#### 4.2.1.2. Aspect Leaders and Collaborators

Para el backend, Anghelo Edwin Faustino Hurtado consolida la implementación y su documentación. La tabla 147 identifica el trabajo sustentado por el historial del repositorio; la atribución de otras colaboraciones requiere sus commits o revisiones.

*Tabla 147. Responsabilidad y evidencia disponible del backend.*

| Aspecto | Responsable de consolidación | Evidencia |
| --- | --- | --- |
| REST API, persistencia y seguridad | Anghelo Edwin Faustino Hurtado | Cinco commits de implementación registrados con el usuario Git `limozz05`, desde `1f1b39b` hasta `2f36260`. |
| Pruebas del backend | Anghelo Edwin Faustino Hurtado | Siete clases de prueba, 32 casos ejecutados y resultados de Maven del 8 de octubre de 2026. |
| Contratos y documentación | Anghelo Edwin Faustino Hurtado | Documentos de autenticación, suscripciones, Delivery, cotización y recordatorios; especificación OpenAPI capturada. |

*Fuente: [historial del backend al commit revisado](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commits/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/) y [resumen de pruebas](evidence/backend/test-results.json).*

#### 4.2.1.3. Sprint Backlog 1

La tabla 148 relaciona las tareas técnicas del backend con su implementación y verificación. Los estados corresponden al corte revisado del repositorio; no sustituyen el tablero del equipo ni asignan estimaciones retrospectivas de horas.

*Tabla 148. Tareas verificadas y pendientes del backend.*

| Historia | Task Id | Tarea de backend | Responsable | Estado y evidencia |
| --- | --- | --- | --- | --- |
| TS01 | BE01 | Registrar, autenticar y consultar/actualizar perfil; renovar y revocar sesiones. | Anghelo Faustino | Implementada y probada; `2c188be`. Perfil de referencia limitado a PEN. |
| TS02 | BE02 | Registrar, listar, consultar, editar y cancelar suscripciones propias. | Anghelo Faustino | Implementada y probada; `adfea26`. Cancelación conserva el registro y excluye el elemento del portafolio activo. |
| TS02 / TS03 | BE03 | Convertir el resumen mensual a PEN preservando importes originales. | Anghelo Faustino | Implementada y probada; `2f36260`. Disponibilidad y antigüedad de la tasa explícitas. |
| TS03 | BE04 | Consultar USD/PEN con caché y tratamiento de errores del proveedor. | Anghelo Faustino | Implementada y probada; caché por instancia de 24 horas y respaldo antiguo acotado. |
| TS04 | BE05 | Preparar título, descripción y fecha del recordatorio para una suscripción activa propia. | Anghelo Faustino | Implementada y probada; datos 24 horas antes de renovar, sin envío de push. |
| TS05 | BE06 | Registrar gastos sin duplicar reintentos y actualizar acumulados de forma transaccional. | Anghelo Faustino | Implementada y probada; `70c3f01`. UUID de solicitud por propietario. |
| TS05 | BE07 | Consultar resumen por mes y configurar o retirar el límite del presupuesto. | Anghelo Faustino | Implementada y probada; categorías, semanas, saldo y estado de exceso. |
| TS05 / US18 | BE08 | Consultar sugerencias de comercios. | Por asignar | Pendiente; el comercio manual ya permite registrar el gasto. |
| TS06 | BE09 | Checkout, estado, cancelación, historial de pagos y webhook de Premium. | Por asignar | Pendiente; no se presentan cobros ni acceso Premium como implementados. |
| Transversal | BE10 | Verificar PostgreSQL y publicar el REST API. | Por asignar | Pendiente; H2 y ejecución local son la evidencia disponible. |

*Fuente: [commits de implementación](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commits/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/) y contratos documentados en la sección 4.2.1.7.*

Los IDs BE01–BE10 identifican las tareas técnicas de esta tabla. La cobertura de US18 corresponde al registro manual del comercio, no a Google Places. El backend acepta PEN/USD y ciclos mensual/anual; el límite inicial es de cinco suscripciones activas por cuenta. Las reglas de Premium y las diferencias de contrato con la aplicación requieren acuerdo del equipo.

#### 4.2.1.4. Development Evidence for Sprint Review

La tabla 149 presenta los commits que construyen el incremento del backend. Sus enlaces apuntan a revisiones específicas para que la evidencia no cambie al avanzar `develop`.

*Tabla 149. Commits de desarrollo del backend.*

| Commit | Fecha (America/Lima) | Autor Git | Resultado |
| --- | --- | --- | --- |
| [1f1b39b](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commit/1f1b39b4bc5ab9cc42f96912579a3dc36e944375) | 08/10/2026 | `limozz05` | Base Java 21, Spring Boot, Maven Wrapper y separación modular según el informe. |
| [2c188be](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commit/2c188be9fef598d8824f49e4fdd44d27e2b83e9c) | 08/10/2026 | `limozz05` | Autenticación, perfil, JWT y sesiones revocables; migración V1. |
| [adfea26](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commit/adfea26a6318673b3cff46425ff1a6ed9debe7ad) | 08/10/2026 | `limozz05` | Suscripciones por propietario, edición, cancelación e historial de registros; migración V2. |
| [70c3f01](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commit/70c3f01b3a1407aca8eea33420a74290d609d4f7) | 08/10/2026 | `limozz05` | Gastos idempotentes, resúmenes y presupuesto mensual; migración V3. |
| [2f36260](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commit/2f36260dc1aa9b8e4ef71a7184847795e6cb6867) | 08/10/2026 | `limozz05` | Cotización con caché, conversión del portafolio, datos de recordatorio y correcciones OpenAPI. |

*Fuente: historial Git del repositorio CraveWallet-Backend.*

Los módulos `subscriptions` y `delivery` separan dominio, aplicación, interfaces e infraestructura. Los modelos de dominio no importan Spring ni JPA. IAM proporciona identidad y sesiones como capacidad técnica; `premium` conserva su estructura de paquetes, pero todavía no implementa facturación. Las entidades JPA se almacenan en tablas propias y se traducen a modelos de dominio.

Los controladores obtienen el propietario del JWT. Las contraseñas se almacenan mediante BCrypt y los tokens de renovación mediante hash SHA-256. Renovar revoca la sesión anterior; logout invalida los tokens de esa sesión. Los bloqueos transaccionales protegen el límite Free, los reintentos de gastos y la actualización del presupuesto. La implementación puede revisarse en el [código versionado](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/tree/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/src/main/java/pe/edu/upc/gastify/cravewallet).

#### 4.2.1.5. Testing Suite Evidence for Sprint Review

El comando `mvnw.cmd -B verify`, ejecutado con Java 21 el 8 de octubre de 2026, terminó con `BUILD SUCCESS`: 32 pruebas, cero fallos, cero errores y ningún caso omitido. La tabla 150 relaciona cada suite con los comportamientos comprobados.

*Tabla 150. Suite de pruebas ejecutada del backend.*

| Tipo de prueba | Clase | Casos | Comprobación principal |
| --- | --- | ---: | --- |
| Integración | `AuthIntegrationTest` | 8 | Registro y hashes, login, perfil propio, rotación concurrente, revocación y rechazo de JWT manipulados o vencidos. |
| Integración | `BackendBootstrapTest` | 3 | Health, documentación OpenAPI con esquemas de alta separados y protección de rutas de negocio. |
| Integración | `SubscriptionIntegrationTest` | 7 | Aislamiento entre cuentas, validación, edición, cancelación repetida, cupos concurrentes, filtros, totales, cotización y recordatorios. |
| Integración | `DeliveryIntegrationTest` | 5 | Presupuesto, períodos, validación, aislamiento, deduplicación y altas simultáneas con un reintento. |
| Unitaria de aplicación | `ExchangeRateServiceTest` | 5 | Caché de 24 horas, respaldo antiguo acotado, retroceso tras fallos, tasa inversa, fechas inválidas y concurrencia. |
| Adaptador HTTP aislado | `OpenExchangeRateAdapterTest` | 2 | Traducción HTTP y rechazo de respuestas inválidas o 429 mediante servidor local. |
| Unitaria de aplicación | `PortfolioConversionTest` | 2 | Conversión antes del redondeo mensual anual y conservación del portafolio cuando falta cotización. |
| **Total** | **7 clases** | **32** | **0 fallos, 0 errores, 0 omitidas.** |

*Fuente: [resumen extraído de Surefire](evidence/backend/test-results.json), [salida de Maven](evidence/backend/maven-verify.txt) y [fuentes de las pruebas](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/tree/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/src/test/java/pe/edu/upc/gastify/cravewallet).*

**Unit Tests y pruebas aisladas.** Siete casos prueban el servicio de cotización y la conversión del portafolio sin iniciar Spring. Otros dos casos verifican el adaptador del proveedor mediante un servidor HTTP de prueba: nueve casos aislados en total.

**Integration Tests.** Los 23 casos restantes inician el contexto de Spring y comprueban las rutas, seguridad, persistencia y migraciones con H2. Incluyen solicitudes simultáneas para validar la rotación de sesiones, el cupo de suscripciones y la deduplicación de gastos.

**Acceptance Tests.** Este corte no incluye una suite ejecutable de aceptación con Cucumber. Los criterios de las historias y las comprobaciones manuales de Swagger permiten revisar comportamientos del backend; la aceptación de los flujos móviles debe comprobarse cuando el cliente esté integrado.

Las pruebas de integración utilizan MockMvc, JWT y H2 con las migraciones reales. Las pruebas del proveedor usan simulaciones y un servidor HTTP local; no requieren acceso a Internet. Estos resultados verifican el backend en ese entorno, pero no acreditan PostgreSQL, instalación móvil ni pruebas de aceptación de las pantallas. El archivo [build.yaml](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/.github/workflows/build.yaml) configura `verify` en GitHub Actions; el resultado aquí presentado corresponde a la ejecución local.

#### 4.2.1.6. Execution Evidence for Sprint Review

Se ejecutó el backend local y se probaron sus 16 métodos/rutas mediante HTTP. En Swagger se revisaron registro, login, alta y listado de una suscripción USD, recordatorio, cotización, presupuesto, gasto y resumen. La tabla 151 muestra los resultados del ejercicio reproducible registrado en [live-api-results.json](evidence/backend/live-api-results.json).

*Tabla 151. Resultados observados de ejecución del backend local.*

| Flujo | Resultado observado |
| --- | --- |
| Registro y login | 201 y 200, respectivamente; consulta y actualización del perfil autenticado: 200. |
| Suscripciones | Alta: 201; listado, detalle, edición y cancelación local: 200. La consulta del historial conserva el registro cancelado. |
| Cotización y resumen | USD/PEN real consultado al proveedor; el portafolio devuelve total PEN, fuente y fecha. El valor cambia con cada actualización y no representa una tasa bancaria garantizada. |
| Recordatorio | 200 para el propietario; `reminderAt` está 24 horas antes de `billingAt`, con zona America/Lima. |
| Delivery y presupuesto | Presupuesto de S/ 100 y gasto ficticio de S/ 35,50: total S/ 35,50 y saldo S/ 64,50. Reintentar el mismo registro devuelve 200 sin duplicar el gasto. |
| Renovación y logout | Renovación: 200; logout: 204; usar luego el token revocado: 401. |
| Swagger | Formularios de alta diferenciados para Delivery y Suscripciones; alta de suscripción documentada con 201 y reintento de Delivery con 200. |

*Fuente: [registro de ejecución HTTP](evidence/backend/live-api-results.json), [especificación OpenAPI](evidence/backend/openapi.json) y pruebas de integración de la tabla 150.*

La información utilizada fue ficticia y se almacenó en H2 local. El endpoint de recordatorio prepara datos; no agenda un evento ni envía notificaciones. Como el modelo conserva una fecha sin hora, la renovación se representa provisionalmente a las 00:00 de America/Lima. La aplicación deberá comprobar que la fecha del aviso aún sea futura antes de agendarlo.

Se ejecutó `POST /api/v1/subscriptions` con una suscripción ficticia en PEN. La respuesta contiene el identificador, el estado `ACTIVE`, la fecha de renovación y la cabecera `Location` (figura 110).

![Registro de una suscripción: HTTP 201 y recurso creado.](evidence/backend/swagger-subscription-created.jpg)

*Figura 110. Registro de una suscripción: HTTP 201 y recurso creado.*

*Fuente: captura propia de Swagger UI, CraveWallet-Backend `2f36260`, entorno local H2, 8 de octubre de 2026 (America/Lima), con datos ficticios.*

Antes del alta anterior, se consultó el portafolio con una suscripción de USD 9,99. El servidor devolvió `monthlyTotalPen=34.37` y `conversionAvailable=true`; la tasa utilizada y sus fechas están conservadas en el [JSON de esta consulta](evidence/backend/swagger-subscriptions-response.json) (figura 111).

![Consulta del portafolio de suscripciones: HTTP 200 y conversión a PEN.](evidence/backend/swagger-subscriptions-response.jpg)

*Figura 111. Consulta del portafolio de suscripciones: HTTP 200 y conversión a PEN.*

*Fuente: captura propia de Swagger UI, CraveWallet-Backend `2f36260`, entorno local H2, 8 de octubre de 2026 (America/Lima), con datos ficticios.*

Con un presupuesto de S/ 100 y un gasto de S/ 35,50 en octubre de 2026, el resumen devuelve el total, el saldo y los desgloses por categoría y semana (figura 112).

![Resumen de Delivery: HTTP 200, gasto S/ 35,50 y saldo S/ 64,50.](evidence/backend/swagger-summary-response.jpg)

*Figura 112. Resumen de Delivery: HTTP 200, gasto S/ 35,50 y saldo S/ 64,50.*

*Fuente: captura propia de Swagger UI, CraveWallet-Backend `2f36260`, entorno local H2, 8 de octubre de 2026 (America/Lima), con datos ficticios.*

La consulta del recordatorio devuelve `reminderAt=2026-11-07T05:00:00Z` y `billingAt=2026-11-08T05:00:00Z`, con zona `America/Lima`. Esta operación entrega los datos para el cliente; no inserta un evento en el calendario (figura 113).

![Datos del recordatorio: HTTP 200 y aviso 24 horas antes de la renovación.](evidence/backend/swagger-reminder-response.jpg)

*Figura 113. Datos del recordatorio: HTTP 200 y aviso 24 horas antes de la renovación.*

*Fuente: captura propia de Swagger UI, CraveWallet-Backend `2f36260`, entorno local H2, 8 de octubre de 2026 (America/Lima), con datos ficticios.*

#### 4.2.1.7. Services Documentation Evidence for Sprint Review

OpenAPI documenta los contratos y Swagger permite ejecutarlos con una sesión de prueba. La tabla 152 contiene las 16 rutas implementadas; la [especificación capturada](evidence/backend/openapi.json) permite revisar sus esquemas sin depender de que el servidor local continúe encendido.

*Tabla 152. Endpoints implementados y documentados del backend.*

| Método | Ruta | Acceso | Parámetros o cuerpo JSON | Resultado exitoso |
| --- | --- | --- | --- | --- |
| POST | `/api/v1/auth/register` | Sin JWT | JSON: `email`, `password`. | 201; perfil y tokens. |
| POST | `/api/v1/auth/login` | Sin JWT | JSON: `email`, `password`. | 200; perfil y tokens. |
| POST | `/api/v1/auth/refresh` | Token de renovación en el cuerpo | JSON: `refreshToken`. | 200; nuevo par de tokens, anterior revocado. |
| POST | `/api/v1/auth/logout` | Bearer JWT | Sin cuerpo ni parámetros. | 204; sesión revocada. |
| GET | `/api/v1/users/me` | Bearer JWT | Sin parámetros; usuario obtenido del JWT. | 200; perfil propio. |
| PATCH | `/api/v1/users/me` | Bearer JWT | JSON: `referenceCurrency="PEN"`. | 200; moneda de referencia PEN. |
| POST | `/api/v1/subscriptions` | Bearer JWT | JSON: `name`, `amount`, `currency`, `category`, `billingCycle`, `nextBillingDate`. | 201; registro activo y cabecera Location. |
| GET | `/api/v1/subscriptions` | Bearer JWT | Query opcional: `status` (ACTIVE por defecto), `search`, `category`. | 200; registros, desglose por moneda y estimación PEN. |
| GET | `/api/v1/subscriptions/{id}` | Bearer JWT y propiedad | Path: `id` UUID. | 200; detalle. |
| PATCH | `/api/v1/subscriptions/{id}` | Bearer JWT y propiedad | Path: `id` UUID; JSON con al menos uno de `amount`, `category`, `nextBillingDate`. | 200; importe, categoría o fecha actualizados. |
| POST | `/api/v1/subscriptions/{id}/cancel` | Bearer JWT y propiedad | Path: `id` UUID; sin cuerpo. | 200; cancelación local idempotente. |
| GET | `/api/v1/subscriptions/{id}/reminder` | Bearer JWT y propiedad | Path: `id` UUID; sin cuerpo. | 200; datos del aviso para registro activo. |
| GET | `/api/v1/exchange-rate` | Bearer JWT | Query: `from=USD`, `to=PEN` por defecto; monedas admitidas PEN/USD. | 200; tasa PEN/USD, fuente, fechas y condición de antigüedad. |
| POST | `/api/v1/delivery-expenses` | Bearer JWT | JSON: `requestId` UUID, `merchant`, `amount`, `category`, `expenseDate`. | 201 al crear; 200 ante un reintento idéntico. |
| GET | `/api/v1/delivery-expenses/summary` | Bearer JWT | Query: `year`, `month`; ambos numéricos o ninguno para el período actual de Lima. | 200; período, total, límite, saldo, categorías y semanas. |
| PUT | `/api/v1/delivery-expenses/budget` | Bearer JWT | JSON: `year`, `month`, `spendingLimit` (null para retirar el límite). | 200; límite opcional y acumulado del período. |

*Fuente: [OpenAPI capturado](evidence/backend/openapi.json) y [contratos del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/tree/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs).*

Los contratos ampliados se encuentran en [autenticación y perfil](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs/auth-api.md), [suscripciones](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs/subscriptions-api.md), [Delivery](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs/delivery-api.md) y [cotización/recordatorios](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs/exchange-and-reminders-api.md). Describen cuerpos JSON, límites, filtros y errores. Los importes usan `BigDecimal`; no se suman monedas diferentes sin cotización.

Los errores incluyen 400 para datos inválidos, 401 para autenticación no válida, 404 para recursos inexistentes o ajenos y 409 para conflictos de estado, cupos o reintentos con contenido distinto. La cotización devuelve 503 si no hay un valor utilizable. El portafolio conserva los importes originales y devuelve `monthlyTotalPen=null` con `conversionAvailable=false` si no puede convertirlos.

La caché USD/PEN dura 24 horas por instancia; ante un fallo, puede usar una tasa anterior de menos de siete días indicando `stale=true`. La [documentación del proveedor](https://www.exchangerate-api.com/docs/free) exige atribución para el endpoint Open Access; el contrato devuelve `attributionUrl` para que la interfaz la muestre. Esta política y la hora del recordatorio son decisiones iniciales que el equipo debe validar.

**Ejemplo de alta de suscripción.** La figura 114 muestra el cuerpo enviado desde Swagger a `POST /api/v1/subscriptions`, con `Content-Type: application/json` y una sesión Bearer autorizada. Los seis campos del cuerpo son obligatorios. `currency` admite PEN/USD y `billingCycle` admite MONTHLY/ANNUAL; la fecha debe ser actual o futura en America/Lima.

```json
{
  "name": "Música de prueba",
  "amount": 19.9,
  "currency": "PEN",
  "category": "Entretenimiento",
  "billingCycle": "MONTHLY",
  "nextBillingDate": "2026-11-08"
}
```

![Cuerpo JSON de alta de suscripción en Swagger](evidence/backend/swagger-subscription-request.jpg)

*Figura 114. Cuerpo JSON de alta de una suscripción en Swagger UI.*

*Fuente: captura propia del backend local `2f36260`, 8 de octubre de 2026 (America/Lima). La respuesta real se presenta en la figura 110 y en [swagger-subscription-created.json](evidence/backend/swagger-subscription-created.json).*

**Ejemplo de consulta del resumen mensual.** La figura 115 muestra los parámetros de `GET /api/v1/delivery-expenses/summary?year=2026&month=10`. El propietario se obtiene de la sesión y los importes se expresan en PEN.

![Parámetros de consulta del resumen mensual en Swagger](evidence/backend/swagger-summary-request.jpg)

*Figura 115. Parámetros year y month para consultar el resumen de Delivery.*

*Fuente: captura propia del backend local `2f36260`, 8 de octubre de 2026 (America/Lima).*

La respuesta HTTP 200 de la figura 112 contiene el siguiente JSON, [conservado desde Swagger](evidence/backend/swagger-summary-response.json):

```json
{
  "currency": "PEN",
  "exceeded": false,
  "month": 10,
  "remaining": 64.5,
  "spendingLimit": 100,
  "total": 35.5,
  "totalsByCategory": {
    "Comida": 35.5
  },
  "totalsByWeek": {
    "2": 35.5
  },
  "year": 2026
}
```

Las capturas se encuadran en los resultados para mostrar el código HTTP y el cuerpo sin publicar la cabecera Authorization del ejemplo Curl.

#### 4.2.1.8. Software Deployment Evidence for Sprint Review

La [landing page de CraveWallet](https://cravewallet-landing.vercel.app/es) está publicada en Vercel; se comprobó nuevamente una respuesta HTTP 200 el 9 de octubre de 2026 (America/Lima). El [registro del despliegue Production](evidence/deployment/vercel-production.json) acredita el estado `success` de la revisión `3cdc4c5`. El REST API también está publicado en **https://cravewallet-api.onrender.com**, con PostgreSQL 17 y el perfil `prod`. La tabla 153 distingue la ejecución local, la publicación remota y la validación Android pendiente en dispositivo.

*Tabla 153. Estado de ejecución y despliegue del backend.*

| Entorno o artefacto | Estado | Evidencia |
| --- | --- | --- |
| Backend local con H2 | Ejecutado | Health, 16 rutas ejercitadas y 32 pruebas; tablas 150–152. |
| JAR ejecutable | Generado | Maven termina con `BUILD SUCCESS`; Spring Boot empaqueta `cravewallet-backend-0.1.0-SNAPSHOT.jar`. |
| PostgreSQL 17 en Render | Ejecutado | Flyway V1–V3; 22 comprobaciones HTTP remotas y siete después del reinicio. Se conservaron sesión, suscripción editada y presupuesto/gasto. [Resultados remotos](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/740aba0/docs/evidence/cloud/remote-api-results.json). La configuración de Compose local no se ejecutó. |
| Perfil de producción | Publicado | Contenedor Java 21 sin usuario root; conexión interna a PostgreSQL, variables privadas persistentes y Swagger público deshabilitado. Corte de código desplegado: `67ede2a`. |
| URL pública y HTTPS del REST API | Verificados | [Health público](https://cravewallet-api.onrender.com/actuator/health): HTTP 200 y `UP`, comprobados el 9 de octubre de 2026 a las 00:57:35 (America/Lima), tras el arranque del servicio. [Respuesta registrada](evidence/deployment/health-publico.json). La figura 117 conserva la evidencia versionada de Render `Live`; la figura 118 muestra el arranque observado en esta sesión. |
| Integración del cliente Android con el backend | Implementada y probada contra HTTPS público | [Commit `27c99a2`](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Mobile/commit/27c99a2dcdae1fe24deeed1c0a7590856b9999f8) en `feature/backend-integration`: autenticación, sesiones, suscripciones, cotización y Delivery. [Resultados de las nueve pruebas](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Mobile/blob/27c99a2dcdae1fe24deeed1c0a7590856b9999f8/docs/integration-test-results.json), incluida una contra el backend real local; cero fallos. La misma suite se ejecutó contra Render y PostgreSQL: nueve pruebas, cero fallos; [resultados de integración pública](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Mobile/blob/73c5785/docs/cloud-integration-results.json). El APK de esa rama utiliza la URL HTTPS pública de forma predeterminada. |
| Validación en dispositivo Android | Pendiente | APK generado; las pruebas de UI utilizaron Robolectric. Falta comprobar el flujo completo y permisos de calendario/notificaciones en dispositivo o emulador. |

*Fuente adicional del despliegue remoto: [guía y evidencia de Render](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/740aba0/docs/cloud-deployment.md). El plan gratuito puede tardar unos minutos en despertar; el panel muestra vencimiento de la base el 7 de noviembre de 2026. No se acredita todavía validación en un dispositivo Android.*

*Fuente: [guía de ejecución y configuración del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/README.md) y [resultado del build](evidence/backend/maven-verify.txt).*

Para reproducir el entorno local se requiere Java 21: definir `JAVA_HOME`, ejecutar `mvnw.cmd -B verify` y luego `mvnw.cmd spring-boot:run` en el repositorio del backend. El perfil por defecto utiliza H2. Para probar PostgreSQL, el equipo debe configurar las credenciales de `.env` para Compose y las variables del proceso Java; los secretos no se incluyen en este informe. El bind local `127.0.0.1` requiere una configuración de conectividad específica antes de intentar acceso desde otro dispositivo.


La figura 116 muestra la landing servida en su URL pública. Esta captura acredita la publicación de la interfaz, no la ejecución de todas las funciones anunciadas ni la configuración privada del proyecto en Vercel.

![Landing de CraveWallet publicada en Vercel](evidence/deployment/landing-publica.jpg)

<!-- pdf:omit-start -->

*Figura 116. Landing de CraveWallet publicada en Vercel.*

<!-- pdf:omit-end -->

*Fuente: captura del equipo Gastify del [sitio público](https://cravewallet-landing.vercel.app/es), 9 de octubre de 2026; procedencia y fecha en [el registro de capturas](evidence/deployment/capturas.json).*

La figura 117 reproduce la captura de Render previamente versionada por el equipo. El panel identifica el servicio Docker `cravewallet-api`, la URL pública, la rama de publicación y el corte `67ede2a` con estado `Live`. Es evidencia de ese corte; no se presenta como una captura nueva del dashboard privado.

![Servicio cravewallet-api Live en la evidencia versionada de Render](evidence/deployment/render-live-versionado.png)

<!-- pdf:omit-start -->

*Figura 117. Servicio cravewallet-api Live en la evidencia versionada de Render.*

<!-- pdf:omit-end -->

*Fuente: equipo Gastify; copia íntegra de [render-live.png en la revisión 740aba0 del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/740aba0/docs/evidence/cloud/render-live.png).*

La figura 118 registra el intersticial `Application loading` mostrado por Render al abrir el health público el 9 de octubre de 2026. Sus mensajes pertenecen a la pantalla de espera de la plataforma; no son logs del backend ni demuestran que la aplicación esté lista. El primer intento HTTP agotó 45 segundos. La petición posterior devolvió HTTP 200 y `UP` a las 00:57:35 (America/Lima), según la [respuesta preservada](evidence/deployment/health-publico.json). El navegador conservó el intersticial, por lo que no se atribuye ese estado `UP` a la captura.

![Pantalla de arranque de Render al acceder al health público](evidence/deployment/render-arranque.jpg)

<!-- pdf:omit-start -->

*Figura 118. Pantalla de arranque de Render al acceder al health público.*

<!-- pdf:omit-end -->

*Fuente: captura del equipo Gastify al acceder al [health público](https://cravewallet-api.onrender.com/actuator/health), 9 de octubre de 2026; registro de procedencia en [capturas.json](evidence/deployment/capturas.json).*

#### 4.2.1.9. Team Collaboration Insights during Sprint

El historial del backend al commit `2f36260` contiene cinco commits de implementación bajo `limozz05`, correspondientes a la base del proyecto, identidad y sesiones, suscripciones, Delivery y cotización/recordatorios. La tabla 154 relaciona esa participación con sus artefactos comprobables.

*Tabla 154. Participación sustentada en el backend.*

| Trabajo | Evidencia de colaboración disponible |
| --- | --- |
| Implementación consolidada por Anghelo Faustino | Cinco commits enlazados en la tabla 149; suites y contratos versionados. |
| Interfaces para integración | [Contratos y observaciones de integración móvil](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs/mobile-integration.md). El cliente se conectó al backend local en `feature/backend-integration` y al HTTPS público en `feature/cloud-api`; el [procedimiento de integración y sus límites](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Mobile/blob/27c99a2dcdae1fe24deeed1c0a7590856b9999f8/docs/backend-integration.md) permite reproducir la comprobación. Falta validar en dispositivo Android. |
| Revisión por otros integrantes | No se identifican revisiones o commits adicionales del backend en este corte. Deben registrarse cuando se realicen para sustentar su participación. |
| Coordinación siguiente | Validar políticas Free/Premium y horario del recordatorio; validar la integración en dispositivo Android y registrar el cierre de los spikes. PostgreSQL y el REST API público ya se comprobaron. |

*Fuente: [historial del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commits/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/), contratos y evidencias de esta sección.*

La implementación del backend contó con apoyo de IA para preparar y corregir código, pruebas y documentación; Anghelo consolida esta entrega. La responsabilidad del equipo incluye revisar los contratos y sustentar las decisiones de seguridad, persistencia, concurrencia y manejo de errores. El historial Git demuestra cambios registrados, pero no permite atribuir reuniones, horas de trabajo ni comprensión individual que no hayan sido verificadas.

## 4.3. Validation Interviews

### 4.3.1. Diseño de Entrevistas

[[PENDIENTE]]

### 4.3.2. Registro de Entrevistas

[[PENDIENTE]]

### 4.3.3. Evaluaciones según heurísticas

[[PENDIENTE]]
