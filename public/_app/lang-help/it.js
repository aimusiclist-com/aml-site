// Testi di aiuto — pannello di amministrazione in italiano (3-26).
// Tradurre solo i testi, mantenendo chiavi, segnaposto, **grassetti**, [[pulsanti]] e interruzioni di riga. Controllo: node tools/help-check.js
AMLHelp.add('it', {
  "_ui": {
    "what": "Che cos'è?",
    "when": "Quando si usa?",
    "click": "Che cosa succede se lo premo?",
    "care": "Attenzione",
    "like": "Immaginalo così",
    "close": "Chiudi"
  },
  "help.top.lang": {
    "t": "Lingua",
    "what": "Sceglie la lingua di questa pagina di amministrazione. Nell'elenco trovi tutte le lingue disponibili nel programma.",
    "when": "Usala quando le parole sono difficili da capire o vuoi vedere come appare il tuo sito in un'altra lingua.",
    "click": "La pagina cambia subito. La scelta viene ricordata soltanto in questo browser, quindi su un altro computer o telefono potresti vedere una lingua diversa.",
    "care": "Questo non cambia la lingua principale del sito per i visitatori. Quella si sceglie in **Lingua del sito**, nella scheda Informazioni sul sito. Se apri il sito con questo stesso browser, vedrai anche lì la lingua che hai scelto qui.",
    "like": "È come decidere in che lingua leggere le etichette nel retrobottega. L'insegna del negozio fuori resta uguale."
  },
  "help.setup.title": {
    "t": "Crea l'account amministratore",
    "what": "È la prima schermata che vedi dopo aver installato il sito. Qui crei l'unico account che lo gestisce, con email, password e chiave di utilizzo Cloudflare.",
    "when": "La vedi una sola volta, subito dopo l'installazione. Ricompare solo se segui la procedura per recuperare una password dimenticata.",
    "click": "Questo è solo il titolo. Compila le caselle qui sotto e premi [[Crea amministratore]].",
    "care": "Se hai appena installato il sito, attendi prima circa 1 minuto. Cloudflare deve preparare lo spazio per i brani. Se compare un errore, aspetta un minuto e riprova.\nNon puoi usare come nome del sito quello di un cantante o gruppo famoso.",
    "like": "È come ricevere l'unica chiave di un negozio nuovo il giorno dell'apertura."
  },
  "help.setup.legacy": {
    "t": "Vecchia password amministratore (AML_ADMIN_TOKEN)",
    "what": "Questa casella compare solo nei siti installati con il metodo precedente, quando la password dell'amministratore veniva scritta nelle impostazioni di Cloudflare.",
    "when": "Inserisci la vecchia password amministratore che usavi prima. Serve solo questa volta.",
    "click": "Mentre scrivi non succede nulla. La password viene controllata quando premi [[Crea amministratore]].",
    "care": "Serve a dimostrare che il sito è davvero tuo e a impedire che qualcuno se ne impossessi. Se è errata, l'account non viene creato. Cerca il valore nelle impostazioni Cloudflare di questo sito.",
    "like": "È come mostrare una volta la vecchia chiave del negozio al fabbro per dimostrare che puoi riceverne una nuova."
  },
  "help.setup.email": {
    "t": "Email",
    "what": "È l'indirizzo email che userai per accedere. Non viene mai mostrato sul tuo sito.",
    "when": "Usa una casella che controlli spesso. L'email con cui ti sei registrato su Cloudflare è facile da ricordare.",
    "click": "Non viene ancora salvato nulla. L'indirizzo viene salvato quando premi [[Crea amministratore]].",
    "care": "Deve avere il formato di un vero indirizzo (nome@example.com). Anche aimusiclist.com lo riceve come contatto privato del tuo sito. Potrai cambiarlo in seguito in Informazioni sul sito.",
    "like": "È come scrivere il tuo nome sul portachiavi del negozio."
  },
  "help.setup.password": {
    "t": "Password (almeno 6 caratteri)",
    "what": "È la password che userai per accedere insieme all'email qui sopra.",
    "when": "Sceglila adesso. Usa almeno 6 caratteri: più è lunga, più è sicura.",
    "click": "Non viene ancora salvato nulla. La password viene salvata quando premi [[Crea amministratore]].",
    "care": "Non usare una password che usi già altrove. Se la dimentichi, puoi reimpostarla senza perdere i brani.",
    "like": "È la chiave del negozio: non farne una copia che apre anche altre porte."
  },
  "help.setup.password2": {
    "t": "Ripeti la password",
    "what": "Scrivi ancora una volta la stessa password.",
    "when": "Subito dopo aver compilato la prima casella della password.",
    "click": "Quando premi [[Crea amministratore]], le due password vengono confrontate.",
    "care": "Se sono diverse, appare un messaggio e non viene creato nulla. Basta scriverle entrambe di nuovo.",
    "like": "È come provare due volte la chiave nuova nella serratura, per essere sicuri che funzioni."
  },
  "help.setup.token": {
    "t": "Chiave di utilizzo Cloudflare (obbligatoria, sola lettura)",
    "what": "È una chiave che crei su Cloudflare. Permette a questa pagina di mostrarti quanta parte della quota gratuita di Cloudflare usa il tuo sito.",
    "when": "Creala seguendo la guida qui sotto (circa 2 minuti), copiala e incollala qui.",
    "click": "Quando smetti di scrivere, la chiave viene verificata automaticamente. Vedrai ✓ con il nome dell'account Cloudflare oppure ✗ con la spiegazione dell'errore.",
    "care": "La chiave può soltanto leggere i dati di utilizzo e il nome del tuo account. Non può modificare o cancellare nulla. Cloudflare la mostra una sola volta: incollala appena la copi. Servono entrambe le autorizzazioni (Account Analytics · Read e Account Settings · Read).",
    "like": "È come una chiave che apre solo lo sportello del contatore elettrico. Non può aprire il negozio."
  },
  "help.setup.account": {
    "t": "Account Cloudflare",
    "what": "Questo elenco compare se la tua chiave di utilizzo può vedere più di un account Cloudflare.",
    "when": "Scegli l'account nel quale hai installato questo sito.",
    "click": "La chiave viene controllata di nuovo subito per l'account scelto. Il segno ✓ significa che va tutto bene.",
    "care": "Se scegli l'account sbagliato, le barre di utilizzo mostreranno i numeri di un altro account oppure non si caricheranno.",
    "like": "È come avere le chiavi di più edifici e indicare quello in cui si trova il tuo negozio."
  },
  "help.setup.account_id": {
    "t": "Cloudflare Account ID",
    "what": "È il numero del tuo account Cloudflare: 32 caratteri, cifre 0–9 e lettere a–f.",
    "when": "Questa casella appare solo se la chiave non riesce a trovare automaticamente l'account. Succede quando nella chiave manca l'autorizzazione Account Settings · Read.",
    "click": "Appena inserisci tutti e 32 i caratteri, la chiave viene ricontrollata automaticamente.",
    "care": "Lo trovi su Cloudflare: Workers & Pages → Account Details → Account ID (pulsante di copia). Oppure crea di nuovo la chiave con il pulsante della guida. Se inserisci entrambe le autorizzazioni, questa casella non serve.",
    "like": "È come dire al lettore del contatore il numero di casa quando manca il cartello della via."
  },
  "help.setup.token_guide": {
    "t": "Come creare la chiave di utilizzo (2 minuti)",
    "what": "Cinque semplici passaggi che mostrano come creare la chiave di utilizzo su Cloudflare.",
    "when": "Leggili mentre crei la chiave. Premi il titolo per aprire o chiudere la guida.",
    "click": "Aprirla o chiuderla non modifica nulla. Il primo passaggio contiene un pulsante che apre Cloudflare.",
    "care": "I nomi delle schermate di Cloudflare possono cambiare un po'. Se un nome è diverso, scegli quello più simile. Su Cloudflare premi [[Continue to summary]], poi [[Create Token]], quindi [[Copy]].",
    "like": "È come il piccolo disegno che spiega come montare un mobile nuovo."
  },
  "help.setup.submit": {
    "t": "Crea amministratore",
    "what": "Crea il tuo account amministratore usando email, password e chiave di utilizzo indicate sopra.",
    "when": "Premi quando tutte le caselle sono compilate e accanto alla chiave compare ✓.",
    "click": "Se qualcosa non va, un messaggio appare vicino al pulsante e non viene creato nulla. Se è tutto corretto, accedi e si apre la pagina di amministrazione. Il sito inizia anche a collegarsi automaticamente ad aimusiclist.com.",
    "care": "Ogni sito ha un solo account amministratore. Per ricrearlo devi seguire la procedura per la password dimenticata. Anche in quel caso i brani e gli album vengono conservati.",
    "like": "È come tagliare il nastro il giorno dell'apertura: il negozio è tuo e le porte si aprono."
  },
  "help.login.title": {
    "t": "Accedi",
    "what": "È l'ingresso alla pagina di amministrazione. Solo il proprietario del sito può entrare con email e password.",
    "when": "La vedi quando non hai effettuato l'accesso in questo browser o quando la sessione è scaduta.",
    "click": "Questo è solo un titolo. Compila le caselle qui sotto e premi [[Accedi]].",
    "care": "L'accesso dura 30 giorni in un browser. Se cambi password, tutti i dispositivi vengono disconnessi.",
    "like": "È la porta sul retro del negozio, chiusa a chiave. L'ingresso principale (il sito) resta aperto ai visitatori."
  },
  "help.login.email": {
    "t": "Email",
    "what": "È l'email scelta quando hai creato l'account amministratore.",
    "when": "Inseriscila ogni volta che accedi.",
    "click": "Non succede nulla finché non premi [[Accedi]].",
    "care": "Maiuscole e minuscole non fanno differenza. Se il sito è su meshmelo, usa l'email del tuo account meshmelo.",
    "like": "È come dire il tuo nome alla porta sul retro prima di mostrare la chiave."
  },
  "help.login.password": {
    "t": "Password",
    "what": "È la password dell'account amministratore.",
    "when": "Inseriscila ogni volta che accedi.",
    "click": "Non succede nulla finché non premi [[Accedi]].",
    "care": "Dopo 5 tentativi sbagliati consecutivi dallo stesso posto, l'accesso viene bloccato per 15 minuti. Il messaggio ti dice quanti tentativi restano.",
    "like": "È la chiave vera e propria. Se provi troppe chiavi sbagliate, la serratura si prende una pausa."
  },
  "help.login.submit": {
    "t": "Accedi",
    "what": "Controlla email e password e apre la pagina di amministrazione.",
    "when": "Premi dopo aver compilato entrambe le caselle. Il link [[Visualizza sito]] accanto apre il sito come lo vedono i visitatori.",
    "click": "Se i dati sono corretti, si apre la pagina di amministrazione e questo browser rimane collegato per 30 giorni. Altrimenti compare un messaggio rosso sotto.",
    "care": "L'accesso qui non ti collega automaticamente agli altri dispositivi. Ogni browser deve effettuare l'accesso.",
    "like": "È come girare la chiave ed entrare nel retrobottega."
  },
  "help.login.forgot": {
    "t": "Hai dimenticato la password?",
    "what": "Spiega come impostare una nuova email e una nuova password se non ricordi quelle attuali.",
    "when": "Usala soltanto se davvero non riesci ad accedere. Premi il titolo per vedere i passaggi.",
    "click": "Aprire la guida non cambia nulla. Segui tu i passaggi indicati. Nei siti Cloudflare rimuovi dall'archivio dei brani (R2) soltanto i dati amministratore, poi ricompare la schermata [[Crea amministratore]].",
    "care": "I brani, gli album e il collegamento ad aimusiclist.com rimangono. Rimuovi soltanto l'elemento indicato, niente altro. Nella versione PHP devi invece creare un file vuoto sul tuo hosting. Su meshmelo puoi reimpostare l'accesso dal tuo account meshmelo.",
    "like": "È come chiamare il fabbro per una nuova chiave. Il negozio e tutto ciò che contiene restano intatti."
  },
  "help.top.mm_acct": {
    "t": "Il mio account meshmelo",
    "what": "È un link alla pagina del tuo account meshmelo. Lo vedi solo se il tuo sito è ospitato su meshmelo.",
    "when": "Vai lì per accesso e password, archivio dei brani, utilizzo, dominio personale o eliminazione dell'intero sito.",
    "click": "L'account meshmelo si apre in una nuova scheda. Questa pagina resta aperta.",
    "care": "Brani, album, menu, temi e statistiche si gestiscono qui, non lì. Non sai quale pagina usare? Premi il ? accanto al link.",
    "like": "È l'ufficio che si occupa di tutti i tuoi negozi. Questa pagina di amministrazione è il bancone di un solo negozio."
  },
  "help.top.view_site": {
    "t": "Visualizza sito",
    "what": "Apre il tuo sito, cioè la pagina che vedono i visitatori.",
    "when": "Usalo dopo una modifica per controllare il risultato.",
    "click": "Il sito si apre in una nuova scheda. Questa pagina di amministrazione rimane aperta.",
    "care": "La maggior parte delle modifiche appare entro circa 30 secondi. Poiché hai effettuato l'accesso, potresti vedere anche alcune informazioni visibili solo a te, come il numero di riproduzioni dei brani.",
    "like": "È come uscire a guardare la vetrina del negozio con gli occhi di chi passa per strada."
  },
  "help.top.logout": {
    "t": "Esci",
    "what": "Termina la sessione di accesso in questo browser.",
    "when": "Usalo su un computer condiviso o preso in prestito, oppure quando hai finito.",
    "click": "Torni subito alla schermata di accesso. I brani e le impostazioni non vengono toccati.",
    "care": "La disconnessione riguarda solo questo browser. Gli altri dispositivi rimangono collegati. Per uscire ovunque, cambia la password nella scheda Informazioni sul sito.",
    "like": "È come chiudere a chiave la porta sul retro prima di andare via. Le altre chiavi funzionano ancora."
  },
  "help.top.version": {
    "t": "Nuova versione",
    "what": "È una riga che appare quando esce una versione più recente del programma. Mostra la tua versione e quella più nuova.",
    "when": "Quando la vedi, programma l'aggiornamento. Il controllo avviene una volta al giorno.",
    "click": "[[Come aggiornare]] apre la guida agli aggiornamenti. [[Novità]] mostra i cambiamenti. Nulla cambia finché non aggiorni.",
    "care": "L'aggiornamento non è mai obbligatorio. Se la riga è rossa, la tua versione è più vecchia di quelle supportate da aimusiclist.com: aggiornala presto. Brani e impostazioni restano salvati. Nella versione PHP trovi qui anche un pulsante per aggiornare.",
    "like": "È come un avviso che dice che per il negozio sono pronti scaffali nuovi e migliori."
  },
  "help.top.aml": {
    "t": "Collegamento ad aimusiclist.com",
    "what": "È una riga che mostra se il sito è collegato ad aimusiclist.com. Soltanto quando il collegamento è attivo i tuoi brani pubblici possono apparire nelle classifiche.",
    "when": "Controllala dopo l'installazione e quando i brani non compaiono su aimusiclist.com.",
    "click": "È solo un indicatore di stato: ✓ collegato · … collegamento in corso · ✗ non collegato, con il motivo e l'ora del prossimo tentativo automatico.",
    "care": "Un sito nuovo si collega da solo. In caso di errore riprova ogni 10 minuti, fino a 20 volte al giorno. Per alcuni errori si ferma: dopo aver risolto il problema premi [[Riprova ora]]. Se il sito meshmelo è sospeso, questa riga segnala la sospensione.",
    "like": "È la strada dal tuo negozio al grande mercato. Quando è aperta, i tuoi dischi raggiungono la vetrina del mercato."
  },
  "help.top.lang_missing": {
    "t": "Lingua dei brani mancante",
    "what": "È un avviso che segnala che alcuni brani non hanno ancora una lingua. Di solito sono canzoni caricate prima che questa impostazione esistesse.",
    "when": "Correggile quando hai un minuto. Aiuterai chi ascolta su aimusiclist.com a trovare brani nella propria lingua.",
    "click": "È solo un avviso. Premi [[Imposta ora]] per correggerli tutti insieme.",
    "care": "Non sei obbligato a farlo subito. Finché non scegli una lingua, aimusiclist.com considera quei brani nella lingua principale del sito. L'avviso scompare quando ogni brano ha una lingua.",
    "like": "È come avere dischi nel negozio senza l'etichetta che indica in che lingua si canta."
  },
  "help.top.pubmin_note": {
    "t": "Brani pubblici insufficienti",
    "what": "Avviso: su aimusiclist.com hai meno brani pubblici di quanti ne richieda la regola. Servono almeno 10 brani pubblici (oppure tutti, se ne hai meno di 10).",
    "when": "Compare solo quando scendi sotto questa quantità, per esempio dopo aver eliminato dei brani.",
    "click": "È solo un avviso. Premi [[Scegli i brani]] per sistemare la situazione.",
    "care": "Nessun brano viene reso pubblico automaticamente. Però, finché non risolvi, non puoi rendere privati altri brani. Sei tu a decidere quali pubblicare e puoi eliminare qualsiasi brano che non vuoi condividere.",
    "like": "Il grande mercato chiede a ogni negozio di esporre almeno 10 dischi in vetrina."
  },
  "help.top.profile_note": {
    "t": "Aggiungi una foto del profilo",
    "what": "È un suggerimento che compare quando hai dei brani ma non ancora una foto del profilo. La foto appare anche accanto alle tue canzoni su aimusiclist.com.",
    "when": "Aggiungila quando puoi. Un volto o un logo aiuta a ricordare i tuoi brani.",
    "click": "È solo un suggerimento. Premi [[Aggiungi foto]] per scegliere un'immagine.",
    "care": "Non è obbligatorio. Il suggerimento scompare quando salvi una foto del profilo.",
    "like": "È come mettere la tua foto sulla porta del negozio, così tutti sanno a chi appartiene."
  },
  "help.top.genre_sample": {
    "t": "Elenco dei generi incluso nel programma",
    "what": "È un avviso che dice che non è stato possibile caricare i generi da aimusiclist.com. Per il momento viene usato l'elenco già presente nel programma.",
    "when": "Non devi fare nulla. Di solito scompare quando apri di nuovo la pagina di amministrazione.",
    "click": "È solo un avviso.",
    "care": "L'elenco incluso potrebbe non contenere i generi più recenti. Se te ne serve uno, attendi e ricarica la pagina più tardi. I generi già assegnati a brani e menu non cambiano.",
    "like": "È come usare il catalogo stampato dell'anno scorso perché oggi non è arrivato quello nuovo."
  },
  "help.setup.token_open": {
    "t": "Creala su Cloudflare",
    "what": "Apre in una nuova scheda la pagina Cloudflare per creare la chiave, con nome ed entrambe le autorizzazioni già compilati.",
    "when": "Premi al primo passaggio della guida.",
    "click": "Cloudflare si apre in una nuova scheda (effettua l'accesso se richiesto). Questa pagina resta aperta, così puoi tornare e incollare la chiave.",
    "care": "Controlla che ci siano entrambe le autorizzazioni: Account Analytics · Read e Account Settings · Read. Se sono vuote, aggiungi tu queste due righe.",
    "like": "È come ricevere un modulo d'ordine già compilato: devi solo firmarlo."
  },
  "help.tracks.ai_tool": {
    "t": "Creato con",
    "what": "È lo strumento AI che hai usato per creare il brano, per esempio Suno. Appare come una piccola etichetta «✦ nome» accanto alla canzone.",
    "when": "Scegli lo strumento che hai davvero usato. Nella scheda di caricamento sarà applicato a tutti i brani di quel caricamento.",
    "click": "Viene salvato quando carichi i brani o premi [[Salva brano]]. Durante il caricamento, il browser ricorda la tua scelta per la volta successiva.",
    "care": "L'elenco degli strumenti è gestito da aimusiclist.com. Se manca il tuo, scegli «Altro» e scrivi ad admin@aimusiclist.com. La scelta non influisce sulle classifiche.",
    "like": "È come la scritta «prodotto con» sul retro di un disco."
  },
  "help.tracks.ai_fill": {
    "t": "Brani senza strumento AI",
    "what": "È un avviso che indica quanti brani non hanno ancora uno strumento AI assegnato. Compare solo se ce n'è almeno uno.",
    "when": "Usalo per assegnare lo strumento a tutti quei brani in un colpo solo.",
    "click": "È solo un avviso. Scegli uno strumento qui sotto e premi [[Assegna questo strumento a tutti]].",
    "care": "Quando ogni brano ha uno strumento, l'avviso scompare da solo.",
    "like": "È come un biglietto sul bancone: «5 dischi non hanno ancora il timbro del produttore»."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Assegna questo strumento a tutti",
    "what": "Assegna lo strumento scelto a ogni brano che non ha ancora uno strumento AI.",
    "when": "Usalo quando hai creato quasi tutti i brani con lo stesso strumento, ad esempio dopo aver caricato molte vecchie canzoni.",
    "click": "Prima compare una finestra di conferma. Se rispondi sì, la modifica viene salvata subito e il nome dello strumento ✦ appare accanto ai brani sul tuo sito e su aimusiclist.com.",
    "care": "Cambiano solo i brani che non hanno ancora uno strumento. Quelli già compilati restano uguali. Se alcuni sono stati creati con un altro strumento, correggili in **Strumento AI dei brani selezionati** o con [[Modifica]] sul singolo brano.",
    "like": "È come timbrare con lo stesso marchio tutti i dischi ancora senza timbro, saltando quelli che ne hanno già uno."
  },
  "help.tracks.bulk_ai": {
    "t": "Strumento AI dei brani selezionati",
    "what": "Imposta in una sola volta lo strumento AI usato per creare i brani selezionati (per esempio Suno).",
    "when": "Usalo se hai fatto molte canzoni con lo stesso strumento o vuoi correggere uno strumento sbagliato su più brani.",
    "click": "Scegliere uno strumento non salva nulla. Premi [[Applica]] accanto per salvare.",
    "care": "Selezionando **Non impostato** e premendo [[Applica]], togli lo strumento dai brani selezionati. Se manca il tuo strumento, scegli **Altro** e scrivi ad admin@aimusiclist.com.",
    "like": "È come timbrare insieme il retro di molti dischi con la scritta «creato con questo strumento»."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Applica",
    "what": "Salva lo strumento AI scelto su ogni brano selezionato.",
    "when": "Premi dopo aver selezionato i brani e scelto uno strumento.",
    "click": "La modifica viene salvata subito, un breve messaggio indica quanti brani sono cambiati e le spunte si azzerano. Il piccolo nome dello strumento ✦ cambia accanto a ogni brano, sul tuo sito e su aimusiclist.com.",
    "care": "Lo strumento precedente viene sostituito. Se non selezioni nessun brano, vedi solo un promemoria che ti invita a selezionarne uno.",
    "like": "È il momento in cui il timbro viene davvero impresso sui dischi."
  },
  "help.tracks.genre_main": {
    "t": "Genere principale",
    "what": "È il genere più importante del brano. L'elenco è lo stesso del menu generi di aimusiclist.com.",
    "when": "Scegli il genere più adatto alla canzone. È obbligatorio.",
    "click": "Viene salvato quando premi [[Salva brano]]. Se il brano è pubblico, appare nel menu di quel genere su aimusiclist.com.",
    "care": "Se non scegli un genere principale, il salvataggio viene rifiutato. Le altre due caselle accanto servono per le influenze di altri generi.",
    "like": "È il reparto del grande mercato in cui esponi il disco, per esempio l'angolo R&B."
  },
  "help.tracks.genre_sub": {
    "t": "Genere aggiuntivo",
    "what": "Puoi indicare fino a due generi che si mescolano nel brano. Per esempio, una canzone R&B con rap può aggiungere Hip-hop.",
    "when": "Usali quando un solo genere non basta. Sono facoltativi.",
    "click": "Si salvano quando premi [[Salva brano]] (o durante il caricamento). aimusiclist.com li mostra in ordine dopo il genere principale, accanto al titolo.",
    "care": "Puoi scegliere qualsiasi genere, raggruppato per genere principale. Se scegli due volte lo stesso, viene contato una volta sola. Seleziona «— Nessuno —» per lasciare vuota una casella.",
    "like": "Sono piccole note aggiuntive sull'etichetta dello scaffale, per esempio «con un po' di hip-hop»."
  },
  "help.tracks.lang": {
    "t": "Lingua del brano",
    "what": "È la lingua delle parole cantate nel brano, non la lingua dei menu del sito.",
    "when": "Scegli la lingua principale del testo. Se non si canta, seleziona «Strumentale (senza testo)».",
    "click": "Viene salvata quando premi [[Salva brano]]. aimusiclist.com la usa per le classifiche divise per lingua.",
    "care": "I brani più vecchi possono mostrare «non impostata (lingua del sito)». In questo caso si usa la lingua predefinita del sito. Se scegli «Strumentale», la casella della seconda lingua viene bloccata.",
    "like": "È un'etichetta sul disco che indica in quale lingua canta l'artista."
  },
  "help.tracks.lang2": {
    "t": "Seconda lingua (facoltativa)",
    "what": "È un'altra lingua presente nel testo, per esempio una canzone in coreano con alcune frasi in inglese.",
    "when": "Usala solo quando una parte importante del brano è cantata in un'altra lingua.",
    "click": "Viene salvata quando premi [[Salva brano]]. Seleziona «— Nessuna —» per toglierla.",
    "care": "La casella rimane bloccata finché non scegli la lingua principale, e anche quando il brano è «Strumentale». Non può essere uguale alla lingua principale.",
    "like": "È una seconda piccola nota sul disco: «anche un po' di inglese»."
  },
  "help.tracks.ai_paste": {
    "t": "Incolla il risultato dell'AI",
    "what": "È una casella in cui incolli il titolo suggerito dall'AI, compresa la parte tra ( ). Da lì vengono letti genere, atmosfera e lingua. [[Apri la guida]] mostra come fare la domanda all'AI.",
    "when": "Usala se è difficile scegliere il genere o se i nomi dei file non hanno la parte tra ( ).",
    "click": "Incollare non modifica nulla. Premi [[Applica]] accanto alla casella.",
    "care": "Compila soltanto le caselle. Devi comunque salvare con il pulsante di caricamento o con [[Salva brano]].",
    "like": "È come dare al commesso un biglietto scritto da un esperto musicale, così lui lo copia sull'etichetta dello scaffale."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Applica",
    "what": "Legge il testo incollato e compila le caselle di genere, lingua del brano e atmosfera.",
    "when": "Premi dopo aver incollato il titolo dato dall'AI.",
    "click": "Nella scheda di caricamento compila tutti i file dell'elenco non ancora caricati. Nel modulo di modifica compila solo questo brano. Un messaggio sotto indica che cosa è stato inserito. Non viene ancora salvato nulla.",
    "care": "Le parole non riconosciute vengono saltate e mostrate in giallo. Se il genere principale non compare nell'elenco, le caselle dei generi restano com'erano. Controllale prima di salvare.",
    "like": "È il commesso che trascrive davvero il consiglio dell'esperto sulle etichette."
  },
  "help.site.ext": {
    "t": "Informazioni aggiuntive",
    "what": "Sono caselle in più sul tuo sito nel suo insieme. aimusiclist.com decide quali mostrare e fa comparire le risposte accanto ai tuoi brani.",
    "when": "Compila quelle che ti riguardano. Sono tutte facoltative: puoi anche lasciarle vuote.",
    "click": "Le informazioni vengono salvate con il resto della scheda quando premi [[Salva informazioni sito]]. Svuotare una casella elimina quella risposta.",
    "care": "Questa sezione compare soltanto quando aimusiclist.com prevede campi per i siti. Se una casella richiede l'aggiornamento del programma, non puoi ancora compilarla. La risposta precedente resta conservata.",
    "like": "È come un foglio di domande in più che il grande mercato (aimusiclist.com) ti consegna per aggiungere altre etichette alla tua bancarella."
  },
  "help.tracks.ext": {
    "t": "Informazioni aggiuntive",
    "what": "Sono caselle in più sul brano, per esempio BPM o una breve nota. aimusiclist.com decide quali esistono e mostra le risposte accanto alle tue canzoni.",
    "when": "Compila quelle che conosci. Tutte le caselle sono facoltative.",
    "click": "Le risposte si salvano quando carichi il brano o premi [[Salva brano]]. Nella scheda di caricamento gli stessi valori vengono applicati a tutti i brani. Nel modulo di modifica, svuotando una casella e salvando elimini quel valore.",
    "care": "Se una riga dice che serve aggiornare il programma, potrai usarla dopo aver aggiornato il sito. Le caselle compaiono solo quando il sito riceve l'elenco da aimusiclist.com.",
    "like": "È come la piccola scritta sul retro della copertina di un disco."
  },
  "help.img.editor": {
    "t": "Finestra immagini",
    "what": "È una piccola finestra che adatta la foto alla misura giusta: immagine del brano 100×100, copertina dell'album 200×200 o banner superiore fino a 1600×400.",
    "when": "Si apre da sola quando scegli un'immagine per un brano, una copertina o il banner.",
    "click": "Scegli come adattare l'immagine, controlla il Risultato e premi [[Salva immagine]]. [[Annulla]] o il tasto Esc chiudono la finestra senza modifiche.",
    "care": "Viene caricata soltanto una copia ridotta, mai l'immagine originale. Ogni tipo ha un limite (50 KB, 100 KB o 300 KB): la foto viene alleggerita finché rientra nel limite.",
    "like": "È come un piccolo laboratorio che ritaglia la foto perché entri nella cornice prima di appenderla al muro del negozio."
  },
  "help.img.mode_crop": {
    "t": "Ritaglia (sposta la cornice)",
    "what": "Conserva solo la parte dell'immagine dentro la cornice luminosa e taglia via il resto.",
    "when": "Usalo se la foto è troppo grande o ha la forma sbagliata e vuoi tenere la parte migliore, per esempio un volto.",
    "click": "Sull'immagine compare una cornice luminosa. Trascinala o usa i tasti freccia per scegliere la parte da tenere. La barra Dimensione cornice la ingrandisce o rimpicciolisce. Il Risultato cambia mentre la sposti.",
    "care": "La parte fuori dalla cornice non viene conservata.",
    "like": "È come tagliare una foto con le forbici per mettere sulla copertina del disco solo la parte più bella."
  },
  "help.img.mode_fit": {
    "t": "Riduci l'intera immagine",
    "what": "Conserva tutta la foto e la rimpicciolisce invece di tagliarla.",
    "when": "Usalo quando non vuoi perdere nessuna parte, per esempio con un logo o una foto che contiene scritte.",
    "click": "Il Risultato mostra subito l'immagine completa. Per un quadrato (immagine del brano o copertina), i lati vuoti vengono riempiti con il colore medio della foto. Per il banner, la foto mantiene la sua forma e rientra in 1600×400.",
    "care": "Una foto molto lunga e stretta può apparire piccola in un quadrato, con grandi bordi colorati.",
    "like": "È come mettere un intero poster in una cornice con un bordo colorato, senza tagliarlo."
  },
  "help.img.frame": {
    "t": "Dimensione cornice",
    "what": "È una barra che rende più grande o più piccola la cornice luminosa del ritaglio.",
    "when": "Rimpiccioliscila per avvicinarti a una parte, come un volto. Ingrandiscila per conservare più immagine.",
    "click": "La cornice e il Risultato cambiano mentre sposti la barra. All'estrema destra, la cornice è grande quanto permette l'immagine.",
    "care": "Una cornice molto piccola su una foto piccola può produrre un risultato sfocato. Controlla il Risultato prima di salvare.",
    "like": "È come avvicinare o allontanare una lente d'ingrandimento dalla foto."
  },
  "help.img.result": {
    "t": "Risultato",
    "what": "È l'anteprima dell'immagine esattamente come verrà salvata.",
    "when": "Guardala prima di premere [[Salva immagine]].",
    "click": "Si aggiorna da sola quando sposti la cornice o cambi modalità. È solo un'anteprima: non è ancora stato salvato nulla.",
    "care": "Le immagini grandi qui vengono mostrate un po' più piccole, ma sono salvate nelle dimensioni complete. La versione salvata può sembrare leggermente più morbida perché viene alleggerita.",
    "like": "È come uno specchio che mostra la foto già dentro la sua cornice."
  },
  "help.img.save": {
    "t": "Salva immagine",
    "what": "Crea e utilizza la versione finale, più leggera, della tua immagine.",
    "when": "Premi quando il Risultato ti piace.",
    "click": "L'immagine del brano o il banner vengono salvati subito e appaiono sul sito; se il brano è pubblico, la sua immagine appare anche su aimusiclist.com. La copertina viene solo inserita nella casella dell'album e si salva quando premi [[Salva album]].",
    "care": "Se l'immagine è ancora troppo pesante o il browser non riesce a elaborarla, compare un messaggio rosso. Prova una foto più semplice, una cornice più piccola oppure Chrome, Edge o Firefox.",
    "like": "È come mettere la foto ritagliata nella cornice e appenderla al muro del negozio."
  },
  "help.img.crop": {
    "t": "Foto del profilo",
    "what": "È una finestra per adattare la foto del profilo a un cerchio. La foto è il tuo volto o logo, mostrato in forma rotonda sul sito e su aimusiclist.com.",
    "when": "Si apre automaticamente dopo che scegli una foto del profilo.",
    "click": "Il cerchio resta al centro e tu sposti la foto dietro di esso. Trascina la foto, usa la barra dello zoom, la rotellina o due dita, oppure i tasti freccia e + / −. Premi [[Applica]] per salvare, oppure [[Annulla]] / Esc per chiudere senza modifiche.",
    "care": "Viene usata solo la parte dentro il cerchio. Si carica una copia piccola da 400×400, non la foto originale.",
    "like": "È come spostare una foto dietro una finestra rotonda finché il viso si trova proprio al centro."
  },
  "help.img.crop_zoom": {
    "t": "Zoom",
    "what": "La barra (e i pulsanti − e +) rende la foto più grande o più piccola dentro il cerchio.",
    "when": "Ingrandisci quando il viso appare troppo piccolo nel cerchio. Riduci per mostrare più parti.",
    "click": "La foto cambia dimensione intorno al centro del cerchio. Tutto a sinistra riempie appena il cerchio, tutto a destra è quattro volte più grande. Cambiano anche le anteprime in basso.",
    "care": "Non puoi ridurre la foto oltre il cerchio, quindi non resta mai un bordo vuoto. Se ingrandisci troppo una foto piccola, potrebbe risultare sfocata.",
    "like": "È come avvicinarti o allontanarti dalla macchina fotografica."
  },
  "help.img.crop_rotate": {
    "t": "Ruota",
    "what": "Fa girare la foto di un quarto di giro verso destra.",
    "when": "Usalo se la foto è girata di lato o capovolta.",
    "click": "Ogni pressione la ruota di 90 gradi. Dopo quattro pressioni torni all'inizio. Dopo ogni giro la foto torna al centro, quindi spostala nuovamente se necessario.",
    "like": "È come ruotare una cornice sul muro finché la foto è dritta."
  },
  "help.img.crop_preview": {
    "t": "Anteprima",
    "what": "Sono due piccoli cerchi che mostrano come apparirà davvero la foto del profilo: uno grande e uno molto piccolo.",
    "when": "Controllali entrambi prima di premere [[Applica]]. Quello piccolo è simile alla misura usata negli elenchi.",
    "click": "Si aggiornano da soli mentre sposti, ingrandisci o ruoti la foto. Non viene ancora salvato nulla.",
    "care": "Se il viso si vede male nel cerchio piccolo, ingrandisci leggermente.",
    "like": "È come allontanarti dall'insegna del negozio per vedere se si legge dall'altra parte della strada."
  },
  "help.img.crop_apply": {
    "t": "Applica",
    "what": "Salva la parte dentro il cerchio come foto del profilo.",
    "when": "Premi quando le anteprime ti piacciono.",
    "click": "La foto viene salvata subito e appare sul sito. aimusiclist.com la riceve entro uno o due minuti. Anche il colore della parte superiore del sito viene scelto da questa foto.",
    "care": "La vecchia foto del profilo viene sostituita. Per cambiarla ancora, scegli un'altra foto.",
    "like": "È come appendere il tuo nuovo ritratto nella vetrina del negozio."
  },
  "help.top.profile_go": {
    "t": "Aggiungi foto",
    "what": "Avvia l'aggiunta della foto del profilo.",
    "when": "Premi dal suggerimento sulla foto del profilo.",
    "click": "Si apre la scheda Informazioni sul sito e il dispositivo ti chiede di scegliere una foto. Poi la ritagli e, quando premi Applica, viene salvata. I visitatori e aimusiclist.com la vedranno poco dopo.",
    "care": "Puoi cambiarla o eliminarla in seguito da Informazioni sul sito.",
    "like": "È come consegnare la foto a chi prepara l'insegna del negozio."
  },
  "help.tab.tracks": {
    "t": "Brani",
    "what": "È il posto per le tue canzoni. Le carichi, correggi i dettagli (titolo, generi, lingua, immagine, testo) e decidi quali rendere pubbliche su aimusiclist.com.",
    "when": "Vieni qui per aggiungere nuovi brani o modificare quelli vecchi.",
    "click": "Premendo la scheda cambi solo schermata. All'interno, la maggior parte delle modifiche si salva appena la fai.",
    "care": "Fino a 20 brani per caricamento, 15 MB ciascuno, durata da 30 secondi a 15 minuti. Ogni brano ha un genere principale e fino a 2 aggiuntivi. Almeno 10 devono restare pubblici (tutti se ne hai meno). Eliminare un brano è irreversibile.",
    "like": "È il magazzino in cui arrivano i dischi nuovi, li etichetti e scegli quali esporre al grande mercato."
  },
  "help.tab.albums": {
    "t": "Album",
    "what": "Qui raccogli più brani in un album con titolo, copertina e breve descrizione.",
    "when": "Vieni qui quando vuoi presentare insieme un gruppo di canzoni.",
    "click": "Premendo la scheda cambi solo schermata. Un album con 6–35 brani, tutti con audio, diventa pubblico su aimusiclist.com appena lo salvi oppure all'ora che scegli.",
    "care": "Puoi creare un album con meno di 6 brani, ma resta privato. La descrizione può avere fino a 200 caratteri. Finché l'album è pubblico, i suoi brani non possono diventare privati.",
    "like": "È come raccogliere più dischi in un cofanetto con una copertina tutta sua."
  },
  "help.tab.skins": {
    "t": "Temi",
    "what": "Qui scegli l'aspetto del sito: colori, caratteri e disposizione. Puoi usare un tema incluso, installarne uno dalla galleria o caricarne uno tuo.",
    "when": "Vieni qui quando vuoi cambiare aspetto al sito o un puntino indica che è uscita una nuova versione di un tema.",
    "click": "Premendo la scheda cambi solo schermata. Un nuovo tema appare ai visitatori entro circa 30 secondi e puoi tornare subito a quello precedente.",
    "care": "I temi Chiaro e Scuro sono sempre disponibili, più fino a 20 altri temi. Un tema caricato è un file di massimo 100 KB. Cambiare tema non modifica brani o impostazioni.",
    "like": "È come ridipingere il negozio e cambiare gli scaffali: i dischi rimangono gli stessi."
  },
  "help.tab.site": {
    "t": "Informazioni sul sito",
    "what": "Qui trovi tutto ciò che riguarda il sito: nome, nome dell'artista, lingua principale, descrizione, link social, immagini, pulsanti per i visitatori, pubblicità, elenco artisti, accesso e chiave di utilizzo.",
    "when": "Vieni qui subito dopo l'installazione e ogni volta che vuoi cambiare il modo in cui il sito ti presenta.",
    "click": "Premendo la scheda cambi solo schermata. Alcune schede hanno un pulsante per salvare; gli interruttori salvano appena li premi.",
    "care": "Non puoi usare il nome di un cantante o gruppo famoso. Nome del sito e dell'artista appaiono anche su aimusiclist.com. Cambiare password ti disconnette da tutti i dispositivi.",
    "like": "È come tenere in un unico cassetto l'insegna, il cartellino col nome e i documenti del negozio."
  },
  "help.tab.guestbook": {
    "t": "Libro degli ospiti",
    "what": "Qui i visitatori lasciano brevi messaggi per te, sul sito intero o su un brano. Puoi aprire o chiudere il libro ed eliminare messaggi.",
    "when": "Vieni qui per leggere cosa scrivono gli ascoltatori o togliere un messaggio sgradevole.",
    "click": "Premendo la scheda cambi schermata e carichi i messaggi, 20 per pagina. Apertura, chiusura ed eliminazione si salvano subito.",
    "care": "I nomi arrivano a 20 caratteri, i messaggi a 500, niente link, massimo 50 messaggi al giorno per persona. I messaggi restano finché non li elimini; una volta cancellati non tornano. Chiudere il libro non li cancella.",
    "like": "È il quaderno all'ingresso del negozio dove i clienti lasciano due parole."
  },
  "help.tab.domain": {
    "t": "Il mio dominio",
    "what": "Qui colleghi il tuo indirizzo web (per esempio mymusic.com) al sito, al posto dell'indirizzo lungo ricevuto durante l'installazione.",
    "when": "Vieni qui dopo aver acquistato un dominio che vuoi far usare ai visitatori.",
    "click": "Premendo la scheda cambi solo schermata. La guida mostra i passaggi (circa 10 minuti). Quando colleghi il dominio, l'indirizzo viene verificato e poi comunicato ad aimusiclist.com.",
    "care": "Chi visita il vecchio indirizzo viene portato al nuovo e i brani già nelle playlist continuano a funzionare. Nei siti meshmelo il dominio si collega invece dal tuo account meshmelo.",
    "like": "È come dare al negozio un indirizzo breve e facile da ricordare."
  },
  "help.tab.stats": {
    "t": "Statistiche",
    "what": "Numeri sul tuo sito: visite e riproduzioni giornaliere, brani popolari, album, paesi, provenienza dei visitatori, dispositivi e lingue. Qui trovi anche i dati di aimusiclist.com.",
    "when": "Vieni qui per vedere chi ascolta cosa e se un link condiviso ha portato persone al sito.",
    "click": "Aprendo la scheda carichi i numeri, che cambiano una volta al giorno. [[Aggiorna ora]] aggiorna i dati di oggi subito, al massimo una volta al minuto.",
    "care": "Le tue visite mentre sei collegato non vengono contate. I numeri di aimusiclist.com cambiano una volta al giorno, al mattino. In alcune configurazioni non è possibile contare visite o ascolti: la scheda ti spiega perché e cosa attivare.",
    "like": "È il registro delle visite e delle vendite del negozio, con i conti già fatti."
  },
  "help.tab.analysis": {
    "t": "Analisi",
    "what": "Mostra più a fondo come vanno i brani su aimusiclist.com: cambi di posizione, brani in crescita, partenza dei nuovi brani, distanza dalla Top 100, Mi piace, aggiunte alle playlist e posizione nel genere. Anche le novità di aimusiclist sono qui.",
    "when": "Vieni qui per capire quali brani stanno crescendo e cosa condividere dopo.",
    "click": "Aprendo la scheda vedi i dati salvati. Sono raccolti una volta al giorno, quindi riaprirla spesso non cambia nulla. Un puntino indica nuove notizie di aimusiclist e scompare quando apri la scheda.",
    "care": "Un sito appena creato ha pochi dati. I grafici si riempiono con il passare dei giorni.",
    "like": "È come ricevere un rapporto settimanale dal grande mercato su come vendono i tuoi dischi in vetrina."
  },
  "help.top.mm_two_screens": {
    "t": "Hai due posti per gestire il sito",
    "what": "Una piccola scheda spiega le due pagine di gestione: l'amministrazione di questo sito e il tuo account meshmelo. Mostra l'indirizzo di entrambe e cosa puoi fare.",
    "when": "Aprila quando non trovi un'impostazione. Si apre e si chiude con il pulsante ? in alto.",
    "click": "Leggerla non modifica nulla. Il pulsante all'interno apre l'account meshmelo in una nuova scheda.",
    "care": "Questa scheda è presente solo nei siti meshmelo.",
    "like": "È come un cartello nel corridoio: «Banco del negozio da questa parte, ufficio centrale dall'altra»."
  },
  "help.top.php_update": {
    "t": "Aggiorna ora",
    "what": "Nella versione PHP aggiorna automaticamente il programma del sito alla versione più recente.",
    "when": "Premi quando compare l'avviso di nuova versione e hai un minuto.",
    "click": "Ti viene chiesta conferma. L'operazione dura circa un minuto, poi la pagina si ricarica. Se qualcosa va storto, torna da sola alla versione precedente.",
    "care": "Brani, impostazioni e pagine vengono conservati. Non chiudere la pagina mentre compare l'aggiornamento in corso. I siti meshmelo non hanno questo pulsante: li aggiorna meshmelo.",
    "like": "È come una squadra che cambia gli scaffali durante la notte. I dischi tornano esattamente al loro posto."
  },
  "help.top.usage_r2_storage": {
    "t": "Spazio R2 (10 GB gratuiti)",
    "what": "Indica quanto spazio occupano i file in R2, l'archivio di Cloudflare. Quasi tutto è occupato dai brani.",
    "when": "Controllalo prima di caricare molte canzoni.",
    "click": "È solo un numero, aggiornato ogni 10 minuti.",
    "care": "Meno è meglio. Oltre 10 GB, Cloudflare addebita il costo al tuo account. Se lo spazio sta finendo, elimina i brani inutili o usa file più piccoli (MP3 invece di WAV). Conta anche lo spazio usato dagli altri archivi dello stesso account Cloudflare.",
    "like": "È il livello di riempimento del tuo magazzino. Hai circa 10 GB di scaffali gratuiti."
  },
  "help.top.usage_class_a": {
    "t": "Scritture R2 questo mese (1 milione gratis)",
    "what": "Indica quante volte qualcosa è stato salvato in R2 questo mese: caricamenti, modifiche, cambi di impostazioni e altre operazioni.",
    "when": "Controllalo nei mesi con molti caricamenti o modifiche.",
    "click": "È solo un numero, che riparte da zero ogni mese.",
    "care": "Meno è meglio. Una modifica richiede poche scritture e 20 brani caricati insieme ne richiedono circa 60: un milione è tantissimo. Eliminare è gratuito. Sopra la quota gratuita, Cloudflare addebita i costi al tuo account.",
    "like": "Conta quante volte si apre la porta del magazzino per mettere dentro qualcosa durante il mese."
  },
  "help.top.usage_class_b": {
    "t": "Letture R2 questo mese (10 milioni gratis)",
    "what": "Indica quante volte questo mese è stato letto qualcosa da R2. La maggior parte delle letture arriva da chi riproduce i brani o apre il sito.",
    "when": "Controllalo quando le tue canzoni ricevono molti ascolti.",
    "click": "È solo un numero, che riparte da zero ogni mese.",
    "care": "Un numero in crescita vuol dire che le persone ascoltano, e questo è bello. Però oltre 10 milioni Cloudflare addebita costi al tuo account. Se cresce molto in fretta, controlla nella scheda Statistiche da dove arrivano gli ascolti.",
    "like": "Conta quante volte si apre la porta del magazzino per prendere un disco e ascoltarlo."
  },
  "help.top.usage_workers": {
    "t": "Richieste Workers oggi (100.000 gratis)",
    "what": "Indica quante volte il sito ha risposto oggi a un visitatore. Contano l'apertura del sito e ogni parte del brano riprodotto.",
    "when": "Controllalo nei giorni affollati, per esempio dopo aver condiviso un link.",
    "click": "È solo un numero, che riparte da zero ogni giorno alle 00:00 UTC (09:00 in Corea).",
    "care": "Sopra 100.000 al giorno, il sito si ferma fino all'azzeramento. Non ci sono addebiti. Conta tutto l'account Cloudflare. Nella versione PHP comprende il Worker audio e i brani smettono di suonare oltre il limite. I siti meshmelo non mostrano questa barra.",
    "like": "È il numero di clienti che il commesso può servire in un giorno. Raggiunto il limite, il negozio chiude fino a domani."
  },
  "help.top.usage_disk_space": {
    "t": "Spazio occupato dai brani e dalle pagine del sito",
    "what": "Mostra quanto spazio di hosting usano i file di questo sito. La maggior parte è occupata dai brani.",
    "when": "Controllalo prima di un caricamento grande.",
    "click": "È solo un numero (o una barra, se è impostato il limite del tuo piano).",
    "care": "Meno è meglio. Se ti avvicini al limite del piano, elimina brani inutili o carica MP3 più piccoli. Gli altri siti sullo stesso hosting non vengono contati qui.",
    "like": "È lo spazio sul pavimento occupato dai dischi nel negozio che hai affittato."
  },
  "help.top.usage_files": {
    "t": "File (inode)",
    "what": "Indica quanti file conserva questo sito sull'hosting. Le aziende di hosting spesso limitano il numero di file, non solo lo spazio.",
    "when": "Controllalo se hai molti brani o ricevi un avviso sui file dall'hosting.",
    "click": "È solo un numero (o una barra, se hai impostato il limite del piano).",
    "care": "Meno è meglio. Ogni brano aggiunge alcuni file (audio, immagine, testo), quindi eliminare brani inutili fa scendere il numero.",
    "like": "È il numero di scatole nel negozio, indipendentemente da quanto è piccola ciascuna."
  },
  "help.top.usage_tracks": {
    "t": "Brani",
    "what": "Mostra quanti brani ci sono su questo sito.",
    "when": "Per dare una rapida occhiata. Aiuta anche a capire quanto spazio occupa mediamente un brano.",
    "click": "È solo un numero, che cambia quando carichi o elimini brani.",
    "care": "Qui non c'è una barra di limite.",
    "like": "È il numero di dischi nel tuo negozio."
  },
  "help.top.usage_disk": {
    "t": "Utilizzo hosting (questo sito)",
    "what": "Nella versione PHP, quando conservi i brani sul tuo hosting, mostra quanto usa il sito: spazio, numero di file e brani.",
    "when": "Controllalo prima di caricare molte canzoni, perché i piani hosting hanno dei limiti.",
    "click": "Questo è un titolo. I numeri vengono riletti ogni 10 minuti. [[Aggiorna]] li legge subito.",
    "care": "I limiti reali del tuo piano sono in cPanel → Statistics. Le barre con % compaiono solo se quei limiti sono stati inseriti nelle impostazioni del sito durante l'installazione; altrimenti vedi numeri semplici.",
    "like": "È il contatore dello spazio di un negozio in affitto. Il contratto del proprietario stabilisce quanto puoi espanderti."
  },
  "help.top.usage": {
    "t": "Utilizzo gratuito Cloudflare",
    "what": "Sono barre che mostrano quanta quota gratuita Cloudflare ha usato il tuo account: spazio, scritture e letture del mese e richieste di oggi.",
    "when": "Dagli un'occhiata ogni tanto, soprattutto quando arrivano molti visitatori.",
    "click": "Questo è un titolo. I numeri vengono riletti ogni 10 minuti. [[Aggiorna]] li legge subito.",
    "care": "Meno è meglio. La barra diventa arancione al 70% e rossa al 90%. Superare la quota gratuita R2 costa denaro. Superare il limite Workers ferma il sito per il resto del giorno senza costi. I dati riguardano l'intero account Cloudflare, non soltanto questo sito.",
    "like": "È il contatore elettrico del negozio: controllalo prima che arrivi la bolletta."
  },
  "help.top.usage_refresh": {
    "t": "Aggiorna",
    "what": "Legge subito i dati di utilizzo da Cloudflare senza aspettare il prossimo aggiornamento tra 10 minuti.",
    "when": "Premi dopo un caricamento grande o dopo aver inserito una nuova chiave di utilizzo.",
    "click": "Le barre si aggiornano dopo un attimo e cambia l'ora accanto al titolo.",
    "care": "I dati di Cloudflare possono arrivare con un po' di ritardo, quindi una lettura nuova potrebbe mostrare ancora gli stessi numeri.",
    "like": "È come andare a leggere di persona il contatore invece di aspettare chi viene a controllarlo."
  },
  "help.top.usage_connect": {
    "t": "Collega",
    "what": "Compare quando non hai ancora aggiunto una chiave di utilizzo. La chiave permette di vedere qui i limiti gratuiti Cloudflare.",
    "when": "Premi per aggiungere la chiave. Servono circa 2 minuti.",
    "click": "Si apre la scheda Informazioni sul sito, alla sezione **Visualizza utilizzo**, pronta per incollare la chiave.",
    "care": "Anche senza chiave il sito funziona, ma non puoi sapere se sei vicino a un limite. La chiave può solo leggere numeri.",
    "like": "È come installare un contatore elettrico: la luce funziona anche senza, ma non sai quanto consumi."
  },
  "help.top.usage_retoken": {
    "t": "Inserisci di nuovo la chiave",
    "what": "Compare quando hai salvato una chiave di utilizzo ma non è stato possibile leggere i dati. Il motivo è scritto sopra.",
    "when": "Premi se hai eliminato la chiave su Cloudflare, se è scaduta o se le manca un'autorizzazione.",
    "click": "Si apre la scheda Informazioni sul sito, alla sezione **Visualizza utilizzo**, dove puoi incollare una nuova chiave.",
    "care": "Controlla che la chiave appartenga allo stesso account Cloudflare del sito e che abbia entrambe le autorizzazioni (Account Analytics · Read e Account Settings · Read). Le barre possono mostrare gli ultimi dati validi finché non risolvi.",
    "like": "È come sostituire la chiave di un contatore che non gira più."
  },
  "help.top.usage_uploaded": {
    "t": "Audio caricato da questa pagina",
    "what": "Mostra la dimensione totale dei file audio caricati qui. Conta solo i brani di questo sito.",
    "when": "Confrontala con la barra dello spazio R2. Se la barra è molto più grande, nell'account Cloudflare c'è qualcos'altro che occupa spazio.",
    "click": "È solo un numero, che cambia quando carichi o elimini brani.",
    "care": "Le righe sopra spiegano che cosa succede quando superi le quote gratuite. Nella versione PHP indicano anche dove trovare i limiti del piano hosting.",
    "like": "È la parte del magazzino riempita dai tuoi dischi, senza contare le scatole dei vicini."
  },
  "help.top.mm_upgrade": {
    "t": "Più spazio (aggiorna piano)",
    "what": "È un pulsante per chiedere a meshmelo una quota giornaliera più grande. Compare nell'avviso in alto quando hai usato almeno l'80% della quota di oggi.",
    "when": "Premi se il tuo sito esaurisce spesso l'utilizzo gratuito giornaliero.",
    "click": "Si apre la pagina di aggiornamento meshmelo o un'email da inviare a meshmelo. Nulla cambia finché meshmelo non attiva l'opzione.",
    "care": "Quasi tutti i siti non ne avranno mai bisogno. Una giornata molto affollata torna alla normalità dopo l'azzeramento.",
    "like": "È come chiedere al proprietario del palazzo più corrente elettrica quando il negozio è pieno."
  },
  "help.top.mm_use": {
    "t": "Utilizzo di oggi",
    "what": "Nei siti meshmelo è una percentuale che mostra quanta quota gratuita hai usato oggi. Sotto trovi gli ultimi 7 giorni.",
    "when": "Controllala nelle giornate affollate, per esempio dopo aver condiviso un link.",
    "click": "È solo un numero. Torna allo 0% ogni giorno all'ora indicata sotto la barra.",
    "care": "Più basso è meglio, ma un valore alto può voler dire tanti visitatori. Dall'80% compare un avviso in alto. Al 100% i visitatori vedono una breve pagina «torniamo presto» fino all'azzeramento. Questa pagina di amministrazione e le riproduzioni su aimusiclist.com continuano a funzionare.",
    "like": "È il contatore elettrico di oggi del tuo negozio. Quando è pieno, l'ingresso chiude fino a domani."
  },
  "help.top.mm_use_notify": {
    "t": "Inviami un'email al giorno se supera l'80%",
    "what": "È una casella per ricevere un'email di avviso quando l'utilizzo giornaliero supera l'80%.",
    "when": "Attivala se non apri questa pagina ogni giorno.",
    "click": "La scelta viene salvata appena selezioni o deselezioni la casella. Ricevi al massimo un'email al giorno.",
    "care": "Serve solo ad avvisarti, non blocca nulla. La vedi soltanto se meshmelo ha attivato le email di avviso.",
    "like": "È come chiedere a chi legge il contatore di mandarti un messaggio quando è quasi pieno."
  },
  "help.top.aml_retry": {
    "t": "Riprova ora",
    "what": "Prova subito a collegarsi ad aimusiclist.com, senza aspettare il prossimo tentativo automatico.",
    "when": "Premi quando la riga dice «non collegato» o dopo aver risolto il problema indicato.",
    "click": "La riga diventa «Collegamento in corso…» e poco dopo mostra il risultato. Se riesce, i tuoi brani pubblici vengono inviati ad aimusiclist.com.",
    "care": "Se il problema dipende da aimusiclist.com, premere molte volte non serve. Aspetta un po' e riprova.",
    "like": "È come chiamare di persona il grande mercato invece di aspettare che ti richiami."
  },
  "help.tracks.list": {
    "t": "I miei brani",
    "what": "È l'elenco di tutte le canzoni del tuo sito. Il numero tra parentesi indica quanti brani hai.",
    "when": "Usalo per trovare un brano, renderlo pubblico o privato su aimusiclist.com, ascoltarlo, modificarlo o eliminarlo.",
    "click": "Tutto ciò che vedi è l'elenco reale già salvato. Gli interruttori e i pulsanti di ogni riga funzionano subito.",
    "care": "I brani senza file audio mostrano **Audio mancante**. Finché non aggiungi il file, non vengono conteggiati.",
    "like": "È l'inventario del negozio: ogni disco, con una nota che dice se è esposto anche al grande mercato (aimusiclist.com)."
  },
  "help.tracks.search": {
    "t": "Cerca titoli dei brani",
    "what": "È una casella che cerca le canzoni per titolo. Nell'elenco restano solo i titoli che contengono le parole scritte.",
    "when": "Usala se hai molte canzoni e vuoi trovarne una in fretta o scegliere un gruppo da modificare insieme.",
    "click": "L'elenco cambia mentre scrivi. Nulla viene salvato o modificato. Svuota la casella per rivedere tutti i brani.",
    "care": "Cerca solo nei titoli, non nei generi o nei nomi degli artisti. Maiuscole e minuscole non contano. [[Seleziona tutti quelli mostrati]] seleziona solo i brani rimasti dopo la ricerca.",
    "like": "È come cercare tra gli scaffali un disco leggendo il titolo sul dorso."
  },
  "help.tracks.nolang": {
    "t": "Solo brani senza lingua impostata",
    "what": "Questa casella mostra soltanto i brani per cui non hai ancora scelto la lingua del testo cantato.",
    "when": "Usala per trovare i brani più vecchi che devono ancora avere una lingua e correggerli tutti insieme.",
    "click": "L'elenco cambia subito. Non viene salvato nulla. Deseleziona la casella per rivedere tutti i brani. Funziona insieme alla ricerca per titolo.",
    "care": "Finché non scegli la lingua, aimusiclist.com usa quella principale del sito. Metodo rapido: seleziona questa casella, poi quella in alto per scegliere tutti i brani mostrati e usa **Lingua dei brani selezionati** con [[Applica]].",
    "like": "È come estrarre dallo scaffale solo i dischi senza etichetta della lingua cantata."
  },
  "help.tracks.bulk": {
    "t": "Modifica più brani insieme",
    "what": "È un riquadro per modificare più canzoni contemporaneamente. Senza selezione mostra un suggerimento; quando selezioni brani mostra quanti sono e apre gli strumenti.",
    "when": "Usalo quando devi fare la stessa modifica a più canzoni invece di aprirle una per una.",
    "click": "Selezionare i brani non salva nulla. Ogni strumento salva soltanto dopo che premi il suo [[Applica]] o un altro pulsante. Poi le selezioni si azzerano.",
    "care": "Seleziona i brani con le caselle a sinistra delle righe o con quella in alto per tutti i brani mostrati. Gli strumenti includono atmosfera (o informazioni aggiuntive), lingua, strumento AI e conteggi delle riproduzioni per i visitatori (se il sito li registra).",
    "like": "È come mettere un'etichetta su tanti dischi insieme invece di andare scaffale per scaffale."
  },
  "help.tracks.bulk_lang": {
    "t": "Lingua dei brani selezionati",
    "what": "Imposta in una volta la lingua del testo cantato per tutti i brani selezionati. Puoi aggiungere anche una seconda lingua.",
    "when": "Usalo per molte canzoni cantate nella stessa lingua o per correggere brani senza lingua.",
    "click": "Scegliere le lingue non salva nulla. Premi [[Applica]] qui sotto per salvare.",
    "care": "È la lingua del testo, non quella del sito. Se non c'è testo, scegli **Strumentale (senza testo)**. Non puoi abbinarla a un'altra lingua. aimusiclist.com la usa per le classifiche per lingua.",
    "like": "È come scrivere «cantato in coreano» sulle etichette di molti dischi in una volta."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Applica",
    "what": "Salva la lingua scelta per ogni brano selezionato.",
    "when": "Premi dopo aver selezionato i brani e scelto la lingua.",
    "click": "Il salvataggio è immediato. Un messaggio indica quanti brani sono cambiati e le selezioni si azzerano. Poco dopo, aimusiclist.com mostra la nuova lingua.",
    "care": "La lingua precedente viene sostituita. Se non hai selezionato brani, ricevi soltanto un promemoria per selezionarli.",
    "like": "È il momento in cui le nuove etichette della lingua vengono davvero applicate ai dischi."
  },
  "help.tracks.select": {
    "t": "Seleziona brani",
    "what": "La casella in alto seleziona tutte le canzoni visibili. Le piccole caselle nelle singole righe selezionano un brano alla volta.",
    "when": "Usala prima di modificare più brani insieme nel riquadro sopra l'elenco.",
    "click": "Selezionare mette solo un segno sui brani, senza salvare nulla. Il riquadro sopra mostra quanti sono e apre gli strumenti.",
    "care": "La casella in alto seleziona soltanto i brani visibili. Se hai cercato o usato **Solo brani senza lingua impostata**, i brani nascosti non vengono selezionati.",
    "like": "È come indicare con un dito i dischi da modificare prima di prendere le etichette."
  },
  "help.tracks.pub": {
    "t": "Pubblico su aimusiclist",
    "what": "L'interruttore di ogni riga decide se il brano appare anche su aimusiclist.com. Sul tuo sito la canzone rimane sempre, sia con l'interruttore acceso che spento.",
    "when": "Attivalo per i brani che vuoi far ascoltare a più persone. Disattivalo per conservarli solo sul tuo sito.",
    "click": "Si salva appena lo premi. Quando lo attivi, il brano appare su aimusiclist.com entro 1–2 minuti. Quando lo disattivi, viene rimosso da lì.",
    "care": "Se hai almeno 10 brani, almeno 10 devono restare pubblici e non puoi scendere sotto quel numero. Se ne hai meno di 10, devono essere tutti pubblici (la riga sotto il titolo indica la regola). Un interruttore sbiadito significa che il brano è in un album pubblico o programmato: rendi prima privato l'album.",
    "like": "Fra i dischi del tuo negozio, scegli quali esporre anche sugli scaffali del grande mercato (aimusiclist.com)."
  },
  "help.tracks.col_title": {
    "t": "Titolo",
    "what": "Mostra immagine, titolo e nome dell'artista, oltre alla lingua e alle piccole etichette del brano.",
    "when": "Guardalo per controllare rapidamente i dettagli di una canzone.",
    "click": "Mostra soltanto informazioni. Per modificarle premi [[Modifica]] in quella riga.",
    "care": "Le etichette significano: **SRT** = ha un testo sincronizzato, **✦ nome** = lo strumento AI usato, **Audio mancante** = manca il file audio, **In album pubblico** = fa parte di un album pubblico. Sul telefono compare qui anche il numero di riproduzioni.",
    "like": "È come il fronte della copertina di un disco: immagine, titolo e nome dell'artista."
  },
  "help.tracks.col_genres": {
    "t": "Generi",
    "what": "Mostra fino a tre generi del brano. Il primo, evidenziato, è il principale; gli altri sono aggiuntivi.",
    "when": "Guardalo per verificare che ogni canzone sia nel genere giusto.",
    "click": "Mostra soltanto informazioni. Per cambiare i generi premi [[Modifica]] nella riga.",
    "care": "Il genere principale decide in quale menu di aimusiclist.com appare il brano. Gli altri vengono mostrati lì accanto al titolo. Questa colonna è nascosta sul telefono.",
    "like": "È come l'etichetta dello scaffale che indica a chi compra in quale settore del grande mercato si trova il disco."
  },
  "help.tracks.col_length": {
    "t": "Durata",
    "what": "Indica la durata della canzone in minuti e secondi (per esempio 3:25).",
    "when": "Controllala per verificare di aver caricato il file giusto, per esempio quando una canzone sembra troppo breve.",
    "click": "Mostra solo informazioni ricavate dall'audio. Per modificarla, carica un altro file da [[Modifica]].",
    "care": "Il brano deve durare tra 30 secondi e 15 minuti. Questa colonna è nascosta sul telefono.",
    "like": "È come la durata di riproduzione stampata sul retro della copertina."
  },
  "help.tracks.col_plays": {
    "t": "Riproduzioni",
    "what": "Mostra quante volte ogni brano è stato ascoltato sul tuo sito, in totale. Passa il mouse sul numero per vedere gli ultimi 7 giorni e oggi.",
    "when": "Usalo per capire quali brani sono più ascoltati. Più alto è meglio. Aiuta a scegliere quali rendere pubblici o inserire in un album.",
    "click": "Mostra soltanto numeri. Cambiano una volta al giorno o subito quando premi [[Aggiorna ora]] nella scheda Statistiche.",
    "care": "Non include gli ascolti su aimusiclist.com. Compare solo se il tuo sito registra le riproduzioni. Se sembra troppo basso, attendi l'aggiornamento giornaliero o premi [[Aggiorna ora]]. **Nascosto ai visitatori** sotto il numero indica che i visitatori non lo vedono.",
    "like": "È come un contatore per ogni disco: dice quante volte è stato suonato nel tuo negozio."
  },
  "help.tracks.row_buttons": {
    "t": "Pulsanti del brano",
    "what": "Sono i pulsanti alla fine di ogni riga: [[Anteprima]], [[Modifica]] ed [[Elimina]].",
    "when": "Usali per ascoltare una canzone, modificarne i dettagli o rimuoverla.",
    "click": "[[Anteprima]] riproduce il brano qui (premi [[Ferma]] per fermarlo). [[Modifica]] apre il modulo della canzone in alto. [[Elimina]] chiede conferma e poi rimuove subito il brano e il file audio.",
    "care": "L'eliminazione è irreversibile. Il brano sparisce anche da aimusiclist.com. [[Anteprima]] compare soltanto se esiste un file audio. Non puoi eliminare un brano da un album pubblico se l'album scenderebbe sotto 6 canzoni.",
    "like": "Sono gli strumenti al bancone per un disco: ascoltarlo, correggere l'etichetta o toglierlo definitivamente dal negozio."
  },
  "help.tracks.bulk_plays": {
    "t": "Conteggi delle riproduzioni per i visitatori",
    "what": "Decide se i visitatori possono vedere quante volte sono stati ascoltati i brani selezionati.",
    "when": "Usalo per nascondere il numero su alcune canzoni (per esempio appena caricate) o mostrarlo di nuovo.",
    "click": "Premi [[Mostra]] o [[Nascondi]] per salvare subito la scelta su tutti i brani selezionati.",
    "care": "I visitatori vedono i conteggi soltanto se attivi **Mostra i conteggi delle riproduzioni ai visitatori** in Informazioni sul sito. Il riquadro compare solo se il sito registra gli ascolti. Tu puoi sempre vedere i numeri qui.",
    "like": "È come scegliere quali dischi del negozio avranno l'adesivo «venduto 120 volte»."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Mostra",
    "what": "Permette ai visitatori di vedere il conteggio delle riproduzioni dei brani selezionati.",
    "when": "Premi per i brani di cui avevi nascosto il numero e vuoi mostrarlo ancora.",
    "click": "La modifica viene salvata subito su tutti i brani selezionati e le spunte si azzerano. Puoi premere [[Nascondi]] in qualunque momento per annullarla.",
    "care": "I visitatori non vedono nulla finché **Mostra i conteggi delle riproduzioni ai visitatori** in Informazioni sul sito è disattivato.",
    "like": "È come rimettere l'adesivo «riprodotto tante volte» sui dischi."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Nascondi",
    "what": "Nasconde ai visitatori il conteggio delle riproduzioni dei brani selezionati.",
    "when": "Premi per le canzoni di cui preferisci non mostrare ancora il numero, per esempio quelle appena caricate.",
    "click": "La modifica viene salvata subito per tutti i brani selezionati e le spunte si azzerano. Se l'interruttore in Informazioni sul sito è attivo, sotto questi numeri compare **Nascosto ai visitatori**. Puoi premere [[Mostra]] per annullare.",
    "care": "Viene nascosto soltanto il numero. I brani continuano a suonare e le riproduzioni vengono contate.",
    "like": "È come togliere l'adesivo «riprodotto tante volte» da alcuni dischi, lasciandoli sugli scaffali."
  },
  "help.tracks.plays_show": {
    "t": "Mostra ai visitatori le riproduzioni di questo brano",
    "what": "Decide se i visitatori vedono quante volte questa canzone è stata ascoltata sul tuo sito, per esempio «1.234 riproduzioni».",
    "when": "Deselezionalo se preferisci tenere privato il numero di un brano.",
    "click": "La scelta viene salvata quando premi [[Salva brano]]. Il numero visto dai visitatori si aggiorna una volta al giorno.",
    "care": "I visitatori lo vedono solo se «Mostra i conteggi delle riproduzioni ai visitatori» è attivo in Informazioni sul sito. Quando visiti il sito da collegato, tu vedi tutti i numeri.",
    "like": "È come decidere se appendere un piccolo conteggio delle «vendite» a quel disco nel negozio."
  },
  "help.site.plays": {
    "t": "Conteggi delle riproduzioni",
    "what": "Impostazioni del numero che mostra quante volte ogni brano è stato ascoltato sul tuo sito. Non include le riproduzioni su aimusiclist.com.",
    "when": "Vieni qui per decidere se i visitatori possono vedere quei numeri.",
    "click": "Questo titolo spiega solo il riquadro. Se dice che i conteggi compariranno quando il sito inizierà a registrarli, le statistiche non sono ancora attive: la scheda Statistiche spiega come attivarle.",
    "care": "Questi numeri riguardano solo il tuo sito. Non vengono inviati ad aimusiclist.com e non ne modificano le classifiche.",
    "like": "È il piccolo contatore sul giradischi del negozio: aumenta ogni volta che qualcuno ascolta un disco."
  },
  "help.site.plays_switch": {
    "t": "Mostra i conteggi delle riproduzioni ai visitatori",
    "what": "Se attivo, ogni canzone del tuo sito mostra un numero come «1.234 riproduzioni». All'inizio è disattivato.",
    "when": "Attivalo se i numeri sono utili, per esempio per mostrare i brani amati dal pubblico. Lascialo spento se preferisci non mostrarli.",
    "click": "Si salva appena premi. I numeri cambiano una volta al giorno e subito quando premi [[Aggiorna ora]] in Statistiche. Un numero più alto significa più ascolti. Per nascondere il numero di singoli brani usa l'elenco o la modifica del brano.",
    "care": "Quando sei collegato, sul sito vedi i numeri di tutte le canzoni, anche quelli nascosti. Li vedi solo tu, non i visitatori.",
    "like": "È come mettere il contatore del giradischi dove i clienti possono vederlo."
  },
  "help.site.likes": {
    "t": "Mi piace",
    "what": "Sono le impostazioni del pulsante ♥ sulle canzoni. I visitatori lo toccano per dire che un brano piace.",
    "when": "Vieni qui per mostrare o nascondere quel pulsante su tutto il sito.",
    "click": "Questo titolo spiega solo il riquadro. L'interruttore sotto fa la modifica. Se il riquadro dice di attivare le statistiche, i Mi piace non possono ancora essere contati: consulta Statistiche.",
    "care": "I Mi piace vengono contati solo sul tuo sito. Non sono inviati ad aimusiclist.com e non ne modificano le classifiche.",
    "like": "È il pannello di adesivi a cuore nel negozio: i clienti mettono un cuore sui dischi che amano."
  },
  "help.site.likes_switch": {
    "t": "Mostra il pulsante Mi piace",
    "what": "Mostra o nasconde il pulsante ♥ su tutti i brani del sito. All'inizio è attivo.",
    "when": "Tienilo attivo per scoprire quali canzoni piacciono ai visitatori. Spegnilo se non vuoi i cuori sul sito.",
    "click": "Si salva appena premi. I visitatori toccano ♥ senza accedere e possono toccarlo di nuovo per ritirarlo. I numeri cambiano una volta al giorno. Un numero alto è positivo: più persone amano la canzone.",
    "care": "Il pulsante compare solo quando le statistiche sono attive. Spegnere l'interruttore nasconde il pulsante ma conserva i cuori già ricevuti. Riattivalo per rivederli.",
    "like": "È come appendere o togliere il pannello degli adesivi a cuore nel negozio."
  },
  "help.site.add": {
    "t": "Aggiungi ad aimusiclist",
    "what": "Sono le impostazioni del pulsante «+ aimusiclist». Permette ai visitatori di aggiungere un tuo brano alla loro playlist su aimusiclist.com.",
    "when": "Vieni qui per mostrare o nascondere il pulsante sul tuo sito.",
    "click": "Questo titolo spiega soltanto il riquadro. L'interruttore sotto fa la modifica. Se il riquadro ti chiede prima di collegare il sito, significa che non è ancora collegato ad aimusiclist e il pulsante non può comparire.",
    "like": "È come un'etichetta «porta questo al grande mercato» sui dischi: il cliente può metterli nel proprio carrello su aimusiclist.com."
  },
  "help.site.add_switch": {
    "t": "Mostra il pulsante «+ aimusiclist»",
    "what": "Mostra o nasconde il pulsante «+ aimusiclist» accanto ai brani e nel lettore. All'inizio è attivo.",
    "when": "Tienilo attivo perché gli ascoltatori possano salvare i tuoi brani nelle loro playlist aimusiclist e ritrovarli. Spegnilo se non vuoi il pulsante.",
    "click": "La scelta viene salvata subito. Quando un visitatore preme il pulsante, si apre una piccola finestra aimusiclist (una nuova scheda sul telefono) e può scegliere una playlist senza accedere.",
    "care": "Il pulsante appare solo sui brani pubblici su aimusiclist e dopo che il sito è stato collegato. Questo interruttore non rende pubblico o privato alcun brano.",
    "like": "È come mettere un piccolo pulsante «aggiungi al carrello» sui dischi venduti anche al grande mercato."
  },
  "help.tracks.bulk_mood": {
    "t": "Cambia l'atmosfera dei brani selezionati",
    "what": "Imposta insieme l'atmosfera (per esempio Calm o Energetic) di tutti i brani selezionati. Se scegli un altro elemento in **Che cosa vuoi cambiare?**, imposta invece quell'informazione aggiuntiva.",
    "when": "Usalo dopo aver caricato molte canzoni o quando vuoi ordinarle per sensazione.",
    "click": "Non succede nulla finché non premi [[Applica]]. Poi tutti i brani selezionati ricevono lo stesso valore, che viene salvato e appare poco dopo sul sito e su aimusiclist.com.",
    "care": "Il vecchio valore viene sostituito. Questo riquadro compare solo se aimusiclist.com offre informazioni aggiuntive selezionabili da un elenco.",
    "like": "È come applicare la stessa etichetta colorata, per esempio «calma», a molti dischi perché i clienti li trovino per atmosfera."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Che cosa vuoi cambiare?",
    "what": "Sceglie quale informazione aggiuntiva impostare per i brani selezionati. All'inizio è scelta l'atmosfera.",
    "when": "Cambiala quando vuoi impostare insieme qualcosa di diverso dall'atmosfera.",
    "click": "La scelta cambia soltanto le opzioni qui sotto. Non viene salvato nulla finché non premi [[Applica]].",
    "care": "L'elenco viene da aimusiclist.com e può crescere nel tempo. Qui compaiono solo le voci che puoi scegliere da una lista.",
    "like": "È come scegliere il tipo di etichetta che stai per attaccare ai dischi: atmosfera o qualcos'altro."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Applica",
    "what": "Salva il valore scelto in tutti i brani selezionati.",
    "when": "Premi dopo aver selezionato i brani e un valore.",
    "click": "Si salva subito e un messaggio indica quanti brani sono cambiati. Le selezioni si azzerano e poco dopo il dato appare su aimusiclist.com.",
    "care": "Se scegli **— cancella (nessun valore) —**, oppure non selezioni nulla in un campo a scelta multipla, il valore viene rimosso dai brani. Senza brani selezionati appare soltanto un promemoria.",
    "like": "È il momento in cui attacchi davvero le etichette sui dischi."
  },
  "help.top.lang_fix": {
    "t": "Imposta ora",
    "what": "Seleziona per te tutti i brani che non hanno ancora una lingua, così puoi sistemarli insieme.",
    "when": "Premi dall'avviso sulla lingua dei brani.",
    "click": "Si apre la scheda Brani, che mostra soltanto quelle canzoni già selezionate. Il riquadro per modificarne molte si apre sulla lingua. Scegli e applica; finché non lo fai, nulla viene salvato.",
    "care": "Se i brani sono in lingue diverse, deselezionane alcuni e ripeti in più gruppi.",
    "like": "È come raccogliere su un tavolo i dischi senza etichetta per completarli tutti insieme."
  },
  "help.tracks.aml_box": {
    "t": "Pubblica anche su aimusiclist.com",
    "what": "Decide se il brano viene pubblicato anche su aimusiclist.com. Sul tuo sito rimane visibile in ogni caso.",
    "when": "Lascialo selezionato per le canzoni che vuoi far ascoltare al mondo e che possono entrare nella Top 100. Deselezionalo per tenerle soltanto sul tuo sito.",
    "click": "Viene salvato quando carichi o premi [[Salva brano]]. I brani pubblicati compaiono su aimusiclist.com pochi minuti dopo. Puoi cambiare scelta nell'elenco brani.",
    "care": "Devono restare pubblici almeno 10 brani (tutti, se ne hai meno di 10). Quindi un nuovo brano può essere pubblicato anche senza spunta e il salvataggio senza spunta può essere rifiutato. Per un brano in un album pubblico la casella resta selezionata: rendi prima privato l'album.",
    "like": "È scegliere quali dischi del negozio mandare anche sugli scaffali del grande mercato."
  },
  "help.tracks.upload": {
    "t": "Carica brani",
    "what": "Qui inserisci le nuove canzoni sul sito: scegli i file audio, compili alcune caselle per ciascuno e premi il pulsante di caricamento.",
    "when": "Usalo ogni volta che hai brani nuovi. Puoi inviarne fino a 20 insieme.",
    "click": "Scegliere i file li aggiunge solo all'elenco. Nulla viene salvato finché non premi [[Carica … brani]]. Poi le canzoni sono subito sul sito.",
    "care": "I file possono essere MP3, M4A o WAV. Ciascuno deve durare da 30 secondi a 15 minuti e non superare 15 MB.",
    "like": "È la porta sul retro del negozio, da cui entrano i dischi nuovi prima di arrivare sugli scaffali."
  },
  "help.tracks.choose": {
    "t": "Scegli file",
    "what": "Apre una finestra per selezionare file audio dal computer. Puoi anche trascinare i file in questo riquadro.",
    "when": "Usalo per iniziare il caricamento, anche di più file alla volta.",
    "click": "I file vengono aggiunti all'elenco sotto. Non viene ancora caricato nulla. Un formato sbagliato mostra subito «Non riuscito» nell'elenco.",
    "care": "Massimo 20 file nell'elenco; quelli in più vengono esclusi. MP3 e M4A non devono superare 15 MB. WAV viene trasformato qui in MP3 a 320 kbps, che deve restare entro 15 MB (circa 6 minuti e mezzo). Ogni brano deve durare da 30 secondi a 15 minuti.",
    "like": "È come mettere dei dischi in un cesto: arrivano sugli scaffali solo quando porti il cesto dentro."
  },
  "help.tracks.name_tags": {
    "t": "Leggi genere, atmosfera e lingua dalle ( ) dei nomi file",
    "what": "Quando è attivo, un nome come «Midnight Rain (R&B, Neo Soul; Romantic, en)» riempie le caselle automaticamente. Il titolo diventa «Midnight Rain».",
    "when": "Tienilo attivo se usi i nomi proposti dalla guida AI. Spegnilo se le ( ) nei nomi fanno parte del titolo vero.",
    "click": "L'elenco viene riletto subito. Si riempiono di nuovo solo i file per cui non hai modificato le caselle a mano. Il browser ricorda la scelta.",
    "care": "Prima di «;» ci sono i generi (il primo è il principale), dopo ci sono atmosfere e codice della lingua. Le parole sconosciute vengono saltate e mostrate in grigio. Indicazioni come (Live) o (feat. X) rimangono nel titolo.",
    "like": "È come un commesso che legge l'etichetta su ogni scatola di dischi e compila quella dello scaffale."
  },
  "help.tracks.common": {
    "t": "Applica a tutti i brani di questo caricamento",
    "what": "Le caselle sotto questo titolo si applicano a tutte le canzoni che carichi ora: strumento AI, artista, informazioni aggiuntive e pubblicazione su aimusiclist.com.",
    "when": "Impostale una volta prima di premere il pulsante di caricamento.",
    "click": "Non viene salvato nulla prima del caricamento. Genere, atmosfera e lingua non sono qui, perché li scegli per ciascun file sopra.",
    "care": "Se un brano deve essere diverso, caricalo e poi cambialo con [[Modifica]] nell'elenco.",
    "like": "È come un'etichetta applicata a tutto il cesto, non a ogni singolo disco."
  },
  "help.tracks.artist": {
    "t": "Artista",
    "what": "È il nome mostrato come cantante o creatore del brano. La prima scelta è il nome del sito.",
    "when": "Usa il nome del sito per la maggior parte dei brani. Scegline un altro se una canzone appartiene a un nome d'artista diverso che usi.",
    "click": "Si salva quando carichi o premi [[Salva brano]]. Se lasci il nome del sito e poi lo cambi, il brano seguirà il nome nuovo.",
    "care": "Gli altri nomi si aggiungono nella scheda «Altri artisti» di Informazioni sul sito (fino a 20 nomi). Aggiungili prima lì.",
    "like": "È il nome stampato sulla copertina del disco, sotto il titolo."
  },
  "help.tracks.up_start": {
    "t": "Carica … brani",
    "what": "Invia uno alla volta i file in attesa al tuo sito. Il numero sul pulsante indica quante canzoni aspettano.",
    "when": "Premi quando ogni file ha un genere principale e una lingua.",
    "click": "Ogni riga mostra l'avanzamento. Alla fine tutti i brani sono sul sito e quelli pubblici vengono inviati insieme ad aimusiclist.com.",
    "care": "Il pulsante resta bloccato se manca una casella obbligatoria. Tieni aperta questa pagina finché finisce, perché è la pagina stessa a inviare i file. Se alcuni falliscono, gli altri restano salvati.",
    "like": "È come portare il cesto dentro il negozio e mettere ogni disco sullo scaffale."
  },
  "help.tracks.up_retry": {
    "t": "Riprova brani non riusciti",
    "what": "Riprova soltanto i brani il cui caricamento è fallito, per esempio per una connessione interrotta.",
    "when": "Compare solo se alcune canzoni non sono riuscite. Premi dopo aver controllato internet.",
    "click": "I brani falliti vengono inviati di nuovo. Un brano già registrato invia soltanto l'audio, senza creare un doppione.",
    "care": "Non puoi ritentare un file di tipo sbagliato. Se il problema è durata o dimensione, correggi il file, togli la riga e aggiungilo di nuovo.",
    "like": "È come tornare a prendere i dischi caduti dal cesto lungo il tragitto."
  },
  "help.tracks.up_clear": {
    "t": "Svuota elenco",
    "what": "Svuota in una volta tutto l'elenco dei file da caricare.",
    "when": "Usalo quando hai finito un caricamento o vuoi ricominciare.",
    "click": "Tutte le righe spariscono subito. I brani già caricati rimangono sul sito.",
    "care": "Non puoi premerlo durante un caricamento. Le caselle compilate per i file non ancora caricati vanno perse.",
    "like": "È come svuotare il cesto: i dischi già sugli scaffali restano dove sono."
  },
  "help.tracks.edit": {
    "t": "Modifica",
    "what": "È il modulo per modificare un brano già caricato. Si apre premendo [[Modifica]] nella sua riga.",
    "when": "Usalo per correggere titolo, generi, lingua, artista e altro, oppure per sostituire il file audio.",
    "click": "Le modifiche nella parte alta si salvano solo con [[Salva brano]]. Immagine e testo della canzone, in basso, si salvano appena li cambi.",
    "care": "Mentre questo modulo è aperto sostituisce la scheda di caricamento. Premi [[Annulla]] o salva per tornare alla scheda.",
    "like": "È come prendere un disco dallo scaffale per correggerne l'etichetta."
  },
  "help.tracks.title": {
    "t": "Titolo",
    "what": "È il nome della canzone mostrato sul tuo sito e su aimusiclist.com.",
    "when": "Cambialo se il titolo ricavato dal nome file è sbagliato o da correggere.",
    "click": "Si salva con [[Salva brano]]. Se la canzone è pubblica, il titolo nuovo appare poco dopo su aimusiclist.com.",
    "care": "Il titolo non può essere vuoto e può contenere fino a 100 caratteri.",
    "like": "È il grande nome stampato sulla copertina del disco."
  },
  "help.tracks.replace_audio": {
    "t": "Sostituisci audio (facoltativo)",
    "what": "Scegli un nuovo file audio per sostituire il suono della canzone. Titolo, generi, immagine e testo rimangono uguali.",
    "when": "Usalo quando hai creato una versione migliore o caricato il file sbagliato.",
    "click": "Non succede nulla finché non premi [[Salva brano]]. Poi il file nuovo viene inviato e sostituisce il precedente.",
    "care": "Dopo il salvataggio l'audio vecchio non c'è più: conservane una copia sul computer. Valgono le regole del caricamento: MP3, M4A o WAV, da 30 secondi a 15 minuti, massimo 15 MB.",
    "like": "È come mettere un disco nuovo dentro la stessa copertina."
  },
  "help.tracks.save": {
    "t": "Salva brano",
    "what": "Salva tutte le modifiche fatte nel modulo qui sopra.",
    "when": "Premi dopo aver cambiato titolo, generi, lingua e altre caselle.",
    "click": "Le modifiche vengono salvate e il modulo si chiude. Il tuo sito le mostra subito, aimusiclist.com poco dopo sui brani pubblici. Se hai scelto un audio nuovo, viene inviato e ne vedi l'avanzamento.",
    "care": "Il salvataggio può essere rifiutato, per esempio senza genere principale o se rendere privato il brano lascerebbe meno di 10 brani pubblici. Un messaggio rosso spiega il motivo e non salva nulla.",
    "like": "È come rimettere il disco sullo scaffale con l'etichetta corretta."
  },
  "help.tracks.cancel": {
    "t": "Annulla",
    "what": "Chiude il modulo di modifica senza salvare le caselle in alto.",
    "when": "Usalo se hai aperto il brano sbagliato o hai cambiato idea.",
    "click": "Il modulo si chiude subito e torna la scheda di caricamento. Le modifiche non salvate vengono scartate.",
    "care": "Immagine e testo del brano vengono salvati appena li cambi, quindi Annulla non annulla quelle modifiche.",
    "like": "È come rimettere il disco sullo scaffale senza toccare l'etichetta."
  },
  "help.tracks.image": {
    "t": "Immagine del brano",
    "what": "È la piccola immagine della canzone. Appare dietro al pulsante di riproduzione sul tuo sito e su aimusiclist.com.",
    "when": "Cambiala quando vuoi un'immagine personale invece di quella predefinita.",
    "click": "I pulsanti sotto funzionano subito. Non aspettano [[Salva brano]].",
    "care": "Ogni canzone riceve un'immagine predefinita al caricamento. La tua viene salvata come quadratino da 100×100, e anche in versione più grande se l'originale lo permette.",
    "like": "È la copertina che le persone vedono prima di premere Play."
  },
  "help.tracks.image_lg": {
    "t": "Rendi nitida l'immagine nelle schede grandi",
    "what": "Questo avviso dice che hai solo la versione piccola dell'immagine. Nelle schede grandi di aimusiclist.com, per esempio in cima alla Top 100, potrebbe sembrare sfocata.",
    "when": "Compare sui brani con immagini caricate prima che esistesse la versione grande o da una foto troppo piccola.",
    "click": "Premi [[Cambia immagine]] e carica di nuovo la foto. L'avviso scompare quando viene salvata una versione grande.",
    "care": "Usa un'immagine larga almeno 200 pixel nella zona ritagliata. Da una più piccola non si può ottenere una buona versione grande.",
    "like": "È come ristampare una piccola copertina in formato poster per la vetrina."
  },
  "help.tracks.image_change": {
    "t": "Cambia immagine",
    "what": "Ti permette di scegliere una foto dal computer da usare come immagine della canzone.",
    "when": "Usalo per dare un'immagine personale al brano o sostituire quella attuale.",
    "click": "Si apre una finestra per ritagliare o ridurre la foto. Premi [[Salva immagine]] per salvarla subito e mostrarla sul sito. Se il brano è pubblico, appare poco dopo anche su aimusiclist.com.",
    "care": "Sono accettati JPG, PNG, WebP o GIF fino a 2 MB. Viene caricata solo la versione ridotta, non l'originale.",
    "like": "È come mettere una copertina nuova al disco."
  },
  "help.tracks.image_reset": {
    "t": "Torna all'immagine predefinita",
    "what": "Rimuove la foto caricata e ripristina l'immagine predefinita del brano.",
    "when": "Usalo quando non vuoi più la foto personale per quella canzone.",
    "click": "Succede subito, senza chiedere conferma. Il sito mostra immediatamente l'immagine predefinita.",
    "care": "La foto caricata viene eliminata, compresa la versione grande. Per usarla ancora, ricaricala con [[Cambia immagine]].",
    "like": "È come togliere la copertina speciale e rimettere quella semplice del negozio."
  },
  "help.tracks.lyrics": {
    "t": "Testo (.srt)",
    "what": "Sono le parole della canzone in un file .srt. Ogni riga del testo ha il proprio tempo.",
    "when": "Aggiungilo se vuoi che gli ascoltatori possano leggere mentre ascoltano. Molti strumenti AI musicali creano file .srt.",
    "click": "Caricare o eliminare il testo funziona subito, senza [[Salva brano]]. Sul sito i visitatori premono SRT accanto alla canzone per leggere le parole senza i tempi.",
    "care": "Il file deve finire in .srt, essere in formato testo UTF-8 e non superare 100 KB. Deve contenere tempi come 00:00:01,000 --> 00:00:04,000.",
    "like": "È il foglio con le parole infilato nella copertina del disco."
  },
  "help.tracks.lyrics_upload": {
    "t": "Carica .srt / Sostituisci .srt",
    "what": "Sceglie dal computer il file .srt con il testo del brano. Se esiste già un testo, il pulsante dice Sostituisci.",
    "when": "Usalo per aggiungere le parole o correggerle con un file nuovo.",
    "click": "Appena scegli il file, viene controllato e salvato. Il vecchio testo viene sostituito. Se il file non va bene, compare un messaggio rosso.",
    "care": "Solo file .srt fino a 100 KB, in UTF-8. Un file senza righe con tempi viene rifiutato.",
    "like": "È come inserire un nuovo foglio di testo nella copertina."
  },
  "help.tracks.lyrics_view": {
    "t": "Visualizza file",
    "what": "Apre il file del testo salvato per questo brano.",
    "when": "Usalo per verificare che sia stato salvato il testo giusto.",
    "click": "Il file si apre in una nuova scheda con i tempi. Non cambia nulla.",
    "like": "È come estrarre il foglio con le parole dalla copertina per leggerlo."
  },
  "help.tracks.lyrics_delete": {
    "t": "Elimina testo",
    "what": "Rimuove il testo della canzone da questo brano.",
    "when": "Usalo quando il testo è sbagliato e non ne hai ancora uno migliore o quando la canzone non deve averlo.",
    "click": "Una domanda chiede conferma. Se rispondi sì, il testo viene eliminato subito e la sigla SRT scompare dal brano.",
    "care": "Non si può annullare. Per recuperare il testo devi ricaricare il file .srt.",
    "like": "È come prendere il foglio con le parole dalla copertina e buttarlo via."
  },
  "help.tracks.upguide": {
    "t": "Compila automaticamente genere e atmosfera",
    "what": "È una breve guida per evitare di scegliere a mano genere, atmosfera e lingua di ogni brano. Dai un file di istruzioni a un'AI gratuita, che propone il nome della canzone in una forma speciale.",
    "when": "Leggila una volta prima di creare le prossime canzoni. È utile soprattutto quando ne carichi molte.",
    "click": "La ✕ richiude la guida in un piccolo pulsante, che puoi premere per riaprirla. Il browser ricorda come l'hai lasciata.",
    "care": "La guida non cambia il modo in cui crei la musica. Decide solo come scrivere il titolo del brano.",
    "like": "È come preparare l'etichetta dello scaffale sulla scatola prima che il disco arrivi, così non devi classificarlo all'ingresso."
  },
  "help.tracks.upguide_dl": {
    "t": "Scarica il file guida per l'AI",
    "what": "Scarica da aimusiclist.com il file guida: è un normale testo preparato per essere letto da un'AI.",
    "when": "Prima di creare una canzone, allega il file a ChatGPT, Claude o Gemini (vanno bene anche i piani gratuiti), poi chiedi un titolo.",
    "click": "Il file viene salvato sul computer. Sul sito non cambia nulla.",
    "care": "Quando scarichi la canzone, conserva il nome file suggerito dall'AI musicale. La parte tra ( ) permette di compilare automaticamente le caselle qui.",
    "like": "È come consegnare una scheda con la ricetta a un aiutante, così le etichette vengono sempre scritte allo stesso modo."
  },
  "help.tracks.uf_all": {
    "t": "Usa per tutti i file",
    "what": "Copia il valore di questa casella nella stessa casella di tutti gli altri file dell'elenco.",
    "when": "Usalo quando molte canzoni condividono genere, atmosfera o lingua. Compila la prima, poi premi.",
    "click": "Gli altri file cambiano subito e un messaggio dice quanti. I file già caricati non vengono modificati.",
    "care": "Sostituisce i valori che avevi scelto per gli altri file. Dopo puoi ancora modificarli uno per uno.",
    "like": "È come un timbro di gomma per applicare la stessa etichetta a tutte le scatole in un colpo."
  },
  "help.tracks.uf_mood": {
    "t": "Atmosfera",
    "what": "Indica la sensazione del brano, per esempio Sad o Romantic. aimusiclist.com decide quali atmosfere compaiono nell'elenco.",
    "when": "Seleziona le atmosfere adatte. È facoltativo.",
    "click": "Le selezioni valgono solo per questo file e si salvano quando lo carichi. Quando raggiungi il limite indicato tra ( ), le altre caselle si bloccano finché non ne deselezioni una.",
    "care": "Questa casella compare solo quando il sito ha ricevuto da aimusiclist.com l'elenco dei campi.",
    "like": "È un piccolo adesivo colorato sul disco che anticipa agli ascoltatori l'atmosfera."
  },
  "help.tracks.uf_genre": {
    "t": "Genere",
    "what": "Sono i generi di questa canzone: uno principale e fino a due aggiuntivi.",
    "when": "Sceglili per ogni file. Il genere principale è obbligatorio.",
    "click": "La scelta vale soltanto per questo file e si salva quando lo carichi.",
    "care": "Il genere principale decide in quale menu di aimusiclist.com entra il brano. Gli altri generi appaiono lì accanto al titolo.",
    "like": "È l'etichetta di uno scaffale: prima il reparto grande, poi due piccole note."
  },
  "help.tracks.uf_lang": {
    "t": "Lingua del brano",
    "what": "È la lingua delle parole cantate nella canzone. Puoi indicarne anche una seconda.",
    "when": "Sceglila per ogni file. Se non c'è canto, scegli «Strumentale (senza testo)».",
    "click": "La scelta vale solo per questo file e si salva quando lo carichi.",
    "care": "Non è la lingua dei menu del sito. «Strumentale» va usato da solo, quindi blocca la seconda casella. aimusiclist.com usa la lingua nelle classifiche suddivise per lingua.",
    "like": "È un biglietto sul disco che indica in quale lingua canta l'artista."
  },
  "help.tracks.queue": {
    "t": "File da caricare",
    "what": "È l'elenco dei file scelti. Ogni riga mostra titolo, nome e dimensione del file, stato e caselle per la canzone.",
    "when": "Controllalo prima del caricamento. Ogni brano deve avere un genere principale e una lingua.",
    "click": "Le modifiche alle caselle restano qui fino al caricamento. L'etichetta verde «Compilato dal nome file» indica dati letti dalle ( ); «Scegli sotto» significa che devi inserirli tu.",
    "care": "Le righe con caselle obbligatorie vuote diventano rosse. Durante il caricamento le caselle diventano una sola riga riassuntiva e non puoi modificarle.",
    "like": "È la lista delle consegne alla porta sul retro: controlli ogni scatola prima di metterla sullo scaffale."
  },
  "help.tracks.up_remove": {
    "t": "Rimuovi",
    "what": "Toglie un singolo file dall'elenco di caricamento.",
    "when": "Usalo se hai scelto un file sbagliato o se mostra «Non riuscito» per formato o durata.",
    "click": "La riga sparisce subito. Il file sul tuo computer non viene cancellato.",
    "care": "Il pulsante è nascosto durante il caricamento e per i file già caricati. Per eliminare un brano caricato, usa l'elenco dei brani.",
    "like": "È come togliere un disco dal cesto prima di entrare nel negozio."
  },
  "help.tracks.up_need": {
    "t": "Caselle vuote",
    "what": "Questo avviso elenca i file a cui manca il genere principale o la lingua.",
    "when": "Compare da solo finché manca un dato obbligatorio. Il pulsante di caricamento resta bloccato.",
    "click": "Premi una riga per andare direttamente alla casella vuota. L'avviso sparisce quando le hai compilate tutte.",
    "care": "Vengono mostrate solo le prime 12 caselle vuote. Il numero in alto le conta tutte.",
    "like": "È una lista di controllo sulla porta: la consegna non entra finché non hai spuntato tutto."
  },
  "help.tracks.up_after": {
    "t": "Controlla Novità su aimusiclist.com",
    "what": "È un avviso che compare dopo il caricamento e ti indica dove trovare i nuovi brani pubblici.",
    "when": "Compare solo quando il sito è collegato ad aimusiclist.com e almeno una nuova canzone è pubblica.",
    "click": "Il link apre la pagina Novità di aimusiclist.com in una nuova scheda.",
    "care": "aimusiclist.com impiega qualche minuto per ricevere i brani nuovi. Se non compaiono dopo circa 5 minuti, ricontrolla più tardi.",
    "like": "È come andare al grande mercato per vedere il tuo disco nuovo sullo scaffale."
  },
  "help.tracks.pubmin": {
    "t": "Pubblici: n · Minimo: n",
    "what": "Il primo numero indica quanti tuoi brani sono attualmente pubblici su aimusiclist.com. Il secondo è il numero minimo che deve rimanere pubblico.",
    "when": "Controllali prima di rendere privati dei brani, per sapere quanti puoi ancora nasconderne.",
    "click": "È solo un conteggio. Cambia da solo quando attivi o disattivi la pubblicazione.",
    "care": "La regola: con 10 o più brani, almeno 10 devono restare pubblici. Con meno di 10, devono esserlo tutti. Contano solo i brani con audio. Un brano in un album pubblico conta come pubblico. Un album programmato conta soltanto quando viene pubblicato.\nSe il primo numero è inferiore al secondo, un riquadro giallo ti chiede di pubblicare altri brani. Scegli tu quali. Puoi sempre eliminare un brano.",
    "like": "Il grande mercato (aimusiclist.com) chiede a ogni negozio di esporre almeno 10 dischi. Qui vedi quanti tuoi dischi sono presenti."
  },
  "help.top.pubmin_go": {
    "t": "Scegli i brani",
    "what": "Ti porta alla sezione in cui decidi quali canzoni rendere pubbliche.",
    "when": "Premi dall'avviso che segnala pochi brani pubblici.",
    "click": "Si apre la scheda Brani alla riga «Pubblici · Minimo». Attiva la pubblicazione dei brani che vuoi. Ogni interruttore salva subito.",
    "care": "Le canzoni senza audio non contano. L'avviso sparisce automaticamente quando raggiungi il minimo.",
    "like": "È come andare direttamente alla vetrina per esporre qualche disco in più."
  },
  "help.tracks.pub_tip": {
    "t": "Suggerimento sull'interruttore pubblico",
    "what": "Una breve nota che appare quando usi per la prima volta l'interruttore di pubblicazione. Spiega quando il brano appare su aimusiclist.com.",
    "when": "Leggila una volta. Compare solo dopo il primo utilizzo in questo browser.",
    "click": "[[Non mostrare più]] la nasconde per sempre in questo browser. [[Chiudi]] la nasconde soltanto fino alla prossima apertura della pagina di amministrazione.",
    "care": "Nascondere la nota non cambia nulla nei brani.",
    "like": "È un cartellino sullo scaffale: «I dischi messi qui appaiono al grande mercato entro uno o due minuti»."
  },
  "help.albums.form": {
    "t": "Nuovo album / Modifica album",
    "what": "È il riquadro in cui crei o modifichi un album: brani ordinati come vuoi, titolo, copertina e breve presentazione.",
    "when": "Usalo per raccogliere canzoni come in un vero disco. Gli album appaiono sul tuo sito, quelli pubblici anche su aimusiclist.com.",
    "click": "Mentre compili non viene salvato nulla. Tutto si salva quando premi [[Salva album]]. [[Annulla]] chiude il riquadro e scarta le modifiche.",
    "care": "Un album può avere fino a 35 brani. Per essere pubblico, ne servono da 6 a 35 e ciascuno deve avere l'audio. Puoi salvarlo con meno brani, ma resta privato.",
    "like": "È come creare un disco: scegli le canzoni, decidi l'ordine e prepari una copertina."
  },
  "help.albums.title": {
    "t": "Titolo dell'album",
    "what": "È il nome dell'album. I visitatori lo vedono sul sito e, se pubblico, su aimusiclist.com.",
    "when": "Inseriscilo ogni volta che crei un album: senza titolo non puoi salvarlo.",
    "click": "Si salva premendo [[Salva album]]. Puoi modificarlo dopo con [[Modifica]] nell'elenco degli album.",
    "care": "Massimo 100 caratteri.",
    "like": "È il titolo grande stampato davanti alla copertina."
  },
  "help.albums.artist": {
    "t": "Artista",
    "what": "Indica a chi appartiene l'album. La prima opzione è il nome del sito; le altre sono quelle aggiunte in Altri artisti, nella scheda Informazioni sul sito.",
    "when": "Lascia il nome del sito per un album col tuo nome abituale. Scegline un altro per un progetto parallelo o uno pseudonimo.",
    "click": "Si salva con [[Salva album]]. Il nome appare sotto il titolo sul tuo sito e su aimusiclist.com.",
    "care": "Con la prima opzione il nome dell'artista segue quello del sito: se rinomini il sito, cambia anche l'artista dell'album. Non puoi usare il nome di un cantante famoso.",
    "like": "È il cartellino del musicista che ha creato il disco nel tuo negozio."
  },
  "help.albums.desc": {
    "t": "Presentazione dell'album",
    "what": "Sono alcune frasi sull'album. Appaiono subito sotto il titolo, sul sito e su aimusiclist.com.",
    "when": "Scrivile per raccontare di cosa parla, come l'hai creato o che atmosfera ha. Puoi anche lasciarle vuote.",
    "click": "Si salvano con [[Salva album]]. Il numero sotto la casella indica quanti caratteri ti restano.",
    "care": "Massimo 200 caratteri; raggiunto il limite non puoi continuare. Un'emoji conta come un carattere. Puoi andare a capo, ma sono consentite solo parole semplici (senza immagini o link).",
    "like": "È la breve nota stampata sul retro della copertina."
  },
  "help.albums.pub": {
    "t": "Quando renderlo pubblico",
    "what": "Qui decidi quando far uscire l'album: subito oppure alla data e all'ora che scegli.",
    "when": "Scegli [[Adesso]] per la maggior parte degli album. Imposta una data se vuoi un giorno di uscita da annunciare ai fan.",
    "click": "La scelta viene applicata con [[Salva album]]. L'album diventa pubblico soltanto con 6–35 brani, tutti con audio; altrimenti è salvato come privato.",
    "care": "Per un album nuovo il processo è automatico. Modificando un album esistente, il suo interruttore pubblico resta com'era. Puoi sempre cambiarlo dall'elenco.",
    "like": "È come scegliere quando far uscire un disco: metterlo in vendita oggi o in un giorno segnato sul calendario."
  },
  "help.albums.pub_now": {
    "t": "Adesso",
    "what": "Rende pubblico l'album appena lo salvi.",
    "when": "Sceglilo quando l'album è pronto e vuoi farlo ascoltare oggi.",
    "click": "Dopo [[Salva album]], un album nuovo con 6–35 brani tutti con audio diventa subito pubblico. Entro uno o due minuti appare su aimusiclist.com. Se avevi programmato una data, Adesso la annulla.",
    "care": "Se ci sono meno di 6 brani o un brano senza audio, l'album viene salvato come privato. Il messaggio finale ti dice che cosa è successo.",
    "like": "Metti il disco nuovo sullo scaffale del grande mercato appena lo finisci."
  },
  "help.albums.pub_at": {
    "t": "Alla data e all'ora che scelgo",
    "what": "L'album aspetta e diventa pubblico automaticamente nel giorno e nell'ora scelti.",
    "when": "Usalo per programmare un'uscita, per esempio venerdì prossimo alle 20:00, e annunciarla ai fan.",
    "click": "Si apre una casella per data e ora, secondo il fuso orario del dispositivo. Dopo [[Salva album]], l'elenco mostra il momento previsto. Prima di allora l'album resta nascosto sul sito e su aimusiclist.com. Compare in entrambi entro circa un minuto dall'orario scelto.",
    "care": "Scegli un orario futuro, non oltre 366 giorni. Durante l'attesa non puoi rendere privati i suoi brani. Servono comunque 6–35 brani con audio. Nella versione PHP l'operazione può tardare circa 5 minuti.",
    "like": "È come un negozio che imposta una sveglia: quando suona, il disco appare da solo in vetrina."
  },
  "help.albums.cover": {
    "t": "Immagine di copertina",
    "what": "È l'immagine quadrata dell'album, visibile sul sito e, se pubblico, su aimusiclist.com.",
    "when": "Aggiungila quando puoi: gli album con copertina si notano e si ricordano meglio. È facoltativa.",
    "click": "Premi [[Scegli copertina]] per selezionare una foto e adattarla al quadrato. La copertina si salva insieme all'album con [[Salva album]].",
    "care": "È salvata come piccola immagine 200×200. Eliminare un album cancella solo la copertina, mai le canzoni.",
    "like": "È la copertina del disco, la prima cosa che la gente vede sullo scaffale."
  },
  "help.albums.pick": {
    "t": "Scegli brani (in ordine)",
    "what": "Qui inserisci le canzoni nell'album. A sinistra (sul telefono in alto) ci sono tutti i tuoi brani; a destra (in basso sul telefono) ci sono quelli dell'album, nell'ordine di ascolto.",
    "when": "Usalo per creare o modificare la selezione. Funziona anche con centinaia di canzoni.",
    "click": "Trova i brani a sinistra, selezionali e premi [[Aggiungi selezionati →]]. Vanno in fondo all'elenco destro e spariscono da quello sinistro. Nulla è salvato finché non premi [[Salva album]].",
    "care": "Massimo 35 brani. Una canzone può stare in più album; un'etichetta mostra il nome dell'altro album. I brani segnati «Audio mancante» non hanno file e impediscono all'album di diventare pubblico.",
    "like": "A sinistra c'è lo scaffale del magazzino. A destra il disco che componi, una canzone alla volta."
  },
  "help.albums.save": {
    "t": "Salva album",
    "what": "Salva insieme tutto ciò che hai inserito: titolo, artista, presentazione, momento d'uscita, copertina e brani.",
    "when": "Premi quando hai finito di creare o modificare l'album.",
    "click": "Un messaggio dice se l'album è pubblico subito, programmato oppure privato perché mancano 6–35 brani con audio. Poi compare nell'elenco in basso. Se pubblico, arriva su aimusiclist.com in uno o due minuti.",
    "care": "Il titolo è obbligatorio e la data scelta deve essere futura. Alcune modifiche possono essere rifiutate, per esempio se lascerebbero meno di 10 brani pubblici sul sito: il messaggio rosso ne spiega il motivo.",
    "like": "È come confezionare il disco finito e metterlo sullo scaffale."
  },
  "help.albums.cancel": {
    "t": "Annulla",
    "what": "Chiude il riquadro dell'album senza salvare.",
    "when": "Usalo se hai cambiato idea o vuoi ricominciare da capo.",
    "click": "Si chiude subito. Tutte le modifiche fatte dall'apertura, anche una copertina scelta, vengono scartate. L'album resta com'era salvato prima.",
    "care": "Non compare una domanda di conferma. Le modifiche non salvate si perdono.",
    "like": "È come riporre un disco ancora a metà nel cassetto senza toccare quello sullo scaffale."
  },
  "help.albums.new": {
    "t": "Nuovo album",
    "what": "Apre un riquadro vuoto per creare un nuovo album.",
    "when": "Premi quando vuoi raccogliere alcuni brani in un album.",
    "click": "Il riquadro si apre sopra l'elenco. Non viene creato nulla finché non premi [[Salva album]] lì dentro.",
    "care": "Il pulsante è nascosto quando c'è già un riquadro album aperto. Prima salva o annulla.",
    "like": "È come prendere una copertina nuova e vuota."
  },
  "help.albums.list": {
    "t": "I miei album",
    "what": "Mostra tutti gli album creati. Ognuno appare sul tuo sito. Quelli con l'interruttore attivo compaiono anche su aimusiclist.com e rendono pubblici i loro brani.",
    "when": "Usalo per vedere quali album sono pubblici, modificarli o eliminarli.",
    "click": "Ogni riga ha un interruttore pubblico, titolo, numero di brani e i pulsanti [[Modifica]] / [[Elimina]].",
    "care": "Un album programmato resta nascosto ovunque, anche sul tuo sito, fino alla data scelta. Finché è pubblico o in attesa di pubblicazione, i suoi brani non possono essere resi privati singolarmente.",
    "like": "È lo scaffale degli album del negozio. L'interruttore decide quali esporre anche al grande mercato."
  },
  "help.albums.pub_switch": {
    "t": "Pubblico su aimusiclist",
    "what": "L'interruttore decide se l'album appare anche su aimusiclist.com. Sul tuo sito resta in ogni caso.",
    "when": "Attivalo per far conoscere l'album a più persone. Spegnilo per rimuoverlo da aimusiclist.com.",
    "click": "Si salva subito. Attivo: album e tutti i brani compaiono su aimusiclist.com entro uno o due minuti. Spento: spariscono da lì, ma i brani pubblicati singolarmente rimangono pubblici.",
    "care": "Un interruttore grigio significa che servono 6–35 brani tutti con audio: premilo per sapere perché. Spegnerlo può essere rifiutato se rimarrebbero meno di 10 brani pubblici.",
    "like": "Decidi quali dischi del negozio esporre anche sugli scaffali del grande mercato."
  },
  "help.albums.col_title": {
    "t": "Titolo dell'album",
    "what": "Questa colonna mostra il titolo e, sotto, l'artista. Possono apparire anche piccole etichette.",
    "when": "Controlla qui rapidamente lo stato di un album.",
    "click": "«Diventerà pubblico …» significa che aspetta la data scelta. «Servono 6–35 brani con audio» significa che non può ancora essere pubblico: aggiungi o togli brani, oppure carica i file audio mancanti.",
    "like": "È l'etichetta sul dorso di ogni disco esposto."
  },
  "help.albums.col_count": {
    "t": "Numero di brani",
    "what": "Indica quante canzoni contiene ogni album.",
    "when": "Controllalo per capire se un album può diventare pubblico: servono da 6 a 35 brani.",
    "click": "Se sono meno di 6, premi [[Modifica]] e aggiungine altri. Il massimo è 35.",
    "like": "È come contare le canzoni elencate sul retro del disco."
  },
  "help.albums.row_buttons": {
    "t": "Modifica / Elimina",
    "what": "Sono i pulsanti in fondo a ogni riga. [[Modifica]] apre l'album per cambiarlo; [[Elimina]] lo rimuove.",
    "when": "Usa Modifica per cambiare canzoni, ordine, titolo, copertina o data d'uscita. Usa Elimina se non vuoi più l'album.",
    "click": "Modifica apre il riquadro in alto. Elimina chiede conferma, poi toglie subito album e copertina. I brani rimangono sul sito.",
    "care": "Eliminare è irreversibile. Un album pubblico potrebbe non poter essere eliminato se rimarrebbero meno di 10 brani pubblici.",
    "like": "Modifica è prendere un disco per sistemarlo. Elimina è buttare copertina ed elenco, mentre le canzoni tornano in magazzino."
  },
  "help.albums.pick_search": {
    "t": "Cerca titoli dei brani",
    "what": "Scrivi parte del titolo per mostrare a sinistra soltanto i brani corrispondenti.",
    "when": "Usalo se hai molte canzoni e conosci il nome di quella che cerchi.",
    "click": "L'elenco cambia mentre scrivi. Maiuscole e minuscole non contano. Svuota la casella per rivedere tutto.",
    "care": "Cerca solo nei titoli, non nell'artista o nei testi.",
    "like": "È come chiedere al magazziniere: «Dov'è la canzone chiamata…?»"
  },
  "help.albums.pick_genre": {
    "t": "Genere",
    "what": "A sinistra mostra solo le tue canzoni di un genere principale. L'elenco comprende i generi principali presenti nei tuoi brani.",
    "when": "Usalo per creare album di un solo stile, per esempio soltanto R&B.",
    "click": "L'elenco cambia subito. Un brano appare se uno dei suoi generi corrisponde al genere scelto o a un suo sottogenere. Seleziona Tutti i generi per rivedere tutto.",
    "care": "Serve soltanto a trovare brani. Non modifica i loro generi.",
    "like": "È come camminare nel corridoio R&B del magazzino."
  },
  "help.albums.pick_sort": {
    "t": "Ordine",
    "what": "Cambia l'ordine dei brani a sinistra: caricamenti recenti per primi, più vecchi per primi o per titolo.",
    "when": "Usa Più recenti per trovare le ultime canzoni. Usa Titolo A–Z se cerchi un nome.",
    "click": "L'elenco sinistro viene riordinato subito. Non cambia l'ordine nell'album, che si imposta a destra.",
    "like": "È come disporre lo scaffale del magazzino per data o per nome."
  },
  "help.albums.pick_all": {
    "t": "Seleziona tutti quelli mostrati",
    "what": "Seleziona tutti i brani che corrispondono alla ricerca e al genere attuali. Il numero indica quanti sono.",
    "when": "Usalo dopo aver ristretto l'elenco, per esempio per scegliere insieme tutte le canzoni di un genere.",
    "click": "Seleziona tutti i brani corrispondenti, anche quelli più in basso. Premilo ancora (ora dice Deseleziona) per togliere le spunte. Non sono ancora aggiunti: poi premi [[Aggiungi selezionati →]].",
    "care": "Un album contiene al massimo 35 brani. Se ne selezioni di più, vengono aggiunti solo i primi che ci stanno.",
    "like": "È come dire «prendo tutto questo scaffale» invece di indicare ogni disco."
  },
  "help.albums.pick_add": {
    "t": "Aggiungi selezionati →",
    "what": "Aggiunge all'album le canzoni selezionate. Il numero indica quante sono.",
    "when": "Premi dopo aver selezionato i brani a sinistra.",
    "click": "I brani selezionati vanno alla fine dell'elenco a destra, nell'ordine mostrato a sinistra, e spariscono da sinistra. A destra puoi cambiare l'ordine. L'album si salva soltanto con [[Salva album]].",
    "care": "Il pulsante è grigio se non hai selezionato nulla o se l'album contiene già 35 brani. Se non ci stanno tutti, un messaggio indica quanti sono rimasti fuori.",
    "like": "Porti le canzoni scelte dallo scaffale del magazzino dentro il nuovo disco."
  },
  "help.albums.pick_recent": {
    "t": "Aggiungi i miei ultimi brani",
    "what": "Aggiunge con un solo gesto i brani caricati più di recente. Scegli quanti nella casella numerica (da 1 a 35, inizialmente 10).",
    "when": "Usalo quando hai appena caricato un gruppo di brani nuovi e vuoi metterli insieme in un album.",
    "click": "I brani più recenti con audio, non ancora nell'album, vanno in fondo all'elenco destro, dai più nuovi ai meno nuovi. La ricerca e il genere scelti a sinistra non influiscono. Nulla si salva prima di [[Salva album]].",
    "care": "I brani senza audio vengono saltati. L'album non può superare 35 canzoni. Il pulsante è grigio se l'album è pieno.",
    "like": "È come dire «dammi gli ultimi 10 dischi arrivati in magazzino»."
  },
  "help.albums.picked": {
    "t": "In questo album",
    "what": "Sono le canzoni dell'album nell'ordine di ascolto. Accanto vedi il totale, in rosso se non è tra 6 e 35.",
    "when": "Usalo per controllare i brani e stabilirne l'ordine.",
    "click": "Tieni premuto ⠿ e trascina un brano su o giù, oppure usa ▲ ▼. ✕ lo toglie dall'album (rimane sul sito). Le modifiche si salvano con [[Salva album]].",
    "care": "Un album pubblico deve avere 6–35 brani tutti con audio. Un brano segnato «Audio mancante» impedisce la pubblicazione. Se è già pubblico, non puoi salvarlo con meno di 6 brani.",
    "like": "È l'elenco delle tracce sul retro del disco: canzone 1, canzone 2, canzone 3…"
  },
  "help.albums.pick_clear": {
    "t": "Rimuovi tutti",
    "what": "Toglie tutte le canzoni dall'album in una volta, per ricominciare la scelta.",
    "when": "Usalo quando vuoi rifare l'elenco dei brani.",
    "click": "Prima chiede conferma. Poi l'elenco destro si svuota e i brani tornano a sinistra. Nulla viene salvato prima di [[Salva album]]; premi invece [[Annulla]] per conservare l'album precedente.",
    "care": "I brani non vengono eliminati: restano sul sito.",
    "like": "È come togliere tutte le canzoni dal disco e rimetterle sugli scaffali del magazzino."
  },
  "help.albums.cover_pick": {
    "t": "Scegli copertina",
    "what": "Apre le immagini del dispositivo per scegliere una copertina, poi una piccola finestra ti permette di scegliere quale parte usare.",
    "when": "Premi per aggiungere una copertina o sostituire quella attuale.",
    "click": "Dopo [[Salva immagine]] nella finestra, la nuova copertina compare qui come «Nuova copertina». Non è ancora salvata: si salva con [[Salva album]]. [[Annulla]] accanto scarta la nuova foto.",
    "care": "Puoi usare JPG, PNG, WebP o GIF fino a 2 MB. Non viene caricata la foto originale ma solo una copia ridotta.",
    "like": "Scegli una foto e la ritagli perché entri nella copertina del disco."
  },
  "help.albums.cover_delete": {
    "t": "Rimuovi copertina",
    "what": "Toglie l'immagine di copertina dall'album. L'album e i brani restano.",
    "when": "Usalo se non vuoi più la copertina attuale, per esempio mentre ne prepari un'altra.",
    "click": "Prima chiede conferma. Se rispondi sì, la copertina viene rimossa subito, senza [[Salva album]]. I visitatori vedono un quadrato vuoto.",
    "care": "Non puoi annullarlo. Per riavere una copertina devi selezionare di nuovo l'immagine.",
    "like": "È come togliere la copertina del disco: la musica all'interno resta."
  },
  "help.skins.use": {
    "t": "Usa questo tema",
    "what": "Applica al sito questo tema installato. Il tema precedente viene ricordato.",
    "when": "Quando vuoi che i visitatori vedano il sito con questo aspetto.",
    "click": "La scelta si salva subito e i visitatori vedono il nuovo aspetto entro circa 30 secondi. Per tornare indietro premi [[Torna al tema precedente]] o scegline un altro.",
    "care": "Il tema già in uso non mostra questo pulsante. Brani e menu non cambiano.",
    "like": "È come prendere un vestito dall'armadio e farlo indossare al tuo negozio."
  },
  "help.skins.update": {
    "t": "Aggiorna",
    "what": "L'autore di un tema della galleria che hai installato ha pubblicato una nuova versione. Questo pulsante la scarica. Compare accanto a **Nuova versione**.",
    "when": "Quando vuoi la versione più recente di quel tema, con le correzioni.",
    "click": "La nuova versione viene controllata e sostituisce quella vecchia. Il tema attivo non cambia. Se stai usando quello aggiornato, i visitatori vedono la nuova versione entro circa 30 secondi.",
    "care": "Riguarda solo il design, non l'aggiornamento del programma del sito. I temi caricati da te non mostrano questo pulsante.",
    "like": "È come quando il sarto ti manda una copia migliorata di un vestito che possiedi già."
  },
  "help.skins.download": {
    "t": "Scarica (per modificare)",
    "what": "Salva sul computer una copia di un tema incluso (Chiaro o Scuro). Puoi usarla come base per creare un tema tuo.",
    "when": "Quando vuoi realizzare un tema personale. Dai la copia a un'AI gratuita (ChatGPT, Claude) e chiedi di cambiare colori o disposizione.",
    "click": "Il browser salva il file del tema. Sul sito non cambia nulla.",
    "care": "I temi inclusi non possono essere modificati direttamente. Carica la copia modificata con un nome nuovo in **Carica un tema**, poi premi [[Usa questo tema]].",
    "like": "È come portare a casa un cartamodello per cucirti un vestito."
  },
  "help.skins.delete": {
    "t": "Elimina",
    "what": "Rimuove un tema che hai caricato o aggiunto dalla galleria. I temi inclusi (Chiaro e Scuro) non possono essere eliminati e mostrano invece [[Scarica (per modificare)]].",
    "when": "Quando un tema non ti serve più o hai raggiunto 20 temi e vuoi liberare spazio.",
    "click": "Prima chiede conferma, poi rimuove subito il tema. Se era quello in uso, il sito passa a Chiaro.",
    "care": "Non puoi annullarlo. Puoi aggiungere di nuovo un tema della galleria da **Esplora**. Un tema caricato da te si perde se non hai conservato il file.",
    "like": "È come buttare un vestito dall'armadio. Conserva il cartamodello se potresti volerlo ancora."
  },
  "help.skins.revert": {
    "t": "Torna al tema precedente",
    "what": "Ripristina il tema che usavi prima. Il pulsante ne mostra il nome.",
    "when": "Quando hai provato un tema nuovo e preferisci quello di prima.",
    "click": "La modifica si salva subito e i visitatori la vedono entro 30 secondi. Il tema che lasci diventa quello precedente, quindi premendo di nuovo puoi scambiarli.",
    "care": "Viene ricordato solo un passo indietro. Se il tema precedente è stato eliminato, il pulsante scompare.",
    "like": "È come togliere il vestito nuovo e rimettere quello di ieri."
  },
  "help.skins.title": {
    "t": "Temi",
    "what": "Il tema è il vestito del tuo sito: colori, caratteri e disposizione. Cambiarlo non tocca mai brani, album o impostazioni.",
    "when": "Vieni qui quando vuoi cambiare aspetto o quando esce una nuova versione di un tema che usi.",
    "click": "Questo è solo un titolo: i pulsanti sotto fanno le modifiche. Il sito ha sempre due temi inclusi, **Chiaro** e **Scuro**, e puoi conservarne fino a 20 altri.",
    "care": "I visitatori vedono un tema nuovo entro circa 30 secondi. Se elimini quello attivo, il sito torna a Chiaro.",
    "like": "È come cambiare colore delle pareti e scaffali al negozio. I dischi rimangono uguali."
  },
  "help.skins.view": {
    "t": "Installati / Esplora",
    "what": "Sono due viste della scheda Temi. **Installati** mostra quelli che hai già. **Esplora** apre la galleria per provare e aggiungere temi creati da altre persone.",
    "when": "Usa Installati per cambiare, aggiornare o eliminare temi e caricarne uno tuo. Usa Esplora per trovare un nuovo aspetto.",
    "click": "Cambia solo la schermata; sul sito non cambia nulla. Al primo accesso a Esplora viene caricato l'elenco dei temi.",
    "like": "Installati è il tuo armadio; Esplora è il negozio di vestiti accanto."
  },
  "help.skins.upload": {
    "t": "Carica un tema",
    "what": "Aggiunge un tema creato da te. È un unico file di pagina web (.html) conforme alla guida. Puoi fartelo creare da un'AI gratuita.",
    "when": "Quando vuoi un aspetto che non trovi nella galleria. Puoi partire da un tema incluso usando [[Scarica (per modificare)]].",
    "click": "Inserisci nome e file, poi premi [[Carica tema]]. Il tema appare nell'elenco ma non è ancora attivo. Premi [[Usa questo tema]] per applicarlo.",
    "care": "Il file viene controllato: massimo 100 KB, aree menu, contenuto e lettore presenti una volta ciascuna e scritta **Powered by aimusiclist.com** non nascosta. Non sono consentiti codici in movimento o immagini prese da altri siti.",
    "like": "È come cucire un vestito nuovo e appenderlo nel tuo armadio."
  },
  "help.skins.upload_name": {
    "t": "Nome del tema",
    "what": "È il nome del tema nell'elenco. Usa da 1 a 32 lettere minuscole (a–z), numeri, - o _.",
    "when": "Scrivilo prima del caricamento. Scegli un nome breve da ricordare, come my-blue.",
    "click": "Non viene salvato nulla finché non premi [[Carica tema]].",
    "care": "Maiuscole e spazi non sono consentiti. **light** e **dark** sono riservati ai temi inclusi. Se usi il nome di un tema esistente, lo sostituisci. Se è attivo, i visitatori vedono la nuova versione entro circa 30 secondi.",
    "like": "È come l'etichetta che cuci all'interno di un vestito."
  },
  "help.skins.upload_file": {
    "t": "File del tema",
    "what": "È il file del tema sul computer: un solo .html fino a 100 KB.",
    "when": "Sceglilo dopo aver creato o modificato un tema, per esempio con un'AI gratuita.",
    "click": "Seleziona soltanto il file. Non viene inviato nulla finché non premi [[Carica tema]].",
    "care": "Un solo file. Le immagini dentro il tema non devono provenire da altri siti. Se il file è troppo grande, chiedi all'AI di accorciarlo.",
    "like": "È come prendere il vestito finito prima di appenderlo nell'armadio."
  },
  "help.skins.upload_btn": {
    "t": "Carica tema",
    "what": "Invia e controlla il file del tuo tema.",
    "when": "Dopo aver scritto il nome e scelto il file.",
    "click": "Se qualcosa non va, un messaggio rosso dice cosa correggere e non salva nulla. Se passa, compare **Salvato** e il tema entra nell'elenco. Per applicarlo devi premere [[Usa questo tema]].",
    "care": "Puoi avere fino a 20 temi oltre Chiaro e Scuro. Se sono tutti occupati, eliminane uno. Caricando sopra il nome di un tema della galleria lo rendi personale, e smette di ricevere aggiornamenti.",
    "like": "È come il controllo di un ispettore prima che il vestito entri nell'armadio."
  },
  "help.skins.gallery": {
    "t": "Galleria dei temi",
    "what": "È una raccolta condivisa di temi pronti. Ogni scheda mostra immagine, autore, stile chiaro o scuro e versione. I più nuovi compaiono prima.",
    "when": "Quando vuoi un nuovo aspetto con un clic, senza doverlo creare.",
    "click": "Premi l'immagine o [[Anteprima]] per provarlo sul tuo sito. Premi [[Applica]] per aggiungerlo e attivarlo.",
    "care": "Se una scheda dice **Aggiorna il sito per usare questo tema.**, prima serve una versione più recente del programma.",
    "like": "È come un negozio di abiti dove puoi provare i vestiti sul tuo negozio prima di portarli a casa."
  },
  "help.skins.gal_reload": {
    "t": "Aggiorna",
    "what": "Ricarica l'elenco della galleria dei temi.",
    "when": "Quando potrebbero essere arrivati nuovi temi o l'elenco non si è caricato.",
    "click": "L'elenco si ricarica in un attimo. Vengono controllate anche le versioni nuove dei temi installati. Il tuo sito non cambia.",
    "care": "Se vedi **Al momento non possiamo caricare l'elenco dei temi.**, attendi un po' e premi [[Riprova]].",
    "like": "È come chiedere al negozio di vestiti il catalogo più recente."
  },
  "help.skins.gal_filter": {
    "t": "Filtri dei temi",
    "what": "Sono pulsanti che mostrano solo alcuni temi: **Tutti**, **Chiaro** (sfondo luminoso), **Scuro** (sfondo scuro) e parole con # che descrivono lo stile.",
    "when": "Quando nella galleria ci sono molti temi e cerchi un'atmosfera particolare.",
    "click": "Cambiano solo le schede mostrate. Premi **Tutti** per rivederle tutte. Non viene salvato nulla.",
    "care": "Una parola con # compare solo quando almeno due temi la usano. Se non ci sono risultati, vedi **Nessun tema corrisponde a questo filtro.**",
    "like": "È come trovare i cartelli in un negozio: giacche da questa parte, camicie dall'altra."
  },
  "help.skins.gal_preview": {
    "t": "Anteprima",
    "what": "Mostra il tuo sito con brani e profilo usando questo tema. Puoi anche premere l'immagine del tema.",
    "when": "Prima di applicarlo, per vedere come sta davvero sul sito.",
    "click": "Si apre una finestra. Non si salva nulla e i visitatori non vedono modifiche. Chiudi con [[Chiudi]] o Esc. Puoi applicare il tema dalla stessa finestra.",
    "care": "Nell'anteprima i brani non suonano e gli annunci non compaiono. Se una scheda dice **Aggiorna il sito per usare questo tema.**, prima devi aggiornare il sito.",
    "like": "È come un camerino: provi il vestito e puoi ancora rimetterlo a posto."
  },
  "help.skins.gal_apply": {
    "t": "Applica / Applica questo tema",
    "what": "Aggiunge e attiva in un clic questo tema della galleria. Lo trovi nella scheda del tema e nella finestra di anteprima.",
    "when": "Quando ti piace un tema e vuoi mostrarlo ai visitatori.",
    "click": "Il tema viene controllato, aggiunto a **Installati** e attivato subito. I visitatori lo vedono entro 30 secondi. Per tornare indietro premi [[Torna al tema precedente]].",
    "care": "Puoi avere 20 temi oltre Chiaro e Scuro. Se hai caricato un tema con lo stesso nome, viene chiesta conferma prima di sostituirlo. Un tema segnato **Aggiorna il sito per usare questo tema.** non può ancora essere applicato.",
    "like": "È come comprare un vestito e uscire dal negozio indossandolo."
  },
  "help.skins.pv_mode": {
    "t": "Computer / Telefono",
    "what": "Cambia le dimensioni dell'anteprima. **Computer** mostra uno schermo largo, **Telefono** uno schermo stretto.",
    "when": "Molti visitatori ascoltano dal telefono, quindi controlla entrambi prima di applicare il tema.",
    "click": "Cambia solo la dimensione dell'anteprima. Nulla viene salvato.",
    "like": "È come guardare la vetrina del negozio da lontano e poi da vicino."
  },
  "help.site.artist_del": {
    "t": "Elimina",
    "what": "Rimuove questo nome dall'elenco degli altri artisti.",
    "when": "Quando non vuoi più sceglierlo per i brani nuovi.",
    "click": "Prima chiede conferma, poi salva subito. I brani che usano già quel nome lo conservano. Scompare solo dall'elenco per i nuovi brani.",
    "care": "Per cambiare l'artista di un vecchio brano, modifica il brano stesso. Puoi aggiungere lo stesso nome più avanti.",
    "like": "È come togliere un cartellino dal cassetto: i dischi che lo portano continuano ad averlo."
  },
  "help.site.info": {
    "t": "Informazioni sul sito",
    "what": "Questa scheda contiene i dati di base: nome del sito, artista, lingua principale, breve descrizione, paese e testo in fondo alla pagina.",
    "when": "Compilala una volta all'inizio e torna qui se vuoi rinominare il sito o cambiare il modo in cui ti presenti.",
    "click": "Mentre scrivi non si salva nulla. Premi [[Salva informazioni sito]] in fondo per salvare tutta la scheda. Il sito cambia subito e aimusiclist.com riceve poco dopo nome e descrizione nuovi.",
    "care": "Le altre schede di questa sezione (social, riproduzioni, Mi piace, immagini…) si salvano da sole. Solo questa richiede il pulsante. Se esci senza premerlo, perdi il testo scritto.",
    "like": "È il modulo di registrazione del negozio: insegna sulla porta, presentazione breve e indirizzo."
  },
  "help.site.name": {
    "t": "Nome del sito",
    "what": "È il nome del tuo sito, da 1 a 40 caratteri. Appare come titolo grande e su aimusiclist.com sotto i brani; cliccandolo la gente visita il sito.",
    "when": "Sceglilo all'inizio. Cambialo solo quando vuoi davvero un nome nuovo, perché gli ascoltatori imparano a conoscerti così.",
    "click": "Si salva con [[Salva informazioni sito]]. Se il nome dell'artista era uguale a quello vecchio del sito, cambia anche quello.",
    "care": "Non puoi usare il nome di un cantante o gruppo famoso, né un nome che gli somiglia. Il salvataggio viene bloccato per i nomi conosciuti. Se un nome sfugge al controllo, il sito può essere rimosso da aimusiclist.",
    "like": "È l'insegna del negozio: al grande mercato (aimusiclist.com) i clienti la leggono per trovarti."
  },
  "help.site.artist": {
    "t": "Nome dell'artista",
    "what": "È il nome della persona o del gruppo che crea la musica sul sito. Può essere uguale al nome del sito o diverso.",
    "when": "Compilalo quando il tuo nome musicale è diverso da quello del sito. Per esempio, il sito si chiama My Music Room ma tu canti come Luna.",
    "click": "Si salva con [[Salva informazioni sito]]. Se è diverso dal nome del sito, i visitatori lo vedono sotto al nome nella pagina iniziale. Anche aimusiclist.com lo riceve entro uno o due minuti.",
    "care": "Massimo 40 caratteri. Non puoi usare il nome di un cantante o gruppo famoso, né uno simile. Se cambi il nome del sito e questa casella contiene ancora quello vecchio, cambia insieme a esso.",
    "like": "L'insegna mostra il nome del negozio; questo è il cartellino del musicista che lavora all'interno."
  },
  "help.site.lang": {
    "t": "Lingua principale del sito",
    "what": "È la lingua usata quando il sito non riesce a capire quale lingua vuole un visitatore. Anche aimusiclist.com la riceve.",
    "when": "Scegli quella letta dalla maggior parte dei tuoi visitatori o in cui scrivi le descrizioni.",
    "click": "Si salva con [[Salva informazioni sito]]. Ogni visitatore vede comunque la lingua del browser, se disponibile, o quella scelta da lui. Solo se nessuna delle due funziona vede questa.",
    "care": "Non cambia la lingua della pagina di amministrazione e non traduce automaticamente titoli o descrizioni scritti da te.",
    "like": "È la lingua del cartello di benvenuto. Chi parla un'altra lingua può sempre chiedere il menu nella propria."
  },
  "help.site.desc": {
    "t": "Breve descrizione",
    "what": "È una breve presentazione di te e della tua musica, fino a 200 caratteri. Appare sul sito e viene inviata ad aimusiclist.com insieme al nome.",
    "when": "Scrivi una o due frasi sul tipo di musica che crei. Puoi cambiarle quando vuoi.",
    "click": "Si salva con [[Salva informazioni sito]]. Poco dopo aimusiclist.com riceve il testo nuovo. Lascia vuoto per non mostrare alcuna descrizione.",
    "care": "Usa parole brevi e semplici. Non presentarti col nome di un cantante famoso, per esempio «il nuovo [nome famoso]».",
    "like": "È il piccolo cartello sotto l'insegna che dice ai passanti cosa vendi."
  },
  "help.site.footer": {
    "t": "Testo in fondo alla pagina",
    "what": "Una riga di testo in fondo a ogni pagina del sito, fino a 200 caratteri. Solo testo, senza immagini o link.",
    "when": "Usala per una breve nota, come un avviso di copyright o un ringraziamento.",
    "click": "Si salva quando premi [[Salva informazioni sito]] e appare subito sul sito. Se la lasci vuota, il sito mostra «© anno corrente + nome del sito». Se scrivi {year}, diventa automaticamente il numero dell'anno corrente.",
    "care": "Le interruzioni di riga vengono trasformate in spazi. La scritta «Powered by aimusiclist.com» accanto rimane sempre: non puoi eliminarla da questa casella.",
    "like": "È la piccola riga stampata in fondo allo scontrino del negozio."
  },
  "help.site.save": {
    "t": "Salva informazioni sito",
    "what": "Salva insieme tutto quello che hai inserito nella scheda Informazioni sul sito: nomi, lingua, descrizione, paese, testo in fondo e dati aggiuntivi.",
    "when": "Premi dopo aver cambiato qualcosa in questa scheda.",
    "click": "Le modifiche appaiono subito sul sito. aimusiclist.com riceve poco dopo il nome e la descrizione aggiornati. Se qualcosa non va, un messaggio rosso compare vicino al pulsante e non si salva nulla.",
    "care": "Il salvataggio viene bloccato se un nome modificato corrisponde a quello di un musicista famoso. Scegli un altro nome e riprova.",
    "like": "È il timbro sul modulo di registrazione del negozio. Finché non lo metti, i cambiamenti sono solo una bozza."
  },
  "help.site.artists": {
    "t": "Altri artisti",
    "what": "È un elenco di nomi d'artista aggiuntivi da scegliere per i brani. Se non ne scegli nessuno, il brano usa come artista il nome del sito.",
    "when": "Usalo quando sullo stesso sito ci sono brani pubblicati con nomi diversi, per esempio come duo o progetto parallelo.",
    "click": "I nomi aggiunti qui compaiono nella scelta dell'artista quando carichi o modifichi un brano o un album. L'artista compare sul tuo sito e su aimusiclist.com.",
    "care": "Puoi conservare fino a 20 nomi. Quando l'elenco è pieno, il pulsante Aggiungi diventa grigio. Non puoi usare nomi di cantanti famosi.",
    "like": "Un solo negozio, ma tanti cartellini con nomi diversi nel cassetto. Su ogni disco metti quello di chi l'ha creato."
  },
  "help.site.artist_add": {
    "t": "Aggiungi",
    "what": "Inserisce nell'elenco degli altri artisti il nome che hai scritto.",
    "when": "Scrivi un nuovo nome d'artista nella casella a sinistra, poi premi.",
    "click": "Si salva subito. Da ora potrai scegliere questo nome quando carichi o modifichi le canzoni.",
    "care": "Massimo 60 caratteri. Non vengono aggiunti i nomi già presenti o uguali al nome del sito. I nomi di cantanti o gruppi famosi vengono rifiutati.",
    "like": "È come preparare un cartellino con un nuovo nome e metterlo nel cassetto."
  },
  "help.site.account": {
    "t": "Account amministratore",
    "what": "Sono l'email e la password usate per accedere alla pagina di amministrazione. La riga in alto mostra l'email attuale.",
    "when": "Usalo per cambiare l'email di accesso o la password.",
    "click": "Nulla cambia finché non compili le caselle, inserisci la password attuale e premi [[Salva account]].",
    "care": "Su un sito meshmelo puoi modificare l'email solo nel tuo account meshmelo, quindi qui la casella non compare.",
    "like": "È la chiave della porta sul retro del negozio. Dovresti averla soltanto tu."
  },
  "help.site.account_email": {
    "t": "Nuova email (facoltativa)",
    "what": "È un nuovo indirizzo email da usare per accedere. Lascialo vuoto per conservare quello attuale.",
    "when": "Quando smetti di usare la vecchia email o preferisci accedere con un'altra.",
    "click": "Cambia solo dopo che inserisci la password attuale e premi [[Salva account]]. Dal prossimo accesso usa la nuova email.",
    "care": "Controlla bene come la scrivi. Se l'indirizzo è sbagliato, diventa difficile accedere. Questa casella non compare nei siti meshmelo.",
    "like": "È come cambiare il nome scritto sulla chiave della porta sul retro."
  },
  "help.site.account_pw": {
    "t": "Nuova password (facoltativa)",
    "what": "È una nuova password per questa pagina di amministrazione. Lasciala vuota per conservare quella precedente.",
    "when": "Quando pensi che qualcun altro conosca la password o vuoi semplicemente cambiarla.",
    "click": "Cambia dopo averla ripetuta nella casella successiva, inserito la password attuale e premuto [[Salva account]]. Gli altri telefoni e computer vengono disconnessi; questo resta collegato.",
    "care": "Almeno 6 caratteri. Conservala in un posto sicuro. Su meshmelo, anche il tuo account meshmelo riceve la stessa nuova password.",
    "like": "È come cambiare la serratura sul retro: le vecchie copie della chiave smettono di funzionare."
  },
  "help.site.account_pw2": {
    "t": "Ripeti la nuova password",
    "what": "Scrivi ancora una volta la stessa password nuova.",
    "when": "Ogni volta che compili la casella della nuova password.",
    "click": "Premendo [[Salva account]] vengono confrontate le due caselle. Se sono diverse, non viene salvato nulla e compare un messaggio.",
    "care": "Serve a evitare errori di battitura. Se non ricordi cosa hai scritto, svuota entrambe le caselle e riscrivi lentamente.",
    "like": "È come provare la chiave nuova nella serratura prima di tornare a casa."
  },
  "help.site.account_cur": {
    "t": "Password attuale (obbligatoria per modificare)",
    "what": "È la password che usi ora. Prima di cambiare email o password, dimostra che sei davvero tu.",
    "when": "Inseriscila sempre quando cambi l'email o la password.",
    "click": "Scriverla qui non basta: viene controllata quando premi [[Salva account]].",
    "care": "Dopo 5 tentativi errati, le modifiche sono bloccate per 15 minuti. Se l'hai dimenticata, apri [[Hai dimenticato la password?]] qui sotto.",
    "like": "È come mostrare la vecchia chiave al fabbro prima che te ne faccia una nuova."
  },
  "help.site.account_save": {
    "t": "Salva account",
    "what": "Salva la nuova email e/o la nuova password che hai scritto sopra.",
    "when": "Dopo aver compilato ciò che vuoi cambiare e inserito la password attuale.",
    "click": "Si salva subito. Una nuova password disconnette gli altri telefoni e computer, ma non questo. Se entrambe le caselle nuove sono vuote, non succede niente.",
    "care": "La chiave di utilizzo non viene salvata qui. Ha il proprio pulsante [[Salva chiave]] più in basso.",
    "like": "È come consegnare la chiave nuova al fabbro e dirgli di cambiare la serratura."
  },
  "help.site.forgot": {
    "t": "Hai dimenticato la password?",
    "what": "Spiega come tornare nella pagina di amministrazione se non ricordi la password. Premi il titolo per vedere i passaggi.",
    "when": "Quando non riesci ad accedere o la casella della password attuale continua a indicare un errore.",
    "click": "Aprire la guida non modifica nulla. Mostra soltanto i passaggi, diversi in base al sito: su Cloudflare, nel gestore file dell'hosting o tramite email su meshmelo.",
    "care": "Segui i passaggi esattamente ed elimina solo ciò che indicano. Brani, album e collegamento ad aimusiclist.com restano invariati.",
    "like": "È una guida alla chiave di riserva, appesa nel negozio per il giorno in cui perdi la tua."
  },
  "help.site.token_open": {
    "t": "Creala su Cloudflare",
    "what": "Apre in una nuova scheda la pagina Cloudflare in cui crei la chiave di utilizzo. La maggior parte delle caselle è già compilata.",
    "when": "È il primo passaggio per creare la chiave. Premi se non ne hai ancora una.",
    "click": "Cloudflare apre [[Create Token]]. Accedi se richiesto. Qui non viene salvato nulla finché non torni, incolli la chiave e premi [[Salva chiave]].",
    "care": "Cloudflare mostra la chiave una sola volta. Premi subito [[Copy]]. Se le autorizzazioni sono vuote, aggiungi le due righe indicate nella guida.",
    "like": "È come andare dal ferramenta con un biglietto che dice già quale chiave ti serve."
  },
  "help.site.token": {
    "t": "Visualizza utilizzo (facoltativo)",
    "what": "Qui puoi salvare una chiave di utilizzo di Cloudflare. Permette di vedere in alto i dati della quota gratuita usata.",
    "when": "Quando vuoi sapere quanta quota gratuita stai usando, per esempio per lo spazio e le riproduzioni.",
    "click": "Appena salvi la chiave, il riquadro di utilizzo in alto si riempie. Salvare la chiave non ti disconnette.",
    "care": "Crea la chiave nello stesso account Cloudflare che conserva i brani. Una chiave di un altro account non può leggere i numeri. Senza chiave, il sito funziona comunque: semplicemente non vedi i dati.",
    "like": "È una chiave per leggere il contatore elettrico: ti permette soltanto di guardare i numeri."
  },
  "help.site.token_change": {
    "t": "Cambia",
    "what": "Hai già salvato una chiave. Ne vengono mostrati solo l'inizio e la fine, per impedire ad altri di copiarla. Con questo pulsante puoi inserirne un'altra.",
    "when": "Quando i dati di utilizzo non compaiono più, hai eliminato la chiave su Cloudflare o hai spostato i brani in un altro account.",
    "click": "Si apre la casella della chiave. Quella vecchia resta attiva finché non ne salvi una nuova. Premi [[Annulla]] per conservarla.",
    "care": "Se un avviso rosso dice che l'archivio dei brani si trova in un altro account, crea la nuova chiave proprio in quell'account.",
    "like": "È come sostituire la chiave del contatore. La vecchia funziona finché non consegni la nuova."
  },
  "help.site.token_input": {
    "t": "Chiave di utilizzo",
    "what": "È la casella in cui incolli la chiave copiata da Cloudflare. I caratteri vengono nascosti mentre la inserisci.",
    "when": "Subito dopo aver creato la chiave su Cloudflare e premuto [[Copy]].",
    "click": "Incollare non salva nulla. Premi [[Salva chiave]] accanto.",
    "care": "Incolla la chiave intera, senza spazi. Può soltanto leggere dati e nome dell'account, non modificare o eliminare nulla. Comunque non condividerla.",
    "like": "È la fessura in cui inserisci la chiave per leggere il contatore."
  },
  "help.site.token_save": {
    "t": "Salva chiave",
    "what": "Controlla la chiave tramite Cloudflare e la salva.",
    "when": "Dopo aver incollato la chiave di utilizzo nella casella.",
    "click": "Prima verifica la chiave. Se funziona, la salva e i dati di utilizzo appaiono subito in alto. Rimani collegato. Se qualcosa non va, un messaggio rosso spiega cosa correggere.",
    "care": "Se la chiave non vede l'elenco degli account, una nuova casella chiede il tuo Cloudflare Account ID. Inseriscilo e riprova. Una chiave di un altro account Cloudflare viene rifiutata.",
    "like": "È come provare la chiave nella scatola del contatore: se gira, la lasci lì."
  },
  "help.site.token_account_id": {
    "t": "Cloudflare Account ID (solo se richiesto)",
    "what": "È il numero del tuo account Cloudflare, lungo 32 lettere e cifre. Compare soltanto se la chiave non trova automaticamente l'account.",
    "when": "Quando durante il salvataggio appare un messaggio che dice che la chiave non può vedere l'elenco degli account. Succede se ha una sola autorizzazione invece di due.",
    "click": "Inserisci il numero e premi ancora [[Salva chiave]]. Se numero e chiave corrispondono, viene salvata.",
    "care": "Usa solo 0–9 e a–f, per esattamente 32 caratteri. Spesso è più semplice ricreare la chiave con [[Creala su Cloudflare]], così entrambe le autorizzazioni sono compilate.",
    "like": "È come scrivere il numero civico sulla chiave del contatore perché da sola non trova la casa."
  },
  "help.site.token_howto": {
    "t": "Come creare la chiave di utilizzo (2 minuti)",
    "what": "È una guida passo passo per creare la chiave di utilizzo su Cloudflare. Premi il titolo per aprirla o chiuderla.",
    "when": "La prima volta che crei una chiave o quando i numeri in alto non compaiono più.",
    "click": "Aprirla non cambia nulla. Resta aperta finché non salvi una chiave, poi si richiude.",
    "care": "Servono due autorizzazioni: Account Analytics Read e Account Settings Read. Cloudflare mostra la chiave una sola volta, quindi copiala subito.",
    "like": "È una piccola mappa per arrivare al negozio delle chiavi, con il bancone segnato."
  },
  "help.site.mm_r2": {
    "t": "Archivio dei brani (R2)",
    "what": "Mostra dove vengono conservati i tuoi brani e le immagini: nome dell'archivio e numero del tuo account Cloudflare. È uno spazio tuo, non di meshmelo.",
    "when": "Controllalo per sapere quali account Cloudflare e archivio usa il sito.",
    "click": "Questa scheda mostra soltanto informazioni. Per cambiarle usa [[Cambia archivio]].",
    "care": "Non eliminare l'archivio su Cloudflare: i tuoi brani smetterebbero di funzionare ovunque.",
    "like": "È l'indirizzo del tuo magazzino, dove conservi tutti i dischi del negozio."
  },
  "help.site.mm_r2_change": {
    "t": "Cambia archivio",
    "what": "Apre la tua pagina meshmelo in una nuova scheda. Da lì puoi passare a un altro archivio o a un altro account Cloudflare.",
    "when": "Quando sposti i brani in un archivio nuovo o in un altro account Cloudflare.",
    "click": "Si apre soltanto una nuova scheda. Nulla cambia prima che completi i passaggi su meshmelo.",
    "care": "Hai cambiato account Cloudflare? Crea anche una nuova chiave di utilizzo in quell'account e salvala nella scheda qui sotto. La vecchia chiave non può leggere il nuovo account.",
    "like": "È come chiamare una ditta di traslochi per portare i tuoi dischi in un nuovo magazzino."
  },
  "help.site.mm_card": {
    "t": "Il tuo sito meshmelo",
    "what": "Il sito si trova su meshmelo, ma brani e immagini sono nel tuo archivio personale. Da questa scheda puoi portare via il sito o chiuderlo.",
    "when": "Quando vuoi una copia di sicurezza, trasferirti sul tuo hosting o smettere di usare meshmelo.",
    "click": "La scheda non fa nulla da sola. Usa [[Esporta il mio sito]] per scaricare una copia o [[Il mio account meshmelo]] per aprire la pagina meshmelo.",
    "like": "Affitti uno spazio in un centro commerciale, ma i dischi nel magazzino sono tuoi. Puoi impacchettare tutto e traslocare quando vuoi."
  },
  "help.site.mm_export": {
    "t": "Esporta il mio sito",
    "what": "Scarica un unico file zip con elenco dei brani, album, impostazioni, temi e libro degli ospiti. Audio e immagini non sono inclusi perché si trovano già nel tuo archivio.",
    "when": "Per conservare una copia ogni tanto o prima di trasferire il sito sul tuo hosting.",
    "click": "Il download parte subito. Sul sito non cambia nulla.",
    "care": "Conserva il file in privato: contiene dati di accesso e il segreto che collega il sito ad aimusiclist.com. Puoi esportare anche se il sito è sospeso.",
    "like": "È come fotocopiare tutto il quaderno del negozio per poterlo riaprire altrove."
  },
  "help.site.mm_delete": {
    "t": "Elimina il mio sito",
    "what": "Chiude definitivamente il tuo sito su meshmelo, eliminando pagine, impostazioni ed elenco dei brani. Premi il titolo per aprire il riquadro di eliminazione.",
    "when": "Solo se vuoi davvero smettere. Se vuoi trasferirti, prima premi [[Esporta il mio sito]].",
    "click": "Aprire il riquadro non modifica nulla. Per eliminare devi scrivere il nome del sito e la password, poi premere il pulsante rosso.",
    "care": "Non si può annullare. I brani scompaiono subito da aimusiclist.com. I file nel tuo archivio non vengono toccati. Il nome del sito non sarà più assegnato ad altri.",
    "like": "È come restituire la chiave del negozio affittato. I dischi nel tuo magazzino restano tuoi."
  },
  "help.site.mm_delete_name": {
    "t": "Scrivi il nome del sito per confermare",
    "what": "Scrivi qui il nome esatto del sito, come lo vedi sullo schermo, per confermare che vuoi davvero eliminarlo.",
    "when": "Solo mentre elimini il sito.",
    "click": "Scriverlo non basta: viene controllato quando premi il pulsante rosso di eliminazione.",
    "care": "Deve coincidere lettera per lettera. Se è diverso, non viene eliminato nulla e appare un messaggio.",
    "like": "È come firmare col tuo nome il modulo che chiude il negozio."
  },
  "help.site.mm_delete_btn": {
    "t": "Elimina il mio sito",
    "what": "È l'ultimo pulsante, quello che elimina davvero il tuo sito meshmelo.",
    "when": "Dopo aver scritto sopra il nome del sito e la password attuale.",
    "click": "Chiede ancora una conferma. Se rispondi sì, il sito viene eliminato subito, la sessione termina e si apre la tua pagina meshmelo.",
    "care": "Non puoi annullare. Esporta prima, se in futuro potrebbe servirti qualcosa. Dopo 5 password errate, devi aspettare un'ora.",
    "like": "È come spegnere le luci del negozio e chiudere la porta per l'ultima volta."
  },
  "help.site.images": {
    "t": "Banner e foto del profilo",
    "what": "Sono due immagini del sito: un banner largo in alto e una foto rotonda per il profilo.",
    "when": "Aggiungile per rendere il sito più personale. Puoi cambiarle quando vuoi.",
    "click": "Ogni immagine viene salvata appena la scegli e premi Salva nella finestra di modifica. Questa scheda non ha un pulsante separato.",
    "care": "Puoi scegliere un'immagine fino a 2 MB (JPG, PNG, WebP o GIF). Viene caricata solo la copia finale ridotta, non l'originale.",
    "like": "Sono la tenda sopra la porta del negozio e la foto del proprietario vicino al bancone."
  },
  "help.site.banner": {
    "t": "Banner superiore",
    "what": "È un'immagine larga sopra il titolo del sito, fino a 1600×400.",
    "when": "Usa una foto larga e bassa, come un paesaggio o un'illustrazione orizzontale.",
    "click": "Premi [[Scegli immagine]]. Nella finestra puoi spostare la cornice per ritagliare o rimpicciolire tutta la foto conservandone la forma. Premi [[Salva immagine]] per mostrarla subito sul sito.",
    "care": "Viene salvata come immagine leggera di massimo 300 KB. Le foto alte vengono tagliate molto, quindi funzionano meglio quelle larghe. Se non ne aggiungi una, lo spazio del banner non compare.",
    "like": "È la grande tenda colorata sopra la vetrina del negozio."
  },
  "help.site.image_choose": {
    "t": "Scegli immagine",
    "what": "Apre le immagini del dispositivo per scegliere il banner o la foto del profilo.",
    "when": "Premi per aggiungere un'immagine per la prima volta o sostituire quella attuale.",
    "click": "Dopo la scelta si apre una finestra di modifica. Nulla cambia prima che tu prema il pulsante di salvataggio ([[Salva immagine]] per il banner, [[Applica]] per il profilo). La foto nuova sostituisce subito quella vecchia.",
    "care": "Scegli JPG, PNG, WebP o GIF entro 2 MB. Le GIF animate diventano immagini ferme. Se il browser non riesce a elaborare la foto, usa Chrome, Edge o Firefox.",
    "like": "È come tirare fuori dalla borsa una foto nuova da mettere nella cornice del negozio."
  },
  "help.site.image_delete": {
    "t": "Rimuovi",
    "what": "Toglie dal sito il banner o la foto del profilo.",
    "when": "Quando preferisci non mostrare alcuna immagine in quel punto.",
    "click": "Viene chiesta una conferma. Se dici sì, la foto scompare subito dal sito. Se elimini la foto del profilo, poco dopo scompare anche da aimusiclist.com.",
    "care": "Non puoi annullare. Per rimettere una foto scegli nuovamente [[Scegli immagine]]. Non devi rimuovere la vecchia foto prima di cambiarla: basta sceglierne un'altra.",
    "like": "È come togliere la foto dalla cornice del negozio e lasciare la cornice vuota."
  },
  "help.site.profile": {
    "t": "Foto del profilo",
    "what": "È la tua foto o il tuo logo, 400×400, mostrato in un cerchio. aimusiclist.com lo mostra anche in «Nuovi artisti» e accanto al sito.",
    "when": "Aggiungi un volto o un logo nitido e riconoscibile anche quando è piccolo.",
    "click": "Premi [[Scegli immagine]]. Trascina la foto, ingrandiscila o ruotala, poi premi [[Applica]]. Viene salvata subito. Il sito sceglie anche un colore di sfondo abbinato. aimusiclist.com riceve la nuova foto poco dopo.",
    "care": "Gli angoli vengono tagliati dal cerchio, quindi tieni al centro la parte importante. La foto viene salvata in una versione leggera fino a 100 KB.",
    "like": "È la foto del proprietario sul biglietto da visita, distribuito anche al grande mercato."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Ti permette di mostrare annunci Google sul sito e guadagnare. Inserisci soltanto i numeri del tuo account AdSense: il sito crea gli annunci da solo.",
    "when": "Usalo dopo che Google ha approvato il sito su AdSense.",
    "click": "Compila le caselle, seleziona [[Mostra annunci sul sito]] e premi [[Salva AdSense]]. Gli annunci appaiono soltanto sul sito, mai in questa pagina di amministrazione.",
    "care": "Google approva solo siti con un indirizzo personale. Se usi ancora un indirizzo workers.dev, collega prima un dominio nella scheda Il mio dominio. Non incollare qui il codice degli annunci, ma solo gli ID.",
    "like": "È come affittare un piccolo spazio nella vetrina a un inserzionista che ti paga."
  },
  "help.site.ads_client": {
    "t": "ID editore (ca-pub-…)",
    "what": "È il tuo numero personale AdSense. Inizia con ca-pub- e prosegue con 16 cifre.",
    "when": "Trovalo nel tuo account AdSense e copialo qui. Senza questo numero non può apparire alcun annuncio.",
    "click": "Si salva quando premi [[Salva AdSense]]. Crea automaticamente anche la pagina ads.txt.",
    "care": "Copialo esattamente: ca-pub- seguito da 16 cifre, senza altro. Se il formato è diverso, appare un messaggio rosso e non si salva nulla.",
    "like": "È il numero del tuo conto presso la società pubblicitaria: indica a chi appartiene lo spazio degli annunci."
  },
  "help.site.ads_top": {
    "t": "ID unità pubblicitaria superiore",
    "what": "È il numero dello spazio pubblicitario che appare nella parte alta del sito, subito sotto il banner.",
    "when": "Crea un'unità pubblicitaria nel tuo account AdSense e copia qui il numero.",
    "click": "Si salva con [[Salva AdSense]]. Se lo lasci vuoto, in alto non appare alcun annuncio.",
    "care": "Solo numeri, da 6 a 20 cifre. Non incollare il codice pubblicitario completo.",
    "like": "È il numero della cornice del manifesto appesa sotto la tenda del negozio."
  },
  "help.site.ads_left": {
    "t": "ID unità pubblicitaria sinistra (facoltativo)",
    "what": "È il numero di un secondo spazio per gli annunci nella colonna sinistra del sito.",
    "when": "Compilalo solo se il tema ha una colonna a sinistra, per esempio quello scuro.",
    "click": "Si salva con [[Salva AdSense]]. Se il tema non ha la colonna sinistra, questo annuncio non appare anche se inserisci un numero.",
    "care": "Solo numeri, da 6 a 20 cifre. Se in seguito scegli un tema senza colonna sinistra, l'annuncio sparisce da solo.",
    "like": "È una seconda cornice pubblicitaria, che trova posto solo nei negozi con una parete laterale."
  },
  "help.site.ads_on": {
    "t": "Mostra annunci sul sito",
    "what": "È l'interruttore per attivare o disattivare tutti gli annunci del sito.",
    "when": "Selezionalo quando gli ID sono pronti. Deselezionalo per sospendere gli annunci senza perdere gli ID.",
    "click": "Nulla cambia finché non premi [[Salva AdSense]]. Dopo il salvataggio, gli annunci appaiono entro 30 secondi oppure scompaiono se li hai disattivati.",
    "care": "Non puoi attivarlo senza un ID editore. Gli ID rimangono nelle caselle anche quando gli annunci sono spenti.",
    "like": "È l'interruttore della luce per le cornici pubblicitarie in vetrina."
  },
  "help.site.ads_save": {
    "t": "Salva AdSense",
    "what": "Salva tutto ciò che hai inserito nella scheda Google AdSense: i tre ID e la scelta di mostrare gli annunci.",
    "when": "Premi dopo aver modificato qualcosa in questa scheda.",
    "click": "Prima vengono controllati i numeri. Se uno sembra sbagliato, compare un messaggio rosso e non si salva nulla. Se è tutto corretto, gli annunci appaiono o si fermano entro 30 secondi.",
    "care": "Gli spazi possono restare vuoti per un po' anche dopo il salvataggio: è Google a decidere. Se non appaiono mai, controlla il tuo account AdSense.",
    "like": "È come consegnare all'inserzionista il contratto firmato per i manifesti."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "È una piccola pagina che Google controlla per verificare che gli annunci sul sito siano davvero tuoi. Il sito la crea automaticamente dall'ID editore.",
    "when": "Non devi fare nulla. Apri il link se AdSense ti chiede di controllare questa pagina.",
    "click": "Il link apre la pagina in una nuova scheda. Contiene una riga con il tuo ID editore. Qui non puoi modificarla: segue l'ID che hai salvato.",
    "care": "Se non hai salvato un ID editore, la pagina è vuota. Se lo cambi, Google potrebbe impiegare un po' a riconoscerlo.",
    "like": "È il permesso esposto nella vetrina che dimostra che i manifesti sono autorizzati."
  },
  "help.site.country": {
    "t": "Paese in cui sei attivo",
    "what": "È il paese in cui crei musica. aimusiclist.com lo usa per inserirti nella classifica degli artisti di quel paese.",
    "when": "Sceglilo se vuoi apparire anche nella classifica del tuo paese. È facoltativo.",
    "click": "Si salva con [[Salva informazioni sito]]. Se lasci «— Non impostato —», compari soltanto nella classifica globale.",
    "care": "Scegli un solo paese, quello in cui lavori davvero. Puoi cambiarlo più avanti.",
    "like": "È la bandiera del tuo paese sulla bancarella del grande mercato (aimusiclist.com), così le persone del posto ti trovano."
  },
  "help.site.fields": {
    "t": "Campi aggiuntivi (da aimusiclist.com)",
    "what": "Mostra quale elenco di caselle aggiuntive (per esempio Atmosfera) il sito ha ricevuto da aimusiclist.com. Compaiono in «Informazioni aggiuntive» durante il caricamento o la modifica dei brani e in Informazioni sul sito.",
    "when": "Controlla qui se ti chiedi perché sia comparsa una casella nuova o ne manchi una prevista.",
    "click": "La scheda mostra soltanto lo stato: versione dell'elenco, numero di caselle e ultimo controllo. Il sito controlla automaticamente una volta al giorno, quindi non devi fare nulla.",
    "care": "Se il nuovo elenco non arriva, un messaggio rosso spiega perché. Il sito continua a usare l'ultimo elenco valido e i caricamenti funzionano come prima.",
    "like": "È il modulo che il grande mercato (aimusiclist.com) invia ai negozi per dire quali etichette mettere sui dischi."
  },
  "help.site.fields_update": {
    "t": "Aggiorna campi",
    "what": "Chiede subito ad aimusiclist.com l'elenco più recente delle caselle aggiuntive, senza aspettare il controllo giornaliero.",
    "when": "Premi quando aimusiclist.com annuncia un campo nuovo e vuoi usarlo oggi.",
    "click": "Un breve messaggio indica il risultato: aggiornato (con la versione nuova), già aggiornato o motivo dell'errore. Se l'elenco cambia, la schermata si aggiorna con le nuove caselle.",
    "care": "Puoi premerlo una volta al minuto. Se riprovi troppo presto, ti viene detto quanti secondi attendere. Le risposte nei campi vecchi non vanno mai perse.",
    "like": "È come telefonare al grande mercato per chiedere «C'è un modulo nuovo?» anziché aspettare la posta."
  },
  "help.site.sns": {
    "t": "Social network (SNS)",
    "what": "Sono i tuoi indirizzi social. Le prime cinque caselle sono fisse: YouTube, Instagram, TikTok, Facebook e X.",
    "when": "Aggiungi i luoghi dove pubblichi musica o parli con i fan. Lascia vuoto quello che non usi.",
    "click": "Scrivi l'indirizzo completo che inizia con https:// e fai clic fuori dalla casella. Si salva automaticamente. I visitatori li trovano nella pagina «Link» del sito. aimusiclist.com mostra piccole icone accanto ai brani. Svuota una casella per rimuovere il link.",
    "care": "L'indirizzo deve appartenere al social indicato: per esempio YouTube accetta solo link YouTube. Massimo 200 caratteri. Un link errato diventa rosso e non viene salvato; resta l'ultimo corretto.",
    "like": "È il cartello accanto alla porta: «Puoi trovarci anche qui»."
  },
  "help.site.sns_tools": {
    "t": "Su · Giù · Rimuovi",
    "what": "Sono i pulsanti di ogni riga «Altri social». [[Su]] e [[Giù]] cambiano l'ordine; [[Rimuovi]] elimina la riga.",
    "when": "Usali per mettere i social più importanti all'inizio o togliere quelli che non usi.",
    "click": "Si salva subito e la pagina «Link» mostra il nuovo ordine. [[Rimuovi]] elimina la riga senza chiedere conferma.",
    "care": "Un indirizzo rimosso si perde. Per recuperarlo aggiungi di nuovo la riga e riscrivi il link. Le cinque caselle fisse non possono essere spostate e restano sempre all'inizio.",
    "like": "È come spostare i biglietti sulla bacheca vicino alla porta o staccarne uno."
  },
  "help.site.sns_more": {
    "t": "Altri social network",
    "what": "Hai spazio per altri 5 social oltre ai cinque fissi, per esempio SoundCloud, Spotify, Threads o Discord.",
    "when": "Usalo quando sei attivo su servizi diversi dai cinque principali.",
    "click": "In ogni riga scegli prima il servizio dall'elenco, poi scrivi il suo indirizzo. Si salva quando fai clic fuori. Appaiono nella pagina «Link» nello stesso ordine; su aimusiclist.com condividono tutti un'icona 🔗.",
    "care": "Puoi scegliere ogni servizio una volta sola. La casella dell'indirizzo resta bloccata finché non scegli il servizio. Se cambi servizio nella riga, il link salvato viene cancellato e devi riscriverlo.",
    "like": "È lo spazio in più sulla bacheca, dedicato ad altri posti in cui la gente può trovarti."
  },
  "help.site.sns_add": {
    "t": "+ Aggiungi un altro social",
    "what": "Aggiunge una riga vuota sotto «Altri social».",
    "when": "Premi quando vuoi aggiungere un servizio diverso dai cinque fissi.",
    "click": "Compare una riga nuova pronta per scegliere il servizio. Non si salva nulla finché non scegli il servizio e inserisci il link. Se hai già 5 righe, il pulsante diventa grigio.",
    "care": "Una riga lasciata vuota non viene salvata. Scompare alla prossima apertura della pagina.",
    "like": "È come appuntare un biglietto bianco sulla bacheca vicino alla porta, pronto per scriverci."
  },
  "help.site.sns_view": {
    "t": "Visualizza la pagina Link",
    "what": "Apre la pagina «Link» del sito, dove i visitatori vedono tutti i tuoi social.",
    "when": "Usalo per controllare come appare l'elenco ai visitatori.",
    "click": "La pagina si apre in una nuova scheda. Qui non cambia nulla. Il pulsante compare soltanto dopo che hai salvato almeno un link social.",
    "like": "È come uscire per guardare la bacheca accanto alla porta con gli occhi dei clienti."
  },
  "help.guestbook.title": {
    "t": "Libro degli ospiti",
    "what": "È una parte del sito in cui i visitatori possono lasciarti messaggi brevi, sul sito intero o su una canzone.",
    "when": "Quando vuoi ascoltare i tuoi visitatori o leggere ed eliminare i messaggi.",
    "click": "Questo è solo un titolo. Usa [[Apri il libro degli ospiti]] per attivarlo o disattivarlo e l'elenco qui sotto per leggere ed eliminare i messaggi.",
    "like": "È come un quaderno all'ingresso del negozio in cui gli ospiti scrivono qualcosa di gentile."
  },
  "help.guestbook.on": {
    "t": "Apri il libro degli ospiti",
    "what": "Attiva o disattiva il libro degli ospiti per i visitatori. Quando è attivo, vedono **Libro degli ospiti** nel menu e un pulsante 💬 accanto a ogni canzone.",
    "when": "Attivalo per ricevere messaggi dagli ascoltatori. Disattivalo se arrivano troppi messaggi indesiderati o vuoi una pausa.",
    "click": "Si salva subito. I visitatori vedono il cambiamento entro circa 30 secondi. Puoi riattivarlo quando vuoi.",
    "care": "Disattivarlo lo nasconde soltanto. I messaggi vecchi restano e puoi continuare a leggerli ed eliminarli qui.",
    "like": "È come lasciare il quaderno all'ingresso o riportarlo dentro per un po'."
  },
  "help.guestbook.list": {
    "t": "Messaggi",
    "what": "Sono tutti i messaggi del libro degli ospiti, dai più recenti, 20 per pagina. Ogni messaggio mostra nome, ora e brano a cui si riferisce (♪). Il numero accanto al titolo è il totale.",
    "when": "Controlla ogni tanto per leggere i nuovi messaggi e togliere quelli sgradevoli.",
    "click": "Usa i pulsanti delle pagine in basso per vedere i più vecchi. Qui non puoi modificare o rispondere, soltanto eliminare.",
    "care": "I visitatori possono scrivere nomi fino a 20 caratteri e messaggi fino a 500, senza link, massimo 50 al giorno per persona. I messaggi restano finché non li elimini, anche quando il libro è chiuso. **Brano eliminato** significa che quella canzone è stata rimossa.",
    "like": "È come sfogliare il quaderno all'ingresso, partendo dall'ultima pagina."
  },
  "help.guestbook.delete": {
    "t": "Elimina",
    "what": "Rimuove un messaggio dal libro degli ospiti.",
    "when": "Per messaggi offensivi, spam o testi che non vuoi mostrare ai visitatori.",
    "click": "Ti viene chiesta conferma. Poi il messaggio sparisce subito dal sito e l'elenco si aggiorna.",
    "care": "Non si può annullare. Eliminare un messaggio non impedisce alla stessa persona di scrivere ancora.",
    "like": "È come strappare una pagina dal quaderno all'ingresso del negozio."
  },
  "help.domain.mm": {
    "t": "Il mio dominio",
    "what": "Mostra l'indirizzo attuale del sito. Siccome il sito è su meshmelo, il dominio personale va collegato nel portale meshmelo, non qui.",
    "when": "Quando vuoi controllare il tuo indirizzo o usare un dominio personale come mymusic.com.",
    "click": "Qui non c'è un pulsante. Vai a my.meshmelo.com → Il mio sito → Il mio dominio. Se ancora non lo vedi, sarà disponibile presto.",
    "care": "L'indirizzo attuale continua a funzionare, quindi puoi già condividerlo tranquillamente.",
    "like": "È come avere un negozio in un centro commerciale: l'ufficio centrale gestisce la nuova insegna."
  },
  "help.domain.title": {
    "t": "Il mio dominio",
    "what": "Mostra l'indirizzo attuale e ti permette di usarne uno tuo (un dominio) come mymusic.com invece di quello gratuito più lungo.",
    "when": "Quando hai comprato un dominio o vuoi un indirizzo corto e facile da ricordare. Anche Google AdSense richiede un dominio personale.",
    "click": "È solo un titolo. Segui la guida qui sotto, poi scrivi il dominio e premi [[Collega]]. Se funziona, vedi ✓ e il tuo dominio.",
    "care": "Se la schermata dice che l'indirizzo è impostato nelle configurazioni Cloudflare, non puoi cambiarlo qui e la casella è grigia.",
    "like": "È come spostare l'insegna da una via laterale con un indirizzo lungo a una via principale facile da ricordare."
  },
  "help.domain.guide": {
    "t": "Come collegare un dominio personale",
    "what": "È una guida passo passo per comprare un dominio e indirizzarlo verso il sito. Servono circa 10 minuti.",
    "when": "Leggila prima di premere [[Collega]]. Prima devi completare i passaggi nelle schermate Cloudflare.",
    "click": "Premi il titolo per aprire o chiudere i passaggi. La guida resta aperta finché il dominio non è collegato.",
    "care": "Il dominio lo paghi tu. Cloudflare può cambiare i nomi delle schermate: cerca quello più simile. Se usi la versione su hosting, i passaggi riguardano invece il pannello del tuo hosting.",
    "like": "È come una mappa che mostra dove appendere l'insegna al nuovo indirizzo."
  },
  "help.domain.input": {
    "t": "Il mio dominio (casella)",
    "what": "Scrivi il dominio che hai acquistato, per esempio mymusic.com.",
    "when": "Dopo aver finito i passaggi della guida e quando il sito si apre già da quel dominio.",
    "click": "Non succede nulla finché non premi [[Collega]].",
    "care": "Inserisci soltanto il dominio. Non aggiungere http://, https:// o una barra / seguita da altro. Per cambiare dominio più avanti, scrivi quello nuovo e collegalo ancora.",
    "like": "È come scrivere il nuovo indirizzo stradale sull'insegna."
  },
  "help.domain.connect": {
    "t": "Collega",
    "what": "Controlla che il sito si apra davvero al dominio indicato e lo imposta come indirizzo principale.",
    "when": "Dopo aver scritto il dominio nella casella.",
    "click": "La verifica può durare fino a 30 secondi. Se funziona, il dominio viene salvato e aimusiclist.com aggiorna automaticamente l'indirizzo. Chi apre il vecchio indirizzo gratuito viene portato al nuovo dominio. Nella versione hosting funziona ancora anche il vecchio indirizzo.",
    "care": "Se compare un errore, il sito non si apre ancora lì o si apre un sito diverso. Controlla i passaggi della guida, aspetta alcuni minuti e riprova. Le canzoni già nelle playlist continuano a suonare.",
    "like": "È come l'ufficio postale che verifica il nuovo indirizzo prima di inoltrare la posta."
  },
  "help.menus.form": {
    "t": "Aggiungi menu / Modifica menu",
    "what": "Qui crei i pulsanti del menu che i visitatori vedono in alto sul sito. Ogni menu mostra i brani di un genere.",
    "when": "Usalo quando vuoi aiutare i visitatori a trovare canzoni per stile, per esempio un menu R&B e uno Hip-hop.",
    "click": "Scegli 1. il genere principale, 2. eventualmente uno specifico, 3. un nome se vuoi, poi premi [[Salva menu]]. Il numero accanto al pulsante indica quanti tuoi brani entreranno in quel menu.",
    "care": "I generi provengono dall'elenco di aimusiclist.com, quindi i menu corrispondono al sito principale. Puoi avere fino a 30 menu, uno solo per genere.",
    "like": "È come mettere cartelli sugli scaffali: «R&B qui», «Hip-hop là»."
  },
  "help.menus.main": {
    "t": "1. Genere principale",
    "what": "È il grande genere del menu, per esempio R&B, Hip-hop o Dance. L'elenco è lo stesso di aimusiclist.com.",
    "when": "Sceglilo sempre per primo. Senza non puoi salvare il menu.",
    "click": "Dopo la scelta, si apre l'elenco dei generi più specifici e vedi quanti tuoi brani corrispondono.",
    "care": "Se scegli solo il genere principale, il menu mostra i brani che hanno quel genere esatto in una delle tre caselle dei generi.",
    "like": "È il cartello grande sopra un corridoio del negozio, come «R&B»."
  },
  "help.menus.sub": {
    "t": "2. Genere specifico",
    "what": "È un genere più ristretto dentro quello principale, per rendere il menu più preciso. È facoltativo.",
    "when": "Usalo quando hai molte canzoni dello stesso genere principale e vuoi un menu soltanto per un certo stile.",
    "click": "L'elenco mostra soltanto i generi specifici del genere principale scelto. Lascia «Tutti di …» per usare quello generale. Il numero di canzoni accanto a [[Salva menu]] cambia subito.",
    "care": "È grigio finché non scegli un genere principale. Con un genere specifico, il menu mostra solo i brani che lo contengono in una casella dei generi.",
    "like": "È una piccola etichetta su uno scaffale dentro il corridoio."
  },
  "help.menus.label": {
    "t": "3. Nome del menu",
    "what": "È la parola che i visitatori vedono sul pulsante del menu. È facoltativa.",
    "when": "Scrivi un nome personale se vuoi qualcosa di più amichevole, come «Canzoni della notte». Lascia vuoto per usare il nome del genere.",
    "click": "Si salva con [[Salva menu]]. Se lasci vuoto, il pulsante mostra il nome del genere, tradotto nella lingua del visitatore.",
    "care": "Massimo 30 caratteri. Un nome scritto da te appare uguale in tutte le lingue.",
    "like": "Sono le parole che scrivi di persona sull'etichetta dello scaffale."
  },
  "help.menus.save": {
    "t": "Salva menu",
    "what": "Salva il menu che hai preparato qui sopra.",
    "when": "Premi dopo aver scelto il genere e, se vuoi, il nome.",
    "click": "Si salva subito. Un nuovo menu viene aggiunto in fondo all'elenco. I visitatori lo vedono entro 30 secondi.",
    "care": "Non puoi creare due menu per lo stesso genere. Dopo aver raggiunto 30 menu non puoi aggiungerne altri. Un messaggio rosso spiega il motivo.",
    "like": "È come attaccare l'etichetta finita allo scaffale."
  },
  "help.menus.order": {
    "t": "Su / Giù",
    "what": "Sposta un menu di una posizione avanti o indietro nella fila dei menu.",
    "when": "Usalo per mettere il menu più importante all'inizio.",
    "click": "La modifica si salva subito. I visitatori vedono l'ordine nuovo entro 30 secondi.",
    "care": "Il primo menu non può salire e l'ultimo non può scendere, quindi quei pulsanti sono grigi.",
    "like": "È come scambiare due cartelli degli scaffali per mettere il più popolare davanti."
  },
  "help.menus.edit": {
    "t": "Modifica",
    "what": "Apre questo menu nel riquadro sopra, così puoi cambiarne il genere o il nome.",
    "when": "Usalo per rinominare un menu o associarlo a un genere diverso.",
    "click": "La pagina scorre fino al riquadro compilato con questo menu. Modificalo e premi [[Salva menu]]: mantiene la posizione nell'elenco. [[Annulla]] chiude senza modifiche.",
    "like": "È come togliere l'etichetta di uno scaffale, riscriverla e rimetterla al suo posto."
  },
  "help.menus.delete": {
    "t": "Elimina",
    "what": "Rimuove questo menu dal tuo sito.",
    "when": "Usalo quando non ti serve più.",
    "click": "Prima chiede conferma. Poi il menu viene tolto subito e i visitatori non lo vedono più entro 30 secondi.",
    "care": "Scompare solo il menu. I brani restano sul sito e si trovano ancora nella pagina iniziale o negli altri menu. Non puoi annullare, ma puoi ricrearlo.",
    "like": "È come togliere un'etichetta dallo scaffale: i dischi restano dove sono."
  },
  "help.menus.list": {
    "t": "Menu del tuo sito",
    "what": "Sono tutti i menu nell'ordine in cui li vedono i visitatori in alto. Il numero tra parentesi indica quanti ne hai su un massimo di 30.",
    "when": "Controllali per verificare, riordinare, modificare o eliminare menu.",
    "click": "Ogni riga mostra il nome del menu, il genere e quanti brani contiene. I visitatori vedono sempre anche «Home» per primo e «Album» se hai degli album.",
    "care": "«Genere non nell'elenco» significa che aimusiclist.com non include più quel genere. Premi [[Modifica]] e scegline un altro. Un menu con 0 brani resta visibile, ma è vuoto.",
    "like": "È la fila di etichette sugli scaffali del negozio, da sinistra a destra."
  },
  "help.tab.menus": {
    "t": "Menu",
    "what": "È il menu del tuo sito. Ogni voce mostra le canzoni di un genere scelto dall'elenco di aimusiclist.com.",
    "when": "Vieni qui per decidere quali voci vedono i visitatori e in che ordine.",
    "click": "Premere questa scheda cambia soltanto schermata. Aggiungere, modificare, spostare o eliminare un menu salva subito.",
    "care": "Fino a 30 menu. Scegli prima il genere principale, poi eventualmente quello specifico e infine un nome (massimo 30 caratteri, facoltativo). Usando i generi di aimusiclist.com, i due siti organizzano i brani allo stesso modo.",
    "like": "Sono le etichette degli scaffali: «R&B qui, Hip-hop là»."
  },
  "help.stats.title": {
    "t": "Statistiche del sito",
    "what": "Questa scheda mostra quante persone hanno visitato il sito e quante canzoni hanno ascoltato. Vedi anche i numeri di aimusiclist.com.",
    "when": "Aprila una volta al giorno o alla settimana. Puoi capire quali brani piacciono e se il sito cresce.",
    "click": "Guardare i numeri non modifica il sito. Scegli un periodo in alto: tutte le schede sotto mostreranno quel periodo.",
    "care": "La maggior parte dei dati viene calcolata **una volta al giorno** (al mattino presto secondo l'ora UTC). Un brano caricato oggi appare nei numeri da domani.",
    "like": "È come il quaderno del negoziante: ogni mattina scrivi quanti clienti sono arrivati e quali dischi hanno ascoltato."
  },
  "help.stats.period": {
    "t": "Periodo (7 / 30 / 90 giorni)",
    "what": "Questi pulsanti scelgono quanti giorni sommare nei dati: 7, 30 oppure 90.",
    "when": "Scegli 7 giorni per questa settimana, 90 per vedere l'andamento di circa tre mesi.",
    "click": "Numeri, grafici e tabelle cambiano subito. Il pulsante colorato è quello selezionato. Non viene salvato o inviato nulla.",
    "care": "Il periodo finisce **ieri** (UTC). Oggi compare separatamente nella piccola riga **Oggi** di ogni riquadro. La freccia **rispetto ai giorni precedenti** confronta con un periodo precedente della stessa durata.",
    "like": "È come scegliere quante pagine del quaderno leggere insieme: una settimana, un mese o tre mesi."
  },
  "help.stats.note.off": {
    "t": "Le riproduzioni sul mio sito non vengono contate",
    "what": "Su questo tipo di hosting non è ancora possibile contare le riproduzioni sul sito. Perciò l'ordine **Popolari** usa gli ascolti di aimusiclist.",
    "when": "L'avviso appare automaticamente. Se ti bastano i numeri di aimusiclist non devi fare nulla.",
    "click": "Leggi il messaggio. Se indica un passaggio di configurazione, per esempio collegare il Worker audio, completalo per attivare il conteggio. I numeri inizieranno dal giorno seguente.",
    "care": "Non è possibile recuperare i numeri dei giorni precedenti all'attivazione.",
    "like": "È come un negozio senza contatore sulla porta: non sai quanti clienti sono entrati e consulti i dati del grande mercato."
  },
  "help.stats.note.dataset": {
    "t": "Registrazione statistiche disattivata",
    "what": "Il sito non sta ancora registrando visite e riproduzioni. Devi attivare il conteggio una volta nel tuo account Cloudflare.",
    "when": "Fallo quando vuoi vedere i numeri del tuo sito.",
    "click": "Segui il messaggio: crea su Cloudflare lo spazio per le statistiche con il nome esatto indicato. Poi, nella pagina GitHub del sito, elimina «# » all'inizio delle tre righe mostrate e premi [[Commit changes]]. Il sito si aggiorna in 1–3 minuti; i numeri appariranno dal prossimo conteggio giornaliero.",
    "care": "Il nome deve essere esattamente **aml_site_stats**. Se salti la parte Cloudflare e cambi solo le tre righe, l'aggiornamento fallisce. In tal caso rimetti «# ». ",
    "like": "È come installare un contatore all'ingresso: finché non c'è, le visite non vengono registrate."
  },
  "help.stats.note.token": {
    "t": "Manca la chiave di utilizzo",
    "what": "Per leggere i dati del sito serve una chiave di utilizzo Cloudflare, che non hai ancora aggiunto.",
    "when": "Aggiungila una volta. La stessa chiave mostra anche lo spazio gratuito rimasto in alto nella pagina di amministrazione.",
    "click": "Apri **Informazioni sul sito** e incolla lì la chiave. Deve avere l'autorizzazione indicata nel messaggio. I dati compaiono dal successivo conteggio giornaliero.",
    "care": "Crea la chiave nello **stesso account Cloudflare** del sito. Tienila segreta e non pubblicarla.",
    "like": "È come la chiave della stanza dei contatori: senza non puoi leggerli, anche se funzionano."
  },
  "help.stats.note.no_visits": {
    "t": "Le visite non vengono contate",
    "what": "Su questo hosting le pagine vengono inviate come file già pronti. Quindi non si possono contare le visite, ma si contano le riproduzioni.",
    "when": "L'avviso compare da solo: è normale per questo tipo di hosting.",
    "click": "Non c'è nulla da premere. Il riquadro e il grafico **Visite** vengono nascosti. Paesi, dispositivi e lingue vengono conteggiati dagli ascolti.",
    "like": "È come un negozio che non conta chi entra, ma conta ogni disco messo sul giradischi."
  },
  "help.stats.note.error": {
    "t": "Impossibile leggere le statistiche",
    "what": "L'ultimo conteggio non è riuscito. Il messaggio ne indica il motivo.",
    "when": "Compare automaticamente quando qualcosa va storto.",
    "click": "Se leggi **Mostro gli ultimi dati salvati**, vedi gli ultimi numeri validi. Di solito il prossimo conteggio giornaliero risolve il problema. Se l'avviso resta per giorni, controlla la chiave di utilizzo in **Informazioni sul sito**.",
    "care": "I giorni mancanti possono essere recuperati se il conteggio riprende presto. Quelli molto vecchi potrebbero andare persi.",
    "like": "È come una mattina in cui l'incaricato non può leggere il contatore: sulla lavagna restano i numeri di ieri."
  },
  "help.stats.updated": {
    "t": "Quando sono stati calcolati i numeri",
    "what": "Questa riga indica quando è stato eseguito l'ultimo conteggio e ricorda che i dati sono approssimativi.",
    "when": "Guardala se un numero sembra vecchio. Se l'ora risale a ieri, il conteggio successivo non è ancora avvenuto.",
    "care": "I numeri si calcolano una volta al giorno, poco dopo le 00:00 UTC. Ogni sito ha un minuto assegnato, indicato qui. Vengono esclusi i **bot** (programmi automatici) e **le tue visite** quando sei collegato, quindi il totale è un po' inferiore a tutti i clic.",
    "like": "È come la data stampata sullo scontrino: ti dice quando è stato fatto il conto."
  },
  "help.stats.csv.days": {
    "t": "Scarica CSV giornaliero",
    "what": "Salva un file con una riga per ogni giorno del periodo scelto: visite, riproduzioni, riproduzioni da aimusiclist, messaggi nel libro degli ospiti e dati aimusiclist.",
    "when": "Usalo per conservare i numeri o creare grafici personali in Excel o Google Sheets.",
    "click": "Il browser crea e scarica il file. Sul sito non cambia nulla.",
    "care": "I giorni seguono il fuso UTC. Scegli prima il periodo (7, 30 o 90 giorni), perché il file lo rispetta.",
    "like": "È come fotocopiare le pagine del quaderno del negozio e portarle a casa."
  },
  "help.stats.csv.tracks": {
    "t": "Scarica CSV dei brani",
    "what": "Salva un file con una riga per ogni canzone: posizione, cambi di posizione, ascolti, ascolti da aimusiclist e numeri e classifiche aimusiclist.",
    "when": "Usalo per confrontare brani in un foglio di calcolo o conservare i loro risultati.",
    "click": "Il file viene creato nel browser e salvato nei download. Il sito non cambia.",
    "care": "Le riproduzioni seguono il periodo scelto. I dati aimusiclist riguardano sempre gli ultimi 7 giorni. Le caselle vuote indicano che manca un numero.",
    "like": "È come copiare nel quaderno la classifica dei dischi più venduti appesa nel negozio."
  },
  "help.stats.refresh": {
    "t": "Aggiorna ora",
    "what": "Questo pulsante ricalcola subito le visite e le riproduzioni sul sito, includendo oggi.",
    "when": "Usalo quando hai appena condiviso una canzone e vuoi sapere se arrivano visitatori. Senza, i numeri cambiano soltanto una volta al giorno.",
    "click": "Dopo pochi secondi i numeri della scheda cambiano. Si aggiornano anche i conteggi nell'elenco brani e sul sito. Poi il pulsante aspetta **1 minuto** prima di funzionare di nuovo.",
    "care": "C'è un limite giornaliero: **200 volte** per un sito installato da te, **30 volte** su meshmelo. Il pulsante non aggiorna i numeri di aimusiclist, che arrivano una volta al giorno. Se non lo vedi, l'hosting non può eseguire questo conteggio.",
    "like": "È come controllare di persona il contatore a metà giornata invece di aspettare il mattino dopo."
  },
  "help.stats.tile.visits": {
    "t": "Visite",
    "what": "Indica quante volte le persone hanno aperto il sito nel periodo scelto. È un numero **approssimativo**, non esatto.",
    "when": "Controllalo per capire se condividere sui social porta persone al sito.",
    "click": "Sotto il numero grande c'è una freccia: su (▲) indica più visite, giù (▼) meno, rispetto ai giorni precedenti. **Oggi** mostra il dato dopo [[Aggiorna ora]] oppure – se ancora non conteggiato.",
    "care": "Più alto è meglio. Non contano bot e visite tue. Se un giorno aumenta improvvisamente, guarda **Da dove arrivano i visitatori** qui sotto per capire perché.",
    "like": "È il numero di clienti entrati dalla porta del negozio."
  },
  "help.stats.tile.plays": {
    "t": "Riproduzioni avviate",
    "what": "Indica quante volte un brano ha iniziato a suonare dall'inizio sul tuo sito nel periodo scelto.",
    "when": "È il numero più importante per la tua musica. Controllalo dopo aver caricato una nuova canzone.",
    "click": "La freccia confronta con i giorni precedenti. **Oggi** mostra il numero di oggi dopo [[Aggiorna ora]].",
    "care": "Più alto è meglio. Una riproduzione conta quando il brano **inizia**, anche se chi ascolta lo interrompe presto. I tuoi ascolti da collegato non contano. Se resta a zero per giorni, controlla gli avvisi in alto.",
    "like": "È quante volte un disco è stato messo sul giradischi del negozio."
  },
  "help.stats.tile.plays_aml": {
    "t": "Riproduzioni da aimusiclist",
    "what": "Le canzoni ascoltate su aimusiclist.com vengono trasmesse dal tuo sito. Questo numero conta tali riproduzioni.",
    "when": "Controllalo per capire quanto il grande mercato aiuta a far ascoltare la tua musica.",
    "click": "Guardarlo non cambia nulla. La freccia confronta con i giorni precedenti.",
    "care": "Più alto è meglio. Queste riproduzioni **non** determinano l'ordine **Popolari** del tuo sito. aimusiclist usa la propria classifica. Il numero può differire leggermente dal riquadro aimusiclist sotto, perché i due siti contano in modi diversi.",
    "like": "I tuoi dischi suonano in una bancarella del grande mercato, ma il suono arriva dal tuo magazzino. Questo è il conteggio di quelle volte."
  },
  "help.stats.tile.gb": {
    "t": "Messaggi del libro degli ospiti",
    "what": "Indica quanti messaggi nuovi sono stati scritti nel libro degli ospiti nel periodo scelto.",
    "when": "Usalo per vedere quanto i fan parlano con te.",
    "click": "Guardarlo non cambia nulla. La freccia confronta con i giorni precedenti.",
    "care": "Un numero più alto di solito significa più fan. I messaggi scritti da te non contano. Se cresce bruscamente, controlla che non sia spam.",
    "like": "È il numero di biglietti lasciati nel quaderno all'ingresso del negozio."
  },
  "help.stats.trend": {
    "t": "Grafico giornaliero",
    "what": "Ogni barra rappresenta un giorno. Più è alta, maggiori sono gli ascolti (o le visite) di quel giorno.",
    "when": "Usalo per trovare le giornate migliori, per esempio quella in cui hai condiviso una canzone sui social.",
    "click": "Passa il mouse su una barra (o toccala) per vedere data e numero. A sinistra trovi la scala.",
    "care": "I giorni seguono l'ora UTC, quindi nella tua zona potrebbero iniziare di mattina o sera. Uno spazio vuoto significa zero o dati non registrati quel giorno.",
    "like": "È come una fila di pile di monete: ogni pila è un giorno e quelle più alte indicano giornate più affollate."
  },
  "help.stats.table_view": {
    "t": "Mostra come tabella",
    "what": "Mostra gli stessi numeri in una tabella, una riga per giorno, dal più recente.",
    "when": "Usalo se vuoi il numero esatto di un giorno o trovi difficile leggere il grafico.",
    "click": "Premi per aprire o chiudere la tabella. Non viene salvato nulla.",
    "care": "Compare solo il periodo scelto. Per conservare i dati usa [[Scarica CSV giornaliero]] in fondo.",
    "like": "È lo stesso quaderno del negozio, ma al posto dei disegni ci sono righe di numeri."
  },
  "help.stats.col.date": {
    "t": "Data (UTC)",
    "what": "Indica il giorno conteggiato in ogni riga. I giorni seguono **UTC**, l'orario standard mondiale.",
    "when": "Usala per collegare un giorno a qualcosa che hai fatto, per esempio condividere una canzone.",
    "care": "UTC non è la tua ora locale. In Corea un giorno UTC comincia alle 9 del mattino, quindi una canzone condivisa di notte può finire nel giorno precedente o successivo.",
    "like": "È un quaderno che usa sempre lo stesso orologio mondiale, così ogni negozio del grande mercato scrive la stessa data."
  },
  "help.stats.col.rank": {
    "t": "Posizione",
    "what": "È la posizione del brano nell'ordine **Popolari** del tuo sito. Accanto puoi vedere il cambiamento rispetto al giorno prima.",
    "when": "Usala per individuare i brani più ascoltati.",
    "click": "Non c'è nulla da premere. ▲ significa salito di quel numero di posti, ▼ sceso, – invariato. **NEW** è un nuovo ingresso; **RE** un ritorno in classifica.",
    "care": "Più basso è meglio (1 è il primo). – significa che il brano non ha una posizione perché non ha avuto ascolti negli ultimi 7 giorni.",
    "like": "È il numero sulla classifica dei dischi più venduti nella vetrina."
  },
  "help.stats.col.plays": {
    "t": "Riproduzioni (giorni scelti)",
    "what": "Indica quante volte questo brano ha iniziato a suonare sul sito nel periodo selezionato.",
    "when": "Usalo per confrontare le canzoni.",
    "care": "Più alto è meglio. Gli ascolti arrivati da aimusiclist sono nella colonna successiva, non qui. Se un brano nuovo mostra zero, attendi il prossimo conteggio giornaliero.",
    "like": "È quante volte questo disco è stato messo sul giradischi del negozio."
  },
  "help.stats.col.plays_aml": {
    "t": "Da aimusiclist",
    "what": "Conta quante volte questo brano è stato ascoltato su aimusiclist.com nel periodo scelto, trasmesso dal tuo sito.",
    "when": "Usalo per vedere quali canzoni vengono scoperte nel grande mercato.",
    "care": "Più alto è meglio. Questi ascolti non cambiano l'ordine Popolari del sito. Il numero può essere un po' diverso da **Riproduzioni aimusiclist (7 giorni)**, perché i due siti contano in modo diverso.",
    "like": "È quante volte questo disco ha lasciato il tuo magazzino per suonare al grande mercato."
  },
  "help.stats.col.likes": {
    "t": "Mi piace ♥",
    "what": "Conta quanti Mi piace ♥ questo brano ha ricevuto sul tuo sito, dall'inizio fino a oggi.",
    "when": "Usalo per scoprire quali canzoni i fan amano di più.",
    "care": "È il **totale di sempre**, non quello del periodo scelto. Viene aggiornato una volta al giorno. I Mi piace su aimusiclist sono contati separatamente nel suo riquadro.",
    "like": "È come contare i cuori disegnati dai fan sulla scheda di una canzone in negozio."
  },
  "help.stats.col.aml_plays7": {
    "t": "Riproduzioni aimusiclist (7 giorni)",
    "what": "È il numero di riproduzioni di questo brano su aimusiclist.com negli ultimi 7 giorni, secondo il conteggio di aimusiclist.",
    "when": "Usalo per vedere come va il brano al grande mercato questa settimana.",
    "care": "Riguarda sempre **7 giorni**, qualunque periodo tu abbia scelto. Il dato arriva una volta al giorno. Più alto è meglio.",
    "like": "È il conteggio del grande mercato di quante volte è stato ascoltato il tuo disco questa settimana."
  },
  "help.stats.col.aml_valid7": {
    "t": "Riproduzioni valide (7 giorni)",
    "what": "Sono gli ascolti su aimusiclist negli ultimi 7 giorni in cui le persone hanno ascoltato per **30 secondi o più**.",
    "when": "Usalo per capire quanti ascolti sono reali. Saltare subito il brano non conta.",
    "care": "Più alto è meglio. Il numero è sempre un po' inferiore a tutte le riproduzioni. Se è molto più basso, forse le persone interrompono presto: prova un inizio più coinvolgente o una copertina migliore. aimusiclist usa gli ascolti validi per una classifica equa.",
    "like": "Sono i clienti rimasti alla bancarella abbastanza da ascoltare davvero il brano, non quelli che passano soltanto."
  },
  "help.stats.col.chart": {
    "t": "Posizione in classifica",
    "what": "È la posizione del brano nella classifica settimanale di aimusiclist (Top 100). Accanto vedi il cambiamento dall'ultima classifica.",
    "when": "Usala per sapere se la tua canzone è entrata nella classifica principale.",
    "care": "Un numero più piccolo è migliore. **NEW** significa nuovo ingresso. – indica che ora non è in classifica, ed è normale per molti brani.",
    "like": "È il posto del tuo disco sul tabellone principale delle vendite al grande mercato."
  },
  "help.stats.col.genre_rank": {
    "t": "Posizione nel genere",
    "what": "È il posto del brano nella classifica aimusiclist del suo genere (come R&B o Hip-hop).",
    "when": "Usalo per confrontare la tua canzone con quelle dello stesso stile.",
    "care": "Più piccolo è meglio. La classifica del genere è meno grande di quella generale, quindi è più facile ottenere una posizione. – significa che ancora non è classificato.",
    "like": "È il tuo posto su uno scaffale del grande mercato, per esempio soltanto quello R&B."
  },
  "help.stats.col.all_rank": {
    "t": "Posizione fra tutti i brani",
    "what": "È la posizione della canzone fra **tutti i brani** ascoltati su aimusiclist questa settimana (da venerdì a giovedì). Sotto trovi la migliore posizione mai raggiunta.",
    "when": "Usala anche se la canzone non è nella Top 100: puoi comunque vedere se sale.",
    "click": "Non c'è niente da premere. ▲ e un numero indicano di quanti posti è salita dalla settimana scorsa, ▼ di quanti è scesa.",
    "care": "Un numero più piccolo è meglio. Cambia **ogni venerdì**. Un brano che nessuno ha ascoltato questa settimana mostra –.",
    "like": "Anche se il disco non è sul tabellone principale, puoi trovarne la posizione nell'elenco completo del grande mercato."
  },
  "help.stats.tracks": {
    "t": "Brani popolari",
    "what": "È una tabella dei tuoi brani con numero di ascolti e posizioni. Mostra fino a 100 canzoni, a partire dalle meglio classificate.",
    "when": "Usala per capire qual è il tuo successo del momento e quali canzoni hanno bisogno di più attenzione.",
    "click": "Guardare la tabella non modifica nulla. La colonna **Riproduzioni** segue il periodo scelto in alto, mentre le colonne aimusiclist mostrano sempre gli ultimi 7 giorni.",
    "care": "La posizione qui segue l'ordine **Popolari** del tuo sito. Cambia una volta al giorno. Le colonne aimusiclist compaiono solo quando aimusiclist.com invia i dati.",
    "like": "È la classifica dei dischi più venduti appesa alla parete del negozio."
  },
  "help.stats.rank_basis": {
    "t": "Come viene deciso l'ordine Popolari",
    "what": "Questa riga spiega come si decide l'ordine **Popolari**: dalle riproduzioni sul tuo sito oppure, se non puoi contarle, dalle riproduzioni su aimusiclist.",
    "when": "Leggila se ti chiedi perché una canzone sta sopra un'altra.",
    "care": "Contano solo gli **ultimi 7 giorni** e ricevono una posizione solo le canzoni ascoltate (massimo 100). In caso di parità, viene prima chi ha più ascolti validi su aimusiclist, poi il caricamento più recente. Gli ascolti provenienti da aimusiclist non vengono usati qui.",
    "like": "È il cartello con le regole accanto alla classifica dei più venduti, che spiega come viene stilata."
  },
  "help.stats.albums": {
    "t": "Album",
    "what": "È una tabella dei tuoi album. Ogni riga somma gli ascolti di tutte le canzoni dell'album.",
    "when": "Usala per vedere quale album è più ascoltato.",
    "care": "La tabella è ordinata dall'album con più ascolti. Una canzone che si trova in due album conta in entrambi.",
    "like": "È come contare le vendite per cofanetto anziché per singolo disco."
  },
  "help.stats.album.plays": {
    "t": "Riproduzioni dell'album (giorni scelti)",
    "what": "Somma gli ascolti di tutte le canzoni dell'album nel periodo scelto, sia **sul tuo sito** sia tramite aimusiclist.",
    "when": "Usalo per confrontare gli album.",
    "care": "Più alto è meglio. Un album con tanti brani può sembrare più popolare soltanto perché ne contiene di più. Guarda anche la colonna **Brani**.",
    "like": "È il totale dei dischi di un cofanetto ascoltati in negozio e alla bancarella del grande mercato."
  },
  "help.stats.album.aml_plays7": {
    "t": "Ascolti album su aimusiclist (7 giorni)",
    "what": "Somma le riproduzioni di tutte le canzoni dell'album su aimusiclist negli ultimi 7 giorni, secondo il conteggio di aimusiclist.",
    "when": "Usalo per vedere quale album è popolare al grande mercato questa settimana.",
    "care": "Sono sempre **7 giorni**, qualunque periodo tu scelga. Più alto è meglio.",
    "like": "È il conteggio del grande mercato per tutto il tuo cofanetto questa settimana."
  },
  "help.stats.listeners": {
    "t": "Ascoltatori (in base alle riproduzioni)",
    "what": "Mostra chi ascolta le tue canzoni: paese, dispositivo, lingua e ora del giorno.",
    "when": "Usalo per decidere dove condividere la musica e in quale lingua scrivere.",
    "care": "Il tuo hosting non può contare le visite, quindi la scheda usa le **riproduzioni**, non le visite. Non conserva informazioni personali. La percentuale è la quota nell'elenco mostrato.",
    "like": "È come osservare da quali città vengono le persone che ascoltano i tuoi dischi."
  },
  "help.stats.countries": {
    "t": "Paesi",
    "what": "Indica da quali paesi arrivano ascoltatori o visitatori. Mostra i primi 10, dal maggiore.",
    "when": "Usalo per scegliere la lingua dei titoli o programmare una condivisione in un paese.",
    "care": "**Sconosciuto** significa che non è stato possibile individuare il paese. Una piccola quota è normale.",
    "like": "È come mettere puntine su una mappa del mondo, una per il paese di ogni cliente."
  },
  "help.stats.devices": {
    "t": "Dispositivi",
    "what": "Indica che cosa usano i visitatori per aprire il sito: telefono, tablet o computer.",
    "when": "Usalo quando scegli un tema. Se la maggior parte usa il telefono, controlla come appare lì il sito.",
    "care": "I dispositivi non identificabili non vengono mostrati.",
    "like": "È come osservare se i clienti arrivano a piedi, in bicicletta o in auto."
  },
  "help.stats.langs": {
    "t": "Lingue",
    "what": "Sono le lingue impostate sui telefoni o computer dei visitatori. Vengono mostrate le prime 10.",
    "when": "Usale per scegliere in quali lingue scrivere i testi del sito e i titoli.",
    "care": "È la lingua del dispositivo, non necessariamente quella che la persona parla meglio. **Sconosciuto** significa che il dispositivo non l'ha comunicata.",
    "like": "È come sentire le lingue parlate dai clienti quando entrano."
  },
  "help.stats.audience": {
    "t": "Pubblico",
    "what": "Questa scheda descrive i visitatori: paese, provenienza, dispositivo, lingua e ora del giorno.",
    "when": "Usala per decidere dove condividere la musica e in quale lingua scrivere.",
    "click": "Guardarla non cambia nulla. Ogni elenco segue il periodo scelto.",
    "care": "Non vengono conservati dati personali, soltanto grandi gruppi come «Corea» o «Telefono». La percentuale riguarda l'elenco mostrato.",
    "like": "È come un negoziante che osserva: «Oggi tanti clienti sono arrivati dal paese vicino, a piedi, di sera»."
  },
  "help.stats.refs": {
    "t": "Da dove arrivano i visitatori",
    "what": "Mostra come le persone trovano il sito, per grandi gruppi: indirizzo digitato o preferiti, ricerca, social e app musicali, aimusiclist.com, altri siti e spostamenti interni.",
    "when": "Usalo per capire quale modo di condividere funziona meglio.",
    "care": "**Diretto / preferiti** include anche link aperti da chat che non indicano la provenienza. **All'interno del sito** significa passare da una pagina del sito a un'altra.",
    "like": "È come chiedere a ogni cliente all'ingresso: «Come hai saputo del mio negozio?»"
  },
  "help.stats.domains": {
    "t": "Principali siti di provenienza",
    "what": "Sono i nomi dei siti web che hanno inviato più visitatori al tuo. Ne vengono mostrati fino a 10.",
    "when": "Usali per capire quali post o pagine portano persone, poi magari ringraziarli o condividere lì ancora.",
    "care": "Mostra soltanto il nome del sito, non la pagina precisa. Le visite provenienti dal tuo stesso sito sono escluse.",
    "like": "È l'elenco dei negozi vicini le cui insegne indicano la strada verso il tuo."
  },
  "help.stats.hours": {
    "t": "Ora del giorno",
    "what": "Ogni barra rappresenta un'ora (dalle 0:00 alle 23:00). Una barra più alta significa più riproduzioni o visite in quell'ora, sommate nel periodo scelto.",
    "when": "Usala per scegliere quando condividere una canzone nuova, poco prima delle ore più frequentate.",
    "click": "Passa il mouse sulla barra o toccala per vedere ora e numero.",
    "care": "Le ore seguono **l'ora del tuo computer**. Il titolo mostra la differenza da UTC. In alcune zone con fusi di mezz'ora, rimangono in UTC.",
    "like": "È come sapere che il negozio è più pieno a pranzo e dopo la scuola."
  },
  "help.stats.aml.title": {
    "t": "Su aimusiclist.com",
    "what": "Mostra i tuoi numeri su aimusiclist.com: riproduzioni, ascolti validi, Mi piace e aggiunte alle playlist, con grafico giornaliero e paesi.",
    "when": "Usala per capire come vanno i brani pubblici al grande mercato.",
    "click": "Guardarla non cambia nulla. I riquadri seguono il periodo scelto in alto.",
    "care": "I dati arrivano **una volta al giorno** (al mattino). [[Aggiorna ora]] non li modifica. Se vedi «Non collegato», collega prima il sito ad aimusiclist.com. Contano solo i brani resi pubblici su aimusiclist.",
    "like": "È il rapporto che il grande mercato invia ogni mattina sulla tua bancarella."
  },
  "help.stats.aml.plays": {
    "t": "Riproduzioni su aimusiclist",
    "what": "Indica quante volte i tuoi brani sono stati ascoltati su aimusiclist.com nel periodo scelto.",
    "when": "Usalo per capire se la tua musica raggiunge più persone al grande mercato.",
    "care": "Più alto è meglio. La freccia confronta con i giorni precedenti. Conta soltanto i brani pubblici su aimusiclist. Se scende improvvisamente a zero, verifica che siano ancora pubblici e che il sito sia collegato.",
    "like": "È quante volte i tuoi dischi hanno suonato alla bancarella del grande mercato."
  },
  "help.stats.aml.valid": {
    "t": "Riproduzioni valide (30 s+)",
    "what": "Sono le riproduzioni su aimusiclist in cui le persone hanno ascoltato almeno 30 secondi, nel periodo scelto.",
    "when": "Usalo per vedere ascolti veri, non salti immediati.",
    "care": "Più alto è meglio. Se è molto inferiore alle **Riproduzioni**, molte persone saltano presto. aimusiclist usa gli ascolti validi per creare una classifica corretta, quindi questo numero è importante.",
    "like": "Sono le persone rimaste alla bancarella abbastanza da ascoltare davvero la canzone."
  },
  "help.stats.aml.likes": {
    "t": "Mi piace su aimusiclist",
    "what": "Indica quanti Mi piace hanno ricevuto le tue canzoni su aimusiclist.com nel periodo scelto.",
    "when": "Usalo per capire come reagiscono i fan ai brani nuovi.",
    "care": "Più alto è meglio. Sono i Mi piace su aimusiclist, non quelli sul sito personale. Questi ultimi sono nella colonna **Mi piace ♥** della tabella Brani popolari.",
    "like": "Sono i cuori lasciati sulla bacheca della tua bancarella al grande mercato."
  },
  "help.stats.aml.adds": {
    "t": "Aggiunte alle playlist",
    "what": "Conta quante volte le persone hanno inserito le tue canzoni nelle loro playlist su aimusiclist.com nel periodo scelto.",
    "when": "Usalo per capire se le persone vogliono riascoltare i tuoi brani.",
    "care": "Più alto è meglio. Aggiungere a una playlist è un segnale forte: quella persona vuole tornare ad ascoltare.",
    "like": "È come un cliente che compra il disco per portarlo a casa invece di sentirlo soltanto una volta alla bancarella."
  },
  "help.stats.aml.trend": {
    "t": "Riproduzioni giornaliere su aimusiclist",
    "what": "Ogni barra rappresenta un giorno di ascolti su aimusiclist.com. Più alta è la barra, più riproduzioni ci sono state.",
    "when": "Usalo per vedere quando i brani erano popolari al grande mercato, per esempio la settimana in cui uno è entrato in classifica.",
    "click": "Passa il mouse sulla barra o toccala per vedere data e numero.",
    "care": "Il grafico finisce lo stesso giorno dei dati del tuo sito (ieri, UTC). Uno spazio vuoto significa zero o dati mancanti.",
    "like": "È una fila di pile di monete per la tua bancarella, una per ogni giorno."
  },
  "help.stats.aml.countries": {
    "t": "Paesi degli ascoltatori su aimusiclist",
    "what": "Sono i paesi delle persone che ascoltano i tuoi brani su aimusiclist.com. Mostra fino a 10 paesi, dai maggiori.",
    "when": "Usalo per trovare i paesi in cui la tua musica sta crescendo.",
    "care": "L'elenco viene creato da aimusiclist e arriva una volta al giorno. Può essere diverso da quello dei visitatori del tuo sito.",
    "like": "È il grande mercato che ti racconta da quali paesi arrivano i clienti della tua bancarella."
  },
  "help.stats.free.r2_storage": {
    "t": "Spazio di archiviazione",
    "what": "Indica quanto spazio occupano brani e immagini nell'archivio Cloudflare. Il piano gratuito offre **10 GB**.",
    "when": "Controllalo prima di caricare molte canzoni o file molto grandi.",
    "care": "Superata la quota gratuita, Cloudflare addebita i costi al tuo account. Eliminare brani inutili libera spazio. I WAV sono molto più grandi degli MP3.",
    "like": "È quanto è pieno il tuo magazzino."
  },
  "help.stats.free.workers": {
    "t": "Richieste al sito oggi",
    "what": "Conta quante volte oggi è stato richiesto qualcosa al sito (pagine, brani, immagini). Il piano gratuito permette **100.000 al giorno**.",
    "when": "Controllalo quando arrivano molti visitatori, per esempio dopo una grande condivisione.",
    "care": "Oltre 100.000 richieste giornaliere, il sito **si ferma fino al giorno successivo** (senza costi). Riprende alle 00:00 UTC (9 del mattino in Corea).",
    "like": "È come una porta del negozio che può aprirsi solo un certo numero di volte al giorno, poi resta chiusa fino a domani."
  },
  "help.stats.free.r2_class_a": {
    "t": "Scritture in archivio questo mese",
    "what": "Conta quante volte questo mese è stato salvato qualcosa nell'archivio, come caricare una canzone o modificare le impostazioni. Il piano gratuito permette **1 milione al mese**.",
    "when": "Controllalo se carichi o modifichi spesso.",
    "care": "L'utilizzo normale resta molto sotto il limite. Se lo superi, Cloudflare addebita un costo al tuo account. Il conteggio riparte ogni mese.",
    "like": "È quante volte questo mese hai messo scatole nel magazzino."
  },
  "help.stats.free.r2_class_b": {
    "t": "Letture dall'archivio questo mese",
    "what": "Conta quante volte questo mese qualcosa è stato letto dall'archivio, soprattutto i brani ascoltati. Il piano gratuito permette **10 milioni al mese**.",
    "when": "Controllalo quando le tue canzoni ricevono molti ascolti.",
    "care": "Oltre il limite Cloudflare addebita il costo al tuo account. Il conteggio si azzera ogni mese. Molti ascolti sono positivi, quindi la barra cresce quando diventi popolare.",
    "like": "È quante volte questo mese sono stati presi dischi dal magazzino."
  },
  "help.stats.free.ae": {
    "t": "Registrazioni statistiche oggi",
    "what": "Indica quante righe il sito ha scritto oggi nel quaderno delle statistiche (una per visita, ascolto o messaggio). La quota gratuita è di **100.000 righe al giorno**.",
    "when": "Controllalo nelle giornate molto affollate.",
    "care": "Questa barra compare solo dopo il conteggio dei dati di oggi, per esempio con [[Aggiorna ora]]. Un sito normale resta molto sotto il limite. Le pagine e le canzoni non dipendono da questa barra.",
    "like": "È quante righe il contatore dei visitatori ha scritto oggi nel suo quaderno."
  },
  "help.stats.free.title": {
    "t": "Quota disponibile del piano gratuito",
    "what": "Sono barre che mostrano quanta parte del piano gratuito Cloudflare usa il sito. Funziona gratis finché ogni barra resta sotto il 100%.",
    "when": "Controllale ogni tanto e sempre dopo aver caricato molti brani.",
    "click": "Guardarle non cambia nulla. La barra passa al colore di avviso al **70%** e al colore di pericolo al **90%**.",
    "care": "Se una barra si avvicina al 100%, sospendi i caricamenti grandi e controlla quale limite stai raggiungendo. Il piano gratuito basta per circa 1.000 brani (circa 10 MB ciascuno) e alcune migliaia di visitatori al giorno.",
    "like": "Sono i contatori di acqua e luce del negozio. Se resti sotto la quota gratuita, non paghi nulla."
  },
  "help.an.title": {
    "t": "Analisi",
    "what": "Questa scheda mostra come cambiano i brani nel tempo: posizioni in salita e discesa, canzoni emergenti e novità da aimusiclist.com.",
    "when": "Aprila una volta alla settimana per vedere le tendenze. **Statistiche** dice «quanti»; questa scheda dice «salgono o scendono».",
    "click": "Guardarla non modifica il sito. Scegli un periodo in alto e grafici e tabella lo seguiranno.",
    "care": "Il sito registra una riga al giorno. Il primo giorno non c'è ancora nulla da disegnare; dal mattino dopo i grafici si riempiono giorno per giorno. I dati oltre circa 2 anni vengono eliminati.",
    "like": "È il diario che il negozio compila ogni giorno. Dopo alcune settimane puoi sfogliarlo e vedere cosa è cambiato."
  },
  "help.an.period": {
    "t": "Periodo (7 / 30 / 90 giorni / Tutto)",
    "what": "Questi pulsanti scelgono quanti giorni mostrare nei grafici e nella tabella. **Tutto** mostra ogni giorno registrato finora.",
    "when": "Usa 7 giorni per la settimana, 30 o 90 per periodi più lunghi e **Tutto** per vedere l'intera storia di una canzone.",
    "click": "I grafici e la tabella cambiano subito. La prima volta **Tutto** può richiedere alcuni secondi, perché vengono aperti anche i dati più vecchi.",
    "care": "Alcune sezioni guardano sempre agli ultimi 7 giorni: **I miei brani in crescita**, la colonna **Variazione 7 giorni** e i dati aimusiclist. **Mi piace e aggiunte alle playlist** mostra al massimo 90 giorni.",
    "like": "È come scegliere quante pagine del diario del negozio leggere insieme."
  },
  "help.an.note.start": {
    "t": "Le registrazioni iniziano oggi",
    "what": "Il sito ha appena cominciato a compilare il diario giornaliero. Non ci sono ancora giorni precedenti da mostrare.",
    "when": "Compare il primo giorno in cui ricevi questa funzione.",
    "click": "Non devi fare nulla. Torna domani: ogni mattina i grafici ricevono un giorno in più.",
    "care": "I giorni precedenti a oggi non possono essere ricostruiti, quindi i grafici partono da adesso.",
    "like": "È la prima pagina di un diario nuovo di zecca: domani avrà già una riga."
  },
  "help.an.note.since": {
    "t": "Registrazioni a partire da",
    "what": "È il primo giorno in cui il tuo sito ha iniziato a conservare dati giornalieri. I grafici non possono mostrare giorni precedenti.",
    "when": "Guardalo se un grafico sembra iniziare troppo tardi.",
    "care": "I dati vengono conservati per circa 2 anni. I mesi più vecchi vengono eliminati automaticamente.",
    "like": "È la data scritta sulla prima pagina del diario del negozio."
  },
  "help.an.note.feed": {
    "t": "Dati aimusiclist",
    "what": "Una volta al giorno il sito riceve un piccolo rapporto da aimusiclist.com: brani in crescita, andamento delle classifiche e notizie. Qui vedi la data del rapporto ricevuto.",
    "when": "Controllala se l'elenco dei brani in crescita o le notizie sembrano vecchi.",
    "click": "Non devi premere nulla. Il rapporto arriva da solo una volta al giorno. Se dice che i dati non sono ancora arrivati, torna domani.",
    "care": "Aprire questa scheda molte volte non richiede ogni volta i dati ad aimusiclist: mostra soltanto il rapporto salvato. Quindi non costa nulla.",
    "like": "È il giornale che il grande mercato lascia ogni mattina davanti alla porta del negozio."
  },
  "help.an.note.feed_old": {
    "t": "I dati di oggi non sono arrivati",
    "what": "Il sito ha provato a ricevere il rapporto di oggi da aimusiclist.com ma non ci è riuscito. Stai vedendo l'ultimo rapporto disponibile.",
    "when": "L'avviso compare automaticamente.",
    "click": "Non devi fare nulla. Il sito riprova da solo domani.",
    "care": "I numeri del tuo sito non cambiano. Solo le schede aimusiclist possono avere un giorno di ritardo. Se succede per molti giorni, controlla il collegamento ad aimusiclist.com.",
    "like": "È una mattina in cui il giornale non arriva: quello di ieri è ancora sul tavolo."
  },
  "help.an.news": {
    "t": "Notizie aimusiclist",
    "what": "Sono i 5 messaggi più recenti di aimusiclist.com. **Rapporto classifiche** parla delle classifiche; **Avviso** comunica cambiamenti del servizio.",
    "when": "Leggili quando vedi un puntino nella scheda **Analisi**: significa che ci sono notizie nuove.",
    "click": "Premi **Leggi di più** per aprire l'articolo completo su aimusiclist.com in una nuova scheda. Aprire Analisi fa sparire il puntino.",
    "care": "Le notizie arrivano una volta al giorno insieme ai dati aimusiclist. Qui non vengono mostrate immagini per mantenere la pagina leggera.",
    "like": "È la bacheca del grande mercato con gli ultimi cinque manifesti."
  },
  "help.an.rank.basis": {
    "t": "Quale classifica disegnare",
    "what": "Scegli quale posizione mostrare nel grafico. **Classifica aimusiclist** è il posto fra tutti i brani aimusiclist; **Classifica del mio sito** è l'ordine Popolari sul tuo sito; **Entrambe** disegna due grafici.",
    "when": "Usa aimusiclist per capire come vai al grande mercato e quella del sito per scoprire i gusti dei tuoi visitatori.",
    "click": "Il grafico cambia subito. La scelta dei brani torna ai primi 3. Cambiano anche **I miei brani in crescita** e la colonna **Variazione 7 giorni**.",
    "care": "All'inizio il grafico usa la classifica aimusiclist, se disponibile. Un brano mai entrato in classifica non appare nell'elenco dei brani da scegliere.",
    "like": "È come scegliere tra il tabellone del grande mercato e quello del tuo negozio."
  },
  "help.an.rank": {
    "t": "Variazioni di classifica",
    "what": "È un grafico a linee delle posizioni giornaliere dei tuoi brani. Ogni canzone ha colore, stile della linea e forma del punto propri.",
    "when": "Usalo per vedere se un brano sale, scende o rimane stabile e per confrontarne alcuni.",
    "click": "Scegli i brani sotto il titolo. Passa il mouse su un punto o toccalo per vedere canzone, data e posizione.",
    "care": "**Più in alto nel grafico è meglio** (il numero 1 è in cima). Se le posizioni sono molto distanti, la scala viene compressa per mostrare tutte le linee e gli intervalli tra le tacche non sono uguali.",
    "like": "È una mappa di scalatori: ogni brano sale una montagna e la cima del grafico è la vetta."
  },
  "help.an.rank.pick": {
    "t": "Scegli brani",
    "what": "I nomi sotto questa riga funzionano come interruttori. Ogni brano selezionato riceve una linea nel grafico.",
    "when": "Scegli poche canzoni da confrontare, per esempio la più nuova e la migliore.",
    "click": "Tocca un nome per aggiungerlo o toglierlo. Il grafico cambia subito. All'inizio sono selezionati i 3 brani meglio classificati.",
    "care": "Puoi scegliere **fino a 8 brani**. Dopo l'ottavo, gli altri non si possono selezionare prima di rimuoverne uno. Le scelte non vengono salvate e si azzerano quando cambi il tipo di classifica.",
    "like": "È come scegliere quali scalatori seguire sulla mappa della montagna."
  },
  "help.an.rank.gap": {
    "t": "Interruzioni della linea",
    "what": "Un'interruzione significa che quel giorno la canzone non aveva una posizione in classifica.",
    "when": "Leggilo se una linea si interrompe e riparte.",
    "care": "È normale. Un brano non ha posizione quando nessuno lo ha ascoltato negli ultimi 7 giorni o i dati del giorno non sono arrivati. Un punto isolato indica che il brano ha avuto una posizione in un solo giorno.",
    "like": "È come uno scalatore che si allontana dal sentiero per un po' e poi ritorna."
  },
  "help.an.sort": {
    "t": "Ordina",
    "what": "Scegli l'ordine della tabella: **Più ascoltati**, **Tempo d'ascolto**, **In crescita** (maggior salto di posizione settimanale) o **Più recenti** (ultimi caricamenti prima).",
    "when": "Usa In crescita per trovare canzoni da condividere ora. Più recenti per controllare come partono le nuove.",
    "click": "La tabella cambia ordine subito. Non viene salvato nulla.",
    "care": "I brani con lo stesso valore vengono ordinati per titolo. In **In crescita**, i nuovi classificati (NEW) vengono dopo quelli con una variazione reale e i brani senza posizione restano ultimi.",
    "like": "È come ordinare i dischi sullo scaffale per vendite, durata d'ascolto, tendenza o data d'arrivo."
  },
  "help.an.table": {
    "t": "Tutti i miei brani a colpo d'occhio",
    "what": "È una tabella delle tue canzoni con ascolti, tempo d'ascolto, posizione aimusiclist, variazione di 7 giorni e data di caricamento.",
    "when": "Usala per trovare i brani più forti e quelli che cominciano a salire.",
    "click": "Usa i pulsanti di ordinamento accanto al titolo. Vengono mostrati fino a 200 brani.",
    "care": "Sono elencate soltanto le canzoni con file audio. Su un telefono piccolo, la colonna **Caricato** è nascosta per risparmiare spazio.",
    "like": "È il listino completo dei dischi sugli scaffali del negozio."
  },
  "help.an.own_off": {
    "t": "Le riproduzioni sul mio sito non vengono contate",
    "what": "Il sito non può ancora contare i propri ascolti, quindi la colonna **Riproduzioni** mostra al loro posto quelli di aimusiclist degli ultimi 7 giorni.",
    "when": "L'avviso compare da solo.",
    "click": "Non devi premere nulla. Se attivi il conteggio degli ascolti (vedi gli avvisi nella scheda **Statistiche**), la colonna passerà alle riproduzioni del tuo sito.",
    "care": "In questo caso la colonna Riproduzioni non segue i pulsanti del periodo: mostra sempre gli ultimi 7 giorni.",
    "like": "Il tuo negozio non ha un contatore, quindi per ora prende in prestito i numeri del grande mercato."
  },
  "help.an.col.plays": {
    "t": "Riproduzioni",
    "what": "Conta quante volte la canzone è stata ascoltata sul tuo sito nel periodo selezionato.",
    "when": "Usalo per trovare i brani più ascoltati.",
    "care": "Più alto è meglio. Gli ascolti passati da aimusiclist non sono qui. – significa che non ci sono dati per il brano.",
    "like": "È quante volte questo disco è stato messo sul giradischi del negozio."
  },
  "help.an.col.time": {
    "t": "Tempo di ascolto",
    "what": "È una stima del tempo complessivo ascoltato per questo brano: **riproduzioni × durata della canzone**.",
    "when": "Usalo per confrontare più equamente una canzone corta con una lunga.",
    "care": "È una **stima**. Il sito non sa se chi ascolta interrompe a metà, quindi il tempo reale può essere minore. I brani senza durata salvata mostrano –.",
    "like": "È come stimare quanto ha suonato il giradischi: numero di giri per durata di un lato."
  },
  "help.an.col.rank": {
    "t": "Posizione su aimusiclist",
    "what": "È l'ultima posizione del brano fra tutte le canzoni di aimusiclist.",
    "when": "Usala per vedere quale dei tuoi brani va meglio al grande mercato.",
    "care": "Un numero più piccolo è migliore. Cambia una volta alla settimana (venerdì). – significa nessuna posizione, normale per una canzone mai ascoltata questa settimana.",
    "like": "È il numero del tuo disco nell'elenco completo del grande mercato."
  },
  "help.an.col.rise": {
    "t": "Variazione 7 giorni",
    "what": "Indica di quanti posti è cambiata la posizione del brano rispetto a 7 giorni prima.",
    "when": "Usalo per scoprire le canzoni che stanno iniziando a salire.",
    "click": "Non c'è niente da premere. ▲ significa salita di quel numero di posti, ▼ discesa, – nessun cambiamento. **NEW** indica che 7 giorni fa il brano non era classificato.",
    "care": "▲ è positivo. Usa il tipo di classifica scelto in **Variazioni di classifica** (aimusiclist o mio sito). Se manca un giorno, viene usato il più vicino fra i 3 precedenti.",
    "like": "È come controllare quanti passi verso la cima ha fatto uno scalatore questa settimana."
  },
  "help.an.col.uploaded": {
    "t": "Caricato",
    "what": "È il giorno in cui hai caricato la canzone sul tuo sito.",
    "when": "Usalo per confrontare i brani nuovi con quelli vecchi.",
    "care": "Sugli schermi piccoli la colonna è nascosta. Gira il telefono in orizzontale o usa un computer per vederla.",
    "like": "È la data stampata sulla scatola quando il disco è arrivato in negozio."
  },
  "help.an.mine": {
    "t": "I miei brani in crescita",
    "what": "Mostra fino a 5 canzoni la cui posizione è salita di più questa settimana, con una piccola linea per gli ultimi 14 giorni.",
    "when": "Usalo per scegliere quale canzone condividere ora. Una che sta già salendo può crescere ancora con un piccolo aiuto.",
    "click": "Non c'è nulla da premere. Ogni scheda mostra di quanti posti è salita e la posizione di 7 giorni fa rispetto a oggi.",
    "care": "Considera sempre gli **ultimi 7 giorni**. Segue il tipo di classifica scelto in **Variazioni di classifica**, indicato sotto il titolo. Comprende solo brani che sono davvero saliti.",
    "like": "È l'angolo «di tendenza questa settimana» del tuo negozio."
  },
  "help.an.aml.genre": {
    "t": "Genere",
    "what": "Scegli un genere per vedere solo i brani in crescita di quello stile. **Tutti i generi** mostra l'elenco completo.",
    "when": "Scegli il tuo genere per vedere con chi ti confronti.",
    "click": "L'elenco cambia immediatamente. Non viene salvato nulla.",
    "care": "Nell'elenco compaiono soltanto i generi che oggi hanno brani in crescita.",
    "like": "È come percorrere soltanto il corridoio R&B del grande mercato."
  },
  "help.an.aml": {
    "t": "In crescita su aimusiclist",
    "what": "Sono le canzoni di tutti gli artisti su aimusiclist che stanno salendo rapidamente. Le tue sono segnate **Il mio brano**.",
    "when": "Usalo per conoscere la musica popolare del momento e trovare artisti da cui imparare.",
    "click": "Premi un titolo per aprire il brano su aimusiclist in una nuova scheda e ascoltarlo lì. Questa schermata non riproduce canzoni.",
    "care": "L'elenco arriva una volta al giorno con i dati aimusiclist. ▲ indica quanti posti è salita una canzone; **NEW** significa nuovo ingresso. Il numero degli ascoltatori indica quante persone l'hanno sentita.",
    "like": "È come girare per il grande mercato e vedere davanti a quali bancarelle c'è più fila oggi."
  },
  "help.an.s1": {
    "t": "Partenza dei nuovi brani",
    "what": "È un grafico che somma giorno per giorno gli ascolti sul tuo sito nei primi 7 giorni dopo il caricamento. Mostra fino a 6 canzoni recenti.",
    "when": "Usalo per confrontare l'inizio di un nuovo brano con quelli precedenti. Questo parte più forte?",
    "click": "Passa il mouse su un punto o toccalo per vedere brano, giorno e ascolti totali. L'elenco sotto il grafico indica a quale canzone corrisponde ogni linea.",
    "care": "Compaiono solo brani caricati **dopo l'inizio della registrazione**. Se il sito non può contare i propri ascolti, il riquadro resta vuoto.",
    "like": "È una gara in cui ogni disco parte da zero e guardi chi corre più lontano nella prima settimana."
  },
  "help.an.s2": {
    "t": "Distanza dalla Top 100",
    "what": "Per un massimo di 5 tuoi brani indica quanto sono lontani, all'incirca, dalla classifica Top 100 di aimusiclist.",
    "when": "Usalo per fissare un obiettivo, per esempio «circa 20 ascoltatori in più questa settimana».",
    "click": "Non devi premere nulla. Ogni riga dice se il brano è già nella Top 100, quanti altri ascoltatori potrebbero servire oppure che è vicino.",
    "care": "È una **stima**, non una promessa. La classifica reale considera altri fattori, quindi anche un brano vicino può restare fuori. Se la Top 100 non è ancora piena, entrano i brani che rispettano la regola d'ingresso.",
    "like": "È come un cartello sul sentiero di montagna: «circa 200 passi alla cima»."
  },
  "help.an.s2.note": {
    "t": "Perché è una stima",
    "what": "aimusiclist non comunica al tuo sito il numero esatto di ascoltatori. Quindi questa scheda fa una stima usando le **riproduzioni valide** su aimusiclist negli ultimi 7 giorni.",
    "when": "Leggilo se i numeri del riquadro ti sembrano strani.",
    "care": "aimusiclist conta **una riproduzione per persona al giorno**. Quindi il numero reale di ascoltatori diversi può essere inferiore alle riproduzioni. Usa il risultato solo come indicazione approssimativa.",
    "like": "È come indovinare quanti visitatori ci sono stati dalle impronte: qualcuno è passato due volte."
  },
  "help.an.s3": {
    "t": "Mi piace e aggiunte alle playlist",
    "what": "Mostra giorno per giorno quanti Mi piace e aggiunte alle playlist hanno ricevuto i brani su aimusiclist e quali canzoni ne hanno avuti di più.",
    "when": "Usalo per capire quali canzoni le persone amano davvero, non solo quali ascoltano una volta.",
    "click": "Passa il mouse su una barra o toccala per vedere data e numero.",
    "care": "Più alto è meglio. Mostra al massimo gli ultimi **90 giorni**, anche se scegli **Tutto**. I numeri arrivano una volta al giorno da aimusiclist.",
    "like": "È come contare i cuori e gli adesivi «porta a casa» sulla bancarella al grande mercato."
  },
  "help.an.s3.likes": {
    "t": "Mi piace su aimusiclist",
    "what": "Ogni barra rappresenta un giorno e mostra quanti Mi piace hanno ricevuto complessivamente i tuoi brani su aimusiclist in quella giornata.",
    "when": "Usalo per capire se i Mi piace aumentano dopo un'uscita o una condivisione.",
    "care": "Più alto è meglio. Sono soltanto i Mi piace su aimusiclist; quelli del tuo sito sono nella scheda **Statistiche**.",
    "like": "È il conteggio giornaliero dei cuori sulla bacheca della tua bancarella."
  },
  "help.an.s3.adds": {
    "t": "Aggiunte alle playlist",
    "what": "Ogni barra rappresenta un giorno e indica quante volte le persone hanno aggiunto i tuoi brani alle playlist su aimusiclist.",
    "when": "Usalo per vedere se le persone vogliono conservare e riascoltare le tue canzoni.",
    "care": "Più alto è meglio. L'aggiunta a una playlist è uno dei segnali più forti che una canzone piace.",
    "like": "È come contare ogni giorno i clienti che hanno comprato il disco da portare a casa."
  },
  "help.an.s3.top": {
    "t": "Più apprezzati e aggiunti",
    "what": "Mostra fino a 5 canzoni che hanno ricevuto più Mi piace (♥) e aggiunte alle playlist (+) su aimusiclist negli ultimi 7 giorni.",
    "when": "Usalo per scegliere un brano per il prossimo post o da mettere all'inizio di un album.",
    "care": "Considera sempre gli **ultimi 7 giorni**. I brani vengono ordinati sommando Mi piace e aggiunte.",
    "like": "È lo scaffale dei «preferiti dei fan» nel negozio."
  },
  "help.an.s4": {
    "t": "La mia posizione nel genere",
    "what": "Per un massimo di 6 brani mostra la posizione nella classifica aimusiclist del loro genere e la percentuale fra i migliori.",
    "when": "Usalo per capire quanto è forte una canzone rispetto ad altre dello stesso stile.",
    "click": "Non devi premere nulla. Quando un brano è tra i primi 20 del genere, appare **nella Top 20**.",
    "care": "Una posizione più bassa e una percentuale più piccola sono migliori (essere nell'1% migliore è ottimo). Se non conosciamo la dimensione del genere, la percentuale considera tutte le canzoni di aimusiclist. Se manca una posizione nel genere, viene segnalato.",
    "like": "È come conoscere il tuo posto sullo scaffale R&B del grande mercato anziché in tutto il mercato."
  },
  "help.site.seo": {
    "t": "Fatti trovare nei motori di ricerca (Google)",
    "what": "Queste impostazioni aiutano i motori di ricerca come Google a trovare il tuo sito. Ogni brano e album ha una pagina dedicata che può comparire nei risultati.",
    "when": "Vieni qui se vuoi nascondere il sito dai risultati di ricerca o registrarlo su Google Search Console.",
    "click": "Questo titolo serve solo a spiegare la sezione. L'interruttore e i passaggi qui sotto permettono di agire.",
    "care": "Per comparire su Google possono volerci da alcuni giorni a qualche settimana. Questo non cambia nulla su aimusiclist.com.",
    "like": "È come segnare il nome del tuo negozio e ogni disco sulla mappa della città."
  },
  "help.site.seo_switch": {
    "t": "Mostra i miei brani e album nei risultati di ricerca",
    "what": "Permette ai motori di ricerca di mostrare la pagina iniziale, i brani e gli album del tuo sito. All'inizio è attivo.",
    "when": "Lascialo attivo se vuoi che nuovi ascoltatori ti trovino facendo una ricerca. Disattivalo solo se preferisci un sito riservato.",
    "click": "La modifica viene salvata subito. Se lo disattivi, le pagine chiedono ai motori di ricerca di non mostrarle e la mappa del sito per la ricerca viene rimossa.",
    "care": "Le pagine già presenti nei risultati di ricerca possono impiegare un po' a sparire. Chi conosce l'indirizzo può comunque visitare il sito.",
    "like": "È come il cartello «aperto al pubblico» sulla porta del negozio."
  },
  "help.site.gsc": {
    "t": "Registra il mio sito su Google Search Console",
    "what": "Una guida passo passo per far conoscere il tuo sito a Google usando il tuo account Google.",
    "when": "Fallo una volta se vuoi che Google trovi prima i nuovi brani e vuoi sapere come le persone ti cercano.",
    "click": "Apri le istruzioni e seguile dall'inizio alla fine. Basta farlo una volta.",
    "care": "Ti serve un account Google. Se qualcosa va storto, puoi ripetere i passaggi senza danneggiare nulla.",
    "like": "È come firmare il registro dell'ufficio mappe della città, così controlleranno più spesso il tuo negozio."
  },
  "help.site.gsc_open": {
    "t": "Apri Google Search Console",
    "what": "Apre la pagina ufficiale di Google in una nuova scheda.",
    "when": "Premilo al primo passaggio.",
    "click": "Accedi con il tuo account Google, poi torna a questa scheda per il passaggio successivo.",
    "care": "Questa pagina appartiene a Google, non al tuo sito."
  },
  "help.site.gsc_copy": {
    "t": "Copia",
    "what": "Copia l'indirizzo che trovi accanto al pulsante.",
    "when": "Premilo quando le istruzioni ti chiedono di incollare l'indirizzo del sito o quello della mappa del sito.",
    "click": "Poi incolla l'indirizzo nel campo della pagina di Search Console.",
    "care": "Se la copia non funziona sul tuo dispositivo, una piccola finestra mostra l'indirizzo per copiarlo a mano."
  },
  "help.site.gsc_input": {
    "t": "Tag di verifica Google",
    "what": "È il campo in cui inserire il testo fornito da Google per dimostrare che il sito è tuo.",
    "when": "Incolla qui ciò che hai copiato da [[HTML tag]] in Search Console.",
    "click": "Puoi incollare tutto il testo così com'è. Il tuo sito conserva solo la parte necessaria.",
    "care": "Svuota il campo e premi Salva per rimuoverlo.",
    "like": "È come un cartellino con il nome che dice a Google che il negozio appartiene a te."
  },
  "help.site.gsc_save": {
    "t": "Salva",
    "what": "Salva il testo di verifica e lo inserisce nella pagina iniziale del tuo sito.",
    "when": "Premilo dopo aver incollato il testo e prima di premere [[Verify]] in Search Console.",
    "click": "Dopo un momento compare un segno di spunta. Poi torna a Search Console e premi [[Verify]].",
    "care": "Se vedi un messaggio rosso, copia di nuovo tutto il testo da [[HTML tag]] e incollalo qui."
  }
});
