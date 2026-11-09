// Yardım metinleri — Türkçe (3-26). Kişisel site yönetim ekranı (/admin).
// İngilizce kaynaktaki bütün anahtarları, ** vurguları ve [[düğme]] işaretlerini koru. Denetim: node tools/help-check.js
AMLHelp.add('tr', {
  "_ui": {
    "what": "Bu nedir?",
    "when": "Ne zaman kullanılır?",
    "click": "Buna basınca ne olur?",
    "care": "Dikkat et",
    "like": "Şöyle düşün",
    "close": "Kapat"
  },
  "help.top.lang": {
    "t": "Dil",
    "what": "Bu yönetim sayfasının dilini seçer. Listede programın desteklediği bütün diller bulunur.",
    "when": "Yazıları anlamakta zorlandığında veya sitenin başka bir dilde nasıl göründüğüne bakmak istediğinde kullan.",
    "click": "Sayfa hemen değişir. Seçimin yalnızca bu tarayıcıda hatırlanır; başka bilgisayar veya telefonda farklı bir dil görünebilir.",
    "care": "Bu, ziyaretçilere gösterilen ana site dilini değiştirmez. Onu Site bilgileri sekmesindeki **Site dili** bölümünden ayarlarsın. Ancak siteni aynı tarayıcıda açarsan burada seçtiğin dil görünür.",
    "like": "Dükkânının arka odasındaki fiyat etiketlerinin dilini seçmek gibi. Dışarıdaki tabela değişmez."
  },
  "help.setup.title": {
    "t": "Yönetici hesabını oluştur",
    "what": "Siteni kurduktan sonra ilk gördüğün ekrandır. Siteyi yönetecek tek hesabı burada açarsın; e-posta, şifre ve Cloudflare kullanım anahtarı gerekir.",
    "when": "Yalnızca ilk kurulumdan sonra görünür. Şifreni unuttuğunda kurtarma adımlarını uygularsan yeniden açılır.",
    "click": "Bu sadece başlıktır. Alttaki kutuları doldurup [[Yönetici oluştur]] düğmesine bas.",
    "care": "Yeni kurduysan önce yaklaşık 1 dakika bekle. Cloudflare şarkı depolama alanını hazırlıyor olabilir. Hata çıkarsa bir dakika sonra yeniden dene.\nÜnlü bir şarkıcının veya grubun adını sitenin adı olarak kullanamazsın.",
    "like": "Yeni dükkânının tek anahtarını açılış gününde teslim almak gibi."
  },
  "help.setup.legacy": {
    "t": "Eski yönetici şifresi (AML_ADMIN_TOKEN)",
    "what": "Yalnızca eskiden kurulan sitelerde görünür. Eski yöntemde yönetici şifresi Cloudflare ayarlarına yazılırdı.",
    "when": "Daha önce kullandığın yönetici şifresini yaz. Yalnızca bu kez gerekir.",
    "click": "Yazarken hiçbir şey olmaz. [[Yönetici oluştur]] düğmesine bastığında kontrol edilir.",
    "care": "Bu, sitenin gerçekten sana ait olduğunu kanıtlar. Yanlışsa hesap açılmaz. Şifreyi sitenin Cloudflare ayarlarında bulabilirsin.",
    "like": "Çilingirin yeni anahtar vermeden önce eski dükkân anahtarını bir kez görmesi gibi."
  },
  "help.setup.email": {
    "t": "E-posta",
    "what": "Giriş yapmak için kullanacağın e-posta adresidir. Sitenin ziyaretçilerine gösterilmez.",
    "when": "Sık kontrol ettiğin bir adres kullan. Cloudflare'a kaydolduğun adresi hatırlamak kolaydır.",
    "click": "Şimdilik kaydedilmez. [[Yönetici oluştur]] düğmesine basınca kaydedilir.",
    "care": "Gerçek bir adres biçiminde olmalı (name@example.com). aimusiclist.com bu adresi sitenin özel iletişim adresi olarak da alır. Daha sonra Site bilgileri bölümünden değiştirebilirsin.",
    "like": "Dükkân anahtarlığına adını yazmak gibi."
  },
  "help.setup.password": {
    "t": "Şifre (en az 6 karakter)",
    "what": "Yukarıdaki e-posta ile birlikte giriş yapmak için kullanacağın şifredir.",
    "when": "Şimdi seç. En az 6 karakter olsun; daha uzunu daha güvenlidir.",
    "click": "Şimdilik kaydedilmez. [[Yönetici oluştur]] düğmesine basınca kaydedilir.",
    "care": "Başka sitelerde kullandığın şifreyi burada kullanma. Unutursan sıfırlayabilirsin; şarkıların güvende kalır.",
    "like": "Dükkân anahtarı gibi. Başka kapılara da uyan bir kopyası olmasın."
  },
  "help.setup.password2": {
    "t": "Şifreyi tekrar yaz",
    "what": "Aynı şifreyi bir kez daha yaz.",
    "when": "İlk şifre kutusunun hemen ardından doldur.",
    "click": "[[Yönetici oluştur]] düğmesine basınca iki kutu karşılaştırılır.",
    "care": "İkisi farklıysa uyarı çıkar ve hesap açılmaz. İkisini yeniden yazman yeterli.",
    "like": "Yeni anahtarın uyduğunu anlamak için kilidi iki kez çevirmek gibi."
  },
  "help.setup.token": {
    "t": "Cloudflare kullanım anahtarı (zorunlu, salt okunur)",
    "what": "Cloudflare'da oluşturduğun anahtardır. Yönetim sayfası bununla Cloudflare'ın ücretsiz kullanım hakkından ne kadar kullandığını gösterir.",
    "when": "Aşağıdaki kılavuzla oluştur (yaklaşık 2 dakika), kopyalayıp buraya yapıştır.",
    "click": "Yazmayı bırakınca otomatik kontrol edilir. Cloudflare hesap adınla ✓ ya da sorunu açıklayan ✗ görünür.",
    "care": "Bu anahtar yalnızca kullanım sayılarını ve hesap adını okuyabilir; değiştirme veya silme yetkisi yoktur. Cloudflare anahtarı bir kez gösterir, hemen yapıştır. İki izin gerekir: Account Analytics · Read ve Account Settings · Read.",
    "like": "Yalnızca elektrik sayacının kutusunu açan anahtar gibi. Dükkân kapısını açamaz."
  },
  "help.setup.account": {
    "t": "Cloudflare hesabı",
    "what": "Kullanım anahtarın birden fazla Cloudflare hesabını görebiliyorsa bu liste açılır.",
    "when": "Sitenin kurulu olduğu hesabı seç.",
    "click": "Hesabı seçince anahtar hemen yeniden kontrol edilir. ✓ işareti doğru olduğunu gösterir.",
    "care": "Yanlış hesap seçersen kullanım çubukları başka hesabın sayılarını gösterir veya yüklenmez.",
    "like": "Birden çok binanın anahtarı arasından dükkânının bulunduğu binayı göstermek gibi."
  },
  "help.setup.account_id": {
    "t": "Cloudflare Account ID",
    "what": "Cloudflare hesap numaran: 32 karakterdir, 0–9 rakamlarını ve a–f harflerini içerir.",
    "when": "Anahtarın hesabı kendiliğinden bulamadığında görünür. Bunun nedeni genellikle Account Settings · Read izninin eksik olmasıdır.",
    "click": "32 karakterin tamamını girince anahtar otomatik yeniden kontrol edilir.",
    "care": "Cloudflare'da Workers & Pages → Account Details → Account ID (kopyalama düğmesi) bölümünden bul. Kılavuzdaki düğmeyle anahtarı yeniden oluşturursan iki izin tamamlanır ve bu kutuya gerek kalmaz.",
    "like": "Sokak tabelası eksikse sayaç okuyana ev numaranı söylemek gibi."
  },
  "help.setup.token_guide": {
    "t": "Kullanım anahtarı nasıl oluşturulur? (2 dakika)",
    "what": "Cloudflare'da kullanım anahtarı oluşturmak için beş kısa adım gösterir.",
    "when": "Anahtarı oluştururken oku. Başlığa basarak açıp kapatabilirsin.",
    "click": "Açıp kapatmak ayarları değiştirmez. İlk adımda Cloudflare'ı açan düğme vardır.",
    "care": "Cloudflare'daki ekran adları biraz değişebilir. En yakın seçeneği bul. [[Continue to summary]], sonra [[Create Token]], ardından [[Copy]] düğmelerine bas.",
    "like": "Yeni mobilyayı kurmayı gösteren küçük resimli kılavuz gibi."
  },
  "help.setup.submit": {
    "t": "Yönetici oluştur",
    "what": "Yukarıdaki e-posta, şifre ve kullanım anahtarıyla yönetici hesabını açar.",
    "when": "Tüm kutuları doldurup anahtarın yanında ✓ görünce bas.",
    "click": "Bir sorun varsa düğmenin yanında mesaj çıkar ve hesap açılmaz. Her şey doğruysa giriş yaparsın, yönetim sayfası açılır ve siten aimusiclist.com'a kendiliğinden bağlanmaya başlar.",
    "care": "Her sitenin yalnızca bir yönetici hesabı vardır. Yeniden oluşturmak için şifremi unuttum adımlarını izlemelisin. Şarkıların ve albümlerin korunur.",
    "like": "Açılışta kurdeleyi kesmek gibi; dükkân artık senindir."
  },
  "help.login.title": {
    "t": "Giriş yap",
    "what": "Yönetim sayfasına açılan kapıdır. Yalnızca site sahibi e-posta ve şifresiyle girebilir.",
    "when": "Bu tarayıcıda oturum açmadığında veya oturumun bittiğinde görünür.",
    "click": "Bu sadece başlıktır. Alttaki kutuları doldurup [[Giriş yap]] düğmesine bas.",
    "care": "Bir tarayıcıdaki giriş 30 gün sürer. Şifreni değiştirince tüm cihazlarda oturum kapanır.",
    "like": "Dükkânın kilitli arka kapısı gibi. Ön kapı (siten) ziyaretçilere açık kalır."
  },
  "help.login.email": {
    "t": "E-posta",
    "what": "Yönetici hesabını açarken belirlediğin e-posta adresidir.",
    "when": "Her giriş yaptığında yaz.",
    "click": "[[Giriş yap]] düğmesine basana kadar bir şey olmaz.",
    "care": "Büyük ve küçük harf fark etmez. meshmelo sitesinde meshmelo hesabının e-posta adresini kullan.",
    "like": "Anahtarı göstermeden önce arka kapıda adını söylemek gibi."
  },
  "help.login.password": {
    "t": "Şifre",
    "what": "Yönetici hesabının şifresidir.",
    "when": "Her giriş yaptığında yaz.",
    "click": "[[Giriş yap]] düğmesine basana kadar bir şey olmaz.",
    "care": "Aynı yerden üst üste 5 yanlış denemeden sonra giriş 15 dakika kilitlenir. Mesajda kalan deneme sayısı görünür.",
    "like": "Anahtarın kendisi gibi. Çok yanlış anahtar denersen kilit bir süre dinlenir."
  },
  "help.login.submit": {
    "t": "Giriş yap",
    "what": "E-posta ve şifreni kontrol edip yönetim sayfasını açar.",
    "when": "İki kutuyu doldurduktan sonra bas. Yanındaki [[Sitemi görüntüle]] bağlantısı siteni ziyaretçi gibi açar.",
    "click": "Bilgiler doğruysa panel açılır ve bu tarayıcıda 30 gün giriş yapılmış kalır. Yanlışsa altta kırmızı mesaj çıkar.",
    "care": "Buradan giriş yapman başka cihazlarında oturum açmaz. Her tarayıcıda ayrı giriş gerekir.",
    "like": "Anahtarı çevirip arka ofise girmek gibi."
  },
  "help.login.forgot": {
    "t": "Şifreni mi unuttun?",
    "what": "E-postanı veya şifreni hatırlamadığında yenisini oluşturma adımlarını anlatır.",
    "when": "Gerçekten giriş yapamıyorsan kullan. Adımları açmak için başlığa bas.",
    "click": "Başlığı açmak bir şeyi değiştirmez; adımları sen uygularsın. Cloudflare sitesinde şarkı depolama alanından (R2) yalnızca yönetici bilgilerini kaldırırsın; sonra [[Yönetici oluştur]] ekranı yeniden görünür.",
    "care": "Şarkılar, albümler ve aimusiclist.com bağlantısı korunur. Sadece adımlarda belirtilen tek öğeyi sil. PHP sürümünde hosting alanında boş bir dosya oluşturursun; meshmelo'da hesabından sıfırlarsın.",
    "like": "Yeni anahtar için çilingir çağırmak gibi. Dükkân ve raflardaki her şey yerinde kalır."
  },
  "help.top.mm_acct": {
    "t": "meshmelo hesabım",
    "what": "meshmelo hesap sayfana giden bağlantıdır. Yalnızca meshmelo'da barındırılan sitelerde görünür.",
    "when": "Giriş, şifre, şarkı depolama, kullanım, özel alan adı veya siteni silmek için oraya git.",
    "click": "meshmelo hesabın yeni sekmede açılır. Bu sayfa açık kalır.",
    "care": "Şarkıların, albümlerin, menülerin, temaların ve istatistiklerin yönetimi burada yapılır. Hangi sayfayı kullanacağını bilmiyorsan bağlantının yanındaki ? işaretine bas.",
    "like": "Bütün dükkânlarını yöneten ofis gibi. Bu sayfa tek dükkânın tezgâhıdır."
  },
  "help.top.view_site": {
    "t": "Siteyi görüntüle",
    "what": "Ziyaretçilerin gördüğü kendi siteni açar.",
    "when": "Bir değişiklikten sonra nasıl göründüğünü kontrol etmek için kullan.",
    "click": "Siten yeni sekmede açılır. Yönetim sayfası açık kalır.",
    "care": "Çoğu değişiklik yaklaşık 30 saniyede görünür. Giriş yaptığın için şarkı dinlenme sayıları gibi yalnızca senin görebileceğin şeyler de görünebilir.",
    "like": "Dükkânın dışına çıkıp vitrinin sokaktan nasıl göründüğüne bakmak gibi."
  },
  "help.top.logout": {
    "t": "Çıkış yap",
    "what": "Bu tarayıcıdaki oturumunu kapatır.",
    "when": "Ortak veya ödünç bilgisayar kullandığında ya da işin bittiğinde bas.",
    "click": "Hemen giriş ekranına dönersin. Şarkıların ve ayarların değişmez.",
    "care": "Yalnızca bu tarayıcıdan çıkış yapılır; diğer cihazlar açık kalır. Her yerden çıkmak için Site bilgileri sekmesinde şifreni değiştir.",
    "like": "Çıkarken dükkânın arka kapısını kilitlemek gibi. Diğer anahtarların hâlâ çalışır."
  },
  "help.top.version": {
    "t": "Yeni sürüm",
    "what": "Site programının yeni sürümü çıktığında görünür. Şu anki ve en yeni sürümü gösterir.",
    "when": "Görünce yakın zamanda güncellemeyi planla. Günde bir kez kontrol edilir.",
    "click": "[[Nasıl güncellenir]] güncelleme kılavuzunu açar. [[Yenilikler]] nelerin değiştiğini gösterir. Sen güncelleyene kadar hiçbir şey değişmez.",
    "care": "Güncelleme zorunlu değildir. Satır kırmızıysa sürümün aimusiclist.com'un desteklediğinden eskidir; yakında güncelle. Şarkılar ve ayarlar korunur. PHP sürümünde burada bir güncelleme düğmesi bulunur.",
    "like": "Dükkânına yeni, daha iyi raflar geldiğini haber veren not gibi."
  },
  "help.top.aml": {
    "t": "aimusiclist.com bağlantısı",
    "what": "Sitenin aimusiclist.com'a bağlı olup olmadığını gösterir. Herkese açık şarkıların ancak bağlantı varsa orada listelenip sıralanabilir.",
    "when": "Kurulumdan sonra veya şarkıların aimusiclist.com'da görünmediğinde kontrol et.",
    "click": "Bu yalnızca durum bilgisidir: ✓ bağlı, … bağlanıyor, ✗ bağlı değil. Sorun ve sonraki otomatik deneme de gösterilir.",
    "care": "Yeni site kendiliğinden bağlanır. Hata olursa 10 dakikada bir, günde en fazla 20 kez dener. Bazı hatalarda durur; nedeni düzelttikten sonra [[Şimdi dene]] düğmesine bas. Duraklatılmış meshmelo sitesinde bu durum gösterilir.",
    "like": "Dükkânından büyük pazara giden yol gibi. Yol açıksa plakların pazarın vitrinine ulaşır."
  },
  "help.top.lang_missing": {
    "t": "Şarkı dili eksik",
    "what": "Bazı şarkıların dilinin henüz belirtilmediğini bildirir. Genellikle bu ayar eklenmeden önce yüklenen eski şarkılardır.",
    "when": "Vaktin olduğunda düzelt; aimusiclist.com dinleyicileri kendi dillerindeki şarkıları daha kolay bulur.",
    "click": "Bu yalnızca bildirimdir. Hepsini birden düzeltmek için [[Şimdi ayarla]] düğmesine bas.",
    "care": "Zorunlu değildir. Ayarlayana kadar aimusiclist.com bu şarkıları sitenin ana dilinde kabul eder. Her şarkının dili olunca uyarı kaybolur.",
    "like": "Bazı plakların üzerinde şarkıların hangi dilde söylendiğini belirten etiketin olmaması gibi."
  },
  "help.top.pubmin_note": {
    "t": "Yeterince herkese açık şarkı yok",
    "what": "aimusiclist.com'da açık olan şarkı sayısı kuralın altında olduğunda görünür. Kural: en az 10 şarkı (toplam 10'dan azsa hepsi) açık olmalı.",
    "when": "Örneğin şarkı sildikten sonra açık şarkı sayısı sınırın altına düşerse görünür.",
    "click": "Yalnızca uyarıdır. Düzeltmek için [[Şarkıları seç]] düğmesine bas.",
    "care": "Hiçbir şarkı otomatik açılmaz. Ama düzeltmeden daha fazla şarkıyı gizleyemezsin. Hangilerinin açık olacağına sen karar verirsin; paylaşmak istemediğini silebilirsin.",
    "like": "Büyük pazarın her dükkândan vitrine en az 10 plak koymasını istemesi gibi."
  },
  "help.top.profile_note": {
    "t": "Profil fotoğrafı ekle",
    "what": "Şarkıların olduğu hâlde profil fotoğrafın yoksa görünür. Fotoğraf aimusiclist.com'da şarkılarının yanında da gösterilir.",
    "when": "Fırsat bulunca ekle. Yüz veya logo şarkılarının hatırlanmasını kolaylaştırır.",
    "click": "Bu yalnızca öneridir. Resim seçmek için [[Fotoğraf ekle]] düğmesine bas.",
    "care": "Zorunlu değildir. Profil fotoğrafı kaydedilince öneri kaybolur.",
    "like": "Dükkânın kapısına fotoğrafını koyup kime ait olduğunu göstermek gibi."
  },
  "help.top.genre_sample": {
    "t": "Programdaki tür listesi",
    "what": "aimusiclist.com'dan güncel müzik türleri alınamadığında programın kendi listesinin kullanıldığını bildirir.",
    "when": "Bir şey yapmana gerek yoktur. Genellikle yönetim sayfasını bir dahaki açışında düzelir.",
    "click": "Bu yalnızca bir bildirimdir.",
    "care": "Bu listede en yeni türler olmayabilir. Gerekiyorsa bekle ve sayfayı sonra yenile. Şarkılara ve menülere önceden verdiğin türler korunur.",
    "like": "Pazarın yeni kataloğu gelmediğinde geçen yılın basılı kataloğunu kullanmak gibi."
  },
  "help.setup.token_open": {
    "t": "Cloudflare'da oluştur",
    "what": "Cloudflare'ın anahtar oluşturma sayfasını yeni sekmede açar; ad ve iki izin önceden doldurulmuştur.",
    "when": "Kılavuzun ilk adımında bas.",
    "click": "Cloudflare yeni sekmede açılır (gerekirse giriş yap). Bu sayfa açık kalır; anahtarı buraya yapıştırmak için dönebilirsin.",
    "care": "İki izni kontrol et: Account Analytics · Read ve Account Settings · Read. Boşlarsa kendin ekle.",
    "like": "Önceden doldurulmuş sipariş formu gibi; sadece onaylarsın."
  },
  "help.tracks.ai_tool": {
    "t": "Hangi araçla yapıldı?",
    "what": "Şarkıyı üretirken kullandığın Suno gibi yapay zekâ aracıdır. Şarkının yanında küçük '✦ ad' etiketi olarak görünür.",
    "when": "Gerçekten kullandığın aracı seç. Yükleme kartındaki seçim bu yüklemedeki bütün şarkılara uygulanır.",
    "click": "Şarkı yüklenince veya [[Şarkıyı kaydet]] düğmesine basınca kaydedilir. Yükleme sırasında bu tarayıcı seçimlerini sonraki sefer için hatırlar.",
    "care": "Araç listesini aimusiclist.com yönetir. Aracın yoksa 'Diğer' seçip admin@aimusiclist.com'a bildir. Sıralamayı etkilemez.",
    "like": "Plağın arkasındaki 'nerede üretildi' etiketi gibi."
  },
  "help.tracks.ai_fill": {
    "t": "Yapay zekâ aracı belirtilmeyen şarkılar",
    "what": "Henüz hangi yapay zekâ aracıyla yapıldığı yazılmamış şarkı sayısını gösterir. En az bir tane varsa görünür.",
    "when": "Bu şarkıların aracını tek seferde belirtmek için kullan.",
    "click": "Bu yalnızca nottur. Alttan araç seçip [[Hepsine bu aracı uygula]] düğmesine bas.",
    "care": "Her şarkının aracı belirtildiğinde not kendiliğinden kaybolur.",
    "like": "Tezgâhtaki '5 plakta üretici damgası eksik' notu gibi."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Hepsine bu aracı uygula",
    "what": "Seçtiğin aracı, yapay zekâ aracı belirtilmemiş bütün şarkılara yazar.",
    "when": "Şarkıların çoğunu aynı araçla yaptıysan, özellikle eski şarkıları topluca düzeltirken kullan.",
    "click": "Önce onay istenir. Onaylarsan hemen kaydedilir, ✦ araç adı hem sitende hem aimusiclist.com'da bu şarkıların yanında görünür.",
    "care": "Yalnızca aracı boş olan şarkılar değişir. Önceden belirtilmiş olanlar korunur. Farklı araçla yapılanları daha sonra **Seçili şarkıların yapay zekâ aracı** bölümünden veya şarkının [[Düzenle]] düğmesinden düzelt.",
    "like": "Üretici damgası olmayan bütün plaklara aynı damgayı vurup damgalanmış olanları atlamak gibi."
  },
  "help.tracks.bulk_ai": {
    "t": "Seçili şarkıların yapay zekâ aracı",
    "what": "İşaretlediğin şarkıların hangi yapay zekâ aracıyla (örneğin Suno) üretildiğini topluca ayarlar.",
    "when": "Aynı araçla birçok şarkı ürettiysen veya yanlış araç adını topluca düzeltmek istiyorsan kullan.",
    "click": "Araç seçmek tek başına kaydetmez. Yanındaki [[Uygula]] düğmesine bas.",
    "care": "**Belirtilmedi** seçip [[Uygula]] düğmesine basarsan seçilen şarkılardan araç bilgisi kaldırılır. Aracın yoksa **Diğer** seçip admin@aimusiclist.com'a bildir.",
    "like": "Birçok plağın arkasına aynı üretim damgasını basmak gibi."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Uygula",
    "what": "Seçilen yapay zekâ aracını işaretli bütün şarkılara kaydeder.",
    "when": "Şarkıları işaretleyip aracı seçtikten sonra bas.",
    "click": "Hemen kaydedilir, kaç şarkının değiştiği söylenir ve işaretler kaldırılır. Şarkı yanındaki küçük ✦ araç adı sitende ve aimusiclist.com'da değişir.",
    "care": "Eski araç bilgisinin üzerine yazılır. Şarkı seçmediysen önce işaretlemeni isteyen uyarı çıkar.",
    "like": "Damganın gerçekten plaklara vurulduğu an gibi."
  },
  "help.tracks.genre_main": {
    "t": "Ana müzik türü",
    "what": "Şarkının en önemli müzik türüdür. Liste aimusiclist.com'daki tür menüsüyle aynıdır.",
    "when": "Şarkıya en uygun türü seç. Boş bırakılamaz.",
    "click": "[[Şarkıyı kaydet]] düğmesine basınca kaydedilir. Herkese açıksa aimusiclist.com'da bu tür menüsünde görünür.",
    "care": "Ana tür seçilmeden kaydetme işlemi kabul edilmez. Yanındaki iki ek tür kutusu karışık türleri belirtmek içindir.",
    "like": "Plağının büyük pazarda yerleştirildiği bölüm, örneğin R&B köşesi gibi."
  },
  "help.tracks.genre_sub": {
    "t": "Ek müzik türü",
    "what": "Şarkıda bulunan en fazla iki ek türdür. Örneğin rap içeren bir R&B şarkısına Hip-hop eklenebilir.",
    "when": "Tek tür yeterli değilse kullan. Zorunlu değildir.",
    "click": "[[Şarkıyı kaydet]] düğmesiyle (veya yüklerken) kaydedilir. aimusiclist.com bunları ana türden sonra başlığın yanında sırayla gösterir.",
    "care": "Ana gruplarına göre sıralanmış türlerden seçim yapabilirsin. Aynı türü iki kez seçmek tek kez sayılır. Boş bırakmak için '— Yok —' seç.",
    "like": "Raf etiketine 'biraz hip-hop da var' gibi küçük not eklemek gibi."
  },
  "help.tracks.lang": {
    "t": "Şarkı dili",
    "what": "Şarkıda söylenen sözlerin dilidir. Site ekranının diliyle aynı şey değildir.",
    "when": "Sözlerin ana dilini seç. Vokal yoksa 'Enstrümantal (sözsüz)' seç.",
    "click": "[[Şarkıyı kaydet]] düğmesiyle kaydedilir. aimusiclist.com bunu dil bazlı listelerde kullanır.",
    "care": "Eski şarkılarda 'belirtilmedi (site dili)' yazabilir; o durumda site dili kullanılır. 'Enstrümantal' seçersen ikinci dil kutusu kapanır.",
    "like": "Plağın üzerinde şarkıcının hangi dilde söylediğini gösteren etiket gibi."
  },
  "help.tracks.lang2": {
    "t": "İkinci dil (isteğe bağlı)",
    "what": "Şarkı sözlerinde kullanılan ikinci dildir; örneğin bazı satırları İngilizce olan Korece şarkı.",
    "when": "Şarkının kayda değer bir bölümü başka dilde söyleniyorsa kullan.",
    "click": "[[Şarkıyı kaydet]] düğmesine basınca kaydedilir. Kaldırmak için '— Yok —' seç.",
    "care": "Ana dil seçilene kadar ve 'Enstrümantal' şarkılarda kapalıdır. Ana dille aynı olamaz.",
    "like": "Plağın üzerindeki 'biraz İngilizce de var' ikinci notu gibi."
  },
  "help.tracks.ai_paste": {
    "t": "Yapay zekâ sonucunu yapıştır",
    "what": "Yapay zekânın verdiği, parantezli ( ) kısmı da içeren başlığı buraya yapıştır. Buradan tür, duygu ve dili okur. [[Kılavuzu aç]] yapay zekâya nasıl soracağını anlatır.",
    "when": "Tür seçmek zorsa veya dosya adında ( ) bölümü yoksa kullan.",
    "click": "Yalnızca yapıştırmak bir şeyi değiştirmez. Yanındaki [[Uygula]] düğmesine bas.",
    "care": "Yalnızca kutuları doldurur. Gerçekten kaydetmek için yükleme düğmesine veya [[Şarkıyı kaydet]] düğmesine de basmalısın.",
    "like": "Müzik uzmanının notunu görevliye vermek gibi; görevli raf etiketine geçirir."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Uygula",
    "what": "Yapıştırdığın yazıyı okuyup tür, şarkı dili ve duygu kutularını doldurur.",
    "when": "Yapay zekânın verdiği başlığı yapıştırdıktan sonra bas.",
    "click": "Yükleme kartında henüz yüklenmemiş tüm dosyaları, düzenleme formunda yalnızca bu şarkıyı doldurur. Altta hangi alanların dolduğu yazılır. Henüz kaydedilmez.",
    "care": "Tanımadığı kelimeleri atlar ve sarı renkle gösterir. Ana tür listede yoksa tür kutularını değiştirmez. Kaydetmeden önce kutuları kontrol et.",
    "like": "Görevlinin uzman notunu etiketlere gerçekten yazması gibi."
  },
  "help.site.ext": {
    "t": "Ek bilgiler",
    "what": "Sitenin geneliyle ilgili ek kutulardır. Hangi kutuların olacağını aimusiclist.com belirler ve yazdıklarını orada şarkılarının yanında gösterir.",
    "when": "Sana uygun olanları doldur. Hepsi isteğe bağlıdır; boş bırakabilirsin.",
    "click": "[[Site bilgilerini kaydet]] düğmesine basınca kartın geri kalanıyla birlikte kaydedilir. Kutuyu boşaltmak o yanıtı kaldırır.",
    "care": "Bu bölüm aimusiclist.com siteler için ek kutular tanımladığında görünür. Güncelleme gerektiğini söyleyen kutuyu henüz dolduramazsın; eski yanıtın korunur.",
    "like": "Büyük pazarın (aimusiclist.com) tezgâhına ek etiketler koyman için verdiği soru kâğıdı gibi."
  },
  "help.tracks.ext": {
    "t": "Ek bilgiler",
    "what": "Şarkıya dair tempo (BPM) veya kısa not gibi ek kutulardır. Hangilerinin olacağını aimusiclist.com belirler ve yanıtlarını şarkıların yanında gösterir.",
    "when": "Bildiklerini doldur. Bütün kutular isteğe bağlıdır.",
    "click": "Yüklerken veya [[Şarkıyı kaydet]] düğmesiyle kaydedilir. Yükleme kartında aynı değerler tüm şarkılara uygulanır; düzenlemede boşaltıp kaydedersen değer silinir.",
    "care": "Bir kutu güncelleme istiyorsa siteni güncelledikten sonra kullanabilirsin. Kutular yalnızca siten aimusiclist.com'dan listeyi alınca görünür.",
    "like": "Plak kapağının arkasındaki küçük açıklamalar gibi."
  },
  "help.img.editor": {
    "t": "Resim düzenleme penceresi",
    "what": "Resmini uygun boyuta getirir: şarkı resmi 100×100, albüm kapağı 200×200, üst banner en fazla 1600×400.",
    "when": "Şarkı, albüm kapağı veya banner için resim seçtiğinde kendiliğinden açılır.",
    "click": "Resmi nasıl sığdıracağını seç, sonucu kontrol et ve [[Görseli kaydet]] düğmesine bas. [[İptal]] veya Esc hiçbir şeyi değiştirmeden kapatır.",
    "care": "Asıl fotoğrafın değil, küçültülmüş kopyası yüklenir. Her resim türünün boyut sınırı (50 KB, 100 KB veya 300 KB) vardır; uyana kadar küçültülür.",
    "like": "Fotoğrafını dükkân duvarına asmadan önce çerçeveye göre kesen küçük atölye gibi."
  },
  "help.img.mode_crop": {
    "t": "Kırp (çerçeveyi taşı)",
    "what": "Resmin yalnızca parlak çerçevenin içindeki kısmını tutar, dışını keser.",
    "when": "Resim büyükse, biçimi uymuyorsa veya yüz gibi en güzel kısmı göstermek istiyorsan kullan.",
    "click": "Resimde parlak çerçeve görünür. Tutup sürükle veya ok tuşlarıyla saklamak istediğin bölümü seç. Çerçeve boyutu çubuğuyla büyütüp küçült. Sonuç da hareket ettikçe değişir.",
    "care": "Çerçevenin dışında kalan bölüm saklanmaz.",
    "like": "Fotoğrafı makasla kesip yalnızca en güzel kısmını plak kapağına koymak gibi."
  },
  "help.img.mode_fit": {
    "t": "Resmin tamamını küçült",
    "what": "Kırpmak yerine resmin tamamını koruyup küçültür.",
    "when": "Logo veya üzerinde yazı olan resim gibi hiçbir bölümü kesilmemesi gereken durumlarda kullan.",
    "click": "Sonuç bölümünde resmin tamamı görünür. Kare resimde (şarkı resmi veya kapak) boş yanlar resmin ortalama rengiyle dolar. Banner'da resim kendi biçimini koruyarak 1600×400 içine sığar.",
    "care": "Uzun ve dar resim kare içinde küçük, kenarları geniş renkli şeritler hâlinde görünebilir.",
    "like": "Bir posteri kesmeden renkli kenarlıklı çerçeveye yerleştirmek gibi."
  },
  "help.img.frame": {
    "t": "Çerçeve boyutu",
    "what": "Parlak kırpma çerçevesini büyütüp küçülten çubuktur.",
    "when": "Yüz gibi küçük bir bölüme yaklaşmak için küçült; resmin daha çoğunu göstermek için büyüt.",
    "click": "Çubuğu hareket ettirdikçe çerçeve ve Sonuç değişir. En sağda çerçeve resmin izin verdiği en büyük boyuttadır.",
    "care": "Küçük resimde çok dar çerçeve bulanık görünebilir. Kaydetmeden önce Sonuç bölümüne bak.",
    "like": "Büyüteci fotoğrafa yaklaştırıp uzaklaştırmak gibi."
  },
  "help.img.result": {
    "t": "Sonuç",
    "what": "Resmin kaydedileceği hâliyle önizlemesidir.",
    "when": "[[Görseli kaydet]] düğmesine basmadan önce kontrol et.",
    "click": "Çerçeveyi hareket ettirdiğinde veya modu değiştirdiğinde kendiliğinden güncellenir. Yalnızca önizlemedir; henüz kaydedilmez.",
    "care": "Büyük resimler burada biraz küçük gösterilir ama tam boyutta kaydedilir. Dosya hafifletildiği için kaydedilen resim azıcık daha yumuşak görünebilir.",
    "like": "Fotoğrafı çerçeveye yerleşmiş hâliyle gösteren ayna gibi."
  },
  "help.img.save": {
    "t": "Resmi kaydet",
    "what": "Son küçük resmi hazırlayıp kullanır.",
    "when": "Sonuç istediğin gibi görünüyorsa bas.",
    "click": "Şarkı resmi veya banner hemen kaydedilip sitende gösterilir. Şarkı açıksa resmi aimusiclist.com'da da görünür. Albüm kapağı ise önce albüm kutusuna yerleşir, [[Albümü kaydet]] düğmesine basınca kaydedilir.",
    "care": "Resim hâlâ çok büyükse veya tarayıcın bu tür resmi oluşturamıyorsa kırmızı mesaj çıkar. Daha basit resim veya küçük çerçeve dene; Chrome, Edge ya da Firefox kullan.",
    "like": "Kesilmiş fotoğrafı çerçeveye koyup dükkân duvarına asmak gibi."
  },
  "help.img.crop": {
    "t": "Profil fotoğrafı",
    "what": "Profil fotoğrafını daireye sığdıran penceredir. Yüzün veya logon, sitende ve aimusiclist.com'da yuvarlak görünür.",
    "when": "Profil resmi seçtiğinde kendiliğinden açılır.",
    "click": "Daire ortada durur, sen altındaki fotoğrafı hareket ettirirsin. Sürükle, yakınlaştırma çubuğu, fare tekerleği, iki parmak, ok tuşları veya + / − kullan. Kaydetmek için [[Uygula]], vazgeçmek için [[İptal]] veya Esc.",
    "care": "Yalnızca dairenin içi kullanılır. Orijinal fotoğrafın yerine 200×200 boyutunda küçük kopya yüklenir.",
    "like": "Fotoğrafın arkasında durduğu yuvarlak pencereyi yüzün ortalanana kadar ayarlamak gibi."
  },
  "help.img.crop_zoom": {
    "t": "Yakınlaştır",
    "what": "Çubuk ve − ile + düğmeleri fotoğrafı daire içinde büyütüp küçültür.",
    "when": "Yüzün dairede küçük kalıyorsa yakınlaştır; daha çok yer göstermek için uzaklaştır.",
    "click": "Fotoğraf dairenin ortasına göre boyut değiştirir. En solda daireyi tam doldurur, en sağda dört kat büyür. Alttaki önizlemeler de değişir.",
    "care": "Daireden küçük olamaz, bu yüzden boş kenar kalmaz. Küçük resme çok yaklaşmak bulanıklık yaratabilir.",
    "like": "Fotoğraf makinesine yaklaşmak veya uzaklaşmak gibi."
  },
  "help.img.crop_rotate": {
    "t": "Döndür",
    "what": "Fotoğrafı sağa doğru çeyrek tur çevirir.",
    "when": "Fotoğraf yan veya baş aşağı duruyorsa kullan.",
    "click": "Her basışta 90 derece döner. Dört kez basınca başa döner. Her dönüşte ortalanır; gerekirse yeniden hareket ettir.",
    "like": "Duvardaki fotoğraf çerçevesini düz olana kadar çevirmek gibi."
  },
  "help.img.crop_preview": {
    "t": "Önizleme",
    "what": "Profil fotoğrafının nasıl görüneceğini iki dairede gösterir: biri büyük, biri çok küçük.",
    "when": "[[Uygula]] düğmesine basmadan önce ikisini de kontrol et. Küçüğü listelerde kullanılan boyuta benzer.",
    "click": "Fotoğrafı taşıdıkça, büyüttükçe veya döndürdükçe kendiliğinden değişir. Henüz kaydedilmez.",
    "care": "Küçük dairede yüzünü seçemiyorsan biraz yakınlaştır.",
    "like": "Dükkân tabelasının karşı kaldırımdan okunup okunmadığına bakmak gibi."
  },
  "help.img.crop_apply": {
    "t": "Uygula",
    "what": "Dairenin içindeki kısmı profil fotoğrafı olarak kaydeder.",
    "when": "Önizlemeler istediğin gibiyse bas.",
    "click": "Hemen kaydedilir ve sitende görünür. Bir iki dakika içinde aimusiclist.com'a ulaşır. Sitenin üst bölümünün rengi de bu fotoğraftan seçilir.",
    "care": "Eski profil fotoğrafının yerini alır. Yeniden değiştirmek için başka fotoğraf seç.",
    "like": "Yeni portreni dükkân vitrinine asmak gibi."
  },
  "help.top.profile_go": {
    "t": "Fotoğraf ekle",
    "what": "Profil fotoğrafı eklemeyi başlatır.",
    "when": "Profil fotoğrafı önerisinden bas.",
    "click": "Site bilgileri sekmesi açılır ve cihazın resim seçmeni ister. Kırpıp uygulayınca kaydedilir. Ziyaretçiler ve aimusiclist.com kısa sürede görür.",
    "care": "Site bilgileri bölümünden sonra değiştirebilir veya silebilirsin.",
    "like": "Fotoğrafını tabela ustasına vermek gibi."
  },
  "help.tab.tracks": {
    "t": "Şarkılar",
    "what": "Şarkılarını yönettiğin yerdir. Yükler, başlık, tür, dil, resim ve sözlerini düzenler; hangilerinin aimusiclist.com'da herkese açık olacağını seçersin.",
    "when": "Yeni şarkı eklemek veya eskisini değiştirmek istediğinde aç.",
    "click": "Sekmeye basmak yalnızca görünümü değiştirir. İçindeki birçok değişiklik yapıldığı anda kaydedilir.",
    "care": "Bir seferde en fazla 20 şarkı; her biri 15 MB ve 30 saniye–15 dakika olabilir. Bir ana tür ve en fazla iki ek tür seçilir. En az 10 şarkı açık kalmalı (daha az şarkın varsa hepsi). Silinen şarkı geri getirilemez.",
    "like": "Plakları getirdiğin, etiketlediğin ve pazarda sergilenecekleri seçtiğin depo gibi."
  },
  "help.tab.albums": {
    "t": "Albümler",
    "what": "Şarkılarını başlık, kapak resmi ve kısa açıklamayla bir albümde toplarsın.",
    "when": "Şarkı grubunu birlikte göstermek istediğinde aç.",
    "click": "Sekme yalnızca görünümü değiştirir. Ses dosyası olan 6–35 şarkılı albüm kaydedilince veya seçtiğin zamanda aimusiclist.com'da yayımlanır.",
    "care": "6'dan az şarkılı albüm oluşturabilirsin ama gizli kalır. Açıklama en fazla 200 karakterdir. Albüm açıkken içindeki şarkıları gizleyemezsin.",
    "like": "Plakları özel kapaklı tek kutu setinde toplamak gibi."
  },
  "help.tab.skins": {
    "t": "Temalar",
    "what": "Sitenin renklerini, yazılarını ve düzenini belirler. Hazır tema kullanabilir, galeriden kurabilir veya kendin yükleyebilirsin.",
    "when": "Görünümü değiştirmek veya bir temanın yanında yeni sürüm noktası gördüğünde aç.",
    "click": "Sekme yalnızca görünümü değiştirir. Yeni tema yaklaşık 30 saniyede ziyaretçilere görünür; hemen eskisine dönebilirsin.",
    "care": "Açık ve Koyu temaları her zaman vardır; ayrıca en fazla 20 tema eklenebilir. Yüklediğin tema tek dosya ve en fazla 100 KB olmalı. Tema değişimi şarkılarına veya ayarlarına dokunmaz.",
    "like": "Dükkânı boyayıp rafları değiştirmek gibi. Plaklar aynı kalır."
  },
  "help.tab.site": {
    "t": "Site bilgileri",
    "what": "Sitenin adı, sanatçı adı, ana dili, açıklaması, sosyal bağlantıları, görselleri, ziyaretçi düğmeleri, reklamları, sanatçı listesi, giriş bilgileri ve kullanım anahtarı burada bulunur.",
    "when": "Kurulumdan hemen sonra ve sitenin kendini nasıl tanıttığını değiştirmek istediğinde aç.",
    "click": "Sekme yalnızca görünümü değiştirir. Bazı kartların kendi kaydet düğmesi vardır, açma-kapama anahtarları hemen kaydedilir.",
    "care": "Ünlü sanatçı veya grup adı kullanamazsın. Site ve sanatçı adları aimusiclist.com'da da görünür. Şifreyi değiştirmek tüm cihazlardan çıkış yaptırır.",
    "like": "Dükkân tabelan, isimliğin ve ofis belgelerin tek çekmecede gibi."
  },
  "help.tab.guestbook": {
    "t": "Ziyaretçi defteri",
    "what": "Ziyaretçiler sitene veya bir şarkına kısa notlar bırakır. Burada açıp kapatabilir ve mesajları silebilirsin.",
    "when": "Dinleyici yorumlarını okumak veya uygunsuz mesajı kaldırmak istediğinde aç.",
    "click": "Sekme mesajları sayfa başına 20 tane yükler. Açma, kapama ve silme işlemleri hemen kaydedilir.",
    "care": "Ad en fazla 20, mesaj en fazla 500 karakterdir; bağlantı kabul edilmez. Kişi başına günde en fazla 50 mesaj. Mesajlar silinene kadar kalır, silinen geri gelmez. Defteri kapatmak mesajları silmez.",
    "like": "Müşterilerin birkaç kelime yazdığı dükkân kapısındaki defter gibi."
  },
  "help.tab.domain": {
    "t": "Alan adım",
    "what": "Kurulumda verilen uzun adres yerine satın aldığın mymusic.com gibi bir adresi sitene bağlarsın.",
    "when": "Alan adı satın alıp ziyaretçilerin onu kullanmasını istediğinde aç.",
    "click": "Sekme yalnızca görünümü değiştirir. Kılavuz adımları gösterir (yaklaşık 10 dakika). Bağlarken adres önce kontrol edilir, sonra aimusiclist.com'a bildirilir.",
    "care": "Eski adrese gelenler yeni adrese yönlendirilir; çalma listelerindeki şarkılar çalışır. meshmelo sitelerinde alan adını meshmelo hesabından bağlarsın.",
    "like": "Dükkânına kısa ve akılda kalıcı sokak adresi vermek gibi."
  },
  "help.tab.stats": {
    "t": "İstatistikler",
    "what": "Sitenin günlük ziyaret ve dinlenme sayıları, sevilen şarkılar ve albümler, ülkeler, ziyaret kaynakları, cihaz ve diller ile aimusiclist.com sayılarını gösterir.",
    "when": "Kimin ne dinlediğini veya paylaştığın bağlantının ziyaretçi getirip getirmediğini öğrenmek için aç.",
    "click": "Sekme sayıları yükler. Günde bir kez güncellenir. [[Şimdi yenile]] bugünkü sayıları hemen hesaplar; dakikada bir kullanılabilir.",
    "care": "Giriş yapmışken kendi ziyaretlerin sayılmaz. aimusiclist.com sayıları sabahları günde bir kez güncellenir. Bazı kurulumlarda ziyaret veya dinlenme sayılamaz; sekme nedeni ve açılacak ayarı anlatır.",
    "like": "Dükkânın ziyaret ve satış defterinin senin için toplanmış hâli gibi."
  },
  "help.tab.analysis": {
    "t": "Analiz",
    "what": "Şarkılarının aimusiclist.com'daki gidişatını ayrıntılı gösterir: sıra değişimi, yükselen şarkılar, yenilerin başlangıcı, Top 100'e mesafe, beğeniler, listeye eklemeler ve türündeki yerin. Haberler de buradadır.",
    "when": "Hangi şarkıların büyüdüğünü ve sonra ne paylaşacağını anlamak istediğinde aç.",
    "click": "Kaydedilmiş sayılar açılır; günde bir kez toplandığından sürekli açmak bir şeyi değiştirmez. Sekmedeki nokta yeni aimusiclist haberi demektir, açınca kaybolur.",
    "care": "Yeni sitenin başta gösterecek az verisi olur. Günler geçtikçe grafikler dolar.",
    "like": "Büyük pazardan plaklarının ne kadar ilgi gördüğünü anlatan haftalık rapor gibi."
  },
  "help.top.mm_two_screens": {
    "t": "Yönetim için iki sayfan var",
    "what": "İki yönetim alanını açıklar: bu sitenin paneli ve meshmelo hesabın. İkisinin adresi ve ne işe yaradığı gösterilir.",
    "when": "Bir ayarı bulamadığında aç. Üstteki ? düğmesiyle açıp kapatabilirsin.",
    "click": "Okumak hiçbir şeyi değiştirmez. İçindeki düğme meshmelo hesabını yeni sekmede açar.",
    "care": "Bu kart yalnızca meshmelo sitelerinde görünür.",
    "like": "Koridordaki 'Dükkân tezgâhı bu tarafta, ana ofis diğer tarafta' tabelası gibi."
  },
  "help.top.php_update": {
    "t": "Şimdi güncelle",
    "what": "PHP sürümünde sitenin programını senin için en yeni sürüme yükseltir.",
    "when": "Yeni sürüm bildirimi göründüğünde ve bir dakikan varsa bas.",
    "click": "Önce onay sorulur. Yaklaşık bir dakika sürer, sonra sayfa yenilenir. Hata çıkarsa eski sürüme kendiliğinden döner.",
    "care": "Şarkıların, ayarların ve sayfaların korunur. Güncelleniyor yazarken sayfayı kapatma. meshmelo sitelerinde bu düğme yoktur; onları meshmelo günceller.",
    "like": "Dükkânın raflarının gece değiştirilmesi gibi; plaklar yine yerli yerinde kalır."
  },
  "help.top.usage_r2_storage": {
    "t": "R2 depolama (ücretsiz 10 GB)",
    "what": "Cloudflare'ın R2 alanında dosyalarının kapladığı yerdir. Büyük kısmını şarkılar oluşturur.",
    "when": "Çok şarkı yüklemeden önce kontrol et.",
    "click": "Yalnızca sayıdır; 10 dakikada bir güncellenir.",
    "care": "Küçük olması daha iyidir. 10 GB'ı aşarsan Cloudflare hesabını ücretlendirir. Alan doluyorsa gereksiz şarkıları sil veya WAV yerine daha küçük MP3 kullan. Aynı Cloudflare hesabındaki diğer depolama alanları da sayılır.",
    "like": "Deponun ne kadar dolu olduğunu gösterir. Yaklaşık 10 GB yer ücretsizdir."
  },
  "help.top.usage_class_a": {
    "t": "Bu ay R2 yazma işlemleri (ücretsiz 1 milyon)",
    "what": "Bu ay R2'ye kaç kez dosya yazıldığını gösterir: yüklemeler, düzenlemeler, değişiklikler ve diğer kayıtlar.",
    "when": "Çok yükleme veya düzenleme yaptığın aylarda kontrol et.",
    "click": "Yalnızca sayıdır; her ay yeniden sıfırdan başlar.",
    "care": "Küçük olması iyidir. Tek değişiklik birkaç yazma, bir kerede 20 şarkı yükleme yaklaşık 60 işlem yapar; 1 milyon çok yüksektir. Silmek ücretsizdir. Sınırı aşınca Cloudflare ücret alır.",
    "like": "Bu ay depoya bir şey koymak için kapının kaç kez açıldığını saymak gibi."
  },
  "help.top.usage_class_b": {
    "t": "Bu ay R2 okuma işlemleri (ücretsiz 10 milyon)",
    "what": "Bu ay R2'den kaç kez veri okunduğunu gösterir. Çoğu, ziyaretçilerin şarkı çalmasından ve siteni açmasından gelir.",
    "when": "Şarkıların çok dinleniyorsa kontrol et.",
    "click": "Yalnızca sayıdır; her ay sıfırlanır.",
    "care": "Sayının artması insanların dinlediğini gösterir ama 10 milyonu geçince Cloudflare ücret alır. Çok hızlı yükseliyorsa dinleyicilerin nereden geldiğini İstatistikler sekmesinden incele.",
    "like": "Dinlemek için depodan kaç kez plak alındığını saymak gibi."
  },
  "help.top.usage_workers": {
    "t": "Bugünkü Workers istekleri (ücretsiz 100.000)",
    "what": "Sitenin bugün ziyaretçilere kaç kez yanıt verdiğidir. Siteyi açmak ve çalınan şarkının her parçası buna sayılır.",
    "when": "Bağlantını paylaştıktan sonra olduğu gibi yoğun günlerde kontrol et.",
    "click": "Yalnızca sayıdır; her gün 00:00 UTC'de (Kore saatiyle 09:00) sıfırlanır.",
    "care": "Günlük 100.000'i aşınca site sıfırlanana kadar durur; ücret çıkmaz. Bütün Cloudflare hesabı birlikte sayılır. PHP sürümünde ses Worker'ı sayılır, sınır aşılınca şarkılar durur. meshmelo sitelerinde bu çubuk görünmez.",
    "like": "Tezgâhtarın günde hizmet verebileceği müşteri sayısı gibi; dolunca dükkân yarına kadar kapanır."
  },
  "help.top.usage_disk_space": {
    "t": "Bu sitenin şarkı ve sayfalarının kullandığı alan",
    "what": "Bu sitenin hosting dosyalarının kapladığı alandır. Çoğunu şarkılar kullanır.",
    "when": "Büyük yükleme yapmadan önce kontrol et.",
    "click": "Yalnızca sayı veya plan sınırın belirliyse çubuktur.",
    "care": "Az olması iyidir. Plan sınırına yaklaşıyorsan gereksiz şarkıları sil veya küçük MP3 dosyaları yükle. Aynı hosting'deki diğer siteler bu sayıya dâhil değildir.",
    "like": "Kiraladığın dükkânda plakların kapladığı yer gibi."
  },
  "help.top.usage_files": {
    "t": "Dosyalar (inodes)",
    "what": "Sitenin hosting alanında kaç dosya tuttuğudur. Hosting şirketleri yalnızca boyutu değil, dosya sayısını da sınırlandırır.",
    "when": "Çok şarkın varsa veya hosting şirketi dosyalar konusunda uyardıysa bak.",
    "click": "Yalnızca sayı veya plan sınırı belirliyse çubuktur.",
    "care": "Az olması iyidir. Her şarkıyla ses, resim ve söz gibi birkaç dosya gelir. Kullanılmayan şarkıları silmek sayıyı azaltır.",
    "like": "Dükkândaki kutuların büyüklüğünden bağımsız olarak kaç kutu olduğunu saymak gibi."
  },
  "help.top.usage_tracks": {
    "t": "Şarkılar",
    "what": "Bu sitedeki şarkı sayısıdır.",
    "when": "Hızlıca bakmak ve bir şarkının ortalama ne kadar yer kullandığını anlamak için.",
    "click": "Yalnızca sayıdır; şarkı yükleyince veya silince değişir.",
    "care": "Bunun için sınır çubuğu yoktur.",
    "like": "Dükkânındaki plakların sayısı gibi."
  },
  "help.top.usage_disk": {
    "t": "Hosting kullanımı (bu site)",
    "what": "Şarkılarını kendi hosting'inde saklayan PHP sürümünde kullanılan alanı, dosya ve şarkı sayısını gösterir.",
    "when": "Hosting planında sınırlar olduğu için çok şarkı yüklemeden önce bak.",
    "click": "Bu yalnızca başlıktır. Sayılar 10 dakikada bir yeniden okunur. [[Yenile]] hemen okur.",
    "care": "Gerçek plan sınırlarını cPanel → Statistics bölümünde bulursun. Kurulumda site ayarlarına yazıldıysa yüzdeli çubuk görünür; yazılmadıysa yalnızca sayılar gösterilir.",
    "like": "Kiraladığın dükkân alanının sayacı gibi. Ne kadar büyüyebileceğini kira sözleşmen belirler."
  },
  "help.top.usage": {
    "t": "Cloudflare ücretsiz kullanım",
    "what": "Cloudflare hesabının ücretsiz haklarından ne kadarını kullandığını gösteren çubuklardır: depolama, aylık yazma ve okuma, günlük istekler.",
    "when": "Ara sıra, özellikle ziyaretçi sayısı arttığında kontrol et.",
    "click": "Bu yalnızca başlıktır. Sayılar 10 dakikada bir okunur. [[Yenile]] şimdi okur.",
    "care": "Az olması iyidir. %70'te turuncu, %90'da kırmızı olur. R2 ücretsiz sınırı aşılırsa ücret çıkar. Workers sınırı aşılırsa site o gün ücretsiz olarak durur. Sayılar yalnızca bu siteyi değil, bütün Cloudflare hesabını kapsar.",
    "like": "Dükkânın elektrik sayacı gibi; fatura gelmeden kontrol et."
  },
  "help.top.usage_refresh": {
    "t": "Yenile",
    "what": "Sonraki 10 dakikalık güncellemeyi beklemeden Cloudflare kullanım sayılarını hemen okur.",
    "when": "Büyük yüklemeden sonra veya yeni kullanım anahtarı eklediğinde bas.",
    "click": "Çubuklar kısa sürede güncellenir ve başlığın yanındaki saat değişir.",
    "care": "Cloudflare'ın sayıları biraz gecikebilir. Bu yüzden hemen yenilesen de bir süre aynı görünebilir.",
    "like": "Sayaç okuyucusunu beklemek yerine gidip sayacı kendin okumak gibi."
  },
  "help.top.usage_connect": {
    "t": "Bağla",
    "what": "Henüz kullanım anahtarı yokken görünür. Bu anahtarla Cloudflare ücretsiz sınırlarını görebilirsin.",
    "when": "Anahtarı eklemek için bas; yaklaşık iki dakika sürer.",
    "click": "Site bilgileri sekmesindeki **Kullanımı gör** kartı açılır; anahtarı yapıştırmaya hazırdır.",
    "care": "Anahtar olmadan site çalışır ama sınıra yaklaşıp yaklaşmadığını göremezsin. Anahtar yalnızca sayıları okur.",
    "like": "Elektrik sayacı takmak gibi. Sayaç olmasa da ışık yanar ama tüketimi bilemezsin."
  },
  "help.top.usage_retoken": {
    "t": "Anahtarı yeniden gir",
    "what": "Kullanım anahtarı kaydedilmiş ancak sayılar okunamamışsa görünür. Nedeni üstte yazılıdır.",
    "when": "Anahtar Cloudflare'da silindiyse, süresi dolduysa veya izinlerinden biri eksikse bas.",
    "click": "Site bilgileri sekmesindeki **Kullanımı gör** kartı açılır; yeni anahtarı oraya yapıştır.",
    "care": "Anahtar bu sitenin bulunduğu Cloudflare hesabında yapılmış olmalı ve Account Analytics · Read ile Account Settings · Read izinlerine sahip olmalıdır. Düzelene kadar son geçerli sayılar görünebilir.",
    "like": "Artık dönmeyen sayaç anahtarını değiştirmek gibi."
  },
  "help.top.usage_uploaded": {
    "t": "Bu panelden yüklenen ses dosyaları",
    "what": "Buradan yüklediğin şarkı dosyalarının toplam boyutudur. Yalnızca bu sitenin şarkıları sayılır.",
    "when": "Depolama çubuğuyla karşılaştır. Çok daha büyükse Cloudflare hesabında başka şeyler de yer kullanıyor olabilir.",
    "click": "Yalnızca sayı; şarkı yükleyince veya silince değişir.",
    "care": "Üstteki satırlar ücretsiz sınırı aşınca ne olacağını anlatır. PHP sürümünde hosting planının sınırlarını nereden öğreneceğin de yazılıdır.",
    "like": "Komşuların kutuları hariç, deponun ne kadarını kendi plaklarının kapladığını göstermek gibi."
  },
  "help.top.mm_upgrade": {
    "t": "Daha fazla kullanım hakkı iste",
    "what": "Bugünkü kullanım %80'e ulaşınca üstte beliren, meshmelo'dan daha yüksek günlük sınır istemeni sağlayan düğmedir.",
    "when": "Siten sık sık günlük ücretsiz kullanım hakkını bitiriyorsa bas.",
    "click": "meshmelo yükseltme sayfası veya e-postası açılır. meshmelo ayarlayana kadar hiçbir şey değişmez.",
    "care": "Çoğu site buna gerek duymaz. Tek bir yoğun gün, sıfırlama sonrası kendiliğinden normale döner.",
    "like": "Dükkân çok kalabalık olduğunda binadan daha güçlü elektrik hattı istemek gibi."
  },
  "help.top.mm_use": {
    "t": "Bugünkü kullanım",
    "what": "meshmelo sitelerinde bugün ücretsiz kullanım hakkının yüzde kaçının kullanıldığını gösterir. Altında son 7 gün vardır.",
    "when": "Bağlantı paylaştıktan sonra olduğu gibi yoğun günlerde kontrol et.",
    "click": "Yalnızca sayıdır. Çubuğun altındaki saatte her gün %0'a döner.",
    "care": "Düşük olması iyidir ama yüksek sayı çok ziyaretçi de demektir. %80'de uyarı çıkar. %100'de ziyaretçilere sıfırlamaya kadar kısa 'yakında döneceğiz' sayfası gösterilir. Yönetim panelin ve aimusiclist.com'daki çalmalar çalışır.",
    "like": "Dükkânın bugünkü elektrik sayacı gibi; dolunca ön kapı yarına kadar kapanır."
  },
  "help.top.mm_use_notify": {
    "t": "%80'i aşınca günde bir e-posta gönder",
    "what": "Günlük kullanım %80'i geçince e-posta uyarısı almak için işaretlenen kutudur.",
    "when": "Bu sayfayı her gün açmıyorsan etkinleştir.",
    "click": "İşaretlediğin veya kaldırdığın anda kaydedilir. Günde en fazla bir e-posta gelir.",
    "care": "Yalnızca uyarır, işlemleri durdurmaz. meshmelo uyarı e-postalarını açmışsa görünür.",
    "like": "Sayaç dolmak üzereyken görevlinin sana mesaj atmasını istemek gibi."
  },
  "help.top.aml_retry": {
    "t": "Şimdi dene",
    "what": "Sonraki otomatik denemeyi beklemeden hemen aimusiclist.com'a bağlanmayı dener.",
    "when": "Durum 'bağlı değil' diyorsa veya gösterilen sorunu düzelttiysen bas.",
    "click": "Satır 'Bağlanıyor…' olur, kısa süre sonra sonucu gösterir. Bağlanınca herkese açık şarkıların aimusiclist.com'a gönderilir.",
    "care": "Sorun aimusiclist.com tarafındaysa tekrar tekrar basmak işe yaramaz. Bir süre bekleyip dene.",
    "like": "Pazarın aramasını beklemek yerine kendin telefon etmek gibi."
  },
  "help.tracks.list": {
    "t": "Şarkılarım",
    "what": "Sitendeki tüm şarkıların listesidir. Parantezde kaç şarkın olduğu yazılır.",
    "when": "Şarkı bulmak, aimusiclist.com'da yayımlamak veya gizlemek, dinlemek, düzenlemek ya da silmek için gel.",
    "click": "Buradakiler gerçekten kaydedilmiş şarkıların. Her satırdaki anahtar ve düğmeler hemen çalışır.",
    "care": "Ses dosyası olmayan şarkılarda **Ses yok** görünür. Dosya eklenene kadar hiçbir sayıya katılmazlar.",
    "like": "Dükkânının stok listesi gibi; her plağın yanında büyük pazarda (aimusiclist.com) olup olmadığı yazılıdır."
  },
  "help.tracks.search": {
    "t": "Şarkı başlıklarında ara",
    "what": "Başlığa göre şarkı bulur. Yazdığın sözcükleri içermeyen başlıklar listeden gizlenir.",
    "when": "Çok şarkın varsa hızlıca bulmak veya birlikte değiştireceğin şarkıları seçmek için kullan.",
    "click": "Yazdıkça liste değişir. Hiçbir şey kaydedilmez veya değiştirilmez. Tüm şarkıları görmek için kutuyu temizle.",
    "care": "Yalnızca başlığa bakar; tür veya sanatçı adına değil. Büyük-küçük harf fark etmez. [[Görünenlerin hepsini seç]] yalnızca aramadan sonra kalanları seçer.",
    "like": "Raflardaki plakların sırtında yazan adlara bakıp aradığını bulmak gibi."
  },
  "help.tracks.nolang": {
    "t": "Yalnızca şarkı dili belirtilmeyenler",
    "what": "Şarkı sözü dilinin henüz belirtilmediği şarkıları gösteren kutudur.",
    "when": "Eski şarkılardan dili eksik olanları bulup topluca düzeltmek için kullan.",
    "click": "Liste hemen değişir, hiçbir şey kaydedilmez. Tüm şarkıları görmek için işareti kaldır. Başlık aramasıyla birlikte çalışır.",
    "care": "Dil seçilene kadar aimusiclist.com şarkıyı sitenin ana dilinde kabul eder. Hızlı yol: kutuyu işaretle, üstteki kutuyla görünenlerin hepsini seç, sonra **Seçili şarkıların dili** ve [[Uygula]] bölümünü kullan.",
    "like": "Hangi dilde söylendiği etiketi olmayan plakları ayırmak gibi."
  },
  "help.tracks.bulk": {
    "t": "Birden çok şarkıyı değiştir",
    "what": "Birden fazla şarkıyı birlikte düzenlediğin alandır. Hiçbiri seçili değilken kısa ipucu, seçince seçilen sayı ve araçlar görünür.",
    "when": "Aynı değişiklik birçok şarkı için geçerliyse tek tek düzenlemek yerine kullan.",
    "click": "Şarkıları işaretlemek kaydetmez. Buradaki her araç kendi [[Uygula]] veya diğer düğmesine basınca kaydeder. Sonra işaretler temizlenir.",
    "care": "Her satırın solundaki kutuyla şarkı seç veya üstteki kutuyla görünenleri seç. Duygu ve diğer ek bilgiler, şarkı dili, yapay zekâ aracı ve ziyaretçi dinlenme sayıları (sayılıyorsa) topluca değiştirilebilir.",
    "like": "Her rafa gitmeden birçok plağa birden etiket yapıştırmak gibi."
  },
  "help.tracks.bulk_lang": {
    "t": "Seçili şarkıların dili",
    "what": "İşaretli şarkıların sözlerinin dilini topluca ayarlar. İkinci dil de eklenebilir.",
    "when": "Aynı dilde çok şarkın varsa veya dili eksik olanları düzeltmek için kullan.",
    "click": "Dil seçmek tek başına kaydetmez. Alttaki [[Uygula]] düğmesine bas.",
    "care": "Bu, sitenin değil şarkı sözlerinin dilidir. Sözsüzse **Enstrümantal (sözsüz)** seç. Başka dille birlikte kullanılamaz. aimusiclist.com dil listelerinde bunu kullanır.",
    "like": "Birçok plak etiketine bir anda 'Korece söyleniyor' yazmak gibi."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Uygula",
    "what": "Seçtiğin şarkı dilini bütün işaretli şarkılara kaydeder.",
    "when": "Şarkıları ve dili seçtikten sonra bas.",
    "click": "Hemen kaydedilir, değişen şarkı sayısı gösterilir ve işaretler temizlenir. Yeni dil kısa süre sonra aimusiclist.com'da görünür.",
    "care": "Eski dilin üzerine yazılır. Hiç şarkı seçmediysen önce seçmen hatırlatılır.",
    "like": "Yeni dil etiketlerini plaklara gerçekten yapıştırmak gibi."
  },
  "help.tracks.select": {
    "t": "Şarkıları seç",
    "what": "Üstteki kutu listede görünen tüm şarkıları, satırların yanındaki kutular tek bir şarkıyı seçer.",
    "when": "Listenin üstündeki toplu değişiklikleri yapmadan önce kullan.",
    "click": "İşaretlemek yalnızca seçim yapar; kaydetmez. Üstte kaç şarkı seçildiği ve değişiklik araçları açılır.",
    "care": "Üstteki kutu yalnızca şu anda görünenleri seçer. Arama yaptıysan veya **Yalnızca şarkı dili belirtilmeyenler** filtresini kullandıysan gizli şarkılar seçilmez.",
    "like": "Etiketlemeden önce değiştireceğin plakları parmağınla işaretlemek gibi."
  },
  "help.tracks.pub": {
    "t": "aimusiclist'te herkese açık",
    "what": "Her satırdaki anahtar şarkının aimusiclist.com'da da görünmesini belirler. Açık da olsa kapalı da olsa kendi sitende kalır.",
    "when": "Daha çok kişi dinlesin istiyorsan aç, yalnızca kendi sitende olsun istiyorsan kapat.",
    "click": "Bastığın anda kaydedilir. Açarsan 1–2 dakikada aimusiclist.com'da görünür, kapatırsan oradan kaldırılır.",
    "care": "10 veya daha çok şarkın varsa en az 10'u açık kalmalıdır. Daha azsa hepsi açık kalır (başlığın altındaki kuralı oku). Soluk anahtar şarkının açık veya ileride açılacak bir albümde olduğu anlamına gelir; önce albümü gizle.",
    "like": "Dükkânındaki plaklardan hangilerini büyük pazarın (aimusiclist.com) rafına koyacağını seçmek gibi."
  },
  "help.tracks.col_title": {
    "t": "Başlık",
    "what": "Şarkının resmi, başlığı, sanatçı adı, dili ve küçük etiketleri görünür.",
    "when": "Şarkı ayrıntılarını bir bakışta kontrol et.",
    "click": "Yalnızca bilgi gösterir. Değiştirmek için satırdaki [[Düzenle]] düğmesine bas.",
    "care": "Etiketler: **SRT** = zamanlı söz var, **✦ ad** = kullanılan yapay zekâ aracı, **Ses yok** = ses dosyası eksik, **Yayımlanmış albümde** = herkese açık albümde. Telefonda dinlenme sayısı da burada görünür.",
    "like": "Plağın ön kapağı gibi: resim, isim, yapan kişi."
  },
  "help.tracks.col_genres": {
    "t": "Müzik türleri",
    "what": "Şarkının en fazla üç türünü gösterir. İlk ve belirgin olan ana tür, diğerleri ek türdür.",
    "when": "Şarkının doğru müzik türünde olup olmadığını kontrol et.",
    "click": "Yalnızca bilgi gösterir. Değiştirmek için satırdaki [[Düzenle]] düğmesine bas.",
    "care": "Ana tür şarkının aimusiclist.com'da hangi menüye gireceğini belirler. Ek türler başlığın yanında görünür. Telefonda bu sütun gizlenir.",
    "like": "Plağın büyük pazarda hangi köşeye ait olduğunu gösteren raf etiketi gibi."
  },
  "help.tracks.col_length": {
    "t": "Süre",
    "what": "Şarkının dakika ve saniye cinsinden uzunluğudur (örneğin 3:25).",
    "when": "Örneğin şarkı çok kısa görünüyorsa doğru dosyanın yüklendiğini kontrol et.",
    "click": "Yalnızca bilgi gösterir; ses dosyasından alınır. Değiştirmek için [[Düzenle]] üzerinden yeni dosya yükle.",
    "care": "Şarkı 30 saniye ile 15 dakika arasında olmalı. Telefonda bu sütun gizlenir.",
    "like": "Plak kapağının arkasında yazan çalma süresi gibi."
  },
  "help.tracks.col_plays": {
    "t": "Dinlenmeler",
    "what": "Her şarkının kendi sitende toplam kaç kez çalındığıdır. Sayının üstüne gelince son 7 gün ve bugün görünür.",
    "when": "En çok dinlenen şarkıları görmek için kullan. Yüksek sayı ilginin fazla olduğunu gösterir; hangi şarkıları yayımlayacağına veya albüme koyacağına yardımcı olur.",
    "click": "Yalnızca sayı gösterir. Günde bir kez veya İstatistikler sekmesindeki [[Şimdi yenile]] düğmesine basınca güncellenir.",
    "care": "aimusiclist.com'daki çalmalar buna dâhil değildir. Yalnızca siten dinlenmeleri sayıyorsa görünür. Düşükse sonraki güncellemeyi bekle veya [[Şimdi yenile]] düğmesine bas. Sayının altında **Ziyaretçilerden gizli** yazıyorsa ziyaretçiler göremez.",
    "like": "Her plağın dükkânında kaç kez çalındığını gösteren sayaç gibi."
  },
  "help.tracks.row_buttons": {
    "t": "Şarkı düğmeleri",
    "what": "Her satırın sonundaki [[Dinle]], [[Düzenle]] ve [[Sil]] düğmeleridir.",
    "when": "Şarkıyı dinlemek, bilgilerini değiştirmek veya kaldırmak için kullan.",
    "click": "[[Dinle]] şarkıyı burada çalar ([[Durdur]] ile durur). [[Düzenle]] üstte düzenleme formunu açar. [[Sil]] onay ister, ardından şarkıyı ve ses dosyasını hemen kaldırır.",
    "care": "Silme geri alınamaz; şarkı aimusiclist.com'dan da kaybolur. [[Dinle]] yalnızca ses dosyası varsa görünür. Açık albümdeki şarkıyı silmek albümü 6'nın altına düşürecekse silemezsin.",
    "like": "Tezgâhta bir plak için duran araçlar gibi: çal, etiketini düzelt veya tamamen kaldır."
  },
  "help.tracks.bulk_plays": {
    "t": "Ziyaretçilere dinlenme sayılarını göster",
    "what": "Seçili şarkıların kaç kez çalındığını ziyaretçilerin görüp görmeyeceğini belirler.",
    "when": "Yeni şarkılarda sayıyı gizlemek veya tekrar göstermek için kullan.",
    "click": "[[Göster]] veya [[Gizle]] düğmesine basınca seçili şarkıların hepsine hemen kaydedilir.",
    "care": "Ziyaretçiler sayıları ancak Site bilgileri bölümündeki **Ziyaretçilere dinlenme sayılarını göster** açıksa görebilir. Siten dinlenmeleri sayıyorsa bu kutu görünür. Sen burada sayıları her zaman görürsün.",
    "like": "Hangi plakların üstünde '120 kez satıldı' etiketi olacağını seçmek gibi."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Göster",
    "what": "Seçili şarkıların dinlenme sayılarını ziyaretçilere gösterir.",
    "when": "Daha önce gizlediğin şarkıların sayılarını göstermek için bas.",
    "click": "Hemen kaydedilir, işaretler temizlenir. Tekrar gizlemek için [[Gizle]] düğmesine basabilirsin.",
    "care": "Site bilgileri bölümündeki **Ziyaretçilere dinlenme sayılarını göster** kapalıysa ziyaretçi hiçbir sayı görmez.",
    "like": "Plakların üstüne 'bu kadar kez çalındı' etiketini tekrar takmak gibi."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Gizle",
    "what": "Seçili şarkıların dinlenme sayılarını ziyaretçilerden gizler.",
    "when": "Yeni yüklediğin şarkılar gibi sayısını henüz göstermek istemediklerinde bas.",
    "click": "Hemen kaydedilir ve işaretler temizlenir. Site bilgileri anahtarı açıksa bu listede sayının altında **Ziyaretçilerden gizli** yazar. [[Göster]] ile geri alabilirsin.",
    "care": "Yalnızca sayı gizlenir. Şarkılar çalınır ve dinlenmeler sayılmaya devam eder.",
    "like": "Bazı plaklardan 'kaç kez çalındı' etiketini çıkarmak gibi. Plaklar rafta kalır."
  },
  "help.tracks.plays_show": {
    "t": "Bu şarkının dinlenme sayısını ziyaretçilere göster",
    "what": "Ziyaretçilerin şarkının kendi sitende kaç kez çalındığını ('1.234 dinlenme' gibi) görüp görmeyeceğini belirler.",
    "when": "Bir şarkının sayısını gizli tutmak istiyorsan işaretini kaldır.",
    "click": "[[Şarkıyı kaydet]] düğmesine basınca kaydedilir. Ziyaretçi sayıları günde bir kez güncellenir.",
    "care": "Ziyaretçiler yalnızca Site bilgilerindeki 'Ziyaretçilere dinlenme sayılarını göster' açıksa görür. Oturumun açıkken sitendeki tüm sayıları kendin görürsün.",
    "like": "Dükkândaki plağa küçük satış sayısı etiketi asıp asmamayı seçmek gibi."
  },
  "help.site.plays": {
    "t": "Dinlenme sayıları",
    "what": "Her şarkının kendi sitende kaç kez çalındığını gösteren sayıların ayarlarıdır. aimusiclist.com'daki dinlenmeler buna katılmaz.",
    "when": "Ziyaretçilerin bu sayıları görüp göremeyeceğini seçmek için gel.",
    "click": "Bu başlık yalnızca kartı anlatır. Kart istatistiklerin başlamasını bekliyorsa henüz sayım açılmamıştır; İstatistikler sekmesi nasıl açılacağını gösterir.",
    "care": "Bu sayılar yalnızca kendi sitene aittir. aimusiclist.com'a gönderilmez ve sıralamalarını etkilemez.",
    "like": "Dükkândaki pikabın küçük sayacı gibi; her plak çalındığında artar."
  },
  "help.site.plays_switch": {
    "t": "Ziyaretçilere dinlenme sayılarını göster",
    "what": "Açıkken sitendeki her şarkıda '1.234 dinlenme' gibi sayı görünür. Başlangıçta kapalıdır.",
    "when": "Hangi şarkıların sevildiğini göstermek için aç; göstermek istemiyorsan kapalı tut.",
    "click": "Bastığın anda kaydedilir. Sayılar günde bir veya İstatistikler sekmesinde [[Şimdi yenile]] ile hemen güncellenir. Yüksek sayı daha çok dinlenme demektir. Bazı şarkıları gizlemek için şarkı listesi veya düzenleme ekranını kullan.",
    "care": "Oturumun açıkken gizli sayılar dâhil hepsini sitende görürsün. Yalnızca sen görürsün; ziyaretçiler değil.",
    "like": "Dükkândaki pikabın sayacını müşterilerin görebileceği yere koymak gibi."
  },
  "help.site.likes": {
    "t": "Beğeniler",
    "what": "Şarkılarındaki ♥ düğmesinin ayarlarıdır. Ziyaretçiler basarak şarkıyı beğendiğini gösterir.",
    "when": "Bütün sitede bu düğmeyi göstermek veya gizlemek için gel.",
    "click": "Bu başlık yalnızca açıklamadır; alttaki anahtar çalışır. Kart istatistikleri açmanı söylüyorsa beğeniler henüz sayılamaz; İstatistikler sekmesine bak.",
    "care": "Beğeniler yalnızca kendi sitende sayılır; aimusiclist.com'a gönderilmez ve sıralamasını değiştirmez.",
    "like": "Müşterilerin sevdikleri plakların yanına kalp yapıştırdığı pano gibi."
  },
  "help.site.likes_switch": {
    "t": "Beğeni düğmesini göster",
    "what": "Sitendeki her şarkıda ♥ düğmesini gösterir veya gizler. Başlangıçta açıktır.",
    "when": "Dinleyicilerin hangi şarkıları sevdiğini görmek için açık tut; kalp istemiyorsan kapat.",
    "click": "Bastığın anda kaydedilir. Ziyaretçiler giriş yapmadan ♥ basabilir, tekrar basıp geri alabilir. Sayılar günde bir güncellenir. Yüksek sayı daha çok beğeni demektir.",
    "care": "Düğme yalnızca istatistikler açıksa görünür. Kapatmak önceden verilmiş kalpleri silmez; tekrar açınca geri gelir.",
    "like": "Dükkândaki kalp etiketleri panosunu asmak veya indirmek gibi."
  },
  "help.site.add": {
    "t": "aimusiclist'e ekle",
    "what": "'+ aimusiclist' düğmesinin ayarlarıdır. Ziyaretçiler bununla şarkını aimusiclist.com'daki kendi çalma listelerine ekleyebilir.",
    "when": "Bu düğmeyi sitende göstermek veya gizlemek için gel.",
    "click": "Bu başlık yalnızca açıklamadır; alttaki anahtar çalışır. Önce bağlantı kurmanı söylüyorsa siten henüz aimusiclist'e bağlı değildir ve düğme gösterilemez.",
    "like": "Müşterinin plağı aimusiclist.com'daki kendi sepetine götürmesi için üzerindeki 'büyük pazara ekle' etiketi gibi."
  },
  "help.site.add_switch": {
    "t": "'+ aimusiclist' düğmesini göster",
    "what": "Şarkılarının yanında ve oynatıcıda '+ aimusiclist' düğmesini gösterir veya gizler. Başlangıçta açıktır.",
    "when": "Dinleyiciler şarkılarını aimusiclist çalma listelerine ekleyip tekrar bulabilsin istiyorsan açık tut; istemiyorsan kapat.",
    "click": "Bastığın anda kaydedilir. Ziyaretçi düğmeye basınca küçük aimusiclist penceresi açılır (telefonda yeni sekme). Giriş yapmadan çalma listesi seçebilir.",
    "care": "Düğme yalnızca aimusiclist'te herkese açık şarkılarda ve siten bağlandıktan sonra görünür. Bu anahtar şarkıları açık veya gizli yapmaz.",
    "like": "Büyük pazarda da satılan plakların üzerine 'sepetime ekle' düğmesi koymak gibi."
  },
  "help.tracks.bulk_mood": {
    "t": "Seçili şarkıların duygusunu değiştir",
    "what": "İşaretli şarkıların duygusunu (örneğin Sakin veya Enerjik) topluca ayarlar. **Neyi değiştireceksin** bölümünden başka alan seçersen o ek bilgiyi ayarlar.",
    "when": "Çok şarkı yüklediğinde veya şarkılarını duygularına göre gruplamak istediğinde kullan.",
    "click": "[[Uygula]] düğmesine basana kadar bir şey olmaz. Sonra seçili şarkılar aynı değeri alır ve kaydedilir. Kısa süre sonra sitende ve aimusiclist.com'da görünür.",
    "care": "Bu şarkıların eski değerleri değiştirilir. Bu alan yalnızca aimusiclist.com seçimli ek bilgiler sunuyorsa görünür.",
    "like": "Müşteriler duygusuna göre bulabilsin diye pek çok plağa aynı 'sakin' renk etiketini yapıştırmak gibi."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Neyi değiştireceksin?",
    "what": "Seçili şarkılar için hangi ek bilgiyi ayarlayacağını seçer. İlk seçenek duygu durumudur.",
    "when": "Birçok şarkıda duygu dışında başka bir bilgi ayarlamak istediğinde değiştir.",
    "click": "Burada seçim yapmak yalnızca alttaki seçenekleri değiştirir. [[Uygula]] düğmesine basılmadan kaydedilmez.",
    "care": "Liste aimusiclist.com'dan gelir ve zamanla büyüyebilir. Yalnızca listeden seçilebilen bilgiler burada görünür.",
    "like": "Plaklara yapıştıracağın etiketin türünü, duygu veya başka bir bilgiyi seçmek gibi."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Uygula",
    "what": "Seçtiğin değeri bütün işaretli şarkılara kaydeder.",
    "when": "Şarkıları işaretleyip değer seçtikten sonra bas.",
    "click": "Hemen kaydedilir; kısa mesajda kaç şarkının değiştiği yazılır ve işaretler temizlenir. aimusiclist.com kısa süre sonra gösterir.",
    "care": "**— temizle (değer yok) —** seçersen veya çoklu seçenekten hiçbirini işaretlemezsen bu bilgi şarkılardan kaldırılır. Şarkı seçmediysen önce seçmen istenir.",
    "like": "Etiketleri plaklara gerçekten yapıştırdığın an gibi."
  },
  "help.top.lang_fix": {
    "t": "Şimdi ayarla",
    "what": "Şarkı dili eksik olanların tümünü seçer, böylece tek seferde dil verebilirsin.",
    "when": "Şarkı dili uyarısından bas.",
    "click": "Şarkılar sekmesi yalnızca bu şarkıları işaretli olarak açar. Toplu değişiklik kutusunda dil alanı görünür. Dili seçip uygula; o zamana kadar hiçbir şey kaydedilmez.",
    "care": "Şarkılar farklı dillerdeyse bazı işaretleri kaldırıp birkaç turda yap.",
    "like": "Dilsiz etiketli bütün plakları tek masaya toplayıp birlikte etiketlemek gibi."
  },
  "help.tracks.aml_box": {
    "t": "aimusiclist.com'da da yayımla",
    "what": "Şarkının aimusiclist.com'a da gönderilip gönderilmeyeceğini belirler. Kendi sitende her durumda görünür.",
    "when": "Dünya dinlesin ve Top 100 şansı olsun istiyorsan işaretli tut; yalnızca sitende kalsın istiyorsan kaldır.",
    "click": "Şarkı yüklenince veya [[Şarkıyı kaydet]] düğmesine basınca kaydedilir. Yayımlananlar birkaç dakika içinde aimusiclist.com'da görünür. Sonra listeden değiştirebilirsin.",
    "care": "En az 10 şarkı açık kalmalıdır (toplam 10'dan azsa hepsi). Bu yüzden yeni şarkı işaretsiz olsa bile açılabilir veya işaretsiz kaydetme reddedilebilir. Açık albümdeki şarkının işareti sabit kalır; önce albümü gizle.",
    "like": "Dükkânındaki plaklardan hangilerinin büyük pazarda da sergileneceğini seçmek gibi."
  },
  "help.tracks.upload": {
    "t": "Şarkı yükle",
    "what": "Yeni şarkıları sitene eklediğin yerdir. Ses dosyalarını seçer, her şarkının bilgilerini doldurur ve yükleme düğmesine basarsın.",
    "when": "Yeni şarkın oldukça kullan. Bir kerede en fazla 20 şarkı gönderebilirsin.",
    "click": "Dosya seçmek yalnızca onları listeye ekler. [[… şarkıyı yükle]] düğmesine basana kadar kaydedilmez. Sonra şarkılar hemen sitende görünür.",
    "care": "MP3, M4A veya WAV olabilir. Her biri 30 saniye–15 dakika uzunluğunda ve en fazla 15 MB olmalıdır.",
    "like": "Yeni plakların raflara gitmeden önce dükkâna girdiği arka kapı gibi."
  },
  "help.tracks.choose": {
    "t": "Dosya seç",
    "what": "Bilgisayarından ses dosyaları seçmek için pencere açar. Dosyaları bu kutuya sürükleyebilirsin.",
    "when": "Yüklemeye başlarken kullan. Birden çok dosya seçebilirsin.",
    "click": "Dosyalar alttaki listeye eklenir, henüz yüklenmez. Yanlış türde dosyada hemen 'Başarısız' yazar.",
    "care": "Listede en fazla 20 dosya bulunur; fazlası alınmaz. MP3 ve M4A en fazla 15 MB olabilir. WAV burada 320 kbps MP3'e dönüştürülür, o dosya da 15 MB'ı aşmamalı (yaklaşık 6,5 dakika). Her şarkı 30 saniye–15 dakika olmalıdır.",
    "like": "Plakları sepete koymak gibi; sepeti içeri taşımadan rafa yerleşmezler."
  },
  "help.tracks.name_tags": {
    "t": "Dosya adındaki ( ) bölümünden tür, duygu ve dili oku",
    "what": "Açıksa 'Midnight Rain (R&B, Neo Soul; Romantic, en)' gibi adları otomatik çözer. Kutuları doldurur, başlığı 'Midnight Rain' yapar.",
    "when": "Şarkılara yapay zekâ kılavuzundaki gibi ad veriyorsan açık tut. ( ) asıl başlığın parçasıysa kapat.",
    "click": "Liste hemen yeniden okunur. Yalnızca elle değiştirmediğin kutular doldurulur. Tarayıcı seçimini hatırlar.",
    "care": "';' işaretinden önce türler (ilki ana tür), sonra duygu ve dil kodu gelir. Tanınmayan kelimeler atlanıp gri gösterilir. (Live) veya (feat. X) gibi ifadeler başlıkta kalır.",
    "like": "Plak kutusunun etiketini okuyup senin için raf etiketini yazan görevli gibi."
  },
  "help.tracks.common": {
    "t": "Bu yüklemedeki tüm şarkılara uygula",
    "what": "Bu başlığın altındaki bilgiler bu yüklemenin bütün şarkılarına yazılır: yapay zekâ aracı, sanatçı, ek bilgiler ve aimusiclist.com'da yayımlama.",
    "when": "Yükleme düğmesine basmadan önce bir kez ayarla.",
    "click": "Yüklemeden kaydedilmez. Tür, duygu ve şarkı dili burada değildir; her dosya için yukarıda seçersin.",
    "care": "Bir şarkı için farklı bilgi gerekiyorsa önce yükle, sonra listeden [[Düzenle]] ile değiştir.",
    "like": "Tek tek plaklara değil, bütün sepete yapıştırılan etiket gibi."
  },
  "help.tracks.artist": {
    "t": "Sanatçı",
    "what": "Şarkının söyleyeni veya yapımcısı olarak görünen addır. İlk seçenek site adındır.",
    "when": "Çoğu şarkıda site adını bırak. Başka bir sanatçı adıyla yaptığın şarkıda onu seç.",
    "click": "Yüklerken veya [[Şarkıyı kaydet]] düğmesiyle kaydedilir. Site adını kullanırsan daha sonra siteyi yeniden adlandırınca şarkının adı da onu izler.",
    "care": "Diğer sanatçı adları Site bilgileri sekmesindeki 'Diğer sanatçılar' bölümünden gelir (en fazla 20 ad). Önce oraya ekle.",
    "like": "Plak kapağında başlığın altındaki sanatçı adı gibi."
  },
  "help.tracks.up_start": {
    "t": "… şarkıyı yükle",
    "what": "Bekleyen dosyaları birer birer sitene gönderir. Düğmedeki sayı bekleyen şarkı sayısıdır.",
    "when": "Her dosyanın ana türünü ve şarkı dilini seçtikten sonra bas.",
    "click": "Her satır ilerlemeyi gösterir. Hepsi bitince şarkılar sitende olur; açık şarkılar en sonunda birlikte aimusiclist.com'a gönderilir.",
    "care": "Gerekli kutu boşsa düğme çalışmaz. Gönderim bitene kadar sayfayı açık tut; dosyaları bu sayfa gönderir. Bazıları başarısız olsa da diğerleri kaydedilir.",
    "like": "Sepeti dükkâna taşıyıp her plağı rafa yerleştirmek gibi."
  },
  "help.tracks.up_retry": {
    "t": "Başarısız şarkıları yeniden dene",
    "what": "Bağlantı koptuğu için yüklenemeyenler gibi yalnızca başarısız şarkıları tekrar gönderir.",
    "when": "Bazı yüklemeler başarısızsa görünür. İnternetini kontrol ettikten sonra bas.",
    "click": "Başarısız şarkılar yeniden gönderilir. Önceden kaydedilmiş şarkının yalnızca sesi gönderilir; ikinci kez oluşturulmaz.",
    "care": "Yanlış dosya türü yeniden denenemez. Süre veya boyut nedeniyle başarısızsa dosyayı düzelt, satırı kaldır ve tekrar ekle.",
    "like": "Sepetten yolda düşen plakları almak için geri dönmek gibi."
  },
  "help.tracks.up_clear": {
    "t": "Listeyi temizle",
    "what": "Bütün yükleme listesini tek seferde boşaltır.",
    "when": "Yükleme bittiğinde veya baştan başlamak istediğinde kullan.",
    "click": "Tüm satırlar hemen kaybolur. Daha önce yüklenen şarkılar sitende kalır.",
    "care": "Yükleme sürerken basılamaz. Henüz yüklenmeyen dosyalar için doldurduğun kutular kaybolur.",
    "like": "Sepeti boşaltmak gibi; rafa konmuş plaklar yerinde kalır."
  },
  "help.tracks.edit": {
    "t": "Düzenle",
    "what": "Yüklenmiş bir şarkının bilgilerini değiştiren formdur. Şarkı listesindeki [[Düzenle]] düğmesiyle açılır.",
    "when": "Başlık, tür, dil, sanatçı veya diğer bilgileri düzeltmek ya da yeni ses dosyası koymak için kullan.",
    "click": "Üst bölümdeki değişiklikler yalnızca [[Şarkıyı kaydet]] düğmesiyle kaydedilir. Alttaki şarkı resmi ve sözleri değiştiği anda kaydedilir.",
    "care": "Form açıkken yükleme kartının yerini alır. [[İptal]] veya kaydet ile yükleme kartına dönersin.",
    "like": "Bir plağı raftan alıp etiketini düzeltmek gibi."
  },
  "help.tracks.title": {
    "t": "Başlık",
    "what": "Şarkının kendi sitende ve aimusiclist.com'da görünen adıdır.",
    "when": "Dosya adından gelen başlık yanlışsa veya düzeltmek istiyorsan değiştir.",
    "click": "[[Şarkıyı kaydet]] düğmesine basınca kaydedilir. Herkese açık şarkının yeni adı biraz sonra aimusiclist.com'da görünür.",
    "care": "Başlık boş olamaz ve en fazla 100 karakter olabilir.",
    "like": "Plak kapağına büyük yazılan ad gibi."
  },
  "help.tracks.replace_audio": {
    "t": "Ses dosyasını değiştir (isteğe bağlı)",
    "what": "Şarkının sesini yenisiyle değiştirmek için buradan dosya seç. Başlık, türler, resim ve sözler aynı kalır.",
    "when": "Daha iyi sürüm yaptığında veya yanlış dosya yüklediğinde kullan.",
    "click": "[[Şarkıyı kaydet]] düğmesine kadar bir şey olmaz. Ardından yeni dosya gönderilir, eskisinin yerini alır.",
    "care": "Kaydedince eski ses silinir; bilgisayarında kopyası olsun. Yükleme kuralları geçerli: MP3, M4A veya WAV, 30 saniye–15 dakika, en fazla 15 MB.",
    "like": "Aynı plağın kapağına yeni bir plak koymak gibi."
  },
  "help.tracks.save": {
    "t": "Şarkıyı kaydet",
    "what": "Üstteki düzenleme formunda değiştirdiğin bilgileri kaydeder.",
    "when": "Başlık, türler, dil ve diğer kutuları düzenledikten sonra bas.",
    "click": "Değişiklikler kaydedilir, form kapanır. Siten hemen, açık şarkılar aimusiclist.com'da biraz sonra güncellenir. Yeni ses seçtiysen o da yüklenir ve ilerlemesi gösterilir.",
    "care": "Ana tür boşsa veya şarkıyı gizlemek 10 açık şarkı sınırını bozuyorsa kaydetme reddedilir. Kırmızı mesaj nedenini anlatır; hiçbir şey kaydedilmez.",
    "like": "Düzeltilmiş etiketiyle plağı yeniden rafa koymak gibi."
  },
  "help.tracks.cancel": {
    "t": "İptal",
    "what": "Üstteki düzenleme formunu kaydetmeden kapatır.",
    "when": "Yanlış şarkıyı açtıysan veya vazgeçtiysen kullan.",
    "click": "Form hemen kapanır, yükleme kartı geri gelir. Kaydetmediğin değişiklikler kaybolur.",
    "care": "Şarkı resmi ve sözleri değiştirildiği anda kaydedildiğinden İptal bunları geri almaz.",
    "like": "Etiketine dokunmadan plağı rafa geri koymak gibi."
  },
  "help.tracks.image": {
    "t": "Şarkı resmi",
    "what": "Şarkının küçük görselidir. Sitende ve aimusiclist.com'da oynatma düğmesinin arkasında görünür.",
    "when": "Varsayılan resim yerine şarkıya özel görsel eklemek istediğinde değiştir.",
    "click": "Alttaki düğmeler hemen çalışır; [[Şarkıyı kaydet]] düğmesini beklemez.",
    "care": "Her şarkıya yüklenirken varsayılan resim verilir. Senin görselin küçük kare (100×100), yeterince büyükse ayrıca daha büyük kopya olarak kaydedilir.",
    "like": "İnsanların oynatmadan önce gördüğü plak kapağı gibi."
  },
  "help.tracks.image_lg": {
    "t": "Büyük kartlarda resim net olsun",
    "what": "Bu not, şarkı görselinin yalnızca küçük sürümü olduğunu gösterir. aimusiclist.com'daki Top 100'ün üstü gibi büyük kartlarda bulanık görünebilir.",
    "when": "Büyük görseller eklenmeden önce veya çok küçük resimden yüklenen şarkılarda görünür.",
    "click": "[[Görseli değiştir]] düğmesine basıp resmi yeniden yükle. Büyük sürüm kaydedilince not kaybolur.",
    "care": "Kırptığın bölüm en az 200 piksel genişliğinde olsun. Daha küçük resimden büyük sürüm üretilemez.",
    "like": "Küçük plak kapağını vitrin için poster boyutunda yeniden bastırmak gibi."
  },
  "help.tracks.image_change": {
    "t": "Resmi değiştir",
    "what": "Bilgisayarından resim seçip şarkı görseli olarak kullanmanı sağlar.",
    "when": "Şarkıya özel görsel eklemek veya mevcut resmi değiştirmek için kullan.",
    "click": "Resmi kırpıp küçülteceğin pencere açılır. [[Görseli kaydet]] düğmesine basınca hemen kaydedilir ve sitende görünür. Açık şarkının resmi biraz sonra aimusiclist.com'da da görünür.",
    "care": "JPG, PNG, WebP veya GIF; en fazla 2 MB. Orijinal dosyan değil, küçültülmüş resim yüklenir.",
    "like": "Plağa yeni bir kapak takmak gibi."
  },
  "help.tracks.image_reset": {
    "t": "Varsayılan resme dön",
    "what": "Yüklediğin resmi kaldırıp şarkının varsayılan görselini geri getirir.",
    "when": "Bu şarkıda artık kendi resmini istemiyorsan kullan.",
    "click": "Onay sormadan hemen yapılır. Siten varsayılan resmi gösterir.",
    "care": "Yüklediğin görselin büyük sürümü dâhil silinir. Tekrar kullanmak istersen [[Görseli değiştir]] ile yeniden yükle.",
    "like": "Özel kapağı çıkarıp sıradan dükkân kapağını geri takmak gibi."
  },
  "help.tracks.lyrics": {
    "t": "Şarkı sözleri (.srt)",
    "what": "Şarkının sözlerini zamanlarıyla birlikte içeren .srt dosyasıdır.",
    "when": "Dinleyiciler şarkı sözlerini okuyabilsin istediğinde ekle. Birçok müzik yapay zekâ aracı .srt dosyası verebilir.",
    "click": "Yükleme ve silme [[Şarkıyı kaydet]] düğmesini beklemeden yapılır. Ziyaretçiler sitende SRT işaretine basınca zamanlar olmadan sözleri görür.",
    "care": "Dosya .srt ile bitmeli, UTF-8 metin olmalı ve en fazla 100 KB olmalı. 00:00:01,000 --> 00:00:04,000 gibi zaman satırları içermelidir.",
    "like": "Plak kapağının içine konan şarkı sözü kâğıdı gibi."
  },
  "help.tracks.lyrics_upload": {
    "t": ".srt yükle / .srt değiştir",
    "what": "Bu şarkı için bilgisayarından .srt söz dosyası seçer. Zaten söz varsa 'Değiştir' yazar.",
    "when": "Söz eklemek veya yanlış sözleri yeni dosyayla düzeltmek için kullan.",
    "click": "Dosyayı seçince hemen kontrol edilip kaydedilir. Eski sözler varsa yerini alır. Hatalı dosyada kırmızı mesaj görünür.",
    "care": "Yalnızca UTF-8 olarak kaydedilmiş, en fazla 100 KB .srt kabul edilir. Zaman satırı olmayan dosya reddedilir.",
    "like": "Plak kapağına yeni söz kâğıdı koymak gibi."
  },
  "help.tracks.lyrics_view": {
    "t": "Dosyayı görüntüle",
    "what": "Şarkı için kaydedilen söz dosyasını açar.",
    "when": "Doğru sözlerin kaydedildiğini kontrol etmek için kullan.",
    "click": "Dosya zaman satırlarıyla birlikte yeni sekmede açılır; hiçbir şey değişmez.",
    "like": "Söz kâğıdını kapaktan çıkarıp okumak gibi."
  },
  "help.tracks.lyrics_delete": {
    "t": "Sözleri sil",
    "what": "Bu şarkının sözlerini kaldırır.",
    "when": "Sözler yanlışsa ve henüz yenisi yoksa veya şarkının sözleri olmamalıysa kullan.",
    "click": "Önce onay ister. Evet dersen sözler hemen silinir, SRT işareti kaybolur.",
    "care": "Geri alınamaz. Sözleri geri getirmek için .srt dosyasını yeniden yüklemelisin.",
    "like": "Söz kâğıdını kapaktan çıkarıp atmak gibi."
  },
  "help.tracks.upguide": {
    "t": "Tür ve duyguyu otomatik doldur",
    "what": "Her şarkının türünü, duygusunu ve dilini elle seçme zahmetini azaltan kısa kılavuzdur. Kılavuz dosyasını ücretsiz yapay zekâya verirsin; şarkıya özel biçimde ad verir.",
    "when": "Yeni şarkı yapmadan önce bir kez oku. Özellikle toplu yüklemelerde işe yarar.",
    "click": "✕ kılavuzu küçük düğmeye indirger; düğme yeniden açar. Tarayıcı son durumunu hatırlar.",
    "care": "Kılavuz müziğin nasıl üretildiğini değiştirmez; yalnızca şarkının adını belirler.",
    "like": "Plak gelmeden kutusuna raf etiketi yazmak gibi; kapıda ayrıca ayırman gerekmez."
  },
  "help.tracks.upguide_dl": {
    "t": "Yapay zekâ için kılavuz dosyasını indir",
    "what": "aimusiclist.com'dan yapay zekânın okuyabileceği düz metin kılavuzunu indirir.",
    "when": "Şarkı yapmadan önce ChatGPT, Claude veya Gemini'ye (ücretsiz sürüm de olur) dosyayı ekle ve şarkı başlığı iste.",
    "click": "Dosya bilgisayarına kaydedilir. Siten değişmez.",
    "care": "Müzik yapay zekâsının verdiği dosya adını şarkıyı indirirken koru. Adın ( ) kısmı buradaki kutuları doldurur.",
    "like": "Her etiketin aynı biçimde çıkması için yardımcıya verdiğin tarif kartı gibi."
  },
  "help.tracks.uf_all": {
    "t": "Tüm dosyalarda kullan",
    "what": "Bu kutunun değerini listedeki diğer dosyaların aynı kutusuna kopyalar.",
    "when": "Birçok şarkının türü, duygusu veya dili aynıysa ilkini doldurup buna bas.",
    "click": "Diğer dosyalar hemen değişir; mesaj kaç dosya olduğunu söyler. Yüklenmiş dosyalara dokunulmaz.",
    "care": "Diğer dosyalarda daha önce seçtiklerinin üzerine yazar. Sonra istediğini elle yeniden değiştirebilirsin.",
    "like": "Bütün kutulara aynı etiketi tek hareketle basan damga gibi."
  },
  "help.tracks.uf_mood": {
    "t": "Duygu",
    "what": "Şarkının Hüzünlü veya Romantik gibi duygusudur. Listedeki duyguları aimusiclist.com belirler.",
    "when": "Uygun duyguları işaretle. İsteğe bağlıdır.",
    "click": "İşaretler bu dosya için tutulur, yükleyince kaydedilir. ( ) içinde gösterilen sınıra ulaşınca birini kaldırana kadar diğer kutular kilitlenir.",
    "care": "Bu kutu yalnızca siten aimusiclist.com'dan alan listesini aldıysa görünür.",
    "like": "Dinlemeden önce hissini anlatan küçük renkli plak etiketi gibi."
  },
  "help.tracks.uf_genre": {
    "t": "Müzik türü",
    "what": "Bu şarkının türleri: bir ana tür ve en fazla iki ek tür.",
    "when": "Her dosya için seç. Ana tür zorunludur.",
    "click": "Seçim yalnızca bu dosyada tutulur, yükleyince kaydedilir.",
    "care": "Ana tür aimusiclist.com'da şarkının hangi tür menüsünde olacağını belirler; ek türler başlığın yanında görünür.",
    "like": "Bir plakta önce büyük bölüm, sonra iki küçük notun yazdığı raf etiketi gibi."
  },
  "help.tracks.uf_lang": {
    "t": "Şarkı dili",
    "what": "Şarkıda söylenen sözlerin dilidir; ikinci dil de ekleyebilirsin.",
    "when": "Her dosya için seç. Vokal yoksa 'Enstrümantal (sözsüz)' seç.",
    "click": "Seçim yalnızca bu dosyada tutulur ve yükleyince kaydedilir.",
    "care": "Site ekranının dili değildir. 'Enstrümantal' tek başına olmalıdır; onu seçince ikinci kutu kilitlenir. aimusiclist.com dil listelerinde bunu kullanır.",
    "like": "Şarkıcının hangi dilde söylediğini belirten plak notu gibi."
  },
  "help.tracks.queue": {
    "t": "Yüklenecek dosyalar",
    "what": "Seçtiğin dosyaların listesidir. Her satırda başlık, dosya adı, boyut, durum ve o şarkının kutuları görünür.",
    "when": "Yüklemeden önce kontrol et. Her şarkının ana türü ve dili olmalı.",
    "click": "Kutulardaki değişiklikler yükleyene kadar burada tutulur. Yeşil 'Dosya adından dolduruldu' etiketi ( ) bölümünün okunduğunu, 'Alttan seç' ise senin doldurman gerektiğini söyler.",
    "care": "Boş zorunlu kutusu olan satır kırmızıdır. Yükleme sürerken kutular tek özet satırına dönüşür ve değiştirilemez.",
    "like": "Arka kapıdaki teslimat listesi gibi; raftan önce her kutuyu kontrol edersin."
  },
  "help.tracks.up_remove": {
    "t": "Kaldır",
    "what": "Bir dosyayı yükleme listesinden çıkarır.",
    "when": "Yanlış dosya seçtiğinde veya tür ya da süre nedeniyle 'Başarısız' görünürse kullan.",
    "click": "Satır hemen kaybolur. Bilgisayarındaki dosya silinmez.",
    "care": "Yükleme sürerken ve yüklenmiş dosyalarda düğme gizlenir. Yüklenmiş şarkıyı silmek için şarkı listesini kullan.",
    "like": "Dükkâna girmeden sepetten bir plak çıkarmak gibi."
  },
  "help.tracks.up_need": {
    "t": "Boş kutular",
    "what": "Ana türü veya şarkı dili boş olan dosyaları listeler.",
    "when": "Zorunlu kutu boşsa kendiliğinden görünür; hepsi doldurulana kadar yükleme düğmesi kilitli kalır.",
    "click": "Satıra basınca boş kutuya gidersin. Hepsi doldurulunca uyarı kaybolur.",
    "care": "Yalnızca ilk 12 boş kutu listelenir; üstteki sayı hepsini sayar.",
    "like": "Kapıya asılmış kontrol listesi gibi; her satır işaretlenmeden teslimat içeri alınmaz."
  },
  "help.tracks.up_after": {
    "t": "Yeni şarkıları aimusiclist.com'da kontrol et",
    "what": "Yüklemeden sonra yeni açık şarkılarını nerede göreceğini anlatan nottur.",
    "when": "Yalnızca siten aimusiclist.com'a bağlıysa ve en az bir yeni şarkı herkese açıksa görünür.",
    "click": "Bağlantı aimusiclist.com'un Yeni sayfasını yeni sekmede açar.",
    "care": "aimusiclist.com yeni şarkıları almak için birkaç dakika kullanır. Yaklaşık 5 dakika sonra yoksa biraz daha sonra kontrol et.",
    "like": "Yeni plağının büyük pazar rafında olup olmadığına bakmaya gitmek gibi."
  },
  "help.tracks.pubmin": {
    "t": "Herkese açık: n · En az: n",
    "what": "İlk sayı şu anda aimusiclist.com'da açık şarkılarını, ikinci sayı açık kalması gereken en düşük miktarı gösterir.",
    "when": "Şarkıları gizlemeden önce kaçını gizleyebileceğini öğrenmek için bak.",
    "click": "Yalnızca sayıdır; anahtarları açıp kapatınca kendiliğinden değişir.",
    "care": "Kural: 10 veya daha çok şarkın varsa en az 10'u açık kalmalı; daha azsa hepsi açık kalır. Yalnızca ses dosyası olanlar sayılır. Açık albümdeki şarkı açıktır. İleride açılacak albüm, açılana kadar sayılmaz.\nİlk sayı ikinciden küçükse sarı kutu daha fazla şarkı açmanı ister. Hangilerini sen seçersin. Şarkı silmek her zaman mümkündür.",
    "like": "Büyük pazar (aimusiclist.com) her dükkânın rafında en az 10 plak ister. Burada senin kaç plağın olduğu yazılıdır."
  },
  "help.top.pubmin_go": {
    "t": "Şarkıları seç",
    "what": "Hangi şarkıların herkese açık olacağını seçtiğin yere götürür.",
    "when": "Açık şarkı sayısı yetersiz uyarısından bas.",
    "click": "Şarkılar sekmesi 'Herkese açık · En az' satırında açılır. İstediğin şarkıların anahtarını aç; her basış hemen kaydedilir.",
    "care": "Ses dosyası olmayan şarkılar sayılmaz. Gerekli sayıya ulaşınca uyarı kendiliğinden kaybolur.",
    "like": "Vitrine birkaç plak daha koymak için doğrudan oraya gitmek gibi."
  },
  "help.tracks.pub_tip": {
    "t": "Herkese açık anahtarı ipucu",
    "what": "Herkese açık anahtarını ilk kullandığında, şarkının aimusiclist.com'da ne zaman görüneceğini anlatan kısa nottur.",
    "when": "Bir kez oku. Bu tarayıcıda ilk anahtara bastığında görünür.",
    "click": "[[Bir daha gösterme]] bu tarayıcıda kalıcı gizler. [[Kapat]] yalnızca yönetim ekranını yeniden açana kadar gizler.",
    "care": "Notu gizlemek şarkılarına hiçbir değişiklik yapmaz.",
    "like": "Rafın yanındaki 'Buraya koydukların bir iki dakikada büyük pazarda görünür' tabelası gibi."
  },
  "help.albums.form": {
    "t": "Yeni albüm / Albümü düzenle",
    "what": "Albüm oluşturduğun veya değiştirdiğin kutudur. Albüm, kendi sırana koyduğun şarkıların başlık, kapak ve kısa tanıtımla birleşmesidir.",
    "when": "Şarkıları gerçek bir plak gibi bir araya getirmek istediğinde kullan. Albümler sitende, açık olanlar aimusiclist.com'da görünür.",
    "click": "Kutuları doldururken hiçbir şey kaydedilmez. [[Albümü kaydet]] tüm bilgileri birlikte kaydeder. [[İptal]] değişiklikleri atıp kutuyu kapatır.",
    "care": "Albümde en fazla 35 şarkı olabilir. Açık olması için ses dosyaları bulunan 6–35 şarkı gerekir. Daha azıyla da kaydedebilirsin ama gizli kalır.",
    "like": "Şarkıları seçip sıraya koymak ve albüm kapağı hazırlamak gibi."
  },
  "help.albums.title": {
    "t": "Albüm başlığı",
    "what": "Albümün adıdır. Ziyaretçiler sitende, albüm açıksa aimusiclist.com'da görür.",
    "when": "Her albüm oluşturduğunda yaz. Başlıksız albüm kaydedilemez.",
    "click": "[[Albümü kaydet]] ile kaydedilir. Daha sonra albüm listesindeki [[Düzenle]] ile değiştirebilirsin.",
    "care": "En fazla 100 karakter.",
    "like": "Plak kapağının önündeki büyük ad gibi."
  },
  "help.albums.artist": {
    "t": "Sanatçı",
    "what": "Albümün hangi sanatçıya ait olduğunu gösterir. İlk seçenek site adın; diğerleri Site bilgilerindeki Diğer sanatçılar listenden gelir.",
    "when": "Her zamanki adınla yaptıysan site adını bırak; yan proje veya başka sanatçı adınsa onu seç.",
    "click": "[[Albümü kaydet]] ile kaydedilir. Sanatçı adı sitende ve aimusiclist.com'da albüm başlığının altında görünür.",
    "care": "İlk seçimi bırakırsan site adını değiştirince albümün sanatçı adı da değişir. Ünlü şarkıcı adı kullanılamaz.",
    "like": "Plak kapağındaki müzisyen isimliği gibi."
  },
  "help.albums.desc": {
    "t": "Albüm tanıtımı",
    "what": "Albüm hakkında birkaç cümledir. Sitende ve aimusiclist.com'da albüm başlığının altında görünür.",
    "when": "Konusunu, yapılışını veya duygusunu dinleyicilere anlatmak için yaz; boş da bırakabilirsin.",
    "click": "[[Albümü kaydet]] ile kaydedilir. Kutunun altındaki sayı kalan karakteri gösterir.",
    "care": "En fazla 200 karakter. 200'e ulaşınca daha fazla yazamazsın. Bir emoji bir karakter sayılır. Yeni satır olabilir ama yalnızca düz metin; resim ve bağlantı yok.",
    "like": "Plak kapağının arkasındaki kısa tanıtım gibi."
  },
  "help.albums.pub": {
    "t": "Ne zaman yayımlansın?",
    "what": "Albümün hemen mi yoksa seçtiğin gün ve saatte mi yayımlanacağını belirlersin.",
    "when": "Çoğu albümde [[Şimdi]] seç. Önce hayranlarına duyurmak istediğin özel çıkış günü varsa tarih ve saat seç.",
    "click": "[[Albümü kaydet]] düğmesine basınca seçimin uygulanır. Albüm yalnızca ses dosyalı 6–35 şarkı içeriyorsa açılır; aksi hâlde gizli kaydedilir.",
    "care": "Yeni albümde bu kendiliğinden çalışır. Mevcut albümü düzenlerken açık-kapalı durumu korunur. Albüm listesindeki anahtarla sonra değiştirebilirsin.",
    "like": "Yeni plağı bugün rafa koymak veya takvimde işaretlediğin gün yayımlamak gibi."
  },
  "help.albums.pub_now": {
    "t": "Şimdi",
    "what": "Albüm kaydedilir kaydedilmez herkese açık olur.",
    "when": "Albüm hazırsa ve bugün dinlensin istiyorsan seç.",
    "click": "[[Albümü kaydet]] sonrasında ses dosyaları olan 6–35 şarkılı yeni albüm hemen açılır; 1–2 dakikada aimusiclist.com'da görünür. Önceden tarih seçtiysen Şimdi onu iptal eder.",
    "care": "6'dan az şarkı varsa veya ses dosyası eksikse gizli kaydedilir. Kaydetme sonrası mesaj sonucu söyler.",
    "like": "Biten plağı anında büyük pazarın rafına koymak gibi."
  },
  "help.albums.pub_at": {
    "t": "Seçtiğim gün ve saatte",
    "what": "Albüm bekler ve belirlediğin gün ve saatte kendiliğinden herkese açılır.",
    "when": "Örneğin gelecek cuma saat 20.00 gibi önceden duyurmak istediğin çıkış tarihi için kullan.",
    "click": "Tarih ve saat kutusu açılır; saat bu cihazın saat dilimindedir. [[Albümü kaydet]] sonrasında planlanan zaman listede görünür. O zamana kadar albüm hem sitende hem aimusiclist.com'da gizlidir. Zaman geçince yaklaşık bir dakikada açılır.",
    "care": "Şimdiden ileri, en fazla 366 gün sonraya tarih seç. Beklerken şarkıları gizleyemezsin. Albümde ses dosyalı 6–35 şarkı olmalı. PHP sürümünde açılması 5 dakika sürebilir.",
    "like": "Çalar saat kurmak gibi; zil çalınca yeni plak kendiliğinden vitrine çıkar."
  },
  "help.albums.cover": {
    "t": "Kapak resmi",
    "what": "Albümün kare görselidir. Sitende ve açık albümlerde aimusiclist.com'da görünür.",
    "when": "Mümkünse ekle; kapak albümün fark edilmesini ve hatırlanmasını kolaylaştırır. Zorunlu değildir.",
    "click": "[[Kapak seç]] ile resim seçip kareye sığdır. Yeni kapak [[Albümü kaydet]] düğmesiyle albümle birlikte kaydedilir.",
    "care": "200×200 boyutunda küçük resim olarak kaydedilir. Albümü silmek yalnızca kapağını kaldırır, şarkıları silmez.",
    "like": "Rafta ilk bakılan plak kapağı gibi."
  },
  "help.albums.pick": {
    "t": "Şarkıları sırayla seç",
    "what": "Albüme şarkı eklediğin yerdir. Sol tarafta (telefonda üstte) şarkıların; sağ tarafta (telefonda altta) albümdekiler çalma sırasıyla görünür.",
    "when": "Albüm oluştururken veya şarkılarını değiştirirken kullan. Yüzlerce şarkıyla da çalışır.",
    "click": "Solda şarkıları bulup işaretle ve [[Seçilenleri ekle →]] düğmesine bas. Sağ listenin sonuna eklenir, soldan kaybolur. [[Albümü kaydet]] düğmesine kadar kaydedilmez.",
    "care": "En fazla 35 şarkı. Aynı şarkı birden çok albümde olabilir; küçük etiket diğer albümün adını gösterir. 'Ses yok' işaretli şarkının ses dosyası yoktur, böyle albüm açık olamaz.",
    "like": "Sol taraf depo rafın, sağ taraf parça parça doldurduğun albüm gibi."
  },
  "help.albums.save": {
    "t": "Albümü kaydet",
    "what": "Başlık, sanatçı, tanıtım, çıkış zamanı, kapak ve şarkılar dâhil albüm kutusundaki her şeyi birlikte kaydeder.",
    "when": "Albümü hazırladıktan veya düzenledikten sonra bas.",
    "click": "Mesaj sonucu söyler: şimdi açık, seçilen zamanda açılacak veya ses dosyalı 6–35 şarkı olmadığı için gizli. Albüm alttaki listede görünür. Açık albüm 1–2 dakikada aimusiclist.com'a ulaşır.",
    "care": "Başlık zorunludur. Seçtiğin tarih gelecekte olmalıdır. Siteyi 10 açık şarkının altına düşüren değişiklikler reddedilebilir; kırmızı mesaj nedeni açıklar.",
    "like": "Bitmiş albümü paketleyip rafa koymak gibi."
  },
  "help.albums.cancel": {
    "t": "İptal",
    "what": "Albüm kutusunu kaydetmeden kapatır.",
    "when": "Vazgeçtiğinde veya baştan başlamak istediğinde kullan.",
    "click": "Kutu hemen kapanır. Açtığından beri değiştirdiğin her şey, seçtiğin yeni kapak dâhil kaybolur. Albüm eskiden kaydedildiği gibi kalır.",
    "care": "'Emin misin?' diye sormaz. Kaydedilmemiş değişiklikler gider.",
    "like": "Yarım kalmış albümü çekmeceye geri koymak, raftakine dokunmamak gibi."
  },
  "help.albums.new": {
    "t": "Yeni albüm",
    "what": "Yeni albüm hazırlaman için boş albüm kutusu açar.",
    "when": "Şarkılarını albümde toplamak istediğinde bas.",
    "click": "Albüm formu listenin üstünde açılır. [[Albümü kaydet]] düğmesine basmadan albüm oluşturulmaz.",
    "care": "Albüm formu açıkken bu düğme gizlenir. Önce kaydet veya iptal et.",
    "like": "Boş bir plak kapağı almak gibi."
  },
  "help.albums.list": {
    "t": "Albümlerim",
    "what": "Oluşturduğun tüm albümlerdir. Hepsi sitende görünür. Anahtarı açık albümler aimusiclist.com'da da görünür ve şarkıları da orada açık olur.",
    "when": "Albümlerin durumunu görmek, düzenlemek veya silmek için bak.",
    "click": "Her satırda açık-kapalı anahtarı, başlık, şarkı sayısı ve [[Düzenle]] / [[Sil]] düğmeleri bulunur.",
    "care": "Geleceğe planlanan albüm o zamana kadar sitende ve aimusiclist.com'da gizlidir. Albüm açıkken veya açılmayı beklerken şarkıları tek tek gizlenemez.",
    "like": "Dükkânındaki albüm rafı gibi. Anahtar hangilerinin büyük pazara da gideceğini belirler."
  },
  "help.albums.pub_switch": {
    "t": "aimusiclist'te herkese açık",
    "what": "Albümün aimusiclist.com'da da görünüp görünmeyeceğini belirler. Her iki durumda da kendi sitende vardır.",
    "when": "Daha çok kişi bulsun istiyorsan aç, aimusiclist.com'dan kaldırmak için kapat.",
    "click": "Bastığında hemen kaydedilir. Açınca albüm ve bütün şarkıları 1–2 dakikada aimusiclist.com'da görünür; kapatınca oradan kaybolur. Tek tek açtığın şarkılar açık kalır.",
    "care": "Gri anahtar, albümde ses dosyalı 6–35 şarkı olmadığı anlamına gelir; nedenini görmek için bas. Kapatmak sitende 10'dan az açık şarkı bırakacaksa reddedilebilir.",
    "like": "Dükkânındaki albümlerden hangilerini büyük pazar rafına koyacağını seçmek gibi."
  },
  "help.albums.col_title": {
    "t": "Albüm başlığı",
    "what": "Bu sütun albüm başlığını, altında sanatçısını gösterir. Yanlarında küçük durum etiketleri olabilir.",
    "when": "Albüm durumunu hızlıca görmek için bak.",
    "click": "'… tarihinde açılacak' albümün belirlediğin zamanı beklediğini gösterir. 'Ses dosyalı 6–35 şarkı gerekli' yazıyorsa henüz yayımlanamaz; şarkı ekle/çıkar veya eksik sesi yükle.",
    "like": "Raftaki albüm kutusunun yan etiketi gibi."
  },
  "help.albums.col_count": {
    "t": "Şarkı sayısı",
    "what": "Her albümde kaç şarkı olduğunu gösterir.",
    "when": "Albümün yayımlanıp yayımlanamayacağını kontrol et; 6–35 şarkı gerekir.",
    "click": "6'dan azsa [[Düzenle]] ile şarkı ekle. Albümde en fazla 35 şarkı olabilir.",
    "like": "Plak kapağının arkasındaki parça listesini saymak gibi."
  },
  "help.albums.row_buttons": {
    "t": "Düzenle / Sil",
    "what": "Her satırın sonundaki düğmelerdir. [[Düzenle]] albümü değiştirmeni, [[Sil]] albümü kaldırmanı sağlar.",
    "when": "Şarkı, sıra, başlık, kapak veya çıkış zamanını değiştirmek için Düzenle; albümü istemiyorsan Sil.",
    "click": "Düzenle sayfanın üstünde albüm kutusunu açar. Sil önce onay ister, sonra albümü ve kapağını kaldırır. Şarkılar sitende kalır.",
    "care": "Silme geri alınamaz. Açık albümü silmek sitede 10'dan az açık şarkı bırakacaksa reddedilebilir.",
    "like": "Düzenle plağı raftan alıp düzeltmek, Sil kapağı ve parça listesini atmak gibi; şarkılar depoda kalır."
  },
  "help.albums.pick_search": {
    "t": "Şarkı başlığında ara",
    "what": "Şarkı adının bir bölümünü yazınca solda yalnızca eşleşenler görünür.",
    "when": "Çok şarkın varsa ve aradığının adını biliyorsan kullan.",
    "click": "Yazdıkça liste değişir; büyük-küçük harf fark etmez. Hepsini görmek için kutuyu temizle.",
    "care": "Yalnızca başlıklarda arar, sanatçı veya şarkı sözlerinde değil.",
    "like": "Depo görevlisine '… adlı şarkı nerede?' diye sormak gibi."
  },
  "help.albums.pick_genre": {
    "t": "Müzik türü",
    "what": "Solda yalnızca seçilen ana türdeki şarkılarını gösterir. Listede sadece şarkılarının kullandığı ana türler vardır.",
    "when": "Yalnızca R&B gibi tek tarzdan albüm yapmak için kullan.",
    "click": "Sol liste hemen değişir. Şarkının bir türü seçtiğin tür veya onun alt türüyse görünür. Her şeyi görmek için Tüm türler seç.",
    "care": "Yalnızca şarkıları bulmanı kolaylaştırır; türlerini değiştirmez.",
    "like": "Depoda yalnızca R&B koridoruna gitmek gibi."
  },
  "help.albums.pick_sort": {
    "t": "Sıralama",
    "what": "Soldaki şarkıları en yeni, en eski yükleme veya başlığa göre sıralar.",
    "when": "Yeni yaptıklarını bulmak için En yeni; ada göre bulmak için Başlık A–Z kullan.",
    "click": "Sol liste hemen sıralanır. Albümün içindeki sıra değişmez; onu sağ taraftan belirlersin.",
    "like": "Depo rafını tarihe veya ada göre dizmek gibi."
  },
  "help.albums.pick_all": {
    "t": "Görünenlerin hepsini seç",
    "what": "Aramana ve seçtiğin türe şu anda uyan bütün şarkıları işaretler. Sayı kaç tane olduğunu gösterir.",
    "when": "Listeyi daralttıktan sonra, örneğin tek bir türdeki şarkıların hepsini seçmek için kullan.",
    "click": "Aşağıda görünmeyenler dâhil eşleşen bütün şarkılar işaretlenir. Tekrar basınca (artık 'Seçimi temizle' yazar) işaretler kaldırılır. Şarkılar henüz albüme eklenmez; sonra [[Seçilenleri ekle →]] düğmesine bas.",
    "care": "Bir albümde en fazla 35 şarkı olabilir. Daha çoğunu seçersen yalnızca sığan ilk şarkılar eklenir.",
    "like": "Her ürünü tek tek göstermek yerine 'Bu raftakilerin hepsini istiyorum' demek gibi."
  },
  "help.albums.pick_add": {
    "t": "Seçilenleri ekle →",
    "what": "İşaretlediğin şarkıları albüme koyar. Sayı kaç şarkı seçtiğini gösterir.",
    "when": "Soldan şarkıları işaretledikten sonra bas.",
    "click": "Şarkılar solda göründükleri sırayla sağ listenin sonuna eklenir ve soldan kaybolur. Sağda sıralarını değiştirebilirsin. Albüm ancak [[Albümü kaydet]] düğmesine basınca kaydedilir.",
    "care": "Hiç şarkı seçilmediyse veya albümde zaten 35 şarkı varsa düğme gridir. Hepsi sığmazsa kaçının dışarıda kaldığı söylenir.",
    "like": "Depo rafından seçtiğin şarkıları alıp albüme koymak gibi."
  },
  "help.albums.pick_recent": {
    "t": "En yeni şarkılarımı ekle",
    "what": "En son yüklediğin şarkıları tek adımda ekler. Küçük sayı kutusundan kaç tane olduğunu seçersin (1–35; başlangıçta 10).",
    "when": "Yeni bir grup şarkı yükleyip hepsini tek albümde toplamak istediğinde kullan.",
    "click": "Ses dosyası bulunan ve albümde olmayan en yeni şarkılar, en yeniden başlayarak sağ listenin sonuna eklenir. Soldaki arama ve tür seçimleri bunu etkilemez. [[Albümü kaydet]] düğmesine kadar hiçbir şey kaydedilmez.",
    "care": "Ses dosyası olmayanlar atlanır. Albüm yine en fazla 35 şarkı tutar. Doluysa düğme gridir.",
    "like": "Depoya en son gelen 10 plağı istemek gibi."
  },
  "help.albums.picked": {
    "t": "Bu albümdekiler",
    "what": "Albümdeki şarkıları çalma sırasıyla gösterir. Yanındaki sayı şarkı adedidir; 6–35 arasında değilse kırmızı olur.",
    "when": "Şarkıları kontrol etmek ve çalma sırasını düzenlemek için kullan.",
    "click": "⠿ işaretini tutup şarkıyı yukarı veya aşağı sürükle ya da ▲ ▼ düğmelerini kullan. ✕ şarkıyı albümden çıkarır (kendi sitende kalır). [[Albümü kaydet]] düğmesine basınca kaydedilir.",
    "care": "Herkese açık albümde ses dosyalı 6–35 şarkı olmalıdır. 'Ses yok' işaretli şarkı yayımlamayı engeller. Albüm zaten açıksa 6'dan az şarkıyla kaydedemezsin.",
    "like": "Plak kapağının arkasındaki sıralı liste gibi: 1. şarkı, 2. şarkı, 3. şarkı…"
  },
  "help.albums.pick_clear": {
    "t": "Hepsini kaldır",
    "what": "Bu albümdeki tüm şarkıları bir kerede çıkarır; yeniden seçebilirsin.",
    "when": "Albümün şarkı listesini baştan oluşturmak istediğinde kullan.",
    "click": "Önce onay sorar. Ardından sağ liste boşalır ve şarkılar soldaki listeye döner. [[Albümü kaydet]] düğmesine kadar kaydedilmez; eski hâli korumak için [[İptal]] düğmesine basabilirsin.",
    "care": "Şarkıların kendileri silinmez, sitende kalırlar.",
    "like": "Albümden bütün şarkıları çıkarıp depo rafına geri koymak gibi."
  },
  "help.albums.cover_pick": {
    "t": "Kapak seç",
    "what": "Albüm kapağı için cihazından resim seçmeni sağlar. Sonra küçük bir pencere resmin hangi bölümünün kullanılacağını seçtirir.",
    "when": "Kapak eklemek veya mevcut kapağı değiştirmek için bas.",
    "click": "Penceredeki [[Görseli kaydet]] düğmesine basınca burada 'Yeni kapak' görünür ama henüz kaydedilmez. [[Albümü kaydet]] düğmesiyle kaydedilir. Yanındaki [[İptal]] yeni resmi kaldırır.",
    "care": "JPG, PNG, WebP veya GIF biçiminde, en fazla 2 MB resim seçebilirsin. Asıl resmin değil, küçük kopyası yüklenir.",
    "like": "Fotoğraf seçip plak kapağına uyacak şekilde kesmek gibi."
  },
  "help.albums.cover_delete": {
    "t": "Kapağı kaldır",
    "what": "Bu albümün kapak resmini kaldırır. Albüm ve şarkılar kalır.",
    "when": "Örneğin yeni kapak hazırlarken artık eski resmi istemiyorsan kullan.",
    "click": "Önce onay sorar. Evet dersen [[Albümü kaydet]] düğmesine basmadan kapak hemen kaldırılır. Ziyaretçiler boş kare görür.",
    "care": "Geri alınamaz. Kapağı geri getirmek için resmi yeniden seç.",
    "like": "Plağın kapağını çıkarmak gibi. İçindeki plak yerinde kalır."
  },
  "help.skins.use": {
    "t": "Bu temayı kullan",
    "what": "Kurulu temayı sitene uygular. Önceden kullandığın tema hatırlanır.",
    "when": "Ziyaretçilerin siteni bu temayla görmesini istediğinde kullan.",
    "click": "Hemen kaydedilir. Yaklaşık 30 saniyede ziyaretçiler yeni görünümü görür. Geri almak için [[Önceki temaya dön]] düğmesine bas veya başka tema seç.",
    "care": "Kullanılan temada bu düğme yoktur; zaten etkindir. Şarkıların ve menülerin değişmez.",
    "like": "Gardıroptan bir kıyafet alıp dükkânına giydirmek gibi."
  },
  "help.skins.update": {
    "t": "Güncelle",
    "what": "Galeriden yüklediğin temanın yapımcısı yeni sürüm çıkardıysa bu düğme görünür. Yanında **Yeni sürüm** etiketi vardır.",
    "when": "O temanın en yeni, düzeltilmiş tasarımını kullanmak istediğinde bas.",
    "click": "Yeni sürüm kontrol edilir ve eskisinin yerini alır. Sitenin kullandığı tema değişmez. Kullanılan tema buysa ziyaretçiler yeni sürümü yaklaşık 30 saniyede görür.",
    "care": "Bu yalnızca temanın tasarımıdır, sitenin programını güncellemekten ayrıdır. Kendin yüklediğin temalarda bu düğme görünmez.",
    "like": "Terzinin zaten sahip olduğun kıyafetin daha iyi oturan sürümünü göndermesi gibi."
  },
  "help.skins.download": {
    "t": "İndir (düzenlemek için)",
    "what": "Hazır Açık veya Koyu temanın bir kopyasını bilgisayarına indirir. Kendi teman için başlangıç yapabilirsin.",
    "when": "Kendi temanı yapmak istediğinde kullan. Kopyayı ücretsiz ChatGPT veya Claude sohbetine verip renkleri ve düzeni değiştirmesini iste.",
    "click": "Tarayıcı tema dosyasını indirir; sitende hiçbir şey değişmez.",
    "care": "Hazır temaları doğrudan değiştiremezsin. Düzenlediğin kopyayı **Tema yükle** bölümünden yeni adla yükle, sonra [[Bu temayı kullan]] düğmesine bas.",
    "like": "Kendi giysini dikmek için eve bir dikiş kalıbı götürmek gibi."
  },
  "help.skins.delete": {
    "t": "Sil",
    "what": "Yüklediğin veya galeriden eklediğin temayı kaldırır. Hazır temalar (Açık, Koyu) silinemez; onların yerine [[Düzenlemek için indir]] görünür.",
    "when": "Temaya artık ihtiyacın yoksa veya 20 tema sınırına ulaşıp yenisine yer açmak istiyorsan kullan.",
    "click": "Önce onay sorulur, sonra tema hemen kaldırılır. Kullanılan tema buysa siten Açık temasına geçer.",
    "care": "Geri alınamaz. Galeri temasını **Göz at** bölümünden yeniden ekleyebilirsin. Kendi temanı ise dosyasını saklamadıysan kaybedersin.",
    "like": "Gardıroptaki kıyafeti atmak gibi. Tekrar isteyebilirsin diye kendi kalıbını sakla."
  },
  "help.skins.revert": {
    "t": "Önceki temaya dön",
    "what": "En son kullandığın eski temayı geri getirir. Düğmede temanın adı yazılıdır.",
    "when": "Yeni tema denedin ama eskisini daha çok beğendiysen kullan.",
    "click": "Hemen kaydedilir; yaklaşık 30 saniyede ziyaretçiler görür. Ayrıldığın tema bu kez önceki tema olur; tekrar basınca geri dönersin.",
    "care": "Yalnızca bir önceki tema hatırlanır. Silindiyse bu düğme kaybolur.",
    "like": "Yeni kıyafeti çıkarıp dünkü kıyafeti giymek gibi."
  },
  "help.skins.title": {
    "t": "Temalar",
    "what": "Tema sitenin kıyafetidir: renkler, yazılar ve yerleşim. Değiştirmek şarkılarına, albümlerine veya ayarlarına dokunmaz.",
    "when": "Siteye yeni görünüm vermek veya kullandığın temanın yeni sürümünü almak istediğinde gel.",
    "click": "Bu yalnızca başlıktır. Alttaki düğmeler çalışır. Sitenin daima iki hazır teması vardır: **Açık** ve **Koyu**; en fazla 20 tane daha ekleyebilirsin.",
    "care": "Yeni tema yaklaşık 30 saniyede ziyaretçilere görünür. Kullanılan temayı silersen siten Açık temasına döner.",
    "like": "Dükkânının boyasını ve raflarını değiştirmek gibi. Plaklar aynı yerde kalır."
  },
  "help.skins.view": {
    "t": "Yüklü / Göz at",
    "what": "Temalar sekmesinin iki görünümüdür. **Yüklü**, sitende olan temaları; **Göz at**, başkalarının yaptığı temaları deneyip ekleyebileceğin galeriyi gösterir.",
    "when": "Kendi temalarını değiştirmek, güncellemek, silmek veya yüklemek için Yüklü; yeni görünüm bulmak için Göz at.",
    "click": "Yalnızca görünüm değişir, siten değişmez. Göz at ilk açıldığında tema listesi yüklenir.",
    "like": "Yüklü kendi gardırobun, Göz at yandaki giyim mağazası gibi."
  },
  "help.skins.upload": {
    "t": "Tema yükle",
    "what": "Kendin yaptığın temayı ekler. Tema, kılavuza uyan tek bir web sayfası dosyasıdır (.html). Ücretsiz yapay zekâ sohbeti de hazırlayabilir.",
    "when": "Galeride olmayan özel bir görünüm istediğinde kullan. Başlamak için [[Düzenlemek için indir]] düğmesinden hazır tema alabilirsin.",
    "click": "Adı ve dosyayı seçip [[Temayı yükle]] düğmesine bas. Tema listeye eklenir ama henüz uygulanmaz. Kullanmak için [[Bu temayı kullan]] düğmesine bas.",
    "care": "Dosya kontrol edilir: en fazla 100 KB olmalı, menü, içerik ve oynatıcı yerleri birer kez bulunmalı; **Powered by aimusiclist.com** satırını gizlememelidir. Başka sitelerden çalışan kod veya resim kullanılamaz.",
    "like": "Kendi kıyafetini dikip gardırobuna asmak gibi."
  },
  "help.skins.upload_name": {
    "t": "Tema adı",
    "what": "Temanın listede görünecek adıdır. 1–32 küçük harf (a–z), rakam, - veya _ kullan.",
    "when": "Yüklemeden önce my-blue gibi kolay tanıyacağın kısa ad yaz.",
    "click": "[[Temayı yükle]] düğmesine basılana kadar kaydedilmez.",
    "care": "Büyük harf ve boşluk olmaz. **light** ve **dark** hazır temalara ayrılmıştır. Var olan adı kullanırsan eski tema değiştirilir. Etkin temanın yerini alırsa 30 saniyede ziyaretçilere görünür.",
    "like": "Kıyafetin içine dikilen isim etiketi gibi."
  },
  "help.skins.upload_file": {
    "t": "Tema dosyası",
    "what": "Bilgisayarındaki tema dosyasıdır. Tek bir .html dosyası olmalı ve 100 KB'ı geçmemeli.",
    "when": "Örneğin ücretsiz yapay zekâ sohbetiyle tema yaptıktan veya düzenledikten sonra seç.",
    "click": "Yalnızca dosya seçilir. [[Temayı yükle]] düğmesine basana kadar gönderilmez.",
    "care": "Tek dosya kullanılabilir. Tema içindeki resimler başka sitelerden gelmemeli. Dosya çok büyükse yapay zekâdan kısaltmasını iste.",
    "like": "Bitmiş kıyafeti gardıroba asmadan önce eline almak gibi."
  },
  "help.skins.upload_btn": {
    "t": "Temayı yükle",
    "what": "Tema dosyanı gönderir ve kontrol eder.",
    "when": "Adı yazıp dosyayı seçtikten sonra bas.",
    "click": "Sorun varsa kırmızı mesaj neyi düzeltmen gerektiğini söyler ve kaydetmez. Başarılıysa **Kaydedildi** görünür, tema listene eklenir. [[Bu temayı kullan]] düğmesine basana kadar sitene uygulanmaz.",
    "care": "Açık ve Koyu dışında en fazla 20 tema tutabilirsin. Yer doluysa önce birini sil. Galeri temasıyla aynı adı kullanırsan kendi temana dönüşür, yeni sürüm almaz.",
    "like": "Kıyafeti gardıroba koymadan önce mağaza görevlisinin kontrol etmesi gibi."
  },
  "help.skins.gallery": {
    "t": "Tema galerisi",
    "what": "Hazır temaların ortak rafıdır. Her kartta resim, yapımcı, açık veya koyu tür ve sürüm bulunur. Yeniler önce gösterilir.",
    "when": "Kendin tema yapmadan tek tıkla yeni görünüm istediğinde kullan.",
    "click": "Bir resme veya [[Önizleme]] düğmesine basıp temayı kendi sitende dene. Ekleyip uygulamak için [[Uygula]] düğmesine bas.",
    "care": "Kartta **Bu temayı kullanmak için siteni güncelle.** yazıyorsa önce site programının yeni sürümü gerekir.",
    "like": "Kıyafetleri satın almadan önce kendi dükkânına giydirip deneyebildiğin mağaza gibi."
  },
  "help.skins.gal_reload": {
    "t": "Yenile",
    "what": "Tema galerisinin listesini yeniden yükler.",
    "when": "Yeni temalar geldiğinde veya liste yüklenemediğinde kullan.",
    "click": "Liste kısa sürede yenilenir. Kurulu temalarının yeni sürümleri de kontrol edilir. Sitenin görünümü değişmez.",
    "care": "**Tema listesi şu anda yüklenemiyor.** yazısını görürsen biraz bekleyip [[Tekrar dene]] düğmesine bas.",
    "like": "Giyim mağazasından en yeni kataloğu istemek gibi."
  },
  "help.skins.gal_filter": {
    "t": "Tema filtresi",
    "what": "Yalnızca bazı temaları gösteren düğmelerdir: **Tümü**, **Açık** (açık arka plan), **Koyu** (koyu arka plan) ve tarzı anlatan #kelimeler.",
    "when": "Galeride çok tema varsa ve belirli bir tarz arıyorsan kullan.",
    "click": "Yalnızca gösterilen kartlar değişir. Her şey için **Tümü** düğmesine bas. Hiçbir şey kaydedilmez.",
    "care": "Bir #kelime ancak en az iki tema onu kullanıyorsa görünür. Eşleşme yoksa **Bu filtreye uygun tema yok.** mesajını görürsün.",
    "like": "Giyim mağazasındaki 'ceketler burada, gömlekler orada' tabelaları gibi."
  },
  "help.skins.gal_preview": {
    "t": "Önizleme",
    "what": "Kendi siteni, şarkıların ve profilinle birlikte bu temada gösterir. Tema resmine de basabilirsin.",
    "when": "Temayı uygulamadan önce sitende gerçekten nasıl görüneceğini kontrol et.",
    "click": "Pencere açılır, hiçbir şey kaydedilmez ve ziyaretçiler değişiklik görmez. [[Kapat]] veya Esc ile kapat. Aynı pencereden temayı uygulayabilirsin.",
    "care": "Önizlemede şarkılar çalınmaz ve reklamlar gösterilmez. Kartta **Bu temayı kullanmak için siteni güncelle.** yazıyorsa siten güncellenene kadar önizleme açılamaz.",
    "like": "Kıyafeti deneyip beğenmezsen geri bırakabildiğin deneme kabini gibi."
  },
  "help.skins.gal_apply": {
    "t": "Uygula / Bu temayı uygula",
    "what": "Galeri temasını sitene ekleyip tek tıkla uygular. Her tema kartında ve önizleme penceresinde bulunur.",
    "when": "Temayı beğenip ziyaretçilerin görmesini istediğinde kullan.",
    "click": "Tema kontrol edilir, **Yüklü** listesine eklenir ve hemen uygulanır. Yaklaşık 30 saniyede ziyaretçiler görür. Geri almak için [[Önceki temaya dön]] düğmesine bas.",
    "care": "Açık ve Koyu dışında en fazla 20 tema saklayabilirsin. Aynı adla kendi temanı yüklediysen değiştirilmeden önce sana sorulur. **Bu temayı kullanmak için siteni güncelle.** işaretli tema henüz uygulanamaz.",
    "like": "Mağazadan kıyafet satın alıp üzerinde eve gitmek gibi."
  },
  "help.skins.pv_mode": {
    "t": "Masaüstü / Telefon",
    "what": "Önizlemenin boyutunu değiştirir. **Masaüstü** geniş bilgisayar ekranını, **Telefon** dar telefon ekranını gösterir.",
    "when": "Çok dinleyici telefon kullandığı için uygulamadan önce ikisini de kontrol et.",
    "click": "Yalnızca önizleme boyutu değişir. Hiçbir şey kaydedilmez.",
    "like": "Vitrine önce sokaktan, sonra yakından bakmak gibi."
  },
  "help.site.artist_del": {
    "t": "Sil",
    "what": "Bu adı diğer sanatçılar listesinden çıkarır.",
    "when": "Yeni şarkılarda bu adı artık seçmek istemiyorsan kullan.",
    "click": "Önce sorar, ardından hemen kaydeder. Bu adı zaten kullanan şarkılar adı korur. Yalnızca yeni şarkıların seçeneği kaybolur.",
    "care": "Eski bir şarkının sanatçısını değiştirmek için şarkıyı düzenle. Daha sonra aynı adı yeniden ekleyebilirsin.",
    "like": "Çekmeceden isimliği çıkarmak gibi. O isimliği takmış şarkılarda kalmaya devam eder."
  },
  "help.site.info": {
    "t": "Site bilgileri",
    "what": "Sitenin temel bilgileri burada bulunur: adı, sanatçı adı, ana dil, kısa açıklama, ülke ve alt yazı.",
    "when": "Başlarken bir kez doldur. Sitenin adını veya kendini tanıtma biçimini değiştirmek için geri gel.",
    "click": "Yazarken kaydedilmez. Kartın altındaki [[Site bilgilerini kaydet]] düğmesine basarak hepsini birlikte kaydet. Siten hemen değişir, aimusiclist.com yeni adı ve açıklamayı kısa süre sonra alır.",
    "care": "Bu sekmedeki diğer kartlar (SNS, dinlenme sayıları, beğeniler, resimler…) kendi kendine kaydeder. Yalnızca bu kartın kaydet düğmesi gerekir. Basmadan çıkarsan yazdıkların kaybolur.",
    "like": "Dükkânın kayıt formu gibi: kapıdaki tabela, tek satırlık tanıtım ve nerede olduğu."
  },
  "help.site.name": {
    "t": "Site adı",
    "what": "Sitenin 1–40 karakterlik adıdır. Sitenin büyük başlığıdır, aimusiclist.com şarkı başlıklarının altında gösterir. İnsanlar buna basıp siteni ziyaret eder.",
    "when": "Başlangıçta seç. Dinleyiciler seni bu adla tanıyacağı için gerçekten istediğinde değiştir.",
    "click": "[[Site bilgilerini kaydet]] düğmesine basınca kaydedilir. Sanatçı adın eski site adıyla aynıysa o da yeni ada dönüşür.",
    "care": "Ünlü şarkıcı veya grup adı ya da ona benzeyen ad kullanamazsın. Bilinen adlarla eşleşirse kaydetme engellenir. Sonradan fark edilirse siten aimusiclist'ten kaldırılabilir.",
    "like": "Dükkân tabelası gibi. Büyük pazardaki (aimusiclist.com) müşteriler seni bu adla bulur."
  },
  "help.site.artist": {
    "t": "Sanatçı adı",
    "what": "Bu sitede müzik yapan kişi veya grubun adıdır. Site adıyla aynı ya da farklı olabilir.",
    "when": "Müzikte kullandığın ad sitenin adından farklıysa doldur. Örneğin siten My Music Room, sanatçı adın Luna olabilir.",
    "click": "[[Site bilgilerini kaydet]] ile kaydedilir. Farklıysa ziyaretçiler ana sayfada site adının altında görür. aimusiclist.com'a da bir iki dakikada ulaşır.",
    "care": "En fazla 40 karakter. Ünlü şarkıcı veya grup adı ya da benzeri kullanılamaz. Site adını değiştirdiğinde bu kutuda eski site adı varsa birlikte değişir.",
    "like": "Tabela dükkânın adını gösterir; bu ise içeride çalışan müzisyenin isimliğidir."
  },
  "help.site.lang": {
    "t": "Sitenin ana dili",
    "what": "Ziyaretçinin istediği dil anlaşılamadığında sitenin kullandığı dildir. Bu dil aimusiclist.com'a da bildirilir.",
    "when": "Dinleyicilerinin çoğunun okuduğu veya açıklamalarını yazdığın dili seç.",
    "click": "[[Site bilgilerini kaydet]] ile kaydedilir. Siten destekliyorsa her ziyaretçi tarayıcısının veya kendi seçtiği dilin sayfasını görür. Bunlar yoksa burada seçilen dili görür.",
    "care": "Bu yönetim sayfasının dilini değiştirmez. Yazdığın şarkı başlıklarını ve açıklamaları da çevirmez.",
    "like": "Dükkânın karşılama tabelasının dili gibi. Başka dil konuşan ziyaretçi kendi dilinde menü isteyebilir."
  },
  "help.site.desc": {
    "t": "Kısa açıklama",
    "what": "Sen ve müziğin hakkında en fazla 200 karakterlik tanıtımdır. Sitende görünür, site adıyla birlikte aimusiclist.com'a gönderilir.",
    "when": "Ne tür müzik yaptığını bir iki cümleyle anlat. İstediğin zaman değiştir.",
    "click": "[[Site bilgilerini kaydet]] düğmesine basınca kaydedilir. aimusiclist.com kısa süre sonra yeniler. Boş bırakırsan açıklama görünmez.",
    "care": "Kısa ve sade tut. Kendini tanıtmak için ünlü şarkıcı adı kullanma; örneğin 'yeni [ünlü ad]' yazma.",
    "like": "Tabelanın altındaki küçük 'ne satıyoruz' tanıtım kartı gibi."
  },
  "help.site.footer": {
    "t": "Alt yazı",
    "what": "Sitenin her sayfasının en altında görünen en fazla 200 karakterlik tek satırdır. Yalnızca yazı; resim veya bağlantı olmaz.",
    "when": "Telif hakkı notu veya teşekkür gibi kısa bir mesaj için kullan.",
    "click": "[[Site bilgilerini kaydet]] ile kaydedilip hemen görünür. Boş bırakırsan '© bu yıl + site adı' görünür. {year} yazarsan otomatik bu yılın sayısı olur.",
    "care": "Satır sonları boşluğa çevrilir. Yanındaki 'Powered by aimusiclist.com' satırı her zaman kalır; bu kutuyla kaldırılamaz.",
    "like": "Dükkân fişinin en altına basılmış küçük not gibi."
  },
  "help.site.save": {
    "t": "Site bilgilerini kaydet",
    "what": "Site bilgileri kartındaki adlar, dil, açıklama, ülke, alt yazı ve ek bilgilerin hepsini birlikte kaydeder.",
    "when": "Kartta bir şeyi değiştirdikten sonra bas.",
    "click": "Siten değişiklikleri hemen gösterir. aimusiclist.com yeni ad ve açıklamayı kısa süre sonra alır. Hata varsa düğmenin yanında kırmızı mesaj çıkar ve hiçbir şey kaydedilmez.",
    "care": "Değiştirdiğin ad ünlü müzisyen adıyla eşleşirse kaydedilmez. Başka ad seçip yeniden bas.",
    "like": "Dükkânın kayıt formuna vurulan mühür gibi. Mühürden önce değişiklikler taslaktır."
  },
  "help.site.artists": {
    "t": "Diğer sanatçılar",
    "what": "Şarkılarda seçebileceğin ek sanatçı adlarının listesidir. Bir şey seçmezsen şarkının sanatçısı site adın olur.",
    "when": "Tek sitede farklı adlarla müzik yapıyorsan kullan; örneğin ikili grubun veya yan projen varsa.",
    "click": "Buraya eklediğin adlar şarkı veya albüm yükleme ve düzenleme sırasında sanatçı seçiminde görünür. Sanatçı adı sitende ve aimusiclist.com'da gösterilir.",
    "care": "En fazla 20 ad ekleyebilirsin. Dolunca Ekle düğmesi gri olur. Ünlü şarkıcı adları kullanılamaz.",
    "like": "Tek dükkân ama çekmecede farklı isimlikler gibi. Her şarkıya yapan kişinin isimliğini takarsın."
  },
  "help.site.artist_add": {
    "t": "Ekle",
    "what": "Yazdığın adı diğer sanatçılar listesine ekler.",
    "when": "Soldaki kutuya yeni sanatçı adı yazıp bas.",
    "click": "Hemen kaydedilir. Artık şarkı yüklerken veya düzenlerken bu adı seçebilirsin.",
    "care": "En fazla 60 karakter. Listede zaten olan veya site adıyla aynı olan ad eklenmez. Ünlü şarkıcı veya grup adları reddedilir.",
    "like": "Yeni isimlik hazırlayıp çekmeceye koymak gibi."
  },
  "help.site.account": {
    "t": "Yönetici hesabı",
    "what": "Bu yönetim ekranına giriş yaptığın e-posta ve şifredir. Üst satırda mevcut e-postan görünür.",
    "when": "Giriş e-postanı veya şifreni değiştirmek için kullan.",
    "click": "Kutuları doldurup mevcut şifreni girerek [[Hesabı kaydet]] düğmesine basana kadar bir şey değişmez.",
    "care": "meshmelo sitesinde e-posta yalnızca meshmelo hesabından değiştirilebilir; bu nedenle e-posta kutusu burada görünmez.",
    "like": "Dükkânın arka kapısının anahtarıdır; yalnızca sende olmalı."
  },
  "help.site.account_email": {
    "t": "Yeni e-posta (isteğe bağlı)",
    "what": "Girişte kullanacağın yeni e-posta adresidir. Eskisini korumak için boş bırak.",
    "when": "Eski e-postayı kullanmayı bıraktığında veya başka adresle giriş yapmak istediğinde kullan.",
    "click": "Mevcut şifreni yazıp [[Hesabı kaydet]] düğmesine basınca değişir. Sonraki girişte yeni adresi kullan.",
    "care": "Yazımı dikkatle kontrol et; yanlış e-posta giriş yapmayı zorlaştırır. meshmelo sitelerinde bu kutu görünmez.",
    "like": "Arka kapı anahtarındaki yazılı adı değiştirmek gibi."
  },
  "help.site.account_pw": {
    "t": "Yeni şifre (isteğe bağlı)",
    "what": "Bu yönetim ekranının yeni şifresidir. Eskisini korumak için boş bırak.",
    "when": "Başkasının şifreni bildiğini düşünüyorsan veya sadece değiştirmek istiyorsan kullan.",
    "click": "Sonraki kutuya tekrar yazıp mevcut şifreni girerek [[Hesabı kaydet]] düğmesine basınca değişir. Diğer telefon ve bilgisayarlardan çıkış yapılır; bu tarayıcı açık kalır.",
    "care": "En az 6 karakter. Güvenli yerde sakla. meshmelo sitesindeysen meshmelo hesabının şifresi de yenisi olur.",
    "like": "Arka kapının kilidini değiştirmek gibi; eski anahtar kopyaları çalışmaz."
  },
  "help.site.account_pw2": {
    "t": "Yeni şifreyi tekrar yaz",
    "what": "Yeni şifrenin aynısını bir daha yaz.",
    "when": "Yeni şifre kutusunu her doldurduğunda kullan.",
    "click": "[[Hesabı kaydet]] düğmesine basınca iki kutu karşılaştırılır. Farklıysa hiçbir şey kaydedilmez, mesaj görünür.",
    "care": "Yazım hatalarını yakalar. Ne yazdığını hatırlamıyorsan ikisini temizleyip yavaşça yeniden yaz.",
    "like": "Eve gitmeden önce yeni anahtarı kilitte denemek gibi."
  },
  "help.site.account_cur": {
    "t": "Mevcut şifre (değişiklik için zorunlu)",
    "what": "Şimdi kullandığın şifredir. E-posta veya şifre değişmeden önce gerçekten sen olduğunu kanıtlar.",
    "when": "E-postanı veya şifreni değiştirirken her zaman yaz.",
    "click": "Yalnızca yazmak bir şey yapmaz; [[Hesabı kaydet]] düğmesine basınca kontrol edilir.",
    "care": "5 yanlış denemeden sonra değişiklikler 15 dakika engellenir. Unuttuysan alttaki [[Şifreni mi unuttun?]] bölümünü aç.",
    "like": "Çilingir yeni anahtar yapmadan önce eski anahtarını göstermek gibi."
  },
  "help.site.account_save": {
    "t": "Hesabı kaydet",
    "what": "Yukarıda yazdığın yeni e-postayı ve/veya yeni şifreyi kaydeder.",
    "when": "Değiştirmek istediklerini ve mevcut şifreni doldurduktan sonra bas.",
    "click": "Hemen kaydedilir. Yeni şifre diğer telefon ve bilgisayarlardan çıkış yaptırır ama burada kalırsın. İki yeni kutu da boşsa hiçbir şey olmaz.",
    "care": "Kullanım anahtarı burada kaydedilmez; aşağıda ayrı [[Anahtarı kaydet]] düğmesi vardır.",
    "like": "Yeni anahtarı çilingire verip 'şimdi kilidi değiştir' demek gibi."
  },
  "help.site.forgot": {
    "t": "Şifreni mi unuttun?",
    "what": "Şifreni hatırlamadığında yönetim sayfasına yeniden girmenin adımlarını gösterir. Açmak için başlığa bas.",
    "when": "Giriş yapamıyorsan veya üstteki mevcut şifre kutusu sürekli yanlış diyorsa kullan.",
    "click": "Açmak bir şeyi değiştirmez; yalnızca adımları gösterir. Adımlar site türüne göre değişir: Cloudflare'da, hosting dosya yöneticisinde veya meshmelo'da e-posta ile.",
    "care": "Adımları aynen izle ve sadece belirtilenleri kaldır. Şarkıların, albümlerin ve aimusiclist.com bağlantın korunur.",
    "like": "Anahtarını kaybettiğin gün için dükkânın içine asılmış yedek anahtar kılavuzu gibi."
  },
  "help.site.token_open": {
    "t": "Cloudflare'da oluştur",
    "what": "Kullanım anahtarı oluşturacağın Cloudflare sayfasını yeni sekmede açar. Kutuların çoğu önceden doldurulmuştur.",
    "when": "Anahtar oluşturmanın ilk adımında, henüz kullanım anahtarın yoksa bas.",
    "click": "Cloudflare'da [[Create Token]] açılır. İsterse giriş yap. Dönüp anahtarı yapıştırıp [[Anahtarı kaydet]] düğmesine basana kadar burada kaydedilmez.",
    "care": "Cloudflare anahtarı yalnızca bir kez gösterir. Hemen [[Copy]] düğmesine bas. İzin satırları boşsa adımlarda gösterilen ikisini ekle.",
    "like": "Hangi anahtara ihtiyacın olduğunu yazan notla anahtarcıya gitmek gibi."
  },
  "help.site.token": {
    "t": "Kullanımı gör (isteğe bağlı)",
    "what": "Cloudflare kullanım anahtarını kaydettiğin yerdir. Böylece yönetim sayfasının üstünde ücretsiz kullanım miktarlarını görebilirsin.",
    "when": "Depolama ve çalma gibi ücretsiz haklarının ne kadarını kullandığını kontrol etmek istediğinde kullan.",
    "click": "Anahtar kaydedilince üstteki kullanım kutusu hemen dolar. Anahtarı kaydetmek oturumunu kapatmaz.",
    "care": "Anahtarı şarkılarının bulunduğu Cloudflare hesabında oluştur. Başka hesaptaki anahtar sayıları okuyamaz. Anahtar olmasa da siten çalışır; sadece sayıları göremezsin.",
    "like": "Elektrik sayacını okuyan anahtar gibi; yalnızca sayılara bakmanı sağlar."
  },
  "help.site.token_change": {
    "t": "Değiştir",
    "what": "Bir anahtar zaten kaydedilmiştir. Kopyalanamasın diye yalnızca başı ve sonu görünür. Bu düğme başka anahtar girmeni sağlar.",
    "when": "Kullanım sayıları görünmüyorsa, Cloudflare'da anahtarı sildiysen veya şarkılarını başka Cloudflare hesabına taşıdıysan kullan.",
    "click": "Anahtar kutusu açılır. Yenisini kaydedene kadar eskisi çalışmaya devam eder. Eskisini korumak için [[İptal]] düğmesine bas.",
    "care": "Kırmızı satır şarkı depolamanın başka hesapta olduğunu söylüyorsa yeni anahtarı o hesapta oluştur.",
    "like": "Sayaç okuma anahtarını değiştirmek gibi; yenisini teslim edene kadar eskisi çalışır."
  },
  "help.site.token_input": {
    "t": "Kullanım anahtarı",
    "what": "Cloudflare'dan kopyaladığın anahtarı yapıştıracağın kutudur. Karakterler gizli görünür.",
    "when": "Cloudflare'da anahtar oluşturup [[Copy]] düğmesine bastıktan hemen sonra kullan.",
    "click": "Yapıştırmak tek başına kaydetmez. Yanındaki [[Anahtarı kaydet]] düğmesine bas.",
    "care": "Anahtarın tamamını boşluksuz yapıştır. Bu anahtar yalnızca sayıları ve hesap adını okur; bir şeyi değiştiremez veya silemez. Yine de kimseyle paylaşma.",
    "like": "Sayaç okuma anahtarını koyduğun yuva gibi."
  },
  "help.site.token_save": {
    "t": "Anahtarı kaydet",
    "what": "Anahtarı Cloudflare ile kontrol edip kaydeder.",
    "when": "Kullanım anahtarını kutuya yapıştırdıktan sonra bas.",
    "click": "Önce dener. Çalışıyorsa kaydeder ve üstte kullanım sayıları hemen görünür. Oturumun açık kalır. Hata varsa kırmızı mesaj neyi düzelteceğini söyler.",
    "care": "Hesap listesini göremiyorsa Cloudflare Account ID isteyen yeni kutu açılır. Doldurup tekrar bas. Farklı Cloudflare hesabından gelen anahtar reddedilir.",
    "like": "Anahtarı sayaç kutusunda denemek gibi; uyarsa orada tutarsın."
  },
  "help.site.token_account_id": {
    "t": "Cloudflare Account ID (yalnızca istenirse)",
    "what": "Cloudflare hesap numaran, 32 harf ve rakamdan oluşur. Yalnızca anahtarın hesabını bulamadığında görünür.",
    "when": "Anahtar kaydedilirken hesap listesi görülemiyorsa doldur. Bu genellikle iki izin yerine tek izin verilince olur.",
    "click": "Numarayı girip [[Anahtarı kaydet]] düğmesine yeniden bas. Numara ve anahtar eşleşirse kaydedilir.",
    "care": "Yalnızca 0–9 ve a–f karakterlerini kullan; tam 32 karakter olmalı. Kolay çözüm, [[Cloudflare'da oluştur]] ile anahtarı iki izinle yeniden oluşturmaktır.",
    "like": "Anahtar evi bulamadığında üstüne ev numarası yazmak gibi."
  },
  "help.site.token_howto": {
    "t": "Kullanım anahtarı nasıl oluşturulur? (2 dakika)",
    "what": "Cloudflare'da kullanım anahtarı oluşturmanın adımlarını gösterir. Açıp kapatmak için başlığa bas.",
    "when": "İlk anahtarı oluştururken veya üstteki sayılar görünmemeye başladığında kullan.",
    "click": "Açmak bir şeyi değiştirmez. Anahtar kaydedilene kadar açık kalır, sonra kapanır.",
    "care": "İki izin gerekir: Account Analytics Read ve Account Settings Read. Cloudflare anahtarı yalnızca bir kez gösterir; hemen kopyala.",
    "like": "Anahtarcıya giden, tezgâhı işaretlenmiş küçük bir harita gibi."
  },
  "help.site.mm_r2": {
    "t": "Şarkı depolama (R2)",
    "what": "Şarkılarının ve görsellerinin saklandığı yeri gösterir: depolama adı ve Cloudflare hesap numarası. Burası meshmelo'nun değil, senindir.",
    "when": "Sitenin hangi Cloudflare hesabını ve depolama alanını kullandığını görmek için bak.",
    "click": "Bu kart yalnızca bilgi gösterir. Değiştirmek için [[Depoyu değiştir]] düğmesini kullan.",
    "care": "Cloudflare'da bu depolama alanını silme; şarkıların her yerde çalmayı durdurur.",
    "like": "Bütün plaklarının saklandığı kendi deponun adresi gibi."
  },
  "help.site.mm_r2_change": {
    "t": "Depolama alanını değiştir",
    "what": "meshmelo sayfanı yeni sekmede açar. Oradan başka depolama alanına veya Cloudflare hesabına geçebilirsin.",
    "when": "Şarkılarını yeni depolama alanına veya başka Cloudflare hesabına taşıdığında kullan.",
    "click": "Yalnızca yeni sekme açılır. meshmelo sayfasındaki adımları tamamlamadan hiçbir şey değişmez.",
    "care": "Başka Cloudflare hesabına mı taşındın? O hesapta yeni kullanım anahtarı oluşturup aşağıdaki karta kaydet. Eski anahtar yeni hesabı okuyamaz.",
    "like": "Plaklarını yeni depoya taşımak için taşıma şirketini aramak gibi."
  },
  "help.site.mm_card": {
    "t": "meshmelo siten",
    "what": "Siten meshmelo'da bulunur ama şarkıların ve görsellerin kendi depolama alanındadır. Bu kart siteni yanında götürmene veya kapatmana yardımcı olur.",
    "when": "Yedek almak, kendi hosting'ine taşınmak veya meshmelo'yu kullanmayı bırakmak istediğinde kullan.",
    "click": "Kartın kendisi işlem yapmaz. Kopya indirmek için [[Sitemi dışa aktar]] veya meshmelo sayfanı açmak için [[meshmelo hesabım]] düğmesine bas.",
    "like": "Alışveriş merkezinde yer kiralarsın ama depondaki plaklar senindir; istediğinde toplanıp taşınabilirsin."
  },
  "help.site.mm_export": {
    "t": "Sitemi dışa aktar",
    "what": "Şarkı listesi, albümler, ayarlar, temalar ve ziyaretçi defterini içeren tek ZIP dosyası indirir. Ses ve resimler zaten kendi depolama alanında olduğundan dosyada bulunmaz.",
    "when": "Ara sıra yedek almak veya kendi hosting'ine taşınmadan önce kullan.",
    "click": "İndirme hemen başlar. Sitende hiçbir şey değişmez.",
    "care": "Dosyayı gizli sakla. Giriş bilgilerin ve siteni aimusiclist.com'a bağlayan gizli bilgi içindedir. Siten duraklatılmış olsa da dışa aktarabilirsin.",
    "like": "Aynı dükkânı başka yerde açabilmek için bütün defterinin fotokopisini almak gibi."
  },
  "help.site.mm_delete": {
    "t": "Sitemi sil",
    "what": "meshmelo siteni tamamen kapatır: sayfalar, ayarlar ve şarkı listesi kaldırılır. Silme kutusunu açmak için başlığa bas.",
    "when": "Yalnızca gerçekten bırakmak istediğinde kullan. Taşınacaksan önce [[Sitemi dışa aktar]] düğmesine bas.",
    "click": "Açmak bir şeyi değiştirmez. Silmek için site adını ve şifreni yazıp kırmızı düğmeye basmalısın.",
    "care": "Geri alınamaz. Şarkıların aimusiclist.com'dan hemen kaldırılır. Kendi depolama alanındaki dosyalara dokunulmaz. Site adın bir daha kimseye verilmez.",
    "like": "Kiralanan dükkânın anahtarını geri vermek gibi. Kendi depondaki plaklar senindir."
  },
  "help.site.mm_delete_name": {
    "t": "Onay için site adını yaz",
    "what": "Gerçekten silmek istediğini göstermek için sitenin adını ekranda göründüğü gibi aynen yaz.",
    "when": "Yalnızca siteyi silerken kullan.",
    "click": "Yazmak tek başına işlem yapmaz. Kırmızı sil düğmesine basınca kontrol edilir.",
    "care": "Harf harf aynı olmalı. Farklıysa hiçbir şey silinmez, uyarı çıkar.",
    "like": "Dükkânı kapatma formuna adını imzalamak gibi."
  },
  "help.site.mm_delete_btn": {
    "t": "Sitemi sil",
    "what": "meshmelo siteni gerçekten silen son düğmedir.",
    "when": "Üstte site adını ve mevcut şifreni yazdıktan sonra bas.",
    "click": "Bir kez daha onay sorar. Evet dersen site hemen silinir, oturumdan çıkarsın ve meshmelo sayfan açılır.",
    "care": "Geri alınamaz. İleride ihtiyacın olabilecek bilgileri önce dışa aktar. 5 yanlış şifreden sonra bir saat beklemelisin.",
    "like": "Dükkânın ışıklarını kapatıp kapıyı son kez kilitlemek gibi."
  },
  "help.site.images": {
    "t": "Banner ve profil görseli",
    "what": "Sitenin iki resmidir: en üstte geniş banner, profilinde yuvarlak resim.",
    "when": "Sitene kişisel görünüm vermek için ekle, istediğinde değiştir.",
    "click": "Resmi seçip düzenleme penceresinde kaydettiğinde hemen kaydedilir. Bu kartın ayrıca kaydet düğmesi yoktur.",
    "care": "En fazla 2 MB JPG, PNG, WebP veya GIF seçebilirsin. Orijinali değil, küçük son resim yüklenir.",
    "like": "Dükkânın üstündeki tente ve tezgâh yanındaki sahibinin fotoğrafı gibi."
  },
  "help.site.banner": {
    "t": "Üst banner",
    "what": "Site başlığının üstünde görünen geniş görseldir. En fazla 1600×400 olabilir.",
    "when": "Manzara veya yatay sanat eseri gibi geniş ve alçak resim kullan.",
    "click": "[[Görsel seç]] düğmesine bas. Pencerede kırpma çerçevesini hareket ettirebilir veya resmi bütünüyle küçültebilirsin. [[Görseli kaydet]] düğmesine basınca sitende hemen görünür.",
    "care": "En fazla 300 KB'lık hafif resim olarak saklanır. Uzun resim çok kesileceğinden geniş olanlar iyidir. Eklenmezse banner alanı gösterilmez.",
    "like": "Dükkân vitrininin üstündeki büyük boyalı tente gibi."
  },
  "help.site.image_choose": {
    "t": "Resim seç",
    "what": "Banner veya profil için cihazının resim seçme penceresini açar.",
    "when": "İlk kez resim eklemek veya var olanı değiştirmek için bas.",
    "click": "Resim seçince düzenleme penceresi açılır. Oradaki kaydet düğmesine ([[Görseli kaydet]] banner için, [[Uygula]] profil için) basana kadar değişmez. Basınca yenisi hemen eskisinin yerini alır.",
    "care": "En fazla 2 MB JPG, PNG, WebP veya GIF seç. Hareketli GIF sabit resme dönüşür. Tarayıcın resmi oluşturamıyorsa Chrome, Edge veya Firefox kullan.",
    "like": "Dükkânın çerçevesine koymak için çantadan yeni fotoğraf çıkarmak gibi."
  },
  "help.site.image_delete": {
    "t": "Kaldır",
    "what": "Banner veya profil görselini sitenden kaldırır.",
    "when": "Orada resim göstermek istemiyorsan kullan.",
    "click": "Bir kez onay sorar. Evet dersen resim hemen kaybolur. Profil resmi kaldırıldıysa kısa süre sonra aimusiclist.com'dan da kaybolur.",
    "care": "Geri alınamaz. Tekrar resim göstermek için [[Görsel seç]] ile yeniden ekle. Değiştirmeden önce eskisini silmene gerek yoktur; yeni resim seçmen yeterli.",
    "like": "Dükkânın çerçevesinden resmi çıkarıp boş bırakmak gibi."
  },
  "help.site.profile": {
    "t": "Profil görseli",
    "what": "200×200 boyutunda yuvarlak görünen fotoğrafın veya logondur. aimusiclist.com'da 'Yeni sanatçılar' bölümünde ve sitenin yanında da görünür.",
    "when": "Küçükken bile tanınan net bir yüz veya logo ekle.",
    "click": "[[Görsel seç]] düğmesine bas. Fotoğrafı sürükleyip yerleştir, yakınlaştır veya döndür, sonra [[Uygula]] düğmesine bas. Hemen kaydedilir. Siten buna uygun arka plan rengi de seçer. aimusiclist.com kısa süre sonra yeni resmi alır.",
    "care": "Köşeler daireyle kesilir, önemli kısmı ortada tut. En fazla 100 KB hafif resim olarak saklanır.",
    "like": "Dükkân sahibinin, büyük pazarda da dağıtılan kartvizitindeki fotoğrafı gibi."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Sitende Google reklamları gösterip gelir kazanmanı sağlar. AdSense hesabındaki numaraları girersin; reklamı siten hazırlar.",
    "when": "Google siteni AdSense'e kabul ettikten sonra kullan.",
    "click": "Kutuları doldur, [[Sitemde reklam göster]] seçeneğini işaretle ve [[AdSense'i kaydet]] düğmesine bas. Reklamlar yönetim panelinde değil, yalnızca sitende görünür.",
    "care": "Google genellikle kendi alan adı olan siteleri onaylar. Siten workers.dev adresindeyse önce Alan adım sekmesinden özel alan adını bağla. Reklam kodu değil, yalnızca numaraları yapıştır.",
    "like": "Dükkân vitrinindeki küçük afiş yerini reklam verene kiralayıp para kazanmak gibi."
  },
  "help.site.ads_client": {
    "t": "Yayıncı kimliği (ca-pub-…)",
    "what": "AdSense hesabındaki kişisel numarandır. ca-pub- ile başlar, ardından 16 rakam gelir.",
    "when": "AdSense hesabında bulup buraya kopyala. Reklam görünmesi için gereklidir.",
    "click": "[[AdSense'i kaydet]] düğmesiyle kaydedilir. ads.txt sayfan da otomatik oluşturulur.",
    "care": "Tam olarak ca-pub- ve ardından 16 rakam kopyala; başka bir şey olmasın. Yanlış biçimdeyse kırmızı mesaj çıkar ve kaydedilmez.",
    "like": "Reklam şirketindeki hesap numaran gibi; afişin hangi dükkâna ait olduğunu bilirler."
  },
  "help.site.ads_top": {
    "t": "Üst reklam alanı kimliği",
    "what": "Sitenin üst kısmında, banner'ın hemen altında görünen reklam alanının numarasıdır.",
    "when": "AdSense hesabında reklam alanı oluşturup numarasını buraya kopyala.",
    "click": "[[AdSense'i kaydet]] ile kaydedilir. Boş bırakırsan üstte reklam görünmez.",
    "care": "Yalnızca 6–20 rakam. Reklam kodunun tamamını yapıştırma.",
    "like": "Dükkân tentesinin hemen altındaki afiş çerçevesinin numarası gibi."
  },
  "help.site.ads_left": {
    "t": "Sol reklam alanı kimliği (isteğe bağlı)",
    "what": "Sitenin sol sütununda görünen ikinci reklam alanının numarasıdır.",
    "when": "Koyu tema gibi sol sütunu olan tema kullanıyorsan doldur.",
    "click": "[[AdSense'i kaydet]] ile kaydedilir. Temanda sol sütun yoksa numara yazsan da reklam görünmez.",
    "care": "Yalnızca 6–20 rakam. Sonradan sol sütunsuz temaya geçersen reklam kendiliğinden kaybolur.",
    "like": "İkinci afiş çerçevesi gibi; yalnızca yan duvarı olan dükkânda yeri vardır."
  },
  "help.site.ads_on": {
    "t": "Sitemde reklam göster",
    "what": "Sitendeki tüm reklamları açıp kapatan anahtardır.",
    "when": "Numaraların hazırsa işaretle. Reklamları bir süre durdurup numaraları korumak için işareti kaldır.",
    "click": "[[AdSense'i kaydet]] düğmesine basana kadar değişmez. Kaydettikten sonra reklamlar 30 saniyede görünür veya kapattıysan kaybolur.",
    "care": "Yayıncı kimliği olmadan açılamaz. Reklamlar kapalıyken numaralar kutularda saklanır.",
    "like": "Dükkân vitrinindeki afişlerin ışık anahtarı gibi."
  },
  "help.site.ads_save": {
    "t": "AdSense'i kaydet",
    "what": "Google AdSense kartındaki üç kimlik ve açma-kapama işareti dâhil her şeyi kaydeder.",
    "when": "Kartta bir şeyi değiştirdikten sonra bas.",
    "click": "Önce numaralar kontrol edilir. Hatalıysa kırmızı mesaj çıkar ve hiçbir şey kaydedilmez. Doğruysa reklamlar 30 saniyede görünür veya durur.",
    "care": "Kaydettikten sonra reklam alanları bir süre boş olabilir. Buna siten değil Google karar verir. Hiç görünmüyorsa AdSense hesabını kontrol et.",
    "like": "İmzalı afiş sözleşmesini reklam verene teslim etmek gibi."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Google'ın reklamların sana ait olduğunu doğrulamak için baktığı küçük sayfadır. Siten Yayıncı kimliğinden otomatik oluşturur.",
    "when": "Bir şey yapman gerekmez. AdSense kontrol etmeni isterse bağlantıyı aç.",
    "click": "Bağlantı sayfayı yeni sekmede açar; Yayıncı kimliğinin bulunduğu tek satır gösterir. Burada düzenlenemez, kaydettiğin kimliği izler.",
    "care": "Yayıncı kimliği yoksa sayfa boştur. Kimliği değiştirince Google'ın fark etmesi biraz sürebilir.",
    "like": "Afişlerin izinli olduğunu gösteren, vitrine asılmış belge gibi."
  },
  "help.site.country": {
    "t": "Etkin olduğun ülke",
    "what": "Müzik yaptığın ülkedir. aimusiclist.com bu bilgiyle seni o ülkenin Sanatçılar sıralamasına ekler.",
    "when": "Ülkenin sıralamasında da görünmek istiyorsan seç. Zorunlu değildir.",
    "click": "[[Site bilgilerini kaydet]] düğmesiyle kaydedilir. '— Belirtilmedi —' olarak bırakırsan yalnızca Küresel sıralamada görünürsün.",
    "care": "Gerçekten çalıştığın tek ülkeyi seç. Sonradan değiştirebilirsin.",
    "like": "Büyük pazardaki (aimusiclist.com) tezgâhının ülke bayrağı gibi; hemşehrilerin seni bulabilir."
  },
  "help.site.fields": {
    "t": "Ek alanlar (aimusiclist.com'dan)",
    "what": "Sitenin aimusiclist.com'dan aldığı Duygu gibi ek bilgi kutuları listesini gösterir. Bu kutular şarkı yükleme/düzenlemede ve Site bilgilerindeki 'Ek bilgiler' altında görünür.",
    "when": "Yeni bir kutunun neden çıktığını veya beklediğinin neden eksik olduğunu anlamak için bak.",
    "click": "Bu kart yalnızca durumu gösterir: liste sürümü, kutu sayısı ve son kontrol zamanı. Siten günde bir kez kendiliğinden kontrol eder; bir şey yapmana gerek yok.",
    "care": "Yeni liste alınamazsa kırmızı mesaj nedeni gösterir. Siten son çalışan listeyi kullanır; şarkı yükleme normal devam eder.",
    "like": "Büyük pazarın (aimusiclist.com) dükkânlara gönderdiği, plaklara hangi etiketlerin koyulacağını anlatan form gibi."
  },
  "help.site.fields_update": {
    "t": "Alanları güncelle",
    "what": "Günlük kontrolü beklemeden aimusiclist.com'dan en yeni ek bilgi kutuları listesini ister.",
    "when": "aimusiclist.com yeni kutu duyurduysa ve bugün kullanmak istiyorsan bas.",
    "click": "Kısa mesaj sonucu söyler: yeni sürümle güncellendi, zaten güncel veya hata nedeni. Liste değiştiyse yeni kutuların görünmesi için ekran yenilenir.",
    "care": "Dakikada bir basabilirsin. Çok erken basarsan kaç saniye bekleyeceğin söylenir. Eski kutulardaki yanıtların kaybolmaz.",
    "like": "Sabah postasını beklemek yerine büyük pazarı arayıp 'Yeni form geldi mi?' diye sormak gibi."
  },
  "help.site.sns": {
    "t": "Sosyal medya",
    "what": "Sosyal medya adreslerindir. İlk beş kutu sabittir: YouTube, Instagram, TikTok, Facebook ve X.",
    "when": "Müziğini paylaştığın veya hayranlarınla konuştuğun adresleri ekle. Kullanmadığın kutuyu boş bırak.",
    "click": "https:// ile başlayan tam adresi yazıp kutunun dışına bas. Kendiliğinden kaydedilir. Ziyaretçiler sitenin 'Bağlantılar' sayfasında görür, aimusiclist.com şarkıların yanında küçük simgeler gösterir. Silmek için kutuyu boşalt.",
    "care": "Adres ilgili sosyal medyaya ait olmalı; YouTube kutusu yalnızca YouTube adresi alır. En fazla 200 karakter. Yanlış adres kırmızı olur ve kaydedilmez; son doğru adres kalır.",
    "like": "Dükkân kapısındaki 'Bizi burada da bulabilirsiniz' panosu gibi."
  },
  "help.site.sns_tools": {
    "t": "Yukarı · Aşağı · Kaldır",
    "what": "Her 'Diğer sosyal medya' satırındaki düğmelerdir. [[Yukarı taşı]] ve [[Aşağı taşı]] sırayı değiştirir, [[Kaldır]] satırı siler.",
    "when": "Önemli sosyal medyayı üste almak veya artık kullanmadığını kaldırmak için kullan.",
    "click": "Hemen kaydedilir ve 'Bağlantılar' sayfası yeni sırayı gösterir. [[Kaldır]] sorusuz satırı siler.",
    "care": "Silinen adres gider. Geri getirmek için yeniden satır ekleyip adres yaz. Beş sabit kutu taşınamaz, hep önce görünür.",
    "like": "Kapıdaki panonun notlarını yeniden dizmek veya birini çıkarmak gibi."
  },
  "help.site.sns_more": {
    "t": "Diğer sosyal medya",
    "what": "SoundCloud, Spotify, Threads veya Discord gibi sabit beş dışında en fazla 5 sosyal medya adresi için yerdir.",
    "when": "Beş büyük hizmetin dışında da etkin hesabın varsa kullan.",
    "click": "Her satırda önce listeden hizmeti seç, sonra adresini yaz. Kutunun dışına basınca kaydedilir. 'Bağlantılar' sayfasında bu sırayla görünürler. aimusiclist.com'da hepsi bir 🔗 simgesini paylaşır.",
    "care": "Her hizmet yalnızca bir kez seçilebilir. Hizmet seçmeden adres kutusu açılmaz. Satırdaki hizmeti değiştirmek kayıtlı adresi siler; yeniden yaz.",
    "like": "Kapıdaki panoda insanların seni bulacağı diğer küçük yerler için ek alan gibi."
  },
  "help.site.sns_add": {
    "t": "+ Başka sosyal medya ekle",
    "what": "'Diğer sosyal medya' altına boş bir satır ekler.",
    "when": "Sabit beş hizmet dışında bir hizmet eklemek istediğinde bas.",
    "click": "Hizmet listesinin hazır olduğu yeni satır görünür. Hizmeti seçip adresini yazana kadar kaydedilmez. Zaten 5 satır varsa düğme gridir.",
    "care": "Boş bıraktığın satır kaydedilmez; sayfayı yeniden açınca kaybolur.",
    "like": "Kapı panosuna yazmak için boş not kâğıdı asmak gibi."
  },
  "help.site.sns_view": {
    "t": "Bağlantılar sayfasını görüntüle",
    "what": "Ziyaretçilerin bütün sosyal medya adreslerini gördüğü 'Bağlantılar' sayfasını açar.",
    "when": "Listenin ziyaretçilere nasıl göründüğünü kontrol etmek için kullan.",
    "click": "Yeni sekmede açılır, burada hiçbir şey değişmez. En az bir adres kaydedilince düğme görünür.",
    "like": "Müşteri gibi dışarı çıkıp kapıdaki panoya bakmak gibi."
  },
  "help.guestbook.title": {
    "t": "Ziyaretçi defteri",
    "what": "Ziyaretçilerin senin için kısa mesaj bıraktığı yerdir. Genel siteye veya bir şarkıya yazabilirler.",
    "when": "Dinleyicileri duymak veya mesajları kontrol edip temizlemek istediğinde gel.",
    "click": "Bu yalnızca başlıktır. Açıp kapatmak için [[Ziyaretçi defterini aç]] düğmesini, okumak ve silmek için alttaki listeyi kullan.",
    "like": "Misafirlerin birkaç güzel söz yazdığı dükkân kapısındaki defter gibi."
  },
  "help.guestbook.on": {
    "t": "Ziyaretçi defterini aç",
    "what": "Ziyaretçiler için defteri açıp kapatır. Açıkken menüde **Ziyaretçi defteri** ve her şarkıda 💬 düğmesi görünür.",
    "when": "Dinleyici mesajı almak için aç; çok istenmeyen mesaj gelirse veya ara vermek istersen kapat.",
    "click": "Hemen kaydedilir. Ziyaretçiler yaklaşık 30 saniyede değişikliği görür. İstediğin zaman yeniden açabilirsin.",
    "care": "Kapatmak yalnızca gizler; eski mesajlar korunur ve burada okuyup silebilirsin.",
    "like": "Dükkânın kapısına defteri koymak veya bir süre içeri almak gibi."
  },
  "help.guestbook.list": {
    "t": "Mesajlar",
    "what": "Bütün ziyaretçi defteri mesajları en yeniden başlayarak sayfa başına 20 tane görünür. Ad, saat ve ilgili şarkı (♪) gösterilir. Başlığın yanındaki sayı toplamdır.",
    "when": "Yeni mesajları okumak ve uygunsuzları silmek için ara sıra kontrol et.",
    "click": "Alttaki sayfa düğmeleriyle eski mesajlara bak. Buradan yanıtlayamaz veya düzenleyemezsin; yalnızca silebilirsin.",
    "care": "Ziyaretçi adı en fazla 20, mesajı 500 karakterdir; bağlantı yasaktır, kişi başına günde 50 mesaj. Silsen de defter kapalıyken mesajlar saklanır. **Silinmiş şarkı** ilgili şarkının kaldırıldığını belirtir.",
    "like": "Dükkân kapısındaki defteri en yeni sayfadan başlayarak karıştırmak gibi."
  },
  "help.guestbook.delete": {
    "t": "Sil",
    "what": "Bir ziyaretçi defteri mesajını kaldırır.",
    "when": "Kaba, gereksiz reklam veya başkalarının görmesini istemediğin mesajlar için kullan.",
    "click": "Önce onay sorulur. Sonra mesaj hemen sitenden silinir ve liste güncellenir.",
    "care": "Geri alınamaz. Mesajı silmek o kişinin yeniden yazmasını engellemez.",
    "like": "Dükkân kapısındaki defterden bir sayfayı koparmak gibi."
  },
  "help.domain.mm": {
    "t": "Alan adım",
    "what": "Sitenin mevcut adresini gösterir. Siten meshmelo'da olduğundan kendi alan adını burada değil meshmelo portalında bağlarsın.",
    "when": "Adresini kontrol etmek veya mymusic.com gibi kendi adresini kullanmak istediğinde bak.",
    "click": "Burada basılacak düğme yoktur. my.meshmelo.com → Sitem → Alan adım yoluna git. Henüz görünmüyorsa yakında eklenecek.",
    "care": "Mevcut adresin çalışmaya devam eder; şimdiden paylaşabilirsin.",
    "like": "Büyük alışveriş merkezinde dükkân kiralamak gibi; yeni sokak tabelanı merkez ofisi ayarlar."
  },
  "help.domain.title": {
    "t": "Alan adım",
    "what": "Sitenin mevcut adresini gösterir; uzun ücretsiz adres yerine mymusic.com gibi kendi alan adını kullanmanı sağlar.",
    "when": "Alan adın varsa veya kısa, kolay hatırlanan adres istiyorsan kullan. Google AdSense de kendi alan adını ister.",
    "click": "Bu yalnızca başlıktır. Alttaki kılavuzu izle, alan adını yazıp [[Bağla]] düğmesine bas. Bağlanınca ✓ ve alan adın görünür.",
    "care": "Adresin Cloudflare ayarlarında tanımlandığı yazıyorsa buradan değiştirilemez; kutu gri olur.",
    "like": "Dükkânının uzun ara sokak adresi yerine kolay ana cadde adresi kullanmak gibi."
  },
  "help.domain.guide": {
    "t": "Kendi alan adını nasıl bağlarsın?",
    "what": "Alan adı edinme ve sitene yönlendirme adımlarını anlatır; yaklaşık 10 dakika sürer.",
    "when": "[[Bağla]] düğmesine basmadan önce oku; Cloudflare ekranlarındaki adımları önce tamamlamalısın.",
    "click": "Adımları açmak veya kapatmak için başlığa bas. Alan adın bağlanana kadar açık kalır.",
    "care": "Alan adının ücretini kendin ödersin. Cloudflare ekran adları değişebilir; en yakın adı bul. Hosting sürümünde adımlar hosting yönetim paneli içindir.",
    "like": "Yeni adrese dükkân tabelası nasıl asılır diye gösteren harita gibi."
  },
  "help.domain.input": {
    "t": "Alan adım (kutu)",
    "what": "Satın aldığın mymusic.com gibi alan adını yaz.",
    "when": "Kılavuzdaki adımları bitirip siten bu alan adında açılmaya başladığında doldur.",
    "click": "[[Bağla]] düğmesine basana kadar bir şey olmaz.",
    "care": "Yalnızca alan adını yaz. http://, https:// veya ardından / ve başka kelimeler ekleme. Sonradan değiştirmek için yeni alan adını yazıp yeniden bağla.",
    "like": "Dükkân tabelasına yeni sokak adresini yazmak gibi."
  },
  "help.domain.connect": {
    "t": "Bağla",
    "what": "Sitenin yazdığın alan adında gerçekten açıldığını kontrol eder ve onu ana adres yapar.",
    "when": "Kutuyu alan adınla doldurduktan sonra bas.",
    "click": "Kontrol 30 saniyeye kadar sürebilir. Başarılıysa alan adı kaydedilir ve aimusiclist.com adresini otomatik günceller. Eski ücretsiz adrese gelenler yeni adrese yönlenir. Hosting sürümünde eski adres de çalışmaya devam eder.",
    "care": "Hata varsa siten bu adreste açılmıyor veya başka site açılıyordur. Kılavuz adımlarını kontrol et, birkaç dakika bekle ve tekrar dene. Çalma listelerindeki şarkılar çalışmaya devam eder.",
    "like": "Postanenin postaları yönlendirmeden önce dükkânın yeni adresini kontrol etmesi gibi."
  },
  "help.menus.form": {
    "t": "Menü ekle / Menü düzenle",
    "what": "Ziyaretçilerin sitenin üstünde gördüğü menü düğmelerini hazırlarsın. Her menü bir müzik türündeki şarkıları gösterir.",
    "when": "R&B ve Hip-hop gibi türlere göre şarkılarını bulmalarını istediğinde kullan.",
    "click": "Önce ana türü, istersen ayrıntılı türü ve adı seç, ardından [[Menüyü kaydet]] düğmesine bas. Düğme yanındaki sayı o menüde kaç şarkı olacağını gösterir.",
    "care": "Türler aimusiclist.com listesinden gelir, böylece uyumludur. En fazla 30 menü ve her tür için bir menü olabilir.",
    "like": "Dükkândaki raflara 'R&B burada, Hip-hop orada' etiketi koymak gibi."
  },
  "help.menus.main": {
    "t": "1. Ana tür",
    "what": "R&B, Hip-hop veya Dance gibi menünün büyük müzik türüdür. Liste aimusiclist.com ile aynıdır.",
    "when": "Daima önce bunu seç; olmadan menü kaydedilmez.",
    "click": "Seçince alt tür listesi açılır ve kaç şarkının uyduğu görünür.",
    "care": "Yalnızca ana tür seçersen menü, üç tür kutusundan birinde tam bu türü taşıyan şarkıları gösterir.",
    "like": "Dükkân koridorunun üstündeki 'R&B' büyük tabelası gibi."
  },
  "help.menus.sub": {
    "t": "2. Ayrıntılı tür",
    "what": "Ana türün içinde daha dar bir alt türdür. İsteğe bağlıdır.",
    "when": "Ana türde çok şarkın varsa ve belirli bir tarz için menü istediğinde kullan.",
    "click": "Listede yalnızca seçtiğin ana türün alt türleri görünür. Ana türün tamamı için 'Tüm …' bırak. [[Menüyü kaydet]] yanındaki şarkı sayısı hemen değişir.",
    "care": "Ana tür seçilene kadar gri olur. Alt tür seçersen yalnızca üç tür kutusundan birinde bu alt tür olan şarkılar görünür.",
    "like": "Büyük koridor içindeki tek rafın küçük etiketi gibi."
  },
  "help.menus.label": {
    "t": "3. Menü adı",
    "what": "Ziyaretçilerin menü düğmesinde gördüğü yazıdır. İsteğe bağlıdır.",
    "when": "'Gece Şarkıları' gibi daha samimi isim istiyorsan yaz; tür adı yeterliyse boş bırak.",
    "click": "[[Menüyü kaydet]] ile kaydedilir. Boşsa düğmede tür adı görünür; bu ad ziyaretçinin diline göre değişir.",
    "care": "En fazla 30 karakter. Kendi yazdığın isim bütün dillerde aynı görünür.",
    "like": "Raf etiketinin üstüne kendi istediğin sözü yazmak gibi."
  },
  "help.menus.save": {
    "t": "Menüyü kaydet",
    "what": "Yukarıda hazırladığın menüyü kaydeder.",
    "when": "Türü ve istersen adı seçtikten sonra bas.",
    "click": "Hemen kaydedilir. Yeni menü listenin sonuna eklenir, ziyaretçiler 30 saniye içinde görür.",
    "care": "Aynı tür için iki menü açılamaz. 30 menün varsa yenisi eklenemez. Kırmızı mesaj nedeni açıklar.",
    "like": "Hazır etiketi rafa yapıştırmak gibi."
  },
  "help.menus.order": {
    "t": "Yukarı / Aşağı",
    "what": "Menüyü menü sıralamasında bir basamak öne veya arkaya taşır.",
    "when": "En önemli menüyü öne almak için kullan.",
    "click": "Hemen kaydedilir, ziyaretçiler yeni sırayı 30 saniyede görür.",
    "care": "İlk menü yukarı, son menü aşağı gidemez; ilgili düğmeler gridir.",
    "like": "Popüler raf önce gelsin diye iki raf etiketinin yerini değiştirmek gibi."
  },
  "help.menus.edit": {
    "t": "Düzenle",
    "what": "Menünün türünü veya adını değiştirmek için yukarıdaki kutuda açar.",
    "when": "Menüyü yeniden adlandırmak veya başka türe yönlendirmek istediğinde kullan.",
    "click": "Sayfa yukarı kayar ve kutu bu menüyle dolu açılır. Değiştirip [[Menüyü kaydet]] düğmesine bas; listedeki yeri korunur. [[İptal]] kaydetmeden kapatır.",
    "like": "Raf etiketini çıkarıp yeniden yazıp aynı yere takmak gibi."
  },
  "help.menus.delete": {
    "t": "Sil",
    "what": "Bu menüyü sitenden kaldırır.",
    "when": "Artık ihtiyacın yoksa kullan.",
    "click": "Önce onay sorar. Ardından menü hemen silinir, ziyaretçiler 30 saniyede görmez olur.",
    "care": "Yalnızca menü silinir, şarkılar sitende kalır ve Ana sayfada veya diğer menülerde bulunabilir. Geri alınamaz ama menüyü yeniden oluşturabilirsin.",
    "like": "Raftan etiket çıkarmak gibi; plaklar yerinde kalır."
  },
  "help.menus.list": {
    "t": "Sitenin menüleri",
    "what": "Ziyaretçilerin üstte gördüğü sırayla bütün menülerdir. Parantezde 30 sınırından kaçını kullandığın yazılır.",
    "when": "Menüleri kontrol etmek, sıralamak, düzenlemek veya silmek için bak.",
    "click": "Her satırda menü adı, türü ve şarkı sayısı görünür. Ziyaretçiler daima önce 'Ana sayfa', albüm varsa 'Albümler' menüsünü de görür.",
    "care": "'Tür listede yok' yazıyorsa aimusiclist.com artık o türü sunmuyordur. [[Düzenle]] ile başka tür seç. Sıfır şarkılı menü de ziyaretçilere görünür ama boştur.",
    "like": "Dükkânının soldan sağa uzanan raf etiketleri gibi."
  },
  "help.tab.menus": {
    "t": "Menüler",
    "what": "Sitenin menüleridir. Her biri aimusiclist.com tür listesinden seçilen müzik türündeki şarkıları gösterir.",
    "when": "Ziyaretçilerin hangi menüleri hangi sırayla göreceğini belirlemek için aç.",
    "click": "Sekmeye basmak yalnızca görünümü değiştirir. Menü ekleme, düzenleme, taşıma ve silme hemen kaydedilir.",
    "care": "En fazla 30 menü. Önce ana tür, istersen alt tür ve en fazla 30 karakterlik ad seç. aimusiclist.com türleriyle iki site aynı biçimde sıralanır.",
    "like": "Dükkân raflarında 'R&B burada, Hip-hop orada' yazan etiketler gibi."
  },
  "help.stats.title": {
    "t": "Site istatistikleri",
    "what": "Siteni kaç kişinin ziyaret ettiğini, kaç şarkı dinlediğini ve aimusiclist.com sayılarını gösterir.",
    "when": "Günde veya haftada bir bak; sevilen şarkıları ve sitenin büyümesini gör.",
    "click": "Yalnızca bakmak siteni değiştirmez. Üstten dönem seçince alttaki tüm kartlar o dönemi gösterir.",
    "care": "Çoğu sayı **günde bir kez** (UTC'ye göre sabah erken) hesaplanır. Bugün yüklediğin şarkı yarınki sayılarda görünür.",
    "like": "Dükkân sahibinin her sabah gelen misafir ve dinlenen şarkıları yazdığı defter gibi."
  },
  "help.stats.period": {
    "t": "Dönem (7 / 30 / 90 gün)",
    "what": "Sayıların kaç günü kapsadığını seçer: 7, 30 veya 90 gün.",
    "when": "Bu hafta ne olduğunu görmek için 7, üç aylık büyük resmi görmek için 90 günü seç.",
    "click": "Bu sekmedeki sayılar, grafikler ve tablolar hemen değişir. Renkli düğme seçileni gösterir. Hiçbir yere kaydedilmez veya gönderilmez.",
    "care": "Dönem UTC'ye göre **dün** biter. Bugün her kartın küçük **Bugün** satırında ayrı görünür. **Önceki döneme göre** oku hemen önceki aynı sayıda günle karşılaştırır.",
    "like": "Dükkân defterinden aynı anda bir hafta, bir ay veya üç ay okumayı seçmek gibi."
  },
  "help.stats.note.off": {
    "t": "Kendi sitemde dinlenmeler sayılmıyor",
    "what": "Bu hosting türünde kendi sitendeki dinlenmeler henüz sayılamaz. Bu yüzden **Popüler** sıralaması aimusiclist dinlenmelerini kullanır.",
    "when": "Kendiliğinden görünür. aimusiclist sayıları yeterliyse bir şey yapmana gerek yok.",
    "click": "Mesajı oku. Ses Worker'ını bağlamak gibi bir kurulum adımı söylüyorsa onu yapınca sayım açılır. Sayılar sonraki günden başlar.",
    "care": "Sayım açılmadan önceki dinlenmeler sonradan doldurulamaz.",
    "like": "Kapısında ziyaretçi sayacı olmayan dükkân gibi; kendi sayını bilemeyince büyük pazarın sayılarına bakarsın."
  },
  "help.stats.note.dataset": {
    "t": "İstatistik kaydı kapalı",
    "what": "Siten ziyaret ve dinlenmeleri henüz kaydetmiyor. Cloudflare hesabında sayımı bir kez açmalısın.",
    "when": "Kendi sitenin sayılarını görmek istediğinde bir kez yap.",
    "click": "Mesajdaki adımları izle: Cloudflare'da tam belirtilen adda istatistik depolama alanı oluştur. Sonra sitenin GitHub sayfasında mesajda gösterilen üç satırın başından '# ' işaretini kaldırıp [[Commit changes]] düğmesine bas. Siten 1–3 dakikada güncellenir; sayılar sonraki günlük sayımdan başlar.",
    "care": "Ad tam olarak **aml_site_stats** olmalı. Cloudflare adımını atlayıp yalnızca üç satırı değiştirirsen güncelleme başarısız olur; '# ' işaretini geri koy.",
    "like": "Dükkân kapısına ziyaretçi sayacı kurmak gibi; kurulmadan kimse sayılmaz."
  },
  "help.stats.note.token": {
    "t": "Kullanım anahtarı eksik",
    "what": "Kendi sayılarını okumak için sitenin Cloudflare kullanım anahtarı gerekir. Henüz yok.",
    "when": "Bir kez ekle. Aynı anahtar yönetim ekranının üstündeki ücretsiz kullanım hakkını da gösterir.",
    "click": "**Site bilgileri** sekmesine gidip anahtarı yapıştır. Mesajdaki izin gerekli. Sayılar sonraki günlük hesaplamadan sonra görünür.",
    "care": "Anahtarı sitenin bulunduğu **aynı Cloudflare hesabında** oluştur. Gizli tut, hiçbir yerde yayımlama.",
    "like": "Sayaç odasının anahtarı gibi. Sayaç çalışsa bile anahtar olmadan okuyamazsın."
  },
  "help.stats.note.no_visits": {
    "t": "Ziyaretler sayılmıyor",
    "what": "Bu hosting sayfaları hazır dosya olarak sunar; bu yüzden ziyaret sayılmaz ama dinlenmeler sayılır.",
    "when": "Kendiliğinden görünür. Bu hosting için normaldir.",
    "click": "Basılacak bir şey yok. **Ziyaretler** kartı ve grafiği gizlenir; ülkeler, cihazlar ve diller dinlenmelere göre sayılır.",
    "like": "İçeri giren kişileri sayamayan ama pikaba konan her şarkıyı sayan dükkân gibi."
  },
  "help.stats.note.error": {
    "t": "İstatistikler okunamadı",
    "what": "Son sayım başarısız oldu. Nedeni mesajda yazılıdır.",
    "when": "Bir sorun olduğunda kendiliğinden görünür.",
    "click": "**Son kaydedilen sayılar gösteriliyor** yazıyorsa son doğru sayıları görüyorsun. Genellikle sonraki günlük sayım düzelir. Günlerce sürerse **Site bilgileri** bölümündeki kullanım anahtarını kontrol et.",
    "care": "Sayım kısa sürede düzelirse eksik günler kaybolmaz. Çok eski günler geri gelmeyebilir.",
    "like": "Sayaç okuyucusunun gelemediği sabah gibi; son okuma bir sonraki ziyarete kadar panoda kalır."
  },
  "help.stats.updated": {
    "t": "Sayıların hesaplandığı zaman",
    "what": "Sayıların en son ne zaman hesaplandığını gösterir; kesin değil yaklaşık olduklarını da söyler.",
    "when": "Sayı eski görünüyorsa bak. Saat dünü gösteriyorsa sonraki sayım henüz yapılmamıştır.",
    "care": "Sayılar UTC 00.00'dan biraz sonra günde bir kez hesaplanır. Her siteye burada gösterilen ayrı dakika ayrılır. **Botlar** (otomatik programlar) ve **giriş yaptığındaki kendi ziyaretlerin** hariç tutulur; toplam tıklamalardan biraz düşüktür.",
    "like": "Fişte basılı tarih gibi; sayımın ne zaman yapıldığını söyler."
  },
  "help.stats.csv.days": {
    "t": "Günlük CSV indir",
    "what": "Seçilen dönemin her günü için ziyaretler, dinlenmeler, aimusiclist dinlenmeleri, ziyaretçi defteri yazıları ve aimusiclist sayılarını içeren dosya oluşturur.",
    "when": "Sayıları saklamak veya Excel ya da Google Sheets'te grafik yapmak için kullan.",
    "click": "Dosya tarayıcında hazırlanır ve İndirilenler'e kaydedilir. Siten değişmez.",
    "care": "Günler UTC saatindedir. Dosya seçili dönemi izlediğinden önce 7, 30 veya 90 günü seç.",
    "like": "Dükkân defterinin sayfalarını evde saklamak için fotokopisini çekmek gibi."
  },
  "help.stats.csv.tracks": {
    "t": "Şarkı CSV'si indir",
    "what": "Her şarkı için sıralama, sıra değişimi, dinlenmeler, aimusiclist dinlenmeleri ve oradaki sayıları içeren satırlı dosya oluşturur.",
    "when": "Şarkıları hesap tablosunda karşılaştırmak veya geçmiş performanslarını saklamak için kullan.",
    "click": "Dosya tarayıcında oluşturulup İndirilenler'e kaydedilir. Siten değişmez.",
    "care": "Dinlenmeler seçtiğin döneme göredir. aimusiclist sayıları her zaman son 7 günü kapsar. Boş hücre sayı olmadığı anlamına gelir.",
    "like": "Dükkânın çok satanlar listesini defterine kopyalamak gibi."
  },
  "help.stats.refresh": {
    "t": "Şimdi yenile",
    "what": "Kendi sitendeki ziyaret ve dinlenmeleri, bugün dâhil, hemen yeniden sayar.",
    "when": "Şarkı paylaştıktan sonra dinleyicilerin gelip gelmediğini görmek için kullan. Normalde günde bir güncellenir.",
    "click": "Birkaç saniye sonra sayılar değişir. Şarkı listendeki ve sitendeki dinlenmeler de güncellenir. Sonra tekrar basmak için **1 dakika** beklemelisin.",
    "care": "Günlük sınır: kendin kurduğun sitede **200 kez**, meshmelo'da **30 kez**. aimusiclist sayıları bu düğmeyle değişmez; günde bir gelir. Düğme yoksa hosting şu anda sayamıyordur.",
    "like": "Ertesi sabahı beklemeden gün ortasında elektrik sayacını kendin kontrol etmek gibi."
  },
  "help.stats.tile.visits": {
    "t": "Ziyaretler",
    "what": "Seçilen dönemde insanların siteni kaç kez açtığıdır. Kesin olmadığı için **yaklaşık** sayı olarak gösterilir.",
    "when": "Sosyal medyada paylaşmanın ziyaretçi getirip getirmediğini görmek için bak.",
    "click": "Büyük sayının altındaki okta ▲ önceki döneme göre artış, ▼ azalış demektir. **Bugün** [[Şimdi yenile]] sonrasındaki bugünkü sayıyı veya henüz hesaplanmadıysa – gösterir.",
    "care": "Yüksek olması iyidir. Botlar ve kendi ziyaretlerin sayılmaz. Tek günde çok artarsa alttaki **Ziyaretçiler nereden geldi** bölümüne bak.",
    "like": "Dükkânının kapısından kaç misafirin geçtiği gibi."
  },
  "help.stats.tile.plays": {
    "t": "Başlatılan dinlenmeler",
    "what": "Seçilen dönemde şarkının kendi sitende baştan çalınmaya kaç kez başladığıdır.",
    "when": "Müziğin için en önemli sayıdır; yeni şarkı yükledikten sonra izle.",
    "click": "Ok önceki günlerle karşılaştırır. **Bugün** [[Şimdi yenile]] sonrasındaki bugünkü sayıyı gösterir.",
    "care": "Yüksek olması iyidir. Dinleyici erken durdursa bile şarkı **başladığında** sayılır. Giriş yaptığındaki kendi dinlemelerin sayılmaz. Günlerce sıfırsa kartın üstündeki uyarıları kontrol et.",
    "like": "Dükkândaki pikaba kaç kez plak konduğu gibi."
  },
  "help.stats.tile.plays_aml": {
    "t": "aimusiclist'ten dinlenmeler",
    "what": "aimusiclist.com'da çalınan şarkılar kendi sitenden gönderilir. Bu sayı o dinlenmeleri sayar.",
    "when": "Büyük pazarın müziğinin duyulmasına ne kadar yardım ettiğini görmek için kullan.",
    "click": "Bakmak hiçbir şeyi değiştirmez. Ok önceki günlerle karşılaştırır.",
    "care": "Yüksek olması iyidir. Bu dinlenmeler sitendeki **Popüler** sırasını **etkilemez**; aimusiclist kendi listesini tutar. İki yer farklı hesapladığından alttaki aimusiclist kartından biraz farklı olabilir.",
    "like": "Büyük pazardaki tezgahta kendi depondan gelen müziğin kaç kez çalındığını saymak gibi."
  },
  "help.stats.tile.gb": {
    "t": "Ziyaretçi defteri yazıları",
    "what": "Seçilen dönemde insanların ziyaretçi defterine kaç yeni mesaj yazdığıdır.",
    "when": "Kaç hayranın seninle konuştuğunu görmek için bak.",
    "click": "Bakmak bir şeyi değiştirmez. Ok önceki günlerle karşılaştırır.",
    "care": "Genellikle yüksek sayı daha çok hayran demektir. Kendi yazıların sayılmaz. Çok artarsa gereksiz reklam mesajları için defteri kontrol et.",
    "like": "Misafirlerin dükkân kapısındaki deftere bıraktığı notların sayısı gibi."
  },
  "help.stats.trend": {
    "t": "Günlük grafik",
    "what": "Her çubuk bir gündür. Yüksek çubuk o gün daha fazla dinlenme veya ziyaret demektir.",
    "when": "İyi geçen günleri bulmak için kullan; örneğin şarkıyı sosyal medyada paylaştığın gün.",
    "click": "Farenle çubuğun üstüne gel veya dokun; tarih ve sayı görünür. Sol taraf ölçeği gösterir.",
    "care": "Günler UTC saatindedir; bulunduğun yerde gün sabah veya akşam başlayabilir. Boş yer o gün sıfır veya sayım yok anlamına gelir.",
    "like": "Her güne bir bozuk para yığını gibi; yüksek yığın yoğun gündür."
  },
  "help.stats.table_view": {
    "t": "Tablo olarak göster",
    "what": "Aynı sayıları gün başına bir satır olarak, en yeniden eskiye gösterir.",
    "when": "Belirli günün tam sayısını görmek veya grafiği okumak zorsa kullan.",
    "click": "Basarak tabloyu açıp kapat. Hiçbir şey kaydedilmez.",
    "care": "Yalnızca seçilen dönem gösterilir. Saklamak için alttaki [[Günlük CSV indir]] düğmesini kullan.",
    "like": "Dükkân defterindeki resimler yerine düz sayı satırlarını okumak gibi."
  },
  "help.stats.col.date": {
    "t": "Tarih (UTC)",
    "what": "Her satırın saydığı gündür. Günler dünya standart saati **UTC**'ye göredir.",
    "when": "Bir günü şarkı paylaşmak gibi yaptığın bir işle eşleştirmek için bak.",
    "care": "UTC yerel saatin değildir. Kore'de UTC günü saat 09.00'da başlar. Gece geç paylaşılan şarkı sonraki veya önceki güne sayılabilir.",
    "like": "Büyük pazardaki bütün dükkânların aynı tarih yazması için dünya saatini kullanan defter gibi."
  },
  "help.stats.col.rank": {
    "t": "Sıra",
    "what": "Şarkının sitendeki **Popüler** sırasıdır. Yanında dünden beri değişimi olabilir.",
    "when": "En öndeki şarkılarını bulmak için bak.",
    "click": "Basılacak bir şey yok. ▲ o kadar sıra yükseldi, ▼ düştü, – değişmedi demektir. **NEW** yeni giriştir, **RE** listeden çıkıp geri döndü demektir.",
    "care": "Küçük sayı daha iyidir (1 en üst). – şarkının son 7 günde dinlenmediği için sırada olmadığını gösterir.",
    "like": "Dükkân vitrinindeki çok satanlar listesi numarası gibi."
  },
  "help.stats.col.plays": {
    "t": "Dinlenmeler (seçilen günler)",
    "what": "Bu şarkının seçilen dönemde kendi sitende çalınmaya kaç kez başladığıdır.",
    "when": "Şarkıları birbiriyle karşılaştırmak için kullan.",
    "care": "Yüksek olması iyidir. aimusiclist üzerinden gelen dinlenmeler burada değil, sonraki sütundadır. Yeni şarkı sıfırsa sonraki günlük sayımı bekle.",
    "like": "Bu plağın dükkânın pikabına kaç kez konduğu gibi."
  },
  "help.stats.col.plays_aml": {
    "t": "aimusiclist'ten",
    "what": "Bu şarkının seçili dönemde aimusiclist.com'da kendi sitenden gönderilerek kaç kez çalındığıdır.",
    "when": "Büyük pazarda hangi şarkılarının bulunduğunu görmek için bak.",
    "care": "Yüksek olması iyidir. Bu dinlenmeler sitenin Popüler sırasını değiştirmez. İki yer farklı saydığından **aimusiclist dinlenmeleri (7 gün)** değerinden biraz farklı olabilir.",
    "like": "Plağın büyük pazarda çalınmak için depodan kaç kez çıktığı gibi."
  },
  "help.stats.col.likes": {
    "t": "Beğeniler ♥",
    "what": "Şarkının kendi sitende en baştan bugüne aldığı toplam ♥ sayısıdır.",
    "when": "Hayranlarının en sevdiği şarkıları görmek için kullan.",
    "care": "Seçilen dönemin değil, **tüm zamanların toplamıdır**. Günde bir kez sayılır. aimusiclist beğenileri aşağıdaki kartta ayrı sayılır.",
    "like": "Hayranların dükkândaki şarkı kartına çizdiği kalpleri saymak gibi."
  },
  "help.stats.col.aml_plays7": {
    "t": "aimusiclist dinlenmeleri (7 gün)",
    "what": "aimusiclist.com'un hesabına göre şarkının son 7 günde orada kaç kez çalındığıdır.",
    "when": "Bu hafta şarkının büyük pazarda nasıl gittiğini görmek için kullan.",
    "care": "Hangi dönemi seçersen seç her zaman **7 gündür**. Günde bir kez gelir. Yüksek olması iyidir.",
    "like": "Büyük pazarın bu hafta plağının kaç kez çalındığına ilişkin kendi kaydı gibi."
  },
  "help.stats.col.aml_valid7": {
    "t": "Geçerli dinlenmeler (7 gün)",
    "what": "aimusiclist'te son 7 günde insanların **30 saniye veya daha uzun** dinlediği çalmalardır.",
    "when": "Gerçek dinlemeyi görmek için kullan; hızlı geçiş geçerli sayılmaz.",
    "care": "Yüksek olması iyidir. Genellikle tüm dinlenmelerden azdır. Çok azsa insanlar erken geçiyor olabilir; daha güçlü başlangıç veya daha iyi kapak dene. aimusiclist adil sıralama için geçerli dinlenmeleri kullanır.",
    "like": "Tezgâhta yalnızca yürüyüp geçmeyip şarkıyı gerçekten duyacak kadar kalan misafirler gibi."
  },
  "help.stats.col.chart": {
    "t": "Liste sırası",
    "what": "Şarkının aimusiclist haftalık listesinde (Top 100) kaçıncı sırada olduğunu gösterir. Yanında önceki listeye göre değişimi bulunur.",
    "when": "Şarkının büyük listeye girip girmediğini görmek için bak.",
    "care": "Küçük sayı iyidir. **NEW** yeni girdi, – şu anda listede değil demektir. Çoğu şarkı için normaldir.",
    "like": "Plağının büyük pazarın ana çok satanlar panosundaki yeri gibi."
  },
  "help.stats.col.genre_rank": {
    "t": "Tür sırası",
    "what": "Şarkının R&B veya Hip-hop gibi kendi türündeki aimusiclist sırasıdır.",
    "when": "Aynı tarzdaki şarkılar arasında durumunu görmek için kullan.",
    "care": "Küçük sayı iyidir. Tür listesi ana listeden küçüktür, burada sıra almak daha kolaydır. – henüz tür sırası yok demektir.",
    "like": "Büyük pazarın yalnızca R&B rafındaki yerin gibi."
  },
  "help.stats.col.all_rank": {
    "t": "Tüm şarkılar sırası",
    "what": "Şarkının aimusiclist'te bu hafta (cuma–perşembe) dinlenen **bütün şarkılar** arasındaki sırasıdır. Altında şimdiye kadarki en iyi sırası görünür.",
    "when": "Şarkın Top 100'de olmasa bile kullan; yükselişini görebilirsin.",
    "click": "Basılacak bir şey yok. ▲ yanında sayı geçen haftadan kaç basamak yükseldiğini, ▼ kaç basamak düştüğünü gösterir.",
    "care": "Küçük sayı iyidir. **Her cuma** değişir. Bu hafta dinlenmeyen şarkıda – görünür.",
    "like": "Plağın ana panoda olmasa da büyük pazarın tüm şarkılar listesinde sırasını görebilirsin."
  },
  "help.stats.tracks": {
    "t": "Popüler şarkılar",
    "what": "Şarkılarını dinlenme ve sıralama sayılarıyla gösteren tablodur. En iyi sıradan başlayarak en fazla 100 şarkı görünür.",
    "when": "Şu an hangi şarkın önde, hangisinin daha çok ilgiye ihtiyacı var görmek için kullan.",
    "click": "Bakmak bir şeyi değiştirmez. **Dinlenmeler** sütunu üstte seçtiğin dönemi, aimusiclist sütunları son 7 günü kapsar.",
    "care": "Buradaki sıra sitendeki **Popüler** düğmesinin sırasıyla aynıdır. Günde bir kez değişir. aimusiclist sayıları gönderildiyse ilgili sütunlar görünür.",
    "like": "Dükkân duvarına astığın çok satanlar listesi gibi."
  },
  "help.stats.rank_basis": {
    "t": "Popüler sırası nasıl hesaplanır?",
    "what": "Sitenin **Popüler** sırasını neyin belirlediğini söyler: sitendeki dinlenmeler veya siten sayamıyorsa aimusiclist dinlenmeleri.",
    "when": "Bir şarkının neden diğerinin üstünde olduğunu merak ettiğinde oku.",
    "care": "Yalnızca **son 7 gün** sayılır, dinlenen şarkılar sıralanır (en fazla 100). Eşitlikte aimusiclist geçerli dinlenmeleri, sonra yeni yükleme öne çıkar. aimusiclist üzerinden gelen dinlenmeler burada kullanılmaz.",
    "like": "Çok satanlar listesinin yanındaki, sıralamanın nasıl yapıldığını anlatan kural kartı gibi."
  },
  "help.stats.albums": {
    "t": "Albümler",
    "what": "Albümlerinin tablosudur. Her satır albümdeki bütün şarkıların dinlenmelerini toplar.",
    "when": "En çok hangi albümün dinlendiğini görmek için kullan.",
    "care": "En çok dinlenen albüm üsttedir. Bir şarkı iki albümdeyse ikisinde de sayılır.",
    "like": "Tek plak yerine kutu seti başına satışları saymak gibi."
  },
  "help.stats.album.plays": {
    "t": "Albüm dinlenmeleri (seçili günler)",
    "what": "Albümdeki şarkıların seçili dönemdeki bütün dinlenmeleridir. Kendi sitende **ve** aimusiclist üzerinden çalınanları toplar.",
    "when": "Albümleri karşılaştırmak için kullan.",
    "care": "Yüksek olması iyidir. Çok şarkılı albüm sırf daha çok şarkı içerdiği için yüksek görünebilir. **Şarkılar** sütununa da bak.",
    "like": "Bir kutu setteki bütün plakların dükkânda ve büyük pazarda toplam çalınması gibi."
  },
  "help.stats.album.aml_plays7": {
    "t": "Albüm aimusiclist dinlenmeleri (7 gün)",
    "what": "aimusiclist'in kendi sayımına göre bu albümün bütün şarkılarının son 7 günlük dinlenmesidir.",
    "when": "Albümün bu hafta büyük pazarda ne kadar sevildiğini görmek için kullan.",
    "care": "Seçtiğin dönem ne olursa olsun **7 gündür**. Yüksek olması iyidir.",
    "like": "Büyük pazarın bu hafta tüm kutu seti için tuttuğu sayı gibi."
  },
  "help.stats.listeners": {
    "t": "Dinleyiciler (dinlenmelere göre)",
    "what": "Şarkılarını dinleyenlerin ülkesini, cihazını, dilini ve günün saatini gösterir.",
    "when": "Müziğini nerede paylaşacağına ve hangi dilde yazacağına karar vermek için kullan.",
    "care": "Hosting ziyaretleri sayamadığı için bu kart ziyaretlere değil **dinlenmelere** dayanır. Kişisel bilgi saklanmaz. % görünen listenin içindeki paydır.",
    "like": "Plaklarını çalan insanların hangi şehirlerden geldiğini fark etmek gibi."
  },
  "help.stats.countries": {
    "t": "Ülkeler",
    "what": "Dinleyici veya ziyaretçilerin geldiği ülkelerdir. En büyükten başlayarak ilk 10 gösterilir.",
    "when": "Başlıklarda hangi dili kullanacağını veya belli bir ülkede paylaşım yapmayı planlamak için bak.",
    "care": "**Bilinmiyor** ülkenin bulunamadığı anlamına gelir. Küçük bilinmeyen yüzdesi normaldir.",
    "like": "Dükkândaki dünya haritasına misafirlerin ülkelerini iğnelemek gibi."
  },
  "help.stats.devices": {
    "t": "Cihazlar",
    "what": "İnsanların siteni telefon, tablet veya bilgisayarda açtığını gösterir.",
    "when": "Tema (site tasarımı) seçerken kullan. Çoğu kişi telefondaysa telefon görünümünü kontrol et.",
    "care": "Birbirinden ayırt edilemeyen cihazlar gösterilmez.",
    "like": "Misafirlerin yürüyerek, bisikletle veya arabayla geldiğini fark etmek gibi."
  },
  "help.stats.langs": {
    "t": "Diller",
    "what": "Ziyaretçilerin telefon veya bilgisayarlarında ayarlı dillerdir. İlk 10 gösterilir.",
    "when": "Site metinlerini ve şarkı başlıklarını hangi dilde yazacağına karar vermek için kullan.",
    "care": "Bu cihazın dilidir; kişinin en iyi konuştuğu dil olmayabilir. **Bilinmiyor** cihazın dil söylemediğini belirtir.",
    "like": "Misafirlerin içeri girerken hangi dilleri konuştuğunu duymak gibi."
  },
  "help.stats.audience": {
    "t": "Kitle",
    "what": "Ziyaretçilerin ülkelerini, nereden geldiklerini, cihazlarını, dillerini ve günün saatini gösterir.",
    "when": "Müziğini nerede paylaşacağına, hangi dilde yazacağına karar vermek için kullan.",
    "click": "Bakmak bir şeyi değiştirmez. Her liste seçtiğin dönemi izler.",
    "care": "Kişisel bilgi saklanmaz. 'Kore' veya 'Telefon' gibi genel gruplar sayılır. % listedeki paydır.",
    "like": "Dükkân sahibinin 'Bugün birçok misafir komşu şehirden, akşam, yürüyerek geldi' diye fark etmesi gibi."
  },
  "help.stats.refs": {
    "t": "Ziyaretçiler nereden geldi?",
    "what": "İnsanların siteni nasıl bulduğunu gruplar: adres veya yer imi, arama, sosyal ve müzik uygulamaları, aimusiclist.com, başka siteler ve site içi geçişler.",
    "when": "Hangi paylaşım yolunun en iyi sonuç verdiğini görmek için kullan.",
    "care": "**Doğrudan / yer imi**, kaynağını bildirmeyen sohbet uygulamalarından açılan bağlantıları da içerir. **Site içinden** kendi sayfaların arasında geçiştir.",
    "like": "Kapıda her misafire 'Dükkânımızı nereden duydunuz?' diye sormak gibi."
  },
  "help.stats.domains": {
    "t": "En çok yönlendiren siteler",
    "what": "Sitene en fazla ziyaretçi gönderen internet sitelerinin adlarıdır. En fazla 10 gösterilir.",
    "when": "Hangi paylaşımın insanları getirdiğini öğrenip teşekkür etmek veya tekrar paylaşmak için kullan.",
    "care": "Tam sayfa adresi değil, yalnızca site adı gösterilir. Kendi sitenin içindeki ziyaretler burada sayılmaz.",
    "like": "Dükkânına yol gösteren komşu dükkânların listesi gibi."
  },
  "help.stats.hours": {
    "t": "Günün saatleri",
    "what": "Her çubuk 0.00–23.00 arasındaki bir saattir. Seçilen dönemde daha yüksek çubuk o saatte daha çok dinlenme veya ziyaret demektir.",
    "when": "Yeni şarkı paylaşmak için iyi saati bul. En yoğun saatten biraz önce paylaş.",
    "click": "Farenle çubuğa gel veya dokun; saat ve sayı görünür.",
    "care": "Saatler **bilgisayarının saatine** göredir. Başlık UTC'den farkı gösterir. Yarım saatlik saat dilimi olan bazı yerlerde saatler UTC kalır.",
    "like": "Dükkânın öğlen ve okul sonrası en yoğun olduğunu bilmek gibi."
  },
  "help.stats.aml.title": {
    "t": "aimusiclist.com'da",
    "what": "aimusiclist.com'daki dinlenme, geçerli dinlenme, beğeni, çalma listesine ekleme sayıları ile günlük grafik ve ülkeleri gösterir.",
    "when": "Herkese açık şarkılarının büyük pazarda nasıl gittiğini görmek için kullan.",
    "click": "Bakmak bir şeyi değiştirmez. Kartlar üstte seçtiğin dönemi izler.",
    "care": "Bu sayılar **günde bir kez** (sabah) gelir. [[Şimdi yenile]] değiştirmez. 'Bağlı değil' görürsen önce aimusiclist.com bağlantısını kur. Yalnızca aimusiclist'te açık şarkılar sayılır.",
    "like": "Büyük pazarın tezgâhın hakkında her sabah gönderdiği rapor gibi."
  },
  "help.stats.aml.plays": {
    "t": "aimusiclist dinlenmeleri",
    "what": "Seçilen dönemde şarkılarının aimusiclist.com'da kaç kez çalındığıdır.",
    "when": "Büyük pazarda daha çok kişinin seni duyup duymadığını görmek için kullan.",
    "care": "Yüksek olması iyidir. Ok önceki döneme göre değişimi gösterir. Yalnızca açık şarkılar sayılır. Birden sıfıra düşerse şarkıların hâlâ açık ve sitenin bağlı olduğunu kontrol et.",
    "like": "Büyük pazardaki tezgâhında plakların kaç kez çalındığı gibi."
  },
  "help.stats.aml.valid": {
    "t": "Geçerli dinlenmeler (30 sn+)",
    "what": "Seçilen dönemde aimusiclist'te insanların 30 saniye veya daha uzun dinlediği çalmalardır.",
    "when": "Hızlı geçişleri değil, gerçek dinlemeyi görmek için kullan.",
    "care": "Yüksek olması iyidir. **Dinlenmeler** sayısından çok düşükse insanlar erken geçiyor olabilir. aimusiclist adil sıralama için geçerli dinlenmeleri kullanır; liste sıran için önemlidir.",
    "like": "Tezgâhta şarkıyı gerçekten duyacak kadar kalan misafirler gibi."
  },
  "help.stats.aml.likes": {
    "t": "aimusiclist beğenileri",
    "what": "Seçilen dönemde şarkılarının aimusiclist.com'da aldığı beğeni sayısıdır.",
    "when": "Hayranlarının yeni şarkılarını nasıl karşıladığını görmek için kullan.",
    "care": "Yüksek olması iyidir. Kendi sitendeki değil, aimusiclist beğenileridir. Kendi sitendekiler Popüler şarkılar tablosunun **Beğeniler ♥** sütunundadır.",
    "like": "Büyük pazar tezgâhındaki panoya bırakılan kalpler gibi."
  },
  "help.stats.aml.adds": {
    "t": "Çalma listelerine eklendi",
    "what": "Seçilen dönemde insanların şarkılarını aimusiclist.com çalma listelerine kaç kez eklediğidir.",
    "when": "İnsanların şarkılarını tekrar tekrar dinlemek isteyip istemediğini görmek için kullan.",
    "care": "Yüksek olması iyidir. Listeye ekleme güçlü işarettir: o kişi şarkıya geri dönmeyi düşünüyor.",
    "like": "Misafirin tezgahta bir kez dinlemek yerine plağını eve götürmesi gibi."
  },
  "help.stats.aml.trend": {
    "t": "Günlük aimusiclist dinlenmeleri",
    "what": "Her çubuk aimusiclist.com'daki bir günlük dinlenmedir. Yüksek çubuk o gün daha çok dinlenme demektir.",
    "when": "Şarkıların büyük pazarda ne zaman sevildiğini, örneğin listeye girdiği haftayı görmek için kullan.",
    "click": "Fareyle çubuğa gel veya dokun; tarih ve sayı görünür.",
    "care": "Grafik kendi sitenin sayılarıyla aynı günde (dün, UTC) biter. Boş yer o gün sıfır veya veri yok demektir.",
    "like": "Büyük pazar tezgâhın için her güne bir madeni para yığını gibi."
  },
  "help.stats.aml.countries": {
    "t": "aimusiclist dinleyici ülkeleri",
    "what": "Şarkılarını aimusiclist.com'da çalanların ülkeleridir. En büyükten başlayarak ilk 10 gösterilir.",
    "when": "Büyük pazarda müziğinin büyüdüğü ülkeleri bulmak için kullan.",
    "care": "Liste aimusiclist tarafından yapılır, günde bir gelir. Kendi sitenin ülkelerinden farklı olabilir.",
    "like": "Büyük pazarın tezgâhına gelenlerin ülkelerini söylemesi gibi."
  },
  "help.stats.free.r2_storage": {
    "t": "Depolama alanı",
    "what": "Şarkıların ve resimlerinin Cloudflare depolamasında kapladığı yerdir. Ücretsiz planda **10 GB** vardır.",
    "when": "Çok şarkı veya büyük dosya yüklemeden önce kontrol et.",
    "care": "Ücretsiz miktarı aşarsan Cloudflare ücret alır. Gereksiz şarkıları silmek yer açar. WAV dosyaları MP3'ten çok daha büyüktür.",
    "like": "Deponun ne kadar dolu olduğu gibi."
  },
  "help.stats.free.workers": {
    "t": "Bugünkü site istekleri",
    "what": "Bugün sitenden kaç kez sayfa, şarkı veya resim istendiğidir. Ücretsiz planda **günde 100.000** izin verilir.",
    "when": "Çok kişinin geldiği, örneğin büyük paylaşım yaptığın günlerde kontrol et.",
    "care": "Günde 100.000'i aşarsan siten **günün kalanında durur** (ücret yoktur). 00.00 UTC'de (Kore'de 09.00) yeniden başlar.",
    "like": "Dükkân kapısının günde belirli sayıda açılabilmesi gibi; dolunca yarına kadar kapanır."
  },
  "help.stats.free.r2_class_a": {
    "t": "Bu ay depolama yazmaları",
    "what": "Bu ay şarkı yükleme veya ayar değiştirme gibi kaç kez depolamaya bir şey kaydedildiğidir. Ücretsiz hak **ayda 1 milyon** işlemdir.",
    "when": "Çok yükleme veya değişiklik yapıyorsan kontrol et.",
    "care": "Normal kullanım sınırın çok altındadır. Aşarsan Cloudflare ücret alır. Sayı her ay sıfırlanır.",
    "like": "Bu ay depoya kaç kez kutu konduğu gibi."
  },
  "help.stats.free.r2_class_b": {
    "t": "Bu ay depolama okumaları",
    "what": "Bu ay çoğunlukla şarkı çalmak için depodan kaç kez veri alındığıdır. Ücretsiz hak **ayda 10 milyon** okumadır.",
    "when": "Şarkıların çok dinlenmeye başladığında kontrol et.",
    "care": "Sınırı aşarsan Cloudflare ücret alır. Sayı her ay sıfırlanır. Popülerleşince çubuk büyümesi iyidir.",
    "like": "Bu ay depodan kaç kez plak çıkarıldığı gibi."
  },
  "help.stats.free.ae": {
    "t": "Bugünkü istatistik kayıtları",
    "what": "Sitenin bugün istatistik defterine yazdığı satır sayısıdır (ziyaret, dinlenme veya defter mesajı başına bir satır). Ücretsiz hak **günde 100.000 satırdır**.",
    "when": "Çok yoğun günlerde kontrol et.",
    "care": "Bu çubuk bugünkü sayım yapıldıysa, örneğin [[Şimdi yenile]] sonrasında görünür. Normal site sınırın altında kalır. Ziyaretçi sayfaları ve şarkılar bu çubuğa bağlı değildir.",
    "like": "Ziyaretçi sayacının bugün defterine yazdığı satır sayısı gibi."
  },
  "help.stats.free.title": {
    "t": "Ücretsiz plan alanı",
    "what": "Sitenin Cloudflare ücretsiz planını ne kadar kullandığını gösteren çubuklardır. Her çubuk %100'ün altındaysa site ücretsiz çalışır.",
    "when": "Ara sıra ve çok şarkı yükledikten sonra mutlaka bak.",
    "click": "Bakmak bir şeyi değiştirmez. Çubuk **%70**'te uyarı rengine, **%90**'da tehlike rengine döner.",
    "care": "%100'e yaklaşıyorsa büyük dosya yüklemeyi bırak ve hangi çubuğun dolduğunu kontrol et. Ücretsiz plan yaklaşık 1.000 şarkıya (her biri 10 MB) ve günde birkaç bin ziyaretçiye yeter.",
    "like": "Dükkânın su ve elektrik sayaçları gibi; ücretsiz sınırın içinde kalırsan ödemezsin."
  },
  "help.an.title": {
    "t": "Analiz",
    "what": "Şarkılarının zamanla nasıl hareket ettiğini gösterir: yükselen ve düşen sıralar, yükselişteki şarkılar ve aimusiclist.com haberleri.",
    "when": "Haftada bir eğilimleri görmek için aç. **İstatistikler** 'kaç tane', bu sekme ise 'yükseliyor mu düşüyor mu' sorusunu yanıtlar.",
    "click": "Bakmak siteni değiştirmez. Üstten dönem seçince grafikler ve tablo ona uyar.",
    "care": "Siten günde bir kayıt yazar. İlk gün çizilecek şey yoktur, sonraki sabah grafiklere gün gün eklenir. Yaklaşık iki yıldan eski kayıtlar silinir.",
    "like": "Dükkânın her gün tuttuğu günlük gibi; haftalar sonra geriye bakıp değişimi görürsün."
  },
  "help.an.period": {
    "t": "Dönem (7 / 30 / 90 gün / Tümü)",
    "what": "Grafik ve tablonun kaç günü gösterdiğini seçer. **Tümü** şimdiye kadar kaydedilmiş her günü açar.",
    "when": "Bu hafta için 7, uzun dönem için 30 veya 90, bir şarkının bütün geçmişi için **Tümü** kullan.",
    "click": "Grafikler ve tablo hemen değişir. **Tümü** ilk kez eski kayıtları da açtığından birkaç saniye sürebilir.",
    "care": "Bazı kutular seçimin ne olursa olsun son 7 güne bakar: **Yükselen şarkılarım**, **7 günlük değişim** sütunu ve aimusiclist sayıları. **Beğeniler ve listeye eklemeler** en fazla 90 gün gösterir.",
    "like": "Dükkân günlüğünün kaç sayfasını birlikte okuyacağını seçmek gibi."
  },
  "help.an.note.start": {
    "t": "Kayıtlar bugün başlıyor",
    "what": "Siten günlük kayıt tutmaya yeni başladı; henüz geçmiş gün yok.",
    "when": "Bu özellik açıldığında ilk gün görünür.",
    "click": "Yapacak bir şey yok. Yarın dön; her sabah grafiklere bir gün eklenir.",
    "care": "Bugünden önceki günler sonradan doldurulamaz; grafikler bugün başlar.",
    "like": "Yepyeni günlüğün ilk sayfası gibi; yarın bir satır olacaktır."
  },
  "help.an.note.since": {
    "t": "Kayıt başlangıcı",
    "what": "Sitenin günlük kayıt tutmaya başladığı ilk gündür. Grafikler daha geriye gidemez.",
    "when": "Grafik geç başlamış görünüyorsa bak.",
    "care": "Kayıtlar yaklaşık iki yıl tutulur; daha eski aylar otomatik silinir.",
    "like": "Dükkân günlüğünün ilk sayfasına yazılmış tarih gibi."
  },
  "help.an.note.feed": {
    "t": "aimusiclist verileri",
    "what": "Siten günde bir kez aimusiclist.com'dan yükselen şarkılar, liste çizgileri ve haberleri içeren küçük rapor alır. Satır eldeki raporun tarihini gösterir.",
    "when": "Yükselenler listesi veya haberler eski görünüyorsa kontrol et.",
    "click": "Basılacak bir şey yok. Rapor günde bir kendiliğinden gelir. Henüz ulaşmadı diyorsa yarın tekrar bak.",
    "care": "Bu sekmeyi sık açmak aimusiclist'ten yeni istek yapmaz; yalnızca saklanan raporu gösterir. Ek maliyet oluşturmaz.",
    "like": "Büyük pazarın her sabah dükkân kapına bıraktığı gazete gibi."
  },
  "help.an.note.feed_old": {
    "t": "Bugünkü veriler ulaşmadı",
    "what": "Siten bugünkü aimusiclist.com raporunu almaya çalıştı ama gelmedi. Son rapor gösteriliyor.",
    "when": "Kendiliğinden görünür.",
    "click": "Yapacak bir şey yok; siten yarın kendiliğinden tekrar dener.",
    "care": "Kendi sayılarının etkilenmez. Yalnızca aimusiclist kutuları bir günlük eski olabilir. Günlerce sürerse aimusiclist.com bağlantını kontrol et.",
    "like": "Gazetenin gelmediği sabah gibi; dünkü gazete masada kalır."
  },
  "help.an.news": {
    "t": "aimusiclist haberleri",
    "what": "aimusiclist.com'un en yeni beş mesajıdır. **Liste raporu** sıralamaları, **Duyuru** hizmet değişikliklerini anlatır.",
    "when": "**Analiz** sekmesinde nokta gördüğünde oku; yeni haber vardır.",
    "click": "**Devamını oku** ile tüm haberi aimusiclist.com'da yeni sekmede aç. Sekmeyi açmak noktayı kaldırır.",
    "care": "Haberler aimusiclist verileriyle birlikte günde bir gelir. Ekran hafif kalsın diye görseller burada gösterilmez.",
    "like": "Büyük pazarın son beş afişini gösteren duyuru panosu gibi."
  },
  "help.an.rank.basis": {
    "t": "Hangi sıra çizilsin?",
    "what": "Grafiğin hangi sırayı göstereceğini seç. **aimusiclist sırası**, aimusiclist'teki bütün şarkılar arasındaki yer; **Sitemin sırası**, kendi Popüler listendir. **İkisi** iki grafik çizer.",
    "when": "Büyük pazardaki yerin için aimusiclist, kendi dinleyicilerinin sevdiğini görmek için site sırasını seç.",
    "click": "Grafik hemen değişir. Şarkı seçimleri en iyi üç şarkıya döner. **Yükselen şarkılarım** ve **7 günlük değişim** sütunu da bu seçimden etkilenir.",
    "care": "Başlangıçta varsa aimusiclist sırası kullanılır. Hiç sıralamaya girmemiş şarkı seçim listesinde görünmez.",
    "like": "Büyük pazarın panosuyla kendi dükkânının panosu arasında seçim yapmak gibi."
  },
  "help.an.rank": {
    "t": "Sıra değişimleri",
    "what": "Şarkıların günlük sıralarını gösteren çizgi grafiğidir. Her şarkının kendi rengi, çizgi biçimi ve nokta şekli vardır.",
    "when": "Şarkının yükselip düşmesini, sabit kalmasını veya birkaç şarkıyı karşılaştırmayı görmek için kullan.",
    "click": "Başlığın altından şarkı seç. Noktanın üstüne fareyle gel veya dokun; şarkı, tarih ve sıra görünür.",
    "care": "**Grafikte yukarıda olmak daha iyidir** (1 en üstte). Sıralar çok farklıysa tüm çizgiler sığsın diye ölçek sıkışır; aralıklar eşit olmayabilir.",
    "like": "Dağa tırmanma haritası gibi: her şarkı bir dağcı, haritanın üstü zirvedir."
  },
  "help.an.rank.pick": {
    "t": "Şarkıları seç",
    "what": "Çizginin altındaki şarkı adları anahtardır. İşaretli şarkının grafikte çizgisi olur.",
    "when": "En yeni şarkınla en iyin gibi birkaç şarkıyı karşılaştırmak için seç.",
    "click": "Şarkı adına basıp ekle veya çıkar. Grafik hemen değişir. Başlangıçta en iyi sıraya sahip üç şarkı seçilir.",
    "care": "**En fazla 8 şarkı** seçilebilir. Sekiz olunca birini çıkarmadan başka işaretleyemezsin. Seçimler kaydedilmez; sıra türünü değiştirince sıfırlanır.",
    "like": "Dağ haritasında hangi dağcıları takip edeceğini seçmek gibi."
  },
  "help.an.rank.gap": {
    "t": "Çizgide kopukluklar",
    "what": "Kopukluk, o şarkının o gün sırası olmadığı anlamına gelir.",
    "when": "Çizgi durup sonra yeniden başladığında bu açıklamayı oku.",
    "care": "Normaldir. Son 7 günde kimse dinlemediyse veya o günün sayıları gelmediyse sıra olmaz. Tek bir nokta varsa yalnızca bir gün sıra almıştır.",
    "like": "Bir süre yoldan ayrılıp sonra geri dönen dağcı gibi."
  },
  "help.an.sort": {
    "t": "Sırala",
    "what": "Tablonun sırasını seçer: **En çok dinlenen**, **Dinleme süresi**, **Yükselen** (bu haftanın en büyük sıra artışı) veya **En yeni** (son yüklenen önce).",
    "when": "Şimdi paylaşılacak şarkıları bulmak için Yükselen, yenileri kontrol etmek için En yeni kullan.",
    "click": "Tablo hemen sıralanır. Hiçbir şey kaydedilmez.",
    "care": "Eşit değerli şarkılar başlığa göre sıralanır. **Yükselen** modunda yeni sıra alan NEW şarkılar gerçek değişimi olanlardan sonra, sırası olmayanlar en sonda gelir.",
    "like": "Rafı satışa, dinlenme süresine, eğilime veya geliş tarihine göre dizmek gibi."
  },
  "help.an.table": {
    "t": "Şarkılarıma genel bakış",
    "what": "Bütün şarkıların dinlenme, dinleme süresi, aimusiclist sırası, 7 günlük değişim ve yükleme tarihini gösteren tablodur.",
    "when": "En güçlü ve yeni yükselmeye başlayan şarkılarını bulmak için kullan.",
    "click": "Başlığın yanındaki sıralama düğmelerini kullan. En fazla 200 şarkı gösterilir.",
    "care": "Yalnızca ses dosyası olan şarkılar listelenir. Küçük telefon ekranında **Yükleme tarihi** sütunu yer kazanmak için gizlenir.",
    "like": "Dükkân raflarındaki bütün plakların tam fiyat listesi gibi."
  },
  "help.an.own_off": {
    "t": "Sitemdeki dinlenmeler sayılmıyor",
    "what": "Siten kendi dinlenmelerini henüz sayamıyor. Bu yüzden **Dinlenmeler** sütunu yerine son 7 günün aimusiclist dinlenmelerini gösterir.",
    "when": "Kendiliğinden görünür.",
    "click": "Basılacak bir şey yok. Dinlenme sayımını açarsan (**İstatistikler** sekmesindeki uyarılara bak), bu sütun kendi dinlenmelerine geçer.",
    "care": "Bu durumda Dinlenmeler dönem düğmelerini izlemez; her zaman son 7 gündür.",
    "like": "Dükkânın sayacı yoksa bir süre büyük pazarın sayılarından yararlanmak gibi."
  },
  "help.an.col.plays": {
    "t": "Dinlenmeler",
    "what": "Seçilen dönemde şarkının kendi sitende kaç kez çalındığıdır.",
    "when": "En çok çalınan şarkılarını bulmak için kullan.",
    "care": "Yüksek olması iyidir. aimusiclist üzerinden gelen dinlenmeler buna katılmaz. – bu şarkı için sayı olmadığını gösterir.",
    "like": "Plağın dükkândaki pikaba kaç kez konduğu gibi."
  },
  "help.an.col.time": {
    "t": "Dinleme süresi",
    "what": "İnsanların şarkıyı toplam yaklaşık ne kadar süre dinlediğidir: **dinlenme × şarkı uzunluğu**.",
    "when": "Kısa ve uzun şarkıları daha adil karşılaştırmak için kullan.",
    "care": "Bu bir **tahmindir**. Siten dinleyicinin yarıda durduğunu bilmez; gerçek süre daha kısa olabilir. Süresi kaydedilmemiş şarkıda – görünür.",
    "like": "Pikabın ne kadar çalıştığını, kaç kez döndüğünü plak süresiyle çarparak tahmin etmek gibi."
  },
  "help.an.col.rank": {
    "t": "aimusiclist sırası",
    "what": "Şarkının aimusiclist'teki bütün şarkılar arasındaki son sırasıdır.",
    "when": "Hangi şarkının büyük pazarda en iyi durumda olduğunu görmek için kullan.",
    "care": "Küçük sayı iyidir. Haftada bir (cuma) değişir. – henüz sıra yok demektir; bu hafta dinlenmeyen şarkı için normaldir.",
    "like": "Plağının büyük pazarın tüm listesindeki numarası gibi."
  },
  "help.an.col.rise": {
    "t": "7 günlük değişim",
    "what": "Şarkının sırasının 7 gün öncesine göre kaç basamak değiştiğidir.",
    "when": "Yükselmeye başlayan şarkıları bulmak için kullan.",
    "click": "Basılacak bir şey yok. ▲ yükseldi, ▼ düştü, – değişmedi demektir. **NEW** yedi gün önce sıra olmadığını gösterir.",
    "care": "▲ iyidir. **Sıra değişimleri** bölümünde seçtiğin sıralama türünü (aimusiclist veya sitem) kullanır. Bir gün eksikse önceki 3 günün en yakını alınır.",
    "like": "Dağcının bu hafta zirveye doğru kaç adım attığını kontrol etmek gibi."
  },
  "help.an.col.uploaded": {
    "t": "Yüklendi",
    "what": "Şarkıyı sitene yüklediğin gündür.",
    "when": "Yeni ve eski şarkıları karşılaştırmak için kullan.",
    "care": "Küçük telefon ekranında bu sütun gizlenir. Görmek için telefonu yatay çevir veya bilgisayar kullan.",
    "like": "Plak dükkâna geldiğinde kutusuna basılan tarih gibi."
  },
  "help.an.mine": {
    "t": "Yükselen şarkılarım",
    "what": "Bu hafta sırası en çok yükselen en fazla beş şarkını, son 14 günü gösteren küçük çizgiyle birlikte sunar.",
    "when": "Şimdi hangi şarkını paylaşacağını seçmek için kullan; yükselen şarkı ufak bir destekle daha hızlı büyüyebilir.",
    "click": "Basılacak bir şey yok. Kartlar kaç basamak yükseldiğini ve 7 gün önceki ve şimdiki sırasını gösterir.",
    "care": "Daima **son 7 güne** bakar. **Sıra değişimleri** bölümünde seçtiğin türü izler; başlığın altındaki küçük satırın sonunda yazılıdır. Yalnızca gerçekten yükselenler listelenir.",
    "like": "Dükkânının 'bu haftanın gözdesi' köşesi gibi."
  },
  "help.an.aml.genre": {
    "t": "Müzik türü",
    "what": "Yalnızca seçilen türün yükselen şarkılarını gösterir. **Tüm türler** bütün listeyi gösterir.",
    "when": "Kendi türünü seçip kiminle yarıştığını görmek için kullan.",
    "click": "Liste hemen değişir. Kaydedilmez.",
    "care": "Yalnızca bugün yükselen şarkısı bulunan türler listelenir.",
    "like": "Büyük pazarın sadece R&B koridorunda dolaşmak gibi."
  },
  "help.an.aml": {
    "t": "aimusiclist'te yükselenler",
    "what": "Şu anda aimusiclist'te hızla yükselen herkesin şarkılarıdır. Kendininkiler **Benim şarkım** etiketi taşır.",
    "when": "Hangi müziğin popüler olduğunu görmek ve öğrenebileceğin sanatçılar bulmak için kullan.",
    "click": "Başlığa basınca şarkının aimusiclist sayfası yeni sekmede açılır; orada dinleyebilirsin. Bu ekranda çalınmaz.",
    "care": "Liste aimusiclist verileriyle günde bir gelir. ▲ kaç sıra yükseldiğini, **NEW** yeni girişi gösterir. Dinleyici sayısı kaç kişinin dinlediğidir.",
    "like": "Büyük pazarda bugün hangi tezgâhlarda uzun kuyruk var diye dolaşmak gibi."
  },
  "help.an.s1": {
    "t": "Yeni şarkıların başlangıcı",
    "what": "Yeni şarkılarının yüklemeden sonraki ilk 7 günde kendi sitende biriken dinlenmelerini gösteren grafiktir. En yeni altı şarkı olabilir.",
    "when": "Yeni şarkının önceki şarkılardan daha güçlü başlayıp başlamadığını karşılaştır.",
    "click": "Noktaya fareyle gel veya dokun; şarkı, gün ve toplam dinlenme görünür. Alttaki liste hangi çizginin hangi şarkı olduğunu gösterir.",
    "care": "Yalnızca **kayıt başladıktan sonra** yüklenen şarkılar görünür. Siten kendi dinlenmelerini sayamıyorsa boş kalır.",
    "like": "Her plağın sıfırdan başladığı ve ilk hafta kimin öne geçtiğine baktığın yarış gibi."
  },
  "help.an.s2": {
    "t": "Top 100'e uzaklık",
    "what": "En fazla beş şarkının aimusiclist Top 100 listesine yaklaşık ne kadar uzakta olduğunu anlatır.",
    "when": "'Bu hafta yaklaşık 20 dinleyici daha' gibi hedef koymak için kullan.",
    "click": "Basılacak bir şey yok. Her satır şarkının zaten Top 100'de olup olmadığını, kaç dinleyici daha gerekebileceğini veya yakında olabileceğini söyler.",
    "care": "Bu bir **tahmindir**, söz değildir. Gerçek liste başka şeyler de inceler; yakın olmak giriş garantisi değildir. Top 100 henüz dolu değilse giriş kuralını geçen şarkılar girer.",
    "like": "Dağ yolundaki 'zirveye yaklaşık 200 adım' tabelası gibi."
  },
  "help.an.s2.note": {
    "t": "Neden tahmin?",
    "what": "aimusiclist sitene kesin dinleyici sayısını söylemez. Bu yüzden son 7 günün **geçerli dinlenmeleri** üzerinden tahmin eder.",
    "when": "Bu kutudaki sayılar tuhaf görünüyorsa oku.",
    "care": "aimusiclist **kişi başına günde bir dinlenme** sayar. Dolayısıyla farklı dinleyici sayısı dinlenmelerden düşük olabilir. Sonucu yalnızca yaklaşık rehber kabul et.",
    "like": "Ayak izlerinden kaç kişi geldiğini tahmin etmek gibi; biri iki kez geçmiş olabilir."
  },
  "help.an.s3": {
    "t": "Beğeniler ve çalma listesine eklemeler",
    "what": "Şarkılarının aimusiclist'te günden güne aldığı beğeni ve listeye ekleme sayılarını, en çok alan şarkıları gösterir.",
    "when": "Hangi şarkıların yalnızca bir kez dinlenmekten öte gerçekten sevildiğini görmek için kullan.",
    "click": "Fareyle çubuğa gel veya dokun; tarih ve sayı görünür.",
    "care": "Yüksek olması iyidir. **Tümü** seçsen de en fazla son **90 günü** gösterir. Sayılar aimusiclist'ten günde bir gelir.",
    "like": "Büyük pazar tezgâhındaki kalpleri ve 'eve götür' etiketlerini saymak gibi."
  },
  "help.an.s3.likes": {
    "t": "aimusiclist'te beğeniler",
    "what": "Her çubuk bir gündür. O gün bütün şarkılarının aimusiclist'te aldığı beğenileri gösterir.",
    "when": "Şarkı yayımladıktan veya paylaştıktan sonra beğenilerin artıp artmadığını görmek için kullan.",
    "care": "Yüksek olması iyidir. Yalnızca aimusiclist beğenileridir. Kendi sitenin beğenileri **İstatistikler** sekmesindedir.",
    "like": "Tezgâh panosundaki kalplerin günlük sayımı gibi."
  },
  "help.an.s3.adds": {
    "t": "Çalma listelerine eklendi",
    "what": "Her çubuk bir gündür. İnsanların şarkılarını aimusiclist çalma listelerine o gün kaç kez eklediğini gösterir.",
    "when": "Şarkılarını saklayıp tekrar dinlemek isteyip istemediklerini görmek için kullan.",
    "care": "Yüksek olması iyidir. Listeye ekleme bir şarkının sevildiğinin en güçlü işaretlerindendir.",
    "like": "Her gün kaç misafirin plağını eve götürmek için satın aldığını saymak gibi."
  },
  "help.an.s3.top": {
    "t": "En çok beğenilen ve eklenenler",
    "what": "Son 7 günde aimusiclist'te en çok ♥ beğeni ve + listeye ekleme alan en fazla beş şarkını gösterir.",
    "when": "Sonraki paylaşımın veya albümün başına koyacağın şarkıyı seçmek için kullan.",
    "care": "Her zaman **son 7 gündür**. Şarkılar beğeni ile ekleme toplamına göre sıralanır.",
    "like": "Dükkânının 'hayranların favorileri' rafı gibi."
  },
  "help.an.s4": {
    "t": "Kendi türümdeki yerim",
    "what": "En fazla altı şarkının aimusiclist'teki kendi tür sırasını ve şarkılar arasındaki en üst yüzde dilimini gösterir.",
    "when": "Aynı tarzdaki şarkılara göre ne kadar güçlü olduğunu görmek için kullan.",
    "click": "Basılacak bir şey yok. Şarkı türündeki ilk 20 arasındaysa **İlk 20'de** yazısı eklenir.",
    "care": "Küçük sıra ve yüzde iyidir (ilk %1 çok iyidir). Türün büyüklüğü bilinmiyorsa yüzde aimusiclist'teki bütün şarkılara göre hesaplanır. Tür sırası henüz olmayan şarkı da belirtilir.",
    "like": "Bütün pazardaki değil, örneğin yalnızca R&B rafındaki yerini bilmek gibi."
  },
  "help.site.seo": {
    "t": "Google aramalarında görün",
    "what": "Google gibi arama motorları için ayarlar. Sitendeki her şarkının ve albümün aramada bulunabilecek ayrı bir sayfası vardır.",
    "when": "Siteni arama sonuçlarından gizlemek veya Google Search Console'a kaydetmek için buraya gel.",
    "click": "Bu başlık yalnızca kartı açıklar. İşlemleri aşağıdaki anahtar ve adımlarla yaparsın.",
    "care": "Google'da görünmen birkaç gün ile birkaç hafta sürebilir. Bu ayar aimusiclist.com'da hiçbir şeyi değiştirmez.",
    "like": "Dükkânının adını ve her plağını şehir haritasına eklemek gibi."
  },
  "help.site.seo_switch": {
    "t": "Şarkılarımı ve albümlerimi arama sonuçlarında göster",
    "what": "Arama motorlarının ana sayfanı, şarkılarını ve albüm sayfalarını göstermesini sağlar. Başlangıçta açıktır.",
    "when": "Yeni dinleyiciler seni arayarak bulsun istiyorsan açık bırak. Yalnızca siteni aramadan gizlemek istiyorsan kapat.",
    "click": "Bastığın anda kaydedilir. Kapalıyken sayfaların arama motorlarına kendilerini göstermemelerini söyler ve arama için site haritası kaldırılır.",
    "care": "Zaten arama sonuçlarında görünen sayfaların kaybolması zaman alabilir. Adresini bilen kişiler siteni ziyaret etmeye devam edebilir.",
    "like": "Dükkân kapısındaki \"herkese açık\" tabelası gibi."
  },
  "help.site.gsc": {
    "t": "Sitemi Google Search Console'a kaydet",
    "what": "Kendi Google hesabınla siteni Google'a tanıtman için adım adım yardım.",
    "when": "Google'ın yeni şarkılarını daha erken bulmasını ve insanların seni nasıl aradığını görmeyi istiyorsan bir kez yap.",
    "click": "Adımları açıp yukarıdan aşağıya sırayla uygula. Yalnızca bir kez yapman yeterli.",
    "care": "Bir Google hesabın olmalı. Bir şey ters giderse adımları tekrar uygulayabilirsin; sitende hiçbir şey bozulmaz.",
    "like": "Şehir haritasını hazırlayan yere adını yazdırıp dükkânını daha sık kontrol etmelerini istemek gibi."
  },
  "help.site.gsc_open": {
    "t": "Google Search Console'u aç",
    "what": "Google'ın kendi sayfasını yeni sekmede açar.",
    "when": "İlk adımda buna bas.",
    "click": "Orada Google hesabınla giriş yap, ardından sonraki adım için bu sekmeye dön.",
    "care": "Bu, senin sitenin değil Google'ın sayfasıdır."
  },
  "help.site.gsc_copy": {
    "t": "Kopyala",
    "what": "Yanındaki adresi kopyalar.",
    "when": "Site adresini veya site haritası adresini yapıştırman istendiğinde buna bas.",
    "click": "Ardından Search Console sayfasındaki kutuya yapıştır.",
    "care": "Cihazında kopyalama çalışmazsa adres küçük bir pencerede gösterilir; oradan kendin kopyalayabilirsin."
  },
  "help.site.gsc_input": {
    "t": "Google doğrulama etiketi",
    "what": "Sitenin sana ait olduğunu kanıtlamak için Google'ın verdiği metni gireceğin kutu.",
    "when": "Search Console'daki [[HTML tag]] bölümünden kopyaladığın metni buraya yapıştır.",
    "click": "Metnin tamamını olduğu gibi yapıştırabilirsin. Siten yalnızca gereken kısmını saklar.",
    "care": "Etiketi kaldırmak için kutuyu boşaltıp Kaydet'e bas.",
    "like": "Google'a dükkânın sana ait olduğunu gösteren bir isim etiketi gibi."
  },
  "help.site.gsc_save": {
    "t": "Kaydet",
    "what": "Doğrulama metnini kaydedip ana sayfana yerleştirir.",
    "when": "Metni yapıştırdıktan sonra, Search Console'da [[Verify]] düğmesine basmadan önce buna bas.",
    "click": "Biraz sonra onay işareti görünür. Ardından Search Console'a dönüp [[Verify]] düğmesine bas.",
    "care": "Kırmızı bir uyarı görürsen [[HTML tag]] metninin tamamını yeniden kopyalayıp yapıştır."
  }
});
