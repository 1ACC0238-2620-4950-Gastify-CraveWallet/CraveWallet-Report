# Capítulo I: Presentación

## 1.1. Startup Profile

### 1.1.1. Descripción de la Startup

**Gastify** es una startup de tecnología financiera personal fundada en Lima, Perú, en 2026, por estudiantes de Ingeniería de Software de la Universidad Peruana de Ciencias Aplicadas (UPC). Su producto insignia, **CraveWallet**, es un gestor integral de suscripciones y gastos recurrentes diseñado para el mercado latinoamericano, con foco en el segmento de universitarios y profesionales jóvenes que enfrentan la proliferación de servicios digitales de suscripción, membresías físicas y plataformas de entrega a domicilio.

La **misión** de Gastify es democratizar la salud financiera personal mediante herramientas móviles inteligentes que devuelvan el control del presupuesto al usuario, eliminando la fricción y la opacidad que genera el ecosistema fragmentado de cobros automáticos, contratos recurrentes y micro-gastos.

La **visión** de Gastify es posicionarse, al término de 2027, como la plataforma de referencia para la gestión de compromisos financieros recurrentes en los principales mercados de habla hispana de Latinoamérica, con foco inicial en Perú y expansión proyectada a Colombia y México.

CraveWallet centraliza en una única experiencia móvil tres categorías de gasto históricamente invisibles para el usuario:

1. **Membresías físicas y académicas:** Cuotas mensuales o anuales de instituciones como el Instituto Cultural Peruano Norteamericano (Británico) o el plan Smart Fit Black, con gestión de fechas de vencimiento y montos en moneda local.
2. **Suscripciones digitales y herramientas:** Plataformas de entretenimiento, educación en línea (Netzun, Cisco Networking Academy), herramientas de productividad (PedidosYa Plus), servicios de infraestructura cloud (MongoDB Atlas) y tiendas de videojuegos (Steam), incluyendo gestión automática de tipos de cambio para suscripciones facturadas en dólares estadounidenses.
3. **Gastos recurrentes de delivery:** Categorización y registro de consumos habituales en establecimientos frecuentes como Up Burger, Dunkin', Popeyes, Little Caesars, Papa John's, Burgerboy, Pollivoro, Chifa Delicious y Chifa Monteoro, permitiendo al usuario visualizar el impacto acumulado de sus hábitos de entrega a domicilio.

Los valores fundacionales de Gastify son: **transparencia financiera**, **diseño centrado en el usuario**, **aprendizaje continuo** y **responsabilidad técnica**. Este último valor se materializa directamente en el Student Outcome 7 del presente curso: la capacidad del equipo de investigar, evaluar e integrar tecnologías nuevas —como el SDK de Stripe y la ExchangeRate-API— de forma autónoma, documentando el proceso de aprendizaje como parte intrínseca del ciclo de vida del producto.

---

### 1.1.2. Perfiles de integrantes del equipo

El equipo de desarrollo de CraveWallet cuenta con cinco integrantes. A continuación se presentan sus perfiles académicos y técnicos.

| Integrante                                                                                     | Información |
|------------------------------------------------------------------------------------------------| --- |
| ![Fotografía de Mario Gabriel Sejuro Medina](images/chapter_1/mario_sejuro_medina.png) | **Mario Gabriel Sejuro Medina**<br>**Código de estudiante:** U20241C198<br>**Carrera:** Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC)<br><br>Estudiante de Ingeniería de Software con interés especializado en el desarrollo de aplicaciones móviles nativas y multiplataforma, arquitectura de software orientada al dominio (*Domain-Driven Design*) y tecnologías de integración de pagos digitales. Cuenta con conocimientos en Kotlin para Android nativo, Flutter para desarrollo multiplataforma, Spring Boot para servicios web RESTful y Angular para aplicaciones web. Ha explorado de forma autónoma la integración de SDKs de terceros, incluyendo Stripe para procesamiento de pagos y ExchangeRate-API para la conversión dinámica de monedas en aplicaciones fintech. |
| ![Fotografía de Anghelo Edwin Faustino Hurtado](images/chapter_1/anghelo_faustino_hurtado.png) | **Anghelo Edwin Faustino Hurtado**<br>**Código de estudiante:** U20241B331<br>**Carrera:** Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC)<br><br>Estudiante de sexto ciclo de Ingeniería de Software, con interés en el desarrollo *full-stack* y la construcción de productos digitales centrados en el usuario. Su formación incluye ingeniería de requisitos, bases de datos, desarrollo web, experiencia de usuario y arquitectura de software. Cuenta con conocimientos en Java, Spring Boot, Angular, TypeScript, SQL, APIs REST y control de versiones con Git; busca aplicar estas tecnologías en soluciones web y móviles con una arquitectura mantenible. |
| ![Fotografía de Sebastian Jared Roman Zeballos](images/chapter_1/sebastian_roman_zeballos.png) | **Sebastian Jared Roman Zeballos**<br>**Código de estudiante:** U202419009<br>**Carrera:** Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC)<br><br>Estudiante de sexto ciclo de Ingeniería de Software, interesado en el desarrollo de interfaces web, la experiencia de usuario y la integración de servicios mediante APIs. Su formación abarca programación orientada a objetos, estructuras de datos, bases de datos, desarrollo de aplicaciones web y metodologías de trabajo colaborativo. Cuenta con conocimientos en Java, JavaScript, TypeScript, HTML, CSS, Angular, SQL y Git, con interés en crear experiencias digitales claras, funcionales y escalables. |
| ![Fotografia de Josue Carpio Pena](images/chapter_1/josue_carpio.png)                          | **Josué Francisco Carpio Peña**<br>**Código de estudiante:** U202519273<br>**Carrera:** Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC)<br><br>Estudiante de Ingeniería de Software con interés en el desarrollo de software, la ciberseguridad y la construcción de aplicaciones web y móviles. Su formación abarca programación orientada a objetos, bases de datos, desarrollo de aplicaciones web, arquitectura de software y metodologías de trabajo colaborativo. Cuenta con conocimientos en Java, C#, Python, JavaScript, Vue.js, Spring Boot, SQL, APIs REST y Git, además de fundamentos en redes y ciberseguridad. Tiene especial interés en el hacking ético y en el desarrollo de soluciones de software seguras, escalables y mantenibles. |
| ![Fotografía de Alexander Aliaga](images/chapter_1/alexander_aliaga.png) | **Alexander Aliaga**<br>**Código de estudiante:** U202417693<br>**Carrera:** Ingeniería de Software — Universidad Peruana de Ciencias Aplicadas (UPC)<br><br>Estudiante de Ingeniería de Software con interés en el desarrollo *backend*, las aplicaciones web y la arquitectura de software, con enfoque en la construcción de soluciones escalables y mantenibles. Cuenta con conocimientos en NestJS, .NET con C#, Java Spring Boot, Angular, Vue.js, React, PostgreSQL, MySQL, APIs REST, Git y pruebas de software con Jest y JMeter. |

## 1.2. Solution Profile

### 1.2.1. Antecedentes y problemática

#### Técnica de análisis: 5W + 2H

**Who (¿Quiénes?):**
Los principales afectados son jóvenes universitarios de entre 18 y 25 años matriculados en instituciones privadas de Lima Metropolitana, y profesionales jóvenes de entre 25 y 32 años con empleos formales en el sector tecnológico, creativo o de servicios. Ambos segmentos se caracterizan por ser *digital-first* en sus hábitos de consumo: gestionan suscripciones a servicios de streaming, plataformas educativas en línea, herramientas cloud y servicios de entrega a domicilio de forma simultánea y habitual.

**What (¿Qué?):**
El problema es la pérdida sistemática de control sobre el presupuesto personal, causada por la fragmentación y opacidad del ecosistema de cobros automáticos. Los usuarios no tienen visibilidad unificada de cuánto gastan en suscripciones activas, no reciben alertas proactivas antes de las renovaciones automáticas, y no pueden comparar el gasto en moneda extranjera (dólares) con su capacidad económica real en soles peruanos. A esto se suma el impacto acumulado de los gastos de delivery, que los usuarios suelen percibir como transacciones aisladas y de bajo monto, sin comprender su peso real en el presupuesto mensual.

**Where (¿Dónde?):**
El problema ocurre principalmente en el entorno digital: aplicaciones de banca móvil que muestran los cargos de forma descontextualizada, bandeja de entrada de correos electrónicos con notificaciones de renovación que los usuarios ignoran, y estados de cuenta que no distinguen entre gastos recurrentes y transacciones eventuales. El contexto geográfico de mayor impacto es Lima Metropolitana, donde la penetración de internet móvil y la oferta de servicios de suscripción y delivery es la más alta del país.

**When (¿Cuándo?):**
El problema se materializa en dos momentos críticos: (1) al cierre del periodo de facturación mensual, cuando el usuario descubre cargos que había olvidado y que afectan su liquidez, y (2) en el momento de renovación automática de planes anuales (como Smart Fit, Spotify Premium o suscripciones de herramientas cloud), donde el monto cargado de una sola vez puede representar una fracción significativa del ingreso mensual del usuario.

**Why (¿Por qué?):**
La causa raíz es estructural: el ecosistema de servicios digitales está diseñado para maximizar la retención mediante cobros silenciosos y automáticos. La proliferación de opciones —cada una con su propio ciclo de facturación, moneda y canal de notificación— hace que el seguimiento manual sea prácticamente inviable. El mercado de soluciones de gestión financiera personal no ha respondido adecuadamente a las necesidades del segmento joven peruano, que mezcla suscripciones en soles y dólares, membresías físicas con contratos anuales, y gastos de delivery de alta frecuencia.

**How (¿Cómo?):**
El problema se manifiesta a través de múltiples mecanismos: débitos automáticos en tarjetas de crédito o débito sin notificación previa en el canal preferido del usuario, renovaciones anuales que el usuario no recuerda haber contratado, falta de conversión automática entre dólares y soles para suscripciones internacionales, y ausencia de una categorización coherente de los gastos de delivery que permita identificar patrones de consumo.

**How Much (¿Cuánto?):**
Según datos del mercado latinoamericano de aplicaciones de suscripción (Statista, 2024), el usuario promedio en la región tiene entre 4 y 8 suscripciones activas de servicios digitales. En el segmento universitario peruano, estimamos un gasto mensual en suscripciones y delivery de entre S/. 200 y S/. 500, de los cuales entre el 15% y el 25% corresponde a servicios olvidados o subutilizados. A nivel macroeconómico, la industria global del Software-as-a-Service (SaaS) proyecta alcanzar los USD 374 mil millones en ingresos para 2026 (Gartner, 2024), impulsada en parte por la expansión en mercados emergentes como Perú.

---

### 1.2.2. Lean UX Process

#### 1.2.2.1. Lean UX Problem Statements

*Nota: Se aplica la plantilla de **Brand new initiative**, conforme a lo indicado en el enunciado del trabajo final.*

---

El estado actual de la **gestión de finanzas personales para jóvenes consumidores digitales en el Perú** se ha centrado principalmente en **enfoques tradicionales de seguimiento de gastos que categorizan las transacciones de forma retroactiva, sin distinguir entre compras puntuales y compromisos financieros recurrentes, y sin considerar portafolios de suscripciones en múltiples divisas ni el impacto conductual acumulado de los hábitos de pedidos de comida a domicilio de alta frecuencia**.

Lo que los productos y servicios existentes no logran abordar es **la gestión unificada, proactiva y consciente de las divisas del ecosistema heterogéneo de suscripciones, membresías y micro-gastos recurrentes que caracterizan la vida financiera de universitarios y jóvenes profesionales peruanos**. Las soluciones actuales operan en un nivel genérico de presupuesto (sin funcionalidades específicas para suscripciones), están localizadas para otros mercados (sin soporte para portafolios de doble moneda PEN/USD), o no logran integrarse con los recursos nativos del dispositivo (como el calendario del smartphone) para alertas proactivas de renovación.

Nuestro producto/servicio abordará esta brecha **proporcionando CraveWallet, una aplicación móvil nativa y multiplataforma que actúa como una billetera centralizada de suscripciones: rastrea todos los compromisos financieros recurrentes entre membresías físicas, plataformas digitales y servicios de delivery; convierte cargos en múltiples divisas en tiempo real mediante una API externa de tipo de cambio; activa recordatorios basados en el calendario nativo 24 horas antes de cada renovación automática; y ofrece un nivel Premium procesado vía SDK de Stripe para usuarios que demandan análisis avanzados y seguimiento ilimitado de suscripciones**.

Nuestro foco inicial será en **estudiantes universitarios matriculados en instituciones de educación superior privadas del Perú, de entre 18 y 25 años, que gestionan simultáneamente suscripciones a plataformas académicas, servicios de entretenimiento digital y pedidos de comida a domicilio semanales**.

Sabremos que somos exitosos cuando veamos **una reducción autorreportada de cargos inesperados por renovación automática de al menos el 60% entre los usuarios activos dentro de los 90 días desde el primer uso, y una tasa de retención a 30 días superior al 45% entre los usuarios que han registrado tres o más suscripciones activas**.

---

#### 1.2.2.2. Lean UX Assumptions

A continuación se enuncian los cinco tipos de supuestos (assumptions) conforme al proceso Lean UX (Gothelf & Seiden, 2021).

##### Business Assumptions

1. Creemos que existe un mercado desatendido de gestión de finanzas personales para el segmento joven y digital del Perú urbano, específicamente en la intersección entre suscripciones en múltiples divisas, membresías físicas y gastos de delivery de alta frecuencia.
2. Creemos que los usuarios estarán dispuestos a pagar S/. 9.90 mensuales por la versión Premium de CraveWallet, si esta ofrece análisis avanzados de tendencias de gasto, notificaciones prioritarias y capacidad ilimitada de registro de suscripciones.
3. Creemos que el mayor riesgo de negocio en la fase de lanzamiento es la fricción de onboarding: el esfuerzo percibido de registrar manualmente todas las suscripciones activas puede desincentivar la adopción inicial.
4. Creemos que el modelo freemium con conversión Premium vía Stripe SDK es el mecanismo de monetización más alineado con el perfil económico y tecnológico de nuestro segmento objetivo.
5. Creemos que los competidores directos disponibles en el mercado peruano (Spendee, Fintonic, Wallet by BudgetBakers) no resuelven adecuadamente la especificidad local: cobros simultáneos en soles y dólares, suscripciones a plataformas académicas peruanas, y categorización de establecimientos de delivery del mercado limeño.

##### Business Outcome Assumptions

1. Sabremos que nuestro modelo de negocio es económicamente viable cuando al menos el 12% de los usuarios activos mensuales con 6 o más suscripciones registradas conviertan al plan Premium durante los primeros 6 meses de operación.
2. Sabremos que la propuesta de valor genera retención real cuando el 70% de los usuarios que han configurado 3 o más suscripciones activas regresen a la aplicación al menos 3 veces por semana.
3. Sabremos que hemos construido un producto de referencia cuando el Net Promoter Score (NPS) de CraveWallet supere los 40 puntos al término del primer semestre posterior al lanzamiento.
4. Sabremos que la funcionalidad de conversión de divisas agrega valor percibido cuando el 50% de los usuarios con suscripciones en USD la utilicen activamente al menos una vez por semana.

##### User Assumptions

1. Nuestros usuarios primarios son estudiantes universitarios de 18 a 25 años, matriculados en universidades privadas de Lima (UPC, PUCP, UP, USIL, ULima, entre otras), con ingresos propios o mesada que oscilan entre S/. 400 y S/. 1,500 mensuales. Gestionan entre 4 y 8 suscripciones digitales de forma simultánea y realizan pedidos de delivery con una frecuencia de 3 a 5 veces por semana.
2. Nuestros usuarios secundarios son profesionales jóvenes de 25 a 32 años con empleos formales en los sectores tecnológico, creativo o de servicios en Lima Metropolitana, con ingresos entre S/. 2,000 y S/. 5,000 mensuales. Gestionan suscripciones de productividad y herramientas cloud además de membresías físicas como gimnasios e institutos de idiomas.
3. Los usuarios acceden a CraveWallet principalmente desde dispositivos Android de gama media (procesador Snapdragon 6xx, 4-6 GB RAM), aunque el segmento profesional también presenta una proporción relevante de usuarios iOS.
4. Los usuarios no llevan actualmente un registro formal de sus suscripciones: confían en recordar fechas de renovación o en revisar retroactivamente el estado de cuenta bancario tras detectar cargos no esperados.

##### User Outcome and Benefit Assumptions

1. Los usuarios desean recuperar el control de su presupuesto mensual disponible sin necesidad de revisar múltiples estados de cuenta o notificaciones dispersas.
2. Los usuarios desean recibir alertas proactivas antes de que sus suscripciones se renueven automáticamente, con suficiente antelación (mínimo 24 horas) para tomar una decisión de cancelación o de gestión de fondos.
3. Los usuarios desean visualizar el total de sus compromisos financieros recurrentes expresados en una única moneda (soles peruanos), independientemente de la divisa original de cada suscripción.
4. Los usuarios desean entender qué categorías de gasto recurrente (streaming, educación, fitness, delivery, cloud) representan la mayor proporción de su presupuesto mensual, para tomar decisiones de optimización informadas.

##### Feature Assumptions

1. Creemos que un **Dashboard unificado** que muestre el total mensual de suscripciones activas, agrupadas por categoría y ordenadas por próxima fecha de renovación, es la funcionalidad de mayor valor percibido para ambos segmentos objetivo.
2. Creemos que la **integración con el calendario nativo del dispositivo** para agendar recordatorios 24 horas antes de cada cobro automático reducirá significativamente la ocurrencia de renovaciones no deseadas o no anticipadas.
3. Creemos que la **conversión automática de divisas en tiempo real** mediante la integración con ExchangeRate-API es crítica para la percepción de valor entre los usuarios con suscripciones en dólares (herramientas cloud, plataformas educativas internacionales, tiendas de videojuegos).
4. Creemos que el **módulo de registro y categorización de gastos de delivery**, con una lista preconfigurada de establecimientos del mercado limeño (Up Burger, PedidosYa Plus, Dunkin', Popeyes, Little Caesars, Papa John's, Burgerboy, Pollivoro, Chifa Delicious, Chifa Monteoro), motivará a los usuarios a tomar conciencia de su gasto acumulado en este rubro.
5. Creemos que la **modalidad Premium de CraveWallet**, procesada de forma segura a través del SDK de Stripe, convertirá a los usuarios de mayor nivel de compromiso en una fuente de ingresos recurrentes y predecibles para el negocio.

---

#### 1.2.2.3. Lean UX Hypothesis Statements

*Se elabora un Hypothesis Statement por cada Feature Assumption, conforme a la plantilla:*
*"Creemos que lograremos [resultado de negocio] si [estas personas] alcanzan [este beneficio/resultado de usuario] con [esta funcionalidad o solución]."*

---

**Hypothesis Statement 1 — Dashboard Unificado:**

Creemos que lograremos **una tasa de retención de usuarios activos a 30 días superior al 45%** si **estudiantes universitarios de 18 a 25 años con 3 o más suscripciones activas** alcanzan **una visión clara, en tiempo real y en una sola pantalla de todos sus compromisos mensuales recurrentes, agrupados por categoría y ordenados por fecha de renovación** con **el Dashboard Unificado de Suscripciones de CraveWallet**.

---

**Hypothesis Statement 2 — Integración con Calendario Nativo:**

Creemos que lograremos **una reducción autorreportada de cargos inesperados por renovación automática de al menos el 60% dentro de los 90 días desde el primer uso** si **usuarios que han configurado al menos 3 suscripciones activas** alcanzan **conciencia oportuna y accionable de las próximas renovaciones automáticas a través de notificaciones nativas del calendario** con **la funcionalidad de Integración con el Calendario Nativo del Dispositivo, que agenda un evento recordatorio 24 horas antes de cada fecha de cobro de suscripción**.

---

**Hypothesis Statement 3 — Conversión de Divisas en Tiempo Real:**

Creemos que lograremos **un incremento en el promedio de sesiones activas semanales por usuario de 1.2 a 3.5** si **jóvenes profesionales de 25 a 32 años que gestionan un portafolio mixto de suscripciones en USD y PEN** alcanzan **una visión monetaria unificada de todos sus compromisos recurrentes expresada en soles peruanos, actualizada diariamente** con **la funcionalidad de Conversión de Divisas en Tiempo Real impulsada por ExchangeRate-API**.

---

**Hypothesis Statement 4 — Categorización de Gastos de Delivery:**

Creemos que lograremos **una mejora del 25% en el cumplimiento autorreportado del presupuesto mensual** si **ambos segmentos de usuarios, primario y secundario,** alcanzan **conciencia basada en patrones, a nivel de categoría, sobre sus hábitos acumulados de gasto en delivery de comida, visualizados como una tendencia mensual** con **el módulo de Categorización de Gastos de Delivery, precargado con establecimientos frecuentes del mercado limeño (Up Burger, PedidosYa Plus, Dunkin', Popeyes, Little Caesars, Papa John's, Burgerboy, Pollivoro, Chifa Delicious, Chifa Monteoro)**.

---

**Hypothesis Statement 5 — CraveWallet Premium via Stripe SDK:**

Creemos que lograremos **una tasa de conversión Premium de al menos el 12% entre usuarios con 6 o más suscripciones activas dentro de los 6 meses posteriores al lanzamiento** si **usuarios comprometidos con un patrón demostrado de uso frecuente de la aplicación** alcanzan **acceso a análisis avanzados de gasto, espacios ilimitados de seguimiento de suscripciones y recordatorios de renovación prioritarios** con **el nivel de suscripción CraveWallet Premium, habilitado a través de un flujo de pago seguro dentro de la aplicación impulsado por el SDK de Stripe para Android e iOS**.

---

#### 1.2.2.4. Lean UX Canvas

El Lean UX Canvas de CraveWallet se estructura en torno a los ocho bloques del marco de trabajo de Gothelf & Seiden (2021):

| Bloque | Contenido |
|--------|-----------|
| **1. Business Problem** | Los jóvenes peruanos pierden el control de su presupuesto mensual debido a la fragmentación de suscripciones en múltiples plataformas, monedas y ciclos de facturación, sin una herramienta mobile-first que unifique esta visión en el mercado local. |
| **2. Business Outcomes** | NPS > 40 en el primer semestre; tasa de conversión Premium ≥ 12%; retención a 30 días > 45%; reducción de cargos no anticipados ≥ 60%. |
| **3. Users & Customers** | Segmento 1: Estudiante Universitario Digital (18-25 años). Segmento 2: Profesional Joven Activo (25-32 años). |
| **4. User Outcomes & Benefits** | Control del presupuesto sin fricción; alertas proactivas de renovación; visión unificada en PEN; comprensión de patrones de delivery. |
| **5. Solutions** | Dashboard unificado; integración con calendario nativo; conversión de divisas vía ExchangeRate-API; módulo de delivery; plan Premium vía Stripe SDK. |
| **6. Hypotheses** | Ver sección 1.2.2.3 (cinco Hypothesis Statements). |
| **7. What's the Most Important Thing to Learn First?** | Validar si los usuarios están dispuestos a cargar manualmente sus suscripciones al momento del onboarding, o si la fricción de entrada es tan alta que desincentiva la adopción. |
| **8. What's the Least Amount of Work to Learn What We Need to Learn?** | Construir un prototipo de onboarding en Figma con un flujo de carga de 3 suscripciones y someterlo a prueba con 5 usuarios del segmento primario, midiendo el tiempo de completitud y el NPS post-tarea. |
---

## 1.3. Segmentos objetivo

Esta sección describe los dos segmentos de usuarios asociados al dominio del problema de CraveWallet, con sus características demográficas, conductuales y psicográficas, sustentadas en información estadística relevante.

---

### Segmento 1: Estudiante Universitario Digital

**Descripción general:**
Jóvenes de 18 a 25 años matriculados en universidades privadas de Lima Metropolitana (UPC, PUCP, UP, USIL, ULima, entre otras). Reciben ingresos de mesada familiar o trabajo part-time, con un rango estimado de S/. 400 a S/. 1,500 mensuales. Son nativos digitales con una alta densidad de suscripciones activas en plataformas de entretenimiento, educación en línea y herramientas de productividad. Realizan pedidos de delivery con una frecuencia de 3 a 5 veces por semana, especialmente en fines de semana y durante temporadas de exámenes.

**Características demográficas:**
- Edad: 18-25 años.
- Género: Mixto (sin preferencia de género dominante en el problema identificado).
- Distrito de residencia: Principalmente Lima Moderna y Lima Top (Miraflores, San Borja, Surco, La Molina, San Miguel, Barranco).
- Estado civil: Soltero/a, sin dependientes.
- Dispositivo primario: Smartphone Android de gama media (Samsung Galaxy A-series, Redmi Note) con conectividad 4G/5G permanente.

**Suscripciones típicas del segmento:**
Spotify Premium (S/. 17.90/mes), Netflix (S/. 35.90/mes), Disney+ (S/. 27.90/mes), Xbox Game Pass Ultimate (USD 14.99/mes), Steam (compras eventuales), PedidosYa Plus (S/. 12.90/mes), Cisco Networking Academy (USD 0 - acceso académico), Netzun (USD 9.99/mes o acceso institucional).

**Pain points principales:**
1. Descubrimiento tardío de cobros automáticos en estados de cuenta bancarios.
2. Incapacidad de distinguir qué cargos en dólares de la tarjeta corresponden a qué suscripción.
3. Falta de un recordatorio accionable en el canal correcto (notificación push, no email) antes de cada renovación.
4. Desconocimiento del gasto acumulado en delivery semanal y mensual.

**Sustento estadístico:**
Según Deloitte Digital Media Trends (2024), el 68% de los consumidores de 18-25 años en Latinoamérica tiene 3 o más suscripciones de streaming activas simultáneamente. La Encuesta Nacional de Demanda de Servicios de Telecomunicaciones del MTC del Perú (2023) reporta que el 78% de los jóvenes urbanos de 18-24 años usa servicios de entrega a domicilio al menos una vez por semana. La SBS del Perú (2023) indica que solo el 23% de jóvenes de 18-25 años lleva un registro activo de sus gastos mensuales.

---

### Segmento 2: Profesional Joven Activo

**Descripción general:**
Adultos de 25 a 32 años con empleo formal en sectores tecnológicos, creativos o de servicios en Lima Metropolitana. Cuentan con ingresos propios que oscilan entre S/. 2,000 y S/. 5,000 mensuales. Gestionan un portafolio más complejo de suscripciones que combina herramientas de productividad y desarrollo profesional (con facturación frecuente en dólares), membresías físicas con contratos anuales, y plataformas de delivery para sus almuerzos y cenas de trabajo.

**Características demográficas:**
- Edad: 25-32 años.
- Género: Mixto.
- Distrito de residencia: Lima Moderna y Lima Centro (Miraflores, San Isidro, Jesús María, Lince, Pueblo Libre, Surco).
- Estado civil: Soltero/a o en pareja, ocasionalmente con gastos compartidos de hogar.
- Dispositivo primario: Smartphone Android o iOS de gama media-alta, con uso frecuente de laptop para trabajo remoto.

**Suscripciones típicas del segmento:**
Smart Fit Plan Black (S/. 129/mes), Británico cuota mensual (S/. 250-350/mes), MongoDB Atlas (USD 9-57/mes según consumo), GitHub Copilot (USD 10/mes), Notion Plus (USD 8/mes), Adobe Creative Cloud (USD 54.99/mes), PedidosYa Plus (S/. 12.90/mes), LinkedIn Learning (USD 19.99/mes).

**Pain points principales:**
1. Mezcla de gastos profesionales y personales sin categorización diferenciada.
2. Suscripciones a servicios cloud (MongoDB Atlas, AWS) con facturación variable basada en consumo, difícil de presupuestar.
3. Falta de visibilidad del retorno sobre la inversión (ROI) de cada suscripción educativa o de productividad.
4. Renovaciones anuales de membresías físicas que representan un impacto significativo en la liquidez mensual cuando ocurren.

**Sustento estadístico:**
La SBS del Perú (2023) reporta que el 42% de adultos jóvenes entre 25-35 años no lleva un registro formal de sus gastos recurrentes. Según PwC Perú (2024), el 61% de los profesionales millennials en Lima declara que sus gastos en herramientas digitales de trabajo aumentaron más del 30% entre 2022 y 2024. La consultora Kantar (2024) reporta que el gasto promedio mensual en aplicaciones de delivery entre adultos de 25-35 años en Lima supera los S/. 180 mensuales.
