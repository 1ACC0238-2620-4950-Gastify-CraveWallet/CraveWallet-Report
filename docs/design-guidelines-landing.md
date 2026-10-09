# CraveWallet — Design Guidelines: Landing Page

> Referencia de diseño extraída del Capítulo III para uso de agentes de desarrollo.
> Aplica exclusivamente al landing page estático de CraveWallet.

---

## 1. Identidad de marca

**Nombre:** CraveWallet  
**Concepto:** *crave* (deseo de control) + *wallet* (billetera)  
**Tono general:** dinámico pero ordenado — el usuario desea control financiero, CraveWallet le da claridad.

**Logotipo:** isotipo (billetera + línea ascendente) + wordmark "CraveWallet" en semibold.  
**Regla de uso:** solo sobre fondo primario oscuro (`#3B4FD8`) o fondo blanco (`#FFFFFF`). Nunca sobre fondos saturados ni fotografías sin capa de opacidad.

---

## 2. Tipografía

Dos familias de Google Fonts.

### 2.1 Poppins — headings y etiquetas UI

| Rol | Peso | Tamaño web |
|-----|------|-----------|
| Display / Hero | Bold 700 | 40px |
| Heading 1 (pantalla) | SemiBold 600 | 32px |
| Heading 2 (sección) | SemiBold 600 | 24px |
| Monto principal | Bold 700 | 48px |

### 2.2 Inter — body y datos numéricos

| Rol | Peso | Tamaño web |
|-----|------|-----------|
| Body regular | Regular 400 | 16px |
| Body enfatizado | Medium 500 | 16px |
| Caption / etiqueta | Regular 400 | 12px |
| Código de moneda | Medium 500 | 14px |

**Import Google Fonts:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap" rel="stylesheet">
```

---

## 3. Paleta de colores

Regla **60-30-10**: 60% base neutro, 30% primario de marca, 10% acento.

### 3.1 Base — 60% (fondos y superficies)

| Token | HEX | Uso |
|-------|-----|-----|
| `color-background` | `#F8FAFC` | Fondo general de pantallas / landing |
| `color-surface` | `#FFFFFF` | Tarjetas, modales |
| `color-surface-variant` | `#EEF2F7` | Fondos de secciones colapsadas, chips |
| `color-on-surface` | `#0F172A` | Texto principal sobre fondos claros |
| `color-on-surface-variant` | `#64748B` | Texto secundario, subtítulos, fechas |

### 3.2 Primario — 30% (marca y estructura)

| Token | HEX | Uso |
|-------|-----|-----|
| `color-primary` | `#3B4FD8` | Botones primarios, nav activa, encabezados |
| `color-primary-container` | `#E0E4FF` | Fondo de chips seleccionados |
| `color-on-primary` | `#FFFFFF` | Texto e íconos sobre fondo primario |
| `color-on-primary-container` | `#0A1172` | Texto sobre contenedores primarios |
| `color-primary-dark` | `#2537B0` | Estado hover/pressed de botones primarios |

### 3.3 Acento — 10% (CTAs y alertas)

| Token | HEX | Uso |
|-------|-----|-----|
| `color-accent` | `#F97316` | FAB, badges de alerta, CTAs secundarios |
| `color-accent-container` | `#FFF0E0` | Fondo de tarjetas con alerta activa |
| `color-on-accent` | `#FFFFFF` | Íconos y texto sobre fondo acento |

### 3.4 Colores semánticos

| Token | HEX | Uso |
|-------|-----|-----|
| `color-success` | `#22C55E` | Activo, confirmado, exitoso |
| `color-warning` | `#FBBF24` | Renovación próxima |
| `color-error` | `#EF4444` | Error, fallido, vencido |
| `color-info` | `#38BDF8` | Información neutral |

**Accesibilidad:** todos los pares texto/fondo cumplen WCAG 2.1 AA (mínimo 4.5:1).
- `#0F172A` sobre `#F8FAFC` → 16.8:1
- `#FFFFFF` sobre `#3B4FD8` → 5.2:1

---

## 4. Espaciado — sistema de 8px

| Token | Valor | Uso |
|-------|-------|-----|
| `space-1` | 4px | Separación interna mínima |
| `space-2` | 8px | Padding chips, separación ícono-label |
| `space-3` | 12px | Padding vertical list items |
| `space-4` | 16px | Padding horizontal estándar |
| `space-5` | 24px | Separación entre secciones de tarjeta |
| `space-6` | 32px | Margen superior de secciones |
| `space-8` | 48px | Separación entre bloques del landing |
| `space-10` | 64px | Margen de secciones hero del landing |

### 4.1 Border radius

| Uso | Valor |
|-----|-------|
| Chips y badges | 4px |
| Inputs y botones compactos | 8px |
| Tarjetas | 16px |
| Bottom sheets y modales | 24px |

---

## 5. Grid y breakpoints (web)

Contenedor máximo: **1280px**, centrado con márgenes automáticos en pantallas más anchas.

| Breakpoint | Rango | Columnas | Gutter | Comportamiento |
|-----------|-------|----------|--------|---------------|
| Mobile | < 600px | 4 | 16px | Single-column, nav colapsada en hamburger |
| Tablet | 600px – 959px | 8 | 16px | Dos columnas para tarjetas, nav visible |
| Desktop | 960px – 1279px | 12 | 24px | Layout completo con top nav |
| Wide | ≥ 1280px | 12 | 24px | Contenedor fijo 1280px |

---

## 6. Elevación y sombras

| Nivel | CSS | Uso |
|-------|-----|-----|
| Elevación 1 | `box-shadow: 0 1px 3px rgba(0,0,0,0.12)` | Tarjetas |
| Elevación 3 | `box-shadow: 0 4px 8px rgba(0,0,0,0.16)` | Modales, bottom sheets |
| Elevación 6 | `box-shadow: 0 8px 16px rgba(0,0,0,0.20)` | FAB en reposo |

---

## 7. Iconografía

**Biblioteca:** Material Symbols (variable font)  
**Config:** peso 400, grado 0, tamaño óptico 24.

```html
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet">
```

Íconos de marca de servicios (Netflix, Spotify, etc.) en SVG con `filter: grayscale(100%)` en estado inactivo, color completo en activo.

---

## 8. Navegación — Landing Page

### 8.1 Top navigation bar

- Posición: `sticky` (fija al hacer scroll)
- Logo CraveWallet a la izquierda
- Links de sección a la derecha
- CTA principal: botón `#3B4FD8` con texto **"Descargar gratis"** (siempre visible)

| Enlace | Ancla | Comportamiento |
|--------|-------|---------------|
| Inicio | `#hero` | Scroll suave |
| El problema | `#problem` | Scroll suave |
| Solución | `#solution` | Scroll suave |
| Descarga | `#download` | Scroll suave + foco en botón |
| Premium | `#premium` | Scroll suave |

**Mobile (< 600px):** links colapsan en menú hamburger (ícono `menu`) que abre drawer lateral.

### 8.2 Secciones del landing

Estructura de secciones (en orden):

1. `#hero` — Propuesta de valor principal + CTA descarga
2. `#problem` — El problema que resuelve
3. `#solution` — Cómo funciona CraveWallet
4. `#premium` — Plan Premium
5. `#download` — Llamada a descarga final

---

## 9. Tono de comunicación

| Dimensión | Posición |
|-----------|----------|
| Divertido / Serio | 35% / 65% |
| Formal / Casual | 25% / 75% |
| Respetuoso / Irreverente | 85% / 15% |
| Entusiasta / Sereno | 60% / 40% |

**Reglas de microcopy:**
- Tuteo siempre: "Tu próximo cobro", no "Su próximo cobro"
- Sin jerga financiera
- Irreverencia solo en estados vacíos y celebraciones

| Contexto | Texto correcto |
|----------|---------------|
| Alerta de renovación | "Mañana te cobran Spotify — S/ 15. ¿Lo dejamos pasar?" |
| Estado vacío | "Aún no tienes gastos registrados. Agrega tu primera suscripción y toma el control." |
| Error de conexión | "Sin conexión. Revisamos el tipo de cambio en cuanto vuelvas a estar en línea." |
| Celebración | "¡Cancelaste Dropbox! Eso son USD 9.99 que vuelven a tu bolsillo cada mes." |

---

## 10. SEO y meta tags

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

<!-- Open Graph -->
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

<!-- Structured Data -->
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

---

## 11. CSS custom properties — referencia rápida

```css
:root {
  /* Colores */
  --color-background:          #F8FAFC;
  --color-surface:             #FFFFFF;
  --color-surface-variant:     #EEF2F7;
  --color-on-surface:          #0F172A;
  --color-on-surface-variant:  #64748B;

  --color-primary:             #3B4FD8;
  --color-primary-container:   #E0E4FF;
  --color-on-primary:          #FFFFFF;
  --color-on-primary-container:#0A1172;
  --color-primary-dark:        #2537B0;

  --color-accent:              #F97316;
  --color-accent-container:    #FFF0E0;
  --color-on-accent:           #FFFFFF;

  --color-success:             #22C55E;
  --color-warning:             #FBBF24;
  --color-error:               #EF4444;
  --color-info:                #38BDF8;

  /* Espaciado */
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-5:  24px;
  --space-6:  32px;
  --space-8:  48px;
  --space-10: 64px;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;

  /* Sombras */
  --shadow-1: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-3: 0 4px 8px rgba(0,0,0,0.16);
  --shadow-6: 0 8px 16px rgba(0,0,0,0.20);

  /* Tipografía */
  --font-heading: 'Poppins', sans-serif;
  --font-body:    'Inter', sans-serif;

  /* Contenedor máximo */
  --container-max: 1280px;
}
```

---

## 12. Etiquetas de UI — referencia para copywriting

### Navegación principal
- Inicio · Gastos · Análisis · Perfil

### CTAs del landing
- Botón principal: **"Descargar gratis"**
- Botón premium: **"Ver Premium"**
- Checkout: **"Suscribirme"**

### Estados de suscripción (para ilustraciones/demos en landing)
| Estado | Etiqueta | Color |
|--------|----------|-------|
| Al día | Activa | `#22C55E` |
| Cobro en < 24h | Cobro hoy | `#F97316` |
| Cobro en 2–7 días | Pronto | `#FBBF24` |
| No usada 30 días | Sin usar | `#64748B` |

### Categorías de suscripción (para demos)
Streaming · Música · Educación · Fitness · Cloud · Delivery · Criptomonedas · Productividad · Otros
