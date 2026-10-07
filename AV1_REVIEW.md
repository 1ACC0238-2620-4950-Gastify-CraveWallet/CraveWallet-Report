# Revisión de AV1 — 7 de octubre de 2026

Este archivo registra las correcciones y los pendientes para la revisión del equipo. No forma parte del informe exportado ni acredita una calificación.

## Observaciones del profesor

| Observación | Acción en el repositorio | Qué falta comprobar |
| --- | --- | --- |
| Alineación y Markdown | Tablas ordinarias en Markdown, fuentes y referencias; Lean UX conserva celdas combinadas con filtro específico. | Visualización del archivo final cuando se solicite exportar. |
| Lean UX Canvas | Ocho bloques contextualizados, hipótesis y experimento inicial; cinco participantes es una propuesta, no una prueba ejecutada. | Realizar y documentar el experimento. |
| Textos plantilla | Eliminados los 35 rótulos de continuación y la ficha vacía de entrevista; simplificados Problem Statement, supuestos, conclusiones y diseño. | Lectura y sustentación por los cinco integrantes. |
| Datos sustentados | Comparación reducida a fuentes oficiales consultadas; cifras retiradas cuando no había respaldo. Bibliografía sincronizada con 16 fuentes citadas. | Contrastar los resúmenes con las grabaciones; no se verificó el contenido completo de los videos. |
| Imágenes, gráficos, tablas y anexos referenciados | 34 figuras y 100 tablas numeradas con referencias en el texto y fuentes; el Anexo A se menciona en las conclusiones. | Actualizar las capturas históricas de colaboración y Trello al estado de la entrega. |
| Bounded Context Canvases | Un canvas desarrollado por contexto y síntesis visual, con responsabilidades, lenguaje, mensajes, reglas, supuestos y preguntas abiertas. | Resolver las decisiones comerciales y técnicas pendientes. |
| Domain Message Flow Modeling | Escenarios de registro, presupuesto y Premium con orden, tipo, emisor, receptor y datos. Cancelación externa distinguida del registro local. | Validar los contratos con la implementación y los spikes. |
| Context Mapping | Dirección U/D y contratos; ACL para proveedores; Customer/Supplier propuesto entre Premium y Suscripciones; modelos separados de Suscripciones y Gastos. | Confirmar el acuerdo de evolución de contratos del equipo. |
| Coherencia de arquitectura y diseño | Actualizados contexto, contenedores, componentes y persistencia; explicados vigencia Premium, deduplicación, permisos, historial y límites del modo offline. | Pruebas de integración, concurrencia y reintentos cuando haya implementación. |
| Fotos | Corresponde al equipo, según lo indicado por Anghelo. | Revisión del equipo. |

## Decisiones que debe cerrar el equipo

1. Confirmar la propuesta de cinco registros activos en Free y el precio propuesto S/ 9.90; no son resultados de validación comercial.
2. Definir el tratamiento de registros que exceden el límite al volver a Free. Recomendación pendiente de aceptación: conservar datos y bloquear nuevos registros hasta estar dentro del límite.
3. Definir hora/zona horaria de renovación, reprogramación de recordatorios y conducta ante permisos denegados.
4. Definir reglas de edición de gastos, repetición de alertas y escritura/sincronización offline.
5. Definir acceso ante pago fallido, reembolsos y recuperación de notificaciones de facturación.

No se eliminan estas dudas para simular un diseño validado. Una vez acordadas, actualizar historias, canvases y contratos de forma coherente.

## Contraste con la rúbrica adjunta

Se revisó la hoja **AV1** de `1acc0238-final_project-rubrics.xlsx`. Su encabezado B6 dice **TB1 (Sprint 1 Review)** y la columna de hitos contiene referencias a TB1/TB2. La pestaña inicial conserva un cronograma de Base de Datos de 2013. Por ello, sus criterios técnicos se contrastan con las instrucciones AV1 proporcionadas por el profesor; no se asume que esos encabezados definan la entrega actual.

- Lean UX y visión: problema, segmentos, supuestos, cinco hipótesis y canvas presentes. Falta ejecutar la validación propuesta.
- Needfinding: seis registros, dos arquetipos y artefactos presentes. El equipo debe verificar los videos, sus datos y consentimiento.
- Requisitos: se conservaron US01–US40, TS01–TS06 y SP01–SP06. Los spikes siguen planificados sin resultados acreditados.
- Diseño: se documentan tres contextos, mensajes, mapa, arquitectura y capas; las clases son propuestas, no evidencia de backend ejecutado.
- Comunicación y colaboración: historial y fuentes presentes; faltan la lectura conjunta y las capturas finales actualizadas.

## Entregables externos pendientes de revisar

- **Presentación de Gastify:** no se encontró un PPTX del proyecto en el repositorio o en los archivos identificados de Descargas. Se necesita su ruta o enlace para revisar coherencia.
- **Informe de participación:** no se encontró el Word del equipo. Se necesita el archivo y la evaluación real del Team Leader; no se inventan calificaciones individuales.
- **Carátula oficial:** existe `config/cover.tex`, pero no se dispone del formato Word/Markdown de Información general para comparar su cumplimiento exacto.
- **Exportación final:** no se generó un nuevo PDF. Debe revisarse visualmente antes de enviar, junto con nomenclatura y archivos individuales solicitados.

## Comprobaciones realizadas

`python scripts/check-report.py` comprueba las 52 historias, numeración y referencias de figuras/tablas, citas definidas y rutas de imágenes. Pandoc interpreta los archivos AV1 y sus filtros sin errores al producir una salida LaTeX de comprobación. Los diagramas nuevos fueron revisados visualmente. Estas comprobaciones no prueban resultados experimentales ni aseguran la nota del profesor.

`python scripts/sync-bibliography.py` actualiza la bibliografía visible en GitHub sin producir un PDF. El build AV1 mantiene solo README, capítulos I–II y cierre. Los pendientes de capítulos III–IV pertenecen a avances posteriores y no se han presentado como trabajo completado de AV1.
