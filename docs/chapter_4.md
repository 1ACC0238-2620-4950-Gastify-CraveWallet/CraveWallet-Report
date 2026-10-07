# Capítulo IV: Product Implementation & Validation

## 4.1. Software Configuration Management

### 4.1.1. Software Development Environment Configuration

En esta sección se detallan las herramientas y plataformas utilizadas por el equipo de CraveWallet para la gestión, diseño, desarrollo y pruebas del producto, con el objetivo de garantizar un entorno de trabajo homogéneo y reproducible para todos los integrantes.

---

**Project Management**

La gestión del proyecto tiene como objetivo organizar el trabajo del equipo y dar seguimiento al avance de las tareas planificadas en cada iteración de desarrollo.

* **GitHub Projects:** Plataforma integrada en el repositorio de GitHub que permite gestionar el backlog del producto, planificar sprints y hacer seguimiento de issues mediante tableros Kanban. Se utiliza como herramienta central de planificación y coordinación del equipo.
  | Link de referencia: | https://github.com/features/project-management |
  | --- | --- |

* **Trello:** Herramienta visual de gestión de tareas basada en tableros y tarjetas. Se emplea para organizar el flujo de trabajo del sprint en columnas como "To Do", "In Progress" y "Done", permitiendo al equipo monitorear el estado de cada tarea en tiempo real.
  | Link de referencia: | https://trello.com/ |
  | --- | --- |

---

**Product UX/UI Design**

Las siguientes herramientas permiten modelar la experiencia del usuario, establecer la arquitectura de información y construir los prototipos visuales del producto antes de su implementación.

* **Figma:** Editor de interfaces y herramienta de prototipado web colaborativa en tiempo real. Se utiliza para diseñar los wireframes de baja fidelidad, los mockups de alta fidelidad y el sistema de diseño de CraveWallet, abarcando tanto la aplicación móvil como el landing page.
  | Link de referencia: | https://www.figma.com/ |
  | --- | --- |

* **Uxpressia:** Plataforma en línea para el mapeo de la experiencia del usuario. Permite construir User Personas, Empathy Maps y Customer Journey Maps, herramientas utilizadas en la fase de needfinding para comprender las necesidades y motivaciones del segmento objetivo.
  | Link de referencia: | https://uxpressia.com/ |
  | --- | --- |

* **Miro:** Pizarra digital colaborativa utilizada para la sesión de Event Storming del dominio de CraveWallet. Permite que múltiples integrantes del equipo trabajen simultáneamente en la identificación de eventos de dominio, comandos y agregados.
  | Link de referencia: | https://miro.com/ |
  | --- | --- |

* **Structurizr:** Herramienta de modelado de arquitectura de software basada en el modelo C4. Se emplea para representar el contexto del sistema, los contenedores y los componentes de la solución de forma estructurada y versionable.
  | Link de referencia: | https://structurizr.com/ |
  | --- | --- |

---

**Software Development**

Las herramientas listadas a continuación conforman el entorno técnico de desarrollo del landing page y las aplicaciones de CraveWallet.

* **GitHub:** Plataforma de alojamiento de repositorios de código fuente basada en Git. Centraliza el control de versiones, la revisión de pull requests y la integración continua del proyecto.
  | Link de referencia: | https://github.com/ |
  | --- | --- |

* **Visual Studio Code:** Editor de código fuente ligero y extensible desarrollado por Microsoft. Es el IDE principal del equipo para el desarrollo del landing page y las aplicaciones web, con soporte nativo para TypeScript, React y extensiones de Tailwind CSS.
  | Link de referencia: | https://code.visualstudio.com/ |
  | --- | --- |

* **WebStorm:** IDE de JetBrains orientado al desarrollo JavaScript y TypeScript. Ofrece análisis estático avanzado, refactoring inteligente y depuración integrada, empleado como alternativa a VS Code por algunos integrantes del equipo.
  | Link de referencia: | https://www.jetbrains.com/webstorm/ |
  | --- | --- |

* **HTML5:** Lenguaje de marcado estándar para la estructuración semántica del contenido web. Se emplea como base de las plantillas JSX/TSX que componen los componentes de React en el landing page.
  | Link de referencia: | https://developer.mozilla.org/es/docs/Web/HTML |
  | --- | --- |

* **CSS3:** Lenguaje de estilos para la presentación visual de las interfaces. Se utiliza en combinación con Tailwind CSS para el diseño del landing page y la aplicación web.
  | Link de referencia: | https://developer.mozilla.org/es/docs/Web/CSS |
  | --- | --- |

* **TypeScript:** Superconjunto tipado de JavaScript que añade verificación estática de tipos. Es el lenguaje principal del proyecto, utilizado tanto en el landing page como en las aplicaciones para reducir errores en tiempo de desarrollo.
  | Link de referencia: | https://www.typescriptlang.org/ |
  | --- | --- |

* **React 19:** Biblioteca de JavaScript para la construcción de interfaces de usuario basadas en componentes reutilizables. Constituye la base del frontend del landing page y de la aplicación web de CraveWallet.
  | Link de referencia: | https://react.dev/ |
  | --- | --- |

* **Next.js 16:** Framework de React para aplicaciones web con soporte a renderizado del lado del servidor (SSR), generación estática (SSG) y enrutamiento basado en el sistema de archivos. Se utiliza para el desarrollo y despliegue del landing page de CraveWallet.
  | Link de referencia: | https://nextjs.org/ |
  | --- | --- |

* **Tailwind CSS 4:** Framework de utilidades CSS que permite construir interfaces personalizadas directamente en el marcado, sin escribir hojas de estilo separadas. Se emplea para el estilizado del landing page, garantizando consistencia visual con el sistema de diseño definido en el capítulo III.
  | Link de referencia: | https://tailwindcss.com/ |
  | --- | --- |

* **Vercel:** Plataforma de despliegue en la nube optimizada para proyectos Next.js. Permite publicar el landing page de forma automática al hacer merge en la rama principal, con previsualización de ramas por pull request.
  | Link de referencia: | https://vercel.com/ |
  | --- | --- |

---

**Software Testing**

* **Lenguaje Gherkin:** DSL (Domain-Specific Language) utilizado para redactar criterios de aceptación en formato legible por negocio. Los escenarios de prueba se estructuran con las palabras clave `Feature`, `Scenario`, `Given`, `When`, `Then` y `And`, y se utilizan como base para los acceptance tests de las User Stories del producto.

---

### 4.1.2. Source Code Management

En esta sección se describe la estrategia de gestión de código fuente (SCM, *Source Code Management*) adoptada por el equipo para garantizar la trazabilidad, organización y colaboración en el desarrollo del producto. Se emplea **GitHub** como sistema de control de versiones distribuido, bajo la organización [`1ACC0238-2620-4950-Gastify-CraveWallet`](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet).

Los repositorios del proyecto son:

| Repositorio | Descripción | URL |
| :--- | :--- | :--- |
| `CraveWallet-Report` | Informe del proyecto en formato Markdown | https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report |
| `cravewallet-landing` | Landing page estática (Next.js + Tailwind CSS) | https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/cravewallet-landing |
| `CraveWallet-Backend` | API RESTful del producto | https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend |

---

**GitFlow**

El equipo adopta el modelo **GitFlow** como estrategia de ramificación. Este flujo organiza el trabajo en ramas de larga duración y ramas de soporte de corta duración, permitiendo el desarrollo paralelo de funcionalidades sin afectar la estabilidad del código en producción.

**Main Branches (ramas principales):**

* **`main`:** Rama principal del repositorio. Contiene únicamente código estable que ha sido verificado y aprobado para producción. Cada merge a esta rama representa una versión entregable del producto.
* **`develop`:** Rama de integración continua. Todos los features y fixes aprobados se fusionan aquí antes de ser promovidos a `main`. Es la rama base desde la que se crean las ramas de soporte.

**Support Branches (ramas de soporte):**

* **`feature/<nombre>`:** Creada a partir de `develop`. Se utiliza para desarrollar nuevas funcionalidades o secciones del reporte. Al finalizar el trabajo, se fusiona de vuelta en `develop` mediante un pull request.
* **`fix/<nombre>`:** Creada a partir de `develop`. Se utiliza para corregir errores encontrados en funcionalidades ya integradas en `develop`.
* **`docs/<nombre>`:** Creada a partir de `develop`. Se utiliza para agregar o actualizar documentación del informe sin impacto en el código de producción.
* **`hotfix/<nombre>`:** Creada directamente a partir de `main`. Se utiliza para corregir errores críticos en producción de forma urgente; se fusiona tanto en `main` como en `develop`.

---

**Conventional Commits**

Para garantizar un historial de commits legible y semánticamente significativo, el equipo sigue el estándar de **Conventional Commits**. El formato base es:

```
<tipo>(<alcance>): <descripción breve>
```

Los tipos de commit utilizados en el proyecto son:

| Tipo | Descripción |
| :--- | :--- |
| `feat` | Se añade una nueva funcionalidad al producto. |
| `fix` | Se corrige un error en el código o en el contenido del reporte. |
| `docs` | Cambios exclusivos en documentación, sin impacto en la lógica del sistema. |
| `style` | Cambios de formato o estilo que no afectan el comportamiento (espacios, indentación). |
| `refactor` | Mejoras internas del código que no añaden funcionalidad ni corrigen errores. |
| `chore` | Tareas de mantenimiento sin impacto en el código de producción (dependencias, configuración). |

Ejemplo de commit real del proyecto:

```
feat(landing): build CraveWallet landing page
```

![Network graph de ramas del repositorio CraveWallet-Report en GitHub](images/chapter_4/network.png)

---

### 4.1.3. Source Code Style Guide & Conventions

El equipo ha definido un conjunto de convenciones de estilo y nomenclatura con el objetivo de garantizar la legibilidad, mantenibilidad y coherencia del código en todos los repositorios del proyecto. Como regla transversal y obligatoria, toda la nomenclatura del sistema se redacta en **inglés**.

---

#### Convenciones generales de nomenclatura

Se adoptan las siguientes convenciones de capitalización según la naturaleza del elemento:

* **PascalCase:** Nombres de componentes React, interfaces TypeScript y tipos (`UserProfile`, `SubscriptionCard`).
* **camelCase:** Variables locales, parámetros de función, hooks y props (`userId`, `isLoading`, `handleSubmit`).
* **kebab-case:** Nombres de archivos, rutas de URL, selectores CSS/Tailwind personalizados y nombres de ramas Git (`user-profile.tsx`, `feature/subscription-list`).
* **SCREAMING_SNAKE_CASE:** Constantes globales e identificadores de entorno (`API_BASE_URL`, `MAX_SUBSCRIPTIONS`).

---

#### HTML & CSS Style Guide

Basado en la *Google HTML/CSS Style Guide* y las directrices de la W3C:

* **HTML:** Uso obligatorio de etiquetas semánticas (`<header>`, `<main>`, `<section>`, `<footer>`) para mejorar el SEO y la accesibilidad. Indentación de 2 espacios. Uso de comillas dobles para todos los atributos. Los atributos `alt` en imágenes son obligatorios.
* **CSS / Tailwind CSS:** Se prioriza el uso de clases de utilidad de Tailwind CSS sobre hojas de estilo personalizadas. Cuando se requieran estilos globales adicionales, se definen en `globals.css` utilizando variables CSS (`--color-primary`). Se prohíbe el uso de estilos en línea (`style=""`).

---

#### TypeScript & React Style Guide

Siguiendo la *Google JavaScript Style Guide*, las directrices de MDN y la guía oficial de React:

* **TypeScript:** Tipado estricto habilitado (`strict: true` en `tsconfig.json`). Se prefiere `interface` sobre `type` para definir la forma de objetos. Los tipos de retorno de funciones se declaran explícitamente cuando no son evidentes.
* **Sintaxis:** Uso exclusivo de ES6+ (`arrow functions`, `destructuring`, `template literals`, `optional chaining`). Se prefiere `const` para todas las declaraciones; `let` se usa solo cuando la reasignación es estrictamente necesaria. Se prohíbe `var`.
* **React:** Los componentes se escriben exclusivamente como funciones (componentes funcionales). Los nombres de componentes siguen **PascalCase** y multi-word para evitar conflictos con elementos HTML estándar (correcto: `FeatureCard`; incorrecto: `Card`). Los efectos secundarios se gestionan con `useEffect`; el estado local con `useState` o `useReducer`.

---

#### Gherkin Conventions

Para la redacción de criterios de aceptación de las User Stories:

* **Formato:** Estructura estricta `Given / When / Then / And`.
* **Lenguaje:** Las especificaciones se redactan desde la perspectiva del negocio y del usuario, evitando detalles técnicos de implementación en los pasos de Gherkin.
* **Idioma:** El contenido de los escenarios se redacta en español para facilitar la validación con stakeholders no técnicos.

---

#### Referencias de estándares adoptados

| Tecnología | Referencia |
| :--- | :--- |
| HTML / CSS | Google HTML/CSS Style Guide / W3C |
| TypeScript | TypeScript Deep Dive / Microsoft TSConfig Reference |
| JavaScript | Google JS Style Guide / MDN Web Docs |
| React | React Docs — Thinking in React |
| Tailwind CSS | Tailwind CSS Docs — Utility-First Fundamentals |
| Gherkin | Gherkin Conventions for Readable Specifications |

---

### 4.1.4. Software Deployment Configuration

La gestión del código fuente se realiza a través de **GitHub** bajo la organización del proyecto. Para el despliegue del landing page se utiliza **Vercel**, plataforma de nube optimizada para proyectos Next.js que permite publicar cambios de forma automática al integrar código en la rama `main`.

---

**Herramientas y tecnologías desplegadas en el landing page:**

* **Next.js 16:** Framework utilizado como base del landing page, que provee el sistema de build y las optimizaciones de rendimiento en producción.
* **TypeScript:** Lenguaje compilado a JavaScript en tiempo de build; Vercel ejecuta `tsc` y `next build` como parte del pipeline de despliegue.
* **Tailwind CSS 4:** Procesado mediante PostCSS durante el build; los estilos no utilizados son eliminados automáticamente (purge) para reducir el tamaño del bundle.

---

**Pasos para el despliegue del Landing Page en Vercel:**

1. Conectar el repositorio `cravewallet-landing` a un proyecto en Vercel desde el dashboard de la plataforma.
2. Seleccionar la rama `main` como rama de producción y configurar el framework preset como **Next.js**.
3. Definir las variables de entorno necesarias en la sección *Environment Variables* del proyecto en Vercel.
4. Vercel ejecuta automáticamente `npm run build` (`next build`) al detectar un nuevo push o merge en `main`.
5. Una vez completado el build, el sitio queda publicado en la URL asignada por Vercel y disponible de forma global mediante su CDN.

> **[IMAGEN PENDIENTE]:** Captura del dashboard de Vercel mostrando el proyecto `cravewallet-landing` con el último deployment exitoso, el nombre de la rama `main` y la URL de producción asignada.

> **[IMAGEN PENDIENTE]:** Captura de la sección *Settings > Git* del proyecto en Vercel, mostrando la conexión con el repositorio de GitHub y la rama de producción configurada.

## 4.2. Landing Page & Mobile Application Implementation

### 4.2.1. Sprint 1

[[PENDIENTE]]

## 4.3. Validation Interviews

### 4.3.1. Diseño de Entrevistas

[[PENDIENTE]]

### 4.3.2. Registro de Entrevistas

[[PENDIENTE]]

### 4.3.3. Evaluaciones según heurísticas

[[PENDIENTE]]
