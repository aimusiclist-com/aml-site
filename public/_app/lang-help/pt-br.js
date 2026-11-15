// Ajuda em português do Brasil — textos da interface de administração.
// Traduza apenas os valores; preserve as chaves, variáveis, **negrito**, [[botões]] e quebras de linha.
AMLHelp.add('pt-br', {
  "_ui": {
    "what": "O que é?",
    "when": "Quando usar?",
    "click": "O que acontece ao clicar?",
    "care": "Atenção",
    "like": "Imagine assim",
    "close": "Fechar"
  },
  "help.top.lang": {
    "t": "Idioma",
    "what": "Escolhe o idioma desta página de administração. A lista contém todos os idiomas disponíveis.",
    "when": "Use quando os textos forem difíceis de entender ou quiser conferir seu site em outro idioma.",
    "click": "A página muda na hora. A escolha fica salva apenas neste navegador, então outro computador ou celular pode usar outro idioma.",
    "care": "Isso não altera o idioma principal para os visitantes. Essa opção é **Idioma do site**, na aba Informações do site. Neste navegador, o próprio site também mostrará o idioma escolhido aqui.",
    "like": "É como escolher o idioma das etiquetas no escritório da loja. A placa de fora continua igual."
  },
  "help.setup.title": {
    "t": "Crie sua conta de administrador",
    "what": "Esta é a primeira tela após instalar o site. Aqui você cria a única conta que o controla: e-mail, senha e chave de uso do Cloudflare.",
    "when": "Aparece uma vez, após instalar. Só volta se seguir os passos de recuperação de senha.",
    "click": "É só o título. Preencha os campos e clique em [[Criar administrador]].",
    "care": "Se acabou de instalar, espere cerca de 1 minuto. O Cloudflare precisa preparar o armazenamento. Se surgir um erro, espere e tente novamente.\nNão use nome de cantor ou grupo famoso para seu site.",
    "like": "É como receber a única chave de uma loja nova no dia da inauguração."
  },
  "help.setup.legacy": {
    "t": "Senha antiga de administrador (AML_ADMIN_TOKEN)",
    "what": "Este campo aparece apenas em sites instalados pelo método antigo, com senha de administração nas configurações do Cloudflare.",
    "when": "Digite a senha antiga que usava. Só precisa dela desta vez.",
    "click": "Nada acontece enquanto digita. Ela será verificada ao clicar em [[Criar administrador]].",
    "care": "Isso comprova que o site é seu, evitando que outra pessoa tome o controle. Se errar, a conta não será criada. Procure a senha nas configurações do site no Cloudflare.",
    "like": "É como mostrar a chave antiga ao chaveiro para receber uma nova."
  },
  "help.setup.email": {
    "t": "E-mail",
    "what": "Endereço de e-mail que você usará para entrar. Não aparece no seu site.",
    "when": "Escolha um e-mail que consulta sempre. O do cadastro no Cloudflare é fácil de lembrar.",
    "click": "Nada é salvo ainda. O e-mail será salvo ao clicar em [[Criar administrador]].",
    "care": "Ele deve ser válido (name@example.com). O aimusiclist.com também o recebe como contato privado do seu site. Você pode alterá-lo em Informações do site.",
    "like": "É como colocar seu nome no chaveiro da loja."
  },
  "help.setup.password": {
    "t": "Senha (6 ou mais caracteres)",
    "what": "Senha usada com o e-mail acima para entrar na administração.",
    "when": "Escolha agora pelo menos 6 caracteres. Uma senha maior é mais segura.",
    "click": "Nada é salvo ainda. A senha será salva ao clicar em [[Criar administrador]].",
    "care": "Não reutilize senhas de outros sites. Se a esquecer, poderá redefini-la sem perder suas músicas.",
    "like": "É a chave da sua loja. Não faça uma chave que também abra outras portas."
  },
  "help.setup.password2": {
    "t": "Repita a senha",
    "what": "Digite a mesma senha mais uma vez.",
    "when": "Preencha logo após o campo de senha.",
    "click": "Ao clicar em [[Criar administrador]], os dois campos serão comparados.",
    "care": "Se forem diferentes, aparecerá um aviso e nada será criado. Digite os dois novamente.",
    "like": "É como testar duas vezes se a chave nova funciona na fechadura."
  },
  "help.setup.token": {
    "t": "Chave de uso do Cloudflare (obrigatória, somente leitura)",
    "what": "Chave criada no Cloudflare. Ela permite mostrar quanto do limite gratuito o site já usou.",
    "when": "Siga o guia abaixo (cerca de 2 minutos), copie a chave e cole aqui.",
    "click": "Ao parar de digitar, a chave é verificada automaticamente. Você vê ✓ e o nome da sua conta Cloudflare, ou ✗ com o motivo do erro.",
    "care": "Esta chave só lê o consumo e o nome da conta; não altera nem apaga nada. O Cloudflare a mostra uma única vez, então cole logo. São necessárias as permissões Account Analytics · Read e Account Settings · Read.",
    "like": "É como uma chave que abre só a caixa do medidor de luz, não a loja."
  },
  "help.setup.account": {
    "t": "Conta Cloudflare",
    "what": "Esta lista aparece quando sua chave de uso consegue acessar mais de uma conta Cloudflare.",
    "when": "Escolha a conta em que este site foi instalado.",
    "click": "A chave será verificada novamente para a conta escolhida. ✓ significa que deu certo.",
    "care": "Se escolher a conta errada, os gráficos de uso mostrarão dados de outra conta ou não carregarão.",
    "like": "É como ter chaves de vários prédios e indicar onde fica sua loja."
  },
  "help.setup.account_id": {
    "t": "Account ID do Cloudflare",
    "what": "Número da sua conta Cloudflare: 32 caracteres com números de 0–9 e letras de a–f.",
    "when": "Este campo aparece quando a chave não consegue encontrar a conta sozinha. Isso ocorre se faltar Account Settings · Read na chave.",
    "click": "Quando você preencher os 32 caracteres, a chave será verificada novamente.",
    "care": "Veja no Cloudflare: Workers & Pages → Account Details → Account ID (botão de copiar). Ou refaça a chave pelo guia com ambas as permissões. Assim, o campo deixa de ser necessário.",
    "like": "É como dizer o número da casa ao leiturista quando falta a placa da rua."
  },
  "help.setup.token_guide": {
    "t": "Como criar a chave de uso (2 minutos)",
    "what": "Cinco passos simples mostram como criar a chave no Cloudflare.",
    "when": "Leia enquanto a cria. Clique no título para mostrar ou esconder as instruções.",
    "click": "Abrir ou fechar não altera nada. O primeiro passo tem um botão para abrir o Cloudflare.",
    "care": "Os nomes das telas do Cloudflare podem mudar. Escolha o mais parecido. No Cloudflare, clique em [[Continue to summary]], depois [[Create Token]] e [[Copy]].",
    "like": "É como o desenho que ensina a montar um móvel."
  },
  "help.setup.submit": {
    "t": "Criar administrador",
    "what": "Cria sua conta com o e-mail, senha e chave de uso informados acima.",
    "when": "Clique quando preencher todos os campos e a chave mostrar ✓.",
    "click": "Se houver erro, uma mensagem aparecerá perto do botão e nada será criado. Se tudo estiver certo, o painel abrirá com você conectado, e o site começará a se conectar ao aimusiclist.com.",
    "care": "Há apenas uma conta de administrador por site. Para criá-la novamente, siga os passos de senha esquecida. Suas músicas e álbuns serão mantidos.",
    "like": "É como cortar a fita na inauguração: a loja é sua e as portas se abrem."
  },
  "help.login.title": {
    "t": "Entrar",
    "what": "A porta do painel de administração. Só o dono acessa com e-mail e senha.",
    "when": "Você vê esta tela quando não está conectado neste navegador ou sua sessão expira.",
    "click": "Este é só o título. Preencha os campos e clique em [[Entrar]].",
    "care": "O login dura 30 dias em um navegador. Alterar a senha desconecta todos os dispositivos.",
    "like": "É a porta trancada dos fundos da loja. A entrada dos visitantes continua aberta."
  },
  "help.login.email": {
    "t": "E-mail",
    "what": "É o e-mail escolhido ao criar a conta de administrador.",
    "when": "Digite sempre que for entrar.",
    "click": "Nada acontece até clicar em [[Entrar]].",
    "care": "Letras maiúsculas e minúsculas não fazem diferença. Em um site meshmelo, use o e-mail da conta meshmelo.",
    "like": "É como dizer seu nome na porta dos fundos antes de mostrar a chave."
  },
  "help.login.password": {
    "t": "Senha",
    "what": "É a senha da sua conta de administrador.",
    "when": "Digite sempre que for entrar.",
    "click": "Nada acontece até clicar em [[Entrar]].",
    "care": "Após 5 tentativas erradas seguidas no mesmo local, o login fica bloqueado por 15 minutos. A mensagem mostra quantas tentativas restam.",
    "like": "É a chave da loja. Se insistir muito com a errada, a fechadura descansa um pouco."
  },
  "help.login.submit": {
    "t": "Entrar",
    "what": "Verifica o e-mail e a senha e abre o painel.",
    "when": "Clique após preencher os dois campos. O link [[Ver meu site]] ao lado abre o site como visitante.",
    "click": "Se estiverem corretos, o painel abre e você permanece conectado neste navegador por 30 dias. Caso contrário, aparece uma mensagem vermelha.",
    "care": "Entrar neste navegador não conecta outros dispositivos. Cada um precisa de seu próprio login.",
    "like": "É como girar a chave e entrar no escritório."
  },
  "help.login.forgot": {
    "t": "Esqueceu sua senha?",
    "what": "Instruções para criar novo e-mail e senha quando não lembrar dos antigos.",
    "when": "Use somente se não conseguir entrar. Clique no título para abrir os passos.",
    "click": "Abrir as instruções não muda nada. Você segue os passos. Em um site Cloudflare, remova apenas os dados de administração do armazenamento R2; assim, a tela [[Criar administrador]] volta a aparecer.",
    "care": "Suas músicas, álbuns e conexão com aimusiclist.com continuam. Apague somente o item indicado, nada mais. Na versão PHP, crie um arquivo vazio na hospedagem. No meshmelo, redefina pela sua conta meshmelo.",
    "like": "É como pedir uma nova chave ao chaveiro: a loja e tudo dentro continuam iguais."
  },
  "help.top.mm_acct": {
    "t": "Minha conta meshmelo",
    "what": "Link para a página da sua conta meshmelo. Só aparece em sites hospedados pelo meshmelo.",
    "when": "Use para login, senha, armazenamento, consumo, domínio próprio ou exclusão do site.",
    "click": "Sua conta meshmelo abre em nova aba. Esta página fica aberta.",
    "care": "Músicas, álbuns, menus, aparências e estatísticas são gerenciados neste painel, não lá. Se tiver dúvida, clique no ? ao lado do link.",
    "like": "É o escritório que cuida das suas lojas; este painel é o balcão de uma delas."
  },
  "help.top.view_site": {
    "t": "Ver meu site",
    "what": "Abre seu próprio site, como os visitantes o veem.",
    "when": "Use após fazer uma mudança para conferir o resultado.",
    "click": "O site abre em nova aba e o painel continua aberto.",
    "care": "A maioria das mudanças aparece em cerca de 30 segundos. Como você está conectado, pode ver também dados exclusivos, como reproduções de cada música.",
    "like": "É como sair para olhar a vitrine pela rua, do jeito que os clientes veem."
  },
  "help.top.logout": {
    "t": "Sair",
    "what": "Encerra seu login neste navegador.",
    "when": "Use quando terminar ou estiver usando um computador compartilhado.",
    "click": "Você volta à tela de login imediatamente. Músicas e configurações não são alteradas.",
    "care": "Isso desconecta apenas este navegador. Outros dispositivos continuam conectados. Para sair de todos, mude a senha na aba Informações do site.",
    "like": "É como trancar a porta dos fundos ao sair. As outras chaves continuam funcionando."
  },
  "help.top.version": {
    "t": "Nova versão",
    "what": "Este aviso aparece quando há uma versão mais recente do programa. Ele mostra sua versão e a mais nova.",
    "when": "Quando aparecer, planeje atualizar. A verificação acontece uma vez por dia.",
    "click": "[[Como atualizar]] abre o guia. [[Novidades]] mostra o que mudou. Nada é alterado até você atualizar.",
    "care": "A atualização nunca é obrigatória. Se o aviso estiver vermelho, sua versão é antiga demais para o aimusiclist.com; atualize em breve. Músicas e configurações são mantidas. Na versão PHP, há um botão de atualizar aqui mesmo.",
    "like": "É como receber um aviso de que novas prateleiras melhores estão disponíveis para a loja."
  },
  "help.top.aml": {
    "t": "Conexão com aimusiclist.com",
    "what": "Linha que mostra se seu site está ligado ao aimusiclist.com. Só assim as músicas públicas podem aparecer e entrar nos rankings.",
    "when": "Confira depois de instalar e sempre que suas músicas não aparecerem no aimusiclist.com.",
    "click": "É apenas um status: ✓ conectado · … conectando · ✗ desconectado. O motivo e a próxima tentativa automática também aparecem.",
    "care": "Um site novo se conecta sozinho. Se falhar, tenta novamente a cada 10 minutos, até 20 vezes por dia. Alguns erros interrompem as tentativas; resolva a causa e clique em [[Tentar agora]]. Se o site meshmelo estiver suspenso, o aviso mostrará isso.",
    "like": "É a estrada entre sua loja e o grande mercado. Quando está aberta, seus discos chegam à vitrine de lá."
  },
  "help.top.lang_missing": {
    "t": "Falta o idioma de algumas músicas",
    "what": "Este aviso indica que algumas músicas ainda não têm idioma definido, geralmente por terem sido enviadas antes dessa opção existir.",
    "when": "Corrija quando puder. Assim, quem usa o aimusiclist.com encontra músicas no idioma desejado.",
    "click": "É apenas um aviso. Clique em [[Definir agora]] para corrigir todas de uma vez.",
    "care": "Nada é obrigatório. Até você definir, o aimusiclist.com considera o idioma principal do seu site. O aviso desaparece quando todas as músicas tiverem idioma.",
    "like": "É como ter discos sem a etiqueta que informa em qual idioma se canta."
  },
  "help.top.pubmin_note": {
    "t": "Poucas músicas públicas",
    "what": "Avisa que há menos músicas públicas no aimusiclist.com do que a regra exige: pelo menos 10, ou todas se houver menos de 10.",
    "when": "Aparece quando o site fica abaixo do mínimo, por exemplo, após excluir músicas.",
    "click": "É apenas um aviso. Clique em [[Escolher músicas]] para corrigir.",
    "care": "Nada é publicado automaticamente. Porém, até corrigir, você não poderá ocultar mais músicas. Você escolhe as públicas e pode excluir qualquer música que não queira compartilhar.",
    "like": "O mercado pede que cada loja coloque pelo menos 10 discos na vitrine."
  },
  "help.top.profile_note": {
    "t": "Adicione uma foto de perfil",
    "what": "Sugestão exibida quando você tem músicas, mas ainda não colocou foto de perfil. A imagem também aparece junto das músicas no aimusiclist.com.",
    "when": "Adicione quando puder. Um rosto ou logotipo ajuda o público a lembrar suas músicas.",
    "click": "É só uma dica. Clique em [[Adicionar foto]] para escolher a imagem.",
    "care": "Não é obrigatório. A dica desaparece ao salvar uma foto de perfil.",
    "like": "É como colocar sua foto na porta da loja para mostrar quem é o dono."
  },
  "help.top.genre_sample": {
    "t": "Lista de gêneros incluída no programa",
    "what": "Avisa que a lista de gêneros não carregou do aimusiclist.com e, por enquanto, será usada a lista incluída no programa.",
    "when": "Você não precisa fazer nada. Normalmente desaparece ao abrir o painel novamente.",
    "click": "É apenas um aviso.",
    "care": "A lista local pode não incluir os gêneros mais recentes. Se precisar de algum, espere e recarregue a página. Os gêneros já escolhidos para músicas e menus não mudam.",
    "like": "É como usar o catálogo impresso do ano passado enquanto o novo ainda não chegou."
  },
  "help.setup.token_open": {
    "t": "Criar no Cloudflare",
    "what": "Abre a página de criação de chaves do Cloudflare em outra aba, com nome e as duas permissões já preenchidas.",
    "when": "Clique na primeira etapa do guia.",
    "click": "O Cloudflare abre em outra aba. Entre na conta, se for solicitado. Esta página permanece aberta para você voltar e colar a chave.",
    "care": "Confirme as duas permissões: Account Analytics · Read e Account Settings · Read. Se estiverem vazias, adicione-as manualmente.",
    "like": "É como um formulário de pedido já preenchido; só falta sua assinatura."
  },
  "help.tracks.ai_tool": {
    "t": "Criado com",
    "what": "Indica qual ferramenta de IA, como Suno, criou a música. Aparece como uma etiqueta “✦ nome” ao lado da faixa.",
    "when": "Escolha a ferramenta realmente usada. No formulário de envio, ela será aplicada a todas as músicas desse lote.",
    "click": "Será salva ao enviar ou clicar em [[Salvar música]]. Durante o envio, este navegador lembra sua escolha para a próxima vez.",
    "care": "O aimusiclist.com mantém a lista de ferramentas. Se a sua não existir, escolha “Outro” e avise admin@aimusiclist.com. Isso não afeta o ranking.",
    "like": "É como a indicação “fabricado em” no verso de um disco."
  },
  "help.tracks.ai_fill": {
    "t": "Músicas sem ferramenta de IA definida",
    "what": "Mostra quantas músicas ainda não têm ferramenta de IA. Só aparece se houver pelo menos uma.",
    "when": "Use para preencher essa informação em todas de uma vez.",
    "click": "É apenas um aviso. Escolha a ferramenta abaixo e clique em [[Definir esta ferramenta para todas]].",
    "care": "Assim que todas tiverem uma ferramenta, o aviso desaparecerá sozinho.",
    "like": "É como um bilhete no balcão: “5 discos ainda não têm etiqueta do fabricante”."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Definir esta ferramenta para todas",
    "what": "Atribui a ferramenta escolhida a todas as músicas que ainda não têm ferramenta definida.",
    "when": "Use quando a maioria foi criada com a mesma ferramenta, especialmente após importar músicas antigas.",
    "click": "Uma janela pede confirmação. Depois de aceitar, tudo é salvo imediatamente e a etiqueta ✦ aparece nessas músicas, no site e no aimusiclist.com.",
    "care": "Só muda músicas sem ferramenta. As que já têm continuam iguais. Se algumas usaram outra ferramenta, corrija em **Ferramenta de IA das músicas selecionadas** ou no botão [[Editar]] de cada uma.",
    "like": "É como carimbar os discos sem marca do fabricante, deixando os já carimbados como estão."
  },
  "help.tracks.bulk_ai": {
    "t": "Ferramenta de IA das músicas selecionadas",
    "what": "Define de uma vez qual ferramenta de IA (por exemplo, Suno) criou as músicas marcadas.",
    "when": "Use quando várias foram feitas com a mesma ferramenta ou para corrigir uma informação errada em lote.",
    "click": "A escolha sozinha não salva nada. Clique em [[Aplicar]] ao lado para confirmar.",
    "care": "Se escolher **Não definido** e clicar em [[Aplicar]], a ferramenta será removida das músicas marcadas. Se a sua não estiver na lista, selecione **Outro** e avise admin@aimusiclist.com.",
    "like": "É como carimbar vários discos com a ferramenta usada para produzi-los."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Aplicar",
    "what": "Salva a ferramenta de IA escolhida em todas as músicas marcadas.",
    "when": "Clique após marcar as músicas e escolher uma ferramenta.",
    "click": "Salva imediatamente, informa quantas músicas mudaram e limpa as seleções. A etiqueta ✦ muda no seu site e no aimusiclist.com.",
    "care": "A ferramenta anterior é substituída. Se não houver músicas marcadas, aparecerá um lembrete para selecioná-las.",
    "like": "É o momento em que o carimbo realmente marca os discos."
  },
  "help.tracks.genre_main": {
    "t": "Gênero principal",
    "what": "O gênero mais importante da música. A lista é igual ao menu de gêneros do aimusiclist.com.",
    "when": "Escolha o gênero que melhor descreve a música. É obrigatório.",
    "click": "Será salvo ao clicar em [[Salvar música]]. Se for pública, ela aparecerá nesse gênero no aimusiclist.com.",
    "care": "Não é possível salvar sem gênero principal. Os dois campos de gênero extra servem para estilos misturados na música.",
    "like": "É a seção do mercado onde seu disco fica, como a área de R&B."
  },
  "help.tracks.genre_sub": {
    "t": "Gênero extra",
    "what": "Até dois gêneros adicionais que aparecem na música. Uma faixa de R&B com rap, por exemplo, pode incluir Hip-hop.",
    "when": "Use quando um gênero não for suficiente. É opcional.",
    "click": "Os gêneros são salvos ao clicar em [[Salvar música]] ou durante o envio. O aimusiclist.com os mostra em ordem após o gênero principal, ao lado do título.",
    "care": "Você pode escolher qualquer gênero organizado sob seu grupo principal. Se selecionar o mesmo duas vezes, só contará uma. Escolha “— Nenhum —” para deixar vazio.",
    "like": "São observações extras na etiqueta, como “com um pouco de hip-hop”."
  },
  "help.tracks.lang": {
    "t": "Idioma da música",
    "what": "É o idioma das palavras cantadas, não o idioma da tela do seu site.",
    "when": "Escolha o idioma principal da letra. Se não houver voz, selecione “Instrumental (sem letra)”.",
    "click": "Será salvo ao clicar em [[Salvar música]]. O aimusiclist.com usa esse dado nos rankings por idioma.",
    "care": "Músicas antigas podem aparecer como “não definido (idioma do site)”. Nesse caso, vale o idioma padrão do site. Ao escolher “Instrumental”, o campo de segundo idioma fica bloqueado.",
    "like": "É uma etiqueta que informa em qual idioma o cantor canta."
  },
  "help.tracks.lang2": {
    "t": "Segundo idioma (opcional)",
    "what": "Um outro idioma usado na letra, como numa música coreana com trechos em inglês.",
    "when": "Use só se uma parte importante da música for cantada em outro idioma.",
    "click": "Será salvo ao clicar em [[Salvar música]]. Escolha “— Nenhum —” para remover.",
    "care": "Fica bloqueado até definir o idioma principal e também em músicas “Instrumental”. Não pode ser igual ao principal.",
    "like": "É outra pequena etiqueta no disco: “também tem um pouco de inglês”."
  },
  "help.tracks.ai_paste": {
    "t": "Colar resultado da IA",
    "what": "Campo para colar o título sugerido pela IA, incluindo o trecho entre parênteses ( ). Ele identifica gênero, clima e idioma. [[Ver o guia]] abre as instruções para pedir isso à IA.",
    "when": "Use quando tiver dificuldade para escolher o gênero ou quando os nomes dos arquivos não tiverem a parte ( ).",
    "click": "Colar não altera nada. Clique em [[Aplicar]] ao lado.",
    "care": "O texto apenas preenche campos. Você ainda precisa salvar ao enviar ou clicar em [[Salvar música]].",
    "like": "É como entregar ao atendente um bilhete de especialista, para ele copiar as informações na etiqueta."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Aplicar",
    "what": "Lê o texto colado e preenche os campos de gênero, idioma e clima.",
    "when": "Clique depois de colar o título da IA.",
    "click": "No envio, preenche todos os arquivos ainda não enviados. Na edição, preenche só esta música. Uma mensagem informa os campos preenchidos. Nada é salvo ainda.",
    "care": "Palavras desconhecidas são ignoradas e mostradas em amarelo. Se o gênero principal não existir na lista, os gêneros permanecem como estavam. Confira antes de salvar.",
    "like": "É o atendente copiando as informações do especialista nas etiquetas."
  },
  "help.site.ext": {
    "t": "Informações adicionais",
    "what": "Campos extras sobre seu site como um todo. O aimusiclist.com decide quais existem e mostra suas respostas ao lado das músicas.",
    "when": "Preencha os que combinarem com você. Todos são opcionais.",
    "click": "As respostas são salvas com os demais dados ao clicar em [[Salvar informações do site]]. Apagar um campo remove a resposta.",
    "care": "Este grupo só aparece quando o aimusiclist.com oferece campos para sites. Se algum exigir atualização do programa, você ainda não poderá preenchê-lo. A resposta antiga fica guardada.",
    "like": "É como um questionário extra do mercado (aimusiclist.com), para mostrar mais informações na sua banca."
  },
  "help.tracks.ext": {
    "t": "Informações adicionais",
    "what": "Campos extras da música, como BPM ou uma observação curta. O aimusiclist.com decide quais aparecem e mostra as respostas ao lado da faixa.",
    "when": "Preencha o que souber. Todos os campos são opcionais.",
    "click": "Os dados são salvos ao enviar a música ou clicar em [[Salvar música]]. No envio, os mesmos valores vão para todas as faixas. Na edição, apagar um campo e salvar remove esse valor.",
    "care": "Se um campo pedir atualização do programa, você poderá usá-lo após atualizar seu site. Eles só aparecem quando o site recebe a lista do aimusiclist.com.",
    "like": "É como as letras pequenas no verso da capa de um disco."
  },
  "help.img.editor": {
    "t": "Janela de imagem",
    "what": "Janela que ajusta imagens: foto da música 100×100, capa de álbum 200×200 ou banner de até 1600×400.",
    "when": "Abre automaticamente quando você escolhe uma imagem para música, álbum ou banner.",
    "click": "Escolha como encaixar a imagem, confira o Resultado e clique em [[Salvar imagem]]. [[Cancelar]] ou Esc fecha sem alterar nada.",
    "care": "Só uma cópia pequena é enviada, nunca a imagem original. Cada tipo tem limite (50 KB, 100 KB ou 300 KB); a imagem é reduzida até caber.",
    "like": "É uma pequena oficina que ajusta a foto à moldura antes de pendurá-la na loja."
  },
  "help.img.mode_crop": {
    "t": "Recortar (mover a moldura)",
    "what": "Mantém apenas a parte da imagem dentro da moldura iluminada e corta o restante.",
    "when": "Use se a imagem for grande demais ou tiver outro formato e você quiser destacar, por exemplo, um rosto.",
    "click": "Uma moldura clara aparece. Arraste ou use as setas do teclado para escolher o que manter. A barra Tamanho da moldura a aumenta ou diminui. O Resultado acompanha seus movimentos.",
    "care": "A parte de fora da moldura será descartada.",
    "like": "É como recortar uma foto com tesoura para usar só a melhor parte na capa do disco."
  },
  "help.img.mode_fit": {
    "t": "Encolher a imagem inteira",
    "what": "Mantém toda a imagem, apenas diminuindo seu tamanho em vez de cortar.",
    "when": "Use quando nada pode ficar de fora, como um logotipo ou uma imagem com texto.",
    "click": "O Resultado mostra a imagem completa. Em fotos quadradas de músicas ou álbuns, os lados vazios ganham a cor média da foto. No banner, a imagem conserva a proporção e cabe em 1600×400.",
    "care": "Uma imagem muito estreita pode parecer pequena no quadrado, com bordas largas e coloridas.",
    "like": "É como colocar um pôster inteiro numa moldura com borda colorida, sem recortar."
  },
  "help.img.frame": {
    "t": "Tamanho da moldura",
    "what": "Barra que aumenta ou diminui a moldura de recorte iluminada.",
    "when": "Diminua para aproximar um detalhe, como um rosto. Aumente para mostrar mais da imagem.",
    "click": "A moldura e o Resultado mudam enquanto você arrasta a barra. No extremo direito, ela fica do maior tamanho possível.",
    "care": "Uma moldura muito pequena numa foto pequena pode ficar desfocada. Confira o Resultado antes de salvar.",
    "like": "É como aproximar ou afastar uma lupa da fotografia."
  },
  "help.img.result": {
    "t": "Resultado",
    "what": "Mostra uma prévia exata da imagem que será salva.",
    "when": "Confira antes de clicar em [[Salvar imagem]].",
    "click": "Muda automaticamente quando você move a moldura ou troca o modo. É só uma prévia; nada foi salvo ainda.",
    "care": "Imagens grandes aparecem menores aqui, mas são salvas no tamanho final. A compressão pode deixar a imagem um pouco menos nítida.",
    "like": "É como um espelho mostrando a foto já dentro da moldura."
  },
  "help.img.save": {
    "t": "Salvar imagem",
    "what": "Cria e utiliza a versão final e menor da imagem.",
    "when": "Clique quando o Resultado estiver como você deseja.",
    "click": "A imagem de música ou banner é salva na hora e aparece no site; a imagem da música pública também aparece no aimusiclist.com. A capa de álbum só entra no formulário e será salva ao clicar em [[Salvar álbum]].",
    "care": "Se o arquivo continuar pesado ou o navegador não conseguir processá-lo, aparece um erro vermelho. Tente outra imagem ou um recorte menor, ou use Chrome, Edge ou Firefox.",
    "like": "É como colocar a foto recortada na moldura e pendurá-la na parede."
  },
  "help.img.crop": {
    "t": "Foto de perfil",
    "what": "Janela que encaixa sua foto de perfil num círculo. Pode ser seu rosto ou logotipo, exibido em formato redondo no site e no aimusiclist.com.",
    "when": "Abre automaticamente depois que você escolhe uma foto de perfil.",
    "click": "O círculo fica no centro; mova a foto por baixo. Arraste, use a barra de zoom, a roda do mouse, dois dedos, as setas e + / −. Clique em [[Aplicar]] para salvar ou [[Cancelar]] / Esc para sair sem mudar.",
    "care": "Só a área dentro do círculo será usada. É enviada apenas uma cópia pequena de 400×400, não a foto original.",
    "like": "É como mover uma foto atrás de uma janela redonda até centralizar o rosto."
  },
  "help.img.crop_zoom": {
    "t": "Zoom",
    "what": "A barra e os botões − e + aumentam ou diminuem a foto dentro do círculo.",
    "when": "Aproxime quando o rosto parecer pequeno. Afaste para mostrar mais.",
    "click": "A foto muda de tamanho a partir do centro do círculo. À esquerda, ela só preenche o círculo; à direita, fica 4 vezes maior. As prévias abaixo também mudam.",
    "care": "A foto nunca fica menor que o círculo, então não surgem bordas vazias. Ampliar demais uma foto pequena pode deixá-la desfocada.",
    "like": "É como caminhar para perto da câmera ou se afastar."
  },
  "help.img.crop_rotate": {
    "t": "Girar",
    "what": "Gira a foto um quarto de volta para a direita.",
    "when": "Use quando a foto estiver de lado ou de cabeça para baixo.",
    "click": "Cada clique gira 90 graus. Quatro cliques a devolvem à posição inicial. Depois de cada giro, a foto volta ao centro; ajuste-a novamente se necessário.",
    "like": "É como girar uma moldura na parede até a foto ficar reta."
  },
  "help.img.crop_preview": {
    "t": "Prévia",
    "what": "Dois círculos mostram como a foto de perfil ficará: um maior e outro bem pequeno.",
    "when": "Confira os dois antes de clicar em [[Aplicar]]. O menor é do tamanho usado com frequência nas listas.",
    "click": "Eles mudam automaticamente ao mover, ampliar ou girar a foto. Nada é salvo ainda.",
    "care": "Se seu rosto ficar difícil de reconhecer no círculo menor, aproxime um pouco.",
    "like": "É como se afastar da placa da loja para ver se ela pode ser lida do outro lado da rua."
  },
  "help.img.crop_apply": {
    "t": "Aplicar",
    "what": "Salva como foto de perfil a parte que ficou dentro do círculo.",
    "when": "Clique quando as prévias estiverem boas.",
    "click": "A foto é salva e aparece imediatamente no site. O aimusiclist.com a recebe em um ou dois minutos. A cor da área superior do seu site também é escolhida a partir da foto.",
    "care": "A foto de perfil anterior é substituída. Para trocar novamente, escolha outra imagem.",
    "like": "É como pendurar seu retrato novo na vitrine."
  },
  "help.top.profile_go": {
    "t": "Adicionar foto",
    "what": "Começa o processo de adicionar uma foto de perfil.",
    "when": "Clique no aviso que sugere uma foto.",
    "click": "A aba Informações do site abre e o dispositivo pede para escolher a imagem. Ajuste o recorte e aplique para salvar. Visitantes e aimusiclist.com verão a foto pouco depois.",
    "care": "Você poderá trocar ou excluir a foto depois, em Informações do site.",
    "like": "É como entregar a foto para quem faz a placa da loja."
  },
  "help.tab.tracks": {
    "t": "Músicas",
    "what": "Área das suas músicas. Envie faixas, altere título, gêneros, idioma, imagem e letra, e escolha quais ficarão públicas no aimusiclist.com.",
    "when": "Entre aqui para adicionar músicas ou modificar as existentes.",
    "click": "Clicar na aba apenas muda a tela. Dentro dela, muitas alterações são salvas assim que você as faz.",
    "care": "Até 20 músicas por envio, com 15 MB cada e duração de 30 segundos a 15 minutos. Cada uma tem gênero principal e até dois extras. Pelo menos 10 devem continuar públicas (todas, se tiver menos). Excluir música não pode ser desfeito.",
    "like": "É o estoque onde você recebe discos, coloca etiquetas e escolhe quais vão para a vitrine do mercado."
  },
  "help.tab.albums": {
    "t": "Álbuns",
    "what": "Área para juntar músicas em álbuns com título, capa e descrição curta.",
    "when": "Use quando quiser apresentar várias músicas como um conjunto.",
    "click": "Clicar na aba só muda a tela. Um álbum de 6 a 35 músicas com áudio torna-se público no aimusiclist.com ao salvar, ou na data escolhida.",
    "care": "Você pode criar álbuns com menos de 6 músicas, mas eles ficam privados. A descrição tem até 200 caracteres. As faixas de um álbum público não podem ficar privadas.",
    "like": "É como juntar discos numa caixa especial com capa própria."
  },
  "help.tab.skins": {
    "t": "Aparências",
    "what": "Área do visual do site: cores, letras e disposição. Use uma aparência incluída, instale da galeria ou envie a sua.",
    "when": "Entre aqui quando quiser mudar o visual ou quando um ponto mostrar que há versão nova de uma aparência.",
    "click": "Clicar na aba só muda a tela. A nova aparência chega aos visitantes em cerca de 30 segundos, e você pode voltar à anterior.",
    "care": "Claro e Escuro estão sempre disponíveis, além de até 20 aparências extras. Um arquivo enviado pode ter até 100 KB. Mudar a aparência não altera músicas nem configurações.",
    "like": "É como pintar a loja e trocar as prateleiras. Os discos continuam os mesmos."
  },
  "help.tab.site": {
    "t": "Informações do site",
    "what": "Tudo sobre o site: nome, artista, idioma principal, descrição, redes sociais, imagens, botões para visitantes, anúncios, artistas, login e chave de uso.",
    "when": "Abra logo após instalar e sempre que quiser mudar a apresentação do site.",
    "click": "Clicar na aba só muda a tela. Alguns quadros têm botão próprio de salvar; interruptores salvam ao serem acionados.",
    "care": "Não use nome de cantor ou grupo famoso. O nome do site e do artista também aparece no aimusiclist.com. Trocar a senha desconecta seus dispositivos.",
    "like": "É como guardar a placa, a identificação e os papéis do escritório da loja numa gaveta."
  },
  "help.tab.guestbook": {
    "t": "Livro de visitas",
    "what": "Área onde visitantes deixam recados curtos sobre o site ou uma música. Aqui você ativa, desativa e exclui mensagens.",
    "when": "Use para ler recados dos ouvintes ou remover mensagens inadequadas.",
    "click": "Clicar na aba mostra mensagens, 20 por página. Ativar, desativar e excluir salva imediatamente.",
    "care": "Nomes têm até 20 caracteres e mensagens até 500, sem links; cada pessoa pode deixar até 50 mensagens por dia. Recados continuam até você apagá-los e não podem ser recuperados depois. Desativar o livro preserva os recados.",
    "like": "É como um caderno na entrada da loja onde os clientes deixam mensagens."
  },
  "help.tab.domain": {
    "t": "Meu domínio",
    "what": "Área para ligar seu endereço de internet, como mymusic.com, ao site, substituindo o endereço longo da instalação.",
    "when": "Use se já comprou um domínio e quer que as pessoas o utilizem.",
    "click": "Clicar na aba só muda a tela. O guia mostra os passos (uns 10 minutos). Ao conectar, o endereço é verificado antes de ser informado ao aimusiclist.com.",
    "care": "Quem acessar o endereço antigo será redirecionado ao novo. Músicas já presentes em playlists continuam funcionando. Em sites meshmelo, conecte o domínio pela sua conta meshmelo.",
    "like": "É como dar à loja um endereço curto e fácil de lembrar."
  },
  "help.tab.stats": {
    "t": "Estatísticas",
    "what": "Números do seu site: visitas, reproduções diárias, músicas, álbuns, países, origem dos visitantes, aparelhos e idiomas. Também mostra dados do aimusiclist.com.",
    "when": "Use para descobrir o que as pessoas ouvem e se algo compartilhado trouxe visitas.",
    "click": "A aba carrega os números, atualizados uma vez por dia. [[Atualizar agora]] conta os dados de hoje imediatamente, no máximo uma vez por minuto.",
    "care": "Suas visitas enquanto está conectado não são contadas. Os números do aimusiclist.com mudam de manhã, uma vez por dia. Em algumas instalações, não é possível contar visitas ou reproduções; a aba explica o motivo e o que ativar.",
    "like": "É o caderno de visitas e vendas da loja, com os totais já somados."
  },
  "help.tab.analysis": {
    "t": "Análise",
    "what": "Visão mais detalhada das músicas no aimusiclist.com: posições, músicas em alta, começo das faixas novas, distância até o Top 100, curtidas, playlists, lugar no gênero e notícias do aimusiclist.",
    "when": "Use para saber quais músicas estão crescendo e o que divulgar depois.",
    "click": "A aba abre os dados salvos, reunidos uma vez por dia. Abrir várias vezes não muda os números. Um ponto indica notícias novas do aimusiclist; ele some quando você abre a aba.",
    "care": "Um site recém-criado terá poucos dados. Os gráficos ganham conteúdo com o passar dos dias.",
    "like": "É como um relatório semanal do mercado mostrando o desempenho dos seus discos."
  },
  "help.top.mm_two_screens": {
    "t": "Você tem dois lugares para administrar",
    "what": "Este cartão explica as duas áreas de administração: o painel deste site e sua conta meshmelo. Mostra o endereço e a função de cada uma.",
    "when": "Abra quando não encontrar alguma configuração. O botão ? no topo abre e fecha o cartão.",
    "click": "Ler não muda nada. O botão dentro abre sua conta meshmelo em outra aba.",
    "care": "Este cartão aparece somente em sites meshmelo.",
    "like": "É como uma placa no corredor: “Balcão da loja para um lado, escritório central para outro”."
  },
  "help.top.php_update": {
    "t": "Atualizar agora",
    "what": "Na versão PHP, este botão atualiza automaticamente o programa do site para a versão mais recente.",
    "when": "Use quando aparecer o aviso de nova versão e tiver um minuto.",
    "click": "Uma confirmação aparece. Leva cerca de um minuto e a página recarrega. Se houver falha, a versão anterior volta automaticamente.",
    "care": "Músicas, configurações e páginas são mantidas. Não feche a página durante a atualização. Sites meshmelo não têm esse botão: o meshmelo os atualiza.",
    "like": "É como uma equipe trocando as prateleiras; depois os discos voltam ao mesmo lugar."
  },
  "help.top.usage_r2_storage": {
    "t": "Armazenamento R2 (10 GB grátis)",
    "what": "Espaço ocupado pelos arquivos no R2, armazenamento do Cloudflare. Quase todo ele costuma ser usado pelas músicas.",
    "when": "Confira antes de enviar muitas músicas.",
    "click": "É apenas um número, atualizado a cada 10 minutos.",
    "care": "Quanto menor, melhor. Acima de 10 GB, o Cloudflare cobra da sua conta. Se estiver enchendo, exclua músicas desnecessárias ou use arquivos menores (MP3 em vez de WAV). Outros buckets na mesma conta Cloudflare também contam.",
    "like": "É quanto seu depósito está cheio. Há cerca de 10 GB de prateleiras gratuitas."
  },
  "help.top.usage_class_a": {
    "t": "Gravações no R2 neste mês (1 milhão grátis)",
    "what": "Número de gravações no R2 neste mês: envios, edições, alterações e outras operações.",
    "when": "Confira em meses com muitos envios ou mudanças.",
    "click": "É apenas um número; volta a zero todo mês.",
    "care": "Quanto menor, melhor. Uma mudança faz poucas gravações; até 20 músicas enviadas juntas geram cerca de 60, então 1 milhão é bastante. Excluir é grátis. Acima do limite gratuito, o Cloudflare cobra da sua conta.",
    "like": "É quantas vezes a porta do depósito abriu para guardar alguma coisa neste mês."
  },
  "help.top.usage_class_b": {
    "t": "Leituras do R2 neste mês (10 milhões grátis)",
    "what": "Número de leituras no R2 neste mês. A maioria acontece quando pessoas ouvem suas músicas ou abrem seu site.",
    "when": "Confira quando suas músicas receberem muitas reproduções.",
    "click": "É apenas um número; volta a zero todo mês.",
    "care": "Um número crescente é bom: significa que há ouvintes. Mas, acima de 10 milhões, o Cloudflare cobra da sua conta. Se subir rápido demais, olhe a aba Estatísticas para ver a origem das reproduções.",
    "like": "É quantas vezes alguém abriu o depósito para pegar um disco e ouvi-lo."
  },
  "help.top.usage_workers": {
    "t": "Solicitações ao Workers hoje (100 mil grátis)",
    "what": "Quantidade de vezes que seu site respondeu a visitantes hoje. Abrir o site e carregar partes da música conta.",
    "when": "Confira em dias movimentados, por exemplo, depois de divulgar um link.",
    "click": "É apenas um número. Volta a zero todos os dias às 00:00 UTC (09:00 na Coreia).",
    "care": "Acima de 100.000 por dia, o site para até o próximo reinício, sem cobrança. O número vale para toda a sua conta Cloudflare. Na versão PHP, conta o Worker de áudio, e músicas podem parar de tocar. Sites meshmelo não mostram esta barra.",
    "like": "É como o limite de clientes atendidos por dia. Quando acaba, a loja fecha até amanhã."
  },
  "help.top.usage_disk_space": {
    "t": "Espaço ocupado por músicas e páginas deste site",
    "what": "Mostra quanto espaço seus arquivos ocupam na hospedagem. As músicas costumam ocupar a maior parte.",
    "when": "Confira antes de um envio grande.",
    "click": "É apenas um número ou uma barra, se o limite do plano estiver configurado.",
    "care": "Quanto menor, melhor. Perto do limite, exclua músicas que não usa ou envie arquivos MP3 menores. Outros sites da mesma hospedagem não entram nesta conta.",
    "like": "É o espaço do chão ocupado pelos discos na loja alugada."
  },
  "help.top.usage_files": {
    "t": "Arquivos (inodes)",
    "what": "Quantidade de arquivos deste site na hospedagem. Empresas de hospedagem costumam limitar também o número de arquivos, não só o espaço.",
    "when": "Confira se tiver muitas músicas ou receber aviso da hospedagem sobre arquivos.",
    "click": "É apenas um número ou uma barra, se houver limite configurado.",
    "care": "Quanto menor, melhor. Cada música cria alguns arquivos (áudio, imagem e letra). Excluir músicas sem uso reduz a quantidade.",
    "like": "É a quantidade de caixas na loja, mesmo que cada caixa seja pequena."
  },
  "help.top.usage_tracks": {
    "t": "Músicas",
    "what": "Mostra a quantidade de músicas deste site.",
    "when": "Serve para uma consulta rápida e para estimar o espaço médio usado por música.",
    "click": "É apenas um número. Muda quando você envia ou exclui faixas.",
    "care": "Não existe barra de limite para este item.",
    "like": "É a contagem dos discos da loja."
  },
  "help.top.usage_disk": {
    "t": "Uso da hospedagem (este site)",
    "what": "Na versão PHP com músicas guardadas na hospedagem, mostra o uso deste site: espaço, arquivos e músicas.",
    "when": "Confira antes de enviar muitas faixas, pois os planos de hospedagem têm limites.",
    "click": "É um título. Os números são atualizados a cada 10 minutos. [[Atualizar]] consulta na hora.",
    "care": "Os limites reais do plano aparecem em cPanel → Statistics. Barras com % só aparecem se esses limites foram informados nas configurações durante a instalação. Caso contrário, você vê números simples.",
    "like": "É o medidor do espaço alugado. O contrato informa quanto a loja pode crescer."
  },
  "help.top.usage": {
    "t": "Uso gratuito do Cloudflare",
    "what": "Barras do limite gratuito usado pela conta Cloudflare: armazenamento, gravações e leituras no mês, e solicitações de hoje.",
    "when": "Consulte de vez em quando, principalmente quando receber muitos visitantes.",
    "click": "É um título. Os números são atualizados a cada 10 minutos. [[Atualizar]] consulta agora.",
    "care": "Quanto menor, melhor. A barra fica laranja em 70% e vermelha em 90%. Passar do limite grátis do R2 gera cobrança. Ultrapassar o Workers para o site pelo resto do dia, sem cobrança. O número vale para toda a conta Cloudflare, não só este site.",
    "like": "É o medidor de eletricidade da loja. Confira antes de chegar a conta."
  },
  "help.top.usage_refresh": {
    "t": "Atualizar",
    "what": "Consulta agora os números de consumo do Cloudflare, sem esperar a atualização de 10 minutos.",
    "when": "Clique após um envio grande ou ao cadastrar uma nova chave de uso.",
    "click": "As barras atualizam em instantes, junto com o horário ao lado do título.",
    "care": "Os números do Cloudflare podem ter pequeno atraso, então a leitura nova pode parecer igual por algum tempo.",
    "like": "É como olhar o medidor pessoalmente em vez de esperar a leitura automática."
  },
  "help.top.usage_connect": {
    "t": "Conectar",
    "what": "Aparece quando ainda não há chave de uso. Ela permite mostrar os limites gratuitos do Cloudflare.",
    "when": "Clique para adicionar a chave. Leva cerca de 2 minutos.",
    "click": "A aba Informações do site abre no quadro **Ver uso**, pronto para colar a chave.",
    "care": "Seu site funciona sem a chave, mas você não vê se está perto do limite. Ela só pode ler números.",
    "like": "É como instalar um medidor: a luz funciona sem ele, mas você não vê o consumo."
  },
  "help.top.usage_retoken": {
    "t": "Digitar a chave novamente",
    "what": "Aparece quando a chave de uso está salva, mas os números não puderam ser lidos. O motivo aparece acima.",
    "when": "Use se a chave foi apagada no Cloudflare, expirou ou está sem uma permissão.",
    "click": "A aba Informações do site abre no quadro **Ver uso**, onde você pode colar outra chave.",
    "care": "Confira duas coisas: a chave é da mesma conta Cloudflare do site e tem as permissões Account Analytics · Read e Account Settings · Read. Até corrigir, as barras podem mostrar a última leitura válida.",
    "like": "É como trocar a chave de um medidor que não abre mais."
  },
  "help.top.usage_uploaded": {
    "t": "Áudio enviado por este painel",
    "what": "Tamanho total dos arquivos de música enviados aqui. Conta apenas as faixas deste site.",
    "when": "Compare com a barra de armazenamento. Se ela estiver muito maior, outra coisa na sua conta Cloudflare está ocupando espaço.",
    "click": "É apenas um número. Muda ao enviar ou excluir músicas.",
    "care": "As linhas acima explicam o que acontece ao superar os limites gratuitos. Na versão PHP, também mostram onde consultar os limites da hospedagem.",
    "like": "É quanto espaço seus discos ocupam no depósito, sem contar caixas dos vizinhos."
  },
  "help.top.mm_upgrade": {
    "t": "Conseguir mais espaço (upgrade)",
    "what": "Botão para pedir ao meshmelo um limite diário maior. Aparece no aviso superior quando o consumo do dia chega a 80% ou mais.",
    "when": "Use se seu site costuma esgotar o limite gratuito diário.",
    "click": "A página de upgrade do meshmelo ou um e-mail para o suporte abre. Nada muda até o meshmelo configurar.",
    "care": "A maioria dos sites nunca precisa disso. Um dia muito movimentado volta ao normal sozinho após o reinício.",
    "like": "É como pedir ao prédio uma ligação elétrica maior quando a loja fica cheia."
  },
  "help.top.mm_use": {
    "t": "Uso de hoje",
    "what": "Em sites meshmelo, mostra uma porcentagem do limite gratuito diário utilizado. Abaixo estão os últimos 7 dias.",
    "when": "Confira em dias movimentados, por exemplo, depois de compartilhar um link.",
    "click": "É apenas um número. Volta a 0% todo dia no horário indicado abaixo da barra.",
    "care": "Quanto menor, melhor, mas um número alto também indica muitos visitantes. A partir de 80%, aparece um aviso. Em 100%, o visitante vê uma página curta “Voltamos em breve” até o reinício. O painel e as reproduções no aimusiclist.com continuam funcionando.",
    "like": "É o medidor diário da loja. Ao chegar ao fim, a porta da frente fecha até amanhã."
  },
  "help.top.mm_use_notify": {
    "t": "Avisar por e-mail uma vez ao dia acima de 80%",
    "what": "Opção para receber um e-mail se o uso do dia passar de 80%.",
    "when": "Ative se não costuma abrir o painel diariamente.",
    "click": "A escolha é salva assim que você marca ou desmarca. Você recebe no máximo um e-mail por dia.",
    "care": "Só envia o aviso; não interrompe nada. Esta opção aparece apenas se o meshmelo ativou os avisos por e-mail.",
    "like": "É como pedir ao funcionário do medidor um aviso quando o limite estiver perto."
  },
  "help.top.aml_retry": {
    "t": "Tentar agora",
    "what": "Tenta conectar ao aimusiclist.com imediatamente, sem esperar a próxima tentativa automática.",
    "when": "Use quando o status disser que não está conectado ou após corrigir o problema indicado.",
    "click": "A linha muda para “Conectando…” e mostra o resultado logo depois. Ao conectar, as músicas públicas são enviadas ao aimusiclist.com.",
    "care": "Se o problema estiver no próprio aimusiclist.com, clicar muitas vezes não ajudará. Espere e tente mais tarde.",
    "like": "É como telefonar ao mercado em vez de esperar que ele ligue de volta."
  },
  "help.tracks.list": {
    "t": "Minhas músicas",
    "what": "Lista de todas as músicas do seu site. O número entre parênteses indica quantas você tem.",
    "when": "Use para encontrar, publicar ou ocultar no aimusiclist.com, ouvir, editar ou excluir uma música.",
    "click": "Esta é sua lista real, já salva. Os botões e interruptores de cada linha agem imediatamente.",
    "care": "Músicas sem arquivo de áudio mostram **Sem áudio** e não são contabilizadas até você adicionar o arquivo.",
    "like": "É o estoque da loja: todos os discos, com uma indicação dos que também estão no grande mercado (aimusiclist.com)."
  },
  "help.tracks.search": {
    "t": "Buscar títulos de músicas",
    "what": "Encontra músicas pelo título. Na lista ficam apenas as que contêm o texto digitado.",
    "when": "Use quando tiver muitas músicas ou quiser selecionar várias para alterar juntas.",
    "click": "A lista muda enquanto você digita. Nada é salvo ou alterado. Apague a busca para ver todas.",
    "care": "A busca considera apenas o título, não gênero nem artista. Maiúsculas e minúsculas são iguais. [[Selecionar todas as exibidas]] marca só as músicas encontradas.",
    "like": "É como procurar um disco pelo título escrito na lombada."
  },
  "help.tracks.nolang": {
    "t": "Somente músicas sem idioma definido",
    "what": "Mostra apenas as músicas que ainda não têm o idioma da letra configurado.",
    "when": "Use para encontrar músicas antigas e corrigir o idioma de várias de uma vez.",
    "click": "A lista muda imediatamente, sem salvar nada. Desmarque para mostrar todas. Funciona junto com a busca por título.",
    "care": "Até configurar, o aimusiclist.com considera o idioma principal do site. Para corrigir rápido, marque esta opção, selecione todas as exibidas e use **Idioma das músicas selecionadas** → [[Aplicar]].",
    "like": "É como separar discos sem a etiqueta do idioma da voz."
  },
  "help.tracks.bulk": {
    "t": "Alterar várias músicas de uma vez",
    "what": "Quadro para modificar músicas em conjunto. Sem seleção, mostra uma dica. Ao marcar faixas, mostra quantas foram escolhidas e libera as ferramentas.",
    "when": "Use quando a mesma alteração serve para várias músicas.",
    "click": "Marcar músicas não salva nada. Cada ferramenta só salva ao clicar em seu [[Aplicar]] ou botão próprio. Depois, as seleções são limpas.",
    "care": "Use as caixas à esquerda das faixas ou a caixa superior para marcar as exibidas. As ferramentas podem alterar clima, informações extras, idioma, ferramenta de IA e contagem para visitantes (se houver estatísticas).",
    "like": "É como colocar etiquetas em vários discos de uma vez."
  },
  "help.tracks.bulk_lang": {
    "t": "Idioma das músicas selecionadas",
    "what": "Define de uma vez o idioma da letra de todas as faixas marcadas. Também permite adicionar um segundo idioma.",
    "when": "Use para músicas no mesmo idioma ou para corrigir faixas sem idioma definido.",
    "click": "Escolher idiomas não salva. Clique em [[Aplicar]] abaixo.",
    "care": "É o idioma da letra, não da tela do site. Se não houver canto, escolha **Instrumental (sem letra)**. Ele não pode ser combinado com outro idioma. O aimusiclist.com usa esse dado em seus rankings por idioma.",
    "like": "É como escrever “cantado em coreano” nas etiquetas de vários discos."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Aplicar",
    "what": "Salva o idioma escolhido em todas as músicas marcadas.",
    "when": "Clique após selecionar músicas e escolher o idioma.",
    "click": "Salva na hora, informa quantas faixas mudaram e limpa as marcações. O aimusiclist.com mostra o novo idioma pouco depois.",
    "care": "O idioma anterior é substituído. Se nenhuma faixa estiver marcada, aparece apenas um aviso para selecionar músicas.",
    "like": "É quando as novas etiquetas de idioma são colocadas nos discos."
  },
  "help.tracks.select": {
    "t": "Selecionar músicas",
    "what": "A caixa no topo marca todas as músicas exibidas; as caixas de cada linha marcam uma faixa.",
    "when": "Use antes de fazer alterações em várias músicas pelo quadro acima.",
    "click": "Marcar apenas seleciona: não salva. O quadro mostra a quantidade marcada e libera as ferramentas.",
    "care": "A caixa superior marca somente as faixas visíveis. Se você buscou ou ativou **Somente músicas sem idioma definido**, as ocultas não serão selecionadas.",
    "like": "É como separar os discos que você quer etiquetar."
  },
  "help.tracks.pub": {
    "t": "Pública no aimusiclist",
    "what": "Este interruptor define se a música também aparece no aimusiclist.com. Ela sempre fica no seu próprio site, ligada ou desligada.",
    "when": "Ative para alcançar mais ouvintes; desative para manter a faixa apenas no seu site.",
    "click": "Salva assim que você clica. Ao ativar, a música aparece no aimusiclist.com em 1 a 2 minutos. Ao desativar, sai de lá.",
    "care": "Se tiver 10 músicas ou mais, pelo menos 10 devem continuar públicas; não é possível baixar desse mínimo. Com menos de 10, todas ficam públicas. O aviso sob o título explica a regra. Um interruptor apagado indica música de álbum público ou programado: torne o álbum privado primeiro.",
    "like": "Dos discos da sua loja, você escolhe os que também vão à prateleira do mercado (aimusiclist.com)."
  },
  "help.tracks.col_title": {
    "t": "Título",
    "what": "Mostra foto, título, artista, idioma da música e pequenas etiquetas.",
    "when": "Consulte para conferir rapidamente os dados de cada faixa.",
    "click": "Só mostra informações. Para alterá-las, clique em [[Editar]] na linha.",
    "care": "As etiquetas significam: **SRT** = letra sincronizada; **✦ nome** = ferramenta de IA usada; **Sem áudio** = arquivo ausente; **Em álbum publicado** = faixa de álbum público. No celular, a contagem de reproduções também aparece aqui.",
    "like": "É como a frente da capa: imagem, título e artista."
  },
  "help.tracks.col_genres": {
    "t": "Gêneros",
    "what": "Mostra até três gêneros da música. O primeiro, destacado, é o principal; os demais são extras.",
    "when": "Confira se cada faixa está no gênero correto.",
    "click": "Só informa. Para alterar, clique em [[Editar]] na linha.",
    "care": "O principal define o menu da música no aimusiclist.com. Os extras aparecem perto do título. No celular, esta coluna fica oculta.",
    "like": "É como a etiqueta que indica a seção do mercado onde fica o disco."
  },
  "help.tracks.col_length": {
    "t": "Duração",
    "what": "Tempo da música em minutos e segundos, por exemplo 3:25.",
    "when": "Confira se enviou o arquivo certo, especialmente se a duração parecer curta demais.",
    "click": "É uma informação do arquivo de áudio. Para mudar, envie outro arquivo em [[Editar]].",
    "care": "A música deve durar de 30 segundos a 15 minutos. Esta coluna fica oculta no celular.",
    "like": "É o tempo de execução escrito no verso da capa do disco."
  },
  "help.tracks.col_plays": {
    "t": "Reproduções",
    "what": "Quantas vezes cada música foi tocada no seu site, no total. Aponte para o número para ver os últimos 7 dias e hoje.",
    "when": "Use para descobrir as mais ouvidas. Números maiores ajudam a escolher o que publicar ou incluir em álbuns.",
    "click": "Só mostra dados. Eles mudam uma vez por dia ou imediatamente ao clicar em [[Atualizar agora]] na aba Estatísticas.",
    "care": "Reproduções no aimusiclist.com não entram aqui. O número aparece apenas se seu site contabiliza reproduções. Se parecer baixo, aguarde ou clique em [[Atualizar agora]]. **Oculto para visitantes** indica que eles não veem o número.",
    "like": "É como um contador em cada disco, mostrando quantas vezes foi ouvido na loja."
  },
  "help.tracks.row_buttons": {
    "t": "Botões da música",
    "what": "Botões no fim de cada linha: [[Ouvir]], [[Editar]] e [[Excluir]].",
    "when": "Use para ouvir, alterar dados ou remover a música.",
    "click": "[[Ouvir]] reproduz aqui (clique em [[Parar]] para interromper). [[Editar]] abre o formulário no topo. [[Excluir]] pede confirmação e remove imediatamente a música e seu áudio.",
    "care": "Excluir não pode ser desfeito. A música também sai do aimusiclist.com. [[Ouvir]] só aparece se houver áudio. Não é possível excluir uma faixa de álbum público se ele ficar com menos de 6 músicas.",
    "like": "São as ferramentas do balcão: ouvir, corrigir a etiqueta ou retirar o disco da loja."
  },
  "help.tracks.bulk_plays": {
    "t": "Contagem para visitantes",
    "what": "Define se visitantes podem ver a quantidade de reproduções das músicas marcadas.",
    "when": "Use para esconder o número de faixas novas ou mostrá-lo novamente.",
    "click": "Clique em [[Mostrar]] ou [[Ocultar]] para salvar imediatamente em todas as selecionadas.",
    "care": "Os números só aparecem se **Mostrar reproduções aos visitantes** estiver ativo em Informações do site. Esta opção existe apenas se o site conta reproduções. Você sempre vê os números no painel.",
    "like": "É como escolher quais discos exibem um adesivo “vendido 120 vezes”."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Mostrar",
    "what": "Permite que visitantes vejam as reproduções das músicas marcadas.",
    "when": "Clique quando quiser mostrar uma contagem que estava oculta.",
    "click": "Salva imediatamente nas faixas marcadas e limpa a seleção. Use [[Ocultar]] para desfazer quando quiser.",
    "care": "Nada aparece para visitantes se **Mostrar reproduções aos visitantes** estiver desligado em Informações do site.",
    "like": "É como recolocar o adesivo de contagem nos discos."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Ocultar",
    "what": "Esconde dos visitantes a contagem de reproduções das músicas selecionadas.",
    "when": "Use quando preferir não mostrar o número, por exemplo em faixas recém-enviadas.",
    "click": "Salva na hora e limpa a seleção. Se o interruptor geral estiver ativo, essas faixas mostram **Oculto para visitantes** sob o número na lista. Use [[Mostrar]] para desfazer.",
    "care": "Só o número fica escondido. As músicas continuam tocando e sendo contabilizadas.",
    "like": "É como tirar o adesivo da contagem; o disco continua na prateleira."
  },
  "help.tracks.plays_show": {
    "t": "Mostrar reproduções desta música aos visitantes",
    "what": "Define se visitantes veem quantas vezes a música tocou no seu site, como “1.234 reproduções”.",
    "when": "Desmarque se quiser manter o número desta faixa reservado.",
    "click": "Salva ao clicar em [[Salvar música]]. O número mostrado aos visitantes é atualizado uma vez por dia.",
    "care": "Só aparece se “Mostrar reproduções aos visitantes” estiver ativado em Informações do site. Ao visitar conectado, você vê todos os números.",
    "like": "É como decidir se um pequeno contador aparece neste disco."
  },
  "help.site.plays": {
    "t": "Contagem de reproduções",
    "what": "Configura a quantidade de reproduções de cada faixa no seu site. Não inclui reproduções feitas na tela do aimusiclist.com.",
    "when": "Use para definir se visitantes podem ver os números.",
    "click": "Este título explica o quadro. Se informar que a contagem ainda não começou, as estatísticas estão desativadas. A aba Estatísticas mostra como ativá-las.",
    "care": "Os números pertencem somente ao seu site. Não são enviados ao aimusiclist.com nem mudam os rankings.",
    "like": "É o contador do toca-discos da loja: aumenta sempre que alguém ouve uma faixa aqui."
  },
  "help.site.plays_switch": {
    "t": "Mostrar reproduções aos visitantes",
    "what": "Quando ativo, cada música mostra algo como “1.234 reproduções”. Começa desligado.",
    "when": "Ative para mostrar as músicas populares. Deixe desligado se preferir manter os números privados.",
    "click": "Salva ao clicar. Os números mudam diariamente ou ao clicar em [[Atualizar agora]] em Estatísticas. Quanto maior, mais audições. Para esconder só em algumas faixas, use a lista ou edição de músicas.",
    "care": "Quando você está conectado, vê as contagens de todas as músicas, inclusive as ocultas. Só você vê esses números; os visitantes não.",
    "like": "É como colocar o contador do toca-discos onde os clientes possam vê-lo."
  },
  "help.site.likes": {
    "t": "Curtidas",
    "what": "Configura o botão ♥ das músicas. Visitantes podem tocá-lo para mostrar que gostaram.",
    "when": "Use para exibir ou ocultar o botão no site inteiro.",
    "click": "Este título só explica o quadro. O interruptor abaixo faz a mudança. Se houver aviso para ativar estatísticas, ainda não é possível contar curtidas; veja a aba Estatísticas.",
    "care": "Curtidas são contadas apenas no seu site. Não são enviadas ao aimusiclist.com nem alteram os rankings de lá.",
    "like": "É o mural de corações onde clientes mostram de quais discos gostam."
  },
  "help.site.likes_switch": {
    "t": "Mostrar botão de curtir",
    "what": "Mostra ou esconde o botão ♥ de todas as músicas. Começa ativado.",
    "when": "Mantenha ativo para saber o que as pessoas gostam. Desative se não quiser corações no site.",
    "click": "A mudança salva na hora. Visitantes podem clicar em ♥ sem login e clicar outra vez para desfazer. Os números mudam diariamente; quanto maior, mais pessoas gostaram.",
    "care": "O botão só aparece com as estatísticas ativas. Desligar esconde os corações, mas preserva os já recebidos. Ao religar, eles reaparecem.",
    "like": "É como pendurar ou retirar o mural de corações da loja."
  },
  "help.site.add": {
    "t": "Adicionar ao aimusiclist",
    "what": "Configura o botão “+ aimusiclist”. Com ele, visitantes adicionam sua música às próprias playlists no aimusiclist.com.",
    "when": "Use para mostrar ou esconder esse botão no site.",
    "click": "Este título só explica o quadro. O interruptor abaixo faz a mudança. Se houver aviso de conexão, o site ainda não está ligado ao aimusiclist, então o botão não aparece.",
    "like": "É uma etiqueta “leve para o mercado”: o cliente pode guardar a música na própria cesta do aimusiclist.com."
  },
  "help.site.add_switch": {
    "t": "Mostrar o botão “+ aimusiclist”",
    "what": "Mostra ou esconde o botão “+ aimusiclist” junto das músicas e no player. Começa ativado.",
    "when": "Mantenha para ouvintes guardarem suas faixas em playlists e voltarem depois. Desative se não quiser o botão.",
    "click": "Salva ao clicar. Quando um visitante usa o botão, abre uma janelinha do aimusiclist (nova aba no celular), onde escolhe uma playlist sem login.",
    "care": "Só aparece para músicas públicas no aimusiclist e com o site conectado. Este interruptor não publica nem oculta músicas.",
    "like": "É como colocar “adicionar à cesta” nos discos que também estão no grande mercado."
  },
  "help.tracks.bulk_mood": {
    "t": "Alterar o clima das músicas marcadas",
    "what": "Define de uma vez o clima, como Calm ou Energetic, de todas as músicas selecionadas. Ao escolher outro campo em **O que alterar**, muda essa informação em vez do clima.",
    "when": "Use após enviar várias músicas ou quando quiser organizá-las pelo sentimento.",
    "click": "Nada acontece até clicar em [[Aplicar]]. As faixas marcadas recebem o valor, que aparece no site e no aimusiclist.com pouco depois.",
    "care": "O valor antigo é substituído. Este quadro só aparece quando o aimusiclist.com oferece informações extras com opções de seleção.",
    "like": "É como colocar uma etiqueta colorida “calma” em vários discos para encontrá-los pelo clima."
  },
  "help.tracks.bulk_mood_field": {
    "t": "O que alterar",
    "what": "Escolhe qual informação extra será aplicada às músicas marcadas. Clima aparece primeiro.",
    "when": "Mude se quiser definir algo além do clima em várias músicas.",
    "click": "A escolha só altera as opções abaixo. Nada é salvo antes de clicar em [[Aplicar]].",
    "care": "A lista vem do aimusiclist.com e pode crescer. Aqui aparecem apenas informações escolhidas por lista.",
    "like": "É como escolher o tipo de etiqueta que vai colar: clima ou outra informação."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Aplicar",
    "what": "Salva o valor escolhido em todas as músicas marcadas.",
    "when": "Clique depois de selecionar as músicas e o valor.",
    "click": "Salva na hora, informa quantas faixas mudaram e limpa as seleções. O aimusiclist.com mostra a mudança pouco depois.",
    "care": "Se escolher **— limpar (sem valor) —** ou não marcar nenhuma opção num campo de múltipla escolha, o valor é removido. Se nenhuma música estiver marcada, aparece apenas um lembrete.",
    "like": "É o momento de realmente colar as etiquetas nos discos."
  },
  "help.top.lang_fix": {
    "t": "Definir agora",
    "what": "Seleciona automaticamente todas as músicas sem idioma definido, para você corrigir de uma vez.",
    "when": "Clique no aviso de idioma das músicas.",
    "click": "A aba Músicas abre mostrando só essas faixas, já marcadas. O quadro de alterações em lote abre no campo de idioma. Escolha e aplique. Nada é salvo antes disso.",
    "care": "Se as músicas tiverem idiomas diferentes, desmarque algumas e faça em várias etapas.",
    "like": "É como reunir os discos sem etiqueta numa mesa para organizá-los juntos."
  },
  "help.tracks.aml_box": {
    "t": "Publicar também no aimusiclist.com",
    "what": "Define se a faixa também vai para o aimusiclist.com. Ela continua visível no seu próprio site de qualquer maneira.",
    "when": "Mantenha marcado para músicas que deseja divulgar e concorrer ao Top 100. Desmarque para deixá-las só no site.",
    "click": "Salva ao enviar ou clicar em [[Salvar música]]. Músicas públicas aparecem no aimusiclist.com alguns minutos depois. Você pode mudar na lista.",
    "care": "Pelo menos 10 músicas devem continuar públicas (todas, se tiver menos de 10). Por isso, uma música nova pode ser publicada mesmo desmarcada, ou a gravação ser recusada. Se estiver em álbum público, a opção fica marcada até você tornar o álbum privado.",
    "like": "É escolher quais discos da loja também vão para a prateleira do mercado."
  },
  "help.tracks.upload": {
    "t": "Enviar músicas",
    "what": "Área para colocar músicas novas no seu site: escolha arquivos, preencha os dados de cada um e clique no botão de envio.",
    "when": "Use sempre que tiver novas faixas. É possível enviar até 20 de uma vez.",
    "click": "Escolher arquivos apenas os coloca na lista. Nada é salvo até clicar em [[Enviar … música(s)]]. Depois, eles aparecem imediatamente no site.",
    "care": "São aceitos MP3, M4A ou WAV, de 30 segundos a 15 minutos, com no máximo 15 MB cada.",
    "like": "É a porta dos fundos por onde chegam os discos novos antes de ir às prateleiras."
  },
  "help.tracks.choose": {
    "t": "Escolher arquivos",
    "what": "Abre uma janela para escolher arquivos de áudio no computador. Você também pode arrastá-los para este quadro.",
    "when": "Use para começar o envio. Pode escolher vários de uma vez.",
    "click": "Os arquivos entram na lista abaixo, sem serem enviados ainda. Tipo incompatível aparece como “Falhou” na linha.",
    "care": "Máximo de 20 arquivos. Os extras ficam de fora. MP3 e M4A devem ter até 15 MB. WAV vira MP3 de 320 kbps neste navegador; o MP3 também precisa ter até 15 MB (cerca de 6 minutos e meio). Duração de 30 segundos a 15 minutos.",
    "like": "É como colocar discos numa cesta; eles ainda não estão na prateleira."
  },
  "help.tracks.name_tags": {
    "t": "Ler gênero, clima e idioma dos ( ) no nome do arquivo",
    "what": "Quando ativado, um nome como “Midnight Rain (R&B, Neo Soul; Romantic, en)” preenche os campos automaticamente. O título fica “Midnight Rain”.",
    "when": "Ative se nomeia arquivos pelo guia de IA. Desative se os parênteses fazem parte do título real.",
    "click": "A lista é lida novamente na hora. Só os campos ainda não alterados manualmente são preenchidos. O navegador lembra sua escolha.",
    "care": "Antes de “;” vêm os gêneros (o primeiro é o principal). Depois vêm clima e código de idioma. Palavras desconhecidas são ignoradas e mostradas em cinza. Partes como (Live) ou (feat. X) continuam no título.",
    "like": "É como um atendente lendo o adesivo da caixa e preenchendo a etiqueta do disco."
  },
  "help.tracks.common": {
    "t": "Aplicar a todas as músicas deste envio",
    "what": "Os campos abaixo valem para todas as faixas deste lote: ferramenta de IA, artista, dados extras e publicação no aimusiclist.com.",
    "when": "Configure uma vez antes de clicar em Enviar.",
    "click": "Nada é salvo até o envio. Gênero, clima e idioma não ficam aqui porque são definidos para cada arquivo acima.",
    "care": "Se uma música precisar de dado diferente, envie primeiro e depois use [[Editar]] na lista.",
    "like": "É como colar uma etiqueta na cesta toda, não em cada disco."
  },
  "help.tracks.artist": {
    "t": "Artista",
    "what": "Nome exibido como cantor ou criador da música. A primeira opção é o nome do seu site.",
    "when": "Mantenha o nome do site na maioria das músicas. Escolha outro se usar outro nome artístico.",
    "click": "Salva ao enviar ou clicar em [[Salvar música]]. Se escolher o nome do site e depois renomeá-lo, a música acompanha a mudança.",
    "care": "Outros nomes vêm do quadro “Outros artistas” em Informações do site, com até 20 nomes. Adicione lá primeiro.",
    "like": "É o nome impresso na capa, abaixo do título."
  },
  "help.tracks.up_start": {
    "t": "Enviar … música(s)",
    "what": "Envia os arquivos em espera para o site, um de cada vez. O número do botão mostra quantas músicas faltam.",
    "when": "Clique quando todos os arquivos tiverem gênero principal e idioma.",
    "click": "Cada linha mostra o andamento. Quando terminar, as músicas estarão no site, e as públicas serão enviadas ao aimusiclist.com ao final.",
    "care": "O botão fica bloqueado se algum campo obrigatório estiver vazio. Mantenha esta página aberta durante o envio. Se algumas falharem, as demais continuarão salvas.",
    "like": "É levar a cesta para a loja e colocar cada disco na prateleira."
  },
  "help.tracks.up_retry": {
    "t": "Tentar novamente as músicas com falha",
    "what": "Tenta reenviar apenas as músicas que falharam, por exemplo, por queda de conexão.",
    "when": "Aparece quando há falhas. Confira a internet antes de clicar.",
    "click": "As faixas com erro são enviadas novamente. Se uma já estava cadastrada, só o áudio é reenviado, sem duplicar a música.",
    "care": "Tipo de arquivo errado não pode ser reenviado. Se falhou por tamanho ou duração, corrija o arquivo, remova a linha e adicione novamente.",
    "like": "É voltar para buscar discos que caíram da cesta no caminho."
  },
  "help.tracks.up_clear": {
    "t": "Limpar lista",
    "what": "Esvazia de uma vez a lista de arquivos em envio.",
    "when": "Use ao terminar um envio ou quando quiser começar novamente.",
    "click": "Todas as linhas somem imediatamente. Músicas já enviadas continuam no site.",
    "care": "Não funciona durante um envio. Os campos preenchidos dos arquivos ainda não enviados serão perdidos.",
    "like": "É esvaziar a cesta; os discos já nas prateleiras continuam lá."
  },
  "help.tracks.edit": {
    "t": "Editar",
    "what": "Formulário para alterar uma música já enviada. Abre quando você clica em [[Editar]] na lista.",
    "when": "Use para corrigir título, gêneros, idioma, artista ou trocar o áudio.",
    "click": "Os campos superiores só são salvos com [[Salvar música]]. Imagem e letra na parte inferior salvam imediatamente ao serem alteradas.",
    "care": "Enquanto este formulário está aberto, substitui o quadro de envio. Clique em [[Cancelar]] ou salve para voltar ao envio.",
    "like": "É tirar um disco da prateleira para corrigir sua etiqueta."
  },
  "help.tracks.title": {
    "t": "Título",
    "what": "Nome da música mostrado no seu site e no aimusiclist.com.",
    "when": "Mude se o título vindo do arquivo estiver errado ou precisar de correção.",
    "click": "Salva ao clicar em [[Salvar música]]. O novo título aparece no aimusiclist.com pouco depois, para músicas públicas.",
    "care": "O título não pode ficar vazio e tem limite de 100 caracteres.",
    "like": "É o nome grande impresso na capa do disco."
  },
  "help.tracks.replace_audio": {
    "t": "Substituir áudio (opcional)",
    "what": "Escolha outro arquivo de som para substituir o áudio desta faixa. Título, gêneros, imagem e letra são mantidos.",
    "when": "Use se criou uma versão melhor ou enviou o arquivo errado.",
    "click": "Nada acontece até clicar em [[Salvar música]]. Depois o arquivo novo é enviado e substitui o antigo.",
    "care": "O áudio anterior desaparece após salvar. Guarde uma cópia no computador. Valem as regras do envio: MP3, M4A ou WAV, de 30 segundos a 15 minutos e até 15 MB.",
    "like": "É colocar um disco novo dentro da mesma capa."
  },
  "help.tracks.save": {
    "t": "Salvar música",
    "what": "Salva tudo que você mudou no formulário de edição acima.",
    "when": "Clique após terminar as alterações de título, gêneros, idioma e demais campos.",
    "click": "As mudanças são salvas e o formulário fecha. Aparecem no seu site na hora e no aimusiclist.com pouco depois, se públicas. Se escolheu áudio novo, ele também é enviado com indicador de progresso.",
    "care": "Salvar pode ser recusado, por exemplo, sem gênero principal ou se ocultar deixaria menos de 10 músicas públicas. Uma mensagem vermelha explica e nada é salvo.",
    "like": "É devolver o disco à prateleira com a etiqueta corrigida."
  },
  "help.tracks.cancel": {
    "t": "Cancelar",
    "what": "Fecha o formulário de edição sem salvar os campos acima.",
    "when": "Use se abriu a música errada ou mudou de ideia.",
    "click": "O formulário fecha e o quadro de envio volta. Alterações ainda não salvas são descartadas.",
    "care": "Imagem e letra são salvas no momento da mudança; Cancelar não desfaz essas alterações.",
    "like": "É colocar o disco de volta sem mexer na etiqueta."
  },
  "help.tracks.image": {
    "t": "Imagem da música",
    "what": "Pequena imagem da faixa, mostrada atrás do botão de reprodução no seu site e no aimusiclist.com.",
    "when": "Troque se quiser uma imagem própria em vez da padrão.",
    "click": "Os botões abaixo funcionam imediatamente, sem esperar [[Salvar música]].",
    "care": "Cada música recebe uma imagem padrão no envio. A escolhida é salva em um quadrado pequeno (100×100) e em versão maior, se a imagem original permitir.",
    "like": "É a capa que as pessoas veem antes de apertar Play."
  },
  "help.tracks.image_lg": {
    "t": "Deixar a imagem nítida nos cartões grandes",
    "what": "O aviso indica que sua música tem apenas a imagem pequena. Nos cartões grandes do aimusiclist.com, como o topo do Top 100, ela pode parecer borrada.",
    "when": "Aparece em imagens antigas ou enviadas a partir de arquivos muito pequenos.",
    "click": "Clique em [[Alterar imagem]] e envie a foto novamente. O aviso some quando a versão grande é salva.",
    "care": "Use uma imagem com pelo menos 200 pixels de largura na área recortada. Uma imagem menor não pode gerar uma versão grande.",
    "like": "É como reimprimir uma pequena capa como pôster para a vitrine."
  },
  "help.tracks.image_change": {
    "t": "Alterar imagem",
    "what": "Permite escolher no computador uma nova imagem para a música.",
    "when": "Use para dar uma imagem própria à faixa ou substituir a atual.",
    "click": "Abre uma janela para recortar ou reduzir. Ao clicar em [[Salvar imagem]], ela é salva e aparece no site. Músicas públicas a mostram no aimusiclist.com pouco depois.",
    "care": "JPG, PNG, WebP ou GIF, com até 2 MB. Apenas a versão reduzida é enviada, não a original.",
    "like": "É colocar uma capa nova no disco."
  },
  "help.tracks.image_reset": {
    "t": "Voltar à imagem padrão",
    "what": "Remove a imagem enviada e recupera a imagem padrão da música.",
    "when": "Use quando não quiser mais a foto personalizada.",
    "click": "A mudança acontece imediatamente, sem confirmação. A imagem padrão aparece no site na hora.",
    "care": "A imagem personalizada é excluída, inclusive a versão grande. Para usá-la novamente, envie pelo botão [[Alterar imagem]].",
    "like": "É tirar a capa personalizada e recolocar a capa simples da loja."
  },
  "help.tracks.lyrics": {
    "t": "Letra (.srt)",
    "what": "Palavras da música em arquivo .srt, com o tempo de cada trecho da letra.",
    "when": "Adicione quando quiser que os ouvintes acompanhem a letra. Muitas ferramentas de música por IA fornecem .srt.",
    "click": "Enviar ou excluir tem efeito imediato, sem [[Salvar música]]. No seu site, o visitante clica em SRT e lê a letra sem os tempos.",
    "care": "O arquivo deve terminar em .srt, ser texto UTF-8 e ter no máximo 100 KB. Precisa de linhas de tempo como 00:00:01,000 --> 00:00:04,000.",
    "like": "É a folha com a letra guardada dentro da capa do disco."
  },
  "help.tracks.lyrics_upload": {
    "t": "Enviar .srt / Substituir .srt",
    "what": "Escolhe no computador um arquivo .srt de letra para a música. Se já houver letra, o botão muda para Substituir.",
    "when": "Use para acrescentar a letra ou corrigir a atual.",
    "click": "Ao escolher, o arquivo é verificado e salvo. A letra anterior é substituída. Uma mensagem vermelha aparece se o arquivo estiver incorreto.",
    "care": "Apenas .srt com até 100 KB, em UTF-8. Arquivos sem linhas de tempo são recusados.",
    "like": "É colocar uma folha de letra nova dentro da capa."
  },
  "help.tracks.lyrics_view": {
    "t": "Ver arquivo",
    "what": "Abre o arquivo de letra salvo para esta música.",
    "when": "Use para conferir se a letra correta foi guardada.",
    "click": "O arquivo abre em outra aba, com os horários. Nada é alterado.",
    "like": "É como tirar a folha de letra da capa para lê-la."
  },
  "help.tracks.lyrics_delete": {
    "t": "Excluir letra",
    "what": "Remove a letra desta música.",
    "when": "Use se a letra estiver errada e não tiver outra, ou se a música não deva ter letra.",
    "click": "Uma pergunta pede confirmação. Se aceitar, a letra é excluída na hora e a marca SRT desaparece.",
    "care": "Não é possível desfazer. Para recuperar, envie o arquivo .srt novamente.",
    "like": "É como retirar a folha com a letra da capa e jogá-la fora."
  },
  "help.tracks.upguide": {
    "t": "Preencher gênero e clima automaticamente",
    "what": "Guia curto para evitar escolher gênero, clima e idioma manualmente em cada música. Você entrega um arquivo de instruções a uma IA gratuita e ela sugere um nome especial para a faixa.",
    "when": "Leia antes de criar suas próximas músicas. É mais útil quando você envia muitas de uma vez.",
    "click": "O ✕ fecha o guia deixando um botão pequeno, que o abre novamente. Este navegador lembra sua preferência.",
    "care": "O guia não muda como a música é produzida. Ele só define o formato do título.",
    "like": "É como escrever a etiqueta na caixa antes do disco chegar, para não precisar organizá-lo na porta."
  },
  "help.tracks.upguide_dl": {
    "t": "Baixar o guia para IA",
    "what": "Baixa o arquivo de instruções do aimusiclist.com. É um texto simples para a IA ler.",
    "when": "Antes de criar uma faixa, anexe o arquivo ao ChatGPT, Claude ou Gemini (planos gratuitos funcionam) e peça o título.",
    "click": "O arquivo é salvo no seu computador. Nada muda no site.",
    "care": "Guarde o nome fornecido pela IA de música ao baixar a faixa. A parte entre ( ) é usada para preencher os campos aqui.",
    "like": "É um cartão de receita entregue a um ajudante para que todas as etiquetas saiam iguais."
  },
  "help.tracks.uf_all": {
    "t": "Usar em todos os arquivos",
    "what": "Copia o valor deste campo para o mesmo campo de todos os outros arquivos da lista.",
    "when": "Use quando muitas músicas têm gênero, clima ou idioma iguais. Preencha a primeira e clique aqui.",
    "click": "As outras linhas mudam imediatamente, e uma mensagem informa quantas. Arquivos já enviados não são alterados.",
    "care": "Isso substitui o que você escolheu nos outros arquivos. Depois você ainda pode corrigir cada um manualmente.",
    "like": "É como carimbar a mesma etiqueta em todas as caixas."
  },
  "help.tracks.uf_mood": {
    "t": "Clima",
    "what": "Sentimento da música, como Sad ou Romantic. O aimusiclist.com decide quais opções aparecem.",
    "when": "Marque os climas que combinam. É opcional.",
    "click": "A seleção vale apenas para este arquivo e é salva no envio. Ao chegar ao limite mostrado em ( ), as demais caixas ficam bloqueadas até desmarcar uma.",
    "care": "Este campo só aparece após o site receber a lista de informações do aimusiclist.com.",
    "like": "É uma etiqueta colorida que indica a sensação da música antes de alguém ouvi-la."
  },
  "help.tracks.uf_genre": {
    "t": "Gênero",
    "what": "Gêneros desta música: um principal e até dois extras.",
    "when": "Escolha para cada arquivo. O principal é obrigatório.",
    "click": "A escolha vale só para este arquivo e será salva no envio.",
    "care": "O gênero principal define o menu no aimusiclist.com; os extras aparecem ao lado do título.",
    "like": "É a etiqueta da prateleira: primeiro a seção principal, depois duas observações."
  },
  "help.tracks.uf_lang": {
    "t": "Idioma da música",
    "what": "Idioma das palavras cantadas. Você também pode indicar um segundo idioma.",
    "when": "Escolha para cada arquivo. Se não houver canto, use “Instrumental (sem letra)”.",
    "click": "A escolha vale apenas para este arquivo e é salva no envio.",
    "care": "Não é o idioma da tela do site. “Instrumental” não combina com outro idioma, por isso bloqueia o segundo campo. O aimusiclist.com usa o idioma em seus rankings.",
    "like": "É uma etiqueta que indica em qual idioma a música é cantada."
  },
  "help.tracks.queue": {
    "t": "Arquivos para enviar",
    "what": "Lista dos arquivos escolhidos. Cada linha mostra título, nome do arquivo, tamanho, status e campos da música.",
    "when": "Confira antes do envio. Toda faixa precisa de gênero principal e idioma.",
    "click": "Os dados ficam aqui até enviar. A etiqueta verde “Preenchido pelo nome do arquivo” indica uso dos ( ). “Escolha abaixo” significa que você precisa preencher.",
    "care": "Linhas com campos vazios ficam vermelhas. Durante o envio, os campos viram um resumo e não podem ser alterados.",
    "like": "É a lista de entregas na porta dos fundos. Confira cada caixa antes de colocá-la na prateleira."
  },
  "help.tracks.up_remove": {
    "t": "Remover",
    "what": "Retira um arquivo da lista de envio.",
    "when": "Use se escolheu arquivo errado ou se apareceu “Falhou” por tipo ou duração.",
    "click": "A linha some imediatamente. O arquivo no computador não é excluído.",
    "care": "O botão fica oculto durante o envio e para arquivos já enviados. Para excluir música enviada, use a lista de músicas.",
    "like": "É como tirar um disco errado da cesta antes de entrar na loja."
  },
  "help.tracks.up_need": {
    "t": "Campos vazios",
    "what": "Este aviso lista arquivos ainda sem gênero principal ou idioma.",
    "when": "Aparece automaticamente enquanto faltar algum campo obrigatório. O botão Enviar fica bloqueado.",
    "click": "Clique numa linha para ir ao campo vazio. O aviso desaparece quando todos os obrigatórios estiverem preenchidos.",
    "care": "Só os primeiros 12 campos vazios são listados. O número no topo conta todos.",
    "like": "É uma lista de conferência na porta: a entrega só entra depois de completar tudo."
  },
  "help.tracks.up_after": {
    "t": "Conferir Novidades no aimusiclist.com",
    "what": "Aviso exibido após o envio, indicando onde encontrar as novas músicas públicas.",
    "when": "Aparece se o site está conectado ao aimusiclist.com e pelo menos uma música nova é pública.",
    "click": "O link abre a página Novidades do aimusiclist.com em outra aba.",
    "care": "O aimusiclist.com precisa de alguns minutos para receber as músicas. Se ainda não aparecerem após cerca de 5 minutos, confira mais tarde.",
    "like": "É como ir ao mercado conferir se o disco novo já está na prateleira."
  },
  "help.tracks.pubmin": {
    "t": "Públicas: n · Mínimo: n",
    "what": "O primeiro número mostra quantas músicas estão públicas no aimusiclist.com. O segundo indica o mínimo exigido.",
    "when": "Confira antes de ocultar músicas para saber quantas ainda pode desativar.",
    "click": "É apenas uma contagem. Atualiza automaticamente ao publicar ou ocultar faixas.",
    "care": "Regra: com 10 músicas ou mais, pelo menos 10 ficam públicas. Com menos de 10, todas ficam públicas. Só contam músicas com áudio. Faixas de álbuns públicos contam; álbuns agendados só contam após a publicação.\nSe o primeiro número for menor que o mínimo, um aviso amarelo pede mais músicas públicas. Você escolhe quais. Excluir uma faixa é sempre permitido.",
    "like": "O mercado (aimusiclist.com) pede ao menos 10 discos na prateleira de cada loja. Esta linha mostra quantos você tem lá."
  },
  "help.top.pubmin_go": {
    "t": "Escolher músicas",
    "what": "Leva você à lista onde decide quais faixas ficam públicas.",
    "when": "Clique no aviso de poucas músicas públicas.",
    "click": "A aba Músicas abre na linha “Públicas · Mínimo”. Ative a opção pública das faixas desejadas. Cada clique salva imediatamente.",
    "care": "Músicas sem áudio não contam. O aviso desaparece sozinho quando você atingir o mínimo.",
    "like": "É como ir direto à vitrine para colocar mais discos."
  },
  "help.tracks.pub_tip": {
    "t": "Dica sobre publicação",
    "what": "Nota curta exibida na primeira vez que você usa o interruptor público. Explica quando a música aparece no aimusiclist.com.",
    "when": "Leia uma vez. Surge apenas após o primeiro uso neste navegador.",
    "click": "[[Não mostrar novamente]] esconde o aviso permanentemente neste navegador. [[Fechar]] esconde só até abrir o painel de novo.",
    "care": "Esconder a dica não altera suas músicas.",
    "like": "É uma placa: “O que você colocar aqui aparece no mercado em um ou dois minutos”."
  },
  "help.albums.form": {
    "t": "Novo álbum / Editar álbum",
    "what": "Aqui você cria ou modifica um álbum: músicas em ordem escolhida, título, capa e descrição breve.",
    "when": "Use para juntar músicas como num disco de verdade. Álbuns ficam no seu site; os públicos aparecem no aimusiclist.com.",
    "click": "Nada é salvo enquanto você preenche. Tudo é guardado ao clicar em [[Salvar álbum]]. [[Cancelar]] fecha e descarta as alterações.",
    "care": "Um álbum comporta até 35 músicas. Para ser público, precisa de 6 a 35 faixas, todas com áudio. Pode salvar com menos, mas ficará privado.",
    "like": "É como montar um disco: escolher faixas, ordem e capa."
  },
  "help.albums.title": {
    "t": "Título do álbum",
    "what": "Nome do álbum exibido no site e, se público, no aimusiclist.com.",
    "when": "Preencha sempre que criar um álbum. Não é possível salvar sem título.",
    "click": "Salva ao clicar em [[Salvar álbum]]. Pode alterar depois com [[Editar]] na lista de álbuns.",
    "care": "Até 100 caracteres.",
    "like": "É o nome grande na frente da capa."
  },
  "help.albums.artist": {
    "t": "Artista",
    "what": "Quem assina o álbum. A primeira opção é o nome do site; as outras vêm de “Outros artistas” em Informações do site.",
    "when": "Mantenha o nome do site se usar seu nome habitual. Escolha outro para projeto paralelo ou outro nome artístico.",
    "click": "Salva ao clicar em [[Salvar álbum]]. O nome aparece sob o título no site e no aimusiclist.com.",
    "care": "Se escolher o nome do site, o artista do álbum acompanha futuras mudanças desse nome. Não é permitido usar nome de cantor famoso.",
    "like": "É a identificação do músico que fez o disco."
  },
  "help.albums.desc": {
    "t": "Apresentação do álbum",
    "what": "Algumas frases sobre o álbum, exibidas abaixo do título no seu site e no aimusiclist.com.",
    "when": "Escreva sobre o tema, a criação ou o clima. Também pode deixar vazio.",
    "click": "Salva com [[Salvar álbum]]. O contador abaixo mostra os caracteres restantes.",
    "care": "Até 200 caracteres. Ao atingir o limite, não é possível digitar mais. Um emoji conta como um caractere. Pode usar quebras de linha, mas apenas texto simples, sem imagens ou links.",
    "like": "É o pequeno texto no verso da capa."
  },
  "help.albums.pub": {
    "t": "Quando publicar",
    "what": "Escolha quando o álbum será lançado: imediatamente ou na data e hora definidas.",
    "when": "Use [[Agora]] na maioria dos casos. Escolha uma data para anunciar o lançamento aos fãs.",
    "click": "A escolha vale ao clicar em [[Salvar álbum]]. O álbum só fica público se tiver de 6 a 35 músicas, todas com áudio; caso contrário, é salvo como privado.",
    "care": "No álbum novo, isso acontece automaticamente. Ao editar, o estado público anterior é mantido. Você pode publicar ou ocultar pela opção na lista de álbuns.",
    "like": "É como escolher o dia do lançamento: hoje ou na data marcada no calendário."
  },
  "help.albums.pub_now": {
    "t": "Agora",
    "what": "Publica o álbum assim que ele é salvo.",
    "when": "Escolha quando estiver pronto para as pessoas ouvirem hoje.",
    "click": "Após [[Salvar álbum]], um álbum novo com 6 a 35 faixas com áudio fica público imediatamente. Aparece no aimusiclist.com em um ou dois minutos. Se havia data agendada, Agora a cancela.",
    "care": "Se houver menos de 6 faixas ou alguma sem áudio, o álbum fica privado. A mensagem após salvar explica o resultado.",
    "like": "É colocar o disco na prateleira do mercado assim que estiver pronto."
  },
  "help.albums.pub_at": {
    "t": "Na data e hora que eu escolher",
    "what": "O álbum fica aguardando e é publicado automaticamente na data e hora escolhidas.",
    "when": "Use para planejar um lançamento, como às 20h da próxima sexta-feira, e avisar os fãs antes.",
    "click": "Abre um campo de data e hora, usando o fuso deste dispositivo. Após [[Salvar álbum]], a lista mostra o agendamento. Até lá, o álbum fica oculto no site e no aimusiclist.com. Cerca de um minuto depois do horário, aparece nos dois.",
    "care": "Escolha um momento futuro, até 366 dias à frente. Enquanto aguarda, as músicas não podem ficar privadas. São necessárias 6 a 35 faixas com áudio. Na versão PHP pode demorar até cerca de 5 minutos.",
    "like": "É como programar o alarme da loja: quando toca, o disco novo aparece na vitrine."
  },
  "help.albums.cover": {
    "t": "Imagem da capa",
    "what": "Imagem quadrada do álbum, mostrada no seu site e no aimusiclist.com se ele for público.",
    "when": "Adicione quando puder. Uma capa facilita notar e lembrar o álbum, mas é opcional.",
    "click": "Clique em [[Escolher capa]] para selecionar e ajustar uma imagem quadrada. Ela será salva com o álbum ao clicar em [[Salvar álbum]].",
    "care": "A capa é salva em 200×200. Excluir o álbum remove apenas a capa dele, nunca as músicas.",
    "like": "É a capa do disco: a primeira coisa vista na prateleira."
  },
  "help.albums.pick": {
    "t": "Escolher músicas (em ordem)",
    "what": "Aqui você coloca faixas no álbum. À esquerda (acima no celular) ficam suas músicas; à direita (abaixo no celular), as faixas do álbum na ordem de reprodução.",
    "when": "Use ao criar ou reorganizar álbuns. Funciona mesmo com centenas de músicas.",
    "click": "Encontre e marque faixas à esquerda, depois clique em [[Adicionar selecionadas →]]. Elas vão ao final da lista da direita e desaparecem da esquerda. Nada salva até [[Salvar álbum]].",
    "care": "Até 35 faixas. Uma música pode estar em mais de um álbum; uma etiqueta indica outro álbum. Faixas “Sem áudio” não têm arquivo, e um álbum com elas não pode ser público.",
    "like": "A esquerda é o estoque; a direita, o álbum que você está montando faixa por faixa."
  },
  "help.albums.save": {
    "t": "Salvar álbum",
    "what": "Salva de uma vez título, artista, descrição, lançamento, capa e músicas do álbum.",
    "when": "Clique ao terminar de criar ou editar.",
    "click": "Uma mensagem informa se ficou público agora, agendado ou privado por faltar de 6 a 35 faixas com áudio. Depois aparece na lista. Álbuns públicos chegam ao aimusiclist.com em um ou dois minutos.",
    "care": "O título é obrigatório. Datas escolhidas devem ser futuras. Algumas mudanças podem ser recusadas, por exemplo, se deixarem menos de 10 músicas públicas no site. A mensagem vermelha explica.",
    "like": "É como embalar o álbum pronto e colocá-lo na prateleira."
  },
  "help.albums.cancel": {
    "t": "Cancelar",
    "what": "Fecha o formulário do álbum sem salvar.",
    "when": "Use se mudou de ideia ou quiser recomeçar.",
    "click": "O formulário fecha imediatamente. Todas as mudanças feitas desde que abriu são descartadas, inclusive a nova capa. O álbum continua como foi salvo antes.",
    "care": "Não há pergunta de confirmação. Alterações não salvas serão perdidas.",
    "like": "É guardar o álbum inacabado sem mudar o que já está na prateleira."
  },
  "help.albums.new": {
    "t": "Novo álbum",
    "what": "Abre um formulário vazio para criar um álbum.",
    "when": "Clique quando quiser reunir algumas músicas em um álbum.",
    "click": "O formulário aparece acima da lista. Nada é criado antes de clicar em [[Salvar álbum]].",
    "care": "Enquanto o formulário estiver aberto, este botão fica oculto. Salve ou cancele primeiro.",
    "like": "É pegar uma capa nova e vazia para um disco."
  },
  "help.albums.list": {
    "t": "Meus álbuns",
    "what": "Mostra todos os álbuns criados. Todos aparecem no seu site. Os com opção pública também aparecem no aimusiclist.com e suas faixas ficam públicas lá.",
    "when": "Use para conferir, editar ou excluir álbuns.",
    "click": "Cada linha mostra a opção pública, título, quantidade de faixas e botões [[Editar]] e [[Excluir]].",
    "care": "Álbuns agendados ficam ocultos em todos os lugares até o lançamento. Enquanto públicos ou agendados, não é possível tornar suas músicas privadas individualmente.",
    "like": "É a prateleira de álbuns: você escolhe quais também vão para o mercado."
  },
  "help.albums.pub_switch": {
    "t": "Público no aimusiclist",
    "what": "Define se o álbum também aparece no aimusiclist.com. No seu site ele continua presente de qualquer forma.",
    "when": "Ative para que mais gente encontre o álbum. Desative para retirá-lo do aimusiclist.com.",
    "click": "Salva ao clicar. Ao ativar, álbum e faixas aparecem no aimusiclist.com em um ou dois minutos. Ao desativar, saem de lá. Músicas publicadas separadamente continuam públicas.",
    "care": "Um interruptor cinza indica que faltam de 6 a 35 faixas com áudio; toque para saber o motivo. Desativar pode ser recusado se restarem menos de 10 músicas públicas no site.",
    "like": "Você decide quais álbuns da loja vão também à prateleira do mercado."
  },
  "help.albums.col_title": {
    "t": "Título do álbum",
    "what": "Esta coluna mostra o título e, abaixo, o artista. Pequenas etiquetas podem aparecer ao lado.",
    "when": "Confira rapidamente o estado de cada álbum.",
    "click": "“Será publicado…” significa que aguarda a data escolhida. “Precisa de 6 a 35 faixas com áudio” significa que ainda não pode ser público; adicione ou remova músicas ou envie o áudio faltante.",
    "like": "É a etiqueta na lateral de cada disco na prateleira."
  },
  "help.albums.col_count": {
    "t": "Quantidade de músicas",
    "what": "Mostra quantas faixas há em cada álbum.",
    "when": "Confira se o álbum pode ser público: precisa de 6 a 35 músicas.",
    "click": "Se houver menos de 6, clique em [[Editar]] e adicione faixas. O máximo é 35.",
    "like": "É como contar as faixas no verso da capa."
  },
  "help.albums.row_buttons": {
    "t": "Editar / Excluir",
    "what": "Botões no fim da linha: [[Editar]] abre o álbum; [[Excluir]] o remove.",
    "when": "Use Editar para mudar músicas, ordem, título, capa ou lançamento. Exclua quando não quiser mais o álbum.",
    "click": "Editar abre o formulário acima da lista. Excluir pede confirmação e remove o álbum e sua capa imediatamente. As músicas continuam no site.",
    "care": "Excluir não pode ser desfeito. Excluir um álbum público pode ser recusado se restarem menos de 10 músicas públicas no site.",
    "like": "Editar é corrigir o disco; Excluir é descartar capa e lista de faixas, mantendo as músicas no estoque."
  },
  "help.albums.pick_search": {
    "t": "Buscar títulos de músicas",
    "what": "Digite parte do título para ver, à esquerda, só as músicas correspondentes.",
    "when": "Use quando tiver muitas faixas e souber o nome da que procura.",
    "click": "A lista muda conforme digita. Maiúsculas e minúsculas são iguais. Apague o texto para mostrar tudo.",
    "care": "A busca considera só títulos, não artista nem letra.",
    "like": "É como perguntar ao responsável pelo estoque onde está uma música."
  },
  "help.albums.pick_genre": {
    "t": "Gênero",
    "what": "Mostra à esquerda apenas músicas de um gênero principal. A lista contém os gêneros que suas faixas usam.",
    "when": "Use para montar um álbum de um estilo, como apenas R&B.",
    "click": "A lista muda imediatamente. Uma faixa aparece se um de seus gêneros for o escolhido ou um subgênero dele. Escolha Todos os gêneros para ver tudo.",
    "care": "Serve apenas para encontrar faixas; não altera gêneros.",
    "like": "É como ir direto ao corredor de R&B no estoque."
  },
  "help.albums.pick_sort": {
    "t": "Ordem",
    "what": "Muda a ordem da lista à esquerda: envios recentes, antigos ou por título.",
    "when": "Use Mais recentes para encontrar novidades ou Título A–Z para buscar pelo nome.",
    "click": "A lista à esquerda é reorganizada. A ordem das faixas dentro do álbum não muda; ela é definida à direita.",
    "like": "É como organizar a prateleira por data ou nome."
  },
  "help.albums.pick_all": {
    "t": "Selecionar todas as exibidas",
    "what": "Marca todas as músicas que correspondem à busca e ao gênero atuais. O número mostra quantas são.",
    "when": "Use após filtrar, por exemplo, para escolher todo um gênero.",
    "click": "Marca todas as correspondentes, mesmo as mais abaixo. Clique novamente (Limpar seleção) para desmarcar. Elas ainda não entram no álbum: clique depois em [[Adicionar selecionadas →]].",
    "care": "Um álbum comporta até 35 faixas. Se escolher mais, só as primeiras que couberem serão adicionadas.",
    "like": "É como pedir “tudo desta prateleira”, sem apontar um por um."
  },
  "help.albums.pick_add": {
    "t": "Adicionar selecionadas →",
    "what": "Coloca as músicas marcadas no álbum. O número indica quantas estão selecionadas.",
    "when": "Clique após marcar músicas à esquerda.",
    "click": "As faixas vão ao fim da lista à direita, na ordem mostrada à esquerda, e somem da esquerda. Você pode reorganizá-las à direita. Só salva com [[Salvar álbum]].",
    "care": "O botão fica cinza sem seleção ou com 35 músicas no álbum. Se nem todas couberem, uma mensagem mostra quantas ficaram de fora.",
    "like": "É levar os discos escolhidos do estoque para dentro do álbum."
  },
  "help.albums.pick_recent": {
    "t": "Adicionar minhas mais recentes",
    "what": "Adiciona de uma vez as músicas enviadas mais recentemente. Escolha quantas no campo numérico, de 1 a 35 (inicialmente 10).",
    "when": "Use depois de enviar um lote novo para reuni-lo num álbum.",
    "click": "As faixas mais recentes com áudio que ainda não estão no álbum vão ao final da lista à direita, da mais nova para a mais antiga. Busca e gênero à esquerda não importam. Nada salva até [[Salvar álbum]].",
    "care": "Faixas sem áudio são ignoradas. O limite do álbum continua sendo 35. Se estiver cheio, o botão fica cinza.",
    "like": "É pedir “os últimos 10 discos que chegaram ao estoque”."
  },
  "help.albums.picked": {
    "t": "Neste álbum",
    "what": "Lista das faixas do álbum na ordem em que serão tocadas. Mostra também a quantidade, em vermelho se estiver fora de 6 a 35.",
    "when": "Use para conferir e ajustar a ordem.",
    "click": "Arraste ⠿ para cima ou para baixo ou use ▲ ▼. ✕ retira uma música do álbum, sem apagá-la do site. Salva com [[Salvar álbum]].",
    "care": "Um álbum público precisa de 6 a 35 faixas com áudio. “Sem áudio” impede a publicação. Se já estiver público, não será possível salvar com menos de 6.",
    "like": "É a lista no verso da capa: faixa 1, faixa 2, faixa 3…"
  },
  "help.albums.pick_clear": {
    "t": "Remover todas",
    "what": "Retira todas as faixas do álbum para você escolher novamente.",
    "when": "Use quando quiser recomeçar a lista de músicas.",
    "click": "Pede confirmação. Depois, a lista da direita fica vazia e as músicas voltam à esquerda. Nada salva até [[Salvar álbum]]; use [[Cancelar]] para manter a versão anterior.",
    "care": "As músicas não são excluídas; continuam no seu site.",
    "like": "É tirar as faixas do álbum e devolvê-las ao estoque."
  },
  "help.albums.cover_pick": {
    "t": "Escolher capa",
    "what": "Abre as imagens do dispositivo para escolher a capa. Uma janela permite ajustar o recorte.",
    "when": "Use para adicionar ou trocar a capa.",
    "click": "Depois de [[Salvar imagem]], a nova capa aparece com a indicação “Nova capa”. Ainda não foi salva no álbum: use [[Salvar álbum]]. [[Cancelar]] ao lado descarta a nova imagem.",
    "care": "JPG, PNG, WebP ou GIF de até 2 MB. Só a cópia pequena é enviada, nunca o arquivo original.",
    "like": "É escolher uma foto e ajustá-la à capa do disco."
  },
  "help.albums.cover_delete": {
    "t": "Remover capa",
    "what": "Retira a capa do álbum, sem mexer nas músicas.",
    "when": "Use se não quiser mais a imagem, por exemplo enquanto prepara outra.",
    "click": "Pede confirmação e remove a capa imediatamente, sem precisar de [[Salvar álbum]]. Visitantes verão um quadrado vazio.",
    "care": "Não é possível desfazer. Para recuperar, escolha a imagem novamente.",
    "like": "É tirar a capa do disco. O conteúdo continua lá."
  },
  "help.skins.use": {
    "t": "Usar esta aparência",
    "what": "Aplica ao site esta aparência já instalada. A aparência anterior é lembrada.",
    "when": "Clique quando quiser que visitantes vejam o site com esse visual.",
    "click": "Salva imediatamente. O novo visual aparece em cerca de 30 segundos. Para desfazer, use [[Voltar à aparência anterior]] ou escolha outra.",
    "care": "A aparência em uso não tem esse botão, porque já está aplicada. Músicas e menus não mudam.",
    "like": "É como vestir sua loja com uma roupa diferente."
  },
  "help.skins.update": {
    "t": "Atualizar",
    "what": "O criador de uma aparência da galeria lançou uma versão nova. Este botão a instala e fica perto da etiqueta **Nova versão**.",
    "when": "Use quando quiser melhorias e correções do visual.",
    "click": "A nova versão é verificada e substitui a anterior. A aparência ativa não muda. Se for a usada no site, visitantes verão o novo desenho em cerca de 30 segundos.",
    "care": "Atualiza só o visual, não o programa do site. Aparências enviadas por você não têm esse botão.",
    "like": "É como o alfaiate trazer uma roupa igual, mas mais bem ajustada."
  },
  "help.skins.download": {
    "t": "Baixar (para editar)",
    "what": "Salva no computador uma cópia da aparência incluída Claro ou Escuro. Ela serve de base para criar a sua.",
    "when": "Use para criar uma aparência própria. Entregue o arquivo a uma IA gratuita como ChatGPT ou Claude e peça mudanças de cores e disposição.",
    "click": "O navegador baixa o arquivo. Nada muda no site.",
    "care": "Aparências incluídas não podem ser editadas diretamente. Envie sua cópia editada com outro nome em **Enviar aparência** e clique em [[Usar esta aparência]].",
    "like": "É como levar para casa o molde de uma roupa e costurar a sua."
  },
  "help.skins.delete": {
    "t": "Excluir",
    "what": "Remove uma aparência enviada por você ou instalada da galeria. As incluídas (Claro e Escuro) não podem ser excluídas e mostram [[Baixar (para editar)]].",
    "when": "Use quando não precisar mais dela ou atingir o limite de 20 e quiser espaço para outra.",
    "click": "Pede confirmação e exclui imediatamente. Se estiver em uso, o site volta à aparência Claro.",
    "care": "Não é possível desfazer. Uma aparência da galeria pode ser reinstalada por **Explorar**. Uma aparência própria se perde se você não guardou o arquivo.",
    "like": "É jogar uma roupa fora do guarda-roupa. Guarde o molde se quiser refazê-la."
  },
  "help.skins.revert": {
    "t": "Voltar à aparência anterior",
    "what": "Reaplica a aparência que você usou antes. O botão mostra o nome dela.",
    "when": "Use se testou um visual novo e gostava mais do antigo.",
    "click": "Salva imediatamente e aparece aos visitantes em cerca de 30 segundos. A aparência que você deixou vira a anterior; outro clique troca de volta.",
    "care": "Só uma etapa anterior é lembrada. Se essa aparência foi excluída, o botão desaparece.",
    "like": "É tirar a roupa nova e vestir a de ontem."
  },
  "help.skins.title": {
    "t": "Aparências",
    "what": "Uma aparência é a roupa do site: cores, fontes e organização. Trocar não altera músicas, álbuns ou configurações.",
    "when": "Abra quando quiser mudar o visual ou houver versão nova.",
    "click": "Este é apenas o título; os botões abaixo fazem as mudanças. Seu site sempre tem **Claro** e **Escuro**, mais até 20 aparências adicionais.",
    "care": "Visitantes veem o novo visual em cerca de 30 segundos. Se excluir a aparência ativa, o site volta para Claro.",
    "like": "É como mudar a pintura e as prateleiras da loja sem tocar nos discos."
  },
  "help.skins.view": {
    "t": "Instaladas / Explorar",
    "what": "Duas telas da aba Aparências. **Instaladas** mostra as que você possui. **Explorar** abre a galeria de visuais criados por outras pessoas.",
    "when": "Use Instaladas para trocar, atualizar, excluir ou enviar seus visuais. Use Explorar para encontrar outro.",
    "click": "Só muda a tela, não seu site. Na primeira visita a Explorar, a galeria carrega a lista.",
    "like": "Instaladas é seu guarda-roupa; Explorar é a loja de roupas ao lado."
  },
  "help.skins.upload": {
    "t": "Enviar aparência",
    "what": "Adiciona um visual criado por você. É um arquivo de página web (.html) que segue o guia de aparências. Uma IA gratuita pode criá-lo.",
    "when": "Use quando quiser um visual diferente da galeria. Comece com uma aparência incluída em [[Baixar (para editar)]].",
    "click": "Preencha nome e arquivo, depois clique em [[Enviar aparência]]. Ela entra na lista, mas não é aplicada. Para usá-la, clique em [[Usar esta aparência]].",
    "care": "O arquivo é verificado; máximo de 100 KB, com locais de menu, conteúdo e player exatamente uma vez e sem esconder a frase **Powered by aimusiclist.com**. Código dinâmico e imagens de outros sites não são permitidos.",
    "like": "É costurar uma roupa própria e guardá-la no armário."
  },
  "help.skins.upload_name": {
    "t": "Nome da aparência",
    "what": "Nome da aparência na lista. Use de 1 a 32 letras minúsculas (a–z), números, - ou _.",
    "when": "Digite antes de enviar. Escolha um nome curto e fácil de reconhecer, como my-blue.",
    "click": "Nada salva antes de clicar em [[Enviar aparência]].",
    "care": "Não use maiúsculas nem espaços. **light** e **dark** são reservados. Se o nome já existir, a aparência antiga será substituída; se estiver ativa, os visitantes verão a nova em cerca de 30 segundos.",
    "like": "É a etiqueta costurada na roupa."
  },
  "help.skins.upload_file": {
    "t": "Arquivo da aparência",
    "what": "Arquivo da aparência no computador. Deve ser um único .html de até 100 KB.",
    "when": "Escolha depois de criar ou editar a aparência, por exemplo com ajuda de uma IA gratuita.",
    "click": "Apenas seleciona o arquivo. Nada é enviado até clicar em [[Enviar aparência]].",
    "care": "Somente um arquivo. Imagens dentro dele não podem vir de outros sites. Se for grande demais, peça à IA para simplificá-lo.",
    "like": "É pegar a roupa pronta antes de guardá-la no armário."
  },
  "help.skins.upload_btn": {
    "t": "Enviar aparência",
    "what": "Envia seu arquivo e verifica se ele pode ser usado.",
    "when": "Clique após informar o nome e escolher o arquivo.",
    "click": "Se houver problema, uma mensagem vermelha explica e nada é salvo. Se passar, aparece **Salvo** e a aparência entra na lista. Ela só será aplicada ao clicar em [[Usar esta aparência]].",
    "care": "Você pode guardar até 20 aparências além de Claro e Escuro. Se atingir o limite, exclua uma antes. Usar nome de aparência da galeria a transforma em sua versão própria, sem novas atualizações automáticas.",
    "like": "É como um inspetor conferindo a roupa antes de guardá-la."
  },
  "help.skins.gallery": {
    "t": "Galeria de aparências",
    "what": "Coleção compartilhada de aparências prontas. Cada cartão mostra foto, criador, tema claro ou escuro e versão. As mais recentes aparecem primeiro.",
    "when": "Use para mudar o visual com um clique, sem criar nada.",
    "click": "Clique na imagem ou em [[Prévia]] para experimentar no seu site. Use [[Aplicar]] para instalar e ativar.",
    "care": "Se aparecer **Atualize seu site para usar esta aparência.**, é preciso atualizar o programa primeiro.",
    "like": "É uma loja de roupas onde você experimenta os visuais antes de levá-los."
  },
  "help.skins.gal_reload": {
    "t": "Atualizar",
    "what": "Carrega novamente as aparências da galeria.",
    "when": "Use quando houver novidades ou a lista não carregar.",
    "click": "A lista é recarregada, e novas versões de aparências instaladas também são verificadas. Nada muda no site.",
    "care": "Se aparecer **Não foi possível carregar as aparências agora.**, espere um pouco e clique em [[Tentar novamente]].",
    "like": "É pedir o catálogo mais recente da loja de roupas."
  },
  "help.skins.gal_filter": {
    "t": "Filtro de aparências",
    "what": "Botões para mostrar apenas certas aparências: **Todas**, **Claras**, **Escuras** e etiquetas # que descrevem estilos.",
    "when": "Use quando a galeria estiver cheia e você procurar um estilo.",
    "click": "Só muda os cartões exibidos. Clique em **Todas** para ver tudo. Nada é salvo.",
    "care": "Uma etiqueta # aparece se ao menos duas aparências a usarem. Se nenhuma combinar, verá **Nenhuma aparência corresponde ao filtro.**",
    "like": "São as placas das seções numa loja: casacos de um lado, camisas do outro."
  },
  "help.skins.gal_preview": {
    "t": "Prévia",
    "what": "Mostra seu próprio site, com músicas e perfil, usando a aparência escolhida. Você também pode clicar na imagem do cartão.",
    "when": "Confira antes de aplicar, para ver como ficará de verdade.",
    "click": "Uma janela abre. Nada é salvo e os visitantes não veem a prévia. Feche com [[Fechar]] ou Esc. Também é possível aplicar a aparência nela.",
    "care": "Músicas não tocam e anúncios não aparecem na prévia. Se houver **Atualize seu site para usar esta aparência.**, a prévia só estará disponível após atualizar.",
    "like": "É como o provador de roupas: experimente e devolva se não gostar."
  },
  "help.skins.gal_apply": {
    "t": "Aplicar / Aplicar esta aparência",
    "what": "Instala a aparência da galeria e a ativa com um clique. O botão fica nos cartões e na janela de prévia.",
    "when": "Use quando gostar do visual e quiser mostrá-lo aos visitantes.",
    "click": "A aparência é verificada, entra em **Instaladas** e é aplicada. Visitantes veem em cerca de 30 segundos. Para desfazer, clique em [[Voltar à aparência anterior]].",
    "care": "Até 20 extras, além de Claro e Escuro. Se você criou uma com o mesmo nome, haverá confirmação antes de substituir. Aparências com **Atualize seu site para usar esta aparência.** ainda não podem ser aplicadas.",
    "like": "É comprar uma roupa e já sair da loja vestindo-a."
  },
  "help.skins.pv_mode": {
    "t": "Computador / Celular",
    "what": "Muda o tamanho da prévia: **Computador** mostra tela larga; **Celular**, tela estreita.",
    "when": "Confira os dois formatos, pois muitos visitantes usam celular.",
    "click": "Só muda o tamanho da prévia. Nada é salvo.",
    "like": "É olhar a vitrine da loja de longe e depois de perto."
  },
  "help.site.artist_del": {
    "t": "Excluir",
    "what": "Remove este nome da lista de outros artistas.",
    "when": "Use quando não quiser mais selecioná-lo para músicas novas.",
    "click": "Pede confirmação e salva imediatamente. Músicas que já têm o nome continuam com ele; apenas a opção para novas músicas desaparece.",
    "care": "Para mudar o artista de uma música antiga, edite a própria faixa. Você pode cadastrar esse nome novamente depois.",
    "like": "É tirar uma etiqueta de nome da gaveta. Os discos que já a usam continuam iguais."
  },
  "help.site.info": {
    "t": "Informações do site",
    "what": "Este quadro reúne dados básicos: nome do site e do artista, idioma principal, descrição curta, país e texto do rodapé.",
    "when": "Preencha no início. Volte quando quiser mudar o nome ou a apresentação.",
    "click": "Nada é salvo enquanto digita. Clique em [[Salvar informações do site]] para guardar tudo no quadro. O site muda imediatamente, e o aimusiclist.com recebe nome e descrição pouco depois.",
    "care": "Outros quadros desta aba (redes sociais, reproduções, curtidas, imagens…) salvam separadamente. Só este precisa do botão. Se sair sem clicar, perde o texto digitado.",
    "like": "É o formulário de cadastro da loja, com sua placa e uma apresentação."
  },
  "help.site.name": {
    "t": "Nome do site",
    "what": "Nome de 1 a 40 caracteres. É o título grande do seu site e aparece abaixo de suas músicas no aimusiclist.com, onde as pessoas podem clicar para visitá-lo.",
    "when": "Escolha no início. Mude só se realmente quiser outro nome, pois os ouvintes aprendem a reconhecê-lo.",
    "click": "Salva ao clicar em [[Salvar informações do site]]. Se o nome do artista for igual ao nome antigo do site, também mudará.",
    "care": "Não use nome de cantor ou grupo famoso, nem parecido. O salvamento é bloqueado quando o sistema reconhece um nome famoso; caso passe e seja descoberto, o site pode ser retirado do aimusiclist.",
    "like": "É a placa da loja, vista pelos clientes do grande mercado (aimusiclist.com)."
  },
  "help.site.artist": {
    "t": "Nome do artista",
    "what": "Nome da pessoa ou grupo que cria as músicas. Pode ser igual ou diferente do nome do site.",
    "when": "Use se seu nome artístico for outro. Por exemplo, o site se chama My Music Room, mas você canta como Luna.",
    "click": "Salva em [[Salvar informações do site]]. Se for diferente do site, aparece abaixo dele na página inicial e chega ao aimusiclist.com em um ou dois minutos.",
    "care": "Até 40 caracteres. Não use nomes famosos ou parecidos. Se o nome do artista ainda for o antigo nome do site, ele mudará junto ao renomear o site.",
    "like": "A placa mostra o nome da loja. Este é o crachá do músico que trabalha nela."
  },
  "help.site.lang": {
    "t": "Idioma principal do site",
    "what": "Idioma usado quando não se sabe qual o visitante prefere. O aimusiclist.com também recebe essa informação.",
    "when": "Escolha o idioma que a maioria lê ou no qual você escreve suas descrições.",
    "click": "Salva em [[Salvar informações do site]]. Cada visitante ainda verá seu idioma do navegador ou aquele que escolheu, se disponível. Só na falta deles será usado o principal.",
    "care": "Não altera o idioma deste painel nem traduz títulos ou descrições escritos por você.",
    "like": "É o idioma da placa de boas-vindas. Os visitantes podem pedir o cardápio em outro idioma."
  },
  "help.site.desc": {
    "t": "Descrição curta",
    "what": "Pequena apresentação de você e da música, com até 200 caracteres. Aparece no site e é enviada ao aimusiclist.com junto do nome.",
    "when": "Escreva uma ou duas frases sobre o estilo das músicas. Altere quando quiser.",
    "click": "Salva em [[Salvar informações do site]]. O aimusiclist.com recebe o texto pouco depois. Deixe vazio se não quiser descrição.",
    "care": "Use palavras simples e poucas. Não se descreva usando nome de cantor famoso, por exemplo “o novo [nome famoso]”.",
    "like": "É o cartão sob a placa da loja que explica o que ela oferece."
  },
  "help.site.footer": {
    "t": "Texto do rodapé",
    "what": "Uma linha no fim de cada página do site, com até 200 caracteres. Só texto, sem imagens ou links.",
    "when": "Use para direitos autorais ou um agradecimento.",
    "click": "Salva em [[Salvar informações do site]] e aparece na hora. Se ficar vazio, mostra “© ano atual + nome do site”. Digitar {year} coloca automaticamente o ano atual.",
    "care": "Quebras de linha viram espaços. A frase “Powered by aimusiclist.com” ao lado permanece sempre; este campo não a remove.",
    "like": "É a pequena linha impressa no rodapé do recibo."
  },
  "help.site.save": {
    "t": "Salvar informações do site",
    "what": "Salva os dados deste quadro: nomes, idioma, descrição, país, rodapé e informações extras.",
    "when": "Clique após alterar qualquer dado do quadro.",
    "click": "Seu site mostra a mudança imediatamente. O aimusiclist.com recebe nome e descrição pouco depois. Se algo estiver errado, uma mensagem vermelha aparece e nada é salvo.",
    "care": "O salvamento é bloqueado se o nome alterado for de um músico famoso. Escolha outro e tente novamente.",
    "like": "É o carimbo no formulário de registro da loja. Antes dele, tudo ainda é rascunho."
  },
  "help.site.artists": {
    "t": "Outros artistas",
    "what": "Lista de nomes artísticos extras que você pode escolher para faixas. Sem escolha, a música usa o nome do seu site.",
    "when": "Use quando um mesmo site reúne músicas de nomes diferentes, como dupla ou projeto paralelo.",
    "click": "Os nomes cadastrados aparecem no campo de artista ao enviar ou editar músicas e álbuns. São mostrados no site e no aimusiclist.com.",
    "care": "São permitidos até 20 nomes. Quando a lista está cheia, Adicionar fica desativado. Nomes de cantores famosos são proibidos.",
    "like": "É uma loja com vários crachás na gaveta: escolha o de quem fez cada música."
  },
  "help.site.artist_add": {
    "t": "Adicionar",
    "what": "Adiciona o nome digitado à lista de outros artistas.",
    "when": "Digite o nome no campo à esquerda e clique.",
    "click": "Salva imediatamente. Você poderá escolhê-lo ao enviar ou editar músicas.",
    "care": "Até 60 caracteres. Um nome repetido ou igual ao do site não é adicionado. Nomes famosos são recusados.",
    "like": "É criar um crachá novo e guardá-lo na gaveta."
  },
  "help.site.account": {
    "t": "Conta de administrador",
    "what": "E-mail e senha usados para entrar neste painel. A linha superior mostra seu e-mail atual.",
    "when": "Use para alterar seu e-mail de login ou sua senha.",
    "click": "Nada muda antes de preencher os campos, informar a senha atual e clicar em [[Salvar conta]].",
    "care": "No meshmelo, o e-mail só pode ser alterado na conta meshmelo; por isso o campo não aparece aqui.",
    "like": "É a chave da porta dos fundos da loja. Só você deve tê-la."
  },
  "help.site.account_email": {
    "t": "Novo e-mail (opcional)",
    "what": "Novo endereço usado para entrar. Deixe vazio para manter o atual.",
    "when": "Use quando deixar de usar o e-mail antigo ou quiser entrar com outro.",
    "click": "Só muda após informar a senha atual e clicar em [[Salvar conta]]. No próximo login, use o novo e-mail.",
    "care": "Confira cada letra. Se errar, ficará difícil entrar. Este campo não aparece em sites meshmelo.",
    "like": "É trocar o nome escrito no chaveiro da porta dos fundos."
  },
  "help.site.account_pw": {
    "t": "Nova senha (opcional)",
    "what": "Senha nova para o painel. Deixe vazia para manter a antiga.",
    "when": "Use se alguém conhece sua senha ou você deseja trocá-la.",
    "click": "Digite novamente no campo seguinte, informe a senha atual e clique em [[Salvar conta]]. Outros dispositivos serão desconectados; este continua conectado.",
    "care": "No mínimo 6 caracteres. Guarde em lugar seguro. Em sites meshmelo, a conta meshmelo recebe a mesma senha nova.",
    "like": "É trocar a fechadura: cópias da chave antiga deixam de funcionar."
  },
  "help.site.account_pw2": {
    "t": "Repita a nova senha",
    "what": "Digite novamente a mesma senha nova.",
    "when": "Preencha sempre que alterar a senha.",
    "click": "Ao clicar em [[Salvar conta]], os dois campos serão comparados. Se forem diferentes, nada será salvo e aparecerá uma mensagem.",
    "care": "Evita erros de digitação. Se não lembrar o que escreveu, limpe os dois campos e comece devagar.",
    "like": "É testar a chave nova na fechadura antes de sair."
  },
  "help.site.account_cur": {
    "t": "Senha atual (necessária para alterar)",
    "what": "Senha usada agora. Ela comprova que é você quem solicita a alteração de e-mail ou senha.",
    "when": "Informe sempre que alterar e-mail ou senha.",
    "click": "Digitar aqui não muda nada. A senha será verificada ao clicar em [[Salvar conta]].",
    "care": "Após 5 erros, as mudanças ficam bloqueadas por 15 minutos. Se esqueceu, abra [[Esqueceu sua senha?]] abaixo.",
    "like": "É mostrar a chave antiga antes de receber outra do chaveiro."
  },
  "help.site.account_save": {
    "t": "Salvar conta",
    "what": "Salva novo e-mail e/ou nova senha informados acima.",
    "when": "Clique após preencher o que quer alterar e sua senha atual.",
    "click": "Salva imediatamente. A senha nova desconecta outros celulares e computadores, mas não este. Se os dois campos novos estiverem vazios, nada acontece.",
    "care": "A chave de uso não é salva aqui. Ela tem seu próprio botão [[Salvar chave]] abaixo.",
    "like": "É entregar a chave nova ao chaveiro e autorizar a troca da fechadura."
  },
  "help.site.forgot": {
    "t": "Esqueceu sua senha?",
    "what": "Passos para recuperar o acesso ao painel quando não lembrar a senha. Clique no título para abrir.",
    "when": "Use se não conseguir entrar ou a senha atual sempre aparecer como incorreta.",
    "click": "Abrir só mostra instruções. Os passos variam conforme o tipo de site: no Cloudflare, no gerenciador de arquivos da hospedagem ou por e-mail no meshmelo.",
    "care": "Siga exatamente os passos e remova somente o que indicarem. Músicas, álbuns e ligação com aimusiclist.com permanecem.",
    "like": "É um guia de chave reserva guardado na loja para quando você perder a sua."
  },
  "help.site.token_open": {
    "t": "Criar no Cloudflare",
    "what": "Abre a página do Cloudflare para criar uma chave de uso em outra aba, com a maioria dos campos preenchidos.",
    "when": "Clique no primeiro passo, quando ainda não tiver chave.",
    "click": "O Cloudflare abre [[Create Token]]. Entre na conta se solicitado. Nada é salvo aqui até voltar, colar a chave e clicar em [[Salvar chave]].",
    "care": "O Cloudflare mostra a chave uma única vez. Clique em [[Copy]] imediatamente. Se faltarem as permissões, adicione as duas indicadas no guia.",
    "like": "É ir à loja de chaves com a descrição do modelo de que precisa."
  },
  "help.site.token": {
    "t": "Ver uso (opcional)",
    "what": "Local para salvar uma chave de uso do Cloudflare. Com ela, o painel mostra no topo seu consumo dos limites gratuitos.",
    "when": "Use quando quiser ver quanto já gastou de armazenamento e acessos.",
    "click": "Após salvar a chave, o quadro superior mostra os números imediatamente. Salvar não desconecta você.",
    "care": "Crie a chave na mesma conta Cloudflare que guarda as músicas. Uma chave de outra conta não lê os dados. Sem chave, o site funciona normalmente, mas você não vê os números.",
    "like": "É uma chave que permite apenas consultar o medidor de energia."
  },
  "help.site.token_change": {
    "t": "Alterar",
    "what": "Já há uma chave salva, mas só o início e fim aparecem para que ninguém a copie. Este botão permite substituí-la.",
    "when": "Use quando os números pararem de aparecer, a chave for excluída no Cloudflare ou as músicas mudarem de conta.",
    "click": "O campo abre. A chave antiga continua válida até você salvar outra. Clique em [[Cancelar]] para mantê-la.",
    "care": "Se o aviso disser que o armazenamento está em outra conta, crie a chave nessa conta nova.",
    "like": "É trocar a chave do medidor sem perder a antiga antes de receber a nova."
  },
  "help.site.token_input": {
    "t": "Chave de uso",
    "what": "Campo para colar a chave copiada do Cloudflare. Os caracteres são ocultos.",
    "when": "Use logo depois de criá-la e clicar em [[Copy]].",
    "click": "Colar não salva nada. Clique em [[Salvar chave]] ao lado.",
    "care": "Cole a chave completa, sem espaços. Ela só lê números e nome da conta; não altera nem exclui nada. Mesmo assim, não compartilhe.",
    "like": "É a entrada da chave usada para consultar o medidor."
  },
  "help.site.token_save": {
    "t": "Salvar chave",
    "what": "Verifica sua chave no Cloudflare e a salva.",
    "when": "Clique depois de colá-la no campo.",
    "click": "A chave é testada primeiro. Se funcionar, será salva e os números de uso aparecerão no topo. Você continua conectado. Se houver erro, uma mensagem vermelha explica.",
    "care": "Se não encontrar a lista de contas, será solicitado o Account ID do Cloudflare. Informe e tente novamente. Chaves de outra conta são recusadas.",
    "like": "É testar a chave no medidor; se funcionar, você pode guardá-la."
  },
  "help.site.token_account_id": {
    "t": "Account ID do Cloudflare (quando solicitado)",
    "what": "Número de 32 letras e dígitos da conta Cloudflare. Só aparece quando a chave não identifica a conta sozinha.",
    "when": "Use se o salvamento disser que a lista de contas não pode ser lida, geralmente por faltar uma das duas permissões.",
    "click": "Preencha e clique novamente em [[Salvar chave]]. Se o número combinar com a chave, ela será salva.",
    "care": "Use apenas 0–9 e a–f, exatamente 32 caracteres. Geralmente é mais fácil recriar a chave em [[Criar no Cloudflare]], com ambas as permissões.",
    "like": "É escrever o número da casa na chave do medidor para indicar onde ela deve funcionar."
  },
  "help.site.token_howto": {
    "t": "Como criar a chave de uso (2 minutos)",
    "what": "Instruções passo a passo para criar a chave no Cloudflare. Clique no título para abrir ou fechar.",
    "when": "Use ao criar a primeira chave ou quando os números deixarem de aparecer.",
    "click": "Abrir não muda nada. O guia fica aberto até uma chave ser salva; depois, se recolhe.",
    "care": "A chave precisa de Account Analytics Read e Account Settings Read. O Cloudflare só a mostra uma vez; copie imediatamente.",
    "like": "É um pequeno mapa para a loja de chaves, indicando até o balcão."
  },
  "help.site.mm_r2": {
    "t": "Armazenamento das músicas (R2)",
    "what": "Mostra onde suas músicas e imagens ficam: nome do bucket e número da conta Cloudflare. O espaço pertence a você, não ao meshmelo.",
    "when": "Use para conferir qual conta e armazenamento o site utiliza.",
    "click": "Este cartão só informa. Para mudar, clique em [[Alterar armazenamento]].",
    "care": "Não exclua este bucket no Cloudflare. As músicas deixariam de tocar em todos os lugares.",
    "like": "É o endereço do seu depósito, onde guarda todos os discos."
  },
  "help.site.mm_r2_change": {
    "t": "Alterar armazenamento",
    "what": "Abre sua página meshmelo em outra aba para mudar de bucket ou conta Cloudflare.",
    "when": "Use quando levar músicas para outro bucket ou conta.",
    "click": "Só abre outra aba. Nada muda até você concluir os passos no meshmelo.",
    "care": "Se trocar de conta Cloudflare, crie uma chave de uso nessa conta e salve abaixo. A antiga não lê a conta nova.",
    "like": "É chamar a transportadora para levar os discos a outro depósito."
  },
  "help.site.mm_card": {
    "t": "Seu site meshmelo",
    "what": "O site fica no meshmelo, mas músicas e imagens estão no seu próprio armazenamento. Aqui você pode levar uma cópia ou encerrar o site.",
    "when": "Use para backup, mudança de hospedagem ou para deixar o meshmelo.",
    "click": "O cartão não faz nada sozinho. Clique em [[Exportar meu site]] para baixar uma cópia ou em [[Minha conta meshmelo]] para abrir a conta.",
    "like": "Você aluga uma loja, mas os discos do depósito são seus. Pode levá-los quando quiser."
  },
  "help.site.mm_export": {
    "t": "Exportar meu site",
    "what": "Baixa um arquivo ZIP com lista de músicas, álbuns, configurações, aparências e livro de visitas. Áudio e imagens ficam no seu armazenamento e não vêm no ZIP.",
    "when": "Use para backups ou antes de migrar para outra hospedagem.",
    "click": "O download começa na hora. Nada muda no site.",
    "care": "Guarde o arquivo com segurança. Ele inclui dados de acesso e um segredo de conexão com aimusiclist.com. É possível exportar mesmo com o site suspenso.",
    "like": "É uma cópia de todo o caderno da loja para reabri-la em outro lugar."
  },
  "help.site.mm_delete": {
    "t": "Excluir meu site",
    "what": "Fecha definitivamente o site no meshmelo, removendo páginas, configurações e lista de músicas. Clique no título para abrir a área de exclusão.",
    "when": "Use só se tiver certeza. Se for migrar, clique primeiro em [[Exportar meu site]].",
    "click": "Abrir não exclui nada. Para excluir, digite nome do site e senha e clique no botão vermelho.",
    "care": "Não pode ser desfeito. Suas músicas saem imediatamente do aimusiclist.com, mas os arquivos no seu armazenamento ficam intactos. O nome do site não será dado a outra pessoa.",
    "like": "É devolver a chave do ponto alugado; os discos no seu depósito continuam seus."
  },
  "help.site.mm_delete_name": {
    "t": "Digite o nome do site para confirmar",
    "what": "Digite exatamente o nome exibido para confirmar que realmente quer excluí-lo.",
    "when": "Use apenas durante a exclusão.",
    "click": "Digitar não faz nada sozinho. A conferência ocorre ao clicar no botão vermelho.",
    "care": "Deve corresponder letra por letra. Se diferir, nada será excluído e aparece um aviso.",
    "like": "É assinar o documento de encerramento da loja."
  },
  "help.site.mm_delete_btn": {
    "t": "Excluir meu site",
    "what": "Último botão que realmente exclui seu site meshmelo.",
    "when": "Clique depois de informar o nome do site e a senha atual.",
    "click": "Pede confirmação final. Ao aceitar, o site é excluído, você sai da sessão e a página meshmelo abre.",
    "care": "Não é reversível. Exporte antes se precisar de algo depois. Após 5 senhas erradas, é necessário esperar uma hora.",
    "like": "É apagar as luzes e fechar a loja pela última vez."
  },
  "help.site.images": {
    "t": "Banner e foto de perfil",
    "what": "Duas imagens: banner largo no topo e foto de perfil redonda.",
    "when": "Adicione para dar identidade ao site. Pode trocar quando quiser.",
    "click": "Cada imagem é salva após escolhê-la e clicar em salvar na janela de edição. Este cartão não tem botão de salvar separado.",
    "care": "Use JPG, PNG, WebP ou GIF de até 2 MB. Só a versão final pequena é enviada, não a original.",
    "like": "São a cobertura da entrada e a foto do dono perto do balcão."
  },
  "help.site.banner": {
    "t": "Banner superior",
    "what": "Imagem larga acima do título do site, até 1600×400.",
    "when": "Escolha uma imagem ampla e baixa, como uma paisagem ou arte horizontal.",
    "click": "Clique em [[Escolher imagem]]. Na janela, mova a moldura para cortar ou reduza a imagem inteira. Clique em [[Salvar imagem]] para mostrar no site imediatamente.",
    "care": "É salva em até 300 KB. Fotos altas sofrem muito corte; as largas ficam melhores. Sem banner, o espaço não aparece.",
    "like": "É o grande toldo pintado acima da vitrine."
  },
  "help.site.image_choose": {
    "t": "Escolher imagem",
    "what": "Abre a seleção de imagens do dispositivo para o banner ou perfil.",
    "when": "Use para adicionar ou substituir uma foto.",
    "click": "Após escolher, abre a janela de edição. Nada muda até clicar no botão de salvar ([[Salvar imagem]] para banner ou [[Aplicar]] para perfil). A nova imagem substitui a antiga imediatamente.",
    "care": "Escolha JPG, PNG, WebP ou GIF de até 2 MB. GIF animado vira imagem parada. Se houver erro, tente Chrome, Edge ou Firefox.",
    "like": "É tirar uma foto nova da bolsa para colocá-la na moldura da loja."
  },
  "help.site.image_delete": {
    "t": "Remover",
    "what": "Retira o banner ou a foto de perfil do site.",
    "when": "Use se preferir não mostrar imagem.",
    "click": "Pede uma confirmação. Ao aceitar, a imagem desaparece imediatamente. A foto de perfil também sai do aimusiclist.com pouco depois.",
    "care": "Não pode ser desfeito. Para exibir outra foto, use [[Escolher imagem]]. Não precisa remover a antiga antes de trocar.",
    "like": "É tirar a foto da moldura e deixá-la vazia."
  },
  "help.site.profile": {
    "t": "Foto de perfil",
    "what": "Sua foto ou logotipo, em 400×400 e formato circular. Aparece também no aimusiclist.com em “Novos artistas” e ao lado do site.",
    "when": "Escolha rosto ou logo reconhecível mesmo em tamanho pequeno.",
    "click": "Clique em [[Escolher imagem]]. Arraste para ajustar, amplie ou gire e clique em [[Aplicar]]. Salva na hora. O site escolhe uma cor de fundo da foto. O aimusiclist.com recebe a imagem pouco depois.",
    "care": "As bordas são cortadas pelo círculo. Mantenha o importante no centro. A foto final tem até 100 KB.",
    "like": "É a foto do dono no cartão de visita da loja, também entregue no mercado."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Permite mostrar anúncios do Google no site e ganhar dinheiro. Digite apenas os identificadores da conta AdSense; o site monta o anúncio.",
    "when": "Use depois de o Google aprovar seu site no AdSense.",
    "click": "Preencha os campos, marque [[Mostrar anúncios no meu site]] e clique em [[Salvar AdSense]]. Anúncios não aparecem no painel, só no site.",
    "care": "O Google aprova apenas sites com domínio próprio. Se usa workers.dev, conecte seu domínio na aba Meu domínio. Não cole código de anúncio aqui, apenas IDs.",
    "like": "É alugar um espaço na vitrine para um anúncio pago."
  },
  "help.site.ads_client": {
    "t": "ID do editor (ca-pub-…)",
    "what": "Seu identificador no AdSense: começa com ca-pub- seguido de 16 dígitos.",
    "when": "Copie da conta AdSense. É obrigatório para mostrar anúncios.",
    "click": "Salva ao clicar em [[Salvar AdSense]]. Também cria automaticamente a página ads.txt.",
    "care": "Copie exatamente ca-pub- e os 16 números, sem mais nada. Um formato incorreto mostra aviso vermelho e não salva.",
    "like": "É seu número na empresa de publicidade, para saberem qual loja recebe o pagamento."
  },
  "help.site.ads_top": {
    "t": "ID do anúncio superior",
    "what": "Número do espaço de anúncio perto do topo, abaixo do banner.",
    "when": "Crie um bloco no AdSense e copie o número aqui.",
    "click": "Salva com [[Salvar AdSense]]. Se ficar vazio, não há anúncio superior.",
    "care": "Somente números, de 6 a 20 dígitos. Não cole o código completo.",
    "like": "É o número da moldura de cartaz abaixo do toldo."
  },
  "help.site.ads_left": {
    "t": "ID do anúncio à esquerda (opcional)",
    "what": "Número de um segundo espaço de anúncio na coluna esquerda.",
    "when": "Preencha se sua aparência tiver coluna esquerda, como a Escuro.",
    "click": "Salva com [[Salvar AdSense]]. Se o visual não tiver coluna esquerda, o anúncio não aparecerá, mesmo com número cadastrado.",
    "care": "Somente números, de 6 a 20 dígitos. Se mudar para visual sem coluna esquerda, o anúncio some automaticamente.",
    "like": "É uma segunda moldura, mas só lojas com parede lateral têm espaço."
  },
  "help.site.ads_on": {
    "t": "Mostrar anúncios no meu site",
    "what": "Interruptor geral para ligar ou desligar anúncios.",
    "when": "Ative quando os IDs estiverem prontos. Desative para pausar sem perdê-los.",
    "click": "Nada muda até clicar em [[Salvar AdSense]]. Depois, anúncios aparecem em até 30 segundos ou somem, se desmarcados.",
    "care": "Não pode ativar sem ID do editor. Seus IDs continuam nos campos com anúncios desligados.",
    "like": "É o interruptor das molduras de anúncios na vitrine."
  },
  "help.site.ads_save": {
    "t": "Salvar AdSense",
    "what": "Salva os três IDs e a opção de mostrar anúncios do quadro Google AdSense.",
    "when": "Clique após qualquer mudança nesse quadro.",
    "click": "Os números são verificados. Se houver erro, uma mensagem vermelha aparece e nada é salvo. Se estiver certo, anúncios começam ou param em até 30 segundos.",
    "care": "Mesmo após salvar, anúncios podem ficar vazios por algum tempo por decisão do Google. Se nunca aparecerem, confira sua conta AdSense.",
    "like": "É entregar ao anunciante o contrato de cartaz assinado."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Página pequena que o Google consulta para confirmar que os anúncios do site são seus. O site a cria automaticamente a partir do ID do editor.",
    "when": "Você não precisa fazer nada. Abra o link se o AdSense pedir verificação.",
    "click": "O link abre a página em outra aba, com uma linha contendo seu ID. Não é editável aqui: acompanha o ID salvo.",
    "care": "Sem ID do editor, a página fica vazia. Após trocar o ID, o Google pode demorar para perceber.",
    "like": "É a autorização colada na vitrine confirmando que os cartazes são permitidos."
  },
  "help.site.country": {
    "t": "País onde você atua",
    "what": "País onde você cria músicas. O aimusiclist.com usa para incluir você no ranking de artistas desse país.",
    "when": "Escolha se quiser aparecer no ranking do seu país. É opcional.",
    "click": "Salva ao clicar em [[Salvar informações do site]]. Se deixar em “— Não definido —”, aparecerá somente no ranking Global.",
    "care": "Escolha apenas um país, aquele onde realmente trabalha. Pode alterar depois.",
    "like": "É a bandeira do seu país na banca do grande mercado (aimusiclist.com)."
  },
  "help.site.fields": {
    "t": "Campos adicionais (do aimusiclist.com)",
    "what": "Mostra a lista de campos extras, como Clima, recebidos do aimusiclist.com. Eles aparecem em Informações adicionais ao enviar ou editar faixas e nos dados do site.",
    "when": "Confira se um campo novo aparecer ou estiver faltando.",
    "click": "Este cartão só mostra versão, quantidade de campos e última verificação. O site confere automaticamente uma vez por dia, sem exigir ação.",
    "care": "Se a atualização falhar, uma mensagem vermelha mostra o motivo. O site usa a última lista válida e os envios continuam funcionando.",
    "like": "É o formulário que o mercado manda às lojas indicando quais etiquetas usar."
  },
  "help.site.fields_update": {
    "t": "Atualizar campos",
    "what": "Pede ao aimusiclist.com a lista mais recente de campos extras, sem aguardar a verificação diária.",
    "when": "Use quando houver anúncio de um campo novo e você quiser usá-lo hoje.",
    "click": "Uma mensagem informa se atualizou, já estava atualizado ou falhou. Se a lista mudar, os novos campos aparecem na tela.",
    "care": "Você pode usar uma vez por minuto. Se repetir cedo demais, aparece o tempo de espera. Respostas antigas nunca são perdidas.",
    "like": "É telefonar ao mercado para perguntar se chegou um formulário novo."
  },
  "help.site.sns": {
    "t": "Redes sociais",
    "what": "Endereços das suas redes. Os cinco primeiros campos são fixos: YouTube, Instagram, TikTok, Facebook e X.",
    "when": "Adicione os lugares onde publica músicas ou fala com fãs. Deixe vazio o que não usa.",
    "click": "Digite o endereço completo com https:// e clique fora para salvar. Visitantes os veem na página “Links”. O aimusiclist.com mostra ícones junto às músicas. Apague o campo para remover.",
    "care": "O endereço deve pertencer à rede indicada. Por exemplo, YouTube aceita só URL do YouTube. Máximo de 200 caracteres. Endereço incorreto fica vermelho, sem substituir o último válido.",
    "like": "É o quadro ao lado da porta da loja: “Você também nos encontra aqui”."
  },
  "help.site.sns_tools": {
    "t": "Subir · Descer · Remover",
    "what": "Botões das linhas de “Outras redes”. [[Subir]] e [[Descer]] alteram a ordem; [[Remover]] apaga a linha.",
    "when": "Use para pôr as redes mais importantes primeiro ou excluir uma.",
    "click": "A mudança salva imediatamente e aparece na página “Links”. [[Remover]] exclui sem pedir confirmação.",
    "care": "Ao remover, o endereço se perde. Para recuperá-lo, adicione a rede e digite de novo. Os cinco campos fixos ficam sempre no início.",
    "like": "É mover bilhetes no quadro da porta ou retirar um."
  },
  "help.site.sns_more": {
    "t": "Outras redes sociais",
    "what": "Espaço para até cinco redes além das fixas, como SoundCloud, Spotify, Threads ou Discord.",
    "when": "Use se participa de outras plataformas.",
    "click": "Escolha o serviço em cada linha e digite o endereço. Clique fora para salvar. Aparecem em ordem na página “Links”; no aimusiclist.com compartilham um ícone 🔗.",
    "care": "Cada serviço só pode ser escolhido uma vez. O endereço fica bloqueado até escolher o serviço. Trocar o serviço apaga o endereço salvo; digite novamente.",
    "like": "É a parte extra do quadro para outros lugares onde os fãs podem encontrar você."
  },
  "help.site.sns_add": {
    "t": "+ Adicionar outra rede",
    "what": "Adiciona uma linha vazia em “Outras redes sociais”.",
    "when": "Use para cadastrar plataforma diferente das cinco fixas.",
    "click": "Uma linha nova aparece com a lista de serviços. Só salva após escolher e digitar o endereço. Com cinco linhas, o botão fica cinza.",
    "care": "Linha vazia não é salva e desaparece ao abrir a página novamente.",
    "like": "É prender um papel em branco no mural, pronto para escrever."
  },
  "help.site.sns_view": {
    "t": "Ver página Links",
    "what": "Abre a página “Links” do site, onde visitantes encontram suas redes sociais.",
    "when": "Use para conferir como a lista aparece para o público.",
    "click": "Abre em outra aba sem alterar nada. Só aparece quando há pelo menos um endereço salvo.",
    "like": "É sair e olhar o quadro da porta pelos olhos dos clientes."
  },
  "help.guestbook.title": {
    "t": "Livro de visitas",
    "what": "Lugar para visitantes deixarem recados curtos sobre o site ou uma música.",
    "when": "Use para ouvir seus fãs e moderar mensagens.",
    "click": "Este é apenas o título. Use [[Abrir o livro de visitas]] para ativar ou desativar e a lista abaixo para ler e excluir.",
    "like": "É um caderno na entrada da loja onde clientes deixam mensagens."
  },
  "help.guestbook.on": {
    "t": "Abrir o livro de visitas",
    "what": "Ativa ou desativa os recados para visitantes. Quando ativo, aparece **Livro de visitas** no menu e um botão 💬 em cada música.",
    "when": "Ative para receber mensagens. Desative se houver muitos recados indesejados ou quiser uma pausa.",
    "click": "Salva imediatamente. A mudança aparece em cerca de 30 segundos. Você pode voltar atrás quando quiser.",
    "care": "Desativar só esconde o livro; mensagens anteriores continuam guardadas e podem ser lidas ou excluídas aqui.",
    "like": "É colocar o caderno na entrada ou guardá-lo por um tempo."
  },
  "help.guestbook.list": {
    "t": "Mensagens",
    "what": "Todos os recados, do mais novo para o mais antigo, 20 por página. Mostra nome, horário e música relacionada (♪); o número no título é o total.",
    "when": "Confira de vez em quando para ler novidades e apagar mensagens impróprias.",
    "click": "Use os botões de página para ver mensagens antigas. Não dá para editar nem responder aqui, apenas excluir.",
    "care": "Visitantes usam nomes de até 20 caracteres, recados de até 500, sem links e no máximo 50 por dia por pessoa. Mensagens ficam até você apagar, mesmo com o livro fechado. **Música excluída** indica faixa removida.",
    "like": "É folhear o caderno da porta começando pelos recados recentes."
  },
  "help.guestbook.delete": {
    "t": "Excluir",
    "what": "Apaga uma mensagem do livro de visitas.",
    "when": "Use para ofensas, spam ou qualquer recado que não queira mostrar.",
    "click": "Pede confirmação e remove imediatamente; a lista é atualizada.",
    "care": "Não pode ser desfeito. Excluir não impede que a pessoa escreva de novo.",
    "like": "É arrancar uma página do caderno."
  },
  "help.domain.mm": {
    "t": "Meu domínio",
    "what": "Mostra o endereço atual. Seu site está no meshmelo, então o domínio próprio é conectado no portal meshmelo, não neste painel.",
    "when": "Use para conferir o endereço ou escolher um domínio como mymusic.com.",
    "click": "Não há botão aqui. Acesse my.meshmelo.com → Meu site → Meu domínio. Se ainda não aparecer, o recurso está a caminho.",
    "care": "O endereço atual continua funcionando e pode ser compartilhado normalmente.",
    "like": "É uma loja num centro comercial: a administração cuida da placa com o endereço novo."
  },
  "help.domain.title": {
    "t": "Meu domínio",
    "what": "Mostra o endereço atual e permite usar um domínio próprio, como mymusic.com, em vez do endereço gratuito longo.",
    "when": "Use quando comprar um domínio ou quiser endereço curto. O Google AdSense também exige domínio próprio.",
    "click": "Este é só o título. Siga o guia, digite o domínio e clique em [[Conectar]]. Quando funcionar, aparecerão ✓ e o endereço.",
    "care": "Se a tela disser que o endereço é definido no Cloudflare, você não poderá mudá-lo aqui e o campo ficará desativado.",
    "like": "É trocar a placa da loja de uma rua com endereço longo para uma avenida fácil de lembrar."
  },
  "help.domain.guide": {
    "t": "Como conectar seu domínio",
    "what": "Guia passo a passo para comprar e apontar um domínio ao site. Leva cerca de 10 minutos.",
    "when": "Leia antes de clicar em [[Conectar]]. Primeiro conclua as etapas no Cloudflare.",
    "click": "Clique no título para abrir ou fechar. Ele fica aberto até o domínio ser conectado.",
    "care": "O domínio é pago por você. Nomes de telas do Cloudflare podem mudar; escolha a opção equivalente. Na versão de hospedagem, siga as etapas do painel da empresa de hospedagem.",
    "like": "É um mapa ensinando a instalar a placa no endereço novo."
  },
  "help.domain.input": {
    "t": "Meu domínio (campo)",
    "what": "Digite o domínio comprado, por exemplo mymusic.com.",
    "when": "Use depois de terminar o guia e confirmar que o site já abre nesse endereço.",
    "click": "Nada acontece até clicar em [[Conectar]].",
    "care": "Digite somente o domínio, sem http://, https:// ou caminho após /. Para trocar depois, digite o novo e conecte novamente.",
    "like": "É escrever o novo endereço na placa da loja."
  },
  "help.domain.connect": {
    "t": "Conectar",
    "what": "Confere se seu site abre no domínio digitado e o define como endereço principal.",
    "when": "Clique após digitar o domínio.",
    "click": "A verificação leva até 30 segundos. Se funcionar, o domínio é salvo e o aimusiclist.com recebe o novo endereço. O endereço antigo redireciona visitantes. Na versão de hospedagem, o antigo também continua funcionando.",
    "care": "Se houver erro, o site ainda não abre no domínio ou mostra outro site. Confira o guia, espere e tente novamente. Músicas em playlists continuam tocando.",
    "like": "É o correio confirmando o endereço antes de redirecionar suas cartas."
  },
  "help.menus.form": {
    "t": "Adicionar menu / Editar menu",
    "what": "Cria botões de menu para visitantes no topo do site. Cada menu mostra músicas de um gênero.",
    "when": "Use para separar músicas por estilo, como R&B e Hip-hop.",
    "click": "Escolha 1. gênero principal, 2. subgênero opcional, 3. nome opcional. Depois clique em [[Salvar menu]]. O número ao lado indica quantas faixas aparecerão.",
    "care": "Os gêneros vêm do aimusiclist.com para combinar com o serviço. Máximo de 30 menus e um menu por gênero.",
    "like": "É colocar placas nas prateleiras: “R&B aqui”, “Hip-hop ali”."
  },
  "help.menus.main": {
    "t": "1. Gênero principal",
    "what": "Estilo maior do menu, como R&B, Hip-hop ou Dance. A lista é a mesma do aimusiclist.com.",
    "when": "Escolha sempre primeiro. Sem ele, não é possível salvar o menu.",
    "click": "Ao escolher, aparecem os subgêneros disponíveis e a quantidade de suas músicas correspondentes.",
    "care": "Se escolher apenas o gênero principal, o menu mostra as músicas com esse gênero em qualquer um dos três campos de gênero.",
    "like": "É a placa grande sobre o corredor da loja, como “R&B”."
  },
  "help.menus.sub": {
    "t": "2. Subgênero",
    "what": "Estilo mais específico dentro do gênero principal. É opcional.",
    "when": "Use quando tiver muitas faixas e quiser um menu só para um estilo.",
    "click": "A lista contém subgêneros do principal escolhido. Deixe “Todos de…” para usar o principal. A contagem ao lado de [[Salvar menu]] muda imediatamente.",
    "care": "Fica desativado até escolher gênero principal. Com subgênero, mostra apenas músicas que o tenham em um dos campos de gênero.",
    "like": "É a etiqueta pequena numa prateleira dentro do corredor."
  },
  "help.menus.label": {
    "t": "3. Nome do menu",
    "what": "Texto mostrado no botão do menu. É opcional.",
    "when": "Escreva nome amigável, como “Músicas da noite”, ou deixe vazio para usar o nome do gênero.",
    "click": "Salva ao clicar em [[Salvar menu]]. Se vazio, o gênero aparece no idioma escolhido pelo visitante.",
    "care": "Até 30 caracteres. Nome personalizado será mostrado igual em todos os idiomas.",
    "like": "São as palavras que você escreve na etiqueta da prateleira."
  },
  "help.menus.save": {
    "t": "Salvar menu",
    "what": "Salva o menu configurado.",
    "when": "Clique após escolher o gênero e, se quiser, o nome.",
    "click": "Salva na hora. Menu novo fica ao fim da lista. Visitantes o veem em até 30 segundos.",
    "care": "Não é permitido repetir um menu do mesmo gênero nem ultrapassar 30 menus. Uma mensagem vermelha explica o motivo.",
    "like": "É colar a etiqueta pronta na prateleira."
  },
  "help.menus.order": {
    "t": "Subir / Descer",
    "what": "Move o menu uma posição para frente ou para trás na lista.",
    "when": "Use para destacar primeiro o menu mais importante.",
    "click": "Salva imediatamente. Visitantes veem a ordem nova em até 30 segundos.",
    "care": "O primeiro não pode subir e o último não pode descer, então esses botões ficam cinza.",
    "like": "É trocar duas placas de prateleira para mostrar a mais popular primeiro."
  },
  "help.menus.edit": {
    "t": "Editar",
    "what": "Abre este menu no formulário acima para mudar gênero ou nome.",
    "when": "Use para renomear ou associar o menu a outro gênero.",
    "click": "A página sobe ao formulário preenchido. Altere e clique em [[Salvar menu]]; ele mantém a posição na lista. [[Cancelar]] fecha sem mudanças.",
    "like": "É tirar uma etiqueta, reescrevê-la e colocá-la no mesmo lugar."
  },
  "help.menus.delete": {
    "t": "Excluir",
    "what": "Remove este menu do site.",
    "when": "Use quando não precisar mais dele.",
    "click": "Pede confirmação e remove imediatamente. Visitantes deixam de vê-lo em até 30 segundos.",
    "care": "Só o menu desaparece. As músicas continuam no site, na página inicial ou em outros menus. Não pode desfazer, mas pode recriar o menu.",
    "like": "É retirar a placa da prateleira, sem tirar os discos."
  },
  "help.menus.list": {
    "t": "Menus do site",
    "what": "Todos os menus, na ordem que os visitantes veem no topo. O número entre parênteses indica quantos existem do limite de 30.",
    "when": "Use para conferir, reordenar, editar ou excluir menus.",
    "click": "Cada linha mostra nome, gênero e quantidade de músicas. Visitantes também veem “Início” primeiro e “Álbuns” se houver.",
    "care": "“Gênero fora da lista” indica que o aimusiclist.com não usa mais aquele gênero. Clique em [[Editar]] e escolha outro. Menus com 0 músicas continuam visíveis, porém vazios.",
    "like": "São as etiquetas nas prateleiras, da esquerda para a direita."
  },
  "help.tab.menus": {
    "t": "Menus",
    "what": "Organiza o menu do site. Cada opção mostra músicas de um gênero da lista do aimusiclist.com.",
    "when": "Use para definir o que visitantes veem no menu e em qual ordem.",
    "click": "A aba apenas muda a tela. Criar, editar, mover ou excluir salva imediatamente.",
    "care": "Até 30 menus. Escolha gênero principal, subgênero opcional e nome de até 30 caracteres. Usar os gêneros do aimusiclist.com mantém a classificação igual.",
    "like": "São as placas da loja: “R&B aqui, Hip-hop ali”."
  },
  "help.stats.title": {
    "t": "Estatísticas do site",
    "what": "Mostra quantas pessoas visitaram o site e quantas músicas tocaram. Inclui números do aimusiclist.com.",
    "when": "Abra uma vez por dia ou semana para ver as músicas favoritas e o crescimento.",
    "click": "Consultar não muda nada. Escolha um período no topo, e os quadros abaixo mostram os dados correspondentes.",
    "care": "A maioria dos números é contada **uma vez por dia**, de manhã cedo em UTC. Música enviada hoje aparece nos números a partir de amanhã.",
    "like": "É o caderno da loja onde se anota quantos clientes entraram e quais discos ouviram."
  },
  "help.stats.period": {
    "t": "Período (7 / 30 / 90 dias)",
    "what": "Escolhe quantos dias somar: 7, 30 ou 90.",
    "when": "Use 7 para a semana e 90 para uma visão dos últimos três meses.",
    "click": "Números, gráficos e tabelas mudam na hora. O botão colorido indica o período. Nada é salvo nem enviado.",
    "care": "O período termina **ontem** (UTC). Hoje aparece separado na linha **Hoje**. A seta **comparado ao período anterior** usa a mesma quantidade de dias antes.",
    "like": "É escolher quantas páginas do caderno da loja ler: semana, mês ou trimestre."
  },
  "help.stats.note.off": {
    "t": "Reproduções do meu site não são contadas",
    "what": "Nesta hospedagem, ainda não é possível contar as reproduções do próprio site. A ordem **Populares** usa as do aimusiclist no lugar.",
    "when": "O aviso aparece sozinho. Se os números do aimusiclist forem suficientes, não precisa fazer nada.",
    "click": "Leia a mensagem. Se pedir configuração, como conectar o Worker de áudio, conclua o passo para iniciar a contagem no dia seguinte.",
    "care": "Não é possível recuperar números anteriores ao início da contagem.",
    "like": "É uma loja sem contador na porta; você consulta os números do grande mercado."
  },
  "help.stats.note.dataset": {
    "t": "Registro de estatísticas desativado",
    "what": "O site ainda não registra visitas e reproduções. É necessário ativar a coleta uma vez no Cloudflare.",
    "when": "Faça quando quiser ver os números do seu site.",
    "click": "Siga a mensagem: crie o armazenamento de estatísticas no Cloudflare com o nome exato. Depois, no GitHub do site, remova “# ” do começo das três linhas indicadas e clique em [[Commit changes]]. O site atualiza em 1–3 minutos; números aparecem após a próxima coleta diária.",
    "care": "O nome deve ser exatamente **aml_site_stats**. Se alterar as três linhas sem criar o recurso no Cloudflare, a atualização falhará. Nesse caso, recoloque “# ”.",
    "like": "É instalar um contador na porta da loja. Sem ele, ninguém é contado."
  },
  "help.stats.note.token": {
    "t": "Falta a chave de uso",
    "what": "Para ler as estatísticas, o site precisa de uma chave Cloudflare, ainda não cadastrada.",
    "when": "Adicione uma vez. A mesma chave mostra os limites gratuitos no topo.",
    "click": "Abra **Informações do site** e cole a chave com a permissão indicada. Os números começam na próxima coleta diária.",
    "care": "Crie a chave na **mesma conta Cloudflare** do site e guarde em segredo. Não a publique.",
    "like": "É a chave da sala do medidor. Sem ela, não é possível ler a contagem."
  },
  "help.stats.note.no_visits": {
    "t": "Visitas não são contadas",
    "what": "Nesta hospedagem, as páginas são arquivos prontos. Por isso, é possível contar reproduções, mas não visitas.",
    "when": "O aviso aparece sozinho. É normal nesse tipo de hospedagem.",
    "click": "Não há botão. O quadro e gráfico **Visitas** ficam ocultos. Países, dispositivos e idiomas são medidos pelas reproduções.",
    "like": "É uma loja que não conta quem entra, mas registra cada disco colocado para tocar."
  },
  "help.stats.note.error": {
    "t": "Não foi possível ler as estatísticas",
    "what": "A última coleta falhou. A mensagem explica o motivo.",
    "when": "Aparece automaticamente quando ocorre um problema.",
    "click": "Se disser **Mostrando os últimos números salvos**, são usados os últimos dados válidos. Normalmente a próxima coleta corrige. Se persistir por dias, confira a chave em **Informações do site**.",
    "care": "Dias recentes podem ser recuperados quando a contagem voltar. Dias muito antigos talvez não.",
    "like": "É o dia em que o funcionário não conseguiu ler o medidor; a leitura anterior fica no quadro."
  },
  "help.stats.updated": {
    "t": "Data da última contagem",
    "what": "Indica quando os números foram calculados e lembra que são aproximações.",
    "when": "Confira se uma contagem parecer antiga. Se o horário for de ontem, a próxima coleta ainda não ocorreu.",
    "care": "Os números são contados uma vez por dia, pouco após 00:00 UTC. Cada site tem seu minuto, mostrado aqui. **Robôs** e **suas próprias visitas** enquanto conectado ficam de fora, por isso a contagem pode ser menor que todos os cliques.",
    "like": "É a data no recibo informando quando foi feita a contagem."
  },
  "help.stats.csv.days": {
    "t": "Baixar CSV diário",
    "what": "Baixa arquivo com uma linha por dia do período: visitas, reproduções, reproduções via aimusiclist, recados e números do aimusiclist.",
    "when": "Use para guardar dados ou criar gráficos no Excel ou Google Sheets.",
    "click": "O navegador monta o arquivo e salva na pasta de downloads. Nada muda no site.",
    "care": "Dias seguem UTC. Escolha antes o período (7, 30 ou 90 dias), pois o arquivo o acompanha.",
    "like": "É fotocopiar páginas do caderno da loja para guardar."
  },
  "help.stats.csv.tracks": {
    "t": "Baixar CSV de músicas",
    "what": "Baixa arquivo com uma linha por faixa: posição, mudança, reproduções e dados e rankings do aimusiclist.",
    "when": "Use para comparar músicas em planilha ou guardar o histórico de desempenho.",
    "click": "O navegador gera e baixa o arquivo. Nada muda no site.",
    "care": "Reproduções seguem o período escolhido. Dados do aimusiclist são sempre dos últimos 7 dias. Células vazias indicam ausência de dado.",
    "like": "É copiar a lista de discos mais populares para o seu caderno."
  },
  "help.stats.refresh": {
    "t": "Atualizar agora",
    "what": "Reconta imediatamente visitas e reproduções do site, incluindo hoje.",
    "when": "Use quando divulgar uma música e quiser conferir se houve acessos. Sem isso, os números mudam uma vez ao dia.",
    "click": "Após alguns segundos, esta aba e as contagens das músicas no site mudam. Depois, o botão espera **1 minuto** para novo uso.",
    "care": "Há limite diário de **200 vezes** para site instalado por você e **30 vezes** no meshmelo. Dados do aimusiclist não mudam aqui, pois chegam uma vez por dia. Se o botão não aparecer, a hospedagem não permite a contagem no momento.",
    "like": "É consultar o medidor no meio do dia em vez de esperar a leitura de amanhã."
  },
  "help.stats.tile.visits": {
    "t": "Visitas",
    "what": "Quantas vezes pessoas abriram o site no período. O número aparece como **aproximadamente**, pois não é exato.",
    "when": "Confira se suas divulgações nas redes trazem visitantes.",
    "click": "A seta abaixo compara com o período anterior: ▲ mais, ▼ menos. **Hoje** mostra a contagem após [[Atualizar agora]], ou – se ainda não disponível.",
    "care": "Quanto maior, melhor. Robôs e suas próprias visitas não entram. Se subir de repente, confira **De onde vieram os visitantes** mais abaixo.",
    "like": "É a quantidade de pessoas que entraram pela porta da loja."
  },
  "help.stats.tile.plays": {
    "t": "Reproduções iniciadas",
    "what": "Quantas vezes músicas começaram a tocar desde o início no seu site, no período.",
    "when": "É um número importante. Confira depois de publicar músicas novas.",
    "click": "A seta compara com os dias anteriores. **Hoje** mostra o número após [[Atualizar agora]].",
    "care": "Quanto maior, melhor. Conta quando a música **começa**, mesmo se a pessoa parar logo depois. Suas reproduções conectado não entram. Se ficar zero por dias, confira os avisos acima.",
    "like": "É quantas vezes um disco foi colocado no toca-discos da loja."
  },
  "help.stats.tile.plays_aml": {
    "t": "Reproduções via aimusiclist",
    "what": "Músicas tocadas no aimusiclist.com são enviadas a partir do seu site. Este número conta essas reproduções.",
    "when": "Use para saber quanto o grande mercado ajuda suas músicas a serem ouvidas.",
    "click": "Consultar não altera nada. A seta compara com os dias anteriores.",
    "care": "Quanto maior, melhor. Elas **não** definem a ordem **Populares** do seu site. O aimusiclist tem ranking próprio. Pode diferir um pouco do quadro do aimusiclist abaixo, pois os sistemas contam de formas distintas.",
    "like": "É o número de vezes que seus discos tocaram no mercado usando o seu depósito."
  },
  "help.stats.tile.gb": {
    "t": "Recados no livro de visitas",
    "what": "Quantas mensagens novas visitantes escreveram no período.",
    "when": "Use para ver quanto seus fãs conversam com você.",
    "click": "Consultar não altera nada. A seta compara com os dias anteriores.",
    "care": "Mais recados geralmente significam interesse. Os seus próprios não entram. Se subir de repente, verifique se há spam.",
    "like": "É contar bilhetes deixados no caderno da porta."
  },
  "help.stats.trend": {
    "t": "Gráfico diário",
    "what": "Cada barra representa um dia. Quanto mais alta, mais reproduções ou visitas.",
    "when": "Use para identificar dias bons, como quando divulgou uma música nas redes.",
    "click": "Passe o mouse sobre a barra ou toque nela para ver data e número. A escala fica à esquerda.",
    "care": "Dias seguem UTC, então podem começar de manhã ou à noite no seu fuso. Um espaço vazio significa zero ou ausência de contagem.",
    "like": "É uma fileira de pilhas de moedas: pilhas maiores indicam dias mais movimentados."
  },
  "help.stats.table_view": {
    "t": "Mostrar como tabela",
    "what": "Exibe os mesmos números em linhas diárias, começando pelo dia mais recente.",
    "when": "Use para ver números precisos ou se tiver dificuldade com gráficos.",
    "click": "Clique para abrir ou fechar. Nada é salvo.",
    "care": "Só mostra o período escolhido. Para guardar os dados, use [[Baixar CSV diário]] abaixo.",
    "like": "É o mesmo caderno da loja, mas com números em vez de desenhos."
  },
  "help.stats.col.date": {
    "t": "Data (UTC)",
    "what": "Dia representado por cada linha. As datas seguem **UTC**, horário padrão mundial.",
    "when": "Use para relacionar números com ações, como divulgar uma música.",
    "care": "UTC não é seu horário local. Na Coreia, um dia UTC começa às 9h. Uma música divulgada à noite pode contar no dia seguinte ou anterior.",
    "like": "É um caderno em que todas as lojas usam o mesmo relógio mundial."
  },
  "help.stats.col.rank": {
    "t": "Posição",
    "what": "Lugar da música na ordem **Populares** do seu site. Pode mostrar a mudança em relação ao dia anterior.",
    "when": "Use para encontrar suas músicas mais populares.",
    "click": "Não há botão. ▲ significa que subiu, ▼ que caiu, – sem mudança. **NEW** é entrada nova; **RE** é retorno à lista.",
    "care": "Quanto menor, melhor (1 é primeiro). – pode indicar ausência de posição por não ter reproduções nos últimos 7 dias.",
    "like": "É o número da música na lista de sucessos da vitrine."
  },
  "help.stats.col.plays": {
    "t": "Reproduções (período escolhido)",
    "what": "Quantas vezes esta música começou a tocar no seu site durante o período.",
    "when": "Use para comparar suas faixas.",
    "care": "Quanto maior, melhor. Reproduções vindas do aimusiclist aparecem na próxima coluna. Para músicas novas com zero, aguarde a próxima coleta.",
    "like": "É quantas vezes o disco tocou no aparelho da loja."
  },
  "help.stats.col.plays_aml": {
    "t": "Via aimusiclist",
    "what": "Quantas vezes esta música tocou no aimusiclist.com no período escolhido, a partir do seu site.",
    "when": "Use para saber quais faixas o público encontra no mercado.",
    "care": "Quanto maior, melhor. Não muda a ordem Populares do site. Pode diferir de **Reproduções no aimusiclist (7 dias)** porque os serviços contam de maneiras diferentes.",
    "like": "É quantas vezes um disco do depósito foi tocado no mercado."
  },
  "help.stats.col.likes": {
    "t": "Curtidas ♥",
    "what": "Total de corações ♥ que a música recebeu no seu site desde o começo.",
    "when": "Use para descobrir as faixas preferidas dos fãs.",
    "care": "É o **total histórico**, não só do período. Atualiza uma vez por dia. Curtidas no aimusiclist são contadas separadamente.",
    "like": "É contar os corações desenhados pelos fãs na ficha do disco."
  },
  "help.stats.col.aml_plays7": {
    "t": "Reproduções no aimusiclist (7 dias)",
    "what": "Quantas vezes o aimusiclist.com contabilizou esta música nos últimos 7 dias.",
    "when": "Use para avaliar o desempenho da música nesta semana.",
    "care": "É sempre **7 dias**, independentemente do período escolhido. O número chega uma vez por dia. Quanto maior, melhor.",
    "like": "É a contagem do próprio mercado de quantas vezes seu disco tocou na semana."
  },
  "help.stats.col.aml_valid7": {
    "t": "Reproduções válidas (7 dias)",
    "what": "Reproduções no aimusiclist nos últimos 7 dias com escuta de **30 segundos ou mais**.",
    "when": "Use para medir ouvintes que realmente escutaram, sem contar pulos rápidos.",
    "care": "Quanto maior, melhor. Costuma ser menor que o total. Se estiver muito menor, pessoas podem desistir cedo: melhore o início ou a capa. O aimusiclist usa reproduções válidas para um ranking justo.",
    "like": "São clientes que ficaram para ouvir, não apenas passaram diante da banca."
  },
  "help.stats.col.chart": {
    "t": "Posição no ranking",
    "what": "Posição da música no ranking semanal Top 100 do aimusiclist. Pode mostrar a mudança desde a última lista.",
    "when": "Use para saber se sua música entrou no ranking principal.",
    "care": "Quanto menor, melhor. **NEW** indica entrada recente; – indica que não está no ranking agora, algo normal para muitas músicas.",
    "like": "É o lugar do seu disco no quadro de sucessos do mercado."
  },
  "help.stats.col.genre_rank": {
    "t": "Posição no gênero",
    "what": "Lugar da música no ranking aimusiclist do seu gênero, como R&B ou Hip-hop.",
    "when": "Use para comparar faixas com outras do mesmo estilo.",
    "care": "Quanto menor, melhor. Ranking de gênero é menor que o geral, então pode ser mais fácil entrar. – significa ainda sem posição.",
    "like": "É sua posição numa seção específica do mercado, como apenas R&B."
  },
  "help.stats.col.all_rank": {
    "t": "Posição entre todas as músicas",
    "what": "Posição da faixa entre **todas as músicas** ouvidas no aimusiclist nesta semana (sexta a quinta). Abaixo aparece sua melhor posição histórica.",
    "when": "Use mesmo se não estiver no Top 100, para acompanhar sua subida.",
    "click": "Não há botão. ▲ indica quantas posições subiu desde a semana anterior; ▼ quantas caiu.",
    "care": "Quanto menor, melhor. Atualiza **toda sexta-feira**. Se ninguém ouviu a música na semana, mostra –.",
    "like": "Mesmo fora do ranking principal, você vê a posição na lista completa do mercado."
  },
  "help.stats.tracks": {
    "t": "Músicas populares",
    "what": "Tabela com reproduções e posições de até 100 músicas, começando pela melhor colocada.",
    "when": "Use para ver seu sucesso atual e quais faixas precisam de atenção.",
    "click": "Consultar não altera nada. A coluna **Reproduções** acompanha o período escolhido; as colunas do aimusiclist sempre mostram os últimos 7 dias.",
    "care": "A ordem é a mesma de **Populares** do site, atualizada diariamente. Colunas do aimusiclist aparecem quando o serviço envia os números.",
    "like": "É a lista de discos mais vendidos na parede da loja."
  },
  "help.stats.rank_basis": {
    "t": "Como é definida a ordem Populares",
    "what": "Explica se a ordem **Populares** vem das reproduções do seu site ou das do aimusiclist quando o site não consegue contar.",
    "when": "Leia se não entender por que uma música está acima de outra.",
    "care": "Só contam os **últimos 7 dias**, até 100 músicas ouvidas. Em empate, valem primeiro reproduções válidas do aimusiclist e depois envio mais recente. Reproduções via aimusiclist não entram aqui.",
    "like": "É o regulamento ao lado da lista de sucessos."
  },
  "help.stats.albums": {
    "t": "Álbuns",
    "what": "Tabela de álbuns, somando reproduções de todas as faixas de cada um.",
    "when": "Use para saber qual álbum é mais ouvido.",
    "care": "Ordena do mais ouvido para o menos. Uma faixa em dois álbuns conta nos dois.",
    "like": "É contar vendas por caixa de discos, não por faixa."
  },
  "help.stats.album.plays": {
    "t": "Reproduções do álbum (período escolhido)",
    "what": "Soma reproduções de músicas do álbum no período, tanto do site **quanto** as vindas do aimusiclist.",
    "when": "Use para comparar álbuns.",
    "care": "Quanto maior, melhor. Álbuns com mais músicas podem ter total maior apenas por isso; confira também a coluna **Músicas**.",
    "like": "É a soma das vezes que os discos de uma caixa tocaram na loja e no mercado."
  },
  "help.stats.album.aml_plays7": {
    "t": "Reproduções do álbum no aimusiclist (7 dias)",
    "what": "Soma reproduções das faixas do álbum no aimusiclist nos últimos 7 dias, segundo a contagem de lá.",
    "when": "Use para saber qual álbum vai melhor no mercado nesta semana.",
    "care": "É sempre **7 dias**, independentemente do período escolhido. Quanto maior, melhor.",
    "like": "É a contagem do mercado para toda a caixa de discos nesta semana."
  },
  "help.stats.listeners": {
    "t": "Ouvintes (pelas reproduções)",
    "what": "Mostra quem ouve: país, dispositivo, idioma e horário de reprodução.",
    "when": "Use para escolher onde divulgar e em qual idioma escrever.",
    "care": "Esta hospedagem não mede visitas, então os dados vêm de **reproduções**. Nenhum dado pessoal é guardado. A % representa a parcela da lista mostrada.",
    "like": "É perceber de quais cidades vêm os clientes que colocam seus discos para tocar."
  },
  "help.stats.countries": {
    "t": "Países",
    "what": "Países dos ouvintes ou visitantes. Mostra os 10 principais, em ordem decrescente.",
    "when": "Use para planejar divulgação ou escolher idiomas dos títulos.",
    "care": "**Desconhecido** significa que não foi possível identificar o país. Uma pequena parcela é normal.",
    "like": "É um mapa com alfinetes indicando de onde vêm seus clientes."
  },
  "help.stats.devices": {
    "t": "Dispositivos",
    "what": "Mostra se visitantes usam celular, tablet ou computador.",
    "when": "Use ao escolher aparência. Se a maioria usa celular, confira o visual em tela pequena.",
    "care": "Dispositivos que não podem ser identificados não aparecem.",
    "like": "É notar se os clientes chegam a pé, de bicicleta ou de carro."
  },
  "help.stats.langs": {
    "t": "Idiomas",
    "what": "Idioma configurado nos aparelhos dos visitantes. Mostra os 10 principais.",
    "when": "Use para escolher os idiomas de textos e títulos do site.",
    "care": "É o idioma do dispositivo, não necessariamente o idioma que a pessoa fala melhor. **Desconhecido** significa que o aparelho não informou.",
    "like": "É ouvir os diferentes idiomas falados na loja."
  },
  "help.stats.audience": {
    "t": "Público",
    "what": "Mostra país, origem, dispositivo, idioma e horário dos visitantes.",
    "when": "Use para decidir onde divulgar músicas e em que idioma escrever.",
    "click": "Consultar não muda nada. Cada lista segue o período escolhido.",
    "care": "Nenhuma informação pessoal é armazenada. Só grupos amplos, como “Coreia” ou “Celular”. A % mostra a participação na lista.",
    "like": "É notar que muitos clientes chegaram de outra cidade e visitaram à noite."
  },
  "help.stats.refs": {
    "t": "Origem dos visitantes",
    "what": "Mostra como descobriram o site: endereço digitado, favoritos, buscas, redes e apps de música, aimusiclist.com, outros sites e navegação interna.",
    "when": "Use para saber qual divulgação funciona melhor.",
    "care": "**Direto / favorito** inclui links de mensageiros que não informam origem. **Dentro do site** significa passar de uma página sua para outra.",
    "like": "É perguntar a cada cliente como conheceu sua loja."
  },
  "help.stats.domains": {
    "t": "Sites de origem mais frequentes",
    "what": "Nomes dos sites que mais enviaram visitantes, até 10.",
    "when": "Use para saber onde suas publicações atraem público e divulgar novamente.",
    "care": "Mostra somente o nome do site, não a página exata. Visitas internas não entram.",
    "like": "É a lista de lojas vizinhas que indicam o caminho até a sua."
  },
  "help.stats.hours": {
    "t": "Horário do dia",
    "what": "Cada barra corresponde a uma hora (0:00–23:00). Mais altura significa mais reproduções ou visitas naquela hora, somadas no período.",
    "when": "Use para divulgar um pouco antes dos horários mais movimentados.",
    "click": "Passe o mouse ou toque para ver hora e número.",
    "care": "Horas seguem **o horário do computador**. O título mostra a diferença para UTC. Em alguns fusos de meia hora, as horas continuam em UTC.",
    "like": "É saber que sua loja fica mais cheia na hora do almoço e depois da escola."
  },
  "help.stats.aml.title": {
    "t": "No aimusiclist.com",
    "what": "Mostra reproduções, reproduções válidas, curtidas e adições a playlists no aimusiclist.com, além de gráfico diário e países.",
    "when": "Use para acompanhar as músicas públicas no grande mercado.",
    "click": "Consultar não altera nada. Os quadros seguem o período escolhido.",
    "care": "Números chegam **uma vez por dia**, pela manhã. [[Atualizar agora]] não os muda. Se disser “Não conectado”, conecte o site. Só músicas públicas no aimusiclist são contadas.",
    "like": "É o relatório que o mercado envia sobre sua banca toda manhã."
  },
  "help.stats.aml.plays": {
    "t": "Reproduções no aimusiclist",
    "what": "Quantas vezes suas músicas tocaram no aimusiclist.com durante o período.",
    "when": "Use para ver se mais pessoas estão ouvindo no mercado.",
    "care": "Quanto maior, melhor. A seta compara com dias anteriores. Só conta músicas públicas. Se cair para zero, confira publicação e conexão do site.",
    "like": "É quantas vezes seus discos tocaram na banca do mercado."
  },
  "help.stats.aml.valid": {
    "t": "Reproduções válidas (30 s+)",
    "what": "Reproduções no aimusiclist em que a pessoa ouviu por pelo menos 30 segundos no período escolhido.",
    "when": "Use para medir escuta real, não pulos rápidos.",
    "care": "Quanto maior, melhor. Se ficar muito abaixo de **Reproduções**, muita gente pula a música cedo. O aimusiclist usa reproduções válidas no ranking justo.",
    "like": "São clientes que ficaram tempo suficiente para ouvir de verdade."
  },
  "help.stats.aml.likes": {
    "t": "Curtidas no aimusiclist",
    "what": "Quantidade de curtidas recebidas no aimusiclist.com durante o período.",
    "when": "Use para saber a reação dos fãs às músicas novas.",
    "care": "Quanto maior, melhor. São curtidas no aimusiclist, não no site. As do site aparecem em **Curtidas ♥** na tabela de músicas populares.",
    "like": "São corações deixados pelos clientes no mural da sua banca."
  },
  "help.stats.aml.adds": {
    "t": "Adições a playlists",
    "what": "Quantas vezes ouvintes adicionaram suas faixas a playlists no aimusiclist.com durante o período.",
    "when": "Use para saber se querem voltar a ouvir.",
    "care": "Quanto maior, melhor. Uma adição indica interesse em ouvir novamente.",
    "like": "É como um cliente levar o disco para casa em vez de só ouvi-lo na banca."
  },
  "help.stats.aml.trend": {
    "t": "Reproduções diárias no aimusiclist",
    "what": "Cada barra representa um dia de reproduções no aimusiclist.com. Barras altas indicam mais audições.",
    "when": "Use para descobrir quando as faixas ficaram populares, como na semana de entrada num ranking.",
    "click": "Passe o mouse ou toque na barra para ver data e número.",
    "care": "O gráfico termina no mesmo dia dos dados do site (ontem, UTC). Espaços vazios significam zero ou ausência de registro.",
    "like": "São pilhas de moedas da banca do mercado, uma por dia."
  },
  "help.stats.aml.countries": {
    "t": "Países dos ouvintes no aimusiclist",
    "what": "Países de quem ouviu suas músicas no aimusiclist.com, até os 10 principais.",
    "when": "Use para descobrir onde sua música ganha popularidade.",
    "care": "Os dados são feitos pelo aimusiclist e chegam diariamente. Podem ser diferentes dos países de visitantes do seu site.",
    "like": "É o mercado informando de quais países vêm os clientes da sua banca."
  },
  "help.stats.free.r2_storage": {
    "t": "Espaço de armazenamento",
    "what": "Espaço ocupado por músicas e imagens no Cloudflare. O plano gratuito oferece **10 GB**.",
    "when": "Confira antes de enviar muitas músicas ou arquivos grandes.",
    "care": "Acima do gratuito, o Cloudflare cobra. Excluir faixas desnecessárias libera espaço. WAV ocupa bem mais que MP3.",
    "like": "É o espaço ocupado no seu depósito."
  },
  "help.stats.free.workers": {
    "t": "Solicitações do site hoje",
    "what": "Quantas vezes pediram páginas, músicas ou imagens hoje. O plano gratuito permite **100.000 por dia**.",
    "when": "Confira após divulgação que traga muitos visitantes.",
    "care": "Ao superar 100.000, o site **para até o fim do dia** (sem cobrança). Retorna às 00:00 UTC (9h na Coreia).",
    "like": "É uma porta que abre um número limitado de vezes por dia e descansa até amanhã."
  },
  "help.stats.free.r2_class_a": {
    "t": "Gravações no armazenamento neste mês",
    "what": "Operações que salvaram algo no armazenamento, como enviar música ou mudar dados. O limite gratuito é **1 milhão por mês**.",
    "when": "Confira se faz muitos envios ou alterações.",
    "care": "Uso normal fica bem abaixo. Acima do limite, há cobrança do Cloudflare. A contagem reinicia mensalmente.",
    "like": "É a quantidade de caixas guardadas no depósito neste mês."
  },
  "help.stats.free.r2_class_b": {
    "t": "Leituras do armazenamento neste mês",
    "what": "Operações que leram algo do armazenamento, geralmente ao tocar músicas. O limite gratuito é **10 milhões por mês**.",
    "when": "Confira quando as músicas tiverem muitas reproduções.",
    "care": "Acima do limite, o Cloudflare cobra. Reinicia a cada mês. Muitas reproduções são boas e fazem a barra crescer.",
    "like": "É quantas vezes discos saíram do depósito neste mês."
  },
  "help.stats.free.ae": {
    "t": "Registros de estatísticas hoje",
    "what": "Linhas registradas hoje, uma por visita, reprodução ou recado. O limite gratuito é **100.000 linhas por dia**.",
    "when": "Confira em dias muito movimentados.",
    "care": "A barra só aparece quando a contagem do dia foi feita, por exemplo após [[Atualizar agora]]. Sites comuns ficam abaixo do limite. Páginas e músicas não dependem dela.",
    "like": "É o número de linhas anotadas pelo contador da loja hoje."
  },
  "help.stats.free.title": {
    "t": "Margem do plano gratuito",
    "what": "Barras que mostram o quanto do plano gratuito do Cloudflare foi usado. O site fica gratuito enquanto cada barra estiver abaixo de 100%.",
    "when": "Confira de vez em quando, sempre após enviar muitas músicas.",
    "click": "Consultar não muda nada. A barra fica em alerta aos **70%** e em perigo aos **90%**.",
    "care": "Perto de 100%, pare de enviar arquivos grandes e confira qual limite está cheio. O gratuito comporta cerca de 1.000 músicas de 10 MB e alguns milhares de visitantes por dia.",
    "like": "São os medidores de água e luz da loja: dentro do limite gratuito, não há cobrança."
  },
  "help.an.title": {
    "t": "Análise",
    "what": "Mostra a evolução das músicas: posições subindo ou caindo, faixas em alta e notícias do aimusiclist.com.",
    "when": "Abra semanalmente para ver tendências. **Estatísticas** mostra “quantas”; esta aba mostra “subiu ou caiu”.",
    "click": "Consultar não muda nada. Escolha um período no topo para gráficos e tabela.",
    "care": "O site registra uma linha por dia. No primeiro dia não há histórico; os gráficos crescem a partir da manhã seguinte. Registros de mais de cerca de dois anos são apagados.",
    "like": "É o diário da loja, que permite comparar como tudo mudou após algumas semanas."
  },
  "help.an.period": {
    "t": "Período (7 / 30 / 90 dias / Tudo)",
    "what": "Escolhe quantos dias aparecem. **Tudo** mostra todos os dias registrados.",
    "when": "Use 7 para semana, 30 ou 90 para tendências longas e **Tudo** para histórico completo.",
    "click": "Gráficos e tabela mudam na hora. **Tudo** pode levar segundos na primeira vez por abrir dados antigos.",
    "care": "Alguns quadros usam sempre 7 dias: **Minhas músicas em alta**, **Mudança em 7 dias** e números do aimusiclist. **Curtidas e adições a playlists** mostra até 90 dias.",
    "like": "É escolher quantas páginas do diário da loja ler."
  },
  "help.an.note.start": {
    "t": "Os registros começam hoje",
    "what": "O site acabou de começar seu diário e ainda não há dias anteriores.",
    "when": "Aparece no primeiro dia deste recurso.",
    "click": "Não precisa fazer nada. Volte amanhã; a cada manhã entra mais um dia nos gráficos.",
    "care": "Dias anteriores não podem ser preenchidos depois. O histórico começa hoje.",
    "like": "É a primeira página do diário novo; amanhã terá a primeira linha."
  },
  "help.an.note.since": {
    "t": "Registrado desde",
    "what": "Primeiro dia em que o site começou a manter registros diários. Os gráficos não mostram datas anteriores.",
    "when": "Confira se um gráfico parecer começar tarde.",
    "care": "Registros são guardados por cerca de 2 anos. Meses mais antigos são removidos automaticamente.",
    "like": "É a data na primeira página do diário da loja."
  },
  "help.an.note.feed": {
    "t": "Dados do aimusiclist",
    "what": "Uma vez por dia, o site recebe um relatório do aimusiclist.com com músicas em alta, rankings e notícias. Esta linha mostra a data do relatório disponível.",
    "when": "Confira se as músicas em alta ou notícias parecerem antigas.",
    "click": "Não há botão. O relatório chega automaticamente uma vez por dia. Se ainda não chegou, volte amanhã.",
    "care": "Abrir esta aba várias vezes não solicita novo relatório. Mostra apenas o salvo, sem gerar custos extras.",
    "like": "É o jornal que o mercado deixa na porta da loja toda manhã."
  },
  "help.an.note.feed_old": {
    "t": "Os dados de hoje não chegaram",
    "what": "O site tentou buscar o relatório de hoje no aimusiclist.com, mas não conseguiu. Você vê o anterior.",
    "when": "Aparece automaticamente quando a busca falha.",
    "click": "Não precisa agir. O site tenta de novo amanhã.",
    "care": "Os números do próprio site não são afetados. Só os quadros do aimusiclist podem estar um dia atrasados. Se durar dias, confira a conexão.",
    "like": "É a manhã em que o jornal não chegou: o de ontem continua sobre a mesa."
  },
  "help.an.news": {
    "t": "Notícias do aimusiclist",
    "what": "As cinco mensagens mais recentes do aimusiclist.com. **Relatório de ranking** fala das listas; **Aviso** informa mudanças no serviço.",
    "when": "Leia quando aparecer um ponto na aba **Análise**, indicando notícia nova.",
    "click": "Clique em **Ler mais** para abrir a notícia inteira no aimusiclist.com em outra aba. Abrir esta aba apaga o ponto.",
    "care": "As notícias chegam diariamente com os dados do aimusiclist. Imagens não aparecem aqui para manter a tela leve.",
    "like": "É o mural do mercado com os cinco cartazes mais recentes."
  },
  "help.an.rank.basis": {
    "t": "Qual posição mostrar",
    "what": "Escolha o ranking do gráfico: **Posição no aimusiclist** entre todas as músicas, **Posição no meu site** na ordem Populares, ou **Ambos** para dois gráficos.",
    "when": "Use o primeiro para acompanhar o mercado e o segundo para ver o gosto dos próprios visitantes.",
    "click": "O gráfico muda na hora, e as músicas selecionadas voltam às três melhores. Isso também muda **Minhas músicas em alta** e a coluna **Mudança em 7 dias**.",
    "care": "Por padrão, usa a posição do aimusiclist se existir. Músicas que nunca tiveram posição não aparecem na lista de seleção.",
    "like": "É escolher entre o quadro do mercado e o da sua loja."
  },
  "help.an.rank": {
    "t": "Mudanças de posição",
    "what": "Gráfico de linhas com o ranking das músicas, dia a dia. Cada faixa tem sua cor, tipo de linha e símbolo.",
    "when": "Use para comparar músicas que sobem, caem ou permanecem estáveis.",
    "click": "Escolha músicas abaixo do título. Passe o mouse sobre um ponto ou toque para ver faixa, data e posição.",
    "care": "**Mais alto no gráfico é melhor** (1 fica no topo). Se as posições estiverem muito distantes, a escala é comprimida e os intervalos podem ficar desiguais.",
    "like": "É um mapa de montanha: cada faixa sobe em direção ao cume."
  },
  "help.an.rank.pick": {
    "t": "Escolher músicas",
    "what": "Os nomes abaixo do gráfico funcionam como interruptores. Cada música marcada ganha uma linha.",
    "when": "Escolha faixas para comparar, como a mais recente e a mais popular.",
    "click": "Clique no nome para adicionar ou remover a linha. O gráfico muda imediatamente. Inicialmente, as três melhores são selecionadas.",
    "care": "É possível marcar **até 8 músicas**. Depois disso, retire uma para adicionar outra. A seleção não é salva e reinicia ao trocar o tipo de ranking.",
    "like": "É escolher os alpinistas que deseja acompanhar no mapa."
  },
  "help.an.rank.gap": {
    "t": "Interrupções na linha",
    "what": "Uma interrupção indica que a música não teve posição naquele dia.",
    "when": "Leia quando a linha parar e reaparecer.",
    "care": "É normal. Não há posição se ninguém ouviu a música nos últimos 7 dias ou se os números daquele dia não chegaram. Um ponto isolado indica apenas um dia com posição.",
    "like": "É um alpinista que saiu da trilha e depois voltou."
  },
  "help.an.sort": {
    "t": "Ordenar",
    "what": "Escolha a ordem da tabela: **Mais reproduzidas**, **Tempo de escuta**, **Em alta** (maior subida da semana) ou **Mais recentes**.",
    "when": "Use Em alta para escolher o que divulgar agora, ou Mais recentes para acompanhar novidades.",
    "click": "A ordem muda imediatamente. Nada é salvo.",
    "care": "Empates são ordenados pelo título. Em **Em alta**, entradas novas (NEW) aparecem depois das mudanças reais, e músicas sem posição ficam por último.",
    "like": "É organizar os discos por vendas, duração, tendência ou data de chegada."
  },
  "help.an.table": {
    "t": "Minhas músicas em resumo",
    "what": "Tabela de faixas com reproduções, tempo de escuta, posição no aimusiclist, mudança semanal e data de envio.",
    "when": "Use para encontrar músicas fortes e as que começam a subir.",
    "click": "Use os botões de ordenação ao lado do título. Até 200 faixas aparecem.",
    "care": "Só mostra músicas com áudio. Em celulares pequenos, a coluna **Enviado** fica oculta para economizar espaço.",
    "like": "É a lista completa de discos nas prateleiras da loja."
  },
  "help.an.own_off": {
    "t": "Reproduções do meu site não são contadas",
    "what": "O site ainda não consegue contar as próprias reproduções. A coluna **Reproduções** mostra as do aimusiclist nos últimos 7 dias.",
    "when": "O aviso aparece automaticamente.",
    "click": "Não há botão. Ao ativar a contagem (veja os avisos em **Estatísticas**), a coluna passará a mostrar as suas reproduções.",
    "care": "Nesse caso, Reproduções ignora o período escolhido: são sempre os últimos 7 dias.",
    "like": "Sem contador na loja, você usa os números do grande mercado."
  },
  "help.an.col.plays": {
    "t": "Reproduções",
    "what": "Quantas vezes a música tocou no seu site durante o período escolhido.",
    "when": "Use para encontrar as mais ouvidas.",
    "care": "Quanto maior, melhor. Reproduções via aimusiclist não entram. – significa que não há dado para essa faixa.",
    "like": "É quantas vezes o disco foi colocado para tocar na loja."
  },
  "help.an.col.time": {
    "t": "Tempo de escuta",
    "what": "Estimativa do tempo total em que a música foi ouvida: **reproduções × duração da faixa**.",
    "when": "Use para comparar de forma mais justa faixas curtas e longas.",
    "care": "É uma **estimativa**: o site não sabe se alguém parou no meio, então o tempo real pode ser menor. Sem duração salva, aparece –.",
    "like": "É calcular quanto tempo o toca-discos funcionou pelo número de execuções e duração."
  },
  "help.an.col.rank": {
    "t": "Posição no aimusiclist",
    "what": "Posição mais recente da faixa entre todas as músicas do aimusiclist.",
    "when": "Use para ver qual de suas músicas vai melhor no mercado.",
    "care": "Quanto menor, melhor. Muda semanalmente, às sextas-feiras. – indica ausência de posição, normal quando ninguém ouviu a faixa na semana.",
    "like": "É o número do disco na lista completa do mercado."
  },
  "help.an.col.rise": {
    "t": "Mudança em 7 dias",
    "what": "Quantas posições a música mudou em relação a sete dias atrás.",
    "when": "Use para encontrar faixas que começam a subir.",
    "click": "Não há botão. ▲ significa que subiu, ▼ caiu, – ficou igual. **NEW** indica que não tinha posição há 7 dias.",
    "care": "▲ é positivo. Usa o tipo escolhido em **Mudanças de posição** (aimusiclist ou meu site). Se faltar um dia, usa o registro mais próximo dos três anteriores.",
    "like": "É medir quantos passos o alpinista subiu nesta semana."
  },
  "help.an.col.uploaded": {
    "t": "Enviado",
    "what": "Data em que a música foi enviada ao seu site.",
    "when": "Use para comparar faixas novas com antigas.",
    "care": "Em telas pequenas, esta coluna fica oculta. Gire o celular ou use um computador para vê-la.",
    "like": "É a data carimbada na caixa quando o disco chegou."
  },
  "help.an.mine": {
    "t": "Minhas músicas em alta",
    "what": "Até cinco músicas cujas posições mais subiram nesta semana, com pequeno gráfico dos últimos 14 dias.",
    "when": "Use para escolher qual divulgar: um impulso extra pode ajudar músicas que já sobem.",
    "click": "Não há botão. Cada cartão mostra quantas posições subiu e a posição de sete dias atrás até agora.",
    "care": "Considera sempre os **últimos 7 dias** e o tipo escolhido em **Mudanças de posição**, indicado abaixo do título. Só lista músicas que realmente subiram.",
    "like": "É a seção “Em alta nesta semana” da loja."
  },
  "help.an.aml.genre": {
    "t": "Gênero",
    "what": "Filtra músicas em alta por gênero. **Todos os gêneros** mostra a lista inteira.",
    "when": "Escolha seu gênero para ver quem está concorrendo com você.",
    "click": "A lista muda imediatamente. Nada é salvo.",
    "care": "Só aparecem gêneros com músicas em alta hoje.",
    "like": "É visitar apenas o corredor R&B do mercado."
  },
  "help.an.aml": {
    "t": "Em alta no aimusiclist",
    "what": "Faixas de todos os artistas do aimusiclist que estão subindo rápido. Suas músicas recebem a etiqueta **Minha música**.",
    "when": "Use para descobrir estilos populares e conhecer outros artistas.",
    "click": "Clique no título para abrir a página da faixa no aimusiclist em nova aba e ouvir lá. Nada toca nesta tela.",
    "care": "A lista chega diariamente com os dados do aimusiclist. ▲ mostra a subida, **NEW** uma entrada nova. O número de ouvintes indica quantas pessoas escutaram.",
    "like": "É passear pelo mercado e ver quais bancas têm fila hoje."
  },
  "help.an.s1": {
    "t": "Começo das músicas novas",
    "what": "Gráfico do total acumulado de reproduções nos primeiros sete dias após o envio. Mostra até seis faixas recentes.",
    "when": "Use para comparar o início de uma música nova com outras anteriores.",
    "click": "Passe o mouse sobre um ponto ou toque para ver música, dia e total. A legenda abaixo identifica cada linha.",
    "care": "Só aparecem faixas enviadas **depois do início do registro**. Se o site não conta reproduções, o quadro permanece vazio.",
    "like": "É uma corrida em que cada faixa começa do zero para ver qual avança mais na primeira semana."
  },
  "help.an.s2": {
    "t": "Distância para o Top 100",
    "what": "Indica aproximadamente quanto falta para até cinco músicas entrarem no Top 100 do aimusiclist.",
    "when": "Use para definir metas, como “mais 20 ouvintes nesta semana”.",
    "click": "Não há botão. Cada linha indica se já entrou, quantos ouvintes extras podem faltar ou se está perto.",
    "care": "É um **palpite**, não garantia. O ranking real considera outros fatores, então estar perto não garante entrada. Se o Top 100 ainda não estiver completo, faixas que cumpram a regra entram.",
    "like": "É uma placa na trilha dizendo “faltam cerca de 200 passos para o topo”."
  },
  "help.an.s2.note": {
    "t": "Por que é uma estimativa",
    "what": "O aimusiclist não informa o número exato de ouvintes. Este quadro estima com base nas **reproduções válidas** dos últimos 7 dias.",
    "when": "Leia se os números parecerem estranhos.",
    "care": "O aimusiclist conta **uma reprodução por pessoa por dia**. Assim, ouvintes diferentes podem ser menos que reproduções. Considere apenas orientação aproximada.",
    "like": "É estimar visitantes pelas pegadas: algumas pessoas passaram duas vezes."
  },
  "help.an.s3": {
    "t": "Curtidas e adições a playlists",
    "what": "Mostra curtidas e adições às playlists no aimusiclist por dia e as músicas com melhores resultados.",
    "when": "Use para ver quais faixas o público ama de verdade, além de ouvir uma vez.",
    "click": "Passe o mouse ou toque na barra para ver data e número.",
    "care": "Quanto maior, melhor. Mostra no máximo os últimos **90 dias**, mesmo em **Tudo**. Dados chegam diariamente.",
    "like": "É contar corações e etiquetas “levar para casa” na banca do mercado."
  },
  "help.an.s3.likes": {
    "t": "Curtidas no aimusiclist",
    "what": "Cada barra representa as curtidas que suas músicas receberam no aimusiclist naquele dia.",
    "when": "Use para ver se aumentam depois de lançar ou divulgar.",
    "care": "Quanto maior, melhor. São apenas curtidas no aimusiclist. Curtidas do seu site aparecem em **Estatísticas**.",
    "like": "É a contagem diária de corações no mural da banca."
  },
  "help.an.s3.adds": {
    "t": "Adicionadas a playlists",
    "what": "Cada barra mostra quantas vezes suas faixas entraram em playlists do aimusiclist naquele dia.",
    "when": "Use para saber se o público deseja guardar as músicas e ouvir de novo.",
    "care": "Quanto maior, melhor. Adicionar a playlist é um dos sinais mais fortes de interesse.",
    "like": "É contar clientes que levaram o disco para casa a cada dia."
  },
  "help.an.s3.top": {
    "t": "Mais curtidas e adições",
    "what": "Até cinco faixas com mais curtidas (♥) e adições (+) no aimusiclist nos últimos 7 dias.",
    "when": "Use para escolher música do próximo post ou para abrir um álbum.",
    "care": "É sempre **últimos 7 dias**. Ordena pela soma de curtidas e adições.",
    "like": "É a prateleira “Favoritas dos fãs” da loja."
  },
  "help.an.s4": {
    "t": "Minha posição no meu gênero",
    "what": "Mostra, para até seis músicas, a posição no ranking aimusiclist do próprio gênero e sua porcentagem entre as faixas.",
    "when": "Use para comparar sua força com músicas do mesmo estilo.",
    "click": "Não há botão. **no Top 20** aparece para faixas entre as vinte primeiras do gênero.",
    "care": "Posição e % menores são melhores (top 1% é excelente). Se o tamanho do gênero for desconhecido, a % considera todas as músicas do aimusiclist. Faixas sem ranking mostram essa informação.",
    "like": "É saber sua posição na seção de R&B, não no mercado inteiro."
  },
  "help.site.seo": {
    "t": "Apareça nas buscas (Google)",
    "what": "Configurações para buscadores como o Google. Cada música e álbum do seu site tem uma página própria que pode aparecer nas buscas.",
    "when": "Use para ocultar seu site dos buscadores ou cadastrá-lo no Google Search Console.",
    "click": "Este título apenas explica a seção. A opção e as etapas abaixo fazem as alterações.",
    "care": "Seu site pode levar de alguns dias a algumas semanas para aparecer no Google. Isso não muda nada no aimusiclist.com.",
    "like": "É como colocar o nome da sua loja e de cada disco no mapa da cidade."
  },
  "help.site.seo_switch": {
    "t": "Mostrar minhas músicas e álbuns nos resultados de busca",
    "what": "Permite que buscadores mostrem as páginas inicial, de músicas e de álbuns do seu site. Vem ativado.",
    "when": "Deixe ativado para que novos ouvintes encontrem você pelas buscas. Desative se quiser que seu site fique fora dos resultados de busca.",
    "click": "A alteração é salva assim que você clica. Quando a opção está desativada, as páginas pedem aos buscadores que não as mostrem, e o mapa do site para buscas é removido.",
    "care": "Páginas que já aparecem nas buscas podem demorar a sumir. Quem souber seu endereço ainda poderá visitar o site.",
    "like": "É como a placa \"aberto ao público\" na porta da loja."
  },
  "help.site.gsc": {
    "t": "Cadastrar meu site no Google Search Console",
    "what": "Um passo a passo para informar o Google sobre seu site usando sua própria conta Google.",
    "when": "Faça uma vez se quiser que o Google encontre músicas novas mais cedo e ver como as pessoas procuram por você.",
    "click": "Abra as instruções e siga as etapas na ordem. Basta fazer isso uma vez.",
    "care": "Você precisa de uma conta Google. Se algo der errado, pode repetir as etapas sem prejudicar seu site.",
    "like": "É como assinar o livro de visitas do setor de mapas da cidade para que confiram sua loja com mais frequência."
  },
  "help.site.gsc_open": {
    "t": "Abrir o Google Search Console",
    "what": "Abre a página do próprio Google em uma nova aba.",
    "when": "Clique na primeira etapa.",
    "click": "Entre com sua conta Google nessa página e depois volte a esta aba para a próxima etapa.",
    "care": "Esta página é do Google, não faz parte do seu site."
  },
  "help.site.gsc_copy": {
    "t": "Copiar",
    "what": "Copia o endereço exibido ao lado.",
    "when": "Clique quando a etapa pedir para colar o endereço do seu site ou o endereço do sitemap.",
    "click": "Depois, cole o endereço no campo da página do Search Console.",
    "care": "Se a cópia não funcionar no seu aparelho, uma pequena janela mostrará o endereço para você copiar manualmente."
  },
  "help.site.gsc_input": {
    "t": "Tag de verificação do Google",
    "what": "Campo para o texto que o Google fornece para confirmar que o site é seu.",
    "when": "Cole aqui o texto copiado de [[HTML tag]] no Search Console.",
    "click": "Pode colar o texto inteiro, sem mudar nada. Seu site guarda apenas a parte necessária.",
    "care": "Apague o conteúdo do campo e clique em Salvar para remover a tag.",
    "like": "É como uma etiqueta com seu nome mostrando ao Google que a loja é sua."
  },
  "help.site.gsc_save": {
    "t": "Salvar",
    "what": "Salva o texto de verificação e o coloca na página inicial do seu site.",
    "when": "Clique depois de colar o texto, antes de clicar em [[Verify]] no Search Console.",
    "click": "Em instantes, aparece uma marca de confirmação. Depois, volte ao Search Console e clique em [[Verify]].",
    "care": "Se aparecer uma mensagem vermelha, copie o texto de [[HTML tag]] novamente e cole tudo."
  }
});
