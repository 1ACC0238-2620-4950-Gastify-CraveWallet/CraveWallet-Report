# Capítulo III: Solution UI/UX Design

## 3.1. Product design

### 3.1.1. Style Guidelines

#### 3.1.1.1. General Style Guidelines

CraveWallet se posiciona como una herramienta de empoderamiento financiero para nativos digitales peruanos. Las decisiones de diseño de esta sección establecen el sistema visual que debe aplicarse de forma coherente en la aplicación móvil, la aplicación web y el landing page, garantizando que cualquier pantalla nueva producida por el equipo sea reconocible como parte del mismo producto sin necesidad de revisión caso por caso.

---

##### Branding

El nombre "CraveWallet" combina dos conceptos: *crave* (deseo, apetito de control) y *wallet* (billetera). La identidad visual traduce esa tensión en un sistema que se siente dinámico pero ordenado: el usuario desea tener el control de sus gastos y CraveWallet le da la claridad para lograrlo. El logotipo principal combina un isotipo abstracto formado por un ícono de billetera con una línea ascendente que evoca tanto una gráfica de ahorros como una llama contenida (referencia a la energía del "crave") y el wordmark "CraveWallet" en tipografía semibold. El isologo se utilizará siempre sobre fondo primario oscuro o sobre fondo blanco; nunca sobre fondos de color saturado ni sobre fotografías sin capa de opacidad.

---

##### Typography

El sistema tipográfico usa dos familias de Google Fonts seleccionadas por su legibilidad en pantallas de densidad media-alta y su adecuación al contexto financiero digital:

**Familia principal — Poppins (headings y etiquetas de UI)**
Poppins es una tipografía geométrica de alto contraste visual que transmite modernidad y accesibilidad. Sus trazos redondeados suavizan la percepción de "aplicación bancaria seria" y la acercan al tono conversacional que el segmento objetivo espera. Se utiliza en pesos 600 (SemiBold) para títulos de pantalla y tarjetas, y 700 (Bold) para cifras de resumen y totales del Dashboard.

**Familia secundaria — Inter (body y datos numéricos)**
Inter fue diseñada específicamente para interfaces digitales de alta densidad de información. Su sistema de espaciado interno optimizado para pantallas pequeñas la hace ideal para tablas de suscripciones, fechas de renovación y montos en soles/dólares. Se utiliza en pesos 400 (Regular) para cuerpo de texto y descripciones, y 500 (Medium) para etiquetas de categoría y estados de suscripción.

| Uso | Familia | Peso | Tamaño base (móvil) | Tamaño base (web) |
| --- | --- | --- | --- | --- |
| Display / Hero | Poppins | 700 Bold | 28sp | 40px |
| Heading 1 (pantalla) | Poppins | 600 SemiBold | 22sp | 32px |
| Heading 2 (sección) | Poppins | 600 SemiBold | 18sp | 24px |
| Body regular | Inter | 400 Regular | 14sp | 16px |
| Body enfatizado | Inter | 500 Medium | 14sp | 16px |
| Caption / etiqueta | Inter | 400 Regular | 12sp | 12px |
| Monto principal | Poppins | 700 Bold | 32sp | 48px |
| Código de moneda | Inter | 500 Medium | 12sp | 14px |

---

##### Colors

La paleta aplica la regla 60-30-10: el 60 % del espacio visual lo ocupa el color base neutro (fondo y superficies), el 30 % corresponde al color primario de marca y el 10 % al color de acento para llamadas a la acción y alertas críticas.

**Color base — 60 % (fondos y superficies)**

| Token | HEX | Uso |
| --- | --- | --- |
| `color-background` | `#F8FAFC` | Fondo general de pantallas |
| `color-surface` | `#FFFFFF` | Tarjetas, modales, Bottom Sheet |
| `color-surface-variant` | `#EEF2F7` | Fondos de secciones colapsadas, chips |
| `color-on-surface` | `#0F172A` | Texto principal sobre fondos claros |
| `color-on-surface-variant` | `#64748B` | Texto secundario, subtítulos, fechas |

**Color primario — 30 % (marca y estructura)**

| Token | HEX | Uso |
| --- | --- | --- |
| `color-primary` | `#3B4FD8` | Botones primarios, barra de navegación activa, encabezados |
| `color-primary-container` | `#E0E4FF` | Fondo de chips seleccionados, estado activo de tarjeta |
| `color-on-primary` | `#FFFFFF` | Texto e íconos sobre fondo primario |
| `color-on-primary-container` | `#0A1172` | Texto sobre contenedores primarios |
| `color-primary-dark` | `#2537B0` | Estado pressed de botones primarios |

**Color de acento — 10 % (alertas, CTAs y conversión)**

| Token | HEX | Uso |
| --- | --- | --- |
| `color-accent` | `#F97316` | FAB, badges de alerta, etiqueta "Cobro mañana" |
| `color-accent-container` | `#FFF0E0` | Fondo de tarjetas con Billing Alert activo |
| `color-on-accent` | `#FFFFFF` | Íconos y texto sobre fondo acento |

**Colores semánticos (estados del sistema)**

| Token | HEX | Uso |
| --- | --- | --- |
| `color-success` | `#22C55E` | Suscripción activa, pago confirmado, conversión exitosa |
| `color-warning` | `#FBBF24` | Renovación en 3-7 días |
| `color-error` | `#EF4444` | Pago fallido, presupuesto excedido, suscripción vencida |
| `color-info` | `#38BDF8` | Tipo de cambio actualizado, información neutral |

**Nota de accesibilidad:** todos los pares de color texto/fondo cumplen con el ratio de contraste mínimo de 4.5:1 exigido por WCAG 2.1 nivel AA. El par `#0F172A` sobre `#F8FAFC` alcanza un ratio de 16.8:1; el par `#FFFFFF` sobre `#3B4FD8` alcanza 5.2:1.

---

##### Spacing — Sistema de 8px

Todo el espaciado interno y externo de componentes se deriva del módulo base de 8px. Esto garantiza alineación en grids de 8 puntos y elimina decisiones de espaciado ad hoc dentro del equipo.

| Token | Valor | Uso típico |
| --- | --- | --- |
| `space-1` | 4px | Separación interna mínima (ícono–texto en chip) |
| `space-2` | 8px | Padding interno de chips, separación entre ícono y label |
| `space-3` | 12px | Padding vertical de list items |
| `space-4` | 16px | Padding horizontal estándar de pantalla (móvil) |
| `space-5` | 24px | Separación entre secciones de una tarjeta |
| `space-6` | 32px | Margen superior de pantallas internas |
| `space-8` | 48px | Separación entre bloques de contenido del landing |
| `space-10` | 64px | Margen de secciones hero del landing |

El radio de borde (border-radius) también sigue el sistema: `4px` para chips y badges, `8px` para inputs y botones compactos, `16px` para tarjetas de suscripción y `24px` para Bottom Sheets y modales.

---

##### Tono de Comunicación

El tono define cómo CraveWallet "habla" al usuario en notificaciones, mensajes de error, textos de onboarding, etiquetas vacías y microcopy de botones. Se posiciona en las cuatro dimensiones de la siguiente manera:

| Dimensión | Posición | Justificación |
| --- | --- | --- |
| **Divertido / Serio** | 35 % Divertido — 65 % Serio | El dinero es un tema sensible para el segmento objetivo; la seriedad genera confianza. Sin embargo, la comunicación excesivamente formal aleja a los universitarios y profesionales jóvenes que son el público principal. La combinación permite mensajes directos y claros sin resultar fríos. |
| **Formal / Casual** | 25 % Formal — 75 % Casual | CraveWallet usa tuteo ("Tu próximo cobro es mañana", no "Su próximo cobro"). Los mensajes evitan jerga financiera compleja. El tono casual reduce la fricción de adopción en usuarios sin educación financiera formal. |
| **Respetuoso / Irreverente** | 85 % Respetuoso — 15 % Irreverente | El manejo del dinero personal es emocionalmente cargado; el irrespeto en mensajes de error o alertas generaría rechazo. El 15 % de irreverencia se reserva para microcopy de estados vacíos y celebraciones de logros ("¡Cancelaste Smart Fit! Tu bolsillo lo agradece."). |
| **Entusiasta / Sereno** | 60 % Entusiasta — 40 % Sereno | Las alertas y el onboarding se comunican con energía positiva para motivar al usuario a tomar control de sus finanzas. Las pantallas de datos y análisis adoptan un tono más sereno para no generar ansiedad frente a cifras negativas. |

**Ejemplos de aplicación del tono:**

| Contexto | Texto incorrecto | Texto CraveWallet |
| --- | --- | --- |
| Alerta de renovación | "Aviso: su suscripción se renovará." | "Mañana te cobran Spotify — S/ 15. ¿Lo dejamos pasar?" |
| Estado vacío (sin suscripciones) | "No existen registros en el sistema." | "Aún no tienes gastos registrados. Agrega tu primera suscripción y toma el control." |
| Error de conexión | "Error 503. Intente más tarde." | "Sin conexión. Revisamos el tipo de cambio en cuanto vuelvas a estar en línea." |
| Celebración de ahorro | "Operación completada." | "¡Cancelaste Dropbox! Eso son USD 9.99 que vuelven a tu bolsillo cada mes." |


#### 3.1.1.2. Web Style Guidelines

Las Web Style Guidelines aplican al landing page de CraveWallet (sitio estático informativo) y a la futura aplicación web (Angular con Angular Material). Ambos productos comparten el sistema de tokens de la sección 3.1.1.1 y añaden especificaciones propias para el contexto de escritorio y navegador.

---

##### Grid y breakpoints

El layout web usa un sistema de 12 columnas con gutters de 24px en desktop y 16px en tablet. El ancho máximo del contenedor de contenido es de 1280px, centrado en pantalla en resoluciones superiores.

| Breakpoint | Rango | Columnas | Gutter | Comportamiento |
| --- | --- | --- | --- | --- |
| Mobile | < 600px | 4 | 16px | Single-column, navegación colapsada en hamburger |
| Tablet | 600px – 959px | 8 | 16px | Dos columnas para tarjetas, nav visible |
| Desktop | 960px – 1279px | 12 | 24px | Layout completo con sidebar o top nav |
| Wide | ≥ 1280px | 12 | 24px | Contenedor fijo a 1280px, márgenes laterales automáticos |

---

##### Componentes Angular Material — configuración de tema

El tema de Angular Material se configura con las variables de la paleta de CraveWallet vía `@angular/material` theming API (M3). Los tokens principales:

```scss
// _theme.scss
$cravewallet-primary: mat.define-palette($mat-indigo, 600, 300, 900);
$cravewallet-accent:  mat.define-palette($mat-deep-orange, 500);
$cravewallet-warn:    mat.define-palette($mat-red, 500);

$cravewallet-theme: mat.define-light-theme((
  color: (
    primary: $cravewallet-primary,
    accent:  $cravewallet-accent,
    warn:    $cravewallet-warn,
  ),
  typography: mat.define-typography-config(
    $font-family: 'Inter, Poppins, sans-serif',
  ),
  density: 0,
));
```

**Componentes clave y su mapeo al diseño:**

| Componente Angular Material | Uso en CraveWallet web |
| --- | --- |
| `mat-card` | Tarjeta de suscripción individual en el dashboard |
| `mat-chip` | Etiqueta de categoría (Streaming, Educación, Fitness…) |
| `mat-progress-bar` | Indicador de uso del presupuesto mensual |
| `mat-dialog` | Modal de confirmación de cancelación o activación Premium |
| `mat-snack-bar` | Notificación de tipo de cambio actualizado |
| `mat-form-field` | Campos de registro de nueva suscripción |
| `mat-stepper` | Flujo de alta de suscripción en 3 pasos |
| `mat-sidenav` | Navegación lateral en la vista de aplicación web |

---

##### Elevación y sombras

El sistema de sombras sigue los niveles de elevación de Material Design 3. Las tarjetas de suscripción usan elevación 1 (`box-shadow: 0 1px 3px rgba(0,0,0,0.12)`); los modales y Bottom Sheets usan elevación 3 (`box-shadow: 0 4px 8px rgba(0,0,0,0.16)`). El FAB usa elevación 6 en estado reposo.

---

##### Iconografía web

Se usa la biblioteca **Material Symbols** (variable font, peso 400, grado 0, tamaño óptico 24) para todos los íconos de la interfaz web. Los íconos de categoría de suscripción se complementan con íconos de marca cuando están disponibles en formato SVG (Netflix, Spotify, Adobe, Smart Fit). Los íconos de marca se muestran en escala de grises (filtro `grayscale(100%)`) en estado inactivo y a color completo en estado activo.


#### 3.1.1.3. Mobile Style Guidelines

Las Mobile Style Guidelines aplican a la aplicación nativa Android de CraveWallet, implementada siguiendo las pautas de Material Design 3 (Material You). El diseño adapta el sistema de tokens global a las restricciones y convenciones propias del entorno móvil.

---

##### Tamaños de pantalla objetivo

| Categoría | Resolución de referencia | Densidad | Dispositivo de prueba |
| --- | --- | --- | --- |
| Compacta (principal) | 360 × 800dp | xhdpi (320dpi) | Samsung Galaxy A54 |
| Media | 390 × 844dp | xxhdpi (440dpi) | Xiaomi Redmi Note 12 |
| Expandida | 600 × 960dp | xhdpi | Tablet Lenovo M10 |

El diseño se valida primero en 360dp de ancho (categoría compacta), que representa el 68 % del mercado Android en el segmento objetivo peruano según los datos del MTC 2023 citados en el Capítulo I.

---

##### Touch targets y accesibilidad

Todos los elementos interactivos tienen un área de toque mínima de 48 × 48dp, conforme a las pautas de Material Design 3 y WCAG 2.5.5 (Target Size). Los botones de acción crítica (cancelar suscripción, confirmar pago Premium) tienen un área mínima de 56dp de altura. El contraste de texto cumple WCAG 2.1 AA en todos los estados (normal, pressed, disabled).

---

##### Tipografía en Android

Los tamaños tipográficos siguen la escala de Material Design 3 expresada en `sp` (scale-independent pixels), lo que respeta la configuración de tamaño de fuente del sistema operativo del usuario:

| Rol Material 3 | Familia | Peso | Tamaño |
| --- | --- | --- | --- |
| Display Large | Poppins | Bold 700 | 57sp |
| Headline Medium | Poppins | SemiBold 600 | 28sp |
| Title Large | Poppins | SemiBold 600 | 22sp |
| Body Large | Inter | Regular 400 | 16sp |
| Body Medium | Inter | Regular 400 | 14sp |
| Label Large | Inter | Medium 500 | 14sp |
| Label Small | Inter | Regular 400 | 11sp |

---

##### Componentes nativos clave

| Componente Material 3 | Uso en CraveWallet móvil |
| --- | --- |
| `NavigationBar` | Barra de navegación inferior con 4 destinos |
| `Card` (Elevated / Filled) | Tarjeta de suscripción individual |
| `FloatingActionButton` | Agregar nuevo gasto recurrente |
| `BottomSheet` (Modal) | Detalle de suscripción y opciones de acción |
| `Chip` (Filter / Assist) | Filtros de categoría en el Dashboard |
| `LinearProgressIndicator` | Progreso de presupuesto mensual |
| `Snackbar` | Confirmación de acciones (cancelación, registro) |
| `DatePicker` (Modal) | Selector de fecha de renovación |

---

##### Iconografía móvil

Se usa **Material Symbols** en su variante *Rounded* (óptica 24, peso 400) para mantener coherencia visual con las formas redondeadas de la paleta. Los íconos se renderizan a 24dp en componentes de navegación y lista, y a 20dp en chips y etiquetas secundarias. Para las categorías de gasto se define el siguiente mapeo de íconos:

| Categoría | Ícono Material Symbol |
| --- | --- |
| Streaming | `play_circle` |
| Música | `headphones` |
| Educación | `school` |
| Fitness / Gimnasio | `fitness_center` |
| Cloud / Almacenamiento | `cloud` |
| Delivery | `delivery_dining` |
| Criptomonedas | `currency_bitcoin` |
| Productividad | `work` |
| Otros | `category` |

---

##### Gestos y animaciones

Las animaciones siguen el sistema de motion de Material Design 3 con curvas de easing estándar (`FastOutSlowIn` para elementos que entran/salen de pantalla, `LinearOutSlowIn` para elementos que aparecen desde abajo). La duración base es 300ms para transiciones de pantalla y 150ms para cambios de estado de componentes (pressed, focused). El swipe horizontal hacia la izquierda sobre una tarjeta de suscripción activa la acción de "marcar como no usada"; el swipe hacia la derecha activa "editar".


### 3.1.2. Information Architecture

#### 3.1.2.1. Organization Systems

La arquitectura de información de CraveWallet organiza el contenido a través de tres esquemas complementarios, seleccionados según el tipo de tarea que el usuario realiza en cada pantalla.

---

##### Esquema jerárquico (pantallas principales)

El esquema de organización predominante es la **jerarquía visual top-down**, que parte desde el resumen más agregado (el total mensual del Expense Portfolio en soles) hasta el detalle de un cargo individual. Este esquema responde a la necesidad identificada en el Empathy Map de Valentina Ríos: el usuario necesita entender primero cuánto gasta en total antes de poder decidir qué cancelar.

```
Nivel 0 — Dashboard
  Total mensual consolidado (S/ XXX.XX)
  ├── Nivel 1 — Categoría (Streaming, Educación, Fitness…)
  │     ├── Nivel 2 — Suscripción individual
  │     │     ├── Nivel 3 — Detalle: monto, ciclo, próximo cobro, historial
  │     │     └── Nivel 3 — Acciones: editar, pausar, cancelar
  │     └── Nivel 2 — (siguiente suscripción de la categoría)
  └── (siguiente categoría)
```

La categorización del nivel 1 es **por tópico** (tipo de servicio), no cronológica, porque el usuario asocia mentalmente sus gastos con el tipo de consumo ("mi gasto en streaming", "lo del gimnasio") antes que con fechas. Dentro de cada categoría, los ítems se ordenan **cronológicamente por Renewal Date ascendente**: el próximo cobro aparece primero.

---

##### Esquema secuencial (flujos de tarea)

Los flujos de tarea multi-paso utilizan un esquema **secuencial lineal** que guía al usuario de un estado inicial a un estado final sin bifurcaciones ambiguas. Se aplica en:

| Flujo | Pasos | Pantalla guía |
| --- | --- | --- |
| Alta de suscripción | 3 pasos: (1) Seleccionar servicio o ingresar manual → (2) Configurar monto, ciclo y fecha → (3) Confirmar y activar recordatorio | `mat-stepper` horizontal |
| Activación Premium | 4 pasos: (1) Ver plan → (2) Elegir ciclo (mensual/anual) → (3) Ingresar datos de pago Stripe → (4) Confirmación | Pantalla a pantalla con barra de progreso |
| Onboarding inicial | 3 pasos: (1) Segmento de usuario → (2) Agregar primera suscripción sugerida → (3) Activar recordatorios de calendario | Carrusel con ilustraciones |

---

##### Esquema matricial (comparación y análisis)

La sección de **Análisis** (funcionalidad Premium) usa un esquema **matricial** que permite al usuario comparar sus gastos en dos dimensiones simultáneas: categoría de gasto vs. período de tiempo. Este esquema responde al objetivo de Valentina de identificar qué servicios no usa y cuánto representan en el total mensual. La visualización es una tabla de calor donde el eje X es el mes y el eje Y es la categoría, con celdas coloreadas según el gasto relativo.

---

##### Categorización del contenido

El sistema de categorías es el único vocabulario controlado que el usuario ve explícitamente. Se define de la siguiente manera para evitar ambigüedad:

| Categoría | Definición operativa | Ejemplos |
| --- | --- | --- |
| Streaming | Servicios de video o audio bajo demanda con cobro recurrente | Netflix, Disney+, Max, Crunchyroll |
| Música | Plataformas de streaming musical | Spotify, Apple Music, YouTube Music |
| Educación | Plataformas de aprendizaje digital o institutos con cobro mensual | Netzun, Coursera, Platzi, Británico |
| Fitness | Membresías físicas o digitales de ejercicio | Smart Fit, Fitpass, Nike Training Club |
| Cloud | Almacenamiento, productividad y herramientas profesionales | Adobe CC, Figma, Dropbox, Google One |
| Delivery | Membresías de plataformas de reparto a domicilio | PedidosYa Plus, Rappi Prime |
| Criptomonedas | Plataformas con cobros automáticos por custodia, trading o suscripción | Binance, Lemon Cash |
| Productividad | Herramientas de trabajo con cobro recurrente no clasificadas en Cloud | Notion, Linear, Slack |
| Otros | Cualquier gasto recurrente que no encaje en las categorías anteriores | — |


#### 3.1.2.2. Labelling Systems

El sistema de etiquetado define el vocabulario que el usuario verá en la interfaz: nombres de pantallas, etiquetas de navegación, acciones, estados y campos de formulario. El criterio de selección prioriza **brevedad** (máximo 2 palabras), **consistencia** con el Ubiquitous Language de la sección 2.3.6 y **reconocimiento inmediato** sin necesidad de explicación.

---

##### Etiquetas de navegación principal

| Destino | Etiqueta en navegación | Ícono |
| --- | --- | --- |
| Dashboard / Resumen | **Inicio** | `home` |
| Lista de suscripciones | **Gastos** | `receipt_long` |
| Análisis y gráficos | **Análisis** | `bar_chart` |
| Perfil y ajustes | **Perfil** | `person` |

*Nota: Se evita "Dashboard" como etiqueta visible porque el segmento objetivo (universitarios y jóvenes profesionales sin educación financiera formal) puede no reconocer el término. "Inicio" es universalmente comprendido y reduce la carga cognitiva en el primer uso.*

---

##### Etiquetas de estados de suscripción

| Estado del sistema | Etiqueta visible | Color asociado |
| --- | --- | --- |
| Suscripción activa y al día | **Activa** | `color-success` (#22C55E) |
| Renovación en ≤ 24 horas | **Cobro hoy** | `color-accent` (#F97316) |
| Renovación en 2–7 días | **Pronto** | `color-warning` (#FBBF24) |
| Sin usar en los últimos 30 días | **Sin usar** | `color-on-surface-variant` (#64748B) |
| Cancelada por el usuario | **Cancelada** | `color-error` (#EF4444) |
| Pendiente de confirmación | **Pendiente** | `color-info` (#38BDF8) |

---

##### Etiquetas de acciones primarias

| Acción | Etiqueta en botón / menú | Contexto |
| --- | --- | --- |
| Registrar nuevo gasto recurrente | **Agregar** | FAB y botón en estado vacío |
| Guardar cambios de un registro | **Guardar** | Formulario de edición |
| Confirmar cancelación de suscripción | **Sí, cancelar** | Modal de confirmación |
| Descartar cambios | **Descartar** | Botón secundario en formularios |
| Activar recordatorio de calendario | **Activar recordatorio** | Paso 3 del flujo de alta |
| Pasar a Premium | **Ver Premium** | Banner en Dashboard y pantalla de Perfil |
| Convertir a Premium (CTA final) | **Suscribirme** | Pantalla de checkout Stripe |

---

##### Etiquetas de campos de formulario

| Campo | Etiqueta (placeholder) | Nota |
| --- | --- | --- |
| Nombre del servicio | "Nombre del servicio (ej. Smart Fit)" | Prellenado si se elige del catálogo |
| Monto | "Monto (ej. 79.90)" | Separado del selector de moneda |
| Moneda | "Moneda" | Dropdown: PEN / USD / EUR |
| Ciclo de cobro | "Frecuencia" | Opciones: Mensual / Anual / Semanal / Personalizado |
| Fecha de próxima renovación | "Próximo cobro" | DatePicker nativo |
| Categoría | "Categoría" | Dropdown con 9 opciones del sistema |
| Notas | "Notas (opcional)" | Texto libre, máx. 120 caracteres |

---

##### Etiquetas de mensajes de estado vacío

| Pantalla | Mensaje de estado vacío | Llamada a la acción |
| --- | --- | --- |
| Dashboard sin gastos | "Aún no tienes gastos registrados." | "Agregar mi primera suscripción" |
| Búsqueda sin resultados | "No encontramos gastos con ese nombre." | "Limpiar filtros" |
| Análisis sin datos | "Registra al menos un mes de gastos para ver tu análisis." | "Ir a Gastos" |
| Notificaciones sin alertas | "Todo en orden. Tu próximo cobro está a más de 7 días." | — |


#### 3.1.2.3. SEO Tags and Meta Tags

Esta sección define las etiquetas de metadatos para el landing page de CraveWallet y los elementos de optimización para tiendas de aplicaciones móviles (ASO — App Store Optimization).

---

##### Metadatos HTML del Landing Page

```html
<!-- Metadatos esenciales -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- SEO On-Page -->
<title>CraveWallet — Controla tus suscripciones y gastos en soles | Gastify</title>
<meta name="description" content="CraveWallet reúne todas tus suscripciones, membresías y gastos de delivery en un solo lugar. Recibe alertas 24 horas antes de cada cobro y conoce cuánto gastas realmente en soles. Gratis para Android.">
<meta name="keywords" content="gestor de suscripciones, control de gastos, suscripciones Peru, Smart Fit, Netflix, Spotify, PedidosYa, gastos recurrentes, membresías, presupuesto universitarios, finanzas personales Peru, tipo de cambio dolar soles">
<meta name="author" content="Gastify — Ingeniería de Software UPC">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://cravewallet.gastify.pe/">

<!-- Open Graph (Facebook, LinkedIn, WhatsApp) -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://cravewallet.gastify.pe/">
<meta property="og:title" content="CraveWallet — Deja de pagar por lo que no usas">
<meta property="og:description" content="Centraliza tus suscripciones, recibe alertas de cobro y convierte todo a soles automáticamente. Diseñado para universitarios y profesionales jóvenes en Lima.">
<meta property="og:image" content="https://cravewallet.gastify.pe/assets/og-image-1200x630.png">
<meta property="og:locale" content="es_PE">
<meta property="og:site_name" content="CraveWallet by Gastify">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@gastifyapp">
<meta name="twitter:title" content="CraveWallet — Controla tus suscripciones en soles">
<meta name="twitter:description" content="¿Cuántas suscripciones pagas sin darte cuenta? CraveWallet te lo dice y te avisa antes de cada cobro.">
<meta name="twitter:image" content="https://cravewallet.gastify.pe/assets/twitter-card-1200x600.png">

<!-- Structured Data (Schema.org — SoftwareApplication) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CraveWallet",
  "operatingSystem": "Android",
  "applicationCategory": "FinanceApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "PEN"
  },
  "description": "Gestor de suscripciones y gastos recurrentes para universitarios y profesionales jóvenes en Perú.",
  "author": {
    "@type": "Organization",
    "name": "Gastify"
  }
}
</script>
```

**Justificación de palabras clave:** se priorizan términos de búsqueda con intención transaccional alta en el mercado peruano ("suscripciones Peru", "tipo de cambio dolar soles") y términos de marca de servicios frecuentes en el segmento objetivo ("Smart Fit", "PedidosYa", "Netflix") para capturar tráfico de usuarios que ya sienten el problema y buscan soluciones relacionadas con esos servicios específicos.

---

##### ASO — App Store Optimization (Google Play Store)

| Campo | Contenido |
| --- | --- |
| **App Title** (máx. 30 caracteres) | `CraveWallet: Gastos y Suscripc.` |
| **App Subtitle / Short Description** (máx. 80 caracteres) | `Controla tus suscripciones. Recibe alertas. Todo en soles.` |
| **App Keywords** (máx. 100 caracteres, separados por coma) | `suscripciones, gastos, presupuesto, finanzas, netflix, spotify, smart fit, delivery, membresías` |
| **App Description (primeras 3 líneas — el fold)** | `¿Cuánto gastas realmente en suscripciones este mes? CraveWallet reúne todas tus suscripciones, membresías y gastos de delivery en una sola pantalla y te avisa 24 horas antes de cada cobro automático.` |
| **App Description (cuerpo completo)** | Ver texto completo en Anexo — Assets de tienda |
| **Categoría principal** | Finanzas |
| **Categoría secundaria** | Productividad |
| **Content Rating** | Apto para todos (PEGI 3 / ESRB Everyone) |
| **Permisos requeridos** | `READ_CALENDAR`, `WRITE_CALENDAR` (recordatorios), `INTERNET` (ExchangeRate-API, Stripe) |

**Nota sobre el título ASO:** el título incluye una abreviación ("Suscripc.") para respetar el límite de 30 caracteres de Google Play sin sacrificar las palabras clave de mayor volumen de búsqueda. En versiones futuras se evaluará A/B testing del título con "CraveWallet — Mis Suscripciones" como variante.


#### 3.1.2.4. Searching Systems

CraveWallet implementa un sistema de búsqueda y filtrado diseñado para el patrón de uso identificado en el User Journey Map (sección 2.3.3): el usuario busca un gasto específico después de ver un cargo no reconocido en su estado de cuenta bancario. El sistema debe permitir localizar cualquier suscripción en menos de 3 segundos sin requerir que el usuario recuerde el nombre exacto del servicio.

---

##### Búsqueda por texto libre

La barra de búsqueda se ubica en la pantalla "Gastos" (nivel 1 de la jerarquía), fijada en la parte superior bajo la AppBar. La búsqueda es **incremental en tiempo real** (se activa a partir del primer carácter) y aplica sobre los siguientes campos de cada registro:

- Nombre del servicio
- Nombre de la categoría
- Notas del usuario

El algoritmo de coincidencia es **tolerante a errores tipográficos menores** (distancia de Levenshtein ≤ 1) para cubrir casos como "Ntflix" → Netflix o "smarthfit" → Smart Fit. Los resultados se ordenan por relevancia (coincidencia exacta primero, luego parcial).

---

##### Sistema de filtros

Los filtros se presentan como **chips horizontales deslizables** bajo la barra de búsqueda. Se pueden combinar múltiples filtros simultáneamente (AND lógico). El usuario ve el número de resultados activos mientras filtra.

| Filtro | Tipo | Valores posibles |
| --- | --- | --- |
| **Categoría** | Multi-select chip | Streaming, Música, Educación, Fitness, Cloud, Delivery, Cripto, Productividad, Otros |
| **Estado** | Multi-select chip | Activa, Cobro hoy, Pronto, Sin usar, Cancelada |
| **Moneda** | Single-select | Todas, Solo PEN, Solo USD |
| **Rango de monto** | Slider de rango | S/ 0 – S/ 500+ (en soles equivalentes) |
| **Próximo cobro** | Date range picker | Selección libre de fecha inicio y fin |

Un botón "Limpiar filtros" aparece en la barra de chips únicamente cuando hay al menos un filtro activo, evitando que ocupe espacio visual en el estado por defecto.

---

##### Ordenamiento de resultados

El usuario puede cambiar el criterio de orden mediante un menú contextual (ícono `sort` en la AppBar de la pantalla Gastos):

| Criterio | Dirección por defecto | Justificación |
| --- | --- | --- |
| Próximo cobro | Ascendente | Criterio por defecto: el cobro más cercano es el más urgente |
| Monto en soles | Descendente | Identifica de un vistazo el gasto más alto |
| Nombre | Ascendente (A→Z) | Búsqueda directa por nombre conocido |
| Categoría | Ascendente (A→Z) | Agrupación visual por tipo de servicio |
| Fecha de registro | Descendente | Último gasto registrado primero |

---

##### Búsqueda en el landing page

El landing page es un sitio estático de una sola página (SPA con Angular o HTML/CSS estático); no implementa búsqueda interna. La función de búsqueda en contexto web se reserva para la futura versión web de la aplicación, que replicará el sistema de filtros descrito para la app móvil.


#### 3.1.2.5. Navigation Systems

El sistema de navegación de CraveWallet sigue patrones distintos según el producto: la aplicación móvil usa los patrones nativos de Android con Material Design 3, el landing page usa una navegación web estándar y la futura aplicación web usa los componentes de Angular Material.

---

##### Aplicación móvil — Bottom Navigation Bar

El patrón principal de navegación es la **barra de navegación inferior** (`NavigationBar` de Material Design 3), que permanece visible en todas las pantallas de primer nivel. Se definen 4 destinos, el número máximo recomendado por las pautas de Material Design para este componente:

| Posición | Destino | Ícono | Badge |
| --- | --- | --- | --- |
| 1 | **Inicio** (Dashboard) | `home` | Número de alertas activas (cobros en ≤ 24h) |
| 2 | **Gastos** (lista completa) | `receipt_long` | — |
| 3 | **Análisis** (solo Premium) | `bar_chart` | Candado si el usuario es freemium |
| 4 | **Perfil** | `person` | — |

La navegación entre pantallas de segundo nivel (detalle de suscripción, formulario de alta, configuración) usa el patrón **push-and-pop** sobre el stack de navegación de la pestaña activa, con un botón de regreso (`←`) en la AppBar. No se rompe la barra inferior al entrar a pantallas de detalle.

**Flujo de navegación completo (app móvil):**

```
NavigationBar
├── Inicio (Dashboard)
│   ├── → Detalle de suscripción [push]
│   │     └── → Editar suscripción [push]
│   └── → FAB: Agregar gasto [modal bottom sheet]
│         └── → Flujo de alta (3 pasos) [stepper en bottom sheet]
├── Gastos
│   ├── Barra de búsqueda + filtros
│   └── → Detalle de suscripción [push]
├── Análisis (Premium)
│   └── → Vista de categoría detallada [push]
└── Perfil
    ├── → Configuración de recordatorios [push]
    ├── → Gestión de cuenta [push]
    └── → Ver plan Premium / Cancelar Premium [push]
```

---

##### Landing page — Top Navigation Bar

El landing page usa una **barra de navegación superior fija** (`position: sticky`) que contiene el logotipo de CraveWallet a la izquierda y los enlaces de sección a la derecha. En breakpoints inferiores a 600px, los enlaces se colapsan en un menú hamburger (ícono `menu`) que despliega un drawer lateral.

| Enlace | Destino (ancla) | Comportamiento |
| --- | --- | --- |
| Inicio | `#hero` | Scroll suave al inicio de página |
| El problema | `#problem` | Scroll suave |
| Solución | `#solution` | Scroll suave |
| Descarga | `#download` | Scroll suave + foco en botón de descarga |
| Premium | `#premium` | Scroll suave |

El CTA principal de la navbar es un botón de color primario (`#3B4FD8`) con etiqueta **"Descargar gratis"** que lleva directamente al enlace de Google Play Store. Este botón es visible en todas las posiciones de scroll para maximizar la conversión.

---

##### Futura aplicación web — Sidenav + Top AppBar

La aplicación web (Angular Material) implementa el patrón de **navegación lateral persistente** (`mat-sidenav`) en resoluciones ≥ 960px y un drawer colapsable en resoluciones inferiores. La estructura replica los 4 destinos de la app móvil con la adición de una sección de administración de cuenta.

| Componente | Comportamiento en desktop | Comportamiento en mobile |
| --- | --- | --- |
| `mat-sidenav` | Fijo, siempre visible, ancho 240px | Colapsable, se abre con ícono hamburger |
| `mat-toolbar` | AppBar superior con breadcrumb y acciones contextuales | AppBar con hamburger y acciones |
| `mat-fab` | FAB en esquina inferior derecha de la vista principal | Igual que móvil |


### 3.1.3. Landing Page UI Design

#### 3.1.3.1. Landing Page Wireframe

[[PENDIENTE]]

#### 3.1.3.2. Landing Page Mock-up

[[PENDIENTE]]

### 3.1.4. Mobile Applications UX/UI Design

#### 3.1.4.1. Mobile Applications Wireframes

[[PENDIENTE]]

#### 3.1.4.2. Mobile Applications Wireflow Diagrams

[[PENDIENTE]]

#### 3.1.4.3. Mobile Applications Mock-ups

[[PENDIENTE]]

#### 3.1.4.4. Mobile Applications User Flow Diagrams

[[PENDIENTE]]

#### 3.1.4.5. Mobile Applications Prototyping

[[PENDIENTE]]
