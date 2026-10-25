/* ============================================================
   EM course training · 3D Modeling (Modelado 3D) [2216 · Brazil: 2203] · SPANISH (base version)
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
COURSE.code = '2216';                     // Backoffice course id (LatAm). Brazilian Portuguese version: 2203
COURSE.title = 'Modelado 3D';
COURSE.color = '#14B8A6';

COURSE.home = {
  kicker: '🎓 Formación de curso · Modelado 3D',
  title: 'Modelado <span class="hl">3D</span>',
  lead: 'Un viaje por el Océano 3D, para estudiantes de 13–17 años: en Blender aprenden a convertir sus ideas en modelos y animaciones 3D, desde su primera composición geométrica hasta su propio proyecto. Dos módulos: el contenido del curso y la parte técnica de las lecciones.',
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
    desc:'Cómo se enseña Modelado 3D en el nuevo modelo, la primera lección y las herramientas de Blender que se usan en ella.',
    obj:'Prepárate para dar la primera lección de Modelado 3D, donde estudiantes de 13–17 años instalan Blender, aprenden a mover, rotar y escalar objetos y crean su primera composición geométrica con materiales de colores.',
    offer:[['🎨','Conocer el curso y su forma de trabajo.'],['📖','Saber qué pasa en cada tarjeta de la primera lección.'],['⌨️','Repasar las herramientas de Blender que se usan en la primera lección.'],['📘','Revisar la lección y sus Teacher Notes en el Backoffice.']],
    sections:[
      { id:'ov', e:'🎨', title:'El curso', blocks:[
        { t:'meta', items:[['🧑','Edad','13–17 años'],['⏱️','Lección','90 min'],['📚','Programa','40 lecciones · 10 módulos'],['🧊','Herramienta','Blender']] },
        { t:'trio', items:[
          ['🎬','Primero el resultado','La lección empieza mostrando el resultado final y conversando sobre las partes que lo forman; después vienen demostraciones breves.'],
          ['🖱️','Acción antes que teoría','Muestras una acción, el estudiante la repite en su pantalla y te muestra el resultado, no solo lo que entendió.'],
          ['🧩','El error es parte del proceso','Primero una pregunta de diagnóstico, después una pista que pueda seguir. Nunca corriges el trabajo por el estudiante.']
        ]},
        { t:'callout', kind:'good', e:'🤖', html:'Además de las actividades prácticas y las pruebas, los estudiantes encontrarán <b>desafíos de Sparks</b> para realizar en casa. Se trata de actividades especiales que revisa el tutor de IA y que ofrecen una recompensa adicional 💎 y un certificado.' }
      ]},
      { id:'goals', e:'🎓', title:'Qué logra el estudiante', blocks:[
        { t:'p', html:'Al terminar el curso, el estudiante tiene estos logros:' },
        { t:'cards', cols:2, items:[
          ['🧱','Crea','Nueve miniproyectos y un proyecto final: una casita y un robot, un escenario para un juego de plataformas, el interior de una habitación, un Marble Run, un modelo humano, la caminata de un personaje, videos de simulaciones, y un escenario y un personaje con IA.'],
          ['🤖','Usa la IA como herramienta','El estudiante recibe una tarea y desarrolla una idea, un concepto, un boceto, un modelo o una textura, para después perfeccionar el resultado en Blender. <b>Decide por su cuenta qué servicios utilizar</b>, ya que el curso enseña un enfoque de trabajo y no se limita a una herramienta concreta.'],
          ['🎬','Hace renders y videos animados','Primer render de la casita y el robot; después el render de un interior, videos con animación por fotogramas clave, un Marble Run, una caminata y videos de simulaciones y partículas.'],
          ['🛠️','Habilidades prácticas','Trabaja en Object Mode, Sculpt Mode y Edit Mode, usa los principales modificadores, configura materiales, texturas e iluminación, y anima objetos y personajes (huesos y simulaciones físicas).'],
          ['🌟','Publica su portafolio en Kodland Sparks','Los trabajos terminados se publican en Sparks. Por ejemplo, el Marble Run se comparte después del módulo de animación, mientras que, al finalizar el curso, los estudiantes presentan su portafolio y su proyecto final reunidos.'],
          ['💬','Habilidades para la vida','Se desarrollan habilidades de comunicación, como presentar su trabajo y dar y recibir retroalimentación, así como la colaboración, el pensamiento crítico y la gestión del tiempo y de proyectos, que implica dividir las tareas en partes y planificar cómo realizarlas.']
        ]}
      ]},
      { id:'les', e:'📖', title:'La primera lección', blocks:[
        { t:'p', html:'Por ahora está disponible la primera lección del curso. Ábrela y revisa cada parte:' },
        { t:'lessons', key:'m1', items:[
          { tab:'L1', e:'🎨', h:'Lección 1 — Conociendo los objetos 3D', p:'Primera clase del programa. Los estudiantes conocen el entorno educativo (Classroom y la plataforma Kodland), instalan Blender y aprenden lo básico de <b>Object Mode</b>. Su primera misión como artistas 3D: crear su propia composición con figuras geométricas y darle materiales de colores.',
            acc:[['📚','Lo que necesitas saber','<ul><li><b>Navegación:</b> la rueda del mouse acerca y aleja; el botón central gira alrededor del modelo; <b>Shift</b> + botón central desplaza la vista. En touchpad: juntar y separar dos dedos, deslizar dos dedos, y <b>Shift</b> + deslizar dos dedos.</li><li><b>G</b> mueve, <b>R</b> rota, <b>S</b> escala. Después de la tecla, <b>X</b> (rojo), <b>Y</b> (verde) o <b>Z</b> (azul) limitan la acción a un eje. En Blender, arriba y abajo es el eje <b>Z</b>.</li><li><b>Shift + A → Mesh</b> agrega una figura (aparece donde está el 3D Cursor); <b>X</b> o <b>Del</b> la elimina; clic derecho → <b>Shade Smooth</b> la suaviza.</li><li><b>Materiales:</b> Material Preview → Material → <b>New</b> → <b>Base Color</b>. Opcional: luz (Sun: Color y Power) y color del entorno en modo Rendered.</li><li><b>Captura del resultado:</b> desactivar <b>Overlays</b> → <b>View → Viewport Render</b> → <b>Image → Save As</b>.</li></ul>'],
                 ['⏱️','Tiempos (90 min)','<ul><li><b>Introducción (15 min):</b> ¡Conozcámonos mejor! (8), Kodland Universe y bienvenida al curso (7).</li><li><b>Parte principal (65 min):</b> instalación de Blender (10), transformaciones de objetos (12), ¡crea tu propia composición! (23), materiales (15), resultado final (5).</li><li><b>Parte final (10 min):</b> resumen, reflexión y chat del grupo (5); misión para casa y lo que viene después (5).</li></ul>'],
                 ['🎯','Resultado clave','<ul><li>Se orienta en el entorno educativo (Classroom y la plataforma Kodland).</li><li>Crea una composición de al menos <b>5 objetos geométricos</b> (se puede reducir a tres si no alcanza a terminar).</li><li>Mueve, rota y escala objetos con G/R/S y los ejes X/Y/Z.</li><li>Asigna materiales de colores a los objetos.</li><li>Guarda el archivo <b>.blend</b> y sube una captura de pantalla del trabajo a la plataforma.</li></ul>'],
                 ['🧑‍🏫','Tu rol','<ul><li>Ayuda a que se familiaricen con la interfaz y obtengan rápido su <b>primer resultado</b>: no sobrecargues la clase con teoría. Primero muestras la acción, después el estudiante la repite.</li><li>Al inicio, conecta con el grupo, ayúdalos a orientarse y detecta a tiempo cualquier problema técnico.</li><li>La práctica <b>no es una copia del ejemplo</b>: el tema, las formas, la distribución y la paleta las elige el estudiante.</li><li>Termina ayudando a cada estudiante a registrar su resultado y a reconocer un logro concreto, sin comparar trabajos.</li></ul>'],
                 ['⚙️','En qué fijarte','<ul><li>Se trabaja en <b>Object Mode</b>: nada de editar vértices, aristas ni caras (eso llega en la próxima clase).</li><li>En la primera clase no es obligatorio usar atajos: pueden usar las herramientas del menú lateral izquierdo.</li><li>Durante la práctica independiente, todos comparten pantalla y tú supervisas y apoyas a tiempo.</li><li>Si un estudiante no logra iniciar Blender, deriva el caso a <b>soporte técnico</b> en una sala aparte.</li><li>Si el tiempo no alcanza, puedes reducir la composición a <b>tres figuras</b> y omitir el color.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🔭', html:'<b>Próxima clase:</b> los estudiantes aprenden a utilizar <b>Edit Mode</b> para modificar vértices, aristas y caras, y modelar una casa a partir de un cubo. Al finalizar la L1, se les anticipa que todavía no han trabajado en la modificación de la forma de los objetos, ya que esta habilidad se abordará más adelante.' },
        { t:'callout', kind:'tip', e:'🗺️', html:'La primera Teacher Note de la lección tiene el plan completo: misión, objetivo, resultado clave, un video, la preparación, los tiempos de cada tarjeta y los puntos a tener en cuenta. <b>Lee todas las Teacher Notes antes de la clase.</b> Los materiales se crearon con Blender 4.5.3; si notas una diferencia importante con la versión actual, avísale al equipo.' }
      ]},
      { id:'tools', e:'⌨️', title:'Herramientas de Blender de la primera lección', blocks:[
        { t:'p', html:'Estas son las herramientas que aparecen en la primera lección. Tenlas a mano durante la clase:' },
        { t:'cards', cols:2, items:[
          ['🧭','Navegación','Rueda: acercar y alejar. Botón central: girar alrededor del modelo. <b>Shift</b> + botón central: desplazarse a los lados.'],
          ['📦','Transformar · Object Mode','<b>G</b> mover, <b>R</b> rotar, <b>S</b> escalar. Después de la tecla, <b>X/Y/Z</b> limita la acción a un eje. También están en la barra lateral izquierda.'],
          ['➕','Agregar y eliminar','<b>Shift + A → Mesh</b> agrega una figura en el 3D Cursor. <b>X</b> o <b>Del</b> elimina el objeto seleccionado (resaltado en naranja).'],
          ['✨','Suavizar','Clic derecho → <b>Shade Smooth</b> o <b>Shade Auto Smooth</b>, para que el objeto no se vea con facetas.'],
          ['🎨','Materiales','<b>Material Preview</b> → ícono del círculo rojo <b>Material</b> → <b>New</b> → <b>Base Color</b>. Un material ya creado se elige desde el círculo.'],
          ['📷','Captura y guardado','Desactivar <b>Overlays</b> → <b>View → Viewport Render</b> → <b>Image → Save As</b>. El proyecto se guarda con <b>File → Save</b>; <b>Ctrl + Z</b> deshace.']
        ]},
        { t:'callout', kind:'tip', e:'📺', html:'Si es tu primera clase de Modelado 3D, instala <b>Screencast Keys</b>: muestra en pantalla las teclas que presionas, y así los estudiantes ven cada atajo mientras demuestras. En el Módulo 2 tienes la guía paso a paso.' }
      ]},
      { id:'proj', e:'🧩', title:'La primera misión: una composición geométrica', blocks:[
        { t:'p', html:'Al inicio de la clase se muestra el resultado y se conversa sobre él: ¿de qué formas simples está hecha la escena?, ¿qué acciones ayudan a crearla?, ¿qué la haría parecer un trabajo terminado? Así el estudiante aprende a dividir una tarea en partes.' },
        { t:'figure', src:'Image/composition-goal.jpg', caption:'La meta de la L1: manipular objetos, experimentar con el color y crear una composición geométrica propia.' },
        { t:'p', html:'La composición del estudiante debe tener <b>al menos 5 objetos</b>, formas o tamaños distintos, objetos distribuidos a lo ancho, a lo alto y en profundidad, rotaciones y escalas con G/R/S, sin objetos superpuestos por accidente, y materiales de colores. Estos ejemplos de la tarjeta son solo inspiración:' },
        { t:'figure', src:'Image/composition-1.jpg', caption:'Ejemplo de composición 1.' },
        { t:'figure', src:'Image/composition-2.jpg', caption:'Ejemplo de composición 2.' },
        { t:'figure', src:'Image/composition-3.jpg', caption:'Ejemplo de composición 3.' },
        { t:'link', href:'https://www.behance.net/kodlandbehance', e:'⭐', title:'Trabajos de estudiantes en Behance', small:'Los proyectos que se muestran en la tarjeta de cierre de la L1: interiores, personajes, partículas y animación' }
      ]},
      { id:'bo', e:'📘', title:'Repasa la lección en el Backoffice', blocks:[
        { t:'p', html:'Antes de la verificación, abre el curso en el Backoffice y lee la primera lección a tu ritmo: las tarjetas de actividad y las Teacher Notes están todas allí. No hay tiempo límite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2216', e:'📘', title:'Abrir el curso en el Backoffice', small:'Modelado 3D — la lección y sus Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'El contenido de las lecciones en el Backoffice se irá actualizando con el feedback de estudiantes y tutores. Cuando haya cambios, se te avisará con anticipación para que prepares la lección.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'La parte técnica de las lecciones',
    desc:'La instalación de la L1, las entregas sin excepciones, Kodland Sparks y los problemas técnicos más comunes.',
    obj:'Conoce lo que hace que las lecciones de Modelado 3D funcionen técnicamente: una instalación guiada en la L1, entregas de todos los estudiantes —nunca por el chat—, la publicación en Kodland Sparks y las soluciones a los problemas más comunes de Blender.',
    needs:['sparksPublish'],
    offer:[['📥','Guiar la instalación de la L1 sin frenar al grupo.'],['📤','Lograr que todos entreguen su trabajo, siempre en la plataforma.'],['⚡','Saber cómo se publica un proyecto en Kodland Sparks.'],['🛠️','Resolver los problemas técnicos más comunes de Blender.']],
    sections:[
      { id:'focus', e:'🎯', title:'Los 5 puntos que garantizan el éxito', blocks:[
        { t:'p', html:'Estos son los puntos de foco para las lecciones de Modelado 3D. Abre cada uno:' },
        { t:'acc', items:[
          ['📥','L1: la instalación, con las opciones de la tarjeta','<p>Guía la instalación siguiendo <b>las opciones de la tarjeta</b>, según la computadora del estudiante:</p><ul><li><b>Windows reciente o Mac con Apple Silicon:</b> la versión actual, desde <a href="https://www.blender.org/download/" target="_blank" rel="noopener">blender.org/download</a>.</li><li><b>Computadora más antigua (Windows antiguo o Mac con Intel):</b> <a href="https://www.blender.org/releases/4-5/" target="_blank" rel="noopener">Blender 4.5 LTS</a>.</li><li>Si el estudiante tiene <b>Steam</b>, puede instalarlo desde allí y se actualiza solo.</li><li>Los estudiantes que ya están listos <b>siguen con la clase</b>; si Blender se está descargando, el estudiante continúa con el grupo y termina la instalación después.</li><li>Controladores, cierres inesperados y bloqueos se resuelven de forma individual con <b>soporte técnico</b>, en una sala aparte.</li></ul>'],
          ['🖼️','Todos terminan y entregan el trabajo de la L1','<p>Asegúrate de que <b>cada estudiante guarde su composición y suba la captura mientras Blender sigue abierto</b>.</p><ul><li>Primero <b>File → Save</b>; después la captura con <b>View → Viewport Render</b> y <b>Image → Save As</b>.</li><li>Confirma que todos subieron la imagen e hicieron clic en <b>«Enviar»</b>.</li><li>Si Blender se cierra antes de guardar, revisa con ellos cómo recuperar el proyecto (guía más abajo).</li></ul>'],
          ['🖱️','Primero los botones, después los atajos','<p>Señala primero las <b>herramientas en pantalla</b> (la barra lateral izquierda) y después los <b>atajos de teclado</b>.</p><ul><li>En la primera clase los atajos no son obligatorios: si al estudiante le resulta más cómodo el menú lateral, puede usarlo.</li><li>Así nadie se pierde al principio, y los atajos aceleran el trabajo después.</li></ul>'],
          ['🚫','Sin excepciones en las entregas, nunca por el chat','<p><b>No exoneres el trabajo ni aceptes imágenes por el chat.</b> La entrega se hace en la tarjeta de la actividad, con «Enviar».</p><ul><li>Si el tiempo no alcanza, ajusta la tarea (tres figuras y sin color), pero el resultado se sube igual a la plataforma.</li></ul>'],
          ['🔁','Mostrar los trabajos y unirse al chat del grupo','<p>Muestra brevemente los trabajos de la clase anterior <b>al inicio de la siguiente</b>, si sus autores están de acuerdo.</p><ul><li>En el cierre de la L1, envía desde el Backoffice el link al <b>chat del grupo</b>: la información del curso se comparte allí, no por mensajes privados.</li><li>Si un estudiante no puede o no quiere unirse, no lo obligues; invítalo y registra la situación en la evaluación del tutor en el Backoffice.</li></ul>']
        ]}
      ]},
      { id:'prep', e:'☑️', title:'Antes de cada clase', blocks:[
        { t:'steps', items:[
          ['Un día antes de la L1','Recuerda a los estudiantes instalar Blender y envíales el link del <a href="https://www.blender.org/download/" target="_blank" rel="noopener">sitio oficial de descarga</a>.'],
          ['Tu equipo, listo','Si es tu primera clase, instala <b>Screencast Keys</b> y revisa cómo recuperar un proyecto si Blender se cierra (tienes las guías más abajo).'],
          ['15 minutos antes','Conéctate antes, conversa con los estudiantes que llegan y confirma quién tiene Blender instalado.'],
          ['Comparte pantalla cuando haga falta','Empieza la llamada con la cámara encendida y sin compartir pantalla para conectar primero con el grupo. Verifica que puedes compartir pantalla y que Blender está listo.']
        ]}
      ]},
      { id:'req', e:'💻', title:'Requisitos de la computadora', blocks:[
        { t:'p', html:'Esto es lo que necesita el estudiante para las clases de Modelado 3D. Es útil conocerlo cuando un estudiante tiene problemas para instalar o usar Blender:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computadora y sistema','De escritorio o laptop con <b>Windows 10/11 (64 bits)</b> o <b>macOS 11 o posterior</b>. En Mac con procesador Apple: macOS 13 o posterior.'],
          ['🧠','Memoria y procesador','<b>8 GB de RAM</b> y un procesador de <b>2 núcleos</b>.'],
          ['🎮','Gráficos y disco','Tarjeta gráfica (puede ser integrada) compatible con <b>OpenGL 3.3</b> y <b>3 GB</b> de espacio libre en disco.'],
          ['🌐','Navegador y conexión','Google Chrome en su versión más reciente e internet estable que soporte videollamadas.'],
          ['🎧','Equipo','Mouse, teclado, cámara web y auriculares con micrófono.'],
          ['🧊','Programas','<b>Blender</b> y la <b>plataforma Kodland</b>.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Si Blender no inicia en el equipo de un estudiante, sigue lo que ya conoces de la L1: revisa que haya elegido la opción correcta de la tarjeta (Blender 4.5 LTS en computadoras más antiguas) y, si sigue sin funcionar, deriva el caso a soporte técnico en una sala aparte.' }
      ]},
      { id:'publish', e:'📤', title:'Entregar el trabajo y Kodland Sparks', blocks:[
        { t:'p', html:'Blender guarda el proyecto como archivo <b>.blend</b>, pero lo que se entrega es una <b>imagen</b>. En la L1 es la captura de <b>Viewport Render</b>. Estos son los pasos:' },
        { t:'steps', items:[
          ['Guardar el archivo .blend','<b>File → Save</b>, con el nombre <b>«composición geométrica»</b>. El .blend queda guardado en la computadora del estudiante: es su proyecto para seguir trabajando.'],
          ['Preparar la vista','Desactivar el ícono <b>Overlays</b> (arriba a la derecha) para ocultar la cuadrícula, los ejes, la cámara y las luces.'],
          ['Hacer la captura','<b>View → Viewport Render</b>.'],
          ['Guardar la imagen','En la ventana de la captura: <b>Image → Save As</b>, en la computadora.'],
          ['Subir la imagen y hacer clic en «Enviar»','Arrastrarla al campo de la tarjeta «Resultado final» en la plataforma Kodland. Sin «Enviar», el trabajo no queda registrado. Las actividades para casa se envían igual.']
        ]},
        { t:'callout', kind:'warn', e:'🖼️', html:'<b>La plataforma y Kodland Sparks reciben imágenes, no archivos .blend.</b> Si un estudiante intenta subir el proyecto de Blender, recuérdale: el .blend se queda en su computadora y lo que se sube es la imagen.' },
        { t:'p', html:'Los <b>desafíos de Sparks</b> forman parte de las actividades para casa, y los proyectos del curso se publican en <b>Kodland Sparks</b>: el primero es el Marble Run, después del módulo de animación (módulo 4), y al final del curso el portafolio y el proyecto final. Practica aquí cómo se publica un proyecto:' },
        { t:'sim', flag:'sparksPublish', src:'../sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulación', title:'Publicar en Kodland Sparks', text:'Una réplica de Kodland Sparks: publicas un proyecto como una estudiante, conoces las tres opciones de visibilidad y resuelves los dos problemas más comunes. Toma unos 5 minutos. La verificación del módulo se desbloquea al terminar.' }
      ]},
      { id:'guides', e:'🧰', title:'Guías técnicas paso a paso', blocks:[
        { t:'p', html:'Estas son las guías del equipo del curso que se mencionan en la preparación de la L1. Ábrelas antes de tu primera clase y tenlas a mano:' },
        { t:'acc', open:false, items:[
          ['💥','Blender se cerró de repente: cómo recuperar el proyecto',
           `<div class="gsteps">
              <div class="gstep"><p>Abre Blender de nuevo y haz clic en <b>File → Recover → Auto Save…</b></p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/09c55ebe-4562-4020-9a2e-48aa303a0250.png" alt=""></div>
              <div class="gstep"><p>Revisa la fecha y la hora del último trabajo en el archivo, elige el que necesitas (normalmente el más reciente) y haz clic en <b>Recover Auto Save</b>.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/a56b01a4-51b6-4657-a841-ea112ee5278e.png" alt=""></div>
              <div class="gstep"><p>El proyecto vuelve a aparecer.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/4e823368-0b07-4a40-a7d4-648d7cb51469.png" alt=""></div>
            </div><p>💡 Para no depender de la recuperación, recuerda a los estudiantes guardar seguido con <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>`],
          ['⌨️','Mostrar en pantalla las teclas y el mouse: Screencast Keys',
           `<p>Con este complemento, los estudiantes ven cada tecla y cada clic que haces mientras demuestras.</p>
            <div class="gsteps">
              <div class="gstep"><p>Abre Blender y ve a <b>Edit → Preferences</b>. A la izquierda elige <b>Get Extensions</b> y permite el acceso a la base de complementos en línea: <b>Allow Online Access</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/ef6f7385-e78b-4238-ae2a-ebeb3e9a07f1.jpeg" alt=""></div>
              <div class="gstep"><p>En el buscador, encuentra <b>Screencast Keys</b> y haz clic en <b>Install</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/585c4f47-46e6-47cb-8597-bcc790fb1989.jpeg" alt=""></div>
              <div class="gstep"><p>Abre el menú lateral con la flechita de la derecha o con la tecla <kbd>N</kbd>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/7eec760a-524e-4184-9782-a2e4a57ba1b2.jpeg" alt=""></div>
              <div class="gstep"><p>Elige <b>Screencast Keys</b> a la derecha y marca la primera casilla. Debajo puedes ajustar dónde aparecen el mouse y las teclas.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/730548c9-3a74-4300-8212-01b68bc6c37b.jpeg" alt=""></div>
            </div>`],
          ['🌎','Tooltips en el idioma del estudiante',
           `<p>La interfaz se queda en inglés (las instrucciones del curso están en inglés), pero los <b>tooltips</b> pueden aparecer en el idioma del estudiante para aprender más fácil:</p>
            <p><b>Edit → Preferences → Interface → Language</b>: elige el idioma, activa <b>Translate</b> y marca <b>solo Tooltips</b>. Al pasar el mouse sobre una herramienta, la ayuda aparece traducida.</p>`]
        ]}
      ]},
      { id:'trouble', e:'🛠️', title:'Otros casos frecuentes', blocks:[
        { t:'acc', open:false, items:[
          ['💻','Blender no se instala o no corre','Revisa que haya elegido la opción correcta de la tarjeta: en computadoras más antiguas, <a href="https://www.blender.org/releases/4-5/" target="_blank" rel="noopener">Blender 4.5 LTS</a>. Si sigue sin funcionar, deriva el caso a <b>soporte técnico</b> en una sala aparte, sin frenar al grupo.'],
          ['🌐','Blender se abrió en otro idioma','En la primera ventana, deja el idioma en <b>English</b>: todas las instrucciones del curso usan la interfaz en inglés. Si quiere ayuda en su idioma, activa solo los tooltips (guía arriba).'],
          ['🔷','Los objetos se ven con facetas','Clic derecho sobre el objeto → <b>Shade Smooth</b> o <b>Shade Auto Smooth</b>.'],
          ['📍','Los objetos nuevos aparecen todos en el mismo punto','Aparecen donde está el <b>3D Cursor</b> (el círculo rojo y blanco). Después de agregarlos, hay que moverlos con <b>G</b> para que no queden superpuestos.'],
          ['🔑','Un estudiante no puede iniciar sesión en la plataforma','Envíale su usuario y contraseña desde su tarjeta de estudiante en el Backoffice, por chat privado.'],
          ['🔒','El link de Sparks no abre','Seguramente guardó el proyecto como <b>Only me</b>: <b>My projects → abrir el proyecto → Edit → Public → Publish</b>.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada clase', blocks:[
        { t:'check', title:'✅ Mi checklist técnico', groups:[
          { h:'☑️ Antes de la clase', items:['Leí todas las Teacher Notes de la lección y vi el video de la primera.','Tengo Blender listo, Screencast Keys instalado y sé cómo recuperar un proyecto.','En la L1, recordé a los estudiantes instalar Blender con un día de anticipación.'] },
          { h:'🎬 Durante la clase', items:['Señalo primero la herramienta en pantalla y después el atajo.','Después de cada acción importante, pido que me muestren el resultado en pantalla.','No corrijo el trabajo: hago una pregunta de diagnóstico y doy una pista.'] },
          { h:'📤 Al final de la clase', items:['Todos guardaron el .blend y subieron su captura con «Enviar» — nada por el chat.','Envié el link al chat del grupo desde el Backoffice.','Anoté qué trabajos mostrar al inicio de la próxima clase.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'¿Qué crean los estudiantes en la primera clase?',
      o:['Una criatura en Sculpt Mode.','Su propia composición con al menos 5 figuras geométricas, con materiales de colores.','Una casa a partir de un cubo.'],
      a:1, e:'La L1 trabaja en Object Mode: una composición geométrica propia con materiales. La casa a partir de un cubo llega en la próxima clase, con Edit Mode.' },
    { q:'En Object Mode, ¿qué hacen las teclas G, R y S?',
      o:['G mueve, R rota y S escala; X/Y/Z limitan la acción a un eje.','G guarda, R renderiza y S selecciona.','Cambian entre Object Mode y Edit Mode.'],
      a:0, e:'G (grab) mueve, R rota y S escala. Después de la tecla, X, Y o Z limitan el movimiento a ese eje.' },
    { ctx:'En la L1, un estudiante empieza a editar los vértices de un cubo.',
      q:'¿Qué le indicas?',
      o:['Que siga: así su composición será más original.','Que vuelva a Object Mode: en esta clase se trabaja con objetos completos; editar vértices, aristas y caras llega en la próxima clase.','Que borre todo y empiece de nuevo.'],
      a:1, e:'En la primera clase el estudiante trabaja en Object Mode, sin editar vértices, aristas ni caras.' },
    { ctx:'Quedan pocos minutos y varios estudiantes no van a alcanzar a terminar la composición.',
      q:'¿Qué haces?',
      o:['Reduces la tarea a tres figuras y omites el color, y todos suben su resultado a la plataforma.','Les dices que la terminen en casa y no suban nada hoy.','Terminas tú la composición en tu pantalla para que la copien.'],
      a:0, e:'Las Teacher Notes permiten reducir a tres figuras y omitir la coloración, pero el resultado se sube igual.' },
    { q:'¿Cómo das feedback sobre la composición?',
      o:['Comparando los trabajos para motivar al grupo.','Con un consejo útil y específico para mejorar un criterio; el estudiante decide si lo sigue.','Corrigiendo la composición en tu pantalla.'],
      a:1, e:'Feedback útil y específico, enfocado en el progreso personal de cada estudiante, sin comparar trabajos.' },
    { q:'Según el programa del curso, ¿qué papel tiene la IA en los módulos 8 y 9?',
      o:['Crea los proyectos por el estudiante.','Es una herramienta: el estudiante plantea la tarea, obtiene una idea, concepto o textura, la perfecciona en Blender y decide por su cuenta qué servicios usar.','Reemplaza el modelado en Blender.'],
      a:1, e:'El curso enseña un enfoque para trabajar con IA; la herramienta concreta la elige el estudiante y el resultado se perfecciona en Blender.' }
  ],
  m2:[
    { ctx:'En la L1, Blender no inicia en la computadora de un estudiante.',
      q:'¿Qué haces?',
      o:['Detienes al grupo hasta resolverlo.','Revisas que haya elegido la opción adecuada de la tarjeta y, si sigue sin funcionar, derivas el caso a soporte técnico en una sala aparte mientras el grupo continúa.','Le pides que vuelva la próxima clase.'],
      a:1, e:'Los problemas individuales no frenan al grupo. En computadoras antiguas se usa Blender 4.5 LTS, y el soporte técnico resuelve los casos que siguen.' },
    { ctx:'Al final de la clase, un estudiante te manda la captura de su composición por el chat.',
      q:'¿Qué le respondes?',
      o:['Le agradeces y guardas tú la imagen en tu computadora para revisarla después.','Le agradeces y, con amabilidad, le pides que la suba también en la tarjeta de la actividad y haga clic en «Enviar», para que su trabajo quede registrado.','Le dices que no se preocupe, que en esta clase no hace falta entregar.'],
      a:1, e:'Agradecer el trabajo y guiar con amabilidad: la entrega solo queda registrada en la tarjeta de la actividad, con «Enviar». Por eso no se aceptan imágenes por el chat ni se exonera el trabajo.' },
    { q:'¿Cómo se toma la captura del resultado final en Blender?',
      o:['Con la tecla Imprimir pantalla, con todos los paneles visibles.','Desactivando Overlays, luego View → Viewport Render y guardando la imagen con Image → Save As.','Guardando el archivo .blend y subiéndolo.'],
      a:1, e:'Sin Overlays se ocultan la cuadrícula, los ejes y las luces; Viewport Render crea la imagen y Image → Save As la guarda.' },
    { q:'¿Cómo presentas una herramienta nueva de Blender en la primera clase?',
      o:['Solo con el atajo, porque es obligatorio desde el inicio.','Primero la herramienta en pantalla y después el atajo; si al estudiante le resulta más cómodo el menú lateral, puede usarlo.','Solo con una explicación teórica.'],
      a:1, e:'Primero lo que se ve en pantalla; después el atajo. En la primera clase los atajos no son obligatorios.' },
    { ctx:'Un estudiante quiere subir a la plataforma su archivo «composición geométrica.blend».',
      q:'¿Qué le dices?',
      o:['Que lo suba así, es el proyecto completo.','Que el .blend se queda en su computadora y que suba la imagen de la captura (Viewport Render).','Que lo envíe comprimido por el chat.'],
      a:1, e:'La plataforma y Kodland Sparks reciben imágenes. El .blend es el proyecto de trabajo y se guarda en la computadora.' },
    { q:'Según los requisitos del curso, ¿cuánta memoria RAM necesita la computadora del estudiante?',
      o:['4 GB.','8 GB.','32 GB.'],
      a:1, e:'Los requisitos son 8 GB de RAM, un procesador de 2 núcleos, una tarjeta gráfica compatible con OpenGL 3.3 y 3 GB libres en disco.' }
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
    ['📒', '<b>Antes de cada clase:</b> lee todas las Teacher Notes y ten a mano las guías técnicas.'],
    ['📥', '<b>L1:</b> instalación con las opciones de la tarjeta, sin frenar al grupo.'],
    ['📤', '<b>Entregas:</b> siempre en la plataforma con «Enviar», nunca por el chat.'],
    ['💬', '<b>Cierre de la L1:</b> el link al chat del grupo, desde el Backoffice.']
  ]
};
