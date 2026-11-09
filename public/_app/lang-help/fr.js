// Textes d’aide — Français (3-26). Administration du site personnel.
// Garder les clés, variables {…}, **emphases**, retours à la ligne et boutons [[…]].
AMLHelp.add('fr', {
  "_ui": {
    "what": "Qu’est-ce que c’est ?",
    "when": "Quand l’utiliser ?",
    "click": "Que se passe-t-il si j’appuie ?",
    "care": "Attention",
    "like": "Pour mieux comprendre",
    "close": "Fermer"
  },
  "help.top.lang": {
    "t": "Langue",
    "what": "Choisissez la langue de cette page d’administration. La liste contient toutes les langues proposées par le programme.",
    "when": "Utilisez cette option si les textes sont difficiles à lire ou si vous voulez voir votre site dans une autre langue.",
    "click": "La page change immédiatement. Votre choix est mémorisé seulement dans ce navigateur ; un autre ordinateur ou téléphone peut afficher une autre langue.",
    "care": "Cela ne change pas la langue principale du site pour les visiteurs. Elle se règle avec **Langue du site** dans l’onglet Informations du site. Si vous ouvrez votre site dans ce même navigateur, il utilisera aussi la langue choisie ici.",
    "like": "C’est comme choisir la langue des étiquettes dans l’arrière-boutique : l’enseigne extérieure ne change pas."
  },
  "help.setup.title": {
    "t": "Créer le compte administrateur",
    "what": "C’est le tout premier écran après l’installation du site. Vous y créez le compte unique qui sert à gérer votre site, avec une adresse e-mail, un mot de passe et une clé de suivi d’utilisation Cloudflare.",
    "when": "Cet écran apparaît une fois après l’installation. Il revient uniquement si vous suivez la procédure en cas de mot de passe oublié.",
    "click": "Ceci est un titre, pas un bouton. Remplissez les champs puis cliquez sur [[Créer le compte administrateur]].",
    "care": "Après l’installation, attendez environ une minute : Cloudflare prépare le stockage de vos chansons. En cas d’erreur, patientez encore une minute et réessayez.\nLe nom d’un chanteur ou groupe célèbre ne peut pas servir de nom de site.",
    "like": "C’est comme recevoir la seule clé d’une nouvelle boutique le jour de son ouverture."
  },
  "help.setup.legacy": {
    "t": "Ancien mot de passe administrateur (AML_ADMIN_TOKEN)",
    "what": "Ce champ apparaît uniquement sur les sites installés avec l’ancienne méthode, qui enregistrait le mot de passe administrateur dans les réglages Cloudflare.",
    "when": "Saisissez l’ancien mot de passe administrateur. Vous n’en aurez besoin qu’une fois.",
    "click": "Rien ne se passe pendant la saisie. La vérification a lieu quand vous cliquez sur [[Créer le compte administrateur]].",
    "care": "Ce mot de passe prouve que le site vous appartient, pour éviter qu’une autre personne ne le récupère. S’il est incorrect, le compte n’est pas créé. Retrouvez sa valeur dans les réglages Cloudflare de ce site.",
    "like": "C’est comme montrer une fois l’ancienne clé de la boutique pour obtenir la nouvelle."
  },
  "help.setup.email": {
    "t": "Adresse e-mail",
    "what": "C’est l’adresse utilisée pour vous connecter. Elle ne s’affiche jamais sur votre site.",
    "when": "Choisissez une adresse que vous consultez souvent. Celle de votre compte Cloudflare sera facile à retenir.",
    "click": "Rien n’est encore enregistré. L’adresse sera enregistrée quand vous cliquerez sur [[Créer le compte administrateur]].",
    "care": "L’adresse doit avoir la forme d’un véritable e-mail (name@example.com). aimusiclist.com la reçoit aussi comme contact privé de votre site. Vous pourrez la modifier plus tard dans Informations du site.",
    "like": "C’est comme écrire votre nom sur le porte-clés de la boutique."
  },
  "help.setup.password": {
    "t": "Mot de passe (6 caractères ou plus)",
    "what": "C’est le mot de passe utilisé avec l’adresse e-mail ci-dessus pour vous connecter.",
    "when": "Choisissez-le maintenant, avec au moins 6 caractères. Plus il est long, mieux c’est.",
    "click": "Rien n’est encore enregistré. Il sera enregistré quand vous cliquerez sur [[Créer le compte administrateur]].",
    "care": "Évitez de réutiliser le mot de passe d’un autre site. Si vous l’oubliez, vous pourrez le réinitialiser sans perdre vos chansons.",
    "like": "C’est la clé de la boutique : évitez qu’elle ouvre aussi d’autres portes."
  },
  "help.setup.password2": {
    "t": "Confirmer le mot de passe",
    "what": "Saisissez encore une fois exactement le même mot de passe.",
    "when": "Juste après le premier champ de mot de passe.",
    "click": "Les deux champs sont comparés lorsque vous cliquez sur [[Créer le compte administrateur]].",
    "care": "S’ils sont différents, un message apparaît et le compte n’est pas créé. Retapez simplement les deux.",
    "like": "C’est comme essayer la nouvelle clé deux fois pour vérifier qu’elle fonctionne."
  },
  "help.setup.token": {
    "t": "Clé de suivi d’utilisation Cloudflare (obligatoire, lecture seule)",
    "what": "C’est une clé créée sur Cloudflare. Elle permet à cette page d’administration d’afficher la part du quota gratuit de Cloudflare utilisée par votre site.",
    "when": "Créez-la avec le guide ci-dessous (environ 2 minutes), copiez-la puis collez-la ici.",
    "click": "Quand vous arrêtez de saisir, la clé est vérifiée automatiquement. Un ✓ avec le nom de votre compte Cloudflare apparaît, ou un ✗ avec l’erreur.",
    "care": "Cette clé permet uniquement de lire les chiffres d’utilisation et le nom de votre compte. Elle ne peut rien modifier ni supprimer. Cloudflare ne l’affiche qu’une fois : collez-la aussitôt. Les deux autorisations sont nécessaires (Account Analytics · Read et Account Settings · Read).",
    "like": "C’est une clé qui ouvre uniquement le boîtier du compteur électrique, jamais la boutique."
  },
  "help.setup.account": {
    "t": "Compte Cloudflare",
    "what": "Cette liste apparaît si votre clé de suivi d’utilisation donne accès à plusieurs comptes Cloudflare.",
    "when": "Choisissez le compte dans lequel ce site est installé.",
    "click": "La clé est aussitôt vérifiée à nouveau pour le compte choisi. Un ✓ signifie que tout va bien.",
    "care": "Si vous choisissez le mauvais compte, les barres d’utilisation montreront les chiffres d’un autre compte ou ne se chargeront pas.",
    "like": "C’est comme posséder les clés de plusieurs immeubles et montrer celui où se trouve votre boutique."
  },
  "help.setup.account_id": {
    "t": "Cloudflare Account ID",
    "what": "C’est le numéro de votre compte Cloudflare : 32 caractères composés de chiffres de 0 à 9 et de lettres de a à f.",
    "when": "Ce champ apparaît seulement si la clé ne peut pas retrouver votre compte toute seule. Cela se produit si l’autorisation Account Settings · Read manque.",
    "click": "Quand les 32 caractères sont saisis, la clé est automatiquement vérifiée de nouveau.",
    "care": "Retrouvez-le sur Cloudflare : Workers & Pages → Account Details → Account ID (bouton de copie). Vous pouvez aussi recréer la clé avec le bouton du guide. Les deux autorisations seront alors incluses et ce champ ne sera plus nécessaire.",
    "like": "C’est comme donner le numéro de votre maison au releveur de compteur quand le panneau de la rue manque."
  },
  "help.setup.token_guide": {
    "t": "Créer la clé de suivi d’utilisation (2 minutes)",
    "what": "Cinq petites étapes expliquent comment créer la clé de suivi d’utilisation sur Cloudflare.",
    "when": "Consultez-les pendant la création. Cliquez sur le titre pour ouvrir ou fermer les explications.",
    "click": "Ouvrir ou fermer le guide ne change rien. La première étape contient un bouton qui ouvre Cloudflare.",
    "care": "Les noms des écrans Cloudflare peuvent changer un peu. Choisissez le nom le plus proche. Sur Cloudflare, cliquez sur [[Continue to summary]], puis [[Create Token]], puis [[Copy]].",
    "like": "C’est comme la petite notice illustrée pour monter un meuble."
  },
  "help.setup.submit": {
    "t": "Créer le compte administrateur",
    "what": "Crée votre compte administrateur avec l’adresse e-mail, le mot de passe et la clé de suivi d’utilisation saisis plus haut.",
    "when": "Cliquez ici quand tous les champs sont remplis et que la clé affiche ✓.",
    "click": "En cas d’erreur, un message apparaît à côté du bouton et rien n’est créé. Si tout va bien, vous êtes connecté et la page d’administration s’ouvre. Votre site commence aussi à se relier automatiquement à aimusiclist.com.",
    "care": "Il n’y a qu’un seul compte administrateur par site. Pour le recréer, il faut suivre la procédure de mot de passe oublié. Vos chansons et albums sont conservés.",
    "like": "C’est comme couper le ruban d’inauguration : la boutique est à vous et ses portes s’ouvrent."
  },
  "help.login.title": {
    "t": "Connexion",
    "what": "C’est l’accès à votre page d’administration. Seul le propriétaire du site peut y entrer avec son e-mail et son mot de passe.",
    "when": "Vous voyez cet écran si vous n’êtes pas connecté dans ce navigateur ou si la connexion a expiré.",
    "click": "Ceci est un titre, pas un bouton. Remplissez les champs puis cliquez sur [[Connexion]].",
    "care": "La connexion reste valable 30 jours sur un navigateur. Si vous changez de mot de passe, tous vos appareils sont déconnectés.",
    "like": "C’est la porte arrière verrouillée de votre boutique. La porte avant (votre site) reste ouverte aux visiteurs."
  },
  "help.login.email": {
    "t": "E-mail",
    "what": "L'adresse e-mail que vous avez choisie lors de la création de votre compte administrateur.",
    "when": "Saisissez-le à chaque fois que vous vous connectez.",
    "click": "Rien ne se passe tant que vous n'appuyez pas sur [[Se connecter]].",
    "care": "La taille des caractères (majuscules ou minuscules) n'a pas d'importance. Sur un site meshmelo, utilisez l'adresse e-mail de votre compte meshmelo.",
    "like": "C'est comme dire son nom à la porte de derrière avant de montrer la clé."
  },
  "help.login.password": {
    "t": "Mot de passe",
    "what": "Le mot de passe de votre compte administrateur.",
    "when": "Saisissez-le à chaque fois que vous vous connectez.",
    "click": "Rien ne se passe tant que vous n'appuyez pas sur [[Se connecter]].",
    "care": "Après 5 tentatives infructueuses consécutives depuis le même endroit, la connexion est bloquée pendant 15 minutes. Le message indique le nombre de tentatives restantes.",
    "like": "C'est la clé elle-même. Si vous essayez trop souvent la mauvaise clé, la serrure se bloque temporairement."
  },
  "help.login.submit": {
    "t": "Se connecter",
    "what": "Vérifie votre adresse e-mail et votre mot de passe, puis ouvre la page d'administration.",
    "when": "Cliquez dessus après avoir rempli les deux champs. Le lien [[Voir le site]] situé à côté ouvre votre site en tant que visiteur.",
    "click": "Si leurs informations sont correctes, la page d'administration s'ouvre et la session reste active pendant 30 jours. Dans le cas contraire, un message rouge s'affiche en bas de page.",
    "care": "Se connecter ici ne vous connecte pas sur vos autres appareils. Chaque navigateur effectue une seule connexion.",
    "like": "C'est comme tourner la clé et entrer dans l'arrière-boutique."
  },
  "help.login.forgot": {
    "t": "Mot de passe oublié ?",
    "what": "Étapes à suivre pour créer un nouvel e-mail et un nouveau mot de passe lorsque vous ne vous en souvenez plus.",
    "when": "Utilisez cette fonction uniquement lorsque vous ne parvenez vraiment pas à vous connecter. Cliquez sur le titre pour afficher les étapes.",
    "click": "L'ouvrir ne change rien. Vous suivez les étapes vous-même. Sur un site Cloudflare, vous supprimez uniquement les informations d'administrateur de votre espace de stockage de morceaux (R2), puis l'écran [[Créer un administrateur]] réapparaît.",
    "care": "Vos chansons, albums et votre connexion à aimusiclist.com sont conservés. Supprimez uniquement l'élément nommé « steps », rien d'autre. Sur la version PHP, créez un fichier vide sur votre hébergement. Sur meshmelo, réinitialisez-le depuis votre compte meshmelo.",
    "like": "C'est comme appeler un serrurier pour une nouvelle clé. Le magasin et tout ce qui se trouve sur les étagères restent inchangés."
  },
  "help.top.mm_acct": {
    "t": "Mon compte Meshmelo",
    "what": "Un lien vers votre page de compte meshmelo. Vous ne le verrez que sur les sites hébergés par meshmelo.",
    "when": "Rendez-vous sur cette page pour vous connecter et saisir votre mot de passe, accéder au stockage de vos chansons, aux informations d'utilisation, à votre propre domaine ou supprimer l'intégralité du site.",
    "click": "Votre compte meshmelo s'ouvre dans un nouvel onglet. Cette page reste ouverte.",
    "care": "Les chansons, les albums, les menus, les thèmes et les statistiques se trouvent ici, et non là. Vous ne savez pas quelle page utiliser ? Cliquez sur le point d'interrogation à côté de ce lien.",
    "like": "Il s'agit du bureau qui gère tous vos magasins. Cette page d'administration correspond au compte d'un seul magasin."
  },
  "help.top.view_site": {
    "t": "Voir le site",
    "what": "Ouvre votre propre site, la page que vos visiteurs voient.",
    "when": "Utilisez-le après une modification pour vérifier son aspect.",
    "click": "Votre site s'ouvre dans un nouvel onglet. Cette page d'administration reste ouverte.",
    "care": "La plupart des modifications s'affichent en une trentaine de secondes. Étant donné que vous êtes connecté, certaines informations que vous seul pouvez voir peuvent également apparaître, comme le nombre de lectures de chaque morceau.",
    "like": "C'est comme sortir pour regarder sa vitrine comme les gens la voient dans la rue."
  },
  "help.top.logout": {
    "t": "Déconnexion",
    "what": "Met fin à votre session sur ce navigateur.",
    "when": "Utilisez-le sur un ordinateur partagé ou emprunté, ou lorsque vous avez terminé.",
    "click": "Vous retournez immédiatement à l'écran de connexion. Vos chansons et vos paramètres restent inchangés.",
    "care": "Cette action déconnecte uniquement ce navigateur. Les autres appareils restent connectés. Pour vous déconnecter partout, modifiez votre mot de passe dans l'onglet « Informations sur le site ».",
    "like": "C'est comme verrouiller la porte de derrière en partant. Vos autres clés fonctionnent toujours."
  },
  "help.top.version": {
    "t": "Nouvelle version",
    "what": "Une ligne s'affiche lorsqu'une nouvelle version de ce programme est disponible. Elle indique votre version actuelle et la plus récente.",
    "when": "Dès que vous le voyez, prévoyez de mettre à jour prochainement. La vérification est effectuée une fois par jour.",
    "click": "[[Comment mettre à jour]] ouvre le guide de mise à jour. [[Nouveautés]] affiche les modifications apportées. Rien ne changera tant que vous n'aurez pas effectué la mise à jour.",
    "care": "La mise à jour n'est jamais forcée. Si la ligne est rouge, votre version est antérieure à celles prises en charge par aimusiclist.com ; veuillez donc effectuer la mise à jour prochainement. Vos morceaux et paramètres seront conservés. Sur la version PHP, un bouton de mise à jour se trouve juste ici.",
    "like": "C'est comme un avis vous informant que de nouvelles étagères, de meilleure qualité, sont prêtes pour votre magasin."
  },
  "help.top.aml": {
    "t": "connexion aimusiclist.com",
    "what": "Une seule ligne indique si votre site est lié à aimusiclist.com. Vos chansons publiques ne pourront y apparaître et y être classées que si votre site est lié.",
    "when": "Vérifiez-le après l'installation, et chaque fois que vos chansons n'apparaissent pas sur aimusiclist.com.",
    "click": "Il s'agit simplement d'un statut. ✓ connecté · … connexion en cours · ✗ non connecté, avec la raison et la prochaine tentative automatique.",
    "care": "Un nouveau site se connecte automatiquement. En cas d'échec, il réessaie toutes les 10 minutes, jusqu'à 20 fois par jour. Pour certaines erreurs, il cesse les tentatives ; utilisez alors [[Réessayer maintenant]] après avoir corrigé le problème. Sur un site meshmelo en pause, cette ligne indique que le site est en pause.",
    "like": "C'est le chemin qui mène de votre boutique au grand marché. Lorsque ce chemin est ouvert, vos disques arrivent sur le marché."
  },
  "help.top.lang_missing": {
    "t": "Langue de la chanson manquante",
    "what": "Un message indique que certaines chansons n'ont pas encore de langue définie. Il s'agit généralement de chansons plus anciennes, mises en ligne avant l'existence de ce paramètre.",
    "when": "Corrigez ça dès que vous avez une minute. Ça aide les utilisateurs d'aimusiclist.com à trouver des chansons dans leur langue.",
    "click": "Ceci n'est qu'une notification. Appuyez sur [[Définir maintenant]] pour les corriger tous en une seule fois.",
    "care": "Rien n'est imposé. Tant que vous ne l'avez pas configuré, aimusiclist.com considère ces chansons comme étant dans la langue principale de votre site. La notification disparaît une fois que chaque chanson a une langue définie.",
    "like": "C'est comme si certains disques de votre magasin n'avaient plus la petite étiquette indiquant la langue des chansons."
  },
  "help.top.pubmin_note": {
    "t": "Pas assez de chansons publiques",
    "what": "Un message vous informe que le nombre de chansons publiées sur aimusiclist.com est inférieur au nombre requis. Le règlement exige au moins 10 chansons publiques (ou toutes, si vous en avez moins de 10).",
    "when": "Cela ne s'affiche que lorsque votre site est en dessous de ce nombre, par exemple après la suppression de chansons.",
    "click": "Ceci n'est qu'un avertissement. Appuyez sur [[Choisir des chansons]] pour corriger le problème.",
    "care": "Rien n'est modifié pour le moment. Mais tant que vous n'aurez pas résolu le problème, vous ne pourrez pas rendre davantage de chansons privées. Vous choisissez les chansons publiques et vous pouvez supprimer celles que vous ne souhaitez pas partager.",
    "like": "Le grand marché exige que chaque magasin expose au moins 10 disques dans sa vitrine."
  },
  "help.top.profile_note": {
    "t": "Ajouter une photo de profil",
    "what": "Une astuce qui s'affiche lorsque vous avez des chansons mais pas encore de photo de profil. Cette photo apparaît également à côté de vos chansons sur aimusiclist.com.",
    "when": "Ajoutez-en un dès que possible. Un visage ou un logo facilite la mémorisation de vos chansons.",
    "click": "Ceci n'est qu'une astuce. Appuyez sur [[Ajouter une photo]] pour choisir une image.",
    "care": "Rien n'est obligatoire. Le pourboire disparaît une fois la photo de profil enregistrée.",
    "like": "C'est comme mettre sa photo sur la porte du magasin, pour que les gens sachent à qui appartient le magasin."
  },
  "help.top.genre_sample": {
    "t": "Liste de genres intégrée",
    "what": "Un message indique que la liste des genres n'a pas pu être chargée depuis aimusiclist.com ; la liste intégrée à ce programme est donc utilisée pour le moment.",
    "when": "Vous n'avez rien à faire. Le problème disparaît généralement lors de votre prochaine ouverture de la page d'administration.",
    "click": "Ceci n'est qu'un avis.",
    "care": "La liste intégrée peut ne pas inclure les genres les plus récents. Si vous en avez besoin, veuillez patienter et recharger la page ultérieurement. Les genres que vous avez déjà définis pour les morceaux et les menus restent inchangés.",
    "like": "C'est comme utiliser le catalogue imprimé de l'année dernière parce que le nouveau catalogue du marché n'est pas encore arrivé."
  },
  "help.setup.token_open": {
    "t": "Créez-le sur Cloudflare",
    "what": "Ouvre la page de création de clés de Cloudflare dans un nouvel onglet, avec le nom et les deux lignes d'autorisation déjà remplis.",
    "when": "Appuyez dessus à la première étape du guide.",
    "click": "Cloudflare s'ouvre dans un nouvel onglet (connectez-vous si nécessaire). Cette page reste ouverte ; vous pouvez donc y revenir et coller la clé.",
    "care": "Vérifiez que les deux lignes suivantes sont présentes : « Account Analytics · Read » et « Account Settings · Read ». Si elles sont vides, ajoutez-les vous-même.",
    "like": "C'est comme un bon de commande déjà rempli. Il vous suffit de le signer."
  },
  "help.tracks.ai_tool": {
    "t": "Fabriqué avec",
    "what": "L'outil d'IA que vous avez utilisé pour créer le morceau, comme Suno, est indiqué par une petite étiquette « ✦ nom » à côté du titre.",
    "when": "Choisissez l'outil que vous avez réellement utilisé. Sur la fiche de téléchargement, il est indiqué pour chaque morceau de ce téléchargement.",
    "click": "Elle est enregistrée lorsque vous la téléchargez ou appuyez sur [[Enregistrer le morceau]]. Lors du téléchargement, ce navigateur mémorise votre choix pour la prochaine fois.",
    "care": "aimusiclist.com tient à jour la liste des outils. Si le vôtre n'y figure pas, sélectionnez « Autre » et contactez admin@aimusiclist.com. Cela n'a aucune incidence sur le classement.",
    "like": "C'est comme la mention « fabriqué en » au dos d'un disque."
  },
  "help.tracks.ai_fill": {
    "t": "Chansons sans ensemble d'outils d'IA",
    "what": "Une note indiquant le nombre de chansons pour lesquelles aucun outil d'IA n'est encore disponible. Elle apparaît uniquement lorsqu'il existe au moins une chanson dans ce cas.",
    "when": "Utilisez-le pour renseigner l'outil d'IA pour toutes ces chansons en une seule fois.",
    "click": "Il s'agit simplement d'une remarque. Choisissez un outil ci-dessous et appuyez sur [[Définir tous les outils sur cet outil]].",
    "care": "Quand chaque chanson possède un instrument, cette note disparaît d'elle-même.",
    "like": "Comme une note sur le comptoir du magasin : « 5 disques n'ont pas encore de tampon de fabricant »."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Configurez-les tous sur cet outil",
    "what": "Applique l'outil que vous avez choisi à chaque chanson qui ne dispose pas encore d'outil d'IA.",
    "when": "Utilisez-le lorsque la plupart de vos chansons ont été créées avec un seul outil, par exemple après avoir mis en ligne de nombreuses chansons plus anciennes.",
    "click": "Une fenêtre vous demandera d'abord une confirmation. Après avoir répondu « oui », l'information sera enregistrée immédiatement et le nom de l'outil (✦) apparaîtra à côté des morceaux concernés, sur votre site et sur aimusiclist.com.",
    "care": "Seules les chansons sans outil sont modifiées. Les chansons ayant déjà un outil restent inchangées. Si certaines chansons utilisaient un outil différent, corrigez-les ultérieurement dans l'outil **IA** des chansons sélectionnées ou dans les paramètres [[Modifier]] de chaque chanson.",
    "like": "C'est comme apposer la même marque de fabricant sur tous les disques qui n'en ont pas encore, et ignorer ceux qui en ont déjà une."
  },
  "help.tracks.bulk_ai": {
    "t": "Outil d'IA des chansons sélectionnées",
    "what": "Indique en une seule fois l'outil d'IA utilisé pour créer les morceaux vérifiés (par exemple Suno).",
    "when": "Utilisez-le lorsque de nombreuses chansons ont été créées avec le même outil, ou pour corriger un outil incorrect sur plusieurs chansons.",
    "click": "Le choix d'un outil n'enregistre rien. Appuyez sur [[Appliquer]] à côté pour enregistrer.",
    "care": "En sélectionnant **Non défini** et en cliquant sur [[Appliquer]], l'outil est retiré des morceaux sélectionnés. Si votre outil est manquant, sélectionnez **Autre** et contactez admin@aimusiclist.com.",
    "like": "Comme apposer la mention « fabriqué avec cet instrument » au dos de nombreux disques à la fois."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Appliquer",
    "what": "Enregistre l'outil d'IA sélectionné pour chaque morceau coché.",
    "when": "Appuyez dessus après avoir vérifié les chansons et choisi un outil.",
    "click": "La modification est enregistrée instantanément, un court message indique le nombre de titres modifiés et les vérifications sont effectuées. Le nom de l'outil (avec une petite icône ✦) affiché à côté de chaque titre change, à la fois sur votre site et sur aimusiclist.com.",
    "care": "L'ancien outil de sélection de chansons a été remplacé. Si aucune chanson n'est cochée, vous recevrez uniquement un rappel pour sélectionner vos chansons au préalable.",
    "like": "C'est à ce moment précis que le timbre est apposé sur les disques."
  },
  "help.tracks.genre_main": {
    "t": "Genre principal",
    "what": "Le genre principal de cette chanson. La liste est identique à celle du menu des genres sur aimusiclist.com.",
    "when": "Choisissez le genre qui correspond le mieux à la chanson. Il faut faire un choix.",
    "click": "L'enregistrement est sauvegardé lorsque vous appuyez sur [[Enregistrer le morceau]]. Le morceau apparaît ensuite dans le menu correspondant à ce genre sur aimusiclist.com (s'il est public).",
    "care": "L'enregistrement est impossible si aucun genre principal n'est sélectionné. Les deux cases de genre supplémentaires à côté sont destinées aux parties mixtes.",
    "like": "C'est le rayon du grand magasin où votre disque est placé, comme le rayon R&B."
  },
  "help.tracks.genre_sub": {
    "t": "Genre supplémentaire",
    "what": "Jusqu'à deux autres genres peuvent être intégrés au morceau. Par exemple, un morceau R&B avec du rap peut inclure du hip-hop.",
    "when": "Utilisez-les lorsqu'un seul genre ne suffit pas. Ils sont facultatifs.",
    "click": "Elles sont enregistrées lorsque vous appuyez sur [[Enregistrer le morceau]] (ou lors du chargement). aimusiclist.com les affiche par ordre alphabétique, selon le genre principal, à côté du titre.",
    "care": "Vous pouvez choisir n'importe quel genre, classé par catégorie principale. Si vous sélectionnez deux fois le même genre, il ne sera comptabilisé qu'une seule fois. Choisissez « — Aucun — » pour laisser une case vide.",
    "like": "Ce sont de petites notes supplémentaires sur l'étiquette du rayon, comme « avec une touche de hip-hop »."
  },
  "help.tracks.lang": {
    "t": "Langue des chansons",
    "what": "La langue des paroles de cette chanson n'est pas celle de votre écran.",
    "when": "Choisissez la langue principale des paroles. S'il n'y a pas de chant, choisissez « Instrumental (sans paroles) ».",
    "click": "Elle est enregistrée lorsque vous appuyez sur [[Enregistrer la piste]]. aimusiclist.com l'utilise pour ses classements par langue.",
    "care": "Pour les morceaux plus anciens, il peut être indiqué « non défini (langue du site) ». Dans ce cas, la langue par défaut de votre site est utilisée. Sélectionner « Instrumental » verrouille le champ de la deuxième langue.",
    "like": "Il s'agit d'une note sur le disque indiquant la langue utilisée par le chanteur."
  },
  "help.tracks.lang2": {
    "t": "Deuxième langue (facultatif)",
    "what": "Une deuxième langue utilisée dans les paroles, par exemple une chanson coréenne avec des paroles en anglais.",
    "when": "Utilisez-le uniquement si une bonne partie de la chanson est chantée dans une autre langue.",
    "click": "Elle est enregistrée lorsque vous appuyez sur [[Enregistrer la piste]]. Choisissez « — Aucun — » pour la supprimer.",
    "care": "Le choix de la langue principale du morceau reste bloqué jusqu'à ce que vous la sélectionniez, et également lorsque le morceau est en version instrumentale. Cette langue ne peut pas être la même que la langue principale.",
    "like": "Il s'agit d'une deuxième petite note sur le disque : « également un peu d'anglais »."
  },
  "help.tracks.ai_paste": {
    "t": "Coller le résultat de l'IA",
    "what": "Une zone de texte où vous collez le titre fourni par l'IA, avec ses parenthèses. Elle en déduit le genre, l'ambiance et la langue. [[Obtenir le guide]] ouvre la page expliquant comment interroger l'IA.",
    "when": "Utilisez-le lorsque le genre est difficile à déterminer, ou lorsque vos noms de fichiers ne comportent pas la partie ( ).",
    "click": "Coller seul ne change rien. Appuyez sur [[Appliquer]] à côté.",
    "care": "Il ne fait que remplir les cases. Vous pouvez toujours enregistrer avec le bouton de téléchargement ou [[Enregistrer la piste]].",
    "like": "C'est comme remettre au vendeur une note d'un expert en musique : le vendeur la recopie sur l'étiquette de l'étagère."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Appliquer",
    "what": "Ce programme lit le texte que vous avez collé et remplit les champs relatifs au genre, à la langue de la chanson et à l'ambiance.",
    "when": "Appuyez dessus après avoir collé le titre de l'IA.",
    "click": "Sur la fiche de téléchargement, tous les fichiers de la liste qui n'ont pas encore été téléchargés sont automatiquement préremplis. Sur le formulaire de modification, seul le nom de cette chanson est prérempli. Un message en bas indique les champs saisis. Aucune donnée n'est encore enregistrée.",
    "care": "Les mots inconnus sont ignorés et affichés en jaune. Si le genre principal n'est pas dans la liste, les cases de genre restent inchangées. Cochez les cases avant d'enregistrer.",
    "like": "C'est le commis qui inscrit concrètement la note de l'expert sur les étiquettes."
  },
  "help.site.ext": {
    "t": "Informations complémentaires",
    "what": "Des encadrés supplémentaires concernant votre site dans son ensemble. aimusiclist.com détermine quels encadrés sont présents et affiche ce que vous y saisissez à côté de vos chansons.",
    "when": "Cochez les cases qui vous correspondent. Chaque case est facultative ; vous pouvez donc toutes les ignorer.",
    "click": "Elle est enregistrée avec le reste de la fiche lorsque vous appuyez sur [[Enregistrer les informations du site]]. Vider une case supprime cette réponse.",
    "care": "Ce groupe n'apparaît que lorsque aimusiclist.com propose des champs pour les sites. Si un champ indique qu'une mise à jour du programme est nécessaire, vous ne pouvez pas encore le remplir. Votre réponse précédente est conservée.",
    "like": "Il s'agit du questionnaire supplémentaire que distribue le grand marché (aimusiclist.com), afin que votre stand puisse proposer quelques labels supplémentaires."
  },
  "help.tracks.ext": {
    "t": "Informations complémentaires",
    "what": "Des encadrés supplémentaires concernant la chanson, comme le BPM ou une brève description, sont disponibles. aimusiclist.com détermine quels encadrés sont présents et affiche les réponses à côté de vos chansons.",
    "when": "Remplissez les cases avec les informations que vous connaissez. Chaque case est facultative.",
    "click": "Les données sont enregistrées lors du chargement ou lorsque vous appuyez sur [[Enregistrer le morceau]]. Sur la fiche de chargement, les mêmes valeurs sont appliquées à chaque morceau. Sur le formulaire d'édition, vider un champ et enregistrer efface la valeur correspondante.",
    "care": "Si un message indique qu'une case nécessite une mise à jour, vous pourrez l'utiliser après la mise à jour de votre site. Ces cases apparaissent uniquement une fois que votre site a reçu la liste depuis aimusiclist.com.",
    "like": "Il s'agit des mentions légales en petits caractères au dos de la pochette du disque."
  },
  "help.img.editor": {
    "t": "Fenêtre d'image",
    "what": "Une petite fenêtre qui adapte votre image à la taille appropriée : image de chanson 100×100, pochette d’album 200×200 ou bannière supérieure jusqu’à 1600×400.",
    "when": "Il s'ouvre automatiquement après que vous ayez choisi une image pour une chanson, une pochette d'album ou la bannière.",
    "click": "Choisissez le format d'image, vérifiez le résultat, puis appuyez sur [[Enregistrer l'image]]. [[Annuler]] ou la touche Échap ferme la fenêtre sans modification.",
    "care": "Seule une copie réduite est téléchargée, jamais votre image originale. Chaque format a une limite de taille (50 Ko, 100 Ko ou 300 Ko) ; l’image est redimensionnée pour s’y adapter.",
    "like": "C'est un petit atelier qui découpe votre photo pour qu'elle s'adapte au cadre avant d'être accrochée au mur du magasin."
  },
  "help.img.mode_crop": {
    "t": "Recadrer (déplacer le cadre)",
    "what": "Ne conserve que la partie de l'image située à l'intérieur du cadre lumineux et coupe le reste.",
    "when": "Utilisez-le lorsque l'image est plus grande que nécessaire, ou n'a pas la bonne forme, et que vous souhaitez conserver la meilleure partie, comme un visage.",
    "click": "Un cadre lumineux apparaît sur l'image. Faites-le glisser ou utilisez les flèches directionnelles pour sélectionner la partie à conserver. La barre de taille du cadre permet de l'agrandir ou de le réduire. Le résultat change en fonction de vos déplacements.",
    "care": "Ce qui est hors cadre n'est pas conservé.",
    "like": "C'est comme découper une photo avec des ciseaux pour ne garder que la meilleure partie sur la pochette du disque."
  },
  "help.img.mode_fit": {
    "t": "Réduire l'image entière",
    "what": "Il conserve l'image dans son ensemble et la réduit au lieu de la découper.",
    "when": "Utilisez-le lorsqu'aucun élément ne doit être coupé, par exemple un logo ou une image comportant du texte.",
    "click": "Le résultat affiche l'image complète en un coup d'œil. Pour une image carrée (illustration ou pochette), les côtés vides sont remplis de la couleur moyenne de l'image. Pour une bannière, l'image conserve sa forme et s'adapte à un format de 1600 × 400 pixels.",
    "care": "Une image longue et étroite peut paraître petite dans un format carré, avec des bords colorés larges.",
    "like": "C'est comme mettre une affiche entière dans un cadre avec une bordure colorée, sans la découper."
  },
  "help.img.frame": {
    "t": "Taille du cadre",
    "what": "Une barre permettant d'agrandir ou de réduire le cadre lumineux.",
    "when": "Réduisez la taille pour zoomer sur un petit détail, comme un visage. Agrandissez-la pour conserver une plus grande partie de l'image.",
    "click": "Le cadre et le résultat changent lorsque vous faites glisser l'écran. À l'extrême droite, le cadre est aussi grand que l'image le permet.",
    "care": "Un cadre très petit sur une petite image peut paraître flou. Vérifiez le résultat avant d'enregistrer.",
    "like": "C'est comme rapprocher ou éloigner une loupe de la photo."
  },
  "help.img.result": {
    "t": "Résultat",
    "what": "Un aperçu de l'image telle qu'elle sera enregistrée.",
    "when": "Regardez-la avant d'appuyer sur [[Enregistrer l'image]].",
    "click": "Elle se met à jour automatiquement dès que vous déplacez le cadre ou changez de mode. Il ne s'agit que d'un aperçu ; rien n'est encore enregistré.",
    "care": "Les grandes images s'affichent ici légèrement plus petites, mais elles sont enregistrées en pleine résolution. L'image enregistrée peut paraître légèrement plus douce car elle est allégée.",
    "like": "C'est comme un miroir qui reflète déjà la photo dans son cadre."
  },
  "help.img.save": {
    "t": "Enregistrer l'image",
    "what": "Il réalise la photo finale et l'utilise.",
    "when": "Appuyez dessus lorsque le résultat vous semble correct.",
    "click": "L'image ou la bannière d'un morceau est enregistrée immédiatement et s'affiche sur votre site ; elle apparaît également sur aimusiclist.com si le morceau est public. La pochette de l'album est uniquement insérée dans l'encadré de l'album et enregistrée lorsque vous cliquez sur [[Enregistrer l'album]].",
    "care": "Si l'image est encore trop lourde ou si votre navigateur ne peut pas l'afficher, un message rouge apparaît. Essayez une image plus simple ou un cadre plus petit, ou utilisez Chrome, Edge ou Firefox.",
    "like": "C'est comme mettre la photo recadrée dans son cadre et l'accrocher au mur du magasin."
  },
  "help.img.crop": {
    "t": "Photo de profil",
    "what": "Une fenêtre circulaire permet d'insérer votre photo de profil. Votre photo de profil est votre visage ou votre logo, affiché en rond sur votre site et sur aimusiclist.com.",
    "when": "Elle s'ouvre automatiquement après que vous ayez choisi une photo de profil.",
    "click": "Le cercle reste au centre et vous déplacez la photo en dessous. Faites glisser la photo, utilisez la barre de zoom, la molette de la souris ou deux doigts, ou appuyez sur les touches fléchées et + / −. Appuyez sur [[Appliquer]] pour enregistrer, ou sur [[Annuler]] / Échap pour fermer sans modifier les modifications.",
    "care": "Seule la partie entourée par le cercle est utilisée. Seule une petite copie de 200×200 pixels est téléchargée, et non votre photo originale.",
    "like": "C'est comme déplacer une photo derrière une fenêtre ronde jusqu'à ce que votre visage soit pile au centre."
  },
  "help.img.crop_zoom": {
    "t": "Zoom",
    "what": "La barre (et les boutons − et +) permet d'agrandir ou de réduire la photo à l'intérieur du cercle.",
    "when": "Effectuez un zoom avant si votre visage paraît trop petit dans le cercle. Dézoomez pour en montrer davantage.",
    "click": "La taille de la photo change au centre du cercle. À l'extrême gauche, elle remplit parfaitement le cercle. À l'extrême droite, elle est quatre fois plus grande. Les aperçus ci-dessous changent également.",
    "care": "La photo ne peut pas être réduite à une taille inférieure au cercle, il n'y a donc jamais de bord vide. Un zoom important sur une petite photo peut la rendre floue.",
    "like": "C'est comme se rapprocher ou s'éloigner de la caméra."
  },
  "help.img.crop_rotate": {
    "t": "Tourner",
    "what": "Il fait pivoter la photo d'un quart de tour vers la droite.",
    "when": "Utilisez-le lorsque votre photo est posée sur le côté ou à l'envers.",
    "click": "Chaque pression fait pivoter l'appareil de 90 degrés. Appuyez quatre fois pour revenir au point de départ. La photo revient au centre après chaque rotation ; déplacez-la à nouveau si nécessaire.",
    "like": "C'est comme faire pivoter un cadre photo sur le mur jusqu'à ce qu'il soit droit."
  },
  "help.img.crop_preview": {
    "t": "Aperçu",
    "what": "Deux petits cercles qui vous montrent à quoi ressemblera réellement votre photo de profil : un grand et un tout petit.",
    "when": "Vérifiez les deux avant d'appuyer sur [[Appliquer]]. La plus petite est la taille que l'on voit souvent dans les listes.",
    "click": "Elles se modifient automatiquement lorsque vous déplacez, zoomez ou faites pivoter la photo. Rien n'est encore enregistré.",
    "care": "Si votre visage est difficile à voir dans le petit cercle, zoomez un peu.",
    "like": "C'est comme prendre du recul par rapport à l'enseigne du magasin pour voir si les gens de l'autre côté de la rue peuvent la lire."
  },
  "help.img.crop_apply": {
    "t": "Appliquer",
    "what": "Enregistre la partie à l'intérieur du cercle comme photo de profil.",
    "when": "Appuyez dessus lorsque les aperçus vous semblent corrects.",
    "click": "Elle est enregistrée immédiatement et s'affiche sur votre site. aimusiclist.com la reçoit en une ou deux minutes. La couleur de la partie supérieure de votre site est également extraite de cette photo.",
    "care": "Votre ancienne photo de profil a été remplacée. Pour la modifier à nouveau, choisissez une nouvelle photo.",
    "like": "C'est comme accrocher son nouveau portrait en vitrine."
  },
  "help.top.profile_go": {
    "t": "Ajouter une photo",
    "what": "Commence à ajouter votre photo de profil.",
    "when": "Appuyez dessus depuis le bout de la photo de profil.",
    "click": "L'onglet « Informations du site » s'ouvre et votre appareil vous invite à choisir une image. Vous la recadrez ensuite, et elle est enregistrée lors de l'application. Les visiteurs et aimusiclist.com la verront peu après.",
    "care": "Vous pouvez le modifier ou le supprimer ultérieurement dans les informations du site.",
    "like": "C'est comme confier la photo au fabricant d'enseignes."
  },
  "help.tab.tracks": {
    "t": "Pistes",
    "what": "L'endroit idéal pour vos chansons. Vous les téléchargez, vous ajustez leurs détails (titre, genres, langue, image, paroles) et vous choisissez celles qui seront publiées sur aimusiclist.com.",
    "when": "Venez ici pour ajouter de nouvelles chansons ou modifier les anciennes.",
    "click": "Appuyer sur la touche Tab permet uniquement de changer d'affichage. À l'intérieur, la plupart des modifications sont enregistrées instantanément.",
    "care": "Vous pouvez importer jusqu'à 20 chansons par envoi, de 15 Mo chacune et d'une durée de 30 secondes à 15 minutes. Chaque chanson doit avoir un genre principal et jusqu'à deux autres genres. Au moins 10 chansons doivent rester publiques (toutes si vous en avez moins). La suppression d'une chanson est irréversible.",
    "like": "C'est la réserve où l'on réceptionne les nouveaux disques, où l'on colle les étiquettes et où l'on choisit ceux qui seront exposés en vitrine."
  },
  "help.tab.albums": {
    "t": "Albums",
    "what": "L'endroit idéal pour regrouper vos chansons en albums avec un titre, une image de couverture et une courte description.",
    "when": "Venez ici si vous souhaitez présenter une série de chansons ensemble.",
    "click": "Appuyer sur l'onglet permet uniquement de changer d'affichage. Un album contenant de 6 à 35 titres audio est publié sur aimusiclist.com dès son enregistrement, ou à la date de votre choix.",
    "care": "Il est possible de créer un album de moins de 6 titres, mais celui-ci restera privé. La description est limitée à 200 caractères. Tant qu'un album est public, ses titres ne peuvent pas être rendus privés.",
    "like": "C'est comme regrouper des disques dans un coffret, chacun avec sa propre pochette."
  },
  "help.tab.skins": {
    "t": "Peaux",
    "what": "Choisissez l'apparence de votre site : couleurs, polices et mise en page. Vous pouvez utiliser un thème intégré, en installer un depuis la galerie ou importer le vôtre.",
    "when": "Venez ici lorsque vous souhaitez modifier l'apparence de votre site, ou lorsqu'un point indique qu'une nouvelle version d'un thème est disponible.",
    "click": "Appuyer sur l'onglet permet uniquement de changer d'affichage. Un nouveau thème apparaît aux visiteurs en une trentaine de secondes, et il est possible de revenir à l'ancien instantanément.",
    "care": "Les thèmes clair et sombre sont toujours disponibles, ainsi que jusqu'à 20 autres. Un thème téléchargé est un fichier de 100 Ko maximum. Changer de thème n'affecte jamais vos morceaux ni vos paramètres.",
    "like": "C'est comme repeindre son magasin et changer les étagères. Les disques, eux, restent les mêmes."
  },
  "help.tab.site": {
    "t": "Informations sur le site",
    "what": "Tout ce qui concerne votre site dans son ensemble : son nom, le nom de l’artiste, la langue principale, la description, les liens vers les réseaux sociaux, les images, les boutons pour les visiteurs, les publicités, la liste des artistes, votre identifiant et la clé d’utilisation.",
    "when": "Venez ici juste après l'installation, et chaque fois que vous souhaitez modifier la façon dont votre site vous présente.",
    "click": "Appuyer sur la touche Tab permet uniquement de changer d'affichage. Certaines cartes s'enregistrent avec leur propre bouton, et les changements s'effectuent instantanément.",
    "care": "Vous ne pouvez pas utiliser le nom d'un chanteur ou d'un groupe célèbre. Le nom du site et le nom de l'artiste apparaissent également sur aimusiclist.com. Changer votre mot de passe vous déconnecte de tous vos appareils.",
    "like": "C'est votre enseigne, votre badge et les papiers du bureau, tout dans un seul tiroir."
  },
  "help.tab.guestbook": {
    "t": "Livre d'or",
    "what": "Ici, les visiteurs peuvent vous laisser de courts messages, sur l'ensemble du site ou sur une chanson en particulier. Vous pouvez ouvrir, fermer et supprimer les messages.",
    "when": "Venez ici pour lire les messages des auditeurs ou pour supprimer un message inapproprié.",
    "click": "Appuyer sur la touche Tab permet uniquement de changer d'affichage et de charger les messages (20 par page). L'ouverture, la fermeture et la suppression enregistrent immédiatement les modifications.",
    "care": "Les noms sont limités à 20 caractères, les messages à 500 mots maximum, sans lien, et chaque personne peut envoyer jusqu'à 50 messages par jour. Les messages sont conservés jusqu'à ce que vous les supprimiez, et une fois supprimés, ils ne peuvent plus être récupérés. Fermer le livre d'or permet de conserver les messages.",
    "like": "C'est le carnet à l'entrée de votre magasin où les clients écrivent quelques mots."
  },
  "help.tab.domain": {
    "t": "Mon domaine",
    "what": "Vous y connectez votre propre adresse web (comme mymusic.com) à votre site, au lieu de la longue adresse obtenue lors de l'installation.",
    "when": "Venez ici lorsque vous aurez acheté un nom de domaine et que vous voudrez que des personnes l'utilisent.",
    "click": "Appuyer sur la touche Tab permet uniquement de changer d'affichage. Le guide détaille les étapes (environ 10 minutes). Lors de la connexion, l'adresse est d'abord vérifiée, puis la nouvelle adresse est communiquée à aimusiclist.com.",
    "care": "Les visiteurs de l'ancienne adresse sont redirigés vers la nouvelle, et les morceaux déjà dans les playlists continuent d'être lus. Sur les sites meshmelo, vous connectez un domaine à votre compte meshmelo.",
    "like": "C'est comme donner à votre magasin une adresse courte et facile à retenir."
  },
  "help.tab.stats": {
    "t": "Statistiques",
    "what": "Statistiques concernant votre site : visites et écoutes par jour, titres populaires, albums, pays d’origine des visiteurs, appareils utilisés et langues parlées. Les statistiques de votre site aimusiclist.com sont également disponibles ici.",
    "when": "Venez ici pour voir qui écoute quoi et si quelque chose que vous avez partagé a attiré des gens.",
    "click": "Appuyer sur la touche Tab permet de charger les chiffres. Ils changent une fois par jour. [[Actualiser maintenant]] affiche immédiatement les chiffres du jour, une fois par minute.",
    "care": "Vos propres visites lorsque vous êtes connecté ne sont pas comptabilisées. Les statistiques d'aimusiclist.com sont mises à jour une fois par jour, le matin. Sur certaines configurations, les visites ou les écoutes ne peuvent pas être comptabilisées ; l'onglet explique alors pourquoi et comment activer cette option.",
    "like": "Il s'agit du livre d'or et du registre des ventes du magasin, compilés pour vous."
  },
  "help.tab.analysis": {
    "t": "Analyse",
    "what": "Analyse détaillée des performances de vos morceaux sur aimusiclist.com : évolution du classement, titres en progression, lancement des nouveaux morceaux, écart avec le Top 100, mentions « J’aime », ajouts aux playlists et votre position au sein de votre genre. Retrouvez également les actualités d’aimusiclist ici.",
    "when": "Venez ici pour découvrir quelles chansons gagnent en popularité et ce que vous pourrez partager ensuite.",
    "click": "Cliquer sur l'onglet ouvre les numéros enregistrés. Ils sont collectés une fois par jour ; les consulter fréquemment ne change donc rien. Un point sur l'onglet indique la présence de nouvelles informations sur aimusiclist ; il disparaît une fois l'onglet ouvert.",
    "care": "Un site web tout neuf n'a pas grand-chose à montrer au premier abord. Les images se remplissent au fil des jours.",
    "like": "C'est comme un rapport hebdomadaire du grand marché sur la façon dont vos disques se vendent dans sa vitrine."
  },
  "help.top.mm_two_screens": {
    "t": "Vous avez deux endroits à gérer",
    "what": "Une petite fiche explicative présente vos deux espaces d'administration : la page d'administration de ce site et votre compte meshmelo. Chacun indique son adresse et sa fonction.",
    "when": "Ouvrez-le si vous ne trouvez pas un paramètre. Il s'ouvre et se ferme avec le bouton ? en haut.",
    "click": "La lecture de ce message ne change rien. Le bouton à l'intérieur ouvre votre compte meshmelo dans un nouvel onglet.",
    "care": "Cette carte est uniquement disponible sur les sites meshmelo.",
    "like": "C'est comme un panneau dans le couloir : « Comptoir du magasin par ici, bureau principal par là. »"
  },
  "help.top.php_update": {
    "t": "Mettez à jour maintenant",
    "what": "Sur la version PHP, cette commande met à jour le programme du site vers la version la plus récente.",
    "when": "Appuyez dessus lorsque la ligne de la nouvelle version apparaît et vous avez une minute.",
    "click": "Il vous est demandé de confirmer. Cela prend environ une minute, puis la page se recharge. En cas de problème, elle revient automatiquement à la version précédente.",
    "care": "Vos morceaux, paramètres et pages sont conservés. Ne fermez pas la page pendant la mise à jour. Les sites meshmelo ne possèdent pas ce bouton ; c'est meshmelo qui effectue la mise à jour.",
    "like": "C'est comme si une équipe changeait les étagères du jour au lendemain. Les disques retournent exactement à leur place."
  },
  "help.top.usage_r2_storage": {
    "t": "Stockage R2 (10 Go gratuits)",
    "what": "L'espace occupé par vos fichiers sur R2, le service de stockage de Cloudflare. Les chansons occupent la quasi-totalité de cet espace.",
    "when": "Vérifiez-le avant de télécharger beaucoup de chansons.",
    "click": "Ce n'est qu'un nombre. Il se met à jour toutes les 10 minutes.",
    "care": "Plus petit est mieux. Au-delà de 10 Go, Cloudflare facture votre compte. Si votre espace de stockage est presque plein, supprimez les morceaux dont vous n'avez pas besoin ou utilisez des fichiers plus légers (MP3 au lieu de WAV). Tout autre espace de stockage sur le même compte Cloudflare est également pris en compte.",
    "like": "Cela dépend du niveau de remplissage de votre entrepôt. Les étagères offrent environ 10 Go d'espace libre."
  },
  "help.top.usage_class_a": {
    "t": "R2 écrit ce mois-ci (1 million gratuit)",
    "what": "Combien de fois des éléments ont été enregistrés dans R2 ce mois-ci : chargements, modifications, changements et autres modifications.",
    "when": "Vérifiez-le dans un mois, après de nombreux ajouts ou de nombreuses modifications.",
    "click": "Ce n'est qu'un chiffre. Il est remis à zéro chaque mois.",
    "care": "Moins, c'est mieux. Une modification ne représente que quelques écritures, et 20 chansons téléchargées simultanément représentent environ 60 écritures ; 1 million, c'est donc beaucoup. La suppression est gratuite. Au-delà de ce seuil, Cloudflare facture votre compte.",
    "like": "Cela correspond au nombre de fois où la porte de l'entrepôt a été ouverte ce mois-ci pour y entreposer des marchandises."
  },
  "help.top.usage_class_b": {
    "t": "R2 lit ce mois-ci (10 millions gratuits)",
    "what": "Combien de fois un contenu de R2 a-t-il été consulté ce mois-ci ? La plupart des consultations proviennent de personnes qui écoutent vos chansons et visitent votre site.",
    "when": "Vérifiez-le lorsque vos chansons sont beaucoup écoutées.",
    "click": "Ce n'est qu'un chiffre. Il est remis à zéro chaque mois.",
    "care": "Un nombre croissant d'écoutes signifie que les gens écoutent, ce qui est positif, mais au-delà de 10 millions, Cloudflare facture votre compte. Si ce nombre augmente très rapidement, consultez l'onglet Statistiques pour voir d'où proviennent les écoutes.",
    "like": "C'est le nombre de fois où la porte de l'entrepôt s'est ouverte pour sortir un disque et l'écouter."
  },
  "help.top.usage_workers": {
    "t": "Demandes des travailleurs aujourd'hui (100 000 gratuits)",
    "what": "Combien de fois votre site a-t-il répondu à un visiteur aujourd'hui ? L'ouverture du site et chaque segment de musique diffusé sont comptabilisés.",
    "when": "Vérifiez-le les jours de forte affluence, par exemple après avoir partagé un lien.",
    "click": "Ce n'est qu'un nombre. Il est remis à zéro chaque jour à 00h00 UTC (09h00 heure coréenne).",
    "care": "Plus de 100 000 écoutes en une journée : le site se bloque jusqu'à la réinitialisation. C'est gratuit. Le décompte concerne l'intégralité de votre compte Cloudflare. Sur la version PHP, il comptabilise votre flux audio et la lecture des morceaux s'arrête une fois ce seuil atteint. Les sites meshmelo n'affichent pas cette barre.",
    "like": "Cela correspond au nombre de clients que le vendeur peut servir en une journée. Lorsque ce nombre est atteint, le magasin ferme jusqu'au lendemain."
  },
  "help.top.usage_disk_space": {
    "t": "Espace utilisé par les chansons et les pages de ce site",
    "what": "L'espace d'hébergement occupé par les fichiers de ce site est considérable. Les chansons en occupent la majeure partie.",
    "when": "Vérifiez-le avant un téléchargement important.",
    "click": "Il s'agit simplement d'un nombre (ou d'une barre si votre forfait impose une limite).",
    "care": "Plus la taille est petite, mieux c'est. Si vous approchez de la limite de votre forfait, supprimez les morceaux inutiles ou téléchargez des fichiers MP3 plus légers. Les autres sites hébergés sur le même serveur ne sont pas pris en compte.",
    "like": "Cela correspond à l'espace au sol occupé par vos disques dans le magasin loué."
  },
  "help.top.usage_files": {
    "t": "Fichiers (inodes)",
    "what": "Combien de fichiers ce site conserve-t-il sur votre hébergement ? Les hébergeurs limitent souvent le nombre de fichiers, et pas seulement l’espace disque.",
    "when": "Vérifiez-le si vous avez beaucoup de chansons, ou si votre hébergeur vous avertit concernant des fichiers.",
    "click": "Il s'agit simplement d'un nombre (ou d'une barre si votre forfait impose une limite).",
    "care": "Moins c'est gros, mieux c'est. Chaque chanson contient plusieurs fichiers (audio, image, paroles), donc supprimer les chansons inutilisées permet de réduire leur nombre.",
    "like": "Cela correspond au nombre de boîtes présentes dans le magasin, quelle que soit la taille de chaque boîte."
  },
  "help.top.usage_tracks": {
    "t": "Chansons",
    "what": "Combien de chansons contient ce site ?",
    "when": "Juste pour jeter un coup d'œil rapide. Cela vous permet de voir l'espace occupé en moyenne par une chanson.",
    "click": "Ce n'est qu'un chiffre. Il change lorsque vous ajoutez ou supprimez des chansons.",
    "care": "Il n'y a pas de limite pour celui-ci.",
    "like": "Il s'agit du nombre de disques dans votre magasin."
  },
  "help.top.usage_disk": {
    "t": "Utilisation de l'hébergement (ce site)",
    "what": "Sur la version PHP avec les chansons hébergées sur votre propre serveur, ceci indique ce que ce site utilise : espace, nombre de fichiers et de chansons.",
    "when": "Vérifiez-le avant de télécharger plusieurs chansons, car les forfaits d'hébergement ont des limites.",
    "click": "Ceci est un titre. Les chiffres sont relus toutes les 10 minutes. [[Actualiser]] les lit maintenant.",
    "care": "Les limites réelles de votre forfait sont indiquées dans cPanel → Statistiques. Les barres avec pourcentage ne s'affichent que si ces limites ont été définies dans les paramètres du site lors de son installation. Sinon, les chiffres sont affichés sans indication de contenu.",
    "like": "Il s'agit de la surface au mètre carré d'un local commercial loué. Le contrat du propriétaire précise la surface maximale autorisée."
  },
  "help.top.usage": {
    "t": "Utilisation gratuite de Cloudflare",
    "what": "Barres indiquant la part de l'espace gratuit de Cloudflare utilisée par votre compte : stockage, écritures et lectures ce mois-ci, et requêtes aujourd'hui.",
    "when": "Jetez-y un coup d'œil de temps en temps, et surtout lorsque de nombreuses personnes sont présentes.",
    "click": "Ceci est un titre. Les chiffres sont relus toutes les 10 minutes. [[Actualiser]] les lit maintenant.",
    "care": "Plus la valeur est petite, mieux c'est. La barre devient orange à 70 % et rouge à 90 %. Dépasser le quota gratuit de R2 entraîne des frais. Dépasser le quota de Workers bloque l'accès au site pour le reste de la journée, sans frais. Ces chiffres concernent l'ensemble de votre compte Cloudflare, et pas seulement ce site.",
    "like": "Il s'agit du compteur électrique de votre magasin. Vérifiez-le avant de recevoir la facture."
  },
  "help.top.usage_refresh": {
    "t": "Rafraîchir",
    "what": "Lit immédiatement les statistiques d'utilisation de Cloudflare, sans attendre la prochaine mise à jour de 10 minutes.",
    "when": "Appuyez dessus après un téléchargement important ou après avoir saisi une nouvelle clé d'utilisation.",
    "click": "Les barres se mettent à jour dans un instant, et l'heure à côté du titre change.",
    "care": "Les données fournies par Cloudflare peuvent accuser un léger retard, il est donc possible qu'une nouvelle lecture reste identique pendant un certain temps.",
    "like": "C'est comme aller jusqu'au compteur et relever l'heure soi-même au lieu d'attendre le releveur."
  },
  "help.top.usage_connect": {
    "t": "Connecter",
    "what": "Affiché lorsqu'aucune clé d'utilisation n'a encore été ajoutée. Cette clé permet à cette page d'afficher vos limites d'utilisation gratuite Cloudflare.",
    "when": "Appuyez dessus pour ajouter la clé. Cela prend environ 2 minutes.",
    "click": "L'onglet Informations du site s'ouvre sur la fiche **Voir l'utilisation**, prête à recevoir la clé.",
    "care": "Sans la clé, votre site reste fonctionnel, mais vous ne pouvez pas savoir si vous approchez de la limite. La clé ne permet de lire que des nombres.",
    "like": "C'est comme installer un compteur électrique. Les lumières fonctionnent sans, mais on ne peut pas voir sa consommation."
  },
  "help.top.usage_retoken": {
    "t": "Saisissez à nouveau la clé.",
    "what": "Ce message s'affiche lorsqu'une clé d'utilisation est enregistrée mais que les chiffres n'ont pas pu être lus. La raison est indiquée au-dessus.",
    "when": "Appuyez dessus si la clé a été supprimée sur Cloudflare, a expiré ou s'il manque une ligne d'autorisation.",
    "click": "L'onglet Informations du site s'ouvre sur la fiche **Voir l'utilisation**, où vous collez une nouvelle clé.",
    "care": "Vérifiez deux points : la clé a été créée dans le même compte Cloudflare que ce site et elle comporte les deux lignes « Account Analytics · Read » et « Account Settings · Read ». Les barres peuvent afficher les dernières valeurs correctes jusqu’à ce que le problème soit résolu.",
    "like": "C'est comme remplacer une clé de compteur qui ne tourne plus."
  },
  "help.top.usage_uploaded": {
    "t": "Fichier audio téléchargé depuis cette page d'administration",
    "what": "Taille totale des fichiers musicaux que vous avez téléchargés ici. Seuls les morceaux de ce site sont comptabilisés.",
    "when": "Comparez-la à la barre de stockage. Si la barre est beaucoup plus grande, cela signifie qu'un autre élément de votre compte Cloudflare utilise de l'espace.",
    "click": "Ce n'est qu'un chiffre. Il change lorsque vous ajoutez ou supprimez des chansons.",
    "care": "Les lignes précédentes expliquent ce qui se passe lorsque vous dépassez le quota gratuit. La version PHP indique également où trouver les limites de votre forfait d'hébergement.",
    "like": "Cela correspond à l'espace occupé par vos propres archives dans l'entrepôt, sans compter celles des voisins."
  },
  "help.top.mm_upgrade": {
    "t": "Obtenez plus d'espace (mise à niveau)",
    "what": "Un bouton permet de demander à meshmelo une allocation journalière plus importante. Il apparaît dans l'avertissement en haut de l'écran lorsque l'utilisation du jour atteint ou dépasse 80 %.",
    "when": "Appuyez sur ce bouton si votre site épuise souvent son quota d'utilisation gratuite du jour.",
    "click": "La page de mise à niveau de meshmelo, ou un e-mail envoyé à meshmelo, s'ouvre. Rien ne change tant que meshmelo n'a pas effectué la configuration.",
    "care": "La plupart des sites n'en ont jamais besoin. Une journée chargée se termine d'elle-même après la réinitialisation.",
    "like": "C'est comme demander à l'immeuble une ligne électrique plus puissante lorsque votre magasin est bondé."
  },
  "help.top.mm_use": {
    "t": "Utilisation actuelle",
    "what": "Sur les sites meshmelo, un pourcentage indique la part de la bande passante gratuite utilisée par votre site aujourd'hui. En dessous figurent les données des 7 derniers jours.",
    "when": "Consultez-le les jours de forte activité, par exemple après avoir partagé un lien.",
    "click": "Ce n'est qu'un chiffre. Il revient à 0 % chaque jour à l'heure indiquée sous la barre.",
    "care": "Plus le pourcentage est faible, mieux c'est, mais un pourcentage élevé indique un grand nombre de visiteurs. À partir de 80 %, un avertissement s'affiche en haut de la page. À 100 %, les visiteurs voient une brève page « Retour bientôt » jusqu'à la réinitialisation. Cette page d'administration et les morceaux sur aimusiclist.com restent accessibles.",
    "like": "Voici le compteur électrique de votre magasin pour aujourd'hui. Lorsqu'il est plein, la porte d'entrée se ferme jusqu'à demain."
  },
  "help.top.mm_use_notify": {
    "t": "Envoyez-moi un courriel une fois par jour lorsque le taux dépasse 80 %.",
    "what": "Une case à cocher pour recevoir une alerte par e-mail lorsque l'utilisation du jour dépasse 80 %.",
    "when": "Activez-le si vous n'ouvrez pas cette page tous les jours.",
    "click": "Vos informations sont enregistrées dès que vous cochez ou décochez la case. Vous recevrez au maximum un courriel par jour.",
    "care": "Ce message vous avertit seulement. Il n'empêche rien. Vous ne verrez cette boîte que si meshmelo a activé les alertes par e-mail.",
    "like": "C'est comme demander au releveur de compteur de vous envoyer un SMS lorsque le compteur est presque plein."
  },
  "help.top.aml_retry": {
    "t": "Essayez maintenant",
    "what": "Tentative de connexion immédiate à aimusiclist.com, sans attendre la prochaine tentative automatique.",
    "when": "Appuyez dessus lorsque la ligne indique « non connectée », ou après avoir corrigé le problème affiché.",
    "click": "Le message « Connexion en cours… » s’affiche, puis le résultat apparaît. Une fois la connexion établie, vos morceaux publics sont envoyés à aimusiclist.com.",
    "care": "Si le problème vient d'aimusiclist.com, cliquer plusieurs fois ne changera rien. Patientez quelques instants et réessayez.",
    "like": "C'est comme appeler soi-même le marché au lieu d'attendre qu'il rappelle."
  },
  "help.tracks.list": {
    "t": "Mes pistes",
    "what": "Voici la liste de toutes les chansons présentes sur votre site. Le nombre entre parenthèses indique le nombre total de chansons.",
    "when": "Venez ici pour trouver une chanson, la rendre publique ou non sur aimusiclist.com, l'écouter, la modifier ou la supprimer.",
    "click": "Tout ce que vous voyez ici correspond à votre liste réelle et enregistrée. Les interrupteurs et les boutons de chaque ligne sont immédiatement fonctionnels.",
    "care": "Les chansons sans fichier audio affichent **Aucun audio**. Elles ne sont comptabilisées que lorsque vous ajoutez le fichier.",
    "like": "Il s'agit de la liste des stocks de votre magasin : chaque disque que vous avez, avec une note à côté de chacun indiquant s'il est également disponible sur le marché principal (aimusiclist.com)."
  },
  "help.tracks.search": {
    "t": "Rechercher des titres de chansons",
    "what": "Une boîte qui permet de trouver des chansons par leur titre. Seules les chansons dont le titre contient les mots que vous saisissez restent dans la liste.",
    "when": "Utilisez-le lorsque vous avez beaucoup de chansons et que vous voulez en trouver une rapidement, ou pour choisir un groupe de chansons à changer ensemble.",
    "click": "La liste se met à jour au fur et à mesure que vous tapez. Aucune modification n'est enregistrée. Effacez la liste pour afficher à nouveau toutes les chansons.",
    "care": "Cette fonction ne prend en compte que le titre, et non les genres ou les noms d'artistes. La casse (majuscules ou minuscules) n'a pas d'importance. L'option [[Tout sélectionner]] ne conserve que les titres restants après la recherche.",
    "like": "C'est comme chercher un disque précis dans les rayons de son magasin en se basant sur le titre inscrit sur sa tranche."
  },
  "help.tracks.nolang": {
    "t": "Uniquement des chansons sans langue chantée",
    "what": "Une case à cocher qui affiche uniquement les chansons dont la langue (la langue des paroles) n'est pas encore définie.",
    "when": "Utilisez-le pour trouver les chansons plus anciennes qui n'ont pas encore de langue chantée, puis corrigez-les toutes en même temps.",
    "click": "La liste se met à jour instantanément. Aucune information n'est enregistrée. Décochez la case pour afficher à nouveau toutes les chansons. Cette fonction est associée à la recherche par titre.",
    "care": "Tant que vous ne l'aurez pas précisé, aimusiclist.com considérera la chanson comme la langue principale de votre site. Voici une méthode rapide : cochez cette case, puis la première pour sélectionner toutes les chansons affichées, et enfin **Langue des chansons sélectionnées** et [[Appliquer]].",
    "like": "C'est comme ne sortir que les disques qui n'ont toujours pas d'étiquette indiquant dans quelle langue ils sont chantés."
  },
  "help.tracks.bulk": {
    "t": "Changer plusieurs chansons à la fois",
    "what": "Une boîte de dialogue permettant de modifier plusieurs morceaux simultanément. Lorsqu'aucun morceau n'est sélectionné, un bref message s'affiche. Lorsque des morceaux sont sélectionnés, le nombre de morceaux choisis est indiqué et les outils s'ouvrent.",
    "when": "Utilisez-le lorsque la même modification s'applique à plusieurs chansons, afin de ne pas avoir à les modifier une par une.",
    "click": "Cocher les morceaux ne sauvegarde rien. Chaque outil de la boîte ne sauvegarde que lorsque vous appuyez sur son bouton [[Appliquer]] ou autre. Ensuite, les sélections sont effacées.",
    "care": "Consultez les titres dans les petites cases à gauche de chaque ligne, ou dans la case du haut pour voir tous les titres affichés. Ces cases peuvent contenir : l’ambiance (ou d’autres informations), la langue du morceau, l’outil d’IA utilisé et le nombre d’écoutes pour les visiteurs (uniquement si votre site comptabilise les écoutes).",
    "like": "C'est comme coller une étiquette sur plusieurs disques en une seule fois, au lieu de faire le tour de chaque rayon."
  },
  "help.tracks.bulk_lang": {
    "t": "Langue des chansons sélectionnées",
    "what": "Définit la langue des paroles pour toutes les chansons sélectionnées. Vous pouvez également ajouter une deuxième langue.",
    "when": "Utilisez-le pour de nombreuses chansons chantées dans la même langue, ou pour corriger des chansons qui n'ont pas encore de paroles.",
    "click": "Le choix des langues n'est pas enregistré. Appuyez sur [[Appliquer]] ci-dessous pour enregistrer.",
    "care": "Il s'agit de la langue des paroles, et non de la langue de votre site. Si un morceau est instrumental, choisissez **Instrumental (sans paroles)**. Il ne peut pas être combiné avec une autre langue. aimusiclist.com l'utilise pour ses classements par langue.",
    "like": "C'est comme écrire « chanté en coréen » sur l'étiquette de plusieurs disques à la fois."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Appliquer",
    "what": "Enregistre la langue de la chanson choisie pour chaque chanson cochée.",
    "when": "Appuyez dessus après avoir vérifié les chansons et choisi la langue.",
    "click": "La modification est enregistrée instantanément, un court message indique le nombre de titres modifiés et les chèques sont validés. aimusiclist.com affiche la nouvelle langue peu après.",
    "care": "Le texte original des chansons a été remplacé. Si aucune chanson n'est cochée, vous recevrez uniquement un rappel pour cocher les chansons au préalable.",
    "like": "C’est à ce moment-là que les nouvelles étiquettes linguistiques apparaissent effectivement sur les disques."
  },
  "help.tracks.select": {
    "t": "Sélection de chansons",
    "what": "La case à cocher en haut permet de sélectionner toutes les chansons de la liste. Les petites cases dans chaque ligne permettent de sélectionner une seule chanson.",
    "when": "Utilisez-le avant de changer plusieurs chansons à la fois dans la case située au-dessus de la liste.",
    "click": "La sélection ne fait que marquer les morceaux. Aucune donnée n'est enregistrée. La zone située au-dessus affiche ensuite le nombre de morceaux sélectionnés et ouvre les outils de modification.",
    "care": "La première sélection ne contient que les chansons visibles actuellement. Si vous avez effectué une recherche ou utilisé l'option « **Chansons sans langue** », les chansons masquées ne seront pas prises en compte.",
    "like": "C'est comme poser le doigt sur les disques que l'on veut changer avant de prendre les autocollants."
  },
  "help.tracks.pub": {
    "t": "Public sur aimusiclist",
    "what": "Le bouton de chaque ligne détermine si le morceau est également disponible sur aimusiclist.com. Chaque morceau est toujours présent sur votre site, qu'il soit activé ou non.",
    "when": "Activez cette option pour les chansons que vous souhaitez faire découvrir à un plus large public. Désactivez-la pour les chansons que vous souhaitez réserver à votre site.",
    "click": "L'enregistrement se fait instantanément. Une fois activé, le morceau apparaît sur aimusiclist.com en 1 à 2 minutes. Désactivé, il est supprimé.",
    "care": "Si vous avez 10 chansons ou plus, au moins 10 doivent rester publiques ; vous ne pouvez donc pas désactiver les autres. Avec moins de 10 chansons, toutes restent publiques (la petite ligne sous le titre indique la règle applicable). Un bouton grisé signifie que la chanson fait partie d'un album public ou d'un album configuré pour être ouvert ultérieurement. Rendez l'album privé au préalable.",
    "like": "Parmi les disques de votre magasin, vous choisissez ceux qui seront également mis en rayon sur le grand marché (aimusiclist.com)."
  },
  "help.tracks.col_title": {
    "t": "Titre",
    "what": "Affiche l'image, le titre et le nom de l'artiste de la chanson, ainsi que sa langue et de petites étiquettes.",
    "when": "Cliquez ici pour consulter en un coup d'œil les détails d'une chanson.",
    "click": "Ce menu affiche uniquement des informations. Pour le modifier, appuyez sur [[Modifier]] dans cette ligne.",
    "care": "Les petites étiquettes signifient : **SRT** = paroles synchronisées, **✦ nom** = outil d’IA utilisé pour la création, **Aucun audio** = fichier audio manquant, **Dans un album publié** = figure dans un album public. Sur un téléphone, le nombre de lectures s’affiche également ici.",
    "like": "Comme la pochette d'un disque : photo, nom et artiste."
  },
  "help.tracks.col_genres": {
    "t": "Genres",
    "what": "Affiche les genres de la chanson, jusqu'à trois. Le premier, mis en évidence, est le genre principal. Les autres sont des genres supplémentaires.",
    "when": "Consultez cette page pour vérifier que chaque chanson appartient au bon genre.",
    "click": "Il affiche uniquement des informations. Pour changer de genre, appuyez sur [[Modifier]] dans cette ligne.",
    "care": "Le genre principal détermine le menu dans lequel le morceau est classé sur aimusiclist.com. Les genres secondaires sont affichés à côté du titre. Cette colonne est masquée sur un écran de téléphone.",
    "like": "Comme l'étiquette qui indique aux acheteurs dans quel rayon du grand magasin se trouve le disque."
  },
  "help.tracks.col_length": {
    "t": "Longueur",
    "what": "La durée de la chanson, en minutes et secondes (par exemple 3:25).",
    "when": "Consultez cette page pour vérifier que le bon fichier a été téléchargé, par exemple si une chanson semble beaucoup trop courte.",
    "click": "Il ne fait qu'afficher des informations. Elles proviennent du fichier audio. Pour le modifier, téléchargez un nouveau fichier dans [[Modifier]].",
    "care": "La durée d'un morceau doit être comprise entre 30 secondes et 15 minutes. Cette colonne est masquée sur un écran de téléphone.",
    "like": "Comme la durée du morceau imprimée au dos d'une pochette de disque."
  },
  "help.tracks.col_plays": {
    "t": "Pièces de théâtre",
    "what": "Nombre total de fois où chaque chanson a été écoutée sur votre site. Survolez un nombre pour afficher les 7 derniers jours et aujourd'hui.",
    "when": "Utilisez-le pour voir quelles chansons sont les plus écoutées. Plus elles sont populaires, mieux c'est. C'est un bon indicateur pour savoir quelles chansons garder publiques ou inclure dans un album.",
    "click": "Il n'affiche que des chiffres. Ils changent une fois par jour, ou immédiatement lorsque vous appuyez sur [[Actualiser maintenant]] dans l'onglet Statistiques.",
    "care": "Les écoutes sur aimusiclist.com ne sont pas incluses dans ce chiffre. Il apparaît uniquement lorsque votre site comptabilise les écoutes. Si un chiffre vous semble trop bas, attendez la prochaine mise à jour quotidienne ou cliquez sur [[Actualiser maintenant]]. **Masqué aux visiteurs** sous un chiffre signifie que les visiteurs ne le voient pas.",
    "like": "Comme le compteur électrique de chaque disque : il indique combien de fois il a été écouté dans votre magasin."
  },
  "help.tracks.row_buttons": {
    "t": "Boutons de chanson",
    "what": "Les boutons à la fin de chaque ligne : [[Aperçu]], [[Modifier]] et [[Supprimer]].",
    "when": "Utilisez-les pour écouter une chanson, modifier ses détails ou la supprimer.",
    "click": "[[Aperçu]] permet d'écouter le morceau ici (appuyez sur [[Arrêter]] pour l'arrêter). [[Modifier]] ouvre le formulaire du morceau en haut de la page. [[Supprimer]] vous demande une confirmation, puis supprime immédiatement le morceau et son fichier audio.",
    "care": "La suppression est irréversible. Le morceau disparaît également d'aimusiclist.com. Le bouton [[Aperçu]] n'apparaît que pour les morceaux disposant d'un fichier audio. Un morceau d'un album public ne peut être supprimé si l'album contient moins de 6 titres.",
    "like": "Comme les outils à disposition sur le comptoir pour un disque : l'écouter, réparer son étiquette ou le retirer définitivement du magasin."
  },
  "help.tracks.bulk_plays": {
    "t": "Le nombre de parties jouées par les visiteurs",
    "what": "Permet, pour les chansons sélectionnées, de choisir si les visiteurs peuvent voir le nombre de fois où chaque chanson a été jouée.",
    "when": "Utilisez-le pour masquer le nombre de vues sur quelques chansons (par exemple, les toutes nouvelles), ou pour l'afficher à nouveau.",
    "click": "Appuyez sur [[Afficher]] ou [[Masquer]] pour enregistrer immédiatement pour toutes les chansons sélectionnées.",
    "care": "Les visiteurs ne voient le nombre de lectures qu'après l'activation de l'option **Afficher le nombre de lectures aux visiteurs** dans les informations du site. Cette fenêtre apparaît uniquement lorsque votre site comptabilise les lectures. Vous pouvez toujours consulter vous-même les chiffres ici.",
    "like": "Comme choisir les disques qui recevront un petit autocollant « vendu 120 fois » dans votre magasin."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Montrer",
    "what": "Permet aux visiteurs de voir le nombre de lectures des chansons sélectionnées.",
    "when": "Appuyez dessus pour les chansons dont vous aviez masqué le nombre de titres et que vous souhaitez maintenant afficher.",
    "click": "La modification est immédiatement enregistrée pour tous les morceaux cochés, et les coches sont effacées. Vous pouvez appuyer sur [[Masquer]] à tout moment pour annuler l'opération.",
    "care": "Rien ne s'affiche pour les visiteurs lorsque l'option **Afficher le nombre de lectures aux visiteurs** est désactivée dans les informations du site.",
    "like": "Remettre l'autocollant « écouté tant de fois » sur les disques."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Cacher",
    "what": "Masque le nombre d'écoutes des chansons sélectionnées aux visiteurs.",
    "when": "Appuyez dessus pour les chansons dont vous préférez ne pas afficher le nombre de titres pour le moment, comme les chansons que vous venez de télécharger.",
    "click": "L'enregistrement est immédiat pour tous les morceaux cochés, et les coches sont effacées. Lorsque l'option « Infos du site » est activée, ces morceaux apparaissent comme **masqués aux visiteurs** sous leur numéro dans cette liste. Vous pouvez appuyer sur [[Afficher]] à tout moment pour les rendre visibles.",
    "care": "Seul le nombre est masqué. Les chansons continuent de jouer et le nombre d'écoutes est toujours comptabilisé.",
    "like": "J'ai retiré l'autocollant « écouté tant de fois » de certains disques. Ils sont restés sur l'étagère."
  },
  "help.tracks.plays_show": {
    "t": "Afficher le nombre d'écoutes de cette chanson aux visiteurs",
    "what": "Cela détermine si les visiteurs voient le nombre de fois où cette chanson a été jouée sur votre site, par exemple « 1 234 écoutes ».",
    "when": "Décochez cette case pour une chanson dont vous préférez garder le numéro confidentiel.",
    "click": "Les données sont enregistrées lorsque vous appuyez sur [[Enregistrer le morceau]]. Le nombre de visiteurs qui consultent le morceau est mis à jour une fois par jour.",
    "care": "Les visiteurs ne voient ces statistiques que si l'option « Afficher le nombre de lectures aux visiteurs » est activée dans les informations du site. Lorsque vous consultez votre site en étant connecté, vous pouvez voir vous-même tous les chiffres.",
    "like": "C'est comme choisir d'afficher ou non un petit nombre d'exemplaires « vendus » sur ce disque dans votre magasin."
  },
  "help.site.plays": {
    "t": "Comptes de jeu",
    "what": "Paramètres du compteur indiquant le nombre de fois où chaque chanson a été écoutée sur votre site. Les écoutes sur l'écran aimusiclist.com ne sont pas incluses.",
    "when": "Venez ici pour décider si les visiteurs peuvent voir ces chiffres.",
    "click": "Ce titre explique uniquement la carte. Si la carte indique que le nombre de parties jouées s'affiche une fois que votre site aura commencé à compter, cela signifie que les statistiques ne sont pas encore activées ; l'onglet « Statistiques » explique comment les activer.",
    "care": "Ces chiffres concernent uniquement votre site. Ils ne sont pas transmis à aimusiclist.com et n'ont aucune incidence sur son classement.",
    "like": "C'est le petit compteur sur la platine du magasin. Il augmente à chaque fois que quelqu'un écoute un disque dans votre magasin."
  },
  "help.site.plays_switch": {
    "t": "Afficher le nombre de parties jouées aux visiteurs",
    "what": "Lorsque cette option est activée, chaque chanson sur votre site affiche un nombre comme « 1 234 écoutes ». Elle est désactivée au départ.",
    "when": "Activez cette fonction lorsque les statistiques sont pertinentes, par exemple pour afficher les chansons préférées du public. Désactivez-la si vous préférez ne pas les afficher.",
    "click": "L'enregistrement se fait instantanément. Les statistiques sont mises à jour une fois par jour, et immédiatement lorsque vous cliquez sur [[Actualiser]] dans l'onglet Statistiques. Plus le chiffre est élevé, plus vous écoutez de chansons. Pour masquer le chiffre pour certaines chansons seulement, utilisez la liste des chansons ou l'écran d'édition des chansons.",
    "care": "Lorsque vous êtes connecté, vous voyez le numéro de chaque chanson sur votre site, même celles qui sont cachées. Vous seul pouvez les voir. Les visiteurs ne les voient pas.",
    "like": "C'est comme placer le comptoir du tourne-disque du magasin à la vue des clients."
  },
  "help.site.likes": {
    "t": "Goûts",
    "what": "Paramètres du bouton ♥ sur vos chansons. Les visiteurs appuient dessus pour indiquer qu'ils aiment une chanson.",
    "when": "Cliquez ici pour afficher ou masquer ce bouton sur l'ensemble de votre site.",
    "click": "Ce titre explique uniquement la carte. Le bouton ci-dessous permet d'activer les statistiques. Si la carte indique d'activer les statistiques, les mentions « J'aime » ne peuvent pas encore être comptabilisées ; consultez l'onglet « Statistiques ».",
    "care": "Les mentions « J’aime » sont comptabilisées uniquement sur votre site. Elles ne sont pas transmises à aimusiclist.com et n’ont aucune incidence sur son classement.",
    "like": "C'est le tableau d'autocollants dans votre magasin où les clients collent un cœur à côté des disques qu'ils aiment."
  },
  "help.site.likes_switch": {
    "t": "Afficher le bouton « J’aime »",
    "what": "Affiche ou masque le bouton ♥ sur chaque chanson de votre site. Il est activé par défaut.",
    "when": "Laissez cette fonctionnalité activée pour voir les chansons préférées des visiteurs. Désactivez-la si vous ne souhaitez pas afficher de cœurs sur votre site.",
    "click": "L'instant où vous cliquez est enregistré. Les visiteurs appuient sur ♥ sans se connecter et peuvent appuyer à nouveau pour annuler. Le nombre change une fois par jour. Plus le nombre est élevé, mieux c'est : plus de gens aiment cette chanson.",
    "care": "Le bouton n'apparaît que lorsque les statistiques sont activées. Désactiver l'interrupteur masque le bouton mais conserve les cœurs déjà distribués. Réactiver l'interrupteur les fait réapparaître.",
    "like": "C'est comme accrocher ou enlever le tableau d'autocollants en forme de cœur dans votre magasin."
  },
  "help.site.add": {
    "t": "Ajouter à la liste de musique AI",
    "what": "Paramètres du bouton « + aimusiclist ». Grâce à lui, les visiteurs peuvent ajouter votre morceau à leur propre playlist sur aimusiclist.com.",
    "when": "Cliquez ici pour afficher ou masquer ce bouton sur votre site.",
    "click": "Ce titre explique uniquement la carte. Le bouton ci-dessous permet de l'activer. Si la carte indique de se connecter au préalable, cela signifie que votre site n'est pas encore lié à aimusiclist et que le bouton ne peut donc pas s'afficher.",
    "like": "C'est une étiquette « à vendre au grand public » apposée sur vos disques : un client peut ajouter le morceau à son propre panier sur aimusiclist.com."
  },
  "help.site.add_switch": {
    "t": "Afficher le bouton « + aimusiclist »",
    "what": "Affiche ou masque le bouton « + aimusiclist » à côté de vos morceaux et dans le lecteur. Il est activé par défaut.",
    "when": "Laissez cette option activée pour que vos auditeurs puissent ajouter vos morceaux à leurs playlists aimusiclist et les réécouter. Désactivez-la si vous ne souhaitez pas utiliser ce bouton.",
    "click": "L'enregistrement se fait instantanément. Lorsqu'un visiteur appuie sur le bouton, une petite fenêtre aimusiclist s'ouvre (un nouvel onglet sur les téléphones), et il peut choisir une playlist sans se connecter.",
    "care": "Ce bouton n'apparaît que pour les morceaux publics sur aimusiclist, et seulement après la connexion de votre site. Il ne rend aucun morceau public ou privé.",
    "like": "C'est comme ajouter un petit bouton « ajouter à mon panier » aux disques qui sont également vendus dans les grandes surfaces."
  },
  "help.tracks.bulk_mood": {
    "t": "Changez l'ambiance des chansons vérifiées",
    "what": "Définit l'ambiance (par exemple, Calme ou Énergique) de toutes les chansons sélectionnées. Si vous choisissez une autre option dans **Ce qu'il faut modifier**, cette option sera appliquée à la place.",
    "when": "Utilisez-le après avoir téléchargé de nombreuses chansons, ou lorsque vous souhaitez trier vos chansons par ambiance.",
    "click": "Rien ne se passe tant que vous n'appuyez pas sur [[Appliquer]]. Toutes les chansons sélectionnées reçoivent alors la même valeur, qui est enregistrée. Cette valeur s'affiche à côté de chaque chanson sur votre site et peu après sur aimusiclist.com.",
    "care": "La valeur précédente de ces chansons est remplacée. Cette case apparaît uniquement lorsque aimusiclist.com propose des informations supplémentaires à sélectionner dans une liste.",
    "like": "Comme apposer la même étiquette de couleur, telle que « calme », sur de nombreux disques afin que les acheteurs puissent les trouver au toucher."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Que faut-il changer ?",
    "what": "Choisissez les informations supplémentaires que vous souhaitez définir pour les chansons sélectionnées. L'ambiance est choisie en premier.",
    "when": "Modifiez ce paramètre si vous souhaitez définir une ambiance différente pour plusieurs chansons simultanément.",
    "click": "Choisir ici ne modifie que les choix ci-dessous. Rien n'est enregistré tant que vous n'avez pas appuyé sur [[Appliquer]].",
    "care": "Cette liste provient de aimusiclist.com et peut s'allonger au fil du temps. Seuls les éléments que vous sélectionnez dans la liste apparaissent ici.",
    "like": "Comme choisir le type d'étiquette que vous allez coller sur les disques : ambiance, ou autre chose."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Appliquer",
    "what": "Enregistre la valeur que vous avez choisie pour chaque chanson cochée.",
    "when": "Appuyez dessus après avoir vérifié les chansons et choisi une valeur.",
    "click": "La modification est enregistrée instantanément et un court message indique le nombre de titres modifiés. Les modifications sont ensuite validées. aimusiclist.com l'affiche peu après.",
    "care": "Si vous choisissez **— effacer (aucune valeur) —**, ou si vous ne cochez aucune case dans une option à choix multiple, la valeur de ces chansons est supprimée. Si aucune chanson n'est cochée, vous recevez simplement un rappel pour cocher les chansons au préalable.",
    "like": "C’est à ce moment précis que vous collez les étiquettes sur les disques."
  },
  "help.top.lang_fix": {
    "t": "Réglez maintenant",
    "what": "Sélectionne pour vous toutes les chansons sans langue spécifique, afin que vous puissiez toutes les configurer en une seule fois.",
    "when": "Appuyez dessus à partir de l'indication de la langue de la chanson.",
    "click": "L'onglet « Morceaux » s'ouvre avec uniquement les morceaux sélectionnés. La boîte de dialogue permettant de modifier plusieurs morceaux simultanément apparaît dans le champ « Langue ». Choisissez la langue et validez. Aucune modification ne sera enregistrée tant que vous n'aurez pas effectué cette action.",
    "care": "Si les chansons sont dans des langues différentes, décochez-en certaines et faites-le en plusieurs tours.",
    "like": "C'est comme rassembler tous les disques sans étiquette sur une seule table, afin de pouvoir les étiqueter en une seule fois."
  },
  "help.tracks.aml_box": {
    "t": "Publiez également sur aimusiclist.com",
    "what": "Cela détermine si le morceau est également référencé sur aimusiclist.com. Votre propre site l'affiche systématiquement.",
    "when": "Cochez cette case pour les chansons que vous souhaitez faire connaître au monde entier et qui ont une chance d'entrer dans le Top 100. Décochez-la pour les chansons que vous souhaitez diffuser uniquement sur votre site.",
    "click": "L'enregistrement se fait automatiquement lorsque vous téléchargez le morceau ou appuyez sur [[Enregistrer le morceau]]. Les morceaux publiés apparaissent sur aimusiclist.com quelques minutes plus tard. Vous pouvez les modifier ultérieurement dans la liste des morceaux.",
    "care": "Au moins 10 chansons doivent rester publiques (toutes les chansons si vous en avez moins de 10). Ainsi, une nouvelle chanson peut être publiée même si cette option est décochée, et son enregistrement peut être refusé si cette option est décochée. Pour une chanson figurant dans un album public, cette case reste cochée, et la décocher n'a aucun effet tant que l'album n'est pas rendu privé.",
    "like": "Il s'agit de choisir quels disques de votre magasin se retrouvent également sur les rayons des grandes surfaces."
  },
  "help.tracks.upload": {
    "t": "Télécharger des chansons",
    "what": "C'est ici que vous ajoutez de nouvelles chansons à votre site. Vous sélectionnez les fichiers audio, remplissez quelques champs pour chaque chanson et cliquez sur le bouton « Téléverser ».",
    "when": "Utilisez-le à chaque fois que vous avez de nouvelles chansons. Vous pouvez envoyer jusqu'à 20 chansons en une seule fois.",
    "click": "Sélectionner des fichiers les ajoute simplement à cette liste. Rien n'est enregistré tant que vous n'avez pas cliqué sur [[Téléverser… chanson(s)]]. Ensuite, les chansons sont immédiatement disponibles sur votre site.",
    "care": "Les fichiers audio peuvent être au format MP3, M4A ou WAV. Chaque fichier doit durer entre 30 secondes et 15 minutes et ne pas dépasser 15 Mo.",
    "like": "C'est la porte de derrière de votre magasin, par où arrivent les nouveaux disques avant d'être mis en rayon."
  },
  "help.tracks.choose": {
    "t": "Choisir des fichiers",
    "what": "Cela ouvre une fenêtre permettant de sélectionner des fichiers audio sur votre ordinateur. Vous pouvez également glisser-déposer des fichiers dans cette fenêtre.",
    "when": "Utilisez-le pour lancer un envoi. Vous pouvez sélectionner plusieurs fichiers simultanément.",
    "click": "Les fichiers ont été ajoutés à la liste ci-dessous. Aucun fichier n'a encore été téléchargé. Un type de fichier incorrect affiche immédiatement la mention « Échec » dans la liste.",
    "care": "La liste peut contenir jusqu'à 20 fichiers. Les fichiers supplémentaires sont exclus. Les fichiers MP3 et M4A ne doivent pas dépasser 15 Mo. Les fichiers WAV sont convertis en MP3 à 320 kbps, et ce MP3 ne doit pas dépasser 15 Mo (environ 6 minutes 30). Chaque morceau doit durer entre 30 secondes et 15 minutes.",
    "like": "C'est comme ranger des disques dans un panier. Ils ne sont sur l'étagère que lorsqu'on rentre le panier."
  },
  "help.tracks.name_tags": {
    "t": "Lisez le genre, l'ambiance et la langue à partir des parenthèses ( ) dans les noms de fichiers",
    "what": "Lorsque cette option est activée, un nom de fichier comme « Midnight Rain (R&B, Neo Soul; Romantic, en) » remplit automatiquement les champs. Le titre devient alors « Midnight Rain ».",
    "when": "Laissez cette option activée si vous nommez vos morceaux avec le guide de l'IA. Désactivez-la si vos noms de fichiers contiennent des parenthèses qui font partie du titre réel.",
    "click": "La liste est relue immédiatement. Seuls les fichiers dont vous n'avez pas modifié les cases manuellement sont remplis à nouveau. Ce navigateur mémorise votre choix.",
    "care": "Avant le point-virgule, on trouve les genres (le premier étant le genre principal). Viennent ensuite les ambiances et le code de langue. Les mots inconnus sont ignorés et affichés en gris. Les mentions telles que (Live) ou (feat. X) restent dans le titre.",
    "like": "C'est comme un vendeur qui lit l'étiquette sur chaque boîte de disque et qui écrit l'étiquette de l'étagère pour vous."
  },
  "help.tracks.common": {
    "t": "S'applique à toutes les chansons de cette mise en ligne",
    "what": "Les cases situées sous ce titre concernent chaque chanson que vous téléchargez cette fois-ci : l’outil d’IA, l’artiste, des informations supplémentaires et la publication sur aimusiclist.com.",
    "when": "Configurez-les une fois pour toutes avant d'appuyer sur le bouton de téléchargement.",
    "click": "Rien n'est enregistré tant que vous n'avez pas téléchargé le fichier. Le genre, l'ambiance et la langue de la chanson ne sont pas indiqués ici, car vous les sélectionnez pour chaque fichier ci-dessus.",
    "care": "Si une chanson nécessite une modification, téléchargez-la d'abord, puis modifiez-la avec [[Modifier]] dans la liste des chansons.",
    "like": "C'est comme un autocollant que l'on colle sur tout le panier, et non sur chaque disque."
  },
  "help.tracks.artist": {
    "t": "Artiste",
    "what": "Le nom indiqué comme étant celui de l'interprète ou du créateur de la chanson. Le premier choix correspond au nom de votre site.",
    "when": "Conservez le nom du site pour la plupart des chansons. Choisissez un autre nom si la chanson est associée à un artiste différent de celui que vous utilisez.",
    "click": "Le morceau est enregistré lorsque vous le téléchargez ou appuyez sur [[Enregistrer le morceau]]. Si vous conservez le nom du site et que vous le renommez ultérieurement, le morceau portera le nouveau nom.",
    "care": "Les autres noms proviennent de la fiche « Autres artistes » de l’onglet « Infos du site » (jusqu’à 20 noms). Ajoutez-y le nom en premier.",
    "like": "C'est le nom imprimé sur la pochette du disque, sous le titre."
  },
  "help.tracks.up_start": {
    "t": "Télécharger… chanson(s)",
    "what": "Cela envoie les fichiers en attente à votre site un par un. Le nombre affiché sur le bouton indique le nombre de chansons en attente.",
    "when": "Appuyez sur cette touche lorsque chaque fichier possède un genre principal et une langue musicale.",
    "click": "Chaque ligne indique sa progression. Une fois le traitement terminé, les morceaux sont disponibles sur votre site, et les morceaux publics sont ajoutés à aimusiclist.com à la fin.",
    "care": "Le système est verrouillé tant qu'une case requise est vide. Veuillez laisser cette page ouverte jusqu'à la fin de l'opération, car c'est elle qui effectue l'envoi. En cas d'échec de certains envois, les autres seront sauvegardés.",
    "like": "Elle porte le panier dans le magasin et place chaque disque sur l'étagère."
  },
  "help.tracks.up_retry": {
    "t": "Réessayer les chansons qui n'ont pas abouti",
    "what": "Cette fonction ne relance que les chansons qui ont échoué, par exemple à cause d'une coupure de connexion.",
    "when": "Ce message apparaît uniquement lorsque certaines chansons n'ont pas pu être lues. Appuyez dessus après avoir vérifié votre connexion internet.",
    "click": "Les morceaux dont l'enregistrement a échoué sont renvoyés. Un morceau déjà enregistré ne fait que renvoyer son signal audio, il n'est donc pas enregistré deux fois.",
    "care": "Un fichier de type incorrect ne peut pas être rechargé. Si un morceau n'a pas pu être chargé en raison de sa longueur ou de sa taille, corrigez le fichier, supprimez la ligne et ajoutez-le à nouveau.",
    "like": "Il s'agit de récupérer les disques qui ont échappé au panier en cours de route."
  },
  "help.tracks.up_clear": {
    "t": "Liste claire",
    "what": "Cela vide toute la liste de téléchargement en une seule fois.",
    "when": "Utilisez-le une fois le téléchargement terminé, ou lorsque vous souhaitez recommencer.",
    "click": "Toutes les lignes disparaissent immédiatement. Les chansons déjà téléchargées restent sur votre site.",
    "care": "Il est impossible d'appuyer sur ce bouton pendant un chargement. Les champs remplis pour les fichiers non encore chargés seront perdus.",
    "like": "Il vide le panier. Les disques déjà sur l'étagère y restent."
  },
  "help.tracks.edit": {
    "t": "Modifier",
    "what": "Formulaire permettant de modifier un morceau déjà importé. Il s'ouvre lorsque vous appuyez sur [[Modifier]] dans la liste des morceaux.",
    "when": "Utilisez-le pour corriger le titre, les genres, la langue, l'artiste et plus encore, ou pour insérer un nouveau fichier audio.",
    "click": "Les modifications apportées à la partie supérieure ne sont enregistrées qu'avec [[Enregistrer la piste]]. L'image et les paroles de la chanson en bas sont enregistrées instantanément.",
    "care": "Tant que ce formulaire est ouvert, il remplace le menu de téléchargement. Appuyez sur [[Annuler]] ou enregistrez pour faire réapparaître le menu de téléchargement.",
    "like": "Il s'agit de prendre un disque sur l'étagère pour réparer son étiquette."
  },
  "help.tracks.title": {
    "t": "Titre",
    "what": "Le nom de la chanson, tel qu'il apparaît sur votre site et sur aimusiclist.com.",
    "when": "Modifiez-le si le titre issu du nom de fichier est incorrect ou nécessite une correction.",
    "click": "Le titre est enregistré lorsque vous appuyez sur [[Enregistrer le morceau]]. Les morceaux publics affichent le nouveau titre sur aimusiclist.com un peu plus tard.",
    "care": "Le titre ne peut pas être vide. Il peut contenir jusqu'à 100 caractères.",
    "like": "C'est le grand nom imprimé sur la pochette du disque."
  },
  "help.tracks.replace_audio": {
    "t": "Remplacer l'audio (facultatif)",
    "what": "Choisissez ici un nouveau fichier audio pour remplacer le son de la chanson. Le titre, le genre, l'image et les paroles restent inchangés.",
    "when": "Utilisez-le si vous avez créé une meilleure version ou si vous avez téléchargé le mauvais fichier.",
    "click": "Rien ne se passe tant que vous n'appuyez pas sur [[Enregistrer la piste]]. Le nouveau fichier est alors envoyé et remplace l'ancien.",
    "care": "Le son original est effacé après l'enregistrement ; conservez-en donc une copie sur votre ordinateur. Les règles sont les mêmes que pour le chargement : MP3, M4A ou WAV, de 30 secondes à 15 minutes, 15 Mo maximum.",
    "like": "Cela revient à mettre un nouveau disque dans la même pochette."
  },
  "help.tracks.save": {
    "t": "Enregistrer la piste",
    "what": "Cela enregistre toutes les modifications que vous avez apportées dans le formulaire d'édition ci-dessus.",
    "when": "Appuyez dessus une fois que vous avez terminé de modifier le titre, les genres, la langue et les autres champs.",
    "click": "Les modifications sont enregistrées et le formulaire se ferme. Votre site les affiche immédiatement, et aimusiclist.com un peu plus tard pour les morceaux publics. Si vous avez sélectionné un nouveau fichier audio, il est également envoyé et sa progression est affichée.",
    "care": "L'enregistrement peut être refusé, par exemple en l'absence de genre principal, ou si la dépublication laisserait moins de 10 chansons publiques. Dans ce cas, un message rouge explique la raison et rien n'est enregistré.",
    "like": "Cela revient à remettre le disque sur l'étagère avec son étiquette d'origine."
  },
  "help.tracks.cancel": {
    "t": "Annuler",
    "what": "Cela ferme le formulaire d'édition sans enregistrer les champs ci-dessus.",
    "when": "Utilisez-le si vous avez ouvert la mauvaise chanson ou si vous avez changé d'avis.",
    "click": "Le formulaire se ferme immédiatement et la fenêtre de téléchargement réapparaît. Les modifications non enregistrées sont perdues.",
    "care": "L'image et les paroles de la chanson sont enregistrées dès que vous les modifiez ; la fonction Annuler ne les annule donc pas.",
    "like": "Cela revient à remettre le disque sur l'étagère sans toucher à son étiquette."
  },
  "help.tracks.image": {
    "t": "Image de la chanson",
    "what": "La petite image de la chanson. Elle apparaît derrière le bouton de lecture sur votre site et sur aimusiclist.com.",
    "when": "Modifiez ce paramètre si vous souhaitez que la chanson ait sa propre image au lieu de l'image par défaut.",
    "click": "Les boutons ci-dessous fonctionnent immédiatement. Ils n'attendent pas [[Enregistrer la piste]].",
    "care": "Chaque chanson se voit attribuer une image par défaut lors de sa mise en ligne. Votre image est enregistrée sous forme de petit carré (100×100 pixels), puis dans une version plus grande si sa taille le permet.",
    "like": "C'est la pochette du disque que les gens voient avant d'appuyer sur lecture."
  },
  "help.tracks.image_lg": {
    "t": "Améliorer la netteté de l'image sur les grandes cartes",
    "what": "Cette mention signifie que l'image de votre chanson n'est affichée qu'en petite taille. Sur les grandes cartes d'aimusiclist.com, comme en haut du Top 100, elle peut apparaître floue.",
    "when": "Cela s'affiche pour les chansons dont l'image a été téléchargée avant l'existence des images haute résolution, ou à partir d'une image trop petite.",
    "click": "Appuyez sur [[Changer l'image]] et téléchargez à nouveau l'image. La notification disparaît une fois la version haute résolution enregistrée.",
    "care": "Utilisez une image d'au moins 200 pixels de large pour la partie à recadrer. Une image plus petite ne peut pas être agrandie.",
    "like": "C'est comme reproduire la pochette d'un petit disque au format poster pour la vitrine d'un magasin."
  },
  "help.tracks.image_change": {
    "t": "Changer l'image",
    "what": "Cela vous permet de choisir une image sur votre ordinateur et de l'utiliser comme image pour la chanson.",
    "when": "Utilisez-la pour donner à la chanson sa propre image, ou pour remplacer celle qu'elle possède déjà.",
    "click": "Une fenêtre s'ouvre vous permettant de recadrer ou de réduire l'image. Lorsque vous cliquez sur [[Enregistrer l'image]], elle est enregistrée immédiatement et s'affiche sur votre site. Les morceaux publics apparaissent sur aimusiclist.com un peu plus tard.",
    "care": "JPG, PNG, WebP ou GIF, 2 Mo maximum. Seule l'image réduite sera téléchargée, pas le fichier original.",
    "like": "Cela donne une nouvelle pochette à l'album."
  },
  "help.tracks.image_reset": {
    "t": "Retour à l'image par défaut",
    "what": "Cela supprime l'image que vous avez téléchargée et rétablit l'image par défaut de la chanson.",
    "when": "Utilisez-le lorsque vous ne souhaitez plus utiliser votre propre image pour cette chanson.",
    "click": "Cela se produit immédiatement, sans qu'on ait à le demander. Votre site affiche instantanément l'image par défaut.",
    "care": "L'image que vous avez téléchargée a été supprimée, même la version haute résolution. Pour la réutiliser, téléchargez-la à nouveau via [[Changer l'image]].",
    "like": "Cela consiste à enlever votre veste personnalisée et à remettre la veste standard du magasin."
  },
  "help.tracks.lyrics": {
    "t": "Paroles (.srt)",
    "what": "Les paroles de la chanson, sous forme de fichier .srt. Un fichier .srt contient chaque ligne de paroles avec son minutage.",
    "when": "Ajoutez-le lorsque vous souhaitez que les auditeurs lisent en même temps que le texte. De nombreux outils d'IA musicale peuvent générer un fichier .srt.",
    "click": "Le chargement et la suppression fonctionnent immédiatement, sans avoir besoin de [[Enregistrer la piste]]. Sur votre site, les visiteurs cliquent sur SRT sur le morceau pour afficher les paroles sans le minutage.",
    "care": "Le fichier doit avoir l'extension .srt, être enregistré au format texte UTF-8 et ne pas dépasser 100 Ko. Il doit comporter des lignes de temps de la forme 00:00:01,000 --> 00:00:04,000.",
    "like": "Il s'agit de la feuille de paroles glissée à l'intérieur de la pochette du disque."
  },
  "help.tracks.lyrics_upload": {
    "t": "Téléverser un fichier .srt / Remplacer un fichier .srt",
    "what": "Cette fonction sélectionne un fichier de paroles .srt sur votre ordinateur pour cette chanson. Si la chanson possède déjà des paroles, elle affiche « Remplacer ».",
    "when": "Utilisez-le pour ajouter des paroles ou pour corriger des paroles à l'aide d'un nouveau fichier.",
    "click": "Dès que vous sélectionnez le fichier, il est vérifié et enregistré. Les anciennes paroles, le cas échéant, sont remplacées. Un message rouge s'affiche si le fichier est incorrect.",
    "care": "Seuls les fichiers .srt de 100 Ko ou moins, enregistrés au format UTF-8, sont acceptés. Les fichiers sans lignes de temps sont refusés.",
    "like": "Il s'agit de glisser une nouvelle feuille de paroles dans la pochette."
  },
  "help.tracks.lyrics_view": {
    "t": "Voir le fichier",
    "what": "Cela ouvre le fichier de paroles enregistré pour cette chanson.",
    "when": "Utilisez-le pour vérifier que les paroles correctes ont été enregistrées.",
    "click": "Le fichier s'ouvre dans un nouvel onglet, avec ses dates et heures. Rien ne change.",
    "like": "Il s'agit de sortir la feuille de paroles de la pochette pour la lire."
  },
  "help.tracks.lyrics_delete": {
    "t": "Supprimer les paroles",
    "what": "Cela supprime les paroles de cette chanson.",
    "when": "Utilisez-le lorsque les paroles sont erronées et que vous ne disposez pas encore d'un meilleur fichier, ou lorsque la chanson ne devrait pas avoir de paroles.",
    "click": "Une question vous demande de confirmer. Si vous répondez oui, les paroles sont immédiatement supprimées et la mention SRT disparaît du morceau.",
    "care": "Cette action est irréversible. Pour récupérer les paroles, veuillez télécharger à nouveau le fichier .srt.",
    "like": "Cela revient à sortir la feuille de paroles de la pochette et à la jeter."
  },
  "help.tracks.upguide": {
    "t": "Le genre et l'ambiance sont automatiquement renseignés.",
    "what": "Un guide rapide qui vous évite de choisir manuellement le genre, l'ambiance et la langue de chaque chanson. Il vous suffit de fournir un fichier guide à une IA gratuite, qui nommera votre chanson de façon originale.",
    "when": "Lisez-le une fois avant de composer vos prochaines chansons. Cela vous sera particulièrement utile si vous téléchargez plusieurs chansons à la fois.",
    "click": "La touche ✕ permet de replier le guide en un petit bouton, et ce bouton permet de le rouvrir. Ce navigateur mémorise votre position d'ouverture.",
    "care": "Ce guide ne change rien à votre façon de composer. Il détermine seulement le titre du morceau.",
    "like": "C'est comme écrire l'étiquette de l'étagère directement sur le carton du disque avant même sa livraison, pour ne pas avoir à le trier à l'entrée."
  },
  "help.tracks.upguide_dl": {
    "t": "Téléchargez le guide pour l'IA",
    "what": "Cette commande télécharge le fichier guide depuis aimusiclist.com. Il s'agit d'un fichier texte brut conçu pour être lu par l'IA.",
    "when": "Avant de composer un morceau, joignez ce fichier à ChatGPT, Claude ou Gemini (les versions gratuites fonctionnent). Demandez ensuite un titre à l'IA.",
    "click": "Le fichier est enregistré sur votre ordinateur. Rien ne change sur votre site.",
    "care": "Conservez le nom de fichier que l'IA musicale vous attribue lors du téléchargement du morceau. C'est la partie entre parenthèses du nom qui remplit les champs ici.",
    "like": "C'est une fiche recette que l'on remet à un assistant, afin que les étiquettes soient toujours identiques."
  },
  "help.tracks.uf_all": {
    "t": "Utilisez ceci pour tous les fichiers",
    "what": "Cela copie la valeur de cette case dans la même case de chaque autre fichier de la liste.",
    "when": "Utilisez cette fonction lorsque plusieurs chansons partagent le même genre, la même ambiance ou la même langue. Remplissez le premier champ, puis appuyez ici.",
    "click": "Les autres fichiers sont modifiés immédiatement, et un message indique le nombre de modifications. Les fichiers déjà téléchargés restent inchangés.",
    "care": "Cela écrase les modifications que vous aviez apportées aux autres fichiers. Vous pouvez toujours modifier manuellement chaque fichier par la suite.",
    "like": "C'est comme un tampon encreur : on appose la même étiquette sur chaque boîte en même temps."
  },
  "help.tracks.uf_mood": {
    "t": "Humeur",
    "what": "L'ambiance de cette chanson, triste ou romantique, est déterminée par aimusiclist.com.",
    "when": "Cochez les humeurs qui vous correspondent. C'est facultatif.",
    "click": "Vos cases cochées ne sont conservées que pour ce fichier et sont enregistrées lors du chargement. Lorsque vous atteignez la limite indiquée entre parenthèses, les autres cases se verrouillent jusqu'à ce que vous en décochiez une.",
    "care": "Cette boîte n'apparaît que lorsque votre site a reçu la liste des champs de aimusiclist.com.",
    "like": "Il s'agit d'un petit autocollant de couleur apposé sur le disque qui indique aux auditeurs l'ambiance qu'il dégage avant même de l'écouter."
  },
  "help.tracks.uf_genre": {
    "t": "Genre",
    "what": "Les genres de cette chanson : un genre principal et jusqu’à deux genres supplémentaires.",
    "when": "Choisissez-les pour chaque fichier. Le genre principal doit être sélectionné.",
    "click": "Votre choix est conservé uniquement pour ce fichier. Il est enregistré lors du chargement.",
    "care": "Le genre principal détermine le menu des genres dans lequel le morceau est classé sur aimusiclist.com. Les genres supplémentaires sont affichés à côté du titre.",
    "like": "Il s'agit de l'étiquette de rayon d'un disque : la grande section d'abord, puis deux petites notes."
  },
  "help.tracks.uf_lang": {
    "t": "Langue des chansons",
    "what": "La langue des paroles chantées dans cette chanson. Vous pouvez également ajouter une deuxième langue.",
    "when": "Sélectionnez cette option pour chaque fichier. Si le morceau est instrumental, choisissez « Instrumental (sans paroles) ».",
    "click": "Votre choix est conservé uniquement pour ce fichier et enregistré lors du téléchargement.",
    "care": "Ce n'est pas la langue d'affichage de votre site. « Instrumental » doit être le seul champ disponible ; la deuxième case est donc verrouillée lorsque vous la sélectionnez. aimusiclist.com utilise ce système pour ses classements par langue.",
    "like": "Il s'agit d'une note sur le disque indiquant la langue utilisée par le chanteur."
  },
  "help.tracks.queue": {
    "t": "Fichiers à télécharger",
    "what": "Voici la liste des fichiers que vous avez sélectionnés. Chaque ligne affiche le titre, le nom et la taille du fichier, son statut et les cases correspondant à la chanson.",
    "when": "Veuillez vérifier avant de télécharger. Chaque chanson doit avoir un genre principal et une langue.",
    "click": "Les modifications apportées aux champs sont conservées ici jusqu'à ce que vous téléversiez le fichier. Une étiquette verte « Remplissage à partir du nom du fichier » indique que les champs proviennent du fichier ( ). « Choisissez ci-dessous » signifie que vous devez les sélectionner vous-même.",
    "care": "Les lignes contenant une case vide sont marquées en rouge. Pendant le chargement, les cases se transforment en une seule ligne récapitulative et ne peuvent plus être modifiées.",
    "like": "C'est le bon de livraison à la porte de derrière. Vous vérifiez chaque carton avant qu'il ne soit mis en rayon."
  },
  "help.tracks.up_remove": {
    "t": "Retirer",
    "what": "Cela retire un fichier de la liste de téléchargement.",
    "when": "Utilisez-le lorsque vous avez sélectionné un fichier incorrect ou lorsqu'un fichier affiche « Échec » en raison de son type ou de sa longueur.",
    "click": "La ligne disparaît immédiatement. Le fichier sur votre ordinateur n'est pas supprimé.",
    "care": "Le bouton est masqué pendant le chargement d'un fichier et pour les fichiers déjà chargés. Pour supprimer un morceau chargé, utilisez la liste des morceaux.",
    "like": "C'est comme retirer un disque du panier avant d'entrer."
  },
  "help.tracks.up_need": {
    "t": "boîtes vides",
    "what": "Cet avertissement liste les fichiers dont le genre principal ou la langue de la chanson est encore vide.",
    "when": "Il apparaît automatiquement lorsqu'une case requise est vide. Le bouton de téléchargement reste verrouillé jusqu'à ce qu'il disparaisse.",
    "click": "Appuyez sur une ligne pour accéder directement à la case vide. L'avertissement disparaît lorsque toutes les cases nécessaires sont remplies.",
    "care": "Seules les 12 premières cases vides sont affichées. Le nombre en haut les compte toutes.",
    "like": "Il s'agit d'une liste de contrôle scotchée sur la porte : la livraison ne peut être effectuée que lorsque chaque ligne est cochée."
  },
  "help.tracks.up_after": {
    "t": "Consultez les nouveautés sur aimusiclist.com",
    "what": "Une note qui apparaît après la mise en ligne, vous indiquant où trouver vos nouvelles chansons publiques.",
    "when": "Elle n'apparaît que si votre site est connecté à aimusiclist.com et qu'au moins une nouvelle chanson est publique.",
    "click": "Le lien ouvre la nouvelle page de aimusiclist.com dans un nouvel onglet.",
    "care": "aimusiclist.com a besoin de quelques minutes pour ajouter de nouveaux morceaux. S'ils ne sont toujours pas disponibles après environ 5 minutes, veuillez réessayer plus tard.",
    "like": "C'est comme aller au grand magasin pour voir son nouveau disque en rayon."
  },
  "help.tracks.pubmin": {
    "t": "Public : n · Minimum : n",
    "what": "Le premier chiffre indique le nombre de vos chansons actuellement publiques sur aimusiclist.com. Le second est le nombre minimum de chansons qui doivent rester publiques.",
    "when": "Consultez cette page avant de couper des chansons, afin de savoir combien vous pouvez encore en couper.",
    "click": "Il s'agit simplement d'un décompte. Il change automatiquement lorsque vous activez ou désactivez la musique.",
    "care": "La règle : si vous avez 10 chansons ou plus, au moins 10 doivent rester publiques. Si vous en avez moins de 10, elles restent toutes publiques. Seules les chansons avec un fichier audio sont comptabilisées. Une chanson d'un album public est comptabilisée comme telle. Un album programmé pour être ouvert ultérieurement n'est comptabilisé qu'une fois ouvert.\nSi le premier nombre est inférieur au second, une fenêtre jaune vous invite à activer d'autres chansons. Vous choisissez lesquelles. Supprimer une chanson est toujours possible.",
    "like": "Le site de référence (aimusiclist.com) exige que chaque magasin ait au moins 10 disques en stock. Cela vous indique combien vous en avez actuellement."
  },
  "help.top.pubmin_go": {
    "t": "Choisissez des chansons",
    "what": "Vous permet d'accéder à l'endroit où vous choisissez les chansons qui seront publiques.",
    "when": "Appuyez dessus à partir de l'avis « pas assez de chansons publiques ».",
    "click": "L'onglet Morceaux s'ouvre à la ligne « Public · Minimum ». Activez le mode public des morceaux souhaités. Chaque action est enregistrée instantanément.",
    "care": "Les chansons sans audio ne sont pas prises en compte. La notification disparaît automatiquement une fois le minimum atteint.",
    "like": "C'est comme aller directement à la vitrine pour y mettre quelques disques de plus."
  },
  "help.tracks.pub_tip": {
    "t": "Conseil pour les commutateurs publics",
    "what": "Une brève note s'affiche lors de votre première utilisation d'un commutateur public. Elle explique également quand le morceau apparaît sur aimusiclist.com.",
    "when": "Lisez-le une seule fois. Il ne s'affiche qu'après avoir cliqué sur le bouton pour la première fois dans ce navigateur.",
    "click": "[[Ne plus afficher]] masque définitivement cette fenêtre dans ce navigateur. [[Fermer]] la masque uniquement jusqu'à ce que vous ouvriez à nouveau l'écran d'administration.",
    "care": "Cacher le mot ne change rien à vos chansons.",
    "like": "Comme une petite pancarte près de l'étagère : « Les produits que vous mettez ici se retrouvent sur le marché dans une minute ou deux »."
  },
  "help.albums.form": {
    "t": "Nouvel album / Édition de l'album",
    "what": "C'est ici que vous créez ou modifiez un album. Un album est un ensemble de vos chansons, dans l'ordre de votre choix, avec un titre, une pochette et une courte introduction.",
    "when": "Utilisez-le pour créer des albums, comme pour un véritable disque. Les albums apparaissent sur votre site, et les albums publics sont également visibles sur aimusiclist.com.",
    "click": "Rien n'est enregistré pendant que vous remplissez ce champ. Tout est enregistré en une seule fois lorsque vous appuyez sur [[Enregistrer l'album]]. [[Annuler]] ferme le champ et supprime les modifications.",
    "care": "Un album peut contenir jusqu'à 35 chansons. Pour être public, il doit contenir entre 6 et 35 chansons, et chaque chanson doit avoir son fichier audio. Vous pouvez enregistrer un album avec moins de chansons, mais il restera privé.",
    "like": "C'est comme assembler un disque : on choisit les chansons, on les met dans l'ordre et on y ajoute une pochette."
  },
  "help.albums.title": {
    "t": "Titre de l'album",
    "what": "Le nom de l'album. Les visiteurs le voient sur votre site, et sur aimusiclist.com si l'album est public.",
    "when": "Renseignez ce champ à chaque fois que vous créez un album. Vous ne pouvez pas enregistrer un album sans titre.",
    "click": "Il est enregistré lorsque vous appuyez sur [[Enregistrer l'album]]. Vous pouvez le modifier ultérieurement avec [[Modifier]] dans la liste des albums.",
    "care": "Jusqu'à 100 caractères.",
    "like": "C'est le grand nom imprimé sur le devant de la pochette du disque."
  },
  "help.albums.artist": {
    "t": "Artiste",
    "what": "À qui appartient cet album ? La première option est le nom de votre site. Les autres options correspondent aux noms que vous avez ajoutés dans la section « Autres artistes » de l’onglet « Informations sur le site ».",
    "when": "Laissez le nom du site si vous avez créé l'album sous votre nom habituel. Choisissez un autre nom s'il s'agit d'un projet parallèle ou d'un autre nom que vous utilisez.",
    "click": "L'album est enregistré lorsque vous cliquez sur [[Enregistrer l'album]]. Son nom apparaît sous le titre de l'album sur votre site et sur aimusiclist.com.",
    "care": "Si vous conservez la première option, l'album portera le même nom que votre site : lorsque vous modifiez le nom du site, l'artiste de l'album change également. Le nom d'un chanteur célèbre ne peut pas être utilisé.",
    "like": "C'est l'étiquette avec le nom du musicien qui a enregistré ce disque dans votre magasin."
  },
  "help.albums.desc": {
    "t": "Présentation de l'album",
    "what": "Quelques phrases à propos de l'album. Elles apparaissent juste en dessous du titre de l'album, sur votre site et sur aimusiclist.com.",
    "when": "Rédigez cette section si vous souhaitez expliquer aux auditeurs le thème de l'album, son processus de création ou son ambiance. Vous pouvez également la laisser vide.",
    "click": "L'enregistrement est sauvegardé lorsque vous appuyez sur [[Enregistrer l'album]]. Le nombre sous la case indique le nombre de caractères restants.",
    "care": "200 caractères maximum. Une fois cette limite atteinte, vous ne pouvez plus saisir de caractères. Un emoji compte pour un caractère. Vous pouvez utiliser des sauts de ligne, mais uniquement des mots simples (pas d'images ni de liens).",
    "like": "Il s'agit du petit texte imprimé au dos de la pochette du disque."
  },
  "help.albums.pub": {
    "t": "Quand faut-il le rendre public ?",
    "what": "Ici, vous choisissez la date de sortie de l'album : immédiatement, ou à une date et une heure de votre choix.",
    "when": "Choisissez [[Maintenant]] pour la plupart des albums. Choisissez une date et une heure de sortie, par exemple pour en informer vos fans en avant-première.",
    "click": "Votre choix est pris en compte lorsque vous appuyez sur [[Enregistrer l'album]]. L'album devient public uniquement s'il contient entre 6 et 35 chansons et que toutes possèdent des fichiers audio. Dans le cas contraire, il est enregistré comme privé.",
    "care": "Pour un nouvel album, cela se fait automatiquement. Lorsque vous modifiez un album, son statut public reste inchangé. Vous pouvez toujours l'activer ou le désactiver ultérieurement via le bouton correspondant dans la liste des albums.",
    "like": "C'est comme décider de la date de sortie d'un nouveau disque : le mettre en rayon aujourd'hui, ou à une date que vous avez entourée sur le calendrier."
  },
  "help.albums.pub_now": {
    "t": "Maintenant",
    "what": "L'album est rendu public dès que vous l'enregistrez.",
    "when": "Choisissez-le lorsque l'album est prêt et que vous souhaitez que les gens l'écoutent dès aujourd'hui.",
    "click": "Après avoir cliqué sur [[Enregistrer l'album]], un nouvel album contenant de 6 à 35 titres (tous avec leurs fichiers audio) est immédiatement publié. Il apparaît sur aimusiclist.com en une ou deux minutes. Si vous aviez programmé une date de publication, choisir « Maintenant » l'annule.",
    "care": "Si l'album contient moins de 6 titres, ou si un titre ne possède pas de fichier audio, il est enregistré comme privé. Le message affiché après l'enregistrement vous indique la raison de ce problème.",
    "like": "Vous mettez le nouveau disque en rayon dès qu'il est terminé."
  },
  "help.albums.pub_at": {
    "t": "À une date et une heure que je choisis",
    "what": "L'album attend et sera publié automatiquement à la date et à l'heure que vous aurez choisies.",
    "when": "Utilisez-le pour planifier une date de sortie, par exemple 20h vendredi prochain, afin de pouvoir informer les fans de l'heure à l'avance.",
    "click": "Une fenêtre affichant la date et l'heure s'ouvre. L'heure est celle du fuseau horaire de cet appareil. Après avoir cliqué sur [[Enregistrer l'album]], la liste affiche l'heure prévue. Avant cette heure, l'album est masqué sur votre site et sur aimusiclist.com. Environ une minute après, il apparaît sur les deux plateformes.",
    "care": "Choisissez une date ultérieure à maintenant, et au maximum 366 jours à l'avance. Pendant ce temps, les morceaux ne peuvent pas être rendus privés. L'album nécessite encore entre 6 et 35 morceaux avec leurs fichiers audio. Sur la version PHP, cela peut prendre jusqu'à 5 minutes environ.",
    "like": "C'est comme un magasin qui programme un réveil : quand il sonne, le nouveau disque se retrouve tout seul en vitrine."
  },
  "help.albums.cover": {
    "t": "Image de couverture",
    "what": "L'image carrée de l'album. Elle apparaît sur votre site et, pour les albums publics, sur aimusiclist.com.",
    "when": "Ajoutez-en une dès que possible. Les albums avec une pochette sont plus faciles à remarquer et à mémoriser. C'est facultatif, vous pouvez donc vous en passer.",
    "click": "Appuyez sur [[Choisir la couverture]] pour sélectionner une image et l'insérer dans un carré. La nouvelle couverture sera enregistrée avec l'album lorsque vous appuierez sur [[Enregistrer l'album]].",
    "care": "Il est enregistré sous forme d'une petite image de 200×200 pixels. Supprimer un album ne supprime que sa pochette, jamais ses morceaux.",
    "like": "C'est la pochette du disque : la première chose que les gens voient sur l'étagère."
  },
  "help.albums.pick": {
    "t": "Choisissez les morceaux (dans l'ordre)",
    "what": "Ici, vous ajoutez des morceaux à l'album. La partie gauche (en haut sur un téléphone) affiche vos morceaux. La partie droite (en bas sur un téléphone) affiche les morceaux déjà présents dans cet album, dans l'ordre de lecture.",
    "when": "Utilisez-le lorsque vous créez un album ou que vous modifiez ses morceaux. Il fonctionne parfaitement, même avec des centaines de titres.",
    "click": "Trouvez les morceaux à gauche, cochez-les, puis appuyez sur [[Ajouter la sélection →]]. Ils seront ajoutés à la fin de la liste de droite. Les morceaux de cet album disparaîtront de la liste de gauche. Aucune donnée ne sera enregistrée tant que vous n'aurez pas appuyé sur [[Enregistrer l'album]].",
    "care": "Jusqu'à 35 titres. Un titre peut figurer sur plusieurs albums ; une petite étiquette indique le nom de l'autre album. Les titres marqués « Pas d'audio » ne possèdent pas de fichier audio, et un album contenant un tel titre ne peut être rendu public.",
    "like": "Le côté gauche représente l'étagère de votre entrepôt. Le côté droit représente le disque que vous remplissez, chanson par chanson."
  },
  "help.albums.save": {
    "t": "Enregistrer l'album",
    "what": "Enregistre en une seule fois toutes les informations de l'album : titre, artiste, introduction, date de sortie, pochette et titres.",
    "when": "Appuyez dessus lorsque vous avez terminé de créer ou de modifier l'album.",
    "click": "Un message vous informe de l'état de l'album : public dès maintenant, public à la date et à l'heure choisies, ou enregistré comme privé car il nécessite entre 6 et 35 morceaux avec leurs fichiers audio. L'album apparaît ensuite dans la liste ci-dessous. Un album public est disponible sur aimusiclist.com en une ou deux minutes.",
    "care": "Un titre est requis. La date et l'heure choisies doivent être postérieures à l'heure actuelle. Certaines modifications peuvent être refusées, par exemple si elles laissent moins de 10 chansons publiques sur votre site ; le message rouge explique pourquoi.",
    "like": "C'est comme emballer le disque terminé et le ranger sur une étagère."
  },
  "help.albums.cancel": {
    "t": "Annuler",
    "what": "Ferme la boîte de l'album sans enregistrer.",
    "when": "Utilisez-le lorsque vous changez d'avis ou que vous avez fait une bêtise et que vous voulez recommencer.",
    "click": "La boîte se referme aussitôt. Tout ce que vous avez modifié depuis son ouverture est perdu, y compris la nouvelle pochette que vous aviez choisie. L'album reste tel qu'il était enregistré auparavant.",
    "care": "Il n'y a pas de question de confirmation. Les modifications non enregistrées sont perdues.",
    "like": "Vous avez remis le disque à moitié fait dans le tiroir sans changer celui qui était sur l'étagère."
  },
  "help.albums.new": {
    "t": "Nouvel album",
    "what": "Ouvre une boîte d'album vide pour que vous puissiez créer un nouvel album.",
    "when": "Appuyez dessus lorsque vous souhaitez regrouper certaines de vos chansons dans un album.",
    "click": "La fenêtre d'album s'ouvre au-dessus de la liste. Aucune modification ne sera effectuée tant que vous n'aurez pas cliqué sur [[Enregistrer l'album]] dans cette fenêtre.",
    "care": "Ce bouton est masqué lorsqu'une fenêtre d'album est ouverte. Veuillez d'abord enregistrer ou annuler.",
    "like": "Vous sortez une nouvelle pochette de disque vide."
  },
  "help.albums.list": {
    "t": "Mes albums",
    "what": "Tous les albums que vous avez créés sont affichés sur votre site. Les albums dont l'option est activée apparaissent également sur aimusiclist.com, et leurs morceaux y sont aussi accessibles au public.",
    "when": "Cliquez ici pour voir quels albums sont publics, pour modifier un album ou pour en supprimer un.",
    "click": "Chaque ligne comporte un interrupteur public, le titre, le nombre de chansons et des boutons [[Modifier]] / [[Supprimer]].",
    "care": "Un album prévu pour une date ultérieure est masqué partout, même sur votre site, jusqu'à sa sortie. Tant qu'un album est public (ou en attente de publication), il est impossible de rendre ses titres privés un par un.",
    "like": "C'est le rayon des disques vinyles de votre magasin. Le sélecteur détermine quels disques seront également mis en vente sur le marché principal."
  },
  "help.albums.pub_switch": {
    "t": "Public sur aimusiclist",
    "what": "Le bouton dans chaque ligne détermine si l'album est également disponible sur aimusiclist.com. L'album est de toute façon présent sur votre site.",
    "when": "Activez cette option pour les albums que vous souhaitez faire découvrir à un plus large public. Désactivez-la pour retirer un album d'aimusiclist.com.",
    "click": "L'enregistrement est instantané. Activé : l'album et tous ses titres apparaissent sur aimusiclist.com en une ou deux minutes. Désactivé : ils disparaissent. Les titres que vous avez rendus publics individuellement restent publics.",
    "care": "Un bouton grisé indique que l'album doit contenir entre 6 et 35 titres, tous accompagnés de fichiers audio ; appuyez dessus pour en savoir plus. Vous pouvez refuser de le désactiver si moins de 10 titres resteraient publics sur votre site.",
    "like": "C'est vous qui décidez quels disques de votre magasin seront également mis en vente sur les étagères des grandes surfaces."
  },
  "help.albums.col_title": {
    "t": "Titre de l'album",
    "what": "Cette colonne affiche le titre de chaque album et, en dessous, son artiste. De petites étiquettes peuvent apparaître à côté.",
    "when": "Cliquez ici pour vérifier en un coup d'œil l'état d'un album.",
    "click": "« Publication publique… » signifie que l’album attend la date et l’heure que vous avez définies. « 6 à 35 pistes audio manquantes » signifie qu’il ne peut pas encore être publié : ajoutez ou supprimez des morceaux, ou téléchargez les fichiers audio manquants.",
    "like": "C'est l'étiquette apposée sur le côté de chaque disque sur l'étagère."
  },
  "help.albums.col_count": {
    "t": "Nombre de chansons",
    "what": "Combien de chansons contient chaque album ?",
    "when": "Consultez cette page pour savoir si un album peut être rendu public. Il doit contenir entre 6 et 35 chansons.",
    "click": "Si le nombre est inférieur à 6, appuyez sur [[Modifier]] et ajoutez des chansons. Un album peut contenir jusqu'à 35 titres.",
    "like": "C'est comme compter les chansons listées au dos du disque."
  },
  "help.albums.row_buttons": {
    "t": "Modifier / Supprimer",
    "what": "Les boutons situés à la fin de chaque ligne. [[Modifier]] ouvre l'album pour le modifier. [[Supprimer]] supprime l'album.",
    "when": "Utilisez le bouton Modifier pour changer les morceaux, leur ordre, le titre, la pochette ou la date de sortie. Utilisez le bouton Supprimer si vous ne souhaitez plus conserver l'album.",
    "click": "L'option « Modifier » ouvre l'encadré de l'album en haut de la page. L'option « Supprimer » vous demande confirmation, puis supprime immédiatement l'album et sa pochette. Les morceaux restent sur votre site.",
    "care": "La suppression est irréversible. La suppression d'un album public peut être refusée si moins de 10 titres resteraient publics sur votre site.",
    "like": "L'édition consiste à prendre un disque sur l'étagère pour le réparer. La suppression, quant à elle, consiste à jeter la pochette et la liste des titres ; les chansons retournent à l'entrepôt."
  },
  "help.albums.pick_search": {
    "t": "Rechercher des titres de chansons",
    "what": "Saisissez une partie du titre d'une chanson pour n'afficher à gauche que les chansons correspondantes.",
    "when": "Utilisez-le lorsque vous avez beaucoup de chansons et que vous connaissez le nom de celle que vous voulez.",
    "click": "La liste se met à jour au fur et à mesure que vous tapez. La taille des lettres n'a pas d'importance. Effacez le champ pour afficher à nouveau toutes les chansons.",
    "care": "Il ne prend en compte que les titres des chansons, et non l'artiste ou les paroles.",
    "like": "C'est comme demander au magasinier : « Quel est le titre de la chanson… ? »"
  },
  "help.albums.pick_genre": {
    "t": "Genre",
    "what": "Affiche à gauche uniquement les chansons d'un genre principal. La liste ne contient que les genres principaux utilisés par vos chansons.",
    "when": "Utilisez-le si vous souhaitez un album d'un seul style, par exemple uniquement des chansons R&B.",
    "click": "La liste de gauche se met à jour instantanément. Elle indique si un morceau appartient à ce genre ou à un sous-genre plus détaillé. Sélectionnez « Tous les genres » pour tout afficher.",
    "care": "Cela vous aide uniquement à trouver des chansons. Cela ne modifie pas le genre des chansons.",
    "like": "C'est comme se rendre dans un rayon de l'entrepôt, le rayon R&B."
  },
  "help.albums.pick_sort": {
    "t": "Commande",
    "what": "Modifie l'ordre de vos chansons à gauche : des plus récentes aux plus anciennes, ou par titre.",
    "when": "Utilisez la section « Nouveautés » pour trouver les chansons que vous venez de créer. Utilisez le tri par titre (de A à Z) pour rechercher un nom.",
    "click": "La liste de gauche est immédiatement triée. Cela ne modifie pas l'ordre à l'intérieur de l'album ; celui-ci est défini à droite.",
    "like": "C'est comme ranger les étagères d'un entrepôt par date ou par nom."
  },
  "help.albums.pick_all": {
    "t": "Sélectionnez tout ce qui est affiché",
    "what": "Vérifie immédiatement toutes les chansons correspondant à votre recherche et à votre genre. Le nombre affiché indique le nombre de titres disponibles.",
    "when": "Utilisez-le après avoir réduit votre liste, par exemple pour sélectionner toutes vos chansons d'un même genre en une seule fois.",
    "click": "Toutes les chansons correspondantes sont cochées, même celles qui se trouvent plus bas dans la liste. Appuyez de nouveau (l'icône indique maintenant « Effacer la sélection ») pour les décocher. Les chansons ne sont pas encore ajoutées ; appuyez sur [[Ajouter la sélection →]] ensuite.",
    "care": "Un album peut contenir jusqu'à 35 chansons. Si vous en sélectionnez davantage, seules les premières qui peuvent être ajoutées seront prises en compte.",
    "like": "C'est comme dire « tout ce qui se trouve sur cette étagère, s'il vous plaît » au lieu de désigner chaque article."
  },
  "help.albums.pick_add": {
    "t": "Ajouter la sélection →",
    "what": "Ajoute les morceaux que vous avez enregistrés à l'album. Le nombre indique le nombre de morceaux enregistrés.",
    "when": "Appuyez dessus après avoir vérifié les chansons à gauche.",
    "click": "Les morceaux sélectionnés sont ajoutés à la fin de la liste de droite, dans l'ordre de la liste de gauche. Ils disparaissent de cette dernière. Vous pouvez modifier l'ordre dans la liste de droite. L'album est enregistré uniquement lorsque vous appuyez sur [[Enregistrer l'album]].",
    "care": "Le bouton est grisé si aucune case n'est cochée ou si l'album contient déjà 35 titres. Si certains titres ne peuvent pas être inclus, un message vous indique combien il en manque.",
    "like": "Vous transportez les chansons que vous avez choisies sur les étagères de l'entrepôt et vous les enregistrez sur le disque."
  },
  "help.albums.pick_recent": {
    "t": "Ajouter mon dernier",
    "what": "Ajoute vos chansons les plus récemment téléchargées en une seule étape. Vous choisissez le nombre dans la petite case numérique (de 1 à 35, 10 au départ).",
    "when": "Utilisez-le lorsque vous venez de télécharger un lot de nouvelles chansons et que vous souhaitez les regrouper dans un seul album.",
    "click": "Les morceaux les plus récents, dont le fichier audio est disponible mais qui ne figurent pas encore dans cet album, sont placés à la fin de la liste de droite, du plus récent au plus ancien. Vos choix de recherche et de genre à gauche sont sans effet. Aucun enregistrement n'est effectué tant que vous n'avez pas cliqué sur [[Enregistrer l'album]].",
    "care": "Les morceaux sans fichier audio sont ignorés. L'album ne peut contenir que 35 titres au maximum. Le bouton est grisé lorsque l'album est plein.",
    "like": "C'est comme dire « donnez-moi les 10 derniers disques qui sont arrivés à l'entrepôt »."
  },
  "help.albums.picked": {
    "t": "Dans cet album",
    "what": "Voici les titres de cet album, dans l'ordre de leur lecture. Le nombre de titres est indiqué à côté. Il devient rouge s'il n'est pas compris entre 6 et 35.",
    "when": "Utilisez-le pour vérifier les chansons et définir leur ordre.",
    "click": "Maintenez la touche ⠿ enfoncée et faites glisser un morceau vers le haut ou vers le bas, ou utilisez ▲ ▼. ✕ permet de retirer un morceau de l'album (le morceau reste sur votre site). Les modifications sont enregistrées lorsque vous appuyez sur [[Enregistrer l'album]].",
    "care": "Un album public doit contenir entre 6 et 35 titres, tous accompagnés de fichiers audio. Un titre marqué « Aucun audio » empêche sa publication. Si un album est déjà public, il est impossible de l'enregistrer avec moins de 6 titres.",
    "like": "Il s'agit de la liste des titres au dos du disque : chanson 1, chanson 2, chanson 3…"
  },
  "help.albums.pick_clear": {
    "t": "Supprimer tout",
    "what": "Supprime toutes les chansons de cet album en une seule fois, vous permettant ainsi de recommencer à choisir.",
    "when": "Utilisez-le lorsque vous souhaitez recommencer la liste des chansons.",
    "click": "Il vous pose d'abord la question. Ensuite, la liste de droite se vide et les morceaux retournent dans la liste de gauche. Rien n'est enregistré tant que vous n'avez pas cliqué sur [[Enregistrer l'album]] ; appuyez plutôt sur [[Annuler]] pour conserver l'album tel quel.",
    "care": "Les chansons elles-mêmes ne sont pas supprimées. Elles restent sur votre site.",
    "like": "Vous retirez toutes les chansons du disque et vous les remettez sur les étagères de l'entrepôt."
  },
  "help.albums.cover_pick": {
    "t": "Choisissez la couverture",
    "what": "Ouvre les photos de votre appareil pour vous permettre de choisir une coque. Une petite fenêtre vous permet ensuite de choisir la partie à conserver.",
    "when": "Appuyez dessus pour ajouter une couverture ou pour changer celle que vous avez.",
    "click": "Après avoir cliqué sur [[Enregistrer l'image]] dans la fenêtre, la nouvelle image de couverture s'affiche ici avec la mention « Nouvelle image de couverture ». Elle n'est pas encore enregistrée. L'enregistrement se fait lorsque vous cliquez sur [[Enregistrer l'album]]. Le bouton [[Annuler]] situé à côté permet de supprimer la nouvelle image.",
    "care": "Vous pouvez choisir des images JPG, PNG, WebP ou GIF de 2 Mo maximum. Votre image originale ne sera pas téléchargée, seule une copie réduite le sera.",
    "like": "Vous choisissez une photo et vous la recadrez pour qu'elle s'adapte à la pochette du disque."
  },
  "help.albums.cover_delete": {
    "t": "Retirer le couvercle",
    "what": "L'image de couverture de cet album est retirée. L'album et ses chansons restent inchangés.",
    "when": "Utilisez-le lorsque vous ne souhaitez plus qu'une photo figure dans l'album, par exemple pendant que vous en créez un nouveau.",
    "click": "Il vous demande d'abord votre accord. Si vous acceptez, la couverture est immédiatement retirée, sans avoir à appuyer sur [[Enregistrer l'album]]. Les visiteurs voient alors un carré vide.",
    "care": "Cette action est irréversible. Pour rétablir la couverture, sélectionnez à nouveau l'image.",
    "like": "Vous retirez la pochette du disque. Le disque à l'intérieur est toujours là."
  },
  "help.skins.use": {
    "t": "Utilisez ce skin",
    "what": "Applique ce thème installé à votre site. Le thème que vous utilisiez précédemment est conservé.",
    "when": "Lorsque vous souhaitez que les visiteurs voient votre site avec ce thème.",
    "click": "La modification est enregistrée instantanément. Les visiteurs verront le nouveau thème en une trentaine de secondes. Pour revenir au thème précédent, appuyez sur [[Retour au thème précédent]] ou choisissez un autre thème.",
    "care": "Le thème utilisé ne comporte pas de bouton ici, car il est déjà activé. Vos chansons et vos menus restent inchangés.",
    "like": "C'est comme prendre une tenue dans sa garde-robe et la mettre en vente dans sa boutique."
  },
  "help.skins.update": {
    "t": "Mise à jour",
    "what": "Le créateur du thème de galerie que vous avez installé a créé une nouvelle version. Ce bouton permet de l'obtenir. Vous le verrez à côté du badge **Nouvelle version**.",
    "when": "Lorsque vous souhaitez obtenir la toute dernière version de ce thème, avec ses correctifs.",
    "click": "La nouvelle version est vérifiée et remplace l'ancienne. Le thème de votre site reste inchangé. Si ce thème est utilisé, les visiteurs verront la nouvelle version en une trentaine de secondes.",
    "care": "Il s'agit uniquement du design du thème. Cela n'a rien à voir avec la mise à jour de votre site. Les thèmes que vous avez vous-même importés n'affichent jamais ce bouton.",
    "like": "Un peu comme un tailleur qui vous envoie une copie mieux ajustée d'un vêtement que vous possédez déjà."
  },
  "help.skins.download": {
    "t": "Télécharger (pour modifier)",
    "what": "Enregistre une copie d'un thème intégré (clair ou foncé) sur votre ordinateur. Vous pouvez l'utiliser comme base pour créer votre propre thème.",
    "when": "Pour créer votre propre thème, envoyez-en une copie à un chat IA gratuit (ChatGPT, Claude) et demandez-lui de modifier les couleurs ou la mise en page.",
    "click": "Votre navigateur enregistre le fichier de thème. Rien ne change sur votre site.",
    "care": "Les thèmes intégrés ne peuvent pas être modifiés directement. Téléchargez votre copie modifiée sous un nouveau nom dans **Télécharger un thème**, puis appuyez sur [[Utiliser ce thème]].",
    "like": "Comme emporter chez soi un patron de couture pour pouvoir confectionner sa propre tenue."
  },
  "help.skins.delete": {
    "t": "Supprimer",
    "what": "Supprime un thème que vous avez importé ou ajouté depuis la galerie. Les thèmes intégrés (Clair, Sombre) ne peuvent pas être supprimés ; ils affichent donc [[Télécharger (pour modifier)]].",
    "when": "Lorsque vous n'avez plus besoin d'un skin, ou que vous avez atteint 20 skins et que vous souhaitez faire de la place pour un nouveau.",
    "click": "Il vous est demandé de confirmer. Le thème disparaît ensuite immédiatement. S'il s'agissait du thème utilisé, votre site passe en mode clair.",
    "care": "Cette action est irréversible. Vous pouvez ajouter à nouveau un thème de la galerie depuis **Parcourir**. Un thème que vous avez importé vous-même est perdu, sauf si vous avez conservé le fichier.",
    "like": "C'est comme jeter une tenue de l'armoire. Gardez votre patron si vous pensez pouvoir le réutiliser."
  },
  "help.skins.revert": {
    "t": "Retour à l'apparence précédente",
    "what": "Permet de rétablir le thème que vous utilisiez précédemment. Le bouton affiche le nom de ce thème.",
    "when": "Quand vous avez essayé un nouveau skin et que vous avez préféré l'ancien.",
    "click": "La modification est enregistrée instantanément et les visiteurs la voient en une trentaine de secondes. Le thème que vous laissez devient le thème précédent ; appuyer à nouveau permet de revenir en arrière.",
    "care": "Seule la dernière étape est conservée. Si le thème précédent a été supprimé, ce bouton disparaît.",
    "like": "C'est comme enlever sa tenue neuve et remettre celle d'hier."
  },
  "help.skins.title": {
    "t": "Peaux",
    "what": "L'habillage de votre site web, c'est comme sa tenue : couleurs, polices et mise en page. Le modifier n'affecte jamais vos chansons, vos albums ni vos paramètres.",
    "when": "Venez ici lorsque vous souhaitez modifier l'apparence de votre site ou lorsqu'une nouvelle version du thème que vous utilisez est disponible.",
    "click": "Ceci n'est qu'un titre. Les boutons ci-dessous permettent de modifier le thème. Votre site propose toujours deux thèmes intégrés, **Clair** et **Sombre**, et vous pouvez en ajouter jusqu'à 20.",
    "care": "Les visiteurs verront le nouveau thème en une trentaine de secondes. Si vous supprimez le thème actuel, votre site reprendra son apparence claire.",
    "like": "C'est comme repeindre les étagères de votre magasin. Les disques sur les étagères restent exactement les mêmes."
  },
  "help.skins.view": {
    "t": "Installé / Parcourir",
    "what": "Deux vues de l'onglet « Thèmes ». **Installés** affiche les thèmes déjà présents sur votre site. **Parcourir** affiche la galerie de thèmes, où vous pouvez essayer et ajouter des thèmes créés par d'autres utilisateurs.",
    "when": "Utilisez « Installé » pour changer, mettre à jour ou supprimer vos thèmes et pour en importer de nouveaux. Utilisez « Parcourir » pour trouver un nouveau thème.",
    "click": "Cela modifie uniquement l'affichage. Rien ne change sur votre site. La liste des thèmes est chargée lors de la première ouverture de la page de navigation.",
    "like": "Votre propre garde-robe est installée. Le magasin de vêtements d'à côté est à découvrir."
  },
  "help.skins.upload": {
    "t": "Télécharger un skin",
    "what": "Ajoute un thème personnalisé. Un thème est un fichier web (.html) respectant le guide d'utilisation. Un service de chat IA gratuit peut en créer un pour vous.",
    "when": "Lorsque vous souhaitez un style qu'aucun thème de galerie ne propose, un bon point de départ est un thème intégré de [[Télécharger (pour modifier)]].",
    "click": "Saisissez le nom et le fichier, puis appuyez sur [[Téléverser un skin]]. Le skin est ajouté à votre liste, mais n'est pas encore appliqué. Appuyez sur [[Utiliser ce skin]] pour le porter.",
    "care": "Le fichier est d'abord vérifié. Il doit peser 100 Ko ou moins, contenir une seule fois le menu, le contenu et l'emplacement du lecteur, et ne pas masquer la mention **Propulsé par aimusiclist.com**. Le transfert de code et d'images provenant d'autres sites web est interdit.",
    "like": "Comme coudre soi-même ses vêtements et les ranger dans sa garde-robe."
  },
  "help.skins.upload_name": {
    "t": "Nom de la peau",
    "what": "Le nom de votre skin dans la liste des skins. Utilisez de 1 à 32 lettres minuscules (a–z), des chiffres, - ou _.",
    "when": "Saisissez-le avant de télécharger. Choisissez un nom court et facile à retenir, comme mon-bleu.",
    "click": "Rien n'est enregistré tant que vous n'avez pas appuyé sur [[Télécharger le skin]].",
    "care": "Les majuscules et les espaces ne sont pas autorisés. Les thèmes **clair** et **foncé** sont réservés aux thèmes intégrés. Si vous utilisez un nom que vous possédez déjà, l'ancien thème sera remplacé. Si le thème utilisé est remplacé, les visiteurs verront le nouveau en une trentaine de secondes.",
    "like": "Comme l'étiquette nominative qu'on coud sur un vêtement."
  },
  "help.skins.upload_file": {
    "t": "Fichier de peau",
    "what": "Le fichier de thème se trouve sur votre ordinateur. Il doit s'agir d'un fichier .html de 100 Ko ou moins.",
    "when": "Choisissez cette option après avoir créé ou modifié un skin, par exemple avec un chat IA gratuit.",
    "click": "Il ne fait que sélectionner le fichier. Rien n'est envoyé tant que vous n'avez pas cliqué sur [[Téléverser le skin]].",
    "care": "Un seul fichier. Les images intégrées au thème ne doivent pas provenir d'autres sites web. Si le fichier est trop volumineux, demandez à l'IA de le réduire.",
    "like": "Comme prendre en main la tenue finie avant de la ranger dans l'armoire."
  },
  "help.skins.upload_btn": {
    "t": "Télécharger le skin",
    "what": "Envoie votre fichier de skin et le vérifie.",
    "when": "Après avoir saisi le nom et choisi le fichier.",
    "click": "En cas de problème, un message rouge indique la correction à apporter et aucune donnée n'est enregistrée. Si l'opération réussit, la mention **Enregistré** apparaît et le thème figure dans votre liste. Il ne sera appliqué à votre site que lorsque vous cliquerez sur le bouton [[Utiliser ce thème]].",
    "care": "Vous pouvez conserver jusqu'à 20 thèmes, en plus des thèmes clair et foncé. Supprimez-en un si votre collection est pleine. En téléchargeant un nouveau thème par-dessus celui de la galerie, vous le personnalisez et il ne recevra plus de nouvelles versions.",
    "like": "Comme un inspecteur de magasin vérifiant la tenue avant de la ranger dans l'armoire."
  },
  "help.skins.gallery": {
    "t": "Galerie de peau",
    "what": "Une étagère partagée de skins prêts à l'emploi. Chaque fiche présente une image, le créateur, la couleur (claire ou foncée) et la version. Les skins les plus récents apparaissent en premier.",
    "when": "Envie d'un nouveau look en un clic, sans rien faire ?",
    "click": "Appuyez sur une image ou sur [[Aperçu]] pour tester un thème sur votre site. Appuyez sur [[Appliquer]] pour l'ajouter et le mettre en place.",
    "care": "Si une fiche indique **Mettez à jour votre site pour utiliser celui-ci**, cela signifie que ce thème nécessite d'abord une version plus récente de votre site.",
    "like": "Comme un magasin de vêtements où vous pouvez essayer les tenues avant de les emporter chez vous."
  },
  "help.skins.gal_reload": {
    "t": "Rafraîchir",
    "what": "Recharge la liste de la galerie de skins.",
    "when": "Il se peut que de nouveaux skins soient arrivés ou que la liste ne se soit pas chargée.",
    "click": "La liste se recharge dans quelques instants. Les nouvelles versions de vos thèmes installés sont également vérifiées. Rien ne change sur votre site.",
    "care": "Si vous voyez **Nous ne pouvons pas charger la liste des skins pour le moment.**, patientez un peu et appuyez sur [[Réessayer]].",
    "like": "Comme demander au magasin de vêtements son dernier catalogue."
  },
  "help.skins.gal_filter": {
    "t": "Filtre de peau",
    "what": "Boutons permettant d'afficher uniquement certains thèmes : **Tous**, **Clair** (fond clair), **Sombre** (fond sombre) et des mots clés décrivant un style.",
    "when": "Lorsque la galerie propose de nombreux skins et que vous recherchez une ambiance particulière.",
    "click": "Seules les cartes affichées changent. Appuyez sur **Tout** pour tout voir à nouveau. Aucune donnée n'est sauvegardée.",
    "care": "Un #mot apparaît uniquement si au moins deux thèmes l'utilisent. Si aucune correspondance n'est trouvée, vous verrez **Aucun thème ne correspond à ce filtre.**",
    "like": "Comme les panneaux dans un magasin de vêtements : vestes par ici, chemises par là."
  },
  "help.skins.gal_preview": {
    "t": "Aperçu",
    "what": "Affiche votre site, avec vos chansons et votre profil, sous ce thème. Vous pouvez également cliquer sur l'image du thème.",
    "when": "Avant d'appliquer un thème, pour voir à quoi il ressemble réellement sur votre site.",
    "click": "Une fenêtre s'ouvre. Aucune donnée n'est enregistrée et les visiteurs ne voient rien. Fermez-la avec [[Fermer]] ou la touche Échap. Vous pouvez appliquer le thème depuis cette même fenêtre.",
    "care": "Les chansons ne sont pas lues et les publicités ne s'affichent pas en prévisualisation. Si un message indique **Mettez à jour votre site pour utiliser celui-ci.**, aucune prévisualisation n'est disponible tant que votre site n'est pas mis à jour.",
    "like": "Comme une cabine d'essayage : vous essayez la tenue, et vous pouvez encore la remettre."
  },
  "help.skins.gal_apply": {
    "t": "Appliquer / Appliquer ce skin",
    "what": "Ajoute ce thème de galerie à votre site et l'applique en un clic. Vous le trouverez sur chaque fiche de thème et dans la fenêtre d'aperçu.",
    "when": "Quand vous aimez un skin et que vous voulez que les visiteurs le voient.",
    "click": "Le thème est vérifié, ajouté à **Installé** et appliqué immédiatement. Les visiteurs le voient en une trentaine de secondes. Pour annuler, appuyez sur [[Retour au thème précédent]].",
    "care": "Vous pouvez conserver jusqu'à 20 thèmes, en plus des thèmes clair et foncé. Si vous avez importé votre propre thème portant le même nom, vous serez contacté avant son remplacement. Un thème marqué **Mettez à jour votre site pour utiliser celui-ci** ne peut pas encore être appliqué.",
    "like": "Comme acheter une tenue en magasin et sortir de chez soi avec."
  },
  "help.skins.pv_mode": {
    "t": "Ordinateur de bureau / Téléphone",
    "what": "Modifie la taille de l'aperçu. **Ordinateur** affiche un écran d'ordinateur large. **Téléphone** affiche un écran de téléphone étroit.",
    "when": "De nombreux visiteurs écoutent sur leur téléphone, alors vérifiez les deux avant de postuler.",
    "click": "Seule la taille de l'aperçu change. Aucune donnée n'est enregistrée.",
    "like": "C'est comme regarder sa vitrine depuis la rue, puis de près."
  },
  "help.site.artist_del": {
    "t": "Supprimer",
    "what": "Retire ce nom de la liste des autres artistes.",
    "when": "Quand vous ne souhaitez plus choisir ce nom pour vos nouvelles chansons.",
    "click": "Le système vous demande d'abord votre choix, puis l'enregistrement est immédiat. Les morceaux portant déjà ce nom le conservent. Seule l'option de sélection des nouveaux morceaux disparaît.",
    "care": "Pour changer l'artiste d'une ancienne chanson, modifiez la chanson elle-même. Vous pourrez ajouter à nouveau le même nom ultérieurement.",
    "like": "Sortir une étiquette nominative du tiroir. Les chansons qui portent déjà cette étiquette la gardent."
  },
  "help.site.info": {
    "t": "Informations sur le site",
    "what": "Cette fiche contient les informations essentielles concernant votre site : son nom, le nom de l’artiste, la langue principale, une brève description, votre pays et le texte du bas.",
    "when": "Remplissez ce champ une seule fois, au début. Revenez-y lorsque vous voudrez renommer votre site ou modifier sa présentation.",
    "click": "Aucune donnée n'est enregistrée pendant la saisie. Appuyez sur [[Enregistrer les informations du site]] en bas de la fiche pour tout enregistrer d'un coup. Votre site est mis à jour instantanément et aimusiclist.com reçoit son nouveau nom et sa nouvelle description peu après.",
    "care": "Les autres cartes de cet onglet (réseaux sociaux, nombre de lectures, mentions « J’aime », images…) s’enregistrent automatiquement. Seule cette carte nécessite l’utilisation du bouton « Enregistrer ». Si vous quittez l’onglet sans cliquer dessus, votre saisie sera perdue.",
    "like": "Voici le formulaire d'enregistrement du magasin : l'enseigne au-dessus de la porte, une brève présentation et l'adresse du magasin."
  },
  "help.site.name": {
    "t": "Nom du site",
    "what": "Le nom de votre site (1 à 40 caractères). Il s'agit du titre principal de votre site, affiché sur aimusiclist.com sous les titres de vos chansons. Les visiteurs cliquent dessus pour accéder à votre site.",
    "when": "Choisissez-le dès le départ. Ne le changez que si vous souhaitez vraiment un nouveau nom, car c'est grâce à lui que vos auditeurs vous reconnaîtront.",
    "click": "Les informations sont enregistrées lorsque vous appuyez sur [[Enregistrer les informations du site]]. Si votre nom d'artiste était identique à l'ancien nom du site, il sera également mis à jour.",
    "care": "Vous ne pouvez pas utiliser le nom d'un chanteur ou d'un groupe célèbre, ni un nom qui y ressemble. L'enregistrement est bloqué si le nom correspond à un nom déjà répertorié. Si un tel nom passe entre les mailles du filet et que nous le découvrons, votre site pourra être supprimé d'aimusiclist.",
    "like": "C'est l'enseigne du magasin. Les clients du grand marché (aimusiclist.com) la consultent pour trouver votre boutique."
  },
  "help.site.artist": {
    "t": "Nom de l'artiste",
    "what": "Le nom de la personne ou du groupe qui compose la musique présente sur ce site. Il peut être identique au nom du site ou différent.",
    "when": "Remplissez ce champ si votre nom d'artiste musical est différent du nom de votre site. Par exemple, votre site s'appelle « My Music Room » mais vous chantez sous le nom de Luna.",
    "click": "Ces informations sont enregistrées lorsque vous cliquez sur [[Enregistrer les informations du site]]. Si elles diffèrent du nom du site, elles apparaîtront sous ce dernier sur votre page d'accueil. aimusiclist.com les reçoit également en une ou deux minutes.",
    "care": "40 caractères maximum. Vous ne pouvez pas utiliser le nom d'un chanteur ou d'un groupe célèbre, ni un nom qui y ressemble. Si vous modifiez le nom du site et que ce champ contient encore l'ancien nom, il sera modifié en même temps que le nouveau.",
    "like": "L'enseigne indique le nom du magasin. Voici le badge du musicien qui y travaille."
  },
  "help.site.lang": {
    "t": "Langue principale de votre site",
    "what": "La langue utilisée par votre site lorsqu'il ne parvient pas à déterminer la langue souhaitée par un visiteur. aimusiclist.com reçoit également cette information.",
    "when": "Choisissez la langue que la plupart de vos auditeurs lisent, ou celle dans laquelle vous rédigez vos descriptions.",
    "click": "Ces informations sont enregistrées lorsque vous cliquez sur [[Enregistrer les informations du site]]. Chaque visiteur verra votre site dans la langue de son navigateur si celle-ci est disponible, ou dans la langue qu'il a choisie. Ce n'est que si aucune des deux ne fonctionne que la version originale s'affichera.",
    "care": "Cela ne modifie pas la langue de cette page d'administration. Cela ne traduit pas non plus les titres ou descriptions des chansons que vous avez saisies.",
    "like": "C'est la langue qui figure sur le panneau d'accueil du magasin. Les clients qui parlent une autre langue peuvent néanmoins demander un menu traduit dans leurs propres mots."
  },
  "help.site.desc": {
    "t": "Brève description",
    "what": "Une brève présentation de vous et de votre musique (200 caractères maximum). Elle apparaîtra sur votre site et sera envoyée à aimusiclist.com avec le nom de votre site.",
    "when": "Décrivez en une ou deux phrases le type de musique que vous composez. Vous pouvez les modifier à votre guise.",
    "click": "Les informations sont enregistrées lorsque vous cliquez sur [[Enregistrer les informations du site]]. aimusiclist.com reçoit le nouveau texte peu après. Laissez ce champ vide pour n'afficher aucune description.",
    "care": "Soyez bref et simple. N'utilisez pas le nom d'un chanteur célèbre pour vous décrire, par exemple « le nouveau [nom célèbre] ».",
    "like": "C'est la petite carte collée sous l'enseigne du magasin qui indique aux passants ce que vous vendez."
  },
  "help.site.footer": {
    "t": "Texte du bas",
    "what": "Une seule ligne de texte, de 200 caractères maximum, tout en bas de chaque page de votre site. Texte uniquement — sans images ni liens.",
    "when": "Utilisez-le pour une courte note, comme une mention de droit d'auteur ou un message de remerciement.",
    "click": "Ces informations sont enregistrées lorsque vous cliquez sur [[Enregistrer les informations du site]] et s'affichent immédiatement sur votre site. Si vous laissez ce champ vide, votre site affichera « © cette année + nom du site ». Si vous saisissez {year}, le numéro de l'année en cours s'affichera seul.",
    "care": "Les sauts de ligne sont remplacés par des espaces. La mention « Propulsé par aimusiclist.com » reste toujours affichée ; cette case ne peut pas la supprimer.",
    "like": "Il s'agit de la petite ligne imprimée en bas du ticket de caisse du magasin."
  },
  "help.site.save": {
    "t": "Enregistrer les informations du site",
    "what": "Enregistre en une seule fois toutes les informations de la fiche d'informations du site : nom, langue, description, pays, texte de bas de page et informations supplémentaires.",
    "when": "Appuyez dessus après avoir modifié quoi que ce soit sur cette carte.",
    "click": "Votre site affiche les modifications immédiatement. aimusiclist.com prend alors le nouveau nom et la nouvelle description. En cas de problème, un message rouge apparaît à côté du bouton et aucune modification n'est enregistrée.",
    "care": "L'enregistrement est bloqué si le nom que vous avez modifié correspond à celui d'un musicien célèbre. Choisissez alors un autre nom et appuyez de nouveau.",
    "like": "Il s'agit du tampon apposé sur le formulaire d'enregistrement du magasin. Tant qu'il n'est pas tamponné, les modifications ne sont que des brouillons."
  },
  "help.site.artists": {
    "t": "Autres artistes",
    "what": "Voici une liste de noms d'artistes supplémentaires que vous pouvez choisir pour une chanson. Si vous ne choisissez rien, la chanson utilisera le nom de votre site comme artiste.",
    "when": "Utilisez cette méthode lorsqu'un site propose des chansons sous différents titres. Par exemple, si vous composez également des chansons en duo ou dans le cadre d'un projet parallèle.",
    "click": "Les noms que vous ajoutez ici apparaissent dans la sélection des artistes lorsque vous importez ou modifiez un morceau ou un album. L'artiste du morceau est affiché sur votre site et sur aimusiclist.com.",
    "care": "Vous pouvez enregistrer jusqu'à 20 noms. Lorsque la liste est pleine, le bouton Ajouter devient grisé. Les noms de chanteurs célèbres ne peuvent pas être utilisés.",
    "like": "Une seule boutique, mais plusieurs étiquettes nominatives dans le tiroir. Pour chaque chanson, on épingle l'étiquette de son compositeur."
  },
  "help.site.artist_add": {
    "t": "Ajouter",
    "what": "Ajoute le nom que vous avez saisi à la liste des autres artistes.",
    "when": "Saisissez un nouveau nom d'artiste dans la case de gauche, puis appuyez dessus.",
    "click": "L'enregistrement est immédiat. Vous pourrez désormais choisir ce nom lors de la mise en ligne ou de la modification de vos morceaux.",
    "care": "60 caractères maximum. Les noms déjà présents dans la liste ou identiques à celui de votre site ne seront pas ajoutés. Les noms de chanteurs ou de groupes célèbres sont refusés.",
    "like": "Je fabrique une nouvelle étiquette nominative et la range dans le tiroir."
  },
  "help.site.account": {
    "t": "Compte administrateur",
    "what": "L'adresse e-mail et le mot de passe que vous utilisez pour vous connecter à cet écran d'administration. La ligne en haut affiche votre adresse e-mail actuelle.",
    "when": "Utilisez-le pour modifier votre adresse e-mail de connexion ou votre mot de passe.",
    "click": "Rien ne change tant que vous n'avez pas rempli les cases, saisi votre mot de passe actuel et appuyé sur [[Enregistrer le compte]].",
    "care": "Sur un site meshmelo, l'adresse e-mail ne peut être modifiée que dans votre compte meshmelo ; c'est pourquoi le champ e-mail n'est pas affiché ici.",
    "like": "La clé de la porte de derrière de votre magasin. Vous seul devriez la posséder."
  },
  "help.site.account_email": {
    "t": "Nouvelle adresse e-mail (facultatif)",
    "what": "Une nouvelle adresse e-mail pour vous connecter. Laissez ce champ vide pour conserver votre adresse actuelle.",
    "when": "Lorsque vous cessez d'utiliser votre ancienne adresse e-mail ou que vous souhaitez vous connecter avec une autre.",
    "click": "Elle ne changera qu'après que vous aurez saisi votre mot de passe actuel et cliqué sur [[Enregistrer le compte]]. Lors de votre prochaine connexion, utilisez la nouvelle adresse e-mail.",
    "care": "Vérifiez attentivement l'orthographe. Si l'adresse e-mail est incorrecte, la connexion sera difficile. Ce champ n'est pas affiché sur les sites meshmelo.",
    "like": "Changer le nom inscrit sur votre clé de porte de derrière."
  },
  "help.site.account_pw": {
    "t": "Nouveau mot de passe (facultatif)",
    "what": "Nouveau mot de passe pour cet écran d'administration. Laissez ce champ vide pour conserver votre ancien mot de passe.",
    "when": "Lorsque vous pensez que quelqu'un d'autre connaît votre mot de passe, ou que vous en voulez simplement un nouveau.",
    "click": "Le compte sera modifié après que vous l'aurez saisi à nouveau dans le champ suivant, ajouté votre mot de passe actuel et cliqué sur [[Enregistrer le compte]]. Les autres téléphones et ordinateurs seront déconnectés. Celui-ci restera connecté.",
    "care": "Au moins 6 caractères. Notez-le en lieu sûr. Sur un site meshmelo, votre compte meshmelo recevra le même nouveau mot de passe.",
    "like": "Je change la serrure de la porte arrière. Les anciens doubles de la clé ne fonctionnent plus."
  },
  "help.site.account_pw2": {
    "t": "Nouveau mot de passe",
    "what": "Saisissez à nouveau le même nouveau mot de passe.",
    "when": "Chaque fois que vous remplissez le champ du nouveau mot de passe.",
    "click": "Lorsque vous appuyez sur [[Enregistrer le compte]], les deux cases sont comparées. Si elles sont différentes, rien n'est enregistré et un message s'affiche.",
    "care": "Cela permet de corriger les fautes de frappe. Si vous ne vous souvenez plus de ce que vous avez tapé, effacez les deux champs et tapez à nouveau lentement.",
    "like": "Essayez la nouvelle clé dans la serrure une fois avant de rentrer chez vous."
  },
  "help.site.account_cur": {
    "t": "Mot de passe actuel (à modifier)",
    "what": "Le mot de passe que vous utilisez actuellement. Il prouve que c'est bien vous avant que l'adresse e-mail ou le mot de passe ne change.",
    "when": "Saisissez-le toujours lorsque vous modifiez votre adresse e-mail ou votre mot de passe.",
    "click": "Saisir du texte ici ne fait rien par soi-même. La vérification a lieu lorsque vous appuyez sur [[Enregistrer le compte]].",
    "care": "Après 5 tentatives infructueuses, les modifications sont bloquées pendant 15 minutes. Si vous avez oublié votre mot de passe, cliquez sur [[Mot de passe oublié ?]] ci-dessous.",
    "like": "Présenter son ancienne clé avant que le serrurier n'en fabrique une nouvelle."
  },
  "help.site.account_save": {
    "t": "Enregistrer le compte",
    "what": "Enregistre le nouvel e-mail et/ou le nouveau mot de passe que vous avez saisis ci-dessus.",
    "when": "Après avoir indiqué ce que vous souhaitez modifier et votre mot de passe actuel.",
    "click": "Il est enregistré immédiatement. Un nouveau mot de passe déconnecte vos autres téléphones et ordinateurs, mais pas celui-ci. Si les deux champs sont vides, rien ne se passe.",
    "care": "La clé d'utilisation n'est pas enregistrée ici. Elle dispose de son propre bouton [[Enregistrer la clé]] ci-dessous.",
    "like": "Remettre la nouvelle clé au serrurier et dire : d'accord, changez la serrure maintenant."
  },
  "help.site.forgot": {
    "t": "Mot de passe oublié ?",
    "what": "Étapes pour accéder à nouveau à cet écran d'administration si vous avez oublié votre mot de passe. Cliquez sur le titre pour les afficher.",
    "when": "Lorsque vous ne parvenez pas à vous connecter, ou lorsque le champ de mot de passe actuel ci-dessus indique constamment qu'il est incorrect.",
    "click": "L'ouvrir ne change rien. Cela affiche simplement les étapes. Ces étapes varient selon le type de site : sur Cloudflare, dans le gestionnaire de fichiers de votre hébergement ou sur Meshmelo par e-mail.",
    "care": "Suivez scrupuleusement les instructions et supprimez uniquement les éléments indiqués. Vos chansons, albums et le lien aimusiclist.com restent intacts.",
    "like": "Un guide des clés de rechange est affiché à l'intérieur du magasin, au cas où vous perdriez votre clé."
  },
  "help.site.token_open": {
    "t": "Créez-le sur Cloudflare",
    "what": "Ouvre la page Cloudflare où vous créez la clé d'utilisation, dans un nouvel onglet. La plupart des champs sont déjà remplis.",
    "when": "Étape 1 de la création de la clé. Appuyez dessus si vous n'avez pas encore de clé d'utilisation.",
    "click": "Cloudflare ouvre [[Créer un jeton]]. Connectez-vous si nécessaire. Aucune information n'est enregistrée ici tant que vous n'êtes pas revenu, que vous n'avez pas collé la clé et cliqué sur [[Enregistrer la clé]].",
    "care": "Cloudflare n'affiche la clé qu'une seule fois. Appuyez immédiatement sur [[Copier]]. Si les lignes d'autorisation sont vides, ajoutez les deux lignes indiquées dans les étapes.",
    "like": "Aller chez le serrurier avec une note indiquant déjà la clé dont vous avez besoin."
  },
  "help.site.token": {
    "t": "Voir les instructions d'utilisation (facultatif)",
    "what": "Un emplacement pour enregistrer une clé d'utilisation Cloudflare. Grâce à elle, cet écran affichera vos données d'utilisation gratuite Cloudflare en haut.",
    "when": "Lorsque vous souhaitez vérifier quelle part des ressources gratuites votre site utilise, comme le stockage et les lectures.",
    "click": "Une fois la clé enregistrée, le champ d'utilisation en haut se remplit automatiquement. L'enregistrement de la clé ne vous déconnecte pas.",
    "care": "Créez la clé dans le même compte Cloudflare que celui où sont stockés vos morceaux. Une clé provenant d'un autre compte ne peut pas lire les numéros. Sans clé, votre site fonctionne correctement ; vous ne verrez simplement pas les numéros.",
    "like": "Une clé pour lire le compteur électrique. Elle permet de consulter les chiffres, rien de plus."
  },
  "help.site.token_change": {
    "t": "Changement",
    "what": "Une clé est déjà enregistrée. Seuls son début et sa fin sont affichés, afin que personne ne puisse la copier. Ce bouton vous permet de saisir une autre clé.",
    "when": "Lorsque les statistiques d'utilisation cessent de s'afficher, lorsque vous supprimez la clé dans Cloudflare ou lorsque vos morceaux sont transférés vers un autre compte Cloudflare.",
    "click": "Le boîtier à clés s'ouvre. L'ancienne clé reste fonctionnelle jusqu'à ce que vous en enregistriez une nouvelle. Appuyez sur [[Annuler]] pour conserver l'ancienne clé.",
    "care": "Si une ligne rouge indique que votre stockage de chansons se trouve sur un autre compte, créez la nouvelle clé dans ce nouveau compte.",
    "like": "Remplacement de la clé de relevé du compteur. L'ancienne clé reste fonctionnelle jusqu'à ce que vous remettiez la nouvelle."
  },
  "help.site.token_input": {
    "t": "Clé d'utilisation",
    "what": "La zone où vous collez la clé copiée depuis Cloudflare. Les lettres sont masquées pendant le collage.",
    "when": "Juste après avoir créé la clé sur Cloudflare et appuyé sur [[Copier]].",
    "click": "Coller seul ne sauvegarde rien. Appuyez sur la touche [[Enregistrer]] à côté.",
    "care": "Collez la clé complète, sans espaces. Cette clé ne peut lire que des chiffres et le nom de votre compte. Elle ne peut rien modifier ni supprimer, mais ne la partagez surtout pas.",
    "like": "L'emplacement où l'on insère la clé de relevé du compteur."
  },
  "help.site.token_save": {
    "t": "Clé de sauvegarde",
    "what": "Vérifie la clé auprès de Cloudflare et l'enregistre.",
    "when": "Après avoir collé la clé d'utilisation dans la case.",
    "click": "Le système teste d'abord la clé. Si elle fonctionne, elle est enregistrée et les statistiques d'utilisation s'affichent immédiatement en haut de l'écran. Vous restez connecté. En cas de problème, un message rouge vous indique la marche à suivre.",
    "care": "Si le message indique que la clé est introuvable dans votre liste de comptes, une nouvelle fenêtre vous demandera votre identifiant de compte Cloudflare. Saisissez-le et cliquez à nouveau. Une clé provenant d'un autre compte Cloudflare est refusée.",
    "like": "Essayez la clé dans le boîtier du compteur. Si elle tourne, laissez-la là."
  },
  "help.site.token_account_id": {
    "t": "Identifiant du compte Cloudflare (uniquement si demandé)",
    "what": "Le numéro de votre compte Cloudflare, composé de 32 caractères alphanumériques. Il s'affiche uniquement lorsque la clé ne parvient pas à retrouver votre compte.",
    "when": "Lors de l'enregistrement de la clé, un message d'erreur indique que la liste des comptes est introuvable. Cela se produit si la clé ne comporte qu'une seule ligne d'autorisation au lieu de deux.",
    "click": "Saisissez le champ et appuyez de nouveau sur [[Enregistrer la clé]]. Si le numéro et la clé correspondent, la clé est enregistrée.",
    "care": "Utilisez uniquement les chiffres 0 à 9 et les lettres a à f, soit exactement 32 caractères. La solution la plus simple consiste souvent à recréer la clé avec [[Make it on Cloudflare]], afin que les deux lignes soient remplies.",
    "like": "Inscrire le numéro de la maison sur la clé du compteur, car la clé seule ne permet pas de trouver la maison."
  },
  "help.site.token_howto": {
    "t": "Comment créer la clé d'utilisation (2 minutes)",
    "what": "Guide pas à pas pour créer la clé d'utilisation sur Cloudflare. Cliquez sur le titre pour ouvrir ou fermer.",
    "when": "La première fois que vous créez une clé, ou lorsque les chiffres en haut cessent de s'afficher.",
    "click": "L'ouvrir ne change rien. Il reste ouvert tout seul jusqu'à ce qu'une clé soit enregistrée, puis il se replie.",
    "care": "La clé nécessite deux autorisations : « Lecture des analyses du compte » et « Lecture des paramètres du compte ». Cloudflare n’affiche la clé qu’une seule fois ; copiez-la donc immédiatement.",
    "like": "Un petit plan indiquant l'emplacement du magasin de clés, avec le comptoir marqué."
  },
  "help.site.mm_r2": {
    "t": "Stockage de chansons (R2)",
    "what": "Indique l'emplacement de vos morceaux et images : le nom du stockage et votre numéro de compte Cloudflare. Ce stockage vous appartient, et non à meshmelo.",
    "when": "Consultez cette page pour vérifier quel compte Cloudflare et quel espace de stockage votre site utilise.",
    "click": "Cette carte affiche uniquement des informations. Pour la modifier, utilisez [[Changer le stockage]].",
    "care": "Ne supprimez pas cet espace de stockage sur Cloudflare. Vos chansons ne seront plus diffusées nulle part.",
    "like": "L'adresse de votre propre entrepôt, où sont conservés tous les documents relatifs à votre magasin."
  },
  "help.site.mm_r2_change": {
    "t": "Changer le stockage",
    "what": "Ouvre votre page meshmelo dans un nouvel onglet. Vous pourrez alors choisir un autre espace de stockage ou un autre compte Cloudflare.",
    "when": "Lorsque vous déplacez vos chansons vers un nouvel espace de stockage ou vers un autre compte Cloudflare.",
    "click": "Seul un nouvel onglet s'ouvre. Rien ne change tant que vous n'avez pas terminé les étapes sur la page meshmelo.",
    "care": "Vous avez changé de compte Cloudflare ? Créez alors une nouvelle clé d'utilisation dans ce compte et enregistrez-la dans le champ ci-dessous. L'ancienne clé ne fonctionnera pas avec le nouveau compte.",
    "like": "Appeler la société de déménagement pour qu'elle transporte vos archives jusqu'au nouvel entrepôt."
  },
  "help.site.mm_card": {
    "t": "Votre site meshmelo",
    "what": "Votre site est hébergé sur meshmelo, mais vos chansons et vos images sont stockées sur votre propre espace de stockage. Cette carte vous permet d'emporter votre site avec vous ou de le fermer.",
    "when": "Lorsque vous souhaitez une sauvegarde, lorsque vous passez à votre propre hébergement ou lorsque vous souhaitez cesser d'utiliser meshmelo.",
    "click": "La carte elle-même est inactive. Utilisez [[Exporter mon site]] pour en télécharger une copie, ou [[Mon compte meshmelo]] pour ouvrir votre page meshmelo.",
    "like": "Vous louez un emplacement dans un centre commercial, mais les disques entreposés dans votre entrepôt vous appartiennent. Vous pouvez tout emballer et déménager à tout moment."
  },
  "help.site.mm_export": {
    "t": "Exporter mon site",
    "what": "Téléchargez un fichier zip contenant votre liste de chansons, vos albums, vos paramètres, vos thèmes et votre livre d'or. Vos fichiers audio et vos images ne sont pas inclus ; ils sont déjà stockés sur votre ordinateur.",
    "when": "Pour conserver une sauvegarde de temps en temps, ou avant de transférer votre site sur votre propre hébergement.",
    "click": "Le téléchargement démarre immédiatement. Rien ne change sur votre site.",
    "care": "Conservez ce fichier confidentiel. Il contient vos identifiants de connexion et le code secret qui relie votre site à aimusiclist.com. Vous pouvez l'exporter même si votre site est en pause.",
    "like": "Une photocopie intégrale du carnet de votre boutique, afin de pouvoir ouvrir la même boutique ailleurs."
  },
  "help.site.mm_delete": {
    "t": "Supprimer mon site",
    "what": "Ferme définitivement votre site sur Meshmelo : ses pages, ses paramètres et sa liste de chansons seront supprimés. Cliquez sur le titre pour ouvrir la boîte de dialogue de suppression.",
    "when": "Seulement si vous souhaitez vraiment arrêter. Si vous déménagez, appuyez d'abord sur [[Exporter mon site]].",
    "click": "L'ouvrir ne change rien. Pour supprimer, vous devez saisir le nom de votre site et votre mot de passe, puis appuyer sur le bouton rouge.",
    "care": "Cette action est irréversible. Vos morceaux quittent immédiatement aimusiclist.com. Vos fichiers stockés sur votre ordinateur restent intacts. Le nom de votre site ne sera communiqué à personne.",
    "like": "Vous restituez la clé de votre magasin loué. Les disques stockés dans votre propre entrepôt restent votre propriété."
  },
  "help.site.mm_delete_name": {
    "t": "Saisissez le nom de votre site pour confirmer",
    "what": "Saisissez ici le nom de votre site, exactement comme indiqué, pour prouver que vous souhaitez réellement le supprimer.",
    "when": "Uniquement lorsque vous supprimez votre site.",
    "click": "La saisie seule ne produit aucun effet. Elle n'est vérifiée que lorsque vous appuyez sur la touche rouge Suppr.",
    "care": "Les caractères doivent correspondre exactement. En cas de différence, rien n'est supprimé et un message s'affiche.",
    "like": "Signer le formulaire de fermeture de votre magasin."
  },
  "help.site.mm_delete_btn": {
    "t": "Supprimer mon site",
    "what": "Le dernier bouton qui supprime définitivement votre site meshmelo.",
    "when": "Après avoir saisi le nom de votre site et votre mot de passe actuel au-dessus.",
    "click": "Il vous pose la question une dernière fois. Si vous répondez oui, le site est immédiatement supprimé, vous êtes déconnecté et votre page meshmelo s'ouvre.",
    "care": "Cette action est irréversible. Exportez d'abord vos données si vous pensez en avoir besoin ultérieurement. Après 5 tentatives de connexion infructueuses, vous devrez patienter une heure.",
    "like": "Éteindre les lumières du magasin et verrouiller la porte pour la dernière fois."
  },
  "help.site.images": {
    "t": "bannière et image de profil",
    "what": "Deux images pour votre site : une large bannière tout en haut et une photo de profil ronde.",
    "when": "Ajoutez-les pour personnaliser votre site. Modifiez-les à votre guise.",
    "click": "Chaque image est enregistrée automatiquement après sa sélection et après avoir cliqué sur « Enregistrer » dans la fenêtre d'image. Il n'y a pas de bouton d'enregistrement distinct pour cette carte.",
    "care": "Vous pouvez choisir une image de 2 Mo maximum (JPG, PNG, WebP ou GIF). Seule l'image redimensionnée sera téléchargée, pas l'original.",
    "like": "Il s'agit du store du magasin au-dessus de la porte et de la photo du propriétaire près du comptoir."
  },
  "help.site.banner": {
    "t": "Bannière supérieure",
    "what": "Une image grand format s'affiche au-dessus du titre de votre site. Sa taille maximale est de 1600×400 pixels.",
    "when": "Utilisez une image large et basse, comme un paysage ou votre œuvre d'art étirée sur le côté.",
    "click": "Cliquez sur [[Choisir une image]]. Dans la fenêtre d'image, vous pouvez déplacer le cadre pour recadrer l'image ou la réduire tout en conservant sa forme. Cliquez sur [[Enregistrer l'image]] et elle s'affichera immédiatement sur votre site.",
    "care": "Elle est enregistrée comme une image légère de 300 Ko maximum. Les images hautes sont souvent rognées, il est donc préférable d'utiliser des images larges. Si vous n'en ajoutez pas, l'espace réservé à la bannière ne s'affiche pas.",
    "like": "C'est le grand auvent peint qui recouvre la vitrine de votre magasin."
  },
  "help.site.image_choose": {
    "t": "Choisir une image",
    "what": "Ouvre le sélecteur d'images de votre appareil pour la bannière ou l'image de profil.",
    "when": "Appuyez dessus pour ajouter une image pour la première fois, ou pour remplacer celle que vous avez.",
    "click": "Après avoir sélectionné une image, une fenêtre d'édition s'ouvre. Rien ne change tant que vous n'avez pas cliqué sur le bouton « Enregistrer » ([[Enregistrer l'image]] pour la bannière, [[Appliquer]] pour le profil). La nouvelle image remplace alors immédiatement l'ancienne.",
    "care": "Choisissez un fichier JPG, PNG, WebP ou GIF de 2 Mo maximum. Les images animées (GIF) seront converties en image fixe. Utilisez Chrome, Edge ou Firefox si votre navigateur ne peut pas lire l'image.",
    "like": "C'est comme sortir une nouvelle photo de son sac pour la mettre dans le cadre du magasin."
  },
  "help.site.image_delete": {
    "t": "Retirer",
    "what": "Supprime la bannière ou l'image de profil de votre site.",
    "when": "Utilisez-le lorsque vous préférez ne pas afficher d'image à cet endroit.",
    "click": "Il vous est demandé une seule fois de confirmer. Si vous répondez par l'affirmative, la photo disparaît immédiatement de votre site. Une photo de profil supprimée disparaît également d'aimusiclist.com peu après.",
    "care": "Cette action est irréversible. Pour afficher à nouveau une image, sélectionnez-la de nouveau avec [[Choisir une image]]. Il n'est pas nécessaire de la supprimer au préalable pour la changer : il suffit d'en choisir une nouvelle.",
    "like": "C'est comme retirer la photo de son cadre et laisser le cadre vide."
  },
  "help.site.profile": {
    "t": "Image de profil",
    "what": "Votre image ou logo (200×200 pixels) apparaît sous forme de cercle. aimusiclist.com le présente également dans la section « Nouveaux artistes » et à côté de votre site.",
    "when": "Ajoutez un visage ou un logo clair que les gens puissent reconnaître même en petit format.",
    "click": "Appuyez sur [[Choisir une image]]. Faites glisser l'image pour la positionner, zoomez ou faites-la pivoter, puis appuyez sur [[Appliquer]]. Elle est enregistrée immédiatement. Votre site choisit également une couleur d'arrière-plan assortie. aimusiclist.com reçoit la nouvelle image peu après.",
    "care": "Les coins sont coupés par le cercle ; veillez donc à conserver la partie importante au centre. L’image est enregistrée en tant qu’image légère de 100 Ko maximum.",
    "like": "C'est la photo du propriétaire qui figure sur la carte de visite du magasin, distribuée également sur le grand marché."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Vous pouvez ainsi afficher des annonces Google sur votre site et les monétiser. Il vous suffit de saisir les informations de votre compte AdSense. Votre site génère automatiquement l'annonce.",
    "when": "Utilisez-le une fois que Google aura accepté votre site dans AdSense.",
    "click": "Remplissez les cases, cochez [[Afficher les annonces sur mon site]] et cliquez sur [[Enregistrer AdSense]]. Les annonces ne s'afficheront jamais sur cette page d'administration, mais uniquement sur votre site.",
    "care": "Google n'approuve que les sites possédant leur propre adresse. Si votre site utilise encore une adresse workers.dev, connectez d'abord votre propre domaine dans l'onglet « Mon domaine ». Ne collez pas de code publicitaire ici ; seuls les identifiants sont pris en compte.",
    "like": "C'est comme louer un petit espace publicitaire dans la vitrine de votre magasin à un annonceur qui vous paie pour cela."
  },
  "help.site.ads_client": {
    "t": "Identifiant de l'éditeur (ca-pub-…)",
    "what": "Votre propre numéro AdSense. Il commence par ca-pub- et comporte 16 chiffres.",
    "when": "Vous le trouverez dans votre compte AdSense et vous le copierez ici. Il vous sera indispensable pour que vos annonces puissent s'afficher.",
    "click": "Il est enregistré lorsque vous appuyez sur [[Enregistrer AdSense]]. Cela génère également automatiquement votre page ads.txt.",
    "care": "Veuillez saisir exactement : ca-pub- suivi des 16 chiffres, rien d’autre. Toute différence entraînera l’affichage d’un message d’erreur en rouge et aucune donnée ne sera enregistrée.",
    "like": "Il s'agit de votre numéro de compte auprès de l'agence de publicité, ce qui leur permet de savoir dans quelle vitrine se trouve l'affiche."
  },
  "help.site.ads_top": {
    "t": "ID de l'unité publicitaire principale",
    "what": "Le numéro de l'espace publicitaire qui apparaît en haut de votre site, juste en dessous de la bannière.",
    "when": "Créez un bloc d'annonces dans votre compte AdSense, puis copiez son numéro ici.",
    "click": "Il est enregistré lorsque vous appuyez sur [[Enregistrer AdSense]]. Si vous le laissez vide, aucune publicité ne s'affichera en haut.",
    "care": "Uniquement des chiffres, de 6 à 20 chiffres. Ne collez pas le code publicitaire complet.",
    "like": "Il s'agit du numéro du cadre d'affiches accroché juste sous l'auvent de votre magasin."
  },
  "help.site.ads_left": {
    "t": "ID de l'emplacement publicitaire gauche (facultatif)",
    "what": "Le numéro d'un deuxième espace publicitaire dans la colonne de gauche de votre site.",
    "when": "Remplissez cette case uniquement si votre type de peau possède une colonne de gauche, comme c'est le cas pour les peaux foncées.",
    "click": "L'annonce est enregistrée lorsque vous appuyez sur [[Enregistrer AdSense]]. Si votre thème ne comporte pas de colonne de gauche, cette annonce ne s'affiche pas, même si un nombre est indiqué.",
    "care": "Numéros uniquement, de 6 à 20 chiffres. Si vous passez ultérieurement à un thème sans colonne de gauche, cette publicité disparaîtra automatiquement.",
    "like": "Il s'agit d'un cadre pour affiche secondaire, mais seuls les magasins disposant d'un mur latéral ont la place nécessaire pour l'accrocher."
  },
  "help.site.ads_on": {
    "t": "Afficher des publicités sur mon site",
    "what": "L'interrupteur marche/arrêt pour toutes les publicités sur votre site.",
    "when": "Cochez cette case lorsque vos identifiants sont prêts. Décochez-la pour interrompre temporairement la diffusion des publicités sans perdre vos identifiants.",
    "click": "Rien ne change tant que vous n'avez pas cliqué sur [[Enregistrer AdSense]]. Après l'enregistrement, les annonces s'affichent sur votre site dans les 30 secondes, ou disparaissent si vous avez décoché la case.",
    "care": "Cette fonctionnalité ne peut être activée sans un identifiant d'éditeur. Vos identifiants restent affichés dans les encadrés lorsque les publicités sont désactivées.",
    "like": "C'est l'interrupteur qui commande les cadres d'affiches dans votre vitrine."
  },
  "help.site.ads_save": {
    "t": "Sauvegarder AdSense",
    "what": "Enregistre tout dans la fiche Google AdSense : les trois identifiants et la coche marche/arrêt.",
    "when": "Appuyez dessus après avoir modifié quoi que ce soit sur cette carte.",
    "click": "Les chiffres sont d'abord vérifiés. Si l'un d'eux est incorrect, un message d'erreur rouge s'affiche et aucune donnée n'est enregistrée. Si tout est correct, les annonces s'affichent (ou disparaissent) sur votre site en moins de 30 secondes.",
    "care": "Il est possible que les annonces restent vides pendant un certain temps après l'enregistrement. C'est Google qui décide, et non votre site. Si elles n'apparaissent toujours pas, vérifiez votre compte AdSense.",
    "like": "Elle remet le contrat d'affichage signé à l'annonceur."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Google vérifie sur une petite page que les annonces diffusées sur votre site vous appartiennent bien. Votre site la génère automatiquement à partir de votre identifiant d'éditeur.",
    "when": "Vous n'avez rien à faire. Ouvrez le lien si AdSense vous le demande.",
    "click": "Le lien ouvre cette page dans un nouvel onglet pour que vous puissiez la consulter. Elle affiche une ligne contenant votre identifiant d'éditeur. Vous ne pouvez pas le modifier ici ; il est associé à l'identifiant que vous avez enregistré.",
    "care": "Si aucun identifiant d'éditeur n'est enregistré, la page est vide. Après avoir modifié l'identifiant, Google peut mettre un certain temps à le prendre en compte.",
    "like": "C'est l'autorisation apposée à l'intérieur de votre vitrine qui prouve que les affiches y sont autorisées."
  },
  "help.site.country": {
    "t": "Pays dans lequel vous êtes actif",
    "what": "Le pays où vous composez votre musique. aimusiclist.com utilise cette information pour vous classer parmi les artistes de ce pays.",
    "when": "Choisissez cette option si vous souhaitez figurer également dans le classement de votre pays. C'est facultatif.",
    "click": "Ces informations sont enregistrées lorsque vous appuyez sur [[Enregistrer les informations du site]]. Si vous laissez l'option « Non défini », vous n'apparaîtrez que dans le classement mondial.",
    "care": "Choisissez un seul pays, celui dans lequel vous travaillez réellement. Vous pourrez le modifier plus tard.",
    "like": "C'est le drapeau du pays sur votre stand au grand marché (aimusiclist.com), afin que les visiteurs de votre pays puissent vous trouver."
  },
  "help.site.fields": {
    "t": "Champs supplémentaires (tirés de aimusiclist.com)",
    "what": "Affiche la liste des cases supplémentaires (par exemple, Ambiance) que votre site a obtenues de aimusiclist.com. Ces cases apparaissent sous « Informations supplémentaires » lorsque vous importez ou modifiez des morceaux, ainsi que dans les informations du site.",
    "when": "Consultez cette page si vous vous demandez pourquoi une nouvelle boîte est apparue ou pourquoi une boîte que vous attendiez est manquante.",
    "click": "Cette fiche indique uniquement l'état. La ligne précise la version de la liste, le nombre de cases et la date de la dernière vérification. Votre site effectue une vérification quotidienne automatique ; vous n'avez donc rien à faire.",
    "care": "Si la récupération d'une nouvelle liste échoue, un message rouge en indique la raison. Votre site continue d'utiliser la dernière liste valide et les chargements fonctionnent normalement.",
    "like": "Il s'agit du bon de commande que le grand marché (aimusiclist.com) envoie à chaque magasin, indiquant les étiquettes à apposer sur les disques."
  },
  "help.site.fields_update": {
    "t": "Champs de mise à jour",
    "what": "Demande immédiatement à aimusiclist.com la liste la plus récente des boîtes supplémentaires, au lieu d'attendre la vérification quotidienne.",
    "when": "Appuyez dessus lorsque aimusiclist.com annonce une nouvelle box et que vous la voulez aujourd'hui.",
    "click": "Un bref message vous indique le résultat : mise à jour (avec la nouvelle version), déjà à jour, ou la raison de l’échec. Si la liste a changé, l’écran se rafraîchit pour afficher les nouvelles cases.",
    "care": "Vous pouvez appuyer une fois par minute. Si vous appuyez à nouveau trop tôt, le système vous indiquera le nombre de secondes à attendre. Vos réponses dans les anciennes cases sont conservées.",
    "like": "Il s'agit de contacter directement le marché pour demander : « Existe-t-il un nouveau formulaire de commande ? », au lieu d'attendre le courrier du matin."
  },
  "help.site.sns": {
    "t": "Réseaux sociaux",
    "what": "Vos adresses sur les réseaux sociaux. Les cinq premières cases sont fixes : YouTube, Instagram, TikTok, Facebook et X.",
    "when": "Ajoutez les plateformes où vous publiez votre musique ou échangez avec vos fans. Laissez une case vide si vous n'utilisez pas cette option.",
    "click": "Saisissez l'adresse complète en commençant par https:// et cliquez en dehors du champ. Elle s'enregistre automatiquement. Les visiteurs la trouveront sur la page « Liens » de votre site. aimusiclist.com affiche de petites icônes à côté de vos morceaux. Décochez le champ pour les supprimer.",
    "care": "L'adresse doit être associée au réseau social concerné. Par exemple, le champ YouTube n'accepte qu'une adresse YouTube. Elle ne doit pas dépasser 200 caractères. Une adresse incorrecte s'affiche en rouge et n'est pas enregistrée ; seule la dernière adresse valide est conservée.",
    "like": "C'est le petit panneau à côté de la porte du magasin : « Vous pouvez aussi nous trouver ici. »"
  },
  "help.site.sns_tools": {
    "t": "Haut · Bas · Supprimer",
    "what": "Boutons sur chaque ligne « Autres réseaux sociaux ». [[Haut]] et [[Bas]] permettent de modifier l’ordre. [[Supprimer]] supprime la ligne.",
    "when": "Utilisez-les pour mettre en avant vos réseaux sociaux les plus importants, ou pour supprimer ceux que vous n'utilisez plus.",
    "click": "La modification est enregistrée immédiatement et votre page « Liens » affiche le nouvel ordre. [[Supprimer]] supprime la ligne instantanément, sans confirmation préalable.",
    "care": "L'adresse supprimée est définitivement perdue. Pour la rétablir, ajoutez une nouvelle ligne et saisissez-la. Les cinq champs fixes ne peuvent pas être déplacés ; ils apparaissent toujours en premier.",
    "like": "C'est comme déplacer les notes sur le tableau près de la porte, ou en décoller une."
  },
  "help.site.sns_more": {
    "t": "Autres réseaux sociaux",
    "what": "Possibilité d'ajouter jusqu'à 5 réseaux sociaux supplémentaires qui ne figurent pas dans les cinq emplacements fixes, tels que SoundCloud, Spotify, Threads ou Discord.",
    "when": "Utilisez-le lorsque vous êtes actif sur un service autre que les cinq principaux.",
    "click": "Dans chaque ligne, sélectionnez d'abord le service dans la liste, puis saisissez son adresse. Elle s'enregistre automatiquement lorsque vous cliquez en dehors du champ. Ces liens apparaissent dans cet ordre sur votre page « Liens ». Sur aimusiclist.com, ils partagent tous la même icône 🔗.",
    "care": "Chaque service ne peut être sélectionné qu'une seule fois. Le champ d'adresse reste verrouillé tant que vous n'avez pas choisi de service. Si vous changez de service à la suite, l'adresse enregistrée est effacée ; vous devrez donc la saisir à nouveau.",
    "like": "C'est l'espace supplémentaire sur le tableau près de la porte, pour les petits espaces où les gens peuvent vous trouver."
  },
  "help.site.sns_add": {
    "t": "+ Ajouter d'autres réseaux sociaux",
    "what": "Ajoute une ligne vide sous « Autres réseaux sociaux ».",
    "when": "Appuyez dessus lorsque vous souhaitez ajouter un service qui ne figure pas dans les cinq cases prédéfinies.",
    "click": "Une nouvelle ligne apparaît avec la liste des services disponibles. Aucune information n'est enregistrée tant que vous n'avez pas sélectionné un service et saisi son adresse. Lorsque vous avez affiché 5 lignes, le bouton devient gris.",
    "care": "Une ligne vide que vous laissez derrière vous n'est tout simplement pas enregistrée. Elle disparaît à la prochaine ouverture de la page.",
    "like": "C'est comme accrocher une note vierge au tableau près de la porte, prête à être écrite."
  },
  "help.site.sns_view": {
    "t": "Consultez la page Liens",
    "what": "Ouvre la page « Liens » de votre site, la page où les visiteurs voient tous vos réseaux sociaux.",
    "when": "Utilisez-le pour vérifier comment votre liste de réseaux sociaux apparaît aux visiteurs.",
    "click": "La page s'ouvre dans un nouvel onglet. Rien ne change ici. Ce bouton n'apparaît qu'après l'enregistrement d'au moins une adresse de réseau social.",
    "like": "C'est comme sortir pour regarder le panneau d'affichage près de la porte, du point de vue des clients."
  },
  "help.guestbook.title": {
    "t": "Livre d'or",
    "what": "Un espace sur votre site où les visiteurs peuvent vous laisser de courts messages. Ils peuvent écrire sur l'ensemble du site ou sur une chanson en particulier.",
    "when": "Lorsque vous souhaitez avoir l'avis de vos auditeurs, ou vérifier et corriger leurs messages.",
    "click": "Ceci n'est qu'un titre. Utilisez [[Ouvrir le livre d'or]] pour l'activer ou le désactiver, et la liste des messages ci-dessous pour lire et supprimer les messages.",
    "like": "Comme un carnet à l'entrée de votre magasin où les clients écrivent quelques mots gentils."
  },
  "help.guestbook.on": {
    "t": "Ouvrez le livre d'or",
    "what": "Permet d'activer ou de désactiver le livre d'or pour les visiteurs. Lorsqu'il est activé, l'option **Livre d'or** apparaît dans votre menu et un bouton 💬 est affiché sur chaque chanson.",
    "when": "Activez-le pour recevoir les messages des auditeurs. Désactivez-le si vous recevez trop de messages indésirables ou si vous avez besoin d'une pause.",
    "click": "La modification est enregistrée instantanément. Les visiteurs voient le changement en une trentaine de secondes. Vous pouvez revenir à la version précédente à tout moment.",
    "care": "La désactiver ne fait que la masquer. Les anciens messages sont conservés et vous pouvez toujours les lire et les supprimer ici.",
    "like": "Comme laisser le carnet à la porte de votre magasin, ou le rentrer à l'intérieur pendant un moment."
  },
  "help.guestbook.list": {
    "t": "Messages",
    "what": "Tous les messages du livre d'or, du plus récent au plus ancien, 20 par page. Chaque message indique le nom, l'heure et le titre de la chanson (♪). Le nombre à côté du titre correspond au nombre total.",
    "when": "Consultez-le de temps en temps pour lire les nouveaux messages et supprimer les indésirables.",
    "click": "Utilisez les boutons de navigation en bas de page pour consulter les messages plus anciens. Vous ne pouvez ni modifier ni répondre à un message ici, seulement le supprimer.",
    "care": "Les visiteurs peuvent inscrire un nom (20 caractères maximum) et un message (500 caractères maximum), sans lien, et envoyer jusqu'à 50 messages par jour et par personne. Les messages restent affichés jusqu'à ce que vous les supprimiez, même si le livre d'or est désactivé. **Morceau supprimé** signifie que le morceau correspondant a été retiré.",
    "like": "Comme feuilleter un carnet à la porte de votre magasin, la page la plus récente en premier."
  },
  "help.guestbook.delete": {
    "t": "Supprimer",
    "what": "Supprime un message du livre d'or.",
    "when": "Pour les messages grossiers, les spams ou tout ce que vous ne souhaitez pas que les visiteurs lisent.",
    "click": "Il vous est demandé de confirmer. Le message disparaît ensuite immédiatement de votre site et la liste est mise à jour.",
    "care": "Cette action est irréversible. Supprimer un message n'empêche pas son auteur d'écrire à nouveau.",
    "like": "Comme arracher une page de son carnet devant la porte de son magasin."
  },
  "help.domain.mm": {
    "t": "Mon domaine",
    "what": "L'adresse de votre site s'affiche désormais. Votre site est hébergé sur meshmelo ; votre nom de domaine est donc connecté au portail meshmelo, et non ici.",
    "when": "Lorsque vous souhaitez vérifier votre adresse ou utiliser votre propre domaine comme mymusic.com.",
    "click": "Rien à cliquer ici. Rendez-vous sur my.meshmelo.com → Mon site → Mon domaine. Si vous ne le voyez pas encore, il sera bientôt disponible.",
    "care": "Votre adresse actuelle reste valide, vous pouvez donc la partager sans souci.",
    "like": "C'est comme louer un local commercial dans un grand centre commercial : le bureau du centre commercial s'occupe de votre nouvelle enseigne."
  },
  "help.domain.title": {
    "t": "Mon domaine",
    "what": "Affiche désormais l'adresse de votre site et vous permet d'utiliser votre propre adresse (un nom de domaine) comme mymusic.com au lieu de la longue adresse gratuite.",
    "when": "Lorsque vous avez acheté un nom de domaine ou que vous souhaitez une adresse courte et facile à retenir, Google AdSense vous demande également votre propre nom de domaine.",
    "click": "Ceci n'est qu'un titre. Suivez les instructions ci-dessous, puis saisissez votre domaine et appuyez sur [[Connecter]]. Une fois connecté, vous verrez un ✓ et votre domaine.",
    "care": "Si l'écran indique que l'adresse est configurée dans les paramètres Cloudflare, elle ne peut pas être modifiée ici et la case est grisée.",
    "like": "C'est comme déplacer l'enseigne de votre magasin d'un numéro perdu dans une rue secondaire vers une adresse facile d'accès sur une rue principale."
  },
  "help.domain.guide": {
    "t": "Comment connecter votre propre domaine",
    "what": "Guide pas à pas pour obtenir un nom de domaine et le rediriger vers votre site. Cela prend environ 10 minutes.",
    "when": "Veuillez lire attentivement ces instructions avant de cliquer sur [[Connecter]]. Vous devez d'abord suivre les étapes affichées sur les écrans Cloudflare.",
    "click": "Cliquez sur le titre pour ouvrir ou fermer les étapes. La fenêtre restera ouverte jusqu'à ce que votre domaine soit connecté.",
    "care": "Vous payez vous-même le nom de domaine. Cloudflare peut le renommer ; choisissez donc un nom similaire. Si vous utilisez un hébergement web, les étapes suivantes concernent votre panneau de contrôle d'hébergement.",
    "like": "Comme une carte indiquant comment installer l'enseigne de votre magasin à la nouvelle adresse."
  },
  "help.domain.input": {
    "t": "Mon domaine (boîte)",
    "what": "Saisissez le nom de domaine que vous avez acheté, par exemple mymusic.com.",
    "when": "Une fois que vous avez terminé les étapes du guide et que votre site est déjà accessible sur ce domaine.",
    "click": "Rien ne se passe tant que vous n'appuyez pas sur [[Connecter]].",
    "care": "Saisissez uniquement le domaine. N'ajoutez pas http://, https:// ni de barre oblique (/) suivie d'autres mots. Pour accéder à un autre domaine ultérieurement, saisissez le nouveau et reconnectez-vous.",
    "like": "Comme inscrire la nouvelle adresse sur l'enseigne de votre magasin."
  },
  "help.domain.connect": {
    "t": "Connecter",
    "what": "Vérifie que votre site s'ouvre bien à l'adresse de domaine que vous avez saisie, puis en fait l'adresse principale de votre site.",
    "when": "Après avoir saisi votre domaine dans la case.",
    "click": "La vérification peut prendre jusqu'à 30 secondes. Si elle réussit, votre domaine est enregistré et aimusiclist.com modifie automatiquement votre adresse. Les visiteurs qui accèdent à l'ancienne adresse gratuite sont redirigés vers votre nouveau domaine. Avec la version hébergée, l'ancienne adresse reste fonctionnelle.",
    "care": "Si vous rencontrez une erreur, cela signifie que votre site ne s'ouvre pas encore sur ce domaine ou qu'il ouvre un autre site. Consultez les instructions, patientez quelques minutes, puis réessayez. Les morceaux déjà présents dans les listes de lecture continuent d'être lus.",
    "like": "Comme la poste qui vérifie l'adresse de votre nouvelle boutique avant d'y réexpédier votre courrier."
  },
  "help.menus.form": {
    "t": "Ajouter un menu / Modifier le menu",
    "what": "Ici, vous créez les boutons de menu que les visiteurs voient en haut de votre site. Chaque menu présente les chansons d'un genre spécifique.",
    "when": "Utilisez-le lorsque vous souhaitez que les visiteurs trouvent vos chansons par style, par exemple un menu R&B et un menu Hip-hop.",
    "click": "Choisissez : 1. un genre principal, 2. un genre plus détaillé (facultatif), 3. un nom (facultatif), puis appuyez sur [[Enregistrer le menu]]. Le nombre affiché à côté du bouton indique le nombre de titres de votre site qui figureront dans ce menu.",
    "care": "Les genres proviennent de la liste aimusiclist.com, vos menus correspondent donc à ceux du site principal. Vous pouvez avoir jusqu'à 30 menus, et un seul menu par genre.",
    "like": "C'est comme mettre des étiquettes sur les étagères de votre magasin : « R&B ici », « Hip-hop là »."
  },
  "help.menus.main": {
    "t": "1. Genre principal",
    "what": "Les principaux genres musicaux de ce menu sont le R&B, le hip-hop et la dance. La liste est identique à celle du site aimusiclist.com.",
    "when": "Choisissez toujours cette option en premier. Un menu ne peut pas être enregistré sans elle.",
    "click": "Une fois votre choix effectué, la liste détaillée des genres s'ouvre avec les genres qui y sont associés, et vous pouvez voir combien de vos chansons correspondent.",
    "care": "Si vous choisissez uniquement un genre principal, le menu affiche les chansons qui correspondent exactement à ce genre dans l'une de ses trois cases de genre.",
    "like": "C'est la grande enseigne au-dessus d'une allée de votre magasin, comme « R&B »."
  },
  "help.menus.sub": {
    "t": "2. Genre détaillé",
    "what": "Un sous-genre à l'intérieur du genre principal, afin de réduire la taille du menu. Il est optionnel.",
    "when": "Utilisez-le lorsque vous avez de nombreuses chansons appartenant à un même genre principal et que vous souhaitez un menu pour un seul style de ce genre.",
    "click": "La liste affiche uniquement les sous-genres du genre principal sélectionné. Laissez l'option « Tous les… » sélectionnée pour utiliser le genre principal. Le nombre de morceaux affiché à côté de [[Menu Enregistrer]] est immédiatement mis à jour.",
    "care": "L'interface reste grise tant que vous n'avez pas sélectionné de genre principal. Une fois le genre principal défini, le menu n'affiche que les morceaux correspondant à ce genre dans l'une de leurs cases.",
    "like": "C'est une petite étiquette sur une étagère à l'intérieur de l'allée."
  },
  "help.menus.label": {
    "t": "3. Nom du menu",
    "what": "Le mot que les visiteurs voient sur le bouton de menu. Il est facultatif.",
    "when": "Écrivez votre propre nom si vous souhaitez quelque chose de plus convivial, comme « Chansons nocturnes ». Laissez ce champ vide pour utiliser le nom du genre.",
    "click": "Les données sont enregistrées lorsque vous appuyez sur [[Menu Enregistrer]]. Si le champ est vide, le bouton affiche le nom du genre, qui varie selon la langue du visiteur.",
    "care": "Jusqu'à 30 caractères. Le nom que vous saisissez s'affiche de la même manière dans toutes les langues.",
    "like": "Ce sont les mots que vous écrivez vous-même sur l'étiquette de l'étagère."
  },
  "help.menus.save": {
    "t": "Sauvegarder le menu",
    "what": "Enregistre le menu que vous avez configuré ci-dessus.",
    "when": "Appuyez dessus après avoir choisi le genre (et un nom si vous le souhaitez).",
    "click": "L'enregistrement est immédiat. Un nouveau menu apparaît en fin de liste. Les visiteurs le voient sur votre site en moins de 30 secondes.",
    "care": "Vous ne pouvez pas créer deux menus pour le même genre. Lorsque vous avez déjà 30 menus, vous ne pouvez plus en ajouter. Un message rouge vous explique pourquoi.",
    "like": "Vous collez l'étiquette terminée sur l'étagère."
  },
  "help.menus.order": {
    "t": "Haut / Bas",
    "what": "Déplace un menu d'une position vers l'avant ou vers l'arrière dans la rangée des menus.",
    "when": "Utilisez-le pour placer votre menu le plus important en premier.",
    "click": "La modification est enregistrée immédiatement. Les visiteurs voient la nouvelle commande en moins de 30 secondes.",
    "care": "Le premier menu ne peut pas être déplacé vers le haut, et le dernier ne peut pas être déplacé vers le bas, c'est pourquoi ces boutons sont grisés.",
    "like": "Vous inversez deux étiquettes de rayon pour que l'étagère la plus populaire apparaisse en premier."
  },
  "help.menus.edit": {
    "t": "Modifier",
    "what": "Ouvre ce menu dans la case ci-dessus pour vous permettre de modifier son genre ou son nom.",
    "when": "Utilisez-le pour renommer un menu ou le rediriger vers un genre différent.",
    "click": "La page s'affiche jusqu'à la zone contenant ce menu. Modifiez-le et appuyez sur [[Enregistrer le menu]] ; il conservera sa place dans la liste. [[Annuler]] ferme la page sans modifier les informations.",
    "like": "Vous retirez une étiquette d'étagère, vous la réécrivez et vous la remettez au même endroit."
  },
  "help.menus.delete": {
    "t": "Supprimer",
    "what": "Supprime ce menu de votre site.",
    "when": "Utilisez-le lorsque vous n'avez plus besoin du menu.",
    "click": "Il vous pose d'abord la question. Puis le menu disparaît aussitôt, et les visiteurs cessent de le voir au bout de 30 secondes.",
    "care": "Seul le menu disparaît. Les chansons restent sur votre site et sont toujours accessibles depuis la page d'accueil ou d'autres menus. Il est impossible d'annuler cette action, mais vous pouvez recréer le menu.",
    "like": "Vous prenez une étiquette sur l'étagère. Les disques sur l'étagère restent où ils sont."
  },
  "help.menus.list": {
    "t": "Menus sur votre site",
    "what": "Tous vos menus, dans l'ordre où ils apparaissent en haut de votre site. Le nombre entre parenthèses indique leur nombre sur 30.",
    "when": "Cliquez ici pour consulter, réorganiser, modifier ou supprimer les menus.",
    "click": "Chaque ligne affiche le nom du menu, son genre et le nombre de titres qu'il contient. Les visiteurs voient toujours « Accueil » en premier, puis « Albums » si vous proposez des albums.",
    "care": "« Genre absent de la liste » signifie que aimusiclist.com ne propose plus ce genre. Appuyez sur [[Modifier]] et choisissez un autre genre. Un menu vide, affichant 0 titre, est toujours visible pour les visiteurs.",
    "like": "Il s'agit de la rangée d'étiquettes de rayon dans votre magasin, de gauche à droite."
  },
  "help.tab.menus": {
    "t": "Menus",
    "what": "Le menu de votre site. Chaque menu affiche les chansons d'un genre spécifique, sélectionnées dans la liste des genres de aimusiclist.com.",
    "when": "Venez ici pour décider de ce que les visiteurs voient dans le menu de votre site, et dans quel ordre.",
    "click": "Appuyer sur la touche Tab permet uniquement de changer d'affichage. L'ajout, la modification, le déplacement ou la suppression d'un élément de menu est enregistré immédiatement.",
    "care": "Jusqu'à 30 menus. Choisissez d'abord un genre principal, puis un sous-genre si vous le souhaitez, et enfin un nom (30 caractères maximum, facultatif). L'utilisation des genres d'aimusiclist.com garantit la cohérence du classement entre votre site et aimusiclist.com.",
    "like": "Ce sont les étiquettes des rayons de votre magasin : « R&B ici, Hip-hop là »."
  },
  "help.stats.title": {
    "t": "Statistiques du site",
    "what": "Cet onglet indique le nombre de visiteurs sur votre site et le nombre de chansons écoutées. Vous y trouverez également vos statistiques provenant d'aimusiclist.com.",
    "when": "Ouvrez-le une fois par jour ou une fois par semaine. Vous pourrez ainsi voir quelles chansons plaisent aux visiteurs et si votre site progresse.",
    "click": "Rien ne change sur votre site lorsque vous le consultez. Choisissez une période en haut, et chaque carte en dessous affichera cette période.",
    "care": "La plupart des chiffres sont comptabilisés **une fois par jour** (tôt le matin, heure UTC). Une chanson que vous avez mise en ligne aujourd'hui apparaîtra dans les statistiques de demain.",
    "like": "C'est comme le carnet d'un commerçant. Chaque matin, on y note le nombre de clients et les chansons qu'ils ont écoutées."
  },
  "help.stats.period": {
    "t": "Période (7 / 30 / 90 jours)",
    "what": "Ces boutons permettent de choisir la durée du calcul. Vous pouvez choisir 7 jours, 30 jours ou 90 jours.",
    "when": "Choisissez 7 jours pour voir ce qui s'est passé cette semaine. Choisissez 90 jours pour avoir une vue d'ensemble sur environ trois mois.",
    "click": "Les chiffres, graphiques et tableaux de cet onglet s'affichent instantanément. Le bouton coloré est celui qui est actif. Aucune donnée n'est enregistrée ni envoyée.",
    "care": "La période se termine **hier** (UTC). La date du jour est affichée seule sur la petite ligne **Aujourd’hui** de chaque vignette. La flèche **Vs jours précédents** compare avec le même nombre de jours juste avant.",
    "like": "C'est comme choisir combien de pages de son carnet d'atelier on lit à la fois : une semaine, un mois ou trois mois."
  },
  "help.stats.note.off": {
    "t": "Les parties jouées sur mon site ne sont pas comptabilisées.",
    "what": "Avec ce type d'hébergement, les écoutes sur votre propre site ne sont pas encore prises en compte. Le classement **Populaire** de votre site utilise donc les écoutes d'aimusiclist.",
    "when": "Cela apparaît automatiquement. Si les chiffres d'aimusiclist vous conviennent, vous n'avez rien à faire.",
    "click": "Lisez le message. S'il mentionne une étape de configuration (comme la connexion du module audio), effectuez cette étape pour activer le comptage. Ensuite, les numéros recommenceront le lendemain.",
    "care": "Les nombres antérieurs à l'activation du comptage ne peuvent pas être saisis ultérieurement.",
    "like": "C'est comme un magasin sans comptoir. Impossible de savoir combien de clients sont entrés, alors on se fie aux chiffres du marché."
  },
  "help.stats.note.dataset": {
    "t": "L'enregistrement des statistiques est désactivé.",
    "what": "Votre site n'enregistre pas encore les visites et les écoutes. Vous devez activer le comptage dans votre compte Cloudflare.",
    "when": "Faites-le une seule fois, lorsque vous voudrez consulter les statistiques de votre propre site.",
    "click": "Suivez les étapes indiquées dans le message : créez le stockage des statistiques dans Cloudflare en utilisant le nom exact affiché. Ensuite, sur la page GitHub de votre site, supprimez le symbole « # » au début des trois lignes affichées dans le message et cliquez sur [[Commit changes]]. Votre site sera mis à jour en 1 à 3 minutes. Les chiffres du prochain relevé quotidien s’afficheront.",
    "care": "Le nom doit être exactement **aml_site_stats**. Si vous ignorez l'étape Cloudflare et ne modifiez que les trois lignes, la mise à jour du site échouera. Dans ce cas, remettez le « # ».",
    "like": "C'est comme installer un comptoir d'accueil à l'entrée de votre magasin. Tant qu'il n'est pas installé, personne n'est comptabilisé."
  },
  "help.stats.note.token": {
    "t": "La clé d'utilisation est manquante.",
    "what": "Pour consulter vos propres statistiques, votre site a besoin d'une clé d'utilisation de Cloudflare. Elle n'est pas encore disponible.",
    "when": "Ajoutez-le une seule fois. Cette même clé permet également d'afficher votre espace gratuit en haut de l'écran d'administration.",
    "click": "Rendez-vous dans l'onglet **Informations sur le site** et collez-y la clé. Cette clé nécessite l'autorisation indiquée dans le message. Vos données s'afficheront à partir du prochain comptage quotidien.",
    "care": "Générez la clé sur le **même compte Cloudflare** que ce site. Gardez cette clé secrète. Ne la publiez nulle part.",
    "like": "C'est comme la clé du local des compteurs. Sans cette clé, impossible de relever le compteur, même s'il fonctionne."
  },
  "help.stats.note.no_visits": {
    "t": "Les visites ne sont pas comptabilisées.",
    "what": "Avec cet hébergement, les pages sont envoyées sous forme de fichiers prêts à l'emploi. Les visites ne sont donc pas comptabilisées, mais les lectures le sont.",
    "when": "Cela apparaît automatiquement. C'est normal pour cet hébergement.",
    "click": "Rien à faire. La vignette et le graphique **Visites** sont masqués. Le nombre de parties jouées est comptabilisé par pays, appareil et langue.",
    "like": "C'est comme un magasin qui ne peut pas compter les clients qui entrent, mais qui peut compter chaque chanson passée sur le tourne-disque."
  },
  "help.stats.note.error": {
    "t": "Impossible de lire les statistiques",
    "what": "Le dernier comptage a échoué. La raison est indiquée dans le message.",
    "when": "Cela se manifeste de soi-même lorsqu'un problème survient.",
    "click": "Si le message **Affichage des derniers numéros enregistrés** s'affiche, cela signifie que vous voyez les derniers numéros valides. Le prochain comptage quotidien corrige généralement le problème. Si le même message persiste pendant plusieurs jours, consultez la section « Utilisation » dans les **Informations du site**.",
    "care": "Les jours perdus ne sont pas vains si le décompte reprend bientôt. Les jours très anciens, en revanche, ne reviendront peut-être jamais.",
    "like": "C'est comme un matin où le releveur de compteurs n'a pas pu passer. Le relevé de la veille reste affiché jusqu'à sa prochaine visite."
  },
  "help.stats.updated": {
    "t": "Lorsque les chiffres ont été établis",
    "what": "Cette ligne indique la date du dernier comptage. Elle précise également que les chiffres sont approximatifs, mais pas exacts.",
    "when": "Consultez cette page si un nombre semble ancien. Si la date date d'hier, le prochain comptage n'a pas encore eu lieu.",
    "care": "Le nombre de visites est comptabilisé une fois par jour, peu après minuit UTC. Chaque site dispose de sa propre minute, comme indiqué ici. Les **bots** (programmes automatisés) et **vos propres visites lorsque vous êtes connecté(e)** ne sont pas comptabilisés ; le nombre total est donc légèrement inférieur au nombre de clics.",
    "like": "C'est comme la date imprimée sur un reçu. Elle indique quand le comptage a été effectué."
  },
  "help.stats.csv.days": {
    "t": "Télécharger quotidiennement le fichier CSV",
    "what": "Cela enregistre un fichier contenant une ligne pour chaque jour de la période choisie : visites, écoutes, écoutes depuis aimusiclist, messages du livre d’or et numéros aimusiclist.",
    "when": "Utilisez-le pour conserver vos chiffres ou pour créer vos propres graphiques dans un tableur comme Excel ou Google Sheets.",
    "click": "Le fichier est créé directement dans votre navigateur et enregistré dans vos téléchargements. Rien ne change sur votre site.",
    "care": "Les jours sont en UTC. Choisissez d'abord la période (7, 30 ou 90 jours), car le fichier s'y conforme.",
    "like": "C'est comme photocopier des pages de son carnet d'atelier pour les garder chez soi."
  },
  "help.stats.csv.tracks": {
    "t": "Télécharger les chansons au format CSV",
    "what": "Cela enregistre un fichier avec une ligne pour chaque chanson : classement, changement de classement, nombre de lectures, nombre de lectures depuis aimusiclist, et numéros et classements aimusiclist.",
    "when": "Utilisez-le pour comparer des chansons dans un tableur ou pour garder une trace des performances de chaque chanson.",
    "click": "Le fichier est créé directement dans votre navigateur et enregistré dans vos téléchargements. Rien ne change sur votre site.",
    "care": "Les morceaux sont joués pendant la période que vous avez choisie. Les numéros d'aimusiclist correspondent toujours aux 7 derniers jours. Les cellules vides indiquent l'absence de morceau.",
    "like": "C'est comme recopier la liste des meilleures ventes de votre magasin dans votre propre carnet."
  },
  "help.stats.refresh": {
    "t": "Actualiser maintenant",
    "what": "Ce bouton comptabilise les visites de votre site et se relance immédiatement, y compris aujourd'hui.",
    "when": "Utilisez-le lorsque vous venez de partager une chanson et que vous voulez voir si des gens l'écoutent. Sans cela, les statistiques ne changent qu'une fois par jour.",
    "click": "Après quelques secondes, les chiffres de cet onglet changent. Le nombre de lectures dans votre liste de lecture et sur votre site change également. Ensuite, le bouton attend **1 minute** avant que vous puissiez appuyer à nouveau dessus.",
    "care": "Il y a une limite quotidienne : **200 fois** par jour pour un site que vous avez installé vous-même, **30 fois** par jour sur meshmelo. Le nombre de visites sur aimusiclist reste inchangé. Elles sont toujours comptabilisées une fois par jour. Si vous ne voyez pas ce bouton, votre hébergement ne peut pas effectuer le comptage pour le moment.",
    "like": "C'est comme relever soi-même son compteur électrique en milieu de journée, au lieu d'attendre le relevé du lendemain matin."
  },
  "help.stats.tile.visits": {
    "t": "Visites",
    "what": "Nombre de fois où votre site a été ouvert pendant la période sélectionnée. Ce nombre est indiqué comme **une approximation**, et non une valeur exacte.",
    "when": "Analysez vos publications sur les réseaux sociaux pour voir si elles attirent du monde.",
    "click": "Sous le grand nombre, vous voyez une flèche : vers le haut (▲) indique une valeur supérieure à celle des jours précédents, vers le bas (▼) une valeur inférieure. **Aujourd'hui** affiche le nombre du jour après [[Actualiser maintenant]], ou – s'il n'a pas encore été comptabilisé.",
    "care": "Plus c'est gros, mieux c'est. Les visites des robots et les vôtres ne sont pas comptabilisées. Si le nombre de visiteurs augmente soudainement de façon spectaculaire en une seule journée, consultez la section **D'où viennent les visiteurs** ci-dessous pour en comprendre la raison.",
    "like": "Il s'agit du nombre de clients qui ont franchi la porte de votre magasin."
  },
  "help.stats.tile.plays": {
    "t": "Le jeu a commencé",
    "what": "Combien de fois une chanson a-t-elle été lue depuis le début sur votre site pendant la période choisie ?",
    "when": "C'est le chiffre le plus important pour votre musique. Surveillez-le après avoir mis en ligne une nouvelle chanson.",
    "click": "La flèche compare avec les jours précédents. **Aujourd'hui** affiche le nombre d'aujourd'hui après [[Actualiser maintenant]].",
    "care": "Plus c'est gros, mieux c'est. Une écoute est comptabilisée dès que la chanson **commence**, même si l'auditeur arrête avant. Vos propres écoutes lorsque vous êtes connecté ne sont pas comptabilisées. Si le nombre d'écoutes est à 0 pendant plusieurs jours, consultez les notifications en haut de cette page.",
    "like": "Cela correspond au nombre de fois où un disque a été mis sur le tourne-disque de votre magasin."
  },
  "help.stats.tile.plays_aml": {
    "t": "Pièces de la liste de lecture aimusiclist",
    "what": "Les titres diffusés sur aimusiclist.com proviennent de votre site. Ce chiffre correspond au nombre de ces écoutes.",
    "when": "Regardez cela pour voir à quel point le marché important contribue à faire connaître votre musique.",
    "click": "Rien ne change quand on regarde. La flèche se compare à celle des jours précédents.",
    "care": "Plus c'est gros, mieux c'est. Ces écoutes ne sont **pas** prises en compte pour le classement **populaire** de votre site. aimusiclist a son propre classement. Ce nombre peut être légèrement différent de celui indiqué sur la fiche aimusiclist ci-dessous, car les deux systèmes de comptage diffèrent.",
    "like": "Vos disques sont diffusés sur un étal du grand marché, mais la musique provient de votre propre entrepôt. Ce compteur enregistre la fréquence de cet événement."
  },
  "help.stats.tile.gb": {
    "t": "Messages du livre d'or",
    "what": "Combien de nouveaux messages les gens ont-ils écrits dans votre livre d'or pendant la période choisie ?",
    "when": "Regardez combien de fans vous contactent.",
    "click": "Rien ne change quand on regarde. La flèche se compare à celle des jours précédents.",
    "care": "Plus le nombre de publications est élevé, plus le nombre de fans est important. Vos propres publications ne sont pas comptabilisées. Si le nombre de publications augmente fortement, vérifiez le livre d'or pour détecter d'éventuels spams (messages indésirables).",
    "like": "Cela correspond au nombre de petits mots laissés par les visiteurs dans le livre d'or de votre magasin."
  },
  "help.stats.trend": {
    "t": "Graphique journalier",
    "what": "Chaque barre représente une journée. Une barre plus haute signifie plus de parties (ou de visites) ce jour-là.",
    "when": "Utilisez-le pour trouver les bons jours. Par exemple, le jour où vous avez partagé une chanson sur les réseaux sociaux.",
    "click": "Placez votre souris sur une barre (ou appuyez dessus) pour afficher la date et le nombre. L'échelle est affichée à gauche.",
    "care": "Les jours sont indiqués en temps UTC, donc une journée peut commencer le matin ou le soir selon votre fuseau horaire. Un emplacement vide signifie 0 ou que le jour n'est pas comptabilisé.",
    "like": "C'est comme une rangée de pièces empilées, une pile pour chaque jour. Les piles les plus hautes correspondent aux jours les plus chargés."
  },
  "help.stats.table_view": {
    "t": "Afficher sous forme de tableau",
    "what": "Cela ouvre les mêmes chiffres sous forme de tableau : une ligne pour chaque jour, le jour le plus récent en premier.",
    "when": "Utilisez-le lorsque vous souhaitez obtenir le chiffre exact pour une journée, ou lorsqu'un graphique est difficile à lire.",
    "click": "Appuyez dessus pour ouvrir ou fermer le tableau. Aucune donnée n'est enregistrée.",
    "care": "Seule la période sélectionnée est affichée. Pour conserver les données, utilisez l'option [[Télécharger le fichier CSV quotidien]] en bas de page.",
    "like": "C'est le même carnet d'atelier, mais avec les images remplacées par de simples lignes de chiffres."
  },
  "help.stats.col.date": {
    "t": "Date (UTC)",
    "what": "Le jour auquel correspond chaque ligne est comptabilisé. Les jours sont exprimés en **UTC**, heure standard mondiale.",
    "when": "Utilisez-le pour associer une journée à une activité que vous avez réalisée, comme partager une chanson.",
    "care": "L'heure UTC n'est pas votre heure locale. En Corée, une journée UTC commence à 9 h. Par conséquent, une chanson partagée tard dans la nuit peut être comptabilisée le lendemain ou le jour précédent.",
    "like": "C'est comme un registre de magasin qui utilise toujours la même horloge mondiale, de sorte que chaque magasin du grand marché inscrit la même date."
  },
  "help.stats.col.rank": {
    "t": "Rang",
    "what": "Le classement de la chanson dans l'ordre **Populaire** de votre site. À côté, vous pouvez voir son évolution depuis la veille.",
    "when": "Consultez-le pour trouver vos chansons préférées.",
    "click": "Rien à sélectionner. ▲ indique une hausse, ▼ une baisse, – aucune modification. **NOUVEAU** : nouvelle entrée. **RÉ** : réapparition après une sortie de la liste.",
    "care": "Plus le nombre est petit, mieux c'est (1 étant le meilleur). – signifie que le morceau n'a pas de classement car personne ne l'a écouté ces 7 derniers jours.",
    "like": "C'est le numéro figurant sur la liste des meilleures ventes dans votre vitrine."
  },
  "help.stats.col.plays": {
    "t": "Pièces de théâtre (jours choisis)",
    "what": "Combien de fois cette chanson a-t-elle été diffusée sur votre site pendant la période choisie ?",
    "when": "Utilisez-le pour comparer les chansons entre elles.",
    "care": "Plus c'est gros, mieux c'est. Les écoutes enregistrées via aimusiclist se trouvent dans la colonne suivante, et non ici. Si le nombre d'écoutes d'un nouveau morceau est de 0, veuillez patienter jusqu'au prochain décompte quotidien.",
    "like": "Cela correspond au nombre de fois où ce disque a été passé sur la platine de votre magasin."
  },
  "help.stats.col.plays_aml": {
    "t": "De la liste de musique aimusiclist",
    "what": "Combien de fois ce morceau a-t-il été joué sur aimusiclist.com pendant la période choisie, d'après les données envoyées par votre site ?",
    "when": "Utilisez-le pour voir quelles chansons les gens trouvent sur le marché.",
    "care": "Plus c'est gros, mieux c'est. Ces écoutes n'ont aucune incidence sur le classement des écoutes populaires de votre site. Le résultat peut différer légèrement du classement **aimusiclist (7 jours)**, car les deux plateformes utilisent des méthodes de calcul différentes.",
    "like": "Cela correspond au nombre de fois où ce disque a quitté votre entrepôt pour être diffusé sur le marché principal."
  },
  "help.stats.col.likes": {
    "t": "J'aime ♥",
    "what": "Combien de « j’aime » cette chanson a-t-elle reçus sur votre site, depuis le tout début jusqu’à maintenant ?",
    "when": "Utilisez-le pour voir quelles sont les chansons préférées de vos fans.",
    "care": "Il s'agit du **total total**, et non du total pour la période sélectionnée. Le calcul est effectué une fois par jour. Les mentions « J'aime » sur aimusiclist sont comptabilisées séparément, dans la fiche aimusiclist.",
    "like": "C'est comme compter les cœurs que les fans ont dessinés sur les cartes d'une chanson dans votre magasin."
  },
  "help.stats.col.aml_plays7": {
    "t": "aimusiclist joue (7 jours)",
    "what": "Combien de fois ce morceau a-t-il été joué sur aimusiclist.com au cours des 7 derniers jours, selon le comptage d'aimusiclist ?",
    "when": "Utilisez-le pour voir comment votre chanson se porte sur le marché principal cette semaine.",
    "care": "La durée est toujours de **7 jours**, quelle que soit la période choisie. Le nombre est indiqué une fois par jour. Plus il est élevé, mieux c'est.",
    "like": "Il s'agit de la propre évaluation du marché principal indiquant la fréquence à laquelle votre disque a été diffusé cette semaine."
  },
  "help.stats.col.aml_valid7": {
    "t": "Parties valides (7 jours)",
    "what": "Nombre de titres écoutés sur aimusiclist au cours des 7 derniers jours pendant **30 secondes ou plus**.",
    "when": "Utilisez-le pour observer une véritable écoute. Un passage rapide n'est pas une écoute valable.",
    "care": "Plus c'est gros, mieux c'est. C'est toujours un peu moins que le nombre total de lectures. Si c'est beaucoup moins gros, les gens risquent de passer au morceau suivant. Essayez un début de chanson plus percutant ou une meilleure reprise. aimusiclist utilise les lectures valides pour établir son classement équitable.",
    "like": "Ce sont les clients qui sont restés assez longtemps à votre stand pour vraiment entendre la chanson, et non ceux qui sont simplement passés devant."
  },
  "help.stats.col.chart": {
    "t": "classement graphique",
    "what": "Le classement de la chanson dans le palmarès hebdomadaire d'aimusiclist (le Top 100). À côté, vous pouvez voir son évolution depuis le dernier classement.",
    "when": "Consultez-le pour savoir si votre chanson a figuré dans le classement principal.",
    "care": "Plus le chiffre est petit, mieux c'est. **NOUVEAU** signifie que le titre vient d'entrer dans le classement. – signifie qu'il n'y figure pas encore. C'est normal pour la plupart des chansons.",
    "like": "Il s'agit de la place de votre disque dans le classement des meilleures ventes du marché principal."
  },
  "help.stats.col.genre_rank": {
    "t": "Classement par genre",
    "what": "Le classement de la chanson sur le palmarès aimusiclist pour son propre genre (comme le R&B ou le hip-hop).",
    "when": "Utilisez-le pour voir comment votre chanson se compare aux chansons du même style.",
    "care": "Plus le nombre est petit, mieux c'est. Un classement par genre est plus petit que le classement principal ; il est donc plus facile d'y obtenir un rang. – signifie qu'aucun classement par genre n'est encore disponible.",
    "like": "C'est votre place sur un rayon du grand magasin, par exemple le rayon R&B."
  },
  "help.stats.col.all_rank": {
    "t": "Classement de toutes les chansons",
    "what": "Voici le classement de ce morceau parmi **tous les titres** écoutés sur aimusiclist cette semaine (du vendredi au jeudi). Vous trouverez ci-dessous son meilleur classement historique.",
    "when": "Utilisez-le même si votre chanson ne figure pas dans le Top 100. Vous pourrez quand même voir son classement progresser.",
    "click": "Rien à signaler. ▲ et un chiffre indiquent le nombre de places gagnées depuis la semaine dernière. ▼ indique le nombre de places perdues.",
    "care": "Un nombre plus petit est préférable. Il change **tous les vendredis**. Une chanson que personne n'a écoutée cette semaine le prouve.",
    "like": "Même si votre record ne figure pas sur le tableau principal, vous pouvez toujours voir son numéro dans la liste complète du grand marché."
  },
  "help.stats.tracks": {
    "t": "chansons populaires",
    "what": "Un tableau de vos chansons avec leur nombre d'écoutes et leur classement. Il affiche jusqu'à 100 chansons, les mieux classées en premier.",
    "when": "Utilisez-le pour voir quelle chanson est votre tube du moment et quelles chansons méritent plus d'attention.",
    "click": "Rien ne change lorsque vous consultez la page. La colonne **Écoutes** correspond à la période que vous avez sélectionnée en haut. Les colonnes aimusiclist affichent toujours les 7 derniers jours.",
    "care": "Le classement ici correspond à l'ordre du bouton **Populaire** de votre site. Il change une fois par jour. Les colonnes d'aimusiclist s'affichent uniquement lorsque aimusiclist.com envoie vos données.",
    "like": "C'est la liste des meilleures ventes que vous affichez au mur de votre magasin."
  },
  "help.stats.rank_basis": {
    "t": "Comment est fabriquée la commande populaire",
    "what": "Cette ligne indique ce qui détermine le classement **Populaire** de votre site. Il s'agit soit du nombre de vues sur votre site, soit du nombre de vues comptabilisées par aimusiclist si votre site ne peut pas les comptabiliser.",
    "when": "Lisez ceci lorsque vous vous demandez pourquoi une chanson est placée au-dessus d'une autre.",
    "care": "Seuls les **7 derniers jours** sont pris en compte, et seuls les morceaux écoutés sont classés (jusqu'à 100). En cas d'égalité, le nombre d'écoutes validées par aimusiclist est prioritaire, suivi du morceau le plus récent. Les écoutes enregistrées via aimusiclist ne sont pas prises en compte.",
    "like": "C'est la fiche explicative qui se trouve à côté de la liste des meilleures ventes, indiquant à tous comment cette liste est établie."
  },
  "help.stats.albums": {
    "t": "Albums",
    "what": "Un tableau de vos albums. Chaque ligne additionne le nombre d'écoutes de tous les morceaux de cet album.",
    "when": "Utilisez-le pour voir quel album les gens écoutent le plus.",
    "care": "Le tableau est trié par album, du plus écouté au moins écouté. Une chanson présente sur deux albums est comptabilisée dans les deux.",
    "like": "C'est comme compter les ventes par coffret plutôt que par disque individuel."
  },
  "help.stats.album.plays": {
    "t": "Lectures de l'album (jours choisis)",
    "what": "Toutes les écoutes des titres de cet album pendant la période sélectionnée. Cela inclut les écoutes sur votre site **et** celles provenant d'aimusiclist.",
    "when": "Utilisez-le pour comparer les albums.",
    "care": "Plus c'est long, mieux c'est. Un album avec de nombreuses chansons peut paraître long simplement parce qu'il contient plus de titres. Regardez aussi la colonne **Chansons**.",
    "like": "Il s'agit du total des disques d'un même coffret qui ont été passés, à la fois dans votre magasin et sur le grand étal du marché."
  },
  "help.stats.album.aml_plays7": {
    "t": "Album aimusiclist écoute (7 jours)",
    "what": "Toutes les écoutes des chansons de cet album recensées par aimusiclist au cours des 7 derniers jours, selon le décompte d'aimusiclist.",
    "when": "Utilisez-le pour voir quel album est populaire sur le marché cette semaine.",
    "care": "La durée est toujours de **7 jours**, quelle que soit la période choisie. Plus c'est long, mieux c'est.",
    "like": "Il s'agit du décompte propre au marché pour votre coffret complet cette semaine."
  },
  "help.stats.listeners": {
    "t": "Auditeurs (par pièces de théâtre)",
    "what": "Cette fiche indique qui écoute vos chansons : son pays, son appareil, sa langue et l’heure de la journée.",
    "when": "Utilisez-le pour décider où diffuser votre musique et dans quelle langue écrire.",
    "care": "Votre hébergement ne comptabilise pas les visites ; cette carte est donc établie à partir des **écoutes**, et non des visites. Aucune information personnelle n'est conservée. Le pourcentage correspond à la part de chaque écoute dans la liste affichée.",
    "like": "C'est comme remarquer de quelles villes viennent les gens qui ont mis vos disques sur le marché."
  },
  "help.stats.countries": {
    "t": "Pays",
    "what": "Les pays d'origine de vos auditeurs ou visiteurs. Le top 10 est affiché, du plus important au moins important.",
    "when": "Utilisez-le pour choisir les langues des titres de chansons ou pour planifier leur diffusion dans un pays spécifique.",
    "care": "**Inconnu** signifie que le pays n'a pas pu être trouvé. Un faible pourcentage d'inconnu est normal.",
    "like": "C'est comme des épingles sur une carte du monde dans votre boutique, une pour le pays d'origine de chaque client."
  },
  "help.stats.devices": {
    "t": "Appareils",
    "what": "Quel appareil les internautes ont-ils utilisé pour accéder à votre site : téléphone ou tablette ?",
    "when": "Utilisez-le lors du choix de l'apparence de votre site. Si la plupart des visiteurs utilisent un téléphone, vérifiez l'affichage de votre site sur mobile.",
    "care": "Les appareils impossibles à distinguer ne sont pas représentés.",
    "like": "C'est comme remarquer si les invités sont arrivés à pied, à vélo ou en voiture."
  },
  "help.stats.langs": {
    "t": "Langues",
    "what": "La langue configurée sur les téléphones ou ordinateurs de vos visiteurs. Les 10 langues les plus utilisées sont affichées.",
    "when": "Utilisez-le pour décider dans quelles langues rédiger les textes de votre site et les titres de vos chansons.",
    "care": "Il s'agit du langage de leur appareil, pas forcément celui qu'ils maîtrisent le mieux. **Inconnu** signifie que l'appareil n'a pas pu répondre.",
    "like": "C'est comme entendre les langues parlées par vos invités lorsqu'ils entrent."
  },
  "help.stats.audience": {
    "t": "Public",
    "what": "Cette fiche indique qui sont vos visiteurs : leur pays, leur lieu de provenance, leur appareil, leur langue et l’heure de la journée.",
    "when": "Utilisez-le pour décider où diffuser votre musique et dans quelle langue écrire.",
    "click": "Rien ne change lorsque vous consultez la liste. Chaque liste correspond à la période que vous avez choisie.",
    "care": "Aucune information personnelle n'est conservée. Seuls les grands groupes sont comptabilisés, comme « Corée » ou « Téléphone ». Le pourcentage affiché correspond à la part de chaque élément dans la liste.",
    "like": "C'est comme si un commerçant remarquait : « Aujourd'hui, de nombreux clients sont venus à pied de la ville voisine, en soirée. »"
  },
  "help.stats.refs": {
    "t": "D'où venaient les visiteurs",
    "what": "Comment les internautes ont trouvé votre site, en grande partie : ils ont saisi l’adresse ou ajouté votre site à leurs favoris, utilisé la recherche, les applications sociales et musicales, aimusiclist.com, d’autres sites, et ont navigué à l’intérieur de votre site.",
    "when": "Utilisez-le pour voir quel mode de partage vous convient le mieux.",
    "care": "**Accès direct / favoris** inclut également les liens ouverts depuis des applications de messagerie instantanée qui n'indiquent pas leur provenance. **À l'intérieur de votre site** signifie passer d'une page à l'autre de votre site.",
    "like": "C'est comme demander à chaque client à la porte : « Comment avez-vous entendu parler de ma boutique ? »"
  },
  "help.stats.domains": {
    "t": "Principaux sites référents",
    "what": "Les noms des sites web qui ont généré le plus de visites sur votre site. Jusqu'à 10 sites sont affichés.",
    "when": "Utilisez-le pour identifier les publications ou pages qui génèrent du trafic. Vous pourrez ensuite les remercier ou partager à nouveau sur ces mêmes pages.",
    "care": "Seul le nom du site est affiché, et non la page exacte. Les visites provenant de votre propre site ne figurent pas dans cette liste.",
    "like": "C'est comme une liste des commerces voisins dont les enseignes indiquent le chemin vers votre boutique."
  },
  "help.stats.hours": {
    "t": "Heure de la journée",
    "what": "Chaque barre représente une heure de la journée (de 0h00 à 23h00). Une barre plus haute indique un plus grand nombre de parties ou de visites pendant cette heure, cumulées sur la période choisie.",
    "when": "Utilisez-le pour choisir le bon moment pour partager une nouvelle chanson. Partagez-la un peu avant les heures de pointe.",
    "click": "Placez votre souris sur une barre (ou appuyez dessus) pour afficher l'heure et le chiffre.",
    "care": "L'heure est affichée selon le **fuseau horaire de votre ordinateur**. Le titre indique le décalage par rapport à UTC. Dans certains pays utilisant des fuseaux horaires avec des demi-heures, l'heure reste en UTC.",
    "like": "C'est comme savoir que votre magasin est le plus fréquenté à l'heure du déjeuner et après l'école."
  },
  "help.stats.aml.title": {
    "t": "Sur aimusiclist.com",
    "what": "Cette carte affiche vos statistiques sur aimusiclist.com : écoutes, écoutes valides, mentions « J’aime » et ajouts à des playlists, avec un graphique quotidien et les pays.",
    "when": "Utilisez-le pour voir comment vos chansons publiques se comportent sur le marché principal.",
    "click": "Rien ne change lorsque vous regardez. Les carreaux suivent la période que vous avez choisie en haut.",
    "care": "Ces chiffres sont disponibles **une fois par jour** (le matin). [[Actualiser maintenant]] ne les modifie pas. Si le message « Non connecté » s'affiche, connectez d'abord votre site à aimusiclist.com. Seuls les morceaux que vous avez rendus publics sur aimusiclist sont comptabilisés.",
    "like": "C'est le rapport que le grand marché vous envoie chaque matin concernant votre étal."
  },
  "help.stats.aml.plays": {
    "t": "aimusiclist joue",
    "what": "Combien de fois vos chansons ont-elles été jouées sur aimusiclist.com pendant la période choisie ?",
    "when": "Utilisez-le pour voir si vous gagnez en visibilité sur le marché principal.",
    "care": "Plus c'est gros, mieux c'est. La flèche compare avec les jours précédents. Ce chiffre ne prend en compte que les morceaux que vous avez rendus publics sur aimusiclist. Si le nombre tombe soudainement à 0, vérifiez que vos morceaux sont toujours publics et que votre site est toujours connecté.",
    "like": "Cela correspond au nombre de fois où vos disques ont été passés à votre stand sur le grand marché."
  },
  "help.stats.aml.valid": {
    "t": "Parties valides (30 s+)",
    "what": "aimusiclist diffuse les morceaux que les gens ont écoutés pendant 30 secondes ou plus, durant la période choisie.",
    "when": "Utilisez-le pour une écoute réelle, et non pour des sauts rapides.",
    "care": "Plus c'est gros, mieux c'est. Si le nombre d'écoutes est bien inférieur à **Écoutes**, beaucoup de gens passent leur chemin rapidement. aimusiclist utilise les écoutes valides pour établir son classement équitable ; ce chiffre est donc primordial pour votre position dans les classements.",
    "like": "Ce sont les clients qui sont restés suffisamment longtemps à votre stand pour vraiment entendre la chanson."
  },
  "help.stats.aml.likes": {
    "t": "aimusiclist aime",
    "what": "Combien de « j’aime » vos chansons ont-elles reçus sur aimusiclist.com pendant la période choisie ?",
    "when": "Utilisez-le pour savoir ce que vos fans pensent de vos nouvelles chansons.",
    "care": "Plus c'est gros, mieux c'est. Ces mentions « J'aime » proviennent d'aimusiclist, pas de votre site. Les mentions « J'aime » de votre site se trouvent dans la colonne **J'aime ♥** du tableau « Chansons populaires ».",
    "like": "C'est comme les cœurs laissés sur le panneau de votre étal au grand marché."
  },
  "help.stats.aml.adds": {
    "t": "Ajouté aux listes de lecture",
    "what": "Combien de fois vos chansons ont-elles été ajoutées aux playlists sur aimusiclist.com pendant la période choisie ?",
    "when": "Utilisez-le pour voir si les gens ont envie d'écouter vos chansons encore et encore.",
    "care": "Plus c'est gros, mieux c'est. L'ajout à une playlist est un signe fort : la personne prévoit de réécouter le morceau.",
    "like": "C'est comme si un client achetait votre disque pour l'emporter chez lui, au lieu de l'écouter une seule fois sur le stand."
  },
  "help.stats.aml.trend": {
    "t": "aimusiclist écoute par jour",
    "what": "Chaque barre représente une journée d'écoutes sur aimusiclist.com. Plus la barre est haute, plus le nombre d'écoutes ce jour-là est élevé.",
    "when": "Utilisez-le pour voir à quelle période vos chansons étaient populaires sur le marché principal, par exemple la semaine où une chanson est entrée dans un classement.",
    "click": "Placez votre souris sur une barre (ou appuyez dessus) pour afficher la date et le nombre.",
    "care": "Le graphique s'arrête le même jour que les données de votre site (hier, UTC). Les cases vides indiquent l'absence de données ce jour-là.",
    "like": "Il s'agit d'une rangée de piles de pièces pour votre étal au grand marché, une pile par jour."
  },
  "help.stats.aml.countries": {
    "t": "pays auditeurs d'aimusiclist",
    "what": "Pays d'origine des personnes ayant écouté vos chansons sur aimusiclist.com. Jusqu'à 10 pays sont affichés, du plus grand au plus petit.",
    "when": "Utilisez-le pour trouver les pays où votre musique se développe sur le marché international.",
    "care": "Cette liste, générée par aimusiclist, est mise à jour quotidiennement. Elle peut différer des listes de pays de votre site.",
    "like": "C'est le grand marché qui vous indique de quels pays viennent les clients de votre stand."
  },
  "help.stats.free.r2_storage": {
    "t": "Espace de stockage",
    "what": "L'espace occupé par vos chansons et vos photos dans votre espace de stockage Cloudflare. Le forfait gratuit vous offre **10 Go**.",
    "when": "Vérifiez-le avant de télécharger de nombreuses chansons ou des fichiers très volumineux.",
    "care": "Si vous dépassez votre quota gratuit, Cloudflare vous facturera des frais. Supprimer les morceaux dont vous n'avez pas besoin libère de l'espace. Les fichiers WAV sont beaucoup plus volumineux que les fichiers MP3.",
    "like": "Cela dépend du niveau de remplissage de votre entrepôt."
  },
  "help.stats.free.workers": {
    "t": "Demandes de site aujourd'hui",
    "what": "Combien de fois votre site a-t-il été sollicité aujourd'hui pour des pages, des chansons ou des images ? Le forfait gratuit autorise **100 000 requêtes par jour**.",
    "when": "Vérifiez-le un jour de forte affluence, par exemple après un gros partage.",
    "care": "Si votre trafic dépasse les 100 000 visites par jour, votre site **sera mis hors service pour le reste de la journée** (sans frais). Il redémarrera à 00h00 UTC (9h00 heure coréenne).",
    "like": "C'est comme une porte de magasin qui ne peut s'ouvrir qu'un certain nombre de fois par jour. Après cela, elle reste fermée jusqu'au lendemain."
  },
  "help.stats.free.r2_class_a": {
    "t": "Storage écrit ce mois-ci",
    "what": "Combien de fois avez-vous enregistré des éléments dans votre espace de stockage ce mois-ci, comme le chargement d'une chanson ou la modification de paramètres ? Le forfait gratuit autorise **1 million d'enregistrements par mois**.",
    "when": "Vérifiez-le si vous téléchargez ou modifiez beaucoup de choses.",
    "care": "En utilisation normale, le débit reste largement inférieur à la limite. Si vous la dépassez, Cloudflare vous facturera des frais. Le compteur est remis à zéro chaque mois.",
    "like": "Cela correspond au nombre de fois où des cartons ont été déposés dans votre entrepôt ce mois-ci."
  },
  "help.stats.free.r2_class_b": {
    "t": "Lectures sur le stockage ce mois-ci",
    "what": "Combien de fois des fichiers ont été retirés de votre espace de stockage ce mois-ci ? Il s’agissait principalement de chansons écoutées. Le forfait gratuit autorise **10 millions de fichiers par mois**.",
    "when": "Vérifiez-le lorsque vos chansons sont beaucoup écoutées.",
    "care": "Si vous dépassez ce seuil, Cloudflare vous facturera. Le compteur est remis à zéro chaque mois. Plus vous êtes populaire, plus cette barre se remplit.",
    "like": "Cela correspond au nombre de fois où des disques ont été sortis de votre entrepôt ce mois-ci."
  },
  "help.stats.free.ae": {
    "t": "Records statistiques d'aujourd'hui",
    "what": "Nombre de lignes enregistrées aujourd'hui par votre site dans son journal de statistiques (une ligne par visite, lecture ou message dans le livre d'or). Le quota gratuit est de **100 000 lignes par jour**.",
    "when": "Vérifiez-le un jour de forte affluence.",
    "care": "Cette barre s'affiche uniquement lorsque les données du jour ont été comptabilisées, par exemple après avoir cliqué sur [[Actualiser maintenant]]. Un site web classique affiche généralement un trafic bien inférieur au seuil gratuit. Vos pages invitées et vos morceaux ne sont pas affectés par cette barre.",
    "like": "C'est le nombre de lignes que le compteur de clients a inscrites aujourd'hui dans son carnet."
  },
  "help.stats.free.title": {
    "t": "Plan de salle gratuit",
    "what": "Ces barres indiquent la part du forfait gratuit de Cloudflare utilisée par votre site. Votre site reste gratuit tant que chaque barre reste inférieure à 100 %.",
    "when": "Jetez-y un œil de temps en temps, et toujours après avoir mis en ligne plusieurs chansons.",
    "click": "Rien ne change lorsque vous regardez. Une barre prend une couleur d'avertissement à **70 %** et une couleur de danger à **90 %**.",
    "care": "Si une barre de chargement approche les 100 %, arrêtez d'envoyer des fichiers volumineux et vérifiez quelle barre est pleine. Le forfait gratuit est suffisant pour environ 1 000 chansons (d'environ 10 Mo chacune) et quelques milliers de visiteurs par jour.",
    "like": "C'est comme les compteurs d'eau et d'électricité de votre magasin. Tant que vous restez en dessous du seuil de gratuité, vous ne payez rien."
  },
  "help.an.title": {
    "t": "Analyse",
    "what": "Cet onglet vous permet de suivre l'évolution de vos chansons au fil du temps : les classements qui montent et qui descendent, les chansons qui gagnent en popularité et les actualités de aimusiclist.com.",
    "when": "Ouvrez-le une fois par semaine pour observer les tendances. L'onglet **Statistiques** indique le nombre de valeurs. Cet onglet indique si la tendance est à la hausse ou à la baisse.",
    "click": "L'affichage ne change rien sur votre site. Choisissez une période en haut, et les graphiques et le tableau s'adapteront en conséquence.",
    "care": "Votre site enregistre une ligne par jour. Le premier jour, il n'y a donc rien à tracer. Dès le lendemain matin, les graphiques se remplissent jour après jour. Les enregistrements de plus de deux ans sont supprimés.",
    "like": "C'est comme un journal intime que votre magasin tient au quotidien. Après quelques semaines, vous pouvez le consulter et voir comment les choses ont évolué."
  },
  "help.an.period": {
    "t": "Période (7 / 30 / 90 jours / Toutes)",
    "what": "Ces boutons permettent de choisir le nombre de jours affichés dans les graphiques et le tableau. L'option **Tous** affiche tous les jours enregistrés jusqu'à présent.",
    "when": "Utilisez 7 jours pour cette semaine, 30 ou 90 jours pour une vue d'ensemble plus longue, et **Tout** pour voir l'histoire complète d'une chanson.",
    "click": "Les graphiques et le tableau se mettent à jour instantanément. **L'affichage de l'ensemble** peut prendre quelques secondes la première fois, car les enregistrements plus anciens sont également ouverts.",
    "care": "Certaines catégories analysent systématiquement les 7 derniers jours, quel que soit votre choix : **Mes titres en progression**, la colonne **Évolution sur 7 jours** et les statistiques aimusiclist. **Les mentions « J’aime » et les ajouts aux playlists** affichent au maximum 90 jours.",
    "like": "C'est comme choisir combien de pages de son journal de bord de boutique lire à la fois."
  },
  "help.an.note.start": {
    "t": "Les enregistrements commencent aujourd'hui",
    "what": "Votre site vient de commencer à enregistrer son journal quotidien. Aucun jour précédent n'est encore disponible.",
    "when": "Cela s'affiche le premier jour suivant l'activation de cette fonctionnalité.",
    "click": "Rien à faire. Revenez demain. Chaque matin, un jour de plus est ajouté aux graphiques.",
    "care": "Les jours antérieurs à aujourd'hui ne peuvent pas être complétés ultérieurement, les graphiques commencent donc à partir d'aujourd'hui.",
    "like": "C'est la première page d'un agenda tout neuf. Demain, il n'y aura qu'une seule ligne."
  },
  "help.an.note.since": {
    "t": "Enregistrement depuis",
    "what": "Le premier jour où votre site a commencé à enregistrer ses données quotidiennes. Les graphiques ne peuvent pas remonter au-delà de cette date.",
    "when": "Observez lorsqu'un graphique semble démarrer en retard.",
    "care": "Les données sont conservées pendant environ 2 ans. Les mois les plus anciens sont supprimés automatiquement.",
    "like": "Il s'agit de la date inscrite sur la première page de votre carnet de magasin."
  },
  "help.an.note.feed": {
    "t": "données aimusiclist",
    "what": "Votre site reçoit quotidiennement un bref rapport d'aimusiclist.com : titres en vogue, classements et actualités. Cette ligne indique la date du rapport.",
    "when": "Consultez-le lorsque la liste des tendances ou les actualités semblent dépassées.",
    "click": "Rien à signaler. Le rapport est envoyé automatiquement une fois par jour. S'il indique que les données ne sont pas encore disponibles, veuillez réessayer demain.",
    "care": "Ouvrir cet onglet plusieurs fois n'entraîne pas une nouvelle requête à aimusiclist. Seul le rapport enregistré s'affiche. C'est donc gratuit.",
    "like": "C'est comme le journal que le grand marché dépose chaque matin devant votre magasin."
  },
  "help.an.note.feed_old": {
    "t": "Les données d'aujourd'hui ne sont pas arrivées.",
    "what": "Votre site a tenté de récupérer le rapport d'aujourd'hui provenant d'aimusiclist.com, mais celui-ci n'est pas arrivé. Vous consultez donc le dernier rapport affiché.",
    "when": "Cela apparaît de soi-même.",
    "click": "Rien à faire. Votre site réessayera automatiquement demain.",
    "care": "Vos propres données ne sont pas affectées. Seules les données d'aimusiclist peuvent dater d'un jour. Si le problème persiste plusieurs jours, vérifiez la connexion de votre site à aimusiclist.com.",
    "like": "C'est un matin où le journal n'est pas arrivé. Celui d'hier est encore sur la table."
  },
  "help.an.news": {
    "t": "Actualités d'aimusiclist",
    "what": "Les 5 derniers messages d'aimusiclist.com. **Rapport des classements** vous informe sur les classements. **Avis** vous informe des modifications apportées au service.",
    "when": "Lisez-le lorsque vous voyez un point dans l'onglet **Analyse**. Ce point indique la présence de nouvelles informations.",
    "click": "Appuyez sur **Lire la suite** pour ouvrir l'article complet sur aimusiclist.com dans un nouvel onglet. L'ouverture de cet onglet fait disparaître le point.",
    "care": "Les actualités sont publiées une fois par jour avec les données d'aimusiclist. Les images ne sont pas affichées ici afin d'alléger l'écran.",
    "like": "C'est le panneau d'affichage du grand marché, avec les cinq dernières affiches."
  },
  "help.an.rank.basis": {
    "t": "Quel rang tirer",
    "what": "Choisissez le classement à afficher sur le graphique. **Classement aimusiclist** correspond à la position des chansons parmi toutes les chansons sur aimusiclist. **Classement de mon site** correspond au classement de popularité de votre site. **Les deux** affiche deux graphiques.",
    "when": "Utilisez le classement aimusiclist pour voir votre performance sur le marché global, et le classement de mon site pour voir ce que vos visiteurs apprécient.",
    "click": "Le graphique se modifie immédiatement. Vos choix musicaux reviennent à vos 3 titres préférés. Ce choix modifie également la colonne **Mes titres en progression** et la colonne **Évolution sur 7 jours**.",
    "care": "Dans un premier temps, le graphique utilise le classement d'aimusiclist s'il existe. Une chanson qui n'a jamais été classée n'apparaît pas dans la liste de sélection.",
    "like": "C'est comme choisir entre le tableau d'affichage du grand marché et celui de votre propre magasin."
  },
  "help.an.rank": {
    "t": "Changements de rang",
    "what": "Graphique linéaire du classement de vos chansons, jour après jour. Chaque chanson a sa propre couleur, son propre style de ligne et la forme de ses points.",
    "when": "Utilisez-le pour voir si une chanson monte, descend ou reste stable, et pour comparer quelques chansons.",
    "click": "Sélectionnez les chansons sous le titre. Placez votre curseur sur un point (ou appuyez dessus) pour afficher le titre, la date et le classement.",
    "care": "**Plus la valeur est élevée sur le graphique, mieux c'est** (1 étant en haut). Si les rangs sont très éloignés les uns des autres, l'échelle est réduite pour que toutes les lignes tiennent. L'espacement entre les graduations n'est alors plus égal.",
    "like": "C'est comme une carte d'alpinisme. Chaque chanson représente un alpiniste, et le sommet de la carte, le pic."
  },
  "help.an.rank.pick": {
    "t": "Choisir des chansons",
    "what": "Les noms des chansons sous cette ligne sont des commutateurs. Une chanson cochée se voit attribuer une ligne sur le graphique.",
    "when": "Choisissez quelques chansons que vous souhaitez comparer, comme votre chanson la plus récente et votre meilleure chanson.",
    "click": "Touchez le nom d'une chanson pour l'ajouter ou la retirer. Le graphique se met à jour instantanément. Au départ, vos 3 chansons les mieux classées sont affichées.",
    "care": "Vous pouvez sélectionner **jusqu'à 8 chansons**. Au-delà de 8, les autres titres ne seront plus disponibles tant que vous n'en aurez pas supprimé un. Vos sélections ne sont pas sauvegardées. Elles sont réinitialisées lorsque vous modifiez le type de classement.",
    "like": "C'est comme choisir quels alpinistes suivre sur une carte de la montagne."
  },
  "help.an.rank.gap": {
    "t": "Ruptures dans une ligne",
    "what": "Une interruption signifie que cette chanson n'avait aucun classement ce jour-là.",
    "when": "Lisez-le lorsqu'une ligne s'arrête et reprend.",
    "care": "C'est normal. Un morceau n'est pas classé si personne ne l'a joué ces 7 derniers jours, ou si les chiffres du jour ne sont pas disponibles. Un point sans ligne signifie qu'un seul jour a été classé.",
    "like": "C'est comme un alpiniste qui s'écarte du sentier pendant un moment, puis qui y revient."
  },
  "help.an.sort": {
    "t": "Trier",
    "what": "Choisissez l'ordre du tableau : **Les plus écoutés**, **Temps d'écoute**, **En hausse** (plus forte progression de la semaine) ou **Les plus récents** (du dernier titre mis en ligne au plus récent).",
    "when": "Utilisez Rising pour trouver des chansons à partager dès maintenant. Utilisez Newest pour voir comment les nouvelles chansons se portent.",
    "click": "L'ordre du tableau est immédiatement modifié. Aucune sauvegarde n'est effectuée.",
    "care": "Les chansons de même valeur sont triées par titre. Dans **Rising**, les chansons qui viennent d'obtenir un classement (NOUVEAU) apparaissent après chaque chanson ayant connu une véritable évolution, et les chansons sans classement apparaissent en dernier.",
    "like": "C'est comme ranger les disques sur une étagère par ventes, par durée d'écoute, par tendance ou par date d'arrivée."
  },
  "help.an.table": {
    "t": "Mes chansons en bref",
    "what": "Un tableau récapitulant toutes vos chansons avec le nombre de lectures, la durée d'écoute, le classement aimusiclist, la variation sur 7 jours et la date de mise en ligne.",
    "when": "Utilisez-le pour trouver vos chansons les plus performantes et celles qui commencent tout juste à percer.",
    "click": "Utilisez les boutons de tri situés à côté du titre pour modifier l'ordre. Jusqu'à 200 chansons sont affichées.",
    "care": "Seuls les morceaux disposant d'un fichier audio sont affichés. Sur un petit écran de téléphone, la colonne **Téléchargée** est masquée pour gagner de la place.",
    "like": "Voici la liste complète des prix de tous les disques disponibles dans votre magasin."
  },
  "help.an.own_off": {
    "t": "Les parties jouées sur mon site ne sont pas comptabilisées.",
    "what": "Votre site ne peut pas encore comptabiliser ses propres écoutes. La colonne **Écoutes** affiche donc les écoutes d'aimusiclist des 7 derniers jours.",
    "when": "Cela apparaît de soi-même.",
    "click": "Rien à faire. Si vous activez le comptage des actions (voir les notifications dans l'onglet **Statistiques**), cette colonne affichera vos propres actions.",
    "care": "Dans ce cas précis, Plays ne tient pas compte des boutons de période. L'affichage porte toujours sur les 7 derniers jours.",
    "like": "Votre magasin n'a pas de comptoir à l'entrée, vous empruntez donc pour le moment les chiffres du grand supermarché."
  },
  "help.an.col.plays": {
    "t": "Pièces de théâtre",
    "what": "Combien de fois la chanson a-t-elle été diffusée sur votre site pendant la période choisie ?",
    "when": "Utilisez-le pour trouver vos chansons les plus écoutées.",
    "care": "Plus c'est gros, mieux c'est. Les écoutes provenant d'aimusiclist ne sont pas incluses ici. – signifie qu'il n'y a pas de numéro pour ce morceau.",
    "like": "Cela correspond au nombre de fois où ce disque a été passé sur la platine de votre magasin."
  },
  "help.an.col.time": {
    "t": "Temps d'écoute",
    "what": "Durée totale d'écoute de cette chanson : **nombre d'écoutes × durée de la chanson**.",
    "when": "Utilisez-le pour comparer plus équitablement une chanson courte et une chanson longue.",
    "care": "Ceci est une **estimation**. Votre site ne peut pas savoir si un auditeur s'est arrêté en cours d'écoute ; la durée réelle peut donc être inférieure. Les chansons dont la durée n'est pas enregistrée affichent un tiret (–).",
    "like": "C'est comme deviner combien de temps le tourne-disque a fonctionné : nombre de tours multiplié par la longueur d'une face."
  },
  "help.an.col.rank": {
    "t": "classement aimusiclist",
    "what": "Le classement actuel de la chanson parmi toutes les chansons sur aimusiclist.",
    "when": "Utilisez-le pour voir lesquelles de vos chansons fonctionnent le mieux sur le marché principal.",
    "care": "Plus le nombre est petit, mieux c'est. Il change une fois par semaine (le vendredi). – signifie qu'il n'y a pas encore de classement, ce qui est normal pour une chanson qui n'a pas été jouée cette semaine.",
    "like": "Il s'agit du numéro de votre disque dans la liste complète du grand marché."
  },
  "help.an.col.rise": {
    "t": "changement en 7 jours",
    "what": "De combien de places le classement de la chanson a-t-il progressé par rapport à il y a 7 jours ?",
    "when": "Utilisez-le pour repérer les chansons qui commencent à gagner en popularité.",
    "click": "Rien à signaler. ▲ indique une hausse, ▼ une baisse, – aucune modification. **NOUVEAU** signifie que le classement n'existait pas il y a 7 jours.",
    "care": "▲ est correct. Il utilise le type de classement que vous avez choisi dans **Modifications de classement** (aimusiclist ou mon site). S'il manque une date, la plus proche des 3 dates précédentes est utilisée.",
    "like": "C'est comme vérifier combien de marches un alpiniste a gravies cette semaine."
  },
  "help.an.col.uploaded": {
    "t": "Téléchargé",
    "what": "Le jour où vous avez mis en ligne la chanson sur votre site.",
    "when": "Utilisez-le pour comparer les nouvelles chansons avec les anciennes.",
    "care": "Sur les petits écrans de téléphone, cette colonne est masquée. Tournez votre téléphone à l'horizontale ou utilisez un ordinateur pour la voir.",
    "like": "Il s'agit de la date imprimée sur la boîte à laquelle le disque est arrivé dans votre magasin."
  },
  "help.an.mine": {
    "t": "Mes chansons montantes",
    "what": "Jusqu'à 5 de vos chansons dont le classement a le plus progressé cette semaine, avec une petite sélection des 14 derniers jours.",
    "when": "Utilisez-le pour choisir la chanson à partager maintenant. Une chanson qui commence à gagner en popularité grimpe encore plus vite avec un petit coup de pouce.",
    "click": "Rien à signaler. Chaque carte indique le nombre de places gagnées et son classement d'il y a 7 jours à aujourd'hui.",
    "care": "Il prend toujours en compte les **7 derniers jours**. Il suit le type de classement que vous avez choisi dans **Évolution du classement**, indiqué à la fin de la petite ligne sous le titre. Seuls les morceaux ayant réellement progressé sont affichés.",
    "like": "C'est le rayon « tendance de la semaine » de votre boutique."
  },
  "help.an.aml.genre": {
    "t": "Genre",
    "what": "Choisissez un genre pour voir uniquement les titres en progression de ce genre. **Tous les genres** affiche la liste complète.",
    "when": "Choisissez votre propre genre pour voir qui sont vos adversaires.",
    "click": "La liste change immédiatement. Rien n'est enregistré.",
    "care": "Seuls les genres musicaux qui connaissent actuellement un regain de popularité figurent dans cette liste.",
    "like": "C'est comme ne parcourir que le rayon R&B du grand magasin."
  },
  "help.an.aml": {
    "t": "En hausse sur aimusiclist",
    "what": "Voici des morceaux de tous les membres d'aimusiclist qui gagnent rapidement en popularité en ce moment. Vos propres morceaux sont marqués **Ma chanson**.",
    "when": "Utilisez-le pour voir quel genre de musique est populaire actuellement et pour trouver des artistes dont vous pouvez vous inspirer.",
    "click": "Cliquez sur un titre pour ouvrir la page du morceau sur aimusiclist dans un nouvel onglet. Vous pourrez l'écouter là-bas. Les morceaux ne sont pas lus sur cet écran.",
    "care": "Cette liste est mise à jour quotidiennement avec les données d'aimusiclist. Le symbole ▲ indique le nombre de places gagnées, et **NOUVEAU** signale une nouvelle entrée. Le nombre d'auditeurs correspond au nombre de personnes ayant écouté le titre.",
    "like": "C'est comme se promener dans un grand marché pour voir quels stands ont de longues files d'attente aujourd'hui."
  },
  "help.an.s1": {
    "t": "Nouvelle chanson commence",
    "what": "Graphique illustrant le nombre total d'écoutes sur votre site au cours des 7 premiers jours suivant la mise en ligne de chaque nouveau morceau. Jusqu'à 6 de vos titres les plus récents sont affichés.",
    "when": "Utilisez cet outil pour comparer le début de votre nouvelle chanson avec celui de vos chansons précédentes. Celle-ci démarre-t-elle mieux ?",
    "click": "Placez votre curseur sur un point (ou appuyez dessus) pour afficher le titre, la date et le nombre total d'écoutes. La liste sous le graphique indique à quel titre correspond chaque ligne.",
    "care": "Seuls les morceaux mis en ligne **après le début de l'enregistrement** apparaissent. Si votre site ne peut pas comptabiliser ses propres écoutes, cette case restera vide.",
    "like": "C'est comme une course où chaque nouveau record commence à zéro, et on regarde qui parcourt la plus grande distance la première semaine."
  },
  "help.an.s2": {
    "t": "Distance jusqu'au Top 100",
    "what": "Pour un maximum de 5 de vos chansons, cela vous indique à quel point elles sont éloignées du classement Top 100 d'aimusiclist.",
    "when": "Utilisez-le pour vous fixer un objectif, comme « environ 20 auditeurs de plus cette semaine ».",
    "click": "Rien à sélectionner. Chaque ligne indique si la chanson figure déjà dans le Top 100, le nombre d'auditeurs supplémentaires dont elle pourrait avoir besoin, ou qu'elle pourrait s'en approcher.",
    "care": "Il s'agit d'une **estimation**, pas d'une promesse. Le classement officiel prend également en compte d'autres critères ; une chanson peut donc être proche du classement sans pour autant y figurer. Si le Top 100 n'est pas encore complet, les chansons qui remplissent les conditions d'admission y sont intégrées.",
    "like": "C'est comme un panneau sur un sentier de montagne : « environ 200 marches jusqu'au sommet »."
  },
  "help.an.s2.note": {
    "t": "Pourquoi il s'agit d'une estimation",
    "what": "aimusiclist ne fournit pas à votre site le nombre exact d'auditeurs. Ce champ se base donc sur le nombre de **lectures valides** des 7 derniers jours indiqué par aimusiclist.",
    "when": "Lisez ceci si les chiffres de cet encadré vous semblent étranges.",
    "care": "aimusiclist comptabilise **une écoute par personne et par jour**. Le nombre réel d'auditeurs différents peut donc être inférieur au nombre d'écoutes. Ce résultat n'est qu'indicatif.",
    "like": "C'est comme deviner le nombre de visiteurs d'après le nombre d'empreintes. Certaines personnes sont passées deux fois."
  },
  "help.an.s3": {
    "t": "J'aime et ajouts à la playlist",
    "what": "Combien de « j’aime » et d’ajouts à des playlists vos chansons ont-elles obtenus sur aimusiclist, jour après jour, et quelles chansons en ont obtenu le plus ?",
    "when": "Utilisez-le pour voir quelles chansons les gens aiment vraiment, et pas seulement celles qu'ils écoutent une seule fois.",
    "click": "Placez votre souris sur une barre (ou appuyez dessus) pour afficher la date et le nombre.",
    "care": "Plus c'est grand, mieux c'est. L'affichage ne couvre que les **90 derniers jours**, même si vous sélectionnez **Tout**. Les données sont mises à jour quotidiennement par aimusiclist.",
    "like": "C'est comme compter les cœurs et les autocollants « à emporter » sur votre étal au grand marché."
  },
  "help.an.s3.likes": {
    "t": "J'aime sur aimusiclist",
    "what": "Chaque barre représente une journée. Elle indique le nombre de « j'aime » obtenus par vos chansons sur aimusiclist ce jour-là.",
    "when": "Utilisez-le pour voir si le nombre de « j’aime » augmente après la sortie ou le partage d’une chanson.",
    "care": "Plus c'est gros, mieux c'est. Ces mentions « J'aime » proviennent uniquement d'aimusiclist. Les mentions « J'aime » sur votre propre site se trouvent dans l'onglet **Statistiques**.",
    "like": "C'est comme un décompte quotidien des cœurs sur le tableau de votre stand."
  },
  "help.an.s3.adds": {
    "t": "Ajouté aux listes de lecture",
    "what": "Chaque barre représente une journée. Elle indique le nombre de fois où vos chansons ont été ajoutées aux playlists sur aimusiclist ce jour-là.",
    "when": "Utilisez-le pour voir si les gens veulent conserver vos chansons et les réécouter.",
    "care": "Plus c'est gros, mieux c'est. L'ajout à une playlist est l'un des signes les plus clairs qu'une chanson plaît à quelqu'un.",
    "like": "C'est comme compter chaque jour les invités qui ont acheté votre disque pour l'emporter chez eux."
  },
  "help.an.s3.top": {
    "t": "Les plus appréciés et ajoutés",
    "what": "Jusqu'à 5 de vos chansons qui ont reçu le plus de likes (♥) et d'ajouts à la playlist (+) sur aimusiclist au cours des 7 derniers jours.",
    "when": "Utilisez-le pour choisir une chanson pour votre prochain article ou pour la placer en première position sur un album.",
    "care": "Il s'agit toujours des **7 derniers jours**. Les chansons sont classées par nombre de « j'aime » et les ajouts sont additionnés.",
    "like": "C'est le rayon « coups de cœur des fans » de votre magasin."
  },
  "help.an.s4": {
    "t": "Ma place dans mon genre",
    "what": "Pour un maximum de 6 de vos chansons, ceci affiche le classement sur le graphique aimusiclist du genre de cette chanson, et le top % parmi les chansons.",
    "when": "Utilisez-le pour voir comment votre chanson se positionne par rapport à des chansons du même style.",
    "click": "Rien à sélectionner. **Dans le Top 20** est ajouté lorsque la chanson figure parmi les 20 meilleures de son genre.",
    "care": "Un classement et un pourcentage plus faibles sont préférables (être dans le top 1 % est excellent). Si la taille du genre est inconnue, le pourcentage est calculé parmi toutes les chansons répertoriées sur aimusiclist. Une chanson sans classement de genre l'indique.",
    "like": "C'est comme connaître sa place sur le rayon R&B d'un grand marché, et non sur l'ensemble du marché."
  },
  "help.site.seo": {
    "t": "Apparaître dans les résultats de recherche (Google)",
    "what": "Ces réglages concernent les moteurs de recherche comme Google. Chaque chanson et chaque album de votre site a sa propre page, que les moteurs de recherche peuvent trouver.",
    "when": "Venez ici pour masquer votre site des résultats de recherche ou l’enregistrer dans Google Search Console.",
    "click": "Ce titre sert seulement à expliquer cette partie. L’interrupteur et les étapes ci-dessous permettent d’agir.",
    "care": "Votre site peut mettre de quelques jours à quelques semaines à apparaître sur Google. Cela ne change rien sur aimusiclist.com.",
    "like": "C’est comme ajouter le nom de votre boutique et chacun de vos disques sur le plan de la ville."
  },
  "help.site.seo_switch": {
    "t": "Afficher mes chansons et mes albums dans les résultats de recherche",
    "what": "Permet aux moteurs de recherche d’afficher votre page d’accueil ainsi que vos pages de chansons et d’albums. Cette option est activée par défaut.",
    "when": "Laissez-la activée pour que de nouveaux auditeurs vous trouvent en cherchant. Désactivez-la seulement si vous souhaitez garder votre site à l’écart des moteurs de recherche.",
    "click": "Le réglage est enregistré dès que vous cliquez. Si vous le désactivez, vos pages demandent aux moteurs de recherche de ne pas les afficher et le plan du site pour la recherche est supprimé.",
    "care": "Les pages déjà présentes dans les résultats de recherche peuvent mettre du temps à disparaître. Les personnes qui connaissent votre adresse peuvent toujours accéder à votre site.",
    "like": "C’est l’enseigne « ouvert au public » sur la porte de votre boutique."
  },
  "help.site.gsc": {
    "t": "Enregistrer mon site dans Google Search Console",
    "what": "Des étapes simples pour présenter votre site à Google avec votre propre compte Google.",
    "when": "Faites-le une fois si vous souhaitez que Google découvre plus vite vos nouvelles chansons et voir comment les gens vous recherchent.",
    "click": "Ouvrez les étapes et suivez-les dans l’ordre. Une seule fois suffit.",
    "care": "Vous avez besoin d’un compte Google. Si quelque chose ne fonctionne pas, vous pouvez recommencer sans abîmer votre site.",
    "like": "C’est comme signer le registre du bureau qui tient le plan de la ville pour qu’on vérifie plus souvent votre boutique."
  },
  "help.site.gsc_open": {
    "t": "Ouvrir Google Search Console",
    "what": "Ouvre la page officielle de Google dans un nouvel onglet.",
    "when": "Cliquez dessus à la première étape.",
    "click": "Connectez-vous avec votre compte Google, puis revenez dans cet onglet pour la suite.",
    "care": "Cette page appartient à Google et ne fait pas partie de votre site."
  },
  "help.site.gsc_copy": {
    "t": "Copier",
    "what": "Copie l’adresse qui se trouve juste à côté.",
    "when": "Cliquez quand une étape vous demande de coller l’adresse de votre site ou celle de son plan.",
    "click": "Collez ensuite cette adresse dans le champ de la page Search Console.",
    "care": "Si la copie ne fonctionne pas sur votre appareil, une petite fenêtre affiche l’adresse afin que vous puissiez la copier vous-même."
  },
  "help.site.gsc_input": {
    "t": "Balise de vérification Google",
    "what": "Ce champ reçoit le texte fourni par Google pour confirmer que le site est à vous.",
    "when": "Collez ici le texte copié depuis [[HTML tag]] dans Search Console.",
    "click": "Vous pouvez coller tout le texte tel quel. Votre site ne conserve que la partie nécessaire.",
    "care": "Videz le champ, puis cliquez sur Enregistrer pour supprimer la balise.",
    "like": "C’est comme une étiquette indiquant à Google que cette boutique vous appartient."
  },
  "help.site.gsc_save": {
    "t": "Enregistrer",
    "what": "Enregistre le texte de vérification et l’ajoute à votre page d’accueil.",
    "when": "Cliquez après avoir collé le texte et avant de cliquer sur [[Verify]] dans Search Console.",
    "click": "Une coche apparaît au bout d’un instant. Revenez ensuite dans Search Console et cliquez sur [[Verify]].",
    "care": "Si un message rouge s’affiche, recopiez le texte de [[HTML tag]] en entier et collez-le ici."
  }
});
