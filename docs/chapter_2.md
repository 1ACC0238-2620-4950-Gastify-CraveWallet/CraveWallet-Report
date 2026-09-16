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

La siguiente matriz garantiza que cada característica exigida para la construcción de los User Personas tenga al menos una pregunta que la levante, de modo que ningún atributo del arquetipo de la sección 2.3.1 provenga de la intuición del equipo. Ambos guiones se numeraron en paralelo, de modo que la pregunta *n* de un segmento cubre el mismo atributo que la pregunta *n* del otro.

| Atributo del User Persona | Pregunta (Segmento 1) | Pregunta (Segmento 2) |
| --- | --- | --- |
| Edad, distrito, estado civil, composición familiar | 1, 2 | 1, 2 |
| Ocupación, nivel educativo, ingresos | 3, 4 | 3, 4 |
| Antecedentes y biografía | 5 | 5 |
| Personalidad y actitud frente al dinero | 6, 7 | 6, 7 |
| Habilidades y alfabetización digital y financiera | 8 | 8 |
| Dispositivos preferidos y sistema operativo | 9 | 9 |
| Canales digitales de interacción y navegador | 10 | 10 |
| Afinidad por marcas e influencias | 11 | 11 |
| Portafolio de suscripciones y divisa | 12, 13 | 12, 13 |
| Hábitos de delivery y gasto asociado | 14 | 14 |
| Objetivos, frustraciones y reacción al concepto | 15 | 15 |

*(El género de cada entrevistado no se pregunta directamente: se registra por observación del entrevistador en la ficha de la página siguiente, igual que la edad y el distrito quedan confirmados ahí una vez respondida la pregunta 1.)*

***

#### Guion de entrevista — Segmento 1: Estudiante Universitario Digital

Las 15 preguntas se aplican en el mismo orden a los 3 a 5 entrevistados del segmento; lo que varía entre entrevistas son las respuestas, no el guion.

1. Para empezar, cuéntame quién eres: tu nombre, tu edad, en qué distrito vives y con quién (solo, con tu familia o compartiendo departamento), y hace cuánto.
2. ¿Cómo está compuesta tu familia o el hogar donde vives, y cuál es tu estado civil o situación sentimental actual? ¿Comparten gastos o suscripciones con tu pareja, tu familia o tus amigos?
3. ¿Qué carrera estudias, en qué universidad y en qué ciclo vas? ¿Trabajas o haces prácticas además de estudiar, y cuántas horas a la semana?
4. ¿De dónde proviene el dinero que administras cada mes? Sin necesidad de la cifra exacta, ¿dirías que está más cerca de S/ 500, S/ 1 000 o S/ 1 500, y es un monto fijo o variable?
5. Cuéntame cómo fue que empezaste a manejar tu propio dinero: ¿qué te enseñaron en casa sobre el ahorro y recuerdas cuál fue la primera suscripción que pagaste tú mismo?
6. ¿Cómo describirías tu forma de gastar: más planificada o más impulsiva? Dame un ejemplo reciente de cada una.
7. ¿Llevas algún control de tus gastos? Cuéntame cómo lo haces (app, hoja de cálculo, papel o mentalmente), desde cuándo, y qué sientes cuando revisas tu estado de cuenta a fin de mes.
8. ¿Qué tan cómodo te sientes probando una aplicación nueva, la exploras solo o prefieres que alguien te la enseñe? ¿Has usado alguna vez una app de finanzas personales o presupuesto? ¿Cuál y por qué la dejaste?
9. ¿Qué celular usas, hace cuánto lo tienes, y qué otros dispositivos usas en el día (laptop, tablet, smartwatch)?
10. ¿Cuáles son las tres aplicaciones que más abres al día, y por dónde te enteras de las cosas: notificaciones, correo o redes? ¿Qué navegador usas en la laptop?
11. ¿Hay alguna marca o aplicación que consideres bien hecha y te guste usar? ¿A quién sigues o escuchas cuando quieres aprender algo sobre dinero o tecnología?
12. Hagamos una lista: ¿qué servicios te cobran todos los meses de forma automática, con qué medio se pagan, y cuáles de esos te cobran en dólares? ¿Sabes cuánto terminas pagando en soles?
13. Cuéntame la última vez que te cobraron algo que no tenías presente: ¿cómo te diste cuenta, cuánto tiempo pasó y qué hiciste después? ¿Cómo sabes hoy cuándo se te va a renovar una suscripción?
14. ¿Pagas alguna plataforma por motivos de estudio y tus gastos cambian según la época del ciclo? Pensando en la última semana, ¿cuántas veces pediste delivery, y cuánto crees que gastaste en delivery el mes pasado?
15. Si pudieras cambiar una cosa de cómo manejas tu dinero hoy, ¿cuál sería? ¿Qué es lo que más te molesta del manejo de tus suscripciones y has intentado cancelar alguna? *(Cierre)* Te cuento brevemente en qué estamos trabajando: una app que reúne todas tus suscripciones, te avisa un día antes de cada cobro y te muestra el total en soles. ¿Qué opinas, qué le falta y la recomendarías a tus amigos?

***

#### Guion de entrevista — Segmento 2: Profesional Joven Activo

Las 15 preguntas se aplican en el mismo orden a los 3 a 5 entrevistados del segmento; lo que varía entre entrevistas son las respuestas, no el guion.

1. Cuéntame quién eres: tu nombre, tu edad, en qué distrito vives y con quién (solo, en pareja, con roommates o con tu familia), y hace cuánto.
2. ¿Cómo está compuesto tu hogar (tienes dependientes o apoyas económicamente a alguien) y cuál es tu estado civil? Si vives en pareja, ¿cómo organizan los gastos comunes?
3. ¿A qué te dedicas y hace cuánto trabajas en eso? ¿Trabajas en planilla, por recibos o de forma independiente, y de manera presencial, híbrida o remota?
4. ¿Tus ingresos son fijos o varían mes a mes? ¿Recibes bonos o ingresos por proyectos aparte, y en qué moneda te pagan?
5. Cuéntame cómo llegaste a la forma en que hoy organizas tu dinero: ¿cambió algo cuando empezaste a trabajar?
6. ¿Cómo describirías tu perfil financiero: ordenado, improvisado, o depende del mes? Dame un ejemplo concreto del último mes.
7. ¿Qué herramienta usas hoy para llevar el control de tus gastos (Excel, la app del banco, una app de finanzas, ninguna), y separas tus gastos personales de los profesionales?
8. ¿Qué tan cómodo te sientes conectando tus cuentas bancarias a una aplicación de terceros? ¿Has probado alguna app de finanzas personales? ¿Cuál y por qué la dejaste?
9. ¿Qué celular usas y con qué sistema operativo, y qué otros dispositivos usas para trabajar?
10. ¿Qué aplicaciones son parte de tu rutina de trabajo diaria (cuáles pagas tú y cuáles tu empresa), y cómo prefieres que te avisen de algo importante: correo, notificación push, WhatsApp o calendario?
11. ¿Qué producto digital consideras que está bien hecho y por qué? ¿Dónde te informas sobre finanzas, inversión o tecnología?
12. Listemos todo lo que se te cobra de forma recurrente, personal y de trabajo: ¿cuántas de esas se te cobran en dólares y sabes cuánto te terminan costando en soles?
13. ¿Tienes alguna suscripción cuyo monto cambia según cuánto la uses, o alguna membresía con contrato anual? Cuéntame la última vez que un cobro automático te descuadró el mes.
14. ¿Cómo resuelves tus almuerzos y cenas en un día típico de trabajo? ¿Tienes alguna membresía de delivery y cuánto crees que gastaste en delivery el mes pasado?
15. ¿Cuáles son tus metas financieras para los próximos dos años y qué es lo más frustrante de administrar tus pagos recurrentes? *(Cierre)* Estamos construyendo una app que centraliza tus suscripciones, te avisa un día antes de cada renovación y convierte todo a soles automáticamente. ¿Qué te parece, qué le falta y la recomendarías en tu trabajo?

***

#### Consentimiento y ficha de registro

Antes de iniciar la grabación, el entrevistador lee el siguiente texto y solicita confirmación verbal en video:

> "Esta conversación se está grabando con fines exclusivamente académicos, para un trabajo del curso de Aplicaciones para Dispositivos Móviles de la UPC. No vamos a usar tus datos con ningún fin comercial y puedes pedirnos que detengamos la grabación en cualquier momento. ¿Estás de acuerdo con que grabemos?"

Cada entrevista se registra con la siguiente ficha, que se completa durante la sesión y sirve de base para el resumen de la sección 2.2.2:

| Campo | Contenido |
| --- | --- |
| Nombres y apellidos | |
| Género | |
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

[[PENDIENTE]]

### 2.3.2. User Task Matrix

[[PENDIENTE]]

### 2.3.3. User Journey Mapping

[[PENDIENTE]]

### 2.3.4. Empathy Mapping

[[PENDIENTE]]

### 2.3.5. Big Picture EventStorming

Antes de diseñar cualquier pantalla, el equipo reconstruirá en Miro, con la técnica del Big Picture EventStorming, la manera en que un usuario del segmento maneja hoy sus suscripciones, membresías y gastos de delivery sin ayuda de ninguna herramienta dedicada. La sesión ubicará en una línea de tiempo los eventos del proceso actual —desde que se contrata un servicio hasta que se descubre, o no, el cobro de su renovación— junto con los actores involucrados, los sistemas que hoy intervienen (la aplicación del banco, el correo de notificación, el calendario del celular) y los puntos donde ese proceso falla. El insumo de la sesión son los hallazgos de la sección 2.2.3; el resultado se limita a describir el problema tal como existe hoy, sin proponer todavía ninguna función de CraveWallet.

[[PENDIENTE]]

### 2.3.6. Ubiquitous Language

[[PENDIENTE]]

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

[[PENDIENTE: historias de usuario individuales, con criterios de aceptación Gherkin, una vez completado el Needfinding]]

### 2.4.2. Impact Mapping

El Impact Map vinculará los Business Outcome Assumptions declarados en la sección 1.2.2.2 del Capítulo I —NPS superior a 40, conversión Premium de al menos 12%, retención a 30 días superior a 45% y reducción de cargos no anticipados de al menos 60%— con los actores, los impactos de comportamiento esperados y las historias de usuario de la sección 2.4.1 que los sostienen.

[[PENDIENTE: elaboración del Impact Map una vez redactadas las User Stories]]

### 2.4.3. Product Backlog

El backlog consolidará las historias de la sección 2.4.1 con su estimación de esfuerzo y su prioridad, siguiendo el criterio de valor de negocio descrito en 2.4.1, y se administrará en la herramienta que indique el docente.

[[PENDIENTE]]

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
