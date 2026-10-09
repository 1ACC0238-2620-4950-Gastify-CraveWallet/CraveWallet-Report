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
