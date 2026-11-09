// Textos de ayuda — español (3-26). Panel de administración del sitio personal.
// Mantener las claves, las marcas ** ** y los nombres de botones [[ ]].
AMLHelp.add('es', {
  "_ui": {
    "what": "¿Qué es?",
    "when": "¿Cuándo se utiliza?",
    "click": "¿Qué ocurre al pulsarlo?",
    "care": "Ten en cuenta",
    "like": "Para entenderlo mejor",
    "close": "Cerrar"
  },
  "help.top.lang": {
    "t": "Idioma",
    "what": "Elige el idioma de esta página de administración. La lista incluye todos los idiomas disponibles.",
    "when": "Úsalo si te cuesta leer los textos o si quieres ver tu sitio en otro idioma.",
    "click": "La página cambia enseguida. La elección solo se guarda en este navegador, así que otro ordenador o móvil puede mostrar otro idioma.",
    "care": "No cambia el idioma principal que ven los visitantes. Eso se elige en **Idioma del sitio**, dentro de Información del sitio. Si abres tu sitio en este navegador, también verás el idioma seleccionado aquí.",
    "like": "Es como elegir el idioma de las etiquetas dentro de tu tienda. El letrero de fuera sigue igual."
  },
  "help.setup.title": {
    "t": "Crear la cuenta de administrador",
    "what": "Esta es la primera pantalla tras instalar el sitio. Aquí creas la única cuenta para administrarlo: correo, contraseña y clave de uso de Cloudflare.",
    "when": "Solo aparece una vez, al terminar la instalación. Vuelve a aparecer si sigues el proceso para recuperar la contraseña.",
    "click": "Esto es solo un título. Rellena las casillas y pulsa [[Crear administrador]].",
    "care": "Si acabas de instalar, espera alrededor de un minuto. Cloudflare necesita preparar el almacenamiento de canciones. Si aparece un error, espera y prueba otra vez.\nNo puedes ponerle a tu sitio el nombre de un cantante o grupo famoso.",
    "like": "Es como recibir la única llave de una tienda recién inaugurada."
  },
  "help.setup.legacy": {
    "t": "Contraseña antigua del administrador (AML_ADMIN_TOKEN)",
    "what": "Esta casilla solo aparece en sitios instalados con el método antiguo, cuando la contraseña del administrador se guardaba en la configuración de Cloudflare.",
    "when": "Escribe la contraseña antigua que usabas. Solo la necesitas esta vez.",
    "click": "Al escribir no ocurre nada. Se comprueba cuando pulsas [[Crear administrador]].",
    "care": "Sirve para demostrar que el sitio es tuyo e impedir que alguien lo controle. Si es incorrecta, no se crea la cuenta. Busca el valor en la configuración de este sitio en Cloudflare.",
    "like": "Es como mostrar la llave antigua al cerrajero antes de que te entregue una nueva."
  },
  "help.setup.email": {
    "t": "Correo electrónico",
    "what": "Es el correo con el que entrarás al panel. Nunca se muestra en tu sitio.",
    "when": "Utiliza uno que consultes a menudo. El que usaste para registrarte en Cloudflare es fácil de recordar.",
    "click": "Todavía no se guarda nada. Se guardará cuando pulses [[Crear administrador]].",
    "care": "Debe tener formato de correo real (name@example.com). aimusiclist.com también lo recibe como contacto privado de tu sitio. Puedes cambiarlo después en Información del sitio.",
    "like": "Es como poner tu nombre en el llavero de la tienda."
  },
  "help.setup.password": {
    "t": "Contraseña (6 caracteres o más)",
    "what": "Es la contraseña con la que entrarás, junto con el correo anterior.",
    "when": "Elígela ahora. Necesitas al menos seis caracteres; cuanto más larga, mejor.",
    "click": "Todavía no se guarda. Se guardará al pulsar [[Crear administrador]].",
    "care": "No uses una contraseña que ya utilices en otros sitios. Si la olvidas, puedes recuperarla sin perder las canciones.",
    "like": "Es la llave de tu tienda: no uses otra igual para abrir muchas puertas."
  },
  "help.setup.password2": {
    "t": "Repetir contraseña",
    "what": "Escribe de nuevo la misma contraseña.",
    "when": "Justo después de la casilla anterior.",
    "click": "Al pulsar [[Crear administrador]], el sistema compara las dos casillas.",
    "care": "Si no coinciden, aparecerá un aviso y no se creará nada. Vuelve a escribirlas.",
    "like": "Es como probar la llave dos veces para comprobar que encaja."
  },
  "help.setup.token": {
    "t": "Clave de uso de Cloudflare (obligatoria, solo lectura)",
    "what": "Es una clave creada en Cloudflare. Permite que este panel muestre cuánto has usado de su límite gratuito.",
    "when": "Créala con la guía inferior (unos dos minutos), cópiala y pégala aquí.",
    "click": "Cuando terminas de escribir se comprueba automáticamente. Verás ✓ y el nombre de la cuenta de Cloudflare, o ✗ y el motivo del error.",
    "care": "Solo puede consultar las cifras de consumo y el nombre de tu cuenta; no cambia ni borra nada. Cloudflare la muestra una sola vez: pégala en cuanto la copies. Necesita los permisos Account Analytics · Read y Account Settings · Read.",
    "like": "Es como una llave que solo abre la caja del contador eléctrico, no la tienda."
  },
  "help.setup.account": {
    "t": "Cuenta de Cloudflare",
    "what": "Esta lista aparece si tu clave de uso tiene acceso a varias cuentas de Cloudflare.",
    "when": "Elige la cuenta donde instalaste este sitio.",
    "click": "La clave se comprueba otra vez con la cuenta elegida. ✓ indica que todo está bien.",
    "care": "Si seleccionas otra cuenta, las barras de consumo mostrarán cifras equivocadas o no se cargarán.",
    "like": "Es como tener llaves de varios edificios y señalar dónde está tu tienda."
  },
  "help.setup.account_id": {
    "t": "Account ID de Cloudflare",
    "what": "Es el número de tu cuenta de Cloudflare: 32 caracteres entre 0–9 y a–f.",
    "when": "Esta casilla solo aparece si la clave no consigue localizar la cuenta. Sucede cuando falta el permiso Account Settings · Read.",
    "click": "Al introducir los 32 caracteres, la clave vuelve a comprobarse automáticamente.",
    "care": "Búscalo en Cloudflare: Workers & Pages → Account Details → Account ID (icono de copiar). También puedes crear otra clave desde la guía con ambos permisos; así no necesitarás esta casilla.",
    "like": "Es como dar tu número de portal al lector del contador cuando falta el nombre de la calle."
  },
  "help.setup.token_guide": {
    "t": "Cómo crear la clave de uso (2 minutos)",
    "what": "Cinco pasos sencillos para crear una clave de uso en Cloudflare.",
    "when": "Léelos mientras creas la clave. Pulsa el título para abrir o cerrar la guía.",
    "click": "Abrir o cerrar no cambia nada. El primer paso contiene un botón que abre Cloudflare.",
    "care": "Los nombres de las pantallas de Cloudflare pueden variar un poco. Busca la opción equivalente. Allí pulsa [[Continue to summary]], después [[Create Token]] y luego [[Copy]].",
    "like": "Es como el dibujo de instrucciones para montar un mueble."
  },
  "help.setup.submit": {
    "t": "Crear administrador",
    "what": "Crea tu cuenta de administrador con el correo, la contraseña y la clave de uso anteriores.",
    "when": "Púlsalo cuando todas las casillas estén completas y aparezca ✓ en la clave.",
    "click": "Si algo está mal, aparece un aviso y no se crea la cuenta. Si todo está bien, entrarás al panel y tu sitio comenzará a conectarse a aimusiclist.com automáticamente.",
    "care": "Cada sitio tiene una sola cuenta de administrador. Para crearla de nuevo, usa los pasos de recuperación de contraseña. Tus canciones y álbumes se conservan.",
    "like": "Es como cortar la cinta al inaugurar una tienda: ya es tuya y abre sus puertas."
  },
  "help.login.title": {
    "t": "Iniciar sesión",
    "what": "Es la entrada al panel de administración. Solo el dueño puede entrar con su correo y contraseña.",
    "when": "Aparece si no has iniciado sesión en este navegador o la sesión ha caducado.",
    "click": "Es solo un título. Rellena las casillas y pulsa [[Iniciar sesión]].",
    "care": "Cada sesión dura 30 días en un navegador. Al cambiar la contraseña se cierran las sesiones de todos los dispositivos.",
    "like": "Es la puerta trasera cerrada de la tienda. La entrada principal sigue abierta al público."
  },
  "help.login.email": {
    "t": "Correo electrónico",
    "what": "Es el correo que elegiste al crear la cuenta de administrador.",
    "when": "Escríbelo cada vez que quieras iniciar sesión.",
    "click": "No ocurre nada hasta que pulses [[Iniciar sesión]].",
    "care": "No importa si usas mayúsculas o minúsculas. En sitios de meshmelo, utiliza el correo de tu cuenta de meshmelo.",
    "like": "Es como decir tu nombre antes de enseñar la llave en la puerta trasera."
  },
  "help.login.password": {
    "t": "Contraseña",
    "what": "Es la contraseña de tu cuenta de administrador.",
    "when": "Escríbela cada vez que inicies sesión.",
    "click": "No ocurre nada hasta que pulses [[Iniciar sesión]].",
    "care": "Después de cinco intentos incorrectos seguidos desde el mismo lugar, el acceso se bloquea durante 15 minutos. El aviso muestra cuántos intentos quedan.",
    "like": "Es como probar una llave: si pruebas muchas equivocadas, la cerradura descansa un rato."
  },
  "help.login.submit": {
    "t": "Iniciar sesión",
    "what": "Comprueba tu correo y contraseña y abre la administración.",
    "when": "Púlsalo después de rellenar ambas casillas. El enlace [[Ver sitio]] de al lado abre tu sitio como visitante.",
    "click": "Si son correctos, entrarás y este navegador seguirá conectado 30 días. Si no, aparecerá un aviso rojo.",
    "care": "Iniciar sesión aquí no te conecta en otros dispositivos. Debes hacerlo por separado en cada navegador.",
    "like": "Es como girar la llave y entrar en la oficina de la tienda."
  },
  "help.login.forgot": {
    "t": "¿Olvidaste tu contraseña?",
    "what": "Explica cómo establecer otro correo y contraseña cuando ya no recuerdas los actuales.",
    "when": "Úsalo si de verdad no puedes entrar. Pulsa el título para ver los pasos.",
    "click": "Abrir la guía no cambia nada. Debes seguir los pasos. En un sitio de Cloudflare, borras solo los datos del administrador de R2 y reaparece [[Crear administrador]].",
    "care": "Se conservan las canciones, los álbumes y la conexión con aimusiclist.com. Borra únicamente lo indicado. En la versión PHP se crea un archivo vacío en el alojamiento. En meshmelo se restablece desde tu cuenta.",
    "like": "Es como llamar al cerrajero para cambiar la llave. La tienda y sus productos siguen intactos."
  },
  "help.top.mm_acct": {
    "t": "Mi cuenta de meshmelo",
    "what": "Es el enlace a tu cuenta de meshmelo. Solo aparece en los sitios alojados por meshmelo.",
    "when": "Entra para gestionar acceso, contraseña, almacenamiento de canciones, consumo, dominio propio o eliminación completa del sitio.",
    "click": "Tu cuenta de meshmelo se abre en otra pestaña. Esta página sigue abierta.",
    "care": "Las canciones, álbumes, menús, diseños y estadísticas se gestionan aquí, no allí. Si dudas, pulsa el signo ? junto al enlace.",
    "like": "Es como la oficina que gestiona tus tiendas; este panel es el mostrador de una sola."
  },
  "help.top.view_site": {
    "t": "Ver sitio",
    "what": "Abre tu propio sitio tal como lo ven los visitantes.",
    "when": "Úsalo para comprobar el aspecto después de hacer cambios.",
    "click": "Tu sitio se abre en otra pestaña. El panel permanece abierto.",
    "care": "La mayoría de los cambios aparecen en unos 30 segundos. Como has iniciado sesión, quizá veas datos que otros no ven, como el número de reproducciones de cada canción.",
    "like": "Es como salir a la calle y mirar el escaparate de tu tienda."
  },
  "help.top.logout": {
    "t": "Cerrar sesión",
    "what": "Termina la sesión en este navegador.",
    "when": "Úsalo al terminar o si estás en un ordenador compartido.",
    "click": "Vuelves inmediatamente a la pantalla de acceso. No afecta a canciones ni ajustes.",
    "care": "Solo cierra la sesión de este navegador. Los otros dispositivos siguen conectados. Para salir de todos, cambia tu contraseña en Información del sitio.",
    "like": "Es como cerrar con llave la puerta trasera al salir. Las otras llaves siguen funcionando."
  },
  "help.top.version": {
    "t": "Nueva versión",
    "what": "Aparece cuando hay una versión más nueva del programa. Muestra la actual y la última disponible.",
    "when": "Cuando aparezca, prepara una actualización. Se comprueba una vez al día.",
    "click": "[[Cómo actualizar]] abre la guía de actualización y [[Novedades]] explica los cambios. Nada se modifica hasta que actualices.",
    "care": "Nunca se te obliga a actualizar. Si el aviso es rojo, tu versión ya es anterior a la admitida por aimusiclist.com; actualiza pronto. Se conservan canciones y ajustes. En PHP verás aquí un botón para actualizar.",
    "like": "Es un aviso de que han llegado estanterías nuevas y mejores para tu tienda."
  },
  "help.top.aml": {
    "t": "Conexión con aimusiclist.com",
    "what": "Esta línea indica si tu sitio está conectado con aimusiclist.com. Solo entonces pueden aparecer y clasificarse allí tus canciones públicas.",
    "when": "Revísala al instalar y si tus canciones no aparecen en aimusiclist.com.",
    "click": "Solo muestra el estado: ✓ conectado · … conectando · ✗ sin conexión, con el motivo y el siguiente intento automático.",
    "care": "Un sitio nuevo se conecta solo. Si falla, reintenta cada diez minutos, hasta 20 veces al día. Algunos errores detienen los intentos: corrige la causa y pulsa [[Probar ahora]]. Si meshmelo ha pausado el sitio, aquí se indica.",
    "like": "Es el camino de tu tienda al gran mercado. Si está abierto, tus discos llegan a sus escaparates."
  },
  "help.top.lang_missing": {
    "t": "Falta el idioma de algunas canciones",
    "what": "Un aviso indica que algunas canciones no tienen idioma asignado. Suele pasar con las subidas antes de que existiera esta opción.",
    "when": "Corrígelo cuando puedas. Ayuda a los oyentes de aimusiclist.com a encontrar canciones en su idioma.",
    "click": "Es solo un aviso. Pulsa [[Establecer ahora]] para corregirlas todas juntas.",
    "care": "No es obligatorio. Hasta que lo configures, aimusiclist.com supondrá que esas canciones usan el idioma principal del sitio. El aviso desaparece cuando todas tienen idioma.",
    "like": "Como unos discos a los que les falta la etiqueta del idioma de la voz."
  },
  "help.top.pubmin_note": {
    "t": "No hay suficientes canciones públicas",
    "what": "El aviso aparece si tienes menos canciones públicas de las necesarias en aimusiclist.com: mínimo diez, o todas si tienes menos de diez.",
    "when": "Se muestra cuando bajas de ese mínimo, por ejemplo tras borrar canciones.",
    "click": "Es solo un aviso. Pulsa [[Elegir canciones]] para solucionarlo.",
    "care": "Nada se publica automáticamente, pero no podrás hacer más canciones privadas hasta cumplir la regla. Tú eliges cuáles son públicas y puedes borrar las que no quieras compartir.",
    "like": "El gran mercado pide a cada tienda que exhiba al menos diez discos."
  },
  "help.top.profile_note": {
    "t": "Añadir foto de perfil",
    "what": "Consejo que aparece si ya tienes canciones pero aún no has añadido foto de perfil. También se muestra junto a tus canciones en aimusiclist.com.",
    "when": "Añádela cuando puedas. Una foto o logo ayuda a reconocer tu música.",
    "click": "Es solo un consejo. Pulsa [[Añadir foto]] para elegir una imagen.",
    "care": "No es obligatorio. El aviso desaparece cuando guardas una foto de perfil.",
    "like": "Como poner una foto en la entrada para que la gente sepa de quién es la tienda."
  },
  "help.top.genre_sample": {
    "t": "Lista de géneros incluida",
    "what": "Este aviso significa que no pudo cargarse la lista de géneros desde aimusiclist.com y se usa temporalmente la lista incluida en el programa.",
    "when": "No tienes que hacer nada. Suele desaparecer al abrir de nuevo el panel.",
    "click": "Es solo un aviso.",
    "care": "Puede que la lista incluida no tenga los géneros más recientes. Si necesitas uno, espera y actualiza la página. Los géneros ya asignados a tus canciones y menús no cambian.",
    "like": "Como usar el catálogo del año pasado mientras llega el nuevo."
  },
  "help.setup.token_open": {
    "t": "Crearla en Cloudflare",
    "what": "Abre en otra pestaña la pantalla de Cloudflare para crear una clave, con el nombre y los dos permisos ya preparados.",
    "when": "Púlsalo en el primer paso de la guía.",
    "click": "Cloudflare se abre en otra pestaña (inicia sesión si te lo pide). Esta página queda abierta para que vuelvas y pegues la clave.",
    "care": "Comprueba que estén ambos permisos: Account Analytics · Read y Account Settings · Read. Si aparecen vacíos, añádelos tú.",
    "like": "Como recibir un formulario ya rellenado: solo tienes que firmarlo."
  },
  "help.tracks.ai_tool": {
    "t": "Creado con",
    "what": "La herramienta de IA con la que hiciste la canción, por ejemplo Suno. Se muestra junto a ella como una pequeña etiqueta «✦ nombre».",
    "when": "Elige la herramienta que realmente usaste. En la tarjeta de subida se aplica a todas las canciones de esa tanda.",
    "click": "Se guarda al subir o al pulsar [[Guardar canción]]. Al subir, este navegador recuerda tu elección para la próxima vez.",
    "care": "aimusiclist.com mantiene la lista de herramientas. Si falta la tuya, elige «Otra» y escribe a admin@aimusiclist.com. No influye en la clasificación.",
    "like": "Es como la nota de fabricación en la parte trasera de un disco."
  },
  "help.tracks.ai_fill": {
    "t": "Canciones sin herramienta de IA",
    "what": "Este aviso indica cuántas canciones aún no tienen herramienta de IA. Solo aparece si falta en alguna.",
    "when": "Úsalo para asignar una herramienta a todas esas canciones de una vez.",
    "click": "Es solo un aviso. Elige una herramienta abajo y pulsa [[Asignar esta herramienta a todas]].",
    "care": "Cuando todas las canciones tengan una herramienta, el aviso desaparecerá.",
    "like": "Como una nota en el mostrador: «Cinco discos aún no tienen el sello del fabricante»."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Asignar esta herramienta a todas",
    "what": "Aplica la herramienta elegida a todas las canciones que todavía no tienen ninguna.",
    "when": "Úsalo si casi todas tus canciones se crearon con la misma herramienta, por ejemplo al importar canciones antiguas.",
    "click": "Primero se te pide confirmación. Si aceptas, se guarda al instante y aparece «✦ herramienta» junto a esas canciones en tu sitio y en aimusiclist.com.",
    "care": "Solo cambian las canciones sin herramienta. Las que ya tienen una no se tocan. Si algunas se hicieron con otra, corrígelas después en **Herramienta de IA de canciones seleccionadas** o en [[Editar]] cada canción.",
    "like": "Es como poner el mismo sello en todos los discos que aún no tienen ninguno."
  },
  "help.tracks.bulk_ai": {
    "t": "Herramienta de IA de canciones seleccionadas",
    "what": "Establece de una vez qué herramienta de IA (como Suno) usaste en las canciones marcadas.",
    "when": "Úsalo cuando varias canciones se hicieron con la misma herramienta o necesitas corregir un dato equivocado.",
    "click": "Elegir la herramienta todavía no guarda nada. Pulsa [[Aplicar]] al lado para hacerlo.",
    "care": "Si eliges **Sin establecer** y pulsas [[Aplicar]], se borra la herramienta de las canciones marcadas. Si falta la tuya, elige **Otra** y escribe a admin@aimusiclist.com.",
    "like": "Es como estampar la misma marca de fabricación en varios discos."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Aplicar",
    "what": "Guarda la herramienta de IA elegida en todas las canciones marcadas.",
    "when": "Púlsalo después de marcar las canciones y elegir una herramienta.",
    "click": "Se guarda de inmediato, aparece cuántas canciones se cambiaron y se quitan las marcas. La etiqueta ✦ se actualiza en tu sitio y en aimusiclist.com.",
    "care": "La herramienta anterior se sustituye. Si no has marcado canciones, aparecerá un recordatorio para hacerlo.",
    "like": "Es el momento de poner el sello sobre los discos."
  },
  "help.tracks.genre_main": {
    "t": "Género principal",
    "what": "Es el género más importante de esta canción. La lista es igual a la del menú de géneros de aimusiclist.com.",
    "when": "Elige el que mejor encaje. Es obligatorio.",
    "click": "Se guarda al pulsar [[Guardar canción]]. Si es pública, aparecerá en ese género de aimusiclist.com.",
    "care": "No se puede guardar si falta el género principal. Las otras dos casillas son para géneros adicionales.",
    "like": "Es la sección del mercado donde se coloca tu disco, por ejemplo R&B."
  },
  "help.tracks.genre_sub": {
    "t": "Género adicional",
    "what": "Puedes añadir hasta otros dos géneros que también estén presentes. Por ejemplo, a un tema R&B con rap le puedes añadir Hip-hop.",
    "when": "Úsalos si un solo género no describe bien la canción. Son opcionales.",
    "click": "Se guardan al pulsar [[Guardar canción]] o al subir. aimusiclist.com los muestra en orden, después del género principal.",
    "care": "Puedes elegir cualquier género de la lista, agrupada por categorías. Si repites uno, solo se cuenta una vez. Elige «— Ninguno —» para dejarlo vacío.",
    "like": "Son notas pequeñas junto a la etiqueta, como «también tiene un poco de hip-hop»."
  },
  "help.tracks.lang": {
    "t": "Idioma de la canción",
    "what": "Es el idioma de las palabras que se cantan, no el idioma de la pantalla del sitio.",
    "when": "Elige el idioma principal de la letra. Si no hay voz, selecciona «Instrumental (sin letra)».",
    "click": "Se guarda al pulsar [[Guardar canción]]. aimusiclist.com lo usa en sus listas por idioma.",
    "care": "Las canciones antiguas pueden indicar «sin establecer (idioma del sitio)». En ese caso se usa el idioma predeterminado del sitio. Si eliges «Instrumental», se bloquea el segundo idioma.",
    "like": "Es una etiqueta del disco que dice en qué idioma canta la persona."
  },
  "help.tracks.lang2": {
    "t": "Segundo idioma (opcional)",
    "what": "Es otro idioma presente en la letra, por ejemplo una canción coreana con frases en inglés.",
    "when": "Úsalo solo si una parte importante se canta en otro idioma.",
    "click": "Se guarda con [[Guardar canción]]. Elige «— Ninguno —» para quitarlo.",
    "care": "No se activa hasta elegir el idioma principal y queda bloqueado si la canción es instrumental. Tampoco puede repetirse el idioma principal.",
    "like": "Es otra nota en el disco: «también incluye inglés»."
  },
  "help.tracks.ai_paste": {
    "t": "Pegar resultado de IA",
    "what": "Pega aquí el título propuesto por la IA, incluida su parte entre ( ). Así se detectan género, estado de ánimo e idioma. [[Obtener guía]] explica cómo pedírselo a la IA.",
    "when": "Úsalo si te cuesta elegir el género o los archivos no llevan la parte entre ( ).",
    "click": "Pegar texto no cambia nada. Pulsa [[Aplicar]] al lado.",
    "care": "Solo rellena las casillas. Debes guardar al subir o con [[Guardar canción]].",
    "like": "Es entregar una nota de un experto en música para que copien sus datos en la etiqueta."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Aplicar",
    "what": "Lee el texto pegado y rellena género, idioma de la canción y estado de ánimo.",
    "when": "Púlsalo después de pegar el título de la IA.",
    "click": "Al subir, rellena las casillas de los archivos pendientes. Al editar, solo las de esta canción. Debajo aparece qué se completó. Todavía no se guarda nada.",
    "care": "Las palabras desconocidas se omiten y aparecen en amarillo. Si el género principal no existe, las casillas de género quedan igual. Revisa todo antes de guardar.",
    "like": "Es el momento en que alguien copia realmente la nota a las etiquetas."
  },
  "help.site.ext": {
    "t": "Información adicional",
    "what": "Son casillas extra sobre tu sitio. aimusiclist.com decide cuáles existen y muestra tus respuestas junto a tus canciones.",
    "when": "Rellena solo las que te correspondan. Todas son opcionales.",
    "click": "Se guardan junto con el resto al pulsar [[Guardar información del sitio]]. Si vacías una casilla, eliminas esa respuesta.",
    "care": "Solo aparece si aimusiclist.com ofrece datos adicionales para sitios. Si una casilla pide actualizar el programa, aún no podrás completarla; tu respuesta anterior seguirá guardada.",
    "like": "Es como una hoja extra del gran mercado para poner más detalles en tu puesto."
  },
  "help.tracks.ext": {
    "t": "Información adicional",
    "what": "Son datos extra de la canción, como BPM o una nota breve. aimusiclist.com decide las casillas y muestra las respuestas junto a la canción.",
    "when": "Rellena las que conozcas; todas son opcionales.",
    "click": "Se guardan al subir o pulsar [[Guardar canción]]. Durante la subida se aplican a todos los archivos. Al editar, puedes borrar una respuesta vaciando su casilla.",
    "care": "Si se indica que hace falta actualizar, podrás usar la casilla tras actualizar tu sitio. Solo aparecen cuando aimusiclist.com envía su lista.",
    "like": "Es como la letra pequeña detrás de la funda de un disco."
  },
  "help.img.editor": {
    "t": "Ventana de imagen",
    "what": "Prepara una imagen con el tamaño correcto: canción 100×100, portada 200×200 o banner de hasta 1600×400.",
    "when": "Se abre automáticamente al elegir una imagen para una canción, portada o banner.",
    "click": "Elige cómo ajustarla, revisa Resultado y pulsa [[Guardar imagen]]. [[Cancelar]] o Esc cierra sin cambiar nada.",
    "care": "Solo se sube la copia reducida, nunca la foto original. Hay límites de 50 KB, 100 KB o 300 KB según el tipo; se reduce hasta cumplirlos.",
    "like": "Es un pequeño taller que recorta la foto para ajustarla al marco."
  },
  "help.img.mode_crop": {
    "t": "Recortar (mover marco)",
    "what": "Conserva solo la parte de la imagen dentro del marco brillante y elimina el resto.",
    "when": "Úsalo si sobra imagen, tiene otra forma o quieres destacar una cara.",
    "click": "Aparece un marco sobre la foto. Arrástralo o utiliza las flechas para elegir el área. La barra Tamaño del marco lo agranda o reduce. El Resultado cambia al moverlo.",
    "care": "La parte que queda fuera del marco se pierde.",
    "like": "Es como recortar una foto con tijeras para poner lo mejor en la portada."
  },
  "help.img.mode_fit": {
    "t": "Reducir imagen completa",
    "what": "Conserva toda la imagen y la hace más pequeña, en vez de recortarla.",
    "when": "Úsalo si no quieres cortar nada, como un logo o una imagen con texto.",
    "click": "Resultado muestra la imagen completa. Si es cuadrada, los laterales vacíos se rellenan con el color medio de la foto. El banner mantiene su proporción dentro de 1600×400.",
    "care": "Una imagen muy alargada puede verse pequeña en un cuadrado, con bordes anchos de color.",
    "like": "Es como colocar un póster entero dentro de un marco, sin cortarlo."
  },
  "help.img.frame": {
    "t": "Tamaño del marco",
    "what": "Esta barra aumenta o reduce el marco brillante del recorte.",
    "when": "Redúcelo para destacar una parte pequeña, como una cara. Agrándalo para conservar más imagen.",
    "click": "El marco y el Resultado cambian al deslizar la barra. A la derecha del todo tendrá el mayor tamaño posible.",
    "care": "Si recortas una zona muy pequeña de una foto pequeña, puede quedar borrosa. Revisa el Resultado.",
    "like": "Es como acercar o alejar una lupa sobre una fotografía."
  },
  "help.img.result": {
    "t": "Resultado",
    "what": "Es una vista previa de la imagen tal como se guardará.",
    "when": "Mírala antes de pulsar [[Guardar imagen]].",
    "click": "Se actualiza al mover el marco o cambiar el modo. Es solo una vista previa: todavía no se guarda.",
    "care": "Las fotos grandes se ven algo más pequeñas aquí, pero se guardan con su tamaño completo. La copia puede verse ligeramente más suave porque ocupa menos.",
    "like": "Es como un espejo que muestra cómo quedará la foto en su marco."
  },
  "help.img.save": {
    "t": "Guardar imagen",
    "what": "Crea y utiliza la versión final y ligera de la imagen.",
    "when": "Púlsalo cuando te guste el Resultado.",
    "click": "La imagen de canción o el banner se guardan al momento; la canción pública también se ve en aimusiclist.com. La portada queda preparada en el álbum y se guarda al pulsar [[Guardar álbum]].",
    "care": "Si la imagen pesa demasiado o el navegador no puede procesarla, verás un error rojo. Prueba con otra más sencilla, recorta más o usa Chrome, Edge o Firefox.",
    "like": "Es como colgar en la pared la foto ya recortada y enmarcada."
  },
  "help.img.crop": {
    "t": "Foto de perfil",
    "what": "Abre una ventana para ajustar tu foto de perfil a un círculo. Es tu cara o logo y aparece redonda en tu sitio y en aimusiclist.com.",
    "when": "Se abre automáticamente al elegir una foto de perfil.",
    "click": "El círculo queda en el centro y tú mueves la foto por debajo. Arrastra, usa la barra de zoom, la rueda o dos dedos, o las flechas y + / −. Pulsa [[Aplicar]] para guardar o [[Cancelar]] / Esc para salir sin cambios.",
    "care": "Solo se usa lo que quede dentro del círculo. Se sube una copia pequeña de 200×200, no tu foto original.",
    "like": "Es como mover una foto detrás de una ventana redonda hasta centrar tu cara."
  },
  "help.img.crop_zoom": {
    "t": "Zoom",
    "what": "La barra y los botones − y + agrandan o reducen la foto dentro del círculo.",
    "when": "Acerca si la cara se ve pequeña y aleja para mostrar más.",
    "click": "La foto cambia de tamaño desde el centro. A la izquierda ocupa justo el círculo; a la derecha es cuatro veces mayor. Las vistas previas también cambian.",
    "care": "No puedes reducirla más que el círculo, por lo que nunca queda un borde vacío. Si amplías mucho una foto pequeña, se verá borrosa.",
    "like": "Es como acercarte o alejarte de la cámara."
  },
  "help.img.crop_rotate": {
    "t": "Girar",
    "what": "Gira la foto un cuarto de vuelta hacia la derecha.",
    "when": "Úsalo si la imagen está de lado o boca abajo.",
    "click": "Cada pulsación gira 90 grados. Cuatro pulsaciones la devuelven a su posición. Después de cada giro se centra y puedes moverla otra vez.",
    "like": "Es como girar un cuadro en la pared para enderezarlo."
  },
  "help.img.crop_preview": {
    "t": "Vista previa",
    "what": "Dos círculos muestran cómo se verá tu foto de perfil: uno grande y otro pequeño.",
    "when": "Revisa ambos antes de pulsar [[Aplicar]]. El pequeño es parecido al que verá la gente en las listas.",
    "click": "Cambian al mover, ampliar o girar la foto. Todavía no se guarda nada.",
    "care": "Si tu cara no se distingue en el círculo pequeño, amplíala un poco.",
    "like": "Es como alejarte del letrero para comprobar si puede leerse desde la calle."
  },
  "help.img.crop_apply": {
    "t": "Aplicar",
    "what": "Guarda la parte de la foto dentro del círculo como imagen de perfil.",
    "when": "Púlsalo cuando te gusten las vistas previas.",
    "click": "Se guarda enseguida y aparece en tu sitio. aimusiclist.com la recibe en uno o dos minutos. El color de la parte superior del sitio también se elige a partir de esta foto.",
    "care": "Sustituye la foto anterior. Para cambiarla otra vez, elige una nueva.",
    "like": "Es como colgar tu retrato nuevo en el escaparate."
  },
  "help.top.profile_go": {
    "t": "Añadir foto",
    "what": "Inicia el proceso para añadir tu foto de perfil.",
    "when": "Púlsalo desde el consejo de foto de perfil.",
    "click": "Se abre Información del sitio y tu dispositivo te pide una imagen. Después la recortas y se guarda al aplicarla. Los visitantes y aimusiclist.com la verán poco después.",
    "care": "Puedes cambiarla o borrarla más adelante desde Información del sitio.",
    "like": "Es como llevar la fotografía al fabricante del letrero."
  },
  "help.tab.tracks": {
    "t": "Canciones",
    "what": "Aquí subes canciones, cambias sus datos (título, géneros, idioma, imagen y letra) y eliges cuáles publicar en aimusiclist.com.",
    "when": "Entra para añadir canciones nuevas o corregir las anteriores.",
    "click": "Al pulsar la pestaña solo cambia la pantalla. Dentro, muchos cambios se guardan en el momento.",
    "care": "Puedes subir hasta 20 canciones por tanda, de 15 MB cada una y de entre 30 segundos y 15 minutos. Cada canción necesita un género principal y puede tener otros dos. Al menos 10 deben seguir públicas (todas si tienes menos). Borrar una canción es irreversible.",
    "like": "Es el almacén donde llegan los discos, reciben etiquetas y se eligen los que irán al mercado."
  },
  "help.tab.albums": {
    "t": "Álbumes",
    "what": "Aquí agrupas canciones en álbumes con nombre, portada y descripción breve.",
    "when": "Entra cuando quieras presentar juntas varias canciones.",
    "click": "Al pulsar la pestaña solo cambias de pantalla. Un álbum con entre 6 y 35 canciones con audio se publica en aimusiclist.com al guardarlo o a la hora que elijas.",
    "care": "Puedes crear álbumes con menos de seis canciones, pero serán privados. La descripción admite hasta 200 caracteres. Las canciones de un álbum público no pueden hacerse privadas mientras lo sea.",
    "like": "Es como reunir varios discos en una caja con su propia portada."
  },
  "help.tab.skins": {
    "t": "Diseños",
    "what": "Aquí cambias los colores, las letras y la distribución de tu sitio. Puedes usar un diseño incluido, instalar uno de la galería o subir el tuyo.",
    "when": "Entra si quieres cambiar su aspecto o aparece un punto que anuncia una nueva versión.",
    "click": "La pestaña solo cambia de pantalla. Un nuevo diseño aparece para los visitantes en unos 30 segundos y puedes volver al anterior.",
    "care": "Claro y Oscuro están siempre disponibles, más otros 20 como máximo. Un diseño subido ocupa hasta 100 KB. Cambiarlo no altera canciones ni ajustes.",
    "like": "Es como pintar la tienda y cambiar las estanterías sin tocar los discos."
  },
  "help.tab.site": {
    "t": "Información del sitio",
    "what": "Aquí se configura todo el sitio: nombre, artista, idioma, descripción, redes sociales, imágenes, botones, anuncios, lista de artistas, acceso y clave de uso.",
    "when": "Entra al terminar la instalación o cuando quieras cambiar cómo te presentas.",
    "click": "La pestaña solo abre esta pantalla. Algunas tarjetas tienen botón para guardar y los interruptores guardan al pulsarlos.",
    "care": "No puedes usar el nombre de un cantante o grupo famoso. El nombre del sitio y del artista también aparecen en aimusiclist.com. Cambiar la contraseña cierra las sesiones en todos los dispositivos.",
    "like": "Es el cajón que guarda el letrero, la tarjeta con tu nombre y los documentos de la tienda."
  },
  "help.tab.guestbook": {
    "t": "Libro de visitas",
    "what": "Aquí lees mensajes cortos que dejan los visitantes en el sitio o en canciones, lo activas o desactivas y eliminas mensajes.",
    "when": "Entra para leer lo que escribieron o borrar un comentario inadecuado.",
    "click": "La pestaña carga los mensajes, 20 por página. Activar, desactivar y borrar se guardan enseguida.",
    "care": "Los nombres admiten 20 caracteres y los mensajes 500; no se aceptan enlaces, y cada persona puede dejar hasta 50 mensajes al día. Se conservan hasta que los borres y no se pueden recuperar. Desactivar el libro no los elimina.",
    "like": "Es el cuaderno de la entrada donde los clientes dejan unas palabras."
  },
  "help.tab.domain": {
    "t": "Mi dominio",
    "what": "Aquí conectas tu propia dirección web, como mymusic.com, en vez de la dirección larga de instalación.",
    "when": "Entra cuando tengas un dominio comprado y quieras que lo usen tus visitantes.",
    "click": "La pestaña abre la guía (unos diez minutos). Al conectar, se comprueba la dirección y luego se comunica a aimusiclist.com.",
    "care": "Quien visite la dirección antigua irá a la nueva y las canciones de playlists seguirán sonando. En los sitios de meshmelo, conecta el dominio desde tu cuenta de meshmelo.",
    "like": "Es ponerle a tu tienda una dirección corta y fácil de recordar."
  },
  "help.tab.stats": {
    "t": "Estadísticas",
    "what": "Muestra visitas y reproducciones de tu sitio por día, canciones y álbumes populares, países, procedencia, dispositivos e idiomas. También incluye las cifras de aimusiclist.com.",
    "when": "Entra para ver qué escuchan y si tus enlaces atraen visitantes.",
    "click": "Al abrir se cargan las cifras. Cambian una vez al día. [[Actualizar ahora]] calcula los datos de hoy, como máximo una vez por minuto.",
    "care": "Tus propias visitas con la sesión iniciada no cuentan. Las cifras de aimusiclist.com cambian una vez al día por la mañana. Algunas instalaciones no pueden contar visitas o reproducciones; aquí se explica el motivo y cómo activarlas.",
    "like": "Es el libro de visitas y ventas de la tienda, con los números ya sumados."
  },
  "help.tab.analysis": {
    "t": "Análisis",
    "what": "Estudia tus canciones en aimusiclist.com: cambios de puesto, canciones que suben, comienzos de nuevos temas, distancia al Top 100, me gusta, añadidos a playlists y posición en el género. También muestra noticias.",
    "when": "Entra para saber qué canciones crecen y cuáles conviene compartir.",
    "click": "Se abren las cifras guardadas, reunidas una vez al día. Abrirlo muchas veces no cambia nada. Un punto anuncia noticias nuevas de aimusiclist y desaparece al abrir la pestaña.",
    "care": "Un sitio recién creado tendrá pocos datos. Los gráficos se llenan con el paso de los días.",
    "like": "Es el informe semanal del gran mercado sobre tus discos."
  },
  "help.top.mm_two_screens": {
    "t": "Tienes dos lugares para administrar",
    "what": "Una tarjeta explica la diferencia entre el panel de este sitio y tu cuenta de meshmelo, con sus direcciones y funciones.",
    "when": "Ábrela si no sabes dónde está una opción. Se abre y cierra con el botón ? superior.",
    "click": "Leerla no modifica nada. Su botón abre tu cuenta de meshmelo en otra pestaña.",
    "care": "Esta tarjeta solo aparece en sitios de meshmelo.",
    "like": "Es como una señal de pasillo: «Mostrador por aquí, oficina principal por allá»."
  },
  "help.top.php_update": {
    "t": "Actualizar ahora",
    "what": "En la versión PHP, actualiza automáticamente el programa a la versión más reciente.",
    "when": "Púlsalo cuando aparezca el aviso de versión nueva y tengas un minuto.",
    "click": "Primero pide confirmación. Tarda un minuto aproximadamente y se recarga la página. Si falla, recupera la versión anterior automáticamente.",
    "care": "Conserva canciones, ajustes y páginas. No cierres mientras se actualiza. Los sitios de meshmelo no tienen este botón porque meshmelo los actualiza.",
    "like": "Es como cambiar las estanterías dejando cada disco en su sitio."
  },
  "help.top.usage_r2_storage": {
    "t": "Almacenamiento R2 (10 GB gratis)",
    "what": "Muestra el espacio ocupado por tus archivos en R2, el almacenamiento de Cloudflare. Casi todo son canciones.",
    "when": "Revísalo antes de subir muchas canciones.",
    "click": "Es solo una cifra que se actualiza cada diez minutos.",
    "care": "Cuanto más bajo, mejor. Si superas 10 GB, Cloudflare cobra a tu cuenta. Si está lleno, borra archivos que no necesites o utiliza MP3 en vez de WAV. También cuenta lo guardado en otros buckets de la misma cuenta de Cloudflare.",
    "like": "Es lo lleno que está tu almacén: tienes unos 10 GB de espacio gratuito."
  },
  "help.top.usage_class_a": {
    "t": "Escrituras R2 este mes (1 millón gratis)",
    "what": "Cuenta cuántas veces se ha escrito algo en R2 este mes: subidas, cambios y otras operaciones.",
    "when": "Revísalo durante un mes con muchas subidas o modificaciones.",
    "click": "Es una cifra que vuelve a cero cada mes.",
    "care": "Cuanto más bajo, mejor. Una modificación supone pocas escrituras y subir 20 canciones equivale a unas 60, así que un millón es mucho. Borrar es gratis. Cloudflare cobra si superas el límite gratuito.",
    "like": "Es cuántas veces abriste la puerta del almacén para guardar algo."
  },
  "help.top.usage_class_b": {
    "t": "Lecturas R2 este mes (10 millones gratis)",
    "what": "Cuenta las lecturas de R2 de este mes. La mayoría se producen cuando alguien reproduce tus canciones o abre tu sitio.",
    "when": "Revísalo cuando tus canciones tengan muchas escuchas.",
    "click": "Es una cifra que vuelve a cero cada mes.",
    "care": "Si sube, significa que la gente escucha tu música, lo cual es bueno. Si supera diez millones, Cloudflare cobra a tu cuenta. Si crece muy deprisa, mira Estadísticas para saber de dónde vienen las reproducciones.",
    "like": "Es cuántas veces se sacó un disco del almacén para escucharlo."
  },
  "help.top.usage_workers": {
    "t": "Solicitudes Workers hoy (100.000 gratis)",
    "what": "Cuenta cuántas solicitudes ha atendido hoy tu sitio: abrir páginas y enviar partes de una canción.",
    "when": "Revísalo en días con muchas visitas, por ejemplo tras compartir un enlace.",
    "click": "Es una cifra que vuelve a cero cada día a las 00:00 UTC (09:00 en Corea).",
    "care": "Si supera 100.000 al día, el sitio se detiene hasta el reinicio, sin coste. Cuenta toda la cuenta de Cloudflare. En PHP se contabiliza el Worker de audio y se para la reproducción. Los sitios de meshmelo no muestran esta barra.",
    "like": "Es el máximo de clientes que puede atender la tienda en un día; al alcanzarlo, cierra hasta mañana."
  },
  "help.top.usage_disk_space": {
    "t": "Espacio usado por este sitio",
    "what": "Indica cuánto ocupan los archivos de este sitio en tu alojamiento. Las canciones suelen ocupar más.",
    "when": "Revísalo antes de subir muchas canciones.",
    "click": "Es una cifra o una barra si se conoce el límite de tu plan.",
    "care": "Cuanto menos, mejor. Si te acercas al límite, elimina canciones innecesarias o utiliza MP3 más pequeños. Aquí no se cuentan los otros sitios del mismo alojamiento.",
    "like": "Es el suelo que ocupan tus discos en una tienda alquilada."
  },
  "help.top.usage_files": {
    "t": "Archivos (inodos)",
    "what": "Indica cuántos archivos tiene este sitio en el alojamiento. Las empresas limitan a menudo la cantidad de archivos, además del espacio.",
    "when": "Revísalo si tienes muchas canciones o recibes un aviso de límite de archivos.",
    "click": "Es una cifra o una barra si se conoce el límite de tu plan.",
    "care": "Cuanto menos, mejor. Cada canción añade varios archivos (audio, imagen y letra); borrar canciones que no uses reduce el número.",
    "like": "Es contar las cajas del almacén, aunque algunas sean muy pequeñas."
  },
  "help.top.usage_tracks": {
    "t": "Canciones",
    "what": "Muestra cuántas canciones tiene este sitio.",
    "when": "Sirve para echar un vistazo y calcular cuánto ocupa cada canción de media.",
    "click": "Es solo una cifra que cambia al subir o eliminar canciones.",
    "care": "Aquí no hay barra de límite.",
    "like": "Es contar todos los discos de la tienda."
  },
  "help.top.usage_disk": {
    "t": "Uso del alojamiento (este sitio)",
    "what": "En PHP, si guardas canciones en tu alojamiento, muestra espacio, número de archivos y cantidad de canciones.",
    "when": "Revísalo antes de subir muchas canciones porque los planes tienen límites.",
    "click": "Es un título. Las cifras se actualizan cada diez minutos. [[Actualizar]] las consulta ahora.",
    "care": "Los límites reales de tu plan están en cPanel → Statistics. Solo verás barras porcentuales si se configuraron los límites al instalar; de lo contrario, verás cifras.",
    "like": "Es el contador de espacio de una tienda alquilada, cuyo contrato marca cuánto puedes ocupar."
  },
  "help.top.usage": {
    "t": "Uso gratuito de Cloudflare",
    "what": "Muestra barras de almacenamiento, lecturas y escrituras mensuales y solicitudes de hoy en tu cuenta de Cloudflare.",
    "when": "Revísalo de vez en cuando, sobre todo cuando haya muchas visitas.",
    "click": "Es un título. Se actualiza cada diez minutos. [[Actualizar]] consulta los datos ahora.",
    "care": "Cuanto menos, mejor. La barra se pone naranja al 70 % y roja al 90 %. Superar el uso gratuito de R2 cuesta dinero; superar Workers detiene el sitio hasta mañana, sin cargo. Las cifras son de toda la cuenta de Cloudflare, no solo de este sitio.",
    "like": "Es el contador eléctrico de tu tienda: míralo antes de recibir la factura."
  },
  "help.top.usage_refresh": {
    "t": "Actualizar",
    "what": "Consulta ahora el consumo en Cloudflare, sin esperar diez minutos.",
    "when": "Púlsalo después de subir muchos archivos o añadir una nueva clave de uso.",
    "click": "Las barras se actualizan en un momento y cambia la hora junto al título.",
    "care": "Las propias cifras de Cloudflare pueden tardar en actualizarse, así que quizá veas lo mismo durante un rato.",
    "like": "Es acercarte al contador para leerlo personalmente."
  },
  "help.top.usage_connect": {
    "t": "Conectar",
    "what": "Aparece cuando aún no has añadido una clave de uso. Con ella se muestran los límites gratuitos de Cloudflare.",
    "when": "Púlsalo para añadir la clave; tardarás unos dos minutos.",
    "click": "Se abre Información del sitio en la tarjeta **Ver consumo**, lista para pegar la clave.",
    "care": "Tu sitio funciona sin la clave, pero no puedes saber si estás cerca del límite. La clave solo permite consultar cifras.",
    "like": "Es como instalar el contador eléctrico: la luz funciona sin él, pero no sabes cuánto consumes."
  },
  "help.top.usage_retoken": {
    "t": "Volver a introducir la clave",
    "what": "Aparece si la clave está guardada, pero no se pueden leer las cifras. El motivo aparece arriba.",
    "when": "Púlsalo si la clave se borró en Cloudflare, caducó o le falta un permiso.",
    "click": "Se abre la tarjeta **Ver consumo** de Información del sitio para pegar otra clave.",
    "care": "Comprueba que la clave procede de la misma cuenta de Cloudflare y tiene Account Analytics · Read y Account Settings · Read. Las barras pueden mostrar las últimas cifras válidas hasta que lo soluciones.",
    "like": "Es como cambiar una llave del contador que ya no abre."
  },
  "help.top.usage_uploaded": {
    "t": "Audio subido desde este panel",
    "what": "Es el tamaño total de los archivos de canciones subidos desde aquí. Solo se cuentan los de este sitio.",
    "when": "Compáralo con la barra de almacenamiento. Si es mucho mayor, otra cosa de tu cuenta de Cloudflare está ocupando espacio.",
    "click": "Es una cifra que cambia al subir o borrar canciones.",
    "care": "Las líneas superiores explican qué ocurre si superas los límites gratuitos. En PHP también indican dónde encontrar los límites de tu alojamiento.",
    "like": "Es cuánto espacio ocupan tus propios discos, sin contar las cajas ajenas."
  },
  "help.top.mm_upgrade": {
    "t": "Conseguir más capacidad",
    "what": "Botón para pedir a meshmelo un límite diario mayor. Aparece en el aviso superior cuando alcanzas el 80 % de uso.",
    "when": "Púlsalo si tu sitio agota a menudo la cantidad diaria gratuita.",
    "click": "Se abre la página de mejoras de meshmelo o un correo. Nada cambia hasta que meshmelo configure el aumento.",
    "care": "La mayoría de sitios no lo necesita. Un día muy concurrido vuelve a empezar desde cero al restablecerse el límite.",
    "like": "Es como pedir más electricidad para una tienda llena de clientes."
  },
  "help.top.mm_use": {
    "t": "Consumo de hoy",
    "what": "En sitios meshmelo, es un porcentaje del consumo gratuito diario. Debajo aparecen los últimos siete días.",
    "when": "Revísalo en días con mucho tráfico, por ejemplo después de compartir un enlace.",
    "click": "Es una cifra que vuelve a 0 % cada día a la hora indicada debajo.",
    "care": "Menos uso deja más margen, aunque un valor alto puede significar muchos visitantes. Desde el 80 % verás un aviso y al 100 % los visitantes verán «Volvemos pronto» hasta reiniciar el límite. El panel y las reproducciones en aimusiclist.com siguen funcionando.",
    "like": "Es el contador de electricidad de hoy. Cuando llega al máximo, la tienda cierra hasta mañana."
  },
  "help.top.mm_use_notify": {
    "t": "Avisarme por correo una vez al día si supera el 80 %",
    "what": "Casilla para recibir un aviso por correo si el consumo diario supera el 80 %.",
    "when": "Actívala si no consultas este panel cada día.",
    "click": "Se guarda al marcarla o desmarcarla. Llegará como máximo un correo al día.",
    "care": "Solo avisa: no detiene nada. Esta opción se muestra si meshmelo tiene activos los avisos por correo.",
    "like": "Es pedir que el lector del contador te avise cuando esté casi lleno."
  },
  "help.top.aml_retry": {
    "t": "Probar ahora",
    "what": "Intenta conectarse de inmediato a aimusiclist.com, sin esperar el siguiente intento automático.",
    "when": "Púlsalo si aparece «sin conexión» o acabas de corregir la causa indicada.",
    "click": "El estado cambia a «Conectando…» y enseguida muestra el resultado. Si conecta, se envían las canciones públicas a aimusiclist.com.",
    "care": "Si el problema está en aimusiclist.com, pulsarlo muchas veces no ayudará. Espera un poco y vuelve a intentarlo.",
    "like": "Es llamar tú mismo al mercado, en lugar de esperar su llamada."
  },
  "help.tracks.list": {
    "t": "Mis canciones",
    "what": "Es la lista de todas las canciones de tu sitio. El número entre paréntesis indica cuántas tienes.",
    "when": "Entra para buscar, publicar o retirar canciones de aimusiclist.com, escucharlas, modificarlas o borrarlas.",
    "click": "Aquí aparecen tus canciones realmente guardadas. Los interruptores y botones de cada fila actúan inmediatamente.",
    "care": "Las canciones sin archivo de audio muestran **Sin audio**. No se cuentan en ninguna parte hasta que añadas el archivo.",
    "like": "Es el inventario de tu tienda, con una marca para saber qué discos también están en el gran mercado."
  },
  "help.tracks.search": {
    "t": "Buscar títulos de canciones",
    "what": "Busca canciones por su título. En la lista solo quedan las que contienen las palabras escritas.",
    "when": "Úsalo para encontrar rápidamente una canción o seleccionar varias y cambiarlas juntas.",
    "click": "La lista cambia mientras escribes. No guarda ni modifica nada. Vacía la búsqueda para ver todas de nuevo.",
    "care": "Busca solo en títulos, no en géneros ni artistas. No distingue mayúsculas. [[Seleccionar todas las visibles]] marca únicamente los resultados de la búsqueda.",
    "like": "Es recorrer las estanterías buscando el nombre escrito en el lomo de un disco."
  },
  "help.tracks.nolang": {
    "t": "Solo canciones sin idioma",
    "what": "Muestra únicamente canciones que aún no tienen definido el idioma de la letra.",
    "when": "Úsalo para encontrar canciones antiguas sin idioma y corregirlas juntas.",
    "click": "La lista cambia al instante, sin guardar nada. Desmarca la casilla para volver a ver todas. Funciona junto con la búsqueda de títulos.",
    "care": "Mientras no se defina, aimusiclist.com usará el idioma principal del sitio. Para corregirlo, marca esta opción y luego todas las visibles, selecciona **Idioma de las canciones seleccionadas** y pulsa [[Aplicar]].",
    "like": "Como sacar solo los discos que aún no tienen etiqueta con el idioma de la canción."
  },
  "help.tracks.bulk": {
    "t": "Cambiar varias canciones a la vez",
    "what": "Permite cambiar varias canciones juntas. Si ninguna está marcada, muestra una pista; al marcarlas, aparece la cantidad y las herramientas disponibles.",
    "when": "Úsalo cuando quieras aplicar un mismo cambio a muchas canciones sin editarlas una por una.",
    "click": "Marcar canciones no guarda nada. Cada herramienta guarda con su botón [[Aplicar]] u otro botón propio. Después se quitan las marcas.",
    "care": "Marca las casillas a la izquierda o la casilla superior para todas las visibles. Puedes cambiar estado de ánimo y otros datos, idioma, herramienta de IA y si se muestran reproducciones (cuando el sitio las cuenta).",
    "like": "Es como poner una etiqueta a varios discos en un solo movimiento."
  },
  "help.tracks.bulk_lang": {
    "t": "Idioma de las canciones seleccionadas",
    "what": "Asigna de una vez el idioma de la letra a todas las canciones marcadas. También puedes añadir un segundo idioma.",
    "when": "Úsalo para varias canciones en el mismo idioma o para corregir las que no tienen idioma.",
    "click": "Elegir idiomas no guarda nada. Pulsa [[Aplicar]] debajo.",
    "care": "Es el idioma de la letra, no de tu sitio. Si no hay voz, elige **Instrumental (sin letra)**. No puede combinarse con otro idioma. aimusiclist.com lo usa para las listas por idioma.",
    "like": "Es escribir «cantado en coreano» en las etiquetas de varios discos."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Aplicar",
    "what": "Guarda el idioma seleccionado en todas las canciones marcadas.",
    "when": "Púlsalo después de marcar canciones y elegir idioma.",
    "click": "Se guarda al momento, aparece cuántas canciones cambiaron y se quitan las marcas. aimusiclist.com muestra el idioma nuevo poco después.",
    "care": "Reemplaza el idioma anterior. Si no hay canciones marcadas, solo te recordará que elijas algunas.",
    "like": "Es cuando pegas realmente las etiquetas nuevas de idioma."
  },
  "help.tracks.select": {
    "t": "Seleccionar canciones",
    "what": "La casilla superior marca todas las canciones visibles; las pequeñas casillas de cada fila marcan una.",
    "when": "Úsalo antes de cambiar varias canciones desde el cuadro superior.",
    "click": "Solo selecciona, no guarda nada. El cuadro superior muestra cuántas has marcado y abre las herramientas.",
    "care": "La casilla superior solo marca las visibles. Si buscaste o activaste **Solo canciones sin idioma**, las ocultas quedan sin marcar.",
    "like": "Es señalar los discos que vas a etiquetar antes de coger las pegatinas."
  },
  "help.tracks.pub": {
    "t": "Pública en aimusiclist",
    "what": "El interruptor de cada fila decide si la canción aparece también en aimusiclist.com. En tu sitio siempre aparece, esté activado o no.",
    "when": "Actívalo para llegar a más oyentes; desactívalo para mantener la canción solo en tu sitio.",
    "click": "Se guarda inmediatamente. Al activarlo, la canción aparece en aimusiclist.com en 1–2 minutos; al desactivarlo, desaparece de allí.",
    "care": "Si tienes diez canciones o más, al menos diez deben seguir públicas. Con menos de diez, todas deben ser públicas. Un interruptor gris indica que la canción está en un álbum público o programado; primero haz privado el álbum.",
    "like": "Eliges qué discos de tu tienda también expones en el gran mercado."
  },
  "help.tracks.col_title": {
    "t": "Título",
    "what": "Muestra imagen, título y artista de la canción, además del idioma y pequeñas etiquetas.",
    "when": "Míralo para comprobar rápidamente sus datos.",
    "click": "Solo informa. Para cambiarlo pulsa [[Editar]] en esa fila.",
    "care": "Las etiquetas significan: **SRT** = letra sincronizada, **✦ nombre** = herramienta de IA, **Sin audio** = falta el archivo y **En álbum publicado** = pertenece a un álbum público. En móviles también aparece aquí el número de reproducciones.",
    "like": "Es la cara de una funda: imagen, título y quién hizo el disco."
  },
  "help.tracks.col_genres": {
    "t": "Géneros",
    "what": "Muestra hasta tres géneros. El primero, resaltado, es el principal; los demás son adicionales.",
    "when": "Míralos para comprobar que la canción está bien clasificada.",
    "click": "Solo muestra información. Pulsa [[Editar]] para cambiar los géneros.",
    "care": "El género principal determina el menú de aimusiclist.com. Los adicionales se muestran junto al título. Esta columna no aparece en móviles.",
    "like": "Es la etiqueta de estantería que indica en qué sección del mercado está el disco."
  },
  "help.tracks.col_length": {
    "t": "Duración",
    "what": "Es lo que dura la canción, en minutos y segundos, por ejemplo 3:25.",
    "when": "Comprueba que subiste el archivo correcto, especialmente si parece demasiado corto.",
    "click": "Solo informa y se calcula desde el archivo de audio. Para cambiarlo, sube otro archivo en [[Editar]].",
    "care": "Una canción debe durar entre 30 segundos y 15 minutos. Esta columna se oculta en móviles.",
    "like": "Es la duración impresa detrás de la funda del disco."
  },
  "help.tracks.col_plays": {
    "t": "Reproducciones",
    "what": "Cuenta todas las veces que se escuchó la canción en tu sitio. Coloca el cursor sobre la cifra para ver los últimos siete días y hoy.",
    "when": "Úsalo para saber qué canciones gustan más y elegir cuáles publicar o añadir a un álbum. Más reproducciones suelen ser mejor señal.",
    "click": "Solo informa. Se actualiza una vez al día o al pulsar [[Actualizar ahora]] en Estadísticas.",
    "care": "No incluye reproducciones de aimusiclist.com. Solo aparece si tu sitio cuenta escuchas. Si la cifra parece baja, espera al siguiente cálculo o pulsa [[Actualizar ahora]]. **Oculto para visitantes** significa que ellos no ven ese número.",
    "like": "Es el contador de cada disco, que registra cuántas veces lo escuchan en tu tienda."
  },
  "help.tracks.row_buttons": {
    "t": "Botones de canción",
    "what": "Al final de cada fila aparecen [[Vista previa]], [[Editar]] y [[Eliminar]].",
    "when": "Úsalos para escuchar, modificar o quitar una canción.",
    "click": "[[Vista previa]] reproduce aquí (detén con [[Detener]]). [[Editar]] abre el formulario arriba. [[Eliminar]] pide confirmación y borra inmediatamente la canción y su audio.",
    "care": "Eliminar es irreversible y la canción desaparece de aimusiclist.com. [[Vista previa]] solo existe si hay audio. Si al borrarla un álbum público quedaría con menos de seis canciones, no se permite.",
    "like": "Son las herramientas del mostrador: reproducir el disco, cambiar su etiqueta o retirarlo para siempre."
  },
  "help.tracks.bulk_plays": {
    "t": "Reproducciones visibles para visitantes",
    "what": "Decide si los visitantes pueden ver cuántas veces se reprodujeron las canciones marcadas.",
    "when": "Úsalo para ocultar la cifra en canciones nuevas o volver a mostrarla.",
    "click": "Pulsa [[Mostrar]] u [[Ocultar]] y el cambio se guarda enseguida en las canciones marcadas.",
    "care": "Las cifras solo se ven si en Información del sitio activaste **Mostrar reproducciones a visitantes**. Esta opción aparece si tu sitio cuenta las escuchas. Tú siempre puedes verlas en el panel.",
    "like": "Es elegir qué discos llevan una pegatina con «escuchado 120 veces»."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Mostrar",
    "what": "Permite a los visitantes ver las reproducciones de las canciones seleccionadas.",
    "when": "Púlsalo si habías ocultado las cifras y quieres volver a enseñarlas.",
    "click": "Se guarda de inmediato y se quitan las marcas. Puedes pulsar [[Ocultar]] para deshacerlo.",
    "care": "No verán nada si **Mostrar reproducciones a visitantes** está desactivado en Información del sitio.",
    "like": "Es volver a poner la pegatina con el número de escuchas."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Ocultar",
    "what": "Oculta a los visitantes las cifras de las canciones seleccionadas.",
    "when": "Úsalo si todavía no quieres enseñar sus reproducciones, por ejemplo tras subirlas.",
    "click": "Se guarda inmediatamente y se quitan las marcas. Si el interruptor del sitio está activo, verás **Oculto para visitantes** bajo las cifras. Pulsa [[Mostrar]] para deshacerlo.",
    "care": "Solo se oculta el número: las canciones siguen sonando y contando escuchas.",
    "like": "Es quitar la pegatina del número sin retirar el disco."
  },
  "help.tracks.plays_show": {
    "t": "Mostrar las reproducciones de esta canción",
    "what": "Decide si los visitantes ven cuánto se reprodujo este tema en tu sitio, por ejemplo «1234 reproducciones».",
    "when": "Desmárcalo si prefieres mantener privada la cifra.",
    "click": "Se guarda al pulsar [[Guardar canción]]. La cifra visible se actualiza una vez al día.",
    "care": "Los visitantes solo la ven si está activado «Mostrar reproducciones a visitantes» en Información del sitio. Cuando entras con tu cuenta, tú siempre ves todas las cifras.",
    "like": "Es decidir si cuelgas un pequeño contador en ese disco."
  },
  "help.site.plays": {
    "t": "Reproducciones",
    "what": "Configura las cifras de escuchas de las canciones en tu propio sitio, sin contar las de aimusiclist.com.",
    "when": "Entra para decidir si los visitantes pueden verlas.",
    "click": "Este título solo explica la tarjeta. Si indica que primero debes contar reproducciones, consulta Estadísticas para activar esa función.",
    "care": "Estas cifras son solo de tu sitio; no se envían a aimusiclist.com ni modifican sus listas.",
    "like": "Es el contador del tocadiscos de la tienda."
  },
  "help.site.plays_switch": {
    "t": "Mostrar reproducciones a visitantes",
    "what": "Si lo activas, cada canción muestra un número como «1234 reproducciones». Al principio está desactivado.",
    "when": "Actívalo para mostrar qué canciones se escuchan más, o déjalo apagado si prefieres ocultarlo.",
    "click": "Se guarda al pulsarlo. Las cifras cambian una vez al día, o con [[Actualizar ahora]] en Estadísticas. Un número mayor significa más escuchas. Puedes ocultar la cifra de canciones concretas desde su lista o edición.",
    "care": "Cuando estás conectado ves todas las cifras, incluidas las ocultas. Solo tú puedes verlas; los visitantes no.",
    "like": "Es colocar el contador del tocadiscos a la vista de los clientes."
  },
  "help.site.likes": {
    "t": "Me gusta",
    "what": "Configura el botón ♥ de tus canciones. Los visitantes lo pulsan cuando les gusta un tema.",
    "when": "Entra para mostrarlo u ocultarlo en todo el sitio.",
    "click": "Este título solo explica la tarjeta; el interruptor inferior hace el cambio. Si pide activar estadísticas, todavía no se pueden contar los corazones: consulta Estadísticas.",
    "care": "Los me gusta se cuentan solo en tu sitio. No se envían a aimusiclist.com ni afectan a sus listas.",
    "like": "Es el tablero donde los clientes ponen corazones junto a sus discos favoritos."
  },
  "help.site.likes_switch": {
    "t": "Mostrar botón Me gusta",
    "what": "Muestra u oculta el botón ♥ de todas las canciones. Al principio está activado.",
    "when": "Déjalo encendido para conocer las favoritas o apágalo si no quieres corazones.",
    "click": "Se guarda al pulsarlo. Los visitantes pueden dar ♥ sin iniciar sesión y volver a pulsarlo para quitarlo. Las cifras cambian una vez al día; cuantos más corazones, más gusta la canción.",
    "care": "Solo aparece si las estadísticas están activadas. Al apagarlo se oculta, pero se conservan los me gusta anteriores; al encenderlo regresan.",
    "like": "Es colgar o retirar el tablero de corazones de la tienda."
  },
  "help.site.add": {
    "t": "Añadir a aimusiclist",
    "what": "Configura el botón «+ aimusiclist», con el que los visitantes añaden canciones a sus propias playlists de aimusiclist.com.",
    "when": "Entra para mostrar u ocultar el botón en tu sitio.",
    "click": "Este título solo explica la tarjeta; usa el interruptor inferior. Si pide conectar primero, tu sitio aún no está vinculado a aimusiclist.com y el botón no aparecerá.",
    "like": "Es como una etiqueta «llévalo al gran mercado» que permite guardar ese disco en la cesta personal."
  },
  "help.site.add_switch": {
    "t": "Mostrar el botón «+ aimusiclist»",
    "what": "Muestra u oculta «+ aimusiclist» junto a las canciones y en el reproductor. Al principio está activado.",
    "when": "Déjalo encendido para que los oyentes guarden tus canciones en sus playlists. Apágalo si no quieres mostrarlo.",
    "click": "Se guarda inmediatamente. Cuando alguien lo pulsa, se abre una ventana de aimusiclist (otra pestaña en móviles) y puede elegir una playlist sin iniciar sesión.",
    "care": "Solo aparece en canciones públicas de aimusiclist y cuando tu sitio está conectado. Este interruptor no hace públicas ni privadas las canciones.",
    "like": "Es como poner «añadir a mi cesta» junto a los discos disponibles en el gran mercado."
  },
  "help.tracks.bulk_mood": {
    "t": "Cambiar el ánimo de las canciones marcadas",
    "what": "Cambia el estado de ánimo, como Calm o Energetic, de todas las canciones seleccionadas. Si eliges otro dato en **Qué cambiar**, cambia ese dato.",
    "when": "Úsalo tras subir muchas canciones o para ordenarlas por sensaciones.",
    "click": "No ocurre nada hasta pulsar [[Aplicar]]. Entonces el valor se guarda en todas las canciones marcadas y aparece en tu sitio y en aimusiclist.com.",
    "care": "El valor anterior se sustituye. Esta opción solo aparece si aimusiclist.com ofrece datos adicionales que pueden elegirse de una lista.",
    "like": "Es pegar una etiqueta del mismo color a varios discos para encontrarlos por ambiente."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Qué cambiar",
    "what": "Elige qué dato adicional vas a asignar a las canciones marcadas. Primero aparece el estado de ánimo.",
    "when": "Cámbialo si quieres modificar otro dato de varias canciones juntas.",
    "click": "Aquí solo cambian las opciones inferiores. No se guarda nada hasta pulsar [[Aplicar]].",
    "care": "La lista viene de aimusiclist.com y puede crecer. Solo aparecen los datos que se eligen desde una lista.",
    "like": "Es elegir qué tipo de pegatina colocarás: ánimo u otra información."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Aplicar",
    "what": "Guarda el valor elegido en todas las canciones marcadas.",
    "when": "Púlsalo tras seleccionar canciones y un valor.",
    "click": "Se guarda al instante, aparece cuántas canciones cambiaron y se quitan las marcas. aimusiclist.com muestra el dato poco después.",
    "care": "Si eliges **— borrar (sin valor) —** o dejas sin marcar todas las opciones múltiples, el dato se elimina. Sin canciones marcadas, solo se te pedirá que selecciones algunas.",
    "like": "Es el momento de pegar las etiquetas nuevas."
  },
  "help.top.lang_fix": {
    "t": "Establecer ahora",
    "what": "Selecciona todas las canciones sin idioma para que lo asignes de una vez.",
    "when": "Púlsalo desde el aviso de idioma pendiente.",
    "click": "Se abre Canciones mostrando y marcando solo esas canciones. Aparece la herramienta para cambiar el idioma de varias. Elige el idioma y aplícalo: nada se guarda antes.",
    "care": "Si las canciones tienen idiomas diferentes, desmarca algunas y hazlo por grupos.",
    "like": "Es reunir en una mesa todos los discos sin etiqueta para poder etiquetarlos juntos."
  },
  "help.tracks.aml_box": {
    "t": "Publicar también en aimusiclist.com",
    "what": "Decide si la canción también aparece en aimusiclist.com. En tu propio sitio siempre estará disponible.",
    "when": "Déjalo marcado si quieres que todo el mundo la escuche y pueda entrar en el Top 100. Desmárcalo si solo la quieres en tu sitio.",
    "click": "Se guarda al subir o pulsar [[Guardar canción]]. Las canciones públicas aparecen en aimusiclist.com unos minutos después. Puedes cambiarlo en la lista.",
    "care": "Al menos diez canciones deben seguir públicas (todas, si tienes menos de diez). Por eso una canción nueva puede publicarse aunque desmarques la casilla, o quizá no puedas guardar el cambio. Si pertenece a un álbum público, primero debes hacer privado el álbum.",
    "like": "Es elegir cuáles de tus discos también llevarás al gran mercado."
  },
  "help.tracks.upload": {
    "t": "Subir canciones",
    "what": "Aquí añades canciones nuevas. Elige los archivos de audio, rellena sus datos y pulsa el botón de subida.",
    "when": "Úsalo cada vez que tengas música nueva. Puedes subir hasta veinte canciones juntas.",
    "click": "Elegir los archivos solo los coloca en la lista. Nada se guarda hasta pulsar [[Subir … canción(es)]]. Después aparecen inmediatamente en tu sitio.",
    "care": "Se aceptan MP3, M4A y WAV. Cada canción debe durar entre 30 segundos y 15 minutos y ocupar como máximo 15 MB.",
    "like": "Es la puerta trasera por donde llegan los discos antes de colocarlos en las estanterías."
  },
  "help.tracks.choose": {
    "t": "Elegir archivos",
    "what": "Abre una ventana para elegir audios del ordenador. También puedes arrastrarlos hasta aquí.",
    "when": "Úsalo para empezar una subida. Puedes seleccionar varios juntos.",
    "click": "Se añaden a la lista inferior, pero aún no se suben. Un formato incorrecto aparece enseguida como «Error».",
    "care": "Puedes tener hasta 20 archivos; los demás no se añaden. MP3 y M4A deben ocupar hasta 15 MB. Los WAV se convierten aquí a MP3 de 320 kbps y el resultado también debe ocupar hasta 15 MB (unos 6 minutos y medio). La duración debe estar entre 30 segundos y 15 minutos.",
    "like": "Es colocar discos en una cesta antes de llevarlos a la estantería."
  },
  "help.tracks.name_tags": {
    "t": "Leer género, ánimo e idioma de los ( ) del archivo",
    "what": "Si activas esto, un nombre como «Midnight Rain (R&B, Neo Soul; Romantic, en)» rellena las casillas. El título quedará «Midnight Rain».",
    "when": "Úsalo si sigues la guía de IA para nombrar canciones. Desactívalo si los paréntesis forman parte del título real.",
    "click": "La lista se vuelve a leer al momento. Solo se rellenan las casillas que no modificaste a mano. Este navegador recuerda la opción.",
    "care": "Antes del punto y coma van los géneros (el primero es principal); después, el ánimo y el código de idioma. Las palabras desconocidas se omiten y aparecen en gris. Partes como (Live) o (feat. X) se mantienen en el título.",
    "like": "Es como alguien que lee el rótulo de la caja y prepara la etiqueta de cada disco."
  },
  "help.tracks.common": {
    "t": "Aplicar a todas las canciones de esta subida",
    "what": "Las casillas inferiores se aplican a todos los archivos de esta tanda: herramienta de IA, artista, información adicional y publicación en aimusiclist.com.",
    "when": "Configúralas una sola vez antes de subir.",
    "click": "Nada se guarda hasta la subida. El género, el estado de ánimo y el idioma se eligen por archivo arriba.",
    "care": "Si alguna canción necesita valores distintos, súbela y después corrígela con [[Editar]] en la lista.",
    "like": "Es una etiqueta para toda la cesta, no para cada disco."
  },
  "help.tracks.artist": {
    "t": "Artista",
    "what": "El nombre que aparece como intérprete o creador. Al principio se selecciona el nombre de tu sitio.",
    "when": "Déjalo para la mayoría de canciones; elige otro si usas otro nombre artístico.",
    "click": "Se guarda al subir o pulsar [[Guardar canción]]. Si usas el nombre del sitio y luego lo cambias, la canción también adoptará el nuevo nombre.",
    "care": "Los nombres adicionales se gestionan en «Otros artistas» de Información del sitio (hasta veinte nombres). Añádelos allí primero.",
    "like": "Es el nombre impreso bajo el título del disco."
  },
  "help.tracks.up_start": {
    "t": "Subir … canción(es)",
    "what": "Envía los archivos pendientes uno a uno. El número indica cuántos esperan.",
    "when": "Púlsalo cuando cada archivo tenga género principal e idioma.",
    "click": "Cada fila muestra el progreso. Al terminar, las canciones ya estarán en tu sitio y las públicas se enviarán juntas a aimusiclist.com.",
    "care": "El botón se bloquea si falta un dato obligatorio. Mantén abierta la página durante la subida. Si algún archivo falla, los demás se guardan igualmente.",
    "like": "Es llevar la cesta y colocar cada disco en la estantería."
  },
  "help.tracks.up_retry": {
    "t": "Reintentar canciones fallidas",
    "what": "Vuelve a enviar solo los archivos que fallaron, por ejemplo por una conexión interrumpida.",
    "when": "Solo aparece si hubo errores. Comprueba internet antes de pulsarlo.",
    "click": "Se envían de nuevo los archivos fallidos. Si la canción ya estaba registrada, solo vuelve a enviarse el audio y no se duplica.",
    "care": "No puedes reintentar un formato incorrecto. Si falla por tamaño o duración, corrige el archivo, quita la fila y vuelve a añadirlo.",
    "like": "Es volver a recoger los discos que se cayeron de la cesta."
  },
  "help.tracks.up_clear": {
    "t": "Vaciar lista",
    "what": "Elimina de una vez todas las filas de la lista de subida.",
    "when": "Úsalo al acabar o si quieres empezar de nuevo.",
    "click": "Todas las filas desaparecen inmediatamente. Las canciones ya subidas permanecen en tu sitio.",
    "care": "No puedes pulsarlo durante la subida. Se perderán los datos escritos en archivos aún no subidos.",
    "like": "Es vaciar la cesta sin tocar los discos ya colocados."
  },
  "help.tracks.edit": {
    "t": "Editar",
    "what": "Abre el formulario de una canción ya subida al pulsar [[Editar]] en su fila.",
    "when": "Úsalo para corregir título, género, idioma, artista u otros datos, o cambiar el audio.",
    "click": "Los cambios de la parte superior se guardan con [[Guardar canción]]. La imagen y la letra se guardan en cuanto las cambias.",
    "care": "Mientras editas, el formulario sustituye la tarjeta de subida. Pulsa [[Cancelar]] o guarda para volver a ella.",
    "like": "Es sacar un disco de la estantería para corregir su etiqueta."
  },
  "help.tracks.title": {
    "t": "Título",
    "what": "Es el nombre de la canción que verás en tu sitio y en aimusiclist.com.",
    "when": "Cámbialo si el nombre del archivo es incorrecto.",
    "click": "Se guarda al pulsar [[Guardar canción]]. aimusiclist.com actualiza los títulos públicos poco después.",
    "care": "No puede estar vacío y admite como máximo 100 caracteres.",
    "like": "Es el nombre grande escrito en la portada del disco."
  },
  "help.tracks.replace_audio": {
    "t": "Reemplazar audio (opcional)",
    "what": "Elige un archivo nuevo para sustituir la grabación. Se conservan título, géneros, imagen y letra.",
    "when": "Úsalo si hiciste una versión mejor o subiste un archivo equivocado.",
    "click": "No ocurre nada hasta pulsar [[Guardar canción]]. Entonces se envía el archivo nuevo y sustituye al anterior.",
    "care": "El audio anterior desaparece al guardar: conserva una copia en tu ordenador. Se aceptan MP3, M4A o WAV de 30 segundos a 15 minutos y máximo 15 MB.",
    "like": "Es colocar un disco nuevo dentro de la misma funda."
  },
  "help.tracks.save": {
    "t": "Guardar canción",
    "what": "Guarda todos los cambios del formulario de edición.",
    "when": "Púlsalo al terminar de modificar título, géneros, idioma y demás datos.",
    "click": "Se guardan los cambios y se cierra el formulario. Aparecen enseguida en tu sitio y después en aimusiclist.com si la canción es pública. Si elegiste un audio nuevo, también se envía y muestra el progreso.",
    "care": "Puede rechazarse si falta género principal o si al retirar una canción quedarían menos de diez públicas. Un aviso rojo explica el motivo y nada se guarda.",
    "like": "Es devolver el disco a la estantería con la etiqueta corregida."
  },
  "help.tracks.cancel": {
    "t": "Cancelar",
    "what": "Cierra el formulario de edición sin guardar los datos superiores.",
    "when": "Úsalo si abriste otra canción por error o cambiaste de opinión.",
    "click": "El formulario se cierra y vuelve la tarjeta de subida. Los cambios sin guardar se pierden.",
    "care": "La imagen y la letra se guardan al cambiarlas, así que Cancelar no deshace esas modificaciones.",
    "like": "Es devolver el disco sin cambiar su etiqueta."
  },
  "help.tracks.image": {
    "t": "Imagen de canción",
    "what": "Es la imagen pequeña que aparece detrás del botón de reproducción en tu sitio y en aimusiclist.com.",
    "when": "Cámbiala si quieres una imagen propia en vez de la predeterminada.",
    "click": "Los botones inferiores guardan inmediatamente, sin esperar a [[Guardar canción]].",
    "care": "Cada canción recibe una imagen al subirla. Tu imagen se guarda en un cuadrado pequeño de 100×100 y, si tiene suficiente tamaño, también en uno mayor.",
    "like": "Es la portada que ves antes de reproducir el disco."
  },
  "help.tracks.image_lg": {
    "t": "Mejorar la imagen en tarjetas grandes",
    "what": "Indica que la canción solo tiene imagen pequeña. En tarjetas grandes de aimusiclist.com, como las del Top 100, puede verse borrosa.",
    "when": "Aparece si subiste la imagen antes de existir versiones grandes o era demasiado pequeña.",
    "click": "Pulsa [[Cambiar imagen]] y súbela otra vez. El aviso desaparece cuando se guarda una versión grande.",
    "care": "La parte recortada debe tener al menos 200 píxeles de ancho. Con menos no se puede crear una versión grande.",
    "like": "Es reimprimir una portada pequeña como cartel para el escaparate."
  },
  "help.tracks.image_change": {
    "t": "Cambiar imagen",
    "what": "Elige una imagen del ordenador para usarla como portada de la canción.",
    "when": "Úsalo para añadir o reemplazar una imagen propia.",
    "click": "Se abre una ventana para recortar o reducir. Al pulsar [[Guardar imagen]], se guarda inmediatamente y aparece en tu sitio; en aimusiclist.com aparece después si la canción es pública.",
    "care": "Se aceptan JPG, PNG, WebP y GIF de máximo 2 MB. Solo se sube la copia reducida, no el archivo original.",
    "like": "Es ponerle una funda nueva al disco."
  },
  "help.tracks.image_reset": {
    "t": "Volver a imagen predeterminada",
    "what": "Elimina la imagen personalizada y recupera la imagen que traía la canción.",
    "when": "Úsalo si ya no quieres una imagen propia.",
    "click": "El cambio ocurre inmediatamente, sin confirmación. La imagen predeterminada aparece enseguida.",
    "care": "La imagen subida se elimina, incluida su versión grande. Para recuperarla tendrás que subirla otra vez con [[Cambiar imagen]].",
    "like": "Es quitar la funda especial y volver a la sencilla."
  },
  "help.tracks.lyrics": {
    "t": "Letra (.srt)",
    "what": "Es la letra en un archivo .srt, que incluye el momento en que se canta cada línea.",
    "when": "Añádelo si quieres que los oyentes sigan la letra. Muchas herramientas de IA musical pueden generar .srt.",
    "click": "Subir o borrar la letra actúa de inmediato, sin [[Guardar canción]]. El visitante pulsa SRT para leerla sin marcas de tiempo.",
    "care": "El archivo debe terminar en .srt, ser texto UTF-8 y ocupar como máximo 100 KB. Debe incluir tiempos como 00:00:01,000 --> 00:00:04,000.",
    "like": "Es la hoja con la letra guardada en la funda del disco."
  },
  "help.tracks.lyrics_upload": {
    "t": "Subir .srt / Reemplazar .srt",
    "what": "Elige en tu ordenador el archivo .srt de la letra. Si ya existe uno, el botón dice Reemplazar.",
    "when": "Úsalo para añadir una letra o sustituirla por una correcta.",
    "click": "Al elegirlo, se comprueba y guarda inmediatamente. Sustituye la letra anterior si la había. Si el archivo no sirve, aparece un aviso rojo.",
    "care": "Solo admite .srt de 100 KB o menos en UTF-8. Los archivos sin líneas de tiempo se rechazan.",
    "like": "Es meter una hoja nueva con la letra en la funda."
  },
  "help.tracks.lyrics_view": {
    "t": "Ver archivo",
    "what": "Abre el archivo de letra guardado para esta canción.",
    "when": "Úsalo para comprobar que guardaste la letra correcta.",
    "click": "Se abre en otra pestaña, con sus marcas de tiempo. No cambia nada.",
    "like": "Es sacar la hoja de la funda para leerla."
  },
  "help.tracks.lyrics_delete": {
    "t": "Eliminar letra",
    "what": "Borra la letra asociada a esta canción.",
    "when": "Úsalo si la letra es incorrecta o la canción no debe tenerla.",
    "click": "Pide confirmación. Si aceptas, elimina la letra al instante y desaparece la marca SRT.",
    "care": "No se puede deshacer. Para recuperarla debes volver a subir el archivo .srt.",
    "like": "Es sacar la hoja de la funda y tirarla."
  },
  "help.tracks.upguide": {
    "t": "Rellenar género y ánimo automáticamente",
    "what": "Una guía para no elegir género, ánimo e idioma a mano en cada canción. Entregas un archivo de instrucciones a una IA gratuita y te propone un título con un formato especial.",
    "when": "Léela antes de crear más canciones, sobre todo si subirás varias a la vez.",
    "click": "La ✕ pliega la guía en un botón pequeño; ese botón la abre otra vez. El navegador recuerda tu elección.",
    "care": "La guía no cambia cómo creas música; solo establece el formato del título.",
    "like": "Es preparar la etiqueta del disco antes de que llegue, para no clasificarlo en la puerta."
  },
  "help.tracks.upguide_dl": {
    "t": "Descargar guía para IA",
    "what": "Descarga desde aimusiclist.com un archivo de texto preparado para que lo lea una IA.",
    "when": "Antes de crear una canción, adjúntalo a ChatGPT, Claude o Gemini (también sirven los planes gratuitos) y pide un título.",
    "click": "El archivo se guarda en tu ordenador. No cambia nada en tu sitio.",
    "care": "Conserva el nombre que te da la IA musical al descargar el audio: la parte entre ( ) es la que rellena las casillas.",
    "like": "Es una receta que entregas a tu ayudante para que todas las etiquetas tengan el mismo formato."
  },
  "help.tracks.uf_all": {
    "t": "Usar para todos los archivos",
    "what": "Copia el valor de esta casilla en la misma casilla de los demás archivos de la lista.",
    "when": "Úsalo cuando varias canciones compartan género, ánimo o idioma. Rellena el primero y pulsa aquí.",
    "click": "Los demás archivos cambian enseguida y se indica cuántos. Los ya subidos no se modifican.",
    "care": "Sobrescribe los valores elegidos en los otros archivos. Después puedes corregir uno a mano.",
    "like": "Es un sello de goma para marcar todas las cajas a la vez."
  },
  "help.tracks.uf_mood": {
    "t": "Estado de ánimo",
    "what": "Es el sentimiento de la canción, como Sad o Romantic. aimusiclist.com decide qué opciones aparecen.",
    "when": "Marca las que encajen. Es opcional.",
    "click": "Las marcas se aplican solo a este archivo y se guardan al subir. Al alcanzar el máximo indicado entre ( ), las demás opciones se bloquean hasta desmarcar una.",
    "care": "Solo aparece cuando tu sitio ha recibido la lista de campos de aimusiclist.com.",
    "like": "Es una pegatina de color que indica cómo se siente la canción."
  },
  "help.tracks.uf_genre": {
    "t": "Género",
    "what": "Son los géneros de esta canción: uno principal y hasta dos adicionales.",
    "when": "Elígelos para cada archivo; el principal es obligatorio.",
    "click": "La elección es solo de este archivo y se guarda al subir.",
    "care": "El género principal determina el menú de aimusiclist.com; los adicionales aparecen junto al título.",
    "like": "Es la etiqueta del disco: primero la sección grande y luego dos notas pequeñas."
  },
  "help.tracks.uf_lang": {
    "t": "Idioma de la canción",
    "what": "Es el idioma cantado. También puedes añadir otro idioma secundario.",
    "when": "Elígelo para cada archivo. Si no hay voz, selecciona «Instrumental (sin letra)».",
    "click": "La elección es solo de este archivo y se guarda al subir.",
    "care": "No es el idioma de la pantalla. «Instrumental» no se combina con otro idioma; por eso bloquea la segunda casilla. aimusiclist.com lo usa en las listas por idioma.",
    "like": "Es la etiqueta que indica en qué idioma canta el artista."
  },
  "help.tracks.queue": {
    "t": "Archivos pendientes de subida",
    "what": "Muestra los archivos elegidos. Cada fila incluye título, nombre, tamaño, estado y las casillas de esa canción.",
    "when": "Revísalo antes de subir. Todas necesitan género principal e idioma.",
    "click": "Los datos permanecen aquí hasta subir. Una etiqueta verde «Rellenado desde el nombre» significa que se leyó de ( ); «Elegir abajo» pide que completes los campos.",
    "care": "Las filas con datos vacíos aparecen rojas. Durante la subida las casillas pasan a un resumen que no puedes modificar.",
    "like": "Es la hoja de entrega que revisas antes de colocar los discos."
  },
  "help.tracks.up_remove": {
    "t": "Quitar",
    "what": "Elimina un archivo de la lista pendiente.",
    "when": "Úsalo si elegiste un archivo equivocado o aparece «Error» por formato o duración.",
    "click": "La fila desaparece al instante. El archivo de tu ordenador no se borra.",
    "care": "El botón desaparece durante la subida y para los archivos ya subidos. Para eliminar una canción guardada utiliza la lista de canciones.",
    "like": "Es sacar un disco de la cesta antes de entrar."
  },
  "help.tracks.up_need": {
    "t": "Casillas vacías",
    "what": "Este aviso enumera los archivos que todavía no tienen género principal o idioma.",
    "when": "Aparece automáticamente si falta un dato obligatorio y bloquea la subida hasta solucionarlo.",
    "click": "Pulsa una línea para ir a la casilla vacía. El aviso desaparece cuando todos los datos están completos.",
    "care": "Solo se muestran las primeras doce casillas vacías, pero el contador superior incluye todas.",
    "like": "Es una lista de tareas en la puerta: no se entrega nada hasta completarla."
  },
  "help.tracks.up_after": {
    "t": "Comprobar «New» en aimusiclist.com",
    "what": "Aparece tras subir canciones públicas e indica dónde encontrarlas.",
    "when": "Solo se muestra si el sitio está conectado y hay al menos una canción nueva publicada.",
    "click": "El enlace abre en otra pestaña la página New de aimusiclist.com.",
    "care": "aimusiclist.com tarda unos minutos en recibir las canciones. Si no aparecen en cinco minutos, espera un poco más y vuelve a comprobarlo.",
    "like": "Es ir al mercado a ver el disco recién colocado en la estantería."
  },
  "help.tracks.pubmin": {
    "t": "Públicas: n · Mínimo: n",
    "what": "La primera cifra indica cuántas canciones están públicas en aimusiclist.com; la segunda es el mínimo permitido.",
    "when": "Míralo antes de retirar canciones públicas para saber cuántas puedes ocultar.",
    "click": "Solo muestra cifras y cambia automáticamente al activar o desactivar canciones.",
    "care": "La regla: con diez canciones o más, al menos diez deben ser públicas; con menos, todas. Solo cuentan las que tienen audio. Una canción de álbum público cuenta, pero las de álbum programado solo desde su publicación.\nSi la primera cifra es inferior al mínimo, aparece un aviso amarillo. Tú eliges qué canciones publicar. Siempre puedes borrar una canción.",
    "like": "El gran mercado pide que cada tienda mantenga al menos diez discos expuestos. Aquí ves cuántos tienes."
  },
  "help.top.pubmin_go": {
    "t": "Elegir canciones",
    "what": "Te lleva a la sección donde decides qué canciones estarán públicas.",
    "when": "Púlsalo desde el aviso de que faltan canciones públicas.",
    "click": "Se abre la pestaña Canciones junto al contador «Públicas · Mínimo». Activa los interruptores de las canciones deseadas; cada uno guarda inmediatamente.",
    "care": "Las canciones sin audio no cuentan. El aviso desaparece cuando alcances el mínimo.",
    "like": "Es caminar directamente al escaparate para colocar algunos discos más."
  },
  "help.tracks.pub_tip": {
    "t": "Consejo del interruptor público",
    "what": "Aviso breve que aparece la primera vez que activas o desactivas una canción. Explica cuándo llega a aimusiclist.com.",
    "when": "Léelo una vez. Solo aparece tras la primera pulsación en este navegador.",
    "click": "[[No volver a mostrar]] lo oculta definitivamente en este navegador. [[Cerrar]] solo hasta que vuelvas a abrir el panel.",
    "care": "Ocultar el aviso no cambia nada en tus canciones.",
    "like": "Es un cartelito: «Los discos que pongas aquí aparecerán en el gran mercado en uno o dos minutos»."
  },
  "help.albums.form": {
    "t": "Álbum nuevo / Editar álbum",
    "what": "Aquí creas o cambias un álbum: un conjunto de canciones en el orden elegido, con título, portada y breve presentación.",
    "when": "Úsalo para reunir canciones como en un disco. Aparece en tu sitio y, si es público, también en aimusiclist.com.",
    "click": "Nada se guarda mientras rellenas el formulario. Pulsa [[Guardar álbum]] para guardarlo todo. [[Cancelar]] cierra y descarta los cambios.",
    "care": "Un álbum admite hasta 35 canciones. Para ser público necesita entre 6 y 35, todas con audio. Puedes guardar uno más pequeño, pero seguirá privado.",
    "like": "Es preparar un disco: elegir canciones, ordenarlas y ponerles una portada."
  },
  "help.albums.title": {
    "t": "Título del álbum",
    "what": "Es el nombre que verán los visitantes en tu sitio y en aimusiclist.com si es público.",
    "when": "Es obligatorio al crear cada álbum. No puedes guardar sin título.",
    "click": "Se guarda con [[Guardar álbum]]. Después puedes modificarlo con [[Editar]] en la lista.",
    "care": "Admite hasta 100 caracteres.",
    "like": "Es el nombre grande de la portada."
  },
  "help.albums.artist": {
    "t": "Artista",
    "what": "Indica a quién pertenece el álbum. Primero aparece el nombre del sitio; los demás nombres vienen de Otros artistas en Información del sitio.",
    "when": "Conserva el nombre habitual o selecciona otro si es un proyecto paralelo.",
    "click": "Se guarda con [[Guardar álbum]] y aparece bajo el título en tu sitio y en aimusiclist.com.",
    "care": "Si mantienes el primer nombre, cambiar el nombre del sitio también cambia el artista del álbum. No se permite usar nombres de cantantes famosos.",
    "like": "Es la firma del músico en la portada."
  },
  "help.albums.desc": {
    "t": "Descripción del álbum",
    "what": "Es una breve presentación que aparece bajo el título en tu sitio y en aimusiclist.com.",
    "when": "Cuenta de qué trata el álbum, cómo lo hiciste o qué sensación transmite. También puedes dejarla vacía.",
    "click": "Se guarda con [[Guardar álbum]]. El contador muestra cuántos caracteres quedan.",
    "care": "Máximo 200 caracteres; al llegar no podrás escribir más. Cada emoji cuenta como un carácter. Puedes hacer saltos de línea, pero solo se admite texto, sin imágenes ni enlaces.",
    "like": "Es la nota breve de la parte trasera de un disco."
  },
  "help.albums.pub": {
    "t": "Cuándo hacerlo público",
    "what": "Elige si el álbum se publica ahora o en la fecha y hora que indiques.",
    "when": "Para la mayoría, elige [[Ahora]]. Elige una fecha si quieres anunciar con antelación el lanzamiento.",
    "click": "La opción se aplica al pulsar [[Guardar álbum]]. Solo se hace público con 6–35 canciones que tengan audio; de lo contrario se guarda privado.",
    "care": "En un álbum nuevo se aplica automáticamente. Al editar, el interruptor de publicación conserva su estado. Puedes activarlo o desactivarlo después desde la lista.",
    "like": "Es elegir el día del estreno: hoy o una fecha marcada en el calendario."
  },
  "help.albums.pub_now": {
    "t": "Ahora",
    "what": "El álbum se publica en cuanto lo guardas.",
    "when": "Úsalo si está terminado y quieres que lo escuchen hoy.",
    "click": "Tras [[Guardar álbum]], si tiene entre 6 y 35 canciones con audio, se publica al instante y aparece en aimusiclist.com en uno o dos minutos. Si habías programado una fecha, se cancela.",
    "care": "Con menos de seis canciones o alguna sin audio se guarda como privado. El mensaje de guardado te dirá qué ocurrió.",
    "like": "Es colocar el disco nuevo en el gran mercado cuando lo terminas."
  },
  "help.albums.pub_at": {
    "t": "En una fecha y hora elegidas",
    "what": "El álbum espera y se publica solo en el momento que indiques.",
    "when": "Úsalo para programar un estreno, por ejemplo el viernes a las ocho, y avisar a tus seguidores.",
    "click": "Se abre un selector de fecha y hora según la zona horaria de tu dispositivo. Después de [[Guardar álbum]] verás la fecha prevista. Hasta entonces estará oculto en tu sitio y en aimusiclist.com. Aparece en ambos aproximadamente un minuto después.",
    "care": "Debe ser una fecha futura, como máximo 366 días después. Mientras espera, sus canciones no pueden hacerse privadas. Debe tener entre 6 y 35 canciones con audio. En PHP puede tardar unos cinco minutos.",
    "like": "Es poner una alarma para que el disco aparezca solo en el escaparate cuando llegue la hora."
  },
  "help.albums.cover": {
    "t": "Portada",
    "what": "Es la imagen cuadrada del álbum. Se ve en tu sitio y en aimusiclist.com cuando es público.",
    "when": "Añade una si puedes: ayuda a que la gente reconozca el álbum. Es opcional.",
    "click": "Pulsa [[Elegir portada]] y ajusta la imagen a un cuadrado. Se guardará con el álbum al pulsar [[Guardar álbum]].",
    "care": "Se guarda como imagen de 200×200. Borrar el álbum elimina la portada, pero nunca sus canciones.",
    "like": "Es la funda que la gente ve primero en la estantería."
  },
  "help.albums.pick": {
    "t": "Elegir canciones (en orden)",
    "what": "Aquí colocas canciones en el álbum. A la izquierda (arriba en móvil) están todas; a la derecha (abajo en móvil), las ya añadidas según su orden.",
    "when": "Úsalo al crear o cambiar un álbum. Funciona incluso con cientos de canciones.",
    "click": "Busca y marca canciones a la izquierda y pulsa [[Añadir seleccionadas →]]. Pasan al final de la lista derecha y desaparecen de la izquierda. No se guarda hasta pulsar [[Guardar álbum]].",
    "care": "Máximo 35 canciones. Una canción puede estar en varios álbumes; una etiqueta indica el otro. Las marcadas «Sin audio» no pueden formar parte de un álbum público.",
    "like": "La izquierda es el almacén y la derecha el disco que estás completando."
  },
  "help.albums.save": {
    "t": "Guardar álbum",
    "what": "Guarda título, artista, descripción, fecha, portada y canciones en un solo paso.",
    "when": "Púlsalo cuando termines de crear o modificar el álbum.",
    "click": "Un aviso indica si se publicó ahora, quedó programado o se guardó privado por no tener 6–35 canciones con audio. Luego aparece en la lista. Si es público, llega a aimusiclist.com en uno o dos minutos.",
    "care": "Necesita título y la fecha programada debe ser futura. Algunos cambios se rechazan si dejarían menos de diez canciones públicas. El aviso rojo explica por qué.",
    "like": "Es envolver el disco terminado y colocarlo en la estantería."
  },
  "help.albums.cancel": {
    "t": "Cancelar",
    "what": "Cierra el formulario de álbum sin guardar.",
    "when": "Úsalo si cambias de opinión o quieres empezar otra vez.",
    "click": "Se cierra inmediatamente y se descartan todos los cambios desde que lo abriste, incluida una portada nueva. El álbum conserva su último estado guardado.",
    "care": "No pide confirmación. Los cambios sin guardar se pierden.",
    "like": "Es guardar el disco a medio hacer sin tocar el que ya estaba en la tienda."
  },
  "help.albums.new": {
    "t": "Álbum nuevo",
    "what": "Abre un formulario vacío para crear otro álbum.",
    "when": "Púlsalo cuando quieras reunir canciones.",
    "click": "El formulario aparece sobre la lista. No se crea nada hasta pulsar [[Guardar álbum]].",
    "care": "El botón se oculta mientras otro formulario está abierto; guarda o cancela primero.",
    "like": "Es sacar una funda de disco nueva y vacía."
  },
  "help.albums.list": {
    "t": "Mis álbumes",
    "what": "Muestra todos los álbumes creados. Todos aparecen en tu sitio; los públicos también en aimusiclist.com, junto con sus canciones.",
    "when": "Entra para comprobar su publicación, editarlos o borrarlos.",
    "click": "Cada fila muestra el interruptor público, título, cantidad de canciones y botones [[Editar]] y [[Eliminar]].",
    "care": "Un álbum programado se oculta en ambos sitios hasta su fecha. Mientras esté público o esperando publicación, no puedes hacer privadas sus canciones por separado.",
    "like": "Es la estantería de álbumes de la tienda y el interruptor decide cuáles irán al gran mercado."
  },
  "help.albums.pub_switch": {
    "t": "Público en aimusiclist",
    "what": "El interruptor decide si el álbum aparece también en aimusiclist.com. En tu sitio permanece de todos modos.",
    "when": "Actívalo para llegar a más personas o desactívalo para retirar el álbum de aimusiclist.com.",
    "click": "Se guarda inmediatamente. Activado: el álbum y todas sus canciones aparecen allí en uno o dos minutos. Desactivado: desaparecen, salvo canciones que ya publicaste individualmente.",
    "care": "Un interruptor gris significa que faltan canciones con audio o no hay entre 6 y 35; púlsalo para ver el motivo. Desactivar puede rechazarse si deja menos de diez canciones públicas.",
    "like": "Es decidir qué discos de la tienda también van a la estantería del mercado."
  },
  "help.albums.col_title": {
    "t": "Título del álbum",
    "what": "Esta columna muestra el título y el artista debajo, con posibles etiquetas de estado.",
    "when": "Mírala para conocer rápidamente la situación del álbum.",
    "click": "«Se publicará…» indica una fecha pendiente. «Necesita 6–35 canciones con audio» significa que aún no puede ser público: añade o quita canciones o sube el audio que falta.",
    "like": "Es la etiqueta lateral de cada disco."
  },
  "help.albums.col_count": {
    "t": "Número de canciones",
    "what": "Indica cuántas canciones contiene cada álbum.",
    "when": "Úsalo para comprobar si puede ser público: necesita de 6 a 35.",
    "click": "Si tiene menos de seis, pulsa [[Editar]] y añade canciones. El máximo es 35.",
    "like": "Es contar la lista de canciones impresa detrás del disco."
  },
  "help.albums.row_buttons": {
    "t": "Editar / Eliminar",
    "what": "Los botones de cada fila: [[Editar]] permite modificar el álbum y [[Eliminar]] borrarlo.",
    "when": "Edita para cambiar canciones, orden, título, portada o estreno. Elimina si ya no quieres el álbum.",
    "click": "Editar abre el formulario superior. Eliminar pide confirmación y borra el álbum y su portada, pero deja las canciones en tu sitio.",
    "care": "No se puede deshacer. Eliminar un álbum público puede rechazarse si quedan menos de diez canciones públicas.",
    "like": "Editar es sacar el disco para corregirlo; eliminar es tirar la funda y el listado, pero conservar las canciones."
  },
  "help.albums.pick_search": {
    "t": "Buscar títulos de canciones",
    "what": "Escribe parte de un título para filtrar las canciones de la izquierda.",
    "when": "Úsalo cuando tengas muchas canciones y sepas qué nombre buscas.",
    "click": "La lista cambia al escribir. No distingue mayúsculas. Vacía la búsqueda para ver todo.",
    "care": "Solo busca en títulos, no en artista ni letra.",
    "like": "Es preguntarle al encargado del almacén dónde está una canción concreta."
  },
  "help.albums.pick_genre": {
    "t": "Género",
    "what": "Muestra a la izquierda solo las canciones de un género. La lista incluye géneros principales presentes en tu música.",
    "when": "Úsalo para crear un álbum de un solo estilo, como R&B.",
    "click": "La lista cambia inmediatamente. Aparecen canciones cuyo género coincide o pertenece a esa categoría. Elige Todos los géneros para verlas de nuevo.",
    "care": "Solo sirve para encontrar canciones; no cambia su género.",
    "like": "Es ir directamente al pasillo R&B del almacén."
  },
  "help.albums.pick_sort": {
    "t": "Orden",
    "what": "Ordena la lista de la izquierda por subidas recientes, antiguas o por título.",
    "when": "Elige Recientes para las canciones nuevas o Título A–Z para buscar un nombre.",
    "click": "Reordena la lista de la izquierda al instante. No cambia el orden del álbum, que se define a la derecha.",
    "like": "Es organizar las estanterías del almacén por fecha o nombre."
  },
  "help.albums.pick_all": {
    "t": "Seleccionar todas las visibles",
    "what": "Marca todas las canciones que cumplan los filtros de búsqueda y género. El número indica cuántas.",
    "when": "Úsalo tras filtrar, por ejemplo para elegir todas las canciones de un estilo.",
    "click": "Marca todas las coincidencias, incluso las que están más abajo. Púlsalo otra vez para desmarcarlas. Todavía no se añaden: después pulsa [[Añadir seleccionadas →]].",
    "care": "Un álbum admite 35 canciones. Si marcas más, se añadirán solo las primeras que quepan.",
    "like": "Es pedir todos los discos de una estantería sin señalarlos uno a uno."
  },
  "help.albums.pick_add": {
    "t": "Añadir seleccionadas →",
    "what": "Añade al álbum las canciones marcadas; el número indica cuántas hay.",
    "when": "Púlsalo después de marcar canciones en la izquierda.",
    "click": "Pasan al final de la lista derecha en el orden de la izquierda y desaparecen de allí. Puedes reordenarlas después. Solo se guarda al pulsar [[Guardar álbum]].",
    "care": "El botón está gris si no hay canciones marcadas o ya hay 35. Si no caben todas, un aviso indica cuántas quedaron fuera.",
    "like": "Es trasladar los discos elegidos desde el almacén hasta la caja del álbum."
  },
  "help.albums.pick_recent": {
    "t": "Añadir las más recientes",
    "what": "Añade las últimas canciones que subiste. Eliges cuántas en una casilla, de 1 a 35 (diez al principio).",
    "when": "Úsalo si acabas de subir varias canciones y quieres reunirlas en un álbum.",
    "click": "Se añaden al final las más recientes que tengan audio y aún no estén en el álbum, empezando por la más nueva. No afectan los filtros de la izquierda. No se guarda hasta [[Guardar álbum]].",
    "care": "Se omiten las canciones sin audio. El máximo sigue siendo 35 y el botón queda gris si el álbum está lleno.",
    "like": "Es pedir los últimos diez discos que llegaron al almacén."
  },
  "help.albums.picked": {
    "t": "En este álbum",
    "what": "Muestra las canciones del álbum en orden de reproducción y su cantidad; el número se pone rojo si no está entre 6 y 35.",
    "when": "Úsalo para revisar canciones y cambiar el orden.",
    "click": "Arrastra ⠿ hacia arriba o abajo o usa ▲ ▼. La ✕ quita la canción del álbum, pero no del sitio. Guarda el nuevo orden con [[Guardar álbum]].",
    "care": "Un álbum público necesita 6–35 canciones con audio. Una canción «Sin audio» impide publicarlo. Si ya está publicado, no podrás guardarlo con menos de seis.",
    "like": "Es la lista trasera del disco: tema uno, dos, tres…"
  },
  "help.albums.pick_clear": {
    "t": "Quitar todas",
    "what": "Vacía el álbum de canciones de una sola vez para elegir otra lista.",
    "when": "Úsalo si quieres volver a empezar el listado.",
    "click": "Pide confirmación. La lista derecha queda vacía y las canciones regresan a la izquierda. Nada se guarda hasta [[Guardar álbum]]; con [[Cancelar]] conservas el álbum anterior.",
    "care": "Las canciones no se borran: permanecen en tu sitio.",
    "like": "Es devolver los discos del álbum a las estanterías del almacén."
  },
  "help.albums.cover_pick": {
    "t": "Elegir portada",
    "what": "Abre las imágenes del dispositivo y una ventana para elegir qué parte conservar.",
    "when": "Púlsalo para añadir o reemplazar una portada.",
    "click": "Tras [[Guardar imagen]], aparece aquí la portada nueva con la indicación «Portada nueva». Todavía no está guardada: pulsa [[Guardar álbum]]. [[Cancelar]] junto a ella la descarta.",
    "care": "Se aceptan JPG, PNG, WebP y GIF de hasta 2 MB. Solo se sube una copia pequeña, nunca el archivo original.",
    "like": "Es elegir una foto y recortarla para la funda."
  },
  "help.albums.cover_delete": {
    "t": "Quitar portada",
    "what": "Elimina la imagen del álbum, pero conserva el álbum y sus canciones.",
    "when": "Úsalo si no quieres portada o vas a crear otra.",
    "click": "Pide confirmación. Si aceptas, la portada desaparece inmediatamente sin pulsar [[Guardar álbum]]. Los visitantes ven un cuadrado vacío.",
    "care": "Es irreversible. Para recuperarla tendrás que elegir y subir la imagen de nuevo.",
    "like": "Es quitar la funda mientras el disco sigue dentro."
  },
  "help.skins.use": {
    "t": "Usar este diseño",
    "what": "Aplica al sitio este diseño ya instalado y recuerda cuál usabas antes.",
    "when": "Úsalo cuando quieras que los visitantes vean este aspecto.",
    "click": "Se guarda inmediatamente. Los visitantes ven el cambio en unos 30 segundos. Para volver, pulsa [[Volver al diseño anterior]] o elige otro.",
    "care": "El diseño activo no muestra este botón. Las canciones y los menús no cambian.",
    "like": "Es vestir tu tienda con una prenda del armario."
  },
  "help.skins.update": {
    "t": "Actualizar",
    "what": "El creador de un diseño de la galería publicó una versión nueva. El botón aparece junto a la etiqueta **Nueva versión**.",
    "when": "Úsalo para obtener la versión más reciente y sus correcciones.",
    "click": "La nueva versión se comprueba y sustituye a la anterior sin cambiar el diseño activo. Si ya lo estás usando, los visitantes verán la actualización en unos 30 segundos.",
    "care": "Solo actualiza el diseño, no el programa del sitio. Los diseños que subiste tú no tienen este botón.",
    "like": "Es como recibir del sastre una prenda mejor ajustada."
  },
  "help.skins.download": {
    "t": "Descargar (para editar)",
    "what": "Guarda en tu ordenador una copia de un diseño incluido (Claro u Oscuro), que puedes usar como base.",
    "when": "Úsalo para crear tu propio diseño. Puedes entregárselo a una IA gratuita como ChatGPT o Claude y pedirle cambios de colores o distribución.",
    "click": "El navegador descarga el archivo. Tu sitio no cambia.",
    "care": "No puedes editar directamente los diseños incluidos. Sube la copia modificada con otro nombre desde **Subir un diseño** y luego pulsa [[Usar este diseño]].",
    "like": "Es llevarte un patrón de costura para hacer tu propia prenda."
  },
  "help.skins.delete": {
    "t": "Eliminar",
    "what": "Quita un diseño subido por ti o añadido desde la galería. Los incluidos (Claro y Oscuro) no pueden borrarse y muestran [[Descargar (para editar)]].",
    "when": "Úsalo cuando ya no necesites un diseño o llegues al límite de veinte.",
    "click": "Pide confirmación y lo elimina. Si era el diseño activo, tu sitio cambia a Claro.",
    "care": "No se puede deshacer. Puedes reinstalar uno de la galería desde **Explorar**. Si era tuyo, necesitarás conservar el archivo para recuperarlo.",
    "like": "Es tirar una prenda del armario; guarda el patrón si puedes volver a necesitarla."
  },
  "help.skins.revert": {
    "t": "Volver al diseño anterior",
    "what": "Recupera el diseño que usabas justo antes. El botón muestra su nombre.",
    "when": "Úsalo si probaste uno nuevo y prefieres el anterior.",
    "click": "Se guarda al instante y lo ven los visitantes en unos 30 segundos. El que quitas se convierte en el anterior, así que al pulsar otra vez intercambias ambos.",
    "care": "Solo recuerda un paso. Si borraste el diseño anterior, desaparece este botón.",
    "like": "Es quitarte la prenda nueva y ponerte la de ayer."
  },
  "help.skins.title": {
    "t": "Diseños",
    "what": "Un diseño es el aspecto de tu sitio: colores, letras y distribución. Cambiarlo nunca modifica canciones, álbumes ni ajustes.",
    "when": "Entra para cambiar el aspecto o actualizar un diseño.",
    "click": "Es solo un título. Tu sitio incluye **Claro** y **Oscuro**, y puedes guardar hasta veinte diseños adicionales.",
    "care": "Los visitantes ven el cambio en unos 30 segundos. Si eliminas el diseño activo, se vuelve a Claro.",
    "like": "Es cambiar pintura y estanterías sin tocar los discos."
  },
  "help.skins.view": {
    "t": "Instalados / Explorar",
    "what": "Son dos vistas: **Instalados** muestra tus diseños; **Explorar** abre la galería de diseños creados por otros.",
    "when": "En Instalados puedes cambiar, actualizar, borrar o subir; en Explorar puedes encontrar diseños nuevos.",
    "click": "Solo cambia la vista. El sitio no se modifica. Al abrir Explorar por primera vez, se carga la lista.",
    "like": "Instalados es tu armario; Explorar es la tienda de ropa de al lado."
  },
  "help.skins.upload": {
    "t": "Subir un diseño",
    "what": "Añade un diseño creado por ti: un archivo de página web .html que cumple la guía. Puedes pedirle a una IA gratuita que lo prepare.",
    "when": "Úsalo si quieres un aspecto distinto a los de la galería. Puedes empezar con [[Descargar (para editar)]].",
    "click": "Escribe el nombre, elige el archivo y pulsa [[Subir diseño]]. Aparecerá en la lista pero no se activará hasta pulsar [[Usar este diseño]].",
    "care": "El archivo debe superar la revisión: máximo 100 KB, una zona de menú, contenido y reproductor, y la línea **Powered by aimusiclist.com** visible. No se permite código en movimiento ni imágenes de otros sitios.",
    "like": "Es coser una prenda propia y colgarla en tu armario."
  },
  "help.skins.upload_name": {
    "t": "Nombre del diseño",
    "what": "El nombre que aparece en la lista: entre 1 y 32 caracteres, solo minúsculas a–z, números, - o _.",
    "when": "Escríbelo antes de subir. Elige uno fácil de reconocer, como my-blue.",
    "click": "No se guarda hasta pulsar [[Subir diseño]].",
    "care": "No admite mayúsculas ni espacios. **light** y **dark** son nombres reservados. Reutilizar un nombre reemplaza el diseño anterior; si está activo, los visitantes verán la nueva versión en unos 30 segundos.",
    "like": "Es la etiqueta que coses dentro de una prenda."
  },
  "help.skins.upload_file": {
    "t": "Archivo del diseño",
    "what": "Es un archivo .html de tu ordenador, de máximo 100 KB.",
    "when": "Elígelo después de crear o editar un diseño, por ejemplo con una IA gratuita.",
    "click": "Solo se selecciona; no se envía hasta pulsar [[Subir diseño]].",
    "care": "Debe ser un solo archivo. Las imágenes internas no pueden venir de otras webs. Si pesa demasiado, pide a la IA que lo simplifique.",
    "like": "Es elegir la prenda terminada antes de colgarla."
  },
  "help.skins.upload_btn": {
    "t": "Subir diseño",
    "what": "Envía el archivo y comprueba que es válido.",
    "when": "Púlsalo después de escribir el nombre y seleccionar el archivo.",
    "click": "Si hay un problema, un aviso rojo indica cómo corregirlo y no guarda nada. Si pasa la revisión, aparece **Guardado** y el diseño entra en la lista. Para activarlo pulsa [[Usar este diseño]].",
    "care": "Puedes tener hasta veinte diseños adicionales a Claro y Oscuro. Si alcanzaste el límite, borra uno. Subir un diseño con el nombre de otro de la galería lo convierte en uno propio y deja de actualizarse.",
    "like": "Es la inspección de una prenda antes de guardarla en el armario."
  },
  "help.skins.gallery": {
    "t": "Galería de diseños",
    "what": "Una colección de diseños listos. Cada tarjeta muestra imagen, creador, tema claro u oscuro y versión. Los nuevos aparecen primero.",
    "when": "Entra si quieres un aspecto nuevo sin crear uno tú.",
    "click": "Pulsa la imagen o [[Vista previa]] para probarlo. Pulsa [[Aplicar]] para añadirlo y activarlo.",
    "care": "Si aparece **Actualiza tu sitio para usar este diseño.**, necesitas una versión más reciente del programa.",
    "like": "Es una tienda donde pruebas ropa en tu propio escaparate."
  },
  "help.skins.gal_reload": {
    "t": "Actualizar",
    "what": "Vuelve a cargar los diseños de la galería.",
    "when": "Úsalo si han llegado diseños nuevos o la lista no cargó.",
    "click": "La lista se carga de nuevo y también se comprueban versiones de los instalados. Tu sitio no cambia.",
    "care": "Si aparece **No se puede cargar la lista de diseños.**, espera un momento y pulsa [[Intentar de nuevo]].",
    "like": "Es pedir el catálogo más reciente a la tienda de ropa."
  },
  "help.skins.gal_filter": {
    "t": "Filtrar diseños",
    "what": "Botones para mostrar solo determinados diseños: **Todos**, **Claro**, **Oscuro** y etiquetas # que describen estilos.",
    "when": "Úsalo cuando haya muchos diseños y busques una sensación concreta.",
    "click": "Solo cambian las tarjetas visibles. Pulsa **Todos** para verlas todas. No se guarda nada.",
    "care": "Las etiquetas # aparecen si las usan dos diseños o más. Si no hay coincidencias, verás **Ningún diseño coincide con este filtro.**",
    "like": "Es seguir los carteles de una tienda que separan chaquetas y camisas."
  },
  "help.skins.gal_preview": {
    "t": "Vista previa",
    "what": "Muestra tu propio sitio con tus canciones y perfil usando ese diseño. También puedes pulsar su imagen.",
    "when": "Úsalo antes de aplicar para comprobar el resultado.",
    "click": "Se abre una ventana sin guardar ni mostrar cambios a los visitantes. Ciérrala con [[Cerrar]] o Esc. También puedes aplicar el diseño desde allí.",
    "care": "Las canciones no se reproducen y los anuncios no aparecen. Si indica **Actualiza tu sitio para usar este diseño.**, no se podrá previsualizar hasta actualizar.",
    "like": "Es el probador de ropa: puedes probar y devolver la prenda."
  },
  "help.skins.gal_apply": {
    "t": "Aplicar / Aplicar este diseño",
    "what": "Añade el diseño de la galería y lo activa con una pulsación. Está en la tarjeta y en la vista previa.",
    "when": "Púlsalo cuando te guste un diseño y quieras mostrarlo.",
    "click": "Se revisa, se añade a **Instalados** y se activa. Los visitantes lo ven en unos 30 segundos. Para deshacerlo pulsa [[Volver al diseño anterior]].",
    "care": "Máximo veinte diseños además de Claro y Oscuro. Si ya subiste uno con el mismo nombre, pide confirmación. Un diseño con **Actualiza tu sitio para usar este diseño.** no puede aplicarse aún.",
    "like": "Es comprar una prenda y salir de la tienda llevándola puesta."
  },
  "help.skins.pv_mode": {
    "t": "Ordenador / Móvil",
    "what": "Cambia el tamaño de la vista previa: **Ordenador** muestra pantalla ancha y **Móvil**, pantalla estrecha.",
    "when": "Comprueba ambos, porque muchos visitantes escuchan desde el móvil.",
    "click": "Solo cambia el tamaño de la vista previa. Nada se guarda.",
    "like": "Es observar el escaparate desde lejos y desde cerca."
  },
  "help.site.artist_del": {
    "t": "Eliminar",
    "what": "Quita este nombre de la lista de artistas adicionales.",
    "when": "Úsalo si ya no quieres elegir este nombre en canciones nuevas.",
    "click": "Pide confirmación y guarda al instante. Las canciones que ya lo usan conservan el nombre; solo desaparece de las opciones nuevas.",
    "care": "Para cambiar el artista de una canción anterior, edita esa canción. Puedes volver a añadir el nombre después.",
    "like": "Es retirar una etiqueta del cajón sin quitarla de los discos que ya la llevan."
  },
  "help.site.info": {
    "t": "Información del sitio",
    "what": "Esta tarjeta reúne el nombre del sitio, artista, idioma principal, descripción, país y texto inferior.",
    "when": "Rellénala al empezar y vuelve cuando quieras cambiar cómo te presentas.",
    "click": "Nada se guarda al escribir. Pulsa [[Guardar información del sitio]] para guardar todo de una vez. Los cambios se ven enseguida y aimusiclist.com recibe el nombre y la descripción poco después.",
    "care": "Las otras tarjetas (redes sociales, escuchas, me gusta, imágenes…) se guardan por separado. Solo esta necesita el botón de guardado. Si sales sin pulsarlo, perderás lo escrito.",
    "like": "Es el formulario de registro de tu tienda, con su letrero, presentación y ubicación."
  },
  "help.site.name": {
    "t": "Nombre del sitio",
    "what": "Es el nombre de 1 a 40 caracteres que aparece como título principal y bajo tus canciones en aimusiclist.com. Allí pueden pulsarlo para visitarte.",
    "when": "Elígelo al empezar y cámbialo solo si de verdad quieres otro: los oyentes te reconocerán por ese nombre.",
    "click": "Se guarda con [[Guardar información del sitio]]. Si tu artista tenía el mismo nombre anterior, también adoptará el nuevo.",
    "care": "No se permite usar nombres de cantantes o grupos famosos ni parecidos. Si el sistema lo detecta, bloquea el guardado. Si se descubre más tarde, tu sitio puede retirarse de aimusiclist.",
    "like": "Es el letrero con el que te encuentran los clientes del mercado."
  },
  "help.site.artist": {
    "t": "Nombre artístico",
    "what": "Es el nombre de quien crea la música. Puede coincidir con el del sitio o ser distinto.",
    "when": "Úsalo si el sitio se llama Mi sala musical pero cantas como Luna.",
    "click": "Se guarda con [[Guardar información del sitio]]. Si es diferente, aparece bajo el nombre del sitio y aimusiclist.com lo recibe en uno o dos minutos.",
    "care": "Máximo 40 caracteres. No uses nombres famosos o muy parecidos. Si antes coincidía con el nombre del sitio y cambias ese nombre, el artista cambia también.",
    "like": "El letrero muestra la tienda y esta etiqueta indica quién hace la música dentro."
  },
  "help.site.lang": {
    "t": "Idioma principal del sitio",
    "what": "El idioma que se muestra si no es posible averiguar qué prefiere el visitante. También se comunica a aimusiclist.com.",
    "when": "Elige el que leen la mayoría de tus oyentes o el que usas en tus descripciones.",
    "click": "Se guarda con [[Guardar información del sitio]]. Los visitantes seguirán viendo el idioma de su navegador, o el que eligieron, si está disponible. Solo si no, verán este.",
    "care": "No cambia el idioma del panel ni traduce los títulos o descripciones que escribiste.",
    "like": "Es el idioma del cartel de bienvenida; quien hable otro puede pedir otro menú."
  },
  "help.site.desc": {
    "t": "Descripción breve",
    "what": "Presentación de tu música de hasta 200 caracteres, mostrada en tu sitio y enviada a aimusiclist.com.",
    "when": "Escribe una o dos frases sobre lo que haces. Puedes cambiarla cuando quieras.",
    "click": "Se guarda con [[Guardar información del sitio]] y llega poco después a aimusiclist.com. Si queda vacía, no aparece descripción.",
    "care": "Escribe claro y breve. No te describas con el nombre de un artista famoso, por ejemplo «el nuevo [nombre famoso]».",
    "like": "Es una pequeña tarjeta bajo el letrero que explica qué ofrece la tienda."
  },
  "help.site.footer": {
    "t": "Texto inferior",
    "what": "Una línea al pie de todas las páginas, de hasta 200 caracteres. Solo texto, sin imágenes ni enlaces.",
    "when": "Úsala para un aviso de derechos de autor o agradecimiento.",
    "click": "Se guarda con [[Guardar información del sitio]]. Si queda vacía, muestra «© año actual + nombre del sitio». Si escribes {year}, se sustituye por el año actual.",
    "care": "Los saltos de línea se convierten en espacios. La línea «Powered by aimusiclist.com» permanece siempre; no se puede quitar desde aquí.",
    "like": "Es la letra pequeña del recibo de la tienda."
  },
  "help.site.save": {
    "t": "Guardar información del sitio",
    "what": "Guarda todos los datos de esta tarjeta: nombres, idioma, descripción, país, texto inferior e información extra.",
    "when": "Púlsalo después de modificar cualquiera de esos campos.",
    "click": "Tu sitio muestra los cambios inmediatamente y aimusiclist.com recibe el nombre y la descripción poco después. Si hay un error, aparece un aviso rojo y no se guarda nada.",
    "care": "Si el nombre nuevo coincide con un músico famoso, se bloquea. Elige otro y vuelve a pulsar.",
    "like": "Es el sello que convierte el borrador del registro en un documento válido."
  },
  "help.site.artists": {
    "t": "Otros artistas",
    "what": "Lista de nombres artísticos adicionales que puedes elegir en las canciones. Si no eliges ninguno, se utiliza el nombre del sitio.",
    "when": "Úsala si publicas música bajo varios nombres, como un dúo o proyecto paralelo.",
    "click": "Los nombres añadidos aparecen al subir o editar canciones y álbumes. Se muestran como artistas en tu sitio y en aimusiclist.com.",
    "care": "Máximo veinte nombres. Al llenarse, se desactiva Añadir. No se admiten nombres de cantantes famosos.",
    "like": "Es una tienda con varias tarjetas de nombre, una para cada disco."
  },
  "help.site.artist_add": {
    "t": "Añadir",
    "what": "Incorpora a la lista de otros artistas el nombre que escribiste.",
    "when": "Escribe el nombre en la casilla de la izquierda y pulsa aquí.",
    "click": "Se guarda inmediatamente. A partir de entonces podrás elegirlo al subir o editar canciones.",
    "care": "Máximo 60 caracteres. No se añade si ya existe, coincide con el nombre del sitio o pertenece a un cantante o grupo famoso.",
    "like": "Es crear una tarjeta de nombre y guardarla en el cajón."
  },
  "help.site.account": {
    "t": "Cuenta de administrador",
    "what": "El correo y contraseña para entrar a este panel. Arriba aparece tu correo actual.",
    "when": "Úsalo para cambiar el correo de acceso o la contraseña.",
    "click": "Rellena las casillas, introduce tu contraseña actual y pulsa [[Guardar cuenta]]. Antes no cambia nada.",
    "care": "En sitios de meshmelo el correo solo se cambia desde la cuenta de meshmelo, por eso aquí no aparece la casilla.",
    "like": "Es la llave privada de la puerta trasera de tu tienda."
  },
  "help.site.account_email": {
    "t": "Correo nuevo (opcional)",
    "what": "Otro correo para iniciar sesión. Déjalo vacío si quieres conservar el actual.",
    "when": "Úsalo si dejas de utilizar el correo anterior o prefieres otro.",
    "click": "Solo cambia al introducir la contraseña actual y pulsar [[Guardar cuenta]]. La próxima vez, entra con el nuevo correo.",
    "care": "Revisa la dirección: un error hará difícil entrar. Esta casilla no aparece en sitios de meshmelo.",
    "like": "Es cambiar el nombre escrito en la llave de la puerta trasera."
  },
  "help.site.account_pw": {
    "t": "Contraseña nueva (opcional)",
    "what": "Contraseña nueva para entrar al panel. Déjala vacía si quieres mantener la anterior.",
    "when": "Úsala si crees que alguien conoce tu contraseña o simplemente quieres renovarla.",
    "click": "Escríbela dos veces, añade la contraseña actual y pulsa [[Guardar cuenta]]. Se cerrarán las sesiones de los demás dispositivos, pero esta seguirá abierta.",
    "care": "Mínimo seis caracteres. Guárdala en un lugar seguro. En sitios meshmelo también cambia la contraseña de tu cuenta de meshmelo.",
    "like": "Es cambiar la cerradura para que las llaves antiguas ya no sirvan."
  },
  "help.site.account_pw2": {
    "t": "Repetir contraseña nueva",
    "what": "Vuelve a escribir la nueva contraseña.",
    "when": "Hazlo siempre que rellenes la casilla de contraseña nueva.",
    "click": "Al pulsar [[Guardar cuenta]] se comparan ambas casillas. Si son distintas, verás un aviso y no se guardará nada.",
    "care": "Sirve para detectar errores. Si no recuerdas lo escrito, borra las dos casillas y vuelve a escribir despacio.",
    "like": "Es probar la llave nueva en la cerradura antes de irte."
  },
  "help.site.account_cur": {
    "t": "Contraseña actual (obligatoria para cambiar)",
    "what": "Tu contraseña de ahora demuestra que eres tú antes de cambiar el correo o la contraseña.",
    "when": "Escríbela siempre que hagas alguno de esos cambios.",
    "click": "Escribirla no hace nada por sí solo. Se comprueba al pulsar [[Guardar cuenta]].",
    "care": "Tras cinco intentos fallidos, los cambios se bloquean quince minutos. Si la olvidaste, abre [[¿Olvidaste tu contraseña?]] debajo.",
    "like": "Es mostrar la llave anterior antes de pedir al cerrajero una nueva."
  },
  "help.site.account_save": {
    "t": "Guardar cuenta",
    "what": "Guarda el correo o la contraseña nuevos que escribiste.",
    "when": "Púlsalo después de rellenar los cambios y la contraseña actual.",
    "click": "Se guarda inmediatamente. La nueva contraseña cierra sesiones en otros dispositivos, pero no en este. Si no hay datos nuevos, no ocurre nada.",
    "care": "La clave de uso se guarda aparte con [[Guardar clave]] más abajo.",
    "like": "Es decirle al cerrajero: «Sí, cambia ya la cerradura»."
  },
  "help.site.forgot": {
    "t": "¿Olvidaste tu contraseña?",
    "what": "Explica cómo recuperar el acceso al panel cuando no recuerdas la contraseña. Pulsa el título para abrir los pasos.",
    "when": "Úsalo si no puedes iniciar sesión o tu contraseña actual siempre da error.",
    "click": "Abrir la guía no modifica nada. Los pasos dependen del tipo de sitio: Cloudflare, el administrador de archivos de tu alojamiento o correo desde meshmelo.",
    "care": "Sigue las instrucciones y elimina solo lo indicado. Canciones, álbumes y conexión con aimusiclist.com permanecen intactos.",
    "like": "Es la guía de llave de repuesto para el día que pierdas la tuya."
  },
  "help.site.token_open": {
    "t": "Crearla en Cloudflare",
    "what": "Abre en otra pestaña la página de Cloudflare para crear la clave de uso. La mayoría de casillas ya estarán rellenadas.",
    "when": "Es el primer paso si todavía no tienes una clave de uso.",
    "click": "Cloudflare abre [[Create Token]]. Inicia sesión si hace falta. No se guarda nada aquí hasta que regreses, pegues la clave y pulses [[Guardar clave]].",
    "care": "Cloudflare solo muestra la clave una vez. Pulsa [[Copy]] inmediatamente. Si faltan los permisos, añade las dos líneas indicadas en la guía.",
    "like": "Es ir a la tienda de llaves con una nota que explica qué llave necesitas."
  },
  "help.site.token": {
    "t": "Ver consumo (opcional)",
    "what": "Aquí guardas una clave de uso de Cloudflare para ver arriba cuánto has consumido de sus servicios gratuitos.",
    "when": "Úsalo para consultar cuánto almacenamiento y reproducciones llevas consumidos.",
    "click": "Al guardar una clave, aparecen las cifras arriba. Guardarla no cierra tu sesión.",
    "care": "Crea la clave en la misma cuenta de Cloudflare donde están tus canciones. Una de otra cuenta no puede consultar esas cifras. Sin clave, el sitio sigue funcionando, pero no verás el consumo.",
    "like": "Es una llave que solo permite leer el contador eléctrico."
  },
  "help.site.token_change": {
    "t": "Cambiar",
    "what": "Ya hay una clave guardada. Solo se muestran sus primeros y últimos caracteres para que nadie pueda copiarla. Este botón permite reemplazarla.",
    "when": "Úsalo si dejan de mostrarse las cifras, eliminaste la clave en Cloudflare o trasladaste tus canciones a otra cuenta.",
    "click": "Se abre la casilla. La clave anterior sigue funcionando hasta que guardes otra. Pulsa [[Cancelar]] para conservarla.",
    "care": "Si un aviso rojo indica que el almacenamiento está en otra cuenta, crea la clave nueva en esa cuenta.",
    "like": "Es sustituir una llave del contador: la anterior sirve hasta entregar la nueva."
  },
  "help.site.token_input": {
    "t": "Clave de uso",
    "what": "Aquí pegas la clave copiada de Cloudflare. Los caracteres quedan ocultos.",
    "when": "Justo después de crearla y pulsar [[Copy]] en Cloudflare.",
    "click": "Pegarla no guarda nada. Pulsa [[Guardar clave]] al lado.",
    "care": "Pega la clave completa sin espacios. Solo puede consultar cifras y el nombre de tu cuenta, nunca modificar o borrar datos; aun así, no la compartas.",
    "like": "Es la ranura donde introduces la llave del contador."
  },
  "help.site.token_save": {
    "t": "Guardar clave",
    "what": "Comprueba la clave con Cloudflare y la guarda.",
    "when": "Púlsalo después de pegar la clave.",
    "click": "Primero se comprueba. Si funciona, se guarda y aparecen las cifras de consumo arriba. La sesión sigue abierta. Si falla, un aviso rojo explica qué corregir.",
    "care": "Si no puede consultar las cuentas, pide el Account ID de Cloudflare en otra casilla. Rellénalo y vuelve a intentarlo. Las claves de otras cuentas se rechazan.",
    "like": "Es probar la llave en el contador y conservarla si funciona."
  },
  "help.site.token_account_id": {
    "t": "Account ID de Cloudflare (solo si se pide)",
    "what": "Es el identificador de tu cuenta de Cloudflare, de 32 letras y números. Aparece solo si la clave no encuentra la cuenta.",
    "when": "Se solicita si al guardar la clave no puede acceder a la lista de cuentas, normalmente por faltar uno de los dos permisos.",
    "click": "Escríbelo y pulsa [[Guardar clave]] otra vez. Si coincide con la clave, se guardará.",
    "care": "Solo admite 0–9 y a–f, exactamente 32 caracteres. Suele ser más fácil crear de nuevo la clave con [[Crearla en Cloudflare]] y ambos permisos.",
    "like": "Es escribir el número de la casa en una llave que no sabe a qué edificio pertenece."
  },
  "help.site.token_howto": {
    "t": "Cómo crear la clave de uso (2 minutos)",
    "what": "Guía paso a paso para crear una clave de uso en Cloudflare. Pulsa el título para desplegarla.",
    "when": "Úsala la primera vez o cuando desaparezcan las cifras de consumo.",
    "click": "Abrirla no cambia nada. Se muestra abierta hasta que guardes una clave; después se pliega.",
    "care": "La clave necesita Account Analytics Read y Account Settings Read. Cloudflare la muestra una sola vez: cópiala inmediatamente.",
    "like": "Es un pequeño mapa que indica dónde está el mostrador de las llaves."
  },
  "help.site.mm_r2": {
    "t": "Almacenamiento de canciones (R2)",
    "what": "Indica dónde están tus canciones e imágenes: nombre del bucket y cuenta de Cloudflare. Ese espacio es tuyo, no de meshmelo.",
    "when": "Consúltalo para saber qué cuenta y bucket utiliza tu sitio.",
    "click": "Esta tarjeta solo informa. Para cambiarlo pulsa [[Cambiar almacenamiento]].",
    "care": "No borres el bucket desde Cloudflare: las canciones dejarían de reproducirse en todas partes.",
    "like": "Es la dirección de tu propio almacén donde guardas todos los discos."
  },
  "help.site.mm_r2_change": {
    "t": "Cambiar almacenamiento",
    "what": "Abre en otra pestaña la página de meshmelo para cambiar a otro bucket o cuenta de Cloudflare.",
    "when": "Úsalo si trasladas canciones a otro almacenamiento o cuenta.",
    "click": "Solo abre la pestaña; no cambia nada hasta que completes los pasos en meshmelo.",
    "care": "Si pasas a otra cuenta de Cloudflare, crea allí otra clave de uso y guárdala en la tarjeta inferior. La anterior no puede consultar la nueva cuenta.",
    "like": "Es llamar a una empresa de mudanzas para trasladar los discos a otro almacén."
  },
  "help.site.mm_card": {
    "t": "Tu sitio de meshmelo",
    "what": "Tu sitio está alojado en meshmelo, pero tus canciones e imágenes se guardan en tu propio almacenamiento. Desde aquí puedes exportarlo o cerrarlo.",
    "when": "Úsalo para hacer copias de seguridad, mudarte a otro alojamiento o dejar de usar meshmelo.",
    "click": "La tarjeta no hace nada sola. [[Exportar mi sitio]] descarga una copia; [[Mi cuenta de meshmelo]] abre tu cuenta.",
    "like": "Es alquilar un local comercial, pero ser dueño de los discos guardados en tu almacén."
  },
  "help.site.mm_export": {
    "t": "Exportar mi sitio",
    "what": "Descarga un ZIP con canciones en lista, álbumes, ajustes, diseños y libro de visitas. No incluye audios ni imágenes, que siguen en tu almacenamiento.",
    "when": "Úsalo para hacer copias de seguridad o antes de trasladar el sitio a tu propio alojamiento.",
    "click": "La descarga comienza inmediatamente, sin modificar el sitio.",
    "care": "Guarda el ZIP en privado: incluye datos de acceso y el secreto de conexión con aimusiclist.com. Puedes exportar incluso si el sitio está suspendido.",
    "like": "Es fotocopiar el cuaderno completo de tu tienda para abrirla en otro lugar."
  },
  "help.site.mm_delete": {
    "t": "Eliminar mi sitio",
    "what": "Cierra definitivamente tu sitio de meshmelo y elimina sus páginas, ajustes y lista de canciones. Pulsa el título para abrir el formulario.",
    "when": "Solo cuando de verdad quieras dejarlo. Si vas a mudarte, utiliza antes [[Exportar mi sitio]].",
    "click": "Abrirlo no cambia nada. Para borrar debes introducir el nombre del sitio, la contraseña y pulsar el botón rojo.",
    "care": "Es irreversible. Las canciones desaparecen de aimusiclist.com de inmediato, pero los archivos de tu propio bucket no se tocan. Su nombre de sitio no se volverá a asignar.",
    "like": "Es devolver la llave de un local alquilado mientras los discos de tu almacén siguen siendo tuyos."
  },
  "help.site.mm_delete_name": {
    "t": "Escribe el nombre del sitio para confirmar",
    "what": "Escribe aquí el nombre exactamente como aparece, para demostrar que deseas eliminarlo.",
    "when": "Solo cuando estés eliminando tu sitio.",
    "click": "Escribir no borra nada. Se comprueba cuando pulsas el botón rojo.",
    "care": "Debe coincidir letra por letra. Si es diferente, no se elimina nada y aparece un aviso.",
    "like": "Es firmar el documento de cierre de la tienda."
  },
  "help.site.mm_delete_btn": {
    "t": "Eliminar mi sitio",
    "what": "Es el último botón, el que realmente elimina tu sitio de meshmelo.",
    "when": "Úsalo después de escribir arriba el nombre del sitio y tu contraseña actual.",
    "click": "Pide una última confirmación. Si aceptas, el sitio se elimina enseguida, la sesión se cierra y se abre tu página de meshmelo.",
    "care": "No se puede deshacer. Exporta antes si quieres conservar algo. Después de cinco contraseñas incorrectas, tendrás que esperar una hora.",
    "like": "Es apagar las luces y cerrar la puerta de la tienda por última vez."
  },
  "help.site.images": {
    "t": "Banner e imagen de perfil",
    "what": "Son dos fotos: el banner ancho de la parte superior y la foto redonda de perfil.",
    "when": "Añádelas para dar personalidad al sitio. Puedes cambiarlas cuando quieras.",
    "click": "Cada foto se guarda en cuanto la eliges y pulsas Guardar en la ventana de edición. La tarjeta no tiene otro botón para guardarla.",
    "care": "Se admiten JPG, PNG, WebP o GIF de hasta 2 MB. Solo se sube una copia pequeña, nunca la original.",
    "like": "Son el toldo de la tienda y la foto del dueño junto al mostrador."
  },
  "help.site.banner": {
    "t": "Banner superior",
    "what": "Es la imagen ancha sobre el título del sitio, de hasta 1600×400.",
    "when": "Elige una foto horizontal, como un paisaje o una obra alargada.",
    "click": "Pulsa [[Elegir imagen]]. Puedes mover el marco para recortar o reducir la imagen completa. Pulsa [[Guardar imagen]] para mostrarla inmediatamente.",
    "care": "Se guarda como archivo ligero de máximo 300 KB. Las fotos verticales se recortan mucho, por eso es mejor una horizontal. Sin foto, no aparece el espacio del banner.",
    "like": "Es el gran toldo pintado sobre el escaparate."
  },
  "help.site.image_choose": {
    "t": "Elegir imagen",
    "what": "Abre la selección de fotos del dispositivo para el banner o la imagen de perfil.",
    "when": "Úsalo para añadir por primera vez o reemplazar una imagen.",
    "click": "Al elegirla, se abre la ventana de edición. Nada cambia hasta pulsar [[Guardar imagen]] para el banner o [[Aplicar]] para el perfil. Entonces sustituye a la anterior.",
    "care": "Elige JPG, PNG, WebP o GIF de máximo 2 MB. Los GIF animados se convierten en imágenes fijas. Si tu navegador falla, prueba Chrome, Edge o Firefox.",
    "like": "Es sacar una foto de la mochila para colocarla en el marco de la tienda."
  },
  "help.site.image_delete": {
    "t": "Quitar",
    "what": "Elimina del sitio el banner o la foto de perfil.",
    "when": "Úsalo cuando prefieras no mostrar ninguna imagen.",
    "click": "Pide confirmación. Si aceptas, desaparece al instante; una foto de perfil eliminada también deja de aparecer en aimusiclist.com poco después.",
    "care": "No se puede deshacer. Para recuperarla, vuelve a pulsar [[Elegir imagen]]. Si solo quieres cambiarla, no necesitas eliminar primero la anterior.",
    "like": "Es quitar la foto y dejar el marco vacío."
  },
  "help.site.profile": {
    "t": "Imagen de perfil",
    "what": "Es tu foto o logo de 200×200 en forma circular. aimusiclist.com también la muestra en «Artistas nuevos» y junto a tu sitio.",
    "when": "Elige una cara o logo que se reconozca incluso pequeño.",
    "click": "Pulsa [[Elegir imagen]], arrastra, amplía o gira la foto y pulsa [[Aplicar]]. Se guarda al instante y el sitio obtiene un color de fondo parecido. aimusiclist.com la recibe después.",
    "care": "El círculo recorta las esquinas: centra la parte importante. Se guarda en un archivo de hasta 100 KB.",
    "like": "Es la foto del dueño en la tarjeta de la tienda, que también se reparte en el gran mercado."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Permite mostrar anuncios de Google en el sitio y ganar dinero. Solo introduces identificadores de AdSense: el sitio crea los anuncios.",
    "when": "Úsalo después de que Google haya aprobado tu sitio en AdSense.",
    "click": "Rellena las casillas, marca [[Mostrar anuncios en mi sitio]] y pulsa [[Guardar AdSense]]. Los anuncios aparecen en el sitio, nunca en el panel.",
    "care": "Google solo aprueba sitios con dominio propio. Si usas workers.dev, conecta antes tu dominio en Mi dominio. No pegues código de anuncios, solo los identificadores.",
    "like": "Es alquilar un pequeño espacio del escaparate a una empresa que paga por poner su cartel."
  },
  "help.site.ads_client": {
    "t": "ID de editor (ca-pub-…)",
    "what": "Es tu identificador de AdSense: comienza con ca-pub- y continúa con 16 dígitos.",
    "when": "Búscalo en tu cuenta de AdSense y cópialo aquí. Es obligatorio para mostrar anuncios.",
    "click": "Se guarda con [[Guardar AdSense]] y genera automáticamente la página ads.txt.",
    "care": "Copia exactamente ca-pub- y los 16 dígitos, sin nada más. Si tiene otro formato, verás un aviso rojo y no se guardará.",
    "like": "Es el número de cliente en la agencia de publicidad para saber qué tienda recibe el pago."
  },
  "help.site.ads_top": {
    "t": "ID de anuncio superior",
    "what": "Identifica el espacio publicitario que aparece bajo el banner, cerca de la parte superior.",
    "when": "Crea un bloque publicitario en AdSense y copia aquí su número.",
    "click": "Se guarda con [[Guardar AdSense]]. Si está vacío, no aparece anuncio arriba.",
    "care": "Solo números, entre 6 y 20 dígitos. No pegues el código completo.",
    "like": "Es el número del marco para carteles bajo el toldo."
  },
  "help.site.ads_left": {
    "t": "ID de anuncio izquierdo (opcional)",
    "what": "Identifica un segundo espacio publicitario en la columna izquierda.",
    "when": "Rellénalo solo si el diseño tiene columna izquierda, como el oscuro.",
    "click": "Se guarda con [[Guardar AdSense]]. Si el diseño no tiene esa columna, no se muestra el anuncio aunque exista el número.",
    "care": "Solo números, entre 6 y 20 dígitos. Al cambiar a un diseño sin columna izquierda, desaparece automáticamente.",
    "like": "Es otro marco para carteles que solo cabe si la tienda tiene pared lateral."
  },
  "help.site.ads_on": {
    "t": "Mostrar anuncios en mi sitio",
    "what": "Activa o desactiva todos los anuncios.",
    "when": "Márcalo cuando tengas los identificadores. Desmárcalo para dejar de mostrar anuncios sin borrar los datos.",
    "click": "El cambio se aplica con [[Guardar AdSense]]. Los anuncios aparecen o desaparecen del sitio en unos 30 segundos.",
    "care": "No se puede activar sin ID de editor. Los identificadores permanecen guardados al desactivar.",
    "like": "Es el interruptor de las luces de los carteles del escaparate."
  },
  "help.site.ads_save": {
    "t": "Guardar AdSense",
    "what": "Guarda los tres identificadores y la opción de mostrar anuncios.",
    "when": "Púlsalo después de cambiar algo en la tarjeta.",
    "click": "Comprueba primero los números. Si hay un error, aparece un aviso rojo y no guarda nada. Si están bien, los anuncios aparecen o se ocultan en unos 30 segundos.",
    "care": "Los anuncios pueden tardar en llenarse aunque se guarden los datos: eso depende de Google. Consulta AdSense si nunca aparecen.",
    "like": "Es entregar el contrato publicitario firmado."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Es una pequeña página que Google comprueba para saber si los anuncios realmente te pertenecen. Se crea sola con tu ID de editor.",
    "when": "No necesitas hacer nada. Abre su enlace si AdSense te pide comprobarlo.",
    "click": "El enlace abre una pestaña con una línea que contiene tu ID. No puedes editarla aquí: depende del identificador guardado.",
    "care": "Si no has guardado un ID, está vacía. Cuando cambias el ID, Google puede tardar en detectarlo.",
    "like": "Es el permiso en el escaparate que demuestra que esos anuncios están autorizados."
  },
  "help.site.country": {
    "t": "País donde trabajas",
    "what": "Es el país donde creas tu música. aimusiclist.com lo usa para incluirte en la clasificación de artistas de ese país.",
    "when": "Elígelo si quieres aparecer en la clasificación nacional. Es opcional.",
    "click": "Se guarda al pulsar [[Guardar información del sitio]]. Si queda en «Sin definir», solo apareces en Global.",
    "care": "Elige un único país donde trabajes realmente. Puedes cambiarlo después.",
    "like": "Es la bandera de tu puesto en el gran mercado para que te encuentre la gente de tu país."
  },
  "help.site.fields": {
    "t": "Campos adicionales (de aimusiclist.com)",
    "what": "Muestra la versión de la lista de casillas extra (como Estado de ánimo) que recibió el sitio. Aparecen bajo Información adicional al subir canciones o editar información.",
    "when": "Úsalo para saber por qué apareció una casilla nueva o por qué falta alguna.",
    "click": "Solo muestra el estado: versión, número de campos y última comprobación. El sitio actualiza la lista diariamente sin que hagas nada.",
    "care": "Si la descarga falla, aparece un mensaje rojo. Se conserva la última lista válida y las subidas siguen funcionando.",
    "like": "Es la hoja de instrucciones del gran mercado para saber qué etiquetas añadir a los discos."
  },
  "help.site.fields_update": {
    "t": "Actualizar campos",
    "what": "Solicita ahora a aimusiclist.com la lista más reciente, sin esperar a la comprobación diaria.",
    "when": "Púlsalo si anunciaron un campo nuevo y quieres utilizarlo ya.",
    "click": "Un aviso indica si se actualizó, si ya estaba al día o por qué falló. Si cambió, aparecen las casillas nuevas.",
    "care": "Solo puedes pulsarlo una vez por minuto. Si lo haces antes, te indicará cuánto esperar. Tus respuestas antiguas no se pierden.",
    "like": "Es llamar al mercado para preguntar si ya hay un formulario nuevo."
  },
  "help.site.sns": {
    "t": "Redes sociales",
    "what": "Tus direcciones de redes sociales. Las primeras cinco casillas son fijas: YouTube, Instagram, TikTok, Facebook y X.",
    "when": "Añade los lugares donde compartes música o hablas con tus seguidores. Deja vacías las que no uses.",
    "click": "Escribe la dirección completa con https:// y haz clic fuera. Se guarda sola. Los visitantes las ven en la página «Enlaces» y aimusiclist.com muestra iconos junto a tus canciones. Vacía una casilla para quitarla.",
    "care": "La dirección debe corresponder a la red elegida. Por ejemplo, YouTube solo acepta enlaces de YouTube. Máximo 200 caracteres. Una dirección incorrecta aparece en rojo y no reemplaza la anterior.",
    "like": "Es el tablón junto a la puerta: «También nos encontrarás aquí»."
  },
  "help.site.sns_tools": {
    "t": "Subir · Bajar · Quitar",
    "what": "Botones de cada fila de «Otras redes»: [[Subir]] y [[Bajar]] cambian el orden, y [[Quitar]] elimina la fila.",
    "when": "Úsalos para poner primero tus redes principales o retirar alguna que ya no uses.",
    "click": "Se guarda al instante y cambia el orden de la página «Enlaces». [[Quitar]] borra la fila sin pedir confirmación.",
    "care": "Una dirección eliminada se pierde. Para recuperarla, crea otra fila y escríbela. Las cinco redes fijas no se pueden mover; siempre van primero.",
    "like": "Es reorganizar las notas del tablón o quitar una."
  },
  "help.site.sns_more": {
    "t": "Otras redes sociales",
    "what": "Puedes añadir hasta cinco redes adicionales, como SoundCloud, Spotify, Threads o Discord.",
    "when": "Úsalo si también estás en servicios distintos de los cinco principales.",
    "click": "En cada fila elige primero la plataforma y escribe su dirección. Se guarda al salir de la casilla. Aparecen en tu página «Enlaces» en ese orden; en aimusiclist.com comparten el icono 🔗.",
    "care": "Cada servicio solo puede añadirse una vez. No puedes escribir la dirección hasta elegirlo. Si cambias la plataforma, se borra la dirección anterior y debes escribirla otra vez.",
    "like": "Es espacio extra en el tablón para indicar otras formas de encontrarte."
  },
  "help.site.sns_add": {
    "t": "+ Añadir otra red",
    "what": "Añade una fila vacía bajo «Otras redes sociales».",
    "when": "Úsalo para agregar una plataforma que no esté entre las cinco fijas.",
    "click": "Aparece la fila con la lista de servicios. No se guarda hasta que elijas uno y escribas la dirección. Con cinco filas, el botón se desactiva.",
    "care": "Las filas que dejes vacías no se guardan y desaparecen al volver a abrir la página.",
    "like": "Es poner una nota en blanco en el tablón para escribir después."
  },
  "help.site.sns_view": {
    "t": "Ver página de enlaces",
    "what": "Abre la página «Enlaces» de tu sitio, donde los visitantes encuentran tus redes sociales.",
    "when": "Úsalo para comprobar cómo se ve tu lista.",
    "click": "Se abre en otra pestaña sin modificar nada. El botón solo aparece cuando has guardado al menos un enlace.",
    "like": "Es salir a mirar el tablón de la puerta con ojos de cliente."
  },
  "help.guestbook.title": {
    "t": "Libro de visitas",
    "what": "Es el lugar donde la gente puede dejar mensajes breves sobre tu sitio o una canción.",
    "when": "Entra para escuchar a tus oyentes, leer mensajes y borrar los inadecuados.",
    "click": "Este es solo un título. Usa [[Activar libro de visitas]] para habilitarlo o deshabilitarlo y la lista inferior para leer y borrar mensajes.",
    "like": "Es el cuaderno de la entrada donde los visitantes dejan unas palabras amables."
  },
  "help.guestbook.on": {
    "t": "Activar libro de visitas",
    "what": "Muestra u oculta el libro de visitas. Si está activo, aparece **Libro de visitas** en el menú y 💬 junto a cada canción.",
    "when": "Actívalo para recibir comentarios; desactívalo si llegan demasiados mensajes molestos o necesitas un descanso.",
    "click": "Se guarda inmediatamente. Los visitantes ven el cambio en unos 30 segundos. Puedes volver a activarlo cuando quieras.",
    "care": "Desactivarlo solo lo oculta. Se conservan los mensajes y puedes leerlos o borrarlos aquí.",
    "like": "Es sacar el cuaderno a la puerta o guardarlo dentro un rato."
  },
  "help.guestbook.list": {
    "t": "Mensajes",
    "what": "Lista los mensajes del más reciente al más antiguo, veinte por página. Cada uno muestra nombre, hora y canción relacionada (♪). El total aparece junto al título.",
    "when": "Consúltalos de vez en cuando para leer mensajes nuevos y quitar los malos.",
    "click": "Usa los botones inferiores para ver páginas anteriores. Aquí no puedes editar ni responder; solo eliminar.",
    "care": "Los nombres admiten 20 caracteres, los mensajes 500, sin enlaces; cada persona puede dejar hasta 50 al día. Se conservan hasta que los borres, incluso con el libro cerrado. **Canción eliminada** indica que ya no existe esa canción.",
    "like": "Es pasar las páginas del cuaderno empezando por la última."
  },
  "help.guestbook.delete": {
    "t": "Eliminar",
    "what": "Borra un mensaje del libro de visitas.",
    "when": "Úsalo para mensajes ofensivos, publicidad basura o algo que no quieras mostrar.",
    "click": "Pide confirmación, elimina el mensaje al instante y actualiza la lista.",
    "care": "No se puede deshacer. Eliminar un mensaje no impide que esa persona vuelva a escribir.",
    "like": "Es arrancar una hoja del cuaderno."
  },
  "help.domain.mm": {
    "t": "Mi dominio",
    "what": "Muestra la dirección actual. Si tu sitio está en meshmelo, el dominio propio se conecta desde el portal de meshmelo, no aquí.",
    "when": "Úsalo para consultar tu dirección o conectar una propia, como mymusic.com.",
    "click": "Aquí no hay botón. Entra en my.meshmelo.com → My site → My domain. Si todavía no está disponible, llegará pronto.",
    "care": "Tu dirección actual sigue funcionando y puedes compartirla sin problemas.",
    "like": "Es alquilar un local en un centro comercial: la oficina central organiza el letrero de la calle."
  },
  "help.domain.title": {
    "t": "Mi dominio",
    "what": "Muestra tu dirección actual y permite usar una propia, como mymusic.com, en lugar de la dirección gratuita larga.",
    "when": "Úsalo si compraste un dominio o quieres una dirección fácil de recordar. Google AdSense también exige uno propio.",
    "click": "Es solo un título. Sigue la guía inferior, escribe el dominio y pulsa [[Conectar]]. Cuando funcione aparecerán ✓ y tu dirección.",
    "care": "Si la pantalla indica que la dirección se configura en Cloudflare, no podrás modificarla aquí y la casilla aparecerá desactivada.",
    "like": "Es cambiar una dirección larga de callejón por otra fácil en una avenida."
  },
  "help.domain.guide": {
    "t": "Cómo conectar tu dominio",
    "what": "Explica paso a paso cómo obtener un dominio y apuntarlo al sitio. Tarda unos diez minutos.",
    "when": "Léela antes de pulsar [[Conectar]]: primero debes completar los pasos en Cloudflare.",
    "click": "Pulsa el título para abrir o cerrar la guía. Permanece abierta hasta que el dominio esté conectado.",
    "care": "Pagas el dominio por tu cuenta. Cloudflare puede cambiar los nombres de pantalla: busca opciones equivalentes. En la versión con alojamiento, sigue los pasos del panel de hosting.",
    "like": "Es un mapa para colocar el letrero de tu tienda en la nueva dirección."
  },
  "help.domain.input": {
    "t": "Mi dominio (casilla)",
    "what": "Escribe el dominio comprado, por ejemplo mymusic.com.",
    "when": "Rellénalo cuando termines la guía y el sitio ya se abra con ese dominio.",
    "click": "No ocurre nada hasta pulsar [[Conectar]].",
    "care": "Escribe solo el dominio: sin http://, https:// ni rutas adicionales con /. Para cambiarlo después, introduce otro dominio y vuelve a conectarlo.",
    "like": "Es escribir la dirección nueva en el letrero de la tienda."
  },
  "help.domain.connect": {
    "t": "Conectar",
    "what": "Comprueba que tu sitio realmente abre con el dominio indicado y lo convierte en la dirección principal.",
    "when": "Púlsalo después de escribir el dominio.",
    "click": "La comprobación puede durar hasta 30 segundos. Si funciona, se guarda y aimusiclist.com actualiza automáticamente la dirección. Los visitantes de la anterior son redirigidos; en sitios con alojamiento, la dirección antigua también sigue funcionando.",
    "care": "Si falla, es posible que el dominio no abra tu sitio o que muestre otro. Revisa la guía, espera unos minutos y prueba de nuevo. Las canciones de playlists anteriores seguirán sonando.",
    "like": "Es la oficina postal comprobando dónde está tu tienda antes de redirigir el correo."
  },
  "help.menus.form": {
    "t": "Añadir menú / Editar menú",
    "what": "Aquí creas los botones del menú que ven los visitantes arriba. Cada uno muestra canciones de un género.",
    "when": "Úsalo para organizar la música por estilo, por ejemplo R&B y Hip-hop.",
    "click": "Elige 1. género principal, 2. género detallado si quieres y 3. nombre opcional. Pulsa [[Guardar menú]]. El número junto al botón indica cuántas canciones se incluirán.",
    "care": "Los géneros vienen de aimusiclist.com para mantener el mismo orden. Máximo treinta menús y uno por género.",
    "like": "Es poner letreros de estantería: «R&B aquí, Hip-hop allí»."
  },
  "help.menus.main": {
    "t": "1. Género principal",
    "what": "Es la gran categoría del menú, como R&B, Hip-hop o Dance, igual que en aimusiclist.com.",
    "when": "Elígelo primero. Sin él no podrás guardar el menú.",
    "click": "Al elegirlo se abre la lista de géneros detallados y aparece cuántas canciones coinciden.",
    "care": "Si eliges solo el principal, el menú muestra canciones que lo incluyen en alguna de sus tres casillas de género.",
    "like": "Es el gran letrero sobre un pasillo de la tienda."
  },
  "help.menus.sub": {
    "t": "2. Género detallado",
    "what": "Es una categoría más concreta dentro del género principal. Es opcional.",
    "when": "Úsalo si tienes muchas canciones de un género y quieres mostrar solo un estilo.",
    "click": "La lista contiene solo subgéneros del principal. Déjalo en «Todos los de…» para usar el principal. El contador junto a [[Guardar menú]] cambia al instante.",
    "care": "Queda desactivado hasta elegir un género principal. Si eliges uno detallado, solo aparecerán canciones que lo tengan asignado.",
    "like": "Es la etiqueta de una estantería dentro del pasillo."
  },
  "help.menus.label": {
    "t": "3. Nombre del menú",
    "what": "Es el texto que verán los visitantes en el botón. Es opcional.",
    "when": "Escribe algo como «Música nocturna» o déjalo vacío para usar el género.",
    "click": "Se guarda con [[Guardar menú]]. Si queda vacío, muestra el género traducido al idioma de cada visitante.",
    "care": "Máximo treinta caracteres. El nombre que escribas se mostrará igual en todos los idiomas.",
    "like": "Es el texto que escribes tú mismo en la etiqueta del estante."
  },
  "help.menus.save": {
    "t": "Guardar menú",
    "what": "Guarda el menú configurado arriba.",
    "when": "Púlsalo después de elegir género y, si quieres, nombre.",
    "click": "Se guarda al instante. Los menús nuevos van al final y los visitantes los ven en unos treinta segundos.",
    "care": "No puedes repetir el mismo género en dos menús ni superar treinta menús. Un aviso rojo explica el problema.",
    "like": "Es pegar la etiqueta terminada en la estantería."
  },
  "help.menus.order": {
    "t": "Subir / Bajar",
    "what": "Mueve un menú una posición hacia delante o atrás.",
    "when": "Úsalo para colocar primero los menús importantes.",
    "click": "Se guarda inmediatamente y los visitantes ven el nuevo orden en unos treinta segundos.",
    "care": "El primero no puede subir ni el último bajar; esos botones estarán desactivados.",
    "like": "Es intercambiar las etiquetas para poner primero los estantes más populares."
  },
  "help.menus.edit": {
    "t": "Editar",
    "what": "Abre el menú seleccionado en el formulario superior para cambiar género o nombre.",
    "when": "Úsalo para cambiar el nombre o mostrar otro género.",
    "click": "La página sube hasta el formulario ya rellenado. Cambia los datos y pulsa [[Guardar menú]]; conserva su posición. [[Cancelar]] cierra sin guardar.",
    "like": "Es quitar una etiqueta, reescribirla y colocarla en el mismo lugar."
  },
  "help.menus.delete": {
    "t": "Eliminar",
    "what": "Quita este menú del sitio.",
    "when": "Úsalo cuando ya no lo necesites.",
    "click": "Pide confirmación y lo elimina. Los visitantes dejan de verlo en unos treinta segundos.",
    "care": "Solo desaparece el menú. Las canciones siguen en Inicio y otros menús. No puedes deshacerlo, pero puedes crearlo de nuevo.",
    "like": "Es quitar la etiqueta sin sacar los discos de la estantería."
  },
  "help.menus.list": {
    "t": "Menús del sitio",
    "what": "Muestra todos los menús en el orden en que aparecen arriba. El número entre paréntesis indica cuántos tienes de treinta.",
    "when": "Úsalo para comprobar, ordenar, modificar o borrar menús.",
    "click": "Cada fila muestra nombre, género y cantidad de canciones. Los visitantes también ven siempre «Inicio» y «Álbumes» si tienes álbumes.",
    "care": "«Género no disponible» significa que aimusiclist.com ya no lo incluye. Pulsa [[Editar]] y elige otro. Los menús sin canciones siguen apareciendo, pero vacíos.",
    "like": "Es la fila de etiquetas de estantería que recorre la tienda."
  },
  "help.tab.menus": {
    "t": "Menús",
    "what": "Son los botones que muestran canciones de géneros elegidos de aimusiclist.com.",
    "when": "Entra para decidir qué menús ven los visitantes y en qué orden.",
    "click": "La pestaña solo cambia de pantalla. Añadir, editar, mover o borrar menús se guarda inmediatamente.",
    "care": "Máximo treinta menús. Elige género principal, opcionalmente subgénero y un nombre de máximo treinta caracteres. Usar los géneros de aimusiclist.com mantiene la misma clasificación.",
    "like": "Es organizar la tienda con letreros: «R&B aquí, Hip-hop allí»."
  },
  "help.stats.title": {
    "t": "Estadísticas del sitio",
    "what": "Muestra cuánta gente visitó tu sitio, cuántas canciones escuchó y también tus cifras de aimusiclist.com.",
    "when": "Consúltalo una vez al día o a la semana para saber qué música gusta y si crece tu público.",
    "click": "Consultar no modifica nada. Elige un período arriba y todas las tarjetas mostrarán sus datos.",
    "care": "La mayoría de cifras se calculan **una vez al día**, temprano por la mañana en UTC. Las canciones subidas hoy aparecen en las cifras de mañana.",
    "like": "Es el cuaderno del dueño que apunta cada mañana visitantes y canciones escuchadas."
  },
  "help.stats.period": {
    "t": "Período (7 / 30 / 90 días)",
    "what": "Elige sumar los últimos 7, 30 o 90 días.",
    "when": "Siete días sirven para ver la semana; noventa para tener una visión de tres meses.",
    "click": "Las cifras, gráficos y tablas cambian inmediatamente. El botón de color indica el período activo. No se guarda ni envía nada.",
    "care": "El período termina **ayer** en UTC. Hoy aparece por separado en la línea **Hoy** de cada tarjeta. La flecha **frente al período anterior** compara con los días inmediatamente anteriores.",
    "like": "Es elegir cuántas páginas del cuaderno lees: una semana, un mes o tres."
  },
  "help.stats.note.off": {
    "t": "No se cuentan las reproducciones de mi sitio",
    "what": "Con este alojamiento aún no se pueden contar las escuchas de tu sitio. Por eso el orden **Populares** utiliza las de aimusiclist.",
    "when": "Aparece automáticamente. Si te bastan las cifras de aimusiclist, no tienes que hacer nada.",
    "click": "Lee el aviso. Si propone activar el audio Worker, sigue esos pasos. El recuento empezará al día siguiente.",
    "care": "No es posible recuperar cifras de días anteriores a la activación.",
    "like": "Es una tienda sin contador de entrada: consultas las cifras del gran mercado en su lugar."
  },
  "help.stats.note.dataset": {
    "t": "Registro de estadísticas desactivado",
    "what": "Tu sitio aún no registra visitas ni reproducciones. Debes activarlo una vez en tu cuenta de Cloudflare.",
    "when": "Hazlo cuando quieras conocer las cifras de tu propio sitio.",
    "click": "Sigue el aviso: crea el almacenamiento de estadísticas en Cloudflare con el nombre indicado. En GitHub elimina «# » de las tres líneas señaladas y pulsa [[Commit changes]]. El sitio se actualiza en 1–3 minutos y las cifras aparecen tras el siguiente recuento diario.",
    "care": "El nombre debe ser exactamente **aml_site_stats**. Si cambias las líneas sin crearlo antes en Cloudflare, la actualización fallará. En ese caso, vuelve a poner «# ».",
    "like": "Es instalar un contador de visitas en la puerta."
  },
  "help.stats.note.token": {
    "t": "Falta la clave de uso",
    "what": "Para consultar tus estadísticas, necesitas una clave de uso de Cloudflare que aún no has añadido.",
    "when": "Añádela una vez. También permite ver el espacio gratuito disponible en la parte superior del panel.",
    "click": "Ve a **Información del sitio** y pega la clave, con el permiso indicado en el aviso. Los datos aparecerán después del próximo recuento diario.",
    "care": "Créala en la **misma cuenta de Cloudflare** que este sitio. Guárdala en secreto y no la publiques.",
    "like": "Es la llave de la sala del contador: sin ella no puedes leer las cifras."
  },
  "help.stats.note.no_visits": {
    "t": "No se cuentan las visitas",
    "what": "En este alojamiento se sirven páginas listas para mostrar; por eso no se cuentan las visitas, aunque sí las reproducciones.",
    "when": "Este aviso aparece automáticamente y es normal.",
    "click": "No hay nada que pulsar. Se ocultan la tarjeta y el gráfico de **Visitas**; países, dispositivos e idiomas se calculan según las reproducciones.",
    "like": "Es una tienda que no cuenta quién entra, pero sí cada disco que se escucha."
  },
  "help.stats.note.error": {
    "t": "No se pudieron leer las estadísticas",
    "what": "El último recuento falló. El aviso explica la causa.",
    "when": "Se muestra automáticamente cuando ocurre un error.",
    "click": "Si dice **Mostrando las últimas cifras guardadas**, verás los datos anteriores. Normalmente el recuento diario siguiente lo arregla. Si dura varios días, revisa la clave de uso en **Información del sitio**.",
    "care": "Si se reanuda pronto el recuento, los días perdidos pueden recuperarse, pero los muy antiguos quizá no.",
    "like": "Es un día en que no vino el encargado del contador: se mantiene la última lectura."
  },
  "help.stats.updated": {
    "t": "Fecha de actualización",
    "what": "Indica cuándo se calcularon por última vez las cifras y avisa de que son aproximadas.",
    "when": "Revísalo si alguna cifra parece antigua. Si la hora corresponde a ayer, quizá aún no se haya hecho el recuento de hoy.",
    "care": "Las cifras se calculan una vez al día, después de las 00:00 UTC, a la hora particular indicada para tu sitio. Se excluyen **Bots** y **tus propias visitas** con la sesión iniciada; por eso la cifra puede ser menor que el total de clics.",
    "like": "Es la fecha impresa en un recibo para saber cuándo se hizo el recuento."
  },
  "help.stats.csv.days": {
    "t": "Descargar CSV diario",
    "what": "Descarga una fila por día del período: visitas, reproducciones, reproducciones desde aimusiclist, libro de visitas y cifras de aimusiclist.",
    "when": "Úsalo para conservar los datos o crear gráficos en Excel o Google Sheets.",
    "click": "El navegador crea el archivo y lo descarga. No cambia nada en el sitio.",
    "care": "Los días se expresan en UTC. Selecciona primero siete, treinta o noventa días, porque el archivo sigue ese período.",
    "like": "Es fotocopiar las páginas del cuaderno de la tienda."
  },
  "help.stats.csv.tracks": {
    "t": "Descargar CSV de canciones",
    "what": "Descarga una fila por canción con posición, cambios de posición, escuchas y estadísticas y puestos de aimusiclist.",
    "when": "Úsalo para comparar canciones en una hoja de cálculo o conservar su historial.",
    "click": "El navegador crea el archivo y lo descarga sin modificar el sitio.",
    "care": "Las escuchas siguen el período elegido; las cifras de aimusiclist siempre corresponden a siete días. Una casilla vacía significa que no hay dato.",
    "like": "Es copiar la lista de discos más escuchados a tu propio cuaderno."
  },
  "help.stats.refresh": {
    "t": "Actualizar ahora",
    "what": "Vuelve a contar inmediatamente visitas y reproducciones de tu sitio, incluido hoy.",
    "when": "Úsalo después de compartir una canción para comprobar si llegan oyentes. Sin él, las cifras se actualizan una vez al día.",
    "click": "Tras unos segundos se actualizan las cifras, también en la lista de canciones y tu sitio. El botón espera **1 minuto** antes de permitir otra actualización.",
    "care": "Límite diario: **200 veces** en sitios propios y **30 veces** en meshmelo. No actualiza las cifras de aimusiclist, que llegan una vez al día. Si no aparece, tu alojamiento no permite el recuento en este momento.",
    "like": "Es leer tú mismo el contador sin esperar a mañana."
  },
  "help.stats.tile.visits": {
    "t": "Visitas",
    "what": "Número aproximado de veces que la gente abrió tu sitio en el período seleccionado. Se indica **aproximadamente** porque no es exacto.",
    "when": "Míralo para saber si compartir en redes trae visitantes.",
    "click": "La flecha bajo la cifra compara con días anteriores: ▲ significa más y ▼ menos. **Hoy** muestra el dato tras [[Actualizar ahora]] o – si aún no se ha contado.",
    "care": "Más visitas suelen ser mejor. Se excluyen bots y tus propias visitas. Si hay un salto repentino, consulta **De dónde vienen los visitantes**.",
    "like": "Es contar cuántas personas cruzaron la puerta de la tienda."
  },
  "help.stats.tile.plays": {
    "t": "Reproducciones iniciadas",
    "what": "Cuenta las veces que una canción comenzó a sonar desde el principio en tu sitio durante el período.",
    "when": "Es una de las cifras más importantes. Revísala al publicar música nueva.",
    "click": "La flecha compara con el período anterior. **Hoy** muestra los datos tras [[Actualizar ahora]].",
    "care": "Cuantas más, mejor. Cada reproducción cuenta cuando **empieza**, aunque se detenga pronto. Tus escuchas con sesión iniciada no cuentan. Si sigue en cero, lee los avisos superiores.",
    "like": "Es el número de veces que alguien puso un disco en el tocadiscos."
  },
  "help.stats.tile.plays_aml": {
    "t": "Reproducciones desde aimusiclist",
    "what": "Tu sitio envía la música que se reproduce en aimusiclist.com; esta cifra cuenta esas reproducciones.",
    "when": "Úsala para medir cuánto ayuda el gran mercado a difundir tu música.",
    "click": "Mirarla no cambia nada. La flecha compara con los días anteriores.",
    "care": "Más suele ser mejor. Estas reproducciones **no** determinan el orden **Populares** de tu sitio. aimusiclist tiene su propia clasificación. Las cifras pueden diferir de las tarjetas de aimusiclist porque cuentan de forma distinta.",
    "like": "Tus discos suenan en el mercado, pero salen de tu almacén. Aquí ves cuántas veces ocurrió."
  },
  "help.stats.tile.gb": {
    "t": "Mensajes del libro de visitas",
    "what": "Cuenta los mensajes nuevos que escribieron en el período.",
    "when": "Úsalo para saber cuántos seguidores hablan contigo.",
    "click": "Mirarlo no cambia nada. La flecha compara con el período anterior.",
    "care": "Más mensajes suelen indicar participación. Los tuyos no cuentan. Si aumentan de golpe, revisa si hay spam.",
    "like": "Es contar las notas que dejaron en el cuaderno de la entrada."
  },
  "help.stats.trend": {
    "t": "Gráfico por día",
    "what": "Cada barra corresponde a un día. Cuanto más alta, más reproducciones o visitas hubo.",
    "when": "Úsalo para detectar días buenos, por ejemplo después de compartir un enlace.",
    "click": "Coloca el cursor sobre una barra o tócala para ver fecha y cifra. La escala está a la izquierda.",
    "care": "Los días se cuentan en UTC y pueden empezar a otra hora en tu país. Un espacio vacío significa cero o que no hubo recuento.",
    "like": "Es una fila de montones de monedas, uno por día; los más altos indican más actividad."
  },
  "help.stats.table_view": {
    "t": "Mostrar como tabla",
    "what": "Muestra los mismos datos en filas, un día por fila, empezando por el más reciente.",
    "when": "Úsalo para conocer la cifra exacta de un día o si te cuesta leer gráficos.",
    "click": "Púlsalo para abrir o cerrar la tabla. No guarda nada.",
    "care": "Solo muestra el período elegido. Para conservarlo pulsa [[Descargar CSV diario]] abajo.",
    "like": "Es el mismo cuaderno, pero con cifras en lugar de gráficos."
  },
  "help.stats.col.date": {
    "t": "Fecha (UTC)",
    "what": "El día que corresponde a cada fila se calcula según **UTC**, el horario mundial.",
    "when": "Úsala para relacionar una fecha con algo que hiciste, como compartir una canción.",
    "care": "UTC no es tu hora local. En Corea el día UTC empieza a las nueve de la mañana, así que una canción compartida de noche puede contar en otro día.",
    "like": "Es un cuaderno que usa el mismo reloj mundial para todas las tiendas."
  },
  "help.stats.col.rank": {
    "t": "Posición",
    "what": "Es el puesto de la canción en la lista **Populares** de tu sitio, con posibles cambios desde ayer.",
    "when": "Úsalo para encontrar tus canciones más escuchadas.",
    "click": "No hay nada que pulsar. ▲ sube puestos, ▼ baja y – no cambia. **NEW** significa entrada nueva y **RE**, que ha regresado a la lista.",
    "care": "Un número menor es mejor; 1 es el primero. – indica que la canción no tiene puesto porque nadie la escuchó en los últimos siete días.",
    "like": "Es el puesto en la lista de éxitos del escaparate."
  },
  "help.stats.col.plays": {
    "t": "Reproducciones (período elegido)",
    "what": "Cuenta cuántas veces empezó a sonar esta canción en tu sitio durante el período.",
    "when": "Úsalo para comparar canciones.",
    "care": "Más es mejor. Las reproducciones desde aimusiclist aparecen en la columna siguiente. Si una canción nueva muestra cero, espera al próximo recuento.",
    "like": "Es cuántas veces sonó ese disco en tu tocadiscos."
  },
  "help.stats.col.plays_aml": {
    "t": "Desde aimusiclist",
    "what": "Reproducciones de esta canción en aimusiclist.com durante el período, enviadas desde tu sitio.",
    "when": "Úsalo para saber qué canciones descubre la gente en el mercado.",
    "care": "Más es mejor. No cambian el orden Populares de tu sitio. Pueden diferir de **Reproducciones en aimusiclist (7 días)** porque se cuentan de otra forma.",
    "like": "Es cuántas veces salió este disco de tu almacén para sonar en el mercado."
  },
  "help.stats.col.likes": {
    "t": "Me gusta ♥",
    "what": "Total de corazones ♥ recibidos por la canción en tu sitio desde que existe.",
    "when": "Úsalo para conocer las canciones favoritas de tus seguidores.",
    "care": "Es el **total histórico**, no solo el período elegido. Se actualiza una vez al día. Los me gusta de aimusiclist se cuentan aparte.",
    "like": "Es contar los corazones dibujados en la tarjeta de un disco."
  },
  "help.stats.col.aml_plays7": {
    "t": "Reproducciones aimusiclist (7 días)",
    "what": "Reproducciones de esta canción registradas por aimusiclist.com en los últimos siete días.",
    "when": "Úsalo para conocer cómo va tu canción esta semana en el mercado.",
    "care": "Siempre son **7 días**, independientemente del período elegido. Se actualiza a diario. Cuanto más, mejor.",
    "like": "Es el registro semanal de escuchas del gran mercado."
  },
  "help.stats.col.aml_valid7": {
    "t": "Reproducciones válidas (7 días)",
    "what": "Reproducciones de aimusiclist en los últimos siete días donde se escucharon **30 segundos o más**.",
    "when": "Úsalo para medir escuchas reales: saltar enseguida no cuenta como válido.",
    "care": "Cuantas más, mejor. Normalmente son menos que todas las reproducciones. Si hay una gran diferencia, puede que la gente salte pronto: mejora el comienzo o la portada. aimusiclist usa estas escuchas en su clasificación justa.",
    "like": "Son visitantes que se quedaron a escuchar de verdad, no quienes solo pasaron de largo."
  },
  "help.stats.col.chart": {
    "t": "Posición en la lista",
    "what": "Puesto en la clasificación semanal Top 100 de aimusiclist y cambio desde la lista anterior.",
    "when": "Úsalo para saber si la canción entró en la clasificación principal.",
    "care": "Un número menor es mejor. **NEW** significa entrada nueva; – indica que ahora no está clasificada, algo normal para la mayoría.",
    "like": "Es el puesto de tu disco en el gran tablero de éxitos del mercado."
  },
  "help.stats.col.genre_rank": {
    "t": "Posición por género",
    "what": "Puesto de la canción en la lista de su género en aimusiclist, como R&B o Hip-hop.",
    "when": "Úsalo para compararla con otras del mismo estilo.",
    "care": "Un número menor es mejor. Estas listas son más pequeñas y puede ser más fácil entrar. – significa que aún no tiene puesto.",
    "like": "Es tu posición en un estante concreto del mercado, por ejemplo el de R&B."
  },
  "help.stats.col.all_rank": {
    "t": "Posición entre todas las canciones",
    "what": "Es el puesto de tu canción entre **todas las canciones** escuchadas en aimusiclist esta semana (de viernes a jueves). Debajo aparece su mejor posición histórica.",
    "when": "Úsalo aunque no esté en el Top 100: así puedes ver si está subiendo.",
    "click": "No hay nada que pulsar. ▲ muestra cuántos puestos subió desde la semana pasada; ▼, cuántos bajó.",
    "care": "Cuanto menor sea el número, mejor. Cambia **cada viernes**. Si nadie escuchó la canción esta semana, aparece –.",
    "like": "Aunque tu disco no esté en la lista principal, puedes ver su puesto entre todos los del mercado."
  },
  "help.stats.tracks": {
    "t": "Canciones populares",
    "what": "Tabla de hasta cien canciones con cifras de reproducción y posiciones, empezando por el mejor puesto.",
    "when": "Úsala para descubrir tus éxitos actuales y las canciones que necesitan más promoción.",
    "click": "Consultar no cambia nada. La columna **Reproducciones** sigue el período elegido; las columnas de aimusiclist muestran siempre los últimos siete días.",
    "care": "El orden coincide con **Populares** en tu sitio y cambia una vez al día. Las columnas aimusiclist aparecen cuando ese servicio envía los datos.",
    "like": "Es la lista de discos más vendidos que cuelgas en la tienda."
  },
  "help.stats.rank_basis": {
    "t": "Cómo se calcula Populares",
    "what": "Explica qué determina el orden **Populares** de tu sitio: las reproducciones propias o las de aimusiclist si no puedes contar las tuyas.",
    "when": "Léelo cuando no entiendas por qué una canción está por encima de otra.",
    "care": "Solo cuentan los **últimos siete días** y las canciones reproducidas reciben puesto, hasta cien. En empates cuentan primero las reproducciones válidas de aimusiclist y después la subida más reciente. Las escuchas desde aimusiclist no se usan aquí.",
    "like": "Es la tarjeta de reglas junto a la lista de éxitos."
  },
  "help.stats.albums": {
    "t": "Álbumes",
    "what": "Tabla de tus álbumes. Cada fila suma las reproducciones de todas sus canciones.",
    "when": "Úsala para saber qué álbum se escucha más.",
    "care": "Aparecen primero los álbumes más escuchados. Si una canción está en dos álbumes, cuenta para ambos.",
    "like": "Es sumar las ventas por caja de discos, no por disco suelto."
  },
  "help.stats.album.plays": {
    "t": "Reproducciones del álbum (período elegido)",
    "what": "Suma las reproducciones de las canciones del álbum, tanto en tu sitio **como** desde aimusiclist.",
    "when": "Úsalo para comparar álbumes.",
    "care": "Más es mejor, pero un álbum con muchas canciones puede tener una cifra alta por su tamaño. Mira también la columna **Canciones**.",
    "like": "Es sumar todas las veces que sonaron los discos de una caja, aquí y en el mercado."
  },
  "help.stats.album.aml_plays7": {
    "t": "Reproducciones del álbum en aimusiclist (7 días)",
    "what": "Suma las escuchas de las canciones del álbum registradas por aimusiclist en los últimos siete días.",
    "when": "Úsalo para saber qué álbum gusta más allí esta semana.",
    "care": "Siempre corresponde a **7 días**, independientemente del período elegido. Más es mejor.",
    "like": "Es el recuento semanal del gran mercado para toda tu caja de discos."
  },
  "help.stats.listeners": {
    "t": "Oyentes (según reproducciones)",
    "what": "Esta tarjeta muestra país, dispositivo, idioma y hora de quienes escuchan tus canciones.",
    "when": "Úsala para decidir dónde compartir tu música y en qué idioma escribir.",
    "care": "Este alojamiento no cuenta visitas, así que se usan las **reproducciones**, no las visitas. No se guardan datos personales. El porcentaje corresponde a la parte de la lista mostrada.",
    "like": "Es fijarte en las ciudades de donde vienen quienes escuchan tus discos."
  },
  "help.stats.countries": {
    "t": "Países",
    "what": "Muestra los diez países de origen principales de oyentes o visitantes, de mayor a menor.",
    "when": "Úsalo para elegir idiomas para títulos o promocionar música en un país.",
    "care": "**Desconocido** significa que no se pudo averiguar el país. Es normal que ocurra algunas veces.",
    "like": "Es poner chinchetas en un mapa según el país de cada visitante."
  },
  "help.stats.devices": {
    "t": "Dispositivos",
    "what": "Muestra si las personas abren el sitio con móvil, tableta u ordenador.",
    "when": "Úsalo al elegir diseño: si predominan móviles, comprueba cómo se ve en ellos.",
    "care": "No se muestran dispositivos que no se pueden distinguir.",
    "like": "Es observar si tus clientes llegan andando, en bici o en coche."
  },
  "help.stats.langs": {
    "t": "Idiomas",
    "what": "Muestra los diez idiomas principales configurados en los dispositivos de tus visitantes.",
    "when": "Úsalo para decidir los idiomas de textos y títulos.",
    "care": "Es el idioma del dispositivo, no necesariamente el que más habla la persona. **Desconocido** significa que no se informó.",
    "like": "Es escuchar en qué idiomas hablan quienes entran a tu tienda."
  },
  "help.stats.audience": {
    "t": "Público",
    "what": "Esta tarjeta resume países, procedencia, dispositivos, idiomas y horas de tus visitantes.",
    "when": "Úsala para decidir dónde promocionar tu música y en qué idioma escribir.",
    "click": "Consultar no cambia nada. Las listas siguen el período elegido.",
    "care": "No se guardan datos personales, solo grandes grupos como «Corea» o «Móvil». El porcentaje muestra la proporción dentro de la lista.",
    "like": "Es notar que muchos clientes llegaron hoy de otra ciudad, andando y por la tarde."
  },
  "help.stats.refs": {
    "t": "Procedencia de los visitantes",
    "what": "Agrupa cómo llegan: escribiendo la dirección o con marcador, buscadores, redes sociales, apps musicales, aimusiclist.com, otras webs o navegación interna.",
    "when": "Úsalo para descubrir qué forma de compartir funciona mejor.",
    "care": "**Directo / marcador** también incluye enlaces abiertos desde apps de chat que no indican procedencia. **Dentro del sitio** es pasar de una página tuya a otra.",
    "like": "Es preguntar a cada visitante: «¿Cómo conociste nuestra tienda?»."
  },
  "help.stats.domains": {
    "t": "Sitios que más visitantes envían",
    "what": "Muestra hasta diez webs que dirigen más personas a tu sitio.",
    "when": "Úsalo para saber qué publicación te trae público y compartir allí otra vez.",
    "care": "Solo muestra el sitio de procedencia, no la página exacta. No cuenta movimientos dentro de tu propio sitio.",
    "like": "Es una lista de tiendas vecinas que señalan cómo llegar a la tuya."
  },
  "help.stats.hours": {
    "t": "Horas del día",
    "what": "Cada barra es una hora entre 0:00 y 23:00. Cuanto más alta, más visitas o escuchas hubo en esa hora del período.",
    "when": "Úsalo para compartir una canción un poco antes de las horas más activas.",
    "click": "Coloca el cursor sobre una barra o tócala para ver hora y cantidad.",
    "care": "Las horas aparecen según **la hora de tu ordenador** y el título indica la diferencia con UTC. En algunas zonas de media hora se utiliza UTC.",
    "like": "Es saber que tu tienda se llena al mediodía y después de clase."
  },
  "help.stats.aml.title": {
    "t": "En aimusiclist.com",
    "what": "Muestra tus reproducciones, escuchas válidas, me gusta, añadidos a playlists, gráfico diario y países en aimusiclist.com.",
    "when": "Úsalo para saber cómo va tu música pública en el gran mercado.",
    "click": "Consultar no cambia nada. Las tarjetas siguen el período elegido.",
    "care": "Las cifras llegan **una vez al día** por la mañana; [[Actualizar ahora]] no las modifica. Si sale «Sin conexión», conecta primero el sitio. Solo se cuentan canciones públicas en aimusiclist.",
    "like": "Es el informe que el gran mercado envía cada mañana sobre tu puesto."
  },
  "help.stats.aml.plays": {
    "t": "Reproducciones en aimusiclist",
    "what": "Cuenta las veces que escucharon tus canciones en aimusiclist.com durante el período.",
    "when": "Úsalo para ver si aumenta tu público en ese servicio.",
    "care": "Cuantas más, mejor. La flecha compara con el período anterior. Solo cuentan canciones públicas. Si baja de golpe a cero, comprueba que siguen públicas y que tu sitio está conectado.",
    "like": "Es contar cuántas veces sonaron tus discos en el puesto del gran mercado."
  },
  "help.stats.aml.valid": {
    "t": "Reproducciones válidas (30 s+)",
    "what": "Son escuchas en aimusiclist donde alguien permaneció 30 segundos o más durante el período.",
    "when": "Úsalo para medir escuchas reales, no saltos rápidos.",
    "care": "Cuantas más, mejor. Si es mucho menor que **Reproducciones**, muchos oyentes abandonan pronto. aimusiclist usa las válidas para la clasificación, por eso importan especialmente.",
    "like": "Son los clientes que se quedaron a escuchar, no quienes pasaron de largo."
  },
  "help.stats.aml.likes": {
    "t": "Me gusta en aimusiclist",
    "what": "Cuenta los me gusta recibidos por tus canciones en aimusiclist.com durante el período.",
    "when": "Úsalo para conocer la respuesta de tus seguidores a las canciones nuevas.",
    "care": "Más es mejor. No incluye los me gusta de tu propio sitio: esos están en **Me gusta ♥** de la tabla Canciones populares.",
    "like": "Es contar los corazones que dejaron en tu puesto del mercado."
  },
  "help.stats.aml.adds": {
    "t": "Añadidas a playlists",
    "what": "Cuenta las veces que alguien añadió tus canciones a playlists de aimusiclist.com durante el período.",
    "when": "Úsalo para saber si las personas quieren volver a escuchar tus canciones.",
    "care": "Cuantas más, mejor. Añadir una canción a una playlist es una buena señal de que quieren repetir.",
    "like": "Es un cliente que se lleva tu disco a casa en lugar de escucharlo una sola vez."
  },
  "help.stats.aml.trend": {
    "t": "Reproducciones diarias de aimusiclist",
    "what": "Cada barra representa un día en aimusiclist.com. Las más altas indican más reproducciones.",
    "when": "Úsalo para ver cuándo tuvieron éxito tus canciones, por ejemplo al entrar en una lista.",
    "click": "Pasa el cursor sobre una barra o tócala para conocer fecha y cifra.",
    "care": "El gráfico termina ayer, en UTC, igual que las cifras de tu sitio. Los huecos indican cero o falta de datos.",
    "like": "Es una fila de montones de monedas para tu puesto del mercado, uno por día."
  },
  "help.stats.aml.countries": {
    "t": "Países de oyentes de aimusiclist",
    "what": "Muestra hasta diez países desde donde se escuchan tus canciones en aimusiclist.com, ordenados por cantidad.",
    "when": "Úsalo para descubrir dónde está creciendo tu público.",
    "care": "La lista la prepara aimusiclist una vez al día. Puede diferir de la de visitantes de tu sitio.",
    "like": "Es el mercado diciéndote de qué países vienen quienes visitan tu puesto."
  },
  "help.stats.free.r2_storage": {
    "t": "Espacio de almacenamiento",
    "what": "Muestra cuánto ocupan canciones e imágenes en Cloudflare. El plan gratuito incluye **10 GB**.",
    "when": "Revísalo antes de subir muchas canciones o archivos grandes.",
    "care": "Si superas la cantidad gratuita, Cloudflare te cobra. Borrar canciones libera espacio. Los WAV ocupan mucho más que los MP3.",
    "like": "Es lo lleno que está tu almacén."
  },
  "help.stats.free.workers": {
    "t": "Solicitudes al sitio hoy",
    "what": "Cuenta las solicitudes de páginas, canciones e imágenes hechas hoy. El plan gratuito permite **100.000 al día**.",
    "when": "Revísalo los días de muchas visitas, por ejemplo tras una campaña.",
    "care": "Si superas el límite, tu sitio **se detiene hasta el final del día**, sin coste. Vuelve a funcionar a las 00:00 UTC (09:00 en Corea).",
    "like": "Es una puerta que solo puede abrirse cierto número de veces hasta mañana."
  },
  "help.stats.free.r2_class_a": {
    "t": "Escrituras al almacenamiento este mes",
    "what": "Cuenta las veces que se guarda algo, por ejemplo una subida o cambio. El plan gratuito permite **un millón al mes**.",
    "when": "Revísalo si subes o modificas muchas cosas.",
    "care": "El uso normal queda muy por debajo. Superar el límite genera cargos de Cloudflare. El contador vuelve a empezar cada mes.",
    "like": "Es contar las cajas metidas en el almacén durante el mes."
  },
  "help.stats.free.r2_class_b": {
    "t": "Lecturas del almacenamiento este mes",
    "what": "Cuenta las veces que se recupera algo del almacenamiento, sobre todo al reproducir canciones. El plan gratuito permite **diez millones al mes**.",
    "when": "Revísalo cuando tus canciones tengan muchas escuchas.",
    "care": "Si superas el límite, Cloudflare cobra. Se reinicia cada mes. Muchas reproducciones son una buena noticia, aunque llenen esta barra.",
    "like": "Es cuántas veces se sacaron discos del almacén durante el mes."
  },
  "help.stats.free.ae": {
    "t": "Registros de estadísticas hoy",
    "what": "Cuenta las líneas escritas hoy en el registro por visitas, reproducciones o mensajes. El nivel gratuito incluye **100.000 líneas al día**.",
    "when": "Revísalo en días de tráfico muy alto.",
    "care": "Solo aparece cuando ya se contaron las cifras de hoy, por ejemplo tras [[Actualizar ahora]]. El uso normal queda lejos del límite. Tus páginas y canciones no dependen de esta barra.",
    "like": "Es contar las líneas escritas hoy en el cuaderno de visitas."
  },
  "help.stats.free.title": {
    "t": "Capacidad gratuita disponible",
    "what": "Las barras muestran qué parte del plan gratuito de Cloudflare utiliza tu sitio. Funciona sin coste mientras todas estén por debajo de 100 %.",
    "when": "Revísalas de vez en cuando, especialmente tras subir muchas canciones.",
    "click": "Mirarlas no cambia nada. Una barra avisa al **70 %** y señala peligro al **90 %**.",
    "care": "Si se acerca al 100 %, deja de subir archivos grandes y comprueba qué límite se está agotando. El nivel gratuito alcanza para unas mil canciones de 10 MB y unos miles de visitantes diarios.",
    "like": "Es revisar los contadores de agua y luz antes de superar la cantidad incluida."
  },
  "help.an.title": {
    "t": "Análisis",
    "what": "Esta pestaña muestra cómo evolucionan tus canciones: puestos que suben o bajan, canciones en crecimiento y noticias de aimusiclist.com.",
    "when": "Ábrela una vez a la semana para observar tendencias. **Estadísticas** indica «cuánto» y esta pestaña indica «si sube o baja».",
    "click": "Consultar no modifica el sitio. Elige un período arriba y los gráficos y tablas se adaptarán.",
    "care": "El sitio guarda una línea al día. El primer día aún no habrá gráficos. A partir de la mañana siguiente se llenan poco a poco. Los registros de más de dos años se eliminan.",
    "like": "Es el diario que la tienda escribe cada día para mirar atrás y ver cómo cambió todo."
  },
  "help.an.period": {
    "t": "Período (7 / 30 / 90 días / Todo)",
    "what": "Elige cuántos días muestran los gráficos y la tabla. **Todo** incluye todos los días registrados.",
    "when": "Siete días sirven para esta semana, treinta o noventa para ver más y **Todo** para conocer la historia completa.",
    "click": "Los gráficos cambian enseguida. La primera vez que elijas **Todo** quizá tarde unos segundos porque carga registros antiguos.",
    "care": "Algunas tarjetas siempre usan siete días: **Mis canciones en ascenso**, **Cambio en siete días** y los datos de aimusiclist. **Me gusta y añadidos a playlists** muestra como máximo noventa días.",
    "like": "Es elegir cuántas páginas del diario quieres leer."
  },
  "help.an.note.start": {
    "t": "El registro empieza hoy",
    "what": "Tu sitio acaba de empezar a guardar estadísticas diarias y todavía no hay días anteriores.",
    "when": "Aparece el primer día después de activar la función.",
    "click": "No hay nada que hacer. Vuelve mañana; cada mañana se añadirá un día a los gráficos.",
    "care": "No pueden recuperarse los días anteriores. Los gráficos empiezan hoy.",
    "like": "Es la primera página de un diario nuevo; mañana tendrá otra línea."
  },
  "help.an.note.since": {
    "t": "Registro desde",
    "what": "Indica el primer día en que se guardaron datos. Los gráficos no pueden ir más atrás.",
    "when": "Consúltalo si un gráfico parece empezar demasiado tarde.",
    "care": "Los registros se conservan unos dos años y los más antiguos se eliminan automáticamente.",
    "like": "Es la fecha escrita en la primera página del diario."
  },
  "help.an.note.feed": {
    "t": "Datos de aimusiclist",
    "what": "Cada día el sitio recibe un informe de aimusiclist.com con canciones en ascenso, líneas de clasificación y noticias. Aquí aparece su fecha.",
    "when": "Revísalo si las noticias o canciones en ascenso parecen antiguas.",
    "click": "No hay nada que pulsar. El informe llega una vez al día. Si aún no llegó, vuelve mañana.",
    "care": "Abrir la pestaña varias veces solo muestra el informe guardado, sin pedir nuevos datos ni generar costes.",
    "like": "Es el periódico que el gran mercado deja cada mañana en la puerta de tu tienda."
  },
  "help.an.note.feed_old": {
    "t": "No llegaron los datos de hoy",
    "what": "Tu sitio intentó recibir el informe de aimusiclist.com, pero no llegó. Se muestra el anterior.",
    "when": "Este aviso aparece automáticamente.",
    "click": "No tienes que hacer nada. El sitio lo intentará otra vez mañana.",
    "care": "Tus propias cifras no cambian; solo algunas tarjetas de aimusiclist pueden tener un día de retraso. Si dura varios días, revisa la conexión.",
    "like": "Es una mañana sin periódico: el de ayer sigue en la mesa."
  },
  "help.an.news": {
    "t": "Noticias de aimusiclist",
    "what": "Muestra las cinco noticias más recientes. **Informe de listas** habla de clasificaciones y **Aviso** de cambios en el servicio.",
    "when": "Léelas cuando veas un punto en **Análisis**: significa que hay novedades.",
    "click": "Pulsa **Leer más** para abrir la noticia completa en otra pestaña. Al abrir Análisis desaparece el punto.",
    "care": "Las noticias llegan una vez al día con los datos de aimusiclist. Aquí no se muestran imágenes para que la página cargue rápido.",
    "like": "Es el tablón del gran mercado con los últimos cinco anuncios."
  },
  "help.an.rank.basis": {
    "t": "Qué posición mostrar",
    "what": "Elige la clasificación del gráfico: **Posición en aimusiclist** entre todas las canciones, **Posición en mi sitio** según Populares o **Ambas** para dos gráficos.",
    "when": "Usa aimusiclist para ver cómo te va en el gran mercado y mi sitio para saber qué escuchan tus propios visitantes.",
    "click": "El gráfico cambia inmediatamente y vuelve a elegir las tres canciones mejor situadas. También cambia **Mis canciones en ascenso** y la columna **Cambio en siete días**.",
    "care": "Al principio muestra la posición de aimusiclist si existe. Las canciones que nunca tuvieron puesto no aparecen para elegir.",
    "like": "Es elegir entre el tablero del gran mercado y el de tu propia tienda."
  },
  "help.an.rank": {
    "t": "Cambios de posición",
    "what": "Gráfico de líneas con los puestos diarios de tus canciones. Cada canción tiene color, estilo de línea y forma de punto diferentes.",
    "when": "Úsalo para ver si una canción sube, baja o se mantiene y para comparar varias.",
    "click": "Elige canciones debajo del título. Pasa el cursor por un punto o tócalo para ver canción, fecha y puesto.",
    "care": "**Más arriba en el gráfico es mejor**: el primer puesto está arriba. Si hay puestos muy alejados, la escala se comprime y las distancias entre marcas dejan de ser iguales.",
    "like": "Es un mapa de escalada: cada canción es una persona y la cima está arriba."
  },
  "help.an.rank.pick": {
    "t": "Elegir canciones",
    "what": "Los títulos bajo esta línea son interruptores. Una canción marcada tiene su línea en el gráfico.",
    "when": "Elige unas pocas para comparar, por ejemplo la nueva y la más escuchada.",
    "click": "Pulsa el título para añadir o quitar la línea. El gráfico cambia inmediatamente. Al principio aparecen las tres mejores.",
    "care": "Puedes elegir **hasta ocho canciones**. Al llegar a ocho, desmarca una para seleccionar otra. No se guarda la selección y se reinicia al cambiar el tipo de posición.",
    "like": "Es elegir qué montañistas quieres seguir en el mapa."
  },
  "help.an.rank.gap": {
    "t": "Interrupciones en las líneas",
    "what": "Un hueco significa que la canción no tuvo puesto ese día.",
    "when": "Léelo si una línea se corta y después vuelve.",
    "care": "Es normal si nadie escuchó la canción en los siete días anteriores o no llegaron los datos de ese día. Un punto suelto significa que solo tuvo puesto un día.",
    "like": "Es una persona que sale del sendero y vuelve a encontrarlo después."
  },
  "help.an.sort": {
    "t": "Ordenar",
    "what": "Elige cómo ordenar la tabla: **Más reproducidas**, **Tiempo de escucha**, **En ascenso** (mayor subida semanal) o **Recientes**.",
    "when": "Usa En ascenso para elegir canciones que compartir ahora y Recientes para revisar las nuevas.",
    "click": "El orden cambia al instante; no se guarda nada.",
    "care": "En empates se ordena por título. En **En ascenso**, las entradas nuevas (NEW) quedan detrás de las que realmente subieron y las que no tienen puesto, al final.",
    "like": "Es ordenar los discos por escuchas, duración, tendencia o fecha de llegada."
  },
  "help.an.table": {
    "t": "Mis canciones de un vistazo",
    "what": "Tabla de canciones con reproducciones, tiempo de escucha, puesto en aimusiclist, cambio semanal y fecha de subida.",
    "when": "Úsala para encontrar tus canciones más fuertes y las que comienzan a crecer.",
    "click": "Puedes cambiar el orden con los botones del título. Se muestran hasta doscientas canciones.",
    "care": "Solo aparecen canciones con audio. En pantallas pequeñas se oculta la columna **Subida** para ahorrar espacio.",
    "like": "Es el catálogo completo de discos de las estanterías."
  },
  "help.an.own_off": {
    "t": "No se cuentan las reproducciones de mi sitio",
    "what": "Tu sitio todavía no puede contar escuchas propias, así que **Reproducciones** muestra las de aimusiclist de los últimos siete días.",
    "when": "Este aviso aparece automáticamente.",
    "click": "No hay nada que pulsar. Si activas el recuento en **Estadísticas**, esta columna pasará a mostrar las escuchas propias.",
    "care": "En este caso, las reproducciones no siguen el período seleccionado: siempre son los últimos siete días.",
    "like": "Es pedir prestadas las cifras del mercado porque tu tienda no tiene contador."
  },
  "help.an.col.plays": {
    "t": "Reproducciones",
    "what": "Cuenta las veces que se escuchó la canción en tu sitio durante el período elegido.",
    "when": "Úsalo para encontrar tus canciones más reproducidas.",
    "care": "Más es mejor. No incluye escuchas desde aimusiclist. – significa que no hay cifra disponible.",
    "like": "Es cuántas veces sonó ese disco en el tocadiscos."
  },
  "help.an.col.time": {
    "t": "Tiempo de escucha",
    "what": "Estimación del tiempo total escuchado: **reproducciones × duración de la canción**.",
    "when": "Úsalo para comparar canciones cortas y largas de forma más justa.",
    "care": "Es una **estimación**. El sitio no sabe si alguien dejó de escuchar a mitad; el tiempo real puede ser menor. Si falta la duración, aparece –.",
    "like": "Es estimar cuánto funcionó el tocadiscos multiplicando las vueltas por la duración del disco."
  },
  "help.an.col.rank": {
    "t": "Posición en aimusiclist",
    "what": "Es el puesto más reciente de tu canción entre todas las canciones de aimusiclist.",
    "when": "Úsalo para saber qué canción destaca más en el mercado.",
    "care": "Un número menor es mejor. Cambia los viernes, una vez a la semana. – significa que aún no tiene puesto, normal si nadie la escuchó esta semana.",
    "like": "Es el número del disco en la lista completa del mercado."
  },
  "help.an.col.rise": {
    "t": "Cambio en siete días",
    "what": "Muestra cuántos puestos cambió la canción respecto a hace siete días.",
    "when": "Úsalo para encontrar canciones que empiezan a subir.",
    "click": "No hay botón. ▲ indica que subió, ▼ que bajó, – que no cambió. **NEW** significa que hace siete días no tenía puesto.",
    "care": "▲ es bueno. Utiliza la clasificación elegida en **Cambios de posición** (aimusiclist o mi sitio). Si faltan datos de un día, usa el más cercano entre los tres anteriores.",
    "like": "Es medir cuántos pasos subió un montañista esta semana."
  },
  "help.an.col.uploaded": {
    "t": "Fecha de subida",
    "what": "Día en que subiste la canción a tu sitio.",
    "when": "Úsala para comparar canciones nuevas con antiguas.",
    "care": "En móviles pequeños se oculta esta columna. Gira el móvil o utiliza un ordenador para verla.",
    "like": "Es la fecha sellada en la caja cuando el disco llegó al almacén."
  },
  "help.an.mine": {
    "t": "Mis canciones en ascenso",
    "what": "Hasta cinco canciones tuyas que más puestos subieron esta semana, con un pequeño gráfico de los últimos catorce días.",
    "when": "Úsalo para decidir qué compartir ahora. Una canción que ya sube puede crecer más con un pequeño impulso.",
    "click": "Cada tarjeta muestra cuántos puestos ganó y la posición desde hace siete días hasta hoy.",
    "care": "Siempre usa los **últimos siete días** y la clasificación elegida en **Cambios de posición**, indicada bajo el título. Solo aparecen canciones que realmente subieron.",
    "like": "Es el rincón «Lo mejor de esta semana» de la tienda."
  },
  "help.an.aml.genre": {
    "t": "Género",
    "what": "Elige un género para ver solo canciones de ese estilo en ascenso. **Todos los géneros** muestra la lista completa.",
    "when": "Elige tu estilo para conocer las canciones con las que compites.",
    "click": "La lista cambia inmediatamente. No se guarda nada.",
    "care": "Solo aparecen géneros que tienen canciones en ascenso hoy.",
    "like": "Es recorrer solo el pasillo R&B del gran mercado."
  },
  "help.an.aml": {
    "t": "En ascenso en aimusiclist",
    "what": "Muestra canciones de todos los artistas que están subiendo rápidamente. Las tuyas llevan la etiqueta **Mi canción**.",
    "when": "Úsalo para descubrir qué música gusta ahora y conocer artistas de los que aprender.",
    "click": "Pulsa un título para abrir la canción en aimusiclist en otra pestaña y escucharla. Aquí no se reproduce.",
    "care": "La lista llega una vez al día. ▲ indica puestos ganados, **NEW** una entrada nueva y el número de oyentes, cuántas personas escucharon.",
    "like": "Es pasear por el mercado para ver qué puestos tienen cola hoy."
  },
  "help.an.s1": {
    "t": "Comienzos de canciones nuevas",
    "what": "Gráfico de las reproducciones acumuladas durante los primeros siete días de cada canción nueva. Muestra hasta seis de las más recientes.",
    "when": "Úsalo para comparar el estreno de una canción con los anteriores y ver cuál empezó más fuerte.",
    "click": "Pasa el cursor por un punto o tócalo para ver canción, día y total de escuchas. La lista inferior identifica cada línea.",
    "care": "Solo aparecen canciones subidas **después de activar el registro**. Si tu sitio no cuenta reproducciones, la tarjeta estará vacía.",
    "like": "Es una carrera donde cada disco empieza en cero y ves cuál llega más lejos en su primera semana."
  },
  "help.an.s2": {
    "t": "Distancia al Top 100",
    "what": "Para hasta cinco canciones, estima cuánto les falta para entrar en el Top 100 de aimusiclist.",
    "when": "Úsalo para fijar una meta, como conseguir veinte oyentes más esta semana.",
    "click": "No hay nada que pulsar. Cada línea indica si la canción ya está en el Top 100, cuántos oyentes adicionales podría necesitar o si está cerca.",
    "care": "Es una **estimación**, no una promesa. La clasificación real considera más factores y estar cerca no garantiza entrar. Si el Top 100 no está completo, entran las canciones que cumplen los requisitos.",
    "like": "Es un letrero en el sendero: «Faltan unos doscientos pasos para la cima»."
  },
  "help.an.s2.note": {
    "t": "Por qué es una estimación",
    "what": "aimusiclist no informa del número exacto de oyentes, así que este cálculo utiliza las **reproducciones válidas** de los últimos siete días.",
    "when": "Léelo si las cifras parecen extrañas.",
    "care": "aimusiclist cuenta **una reproducción por persona al día**, de modo que los oyentes diferentes reales pueden ser menos. Utiliza la cifra como orientación aproximada.",
    "like": "Es estimar visitantes a partir de huellas: algunas personas pasaron dos veces."
  },
  "help.an.s3": {
    "t": "Me gusta y añadidos a playlists",
    "what": "Muestra día a día los me gusta y las veces que añadieron tus canciones a playlists de aimusiclist, además de las canciones que más recibieron.",
    "when": "Úsalo para saber qué canciones gustan de verdad, no solo cuáles se escuchan una vez.",
    "click": "Pasa el cursor por una barra o tócala para ver la fecha y el número.",
    "care": "Más es mejor. Muestra como máximo los últimos **noventa días**, aunque elijas **Todo**. Los datos llegan una vez al día.",
    "like": "Es contar los corazones y pegatinas de «llevar a casa» en tu puesto del mercado."
  },
  "help.an.s3.likes": {
    "t": "Me gusta en aimusiclist",
    "what": "Cada barra muestra los me gusta que recibieron todas tus canciones en aimusiclist en un día.",
    "when": "Úsalo para ver si aumentan después de publicar o compartir música.",
    "care": "Más es mejor. Solo incluye me gusta de aimusiclist; los de tu sitio están en **Estadísticas**.",
    "like": "Es contar cada día los corazones del tablón de tu puesto."
  },
  "help.an.s3.adds": {
    "t": "Añadidas a playlists",
    "what": "Cada barra indica las veces que alguien añadió tus canciones a playlists en aimusiclist ese día.",
    "when": "Úsalo para saber si quieren guardarlas y volver a escucharlas.",
    "care": "Más es mejor. Añadir a una playlist es una de las mejores señales de que a alguien le gusta la canción.",
    "like": "Es contar cuántos clientes se llevaron el disco a casa cada día."
  },
  "help.an.s3.top": {
    "t": "Más gustadas y añadidas",
    "what": "Hasta cinco canciones con más me gusta (♥) y añadidos (+) en aimusiclist durante los últimos siete días.",
    "when": "Úsalo para elegir qué compartir después o qué poner primero en un álbum.",
    "care": "Siempre mira los **últimos siete días** y ordena por la suma de me gusta y añadidos.",
    "like": "Es la estantería «Favoritas de los seguidores» de tu tienda."
  },
  "help.an.s4": {
    "t": "Mi posición en mi género",
    "what": "Para hasta seis canciones, muestra su puesto en la lista de su género en aimusiclist y qué porcentaje superior ocupan.",
    "when": "Úsalo para saber cómo compite tu canción con otras del mismo estilo.",
    "click": "No hay nada que pulsar. Aparece **Entre las veinte primeras** si la canción está en los primeros veinte puestos de su género.",
    "care": "Cuanto menor sea el puesto y el porcentaje, mejor (estar en el 1 % superior es excelente). Si se desconoce el tamaño del género, el porcentaje se calcula entre todas las canciones de aimusiclist. Las canciones sin puesto lo indican.",
    "like": "Es conocer tu posición en el estante de R&B, no en todo el mercado."
  },
  // 3-27: SEO y Google Search Console
  "help.site.seo": {
    "t": "Aparecer en las búsquedas (Google)",
    "what": "Ajustes para buscadores como Google. Cada canción y álbum de tu sitio tiene su propia página que pueden encontrar.",
    "when": "Entra aquí para ocultar tu sitio de los buscadores o registrarlo en Google Search Console.",
    "click": "Este título solo explica la sección. El interruptor y los pasos de abajo son los que realizan las acciones.",
    "care": "Aparecer en Google puede tardar varios días o incluso semanas. Esto no cambia nada en aimusiclist.com.",
    "like": "Es como poner el nombre de tu tienda y cada disco en el mapa de la ciudad."
  },
  "help.site.seo_switch": {
    "t": "Mostrar mis canciones y álbumes en los resultados de búsqueda",
    "what": "Permite a los buscadores mostrar tu página de inicio y las páginas de canciones y álbumes. Está activado al principio.",
    "when": "Déjalo activado si quieres que nuevos oyentes te encuentren al buscar. Desactívalo solo si quieres que tu sitio no aparezca en los buscadores.",
    "click": "El cambio se guarda en cuanto pulsas. Si lo desactivas, tus páginas piden a los buscadores que no las muestren y se elimina el mapa del sitio para buscadores.",
    "care": "Las páginas que ya aparecen en las búsquedas pueden tardar en desaparecer. Quien conozca tu dirección podrá seguir entrando.",
    "like": "Es como el cartel de «abierto al público» en la puerta de tu tienda."
  },
  "help.site.gsc": {
    "t": "Registrar mi sitio en Google Search Console",
    "what": "Una guía paso a paso para dar a conocer tu sitio a Google con tu propia cuenta de Google.",
    "when": "Hazlo una vez si quieres que Google encuentre antes tus canciones nuevas y ver cómo te busca la gente.",
    "click": "Abre los pasos y síguelos en orden, de arriba abajo. Solo tienes que hacerlo una vez.",
    "care": "Necesitas una cuenta de Google. Si algo sale mal, puedes repetir los pasos sin dañar tu sitio.",
    "like": "Es como firmar el libro de visitas de la oficina de mapas para que revisen tu tienda más a menudo."
  },
  "help.site.gsc_open": {
    "t": "Abrir Google Search Console",
    "what": "Abre la página oficial de Google en una pestaña nueva.",
    "when": "Púlsalo en el primer paso.",
    "click": "Inicia sesión allí con tu cuenta de Google y luego vuelve a esta pestaña para continuar.",
    "care": "Es una página de Google, no forma parte de tu sitio."
  },
  "help.site.gsc_copy": {
    "t": "Copiar",
    "what": "Copia la dirección que aparece al lado.",
    "when": "Púlsalo cuando un paso te pida pegar la dirección de tu sitio o la del mapa del sitio.",
    "click": "Después pega la dirección en el campo de la página de Search Console.",
    "care": "Si no funciona la copia en tu dispositivo, aparecerá una ventana pequeña con la dirección para que puedas copiarla."
  },
  "help.site.gsc_input": {
    "t": "Etiqueta de verificación de Google",
    "what": "Es el campo donde pegas el texto que Google te da para demostrar que el sitio es tuyo.",
    "when": "Pega aquí lo que has copiado de [[HTML tag]] en Search Console.",
    "click": "Puedes pegar el texto completo tal cual. Tu sitio guarda solo la parte necesaria.",
    "care": "Vacía el campo y pulsa Guardar para eliminarlo.",
    "like": "Es como una etiqueta con tu nombre que le indica a Google que la tienda es tuya."
  },
  "help.site.gsc_save": {
    "t": "Guardar",
    "what": "Guarda el texto de verificación y lo coloca en tu página de inicio.",
    "when": "Púlsalo después de pegar el texto, antes de pulsar [[Verify]] en Search Console.",
    "click": "En unos instantes aparece una marca de verificación. Después, vuelve a Search Console y pulsa [[Verify]].",
    "care": "Si ves un mensaje rojo, vuelve a copiar todo el texto de [[HTML tag]] y pégalo aquí."
  }
});
