/* ============================================================
   EM course training · 3D Modeling (Modelado 3D) [2137 · Brazil: 2203] · SPANISH (base version)
   For the Brazilian Portuguese version: copy this file as content-pt.js, change lang to 'pt' and the Backoffice link to 2203.
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'es' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formación de curso EM',
  footer: 'kodland · Nuevo Modelo Educativo · Formación de curso',
  devLink: '🛠 Developer',
  logoSub: 'Nuevo Modelo Educativo',
  navHome: '← Inicio',
  navBackModule: '← Volver al módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Empezar →',
  badgeLocked: '🔒 Completa el Módulo {n}',
  badgeDone: '✓ Completado · {score}%',
  progLabel: 'módulos completados',
  progAllDone: 'Módulos completados 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificación del módulo',
  ctaText: '{n} preguntas cortas. Necesitas 70% o más para aprobar.',
  lockSim: '🔒 Completa la simulación de arriba para desbloquear la verificación.',
  startCheck: 'Empezar la verificación →',
  retake: '🔁 Repetir la verificación',
  qmeta: '{e} Verificación del Módulo {n} · Pregunta {i} de {total}',
  fbRight: '✅ <b>¡Correcto!</b> ',
  fbWrong: '❌ <b>No exactamente.</b> ',
  nextQuestion: 'Siguiente pregunta →',
  seeResult: 'Ver mi resultado →',
  passedTitle: '¡Aprobaste!',
  failTitle: 'Casi lo logras',
  scoreLine: 'Respondiste bien <b>{score} de {n}</b>.',
  failText: 'Necesitas 70% o más. Repasa el módulo y vuelve a intentarlo: puedes repetirlo las veces que necesites.',
  nextUnlocked: 'Se desbloqueó el <b>Módulo {n} · {title}</b>.',
  goModule: 'Ir al Módulo {n} →',
  allDoneText: 'Completaste los dos módulos de esta formación.',
  seeNext: 'Ver el siguiente paso →',
  reviewModule: '📖 Repasar el módulo',
  homeDoneTitle: '¡Módulos completados!',
  homeDoneText: 'Falta un último paso: el test DST en la página de la formación en el LMS.',
  homeDoneBtn: 'Ver qué hacer ahora →',
  doneBadge: '✓ Completado',
  doneBack: 'Volver a los módulos',
  lockedTitle: 'Todavía bloqueado',
  lockedModule: 'Primero completa el Módulo {n}.',
  lockedStep: 'Completa el paso anterior para desbloquear este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir ↗',
  simOpen: '▶ Abrir la simulación aquí',
  simClose: '✕ Cerrar la simulación',
  simNewTab: 'Abrir en otra pestaña ↗',
  simDone: '✅ Simulación completada',
  simTodo: '○ Simulación pendiente',
  checkTag: 'Márcalos',
  mythTag: 'Mito',
  mythTap: 'Toca para ver la realidad →',
  mythReality: 'Realidad ✓',
  sortWrong: '✗ No exactamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'm3d';
COURSE.code = '2137';                     // Backoffice course id (LatAm). Brazilian Portuguese version: 2203
COURSE.title = 'Modelado 3D';
COURSE.color = '#14B8A6';

COURSE.home = {
  kicker: '🎓 Formación de curso · Modelado 3D',
  title: 'Modelado <span class="hl">3D</span>',
  lead: 'El estudio 3D, para estudiantes de 13–17 años: en Blender pasan de esculpir su primera criatura a modelar, texturizar y renderizar su propio robot. Dos módulos: el contenido del curso y la parte técnica de las lecciones.',
  facts: [
    ['🧑‍💻', '<b>A tu ritmo.</b> Tu progreso se guarda en este navegador. Cada módulo termina con una verificación corta.'],
    ['⚡', '<b>Práctica incluida.</b> Una simulación de Kodland Sparks para practicar cómo se publica un proyecto y los problemas más comunes.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de empezar:</b> haz primero la <b>formación principal del Nuevo Modelo Educativo (EM)</b>. Esta formación del curso va después y parte de lo que ya viste allí: el Backoffice y las Teacher Notes, el Classroom con el Follow Mode, el recorrido por Kodland Sparks y la calidad de la lección.' },
  { kind:'warn', e:'🔄', html:'<b>El contenido de las lecciones en el Backoffice se irá actualizando.</b> Con el feedback de estudiantes y tutores, las lecciones se mejoran constantemente. No te preocupes: cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🧊', color:'#14B8A6', title:'El contenido del curso',
    desc:'Cómo se enseña Modelado 3D en el nuevo modelo, las 4 primeras lecciones y las herramientas clave de Blender.',
    obj:'Prepárate para dar las primeras lecciones de Modelado 3D, donde estudiantes de 13–17 años crean en Blender sus primeros modelos: una criatura esculpida, una composición, una casa y su propio robot.',
    offer:[['🎨','Conocer el curso y su forma de trabajo.'],['📖','Saber qué pasa en cada una de las 4 primeras lecciones.'],['⌨️','Repasar las herramientas y los atajos clave de Blender.'],['📘','Revisar las lecciones y las Teacher Notes en el Backoffice.']],
    sections:[
      { id:'ov', e:'🎨', title:'El curso', blocks:[
        { t:'meta', items:[['🧑','Edad','13–17 años'],['⏱️','Lección','90 min'],['📚','Programa','40 lecciones'],['🧊','Herramienta','Blender']] },
        { t:'p', html:'En cada clase el estudiante asume el papel de <b>artista 3D</b> y recibe una misión: transformar una forma simple en su propio personaje, convertir figuras geométricas en una escena, hacer de un cubo una casa. El primer módulo termina con su <b>primer proyecto 3D original</b>: un robot modelado, con varios materiales y un render final.' },
        { t:'p', html:'El curso recorre un camino claro: desde los primeros proyectos sencillos hasta un <b>proyecto personal e independiente</b> en el último módulo. En el camino conocen distintas áreas profesionales del 3D y el papel de la IA en el trabajo actual de un artista 3D.' },
        { t:'trio', items:[
          ['🎬','Primero el resultado','La lección empieza mostrando el resultado final y los criterios de éxito; después vienen demostraciones breves.'],
          ['🖱️','Acción antes que teoría','Muestras una acción, el estudiante la repite en su pantalla y te muestra el resultado, no solo lo que entendió.'],
          ['🧩','El error es parte del proceso','Primero una pregunta de diagnóstico, después una pista breve. Nunca corriges el modelo por el estudiante.']
        ]},
        { t:'callout', kind:'good', e:'🤖', html:'En la L4, <b>Sparks AI</b> da una primera retroalimentación al robot, como un usuario de prueba. <b>No crea el proyecto ni lo evalúa:</b> el estudiante decide si acepta, modifica o rechaza la sugerencia, y lo argumenta. La IA propone, el autor decide.' }
      ]},
      { id:'les', e:'📖', title:'Las 4 primeras lecciones', blocks:[
        { t:'p', html:'El primer módulo construye las bases de Blender, una por clase, hasta el robot final. Abre cada lección:' },
        { t:'lessons', key:'m1', items:[
          { tab:'L1', e:'🐲', h:'Lección 1 — Escultura digital: introducción al modelado 3D', p:'Primera clase del programa. Los estudiantes conocen el entorno de estudio (Classroom y la plataforma Kodland), instalan Blender, aprenden lo básico de Sculpt Mode y crean su primer modelo: una criatura fantástica o una cabeza estilizada.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Navegación básica en Blender, con mouse y con panel táctil.</li><li>Pinceles de escultura: <b>Clay</b> agrega volumen; <b>Grab</b> y <b>Elastic Grab</b> estiran la forma. <b>Strength</b> y <b>Radius</b>; <b>Ctrl</b> o el modo «−» invierte el pincel.</li><li>El modo <b>Paint</b> para colorear el modelo.</li><li><a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a>, el programa alternativo que se usa en el navegador si Blender no funciona.</li></ul>'],
                 ['⏱️','Tiempos (90 min)','<ul><li><b>Introducción (20 min):</b> conexión, presentaciones, bienvenida al curso, acuerdos del estudio 3D.</li><li><b>Parte principal (60 min):</b> plataforma Kodland e instalación de Blender (13), navegación y pinceles (10), crear la criatura (17), color (10), resultado final (10).</li><li><b>Cierre (10 min):</b> repaso, reflexión, misión para casa, anticipo.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Se orienta en Classroom y en la plataforma Kodland, inicia sesión y entrega una actividad.</li><li>Conoce el principio básico de Sculpt Mode.</li><li>Tuvo su primera experiencia creando un modelo 3D de forma independiente.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Ayuda a que obtengan un <b>primer resultado rápido</b>: no sobrecargues la clase con teoría. Primero muestras, después el estudiante repite.</li><li>Ayuda a elegir una estrategia inicial, pero <b>no impongas un diseño</b> para la criatura.</li><li>Termina ayudando a cada estudiante a reconocer un logro concreto.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Un día antes, recuerda a los estudiantes instalar Blender y envíales el <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de descarga de Blender 4.5</a>.</li><li>Conéctate 15 minutos antes y confirma quién tiene Blender instalado.</li><li>Deja la interfaz de Blender en <b>English</b>: las instrucciones del curso están en inglés.</li><li>Cuidado con <b>Subdivision Surface</b> y <b>Remesh</b>: demasiado detalle hace lento a Blender.</li><li>Confirma que todos hicieron clic en <b>«Enviar»</b> en la actividad.</li></ul>']] },
          { tab:'L2', e:'🎨', h:'Lección 2 — Introducción a Object Mode', p:'Los estudiantes trabajan en Object Mode: agregan formas primitivas y las mueven, rotan y escalan con G/R/S y los ejes X/Y/Z. Crean su propia composición con al menos 7 objetos, le ponen materiales de color y hacen su primer render.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Los tres ejes: X, Y y <b>Z (arriba y abajo en Blender)</b>.</li><li><b>G</b> mueve, <b>R</b> rota, <b>S</b> escala; <b>X/Y/Z</b> limitan la acción a un eje.</li><li>Materiales simples, luz, cámara y color del entorno.</li><li>Qué es un render y cómo hacerlo.</li></ul>'],
                 ['⏱️','Tiempos (90 min)','<ul><li><b>Introducción (10 min).</b></li><li><b>Parte principal:</b> qué es el 3D y G/R/S (7), práctica de Object Mode (27: 10 de demostración y 17 de trabajo independiente), pausa activa (5), materiales, luz y render (25), mostrar y entregar el render y comunidad Kodland (6).</li><li><b>Cierre (10 min).</b></li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Una composición con al menos 7 objetos, transformados con G/R/S y X/Y/Z.</li><li>Materiales de color, cámara, luz y color del entorno configurados.</li><li>Archivo <b>.blend</b> y primer render guardados, y el resultado subido a la plataforma.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Primero un experimento breve con G/R/S; después, la composición propia.</li><li>Que <b>no sea una copia del ejemplo</b>: el tema, las formas y la paleta los elige el estudiante.</li><li>Supervisa los momentos clave: después de G/R/S, al terminar la composición, tras los materiales, antes del render y al subirlo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Motiva a usar los <b>atajos de teclado</b> desde el principio, no las herramientas del panel T.</li><li>Todavía se trabaja en Object Mode: nada de editar vértices, aristas ni caras.</li><li>Antes del render revisa cámara, encuadre, luz, materiales y que el objeto principal se vea.</li><li>Si mencionan el bloqueo de Discord en LatAm, responde solo según las normas aprobadas; <b>nunca sugieras una VPN</b>.</li></ul>']] },
          { tab:'L3', e:'🏠', h:'Lección 3 — Modelado con Edit Mode', p:'Los estudiantes pasan de trabajar con objetos a editar su forma: entienden de qué está hecha una malla, trabajan con vértices, aristas y caras, dominan Extrude, Inset y Loop Cut y convierten un cubo en su propia casa.',
            acc:[['📚','Lo que necesitas saber','<ul><li>La malla: vértices, aristas y caras (un cubo tiene 8 vértices, 12 aristas y 6 caras).</li><li>Atajos: <b>Tab</b> (cambiar de modo), <b>1/2/3</b> (vértice, arista, cara), <b>G/R/S</b>, <b>E</b> (Extrude), <b>I</b> (Inset), <b>Ctrl + R</b> (Loop Cut).</li><li>En los vértices solo se puede mover; en aristas y caras también rotar y escalar.</li></ul>'],
                 ['⏱️','Tiempos (90 min)','<ul><li><b>Introducción (11 min).</b></li><li><b>Parte principal:</b> malla y Edit Mode (5), práctica en Edit Mode (10), herramientas y la mesa (20), pausa activa (5), la casa, autoevaluación y entrega (27).</li><li><b>Cierre (12 min):</b> presentación de las casas, resumen, reto de Sparks para casa, anticipo.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Distingue vértices, aristas y caras.</li><li>Usa Edit Mode, Extrude, Inset, Loop Cut y los atajos para modelar una casa a partir de un cubo.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Construye primero la comprensión de la malla; no pases a modelar sin ella.</li><li>En la mesa, los estudiantes siguen tus pasos uno a uno: haz una pausa después de cada paso.</li><li>Da feedback con la fórmula <b>hecho → criterio → siguiente paso</b>, sin comparar modelos.</li><li>Si el grupo va lento, simplifica la casa (sin suelo, una ventana más sencilla).</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Verifica que no confundan Object Mode y Edit Mode, y que modifiquen <b>una sola malla</b>, sin cubos sueltos.</li><li><b>Vértices duplicados</b> (Extrude cancelado con clic derecho): seleccionar todo en Edit Mode y <b>M → by Distance</b>.</li><li>Recuerda guardar antes de cambios grandes y usar <b>Ctrl + Z</b>.</li><li>Presenta el <b>reto de Sparks</b> para casa (un OVNI a partir de un cilindro) y el botón «Revisar», sin hacerlo en clase.</li></ul>']] },
          { tab:'L4', e:'🤖', h:'Lección 4 — Crea un robot', p:'Cierre del módulo. Los estudiantes repasan Object Mode y Edit Mode, crean un robot original, asignan varios materiales a un mismo objeto, reciben feedback de Sparks AI y preparan el render final en Eevee, con dos versiones: Robot_before y Robot_after.',
            acc:[['📚','Lo que necesitas saber','<ul><li>Cada parte del robot es un objeto y se edita por separado: Object Mode → seleccionar → <b>Tab</b>.</li><li>Herramientas útiles: separar objetos, seleccionar caras (Shift, Alt, Ctrl + I), <b>Subdivide</b>, <b>Bevel (Ctrl + B)</b>, reflejar y simetría.</li><li><b>Assign</b> para dar varios materiales a un mismo objeto; materiales de la biblioteca y luminosos.</li><li>Cómo usar Sparks AI y guardar versiones con <b>File → Save As</b>.</li></ul>'],
                 ['⏱️','Tiempos (90 min)','<ul><li><b>Introducción (14 min):</b> incluye la carrera profesional en 3D.</li><li><b>Parte principal:</b> planificar y modelar (15), herramientas útiles (20), varios materiales (12), Sparks AI y render final (18).</li><li><b>Cierre (11 min):</b> antes y después, repaso, actividad para casa y próximo módulo.</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>El robot tiene una silueta clara y al menos tres objetos.</li><li>Usa a propósito al menos dos técnicas de edición aprendidas.</li><li>Al menos un objeto tiene dos materiales distintos.</li><li>Se guardan el .blend y el render en Eevee (o, si de verdad no hay tiempo, una captura de Material Preview).</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>El estudiante planifica y trabaja solo; intervienes cuando te lo piden o después de que lo intentó.</li><li>Ayuda con preguntas: <i>«¿Cuál es el siguiente paso de tu plan?»</i>, <i>«¿Qué herramienta te ayudaría aquí?»</i>.</li><li>Feedback: <b>fortaleza → un criterio para mejorar → una acción concreta</b>.</li><li>Cierra mostrando lo logrado en el módulo y genera interés por el siguiente (los modificadores).</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Antes de la clase, verifica que puedes entrar a tu cuenta de Sparks.</li><li>No exijas todas las herramientas mostradas: lo esencial es Extrude, Inset y Loop Cut.</li><li>Verifica que haya dos archivos: <b>Robot_before.blend</b> y <b>Robot_after.blend</b>.</li><li>Reserva tiempo al final para <b>publicar en Sparks la imagen del render</b> (PNG o JPG). El archivo .blend queda guardado en la computadora del estudiante.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de cada lección tiene el plan completo: misión, objetivo, resultado clave, tiempos de cada tarjeta y en qué fijarse. <b>Lee todas las Teacher Notes antes de la clase.</b> Los recursos se crearon con Blender 4.5.3; si notas una diferencia importante con la versión actual, avísale al equipo.' }
      ]},
      { id:'tools', e:'⌨️', title:'Herramientas y atajos clave de Blender', blocks:[
        { t:'p', html:'Estas son las herramientas que aparecen en las cuatro primeras lecciones. Tenlas a mano durante tus primeras clases:' },
        { t:'cards', cols:2, items:[
          ['🖌️','Sculpt Mode · L1','<b>Clay</b> agrega volumen, <b>Grab</b> y <b>Elastic Grab</b> estiran. <b>Strength</b> y <b>Radius</b> controlan la fuerza y el tamaño; <b>Ctrl</b> invierte el pincel.'],
          ['📦','Object Mode · L2','<b>G</b> mover, <b>R</b> rotar, <b>S</b> escalar. Después de la tecla, <b>X/Y/Z</b> limita la acción a un eje.'],
          ['🧩','Edit Mode · L3','<b>Tab</b> cambia de modo; <b>1/2/3</b> elige vértice, arista o cara; <b>E</b> Extrude, <b>I</b> Inset, <b>Ctrl + R</b> Loop Cut.'],
          ['🛠️','Más herramientas · L4','<b>Ctrl + B</b> Bevel, <b>Subdivide</b>, simetría, <b>Assign</b> para materiales por partes y <b>File → Save As</b> para guardar versiones.'],
          ['🧹','Arreglar la malla','Vértices duplicados: seleccionar todo en Edit Mode y <b>M → by Distance</b>.'],
          ['↩️','Deshacer','<b>Ctrl + Z</b> (Mac: <b>Cmd + Z</b>). Los errores son parte del aprendizaje.']
        ]},
        { t:'callout', kind:'tip', e:'📺', html:'Si es tu primera clase de Modelado 3D, instala <b>Screencast Keys</b>: muestra en pantalla las teclas que presionas, y así los estudiantes ven cada atajo mientras demuestras. En el Módulo 2 tienes la guía paso a paso.' }
      ]},
      { id:'proj', e:'🐲', title:'Ejemplos de proyectos', blocks:[
        { t:'p', html:'En la primera misión, cada estudiante transforma una forma simple en <b>su propia criatura</b>. Estas criaturas sirven de inspiración: muestran cómo una silueta clara, unos pocos detalles y el color le dan personalidad a un modelo.' },
        { t:'figure', src:'Image/1.jpg', caption:'Ejemplos de criaturas 3D para inspirar la primera misión (L1). Lo importante no es copiar el estilo, sino que la forma principal se distinga y que la criatura tenga su propio carácter.' },
        { t:'callout', kind:'tip', e:'🎯', html:'Usa ejemplos así al inicio de la L1 para mostrar el resultado antes de explicar. Pide a los estudiantes que digan qué hace que cada criatura sea reconocible: la silueta, un detalle o el color.' }
      ]},
      { id:'bo', e:'📘', title:'Repasa las lecciones en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y lee las cuatro lecciones a tu ritmo: las tarjetas de actividad y las Teacher Notes están todas allí. No hay tiempo límite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2137', e:'📘', title:'Abrir el curso en el Backoffice', small:'Modelado 3D — las lecciones y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se irá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'La parte técnica de las lecciones',
    desc:'La instalación de la L1, las entregas sin excepciones, publicar en Sparks y los problemas técnicos más comunes.',
    obj:'Conoce lo que hace que las lecciones de Modelado 3D funcionen técnicamente: una instalación guiada en la L1, entregas de todos los estudiantes —nunca por el chat—, la publicación en Kodland Sparks y las soluciones a los problemas más comunes de Blender.',
    needs:['sparksPublish'],
    offer:[['📥','Guiar la instalación de la L1 sin frenar al grupo.'],['📤','Lograr que todos entreguen su trabajo, siempre en la plataforma.'],['⚡','Publicar en Kodland Sparks al final de la L4.'],['🛠️','Resolver los problemas técnicos más comunes de Blender.']],
    sections:[
      { id:'focus', e:'🎯', title:'Los 5 puntos que garantizan el éxito', blocks:[
        { t:'p', html:'Estos son los puntos de foco definidos por el equipo de producto para Modelado 3D. Abre cada uno:' },
        { t:'acc', items:[
          ['📥','L1: la instalación, con los escenarios de la tarjeta','<p>Guía la instalación siguiendo <b>los escenarios de la tarjeta</b>: Windows, Mac o computadora con pocos recursos.</p><ul><li>Los estudiantes que ya están listos <b>pueden empezar a trabajar sin esperar</b> al grupo.</li><li>No retrases al grupo por un problema individual: si Blender se está descargando, el estudiante sigue con el grupo y termina la instalación después.</li><li>Para instalar, el estudiante usa el <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de descarga de Blender 4.5</a>.</li><li>Si no funciona, usa <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a> (ver la guía abajo) y, si hace falta, pasa la instalación al soporte técnico en una sala aparte.</li></ul>'],
          ['🖼️','Todos terminan y entregan el trabajo de la L1','<p>Asegúrate de que <b>cada estudiante termine su primer trabajo y entregue la imagen mientras el programa sigue abierto</b>.</p><ul><li>Confirma que hicieron clic en <b>«Enviar»</b> en la actividad.</li><li>Si el programa se cierra antes de guardar o exportar, el trabajo se pierde: revisa con ellos cómo recuperar un proyecto si Blender se cierra inesperadamente.</li></ul>'],
          ['🖱️','Primero los botones, después los atajos','<p>Señala primero los <b>botones en pantalla</b> y después los <b>atajos de teclado</b>.</p><ul><li>Así nadie se pierde al principio, y los atajos aceleran el trabajo después.</li><li>Las Teacher Notes de la L2 y la L3 piden motivar los atajos: preséntalos sobre el botón que el estudiante ya ubicó.</li></ul>'],
          ['🚫','Sin excepciones en las entregas, nunca por el chat','<p><b>No exoneres el proyecto ni aceptes imágenes por el chat.</b> La entrega se hace en la tarjeta de la actividad, con «Enviar», y el proyecto final se publica en Kodland Sparks.</p><ul><li>Si no alcanzó a renderizar en la L4, como excepción puede subir una captura de <b>Material Preview</b> — pero en la plataforma, no en el chat.</li></ul>'],
          ['🔁','Mostrar los trabajos y publicar en Sparks','<p>Muestra brevemente los trabajos de la clase anterior <b>al inicio de la siguiente</b>, si sus autores están de acuerdo.</p><ul><li>Reserva tiempo <b>al final de la L4 para publicar en Sparks</b>: el robot es el primer proyecto original del portafolio.</li></ul>']
        ]}
      ]},
      { id:'prep', e:'☑️', title:'Antes de cada clase', blocks:[
        { t:'steps', items:[
          ['Un día antes de la L1','Recuerda a los estudiantes instalar Blender y envíales el <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de descarga de Blender 4.5</a>.'],
          ['Tu equipo, listo','Si es tu primera clase, instala <b>Screencast Keys</b>, conoce <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a> y revisa cómo recuperar un proyecto si Blender se cierra (tienes las guías más abajo). En la L4, verifica que puedes entrar a tu cuenta de Sparks.'],
          ['15 minutos antes','Conéctate antes, conversa con los estudiantes que llegan y confirma quién tiene Blender instalado.'],
          ['Comparte pantalla cuando haga falta','Empieza la llamada con la cámara encendida y sin compartir pantalla para conectar primero con el grupo. Verifica que puedes compartir pantalla y que Blender está listo.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Entregar y publicar en Kodland Sparks', blocks:[
        { t:'p', html:'Blender guarda el proyecto como archivo <b>.blend</b>, pero lo que se entrega y se publica es una <b>imagen</b>: el render en formato <b>PNG o JPG</b>. Estos son los pasos de cada entrega:' },
        { t:'steps', items:[
          ['Guardar el archivo .blend','<b>File → Save</b> antes de cambios grandes y al final. En la L4, dos versiones con <b>File → Save As</b>: <b>Robot_before</b> y <b>Robot_after</b>. El .blend queda guardado en la computadora del estudiante: es su proyecto para seguir trabajando.'],
          ['Hacer el render','<b>Render → Render Image</b> (o <kbd>F12</kbd>). Revisa que el objeto principal se vea, que el encuadre no recorte nada importante y que las formas se distingan.'],
          ['Guardar el render como imagen','En la ventana del render: <b>Image → Save As</b>, en formato <b>PNG o JPG</b>, con un nombre claro (por ejemplo, <b>Robot_after</b>). Esa imagen es la que se sube.'],
          ['Subir la imagen y hacer clic en «Enviar»','En la tarjeta de la actividad de la plataforma Kodland. Sin «Enviar», el trabajo no queda registrado.'],
          ['En Kodland Sparks: siempre una imagen','En el reto de la L3 y con Sparks AI en la L4, el estudiante adjunta la <b>imagen PNG o JPG</b>, no el .blend. Al publicar el proyecto final, elige <b>Public</b>, activa <b>Request feedback</b> y envía el link en la tarjeta de la clase.']
        ]},
        { t:'callout', kind:'warn', e:'🖼️', html:'<b>Sparks no recibe archivos .blend.</b> Si un estudiante intenta subir el proyecto de Blender, recuérdale: el .blend se queda en su computadora y a Sparks va la imagen del render.' },
        { t:'sim', flag:'sparksPublish', src:'../sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulación', title:'Publicar en Kodland Sparks', text:'Una réplica de Kodland Sparks: publicas un proyecto como una estudiante, conoces las tres opciones de visibilidad y resuelves los dos problemas más comunes. Toma unos 5 minutos. La verificación del módulo se desbloquea al terminar.' }
      ]},
      { id:'guides', e:'🧰', title:'Guías técnicas paso a paso', blocks:[
        { t:'p', html:'Estas son las guías del equipo del curso para los problemas que más se repiten en clase. Ábrelas antes de tu primera lección y tenlas a mano:' },
        { t:'acc', open:false, items:[
          ['💥','Blender se cerró de repente: cómo recuperar el proyecto',
           `<div class="gsteps">
              <div class="gstep"><p>Abre Blender de nuevo y haz clic en <b>File → Recover → Auto Save…</b></p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/09c55ebe-4562-4020-9a2e-48aa303a0250.png" alt=""></div>
              <div class="gstep"><p>Revisa la fecha y la hora del último trabajo en el archivo, elige el que necesitas (normalmente el más reciente) y haz clic en <b>Recover Auto Save</b>.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/a56b01a4-51b6-4657-a841-ea112ee5278e.png" alt=""></div>
              <div class="gstep"><p>El proyecto vuelve a aparecer.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/4e823368-0b07-4a40-a7d4-648d7cb51469.png" alt=""></div>
            </div><p>💡 Para no depender de la recuperación, recuerda a los estudiantes guardar seguido con <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>`],
          ['🖌️','Programa de respaldo: SculptGL (si Blender no se instala en la L1)',
           `<p>Si un estudiante no logra instalar Blender, en la primera clase puede usar <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a>, que funciona en el navegador.</p>
            <div class="gsteps">
              <div class="gstep"><p>Puedes cambiar el idioma arriba (pero <b>no uses la traducción automática</b> del navegador).</p><img class="gimg" loading="lazy" src="backup-sculpting-programme/attachments/be343c76-e4b5-47be-8cba-d2fc7800e6a5.png" alt=""></div>
              <div class="gstep"><p><b>Botón derecho</b> del mouse: girar alrededor del modelo. <b>Botón central</b>: desplazar la vista.</p></div>
              <div class="gstep"><p>Todos los pinceles están a la derecha, en el menú <b>Sculpting &amp; Painting</b>, con los principales de Blender (<b>Brush</b> es el pincel normal). <b>Radius</b> funciona igual que en Blender; <b>Intensity</b> = Strength; <b>Negative</b> = el modo −/+. La <b>simetría</b> se activa debajo de los ajustes del pincel.</p><video class="gimg" controls preload="none" src="backup-sculpting-programme/attachments/45c73c0f-5998-432f-92c9-6df587a82d11.mp4"></video></div>
              <div class="gstep"><p>Para pintar, usa la herramienta <b>Paint</b>. Si alguien quiere pintar justo en blanco: <b>Rendering → Matcap → White</b>.</p><video class="gimg" controls preload="none" src="backup-sculpting-programme/attachments/97728cf6-66a8-4739-acdd-a575a22ca33f.mp4"></video></div>
              <div class="gstep"><p>Para guardar el proyecto: <b>File → Save .sgl</b>.</p><img class="gimg" loading="lazy" src="backup-sculpting-programme/attachments/8aa0f08b-8b76-4a50-ab11-22e28dce16ea.png" alt=""></div>
              <div class="gstep"><p>Para abrir un proyecto descargado: <b>Scene → Clear Scene</b> y después <b>File → Add</b>.</p></div>
            </div>`],
          ['⌨️','Mostrar en pantalla las teclas y el mouse: Screencast Keys',
           `<p>Con este complemento, los estudiantes ven cada tecla y cada clic que haces mientras demuestras.</p>
            <div class="gsteps">
              <div class="gstep"><p>Abre Blender y ve a <b>Edit → Preferences</b>. A la izquierda elige <b>Get Extensions</b> y permite el acceso a la base de complementos en línea: <b>Allow Online Access</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/ef6f7385-e78b-4238-ae2a-ebeb3e9a07f1.jpeg" alt=""></div>
              <div class="gstep"><p>En el buscador, encuentra <b>Screencast Keys</b> y haz clic en <b>Install</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/585c4f47-46e6-47cb-8597-bcc790fb1989.jpeg" alt=""></div>
              <div class="gstep"><p>Abre el menú lateral con la flechita de la derecha o con la tecla <kbd>N</kbd>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/7eec760a-524e-4184-9782-a2e4a57ba1b2.jpeg" alt=""></div>
              <div class="gstep"><p>Elige <b>Screencast Keys</b> a la derecha y marca la primera casilla. Debajo puedes ajustar dónde aparecen el mouse y las teclas.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/730548c9-3a74-4300-8212-01b68bc6c37b.jpeg" alt=""></div>
            </div>`],
          ['🐢','La computadora es lenta: optimizar el render',
           `<p>Si el render en <b>Cycles</b> tarda demasiado en una computadora con pocos recursos:</p>
            <ul><li><b>Output:</b> resolución al <b>50%</b> y <b>RGB</b> en lugar de RGBA.</li>
              <li><b>Render:</b> elige <b>GPU</b> (la tarjeta gráfica suele ser más rápida). Si la tarjeta es muy débil, deja <b>CPU</b>; si no estás seguro, pide al estudiante comparar el tiempo de render con las dos opciones. Baja los <b>Samples</b> a <b>64</b> para Render y activa <b>Denoise</b>.</li>
              <li><b>Light Paths:</b> rebotes totales en <b>6</b> y todos los demás en <b>2</b>. Desactiva las dos opciones de <b>Caustics</b>.</li></ul>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/bfd40269-104f-489f-8733-472276188140.png" alt="">
            <p>La primera vez que eliges GPU puede aparecer inactiva. Ve a <b>Preferences</b> y elige <b>CUDA</b> en lugar de None si la tarjeta es NVIDIA (la mayoría de los casos), o <b>HIP</b> si es AMD. Si la tarjeta no renderiza bien, vuelve a None y usa CPU: el procesador renderiza más lento, pero de forma confiable.</p>
            <video class="gimg" controls preload="none" src="tips-common-mistakes-and-how-to-fix-them/attachments/40b7beb8-f0ee-4cce-8880-c2df6fcbb5ef.mp4"></video>
            <p>Mientras modelan, el exceso de detalle con <b>Subdivision Surface</b> o <b>Remesh</b> también vuelve lento a Blender: pide reducirlo.</p>`],
          ['✂️','Loop Cut no atraviesa un polígono (N-gon)',
           `<p>Pasa sobre todo cuando el estudiante usa la herramienta <b>Knife</b>: cualquier polígono con más de 4 vértices puede dar problemas.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/aa704153-4ce2-40ff-ac3b-c5b4270cbc49.png" alt="">
            <p>Aquí una sola línea quebrada creó tres pentágonos, que hay que volver a convertir en cuadriláteros. Limita el uso de Knife y recuerda a los estudiantes no reemplazar Loop Cut con ella.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/259080b0-4556-4eb1-a072-02795fe31458.png" alt="">
            <p><b>Solución 1:</b> elimina la línea problemática con <kbd>X</kbd> → <b>Dissolve Edges</b> y haz un corte correcto.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/abc9f8d2-e8e1-4260-aa1c-bc58eb8e7fa2.png" alt="">
            <p><b>Solución 2:</b> usa Knife (<kbd>K</kbd>) para arreglar la geometría. Solo funciona si la geometría es simple.</p>`],
          ['👻','Vértices duplicados después de Extrude',
           `<p>Al usar <b>Extrude</b> y cancelarlo con el botón derecho, pueden quedar vértices extra en el mismo lugar que los visibles, por eso no se notan. Molestan al modelar, y modificadores como <b>Subdivision Surface</b> y <b>Bevel</b> pueden no funcionar bien.</p>
            <p>Solución: selecciona todo en Edit Mode y usa <kbd>M</kbd> → <b>by Distance</b>. Une los vértices cercanos y elimina los duplicados.</p>`],
          ['🌎','Tooltips en el idioma del estudiante',
           `<p>La interfaz se queda en inglés (las instrucciones del curso están en inglés), pero los <b>tooltips</b> pueden aparecer en el idioma del estudiante para aprender más fácil:</p>
            <p><b>Edit → Preferences → Interface → Language</b>: elige el idioma, activa <b>Translate</b> y marca <b>solo Tooltips</b>. Al pasar el mouse sobre una herramienta, la ayuda aparece traducida.</p>`],
          ['🔭','Más adelante en el curso: Array, Simple Deform y simulaciones',
           `<p><b>Simple Deform + Array:</b> la combinación funciona bien solo si las copias están sobre el eje <b>X</b>. Si el estudiante ya las puso sobre <b>Y</b>: pasa el valor de Factor Y a Factor X y rota el objeto 90° en Z en Edit Mode, o rótalo 90° en Object Mode (vista superior) y aplica la rotación con <kbd>Ctrl</kbd> + <kbd>A</kbd> → Rotation.</p>
            <p><b>La simulación se detiene en el cuadro 250:</b> las simulaciones de física tienen una caché de 250 cuadros por defecto. Para animaciones más largas, aumenta los cuadros de la caché: en Cloth y Soft Body, en los ajustes de física; en Rigid Body, en <b>World Settings → Rigid Body World</b>; en fluidos y humo, en los ajustes del objeto <b>Domain</b>.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/bfa0ab9e-ac4a-4ecd-bf50-61990b2743a9.png" alt="">
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/2e91cd23-f535-4101-8de0-48d9a2cf2be0.png" alt="">
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/7cfb9781-4b60-4f91-9e62-3c55a6bfc1cd.png" alt="">`]
        ]}
      ]},
      { id:'trouble', e:'🛠️', title:'Otros casos frecuentes', blocks:[
        { t:'acc', open:false, items:[
          ['💻','Blender no se instala o no corre','Sigue el escenario de la tarjeta (Windows, Mac o computadora con pocos recursos) con el <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de descarga de Blender 4.5</a>. Si no funciona, usa <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a> (guía arriba) y pide ayuda al soporte técnico en una sala aparte, sin frenar al grupo.'],
          ['🧲','Un objeto nuevo quedó dentro de otro','Se agregó estando en Edit Mode y pasó a formar parte de la otra malla. Sepáralo, y antes de agregar objetos vuelve a Object Mode.'],
          ['🔑','Un estudiante no puede iniciar sesión en la plataforma','Envíale su usuario y contraseña desde su tarjeta de estudiante en el Backoffice, por chat privado.'],
          ['📁','Quiere subir el .blend a Sparks','Sparks recibe imágenes: el estudiante guarda el render como <b>PNG o JPG</b> (Image → Save As) y sube esa imagen. El .blend se queda en su computadora.'],
          ['🔒','El link de Sparks no abre','Seguramente guardó el proyecto como <b>Only me</b>: <b>My projects → abrir el proyecto → Edit → Public → Publish</b>.'],
          ['⏳','No alcanzó a hacer el render en la L4','Como excepción, guarda el .blend y sube una captura de pantalla de <b>Material Preview</b> en la plataforma.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada clase', blocks:[
        { t:'check', title:'✅ Mi checklist técnico', groups:[
          { h:'☑️ Antes de la clase', items:['Leí todas las Teacher Notes de la lección.','Tengo Blender listo, Screencast Keys y SculptGL como alternativa.','En la L1, recordé a los estudiantes instalar Blender con un día de anticipación.'] },
          { h:'🎬 Durante la clase', items:['Señalo primero el botón en pantalla y después el atajo.','Después de cada acción importante, pido que me muestren el resultado en pantalla.','No corrijo el modelo: hago una pregunta de diagnóstico y doy una pista.'] },
          { h:'📤 Al final de la clase', items:['Todos guardaron el .blend y subieron su resultado con «Enviar» — nada por el chat.','En la L4, todos publicaron en Sparks la imagen del robot (PNG o JPG) como <b>Public</b> y enviaron el link.','Anoté qué trabajos mostrar al inicio de la próxima clase.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'¿Qué crean los estudiantes en la primera clase?',
      o:['Un robot completo con varios materiales.','Su primer modelo en Sculpt Mode: una criatura fantástica o una cabeza estilizada.','Una casa a partir de un cubo.'],
      a:1, e:'La L1 presenta Sculpt Mode con una criatura propia; la casa es en la L3 y el robot en la L4.' },
    { q:'En Object Mode, ¿qué hacen las teclas G, R y S?',
      o:['G mueve, R rota y S escala; X/Y/Z limitan la acción a un eje.','G guarda, R renderiza y S selecciona.','Cambian entre Object Mode y Edit Mode.'],
      a:0, e:'G (grab) mueve, R rota y S escala. Después de la tecla, X, Y o Z limitan el movimiento a ese eje.' },
    { ctx:'En la L3 un estudiante construye la casa juntando varios cubos sueltos.',
      q:'¿Qué le indicas?',
      o:['Está bien, el resultado se ve igual.','Que modifique una sola malla en Edit Mode con Extrude, Inset y Loop Cut.','Que la termine en Sculpt Mode.'],
      a:1, e:'El objetivo de la L3 es editar una sola malla en Edit Mode, no armar la casa con primitivas separadas.' },
    { q:'En la L4, ¿cuál es el papel de Sparks AI?',
      o:['Crea el robot a partir de la descripción del estudiante.','Da una primera retroalimentación como un usuario de prueba; el estudiante decide si acepta, modifica o rechaza la sugerencia.','Pone la nota final del proyecto.'],
      a:1, e:'Sparks AI propone, pero no crea el proyecto ni lo evalúa. La decisión es del estudiante.' },
    { q:'¿Cómo das feedback sobre la casa o el robot?',
      o:['Comparando los modelos para motivar al grupo.','Con una fórmula concreta, como hecho → criterio → siguiente paso, sin comparar trabajos.','Corrigiendo el modelo en tu pantalla.'],
      a:1, e:'Feedback útil y específico sobre el proceso y las herramientas, sin comparar modelos entre sí.' }
  ],
  m2:[
    { ctx:'En la L1, a un estudiante la instalación de Blender se le está demorando.',
      q:'¿Qué haces?',
      o:['Detienes al grupo hasta que termine.','Lo dejas seguir con el grupo mientras se descarga; si no funciona, SculptGL y soporte técnico en una sala aparte.','Le pides que vuelva la próxima clase.'],
      a:1, e:'Los problemas individuales no frenan al grupo. SculptGL es la alternativa y el soporte técnico ayuda con la instalación.' },
    { ctx:'Al final de la clase, un estudiante te manda la imagen de su render por el chat.',
      q:'¿Qué le respondes?',
      o:['Le agradeces y guardas tú la imagen en tu computadora para revisarla después.','Le agradeces y, con amabilidad, le pides que la suba también en la tarjeta de la actividad y haga clic en «Enviar», para que su trabajo quede registrado.','Le dices que no se preocupe, que en esta clase no hace falta entregar.'],
      a:1, e:'Agradecer el trabajo y guiar con amabilidad: la entrega solo queda registrada en la tarjeta de la actividad, con «Enviar». Por eso no se aceptan imágenes por el chat ni se exonera el proyecto.' },
    { q:'¿Cómo presentas una herramienta nueva de Blender?',
      o:['Primero el atajo de teclado y después, si hace falta, el botón.','Primero el botón en pantalla y después el atajo.','Solo con el atajo, para que aprendan rápido.'],
      a:1, e:'Primero lo que se ve en pantalla; después el atajo, que acelera el trabajo.' },
    { ctx:'Después de usar Extrude y cancelarlo con clic derecho, el modelo de un estudiante se comporta raro.',
      q:'¿Qué le sugieres?',
      o:['Seleccionar todo en Edit Mode y usar M → by Distance para eliminar los vértices duplicados.','Empezar el modelo desde cero.','Pasar a Sculpt Mode.'],
      a:0, e:'Al cancelar un Extrude quedan vértices duplicados invisibles. M → by Distance los une.' },
    { ctx:'Al final de la L4, un estudiante quiere publicar su robot en Kodland Sparks.',
      q:'¿Qué archivo sube?',
      o:['La imagen del render en PNG o JPG; el archivo .blend se queda guardado en su computadora.','El archivo Robot_after.blend.','Una carpeta comprimida con todo el proyecto de Blender.'],
      a:0, e:'Sparks recibe imágenes: el render se guarda con Image → Save As en PNG o JPG. El .blend es el proyecto de trabajo y se guarda en la computadora.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: '¡Módulos completados!',
  html: `<p>¡Ya casi terminas! Vuelve a la página de la formación en el LMS, desde donde accediste a esta formación. El test DST está justo debajo de la formación.</p>
    <p>👉 <b>Debes hacer y aprobar el test DST para que la formación se considere completada.</b> Si no haces el DST, la formación quedará incompleta y puede vencer.</p>
    <p>La nota mínima para aprobar es <b>80%</b>.</p>
    <p>¡Mucha suerte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada clase:</b> lee todas las Teacher Notes y ten SculptGL como alternativa.'],
    ['📥', '<b>L1:</b> instalación con los escenarios de la tarjeta, sin frenar al grupo.'],
    ['📤', '<b>Entregas:</b> siempre en la plataforma con «Enviar», nunca por el chat.'],
    ['⚡', '<b>Final de la L4:</b> publicar en Kodland Sparks la imagen del render del robot (el .blend queda en la computadora).']
  ]
};
