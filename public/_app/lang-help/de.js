// Hilfetexte für die Verwaltung – Deutsch (3-26).
// Die Schlüssel, Platzhalter, Hervorhebungen und Zeilenumbrüche bleiben wie im englischen Original.
AMLHelp.add('de', {
  "_ui": {
    "what": "Was ist das?",
    "when": "Wann brauche ich das?",
    "click": "Was passiert, wenn ich darauf klicke?",
    "care": "Worauf muss ich achten?",
    "like": "Stell es dir so vor",
    "close": "Schließen"
  },
  "help.top.lang": {
    "t": "Sprache",
    "what": "Hier wählst du die Sprache der Verwaltungsseite. Die Liste zeigt alle Sprachen, die das Programm kennt.",
    "when": "Nutze diese Auswahl, wenn du die Texte nicht gut verstehst oder sehen möchtest, wie deine Website in einer anderen Sprache aussieht.",
    "click": "Die Seite wechselt sofort die Sprache. Deine Wahl wird nur in diesem Browser gespeichert. Auf einem anderen Computer oder Handy kann deshalb eine andere Sprache eingestellt sein.",
    "care": "Die Sprache für deine Besucher ändert sich dadurch nicht. Sie wird unter **Website-Sprache** im Bereich Website-Info eingestellt. Öffnest du deine Website im selben Browser, wird dort auch die hier gewählte Sprache angezeigt.",
    "like": "Das ist wie die Sprache der Preisschilder im Lager deines Geschäfts. Das Schild draußen bleibt unverändert."
  },
  "help.setup.title": {
    "t": "Administratorkonto erstellen",
    "what": "Dies ist die erste Seite nach der Installation deiner Website. Hier erstellst du das einzige Konto, mit dem du sie verwaltest: mit E-Mail-Adresse, Passwort und einem Cloudflare-Nutzungsschlüssel.",
    "when": "Diese Seite siehst du normalerweise nur einmal, direkt nach der Installation. Sie erscheint wieder, wenn du die Schritte für ein vergessenes Passwort ausführst.",
    "click": "Das ist nur eine Überschrift. Fülle die Felder darunter aus und klicke auf [[Admin erstellen]].",
    "care": "Wenn du die Website gerade installiert hast, warte zuerst etwa 1 Minute. Cloudflare braucht etwas Zeit, um deinen Songspeicher vorzubereiten. Bei einer Fehlermeldung warte eine Minute und versuche es erneut.\nDu darfst deine Website nicht nach einem berühmten Sänger oder einer bekannten Gruppe benennen.",
    "like": "Das ist, als bekämst du am Eröffnungstag den einzigen Schlüssel für ein neues Geschäft."
  },
  "help.setup.legacy": {
    "t": "Altes Admin-Passwort (AML_ADMIN_TOKEN)",
    "what": "Dieses Feld erscheint nur bei Websites, die auf die alte Weise eingerichtet wurden: Das Admin-Passwort stand dabei in den Cloudflare-Einstellungen.",
    "when": "Gib das frühere Admin-Passwort ein. Du brauchst es nur dieses eine Mal.",
    "click": "Beim Tippen passiert nichts. Das Passwort wird geprüft, wenn du auf [[Admin erstellen]] klickst.",
    "care": "Damit zeigst du, dass die Website wirklich dir gehört und niemand sie übernehmen kann. Bei einem falschen Passwort wird kein Konto erstellt. Suche den Wert in den Cloudflare-Einstellungen dieser Website.",
    "like": "Das ist, als zeigtest du dem Schlüsseldienst einmal deinen alten Ladenschlüssel, bevor er dir einen neuen gibt."
  },
  "help.setup.email": {
    "t": "E-Mail-Adresse",
    "what": "Mit dieser E-Mail-Adresse meldest du dich später an. Auf deiner Website wird sie nicht angezeigt.",
    "when": "Verwende eine E-Mail-Adresse, die du regelmäßig prüfst. Die Adresse deiner Cloudflare-Anmeldung kannst du dir wahrscheinlich leicht merken.",
    "click": "Noch wird nichts gespeichert. Erst wenn du auf [[Admin erstellen]] klickst, wird die Adresse übernommen.",
    "care": "Die Adresse muss richtig aussehen (name@example.com). aimusiclist.com erhält sie auch als nicht öffentliche Kontaktadresse deiner Website. Später kannst du sie unter Website-Info ändern.",
    "like": "Das ist wie dein Name auf dem Schlüsselanhänger deines Geschäfts."
  },
  "help.setup.password": {
    "t": "Passwort (mindestens 6 Zeichen)",
    "what": "Mit diesem Passwort und der E-Mail-Adresse oben meldest du dich an.",
    "when": "Lege es jetzt fest. Verwende mindestens 6 Zeichen. Ein längeres Passwort ist sicherer.",
    "click": "Noch wird nichts gespeichert. Erst wenn du auf [[Admin erstellen]] klickst, wird das Passwort übernommen.",
    "care": "Verwende kein Passwort, das du schon auf anderen Websites nutzt. Falls du es vergisst, kannst du es zurücksetzen. Deine Songs bleiben dabei erhalten.",
    "like": "Das Passwort ist dein Ladenschlüssel. Mache keinen Schlüssel, der auch zu anderen Türen passt."
  },
  "help.setup.password2": {
    "t": "Passwort wiederholen",
    "what": "Gib dasselbe Passwort noch einmal ein.",
    "when": "Direkt nach dem ersten Passwortfeld.",
    "click": "Wenn du auf [[Admin erstellen]] klickst, werden beide Eingaben verglichen.",
    "care": "Sind die Passwörter verschieden, erscheint eine Meldung und es wird nichts erstellt. Gib beide einfach erneut ein.",
    "like": "Das ist, als würdest du den neuen Schlüssel zweimal im Schloss drehen, um zu prüfen, ob er passt."
  },
  "help.setup.token": {
    "t": "Cloudflare-Nutzungsschlüssel (Pflichtfeld, nur Lesen)",
    "what": "Diesen Schlüssel erstellst du bei Cloudflare. Damit kann die Verwaltungsseite anzeigen, wie viel vom kostenlosen Cloudflare-Kontingent deine Website verbraucht.",
    "when": "Erstelle den Schlüssel mit der Anleitung darunter (etwa 2 Minuten), kopiere ihn und füge ihn hier ein.",
    "click": "Sobald du aufhörst zu tippen, wird der Schlüssel automatisch geprüft. Du siehst ein ✓ mit dem Namen deines Cloudflare-Kontos oder ein ✗ mit dem Grund des Fehlers.",
    "care": "Der Schlüssel darf nur Nutzungszahlen und deinen Kontonamen lesen. Er kann nichts ändern oder löschen. Cloudflare zeigt ihn nur einmal an. Füge ihn deshalb gleich nach dem Kopieren ein. Er braucht beide Berechtigungen (Account Analytics · Read und Account Settings · Read).",
    "like": "Das ist wie ein Schlüssel, der nur den Stromzählerkasten öffnet, aber nicht dein Geschäft."
  },
  "help.setup.account": {
    "t": "Cloudflare-Konto",
    "what": "Diese Liste erscheint, wenn dein Nutzungsschlüssel mehr als ein Cloudflare-Konto sehen kann.",
    "when": "Wähle das Konto aus, in dem deine Website installiert ist.",
    "click": "Der Schlüssel wird sofort erneut mit dem ausgewählten Konto geprüft. Ein ✓ bedeutet, dass alles stimmt.",
    "care": "Wählst du das falsche Konto, zeigen die Nutzungsbalken dessen Zahlen oder lassen sich nicht laden.",
    "like": "Das ist, als hättest du Schlüssel für mehrere Gebäude und würdest das mit deinem Geschäft auswählen."
  },
  "help.setup.account_id": {
    "t": "Cloudflare Account ID",
    "what": "Die Kennung deines Cloudflare-Kontos besteht aus 32 Zeichen: den Ziffern 0–9 und den Buchstaben a–f.",
    "when": "Dieses Feld erscheint nur, wenn der Schlüssel dein Konto nicht selbst finden kann. Das passiert, wenn ihm die Berechtigung Account Settings · Read fehlt.",
    "click": "Sobald alle 32 Zeichen eingegeben sind, wird der Schlüssel automatisch erneut geprüft.",
    "care": "Du findest die Kennung bei Cloudflare unter Workers & Pages → Account Details → Account ID (Kopierschaltfläche). Du kannst den Schlüssel auch mit der Schaltfläche in der Anleitung neu erstellen. Dann sind beide Berechtigungen vorhanden und dieses Feld entfällt.",
    "like": "Das ist, als würdest du dem Zählerableser deine Hausnummer sagen, weil das Straßenschild fehlt."
  },
  "help.setup.token_guide": {
    "t": "Nutzungsschlüssel erstellen (2 Minuten)",
    "what": "Fünf kurze Schritte zeigen dir, wie du bei Cloudflare einen Nutzungsschlüssel erstellst.",
    "when": "Lies die Anleitung, während du den Schlüssel erstellst. Klicke auf die Überschrift, um sie zu öffnen oder zu schließen.",
    "click": "Das Öffnen oder Schließen ändert keine Einstellungen. Im ersten Schritt findest du eine Schaltfläche, die Cloudflare öffnet.",
    "care": "Die Bezeichnungen bei Cloudflare können sich etwas ändern. Wenn ein Name anders aussieht, wähle den ähnlichsten. Klicke bei Cloudflare auf [[Continue to summary]], danach auf [[Create Token]] und schließlich auf [[Copy]].",
    "like": "Das ist wie die kleine bebilderte Anleitung zum Zusammenbauen eines neuen Möbelstücks."
  },
  "help.setup.submit": {
    "t": "Admin erstellen",
    "what": "Erstellt dein Administratorkonto mit der E-Mail-Adresse, dem Passwort und dem Nutzungsschlüssel von oben.",
    "when": "Klicke darauf, wenn alle Felder ausgefüllt sind und beim Schlüssel ein ✓ erscheint.",
    "click": "Ist etwas falsch, erscheint neben der Schaltfläche eine Meldung und es wird nichts erstellt. Wenn alles stimmt, bist du angemeldet und die Verwaltungsseite öffnet sich. Außerdem verbindet sich deine Website automatisch mit aimusiclist.com.",
    "care": "Pro Website gibt es nur ein Administratorkonto. Willst du es neu erstellen, musst du die Schritte für ein vergessenes Passwort ausführen. Deine Songs und Alben bleiben auch dann erhalten.",
    "like": "Das ist wie das Durchschneiden des Bands bei einer Eröffnung: Das Geschäft gehört dir und die Türen gehen auf."
  },
  "help.login.title": {
    "t": "Anmelden",
    "what": "Hier geht es zur Verwaltung deiner Website. Nur der Besitzer kann sich mit E-Mail-Adresse und Passwort anmelden.",
    "when": "Diese Seite erscheint, wenn du in diesem Browser nicht angemeldet bist oder deine Anmeldung abgelaufen ist.",
    "click": "Das ist nur eine Überschrift. Fülle die Felder darunter aus und klicke auf [[Anmelden]].",
    "care": "Die Anmeldung bleibt in einem Browser 30 Tage gültig. Wenn du dein Passwort änderst, wirst du auf allen Geräten abgemeldet.",
    "like": "Das ist die verschlossene Hintertür deines Geschäfts. Die Vordertür (deine Website) bleibt für Besucher offen."
  },
  "help.login.email": {
    "t": "E-Mail-Adresse",
    "what": "Die E-Mail-Adresse, die du beim Erstellen deines Administratorkontos gewählt hast.",
    "when": "Gib sie bei jeder Anmeldung ein.",
    "click": "Erst wenn du auf [[Anmelden]] klickst, passiert etwas.",
    "care": "Groß- und Kleinschreibung spielen keine Rolle. Bei einer meshmelo-Website verwendest du die E-Mail-Adresse deines meshmelo-Kontos.",
    "like": "Das ist, als würdest du an der Hintertür zuerst deinen Namen nennen und dann den Schlüssel zeigen."
  },
  "help.login.password": {
    "t": "Passwort",
    "what": "Das Passwort deines Administratorkontos.",
    "when": "Gib es bei jeder Anmeldung ein.",
    "click": "Erst wenn du auf [[Anmelden]] klickst, passiert etwas.",
    "care": "Nach 5 falschen Versuchen hintereinander vom selben Ort wird die Anmeldung für 15 Minuten gesperrt. Die Meldung zeigt dir, wie viele Versuche übrig sind.",
    "like": "Das ist der Schlüssel selbst. Probierst du zu oft den falschen aus, macht das Schloss eine Pause."
  },
  "help.login.submit": {
    "t": "Anmelden",
    "what": "Prüft deine E-Mail-Adresse und dein Passwort und öffnet die Verwaltungsseite.",
    "when": "Klicke darauf, nachdem du beide Felder ausgefüllt hast. Über den Link [[Website ansehen]] daneben öffnest du deine Website so, wie Besucher sie sehen.",
    "click": "Sind die Angaben richtig, öffnet sich die Verwaltungsseite und du bleibst in diesem Browser 30 Tage angemeldet. Andernfalls erscheint darunter eine rote Meldung.",
    "care": "Wenn du dich hier anmeldest, bist du auf deinen anderen Geräten nicht automatisch angemeldet. Jeder Browser braucht seine eigene Anmeldung.",
    "like": "Das ist, als würdest du den Schlüssel umdrehen und das Büro hinter dem Laden betreten."
  },
  "help.login.forgot": {
    "t": "Passwort vergessen?",
    "what": "Hier erfährst du, wie du eine neue E-Mail-Adresse und ein neues Passwort festlegst, wenn du dich nicht mehr an die alten erinnerst.",
    "when": "Nutze diese Hilfe nur, wenn du dich wirklich nicht anmelden kannst. Klicke auf die Überschrift, um die Schritte zu öffnen.",
    "click": "Das Öffnen ändert nichts. Du führst die Schritte selbst aus. Bei einer Cloudflare-Website entfernst du nur die Admin-Informationen aus deinem Songspeicher (R2). Danach erscheint wieder die Seite [[Admin erstellen]].",
    "care": "Deine Songs, Alben und die Verbindung zu aimusiclist.com bleiben erhalten. Entferne nur den einen Eintrag, den die Anleitung nennt. Bei der PHP-Version legst du stattdessen eine leere Datei auf deinem Hosting an. Bei meshmelo setzt du die Zugangsdaten über dein meshmelo-Konto zurück.",
    "like": "Das ist, als würdest du für einen neuen Schlüssel den Schlüsseldienst rufen. Das Geschäft und die Waren darin bleiben unverändert."
  },
  "help.top.mm_acct": {
    "t": "Mein meshmelo-Konto",
    "what": "Ein Link zu deiner meshmelo-Kontoseite. Du siehst ihn nur auf Websites, die von meshmelo gehostet werden.",
    "when": "Dort kannst du Anmeldung und Passwort, Songspeicher, Nutzung, eigene Domain oder das Löschen der ganzen Website verwalten.",
    "click": "Dein meshmelo-Konto öffnet sich in einem neuen Tab. Diese Seite bleibt offen.",
    "care": "Songs, Alben, Menüs, Designs und Statistiken verwaltest du hier, nicht dort. Du weißt nicht, welche Seite du brauchst? Klicke auf das ? neben diesem Link.",
    "like": "Das meshmelo-Konto ist wie die Zentrale für all deine Geschäfte. Diese Verwaltungsseite gehört zu einem einzelnen Geschäft."
  },
  "help.top.view_site": {
    "t": "Website ansehen",
    "what": "Öffnet deine eigene Website, also die Seite, die deine Besucher sehen.",
    "when": "Nutze den Link nach einer Änderung, um das Ergebnis zu prüfen.",
    "click": "Deine Website öffnet sich in einem neuen Tab. Die Verwaltungsseite bleibt offen.",
    "care": "Die meisten Änderungen sind nach etwa 30 Sekunden sichtbar. Weil du angemeldet bist, siehst du möglicherweise auch Dinge, die nur für dich bestimmt sind, zum Beispiel die Wiedergabezahlen der Songs.",
    "like": "Das ist, als würdest du vor dein Geschäft treten und dein Schaufenster mit den Augen der Passanten ansehen."
  },
  "help.top.logout": {
    "t": "Abmelden",
    "what": "Beendet deine Anmeldung in diesem Browser.",
    "when": "Nutze das auf einem gemeinsam genutzten oder geliehenen Computer oder wenn du fertig bist.",
    "click": "Du gelangst sofort zum Anmeldebildschirm zurück. Deine Songs und Einstellungen bleiben unverändert.",
    "care": "Du wirst nur in diesem Browser abgemeldet. Andere Geräte bleiben angemeldet. Um dich überall abzumelden, ändere dein Passwort unter Website-Info.",
    "like": "Das ist wie das Abschließen der Hintertür beim Gehen. Deine anderen Schlüssel funktionieren weiterhin."
  },
  "help.top.version": {
    "t": "Neue Version",
    "what": "Dieser Hinweis erscheint, wenn eine neuere Version des Website-Programms verfügbar ist. Er zeigt deine aktuelle und die neueste Version an.",
    "when": "Wenn du ihn siehst, plane bald ein Update ein. Einmal täglich wird danach gesucht.",
    "click": "[[Update-Anleitung]] öffnet die Anleitung. [[Was ist neu?]] zeigt die Änderungen. Erst beim Aktualisieren wird etwas geändert.",
    "care": "Updates werden nicht erzwungen. Ist der Hinweis rot, ist deine Version älter als die von aimusiclist.com unterstützte Version. Aktualisiere sie bitte bald. Songs und Einstellungen bleiben erhalten. Bei der PHP-Version gibt es hier direkt eine Update-Schaltfläche.",
    "like": "Das ist wie ein Aushang: Für dein Geschäft stehen neue, bessere Regale bereit."
  },
  "help.top.aml": {
    "t": "Verbindung zu aimusiclist.com",
    "what": "Diese Zeile zeigt, ob deine Website mit aimusiclist.com verbunden ist. Nur bei einer Verbindung können deine öffentlichen Songs dort erscheinen und in den Charts landen.",
    "when": "Prüfe den Status nach der Installation und immer dann, wenn deine Songs auf aimusiclist.com fehlen.",
    "click": "Das ist nur eine Statusanzeige: ✓ verbunden · … Verbindung wird hergestellt · ✗ nicht verbunden. Bei Fehlern siehst du den Grund und den nächsten automatischen Versuch.",
    "care": "Eine neue Website verbindet sich von selbst. Klappt es nicht, versucht sie es alle 10 Minuten erneut, höchstens 20 Mal täglich. Bei manchen Fehlern werden die Versuche gestoppt. Behebe dann die Ursache und klicke auf [[Jetzt versuchen]]. Bei pausierten meshmelo-Websites wird hier die Pause angezeigt.",
    "like": "Das ist die Straße von deinem Geschäft zum großen Markt. Solange sie offen ist, kommen deine Platten in die Auslage des Marktes."
  },
  "help.top.lang_missing": {
    "t": "Songs ohne Sprache",
    "what": "Dieser Hinweis bedeutet, dass für manche Songs noch keine Sprache eingetragen ist. Meist sind es ältere Songs, die vor Einführung dieser Einstellung hochgeladen wurden.",
    "when": "Ergänze die Sprache bei Gelegenheit. So finden Menschen auf aimusiclist.com leichter Songs in ihrer Sprache.",
    "click": "Das ist nur ein Hinweis. Klicke auf [[Jetzt festlegen]], um alle betroffenen Songs auf einmal zu korrigieren.",
    "care": "Du wirst zu nichts gezwungen. Bis du die Sprache festlegst, verwendet aimusiclist.com für diese Songs die Hauptsprache deiner Website. Sind alle Songsprachen eingetragen, verschwindet der Hinweis.",
    "like": "Das ist, als fehlte manchen Platten das kleine Etikett mit der Sprache des Gesangs."
  },
  "help.top.pubmin_note": {
    "t": "Zu wenige öffentliche Songs",
    "what": "Dieser Hinweis erscheint, wenn auf aimusiclist.com weniger Songs öffentlich sind als vorgeschrieben. Die Regel lautet: mindestens 10 öffentliche Songs oder alle Songs, falls du weniger als 10 hast.",
    "when": "Er erscheint nur, wenn deine Website unter dieser Zahl liegt, etwa nach dem Löschen von Songs.",
    "click": "Das ist nur ein Hinweis. Klicke auf [[Songs auswählen]], um das zu ändern.",
    "care": "Es wird nichts automatisch veröffentlicht. Solange du die Regel nicht erfüllst, kannst du aber keine weiteren Songs privat stellen. Du entscheidest, welche Songs öffentlich sind, und kannst unerwünschte Songs jederzeit löschen.",
    "like": "Der große Markt verlangt von jedem Geschäft, mindestens 10 Platten ins Schaufenster zu stellen."
  },
  "help.top.profile_note": {
    "t": "Profilbild hinzufügen",
    "what": "Dieser Tipp erscheint, wenn du Songs, aber noch kein Profilbild hast. Das Bild wird auch neben deinen Songs auf aimusiclist.com angezeigt.",
    "when": "Füge bei Gelegenheit ein Bild hinzu. Mit einem Gesicht oder Logo bleiben deine Songs leichter in Erinnerung.",
    "click": "Das ist nur ein Tipp. Klicke auf [[Foto hinzufügen]], um ein Bild auszuwählen.",
    "care": "Du musst kein Bild hinzufügen. Sobald ein Profilbild gespeichert ist, verschwindet der Tipp.",
    "like": "Das ist wie dein Foto an der Ladentür. So wissen die Leute, wem das Geschäft gehört."
  },
  "help.top.genre_sample": {
    "t": "Integrierte Genreliste",
    "what": "Dieser Hinweis bedeutet, dass die aktuelle Genreliste von aimusiclist.com nicht geladen werden konnte. Vorerst wird die Liste aus dem Programm verwendet.",
    "when": "Du musst nichts machen. Meist verschwindet der Hinweis, wenn du die Verwaltungsseite das nächste Mal öffnest.",
    "click": "Das ist nur ein Hinweis.",
    "care": "In der integrierten Liste fehlen möglicherweise die neuesten Genres. Brauchst du eines davon, warte etwas und lade die Seite später neu. Bereits zugewiesene Genres bei Songs und Menüs bleiben erhalten.",
    "like": "Das ist wie ein Katalog vom letzten Jahr, weil der neue vom Markt heute nicht angekommen ist."
  },
  "help.setup.token_open": {
    "t": "Bei Cloudflare erstellen",
    "what": "Öffnet die Seite zum Erstellen eines Cloudflare-Schlüssels in einem neuen Tab. Name und beide Berechtigungen sind bereits eingetragen.",
    "when": "Klicke im ersten Schritt der Anleitung darauf.",
    "click": "Cloudflare öffnet sich in einem neuen Tab. Melde dich bei Bedarf an. Diese Seite bleibt offen, damit du zurückkehren und den Schlüssel einfügen kannst.",
    "care": "Prüfe, ob beide Berechtigungen vorhanden sind: Account Analytics · Read und Account Settings · Read. Falls die Felder leer sind, füge die beiden Einträge selbst hinzu.",
    "like": "Das ist wie ein bereits ausgefülltes Bestellformular. Du musst es nur noch unterschreiben."
  },
  "help.tracks.ai_tool": {
    "t": "Erstellt mit",
    "what": "Das KI-Werkzeug, mit dem du den Song erstellt hast, zum Beispiel Suno. Neben dem Song erscheint ein kleines Schild „✦ Name“.",
    "when": "Wähle das Werkzeug, das du wirklich verwendet hast. Auf der Upload-Karte gilt deine Auswahl für alle Songs dieses Uploads.",
    "click": "Die Auswahl wird beim Hochladen oder mit [[Song speichern]] gespeichert. Beim Hochladen merkt sich dieser Browser deine Auswahl für das nächste Mal.",
    "care": "aimusiclist.com verwaltet die Werkzeugliste. Fehlt dein Werkzeug, wähle „Andere“ und schreibe an admin@aimusiclist.com. Die Auswahl beeinflusst die Platzierung in den Charts nicht.",
    "like": "Das ist wie die Herkunftsangabe auf der Rückseite einer Schallplatte."
  },
  "help.tracks.ai_fill": {
    "t": "Songs ohne KI-Werkzeug",
    "what": "Dieser Hinweis zeigt, für wie viele Songs noch kein KI-Werkzeug eingetragen ist. Er erscheint nur, wenn mindestens ein solcher Song vorhanden ist.",
    "when": "Trage damit das Werkzeug für alle diese Songs auf einmal ein.",
    "click": "Das ist nur ein Hinweis. Wähle unten ein Werkzeug und klicke auf [[Alle auf dieses Werkzeug setzen]].",
    "care": "Sobald für jeden Song ein Werkzeug eingetragen ist, verschwindet der Hinweis von selbst.",
    "like": "Wie ein Zettel auf dem Ladentresen: „Bei 5 Platten fehlt noch der Herstellerstempel.“"
  },
  "help.tracks.ai_fill_btn": {
    "t": "Alle auf dieses Werkzeug setzen",
    "what": "Trägt das ausgewählte Werkzeug bei allen Songs ein, bei denen noch kein KI-Werkzeug angegeben ist.",
    "when": "Nutze das, wenn du die meisten Songs mit demselben Werkzeug erstellt hast, zum Beispiel nach dem Hochladen vieler älterer Songs.",
    "click": "Zuerst wirst du um Bestätigung gebeten. Nach deinem Ja wird alles sofort gespeichert. Neben den Songs erscheint der Name des Werkzeugs mit ✦, sowohl auf deiner Website als auch auf aimusiclist.com.",
    "care": "Nur Songs ohne Werkzeug werden geändert. Bereits eingetragene Werkzeuge bleiben erhalten. Falls einzelne Songs mit einem anderen Werkzeug entstanden sind, korrigiere sie anschließend unter **KI-Werkzeug der ausgewählten Songs** oder über [[Bearbeiten]] beim jeweiligen Song.",
    "like": "Das ist, als würdest du jede Platte ohne Herstellerstempel abstempeln und bereits gestempelte überspringen."
  },
  "help.tracks.bulk_ai": {
    "t": "KI-Werkzeug der ausgewählten Songs",
    "what": "Hier legst du für mehrere angehakte Songs auf einmal fest, mit welchem KI-Werkzeug sie erstellt wurden, zum Beispiel Suno.",
    "when": "Nutze das, wenn viele Songs mit demselben Werkzeug entstanden sind oder du bei mehreren Songs eine falsche Angabe korrigieren möchtest.",
    "click": "Nur das Auswählen eines Werkzeugs speichert noch nichts. Klicke daneben auf [[Anwenden]], um zu speichern.",
    "care": "Wenn du **Nicht festgelegt** auswählst und auf [[Anwenden]] klickst, wird die Werkzeugangabe bei den angehakten Songs entfernt. Fehlt dein Werkzeug, wähle **Andere** und schreibe an admin@aimusiclist.com.",
    "like": "Das ist wie ein gemeinsamer Herstellerstempel auf mehreren Platten."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Anwenden",
    "what": "Speichert das gewählte KI-Werkzeug für alle angehakten Songs.",
    "when": "Klicke darauf, nachdem du die Songs und das Werkzeug ausgewählt hast.",
    "click": "Die Änderung wird sofort gespeichert. Eine kurze Meldung zeigt, wie viele Songs geändert wurden, und die Häkchen werden entfernt. Das kleine ✦ mit dem Werkzeugnamen wird auf deiner Website und auf aimusiclist.com aktualisiert.",
    "care": "Der bisherige Werkzeugname wird ersetzt. Wenn kein Song angehakt ist, erhältst du lediglich den Hinweis, zuerst Songs auszuwählen.",
    "like": "Jetzt wird der Stempel wirklich auf die Platten gedrückt."
  },
  "help.tracks.genre_main": {
    "t": "Hauptgenre",
    "what": "Das wichtigste Genre dieses Songs. Die Liste entspricht dem Genremenü auf aimusiclist.com.",
    "when": "Wähle das Genre, das am besten zum Song passt. Eine Auswahl ist Pflicht.",
    "click": "Die Auswahl wird mit [[Song speichern]] gespeichert. Ist der Song öffentlich, erscheint er dann im entsprechenden Genremenü auf aimusiclist.com.",
    "care": "Ohne Hauptgenre kann der Song nicht gespeichert werden. Die beiden zusätzlichen Genrefelder daneben sind für musikalische Mischungen gedacht.",
    "like": "Das ist der Bereich auf dem großen Markt, in dem deine Platte liegt, zum Beispiel die R&B-Ecke."
  },
  "help.tracks.genre_sub": {
    "t": "Zusätzliches Genre",
    "what": "Bis zu zwei weitere Genres, die im Song vorkommen. Ein R&B-Song mit Rap kann zum Beispiel Hip-Hop als Zusatzgenre erhalten.",
    "when": "Nutze diese Felder, wenn ein einziges Genre nicht ausreicht. Sie sind freiwillig.",
    "click": "Die Auswahl wird mit [[Song speichern]] oder beim Hochladen gespeichert. aimusiclist.com zeigt die Zusatzgenres nach dem Hauptgenre neben dem Titel an.",
    "care": "Du kannst jedes Genre auswählen. Sie sind nach Hauptgenres geordnet. Wählst du dasselbe Genre zweimal, zählt es nur einmal. Mit „— Keines —“ lässt du ein Feld leer.",
    "like": "Das sind kleine Zusatzhinweise auf dem Regaletikett, etwa „mit etwas Hip-Hop“."
  },
  "help.tracks.lang": {
    "t": "Songsprache",
    "what": "Die Sprache, in der der Text dieses Songs gesungen wird. Sie hat nichts mit der Sprache der Website-Oberfläche zu tun.",
    "when": "Wähle die wichtigste Sprache des Liedtexts. Ohne Gesang wählst du „Instrumental (ohne Text)“.",
    "click": "Die Auswahl wird mit [[Song speichern]] gespeichert. aimusiclist.com nutzt sie für die Charts nach Sprache.",
    "care": "Ältere Songs zeigen möglicherweise „Nicht festgelegt (Website-Sprache)“. Dann wird die Standardsprache deiner Website verwendet. Bei „Instrumental“ wird das Feld für die zweite Sprache gesperrt.",
    "like": "Das ist ein Etikett auf der Platte, das die Sprache des Sängers nennt."
  },
  "help.tracks.lang2": {
    "t": "Zweite Sprache (freiwillig)",
    "what": "Eine zweite Sprache, die im Songtext vorkommt, zum Beispiel in einem koreanischen Song mit englischen Zeilen.",
    "when": "Nutze das Feld nur, wenn ein größerer Teil des Songs in einer anderen Sprache gesungen wird.",
    "click": "Die Auswahl wird mit [[Song speichern]] gespeichert. Wähle „— Keines —“, um sie zu entfernen.",
    "care": "Das Feld bleibt gesperrt, bis du die Hauptsprache gewählt hast, und auch bei Instrumentalmusik. Die zweite Sprache darf nicht dieselbe wie die Hauptsprache sein.",
    "like": "Das ist ein zweites kleines Etikett auf der Platte: „auch etwas Englisch“."
  },
  "help.tracks.ai_paste": {
    "t": "KI-Ergebnis einfügen",
    "what": "Hier fügst du den von der KI vorgeschlagenen Titel einschließlich des Teils in ( ) ein. Daraus werden Genre, Stimmung und Sprache gelesen. [[Anleitung öffnen]] zeigt, wie du die KI richtig fragst.",
    "when": "Nutze das Feld, wenn du dich schwer für ein Genre entscheiden kannst oder deine Dateinamen den Teil in ( ) nicht enthalten.",
    "click": "Durch das Einfügen allein ändert sich nichts. Klicke daneben auf [[Anwenden]].",
    "care": "Es werden nur Felder ausgefüllt. Danach musst du den Upload starten oder mit [[Song speichern]] speichern.",
    "like": "Das ist, als würdest du der Aushilfe einen Zettel vom Musikexperten geben. Sie überträgt die Angaben auf das Regaletikett."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Anwenden",
    "what": "Liest den eingefügten Text und füllt daraus Genre, Songsprache und Stimmung aus.",
    "when": "Klicke darauf, nachdem du den Titel aus der KI eingefügt hast.",
    "click": "Beim Hochladen werden die Felder aller noch nicht hochgeladenen Dateien in der Liste ausgefüllt. Beim Bearbeiten gilt es nur für diesen Song. Darunter steht, welche Angaben erkannt wurden. Gespeichert wird noch nichts.",
    "care": "Unbekannte Wörter werden übersprungen und gelb angezeigt. Steht das Hauptgenre nicht in der Liste, bleiben die Genrefelder unverändert. Prüfe alles vor dem Speichern.",
    "like": "Jetzt schreibt die Aushilfe die Angaben des Experten wirklich auf die Etiketten."
  },
  "help.site.ext": {
    "t": "Zusätzliche Angaben",
    "what": "Weitere Felder zu deiner ganzen Website. aimusiclist.com legt fest, welche Felder es gibt, und zeigt deine Antworten bei deinen Songs an.",
    "when": "Fülle aus, was zu dir passt. Alle Felder sind freiwillig; du kannst sie auch leer lassen.",
    "click": "Die Angaben werden zusammen mit der Karte gespeichert, wenn du auf [[Website-Info speichern]] klickst. Wenn du ein Feld leer machst, wird diese Antwort gelöscht.",
    "care": "Diese Gruppe erscheint nur, wenn aimusiclist.com zusätzliche Felder für Websites anbietet. Steht bei einem Feld, dass ein Update nötig ist, kannst du es noch nicht ausfüllen. Deine bisherige Antwort bleibt sicher gespeichert.",
    "like": "Das ist ein zusätzlicher Fragebogen vom großen Markt (aimusiclist.com), damit dein Stand mehr Informationen zeigen kann."
  },
  "help.tracks.ext": {
    "t": "Zusätzliche Angaben",
    "what": "Weitere Felder zum Song, etwa BPM oder eine kurze Notiz. aimusiclist.com bestimmt die Felder und zeigt deine Antworten neben deinen Songs an.",
    "when": "Trage ein, was du weißt. Alle Felder sind freiwillig.",
    "click": "Gespeichert wird beim Hochladen oder über [[Song speichern]]. Auf der Upload-Karte gelten dieselben Angaben für alle Songs. Beim Bearbeiten löscht ein leeres Feld nach dem Speichern den bisherigen Wert.",
    "care": "Wenn bei einem Feld steht, dass ein Programmupdate nötig ist, kannst du es nach dem Update verwenden. Die Felder erscheinen erst, wenn deine Website die Liste von aimusiclist.com erhalten hat.",
    "like": "Das ist wie das Kleingedruckte auf der Rückseite einer Plattenhülle."
  },
  "help.img.editor": {
    "t": "Bild bearbeiten",
    "what": "Ein kleines Fenster, das dein Bild auf die passende Größe bringt: Songbild 100×100, Albumcover 200×200 oder oberer Banner bis 1600×400.",
    "when": "Es öffnet sich automatisch, wenn du ein Bild für einen Song, ein Albumcover oder einen Banner auswählst.",
    "click": "Entscheide, wie das Bild eingepasst werden soll, prüfe das Ergebnis und klicke auf [[Bild speichern]]. Mit [[Abbrechen]] oder Esc schließt du das Fenster ohne Änderung.",
    "care": "Hochgeladen wird nur eine kleine Kopie, nie dein Originalbild. Je nach Bildart gilt eine Grenze von 50 KB, 100 KB oder 300 KB. Das Bild wird verkleinert, bis es passt.",
    "like": "Das ist eine kleine Werkstatt, die dein Foto passend zuschneidet, bevor es an die Ladenwand kommt."
  },
  "help.img.mode_crop": {
    "t": "Zuschneiden (Rahmen verschieben)",
    "what": "Nur der Teil im hellen Rahmen bleibt erhalten. Der Rest des Bildes wird abgeschnitten.",
    "when": "Wähle das, wenn das Bild zu groß ist oder nicht die richtige Form hat und du nur den schönsten Teil behalten willst, zum Beispiel ein Gesicht.",
    "click": "Ein heller Rahmen erscheint auf dem Bild. Ziehe ihn mit der Maus oder nutze die Pfeiltasten, um den Ausschnitt zu wählen. Über die Leiste für die Rahmengröße wird er größer oder kleiner. Das Ergebnis ändert sich beim Verschieben.",
    "care": "Was außerhalb des Rahmens liegt, wird nicht übernommen.",
    "like": "Das ist, als würdest du mit einer Schere den besten Teil eines Fotos für die Plattenhülle ausschneiden."
  },
  "help.img.mode_fit": {
    "t": "Ganzes Bild verkleinern",
    "what": "Das ganze Bild bleibt erhalten und wird kleiner dargestellt, statt etwas abzuschneiden.",
    "when": "Nutze diese Möglichkeit, wenn nichts abgeschnitten werden darf, zum Beispiel bei einem Logo oder einem Bild mit Text.",
    "click": "Im Ergebnis ist das ganze Bild sichtbar. Bei einem Quadrat (Songbild oder Cover) werden freie Ränder mit der Durchschnittsfarbe des Bildes gefüllt. Beim Banner behält das Bild seine Form und passt innerhalb von 1600×400.",
    "care": "Ein sehr langes, schmales Bild kann im Quadrat klein aussehen und breite farbige Ränder bekommen.",
    "like": "Das ist wie ein ganzes Poster in einem Rahmen mit farbigem Rand, ohne es zu beschneiden."
  },
  "help.img.frame": {
    "t": "Rahmengröße",
    "what": "Mit dieser Leiste machst du den hellen Zuschneiderahmen größer oder kleiner.",
    "when": "Verkleinere ihn, um einen kleinen Teil wie ein Gesicht näher zu zeigen. Vergrößere ihn, um mehr vom Bild zu behalten.",
    "click": "Während du den Regler verschiebst, ändern sich Rahmen und Ergebnis. Ganz rechts ist der Rahmen so groß, wie das Bild erlaubt.",
    "care": "Bei einem sehr kleinen Ausschnitt aus einem kleinen Bild kann das Ergebnis unscharf werden. Prüfe es vor dem Speichern.",
    "like": "Das ist wie eine Lupe, die du näher ans Foto oder weiter davon weg bewegst."
  },
  "help.img.result": {
    "t": "Ergebnis",
    "what": "Eine Vorschau, die genau zeigt, wie das gespeicherte Bild aussehen wird.",
    "when": "Sieh dir das Ergebnis vor dem Klick auf [[Bild speichern]] an.",
    "click": "Die Vorschau wird automatisch aktualisiert, wenn du den Rahmen bewegst oder den Modus änderst. Noch wird nichts gespeichert.",
    "care": "Große Bilder erscheinen hier etwas kleiner, werden aber in voller Zielgröße gespeichert. Weil die Datei kleiner gemacht wird, kann das gespeicherte Bild etwas weicher wirken.",
    "like": "Das ist wie ein Spiegel, der dein Foto schon im fertigen Rahmen zeigt."
  },
  "help.img.save": {
    "t": "Bild speichern",
    "what": "Erstellt das fertige, kleine Bild und übernimmt es.",
    "when": "Klicke darauf, wenn das Ergebnis gut aussieht.",
    "click": "Ein Songbild oder Banner wird sofort gespeichert und erscheint auf deiner Website. Ein öffentliches Songbild erscheint auch auf aimusiclist.com. Ein Albumcover wird zunächst nur ins Albumfeld übernommen und erst mit [[Album speichern]] gespeichert.",
    "care": "Wenn das Bild noch zu groß ist oder dein Browser dieses Bildformat nicht verarbeiten kann, erscheint eine rote Meldung. Versuche ein einfacheres Bild oder einen kleineren Ausschnitt oder nutze Chrome, Edge oder Firefox.",
    "like": "Das ist wie das Einsetzen des zugeschnittenen Fotos in den Rahmen und das Aufhängen an der Ladenwand."
  },
  "help.img.crop": {
    "t": "Profilfoto",
    "what": "Dieses Fenster passt dein Profilfoto in einen Kreis ein. Es zeigt dein Gesicht oder Logo rund auf deiner Website und auf aimusiclist.com.",
    "when": "Es öffnet sich automatisch, nachdem du ein Profilfoto ausgewählt hast.",
    "click": "Der Kreis bleibt in der Mitte, und du verschiebst das Foto darunter. Ziehe das Foto, nutze den Zoomregler, das Mausrad, zwei Finger oder die Pfeiltasten und + / −. Klicke auf [[Anwenden]], um zu speichern, oder auf [[Abbrechen]] bzw. Esc, um ohne Änderungen zu schließen.",
    "care": "Nur der Teil innerhalb des Kreises wird übernommen. Hochgeladen wird eine kleine Kopie mit 400×400 Pixeln, nicht dein Originalfoto.",
    "like": "Das ist, als würdest du ein Foto hinter einem runden Fenster bewegen, bis dein Gesicht genau in der Mitte ist."
  },
  "help.img.crop_zoom": {
    "t": "Vergrößern und verkleinern",
    "what": "Mit dem Regler und den Schaltflächen − und + machst du das Foto innerhalb des Kreises größer oder kleiner.",
    "when": "Vergrößere es, wenn dein Gesicht im Kreis zu klein wirkt. Verkleinere es, um mehr zu zeigen.",
    "click": "Die Größe ändert sich um die Kreismitte herum. Ganz links füllt das Foto den Kreis gerade aus, ganz rechts ist es viermal so groß. Auch die Vorschauen darunter ändern sich.",
    "care": "Das Foto kann nicht kleiner als der Kreis werden. Es gibt also nie einen leeren Rand. Starkes Vergrößern eines kleinen Fotos kann unscharf aussehen.",
    "like": "Das ist, als würdest du näher an die Kamera herantreten oder weiter weggehen."
  },
  "help.img.crop_rotate": {
    "t": "Drehen",
    "what": "Dreht das Foto um eine Vierteldrehung nach rechts.",
    "when": "Nutze das, wenn dein Foto auf der Seite liegt oder auf dem Kopf steht.",
    "click": "Bei jedem Klick dreht sich das Foto um 90 Grad. Nach vier Klicks ist es wieder am Anfang. Nach jeder Drehung wird es neu zentriert; verschiebe es bei Bedarf erneut.",
    "like": "Das ist wie das Drehen eines Bilderrahmens an der Wand, bis er gerade hängt."
  },
  "help.img.crop_preview": {
    "t": "Vorschau",
    "what": "Zwei kleine Kreise zeigen dir, wie dein Profilfoto später aussieht: einmal groß und einmal winzig.",
    "when": "Prüfe beide vor dem Klick auf [[Anwenden]]. Die kleine Vorschau entspricht ungefähr der Größe in Listen.",
    "click": "Sie ändern sich automatisch, während du das Foto verschiebst, vergrößerst oder drehst. Noch wird nichts gespeichert.",
    "care": "Wenn dein Gesicht im kleinen Kreis kaum zu erkennen ist, vergrößere es etwas.",
    "like": "Das ist, als würdest du von deinem Ladenschild zurücktreten, um zu prüfen, ob es auch von der anderen Straßenseite gut lesbar ist."
  },
  "help.img.crop_apply": {
    "t": "Anwenden",
    "what": "Speichert den Teil innerhalb des Kreises als dein Profilfoto.",
    "when": "Klicke darauf, wenn die Vorschauen gut aussehen.",
    "click": "Das Bild wird sofort gespeichert und erscheint auf deiner Website. aimusiclist.com übernimmt es nach ein bis zwei Minuten. Auch die Farbe im oberen Bereich deiner Website wird aus diesem Foto ausgewählt.",
    "care": "Dein bisheriges Profilfoto wird ersetzt. Um es erneut zu ändern, wähle ein neues Foto.",
    "like": "Das ist wie das Aufhängen deines neuen Porträts im Schaufenster."
  },
  "help.top.profile_go": {
    "t": "Foto hinzufügen",
    "what": "Startet das Hinzufügen deines Profilfotos.",
    "when": "Klicke darauf, wenn du den Hinweis zum fehlenden Profilbild siehst.",
    "click": "Der Bereich Website-Info öffnet sich und dein Gerät bittet dich, ein Bild auszuwählen. Dann schneidest du es zu. Mit Anwenden wird es gespeichert. Besucher und aimusiclist.com sehen es kurz darauf.",
    "care": "Du kannst das Foto später unter Website-Info ändern oder löschen.",
    "like": "Das ist, als würdest du das Foto dem Schildermacher für deinen Laden geben."
  },
  "help.tab.tracks": {
    "t": "Songs",
    "what": "Hier verwaltest du deine Songs. Du lädst sie hoch, änderst Titel, Genres, Sprache, Bild und Liedtext und legst fest, welche auf aimusiclist.com öffentlich sind.",
    "when": "Komm hierher, um Songs hinzuzufügen oder vorhandene zu bearbeiten.",
    "click": "Ein Klick auf den Tab wechselt nur die Ansicht. Die meisten Änderungen darin werden sofort gespeichert.",
    "care": "Pro Upload sind bis zu 20 Songs mit jeweils höchstens 15 MB möglich; jeder muss 30 Sekunden bis 15 Minuten lang sein. Jeder Song braucht ein Hauptgenre und darf bis zu 2 weitere haben. Mindestens 10 Songs müssen öffentlich bleiben, bei weniger Songs alle. Das Löschen eines Songs lässt sich nicht rückgängig machen.",
    "like": "Das ist dein Lager: Hier bringst du neue Platten hinein, beschriftest sie und entscheidest, welche im Schaufenster des Marktes stehen."
  },
  "help.tab.albums": {
    "t": "Alben",
    "what": "Hier fasst du deine Songs zu Alben zusammen, mit Titel, Cover und kurzer Beschreibung.",
    "when": "Komm hierher, wenn du mehrere Songs zusammen präsentieren möchtest.",
    "click": "Der Tab wechselt nur die Ansicht. Ein Album mit 6 bis 35 Songs, die alle eine Audiodatei haben, wird auf aimusiclist.com öffentlich, sobald du es speicherst oder zum gewählten Zeitpunkt.",
    "care": "Du kannst auch ein Album mit weniger als 6 Songs erstellen, aber es bleibt privat. Die Beschreibung darf höchstens 200 Zeichen lang sein. Solange ein Album öffentlich ist, dürfen seine Songs nicht privat werden.",
    "like": "Das ist wie ein Plattenset in einer gemeinsamen Schachtel mit eigenem Cover."
  },
  "help.tab.skins": {
    "t": "Designs",
    "what": "Hier gestaltest du deine Website: Farben, Schrift und Anordnung. Du kannst ein vorhandenes Design verwenden, eines aus der Galerie installieren oder ein eigenes hochladen.",
    "when": "Komm hierher, wenn du das Aussehen ändern möchtest oder ein Punkt anzeigt, dass es eine neue Designversion gibt.",
    "click": "Der Tab wechselt nur die Ansicht. Ein neues Design wird Besuchern nach etwa 30 Sekunden angezeigt, und du kannst jederzeit zum alten zurückkehren.",
    "care": "Hell und Dunkel sind immer vorhanden, zusätzlich sind bis zu 20 weitere Designs möglich. Ein hochgeladenes Design ist eine Datei mit höchstens 100 KB. Beim Designwechsel bleiben Songs und Einstellungen unverändert.",
    "like": "Das ist wie neue Farbe und andere Regale für deinen Laden. Die Platten bleiben dieselben."
  },
  "help.tab.site": {
    "t": "Website-Info",
    "what": "Hier steht alles über deine Website: Name, Künstlername, Hauptsprache, Beschreibung, soziale Links, Bilder, Besucher-Schaltflächen, Werbung, Künstlerliste, Anmeldung und Nutzungsschlüssel.",
    "when": "Komm direkt nach der Installation hierher und immer dann, wenn du ändern möchtest, wie sich deine Website vorstellt.",
    "click": "Der Tab wechselt nur die Ansicht. Manche Karten haben eine eigene Speichern-Schaltfläche; Schalter speichern sofort beim Klicken.",
    "care": "Du darfst keine berühmten Sänger oder Gruppen als Namen verwenden. Website-Name und Künstlername erscheinen auch auf aimusiclist.com. Eine Passwortänderung meldet dich auf allen Geräten ab.",
    "like": "Hier liegen Ladenschild, Namensschild und Unterlagen des Büros in einer einzigen Schublade."
  },
  "help.tab.guestbook": {
    "t": "Gästebuch",
    "what": "Hier hinterlassen Besucher kurze Nachrichten für dich, entweder für die ganze Website oder für einen einzelnen Song. Du kannst das Gästebuch öffnen, schließen und Nachrichten löschen.",
    "when": "Komm hierher, um Nachrichten von Hörern zu lesen oder unerwünschte Beiträge zu entfernen.",
    "click": "Der Tab wechselt die Ansicht und lädt 20 Nachrichten pro Seite. Öffnen, Schließen und Löschen werden sofort gespeichert.",
    "care": "Ein Name darf höchstens 20 Zeichen haben, eine Nachricht 500. Links sind nicht erlaubt; pro Person sind höchstens 50 Nachrichten am Tag möglich. Nachrichten bleiben, bis du sie löschst. Gelöschte Nachrichten sind endgültig weg. Wenn du das Gästebuch schließt, bleiben die bisherigen Beiträge erhalten.",
    "like": "Das ist das Notizbuch an deiner Ladentür, in das Kunden ein paar Worte schreiben."
  },
  "help.tab.domain": {
    "t": "Meine Domain",
    "what": "Hier verbindest du eine eigene Webadresse wie mymusic.com mit deiner Website statt der langen Adresse von der Installation.",
    "when": "Komm hierher, wenn du bereits eine Domain gekauft hast und Besucher diese verwenden sollen.",
    "click": "Der Tab wechselt nur die Ansicht. Die Anleitung zeigt die Schritte (etwa 10 Minuten). Beim Verbinden wird zuerst die Adresse geprüft und dann aimusiclist.com über die neue Adresse informiert.",
    "care": "Besucher werden von der alten Adresse zur neuen weitergeleitet. Songs in vorhandenen Playlists funktionieren weiter. Bei meshmelo-Websites verbindest du die Domain stattdessen in deinem meshmelo-Konto.",
    "like": "Das ist wie eine kurze, leicht zu merkende Straßenadresse für dein Geschäft."
  },
  "help.tab.stats": {
    "t": "Statistiken",
    "what": "Zahlen über deine Website: tägliche Besuche und Wiedergaben, beliebte Songs, Alben, Länder, Besucherquellen, Geräte und Sprachen. Auch deine Zahlen von aimusiclist.com findest du hier.",
    "when": "Komm hierher, um zu sehen, wer was hört und ob das Teilen eines Songs neue Besucher gebracht hat.",
    "click": "Beim Öffnen des Tabs werden die Zahlen geladen. Sie ändern sich einmal am Tag. Mit [[Jetzt aktualisieren]] kannst du die heutigen Zahlen sofort zählen lassen, höchstens einmal pro Minute.",
    "care": "Deine eigenen Besuche während der Anmeldung werden nicht gezählt. Zahlen von aimusiclist.com ändern sich einmal täglich am Morgen. In manchen Einrichtungen können Besuche oder Wiedergaben nicht gezählt werden. Der Tab erklärt dann den Grund und welche Einstellung du aktivieren musst.",
    "like": "Das ist das Besucherbuch und die Verkaufsübersicht deines Geschäfts, bereits für dich zusammengerechnet."
  },
  "help.tab.analysis": {
    "t": "Analyse",
    "what": "Hier erfährst du genauer, wie deine Songs auf aimusiclist.com laufen: Rangänderungen, aufsteigende Songs, Starts neuer Songs, Abstand zu den Top 100, Likes und Playlist-Aufnahmen sowie deine Position im Genre. Auch Neuigkeiten von aimusiclist stehen hier.",
    "when": "Komm hierher, um zu erkennen, welche Songs ankommen und welchen du als Nächstes teilen solltest.",
    "click": "Beim Öffnen siehst du gespeicherte Zahlen. Sie werden einmal täglich gesammelt; häufiges Öffnen ändert nichts. Ein Punkt am Tab kündigt neue Nachrichten von aimusiclist an und verschwindet nach dem Öffnen.",
    "care": "Eine ganz neue Website hat anfangs noch wenig zu zeigen. Mit jedem Tag füllen sich die Diagramme.",
    "like": "Das ist wie der Wochenbericht vom großen Markt darüber, wie deine Platten in seiner Auslage laufen."
  },
  "help.top.mm_two_screens": {
    "t": "Du hast zwei Verwaltungsbereiche",
    "what": "Eine kleine Karte erklärt dir die beiden Orte zur Verwaltung: die Verwaltungsseite dieser Website und dein meshmelo-Konto. Sie zeigt jeweils die Adresse und den Zweck.",
    "when": "Öffne sie, wenn du eine Einstellung nicht findest. Mit dem ? oben kannst du sie auf- und zuklappen.",
    "click": "Das Lesen ändert nichts. Die Schaltfläche darin öffnet dein meshmelo-Konto in einem neuen Tab.",
    "care": "Diese Karte gibt es nur auf meshmelo-Websites.",
    "like": "Das ist wie ein Schild im Flur: „Ladentheke hier entlang, Hauptbüro dort entlang.“"
  },
  "help.top.php_update": {
    "t": "Jetzt aktualisieren",
    "what": "Bei der PHP-Version bringt diese Schaltfläche das Website-Programm auf die neueste Version.",
    "when": "Klicke darauf, wenn ein Hinweis auf eine neue Version erscheint und du eine Minute Zeit hast.",
    "click": "Du wirst zuerst um Bestätigung gebeten. Das Update dauert ungefähr eine Minute, danach lädt die Seite neu. Falls etwas schiefgeht, wird automatisch die alte Version wiederhergestellt.",
    "care": "Deine Songs, Einstellungen und Seiten bleiben erhalten. Schließe die Seite nicht, solange die Aktualisierung läuft. Auf meshmelo-Websites gibt es diese Schaltfläche nicht; meshmelo aktualisiert sie für dich.",
    "like": "Das ist, als würde ein Team nachts die Regale austauschen. Danach stehen alle Platten wieder an ihrem Platz."
  },
  "help.top.usage_r2_storage": {
    "t": "R2-Speicher (10 GB kostenlos)",
    "what": "Zeigt, wie viel Platz deine Dateien in R2, dem Speicher von Cloudflare, belegen. Songs brauchen fast den gesamten Platz.",
    "when": "Prüfe die Zahl, bevor du viele Songs hochlädst.",
    "click": "Das ist nur eine Zahl. Sie wird alle 10 Minuten aktualisiert.",
    "care": "Weniger ist besser. Über 10 GB berechnet Cloudflare deinem Konto Gebühren. Wird der Speicher voll, lösche nicht benötigte Songs oder nutze kleinere Dateien (MP3 statt WAV). Auch anderer Speicher desselben Cloudflare-Kontos zählt dazu.",
    "like": "Das zeigt, wie voll dein Lager ist. Kostenlos gibt es Platz für etwa 10 GB."
  },
  "help.top.usage_class_a": {
    "t": "R2-Schreibvorgänge diesen Monat (1 Million kostenlos)",
    "what": "So oft wurde diesen Monat etwas in R2 gespeichert: Uploads, Bearbeitungen, Umschaltungen und andere Änderungen.",
    "when": "Prüfe die Zahl in Monaten mit vielen Uploads oder Änderungen.",
    "click": "Das ist nur eine Zahl. Sie beginnt jeden Monat wieder bei 0.",
    "care": "Weniger ist besser. Für eine Änderung braucht man nur wenige Schreibvorgänge; selbst 20 Songs auf einmal brauchen ungefähr 60. Eine Million ist also sehr viel. Löschen ist kostenlos. Über dem Freikontingent berechnet Cloudflare Gebühren.",
    "like": "Das zählt, wie oft die Lagertür diesen Monat aufging, um etwas hineinzulegen."
  },
  "help.top.usage_class_b": {
    "t": "R2-Lesevorgänge diesen Monat (10 Millionen kostenlos)",
    "what": "So oft wurde diesen Monat etwas aus R2 gelesen. Meist passiert das, wenn Menschen deine Songs abspielen oder deine Website öffnen.",
    "when": "Schau nach, wenn deine Songs oft abgespielt werden.",
    "click": "Das ist nur eine Zahl. Sie beginnt jeden Monat wieder bei 0.",
    "care": "Wenn die Zahl wächst, hören Menschen deine Musik – das ist gut. Über 10 Millionen berechnet Cloudflare aber Gebühren. Steigt sie sehr schnell, prüfe unter Statistiken, woher die Wiedergaben kommen.",
    "like": "Das zählt, wie oft die Lagertür geöffnet wurde, um eine Platte herauszuholen und abzuspielen."
  },
  "help.top.usage_workers": {
    "t": "Workers-Anfragen heute (100.000 kostenlos)",
    "what": "So oft hat deine Website heute eine Besucheranfrage beantwortet. Das Öffnen der Website und jedes abgespielte Teilstück eines Songs zählen mit.",
    "when": "Prüfe das an gut besuchten Tagen, etwa nachdem du einen Link geteilt hast.",
    "click": "Das ist nur eine Zahl. Jeden Tag um 00:00 UTC (09:00 Uhr koreanischer Zeit) beginnt sie wieder bei 0.",
    "care": "Über 100.000 Anfragen pro Tag stoppt die Website bis zur Zurücksetzung. Dafür fallen keine Gebühren an. Das Limit gilt für dein gesamtes Cloudflare-Konto. Bei der PHP-Version betrifft es deinen Audio-Worker; darüber können Songs nicht mehr abgespielt werden. meshmelo-Websites zeigen diesen Balken nicht.",
    "like": "Das ist, wie viele Kunden eine Aushilfe pro Tag bedienen kann. Ist das Limit erreicht, schließt der Laden bis morgen."
  },
  "help.top.usage_disk_space": {
    "t": "Speicherplatz für Songs und Seiten dieser Website",
    "what": "So viel Speicherplatz belegen die Dateien dieser Website bei deinem Hoster. Den meisten Platz brauchen die Songs.",
    "when": "Prüfe den Wert vor einem großen Upload.",
    "click": "Das ist nur eine Zahl oder ein Balken, wenn das Limit deines Tarifs eingetragen wurde.",
    "care": "Weniger ist besser. Wenn du dich dem Tariflimit näherst, lösche nicht benötigte Songs oder lade kleinere MP3-Dateien hoch. Andere Websites auf demselben Hosting werden hier nicht mitgezählt.",
    "like": "Das zeigt, wie viel Bodenfläche deine Platten in einem gemieteten Geschäft einnehmen."
  },
  "help.top.usage_files": {
    "t": "Dateien (Inodes)",
    "what": "So viele Dateien speichert diese Website bei deinem Hoster. Hosting-Anbieter begrenzen oft nicht nur den Speicherplatz, sondern auch die Anzahl der Dateien.",
    "when": "Prüfe die Zahl, wenn du viele Songs hast oder dein Hoster vor zu vielen Dateien warnt.",
    "click": "Das ist nur eine Zahl oder ein Balken, wenn dein Tariflimit hinterlegt wurde.",
    "care": "Weniger ist besser. Jeder Song bringt mehrere Dateien mit (Audio, Bild, Liedtext). Wenn du ungenutzte Songs löschst, sinkt die Zahl.",
    "like": "Das ist die Anzahl der Kisten in deinem Laden, egal wie klein sie sind."
  },
  "help.top.usage_tracks": {
    "t": "Songs",
    "what": "So viele Songs befinden sich auf dieser Website.",
    "when": "Ein kurzer Blick genügt. Die Zahl hilft dir auch einzuschätzen, wie viel Platz ein Song durchschnittlich braucht.",
    "click": "Das ist nur eine Zahl. Beim Hochladen oder Löschen von Songs ändert sie sich.",
    "care": "Für diese Zahl gibt es keinen Limitbalken.",
    "like": "Das ist die Anzahl deiner Platten im Laden."
  },
  "help.top.usage_disk": {
    "t": "Hosting-Nutzung (diese Website)",
    "what": "In der PHP-Version mit Songs auf deinem eigenen Hosting siehst du hier den Verbrauch dieser Website: Speicherplatz, Anzahl der Dateien und Songs.",
    "when": "Prüfe das vor vielen Uploads, denn Hosting-Tarife haben Grenzen.",
    "click": "Das ist nur eine Überschrift. Die Zahlen werden alle 10 Minuten neu gelesen. [[Aktualisieren]] liest sie sofort.",
    "care": "Die tatsächlichen Grenzen deines Tarifs stehen unter cPanel → Statistics. Balken mit % siehst du nur, wenn du die Grenzen bei der Installation in den Website-Einstellungen eingetragen hast. Sonst erscheinen einfache Zahlen.",
    "like": "Das ist der Zähler für eine gemietete Ladenfläche. Im Mietvertrag steht, wie viel du nutzen darfst."
  },
  "help.top.usage": {
    "t": "Kostenlose Cloudflare-Nutzung",
    "what": "Diese Balken zeigen, wie viel vom kostenlosen Cloudflare-Kontingent dein Konto verbraucht hat: Speicherplatz, Schreib- und Lesevorgänge diesen Monat sowie heutige Anfragen.",
    "when": "Sieh gelegentlich nach, besonders wenn viele Menschen deine Website besuchen.",
    "click": "Das ist nur eine Überschrift. Die Zahlen werden alle 10 Minuten neu gelesen. [[Aktualisieren]] liest sie sofort.",
    "care": "Weniger ist besser. Bei 70 % wird ein Balken orange, bei 90 % rot. Überschreitest du das kostenlose R2-Kontingent, entstehen Kosten. Bei zu vielen Workers-Anfragen stoppt die Website für den Rest des Tages, ohne Zusatzkosten. Die Zahlen gelten für dein gesamtes Cloudflare-Konto, nicht nur für diese Website.",
    "like": "Das ist der Stromzähler deines Ladens. Schau nach, bevor die Rechnung kommt."
  },
  "help.top.usage_refresh": {
    "t": "Aktualisieren",
    "what": "Liest die Cloudflare-Nutzungszahlen sofort, ohne auf die nächste Aktualisierung nach 10 Minuten zu warten.",
    "when": "Klicke nach einem großen Upload oder nachdem du einen neuen Nutzungsschlüssel eingegeben hast.",
    "click": "Die Balken werden gleich aktualisiert und die Zeit neben der Überschrift ändert sich.",
    "care": "Auch die Zahlen von Cloudflare können etwas verzögert sein. Eine frische Abfrage kann daher noch eine Weile denselben Wert zeigen.",
    "like": "Das ist, als würdest du selbst zum Zähler gehen, statt auf den Ableser zu warten."
  },
  "help.top.usage_connect": {
    "t": "Verbinden",
    "what": "Erscheint, wenn noch kein Nutzungsschlüssel hinterlegt ist. Mit diesem Schlüssel kann die Seite die kostenlosen Cloudflare-Grenzen anzeigen.",
    "when": "Klicke darauf, um den Schlüssel hinzuzufügen. Das dauert ungefähr 2 Minuten.",
    "click": "Der Bereich Website-Info öffnet sich bei der Karte **Nutzung anzeigen**. Dort kannst du den Schlüssel einfügen.",
    "care": "Ohne Schlüssel funktioniert deine Website weiterhin, aber du siehst nicht, ob du dich einem Limit näherst. Der Schlüssel kann nur Zahlen lesen.",
    "like": "Das ist wie das Einbauen eines Stromzählers. Das Licht funktioniert auch ohne ihn, aber du kannst den Verbrauch nicht sehen."
  },
  "help.top.usage_retoken": {
    "t": "Schlüssel erneut eingeben",
    "what": "Erscheint, wenn ein Nutzungsschlüssel gespeichert ist, die Zahlen aber nicht gelesen werden konnten. Der Grund steht darüber.",
    "when": "Klicke darauf, wenn der Schlüssel bei Cloudflare gelöscht wurde, abgelaufen ist oder eine Berechtigung fehlt.",
    "click": "Der Bereich Website-Info öffnet sich bei der Karte **Nutzung anzeigen**. Dort fügst du einen neuen Schlüssel ein.",
    "care": "Prüfe zwei Dinge: Der Schlüssel wurde im selben Cloudflare-Konto wie die Website erstellt und besitzt beide Berechtigungen (Account Analytics · Read und Account Settings · Read). Bis zur Lösung des Problems zeigen die Balken möglicherweise noch die letzten gültigen Zahlen.",
    "like": "Das ist, als würdest du einen Zählerschlüssel ersetzen, der nicht mehr funktioniert."
  },
  "help.top.usage_uploaded": {
    "t": "Über diese Verwaltungsseite hochgeladene Audiodateien",
    "what": "Die Gesamtgröße der Songdateien, die du hier hochgeladen hast. Gezählt werden nur Songs dieser Website.",
    "when": "Vergleiche die Zahl mit dem Speicherbalken. Ist der Balken viel größer, belegt etwas anderes in deinem Cloudflare-Konto Platz.",
    "click": "Das ist nur eine Zahl. Beim Hochladen oder Löschen von Songs ändert sie sich.",
    "care": "Die Zeilen darüber erklären, was bei einer Überschreitung des kostenlosen Kontingents passiert. Bei der PHP-Version steht dort auch, wo du die Grenzen deines Hosting-Tarifs findest.",
    "like": "Das ist der Teil des Lagers, den deine eigenen Platten belegen, ohne die Kisten der Nachbarn."
  },
  "help.top.mm_upgrade": {
    "t": "Mehr Platz erhalten (Upgrade)",
    "what": "Mit dieser Schaltfläche kannst du bei meshmelo ein größeres tägliches Nutzungskontingent anfragen. Sie erscheint oben im Warnhinweis, wenn heute mindestens 80 % verbraucht wurden.",
    "when": "Nutze sie, wenn deiner Website oft das kostenlose Tageskontingent ausgeht.",
    "click": "Die Upgrade-Seite von meshmelo oder eine E-Mail an meshmelo öffnet sich. Erst wenn meshmelo alles eingerichtet hat, ändert sich etwas.",
    "care": "Die meisten Websites brauchen das nie. Nach einem einzelnen sehr vollen Tag ist das Kontingent bei der nächsten Zurücksetzung wieder frei.",
    "like": "Das ist wie die Bitte um eine stärkere Stromleitung, wenn dein Laden voller Kunden ist."
  },
  "help.top.mm_use": {
    "t": "Heutige Nutzung",
    "what": "Auf meshmelo-Websites zeigt eine Prozentzahl, wie viel vom kostenlosen Tageskontingent deine Website verbraucht hat. Darunter stehen die letzten 7 Tage.",
    "when": "Schau an Tagen mit vielen Besuchern nach, zum Beispiel nach dem Teilen eines Links.",
    "click": "Das ist nur eine Zahl. Sie beginnt jeden Tag zur Zeit unter dem Balken wieder bei 0 %.",
    "care": "Weniger ist besser, aber ein hoher Wert kann auch viele Besucher bedeuten. Ab 80 % erscheint oben eine Warnung. Bei 100 % sehen Besucher bis zur Zurücksetzung eine kurze „Bald wieder da“-Seite. Die Verwaltung und Wiedergaben auf aimusiclist.com funktionieren weiter.",
    "like": "Das ist der heutige Stromzähler deines Ladens. Ist er voll, schließt die Vordertür bis morgen."
  },
  "help.top.mm_use_notify": {
    "t": "Täglich eine E-Mail senden, wenn 80 % überschritten werden",
    "what": "Ein Kästchen für eine Warnung per E-Mail, wenn die heutige Nutzung über 80 % steigt.",
    "when": "Aktiviere es, wenn du die Verwaltungsseite nicht jeden Tag öffnest.",
    "click": "Das Häkchen wird sofort gespeichert, wenn du es setzt oder entfernst. Du erhältst höchstens eine E-Mail pro Tag.",
    "care": "Die E-Mail warnt dich nur; sie stoppt nichts. Dieses Feld erscheint nur, wenn meshmelo Warn-E-Mails aktiviert hat.",
    "like": "Das ist wie ein Zählerableser, der dir eine Nachricht schickt, wenn das Limit fast erreicht ist."
  },
  "help.top.aml_retry": {
    "t": "Jetzt versuchen",
    "what": "Versucht sofort eine Verbindung zu aimusiclist.com herzustellen, ohne auf den nächsten automatischen Versuch zu warten.",
    "when": "Klicke darauf, wenn der Status „Nicht verbunden“ lautet oder du die angezeigte Ursache behoben hast.",
    "click": "Die Anzeige wechselt zu „Verbindung wird hergestellt…“ und zeigt kurz darauf das Ergebnis. Bei Erfolg werden deine öffentlichen Songs an aimusiclist.com übermittelt.",
    "care": "Liegt der Fehler bei aimusiclist.com, helfen viele Klicks hintereinander nicht. Warte etwas und versuche es später erneut.",
    "like": "Das ist, als würdest du den Markt selbst anrufen, statt auf seinen Rückruf zu warten."
  },
  "help.tracks.list": {
    "t": "Meine Songs",
    "what": "Dies ist die Liste aller Songs auf deiner Website. Die Zahl in Klammern zeigt, wie viele Songs du hast.",
    "when": "Hier findest du Songs und kannst sie auf aimusiclist.com öffentlich oder privat stellen, abspielen, bearbeiten oder löschen.",
    "click": "Hier siehst du die tatsächlich gespeicherte Liste. Schalter und Schaltflächen in jeder Zeile wirken sofort.",
    "care": "Songs ohne Audiodatei tragen den Hinweis **Keine Audiodatei**. Sie zählen nirgendwo mit, bis du eine Datei hinzufügst.",
    "like": "Das ist die Bestandsliste deines Ladens: jede Platte und der Hinweis, ob sie auch auf dem großen Markt (aimusiclist.com) angeboten wird."
  },
  "help.tracks.search": {
    "t": "Songtitel suchen",
    "what": "Mit diesem Feld findest du Songs anhand ihres Titels. In der Liste bleiben nur Songs, deren Titel deine Suchwörter enthält.",
    "when": "Nutze es bei vielen Songs, wenn du einen schnell finden oder mehrere für eine gemeinsame Änderung auswählen willst.",
    "click": "Die Liste ändert sich beim Tippen. Nichts wird gespeichert oder verändert. Leere das Suchfeld, um wieder alle Songs zu sehen.",
    "care": "Gesucht wird nur im Titel, nicht in Genres oder Künstlernamen. Groß- und Kleinschreibung sind egal. [[Alle angezeigten auswählen]] markiert nur die nach der Suche sichtbaren Songs.",
    "like": "Das ist wie die Suche nach einer Platte anhand ihres Titels auf dem Rücken im Ladenregal."
  },
  "help.tracks.nolang": {
    "t": "Nur Songs ohne eingetragene Sprache",
    "what": "Dieses Kästchen zeigt nur Songs, für die noch keine Songsprache (also die Sprache des Liedtexts) festgelegt wurde.",
    "when": "Damit findest du ältere Songs ohne Sprache und kannst alle zusammen korrigieren.",
    "click": "Die Liste ändert sich sofort. Gespeichert wird nichts. Entferne das Häkchen, um wieder alle Songs zu sehen. Die Auswahl funktioniert zusammen mit der Titelsuche.",
    "care": "Bis du eine Sprache einträgst, behandelt aimusiclist.com diese Songs so, als hätten sie die Hauptsprache deiner Website. Schneller Weg: Dieses Kästchen aktivieren, oben alle angezeigten Songs markieren und unter **Songsprache der ausgewählten Songs** auf [[Anwenden]] klicken.",
    "like": "Das ist wie das Heraussuchen aller Platten ohne Etikett für die Gesangssprache."
  },
  "help.tracks.bulk": {
    "t": "Mehrere Songs gleichzeitig ändern",
    "what": "Hier kannst du mehrere Songs auf einmal ändern. Ist kein Song angehakt, siehst du einen kurzen Hinweis. Sobald du Songs markierst, erscheint ihre Anzahl und die Werkzeuge öffnen sich.",
    "when": "Nutze das, wenn du bei vielen Songs dieselbe Änderung vornehmen willst, statt jeden einzeln zu bearbeiten.",
    "click": "Das Markieren speichert noch nichts. Jedes Werkzeug speichert erst beim Klick auf seine eigene [[Anwenden]]-Schaltfläche oder eine andere Schaltfläche. Danach werden die Häkchen entfernt.",
    "care": "Markiere Songs mit den kleinen Kästchen links in jeder Zeile oder oben alle angezeigten Songs. Hier kannst du Stimmung (oder andere Zusatzangaben), Songsprache, KI-Werkzeug und Besucher-Wiedergabezahlen (nur wenn deine Website diese zählt) ändern.",
    "like": "Das ist wie viele Platten auf einmal mit einem Aufkleber zu versehen, statt von Regal zu Regal zu gehen."
  },
  "help.tracks.bulk_lang": {
    "t": "Songsprache der ausgewählten Songs",
    "what": "Legt die Songsprache (Sprache des Liedtexts) für alle angehakten Songs auf einmal fest. Du kannst auch eine zweite Sprache hinzufügen.",
    "when": "Nutze es für viele Songs in derselben Sprache oder um fehlende Sprachangaben nachzutragen.",
    "click": "Die Auswahl der Sprachen speichert noch nichts. Klicke unten auf [[Anwenden]].",
    "care": "Es geht um die Sprache des Liedtexts, nicht der Website. Ein Song ohne Gesang bekommt **Instrumental (ohne Text)**. Das lässt sich nicht mit einer weiteren Sprache kombinieren. aimusiclist.com nutzt die Angabe für die Sprachcharts.",
    "like": "Das ist wie „auf Koreanisch gesungen“ auf viele Plattenetiketten gleichzeitig zu schreiben."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Anwenden",
    "what": "Speichert die gewählte Songsprache für alle angehakten Songs.",
    "when": "Klicke darauf, wenn du Songs markiert und die Sprache ausgewählt hast.",
    "click": "Die Änderung wird sofort gespeichert. Eine kurze Meldung nennt die Anzahl der geänderten Songs und entfernt die Häkchen. aimusiclist.com zeigt die neue Sprache kurz darauf.",
    "care": "Die bisherige Songsprache wird ersetzt. Ist kein Song markiert, bekommst du nur den Hinweis, zuerst Songs auszuwählen.",
    "like": "Jetzt werden die neuen Sprachetiketten wirklich auf die Platten geklebt."
  },
  "help.tracks.select": {
    "t": "Songs auswählen",
    "what": "Das Kästchen oben markiert alle Songs, die gerade in der Liste angezeigt werden. Mit den kleinen Kästchen in den Zeilen markierst du einzelne Songs.",
    "when": "Nutze die Auswahl, bevor du im Feld über der Liste mehrere Songs gleichzeitig änderst.",
    "click": "Ein Häkchen markiert nur den Song, es wird noch nichts gespeichert. Oben erscheint die Anzahl der ausgewählten Songs und die Änderungswerkzeuge öffnen sich.",
    "care": "Das obere Kästchen markiert nur die gerade sichtbaren Songs. Wenn du gesucht oder **Nur Songs ohne eingetragene Sprache** aktiviert hast, werden ausgeblendete Songs nicht mitmarkiert.",
    "like": "Das ist, als würdest du zuerst auf die Platten zeigen, deren Etiketten du ändern möchtest."
  },
  "help.tracks.pub": {
    "t": "Öffentlich auf aimusiclist",
    "what": "Mit dem Schalter in jeder Zeile legst du fest, ob der Song auch auf aimusiclist.com erscheint. Auf deiner eigenen Website ist jeder Song immer sichtbar, unabhängig vom Schalter.",
    "when": "Schalte ihn ein, damit mehr Menschen den Song hören können. Schalte ihn aus, wenn der Song nur auf deiner Website bleiben soll.",
    "click": "Die Änderung wird sofort gespeichert. Ist der Schalter an, erscheint der Song innerhalb von 1–2 Minuten auf aimusiclist.com. Ist er aus, wird der Song dort entfernt.",
    "care": "Bei mindestens 10 Songs müssen 10 öffentlich bleiben, deshalb kannst du nicht darunter gehen. Hast du weniger als 10, müssen alle öffentlich sein (der kleine Hinweis unter der Überschrift zeigt die Regel). Ein blasser Schalter bedeutet, dass der Song zu einem öffentlichen oder später erscheinenden Album gehört. Stelle zuerst das Album auf privat.",
    "like": "Du wählst aus deinen Ladenplatten aus, welche auch im Regal des großen Marktes (aimusiclist.com) stehen."
  },
  "help.tracks.col_title": {
    "t": "Titel",
    "what": "Zeigt Bild, Titel und Künstlername des Songs sowie seine Sprache und kleine Kennzeichen.",
    "when": "Hier kannst du die wichtigsten Songangaben schnell prüfen.",
    "click": "Hier werden nur Informationen gezeigt. Zum Ändern klicke in der Zeile auf [[Bearbeiten]].",
    "care": "Die Kennzeichen bedeuten: **SRT** = zeitgenauer Liedtext vorhanden, **✦ Name** = verwendetes KI-Werkzeug, **Keine Audiodatei** = Audiodatei fehlt, **In einem veröffentlichten Album** = Song gehört zu einem öffentlichen Album. Auf dem Handy steht hier auch die Wiedergabezahl.",
    "like": "Das ist die Vorderseite einer Plattenhülle: Bild, Titel und Künstler."
  },
  "help.tracks.col_genres": {
    "t": "Genres",
    "what": "Zeigt bis zu drei Genres eines Songs. Das erste hervorgehobene Genre ist das Hauptgenre, danach folgen mögliche Zusatzgenres.",
    "when": "Prüfe hier, ob jeder Song zum richtigen Genre gehört.",
    "click": "Hier werden nur Informationen gezeigt. Zum Ändern klicke in der Zeile auf [[Bearbeiten]].",
    "care": "Das Hauptgenre bestimmt das Genremenü auf aimusiclist.com. Die Zusatzgenres stehen dort neben dem Songtitel. Auf dem Handy ist diese Spalte ausgeblendet.",
    "like": "Das ist das Regaletikett, das zeigt, in welchen Bereich des großen Marktes die Platte gehört."
  },
  "help.tracks.col_length": {
    "t": "Länge",
    "what": "Zeigt die Songdauer in Minuten und Sekunden, zum Beispiel 3:25.",
    "when": "So kannst du prüfen, ob die richtige Datei hochgeladen wurde, zum Beispiel wenn ein Song viel zu kurz aussieht.",
    "click": "Hier werden nur Informationen gezeigt. Die Dauer kommt aus der Audiodatei. Um sie zu ändern, lade unter [[Bearbeiten]] eine neue Datei hoch.",
    "care": "Ein Song muss zwischen 30 Sekunden und 15 Minuten lang sein. Auf dem Handy ist diese Spalte ausgeblendet.",
    "like": "Das ist die Spielzeit auf der Rückseite einer Plattenhülle."
  },
  "help.tracks.col_plays": {
    "t": "Wiedergaben",
    "what": "Zeigt, wie oft jeder Song insgesamt auf deiner eigenen Website abgespielt wurde. Zeige auf eine Zahl, um die Werte der letzten 7 Tage und von heute zu sehen.",
    "when": "So erkennst du deine meistgehörten Songs. Eine höhere Zahl ist besser und hilft bei der Entscheidung, welche Songs öffentlich bleiben oder auf ein Album kommen.",
    "click": "Hier stehen nur Zahlen. Sie ändern sich einmal täglich oder sofort, wenn du unter Statistiken auf [[Jetzt aktualisieren]] klickst.",
    "care": "Wiedergaben auf aimusiclist.com zählen hier nicht mit. Die Zahl erscheint nur, wenn deine Website Wiedergaben zählt. Ist sie unerwartet klein, warte auf das Tagesupdate oder klicke auf [[Jetzt aktualisieren]]. **Vor Besuchern verborgen** bedeutet, dass Besucher diese Zahl nicht sehen.",
    "like": "Das ist wie ein Stromzähler an jeder Platte: Er zeigt, wie oft sie in deinem Laden gespielt wurde."
  },
  "help.tracks.row_buttons": {
    "t": "Schaltflächen für Songs",
    "what": "Am Ende jeder Zeile gibt es [[Vorschau]], [[Bearbeiten]] und [[Löschen]].",
    "when": "Damit kannst du einen Song anhören, seine Angaben ändern oder ihn entfernen.",
    "click": "[[Vorschau]] spielt den Song hier ab (mit [[Stopp]] hältst du ihn an). [[Bearbeiten]] öffnet oben das Formular des Songs. [[Löschen]] fragt nach einer Bestätigung und entfernt dann sofort den Song und seine Audiodatei.",
    "care": "Löschen lässt sich nicht rückgängig machen. Der Song verschwindet auch von aimusiclist.com. [[Vorschau]] gibt es nur bei Songs mit Audiodatei. Ein Song aus einem öffentlichen Album kann nicht gelöscht werden, wenn das Album dadurch unter 6 Songs fallen würde.",
    "like": "Das sind die Werkzeuge für eine Platte: abspielen, Etikett ändern oder sie endgültig aus dem Laden nehmen."
  },
  "help.tracks.bulk_plays": {
    "t": "Wiedergabezahlen für Besucher",
    "what": "Hier bestimmst du für die markierten Songs, ob Besucher sehen, wie oft sie abgespielt wurden.",
    "when": "Nutze das, um die Zahl bei einzelnen Songs, etwa ganz neuen, auszublenden oder später wieder anzuzeigen.",
    "click": "Klicke auf [[Anzeigen]] oder [[Ausblenden]], um die Änderung sofort für alle markierten Songs zu speichern.",
    "care": "Besucher sehen die Zahlen nur, wenn unter Website-Info **Wiedergabezahlen für Besucher anzeigen** aktiviert ist. Dieses Feld erscheint nur, wenn deine Website Wiedergaben zählt. Du selbst siehst die Zahlen hier immer.",
    "like": "Das ist wie die Entscheidung, welche Platten ein kleines Schild „120-mal verkauft“ bekommen."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Anzeigen",
    "what": "Lässt Besucher die Wiedergabezahlen der markierten Songs sehen.",
    "when": "Nutze das bei Songs, deren Zahlen bislang verborgen waren.",
    "click": "Die Änderung wird sofort für alle markierten Songs gespeichert, danach werden die Häkchen entfernt. Mit [[Ausblenden]] kannst du sie jederzeit rückgängig machen.",
    "care": "Solange **Wiedergabezahlen für Besucher anzeigen** unter Website-Info deaktiviert ist, sehen Besucher keine Zahlen.",
    "like": "Das ist, als würdest du das Schild „so oft gespielt“ wieder an die Platten hängen."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Ausblenden",
    "what": "Verbirgt die Wiedergabezahlen der markierten Songs vor Besuchern.",
    "when": "Nutze das bei Songs, deren Zahlen du lieber noch nicht zeigen möchtest, etwa direkt nach dem Hochladen.",
    "click": "Die Änderung wird sofort gespeichert, und die Häkchen verschwinden. Ist der Schalter unter Website-Info an, steht unter der Zahl dieser Songs **Vor Besuchern verborgen**. Mit [[Anzeigen]] kannst du das jederzeit rückgängig machen.",
    "care": "Nur die Zahl wird verborgen. Die Songs lassen sich weiterhin abspielen und die Wiedergaben werden weiter gezählt.",
    "like": "Das ist, als würdest du bei einigen Platten das Schild „so oft gespielt“ abnehmen. Die Platten bleiben im Regal."
  },
  "help.tracks.plays_show": {
    "t": "Wiedergabezahl dieses Songs für Besucher anzeigen",
    "what": "Legt fest, ob Besucher sehen, wie oft dieser Song auf deiner Website gespielt wurde, zum Beispiel „1.234 Wiedergaben“.",
    "when": "Entferne das Häkchen, wenn du die Zahl bei diesem Song lieber privat halten möchtest.",
    "click": "Die Wahl wird mit [[Song speichern]] gespeichert. Die Zahl für Besucher wird einmal täglich aktualisiert.",
    "care": "Besucher sehen sie nur, wenn unter Website-Info „Wiedergabezahlen für Besucher anzeigen“ aktiviert ist. Wenn du deine Website angemeldet besuchst, siehst du selbst alle Zahlen.",
    "like": "Das ist wie die Entscheidung, ob an dieser Platte ein kleines Schild mit der Verkaufszahl hängt."
  },
  "help.site.plays": {
    "t": "Wiedergabezahlen",
    "what": "Einstellungen für die Zahl, die anzeigt, wie oft jeder Song auf deiner Website abgespielt wurde. Wiedergaben auf aimusiclist.com gehören nicht dazu.",
    "when": "Hier entscheidest du, ob Besucher diese Zahlen sehen dürfen.",
    "click": "Diese Überschrift erklärt nur die Karte. Wenn dort steht, dass die Zahlen nach Beginn der Zählung erscheinen, sind Statistiken noch nicht aktiviert. Unter Statistiken erfährst du, wie das geht.",
    "care": "Die Zahlen gelten nur für deine eigene Website. Sie werden nicht an aimusiclist.com gesendet und ändern die Rangliste dort nicht.",
    "like": "Das ist der kleine Zähler am Plattenspieler im Laden. Er steigt, wenn jemand eine deiner Platten abspielt."
  },
  "help.site.plays_switch": {
    "t": "Wiedergabezahlen für Besucher anzeigen",
    "what": "Ist der Schalter an, steht bei jedem Song auf deiner Website eine Zahl wie „1.234 Wiedergaben“. Anfangs ist er aus.",
    "when": "Schalte ihn ein, wenn die Zahlen hilfreich sind, etwa um beliebte Songs zu zeigen. Lass ihn aus, wenn du die Zahlen lieber nicht veröffentlichen willst.",
    "click": "Deine Wahl wird sofort gespeichert. Die Zahlen ändern sich einmal täglich oder direkt, wenn du unter Statistiken auf [[Jetzt aktualisieren]] klickst. Mehr Wiedergaben bedeuten mehr Interesse. Einzelne Zahlen kannst du in der Songliste oder beim Bearbeiten ausblenden.",
    "care": "Während du angemeldet bist, siehst du auf deiner Website selbst die Zahlen aller Songs, auch verborgene. Nur du siehst sie. Besucher nicht.",
    "like": "Das ist, als würdest du den Zähler des Plattenspielers so aufstellen, dass Kunden ihn sehen."
  },
  "help.site.likes": {
    "t": "Gefällt mir",
    "what": "Einstellungen für den ♥-Knopf deiner Songs. Besucher tippen darauf, wenn ihnen ein Song gefällt.",
    "when": "Hier kannst du den Knopf auf der ganzen Website anzeigen oder verstecken.",
    "click": "Diese Überschrift erklärt nur die Karte. Der Schalter darunter erledigt die Änderung. Wenn die Karte sagt, dass du Statistiken aktivieren musst, können Likes noch nicht gezählt werden. Siehe den Tab Statistiken.",
    "care": "Likes werden nur auf deiner Website gezählt. Sie werden nicht an aimusiclist.com gesendet und beeinflussen dort keine Ranglisten.",
    "like": "Das ist eine Tafel im Laden, an die Kunden Herzen für ihre Lieblingsplatten kleben."
  },
  "help.site.likes_switch": {
    "t": "Gefällt-mir-Knopf anzeigen",
    "what": "Zeigt oder verbirgt den ♥-Knopf an jedem Song deiner Website. Anfangs ist er eingeschaltet.",
    "when": "Lass ihn an, um zu sehen, welche Songs den Besuchern gefallen. Schalte ihn aus, wenn du keine Herzen auf deiner Website möchtest.",
    "click": "Die Änderung wird sofort gespeichert. Besucher können ohne Anmeldung auf ♥ tippen und den Klick mit einem zweiten Tippen zurücknehmen. Die Zahlen werden einmal täglich aktualisiert. Mehr Herzen sind gut: Mehr Menschen mögen den Song.",
    "care": "Der Knopf erscheint nur, wenn Statistiken aktiviert sind. Beim Ausschalten wird er verborgen, aber bisherige Herzen bleiben gespeichert. Beim erneuten Einschalten erscheinen sie wieder.",
    "like": "Das ist wie das Aufhängen oder Abnehmen der Herzchen-Tafel in deinem Laden."
  },
  "help.site.add": {
    "t": "Zu aimusiclist hinzufügen",
    "what": "Einstellungen für den Knopf „+ aimusiclist“. Damit können Besucher deinen Song in ihre eigene Playlist auf aimusiclist.com legen.",
    "when": "Hier kannst du den Knopf auf deiner Website anzeigen oder verbergen.",
    "click": "Diese Überschrift erklärt nur die Karte. Der Schalter darunter erledigt die Änderung. Wenn die Karte eine Verbindung verlangt, ist deine Website noch nicht mit aimusiclist verbunden und der Knopf kann nicht erscheinen.",
    "like": "Das ist ein Schild „zum großen Markt mitnehmen“ an deinen Platten. Kunden können den Song in ihren eigenen Korb auf aimusiclist.com legen."
  },
  "help.site.add_switch": {
    "t": "Knopf „+ aimusiclist“ anzeigen",
    "what": "Zeigt oder verbirgt den Knopf „+ aimusiclist“ bei deinen Songs und im Player. Anfangs ist er eingeschaltet.",
    "when": "Lass ihn an, damit Hörer deine Songs in Playlists auf aimusiclist speichern und später erneut hören können. Schalte ihn aus, wenn du den Knopf nicht möchtest.",
    "click": "Die Wahl wird sofort gespeichert. Beim Klick öffnet sich ein kleines aimusiclist-Fenster (auf Handys ein neuer Tab). Dort können Besucher ohne Anmeldung eine Playlist auswählen.",
    "care": "Der Knopf erscheint nur bei Songs, die auf aimusiclist öffentlich sind, und erst nach der Verbindung deiner Website. Dieser Schalter veröffentlicht oder versteckt selbst keinen Song.",
    "like": "Das ist wie ein kleiner „In meinen Korb“-Knopf an Platten, die auch auf dem großen Markt angeboten werden."
  },
  "help.site.seo": {
    "t": "In der Google-Suche erscheinen",
    "what": "Hier legst du fest, ob Suchmaschinen wie Google deine Website finden dürfen. Jeder Song und jedes Album hat eine eigene Seite, die in Suchergebnissen erscheinen kann.",
    "when": "Hier kannst du deine Website aus den Suchergebnissen ausblenden oder sie bei Google Search Console anmelden.",
    "click": "Diese Überschrift erklärt nur die Einstellungen. Der Schalter und die Schritte darunter nehmen die Änderungen vor.",
    "care": "Es kann einige Tage bis mehrere Wochen dauern, bis deine Website in Google erscheint. Auf aimusiclist.com ändert sich dadurch nichts.",
    "like": "Das ist, als würdest du deinen Laden und jede Platte auf dem Stadtplan eintragen."
  },
  "help.site.seo_switch": {
    "t": "Meine Songs und Alben in Suchergebnissen anzeigen",
    "what": "Damit dürfen Suchmaschinen deine Startseite sowie die Seiten deiner Songs und Alben anzeigen. Anfangs ist der Schalter eingeschaltet.",
    "when": "Lass ihn an, wenn neue Hörer dich über die Suche finden sollen. Schalte ihn aus, wenn deine Website privat bleiben soll.",
    "click": "Deine Wahl wird sofort gespeichert. Wenn du ihn ausschaltest, bitten deine Seiten Suchmaschinen, sie nicht anzuzeigen. Außerdem wird die Sitemap für Suchmaschinen entfernt.",
    "care": "Schon angezeigte Seiten können erst nach einiger Zeit aus den Suchergebnissen verschwinden. Wer deine Adresse kennt, kann deine Website weiterhin öffnen.",
    "like": "Das ist wie das Schild „Für Besucher geöffnet“ an deiner Ladentür."
  },
  "help.site.gsc": {
    "t": "Meine Website bei Google Search Console anmelden",
    "what": "Eine einfache Schritt-für-Schritt-Anleitung, um Google deine Website über dein eigenes Google-Konto bekannt zu machen.",
    "when": "Mach das einmal, wenn Google neue Songs schneller finden soll und du sehen möchtest, wonach Menschen suchen, um dich zu finden.",
    "click": "Öffne die Anleitung und gehe die Schritte von oben nach unten durch. Du musst das nur einmal machen.",
    "care": "Du brauchst ein Google-Konto. Wenn etwas nicht klappt, kannst du die Schritte wiederholen. Dabei geht nichts kaputt.",
    "like": "Das ist wie ein Eintrag ins Gästebuch beim Stadtplan-Büro, damit dein Laden häufiger besucht wird."
  },
  "help.site.gsc_open": {
    "t": "Google Search Console öffnen",
    "what": "Öffnet die Google-Seite in einem neuen Tab.",
    "when": "Klicke im ersten Schritt darauf.",
    "click": "Melde dich dort mit deinem Google-Konto an. Komme danach für den nächsten Schritt zu diesem Tab zurück.",
    "care": "Das ist eine Google-Seite und kein Teil deiner Website."
  },
  "help.site.gsc_copy": {
    "t": "Kopieren",
    "what": "Kopiert die Adresse daneben.",
    "when": "Klicke darauf, wenn du deine Website-Adresse oder die Sitemap-Adresse in einen Schritt einfügen sollst.",
    "click": "Füge die kopierte Adresse anschließend in das Feld auf der Search-Console-Seite ein.",
    "care": "Falls das Kopieren auf deinem Gerät nicht klappt, erscheint ein kleines Fenster mit der Adresse. Du kannst sie dort selbst kopieren."
  },
  "help.site.gsc_input": {
    "t": "Google-Bestätigungs-Tag",
    "what": "In dieses Feld kommt der Text, den Google dir gibt, um zu bestätigen, dass dir die Website gehört.",
    "when": "Füge hier den Text ein, den du in Search Console unter [[HTML tag]] kopiert hast.",
    "click": "Du kannst den gesamten Text unverändert einfügen. Deine Website speichert nur den Teil, den sie braucht.",
    "care": "Leere das Feld und klicke auf Speichern, um den Text zu entfernen.",
    "like": "Das ist wie ein Namensschild, an dem Google erkennt, dass dir der Laden gehört."
  },
  "help.site.gsc_save": {
    "t": "Speichern",
    "what": "Speichert den Bestätigungstext und fügt ihn auf deiner Startseite ein.",
    "when": "Klicke darauf, nachdem du den Text eingefügt hast, aber bevor du in Search Console auf [[Verify]] klickst.",
    "click": "Nach einem Moment erscheint ein Häkchen. Gehe dann zurück zu Search Console und klicke auf [[Verify]].",
    "care": "Wenn eine rote Meldung erscheint, kopiere den gesamten Text unter [[HTML tag]] noch einmal und füge ihn hier ein."
  },
  "help.tracks.bulk_mood": {
    "t": "Stimmung der ausgewählten Songs ändern",
    "what": "Legt die Stimmung (zum Beispiel Ruhig oder Energiegeladen) aller markierten Songs auf einmal fest. Wenn du bei **Was ändern?** etwas anderes wählst, wird stattdessen diese Zusatzangabe gesetzt.",
    "when": "Nutze das nach vielen Uploads oder um deine Songs nach Gefühl zu ordnen.",
    "click": "Erst beim Klick auf [[Anwenden]] passiert etwas. Dann erhalten alle markierten Songs denselben Wert und er wird gespeichert. Kurz darauf erscheint er neben den Songs auf deiner Website und auf aimusiclist.com.",
    "care": "Die alten Werte dieser Songs werden ersetzt. Dieses Feld erscheint nur, wenn aimusiclist.com Zusatzangaben mit einer Auswahlliste anbietet.",
    "like": "Das ist, als würdest du vielen Platten dasselbe farbige Etikett wie „ruhig“ geben, damit Besucher sie nach Stimmung finden."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Was ändern?",
    "what": "Hier wählst du, welche Zusatzangabe du für die markierten Songs ändern möchtest. Zuerst ist Stimmung ausgewählt.",
    "when": "Ändere die Auswahl, wenn du bei vielen Songs etwas anderes als die Stimmung festlegen möchtest.",
    "click": "Die Auswahl hier ändert nur die Möglichkeiten darunter. Erst mit [[Anwenden]] wird gespeichert.",
    "care": "Die Liste kommt von aimusiclist.com und kann mit der Zeit wachsen. Hier erscheinen nur Angaben, die du aus einer Liste auswählen kannst.",
    "like": "Das ist wie die Auswahl, welche Art Aufkleber du gleich auf die Platten klebst: Stimmung oder etwas anderes."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Anwenden",
    "what": "Speichert den ausgewählten Wert bei allen markierten Songs.",
    "when": "Klicke darauf, wenn du Songs und einen Wert ausgewählt hast.",
    "click": "Die Änderung wird sofort gespeichert. Eine kurze Meldung nennt die Zahl der geänderten Songs, anschließend werden die Häkchen entfernt. Auf aimusiclist.com erscheint die Änderung kurz darauf.",
    "care": "Wenn du **— Löschen (kein Wert) —** auswählst oder bei einer Mehrfachauswahl nichts markierst, wird die Angabe bei diesen Songs entfernt. Ohne ausgewählte Songs bekommst du nur einen Hinweis, zuerst Songs zu markieren.",
    "like": "Jetzt werden die Aufkleber wirklich auf die Platten geklebt."
  },
  "help.top.lang_fix": {
    "t": "Jetzt festlegen",
    "what": "Markiert automatisch alle Songs, für die noch keine Songsprache eingetragen ist, damit du sie zusammen bearbeiten kannst.",
    "when": "Klicke darauf, wenn du den Hinweis auf fehlende Songsprachen siehst.",
    "click": "Der Tab Songs öffnet sich mit nur diesen Songs, die bereits angehakt sind. Das Feld für gemeinsame Änderungen wird bei der Songsprache geöffnet. Wähle dort die Sprache und klicke auf Anwenden. Bis dahin wird nichts gespeichert.",
    "care": "Wenn die Songs unterschiedliche Sprachen haben, entferne bei einigen die Häkchen und bearbeite sie in mehreren Runden.",
    "like": "Das ist, als würdest du alle Platten ohne Sprachetikett auf einen Tisch legen, um sie gemeinsam zu beschriften."
  },
  "help.tracks.aml_box": {
    "t": "Auch auf aimusiclist.com veröffentlichen",
    "what": "Hier entscheidest du, ob der Song auch auf aimusiclist.com erscheinen soll. Auf deiner eigenen Website bleibt er in jedem Fall sichtbar.",
    "when": "Lass das Häkchen an, wenn die ganze Welt den Song hören und er eine Chance auf die Top 100 haben soll. Entferne es, wenn du ihn nur auf deiner Website möchtest.",
    "click": "Die Auswahl wird beim Hochladen oder mit [[Song speichern]] gespeichert. Öffentliche Songs erscheinen einige Minuten später auf aimusiclist.com. Später kannst du den Schalter in der Songliste ändern.",
    "care": "Mindestens 10 Songs müssen öffentlich bleiben, bei weniger als 10 alle. Darum kann ein neuer Song auch ohne Häkchen öffentlich werden oder das Speichern ohne Häkchen abgelehnt werden. Bei Songs in öffentlichen Alben bleibt das Kästchen angehakt; das Entfernen hat erst Wirkung, wenn du das Album privat stellst.",
    "like": "Das ist die Entscheidung, welche Platten aus deinem Laden auch ins Regal des großen Marktes kommen."
  },
  "help.tracks.upload": {
    "t": "Songs hochladen",
    "what": "Hier bringst du neue Songs auf deine Website. Wähle Audiodateien aus, fülle einige Felder für jeden Song aus und starte den Upload.",
    "when": "Nutze das jedes Mal, wenn du neue Songs hast. Du kannst bis zu 20 Songs gleichzeitig hochladen.",
    "click": "Das Auswählen von Dateien legt sie nur in diese Liste. Erst mit [[… Song(s) hochladen]] werden sie gespeichert. Danach sind sie sofort auf deiner Website.",
    "care": "Songs dürfen MP3, M4A oder WAV sein. Jeder Song muss 30 Sekunden bis 15 Minuten lang und höchstens 15 MB groß sein.",
    "like": "Das ist die Hintertür deines Geschäfts, durch die neue Platten kommen, bevor sie ins Regal gehen."
  },
  "help.tracks.choose": {
    "t": "Dateien auswählen",
    "what": "Öffnet ein Fenster, in dem du Audiodateien auf deinem Computer auswählen kannst. Du kannst Dateien auch auf dieses Feld ziehen.",
    "when": "Nutze das, um einen Upload zu starten. Du darfst mehrere Dateien gleichzeitig auswählen.",
    "click": "Die Dateien erscheinen in der Liste darunter. Noch wird nichts hochgeladen. Bei einem falschen Dateityp steht dort sofort „Fehlgeschlagen“.",
    "care": "Bis zu 20 Dateien passen in die Liste. Weitere werden ausgelassen. MP3 und M4A dürfen höchstens 15 MB groß sein. WAV wird hier in MP3 mit 320 kbps umgewandelt; auch diese MP3 darf höchstens 15 MB groß sein (etwa 6½ Minuten). Jeder Song muss zwischen 30 Sekunden und 15 Minuten dauern.",
    "like": "Das ist wie das Legen von Platten in einen Korb. Erst wenn du ihn hineinbringst, stehen sie im Regal."
  },
  "help.tracks.name_tags": {
    "t": "Genre, Stimmung und Sprache aus ( ) im Dateinamen lesen",
    "what": "Wenn diese Option an ist, werden bei einem Dateinamen wie „Midnight Rain (R&B, Neo Soul; Romantic, en)“ die Felder automatisch ausgefüllt. Als Titel bleibt „Midnight Rain“.",
    "when": "Lass sie an, wenn du Songs nach der KI-Anleitung benennst. Schalte sie aus, wenn die Klammern ( ) zum echten Songtitel gehören.",
    "click": "Die Liste wird sofort erneut gelesen. Nur bei Dateien, deren Felder du noch nicht selbst geändert hast, werden Angaben ergänzt. Der Browser merkt sich deine Wahl.",
    "care": "Vor dem „;“ stehen die Genres (zuerst das Hauptgenre), dahinter Stimmungen und Sprachcode. Unbekannte Wörter werden übersprungen und grau markiert. Zusätze wie (Live) oder (feat. X) bleiben im Titel.",
    "like": "Das ist wie eine Aushilfe, die den Aufkleber auf jeder Plattenkiste liest und die Regaletiketten ausfüllt."
  },
  "help.tracks.common": {
    "t": "Für alle Songs dieses Uploads übernehmen",
    "what": "Die Felder unter dieser Überschrift gelten für alle Songs, die du diesmal hochlädst: KI-Werkzeug, Künstler, Zusatzangaben und Veröffentlichung auf aimusiclist.com.",
    "when": "Lege diese Angaben einmal fest, bevor du den Upload startest.",
    "click": "Erst beim Hochladen wird gespeichert. Genre, Stimmung und Songsprache gehören nicht hierher, weil du sie oben für jede Datei einzeln auswählst.",
    "care": "Wenn ein Song andere Angaben braucht, lade ihn zuerst hoch und ändere sie anschließend über [[Bearbeiten]] in der Songliste.",
    "like": "Das ist ein Aufkleber für den ganzen Korb statt für jede einzelne Platte."
  },
  "help.tracks.artist": {
    "t": "Künstler",
    "what": "Der Name des Sängers oder Erstellers, der beim Song angezeigt wird. Zuerst ist dein Website-Name ausgewählt.",
    "when": "Lass bei den meisten Songs den Website-Namen stehen. Wähle einen anderen Namen, wenn du den Song unter einem anderen Künstlernamen veröffentlichst.",
    "click": "Die Auswahl wird beim Hochladen oder über [[Song speichern]] gespeichert. Bleibt der Website-Name ausgewählt und du änderst ihn später, übernimmt der Song den neuen Namen.",
    "care": "Weitere Namen stammen aus der Karte „Weitere Künstler“ unter Website-Info (bis zu 20 Namen). Lege den Namen zuerst dort an.",
    "like": "Das ist der Künstlername unter dem Titel auf der Plattenhülle."
  },
  "help.tracks.up_start": {
    "t": "… Song(s) hochladen",
    "what": "Sendet die wartenden Dateien nacheinander auf deine Website. Die Zahl auf der Schaltfläche zeigt, wie viele Songs warten.",
    "when": "Klicke darauf, wenn jede Datei ein Hauptgenre und eine Songsprache hat.",
    "click": "Jede Zeile zeigt ihren Fortschritt. Wenn alle fertig sind, stehen die Songs auf deiner Website. Öffentliche Songs werden zum Schluss gemeinsam an aimusiclist.com übermittelt.",
    "care": "Solange ein Pflichtfeld leer ist, bleibt die Schaltfläche gesperrt. Lass die Seite während des Uploads offen, denn sie überträgt die Dateien. Schlagen einige fehl, bleiben die anderen trotzdem gespeichert.",
    "like": "Das ist, als würdest du den Korb in den Laden tragen und jede Platte ins Regal stellen."
  },
  "help.tracks.up_retry": {
    "t": "Fehlgeschlagene Songs erneut versuchen",
    "what": "Versucht nur die fehlgeschlagenen Songs erneut hochzuladen, zum Beispiel nach einem Verbindungsabbruch.",
    "when": "Die Schaltfläche erscheint nur, wenn einige Songs fehlgeschlagen sind. Prüfe dein Internet und klicke dann darauf.",
    "click": "Fehlgeschlagene Songs werden erneut gesendet. War ein Song bereits eingetragen, wird nur seine Audiodatei erneut geschickt. Es entsteht kein doppelter Song.",
    "care": "Dateien mit falschem Format können nicht erneut versucht werden. Ist Länge oder Größe das Problem, korrigiere die Datei, entferne die Zeile und füge sie neu hinzu.",
    "like": "Das ist wie das Zurückgehen, um Platten aufzuheben, die unterwegs aus dem Korb gefallen sind."
  },
  "help.tracks.up_clear": {
    "t": "Liste leeren",
    "what": "Entfernt alle Einträge auf einmal aus der Upload-Liste.",
    "when": "Nutze das nach einem fertigen Upload oder wenn du neu anfangen möchtest.",
    "click": "Alle Zeilen verschwinden sofort. Bereits hochgeladene Songs bleiben auf deiner Website.",
    "care": "Während eines Uploads ist die Schaltfläche gesperrt. Angaben zu noch nicht hochgeladenen Dateien gehen verloren.",
    "like": "Das ist wie das Leeren des Korbs. Platten, die bereits im Regal stehen, bleiben dort."
  },
  "help.tracks.edit": {
    "t": "Bearbeiten",
    "what": "Das Formular zum Ändern eines bereits hochgeladenen Songs. Es öffnet sich mit [[Bearbeiten]] in seiner Zeile der Songliste.",
    "when": "Nutze es, um Titel, Genres, Sprache, Künstler und andere Angaben zu korrigieren oder eine neue Audiodatei einzusetzen.",
    "click": "Änderungen im oberen Teil werden erst mit [[Song speichern]] gespeichert. Songbild und Liedtext unten werden sofort beim Ändern gespeichert.",
    "care": "Solange das Formular offen ist, steht es anstelle der Upload-Karte. Mit [[Abbrechen]] oder Speichern kommst du zur Upload-Karte zurück.",
    "like": "Das ist, als würdest du eine Platte aus dem Regal nehmen, um ihr Etikett zu verbessern."
  },
  "help.tracks.title": {
    "t": "Titel",
    "what": "Der Songname, der auf deiner Website und auf aimusiclist.com erscheint.",
    "when": "Ändere ihn, wenn der Titel aus dem Dateinamen falsch ist oder verbessert werden muss.",
    "click": "Die Änderung wird mit [[Song speichern]] gespeichert. Bei öffentlichen Songs erscheint der neue Titel wenig später auf aimusiclist.com.",
    "care": "Der Titel darf nicht leer sein und höchstens 100 Zeichen lang sein.",
    "like": "Das ist der große Name auf der Vorderseite der Plattenhülle."
  },
  "help.tracks.replace_audio": {
    "t": "Audiodatei ersetzen (freiwillig)",
    "what": "Hier wählst du eine neue Audiodatei aus und ersetzt den Klang des Songs. Titel, Genres, Bild und Liedtext bleiben erhalten.",
    "when": "Nutze das, wenn du eine bessere Version gemacht oder die falsche Datei hochgeladen hast.",
    "click": "Erst beim Klick auf [[Song speichern]] wird etwas geändert. Dann wird die neue Datei gesendet und ersetzt die alte.",
    "care": "Nach dem Speichern ist die alte Audiodatei weg. Bewahre deshalb eine Kopie auf deinem Computer auf. Es gelten dieselben Regeln wie beim Upload: MP3, M4A oder WAV, 30 Sekunden bis 15 Minuten, höchstens 15 MB.",
    "like": "Das ist wie eine neue Schallplatte in derselben Hülle."
  },
  "help.tracks.save": {
    "t": "Song speichern",
    "what": "Speichert alle Änderungen, die du oben im Bearbeitungsformular gemacht hast.",
    "when": "Klicke darauf, wenn du Titel, Genres, Sprache oder andere Felder fertig geändert hast.",
    "click": "Die Änderungen werden gespeichert und das Formular schließt sich. Deine Website zeigt sie sofort, aimusiclist.com bei öffentlichen Songs etwas später. Hast du eine neue Audiodatei ausgewählt, wird sie ebenfalls übertragen und der Fortschritt angezeigt.",
    "care": "Das Speichern kann abgelehnt werden, zum Beispiel ohne Hauptgenre oder wenn danach weniger als 10 Songs öffentlich wären. Eine rote Meldung nennt dann den Grund, und nichts wird gespeichert.",
    "like": "Das ist, als würdest du die Platte mit korrigiertem Etikett zurück ins Regal stellen."
  },
  "help.tracks.cancel": {
    "t": "Abbrechen",
    "what": "Schließt das Bearbeitungsformular, ohne die oberen Felder zu speichern.",
    "when": "Nutze das, wenn du den falschen Song geöffnet hast oder es dir anders überlegst.",
    "click": "Das Formular schließt sofort und die Upload-Karte erscheint wieder. Nicht gespeicherte Änderungen gehen verloren.",
    "care": "Songbild und Liedtext werden schon beim Ändern gespeichert. Diese Änderungen macht Abbrechen nicht rückgängig.",
    "like": "Das ist, als würdest du die Platte unverändert ins Regal zurückstellen."
  },
  "help.tracks.image": {
    "t": "Songbild",
    "what": "Das kleine Bild zum Song. Es erscheint hinter dem Wiedergabeknopf auf deiner Website und auf aimusiclist.com.",
    "when": "Ändere es, wenn der Song statt des Standardbildes ein eigenes bekommen soll.",
    "click": "Die Schaltflächen darunter wirken sofort. Sie warten nicht auf [[Song speichern]].",
    "care": "Jeder Song erhält beim Hochladen ein Standardbild. Dein eigenes Bild wird als kleines Quadrat (100×100) gespeichert und bei ausreichend großem Original zusätzlich in einer größeren Version.",
    "like": "Das ist das Plattencover, das man vor dem Abspielen sieht."
  },
  "help.tracks.image_lg": {
    "t": "Bild für große Karten schärfer machen",
    "what": "Dieser Hinweis bedeutet, dass es nur die kleine Version deines Songbildes gibt. Auf großen Karten von aimusiclist.com, etwa ganz oben in den Top 100, kann es unscharf aussehen.",
    "when": "Der Hinweis erscheint bei Bildern, die vor Einführung großer Versionen hochgeladen wurden, oder bei zu kleinen Bildern.",
    "click": "Klicke auf [[Bild ändern]] und lade das Bild erneut hoch. Sobald eine große Version gespeichert ist, verschwindet der Hinweis.",
    "care": "Der zugeschnittene Bildbereich sollte mindestens 200 Pixel breit sein. Aus einem kleineren Bild kann keine große Version entstehen.",
    "like": "Das ist wie der Neudruck einer kleinen Plattenhülle als großes Poster fürs Schaufenster."
  },
  "help.tracks.image_change": {
    "t": "Bild ändern",
    "what": "Damit kannst du ein Bild vom Computer auswählen und als Songbild verwenden.",
    "when": "Nutze das, um dem Song ein eigenes Bild zu geben oder das bisherige zu ersetzen.",
    "click": "Ein Fenster zum Zuschneiden oder Verkleinern öffnet sich. Mit [[Bild speichern]] wird das Bild sofort gespeichert und erscheint auf deiner Website. Bei öffentlichen Songs wird es etwas später auch auf aimusiclist.com angezeigt.",
    "care": "Erlaubt sind JPG, PNG, WebP oder GIF mit höchstens 2 MB. Nur die verkleinerte Version wird hochgeladen, nicht die Originaldatei.",
    "like": "Das ist, als würdest du der Schallplatte eine neue Hülle geben."
  },
  "help.tracks.image_reset": {
    "t": "Zum Standardbild zurückkehren",
    "what": "Entfernt dein hochgeladenes Bild und stellt das Standardbild des Songs wieder her.",
    "when": "Nutze das, wenn du für diesen Song kein eigenes Bild mehr möchtest.",
    "click": "Das passiert sofort und ohne Rückfrage. Deine Website zeigt wieder das Standardbild.",
    "care": "Dein eigenes Bild wird gelöscht, auch die große Version. Wenn du es später wieder möchtest, lade es über [[Bild ändern]] erneut hoch.",
    "like": "Das ist wie das Abnehmen deiner besonderen Hülle und das Zurücklegen in die einfache Ladenhülle."
  },
  "help.tracks.lyrics": {
    "t": "Liedtext (.srt)",
    "what": "Der Text des Songs als .srt-Datei. Darin steht jede Liedzeile zusammen mit ihrer Zeit.",
    "when": "Füge eine solche Datei hinzu, wenn Besucher beim Hören mitlesen sollen. Viele Musik-KI-Werkzeuge können .srt-Dateien ausgeben.",
    "click": "Hochladen und Löschen wirken sofort, ohne [[Song speichern]]. Besucher klicken auf deiner Website beim Song auf SRT und sehen die Wörter ohne Zeitangaben.",
    "care": "Die Datei muss auf .srt enden, als UTF-8-Text gespeichert und höchstens 100 KB groß sein. Sie braucht Zeitzeilen wie 00:00:01,000 --> 00:00:04,000.",
    "like": "Das ist das Textblatt, das in der Plattenhülle liegt."
  },
  "help.tracks.lyrics_upload": {
    "t": ".srt hochladen / .srt ersetzen",
    "what": "Wählt eine .srt-Datei mit Liedtext von deinem Computer für diesen Song aus. Hat der Song schon einen Text, steht hier „Ersetzen“.",
    "when": "Nutze das, um Text hinzuzufügen oder mit einer neuen Datei zu korrigieren.",
    "click": "Sobald du die Datei auswählst, wird sie geprüft und gespeichert. Ein bisheriger Liedtext wird ersetzt. Bei einer ungültigen Datei erscheint eine rote Meldung.",
    "care": "Nur .srt-Dateien bis 100 KB, gespeichert als UTF-8. Dateien ohne Zeitzeilen werden abgelehnt.",
    "like": "Das ist wie ein neues Textblatt in der Plattenhülle."
  },
  "help.tracks.lyrics_view": {
    "t": "Datei ansehen",
    "what": "Öffnet die für diesen Song gespeicherte Liedtextdatei.",
    "when": "Prüfe damit, ob der richtige Text gespeichert wurde.",
    "click": "Die Datei öffnet sich mit Zeitangaben in einem neuen Tab. Nichts wird verändert.",
    "like": "Das ist, als würdest du den Liedtext aus der Plattenhülle ziehen und lesen."
  },
  "help.tracks.lyrics_delete": {
    "t": "Liedtext löschen",
    "what": "Entfernt den Liedtext dieses Songs.",
    "when": "Nutze das, wenn der Text falsch ist und du noch keine bessere Datei hast oder der Song keinen Text haben soll.",
    "click": "Du wirst um Bestätigung gebeten. Wenn du zustimmst, wird der Text sofort gelöscht und das SRT-Zeichen verschwindet beim Song.",
    "care": "Das lässt sich nicht rückgängig machen. Um den Text wiederzubekommen, musst du die .srt-Datei erneut hochladen.",
    "like": "Das ist, als würdest du das Textblatt aus der Hülle nehmen und wegwerfen."
  },
  "help.tracks.upguide": {
    "t": "Genre und Stimmung automatisch eintragen",
    "what": "Eine kurze Anleitung erspart dir, Genre, Stimmung und Sprache für jeden Song einzeln auszuwählen. Du gibst einer kostenlosen KI eine Anleitungsdatei, und sie erstellt den Songtitel in einem besonderen Format.",
    "when": "Lies sie einmal, bevor du deine nächsten Songs erstellst. Besonders bei vielen Uploads spart sie Zeit.",
    "click": "Mit ✕ klappst du die Anleitung zu einer kleinen Schaltfläche zusammen. Mit dieser öffnest du sie wieder. Der Browser merkt sich die letzte Ansicht.",
    "care": "Die Anleitung schreibt dir nicht vor, wie du Musik machen sollst. Sie bestimmt nur die Form des Songtitels.",
    "like": "Das ist, als würdest du das Regaletikett schon auf die Plattenkiste schreiben, bevor sie ankommt."
  },
  "help.tracks.upguide_dl": {
    "t": "Anleitungsdatei für KI herunterladen",
    "what": "Lädt die Anleitungsdatei von aimusiclist.com herunter. Es ist eine einfache Textdatei, die KI lesen kann.",
    "when": "Hänge diese Datei vor dem Erstellen eines Songs an einen Chat mit ChatGPT, Claude oder Gemini an (kostenlose Tarife reichen). Bitte die KI dann um einen Songtitel.",
    "click": "Die Datei wird auf deinem Computer gespeichert. Auf deiner Website ändert sich nichts.",
    "care": "Behalte beim Herunterladen des Songs den Dateinamen, den die Musik-KI vergeben hat. Der Teil in ( ) füllt hier später die Felder aus.",
    "like": "Das ist wie eine Rezeptkarte für einen Helfer, damit die Etiketten jedes Mal gleich aussehen."
  },
  "help.tracks.uf_all": {
    "t": "Für alle Dateien übernehmen",
    "what": "Kopiert den Wert dieses Feldes in dasselbe Feld aller anderen Dateien der Liste.",
    "when": "Nutze das, wenn viele Songs dasselbe Genre, dieselbe Stimmung oder Sprache haben. Fülle den Wert beim ersten Song ein und klicke dann hier.",
    "click": "Die anderen Dateien ändern sich sofort. Eine Meldung nennt ihre Anzahl. Bereits hochgeladene Dateien bleiben unberührt.",
    "care": "Dabei werden die bisherigen Angaben der anderen Dateien überschrieben. Du kannst danach jede Datei wieder einzeln ändern.",
    "like": "Das ist wie ein Stempel, der gleichzeitig dasselbe Etikett auf alle Kisten drückt."
  },
  "help.tracks.uf_mood": {
    "t": "Stimmung",
    "what": "Das Gefühl des Songs, etwa Traurig oder Romantisch. aimusiclist.com bestimmt, welche Stimmungen auswählbar sind.",
    "when": "Markiere alle passenden Stimmungen. Die Angabe ist freiwillig.",
    "click": "Deine Auswahl gilt nur für diese Datei und wird beim Hochladen gespeichert. Sobald du die angezeigte Grenze in ( ) erreichst, werden die übrigen Kästchen gesperrt, bis du eines abwählst.",
    "care": "Dieses Feld erscheint nur, wenn deine Website die Feldliste von aimusiclist.com erhalten hat.",
    "like": "Das ist ein kleiner farbiger Aufkleber auf der Platte, der vor dem Hören ihre Stimmung verrät."
  },
  "help.tracks.uf_genre": {
    "t": "Genre",
    "what": "Die Genres dieses einen Songs: ein Hauptgenre und bis zu zwei Zusatzgenres.",
    "when": "Wähle die Genres für jede Datei. Das Hauptgenre ist Pflicht.",
    "click": "Die Auswahl gilt nur für diese Datei und wird beim Hochladen gespeichert.",
    "care": "Das Hauptgenre bestimmt das Genremenü auf aimusiclist.com. Zusatzgenres erscheinen dort neben dem Titel.",
    "like": "Das ist das Regaletikett einer Platte: zuerst der große Bereich, dann zwei kleinere Hinweise."
  },
  "help.tracks.uf_lang": {
    "t": "Songsprache",
    "what": "Die Sprache, in der die Wörter des Songs gesungen werden. Du kannst auch eine zweite Sprache eintragen.",
    "when": "Wähle sie für jede Datei. Bei einem Song ohne Gesang wähle „Instrumental (ohne Text)“.",
    "click": "Deine Auswahl gilt nur für diese Datei und wird beim Hochladen gespeichert.",
    "care": "Das ist nicht die Sprache deiner Website-Oberfläche. „Instrumental“ muss allein stehen; deshalb wird das zweite Feld dann gesperrt. aimusiclist.com nutzt die Sprache für seine Sprachcharts.",
    "like": "Das ist ein Etikett auf der Platte mit der Sprache des Gesangs."
  },
  "help.tracks.queue": {
    "t": "Dateien zum Hochladen",
    "what": "Die Liste der ausgewählten Dateien. Jede Zeile zeigt Titel, Dateiname, Größe, Status und die Felder für diesen Song.",
    "when": "Prüfe die Liste vor dem Hochladen. Jeder Song braucht ein Hauptgenre und eine Songsprache.",
    "click": "Deine Feldeingaben bleiben bis zum Hochladen hier erhalten. Ein grünes Schild „Aus Dateinamen übernommen“ bedeutet, dass die Angaben aus ( ) stammen. „Unten auswählen“ bedeutet, dass du sie selbst eingeben musst.",
    "care": "Zeilen mit leeren Pflichtfeldern werden rot markiert. Während des Hochladens werden die Felder zu einer Zusammenfassung und können nicht mehr geändert werden.",
    "like": "Das ist die Lieferliste an der Hintertür. Du prüfst jede Kiste, bevor sie ins Regal kommt."
  },
  "help.tracks.up_remove": {
    "t": "Entfernen",
    "what": "Nimmt eine Datei aus der Upload-Liste.",
    "when": "Nutze das, wenn du die falsche Datei ausgewählt hast oder „Fehlgeschlagen“ wegen Format oder Länge angezeigt wird.",
    "click": "Die Zeile verschwindet sofort. Die Datei auf deinem Computer wird nicht gelöscht.",
    "care": "Während ein Upload läuft oder die Datei bereits hochgeladen wurde, ist diese Schaltfläche ausgeblendet. Einen hochgeladenen Song löschst du in der Songliste.",
    "like": "Das ist wie das Herausnehmen einer Platte aus dem Korb, bevor du in den Laden gehst."
  },
  "help.tracks.up_need": {
    "t": "Leere Felder",
    "what": "Dieser Warnhinweis nennt die Dateien, bei denen noch das Hauptgenre oder die Songsprache fehlt.",
    "when": "Er erscheint automatisch, solange ein Pflichtfeld leer ist. Erst wenn nichts mehr fehlt, lässt sich der Upload starten.",
    "click": "Klicke auf eine Zeile, um direkt zum leeren Feld zu springen. Wenn alle Pflichtfelder ausgefüllt sind, verschwindet die Warnung.",
    "care": "Angezeigt werden nur die ersten 12 leeren Felder. Die Zahl oben zählt alle.",
    "like": "Das ist eine Checkliste an der Tür: Erst wenn überall ein Häkchen steht, kann die Lieferung hinein."
  },
  "help.tracks.up_after": {
    "t": "Neue Songs auf aimusiclist.com prüfen",
    "what": "Dieser Hinweis erscheint nach dem Hochladen und zeigt dir, wo deine neuen öffentlichen Songs zu finden sind.",
    "when": "Er erscheint nur, wenn die Website mit aimusiclist.com verbunden und mindestens ein neuer Song öffentlich ist.",
    "click": "Der Link öffnet die Seite mit neuen Songs auf aimusiclist.com in einem neuen Tab.",
    "care": "aimusiclist.com braucht ein paar Minuten, um neue Songs zu übernehmen. Falls sie nach etwa 5 Minuten nicht erscheinen, schau später noch einmal nach.",
    "like": "Das ist, als würdest du auf dem großen Markt nachsehen, ob deine neue Platte schon im Regal steht."
  },
  "help.tracks.pubmin": {
    "t": "Öffentlich: n · Mindestzahl: n",
    "what": "Die erste Zahl zeigt, wie viele deiner Songs derzeit auf aimusiclist.com öffentlich sind. Die zweite ist die Mindestzahl, die öffentlich bleiben muss.",
    "when": "Schau vor dem Ausschalten von Songs nach, wie viele du noch privat stellen darfst.",
    "click": "Das ist nur eine Zählung. Sie ändert sich automatisch, wenn du die öffentlichen Schalter umstellst.",
    "care": "Die Regel: Hast du mindestens 10 Songs, müssen 10 öffentlich bleiben. Bei weniger als 10 müssen alle öffentlich sein. Gezählt werden nur Songs mit Audiodatei. Ein Song in einem öffentlichen Album zählt als öffentlich. Ein Album mit späterem Veröffentlichungstermin zählt erst nach seiner Veröffentlichung.\nIst die erste Zahl kleiner als die zweite, fordert dich ein gelber Hinweis auf, weitere Songs öffentlich zu machen. Du bestimmst selbst, welche. Songs darfst du jederzeit löschen.",
    "like": "Der große Markt (aimusiclist.com) verlangt von jedem Laden mindestens 10 Platten im Regal. Hier siehst du, wie viele du dort hast."
  },
  "help.top.pubmin_go": {
    "t": "Songs auswählen",
    "what": "Bringt dich direkt zu den Schaltern, mit denen du die öffentlichen Songs auswählst.",
    "when": "Klicke darauf, wenn du den Hinweis auf zu wenige öffentliche Songs siehst.",
    "click": "Der Tab Songs öffnet sich bei der Zeile „Öffentlich · Mindestzahl“. Schalte die gewünschten Songs ein. Jeder Schalter speichert sofort.",
    "care": "Songs ohne Audiodatei zählen nicht. Der Hinweis verschwindet von selbst, sobald die Mindestzahl erreicht ist.",
    "like": "Das ist, als würdest du direkt zur Auslage gehen, um noch ein paar Platten hineinzustellen."
  },
  "help.tracks.pub_tip": {
    "t": "Hinweis zum öffentlichen Schalter",
    "what": "Ein kurzer Hinweis, der beim ersten Gebrauch eines öffentlichen Schalters erscheint. Er erklärt, wann der Song auf aimusiclist.com auftaucht.",
    "when": "Lies ihn einmal. Er erscheint erst, nachdem du in diesem Browser zum ersten Mal einen solchen Schalter betätigt hast.",
    "click": "[[Nicht mehr anzeigen]] versteckt ihn dauerhaft in diesem Browser. [[Schließen]] blendet ihn nur aus, bis du die Verwaltungsseite erneut öffnest.",
    "care": "Das Verbergen dieses Hinweises ändert nichts an deinen Songs.",
    "like": "Das ist ein kleines Schild am Regal: „Was hier steht, erscheint in ein bis zwei Minuten auf dem großen Markt.“"
  },
  "help.albums.form": {
    "t": "Neues Album / Album bearbeiten",
    "what": "Hier erstellst oder änderst du ein Album. Ein Album enthält deine Songs in einer selbst gewählten Reihenfolge, einen Titel, ein Cover und eine kurze Vorstellung.",
    "when": "Nutze es, wenn du mehrere Songs wie eine echte Schallplatte zusammen zeigen möchtest. Alben erscheinen auf deiner Website, öffentliche Alben auch auf aimusiclist.com.",
    "click": "Beim Ausfüllen wird noch nichts gespeichert. Mit [[Album speichern]] speicherst du alles zusammen. [[Abbrechen]] schließt das Formular und verwirft deine Änderungen.",
    "care": "Ein Album darf bis zu 35 Songs enthalten. Für eine Veröffentlichung braucht es 6 bis 35 Songs, alle mit Audiodatei. Ein Album mit weniger Songs kannst du speichern, aber es bleibt privat.",
    "like": "Das ist wie das Zusammenstellen einer Platte: Du wählst die Songs, ordnest sie und gibst ihr ein Cover."
  },
  "help.albums.title": {
    "t": "Albumtitel",
    "what": "Der Name deines Albums. Besucher sehen ihn auf deiner Website und bei öffentlichen Alben auch auf aimusiclist.com.",
    "when": "Gib bei jedem neuen Album einen Titel ein. Ohne Titel kannst du es nicht speichern.",
    "click": "Der Titel wird mit [[Album speichern]] gespeichert. Später kannst du ihn über [[Bearbeiten]] in der Albumliste ändern.",
    "care": "Höchstens 100 Zeichen.",
    "like": "Das ist der große Name auf der Vorderseite des Albumcovers."
  },
  "help.albums.artist": {
    "t": "Künstler",
    "what": "Zeigt, von wem das Album ist. Zuerst ist dein Website-Name ausgewählt. Andere Namen stammen aus „Weitere Künstler“ unter Website-Info.",
    "when": "Lass den Website-Namen stehen, wenn du das Album unter deinem üblichen Namen gemacht hast. Wähle einen anderen für ein Nebenprojekt oder einen weiteren Künstlernamen.",
    "click": "Der Name wird mit [[Album speichern]] gespeichert. Auf deiner Website und auf aimusiclist.com erscheint er unter dem Albumtitel.",
    "care": "Bleibst du bei der ersten Auswahl, übernimmt das Album Änderungen deines Website-Namens automatisch. Den Namen eines berühmten Sängers darfst du nicht verwenden.",
    "like": "Das ist das Namensschild des Musikers, der die Platte gemacht hat."
  },
  "help.albums.desc": {
    "t": "Albumbeschreibung",
    "what": "Ein paar Sätze über das Album. Sie stehen direkt unter dem Albumtitel auf deiner Website und auf aimusiclist.com.",
    "when": "Schreibe etwas über die Geschichte, Entstehung oder Stimmung des Albums, wenn du möchtest. Das Feld darf auch leer bleiben.",
    "click": "Der Text wird mit [[Album speichern]] gespeichert. Die Zahl unter dem Feld zeigt, wie viele Zeichen noch frei sind.",
    "care": "Höchstens 200 Zeichen. Ab 200 kannst du nicht weiter tippen. Ein Emoji zählt als ein Zeichen. Zeilenumbrüche sind erlaubt, aber nur einfacher Text, keine Bilder oder Links.",
    "like": "Das ist der kurze Text auf der Rückseite der Plattenhülle."
  },
  "help.albums.pub": {
    "t": "Wann soll es öffentlich werden?",
    "what": "Hier wählst du, wann das Album erscheint: sofort oder zu einem Datum und einer Uhrzeit deiner Wahl.",
    "when": "Wähle [[Jetzt]] für die meisten Alben. Nutze ein Datum und eine Uhrzeit, wenn du einen Veröffentlichungstag planst und deinen Fans vorher davon erzählen möchtest.",
    "click": "Deine Auswahl gilt, wenn du auf [[Album speichern]] klickst. Das Album wird nur mit 6 bis 35 Songs öffentlich, die alle Audiodateien haben. Sonst bleibt es privat.",
    "care": "Bei neuen Alben funktioniert die Veröffentlichung automatisch. Beim Bearbeiten eines Albums bleibt sein öffentlicher Schalter unverändert. Du kannst ihn später in der Albumliste jederzeit ein- oder ausschalten.",
    "like": "Das ist wie die Entscheidung, ob eine neue Platte heute oder an einem vorgemerkten Tag ins Regal kommt."
  },
  "help.albums.pub_now": {
    "t": "Jetzt",
    "what": "Das Album wird sofort öffentlich, wenn du es speicherst.",
    "when": "Wähle das, wenn das Album fertig ist und Menschen es schon heute hören sollen.",
    "click": "Nach [[Album speichern]] wird ein neues Album mit 6 bis 35 Songs und allen Audiodateien sofort öffentlich. In ein bis zwei Minuten erscheint es auf aimusiclist.com. War vorher ein Termin gewählt, wird er mit „Jetzt“ aufgehoben.",
    "care": "Bei weniger als 6 Songs oder einer fehlenden Audiodatei bleibt das Album privat. Die Meldung nach dem Speichern erklärt, was passiert ist.",
    "like": "Du stellst die neue Platte direkt nach der Fertigstellung ins Regal des großen Marktes."
  },
  "help.albums.pub_at": {
    "t": "Zu einem gewählten Datum und einer Uhrzeit",
    "what": "Das Album wartet und wird zu deinem festgelegten Termin automatisch öffentlich.",
    "when": "Nutze das für einen geplanten Veröffentlichungstag, etwa nächsten Freitag um 20 Uhr, damit du den Zeitpunkt vorher ankündigen kannst.",
    "click": "Ein Feld für Datum und Uhrzeit erscheint. Es gilt die Zeitzone dieses Geräts. Nach [[Album speichern]] steht der geplante Zeitpunkt in der Liste. Vorher bleibt das Album auf deiner Website und auf aimusiclist.com verborgen. Etwa eine Minute nach dem Termin erscheint es an beiden Orten.",
    "care": "Wähle einen Zeitpunkt in der Zukunft, höchstens 366 Tage im Voraus. Während das Album wartet, dürfen seine Songs nicht privat gestellt werden. Es braucht weiterhin 6 bis 35 Songs mit Audiodatei. Bei der PHP-Version kann es etwa 5 Minuten dauern.",
    "like": "Das ist wie ein Wecker im Laden: Sobald er klingelt, wandert die neue Platte von selbst ins Schaufenster."
  },
  "help.albums.cover": {
    "t": "Coverbild",
    "what": "Das quadratische Bild deines Albums. Es erscheint auf deiner Website und bei öffentlichen Alben auch auf aimusiclist.com.",
    "when": "Füge möglichst ein Bild hinzu. Alben mit Cover fallen leichter auf und bleiben besser im Gedächtnis. Es ist aber freiwillig.",
    "click": "Klicke auf [[Cover auswählen]], um ein Bild auszuwählen und quadratisch anzupassen. Das Cover wird zusammen mit dem Album über [[Album speichern]] gespeichert.",
    "care": "Es wird als kleines Bild mit 200×200 Pixeln gespeichert. Beim Löschen eines Albums wird nur sein Cover gelöscht, niemals seine Songs.",
    "like": "Das ist die Plattenhülle: das Erste, was man im Regal sieht."
  },
  "help.albums.pick": {
    "t": "Songs auswählen (in Reihenfolge)",
    "what": "Hier ordnest du die Songs fürs Album. Links (auf dem Handy oben) siehst du deine Songs. Rechts (auf dem Handy unten) stehen die Songs, die bereits im Album sind, in ihrer Abspielreihenfolge.",
    "when": "Nutze das beim Erstellen eines Albums oder beim Ändern seiner Songliste. Es funktioniert auch mit Hunderten Songs.",
    "click": "Suche links nach Songs, markiere sie und klicke auf [[Ausgewählte hinzufügen →]]. Sie kommen ans Ende der rechten Liste. Songs, die schon zum Album gehören, verschwinden links. Erst mit [[Album speichern]] wird gespeichert.",
    "care": "Höchstens 35 Songs. Ein Song kann in mehreren Alben sein; ein kleines Schild nennt den Namen des anderen Albums. Songs mit „Keine Audiodatei“ haben keinen Ton, und ein Album mit einem solchen Song kann nicht öffentlich werden.",
    "like": "Links liegt das Lagerregal, rechts die Platte, die du Song für Song zusammenstellst."
  },
  "help.albums.save": {
    "t": "Album speichern",
    "what": "Speichert alle Albumangaben auf einmal: Titel, Künstler, Beschreibung, Veröffentlichungstermin, Cover und Songs.",
    "when": "Klicke darauf, wenn du das Album fertig erstellt oder bearbeitet hast.",
    "click": "Eine Meldung zeigt das Ergebnis: sofort öffentlich, öffentlich zum geplanten Zeitpunkt oder privat gespeichert, weil noch 6 bis 35 Songs mit Audiodateien fehlen. Das Album erscheint dann in der Liste darunter. Ein öffentliches Album ist nach ein bis zwei Minuten auf aimusiclist.com sichtbar.",
    "care": "Ein Titel ist Pflicht. Ein gewählter Termin muss in der Zukunft liegen. Manche Änderungen können abgelehnt werden, etwa wenn danach weniger als 10 Songs deiner Website öffentlich blieben. Der rote Hinweis nennt den Grund.",
    "like": "Das ist wie das Einpacken der fertigen Platte und das Stellen ins Regal."
  },
  "help.albums.cancel": {
    "t": "Abbrechen",
    "what": "Schließt das Albumformular ohne zu speichern.",
    "when": "Nutze das, wenn du es dir anders überlegst oder neu anfangen möchtest.",
    "click": "Das Formular schließt sofort. Alles, was du seit dem Öffnen geändert hast, geht verloren, auch ein neu gewähltes Cover. Das Album bleibt wie zuvor gespeichert.",
    "care": "Es gibt keine Rückfrage. Nicht gespeicherte Änderungen gehen verloren.",
    "like": "Du legst die unfertige Platte zurück in die Schublade. Die Platte im Regal bleibt unverändert."
  },
  "help.albums.new": {
    "t": "Neues Album",
    "what": "Öffnet ein leeres Albumformular, damit du ein neues Album anlegen kannst.",
    "when": "Klicke darauf, wenn du einige Songs zu einem Album zusammenstellen möchtest.",
    "click": "Das Formular öffnet sich über der Liste. Erst mit [[Album speichern]] wird ein Album erstellt.",
    "care": "Solange ein Albumformular offen ist, wird diese Schaltfläche nicht angezeigt. Speichere oder brich zuerst ab.",
    "like": "Du holst eine neue, leere Plattenhülle aus dem Schrank."
  },
  "help.albums.list": {
    "t": "Meine Alben",
    "what": "Zeigt alle Alben, die du erstellt hast. Jedes Album erscheint auf deiner Website. Alben mit eingeschaltetem Schalter stehen auch auf aimusiclist.com; ihre Songs werden dort ebenfalls öffentlich.",
    "when": "Hier siehst du, welche Alben öffentlich sind, und kannst sie bearbeiten oder löschen.",
    "click": "Jede Zeile hat einen öffentlichen Schalter, einen Titel, die Songzahl und die Schaltflächen [[Bearbeiten]] / [[Löschen]].",
    "care": "Ein für später geplantes Album bleibt bis zu diesem Zeitpunkt überall verborgen, auch auf deiner Website. Während ein Album öffentlich ist oder auf Veröffentlichung wartet, dürfen seine Songs nicht einzeln privat gestellt werden.",
    "like": "Das ist dein Albumregal im Laden. Der Schalter legt fest, welche Platten auch auf dem großen Markt erscheinen."
  },
  "help.albums.pub_switch": {
    "t": "Öffentlich auf aimusiclist",
    "what": "Der Schalter in jeder Zeile entscheidet, ob das Album auch auf aimusiclist.com erscheint. Auf deiner Website bleibt es in jedem Fall vorhanden.",
    "when": "Schalte ihn für Alben ein, die mehr Menschen entdecken sollen. Schalte ihn aus, um das Album von aimusiclist.com zu entfernen.",
    "click": "Die Wahl wird sofort gespeichert. An: Album und alle Songs erscheinen in ein bis zwei Minuten auf aimusiclist.com. Aus: Sie verschwinden dort. Songs, die du einzeln veröffentlicht hast, bleiben öffentlich.",
    "care": "Ein grauer Schalter bedeutet, dass das Album 6 bis 35 Songs mit Audiodateien braucht. Tippe darauf, um den Grund zu sehen. Das Ausschalten kann abgelehnt werden, wenn dann weniger als 10 Songs deiner Website öffentlich wären.",
    "like": "Du entscheidest, welche Alben aus deinem Laden auch im großen Markt stehen."
  },
  "help.albums.col_title": {
    "t": "Albumtitel",
    "what": "Diese Spalte zeigt den Titel jedes Albums und darunter seinen Künstler. Daneben können kleine Kennzeichen stehen.",
    "when": "Hier prüfst du schnell den Zustand eines Albums.",
    "click": "„Wird öffentlich …“ bedeutet, dass das Album auf den gewählten Zeitpunkt wartet. „Braucht 6–35 Songs mit Audiodateien“ bedeutet, dass es noch nicht öffentlich sein kann. Füge Songs hinzu, entferne welche oder lade fehlende Audiodateien hoch.",
    "like": "Das ist das seitliche Namensschild an jedem Album im Regal."
  },
  "help.albums.col_count": {
    "t": "Anzahl der Songs",
    "what": "Zeigt, wie viele Songs jedes Album enthält.",
    "when": "Prüfe hier, ob ein Album öffentlich sein kann. Dafür sind 6 bis 35 Songs nötig.",
    "click": "Bei weniger als 6 Songs klicke auf [[Bearbeiten]] und füge welche hinzu. 35 ist die Höchstzahl.",
    "like": "Das ist wie das Zählen der Songtitel auf der Rückseite einer Platte."
  },
  "help.albums.row_buttons": {
    "t": "Bearbeiten / Löschen",
    "what": "Die Schaltflächen am Ende jeder Zeile. [[Bearbeiten]] öffnet das Album zum Ändern. [[Löschen]] entfernt das Album.",
    "when": "Nutze Bearbeiten für Songs, Reihenfolge, Titel, Cover oder Veröffentlichungstermin. Nutze Löschen, wenn du das Album nicht mehr möchtest.",
    "click": "Bearbeiten öffnet oben das Albumformular. Löschen fragt zuerst nach und entfernt dann Album und Cover sofort. Die Songs bleiben auf deiner Website.",
    "care": "Löschen ist endgültig. Bei einem öffentlichen Album kann es abgelehnt werden, wenn dadurch weniger als 10 Songs deiner Website öffentlich blieben.",
    "like": "Bearbeiten heißt, eine Platte aus dem Regal nehmen und korrigieren. Löschen heißt, Cover und Songliste wegwerfen; die Songs bleiben im Lager."
  },
  "help.albums.pick_search": {
    "t": "Songtitel suchen",
    "what": "Gib einen Teil des Songtitels ein, um links nur passende Songs anzuzeigen.",
    "when": "Nutze das, wenn du viele Songs hast und den Namen des gesuchten Songs kennst.",
    "click": "Die Liste ändert sich beim Tippen. Groß- und Kleinschreibung spielen keine Rolle. Leere das Feld, um wieder alle Songs zu sehen.",
    "care": "Gesucht wird nur in Songtiteln, nicht nach Künstler oder Liedtext.",
    "like": "Das ist wie die Frage an den Lagerverwalter: „Wo liegt der Song namens …?“"
  },
  "help.albums.pick_genre": {
    "t": "Genre",
    "what": "Zeigt links nur deine Songs mit einem bestimmten Hauptgenre an. Die Liste enthält nur Hauptgenres, die bei deinen Songs vorkommen.",
    "when": "Nutze das für ein Album mit einem Musikstil, zum Beispiel nur R&B.",
    "click": "Die linke Liste ändert sich sofort. Ein Song wird gezeigt, wenn eines seiner Genres dem gewählten Genre oder einem darunterliegenden Untergenre entspricht. Mit „Alle Genres“ siehst du wieder alles.",
    "care": "Das hilft nur beim Finden. Die Genres der Songs werden nicht verändert.",
    "like": "Das ist wie der Gang durch ein einziges Lagerregal, zum Beispiel die R&B-Abteilung."
  },
  "help.albums.pick_sort": {
    "t": "Reihenfolge",
    "what": "Ändert die Sortierung deiner Songs links: neueste Uploads zuerst, älteste zuerst oder nach Titel.",
    "when": "Nutze „Neueste“ für gerade erstellte Songs und „Titel A–Z“, wenn du einen Namen suchst.",
    "click": "Die linke Liste wird sofort neu sortiert. Die Reihenfolge im Album bleibt unverändert; sie legst du rechts fest.",
    "like": "Das ist wie das Ordnen des Lagerregals nach Datum oder Name."
  },
  "help.albums.pick_all": {
    "t": "Alle angezeigten auswählen",
    "what": "Markiert alle Songs, die gerade zur Suche und zum Genre passen. Die Zahl zeigt die Anzahl.",
    "when": "Nutze das nach dem Eingrenzen der Liste, um zum Beispiel alle Songs eines Genres auf einmal auszuwählen.",
    "click": "Alle passenden Songs werden markiert, auch die weiter unten. Klicke erneut (dann steht dort „Auswahl löschen“), um die Häkchen zu entfernen. Noch wird nichts hinzugefügt. Klicke danach auf [[Ausgewählte hinzufügen →]].",
    "care": "Ein Album darf höchstens 35 Songs enthalten. Markierst du mehr, werden nur die ersten hinzugefügt, die noch hineinpassen.",
    "like": "Das ist wie „Alles aus diesem Regal, bitte“, statt auf jedes Stück einzeln zu zeigen."
  },
  "help.albums.pick_add": {
    "t": "Ausgewählte hinzufügen →",
    "what": "Fügt die markierten Songs zum Album hinzu. Die Zahl zeigt, wie viele markiert sind.",
    "when": "Klicke darauf, nachdem du links Songs angehakt hast.",
    "click": "Die markierten Songs werden in der Reihenfolge der linken Liste ans Ende der rechten Liste gesetzt. Links verschwinden sie. Rechts kannst du die Reihenfolge ändern. Erst mit [[Album speichern]] wird das Album gespeichert.",
    "care": "Die Schaltfläche ist grau, wenn nichts ausgewählt oder das Album bereits mit 35 Songs voll ist. Falls nicht alle passen, meldet die Seite, wie viele ausgelassen wurden.",
    "like": "Du holst die ausgewählten Songs aus dem Lagerregal und legst sie auf die neue Platte."
  },
  "help.albums.pick_recent": {
    "t": "Meine neuesten hinzufügen",
    "what": "Fügt deine zuletzt hochgeladenen Songs in einem Schritt hinzu. Im kleinen Zahlenfeld bestimmst du die Menge (1 bis 35, anfangs 10).",
    "when": "Nutze das, wenn du gerade mehrere neue Songs hochgeladen hast und sie alle in ein Album aufnehmen möchtest.",
    "click": "Die neuesten Songs mit Audiodatei, die noch nicht im Album sind, kommen ans Ende der rechten Liste, neueste zuerst. Suche und Genrefilter links spielen dabei keine Rolle. Erst mit [[Album speichern]] wird gespeichert.",
    "care": "Songs ohne Audiodatei werden übersprungen. Maximal passen 35 Songs ins Album. Ist es voll, wird die Schaltfläche grau.",
    "like": "Das ist wie „Gib mir die letzten 10 Platten, die ins Lager gekommen sind“."
  },
  "help.albums.picked": {
    "t": "In diesem Album",
    "what": "Hier stehen die Songs des Albums in ihrer Abspielreihenfolge. Daneben siehst du ihre Anzahl. Liegt sie nicht zwischen 6 und 35, wird sie rot.",
    "when": "Prüfe hier die Songauswahl und stelle die Reihenfolge ein.",
    "click": "Halte ⠿ fest und ziehe einen Song nach oben oder unten oder nutze ▲ ▼. Mit ✕ entfernst du ihn aus dem Album (auf deiner Website bleibt er). Gespeichert wird mit [[Album speichern]].",
    "care": "Ein öffentliches Album braucht 6 bis 35 Songs mit Audiodateien. Ein Song mit „Keine Audiodatei“ verhindert die Veröffentlichung. Ein bereits öffentliches Album kannst du nicht mit weniger als 6 Songs speichern.",
    "like": "Das ist die Songliste auf der Rückseite einer Platte: Song 1, Song 2, Song 3 …"
  },
  "help.albums.pick_clear": {
    "t": "Alle entfernen",
    "what": "Entfernt alle Songs auf einmal aus diesem Album, damit du neu auswählen kannst.",
    "when": "Nutze das, wenn du die Songliste ganz neu zusammenstellen möchtest.",
    "click": "Nach einer Rückfrage wird die rechte Liste leer und die Songs erscheinen wieder links. Erst mit [[Album speichern]] wird das übernommen. Mit [[Abbrechen]] bleibt das Album wie zuvor.",
    "care": "Die Songs selbst werden nicht gelöscht. Sie bleiben auf deiner Website.",
    "like": "Du nimmst alle Songs von der Platte und stellst sie zurück ins Lagerregal."
  },
  "help.albums.cover_pick": {
    "t": "Cover auswählen",
    "what": "Öffnet die Bilder auf deinem Gerät, damit du ein Cover auswählst. In einem kleinen Fenster legst du den gewünschten Ausschnitt fest.",
    "when": "Nutze das, um ein Cover hinzuzufügen oder auszutauschen.",
    "click": "Nach [[Bild speichern]] erscheint hier das neue Cover mit „Neues Cover“. Es ist noch nicht gespeichert. Erst mit [[Album speichern]] wird es übernommen. [[Abbrechen]] daneben verwirft das neue Bild.",
    "care": "Du kannst JPG, PNG, WebP oder GIF bis 2 MB wählen. Hochgeladen wird nur eine kleine Kopie, nicht dein Original.",
    "like": "Du wählst ein Foto aus und schneidest es passend für die Plattenhülle zu."
  },
  "help.albums.cover_delete": {
    "t": "Cover entfernen",
    "what": "Entfernt das Coverbild dieses Albums. Album und Songs bleiben erhalten.",
    "when": "Nutze das, wenn du das Bild nicht mehr möchtest, zum Beispiel während du ein neues erstellst.",
    "click": "Nach deiner Bestätigung wird das Cover sofort entfernt, ohne [[Album speichern]]. Besucher sehen dann ein leeres Quadrat.",
    "care": "Das lässt sich nicht rückgängig machen. Du musst das Bild erneut auswählen, um ein Cover zurückzubekommen.",
    "like": "Das ist, als würdest du die Hülle abnehmen. Die Platte darin ist weiterhin da."
  },
  "help.skins.use": {
    "t": "Dieses Design verwenden",
    "what": "Aktiviert dieses installierte Design auf deiner Website. Das zuvor verwendete Design wird gemerkt.",
    "when": "Nutze das, wenn Besucher deine Website mit diesem Design sehen sollen.",
    "click": "Die Wahl wird sofort gespeichert. Besucher sehen das neue Aussehen innerhalb von etwa 30 Sekunden. Mit [[Zum vorherigen Design zurück]] oder einem anderen Design kannst du wechseln.",
    "care": "Beim bereits aktiven Design gibt es diese Schaltfläche nicht. Deine Songs und Menüs ändern sich nicht.",
    "like": "Das ist, als würdest du deinem Geschäft ein anderes Kleidungsstück aus deinem Schrank anziehen."
  },
  "help.skins.update": {
    "t": "Aktualisieren",
    "what": "Der Ersteller eines installierten Galerie-Designs hat eine neue Version veröffentlicht. Diese Schaltfläche lädt sie. Daneben steht **Neue Version**.",
    "when": "Nutze das, wenn du die neueste Gestaltung und Fehlerkorrekturen haben möchtest.",
    "click": "Die neue Version wird geprüft und ersetzt die alte. Dein aktives Design bleibt dasselbe. Falls dieses Design aktiv ist, sehen Besucher die neue Version nach etwa 30 Sekunden.",
    "care": "Hier wird nur das Design aktualisiert, nicht das Website-Programm. Bei selbst hochgeladenen Designs gibt es diese Schaltfläche nicht.",
    "like": "Das ist wie ein Schneider, der dir eine besser sitzende Version eines vorhandenen Kleidungsstücks schickt."
  },
  "help.skins.download": {
    "t": "Herunterladen (zum Bearbeiten)",
    "what": "Speichert eine Kopie eines eingebauten Designs (Hell oder Dunkel) auf deinem Computer. Sie kann als Grundlage für ein eigenes Design dienen.",
    "when": "Nutze das, wenn du ein eigenes Design erstellen möchtest. Gib die Kopie einem kostenlosen KI-Chat (ChatGPT, Claude) und bitte um andere Farben oder eine neue Anordnung.",
    "click": "Dein Browser speichert die Designdatei. Auf deiner Website ändert sich nichts.",
    "care": "Eingebaute Designs kannst du nicht direkt ändern. Lade deine bearbeitete Kopie mit neuem Namen unter **Design hochladen** hoch und klicke dann auf [[Dieses Design verwenden]].",
    "like": "Das ist wie ein Schnittmuster, das du mitnimmst, um dein eigenes Kleidungsstück zu nähen."
  },
  "help.skins.delete": {
    "t": "Löschen",
    "what": "Entfernt ein Design, das du selbst hochgeladen oder aus der Galerie hinzugefügt hast. Eingebaute Designs (Hell, Dunkel) lassen sich nicht löschen; bei ihnen steht stattdessen [[Herunterladen (zum Bearbeiten)]].",
    "when": "Nutze das, wenn du ein Design nicht mehr brauchst oder alle 20 Plätze belegt sind und du Platz schaffen willst.",
    "click": "Du wirst um Bestätigung gebeten. Danach verschwindet das Design sofort. War es aktiv, wechselt deine Website zu Hell.",
    "care": "Das lässt sich nicht rückgängig machen. Ein Galerie-Design kannst du unter **Entdecken** erneut hinzufügen. Ein eigenes Design ist verloren, wenn du die Datei nicht behalten hast.",
    "like": "Das ist wie ein Kleidungsstück aus dem Schrank zu werfen. Bewahre dein Schnittmuster auf, falls du es später wieder möchtest."
  },
  "help.skins.revert": {
    "t": "Zum vorherigen Design zurück",
    "what": "Aktiviert wieder das Design, das du unmittelbar zuvor verwendet hast. Die Schaltfläche zeigt dessen Namen.",
    "when": "Nutze das, wenn du ein neues Design ausprobiert hast, dir das alte aber besser gefiel.",
    "click": "Die Wahl wird sofort gespeichert und ist für Besucher nach etwa 30 Sekunden sichtbar. Das verlassene Design wird nun zum vorherigen, sodass ein weiterer Klick wieder zurückwechselt.",
    "care": "Es wird nur ein Schritt zurück gemerkt. Wenn das vorherige Design gelöscht wurde, verschwindet diese Schaltfläche.",
    "like": "Das ist wie das neue Kleidungsstück auszuziehen und das von gestern wieder anzuziehen."
  },
  "help.skins.title": {
    "t": "Designs",
    "what": "Ein Design ist die Kleidung deiner Website: Farben, Schrift und Anordnung. Ein Wechsel ändert niemals Songs, Alben oder Einstellungen.",
    "when": "Komm hierher, wenn deine Website anders aussehen soll oder eine neue Version deines Designs verfügbar ist.",
    "click": "Das ist nur eine Überschrift. Die Schaltflächen darunter erledigen die Arbeit. Deine Website hat immer zwei eingebaute Designs, **Hell** und **Dunkel**, sowie Platz für bis zu 20 weitere.",
    "care": "Besucher sehen ein neues Design nach etwa 30 Sekunden. Löschst du das aktive Design, wird wieder Hell verwendet.",
    "like": "Das ist wie neue Farbe und andere Regale im Geschäft. Die Platten darin bleiben genau dieselben."
  },
  "help.skins.view": {
    "t": "Installiert / Entdecken",
    "what": "Zwei Ansichten des Design-Tabs. **Installiert** zeigt die Designs, die deine Website schon besitzt. **Entdecken** öffnet die Galerie, in der du Designs anderer ausprobieren und hinzufügen kannst.",
    "when": "Nutze Installiert, um Designs zu wechseln, zu aktualisieren, zu löschen oder eigene hochzuladen. Nutze Entdecken, wenn du einen neuen Look suchst.",
    "click": "Es ändert sich nur die Ansicht, nicht deine Website. Beim ersten Öffnen von Entdecken wird die Designliste geladen.",
    "like": "Installiert ist dein Kleiderschrank. Entdecken ist das Bekleidungsgeschäft nebenan."
  },
  "help.skins.upload": {
    "t": "Design hochladen",
    "what": "Fügt ein von dir erstelltes Design hinzu. Es besteht aus einer Webseite-Datei (.html), die der Designanleitung entspricht. Auch ein kostenloser KI-Chat kann eines für dich erstellen.",
    "when": "Nutze das, wenn du ein Aussehen möchtest, das es in der Galerie nicht gibt. Ein guter Anfang ist ein eingebautes Design über [[Herunterladen (zum Bearbeiten)]].",
    "click": "Gib Name und Datei an und klicke auf [[Design hochladen]]. Das Design erscheint in deiner Liste, wird aber noch nicht aktiviert. Klicke dafür auf [[Dieses Design verwenden]].",
    "care": "Die Datei wird zuerst geprüft. Sie darf höchstens 100 KB groß sein, braucht Menü, Inhaltsbereich und Player an jeweils einer Stelle und darf die Zeile **Powered by aimusiclist.com** nicht verstecken. Bewegter Code und Bilder von anderen Websites sind verboten.",
    "like": "Das ist wie ein selbst genähtes Kleidungsstück, das du in deinen Schrank hängst."
  },
  "help.skins.upload_name": {
    "t": "Designname",
    "what": "Der Name deines Designs in der Liste. Nutze 1 bis 32 Kleinbuchstaben (a–z), Ziffern, - oder _.",
    "when": "Gib ihn vor dem Upload ein. Wähle einen kurzen, leicht erkennbaren Namen, etwa my-blue.",
    "click": "Erst mit [[Design hochladen]] wird etwas gespeichert.",
    "care": "Großbuchstaben und Leerzeichen sind nicht erlaubt. **light** und **dark** sind für die eingebauten Designs reserviert. Bei einem bereits vorhandenen Namen wird das alte Design ersetzt. War es aktiv, sehen Besucher die neue Version nach etwa 30 Sekunden.",
    "like": "Das ist wie ein Namensschild, das du in ein Kleidungsstück nähst."
  },
  "help.skins.upload_file": {
    "t": "Designdatei",
    "what": "Die Designdatei auf deinem Computer. Es muss eine einzelne .html-Datei mit höchstens 100 KB sein.",
    "when": "Wähle sie nach dem Erstellen oder Bearbeiten aus, zum Beispiel mit einem kostenlosen KI-Chat.",
    "click": "Hier wählst du nur die Datei. Erst mit [[Design hochladen]] wird sie gesendet.",
    "care": "Nur eine Datei. Bilder im Design dürfen nicht von anderen Websites geladen werden. Ist die Datei zu groß, bitte die KI, sie zu verkürzen.",
    "like": "Das ist, als würdest du das fertige Kleidungsstück nehmen, bevor du es in den Schrank hängst."
  },
  "help.skins.upload_btn": {
    "t": "Design hochladen",
    "what": "Überträgt deine Designdatei und prüft sie.",
    "when": "Klicke nach der Eingabe des Namens und der Auswahl der Datei.",
    "click": "Bei einem Fehler zeigt eine rote Meldung, was du korrigieren musst. Es wird nichts gespeichert. Bei Erfolg steht **Gespeichert** und das Design erscheint in der Liste. Es ist erst aktiv, wenn du auf [[Dieses Design verwenden]] klickst.",
    "care": "Zusätzlich zu Hell und Dunkel sind höchstens 20 Designs möglich. Ist die Liste voll, lösche zuerst eines. Wenn du mit dem Namen eines Galerie-Designs hochlädst, wird es zu deinem eigenen Design und erhält keine Galerie-Updates mehr.",
    "like": "Das ist wie eine Kontrolle des Kleidungsstücks, bevor es in deinen Schrank kommt."
  },
  "help.skins.gallery": {
    "t": "Designgalerie",
    "what": "Ein gemeinsames Regal mit fertigen Designs. Jede Karte zeigt Bild, Ersteller, hell oder dunkel und Versionsnummer. Neue Designs stehen zuerst.",
    "when": "Nutze sie, wenn du ohne eigene Arbeit mit einem Klick ein neues Aussehen möchtest.",
    "click": "Klicke auf ein Bild oder [[Vorschau]], um das Design mit deiner Website auszuprobieren. Mit [[Anwenden]] fügst du es hinzu und aktivierst es.",
    "care": "Steht auf einer Karte **Aktualisiere deine Website, um dieses Design zu nutzen.**, ist zuerst eine neuere Website-Version nötig.",
    "like": "Das ist ein Kleidungsgeschäft, in dem du deinem eigenen Laden verschiedene Outfits anprobieren kannst."
  },
  "help.skins.gal_reload": {
    "t": "Aktualisieren",
    "what": "Lädt die Liste der Designgalerie erneut.",
    "when": "Nutze das, wenn neue Designs erschienen sein könnten oder die Liste nicht geladen wurde.",
    "click": "Die Liste wird gleich neu geladen. Auch neue Versionen deiner installierten Designs werden geprüft. Deine Website bleibt unverändert.",
    "care": "Falls du **Die Designliste kann gerade nicht geladen werden.** siehst, warte kurz und klicke auf [[Erneut versuchen]].",
    "like": "Das ist wie die Frage nach dem neuesten Katalog im Kleidungsgeschäft."
  },
  "help.skins.gal_filter": {
    "t": "Designfilter",
    "what": "Mit diesen Schaltflächen siehst du nur bestimmte Designs: **Alle**, **Hell** (heller Hintergrund), **Dunkel** (dunkler Hintergrund) und #Wörter für bestimmte Stile.",
    "when": "Nutze die Filter, wenn die Galerie viele Designs hat und du nach einem bestimmten Aussehen suchst.",
    "click": "Nur die angezeigten Karten ändern sich. Klicke auf **Alle**, um wieder alles zu sehen. Nichts wird gespeichert.",
    "care": "Ein #Wort erscheint nur, wenn mindestens zwei Designs es verwenden. Gibt es keinen Treffer, steht dort **Keine Designs entsprechen diesem Filter.**",
    "like": "Das ist wie ein Schild im Kleidungsgeschäft: Jacken hier, Hemden dort."
  },
  "help.skins.gal_preview": {
    "t": "Vorschau",
    "what": "Zeigt deine eigene Website mit deinen Songs und deinem Profil in diesem Design. Du kannst dafür auch auf das Bild des Designs klicken.",
    "when": "Nutze sie vor dem Anwenden, um zu sehen, wie das Design auf deiner Website wirklich aussieht.",
    "click": "Ein Fenster öffnet sich. Nichts wird gespeichert und Besucher sehen keine Änderung. Schließe es mit [[Schließen]] oder Esc. Du kannst das Design auch aus dem Fenster heraus anwenden.",
    "care": "In der Vorschau spielen Songs nicht und Werbung wird nicht angezeigt. Steht auf einer Karte **Aktualisiere deine Website, um dieses Design zu nutzen.**, ist vor dem Website-Update keine Vorschau möglich.",
    "like": "Das ist wie eine Umkleidekabine: Du probierst das Kleidungsstück an und kannst es wieder zurücklegen."
  },
  "help.skins.gal_apply": {
    "t": "Anwenden / Dieses Design anwenden",
    "what": "Fügt dieses Galerie-Design mit einem Klick hinzu und aktiviert es. Die Schaltfläche steht auf der Designkarte und im Vorschaufenster.",
    "when": "Nutze sie, wenn dir ein Design gefällt und Besucher es sehen sollen.",
    "click": "Das Design wird geprüft, unter **Installiert** hinzugefügt und sofort aktiviert. Besucher sehen es innerhalb von etwa 30 Sekunden. Mit [[Zum vorherigen Design zurück]] kannst du es rückgängig machen.",
    "care": "Zusätzlich zu Hell und Dunkel passen bis zu 20 Designs in deine Liste. Wenn du ein eigenes Design mit demselben Namen hochgeladen hast, wirst du vor dem Ersetzen gefragt. Ein Design mit **Aktualisiere deine Website, um dieses Design zu nutzen.** kann noch nicht angewendet werden.",
    "like": "Das ist wie ein Kleidungsstück kaufen und es gleich aus dem Geschäft heraus anbehalten."
  },
  "help.skins.pv_mode": {
    "t": "Desktop / Handy",
    "what": "Ändert die Größe der Vorschau. **Desktop** zeigt einen breiten Computerbildschirm, **Handy** einen schmalen Handybildschirm.",
    "when": "Viele Besucher hören Musik auf dem Handy. Prüfe deshalb beide Ansichten vor dem Anwenden.",
    "click": "Nur die Größe der Vorschau ändert sich. Nichts wird gespeichert.",
    "like": "Das ist wie das Betrachten deines Schaufensters von der anderen Straßenseite und dann ganz aus der Nähe."
  },
  "help.site.artist_del": {
    "t": "Löschen",
    "what": "Entfernt diesen Namen aus der Liste weiterer Künstler.",
    "when": "Nutze das, wenn du den Namen für neue Songs nicht mehr auswählen möchtest.",
    "click": "Nach einer Rückfrage wird die Änderung sofort gespeichert. Songs mit diesem Namen behalten ihn. Nur die Auswahl für neue Songs verschwindet.",
    "care": "Um den Künstler eines alten Songs zu ändern, bearbeite den Song selbst. Du kannst denselben Namen später wieder hinzufügen.",
    "like": "Das ist wie das Entfernen eines Namensschilds aus der Schublade. Songs, die es schon tragen, behalten es."
  },
  "help.site.info": {
    "t": "Website-Info",
    "what": "Diese Karte enthält die wichtigsten Angaben deiner Website: ihren Namen, den Künstlernamen, die Hauptsprache, eine kurze Beschreibung, dein Land und den Text unten auf der Seite.",
    "when": "Fülle die Felder einmal zu Beginn aus. Komm zurück, wenn du die Website umbenennen oder ihre Vorstellung ändern möchtest.",
    "click": "Während du tippst, wird nichts gespeichert. Klicke unten auf [[Website-Info speichern]], um alle Angaben dieser Karte zusammen zu speichern. Deine Website ändert sich sofort; aimusiclist.com übernimmt den neuen Namen und die Beschreibung wenig später.",
    "care": "Andere Karten dieses Tabs (soziale Netzwerke, Wiedergabezahlen, Likes, Bilder …) speichern automatisch. Nur diese Karte braucht den Speichern-Knopf. Verlässt du den Tab ohne ihn, gehen deine Eingaben verloren.",
    "like": "Das ist das Anmeldeformular deines Geschäfts: das Schild über der Tür, eine kurze Vorstellung und der Standort."
  },
  "help.site.name": {
    "t": "Website-Name",
    "what": "Der Name deiner Website mit 1 bis 40 Zeichen. Er steht groß auf deiner Website und unter deinen Songtiteln auf aimusiclist.com. Dort können Menschen ihn anklicken, um dich zu besuchen.",
    "when": "Wähle den Namen beim Start. Ändere ihn nur, wenn du wirklich einen neuen möchtest, denn Hörer lernen dich unter diesem Namen kennen.",
    "click": "Gespeichert wird mit [[Website-Info speichern]]. War dein Künstlername mit dem alten Website-Namen identisch, wird er ebenfalls geändert.",
    "care": "Du darfst keinen Namen einer berühmten Sängerin, eines berühmten Sängers oder einer Gruppe verwenden, auch keinen täuschend ähnlichen. Bei bekannten Namen wird das Speichern blockiert. Wird ein solcher Name später entdeckt, kann deine Website von aimusiclist entfernt werden.",
    "like": "Das ist dein Ladenschild. Kunden auf dem großen Markt (aimusiclist.com) lesen es, um deinen Laden zu finden."
  },
  "help.site.artist": {
    "t": "Künstlername",
    "what": "Der Name der Person oder Gruppe, die die Musik dieser Website macht. Er kann mit dem Website-Namen übereinstimmen oder anders sein.",
    "when": "Trage ihn ein, wenn dein Musikname nicht dein Website-Name ist. Zum Beispiel heißt die Website My Music Room, aber du singst als Luna.",
    "click": "Die Angabe wird mit [[Website-Info speichern]] gespeichert. Ist sie anders als der Website-Name, sehen Besucher sie auf der Startseite unter dem Namen. aimusiclist.com erhält die Änderung nach ein bis zwei Minuten.",
    "care": "Höchstens 40 Zeichen. Namen berühmter Sänger oder Gruppen und täuschend ähnliche Namen sind verboten. Wenn du den Website-Namen änderst und dieses Feld noch den alten Namen enthält, wird es mitgeändert.",
    "like": "Das Schild außen zeigt den Geschäftsnamen. Dies ist das Namensschild der Musikerin oder des Musikers im Laden."
  },
  "help.site.lang": {
    "t": "Hauptsprache deiner Website",
    "what": "Die Sprache, die deine Website verwendet, wenn sie nicht erkennen kann, welche Sprache ein Besucher möchte. aimusiclist.com wird diese Sprache ebenfalls mitgeteilt.",
    "when": "Wähle die Sprache, die deine Hörer meist lesen oder in der du deine Beschreibungen schreibst.",
    "click": "Gespeichert wird mit [[Website-Info speichern]]. Besucher sehen weiterhin ihre Browsersprache, falls deine Website sie unterstützt, oder ihre selbst gewählte Sprache. Nur wenn beides nicht möglich ist, wird diese Hauptsprache verwendet.",
    "care": "Das ändert nicht die Sprache dieser Verwaltungsseite und übersetzt auch keine Songtitel oder Beschreibungen, die du selbst geschrieben hast.",
    "like": "Das ist die Sprache auf dem Willkommensschild deines Ladens. Gäste mit einer anderen Sprache können trotzdem eine Karte in ihrer Sprache bekommen."
  },
  "help.site.desc": {
    "t": "Kurzbeschreibung",
    "what": "Eine kurze Vorstellung von dir und deiner Musik mit höchstens 200 Zeichen. Sie erscheint auf deiner Website und wird zusammen mit dem Website-Namen an aimusiclist.com gesendet.",
    "when": "Schreibe ein oder zwei Sätze darüber, welche Musik du machst. Du kannst den Text jederzeit ändern.",
    "click": "Gespeichert wird mit [[Website-Info speichern]]. aimusiclist.com erhält den neuen Text kurz darauf. Lässt du das Feld leer, erscheint keine Beschreibung.",
    "care": "Schreibe kurz und einfach. Verwende keine berühmten Künstlernamen für dich, etwa „die neue [berühmter Name]“.",
    "like": "Das ist die kleine Karte unter dem Ladenschild, auf der Passanten lesen, was du anbietest."
  },
  "help.site.footer": {
    "t": "Text am Seitenende",
    "what": "Eine Textzeile ganz unten auf jeder Seite deiner Website, bis zu 200 Zeichen. Nur Text, keine Bilder oder Links.",
    "when": "Nutze sie für eine kurze Nachricht, etwa zum Urheberrecht oder als Dankeschön.",
    "click": "Der Text wird mit [[Website-Info speichern]] gespeichert und erscheint sofort auf deiner Website. Ist das Feld leer, zeigt die Website „© aktuelles Jahr + Website-Name“. Wenn du {year} eingibst, wird daraus automatisch die aktuelle Jahreszahl.",
    "care": "Zeilenumbrüche werden zu Leerzeichen. Die Zeile „Powered by aimusiclist.com“ daneben bleibt immer stehen und kann mit diesem Feld nicht entfernt werden.",
    "like": "Das ist der kleine Text ganz unten auf einem Kassenbon."
  },
  "help.site.save": {
    "t": "Website-Info speichern",
    "what": "Speichert alle Angaben dieser Karte auf einmal: Namen, Sprache, Beschreibung, Land, Text am Seitenende und Zusatzangaben.",
    "when": "Klicke darauf, nachdem du etwas in dieser Karte geändert hast.",
    "click": "Deine Website zeigt die Änderungen sofort. aimusiclist.com übernimmt den neuen Namen und die Beschreibung kurz darauf. Bei einem Fehler erscheint neben der Schaltfläche eine rote Meldung und nichts wird gespeichert.",
    "care": "Das Speichern wird blockiert, wenn ein geänderter Name zu einem berühmten Musiker gehört. Wähle einen anderen Namen und versuche es erneut.",
    "like": "Das ist der Stempel auf dem Anmeldeformular. Vor dem Stempeln sind Änderungen nur ein Entwurf."
  },
  "help.site.artists": {
    "t": "Weitere Künstler",
    "what": "Eine Liste zusätzlicher Künstlernamen, die du für Songs auswählen kannst. Ohne Auswahl verwendet ein Song deinen Website-Namen.",
    "when": "Nutze sie, wenn eine Website Musik unter mehreren Namen enthält, etwa auch als Duo oder Nebenprojekt.",
    "click": "Die hier hinzugefügten Namen erscheinen bei der Künstlerauswahl für neue oder bearbeitete Songs und Alben. Der Künstler wird auf deiner Website und auf aimusiclist.com angezeigt.",
    "care": "Du kannst bis zu 20 Namen speichern. Ist die Liste voll, wird Hinzufügen grau. Namen berühmter Sänger sind nicht erlaubt.",
    "like": "Das ist ein Laden mit mehreren Namensschildern in der Schublade. Für jeden Song steckst du das richtige Schild an."
  },
  "help.site.artist_add": {
    "t": "Hinzufügen",
    "what": "Nimmt den eingegebenen Namen in die Liste weiterer Künstler auf.",
    "when": "Gib links einen neuen Künstlernamen ein und klicke dann darauf.",
    "click": "Der Name wird sofort gespeichert. Ab jetzt kannst du ihn beim Hochladen und Bearbeiten von Songs auswählen.",
    "care": "Höchstens 60 Zeichen. Namen, die schon in der Liste stehen oder deinem Website-Namen entsprechen, werden nicht hinzugefügt. Namen berühmter Sänger oder Gruppen werden abgelehnt.",
    "like": "Das ist wie ein neues Namensschild machen und in die Schublade legen."
  },
  "help.site.account": {
    "t": "Administratorkonto",
    "what": "Hier verwaltest du die E-Mail-Adresse und das Passwort für die Anmeldung auf dieser Verwaltungsseite. Oben steht deine derzeitige E-Mail-Adresse.",
    "when": "Nutze diese Karte, um Anmelde-E-Mail oder Passwort zu ändern.",
    "click": "Erst wenn du die Felder ausfüllst, dein aktuelles Passwort eingibst und auf [[Konto speichern]] klickst, wird etwas geändert.",
    "care": "Bei einer meshmelo-Website kannst du die E-Mail-Adresse nur im meshmelo-Konto ändern. Deshalb erscheint das E-Mail-Feld hier nicht.",
    "like": "Das ist der Schlüssel zur Hintertür deines Ladens. Nur du solltest ihn haben."
  },
  "help.site.account_email": {
    "t": "Neue E-Mail-Adresse (freiwillig)",
    "what": "Die neue E-Mail-Adresse für deine Anmeldung. Lass das Feld leer, um die bisherige zu behalten.",
    "when": "Nutze das, wenn du deine alte Adresse nicht mehr verwendest oder eine andere zur Anmeldung möchtest.",
    "click": "Sie wird erst geändert, wenn du dein aktuelles Passwort eingibst und auf [[Konto speichern]] klickst. Melde dich danach mit der neuen Adresse an.",
    "care": "Prüfe die Schreibweise genau. Mit einer falschen E-Mail-Adresse wird das Anmelden schwer. Dieses Feld gibt es auf meshmelo-Websites nicht.",
    "like": "Das ist wie ein neuer Name auf deinem Hintertürschlüssel."
  },
  "help.site.account_pw": {
    "t": "Neues Passwort (freiwillig)",
    "what": "Ein neues Passwort für diese Verwaltungsseite. Lass das Feld leer, um das alte zu behalten.",
    "when": "Nutze es, wenn du glaubst, dass jemand dein Passwort kennt, oder einfach ein neues möchtest.",
    "click": "Die Änderung erfolgt, nachdem du das Passwort im nächsten Feld wiederholt, dein aktuelles Passwort eingegeben und auf [[Konto speichern]] geklickt hast. Andere Handys und Computer werden abgemeldet. Dieser Browser bleibt angemeldet.",
    "care": "Mindestens 6 Zeichen. Bewahre das Passwort an einem sicheren Ort auf. Bei meshmelo-Websites erhält dein meshmelo-Konto dasselbe neue Passwort.",
    "like": "Das ist wie ein neues Schloss an der Hintertür. Alte Schlüssel passen nicht mehr."
  },
  "help.site.account_pw2": {
    "t": "Neues Passwort wiederholen",
    "what": "Gib das neue Passwort noch einmal genauso ein.",
    "when": "Immer dann, wenn du ein neues Passwort festlegst.",
    "click": "Bei [[Konto speichern]] werden die beiden Felder verglichen. Sind sie verschieden, wird nichts gespeichert und du siehst eine Meldung.",
    "care": "So werden Tippfehler erkannt. Wenn du nicht mehr weißt, was du eingegeben hast, leere beide Felder und tippe langsam neu.",
    "like": "Das ist wie das kurze Ausprobieren des neuen Schlüssels im Schloss."
  },
  "help.site.account_cur": {
    "t": "Aktuelles Passwort (für Änderungen erforderlich)",
    "what": "Dein derzeitiges Passwort. Es zeigt vor dem Ändern der E-Mail-Adresse oder des Passworts, dass du wirklich der Kontoinhaber bist.",
    "when": "Gib es immer ein, wenn du E-Mail-Adresse oder Passwort änderst.",
    "click": "Das Eintippen allein bewirkt nichts. Geprüft wird es beim Klick auf [[Konto speichern]].",
    "care": "Nach 5 falschen Versuchen werden Änderungen für 15 Minuten gesperrt. Wenn du das Passwort vergessen hast, öffne unten [[Passwort vergessen?]].",
    "like": "Das ist, als würdest du deinen alten Schlüssel zeigen, bevor der Schlüsseldienst einen neuen macht."
  },
  "help.site.account_save": {
    "t": "Konto speichern",
    "what": "Speichert die oben eingegebene neue E-Mail-Adresse und/oder das neue Passwort.",
    "when": "Klicke darauf, nachdem du die gewünschten Änderungen und dein aktuelles Passwort eingetragen hast.",
    "click": "Die Änderung wird sofort gespeichert. Ein neues Passwort meldet deine anderen Handys und Computer ab, aber nicht diesen Browser. Sind beide neuen Felder leer, passiert nichts.",
    "care": "Der Nutzungsschlüssel wird hier nicht gespeichert. Dafür gibt es darunter die eigene Schaltfläche [[Schlüssel speichern]].",
    "like": "Das ist, als würdest du dem Schlüsseldienst sagen: „Gut, ändere jetzt das Schloss.“"
  },
  "help.site.forgot": {
    "t": "Passwort vergessen?",
    "what": "Hier stehen die Schritte, mit denen du wieder in die Verwaltung kommst, wenn du dein Passwort vergessen hast. Klicke auf die Überschrift, um sie zu öffnen.",
    "when": "Nutze das, wenn du dich nicht anmelden kannst oder das Feld für dein aktuelles Passwort immer wieder einen Fehler zeigt.",
    "click": "Das Öffnen ändert nichts. Es zeigt nur die Anleitung. Je nach Website-Art sind die Schritte unterschiedlich: über Cloudflare, den Dateimanager deines Hostings oder bei meshmelo per E-Mail.",
    "care": "Befolge die Schritte genau und entferne nur die genannten Daten. Songs, Alben und die Verbindung zu aimusiclist.com bleiben unverändert.",
    "like": "Das ist eine Anleitung für einen Ersatzschlüssel, die für den Notfall im Laden hängt."
  },
  "help.site.token_open": {
    "t": "Bei Cloudflare erstellen",
    "what": "Öffnet die Cloudflare-Seite zum Erstellen eines Nutzungsschlüssels in einem neuen Tab. Die meisten Felder sind bereits für dich ausgefüllt.",
    "when": "Das ist Schritt 1 bei der Schlüsselerstellung. Klicke hier, wenn du noch keinen Nutzungsschlüssel hast.",
    "click": "Cloudflare öffnet [[Create Token]]. Melde dich bei Bedarf an. Hier wird nichts gespeichert, bis du zurückkommst, den Schlüssel einfügst und auf [[Schlüssel speichern]] klickst.",
    "care": "Cloudflare zeigt den Schlüssel nur einmal. Klicke gleich auf [[Copy]]. Sind die Berechtigungsfelder leer, trage die beiden Berechtigungen aus der Anleitung ein.",
    "like": "Das ist wie der Gang zum Schlüsselladen mit einem Zettel, auf dem schon steht, welchen Schlüssel du brauchst."
  },
  "help.site.token": {
    "t": "Nutzung anzeigen (freiwillig)",
    "what": "Hier kannst du einen Cloudflare-Nutzungsschlüssel speichern. Damit zeigt die Verwaltungsseite oben deine kostenlose Cloudflare-Nutzung an.",
    "when": "Nutze das, um zu prüfen, wie viel vom kostenlosen Kontingent deine Website verbraucht, etwa für Speicher und Wiedergaben.",
    "click": "Nach dem Speichern eines Schlüssels wird die Nutzungsanzeige oben sofort gefüllt. Du wirst dabei nicht abgemeldet.",
    "care": "Erstelle den Schlüssel in demselben Cloudflare-Konto, in dem deine Songs liegen. Ein Schlüssel eines anderen Kontos kann die Zahlen nicht lesen. Ohne Schlüssel funktioniert die Website weiterhin; nur die Nutzungszahlen fehlen.",
    "like": "Das ist der Schlüssel zum Ablesen des Stromzählers. Du kannst nur die Zahlen sehen, sonst nichts."
  },
  "help.site.token_change": {
    "t": "Ändern",
    "what": "Ein Schlüssel ist bereits gespeichert. Angezeigt werden nur sein Anfang und Ende, damit niemand ihn kopieren kann. Mit dieser Schaltfläche kannst du einen neuen eingeben.",
    "when": "Nutze sie, wenn die Nutzungszahlen nicht mehr erscheinen, der Schlüssel bei Cloudflare gelöscht wurde oder deine Songs in ein anderes Cloudflare-Konto verschoben wurden.",
    "click": "Das Schlüsselfeld öffnet sich. Der alte Schlüssel bleibt gültig, bis du den neuen speicherst. Mit [[Abbrechen]] behältst du den alten.",
    "care": "Wenn eine rote Meldung sagt, dass dein Songspeicher in einem anderen Konto liegt, erstelle den neuen Schlüssel in diesem Konto.",
    "like": "Das ist wie der Austausch eines Zählerableseschlüssels. Bis du den neuen abgibst, funktioniert der alte weiter."
  },
  "help.site.token_input": {
    "t": "Nutzungsschlüssel",
    "what": "In dieses Feld fügst du den Schlüssel ein, den du bei Cloudflare kopiert hast. Beim Einfügen werden die Zeichen verborgen.",
    "when": "Direkt nachdem du den Schlüssel bei Cloudflare erstellt und auf [[Copy]] geklickt hast.",
    "click": "Das Einfügen allein speichert nichts. Klicke daneben auf [[Schlüssel speichern]].",
    "care": "Füge den ganzen Schlüssel ohne Leerzeichen ein. Er kann nur Nutzungszahlen und deinen Kontonamen lesen, nichts ändern oder löschen. Trotzdem solltest du ihn niemandem weitergeben.",
    "like": "Das ist der Schlitz, in den du den Zählerableseschlüssel steckst."
  },
  "help.site.token_save": {
    "t": "Schlüssel speichern",
    "what": "Prüft den Schlüssel bei Cloudflare und speichert ihn.",
    "when": "Klicke darauf, nachdem du den Nutzungsschlüssel in das Feld eingefügt hast.",
    "click": "Zuerst wird der Schlüssel getestet. Wenn er funktioniert, wird er gespeichert und die Nutzungszahlen oben erscheinen sofort. Du bleibst angemeldet. Bei einem Fehler zeigt eine rote Meldung, was du ändern musst.",
    "care": "Kann der Schlüssel deine Kontoliste nicht sehen, fragt ein neues Feld nach deiner Cloudflare Account ID. Trage sie ein und versuche es erneut. Schlüssel aus einem anderen Cloudflare-Konto werden abgelehnt.",
    "like": "Das ist wie das Ausprobieren des Schlüssels am Zählerkasten. Passt er, bleibt er dort."
  },
  "help.site.token_account_id": {
    "t": "Cloudflare Account ID (nur wenn gefragt)",
    "what": "Die Kennung deines Cloudflare-Kontos aus 32 Buchstaben und Ziffern. Sie erscheint nur, wenn der Schlüssel dein Konto nicht selbst finden kann.",
    "when": "Wenn beim Speichern steht, dass der Schlüssel die Kontoliste nicht lesen kann. Das passiert, wenn er nur eine statt zwei Berechtigungen besitzt.",
    "click": "Trage die Kennung ein und klicke erneut auf [[Schlüssel speichern]]. Passen Kennung und Schlüssel zusammen, wird er gespeichert.",
    "care": "Verwende genau 32 Zeichen aus 0–9 und a–f. Oft ist es einfacher, den Schlüssel mit [[Bei Cloudflare erstellen]] neu anzulegen, damit beide Berechtigungen enthalten sind.",
    "like": "Das ist, als würdest du die Hausnummer auf den Zählerschlüssel schreiben, weil er das Haus nicht von selbst findet."
  },
  "help.site.token_howto": {
    "t": "Nutzungsschlüssel erstellen (2 Minuten)",
    "what": "Eine Schritt-für-Schritt-Anleitung für den Cloudflare-Nutzungsschlüssel. Klicke auf die Überschrift, um sie zu öffnen oder zu schließen.",
    "when": "Nutze sie beim ersten Schlüssel oder wenn die Nutzungszahlen oben nicht mehr erscheinen.",
    "click": "Das Öffnen ändert nichts. Bis ein Schlüssel gespeichert ist, bleibt die Anleitung automatisch geöffnet. Danach wird sie eingeklappt.",
    "care": "Der Schlüssel braucht zwei Berechtigungen: Account Analytics Read und Account Settings Read. Cloudflare zeigt ihn nur einmal. Kopiere ihn deshalb sofort.",
    "like": "Das ist wie eine kleine Karte zum Schlüsselladen, auf der der Tresen eingezeichnet ist."
  },
  "help.site.mm_r2": {
    "t": "Songspeicher (R2)",
    "what": "Zeigt, wo deine Songs und Bilder liegen: den Speichernamen und deine Cloudflare-Kontonummer. Dieser Speicher gehört dir, nicht meshmelo.",
    "when": "Prüfe hier, welches Cloudflare-Konto und welcher Speicher für deine Website verwendet werden.",
    "click": "Diese Karte zeigt nur Angaben. Mit [[Speicher ändern]] kannst du den Speicher wechseln.",
    "care": "Lösche diesen Speicher nicht bei Cloudflare. Sonst können deine Songs nirgendwo mehr abgespielt werden.",
    "like": "Das ist die Adresse deines eigenen Lagers, in dem alle Platten deines Geschäfts liegen."
  },
  "help.site.mm_r2_change": {
    "t": "Speicher ändern",
    "what": "Öffnet deine meshmelo-Seite in einem neuen Tab. Dort kannst du auf einen anderen Speicher oder ein anderes Cloudflare-Konto wechseln.",
    "when": "Nutze das, wenn du deine Songs in einen neuen Speicher oder in ein anderes Cloudflare-Konto umziehst.",
    "click": "Es öffnet sich nur ein neuer Tab. Solange du die Schritte auf der meshmelo-Seite nicht abgeschlossen hast, ändert sich nichts.",
    "care": "Wenn du zu einem anderen Cloudflare-Konto gewechselt bist, erstelle dort auch einen neuen Nutzungsschlüssel und speichere ihn in der Karte darunter. Der alte Schlüssel kann das neue Konto nicht lesen.",
    "like": "Das ist wie ein Anruf bei der Umzugsfirma, die deine Platten in ein neues Lager bringt."
  },
  "help.site.mm_card": {
    "t": "Deine meshmelo-Website",
    "what": "Deine Website läuft bei meshmelo, aber Songs und Bilder liegen in deinem eigenen Speicher. Mit dieser Karte kannst du deine Website mitnehmen oder schließen.",
    "when": "Nutze sie für eine Sicherung, beim Umzug zu eigenem Hosting oder wenn du meshmelo nicht mehr verwenden möchtest.",
    "click": "Die Karte selbst macht nichts. Mit [[Meine Website exportieren]] lädst du eine Kopie herunter. Mit [[Mein meshmelo-Konto]] öffnest du dein meshmelo-Konto.",
    "like": "Du mietest einen Platz im Einkaufszentrum, aber die Platten in deinem Lager gehören dir. Du kannst jederzeit zusammenpacken und umziehen."
  },
  "help.site.mm_export": {
    "t": "Meine Website exportieren",
    "what": "Lädt eine ZIP-Datei mit Songliste, Alben, Einstellungen, Designs und Gästebuch herunter. Audiodateien und Bilder sind nicht enthalten; sie liegen schon in deinem eigenen Speicher.",
    "when": "Nutze es gelegentlich für eine Sicherung oder bevor du die Website auf eigenes Hosting umziehst.",
    "click": "Der Download beginnt sofort. Auf deiner Website ändert sich nichts.",
    "care": "Bewahre diese Datei geheim auf. Sie enthält deine Anmeldedaten und das Geheimnis für die Verbindung zu aimusiclist.com. Du kannst sie auch exportieren, wenn deine Website pausiert ist.",
    "like": "Das ist eine Kopie des ganzen Ladenbuchs, damit du denselben Laden woanders wieder eröffnen kannst."
  },
  "help.site.mm_delete": {
    "t": "Meine Website löschen",
    "what": "Schließt deine meshmelo-Website endgültig. Seiten, Einstellungen und Songliste werden entfernt. Klicke auf die Überschrift, um den Löschbereich zu öffnen.",
    "when": "Nutze das nur, wenn du wirklich aufhören möchtest. Bei einem Umzug solltest du zuerst auf [[Meine Website exportieren]] klicken.",
    "click": "Das Öffnen ändert nichts. Zum Löschen musst du den Website-Namen und dein Passwort eingeben und dann die rote Schaltfläche drücken.",
    "care": "Das ist endgültig. Deine Songs verschwinden sofort von aimusiclist.com. Dateien in deinem eigenen Speicher bleiben erhalten. Dein Website-Name wird nicht an andere vergeben.",
    "like": "Das ist, als würdest du den Schlüssel für dein gemietetes Geschäft zurückgeben. Die Platten im eigenen Lager gehören dir weiterhin."
  },
  "help.site.mm_delete_name": {
    "t": "Website-Namen zur Bestätigung eingeben",
    "what": "Gib deinen Website-Namen genau wie angezeigt ein, um zu bestätigen, dass du die Website wirklich löschen möchtest.",
    "when": "Nur wenn du deine Website endgültig löschst.",
    "click": "Das Eintippen allein bewirkt nichts. Der Name wird beim Klick auf die rote Löschen-Schaltfläche geprüft.",
    "care": "Er muss Zeichen für Zeichen übereinstimmen. Bei einem Unterschied wird nichts gelöscht und du siehst eine Meldung.",
    "like": "Das ist deine Unterschrift auf dem Formular zur Ladenschließung."
  },
  "help.site.mm_delete_btn": {
    "t": "Meine Website löschen",
    "what": "Die letzte Schaltfläche, mit der deine meshmelo-Website tatsächlich gelöscht wird.",
    "when": "Klicke darauf, nachdem du oben deinen Website-Namen und dein aktuelles Passwort eingegeben hast.",
    "click": "Du wirst noch einmal gefragt. Bestätigst du, wird die Website sofort gelöscht, du wirst abgemeldet und deine meshmelo-Seite öffnet sich.",
    "care": "Das lässt sich nicht rückgängig machen. Exportiere vorher alles, was du später brauchen könntest. Nach 5 falschen Passwörtern musst du eine Stunde warten.",
    "like": "Das ist, als würdest du zum letzten Mal das Licht im Laden ausschalten und die Tür abschließen."
  },
  "help.site.images": {
    "t": "Banner und Profilbild",
    "what": "Zwei Bilder für deine Website: ein breites Banner ganz oben und ein rundes Profilbild.",
    "when": "Füge sie hinzu, damit deine Website unverwechselbar wird. Du kannst sie jederzeit ändern.",
    "click": "Jedes Bild wird sofort gespeichert, nachdem du es ausgewählt und im Bildfenster auf Speichern geklickt hast. Für diese Karte gibt es keine weitere Speichern-Schaltfläche.",
    "care": "Du kannst JPG, PNG, WebP oder GIF mit höchstens 2 MB auswählen. Hochgeladen wird nur das kleine fertige Bild, nicht dein Original.",
    "like": "Das sind die Markise über der Ladentür und das Foto des Inhabers neben der Kasse."
  },
  "help.site.banner": {
    "t": "Oberes Banner",
    "what": "Ein breites Bild über dem Website-Titel. Es kann bis zu 1600×400 Pixel groß sein.",
    "when": "Nutze ein breites, flaches Bild wie eine Landschaft oder ein seitlich gezogenes Kunstwerk.",
    "click": "Klicke auf [[Bild auswählen]]. Im Bildfenster kannst du den Zuschneiderahmen verschieben oder das ganze Bild in seiner Form verkleinern. Mit [[Bild speichern]] erscheint es sofort auf deiner Website.",
    "care": "Es wird als kleine Datei bis 300 KB gespeichert. Hohe Bilder müssen stark zugeschnitten werden; breite sehen besser aus. Wenn du kein Banner wählst, wird der Bereich nicht angezeigt.",
    "like": "Das ist die große bemalte Markise über deinem Schaufenster."
  },
  "help.site.image_choose": {
    "t": "Bild auswählen",
    "what": "Öffnet die Bildauswahl deines Geräts für das Banner oder das Profilbild.",
    "when": "Nutze das beim ersten Hinzufügen oder beim Ersetzen eines Bildes.",
    "click": "Nach der Auswahl öffnet sich ein Bearbeitungsfenster. Erst mit der dortigen Speichern-Schaltfläche ([[Bild speichern]] beim Banner, [[Anwenden]] beim Profil) ändert sich etwas. Dann wird das alte Bild sofort ersetzt.",
    "care": "Wähle JPG, PNG, WebP oder GIF bis 2 MB. Bewegte GIFs werden zu Standbildern. Falls dein Browser das Bild nicht verarbeiten kann, nutze Chrome, Edge oder Firefox.",
    "like": "Das ist wie ein neues Foto aus deiner Tasche zu nehmen und in den Bilderrahmen des Ladens zu setzen."
  },
  "help.site.image_delete": {
    "t": "Entfernen",
    "what": "Entfernt Banner oder Profilbild von deiner Website.",
    "when": "Nutze das, wenn du dort lieber kein Bild mehr zeigen möchtest.",
    "click": "Nach einer Bestätigung verschwindet das Bild sofort von deiner Website. Ein entferntes Profilbild verschwindet wenig später auch von aimusiclist.com.",
    "care": "Das lässt sich nicht rückgängig machen. Mit [[Bild auswählen]] kannst du wieder eines hinzufügen. Zum Austauschen musst du das alte nicht erst entfernen – wähle einfach ein neues.",
    "like": "Das ist wie das Herausnehmen eines Fotos aus dem Rahmen, sodass er leer bleibt."
  },
  "help.site.profile": {
    "t": "Profilbild",
    "what": "Dein Foto oder Logo mit 400×400 Pixeln, das rund angezeigt wird. aimusiclist.com zeigt es ebenfalls bei „Neue Künstler“ und neben deiner Website.",
    "when": "Wähle ein deutliches Gesicht oder Logo, das auch klein gut zu erkennen ist.",
    "click": "Klicke auf [[Bild auswählen]]. Verschiebe, vergrößere oder drehe das Bild und klicke auf [[Anwenden]]. Es wird sofort gespeichert. Deine Website wählt daraus auch eine passende Hintergrundfarbe. aimusiclist.com übernimmt das neue Bild kurz darauf.",
    "care": "Die Ecken fallen durch den Kreis weg. Platziere deshalb alles Wichtige in der Mitte. Das Bild wird als kleine Datei bis 100 KB gespeichert.",
    "like": "Das ist das Foto des Ladeninhabers auf seiner Visitenkarte, die er auch auf dem großen Markt verteilt."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Damit kannst du auf deiner Website Google-Werbung zeigen und Geld damit verdienen. Du gibst nur die Nummern aus deinem AdSense-Konto ein. Die Werbung wird von deiner Website eingerichtet.",
    "when": "Nutze das, nachdem Google deine Website für AdSense freigegeben hat.",
    "click": "Fülle die Felder aus, markiere [[Werbung auf meiner Website anzeigen]] und klicke auf [[AdSense speichern]]. Auf dieser Verwaltungsseite erscheint nie Werbung, nur auf deiner Website.",
    "care": "Google genehmigt nur Websites mit eigener Adresse. Läuft deine Website noch unter einer workers.dev-Adresse, verbinde zuerst eine eigene Domain im Tab Meine Domain. Füge hier keinen Werbecode ein, sondern nur die IDs.",
    "like": "Das ist wie das Vermieten eines kleinen Platzes im Schaufenster an jemanden, der dich für sein Plakat bezahlt."
  },
  "help.site.ads_client": {
    "t": "Publisher-ID (ca-pub-…)",
    "what": "Deine persönliche Nummer bei AdSense. Sie beginnt mit ca-pub- und danach folgen 16 Ziffern.",
    "when": "Suche die Nummer in deinem AdSense-Konto und kopiere sie hierher. Ohne sie kann keine Werbung erscheinen.",
    "click": "Gespeichert wird mit [[AdSense speichern]]. Außerdem erstellt die Website automatisch deine ads.txt-Seite.",
    "care": "Kopiere sie genau: ca-pub- und danach 16 Ziffern, nichts weiter. Bei einem anderen Format erscheint eine rote Meldung und nichts wird gespeichert.",
    "like": "Das ist deine Kontonummer bei der Werbefirma. So weiß sie, welchem Schaufenster die Plakate gehören."
  },
  "help.site.ads_top": {
    "t": "Anzeigenblock-ID oben",
    "what": "Die Nummer des Werbeplatzes, der auf deiner Website oben direkt unter dem Banner erscheint.",
    "when": "Erstelle in deinem AdSense-Konto einen Anzeigenblock und kopiere seine Nummer hierher.",
    "click": "Gespeichert wird mit [[AdSense speichern]]. Ist das Feld leer, erscheint oben keine Werbung.",
    "care": "Nur Ziffern, 6 bis 20 Stellen. Füge nicht den ganzen Werbecode ein.",
    "like": "Das ist die Nummer des Plakatrahmens unter der Markise deines Geschäfts."
  },
  "help.site.ads_left": {
    "t": "Anzeigenblock-ID links (freiwillig)",
    "what": "Die Nummer eines zweiten Werbeplatzes in der linken Spalte deiner Website.",
    "when": "Fülle das Feld nur aus, wenn dein Design eine linke Spalte hat, zum Beispiel das dunkle Design.",
    "click": "Gespeichert wird mit [[AdSense speichern]]. Ohne linke Spalte erscheint diese Werbung nicht, auch wenn hier eine Nummer steht.",
    "care": "Nur Ziffern mit 6 bis 20 Stellen. Wechselst du später zu einem Design ohne linke Spalte, verschwindet die Werbung automatisch.",
    "like": "Das ist ein zweiter Plakatrahmen. Nur Geschäfte mit einer Seitenwand haben Platz dafür."
  },
  "help.site.ads_on": {
    "t": "Werbung auf meiner Website anzeigen",
    "what": "Der Ein-/Aus-Schalter für sämtliche Werbung auf deiner Website.",
    "when": "Aktiviere ihn, wenn deine IDs bereit sind. Deaktiviere ihn, um Werbung vorübergehend auszuschalten, ohne die IDs zu verlieren.",
    "click": "Erst mit [[AdSense speichern]] ändert sich etwas. Danach erscheint die Werbung innerhalb von 30 Sekunden auf deiner Website oder verschwindet, wenn du das Häkchen entfernt hast.",
    "care": "Ohne Publisher-ID lässt sich die Werbung nicht aktivieren. Deine IDs bleiben beim Ausschalten erhalten.",
    "like": "Das ist der Lichtschalter für die Plakatrahmen im Schaufenster."
  },
  "help.site.ads_save": {
    "t": "AdSense speichern",
    "what": "Speichert alle Angaben der Google-AdSense-Karte: die drei IDs und den Werbeschalter.",
    "when": "Klicke darauf, nachdem du in dieser Karte etwas geändert hast.",
    "click": "Zuerst werden die Nummern geprüft. Bei einem Fehler erscheint eine rote Meldung und nichts wird gespeichert. Wenn alles stimmt, erscheint oder verschwindet die Werbung auf deiner Website innerhalb von 30 Sekunden.",
    "care": "Auch nach dem Speichern können Anzeigen eine Weile leer bleiben. Darüber entscheidet Google, nicht deine Website. Falls nie Werbung erscheint, prüfe dein AdSense-Konto.",
    "like": "Das ist, als würdest du dem Werbekunden den unterschriebenen Plakatvertrag geben."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Eine kleine Seite, auf der Google prüft, ob die Werbung auf deiner Website wirklich zu dir gehört. Deine Website erstellt sie automatisch aus deiner Publisher-ID.",
    "when": "Du musst nichts tun. Öffne den Link, wenn AdSense dich zur Prüfung auffordert.",
    "click": "Der Link öffnet die Seite in einem neuen Tab. Sie enthält eine Zeile mit deiner Publisher-ID. Hier kannst du sie nicht bearbeiten; sie folgt der gespeicherten ID.",
    "care": "Ist keine Publisher-ID gespeichert, bleibt die Seite leer. Nach einer Änderung braucht Google möglicherweise etwas Zeit, um sie zu erkennen.",
    "like": "Das ist die Genehmigung im Schaufenster, die zeigt, dass deine Plakate dort hängen dürfen."
  },
  "help.site.country": {
    "t": "Land, in dem du tätig bist",
    "what": "Das Land, in dem du Musik machst. aimusiclist.com nutzt es, um dich in der Künstler-Rangliste dieses Landes zu führen.",
    "when": "Wähle dein Land, wenn du auch in der dortigen Rangliste erscheinen möchtest. Die Angabe ist freiwillig.",
    "click": "Gespeichert wird mit [[Website-Info speichern]]. Bei „— Nicht festgelegt —“ erscheinst du nur in der globalen Rangliste.",
    "care": "Wähle nur ein Land, in dem du wirklich arbeitest. Du kannst die Angabe später ändern.",
    "like": "Das ist die Landesflagge an deinem Stand auf dem großen Markt (aimusiclist.com), damit Besucher aus deinem Land dich finden."
  },
  "help.site.fields": {
    "t": "Zusätzliche Felder (von aimusiclist.com)",
    "what": "Zeigt, welche Liste zusätzlicher Felder deine Website von aimusiclist.com erhalten hat, zum Beispiel Stimmung. Die Felder erscheinen beim Hochladen und Bearbeiten unter „Zusätzliche Angaben“ sowie unter Website-Info.",
    "when": "Prüfe hier, warum ein neues Feld aufgetaucht ist oder ein erwartetes fehlt.",
    "click": "Die Karte zeigt nur den Zustand. Du siehst die Listenversion, die Anzahl der Felder und die letzte Prüfung. Deine Website prüft einmal täglich automatisch; du musst nichts tun.",
    "care": "Kann eine neue Liste nicht geladen werden, zeigt eine rote Meldung den Grund. Die letzte gültige Liste bleibt erhalten und Uploads funktionieren weiter.",
    "like": "Das ist wie das Bestellformular, das der große Markt (aimusiclist.com) an die Geschäfte schickt, damit alle dieselben Etiketten verwenden."
  },
  "help.site.fields_update": {
    "t": "Felder aktualisieren",
    "what": "Fragt sofort die neueste Liste zusätzlicher Felder bei aimusiclist.com ab, statt auf die tägliche Prüfung zu warten.",
    "when": "Klicke darauf, wenn aimusiclist.com ein neues Feld angekündigt hat und du es heute nutzen möchtest.",
    "click": "Eine kurze Meldung sagt, ob die Liste aktualisiert wurde (mit neuer Version), schon aktuell ist oder warum die Abfrage fehlgeschlagen ist. Bei Änderungen erscheinen die neuen Felder auf dem Bildschirm.",
    "care": "Du kannst einmal pro Minute prüfen. Versuchst du es früher, steht dort, wie viele Sekunden du warten musst. Deine bisherigen Antworten gehen nie verloren.",
    "like": "Das ist wie ein Anruf beim großen Markt: „Gibt es ein neues Formular?“, statt auf die Morgenpost zu warten."
  },
  "help.site.sns": {
    "t": "Soziale Netzwerke",
    "what": "Deine Adressen in sozialen Netzwerken. Die ersten fünf Felder sind fest: YouTube, Instagram, TikTok, Facebook und X.",
    "when": "Trage die Seiten ein, auf denen du Musik teilst oder mit Fans sprichst. Ungenutzte Felder bleiben leer.",
    "click": "Gib die vollständige Adresse mit https:// ein und klicke außerhalb des Feldes. Sie wird automatisch gespeichert. Besucher finden die Adressen auf der Seite „Links“. aimusiclist.com zeigt kleine Symbole neben deinen Songs. Wenn du ein Feld leerst, wird der Link entfernt.",
    "care": "Die Adresse muss zum jeweiligen Netzwerk gehören. Im YouTube-Feld sind nur YouTube-Adressen möglich. Maximal 200 Zeichen. Eine falsche Adresse wird rot und nicht gespeichert; die letzte gültige bleibt erhalten.",
    "like": "Das ist die kleine Tafel an deiner Ladentür: „Hier findest du uns auch.“"
  },
  "help.site.sns_tools": {
    "t": "Nach oben · Nach unten · Entfernen",
    "what": "Die Schaltflächen bei jedem Eintrag unter „Weitere soziale Netzwerke“. [[Nach oben]] und [[Nach unten]] ändern die Reihenfolge, [[Entfernen]] löscht den Eintrag.",
    "when": "Nutze sie, um wichtige Netzwerke weiter oben anzuzeigen oder nicht mehr genutzte zu entfernen.",
    "click": "Die Änderung wird sofort gespeichert. Deine Seite „Links“ zeigt die neue Reihenfolge. [[Entfernen]] löscht den Eintrag ohne weitere Rückfrage.",
    "care": "Eine entfernte Adresse ist weg. Du kannst den Dienst erneut hinzufügen und die Adresse wieder eingeben. Die fünf festen Felder lassen sich nicht verschieben; sie stehen immer zuerst.",
    "like": "Das ist wie das Verschieben von Zetteln an der Tafel oder das Abnehmen eines Zettels."
  },
  "help.site.sns_more": {
    "t": "Weitere soziale Netzwerke",
    "what": "Hier ist Platz für bis zu 5 weitere Dienste neben den fünf festen, etwa SoundCloud, Spotify, Threads oder Discord.",
    "when": "Nutze die Felder, wenn du auch auf anderen Plattformen aktiv bist.",
    "click": "Wähle in jeder Zeile erst den Dienst aus der Liste und trage dann seine Adresse ein. Beim Klicken außerhalb wird automatisch gespeichert. Auf deiner „Links“-Seite stehen sie in dieser Reihenfolge. Auf aimusiclist.com teilen sie sich ein einziges 🔗-Symbol.",
    "care": "Jeder Dienst kann nur einmal gewählt werden. Das Adressfeld bleibt gesperrt, bis du einen Dienst auswählst. Wenn du den Dienst einer Zeile änderst, wird die alte Adresse gelöscht; gib sie erneut ein.",
    "like": "Das ist zusätzlicher Platz auf der Tafel neben der Ladentür für weitere Orte, an denen man dich findet."
  },
  "help.site.sns_add": {
    "t": "+ Weiteres soziales Netzwerk hinzufügen",
    "what": "Fügt unter „Weitere soziale Netzwerke“ eine leere Zeile hinzu.",
    "when": "Nutze es für einen Dienst, der nicht zu den fünf festen Netzwerken gehört.",
    "click": "Es erscheint eine Zeile, in der du den Dienst auswählen kannst. Erst wenn du Dienst und Adresse eingibst, wird etwas gespeichert. Bei 5 Zeilen wird die Schaltfläche grau.",
    "care": "Eine leer gelassene Zeile wird nicht gespeichert und verschwindet beim nächsten Öffnen.",
    "like": "Das ist ein leerer Zettel an der Ladentür, den du später beschriften kannst."
  },
  "help.site.sns_view": {
    "t": "Links-Seite ansehen",
    "what": "Öffnet die „Links“-Seite deiner Website, auf der Besucher alle deine sozialen Netzwerke finden.",
    "when": "Prüfe so, wie die Linkliste für Besucher aussieht.",
    "click": "Die Seite öffnet sich in einem neuen Tab. Hier ändert sich nichts. Die Schaltfläche erscheint erst, wenn mindestens eine Netzwerkadresse gespeichert ist.",
    "like": "Das ist, als würdest du draußen die Tafel neben der Ladentür mit den Augen deiner Kunden ansehen."
  },
  "help.guestbook.title": {
    "t": "Gästebuch",
    "what": "Hier können Besucher kurze Nachrichten über deine ganze Website oder zu einzelnen Songs hinterlassen.",
    "when": "Nutze es, um von deinen Hörern zu lesen und ihre Nachrichten zu prüfen oder aufzuräumen.",
    "click": "Das ist nur eine Überschrift. Mit [[Gästebuch öffnen]] schaltest du es an oder aus. In der Liste darunter kannst du Nachrichten lesen und löschen.",
    "like": "Das ist wie ein Notizbuch an der Ladentür, in dem Gäste ein paar nette Worte hinterlassen."
  },
  "help.guestbook.on": {
    "t": "Gästebuch öffnen",
    "what": "Schaltet das Gästebuch für Besucher an oder aus. Wenn es an ist, sehen sie **Gästebuch** im Menü und einen 💬-Knopf bei jedem Song.",
    "when": "Schalte es an, um Rückmeldungen zu bekommen. Schalte es aus, wenn zu viele unerwünschte Nachrichten eintreffen oder du eine Pause brauchst.",
    "click": "Die Wahl wird sofort gespeichert. Besucher sehen die Änderung nach etwa 30 Sekunden. Du kannst jederzeit zurückschalten.",
    "care": "Beim Ausschalten wird das Gästebuch nur verborgen. Alte Nachrichten bleiben erhalten und du kannst sie hier weiterhin lesen oder löschen.",
    "like": "Das ist wie ein Notizbuch, das du vor die Ladentür legst oder vorübergehend hereinholst."
  },
  "help.guestbook.list": {
    "t": "Nachrichten",
    "what": "Alle Gästebuchnachrichten, neueste zuerst, 20 pro Seite. Zu jeder stehen Name, Uhrzeit und gegebenenfalls der Song (♪). Die Zahl neben der Überschrift ist die Gesamtzahl.",
    "when": "Schau gelegentlich nach, um neue Nachrichten zu lesen und unangemessene zu entfernen.",
    "click": "Mit den Seitenschaltflächen unten kannst du ältere Nachrichten ansehen. Hier kannst du Nachrichten nicht bearbeiten oder beantworten, nur löschen.",
    "care": "Besucher dürfen Namen mit bis zu 20 Zeichen und Nachrichten mit bis zu 500 Zeichen ohne Links schreiben, maximal 50 Nachrichten pro Tag und Person. Nachrichten bleiben bis zum Löschen erhalten, auch bei geschlossenem Gästebuch. **Gelöschter Song** bedeutet, dass der betreffende Song entfernt wurde.",
    "like": "Das ist wie das Durchblättern des Gästebuchs von der neuesten Seite an."
  },
  "help.guestbook.delete": {
    "t": "Löschen",
    "what": "Entfernt eine Gästebuchnachricht.",
    "when": "Nutze das bei unhöflichen Nachrichten, Spam oder Texten, die Besucher nicht lesen sollen.",
    "click": "Nach einer Rückfrage wird die Nachricht sofort von deiner Website entfernt und die Liste aktualisiert.",
    "care": "Das Löschen ist endgültig. Die Person kann danach trotzdem wieder eine Nachricht schreiben.",
    "like": "Das ist wie das Herausreißen einer Seite aus dem Gästebuch an der Tür."
  },
  "help.domain.mm": {
    "t": "Meine Domain",
    "what": "Zeigt die aktuelle Adresse deiner Website. Deine Website läuft bei meshmelo, deshalb verbindest du deine eigene Domain im meshmelo-Portal und nicht hier.",
    "when": "Prüfe hier deine Adresse oder informiere dich über eine eigene Domain wie mymusic.com.",
    "click": "Hier musst du nichts anklicken. Öffne my.meshmelo.com → My site → My domain. Falls diese Möglichkeit noch fehlt, wird sie demnächst verfügbar sein.",
    "care": "Deine bisherige Adresse funktioniert weiter. Du kannst sie also bedenkenlos teilen.",
    "like": "Das ist wie ein Laden im Einkaufszentrum: Die Verwaltung des Zentrums kümmert sich um dein neues Straßenschild."
  },
  "help.domain.title": {
    "t": "Meine Domain",
    "what": "Zeigt die aktuelle Website-Adresse und erlaubt dir, eine eigene kurze Domain wie mymusic.com statt der langen kostenlosen Adresse zu verwenden.",
    "when": "Nutze das, wenn du eine Domain gekauft hast oder dir eine leicht merkbare Adresse wünschst. Auch Google AdSense verlangt eine eigene Domain.",
    "click": "Das ist nur eine Überschrift. Befolge die Anleitung darunter, trage die Domain ein und klicke auf [[Verbinden]]. Danach siehst du ein ✓ und deine Domain.",
    "care": "Wenn die Seite sagt, dass die Adresse in den Cloudflare-Einstellungen festgelegt wurde, kannst du sie hier nicht ändern und das Feld ist grau.",
    "like": "Das ist wie der Umzug deines Ladens von einer langen Seitengassenadresse zu einer kurzen Hauptstraßenadresse."
  },
  "help.domain.guide": {
    "t": "Eigene Domain verbinden",
    "what": "Eine Schritt-für-Schritt-Anleitung, wie du eine Domain bekommst und mit deiner Website verbindest. Das dauert etwa 10 Minuten.",
    "when": "Lies sie vor dem Klick auf [[Verbinden]]. Die Schritte bei Cloudflare müssen zuerst erledigt werden.",
    "click": "Klicke auf die Überschrift, um die Schritte zu öffnen oder zu schließen. Sie bleiben offen, bis die Domain verbunden ist.",
    "care": "Für die Domain zahlst du selbst. Cloudflare kann seine Bildschirmbezeichnungen ändern; suche dann den ähnlichsten Namen. Bei der Hosting-Version deiner Website gilt stattdessen die Anleitung für die Hosting-Verwaltung.",
    "like": "Das ist wie eine Karte, die zeigt, wo dein Ladenschild an der neuen Adresse aufgehängt werden muss."
  },
  "help.domain.input": {
    "t": "Meine Domain (Eingabefeld)",
    "what": "Gib die Domain ein, die du gekauft hast, etwa mymusic.com.",
    "when": "Erst nachdem du die Anleitung abgeschlossen hast und deine Website bereits unter dieser Domain erreichbar ist.",
    "click": "Erst mit [[Verbinden]] wird etwas geprüft.",
    "care": "Gib nur die Domain ein, ohne http://, https:// oder einen / und weitere Wörter. Wenn du später auf eine andere Domain wechseln willst, trage die neue ein und verbinde sie erneut.",
    "like": "Das ist wie das Schreiben der neuen Straßenadresse auf dein Ladenschild."
  },
  "help.domain.connect": {
    "t": "Verbinden",
    "what": "Prüft, ob sich deine Website wirklich unter der eingegebenen Domain öffnet, und macht sie anschließend zu deiner Hauptadresse.",
    "when": "Klicke darauf, nachdem du die Domain eingegeben hast.",
    "click": "Die Prüfung kann bis zu 30 Sekunden dauern. Bei Erfolg wird die Domain gespeichert und aimusiclist.com aktualisiert die Adresse automatisch. Besucher der alten kostenlosen Adresse werden zur neuen weitergeleitet. Bei der Hosting-Version bleibt die alte Adresse ebenfalls erreichbar.",
    "care": "Bei einer Fehlermeldung öffnet sich deine Website noch nicht unter der Domain oder dort erscheint eine andere Website. Prüfe die Anleitung, warte einige Minuten und versuche es erneut. Songs in vorhandenen Playlists spielen weiterhin.",
    "like": "Das ist wie die Post, die deine neue Ladenadresse prüft, bevor sie Briefe dorthin weiterleitet."
  },
  "help.menus.form": {
    "t": "Menü hinzufügen / Menü bearbeiten",
    "what": "Hier erstellst du die Menüknöpfe oben auf deiner Website. Jedes Menü zeigt Songs eines Genres.",
    "when": "Nutze es, damit Besucher deine Musik nach Stil finden, etwa über R&B und Hip-Hop.",
    "click": "Wähle 1. ein Hauptgenre, 2. bei Bedarf ein Untergenre und 3. auf Wunsch einen Namen. Klicke dann auf [[Menü speichern]]. Die Zahl neben der Schaltfläche zeigt, wie viele deiner Songs dort erscheinen.",
    "care": "Die Genres kommen von aimusiclist.com. So stimmen deine Menüs mit der großen Website überein. Du kannst höchstens 30 Menüs und nur eines pro Genre haben.",
    "like": "Das ist wie Regalschilder im Laden: „R&B hier“, „Hip-Hop dort“."
  },
  "help.menus.main": {
    "t": "1. Hauptgenre",
    "what": "Die große Musikrichtung dieses Menüs, zum Beispiel R&B, Hip-Hop oder Dance. Die Liste ist dieselbe wie auf aimusiclist.com.",
    "when": "Wähle das Hauptgenre immer zuerst. Ohne kannst du kein Menü speichern.",
    "click": "Danach öffnet sich die Liste passender Untergenres. Du siehst auch, wie viele deiner Songs zum Genre passen.",
    "care": "Wenn du nur ein Hauptgenre wählst, zeigt das Menü Songs, bei denen dieses Genre in einem der drei Genrefelder steht.",
    "like": "Das ist das große Schild über einer Ladenabteilung, zum Beispiel „R&B“."
  },
  "help.menus.sub": {
    "t": "2. Untergenre",
    "what": "Eine kleinere Musikrichtung innerhalb des Hauptgenres. Damit kannst du das Menü genauer eingrenzen. Die Auswahl ist freiwillig.",
    "when": "Nutze das bei vielen Songs eines Hauptgenres, wenn du nur einen bestimmten Stil zeigen willst.",
    "click": "Die Liste zeigt nur Untergenres des gewählten Hauptgenres. Mit „Alles von …“ verwendest du das ganze Hauptgenre. Die Songzahl neben [[Menü speichern]] ändert sich sofort.",
    "care": "Das Feld bleibt grau, bis du ein Hauptgenre gewählt hast. Bei einem Untergenre zeigt das Menü nur Songs, bei denen dieses Untergenre in einem der Genrefelder steht.",
    "like": "Das ist ein kleines Schild an einem Regal innerhalb der großen Abteilung."
  },
  "help.menus.label": {
    "t": "3. Menüname",
    "what": "Der Text, den Besucher auf dem Menüknopf sehen. Die Angabe ist freiwillig.",
    "when": "Schreibe auf Wunsch einen freundlichen Namen wie „Nachtmusik“. Bleibt das Feld leer, wird der Genrename verwendet.",
    "click": "Gespeichert wird mit [[Menü speichern]]. Ist das Feld leer, zeigt der Knopf den Genrenamen in der jeweiligen Besuchersprache.",
    "care": "Höchstens 30 Zeichen. Ein eigener Menüname wird in allen Sprachen gleich angezeigt.",
    "like": "Das sind die Wörter, die du selbst auf das Regaletikett schreibst."
  },
  "help.menus.save": {
    "t": "Menü speichern",
    "what": "Speichert das oben eingerichtete Menü.",
    "when": "Klicke darauf, nachdem du das Genre und gegebenenfalls den Namen gewählt hast.",
    "click": "Das Menü wird sofort gespeichert. Ein neues kommt ans Ende der Liste. Besucher sehen es nach höchstens 30 Sekunden.",
    "care": "Für dasselbe Genre darf es nur ein Menü geben. Bei 30 Menüs kannst du kein weiteres hinzufügen. Eine rote Meldung erklärt einen Fehler.",
    "like": "Das ist, als würdest du das fertige Schild am Regal befestigen."
  },
  "help.menus.order": {
    "t": "Nach oben / Nach unten",
    "what": "Verschiebt ein Menü um einen Platz nach vorne oder hinten.",
    "when": "Nutze das, damit dein wichtigstes Menü zuerst erscheint.",
    "click": "Die Reihenfolge wird sofort gespeichert. Besucher sehen sie nach höchstens 30 Sekunden.",
    "care": "Das erste Menü kann nicht weiter nach oben, das letzte nicht weiter nach unten. Diese Schaltflächen sind dann grau.",
    "like": "Du tauschst zwei Regalschilder, damit die beliebte Abteilung zuerst kommt."
  },
  "help.menus.edit": {
    "t": "Bearbeiten",
    "what": "Öffnet dieses Menü oben im Formular, damit du Genre oder Namen ändern kannst.",
    "when": "Nutze das, um ein Menü umzubenennen oder einem anderen Genre zuzuordnen.",
    "click": "Die Seite springt nach oben zum ausgefüllten Formular. Ändere die Angaben und klicke auf [[Menü speichern]]; die Position in der Liste bleibt gleich. [[Abbrechen]] schließt ohne Änderung.",
    "like": "Du nimmst ein Regalschild ab, schreibst es neu und hängst es an derselben Stelle wieder auf."
  },
  "help.menus.delete": {
    "t": "Löschen",
    "what": "Entfernt dieses Menü von deiner Website.",
    "when": "Nutze das, wenn du ein Menü nicht mehr brauchst.",
    "click": "Nach einer Rückfrage wird das Menü sofort entfernt. Besucher sehen es nach höchstens 30 Sekunden nicht mehr.",
    "care": "Nur das Menü verschwindet. Die Songs bleiben auf deiner Website und sind weiterhin auf der Startseite oder über andere Menüs erreichbar. Das Löschen lässt sich nicht rückgängig machen, aber du kannst das Menü neu erstellen.",
    "like": "Du nimmst das Schild vom Regal. Die Platten bleiben liegen."
  },
  "help.menus.list": {
    "t": "Website-Menüs",
    "what": "Alle Menüs deiner Website in der Reihenfolge, in der Besucher sie oben sehen. Die Zahl in Klammern zeigt, wie viele von maximal 30 du hast.",
    "when": "Hier kannst du Menüs prüfen, sortieren, ändern und löschen.",
    "click": "Jede Zeile zeigt den Menünamen, das Genre und die Anzahl passender Songs. Besucher sehen außerdem immer zuerst „Startseite“ und bei vorhandenen Alben auch „Alben“.",
    "care": "„Genre nicht in der Liste“ bedeutet, dass aimusiclist.com dieses Genre nicht mehr führt. Klicke auf [[Bearbeiten]] und wähle ein anderes Genre. Ein Menü ohne Songs wird Besuchern trotzdem angezeigt, ist aber leer.",
    "like": "Das ist die Reihe der Regalschilder in deinem Geschäft von links nach rechts."
  },
  "help.tab.menus": {
    "t": "Menüs",
    "what": "Die Navigation deiner Website. Jedes Menü zeigt Songs eines Genres aus der Genreliste von aimusiclist.com.",
    "when": "Hier bestimmst du, welche Menüs Besucher sehen und in welcher Reihenfolge.",
    "click": "Der Tab wechselt nur die Ansicht. Hinzufügen, Bearbeiten, Verschieben und Löschen eines Menüs werden sofort gespeichert.",
    "care": "Bis zu 30 Menüs. Wähle erst ein Hauptgenre, dann bei Bedarf ein Untergenre und schließlich einen Namen (maximal 30 Zeichen, freiwillig). Mit den Genres von aimusiclist.com bleiben beide Websites gleich geordnet.",
    "like": "Das sind Regalschilder in deinem Geschäft: „R&B hier, Hip-Hop dort“."
  },
  "help.stats.title": {
    "t": "Website-Statistiken",
    "what": "Dieser Tab zeigt, wie viele Menschen deine Website besucht haben und wie oft Songs abgespielt wurden. Auch Zahlen von aimusiclist.com findest du hier.",
    "when": "Öffne ihn täglich oder wöchentlich, um beliebte Songs und das Wachstum deiner Website zu erkennen.",
    "click": "Das Ansehen verändert nichts auf deiner Website. Wähle oben einen Zeitraum; die Karten darunter zeigen die passenden Zahlen.",
    "care": "Die meisten Zahlen werden **einmal täglich** früh am Morgen nach UTC gezählt. Einen heute hochgeladenen Song siehst du ab morgen in den Zahlen.",
    "like": "Das ist das Notizbuch eines Ladenbesitzers: Jeden Morgen trägt er Besucher und gehörte Songs ein."
  },
  "help.stats.period": {
    "t": "Zeitraum (7 / 30 / 90 Tage)",
    "what": "Mit diesen Schaltflächen bestimmst du, für wie viele Tage Zahlen zusammengerechnet werden: 7, 30 oder 90.",
    "when": "Wähle 7 Tage für diese Woche und 90 Tage für den Überblick über etwa drei Monate.",
    "click": "Zahlen, Diagramme und Tabellen wechseln sofort. Die gewählte Schaltfläche ist farbig. Nichts wird gespeichert oder verschickt.",
    "care": "Der Zeitraum endet **gestern** (UTC). Heute steht getrennt in der kleinen Zeile **Heute** jeder Karte. Der Pfeil **im Vergleich zum Zeitraum davor** vergleicht gleich lange Zeiträume.",
    "like": "Das ist, als würdest du eine Woche, einen Monat oder drei Monate aus deinem Ladenbuch lesen."
  },
  "help.stats.note.off": {
    "t": "Wiedergaben auf meiner Website werden nicht gezählt",
    "what": "Bei dieser Hosting-Art lassen sich Wiedergaben auf deiner eigenen Website noch nicht zählen. Deshalb nutzt die **Beliebt**-Reihenfolge deiner Website stattdessen Wiedergaben von aimusiclist.",
    "when": "Der Hinweis erscheint automatisch. Wenn dir die aimusiclist-Zahlen reichen, musst du nichts tun.",
    "click": "Lies die Meldung. Nennt sie einen Einrichtungsschritt wie das Verbinden des Audio-Workers, kannst du damit die Zählung aktivieren. Zahlen werden dann ab dem nächsten Tag erfasst.",
    "care": "Die Zeit vor dem Einschalten der Zählung lässt sich später nicht nachtragen.",
    "like": "Das ist wie ein Laden ohne Besucherzähler. Du nutzt stattdessen die Zahlen des großen Marktes."
  },
  "help.stats.note.dataset": {
    "t": "Statistikaufzeichnung ist ausgeschaltet",
    "what": "Deine Website zeichnet noch keine Besuche und Wiedergaben auf. Die Zählung muss einmal im Cloudflare-Konto aktiviert werden.",
    "when": "Richte das einmal ein, wenn du die Zahlen deiner eigenen Website sehen möchtest.",
    "click": "Befolge die Schritte in der Meldung: Erstelle den Statistikspeicher bei Cloudflare mit genau dem angezeigten Namen. Öffne dann die GitHub-Seite deiner Website, entferne das Zeichen „# “ am Anfang der drei genannten Zeilen und klicke auf [[Commit changes]]. Deine Website aktualisiert sich nach 1–3 Minuten. Zahlen erscheinen nach der nächsten täglichen Zählung.",
    "care": "Der Name muss genau **aml_site_stats** sein. Wenn du den Cloudflare-Schritt überspringst und nur die drei Zeilen änderst, schlägt das Update fehl. Setze dann „# “ wieder davor.",
    "like": "Das ist wie ein Besucherzähler an der Ladentür. Vor dem Einbau wird niemand gezählt."
  },
  "help.stats.note.token": {
    "t": "Nutzungsschlüssel fehlt",
    "what": "Um deine Zahlen abzurufen, braucht die Website einen Cloudflare-Nutzungsschlüssel. Er wurde noch nicht eingetragen.",
    "when": "Füge ihn einmal hinzu. Derselbe Schlüssel zeigt oben auch den freien Platz deines kostenlosen Tarifs.",
    "click": "Öffne den Tab **Website-Info** und füge dort den Schlüssel ein. Er braucht die Berechtigung aus der Meldung. Die Zahlen erscheinen ab der nächsten täglichen Zählung.",
    "care": "Erstelle den Schlüssel im **selben Cloudflare-Konto** wie die Website. Halte ihn geheim und veröffentliche ihn nirgendwo.",
    "like": "Das ist wie der Schlüssel zum Zählerraum. Ohne ihn kannst du den Zähler nicht ablesen."
  },
  "help.stats.note.no_visits": {
    "t": "Besuche werden nicht gezählt",
    "what": "Bei diesem Hosting werden Seiten als fertige Dateien ausgeliefert. Deshalb können Besuche nicht gezählt werden, Wiedergaben aber schon.",
    "when": "Dieser Hinweis erscheint automatisch und ist bei diesem Hosting normal.",
    "click": "Du musst nichts anklicken. Die Karte **Besuche** und ihr Diagramm werden ausgeblendet. Länder, Geräte und Sprachen werden stattdessen anhand der Wiedergaben gezählt.",
    "like": "Das ist wie ein Laden, der nicht zählen kann, wer hereinkommt, aber jede abgespielte Platte erfasst."
  },
  "help.stats.note.error": {
    "t": "Statistiken konnten nicht gelesen werden",
    "what": "Die letzte Zählung ist fehlgeschlagen. Den Grund findest du in der Meldung.",
    "when": "Der Hinweis erscheint automatisch, wenn etwas schiefgelaufen ist.",
    "click": "Steht dort **Die zuletzt gespeicherten Zahlen werden angezeigt**, siehst du die letzten gültigen Werte. Meist hilft die nächste tägliche Zählung. Bleibt die Meldung mehrere Tage, prüfe den Nutzungsschlüssel unter **Website-Info**.",
    "care": "Fehlende Tage lassen sich nachholen, wenn die Zählung bald wieder funktioniert. Sehr alte Tage möglicherweise nicht.",
    "like": "Das ist wie ein Morgen, an dem der Zählerableser nicht kommen konnte. Bis zu seinem nächsten Besuch bleiben die gestrigen Zahlen stehen."
  },
  "help.stats.updated": {
    "t": "Zeitpunkt der letzten Zählung",
    "what": "Diese Zeile zeigt, wann die Zahlen zuletzt gezählt wurden. Sie weist auch darauf hin, dass es Näherungswerte sind.",
    "when": "Schau nach, wenn dir Zahlen veraltet vorkommen. Steht dort gestern, hat die nächste Zählung noch nicht stattgefunden.",
    "care": "Die Zahlen werden einmal täglich kurz nach 00:00 UTC gezählt. Jede Website hat dafür eine eigene Minute, die hier angezeigt wird. **Bots** (automatische Programme) und **deine eigenen Besuche** während der Anmeldung werden ausgelassen. Deshalb sind die Werte etwas kleiner als alle Klicks zusammen.",
    "like": "Das ist wie das Datum auf einem Kassenbon. Es zeigt, wann gezählt wurde."
  },
  "help.stats.csv.days": {
    "t": "Tägliche CSV herunterladen",
    "what": "Lädt eine Datei mit einer Zeile pro Tag des gewählten Zeitraums herunter: Besuche, Wiedergaben, Wiedergaben über aimusiclist, Gästebucheinträge und aimusiclist-Zahlen.",
    "when": "Nutze sie zur Sicherung deiner Zahlen oder für eigene Diagramme in Excel oder Google Sheets.",
    "click": "Die Datei wird direkt im Browser erstellt und im Download-Ordner gespeichert. Deine Website ändert sich nicht.",
    "care": "Die Tage richten sich nach UTC. Wähle vorher den Zeitraum (7, 30 oder 90 Tage), denn die Datei übernimmt ihn.",
    "like": "Das ist wie Kopien aus deinem Ladenbuch, die du zu Hause aufbewahrst."
  },
  "help.stats.csv.tracks": {
    "t": "Song-CSV herunterladen",
    "what": "Lädt eine Datei mit einer Zeile pro Song herunter: Rang, Rangänderung, Wiedergaben, Wiedergaben über aimusiclist sowie dessen Zahlen und Ränge.",
    "when": "Nutze sie, um Songs in einer Tabelle zu vergleichen oder ihre Ergebnisse festzuhalten.",
    "click": "Die Datei wird direkt im Browser erstellt und heruntergeladen. Deine Website ändert sich nicht.",
    "care": "Wiedergaben folgen dem gewählten Zeitraum. aimusiclist-Zahlen beziehen sich immer auf die letzten 7 Tage. Leere Zellen bedeuten, dass es keine Zahl gibt.",
    "like": "Das ist wie eine Kopie der Bestsellerliste aus deinem Schaufenster für dein eigenes Notizbuch."
  },
  "help.stats.refresh": {
    "t": "Jetzt aktualisieren",
    "what": "Zählt Besuche und Wiedergaben deiner Website sofort neu, einschließlich heute.",
    "when": "Nutze das, wenn du gerade einen Song geteilt hast und wissen möchtest, ob Menschen kommen. Sonst ändern sich Zahlen nur einmal täglich.",
    "click": "Nach wenigen Sekunden werden die Zahlen in diesem Tab aktualisiert. Auch die Wiedergabezahlen in der Songliste und auf deiner Website ändern sich. Danach musst du **1 Minute** warten, bevor du erneut klicken kannst.",
    "care": "Es gibt ein Tageslimit: **200 Mal** bei selbst installierten Websites und **30 Mal** bei meshmelo. Die aimusiclist-Zahlen ändern sich damit nicht; sie kommen weiterhin einmal am Tag. Fehlt diese Schaltfläche, kann dein Hosting gerade nicht zählen.",
    "like": "Das ist wie das Ablesen des Stromzählers mitten am Tag statt erst am nächsten Morgen."
  },
  "help.stats.tile.visits": {
    "t": "Besuche",
    "what": "So oft wurde deine Website im gewählten Zeitraum geöffnet. Die Anzeige lautet **ungefähr**, weil die Zahl nicht ganz genau ist.",
    "when": "Prüfe daran, ob deine Beiträge in sozialen Netzwerken Besucher bringen.",
    "click": "Unter der großen Zahl zeigt ein Pfeil die Veränderung: ▲ mehr als zuvor, ▼ weniger. **Heute** zeigt nach [[Jetzt aktualisieren]] den heutigen Wert oder – wenn noch nicht gezählt wurde.",
    "care": "Mehr ist besser. Bots und deine eigenen Besuche werden nicht mitgezählt. Steigt die Zahl an einem Tag stark, schau unten bei **Woher Besucher kamen** nach der Ursache.",
    "like": "Das ist die Zahl der Gäste, die durch deine Ladentür gekommen sind."
  },
  "help.stats.tile.plays": {
    "t": "Gestartete Wiedergaben",
    "what": "So oft wurde ein Song auf deiner Website im gewählten Zeitraum von Anfang an gestartet.",
    "when": "Das ist eine besonders wichtige Zahl für deine Musik. Beobachte sie nach einem neuen Upload.",
    "click": "Der Pfeil vergleicht mit dem vorherigen Zeitraum. **Heute** zeigt den heutigen Wert nach [[Jetzt aktualisieren]].",
    "care": "Mehr ist besser. Eine Wiedergabe zählt beim **Start**, selbst wenn jemand früh stoppt. Deine eigenen Wiedergaben während der Anmeldung zählen nicht. Bleibt der Wert tagelang 0, prüfe die Hinweise oben auf dieser Karte.",
    "like": "Das ist die Anzahl der Platten, die im Laden auf den Plattenspieler gelegt wurden."
  },
  "help.stats.tile.plays_aml": {
    "t": "Wiedergaben über aimusiclist",
    "what": "Songs, die auf aimusiclist.com abgespielt werden, kommen von deiner eigenen Website. Hier wird gezählt, wie oft das passiert.",
    "when": "Daran siehst du, wie sehr der große Markt hilft, deine Musik bekannt zu machen.",
    "click": "Das Ansehen ändert nichts. Der Pfeil vergleicht mit dem vorherigen Zeitraum.",
    "care": "Mehr ist besser. Diese Wiedergaben beeinflussen **nicht** die **Beliebt**-Reihenfolge deiner Website. aimusiclist hat eine eigene Rangliste. Die Zahl kann etwas von der aimusiclist-Karte darunter abweichen, weil beide Orte unterschiedlich zählen.",
    "like": "Deine Platten laufen auf dem großen Markt, der Ton kommt aber aus deinem Lager. Hier siehst du, wie oft das geschieht."
  },
  "help.stats.tile.gb": {
    "t": "Gästebucheinträge",
    "what": "So viele neue Nachrichten wurden im gewählten Zeitraum in dein Gästebuch geschrieben.",
    "when": "Daran erkennst du, wie viele Fans dir schreiben.",
    "click": "Das Ansehen ändert nichts. Der Pfeil vergleicht mit dem vorherigen Zeitraum.",
    "care": "Mehr bedeutet meist mehr Interesse. Deine eigenen Beiträge zählen nicht. Bei einem plötzlichen Sprung prüfe das Gästebuch auf Spam.",
    "like": "Das ist die Anzahl der Nachrichten im Gästebuch an deiner Ladentür."
  },
  "help.stats.trend": {
    "t": "Diagramm pro Tag",
    "what": "Jeder Balken steht für einen Tag. Je höher er ist, desto mehr Wiedergaben oder Besuche gab es.",
    "when": "Hier findest du besonders erfolgreiche Tage, zum Beispiel nach dem Teilen eines Songs.",
    "click": "Zeige mit der Maus auf einen Balken oder tippe ihn an, um Datum und Zahl zu sehen. Links steht die Skala.",
    "care": "Die Tage folgen UTC. Deshalb kann ein Tag an deinem Wohnort morgens oder abends beginnen. Eine Lücke bedeutet 0 oder keine Zählung für diesen Tag.",
    "like": "Das ist wie ein Münzstapel pro Tag. Höhere Stapel zeigen geschäftigere Tage."
  },
  "help.stats.table_view": {
    "t": "Als Tabelle anzeigen",
    "what": "Öffnet dieselben Zahlen als Tabelle: eine Zeile pro Tag, neuester zuerst.",
    "when": "Nutze das für genaue Tageswerte oder wenn ein Diagramm schwer zu lesen ist.",
    "click": "Mit einem Klick öffnest oder schließt du die Tabelle. Nichts wird gespeichert.",
    "care": "Es erscheint nur der gewählte Zeitraum. Um die Zahlen zu behalten, nutze unten [[Tägliche CSV herunterladen]].",
    "like": "Das ist dasselbe Ladenbuch, nur als Zahlen statt als Bild."
  },
  "help.stats.col.date": {
    "t": "Datum (UTC)",
    "what": "Der Tag, zu dem eine Zeile gehört. Alle Tage richten sich nach **UTC**, der Weltstandardzeit.",
    "when": "Nutze das, um Zahlen mit einem Ereignis wie dem Teilen eines Songs zu vergleichen.",
    "care": "UTC ist nicht deine Ortszeit. In Korea beginnt ein UTC-Tag um 9 Uhr morgens. Ein spätabends geteilter Song kann deshalb am vorherigen oder nächsten Tag gezählt werden.",
    "like": "Das ist wie ein Ladenbuch mit einer gemeinsamen Weltuhr, damit alle Geschäfte dasselbe Datum schreiben."
  },
  "help.stats.col.rank": {
    "t": "Rang",
    "what": "Der Platz eines Songs in der **Beliebt**-Reihenfolge deiner Website. Daneben steht eventuell die Veränderung zum Vortag.",
    "when": "Hier erkennst du deine erfolgreichsten Songs.",
    "click": "Du musst nichts anklicken. ▲ heißt um diese Plätze gestiegen, ▼ gefallen, – unverändert. **NEW** bedeutet neu dabei, **RE** nach einer Pause wieder dabei.",
    "care": "Eine kleinere Rangnummer ist besser (1 ist der Spitzenplatz). – bedeutet keinen Rang, weil in den letzten 7 Tagen niemand den Song gespielt hat.",
    "like": "Das ist die Nummer auf der Bestsellerliste im Schaufenster."
  },
  "help.stats.col.plays": {
    "t": "Wiedergaben (gewählte Tage)",
    "what": "So oft wurde dieser Song im gewählten Zeitraum auf deiner Website gestartet.",
    "when": "Vergleiche damit deine Songs.",
    "care": "Mehr ist besser. Wiedergaben über aimusiclist stehen in der nächsten Spalte. Hat ein neuer Song 0, warte auf die nächste tägliche Zählung.",
    "like": "Das ist die Zahl der Male, die diese Platte im Laden abgespielt wurde."
  },
  "help.stats.col.plays_aml": {
    "t": "Über aimusiclist",
    "what": "So oft wurde dieser Song im gewählten Zeitraum auf aimusiclist.com abgespielt, wobei die Datei von deiner Website kam.",
    "when": "Daran siehst du, welche Songs Menschen auf dem großen Markt entdecken.",
    "care": "Mehr ist besser. Diese Wiedergaben ändern deine Beliebt-Reihenfolge nicht. Der Wert kann von **aimusiclist-Wiedergaben (7 Tage)** abweichen, weil die beiden Orte anders zählen.",
    "like": "Das zeigt, wie oft diese Platte aus deinem Lager auf dem großen Markt abgespielt wurde."
  },
  "help.stats.col.likes": {
    "t": "Likes ♥",
    "what": "So viele ♥-Likes hat dieser Song seit seiner Veröffentlichung auf deiner eigenen Website bekommen.",
    "when": "Hier erkennst du, welche Songs deine Fans am meisten lieben.",
    "care": "Dies ist die **Gesamtzahl seit Beginn**, nicht der gewählte Zeitraum. Sie wird täglich gezählt. Likes auf aimusiclist werden getrennt in der aimusiclist-Karte erfasst.",
    "like": "Das ist, als würdest du alle Herzen auf dem Songzettel im Laden zählen."
  },
  "help.stats.col.aml_plays7": {
    "t": "aimusiclist-Wiedergaben (7 Tage)",
    "what": "So oft wurde dieser Song in den letzten 7 Tagen auf aimusiclist.com abgespielt, nach der Zählweise von aimusiclist.",
    "when": "Daran siehst du, wie dein Song diese Woche auf dem großen Markt läuft.",
    "care": "Es sind immer **7 Tage**, unabhängig vom gewählten Zeitraum. Die Zahl wird täglich übermittelt. Mehr ist besser.",
    "like": "Das ist die eigene Wochenzählung des großen Marktes für deine Platte."
  },
  "help.stats.col.aml_valid7": {
    "t": "Gültige Wiedergaben (7 Tage)",
    "what": "Wiedergaben auf aimusiclist in den letzten 7 Tagen, bei denen Menschen **mindestens 30 Sekunden** zugehört haben.",
    "when": "Damit erkennst du echtes Interesse. Kurzes Überspringen zählt nicht als gültige Wiedergabe.",
    "care": "Mehr ist besser. Die Zahl ist normalerweise etwas kleiner als alle Wiedergaben. Bei einem großen Unterschied springen viele Hörer vielleicht früh weiter. Versuche einen stärkeren Songanfang oder ein besseres Cover. aimusiclist nutzt gültige Wiedergaben für eine faire Rangliste.",
    "like": "Das sind die Gäste, die lange genug am Marktstand bleiben, um den Song wirklich zu hören, statt nur vorbeizugehen."
  },
  "help.stats.col.chart": {
    "t": "Chartplatz",
    "what": "Der Platz des Songs in der wöchentlichen aimusiclist-Rangliste (Top 100). Daneben siehst du die Veränderung seit der vorherigen Liste.",
    "when": "Hier erkennst du, ob dein Song in die große Rangliste gekommen ist.",
    "care": "Eine kleinere Zahl ist besser. **NEW** bedeutet neu eingestiegen. – bedeutet, dass der Song derzeit nicht in der Rangliste ist. Das ist bei den meisten Songs normal.",
    "like": "Das ist der Platz deiner Platte auf der großen Bestseller-Tafel des Marktes."
  },
  "help.stats.col.genre_rank": {
    "t": "Genrerang",
    "what": "Der Platz des Songs in der aimusiclist-Rangliste seines Genres, etwa R&B oder Hip-Hop.",
    "when": "Damit vergleichst du deinen Song mit Musik desselben Stils.",
    "care": "Eine kleinere Zahl ist besser. Genre-Ranglisten sind kleiner als die Hauptrangliste, daher bekommt man hier leichter einen Platz. – bedeutet noch keinen Genrerang.",
    "like": "Das ist dein Platz im R&B-Regal des großen Marktes statt auf dem gesamten Markt."
  },
  "help.stats.col.all_rank": {
    "t": "Rang unter allen Songs",
    "what": "Der Platz des Songs unter **allen Songs**, die diese Woche (Freitag bis Donnerstag) auf aimusiclist gehört wurden. Darunter siehst du seinen bisher besten Platz.",
    "when": "Nutze ihn auch, wenn dein Song nicht in den Top 100 ist. Du kannst trotzdem sehen, ob er steigt.",
    "click": "Hier musst du nichts anklicken. ▲ und eine Zahl zeigen, um wie viele Plätze der Song seit letzter Woche gestiegen ist. ▼ zeigt den Rückgang.",
    "care": "Eine kleinere Zahl ist besser. Der Rang ändert sich **jeden Freitag**. Bei Songs ohne Wiedergabe in dieser Woche steht –.",
    "like": "Auch wenn deine Platte nicht auf der Haupttafel steht, findest du ihren Platz in der vollständigen Liste des Marktes."
  },
  "help.stats.tracks": {
    "t": "Beliebte Songs",
    "what": "Eine Tabelle deiner Songs mit Wiedergabezahlen und Rängen. Sie zeigt bis zu 100 Songs, die bestplatzierten zuerst.",
    "when": "Hier findest du deine aktuellen Hits und Songs, die noch mehr Aufmerksamkeit brauchen.",
    "click": "Beim Ansehen ändert sich nichts. Die Spalte **Wiedergaben** folgt dem oben gewählten Zeitraum. Die aimusiclist-Spalten zeigen immer die letzten 7 Tage.",
    "care": "Die Reihenfolge entspricht dem Knopf **Beliebt** auf deiner Website und wird täglich aktualisiert. aimusiclist-Spalten erscheinen erst, wenn aimusiclist.com seine Zahlen übermittelt hat.",
    "like": "Das ist die Bestsellerliste an deiner Ladenwand."
  },
  "help.stats.rank_basis": {
    "t": "So entsteht die Beliebt-Reihenfolge",
    "what": "Diese Zeile erklärt, was die **Beliebt**-Reihenfolge deiner Website bestimmt: Wiedergaben auf deiner Website oder, wenn sie nicht gezählt werden können, Wiedergaben auf aimusiclist.",
    "when": "Lies das, wenn du wissen willst, warum ein Song höher steht als ein anderer.",
    "care": "Es zählen nur die **letzten 7 Tage**, und nur gespielte Songs bekommen einen Rang (bis zu 100). Bei Gleichstand entscheiden gültige aimusiclist-Wiedergaben und danach der neuere Upload. Über aimusiclist übertragene Wiedergaben werden hier nicht verwendet.",
    "like": "Das ist die Regelkarte neben der Bestsellerliste, damit alle wissen, wie sie entsteht."
  },
  "help.stats.albums": {
    "t": "Alben",
    "what": "Eine Tabelle deiner Alben. In jeder Zeile werden die Wiedergaben aller enthaltenen Songs zusammengerechnet.",
    "when": "Hier erkennst du, welches Album am meisten gehört wird.",
    "care": "Die Tabelle ist nach Wiedergaben sortiert, das beliebteste Album zuerst. Ein Song in zwei Alben zählt bei beiden mit.",
    "like": "Das ist wie das Zählen ganzer Plattensets statt einzelner Platten."
  },
  "help.stats.album.plays": {
    "t": "Album-Wiedergaben (gewählte Tage)",
    "what": "Alle Wiedergaben der Songs dieses Albums im gewählten Zeitraum. Dazu zählen Wiedergaben auf deiner Website **und** über aimusiclist.",
    "when": "Nutze die Zahl, um Alben zu vergleichen.",
    "care": "Mehr ist besser. Ein Album mit vielen Songs kann allein deshalb einen hohen Wert haben. Achte auch auf die Spalte **Songs**.",
    "like": "Das ist die Summe aller abgespielten Platten eines Sets, im Laden und am Marktstand."
  },
  "help.stats.album.aml_plays7": {
    "t": "Album-Wiedergaben auf aimusiclist (7 Tage)",
    "what": "Alle Wiedergaben der Songs dieses Albums auf aimusiclist in den letzten 7 Tagen, nach dessen eigener Zählweise.",
    "when": "Daran siehst du, welches Album diese Woche auf dem großen Markt beliebt ist.",
    "care": "Es sind immer **7 Tage**, unabhängig vom gewählten Zeitraum. Mehr ist besser.",
    "like": "Das ist die Wochenzählung des großen Marktes für dein ganzes Plattenset."
  },
  "help.stats.listeners": {
    "t": "Hörer (nach Wiedergaben)",
    "what": "Diese Karte zeigt, wer deine Songs hört: Land, Gerät, Sprache und Tageszeit.",
    "when": "Nutze sie, um zu entscheiden, wo du Musik teilst und in welcher Sprache du schreibst.",
    "care": "Dein Hosting kann keine Besuche zählen. Diese Karte basiert deshalb auf **Wiedergaben**, nicht auf Besuchen. Es werden keine persönlichen Daten gespeichert. Der Prozentwert zeigt den Anteil innerhalb der angezeigten Liste.",
    "like": "Das ist, als würdest du darauf achten, aus welchen Städten die Menschen kommen, die deine Platten abspielen."
  },
  "help.stats.countries": {
    "t": "Länder",
    "what": "Die Länder deiner Hörer oder Besucher. Die 10 häufigsten stehen oben, größte Zahl zuerst.",
    "when": "Nutze das für die Sprache von Songtiteln oder Werbung in bestimmten Ländern.",
    "care": "**Unbekannt** bedeutet, dass das Land nicht ermittelt werden konnte. Ein kleiner unbekannter Anteil ist normal.",
    "like": "Das ist wie eine Weltkarte im Laden mit Stecknadeln für die Heimatländer der Gäste."
  },
  "help.stats.devices": {
    "t": "Geräte",
    "what": "Zeigt, womit Menschen deine Website öffnen: Handy, Tablet oder Computer.",
    "when": "Nutze das bei der Designwahl. Hören die meisten übers Handy, prüfe, wie deine Website dort aussieht.",
    "care": "Geräte, die nicht eindeutig erkannt werden, erscheinen nicht.",
    "like": "Das ist, als würdest du darauf achten, ob Gäste zu Fuß, mit dem Rad oder mit dem Auto kommen."
  },
  "help.stats.langs": {
    "t": "Sprachen",
    "what": "Die Spracheinstellungen der Handys oder Computer deiner Besucher. Die 10 häufigsten werden angezeigt.",
    "when": "Damit entscheidest du, in welchen Sprachen du Website-Texte oder Songtitel schreiben möchtest.",
    "care": "Es geht um die Gerätesprache, nicht unbedingt um die am besten gesprochene Sprache. **Unbekannt** heißt, dass das Gerät sie nicht mitgeteilt hat.",
    "like": "Das ist wie das Zuhören, welche Sprachen deine Gäste beim Hereinkommen sprechen."
  },
  "help.stats.audience": {
    "t": "Besucherschaft",
    "what": "Diese Karte zeigt, woher deine Besucher kommen, auf welchen Websites sie dich gefunden haben, welche Geräte und Sprachen sie verwenden und wann sie vorbeischauen.",
    "when": "Nutze diese Angaben, um deine Musik gezielt zu teilen und die richtige Sprache zu wählen.",
    "click": "Das Anschauen ändert nichts. Jede Liste richtet sich nach dem gewählten Zeitraum.",
    "care": "Es werden keine persönlichen Daten gespeichert, nur Gruppen wie „Korea“ oder „Handy“. Die Prozentzahl ist der Anteil innerhalb der sichtbaren Liste.",
    "like": "Das ist, als würde ein Ladenbesitzer bemerken: „Heute kamen viele Gäste abends aus der Nachbarstadt zu Fuß.“"
  },
  "help.stats.refs": {
    "t": "Woher Besucher kamen",
    "what": "Zeigt in großen Gruppen, wie Menschen deine Website gefunden haben: Adresse direkt oder Lesezeichen, Suche, soziale Netzwerke und Musik-Apps, aimusiclist.com, andere Websites oder Links innerhalb deiner Website.",
    "when": "Daran erkennst du, welche Art des Teilens am besten funktioniert.",
    "care": "**Direkt / Lesezeichen** umfasst auch Links aus Chat-Apps, die keine Herkunft mitteilen. **Innerhalb deiner Website** bedeutet den Wechsel zwischen Seiten deiner Website.",
    "like": "Das ist die Frage an jeden Gast an der Tür: „Wie hast du von meinem Laden erfahren?“"
  },
  "help.stats.domains": {
    "t": "Häufigste verweisende Websites",
    "what": "Die Namen der Websites, von denen die meisten Besucher zu dir gekommen sind. Bis zu 10 werden angezeigt.",
    "when": "Damit findest du heraus, welche Beiträge Besucher bringen, und kannst dich bedanken oder dort erneut teilen.",
    "care": "Es erscheinen nur die Websitenamen, nicht die genauen Unterseiten. Wechsel innerhalb deiner eigenen Website gehören nicht dazu.",
    "like": "Das ist die Liste von Nachbarläden, deren Wegweiser zu deinem Laden führen."
  },
  "help.stats.hours": {
    "t": "Tageszeit",
    "what": "Jeder Balken steht für eine Stunde (0:00 bis 23:00 Uhr). Höhere Balken bedeuten mehr Wiedergaben oder Besuche in dieser Stunde, zusammengerechnet über den gewählten Zeitraum.",
    "when": "Nutze das, um neue Songs kurz vor den geschäftigsten Stunden zu teilen.",
    "click": "Zeige mit der Maus auf einen Balken oder tippe ihn an, um die Stunde und Zahl zu sehen.",
    "care": "Die Stunden stehen in **der Zeit deines Computers**. Die Überschrift zeigt den Unterschied zu UTC. In einigen Regionen mit Zeitzonen in halben Stunden bleiben sie in UTC.",
    "like": "Das ist wie zu wissen, dass der Laden mittags und nach der Schule am vollsten ist."
  },
  "help.stats.aml.title": {
    "t": "Auf aimusiclist.com",
    "what": "Diese Karte zeigt deine Zahlen auf aimusiclist.com: Wiedergaben, gültige Wiedergaben, Likes und Playlist-Aufnahmen, dazu ein Tagesdiagramm und Länder.",
    "when": "Damit siehst du, wie deine öffentlichen Songs auf dem großen Markt laufen.",
    "click": "Beim Ansehen ändert sich nichts. Die Kacheln folgen dem oben gewählten Zeitraum.",
    "care": "Diese Zahlen kommen **einmal täglich** am Morgen. [[Jetzt aktualisieren]] ändert sie nicht. Bei „Nicht verbunden“ musst du zuerst deine Website mit aimusiclist.com verbinden. Gezählt werden nur Songs, die du dort öffentlich gemacht hast.",
    "like": "Das ist der Morgenbericht vom großen Markt über deinen Stand."
  },
  "help.stats.aml.plays": {
    "t": "aimusiclist-Wiedergaben",
    "what": "So oft wurden deine Songs im gewählten Zeitraum auf aimusiclist.com abgespielt.",
    "when": "Daran siehst du, ob mehr Menschen dich auf dem großen Markt hören.",
    "care": "Mehr ist besser. Der Pfeil vergleicht mit dem vorherigen Zeitraum. Gezählt werden nur auf aimusiclist veröffentlichte Songs. Fällt die Zahl plötzlich auf 0, prüfe Öffentlichkeit und Verbindung deiner Website.",
    "like": "Das ist die Anzahl der Male, die deine Platten an deinem Marktstand gespielt wurden."
  },
  "help.stats.aml.valid": {
    "t": "Gültige Wiedergaben (ab 30 Sekunden)",
    "what": "Wiedergaben auf aimusiclist, bei denen Menschen im gewählten Zeitraum mindestens 30 Sekunden zugehört haben.",
    "when": "Hier erkennst du echtes Interesse statt schnelles Überspringen.",
    "care": "Mehr ist besser. Liegt die Zahl weit unter **Wiedergaben**, springen viele Menschen früh weiter. aimusiclist nutzt gültige Wiedergaben für die faire Rangliste; sie sind besonders wichtig für den Chartplatz.",
    "like": "Das sind die Gäste, die am Stand bleiben, um den Song wirklich zu hören."
  },
  "help.stats.aml.likes": {
    "t": "Likes auf aimusiclist",
    "what": "So viele Likes haben deine Songs im gewählten Zeitraum auf aimusiclist.com bekommen.",
    "when": "Damit erkennst du, wie Fans auf neue Songs reagieren.",
    "care": "Mehr ist besser. Dies sind Likes auf aimusiclist, nicht auf deiner eigenen Website. Deine Website-Likes findest du in der Spalte **Likes ♥** der Tabelle Beliebte Songs.",
    "like": "Das sind Herzen an der Tafel deines Standes auf dem großen Markt."
  },
  "help.stats.aml.adds": {
    "t": "Zu Playlists hinzugefügt",
    "what": "So oft haben Menschen deine Songs im gewählten Zeitraum in ihre Playlists auf aimusiclist.com aufgenommen.",
    "when": "Daran siehst du, ob Menschen deine Songs immer wieder hören möchten.",
    "care": "Mehr ist besser. Eine Playlist-Aufnahme ist ein starkes Zeichen dafür, dass jemand später zum Song zurückkehren will.",
    "like": "Das ist wie ein Gast, der deine Platte kauft und mitnimmt, statt nur einmal am Stand zuzuhören."
  },
  "help.stats.aml.trend": {
    "t": "aimusiclist-Wiedergaben pro Tag",
    "what": "Jeder Balken zeigt einen Tag mit Wiedergaben auf aimusiclist.com. Je höher er ist, desto mehr Wiedergaben gab es an diesem Tag.",
    "when": "Hier erkennst du, wann deine Songs auf dem großen Markt beliebt waren, etwa in der Woche eines Chart-Einstiegs.",
    "click": "Zeige mit der Maus auf einen Balken oder tippe ihn an, um Datum und Zahl zu sehen.",
    "care": "Das Diagramm endet am selben Tag wie die Zahlen deiner Website (gestern, UTC). Lücken bedeuten 0 oder fehlende Zahlen.",
    "like": "Das sind tägliche Münzstapel für deinen Marktstand, einer pro Tag."
  },
  "help.stats.aml.countries": {
    "t": "Hörerländer auf aimusiclist",
    "what": "Die Länder der Menschen, die deine Songs auf aimusiclist.com abgespielt haben. Bis zu 10 Länder werden gezeigt, die häufigsten zuerst.",
    "when": "Damit erkennst du, in welchen Ländern deine Musik auf dem großen Markt beliebter wird.",
    "care": "Diese Liste erstellt aimusiclist einmal täglich. Sie kann anders aussehen als die Länderstatistik deiner eigenen Website.",
    "like": "Das ist, als würde der große Markt dir sagen, aus welchen Ländern die Gäste deines Standes kommen."
  },
  "help.stats.free.r2_storage": {
    "t": "Speicherplatz",
    "what": "So viel Platz belegen deine Songs und Bilder im Cloudflare-Speicher. Kostenlos sind **10 GB** enthalten.",
    "when": "Prüfe den Wert vor vielen Uploads oder besonders großen Dateien.",
    "care": "Über dem kostenlosen Kontingent berechnet Cloudflare Gebühren. Durch das Löschen nicht benötigter Songs wird Platz frei. WAV-Dateien sind wesentlich größer als MP3-Dateien.",
    "like": "Das zeigt, wie voll dein Lager ist."
  },
  "help.stats.free.workers": {
    "t": "Website-Anfragen heute",
    "what": "So oft wurde heute etwas von deiner Website angefordert (Seiten, Songs, Bilder). Im kostenlosen Tarif sind **100.000 pro Tag** erlaubt.",
    "when": "Prüfe das an Tagen mit vielen Besuchern, etwa nach dem Teilen eines beliebten Links.",
    "care": "Bei mehr als 100.000 Anfragen an einem Tag **stoppt die Website bis zum Tagesende**, ohne zusätzliche Gebühren. Um 00:00 UTC (9 Uhr morgens in Korea) startet sie wieder.",
    "like": "Das ist wie eine Ladentür, die sich pro Tag nur begrenzt oft öffnen lässt. Danach bleibt sie bis morgen geschlossen."
  },
  "help.stats.free.r2_class_a": {
    "t": "Schreibvorgänge diesen Monat",
    "what": "So oft wurde diesen Monat etwas in deinem Speicher gesichert, zum Beispiel beim Hochladen von Songs oder beim Ändern von Einstellungen. Kostenlos sind **1 Million pro Monat**.",
    "when": "Prüfe den Wert, wenn du sehr viele Dateien hochlädst oder häufig etwas änderst.",
    "care": "Bei normaler Nutzung bleibt die Zahl weit unter der Grenze. Bei Überschreitung berechnet Cloudflare Gebühren. Jeden Monat beginnt die Zählung neu.",
    "like": "Das zählt, wie oft diesen Monat Kisten in dein Lager gebracht wurden."
  },
  "help.stats.free.r2_class_b": {
    "t": "Lesevorgänge diesen Monat",
    "what": "So oft wurde diesen Monat etwas aus deinem Speicher abgerufen, meistens beim Abspielen von Songs. Kostenlos sind **10 Millionen pro Monat**.",
    "when": "Prüfe den Wert, wenn deine Songs oft gehört werden.",
    "care": "Bei Überschreitung berechnet Cloudflare Gebühren. Jeden Monat beginnt die Zählung neu. Viele Wiedergaben sind gut, deshalb wächst dieser Balken mit deiner Beliebtheit.",
    "like": "Das zählt, wie oft diesen Monat Platten aus deinem Lager geholt wurden."
  },
  "help.stats.free.ae": {
    "t": "Statistikeinträge heute",
    "what": "So viele Zeilen hat deine Website heute in ihr Statistikbuch geschrieben, eine pro Besuch, Wiedergabe oder Gästebucheintrag. Kostenlos sind **100.000 Zeilen pro Tag**.",
    "when": "Prüfe die Zahl an besonders geschäftigen Tagen.",
    "care": "Dieser Balken erscheint erst, wenn die heutigen Zahlen gezählt wurden, zum Beispiel nach [[Jetzt aktualisieren]]. Normale Websites liegen weit unter der Grenze. Deine Besucherseiten und Songs hängen nicht von diesem Balken ab.",
    "like": "Das ist die Zahl der Zeilen, die der Besucherzähler heute ins Notizbuch geschrieben hat."
  },
  "help.stats.free.title": {
    "t": "Freies Kontingent",
    "what": "Balken zeigen, wie viel vom kostenlosen Cloudflare-Tarif deine Website verwendet. Solange jeder Balken unter 100 % bleibt, ist die Nutzung kostenlos.",
    "when": "Schau gelegentlich nach und immer nach dem Hochladen vieler Songs.",
    "click": "Beim Ansehen ändert sich nichts. Bei **70 %** bekommt ein Balken eine Warnfarbe, bei **90 %** eine Gefahrenfarbe.",
    "care": "Wenn ein Balken fast 100 % erreicht, lade keine großen Dateien mehr hoch und prüfe, welches Limit betroffen ist. Der kostenlose Tarif reicht ungefähr für 1.000 Songs (je etwa 10 MB) und einige Tausend Besucher pro Tag.",
    "like": "Das sind die Wasser- und Stromzähler deines Ladens. Solange du unter dem kostenlosen Kontingent bleibst, zahlst du nichts."
  },
  "help.an.title": {
    "t": "Analyse",
    "what": "Dieser Tab zeigt, wie sich deine Songs mit der Zeit entwickeln: steigende oder fallende Ränge, Songs im Aufwind und Neuigkeiten von aimusiclist.com.",
    "when": "Öffne ihn etwa einmal pro Woche, um Entwicklungen zu erkennen. Der Tab **Statistiken** sagt „wie viele“. Dieser Tab sagt „steigt oder fällt“.",
    "click": "Das Ansehen verändert nichts. Wähle oben einen Zeitraum; Diagramme und Tabelle passen sich daran an.",
    "care": "Deine Website schreibt täglich eine Zeile auf. Am ersten Tag gibt es deshalb noch nichts zu zeichnen. Ab dem nächsten Morgen füllen sich die Diagramme Tag für Tag. Einträge, die älter als etwa 2 Jahre sind, werden gelöscht.",
    "like": "Das ist wie ein Tagebuch deines Ladens. Nach einigen Wochen kannst du zurückblättern und Veränderungen erkennen."
  },
  "help.an.period": {
    "t": "Zeitraum (7 / 30 / 90 Tage / Alle)",
    "what": "Diese Schaltflächen bestimmen, wie viele Tage Diagramme und Tabelle zeigen. **Alle** umfasst sämtliche bisher aufgezeichneten Tage.",
    "when": "Nutze 7 Tage für diese Woche, 30 oder 90 für einen längeren Überblick und **Alle** für die gesamte Geschichte eines Songs.",
    "click": "Diagramme und Tabelle ändern sich sofort. **Alle** kann beim ersten Mal einige Sekunden dauern, weil ältere Einträge geladen werden.",
    "care": "Einige Felder zeigen unabhängig von der Auswahl immer die letzten 7 Tage: **Meine aufsteigenden Songs**, die Spalte **Veränderung in 7 Tagen** und aimusiclist-Zahlen. **Likes und Playlist-Aufnahmen** zeigt höchstens 90 Tage.",
    "like": "Das ist wie die Wahl, wie viele Seiten deines Ladentagebuchs du auf einmal lesen möchtest."
  },
  "help.an.note.start": {
    "t": "Aufzeichnungen beginnen heute",
    "what": "Deine Website hat gerade begonnen, tägliche Aufzeichnungen zu führen. Frühere Tage gibt es noch nicht.",
    "when": "Der Hinweis erscheint am ersten Tag nach dem Einschalten dieser Funktion.",
    "click": "Du musst nichts tun. Komm morgen wieder. Jeden Morgen kommt ein weiterer Tag zu den Diagrammen hinzu.",
    "care": "Tage vor heute können später nicht nachgetragen werden. Deshalb beginnen die Diagramme heute.",
    "like": "Das ist die erste Seite eines neuen Tagebuchs. Morgen steht die erste Zeile darin."
  },
  "help.an.note.since": {
    "t": "Aufzeichnung seit",
    "what": "Der erste Tag, an dem deine Website tägliche Zahlen gespeichert hat. Diagramme können nicht weiter in die Vergangenheit reichen.",
    "when": "Prüfe das, wenn ein Diagramm scheinbar erst spät beginnt.",
    "care": "Einträge bleiben etwa 2 Jahre gespeichert. Ältere Monate werden automatisch entfernt.",
    "like": "Das ist das Datum auf der ersten Seite deines Ladentagebuchs."
  },
  "help.an.note.feed": {
    "t": "aimusiclist-Daten",
    "what": "Einmal täglich holt deine Website einen kleinen Bericht von aimusiclist.com: aufsteigende Songs, Ranglisten und Nachrichten. Diese Zeile zeigt das Datum des vorhandenen Berichts.",
    "when": "Schau darauf, wenn die Aufsteigerliste oder Nachrichten alt wirken.",
    "click": "Du musst nichts anklicken. Der Bericht kommt täglich automatisch. Wenn noch keine Daten angekommen sind, schau morgen erneut nach.",
    "care": "Auch wenn du diesen Tab oft öffnest, wird aimusiclist nicht jedes Mal neu gefragt. Es erscheint nur der gespeicherte Bericht und kostet dich nichts.",
    "like": "Das ist wie die Zeitung, die der große Markt jeden Morgen an deiner Ladentür ablegt."
  },
  "help.an.note.feed_old": {
    "t": "Heutige Daten nicht angekommen",
    "what": "Deine Website hat versucht, den heutigen Bericht von aimusiclist.com zu holen, aber er kam nicht an. Deshalb siehst du den letzten Bericht.",
    "when": "Dieser Hinweis erscheint automatisch.",
    "click": "Du musst nichts tun. Deine Website versucht es morgen erneut.",
    "care": "Deine eigenen Zahlen bleiben unverändert. Nur die aimusiclist-Felder können einen Tag alt sein. Hält das mehrere Tage an, prüfe die Verbindung zu aimusiclist.com.",
    "like": "Das ist wie ein Morgen ohne Zeitung. Die Zeitung von gestern liegt noch auf dem Tisch."
  },
  "help.an.news": {
    "t": "Neuigkeiten von aimusiclist",
    "what": "Die 5 neuesten Nachrichten von aimusiclist.com. **Chartbericht** informiert über Ranglisten, **Mitteilung** über Änderungen am Dienst.",
    "when": "Lies sie, wenn neben dem Tab **Analyse** ein Punkt erscheint. Er bedeutet, dass es neue Nachrichten gibt.",
    "click": "Mit **Mehr lesen** öffnest du den vollständigen Text auf aimusiclist.com in einem neuen Tab. Beim Öffnen des Analyse-Tabs verschwindet der Punkt.",
    "care": "Nachrichten kommen einmal täglich zusammen mit den aimusiclist-Daten. Bilder werden hier nicht angezeigt, damit die Seite schnell bleibt.",
    "like": "Das ist das Schwarze Brett des großen Marktes mit den fünf neuesten Aushängen."
  },
  "help.an.rank.basis": {
    "t": "Welchen Rang anzeigen?",
    "what": "Wähle den Rang für das Diagramm. **aimusiclist-Rang** zeigt den Platz unter allen Songs auf aimusiclist. **Rang meiner Website** zeigt die Beliebt-Reihenfolge deiner Website. **Beide** zeichnet zwei Diagramme.",
    "when": "Nutze den aimusiclist-Rang für den Vergleich auf dem großen Markt und den Rang deiner Website für die Vorlieben deiner Besucher.",
    "click": "Das Diagramm ändert sich sofort. Die Songauswahl wird auf die drei besten Songs zurückgesetzt. Auch **Meine aufsteigenden Songs** und die Spalte **Veränderung in 7 Tagen** folgen dieser Wahl.",
    "care": "Wenn vorhanden, wird zuerst der aimusiclist-Rang verwendet. Songs, die noch nie einen Rang hatten, stehen nicht zur Auswahl.",
    "like": "Das ist die Wahl zwischen der Rangliste des großen Marktes und der deines Ladens."
  },
  "help.an.rank": {
    "t": "Rangveränderungen",
    "what": "Ein Liniendiagramm der Songränge von Tag zu Tag. Jeder Song hat eine eigene Farbe, Linienart und Punktform.",
    "when": "Damit erkennst du, ob Songs steigen, fallen oder gleich bleiben, und kannst mehrere vergleichen.",
    "click": "Wähle Songs unter der Überschrift. Fahre mit der Maus auf einen Punkt oder tippe ihn an, um Song, Datum und Rang zu sehen.",
    "care": "**Weiter oben im Diagramm ist besser** (1 steht ganz oben). Wenn Ränge weit auseinanderliegen, wird die Skala gestaucht, damit alle Linien hineinpassen. Dann sind die Abstände zwischen den Skalenstrichen nicht gleich.",
    "like": "Das ist wie eine Bergsteigerkarte: Jeder Song ist ein Kletterer, und die Spitze der Karte ist der Gipfel."
  },
  "help.an.rank.pick": {
    "t": "Songs auswählen",
    "what": "Die Songnamen unter dieser Zeile sind Schalter. Ein angehaktes Lied erhält eine Linie im Diagramm.",
    "when": "Wähle einige Songs zum Vergleich, etwa deinen neuesten und deinen erfolgreichsten.",
    "click": "Tippe auf einen Namen, um den Song hinzuzufügen oder zu entfernen. Das Diagramm ändert sich sofort. Anfangs sind deine drei bestplatzierten Songs ausgewählt.",
    "care": "Du kannst **bis zu 8 Songs** auswählen. Danach lassen sich weitere erst auswählen, wenn du einen entfernst. Die Auswahl wird nicht gespeichert und beim Wechsel der Rangart zurückgesetzt.",
    "like": "Das ist wie die Wahl, welche Bergsteiger du auf der Karte verfolgen möchtest."
  },
  "help.an.rank.gap": {
    "t": "Unterbrechungen einer Linie",
    "what": "Eine Lücke bedeutet, dass der Song an diesem Tag keinen Rang hatte.",
    "when": "Lies das, wenn eine Linie aufhört und später wieder beginnt.",
    "care": "Das ist normal. Einen Songrang gibt es nicht, wenn in den letzten 7 Tagen niemand den Song abgespielt hat oder die Tageszahlen fehlten. Ein einzelner Punkt ohne Linie bedeutet, dass nur ein Tag einen Rang hatte.",
    "like": "Das ist wie ein Bergsteiger, der den Weg verlässt und später zurückkehrt."
  },
  "help.an.sort": {
    "t": "Sortieren",
    "what": "Wähle die Tabellenreihenfolge: **Meiste Wiedergaben**, **Hörzeit**, **Aufsteiger** (größter Rangsprung diese Woche) oder **Neueste** (jüngster Upload zuerst).",
    "when": "Mit Aufsteiger findest du Songs, die du jetzt teilen könntest. Mit Neueste siehst du die Entwicklung neuer Songs.",
    "click": "Die Tabelle wird sofort neu sortiert. Nichts wird gespeichert.",
    "care": "Songs mit gleichem Wert werden nach Titel sortiert. Bei **Aufsteiger** kommen neu platzierte Songs (NEW) hinter Songs mit einer echten Veränderung. Songs ohne Rang stehen zuletzt.",
    "like": "Das ist wie das Ordnen von Platten nach Verkäufen, Spieldauer, Trend oder Eingangsdatum."
  },
  "help.an.table": {
    "t": "Meine Songs im Überblick",
    "what": "Eine Tabelle deiner Songs mit Wiedergaben, Hörzeit, aimusiclist-Rang, Veränderung in 7 Tagen und Upload-Datum.",
    "when": "Hier findest du besonders erfolgreiche Songs und solche, die gerade anfangen zu steigen.",
    "click": "Mit den Sortierschaltflächen neben dem Titel änderst du die Reihenfolge. Bis zu 200 Songs werden gezeigt.",
    "care": "Aufgelistet werden nur Songs mit Audiodatei. Auf kleinen Handys wird die Spalte **Hochgeladen** ausgeblendet, um Platz zu sparen.",
    "like": "Das ist die vollständige Preisliste aller Platten in deinem Ladenregal."
  },
  "help.an.own_off": {
    "t": "Wiedergaben auf meiner Website werden nicht gezählt",
    "what": "Deine Website kann ihre eigenen Wiedergaben noch nicht zählen. Deshalb zeigt die Spalte **Wiedergaben** stattdessen aimusiclist-Wiedergaben der letzten 7 Tage.",
    "when": "Dieser Hinweis erscheint automatisch.",
    "click": "Du musst nichts anklicken. Wenn du die Wiedergabezählung aktivierst (siehe Hinweise unter **Statistiken**), zeigt die Spalte deine eigenen Wiedergaben.",
    "care": "In diesem Fall folgt die Wiedergabespalte nicht den Zeitraum-Schaltflächen. Sie zeigt immer die letzten 7 Tage.",
    "like": "Dein Laden hat keinen Zähler an der Tür. Deshalb verwendest du vorerst die Zahlen des großen Marktes."
  },
  "help.an.col.plays": {
    "t": "Wiedergaben",
    "what": "So oft wurde der Song im gewählten Zeitraum auf deiner Website abgespielt.",
    "when": "Damit findest du deine meistgehörten Songs.",
    "care": "Mehr ist besser. Wiedergaben über aimusiclist sind hier nicht enthalten. – bedeutet, dass für diesen Song keine Zahl vorhanden ist.",
    "like": "Das zeigt, wie oft diese Platte im Laden abgespielt wurde."
  },
  "help.an.col.time": {
    "t": "Hörzeit",
    "what": "Die ungefähre Gesamtdauer, in der Menschen diesen Song gehört haben. Sie wird als **Wiedergaben × Songlänge** berechnet.",
    "when": "Damit vergleichst du kurze und lange Songs etwas gerechter.",
    "care": "Dies ist eine **Schätzung**. Deine Website weiß nicht, ob jemand mitten im Song aufgehört hat. Die wirkliche Hörzeit kann kürzer sein. Ohne gespeicherte Songlänge erscheint –.",
    "like": "Das ist wie die geschätzte Laufzeit des Plattenspielers: Anzahl der Abspielvorgänge mal Dauer einer Plattenseite."
  },
  "help.an.col.rank": {
    "t": "aimusiclist-Rang",
    "what": "Der neueste Platz des Songs unter allen Songs auf aimusiclist.",
    "when": "Damit erkennst du, welcher deiner Songs auf dem großen Markt am besten abschneidet.",
    "care": "Eine kleinere Zahl ist besser. Der Rang ändert sich einmal pro Woche (am Freitag). – bedeutet noch keinen Rang. Das ist normal, wenn diese Woche niemand den Song gehört hat.",
    "like": "Das ist die Nummer deiner Platte in der vollständigen Liste des großen Marktes."
  },
  "help.an.col.rise": {
    "t": "Veränderung in 7 Tagen",
    "what": "Um wie viele Plätze sich der Rang des Songs gegenüber vor 7 Tagen verändert hat.",
    "when": "Damit erkennst du Songs, die gerade anfangen zu steigen.",
    "click": "Du musst nichts anklicken. ▲ bedeutet um diese Zahl gestiegen, ▼ gefallen, – unverändert. **NEW** bedeutet, dass der Song vor 7 Tagen noch keinen Rang hatte.",
    "care": "▲ ist gut. Verwendet wird die Rangart, die du unter **Rangveränderungen** gewählt hast (aimusiclist oder meine Website). Fehlt ein Tag, wird der nächste der drei Tage davor verwendet.",
    "like": "Das ist wie das Zählen, wie viele Schritte ein Bergsteiger diese Woche nach oben gekommen ist."
  },
  "help.an.col.uploaded": {
    "t": "Hochgeladen",
    "what": "Das Datum, an dem du den Song auf deine Website hochgeladen hast.",
    "when": "Vergleiche damit neue und ältere Songs.",
    "care": "Auf kleinen Handys ist die Spalte ausgeblendet. Drehe das Handy quer oder nutze einen Computer, um sie zu sehen.",
    "like": "Das ist das Datum, das beim Eingang einer Platte auf die Kiste gestempelt wird."
  },
  "help.an.mine": {
    "t": "Meine aufsteigenden Songs",
    "what": "Bis zu 5 deiner Songs, deren Rang in dieser Woche am stärksten gestiegen ist. Dazu gibt es eine kleine Linie für die letzten 14 Tage.",
    "when": "Damit wählst du aus, welchen Song du jetzt teilen könntest. Ein bereits steigender Song kann durch etwas Unterstützung noch schneller wachsen.",
    "click": "Du musst nichts anklicken. Jede Karte zeigt die gewonnenen Plätze und den Rang von vor 7 Tagen bis heute.",
    "care": "Es zählen immer die **letzten 7 Tage**. Die Liste folgt der Rangart, die du unter **Rangveränderungen** gewählt hast und die unter dem Titel genannt wird. Nur Songs mit einem echten Aufstieg werden gezeigt.",
    "like": "Das ist die Ecke „Diese Woche besonders gefragt“ in deinem Laden."
  },
  "help.an.aml.genre": {
    "t": "Genre",
    "what": "Wähle ein Genre, um nur aufsteigende Songs dieses Genres zu sehen. **Alle Genres** zeigt die ganze Liste.",
    "when": "Wähle dein eigenes Genre, um zu sehen, mit welchen Songs du konkurrierst.",
    "click": "Die Liste ändert sich sofort. Nichts wird gespeichert.",
    "care": "Es erscheinen nur Genres, in denen es heute aufsteigende Songs gibt.",
    "like": "Das ist wie ein Rundgang nur durch die R&B-Abteilung des großen Marktes."
  },
  "help.an.aml": {
    "t": "Aufsteiger auf aimusiclist",
    "what": "Songs aller Künstler auf aimusiclist, die gerade schnell steigen. Deine Songs tragen die Markierung **Mein Song**.",
    "when": "Damit siehst du, welche Musik gerade beliebt ist, und entdeckst andere Künstler als Anregung.",
    "click": "Klicke auf einen Titel, um die Songseite auf aimusiclist in einem neuen Tab zu öffnen. Dort kannst du ihn anhören. In dieser Ansicht wird nichts abgespielt.",
    "care": "Diese Liste kommt einmal täglich mit den aimusiclist-Daten. ▲ zeigt die gewonnenen Plätze, **NEW** einen Neueinstieg. Die Hörerzahl zeigt, wie viele Menschen zugehört haben.",
    "like": "Das ist wie ein Rundgang auf dem großen Markt, bei dem du schaust, vor welchen Ständen sich heute lange Schlangen bilden."
  },
  "help.an.s1": {
    "t": "Start neuer Songs",
    "what": "Ein Diagramm, das zeigt, wie sich die Wiedergaben auf deiner Website in den ersten 7 Tagen nach dem Hochladen ansammeln. Bis zu 6 deiner neuesten Songs erscheinen.",
    "when": "Vergleiche den Start eines neuen Songs mit früheren Songs. Ist er besser angelaufen?",
    "click": "Zeige mit der Maus auf einen Punkt oder tippe ihn an, um Song, Tag und gesamte Wiedergaben zu sehen. Die Liste unter dem Diagramm erklärt die Linien.",
    "care": "Nur Songs, die **nach Beginn der Aufzeichnung** hochgeladen wurden, erscheinen. Wenn deine Website eigene Wiedergaben nicht zählen kann, bleibt die Karte leer.",
    "like": "Das ist wie ein Rennen, bei dem jede neue Platte bei null startet und du schaust, wer in der ersten Woche am weitesten kommt."
  },
  "help.an.s2": {
    "t": "Abstand zu den Top 100",
    "what": "Zeigt für bis zu 5 deiner Songs ungefähr an, wie weit sie von den Top 100 auf aimusiclist entfernt sind.",
    "when": "Nutze das für ein Ziel wie „diese Woche ungefähr 20 zusätzliche Hörer“.",
    "click": "Du musst nichts anklicken. Jede Zeile sagt, ob der Song bereits in den Top 100 ist, wie viele Hörer ungefähr fehlen oder ob er nahe dran sein könnte.",
    "care": "Das ist eine **Schätzung**, kein Versprechen. Die echte Rangliste prüft weitere Dinge; ein Song kann knapp davor sein und trotzdem nicht hineinkommen. Sind die Top 100 noch nicht voll, können Songs mit erfüllter Aufnahmebedingung hineinkommen.",
    "like": "Das ist wie ein Schild am Bergweg: „Noch etwa 200 Schritte bis zum Gipfel“."
  },
  "help.an.s2.note": {
    "t": "Warum es eine Schätzung ist",
    "what": "aimusiclist teilt deiner Website die genaue Hörerzahl nicht mit. Deshalb schätzt diese Karte anhand der **gültigen Wiedergaben** auf aimusiclist in den letzten 7 Tagen.",
    "when": "Lies das, wenn die angezeigten Zahlen seltsam wirken.",
    "care": "aimusiclist zählt **eine Wiedergabe pro Person und Tag**. Die tatsächliche Zahl unterschiedlicher Hörer kann deshalb kleiner als die Wiedergabezahl sein. Betrachte das Ergebnis nur als grobe Orientierung.",
    "like": "Das ist wie das Schätzen von Besuchern anhand ihrer Fußspuren. Manche Menschen sind zweimal vorbeigekommen."
  },
  "help.an.s3": {
    "t": "Likes und Playlist-Aufnahmen",
    "what": "Zeigt für jeden Tag, wie viele Likes und Playlist-Aufnahmen deine Songs auf aimusiclist bekommen haben und welche Songs die meisten erhielten.",
    "when": "Damit erkennst du Songs, die Menschen wirklich mögen, statt sie nur einmal zu hören.",
    "click": "Zeige mit der Maus auf einen Balken oder tippe ihn an, um Datum und Zahl zu sehen.",
    "care": "Mehr ist besser. Angezeigt werden höchstens die letzten **90 Tage**, auch bei **Alle**. Die Zahlen kommen einmal täglich von aimusiclist.",
    "like": "Das ist wie das Zählen der Herzen und Mitnahme-Aufkleber an deinem Stand auf dem großen Markt."
  },
  "help.an.s3.likes": {
    "t": "Likes auf aimusiclist",
    "what": "Jeder Balken zeigt, wie viele Likes alle deine Songs an einem bestimmten Tag auf aimusiclist erhalten haben.",
    "when": "Prüfe, ob nach einer Veröffentlichung oder dem Teilen eines Songs mehr Likes kommen.",
    "care": "Mehr ist besser. Hier zählen nur Likes auf aimusiclist. Die Likes deiner eigenen Website findest du unter **Statistiken**.",
    "like": "Das ist die tägliche Zahl der Herzen auf der Tafel deines Marktstandes."
  },
  "help.an.s3.adds": {
    "t": "Zu Playlists hinzugefügt",
    "what": "Jeder Balken zeigt, wie oft Menschen deine Songs an diesem Tag zu ihren Playlists auf aimusiclist hinzugefügt haben.",
    "when": "Daran erkennst du, ob Menschen deine Songs behalten und später erneut hören möchten.",
    "care": "Mehr ist besser. Eine Playlist-Aufnahme ist eines der stärksten Zeichen dafür, dass jemand einen Song mag.",
    "like": "Das ist wie die tägliche Zahl der Gäste, die deine Platte kaufen und mit nach Hause nehmen."
  },
  "help.an.s3.top": {
    "t": "Am meisten geliked und hinzugefügt",
    "what": "Bis zu 5 deiner Songs mit den meisten Likes (♥) und Playlist-Aufnahmen (+) auf aimusiclist in den letzten 7 Tagen.",
    "when": "Nutze das, um einen Song für deinen nächsten Beitrag auszuwählen oder an den Anfang eines Albums zu stellen.",
    "care": "Es zählen immer die **letzten 7 Tage**. Sortiert wird nach der Summe aus Likes und Playlist-Aufnahmen.",
    "like": "Das ist das Regal „Lieblinge der Fans“ in deinem Laden."
  },
  "help.an.s4": {
    "t": "Mein Platz in meinem Genre",
    "what": "Zeigt für bis zu 6 deiner Songs den Platz in der aimusiclist-Rangliste ihres Genres und ihren Spitzen-Prozentanteil unter den Songs.",
    "when": "Damit erkennst du, wie stark ein Song im Vergleich zu Musik desselben Stils ist.",
    "click": "Du musst nichts anklicken. **unter den Top 20** erscheint, wenn ein Song zu den 20 besten seines Genres gehört.",
    "care": "Ein kleinerer Rang und ein kleinerer Prozentwert sind besser (Top 1 % ist ausgezeichnet). Ist die Genregröße unbekannt, wird der Prozentwert unter allen Songs auf aimusiclist berechnet. Bei noch nicht platzierten Songs steht ein entsprechender Hinweis.",
    "like": "Das ist, als würdest du deinen Platz im R&B-Regal des großen Marktes kennen, statt nur den Platz auf dem gesamten Markt."
  }
});
