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

| Token | HEX | Visual | Uso |
| --- | --- | --- | --- |
| `color-background` | `#F8FAFC` | ![](https://img.shields.io/badge/-F8FAFC-F8FAFC) | Fondo general de pantallas |
| `color-surface` | `#FFFFFF` | ![](https://img.shields.io/badge/-FFFFFF-FFFFFF?style=flat&border=1) | Tarjetas, modales, Bottom Sheet |
| `color-surface-variant` | `#EEF2F7` | ![](https://img.shields.io/badge/-EEF2F7-EEF2F7) | Fondos de secciones colapsadas, chips |
| `color-on-surface` | `#0F172A` | ![](https://img.shields.io/badge/-0F172A-0F172A) | Texto principal sobre fondos claros |
| `color-on-surface-variant` | `#64748B` | ![](https://img.shields.io/badge/-64748B-64748B) | Texto secundario, subtítulos, fechas |

**Color primario — 30 % (marca y estructura)**

| Token | HEX | Visual | Uso |
| --- | --- | --- | --- |
| `color-primary` | `#3B4FD8` | ![](https://img.shields.io/badge/-3B4FD8-3B4FD8) | Botones primarios, barra de navegación activa, encabezados |
| `color-primary-container` | `#E0E4FF` | ![](https://img.shields.io/badge/-E0E4FF-E0E4FF) | Fondo de chips seleccionados, estado activo de tarjeta |
| `color-on-primary` | `#FFFFFF` | ![](https://img.shields.io/badge/-FFFFFF-FFFFFF?style=flat&border=1) | Texto e íconos sobre fondo primario |
| `color-on-primary-container` | `#0A1172` | ![](https://img.shields.io/badge/-0A1172-0A1172) | Texto sobre contenedores primarios |
| `color-primary-dark` | `#2537B0` | ![](https://img.shields.io/badge/-2537B0-2537B0) | Estado pressed de botones primarios |

**Color de acento — 10 % (alertas, CTAs y conversión)**

| Token | HEX | Visual | Uso |
| --- | --- | --- | --- |
| `color-accent` | `#F97316` | ![](https://img.shields.io/badge/-F97316-F97316) | FAB, badges de alerta, etiqueta "Cobro mañana" |
| `color-accent-container` | `#FFF0E0` | ![](https://img.shields.io/badge/-FFF0E0-FFF0E0) | Fondo de tarjetas con Billing Alert activo |
| `color-on-accent` | `#FFFFFF` | ![](https://img.shields.io/badge/-FFFFFF-FFFFFF?style=flat&border=1) | Íconos y texto sobre fondo acento |

**Colores semánticos (estados del sistema)**

| Token | HEX | Visual | Uso |
| --- | --- | --- | --- |
| `color-success` | `#22C55E` | ![](https://img.shields.io/badge/-22C55E-22C55E) | Suscripción activa, pago confirmado, conversión exitosa |
| `color-warning` | `#FBBF24` | ![](https://img.shields.io/badge/-FBBF24-FBBF24) | Renovación en 3-7 días |
| `color-error` | `#EF4444` | ![](https://img.shields.io/badge/-EF4444-EF4444) | Pago fallido, presupuesto excedido, suscripción vencida |
| `color-info` | `#38BDF8` | ![](https://img.shields.io/badge/-38BDF8-38BDF8) | Tipo de cambio actualizado, información neutral |

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

Los wireframes del landing page de CraveWallet representan la estructura de contenido y jerarquía de información de cada sección antes de la aplicación del sistema visual. En esta etapa se definen la disposición espacial de los bloques de contenido, la prioridad relativa de los elementos, los puntos de interacción y el flujo de lectura, sin considerar color, tipografía específica ni elementos gráficos finales. Los wireframes presentados corresponden a la versión Desktop Web Browser (viewport ≥ 960px, contenedor de 1280px máximo) y se elaboraron en herramienta de diseño vectorial siguiendo el grid de 12 columnas con gutters de 24px establecido en la sección 3.1.1.2.

##### Desktop Web Browser

---

**Barra de navegación**

![Wireframe Landing Page — Navbar Desktop](images/chapter_3/navbar-desktop-wf.png)

*Figura 20. Wireframe de la barra de navegación del landing page de CraveWallet (Desktop).*

La barra de navegación muestra tres zonas diferenciadas en una sola fila: zona de marca (logo + wordmark) anclada a la izquierda, zona de enlaces de sección centrada con cinco ítems de igual peso visual, y zona de acción (CTA primario) anclada a la derecha. La posición sticky de la barra se indica mediante la ausencia de separación entre el borde superior del frame y el componente, señalando que permanece fija durante el scroll.

---

**Sección Hero**

![Wireframe Landing Page — Hero Desktop](images/chapter_3/hero-desktop-wf.png)

*Figura 21. Wireframe de la sección Hero del landing page de CraveWallet (Desktop).*

El Hero ocupa el viewport completo y se divide en dos columnas de igual peso. La columna izquierda jerarquiza el contenido en cuatro niveles verticales: (1) eyebrow pill de disponibilidad, (2) bloque de titular de tres líneas con énfasis en la segunda, (3) párrafo de descripción, y (4) par de CTAs en fila horizontal. Al pie de la columna izquierda, una línea divisoria separa una fila de tres métricas estadísticas, cada una con valor prominente y etiqueta. La columna derecha contiene el placeholder del mockup de teléfono, representado como un rectángulo proporcional al dispositivo Android objetivo. La jerarquía de lectura sigue el patrón en F establecido por la investigación de eye-tracking para layouts de dos columnas.

---

**Sección El Problema**

![Wireframe Landing Page — El Problema Desktop](images/chapter_3/problem-desktop-wf.png)

*Figura 22. Wireframe de la sección "El Problema" del landing page de CraveWallet (Desktop).*

La sección se estructura en tres bloques verticales. El primero contiene el eyebrow label, el titular de dos líneas y el párrafo de contexto, ocupando el ancho completo. El segundo bloque dispone tres columnas de igual ancho con una cifra estadística de gran escala y su descripción de fuente cada una. El tercer bloque muestra tres tarjetas de testimonio en fila, cada una con un bloque de cita, identificador de usuario y segmento. Al pie, una fila de logos de servicios representa el reconocimiento de marcas conocidas por el segmento objetivo. Las tres tarjetas de testimonio tienen la misma altura fija, garantizando alineación de la fila sin importar la extensión del texto.

---

**Sección Solución**

![Wireframe Landing Page — Solución Desktop](images/chapter_3/features-desktop-wf.png)

*Figura 23. Wireframe de la sección "Solución" del landing page de CraveWallet (Desktop).*

El bloque de encabezado ocupa el ancho completo con eyebrow label y titular de dos líneas. Debajo, un grid de 2×2 organiza cuatro tarjetas de feature, cada una con: placeholder de ícono en la esquina superior izquierda, título de feature y descripción corta. Las tarjetas tienen altura uniforme. El grid de dos columnas establece la relación matricial del contenido: las cuatro funcionalidades son comparables en relevancia y ninguna tiene prioridad visual sobre las demás.

---

**Sección App Preview**

![Wireframe Landing Page — App Preview Desktop](images/chapter_3/preview-desktop-wf.png)

*Figura 24. Wireframe de la sección "App Preview" del landing page de CraveWallet (Desktop).*

La sección se divide verticalmente en dos bloques. El bloque superior muestra el encabezado a la izquierda y tres placeholders de mockup de teléfono en fila, cada uno con su número de secuencia y etiqueta de nombre de pantalla debajo. El bloque inferior presenta una fila de tres tarjetas de microcopy, cada una con un indicador de tipo (representado como barra de color codificado por estado: alerta, éxito, neutro) y el texto de ejemplo. Las tarjetas de microcopy vinculan visualmente el tono de comunicación del producto con las pantallas de la app mostradas arriba.

---

**Sección Prueba Social**

![Wireframe Landing Page — Prueba Social Desktop](images/chapter_3/social-proof-desktop-wf.png)

*Figura 25. Wireframe de la sección "Prueba Social" del landing page de CraveWallet (Desktop).*

El encabezado ocupa el ancho completo con eyebrow de metodología, titular y bajada de contexto. Debajo, tres tarjetas de testimonio en fila, cada una con: cuerpo de cita, avatar circular de inicial, nombre, edad y etiqueta de segmento. El bloque de hallazgos transversales bajo las tarjetas muestra tres cifras de impacto en fila con sus descripciones, usando el mismo patrón de columnas de estadística que la sección de problema para crear consistencia de patrón entre secciones.

---

**Sección Planes**

![Wireframe Landing Page — Planes Desktop](images/chapter_3/premium-desktop-wf.png)

*Figura 26. Wireframe de la sección "Planes" del landing page de CraveWallet (Desktop).*

Encabezado de ancho completo con titular de dos líneas. Dos tarjetas de plan en columnas paralelas de igual ancho: la tarjeta izquierda (Básico) con nombre, precio en escala grande, lista de cinco features con marcadores de verificación y CTA; la tarjeta derecha (Premium) con el mismo esquema más un badge de estado y siete features. Ambas tarjetas tienen la misma altura, estableciendo la comparación directa. El borde reforzado en la tarjeta Premium es el único diferenciador estructural entre ambas, señalando el plan destacado sin romper la simetría del layout.

---

**Sección Descarga**

![Wireframe Landing Page — Descarga Desktop](images/chapter_3/download-desktop-wf.png)

*Figura 27. Wireframe de la sección "Descarga" del landing page de CraveWallet (Desktop).*

Sección de columna única centrada con tres elementos verticales: titular de tres líneas en escala máxima, CTA primario y nota de requisito técnico. Al pie, una fila de tres trust badges con separadores. La ausencia de elementos secundarios o secundarios de navegación en esta sección es una decisión estructural deliberada: el único punto de interacción disponible es el CTA de descarga, concentrando la decisión del usuario.

---

**Footer**

![Wireframe Landing Page — Footer Desktop](images/chapter_3/footer-desktop-wf.png)

*Figura 28. Wireframe del footer del landing page de CraveWallet (Desktop).*

El footer se divide en dos zonas en una sola fila: zona de marca a la izquierda (logo, tagline, atribución) y zona de navegación secundaria a la derecha (cinco enlaces de sección). Una línea divisoria horizontal separa esta fila del bloque de copyright centrado al pie. La estructura replica en espejo la distribución de la barra de navegación superior, cerrando el sitio con coherencia estructural.

---

##### Mobile Web Browser

Los wireframes mobile corresponden al breakpoint inferior a 600px (grid de 4 columnas, gutters 16px). Todos los layouts multi-columna del desktop colapsan a columna única. Las descripciones a continuación documentan únicamente los cambios estructurales respecto al wireframe desktop; los principios de jerarquía y arquitectura de información son los mismos.

![Wireframe Landing Page — Chrome Mobile](images/chapter_3/browser-chrome-mobile-wf.png)

*Figura 29. Wireframe del Chrome del navegador móvil — contexto de visualización (Mobile).*

---

**Barra de navegación — Mobile**

![Wireframe Landing Page — Navbar Mobile](images/chapter_3/navbar-mobile-wf.png)

*Figura 30. Wireframe de la barra de navegación del landing page de CraveWallet (Mobile).*

Logo a la izquierda, CTA primario al centro-derecha, ícono de hamburger en el extremo derecho. Los cinco enlaces de sección quedan colapsados detrás del hamburger.

---

**Sección Hero — Mobile**

![Wireframe Landing Page — Hero Mobile](images/chapter_3/hero-mobile-wf.png)

*Figura 31. Wireframe de la sección Hero del landing page de CraveWallet (Mobile).*

Columna única. Secuencia vertical: eyebrow pill → titular de tres líneas → párrafo de descripción → dos CTAs apilados a ancho completo → fila de tres métricas → placeholder de mockup de teléfono al pie. El mockup baja de la columna derecha al final del stack para no interrumpir el flujo de lectura del copy.

---

**Sección El Problema — Mobile**

![Wireframe Landing Page — El Problema Mobile](images/chapter_3/problem-mobile-wf.png)

*Figura 32. Wireframe de la sección "El Problema" del landing page de CraveWallet (Mobile).*

Las tres estadísticas pasan de tres columnas paralelas a stack vertical, cada cifra con su descripción inmediatamente debajo. Los tres testimonios se apilan como tarjetas de ancho completo. La fila de logos adapta su número de columnas mediante wrap.

---

**Sección Solución — Mobile**

![Wireframe Landing Page — Solución Mobile](images/chapter_3/features-mobile-wf.png)

*Figura 33. Wireframe de la sección "Solución" del landing page de CraveWallet (Mobile).*

Grid 2×2 → stack 1×4. Cada tarjeta ocupa el ancho completo con placeholder de ícono, título y descripción. El orden vertical replica la secuencia de uso: centralizar → alertar → detectar → convertir.

---

**Sección App Preview — Mobile**

![Wireframe Landing Page — App Preview Mobile](images/chapter_3/preview-mobile-wf.png)

*Figura 34. Wireframe de la sección "App Preview" del landing page de CraveWallet (Mobile).*

Los tres placeholders de mockup de teléfono pasan de fila horizontal a stack vertical, cada uno con su número de secuencia y etiqueta debajo. Las tres tarjetas de microcopy se apilan bajo los mockups.

---

**Sección Prueba Social — Mobile**

![Wireframe Landing Page — Prueba Social Mobile](images/chapter_3/social-proof-mobile-wf.png)

*Figura 35. Wireframe de la sección "Prueba Social" del landing page de CraveWallet (Mobile).*

Tres tarjetas de testimonio en stack vertical a ancho completo. Bloque de hallazgos transversales con tres cifras en fila mediante wrap. Microcopy al pie en columna única.

---

**Sección Planes — Mobile**

![Wireframe Landing Page — Planes Mobile](images/chapter_3/premium-mobile-wf.png)

*Figura 36. Wireframe de la sección "Planes" del landing page de CraveWallet (Mobile).*

Las dos tarjetas de plan se apilan verticalmente, plan Básico primero. Cada tarjeta ocupa el ancho completo con su lista de features y CTA a ancho completo.

---

**Sección Descarga — Mobile**

![Wireframe Landing Page — Descarga Mobile](images/chapter_3/download-mobile-wf.png)

*Figura 37. Wireframe de la sección "Descarga" del landing page de CraveWallet (Mobile).*

Columna única centrada: titular → CTA a ancho completo → nota de requisito. Trust badges en fila de dos o stack según ancho disponible.

---

**Footer — Mobile**

![Wireframe Landing Page — Footer Mobile](images/chapter_3/footer-mobile-wf.png)

*Figura 38. Wireframe del footer del landing page de CraveWallet (Mobile).*

Logo y tagline en la parte superior, enlaces de sección apilados o en dos columnas, copyright al pie. El espacio vertical entre elementos garantiza touch targets de 44×44px mínimo.

#### 3.1.3.2. Landing Page Mock-up

Los mock-ups del landing page de CraveWallet materializan las decisiones de diseño establecidas en el Design System (sección 3.1.1) y la Arquitectura de Información (sección 3.1.2) en una representación visual de alta fidelidad, lista para ser implementada. El landing page está diseñado como una experiencia de una sola página (SPA estático) cuya estructura narrativa sigue un flujo secuencial de persuasión: problema → solución → evidencia → planes → descarga. Esta secuencia responde al modelo AIDA (Atención, Interés, Deseo, Acción) y garantiza que el usuario construya comprensión progresiva del producto antes de encontrar el llamado a la acción final.

En todos los mock-ups se aplican los siguientes principios transversales:

- **Jerarquía visual:** la escala tipográfica de Poppins Bold (display) a Inter Regular (body) guía la mirada del usuario de mayor a menor importancia sin necesidad de elementos decorativos adicionales.
- **Ritmo de secciones:** se alternan fondos oscuros (`#0F172A`, token `color-on-surface`) y fondos claros (`#F8FAFC`/`#FFFFFF`, tokens `color-background`/`color-surface`) para delimitar visualmente cada bloque de contenido y mantener la atención durante el scroll.
- **Sistema de espaciado de 8px:** todos los márgenes internos, separaciones entre elementos y paddings de sección siguen los tokens de espaciado definidos (`space-4` a `space-10`), garantizando alineación y consistencia en todo el layout.
- **Grid de 12 columnas:** el contenido se contiene en un ancho máximo de 1280px centrado en pantalla, con gutters de 24px, aplicando el grid web definido en la sección 3.1.1.2.
- **Diseño inclusivo (WCAG 2.1 AA):** todos los pares texto/fondo mantienen una relación de contraste mínima de 4.5:1. Los botones CTA tienen un padding vertical mínimo de 14px para garantizar un área de toque suficiente. La estructura semántica HTML (encabezados jerarquizados, roles ARIA, etiquetas `alt`) facilita la navegación con lectores de pantalla.

##### Desktop Web Browser — Vista completa

La versión desktop opera sobre el breakpoint de 960px o superior, desplegando el layout completo de 12 columnas con la barra de navegación superior visible y todos los elementos en su disposición horizontal óptima.

---

**Barra de navegación superior**

![Mock-up Landing Page — Navbar Desktop](images/chapter_3/navbar-desktop.png)

*Figura 1. Barra de navegación superior del landing page de CraveWallet (Desktop).*

La barra de navegación es el primer elemento que el usuario percibe y el componente de arquitectura de información más crítico del sitio. Se implementa con posición `sticky`, de modo que permanece visible en todo momento durante el scroll, tal como se especificó en el sistema de navegación del landing page (sección 3.1.2.5).

El isologotipo "CraveWallet" se ubica en el extremo izquierdo sobre fondo blanco (`color-surface`), respetando la regla de uso de marca definida en el Design System. Los enlaces de sección —"Inicio", "El problema", "Solución", "Descarga" y "Premium"— se disponen centrados con tipografía Inter Medium 14px en `color-on-surface-variant` (`#64748B`), adoptando el sistema de etiquetas de navegación definido en la sección 3.1.2.2. El CTA "Descargar gratis" ocupa el extremo derecho como botón primario con relleno `color-primary` (`#3B4FD8`) y texto blanco (`color-on-primary`), garantizando máxima visibilidad y acceso constante a la acción principal independientemente de la posición en el scroll. El contraste del par `#FFFFFF`/`#3B4FD8` es de 5.2:1, cumpliendo WCAG 2.1 AA.

---

**Sección Hero — Propuesta de valor**

![Mock-up Landing Page — Hero Desktop](images/chapter_3/hero-desktop.png)

*Figura 2. Sección Hero del landing page de CraveWallet (Desktop).*

La sección Hero ocupa el viewport completo (`min-h-screen`) con fondo oscuro `color-on-surface` (`#0F172A`), estableciendo el contraste visual necesario para capturar la atención inmediata del usuario. Se aplica un layout de dos columnas: la columna izquierda contiene el copy y los CTAs; la columna derecha contiene el mockup de teléfono que muestra la interfaz real de la aplicación, reduciendo la abstracción y generando credibilidad inmediata.

El titular "Los cobros automáticos no avisan. CraveWallet sí." utiliza Poppins Bold en tamaño fluido (`clamp(44px, 6.5vw, 76px)`), con el fragmento "no avisan." en `color-primary` (`#3B4FD8`) para resaltar el problema y el nombre de la solución en texto blanco con opacidad reducida, creando una jerarquía de lectura de tres niveles. El principio de contraste de Gestalt se aplica deliberadamente: el texto más importante (la afirmación del problema) lleva el color más saturado.

El cuerpo de texto utiliza Inter Regular 16px en `rgba(255,255,255,0.55)` para mantener legibilidad sin competir con el titular. Los dos CTAs —"Descargar gratis" (botón primario `#3B4FD8`) y "Ver el problema" (botón fantasma con borde `rgba(255,255,255,0.15)`)— siguen la jerarquía de acciones definida en el sistema de etiquetas (sección 3.1.2.2), donde la acción primaria siempre tiene mayor peso visual. Un indicador de estado `Disponible para Android` con punto verde pulsante (`color-success` `#22C55E`) añade contexto de disponibilidad sin ocupar espacio prominente.

La fila de estadísticas en la base ("4–8 suscripciones activas", "S/ → $", "−24h") aplica el principio de prueba social cuantificada, separada del cuerpo por una línea divisoria `rgba(255,255,255,0.08)` que respeta el sistema de elevación sin añadir peso visual. Desde la perspectiva de arquitectura de información, esta sección cumple el esquema de organización jerárquico: propuesta de valor → descripción → acción → evidencia, de mayor a menor generalidad.

---

**Sección El Problema**

![Mock-up Landing Page — El Problema Desktop](images/chapter_3/problem-desktop.png)

*Figura 3. Sección "El Problema" del landing page de CraveWallet (Desktop).*

La sección de problema mantiene el fondo oscuro `color-on-surface` para crear continuidad narrativa con el Hero, reforzando la tensión emocional antes de presentar la solución. El eyebrow "EL PROBLEMA" en `color-accent` (`#F97316`) y mayúsculas actúa como etiqueta de sección, siguiendo el sistema de etiquetado jerárquico definido en la arquitectura de información (sección 3.1.2.1).

El titular "¿Sabes cuánto gastaste en suscripciones este mes?" utiliza Poppins SemiBold 32px en blanco, formulado como pregunta retórica para activar la identificación del usuario con el problema. Le sigue una bajada en Inter Regular 16px que nombra marcas específicas (Spotify, Adobe, Smart Fit) para anclar el problema en la experiencia cotidiana del segmento objetivo.

Las tres estadísticas cuantitativas (S/ 350, 77%, 100%) emplean Poppins Bold 48px —el tamaño de monto principal del sistema tipográfico— para maximizar el impacto de los datos. Bajo cada cifra, una fuente de dato en Inter Regular 12px (`color-on-surface-variant`) mantiene la trazabilidad académica sin interrumpir el flujo visual. Los tres testimonios de usuario se presentan en tarjetas con borde izquierdo de acento (`color-primary`) y tipografía en cursiva, aplicando el principio de proximidad de Gestalt para agrupar la evidencia cualitativa. La fila de logos de servicios en la parte inferior (Spotify, Netflix, Disney+, Adobe, entre otros) refuerza el reconocimiento de marca y la relevancia del problema mediante el principio de similitud: todos los logos tienen el mismo tamaño y tratamiento visual monocromático.

Desde el ángulo del diseño inclusivo, los testimonios incluyen identificación de segmento (edad, ciudad, ocupación) que incrementa la representatividad y facilita la empatía en usuarios de diferentes perfiles dentro del segmento objetivo.

---

**Sección Solución — Features**

![Mock-up Landing Page — Solución Desktop](images/chapter_3/features-desktop.png)

*Figura 4. Sección "Solución" del landing page de CraveWallet (Desktop).*

La sección de solución introduce el primer fondo claro (`color-surface`, `#FFFFFF`), creando una ruptura visual deliberada que señala el cambio de tono: del problema a la respuesta. Este alternado oscuro/claro es un recurso de ritmo visual que facilita la segmentación cognitiva del contenido durante el scroll.

El eyebrow "SOLUCIÓN" en `color-primary` y el titular "Todo lo que necesitas. / Nada de lo que no." en Poppins SemiBold combinan la promesa de completitud con la de simplicidad, valores centrales del tono de comunicación definido (casual 75%, sereno 40%). Las cuatro feature cards se organizan en un grid de 2×2 columnas, cada una con un ícono Material Symbols de 24px en `color-primary`, un título Inter SemiBold 16px y un cuerpo Inter Regular 14px en `color-on-surface-variant`. Las tarjetas tienen bordes `color-surface-variant` (`#EEF2F7`) y esquinas redondeadas con `border-radius: 16px` (token `radius-lg`), coherentes con el sistema de elevación nivel 1.

Las cuatro funcionalidades presentadas —centralización, alertas 24h, detección de inactividad y conversión PEN/USD— responden directamente a los hallazgos de investigación de usuario del Capítulo I, estableciendo un puente explícito entre necesidad detectada y feature implementada. Desde la perspectiva de arquitectura de información, este bloque aplica el esquema matricial (sección 3.1.2.1): cuatro funcionalidades comparables en el mismo nivel de jerarquía, organizadas espacialmente para facilitar la comparación visual.

El diseño inclusivo se manifiesta en el uso de íconos siempre acompañados de etiqueta de texto (no icono solo), garantizando comprensión independiente del nivel de alfabetización visual del usuario.

---

**Sección App Preview**

![Mock-up Landing Page — Preview Desktop](images/chapter_3/preview-desktop.png)

*Figura 5. Sección "App Preview" del landing page de CraveWallet (Desktop).*

La sección de preview vuelve al fondo claro `color-background` (`#F8FAFC`) y presenta tres capturas reales de la interfaz de la aplicación móvil —Dashboard, Alertas y Tipo de cambio— dentro de marcos de teléfono, reduciendo la brecha entre la promesa del landing y la realidad del producto. Este elemento de "prueba de producto" responde al principio de transparencia del diseño de confianza: mostrar la interfaz real en lugar de ilustraciones genéricas aumenta la credibilidad percibida.

El titular "Diseñado para entenderse a primera vista." con el segmento complementario en `color-primary` refuerza el posicionamiento de usabilidad. Cada mockup de teléfono tiene su propia etiqueta (nombre de pantalla + descripción de una línea) con tipografía Inter Regular 12px en `color-on-surface-variant`, siguiendo el sistema de etiquetado de la sección 3.1.2.2.

La parte inferior presenta tres ejemplos de microcopy de la aplicación en tarjetas de color codificadas (naranja para alerta, verde para celebración, azul para estado neutral), aplicando el sistema de colores semánticos del Design System (`color-accent`, `color-success`, `color-info`). Esta elección permite al usuario anticipar cómo le hablará la aplicación antes de descargarla, reduciendo la incertidumbre de adopción.

---

**Sección Prueba Social**

![Mock-up Landing Page — Prueba Social Desktop](images/chapter_3/social-proof-desktop.png)

*Figura 6. Sección "Prueba Social" del landing page de CraveWallet (Desktop).*

La sección de prueba social refuerza la credibilidad mediante evidencia de investigación de usuarios primaria. El eyebrow "INVESTIGACIÓN DE USUARIOS" establece el origen metodológico de los datos, diferenciando los testimonios de opiniones espontáneas. El titular "Historias reales. / El mismo problema." aplica el principio de universalidad: el problema no es individual, es estructural.

Las tres tarjetas de testimonio presentan citas verbatim de usuarios reales entrevistados durante la fase de needfinding, identificados por segmento (Segmento 1, Segmento 2, Segmento 3) con avatar inicial, nombre, edad e identificador de segmento. Las citas están en cursiva Inter Regular 14px para distinguirlas visualmente del texto explicativo, siguiendo la convención tipográfica de cita directa.

La fila de hallazgos transversales ("100% no recibe hoy ninguna alerta anticipada de cobro", "100% tiene al menos una suscripción en dólares sin saber su equivalente en soles", "100% relató un episodio concreto de cobro automático olvidado") utiliza el mismo tratamiento tipográfico de estadística que la sección de problema, creando consistencia de patrón y facilitando el reconocimiento del tipo de dato. Los porcentajes en `color-accent` (`#F97316`) anclan visualmente los hallazgos más críticos. El microcopy de cierre vuelve a presentar los tres ejemplos de tono de comunicación, cerrando la sección con la voz del producto en lugar de la voz del investigador.

Desde el diseño inclusivo, los testimonios incluyen diversidad de perfil socioeconómico y ocupacional (estudiante/trabajador, Lima/provincias), reflejando la amplitud real del segmento objetivo y evitando la representación homogénea.

---

**Sección Planes**

![Mock-up Landing Page — Planes Desktop](images/chapter_3/premium-desktop.png)

*Figura 7. Sección "Planes" del landing page de CraveWallet (Desktop).*

La sección de planes vuelve al fondo claro `color-surface-variant` (`#EEF2F7`) para diferenciarse visualmente de las secciones adyacentes. El titular "Gratis para siempre. / Premium cuando lo necesites." gestiona la expectativa del usuario desde la primera lectura: la gratuidad es permanente, no temporal. Esta elección de copy responde a la estrategia freemium del modelo de negocio documentado en el Capítulo I.

Las dos tarjetas de plan —Básico y Premium— se disponen en un layout de dos columnas con jerarquía visual clara: la tarjeta Básico tiene fondo blanco `color-surface` con borde `color-surface-variant`; la tarjeta Premium tiene fondo oscuro `color-on-surface` con borde `color-primary` de 2px de grosor, siguiendo el principio de contraste de Gestalt para señalar el plan recomendado sin necesidad de una etiqueta explícita de "popular". La badge "Próximamente" en `color-primary` sobre la tarjeta Premium cumple función informativa y de expectativa.

Los listados de features utilizan íconos de verificación `✓` en `color-success` para el plan Básico y el mismo ícono en azul para Premium, creando consistencia semántica. La diferencia de densidad de features (5 vs 7) es visualmente evidente sin requerir comparación línea a línea. El precio "S/ 9.99 por mes" en Poppins Bold 48px aplica el token de tamaño de monto principal, coherente con la tipografía de datos numéricos del sistema. El botón "Descargar gratis" del plan Básico es el CTA principal de la sección; el botón "Disponible pronto" del plan Premium tiene opacidad reducida, señalando el estado deshabilitado sin necesidad de texto adicional.

El diseño inclusivo se manifiesta en la presentación clara de las diferencias entre planes sin oscurecer el plan gratuito: el orden visual no penaliza al usuario que no puede o no quiere pagar el plan Premium.

---

**Sección Descarga — CTA Final**

![Mock-up Landing Page — Descarga Desktop](images/chapter_3/download-desktop.png)

*Figura 8. Sección "Descarga" del landing page de CraveWallet (Desktop).*

La sección de descarga retorna al fondo oscuro `color-on-surface` para el cierre narrativo, creando simetría visual con la sección Hero y señalando el remate del flujo de persuasión. El titular "Empieza hoy. / Tu bolsillo / te lo agradece." en Poppins Bold a máximo tamaño rompe con el formato de dos columnas de las secciones anteriores, centrando toda la atención en el mensaje y el CTA único.

El botón "Descargar en Android" es el único elemento interactivo de la sección, lo que elimina la competencia de atención y maximiza la tasa de conversión. Lleva el ícono de Play (Google Play Store) en blanco sobre `color-primary`, reproduciendo el patrón visual establecido desde el CTA del Hero. La nota "Requiere Android 9.0 o superior" en Inter Regular 12px `rgba(255,255,255,0.4)` gestiona expectativas técnicas sin ocupar espacio prominente.

La fila de garantías al pie —"Datos locales, sin servidores externos", "Plan gratis siempre disponible", "Hecho para el mercado peruano"— aplica el patrón de "trust badges" que reduce la fricción de la última milla antes de la descarga. El uso del separador "→" entre badges crea un ritmo de lectura izquierda-derecha coherente con el patrón de lectura occidental en pantallas amplias. Desde la arquitectura de información, esta sección cierra el esquema secuencial establecido en la sección 3.1.2.1: el usuario que llega aquí ha completado el flujo problema → solución → evidencia → planes → acción.

---

**Footer**

![Mock-up Landing Page — Footer Desktop](images/chapter_3/footer-desktop.png)

*Figura 9. Footer del landing page de CraveWallet (Desktop).*

El footer retorna al fondo blanco `color-surface` y cumple una doble función: reafirmar la identidad de marca y ofrecer acceso secundario a las secciones del sitio para usuarios que llegan al final sin haber convertido. El isologotipo CraveWallet en el extremo izquierdo va acompañado del tagline "Empoderamiento financiero para nativos digitales peruanos." en Inter Regular 14px y la atribución "by Gastify", manteniendo la trazabilidad corporativa establecida en el branding del Design System.

Los cinco enlaces de sección —"El problema", "Solución", "Preview", "Descarga", "Premium"— se ubican en el extremo derecho con tipografía Inter Regular 14px `color-on-surface-variant`, siguiendo el mismo sistema de etiquetas de la barra de navegación y reforzando la consistencia del sistema de etiquetado (sección 3.1.2.2). La línea divisoria superior y el copyright "© 2026 CraveWallet" en Inter Regular 12px cierran el footer con los elementos mínimos de cumplimiento legal y temporal.

La simplicidad del footer es deliberada: en el contexto de un landing page de producto en etapa de lanzamiento, añadir columnas de links, formularios de newsletter o redes sociales generaría ruido visual sin aportar valor a los objetivos de conversión del sitio.

---

##### Síntesis de principios de diseño aplicados — Desktop

La siguiente tabla resume la correspondencia entre las secciones del mock-up desktop y los principios, elementos de diseño, diseño inclusivo y arquitectura de información documentados en el Design System:

| Sección | Principio de diseño | Elemento del Design System | Diseño inclusivo | Arquitectura de Información |
| --- | --- | --- | --- | --- |
| Navbar | Visibilidad constante (sticky) | Tokens `color-primary`, `color-surface`, Inter Medium 14px | Contraste 5.2:1 en CTA, acceso siempre disponible | Navegación top con anclas de sección (sección 3.1.2.5) |
| Hero | Jerarquía visual, contraste Gestalt | `color-on-surface`, Poppins Bold `clamp(44–76px)`, `color-primary` acento | Contraste `#FFFFFF`/`#0F172A` > 16:1, ícono + texto en CTAs | Esquema jerárquico: propuesta → descripción → acción |
| El Problema | Proximidad Gestalt, ritmo oscuro/claro | `color-accent` eyebrow, Poppins Bold 48px para datos, `color-primary` borde tarjetas | Identificación de segmento en testimonios, diversidad de perfiles | Datos cuantitativos + cualitativos, logos de reconocimiento |
| Solución | Esquema matricial, consistencia ícono+texto | `radius-lg` tarjetas, `color-surface-variant` bordes, `color-primary` íconos | Ícono siempre con etiqueta de texto | Grid 2×2 columnas, etiquetas descriptivas (sección 3.1.2.2) |
| Preview | Transparencia, prueba de producto | Mockups reales, `color-success`/`color-accent`/`color-info` microcopy | Pantallas reales reducen incertidumbre de adopción | Etiquetas por pantalla, microcopy clasificado por tipo |
| Prueba Social | Credibilidad, universalidad | `color-accent` para datos clave, Inter cursiva para citas | Diversidad de perfil (edad, ciudad, ocupación) en testimonios | Evidencia primaria de investigación de usuarios |
| Planes | Contraste Gestalt, jerarquía freemium | `color-on-surface` tarjeta premium, borde `color-primary` 2px, `color-success` checks | Plan gratuito no penalizado visualmente | Comparación de features, gestión de expectativa Premium |
| Descarga | Foco único, trust badges | `color-primary` CTA único, Poppins Bold máximo tamaño | CTA único elimina ambigüedad de acción | Cierre del esquema secuencial (sección 3.1.2.1) |
| Footer | Consistencia, mínimos legales | `color-surface`, Inter Regular 14px, mismo sistema de etiquetas que navbar | Acceso alternativo a secciones para usuarios no convertidos | Reafirmación del sistema de etiquetado de sección 3.1.2.2 |

---

##### Mobile Web Browser — Vista completa

En breakpoints inferiores a 600px, el landing page adapta su layout al grid de 4 columnas con gutters de 16px definido en la sección 3.1.1.2. Todos los elementos en disposición horizontal o multi-columna colapsan a una única columna de lectura vertical. Los principios de diseño, tokens y arquitectura de información son los mismos que en la versión desktop; lo que varía es exclusivamente la disposición espacial de los componentes para adecuarse al viewport reducido. El Chrome del navegador móvil (barra de dirección con dominio `cravewallet.gastify.pe`) forma parte del contexto de uso antes del primer pixel del sitio.

![Mock-up Landing Page — Chrome Mobile](images/chapter_3/browser-chrome-mobile.png)

*Figura 10. Chrome del navegador móvil — contexto de visualización del landing page de CraveWallet.*

---

**Barra de navegación superior — Mobile**

![Mock-up Landing Page — Navbar Mobile](images/chapter_3/navbar-mobile.png)

*Figura 11. Barra de navegación superior del landing page de CraveWallet (Mobile).*

Los cinco enlaces colapsan a un hamburger (`≡`). El CTA "Descargar gratis" permanece visible en la barra para mantener acceso directo a la acción principal sin requerir apertura del menú.

---

**Sección Hero — Mobile**

![Mock-up Landing Page — Hero Mobile](images/chapter_3/hero-mobile.png)

*Figura 12. Sección Hero del landing page de CraveWallet (Mobile).*

El layout de dos columnas colapsa a una sola. Los CTAs pasan a disposición vertical de ancho completo, ampliando el área de toque. El mockup de teléfono se reposiciona debajo del copy para evitar competencia visual entre texto e imagen en el viewport estrecho.

---

**Sección El Problema — Mobile**

![Mock-up Landing Page — El Problema Mobile](images/chapter_3/problem-mobile.png)

*Figura 13. Sección "El Problema" del landing page de CraveWallet (Mobile).*

Las tres estadísticas pasan de tres columnas a stack vertical. Los testimonios y la cuadrícula de logos adaptan su número de columnas mediante `flex-wrap` según el ancho disponible.

---

**Sección Solución — Mobile**

![Mock-up Landing Page — Solución Mobile](images/chapter_3/features-mobile.png)

*Figura 14. Sección "Solución" del landing page de CraveWallet (Mobile).*

El grid 2×2 colapsa a un stack 1×4. La secuencia vertical —Centraliza → Alertas → Detecta → Convierte— refleja el orden lógico de uso de la aplicación, haciendo la arquitectura secuencial más explícita que en el grid desktop.

---

**Sección App Preview — Mobile**

![Mock-up Landing Page — Preview Mobile](images/chapter_3/preview-mobile.png)

*Figura 15. Sección "App Preview" del landing page de CraveWallet (Mobile).*

Los tres mockups de teléfono pasan de fila horizontal a stack vertical. El contexto es especialmente efectivo: el usuario ve las pantallas de la app en el mismo tipo de dispositivo desde el que eventualmente la descargará.

---

**Sección Prueba Social — Mobile**

![Mock-up Landing Page — Prueba Social Mobile](images/chapter_3/social-proof-mobile.png)

*Figura 16. Sección "Prueba Social" del landing page de CraveWallet (Mobile).*

Las tres tarjetas de testimonio y los hallazgos transversales se apilan en columna única a ancho completo, permitiendo lectura íntegra de las citas sin truncamiento.

---

**Sección Planes — Mobile**

![Mock-up Landing Page — Planes Mobile](images/chapter_3/premium-mobile.png)

*Figura 17. Sección "Planes" del landing page de CraveWallet (Mobile).*

Las dos tarjetas de plan pasan de columnas paralelas a stack vertical, con el plan Básico primero. Ambos botones de acción quedan a ancho completo, maximizando el área de toque.

---

**Sección Descarga — Mobile**

![Mock-up Landing Page — Descarga Mobile](images/chapter_3/download-mobile.png)

*Figura 18. Sección "Descarga" del landing page de CraveWallet (Mobile).*

El CTA "Descargar en Android" pasa a ancho completo. Los trust badges se distribuyen en dos columnas o stack según el ancho disponible.

---

**Footer — Mobile**

![Mock-up Landing Page — Footer Mobile](images/chapter_3/footer-mobile.png)

*Figura 19. Footer del landing page de CraveWallet (Mobile).*

El isologotipo, tagline y enlaces de sección se apilan verticalmente. El espaciado entre elementos garantiza touch targets mínimos de 44×44px según las guías de accesibilidad de Android.

---

##### Síntesis de adaptaciones Mobile

La siguiente tabla documenta las adaptaciones específicas de cada sección al breakpoint mobile (< 600px) y su justificación desde los principios de diseño y diseño inclusivo:

| Sección | Cambio desktop → mobile | Principio aplicado | Impacto en accesibilidad |
| --- | --- | --- | --- |
| Navbar | Links → hamburger; CTA visible en barra | Convención mobile nativa | CTA siempre accesible sin abrir menú |
| Hero | 2 columnas → 1 columna; CTAs apilados a ancho completo | Legibilidad en viewport estrecho | Touch target 100% ancho, sin precisión de puntero |
| El Problema | Stats 3 columnas → stack vertical; testimonios apilados | Jerarquía de lectura vertical | Tipografía grande legible sin zoom |
| Solución | Grid 2×2 → stack 1×4 | Secuencia lógica de uso explícita | Sin scrolling horizontal, sin truncamiento |
| Preview | Mockups en fila → apilados | Correspondencia dispositivo-contenido | Etiquetas a ancho completo, sin truncamiento |
| Prueba Social | Tarjetas 3 columnas → stack | Densidad de información controlada | Citas completas sin truncamiento |
| Planes | Tarjetas paralelas → apiladas; plan gratuito primero | Accesibilidad del plan gratuito como primer elemento | Botones a ancho completo, sin precisión de puntero |
| Descarga | Botón centrado → botón a ancho completo | Maximizar conversión en último paso | Área de toque máxima en acción crítica |
| Footer | Links en fila → apilados/2 columnas | Touch targets mínimos 44×44px | Navegación secundaria accesible |

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
