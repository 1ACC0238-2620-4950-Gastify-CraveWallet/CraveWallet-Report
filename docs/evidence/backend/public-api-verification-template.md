# Verificación del API público antes de la exposición

> Ejecutar desde una conexión distinta si Render no responde. Registrar resultados reales; un health `UP` no acredita por sí solo las operaciones de negocio.

| Campo | Valor |
| --- | --- |
| Fecha y hora (America/Lima) |  |
| Responsable |  |
| Conexión utilizada |  |
| Commit desplegado |  |
| URL base | `https://cravewallet-api.onrender.com` |

| Comprobación | Resultado esperado | Código / duración | Resultado observado | Evidencia |
| --- | --- | --- | --- | --- |
| `GET /actuator/health` | 200 y estado `UP`. |  | Pendiente |  |
| `GET /swagger-ui/index.html` | 200 y carga de Swagger UI. |  | Pendiente |  |
| `GET /v3/api-docs` | 200 y especificación del commit desplegado. |  | Pendiente |  |
| `GET /api/v1/subscriptions` sin token | 401. |  | Pendiente |  |
| Registro/login con cuenta ficticia | 201/200 y tokens. |  | Pendiente |  |
| Operación autenticada | Respuesta funcional según la tabla 157. |  | Pendiente |  |

## Resultado

- Estado de la verificación: Pendiente.
- Incidencias o tiempos de arranque en frío:
- Datos ficticios eliminados o cuenta cerrada:
