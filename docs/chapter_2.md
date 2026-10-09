# Capítulo II: Requirements Development and Software Solution Design

## 2.1. Competidores

CraveWallet compite con aplicaciones de finanzas personales que ya ofrecen seguimiento de gastos: Spendee, Fintonic y Wallet by BudgetBakers. La información de cada una proviene de sus fuentes oficiales, consultadas el 7 de octubre de 2026. Como alternativas indirectas, los entrevistados de la sección 2.2.2 usan el calendario del celular, la aplicación de su banco y hojas de cálculo.

### 2.1.1. Análisis competitivo

#### Competitive Analysis Landscape

La tabla 11 compara a CraveWallet con Spendee, Fintonic y Wallet by BudgetBakers en propuesta de valor, mercado objetivo, marketing, productos, precios y diferenciación.

*Tabla 11. Competitive Analysis Landscape.*

| Atributo | CraveWallet (Gastify) | Spendee | Fintonic | Wallet by BudgetBakers |
| --- | --- | --- | --- | --- |
| Overview | Aplicación móvil para gestionar suscripciones y gastos de delivery. | Aplicación de seguimiento de finanzas con nivel básico y planes de pago [@spendee2026premium]. | Servicio de información financiera conectado a bancos, con FinScore e intermediación de préstamos [@fintonic2026app]. | Aplicación de seguimiento de finanzas con funciones gratuitas y Premium [@budgetbakers2026premium]. |
| Propuesta de valor | Reunir importe original, estimación en soles, próxima renovación y gastos de delivery en una sola vista. | Importación y categorización automática, presupuestos y carteras compartidas. | Conexión bancaria de lectura, puntuación financiera y comparación de financiación. | Seguimiento de finanzas con niveles Premium y periodo de prueba. |
| Mercado objetivo | Estudiantes universitarios de 18 a 25 años y profesionales de 25 a 32 años de Lima. | Usuarios de finanzas personales en general; no publica un rango de edad o ingreso. | Usuarios de bancos en España. | Usuarios de finanzas personales en general; no publica un rango de edad o ingreso. |
| Marketing | Difusión en comunidades universitarias con el mensaje de recordatorios y montos en soles. | Centro de ayuda con beneficios y planes. | Promoción de FinScore y de la comparación de préstamos. | Centro de ayuda con planes, prueba y continuidad de datos al dejar Premium. |
| Productos y servicios | Portafolio de suscripciones, avisos en el calendario, conversión USD/PEN, registro de delivery y plan Premium. | Premium con cuentas conectadas, importación, categorización, carteras y presupuestos. | FinScore, información bancaria de lectura e intermediación de financiación. | Seguimiento de finanzas con Premium mensual, anual y vitalicio. |
| Precios y costos | Free con cinco registros activos; Premium a S/ 9.90 al mes. | Premium a USD 5.99 al mes o USD 35.99 al año, con variaciones por país e impuestos. | FinScore y comparación de préstamos gratuitos. | Precios publicados dentro de la aplicación. |
| Diferenciación | Recordatorio antes de cada cobro, montos en soles y gastos de delivery, sin conectar el banco. | Organización general del gasto con importación automática. | Depende de la conexión bancaria. | Gran cantidad de funciones generales de finanzas. |

*Fuente: elaboración del equipo Gastify a partir de las fuentes oficiales citadas.*

#### Análisis FODA enfocado en la competencia

##### CraveWallet (Gastify)

- **Fortaleza:** tareas acotadas a renovaciones, montos en soles y gastos de delivery.
- **Debilidad:** exige registrar cada suscripción a mano.
- **Oportunidad:** los seis entrevistados tienen dificultades para anticipar cargos y entender importes en dólares.
- **Amenaza:** los usuarios pueden resolver parte de esas tareas con herramientas que ya usan o abandonar el registro manual.

##### Spendee

- **Fortaleza:** importación, categorización, presupuestos y carteras compartidas en Premium.
- **Debilidad:** no está centrada en anticipar renovaciones de suscripciones.
- **Oportunidad / amenaza para CraveWallet:** su organización del gasto es una referencia; CraveWallet debe aportar suficiente valor en su tarea específica para que el usuario cambie de herramienta.

##### Fintonic

- **Fortaleza:** información bancaria conectada y FinScore.
- **Debilidad:** su oferta corresponde a bancos de España.
- **Oportunidad / amenaza para CraveWallet:** un flujo sin conexión bancaria responde al rechazo de los tres profesionales entrevistados a conectar sus cuentas.

##### Wallet by BudgetBakers

- **Fortaleza:** oferta gratuita y Premium, periodo de prueba y conservación de datos al dejar el nivel pagado.
- **Debilidad:** la cantidad de funciones generales puede dificultar una tarea puntual.
- **Oportunidad / amenaza para CraveWallet:** un registro con menos pasos puede atraer a quien solo quiere controlar sus suscripciones.

#### Interpretación del análisis

CraveWallet se diferencia por combinar tres tareas para los segmentos elegidos: anticipar renovaciones, entender los montos en soles y seguir el gasto de delivery, sin conectar cuentas bancarias. El experimento de la sección 1.2.2.4 evaluará el esfuerzo de registrar la primera suscripción y la comprensión del importe, la estimación y la próxima renovación.

### 2.1.2. Estrategias y tácticas frente a competidores

#### Estrategia 1. Priorizar la anticipación de renovaciones

Diseñar el portafolio alrededor de la fecha, el importe y el estado de cada suscripción, y avisar al usuario en su calendario antes del cobro.

#### Estrategia 2. Explicar los importes en soles

Conservar el importe y la moneda original y mostrar la estimación en soles con su fecha de actualización. El precio Premium en soles evita el pago en dólares que exige, por ejemplo, Spendee.

#### Estrategia 3. Reducir el esfuerzo de registro

Ofrecer un catálogo de servicios frecuentes y un formulario corto para registrar la primera suscripción, y medir su tiempo, errores y necesidad de ayuda con el prototipo.

#### Estrategia 4. Proteger las reglas ante cambios externos

Usar adaptadores para las cotizaciones, los comercios y la facturación, de modo que un cambio en ExchangeRate-API, Google Places o Stripe no afecte las reglas del producto. Los spikes SP01 a SP06 investigan y prototipan estas integraciones.

## 2.2. Entrevistas

Las entrevistas buscan comprender cómo gestionan hoy los dos segmentos de la sección 1.3 sus compromisos recurrentes, qué los motiva y qué los frustra. Sus resultados sustentan los User Personas y los artefactos de Needfinding de la sección 2.3.

### 2.2.1. Diseño de entrevistas

#### Objetivos de la investigación

La tabla 12 enumera los cinco objetivos de la investigación, derivados de los supuestos del Lean UX Process (sección 1.2.2), y el supuesto que pone a prueba cada uno.

*Tabla 12. Objetivos de la investigación.*

| # | Objetivo de investigación | Supuesto que pone a prueba |
| --- | --- | --- |
| OI-1 | Caracterizar demográfica y biográficamente a los representantes de cada segmento, para sustentar los atributos objetivos de los User Personas. | *User Assumptions* 1 y 2 (rangos de edad, ingreso y ocupación). |
| OI-2 | Describir el portafolio real de suscripciones, membresías y gastos recurrentes de cada entrevistado, incluyendo la divisa de facturación. | *User Assumptions* 1 y 4 (densidad de 4 a 8 suscripciones y ausencia de registro formal). |
| OI-3 | Reconstruir cómo el usuario se entera hoy de un cobro automático y qué hace cuando lo descubre. | *Feature Assumption* 2 (valor de la alerta anticipada). |
| OI-4 | Identificar las frustraciones y los objetivos personales asociados al control del presupuesto mensual. | *User Outcome and Benefit Assumptions* 1 a 4. |
| OI-5 | Levantar el perfil tecnológico y de canales digitales: dispositivos, sistema operativo, aplicaciones de uso diario, marcas de referencia e influencias. | *User Assumption* 3 (Android de gama media como dispositivo primario). |

*Fuente: elaboración del equipo Gastify.*


#### Metodología

La tabla 13 define el tipo de entrevista, su duración, la muestra, los criterios de selección, la modalidad, el registro y el rol del entrevistador.

*Tabla 13. Metodología.*

| Aspecto | Definición |
| --- | --- |
| **Tipo de entrevista** | Semiestructurada, individual y en profundidad. El guion fija los temas obligatorios, pero permite al entrevistador profundizar con preguntas complementarias según las respuestas. |
| **Duración estimada** | De 20 a 30 minutos por entrevista. |
| **Muestra** | De 3 a 5 entrevistados por segmento, conforme a lo exigido en el enunciado del trabajo final. |
| **Criterios de selección** | Segmento 1: estudiante de universidad privada de Lima Metropolitana, de 18 a 25 años, con al menos tres suscripciones digitales activas.<br>Segmento 2: profesional de 25 a 32 años con empleo formal en Lima Metropolitana, con al menos una suscripción facturada en dólares o una membresía física vigente. |
| **Modalidad** | Remota mediante videollamada, o presencial con grabación, según disponibilidad del entrevistado. |
| **Registro** | Grabación en video con consentimiento informado previo, consolidada en un único archivo editado según la nomenclatura indicada en el enunciado. |
| **Rol del entrevistador** | Un integrante conduce la entrevista y toma notas del comportamiento no verbal. Las preguntas se formulan en el orden del guion, sin adelantar la descripción de CraveWallet. |

*Fuente: elaboración del equipo Gastify.*


#### Buenas prácticas aplicadas al diseño

El instrumento se elaboró siguiendo las prácticas recomendadas para la investigación cualitativa en diseño de producto [@portigal2013interviewing; @gothelf2021leanux]:

1. **Preguntas abiertas y neutrales.** Se evita toda formulación que sugiera la respuesta esperada o que mencione una funcionalidad del producto antes de que el entrevistado exprese la necesidad por su cuenta.
2. **Conducta pasada antes que intención futura.** Las preguntas indagan sobre hechos concretos ya ocurridos ("cuéntame la última vez que...") en lugar de escenarios hipotéticos, porque la intención declarada es un predictor débil del comportamiento real.
3. **Profundización por capas (*laddering*).** Cada pregunta principal se acompaña de preguntas complementarias que descienden del hecho a la motivación, con el fin de llegar al porqué y no quedarse en el qué.
4. **De lo general a lo específico.** El guion abre con temas amplios y cómodos (biografía, rutina) y reserva los temas sensibles (ingresos, cobros no anticipados) para el tramo medio, cuando ya existe confianza.
5. **Ausencia de pitch.** La descripción de CraveWallet se reserva para la pregunta de cierre, de modo que no contamine las respuestas previas.
6. **Silencio productivo.** El entrevistador tolera las pausas antes de reformular, práctica que favorece las respuestas espontáneas más ricas.

#### Trazabilidad entre atributos del arquetipo y preguntas

La matriz relaciona los atributos de las personas con las preguntas de investigación. Ambos guiones se numeraron en paralelo, de modo que la pregunta *n* de un segmento cubre el mismo atributo que la pregunta *n* del otro.

La tabla 14 relaciona cada atributo del User Persona con las preguntas que lo exploran en cada segmento.

*Tabla 14. Trazabilidad entre atributos del arquetipo y preguntas.*

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

*Fuente: elaboración del equipo Gastify.*



***

#### Guion de entrevista — Segmento 1: Estudiante Universitario Digital

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

#### Consentimiento y datos de registro

Antes de iniciar la grabación, el entrevistador lee el siguiente texto y solicita confirmación verbal en video:

> "Esta conversación se está grabando con fines exclusivamente académicos, para un trabajo del curso de Aplicaciones para Dispositivos Móviles de la UPC. No vamos a usar tus datos con ningún fin comercial y puedes pedirnos que detengamos la grabación en cualquier momento. ¿Estás de acuerdo con que grabemos?"

Para cada sesión se registran nombre, edad, segmento, modalidad, fecha, duración, entrevistador, URL y minuto de inicio en el video consolidado. Las seis fichas se presentan en la sección 2.2.2.

### 2.2.2. Registro de entrevistas


***

#### Entrevista 1 — Segmento 1: Leonardo Sánchez

La tabla 15 registra los datos y el resumen de la entrevista a Leonardo Sánchez.

*Tabla 15. Entrevista 1 — Segmento 1: Leonardo Sánchez.*

| Campo | Contenido |
| --- | --- |
| Nombres y apellidos | Leonardo Sánchez |
| Género | Masculino |
| Edad | 20 años |
| Distrito de residencia | San Juan de Lurigancho |
| Ocupación | Estudiante de Ingeniería de Software (6.º ciclo), freelance de desarrollo web |
| Segmento objetivo | Segmento 1 |
| Fecha y hora de la entrevista | 17/09/2026, 8:00 p. m. |
| Modalidad | Remota |
| Duración | 7:56 min |
| Entrevistador | Anghelo Faustino |
| Timing de inicio en el video consolidado | 0:03 min |
| URL del video | https://acortar.link/svpXy4 |

*Fuente: registro de Entrevista 1 — Segmento 1: Leonardo Sánchez; video enlazado en la ficha.*


Leonardo vive con sus padres en San Juan de Lurigancho, está soltero y comparte algunas suscripciones con amigos de la universidad para repartir los gastos. Estudia Ingeniería de Software en sexto ciclo y realiza ocasionalmente trabajos independientes de páginas web y programación, a los que dedica entre 10 y 15 horas semanales. El dinero que administra proviene del apoyo de sus padres y de esos proyectos; suele estar cerca de S/ 500 mensuales, aunque el monto varía. En casa le enseñaron a separar dinero para emergencias y su primera suscripción pagada con tarjeta propia fue Spotify Premium. Intenta planificar los pasajes, la comida y los gastos universitarios, pero reconoce compras impulsivas de delivery o videojuegos. Lleva el control mentalmente y revisa el saldo en la app del banco, por lo que a fin de mes le preocupa descubrir que gastó más de lo calculado. Se siente cómodo explorando aplicaciones nuevas por su cuenta; probó Monefy, pero la abandonó porque olvidaba registrar cada compra. Usa un Samsung y una laptop para estudiar, programar y trabajar; sus aplicaciones más frecuentes son WhatsApp, YouTube e Instagram, recibe novedades mediante notificaciones y navega con Chrome. Considera GitHub una aplicación bien diseñada y aprende sobre tecnología mediante canales de programación, TikTok y foros. Paga Spotify, Netflix y servicios de almacenamiento o programación con su tarjeta de débito; algunos se cobran en dólares y solo conoce el monto en soles después de revisar el movimiento bancario. En una ocasión olvidó cancelar la prueba gratuita de una plataforma para un proyecto y descubrió el cobro mediante la notificación del banco. No paga una plataforma académica permanente, aunque ocasionalmente compra cursos o herramientas; en épocas de parciales aumenta su consumo de delivery y estima un gasto cercano a S/ 120 mensuales. Le gustaría controlar mejor sus gastos y conocer por anticipado el monto de sus suscripciones; valoró positivamente que CraveWallet reúna los cobros, muestre su equivalente en soles y envíe alertas previas, y sugirió incorporar límites mensuales.

***

#### Entrevista 2 — Segmento 1: Darío Romero

La tabla 16 registra los datos y el resumen de la entrevista a Darío Romero.

*Tabla 16. Entrevista 2 — Segmento 1: Darío Romero.*

| Campo | Contenido |
| --- | --- |
| Nombres y apellidos | Darío Romero |
| Género | Masculino |
| Edad | 20 años |
| Distrito de residencia | Surquillo |
| Ocupación | Estudiante de Ingeniería de Software (6.º ciclo) |
| Segmento objetivo | Segmento 1 |
| Fecha y hora de la entrevista | 17/09/2026, 6:00 p. m. |
| Modalidad | Remota |
| Duración | 7:10 min |
| Entrevistador | Anghelo Faustino |
| Timing de inicio en el video consolidado | 8:00 min |
| URL del video | https://acortar.link/svpXy4 |

*Fuente: registro de Entrevista 2 — Segmento 1: Darío Romero; video enlazado en la ficha.*


Darío vive con sus padres en Surquillo y tiene pareja, con quien no comparte suscripciones formales aunque ella usa su cuenta de HBO. No trabaja ni hace prácticas; se dedica por completo a sus estudios y recibe una propina semanal de sus padres que suma cerca de S/ 500 fijos al mes. En casa le enseñaron a no gastar más de lo que tiene, y su primera suscripción propia fue una membresía de videojuego en PlayStation. Intenta planificar sus gastos para no quedarse sin dinero a fin de mes, pero reconoce ceder al impulso (pidió delivery por pereza de cocinar); su único control de gastos es abrir la app del banco constantemente para revisar el saldo, y siente alivio si llega a fin de mes sin quedar en cero. Le encanta probar aplicaciones nuevas por su cuenta; probó Monefy pero la abandonó porque se olvidaba de registrar compras pequeñas. Usa un Samsung Galaxy de un año y su laptop con frecuencia; sus tres aplicaciones más usadas son Instagram, Discord y WhatsApp, se guía completamente por notificaciones push y navega con Brave. Considera Discord una aplicación muy robusta y aprende sobre tecnología en foros y TikTok. Paga HBO Max, iCloud y Xbox Game Pass con su tarjeta de débito; cree que iCloud se cobra en dólares pero nunca sabe cuánto pagará en soles hasta ver el movimiento bancario. Mantuvo una suscripción de PedidosYa contratada por una promoción, la olvidó, fue cobrado durante dos meses seguidos y recién la canceló al notar el descuento por casualidad; actualmente no sabe cuándo se renuevan sus otras suscripciones. No paga plataformas de estudio porque usa software libre; pidió delivery unas tres veces la semana anterior a la entrevista y estima un gasto mensual de S/ 200. Su principal frustración es olvidarse de lo que paga y lo compleja que resulta la cancelación dentro de las configuraciones de cada app; reaccionó de forma positiva al concepto de CraveWallet, señalando que un aviso al calendario del celular antes de cada cobro le daría tranquilidad.

***

#### Entrevista 3 — Segmento 1: Eduardo Aguirre

La tabla 17 registra los datos y el resumen de la entrevista a Eduardo Aguirre.

*Tabla 17. Entrevista 3 — Segmento 1: Eduardo Aguirre.*

| Campo | Contenido |
| --- | --- |
| Nombres y apellidos | Eduardo Aguirre |
| Género | Masculino |
| Edad | 19 años |
| Distrito de residencia | Ate |
| Ocupación | Estudiante de Ingeniería de Software (6.º ciclo), trabajador de club nocturno los fines de semana |
| Segmento objetivo | Segmento 1 |
| Fecha y hora de la entrevista | 17/09/2026, 11:00 p. m. |
| Modalidad | Remota |
| Duración | 6:42 min |
| Entrevistador | Anghelo Faustino |
| Timing de inicio en el video consolidado | 15:20 min |
| URL del video | https://acortar.link/svpXy4 |

*Fuente: registro de Entrevista 3 — Segmento 1: Eduardo Aguirre; video enlazado en la ficha.*


Eduardo vive con su madre y hermanos en Ate, es soltero y aporta a los gastos de internet del hogar. Trabaja en un club nocturno los fines de semana (~24 horas semanales), lo que le genera un ingreso fijo cercano a S/ 1 500 al mes, además de propinas ocasionales. Aprendió a manejar dinero por su cuenta al empezar a trabajar de madrugada, y su primera suscripción fue Apple Music. Se describe como muy impulsivo por sus horarios: sale cansado del trabajo a las 4 a. m. y pide comida por delivery sin fijarse en el precio. No lleva ningún control formal, solo mental, y se sorprende a fin de mes por la cantidad que gasta en comida y pagos pequeños. Se siente cómodo explorando aplicaciones nuevas solo, pero nunca ha usado una app de finanzas porque le parecen aburridas y demandantes de tiempo. Usa un iPhone 12 y una laptop para la universidad; sus tres aplicaciones más usadas son WhatsApp, Rappi y TikTok, se entera de todo por notificaciones push y navega en Chrome. Le gusta la interfaz de Rappi por su rapidez y escucha podcasts en Spotify mientras trabaja para aprender sobre tecnología. Paga Apple Music, ChatGPT Plus, Amazon Prime y el gimnasio Smart Fit con su tarjeta de débito; ChatGPT y Amazon se cobran en dólares y nunca sabe el monto exacto en soles porque el tipo de cambio del banco varía. Dejó de ir al gimnasio un par de meses por la carga académica y laboral, pero Smart Fit le siguió cobrando automáticamente; recién se dio cuenta a los dos meses revisando el detalle bancario, y hoy solo nota el descuento sin conocer las fechas de cobro. Paga ChatGPT para apoyarse en sus estudios y programación; es el que más gasta en delivery del segmento, con cinco pedidos la última semana y un estimado de S/ 400 mensuales. Su principal frustración es no ser consciente de sus "gastos hormiga" digitales y de comida, y que las suscripciones no avisen antes de cobrar; reaccionó de forma muy positiva al concepto, destacando que el conversor a soles en tiempo real y el aviso previo le habrían ayudado a cancelar el gimnasio a tiempo, y afirmó que definitivamente usaría la aplicación.

***

#### Entrevista 4 — Segmento 2: Micaela Rodriguez

La tabla 18 registra los datos y el resumen de la entrevista a Micaela Rodriguez.

*Tabla 18. Entrevista 4 — Segmento 2: Micaela Rodriguez.*

| Campo | Contenido                                             |
| --- |-------------------------------------------------------|
| Nombres y apellidos | Micaela Rodriguez                                     |
| Género | Femenino                                              |
| Edad | 24 años                                               |
| Distrito de residencia | Miraflores                                            |
| Ocupación | Arquitecta en un estudio de diseño, modalidad híbrida |
| Segmento objetivo | Segmento 2                                            |
| Fecha y hora de la entrevista | 16/09/2026, 8:00 p. m.                                |
| Modalidad | Remota                                                |
| Duración | 5:52 min                                              |
| Entrevistador | Josué Carpio                                          |
| Timing de inicio en el video consolidado | 21:55 min                                             |
| URL del video | https://acortar.link/svpXy4                           |

*Fuente: registro de Entrevista 4 — Segmento 2: Micaela Rodriguez; video enlazado en la ficha.*


Micaela comparte departamento con dos roommates desde hace año y medio, sin dependientes y soltera; divide alquiler, luz e internet en partes iguales mediante una hoja de Excel compartida. Es arquitecta con tres años en un estudio de diseño, en planilla y modalidad híbrida (dos veces por semana en oficina). Su sueldo es fijo en soles, con bonos ocasionales cada tres o cuatro meses cuando cierran proyectos grandes. Su forma de organizar el dinero cambió por completo al empezar a trabajar y asumir el pago de alquiler, volviéndose más estricta que en su etapa de estudiante. Se considera ordenada con sus gastos fijos, aunque el mes pasado usó más tarjeta de crédito de lo previsto por varios cumpleaños seguidos. Usa la app de su banco para ver saldos, sin separar gastos personales de los profesionales (incluidos los programas de arquitectura que ella misma paga). No se siente cómoda conectando sus cuentas bancarias a una app de terceros por temor a que la hackeen; probó Wallet, pero la abandonó porque clasificar todo manualmente le daba pereza. Usa un iPhone 13 con iOS y una laptop con Windows armada para renderizado. Sus apps de trabajo son Slack (pagada por la empresa), AutoCAD y Adobe Creative Cloud (que paga ella); para avisos importantes prefiere el calendario, que es lo único que revisa siempre. Considera Notion un producto bien hecho por lo limpio y funcional, y se informa sobre finanzas en cuentas de Instagram y artículos de LinkedIn. Paga Spotify, Netflix, Adobe y almacenamiento de Google Drive; Adobe y Drive se cobran en dólares, lo que le molesta porque el banco aplica un tipo de cambio alto e impredecible. No tiene suscripciones de monto variable, pero fue cobrada por la renovación anual de una app de meditación en dólares (~$60) que la descuadró al enterarse recién tras el débito de su cuenta sueldo. Cocina los días remotos y pide delivery por Rappi cuando va a oficina, sin membresía de delivery; estima S/ 400 mensuales solo en almuerzos. Su meta financiera es ahorrar para una maestría, y su frustración son los "gastos fantasma" y el tipo de cambio en su contra; reaccionó de forma muy positiva al concepto, señalando que la conversión a soles en tiempo real sincronizada con su calendario la convencería de inmediato y que lo recomendaría en su trabajo.

***

#### Entrevista 5 — Segmento 2: Leonardo Caycho

La tabla 19 registra los datos y el resumen de la entrevista a Leonardo Caycho.

*Tabla 19. Entrevista 5 — Segmento 2: Leonardo Caycho.*

| Campo | Contenido                                  |
| --- |--------------------------------------------|
| Nombres y apellidos | Leonardo Caycho                            |
| Género | Masculino                                  |
| Edad | 30 años                                    |
| Distrito de residencia | Lince                                      |
| Ocupación | Ingeniero Industrial, supervisor de planta |
| Segmento objetivo | Segmento 2                                 |
| Fecha y hora de la entrevista | 16/09/2026, 5:00 p. m.                     |
| Modalidad | Remota                                     |
| Duración | 6:31 min                                   |
| Entrevistador | Josué Carpio                               |
| Timing de inicio en el video consolidado | 27:45 min                                  |
| URL del video | https://acortar.link/svpXy4                |

*Fuente: registro de Entrevista 5 — Segmento 2: Leonardo Caycho; video enlazado en la ficha.*


Leonardo vive con su enamorada desde hace dos años, sin hijos, y mantienen una cuenta mancomunada con un aporte fijo mensual de cada uno para cubrir alquiler, luz y compras del hogar. Es ingeniero industrial, supervisor de planta hace cuatro años, en planilla y de forma 100 % presencial. Su ingreso es fijo en soles, con utilidades anuales que no alteran el sueldo mensual. Cubre sus gastos fijos a inicio de mes y usa el resto de su tarjeta para vivir; asumir un hogar en pareja cambió su forma de organizarse frente a su etapa de soltero. Se describe como muy improvisado: pasa todo por la tarjeta de crédito para ganar puntos pero pierde el rastro de los gastos, como ocurrió en una salida donde cubrió la cuenta y los taxis sin registrar nada. Solo revisa movimientos en la app del banco y no separa gastos personales de los profesionales. No conectaría sus cuentas bancarias a una app de terceros porque el banco advierte contra ello; probó Spendee, pero la abandonó al mes por lo complicado de configurar los gastos como suscripciones mensuales. Usa un Samsung Galaxy S22 con Android y una laptop de la empresa. Sus apps de trabajo son WhatsApp, Outlook y Teams (pagadas por la empresa); prefiere que los avisos importantes lleguen por el calendario de Google o notificación del celular. Considera la app de Uber perfecta por su rapidez y lee noticias de economía en Gestión ocasionalmente. Paga Amazon Prime, HBO Max, YouTube Premium, el gimnasio Smart Fit y LinkedIn Premium; LinkedIn y Amazon se cobran en dólares, y no sabe cuánto le cuestan en soles, solo nota que baja la línea de su tarjeta. Sacó LinkedIn Premium para buscar trabajo, lo consiguió y olvidó cancelarlo, siendo cobrado unos tres meses seguidos de casi $40 hasta notarlo en su estado de cuenta, lo que le generó mucha rabia. Lleva almuerzo a la oficina entre semana pero pide comida chatarra todos los fines de semana, con membresía PedidosYa Plus; estima un gasto de S/ 600 mensuales en delivery, su "punto débil". Su meta financiera es comprar un auto, y su frustración es que las empresas no avisan antes de seguir cobrando; reaccionó positivamente al concepto, indicando que un aviso 24 horas antes le habría evitado el problema con LinkedIn y que plantillas fáciles para agregar sus gastos lo convencerían de pagar la suscripción.

***

#### Entrevista 6 — Segmento 2: Eddy Llamas

La tabla 20 registra los datos y el resumen de la entrevista a Eddy Llamas.

*Tabla 20. Entrevista 6 — Segmento 2: Eddy Llamas.*

| Campo | Contenido                                           |
| --- |-----------------------------------------------------|
| Nombres y apellidos | Eddy Llamas                                         |
| Género | Masculino                                           |
| Edad | 23 años                                             |
| Distrito de residencia | Jesus Maria                                         |
| Ocupación | Analista de Finanzas en un banco, modalidad híbrida |
| Segmento objetivo | Segmento 2                                          |
| Fecha y hora de la entrevista | 16/09/2026, 11:00 p. m.                             |
| Modalidad | Remota                                              |
| Duración | 5:26 min                                            |
| Entrevistador | Josué Carpio                                        |
| Timing de inicio en el video consolidado | 34:15 min                                           |
| URL del video | https://acortar.link/svpXy4                         |

*Fuente: registro de Entrevista 6 — Segmento 2: Eddy Llamas; video enlazado en la ficha.*


Eddy vive solo hace tres años, sin dependientes, soltero, y cubre el 100 % de sus propios gastos. Es analista de finanzas en un banco, en planilla y modalidad híbrida (mitad de semana en casa, mitad en oficina). Su ingreso es fijo en soles, con un bono anual por metas. Haber estudiado finanzas lo volvió metódico: apenas le pagan, separa un 20 % para ahorros y divide el resto entre vivienda, servicios y gustos. Se considera muy ordenado, aunque a veces cae en gastos de tecnología innecesarios, como una licencia de software de productividad que compró el mes pasado sin necesitarla realmente. Lleva un Excel muy detallado y separa por completo sus gastos personales de los profesionales usando tarjetas distintas. Por su trabajo, sabe que no debe conectar sus cuentas bancarias a aplicaciones de terceros y no se siente cómodo haciéndolo; probó Fintonic, pero la eliminó porque la sincronización fallaba mucho con los bancos peruanos. Usa un iPhone 14 y monitores adicionales conectados a la laptop de la empresa. Sus apps de trabajo son Excel, PowerBI y Outlook (pagadas por la empresa); depende totalmente de su calendario de Apple para avisos personales importantes. Le gusta mucho la app de su banco por lo limpia que es, se informa en el Diario Financiero y escucha podcasts de economía. Paga iCloud, ChatGPT Plus, Canva Pro, Netflix y Disney+; las tres primeras se cobran en dólares, lo que le obliga a actualizar manualmente la celda del tipo de cambio en su Excel cada fin de mes para que cuadren sus números. Tiene una membresía anual de una academia de cursos de finanzas que le renovó automáticamente en febrero (~$150) aunque ya no usaba la plataforma, porque olvidó que ese mes era la fecha de corte. Va a restaurantes cercanos los días de oficina y cocina los días remotos, con un gasto mínimo en delivery (máximo S/ 100 mensuales). Su meta financiera es invertir en un fondo mutuo extranjero, y su frustración es la falta de transparencia de las empresas sobre las fechas de cobro; reaccionó positivamente al concepto, señalando que resolver la conversión de divisas automáticamente sin necesidad de conectar cuentas bancarias sería una gran herramienta.

### 2.2.3. Análisis de entrevistas

El análisis se realiza por segmento objetivo, a partir de los resúmenes de la sección 2.2.2, trazando cada hallazgo a las entrevistas concretas de las que proviene. Los porcentajes expresan la frecuencia entre los tres entrevistados de cada segmento: 3/3, 2/3 o 1/3. Los arquetipos de 2.3.1 sintetizan esos relatos.

#### Segmento 1: Estudiante Universitario Digital (Leonardo, Darío, Eduardo)

La tabla 21 cuantifica las características observadas en las tres entrevistas del segmento de estudiantes.

*Tabla 21. Segmento 1: Estudiante Universitario Digital (Leonardo, Darío, Eduardo).*

| Característica | % | Entrevistas de sustento |
| --- | --- | --- |
| Ingreso mensual fijo | 67 % | Darío, Eduardo |
| Sin herramienta formal de control de gastos | 100 % | Leonardo, Darío, Eduardo |
| Probó y abandonó una app de finanzas | 67 % | Leonardo, Darío |
| Suscripción activa cobrada en dólares | 100 % | Leonardo, Darío, Eduardo |
| Caso de cobro automático olvidado | 100 % | Leonardo, Darío, Eduardo |
| Se entera de cargos solo revisando el banco (sin alerta previa) | 100 % | Leonardo, Darío, Eduardo |
| Dispositivo Android | 67 % | Leonardo, Darío |
| Se informa por notificaciones push | 100 % | Leonardo, Darío, Eduardo |
| Reacción positiva al concepto | 100 % | Leonardo, Darío, Eduardo |

*Fuente: síntesis de las tres entrevistas del segmento registradas en 2.2.2.*


- **Ingreso.** El 67 % (Darío, Eduardo) reporta un ingreso fijo mensual; el 33 % (Leonardo) tiene ingresos variables por trabajos independientes. El rango declarado va de S/ 500 a S/ 1 500.
- **Control de gastos.** El 100 % no usa ninguna herramienta formal de presupuesto: 67 % lo lleva principalmente de manera mental (Leonardo, Eduardo) y 33 % revisa constantemente la app del banco sin registrar nada (Darío).
- **Experiencia previa con apps de finanzas.** El 67 % (Leonardo y Darío con Monefy) probó una app de finanzas y la abandonó por la fricción del registro manual; el 33 % (Eduardo) nunca probó ninguna por considerarlas aburridas.
- **Suscripciones en dólares.** El 100 % tiene al menos una suscripción cobrada en dólares (servicios de almacenamiento o programación, iCloud, ChatGPT/Amazon) y ninguno sabe el monto exacto en soles antes de ver el cargo.
- **Cobro no anticipado.** El 100 % relata un caso concreto de cobro automático olvidado (prueba gratuita de una plataforma, PedidosYa, Smart Fit) del que se enteró entre uno y dos meses después, siempre revisando el detalle bancario o una notificación posterior al cobro, nunca mediante una alerta previa.
- **Delivery.** El 100 % pide delivery semanalmente; el gasto mensual estimado va de S/ 120 a S/ 400, con el mayor gasto asociado a quien tiene el horario más irregular (Eduardo, trabajo nocturno).
- **Perfil tecnológico.** El 67 % usa Android (Leonardo, Darío) y 33 % iPhone (Eduardo); el 100 % se entera de todo por notificaciones push y usa WhatsApp entre sus tres apps más frecuentes.
- **Reacción al concepto.** El 100 % reacciona positivamente y menciona espontáneamente el aviso anticipado y la conversión a soles como los dos elementos de mayor valor percibido.

#### Segmento 2: Profesional Joven Activo (Micaela, Leonardo, Eddy)

La tabla 22 cuantifica las características observadas en las tres entrevistas del segmento de profesionales.

*Tabla 22. Segmento 2: Profesional Joven Activo (Micaela, Leonardo, Eddy).*

| Característica | % | Entrevistas de sustento |
| --- | --- | --- |
| Ingreso mensual fijo en soles | 100 % | Micaela, Leonardo, Eddy |
| Separa gastos personales de los profesionales | 33 % | Eddy |
| Rechaza conectar sus cuentas bancarias a una app de terceros | 100 % | Micaela, Leonardo, Eddy |
| Probó y abandonó una app de finanzas | 100 % | Micaela, Leonardo, Eddy |
| Suscripción activa cobrada en dólares | 100 % | Micaela, Leonardo, Eddy |
| Caso de renovación automática no anticipada (monto alto) | 100 % | Micaela, Leonardo, Eddy |
| Depende del calendario digital para avisos importantes | 100 % | Micaela, Leonardo, Eddy |
| Reacción positiva al concepto | 100 % | Micaela, Leonardo, Eddy |

*Fuente: síntesis de las tres entrevistas del segmento registradas en 2.2.2.*


- **Ingreso.** El 100 % tiene ingreso fijo mensual en soles, con algún tipo de ingreso variable adicional (bonos, utilidades) que no altera el sueldo base.
- **Separación de gastos.** El 33 % (Eddy) separa formalmente sus gastos personales de los profesionales con tarjetas distintas; el 67 % (Micaela, Leonardo) no hace ninguna separación.
- **Desconfianza a conectar cuentas bancarias.** El 100 % expresa incomodidad explícita ante la idea de conectar sus cuentas bancarias a una aplicación de terceros, por temor a seguridad (Micaela), por advertencia del banco (Leonardo) o por conocimiento profesional del riesgo (Eddy).
- **Experiencia previa con apps de finanzas.** El 100 % probó una app de finanzas personales (Wallet, Spendee, Fintonic) y la abandonó, por fricción de registro manual (Micaela, Leonardo) o por fallas de sincronización con bancos peruanos (Eddy).
- **Suscripciones en dólares.** El 100 % tiene suscripciones cobradas en dólares (Adobe/Drive, LinkedIn/Amazon, iCloud/ChatGPT/Canva) y los tres mencionan explícitamente la fricción del tipo de cambio bancario.
- **Cobro no anticipado.** El 100 % relata una renovación automática que lo tomó por sorpresa (app de meditación, LinkedIn Premium, academia de finanzas), en los tres casos de monto relativamente alto (~$40-150) y detectada solo al revisar el estado de cuenta.
- **Delivery.** El 100 % pide delivery con cierta regularidad; el gasto mensual estimado va de S/ 100 a S/ 600, con la mayor variabilidad del segmento.
- **Dependencia del calendario digital.** El 100 % menciona el calendario (Apple o Google) como su canal preferido para avisos importantes, por encima de correo o notificaciones sueltas.
- **Reacción al concepto.** El 100 % reacciona positivamente y valora en particular la conversión automática a soles; dos de tres (Micaela, Eddy) además destacan no tener que conectar sus cuentas bancarias como un punto a favor frente a lo que ya rechazaron de otras apps.

Los dos segmentos coinciden en tres hallazgos, que sustentan el Needfinding. Primero, ninguna de las seis personas recibe hoy una alerta antes del cobro; todas se enteran después, al revisar el banco. Segundo, las seis tienen al menos una suscripción facturada en dólares y no conocen su equivalente en soles hasta ver el cargo. Tercero, las seis relatan un cobro automático olvidado. La principal diferencia está en la conexión de cuentas bancarias: el Segmento 1 no la menciona como objeción, mientras que los tres profesionales del Segmento 2 la rechazan de forma explícita. Esta diferencia condiciona la propuesta de valor para cada segmento.

## 2.3. Needfinding

El Needfinding convierte los hallazgos de la sección 2.2 en artefactos de diseño que preparan la especificación de requisitos de la sección 2.4. Primero se definen los arquetipos de usuario; luego, las tareas y recorridos que siguen hoy sin CraveWallet; y por último, el vocabulario compartido del dominio.

### 2.3.1. User Personas

Se elabora una ficha de User Persona por cada segmento objetivo en UXPressia. Cada atributo de la ficha, sea demográfico, tecnológico o de comportamiento, se traza al porcentaje correspondiente del análisis de la sección 2.2.3.

#### User Persona 1: Camila Torres — Estudiante Universitario Digital

La figura 3 presenta la ficha de Camila Torres, arquetipo del segmento de estudiantes universitarios.

![Ficha de User Persona 1 de Camila Torres](images/chapter_2/User%20Persona%201-Camila%20Torres.jpg)

<!-- pdf:omit-start -->

*Figura 3. Ficha de User Persona 1 de Camila Torres.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

***

#### User Persona 2: Renzo Salazar — Profesional Joven Activo

La figura 4 presenta la ficha de Renzo Salazar, arquetipo del segmento de profesionales jóvenes.

![Ficha de User Persona 2 de Renzo Salazar](images/chapter_2/User%20Persona%202-Renzo%20Salazar.jpg)

<!-- pdf:omit-start -->

*Figura 4. Ficha de User Persona 2 de Renzo Salazar.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

### 2.3.2. User Task Matrix

El User Task Matrix concentra las tareas que Camila Torres (Segmento 1) y Renzo Salazar (Segmento 2) realizan hoy para gestionar sus suscripciones y gastos recurrentes, sin CraveWallet. Cada tarea proviene de un comportamiento descrito en las entrevistas y cuantificado en la sección 2.2.3.


La tabla 23 compara la frecuencia y la importancia de cada tarea para Camila Torres y Renzo Salazar.

*Tabla 23. User Task Matrix.*

| Tarea | Camila Torres (S1)<br>Frecuencia | Camila Torres (S1)<br>Importancia | Renzo Salazar (S2)<br>Frecuencia | Renzo Salazar (S2)<br>Importancia |
| --- | --- | --- | --- | --- |
| Elegir el medio de pago al activar una nueva suscripción | Baja | Media | Baja | Media |
| Revisar el saldo o los movimientos bancarios al cierre del mes | Media | Alta | Media | Alta |
| Convertir mentalmente el monto de una suscripción en dólares a soles | Alta | Alta | Alta | Alta |
| Recordar cuándo se renueva cada suscripción activa | Baja | Alta | Baja | Alta |
| Detectar que una suscripción activa ya no se está usando | Baja | Media | Baja | Alta |
| Cancelar una suscripción localizando la opción dentro de cada app | Baja | Media | Baja | Alta |
| Llevar un registro propio de gastos mensuales | Media | Media | Media | Media |
| Pedir delivery de comida | Alta | Baja | Media | Baja |
| Ajustar el gasto de delivery según la rutina (oficina/remoto o época de exámenes) | Media | Baja | Media | Baja |
| Compartir el costo de una suscripción con otra persona | Baja | Baja | No reportada | Baja |
| Separar los gastos personales de los profesionales | No aplica | Baja | Baja | Media |
| Actualizar manualmente el tipo de cambio en un registro propio (Excel u hoja de cálculo) | No reportada | Baja | Baja | Media |

*Fuente: elaboración del equipo Gastify.*



**Leyenda:** Frecuencia e Importancia se expresan en tres niveles: Baja, Media y Alta.

Del cuadro se desprenden tres lecturas. La primera es que, para ambas personas, la tarea más frecuente e importante es convertir mentalmente a soles el monto de una suscripción en dólares. Ocurre en cada ciclo de facturación y es la principal fricción reportada en 2.2.3, presente en las seis entrevistas. La segunda es que recordar la fecha de renovación es una tarea poco frecuente y sin ningún apoyo, pero es la de mayor importancia percibida: olvidarla explica todos los cobros no anticipados relatados en las entrevistas. Detectar que una suscripción ya no se usa y cancelarla a tiempo derivan del mismo problema. Para Renzo son más importantes, porque los montos en juego son mayores (alrededor de USD 40 a 150, frente a compromisos menores en el Segmento 1). La tercera es que dos tareas aparecen solo en la rutina de Renzo: separar gastos personales de profesionales y actualizar a mano el tipo de cambio en una hoja de cálculo. Ningún entrevistado del Segmento 1 reporta gastos profesionales ni lleva un registro formal.

Entre las tareas compartidas por ambos segmentos, destaca revisar el saldo o los movimientos bancarios al cierre del mes. Es el único mecanismo con el que ambas personas se enteran hoy de un cargo, y ocurre después del cobro porque no cuentan con una alerta anticipada.

### 2.3.3. User Journey Mapping

Se elabora en UXPressia un User Journey Map As-Is por cada User Persona, vinculado a su ficha. Cada mapa recorre lo que hoy hace la persona con un servicio de suscripción, sin CraveWallet: desde que lo contrata hasta que descubre, o no, el cobro de su renovación. Ambos journeys comparten la misma estructura de etapas, derivada de los patrones de 2.2.3, aunque difieren en las emociones e intensidad de cada una.

#### Journey de Camila Torres (Segmento 1)

El mapa muestra que Camila pasa de una contratación motivada por promociones o recomendaciones a una gestión pasiva de la suscripción. El cobro ocurre sin aviso y recién lo identifica al revisar su banco, lo que lleva la experiencia desde una aceptación inicial hasta la sorpresa, el estrés y la resignación. La principal oportunidad consiste en anticipar el cobro y mostrar su equivalente en soles sin exigirle un registro manual.

La figura 5 organiza las etapas del recorrido actual de Camila y los problemas que enfrenta al gestionar suscripciones.

![As-Is Journey de Camila Torres](images/chapter_2/As-Is%20Journey%20%E2%80%94%20Camila%20Torres%20%281%29.png)

<!-- pdf:omit-start -->

*Figura 5. As-Is Journey de Camila Torres.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

1. **Contratación.** Activa una suscripción (streaming, música, herramienta de estudio) con su tarjeta de débito, generalmente por una promoción o recomendación; no revisa condiciones de renovación.
2. **Uso regular.** Usa el servicio con normalidad durante el ciclo, sin pensar en el costo ni en la fecha de corte.
3. **Cobro automático silencioso.** Llega la fecha de renovación sin ningún aviso previo; si la suscripción está en dólares, el monto en soles varía según el tipo de cambio del banco ese día (100 % de la muestra).
4. **Descubrimiento tardío.** Se entera del cargo al revisar el estado de cuenta o el saldo de forma reactiva, entre unos días y hasta dos meses después del cobro (100 %); la emoción dominante es sorpresa o estrés, especialmente cuando el monto no cuadra con lo presupuestado.
5. **Reacción.** En la mayoría de los casos no hace nada de inmediato por desconocer el proceso de cancelación o por priorizar otras cosas; cuando decide cancelar, describe el proceso como poco intuitivo dentro de cada app.
6. **Repetición del ciclo.** Sin un sistema de recordatorio propio, el mismo patrón se repite en el siguiente ciclo de facturación.

#### Journey de Renzo Salazar (Segmento 2)

El mapa muestra que Renzo contrata servicios profesionales o personales de mayor impacto económico, pero tampoco recibe información anticipada sobre la renovación. Descubre los cargos al revisar sus extractos, experimenta frustración o enojo y termina dependiendo de revisiones manuales porque rechaza vincular sus cuentas bancarias. La oportunidad principal es ofrecer transparencia, alertas anticipadas y control seguro sin conexión bancaria.

La figura 6 organiza las etapas del recorrido actual de Renzo y los problemas que enfrenta al gestionar suscripciones.

![As-Is Journey de Renzo Salazar](images/chapter_2/As-Is%20Journey%20%E2%80%94%20Renzo%20Salazar.png)

<!-- pdf:omit-start -->

*Figura 6. As-Is Journey de Renzo Salazar.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

1. **Contratación.** Activa una suscripción de trabajo o personal, muchas veces en dólares (herramientas profesionales, membresías), con tarjeta de débito o crédito propia.
2. **Uso regular.** Usa el servicio de forma constante; en varios casos deja de usarlo activamente (por ejemplo, tras conseguir empleo o dejar de ir al gimnasio) sin recordar que la suscripción sigue activa.
3. **Cobro automático silencioso.** La renovación, mensual o anual, se procesa sin aviso; el 100 % de la muestra reporta desconocer el monto exacto en soles antes de ver el cargo.
4. **Descubrimiento tardío.** Nota el cobro al revisar el estado de cuenta o la línea de su tarjeta, a veces varios meses después en el caso de renovaciones anuales de montos altos (~$40-150); la emoción dominante es frustración o enojo, agravada por sentir que "las empresas asumen que uno quiere seguir pagando".
5. **Reacción.** Cancela la suscripción una vez que la detecta, pero ya asumió el cargo no planeado; ninguno de los tres reporta haber logrado anticiparse a un cobro.
6. **Repetición del ciclo.** El rechazo a conectar sus cuentas bancarias a aplicaciones de terceros (100 %) lo mantiene dependiendo de la revisión manual, por lo que el patrón se repite con cada suscripción nueva que contrata.

### 2.3.4. Empathy Mapping

Se elabora en UXPressia un Empathy Map por cada User Persona, colocando al arquetipo al centro y completando cada cuadrante a partir de las citas y comportamientos recogidos en las entrevistas y consolidados en 2.2.3.

#### Empathy Map de Camila Torres (Segmento 1)

La figura 7 sintetiza lo que Camila dice, piensa, hace y siente, junto con sus dificultades y expectativas.

![Empathy Map de Camila Torres](images/chapter_2/Empathy_map_1_Camila_Torres.png)

<!-- pdf:omit-start -->

*Figura 7. Empathy Map de Camila Torres.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

***

#### Empathy Map de Renzo Salazar (Segmento 2)

La figura 8 sintetiza lo que Renzo dice, piensa, hace y siente, junto con sus dificultades y expectativas.

![Empathy Map de Renzo Salazar](images/chapter_2/Empathy_map_2_Renzo_Salazar.png)

<!-- pdf:omit-start -->

*Figura 8. Empathy Map de Renzo Salazar.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

### 2.3.5. Big Picture EventStorming

Se reconstruyó en Miro, con la técnica del Big Picture EventStorming, la manera en que un usuario del segmento maneja sus suscripciones, membresías y gastos de delivery sin ayuda de una herramienta dedicada. El tablero sitúa en una línea de tiempo los eventos del proceso actual, desde la contratación de un servicio hasta el descubrimiento del cobro de su renovación, junto con los actores, los sistemas que intervienen y los puntos donde ese proceso falla. Los hallazgos de 2.2.3 sirvieron como insumo.

El tablero representa el **proceso actual (As-Is)** a partir de las entrevistas de 2.2.2 y los patrones de 2.2.3. Los pósits naranjas expresan hechos ya ocurridos, escritos en pasado; los amarillos identifican actores, los azules sistemas que intervienen hoy, los rojos fricciones y los verdes oportunidades.

#### Paso 1: recolectar eventos del dominio

Primero se reunieron, sin imponer un orden, los hechos que aparecen en la contratación y renovación de membresías, el consumo de delivery y la revisión del dinero disponible. El tablero incluye *suscripción contratada*, *fecha de renovación fijada*, *pedido realizado*, *pedido cobrado*, *pedido entregado*, *membresía renovada*, *cargo recurrente procesado*, *saldo consultado*, *estado de cuenta consultado*, *cargo imprevisto detectado*, *gasto mensual estimado*, *pedidos del mes revisados*, *gastos de varias apps revisados*, *presupuesto excedido* y *cancelación solicitada*. Se distinguen los **hechos** de las acciones deseadas: «recibir un recordatorio» sería una solución propuesta, mientras que «cargo imprevisto detectado» describe el proceso presente.

La figura 9 reúne los eventos del proceso actual, antes de ordenarlos temporalmente.

![Paso 1 del Big Picture EventStorming: eventos As-Is recolectados](images/chapter_2/big-picture-paso-1.png)

<!-- pdf:omit-start -->

*Figura 9. Paso 1 del Big Picture EventStorming: eventos As-Is recolectados.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

*Nota: eventos del proceso actual antes de ordenarlos en el tiempo.*

#### Paso 2: ordenar los eventos

La secuencia comienza con la contratación de una membresía de delivery y la fijación de su fecha de renovación. Después aparecen pedidos de comida realizados y cobrados, la renovación de la membresía y el cargo recurrente. La consulta del estado de cuenta permite detectar el cargo; al estimar el gasto mensual se reconoce el exceso presupuestario y puede solicitarse la cancelación. Los pedidos y la renovación no tienen una dependencia causal: comparten el período de consumo y pueden ocurrir en distinto orden.

La figura 10 ordena los eventos del proceso actual y señala los puntos donde aparecen problemas.

![Paso 2 del Big Picture EventStorming: eventos As-Is ordenados](images/chapter_2/big-picture-paso-2.png)

<!-- pdf:omit-start -->

*Figura 10. Paso 2 del Big Picture EventStorming: eventos As-Is ordenados.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

*Nota: en rojo se señalan los cobros sin aviso, la dispersión del gasto y el descubrimiento tardío del exceso.*

#### Paso 3: añadir actores y sistemas

Se ubicaron sobre los eventos el **usuario** y la **plataforma de delivery**; debajo, la **aplicación de delivery**, el **banco o pasarela**, el **sistema de cobros** y el **estado bancario**. En la muestra de seis eventos clave, el usuario contrata la suscripción, realiza el pedido y consulta el cargo; la plataforma fija la renovación y la ejecuta. La aplicación de delivery y el banco conservan piezas distintas de la información. Esa separación explica por qué el usuario necesita reconstruir el gasto a partir de varias fuentes y por qué el estado de cuenta solo permite una detección posterior.

La figura 11 añade los actores y sistemas que participan en el proceso actual.

![Paso 3 del Big Picture EventStorming: actores y sistemas](images/chapter_2/big-picture-paso-3.png)

<!-- pdf:omit-start -->

*Figura 11. Paso 3 del Big Picture EventStorming: actores y sistemas.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

*Nota: actores en amarillo, eventos en naranja y sistemas que participan en azul.*

#### Paso 4: identificar problemas y oportunidades

La tabla 24 relaciona cada momento del proceso con el problema observado y la oportunidad de mejora.

*Tabla 24. Paso 4: identificar problemas y oportunidades.*

| Momento del proceso | Problema observado o inferido de las entrevistas | Oportunidad de mejora |
| --- | --- | --- |
| Contratación | La renovación puede olvidarse después de contratar la membresía. | Avisar 24 horas antes de la renovación. |
| Pedidos de delivery | Los cargos quedan dispersos entre distintas aplicaciones. | Unificar el historial de gastos. |
| Renovación | El cargo recurrente se procesa sin aviso oportuno. | Alertar sobre el cargo próximo. |
| Presupuesto | El exceso se detecta tarde al consultar el estado bancario. | Mostrar el límite mensual y el avance del gasto. |

*Fuente: elaboración del equipo Gastify.*


La figura 12 relaciona los momentos del proceso actual con los problemas y oportunidades de mejora identificados.

![Paso 4 del Big Picture EventStorming: problemas y oportunidades](images/chapter_2/big-picture-paso-4.png)

<!-- pdf:omit-start -->

*Figura 12. Paso 4 del Big Picture EventStorming: problemas y oportunidades.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

*Nota: cuatro momentos del proceso As-Is con actor, evento, sistema, problema y oportunidad de mejora.*

El resultado del Big Picture sitúa el mayor punto de dolor **entre la renovación y la revisión bancaria**: el usuario recibe la información útil cuando ya no puede evitar ese cargo. También revela que los pedidos de delivery afectan el mismo presupuesto, aunque cada pedido sea una decisión puntual y no un cobro recurrente. Estas oportunidades orientan el diseño de la solución en la sección 2.5.1.

### 2.3.6. Ubiquitous Language

El glosario reúne los términos del dominio identificados en las entrevistas (2.2.2), el análisis de patrones (2.2.3) y el Needfinding. Su objetivo es que el equipo y cualquier lector del informe usen el mismo vocabulario para describir el problema y la solución. Los términos se registran en inglés, con su equivalente de uso corriente en español entre paréntesis.


La tabla 25 define los términos del dominio que el equipo usa de forma consistente en el informe.

*Tabla 25. Ubiquitous Language.*

| Término | Definición |
| --- | --- |
| **Subscription** (Suscripción) | Servicio digital o membresía cuyo acceso se paga de forma periódica y automática, sin que el usuario deba autorizar cada cobro individualmente. |
| **Recurring Charge** (Cobro recurrente) | Cargo que una Subscription genera de forma automática en cada Billing Cycle, sin intervención activa del usuario en el momento del cobro. |
| **Billing Cycle** (Ciclo de facturación) | Intervalo de tiempo, típicamente mensual o anual, entre dos Recurring Charges consecutivos de una misma Subscription. |
| **Renewal** (Renovación) | Evento en el que, al finalizar un Billing Cycle, la Subscription continúa vigente y genera un nuevo Recurring Charge sin que el usuario deba confirmarlo. |
| **Subscription Portfolio** (Portafolio de suscripciones) | Conjunto de todas las Subscriptions activas que mantiene un usuario en un momento dado, sin importar en qué moneda se facturen. |
| **Silent Charge** (Cobro silencioso) | Recurring Charge que se procesa sin ningún aviso previo al usuario, de modo que este solo se entera al revisar su cuenta bancaria después de ocurrido. |
| **Exchange Rate** (Tipo de cambio) | Cotización de referencia para expresar un importe en otra moneda. La cotización de la aplicación se distingue del tipo aplicado por el banco al procesar el cargo. |
| **Currency Conversion** (Conversión de divisas) | Cálculo del monto equivalente en soles de un Recurring Charge facturado originalmente en otra moneda, aplicando el Exchange Rate vigente. |
| **Advance Alert** (Alerta anticipada) | Aviso enviado al usuario antes de que se procese un Recurring Charge, con tiempo suficiente para verificar saldo o decidir si cancela la Subscription. |
| **Ghost Expense** (Gasto fantasma) | Recurring Charge de una Subscription que el usuario ya no usa activamente pero que continúa pagando por no haberla cancelado a tiempo. |
| **Cutoff Date** (Fecha de corte) | Día específico del Billing Cycle en el que se procesa el Renewal de una Subscription. |
| **Cancellation** (Cancelación) | En el proceso del proveedor, solicitud de dar de baja un servicio. En CraveWallet, cambio del registro a CANCELLED; no ejecuta la baja externa ni garantiza que no ocurra un cargo. |
| **Budget Mismatch** (Descuadre) | Situación en la que un Recurring Charge no anticipado o un Exchange Rate desfavorable hace que el gasto real del mes supere lo que el usuario había previsto. |
| **Bank Statement Review** (Revisión del estado de cuenta) | Práctica manual y reactiva mediante la cual el usuario identifica sus Recurring Charges revisando los movimientos de su cuenta o tarjeta, en ausencia de una Advance Alert. |
| **Shared Subscription** (Suscripción compartida) | Subscription cuyo costo se divide informalmente entre varias personas que la usan, sin un mecanismo formal de cobro o registro de esa división. |
| **Spending Category** (Categoría de gasto) | Agrupación temática de una Subscription (streaming, educación, fitness, delivery, cloud) que permite consolidar el Subscription Portfolio por rubro. |
| **Delivery Expense** (Gasto de delivery) | Gasto puntual, no recurrente por definición pero de alta frecuencia, generado por un pedido de comida a domicilio; se distingue de un Recurring Charge porque cada pedido requiere una decisión activa del usuario. |
| **Bank Account Linking** (Vinculación de cuentas bancarias) | Mecanismo por el cual una aplicación de terceros accede a los movimientos de la cuenta bancaria de un usuario; el Segmento 2 lo rechaza de forma explícita en el 100 % de las entrevistas. |
| **Free Tier** (Plan gratuito) | Nivel de acceso a CraveWallet sin costo, con un límite en la cantidad de Subscriptions que un usuario puede registrar en su Subscription Portfolio. |
| **Premium Tier** (Plan Premium) | Nivel de acceso de pago que elimina el límite de registro del Free Tier y añade beneficios como analítica avanzada del Subscription Portfolio. |
| **Delivery Budget Limit** (Límite de gasto en delivery) | Monto máximo que un usuario se fija para su Delivery Expense acumulado del mes, usado para generar un aviso cuando el gasto real se acerca a ese límite. |

*Fuente: elaboración del equipo Gastify.*



## 2.4. Requirements specification

La especificación convierte en requisitos lo que las entrevistas y el Needfinding muestran sobre los dos segmentos, junto con las Feature Assumptions y los Hypothesis Statements del Capítulo I. Abarca los tres productos del proyecto: la aplicación móvil, el backend y el landing page. El resultado se organiza en tres piezas complementarias. Primero, el catálogo de historias (User Stories agrupadas en Epics, junto con las Technical Stories de infraestructura y las Spike Stories de investigación). Segundo, un Impact Map que conecta cada historia con los Business Outcome Assumptions de la sección 1.2.2.2. Tercero, el Product Backlog, donde esas historias reciben estimación de esfuerzo y prioridad.

### 2.4.1. User Stories

Cada historia se escribe desde el punto de vista de uno de los dos segmentos del Capítulo I, con el rol genérico **usuario** cuando aplica a ambos. Las excepciones son las historias del landing page, escritas desde un visitante sin cuenta, y las Technical Stories y Spike Stories, que documentan trabajo interno del equipo. Los criterios de aceptación se escriben en Gherkin (Dado, Cuando, Entonces). La prioridad se deriva de las Hypothesis Statements de la sección 1.2.2.3: es Alta si la historia sostiene el Dashboard, la anticipación del cobro o un registro inicial sin fricción; Media si completa un ciclo de uso ya cubierto; y Baja si amplía la propuesta sin ser necesaria para validar las hipótesis.

#### Epics

Las Epics agrupan el alcance a partir de las Feature Assumptions del Capítulo I, las estrategias de la sección 2.1.2 y los hallazgos del Needfinding (sección 2.3).

La tabla 26 lista las Epics con su identificador, nombre y alcance.

*Tabla 26. Epics.*

| Epic ID | Nombre | Descripción |
| --- | --- | --- |
| EP01 | Autenticación y perfil | Inicio de sesión en CraveWallet y edición de los datos del perfil del usuario. |
| EP02 | Alta de suscripciones | Registro de una suscripción, membresía o gasto recurrente, con plantillas preconfiguradas de los servicios más frecuentes del segmento para reducir la fricción de onboarding. |
| EP03 | Dashboard unificado | Vista consolidada de las suscripciones activas, agrupadas por categoría y ordenadas por próxima fecha de renovación. |
| EP04 | Recordatorios vía calendario nativo | Agendado automático de un recordatorio 24 horas antes de cada cobro, integrado con el calendario del dispositivo. |
| EP05 | Conversión de divisas con cotización fechada | Expresión del portafolio completo en soles, con conversión diaria de los montos facturados en dólares vía ExchangeRate-API. |
| EP06 | Categorización de gastos de delivery | Registro y categorización de pedidos de delivery, con catálogo precargado de comercios limeños frecuentes. |
| EP07 | CraveWallet Premium | Conversión al nivel Premium mediante el SDK de Stripe, con analítica avanzada y registro ilimitado de suscripciones. |
| EP08 | Landing page | Sitio informativo que explica el problema de los cobros recurrentes no anticipados, la propuesta de CraveWallet y el enlace de descarga de la aplicación. |
| EP09 | Servicios RESTful | Technical Stories del backend propio que expone los endpoints consumidos por la aplicación móvil. |
| EP10 | Investigación técnica | Spike Stories orientadas a despejar la incertidumbre técnica de las integraciones con Stripe y ExchangeRate-API antes de comprometerlas en el backlog. |

*Fuente: elaboración del equipo Gastify.*


Las Epics se desarrollan en 40 User Stories de los ocho Epics orientados al usuario (EP01-EP08), las 6 Technical Stories del backend propio (EP09) y las 6 Spike Stories de investigación técnica (EP10), con un total de 52 historias.

#### Historias de usuario

##### EP01 Autenticación y perfil


Los requisitos y criterios de US01 se detallan en la tabla 27.

*Tabla 27. Historia US01: Registrarme con correo y contraseña.*

| Campo | Contenido |
| --- | --- |
| Story ID | US01 |
| User | Usuario |
| Priority | Alta |
| Epic | EP01 |
| **Title** | Registrarme con correo y contraseña |
| **Description** | Como usuario nuevo, deseo crear una cuenta con mi correo y una contraseña, para empezar a registrar mis suscripciones en CraveWallet. |
| Acceptance Criteria | **Escenario 1: Registro exitoso**<br>Dado que el usuario no tiene una cuenta en CraveWallet,<br>Cuando ingresa un correo válido no registrado y una contraseña que cumple la política mínima de seguridad,<br>Entonces el sistema crea la cuenta y da inicio a la sesión. |
| Acceptance Criteria | **Escenario 2: Correo ya registrado**<br>Dado que el correo ingresado ya tiene una cuenta asociada,<br>Cuando el usuario intenta registrarse con ese correo,<br>Entonces el sistema rechaza el registro e indica que el correo ya está en uso. |
| Acceptance Criteria | **Escenario 3: Contraseña insegura**<br>Dado que el usuario está completando el registro,<br>Cuando ingresa una contraseña que no cumple la longitud o complejidad mínima,<br>Entonces el sistema no crea la cuenta e indica el motivo del rechazo. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US02 se detallan en la tabla 28.

*Tabla 28. Historia US02: Iniciar sesión.*

| Campo | Contenido |
| --- | --- |
| Story ID | US02 |
| User | Usuario |
| Priority | Alta |
| Epic | EP01 |
| **Title** | Iniciar sesión |
| **Description** | Como usuario registrado, deseo iniciar sesión con mi correo y contraseña, para acceder a mi portafolio de suscripciones. |
| Acceptance Criteria | **Escenario 1: Credenciales correctas**<br>Dado que el usuario tiene una cuenta registrada,<br>Cuando ingresa su correo y contraseña correctos,<br>Entonces el sistema inicia sesión y muestra el Dashboard. |
| Acceptance Criteria | **Escenario 2: Credenciales incorrectas**<br>Dado que el usuario tiene una cuenta registrada,<br>Cuando ingresa una contraseña incorrecta,<br>Entonces el sistema rechaza el ingreso e indica que las credenciales no son válidas, sin especificar cuál de los dos campos falló. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US03 se detallan en la tabla 29.

*Tabla 29. Historia US03: Configurar mi moneda de referencia.*

| Campo | Contenido |
| --- | --- |
| Story ID | US03 |
| User | Usuario |
| Priority | Media |
| Epic | EP01 |
| **Title** | Configurar mi moneda de referencia |
| **Description** | Como usuario, deseo confirmar que mi moneda de referencia es el sol peruano al configurar mi perfil, para que el Dashboard y la conversión de divisas usen esa moneda como base. |
| Acceptance Criteria | **Escenario 1: Confirmación por defecto**<br>Dado que el usuario completa su perfil por primera vez,<br>Cuando llega a la sección de moneda de referencia,<br>Entonces el sistema muestra el sol peruano (PEN) preseleccionado y permite confirmarlo. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US33 se detallan en la tabla 30.

*Tabla 30. Historia US33: Cerrar sesión.*

| Campo | Contenido |
| --- | --- |
| Story ID | US33 |
| User | Usuario |
| Priority | Media |
| Epic | EP01 |
| **Title** | Cerrar sesión |
| **Description** | Como usuario, deseo cerrar sesión en CraveWallet, para proteger mi cuenta cuando uso un dispositivo compartido o prestado. |
| Acceptance Criteria | **Escenario 1: Cierre exitoso**<br>Dado que el usuario tiene una sesión iniciada,<br>Cuando selecciona cerrar sesión desde su perfil,<br>Entonces el sistema invalida su sesión y lo regresa a la pantalla de inicio de sesión. |

*Fuente: elaboración del equipo Gastify.*



##### EP02 Alta de suscripciones


Los requisitos y criterios de US04 se detallan en la tabla 31.

*Tabla 31. Historia US04: Registrar una suscripción desde el catálogo precargado.*

| Campo | Contenido |
| --- | --- |
| Story ID | US04 |
| User | Usuario |
| Priority | Alta |
| Epic | EP02 |
| **Title** | Registrar una suscripción desde el catálogo precargado |
| **Description** | Como usuario, deseo elegir un servicio de un catálogo con los nombres, logos y monedas de facturación de las suscripciones más frecuentes de mi segmento, para no tener que llenar esos datos a mano. |
| Acceptance Criteria | **Escenario 1: Selección desde el catálogo**<br>Dado que el usuario abre el catálogo precargado,<br>Cuando selecciona un servicio (por ejemplo, Spotify o Netflix) e ingresa el monto y la fecha de su próximo cobro,<br>Entonces el sistema registra la suscripción con el nombre, el logo y la moneda de facturación ya definidos por el catálogo. |
| Acceptance Criteria | **Escenario 2: Búsqueda dentro del catálogo**<br>Dado que el catálogo tiene más de veinte servicios,<br>Cuando el usuario escribe parte del nombre en el buscador,<br>Entonces el sistema filtra la lista para mostrar solo las coincidencias. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US05 se detallan en la tabla 32.

*Tabla 32. Historia US05: Registrar una suscripción personalizada.*

| Campo | Contenido |
| --- | --- |
| Story ID | US05 |
| User | Usuario |
| Priority | Alta |
| Epic | EP02 |
| **Title** | Registrar una suscripción personalizada |
| **Description** | Como usuario, deseo registrar manualmente una suscripción que no está en el catálogo precargado, para llevar el control de servicios menos comunes (como una membresía física o una herramienta cloud específica). |
| Acceptance Criteria | **Escenario 1: Registro manual completo**<br>Dado que el servicio que el usuario quiere registrar no aparece en el catálogo,<br>Cuando ingresa manualmente el nombre, el monto, la moneda de facturación y la fecha del próximo cobro,<br>Entonces el sistema registra la suscripción como personalizada. |
| Acceptance Criteria | **Escenario 2: Campos obligatorios incompletos**<br>Dado que el usuario está registrando una suscripción personalizada,<br>Cuando intenta guardarla sin completar el monto o la fecha del próximo cobro,<br>Entonces el sistema no la registra e indica qué campos faltan. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US06 se detallan en la tabla 33.

*Tabla 33. Historia US06: Editar una suscripción registrada.*

| Campo | Contenido |
| --- | --- |
| Story ID | US06 |
| User | Usuario |
| Priority | Media |
| Epic | EP02 |
| **Title** | Editar una suscripción registrada |
| **Description** | Como usuario, deseo editar el monto, la fecha o la categoría de una suscripción ya registrada, para corregir datos o reflejar un cambio de plan. |
| Acceptance Criteria | **Escenario 1: Edición exitosa**<br>Dado que el usuario tiene una suscripción registrada,<br>Cuando modifica su monto, fecha de cobro o categoría y guarda los cambios,<br>Entonces el sistema actualiza la suscripción con los nuevos valores. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US07 se detallan en la tabla 34.

*Tabla 34. Historia US07: Cancelar una suscripción registrada.*

| Campo | Contenido |
| --- | --- |
| Story ID | US07 |
| User | Usuario |
| Priority | Alta |
| Epic | EP02 |
| **Title** | Cancelar una suscripción registrada |
| **Description** | Como usuario, deseo marcar una suscripción registrada como cancelada, para dejar de recibir recordatorios de un servicio que ya no uso, sin perder su historial. |
| Acceptance Criteria | **Escenario 1: Cancelación exitosa**<br>Dado que el usuario tiene una suscripción activa,<br>Cuando la marca como cancelada desde su detalle,<br>Entonces el sistema deja de incluirla en el total del Dashboard y en los próximos recordatorios, pero conserva su historial de cobros pasados. |
| Acceptance Criteria | **Escenario 2: Confirmación antes de cancelar**<br>Dado que el usuario selecciona la opción de cancelar una suscripción,<br>Cuando confirma la acción en el diálogo de verificación,<br>Entonces el sistema aplica la cancelación; si el usuario descarta el diálogo, la suscripción permanece activa. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US26 se detallan en la tabla 35.

*Tabla 35. Historia US26: Ver el historial de suscripciones canceladas.*

| Campo | Contenido |
| --- | --- |
| Story ID | US26 |
| User | Usuario |
| Priority | Baja |
| Epic | EP02 |
| **Title** | Ver el historial de suscripciones canceladas |
| **Description** | Como usuario, deseo ver la lista de suscripciones que cancelé en el pasado, para recordar qué servicios usé antes o reactivar una si vuelvo a necesitarla. |
| Acceptance Criteria | **Escenario 1: Consulta del historial**<br>Dado que el usuario tiene al menos una suscripción cancelada,<br>Cuando abre la sección de suscripciones canceladas,<br>Entonces el sistema lista cada una con la fecha en que fue cancelada y su último monto registrado. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US34 se detallan en la tabla 36.

*Tabla 36. Historia US34: Previsualizar el monto en soles antes de guardar una suscripción en dólares.*

| Campo | Contenido |
| --- | --- |
| Story ID | US34 |
| User | Usuario |
| Priority | Media |
| Epic | EP02 |
| **Title** | Previsualizar el monto en soles antes de guardar una suscripción en dólares |
| **Description** | Como usuario, deseo ver una previsualización del monto en soles mientras registro una suscripción en dólares, para saber de antemano cuánto representará en mi presupuesto antes de guardarla. |
| Acceptance Criteria | **Escenario 1: Previsualización en tiempo real**<br>Dado que el usuario está registrando una suscripción y elige dólares como moneda de facturación,<br>Cuando ingresa el monto original,<br>Entonces el sistema muestra junto al campo el equivalente estimado en soles con el tipo de cambio del día, antes de que confirme el registro. |

*Fuente: elaboración del equipo Gastify.*



##### EP03 Dashboard unificado


Los requisitos y criterios de US08 se detallan en la tabla 37.

*Tabla 37. Historia US08: Ver el total mensual de mis suscripciones activas en soles.*

| Campo | Contenido |
| --- | --- |
| Story ID | US08 |
| User | Usuario |
| Priority | Alta |
| Epic | EP03 |
| **Title** | Ver el total mensual de mis suscripciones activas en soles |
| **Description** | Como usuario, deseo ver en el Dashboard el monto total que gasto al mes en suscripciones activas, ya convertido a soles, para conocer mi compromiso financiero recurrente en una sola cifra. |
| Acceptance Criteria | **Escenario 1: Portafolio mixto de monedas**<br>Dado que el usuario tiene suscripciones activas facturadas en soles y en dólares,<br>Cuando abre el Dashboard,<br>Entonces el sistema muestra el total mensual sumando todas las suscripciones convertidas a soles con el tipo de cambio del día. |
| Acceptance Criteria | **Escenario 2: Sin suscripciones registradas**<br>Dado que el usuario no tiene ninguna suscripción registrada,<br>Cuando abre el Dashboard,<br>Entonces el sistema muestra el total en S/ 0.00 e indica que no hay suscripciones registradas. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US09 se detallan en la tabla 38.

*Tabla 38. Historia US09: Ver mis suscripciones agrupadas por categoría.*

| Campo | Contenido |
| --- | --- |
| Story ID | US09 |
| User | Usuario |
| Priority | Alta |
| Epic | EP03 |
| **Title** | Ver mis suscripciones agrupadas por categoría |
| **Description** | Como usuario, deseo ver mis suscripciones activas agrupadas por categoría (streaming, educación, fitness, delivery, cloud), para entender en qué rubros concentro mi gasto recurrente. |
| Acceptance Criteria | **Escenario 1: Agrupación con subtotales**<br>Dado que el usuario tiene suscripciones activas en más de una categoría,<br>Cuando abre la vista de categorías del Dashboard,<br>Entonces el sistema agrupa las suscripciones por categoría y muestra el subtotal mensual en soles de cada grupo. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US10 se detallan en la tabla 39.

*Tabla 39. Historia US10: Ver mis suscripciones ordenadas por próxima fecha de renovación.*

| Campo | Contenido |
| --- | --- |
| Story ID | US10 |
| User | Usuario |
| Priority | Alta |
| Epic | EP03 |
| **Title** | Ver mis suscripciones ordenadas por próxima fecha de renovación |
| **Description** | Como usuario, deseo ver mis suscripciones activas ordenadas de la más próxima a la más lejana a cobrarse, para anticipar qué cargo viene primero. |
| Acceptance Criteria | **Escenario 1: Orden ascendente por fecha**<br>Dado que el usuario tiene varias suscripciones activas con distintas fechas de cobro,<br>Cuando abre el Dashboard en la vista de próximos cobros,<br>Entonces el sistema las lista en orden ascendente según la fecha del próximo cobro. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US11 se detallan en la tabla 40.

*Tabla 40. Historia US11: Ver el detalle de una suscripción desde el Dashboard.*

| Campo | Contenido |
| --- | --- |
| Story ID | US11 |
| User | Usuario |
| Priority | Media |
| Epic | EP03 |
| **Title** | Ver el detalle de una suscripción desde el Dashboard |
| **Description** | Como usuario, deseo ver el detalle completo de una suscripción desde el Dashboard, para revisar su historial de cobros y su fecha de renovación sin salir del flujo principal. |
| Acceptance Criteria | **Escenario 1: Apertura del detalle**<br>Dado que el usuario está en el Dashboard,<br>Cuando selecciona una suscripción de la lista,<br>Entonces el sistema abre su vista de detalle con el monto original, la moneda, el monto convertido a soles, la categoría y el historial de cobros pasados. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US27 se detallan en la tabla 41.

*Tabla 41. Historia US27: Buscar una suscripción por nombre en el Dashboard.*

| Campo | Contenido |
| --- | --- |
| Story ID | US27 |
| User | Usuario |
| Priority | Baja |
| Epic | EP03 |
| **Title** | Buscar una suscripción por nombre en el Dashboard |
| **Description** | Como usuario con muchas suscripciones registradas, deseo buscar una por su nombre en el Dashboard, para encontrarla rápido sin recorrer toda la lista. |
| Acceptance Criteria | **Escenario 1: Coincidencia encontrada**<br>Dado que el usuario tiene varias suscripciones activas,<br>Cuando escribe parte del nombre en el buscador del Dashboard,<br>Entonces el sistema filtra la lista y muestra solo las suscripciones cuyo nombre coincide. |
| Acceptance Criteria | **Escenario 2: Sin coincidencias**<br>Dado que el texto ingresado no coincide con ninguna suscripción,<br>Cuando el usuario busca,<br>Entonces el sistema muestra un mensaje indicando que no se encontraron resultados. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US35 se detallan en la tabla 42.

*Tabla 42. Historia US35: Ver el ahorro estimado por cancelar una suscripción antes de su renovación.*

| Campo | Contenido |
| --- | --- |
| Story ID | US35 |
| User | Usuario |
| Priority | Baja |
| Epic | EP03 |
| **Title** | Ver el ahorro estimado por cancelar una suscripción antes de su renovación |
| **Description** | Como usuario, deseo ver una estimación del gasto que podría evitar al cancelar el servicio antes de que se renueve, para evaluar el posible efecto de cancelar el servicio a tiempo con su proveedor. |
| Acceptance Criteria | **Escenario 1: Cancelación antes del cobro**<br>Dado que el usuario cancela una suscripción activa antes de su próxima fecha de cobro,<br>Cuando confirma la cancelación,<br>Entonces el sistema muestra un ahorro potencial estimado para ese ciclo y aclara que marcar el registro como cancelado no cancela el servicio ni confirma un ahorro real. |

*Fuente: elaboración del equipo Gastify.*



##### EP04 Recordatorios vía calendario nativo


Los requisitos y criterios de US12 se detallan en la tabla 43.

*Tabla 43. Historia US12: Recibir un recordatorio 24 horas antes de un cobro automático.*

| Campo | Contenido |
| --- | --- |
| Story ID | US12 |
| User | Usuario |
| Priority | Alta |
| Epic | EP04 |
| **Title** | Recibir un recordatorio 24 horas antes de un cobro automático |
| **Description** | Como usuario, deseo que CraveWallet agende un recordatorio en mi calendario nativo 24 horas antes de cada cobro de una suscripción activa, para tener tiempo de verificar mi saldo o cancelarla antes de que se renueve. |
| Acceptance Criteria | **Escenario 1: Recordatorio agendado al registrar**<br>Dado que el usuario registra una suscripción activa con una fecha de próximo cobro,<br>Cuando confirma el registro,<br>Entonces el sistema agenda un evento en el calendario nativo del dispositivo 24 horas antes de esa fecha, con el nombre del servicio y el monto estimado. |
| Acceptance Criteria | **Escenario 2: Reagendado tras editar la fecha de cobro**<br>Dado que una suscripción ya tiene un recordatorio agendado,<br>Cuando el usuario edita su fecha de próximo cobro,<br>Entonces el sistema elimina el evento anterior y agenda uno nuevo 24 horas antes de la fecha actualizada. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US13 se detallan en la tabla 44.

*Tabla 44. Historia US13: Que se elimine el recordatorio de una suscripción cancelada.*

| Campo | Contenido |
| --- | --- |
| Story ID | US13 |
| User | Usuario |
| Priority | Alta |
| Epic | EP04 |
| **Title** | Que se elimine el recordatorio de una suscripción cancelada |
| **Description** | Como usuario, deseo que al cancelar una suscripción se elimine también su recordatorio en el calendario, para no recibir avisos de un registro que marqué como cancelado en CraveWallet. |
| Acceptance Criteria | **Escenario 1: Eliminación automática**<br>Dado que una suscripción activa tiene un recordatorio agendado en el calendario,<br>Cuando el usuario la marca como cancelada (US07),<br>Entonces el sistema elimina el evento correspondiente del calendario nativo. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US14 se detallan en la tabla 45.

*Tabla 45. Historia US14: Otorgar permiso de acceso al calendario.*

| Campo | Contenido |
| --- | --- |
| Story ID | US14 |
| User | Usuario |
| Priority | Media |
| Epic | EP04 |
| **Title** | Otorgar permiso de acceso al calendario |
| **Description** | Como usuario, deseo que la aplicación me pida permiso para acceder a mi calendario la primera vez que lo necesite, para entender por qué lo solicita y decidir si lo autorizo. |
| Acceptance Criteria | **Escenario 1: Permiso otorgado**<br>Dado que el usuario registra su primera suscripción con fecha de cobro,<br>Cuando el sistema solicita permiso de acceso al calendario y el usuario lo acepta,<br>Entonces el sistema agenda el recordatorio correspondiente. |
| Acceptance Criteria | **Escenario 2: Permiso denegado**<br>Dado que el sistema solicita permiso de acceso al calendario,<br>Cuando el usuario lo deniega,<br>Entonces el sistema registra la suscripción igualmente, sin agendar el recordatorio, e informa que puede habilitar el permiso más tarde desde ajustes. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US28 se detallan en la tabla 46.

*Tabla 46. Historia US28: Ver la lista de mis próximos recordatorios agendados.*

| Campo | Contenido |
| --- | --- |
| Story ID | US28 |
| User | Usuario |
| Priority | Media |
| Epic | EP04 |
| **Title** | Ver la lista de mis próximos recordatorios agendados |
| **Description** | Como usuario, deseo ver dentro de CraveWallet la lista de los recordatorios que se agendaron en mi calendario, para confirmar que todas mis suscripciones activas tienen uno programado. |
| Acceptance Criteria | **Escenario 1: Lista con recordatorios agendados**<br>Dado que el usuario tiene suscripciones activas con recordatorio agendado,<br>Cuando abre la sección de recordatorios,<br>Entonces el sistema lista cada suscripción con la fecha y hora en que se enviará su recordatorio. |
| Acceptance Criteria | **Escenario 2: Suscripción sin recordatorio**<br>Dado que una suscripción activa no tiene recordatorio agendado por haber denegado el permiso de calendario,<br>Cuando el usuario abre la sección de recordatorios,<br>Entonces el sistema la marca como "sin recordatorio" y ofrece el acceso directo a los ajustes de permiso. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US36 se detallan en la tabla 47.

*Tabla 47. Historia US36: Recibir una notificación push además del recordatorio de calendario.*

| Campo | Contenido |
| --- | --- |
| Story ID | US36 |
| User | Usuario |
| Priority | Alta |
| Epic | EP04 |
| **Title** | Recibir una notificación push además del recordatorio de calendario |
| **Description** | Como usuario, deseo recibir una notificación push de CraveWallet 24 horas antes de un cobro, además del evento agendado en mi calendario, para enterarme del aviso aunque no revise mi calendario ese día. |
| Acceptance Criteria | **Escenario 1: Envío de la notificación**<br>Dado que una suscripción activa tiene un recordatorio agendado,<br>Cuando faltan 24 horas para su próximo cobro,<br>Entonces el sistema envía una notificación push al dispositivo del usuario con el nombre del servicio y el monto estimado en soles. |

*Fuente: elaboración del equipo Gastify.*



##### EP05 Conversión de divisas con cotización fechada


Los requisitos y criterios de US15 se detallan en la tabla 48.

*Tabla 48. Historia US15: Ver el monto en soles de una suscripción facturada en dólares.*

| Campo | Contenido |
| --- | --- |
| Story ID | US15 |
| User | Usuario |
| Priority | Alta |
| Epic | EP05 |
| **Title** | Ver el monto en soles de una suscripción facturada en dólares |
| **Description** | Como usuario, deseo ver junto al monto original en dólares de una suscripción su equivalente en soles, calculado con el tipo de cambio del día, para estimar su costo antes del cobro, considerando que el cargo final puede usar otra cotización o incluir comisiones. |
| Acceptance Criteria | **Escenario 1: Conversión disponible**<br>Dado que el usuario tiene una suscripción registrada en dólares,<br>Cuando consulta su detalle,<br>Entonces el sistema muestra el monto original en dólares junto al monto equivalente en soles, calculado con el tipo de cambio consultado ese día a la API externa. |
| Acceptance Criteria | **Escenario 2: API de tipo de cambio no disponible**<br>Dado que el servicio externo de tipo de cambio no responde,<br>Cuando el usuario consulta una suscripción en dólares,<br>Entonces el sistema muestra el último tipo de cambio guardado junto con la fecha en que se obtuvo, indicando que no es el valor del día. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US16 se detallan en la tabla 49.

*Tabla 49. Historia US16: Ver el tipo de cambio utilizado y su fecha de actualización.*

| Campo | Contenido |
| --- | --- |
| Story ID | US16 |
| User | Usuario |
| Priority | Media |
| Epic | EP05 |
| **Title** | Ver el tipo de cambio utilizado y su fecha de actualización |
| **Description** | Como usuario, deseo ver qué tipo de cambio usó CraveWallet para convertir mis suscripciones en dólares y cuándo se actualizó, para confiar en que el monto mostrado es razonable. |
| Acceptance Criteria | **Escenario 1: Consulta del tipo de cambio**<br>Dado que el usuario está viendo el detalle de una suscripción en dólares,<br>Cuando abre la información de conversión,<br>Entonces el sistema muestra el valor del tipo de cambio aplicado y la fecha y hora en que se obtuvo de la API externa. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US17 se detallan en la tabla 50.

*Tabla 50. Historia US17: Ver mi portafolio completo unificado en soles.*

| Campo | Contenido |
| --- | --- |
| Story ID | US17 |
| User | Usuario |
| Priority | Alta |
| Epic | EP05 |
| **Title** | Ver mi portafolio completo unificado en soles |
| **Description** | Como usuario, deseo que el total del Dashboard sume todas mis suscripciones en una sola moneda, sin importar en qué divisa se facture cada una, para no tener que hacer yo mismo la conversión mental. |
| Acceptance Criteria | **Escenario 1: Suma de monedas mixtas**<br>Dado que el usuario tiene suscripciones registradas en soles y en dólares,<br>Cuando el sistema calcula el total mensual del Dashboard,<br>Entonces convierte cada suscripción en dólares a soles con el tipo de cambio vigente antes de sumarlas al total. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US29 se detallan en la tabla 51.

*Tabla 51. Historia US29: Ver el historial del tipo de cambio aplicado a una suscripción.*

| Campo | Contenido |
| --- | --- |
| Story ID | US29 |
| User | Usuario |
| Priority | Baja |
| Epic | EP05 |
| **Title** | Ver el historial del tipo de cambio aplicado a una suscripción |
| **Description** | Como usuario, deseo ver cómo varió mes a mes el tipo de cambio aplicado a una suscripción en dólares, para entender por qué el monto en soles no es siempre el mismo. |
| Acceptance Criteria | **Escenario 1: Historial con varios meses**<br>Dado que una suscripción en dólares lleva más de un mes activa,<br>Cuando el usuario consulta su historial de conversión,<br>Entonces el sistema lista el tipo de cambio y el monto en soles aplicados en cada Billing Cycle anterior. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US37 se detallan en la tabla 52.

*Tabla 52. Historia US37: Ver la variación del tipo de cambio respecto al cobro anterior.*

| Campo | Contenido |
| --- | --- |
| Story ID | US37 |
| User | Usuario |
| Priority | Baja |
| Epic | EP05 |
| **Title** | Ver la variación del tipo de cambio respecto al cobro anterior |
| **Description** | Como usuario, deseo ver si el tipo de cambio subió o bajó respecto al cobro anterior de una suscripción en dólares, para entender por qué el monto en soles cambió de un mes a otro. |
| Acceptance Criteria | **Escenario 1: Variación mostrada**<br>Dado que una suscripción en dólares lleva más de un Billing Cycle activa,<br>Cuando el usuario consulta su detalle,<br>Entonces el sistema muestra la variación porcentual del tipo de cambio respecto al cobro anterior. |

*Fuente: elaboración del equipo Gastify.*



##### EP06 Categorización de gastos de delivery


Los requisitos y criterios de US18 se detallan en la tabla 53.

*Tabla 53. Historia US18: Registrar un pedido de delivery desde un catálogo de comercios frecuentes.*

| Campo | Contenido |
| --- | --- |
| Story ID | US18 |
| User | Usuario |
| Priority | Media |
| Epic | EP06 |
| **Title** | Registrar un pedido de delivery desde un catálogo de comercios frecuentes |
| **Description** | Como usuario, deseo registrar un pedido de delivery eligiendo el comercio de un catálogo precargado con negocios frecuentes de Lima, para no tener que escribir el nombre cada vez que pido. |
| Acceptance Criteria | **Escenario 1: Registro desde el catálogo**<br>Dado que el usuario abre el registro de un nuevo gasto de delivery,<br>Cuando selecciona un comercio del catálogo precargado e ingresa el monto del pedido,<br>Entonces el sistema registra el gasto con la fecha del día, el comercio y el monto. |
| Acceptance Criteria | **Escenario 2: Comercio no listado**<br>Dado que el comercio no aparece en el catálogo,<br>Cuando el usuario escribe manualmente su nombre y confirma el registro,<br>Entonces el sistema lo guarda como un gasto de delivery personalizado. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US19 se detallan en la tabla 54.

*Tabla 54. Historia US19: Ver el total gastado en delivery en el mes.*

| Campo | Contenido |
| --- | --- |
| Story ID | US19 |
| User | Usuario |
| Priority | Media |
| Epic | EP06 |
| **Title** | Ver el total gastado en delivery en el mes |
| **Description** | Como usuario, deseo ver cuánto llevo gastado en delivery en el mes en curso, para tomar conciencia del impacto acumulado de mis pedidos. |
| Acceptance Criteria | **Escenario 1: Total del mes con pedidos registrados**<br>Dado que el usuario tiene al menos un gasto de delivery registrado en el mes en curso,<br>Cuando abre la sección de delivery,<br>Entonces el sistema muestra la suma de todos los pedidos del mes en soles. |
| Acceptance Criteria | **Escenario 2: Sin pedidos registrados**<br>Dado que el usuario no registró ningún pedido en el mes en curso,<br>Cuando abre la sección de delivery,<br>Entonces el sistema muestra el total en S/ 0.00. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US20 se detallan en la tabla 55.

*Tabla 55. Historia US20: Ver la tendencia de mi gasto de delivery por semana.*

| Campo | Contenido |
| --- | --- |
| Story ID | US20 |
| User | Usuario |
| Priority | Baja |
| Epic | EP06 |
| **Title** | Ver la tendencia de mi gasto de delivery por semana |
| **Description** | Como usuario, deseo ver un resumen semanal de mi gasto en delivery de las últimas semanas, para notar si aumenta en ciertas épocas (por ejemplo, exámenes o semanas de más carga laboral). |
| Acceptance Criteria | **Escenario 1: Comparación entre semanas**<br>Dado que el usuario tiene gastos de delivery registrados en al menos dos semanas distintas,<br>Cuando abre la tendencia semanal,<br>Entonces el sistema muestra el total gastado en cada una de las últimas cuatro semanas. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US30 se detallan en la tabla 56.

*Tabla 56. Historia US30: Editar o eliminar un gasto de delivery registrado por error.*

| Campo | Contenido |
| --- | --- |
| Story ID | US30 |
| User | Usuario |
| Priority | Baja |
| Epic | EP06 |
| **Title** | Editar o eliminar un gasto de delivery registrado por error |
| **Description** | Como usuario, deseo editar o eliminar un gasto de delivery que registré con un monto equivocado o por duplicado, para que el total del mes sea correcto. |
| Acceptance Criteria | **Escenario 1: Edición del monto**<br>Dado que el usuario tiene un gasto de delivery registrado,<br>Cuando corrige su monto y guarda el cambio,<br>Entonces el sistema actualiza el gasto y recalcula el total del mes. |
| Acceptance Criteria | **Escenario 2: Eliminación**<br>Dado que el usuario registró un gasto de delivery por duplicado,<br>Cuando lo elimina,<br>Entonces el sistema lo quita del total del mes. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US38 se detallan en la tabla 57.

*Tabla 57. Historia US38: Definir un límite mensual de gasto en delivery y recibir aviso al acercarme.*

| Campo | Contenido |
| --- | --- |
| Story ID | US38 |
| User | Usuario |
| Priority | Media |
| Epic | EP06 |
| **Title** | Definir un límite mensual de gasto en delivery y recibir aviso al acercarme |
| **Description** | Como usuario, deseo definir un límite mensual de gasto en delivery y recibir un aviso cuando esté por alcanzarlo, para controlar mejor ese gasto de alta frecuencia. |
| Acceptance Criteria | **Escenario 1: Definición del límite**<br>Dado que el usuario abre la configuración de delivery,<br>Cuando ingresa un monto límite mensual y lo guarda,<br>Entonces el sistema lo usa como referencia para el mes en curso. |
| Acceptance Criteria | **Escenario 2: Aviso cercano al límite**<br>Dado que el usuario definió un límite mensual,<br>Cuando su gasto acumulado del mes alcanza el 80 % de ese límite,<br>Entonces el sistema le envía un aviso. |

*Fuente: elaboración del equipo Gastify.*



##### EP07 CraveWallet Premium


Los requisitos y criterios de US21 se detallan en la tabla 58.

*Tabla 58. Historia US21: Ver la propuesta de valor y el precio de Premium.*

| Campo | Contenido |
| --- | --- |
| Story ID | US21 |
| User | Usuario |
| Priority | Media |
| Epic | EP07 |
| **Title** | Ver la propuesta de valor y el precio de Premium |
| **Description** | Como usuario del plan gratuito, deseo ver qué incluye el plan Premium y su precio mensual, para decidir si me conviene suscribirme. |
| Acceptance Criteria | **Escenario 1: Consulta del plan**<br>Dado que el usuario tiene el plan gratuito,<br>Cuando abre la sección Premium,<br>Entonces el sistema muestra el precio mensual (S/ 9.90), los beneficios incluidos (registro ilimitado de suscripciones, analítica avanzada, recordatorios prioritarios) y las limitaciones actuales del plan gratuito. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US22 se detallan en la tabla 59.

*Tabla 59. Historia US22: Suscribirme al plan Premium.*

| Campo | Contenido |
| --- | --- |
| Story ID | US22 |
| User | Usuario |
| Priority | Media |
| Epic | EP07 |
| **Title** | Suscribirme al plan Premium |
| **Description** | Como usuario del plan gratuito, deseo pagar el plan Premium con mi tarjeta a través de un flujo seguro, para acceder de inmediato a sus beneficios. |
| Acceptance Criteria | **Escenario 1: Pago exitoso**<br>Dado que el usuario ingresó los datos de una tarjeta válida en el flujo de pago de Stripe,<br>Cuando confirma la suscripción,<br>Entonces el sistema activa el plan Premium y elimina las restricciones del plan gratuito cuando el backend verifica la confirmación del pago; mientras espera esa confirmación, la interfaz muestra el estado pendiente. |
| Acceptance Criteria | **Escenario 2: Pago rechazado**<br>Dado que el usuario intenta pagar con una tarjeta que Stripe rechaza,<br>Cuando confirma la suscripción,<br>Entonces el sistema no activa el plan Premium e indica que el pago fue rechazado, permitiendo intentar con otra tarjeta. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US23 se detallan en la tabla 60.

*Tabla 60. Historia US23: Cancelar mi suscripción Premium.*

| Campo | Contenido |
| --- | --- |
| Story ID | US23 |
| User | Usuario |
| Priority | Baja |
| Epic | EP07 |
| **Title** | Cancelar mi suscripción Premium |
| **Description** | Como usuario Premium, deseo cancelar mi suscripción, para volver al plan gratuito y dejar de pagar el monto mensual. |
| Acceptance Criteria | **Escenario 1: Cancelación efectiva al fin del período pagado**<br>Dado que el usuario tiene el plan Premium activo,<br>Cuando cancela la suscripción desde su perfil,<br>Entonces el sistema mantiene los beneficios Premium hasta el final del período ya pagado y luego lo devuelve automáticamente al plan gratuito. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US31 se detallan en la tabla 61.

*Tabla 61. Historia US31: Ver mi historial de pagos Premium.*

| Campo | Contenido |
| --- | --- |
| Story ID | US31 |
| User | Usuario |
| Priority | Baja |
| Epic | EP07 |
| **Title** | Ver mi historial de pagos Premium |
| **Description** | Como usuario Premium, deseo ver el historial de los pagos mensuales que hice por la suscripción, para tener un registro de cuánto he pagado en total. |
| Acceptance Criteria | **Escenario 1: Historial con pagos registrados**<br>Dado que el usuario tiene al menos un pago Premium confirmado,<br>Cuando abre la sección de historial de pagos,<br>Entonces el sistema lista cada pago con su fecha y monto. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US39 se detallan en la tabla 62.

*Tabla 62. Historia US39: Ver cuántas suscripciones puedo registrar en el plan gratuito.*

| Campo | Contenido |
| --- | --- |
| Story ID | US39 |
| User | Usuario |
| Priority | Media |
| Epic | EP07 |
| **Title** | Ver cuántas suscripciones puedo registrar en el plan gratuito |
| **Description** | Como usuario del plan gratuito, deseo ver cuántas suscripciones llevo registradas frente al límite del plan gratuito, para saber cuándo me conviene pasar a Premium. |
| Acceptance Criteria | **Escenario 1: Cerca del límite**<br>Dado que el usuario tiene el plan gratuito con un límite de cinco suscripciones activas,<br>Cuando registra una nueva suscripción cercana al límite,<br>Entonces el sistema le muestra cuántas suscripciones lleva registradas del total permitido. |
| Acceptance Criteria | **Escenario 2: Límite alcanzado**<br>Dado que el usuario alcanzó el límite del plan gratuito,<br>Cuando intenta registrar una suscripción adicional,<br>Entonces el sistema le impide continuar y lo invita a pasar a Premium. |

*Fuente: elaboración del equipo Gastify.*



##### EP08 Landing page


Los requisitos y criterios de US24 se detallan en la tabla 63.

*Tabla 63. Historia US24: Ver la propuesta de valor de CraveWallet.*

| Campo | Contenido |
| --- | --- |
| Story ID | US24 |
| User | Visitante |
| Priority | Media |
| Epic | EP08 |
| **Title** | Ver la propuesta de valor de CraveWallet |
| **Description** | Como visitante que todavía no tiene cuenta, deseo entender en el landing page qué problema resuelve CraveWallet y cómo funciona, para decidir si quiero descargarla. |
| Acceptance Criteria | **Escenario 1: Primera visita**<br>Dado que un visitante entra al landing page,<br>Cuando la página carga,<br>Entonces el sistema muestra el problema de los cobros automáticos no anticipados, la propuesta de valor de CraveWallet y los enlaces de descarga para Android e iOS. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US25 se detallan en la tabla 64.

*Tabla 64. Historia US25: Comparar el plan gratuito y el plan Premium.*

| Campo | Contenido |
| --- | --- |
| Story ID | US25 |
| User | Visitante |
| Priority | Media |
| Epic | EP08 |
| **Title** | Comparar el plan gratuito y el plan Premium |
| **Description** | Como visitante, deseo ver una comparación clara entre el plan gratuito y el plan Premium en el landing page, para saber qué esperar antes de descargar la aplicación. |
| Acceptance Criteria | **Escenario 1: Tabla comparativa**<br>Dado que el visitante llega a la sección de precios del landing page,<br>Cuando la revisa,<br>Entonces ve una tabla comparativa con las funciones del plan gratuito y del plan Premium, incluyendo el precio mensual de este último. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US32 se detallan en la tabla 65.

*Tabla 65. Historia US32: Consultar preguntas frecuentes en el landing page.*

| Campo | Contenido |
| --- | --- |
| Story ID | US32 |
| User | Visitante |
| Priority | Baja |
| Epic | EP08 |
| **Title** | Consultar preguntas frecuentes en el landing page |
| **Description** | Como visitante, deseo consultar una sección de preguntas frecuentes en el landing page, para resolver dudas comunes (seguridad, moneda, costo de Premium) antes de descargar la aplicación. |
| Acceptance Criteria | **Escenario 1: Consulta de una pregunta**<br>Dado que el visitante está en la sección de preguntas frecuentes,<br>Cuando selecciona una pregunta,<br>Entonces la página despliega la respuesta correspondiente. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de US40 se detallan en la tabla 66.

*Tabla 66. Historia US40: Dejar mi correo para recibir novedades del lanzamiento.*

| Campo | Contenido |
| --- | --- |
| Story ID | US40 |
| User | Visitante |
| Priority | Baja |
| Epic | EP08 |
| **Title** | Dejar mi correo para recibir novedades del lanzamiento |
| **Description** | Como visitante, deseo dejar mi correo en el landing page para recibir novedades del lanzamiento de CraveWallet, para enterarme cuando esté disponible o de futuras promociones. |
| Acceptance Criteria | **Escenario 1: Registro exitoso**<br>Dado que el visitante ingresa un correo con formato válido en el formulario de novedades,<br>Cuando lo envía,<br>Entonces el sistema lo registra y muestra un mensaje de confirmación. |
| Acceptance Criteria | **Escenario 2: Correo con formato inválido**<br>Dado que el visitante ingresa un texto que no tiene formato de correo,<br>Cuando intenta enviarlo,<br>Entonces el sistema no lo registra e indica que el formato no es válido. |

*Fuente: elaboración del equipo Gastify.*



#### Technical Stories

Las Technical Stories describen los servicios RESTful de desarrollo propio que sostienen la aplicación móvil. Se redactan desde el rol Developer y sus criterios de aceptación son escenarios de solicitud y respuesta.


Los requisitos y criterios de TS01 se detallan en la tabla 67.

*Tabla 67. Historia TS01: Servicio de autenticación y perfil.*

| Campo | Contenido |
| --- | --- |
| Story ID | TS01 |
| User | Developer |
| Priority | Alta |
| Epic | EP09 |
| **Title** | Servicio de autenticación y perfil |
| **Description** | Como desarrollador, deseo contar con endpoints para registrar, autenticar y actualizar el perfil de un usuario, para que la aplicación móvil gestione sesiones sin lógica de negocio propia. |
| Acceptance Criteria | **Escenario 1: Registro**<br>Dado un correo no registrado,<br>Cuando el cliente envía POST /api/v1/auth/register con correo y contraseña,<br>Entonces el servicio responde 201 Created con un token de acceso y un token de renovación. |
| Acceptance Criteria | **Escenario 2: Inicio de sesión**<br>Dado credenciales válidas,<br>Cuando el cliente envía POST /api/v1/auth/login,<br>Entonces el servicio responde 200 OK con un nuevo par de tokens; y con credenciales inválidas responde 401 Unauthorized. |
| Acceptance Criteria | **Escenario 3: Actualización de perfil**<br>Dado un usuario autenticado,<br>Cuando envía PATCH /api/v1/users/me con su moneda de referencia,<br>Entonces el servicio responde 200 OK con el perfil actualizado. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de TS02 se detallan en la tabla 68.

*Tabla 68. Historia TS02: Servicio de suscripciones.*

| Campo | Contenido |
| --- | --- |
| Story ID | TS02 |
| User | Developer |
| Priority | Alta |
| Epic | EP09 |
| **Title** | Servicio de suscripciones |
| **Description** | Como desarrollador, deseo contar con endpoints para crear, listar, actualizar y cancelar suscripciones, para que la aplicación móvil administre el Subscription Portfolio del usuario. |
| Acceptance Criteria | **Escenario 1: Creación**<br>Dado un usuario autenticado,<br>Cuando envía POST /api/v1/subscriptions con nombre, monto, moneda, categoría y fecha de próximo cobro,<br>Entonces el servicio responde 201 Created con la suscripción en estado ACTIVE. |
| Acceptance Criteria | **Escenario 2: Listado con total convertido**<br>Dado un usuario autenticado con suscripciones registradas,<br>Cuando envía GET /api/v1/subscriptions,<br>Entonces el servicio responde 200 OK con la lista de suscripciones y el total mensual ya convertido a soles. |
| Acceptance Criteria | **Escenario 3: Cancelación**<br>Dado una suscripción ACTIVE del usuario,<br>Cuando envía POST /api/v1/subscriptions/{id}/cancel,<br>Entonces el servicio responde 200 OK con la suscripción en estado CANCELLED, sin eliminar su historial de cobros. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de TS03 se detallan en la tabla 69.

*Tabla 69. Historia TS03: Servicio de conversión de divisas.*

| Campo | Contenido |
| --- | --- |
| Story ID | TS03 |
| User | Developer |
| Priority | Alta |
| Epic | EP09 |
| **Title** | Servicio de conversión de divisas |
| **Description** | Como desarrollador, deseo contar con un endpoint interno que resuelva el tipo de cambio vigente USD/PEN, consultando y cacheando ExchangeRate-API, para que el resto de servicios no dependan directamente de un proveedor externo. |
| Acceptance Criteria | **Escenario 1: Consulta con caché vigente**<br>Dado que el servicio ya consultó el tipo de cambio en las últimas 24 horas,<br>Cuando el cliente envía GET /api/v1/exchange-rate?from=USD&to=PEN,<br>Entonces el servicio responde 200 OK con el valor cacheado y la fecha en que se obtuvo, sin llamar a la API externa. |
| Acceptance Criteria | **Escenario 2: Caché vencida**<br>Dado que el valor cacheado tiene más de 24 horas,<br>Cuando el cliente hace la misma solicitud,<br>Entonces el servicio consulta ExchangeRate-API, actualiza la caché y responde 200 OK con el nuevo valor. |
| Acceptance Criteria | **Escenario 3: Proveedor externo caído**<br>Dado que ExchangeRate-API no responde,<br>Cuando el servicio necesita actualizar la caché vencida,<br>Entonces responde 200 OK con el último valor cacheado y un indicador de que el dato no es del día. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de TS04 se detallan en la tabla 70.

*Tabla 70. Historia TS04: Servicio de recordatorios.*

| Campo | Contenido |
| --- | --- |
| Story ID | TS04 |
| User | Developer |
| Priority | Alta |
| Epic | EP09 |
| **Title** | Servicio de recordatorios |
| **Description** | Como desarrollador, deseo contar con un endpoint que genere el payload del evento de calendario para una suscripción, para que la aplicación móvil lo agende en el calendario nativo del dispositivo 24 horas antes del cobro. |
| Acceptance Criteria | **Escenario 1: Generación del evento**<br>Dado una suscripción ACTIVE con fecha de próximo cobro,<br>Cuando el cliente envía GET /api/v1/subscriptions/{id}/reminder,<br>Entonces el servicio responde 200 OK con el título, la fecha (24 horas antes del cobro) y la descripción del evento a agendar. |
| Acceptance Criteria | **Escenario 2: Suscripción cancelada**<br>Dado una suscripción CANCELLED,<br>Cuando el cliente solicita su recordatorio,<br>Entonces el servicio responde 404 Not Found. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de TS05 se detallan en la tabla 71.

*Tabla 71. Historia TS05: Servicio de gastos de delivery.*

| Campo | Contenido |
| --- | --- |
| Story ID | TS05 |
| User | Developer |
| Priority | Media |
| Epic | EP09 |
| **Title** | Servicio de gastos de delivery |
| **Description** | Como desarrollador, deseo contar con endpoints para registrar, listar y editar gastos de delivery, para que la aplicación móvil calcule el total y la tendencia mensual sin lógica de negocio propia. |
| Acceptance Criteria | **Escenario 1: Registro**<br>Dado un usuario autenticado,<br>Cuando envía POST /api/v1/delivery-expenses con comercio, monto y fecha,<br>Entonces el servicio responde 201 Created con el gasto registrado. |
| Acceptance Criteria | **Escenario 2: Total del mes**<br>Dado un usuario autenticado con gastos registrados,<br>Cuando envía GET /api/v1/delivery-expenses/summary?month=actual,<br>Entonces el servicio responde 200 OK con el total del mes y el desglose por semana. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de TS06 se detallan en la tabla 72.

*Tabla 72. Historia TS06: Servicio de suscripción Premium y webhooks de Stripe.*

| Campo | Contenido |
| --- | --- |
| Story ID | TS06 |
| User | Developer |
| Priority | Media |
| Epic | EP09 |
| **Title** | Servicio de suscripción Premium y webhooks de Stripe |
| **Description** | Como desarrollador, deseo contar con un endpoint que inicie el flujo de pago recurrente de Stripe y un webhook que reciba sus eventos de confirmación y cancelación, para activar o desactivar el plan Premium del usuario de forma confiable. |
| Acceptance Criteria | **Escenario 1: Inicio del pago**<br>Dado un usuario autenticado en el plan gratuito,<br>Cuando envía POST /api/v1/premium/checkout,<br>Entonces el servicio responde 200 OK con la sesión de pago de Stripe a la que debe redirigirse el cliente. |
| Acceptance Criteria | **Escenario 2: Confirmación por webhook**<br>Dado que Stripe confirma un pago exitoso,<br>Cuando el webhook POST /api/v1/premium/webhook recibe el evento `invoice.paid`,<br>Entonces el servicio activa el plan Premium del usuario correspondiente. |
| Acceptance Criteria | **Escenario 3: Cancelación por webhook**<br>Dado que Stripe notifica el fin del período pagado tras una cancelación,<br>Cuando el webhook recibe el evento `customer.subscription.deleted`,<br>Entonces el servicio devuelve al usuario al plan gratuito. |

*Fuente: elaboración del equipo Gastify.*



#### Spike Stories

Las Spike Stories cubren la investigación técnica previa a dos integraciones que el equipo no ha usado en clase: el SDK de Stripe y ExchangeRate-API. Ambas son el componente de aprendizaje autónomo del proyecto declarado en la sección 1.1.1. Cada integración se investiga en dos spikes: uno de documentación y decisión, y otro de prototipo.

**Definition of Done común a los seis spikes.** El prototipo o el informe de decisión queda registrado en una rama del repositorio; los hallazgos se comparten con el equipo en la sesión de refinamiento del backlog y se usan para crear o refinar las historias de implementación correspondientes; y cada spike se completa dentro del sprint en que se planifica.


Los requisitos y criterios de SP01 se detallan en la tabla 73.

*Tabla 73. Historia SP01: Investigar y documentar la integración con ExchangeRate-API.*

| Campo | Contenido |
| --- | --- |
| Story ID | SP01 |
| User | Developer |
| Priority | Alta |
| Epic | EP10 |
| **Title** | Investigar y documentar la integración con ExchangeRate-API |
| **Description** | Como desarrollador, deseo investigar y documentar cómo consumir ExchangeRate-API dentro de sus límites de uso, para decidir con evidencia el diseño de caché del Servicio de conversión de divisas (TS03) antes de construirlo. |
| Acceptance Criteria | **Escenario 1: Documentación revisada**<br>Dado que el equipo necesita el tipo de cambio USD/PEN actualizado,<br>Cuando el desarrollador revisa el plan gratuito de ExchangeRate-API y sus límites de solicitudes,<br>Entonces documenta la frecuencia máxima de consulta viable y la estrategia de caché necesaria para no exceder el límite. |
| Acceptance Criteria | **Escenario 2: Diseño de caché documentado**<br>Dado que el equipo conoce los límites del proveedor,<br>Cuando el desarrollador define cómo se invalida y renueva el valor cacheado,<br>Entonces el informe queda listo para orientar el prototipo del spike SP02 y la implementación de TS03. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de SP02 se detallan en la tabla 74.

*Tabla 74. Historia SP02: Prototipar el consumo y caché de ExchangeRate-API.*

| Campo | Contenido |
| --- | --- |
| Story ID | SP02 |
| User | Developer |
| Priority | Alta |
| Epic | EP10 |
| **Title** | Prototipar el consumo y caché de ExchangeRate-API |
| **Description** | Como desarrollador, deseo construir un prototipo del diseño de caché definido en SP01, para confirmar con evidencia que soporta el volumen de consultas antes de implementar TS03. |
| Acceptance Criteria | **Escenario 1: Prototipo bajo carga**<br>Dado el diseño de caché documentado en SP01,<br>Cuando el desarrollador construye un prototipo del backend que consulta y cachea el tipo de cambio,<br>Entonces el prototipo responde correctamente ante al menos diez solicitudes consecutivas sin exceder el límite del proveedor, y queda registrado en una rama del repositorio. |
| Acceptance Criteria | **Escenario 2: Hallazgos y estimación**<br>Dado que el spike está completo,<br>Cuando el desarrollador compila los hallazgos,<br>Entonces el informe incluye el manejo de caídas del proveedor y una estimación en puntos de historia para TS03. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de SP03 se detallan en la tabla 75.

*Tabla 75. Historia SP03: Investigar las alternativas de integración con el calendario nativo.*

| Campo | Contenido |
| --- | --- |
| Story ID | SP03 |
| User | Developer |
| Priority | Alta |
| Epic | EP10 |
| **Title** | Investigar las alternativas de integración con el calendario nativo |
| **Description** | Como desarrollador, deseo comparar las APIs de calendario nativo de Android e iOS y las bibliotecas multiplataforma disponibles, para elegir con evidencia cuál usar antes de prototipar el recordatorio de 24 horas antes de cada cobro (US12). |
| Acceptance Criteria | **Escenario 1: Alternativas evaluadas**<br>Dado que la aplicación debe agendar eventos en Android e iOS,<br>Cuando el desarrollador evalúa las APIs de calendario nativo de cada plataforma y las bibliotecas multiplataforma disponibles,<br>Entonces documenta para cada alternativa los permisos requeridos, la compatibilidad con el framework elegido y sus limitaciones. |
| Acceptance Criteria | **Escenario 2: Alternativa elegida**<br>Dado el comparativo documentado,<br>Cuando el equipo selecciona la alternativa,<br>Entonces el informe queda listo para orientar el prototipo del spike SP04. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de SP04 se detallan en la tabla 76.

*Tabla 76. Historia SP04: Prototipar el agendado de eventos en el calendario nativo.*

| Campo | Contenido |
| --- | --- |
| Story ID | SP04 |
| User | Developer |
| Priority | Alta |
| Epic | EP10 |
| **Title** | Prototipar el agendado de eventos en el calendario nativo |
| **Description** | Como desarrollador, deseo construir un prototipo que agende un evento con la alternativa elegida en SP03, para confirmar con evidencia su funcionamiento en un dispositivo físico antes de implementar US12, US13 y US14. |
| Acceptance Criteria | **Escenario 1: Prototipo en dispositivo físico**<br>Dada la alternativa elegida en SP03,<br>Cuando el desarrollador construye un prototipo que agenda un evento de prueba en un dispositivo físico,<br>Entonces el evento aparece correctamente en la aplicación de calendario nativa y el prototipo queda registrado en una rama del repositorio. |
| Acceptance Criteria | **Escenario 2: Hallazgos**<br>Dado que el spike está completo,<br>Cuando el desarrollador documenta los hallazgos,<br>Entonces el informe incluye el manejo del caso en que el usuario deniega el permiso y una estimación en puntos de historia para US12, US13 y US14. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de SP05 se detallan en la tabla 77.

*Tabla 77. Historia SP05: Investigar el flujo de suscripción recurrente del SDK de Stripe.*

| Campo | Contenido |
| --- | --- |
| Story ID | SP05 |
| User | Developer |
| Priority | Media |
| Epic | EP10 |
| **Title** | Investigar el flujo de suscripción recurrente del SDK de Stripe |
| **Description** | Como desarrollador, deseo revisar la documentación de Stripe Billing y del SDK móvil, para decidir con evidencia el flujo de pago recurrente antes de prototiparlo para el plan Premium (US22). |
| Acceptance Criteria | **Escenario 1: Documentación revisada**<br>Dado que el equipo necesita cobrar una suscripción mensual recurrente,<br>Cuando el desarrollador revisa la documentación de Stripe Billing y del SDK móvil correspondiente,<br>Entonces documenta el flujo de creación del cliente, el método de pago y la suscripción recurrente, junto con el manejo de webhooks para confirmar el cobro. |
| Acceptance Criteria | **Escenario 2: Flujo documentado**<br>Dado el flujo revisado,<br>Cuando el equipo lo valida internamente,<br>Entonces el informe queda listo para orientar el prototipo del spike SP06. |

*Fuente: elaboración del equipo Gastify.*




Los requisitos y criterios de SP06 se detallan en la tabla 78.

*Tabla 78. Historia SP06: Prototipar el pago recurrente con el SDK de Stripe.*

| Campo | Contenido |
| --- | --- |
| Story ID | SP06 |
| User | Developer |
| Priority | Media |
| Epic | EP10 |
| **Title** | Prototipar el pago recurrente con el SDK de Stripe |
| **Description** | Como desarrollador, deseo construir un prototipo del flujo documentado en SP05, para confirmar con evidencia que un pago de prueba se completa y confirma antes de implementar US21, US22 y US23. |
| Acceptance Criteria | **Escenario 1: Prototipo con tarjeta de prueba**<br>Dado el flujo documentado en SP05,<br>Cuando el desarrollador construye un prototipo que completa un pago de prueba con una tarjeta de test de Stripe,<br>Entonces el prototipo recibe la confirmación del webhook y queda registrado en una rama del repositorio. |
| Acceptance Criteria | **Escenario 2: Hallazgos y estimación**<br>Dado que el spike está completo,<br>Cuando el desarrollador compila los hallazgos,<br>Entonces el informe incluye el tratamiento de pagos rechazados y cancelaciones, y una estimación en puntos de historia para US21, US22 y US23. |

*Fuente: elaboración del equipo Gastify.*



### 2.4.2. Impact Mapping

El Impact Map vincula los objetivos de negocio de CraveWallet con las personas que pueden hacerlos posibles, el cambio de comportamiento que se espera de ellas, lo que el producto entrega para provocar ese cambio y las historias que lo implementan. El equipo lo elabora en UXPressia a partir de las fichas de Camila Torres y Renzo Salazar (2.3.1). Cada nivel responde una pregunta del método: quién ayuda a lograr la meta, qué tendría que hacer, qué puede ofrecer el producto para lograrlo y con qué historias. Se elabora un mapa por cada Business Goal.

Los Business Goals se derivan, con los criterios SMART, de los Business Outcomes del Lean UX Canvas (sección 1.2.2.4 del Capítulo I), que recogen el criterio de éxito del Problem Statement (1.2.2.1) y los Business Outcome Assumptions (1.2.2.2).

La tabla 79 enuncia los cuatro Business Goals que organizan el Impact Mapping.

*Tabla 79. Impact Mapping.*

| Business Goal | Enunciado |
| --- | --- |
| BG01 | Reducir los cargos no anticipados por renovación automática en al menos 60 % entre los usuarios activos, dentro de los 90 días desde su primer uso. |
| BG02 | Alcanzar una retención a 30 días superior al 45 % entre los usuarios que han registrado 3 o más suscripciones activas. |
| BG03 | Lograr que al menos el 12 % de los usuarios activos mensuales con 6 o más suscripciones registradas convierta al plan Premium, dentro de los primeros 6 meses de operación. |
| BG04 | Alcanzar un Net Promoter Score superior a 40 puntos al término del primer semestre posterior al lanzamiento. |

*Fuente: elaboración del equipo Gastify.*

Los actores son los dos User Personas del proyecto: **Camila Torres**, del Segmento 1, y **Renzo Salazar**, del Segmento 2. En los mapas, la Persona 1 corresponde a Camila Torres y la Persona 2 a Renzo Salazar. Los deliverables corresponden a las Epics de la especificación, y cada historia aparece con su código.

#### Business Goal 01: anticipación del cobro

Este mapa responde a qué tiene que cambiar para que un usuario deje de enterarse de un cobro automático solo al revisar su banco, el hallazgo transversal de la sección 2.2.3. De Camila Torres y de Renzo Salazar se espera el mismo cambio: que revisen el recordatorio recibido antes del cobro y decidan a tiempo si mantienen o cancelan la suscripción. El producto lo facilita con los recordatorios en el calendario nativo, que incluyen las historias de agendar y eliminar el recordatorio, dar permiso al calendario, ver los recordatorios agendados y recibir la notificación push.

La figura 13 relaciona el objetivo de anticipar los cobros con los actores, los cambios de comportamiento y las historias propuestas.

![Impact Map del Business Goal 01](images/chapter_2/Impact_Map_BG01.png)

<!-- pdf:omit-start -->

*Figura 13. Impact Map del Business Goal 01.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

La tabla 80 lista las User Stories que contribuyen a la anticipación del cobro.

*Tabla 80. Business Goal 01: anticipación del cobro.*

| User Story | Enunciado |
|:----------:|:----------|
| US12 | Como usuario, deseo que CraveWallet agende un recordatorio en mi calendario nativo 24 horas antes de cada cobro de una suscripción activa, para tener tiempo de verificar mi saldo o cancelarla antes de que se renueve. |
| US13 | Como usuario, deseo que al cancelar una suscripción se elimine también su recordatorio en el calendario, para no recibir avisos de un cobro que ya no va a ocurrir. |
| US14 | Como usuario, deseo que la aplicación me pida permiso para acceder a mi calendario la primera vez que lo necesite, para entender por qué lo solicita y decidir si lo autorizo. |
| US28 | Como usuario, deseo ver dentro de CraveWallet la lista de los recordatorios que se agendaron en mi calendario, para confirmar que todas mis suscripciones activas tienen uno programado. |
| US36 | Como usuario, deseo recibir una notificación push de CraveWallet 24 horas antes de un cobro, además del evento agendado en mi calendario, para enterarme del aviso aunque no revise mi calendario ese día. |

*Fuente: elaboración del equipo Gastify.*

#### Business Goal 02: retención por uso del Dashboard

El segundo mapa sostiene la hipótesis de que un usuario vuelve a la aplicación si el Dashboard le ahorra el trabajo mental de sumar su portafolio de suscripciones. Se espera que ambas personas consulten el Dashboard con regularidad, en vez de llevar la cuenta de memoria o revisando el banco. Para eso, el Dashboard unificado muestra el total en soles, agrupa por categoría, ordena por próxima renovación, permite buscar y muestra el ahorro de cancelar a tiempo. También se espera que registren cada suscripción nueva apenas la contratan, con ayuda del catálogo precargado, el registro personalizado y la vista previa del monto en soles.

La figura 14 relaciona el objetivo de retención con los actores, los cambios de comportamiento y las historias propuestas.

![Impact Map del Business Goal 02](images/chapter_2/Impact_Map_BG02.png)

<!-- pdf:omit-start -->

*Figura 14. Impact Map del Business Goal 02.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

La tabla 81 lista las User Stories que contribuyen a la retención por uso del Dashboard.

*Tabla 81. Business Goal 02: retención por uso del Dashboard.*

| User Story | Enunciado |
|:----------:|:----------|
| US08 | Como usuario, deseo ver en el Dashboard el monto total que gasto al mes en suscripciones activas, ya convertido a soles, para conocer mi compromiso financiero recurrente en una sola cifra. |
| US09 | Como usuario, deseo ver mis suscripciones activas agrupadas por categoría (streaming, educación, fitness, delivery, cloud), para entender en qué rubros concentro mi gasto recurrente. |
| US10 | Como usuario, deseo ver mis suscripciones activas ordenadas de la más próxima a la más lejana a cobrarse, para anticipar qué cargo viene primero. |
| US27 | Como usuario con muchas suscripciones registradas, deseo buscar una por su nombre en el Dashboard, para encontrarla rápido sin recorrer toda la lista. |
| US35 | Como usuario, deseo ver cuánto me ahorré al cancelar una suscripción antes de que se renovara, para reconocer el valor de usar CraveWallet a tiempo. |
| US04 | Como usuario, deseo elegir un servicio de un catálogo con los nombres, logos y monedas de facturación de las suscripciones más frecuentes de mi segmento, para no tener que llenar esos datos a mano. |
| US05 | Como usuario, deseo registrar manualmente una suscripción que no está en el catálogo precargado, para llevar el control de servicios menos comunes (como una membresía física o una herramienta cloud específica). |
| US34 | Como usuario, deseo ver una previsualización del monto en soles mientras registro una suscripción en dólares, para saber de antemano cuánto representará en mi presupuesto antes de guardarla. |

*Fuente: elaboración del equipo Gastify.*

#### Business Goal 03: conversión a Premium

El tercer mapa se concentra en los usuarios de mayor compromiso, con 6 o más suscripciones registradas. Se espera que, al acercarse al límite del plan gratuito, decidan pagar por eliminarlo en vez de dejar de registrar sus suscripciones. El plan Premium lo facilita con las historias de conocer el precio, suscribirse con Stripe, ver el historial de pagos y saber cuánto falta para el límite.

La figura 15 relaciona el objetivo de conversión a Premium con los actores, los cambios de comportamiento y las historias propuestas.

![Impact Map del Business Goal 03](images/chapter_2/Impact_Map_BG03.png)

<!-- pdf:omit-start -->

*Figura 15. Impact Map del Business Goal 03.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

La tabla 82 lista las User Stories que contribuyen a la conversión a Premium.

*Tabla 82. Business Goal 03: conversión a Premium.*

| User Story | Enunciado |
|:----------:|:----------|
| US21 | Como usuario del plan gratuito, deseo ver qué incluye el plan Premium y su precio mensual, para decidir si me conviene suscribirme. |
| US22 | Como usuario del plan gratuito, deseo pagar el plan Premium con mi tarjeta a través de un flujo seguro, para acceder de inmediato a sus beneficios. |
| US31 | Como usuario Premium, deseo ver el historial de los pagos mensuales que hice por la suscripción, para tener un registro de cuánto he pagado en total. |
| US39 | Como usuario del plan gratuito, deseo ver cuántas suscripciones llevo registradas frente al límite del plan gratuito, para saber cuándo me conviene pasar a Premium. |

*Fuente: elaboración del equipo Gastify.*

#### Business Goal 04: recomendación del producto

El cuarto mapa depende de que ambas personas perciban que CraveWallet resuelve mejor que la competencia (2.1) su problema principal. Se espera que un visitante entienda la propuesta de valor antes de descargar la aplicación; el landing page lo permite con las historias de ver la propuesta, comparar planes y consultar preguntas frecuentes. También se espera que un usuario activo perciba el Dashboard, la conversión de divisas y los recordatorios como una sola solución que le convenga recomendar.

La figura 16 relaciona el objetivo de recomendación del producto con los actores, los cambios de comportamiento y las historias propuestas.

![Impact Map del Business Goal 04](images/chapter_2/Impact_Map_BG04.png)

<!-- pdf:omit-start -->

*Figura 16. Impact Map del Business Goal 04.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

La tabla 83 lista las User Stories que contribuyen a la recomendación del producto.

*Tabla 83. Business Goal 04: recomendación del producto.*

| User Story | Enunciado |
|:----------:|:----------|
| US24 | Como visitante que todavía no tiene cuenta, deseo entender en el landing page qué problema resuelve CraveWallet y cómo funciona, para decidir si quiero descargarla. |
| US25 | Como visitante, deseo ver una comparación clara entre el plan gratuito y el plan Premium en el landing page, para saber qué esperar antes de descargar la aplicación. |
| US32 | Como visitante, deseo consultar una sección de preguntas frecuentes en el landing page, para resolver dudas comunes (seguridad, moneda, costo de Premium) antes de descargar la aplicación. |
| US15 | Como usuario, deseo ver junto al monto original en dólares de una suscripción su equivalente en soles, calculado con el tipo de cambio del día, para saber cuánto me costará realmente antes de que se cobre. |
| US16 | Como usuario, deseo ver qué tipo de cambio usó CraveWallet para convertir mis suscripciones en dólares y cuándo se actualizó, para confiar en que el monto mostrado es razonable. |
| US17 | Como usuario, deseo que el total del Dashboard sume todas mis suscripciones en una sola moneda, sin importar en qué divisa se facture cada una, para no tener que hacer yo mismo la conversión mental. |
| US08 | Como usuario, deseo ver en el Dashboard el monto total que gasto al mes en suscripciones activas, ya convertido a soles, para conocer mi compromiso financiero recurrente en una sola cifra. |
| US12 | Como usuario, deseo que CraveWallet agende un recordatorio en mi calendario nativo 24 horas antes de cada cobro de una suscripción activa, para tener tiempo de verificar mi saldo o cancelarla antes de que se renueve. |

*Fuente: elaboración del equipo Gastify.*

### 2.4.3. Product Backlog

El backlog reúne las 40 User Stories, las 6 Technical Stories y las 6 Spike Stories. Se estiman en Story Points con la escala 1, 2, 3 y 5; ninguna supera los 5 puntos, porque los spikes que habrían pesado 8 se dividieron en uno de investigación y otro de prototipo. Se ordenan por el valor que aportan al negocio. El orden sigue el Impact Map. Primero va el landing page, que el enunciado exige desde el primer sprint, junto con los tres spikes de investigación, que no dependen de ninguna construcción. Luego vienen la autenticación, el alta de suscripciones y el Dashboard, porque sin cuenta no hay portafolio que mostrar. Después siguen los spikes de prototipo y las historias de conversión de divisas y recordatorios, que sostienen la hipótesis principal. Al final quedan el spike de Stripe, el delivery y el plan Premium, que amplían la propuesta pero no son necesarios para las primeras hipótesis. La autenticación no encabeza el backlog por sí sola: entra en el Sprint 2 como habilitadora del alta de suscripciones y el Dashboard, no como prioridad de seguridad aislada.

Los sprints corresponden a las entregas del curso: el Sprint 1 a TB1, el Sprint 2 a AV2 y los Sprints 3 y 4 a TB2. El Product Backlog se administra en Trello y mantiene una lista por sprint, con las historias ordenadas según la prioridad de esta tabla.

**Enlace al Product Backlog:** [CraveWallet – Product Backlog en Trello](https://trello.com/b/W0MvIjVH/cravewallet-product-backlog)

La captura del tablero y la distribución de las historias por sprint se presentan en el Anexo A.

La tabla 84 ordena las historias del Product Backlog por prioridad, con sus Story Points y el sprint asignado.

*Tabla 84. Product Backlog.*

| # Orden | User Story Id | Título | Story Points (1 / 2 / 3 / 5) | Sprint |
| --- | --- | --- | --- | --- |
| 1 | SP01 | Investigar y documentar la integración con ExchangeRate-API | 3 | 1 |
| 2 | SP03 | Investigar las alternativas de integración con el calendario nativo | 3 | 1 |
| 3 | SP05 | Investigar el flujo de suscripción recurrente del SDK de Stripe | 3 | 1 |
| 4 | US24 | Ver la propuesta de valor de CraveWallet | 2 | 1 |
| 5 | US25 | Comparar el plan gratuito y el plan Premium | 2 | 1 |
| 6 | US32 | Consultar preguntas frecuentes en el landing page | 2 | 1 |
| 7 | US40 | Dejar mi correo para recibir novedades del lanzamiento | 1 | 1 |
| 8 | TS01 | Servicio de autenticación y perfil | 5 | 2 |
| 9 | US01 | Registrarme con correo y contraseña | 3 | 2 |
| 10 | US02 | Iniciar sesión | 2 | 2 |
| 11 | US03 | Configurar mi moneda de referencia | 1 | 2 |
| 12 | US33 | Cerrar sesión | 1 | 2 |
| 13 | TS02 | Servicio de suscripciones | 5 | 2 |
| 14 | US04 | Registrar una suscripción desde el catálogo precargado | 3 | 2 |
| 15 | US05 | Registrar una suscripción personalizada | 3 | 2 |
| 16 | US06 | Editar una suscripción registrada | 2 | 2 |
| 17 | US07 | Cancelar una suscripción registrada | 2 | 2 |
| 18 | US26 | Ver el historial de suscripciones canceladas | 1 | 2 |
| 19 | US34 | Previsualizar el monto en soles antes de guardar una suscripción en dólares | 2 | 2 |
| 20 | US08 | Ver el total mensual de mis suscripciones activas en soles | 5 | 2 |
| 21 | US09 | Ver mis suscripciones agrupadas por categoría | 3 | 2 |
| 22 | US10 | Ver mis suscripciones ordenadas por próxima fecha de renovación | 2 | 2 |
| 23 | US11 | Ver el detalle de una suscripción desde el Dashboard | 2 | 2 |
| 24 | US27 | Buscar una suscripción por nombre en el Dashboard | 2 | 2 |
| 25 | US35 | Ver el ahorro estimado por cancelar una suscripción antes de su renovación | 3 | 2 |
| 26 | SP02 | Prototipar el consumo y caché de ExchangeRate-API | 5 | 3 |
| 27 | TS03 | Servicio de conversión de divisas | 5 | 3 |
| 28 | US15 | Ver el monto en soles de una suscripción facturada en dólares | 5 | 3 |
| 29 | US16 | Ver el tipo de cambio utilizado y su fecha de actualización | 2 | 3 |
| 30 | US17 | Ver mi portafolio completo unificado en soles | 3 | 3 |
| 31 | US29 | Ver el historial del tipo de cambio aplicado a una suscripción | 2 | 3 |
| 32 | US37 | Ver la variación del tipo de cambio respecto al cobro anterior | 2 | 3 |
| 33 | SP04 | Prototipar el agendado de eventos en el calendario nativo | 5 | 3 |
| 34 | TS04 | Servicio de recordatorios | 3 | 3 |
| 35 | US12 | Recibir un recordatorio 24 horas antes de un cobro automático | 5 | 3 |
| 36 | US13 | Que se elimine el recordatorio de una suscripción cancelada | 2 | 3 |
| 37 | US14 | Otorgar permiso de acceso al calendario | 3 | 3 |
| 38 | US28 | Ver la lista de mis próximos recordatorios agendados | 2 | 3 |
| 39 | US36 | Recibir una notificación push además del recordatorio de calendario | 3 | 3 |
| 40 | SP06 | Prototipar el pago recurrente con el SDK de Stripe | 5 | 4 |
| 41 | TS05 | Servicio de gastos de delivery | 3 | 4 |
| 42 | US18 | Registrar un pedido de delivery desde un catálogo de comercios frecuentes | 3 | 4 |
| 43 | US19 | Ver el total gastado en delivery en el mes | 2 | 4 |
| 44 | US20 | Ver la tendencia de mi gasto de delivery por semana | 3 | 4 |
| 45 | US30 | Editar o eliminar un gasto de delivery registrado por error | 2 | 4 |
| 46 | US38 | Definir un límite mensual de gasto en delivery y recibir aviso al acercarme | 3 | 4 |
| 47 | TS06 | Servicio de suscripción Premium y webhooks de Stripe | 5 | 4 |
| 48 | US21 | Ver la propuesta de valor y el precio de Premium | 2 | 4 |
| 49 | US22 | Suscribirme al plan Premium | 5 | 4 |
| 50 | US23 | Cancelar mi suscripción Premium | 2 | 4 |
| 51 | US31 | Ver mi historial de pagos Premium | 1 | 4 |
| 52 | US39 | Ver cuántas suscripciones puedo registrar en el plan gratuito | 2 | 4 |

*Fuente: elaboración del equipo Gastify.*


El total es de 148 Story Points: 16 en el Sprint 1, 47 en el Sprint 2, 47 en el Sprint 3 y 38 en el Sprint 4. Los spikes de investigación (SP01, SP03 y SP05) abren el Sprint 1 junto al landing page, porque no dependen de ninguna construcción. Los spikes de prototipo (SP02, SP04 y SP06) se ubican al inicio del sprint que implementa la funcionalidad investigada, para aplicar sus hallazgos de inmediato. El Sprint 2 y el Sprint 3 concentran la mayor carga porque en ellos se construye, respectivamente, el núcleo de valor (autenticación, alta de suscripciones y Dashboard) y la hipótesis principal del producto (conversión de divisas y recordatorios anticipados).

## 2.5. Strategic-Level Domain-Driven Design

El diseño estratégico de Domain-Driven Design [@evans2003ddd] organiza las responsabilidades de CraveWallet a partir de las reglas del negocio. La gestión de las suscripciones que el usuario paga a terceros y la facturación del plan Premium de CraveWallet representan compromisos distintos. Por ello, se proponen fronteras separadas para conservar sus reglas y estados sin mezclar ambos ciclos de vida.

El trabajo parte del Big Picture EventStorming y del Ubiquitous Language del Needfinding (secciones 2.3.5 y 2.3.6), que describen cómo un usuario administra sus compromisos recurrentes hoy, sin CraveWallet. El segundo ejercicio de EventStorming cambia de propósito: diseña el proceso de la solución e incorpora los comandos, las políticas, los agregados y las vistas de lectura necesarios para registrar una suscripción, verla en el Dashboard, recibir un recordatorio con 24 horas de anticipación y, si corresponde, pasar a Premium.

De ese segundo EventStorming surgen los Bounded Contexts candidatos, con dos técnicas. *Start-with-value* delimita la parte del dominio de la que depende la ventaja de CraveWallet: anticipar el cobro y expresar el portafolio en soles. *Look-for-pivotal-events* usa como señales de frontera los cambios de estado importantes, como registrar una suscripción, programar una alerta o pasar a Premium. El contexto core se separa de los subdominios de apoyo y genéricos; las relaciones y patrones de Context Mapping se detallarán en 2.5.2. Las respuestas de Stripe y ExchangeRate-API pasan por una capa de traducción, conforme a la Estrategia 4 de la sección 2.1.2.

La arquitectura de software que cierra la sección se representará con el C4 Model, en sus niveles de contexto, contenedores y despliegue.

<!-- pdf:omit-start -->

Las figuras 19–26 conservan sus fuentes editables en el [tablero de Miro](https://miro.com/app/board/uXjVEcjtdBM=/). Las vistas C4 de las figuras 27–30, 33 y 36 se modelan y exportan con Structurizr. Los [archivos editables y las instrucciones de exportación](diagrams/chapter_2/README.md) se versionan junto con el informe.

<!-- pdf:omit-end -->

### 2.5.1. EventStorming

La leyenda empleada en los flujos To-Be distingue actor (amarillo), comando (celeste), evento confirmado (naranja), política (violeta), vista (verde), sistema externo o de infraestructura (rosado), problema (rojo) y contexto (blanco). En el Big Picture As-Is el azul se reservó para los sistemas actuales; al pasar al diseño de la solución se utiliza esta leyenda específica para no mezclar ambas lecturas.

La figura 17 define la convención de colores utilizada para interpretar el EventStorming de la solución.

![Leyenda de pósits del EventStorming To-Be](images/chapter_2/eventstorming-leyenda.png)

<!-- pdf:omit-start -->

*Figura 17. Leyenda de pósits del EventStorming To-Be.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

*Nota: convención de colores utilizada en los flujos y canvases de la solución.*

#### 2.5.1.1. Candidate Context Discovery

El segundo EventStorming modela el proceso **To-Be**: las acciones que el usuario iniciaría en CraveWallet y los cambios de estado que la aplicación tendría que conservar. Se partió del valor que distingue al producto, que es anticipar una renovación y comprender su efecto en el presupuesto, y se localizaron eventos que cambian el significado de la información: *suscripción registrada*, *alarma local programada*, *gasto registrado*, *límite mensual superado* y *plan Premium activado*. Estos eventos ayudan a proponer fronteras sin confundir las pantallas con los límites del dominio. En el tablero, los dos recorridos principales aparecen bajo los rótulos «suscripciones y avisos» y «gastos y presupuesto».

La figura 18 representa los recorridos propuestos para registrar suscripciones y gastos.

![EventStorming To-Be: flujos principales de suscripciones y gastos](images/chapter_2/eventstorming-flujos-principales.png)

<!-- pdf:omit-start -->

*Figura 18. EventStorming To-Be: flujos principales de suscripciones y gastos.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

*Nota: dos recorridos de valor que permiten descubrir los contextos candidatos Suscripciones y Gastos.*

La tabla 85 resume los contextos candidatos, sus responsabilidades, sus eventos y el tipo de subdominio.

*Tabla 85. Candidate Context Discovery.*

| Contexto candidato | Responsabilidad y eventos propios | Tipo de subdominio |
| --- | --- | --- |
| **Suscripciones** | Mantener el ciclo de vida, la fecha de renovación, el importe y la moneda de cada suscripción; emitir *Suscripción registrada* y coordinar *Alarma local programada*. | Core: concentra la anticipación del cobro. |
| **Gastos** | Registrar pedidos de delivery, clasificarlos y contrastar el acumulado del mes con un límite; emitir *Gasto registrado* y *Límite mensual superado*. | Apoyo: conecta el consumo cotidiano con el presupuesto. |
| **Premium** | Conservar el nivel de acceso y aplicar los límites del plan gratuito tras el resultado de una operación de prueba; emitir *Plan Premium activado* solo cuando el pago de prueba haya sido aprobado. | Genérico: habilita funciones, pero no define el ciclo de una suscripción externa. |

*Fuente: elaboración del equipo Gastify.*


La autenticación por el backend RESTful, las notificaciones locales, el calendario del dispositivo y el almacenamiento local son capacidades que colaboran con estos contextos. ExchangeRate-API, Google Places API y Stripe permanecen como dependencias externas. Su integración debe traducir las respuestas técnicas a conceptos propios del dominio antes de afectar una suscripción, un gasto o un nivel de acceso.

#### 2.5.1.2. Domain Message Flows Modeling

Se modelan escenarios de CraveWallet indicando quién envía cada mensaje, quién lo recibe, su orden y sus datos relevantes. La notación adapta Domain Message Flow Modelling de DDD Crew [@dddcrewMessageFlows] con el formato de mensaje y contenido combinados. Cada participante aparece una sola vez. Las tarjetas numeradas contienen el nombre y los datos del mensaje; los conectores permiten seguir el recorrido emisor → mensaje → receptor. Los contextos se distinguen de los clientes, los sistemas externos y los colaboradores internos mediante su etiqueta. Las respuestas se dibujan de manera explícita; los subpasos a/b/c separan los intercambios de una misma operación. **C** identifica una orden que puede rechazarse; **Q**, una consulta; **R**, su respuesta; **E**, un hecho confirmado. Los contextos se implementan como módulos del mismo backend, por lo que un evento interno no requiere un bus de mensajes.

##### Escenario A. Registrar una suscripción y preparar el recordatorio

La tabla 86 ordena los mensajes del alta, la comprobación del plan y la preparación del recordatorio en el dispositivo.

*Tabla 86. Escenario A. Registrar una suscripción y preparar el recordatorio.*

| Orden y tipo | Emisor → receptor | Mensaje y datos relevantes |
| --- | --- | --- |
| 1 — C | Aplicación móvil → Subscription Management | `RegisterSubscription`: identidad del usuario obtenida de la autenticación, nombre, importe, moneda, categoría, periodicidad y próxima fecha de renovación. |
| 2 — Q | Subscription Management → Premium & Billing | `GetPlanAccess(userId)`: consultar nivel de acceso y límite vigente. |
| 3 — R | Premium & Billing → Subscription Management | `PlanAccess`: nivel Free/Premium, límite y vigencia. El caso de uso compara ese límite con el número de registros activos; si lo alcanza, rechaza el alta según US39. |
| 4 — E | Subscription → manejadores del mismo contexto | `SubscriptionRegistered(subscriptionId, userId, nextBillingDate)`, después de persistir el registro válido. |
| 5 — R | Subscription Management → aplicación móvil | Registro confirmado y datos para preparar el aviso. |
| 6 — C | Aplicación móvil → calendario del dispositivo | Crear recordatorio con identificador del registro, título y fecha/hora calculada 24 horas antes, previa autorización del usuario. |
| 7 — R | Calendario del dispositivo → aplicación móvil | Identificador del evento creado o error/permiso denegado. La interfaz muestra el resultado real. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewMessageFlows].*


La conversión se solicita al consultar el portafolio o previsualizar un importe según US34: Subscription Management pide USD/PEN al adaptador, recibe la cotización y su fecha, y devuelve una estimación en soles. El registro conserva la moneda original; el tipo de cambio del banco no se conoce por esta consulta. Si falla el proveedor, se indica la antigüedad de la última cotización válida o que la estimación no está disponible. La hora, zona horaria y reprogramación se deben concretar en SP03–SP04. La figura 19 representa el alta y la preparación del aviso.

![Registro de suscripción y preparación del recordatorio](images/chapter_2/message-flow-subscription.jpg)

<!-- pdf:omit-start -->

*Figura 19. Registro de suscripción y preparación del recordatorio.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del material de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686580430269).*


##### Escenario B. Registrar un gasto y comparar el presupuesto

La tabla 87 describe cómo se registra un gasto, se actualiza el presupuesto de su período y se consulta el resultado.

*Tabla 87. Escenario B. Registrar un gasto y comparar el presupuesto.*

| Orden y tipo | Emisor → receptor | Mensaje y datos relevantes |
| --- | --- | --- |
| 1 — C | Aplicación móvil → Delivery Expense Management | `RegisterExpense`: identidad autenticada, identificador de solicitud, comercio, importe en PEN, categoría y fecha. El identificador permite reconocer un reintento del mismo registro. |
| 2 — E | DeliveryExpense → manejadores del mismo contexto | `DeliveryExpenseRegistered(expenseId, userId, amount, expenseDate)`, tras confirmar el gasto. |
| 3 — C interno | Caso de uso → MonthlyBudget | Aplicar el gasto al período de su fecha, una sola vez. La implementación debe elegir una actualización transaccional o un consumidor idempotente; no ejecutar ambas para sumar el mismo gasto. |
| 4 — E condicional | MonthlyBudget → manejadores del mismo contexto | `MonthlyLimitExceeded(budgetId, userId, period, limit, accumulated)` únicamente cuando el acumulado supera el límite definido. |
| 5 — Q | Aplicación móvil → Delivery Expense Management | Consultar resumen del usuario y período. |
| 6 — R | Delivery Expense Management → aplicación móvil | Total, límite, saldo disponible y condición de exceso. Sin límite configurado, se muestra solo el total. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewMessageFlows].*


La búsqueda de comercios es una consulta auxiliar: el adaptador de Google Places devuelve sugerencias, y el usuario elige una o escribe un nombre (US18). No se emite «dirección validada» como prueba de que el pedido ocurrió. La figura 20 representa el registro del gasto y la consulta del resumen. `MonthlyBudget` es un agregado de Delivery Expense Management; su presencia en el flujo no lo convierte en otro Bounded Context.

![Registro de gasto de delivery y comparación del presupuesto](images/chapter_2/message-flow-delivery.jpg)

<!-- pdf:omit-start -->

*Figura 20. Registro de gasto de delivery y comparación del presupuesto.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del material de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686580430270).*

##### Escenario C. Activar o renovar Premium a partir de un pago confirmado

La tabla 88 distingue el inicio del checkout de la confirmación que habilita o renueva el acceso Premium.

*Tabla 88. Escenario C. Activar o renovar Premium a partir de un pago confirmado.*

| Orden y tipo | Emisor → receptor | Mensaje y datos relevantes |
| --- | --- | --- |
| 1 — C | Aplicación móvil → Premium & Billing | Iniciar checkout con identidad autenticada. El servidor selecciona el precio de su catálogo; el cliente no define el importe a cobrar. |
| 2 — C | Premium & Billing → Stripe | Crear sesión de suscripción y conservar la correlación entre usuario, cliente y operación. |
| 3a — R | Stripe → Premium & Billing | Sesión creada: `sessionId` y enlace de checkout. |
| 3b — R | Premium & Billing → aplicación móvil | Enlace de la sesión. El usuario completa el pago con Stripe; Premium se activa recién con la confirmación del paso 4. |
| 4 — E externo | Stripe → adaptador de Premium & Billing | `invoice.paid`: identificadores de evento, factura, cliente y suscripción. Verificar firma, correlación, entorno de prueba y estado vigente de la suscripción antes de actualizar acceso. |
| 5 — E interno | SubscriptionPlan → manejadores del mismo contexto | `PlanUpgradedToPremium(planId, userId, billingPeriod)` cuando Free pasa a Premium. Una renovación actualiza la vigencia sin repetir esa transición. |
| 6a — Q | Aplicación móvil → Premium & Billing | Consultar acceso del usuario autenticado. |
| 6b — R | Premium & Billing → aplicación móvil | `PlanAccess`: nivel y vigencia confirmados. Mostrar pendiente mientras no exista confirmación válida. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewMessageFlows].*


Stripe documenta la confirmación por webhook y el control del estado de la suscripción [@stripeSubscriptionWebhooks]. La recepción debe admitir reintentos y notificaciones fuera de orden [@stripeWebhooks]. El registro único del identificador externo impide aplicar dos veces el mismo evento. SP05 y SP06 validan este flujo. La figura 21 separa la respuesta de Stripe al backend de la respuesta del backend al cliente.

![Activación o renovación del plan Premium](images/chapter_2/message-flow-premium-activation.jpg)

<!-- pdf:omit-start -->

*Figura 21. Activación o renovación del plan Premium.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del material de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686580430271).*


##### Escenario D. Cancelar la renovación del plan de CraveWallet

La tabla 89 separa la solicitud de cancelación del fin efectivo del acceso pagado a CraveWallet.

*Tabla 89. Escenario D. Cancelar la renovación del plan de CraveWallet.*

| Orden y tipo | Emisor → receptor | Mensaje y datos relevantes |
| --- | --- | --- |
| 1 — C | Aplicación móvil → Premium & Billing | Solicitar cancelación de la renovación del plan propio. |
| 2a — C | Premium & Billing → Stripe | Solicitar cancelación al fin del período de la suscripción correlacionada (`cancel_at_period_end`). |
| 2b — R | Stripe → Premium & Billing | Confirmación y fecha de fin del período pagado. Premium sigue vigente hasta esa fecha. |
| 2c — R | Premium & Billing → aplicación móvil | Renovación cancelada y vigencia restante. Si el proveedor rechaza la solicitud, informar el error sin confirmar cancelación. |
| 3 — E externo | Stripe → adaptador de Premium & Billing | `customer.subscription.deleted` al finalizar la suscripción. Verificar firma y correlación, y reconciliar la vigencia. |
| 4 — E interno | SubscriptionPlan → manejadores del mismo contexto | `PlanDowngradedToFree(planId, userId)` tras finalizar el acceso Premium. |
| 5a — Q | Aplicación móvil → Premium & Billing | Consultar acceso del usuario autenticado. |
| 5b — R | Premium & Billing → aplicación móvil | `PlanAccess`: nivel Free y límite vigente. El tratamiento de registros que excedan el límite gratuito debe acordarse con el equipo. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewMessageFlows].*


La figura 22 representa la cancelación. Entre la confirmación de la solicitud (2c) y la finalización (3) transcurre el período restante; el usuario conserva Premium durante ese intervalo. La cancelación del plan propio no altera las suscripciones que el usuario paga a terceros.

![Cancelación de la renovación y retorno al plan Free](images/chapter_2/message-flow-premium-cancellation.jpg)

<!-- pdf:omit-start -->

*Figura 22. Cancelación de la renovación y retorno al plan Free.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del material de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686580430272).*

**Marcar una suscripción externa como cancelada:** la aplicación envía el comando a Subscription Management; `Subscription` confirma `SubscriptionCancelled`; el backend conserva el historial y devuelve el estado; el cliente solicita retirar el evento del calendario y verifica el resultado (US07, US13). Esto no comunica una cancelación a Netflix, un gimnasio u otro proveedor.

La autenticación es una capacidad técnica previa a los comandos del usuario. La lectura de caché local y la persistencia son operaciones de infraestructura, no contextos adicionales ni eventos de negocio. Los escenarios anteriores se trazan a US04–US07, US12–US13, US18–US20, US21–US23, US39 y TS05–TS06.

#### 2.5.1.3. Bounded Context Canvases

Cada canvas documenta el propósito y los límites de un contexto, sus colaboradores, mensajes, lenguaje y decisiones de negocio. Se adapta la estructura de DDD Crew [@dddcrewBoundedCanvas] a los tres contextos propuestos para CraveWallet. Las figuras 23–25 presentan un canvas individual por contexto y las tablas 90–92 desarrollan su contenido. Se conservan los campos del canvas v5: propósito, clasificación estratégica, roles, comunicación entrante y saliente, lenguaje, decisiones, supuestos, métricas y preguntas abiertas. La comunicación entrante agrupa colaboraciones iniciadas por otro participante; la saliente agrupa las iniciadas por el contexto. Cada consulta incluye su respuesta dentro de la misma colaboración. Los eventos internos se documentan en las decisiones de negocio. Se basan en las historias de la sección 2.4 y en el diseño táctico de la sección 2.6.


##### Canvas 1. Subscription Management

La figura 23 reúne el propósito, los contratos y las decisiones del contexto que administra los registros de suscripciones y sus próximas renovaciones.

![Bounded Context Canvas de Subscription Management](images/chapter_2/canvas-subscription.jpg)

<!-- pdf:omit-start -->

*Figura 23. Bounded Context Canvas de Subscription Management.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del canvas v5 de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232307).*

La tabla 90 desarrolla el canvas de Subscription Management y su trazabilidad a las historias de suscripciones y recordatorios.

*Tabla 90. Canvas 1. Subscription Management.*

| Campo | Contenido |
| --- | --- |
| Nombre | **Subscription Management — Gestión de suscripciones.** |
| Propósito | Ayudar al usuario a conocer sus compromisos recurrentes, estimar su importe en soles y anticipar la próxima renovación. Administra los registros que el usuario crea en CraveWallet; marcar uno como cancelado no cancela el contrato con el proveedor. |
| Clasificación estratégica | **Core**, porque concentra la anticipación de renovaciones y el portafolio de suscripciones. Modelo de negocio: **engagement creator**. Evolución propuesta: **custom built**, solución propia adaptada al portafolio y anticipación de renovaciones del producto. |
| Roles del dominio | **Execution context:** gestionar el ciclo del registro. **Analysis context:** proporcionar el portafolio y estimaciones para planificar gastos. La ejecución del cobro externo queda fuera de su responsabilidad. |
| Comunicación entrante | **Aplicación móvil (cliente):** inicia comandos de registrar, editar y marcar una suscripción como cancelada, y consultas del portafolio y detalle. El contexto responde con registro confirmado, estado, resumen y datos del aviso. No hay otro contexto que envíe un evento de negocio a Suscripciones en los escenarios modelados. |
| Comunicación saliente | **Premium & Billing [U]:** Suscripciones inicia `GetPlanAccess(userId)` y recibe `PlanAccess` con nivel, límite y vigencia (Customer/Supplier propuesto). **ExchangeRate-API [U]:** inicia la consulta USD/PEN y recibe cotización y fecha traducidas mediante ACL. Las respuestas al móvil pertenecen a la colaboración entrante. `SubscriptionRegistered` y `SubscriptionCancelled` son eventos internos. |
| Colaboradores y relaciones | Premium & Billing suministra las reglas de acceso; ExchangeRate-API suministra cotizaciones mediante una capa anticorrupción; el cliente móvil utiliza el contrato de la aplicación para gestionar el calendario del dispositivo. La relación Customer/Supplier propuesta y sus contratos se detallan en 2.5.2. |
| Lenguaje ubicuo | **Suscripción:** registro de un compromiso recurrente con un tercero. **Importe original:** monto y moneda introducidos por el usuario. **Estimación en PEN:** conversión de referencia. **Próxima renovación:** fecha declarada del siguiente cargo. **Cancelada:** estado del registro dentro de CraveWallet. |
| Decisiones y reglas | El agregado `Subscription` conserva importe, moneda, periodicidad y fecha de renovación de un registro activo. El registro pertenece a un usuario. Una suscripción cancelada se excluye del portafolio activo y deja de generar recordatorios, conservando el historial. La anticipación propuesta es de 24 horas (US12); la programación efectiva depende del permiso del dispositivo. El límite gratuito se aplica según US39, con cinco registros activos. |
| Supuestos | El usuario registra y actualiza los datos de sus servicios. La conversión ayuda a planificar, pero no determina el cargo del banco. El dispositivo permite programar el recordatorio cuando el usuario autoriza el acceso. |
| Métricas de verificación propuestas | Medir registros rechazados por datos inválidos, diferencias entre la fecha de renovación y el recordatorio programado, y recordatorios que quedan activos después de marcar una suscripción como cancelada. Revisar cuántos cambios en este contexto obligan a modificar Premium & Billing. |
| Preguntas abiertas | ¿Se confirma la propuesta inicial de cinco registros activos en Free? ¿Qué pasa con registros que exceden ese límite al volver de Premium a Free? ¿Qué hora y zona horaria se usarán si el usuario solo introduce una fecha? ¿Cómo se reprograma un recordatorio cuando cambia la fecha de renovación? |
| Trazabilidad | Historias US04–US07, US08–US13 y US39; diseño táctico 2.6.1. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewBoundedCanvas].*


##### Canvas 2. Delivery Expense Management

La figura 24 delimita el registro de gastos y el presupuesto mensual; distingue la consulta opcional de comercios de los eventos internos del contexto.

![Bounded Context Canvas de Delivery Expense Management](images/chapter_2/canvas-delivery.jpg)

<!-- pdf:omit-start -->

*Figura 24. Bounded Context Canvas de Delivery Expense Management.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del canvas v5 de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232308).*

La tabla 91 desarrolla el canvas de Delivery Expense Management, incluidos el presupuesto mensual y la búsqueda opcional de comercios.

*Tabla 91. Canvas 2. Delivery Expense Management.*

| Campo | Contenido |
| --- | --- |
| Nombre | **Delivery Expense Management — Gestión de gastos de delivery.** |
| Propósito | Permitir al usuario registrar lo que gasta en pedidos de comida, consultar el total de un período y compararlo con su límite mensual. No toma pedidos, procesa pagos ni confirma entregas de los comercios. |
| Clasificación estratégica | **Supporting**, porque complementa la planificación de gastos sin definir el ciclo de vida de las suscripciones. Modelo de negocio: **engagement creator**. Evolución propuesta: **custom built**, solución propia para el seguimiento de delivery. |
| Roles del dominio | **Execution context:** registrar gastos y mantener el presupuesto mensual. **Analysis context:** producir resúmenes de consumo por período. |
| Comunicación entrante | **Aplicación móvil (cliente):** inicia comandos de registrar, editar o eliminar un gasto y actualizar el límite; consultas del historial y resumen mensual. El contexto responde con el resultado, el total, el límite y la condición de exceso. El importe y la fecha proceden del registro del usuario. |
| Comunicación saliente | **Google Places [U]:** Gastos inicia una búsqueda y recibe `MerchantSuggestion` traducida por su ACL; la integración es opcional. No se envían mensajes a los agregados de Suscripciones (Separate Ways). `DeliveryExpenseRegistered` y `MonthlyLimitExceeded` son eventos internos; las respuestas al móvil pertenecen a la colaboración entrante. |
| Colaboradores y relaciones | El cliente móvil introduce y consulta gastos. Google Places proporciona información auxiliar sobre comercios. El Dashboard combina los resúmenes de gastos y suscripciones, pero esto no exige compartir sus agregados. La ACL de Google Places y la separación de modelos entre Gastos y Suscripciones se detallan en 2.5.2. |
| Lenguaje ubicuo | **Gasto de delivery:** importe que el usuario registra por un pedido. **Comercio:** negocio asociado al gasto. **Período mensual:** mes al que se atribuye el gasto. **Límite mensual:** tope elegido por el usuario. **Acumulado:** suma de los gastos del período. **Exceso:** acumulado superior al límite. |
| Decisiones y reglas | `DeliveryExpense` conserva un gasto individual y `MonthlyBudget` mantiene el límite y acumulado de un usuario y período. El gasto se atribuye al mes de su fecha. Superar el límite produce una advertencia; no bloquea pedidos en servicios externos. US18 permite elegir un comercio del catálogo o escribirlo manualmente, de modo que Google Places no debe ser obligatorio para registrar el gasto. |
| Supuestos | El usuario consigna los gastos; no se cuenta con una importación automática de sus pedidos. La aplicación permite leer los gastos sin conexión. |
| Métricas de verificación propuestas | Comparar el acumulado mensual con la suma de gastos del mismo usuario y período; contar registros duplicados después de sincronizar y gastos que no se pueden registrar cuando falla la búsqueda de comercios. |
| Preguntas abiertas | ¿Qué actualización transaccional o consumidor idempotente recalcula el acumulado al corregir o eliminar un gasto según US30? ¿Cómo se evita duplicar un registro al recuperar la conexión? ¿Se advierte una sola vez al superar el límite o después de cada nuevo gasto? ¿Qué ocurre si se reduce el límite por debajo del acumulado? |
| Trazabilidad | Epic EP06, US18–US20, US30, US38 y TS05; diseño táctico 2.6.2. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewBoundedCanvas].*


##### Canvas 3. Premium & Billing

La figura 25 concentra las reglas del plan propio de CraveWallet, las colaboraciones con Stripe y el contrato de acceso que consume Subscription Management.

![Bounded Context Canvas de Premium & Billing](images/chapter_2/canvas-premium.jpg)

<!-- pdf:omit-start -->

*Figura 25. Bounded Context Canvas de Premium & Billing.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del canvas v5 de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232309).*

La tabla 92 desarrolla el canvas de Premium & Billing y las reglas de vigencia del plan propio de CraveWallet.

*Tabla 92. Canvas 3. Premium & Billing.*

| Campo | Contenido |
| --- | --- |
| Nombre | **Premium & Billing — Plan Premium y facturación de CraveWallet.** |
| Propósito | Mantener el nivel de acceso a CraveWallet y su vigencia a partir del resultado confirmado de la facturación del propio producto. El plan de CraveWallet es distinto de las suscripciones a servicios externos que registra Subscription Management. |
| Clasificación estratégica | **Generic**, porque la facturación y los niveles de acceso son capacidades comunes. Modelo de negocio: **revenue generator**. Evolución propuesta: **product** para el proveedor Stripe, integrado con las reglas propias de acceso; el módulo permanece en etapa de diseño. |
| Roles del dominio | **Execution context:** gestionar vigencia y nivel de acceso. **Gateway context:** interpretar y traducir el resultado externo de facturación al plan local. |
| Comunicación entrante | **Aplicación móvil (cliente):** inicia checkout, consultas de plan e historial y cancelación; recibe sesión, estado y confirmación de la solicitud. **Stripe [U]:** inicia notificaciones `invoice.paid` y `customer.subscription.deleted`, verificadas y traducidas por ACL. **Subscription Management [D/C]:** inicia `GetPlanAccess` y recibe `PlanAccess` (Customer/Supplier propuesto). |
| Comunicación saliente | **Stripe [U]:** Premium inicia creación de checkout, cancelación al fin del período y consultas para reconciliar estado; recibe sesión, vigencia y estado a través de `StripeGatewayAdapter`. Las respuestas al móvil y a Suscripciones pertenecen a colaboraciones entrantes. `PlanUpgradedToPremium` y `PlanDowngradedToFree` son eventos internos, conforme a 2.6.3. |
| Colaboradores y relaciones | Stripe suministra el resultado de facturación; una capa anticorrupción lo convierte al lenguaje del plan de CraveWallet. Subscription Management consume la información de acceso. El cliente móvil presenta el flujo de pago; Premium se activa solo con la confirmación de Stripe. |
| Lenguaje ubicuo | **Plan Free:** nivel gratuito sujeto a un límite. **Plan Premium:** nivel con beneficios definidos. **Período de vigencia:** intervalo de acceso pagado. **Pago confirmado:** resultado verificado del proveedor. **Cancelación del plan:** fin de la renovación de CraveWallet; no cancela los servicios externos del usuario. |
| Decisiones y reglas | El agregado `SubscriptionPlan` mantiene el nivel Free/Premium y la vigencia. La confirmación verificada activa Premium; abrir checkout no lo activa. Procesar dos veces una misma confirmación no debe duplicar la transición. TS06 propone conservar el acceso hasta el fin del período pagado y volver a Free tras la notificación correspondiente. Las pruebas con Stripe deben identificarse como operaciones de prueba y no como ingresos reales. |
| Supuestos | El plan usa facturación recurrente. El precio es de S/ 9.90 al mes. SP05 investiga el flujo y SP06 lo comprueba mediante un prototipo. |
| Métricas de verificación propuestas | Contar activaciones sin pago confirmado, discrepancias entre vigencia y acceso, y transiciones duplicadas al repetir una notificación de prueba. Registrar el tiempo entre confirmación y actualización del plan. |
| Preguntas abiertas | ¿Qué acceso se mantiene ante un pago fallido? ¿Cómo se recuperan notificaciones que no llegaron? ¿Cómo se administran reembolsos? ¿Qué ocurre con los registros existentes al volver a Free? ¿Cuál es la política comercial definitiva de precio y beneficios? |
| Trazabilidad | Epic EP07, US21–US23, US31, US39, TS06 y SP05–SP06; diseño táctico 2.6.3. |

*Fuente: elaboración del equipo Gastify, adaptada de DDD Crew [@dddcrewBoundedCanvas].*


Los límites permiten distinguir tres conceptos: un compromiso recurrente con un tercero, un gasto puntual de delivery y el acceso pagado a CraveWallet.

### 2.5.2. Context Mapping

El Context Map propuesto identifica quién proporciona un modelo o contrato (**upstream, U**) y quién depende de él (**downstream, D**). Sus flechas representan influencia del modelo, no el sentido de cada petición HTTP. La selección se basa en las responsabilidades y mensajes de 2.5.1, siguiendo el material de DDD Crew [@dddcrewContextMapping]. Los tres contextos se proponen como módulos de un backend.

La tabla 93 justifica cada relación del Context Map e identifica el contrato o adaptador que conserva la frontera entre modelos.

*Tabla 93. Context Mapping.*

| Relación propuesta | Patrón y justificación | Contrato o frontera |
| --- | --- | --- |
| Premium & Billing [U] → Subscription Management [D] | **Customer/Supplier** como acuerdo de diseño: las necesidades de registro y límites de Suscripciones deben formar parte de la planificación de Premium. | `GetPlanAccess(userId)` devuelve nivel, límite y vigencia. En la relación, Premium ocupa U/S (proveedor) y Suscripciones D/C (cliente). Suscripciones cuenta sus registros activos y decide si admite el nuevo registro. |
| Subscription Management / Delivery Expense Management | **Separate Ways** para sus modelos de dominio: no se propone un flujo directo entre sus agregados. El cliente compone sus resúmenes en el Dashboard. | Cada módulo conserva su lenguaje y almacenamiento. El identificador del usuario sirve para correlacionar datos; no implica código o esquema compartido como Shared Kernel. |
| ExchangeRate-API [U] → Subscription Management [D] | **Anti-Corruption Layer (ACL):** `ExchangeRateApiAdapter` traduce la respuesta del proveedor a cotización, monedas y fecha de consulta del modelo local. | `ExchangeRatePort`; el precio en moneda original permanece intacto. La frecuencia y la caché de TS03 se comprueban en SP01 y SP02. |
| Stripe [U] → Premium & Billing [D] | **ACL:** el adaptador verifica y traduce las notificaciones a cambios del plan local. Los eventos técnicos de Stripe se conservan en la frontera de integración. | `PaymentGatewayPort`, correlación de facturación y deduplicación del identificador externo. Eventos internos: `PlanUpgradedToPremium` y `PlanDowngradedToFree`. |
| Google Places [U] → Delivery Expense Management [D] | **ACL:** `GooglePlacesAdapter` convierte la respuesta en `MerchantSuggestion`. Se protege el vocabulario de gastos y se mantiene la opción manual. | Consulta auxiliar de comercio. El importe pagado procede del usuario, no de Places. La API elegida y su versión deben probarse antes de fijar el adaptador [@googlePlacesTextSearch]. |

*Fuente: elaboración del equipo Gastify.*


![Context Map propuesto de CraveWallet](images/chapter_2/context-map-revised.jpg)

<!-- pdf:omit-start -->

*Figura 26. Context Map propuesto de CraveWallet.*

<!-- pdf:omit-end -->

*Fuente: Gastify; adaptación del material de DDD Crew (s. f.), CC BY 4.0; [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686427232314).*

La figura 26 representa estas relaciones. Suscripciones y Gastos solo comparten el identificador del usuario y la pantalla del Dashboard; por ello se propone Separate Ways.

El calendario del dispositivo y la autenticación colaboran con los casos de uso, pero no son Bounded Contexts de negocio.

### 2.5.3. Software Architecture

Las vistas de arquitectura se elaboran en Structurizr a partir de un único [modelo editable DSL](diagrams/chapter_2/workspace.dsl), con un [archivo JSON que conserva la distribución](diagrams/chapter_2/workspace.json). Contexto y contenedores muestran usuarios, responsabilidades, fronteras y colaboraciones; despliegue ubica las instancias en la infraestructura. Los componentes de cada Bounded Context se presentan en 2.6 [@c4ModelDiagrams; @structurizrDsl]. Las figuras son exportaciones del renderizador de Structurizr.

El modelo distingue el incremento documentado en 4.2.1.8 del diseño pendiente. Stripe, Google Places y las colaboraciones de Premium tienen contorno o flechas discontinuas de color ámbar y la indicación «propuesto». Las vistas de componentes describen el diseño por responsabilidades; no certifican que cada clase representada exista en el código desplegado.

#### 2.5.3.1. Software Architecture Context Level Diagrams

CraveWallet reúne la landing, la experiencia móvil y el backend. El visitante conoce la propuesta y accede a la app; el usuario registra y consulta suscripciones y gastos. ExchangeRate-API proporciona cotizaciones y el calendario de Android recibe eventos desde el cliente. La integración futura con Stripe corresponde al plan propio de CraveWallet; registrar una suscripción no paga ni cancela el contrato con el proveedor externo.

La figura 27 muestra dos roles, CraveWallet como un único sistema y cuatro colaboradores externos. Omite tecnologías, almacenes y módulos internos para conservar el nivel de contexto. La solicitud a Stripe y las notificaciones del proveedor tienen relaciones separadas, identificadas como propuestas; las flechas expresan colaboraciones y no una secuencia de ejecución.

![Diagrama de contexto del sistema CraveWallet](images/chapter_2/system-context-revised.jpg)

<!-- pdf:omit-start -->

*Figura 27. Diagrama de contexto del sistema CraveWallet.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify; captura del visor de Structurizr, vista SystemContext; [exportación de alta resolución](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report/blob/develop/docs/images/chapter_2/system-context-revised.png).*

#### 2.5.3.2. Software Architecture Container Level Diagrams

La tabla 94 define los cinco contenedores. La tecnología móvil y el almacenamiento local se sustentan en la [versión integrada de la app Android](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Mobile/blob/73c5785/README.md); el backend y PostgreSQL, en la [evidencia del despliegue TB1](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/740aba0/docs/cloud-deployment.md). Los contextos de negocio son módulos del backend; no se representan como microservicios independientes.

*Tabla 94. Software Architecture Container Level Diagrams.*

| Contenedor | Responsabilidad y colaboración |
| --- | --- |
| Landing Page — Next.js/React/Tailwind CSS | Presentar la propuesta y ofrecer acceso a la app. Se publica en Vercel, separada del REST API; su configuración se describe en 4.1.4. |
| Aplicación Android — Kotlin/Jetpack Compose | Presentar formularios y resúmenes, autenticar al usuario, consumir el backend y gestionar eventos del calendario con permisos. El APK está generado; la validación en dispositivo permanece pendiente. |
| REST API Backend — Java 21/Spring Boot | Alojar Suscripciones, Gastos y autenticación; preparar datos de recordatorios y cotizaciones. Premium y Google Places siguen pendientes. La autenticación es una capacidad técnica compartida. |
| Almacenamiento local — SharedPreferences/JSON | Guardar preferencias, notas, sesión y datos de demostración. Los registros de suscripciones y Delivery de la sesión conectada se conservan en el backend. No se acredita una caché SQLite de lectura del API. |
| Base de datos — PostgreSQL 17 | Persistir el estado canónico de usuarios, sesiones, suscripciones, gastos y presupuestos. Compartir el motor no autoriza acceder directamente a los agregados de otro contexto; las tablas de Premium forman parte del diseño pendiente. |

*Fuente: elaboración del equipo Gastify, basada en los repositorios de la app móvil y el backend citados en el texto.*

![Diagrama de contenedores de CraveWallet](images/chapter_2/containers-revised.jpg)

<!-- pdf:omit-start -->

*Figura 28. Diagrama de contenedores de CraveWallet.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify; captura del visor de Structurizr, vista Containers; [exportación de alta resolución](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report/blob/develop/docs/images/chapter_2/containers-revised.png).*

La figura 28 muestra las tecnologías de las colaboraciones: HTTPS/JSON entre Android y backend, JPA/JDBC hacia PostgreSQL y APIs locales hacia SharedPreferences y CalendarContract. El calendario recibe operaciones desde Android. WorkManager prepara notificaciones locales; no se introduce un servidor de notificaciones push remotas. La colaboración con Stripe conserva el webhook firmado hacia el backend y el checkout del proveedor, ambos propuestos. El retorno al cliente no confirma el acceso Premium.

#### 2.5.3.3. Software Architecture Deployment Diagrams

La figura 29 asigna instancias de los contenedores a nodos de despliegue anidados, conforme al diagrama de despliegue C4 [@c4Deployment]. El incremento TB1 ejecuta el REST API como servicio Docker de Java 21 en Render, región Oregon, y conserva sus datos en PostgreSQL 17 administrado por Render. El servicio usa el perfil `prod`, variables privadas y conexión interna a la base, con migraciones Flyway V1–V3. El endpoint público es [cravewallet-api.onrender.com](https://cravewallet-api.onrender.com). La evidencia de publicación y persistencia tras reinicio se presenta en la tabla 153 de 4.2.1.8.

La landing se aloja por separado en Vercel. El nodo Android representa el destino del APK generado y su almacenamiento local; no acredita instalación ni verificación física del calendario y las notificaciones. La integración del cliente se probó contra el HTTPS público, según la evidencia citada en 4.2.1.8. Stripe y Google Places no aparecen como servicios ya desplegados porque sus integraciones siguen pendientes.

Render Free es un entorno de demostración temporal: el servicio puede suspenderse por inactividad y la base gratuita requiere renovación o migración antes de vencer. La configuración y las evidencias del corte publicado están disponibles en la [guía del backend](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/blob/740aba0/docs/cloud-deployment.md).

![Despliegue TB1 de CraveWallet y cliente Android por validar](images/chapter_2/deployment_diagram.jpg)

<!-- pdf:omit-start -->

*Figura 29. Despliegue TB1 de CraveWallet y cliente Android por validar.*

<!-- pdf:omit-end -->

*Fuente: equipo Gastify; captura del visor de Structurizr, vista Deployment; evidencia del backend en 4.2.1.8; [exportación de alta resolución](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report/blob/develop/docs/images/chapter_2/deployment_diagram.png).*

## 2.6. Tactical-Level Domain-Driven Design

Se detallan los tres contextos del mapa de 2.5.2. Cada módulo distingue Domain Layer, Interface Layer, Application Layer e Infrastructure Layer. Las reglas se expresan en el lenguaje del proyecto y en contratos que orientan la implementación. El dominio conserva sus invariantes y la aplicación coordina repositorios, transacciones e integraciones.

### 2.6.1. Bounded Context: Subscription Management

#### 2.6.1.1. Domain Layer

El agregado **`Subscription`** representa un registro del usuario, con identificador, nombre, importe original, moneda, categoría, estado y ciclo. `register`, `edit` y `cancel` deben comprobar propiedad y reglas antes de guardar. Un registro activo tiene una fecha de renovación válida e importe con moneda; el estado cancelado preserva el historial y excluye el registro del portafolio activo. Reactivar un registro no contrata de nuevo el servicio externo.

La tabla 95 describe los elementos de la Domain Layer de Subscription Management y sus reglas.

*Tabla 95. Domain Layer.*

| Elemento | Responsabilidad o regla |
| --- | --- |
| `Money` | Importe no negativo y moneda PEN/USD. La conversión devuelve una estimación sin sobrescribir el importe original. |
| `SubscriptionName` | Nombre no vacío, con longitud máxima propuesta de 100 caracteres. |
| `BillingCycle` | Próxima fecha y periodicidad mensual/anual. La hora y zona horaria del aviso requieren definición; una fecha por sí sola no determina un instante 24 horas antes. |
| `ExchangeRate` | Cotización positiva, par de monedas y fecha de consulta. Indicar antigüedad cuando se use un valor previo por falla del proveedor. |
| `SubscriptionStatus` | ACTIVE / CANCELLED. Cancelled describe el registro local, no la cancelación del contrato con el proveedor. |
| `SubscriptionRegistered` | Hecho confirmado tras registrar y persistir la suscripción; datos: identificador, usuario y próxima renovación. |
| `SubscriptionCancelled` | Hecho confirmado tras cambiar el estado local; habilita la retirada del recordatorio. |
| `SubscriptionRepository` | Contrato de persistencia y consultas por identificador y propietario. |
| `ExchangeRatePort` / `PremiumStatusPort` | Contratos para consultar cotización y acceso al plan sin importar los SDK externos al modelo. |

*Fuente: elaboración del equipo Gastify.*


#### 2.6.1.2. Interface Layer

`SubscriptionController` traduce solicitudes autenticadas a comandos/consultas. La identidad se obtiene de la autenticación; enviar otro `userId` en el cuerpo no autoriza operar sobre otro usuario. La base propuesta es `/api/v1/subscriptions`.

La tabla 96 lista los endpoints de Subscription Management con su caso de uso e historia.

*Tabla 96. Interface Layer.*

| Método y ruta relativa | Caso de uso | Historia |
| --- | --- | --- |
| POST `/` | Registrar una suscripción | US04, US05 |
| GET `/` | Consultar portafolio y resumen | US08–US10 |
| GET `/{id}` | Consultar detalle del propietario | US11 |
| PATCH `/{id}` | Editar importe, fecha o categoría | US06 |
| POST `/{id}/cancel` | Marcar el registro como cancelado | US07 |
| GET `/{id}/reminder` | Obtener datos para preparar el recordatorio | TS04, US12 |

*Fuente: elaboración del equipo Gastify.*


El request de alta contiene nombre, importe, moneda, categoría, fecha y periodicidad. La respuesta distingue importe original, estimación PEN, fecha de actualización y estado. Los identificadores de evento del calendario pertenecen al cliente y no son prueba de pago.

#### 2.6.1.3. Application Layer

`SubscriptionApplicationService` consulta el acceso mediante `PremiumStatusPort`, cuenta los registros activos del usuario y admite o rechaza el alta conforme a US39. Coordina la construcción y persistencia del agregado, y publica eventos después de confirmar la transacción. Las consultas de portafolio solicitan la cotización a través del puerto y componen el resumen sin modificar el registro original. Al editar una fecha o cancelar un registro, la respuesta permite al cliente reprogramar o retirar su recordatorio y mostrar cualquier falla de permisos.

#### 2.6.1.4. Infrastructure Layer

`JpaSubscriptionRepository` traduce entre el agregado y las tablas. `ExchangeRateApiAdapter` consume el proveedor a través de `ExchangeRatePort` y traduce su respuesta [@exchangeRatePair]. La caché de 24 horas de TS03 se comprueba con SP01 y SP02. Si no hay cotización válida ni valor previo, se muestra el importe original y la conversión como no disponible. El manejador de `SubscriptionRegistered` prepara datos de aviso; el calendario se ejecuta en el dispositivo, previa autorización.

#### 2.6.1.5. Bounded Context Software Architecture Component Level Diagrams

La figura 30 presenta el diseño de componentes de Subscription Management dentro del REST API. Las dependencias separan interfaz, aplicación, dominio y adaptadores; el almacenamiento y los sistemas externos se sitúan fuera de la frontera del backend. Los elementos y relaciones ámbar discontinuos son propuestas pendientes de integración. Esta vista describe responsabilidades y no una extracción automática de clases implementadas.

![Componentes de Subscription Management](images/chapter_2/subscription-components-revised.jpg)

<!-- pdf:omit-start -->

*Figura 30. Componentes de Subscription Management.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify; captura del visor de Structurizr, vista SubscriptionComponents; [exportación de alta resolución](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report/blob/develop/docs/images/chapter_2/subscription-components-revised.png).*

#### 2.6.1.6. Bounded Context Software Architecture Code Level Diagrams

##### 2.6.1.6.1. Bounded Context Domain Layer Class Diagrams

El diagrama conserva el agregado, sus objetos de valor, eventos y puertos. Las dependencias del dominio no incluyen HTTP, JPA ni clases del SDK externo. `PremiumStatusPort` es un contrato adicional de consulta de la aplicación; no convierte `UserId` en un Shared Kernel.

La figura 31 muestra las clases de la Domain Layer de Subscription Management.

![Clases de dominio de Subscription Management](images/chapter_2/subscription_class_diagram.png)

<!-- pdf:omit-start -->

*Figura 31. Clases de dominio de Subscription Management.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

##### 2.6.1.6.2. Bounded Context Database Design Diagram

La persistencia separa registros, historial declarado y caché de cotizaciones. El historial solo almacena los cobros que el usuario registra o confirma. `user_id` identifica al propietario, pero no representa una relación entre agregados de Suscripciones, Gastos y Premium.

La figura 32 muestra las tablas propuestas para persistir Subscription Management.

![Persistencia propuesta de Subscription Management](images/chapter_2/subscription-database-revised.jpg)

<!-- pdf:omit-start -->

*Figura 32. Persistencia propuesta de Subscription Management.*

<!-- pdf:omit-end -->

*Fuente: equipo Gastify; diseño propuesto, captura de [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686584755100).*

### 2.6.2. Bounded Context: Delivery Expense Management

#### 2.6.2.1. Domain Layer

**`DeliveryExpense`** representa un gasto puntual con propietario, importe, comercio, categoría y fecha. **`MonthlyBudget`** mantiene el límite y acumulado del mismo usuario para un período mensual. Son agregados distintos dentro del contexto. Los registros de gastos y las suscripciones no comparten estos agregados ni sus tablas; el cliente combina consultas para mostrar el Dashboard.

La tabla 97 describe los elementos de la Domain Layer de Delivery Expense Management y sus reglas.

*Tabla 97. Domain Layer.*

| Elemento | Responsabilidad o regla |
| --- | --- |
| `DeliveryAmount` | Importe positivo del gasto registrado en PEN. |
| `MerchantName` | Nombre de comercio no vacío; puede ingresarse manualmente. |
| `SpendingPeriod` | Año y mes válidos, calculados a partir de la fecha del gasto. |
| `MonthlyLimit` | Tope positivo cuando el usuario configura un presupuesto. Sin límite, se informa el total sin advertencia de exceso. |
| `SpendingCategory` | Categoría local para agrupar el consumo. No equivale al tipo de establecimiento del proveedor. |
| `DeliveryExpenseRegistered` | Gasto confirmado: identificador, usuario, importe y fecha. |
| `MonthlyLimitExceeded` | Hecho condicionado a un acumulado mayor que el límite del período. La repetición de avisos debe definirse con el equipo. |
| `DeliveryExpenseRepository` / `MonthlyBudgetRepository` | Contratos de persistencia separados y consultas por usuario/período. |

*Fuente: elaboración del equipo Gastify.*


#### 2.6.2.2. Interface Layer

`DeliveryExpenseController` expone las siguientes rutas relativas a `/api/v1/delivery-expenses`. Requieren autenticación y comprobación de propiedad.

La tabla 98 lista los endpoints de Delivery Expense Management con los datos que reciben y devuelven.

*Tabla 98. Interface Layer.*

| Método y ruta | Datos y resultado |
| --- | --- |
| POST `/` | Comercio, importe, categoría, fecha e identificador de solicitud; devuelve gasto confirmado. |
| GET `/summary?year=&month=` | Devuelve total, límite opcional, saldo y categorías del período del usuario. |
| PUT `/budget` | Año, mes y límite elegido; devuelve presupuesto actualizado. |
| GET `/merchants/suggestions?query=` | Devuelve `MerchantSuggestion` o informa que no se obtuvieron sugerencias; el registro manual permanece disponible. |

*Fuente: elaboración del equipo Gastify.*


`MerchantSuggestion` tiene identificador externo opcional, nombre y dirección informativa. El DTO pertenece a CraveWallet; no se expone como si fuera el objeto del SDK de Google.

#### 2.6.2.3. Application Layer

`DeliveryExpenseApplicationService` valida la solicitud, obtiene el período y coordina el gasto y presupuesto. En el backend modular, el guardado del gasto y la actualización del acumulado se realizan en una transacción; un reintento reconocido por su identificador devuelve el registro previo. Se publican los eventos tras confirmar. El control de concurrencia debe impedir perder una actualización simultánea del presupuesto.

Al consultar el resumen, el servicio contrasta el acumulado con los gastos del usuario/período. Ajustar el límite no cambia los hechos históricos. La edición/eliminación de gastos y los conflictos de escritura offline requieren reglas adicionales antes de comprometer su implementación.

#### 2.6.2.4. Infrastructure Layer

Los repositorios JPA implementan los puertos de gastos y presupuestos. `GooglePlacesAdapter` traduce la respuesta externa a `MerchantSuggestion`: esta frontera se modela como ACL, coherente con 2.5.2. El adaptador usa Text Search (New) de Google Places [@googlePlacesTextSearch].

Los manejadores internos pueden preparar el estado de exceso que consume la aplicación. La caché local permite leer datos previos, indicando su antigüedad.

#### 2.6.2.5. Component Level Diagrams

La figura 33 presenta el diseño de componentes de Delivery Expense Management dentro del REST API. Las dependencias separan interfaz, aplicación, dominio y adaptadores; el almacenamiento y los sistemas externos se sitúan fuera de la frontera del backend. Los elementos y relaciones ámbar discontinuos son propuestas pendientes de integración. Esta vista describe responsabilidades y no una extracción automática de clases implementadas.

![Componentes de Delivery Expense Management](images/chapter_2/delivery-components-revised.jpg)

<!-- pdf:omit-start -->

*Figura 33. Componentes de Delivery Expense Management.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify; captura del visor de Structurizr, vista DeliveryComponents; [exportación de alta resolución](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report/blob/develop/docs/images/chapter_2/delivery-components-revised.png).*

#### 2.6.2.6. Code Level Diagrams

##### 2.6.2.6.1. Domain Layer Class Diagrams

El diagrama muestra los dos agregados, sus objetos de valor y eventos. La asociación por usuario/período no fusiona el gasto y el presupuesto en un solo agregado.

La figura 34 muestra las clases de la Domain Layer de Delivery Expense Management.

![Clases de dominio de Delivery Expense Management](images/chapter_2/delivery_class_diagram.png)

<!-- pdf:omit-start -->

*Figura 34. Clases de dominio de Delivery Expense Management.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

##### 2.6.2.6.2. Database Design Diagram

`delivery_expenses` conserva los gastos y el identificador de solicitud para reconocer reintentos. `monthly_budgets` tiene una restricción única por usuario/año/mes. La línea entre tablas indica agrupación lógica por propietario y mes, no una clave foránea inventada hacia un presupuesto. La estrategia de concurrencia debe proteger el acumulado.

La figura 35 muestra las tablas propuestas para persistir Delivery Expense Management.

![Persistencia propuesta de Delivery Expense Management](images/chapter_2/delivery-database-revised.jpg)

<!-- pdf:omit-start -->

*Figura 35. Persistencia propuesta de Delivery Expense Management.*

<!-- pdf:omit-end -->

*Fuente: equipo Gastify; diseño propuesto, captura de [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686584755101).*

### 2.6.3. Bounded Context: Premium & Billing

#### 2.6.3.1. Domain Layer

**`SubscriptionPlan`** representa el nivel de acceso a CraveWallet. Mantiene propietario, Free/Premium, período de vigencia y referencias para correlacionar facturación. La cancelación del plan propio no cambia los registros externos del usuario.

La tabla 99 describe los elementos de la Domain Layer de Premium & Billing y sus reglas.

*Tabla 99. Domain Layer.*

| Elemento | Responsabilidad o regla |
| --- | --- |
| `PlanType` | FREE / PREMIUM. El nivel cambia tras una decisión sustentada en una notificación verificada. |
| `BillingPeriod` | Inicio y fin del acceso pagado, con fin posterior al inicio. Una renovación actualiza la vigencia sin volver a emitir una transición Free → Premium. |
| `StripeCustomerId` / `StripeSubscriptionId` | Referencias de correlación encapsuladas. Los payloads completos del proveedor no entran al agregado. |
| `PlanUpgradedToPremium` | Transición confirmada de Free a Premium. |
| `PlanDowngradedToFree` | Fin confirmado del acceso Premium y retorno a Free. |
| `PlanRepository` | Persistencia y consultas por usuario y referencias de facturación. |
| `PaymentGatewayPort` | Contrato para checkout y cancelación de renovación; la verificación entrante del webhook es una responsabilidad distinta. |

*Fuente: elaboración del equipo Gastify.*


`upgradeToPremium` debe conservar o ampliar el período confirmado, incluso si el plan ya es Premium. La deduplicación se basa en el evento externo y la factura; una notificación antigua no debe reducir la vigencia actual. `downgradeToFree` comprueba antes el fin del acceso. Las referencias de facturación se conservan para trazabilidad, en lugar de borrarlas al cancelar.

#### 2.6.3.2. Interface Layer

`PremiumController` atiende al usuario autenticado. `StripeWebhookController` recibe notificaciones del proveedor; no requiere el JWT del usuario, pero sí la verificación de firma y correlación antes de afectar un plan.

La tabla 100 lista los endpoints de Premium & Billing y el contrato propuesto para cada uno.

*Tabla 100. Interface Layer.*

| Método y ruta base `/api/v1/premium` | Contrato propuesto |
| --- | --- |
| POST `/checkout` | Inicia sesión de pago y devuelve enlace; no confirma Premium. |
| GET `/status` | Devuelve nivel y vigencia confirmados. |
| POST `/cancel` | Solicita cancelar la renovación al fin del período pagado. |
| GET `/payments` | Historial de operaciones confirmadas del usuario. |
| POST `/webhook` | Entrada de Stripe verificada; no acepta una declaración de pago desde el móvil. |

*Fuente: elaboración del equipo Gastify.*


#### 2.6.3.3. Application Layer

`PremiumApplicationService` crea o recupera el plan y conserva la correlación usuario/cliente/suscripción antes de procesar una confirmación. `handlePaymentConfirmed` comprueba evento/factura no procesados y estado vigente, actualiza el período y registra el resultado en una transacción. `handleSubscriptionCancelled` reconcilia la vigencia antes de volver a Free. Las respuestas a `GetPlanAccess` publican un contrato local de nivel y límite para Suscripciones; no exponen el objeto Stripe.

#### 2.6.3.4. Infrastructure Layer

**`StripeGatewayAdapter`** implementa el puerto de salida para checkout/cancelación. **`StripeWebhookAdapter`** verifica firma, registra el identificador del evento y traduce la notificación para la aplicación. Separar ambos evita que el servicio de aplicación dependa de un adaptador que a su vez llama al mismo servicio. La correlación y actualización deben soportar reintentos y mensajes fuera de orden [@stripeWebhooks].

Para una factura pagada, se consulta y valida la suscripción vinculada antes de actualizar el acceso. `customer.subscription.deleted` permite reconciliar el fin del plan [@stripeSubscriptionWebhooks]. Un evento no relevante y verificado puede reconocerse sin cambiar el plan; una firma inválida o una falla de procesamiento no se trata como éxito por defecto.

`JpaPlanRepository` persiste los planes y sus referencias. El registro `billing_events` impone unicidad al identificador externo y conserva estado de procesamiento. Las pruebas de SP05–SP06 deben demostrar correlación, duplicados, renovación y cancelación; no hay resultados documentados en este avance. El precio y beneficios siguen siendo propuestas comerciales.

#### 2.6.3.5. Component Level Diagrams

La figura 36 presenta el diseño de componentes de Premium & Billing dentro del REST API. Las dependencias separan interfaz, aplicación, dominio y adaptadores; el almacenamiento y los sistemas externos se sitúan fuera de la frontera del backend. Los elementos y relaciones ámbar discontinuos son propuestas pendientes de integración. Esta vista describe responsabilidades y no una extracción automática de clases implementadas.

![Componentes de Premium & Billing](images/chapter_2/premium-components-revised.jpg)

<!-- pdf:omit-start -->

*Figura 36. Componentes de Premium & Billing.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify; captura del visor de Structurizr, vista PremiumComponents; [exportación de alta resolución](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Report/blob/develop/docs/images/chapter_2/premium-components-revised.png).*

#### 2.6.3.6. Code Level Diagrams

##### 2.6.3.6.1. Domain Layer Class Diagrams

El diagrama conserva el agregado y los eventos locales. La operación de renovación debe respetar la actualización de vigencia descrita arriba. Los puertos se completarán con el contrato de cancelación al implementar; el diagrama representa el núcleo del modelo.

La figura 37 muestra las clases de la Domain Layer de Premium & Billing.

![Clases de dominio de Premium & Billing](images/chapter_2/premium_class_diagram.png)

<!-- pdf:omit-start -->

*Figura 37. Clases de dominio de Premium & Billing.*

<!-- pdf:omit-end -->

*Fuente: elaboración del equipo Gastify.*

##### 2.6.3.6.2. Database Design Diagram

`user_plans` tiene un único registro por usuario. `billing_events` conserva identificador externo único, plan correlacionado, tipo, fecha y estado de procesamiento. La correlación se verifica antes de cambiar el plan.

La figura 38 muestra las tablas propuestas para persistir Premium & Billing.

![Persistencia propuesta de Premium & Billing](images/chapter_2/premium-database-revised.jpg)

<!-- pdf:omit-start -->

*Figura 38. Persistencia propuesta de Premium & Billing.*

<!-- pdf:omit-end -->

*Fuente: equipo Gastify; diseño propuesto, captura de [Miro](https://miro.com/app/board/uXjVEcjtdBM=/?moveToWidget=3458764686584755102).*
