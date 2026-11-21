# Auditoría de los bocetos

Alcance revisado: `boceto/index-v2.html`, `boceto/admin-v2.html`, `boceto/icons-v2.js`, `boceto/briefing-cliente-v2.html`, `propuesta.html` y `prompt.md`, leídos completos. La propuesta y los bocetos quedan como material de referencia; los entregables funcionales se construirán en la raíz.

## Hallazgos y resolución prevista

| # | Hallazgo | Resolución en el producto |
|---|---|---|
| 1 | Identificadores abreviados, estado global poco legible y bloques extensos de lógica en línea. | Reemplazar por nombres descriptivos, funciones pequeñas y una librería de iconos compartida. |
| 2 | El panel edita stock y la tienda lo representa como “Agotado”. | Omitir stock en el modelo, formularios, catálogo, carrito y semilla. |
| 3 | El sitio permite cifras extra sin respaldo y muestra contadores con formato inventado. | Mostrar únicamente los datos reales entregados; proyectos realizados queda vacío hasta que se indique. |
| 4 | El sitio mantiene varios listeners `.on("value")` abiertos indefinidamente. | El sitio público usará lecturas únicas, caché local versionada por `meta/updatedAt` y contenido HTML de respaldo. |
| 5 | Las etiquetas Open Graph se cambian solo con JavaScript y carecen de URL canónica fija. | Poner título, descripción, canonical y OG estáticos en el HTML; indicar el dominio e imagen finales pendientes. |
| 6 | El borrado usa `confirm()` nativo y elimina inmediatamente. | Usar confirmación propia y preferir archivar; exigir el nombre exacto para eliminación irreversible. |
| 7 | La cotización es un formulario básico y duplica datos que ya están disponibles desde WhatsApp. | Sustituirla por flujos guiados de cotización y solicitudes; no solicitar número de teléfono en el chat. |
| 8 | No hay distinción entre archivar y eliminar ni restauración sencilla. | Añadir estados activos/archivados y acción destructiva separada y confirmada. |
| 9 | No se avisa de cambios sin guardar ni de salida accidental. | Marcar edición pendiente, ofrecer guardar/descartar y avisar al salir. |
| 10 | El sitio y el panel reutilizan credenciales de un proyecto ajeno (`taxislascondes`) y presets de carga que no corresponden. | No copiar esa configuración. Centralizar marcadores Firebase/Cloudinary y documentar pasos manuales. |
| 11 | Validación insuficiente de precios, longitudes, enlaces, campos y archivos. | Normalizar precios CLP, validar campos y URLs HTTPS y limitar/validar archivos antes de subir. |
| 12 | Errores de red y de Firebase se pierden o se muestran con mensajes genéricos. | Añadir estados visibles de carga/error, reintento y uso de caché; el panel conserva los datos editados ante error. |
| 13 | Las reglas no estaban en el formato completo que acepta Firebase Console. | Añadir el objeto raíz `rules` y mantener las rutas de Factor Solar bajo `/solar`, junto con la configuración de Cloudflare Pages. |
| 14 | El tema acepta combinaciones de colores sin comprobar contraste. | Calcular contraste y evitar aplicar texto ilegible; validar el guardado de tema en el panel. |
| 15 | No existe exportación del contenido como copia manual. | Añadir exportación JSON limitada al contenido de `/solar`, excluyendo estadísticas, suscripción y contrato. |
| 16 | El renderizado crea HTML con concatenaciones; varios datos solo se escapan parcialmente y algunos identificadores de producto se interpolan en atributos. | Construir el HTML con escapado central de texto/atributos, comprobar URLs y evitar aceptar protocolos distintos de HTTPS. |
| 17 | La marca del sitio usa colores, nombre, estética y Firebase de una plantilla ajena; no coincide con Factor Solar Chile. | Aplicar marca solar amarilla y negro azulado, datos reales provistos e ilustraciones provisionales originales sin fotos de trabajos inventados. |
| 18 | El sitio muestra controles de carrito y formulario incluso si módulos/datos no están configurados; cotización no puede fallar de forma comprensible. | Aplicar dependencias de módulos, mensajes de estado y alternativas de WhatsApp cuando estén configuradas. |
| 19 | Carrito incompleto: sin cantidades manuales robustas, validación de datos, regla de pago/entrega, conciliación de precios, ni tratamiento fiable del mensaje largo/ventana bloqueada. | Implementar cantidades acotadas, validación y conciliación; usar WhatsApp con respaldo de copiar mensaje. |
| 20 | La galería abre una sola imagen sin controles de teclado, foco ni navegación por proyecto. | Crear lightbox con controles accesibles, cierre por Escape y navegación, usando solo fotos administradas o marcadores vacíos. |
| 21 | El panel no restringe UID autorizado, no soporta recuperación, ni persistencia elegible y deja acciones de escritura accesibles a cualquier cuenta autenticada. | Comprobar UID permitido en la interfaz; documentar que la regla de base es autoridad y que UID/configuración deben completarse antes de publicar. |
| 22 | El panel guarda campos vacíos de manera inconsistente, no tiene control de conflictos y mezcla imágenes, datos de negocio y autorización. | Formularios agrupados, validación antes de guardar, avisos de error y marcadores de configuración separados. |
| 23 | El upload no comprime ni valida contenido, carece de progreso/reintento y usa un preset/Cloudinary de otra aplicación. | Validar tamaño/tipo, reducir imágenes en el navegador y usar configuración propia y progreso/cancelación cuando se habilite. |
| 24 | El briefing y la propuesta contienen datos/direcciones de contacto de desarrollo y preguntas desactualizadas; la propuesta contiene secciones excluidas del alcance solicitado. | No usarlos como contenido público ni trasladar información de desarrollo. Mantenerlos como referencias y excluir expresamente los contenidos vedados del producto. |
| 25 | El sketch no contempla pruebas robustas para teclado, pantallas pequeñas, reduced motion, rutas profundas, errores de Firebase ni fallback sin JavaScript. | Añadir semántica y estados de respaldo, adaptar a móvil y documentar las comprobaciones que requieran navegador/servicios reales. |

## Límites de esta auditoría

No se ejecutaron los bocetos ni se inspeccionaron servicios externos. La configuración Firebase y las reglas actuales pertenecen a una aplicación compartida, no están incluidas en `panelsolar` y no se modificarán. Por tanto, las credenciales, UID, dominio, preset y permisos requieren configuración manual segura antes del despliegue.
