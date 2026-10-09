# Evidencias del backend — TB1

Componente: CraveWallet-Backend. Corte de código:
[`2f36260dc1aa9b8e4ef71a7184847795e6cb6867`](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/commit/2f36260dc1aa9b8e4ef71a7184847795e6cb6867).
Fecha: 8 de octubre de 2026, America/Lima.

| Archivo | Procedencia | Sección del informe |
| --- | --- | --- |
| [test-results.json](test-results.json) | Resumen extraído de los XML de Maven Surefire de las siete suites ejecutadas; 32 casos, cero fallos y errores. | 4.2.1.5 |
| [maven-verify.txt](maven-verify.txt) | Líneas de resultado de `mvnw.cmd -B verify`, con duración y BUILD SUCCESS. | 4.2.1.5 y 4.2.1.8 |
| [openapi.json](openapi.json) | Respuesta de GET `/v3/api-docs` del servidor local, después de corregir los esquemas de alta de Delivery/Suscripciones y documentar 201. | 4.2.1.6 y 4.2.1.7 |
| [live-api-results.json](live-api-results.json) | Ejercicio HTTP de los 16 métodos/rutas con cuentas y gastos ficticios; registra estados y comprobaciones sin conservar credenciales ni tokens. | 4.2.1.6 |

El perfil ejecutado utiliza H2 en memoria y Flyway V1–V3. La cotización del
ejercicio HTTP consulta ExchangeRate-API; las pruebas automatizadas del proveedor
utilizan mocks/servidor local. La dirección localhost incluida en OpenAPI es de
desarrollo: no corresponde a un despliegue público.

Estos archivos no contienen capturas reconstruidas ni pruebas de PostgreSQL,
instalación Android o integración móvil. El conteo de rutas tampoco representa
por sí mismo el avance total de TB1. Los documentos completos del backend están
[versionados junto al código](https://github.com/1ACC0238-2620-4950-Gastify-CraveWallet/CraveWallet-Backend/tree/2f36260dc1aa9b8e4ef71a7184847795e6cb6867/docs).

## Capturas de Swagger UI

Capturadas el 8 de octubre de 2026, aproximadamente a las 22:13–22:15
(America/Lima), contra el servidor local del mismo corte `2f36260`.
La cuenta, comercios y suscripciones utilizados son datos ficticios.

| Archivo | Evidencia | Figura |
| --- | --- | --- |
| [swagger-overview.jpg](swagger-overview.jpg) | Título, versión, URL local y operaciones de la API. | 109 |
| [swagger-subscription-created.jpg](swagger-subscription-created.jpg) | POST de suscripción: HTTP 201, recurso y Location. | 110 |
| [swagger-subscriptions-response.jpg](swagger-subscriptions-response.jpg) | GET del portafolio: HTTP 200 y conversión USD/PEN. | 111 |
| [swagger-summary-response.jpg](swagger-summary-response.jpg) | GET del resumen de octubre: HTTP 200, total 35,50 y saldo 64,50. | 112 |
| [swagger-reminder-response.jpg](swagger-reminder-response.jpg) | GET del recordatorio: HTTP 200, fechas con 24 horas de diferencia. | 113 |
| [swagger-subscription-request.jpg](swagger-subscription-request.jpg) | Cuerpo JSON usado para crear Música de prueba. | 114 |
| [swagger-summary-request.jpg](swagger-summary-request.jpg) | Parámetros year=2026 y month=10. | 115 |

Las respuestas se conservan también en [alta de suscripción](swagger-subscription-created.json),
[portafolio](swagger-subscriptions-response.json), [resumen](swagger-summary-response.json)
y [recordatorio](swagger-reminder-response.json), leídas de los cuerpos visibles en Swagger.
Se consultó el portafolio antes de crear Música de prueba: en ese momento solo
contenía Streaming de prueba por USD 9,99. Las capturas de respuestas excluyen
el bloque Curl, que muestra la cabecera de autorización.
