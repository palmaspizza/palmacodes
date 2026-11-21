# Factor Solar Chile

Sitio estático en HTML, CSS y JavaScript, con panel de administración, catálogo, solicitudes por WhatsApp y contenido Firebase. No requiere una etapa de compilación.

## Archivos principales

- `index.html`: sitio público y flujos de consulta.
- `admin.html`: panel privado de contenido.
- `icons.js`: iconos SVG.
- `firebase/seed-solar.json`: datos iniciales bajo `/solar`.
- `firebase/rules.solar.json`: reglas completas de Realtime Database, listas para pegar en Firebase Console.
- `docs/`: notas de implementación y verificación para el equipo.

Los bocetos, la propuesta y el texto de requisitos son material de referencia; las reglas de despliegue evitan publicarlos junto al sitio.

## Preparación de Firebase

1. Confirma en Firebase Console que el proyecto `elaniquiladordehambre-5d19c` y su Realtime Database pertenecen a Factor Solar. Habilita Authentication con correo y contraseña y verifica que la cuenta autorizada tenga el UID configurado en el panel.
2. La configuración web de Firebase ya está en `index.html` y `admin.html`. Estos identificadores son visibles en el navegador; no son contraseñas. Nunca agregues claves privadas ni archivos de cuenta de servicio al sitio.
3. En Firebase Console, exporta las reglas actuales antes de editarlas. Si esta base de datos se usa exclusivamente para Factor Solar, reemplaza el contenido del editor de Rules con el archivo completo `firebase/rules.solar.json`; incluye la propiedad raíz `rules` que exige Firebase Console. Si la base de datos comparte rutas con otras aplicaciones, conserva sus reglas y fusiona solo el objeto `solar` dentro de la propiedad `rules` existente.
4. Las reglas autorizan al UID de administración configurado a editar el contenido. La escritura de `contract/modules` queda bloqueada porque no se proporcionó un UID de desarrollador; no cambies esa regla para hacer pruebas.
5. Publica las reglas desde Firebase Console y comprueba el resultado en Rules Simulator. El archivo local no actualiza por sí solo el proyecto remoto. Las lecturas públicas de contenido, las escrituras autenticadas, los contadores anónimos y las denegaciones deben probarse antes de publicar.
6. Importa `seed-solar.json` en `/solar` solo si confirmaste que esa ruta está vacía y respaldaste cualquier contenido existente. Nunca importes sobre la raíz de la base ni sobre nodos de otras aplicaciones.

El archivo completo bloquea por defecto las rutas distintas de `solar`; reemplazar las reglas existentes puede retirar permisos de otras aplicaciones que compartan la base de datos. Verifica cada ruta y UID en el simulador antes de publicar.

## Exploración del catálogo

El sitio muestra seis productos inicialmente. **Explorar catálogo completo** abre un selector accesible para elegir una o varias categorías; después muestra solo los productos de esa selección y permite revelar seis más por vez. Las imágenes de las fichas que no están en pantalla no se agregan al DOM y las visibles usan carga diferida, lo que limita las descargas de imágenes de Cloudinary.

La selección de categorías y la paginación son actualmente del lado del navegador: el sitio todavía lee la colección completa de productos de Realtime Database al actualizar los datos. Por eso esta interfaz reduce tarjetas e imágenes descargadas, pero no reduce por sí sola el volumen inicial de datos de Firebase. El panel limita el catálogo a 300 productos; Realtime Database Rules no ofrece un contador de hijos, así que este máximo no queda impuesto por el servidor y una escritura directa con la cuenta autorizada podría excederlo. Una reducción real de lecturas de Firebase requeriría consultas remotas por categoría y una estrategia de paginación compatible con el orden del catálogo y los productos que ya están en el carrito.

## Cloudinary

Configura un preset unsigned `aniquilador` restringido a la carpeta `factor-solar`, con formatos JPG, PNG, WebP y AVIF, tamaño máximo de 10 MB, nombres únicos, sin sobrescritura y sin transformaciones de subida pesadas. El nombre del preset es público y sus restricciones son importantes.

El panel queda configurado con `cloudName: dkszomv2f` y `uploadPreset: aniquilador` en `CONFIG`; confirma en Cloudinary que el preset permita las cargas unsigned requeridas antes de publicar. El panel admite hasta 300 productos y muestra 30 por página. Cada ficha admite cinco imágenes (principal más cuatro adicionales), valida archivos y los comprime a WebP antes de subir. Las imágenes de productos se cargan de forma diferida y usan transformaciones de tamaño/calidad. El catálogo no aumenta el presupuesto de cargas multimedia; vigila las lecturas de Firebase y el uso de la cuenta del proveedor.

Como salvaguarda adicional, el panel bloquea cargas hasta que un administrador registre el uso actual de la cuenta en el resumen. Después aplica un máximo acumulado de 100 imágenes y 40 MiB de presupuesto reservado; cada archivo se limita a 10 MB y 25 MP y se comprime a un máximo de 384 KiB antes de subir. Cada carga reserva tres veces el tamaño optimizado para contemplar el original y dos variantes de entrega. El registro es acumulativo y no se reduce al reemplazar o borrar una referencia, para no asumir que Cloudinary borró el original. Si los contadores no se inicializan, no están disponibles o alcanzan el tope, la subida se detiene. Es posible registrar hasta 300 productos y reutilizar las mismas imágenes; el número de fichas no equivale al número de cargas.

Antes de habilitar cargas, limita también el preset unsigned en Cloudinary (carpeta `factor-solar`, formatos permitidos, tamaño máximo de 10 MB y sin sobrescritura) y registra allí el almacenamiento y número de imágenes que ya utiliza toda la cuenta. El límite interno no puede contar actividad que se realice directamente en Cloudinary fuera del panel, ni impedir que un administrador cambie el preset. Solo permite JPG, PNG, WebP y AVIF para este flujo; el panel no sube video.

Un preset unsigned y su `cloudName` son públicos en un sitio estático: el contador protege el flujo normal del panel, pero no es una barrera contra cargas directas que lo eviten. Para imponer un límite técnico frente a terceros se necesita una función backend que firme cada carga o desactivar las cargas unsigned; no se puede guardar una clave secreta en estos HTML. Mantén el preset restringido y el método de pago desactivado.

El sitio usa variantes públicas acotadas a dos anchuras de imagen (160 y 960 px), conserva la caché local de contenido por versión y limita las colecciones para reducir lecturas y transformaciones. Estas defensas no son un medidor de créditos mensual ni pueden garantizar que el tráfico externo permanezca bajo el cupo de descarga: revisa las métricas de Cloudinary y Firebase. No adjuntes un método de pago ni cambies el proyecto Firebase a Blaze si necesitas mantener la restricción de costo cero; en Spark, alcanzar una cuota puede interrumpir lecturas o escrituras en vez de generar una factura.

## Publicación en Cloudflare Pages

Publica `panelsolar` como raíz estática en Cloudflare Pages. No se necesita un comando de build. `_redirects` configura `/admin` y `/qr` y evita servir archivos de trabajo, reglas y documentación interna. `_headers` añade cabeceras de seguridad; la política CSP está en modo report-only y debe revisarse con las integraciones finales antes de hacerla obligatoria.

Después de publicar:

- Sustituye `factor-solar.example` en canonical/Open Graph/sitemap por el dominio definitivo.
- Comprueba `/`, `/admin`, `/qr`, `/404.html`, la carga de imágenes y las reglas de Firebase.
- Confirma la razón social y el RUT legal del titular, revisa los textos de [privacidad](./privacidad.html) y [términos](./terminos.html) con asesoría chilena y define los plazos de conservación de mensajes y solicitudes.
- Revisa que los importes mostrados a consumidores comuniquen el precio total aplicable, impuestos y cargos antes de aceptar un pedido. La etiqueta «+ IVA» debe validarse para el modelo de venta y normativa aplicable.
- Introduce una URL HTTPS real en el generador QR y verifica que el código abre el destino esperado.
- Configura correo/dominio y los datos comerciales definitivos desde el panel.

## Prueba local

En PowerShell desde esta carpeta:

```powershell
python -m http.server 8765
```

Abre `http://127.0.0.1:8765/`. La administración y las lecturas/escrituras Firebase requieren configuración externa; nunca uses credenciales de otro cliente para una prueba local.

## Límites deliberados

- El inventario comienza vacío; no se crean precios, productos, proyectos ni reseñas ficticios.
- Las imágenes y el video de portada son campos vacíos reemplazables desde el panel.
- Los pedidos y consultas se preparan en WhatsApp; el sitio no procesa pagos ni guarda datos personales de esos formularios.
- El panel permite configurar una introducción y hasta cinco preguntas por servicio para que cada consulta llegue con contexto.
- En Ajustes se pueden activar los campos de contacto del asistente y del cotizador; los campos que no están habilitados no se solicitan.
- El acceso al panel solo funciona después de completar Firebase, UID y reglas; no se incluyen credenciales reales en el repositorio.
