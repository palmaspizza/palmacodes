# Informe de implementación y verificación

## Entrega

- Sitio público adaptable con marca SVG adaptada desde la referencia, iconografía SVG, espacios vacíos claramente identificados para fotografías y video configurable en portada.
- Panel para administrar productos, categorías, servicios, proyectos, carrusel, reseñas, preguntas frecuentes, rangos del cotizador, ajustes, estadísticas, QR y exportación.
- Asistente con preguntas configurables por servicio, introducción opcional, progreso, navegación atrás/reinicio y logo en los mensajes.
- Pedido desde el catálogo con validación de teléfono, pago/entrega y un resumen estructurado para WhatsApp; no se procesa pago en el sitio.
- Reseñas conectadas para actualizaciones en tiempo real cuando Firebase esté disponible; el listener se limita a la sección visible y se retira al ocultarla.
- Límites de aplicación: 300 productos, seis visibles inicialmente y seis más por tanda tras elegir categorías; 30 registros por página en el panel; hasta 5 imágenes por producto, 8 diapositivas y 6 imágenes por proyecto. El límite de cargas Cloudinary es independiente del número de productos.
- No se añadieron productos, precios, proyectos ni reseñas ficticios.

## Refinamiento visual verificado (20-11-2026)

- Portada reorganizada en dos áreas: identidad y propuesta de Factor Solar a la izquierda; cotización, WhatsApp, teléfono y catálogo a la derecha. Los enlaces de contacto siguen la configuración del panel.
- Se reforzaron jerarquía tipográfica, contraste, superficies, tarjetas, estados de foco y movimiento sutil, respetando `prefers-reduced-motion`.
- El contacto final usa un tratamiento oscuro coherente con la portada; galería, producto e imagen principal siguen siendo espacios vacíos hasta recibir fotografías reales.
- El panel recibió el mismo lenguaje de marca en acceso, navegación, formularios, tarjetas y estados. La configuración web de Firebase se añadió después; el acceso real requiere que las reglas estén publicadas y que la cuenta autorizada exista en el proyecto.
- La referencia visual se usó únicamente para composición y jerarquía: no se incorporaron sus textos, marca, reseñas ni fotografías.

## Ajustes de controles y campos

- Los botones «Consultar» ahora tienen tratamiento visual de acción, con estados hover, activo y foco de teclado.
- Los campos dinámicos del asistente, el carrito y el panel muestran instrucciones de escritura; comuna usa una indicación específica. Los campos del panel conservan tipos adecuados para teléfono, correo, URL, número y color.
- Los documentos legales se ajustaron para pantallas estrechas y se verificó que no tengan desbordamiento horizontal en la vista móvil probada.

## Firebase y páginas legales

- Se configuró el SDK existente de Realtime Database y Authentication con los datos proporcionados. El UID recibido quedó autorizado para administrar contenido; no se le asignó el rol de desarrollador ni acceso a modificar módulos.
- `firebase/rules.solar.json` es un archivo completo con la propiedad raíz `rules`, personalizado para el UID administrador y con la escritura de `contract/modules` bloqueada. Es local; no se desplegó en Firebase.
- Se añadieron `privacidad.html` y `terminos.html` y enlaces desde el sitio. Ambos documentos identifican a Fabián Alarcón Soto como responsable según el brief y señalan como pendientes la razón social/RUT, los plazos de conservación, la revisión de proveedores y la presentación de precios.

## Protección de cuotas gratuitas (20-11-2026)

- Cloudinary: las cargas se detienen hasta registrar el uso existente en el panel. El medidor transaccional de Firebase impone topes acumulados de 100 imágenes y 40 MiB reservados, contabilizando tres veces el tamaño WebP para el original y dos variantes. No devuelve presupuesto al reemplazar o borrar referencias. Cada fuente se limita a 10 MB y 25 MP y se comprime antes de subir a WebP de hasta 384 KiB. Las fallas de red dejan la reserva ocupada por seguridad, para evitar reintentos que dupliquen una carga completada.
- El sitio solo solicita variantes de imagen de 160 o 960 px desde la cuenta Cloudinary configurada; el panel no sube video. El panel aplica topes por colección. Realtime Database Rules no ofrece un contador de hijos, por lo que esos topes no se deben presentar como límites de seguridad del servidor.
- Firebase: el sitio guarda caché por versión y limita las suscripciones en tiempo real de reseñas a la sección visible. Las estadísticas ahora usan `ServerValue.increment`, no transacciones: así los visitantes pueden incrementar los contadores sin permiso de lectura, que se mantiene restringida al administrador.
- Los topes de Cloudinary (100 cargas/40 MiB) son salvaguardas de la aplicación, no cuotas mensuales ni límites de la cuenta. No controlan las cargas hechas desde la consola, el ancho de banda público, las variantes creadas fuera del sitio ni cambios en el preset. Inicializa `solar/mediaUsage` con el uso real antes de habilitar cargas.
- El preset unsigned sigue siendo público en el sitio estático: el medidor protege el flujo normal del panel, pero no puede impedir cargas directas que lo eviten. Para un límite técnico ante terceros se requiere un backend que firme las cargas o deshabilitar la carga unsigned; nunca se debe exponer un secreto en el HTML.
- Mantener Firebase en Spark y Cloudinary en el nivel gratuito sin un método de pago evita que este flujo genere un cobro por excedentes, pero no puede garantizar disponibilidad si se agotan cuotas; el proveedor puede rechazar o pausar operaciones. Firebase Rules y el medidor solo operan después de fusionar y publicar las reglas locales.

## Comprobaciones realizadas

- Sintaxis de los scripts inline de `index.html` y `admin.html` comprobada con Node.js.
- Las transacciones públicas de estadísticas provocaban `permission_denied`: RTDB necesita lectura para ejecutar una transacción, pero las reglas reservan la lectura de estadísticas al administrador. Se reemplazaron por incrementos atómicos de servidor y se mantiene la lectura privada. Es necesario publicar las reglas locales en Firebase para que el comportamiento remoto coincida.
- Navegación móvil del panel verificada: abre y se cierra con el botón X, al elegir una sección, al tocar fuera y con Escape; el panel conserva su menú lateral de escritorio.
- Revisión estática adicional de los nueve HTML, dos JavaScript y tres JSON: sintaxis válida y sin referencias locales estáticas faltantes. Se corrigió el enlace «Ver sitio» del boceto de administración.
- Cotizador probado en navegador desde el inicio hasta el resumen; el campo de comuna muestra su placeholder, mensajes y opciones no se superponen y no hay desbordamiento horizontal en la vista móvil estrecha usada.
- Estilos normal, hover y foco del botón «Consultar» verificados en navegador. Placeholders del carrito y campos dinámicos del panel comprobados en memoria, sin iniciar sesión ni conectar Firebase.
- `firebase/rules.solar.json` y `firebase/seed-solar.json` parsean como JSON válido; el emulador local cargó las reglas. Con el SDK web y sin autenticar, se aceptaron incrementos `ServerValue.increment` en `stats` y `statsProd` y se denegó su lectura pública, como se pretende. No se hicieron escrituras en Firebase de producción ni se publicaron reglas.
- El JavaScript inline de las páginas pública, administrativa y legales pasa la comprobación de sintaxis; privacidad y términos cargan en navegador y mantienen sus enlaces entre sí.
- El medidor bloquea inicialización sin valores, aplica el máximo de cargas/almacenamiento y libera una reserva solo ante rechazo definitivo; una carga simulada reservó 3 veces los bytes optimizados. La compresión de prueba produjo WebP bajo 384 KiB y rechazó una imagen simulada de más de 25 MP. El límite de 300 productos está aplicado en el sitio y en el panel, no en las reglas de servidor; el sitio muestra seis fichas inicialmente y seis por tanda después de explorar categorías, y el panel 30 por página. Las reglas limitan los índices de imágenes y especificaciones y el contador de cargas.
- Estas pruebas del medidor y del compresor fueron simuladas en navegador: no se inició sesión, no se cargaron archivos reales ni se escribieron datos en Firebase o Cloudinary.
- La lectura pública de prueba a Realtime Database devolvió HTTP 401; el contenido remoto no se pudo leer. No se realizaron escrituras, no se publicaron reglas ni se inició sesión, por lo que la integración no está validada en producción.
- En navegador, la portada no presentó desbordamiento horizontal en anchos CSS de 350, 380, 1270 y 1430 px; los enlaces de WhatsApp, teléfono y catálogo apuntan a destinos válidos. El acceso al cotizador abre el asistente.
- A 380 px CSS, el área de mensajes y las opciones del asistente no se solapan; la barra móvil queda detrás del diálogo. El panel de acceso tampoco presenta desbordamiento horizontal.
- Asistente probado a 390 px y 320 px: preguntas específicas, progreso, respuestas, volver, reiniciar, avatar y separación entre mensajes/opciones; no se observó desbordamiento horizontal.
- Acción de catálogo probada a 320 px, incluyendo el botón de agregar sin que lo intercepte la barra móvil.
- Pedido probado con catálogo temporal local: validación de teléfono y compatibilidad pago/entrega; mensaje estructurado con productos, cantidades, total, envío y contacto. La apertura de WhatsApp se simuló y no se envió ningún mensaje real.
- Formulario de ajustes del panel probado en memoria: etiquetas y tipos correctos, campo numérico opcional vacío normalizado para eliminarse de Firebase, preguntas de servicio y límite de 300 productos.
- Listener de reseñas probado con un mock local: renderiza el cambio recibido y retira el callback al desuscribirse. No se conectó a Firebase real.
- La validación del emulador fue local; no se usó Rules Simulator ni se modificó Firebase remoto.

## Configuración pendiente antes de publicar

1. Confirmar que el proyecto Firebase configurado pertenece a Factor Solar y que la cuenta de Authentication tiene el UID indicado.
2. Si la base de datos se dedica a Factor Solar, reemplazar las reglas de Firebase Console por el archivo completo `firebase/rules.solar.json`; si comparte rutas, fusionar solo su objeto `solar`. Probar la lectura de contenido público, escrituras autenticadas del panel, incrementos públicos de contadores y denegación de lectura pública de estadísticas. La lectura pública de estadísticas debe seguir restringida.
3. Importar `firebase/seed-solar.json` solo si `/solar` está vacío y respaldado.
4. Confirmar en Cloudinary que `dkszomv2f` y el preset `aniquilador` permitan las cargas unsigned requeridas y tengan las restricciones esperadas. No se realizaron cargas reales.
5. Definir el dominio y sustituir los valores de ejemplo de canonical, Open Graph y sitemap.
6. Completar razón social y RUT, definir plazos de conservación, validar ambos textos legales con asesoría chilena y revisar que los precios al consumidor informen el total aplicable antes de aceptar pedidos.
7. Probar inicio de sesión y operaciones reales del panel con la cuenta autorizada.

La marca SVG es una adaptación vectorial de la referencia adjunta; no se recibió un archivo original del logo separado. La configuración por sí sola no certifica que el proyecto Firebase sea el correcto, que el UID exista en Authentication, que las reglas remotas estén desplegadas ni que Cloudinary permita cargas. Los textos legales son borradores, no una garantía de cumplimiento.
