/* ============================================================
   EM course training · 3D Modeling (Modelagem 3D) [2203 · LatAm: 2216] · PORTUGUESE (Brazil)
   Spanish version: content-es.js (Backoffice 2216).
   Translate only the text inside quotes / backticks. Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'pt' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'Formação de curso EM',
  footer: 'kodland · Novo Modelo Educacional · Formação de curso',
  devLink: '🛠 Developer',
  logoSub: 'Novo Modelo Educacional',
  navHome: '← Início',
  navBackModule: '← Voltar ao módulo',
  moduleN: 'Módulo {n}',
  badgeStart: 'Começar →',
  badgeLocked: '🔒 Conclua o Módulo {n}',
  badgeDone: '✓ Concluído · {score}%',
  progLabel: 'módulos concluídos',
  progAllDone: 'Módulos concluídos 🎉',
  eyebrow: '{course} · Módulo {n} de {total}',
  ctaTitle: 'Verificação do módulo',
  ctaText: '{n} perguntas curtas. Acerte 70% ou mais para passar.',
  lockSim: '🔒 Conclua a simulação acima para liberar a verificação.',
  startCheck: 'Começar a verificação →',
  retake: '🔁 Refazer a verificação',
  qmeta: '{e} Verificação do Módulo {n} · Pergunta {i} de {total}',
  fbRight: '✅ <b>Correto!</b> ',
  fbWrong: '❌ <b>Não exatamente.</b> ',
  nextQuestion: 'Próxima pergunta →',
  seeResult: 'Ver meu resultado →',
  passedTitle: 'Você passou!',
  failTitle: 'Quase lá',
  scoreLine: 'Você acertou <b>{score} de {n}</b>.',
  failText: 'É preciso acertar 70% ou mais. Revise o módulo e tente de novo — você pode refazer quantas vezes precisar.',
  nextUnlocked: '<b>Módulo {n} · {title}</b> foi liberado.',
  goModule: 'Ir para o Módulo {n} →',
  allDoneText: 'Você concluiu os dois módulos desta formação.',
  seeNext: 'Ver o próximo passo →',
  reviewModule: '📖 Revisar o módulo',
  homeDoneTitle: 'Módulos concluídos!',
  homeDoneText: 'Falta um último passo: o teste DST na página da formação no LMS.',
  homeDoneBtn: 'Ver o que fazer agora →',
  doneBadge: '✓ Concluído',
  doneBack: 'Voltar aos módulos',
  lockedTitle: 'Ainda bloqueado',
  lockedModule: 'Conclua primeiro o Módulo {n}.',
  lockedStep: 'Conclua o passo anterior para liberar este.',
  ok: 'OK',
  linkOpen: 'Abrir ↗',
  projPlay: '▶ Abrir ↗',
  simOpen: '▶ Abrir a simulação aqui',
  simClose: '✕ Fechar a simulação',
  simNewTab: 'Abrir em outra aba ↗',
  simDone: '✅ Simulação concluída',
  simTodo: '○ Simulação pendente',
  checkTag: 'Marque',
  mythTag: 'Mito',
  mythTap: 'Toque para ver a realidade →',
  mythReality: 'Realidade ✓',
  sortWrong: '✗ Não exatamente.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'm3d';
COURSE.code = '2203';                     // Backoffice course id (Brazil). Spanish version: 2216
COURSE.title = 'Modelagem 3D';
COURSE.color = '#14B8A6';

COURSE.home = {
  kicker: '🎓 Formação de curso · Modelagem 3D',
  title: 'Modelagem <span class="hl">3D</span>',
  lead: 'Uma viagem pelo Oceano 3D, para alunos de 13-17 anos: no Blender, eles vão aprender a transformar suas ideias em modelos e animações 3D, da primeira composição geométrica até o projeto autoral. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice é atualizado continuamente.</b> A partir do feedback de alunos e tutores, as aulas passam por melhorias constantes. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🧊', color:'#14B8A6', title:'O conteúdo do curso',
    desc:'Como a Modelagem 3D é ensinada no novo modelo, a primeira aula e as ferramentas do Blender utilizadas nela.',
    obj:'Prepare-se para dar a primeira aula de Modelagem 3D. Nela, alunos de 13 a 17 anos vão instalar o Blender, aprender a mover, girar e escalar objetos e criar a primeira composição geométrica com materiais coloridos.',
    offer:[['🎨','Conhecer o curso e a forma de trabalho.'],['📖','Saber o que acontece em cada cartão da primeira aula.'],['⌨️','Revisar as ferramentas do Blender usadas na primeira aula.'],['📘','Revisar a aula e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🎨', title:'O curso', blocks:[
        { t:'meta', items:[['🧑','Idade','13–17 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas · 10 módulos'],['🧊','Ferramenta','Blender']] },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','A aula começa mostrando o resultado final e conversando sobre as partes que o formam; depois vêm demonstrações curtas.'],
          ['🖱️','Ação antes da teoria','Você mostra uma ação, o aluno repete na tela dele e mostra o resultado — não só o que entendeu.'],
          ['🧩','O erro faz parte do processo','Primeiro uma pergunta de diagnóstico, depois uma dica que ele possa seguir. Você nunca corrige o trabalho pelo aluno.']
        ]},
        { t:'callout', kind:'good', e:'🤖', html:'Como tarefa de casa, além das atividades práticas e dos testes, há os <b>desafios do Sparks</b>: atividades especiais revisadas pelo tutor de IA, com uma recompensa à parte 💎 e um certificado.' }
      ]},
      { id:'goals', e:'🎓', title:'O que o aluno conquista', blocks:[
        { t:'p', html:'Ao terminar o curso, o aluno vai alcançar estas conquistas:' },
        { t:'cards', cols:2, items:[
          ['🧱','Cria','Nove miniprojetos e um projeto final: uma casinha e um robô, um cenário para um jogo de plataforma, o interior de um quarto, um Marble Run, um modelo humano, a caminhada de um personagem, vídeos de simulações, e um cenário e um personagem com IA.'],
          ['🤖','Usa a IA como ferramenta','Propõe uma tarefa, obtém uma ideia, um conceito, um esboço, um modelo ou uma textura, e aperfeiçoa o resultado no Blender. <b>Decide por conta própria quais serviços usar</b>: o curso ensina uma abordagem, não uma ferramenta específica.'],
          ['🎬','Faz renders e vídeos animados','Primeiro render da casinha e do robô; depois o render de um interior, vídeos com animação por keyframes, um Marble Run, uma caminhada e vídeos de simulações e partículas.'],
          ['🛠️','Habilidades práticas','Trabalha no Object Mode, no Sculpt Mode e no Edit Mode, usa os principais modificadores, configura materiais, texturas e iluminação, e anima objetos e personagens (ossos e simulações físicas).'],
          ['🌟','Publica o portfólio no Kodland Sparks','Os trabalhos finalizados são publicados no Sparks. O Marble Run, depois do módulo de animação; e no final, o portfólio e o projeto final já reunidos para apresentá-los.'],
          ['💬','Habilidades para a vida','Comunicação (apresentar o próprio trabalho, dar e receber feedback), colaboração, pensamento crítico e gestão do tempo e de projetos (dividir uma tarefa em partes e planejá-la).']
        ]}
      ]},
      { id:'les', e:'📖', title:'A primeira aula', blocks:[
        { t:'p', html:'Por enquanto, a primeira aula do curso está disponível. Abra e revise cada parte:' },
        { t:'lessons', key:'m1', items:[
          { tab:'A1', e:'🎨', h:'Aula 1 — Conhecendo os objetos 3D', p:'Primeira aula do programa. Os alunos conhecem o ambiente de estudo (Classroom e a plataforma Kodland), instalam o Blender e aprendem o básico do <b>Object Mode</b>. A primeira missão como artistas 3D: criar uma composição própria com figuras geométricas e aplicar materiais coloridos.',
            acc:[['📚','O que você precisa saber','<ul><li><b>Navegação:</b> a roda do mouse aproxima e afasta; o botão do meio gira em volta do modelo; <b>Shift</b> + botão do meio desloca a vista. No touchpad: juntar e afastar dois dedos, deslizar dois dedos, e <b>Shift</b> + deslizar dois dedos.</li><li><b>G</b> move, <b>R</b> gira, <b>S</b> escala. Depois da tecla, <b>X</b> (vermelho), <b>Y</b> (verde) ou <b>Z</b> (azul) limitam a ação a um eixo. No Blender, para cima e para baixo é o eixo <b>Z</b>.</li><li><b>Shift + A → Mesh</b> acrescenta uma figura (ela aparece onde está o 3D Cursor); <b>X</b> ou <b>Del</b> apaga; botão direito → <b>Shade Smooth</b> suaviza.</li><li><b>Materiais:</b> Material Preview → Material → <b>New</b> → <b>Base Color</b>. Opcional: luz (Sun: Color e Power) e cor do ambiente no modo Rendered.</li><li><b>Print do resultado:</b> desativar <b>Overlays</b> → <b>View → Viewport Render</b> → <b>Image → Save As</b>.</li></ul>'],
                 ['⏱️','Tempos (90 min)','<ul><li><b>Introdução (15 min):</b> Vamos nos conhecer melhor! (8), Kodland Universe e boas-vindas ao curso (7).</li><li><b>Parte principal (65 min):</b> instalação do Blender (10), transformações de objetos (12), crie a sua própria composição! (23), materiais (15), resultado final (5).</li><li><b>Parte final (10 min):</b> resumo, reflexão e chat do grupo (5); missão para casa e o que vem depois (5).</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Orienta-se no ambiente de estudo (Classroom e a plataforma Kodland).</li><li>Cria uma composição com pelo menos <b>5 objetos geométricos</b> (pode ser reduzida a três se não der tempo de terminar).</li><li>Move, gira e escala objetos com G/R/S e os eixos X/Y/Z.</li><li>Aplica materiais coloridos aos objetos.</li><li>Salva o arquivo <b>.blend</b> e envia um print do trabalho na plataforma.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Ajude os alunos a se familiarizar com a interface e chegar rápido a um <b>primeiro resultado</b>: não sobrecarregue a aula com teoria. Primeiro você mostra a ação, depois o aluno repete.</li><li>No início, crie conexão com o grupo, ajude-os a se orientar e identifique a tempo qualquer problema técnico.</li><li>A prática <b>não é uma cópia do exemplo</b>: o tema, as formas, a distribuição e a paleta são escolha do aluno.</li><li>Encerre ajudando cada aluno a registrar o resultado e a reconhecer uma conquista concreta, sem comparar trabalhos.</li></ul>'],
                 ['⚙️','Pontos de atenção','<ul><li>Trabalha-se no <b>Object Mode</b>: nada de editar vértices, arestas ou faces (isso vem na próxima aula).</li><li>Na primeira aula não é obrigatório usar atalhos: os alunos podem usar as ferramentas do menu lateral esquerdo.</li><li>Durante a prática independente, todos fazem o compartilhamento de tela para que você acompanhe e dê apoio no momento certo.</li><li>Se um aluno não conseguir abrir o Blender, encaminhe o caso ao <b>suporte técnico</b> numa sala separada.</li><li>Se o tempo não for suficiente, você pode reduzir a composição a <b>três figuras</b> e deixar a cor de lado.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🔭', html:'<b>Próxima aula:</b> os alunos passam para o <b>Edit Mode</b>, editam vértices, arestas e faces, e modelam uma casa a partir de um cubo. No encerramento da A1 isso é antecipado: hoje ainda não editamos a forma dos objetos.' },
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note da aula tem o plano completo: missão, objetivo, resultado-chave, um vídeo, a preparação, os tempos de cada cartão e os pontos de atenção. <b>Leia todas as Teacher Notes antes da aula.</b> Os materiais foram criados com o Blender 4.5.3; se você notar uma diferença importante na versão atual, avise a equipe.' }
      ]},
      { id:'tools', e:'⌨️', title:'Ferramentas do Blender da primeira aula', blocks:[
        { t:'p', html:'Estas são as ferramentas que aparecem na primeira aula. Deixe-as à mão durante a aula:' },
        { t:'cards', cols:2, items:[
          ['🧭','Navegação','Roda: aproximar e afastar. Botão do meio: girar em volta do modelo. <b>Shift</b> + botão do meio: deslocar para os lados.'],
          ['📦','Transformar · Object Mode','<b>G</b> mover, <b>R</b> girar, <b>S</b> escalar. Depois da tecla, <b>X/Y/Z</b> limita a ação a um eixo. Também estão na barra lateral esquerda.'],
          ['➕','Acrescentar e apagar','<b>Shift + A → Mesh</b> acrescenta uma figura no 3D Cursor. <b>X</b> ou <b>Del</b> apaga o objeto selecionado (destacado em laranja).'],
          ['✨','Suavizar','Botão direito → <b>Shade Smooth</b> ou <b>Shade Auto Smooth</b>, para que o objeto não fique facetado.'],
          ['🎨','Materiais','<b>Material Preview</b> → ícone do círculo vermelho <b>Material</b> → <b>New</b> → <b>Base Color</b>. Um material já criado é escolhido pelo círculo.'],
          ['📷','Print e salvamento','Desativar <b>Overlays</b> → <b>View → Viewport Render</b> → <b>Image → Save As</b>. O projeto é salvo com <b>File → Save</b>; <b>Ctrl + Z</b> desfaz.']
        ]},
        { t:'callout', kind:'tip', e:'📺', html:'Se esta é a sua primeira aula de Modelagem 3D, instale o <b>Screencast Keys</b>: ele mostra na tela as teclas que você pressiona, e assim os alunos veem cada atalho enquanto você demonstra. No Módulo 2 você encontra o passo a passo.' }
      ]},
      { id:'proj', e:'🧩', title:'A primeira missão: uma composição geométrica', blocks:[
        { t:'p', html:'No início da aula, o resultado é mostrado e discutido: de que formas simples a cena é feita? Que ações ajudam a criá-la? O que faria ela parecer um trabalho terminado? Assim o aluno aprende a dividir uma tarefa em partes.' },
        { t:'figure', src:'Image/composition-goal.jpg', caption:'A meta da A1: manipular objetos, experimentar com a cor e criar uma composição geométrica própria.' },
        { t:'p', html:'A composição do aluno deve ter <b>pelo menos 5 objetos</b>, formas ou tamanhos diferentes, objetos distribuídos na largura, na altura e na profundidade, rotações e escalas com G/R/S, sem objetos sobrepostos por acidente, e materiais coloridos. Estes exemplos do cartão são só inspiração:' },
        { t:'figure', src:'Image/composition-1.jpg', caption:'Exemplo de composição 1.' },
        { t:'figure', src:'Image/composition-2.jpg', caption:'Exemplo de composição 2.' },
        { t:'figure', src:'Image/composition-3.jpg', caption:'Exemplo de composição 3.' },
        { t:'link', href:'https://www.behance.net/kodlandbehance', e:'⭐', title:'Trabalhos de alunos no Behance', small:'Os projetos mostrados no cartão de encerramento da A1: interiores, personagens, partículas e animação' }
      ]},
      { id:'bo', e:'📘', title:'Revise a aula no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia a primeira aula no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2203', e:'📘', title:'Abrir o curso no Backoffice', small:'[2203] Modelagem 3D — a aula e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'A instalação da A1, entregas sem exceções, o Kodland Sparks e os problemas técnicos mais comuns.',
    obj:'Saiba o que faz as aulas de Modelagem 3D funcionarem tecnicamente: uma instalação guiada na A1, entregas de todos os alunos — nunca pelo chat —, a publicação no Kodland Sparks e as soluções para os problemas mais comuns do Blender.',
    needs:['sparksPublish'],
    offer:[['📥','Guiar a instalação da A1 sem atrasar o grupo.'],['📤','Garantir que todos entreguem o trabalho, sempre na plataforma.'],['⚡','Saber como se publica um projeto no Kodland Sparks.'],['🛠️','Resolver os problemas técnicos mais comuns do Blender.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 5 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco para as aulas de Modelagem 3D. Abra cada um:' },
        { t:'acc', items:[
          ['📥','A1: a instalação, com as opções do cartão','<p>Guie a instalação seguindo <b>as opções do cartão</b>, de acordo com o computador do aluno:</p><ul><li><b>Windows recente ou Mac com Apple Silicon:</b> a versão atual, em <a href="https://www.blender.org/download/" target="_blank" rel="noopener">blender.org/download</a>.</li><li><b>Computador mais antigo (Windows antigo ou Mac com Intel):</b> <a href="https://www.blender.org/releases/4-5/" target="_blank" rel="noopener">Blender 4.5 LTS</a>.</li><li>Se o aluno tem <b>Steam</b>, pode instalar por lá, e o programa se atualiza sozinho.</li><li>Os alunos que já estão prontos <b>seguem com a aula</b>; se o Blender está baixando, o aluno segue com o grupo e termina a instalação depois.</li><li>Drivers, fechamentos inesperados e travamentos são resolvidos individualmente com o <b>suporte técnico</b>, numa sala separada.</li></ul>'],
          ['🖼️','Todos terminam e entregam o trabalho da A1','<p>Garanta que <b>cada aluno salve a composição e envie o print enquanto o Blender ainda estiver aberto</b>.</p><ul><li>Primeiro <b>File → Save</b>; depois o print com <b>View → Viewport Render</b> e <b>Image → Save As</b>.</li><li>Confirme que todos enviaram a imagem e clicaram em <b>«Enviar»</b>.</li><li>Se o Blender fechar antes de salvar, veja com eles como recuperar o projeto (guia mais abaixo).</li></ul>'],
          ['🖱️','Primeiro os botões, depois os atalhos','<p>Mostre primeiro as <b>ferramentas na tela</b> (a barra lateral esquerda) e depois os <b>atalhos de teclado</b>.</p><ul><li>Na primeira aula os atalhos não são obrigatórios: se o aluno achar o menu lateral mais confortável, pode usá-lo.</li><li>Assim ninguém se perde no começo, e os atalhos aceleram o trabalho depois.</li></ul>'],
          ['🚫','Sem exceções nas entregas, nunca pelo chat','<p><b>Não dispense o trabalho nem aceite imagens pelo chat.</b> A entrega é feita no cartão da atividade, com «Enviar».</p><ul><li>Se o tempo não for suficiente, ajuste a tarefa (três figuras e sem cor), mas o resultado é enviado na plataforma do mesmo jeito.</li></ul>'],
          ['🔁','Mostrar os trabalhos e entrar no chat do grupo','<p>Mostre rapidamente os trabalhos da aula anterior <b>no início da aula seguinte</b>, se os autores concordarem.</p><ul><li>No encerramento da A1, envie pelo Backoffice o link do <b>chat do grupo</b>: as informações do curso são compartilhadas lá, não por mensagens privadas.</li><li>Se um aluno não puder ou não quiser entrar, não o obrigue; convide-o e registre a situação na avaliação do tutor no Backoffice.</li></ul>']
        ]}
      ]},
      { id:'prep', e:'☑️', title:'Antes de cada aula', blocks:[
        { t:'steps', items:[
          ['Um dia antes da A1','Lembre os alunos de instalar o Blender e envie o link do <a href="https://www.blender.org/download/" target="_blank" rel="noopener">site oficial de download</a>.'],
          ['O seu equipamento, pronto','Se é a sua primeira aula, instale o <b>Screencast Keys</b> e veja como recuperar um projeto se o Blender fechar (os guias estão mais abaixo).'],
          ['15 minutos antes','Entre antes, converse com os alunos que vão chegando e confirme quem já tem o Blender instalado.'],
          ['Compartilhe a tela quando precisar','Comece a chamada com a câmera ligada e sem compartilhar a tela, para se conectar primeiro com o grupo. Confira se você consegue fazer o compartilhamento de tela e se o Blender está pronto.']
        ]}
      ]},
      { id:'req', e:'💻', title:'Requisitos do computador', blocks:[
        { t:'p', html:'Isto é o que o aluno precisa para as aulas de Modelagem 3D. É útil conhecer quando um aluno tem problemas para instalar ou usar o Blender:' },
        { t:'cards', cols:2, items:[
          ['🖥️','Computador e sistema','Desktop ou notebook com <b>Windows 10/11 (64 bits)</b> ou <b>macOS 11 ou posterior</b>. Em Mac com processador Apple: macOS 13 ou posterior.'],
          ['🧠','Memória e processador','<b>8 GB de RAM</b> e um processador de <b>2 núcleos</b>.'],
          ['🎮','Gráficos e disco','Placa de vídeo (pode ser integrada) compatível com <b>OpenGL 3.3</b> e <b>3 GB</b> de espaço livre em disco.'],
          ['🌐','Navegador e conexão','Google Chrome na versão mais recente e internet estável que suporte videochamadas.'],
          ['🎧','Equipamento','Mouse, teclado, webcam e fones de ouvido com microfone.'],
          ['🧊','Programas','<b>Blender</b> e a <b>plataforma Kodland</b>.']
        ]},
        { t:'callout', kind:'tip', e:'💡', html:'Se o Blender não abrir no equipamento de um aluno, siga o que você já viu na A1: confira se ele escolheu a opção certa do cartão (Blender 4.5 LTS em computadores mais antigos) e, se continuar sem funcionar, encaminhe o caso ao suporte técnico numa sala separada.' }
      ]},
      { id:'publish', e:'📤', title:'Entregar o trabalho e o Kodland Sparks', blocks:[
        { t:'p', html:'O Blender salva o projeto como arquivo <b>.blend</b>, mas o que se entrega é uma <b>imagem</b>. Na A1, é o print do <b>Viewport Render</b>. Estes são os passos:' },
        { t:'steps', items:[
          ['Salvar o arquivo .blend','<b>File → Save</b>, com o nome <b>«composição geométrica»</b>. O .blend fica salvo no computador do aluno: é o projeto para continuar trabalhando.'],
          ['Preparar a vista','Desativar o ícone <b>Overlays</b> (no canto superior direito) para esconder a grade, os eixos, a câmera e as luzes.'],
          ['Tirar o print','<b>View → Viewport Render</b>.'],
          ['Salvar a imagem','Na janela do print: <b>Image → Save As</b>, no computador.'],
          ['Enviar a imagem e clicar em «Enviar»','Arrastar a imagem para o campo do cartão «Resultado final» na plataforma Kodland. Sem «Enviar», o trabalho não fica registrado. As tarefas de casa são enviadas do mesmo jeito.']
        ]},
        { t:'callout', kind:'warn', e:'🖼️', html:'<b>A plataforma e o Kodland Sparks recebem imagens, não arquivos .blend.</b> Se um aluno tentar enviar o projeto do Blender, lembre: o .blend fica no computador dele e o que se envia é a imagem.' },
        { t:'p', html:'Os <b>desafios do Sparks</b> fazem parte das tarefas de casa, e os projetos do curso são publicados no <b>Kodland Sparks</b>: o primeiro é o Marble Run, depois do módulo de animação (módulo 4), e no final do curso o portfólio e o projeto final. Treine aqui como se publica um projeto:' },
        { t:'sim', flag:'sparksPublish', src:'sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'guides', e:'🧰', title:'Guias técnicos passo a passo', blocks:[
        { t:'p', html:'Estes são os guias da equipe do curso mencionados na preparação da A1. Abra-os antes da sua primeira aula e deixe-os à mão:' },
        { t:'acc', open:false, items:[
          ['💥','O Blender fechou de repente: como recuperar o projeto',
           `<div class="gsteps">
              <div class="gstep"><p>Abra o Blender de novo e clique em <b>File → Recover → Auto Save…</b></p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/09c55ebe-4562-4020-9a2e-48aa303a0250.png" alt=""></div>
              <div class="gstep"><p>Confira a data e a hora do último trabalho no arquivo, escolha o que você precisa (normalmente o mais recente) e clique em <b>Recover Auto Save</b>.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/a56b01a4-51b6-4657-a841-ea112ee5278e.png" alt=""></div>
              <div class="gstep"><p>O projeto aparece de novo.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/4e823368-0b07-4a40-a7d4-648d7cb51469.png" alt=""></div>
            </div><p>💡 Para não depender da recuperação, lembre os alunos de salvar com frequência com <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>`],
          ['⌨️','Mostrar na tela as teclas e o mouse: Screencast Keys',
           `<p>Com este complemento, os alunos veem cada tecla e cada clique que você faz enquanto demonstra.</p>
            <div class="gsteps">
              <div class="gstep"><p>Abra o Blender e vá em <b>Edit → Preferences</b>. À esquerda, escolha <b>Get Extensions</b> e permita o acesso à base de complementos online: <b>Allow Online Access</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/ef6f7385-e78b-4238-ae2a-ebeb3e9a07f1.jpeg" alt=""></div>
              <div class="gstep"><p>Na busca, encontre <b>Screencast Keys</b> e clique em <b>Install</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/585c4f47-46e6-47cb-8597-bcc790fb1989.jpeg" alt=""></div>
              <div class="gstep"><p>Abra o menu lateral com a setinha da direita ou com a tecla <kbd>N</kbd>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/7eec760a-524e-4184-9782-a2e4a57ba1b2.jpeg" alt=""></div>
              <div class="gstep"><p>Escolha <b>Screencast Keys</b> à direita e marque a primeira caixa. Abaixo, você pode ajustar onde aparecem o mouse e as teclas.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/730548c9-3a74-4300-8212-01b68bc6c37b.jpeg" alt=""></div>
            </div>`],
          ['🌎','Tooltips no idioma do aluno',
           `<p>A interface fica em inglês (as instruções do curso estão em inglês), mas os <b>tooltips</b> podem aparecer no idioma do aluno para facilitar o aprendizado:</p>
            <p><b>Edit → Preferences → Interface → Language</b>: escolha o idioma, ative <b>Translate</b> e marque <b>só Tooltips</b>. Ao passar o mouse sobre uma ferramenta, a ajuda aparece traduzida.</p>`]
        ]}
      ]},
      { id:'trouble', e:'🛠️', title:'Outros casos frequentes', blocks:[
        { t:'acc', open:false, items:[
          ['💻','O Blender não instala ou não roda','Confira se o aluno escolheu a opção certa do cartão: em computadores mais antigos, <a href="https://www.blender.org/releases/4-5/" target="_blank" rel="noopener">Blender 4.5 LTS</a>. Se continuar sem funcionar, encaminhe o caso ao <b>suporte técnico</b> numa sala separada, sem atrasar o grupo.'],
          ['🌐','O Blender abriu em outro idioma','Na primeira janela, deixe o idioma em <b>English</b>: todas as instruções do curso usam a interface em inglês. Se o aluno quiser ajuda no idioma dele, ative só os tooltips (guia acima).'],
          ['🔷','Os objetos aparecem facetados','Botão direito sobre o objeto → <b>Shade Smooth</b> ou <b>Shade Auto Smooth</b>.'],
          ['📍','Os objetos novos aparecem todos no mesmo ponto','Eles aparecem onde está o <b>3D Cursor</b> (o círculo vermelho e branco). Depois de acrescentá-los, é preciso movê-los com <b>G</b> para que não fiquem sobrepostos.'],
          ['🔑','Um aluno não consegue entrar na plataforma','Envie o usuário e a senha dele, que estão no cartão do aluno no Backoffice, pelo chat privado.'],
          ['🔒','O link do Sparks não abre','Provavelmente ele salvou o projeto como <b>Only me</b>: <b>My projects → abrir o projeto → Edit → Public → Publish</b>.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula e vi o vídeo da primeira.','Estou com o Blender pronto, o Screencast Keys instalado e sei como recuperar um projeto.','Na A1, lembrei os alunos de instalar o Blender com um dia de antecedência.'] },
          { h:'🎬 Durante a aula', items:['Mostro primeiro a ferramenta na tela e depois o atalho.','Depois de cada ação importante, peço que me mostrem o resultado na tela.','Não corrijo o trabalho: faço uma pergunta de diagnóstico e dou uma dica.'] },
          { h:'📤 No final da aula', items:['Todos salvaram o .blend e enviaram o print com «Enviar» — nada pelo chat.','Enviei o link do chat do grupo pelo Backoffice.','Anotei quais trabalhos mostrar no início da próxima aula.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'O que os alunos criam na primeira aula?',
      o:['Uma criatura no Sculpt Mode.','A própria composição com pelo menos 5 figuras geométricas, com materiais coloridos.','Uma casa a partir de um cubo.'],
      a:1, e:'A A1 trabalha no Object Mode: uma composição geométrica própria com materiais. A casa a partir de um cubo vem na próxima aula, com o Edit Mode.' },
    { q:'No Object Mode, o que fazem as teclas G, R e S?',
      o:['G move, R gira e S escala; X/Y/Z limitam a ação a um eixo.','G salva, R renderiza e S seleciona.','Trocam entre o Object Mode e o Edit Mode.'],
      a:0, e:'G (grab) move, R gira e S escala. Depois da tecla, X, Y ou Z limitam o movimento a esse eixo.' },
    { ctx:'Na A1, um aluno começa a editar os vértices de um cubo.',
      q:'O que você orienta?',
      o:['Que continue: assim a composição fica mais original.','Que volte ao Object Mode: nesta aula se trabalha com objetos inteiros; editar vértices, arestas e faces vem na próxima aula.','Que apague tudo e comece de novo.'],
      a:1, e:'Na primeira aula o aluno trabalha no Object Mode, sem editar vértices, arestas ou faces.' },
    { ctx:'Faltam poucos minutos e vários alunos não vão conseguir terminar a composição.',
      q:'O que você faz?',
      o:['Reduz a tarefa a três figuras e deixa a cor de lado, e todos enviam o resultado na plataforma.','Diz que terminem em casa e não enviem nada hoje.','Termina você mesmo a composição na sua tela para que copiem.'],
      a:0, e:'As Teacher Notes permitem reduzir a três figuras e deixar a cor de lado, mas o resultado é enviado do mesmo jeito.' },
    { q:'Como você dá feedback sobre a composição?',
      o:['Comparando os trabalhos para motivar o grupo.','Com uma dica útil e específica para melhorar um critério; o aluno decide se a segue.','Corrigindo a composição na sua tela.'],
      a:1, e:'Feedback útil e específico, focado no progresso pessoal de cada aluno, sem comparar trabalhos.' },
    { q:'Segundo o programa do curso, qual é o papel da IA nos módulos 8 e 9?',
      o:['Cria os projetos pelo aluno.','É uma ferramenta: o aluno propõe a tarefa, obtém uma ideia, conceito ou textura, aperfeiçoa no Blender e decide por conta própria quais serviços usar.','Substitui a modelagem no Blender.'],
      a:1, e:'O curso ensina uma abordagem para trabalhar com IA; a ferramenta específica é escolhida pelo aluno e o resultado é aperfeiçoado no Blender.' }
  ],
  m2:[
    { ctx:'Na A1, o Blender não abre no computador de um aluno.',
      q:'O que você faz?',
      o:['Para o grupo até resolver.','Confere se ele escolheu a opção certa do cartão e, se continuar sem funcionar, encaminha o caso ao suporte técnico numa sala separada enquanto o grupo continua.','Pede que ele volte na próxima aula.'],
      a:1, e:'Os problemas individuais não atrasam o grupo. Em computadores antigos usa-se o Blender 4.5 LTS, e o suporte técnico resolve os casos que continuam.' },
    { ctx:'No final da aula, um aluno manda o print da composição pelo chat.',
      q:'O que você responde?',
      o:['Agradece e salva você mesmo a imagem no seu computador para ver depois.','Agradece e, com gentileza, pede que ele envie a imagem também no cartão da atividade e clique em «Enviar», para que o trabalho fique registrado.','Diz que ele não precisa se preocupar, que nesta aula não é preciso entregar.'],
      a:1, e:'Agradecer o trabalho e orientar com gentileza: a entrega só fica registrada no cartão da atividade, com «Enviar». Por isso não se aceitam imagens pelo chat nem se dispensa o trabalho.' },
    { q:'Como se faz o print do resultado final no Blender?',
      o:['Com a tecla Print Screen, com todos os painéis visíveis.','Desativando Overlays, depois View → Viewport Render e salvando a imagem com Image → Save As.','Salvando o arquivo .blend e enviando-o.'],
      a:1, e:'Sem Overlays, a grade, os eixos e as luzes ficam escondidos; o Viewport Render cria a imagem e o Image → Save As a salva.' },
    { q:'Como você apresenta uma ferramenta nova do Blender na primeira aula?',
      o:['Só com o atalho, porque é obrigatório desde o início.','Primeiro a ferramenta na tela e depois o atalho; se o aluno achar o menu lateral mais confortável, pode usá-lo.','Só com uma explicação teórica.'],
      a:1, e:'Primeiro o que se vê na tela; depois o atalho. Na primeira aula os atalhos não são obrigatórios.' },
    { ctx:'Um aluno quer enviar na plataforma o arquivo «composição geométrica.blend».',
      q:'O que você diz?',
      o:['Que envie assim, é o projeto completo.','Que o .blend fica no computador dele e que envie o print (Viewport Render).','Que mande compactado pelo chat.'],
      a:1, e:'A plataforma e o Kodland Sparks recebem imagens. O .blend é o projeto de trabalho e fica salvo no computador.' },
    { q:'Segundo os requisitos do curso, quanta memória RAM o computador do aluno precisa ter?',
      o:['4 GB.','8 GB.','32 GB.'],
      a:1, e:'Os requisitos são 8 GB de RAM, um processador de 2 núcleos, uma placa de vídeo compatível com OpenGL 3.3 e 3 GB livres em disco.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Módulos concluídos!',
  html: `<p>Você está quase lá! Volte à página da formação no LMS, onde você acessou esta formação. O teste DST está logo abaixo da formação.</p>
    <p>👉 <b>Você precisa fazer e passar no teste DST para que a formação seja considerada concluída.</b> Se você não fizer o DST, a formação vai continuar incompleta e pode expirar.</p>
    <p>A nota mínima para passar é <b>80%</b>.</p>
    <p>Boa sorte! ❤️</p>`,
  nexts: [
    ['📒', '<b>Antes de cada aula:</b> leia todas as Teacher Notes e deixe os guias técnicos à mão.'],
    ['📥', '<b>A1:</b> instalação com as opções do cartão, sem atrasar o grupo.'],
    ['📤', '<b>Entregas:</b> sempre na plataforma com «Enviar», nunca pelo chat.'],
    ['💬', '<b>Encerramento da A1:</b> o link do chat do grupo, pelo Backoffice.']
  ]
};
