/* ============================================================
   EM course training · 3D Modeling (Modelagem 3D) [2203 · LatAm: 2137] · PORTUGUESE (Brazil)
   Spanish version: content-es.js (Backoffice 2137).
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
COURSE.code = '2203';                     // Backoffice course id (Brazil). Spanish version: 2137
COURSE.title = 'Modelagem 3D';
COURSE.color = '#14B8A6';

COURSE.home = {
  kicker: '🎓 Formação de curso · Modelagem 3D',
  title: 'Modelagem <span class="hl">3D</span>',
  lead: 'O estúdio 3D, para alunos de 13–17 anos: no Blender, eles vão de esculpir a primeira criatura a modelar, texturizar e renderizar o próprio robô. Dois módulos: o conteúdo do curso e a parte técnica das aulas.',
  facts: [
    ['🧑‍💻', '<b>No seu ritmo.</b> O progresso fica salvo neste navegador. Cada módulo termina com uma verificação curta.'],
    ['⚡', '<b>Prática incluída.</b> Uma simulação do Kodland Sparks para treinar a publicação de projetos e os problemas mais comuns.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Antes de começar:</b> faça primeiro a <b>formação principal do Novo Modelo Educacional (EM)</b>. Esta formação do curso vem depois e parte do que você já viu lá: o Backoffice e as Teacher Notes, o Classroom com o Follow Mode, o tour pelo Kodland Sparks e a qualidade da aula.' },
  { kind:'warn', e:'🔄', html:'<b>O conteúdo das aulas no Backoffice vai sendo atualizado.</b> Com o feedback de alunos e tutores, as aulas estão sempre sendo melhoradas. Não se preocupe: quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  { id:'m1', n:1, e:'🧊', color:'#14B8A6', title:'O conteúdo do curso',
    desc:'Como a Modelagem 3D é ensinada no novo modelo, as 4 primeiras aulas e as ferramentas principais do Blender.',
    obj:'Prepare-se para dar as primeiras aulas de Modelagem 3D, em que alunos de 13–17 anos criam no Blender os primeiros modelos: uma criatura esculpida, uma composição, uma casa e o próprio robô.',
    offer:[['🎨','Conhecer o curso e a forma de trabalho.'],['📖','Saber o que acontece em cada uma das 4 primeiras aulas.'],['⌨️','Revisar as ferramentas e os atalhos principais do Blender.'],['📘','Revisar as aulas e as Teacher Notes no Backoffice.']],
    sections:[
      { id:'ov', e:'🎨', title:'O curso', blocks:[
        { t:'meta', items:[['🧑','Idade','13–17 anos'],['⏱️','Aula','90 min'],['📚','Programa','40 aulas'],['🧊','Ferramenta','Blender']] },
        { t:'p', html:'Em cada aula o aluno assume o papel de <b>artista 3D</b> e recebe uma missão: transformar uma forma simples no próprio personagem, transformar figuras geométricas numa cena, fazer de um cubo uma casa. O primeiro módulo termina com o <b>primeiro projeto 3D original</b>: um robô modelado, com vários materiais e um render final.' },
        { t:'p', html:'O curso percorre um caminho claro: dos primeiros projetos simples até um <b>projeto pessoal e independente</b> no último módulo. No caminho, os alunos conhecem diferentes áreas profissionais do 3D e o papel da IA no trabalho atual de um artista 3D.' },
        { t:'trio', items:[
          ['🎬','Primeiro o resultado','A aula começa mostrando o resultado final e os critérios de sucesso; depois vêm demonstrações curtas.'],
          ['🖱️','Ação antes da teoria','Você mostra uma ação, o aluno repete na tela dele e mostra o resultado — não só o que entendeu.'],
          ['🧩','O erro faz parte do processo','Primeiro uma pergunta de diagnóstico, depois uma dica curta. Você nunca corrige o modelo pelo aluno.']
        ]},
        { t:'callout', kind:'good', e:'🤖', html:'Na A4, o <b>Sparks AI</b> dá um primeiro feedback sobre o robô, como um usuário de teste. <b>Ele não cria o projeto nem o avalia:</b> o aluno decide se aceita, modifica ou rejeita a sugestão, e justifica. A IA propõe, o autor decide.' }
      ]},
      { id:'les', e:'📖', title:'As 4 primeiras aulas', blocks:[
        { t:'p', html:'O primeiro módulo constrói as bases do Blender, uma por aula, até o robô final. Abra cada aula:' },
        { t:'lessons', key:'m1', items:[
          { tab:'A1', e:'🐲', h:'Aula 1 — Escultura digital: introdução à modelagem 3D', p:'Primeira aula do programa. Os alunos conhecem o ambiente de estudo (Classroom e a plataforma Kodland), instalam o Blender, aprendem o básico do Sculpt Mode e criam o primeiro modelo: uma criatura fantástica ou uma cabeça estilizada.',
            acc:[['📚','O que você precisa saber','<ul><li>Navegação básica no Blender, com mouse e com touchpad.</li><li>Pincéis de escultura: <b>Clay</b> acrescenta volume; <b>Grab</b> e <b>Elastic Grab</b> esticam a forma. <b>Strength</b> e <b>Radius</b>; <b>Ctrl</b> ou o modo «−» inverte o pincel.</li><li>O modo <b>Paint</b> para colorir o modelo.</li><li><a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a>, o programa alternativo que funciona no navegador se o Blender não funcionar.</li></ul>'],
                 ['⏱️','Tempos (90 min)','<ul><li><b>Introdução (20 min):</b> conexão, apresentações, boas-vindas ao curso, acordos do estúdio 3D.</li><li><b>Parte principal (60 min):</b> plataforma Kodland e instalação do Blender (13), navegação e pincéis (10), criar a criatura (17), cor (10), resultado final (10).</li><li><b>Encerramento (10 min):</b> revisão, reflexão, missão para casa, prévia da próxima aula.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Orienta-se no Classroom e na plataforma Kodland, faz login e entrega uma atividade.</li><li>Conhece o princípio básico do Sculpt Mode.</li><li>Teve a primeira experiência criando um modelo 3D de forma independente.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Ajude os alunos a chegar rápido a um <b>primeiro resultado</b>: não sobrecarregue a aula com teoria. Primeiro você mostra, depois o aluno repete.</li><li>Ajude a escolher uma estratégia inicial, mas <b>não imponha um design</b> para a criatura.</li><li>Encerre ajudando cada aluno a reconhecer uma conquista concreta.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Um dia antes, lembre os alunos de instalar o Blender e envie o <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de download do Blender 4.5</a>.</li><li>Entre 15 minutos antes e confirme quem já tem o Blender instalado.</li><li>Deixe a interface do Blender em <b>English</b>: as instruções do curso estão em inglês.</li><li>Cuidado com <b>Subdivision Surface</b> e <b>Remesh</b>: detalhe demais deixa o Blender lento.</li><li>Confirme que todos clicaram em <b>«Enviar»</b> na atividade.</li></ul>']] },
          { tab:'A2', e:'🎨', h:'Aula 2 — Introdução ao Object Mode', p:'Os alunos trabalham no Object Mode: acrescentam formas primitivas e as movem, giram e escalam com G/R/S e os eixos X/Y/Z. Criam a própria composição com pelo menos 7 objetos, aplicam materiais coloridos e fazem o primeiro render.',
            acc:[['📚','O que você precisa saber','<ul><li>Os três eixos: X, Y e <b>Z (para cima e para baixo no Blender)</b>.</li><li><b>G</b> move, <b>R</b> gira, <b>S</b> escala; <b>X/Y/Z</b> limitam a ação a um eixo.</li><li>Materiais simples, luz, câmera e cor do ambiente.</li><li>O que é um render e como fazer.</li></ul>'],
                 ['⏱️','Tempos (90 min)','<ul><li><b>Introdução (10 min).</b></li><li><b>Parte principal:</b> o que é 3D e G/R/S (7), prática de Object Mode (27: 10 de demonstração e 17 de trabalho independente), pausa ativa (5), materiais, luz e render (25), mostrar e entregar o render e comunidade Kodland (6).</li><li><b>Encerramento (10 min).</b></li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Uma composição com pelo menos 7 objetos, transformados com G/R/S e X/Y/Z.</li><li>Materiais coloridos, câmera, luz e cor do ambiente configurados.</li><li>Arquivo <b>.blend</b> e primeiro render salvos, e o resultado enviado na plataforma.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Primeiro um experimento curto com G/R/S; depois, a composição própria.</li><li>Que <b>não seja uma cópia do exemplo</b>: o tema, as formas e a paleta são escolha do aluno.</li><li>Acompanhe os momentos-chave: depois de G/R/S, ao terminar a composição, depois dos materiais, antes do render e ao enviá-lo.</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Incentive o uso dos <b>atalhos de teclado</b> desde o começo, não das ferramentas do painel T.</li><li>Ainda se trabalha no Object Mode: nada de editar vértices, arestas ou faces.</li><li>Antes do render, confira câmera, enquadramento, luz, materiais e se o objeto principal aparece.</li><li>Se os alunos mencionarem restrições de acesso ao Discord, responda só de acordo com as normas aprovadas; <b>nunca sugira uma VPN</b>.</li></ul>']] },
          { tab:'A3', e:'🏠', h:'Aula 3 — Modelagem com Edit Mode', p:'Os alunos passam de trabalhar com objetos a editar a forma deles: entendem do que é feita uma malha, trabalham com vértices, arestas e faces, dominam Extrude, Inset e Loop Cut e transformam um cubo na própria casa.',
            acc:[['📚','O que você precisa saber','<ul><li>A malha: vértices, arestas e faces (um cubo tem 8 vértices, 12 arestas e 6 faces).</li><li>Atalhos: <b>Tab</b> (trocar de modo), <b>1/2/3</b> (vértice, aresta, face), <b>G/R/S</b>, <b>E</b> (Extrude), <b>I</b> (Inset), <b>Ctrl + R</b> (Loop Cut).</li><li>Nos vértices só é possível mover; nas arestas e faces também girar e escalar.</li></ul>'],
                 ['⏱️','Tempos (90 min)','<ul><li><b>Introdução (11 min).</b></li><li><b>Parte principal:</b> malha e Edit Mode (5), prática no Edit Mode (10), ferramentas e a mesa (20), pausa ativa (5), a casa, autoavaliação e entrega (27).</li><li><b>Encerramento (12 min):</b> apresentação das casas, resumo, desafio do Sparks para casa, prévia da próxima aula.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>Diferencia vértices, arestas e faces.</li><li>Usa o Edit Mode, Extrude, Inset, Loop Cut e os atalhos para modelar uma casa a partir de um cubo.</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>Construa primeiro a compreensão da malha; não passe para a modelagem sem ela.</li><li>Na mesa, os alunos seguem os seus passos um por um: faça uma pausa depois de cada passo.</li><li>Dê feedback com a fórmula <b>fato → critério → próximo passo</b>, sem comparar modelos.</li><li>Se o grupo estiver lento, simplifique a casa (sem piso, uma janela mais simples).</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Confira se não confundem Object Mode e Edit Mode, e se modificam <b>uma única malha</b>, sem cubos soltos.</li><li><b>Vértices duplicados</b> (Extrude cancelado com o botão direito): selecionar tudo no Edit Mode e <b>M → by Distance</b>.</li><li>Lembre de salvar antes de mudanças grandes e de usar <b>Ctrl + Z</b>.</li><li>Apresente o <b>desafio do Sparks</b> para casa (um OVNI a partir de um cilindro) e o botão «Revisar», sem fazê-lo em aula.</li></ul>']] },
          { tab:'A4', e:'🤖', h:'Aula 4 — Crie um robô', p:'Encerramento do módulo. Os alunos revisam o Object Mode e o Edit Mode, criam um robô original, aplicam vários materiais a um mesmo objeto, recebem o feedback do Sparks AI e preparam o render final no Eevee, com duas versões: Robot_before e Robot_after.',
            acc:[['📚','O que você precisa saber','<ul><li>Cada parte do robô é um objeto e é editada separadamente: Object Mode → selecionar → <b>Tab</b>.</li><li>Ferramentas úteis: separar objetos, selecionar faces (Shift, Alt, Ctrl + I), <b>Subdivide</b>, <b>Bevel (Ctrl + B)</b>, espelhar e simetria.</li><li><b>Assign</b> para aplicar vários materiais a um mesmo objeto; materiais da biblioteca e luminosos.</li><li>Como usar o Sparks AI e salvar versões com <b>File → Save As</b>.</li></ul>'],
                 ['⏱️','Tempos (90 min)','<ul><li><b>Introdução (14 min):</b> inclui a carreira profissional em 3D.</li><li><b>Parte principal:</b> planejar e modelar (15), ferramentas úteis (20), vários materiais (12), Sparks AI e render final (18).</li><li><b>Encerramento (11 min):</b> antes e depois, revisão, atividade para casa e próximo módulo.</li></ul>'],
                 ['🎯','Resultado-chave','<ul><li>O robô tem uma silhueta clara e pelo menos três objetos.</li><li>Usa de propósito pelo menos duas técnicas de edição aprendidas.</li><li>Pelo menos um objeto tem dois materiais diferentes.</li><li>O .blend e o render no Eevee são salvos (ou, se realmente não houver tempo, uma captura do Material Preview).</li></ul>'],
                 ['🧑‍🏫','O seu papel','<ul><li>O aluno planeja e trabalha sozinho; você intervém quando ele pede ou depois de ele tentar.</li><li>Ajude com perguntas: <i>«Qual é o próximo passo do seu plano?»</i>, <i>«Que ferramenta ajudaria aqui?»</i>.</li><li>Feedback: <b>ponto forte → um critério para melhorar → uma ação concreta</b>.</li><li>Encerre mostrando o que foi conquistado no módulo e desperte o interesse pelo próximo (os modificadores).</li></ul>'],
                 ['⚙️','Aspectos técnicos','<ul><li>Antes da aula, confira se você consegue entrar na sua conta do Sparks.</li><li>Não exija todas as ferramentas mostradas: o essencial é Extrude, Inset e Loop Cut.</li><li>Confira se há dois arquivos: <b>Robot_before.blend</b> e <b>Robot_after.blend</b>.</li><li>Reserve tempo no final para <b>publicar no Sparks a imagem do render</b> (PNG ou JPG). O arquivo .blend fica salvo no computador do aluno.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'A primeira Teacher Note de cada aula tem o plano completo: missão, objetivo, resultado-chave, tempos de cada cartão e pontos de atenção. <b>Leia todas as Teacher Notes antes da aula.</b> Os recursos foram criados com o Blender 4.5.3; se você notar uma diferença importante na versão atual, avise a equipe.' }
      ]},
      { id:'tools', e:'⌨️', title:'Ferramentas e atalhos principais do Blender', blocks:[
        { t:'p', html:'Estas são as ferramentas que aparecem nas quatro primeiras aulas. Deixe-as à mão nas suas primeiras aulas:' },
        { t:'cards', cols:2, items:[
          ['🖌️','Sculpt Mode · A1','<b>Clay</b> acrescenta volume, <b>Grab</b> e <b>Elastic Grab</b> esticam. <b>Strength</b> e <b>Radius</b> controlam a força e o tamanho; <b>Ctrl</b> inverte o pincel.'],
          ['📦','Object Mode · A2','<b>G</b> mover, <b>R</b> girar, <b>S</b> escalar. Depois da tecla, <b>X/Y/Z</b> limita a ação a um eixo.'],
          ['🧩','Edit Mode · A3','<b>Tab</b> troca de modo; <b>1/2/3</b> escolhe vértice, aresta ou face; <b>E</b> Extrude, <b>I</b> Inset, <b>Ctrl + R</b> Loop Cut.'],
          ['🛠️','Mais ferramentas · A4','<b>Ctrl + B</b> Bevel, <b>Subdivide</b>, simetria, <b>Assign</b> para materiais por partes e <b>File → Save As</b> para salvar versões.'],
          ['🧹','Consertar a malha','Vértices duplicados: selecionar tudo no Edit Mode e <b>M → by Distance</b>.'],
          ['↩️','Desfazer','<b>Ctrl + Z</b> (Mac: <b>Cmd + Z</b>). Os erros fazem parte da aprendizagem.']
        ]},
        { t:'callout', kind:'tip', e:'📺', html:'Se esta é a sua primeira aula de Modelagem 3D, instale o <b>Screencast Keys</b>: ele mostra na tela as teclas que você pressiona, e assim os alunos veem cada atalho enquanto você demonstra. No Módulo 2 você encontra o passo a passo.' }
      ]},
      { id:'proj', e:'🐲', title:'Exemplos de projetos', blocks:[
        { t:'p', html:'Na primeira missão, cada aluno transforma uma forma simples na <b>própria criatura</b>. Estas criaturas servem de inspiração: mostram como uma silhueta clara, poucos detalhes e a cor dão personalidade a um modelo.' },
        { t:'figure', src:'Image/1.jpg', caption:'Exemplos de criaturas 3D para inspirar a primeira missão (A1). O importante não é copiar o estilo, e sim que a forma principal seja reconhecível e que a criatura tenha personalidade própria.' },
        { t:'callout', kind:'tip', e:'🎯', html:'Use exemplos assim no início da A1 para mostrar o resultado antes de explicar. Peça aos alunos que digam o que torna cada criatura reconhecível: a silhueta, um detalhe ou a cor.' }
      ]},
      { id:'bo', e:'📘', title:'Revise as aulas no Backoffice', blocks:[
        { t:'p', html:'Antes da verificação, abra o curso no Backoffice e leia as quatro aulas no seu ritmo — os cartões de atividade e as Teacher Notes estão todos lá. Não há tempo limite.' },
        { t:'link', href:'https://bo.kodland.org/courses/2203', e:'📘', title:'Abrir o curso no Backoffice', small:'[2203] Modelagem 3D — as aulas e as Teacher Notes' },
        { t:'callout', kind:'warn', e:'🔄', html:'O conteúdo das aulas no Backoffice vai sendo atualizado com o feedback de alunos e tutores. Quando houver mudanças, você será avisado com antecedência para preparar a aula.' }
      ]}
    ]},

  { id:'m2', n:2, e:'⚙️', color:'#F03D9E', title:'A parte técnica das aulas',
    desc:'A instalação da A1, entregas sem exceções, a publicação no Sparks e os problemas técnicos mais comuns.',
    obj:'Saiba o que faz as aulas de Modelagem 3D funcionarem tecnicamente: uma instalação guiada na A1, entregas de todos os alunos — nunca pelo chat —, a publicação no Kodland Sparks e as soluções para os problemas mais comuns do Blender.',
    needs:['sparksPublish'],
    offer:[['📥','Guiar a instalação da A1 sem atrasar o grupo.'],['📤','Garantir que todos entreguem o trabalho, sempre na plataforma.'],['⚡','Publicar no Kodland Sparks no final da A4.'],['🛠️','Resolver os problemas técnicos mais comuns do Blender.']],
    sections:[
      { id:'focus', e:'🎯', title:'Os 5 pontos que garantem o sucesso', blocks:[
        { t:'p', html:'Estes são os pontos de foco definidos pelo time de produto para a Modelagem 3D. Abra cada um:' },
        { t:'acc', items:[
          ['📥','A1: a instalação, com os cenários do cartão','<p>Guie a instalação seguindo <b>os cenários do cartão</b>: Windows, Mac ou computador com poucos recursos.</p><ul><li>Os alunos que já estão prontos <b>podem começar a trabalhar sem esperar</b> o grupo.</li><li>Não atrase o grupo por causa de um problema individual: se o Blender está baixando, o aluno segue com o grupo e termina a instalação depois.</li><li>Para instalar, o aluno usa o <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de download do Blender 4.5</a>.</li><li>Se não funcionar, use o <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a> (veja o guia abaixo) e, se precisar, passe a instalação ao suporte técnico numa sala separada.</li></ul>'],
          ['🖼️','Todos terminam e entregam o trabalho da A1','<p>Garanta que <b>cada aluno termine o primeiro trabalho e entregue a imagem enquanto o programa ainda está aberto</b>.</p><ul><li>Confirme que clicaram em <b>«Enviar»</b> na atividade.</li><li>Se o programa fechar antes de salvar ou exportar, o trabalho se perde: veja com eles como recuperar um projeto se o Blender fechar inesperadamente.</li></ul>'],
          ['🖱️','Primeiro os botões, depois os atalhos','<p>Mostre primeiro os <b>botões na tela</b> e depois os <b>atalhos de teclado</b>.</p><ul><li>Assim ninguém se perde no começo, e os atalhos aceleram o trabalho depois.</li><li>As Teacher Notes da A2 e da A3 pedem para incentivar os atalhos: apresente-os sobre o botão que o aluno já encontrou.</li></ul>'],
          ['🚫','Sem exceções nas entregas, nunca pelo chat','<p><b>Não dispense o projeto nem aceite imagens pelo chat.</b> A entrega é feita no cartão da atividade, com «Enviar», e o projeto final é publicado no Kodland Sparks.</p><ul><li>Se não deu tempo de renderizar na A4, como exceção o aluno pode enviar uma captura do <b>Material Preview</b> — mas na plataforma, não no chat.</li></ul>'],
          ['🔁','Mostrar os trabalhos e publicar no Sparks','<p>Mostre rapidamente os trabalhos da aula anterior <b>no início da aula seguinte</b>, se os autores concordarem.</p><ul><li>Reserve tempo <b>no final da A4 para publicar no Sparks</b>: o robô é o primeiro projeto original do portfólio.</li></ul>']
        ]}
      ]},
      { id:'prep', e:'☑️', title:'Antes de cada aula', blocks:[
        { t:'steps', items:[
          ['Um dia antes da A1','Lembre os alunos de instalar o Blender e envie o <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de download do Blender 4.5</a>.'],
          ['O seu equipamento, pronto','Se é a sua primeira aula, instale o <b>Screencast Keys</b>, conheça o <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a> e veja como recuperar um projeto se o Blender fechar (os guias estão mais abaixo). Na A4, confira se você consegue entrar na sua conta do Sparks.'],
          ['15 minutos antes','Entre antes, converse com os alunos que vão chegando e confirme quem já tem o Blender instalado.'],
          ['Compartilhe a tela quando precisar','Comece a chamada com a câmera ligada e sem compartilhar a tela, para se conectar primeiro com o grupo. Confira se você consegue compartilhar a tela e se o Blender está pronto.']
        ]}
      ]},
      { id:'publish', e:'📤', title:'Entregar e publicar no Kodland Sparks', blocks:[
        { t:'p', html:'O Blender salva o projeto como arquivo <b>.blend</b>, mas o que se entrega e se publica é uma <b>imagem</b>: o render em formato <b>PNG ou JPG</b>. Estes são os passos de cada entrega:' },
        { t:'steps', items:[
          ['Salvar o arquivo .blend','<b>File → Save</b> antes de mudanças grandes e no final. Na A4, duas versões com <b>File → Save As</b>: <b>Robot_before</b> e <b>Robot_after</b>. O .blend fica salvo no computador do aluno: é o projeto para continuar trabalhando.'],
          ['Fazer o render','<b>Render → Render Image</b> (ou <kbd>F12</kbd>). Confira se o objeto principal aparece, se o enquadramento não corta nada importante e se as formas são reconhecíveis.'],
          ['Salvar o render como imagem','Na janela do render: <b>Image → Save As</b>, em formato <b>PNG ou JPG</b>, com um nome claro (por exemplo, <b>Robot_after</b>). Essa imagem é a que se envia.'],
          ['Enviar a imagem e clicar em «Enviar»','No cartão da atividade da plataforma Kodland. Sem «Enviar», o trabalho não fica registrado.'],
          ['No Kodland Sparks: sempre uma imagem','No desafio da A3 e com o Sparks AI na A4, o aluno anexa a <b>imagem PNG ou JPG</b>, não o .blend. Ao publicar o projeto final, escolhe <b>Public</b>, ativa <b>Request feedback</b> e envia o link no cartão da aula.']
        ]},
        { t:'callout', kind:'warn', e:'🖼️', html:'<b>O Sparks não recebe arquivos .blend.</b> Se um aluno tentar enviar o projeto do Blender, lembre: o .blend fica no computador dele e para o Sparks vai a imagem do render.' },
        { t:'sim', flag:'sparksPublish', src:'../sparks-publish/Sparks_Publish.html', e:'⚡', badge:'Simulação', title:'Publicar no Kodland Sparks', text:'Uma réplica do Kodland Sparks: você publica um projeto como uma aluna, conhece as três opções de visibilidade e resolve os dois problemas mais comuns. Cerca de 5 minutos. A verificação do módulo é liberada quando você termina.' }
      ]},
      { id:'guides', e:'🧰', title:'Guias técnicos passo a passo', blocks:[
        { t:'p', html:'Estes são os guias da equipe do curso para os problemas que mais se repetem em aula. Abra-os antes da sua primeira aula e deixe-os à mão:' },
        { t:'acc', open:false, items:[
          ['💥','O Blender fechou de repente: como recuperar o projeto',
           `<div class="gsteps">
              <div class="gstep"><p>Abra o Blender de novo e clique em <b>File → Recover → Auto Save…</b></p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/09c55ebe-4562-4020-9a2e-48aa303a0250.png" alt=""></div>
              <div class="gstep"><p>Confira a data e a hora do último trabalho no arquivo, escolha o que você precisa (normalmente o mais recente) e clique em <b>Recover Auto Save</b>.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/a56b01a4-51b6-4657-a841-ea112ee5278e.png" alt=""></div>
              <div class="gstep"><p>O projeto aparece de novo.</p><img class="gimg" loading="lazy" src="how-to-recover-a-project-if-blender-has-crashed/attachments/4e823368-0b07-4a40-a7d4-648d7cb51469.png" alt=""></div>
            </div><p>💡 Para não depender da recuperação, lembre os alunos de salvar com frequência com <kbd>Ctrl</kbd> + <kbd>S</kbd>.</p>`],
          ['🖌️','Programa reserva: SculptGL (se o Blender não instalar na A1)',
           `<p>Se um aluno não conseguir instalar o Blender, na primeira aula ele pode usar o <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a>, que funciona no navegador.</p>
            <div class="gsteps">
              <div class="gstep"><p>Dá para mudar o idioma no topo (mas <b>não use a tradução automática</b> do navegador).</p><img class="gimg" loading="lazy" src="backup-sculpting-programme/attachments/be343c76-e4b5-47be-8cba-d2fc7800e6a5.png" alt=""></div>
              <div class="gstep"><p><b>Botão direito</b> do mouse: girar em volta do modelo. <b>Botão do meio</b>: deslocar a vista.</p></div>
              <div class="gstep"><p>Todos os pincéis ficam à direita, no menu <b>Sculpting &amp; Painting</b>, com os principais do Blender (<b>Brush</b> é o pincel normal). <b>Radius</b> funciona como no Blender; <b>Intensity</b> = Strength; <b>Negative</b> = o modo −/+. A <b>simetria</b> é ativada abaixo das configurações do pincel.</p><video class="gimg" controls preload="none" src="backup-sculpting-programme/attachments/45c73c0f-5998-432f-92c9-6df587a82d11.mp4"></video></div>
              <div class="gstep"><p>Para pintar, use a ferramenta <b>Paint</b>. Se alguém quiser pintar exatamente de branco: <b>Rendering → Matcap → White</b>.</p><video class="gimg" controls preload="none" src="backup-sculpting-programme/attachments/97728cf6-66a8-4739-acdd-a575a22ca33f.mp4"></video></div>
              <div class="gstep"><p>Para salvar o projeto: <b>File → Save .sgl</b>.</p><img class="gimg" loading="lazy" src="backup-sculpting-programme/attachments/8aa0f08b-8b76-4a50-ab11-22e28dce16ea.png" alt=""></div>
              <div class="gstep"><p>Para abrir um projeto baixado: <b>Scene → Clear Scene</b> e depois <b>File → Add</b>.</p></div>
            </div>`],
          ['⌨️','Mostrar na tela as teclas e o mouse: Screencast Keys',
           `<p>Com este complemento, os alunos veem cada tecla e cada clique que você faz enquanto demonstra.</p>
            <div class="gsteps">
              <div class="gstep"><p>Abra o Blender e vá em <b>Edit → Preferences</b>. À esquerda, escolha <b>Get Extensions</b> e permita o acesso à base de complementos online: <b>Allow Online Access</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/ef6f7385-e78b-4238-ae2a-ebeb3e9a07f1.jpeg" alt=""></div>
              <div class="gstep"><p>Na busca, encontre <b>Screencast Keys</b> e clique em <b>Install</b>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/585c4f47-46e6-47cb-8597-bcc790fb1989.jpeg" alt=""></div>
              <div class="gstep"><p>Abra o menu lateral com a setinha da direita ou com a tecla <kbd>N</kbd>.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/7eec760a-524e-4184-9782-a2e4a57ba1b2.jpeg" alt=""></div>
              <div class="gstep"><p>Escolha <b>Screencast Keys</b> à direita e marque a primeira caixa. Abaixo, você pode ajustar onde aparecem o mouse e as teclas.</p><img class="gimg" loading="lazy" src="how-to-display-pressed-keyboard-and-mouse-keys/attachments/730548c9-3a74-4300-8212-01b68bc6c37b.jpeg" alt=""></div>
            </div>`],
          ['🐢','O computador é lento: otimizar o render',
           `<p>Se o render no <b>Cycles</b> demora demais num computador com poucos recursos:</p>
            <ul><li><b>Output:</b> resolução em <b>50%</b> e <b>RGB</b> em vez de RGBA.</li>
              <li><b>Render:</b> escolha <b>GPU</b> (a placa de vídeo costuma ser mais rápida). Se a placa for muito fraca, deixe <b>CPU</b>; se não tiver certeza, peça ao aluno para comparar o tempo de render com as duas opções. Reduza os <b>Samples</b> para <b>64</b> no Render e ative o <b>Denoise</b>.</li>
              <li><b>Light Paths:</b> total de rebatidas em <b>6</b> e todas as outras em <b>2</b>. Desative as duas opções de <b>Caustics</b>.</li></ul>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/bfd40269-104f-489f-8733-472276188140.png" alt="">
            <p>Na primeira vez que você escolhe GPU, ela pode aparecer inativa. Vá em <b>Preferences</b> e escolha <b>CUDA</b> em vez de None se a placa for NVIDIA (a maioria dos casos), ou <b>HIP</b> se for AMD. Se a placa não renderizar direito, volte para None e use CPU: o processador renderiza mais devagar, mas de forma confiável.</p>
            <video class="gimg" controls preload="none" src="tips-common-mistakes-and-how-to-fix-them/attachments/40b7beb8-f0ee-4cce-8880-c2df6fcbb5ef.mp4"></video>
            <p>Durante a modelagem, o excesso de detalhe com <b>Subdivision Surface</b> ou <b>Remesh</b> também deixa o Blender lento: peça para reduzir.</p>`],
          ['✂️','O Loop Cut não atravessa um polígono (N-gon)',
           `<p>Acontece principalmente quando o aluno usa a ferramenta <b>Knife</b>: qualquer polígono com mais de 4 vértices pode dar problema.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/aa704153-4ce2-40ff-ac3b-c5b4270cbc49.png" alt="">
            <p>Aqui, uma única linha quebrada criou três pentágonos, que precisam voltar a ser quadriláteros. Limite o uso da Knife e lembre os alunos de não substituir o Loop Cut por ela.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/259080b0-4556-4eb1-a072-02795fe31458.png" alt="">
            <p><b>Solução 1:</b> apague a linha problemática com <kbd>X</kbd> → <b>Dissolve Edges</b> e faça um corte correto.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/abc9f8d2-e8e1-4260-aa1c-bc58eb8e7fa2.png" alt="">
            <p><b>Solução 2:</b> use a Knife (<kbd>K</kbd>) para consertar a geometria. Só funciona se a geometria for simples.</p>`],
          ['👻','Vértices duplicados depois do Extrude',
           `<p>Ao usar o <b>Extrude</b> e cancelá-lo com o botão direito, podem ficar vértices extras no mesmo lugar dos visíveis, por isso eles não aparecem. Atrapalham a modelagem, e modificadores como <b>Subdivision Surface</b> e <b>Bevel</b> podem não funcionar direito.</p>
            <p>Solução: selecione tudo no Edit Mode e use <kbd>M</kbd> → <b>by Distance</b>. Isso une os vértices próximos e elimina os duplicados.</p>`],
          ['🌎','Tooltips no idioma do aluno',
           `<p>A interface fica em inglês (as instruções do curso estão em inglês), mas os <b>tooltips</b> podem aparecer no idioma do aluno para facilitar o aprendizado:</p>
            <p><b>Edit → Preferences → Interface → Language</b>: escolha o idioma, ative <b>Translate</b> e marque <b>só Tooltips</b>. Ao passar o mouse sobre uma ferramenta, a ajuda aparece traduzida.</p>`],
          ['🔭','Mais adiante no curso: Array, Simple Deform e simulações',
           `<p><b>Simple Deform + Array:</b> a combinação só funciona bem se as cópias estiverem no eixo <b>X</b>. Se o aluno já as colocou no <b>Y</b>: passe o valor de Factor Y para Factor X e gire o objeto 90° em Z no Edit Mode, ou gire-o 90° no Object Mode (vista de cima) e aplique a rotação com <kbd>Ctrl</kbd> + <kbd>A</kbd> → Rotation.</p>
            <p><b>A simulação para no quadro 250:</b> as simulações de física têm um cache de 250 quadros por padrão. Para animações mais longas, aumente os quadros do cache: em Cloth e Soft Body, nas configurações de física; em Rigid Body, em <b>World Settings → Rigid Body World</b>; em fluidos e fumaça, nas configurações do objeto <b>Domain</b>.</p>
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/bfa0ab9e-ac4a-4ecd-bf50-61990b2743a9.png" alt="">
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/2e91cd23-f535-4101-8de0-48d9a2cf2be0.png" alt="">
            <img class="gimg" loading="lazy" src="tips-common-mistakes-and-how-to-fix-them/attachments/7cfb9781-4b60-4f91-9e62-3c55a6bfc1cd.png" alt="">`]
        ]}
      ]},
      { id:'trouble', e:'🛠️', title:'Outros casos frequentes', blocks:[
        { t:'acc', open:false, items:[
          ['💻','O Blender não instala ou não roda','Siga o cenário do cartão (Windows, Mac ou computador com poucos recursos) com o <a href="https://www.blender.org/releases/4-5/#versions" target="_blank" rel="noopener">link de download do Blender 4.5</a>. Se não funcionar, use o <a href="https://stephaneginier.com/sculptgl/" target="_blank" rel="noopener"><b>SculptGL</b></a> (guia acima) e peça ajuda ao suporte técnico numa sala separada, sem atrasar o grupo.'],
          ['🧲','Um objeto novo ficou dentro de outro','Ele foi acrescentado no Edit Mode e passou a fazer parte da outra malha. Separe-o, e antes de acrescentar objetos volte para o Object Mode.'],
          ['🔑','Um aluno não consegue entrar na plataforma','Envie o usuário e a senha dele, que estão no cartão do aluno no Backoffice, pelo chat privado.'],
          ['📁','Quer enviar o .blend para o Sparks','O Sparks recebe imagens: o aluno salva o render como <b>PNG ou JPG</b> (Image → Save As) e envia essa imagem. O .blend fica no computador dele.'],
          ['🔒','O link do Sparks não abre','Provavelmente ele salvou o projeto como <b>Only me</b>: <b>My projects → abrir o projeto → Edit → Public → Publish</b>.'],
          ['⏳','Não deu tempo de fazer o render na A4','Como exceção, ele salva o .blend e envia uma captura de tela do <b>Material Preview</b> na plataforma.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Checklist técnico de cada aula', blocks:[
        { t:'check', title:'✅ Meu checklist técnico', groups:[
          { h:'☑️ Antes da aula', items:['Li todas as Teacher Notes da aula.','Estou com o Blender pronto, o Screencast Keys e o SculptGL como alternativa.','Na A1, lembrei os alunos de instalar o Blender com um dia de antecedência.'] },
          { h:'🎬 Durante a aula', items:['Mostro primeiro o botão na tela e depois o atalho.','Depois de cada ação importante, peço que me mostrem o resultado na tela.','Não corrijo o modelo: faço uma pergunta de diagnóstico e dou uma dica.'] },
          { h:'📤 No final da aula', items:['Todos salvaram o .blend e enviaram o resultado com «Enviar» — nada pelo chat.','Na A4, todos publicaram no Sparks a imagem do robô (PNG ou JPG) como <b>Public</b> e enviaram o link.','Anotei quais trabalhos mostrar no início da próxima aula.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  m1:[
    { q:'O que os alunos criam na primeira aula?',
      o:['Um robô completo com vários materiais.','O primeiro modelo no Sculpt Mode: uma criatura fantástica ou uma cabeça estilizada.','Uma casa a partir de um cubo.'],
      a:1, e:'A A1 apresenta o Sculpt Mode com uma criatura própria; a casa é na A3 e o robô na A4.' },
    { q:'No Object Mode, o que fazem as teclas G, R e S?',
      o:['G move, R gira e S escala; X/Y/Z limitam a ação a um eixo.','G salva, R renderiza e S seleciona.','Trocam entre o Object Mode e o Edit Mode.'],
      a:0, e:'G (grab) move, R gira e S escala. Depois da tecla, X, Y ou Z limitam o movimento a esse eixo.' },
    { ctx:'Na A3, um aluno constrói a casa juntando vários cubos soltos.',
      q:'O que você orienta?',
      o:['Está tudo bem, o resultado fica igual.','Que ele modifique uma única malha no Edit Mode com Extrude, Inset e Loop Cut.','Que ele termine a casa no Sculpt Mode.'],
      a:1, e:'O objetivo da A3 é editar uma única malha no Edit Mode, não montar a casa com primitivas separadas.' },
    { q:'Na A4, qual é o papel do Sparks AI?',
      o:['Ele cria o robô a partir da descrição do aluno.','Ele dá um primeiro feedback como um usuário de teste; o aluno decide se aceita, modifica ou rejeita a sugestão.','Ele dá a nota final do projeto.'],
      a:1, e:'O Sparks AI propõe, mas não cria o projeto nem o avalia. A decisão é do aluno.' },
    { q:'Como você dá feedback sobre a casa ou o robô?',
      o:['Comparando os modelos para motivar o grupo.','Com uma fórmula concreta, como fato → critério → próximo passo, sem comparar trabalhos.','Corrigindo o modelo na sua tela.'],
      a:1, e:'Feedback útil e específico sobre o processo e as ferramentas, sem comparar os modelos entre si.' }
  ],
  m2:[
    { ctx:'Na A1, a instalação do Blender de um aluno está demorando.',
      q:'O que você faz?',
      o:['Para o grupo até ele terminar.','Deixa o aluno seguir com o grupo enquanto baixa; se não funcionar, SculptGL e suporte técnico numa sala separada.','Pede que ele volte na próxima aula.'],
      a:1, e:'Os problemas individuais não atrasam o grupo. O SculptGL é a alternativa e o suporte técnico ajuda com a instalação.' },
    { ctx:'No final da aula, um aluno manda a imagem do render pelo chat.',
      q:'O que você responde?',
      o:['Agradece e salva você mesmo a imagem no seu computador para ver depois.','Agradece e, com gentileza, pede que ele envie a imagem também no cartão da atividade e clique em «Enviar», para que o trabalho fique registrado.','Diz que ele não precisa se preocupar, que nesta aula não é preciso entregar.'],
      a:1, e:'Agradecer o trabalho e orientar com gentileza: a entrega só fica registrada no cartão da atividade, com «Enviar». Por isso não se aceitam imagens pelo chat nem se dispensa o projeto.' },
    { q:'Como você apresenta uma ferramenta nova do Blender?',
      o:['Primeiro o atalho de teclado e depois, se precisar, o botão.','Primeiro o botão na tela e depois o atalho.','Só com o atalho, para que aprendam rápido.'],
      a:1, e:'Primeiro o que se vê na tela; depois o atalho, que acelera o trabalho.' },
    { ctx:'Depois de usar o Extrude e cancelá-lo com o botão direito, o modelo de um aluno começa a se comportar de um jeito estranho.',
      q:'O que você sugere?',
      o:['Selecionar tudo no Edit Mode e usar M → by Distance para eliminar os vértices duplicados.','Começar o modelo do zero.','Passar para o Sculpt Mode.'],
      a:0, e:'Ao cancelar um Extrude ficam vértices duplicados invisíveis. M → by Distance os une.' },
    { ctx:'No final da A4, um aluno quer publicar o robô no Kodland Sparks.',
      q:'Que arquivo ele envia?',
      o:['A imagem do render em PNG ou JPG; o arquivo .blend fica salvo no computador dele.','O arquivo Robot_after.blend.','Uma pasta compactada com todo o projeto do Blender.'],
      a:0, e:'O Sparks recebe imagens: o render é salvo com Image → Save As em PNG ou JPG. O .blend é o projeto de trabalho e fica salvo no computador.' }
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
    ['📒', '<b>Antes de cada aula:</b> leia todas as Teacher Notes e tenha o SculptGL como alternativa.'],
    ['📥', '<b>A1:</b> instalação com os cenários do cartão, sem atrasar o grupo.'],
    ['📤', '<b>Entregas:</b> sempre na plataforma com «Enviar», nunca pelo chat.'],
    ['⚡', '<b>Final da A4:</b> publicar no Kodland Sparks a imagem do render do robô (o .blend fica no computador).']
  ]
};
