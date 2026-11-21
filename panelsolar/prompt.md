# ESPECIFICACIÓN MAESTRA — SITIO Y PANEL DE FACTOR SOLAR CHILE

Documento único de referencia. Léelo completo antes de escribir una sola línea de código. Todo lo que está aquí fue acordado con el cliente. Lo que no esté aquí no se inventa.

---

## 0. CÓMO TRABAJAR (instrucciones para la IA)

### 0.1 Tu rol
Actúa como un equipo senior: arquitecto de software web, desarrollador frontend experto en HTML/CSS/JavaScript vanilla, diseñador UX/UI de interfaces comerciales premium, especialista en Firebase Realtime Database y Authentication, y especialista en accesibilidad, rendimiento y seguridad web.

### 0.2 Qué debes entregar
Tomar el boceto existente (carpeta `referencias/boceto/`) y convertirlo en el producto final descrito aquí: **sitio público + panel administrativo**, con diseño profesional, sin errores, cubriendo los problemas y casos borde del catálogo de la sección 9. El objetivo es que quede listo para publicar con el primer prompt, salvo lo que dependa de datos o cuentas externas (marcado como "paso manual" en el README).

### 0.3 Reglas de oro
1. **Un solo origen de verdad:** este documento. Si algo no está claro, elige la opción más segura y simple, y regístrala en `docs/SUPUESTOS.md`. No te detengas a preguntar salvo que algo bloquee de verdad.
2. **No inventar nada del negocio:** ni precios, ni productos, ni fotos, ni certificaciones, ni garantías, ni estadísticas, ni testimonios, ni cantidades de proyectos, ni plazos. Si falta un dato, usa un espacio provisional elegante y editable desde el panel.
3. **Sin emojis como iconos de interfaz.** Todos los iconos son SVG (`icons.js`). En los mensajes de WhatsApp tampoco se usan emojis.
4. **Sin frameworks ni librerías de interfaz:** HTML5, CSS3 y JavaScript vanilla. La única excepción permitida es el generador de QR (sección A-21), con su licencia incluida.
5. **Los archivos de `referencias/ginkgo/` pertenecen a OTRO cliente.** Reutiliza patrones y lógica (chat en modal, rastreo de eventos, compresión de imágenes, sistema de suscripción, carrusel, reseñas, lightbox). **Nunca** copies sus textos, nombres, colores, imágenes, claves ni rutas de datos.
6. **Seguridad:** nunca insertes datos de la base de datos con `innerHTML` sin escapar. Valida todas las URLs (solo `https:`). No guardes datos personales de clientes finales en ningún sitio. No dejes contraseñas ni claves privadas en el código.
7. **No afirmes pruebas que no ejecutaste.** En el informe final separa claramente: verificado, revisado estáticamente y no probado.
8. **Código limpio:** nombres legibles (el boceto usa ids de dos letras; refactoriza a nombres claros), comentarios en español donde aporten, funciones pequeñas y reutilizables, `const`/`let`, sin `eval`, sin código duplicado.

### 0.3 bis Qué NO debe aparecer nunca en el sitio ni en el panel
- Nada sobre el desarrollador salvo un crédito discreto opcional ("Desarrollado por Palma Codes", activable desde la configuración).
- Nada sobre impuestos del desarrollo, inicio de actividades, edad o condición de estudiante del desarrollador.
- Nada de precios del desarrollo del sitio. Los precios de la tienda son de Factor Solar y se muestran **más IVA**.
- Ninguna pasarela de pago ni lenguaje que sugiera compra o pago confirmado automáticamente.
- Ninguna promesa de ahorro garantizado, autonomía energética garantizada, plazos de instalación ni seguridad absoluta.

### 0.4 Plan de ejecución (en este orden)
| Fase | Qué hacer | Resultado |
|---|---|---|
| 0 | Leer este documento, el boceto y los archivos de referencia. Escribir `docs/AUDITORIA.md` con cada problema encontrado en el boceto (sección 3) y cómo lo corregirás. | Auditoría |
| 1 | Cimientos: tokens de diseño, `icons.js` ampliado, capa de datos con caché, utilidades (escape, formato CLP, validadores, WhatsApp). | Base común |
| 2 | Sitio público `index.html` (sección 5), con datos de respaldo para que nunca se vea vacío. | Sitio |
| 3 | Asistentes en chat (sección 6). | Chats |
| 4 | Panel `admin.html` (sección 7). | Panel |
| 5 | Reglas de Firebase, `seed-solar.json`, `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, `404.html`, README (secciones 8, 10, 11). | Infraestructura |
| 6 | Revisión final línea por línea contra la sección 12. Corregir. Escribir `docs/INFORME_FINAL.md`. | Cierre |

**Si se agota tu capacidad de respuesta,** detente al terminar una fase completa y escribe `docs/PROGRESO.md` con lo hecho, lo pendiente y el siguiente paso exacto. Nunca dejes una fase a medias ni archivos rotos.

### 0.5 Documentos que debes generar
`docs/AUDITORIA.md`, `docs/SUPUESTOS.md`, `docs/INFORME_FINAL.md`, `README.md` (pasos manuales para el desarrollador), `firebase/rules.solar.json`, `firebase/seed-solar.json`.

---

## 1. DATOS REALES DEL CLIENTE

| Dato | Valor |
|---|---|
| Nombre comercial | Factor Solar Chile |
| Responsable | Fabián Alarcón Soto |
| Eslogan | "Energía al alcance de todos" |
| Experiencia | 15 años |
| Cobertura | Santiago y regiones de Chile |
| Equipo | 2 técnicos autorizados |
| Dirección | El Mirador 30037, Pudahuel |
| Correo | fabian.alarconsoto@gmail.com |
| WhatsApp comercial y teléfono | +56 9 6504 8155 (formato internacional sin signo: `56965048155`) |
| Facebook | Tiene cuenta; el enlace está pendiente (campo vacío, editable desde el panel) |
| Horario | Lunes a viernes 09:00–18:00. Sábado 10:00–14:00. Domingo cerrado |
| Zona horaria para el horario | `America/Santiago` |
| Tipos de cliente | Hogares, condominios, empresas, agricultura, industria |
| Sistemas | On-Grid y Off-Grid |

**Historia (base para "Quiénes somos", sin agregar hechos):** Factor Solar tiene 15 años de experiencia ofreciendo soluciones energéticas. Su historia se basa en acercar la energía solar a las familias, con instalaciones confiables, asesoramiento técnico y acompañamiento durante la vida útil de los proyectos. No se limita a vender paneles: diseña soluciones adaptadas a hogares, empresas y otros clientes. Combina experiencia, compromiso humano, conocimiento técnico y soluciones duraderas.

**Servicios solares:** venta e instalación de kits fotovoltaicos; instalaciones solares; mano de obra especializada; proyectos On-Grid; proyectos Off-Grid.

**Servicios eléctricos:** tableros de fuerza y control; bancos de condensadores fijos y automáticos; electricidad domiciliaria; domótica; instalación de cámaras de seguridad; certificaciones eléctricas TE1 y TE4.

**Tienda:** entre 10 y 30 productos. Categorías iniciales: "Kits fotovoltaicos con instalación", "Productos solares", "Mano de obra", "Certificaciones". Precios **más IVA**. No se muestra stock ni "agotado". Entrega: delivery o envío por pagar (Starken, Chilexpress u otra empresa). Pago: transferencia, efectivo, link de pago, pago contra entrega (cuando corresponda). Datos del carrito: nombre, teléfono, dirección, comuna, correo, RUT, comentarios (cada uno activable desde el panel).

**Proyectos:** entre 5 y 15 para mostrar. **Materiales aún no entregados:** logo, imagen principal, fotos de productos y de proyectos, foto del equipo o local, certificados. Hasta que lleguen: espacios provisionales (sección 4.9).

**Pregunta frecuente obligatoria (texto por defecto):** "¿Puede un sistema solar mantener funcionando una casa completamente autónoma?" Respuesta: depende del consumo eléctrico, la capacidad de generación, el dimensionamiento del sistema, el almacenamiento en baterías y las condiciones de instalación y del lugar. No se promete autonomía sin una evaluación técnica; Factor Solar evalúa cada caso.

---

## 2. ARQUITECTURA

### 2.1 Archivos
```
/
  index.html              Sitio público (HTML + CSS + JS integrados)
  admin.html              Panel privado (HTML + CSS + JS integrados)
  icons.js                Librería de iconos SVG (ampliar la del boceto)
  404.html                Página de error con marca
  robots.txt  sitemap.xml  _headers  _redirects
  firebase/rules.solar.json    seed-solar.json
  docs/  (AUDITORIA, SUPUESTOS, PROGRESO, INFORME_FINAL)
  referencias/boceto/    (solo lectura)
  referencias/ginkgo/    (solo lectura, OTRO cliente)
  README.md
```
Hosting: Cloudflare Pages (estático). Sin backend propio. Sin Cloud Functions.

### 2.2 Servicios
- **Firebase Realtime Database (plan Spark)** y **Firebase Authentication (correo y contraseña)**. El proyecto de Firebase **ya existe y lo usa otra aplicación**: todos los datos de Factor Solar viven bajo el nodo `/solar`. Nunca leas ni escribas fuera de `/solar`. Las reglas de seguridad se **combinan** con las existentes; jamás las reemplaces completas.
- **Cloudinary:** subida con preset *unsigned*. Nada de claves secretas en el cliente.
- Límites a respetar (planes gratuitos): Firebase Spark permite 100 conexiones simultáneas, 1 GB almacenado y 10 GB de descarga al mes, **compartidos con la otra aplicación del proyecto**; Cloudinary gratis da 25 créditos mensuales (almacenamiento + ancho de banda + transformaciones). Por eso: lecturas con caché, imágenes comprimidas antes de subirlas y nada de listeners permanentes en el sitio público (ver P-01).

### 2.3 Módulos contratados (banderas)
Todo se construye completo, pero cada módulo se puede apagar, porque el cliente puede contratar menos. Las banderas viven en `/solar/contract/modules` y **solo las escribe el desarrollador** (reglas). El sitio y el panel leen las banderas: un módulo apagado no se muestra ni en el sitio ni en el panel.

Claves: `catalog`, `cart`, `gallery`, `carousel`, `reviews`, `stats`, `qr`, `assistant`, `quote`, `cloudinary`, `adminPanel`.

Dependencias que debes imponer en código y en el panel del desarrollador: `cart` requiere `catalog`; `catalog`, `carousel`, `reviews`, `stats` y `cloudinary` requieren `adminPanel`; `qr` requiere `assistant`. `quote` y `assistant` son independientes entre sí. Si una bandera dependiente está activa sin su requisito, trátala como apagada y avisa en consola.

**Anexo A (rellenar por el desarrollador antes de publicar):** por defecto todas en `true`.

### 2.4 Fuentes
Sora (títulos) y DM Sans (texto) desde Google Fonts con `display=swap` y pila de respaldo `system-ui`. La página debe verse bien aunque no carguen.

---

## 3. AUDITORÍA DEL BOCETO — QUÉ REVISAR Y CORREGIR

Produce `docs/AUDITORIA.md` con cada hallazgo y su corrección. Como mínimo, revisa y resuelve:

| # | Hallazgo en el boceto | Corrección exigida |
|---|---|---|
| 1 | Ids y variables de dos letras, código minificado | Refactorizar a nombres legibles y estructura por módulos |
| 2 | El campo de stock y "agotado" existe | Eliminarlo del panel, del sitio y del carrito. El cliente no quiere stock visible |
| 3 | Campo "Proyectos realizados" y dato extra con cifras | Dejar vacíos por defecto; solo se muestran si el cliente los completa. Nunca valores de ejemplo |
| 4 | Lecturas con `.on("value")` permanentes en el sitio público | Cambiar a lectura única con caché y revisión de `meta/updatedAt` (P-01), por el límite de 100 conexiones compartidas |
| 5 | Etiquetas Open Graph que se llenan con JavaScript | Los rastreadores de WhatsApp y Facebook no ejecutan JavaScript: las etiquetas OG deben estar fijas en el HTML (P-21) |
| 6 | Uso de `confirm()` nativo al eliminar | Reemplazar por modal propio accesible |
| 7 | Cotizador como formulario simple | Reemplazar por los asistentes en chat (sección 6) |
| 8 | Eliminar borra de forma definitiva | Productos, servicios y proyectos: "Archivar" (campo `active:false`) como acción principal; eliminar definitivo con doble confirmación |
| 9 | Guardado sin aviso de cambios pendientes | Estado "sin guardar" y aviso al salir (A-26) |
| 10 | Configuración de Firebase con claves | Aceptable (son públicas por diseño) pero deben vivir en un único bloque `CONFIG` al inicio. La seguridad real son las reglas; documéntalo |
| 11 | Sin validaciones de datos en el panel | Validar números (precio con puntos y comas), longitudes, URLs y tamaños de imagen |
| 12 | Sin manejo de errores de red o Firebase | Estados de carga, error y reintento en todo el sitio y el panel (P-20) |
| 13 | Sin SEO, sin 404, sin cabeceras de seguridad | Secciones 5 (P-21), 10 y 11 |
| 14 | Colores del tema editables sin control de contraste | Protección de contraste en el panel (A-07) |
| 15 | Sin copia de seguridad | Exportación manual a JSON (A-23). No prometer respaldos automáticos |

Revisa además todo el código del boceto buscando errores lógicos, de accesibilidad, de seguridad (XSS) y de móvil, y documenta lo que encuentres.

---

## 4. SISTEMA DE DISEÑO (sitio y panel)

Objetivo: aspecto de agencia tecnológica premium, sobrio, limpio y confiable. Energético sin parecer plantilla. Mobile-first real.

### 4.1 Tokens (variables CSS en `:root`, todos sobrescribibles desde `config/theme`)
- **Color de marca por defecto:** amarillo sol `#F5B800` (acciones y acentos), negro azulado `#0B0F14` (fondos oscuros), grises neutros, blanco. El sitio público usa un diseño **claro con secciones oscuras de contraste** (hero y banda solar oscuros; el resto claro). El panel usa tema claro con soporte `prefers-color-scheme: dark`.
- Tokens obligatorios: `--c-primary`, `--c-accent`, `--c-bg`, `--c-surface`, `--c-text`, `--c-muted`, `--c-line`, `--c-ok`, `--c-warn`, `--c-danger`, más sus variantes `-contrast` (texto sobre ese color). Calcula el texto de contraste automáticamente por luminancia.
- Escala de espacio base 4 px (4, 8, 12, 16, 24, 32, 48, 64, 96). Radios: 8, 12, 16, 24, 999. Sombras en 3 niveles, suaves. Ancho máximo de contenido 1200 px.
- Movimiento: duraciones 150, 250 y 400 ms, curva `cubic-bezier(.2,.8,.2,1)`. Todo respeta `prefers-reduced-motion` (sin autoplay, sin parallax, transiciones mínimas).
- Breakpoints: 360, 480, 768, 1024, 1280. Diseña primero para 360 px de ancho.

### 4.2 Tipografía
Títulos Sora 700 con `letter-spacing:-0.02em`; texto DM Sans 400/500/600. Escala fluida con `clamp()`: h1 `clamp(2rem,6vw,3.75rem)`, h2 `clamp(1.6rem,4vw,2.5rem)`, h3 1.25rem, texto 1rem (nunca menor a 16 px en móvil), pequeño 0.875rem. Interlineado 1.6 en texto, 1.15 en títulos. Máximo 68 caracteres por línea.

### 4.3 Componentes base (reutilizables, con estados)
Botón primario, secundario, fantasma y peligro (estados: normal, hover, foco visible, activo, deshabilitado, cargando con spinner). Tarjetas con borde sutil y elevación al pasar el cursor. Campos de formulario con etiqueta visible, ayuda, error en línea y estado de éxito. Chips, insignias, interruptores, pestañas, acordeones, modales, cajones laterales, toasts, esqueletos de carga, estados vacíos con icono y acción, tooltips accesibles.

### 4.4 Interacción
Zonas táctiles mínimas de 44×44 px. Foco visible de 3 px con alto contraste en todo elemento interactivo. Nada depende solo de `:hover`. Transiciones suaves y discretas; sin animaciones que distraigan.

### 4.5 Iconografía (`icons.js`)
Trazo 1.75, viewBox 24, `currentColor`, esquinas redondeadas. API: `icon('nombre', tamaño)` devuelve un string SVG con `aria-hidden="true"`. Amplía el set del boceto sin romper los nombres existentes. Debe incluir como mínimo: bolt, sun, panel, battery, inverter, plug, home, building, factory, leaf, shield-check, camera, cpu, clipboard-check, wrench, truck, bank, cash, link, phone, mail, map-pin, clock, whatsapp, facebook, instagram, cart, plus, minus, trash, close, menu, search, filter, chevron-down, chevron-left, chevron-right, arrow-right, check, info, alert, star, image, upload, lock, key, eye, eye-off, chart, qr, download, copy, edit, calendar, archive, drag, refresh, external-link, undo. El panel permite elegir el icono de cada servicio entre los disponibles.

### 4.6 Accesibilidad (WCAG 2.1 AA)
HTML semántico (`header`, `nav`, `main`, `section`, `footer`), un solo `h1`, jerarquía correcta, enlace "Saltar al contenido", `lang="es-CL"`, etiquetas asociadas a todos los campos, `aria-live` para avisos dinámicos (carrito, errores, chat), modales con `role="dialog"`, `aria-modal`, foco atrapado y devuelto al cerrar, cierre con Esc, navegación completa por teclado, contraste mínimo 4.5:1, imágenes con `alt` (decorativas con `alt=""`).

### 4.7 Rendimiento
Imágenes con `loading="lazy"`, `decoding="async"`, dimensiones o `aspect-ratio` para evitar saltos de diseño, URLs de Cloudinary con `f_auto,q_auto` y ancho adecuado. `preconnect` a Google Fonts, Firebase y Cloudinary. Sin librerías pesadas. Objetivo Lighthouse móvil: Rendimiento ≥ 90, Accesibilidad ≥ 95, Buenas prácticas ≥ 95, SEO ≥ 95 (si no puedes medirlo, dilo en el informe).

### 4.8 Responsive
Sin desbordamiento horizontal jamás. Márgenes de seguridad `env(safe-area-inset-*)`. Tablas y listas largas se reorganizan en tarjetas en móvil. `viewport` con `viewport-fit=cover`. `-webkit-text-size-adjust:100%`. Campos de entrada con 16 px de fuente (evita zoom en iOS).

### 4.9 Espacios provisionales de imagen
Mientras falten fotos: contenedores con la proporción correcta, fondo con degradado de marca y patrón sutil, icono SVG y una etiqueta como "Foto del proyecto pendiente". Deben reemplazarse solos al cargar la imagen real desde el panel. Prohibido usar fotos de stock que parezcan trabajos reales de Factor Solar o personas que aparenten ser el equipo.

---

## 5. SITIO PÚBLICO (`index.html`) — MÓDULO POR MÓDULO

El sitio es una sola página con secciones, leída desde Firebase bajo `/solar`, con contenido de respaldo incluido en el HTML para que nunca se vea vacío. Cada sección se puede ocultar desde el panel (`config/sections`).

### P-01 Capa de datos y caché
- Al cargar: leer una sola vez `solar/meta/updatedAt` (dato mínimo). Comparar con el valor guardado en `localStorage` (`fs_meta`). Si cambió o no hay caché, leer `config`, `services`, `categories`, `products`, `projects`, `faq`, `carousel`, `reviews`, `quoteRanges` y `contract` con lectura única y guardar en caché con marca de tiempo. Si no cambió, usar la caché.
- **Mostrar siempre primero lo que haya en caché** (renderizado inmediato) y refrescar en segundo plano.
- Sin listeners `.on()` permanentes: el sitio público no debe mantener conexiones abiertas.
- Si Firebase falla o hay modo sin conexión: usar caché; si no hay caché, usar los datos de respaldo del HTML. Mostrar un aviso discreto "Mostrando información guardada" con botón "Reintentar".
- Convertir colecciones (objetos por id) en listas ordenadas por `order`. Ignorar elementos con `active === false`.
- Si `localStorage` no está disponible, trabajar en memoria sin errores.

### P-02 Tema dinámico
Aplicar `config/theme` a las variables CSS. Si el contraste entre un fondo y su texto es menor a 4.5:1, ajustar automáticamente el color de texto (blanco o casi negro) y registrar un aviso en consola.

### P-03 Cabecera y navegación
- Cabecera fija con fondo translúcido y desenfoque, que gana sombra al hacer scroll.
- Izquierda: logo (imagen del panel; si falta, monograma con las iniciales sobre degradado de marca) y nombre "Factor Solar Chile".
- Centro (escritorio): enlaces de las secciones visibles con resaltado de la sección actual (IntersectionObserver).
- Derecha: botón "Cotizar" (abre el chat; solo si el módulo está activo) y botón de carrito con insignia de cantidad (solo si `cart` está activo).
- Móvil: botón de menú que abre un cajón a pantalla completa con enlaces grandes, el botón de WhatsApp y los datos de contacto. Cierra con Esc, al tocar fuera o al elegir un enlace. Foco atrapado.
- Desplazamiento suave a las secciones con compensación de la cabecera fija.

### P-04 Portada (hero)
- Fondo oscuro con degradado de marca y trama sutil. Si hay imagen principal, se usa con superposición oscura para legibilidad; si no, composición gráfica con icono grande de sol y líneas de energía en SVG.
- Contenido: título (`texts/heroTitle`), subtítulo (`texts/heroSub`), eslogan "Energía al alcance de todos", dos botones: principal "Cotizar mi proyecto" (abre el cotizador solar o, si no está contratado, el asistente, o WhatsApp directo) y secundario "Ver productos" o "Ver servicios" según lo activo.
- Debajo, la barra de confianza (P-05).
- Textos por defecto (editables): título "Energía solar y soluciones eléctricas para tu hogar y tu empresa"; subtítulo "15 años de experiencia instalando sistemas fotovoltaicos y soluciones eléctricas en Santiago y regiones." Sin cifras de ahorro.
- Si el carrusel está activo y tiene imágenes, el hero puede mostrar el carrusel (P-04b).

### P-04b Carrusel de trabajos destacados
- Imágenes con título y subtítulo opcionales y enlace opcional a una sección.
- Controles: flechas, indicadores, deslizamiento táctil, teclado (flechas). Autoplay cada 6 s que se **pausa** al pasar el cursor, al enfocar y cuando la pestaña no está visible. Sin autoplay con `prefers-reduced-motion`.
- Estructura accesible: `role="region"`, `aria-roledescription="carrusel"`, cada diapositiva con `aria-label="1 de N"`.
- Con una sola imagen: sin controles. Sin imágenes: el módulo no se muestra.

### P-05 Barra de confianza
Chips con icono y texto tomados **solo de datos reales**: "15 años de experiencia" (`config/years`), "2 técnicos autorizados", "Santiago y regiones", "Soluciones On-Grid y Off-Grid". Los dos primeros se muestran solo si el valor existe en la configuración. Cualquier otro dato extra solo aparece si el cliente lo completa en el panel.

### P-06 Quiénes somos
Texto (`texts/aboutTitle`, `texts/aboutText`) con la historia de la sección 1, imagen (`aboutImg`; provisional si falta), y tarjetas de diferenciadores con icono: 15 años de trayectoria, 2 técnicos autorizados, asesoramiento técnico personalizado, soluciones On-Grid y Off-Grid, para casas, condominios, empresas, agricultura e industria. Los tipos de cliente se muestran como chips con icono (casa, edificio, hoja, fábrica).

### P-07 Servicios
- Grilla responsive (1 columna en móvil, 2 en tablet, 3 en escritorio) de tarjetas: icono grande en círculo de marca, título, descripción corta y enlace "Consultar" que abre el asistente con ese servicio preseleccionado.
- Agrupación visual en dos bloques: **Servicios solares** y **Servicios eléctricos** (campo `group` del servicio).
- Servicios iniciales (títulos reales, descripciones a revisar por el cliente): Venta e instalación de kits fotovoltaicos; Instalaciones solares; Proyectos On-Grid; Proyectos Off-Grid; Mano de obra especializada; Tableros de fuerza y control; Bancos de condensadores fijos y automáticos; Electricidad domiciliaria; Domótica; Instalación de cámaras de seguridad; Certificaciones eléctricas TE1 y TE4.
- Pequeña explicación inline de On-Grid y Off-Grid en lenguaje simple (acordeón o ficha): On-Grid, conectado a la red eléctrica; Off-Grid, funciona de forma independiente con baterías. Sin prometer autonomía.

### P-08 Banda del cotizador solar
Banda oscura de ancho completo con título "Cuéntanos tu proyecto solar", texto breve, lista de lo que se necesita para evaluar (boleta de luz, espacio para paneles, espacio para el inversor, tipo de sistema, necesidad de baterías) con iconos, y botón "Iniciar cotización" que abre el chat del cotizador (C-02). Solo si `quote` está activo.

### P-09 Productos (catálogo)
Solo si `catalog` está activo y hay productos activos; si no hay productos, la sección muestra "Consulta por nuestros productos" con botón de WhatsApp.
- **Barra de herramientas:** pestañas de categorías (con "Todos"), búsqueda con filtrado inmediato (ignora tildes y mayúsculas) y orden (relevancia, precio menor a mayor, mayor a menor). Contador "N productos". En móvil las categorías hacen scroll horizontal sin desbordar la página.
- **Tarjeta de producto:** imagen cuadrada (provisional si falta), insignia opcional ("Con instalación" si `includesInstallation`, "Destacado" si `featured`), nombre, descripción corta (máx. 2 líneas), precio con formato CLP y la leyenda **"+ IVA"**, botón "Agregar al carrito" (si `cart` activo) o "Consultar" (WhatsApp con el producto), y enlace "Ver detalle".
- **Precio vacío:** se muestra "Cotizar"; el botón pasa a "Consultar por WhatsApp" y el producto no se agrega al total.
- **Ficha de detalle (modal):** galería de hasta 5 imágenes con miniaturas, nombre, categoría, precio + IVA, descripción larga, lista de especificaciones (pares nombre y valor), qué incluye, selector de cantidad, botón "Agregar al carrito" y "Consultar por WhatsApp". Enlace profundo `#producto-ID` que abre la ficha. Cierre con Esc y foco devuelto.
- **Formato de precio:** `$1.234.567` (separador de miles con punto). Nunca decimales.
- **Nota fija bajo el catálogo:** "Los precios son referenciales y se muestran más IVA. La compra se confirma por WhatsApp; no se realizan pagos en este sitio."
- Sin stock, sin "agotado".

### P-10 Carrito de compras (cajón lateral) y pedido
Solo si `cart` activo.
- **Cajón lateral** (a pantalla completa en móvil) que se abre con el botón del carrito o al agregar un producto (con toast "Agregado al carrito" que no tapa el botón). Foco atrapado, Esc cierra.
- **Líneas:** imagen miniatura, nombre, precio unitario + IVA, selector de cantidad (botones menos y más, mínimo 1, máximo 99, también editable a mano con validación), subtotal de la línea, botón eliminar con icono y `aria-label`.
- **Totales:** subtotal de líneas con precio; si hay líneas "a cotizar", avisarlo ("N producto(s) se cotizan por WhatsApp"). Total "más IVA". No calcular ni mostrar el IVA como cifra, salvo que el cliente lo active desde el panel (`cartShowIva`, por defecto apagado).
- **Persistencia:** `localStorage` (`fs_cart`) con versión de esquema. Al abrir, reconciliar con el catálogo vigente: eliminar productos que ya no existen o están inactivos (con aviso), actualizar nombre y precio al valor vigente y avisar si un precio cambió.
- **Formulario del comprador:** los campos que el cliente haya activado desde el panel (nombre, teléfono, dirección, comuna, correo, RUT, comentarios), cada uno con etiqueta, `autocomplete` adecuado y validación en línea.
  - Teléfono chileno: acepta `9 1234 5678`, `+56 9 1234 5678`, `912345678`; normaliza a `+56 9 XXXX XXXX`.
  - RUT: acepta con o sin puntos y guion, valida dígito verificador (módulo 11) y lo formatea.
  - Correo: validación de formato razonable.
  - Comuna: campo de texto con sugerencias de las 52 comunas de la Región Metropolitana (`datalist`) y texto libre para otras regiones.
  - Nombre obligatorio; los demás obligatorios según configuración.
- **Entrega:** selector con las opciones configuradas (por defecto: "Delivery", "Envío por pagar con Starken", "Envío por pagar con Chilexpress", "Envío por pagar con otra empresa"). Si se elige envío por pagar, mostrar nota: "El costo del envío lo paga el cliente al recibir, según la tarifa de la empresa de transporte."
- **Pago:** selector con las opciones configuradas (por defecto: "Transferencia", "Efectivo", "Link de pago", "Pago contra entrega"). "Pago contra entrega" solo se ofrece cuando la entrega es "Delivery" (regla configurable por opción); si el cliente cambia la entrega y la opción deja de aplicar, deseleccionarla con aviso.
- **Botón "Enviar pedido por WhatsApp":** valida todo, y si hay errores lleva el foco al primer campo con error y lo anuncia con `aria-live`. Si todo está bien, genera el mensaje (plantilla en el Anexo C) y abre WhatsApp (C-04, con los respaldos para mensajes largos y ventanas bloqueadas). Texto bajo el botón: "Se abrirá WhatsApp con tu pedido listo. Factor Solar lo revisará y coordinará el pago y la entrega contigo."
- Tras enviar: pantalla de éxito ("Pedido enviado a WhatsApp") con opción de vaciar el carrito o conservarlo. No se guarda ningún dato personal del comprador, ni local ni remotamente (solo se recuerda el carrito).
- Carrito vacío: estado vacío con icono y botón "Ver productos".

### P-11 Proyectos (galería)
Solo si `gallery` activo y hay proyectos; si no, sección oculta.
- Grilla tipo mosaico con imágenes que respetan su proporción, título superpuesto al pasar el cursor o siempre visible en móvil, `loading="lazy"`.
- **Lightbox:** imagen grande con título y contador, flechas, deslizamiento táctil, teclado (izquierda, derecha, Esc), precarga de la siguiente imagen, cierre al tocar el fondo, foco atrapado, bloqueo del scroll del fondo. Zoom por doble toque opcional.
- Organización por proyecto: cada proyecto tiene título, descripción corta opcional, ubicación opcional (comuna) y hasta 6 fotos. La tarjeta muestra la portada y el lightbox navega por las fotos del proyecto.
- Filtro opcional por categoría de proyecto si hay más de una.

### P-12 Reseñas
Solo si `reviews` activo y hay al menos una reseña activa. **Solo se muestran las que el cliente cargó.** Tarjetas con nombre (nombre y inicial del apellido), texto, estrellas (1 a 5, con texto accesible "5 de 5"), fecha opcional y origen opcional. En móvil, carrusel táctil; en escritorio, grilla. No generar datos estructurados de calificación agregada.

### P-13 Preguntas frecuentes
Acordeón accesible (`details/summary` o botones con `aria-expanded`), una abierta a la vez opcional, búsqueda si hay más de 8 preguntas. Contenido de `faq`. Incluir por defecto la pregunta de la autonomía (sección 1) y preguntas sobre: qué necesito para cotizar, diferencia entre On-Grid y Off-Grid, cobertura, formas de pago y entrega, y cómo funciona el pedido por WhatsApp. Respuestas sin inventar cifras ni plazos.

### P-14 Contacto y ubicación
Tarjetas con icono: WhatsApp (botón), teléfono (`tel:`), correo (`mailto:`), dirección con botón "Cómo llegar" (enlace a Google Maps con la dirección codificada, sin clave de API ni mapa incrustado), y horario con una insignia **"Abierto ahora" o "Cerrado ahora"** calculada con la zona horaria `America/Santiago` (con la hora de apertura o cierre siguiente). Enlaces a Facebook (e Instagram si existe) solo si están configurados. Botón principal "Escribir por WhatsApp".

### P-15 Pie de página
Logo, eslogan, enlaces a secciones, datos de contacto, horario, redes, nota "Precios de productos más IVA", enlace "Privacidad" (P-19), año automático, crédito opcional del desarrollador (`config/showCredit`). Sin enlaces vacíos.

### P-16 Botones flotantes y barra móvil
- Botón flotante de WhatsApp (abajo a la derecha) con tooltip "Escríbenos"; respeta el área segura y no tapa el contenido importante ni el cajón del carrito.
- En móvil, barra inferior compacta con "Cotizar" y "WhatsApp" y el carrito (si está activo). Se oculta mientras hay un modal abierto.
- Si el número de WhatsApp es inválido o falta, ocultar estos botones y registrar un aviso en consola.

### P-17 Estadísticas de uso (rastreo anónimo)
Solo si `stats` activo. Eventos: `visitas`, `visitas_qr`, `chat_abierto`, `chat_completado`, `cotizador_abierto`, `cotizador_completado`, `whatsapp_click`, `carrito_agregar`, `pedido_preparado`, `ficha_producto`, `proyecto_abierto`. Se guardan como contadores diarios en `stats/AAAA-MM-DD/evento` con incremento atómico mediante `ServerValue.increment` (no transacciones que requieran lectura pública). Reglas: sin identificadores, sin IP, sin cookies; una visita por sesión (`sessionStorage`); no contar si el módulo está apagado; si la escritura falla, el sitio debe seguir funcionando y el error se registra sin datos personales. `statsProd/AAAA-MM-DD/idProducto` para fichas vistas. El sitio nunca debe romperse por un fallo del rastreo.

### P-18 Entrada por QR
- `/qr` redirige (Cloudflare `_redirects`) a `/?utm_source=qr&abrir=asistente`.
- Al cargar con `utm_source=qr`: contar `visitas_qr` (además de `visitas`), y si `abrir=asistente` y el módulo está activo, abrir automáticamente el asistente tras 600 ms. Luego limpiar los parámetros de la URL con `history.replaceState` (sin recargar). Si el asistente no está activo, abrir el cotizador o solo hacer scroll al contacto. `abrir=cotizador` abre el cotizador solar.

### P-19 Privacidad y legales mínimos
Modal "Privacidad" en lenguaje simple: el sitio no guarda datos personales de los visitantes en su base de datos; las solicitudes y los pedidos se envían por WhatsApp y los gestiona Factor Solar; se usan contadores anónimos de visitas; el carrito se guarda solo en el dispositivo del visitante; los precios de productos son más IVA y referenciales. Sin cookies de seguimiento ni analítica de terceros. Texto editable desde el panel. No presentarlo como asesoría legal.

### P-20 Estados del sitio
- **Carga:** esqueletos (skeletons) con la forma de cada sección, nunca pantalla en blanco.
- **Error de datos:** aviso discreto con reintento; el contenido de respaldo permanece visible.
- **Sin conexión:** aviso "Sin conexión" y uso de la caché.
- **JavaScript desactivado:** `<noscript>` con los datos de contacto y botón de WhatsApp.
- **Navegador antiguo:** el contenido de respaldo en HTML sigue siendo legible.
- **404:** `404.html` con marca, mensaje claro y botón "Volver al inicio".

### P-21 SEO y metadatos
- `title` y `meta description` fijos en el HTML (ejemplo: "Factor Solar Chile | Energía solar y soluciones eléctricas en Santiago y regiones").
- Etiquetas **Open Graph y Twitter fijas en el HTML** (no dependientes de JS): título, descripción, tipo, URL canónica, `og:locale es_CL`, `og:image` (marcador pendiente claramente indicado en `docs/SUPUESTOS.md`).
- `link rel="canonical"`, `theme-color`, favicon (SVG con la marca), `robots.txt`, `sitemap.xml`.
- **JSON-LD `LocalBusiness`** generado con datos reales de la configuración (nombre, teléfono, correo, dirección, horario, área de servicio, `sameAs` con redes). **Sin** calificaciones, sin precios, sin campos inventados. Actualizar el título del documento al abrir una ficha de producto.
- No prometer posicionamiento; solo buenas prácticas.

---

## 6. ASISTENTES EN CHAT — DISEÑO Y FLUJOS DETALLADOS

Hay **dos chats independientes** que comparten la misma carcasa visual y el mismo motor, y que **no dependen uno del otro**:
- **C-01 Asistente de solicitudes** (módulo `assistant`): solicitud general. No calcula precios.
- **C-02 Cotizador solar** (módulo `quote`): recopila datos técnicos y, solo si existen datos reales, muestra un rango referencial.

El motor del chat debe estar **dirigido por datos**: cada flujo es un arreglo de pasos `{id, tipo, pregunta, opciones, validar, guardar, siguiente}` para poder ajustarlos sin reescribir la lógica.

### C-00 Carcasa del chat (modal)

**Apariencia (inspirada en el chat de Ginkgo, con la identidad de Factor Solar):**
- **Escritorio:** modal flotante anclado abajo a la derecha, 400 px de ancho, alto máx. 640 px, esquinas de 20 px, sombra amplia, animación de entrada suave (sube y aparece). **Móvil:** hoja inferior (bottom sheet) a pantalla casi completa (alto `100dvh`), con asa superior, respetando áreas seguras y el teclado virtual (el campo de texto no debe quedar tapado).
- **Encabezado:** avatar circular con el logo (o monograma), nombre "Factor Solar Chile", subtítulo de estado ("Asistente virtual · te atiende por WhatsApp"), punto verde de "en línea" solo si el horario actual es de atención (si no, punto gris y "Fuera de horario"), botón de cierre (icono X). Fondo del encabezado en color de marca oscuro.
- **Barra de progreso fina** bajo el encabezado y texto "Paso 3 de 7".
- **Cuerpo:** fondo claro con trama sutil. Burbujas del asistente a la izquierda (fondo blanco, borde sutil), burbujas del usuario a la derecha (color de marca). Esquinas redondeadas, máximo 85 % de ancho, texto de 15–16 px. Indicador de "escribiendo" con tres puntos animados (500 a 900 ms antes de cada mensaje del asistente; sin retraso con `prefers-reduced-motion`).
- **Opciones rápidas:** chips/botones grandes con icono SVG (ancho completo en móvil si el texto es largo), apilados o en cuadrícula de 2 columnas cuando son cortos. Al elegir, la opción aparece como burbuja del usuario.
- **Pie con entradas de texto:** campo con etiqueta accesible, botón enviar, validación en línea con mensaje amable dentro del chat (por ejemplo "Ese teléfono no parece válido. Prueba con 9 1234 5678"). Botón secundario "Omitir" en los pasos opcionales.
- **Controles permanentes:** botón "Volver" (retrocede un paso y permite corregir), botón "Reiniciar" (con confirmación breve), cierre con Esc.
- **Lanzador:** botón circular de marca con icono de chat y etiqueta "Cotiza aquí" en escritorio; en móvil se integra a la barra inferior (P-16).
- **Accesibilidad:** `role="dialog"`, `aria-modal="true"`, `aria-labelledby`; el registro de mensajes es una región `aria-live="polite"`; foco atrapado; al abrir, el foco va al primer control; al cerrar, vuelve al lanzador; todo operable con teclado; botones con `aria-label` descriptivo.
- **Persistencia del borrador:** guardar respuestas y paso actual en `sessionStorage` para retomar si se cierra por accidente (aviso "Retomamos donde quedaste"). Se borra al enviar.
- **Horario:** si el envío ocurre fuera de horario, el resumen incluye la nota "Estamos fuera de horario. Te responderemos en el próximo horario de atención (lunes a viernes 09:00 a 18:00, sábado 10:00 a 14:00)". Calcular con `America/Santiago`.
- **Sin emojis** en la interfaz del chat ni en los mensajes.

### C-01 Asistente de solicitudes — flujo

Tono cercano, frases cortas, tuteo, sin jerga técnica. Solo se piden los datos finales activados en `config/assistantFields` (por defecto: nombre y comuna; correo, dirección y RUT apagados). **El teléfono no se pide: llega solo desde el WhatsApp del cliente.**

| Paso | Mensaje del asistente | Entrada | Notas |
|---|---|---|---|
| 1 | "Hola, soy el asistente de Factor Solar Chile. Te hago unas preguntas cortas y dejo tu solicitud lista para enviarla por WhatsApp. ¿Qué necesitas?" | Opciones generadas desde los servicios activos, agrupadas: "Energía solar", "Electricidad", "Certificaciones", "Seguridad y domótica", "Comprar productos", "Resolver una duda", "Otro" | Si el cliente elige "Energía solar" y `quote` está activo: ofrecer "Te hago las preguntas técnicas para evaluar tu proyecto solar" y lanzar C-02 |
| 2a | Solar (sin `quote`) | "¿Es para casa, condominio, empresa, campo o industria?" | Chips con iconos |
| 2b | Certificaciones | "¿Qué certificación necesitas?" Opciones: "TE1", "TE4", "No sé cuál necesito" | No explicar normativa ni plazos |
| 2c | Electricidad domiciliaria | "¿Qué necesitas?" Opciones: "Instalación nueva", "Ampliación o reparación", "Revisión por una falla", "Otro" | |
| 2d | Tableros y condensadores | "¿Qué necesitas?" Opciones: "Tablero de fuerza y control", "Banco de condensadores fijo", "Banco de condensadores automático", "No estoy seguro" | |
| 2e | Seguridad y domótica | Opciones: "Cámaras de seguridad", "Domótica", "Ambas" | |
| 2f | Comprar productos | Si `catalog` activo: "Puedes ver los productos y armar tu pedido" con botón que cierra el chat y baja al catálogo; si no, seguir como solicitud | |
| 2g | Resolver una duda | Lanzar C-03 | |
| 3 | "¿En qué comuna es?" | Texto con sugerencias de comunas; obligatorio | Si es fuera de la RM, aceptar y marcar "región" |
| 4 | "¿Cuándo lo necesitas?" | "Lo antes posible", "Este mes", "Estoy cotizando, sin apuro" | |
| 5 | "¿Quieres contarnos algo más? (opcional)" | Texto libre, máx. 300 caracteres, con contador; botón "Omitir" | |
| 6… | Datos finales: se piden solo los activados (nombre; luego correo, dirección, RUT si están activos) | Texto con validación | Un dato por mensaje; nombre mínimo 2 letras |
| Final | Resumen (C-04) | | |

### C-02 Cotizador solar — flujo

Objetivo: recopilar lo necesario para evaluar un proyecto solar. Muestra estimación **solo** si hay rangos cargados (A-19) que apliquen; si no, dice que Factor Solar evaluará el caso.

| Paso | Mensaje | Entrada | Notas |
|---|---|---|---|
| 1 | "Hola, vamos a reunir los datos para evaluar tu proyecto solar. Toma menos de 2 minutos." | Botón "Comenzar" | |
| 2 | "¿Dónde quieres instalar el sistema?" | "Casa", "Condominio o comunidad", "Empresa o comercio", "Campo o agricultura", "Industria" | Iconos |
| 3 | "¿Qué buscas?" | "Ahorrar en mi cuenta de luz (conectado a la red, On-Grid)", "Tener energía donde no hay red o como respaldo (con baterías, Off-Grid)", "No estoy seguro, necesito asesoría" | Botón "¿Qué significa cada uno?" muestra la explicación simple. Guardar `sistema` = ongrid, offgrid o asesoria |
| 4 | "¿Cuánto pagas aproximadamente de luz al mes?" | Rangos: "Menos de $30.000", "$30.000 a $60.000", "$60.000 a $100.000", "$100.000 a $200.000", "Más de $200.000", "No sé, prefiero enviar mi boleta" y campo opcional de consumo en kWh | Mostrar la nota: "Después del resumen podrás adjuntar la foto de tu boleta de luz en el chat de WhatsApp para un cálculo más preciso" |
| 5 | "¿Tienes techo o terreno disponible para los paneles?" | "Techo", "Terreno o suelo", "Ambos", "No estoy seguro" | |
| 6 | "Si lo sabes, ¿cuántos metros cuadrados aproximados tienes disponibles?" | Número 1 a 99999, opcional, con "Omitir" | Validar, rechazar negativos y decimales raros |
| 7 | Solo si eligió techo: "¿De qué material es el techo?" | "Zinc", "Teja", "Losa", "Otro", "No sé" | |
| 8 | "¿Hay un lugar protegido y cercano al tablero eléctrico para instalar el inversor?" | "Sí", "No", "No sé" | |
| 9 | Si `sistema` = offgrid o asesoria: "¿Necesitas baterías?" Si ongrid: "¿Te interesaría tener respaldo con baterías para los cortes de luz?" | "Sí", "No", "No sé" | |
| 10 | Si el cliente escribe o elige algo que sugiera autonomía total: mostrar nota "Que una vivienda sea totalmente autónoma depende del consumo, la generación, el almacenamiento y las condiciones de instalación. Lo evaluamos contigo, sin prometer de antemano." | Informativo | Detectar por la opción "Off-Grid" o palabras como "autónom", "desconect" en texto libre |
| 11 | "¿En qué comuna está el lugar?" | Texto con sugerencias | Obligatorio |
| 12 | Datos finales activados (nombre; los demás según `quoteFields`) | Texto | |
| Resumen | Tarjeta de resumen (C-04) con todas las respuestas, bloque de estimación si aplica | | |

**Estimación (opcional y estrictamente basada en datos reales):**
- Fuente: `solar/quoteRanges` (A-19). Cada rango: tipo de sistema, rango de cuenta mensual (mínimo y máximo), rango de precio (mínimo y máximo), potencia orientativa en texto y una nota.
- Lógica: buscar el primer rango activo cuyo tipo coincida y cuyo rango de cuenta contenga la selección del cliente. Si hay coincidencia, mostrar: "Rango referencial: $X a $Y más IVA. Es una orientación; el valor final depende de una visita técnica y de la evaluación de Factor Solar." Si no hay coincidencia o no hay rangos cargados, **no mostrar ninguna cifra** y decir: "Factor Solar evaluará tu caso y te enviará una cotización."
- Nunca inventar tarifas, ahorros, retornos de inversión ni potencias.

### C-03 Resolver dudas (ramal de preguntas frecuentes)
Muestra hasta 6 preguntas de `faq` como chips; al elegir una, responde dentro del chat con la respuesta y los botones "Otra pregunta", "Hablar por WhatsApp" y "Hacer mi solicitud". Si no hay preguntas cargadas, ofrece WhatsApp directo.

### C-04 Resumen, envío y respaldos
- **Tarjeta de resumen:** lista "Etiqueta: valor" de cada respuesta, con botón "Editar" por fila que vuelve a ese paso. Si hay estimación, bloque destacado. Texto: "Revisa tus datos. Al continuar se abrirá WhatsApp con tu mensaje listo para enviar."
- **Botón principal "Enviar por WhatsApp"** con icono de WhatsApp. Fondo `#25D366` con texto oscuro `#06210F` (contraste suficiente). Secundario "Copiar mensaje". Terciario "Volver a editar".
- **Apertura:** `https://wa.me/NUMERO?text=` + `encodeURIComponent(mensaje)`. Normalizar el número (solo dígitos; si tiene 9 dígitos y empieza con 9, anteponer 56). Abrir con `window.open(url, '_blank', 'noopener')`. Si el navegador bloquea la ventana, usar `location.href`.
- **Mensaje demasiado largo (URL > 1900 caracteres):** copiar el mensaje al portapapeles, avisar "Mensaje copiado: pégalo en el chat de WhatsApp" y abrir el chat sin texto.
- **Si el portapapeles falla:** mostrar el mensaje en un cuadro de texto seleccionable.
- **Éxito:** mensaje "Listo. Te estamos esperando en WhatsApp" con recordatorio de adjuntar la boleta de luz (solo en el cotizador) y botón "Cerrar". Contar el evento correspondiente (P-17). Borrar el borrador.
- **Plantillas de mensaje:** Anexo C.

---

## 7. PANEL ADMINISTRATIVO (`admin.html`) — MÓDULO POR MÓDULO

Principios: pensado para una persona **sin conocimientos técnicos**. Lenguaje simple, ayudas breves en cada campo, mensajes de error claros y amables, ninguna acción destructiva sin confirmación, siempre saber qué falta guardar. Diseño de panel moderno, limpio, claro/oscuro automático. Marcado `noindex, nofollow`. Solo se muestran los módulos contratados (`contract/modules`).

### A-01 Acceso (login), recuperación y sesión
- Pantalla de acceso centrada con logo, título "Panel de administración", campos de correo y contraseña (con botón mostrar/ocultar), casilla "Mantener sesión iniciada en este dispositivo" (si no se marca, `Persistence.SESSION`; si se marca, `LOCAL`), botón "Ingresar" con estado de carga.
- "¿Olvidaste tu contraseña?" envía correo de restablecimiento con `sendPasswordResetEmail` y muestra confirmación genérica (sin revelar si el correo existe).
- Mensajes de error traducidos: credenciales incorrectas, demasiados intentos ("Espera unos minutos e inténtalo de nuevo"), sin conexión, cuenta deshabilitada.
- Solo pueden entrar los usuarios cuyo UID esté en la lista de autorizados (`ADMIN_UIDS`: el cliente y el desarrollador). Cualquier otro usuario autenticado ve "Esta cuenta no tiene acceso" y se cierra su sesión.
- Cierre de sesión por inactividad prolongada (60 minutos) con aviso previo de 1 minuto.
- Si la sesión expira o las reglas deniegan una escritura, mostrar mensaje claro y ofrecer volver a iniciar sesión sin perder lo escrito.

### A-02 Estructura y navegación del panel
- **Escritorio:** barra lateral fija con iconos y etiquetas, agrupada: "Resumen", "Contenido" (Productos, Categorías, Servicios, Proyectos, Carrusel, Reseñas, Preguntas), "Herramientas" (Cotizador, Estadísticas, Código QR), "Sitio" (Ajustes y diseño), "Cuenta" (Suscripción, Copia de seguridad, Seguridad). **Móvil:** barra superior con menú y barra inferior con las 4 secciones más usadas (Resumen, Productos, Proyectos, Más).
- Cabecera con nombre del negocio, logo, estado de la suscripción (chip), botón "Ver mi sitio" (nueva pestaña) y menú de usuario (correo, cerrar sesión).
- Cada sección: título, descripción de una línea, acciones principales a la derecha, contenido. Migas de pan simples.

### A-03 Resumen (inicio)
Tarjetas: estado de la suscripción; cantidad de productos activos, servicios y proyectos; últimas visitas (7 días) y clics a WhatsApp si `stats` activo; accesos rápidos "Agregar producto", "Agregar proyecto", "Cambiar precios", "Ver mi sitio"; lista de pendientes inteligentes (por ejemplo "Aún no cargas el logo", "Hay 3 productos sin foto", "Falta el enlace de Facebook"). Todo calculado con datos reales.

### A-04 Ajustes: empresa
Campos: nombre del negocio, eslogan, años de experiencia (número), cantidad de técnicos (número), proyectos realizados (número, opcional y **vacío por defecto**), cobertura (texto), descripción corta para buscadores (máx. 160 caracteres con contador). Cada campo con ayuda ("Se muestra en el inicio").

### A-05 Ajustes: imágenes
Logo, imagen principal, imagen de "Quiénes somos", imagen para compartir en redes (1200×630). Cada una con vista previa, cargador (A-25), botón "Quitar" y recomendaciones de tamaño. Aviso: "Si no cargas imagen, el sitio muestra un espacio provisional."

### A-06 Ajustes: contacto y horario
WhatsApp de pedidos (valida y normaliza a `56XXXXXXXXX`; muestra "Se verá como +56 9 1234 5678" y un botón "Probar" que abre el chat), teléfono, correo, dirección, enlaces de Facebook e Instagram (validan `https://`), **horario por día** con editor (día, abre, cierra, o "Cerrado"; admite un solo tramo por día), opción "Mostrar insignia Abierto ahora".

### A-07 Ajustes: diseño (colores)
Selectores de color (principal, acento, fondo, texto) con vista previa en vivo de un botón y una tarjeta. **Protección de contraste:** calcula la razón de contraste y, si es menor a 4.5:1, muestra una advertencia roja con una sugerencia automática y bloquea el guardado de esa combinación. Botón "Restaurar colores originales".

### A-08 Ajustes: textos
Título y subtítulo del inicio, texto del botón principal, título y texto de "Quiénes somos", textos del cotizador, texto de la nota de precios, texto de privacidad. Cada campo con límite de caracteres, contador y vista previa del cambio. Botón "Restaurar texto original" por campo.

### A-09 Ajustes: secciones visibles
Interruptores para mostrar u ocultar cada sección (Quiénes somos, Servicios, Productos, Proyectos, Reseñas, Preguntas, Contacto) y opciones como "Mostrar crédito del desarrollador". Los módulos no contratados no aparecen. Aviso cuando una sección activa está vacía.

### A-10 Ajustes: carrito y pedidos
Opciones de entrega (lista editable, una por línea), opciones de pago con regla "solo con entrega Delivery" por opción, y casillas de datos del comprador (nombre, teléfono, dirección, comuna, correo, RUT, comentarios) con "pedir" y "obligatorio" por campo. Vista previa del formulario. Interruptor "Mostrar IVA calculado" (apagado por defecto). Solo si `cart`.

### A-11 Ajustes: asistente de solicitudes y cotizador
Casillas para los datos finales que pedirá cada chat (nombre, comuna, dirección, correo, RUT; **el teléfono no se pide porque llega por WhatsApp**) con ayuda: "Pide solo lo que de verdad uses; mientras menos pidas, más gente termina su solicitud". Texto de bienvenida editable. Vista previa del chat.

### A-12 Productos
- **Lista:** tarjetas o tabla responsive (en móvil, tarjetas) con imagen, nombre, categoría, precio, estado (activo o archivado) e insignias. Búsqueda, filtro por categoría y estado, orden. Acciones por fila: editar, duplicar, archivar o reactivar, eliminar definitivo (doble confirmación escribiendo el nombre).
- **Edición rápida de precios:** columna de precio editable directamente en la lista con guardado inmediato y deshacer ("Precio actualizado. Deshacer").
- **Ajuste masivo de precios:** seleccionar productos o una categoría y aplicar "subir o bajar X %" con **vista previa de antes y después** y confirmación. Redondeo configurable (a 100 o a 1.000). Registrar un resumen en pantalla.
- **Formulario de producto:** nombre (obligatorio), categoría (selector), precio en CLP (acepta `1.234.567`, `1234567`, `1,234,567`; vacío = "Cotizar"), descripción corta (máx. 140), descripción larga, especificaciones (editor de pares nombre y valor con agregar y quitar), "Incluye instalación" (casilla), "Destacado" (casilla), imagen principal y hasta 4 adicionales (A-25), orden, estado activo. Vista previa de cómo se verá la tarjeta. **Sin campo de stock.**
- Validaciones en línea; no se guarda con errores. Aviso de cambios sin guardar.

### A-13 Categorías
Lista ordenable (flechas arriba y abajo y arrastrar) con nombre y estado. No permitir eliminar una categoría que tiene productos: ofrecer moverlos a otra. Valores iniciales: las 4 categorías de la sección 1.

### A-14 Servicios
Lista ordenable con título, grupo ("Solar" o "Eléctrico"), icono (selector visual con vista previa de todos los iconos), descripción (máx. 200 caracteres) y estado. Los 11 servicios iniciales vienen cargados (títulos de la sección 1, descripciones marcadas como "borrador para revisar").

### A-15 Proyectos
Lista con portada, título, ubicación (comuna, opcional), descripción corta opcional y hasta 6 fotos por proyecto (A-25, con reordenamiento y elegir portada), orden y estado. Máximo recomendado 15 proyectos (aviso, no bloqueo).

### A-16 Carrusel
Solo si `carousel`. Imágenes con título, subtítulo, enlace a sección (selector) y orden. Recomendación de tamaño (1600×900). Vista previa del carrusel. Máximo 8 imágenes.

### A-17 Reseñas
Solo si `reviews`. Campos: nombre (nombre y apellido; se publica con la inicial), texto (máx. 400 caracteres), estrellas (1 a 5), fecha opcional, origen opcional ("Google", "Facebook", "WhatsApp", "Directo"). Aviso fijo: "Publica solo reseñas reales de tus clientes". Activar y desactivar, ordenar, eliminar con confirmación.

### A-18 Preguntas frecuentes
Lista ordenable con pregunta (máx. 140) y respuesta (máx. 600), estado, y botón "Restaurar preguntas iniciales". Las preguntas iniciales vienen cargadas (sección P-13).

### A-19 Cotizador: rangos referenciales
Solo si `quote`. Tabla editable de rangos (tipo de sistema, cuenta mensual mínima y máxima, precio mínimo y máximo en CLP, potencia orientativa en texto, nota, estado). **Vacía por defecto.** Mensaje claro: "Mientras no cargues rangos, el cotizador no mostrará precios y solo reunirá los datos del cliente". Validación: mínimos menores que máximos, sin solapamientos del mismo tipo (avisar). Probador: ingresa una cuenta mensual y muestra qué rango se aplicaría.

### A-20 Estadísticas
Solo si `stats`. Selector de periodo (7, 30, 90 días). Tarjetas con totales: visitas, visitas por QR, aperturas y finalizaciones de cada chat, clics a WhatsApp, productos agregados al carrito, pedidos enviados a WhatsApp. Gráfico de barras o líneas en SVG puro (sin librerías) con tooltip accesible y tabla alternativa. Ranking de productos más vistos. Aviso: "Son conteos anónimos, no identifican a ninguna persona". Estado vacío amable.

### A-21 Código QR
Solo si `qr`. Muestra la URL del sitio con `?utm_source=qr&abrir=asistente` (campo editable para cambiar a `abrir=cotizador`). Genera el QR en el navegador con la librería MIT `qrcode-generator` (incluir el texto de la licencia dentro del archivo), con vista previa, y botones "Descargar PNG" (1024 px) y "Descargar SVG". Consejos de uso (tarjetas, vehículo, local). Verificar que el QR resultante sea escaneable (nivel de corrección M o superior, margen de 4 módulos).

### A-22 Suscripción y mantención
- **Tarjeta de estado** con 4 estados según la fecha de vencimiento `paidUntil` (día de cobro mensual configurable; por defecto, el mismo esquema que el sistema del otro cliente, **a confirmar con el desarrollador**):
  - **Al día:** verde, "Tu mantención está al día hasta el {fecha}".
  - **Vence pronto** (3 días antes): amarillo.
  - **Vencida, en gracia:** naranja los primeros 5 días y rojo del día 6 al 10, con cuenta regresiva "Te quedan N días antes de que se suspenda el acceso al panel".
  - **Suspendida** (más de 10 días vencida): rojo, el panel funciona en **solo lectura** y las reglas bloquean las escrituras. El sitio público **sigue funcionando** con el contenido existente.
- Muestra el monto mensual ($25.000 CLP), historial de pagos (solo lectura para el cliente) y el botón "Avisar mi pago por WhatsApp" que abre un mensaje al WhatsApp del desarrollador con los datos (sin emojis).
- **Datos de transferencia:** se leen de `solar/subscription/bankInfo` (texto editable **solo por el desarrollador**; vacío por defecto). No inventar datos bancarios.
- **Vista del desarrollador** (solo UID del desarrollador): botón "Registrar pago" con validación de que el pago cubra al menos 15 días, edición de `paidUntil`, edición de `bankInfo`, edición de banderas de módulos (`contract/modules`, con validación de dependencias de la sección 2.3), con historial de cambios en `subscription/historial`.
- Las reglas de Firebase son la autoridad: la interfaz solo refleja el estado, nunca lo decide por sí sola.
- Indicador permanente en la cabecera con el estado y los días restantes.

### A-23 Copia de seguridad
Botón "Descargar copia de mi contenido" que exporta a un archivo JSON (con fecha en el nombre) todo `/solar` salvo `subscription`, `stats` y `contract`. Texto claro: "Esta copia es manual: guárdala tú. No se hacen copias automáticas". Opción solo para el desarrollador: "Restaurar desde copia", con validación del formato, vista previa de cuántos elementos se importarán y confirmación fuerte. Nunca prometer respaldos automáticos.

### A-24 Seguridad de la cuenta
Cambiar contraseña (con reautenticación y reglas de fortaleza: mínimo 8 caracteres), cierre de sesión en este dispositivo, información del correo de la cuenta. Aviso para no compartir la contraseña.

### A-25 Cargador de imágenes (componente reutilizable)
- Arrastrar y soltar o elegir archivo; en móvil permite tomar foto. Acepta JPG, PNG, WebP, AVIF; rechaza otros formatos con mensaje claro y tamaños mayores a 15 MB de origen.
- **Compresión en el navegador antes de subir:** redimensionar a un máximo de 1920 px por el lado mayor, convertir a WebP o JPEG con calidad 0.82 usando `canvas` (respeta la orientación EXIF cuando sea posible), objetivo menor a 600 KB. Mostrar "Antes: X MB, después: Y KB". Esto protege la cuota gratuita de Cloudinary.
- Subida a Cloudinary con el preset *unsigned* (`factor_solar_unsigned`, carpeta `factor-solar/`) mediante `XMLHttpRequest` o `fetch` con **barra de progreso**, cancelación, reintento automático (2 veces) y mensaje de error claro. Guardar solo la URL segura `https://res.cloudinary.com/...`.
- Vista previa inmediata, botón "Quitar", `alt` editable cuando corresponda.
- Si Cloudinary no está contratado (`cloudinary` apagado), el campo cambia a "Pegar enlace de imagen (https)" con validación, para que el panel siga siendo útil.

### A-26 Utilidades transversales del panel
- Toasts accesibles (`aria-live`) con acción "Deshacer" cuando aplique.
- Modal de confirmación propio, con foco atrapado y texto específico por acción ("Vas a archivar el producto X. Dejará de verse en el sitio").
- Estado de cambios sin guardar por formulario; barra de guardado fija inferior ("Guardar cambios" y "Descartar"); aviso `beforeunload` si hay cambios.
- Cada guardado: validar, escribir con actualización múltiple (`update`) incluyendo `meta/updatedAt` = `ServerValue.TIMESTAMP`, manejar errores (sin permiso, sin conexión, suscripción suspendida) con mensajes distintos y claros.
- Detección de conflicto sencilla: si el registro cambió en el servidor desde que se abrió el formulario (`updatedAt` del elemento), avisar antes de sobrescribir.
- Esqueletos de carga, estados vacíos con icono y acción, lenguaje simple, sin jerga técnica.
- Normalización del campo `order` al reordenar (1..N sin huecos).
- Escape de todo texto dinámico. Sin `innerHTML` con datos sin escapar.

---

## 8. MODELO DE DATOS, REGLAS, CLOUDINARY Y SEMILLA

### 8.1 Modelo bajo `/solar`
```
solar/
  meta/updatedAt                      número (ServerValue.TIMESTAMP)
  contract/modules/{clave: boolean}   solo desarrollador
  config/
    name, tagline, years, techs, projectsCount?, coverage, metaDescription
    logo, heroImg, aboutImg, ogImg
    wa, phone, email, address, fb, ig, hours/{lun..dom: {open,close,closed}}
    theme/{primary,accent,bg,text}
    texts/{heroTitle,heroSub,heroCta,aboutTitle,aboutText,quoteTitle,quoteText,priceNote,privacy}
    sections/{nosotros,servicios,productos,proyectos,resenas,preguntas,contacto: boolean}
    showCredit, showOpenBadge, cartShowIva
    delivery (lista), payments (lista de {name, requiresDelivery[]})
    cartFields/{nombre,telefono,direccion,comuna,correo,rut,comentarios: {ask,required}}
    assistantFields/{nombre,comuna,direccion,correo,rut: boolean}
    quoteFields/{...igual}
  categories/{id: {name, order, active}}
  products/{id: {name, price|null, categoryId, desc, longDesc, specs[], img, images[], includesInstallation, featured, order, active, updatedAt}}
  services/{id: {title, group, icon, desc, order, active}}
  projects/{id: {title, location?, desc?, img, images[], order, active}}
  carousel/{id: {img, title?, subtitle?, link?, order, active}}
  reviews/{id: {name, text, stars, date?, source?, order, active}}
  faq/{id: {q, a, order, active}}
  quoteRanges/{id: {system, billMin, billMax, priceMin, priceMax, power?, note?, active}}
  stats/{AAAA-MM-DD}/{evento: número}
  statsProd/{AAAA-MM-DD}/{idProducto: número}
  subscription/{paidUntil, monto, bankInfo, historial/{id: {ts,monto,paidUntil,por}}}
```
Ningún dato personal de clientes finales se guarda en Firebase. Las solicitudes y los pedidos solo viajan por WhatsApp.

### 8.2 Reglas de seguridad (`firebase/rules.solar.json`)
Entrega **solo el bloque `solar`** para fusionarlo dentro de las reglas existentes del proyecto. Incluye en el README el paso a paso para fusionar sin pisar las reglas de la otra aplicación y para probarlas con el simulador de reglas (Rules Playground). Requisitos:
- Lectura pública de: `meta`, `contract`, `config`, `categories`, `products`, `services`, `projects`, `carousel`, `reviews`, `faq`, `quoteRanges`.
- Escritura de contenido: solo el UID del cliente **mientras su suscripción no esté suspendida** (`now < paidUntil + 10 días`; si `paidUntil` aún no existe, permitido) o el UID del desarrollador siempre.
- `contract` y `subscription`: escritura solo del desarrollador. Lectura de `subscription`: solo los dos UID.
- `stats` y `statsProd`: lectura solo de los dos UID; escritura pública únicamente como **incremento de contador** (de ausente a 1, o de N a N+1), con validación del formato del día (`AAAA-MM-DD`) y del nombre del evento (`^[a-z_]{3,32}$`).
- `.validate` en todas las colecciones: tipos, longitudes máximas (nombres 120, textos largos 2000), números no negativos, URLs que empiecen con `https://`, enumeraciones permitidas.
- Todo lo demás dentro y fuera de `/solar`: denegado.
- Estructura de la condición de escritura (usa los UID reales del README):
```
auth != null && (auth.uid === 'UID_DESARROLLADOR' ||
  (auth.uid === 'UID_CLIENTE' &&
    (!root.child('solar/subscription/paidUntil').exists() ||
      now < root.child('solar/subscription/paidUntil').val() + 864000000)))
```
No dejes UID reales en el repositorio público: usa marcadores `UID_CLIENTE` y `UID_DESARROLLADOR` y documenta dónde reemplazarlos.

### 8.3 Cloudinary
Documentar en el README la configuración del preset *unsigned* `factor_solar_unsigned`: carpeta `factor-solar`, formatos permitidos (jpg, png, webp, avif), tamaño máximo 10 MB, nombre de archivo único, sin sobrescribir, sin transformaciones pesadas al subir. Recordar que el nombre del preset no es secreto, por lo que las restricciones del preset son la protección. El plan gratuito tiene cuota mensual en créditos: por eso la compresión previa (A-25) y los parámetros `f_auto,q_auto,w_*` al mostrar.

### 8.4 Semilla (`firebase/seed-solar.json`)
Genera un JSON importable (desde la consola de Firebase, sobre el nodo `/solar`, **sin pisar otros nodos**) con: `config` con los datos reales de la sección 1 y textos por defecto; `categories` (4); `services` (11); `faq` (las preguntas de P-13, incluida la de autonomía); `sections` activadas; `delivery` y `payments` por defecto; `contract/modules` todo en `true`; `meta/updatedAt`. **Sin** productos, proyectos, reseñas, rangos, estadísticas ni suscripción (el desarrollador crea `paidUntil` al entregar).

---

## 9. CATÁLOGO DE PROBLEMAS Y CASOS BORDE (con la solución exigida)

| Situación posible | Solución que debe implementarse |
|---|---|
| El cliente borra un producto por error | Acción principal "Archivar" (recuperable); eliminar definitivo requiere escribir el nombre |
| El cliente escribe el precio con puntos, comas o símbolo `$` | Parseo tolerante, mensaje claro si no es válido, muestra el valor interpretado antes de guardar |
| Sube fotos de 8 MB desde el celular | Compresión previa en el navegador, barra de progreso, reintentos |
| Falla la subida a Cloudinary | Mensaje claro, reintento, no se pierde el formulario |
| Cierra la pestaña con cambios sin guardar | Aviso `beforeunload` y estado de "sin guardar" |
| Se cae internet mientras edita | Aviso de conexión, el formulario conserva lo escrito, reintento al volver |
| Dos personas editan lo mismo | Detección de cambios en servidor antes de sobrescribir, con aviso |
| Elige colores con poco contraste | Bloqueo con sugerencia automática (A-07) |
| Sitio sin conexión o Firebase caído | Caché, contenido de respaldo y aviso con reintento |
| Catálogo vacío o categoría vacía | Mensajes y estados vacíos con acción; la sección se oculta si no corresponde |
| Producto sin precio | "Cotizar" y botón "Consultar"; no entra al total |
| Producto eliminado o con precio distinto mientras el cliente tiene carrito | Reconciliación al abrir el carrito con aviso |
| Pedido con muchos productos (mensaje enorme) | Respaldo de copiar y pegar si la URL de WhatsApp supera el límite |
| El navegador bloquea la ventana de WhatsApp | Respaldo con `location.href` y enlace visible |
| WhatsApp no instalado en el computador | `wa.me` abre WhatsApp Web; mostrar también "Copiar mensaje" |
| Número de WhatsApp mal escrito en el panel | Validación, normalización y botón "Probar" |
| Teléfono, RUT o correo del comprador mal escritos | Validación en línea con ejemplos |
| El cliente pide pago contra entrega sin delivery | Opción no disponible con explicación |
| Envío por pagar | Nota aclaratoria de que lo paga el comprador al recibir |
| Cliente no quiere dar correo | El correo no se pide salvo que el cliente lo active; el teléfono llega por WhatsApp |
| Cotización sin datos para estimar | No se muestra ninguna cifra; se explica que Factor Solar evaluará |
| Cliente cree que tendrá una casa 100 % autónoma | Nota informativa visible en el cotizador y en las preguntas frecuentes |
| Chat abierto fuera del horario de atención | Aviso con el próximo horario y estado "Fuera de horario" |
| Cierra el chat por accidente | Borrador guardado en `sessionStorage` |
| Chat en móvil con teclado virtual | Alto dinámico (`dvh`), el campo nunca queda tapado |
| Previsualización en WhatsApp o Facebook sin imagen/texto correcto | Etiquetas OG fijas en el HTML, no por JavaScript |
| Contraseña olvidada | Recuperación por correo |
| Sesión del panel expirada | Aviso claro y reingreso sin perder lo escrito |
| Mantención vencida | Avisos escalonados, panel solo lectura al suspenderse, reglas como autoridad, sitio público intacto |
| El cliente quiere un respaldo | Exportación manual en JSON; sin prometer copias automáticas |
| Se acerca el límite gratuito de Firebase o Cloudinary | Caché y compresión para reducir uso; documentado en el README que el plan puede cambiar y qué hacer |
| Datos con HTML o scripts maliciosos en la base | Escape de todo texto dinámico, solo URLs `https:`, sin `innerHTML` crudo |
| Alguien intenta escribir en la base desde la consola del navegador | Reglas de seguridad por UID, validaciones y contadores restringidos |
| Spam de contadores de estadísticas | Reglas de solo-incremento, una visita por sesión; el impacto es solo en métricas |
| Logo o imágenes aún no entregadas | Espacios provisionales elegantes y reemplazables |
| JavaScript desactivado o navegador antiguo | `noscript` y contenido de respaldo con contacto |
| Pantallas muy pequeñas (320 px) o muy anchas | Diseño fluido probado desde 320 px hasta 1920 px, sin desbordes |
| Usuario con lector de pantalla o solo teclado | Semántica, `aria-live`, foco atrapado y visible, orden lógico |
| Usuario con `prefers-reduced-motion` | Sin autoplay ni animaciones decorativas |
| Dirección o enlace de mapa | Enlace de Google Maps por búsqueda, sin clave de API |
| El cliente cambia el WhatsApp de ventas | Se actualiza desde el panel y se refleja en todo el sitio sin tocar código |
| Cambio de dominio o primer despliegue | README con dominios autorizados de Firebase Auth y restricciones de la clave de API |
| Dos usuarios (cliente y desarrollador) con permisos distintos | UID autorizados en reglas y en la interfaz; el cliente no ve ni edita contrato ni pagos |

---

## 10. SEGURIDAD, PRIVACIDAD Y RENDIMIENTO (resumen exigible)

- Escape universal de texto (`esc()`), validación de URL, sin `innerHTML` con datos externos sin sanear, sin `eval`, sin `document.write`.
- Los enlaces externos usan `rel="noopener noreferrer"`.
- Clave de API de Firebase: pública por diseño; protegerla con restricciones de referente en Google Cloud y con las reglas (documentar en el README).
- Dominios autorizados en Firebase Authentication (dominio de Pages y dominio propio).
- Cabeceras en `_headers`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY`; `X-Robots-Tag: noindex, nofollow` para `/admin.html`. Proponer una política CSP en modo solo reporte con los orígenes necesarios (Firebase, Google Fonts, Cloudinary) y documentarla.
- Sin cookies de seguimiento ni analítica de terceros. `localStorage` solo para caché, carrito y preferencias; `sessionStorage` para el borrador del chat y la visita de sesión.
- Cumplir el objetivo de rendimiento de 4.7. Reducir lecturas a Firebase según P-01.

---

## 11. DESPLIEGUE Y ENTREGA

`README.md` con pasos numerados y verificables para el desarrollador (marcados como pasos manuales):
1. Crear los dos usuarios en Firebase Authentication y copiar sus UID.
2. Fusionar el bloque `solar` de `firebase/rules.solar.json` con las reglas existentes y probarlas en el simulador.
3. Importar `firebase/seed-solar.json` en el nodo `/solar`.
4. Crear `solar/subscription/paidUntil` al entregar el proyecto.
5. Configurar el preset *unsigned* de Cloudinary.
6. Añadir los dominios en los dominios autorizados de Firebase Auth y restringir la clave de API por referente.
7. Reemplazar los marcadores (UID, número del desarrollador, dominio final, imagen OG).
8. Publicar en Cloudflare Pages (directorio raíz, sin paso de compilación).
9. Verificar `_redirects` (`/qr`), `_headers`, `robots.txt` y `sitemap.xml`.
10. Ejecutar la lista de pruebas de la sección 12.

Incluir en el README: cómo agregar un módulo nuevo, cómo cambiar el día de cobro, cómo restaurar desde una copia y qué hacer si se supera una cuota gratuita (avisar al cliente y evaluar opciones).

---

## 12. VERIFICACIÓN FINAL (obligatoria antes de cerrar)

Revisa el código línea por línea y completa esta lista en `docs/INFORME_FINAL.md`, marcando cada ítem como **Verificado**, **Revisado estáticamente** o **No probado**:

**Sitio público**
- [ ] Sin errores de sintaxis ni de consola; sin variables sin declarar
- [ ] Todas las secciones se renderizan con datos de respaldo, con datos de Firebase y sin datos
- [ ] Catálogo: filtros, búsqueda, orden, ficha, enlace profundo
- [ ] Carrito: agregar, quitar, cantidades, reconciliación, persistencia, validaciones (teléfono, RUT, correo), regla de pago contra entrega
- [ ] Mensajes de WhatsApp correctos (pedido, solicitud, cotización), con `encodeURIComponent`, sin emojis
- [ ] Respaldos de mensaje largo, ventana bloqueada y portapapeles
- [ ] Chats: ambos flujos completos, volver, reiniciar, borrador, horario, teclado, foco, lector de pantalla
- [ ] Estimación solo con rangos reales; sin cifras si no hay
- [ ] QR: parámetros, apertura automática y limpieza de URL
- [ ] Galería y lightbox: teclado, táctil, foco
- [ ] Carrusel: pausa, reduced motion, accesibilidad
- [ ] Insignia "Abierto ahora" con zona horaria correcta
- [ ] Estadísticas: incrementos, una visita por sesión, sin romper el sitio si fallan
- [ ] Sin desbordamiento horizontal a 320, 360, 390, 768, 1024, 1440 y 1920 px
- [ ] Contraste AA, orden de tabulación, `aria-live`, `prefers-reduced-motion`
- [ ] SEO: etiquetas fijas, canonical, JSON-LD válido, 404
- [ ] Ninguna cifra, texto o imagen inventados

**Panel**
- [ ] Acceso, recuperación, cierre de sesión, restricción por UID
- [ ] CRUD completo de productos, categorías, servicios, proyectos, carrusel, reseñas y preguntas (crear, editar, archivar, eliminar, reordenar, duplicar)
- [ ] Edición rápida y ajuste masivo de precios con vista previa y deshacer
- [ ] Cargador de imágenes: compresión, progreso, errores, reintento, modo sin Cloudinary
- [ ] Ajustes: empresa, imágenes, contacto, horario, colores con protección de contraste, textos, secciones, carrito, asistentes
- [ ] Rangos del cotizador con probador
- [ ] Estadísticas y gráficos accesibles
- [ ] Generador de QR escaneable y descargas
- [ ] Suscripción: los 4 estados, solo lectura al suspender, vista del desarrollador, historial
- [ ] Copia de seguridad: exportar y restaurar (solo desarrollador)
- [ ] Cambios sin guardar, conflictos, errores de red y de permisos con mensajes claros
- [ ] Móvil: navegación inferior, formularios, tablas como tarjetas

**Infraestructura**
- [ ] Reglas probadas en el simulador: lectura pública, escritura por UID, suscripción vencida, contadores
- [ ] Semilla importable sin pisar otros nodos
- [ ] `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, `404.html`
- [ ] README completo con pasos manuales

Incluye en el informe: lista de supuestos, limitaciones conocidas, cosas que requieren datos del cliente (logo, imágenes, enlace de Facebook, rangos de precios del cotizador, descripciones de servicios) y lo que no pudiste probar en un navegador real.

---

## ANEXO A — Banderas de módulos contratados (rellenar antes de publicar)

| Módulo | Clave | Contratado |
|---|---|---|
| Catálogo de productos | `catalog` | sí |
| Carrito y pedido por WhatsApp | `cart` | sí |
| Galería de proyectos | `gallery` | sí |
| Carrusel administrable | `carousel` | sí |
| Reseñas administrables | `reviews` | sí |
| Estadísticas de visitas | `stats` | sí |
| Código QR | `qr` | sí |
| Asistente de solicitudes (chat) | `assistant` | sí |
| Cotizador solar (chat) | `quote` | sí |
| Carga de imágenes (Cloudinary) | `cloudinary` | sí |
| Panel administrativo | `adminPanel` | sí |

## ANEXO B — Textos por defecto (semilla, editables)

- **Título del inicio:** "Energía solar y soluciones eléctricas para tu hogar y tu empresa"
- **Subtítulo:** "15 años de experiencia instalando sistemas fotovoltaicos y soluciones eléctricas en Santiago y regiones."
- **Botón principal:** "Cotizar mi proyecto"
- **Nota de precios:** "Los precios son referenciales y se muestran más IVA. La compra se confirma por WhatsApp; no se realizan pagos en este sitio."
- **Entrega por defecto:** Delivery; Envío por pagar con Starken; Envío por pagar con Chilexpress; Envío por pagar con otra empresa.
- **Pago por defecto:** Transferencia; Efectivo; Link de pago; Pago contra entrega (solo con Delivery).
- **Preguntas iniciales:** (1) ¿Puede un sistema solar mantener funcionando una casa completamente autónoma? (2) ¿Qué necesito para cotizar un sistema solar? (boleta de luz, espacio disponible para los paneles y para el inversor, tipo de sistema, necesidades de energía) (3) ¿Qué diferencia hay entre On-Grid y Off-Grid? (4) ¿Atienden en regiones? (Santiago y regiones de Chile) (5) ¿Cómo funciona el pedido por WhatsApp? (6) ¿Qué formas de pago y entrega hay? Redacta respuestas breves y sin inventar cifras ni plazos.

## ANEXO C — Plantillas de mensajes de WhatsApp (sin emojis)

**Solicitud (asistente):**
```
Hola Factor Solar Chile, quiero hacer una solicitud desde el sitio web.

NECESITO: {servicio}
DETALLE: {detalle del ramal}
COMUNA: {comuna}
CUÁNDO: {urgencia}
COMENTARIOS: {comentarios o "Sin comentarios"}

NOMBRE: {nombre}
{otros datos activados}

{nota de fuera de horario si corresponde}
```

**Cotización solar:**
```
Hola Factor Solar Chile, quiero cotizar un proyecto solar desde el sitio web.

LUGAR: {tipo}
SISTEMA: {On-Grid | Off-Grid | Necesito asesoría}
CUENTA DE LUZ MENSUAL: {rango o "enviaré mi boleta"}
CONSUMO (kWh): {valor o "No indicado"}
ESPACIO PARA PANELES: {techo|terreno|ambos|no sé}, {m2 o "No indicado"} m2
TIPO DE TECHO: {material o "No indicado"}
LUGAR PARA EL INVERSOR: {sí|no|no sé}
BATERÍAS: {sí|no|no sé}
COMUNA: {comuna}

{si hay estimación: "RANGO REFERENCIAL MOSTRADO: ${min} a ${max} más IVA (orientativo, sujeto a evaluación técnica)"}

NOMBRE: {nombre}
{otros datos activados}

Adjuntaré la foto de mi boleta de luz en este chat.
```

**Pedido (carrito):**
```
Hola Factor Solar Chile, quiero hacer este pedido desde el sitio web:

- {cantidad} x {producto}: ${subtotal} + IVA
- {cantidad} x {producto}: Cotizar
...

TOTAL REFERENCIAL: ${total} + IVA
{n} producto(s) a cotizar

ENTREGA: {opción}
PAGO: {opción}

NOMBRE: {nombre}
TELÉFONO: {teléfono si se pidió}
DIRECCIÓN: {si se pidió}
COMUNA: {si se pidió}
CORREO: {si se pidió}
RUT: {si se pidió}
COMENTARIOS: {texto}
```
Los precios del pedido son referenciales; Factor Solar confirma disponibilidad, valor final, pago y entrega por WhatsApp.

**Aviso de pago de mantención (al desarrollador):**
```
Hola Diego, te aviso que realicé el pago de la mantención del sitio de Factor Solar Chile.

MONTO: $25.000 CLP
FECHA: {fecha}
```

---

*Fin del documento. Empieza por la Fase 0 y no te saltes la auditoría.*
