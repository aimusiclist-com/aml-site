// ? help texts — English source (3-26). Personal site admin screen (/admin).
// Other languages: same folder {code}.js, same keys. Translate only the right-hand text; keep keys, "_ui" keys, **bold** and [[Button]] counts.
// Inside [[ ]] write the button name as the admin screen shows it in that language. Check: node tools/help-check.js
AMLHelp.add('en', {
  "_ui": {"what":"What is it?","when":"When do I use it?","click":"What happens when I press it?","care":"Watch out","like":"Think of it like this","close":"Close"},
  "help.top.lang": {
    "t": "Language",
    "what": "Picks the language of this admin page. The list has every language this program knows.",
    "when": "Use it when the words are hard to read, or when you want to check how your site looks in another language.",
    "click": "The page changes right away. Your choice is remembered in this browser only, so another computer or phone may start in a different language.",
    "care": "This does not change your site's main language for visitors. That is **Site language** in the Site info tab. Your site, opened in this same browser, will also show the language you picked here.",
    "like": "It is like choosing which language the price tags in your own back office are written in. The shop sign outside stays the same."
  },
  "help.setup.title": {
    "t": "Create your admin account",
    "what": "This is the very first screen after you install your site. Here you make the one account that runs the site: an email, a password and a Cloudflare usage key.",
    "when": "You see it only once, right after installing. It comes back only if you follow the steps for a forgotten password.",
    "click": "This is only a title. Fill in the boxes below, then press [[Create admin]].",
    "care": "If you just installed, wait about 1 minute first. Cloudflare needs a moment to get your song storage ready. If you see an error, wait a minute and try again.\nYou can't use the name of a famous singer or group for your site.",
    "like": "It is like getting the only key to a brand-new shop on opening day."
  },
  "help.setup.legacy": {
    "t": "Old admin password (AML_ADMIN_TOKEN)",
    "what": "This box appears only on sites that were installed the old way, with an admin password written into the Cloudflare settings.",
    "when": "Type the old admin password you used before. You need it only this once.",
    "click": "Nothing happens while you type. It is checked when you press [[Create admin]].",
    "care": "This proves the site is really yours, so nobody else can take it over. If it is wrong, the account is not made. Look for the value in your Cloudflare settings for this site.",
    "like": "It is like showing your old shop key once, so the locksmith knows you may get the new one."
  },
  "help.setup.email": {
    "t": "Email",
    "what": "The email you will log in with. It is never shown on your site.",
    "when": "Use an email you check often. Your Cloudflare sign-up email is easy to remember.",
    "click": "Nothing is saved yet. It is saved when you press [[Create admin]].",
    "care": "It must look like a real address (name@example.com). aimusiclist.com also gets it as a private contact address for your site. You can change it later in Site info.",
    "like": "It is like writing your name on the shop's key ring."
  },
  "help.setup.password": {
    "t": "Password (6+ characters)",
    "what": "The password you will log in with, together with the email above.",
    "when": "Choose it now. Use at least 6 characters. Longer is safer.",
    "click": "Nothing is saved yet. It is saved when you press [[Create admin]].",
    "care": "Don't use a password you use on other sites. If you forget it, there is a way to reset it, and your songs stay safe.",
    "like": "It is the key to your shop. Don't make a copy that fits other doors too."
  },
  "help.setup.password2": {
    "t": "Password again",
    "what": "Type the same password once more.",
    "when": "Right after the password box.",
    "click": "When you press [[Create admin]], the two boxes are compared.",
    "care": "If they are different, you see a message and nothing is made. Just type both again.",
    "like": "It is like turning the new key in the lock twice to be sure it really fits."
  },
  "help.setup.token": {
    "t": "Cloudflare usage key (required, read-only)",
    "what": "A key you make on Cloudflare. With it, this admin page can show how much of Cloudflare's free amount your site uses.",
    "when": "Make it with the guide below (about 2 minutes), copy it, and paste it here.",
    "click": "When you stop typing, it is checked by itself. You see ✓ with your Cloudflare account name, or ✗ with what is wrong.",
    "care": "This key can only read usage numbers and your account name. It can't change or delete anything. Cloudflare shows it only once, so paste it right after copying. It needs both permission lines (Account Analytics · Read and Account Settings · Read).",
    "like": "It is like a key that opens only the electricity meter box. It can't open the shop."
  },
  "help.setup.account": {
    "t": "Cloudflare account",
    "what": "This list appears when your usage key can see more than one Cloudflare account.",
    "when": "Pick the account this site is installed in.",
    "click": "The key is checked again right away with the account you picked. A ✓ means it is fine.",
    "care": "If you pick the wrong account, the usage bars will show another account's numbers, or fail to load.",
    "like": "It is like having keys to several buildings and pointing at the one where your shop is."
  },
  "help.setup.account_id": {
    "t": "Cloudflare Account ID",
    "what": "Your Cloudflare account number: 32 characters, digits 0–9 and letters a–f.",
    "when": "This box appears only when your key can't find your account by itself. That happens when the Account Settings · Read line is missing from the key.",
    "click": "When all 32 characters are in, the key is checked again by itself.",
    "care": "Find it on Cloudflare: Workers & Pages → Account Details → Account ID (copy button). Or make the key again with the button in the guide. Then both lines are filled in and this box is not needed.",
    "like": "It is like telling the meter reader your house number when the street sign is missing."
  },
  "help.setup.token_guide": {
    "t": "How to make the usage key (2 minutes)",
    "what": "Five short steps that show how to make the usage key on Cloudflare.",
    "when": "Read it while you make the key. Press the title to open or close it.",
    "click": "Opening or closing it changes nothing. The first step has a button that opens Cloudflare.",
    "care": "Cloudflare's screen names may change a little. If a name is different, pick the closest one. On Cloudflare, press [[Continue to summary]], then [[Create Token]], then [[Copy]].",
    "like": "It is like the little drawing that shows how to assemble new furniture."
  },
  "help.setup.submit": {
    "t": "Create admin",
    "what": "Makes your admin account with the email, password and usage key above.",
    "when": "Press it when every box is filled and the key shows ✓.",
    "click": "If something is wrong, a message appears next to the button and nothing is made. If all is fine, you are logged in and the admin page opens. Your site also starts connecting to aimusiclist.com by itself.",
    "care": "There is only one admin account per site. To make it again you must follow the forgotten-password steps. Your songs and albums are kept even then.",
    "like": "It is like cutting the ribbon on opening day: the shop is yours, and the doors open."
  },
  "help.login.title": {
    "t": "Log in",
    "what": "The door to your admin page. Only the site owner can come in with the email and password.",
    "when": "You see it when you are not logged in on this browser, or when your login has run out.",
    "click": "This is only a title. Fill in the boxes below and press [[Log in]].",
    "care": "A login lasts 30 days on one browser. Changing your password logs you out on every device.",
    "like": "It is the locked back door of your shop. The front door (your site) stays open for visitors."
  },
  "help.login.email": {
    "t": "Email",
    "what": "The email you chose when you made your admin account.",
    "when": "Type it every time you log in.",
    "click": "Nothing happens until you press [[Log in]].",
    "care": "Big or small letters don't matter. On a meshmelo site, use the email of your meshmelo account.",
    "like": "It is like saying your name at the back door before you show the key."
  },
  "help.login.password": {
    "t": "Password",
    "what": "The password of your admin account.",
    "when": "Type it every time you log in.",
    "click": "Nothing happens until you press [[Log in]].",
    "care": "After 5 wrong tries in a row from the same place, logging in is locked for 15 minutes. The message tells you how many tries are left.",
    "like": "It is the key itself. Try a wrong key too many times and the lock rests for a while."
  },
  "help.login.submit": {
    "t": "Log in",
    "what": "Checks your email and password and opens the admin page.",
    "when": "Press it after filling in both boxes. The [[View site]] link next to it opens your site as a visitor.",
    "click": "If they are right, the admin page opens and this browser stays logged in for 30 days. If not, a red message appears below.",
    "care": "Logging in here does not log you in on your other devices. Each browser logs in once.",
    "like": "It is like turning the key and stepping into the back office."
  },
  "help.login.forgot": {
    "t": "Forgot your password?",
    "what": "Steps for making a new email and password when you can't remember them.",
    "when": "Use it only when you really can't log in. Press the title to open the steps.",
    "click": "Opening it changes nothing. You follow the steps yourself. On a Cloudflare site, you remove only the admin information from your song storage (R2), then the [[Create admin]] screen comes back.",
    "care": "Your songs, albums and aimusiclist.com connection are kept. Remove only the one item the steps name, nothing else. On the PHP version you make one empty file in your hosting instead. On meshmelo you reset it from your meshmelo account.",
    "like": "It is like calling the locksmith for a new key. The shop and everything on the shelves stay the same."
  },
  "help.top.mm_acct": {
    "t": "My meshmelo account",
    "what": "A link to your meshmelo account page. You see it only on sites hosted by meshmelo.",
    "when": "Go there for sign-in and password, your song storage, usage, your own domain, or deleting the whole site.",
    "click": "Your meshmelo account opens in a new tab. This page stays open.",
    "care": "Songs, albums, menus, skins and stats are handled here, not there. Not sure which page to use? Press the ? next to this link.",
    "like": "It is the office that manages all your shops. This admin page is the counter of one shop."
  },
  "help.top.view_site": {
    "t": "View site",
    "what": "Opens your own site, the page your visitors see.",
    "when": "Use it after a change to check how it looks.",
    "click": "Your site opens in a new tab. This admin page stays open.",
    "care": "Most changes show within about 30 seconds. Because you are logged in, a few things only you can see may also appear, like play counts on each song.",
    "like": "It is like stepping outside to look at your shop window the way people on the street see it."
  },
  "help.top.logout": {
    "t": "Log out",
    "what": "Ends your login on this browser.",
    "when": "Use it on a shared or borrowed computer, or when you are done.",
    "click": "You go back to the login screen right away. Your songs and settings are not touched.",
    "care": "It logs out only this browser. Other devices stay logged in. To log out everywhere, change your password in the Site info tab.",
    "like": "It is like locking the back door when you leave. Your other keys still work."
  },
  "help.top.version": {
    "t": "New version",
    "what": "A line that appears when a newer version of this site program is out. It shows your version and the newest one.",
    "when": "When you see it, plan to update soon. The check is done once a day.",
    "click": "[[How to update]] opens the update guide. [[What's new]] shows what changed. Nothing changes until you update.",
    "care": "Updating is never forced. If the line is red, your version is older than aimusiclist.com supports, so please update soon. Updating keeps your songs and settings. On the PHP version there is an update button right here.",
    "like": "It is like a notice that new, better shelves are ready for your shop."
  },
  "help.top.aml": {
    "t": "aimusiclist.com connection",
    "what": "One line that shows whether your site is linked to aimusiclist.com. Only when linked can your public songs appear and be ranked there.",
    "when": "Check it after installing, and whenever your songs don't show up on aimusiclist.com.",
    "click": "It is just a status. ✓ connected · … connecting · ✗ not connected, with the reason and the next automatic try.",
    "care": "A new site connects by itself. If it fails, it tries again every 10 minutes, up to 20 times a day. For some errors it stops trying; then use [[Try now]] after fixing the cause. On a paused meshmelo site, this line says the site is paused.",
    "like": "It is the road from your shop to the big market. When the road is open, your records reach the market showcase."
  },
  "help.top.lang_missing": {
    "t": "Song language missing",
    "what": "A notice that some songs have no song language yet. It usually means older songs, uploaded before this setting existed.",
    "when": "Fix it when you have a minute. It helps listeners on aimusiclist.com find songs in their language.",
    "click": "This is only a notice. Press [[Set now]] to fix all of them at once.",
    "care": "Nothing is forced. Until you set it, aimusiclist.com treats those songs as your site's main language. The notice disappears when every song has a language.",
    "like": "It is like some records in your shop missing the little label that says what language the singing is in."
  },
  "help.top.pubmin_note": {
    "t": "Not enough public songs",
    "what": "A notice that fewer songs are public on aimusiclist.com than the rule asks. The rule: at least 10 songs public (or all of them, if you have fewer than 10).",
    "when": "It shows only when your site is below that number, for example after deleting songs.",
    "click": "This is only a notice. Press [[Choose songs]] to fix it.",
    "care": "Nothing is switched for you. But until you fix it, you can't make even more songs private. You choose which songs are public, and you may delete any song you don't want to share.",
    "like": "The big market asks every shop to put at least 10 records in its showcase."
  },
  "help.top.profile_note": {
    "t": "Add a profile photo",
    "what": "A tip that shows when you have songs but no profile photo yet. The photo also appears next to your songs on aimusiclist.com.",
    "when": "Add one when you can. A face or logo makes your songs easier to remember.",
    "click": "This is only a tip. Press [[Add photo]] to choose a picture.",
    "care": "Nothing is forced. The tip disappears once a profile photo is saved.",
    "like": "It is like putting your photo on the shop door, so people know whose shop it is."
  },
  "help.top.genre_sample": {
    "t": "Built-in genre list",
    "what": "A notice that the genre list could not be loaded from aimusiclist.com, so the list built into this program is used for now.",
    "when": "You don't need to do anything. It usually goes away the next time you open the admin page.",
    "click": "This is only a notice.",
    "care": "The built-in list may miss the newest genres. If you need one of those, wait and reload this page later. Genres you already set on songs and menus stay as they are.",
    "like": "It is like using last year's printed catalog because the market's new one didn't arrive today."
  },
  "help.setup.token_open": {
    "t": "Make it on Cloudflare",
    "what": "Opens Cloudflare's key-making page in a new tab, with the name and both permission lines already filled in.",
    "when": "Press it at the first step of the guide.",
    "click": "Cloudflare opens in a new tab (log in if asked). This page stays open, so you can come back and paste the key.",
    "care": "Check that both lines are there: Account Analytics · Read and Account Settings · Read. If they are empty, add these two lines yourself.",
    "like": "It is like an order form that is already filled in. You only sign it."
  },
  "help.tracks.ai_tool": {
    "t": "Made with",
    "what": "The AI tool you used to make the song, like Suno. It is shown as a small “✦ name” tag next to the song.",
    "when": "Pick the tool you really used. On the upload card it goes into every song of this upload.",
    "click": "It is saved when you upload or press [[Save track]]. When uploading, this browser remembers your pick for next time.",
    "care": "aimusiclist.com keeps the list of tools. If yours is missing, choose “Other” and tell admin@aimusiclist.com. It has nothing to do with the ranking.",
    "like": "It is like the “made in” note on the back of a record."
  },
  "help.tracks.ai_fill": {
    "t": "Songs with no AI tool set",
    "what": "A note that tells you how many songs have no AI tool yet. It appears only when there is at least one such song.",
    "when": "Use it to fill in the AI tool for all those songs in one go.",
    "click": "It is only a note. Choose a tool below and press [[Set them all to this tool]].",
    "care": "When every song has a tool, this note disappears by itself.",
    "like": "Like a note on the shop counter: \"5 records have no maker stamp yet\"."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Set them all to this tool",
    "what": "Gives the tool you chose to every song that has no AI tool yet.",
    "when": "Use it when most of your songs were made with one tool, for example after uploading many older songs.",
    "click": "A box asks you to confirm first. After you say yes, it is saved right away and the ✦ tool name appears next to those songs, on your site and on aimusiclist.com.",
    "care": "Only songs with no tool are changed. Songs that already have a tool stay the same. If a few songs used a different tool, fix them afterwards in **AI tool of the selected songs** or in each song's [[Edit]].",
    "like": "Like stamping the same maker's mark on every record that has no stamp yet, and skipping the ones already stamped."
  },
  "help.tracks.bulk_ai": {
    "t": "AI tool of the selected songs",
    "what": "Sets which AI tool you made the checked songs with (for example Suno), all at once.",
    "when": "Use it when many songs were made with the same tool, or to fix a wrong tool on several songs.",
    "click": "Choosing a tool saves nothing. Press [[Apply]] next to it to save.",
    "care": "Choosing **Not set** and pressing [[Apply]] removes the tool from the checked songs. If your tool is missing, choose **Other** and tell admin@aimusiclist.com.",
    "like": "Like stamping \"made with this instrument\" on the back of many records at once."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Apply",
    "what": "Saves the chosen AI tool to every checked song.",
    "when": "Press it after you check songs and choose a tool.",
    "click": "It is saved right away, a short message says how many songs changed, and the checks are cleared. The small ✦ tool name next to each song changes, on your site and on aimusiclist.com.",
    "care": "The songs' old tool is replaced. With no song checked, you only get a reminder to check songs first.",
    "like": "This is when the stamp actually lands on the records."
  },
  "help.tracks.genre_main": {
    "t": "Main genre",
    "what": "The one big genre of this song. The list is the same as the genre menu of aimusiclist.com.",
    "when": "Pick the genre that fits the song best. It must be chosen.",
    "click": "It is saved when you press [[Save track]]. The song then appears in that genre menu on aimusiclist.com (if it is public).",
    "care": "Saving is refused if no main genre is chosen. The two extra genre boxes next to it are for the mixed parts.",
    "like": "It is the section of the big market where your record is placed, like the R&B corner."
  },
  "help.tracks.genre_sub": {
    "t": "Extra genre",
    "what": "Up to two more genres that are mixed into the song. For example, an R&B song with rap can add Hip-hop.",
    "when": "Use them when one genre is not enough. They are optional.",
    "click": "They are saved when you press [[Save track]] (or with the upload). aimusiclist.com shows them in order after the main genre, next to the title.",
    "care": "You can pick any genre, sorted under its main genre. Picking the same genre twice counts it once. Choose “— None —” to leave a box empty.",
    "like": "They are small extra notes on the shelf label, like “with a bit of hip-hop”."
  },
  "help.tracks.lang": {
    "t": "Song language",
    "what": "The language of the words sung in this song. It is not the language of your site screen.",
    "when": "Pick the main language of the lyrics. If there is no singing, choose “Instrumental (no lyrics)”.",
    "click": "It is saved when you press [[Save track]]. aimusiclist.com uses it for its charts by language.",
    "care": "Older songs may show “not set (site language)”. Then your site's default language is used. Picking “Instrumental” locks the second language box.",
    "like": "It is a note on the record that says which language the singer uses."
  },
  "help.tracks.lang2": {
    "t": "Second language (optional)",
    "what": "A second language used in the lyrics, for example a Korean song with English lines.",
    "when": "Use it only if a good part of the song is sung in another language.",
    "click": "It is saved when you press [[Save track]]. Choose “— None —” to remove it.",
    "care": "It is locked until you pick the main song language, and also when the song is “Instrumental”. It can't be the same as the main language.",
    "like": "It is a second small note on the record: “also some English”."
  },
  "help.tracks.ai_paste": {
    "t": "Paste AI result",
    "what": "A box where you paste the title the AI gave you, with its ( ) part. It reads the genre, mood and language from it. [[Get the guide]] opens the page that explains how to ask the AI.",
    "when": "Use it when the genre is hard to decide, or when your file names don't have the ( ) part.",
    "click": "Pasting alone changes nothing. Press [[Apply]] next to it.",
    "care": "It only fills in boxes. You still save with the upload button or [[Save track]].",
    "like": "It is like handing the clerk a note from a music expert: the clerk copies it onto the shelf label."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Apply",
    "what": "This reads what you pasted and fills in the genre, song language and mood boxes.",
    "when": "Press it after you paste the AI's title.",
    "click": "On the upload card, it fills every file in the list that is not uploaded yet. On the edit form, it fills this song only. A message below says what was filled. Nothing is saved yet.",
    "care": "Words it does not know are skipped and shown in yellow. If the main genre is not in the list, the genre boxes stay as they were. Check the boxes before you save.",
    "like": "It is the clerk actually writing the expert's note onto the labels."
  },
  "help.site.ext": {
    "t": "Additional info",
    "what": "Extra boxes about your site as a whole. aimusiclist.com decides which boxes exist, and shows what you fill in next to your songs there.",
    "when": "Fill in the boxes that fit you. Every box is optional, so you can skip them all.",
    "click": "It is saved together with the rest of the card when you press [[Save site info]]. Emptying a box removes that answer.",
    "care": "This group only appears when aimusiclist.com has boxes for sites. If a box says it needs a program update, you can't fill it in yet. Your old answer is kept safely.",
    "like": "It is the extra question sheet the big market (aimusiclist.com) hands out, so your stall can carry a few more labels."
  },
  "help.tracks.ext": {
    "t": "Additional info",
    "what": "Extra boxes about the song, like the BPM or a short note. aimusiclist.com decides which boxes exist and shows the answers next to your songs.",
    "when": "Fill in what you know. Every box is optional.",
    "click": "It is saved when you upload or press [[Save track]]. On the upload card, the same values go into every song. On the edit form, emptying a box and saving clears that value.",
    "care": "If a line says a box needs a program update, you can use it after updating your site. The boxes appear only after your site has received the list from aimusiclist.com.",
    "like": "It is the small print on the back of the record jacket."
  },
  "help.img.editor": {
    "t": "Image window",
    "what": "A small window that turns your picture into the right size: song image 100×100, album cover 200×200, or top banner up to 1600×400.",
    "when": "It opens by itself after you pick a picture for a song, an album cover or the banner.",
    "click": "Choose how to fit the picture, check the Result, then press [[Save image]]. [[Cancel]] or the Esc key closes the window without changes.",
    "care": "Only the small copy is uploaded, never your original picture. Each kind has a size limit (50 KB, 100 KB or 300 KB); the picture is made smaller until it fits.",
    "like": "It is a little workshop that trims your photo to fit the frame before it goes on the shop wall."
  },
  "help.img.mode_crop": {
    "t": "Crop (move the frame)",
    "what": "Keeps only the part of the picture inside the bright frame and cuts off the rest.",
    "when": "Use it when the picture is bigger than you need, or not the right shape, and you want to keep the best part, like a face.",
    "click": "A bright frame appears on the picture. Drag it, or press the arrow keys, to choose the part to keep. The Frame size bar makes the frame bigger or smaller. The Result changes as you move it.",
    "care": "What is outside the frame is not kept.",
    "like": "It is like cutting a photo with scissors so only the best part goes on the record jacket."
  },
  "help.img.mode_fit": {
    "t": "Shrink whole image",
    "what": "Keeps the whole picture and makes it smaller instead of cutting it.",
    "when": "Use it when nothing may be cut off, for example a logo or a picture with words on it.",
    "click": "The Result shows the whole picture at once. For a square (song image or cover), the empty sides are filled with the picture's average color. For the banner, the picture keeps its own shape and fits inside 1600×400.",
    "care": "A long, thin picture can look small in a square, with wide colored edges.",
    "like": "It is like putting a whole poster in a frame with a colored border, without cutting it."
  },
  "help.img.frame": {
    "t": "Frame size",
    "what": "A bar that makes the bright crop frame bigger or smaller.",
    "when": "Make it smaller to zoom in on a small part, like a face. Make it bigger to keep more of the picture.",
    "click": "The frame and the Result change as you slide. At the far right, the frame is as big as the picture allows.",
    "care": "A very small frame on a small picture can look blurry. Check the Result before you save.",
    "like": "It is like moving a magnifying glass closer to or farther from the photo."
  },
  "help.img.result": {
    "t": "Result",
    "what": "A preview of the picture exactly as it will be saved.",
    "when": "Look at it before you press [[Save image]].",
    "click": "It updates by itself whenever you move the frame or change the mode. It is only a preview; nothing is saved yet.",
    "care": "Large pictures are shown a little smaller here, but they are saved at full size. The saved picture may look slightly softer because it is made light.",
    "like": "It is like a mirror that shows the photo already in its frame."
  },
  "help.img.save": {
    "t": "Save image",
    "what": "Makes the final small picture and uses it.",
    "when": "Press it when the Result looks right.",
    "click": "A song image or banner is saved right away and shows on your site; a song image also shows on aimusiclist.com if the song is public. An album cover is only placed in the album box and is saved when you press [[Save album]].",
    "care": "If the picture is still too heavy, or your browser can't make this kind of picture, a red message appears. Try a simpler picture or a smaller frame, or use Chrome, Edge or Firefox.",
    "like": "It is like putting the trimmed photo into its frame and hanging it on the shop wall."
  },
  "help.img.crop": {
    "t": "Profile photo",
    "what": "A window to fit your profile photo into a circle. Your profile photo is your face or logo, shown round on your site and on aimusiclist.com.",
    "when": "It opens by itself after you pick a profile photo.",
    "click": "The circle stays in the middle and you move the photo under it. Drag the photo, use the zoom bar, the mouse wheel or two fingers, or press the arrow keys and + / −. Press [[Apply]] to save, or [[Cancel]] / Esc to close without changes.",
    "care": "Only the part inside the circle is used. Only a small 400×400 copy is uploaded, not your original photo.",
    "like": "It is like moving a photo behind a round window until your face sits right in the middle."
  },
  "help.img.crop_zoom": {
    "t": "Zoom",
    "what": "The bar (and the − and + buttons) makes the photo bigger or smaller inside the circle.",
    "when": "Zoom in when your face looks too small in the circle. Zoom out to show more.",
    "click": "The photo changes size around the middle of the circle. At the far left the photo just fills the circle. At the far right it is 4 times bigger. The previews below change too.",
    "care": "The photo can't be made smaller than the circle, so there is never an empty edge. Zooming in a lot on a small photo can look blurry.",
    "like": "It is like walking closer to the camera or farther away."
  },
  "help.img.crop_rotate": {
    "t": "Rotate",
    "what": "Turns the photo a quarter turn to the right.",
    "when": "Use it when your photo is lying on its side or upside down.",
    "click": "Each press turns it 90 degrees. Press it four times to get back to the start. The photo goes back to the middle after each turn, so move it again if needed.",
    "like": "It is like turning a picture frame on the wall until it is straight."
  },
  "help.img.crop_preview": {
    "t": "Preview",
    "what": "Two small circles that show how your profile photo will really look: a big one and a tiny one.",
    "when": "Check both before you press [[Apply]]. The tiny one is the size people often see in lists.",
    "click": "They change by themselves while you move, zoom or rotate the photo. Nothing is saved yet.",
    "care": "If your face is hard to see in the tiny circle, zoom in a little.",
    "like": "It is like stepping back from the shop sign to see if people across the street can read it."
  },
  "help.img.crop_apply": {
    "t": "Apply",
    "what": "Saves the part inside the circle as your profile photo.",
    "when": "Press it when the previews look right.",
    "click": "It is saved right away and shows on your site. aimusiclist.com gets it in a minute or two. The color of the top area on your site is also picked from this photo.",
    "care": "Your old profile photo is replaced. To change it again, pick a new photo.",
    "like": "It is like hanging your new portrait in the shop window."
  },
  "help.top.profile_go": {
    "t": "Add photo",
    "what": "Starts adding your profile photo.",
    "when": "Press it from the profile photo tip.",
    "click": "The Site info tab opens and your device asks you to pick a picture. Then you crop it, and it is saved when you apply. Visitors and aimusiclist.com see it shortly after.",
    "care": "You can change or delete it later in Site info.",
    "like": "It is like handing the photo to the shop sign maker."
  },
  "help.tab.tracks": {
    "t": "Tracks",
    "what": "The place for your songs. You upload them, fix their details (title, genres, language, picture, lyrics), and choose which ones go public on aimusiclist.com.",
    "when": "Come here to add new songs or change old ones.",
    "click": "Pressing the tab only switches the view. Inside, most changes save the moment you make them.",
    "care": "Up to 20 songs per upload, 15 MB each, 30 seconds to 15 minutes long. Each song has a main genre and up to 2 more. At least 10 songs must stay public (all of them if you have fewer). Deleting a song can't be undone.",
    "like": "It is the stockroom where you bring in new records, put labels on them, and pick which go to the market showcase."
  },
  "help.tab.albums": {
    "t": "Albums",
    "what": "The place for bundling your songs into albums with a title, cover picture and short description.",
    "when": "Come here when you want to show a set of songs together.",
    "click": "Pressing the tab only switches the view. An album with 6 to 35 songs that all have audio goes public on aimusiclist.com as soon as you save it, or at a time you choose.",
    "care": "An album with fewer than 6 songs can be made, but stays private. The description is up to 200 characters. While an album is public, its songs can't be made private.",
    "like": "It is like putting records in one box set with its own record jacket."
  },
  "help.tab.skins": {
    "t": "Skins",
    "what": "The place for your site's look: colors, letters and layout. You can use a built-in skin, install one from the gallery, or upload your own.",
    "when": "Come here when you want your site to look different, or when a dot shows a skin has a new version.",
    "click": "Pressing the tab only switches the view. A new skin shows to visitors within about 30 seconds, and you can switch right back.",
    "care": "Light and Dark are always there, plus up to 20 more. An uploaded skin is one file of up to 100 KB. Changing skins never touches your songs or settings.",
    "like": "It is like repainting your shop and changing the shelves. The records stay the same."
  },
  "help.tab.site": {
    "t": "Site info",
    "what": "Everything about your site as a whole: its name, artist name, main language, description, social links, pictures, buttons for visitors, ads, artist list, your login, and the usage key.",
    "when": "Come here right after installing, and whenever you want to change how your site introduces you.",
    "click": "Pressing the tab only switches the view. Some cards save with their own button, and switches save the moment you press them.",
    "care": "You can't use the name of a famous singer or group. The site name and artist name also show on aimusiclist.com. Changing your password logs you out on every device.",
    "like": "It is your shop sign, your name tag and the papers in the shop office, all in one drawer."
  },
  "help.tab.guestbook": {
    "t": "Guestbook",
    "what": "Where visitors leave short messages for you, on the whole site or on a single song. Here you open or close it and delete messages.",
    "when": "Come here to read what listeners wrote, or to remove a bad message.",
    "click": "Pressing the tab only switches the view and loads the messages, 20 per page. Opening, closing and deleting save right away.",
    "care": "Names are up to 20 characters, messages up to 500, no links, up to 50 messages per person a day. Messages are kept until you delete them, and a deleted message can't come back. Closing the guestbook keeps the messages.",
    "like": "It is the notebook at your shop door where customers write a few words."
  },
  "help.tab.domain": {
    "t": "My domain",
    "what": "Where you connect your own web address (like mymusic.com) to your site, instead of the long address it got at install.",
    "when": "Come here when you have bought a domain and want people to use it.",
    "click": "Pressing the tab only switches the view. The guide shows the steps (about 10 minutes). When you connect, the address is checked first, then aimusiclist.com is told the new address.",
    "care": "Visitors to the old address are moved to the new one, and songs already in playlists keep playing. On meshmelo sites you connect a domain in your meshmelo account instead.",
    "like": "It is like giving your shop a short, easy street address that people remember."
  },
  "help.tab.stats": {
    "t": "Stats",
    "what": "Numbers about your own site: visits and plays per day, popular songs, albums, countries, where visitors came from, devices and languages. Your aimusiclist.com numbers are here too.",
    "when": "Come here to see who listens to what, and whether something you shared brought people in.",
    "click": "Pressing the tab loads the numbers. They change once a day. [[Refresh now]] counts today's numbers right away, once a minute.",
    "care": "Your own visits while logged in are not counted. aimusiclist.com numbers change once a day, in the morning. On some setups visits or plays can't be counted; the tab then explains why and what to turn on.",
    "like": "It is the shop's visitor book and sales record, added up for you."
  },
  "help.tab.analysis": {
    "t": "Analysis",
    "what": "A deeper look at how your songs do on aimusiclist.com: rank changes, rising songs, how new songs start, distance to the Top 100, likes and playlist adds, and your place in your genre. aimusiclist news is here too.",
    "when": "Come here to learn which songs are growing and what to share next.",
    "click": "Pressing the tab opens the saved numbers. They are gathered once a day, so opening it often changes nothing. A dot on the tab means there is new aimusiclist news; it goes away once you open the tab.",
    "care": "A brand-new site has little to show at first. The pictures fill in as days pass.",
    "like": "It is like a weekly report from the big market about how your records sell in its showcase."
  },
  "help.top.mm_two_screens": {
    "t": "You have two places to manage",
    "what": "A small card that explains your two admin places: this site's admin page and your meshmelo account. Each shows its address and what it is for.",
    "when": "Open it when you can't find a setting. It opens and closes with the ? button at the top.",
    "click": "Reading it changes nothing. The button inside opens your meshmelo account in a new tab.",
    "care": "This card is only on meshmelo sites.",
    "like": "It is like a sign in the hallway: 'Shop counter this way, main office that way.'"
  },
  "help.top.php_update": {
    "t": "Update now",
    "what": "On the PHP version, this updates the site program to the newest version for you.",
    "when": "Press it when the new-version line appears and you have a minute.",
    "click": "You are asked to confirm. It takes about a minute, then the page reloads. If anything fails, it goes back to the old version by itself.",
    "care": "Your songs, settings and pages are kept. Don't close the page while it says it is updating. meshmelo sites don't have this button; meshmelo updates them.",
    "like": "It is like a crew changing the shelves overnight. The records go back exactly where they were."
  },
  "help.top.usage_r2_storage": {
    "t": "R2 storage (free 10 GB)",
    "what": "How much space your files take in R2, Cloudflare's storage. Songs take almost all of it.",
    "when": "Check it before you upload a lot of songs.",
    "click": "It is just a number. It updates every 10 minutes.",
    "care": "Smaller is better. Over 10 GB, Cloudflare charges your account. If it is getting full, delete songs you don't need or use smaller files (MP3 instead of WAV). Other storage in the same Cloudflare account counts too.",
    "like": "It is how full your warehouse is. The shelves have room for about 10 GB for free."
  },
  "help.top.usage_class_a": {
    "t": "R2 writes this month (free 1 million)",
    "what": "How many times something was saved into R2 this month: uploads, edits, switches and other changes.",
    "when": "Check it in a month with many uploads or many changes.",
    "click": "It is just a number. It starts again from 0 each month.",
    "care": "Smaller is better. One change is only a few writes, and 20 songs uploaded at once are about 60, so 1 million is a lot. Deleting is free. Over the free amount, Cloudflare charges your account.",
    "like": "It is how many times the warehouse door opened to put something in this month."
  },
  "help.top.usage_class_b": {
    "t": "R2 reads this month (free 10 million)",
    "what": "How many times something was read from R2 this month. Most reads come from people playing your songs and opening your site.",
    "when": "Check it when your songs get many plays.",
    "click": "It is just a number. It starts again from 0 each month.",
    "care": "A growing number means people are listening, which is good, but over 10 million Cloudflare charges your account. If it climbs very fast, look at the Stats tab to see where the plays come from.",
    "like": "It is how many times the warehouse door opened to take a record out and play it."
  },
  "help.top.usage_workers": {
    "t": "Workers requests today (free 100,000)",
    "what": "How many times your site answered a visitor today. Opening the site and each piece of a song being played count.",
    "when": "Check it on busy days, for example after you share a link.",
    "click": "It is just a number. It goes back to 0 every day at 00:00 UTC (09:00 Korea time).",
    "care": "Over 100,000 in a day, the site stops until the reset. There is no charge. It counts your whole Cloudflare account. On the PHP version it counts your audio Worker, and songs stop playing when it is over. meshmelo sites don't show this bar.",
    "like": "It is how many customers the clerk can serve in one day. When the count is full, the shop closes until tomorrow."
  },
  "help.top.usage_disk_space": {
    "t": "Space used by this site's songs and pages",
    "what": "How much hosting space this site's files take. Songs take most of it.",
    "when": "Check it before a big upload.",
    "click": "It is just a number (or a bar if your plan's limit is set).",
    "care": "Smaller is better. If you get close to your plan's limit, delete songs you don't need or upload smaller MP3 files. Other sites on the same hosting are not counted here.",
    "like": "It is how much floor space your records take in the rented shop."
  },
  "help.top.usage_files": {
    "t": "Files (inodes)",
    "what": "How many files this site keeps on your hosting. Hosting companies often limit the number of files, not just the space.",
    "when": "Check it if you have many songs, or if your hosting warns about files.",
    "click": "It is just a number (or a bar if your plan's limit is set).",
    "care": "Smaller is better. Each song brings a few files with it (audio, picture, lyrics), so deleting unused songs lowers this.",
    "like": "It is how many boxes are in the shop, no matter how small each box is."
  },
  "help.top.usage_tracks": {
    "t": "Songs",
    "what": "How many songs this site has.",
    "when": "Just for a quick look. It helps you see how much space one song takes on average.",
    "click": "It is just a number. It changes when you upload or delete songs.",
    "care": "There is no limit bar for this one.",
    "like": "It is the count of records in your shop."
  },
  "help.top.usage_disk": {
    "t": "Hosting usage (this site)",
    "what": "On the PHP version with songs kept on your own hosting, this shows how much this site uses: space, number of files, and songs.",
    "when": "Check it before uploading many songs, because hosting plans have limits.",
    "click": "This is a title. The numbers are read again every 10 minutes. [[Refresh]] reads them now.",
    "care": "Your plan's real limits are in cPanel → Statistics. You see bars with % only if those limits were written into this site's settings at install. Otherwise you see plain numbers.",
    "like": "It is the meter of a rented shop space. The landlord's contract says how big you may grow."
  },
  "help.top.usage": {
    "t": "Cloudflare free usage",
    "what": "Bars that show how much of Cloudflare's free amount your account has used: storage, writes and reads this month, and requests today.",
    "when": "Glance at it now and then, and especially when many people visit.",
    "click": "This is a title. The numbers are read again every 10 minutes. [[Refresh]] reads them now.",
    "care": "Smaller is better. A bar turns orange at 70% and red at 90%. Going over R2's free amount costs money. Going over the Workers amount stops the site for the rest of the day, at no cost. The numbers count your whole Cloudflare account, not only this site.",
    "like": "It is the electricity meter of your shop. Look at it before the bill comes."
  },
  "help.top.usage_refresh": {
    "t": "Refresh",
    "what": "Reads the usage numbers from Cloudflare now, without waiting for the next 10-minute update.",
    "when": "Press it after a big upload, or after you entered a new usage key.",
    "click": "The bars update in a moment, and the time next to the title changes.",
    "care": "Cloudflare's own numbers can lag a little, so a fresh reading may still look the same for a while.",
    "like": "It is like walking to the meter and reading it yourself instead of waiting for the meter reader."
  },
  "help.top.usage_connect": {
    "t": "Connect",
    "what": "Shown when no usage key has been added yet. The key lets this page show your Cloudflare free limits.",
    "when": "Press it to add the key. It takes about 2 minutes.",
    "click": "The Site info tab opens at the **See usage** card, ready for you to paste the key.",
    "care": "Without the key your site still works, but you can't see if you are close to a limit. The key can only read numbers.",
    "like": "It is like installing the electricity meter. The lights work without it, but you can't see how much you use."
  },
  "help.top.usage_retoken": {
    "t": "Enter the key again",
    "what": "Shown when a usage key is saved but the numbers could not be read. The reason is written above it.",
    "when": "Press it if the key was deleted on Cloudflare, has run out, or is missing a permission line.",
    "click": "The Site info tab opens at the **See usage** card, where you paste a new key.",
    "care": "Check two things: the key was made in the same Cloudflare account as this site, and it has both lines (Account Analytics · Read and Account Settings · Read). The bars may show the last good numbers until it is fixed.",
    "like": "It is like replacing a meter key that no longer turns."
  },
  "help.top.usage_uploaded": {
    "t": "Audio uploaded from this admin page",
    "what": "The total size of the song files you uploaded here. Only this site's songs are counted.",
    "when": "Compare it with the storage bar. If the bar is much bigger, something else in your Cloudflare account is using space.",
    "click": "It is just a number. It changes when you upload or delete songs.",
    "care": "The lines above it explain what happens when you go over the free amounts. On the PHP version they also say where to find your hosting plan's limits.",
    "like": "It is how much of the warehouse your own records fill, not counting the neighbors' boxes."
  },
  "help.top.mm_upgrade": {
    "t": "Get more room (upgrade)",
    "what": "A button for asking meshmelo for a bigger daily amount. It appears in the warning at the top when today's usage is 80% or more.",
    "when": "Press it if your site often runs out of today's free use.",
    "click": "meshmelo's upgrade page, or an email to meshmelo, opens. Nothing changes until meshmelo sets it up.",
    "care": "Most sites never need it. A single busy day goes back to normal on its own after the reset.",
    "like": "It is like asking the building for a bigger power line when your shop gets crowded."
  },
  "help.top.mm_use": {
    "t": "Today's usage",
    "what": "On meshmelo sites, one % that shows how much of today's free use your site has used. Below it are the last 7 days.",
    "when": "Look at it on busy days, for example after you share a link.",
    "click": "It is just a number. It goes back to 0% every day at the time written under the bar.",
    "care": "Smaller is better, but a high number means many visitors. From 80% you see a warning at the top. At 100%, visitors see a short 'back soon' page until the reset. This admin page and plays on aimusiclist.com keep working.",
    "like": "It is your shop's electricity meter for today. When it is full, the front door closes until tomorrow."
  },
  "help.top.mm_use_notify": {
    "t": "Email me once a day when it passes 80%",
    "what": "A checkbox for an email warning when today's usage passes 80%.",
    "when": "Turn it on if you don't open this page every day.",
    "click": "It is saved as soon as you tick or untick it. You get at most one email a day.",
    "care": "It only warns you. It doesn't stop anything. You see this box only when meshmelo has turned on warning emails.",
    "like": "It is like asking the meter reader to text you when the meter is almost full."
  },
  "help.top.aml_retry": {
    "t": "Try now",
    "what": "Tries to connect to aimusiclist.com right now, without waiting for the next automatic try.",
    "when": "Press it when the line says not connected, or after you fixed the reason shown.",
    "click": "The line changes to 'Connecting…', and in a moment shows the result. When it connects, your public songs are sent to aimusiclist.com.",
    "care": "If the reason is on aimusiclist.com's side, pressing many times won't help. Wait a while and try again.",
    "like": "It is like calling the market yourself instead of waiting for them to call back."
  },
  "help.tracks.list": {
    "t": "My tracks",
    "what": "This is the list of every song on your site. The number in brackets is how many songs you have.",
    "when": "Come here to find a song, turn it public or not on aimusiclist.com, listen to it, change it or delete it.",
    "click": "Everything you see here is your real, saved list. The switches and buttons in each row work right away.",
    "care": "Songs without an audio file show **No audio**. They do not count anywhere until you add the file.",
    "like": "It is the stock list of your shop: every record you have, with a note next to each one saying whether it is also in the big market (aimusiclist.com)."
  },
  "help.tracks.search": {
    "t": "Search song titles",
    "what": "A box that finds songs by their title. Only songs whose title has the words you type stay in the list.",
    "when": "Use it when you have many songs and want to find one fast, or to pick a group of songs to change together.",
    "click": "The list changes as you type. Nothing is saved or changed. Clear the box to see all songs again.",
    "care": "It looks at the title only, not genres or artist names. Capital or small letters do not matter. [[Select all shown]] picks only the songs left after searching.",
    "like": "Like looking along the shelves of your shop for one record by the name on its spine."
  },
  "help.tracks.nolang": {
    "t": "Only songs without a song language",
    "what": "A check box that shows only the songs whose song language (the language of the lyrics) is not set yet.",
    "when": "Use it to find older songs that still need a song language, then fix them all at once.",
    "click": "The list changes right away. Nothing is saved. Uncheck it to see all songs again. It works together with the title search.",
    "care": "Until you set it, aimusiclist.com treats the song as your site's main language. A quick way: check this box, check the top box to pick every song shown, then use **Song language of the selected songs** and [[Apply]].",
    "like": "Like pulling out only the records that still have no label saying which language they are sung in."
  },
  "help.tracks.bulk": {
    "t": "Change many songs at once",
    "what": "A box for changing several songs together. When no song is checked, it shows a short hint. When you check songs, it says how many are selected and opens the tools.",
    "when": "Use it when the same change fits many songs, so you don't have to edit them one by one.",
    "click": "Checking songs saves nothing. Each tool in the box saves only when you press its own [[Apply]] or button. After that, the checks are cleared.",
    "care": "Check songs with the small boxes at the left of each row, or the top box for all songs shown. The box can hold: mood (or other extra info), song language, AI tool, and play counts for visitors (only when your site counts plays).",
    "like": "Like putting a sticker on many records in one go, instead of walking to each shelf."
  },
  "help.tracks.bulk_lang": {
    "t": "Song language of the selected songs",
    "what": "Sets the song language (the language of the lyrics) for all checked songs at once. You can add a second language too.",
    "when": "Use it for many songs sung in the same language, or to fix songs that have no song language yet.",
    "click": "Choosing languages saves nothing. Press [[Apply]] below to save.",
    "care": "This is the language of the lyrics, not the language of your site. If a song has no lyrics, choose **Instrumental (no lyrics)**. It cannot be mixed with another language. aimusiclist.com uses it for its charts by language.",
    "like": "Like writing \"sung in Korean\" on the label of many records at once."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Apply",
    "what": "Saves the chosen song language to every checked song.",
    "when": "Press it after you check songs and choose the language.",
    "click": "It is saved right away, a short message says how many songs changed, and the checks are cleared. aimusiclist.com shows the new language shortly after.",
    "care": "The songs' old language is replaced. With no song checked, you only get a reminder to check songs first.",
    "like": "This is when the new language labels actually go on the records."
  },
  "help.tracks.select": {
    "t": "Select songs",
    "what": "The check box at the top picks every song shown in the list. The small boxes in each row pick one song.",
    "when": "Use it before changing many songs at once in the box above the list.",
    "click": "Checking only marks songs. Nothing is saved. The box above then shows how many are selected and opens the change tools.",
    "care": "The top box picks only songs you can see now. If you searched or used **Only songs without a song language**, hidden songs are not picked.",
    "like": "Like putting a finger on the records you want to change before you grab the stickers."
  },
  "help.tracks.pub": {
    "t": "Public on aimusiclist",
    "what": "The switch in each row decides if the song is also on aimusiclist.com. Every song is always on your own site, on or off.",
    "when": "Turn it on for songs you want more people to hear. Turn it off for songs you want to keep only on your site.",
    "click": "It saves the moment you press it. Turned on, the song appears on aimusiclist.com within 1–2 minutes. Turned off, it is removed from there.",
    "care": "If you have 10 or more songs, at least 10 must stay public, so you cannot turn off past that. With fewer than 10, all stay public (the small line under the title tells you which rule applies). A faded switch means the song is in a public album, or one set to open later. Make the album private first.",
    "like": "From the records in your shop, you choose which ones also go on the shelf of the big market (aimusiclist.com)."
  },
  "help.tracks.col_title": {
    "t": "Title",
    "what": "Shows the song's picture, title and artist name, plus its song language and small labels.",
    "when": "Look here to check a song's details at a glance.",
    "click": "It only shows information. To change it, press [[Edit]] in that row.",
    "care": "The small labels mean: **SRT** = it has timed lyrics, **✦ name** = the AI tool it was made with, **No audio** = the audio file is missing, **In a published album** = it is in a public album. On a phone, the play count appears here too.",
    "like": "Like the front of a record jacket: picture, name, and who made it."
  },
  "help.tracks.col_genres": {
    "t": "Genres",
    "what": "Shows the song's genres, up to three. The first, highlighted one is the main genre. The others are extra genres.",
    "when": "Look here to check that each song sits in the right genre.",
    "click": "It only shows information. To change genres, press [[Edit]] in that row.",
    "care": "The main genre decides which menu the song goes under on aimusiclist.com. The extra genres are shown next to the title there. This column is hidden on a phone screen.",
    "like": "Like the shelf label that tells shoppers which corner of the big market the record belongs in."
  },
  "help.tracks.col_length": {
    "t": "Length",
    "what": "How long the song is, in minutes and seconds (for example 3:25).",
    "when": "Look here to check that the right file was uploaded, for example if a song looks far too short.",
    "click": "It only shows information. It comes from the audio file. To change it, upload a new file in [[Edit]].",
    "care": "A song must be between 30 seconds and 15 minutes long. This column is hidden on a phone screen.",
    "like": "Like the playing time printed on the back of a record jacket."
  },
  "help.tracks.col_plays": {
    "t": "Plays",
    "what": "How many times each song has been played on your own site, in total. Point at a number to see the last 7 days and today.",
    "when": "Use it to see which songs people listen to most. Bigger is better. It is a good hint about which songs to keep public or put in an album.",
    "click": "It only shows numbers. They change once a day, or right away when you press [[Refresh now]] in the Stats tab.",
    "care": "Plays on aimusiclist.com are not in this number. It appears only when your site counts plays. If a number looks too low, wait for the next daily update or press [[Refresh now]]. **Hidden from visitors** under a number means visitors do not see it.",
    "like": "Like the electricity meter of each record: it shows how many times it has been played in your shop."
  },
  "help.tracks.row_buttons": {
    "t": "Song buttons",
    "what": "The buttons at the end of each row: [[Preview]], [[Edit]] and [[Delete]].",
    "when": "Use them to listen to a song, change its details, or remove it.",
    "click": "[[Preview]] plays the song here (press [[Stop]] to stop). [[Edit]] opens the song's form at the top of the page. [[Delete]] asks you to confirm, then removes the song and its audio file right away.",
    "care": "Deleting cannot be undone. The song also disappears from aimusiclist.com. [[Preview]] appears only for songs with an audio file. A song in a public album cannot be deleted if the album would drop below 6 songs.",
    "like": "Like the tools at the counter for one record: play it, fix its label, or take it out of the shop for good."
  },
  "help.tracks.bulk_plays": {
    "t": "Play counts for visitors",
    "what": "Chooses, for the checked songs, whether visitors see how many times each song was played.",
    "when": "Use it to hide the count on a few songs (for example brand-new ones), or to show it again.",
    "click": "Press [[Show]] or [[Hide]] to save right away for all checked songs.",
    "care": "Visitors see counts only after you turn on **Show play counts to visitors** in Site info. This box appears only when your site counts plays. You always see the numbers here yourself.",
    "like": "Like choosing which records get a small \"sold 120 times\" sticker in your shop."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Show",
    "what": "Lets visitors see the play count of the checked songs.",
    "when": "Press it for songs whose count you had hidden and now want to show.",
    "click": "It is saved right away for all checked songs, and the checks are cleared. You can press [[Hide]] any time to undo it.",
    "care": "Nothing shows to visitors while **Show play counts to visitors** in Site info is off.",
    "like": "Putting the \"played this many times\" sticker back on the records."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Hide",
    "what": "Hides the play count of the checked songs from visitors.",
    "when": "Press it for songs whose count you would rather not show yet, such as songs you just uploaded.",
    "click": "It is saved right away for all checked songs, and the checks are cleared. While the Site info switch is on, those songs show **Hidden from visitors** under the number in this list. You can press [[Show]] any time to undo it.",
    "care": "Only the number is hidden. The songs still play and still count plays.",
    "like": "Taking the \"played this many times\" sticker off some records. The records stay on the shelf."
  },
  "help.tracks.plays_show": {
    "t": "Show this song's play count to visitors",
    "what": "This decides whether visitors see how many times this song was played on your site, like “1,234 plays”.",
    "when": "Untick it for a song whose number you'd rather keep private.",
    "click": "It is saved when you press [[Save track]]. The number visitors see is updated once a day.",
    "care": "Visitors see it only if “Show play counts to visitors” is on in Site info. When you visit your site while logged in, you see all numbers yourself.",
    "like": "It is like choosing whether a small “sold” count hangs on this record in your shop."
  },
  "help.site.plays": {
    "t": "Play counts",
    "what": "Settings for the number that shows how many times each song was played on your site. Plays on the aimusiclist.com screen are not in it.",
    "when": "Come here to decide whether visitors may see those numbers.",
    "click": "This title only explains the card. If the card says play counts appear once your site starts counting, statistics are not on yet — the Stats tab shows how to turn them on.",
    "care": "These numbers are only for your own site. They are not sent to aimusiclist.com and do not change its rankings.",
    "like": "It is the little counter on the shop's record player. It goes up every time someone plays a record in your shop."
  },
  "help.site.plays_switch": {
    "t": "Show play counts to visitors",
    "what": "When this is on, each song on your site shows a number like \"1,234 plays\". It is off at first.",
    "when": "Turn it on when the numbers help — for example, to show which songs people love. Leave it off if you would rather not show them.",
    "click": "It saves the moment you click. The numbers change once a day, and right away when you press [[Refresh now]] in the Stats tab. A bigger number means more listening. To hide the number for just some songs, use the song list or the song edit screen.",
    "care": "While you are signed in, you see every song's number on your site, even hidden ones. Only you see them. Visitors don't.",
    "like": "It is like putting the counter of the shop's record player where customers can see it."
  },
  "help.site.likes": {
    "t": "Likes",
    "what": "Settings for the ♥ button on your songs. Visitors tap it to say they like a song.",
    "when": "Come here to show or hide that button on your whole site.",
    "click": "This title only explains the card. The switch below does the work. If the card says to turn on statistics, likes can't be counted yet — see the Stats tab.",
    "care": "Likes are counted only on your site. They are not sent to aimusiclist.com and do not change its rankings.",
    "like": "It is the sticker board in your shop where customers put a heart next to the records they like."
  },
  "help.site.likes_switch": {
    "t": "Show the like button",
    "what": "Shows or hides the ♥ button on every song on your site. It is on at first.",
    "when": "Keep it on to see which songs visitors love. Turn it off if you don't want hearts on your site.",
    "click": "It saves the moment you click. Visitors tap ♥ without signing in, and can tap again to take it back. The numbers change once a day. A bigger number is good: more people like that song.",
    "care": "The button appears only while statistics are on. Turning the switch off hides the button but keeps the hearts already given. Turn it on again and they come back.",
    "like": "It is like hanging up or taking down the heart-sticker board in your shop."
  },
  "help.site.add": {
    "t": "Add to aimusiclist",
    "what": "Settings for the \"+ aimusiclist\" button. With it, visitors can put your song into their own playlist on aimusiclist.com.",
    "when": "Come here to show or hide that button on your site.",
    "click": "This title only explains the card. The switch below does the work. If the card says to connect first, your site is not linked to aimusiclist yet, so the button can't show.",
    "like": "It is a \"take this to the big market\" tag on your records: a customer can carry the song into their own basket at aimusiclist.com."
  },
  "help.site.add_switch": {
    "t": "Show the \"+ aimusiclist\" button",
    "what": "Shows or hides the \"+ aimusiclist\" button next to your songs and in the player. It is on at first.",
    "when": "Keep it on so listeners can keep your songs in their aimusiclist playlists and come back to them. Turn it off if you don't want the button.",
    "click": "It saves the moment you click. When a visitor presses the button, a small aimusiclist window opens (a new tab on phones), and they pick a playlist without signing in.",
    "care": "The button shows only on songs that are public on aimusiclist, and only after your site is connected. This switch does not make any song public or private.",
    "like": "It is like putting a little \"add to my basket\" button on the records that are also sold in the big market."
  },
  "help.site.seo": {
    "t": "Show up in search (Google)",
    "what": "Settings for search sites like Google. Each song and album of your site has its own page that search can find.",
    "when": "Come here to hide your site from search, or to register it in Google Search Console.",
    "click": "This title only explains the card. The switch and the steps below do the work.",
    "care": "Showing up in Google can take a few days to a few weeks. It does not change anything on aimusiclist.com.",
    "like": "It is like putting your shop's name and each record on the town map."
  },
  "help.site.seo_switch": {
    "t": "Show my songs and albums in search results",
    "what": "Lets search sites show your home, song and album pages. It is on at first.",
    "when": "Keep it on if you want new listeners to find you by searching. Turn it off only if you want a private site.",
    "click": "It saves the moment you click. When it is off, your pages tell search sites not to show them, and the site map for search is removed.",
    "care": "Pages that are already in search can take some time to disappear. People who know your address can still visit.",
    "like": "It is the \"open to the public\" sign on your shop door."
  },
  "help.site.gsc": {
    "t": "Register my site in Google Search Console",
    "what": "Step-by-step help to tell Google about your site with your own Google account.",
    "when": "Do it once if you want Google to find new songs sooner and to see how people search for you.",
    "click": "Open the steps and follow them from top to bottom. You only need to do it once.",
    "care": "You need a Google account. If something goes wrong, you can do the steps again — nothing breaks.",
    "like": "It is like signing the guest book at the town map office so they check your shop more often."
  },
  "help.site.gsc_open": {
    "t": "Open Google Search Console",
    "what": "Opens Google's own page in a new tab.",
    "when": "Press it at the first step.",
    "click": "Sign in there with your Google account, then come back to this tab for the next step.",
    "care": "This is a Google page, not part of your site."
  },
  "help.site.gsc_copy": {
    "t": "Copy",
    "what": "Copies the address next to it.",
    "when": "Press it when the step asks you to paste your site address or the site map address.",
    "click": "Then paste it in the box on the Search Console page.",
    "care": "If copying doesn't work on your device, a small window shows the address so you can copy it yourself."
  },
  "help.site.gsc_input": {
    "t": "Google verification tag",
    "what": "The box for the text Google gives you to prove the site is yours.",
    "when": "Paste here what you copied from [[HTML tag]] in Search Console.",
    "click": "You can paste the whole text as it is. Your site keeps only the part it needs.",
    "care": "Empty the box and press Save to remove it.",
    "like": "It is like a name tag that tells Google this shop belongs to you."
  },
  "help.site.gsc_save": {
    "t": "Save",
    "what": "Saves the verification text and puts it on your home page.",
    "when": "Press it after pasting, before you press [[Verify]] in Search Console.",
    "click": "In a moment a check mark appears. Then go back to Search Console and press [[Verify]].",
    "care": "If you see a red message, copy the [[HTML tag]] text again and paste the whole thing."
  },
  "help.tracks.bulk_mood": {
    "t": "Change the mood of the checked songs",
    "what": "Sets the mood (for example Calm or Energetic) of all checked songs at once. If you choose another item in **What to change**, it sets that extra info instead.",
    "when": "Use it after uploading many songs, or when you want to sort your songs by feeling.",
    "click": "Nothing happens until you press [[Apply]]. Then all checked songs get the same value and it is saved. It shows next to each song on your site and on aimusiclist.com shortly after.",
    "care": "The old value of those songs is replaced. This box appears only when aimusiclist.com offers extra info you can choose from a list.",
    "like": "Like putting the same colour tag, such as \"calm\", on many records so shoppers can find them by feeling."
  },
  "help.tracks.bulk_mood_field": {
    "t": "What to change",
    "what": "Chooses which extra info you want to set for the checked songs. Mood is chosen first.",
    "when": "Change it when you want to set something other than mood for many songs at once.",
    "click": "Choosing here only changes the choices below. Nothing is saved until you press [[Apply]].",
    "care": "The list comes from aimusiclist.com and can grow over time. Only items you pick from a list appear here.",
    "like": "Like choosing which kind of tag you are about to stick on the records: mood, or something else."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Apply",
    "what": "Saves the value you chose to every checked song.",
    "when": "Press it after you check songs and choose a value.",
    "click": "It is saved right away and a short message tells you how many songs changed. The checks are then cleared. aimusiclist.com shows it shortly after.",
    "care": "If you choose **— clear (no value) —**, or check nothing in a many-choice item, the value is removed from those songs. With no song checked, you only get a reminder to check songs first.",
    "like": "This is the moment you actually stick the tags on the records."
  },
  "help.top.lang_fix": {
    "t": "Set now",
    "what": "Picks every song without a song language for you, so you can set them all at once.",
    "when": "Press it from the song-language notice.",
    "click": "The Tracks tab opens with only those songs shown and already ticked. The box for changing many songs at once opens, at the language field. Choose the language there and apply. Nothing is saved until you do.",
    "care": "If the songs are in different languages, untick some and do it in a few rounds.",
    "like": "It is like gathering all the records without a label onto one table, so you can label them in one go."
  },
  "help.tracks.aml_box": {
    "t": "Also publish on aimusiclist.com",
    "what": "This decides whether the song also goes to aimusiclist.com. Your own site always shows it either way.",
    "when": "Keep it ticked for songs you want the world to hear and to have a chance in the Top 100. Untick it for songs you want only on your site.",
    "click": "It is saved when you upload or press [[Save track]]. Published songs show up on aimusiclist.com a few minutes later. You can switch it later in the song list.",
    "care": "At least 10 songs must stay public (all songs, if you have fewer than 10). So a new song may be published even when unticked, and saving with it unticked can be refused. For a song in a public album this box stays ticked, and unticking it does nothing until the album is made private.",
    "like": "It is choosing which records from your shop also go on the shelf of the big market."
  },
  "help.tracks.upload": {
    "t": "Upload songs",
    "what": "This is where you put new songs on your site. You pick the sound files, fill in a few boxes for each song, and press the upload button.",
    "when": "Use it every time you have new songs. You can send up to 20 songs in one go.",
    "click": "Choosing files only puts them in a list here. Nothing is saved until you press [[Upload … song(s)]]. After that, the songs are on your site right away.",
    "care": "Songs can be MP3, M4A or WAV. Each one must be 30 seconds to 15 minutes long and 15 MB or smaller.",
    "like": "It is the back door of your shop, where new records come in before they go on the shelves."
  },
  "help.tracks.choose": {
    "t": "Choose files",
    "what": "This opens a window to pick sound files from your computer. You can also drag files onto this box.",
    "when": "Use it to start an upload. You can pick many files at once.",
    "click": "The files are added to the list below. Nothing is uploaded yet. A wrong file type shows “Failed” in the list at once.",
    "care": "Up to 20 files in the list. Extra files are left out. MP3 and M4A must be 15 MB or less. WAV is turned into a 320 kbps MP3 here, and that MP3 must also be 15 MB or less (about 6½ minutes). Every song must be 30 seconds to 15 minutes long.",
    "like": "It is like putting records in a basket. They are not on the shelf until you take the basket in."
  },
  "help.tracks.name_tags": {
    "t": "Read genre, mood and language from the ( ) in file names",
    "what": "When this is on, a file name like “Midnight Rain (R&B, Neo Soul; Romantic, en)” fills in the boxes by itself. The title becomes “Midnight Rain”.",
    "when": "Keep it on if you name your songs with the AI guide. Turn it off if your file names have ( ) that are part of the real title.",
    "click": "The list is read again right away. Only files whose boxes you have not changed by hand are refilled. This browser remembers the choice.",
    "care": "Before the “;” come the genres (the first one is the main genre). After it come moods and the language code. Words it does not know are skipped and shown in grey. Things like (Live) or (feat. X) stay in the title.",
    "like": "It is like a clerk who reads the sticker on each record box and writes the shelf label for you."
  },
  "help.tracks.common": {
    "t": "Apply to all songs in this upload",
    "what": "The boxes below this heading go into every song you upload this time: the AI tool, the artist, additional info, and publishing on aimusiclist.com.",
    "when": "Set them once before you press the upload button.",
    "click": "Nothing is saved until you upload. Genre, mood and song language are not here, because you pick them for each file above.",
    "care": "If one song needs something different, upload it first and then change it with [[Edit]] in the song list.",
    "like": "It is like a sticker you put on the whole basket, not on each record."
  },
  "help.tracks.artist": {
    "t": "Artist",
    "what": "The name shown as the singer or maker of the song. The first choice is your site name.",
    "when": "Keep the site name for most songs. Pick another name if the song belongs to a different artist name you use.",
    "click": "It is saved when you upload or press [[Save track]]. If you keep the site name and later rename your site, the song follows the new name.",
    "care": "Other names come from the “Other artists” card in the Site info tab (up to 20 names). Add the name there first.",
    "like": "It is the name printed on the record jacket, under the title."
  },
  "help.tracks.up_start": {
    "t": "Upload … song(s)",
    "what": "This sends the waiting files to your site one by one. The number on the button is how many songs are waiting.",
    "when": "Press it when every file has a main genre and a song language.",
    "click": "Each row shows its progress. When all are done, the songs are on your site, and public ones go to aimusiclist.com once at the end.",
    "care": "It is locked while a needed box is empty. Keep this page open until it finishes, because this page is doing the sending. If some fail, the others are still saved.",
    "like": "It is carrying the basket into the shop and putting each record on the shelf."
  },
  "help.tracks.up_retry": {
    "t": "Retry failed songs",
    "what": "This tries again only the songs that failed, for example because the connection dropped.",
    "when": "It appears only when some songs failed. Press it after checking your internet.",
    "click": "The failed songs are sent again. A song that was already registered only sends its sound again, so it is not made twice.",
    "care": "A file of the wrong type can't be retried. If a song failed because of its length or size, fix the file, remove the row and add it again.",
    "like": "It is going back for the records that fell out of the basket on the way."
  },
  "help.tracks.up_clear": {
    "t": "Clear list",
    "what": "This empties the whole upload list at once.",
    "when": "Use it after an upload is finished, or when you want to start over.",
    "click": "All rows disappear right away. Songs that were already uploaded stay on your site.",
    "care": "It can't be pressed while an upload is running. Boxes you filled in for files not yet uploaded are lost.",
    "like": "It is emptying the basket. Records already on the shelf stay there."
  },
  "help.tracks.edit": {
    "t": "Edit",
    "what": "The form for changing one song that is already uploaded. It opens when you press [[Edit]] on a row of the song list.",
    "when": "Use it to fix the title, genres, language, artist and more, or to put in a new sound file.",
    "click": "Changes in the upper part are saved only with [[Save track]]. The song image and lyrics at the bottom are saved the moment you change them.",
    "care": "While this form is open, it takes the place of the upload card. Press [[Cancel]] or save to get the upload card back.",
    "like": "It is taking one record off the shelf to fix its label."
  },
  "help.tracks.title": {
    "t": "Title",
    "what": "The song's name, shown on your site and on aimusiclist.com.",
    "when": "Change it when the title from the file name is wrong or needs fixing.",
    "click": "It is saved when you press [[Save track]]. Public songs show the new title on aimusiclist.com a little later.",
    "care": "The title can't be empty. It can be up to 100 characters.",
    "like": "It is the big name printed on the record jacket."
  },
  "help.tracks.replace_audio": {
    "t": "Replace audio (optional)",
    "what": "Pick a new sound file here to swap the song's sound. The title, genres, image and lyrics stay the same.",
    "when": "Use it when you made a better version or uploaded the wrong file.",
    "click": "Nothing happens until you press [[Save track]]. Then the new file is sent and replaces the old sound.",
    "care": "The old sound is gone after saving, so keep a copy on your computer. Same rules as uploading: MP3, M4A or WAV, 30 seconds to 15 minutes, 15 MB or less.",
    "like": "It is putting a new record inside the same jacket."
  },
  "help.tracks.save": {
    "t": "Save track",
    "what": "This saves everything you changed in the edit form above.",
    "when": "Press it when you are done changing the title, genres, language and other boxes.",
    "click": "The changes are saved and the form closes. Your site shows them right away, and aimusiclist.com a little later for public songs. If you picked a new sound file, it is sent too, and its progress is shown.",
    "care": "Saving can be refused, for example with no main genre, or when unpublishing would leave fewer than 10 public songs. Then a red message explains why and nothing is saved.",
    "like": "It is putting the record back on the shelf with its fixed label."
  },
  "help.tracks.cancel": {
    "t": "Cancel",
    "what": "This closes the edit form without saving the boxes above.",
    "when": "Use it when you opened the wrong song or changed your mind.",
    "click": "The form closes at once and the upload card comes back. Changes you did not save are dropped.",
    "care": "The song image and lyrics are saved the moment you change them, so Cancel does not undo those.",
    "like": "It is putting the record back on the shelf without touching its label."
  },
  "help.tracks.image": {
    "t": "Song image",
    "what": "The small picture of the song. It is shown behind the play button on your site and on aimusiclist.com.",
    "when": "Change it when you want the song to have its own picture instead of the default one.",
    "click": "The buttons below work right away. They do not wait for [[Save track]].",
    "care": "Each song got a default image when it was uploaded. Your picture is saved as a small square (100×100), plus a bigger one when the picture is large enough.",
    "like": "It is the record jacket people see before they press play."
  },
  "help.tracks.image_lg": {
    "t": "Make the image sharp on big cards",
    "what": "This note means your song image only has the small version. On aimusiclist.com's big cards, like the top of the Top 100, it can look blurry.",
    "when": "It shows for songs whose image was uploaded before big images existed, or from a picture that was too small.",
    "click": "Press [[Change image]] and upload the picture again. The note goes away when a big version is saved.",
    "care": "Use a picture at least 200 pixels wide in the part you crop. A smaller picture can't make a big version.",
    "like": "It is like reprinting a small record jacket in poster size for the shop window."
  },
  "help.tracks.image_change": {
    "t": "Change image",
    "what": "This lets you pick a picture from your computer and use it as the song image.",
    "when": "Use it to give the song its own picture, or to replace the one it has.",
    "click": "A window opens where you crop or shrink the picture. When you press [[Save image]], it is saved at once and shows on your site. Public songs show it on aimusiclist.com a little later.",
    "care": "JPG, PNG, WebP or GIF, 2 MB or smaller. Only the shrunk picture is uploaded, not your original file.",
    "like": "It is putting a new jacket on the record."
  },
  "help.tracks.image_reset": {
    "t": "Back to default image",
    "what": "This removes the picture you uploaded and brings back the song's default image.",
    "when": "Use it when you no longer want your own picture for this song.",
    "click": "It happens right away, without asking. Your site shows the default image at once.",
    "care": "Your uploaded picture is deleted, big version too. To use it again, upload it again with [[Change image]].",
    "like": "It is taking off your custom jacket and putting back the plain shop jacket."
  },
  "help.tracks.lyrics": {
    "t": "Lyrics (.srt)",
    "what": "The words of the song, as an .srt file. An .srt file has each line of lyrics with its time.",
    "when": "Add it when you want listeners to read along. Many music AI tools can give you an .srt file.",
    "click": "Uploading or deleting works right away, without [[Save track]]. On your site, visitors press SRT on the song to see the words without the times.",
    "care": "The file must end in .srt, be saved as UTF-8 text, and be 100 KB or smaller. It must have time lines like 00:00:01,000 --> 00:00:04,000.",
    "like": "It is the lyric sheet tucked inside the record jacket."
  },
  "help.tracks.lyrics_upload": {
    "t": "Upload .srt / Replace .srt",
    "what": "This picks an .srt lyrics file from your computer for this song. If the song already has lyrics, it says Replace.",
    "when": "Use it to add lyrics, or to fix lyrics with a new file.",
    "click": "As soon as you pick the file, it is checked and saved. The old lyrics, if any, are replaced. A red message shows if the file is not right.",
    "care": "Only .srt files of 100 KB or less, saved as UTF-8. A file without time lines is refused.",
    "like": "It is slipping a new lyric sheet into the jacket."
  },
  "help.tracks.lyrics_view": {
    "t": "View file",
    "what": "This opens the lyrics file that is saved for this song.",
    "when": "Use it to check that the right lyrics were saved.",
    "click": "The file opens in a new tab, with its times. Nothing changes.",
    "like": "It is pulling the lyric sheet out of the jacket to read it."
  },
  "help.tracks.lyrics_delete": {
    "t": "Delete lyrics",
    "what": "This removes the lyrics from this song.",
    "when": "Use it when the lyrics are wrong and you don't have a better file yet, or the song should have no lyrics.",
    "click": "A question asks you to confirm. If you say yes, the lyrics are deleted right away and the SRT mark disappears from the song.",
    "care": "It can't be undone. To get the lyrics back, upload the .srt file again.",
    "like": "It is taking the lyric sheet out of the jacket and throwing it away."
  },
  "help.tracks.upguide": {
    "t": "Fill in genre and mood automatically",
    "what": "A short guide that saves you from picking the genre, mood and language for every song by hand. You give a guide file to a free AI, and it names your song in a special way.",
    "when": "Read it once before you make your next songs. It helps most when you upload many songs at a time.",
    "click": "The ✕ folds the guide into one small button, and that button opens it again. This browser remembers which way you left it.",
    "care": "The guide does not change how you make music. It only decides the song title.",
    "like": "It is like writing the shelf label on the record box before it arrives, so you don't have to sort it at the door."
  },
  "help.tracks.upguide_dl": {
    "t": "Get the guide file for AI",
    "what": "This downloads the guide file from aimusiclist.com. It is a plain text file made for AI to read.",
    "when": "Before you make a song, attach this file to ChatGPT, Claude or Gemini (free plans work). Then ask the AI for a song title.",
    "click": "The file is saved to your computer. Nothing changes on your site.",
    "care": "Keep the file name the music AI gives you when you download the song. The ( ) part of the name is what fills in the boxes here.",
    "like": "It is a recipe card you hand to a helper, so the labels come out the same way every time."
  },
  "help.tracks.uf_all": {
    "t": "Use this for all files",
    "what": "This copies the value of this box to the same box of every other file in the list.",
    "when": "Use it when many songs share the same genre, mood or language. Fill in the first one, then press this.",
    "click": "The other files change right away, and a message says how many. Files that are already uploaded are not touched.",
    "care": "It overwrites what you had chosen for the other files. You can still change any file by hand after.",
    "like": "It is like a rubber stamp: you stamp the same label on every box at once."
  },
  "help.tracks.uf_mood": {
    "t": "Mood",
    "what": "The feeling of this song, like Sad or Romantic. aimusiclist.com decides which moods are in the list.",
    "when": "Tick the moods that fit. It is optional.",
    "click": "Your ticks are kept for this file only and saved when you upload. When you reach the limit shown in ( ), the other boxes lock until you untick one.",
    "care": "This box only appears when your site has received the field list from aimusiclist.com.",
    "like": "It is a small colour sticker on the record that tells listeners the feeling before they play it."
  },
  "help.tracks.uf_genre": {
    "t": "Genre",
    "what": "The genres of this one song: one main genre and up to two extra genres.",
    "when": "Pick them for every file. The main genre must be chosen.",
    "click": "Your pick is kept for this file only. It is saved when you upload.",
    "care": "The main genre decides which genre menu the song is in on aimusiclist.com. Extra genres are shown next to the title there.",
    "like": "It is the shelf label on one record: the big section first, then two small notes."
  },
  "help.tracks.uf_lang": {
    "t": "Song language",
    "what": "The language of the words sung in this song. You can add a second language too.",
    "when": "Pick it for every file. If the song has no singing, choose “Instrumental (no lyrics)”.",
    "click": "Your pick is kept for this file only and saved when you upload.",
    "care": "This is not the language of your site screen. “Instrumental” must stand alone, so the second box is locked when you pick it. aimusiclist.com uses this for its charts by language.",
    "like": "It is a note on the record that says which language the singer uses."
  },
  "help.tracks.queue": {
    "t": "Files to upload",
    "what": "This is the list of files you picked. Each row shows the title, file name and size, its status, and the boxes for that song.",
    "when": "Check it before you upload. Every song needs a main genre and a song language.",
    "click": "Changes in the boxes are kept here until you upload. A green “Filled in from file name” tag means the boxes came from the ( ). “Choose below” means you must pick them yourself.",
    "care": "Rows with an empty box are marked red. While the upload runs, the boxes turn into one summary line and cannot be changed.",
    "like": "It is the delivery list at the back door. You check each box before it goes on the shelf."
  },
  "help.tracks.up_remove": {
    "t": "Remove",
    "what": "This takes one file out of the upload list.",
    "when": "Use it when you picked a wrong file, or a file shows “Failed” because of its type or length.",
    "click": "The row disappears at once. The file on your computer is not deleted.",
    "care": "The button is hidden while an upload is running and on files that are already uploaded. To delete an uploaded song, use the song list.",
    "like": "It is like taking one record back out of the basket before you go in."
  },
  "help.tracks.up_need": {
    "t": "Empty boxes",
    "what": "This warning lists the files that still have an empty main genre or song language.",
    "when": "It appears by itself while a needed box is empty. The upload button stays locked until it is gone.",
    "click": "Press a line to jump straight to that empty box. The warning goes away when every needed box is filled.",
    "care": "Only the first 12 empty boxes are listed. The number at the top counts them all.",
    "like": "It is a checklist taped to the door: the delivery can't go in until every line is ticked."
  },
  "help.tracks.up_after": {
    "t": "Check New on aimusiclist.com",
    "what": "A note that appears after an upload, telling you where to look for your new public songs.",
    "when": "It appears only when your site is connected to aimusiclist.com and at least one new song is public.",
    "click": "The link opens the New page of aimusiclist.com in a new tab.",
    "care": "aimusiclist.com needs a few minutes to pick up new songs. If they are not there after about 5 minutes, check again a little later.",
    "like": "It is like walking to the big market to see your new record on its shelf."
  },
  "help.tracks.pubmin": {
    "t": "Public: n · Minimum: n",
    "what": "The first number is how many of your songs are public on aimusiclist.com now. The second is the smallest number that must stay public.",
    "when": "Look here before you turn songs off, so you know how many you can still turn off.",
    "click": "It is only a count. It changes by itself when you turn songs on or off.",
    "care": "The rule: if you have 10 or more songs, at least 10 must stay public. If you have fewer than 10, all of them stay public. Only songs with an audio file are counted. A song in a public album counts as public. An album set to open later counts only once it opens.\nIf the first number is smaller than the second, a yellow box asks you to turn more songs on. You choose which songs. Deleting a song is always allowed.",
    "like": "The big market (aimusiclist.com) asks every shop to keep at least 10 records on its shelf. This shows how many you have there now."
  },
  "help.top.pubmin_go": {
    "t": "Choose songs",
    "what": "Takes you to the place where you pick which songs are public.",
    "when": "Press it from the not-enough-public-songs notice.",
    "click": "The Tracks tab opens at the 'Public · Minimum' line. Turn on the public switch of the songs you want. Each switch saves the moment you press it.",
    "care": "Songs without audio don't count. The notice goes away by itself once you reach the minimum.",
    "like": "It is like walking straight to the showcase to put a few more records in it."
  },
  "help.tracks.pub_tip": {
    "t": "Public switch tip",
    "what": "A short note that shows the first time you use a public switch. It explains when the song appears on aimusiclist.com.",
    "when": "Read it once. It shows only after you press a switch for the first time on this browser.",
    "click": "[[Don't show again]] hides it for good on this browser. [[Close]] hides it only until you open the admin screen again.",
    "care": "Hiding the note changes nothing about your songs.",
    "like": "Like a small sign by the shelf: \"Things you put here appear in the big market in a minute or two\"."
  },
  "help.albums.form": {
    "t": "New album / Edit album",
    "what": "This is the box where you make an album or change one. An album is a group of your songs in an order you choose, with a title, a cover and a short introduction.",
    "when": "Use it when you want to put songs together, like a real record. Albums appear on your site, and public albums also appear on aimusiclist.com.",
    "click": "Nothing in this box is saved while you fill it in. Everything is saved together when you press [[Save album]]. [[Cancel]] closes the box and throws away the changes.",
    "care": "An album can hold up to 35 songs. To be public, it needs 6 to 35 songs, and every song must have its sound file. You can save an album with fewer songs, but it stays private.",
    "like": "It is like putting together a record: you choose the songs, put them in order and put a record jacket on it."
  },
  "help.albums.title": {
    "t": "Album title",
    "what": "The name of the album. Visitors see it on your site, and on aimusiclist.com if the album is public.",
    "when": "Fill it in every time you make an album. You can't save an album without a title.",
    "click": "It is saved when you press [[Save album]]. You can change it later with [[Edit]] in the album list.",
    "care": "Up to 100 characters.",
    "like": "It is the big name printed on the front of the record jacket."
  },
  "help.albums.artist": {
    "t": "Artist",
    "what": "Whose album this is. The first choice is your site name. The other choices are the names you added under Other artists in the Site info tab.",
    "when": "Leave it on the site name if you made the album under your usual name. Pick another name if the album is by a side project or another name you use.",
    "click": "It is saved when you press [[Save album]]. The name shows under the album title on your site and on aimusiclist.com.",
    "care": "If you keep the first choice, the album follows your site name: when you change the site name, the album's artist changes too. A famous singer's name can't be used.",
    "like": "It is the name tag of the musician who made this record in your shop."
  },
  "help.albums.desc": {
    "t": "Album introduction",
    "what": "A few sentences about the album. It shows right under the album title, on your site and on aimusiclist.com.",
    "when": "Write it if you want to tell listeners what the album is about, how you made it, or what mood it has. You can also leave it empty.",
    "click": "It is saved when you press [[Save album]]. The number under the box shows how many characters you have left.",
    "care": "Up to 200 characters. When you reach 200, you can't type more. One emoji counts as one character. You can use new lines, but only plain words (no pictures or links).",
    "like": "It is the short note printed on the back of the record jacket."
  },
  "help.albums.pub": {
    "t": "When to make it public",
    "what": "Here you choose when the album comes out: right away, or on a date and time you pick.",
    "when": "Choose [[Now]] for most albums. Choose a date and time when you want a release day, for example to tell your fans about it first.",
    "click": "Your choice is used when you press [[Save album]]. The album goes public only if it has 6 to 35 songs and all of them have sound files. If not, it is saved as private.",
    "care": "For a new album this happens by itself. When you edit an album, its public switch stays as it was. You can always turn it on or off later with the switch in the album list.",
    "like": "It is like deciding the release day of a new record: put it on the shelf today, or on a day you circle on the calendar."
  },
  "help.albums.pub_now": {
    "t": "Now",
    "what": "The album goes public as soon as you save it.",
    "when": "Choose it when the album is ready and you want people to hear it today.",
    "click": "After you press [[Save album]], a new album with 6 to 35 songs (all with sound files) is public right away. It shows on aimusiclist.com in a minute or two. If you had set a date before, choosing Now cancels that date.",
    "care": "If the album has fewer than 6 songs, or a song has no sound file, it is saved as private. The message after saving tells you which one happened.",
    "like": "You put the new record on the big market's shelf the moment it is finished."
  },
  "help.albums.pub_at": {
    "t": "On a date and time I choose",
    "what": "The album waits and goes public by itself at the date and time you pick.",
    "when": "Use it to plan a release day, for example 8 pm next Friday, so you can tell fans the time in advance.",
    "click": "A date and time box opens. The time is in this device's time zone. After you press [[Save album]], the list shows the planned time. Before that time, the album is hidden on your site and on aimusiclist.com. Within about a minute after the time, it appears in both places.",
    "care": "Pick a time later than now, and no more than 366 days ahead. While it waits, its songs can't be made private. The album still needs 6 to 35 songs with sound files. On the PHP version it can take up to about 5 minutes.",
    "like": "It is like a shop that sets an alarm clock: when it rings, the new record goes into the shop window by itself."
  },
  "help.albums.cover": {
    "t": "Cover image",
    "what": "The square picture of the album. It shows on your site and, for public albums, on aimusiclist.com.",
    "when": "Add one whenever you can. Albums with a cover are easier to notice and remember. It is optional, so you can skip it.",
    "click": "Press [[Choose cover]] to pick a picture and fit it into a square. The new cover is saved together with the album when you press [[Save album]].",
    "care": "It is saved as a small 200×200 picture. Deleting an album removes only its cover, never its songs.",
    "like": "It is the record jacket: the first thing people see on the shelf."
  },
  "help.albums.pick": {
    "t": "Choose tracks (in order)",
    "what": "Here you put songs into the album. The left side (on a phone, the top) is your songs. The right side (on a phone, the bottom) is the songs already in this album, in play order.",
    "when": "Use it when you make an album or change its songs. It works well even if you have hundreds of songs.",
    "click": "Find songs on the left, check them, and press [[Add selected →]]. They go to the end of the right list. Songs in this album disappear from the left list. Nothing is saved until you press [[Save album]].",
    "care": "Up to 35 songs. A song can be in more than one album; a small tag shows the other album's name. Songs marked 'No audio' have no sound file, and an album with such a song can't be public.",
    "like": "The left side is the shelf in your warehouse. The right side is the record you are filling, one song at a time."
  },
  "help.albums.save": {
    "t": "Save album",
    "what": "Saves everything in the album box at once: title, artist, introduction, release time, cover and songs.",
    "when": "Press it when you finish making or changing the album.",
    "click": "A message tells you what happened: public now, public at the time you chose, or saved as private because it needs 6 to 35 songs with sound files. Then the album shows in the list below. A public album reaches aimusiclist.com in a minute or two.",
    "care": "A title is needed. A chosen date and time must be later than now. Some changes can be refused, for example if they would leave fewer than 10 public songs on your site; the red message says why.",
    "like": "It is like wrapping the finished record and putting it on the shelf."
  },
  "help.albums.cancel": {
    "t": "Cancel",
    "what": "Closes the album box without saving.",
    "when": "Use it when you change your mind or made a mess and want to start over.",
    "click": "The box closes right away. Everything you changed since you opened it is thrown away, including a new cover you picked. The album stays as it was saved before.",
    "care": "There is no 'are you sure?' question. Unsaved changes are lost.",
    "like": "You put the half-made record back in the drawer without changing the one on the shelf."
  },
  "help.albums.new": {
    "t": "New album",
    "what": "Opens an empty album box so you can make a new album.",
    "when": "Press it when you want to group some of your songs into an album.",
    "click": "The album box opens above the list. Nothing is made until you press [[Save album]] in that box.",
    "care": "While an album box is open, this button is hidden. Save or cancel first.",
    "like": "You take out a new, empty record jacket."
  },
  "help.albums.list": {
    "t": "My albums",
    "what": "All the albums you have made. Every album shows on your site. Albums with the switch on also show on aimusiclist.com, and their songs become public there too.",
    "when": "Look here to see which albums are public, to change an album, or to delete one.",
    "click": "Each row has a public switch, the title, the number of songs, and [[Edit]] / [[Delete]] buttons.",
    "care": "An album planned for a later time is hidden everywhere, even on your site, until that time. While an album is public (or waiting to be public), its songs can't be made private one by one.",
    "like": "It is the record shelf in your shop. The switch decides which records also go to the big market."
  },
  "help.albums.pub_switch": {
    "t": "Public on aimusiclist",
    "what": "The switch in each row decides if the album is also on aimusiclist.com. The album is on your site either way.",
    "when": "Turn it on for albums you want more people to find. Turn it off to take an album off aimusiclist.com.",
    "click": "It is saved the moment you press it. On: the album and all its songs appear on aimusiclist.com in a minute or two. Off: they disappear from there. Songs you made public one by one stay public.",
    "care": "A grey switch means the album needs 6 to 35 songs, all with sound files; tap it to see why. Turning it off can be refused if fewer than 10 songs would stay public on your site.",
    "like": "You decide which records from your shop also go on the big market's shelf."
  },
  "help.albums.col_title": {
    "t": "Album title",
    "what": "This column shows each album's title and, under it, its artist. Small tags may appear next to them.",
    "when": "Look here to check an album's state at a glance.",
    "click": "'Goes public …' means the album waits for the date and time you set. 'Needs 6–35 tracks with audio' means it can't be public yet: add or remove songs, or upload the missing sound files.",
    "like": "It is the label on the side of each record on the shelf."
  },
  "help.albums.col_count": {
    "t": "Number of songs",
    "what": "How many songs are in each album.",
    "when": "Look here to see if an album can be public. It needs 6 to 35 songs.",
    "click": "If the number is below 6, press [[Edit]] and add songs. 35 is the most an album can hold.",
    "like": "It is like counting the songs listed on the back of the record."
  },
  "help.albums.row_buttons": {
    "t": "Edit / Delete",
    "what": "The buttons at the end of each row. [[Edit]] opens the album to change it. [[Delete]] removes the album.",
    "when": "Use Edit to change songs, order, title, cover or release time. Use Delete when you don't want the album anymore.",
    "click": "Edit opens the album box at the top of the page. Delete asks you first, then removes the album and its cover right away. The songs stay on your site.",
    "care": "Deleting can't be undone. Deleting a public album can be refused if fewer than 10 songs would stay public on your site.",
    "like": "Edit is taking a record off the shelf to fix it. Delete is throwing away the jacket and the track list; the songs go back to the warehouse."
  },
  "help.albums.pick_search": {
    "t": "Search song titles",
    "what": "Type part of a song title to show only the songs that match on the left.",
    "when": "Use it when you have many songs and know the name of the one you want.",
    "click": "The list changes as you type. Big and small letters don't matter. Clear the box to see all songs again.",
    "care": "It looks only at song titles, not at the artist or the lyrics.",
    "like": "It is like asking the warehouse keeper, 'Where is the song called…?'"
  },
  "help.albums.pick_genre": {
    "t": "Genre",
    "what": "Shows only your songs of one main genre on the left. The list has only the main genres your songs use.",
    "when": "Use it when you want an album of one style, for example only R&B songs.",
    "click": "The left list changes right away. A song shows if one of its genres is that genre or a detailed genre under it. Choose All genres to see everything again.",
    "care": "This only helps you find songs. It does not change the songs' genres.",
    "like": "It is like walking to one aisle of the warehouse, the R&B aisle."
  },
  "help.albums.pick_sort": {
    "t": "Order",
    "what": "Changes the order of your songs on the left: newest uploads first, oldest first, or by title.",
    "when": "Use Newest to find songs you just made. Use Title A–Z when you look for a name.",
    "click": "The left list is sorted again right away. It does not change the order inside the album; that is set on the right side.",
    "like": "It is like lining up the warehouse shelf by date or by name."
  },
  "help.albums.pick_all": {
    "t": "Select all shown",
    "what": "Checks every song that matches your search and genre right now. The number shows how many.",
    "when": "Use it after you narrow the list, for example to pick all your songs of one genre at once.",
    "click": "All matching songs are checked, even ones further down the list. Press it again (it now says Clear selection) to uncheck them. Songs are not added yet; press [[Add selected →]] next.",
    "care": "An album holds up to 35 songs. If you check more, only the first ones that fit are added.",
    "like": "It is like saying 'everything on this shelf, please' instead of pointing at each item."
  },
  "help.albums.pick_add": {
    "t": "Add selected →",
    "what": "Puts the songs you checked into the album. The number shows how many songs are checked.",
    "when": "Press it after you check songs on the left.",
    "click": "The checked songs go to the end of the right list, in the order the left list shows them. They disappear from the left list. You can change the order on the right. The album is saved only when you press [[Save album]].",
    "care": "The button is grey when nothing is checked or the album already has 35 songs. If not all songs fit, a message tells you how many were left out.",
    "like": "You carry the songs you picked from the warehouse shelf and put them on the record."
  },
  "help.albums.pick_recent": {
    "t": "Add my latest",
    "what": "Adds your most recently uploaded songs in one step. You choose how many in the small number box (1 to 35, 10 at first).",
    "when": "Use it when you just uploaded a batch of new songs and want them all in one album.",
    "click": "The newest songs that have a sound file and are not in this album yet go to the end of the right list, newest first. Your search and genre choices on the left don't matter here. Nothing is saved until [[Save album]].",
    "care": "Songs without a sound file are skipped. The album still holds no more than 35 songs. The button is grey when the album is full.",
    "like": "It is like saying 'give me the last 10 records that came into the warehouse'."
  },
  "help.albums.picked": {
    "t": "In this album",
    "what": "The songs in this album, in the order they will play. Next to it you see how many songs there are. The number turns red when it is not between 6 and 35.",
    "when": "Use it to check the songs and to set the order.",
    "click": "Hold ⠿ and drag a song up or down, or use ▲ ▼. ✕ takes a song out of the album (the song stays on your site). Changes are saved when you press [[Save album]].",
    "care": "A public album needs 6 to 35 songs, all with sound files. A song marked 'No audio' blocks publishing. If an album is already public, you can't save it with fewer than 6 songs.",
    "like": "It is the track list on the back of the record: song 1, song 2, song 3…"
  },
  "help.albums.pick_clear": {
    "t": "Remove all",
    "what": "Takes every song out of this album at once, so you can start choosing again.",
    "when": "Use it when you want to start the song list over.",
    "click": "It asks you first. Then the right list becomes empty and the songs go back to the left list. Nothing is saved until [[Save album]]; press [[Cancel]] instead to keep the album as it was.",
    "care": "The songs themselves are not deleted. They stay on your site.",
    "like": "You take all the songs off the record and put them back on the warehouse shelf."
  },
  "help.albums.cover_pick": {
    "t": "Choose cover",
    "what": "Opens your device's pictures so you can pick a cover. Then a small window lets you choose which part to keep.",
    "when": "Press it to add a cover or to change the one you have.",
    "click": "After you press [[Save image]] in the window, the new cover shows here with the words 'New cover'. It is not saved yet. It is saved when you press [[Save album]]. [[Cancel]] next to it drops the new picture.",
    "care": "You can pick JPG, PNG, WebP or GIF pictures of 2 MB or less. Your original picture is not uploaded, only the small copy.",
    "like": "You pick a photo and trim it to fit the record jacket."
  },
  "help.albums.cover_delete": {
    "t": "Remove cover",
    "what": "Takes the cover picture off this album. The album and its songs stay.",
    "when": "Use it when you no longer want a picture on the album, for example while you make a new one.",
    "click": "It asks you first. If you say yes, the cover is removed right away, without pressing [[Save album]]. Visitors then see an empty square.",
    "care": "This can't be undone. To get a cover back, choose the picture again.",
    "like": "You take the jacket off the record. The record inside is still there."
  },
  "help.skins.use": {
    "t": "Use this skin",
    "what": "Puts this installed skin on your site. The skin you used before is remembered.",
    "when": "When you want visitors to see your site in this skin.",
    "click": "It is saved right away. Visitors see the new look within about 30 seconds. To undo, press [[Back to the previous skin]] or pick another skin.",
    "care": "The skin in use has no button here, because it is already on. Your songs and menus do not change.",
    "like": "Like taking one outfit out of your wardrobe and putting it on your shop."
  },
  "help.skins.update": {
    "t": "Update",
    "what": "The maker of a gallery skin you installed has made a new version. This button gets it. You see it next to a **New version** badge.",
    "when": "When you want the newest design of that skin, with its fixes.",
    "click": "The new version is checked and replaces the old one. It does not change which skin your site uses. If this skin is in use, visitors see the new version within about 30 seconds.",
    "care": "This is the skin's design only. It is separate from updating your site itself. Skins you uploaded yourself never show this button.",
    "like": "Like the tailor sending a better-fitting copy of an outfit you already own."
  },
  "help.skins.download": {
    "t": "Download (to edit)",
    "what": "Saves a copy of a built-in skin (Light or Dark) to your computer. You can use it as a starting point for your own skin.",
    "when": "When you want to make your own skin. Give the copy to a free AI chat (ChatGPT, Claude) and ask it to change colors or layout.",
    "click": "Your browser saves the skin file. Nothing on your site changes.",
    "care": "Built-in skins cannot be changed directly. Upload your edited copy under a new name in **Upload a skin**, then press [[Use this skin]].",
    "like": "Like taking home a sewing pattern so you can make your own outfit."
  },
  "help.skins.delete": {
    "t": "Delete",
    "what": "Removes a skin you uploaded or added from the gallery. Built-in skins (Light, Dark) cannot be deleted, so they show [[Download (to edit)]] instead.",
    "when": "When you no longer need a skin, or you have reached 20 skins and want room for a new one.",
    "click": "You are asked to confirm. Then the skin is gone at once. If it was the skin in use, your site switches to Light.",
    "care": "This cannot be undone. A gallery skin can be added again from **Browse**. A skin you uploaded yourself is lost unless you kept the file.",
    "like": "Like throwing an outfit out of the wardrobe. Keep your own pattern if you might want it again."
  },
  "help.skins.revert": {
    "t": "Back to the previous skin",
    "what": "Puts back the skin you used just before. The button shows that skin's name.",
    "when": "When you tried a new skin and liked the old one better.",
    "click": "It is saved right away, and visitors see it within about 30 seconds. The skin you leave becomes the new previous skin, so pressing again swaps back.",
    "care": "Only one step back is remembered. If the previous skin was deleted, this button disappears.",
    "like": "Like taking off the new outfit and putting yesterday's back on."
  },
  "help.skins.title": {
    "t": "Skins",
    "what": "A skin is the outfit your site wears: colors, letters and layout. Changing it never touches your songs, albums or settings.",
    "when": "Come here when you want your site to look different, or when a skin you use has a new version.",
    "click": "This is only a title. The buttons below do the work. Your site always has two built-in skins, **Light** and **Dark**, and you can keep up to 20 more.",
    "care": "Visitors see a new skin within about 30 seconds. If you delete the skin in use, your site goes back to Light.",
    "like": "It is like changing the paint and the shelves of your shop. The records on the shelves stay exactly the same."
  },
  "help.skins.view": {
    "t": "Installed / Browse",
    "what": "Two views of the Skins tab. **Installed** shows the skins your site already has. **Browse** shows the skin gallery, where you can try on and add skins other people made.",
    "when": "Use Installed to switch, update or delete your skins and to upload your own. Use Browse to find a new look.",
    "click": "It only changes the view. Nothing on your site changes. The first time you open Browse, the skin list is loaded.",
    "like": "Installed is your own wardrobe. Browse is the clothing store next door."
  },
  "help.skins.upload": {
    "t": "Upload a skin",
    "what": "Adds a skin you made yourself. A skin is one web page file (.html) that follows the skin guide. A free AI chat can make one for you.",
    "when": "When you want a look that no gallery skin has. A good start is a built-in skin from [[Download (to edit)]].",
    "click": "Fill in the name and the file, then press [[Upload skin]]. The skin joins your list but is not put on yet. Press [[Use this skin]] to wear it.",
    "care": "The file is checked first. It must be 100 KB or less, keep the menu, content and player spots once each, and not hide the **Powered by aimusiclist.com** line. Moving code and pictures from other websites are not allowed.",
    "like": "Like sewing your own outfit and hanging it in your wardrobe."
  },
  "help.skins.upload_name": {
    "t": "Skin name",
    "what": "The name of your skin in the skin list. Use 1 to 32 small letters (a–z), numbers, - or _.",
    "when": "Type it before you upload. Pick a short name you will recognize, like my-blue.",
    "click": "Nothing is saved until you press [[Upload skin]].",
    "care": "Capital letters and spaces are not allowed. **light** and **dark** are taken by the built-in skins. If you use a name you already have, the old skin is replaced. If the skin in use is replaced, visitors see the new one within about 30 seconds.",
    "like": "Like the name tag you sew into an outfit."
  },
  "help.skins.upload_file": {
    "t": "Skin file",
    "what": "The skin file on your computer. It must be one .html file of 100 KB or less.",
    "when": "Choose it after you made or edited a skin, for example with a free AI chat.",
    "click": "It only picks the file. Nothing is sent until you press [[Upload skin]].",
    "care": "Only one file. Pictures inside the skin must not come from other websites. If the file is too big, ask the AI to make it shorter.",
    "like": "Like picking up the finished outfit before you hang it in the wardrobe."
  },
  "help.skins.upload_btn": {
    "t": "Upload skin",
    "what": "Sends your skin file and checks it.",
    "when": "After you typed the name and chose the file.",
    "click": "If something is wrong, a red message says what to fix and nothing is saved. If it passes, you see **Saved** and the skin appears in your list. It is not put on your site until you press [[Use this skin]].",
    "care": "You can keep up to 20 skins besides Light and Dark. Delete one first if you are full. Uploading over a gallery skin's name makes it your own skin, and it stops getting new versions.",
    "like": "Like a shop inspector checking the outfit before it goes into the wardrobe."
  },
  "help.skins.gallery": {
    "t": "Skin gallery",
    "what": "A shared shelf of ready-made skins. Each card shows a picture, the maker, light or dark, and the version. The newest skins come first.",
    "when": "When you want a new look in one click without making anything.",
    "click": "Press a picture or [[Preview]] to try a skin on your own site. Press [[Apply]] to add it and put it on.",
    "care": "If a card says **Update your site to use this one.**, that skin needs a newer version of your site first.",
    "like": "Like a clothing store where you can try outfits on your own shop before you take them home."
  },
  "help.skins.gal_reload": {
    "t": "Refresh",
    "what": "Loads the skin gallery list again.",
    "when": "When new skins may have arrived, or when the list did not load.",
    "click": "The list reloads in a moment. New versions of your installed skins are checked too. Nothing on your site changes.",
    "care": "If you see **We can't load the skin list right now.**, wait a little and press [[Try again]].",
    "like": "Like asking the clothing store for its newest catalog."
  },
  "help.skins.gal_filter": {
    "t": "Skin filter",
    "what": "Buttons that show only some skins. **All**, **Light** (bright background), **Dark** (dark background), and #words that describe a style.",
    "when": "When the gallery has many skins and you are looking for a certain feel.",
    "click": "Only the cards shown change. Press **All** to see everything again. Nothing is saved.",
    "care": "A #word appears only when two or more skins use it. If nothing matches, you see **No skins match this filter.**",
    "like": "Like the signs in a clothing store: jackets this way, shirts that way."
  },
  "help.skins.gal_preview": {
    "t": "Preview",
    "what": "Shows your own site, with your songs and profile, wearing this skin. You can also press the skin's picture.",
    "when": "Before you apply a skin, to see how it really looks on your site.",
    "click": "A window opens. Nothing is saved and visitors see nothing. Close it with [[Close]] or the Esc key. You can apply the skin from the same window.",
    "care": "Songs do not play and ads are not shown in preview. If a card says **Update your site to use this one.**, there is no preview until your site is updated.",
    "like": "Like a fitting room: you try the outfit on, and you can still put it back."
  },
  "help.skins.gal_apply": {
    "t": "Apply / Apply this skin",
    "what": "Adds this gallery skin to your site and puts it on in one click. You find it on each skin card and in the preview window.",
    "when": "When you like a skin and want visitors to see it.",
    "click": "The skin is checked, added to **Installed**, and put on at once. Visitors see it within about 30 seconds. To undo, press [[Back to the previous skin]].",
    "care": "You can keep up to 20 skins besides Light and Dark. If you uploaded your own skin with the same name, you are asked before it is replaced. A skin marked **Update your site to use this one.** cannot be applied yet.",
    "like": "Like buying an outfit at the store and wearing it out the door."
  },
  "help.skins.pv_mode": {
    "t": "Desktop / Phone",
    "what": "Changes the size of the preview. **Desktop** shows a wide computer screen. **Phone** shows a narrow phone screen.",
    "when": "Many visitors listen on phones, so check both before you apply.",
    "click": "Only the preview size changes. Nothing is saved.",
    "like": "Like looking at your shop window from the street and then from up close."
  },
  "help.site.artist_del": {
    "t": "Delete",
    "what": "Takes this name out of the list of other artists.",
    "when": "When you no longer want to pick this name for new songs.",
    "click": "It asks you first, then it is saved right away. Songs that already use this name keep it. Only the choice for new songs disappears.",
    "care": "To change the artist of an old song, edit that song itself. You can add the same name again later.",
    "like": "Taking a name tag out of the drawer. Songs already wearing that tag keep wearing it."
  },
  "help.site.info": {
    "t": "Site info",
    "what": "This card holds the basic facts about your site: its name, the artist name, the main language, a short description, your country and the bottom text.",
    "when": "Fill it in once when you start. Come back when you want to rename your site or change how it introduces itself.",
    "click": "Nothing is saved while you type. Press [[Save site info]] at the bottom of the card to save everything in it at once. Your site changes right away, and aimusiclist.com gets the new name and description shortly after.",
    "care": "The other cards on this tab (SNS, play counts, likes, images …) save by themselves. Only this card needs the save button. If you leave the tab without pressing it, your typing is lost.",
    "like": "This is the shop's registration form: the sign above the door, a one-line introduction and where the shop is."
  },
  "help.site.name": {
    "t": "Site name",
    "what": "The name of your site, 1 to 40 characters. It is the big title on your site, and aimusiclist.com shows it under your song titles. People click it there to visit you.",
    "when": "Choose it when you start. Change it only when you really want a new name, because listeners learn to know you by it.",
    "click": "It is saved when you press [[Save site info]]. If your artist name was the same as the old site name, it changes to the new name too.",
    "care": "You can't use the name of a famous singer or group, or a name that looks like one. Saving is blocked if the name matches one we know. If one slips through and we find it, your site may be taken down from aimusiclist.",
    "like": "It is the shop sign. Customers in the big market (aimusiclist.com) read it to find their way to your shop."
  },
  "help.site.artist": {
    "t": "Artist name",
    "what": "The name of the person or group who makes the music on this site. It can be the same as the site name, or different.",
    "when": "Fill it in when your music name is not the same as your site name. For example, the site is My Music Room but you sing as Luna.",
    "click": "It is saved when you press [[Save site info]]. If it is different from the site name, visitors see it under the site name on your front page. aimusiclist.com also gets it in a minute or two.",
    "care": "Up to 40 characters. You can't use the name of a famous singer or group, or a name that looks like one. If you change the site name and this box still had the old site name, it changes together with it.",
    "like": "The shop sign shows the shop's name. This is the name tag of the musician working inside the shop."
  },
  "help.site.lang": {
    "t": "Main language of your site",
    "what": "The language your site uses when it can't tell which language a visitor wants. aimusiclist.com is told this language too.",
    "when": "Pick the language most of your listeners read, or the one you write your descriptions in.",
    "click": "It is saved when you press [[Save site info]]. Each visitor still sees your site in their own browser language if your site has it, or in the language they picked. Only when neither works do they see this one.",
    "care": "This does not change the language of this admin page. It also does not translate the song titles or descriptions you wrote.",
    "like": "It is the language on the shop's welcome sign. Guests who speak another language can still ask for a menu in their own words."
  },
  "help.site.desc": {
    "t": "Short description",
    "what": "A short introduction of you and your music, up to 200 characters. It appears on your site and is sent to aimusiclist.com with your site name.",
    "when": "Write one or two sentences about what kind of music you make. Change it whenever you like.",
    "click": "It is saved when you press [[Save site info]]. aimusiclist.com gets the new text shortly after. Leave it empty to show no description.",
    "care": "Keep it short and plain. Don't use the name of a famous singer to describe yourself, for example \"the new [famous name]\".",
    "like": "It is the small card taped under the shop sign that tells passers-by what you sell."
  },
  "help.site.footer": {
    "t": "Bottom text",
    "what": "One line of text at the very bottom of every page of your site, up to 200 characters. Text only — no pictures or links.",
    "when": "Use it for a short note such as a copyright line or a thank-you.",
    "click": "It is saved when you press [[Save site info]] and shows on your site right away. If you leave it empty, your site shows \"© this year + site name\". If you type {year}, it becomes this year's number by itself.",
    "care": "Line breaks are turned into spaces. The \"Powered by aimusiclist.com\" line next to it always stays; this box cannot remove it.",
    "like": "It is the small line printed at the bottom of the shop's receipt."
  },
  "help.site.save": {
    "t": "Save site info",
    "what": "Saves everything in the Site info card at once: names, language, description, country, bottom text and additional info.",
    "when": "Press it after you change anything in that card.",
    "click": "Your site shows the changes right away. aimusiclist.com gets the new name and description shortly after. If something is wrong, a red message appears next to the button and nothing is saved.",
    "care": "Saving is blocked if a name you changed matches a famous musician. Then choose another name and press again.",
    "like": "It is the stamp on the shop's registration form. Until you stamp it, the changes are only a draft."
  },
  "help.site.artists": {
    "t": "Other artists",
    "what": "A list of extra artist names you can pick for a song. If you pick nothing, a song uses your site name as its artist.",
    "when": "Use it when one site has songs by different names. For example, you also make songs as a duo, or as a side project.",
    "click": "Names you add here show up in the artist choice when you upload or edit a song or an album. The song's artist is shown on your site and on aimusiclist.com.",
    "care": "You can keep up to 20 names. When the list is full, the Add button turns grey. Famous singers' names can't be used.",
    "like": "One shop, but several name tags in the drawer. For each song, you pin on the name tag of whoever made it."
  },
  "help.site.artist_add": {
    "t": "Add",
    "what": "Puts the name you typed into the list of other artists.",
    "when": "Type a new artist name in the box on the left, then press it.",
    "click": "It is saved right away. From now on you can pick this name when you upload or edit songs.",
    "care": "Up to 60 characters. A name already in the list, or the same as your site name, is not added. Names of famous singers or groups are refused.",
    "like": "Making a new name tag and putting it in the drawer."
  },
  "help.site.account": {
    "t": "Admin account",
    "what": "The email and password you use to log in to this admin screen. The line on top shows the email you use now.",
    "when": "Use it to change your login email or your password.",
    "click": "Nothing changes until you fill in the boxes, type your current password, and press [[Save account]].",
    "care": "On a meshmelo site, the email can only be changed in your meshmelo account, so the email box is not shown here.",
    "like": "The key to the back door of your shop. Only you should have it."
  },
  "help.site.account_email": {
    "t": "New email (optional)",
    "what": "A new email address to log in with. Leave it empty to keep the one you have.",
    "when": "When you stop using your old email, or want to log in with another one.",
    "click": "It changes only after you type your current password and press [[Save account]]. Next time you log in, use the new email.",
    "care": "Check the spelling carefully. If the email is wrong, logging in gets hard. This box is not shown on meshmelo sites.",
    "like": "Changing the name written on your back-door key."
  },
  "help.site.account_pw": {
    "t": "New password (optional)",
    "what": "A new password for this admin screen. Leave it empty to keep your old password.",
    "when": "When you think someone else knows your password, or you just want a new one.",
    "click": "It changes after you type it again in the next box, add your current password, and press [[Save account]]. Other phones and computers are logged out. This one stays logged in.",
    "care": "At least 6 characters. Write it down somewhere safe. On a meshmelo site, your meshmelo account gets the same new password.",
    "like": "Changing the lock on the back door. Old copies of the key stop working."
  },
  "help.site.account_pw2": {
    "t": "New password again",
    "what": "Type the same new password one more time.",
    "when": "Whenever you fill in the new password box.",
    "click": "When you press [[Save account]], the two boxes are compared. If they are different, nothing is saved and you see a message.",
    "care": "This catches typing mistakes. If you can't remember what you typed, clear both boxes and type again slowly.",
    "like": "Trying the new key in the lock once before you go home."
  },
  "help.site.account_cur": {
    "t": "Current password (required to change)",
    "what": "The password you use now. It proves it's really you before the email or password changes.",
    "when": "Always type it when you change your email or password.",
    "click": "Typing here does nothing alone. It is checked when you press [[Save account]].",
    "care": "After 5 wrong tries, changes are blocked for 15 minutes. If you forgot it, open [[Forgot your password?]] below.",
    "like": "Showing your old key before the locksmith makes you a new one."
  },
  "help.site.account_save": {
    "t": "Save account",
    "what": "Saves the new email and/or new password you typed above.",
    "when": "After you filled in what you want to change and your current password.",
    "click": "It is saved right away. A new password logs out your other phones and computers, but not this one. If both new boxes are empty, nothing happens.",
    "care": "The usage key is not saved here. It has its own [[Save key]] button below.",
    "like": "Handing the new key to the locksmith and saying: okay, change the lock now."
  },
  "help.site.forgot": {
    "t": "Forgot your password?",
    "what": "Steps to get back into this admin screen when you can't remember your password. Press the title to open them.",
    "when": "When you can't log in, or when the current password box above keeps saying it's wrong.",
    "click": "Opening it changes nothing. It only shows the steps. The steps are different for each kind of site: in Cloudflare, in your hosting's file manager, or on meshmelo by email.",
    "care": "Follow the steps exactly and remove only what they say. Your songs, albums and aimusiclist.com link stay as they are.",
    "like": "A spare-key guide taped inside the shop for the day you lose your key."
  },
  "help.site.token_open": {
    "t": "Make it on Cloudflare",
    "what": "Opens the Cloudflare page where you make the usage key, in a new tab. Most boxes are already filled in for you.",
    "when": "Step 1 of making the key. Press it when you don't have a usage key yet.",
    "click": "Cloudflare opens [[Create Token]]. Log in if it asks. Nothing is saved here until you come back, paste the key and press [[Save key]].",
    "care": "Cloudflare shows the key only once. Press [[Copy]] right away. If the permission lines are empty, add the two lines shown in the steps.",
    "like": "Going to the key shop with a note that already says which key you need."
  },
  "help.site.token": {
    "t": "See usage (optional)",
    "what": "A place to save a usage key from Cloudflare. With it, this screen can show your Cloudflare free usage numbers at the top.",
    "when": "When you want to check how much of the free amount your site uses, like storage and plays.",
    "click": "Once a key is saved, the usage box at the top fills in right away. Saving the key does not log you out.",
    "care": "Make the key in the same Cloudflare account that holds your songs. A key from another account can't read the numbers. Without a key, your site still works fine. You just don't see the numbers.",
    "like": "A key to read the electricity meter. It lets you look at the numbers, nothing more."
  },
  "help.site.token_change": {
    "t": "Change",
    "what": "A key is already saved. Only its start and end are shown, so nobody can copy it. This button lets you put in a different key.",
    "when": "When the usage numbers stop showing, when you deleted the key in Cloudflare, or when your songs moved to another Cloudflare account.",
    "click": "The key box opens. The old key keeps working until you save a new one. Press [[Cancel]] to keep the old key.",
    "care": "If a red line says your song storage is in another account, make the new key in that new account.",
    "like": "Swapping the meter-reading key for a new one. Until you hand in the new key, the old one still works."
  },
  "help.site.token_input": {
    "t": "Usage key",
    "what": "The box where you paste the key you copied from Cloudflare. The letters are hidden as you paste.",
    "when": "Right after you made the key on Cloudflare and pressed [[Copy]].",
    "click": "Pasting alone saves nothing. Press [[Save key]] next to it.",
    "care": "Paste the whole key, with no spaces. This key can only read numbers and your account name. It can't change or delete anything, but still don't share it.",
    "like": "The slot where you put the meter-reading key."
  },
  "help.site.token_save": {
    "t": "Save key",
    "what": "Checks the key with Cloudflare and saves it.",
    "when": "After you pasted the usage key in the box.",
    "click": "It tests the key first. If it works, it is saved, and the usage numbers at the top show right away. You stay logged in. If something is wrong, a red message tells you what to fix.",
    "care": "If it says the key can't see your account list, a new box asks for your Cloudflare Account ID. Fill it in and press again. A key from another Cloudflare account is refused.",
    "like": "Trying the key in the meter box. If it turns, you keep it there."
  },
  "help.site.token_account_id": {
    "t": "Cloudflare Account ID (only if asked)",
    "what": "The number of your Cloudflare account, 32 letters and digits long. It appears only when the key can't find your account by itself.",
    "when": "When saving the key says it can't see your account list. That happens if the key has only one permission line instead of two.",
    "click": "Fill it in and press [[Save key]] again. If the number and the key match, the key is saved.",
    "care": "Use only 0–9 and a–f, exactly 32 characters. The easier fix is often to make the key again with [[Make it on Cloudflare]], so both lines are filled in.",
    "like": "Writing the house number on the meter key, because the key can't find the house alone."
  },
  "help.site.token_howto": {
    "t": "How to make the usage key (2 minutes)",
    "what": "Step-by-step help for making the usage key on Cloudflare. Press the title to open or close it.",
    "when": "The first time you make a key, or when the numbers at the top stopped showing.",
    "click": "Opening it changes nothing. It is open by itself until a key is saved, then it folds up.",
    "care": "The key needs two permission lines: Account Analytics Read and Account Settings Read. Cloudflare shows the key only once, so copy it right away.",
    "like": "A small map to the key shop, with the shop counter marked."
  },
  "help.site.mm_r2": {
    "t": "Song storage (R2)",
    "what": "Shows where your songs and pictures are kept: the storage name and your Cloudflare account number. This storage belongs to you, not to meshmelo.",
    "when": "Look here when you want to check which Cloudflare account and storage your site uses.",
    "click": "This card only shows information. To change it, use [[Change storage]].",
    "care": "Don't delete this storage in Cloudflare. Your songs would stop playing everywhere.",
    "like": "The address of your own warehouse, where every record of your shop is kept."
  },
  "help.site.mm_r2_change": {
    "t": "Change storage",
    "what": "Opens your meshmelo page in a new tab. There you can switch to another storage or another Cloudflare account.",
    "when": "When you move your songs to a new storage, or to a different Cloudflare account.",
    "click": "Only a new tab opens. Nothing changes until you finish the steps on the meshmelo page.",
    "care": "Moved to another Cloudflare account? Then also make a new usage key in that account and save it in the card below. The old key can't read the new account.",
    "like": "Calling the moving company to bring your records to a new warehouse."
  },
  "help.site.mm_card": {
    "t": "Your meshmelo site",
    "what": "Your site lives on meshmelo, but your songs and pictures are in your own storage. This card lets you take your site with you, or close it.",
    "when": "When you want a backup, when you move to your own hosting, or when you want to stop using meshmelo.",
    "click": "The card itself does nothing. Use [[Export my site]] to download a copy, or [[My meshmelo account]] to open your meshmelo page.",
    "like": "You rent a spot in a shopping mall, but the records in your warehouse are yours. You can pack up and move any time."
  },
  "help.site.mm_export": {
    "t": "Export my site",
    "what": "Downloads one zip file with your song list, albums, settings, skins and guestbook. Your sound files and pictures are not in it. They are already in your own storage.",
    "when": "To keep a backup now and then, or before you move your site to your own hosting.",
    "click": "The download starts right away. Nothing on your site changes.",
    "care": "Keep this file private. It holds your login details and the secret that connects your site to aimusiclist.com. You can export even if your site is paused.",
    "like": "A photocopy of your shop's whole notebook, so you can open the same shop somewhere else."
  },
  "help.site.mm_delete": {
    "t": "Delete my site",
    "what": "Closes your site on meshmelo for good: its pages, settings and song list are removed. Press the title to open the delete box.",
    "when": "Only when you really want to stop. If you are moving, press [[Export my site]] first.",
    "click": "Opening it changes nothing. To delete, you must type your site name and your password, then press the red button.",
    "care": "It can't be undone. Your songs leave aimusiclist.com right away. The files in your own storage are not touched. Your site name won't be given to anyone else.",
    "like": "Handing back the key to your rented shop. The records in your own warehouse stay yours."
  },
  "help.site.mm_delete_name": {
    "t": "Type your site name to confirm",
    "what": "Type your site name here, exactly as shown, to prove you really mean to delete.",
    "when": "Only when you are deleting your site.",
    "click": "Typing does nothing alone. It is checked when you press the red delete button.",
    "care": "It must match letter for letter. If it is different, nothing is deleted and you see a message.",
    "like": "Signing your name on the form that closes your shop."
  },
  "help.site.mm_delete_btn": {
    "t": "Delete my site",
    "what": "The last button that really deletes your meshmelo site.",
    "when": "After you typed your site name and your current password above it.",
    "click": "It asks once more. If you say yes, the site is deleted right away, you are logged out, and your meshmelo page opens.",
    "care": "It can't be undone. Export first if you may need anything later. After 5 wrong passwords, you must wait one hour.",
    "like": "Turning off the shop lights and locking the door for the last time."
  },
  "help.site.images": {
    "t": "Banner and profile image",
    "what": "Two pictures for your site: a wide banner at the very top, and a round profile picture.",
    "when": "Add them to make your site feel like yours. Change them whenever you like.",
    "click": "Each picture is saved right away after you choose it and press save in the picture window. There is no separate save button for this card.",
    "care": "You can choose a picture of up to 2 MB (JPG, PNG, WebP or GIF). Only the small finished picture is uploaded, not your original.",
    "like": "They are the shop's awning over the door and the owner's photo by the counter."
  },
  "help.site.banner": {
    "t": "Top banner",
    "what": "A wide picture shown above your site title. It can be up to 1600×400.",
    "when": "Use a wide, low picture, such as a landscape or your artwork stretched sideways.",
    "click": "Press [[Choose image]]. In the picture window you can move a frame to crop it, or shrink the whole picture and keep its shape. Press [[Save image]] and it shows on your site right away.",
    "care": "It is saved as a light picture of up to 300 KB. Tall pictures get cut a lot, so wide ones look best. If you don't add one, the banner space simply isn't shown.",
    "like": "It is the big painted awning over your shop window."
  },
  "help.site.image_choose": {
    "t": "Choose image",
    "what": "Opens your device's picture picker for the banner or the profile image.",
    "when": "Press it to add a picture for the first time, or to replace the one you have.",
    "click": "After you choose a picture, an editing window opens. Nothing changes until you press the save button in that window ([[Save image]] for the banner, [[Apply]] for the profile). Then the new picture replaces the old one right away.",
    "care": "Pick a JPG, PNG, WebP or GIF of 2 MB or less. Moving pictures (GIF) become still. Use Chrome, Edge or Firefox if your browser can't make the picture.",
    "like": "It is like taking a new photo out of your bag to put in the shop's frame."
  },
  "help.site.image_delete": {
    "t": "Remove",
    "what": "Takes the banner or the profile image off your site.",
    "when": "Use it when you would rather show no picture there.",
    "click": "You are asked once to make sure. If you say yes, the picture disappears from your site right away. A removed profile picture also disappears from aimusiclist.com shortly after.",
    "care": "This can't be undone. To show a picture again, choose it again with [[Choose image]]. You don't need to remove first to change a picture — just choose a new one.",
    "like": "It is like taking the photo out of the shop's frame and leaving the frame empty."
  },
  "help.site.profile": {
    "t": "Profile image",
    "what": "Your picture or logo, 400×400, shown as a circle. aimusiclist.com also shows it in \"New artists\" and next to your site.",
    "when": "Add a clear face or logo that people can recognize even when it is small.",
    "click": "Press [[Choose image]]. Drag the picture to place it, zoom or rotate it, then press [[Apply]]. It is saved right away. Your site also picks a matching background color from it. aimusiclist.com gets the new picture shortly after.",
    "care": "The corners are cut off by the circle, so keep the important part in the middle. It is saved as a light picture of up to 100 KB.",
    "like": "It is the owner's photo on the shop's business card, handed out in the big market too."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Lets you show Google ads on your site and earn money from them. You only type the numbers from your AdSense account. Your site makes the ad itself.",
    "when": "Use it after Google has accepted your site in AdSense.",
    "click": "Fill in the boxes, tick [[Show ads on my site]] and press [[Save AdSense]]. Ads never show on this admin page, only on your site.",
    "care": "Google approves only sites with their own address. If your site is still on a workers.dev address, connect your own domain first in the My domain tab. Don't paste ad code here — only the IDs.",
    "like": "It is like renting a small poster space in your shop window to an advertiser who pays you for it."
  },
  "help.site.ads_client": {
    "t": "Publisher ID (ca-pub-…)",
    "what": "Your own number in AdSense. It starts with ca-pub- and has 16 digits after it.",
    "when": "Find it in your AdSense account and copy it here. You need it before any ad can show.",
    "click": "It is saved when you press [[Save AdSense]]. It also makes your ads.txt page by itself.",
    "care": "Copy it exactly: ca-pub- and then 16 digits, nothing else. If it looks different, a red message appears and nothing is saved.",
    "like": "It is your account number at the advertising company, so they know whose shop window the poster is in."
  },
  "help.site.ads_top": {
    "t": "Top ad unit ID",
    "what": "The number of the ad space that shows near the top of your site, right under the banner.",
    "when": "Make an ad unit in your AdSense account, then copy its number here.",
    "click": "It is saved when you press [[Save AdSense]]. If you leave it empty, no ad shows at the top.",
    "care": "Numbers only, 6 to 20 digits. Don't paste the whole ad code.",
    "like": "It is the number of the poster frame hanging just under your shop's awning."
  },
  "help.site.ads_left": {
    "t": "Left ad unit ID (optional)",
    "what": "The number of a second ad space in the left column of your site.",
    "when": "Fill it in only if your skin has a left column, such as the dark skin.",
    "click": "It is saved when you press [[Save AdSense]]. If your skin has no left column, this ad simply doesn't show, even with a number here.",
    "care": "Numbers only, 6 to 20 digits. If you change to a skin without a left column later, this ad disappears by itself.",
    "like": "It is a second poster frame, but only shops with a side wall have room to hang it."
  },
  "help.site.ads_on": {
    "t": "Show ads on my site",
    "what": "The on/off switch for all ads on your site.",
    "when": "Tick it when your IDs are ready. Untick it to stop ads for a while without losing your IDs.",
    "click": "Nothing changes until you press [[Save AdSense]]. After saving, ads appear on your site within 30 seconds, or disappear if you unticked it.",
    "care": "It can't be turned on without a Publisher ID. Your IDs stay in the boxes while ads are off.",
    "like": "It is the light switch for the poster frames in your shop window."
  },
  "help.site.ads_save": {
    "t": "Save AdSense",
    "what": "Saves everything in the Google AdSense card: the three IDs and the on/off tick.",
    "when": "Press it after you change anything in that card.",
    "click": "The numbers are checked first. If one looks wrong, a red message appears and nothing is saved. If all is fine, ads appear on your site (or stop) within 30 seconds.",
    "care": "Ads may stay blank for a while even after saving. That is Google deciding, not your site. Check your AdSense account if they never appear.",
    "like": "It is handing the signed poster contract to the advertiser."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "A small page Google checks to be sure the ads on your site really belong to you. Your site makes it by itself from your Publisher ID.",
    "when": "You don't need to do anything. Open the link if AdSense asks you to check it.",
    "click": "The link opens that page in a new tab so you can see it. It shows one line with your Publisher ID. You can't edit it here — it follows the ID you saved.",
    "care": "If no Publisher ID is saved, the page is empty. After you change the ID, Google may take a while to notice.",
    "like": "It is the permit taped inside your shop window that proves the posters are allowed there."
  },
  "help.site.country": {
    "t": "Country you're active in",
    "what": "The country where you make music. aimusiclist.com uses it to put you in that country's Artists ranking.",
    "when": "Choose it if you want to appear in your country's ranking as well. It is optional.",
    "click": "It is saved when you press [[Save site info]]. If you leave it on — Not set —, you appear only in the Global ranking.",
    "care": "Pick only one country, the one you really work in. You can change it later.",
    "like": "It is the country flag on your stall in the big market (aimusiclist.com), so visitors from home can find you."
  },
  "help.site.fields": {
    "t": "Additional fields (from aimusiclist.com)",
    "what": "Shows which list of extra boxes (for example Mood) your site got from aimusiclist.com. Those boxes appear under \"Additional info\" when you upload or edit songs, and in Site info.",
    "when": "Look here when you wonder why a new box appeared, or why one you expected is missing.",
    "click": "This card only shows the state. The line tells you the list version, how many boxes there are and when it was last checked. Your site checks once a day by itself, so you don't need to do anything.",
    "care": "If getting a new list fails, a red message shows the reason. Your site keeps using the last good list, and uploads still work as usual.",
    "like": "It is the order form the big market (aimusiclist.com) sends to every shop, saying which labels to put on the records."
  },
  "help.site.fields_update": {
    "t": "Update fields",
    "what": "Asks aimusiclist.com for the newest list of extra boxes right now, instead of waiting for the daily check.",
    "when": "Press it when aimusiclist.com announced a new box and you want it today.",
    "click": "A short message tells you the result: updated (with the new version), already up to date, or why it failed. If the list changed, the screen redraws so the new boxes appear.",
    "care": "You can press it once a minute. If you press again too soon, you are told how many seconds to wait. Your answers in old boxes are never lost.",
    "like": "It is calling the big market to ask, \"Is there a new order form?\" instead of waiting for the morning mail."
  },
  "help.site.sns": {
    "t": "SNS",
    "what": "Your social media addresses. The first five boxes are fixed: YouTube, Instagram, TikTok, Facebook and X.",
    "when": "Add the places where you post your music or talk with fans. Leave a box empty if you don't use that one.",
    "click": "Type the full address starting with https:// and click outside the box. It saves by itself. Visitors find all of them on your site's \"Links\" page. aimusiclist.com shows small icons next to your songs. Empty a box to remove it.",
    "care": "The address must belong to that SNS. For example, the YouTube box only takes a YouTube address. Up to 200 characters. A wrong address turns red and is not saved — the last good one stays.",
    "like": "It is the little board next to the shop door: \"You can also find us here.\""
  },
  "help.site.sns_tools": {
    "t": "Up · Down · Remove",
    "what": "Buttons on each \"Other SNS\" row. [[Up]] and [[Down]] change the order. [[Remove]] takes the row away.",
    "when": "Use them to put your most important SNS first, or to drop one you no longer use.",
    "click": "The change is saved right away, and your \"Links\" page shows the new order. [[Remove]] deletes the row at once, with no question first.",
    "care": "A removed address is gone. To bring it back, add a row again and type the address. The five fixed boxes can't be moved; they always come first.",
    "like": "It is like moving the notes around on the board by the door, or peeling one off."
  },
  "help.site.sns_more": {
    "t": "Other SNS",
    "what": "Room for up to 5 more SNS that are not in the five fixed boxes, such as SoundCloud, Spotify, Threads or Discord.",
    "when": "Use it when you are active on a service beyond the big five.",
    "click": "In each row, first choose the service from the list, then type its address. It saves by itself when you click outside the box. These appear on your \"Links\" page in this order. On aimusiclist.com they all share one 🔗 icon.",
    "care": "Each service can be chosen only once. The address box stays locked until you choose a service. Changing the service in a row clears its saved address, so type it again.",
    "like": "It is the extra space on the board by the door, for the smaller places where people can find you."
  },
  "help.site.sns_add": {
    "t": "+ Add other SNS",
    "what": "Adds one empty row under \"Other SNS\".",
    "when": "Press it when you want to add a service that is not in the five fixed boxes.",
    "click": "A new row appears with the service list ready to choose. Nothing is saved until you choose a service and type its address. When you already have 5 rows, the button turns grey.",
    "care": "An empty row you leave behind is simply not saved. It disappears the next time the page opens.",
    "like": "It is like pinning a blank note to the board by the door, ready to write on."
  },
  "help.site.sns_view": {
    "t": "See the Links page",
    "what": "Opens your site's \"Links\" page, the page where visitors see all your SNS.",
    "when": "Use it to check how your SNS list looks to visitors.",
    "click": "The page opens in a new tab. Nothing changes here. This button shows only after at least one SNS address is saved.",
    "like": "It is like stepping outside to look at the board by the door the way customers see it."
  },
  "help.guestbook.title": {
    "t": "Guestbook",
    "what": "A place on your site where visitors leave short messages for you. They can write about the whole site or about one song.",
    "when": "When you want to hear from your listeners, or check and clean up their messages.",
    "click": "This is only a title. Use [[Open the guestbook]] to turn it on or off, and the message list below to read and delete.",
    "like": "Like a notebook at your shop door where guests write a few kind words."
  },
  "help.guestbook.on": {
    "t": "Open the guestbook",
    "what": "Turns the guestbook on or off for visitors. When it is on, they see **Guestbook** in your menu and a 💬 button on each song.",
    "when": "Turn it on to hear from listeners. Turn it off if you are getting too many unwanted messages or need a break.",
    "click": "It is saved right away. Visitors see the change within about 30 seconds. You can switch it back any time.",
    "care": "Turning it off only hides it. Old messages are kept, and you can still read and delete them here.",
    "like": "Like putting the notebook at your shop door out, or taking it inside for a while."
  },
  "help.guestbook.list": {
    "t": "Messages",
    "what": "All guestbook messages, newest first, 20 per page. Each shows the name, the time, and the song it is about (♪). The number next to the title is the total.",
    "when": "Check it now and then to read new messages and remove bad ones.",
    "click": "Use the page buttons at the bottom to see older messages. You cannot edit or answer a message here, only delete it.",
    "care": "Visitors can write a name up to 20 and a message up to 500 characters, with no links, and up to 50 messages a day per person. Messages stay until you delete them, even while the guestbook is off. **Deleted song** means that song was removed.",
    "like": "Like flipping through the notebook at your shop door, newest page first."
  },
  "help.guestbook.delete": {
    "t": "Delete",
    "what": "Removes one guestbook message.",
    "when": "For rude messages, spam, or anything you do not want visitors to read.",
    "click": "You are asked to confirm. Then the message is gone from your site at once, and the list updates.",
    "care": "This cannot be undone. Deleting a message does not stop that person from writing again.",
    "like": "Like tearing one page out of the notebook at your shop door."
  },
  "help.domain.mm": {
    "t": "My domain",
    "what": "Shows your site's address now. Your site lives on meshmelo, so your own domain is connected in the meshmelo portal, not here.",
    "when": "When you want to check your address, or want to use your own domain like mymusic.com.",
    "click": "Nothing to press here. Go to my.meshmelo.com → My site → My domain. If you do not see it yet, it is coming soon.",
    "care": "Your current address keeps working, so you can share it now without worry.",
    "like": "Like renting a shop in a big mall: the mall office handles your new street sign."
  },
  "help.domain.title": {
    "t": "My domain",
    "what": "Shows your site's address now, and lets you use your own address (a domain) like mymusic.com instead of the long free one.",
    "when": "When you have bought a domain, or want a short address that is easy to remember. Google AdSense also asks for your own domain.",
    "click": "This is only a title. Follow the guide below, then type your domain and press [[Connect]]. When connected, you see a ✓ and your domain.",
    "care": "If the screen says the address is set in Cloudflare settings, it cannot be changed here and the box is grayed out.",
    "like": "Like moving your shop sign from a long side-street number to an easy main-street address."
  },
  "help.domain.guide": {
    "t": "How to connect your own domain",
    "what": "Step-by-step help for getting a domain and pointing it to your site. It takes about 10 minutes.",
    "when": "Read it before you press [[Connect]]. The steps on the Cloudflare screens must be done first.",
    "click": "Press the title to open or close the steps. It is open until your domain is connected.",
    "care": "You pay for the domain yourself. Cloudflare may rename its screens, so look for the closest name. If you run the hosting version of the site, the steps are for your hosting control panel instead.",
    "like": "Like a map that shows how to hang your shop sign at the new address."
  },
  "help.domain.input": {
    "t": "My domain (box)",
    "what": "Type the domain you bought, like mymusic.com.",
    "when": "After you finished the steps in the guide and your site already opens at that domain.",
    "click": "Nothing happens until you press [[Connect]].",
    "care": "Type only the domain. Do not add http://, https:// or a / with more words after it. To move to a different domain later, type the new one and connect again.",
    "like": "Like writing the new street address on your shop sign."
  },
  "help.domain.connect": {
    "t": "Connect",
    "what": "Checks that your site really opens at the domain you typed, then makes it your site's main address.",
    "when": "After you typed your domain in the box.",
    "click": "Checking can take up to 30 seconds. If it works, your domain is saved and aimusiclist.com changes your address by itself. Visitors who open the old free address are sent to your domain. On the hosting version, the old address simply keeps working too.",
    "care": "If you see an error, your site does not open at that domain yet, or it opens a different site. Check the guide steps, wait a few minutes, and try again. Songs already in people's playlists keep playing.",
    "like": "Like the post office checking your new shop address before it forwards your mail there."
  },
  "help.menus.form": {
    "t": "Add menu / Edit menu",
    "what": "Here you make the menu buttons visitors see at the top of your site. Each menu shows the songs of one genre.",
    "when": "Use it when you want visitors to find your songs by style, for example an R&B menu and a Hip-hop menu.",
    "click": "Choose 1. a main genre, 2. a detailed genre if you want, 3. a name if you want, then press [[Save menu]]. The number next to the button shows how many songs on your site will be in that menu.",
    "care": "Genres come from the aimusiclist.com list, so your menus match the big site. You can have up to 30 menus, and only one menu per genre.",
    "like": "It is like putting up shelf labels in your shop: 'R&B here', 'Hip-hop there'."
  },
  "help.menus.main": {
    "t": "1. Main genre",
    "what": "The big genre of this menu, like R&B, Hip-hop or Dance. The list is the same as on aimusiclist.com.",
    "when": "Always choose this first. A menu can't be saved without it.",
    "click": "After you choose, the detailed genre list opens with the genres under it, and you see how many of your songs fit.",
    "care": "If you choose only a main genre, the menu shows songs that have that exact genre in one of their three genre boxes.",
    "like": "It is the big sign over an aisle in your shop, like 'R&B'."
  },
  "help.menus.sub": {
    "t": "2. Detailed genre",
    "what": "A smaller genre inside the main genre, to make the menu narrower. It is optional.",
    "when": "Use it when you have many songs in one main genre and want a menu for just one style of it.",
    "click": "The list shows only the detailed genres of the main genre you chose. Leave it on 'All of …' to use the main genre. The song count next to [[Save menu]] changes right away.",
    "care": "It is grey until you choose a main genre. With a detailed genre, the menu shows only songs that have that detailed genre in one of their genre boxes.",
    "like": "It is a small label on one shelf inside the aisle."
  },
  "help.menus.label": {
    "t": "3. Menu name",
    "what": "The word visitors see on the menu button. It is optional.",
    "when": "Write your own name if you want something friendlier, like 'Night Songs'. Leave it empty to use the genre name.",
    "click": "It is saved when you press [[Save menu]]. If it is empty, the button shows the genre name, and that name changes with the visitor's language.",
    "care": "Up to 30 characters. A name you write is shown the same way in every language.",
    "like": "It is the words you write on the shelf label yourself."
  },
  "help.menus.save": {
    "t": "Save menu",
    "what": "Saves the menu you set up above.",
    "when": "Press it after you choose the genre (and a name if you want).",
    "click": "It is saved right away. A new menu goes to the end of the list. Visitors see it on your site within 30 seconds.",
    "care": "You can't make two menus for the same genre. When you already have 30 menus, you can't add more. A red message tells you why.",
    "like": "You stick the finished label on the shelf."
  },
  "help.menus.order": {
    "t": "Up / Down",
    "what": "Moves a menu one place earlier or later in the row of menus.",
    "when": "Use it to put your most important menu first.",
    "click": "It is saved right away. Visitors see the new order within 30 seconds.",
    "care": "The first menu can't go up, and the last one can't go down, so those buttons are grey.",
    "like": "You swap two shelf labels so the popular shelf comes first."
  },
  "help.menus.edit": {
    "t": "Edit",
    "what": "Opens this menu in the box above so you can change its genre or name.",
    "when": "Use it to rename a menu or point it to a different genre.",
    "click": "The page goes up to the box, filled with this menu. Change it and press [[Save menu]]; it keeps its place in the list. [[Cancel]] closes without changes.",
    "like": "You take a shelf label down, rewrite it, and put it back in the same spot."
  },
  "help.menus.delete": {
    "t": "Delete",
    "what": "Removes this menu from your site.",
    "when": "Use it when you don't need the menu anymore.",
    "click": "It asks you first. Then the menu is removed right away, and visitors stop seeing it within 30 seconds.",
    "care": "Only the menu goes away. The songs stay on your site and can still be found on Home or in other menus. You can't undo it, but you can make the menu again.",
    "like": "You take a label off the shelf. The records on the shelf stay where they are."
  },
  "help.menus.list": {
    "t": "Menus on your site",
    "what": "All your menus, in the order visitors see them at the top of your site. The number in brackets shows how many you have out of 30.",
    "when": "Look here to check, reorder, change or delete menus.",
    "click": "Each row shows the menu name, its genre and how many songs are in it. Visitors always also see 'Home' first, and 'Albums' if you have albums.",
    "care": "'Genre not in the list' means aimusiclist.com no longer has that genre. Press [[Edit]] and choose another genre. A menu with 0 songs is still shown to visitors, but empty.",
    "like": "It is the row of shelf labels in your shop, from left to right."
  },
  "help.tab.menus": {
    "t": "Menus",
    "what": "The menu of your site. Each menu shows the songs of one genre, chosen from aimusiclist.com's genre list.",
    "when": "Come here to decide what visitors see in your site's menu, and in what order.",
    "click": "Pressing the tab only switches the view. Adding, editing, moving or deleting a menu saves right away.",
    "care": "Up to 30 menus. First pick a main genre, then a sub-genre if you like, then a name (up to 30 characters, optional). Using aimusiclist.com's genres keeps your site and aimusiclist.com sorted the same way.",
    "like": "It is the shelf labels in your shop: 'R&B here, Hip-hop there.'"
  },
  "help.stats.title": {
    "t": "Site stats",
    "what": "This tab shows how many people came to your site and how many songs they played. You also see your numbers from aimusiclist.com here.",
    "when": "Open it once a day or once a week. You can see which songs people like and whether your site is growing.",
    "click": "Nothing changes on your site when you look. Pick a period at the top, and every card below shows that period.",
    "care": "Most numbers are counted **once a day** (early in the morning, UTC time). A song you uploaded today shows up in the numbers from tomorrow.",
    "like": "It is like the notebook of a shop owner. Each morning you write down how many guests came in and which songs they listened to."
  },
  "help.stats.period": {
    "t": "Period (7 / 30 / 90 days)",
    "what": "These buttons choose how many days the numbers add up. You can pick 7 days, 30 days or 90 days.",
    "when": "Pick 7 days to see what happened this week. Pick 90 days to see the big picture over about three months.",
    "click": "The numbers, graphs and tables on this tab change right away. The colored button is the one in use. Nothing is saved or sent anywhere.",
    "care": "The period ends **yesterday** (UTC). Today is shown on its own in the small **Today** line of each tile. The **vs the days before** arrow compares with the same number of days just before.",
    "like": "It is like choosing how many pages of your shop notebook you read at once: one week, one month, or three months."
  },
  "help.stats.note.off": {
    "t": "Plays on my site aren't counted",
    "what": "On this kind of hosting, plays on your own site can't be counted yet. So your site's **Popular** order uses aimusiclist plays instead.",
    "when": "This shows up by itself. You don't need to do anything if you are happy with aimusiclist numbers.",
    "click": "Read the message. If it names a setup step (like connecting the audio Worker), doing that step turns counting on. After that, numbers start from the next day.",
    "care": "Numbers from before counting was turned on can't be filled in later.",
    "like": "It is like a shop without a door counter. You can't know how many guests came in, so you look at the big market's numbers instead."
  },
  "help.stats.note.dataset": {
    "t": "Stats recording is off",
    "what": "Your site is not writing down visits and plays yet. Counting must be turned on once in your Cloudflare account.",
    "when": "Do it once, when you want to see your own site's numbers.",
    "click": "Follow the steps in the message: make the stats storage in Cloudflare with the exact name shown. Then, on the GitHub page of your site, delete the \"# \" mark at the start of the three lines the message shows and press [[Commit changes]]. Your site updates in 1–3 minutes. Numbers appear from the next daily count.",
    "care": "The name must be exactly **aml_site_stats**. If you skip the Cloudflare step and only change the three lines, the site update fails. Then put the \"# \" back.",
    "like": "It is like installing a guest counter at your shop door. Until it is installed, nobody is counted."
  },
  "help.stats.note.token": {
    "t": "Usage key is missing",
    "what": "To read your own numbers, your site needs a usage key from Cloudflare. It is not there yet.",
    "when": "Add it once. The same key also shows your free plan room at the top of the admin screen.",
    "click": "Go to the **Site info** tab and paste the key there. The key needs the permission shown in the message. Your numbers appear from the next daily count.",
    "care": "Make the key in the **same Cloudflare account** as this site. Keep the key secret. Don't post it anywhere.",
    "like": "It is like a key to the meter room. Without the key, you can't read the meter, even if it is counting."
  },
  "help.stats.note.no_visits": {
    "t": "Visits aren't counted",
    "what": "On this hosting, pages are sent as ready-made files. So visits can't be counted, but plays are.",
    "when": "This shows up by itself. It is normal for this hosting.",
    "click": "Nothing to press. The **Visits** tile and graph are hidden. Countries, devices and languages are counted by plays instead.",
    "like": "It is like a shop that can't count people walking in, but can count every song put on the record player."
  },
  "help.stats.note.error": {
    "t": "Couldn't read the stats",
    "what": "The last count did not work. The reason is written in the message.",
    "when": "This shows up by itself when something went wrong.",
    "click": "If it says **Showing the last saved numbers**, you see the last good numbers. Usually the next daily count fixes it. If the same message stays for days, check the usage key in **Site info**.",
    "care": "Missing days are not lost if counting comes back soon. Very old days may not come back.",
    "like": "It is like a morning when the meter reader couldn't come. Yesterday's reading stays on the board until the next visit."
  },
  "help.stats.updated": {
    "t": "When the numbers were made",
    "what": "This line tells you when the numbers were last counted. It also says the numbers are close, not exact.",
    "when": "Look here when a number seems old. If the time is from yesterday, the next count has not happened yet.",
    "care": "Numbers are counted once a day, a little after 00:00 UTC. Each site gets its own minute, shown here. **Bots** (robot programs) and **your own visits** while you are signed in are left out, so the numbers are a bit smaller than all the clicks.",
    "like": "It is like the date printed on a receipt. It tells you when the counting was done."
  },
  "help.stats.csv.days": {
    "t": "Download daily CSV",
    "what": "This saves a file with one row for each day of the chosen period: visits, plays, plays from aimusiclist, guestbook posts, and aimusiclist numbers.",
    "when": "Use it to keep your numbers, or to make your own charts in a spreadsheet like Excel or Google Sheets.",
    "click": "The file is made right here in your browser and saved to your downloads. Nothing on your site changes.",
    "care": "Days are in UTC. Choose the period first (7, 30 or 90 days), because the file follows it.",
    "like": "It is like photocopying pages of your shop notebook to keep at home."
  },
  "help.stats.csv.tracks": {
    "t": "Download songs CSV",
    "what": "This saves a file with one row for each song: rank, rank change, plays, plays from aimusiclist, and aimusiclist numbers and ranks.",
    "when": "Use it to compare songs in a spreadsheet, or to keep a record of how each song did.",
    "click": "The file is made right here in your browser and saved to your downloads. Nothing on your site changes.",
    "care": "Plays follow the period you chose. aimusiclist numbers are always the last 7 days. Empty cells mean there is no number.",
    "like": "It is like copying the best-seller list from your shop wall into your own notebook."
  },
  "help.stats.refresh": {
    "t": "Refresh now",
    "what": "This button counts your own site's visits and plays again right away, including today.",
    "when": "Use it when you just shared a song and want to see if people are coming. Without it, the numbers change only once a day.",
    "click": "After a few seconds the numbers on this tab change. The play counts in your song list and on your site change too. Then the button waits **1 minute** before you can press it again.",
    "care": "There is a daily limit: **200 times** a day for a site you installed yourself, **30 times** a day on meshmelo. aimusiclist numbers do not change with this button. They still come once a day. If you don't see this button, your hosting can't count it right now.",
    "like": "It is like checking the electricity meter yourself in the middle of the day, instead of waiting for the next morning's reading."
  },
  "help.stats.tile.visits": {
    "t": "Visits",
    "what": "How many times people opened your site in the chosen period. It is shown as **about** a number, because it is close, not exact.",
    "when": "Look at it to see if your sharing on social media brings people in.",
    "click": "Under the big number you see an arrow: up (▲) is more than the days before, down (▼) is fewer. **Today** shows today's number after [[Refresh now]], or – if not counted yet.",
    "care": "Bigger is better. Bots and your own visits are left out. If it suddenly jumps very high in one day, check **Where visitors came from** below to see why.",
    "like": "It is the number of guests who walked through your shop door."
  },
  "help.stats.tile.plays": {
    "t": "Plays started",
    "what": "How many times a song started playing from the beginning on your site in the chosen period.",
    "when": "This is the most important number for your music. Watch it after you upload a new song.",
    "click": "The arrow compares with the days before. **Today** shows today's number after [[Refresh now]].",
    "care": "Bigger is better. One play is counted when the song **starts**, even if the listener stops early. Your own plays while signed in are not counted. If it is 0 for many days, check the notices at the top of this card.",
    "like": "It is how many times a record was put on the record player in your shop."
  },
  "help.stats.tile.plays_aml": {
    "t": "Plays from aimusiclist",
    "what": "Songs played on aimusiclist.com are sent from your own site. This number counts those plays.",
    "when": "Look at it to see how much the big market helps your music get heard.",
    "click": "Nothing changes when you look. The arrow compares with the days before.",
    "care": "Bigger is better. These plays are **not** used for your site's **Popular** order. aimusiclist has its own chart for them. This number can be a little different from the aimusiclist card below, because the two places count in different ways.",
    "like": "Your records are played at a stall in the big market, but the music comes out of your own warehouse. This counts how often that happened."
  },
  "help.stats.tile.gb": {
    "t": "Guestbook posts",
    "what": "How many new posts people wrote in your guestbook in the chosen period.",
    "when": "Look at it to see how many fans talk to you.",
    "click": "Nothing changes when you look. The arrow compares with the days before.",
    "care": "Bigger usually means more fans. Your own posts are not counted. If it jumps very high, check the guestbook for spam (junk posts).",
    "like": "It is how many notes people left in the visitors' guestbook by your shop door."
  },
  "help.stats.trend": {
    "t": "Per-day graph",
    "what": "Each bar is one day. A taller bar means more plays (or visits) that day.",
    "when": "Use it to find good days. For example, the day you shared a song on social media.",
    "click": "Put your mouse on a bar (or tap it) to see the date and the number. The left side shows the scale.",
    "care": "Days are in UTC time, so a day may start in the morning or evening where you live. An empty spot means 0 or not counted that day.",
    "like": "It is like a row of stacked coins, one stack for each day. Taller stacks are busier days."
  },
  "help.stats.table_view": {
    "t": "Show as a table",
    "what": "This opens the same numbers as a table: one row for each day, newest day first.",
    "when": "Use it when you want the exact number for a day, or when a graph is hard to read.",
    "click": "Press it to open or close the table. Nothing is saved.",
    "care": "Only the chosen period is shown. To keep the numbers, use [[Download daily CSV]] at the bottom.",
    "like": "It is the same shop notebook, but with the pictures turned into plain lines of numbers."
  },
  "help.stats.col.date": {
    "t": "Date (UTC)",
    "what": "The day each row counts. Days follow **UTC**, world standard time.",
    "when": "Use it to match a day with something you did, like sharing a song.",
    "care": "UTC is not your local time. In Korea, a UTC day starts at 9 a.m. So a song shared late at night may count on the next or previous day.",
    "like": "It is like a shop notebook that always uses one world clock, so every shop in the big market writes the same date."
  },
  "help.stats.col.rank": {
    "t": "Rank",
    "what": "The song's place in your site's **Popular** order. Next to it you may see how it moved since the day before.",
    "when": "Look at it to find your top songs.",
    "click": "Nothing to press. ▲ means it went up that many places, ▼ means down, – means no change. **NEW** is a new entry. **RE** means it came back after leaving the list.",
    "care": "A smaller number is better (1 is the top). – means the song has no rank because nobody played it in the last 7 days.",
    "like": "It is the number on the best-seller list in your shop window."
  },
  "help.stats.col.plays": {
    "t": "Plays (chosen days)",
    "what": "How many times this song started playing on your site in the chosen period.",
    "when": "Use it to compare songs with each other.",
    "care": "Bigger is better. Plays that came through aimusiclist are in the next column, not here. If a new song shows 0, wait for the next daily count.",
    "like": "It is how many times this one record was put on your shop's record player."
  },
  "help.stats.col.plays_aml": {
    "t": "From aimusiclist",
    "what": "How many times this song was played on aimusiclist.com in the chosen period, sent from your site.",
    "when": "Use it to see which songs people find in the big market.",
    "care": "Bigger is better. These plays don't change your site's Popular order. It can be a bit different from **aimusiclist plays (7 days)**, because the two places count in different ways.",
    "like": "It is how many times this record left your warehouse to be played at the big market."
  },
  "help.stats.col.likes": {
    "t": "Likes ♥",
    "what": "How many ♥ likes this song got on your own site, from the very beginning until now.",
    "when": "Use it to see which songs your fans love the most.",
    "care": "This is the **total of all time**, not the chosen period. It is counted once a day. Likes on aimusiclist are counted separately, in the aimusiclist card.",
    "like": "It is like counting the hearts fans drew on a song's card in your shop."
  },
  "help.stats.col.aml_plays7": {
    "t": "aimusiclist plays (7 days)",
    "what": "How many times this song was played on aimusiclist.com in the last 7 days, as aimusiclist counted it.",
    "when": "Use it to see how your song is doing in the big market this week.",
    "care": "It is always **7 days**, whatever period you chose. The number comes once a day. Bigger is better.",
    "like": "It is the big market's own note of how often your record was played there this week."
  },
  "help.stats.col.aml_valid7": {
    "t": "Valid plays (7 days)",
    "what": "Plays on aimusiclist in the last 7 days where people listened for **30 seconds or more**.",
    "when": "Use it to see real listening. A quick skip is not a valid play.",
    "care": "Bigger is better. It is always a bit smaller than all plays. If it is much smaller, people may skip early. Try a stronger song start or a better cover. aimusiclist uses valid plays to make its fair chart.",
    "like": "It is the guests who stayed at your stall long enough to really hear the song, not the ones who just walked past."
  },
  "help.stats.col.chart": {
    "t": "Chart rank",
    "what": "The song's place on the aimusiclist weekly chart (the Top 100 list). Next to it you see how it moved since the last chart.",
    "when": "Look at it to know if your song made it onto the big chart.",
    "care": "A smaller number is better. **NEW** means it just entered. – means it is not on the chart right now. That is normal for most songs.",
    "like": "It is your record's place on the big market's main best-seller board."
  },
  "help.stats.col.genre_rank": {
    "t": "Genre rank",
    "what": "The song's place on the aimusiclist chart for its own genre (like R&B or Hip-hop).",
    "when": "Use it to see how your song does among songs of the same style.",
    "care": "A smaller number is better. A genre chart is smaller than the main chart, so it is easier to get a rank here. – means no genre rank yet.",
    "like": "It is your place on one shelf of the big market, for example only the R&B shelf."
  },
  "help.stats.col.all_rank": {
    "t": "All songs rank",
    "what": "The song's place among **every song** people listened to on aimusiclist this week (Friday to Thursday). Below it you see the best rank it ever had.",
    "when": "Use it even when your song is not in the Top 100. You can still see it climbing.",
    "click": "Nothing to press. ▲ and a number show how many places it rose since last week. ▼ shows how many it fell.",
    "care": "A smaller number is better. It changes **every Friday**. A song nobody listened to this week shows –.",
    "like": "Even if your record is not on the main board, you can still see its number in the big market's full list."
  },
  "help.stats.tracks": {
    "t": "Popular songs",
    "what": "A table of your songs with their play numbers and ranks. It shows up to 100 songs, best rank first.",
    "when": "Use it to see which song is your hit right now, and which songs need more love.",
    "click": "Nothing changes when you look. The **Plays** column follows the period you chose at the top. The aimusiclist columns always show the last 7 days.",
    "care": "The rank here is the same order as the **Popular** button on your site. It changes once a day. aimusiclist columns appear only when aimusiclist.com sends your numbers.",
    "like": "It is the best-seller list you hang on your shop wall."
  },
  "help.stats.rank_basis": {
    "t": "How the Popular order is made",
    "what": "This line says what decides your site's **Popular** order. It is either plays on your site, or aimusiclist plays if your site can't count.",
    "when": "Read it when you wonder why a song is above another one.",
    "care": "Only the **last 7 days** count, and only songs that were played get a rank (up to 100). If two songs tie, aimusiclist valid plays and then the newer upload come first. Plays that came through aimusiclist are not used here.",
    "like": "It is the rule card next to the best-seller list, telling everyone how the list is made."
  },
  "help.stats.albums": {
    "t": "Albums",
    "what": "A table of your albums. Each row adds up the plays of all songs in that album.",
    "when": "Use it to see which album people listen to most.",
    "care": "The table is sorted with the most played album first. A song that is in two albums counts in both.",
    "like": "It is like counting sales by box set instead of by single record."
  },
  "help.stats.album.plays": {
    "t": "Album plays (chosen days)",
    "what": "All plays of this album's songs in the chosen period. It adds plays on your site **and** plays that came through aimusiclist.",
    "when": "Use it to compare albums.",
    "care": "Bigger is better. An album with many songs can look big just because it has more songs. Look at the **Songs** column too.",
    "like": "It is the total of every record in one box set that was played, at your shop and at the big market stall."
  },
  "help.stats.album.aml_plays7": {
    "t": "Album aimusiclist plays (7 days)",
    "what": "All aimusiclist plays of this album's songs in the last 7 days, as aimusiclist counted them.",
    "when": "Use it to see which album is popular in the big market this week.",
    "care": "It is always **7 days**, whatever period you chose. Bigger is better.",
    "like": "It is the big market's own count for your whole box set this week."
  },
  "help.stats.listeners": {
    "t": "Listeners (by plays)",
    "what": "This card shows who plays your songs: their country, device, language and time of day.",
    "when": "Use it to decide where to share your music, and in which language to write.",
    "care": "Your hosting can't count visits, so this card is made from **plays**, not visits. No personal information is kept. The % is the share inside the list you see.",
    "like": "It is like noticing which towns the people who put your records on come from."
  },
  "help.stats.countries": {
    "t": "Countries",
    "what": "The countries your listeners or visitors come from. The top 10 are shown, biggest first.",
    "when": "Use it to choose languages for song titles or to plan sharing in a certain country.",
    "care": "**Unknown** means the country could not be found. A small % of unknown is normal.",
    "like": "It is like pins on a world map in your shop, one for each guest's home country."
  },
  "help.stats.devices": {
    "t": "Devices",
    "what": "What people used to open your site: phone, tablet or computer.",
    "when": "Use it when you choose a skin (site design). If most people use phones, check how your site looks on a phone.",
    "care": "Devices that can't be told apart are not shown.",
    "like": "It is like noticing whether guests came on foot, by bike or by car."
  },
  "help.stats.langs": {
    "t": "Languages",
    "what": "The language set on your visitors' phones or computers. The top 10 are shown.",
    "when": "Use it to decide which languages to write your site texts and song titles in.",
    "care": "This is the language of their device, not always the language they speak best. **Unknown** means the device didn't tell.",
    "like": "It is like hearing which languages your guests speak when they walk in."
  },
  "help.stats.audience": {
    "t": "Audience",
    "what": "This card shows who your visitors are: their country, where they came from, their device, their language, and the time of day.",
    "when": "Use it to decide where to share your music, and in which language to write.",
    "click": "Nothing changes when you look. Each list follows the period you chose.",
    "care": "No personal information is kept. Only big groups are counted, like \"Korea\" or \"Phone\". The % is the share inside the list you see.",
    "like": "It is like a shop owner noticing \"many guests today came from the next town, on foot, in the evening\"."
  },
  "help.stats.refs": {
    "t": "Where visitors came from",
    "what": "How people found your site, in big groups: typed the address or bookmark, search, social and music apps, aimusiclist.com, other sites, and moves inside your site.",
    "when": "Use it to see which way of sharing works best for you.",
    "care": "**Direct / bookmark** also includes links opened from chat apps that don't tell where they came from. **Inside your site** means moving from one page of your site to another.",
    "like": "It is like asking each guest at the door \"How did you hear about my shop?\""
  },
  "help.stats.domains": {
    "t": "Top referring sites",
    "what": "The names of the websites that sent the most visitors to your site. Up to 10 are shown.",
    "when": "Use it to find out which post or page is bringing people. Then you can thank them or share there again.",
    "care": "Only the site name is shown, not the exact page. Visits from inside your own site are not in this list.",
    "like": "It is like a list of the neighbor shops whose signs point the way to your shop."
  },
  "help.stats.hours": {
    "t": "Time of day",
    "what": "Each bar is one hour of the day (0:00 to 23:00). A taller bar means more plays or visits in that hour, added up over the chosen period.",
    "when": "Use it to choose a good time to share a new song. Share a little before the busiest hours.",
    "click": "Put your mouse on a bar (or tap it) to see the hour and the number.",
    "care": "Hours are shown in **your computer's time**. The title shows how far it is from UTC. In a few places that use half-hour time zones, hours stay in UTC.",
    "like": "It is like knowing your shop is busiest at lunch and after school."
  },
  "help.stats.aml.title": {
    "t": "On aimusiclist.com",
    "what": "This card shows your numbers on aimusiclist.com: plays, valid plays, likes and playlist adds, with a daily graph and countries.",
    "when": "Use it to see how your public songs do in the big market.",
    "click": "Nothing changes when you look. The tiles follow the period you chose at the top.",
    "care": "These numbers come **once a day** (in the morning). [[Refresh now]] does not change them. If you see \"Not connected\", connect your site to aimusiclist.com first. Only songs you made public on aimusiclist are counted.",
    "like": "It is the report the big market sends you each morning about your stall."
  },
  "help.stats.aml.plays": {
    "t": "aimusiclist plays",
    "what": "How many times your songs were played on aimusiclist.com in the chosen period.",
    "when": "Use it to see if more people hear you in the big market.",
    "care": "Bigger is better. The arrow compares with the days before. This counts only songs you made public on aimusiclist. If it suddenly drops to 0, check that your songs are still public and your site is still connected.",
    "like": "It is how many times your records were played at your stall in the big market."
  },
  "help.stats.aml.valid": {
    "t": "Valid plays (30 s+)",
    "what": "aimusiclist plays where people listened for 30 seconds or more, in the chosen period.",
    "when": "Use it to see real listening, not quick skips.",
    "care": "Bigger is better. If it is much smaller than **Plays**, many people skip early. aimusiclist uses valid plays for its fair chart, so this number matters most for your chart rank.",
    "like": "It is the guests who stayed at your stall long enough to really hear the song."
  },
  "help.stats.aml.likes": {
    "t": "aimusiclist likes",
    "what": "How many likes your songs got on aimusiclist.com in the chosen period.",
    "when": "Use it to see which way your fans feel about your new songs.",
    "care": "Bigger is better. These are likes on aimusiclist, not on your own site. Your own site's likes are in the **Likes ♥** column of the Popular songs table.",
    "like": "It is like hearts left on your stall's board at the big market."
  },
  "help.stats.aml.adds": {
    "t": "Added to playlists",
    "what": "How many times people put your songs into their playlists on aimusiclist.com in the chosen period.",
    "when": "Use it to see if people want to keep listening to your songs again and again.",
    "care": "Bigger is better. A playlist add is a strong sign: that person plans to come back to the song.",
    "like": "It is like a guest buying your record to take home, instead of only listening once at the stall."
  },
  "help.stats.aml.trend": {
    "t": "aimusiclist plays per day",
    "what": "Each bar is one day of plays on aimusiclist.com. A taller bar means more plays that day.",
    "when": "Use it to see when your songs were popular in the big market, for example the week a song entered a chart.",
    "click": "Put your mouse on a bar (or tap it) to see the date and the number.",
    "care": "The graph ends on the same day as your own site's numbers (yesterday, UTC). Empty spots mean 0 or no numbers that day.",
    "like": "It is a row of coin stacks for your stall at the big market, one stack per day."
  },
  "help.stats.aml.countries": {
    "t": "aimusiclist listener countries",
    "what": "The countries of people who played your songs on aimusiclist.com. Up to 10 are shown, biggest first.",
    "when": "Use it to find countries where your music is growing in the big market.",
    "care": "This list is made by aimusiclist and comes once a day. It can be different from the countries of your own site.",
    "like": "It is the big market telling you which countries your stall's guests come from."
  },
  "help.stats.free.r2_storage": {
    "t": "Storage space",
    "what": "How much space your songs and pictures take in your Cloudflare storage. The free plan gives you **10 GB**.",
    "when": "Check it before you upload many songs or very big files.",
    "care": "If you go over the free amount, Cloudflare charges your account. Deleting songs you don't need frees space. WAV files are much bigger than MP3 files.",
    "like": "It is how full your warehouse is."
  },
  "help.stats.free.workers": {
    "t": "Site requests today",
    "what": "How many times your site was asked for something today (pages, songs, pictures). The free plan allows **100,000 a day**.",
    "when": "Check it on a day many people visit, like after a big share.",
    "care": "If you go over 100,000 in a day, your site **stops for the rest of that day** (no charge). It starts again at 00:00 UTC (9 a.m. in Korea).",
    "like": "It is like a shop door that can open only so many times a day. After that, the door stays shut until tomorrow."
  },
  "help.stats.free.r2_class_a": {
    "t": "Storage writes this month",
    "what": "How many times something was saved into your storage this month, like uploading a song or changing settings. The free plan allows **1 million a month**.",
    "when": "Check it if you upload or change things a lot.",
    "care": "Normal use stays far below the limit. If you go over, Cloudflare charges your account. The count starts again each month.",
    "like": "It is how many times boxes were put into your warehouse this month."
  },
  "help.stats.free.r2_class_b": {
    "t": "Storage reads this month",
    "what": "How many times something was taken out of your storage this month, mostly songs being played. The free plan allows **10 million a month**.",
    "when": "Check it when your songs get many plays.",
    "care": "If you go over, Cloudflare charges your account. The count starts again each month. Many plays are a good thing, so this bar grows when you are popular.",
    "like": "It is how many times records were taken out of your warehouse this month."
  },
  "help.stats.free.ae": {
    "t": "Stats records today",
    "what": "How many lines your site wrote in its stats notebook today (one line for each visit, play or guestbook post). The free amount is **100,000 lines a day**.",
    "when": "Check it on a very busy day.",
    "care": "This bar shows only when today's numbers have been counted, for example after [[Refresh now]]. A normal site stays far below the free amount. Your guest pages and songs don't depend on this bar.",
    "like": "It is how many lines the guest counter wrote in its notebook today."
  },
  "help.stats.free.title": {
    "t": "Free plan room",
    "what": "Bars that show how much of the Cloudflare free plan your site uses. Your site runs free while each bar stays under 100%.",
    "when": "Look at it now and then, and always after uploading many songs.",
    "click": "Nothing changes when you look. A bar turns a warning color at **70%** and a danger color at **90%**.",
    "care": "If a bar gets near 100%, stop uploading big files and check which bar is full. The free plan is enough for about 1,000 songs (about 10 MB each) and a few thousand visitors a day.",
    "like": "It is like the meters for water and electricity in your shop. As long as you stay under the free amount, you pay nothing."
  },
  "help.an.title": {
    "t": "Analysis",
    "what": "This tab shows how your songs move over time: ranks going up and down, songs that are rising, and news from aimusiclist.com.",
    "when": "Open it once a week to see trends. The **Stats** tab tells you \"how many\". This tab tells you \"going up or down\".",
    "click": "Looking changes nothing on your site. Pick a period at the top, and the graphs and table follow it.",
    "care": "Your site writes down one line per day. So on the first day there is nothing to draw. From the next morning, the graphs fill in one day at a time. Records older than about 2 years are removed.",
    "like": "It is like a diary your shop keeps every day. After some weeks you can flip back and see how things changed."
  },
  "help.an.period": {
    "t": "Period (7 / 30 / 90 days / All)",
    "what": "These buttons choose how many days the graphs and the table show. **All** shows every day recorded so far.",
    "when": "Use 7 days for this week, 30 or 90 days for a longer view, and **All** to see the whole story of a song.",
    "click": "The graphs and the table change right away. **All** may take a few seconds the first time, because older records are opened too.",
    "care": "Some boxes always look at the last 7 days, no matter what you pick: **My rising songs**, the **7-day change** column and the aimusiclist numbers. **Likes and playlist adds** shows at most 90 days.",
    "like": "It is like choosing how many pages of your shop diary to read at once."
  },
  "help.an.note.start": {
    "t": "Records start today",
    "what": "Your site just started writing its daily diary. There are no past days to show yet.",
    "when": "This shows on the first day after you get this feature.",
    "click": "Nothing to do. Come back tomorrow. Each morning, one more day is added to the graphs.",
    "care": "Days before today can't be filled in later, so the graphs start from today.",
    "like": "It is the first page of a brand-new diary. Tomorrow it will have one line."
  },
  "help.an.note.since": {
    "t": "Recording since",
    "what": "The first day your site started keeping its daily records. Graphs can't go back further than this day.",
    "when": "Look at it when a graph seems to start late.",
    "care": "Records are kept for about 2 years. Older months are removed by themselves.",
    "like": "It is the date written on the first page of your shop diary."
  },
  "help.an.note.feed": {
    "t": "aimusiclist data",
    "what": "Once a day your site picks up a small report from aimusiclist.com: rising songs, chart lines and news. This line shows the date of the report you have.",
    "when": "Look at it when the rising list or news looks old.",
    "click": "Nothing to press. The report arrives by itself once a day. If it says the data hasn't arrived yet, check back tomorrow.",
    "care": "Opening this tab many times does not ask aimusiclist again. It only shows the saved report. So it costs you nothing.",
    "like": "It is like the newspaper the big market drops at your shop door each morning."
  },
  "help.an.note.feed_old": {
    "t": "Today's data didn't arrive",
    "what": "Your site tried to pick up today's report from aimusiclist.com, but it didn't come. You are seeing the last report.",
    "when": "This shows up by itself.",
    "click": "Nothing to do. Your site tries again tomorrow by itself.",
    "care": "Your own numbers are not affected. Only the aimusiclist boxes may be a day old. If it lasts many days, check your site's connection to aimusiclist.com.",
    "like": "It is a morning when the newspaper didn't come. Yesterday's paper is still on the table."
  },
  "help.an.news": {
    "t": "aimusiclist news",
    "what": "The 5 newest messages from aimusiclist.com. **Chart report** tells you about the charts. **Notice** tells you about changes to the service.",
    "when": "Read it when you see a dot on the **Analysis** tab. The dot means there is new news.",
    "click": "Press **Read more** to open the full story on aimusiclist.com in a new tab. Opening this tab clears the dot.",
    "care": "News comes once a day with the aimusiclist data. Pictures are not shown here, to keep this screen light.",
    "like": "It is the notice board of the big market, with the latest five posters."
  },
  "help.an.rank.basis": {
    "t": "Which rank to draw",
    "what": "Choose which rank the graph shows. **aimusiclist rank** is the place among all songs on aimusiclist. **My site rank** is your site's Popular order. **Both** draws two graphs.",
    "when": "Use aimusiclist rank to see how you do in the big market, and my site rank to see what your own visitors like.",
    "click": "The graph changes right away. Your song picks go back to the top 3 songs. This choice also changes **My rising songs** and the **7-day change** column.",
    "care": "At first the graph uses aimusiclist rank if it exists. A song that was never ranked does not appear in the list to pick.",
    "like": "It is like choosing between the big market's board and your own shop's board."
  },
  "help.an.rank": {
    "t": "Rank changes",
    "what": "A line graph of your songs' ranks, day by day. Each song has its own color, line style and dot shape.",
    "when": "Use it to see if a song is climbing, falling, or staying still, and to compare a few songs.",
    "click": "Pick songs below the title. Put your mouse on a dot (or tap it) to see the song, the date and the rank.",
    "care": "**Higher on the graph is better** (1 is at the top). If ranks are very far apart, the scale is squeezed so all lines fit. Then the gaps between tick lines are not equal.",
    "like": "It is like a mountain-climbing map. Each song is a climber, and the top of the map is the peak."
  },
  "help.an.rank.pick": {
    "t": "Pick songs",
    "what": "The song names under this line are switches. A checked song gets a line on the graph.",
    "when": "Pick a few songs you want to compare, like your newest song and your best song.",
    "click": "Tap a song name to add it or take it away. The graph changes right away. At first, your 3 best-ranked songs are picked.",
    "care": "You can pick **up to 8 songs**. After 8, the other names can't be checked until you remove one. Your picks are not saved. They reset when you change the rank type.",
    "like": "It is like choosing which climbers to follow on the mountain map."
  },
  "help.an.rank.gap": {
    "t": "Breaks in a line",
    "what": "A break means that song had no rank on that day.",
    "when": "Read it when a line stops and starts again.",
    "care": "This is normal. A song gets no rank when nobody played it in the last 7 days, or when that day's numbers didn't arrive. A single dot without a line means only one day had a rank.",
    "like": "It is like a climber who stepped off the path for a while, then came back."
  },
  "help.an.sort": {
    "t": "Sort",
    "what": "Choose the order of the table. **Most played**, **Listening time**, **Rising** (biggest rank jump this week) or **Newest** (latest upload first).",
    "when": "Use Rising to find songs to share now. Use Newest to check how new songs are doing.",
    "click": "The table changes order right away. Nothing is saved.",
    "care": "Songs with the same value are sorted by title. In **Rising**, songs that just got a rank (NEW) come after every song with a real change, and songs with no rank come last.",
    "like": "It is like arranging the records on your shelf by sales, by length of play, by trend or by arrival date."
  },
  "help.an.table": {
    "t": "My songs at a glance",
    "what": "A table of all your songs with plays, listening time, aimusiclist rank, 7-day change and upload date.",
    "when": "Use it to find your strongest songs and songs that are just starting to rise.",
    "click": "Use the sort buttons next to the title to change the order. Up to 200 songs are shown.",
    "care": "Only songs with a sound file are listed. On a small phone screen, the **Uploaded** column is hidden to save space.",
    "like": "It is the full price list of every record on your shop's shelves."
  },
  "help.an.own_off": {
    "t": "Plays on my site aren't counted",
    "what": "Your site can't count its own plays yet. So the **Plays** column shows aimusiclist plays from the last 7 days instead.",
    "when": "This shows up by itself.",
    "click": "Nothing to press. If you turn on play counting (see the notices on the **Stats** tab), this column switches to your own plays.",
    "care": "In this case, Plays doesn't follow the period buttons. It is always the last 7 days.",
    "like": "Your shop has no counter at the door, so you borrow the big market's numbers for now."
  },
  "help.an.col.plays": {
    "t": "Plays",
    "what": "How many times the song was played on your site in the chosen period.",
    "when": "Use it to find your most played songs.",
    "care": "Bigger is better. Plays that came through aimusiclist are not in here. – means there is no number for this song.",
    "like": "It is how many times this record was put on your shop's record player."
  },
  "help.an.col.time": {
    "t": "Listening time",
    "what": "About how long people listened to this song in total. It is **plays × song length**.",
    "when": "Use it to compare a short song and a long song more fairly.",
    "care": "This is an **estimate**. Your site does not know if a listener stopped halfway, so the real time may be shorter. Songs with no length saved show –.",
    "like": "It is like guessing how long the record player ran: number of spins times the length of one side."
  },
  "help.an.col.rank": {
    "t": "aimusiclist rank",
    "what": "The song's latest place among all songs on aimusiclist.",
    "when": "Use it to see which of your songs does best in the big market.",
    "care": "A smaller number is better. It changes once a week (on Friday). – means no rank yet, which is normal for a song nobody played this week.",
    "like": "It is your record's number in the big market's full list."
  },
  "help.an.col.rise": {
    "t": "7-day change",
    "what": "How many places the song's rank moved compared to 7 days ago.",
    "when": "Use it to spot songs that are starting to climb.",
    "click": "Nothing to press. ▲ means it went up that many places, ▼ means down, – means no change. **NEW** means it had no rank 7 days ago.",
    "care": "▲ is good. It uses the rank type you chose in **Rank changes** (aimusiclist or my site). If a day is missing, the nearest of the 3 days before is used.",
    "like": "It is like checking how many steps up the mountain a climber went this week."
  },
  "help.an.col.uploaded": {
    "t": "Uploaded",
    "what": "The day you uploaded the song to your site.",
    "when": "Use it to compare new songs with old ones.",
    "care": "On small phone screens this column is hidden. Turn the phone sideways or use a computer to see it.",
    "like": "It is the date stamped on the box when a record arrived at your shop."
  },
  "help.an.mine": {
    "t": "My rising songs",
    "what": "Up to 5 of your songs whose rank rose the most this week, with a small line of the last 14 days.",
    "when": "Use it to choose which song to share now. A song that is already rising grows faster with a little push.",
    "click": "Nothing to press. Each card shows how many places it rose and the rank from 7 days ago to now.",
    "care": "It always looks at the **last 7 days**. It follows the rank type you chose in **Rank changes**, shown at the end of the small line under the title. Only songs that really went up are listed.",
    "like": "It is the \"hot this week\" corner of your shop."
  },
  "help.an.aml.genre": {
    "t": "Genre",
    "what": "Choose a genre to see only rising songs of that genre. **All genres** shows the whole list.",
    "when": "Pick your own genre to see who you are up against.",
    "click": "The list changes right away. Nothing is saved.",
    "care": "Only genres that have rising songs today are in the list.",
    "like": "It is like walking only along the R&B aisle of the big market."
  },
  "help.an.aml": {
    "t": "Rising on aimusiclist",
    "what": "Songs from everyone on aimusiclist that are climbing fast right now. Your own songs are marked **My song**.",
    "when": "Use it to see what kind of music is popular now, and to find artists to learn from.",
    "click": "Press a title to open that song's page on aimusiclist in a new tab. You can listen there. Songs are not played on this screen.",
    "care": "This list comes once a day with the aimusiclist data. ▲ shows how many places it rose, **NEW** means a new entry. The listener number is how many people listened.",
    "like": "It is like walking through the big market to see which stalls have long lines today."
  },
  "help.an.s1": {
    "t": "New song starts",
    "what": "A graph of how plays on your site add up in the first 7 days after each new song was uploaded. Up to 6 of your newest songs are shown.",
    "when": "Use it to compare your new song's start with earlier songs. Did this one start stronger?",
    "click": "Put your mouse on a dot (or tap it) to see the song, the day and the total plays. The list under the graph tells which line is which song.",
    "care": "Only songs uploaded **after recording started** appear. If your site can't count its own plays, this box stays empty.",
    "like": "It is like a race where every new record starts at zero, and you watch who runs farthest in the first week."
  },
  "help.an.s2": {
    "t": "Distance to the Top 100",
    "what": "For up to 5 of your songs, this tells you about how far they are from the aimusiclist Top 100 chart.",
    "when": "Use it to set a goal, like \"about 20 more listeners this week\".",
    "click": "Nothing to press. Each line says if the song is already in the Top 100, how many more listeners it may need, or that it may be close.",
    "care": "This is a **guess**, not a promise. The real chart also checks other things, so a song can be close and still not get in. If the Top 100 isn't full yet, songs that pass the entry rule get in.",
    "like": "It is like a sign on the mountain path: \"about 200 steps to the top\"."
  },
  "help.an.s2.note": {
    "t": "Why it is an estimate",
    "what": "aimusiclist does not tell your site the exact number of listeners. So this box guesses from aimusiclist **valid plays** in the last 7 days.",
    "when": "Read it if the numbers in this box seem strange.",
    "care": "aimusiclist counts **one play per person per day**. So the real number of different listeners may be smaller than the plays. Treat the result as a rough guide only.",
    "like": "It is like guessing how many people visited from the number of footprints. Some people walked by twice."
  },
  "help.an.s3": {
    "t": "Likes and playlist adds",
    "what": "How many likes and playlist adds your songs got on aimusiclist, day by day, and which songs got the most.",
    "when": "Use it to see which songs people really love, not only listen to once.",
    "click": "Put your mouse on a bar (or tap it) to see the date and the number.",
    "care": "Bigger is better. It shows at most the last **90 days**, even if you pick **All**. Numbers come once a day from aimusiclist.",
    "like": "It is like counting the hearts and the \"take home\" stickers on your stall in the big market."
  },
  "help.an.s3.likes": {
    "t": "Likes on aimusiclist",
    "what": "Each bar is one day. It shows how many likes all your songs got on aimusiclist that day.",
    "when": "Use it to see if likes grow after you release or share a song.",
    "care": "Bigger is better. These are aimusiclist likes only. Likes on your own site are in the **Stats** tab.",
    "like": "It is like a daily count of hearts on your stall's board."
  },
  "help.an.s3.adds": {
    "t": "Added to playlists",
    "what": "Each bar is one day. It shows how many times people put your songs into their playlists on aimusiclist that day.",
    "when": "Use it to see if people want to keep your songs and listen again.",
    "care": "Bigger is better. A playlist add is one of the strongest signs that someone likes a song.",
    "like": "It is like counting the guests who bought your record to take home each day."
  },
  "help.an.s3.top": {
    "t": "Most liked and added",
    "what": "Up to 5 of your songs that got the most likes (♥) and playlist adds (+) on aimusiclist in the last 7 days.",
    "when": "Use it to pick a song for your next post or to put first in an album.",
    "care": "It is always the **last 7 days**. Songs are ordered by likes and adds added together.",
    "like": "It is the \"fan favorites\" shelf in your shop."
  },
  "help.an.s4": {
    "t": "My place in my genre",
    "what": "For up to 6 of your songs, this shows the rank on the aimusiclist chart of that song's genre, and the top % among songs.",
    "when": "Use it to see how strong your song is among songs of the same style.",
    "click": "Nothing to press. **in the Top 20** is added when the song is among the top 20 of its genre.",
    "care": "A smaller rank and a smaller % are better (top 1% is great). If the genre size is unknown, the % is counted among all songs on aimusiclist. A song with no genre rank yet says so.",
    "like": "It is like knowing your place on the R&B shelf of the big market, not the whole market."
  },
});
