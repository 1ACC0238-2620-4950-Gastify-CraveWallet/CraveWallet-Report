# Capítulo II: Requirements Development and Software Solution Design

## 2.1. Competidores

El mercado de aplicaciones de gestión de finanzas personales es maduro a nivel global, pero se encuentra escasamente especializado en el problema concreto que aborda CraveWallet: la administración proactiva de compromisos financieros recurrentes en un portafolio multimoneda. La mayoría de las soluciones disponibles para el usuario peruano proviene de mercados europeos o estadounidenses y opera bajo el paradigma del registro de gastos *post-facto*, es decir, clasifica lo que el usuario ya gastó en lugar de anticipar lo que está por cobrarse de forma automática.

Para delimitar el entorno competitivo se aplicaron tres criterios de inclusión: (a) disponibilidad efectiva de la aplicación en tiendas móviles accesibles desde Perú, (b) presencia de al menos una funcionalidad orientada al seguimiento de gastos recurrentes o suscripciones, y (c) modelo de negocio basado en un producto digital, freemium o de monetización indirecta. Bajo estos criterios se identificaron tres competidores directos y un conjunto de competidores indirectos.

Se identificaron tres competidores directos:

1. **Spendee** (Spendee a.s., República Checa). Aplicación móvil de gestión de finanzas personales con fuerte énfasis en el diseño visual y en las *wallets* compartidas. Su propuesta central es la categorización de gastos con reportes gráficos y el soporte nativo de múltiples divisas, lo que la convierte en la alternativa más cercana a CraveWallet en el atributo de conversión monetaria. Opera bajo un modelo freemium con dos niveles de pago, cuyo diferencial principal es la sincronización bancaria automática y el número de carteras disponibles [@spendee2026premium]. No ofrece un módulo específico de suscripciones: el usuario debe modelar cada cobro recurrente como una transacción programada dentro de una categoría genérica.
2. **Fintonic** (Fintonic Servicios Financieros, España). Agregador financiero que conecta cuentas bancarias y tarjetas para ofrecer una vista consolidada de movimientos, con un sistema de alertas que notifica cargos duplicados, comisiones bancarias y pagos próximos [@fintonic2026app]. Es la solución del conjunto analizado cuyo sistema de alertas se aproxima más a la lógica de anticipación de CraveWallet. Su modelo de negocio no cobra al usuario final: monetiza mediante un *marketplace* de productos financieros (préstamos y seguros) basado en el perfil que construye con los datos agregados. Resulta especialmente relevante para este análisis que Fintonic cerró sus operaciones en Chile en marzo de 2023, retirándose del único mercado hispanoamericano donde había desplegado su modelo de agregación bancaria [@dfmercados2023fintonic]. Esa retirada constituye evidencia directa de la dificultad de sostener la agregación bancaria como propuesta de valor en Latinoamérica, y respalda la decisión de CraveWallet de no depender de ella.
3. **Wallet by BudgetBakers** (BudgetBakers s.r.o., República Checa). Gestor de finanzas personales y familiares orientado al control presupuestario por categorías. Su fortaleza técnica es la sincronización bancaria con una amplia red de entidades y el soporte multimoneda con tipos de cambio en tiempo real, además del seguimiento de carteras de inversión [@budgetbakers2026premium]. Opera bajo modelo freemium con un nivel Premium mensual y, de forma intermitente, una licencia vitalicia. Al igual que Spendee, trata las suscripciones como un caso particular de transacción recurrente y no como una entidad de dominio con ciclo de vida propio.

Además de los competidores directos, existen alternativas que resuelven parcialmente el problema y que compiten por el mismo espacio mental del usuario:

| Competidor indirecto | Oferta parcialmente similar | Limitación frente a CraveWallet |
| --- | --- | --- |
| **Bobby** (gestor de suscripciones) | Registro manual de suscripciones con recordatorios y pago único de bajo costo, sin cuota recurrente. | Alcance limitado a iOS, sin conversión de divisas en tiempo real, sin categorización de gastos de delivery y sin adaptación al mercado peruano [@cnbc2026trackers]. |
| **Rocket Money** | Detección automática de suscripciones y servicio de cancelación asistida por agentes humanos. | Disponible únicamente en Estados Unidos; su nivel Premium (USD 7 a 14 mensuales) resulta inviable para el poder adquisitivo del segmento objetivo [@rocketmoney2026subs]. |
| **Aplicaciones de banca móvil** (BCP, Interbank, BBVA, Yape) | Historial de movimientos y notificaciones de cargo en tarjeta. | Muestran el cargo cuando ya ocurrió, no lo anticipan; fragmentan la información por entidad y no consolidan suscripciones de distintos bancos ni divisas. |
| **Hojas de cálculo** (Google Sheets, Excel) | Control manual totalmente personalizable y sin costo. | Alta fricción de mantenimiento, ausencia de notificaciones proactivas y dependencia de la disciplina del usuario. |

***

### 2.1.1. Análisis competitivo

El análisis competitivo que se presenta a continuación tiene como propósito responder a la siguiente pregunta guía:

> **¿Por qué llevar a cabo este análisis?**
> ¿Qué atributos del producto permiten a CraveWallet ocupar un espacio defendible en el mercado peruano de gestión financiera personal, frente a competidores internacionales que cuentan con mayor madurez tecnológica, base instalada y capacidad de inversión en marketing, pero que no han adaptado su propuesta de valor a la realidad multimoneda, académica y de consumo por delivery del usuario joven limeño?

El objetivo es contrastar la percepción inicial registrada en los *Business Assumptions* del Capítulo I con un análisis detallado de perfil, marketing, producto y posicionamiento estratégico, de modo que las fortalezas identificadas para CraveWallet sostengan sus oportunidades y se traduzcan en la ventaja competitiva declarada.

#### Competitive Analysis Landscape

*Nota: los precios consignados son referenciales a septiembre de 2026 y pueden variar según la región de la tienda de aplicaciones y la divisa de facturación.*

| | **CraveWallet** (Gastify) | **Spendee** | **Fintonic** | **Wallet by BudgetBakers** |
| --- | --- | --- | --- | --- |
| **Overview** | Startup peruana fundada en 2026 por estudiantes de Ingeniería de Software de la UPC. Aplicación móvil de gestión de suscripciones, membresías y gastos recurrentes para el mercado latinoamericano, con foco inicial en Lima. Producto en fase de validación temprana. | Empresa checa con más de una década en el mercado y presencia global en App Store y Google Play. Producto maduro de gestión de finanzas personales con énfasis en visualización de datos y carteras compartidas. | Fintech española autorizada y supervisada por el Banco de España. Agregador financiero con amplia base instalada en España. Cerró operaciones en Chile en 2023, su única incursión hispanoamericana. | Empresa checa con un ecosistema de productos financieros (Wallet, Board, ShareCost). Producto maduro orientado a finanzas personales y familiares, con red de sincronización bancaria de más de 15 000 entidades. |
| **Ventaja competitiva**<br>¿Qué valor ofrece a los clientes? | Única solución que trata la suscripción como entidad de dominio con ciclo de vida propio: anticipa el cobro 24 horas antes mediante el calendario nativo del dispositivo, expresa el portafolio completo en soles con conversión diaria vía ExchangeRate-API y categoriza el gasto de delivery con comercios limeños precargados. | Experiencia de usuario cuidada y jerarquía visual superior del gasto por categorías. Soporte robusto de múltiples divisas y carteras compartidas entre varios usuarios. | Alertas automáticas sobre cargos duplicados, comisiones bancarias indebidas y pagos próximos, sin costo para el usuario final y sin necesidad de registro manual. | Amplitud funcional: presupuestos por categoría, seguimiento de inversiones, cuentas compartidas y sincronización bancaria automática con actualización de saldos en tiempo real. |
| **Mercado objetivo** | Estudiantes universitarios de 18 a 25 años y profesionales jóvenes de 25 a 32 años de Lima Metropolitana, con portafolio mixto en soles y dólares y consumo frecuente de delivery. | Usuarios globales de clase media urbana, de 25 a 45 años, interesados en el control visual del gasto y en compartir presupuestos de hogar o viaje. | Usuarios bancarizados del mercado español, de 25 a 55 años, con múltiples productos financieros contratados y necesidad de consolidarlos. | Usuarios globales de 25 a 50 años, hogares y familias con necesidad de presupuestar por categorías y de administrar cuentas compartidas. |
| **Estrategias de marketing** | Marketing orgánico de bajo costo: presencia en comunidades universitarias de Lima, contenido educativo sobre salud financiera en redes sociales de alcance juvenil y alianzas con oficinas de bienestar estudiantil. Estrategia de nicho con mensaje hiperlocal. | Posicionamiento ASO en tiendas de aplicaciones, contenido de marca en blog y Medium, y reseñas en medios especializados de finanzas personales. | Marketing de adquisición basado en el gancho del ahorro ("detecta comisiones indebidas") y monetización posterior mediante colocación de productos financieros de terceros. | ASO internacional, programa de contenidos y posicionamiento como suite de productos financieros para el hogar. |
| **Productos & Servicios** | Dashboard unificado de suscripciones activas; integración con el calendario nativo; conversión automática PEN/USD; módulo de registro y categorización de gastos de delivery; nivel Premium con analítica avanzada y registros ilimitados. | Registro de transacciones, presupuestos, carteras múltiples y compartidas, reportes gráficos, soporte multimoneda y sincronización bancaria en el nivel superior. | Agregación de cuentas y tarjetas, clasificación automática de movimientos, alertas de cargos y comisiones, *marketplace* de préstamos y seguros con evaluación de perfil propia. | Registro y sincronización de transacciones, presupuestos por categoría, seguimiento de inversiones, informes, cuentas compartidas y soporte multimoneda con tipo de cambio en tiempo real. |
| **Precios & Costos** | Freemium. Nivel gratuito con hasta cinco suscripciones registradas. Nivel Premium: S/ 9.90 mensuales, procesado con el SDK de Stripe. Precio fijado en moneda local, sin exposición del usuario al tipo de cambio. | Freemium. Nivel Premium desde USD 2.99 mensuales (USD 22.99 anuales) y nivel superior con sincronización bancaria en el rango de USD 5.99 mensuales (USD 35.99 anuales), con prueba gratuita de 7 días. | Gratuito para el usuario final. Monetización indirecta mediante comisiones por la colocación de préstamos y seguros de entidades asociadas. | Freemium. Nivel Premium en torno a EUR 4.49 mensuales, con descuento por pago anual y licencia vitalicia ofrecida de forma intermitente. |
| **Canales de distribución**<br>(Web y/o Móvil) | Móvil: Google Play y App Store. Web: landing page informativa con enlace de descarga. Sin canal de banca ni intermediarios financieros. | Móvil: Google Play y App Store. Web: sitio corporativo y aplicación web complementaria. | Móvil: Google Play y App Store. Web: portal con simuladores y contratación de productos financieros. | Móvil: Google Play y App Store. Web: aplicación web completa y sitio corporativo del ecosistema BudgetBakers. |

#### Análisis FODA enfocado en la competencia

Para cada competidor, y para CraveWallet, se identifican sus fortalezas, debilidades, oportunidades y amenazas, con foco específico en la competencia: cada fortaleza se contrasta con la de los demás actores del cuadro y cada debilidad se lee como el espacio que un competidor puede ocupar primero.

##### CraveWallet (Gastify)

| Fortalezas | Debilidades |
| --- | --- |
| • Especialización en el dominio de suscripciones recurrentes, que ningún competidor modela como entidad propia.<br>• Conocimiento directo del contexto limeño: comercios de delivery, institutos y gimnasios locales precargados.<br>• Precio en soles, sin fricción cambiaria.<br>• Arquitectura DDD que permite incorporar nuevos tipos de compromiso recurrente sin reescribir el núcleo. | • Ausencia total de base instalada y de reconocimiento de marca.<br>• Equipo reducido y capacidad de desarrollo limitada.<br>• Dependencia del registro manual durante el onboarding, principal riesgo identificado en los *Business Assumptions*.<br>• Dependencia de APIs de terceros (Stripe, ExchangeRate-API). |

| Oportunidades | Amenazas |
| --- | --- |
| • Segmento joven peruano desatendido, con alta densidad de suscripciones y sin herramienta localizada.<br>• Crecimiento sostenido del consumo por delivery en Lima.<br>• Vacío dejado por Fintonic en la región.<br>• Posibilidad de alianzas con universidades e institutos cuyas cuotas ya forman parte del portafolio del usuario. | • Que un competidor con base instalada añada un módulo de suscripciones antes de que CraveWallet alcance masa crítica.<br>• Que los bancos peruanos incorporen alertas de recurrencia en sus propias aplicaciones.<br>• Cambios en las condiciones comerciales de Stripe o de la API de tipo de cambio.<br>• Fricción de onboarding que frene la adopción. |

##### Spendee

| Fortalezas | Debilidades |
| --- | --- |
| • Base instalada consolidada, marca reconocida y calidad de diseño superior.<br>• Soporte multimoneda maduro y probado.<br>• Carteras compartidas, funcionalidad con alta retención. | • No ofrece módulo de suscripciones ni alertas de renovación anticipadas.<br>• Precios en dólares, que exponen al usuario peruano a la variación cambiaria.<br>• Sincronización bancaria sin cobertura efectiva de entidades peruanas. |

| Oportunidades | Amenazas |
| --- | --- |
| • Expansión hacia mercados emergentes.<br>• Incorporación de un módulo de suscripciones apoyada en su base de usuarios existente. | • Entrada de soluciones especializadas de nicho que erosionen su base en segmentos concretos.<br>• Presión de precios de alternativas gratuitas. |

##### Fintonic

| Fortalezas | Debilidades |
| --- | --- |
| • Gratuidad total para el usuario y ausencia de fricción de registro manual gracias a la agregación bancaria.<br>• Respaldo regulatorio del Banco de España, que genera confianza. | • Retirada comprobada del mercado hispanoamericano tras el cierre de Chile en 2023, que evidencia la fragilidad de su modelo fuera de España.<br>• Modelo de negocio basado en la colocación de productos financieros, que genera desconfianza respecto del uso de los datos.<br>• Sin localización para Perú. |

| Oportunidades | Amenazas |
| --- | --- |
| • Reactivación de su expansión regional aprovechando el avance de la banca abierta en Latinoamérica. | • Regulación creciente sobre el uso de datos financieros para la colocación de productos de terceros.<br>• Desconfianza del usuario latinoamericano hacia la cesión de credenciales bancarias. |

##### Wallet by BudgetBakers

| Fortalezas | Debilidades |
| --- | --- |
| • Mayor amplitud funcional del conjunto analizado y la red de sincronización bancaria más extensa.<br>• Ecosistema de productos complementarios que aumenta el valor de permanencia. | • Interfaz densa y curva de aprendizaje elevada para un usuario joven que busca resolver una tarea puntual.<br>• Precio en euros.<br>• Cobertura bancaria peruana marginal, lo que reduce su funcionalidad diferencial a un registro manual equivalente al de cualquier competidor. |

| Oportunidades | Amenazas |
| --- | --- |
| • Aprovechar su red de sincronización para incorporar detección automática de suscripciones si amplía la cobertura bancaria en la región. | • Competencia de soluciones más simples y enfocadas, que resuelven una tarea específica con menor curva de aprendizaje. |

#### Interpretación del análisis

El contraste entre los cuatro perfiles revela un patrón consistente: **ninguno de los competidores analizados trata la suscripción como una entidad de dominio con ciclo de vida propio**. Spendee y Wallet la reducen a una transacción recurrente dentro de una categoría genérica, mientras que Fintonic la infiere a posteriori del movimiento bancario ya ejecutado. Esta es la brecha que sostiene la ventaja competitiva de CraveWallet y la que da sentido a la decisión arquitectónica de modelar el Bounded Context de suscripciones de forma independiente.

Un segundo hallazgo es que la sincronización bancaria automática, principal fortaleza técnica de Spendee y Wallet y razón de ser de Fintonic, **no se traduce en ventaja efectiva en el mercado peruano**, porque la cobertura de entidades locales es marginal. El cierre de las operaciones chilenas de Fintonic en 2023 confirma que esa dependencia es precisamente el punto de quiebre del modelo en la región. En la práctica, el usuario peruano de cualquiera de los tres competidores termina registrando sus movimientos a mano, es decir, con la misma fricción que tendría en CraveWallet pero sin ninguna de sus funcionalidades específicas.

El tercer hallazgo es de naturaleza económica. Los tres competidores facturan en divisa extranjera. Para un estudiante con ingresos de entre S/ 400 y S/ 1 500 mensuales, pagar USD 5.99 por una aplicación que no resuelve su problema concreto es una propuesta débil; la fijación del precio Premium de CraveWallet en S/ 9.90 elimina esa barrera y, además, es coherente con el propio discurso del producto sobre la opacidad del gasto en dólares.

***

### 2.1.2. Estrategias y tácticas frente a competidores

A partir del cruce de la matriz FODA se definen cuatro estrategias preliminares. Cada una responde a un cuadrante del cruce (fortalezas-oportunidades, fortalezas-amenazas, debilidades-oportunidades y debilidades-amenazas) y se descompone en tácticas concretas, verificables en el horizonte de los sprints planificados.

***

#### Estrategia 1 (FO). Especialización en el dominio de suscripciones como territorio de marca

*Aprovechar la especialización funcional para capturar el segmento joven desatendido.*

Frente a competidores generalistas, CraveWallet no compite como "otra app de finanzas personales" sino como el gestor de compromisos recurrentes. Todo el producto y su comunicación se ordenan alrededor de esa única promesa.

**Tácticas:**

1. Priorizar en el Product Backlog las historias del Dashboard unificado y de la integración con el calendario nativo por encima de cualquier funcionalidad de registro de gasto genérico, de modo que la primera versión pública ya exhiba el diferencial.
2. Construir el mensaje de la landing page sobre el momento de dolor concreto ("descubriste el cobro cuando ya te lo descontaron") en lugar de sobre categorías abstractas de presupuesto.
3. Precargar el catálogo de comercios, institutos y gimnasios limeños en el onboarding, de manera que el usuario reconozca su propio contexto en los primeros treinta segundos de uso.

#### Estrategia 2 (FO). Localización monetaria y comercial como barrera de entrada

*Convertir el conocimiento del contexto peruano en una ventaja difícil de replicar por un competidor extranjero.*

**Tácticas:**

1. Expresar la totalidad del portafolio en soles mediante la conversión diaria con ExchangeRate-API, mostrando siempre el monto original y el convertido para sostener la promesa de transparencia.
2. Fijar el precio Premium en soles (S/ 9.90) y comunicarlo de forma explícita frente a la facturación en dólares o euros de los competidores.
3. Mantener el catálogo local de comercios y servicios como activo del producto, ampliándolo con las sugerencias que se recojan en las entrevistas de la sección 2.2.

#### Estrategia 3 (DO). Reducción agresiva de la fricción de onboarding

*Neutralizar la principal debilidad propia aprovechando la ausencia de sincronización bancaria efectiva de los competidores.*

Dado que en el mercado peruano el usuario de Spendee, Fintonic o Wallet también registra manualmente, la competencia real no se juega en la automatización sino en cuál de las aplicaciones hace ese registro más rápido y menos tedioso.

**Tácticas:**

1. Reducir el alta de una suscripción a tres toques mediante plantillas preconfiguradas de los servicios más frecuentes del segmento (Spotify, Netflix, Smart Fit, PedidosYa Plus, entre otros), con monto y ciclo de facturación ya poblados.
2. Diseñar un onboarding progresivo que exija una sola suscripción para mostrar valor y solicite las siguientes de forma incremental, en lugar de bloquear el acceso hasta completar el portafolio.
3. Instrumentar la medición del tiempo de completitud del onboarding y de la tasa de abandono por paso, para validar o refutar el supuesto de fricción declarado en el Capítulo I.
4. Validar esta hipótesis en el prototipo de Figma antes de escribir código de producción, conforme a lo comprometido en el bloque 8 del Lean UX Canvas.

#### Estrategia 4 (FA). Defensa del nicho ante la reacción de competidores y bancos

*Construir permanencia antes de que un competidor con base instalada replique la funcionalidad.*

**Tácticas:**

1. Acumular valor histórico en la cuenta del usuario: cuanto más largo sea su registro de renovaciones y de gasto en delivery, mayor será el costo de cambiarse a otra herramienta.
2. Mantener el nivel gratuito genuinamente útil (hasta cinco suscripciones), de modo que la competencia por precio de alternativas gratuitas no desplace al producto antes de la conversión.
3. Aislar las integraciones de terceros (Stripe, ExchangeRate-API) tras interfaces del dominio en la capa de infraestructura, para que un cambio de proveedor no comprometa el núcleo funcional ante variaciones de condiciones comerciales.
4. Explorar alianzas con oficinas de bienestar estudiantil e institutos de idiomas, un canal de adquisición que los competidores internacionales no pueden activar desde fuera del país.

***

## 2.2. Entrevistas

Esta sección documenta el proceso de investigación cualitativa mediante el cual se recoge información directa de representantes de los dos segmentos objetivo definidos en la sección 1.3. El propósito de las entrevistas no es validar la solución propuesta, sino comprender el comportamiento, las motivaciones y las frustraciones reales de los usuarios frente a la gestión de sus compromisos financieros recurrentes, de modo que los arquetipos (User Personas) y los artefactos de Needfinding de la sección 2.3 se construyan sobre evidencia recolectada y no sobre supuestos del equipo.

### 2.2.1. Diseño de entrevistas

#### Objetivos de la investigación

El diseño del instrumento responde a cinco objetivos de investigación, derivados directamente de los supuestos declarados en el Lean UX Process del Capítulo I:

| # | Objetivo de investigación | Supuesto que pone a prueba |
| --- | --- | --- |
| OI-1 | Caracterizar demográfica y biográficamente a los representantes de cada segmento, para sustentar los atributos objetivos de los User Personas. | *User Assumptions* 1 y 2 (rangos de edad, ingreso y ocupación). |
| OI-2 | Describir el portafolio real de suscripciones, membresías y gastos recurrentes de cada entrevistado, incluyendo la divisa de facturación. | *User Assumptions* 1 y 4 (densidad de 4 a 8 suscripciones y ausencia de registro formal). |
| OI-3 | Reconstruir cómo el usuario se entera hoy de un cobro automático y qué hace cuando lo descubre. | *Feature Assumption* 2 (valor de la alerta anticipada). |
| OI-4 | Identificar las frustraciones y los objetivos personales asociados al control del presupuesto mensual. | *User Outcome and Benefit Assumptions* 1 a 4. |
| OI-5 | Levantar el perfil tecnológico y de canales digitales: dispositivos, sistema operativo, aplicaciones de uso diario, marcas de referencia e influencias. | *User Assumption* 3 (Android de gama media como dispositivo primario). |

#### Metodología

| Aspecto | Definición |
| --- | --- |
| **Tipo de entrevista** | Semiestructurada, individual y en profundidad. El guion fija los temas obligatorios, pero permite al entrevistador profundizar con preguntas complementarias según las respuestas. |
| **Duración estimada** | De 20 a 30 minutos por entrevista. |
| **Muestra** | De 3 a 5 entrevistados por segmento, conforme a lo exigido en el enunciado del trabajo final. |
| **Criterios de selección** | Segmento 1: estudiante de universidad privada de Lima Metropolitana, de 18 a 25 años, con al menos tres suscripciones digitales activas.<br>Segmento 2: profesional de 25 a 32 años con empleo formal en Lima Metropolitana, con al menos una suscripción facturada en dólares o una membresía física vigente. |
| **Modalidad** | Remota mediante videollamada, o presencial con grabación, según disponibilidad del entrevistado. |
| **Registro** | Grabación en video con consentimiento informado previo, consolidada en un único archivo editado según la nomenclatura indicada en el enunciado. |
| **Rol del entrevistador** | Un integrante conduce la entrevista y toma notas del comportamiento no verbal. Las preguntas se formulan en el orden del guion, sin adelantar la descripción de CraveWallet. |

#### Buenas prácticas aplicadas al diseño

El instrumento se elaboró siguiendo las prácticas recomendadas para la investigación cualitativa en diseño de producto [@portigal2013interviewing; @gothelf2021leanux]:

1. **Preguntas abiertas y neutrales.** Se evita toda formulación que sugiera la respuesta esperada o que mencione una funcionalidad del producto antes de que el entrevistado exprese la necesidad por su cuenta.
2. **Conducta pasada antes que intención futura.** Las preguntas indagan sobre hechos concretos ya ocurridos ("cuéntame la última vez que...") en lugar de escenarios hipotéticos, porque la intención declarada es un predictor débil del comportamiento real.
3. **Profundización por capas (*laddering*).** Cada pregunta principal se acompaña de preguntas complementarias que descienden del hecho a la motivación, con el fin de llegar al porqué y no quedarse en el qué.
4. **De lo general a lo específico.** El guion abre con temas amplios y cómodos (biografía, rutina) y reserva los temas sensibles (ingresos, cobros no anticipados) para el tramo medio, cuando ya existe confianza.
5. **Ausencia de pitch.** La descripción de CraveWallet se reserva para la pregunta de cierre, de modo que no contamine las respuestas previas.
6. **Silencio productivo.** El entrevistador tolera las pausas antes de reformular, práctica que favorece las respuestas espontáneas más ricas.

#### Trazabilidad entre atributos del arquetipo y preguntas

La siguiente matriz garantiza que cada característica exigida para la construcción de los User Personas tenga al menos una pregunta que la levante, de modo que ningún atributo del arquetipo de la sección 2.3.1 provenga de la intuición del equipo.

| Atributo del User Persona | Bloque del guion | Preguntas |
| --- | --- | --- |
| Edad, género, distrito, estado civil, composición familiar | Bloque A | A1, A2, A3 |
| Ocupación, nivel educativo, ingresos | Bloque A | A4, A5 |
| Antecedentes y biografía | Bloque A | A6 |
| Personalidad y actitud frente al dinero | Bloque B | B1, B2, B3 |
| Habilidades y alfabetización digital y financiera | Bloque B | B4, B5 |
| Dispositivos preferidos y sistema operativo | Bloque C | C1, C2 |
| Canales digitales de interacción y navegador | Bloque C | C3, C4 |
| Afinidad por marcas e influencias | Bloque C | C5, C6 |
| Portafolio de suscripciones y divisa | Bloque D | D1, D2, D3 |
| Hábitos de delivery y gasto asociado | Bloque D (Segmento 1) / Bloque E (Segmento 2) | D6, E1 a E4 |
| Objetivos y motivaciones | Bloque F | F1, F2 |
| Frustraciones y puntos de dolor | Bloque F | F3, F4, F5 |

***

#### Guion de entrevista — Segmento 1: Estudiante Universitario Digital

**Bloque A. Apertura, demografía y biografía**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| A1 | Para empezar, cuéntame quién eres: tu nombre, tu edad y en qué distrito vives. | ¿Vives solo, con tu familia o compartes departamento? ¿Hace cuánto vives ahí? |
| A2 | ¿Cómo está compuesta tu familia o el hogar donde vives? | ¿Compartes algún gasto con ellos? ¿Quién decide en qué se gasta? |
| A3 | ¿Cuál es tu estado civil o situación sentimental actual? | ¿Comparten gastos o suscripciones con tu pareja o con amigos? |
| A4 | ¿Qué carrera estudias, en qué universidad y en qué ciclo vas? | ¿Trabajas o haces prácticas además de estudiar? ¿Cuántas horas a la semana? |
| A5 | ¿De dónde proviene el dinero que administras cada mes? | Sin necesidad de darme la cifra exacta, ¿dirías que está más cerca de S/ 500, de S/ 1 000 o de S/ 1 500? ¿Es un monto fijo o variable? |
| A6 | Cuéntame cómo fue que empezaste a manejar tu propio dinero. | ¿Qué te enseñaron en casa sobre el ahorro? ¿Recuerdas la primera suscripción que pagaste tú mismo? |

**Bloque B. Personalidad, habilidades y relación con el dinero**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| B1 | ¿Cómo describirías tu forma de gastar: más planificada o más impulsiva? | ¿Puedes darme un ejemplo reciente de cada una? |
| B2 | ¿Llevas algún tipo de control de tus gastos? Cuéntame cómo lo haces. | ¿Usas una app, una hoja de cálculo, papel, o lo llevas mentalmente? ¿Desde cuándo? ¿Qué te hizo empezar o dejarlo? |
| B3 | ¿Qué sientes cuando revisas tu estado de cuenta a fin de mes? | ¿Te ha pasado que encuentras algo que no esperabas? ¿Qué hiciste? |
| B4 | ¿Qué tan cómodo te sientes probando una aplicación nueva? | ¿Eres de los que la explora solo o prefieres que alguien te la enseñe? ¿Lees los tutoriales? |
| B5 | ¿Has usado alguna vez una app de finanzas personales o de presupuesto? | ¿Cuál? ¿Por qué la dejaste? ¿Qué fue lo que más te costó de usarla? |

**Bloque C. Tecnología, canales digitales, marcas e influencias**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| C1 | ¿Qué celular usas y hace cuánto lo tienes? | ¿Android o iPhone? ¿Qué modelo? ¿Se te llena la memoria o va fluido? |
| C2 | Además del celular, ¿qué otros dispositivos usas en el día? | ¿Laptop, tablet, smartwatch? ¿Para qué usas cada uno? |
| C3 | ¿Cuáles son las tres aplicaciones que más abres al día? | ¿Cuál es la primera que abres al despertar? |
| C4 | ¿Por dónde te enteras de las cosas: notificaciones, correo, redes? | ¿Revisas tu correo personal a diario? ¿Qué navegador usas en la laptop? ¿Cuántas notificaciones sin leer tienes ahora mismo? |
| C5 | ¿Hay alguna marca o aplicación que consideres bien hecha y que te guste usar? | ¿Qué es lo que te gusta de ella? ¿La recomendarías? |
| C6 | ¿A quién sigues o escuchas cuando quieres aprender algo sobre dinero o tecnología? | ¿Creadores de contenido, amigos, profesores, familia? ¿En qué plataforma? |

**Bloque D. Portafolio de suscripciones y gastos recurrentes**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| D1 | Hagamos una lista: ¿qué servicios te cobran todos los meses de forma automática? | ¿Streaming, música, videojuegos, plataformas de estudio, gimnasio, instituto? ¿Se te ocurre alguno más? |
| D2 | ¿Alguno de esos te cobra en dólares? | ¿Sabes cuánto terminas pagando en soles? ¿Cómo te enteras del monto final? |
| D3 | ¿Con qué medio se pagan esos servicios? | ¿Tarjeta propia o de un familiar? ¿Débito o crédito? ¿Alguna es compartida con amigos? |
| D4 | Cuéntame la última vez que te cobraron algo que no tenías presente. | ¿Cómo te diste cuenta? ¿Cuánto tiempo pasó desde el cobro? ¿Qué hiciste después? ¿Llegaste a cancelarlo? |
| D5 | ¿Cómo sabes hoy cuándo se te va a renovar una suscripción? | ¿Te llega correo, notificación, o simplemente aparece el cargo? ¿Le haces caso a esos avisos? |
| D6 | Pensando en la última semana, ¿cuántas veces pediste delivery? | ¿De qué locales? ¿Tienes alguna membresía de delivery? Si tuvieras que estimar cuánto gastaste en delivery el mes pasado, ¿qué monto dirías? |
| D7 | ¿Hay alguna suscripción que pagues y casi no uses? | ¿Por qué no la has cancelado? ¿Qué tendría que pasar para que la canceles? |

**Bloque E. Contexto académico y de consumo**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| E1 | ¿Pagas alguna plataforma o herramienta por motivos de estudio? | ¿La paga la universidad o tú? ¿La seguirías pagando si no fuera obligatoria? |
| E2 | ¿Tus gastos cambian según la época del ciclo? | ¿Gastas distinto en semana de exámenes? ¿Y en vacaciones? |
| E3 | ¿Compartes alguna cuenta o plan familiar con otras personas? | ¿Quién paga y quién devuelve el dinero? ¿Cómo llevan esa cuenta entre ustedes? |

**Bloque F. Objetivos, frustraciones y cierre**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| F1 | Si pudieras cambiar una cosa de cómo manejas tu dinero hoy, ¿cuál sería? | ¿Por qué esa y no otra? ¿Lo has intentado antes? |
| F2 | ¿Estás ahorrando para algo en particular? | ¿Cuánto llevas? ¿Qué te dificulta avanzar? |
| F3 | ¿Qué es lo que más te molesta del manejo de tus suscripciones? | ¿Qué tan seguido te pasa? ¿Cómo te hace sentir? |
| F4 | ¿Has intentado cancelar alguna suscripción? Cuéntame cómo fue. | ¿Lo lograste al primer intento? ¿Cuánto tiempo te tomó? |
| F5 | Si una aplicación pudiera resolverte un solo problema con tus gastos, ¿cuál escogerías? | ¿Pagarías por ella? ¿Cuánto te parecería razonable al mes? |
| F6 | *(Solo al cierre)* Te cuento brevemente en qué estamos trabajando: una app que reúne todas tus suscripciones, te avisa un día antes de cada cobro y te muestra el total en soles. ¿Qué opinas? | ¿Qué le falta? ¿Qué te haría desinstalarla en la primera semana? ¿A quién de tus amigos se la recomendarías? |

***

#### Guion de entrevista — Segmento 2: Profesional Joven Activo

**Bloque A. Apertura, demografía y biografía**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| A1 | Cuéntame quién eres: tu nombre, tu edad y en qué distrito vives. | ¿Vives solo, en pareja, con roommates o con tu familia? ¿Hace cuánto? |
| A2 | ¿Cómo está compuesto tu hogar? | ¿Tienes dependientes o apoyas económicamente a alguien? ¿Comparten gastos fijos? |
| A3 | ¿Cuál es tu estado civil? | Si vives en pareja, ¿cómo organizan los gastos comunes? ¿Hay cuentas compartidas? |
| A4 | ¿A qué te dedicas y hace cuánto trabajas en eso? | ¿Trabajas en planilla, por recibos o de forma independiente? ¿Presencial, híbrido o remoto? |
| A5 | ¿Tus ingresos son fijos o varían mes a mes? | ¿Recibes bonos o ingresos por proyectos aparte? ¿En qué moneda te pagan? |
| A6 | Cuéntame cómo llegaste a la forma en que hoy organizas tu dinero. | ¿Cambió algo cuando empezaste a trabajar? ¿Qué aprendiste por las malas? |

**Bloque B. Personalidad, habilidades y relación con el dinero**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| B1 | ¿Cómo describirías tu perfil financiero: ordenado, improvisado, o depende del mes? | ¿Puedes darme un ejemplo concreto del último mes? |
| B2 | ¿Qué herramienta usas hoy para llevar el control de tus gastos? | ¿Excel, la app del banco, una app de finanzas, ninguna? ¿Qué tan seguido la revisas? |
| B3 | ¿Separas tus gastos personales de los profesionales? | ¿Cómo lo haces? ¿Usas tarjetas distintas? ¿Qué pasa cuando se mezclan? |
| B4 | ¿Qué tan cómodo te sientes conectando tus cuentas bancarias a una aplicación de terceros? | ¿Lo has hecho antes? ¿Qué te daría confianza o desconfianza? |
| B5 | ¿Has probado alguna app de finanzas personales? | ¿Cuál? ¿Cuánto tiempo la usaste? ¿Por qué la dejaste? |

**Bloque C. Tecnología, canales digitales, marcas e influencias**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| C1 | ¿Qué celular usas y con qué sistema operativo? | ¿Lo cambias con frecuencia? ¿Qué te hizo elegirlo? |
| C2 | ¿Qué otros dispositivos usas para trabajar? | ¿Laptop personal o de la empresa? ¿Usas tablet o smartwatch? |
| C3 | ¿Qué aplicaciones son parte de tu rutina de trabajo diaria? | ¿Cuáles pagas tú y cuáles paga tu empresa? |
| C4 | ¿Cómo prefieres que te avisen de algo importante: correo, notificación push, WhatsApp, calendario? | ¿Usas el calendario del celular para tu vida personal o solo para el trabajo? ¿Qué navegador usas? |
| C5 | ¿Qué producto digital consideras que está bien hecho y por qué? | ¿Pagarías más por una alternativa mejor diseñada? |
| C6 | ¿Dónde te informas sobre finanzas, inversión o tecnología? | ¿Sigues a alguien en particular? ¿Boletines, pódcast, LinkedIn? |

**Bloque D. Portafolio de suscripciones, membresías y divisas**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| D1 | Listemos todo lo que se te cobra de forma recurrente, personal y de trabajo. | ¿Herramientas de productividad, servicios cloud, streaming, gimnasio, instituto de idiomas? |
| D2 | ¿Cuántas de esas se te cobran en dólares? | ¿Sabes cuánto te terminan costando en soles? ¿Revisas el tipo de cambio que te aplicó el banco? |
| D3 | ¿Tienes alguna suscripción cuyo monto cambia según cuánto la uses? | ¿Cómo controlas ese gasto variable? ¿Te ha sorprendido alguna factura? |
| D4 | ¿Tienes alguna membresía con contrato anual o de varios meses? | ¿Recuerdas cuándo se renueva? ¿Qué pasó la última vez que se renovó? |
| D5 | Cuéntame la última vez que un cobro automático te descuadró el mes. | ¿Cómo te enteraste? ¿Qué hiciste? ¿Cambiaste algo después de eso? |
| D6 | ¿Cómo decides si una suscripción vale lo que cuesta? | ¿Has hecho ese cálculo alguna vez? ¿Con qué frecuencia depuras lo que pagas? |

**Bloque E. Hábitos de consumo y delivery**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| E1 | ¿Cómo resuelves tus almuerzos y cenas en un día típico de trabajo? | ¿Cocinas, pides, comes fuera? ¿Cambia si trabajas desde casa? |
| E2 | ¿Tienes alguna membresía de delivery? | ¿Sientes que la recuperas con lo que pides? ¿La has calculado? |
| E3 | ¿Qué aplicaciones de delivery usas y por qué esas? | ¿Comparas precios entre ellas? ¿Te influyen las promociones? |
| E4 | ¿Cuánto crees que gastaste en delivery el mes pasado? | ¿Te sorprende esa cifra al decirla en voz alta? ¿La has revisado alguna vez en tu estado de cuenta? |

**Bloque F. Objetivos, frustraciones y cierre**

| # | Pregunta principal | Preguntas complementarias |
| --- | --- | --- |
| F1 | ¿Cuáles son tus metas financieras para los próximos dos años? | ¿Qué te está frenando hoy? ¿Qué parte depende de tus gastos fijos? |
| F2 | ¿Qué información te gustaría tener sobre tu dinero y hoy no tienes? | ¿Por qué esa? ¿Qué decisión tomarías con ella? |
| F3 | ¿Qué es lo más frustrante de administrar tus pagos recurrentes? | ¿Con qué frecuencia te ocurre? ¿Te ha causado algún problema concreto? |
| F4 | ¿Has pagado alguna vez por algo que ya no usabas? | ¿Cuánto tiempo pasó hasta que lo notaste? ¿Cuánto calculas que perdiste? |
| F5 | ¿Pagarías por una herramienta que te resuelva esto? | ¿Cuánto al mes te parecería razonable? ¿Qué tendría que hacer para que valga la pena? |
| F6 | *(Solo al cierre)* Estamos construyendo una app que centraliza tus suscripciones, te avisa un día antes de cada renovación y convierte todo a soles automáticamente. ¿Qué te parece? | ¿Qué le falta para que la uses? ¿Qué te generaría desconfianza? ¿La recomendarías en tu trabajo? |

***

#### Consentimiento y ficha de registro

Antes de iniciar la grabación, el entrevistador lee el siguiente texto y solicita confirmación verbal en video:

> "Esta conversación se está grabando con fines exclusivamente académicos, para un trabajo del curso de Aplicaciones para Dispositivos Móviles de la UPC. No vamos a usar tus datos con ningún fin comercial y puedes pedirnos que detengamos la grabación en cualquier momento. ¿Estás de acuerdo con que grabemos?"

Cada entrevista se registra con la siguiente ficha, que se completa durante la sesión y sirve de base para el resumen de la sección 2.2.2:

| Campo | Contenido |
| --- | --- |
| Nombres y apellidos | |
| Edad | |
| Distrito de residencia | |
| Ocupación | |
| Segmento objetivo | Segmento 1 o Segmento 2 |
| Fecha y hora de la entrevista | |
| Modalidad | Remota o presencial |
| Duración | |
| Entrevistador | |
| Timing de inicio en el video consolidado | |
| URL del video | |

### 2.2.2. Registro de entrevistas

Esta sección consolidará, para cada uno de los dos segmentos, entre tres y cinco entrevistas grabadas siguiendo el guion y la ficha de la sección 2.2.1. Todas las sesiones se editarán en un único video, subido al OneDrive indicado por el docente con la nomenclatura `upc-pre-<periodo>-1acc0238-<NRC>-<startup>-needfinding-<avn/tbn>`. Para cada entrevista se incluirá aquí la ficha completa (nombres, edad, distrito, entrevistador, duración, timing de inicio en el video consolidado y URL), una captura de pantalla del fragmento correspondiente, y un resumen redactado que describa de forma descriptiva las respuestas obtenidas en cada bloque del guion, cubriendo tanto los rasgos objetivos (demografía, portafolio de suscripciones, dispositivos) como los subjetivos (personalidad, marcas de referencia, frustraciones) exigidos por el enunciado.

[[PENDIENTE: registro de las entrevistas una vez grabadas]]

### 2.2.3. Análisis de entrevistas

El análisis se realizará por segmento objetivo, a partir de los resúmenes de la sección 2.2.2, siguiendo el mismo procedimiento aplicado en la sección 2.2.1 para trazar los atributos: por cada hallazgo se reportará el porcentaje de entrevistados que lo manifestó, y cada porcentaje quedará vinculado de forma explícita a las entrevistas de las que proviene, de modo que ninguna característica de los User Personas de la sección 2.3.1 quede sin sustento verificable. El resultado esperado de esta sección son los patrones objetivos y subjetivos —comportamiento de pago, portafolio típico, fricciones y motivaciones— que alimentarán directamente el Needfinding.

[[PENDIENTE: análisis estadístico una vez registradas las entrevistas]]

## 2.3. Needfinding

El Needfinding traduce los hallazgos de la sección 2.2 en los artefactos de diseño que sirven de puente hacia la especificación de requisitos de la sección 2.4: primero los arquetipos de usuario, luego las tareas y los recorridos que esos arquetipos ejecutan hoy sin CraveWallet, y finalmente el vocabulario compartido del dominio. El criterio de trabajo para todas las subsecciones es el mismo que ya rigió el diseño de las entrevistas en 2.2.1: cualquier dato que aparezca en un persona, una tarea o un evento debe poder rastrearse hasta una respuesta concreta registrada en 2.2.2 y cuantificada en 2.2.3, sin excepción.

### 2.3.1. User Personas

Se elaborará una ficha de User Persona por cada segmento objetivo en UXPressia. Cada atributo de la ficha —demográfico, tecnológico o de comportamiento— deberá poder rastrearse hasta el porcentaje o la cita correspondiente del análisis de la sección 2.2.3, sin añadir ningún rasgo que no tenga ese respaldo.

#### User Persona 1 — Segmento 1: Estudiante Universitario Digital

**Nombre:** Diego Alcántara Torres
**Edad:** 21 años
**Ocupación:** Estudiante de Ingeniería de Sistemas — UPC (5.° ciclo)
**Distrito:** San Miguel, Lima Metropolitana
**Estado civil:** Soltero, vive con sus padres

---

**Demografía y contexto económico**

Diego dispone de aproximadamente S/ 900 al mes, distribuidos entre la mesada que recibe de sus padres (S/ 600) y lo que genera diseñando logos por encargo en redes sociales (S/ 300 promedio). No tiene tarjeta de crédito propia; usa la débito del BCP vinculada a su cuenta de ahorros y ocasionalmente la tarjeta Visa de su madre para suscripciones en dólares. Estudia a tiempo completo y dedica entre 10 y 12 horas semanales a proyectos freelance.

**Portafolio de gastos recurrentes (referencial)**

| Servicio | Tipo | Monto | Moneda |
| --- | --- | --- | --- |
| Netflix (cuota de plan familiar compartido) | Streaming | S/ 10 | PEN |
| Spotify Premium | Música | S/ 15 | PEN |
| Smart Fit — Plan Black | Membresía física | S/ 79.90 | PEN |
| Netzun | Educación tecnológica | S/ 49 | PEN |
| Cisco Networking Academy | Certificación técnica | Gratuito | — |
| Binance (comisiones y compras de cripto) | Criptomonedas | Variable | USD |
| PedidosYa / Up Burger (sin membresía, pero recurrente) | Delivery fast-food | ~S/ 130 | PEN |

**Personalidad**

Explorador digital: instala aplicaciones sin leer tutoriales y las desinstala si no entiende su valor en los primeros dos minutos. Impulsivo con los gastos pequeños ("es solo S/ 15"), pero responsable con objetivos grandes (ahorra para una laptop). Le incomoda revisar su estado de cuenta porque suele encontrar cargos que no recuerda. Sigue a creadores de contenido de finanzas personales en TikTok pero no aplica sus consejos de forma sistemática.

**Objetivos**

- Ahorrar S/ 2,000 en seis meses para renovar su laptop de trabajo.
- Entender cuánto gasta realmente cada mes, sin sorpresas a fin de periodo.
- Cancelar los servicios que no usa sin tener que recordar contraseñas ni navegar menús complejos.

**Frustraciones**

- Descubrió el cargo mensual de Smart Fit Plan Black tres meses después de dejar de asistir al gimnasio; había pagado S/ 239.70 sin usar el servicio.
- Binance le cobró comisiones de custodia que no anticipó; no identificó el cargo hasta que consultó a un amigo técnico.
- Netzun se renovó automáticamente un mes en que su cuenta tenía saldo justo; el cargo dejó la cuenta en negativo y generó una penalidad adicional.

**Marcas de referencia (positivas)**

Notion, Figma (plan gratuito), Discord, Rappi, TikTok.

**Canales digitales**

Android (Samsung Galaxy A54). Redes principales: TikTok, Instagram, WhatsApp. Gmail revisado una vez al día. Notificaciones push activas solo en apps bancarias y de mensajería; las demás están silenciadas.

---

#### User Persona 2 — Segmento 2: Profesional Joven Activo

**Nombre:** Valentina Ríos Paredes
**Edad:** 28 años
**Ocupación:** UX Designer en startup fintech (contrato a tiempo completo, modalidad híbrida)
**Distrito:** San Borja, Lima Metropolitana
**Estado civil:** Soltera, vive sola en departamento alquilado

---

**Demografía y contexto económico**

Valentina percibe S/ 3,800 mensuales fijos más ingresos freelance que oscilan entre S/ 400 y S/ 800 en proyectos esporádicos de diseño. Tiene tarjeta de crédito Visa Scotiabank (línea S/ 8,000) y una cuenta en dólares en el BCP para pagar suscripciones internacionales. Sus gastos fijos (alquiler, servicios del departamento) consumen el 42 % de su ingreso fijo; el resto se distribuye entre suscripciones, alimentación y ahorro.

**Portafolio de gastos recurrentes (referencial)**

| Servicio | Tipo | Monto | Moneda |
| --- | --- | --- | --- |
| Netflix 4K | Streaming | S/ 49 | PEN |
| Spotify Family (cuota proporcional, comparte con 2 amigos) | Música | S/ 11 | PEN |
| Smart Fit — Plan Black | Membresía física | S/ 79.90 | PEN |
| Adobe Creative Cloud (plan individual) | Diseño profesional | USD 54.99 | USD |
| Figma Professional | Diseño UI/UX | USD 15 | USD |
| Lemon Cash | Ahorro en criptomonedas | Variable | USD |
| PedidosYa Plus | Membresía de delivery | S/ 19.90 | PEN |
| Instituto Británico (nivel avanzado) | Educación / idiomas | S/ 350 | PEN |
| Dropbox Plus | Almacenamiento cloud | USD 9.99 | USD |

**Personalidad**

Metódica en el trabajo y creativa en el diseño, pero no aplica esa sistematización a sus finanzas personales porque "el banco ya lleva la cuenta". Revisa su tarjeta de crédito una vez al mes, cerca del vencimiento. Alta alfabetización digital; adopta herramientas nuevas si el onboarding es limpio y rápido. Valora la privacidad: no conectaría su cuenta bancaria a una app de terceros sin leer los términos. Le incomoda no poder saber cuánto le cuestan realmente sus suscripciones en dólares después de que el banco aplica su propio tipo de cambio.

**Objetivos**

- Saber exactamente cuánto gasta cada mes en soles, incluyendo los servicios que paga en dólares al tipo de cambio real.
- Ahorrar S/ 6,000 para un viaje a Colombia en ocho meses sin sacrificar su estilo de vida digital.
- Depurar el portafolio: cancelar al menos dos servicios que usa menos de una vez por semana.

**Frustraciones**

- Adobe Creative Cloud la cobró USD 54.99 en un mes en que el tipo de cambio subió a S/ 3.87; terminó pagando S/ 212.77 cuando había presupuestado S/ 198. La diferencia la descubrió revisando el estado de cuenta en papel, no en la app del banco.
- PedidosYa Plus se renovó el mismo día en que pagó el Británico; no había previsto esos dos cargos juntos y tuvo que posponer una transferencia de ahorro.
- Tiene una suscripción activa a Dropbox Plus que migró al plan gratuito hace cuatro meses en su laptop, pero el cobro automático en tarjeta no se detuvo; lleva pagando USD 9.99 sin usar el servicio.

**Marcas de referencia (positivas)**

Notion, Linear, Figma, Apple Wallet (como referente de UX), Nubank.

**Canales digitales**

iPhone 14 Pro y MacBook Air M2. Redes: LinkedIn, Instagram, Twitter/X. Correo personal y profesional revisados varias veces al día. Google Calendar como herramienta central de organización personal y profesional. Notificaciones gestionadas con Do Not Disturb activado en bloques de trabajo profundo.


### 2.3.2. User Task Matrix

La siguiente tabla compara la frecuencia e importancia con que cada arquetipo ejecuta las tareas centrales del problema, prescindiendo de cualquier herramienta específica. La escala utilizada es la siguiente:

- **Frecuencia:** Alta (varias veces por semana o de forma mensual consciente) / Media (ocasionalmente, cuando surge una necesidad puntual) / Baja (raramente o solo ante una crisis económica).
- **Importancia:** Alta / Media / Baja (según el impacto que la tarea tiene en el presupuesto o la tranquilidad financiera del usuario).

| # | Tarea (agnóstica al software) | Diego — Frecuencia | Diego — Importancia | Valentina — Frecuencia | Valentina — Importancia |
| --- | --- | --- | --- | --- | --- |
| T01 | Llevar la cuenta de las suscripciones y membresías activas | Baja | Alta | Media | Alta |
| T02 | Recordar cuándo se renueva o vence cada servicio recurrente | Baja | Alta | Media | Alta |
| T03 | Calcular el gasto mensual total en servicios digitales y membresías físicas | Baja | Alta | Media | Alta |
| T04 | Convertir el costo de una suscripción en dólares a soles para saber cuánto pagará realmente | Baja | Media | Alta | Alta |
| T05 | Cancelar un servicio que ya no se usa o que se renovó de forma no deseada | Baja | Alta | Baja | Alta |
| T06 | Registrar y estimar el gasto mensual acumulado en delivery y fast-food (PedidosYa Plus, Up Burger, Popeyes, Dunkin') | Baja | Media | Media | Media |
| T07 | Identificar qué servicios se usan con poca frecuencia y podrían cancelarse | Baja | Media | Baja | Alta |


### 2.3.3. User Journey Mapping

#### As-Is User Journey — Diego Alcántara Torres descubre y cancela Smart Fit Plan Black

**Contexto:** Diego dejó de ir al gimnasio hace tres meses. Un martes por la noche revisa su estado de cuenta del BCP y encuentra un cargo de S/ 79.90 que no reconoce de inmediato.

| Fase | Paso | Acción del usuario | Pensamientos / Emociones | Canal / Herramienta | Puntos de dolor |
| --- | --- | --- | --- | --- | --- |
| **Descubrimiento del cargo** | 1 | Revisa el estado de cuenta de su cuenta BCP en la app bancaria | "¿Qué es este cargo de S/ 79.90? No recuerdo haber comprado nada así." | App bancaria BCP (Android) | El concepto del cargo aparece como "SMARTFIT*PLANBLACK" — texto truncado, poco descriptivo |
| | 2 | Hace un screenshot del cargo y lo busca en Google para identificar el comercio | "Ah, es el gimnasio. Pensé que ya me habían dado de baja cuando dejé de ir." | Google Chrome (Android) | Tuvo que hacer búsqueda manual; la app bancaria no explica qué es el cargo |
| **Búsqueda del método de cancelación** | 3 | Intenta recordar qué correo usó para registrarse en Smart Fit; revisa Gmail con la búsqueda "smart fit" | "¿Usé mi correo de Gmail o el de la universidad?" | Gmail (Android) | Encuentra 3 correos distintos de Smart Fit (bienvenida, recordatorio de pago, promoción); ninguno tiene enlace de cancelación claro |
| | 4 | Abre el sitio web de Smart Fit en el navegador del celular y busca la opción "Mi cuenta" | "Esto es muy complicado en el celular, no se ve bien." | Chrome (Android) — sitio web no optimizado para mobile | La navegación del portal de socio está diseñada para escritorio; los botones son pequeños y el flujo no es intuitivo |
| **Proceso de cancelación** | 5 | Inicia sesión con la contraseña que, tras dos intentos fallidos, recupera por correo | "¿Por qué tengo que pedir recuperación de contraseña si me acabo de registrar hace meses?" | Portal web Smart Fit + Gmail | El proceso de recuperación tarda 4 minutos y requiere cambiar la contraseña antes de acceder |
| | 6 | Navega hasta "Gestión de mi membresía" y encuentra el botón "Congelar o cancelar plan" | "Por fin. Pero dice que tengo que ir a la sede o llamar. No puedo cancelar online." | Portal web Smart Fit | La cancelación en línea no está disponible para el Plan Black; exige llamada telefónica o visita presencial |
| | 7 | Llama al número de atención al cliente de Smart Fit; espera 9 minutos en línea | "Esto es una trampa. Hacen difícil cancelar a propósito." | Llamada telefónica | Tiempo de espera largo; sensación de retención deliberada |
| | 8 | Atiende un agente que solicita su número de socio, DNI y correo de registro; Diego no tiene el número de socio a mano | "No tengo ese número. ¿Cómo lo consigo ahora por teléfono?" | Llamada telefónica | Información que Diego no tiene disponible en el momento; debe interrumpir la llamada para buscarla |
| **Confirmación** | 9 | Recupera el número de socio desde un correo antiguo de bienvenida; vuelve a llamar (segunda llamada, 6 minutos de espera adicional) | "Perdí 20 minutos solo para cancelar algo que ya no uso." | Gmail + Llamada telefónica | Proceso de dos llamadas, discontinuo e ineficiente |
| | 10 | El agente confirma la cancelación y le dice que el próximo cobro no se realizará; no le envía confirmación por escrito en el momento | "¿Cómo sé que realmente lo cancelaron? No me mandaron nada." | Llamada telefónica | No recibe confirmación inmediata; la confirmación por correo llega 2 horas después |
| **Monitoreo posterior** | 11 | Revisa su estado de cuenta el siguiente mes para verificar que no se haya cobrado nuevamente | "Voy a revisar esto el próximo mes por si acaso." | App bancaria BCP | Carga cognitiva adicional: debe recordar verificar el mes siguiente sin ningún recordatorio |

**Duración total del proceso:** aproximadamente 40 minutos distribuidos en dos días.
**Cargos pagados de más:** S/ 239.70 (tres meses × S/ 79.90) por un servicio que no utilizaba.
**Emoción dominante al final:** alivio mezclado con frustración; sensación de haber sido atrapado en un sistema diseñado para retener suscriptores.


### 2.3.4. Empathy Mapping

#### Empathy Map — Valentina Ríos Paredes (Segmento 2: Profesional Joven Activo)

**Contexto de análisis:** Valentina es la primera quincena del mes. Acaba de recibir su estado de cuenta de la tarjeta Scotiabank y constata que el total es S/ 280 más alto de lo que había estimado, sin saber exactamente qué causó la diferencia.

---

**¿Qué piensa y siente?**

1. "Sé que gasto en suscripciones, pero nunca tengo claro cuánto es en total. Cada servicio parece poco, pero al sumar son demasiados."
2. "Me da ansiedad abrir el estado de cuenta porque sé que voy a encontrar algo que no esperaba. Y luego igual no puedo hacer nada hasta el siguiente mes."
3. "Quiero ahorrar para mi viaje, pero cada vez que reviso cuánto llevo, me doy cuenta de que gasté más de lo planeado sin saber exactamente en qué."

**¿Qué escucha?**

1. Sus compañeras de trabajo le comentan: "Yo cancelé Adobe y uso la versión gratuita de Canva para lo personal; el Creative Cloud solo lo uso cuando el cliente paga." Valentina sabe que debería hacer lo mismo pero no se decide.
2. Un podcast de finanzas personales que escucha en el trayecto al trabajo repite: "La mayoría de personas paga en promedio tres suscripciones que no usa. ¿Cuáles son las tuyas?" La frase le resuena, pero no actúa porque no tiene una lista actualizada de sus servicios.
3. Su madre le dice: "¿Para qué pagas tanto por el gimnasio si también pagas ese servicio de comida a domicilio? Vas a engordar y a quebrar al mismo tiempo." La observación la incomoda porque tiene algo de razón.

**¿Qué ve?**

1. Ve en LinkedIn publicaciones de personas de su edad que presumen de haber "depurado" sus gastos y ahorraron X soles en un mes. Le genera una mezcla de inspiración y culpa.
2. Ve en la app de su banco una lista de transacciones sin categorizar: "ADOBE*CRTVCLOUD", "FIGMA.COM", "DROPBOX", "PY PLUS MEMBRESIA". Todos parecen cargos distintos y sin contexto de si los está usando o no.
3. Ve que sus amigas comparten planes de suscripción (Spotify Family, Netflix) y coordinar los pagos es un problema recurrente; no hay un sistema claro para saber quién debe qué a quién.

**¿Qué dice y hace?**

1. Le dice a su roommate: "Voy a cancelar el Dropbox este fin de semana." Lleva tres semanas diciendo lo mismo y no lo ha hecho porque cada vez que intenta acceder al portal, recuerda que no tiene la contraseña a mano y posterga la acción.
2. Hace una lista mental de sus suscripciones cuando está en el transporte, pero la olvida antes de llegar a casa. No la escribe porque "la voy a buscar el fin de semana cuando tenga tiempo."
3. Cuando un servicio le cobra en dólares, va a Google, busca "tipo de cambio dólar soles hoy" y hace el cálculo a mano. No guarda el resultado en ningún lado.

**Pains (dolores)**

1. No tiene una vista única de cuánto gasta en total entre suscripciones, membresía del gimnasio, clases del Británico y delivery; la información está fragmentada en tres aplicaciones bancarias distintas y en correos electrónicos.
2. El tipo de cambio que aplica su banco para las suscripciones en dólares nunca coincide con el tipo de cambio del día que ella consulta en Google; siempre termina pagando más de lo que calculó.
3. Cancelar un servicio le toma más tiempo y esfuerzo del que debería; como resultado, pospone la cancelación indefinidamente y sigue pagando por servicios que ya no usa (Dropbox Plus, en este caso).

**Gains (ganancias esperadas)**

1. Ver el total exacto de sus compromisos recurrentes del mes en una sola pantalla, expresado en soles al tipo de cambio del día, antes de que llegue el estado de cuenta.
2. Recibir una alerta 24 horas antes de cada renovación para decidir conscientemente si renovar o cancelar, en lugar de enterarse del cargo después de que ya ocurrió.
3. Poder estimar en segundos cuánto le va a costar Adobe Creative Cloud en soles este mes, sin tener que abrir el navegador y hacer el cálculo a mano.


### 2.3.5. Big Picture EventStorming

Antes de diseñar cualquier pantalla, el equipo reconstruirá en Miro, con la técnica del Big Picture EventStorming, la manera en que un usuario del segmento maneja hoy sus suscripciones, membresías y gastos de delivery sin ayuda de ninguna herramienta dedicada. La sesión ubicará en una línea de tiempo los eventos del proceso actual —desde que se contrata un servicio hasta que se descubre, o no, el cobro de su renovación— junto con los actores involucrados, los sistemas que hoy intervienen (la aplicación del banco, el correo de notificación, el calendario del celular) y los puntos donde ese proceso falla. El insumo de la sesión son los hallazgos de la sección 2.2.3; el resultado se limita a describir el problema tal como existe hoy, sin proponer todavía ninguna función de CraveWallet.


Los siguientes Domain Events representan los cambios de estado más significativos del dominio de CraveWallet tal como existe hoy para el usuario, antes de cualquier intervención de la aplicación. Están escritos en pasado, en inglés, y ordenados cronológicamente siguiendo el ciclo de vida de una suscripción o membresía recurrente. En la sesión de Miro se representarán con tarjetas naranja; las políticas con tarjetas lila; los actores con tarjetas amarillo pálido.

| # | Domain Event | Disparador / Contexto | Actor principal |
| --- | --- | --- | --- |
| DE01 | **Subscription Contracted** | El usuario suscribe un servicio nuevo (ej. Smart Fit Plan Black, Netzun, Adobe Creative Cloud) y acepta el cobro recurrente al momento del registro. | Usuario |
| DE02 | **Recurring Charge Processed** | El servicio cobra automáticamente al usuario en la fecha de renovación pactada, sin notificación previa por parte de la plataforma. | Pasarela de pago / Banco |
| DE03 | **Foreign Currency Charge Applied** | Una suscripción en dólares (Adobe, Figma, Dropbox, Binance) genera un débito en la tarjeta del usuario; el banco aplica su propio tipo de cambio sin transparencia. | Banco / Tarjeta de crédito |
| DE04 | **Unexpected Charge Discovered** | El usuario detecta en el estado de cuenta un cargo que no recordaba o no anticipaba (ej. Netzun renovado, Smart Fit no cancelado). | Usuario |
| DE05 | **Subscription Renewal Date Missed** | La fecha de renovación de un servicio pasa sin que el usuario la haya notado; el cobro se procesa antes de que el usuario tuviera oportunidad de decidir cancelar. | Sistema de facturación del proveedor |
| DE06 | **Budget Exceeded** | El conjunto de cargos recurrentes del mes supera el presupuesto informal que el usuario tenía en mente, generando un saldo insuficiente o deuda en tarjeta. | Usuario (consecuencia indirecta) |
| DE07 | **Cancellation Process Initiated** | El usuario decide cancelar una suscripción y comienza a buscar cómo hacerlo (portal web, app del servicio, llamada telefónica). | Usuario |
| DE08 | **Cancellation Blocked by Provider** | El proveedor del servicio impone una barrera a la cancelación en línea (ej. Smart Fit exige llamada telefónica o visita presencial para cancelar el Plan Black). | Proveedor del servicio |
| DE09 | **Subscription Finally Cancelled** | La cancelación se completa exitosamente, ya sea por llamada, visita o navegación en portal, después de un proceso que tomó más tiempo y pasos de lo esperado. | Usuario + Agente de atención |
| DE10 | **Delivery Membership Renewed Silently** | PedidosYa Plus o una membresía equivalente se renueva de forma automática; el usuario no recuerda haberla contratado o no sabe cuándo vence. | Plataforma de delivery |
| DE11 | **Unused Subscription Identified** | El usuario constata (usualmente al revisar el estado de cuenta) que lleva pagando por un servicio que no ha usado en semanas o meses (ej. Dropbox Plus, Cisco Networking). | Usuario |
| DE12 | **Manual Currency Conversion Performed** | El usuario abre Google o una app externa para convertir manualmente el precio en dólares de una suscripción a soles, usando el tipo de cambio del día. | Usuario |
| DE13 | **Crypto Platform Fee Charged** | Lemon Cash o Binance debita una comisión de custodia, retiro o trading que el usuario no había anticipado en su presupuesto mensual. | Plataforma de criptomonedas |
| DE14 | **Physical Membership Charge Recorded** | Smart Fit o un instituto como el Británico cobra la cuota mensual; el cargo aparece en el estado de cuenta sin identificación clara del concepto. | Banco / Pasarela de pago |
| DE15 | **Subscription Portfolio Reviewed** | El usuario intenta, de forma reactiva y esporádica, hacer una lista mental o en papel de todos sus servicios activos para calcular cuánto gasta al mes. | Usuario |

### 2.3.6. Ubiquitous Language

The following glossary defines the core terms of the CraveWallet domain. All terms are written in English and must be used consistently across User Stories, Bounded Context Canvases, code identifiers, and team communication. Using synonyms interchangeably (e.g., "subscription" and "recurring service" as if they were the same concept) is explicitly prohibited once this glossary is approved by the team.

| Term | Definition |
| --- | --- |
| **Subscription** | A digital service contracted by the user that generates a fixed or variable automatic charge on a recurring cycle (monthly, annual, or custom). Examples: Netflix, Spotify, Adobe Creative Cloud, Netzun. A Subscription has a defined billing cycle, a currency, and a renewal date. It is distinct from a Membership. |
| **Membership** | A recurring commitment to a physical or hybrid service that generates a monthly charge, typically tied to a physical location or scheduled attendance. Examples: Smart Fit Plan Black, Instituto Británico. A Membership may have cancellation restrictions that differ from a digital Subscription. |
| **Recurring Expense** | The parent concept that encompasses both Subscriptions and Memberships, as well as any other periodic charge the user chooses to track in CraveWallet (e.g., delivery platform memberships like PedidosYa Plus, recurring crypto platform fees in Lemon Cash or Binance). |
| **Renewal Date** | The specific calendar date on which a Subscription or Membership automatically charges the user and its cycle resets. The Renewal Date is the primary trigger for Billing Alerts in CraveWallet. |
| **Billing Alert** | A notification dispatched to the user's native device calendar exactly 24 hours before a Renewal Date, allowing the user to consciously decide whether to keep or cancel the service before the charge is processed. |
| **Expense Portfolio** | The complete set of active Recurring Expenses registered by a given user in CraveWallet at a point in time, expressed as a unified monthly total in Peruvian soles (PEN), regardless of the original billing currency. |
| **Currency Conversion** | The real-time transformation of a Subscription or Recurring Expense amount denominated in a foreign currency (primarily USD) to Peruvian soles (PEN), using the exchange rate fetched daily from ExchangeRate-API. Currency Conversion is applied at display time and is not stored as a fixed value. |
| **Unused Subscription** | A Subscription or Membership that the user has not actively used within the last 30 days, as self-reported during registration or flagged manually by the user. CraveWallet surfaces Unused Subscriptions in the Dashboard to prompt a cancellation decision. |
| **Delivery Expense** | A category of non-subscription recurring spend that covers food delivery orders and fast-food platform purchases (e.g., PedidosYa, Rappi, Up Burger, Popeyes, Dunkin', Little Caesars, Papa John's). Delivery Expenses may or may not include a Membership (e.g., PedidosYa Plus). |
| **Premium User** | A user who has activated the CraveWallet Premium tier by completing a payment flow through the Stripe SDK. A Premium User has access to unlimited Recurring Expense registration, advanced analytics, and budget goal tracking, features that are unavailable or limited in the free tier. |


## 2.4. Requirements specification

La especificación que sigue traduce en requisitos concretos lo que las entrevistas y el Needfinding revelen sobre el comportamiento real de los dos segmentos, leído junto con las Feature Assumptions y los Hypothesis Statements ya declarados en el Capítulo I, y alcanza a la aplicación móvil, al backend propio y al landing page: los tres productos definidos en el alcance del proyecto. El resultado se organiza en tres piezas complementarias. Primero, el catálogo de historias (User Stories agrupadas en Epics, junto con las Technical Stories de infraestructura y las Spike Stories de investigación). Segundo, un Impact Map que conecta cada historia con los Business Outcome Assumptions de la sección 1.2.2.2. Tercero, el Product Backlog, donde esas historias reciben estimación de esfuerzo y prioridad.

### 2.4.1. User Stories

Cada historia adoptará el punto de vista de uno de los dos segmentos objetivo del Capítulo I, agrupados bajo el rol genérico **usuario** cuando la historia les aplique a ambos por igual; se exceptúan las historias del landing page, escritas desde quien todavía no tiene cuenta, y las Technical Stories y Spike Stories, que documentan trabajo interno del equipo de desarrollo. Los criterios de aceptación se expresarán en Gherkin (Dado, Cuando, Entonces) y la prioridad de cada historia se derivará de las Hypothesis Statements de la sección 1.2.2.3: Alta cuando sostiene el Dashboard, la anticipación del cobro o la reducción de la fricción de onboarding; Media cuando completa un ciclo de uso ya cubierto por esas historias de prioridad Alta; Baja para lo que extiende la propuesta sin ser indispensable para validar las hipótesis.

#### Epics

A partir de las Feature Assumptions del Capítulo I y de las tácticas de la sección 2.1.2 se anticipa el siguiente conjunto de Epics. Esta lista es preliminar: se ajustará con lo que arroje el Needfinding de la sección 2.3 antes de redactar las historias individuales, para que cada una tenga sustento directo en las entrevistas y no solo en las hipótesis del Capítulo I.

| Epic ID | Nombre | Descripción |
| --- | --- | --- |
| EP01 | Autenticación y perfil | Inicio de sesión en CraveWallet y edición de los datos del perfil del usuario. |
| EP02 | Alta de suscripciones | Registro de una suscripción, membresía o gasto recurrente, con plantillas preconfiguradas de los servicios más frecuentes del segmento para reducir la fricción de onboarding. |
| EP03 | Dashboard unificado | Vista consolidada de las suscripciones activas, agrupadas por categoría y ordenadas por próxima fecha de renovación. |
| EP04 | Recordatorios vía calendario nativo | Agendado automático de un recordatorio 24 horas antes de cada cobro, integrado con el calendario del dispositivo. |
| EP05 | Conversión de divisas en tiempo real | Expresión del portafolio completo en soles, con conversión diaria de los montos facturados en dólares vía ExchangeRate-API. |
| EP06 | Categorización de gastos de delivery | Registro y categorización de pedidos de delivery, con catálogo precargado de comercios limeños frecuentes. |
| EP07 | CraveWallet Premium | Conversión al nivel Premium mediante el SDK de Stripe, con analítica avanzada y registro ilimitado de suscripciones. |
| EP08 | Landing page | Sitio informativo que explica el problema de los cobros recurrentes no anticipados, la propuesta de CraveWallet y el enlace de descarga de la aplicación. |
| EP09 | Servicios RESTful | Technical Stories del backend propio que expone los endpoints consumidos por la aplicación móvil. |
| EP10 | Investigación técnica | Spike Stories orientadas a despejar la incertidumbre técnica de las integraciones con Stripe y ExchangeRate-API antes de comprometerlas en el backlog. |



---

#### Historias de Usuario

---

**US01 — Registrar una suscripción o membresía**

| Campo | Contenido |
| --- | --- |
| **ID** | US01 |
| **Título** | Registrar una suscripción o membresía recurrente |
| **Epic** | EP02 — Alta de suscripciones |
| **Descripción** | Como **usuario** de CraveWallet, quiero registrar una suscripción o membresía recurrente seleccionando el servicio de una lista preconfigurada o ingresando los datos manualmente, para que la aplicación lleve el control del ciclo de cobro sin que yo tenga que recordarlo. |
| **Prioridad** | Alta |
| **Story Points** | 5 |

**Criterios de aceptación**

```gherkin
Escenario 1: Registro de una suscripción desde el catálogo preconfigurado
  Dado que el usuario ha iniciado sesión en CraveWallet
    Y se encuentra en la pantalla "Agregar gasto recurrente"
  Cuando selecciona "Smart Fit Plan Black" del catálogo de servicios
    Y confirma el monto mensual (S/ 79.90) y la fecha de próxima renovación
  Entonces el servicio aparece en el Dashboard con su categoría, monto en soles y días restantes hasta la renovación
    Y se programa automáticamente un Billing Alert en el calendario nativo del dispositivo para 24 horas antes de la Renewal Date

Escenario 2: Registro manual de una suscripción en dólares no incluida en el catálogo
  Dado que el usuario ha iniciado sesión en CraveWallet
    Y se encuentra en la pantalla "Agregar gasto recurrente"
  Cuando selecciona "Agregar manualmente", ingresa "Adobe Creative Cloud" como nombre, USD 54.99 como monto y selecciona ciclo mensual
  Entonces el Dashboard muestra el servicio con el equivalente en soles calculado al tipo de cambio del día obtenido de ExchangeRate-API
    Y el monto en soles se actualiza automáticamente cada 24 horas conforme cambie el tipo de cambio

Escenario 3: Intento de registro sin fecha de renovación
  Dado que el usuario está registrando una nueva suscripción
  Cuando deja el campo "Fecha de próxima renovación" vacío e intenta confirmar
  Entonces la aplicación muestra el mensaje "Ingresa la fecha de tu próximo cobro para activar el recordatorio"
    Y no permite guardar el registro hasta que el campo sea completado
```

---

**US02 — Ver el dashboard consolidado de gastos recurrentes**

| Campo | Contenido |
| --- | --- |
| **ID** | US02 |
| **Título** | Consultar el dashboard consolidado de gastos recurrentes |
| **Epic** | EP03 — Dashboard unificado |
| **Descripción** | Como **usuario** de CraveWallet, quiero ver en una sola pantalla todas mis suscripciones, membresías y gastos de delivery activos, ordenados por fecha de renovación y expresados en soles, para poder estimar mi gasto mensual total sin abrir el estado de cuenta del banco. |
| **Prioridad** | Alta |
| **Story Points** | 5 |

**Criterios de aceptación**

```gherkin
Escenario 1: Visualización del Expense Portfolio completo en soles
  Dado que el usuario tiene al menos tres Recurring Expenses registrados en distintas monedas (PEN y USD)
  Cuando abre la pantalla principal (Dashboard) de CraveWallet
  Entonces ve la lista de todos sus gastos recurrentes activos ordenados por Renewal Date ascendente
    Y cada elemento muestra el nombre del servicio, el monto en su moneda original y su equivalente en soles al tipo de cambio vigente
    Y el resumen superior muestra el total mensual consolidado en soles de todo el Expense Portfolio

Escenario 2: Indicador visual de vencimiento próximo
  Dado que el usuario tiene una suscripción con Renewal Date a 24 horas o menos
  Cuando consulta el Dashboard
  Entonces esa suscripción aparece en la parte superior de la lista con una etiqueta visual de alerta ("Cobro hoy" o "Cobro mañana")
    Y la etiqueta es distinta en color o ícono respecto al resto de los elementos de la lista

Escenario 3: Dashboard vacío en primer uso
  Dado que el usuario acaba de crear su cuenta y no ha registrado ningún Recurring Expense
  Cuando abre el Dashboard por primera vez
  Entonces ve un estado vacío con el mensaje "Aún no tienes gastos registrados" y un botón de llamada a la acción "Agrega tu primera suscripción"
    Y el total mensual consolidado muestra S/ 0.00
```

---

**US03 — Recibir un recordatorio de renovación en el calendario del dispositivo**

| Campo | Contenido |
| --- | --- |
| **ID** | US03 |
| **Título** | Recibir Billing Alert en el calendario nativo del dispositivo |
| **Epic** | EP04 — Recordatorios vía calendario nativo |
| **Descripción** | Como **usuario** de CraveWallet, quiero que la aplicación cree automáticamente un evento en el calendario de mi teléfono 24 horas antes de cada Renewal Date, para recibir la alerta a través del canal que ya uso a diario y poder decidir si cancelo el servicio antes de que se efectúe el cobro. |
| **Prioridad** | Alta |
| **Story Points** | 3 |

**Criterios de aceptación**

```gherkin
Escenario 1: Creación automática del evento de calendario al registrar una suscripción
  Dado que el usuario ha registrado una suscripción con Renewal Date el 20 de octubre
  Cuando confirma el registro en CraveWallet
  Entonces la aplicación solicita permiso de acceso al calendario nativo del dispositivo (si aún no fue concedido)
    Y crea un evento el 19 de octubre con el título "[CraveWallet] Mañana se cobra: Smart Fit Plan Black — S/ 79.90"
    Y el evento incluye una nota con la opción de abrir CraveWallet directamente

Escenario 2: El usuario deniega el permiso de acceso al calendario
  Dado que el usuario está registrando una suscripción
  Cuando la aplicación solicita permiso de calendario y el usuario lo deniega
  Entonces CraveWallet registra igualmente la suscripción en el Dashboard
    Y muestra el mensaje "Sin acceso al calendario no podremos enviarte recordatorios. Puedes activarlo desde Configuración > Permisos > CraveWallet."
    Y no crea ningún evento en el calendario del dispositivo

Escenario 3: Actualización del evento de calendario al editar la Renewal Date
  Dado que el usuario modifica la fecha de renovación de Netzun de día 5 a día 12 del mes
  Cuando confirma el cambio en CraveWallet
  Entonces la aplicación elimina el evento de calendario anterior (día 4) y crea uno nuevo (día 11) con los datos actualizados
```

---

**TS01 — Endpoint RESTful: obtener el Expense Portfolio del usuario autenticado**

| Campo | Contenido |
| --- | --- |
| **ID** | TS01 |
| **Título** | Endpoint GET /api/v1/subscriptions |
| **Epic** | EP09 — Servicios RESTful |
| **Descripción** | Como **developer** del equipo de Gastify, quiero implementar el endpoint `GET /api/v1/subscriptions` en el backend de CraveWallet, para que la aplicación móvil pueda obtener la lista de Recurring Expenses activos del usuario autenticado, incluyendo el monto convertido a soles al tipo de cambio del día. |
| **Prioridad** | Alta |
| **Story Points** | 3 |

**Criterios de aceptación**

```gherkin
Escenario 1: Solicitud exitosa con token JWT válido
  Dado que el cliente envía una solicitud GET a /api/v1/subscriptions
    Y el header Authorization contiene un JWT válido y no expirado
  Cuando el backend procesa la solicitud
  Entonces responde con HTTP 200 OK
    Y el cuerpo es un JSON array donde cada elemento contiene: id, name, amount, currency, amountInPen (calculado al tipo de cambio del día), renewalDate, category, y isActive
    Y los elementos están ordenados por renewalDate ascendente

Escenario 2: Solicitud sin token de autenticación
  Dado que el cliente envía una solicitud GET a /api/v1/subscriptions sin header Authorization
  Cuando el backend procesa la solicitud
  Entonces responde con HTTP 401 Unauthorized
    Y el cuerpo contiene: { "error": "UNAUTHORIZED", "message": "Authentication token is missing or invalid" }

Escenario 3: Usuario autenticado sin suscripciones registradas
  Dado que el cliente envía una solicitud GET a /api/v1/subscriptions con JWT válido
    Y el usuario no tiene ningún Recurring Expense registrado
  Cuando el backend procesa la solicitud
  Entonces responde con HTTP 200 OK
    Y el cuerpo es un JSON array vacío: []
```

---

**SS01 — Spike: Investigación de la integración del SDK de Stripe para cobros Premium**

| Campo | Contenido |
| --- | --- |
| **ID** | SS01 |
| **Título** | Investigación y prueba de concepto: Stripe SDK para activación de CraveWallet Premium |
| **Epic** | EP10 — Investigación técnica |
| **Descripción** | Como **developer** del equipo de Gastify, quiero investigar de forma autónoma la integración del SDK de Stripe en una aplicación móvil Android/Flutter, para despejar la incertidumbre técnica de implementar el flujo de pago de CraveWallet Premium antes de comprometer historias de implementación en el backlog. |
| **Contexto y motivación** | CraveWallet Premium requiere que un usuario pueda pagar una suscripción mensual o anual desde la aplicación móvil. Stripe es la pasarela elegida por su soporte para tarjetas peruanas, su SDK oficial para Android y su entorno de pruebas (test mode). El equipo no tiene experiencia previa con Stripe y necesita verificar la viabilidad técnica antes de estimar el esfuerzo real de implementación. Esta Spike Story constituye evidencia del Student Outcome 7 del curso: la capacidad de adquirir y aplicar conocimiento técnico nuevo de forma autónoma. |
| **Prioridad** | Alta |
| **Story Points** | 2 |
| **Duración máxima** | 3 días de trabajo |

**Criterios de aceptación**

```gherkin
Escenario 1: Documentación del proceso de aprendizaje
  Dado que el developer inicia la investigación del SDK de Stripe
  Cuando completa el spike
  Entonces produce un documento técnico (mínimo 500 palabras) que describe: cómo funciona el flujo de pago de Stripe (PaymentIntent, PaymentSheet), qué dependencias se necesitan en el proyecto Android/Flutter, y cómo se configura el entorno de pruebas (clave pública y clave secreta de test mode)

Escenario 2: Prueba de concepto funcional en entorno de test
  Dado que el developer ha integrado el SDK de Stripe en una rama de prueba del repositorio
  Cuando ejecuta el flujo completo de pago usando la tarjeta de prueba 4242 4242 4242 4242
  Entonces la aplicación muestra el formulario de pago de Stripe (PaymentSheet) sin errores de compilación
    Y el pago de prueba se registra como exitoso en el dashboard de Stripe test mode
    Y el estado del usuario en la base de datos local cambia a isPremium = true

Escenario 3: Identificación de riesgos y limitaciones
  Dado que el developer ha completado la prueba de concepto
  Cuando documenta los hallazgos del spike
  Entonces el documento incluye al menos dos riesgos técnicos identificados (ej. compatibilidad con versiones de Android, manejo de webhooks para validar pagos en el backend) y propone cómo mitigarlos en la implementación real
```


### 2.4.2. Impact Mapping

El Impact Map vinculará los Business Outcome Assumptions declarados en la sección 1.2.2.2 del Capítulo I —NPS superior a 40, conversión Premium de al menos 12%, retención a 30 días superior a 45% y reducción de cargos no anticipados de al menos 60%— con los actores, los impactos de comportamiento esperados y las historias de usuario de la sección 2.4.1 que los sostienen.


El siguiente Impact Map conecta los cuatro Business Outcome Assumptions del Capítulo I con los actores involucrados, los cambios de comportamiento que deben producirse para lograr cada outcome, y las historias de usuario que habilitan esos cambios.

| Business Outcome (de §1.2.2.2) | Actor | Impacto de comportamiento esperado | Historias que lo sostienen |
| --- | --- | --- | --- |
| Reducir en al menos 60 % los cargos recurrentes no anticipados reportados por los usuarios en los primeros 30 días | Usuario (Segmento 1 y 2) | El usuario configura Billing Alerts para todas sus suscripciones activas antes de que se produzca la primera renovación | US01, US03 |
| Alcanzar una retención a 30 días superior al 45 % | Usuario (Segmento 1 y 2) | El usuario regresa a la aplicación al menos una vez por semana para revisar el Dashboard y registrar nuevos gastos | US01, US02 |
| Lograr una tasa de conversión a Premium de al menos 12 % en los primeros 60 días | Usuario (Segmento 2 — Profesional Joven Activo) | El usuario descubre el valor de las funciones Premium (analítica avanzada, registro ilimitado) durante el periodo de uso gratuito y decide pagar | SS01, US02 |
| Obtener un NPS superior a 40 al final del primer ciclo de uso | Usuario (Segmento 1 y 2) | El usuario experimenta al menos una situación en que CraveWallet le impidió un cobro sorpresa y lo comparte con al menos una persona de su red | US03, US02, US01 |


### 2.4.3. Product Backlog

El backlog consolidará las historias de la sección 2.4.1 con su estimación de esfuerzo y su prioridad, siguiendo el criterio de valor de negocio descrito en 2.4.1, y se administrará en la herramienta que indique el docente.

| Orden | ID | Título | Epic | Story Points | Sprint |
| --- | --- | --- | --- | --- | --- |
| 1 | US01 | Registrar una suscripción o membresía recurrente | EP02 | 5 | Sprint 1 |
| 2 | US02 | Consultar el dashboard consolidado de gastos recurrentes | EP03 | 5 | Sprint 1 |
| 3 | US03 | Recibir Billing Alert en el calendario nativo del dispositivo | EP04 | 3 | Sprint 1 |
| 4 | TS01 | Endpoint GET /api/v1/subscriptions | EP09 | 3 | Sprint 1 |
| 5 | SS01 | Spike: Investigación del SDK de Stripe para cobros Premium | EP10 | 2 | Sprint 1 |


## 2.5. Strategic-Level Domain-Driven Design

El hallazgo central de la sección 2.1.1 —que ningún competidor trata la suscripción como una entidad de dominio con ciclo de vida propio— es la razón por la que el diseño estratégico de Domain-Driven Design [@evans2003ddd] pesa tanto como el resto del capítulo: antes de escribir una sola clase, el equipo debe fijar dónde termina un Bounded Context y empieza otro, para que esa diferenciación competitiva no se diluya al mezclar la lógica de suscripciones con la del acceso a la cuenta o el envío de recordatorios.

El trabajo partirá del Big Picture EventStorming y del Ubiquitous Language que resulten del Needfinding (secciones 2.3.5 y 2.3.6), que describen cómo un usuario administra sus compromisos recurrentes hoy, sin CraveWallet. Con las User Stories de la sección 2.4 ya redactadas, el equipo repetirá el ejercicio de EventStorming con un propósito distinto: ya no reconstruir el proceso actual, sino diseñar el de la solución, incorporando los comandos, las políticas, los agregados y las vistas de lectura necesarios para que un usuario registre una suscripción, la vea en el Dashboard, reciba el recordatorio con 24 horas de anticipación y, si corresponde, pase a Premium.

De ese segundo EventStorming saldrán los Bounded Contexts candidatos, identificados en una sesión de Candidate Context Discovery con dos técnicas complementarias: start-with-value, que delimita primero el subconjunto del dominio del que depende directamente la ventaja competitiva de CraveWallet (anticipar el cobro y mantener el portafolio expresado en soles), y look-for-pivotal-events, que toma los cambios de estado más significativos del ciclo —una suscripción queda registrada, un cobro queda anticipado, una cuenta pasa a Premium— como frontera entre un contexto y el siguiente. El contexto core deberá quedar separado de los subdominios de apoyo y genéricos para proteger esa ventaja de decisiones tomadas en otra parte del sistema, y las relaciones entre contextos se documentarán con los patrones de Context Mapping (Customer/Supplier, Conformist, Anti-corruption Layer, Shared Kernel); el Anti-corruption Layer será obligatorio frente a Stripe y ExchangeRate-API, conforme a la Estrategia 4 de la sección 2.1.2.

La arquitectura de software que cierra la sección se representará con el C4 Model, en sus niveles de contexto, contenedores y despliegue.

### 2.5.1. EventStorming

#### 2.5.1.1. Candidate Context Discovery

[[PENDIENTE]]

#### 2.5.1.2. Domain Message Flows Modeling

[[PENDIENTE]]

#### 2.5.1.3. Bounded Context Canvases

[[PENDIENTE]]

### 2.5.2. Context Mapping

[[PENDIENTE]]

### 2.5.3. Software Architecture

#### 2.5.3.1. Software Architecture Context Level Diagrams

[[PENDIENTE]]

#### 2.5.3.2. Software Architecture Container Level Diagrams

[[PENDIENTE]]

#### 2.5.3.3. Software Architecture Deployment Diagrams

[[PENDIENTE]]

## 2.6. Tactical-Level Domain-Driven Design

Esta sección desarrollará el diseño táctico de cada Bounded Context identificado en la sección 2.5, siguiendo las capas ya adoptadas por el equipo conforme al perfil de Mario descrito en la sección 1.1.2: Domain Layer, Application Layer, Interface Layer e Infrastructure Layer.

### 2.6.1. Bounded Context: [[NombreDelBoundedContext]]

#### 2.6.1.1. Domain Layer

[[PENDIENTE]]

#### 2.6.1.2. Interface Layer

[[PENDIENTE]]

#### 2.6.1.3. Application Layer

[[PENDIENTE]]

#### 2.6.1.4. Infrastructure Layer

[[PENDIENTE]]

#### 2.6.1.5. Bounded Context Software Architecture Component Level Diagrams

[[PENDIENTE]]

#### 2.6.1.6. Bounded Context Software Architecture Code Level Diagrams

##### 2.6.1.6.1. Bounded Context Domain Layer Class Diagrams

[[PENDIENTE]]

##### 2.6.1.6.2. Bounded Context Database Design Diagram

[[PENDIENTE]]
