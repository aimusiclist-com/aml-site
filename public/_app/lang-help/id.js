// Bantuan dasbor situs pribadi — Bahasa Indonesia (id). Gunakan bahasa yang sederhana dan ramah.
// Pertahankan kunci, {placeholder}, tanda **tebal**, dan jumlah [[tombol]] seperti sumber Inggris.
AMLHelp.add('id', {
  "_ui": {
    "what": "Apa ini?",
    "when": "Kapan digunakan?",
    "click": "Apa yang terjadi saat ditekan?",
    "care": "Perlu diperhatikan",
    "like": "Bayangkan seperti ini",
    "close": "Tutup"
  },
  "help.top.lang": {
    "t": "Bahasa",
    "what": "Memilih bahasa untuk halaman pengelolaan ini. Daftarnya memuat semua bahasa yang tersedia.",
    "when": "Gunakan jika tulisan sulit dipahami atau kamu ingin melihat tampilan situs dalam bahasa lain.",
    "click": "Halaman langsung berganti bahasa. Pilihanmu hanya diingat oleh browser ini, jadi di komputer atau ponsel lain bahasanya mungkin berbeda.",
    "care": "Ini tidak mengubah bahasa utama situs untuk pengunjung. Pengaturannya ada pada **Bahasa situs** di tab Info situs. Jika membuka situs di browser yang sama, bahasa yang kamu pilih di sini juga digunakan.",
    "like": "Seperti memilih bahasa tulisan di ruang belakang toko. Papan nama toko di luar tetap sama."
  },
  "help.setup.title": {
    "t": "Buat akun admin",
    "what": "Ini layar pertama setelah situs dipasang. Di sini kamu membuat satu akun untuk mengelola situs: email, kata sandi, dan kunci penggunaan Cloudflare.",
    "when": "Muncul sekali saja sesudah pemasangan. Layar ini muncul lagi hanya jika kamu mengikuti langkah pemulihan kata sandi.",
    "click": "Ini hanya judul. Isi kolom di bawah, lalu tekan [[Buat admin]].",
    "care": "Jika baru selesai memasang, tunggu sekitar satu menit. Cloudflare perlu menyiapkan tempat penyimpanan lagu. Jika muncul kesalahan, tunggu satu menit dan coba lagi.\nNama penyanyi atau grup terkenal tidak boleh dipakai sebagai nama situs.",
    "like": "Seperti menerima satu-satunya kunci toko baru pada hari pembukaan."
  },
  "help.setup.legacy": {
    "t": "Kata sandi admin lama (AML_ADMIN_TOKEN)",
    "what": "Kolom ini hanya muncul pada situs yang dipasang dengan cara lama, ketika kata sandi admin disimpan dalam pengaturan Cloudflare.",
    "when": "Masukkan kata sandi admin lama yang kamu pakai sebelumnya. Cukup sekali ini saja.",
    "click": "Saat mengetik belum terjadi apa-apa. Kata sandi diperiksa ketika kamu menekan [[Buat admin]].",
    "care": "Ini membuktikan situs memang milikmu agar orang lain tidak mengambil alih. Jika salah, akun tidak dibuat. Cari nilainya di pengaturan Cloudflare untuk situs ini.",
    "like": "Seperti memperlihatkan kunci toko lama agar tukang kunci yakin kamu berhak mendapat kunci baru."
  },
  "help.setup.email": {
    "t": "Email",
    "what": "Alamat email yang akan kamu pakai untuk masuk. Alamat ini tidak ditampilkan di situsmu.",
    "when": "Gunakan email yang sering kamu periksa. Email pendaftaran Cloudflare lebih mudah diingat.",
    "click": "Belum ada yang disimpan. Email baru disimpan saat kamu menekan [[Buat admin]].",
    "care": "Alamatnya harus seperti email sungguhan (name@example.com). aimusiclist.com juga menerimanya sebagai kontak pribadi situsmu. Kamu bisa mengubahnya nanti di Info situs.",
    "like": "Seperti menulis namamu pada gantungan kunci toko."
  },
  "help.setup.password": {
    "t": "Kata sandi (minimal 6 karakter)",
    "what": "Kata sandi untuk masuk bersama email di atas.",
    "when": "Pilih sekarang. Gunakan setidaknya 6 karakter; lebih panjang lebih aman.",
    "click": "Belum ada yang disimpan. Kata sandi disimpan saat kamu menekan [[Buat admin]].",
    "care": "Jangan gunakan kata sandi yang dipakai di situs lain. Jika lupa, kamu bisa mengaturnya ulang dan lagu-lagumu tetap aman.",
    "like": "Ini kunci tokomu. Jangan membuat salinan yang juga bisa membuka pintu lain."
  },
  "help.setup.password2": {
    "t": "Ulangi kata sandi",
    "what": "Masukkan kata sandi yang sama sekali lagi.",
    "when": "Isi tepat setelah kolom kata sandi.",
    "click": "Saat menekan [[Buat admin]], kedua kolom akan dibandingkan.",
    "care": "Jika berbeda, akan muncul pemberitahuan dan akun tidak dibuat. Cukup isi keduanya lagi.",
    "like": "Seperti mencoba kunci baru dua kali untuk memastikan pas."
  },
  "help.setup.token": {
    "t": "Kunci penggunaan Cloudflare (wajib, hanya baca)",
    "what": "Kunci yang kamu buat di Cloudflare. Dengan kunci ini, halaman admin dapat menunjukkan banyaknya jatah gratis Cloudflare yang dipakai situsmu.",
    "when": "Ikuti petunjuk di bawah (sekitar 2 menit), salin kuncinya, lalu tempel di sini.",
    "click": "Setelah kamu berhenti mengetik, kunci diperiksa otomatis. Kamu akan melihat ✓ dengan nama akun Cloudflare, atau ✗ beserta kesalahannya.",
    "care": "Kunci ini hanya membaca angka penggunaan dan nama akun. Kunci tidak bisa mengubah atau menghapus apa pun. Cloudflare menampilkannya sekali saja, jadi langsung tempel setelah menyalin. Diperlukan dua izin (Account Analytics · Read dan Account Settings · Read).",
    "like": "Seperti kunci yang hanya membuka kotak meteran listrik, bukan pintu toko."
  },
  "help.setup.account": {
    "t": "Akun Cloudflare",
    "what": "Daftar ini muncul jika kunci penggunaanmu dapat melihat lebih dari satu akun Cloudflare.",
    "when": "Pilih akun tempat situs ini dipasang.",
    "click": "Kunci segera diperiksa lagi berdasarkan akun pilihanmu. Tanda ✓ berarti sudah benar.",
    "care": "Jika memilih akun yang salah, angka penggunaan akan menunjukkan akun lain atau gagal dimuat.",
    "like": "Seperti punya kunci untuk beberapa gedung lalu menunjuk gedung tempat tokomu berada."
  },
  "help.setup.account_id": {
    "t": "Cloudflare Account ID",
    "what": "Nomor akun Cloudflare milikmu: 32 karakter, angka 0–9, dan huruf a–f.",
    "when": "Kolom ini hanya muncul jika kunci tidak dapat menemukan akun secara otomatis. Biasanya izin Account Settings · Read belum ditambahkan.",
    "click": "Begitu 32 karakter lengkap, kunci diperiksa lagi secara otomatis.",
    "care": "Temukan di Cloudflare: Workers & Pages → Account Details → Account ID (tombol salin). Atau buat ulang kunci memakai tombol di panduan. Jika kedua izin sudah ada, kolom ini tidak diperlukan.",
    "like": "Seperti memberi tahu petugas meteran nomor rumah ketika papan nama jalan hilang."
  },
  "help.setup.token_guide": {
    "t": "Cara membuat kunci penggunaan (2 menit)",
    "what": "Lima langkah singkat untuk membuat kunci penggunaan di Cloudflare.",
    "when": "Baca sambil membuat kunci. Tekan judul untuk membuka atau menutup petunjuk.",
    "click": "Membuka atau menutup petunjuk tidak mengubah apa pun. Di langkah pertama ada tombol untuk membuka Cloudflare.",
    "care": "Nama menu Cloudflare mungkin sedikit berubah. Jika berbeda, pilih yang paling mirip. Di Cloudflare, tekan [[Continue to summary]], lalu [[Create Token]], kemudian [[Copy]].",
    "like": "Seperti gambar kecil yang menunjukkan cara merakit furnitur baru."
  },
  "help.setup.submit": {
    "t": "Buat admin",
    "what": "Membuat akun admin dari email, kata sandi, dan kunci penggunaan di atas.",
    "when": "Tekan jika semua kolom terisi dan kunci menampilkan ✓.",
    "click": "Jika ada yang salah, pesan muncul di samping tombol dan akun belum dibuat. Jika semuanya benar, kamu langsung masuk ke halaman admin. Situs juga mulai terhubung sendiri ke aimusiclist.com.",
    "care": "Setiap situs hanya memiliki satu akun admin. Untuk membuatnya lagi, ikuti langkah pemulihan kata sandi. Lagu dan albummu tetap tersimpan.",
    "like": "Seperti memotong pita pada hari pembukaan: toko sekarang milikmu dan pintunya terbuka."
  },
  "help.login.title": {
    "t": "Masuk",
    "what": "Pintu ke halaman admin. Hanya pemilik situs yang dapat masuk memakai email dan kata sandi.",
    "when": "Muncul saat kamu belum masuk di browser ini atau masa masukmu berakhir.",
    "click": "Ini hanya judul. Isi kolom di bawah lalu tekan [[Masuk]].",
    "care": "Sesi masuk berlaku 30 hari di satu browser. Mengganti kata sandi akan mengeluarkan akun dari semua perangkat.",
    "like": "Seperti pintu belakang toko yang terkunci. Pintu depan (situsmu) tetap terbuka bagi pengunjung."
  },
  "help.login.email": {
    "t": "Email",
    "what": "Email yang kamu pilih saat membuat akun admin.",
    "when": "Masukkan setiap kali ingin masuk.",
    "click": "Belum terjadi apa-apa sampai kamu menekan [[Masuk]].",
    "care": "Huruf besar atau kecil tidak berpengaruh. Di situs meshmelo, gunakan email akun meshmelo milikmu.",
    "like": "Seperti menyebut namamu di pintu belakang sebelum menunjukkan kunci."
  },
  "help.login.password": {
    "t": "Kata sandi",
    "what": "Kata sandi akun admin milikmu.",
    "when": "Masukkan setiap kali ingin masuk.",
    "click": "Belum terjadi apa-apa sampai kamu menekan [[Masuk]].",
    "care": "Setelah salah lima kali berturut-turut dari tempat yang sama, masuk akan dikunci selama 15 menit. Pesan menunjukkan berapa kesempatan yang tersisa.",
    "like": "Ini kuncinya sendiri. Jika terlalu sering mencoba kunci yang salah, gembok akan beristirahat sebentar."
  },
  "help.login.submit": {
    "t": "Masuk",
    "what": "Memeriksa email dan kata sandi, lalu membuka halaman admin.",
    "when": "Tekan setelah mengisi kedua kolom. Tautan [[Lihat situs]] di sampingnya membuka situs seperti pengunjung.",
    "click": "Jika benar, halaman admin terbuka dan browser ini tetap masuk selama 30 hari. Jika salah, pesan merah muncul di bawah.",
    "care": "Masuk di sini tidak membuatmu masuk di perangkat lain. Setiap browser harus masuk sendiri.",
    "like": "Seperti memutar kunci dan melangkah ke ruang belakang toko."
  },
  "help.login.forgot": {
    "t": "Lupa kata sandi?",
    "what": "Langkah membuat email dan kata sandi baru jika kamu tidak mengingatnya.",
    "when": "Gunakan hanya jika benar-benar tidak bisa masuk. Tekan judul untuk membuka langkahnya.",
    "click": "Membukanya tidak mengubah apa pun. Ikuti langkah sendiri. Pada situs Cloudflare, hapus hanya informasi admin dari penyimpanan lagu (R2), lalu layar [[Buat admin]] akan muncul lagi.",
    "care": "Lagu, album, dan sambungan aimusiclist.com tetap ada. Hapus hanya satu item yang disebut dalam petunjuk. Di versi PHP, buat satu file kosong di hosting. Di meshmelo, atur ulang dari akun meshmelo.",
    "like": "Seperti memanggil tukang kunci untuk membuat kunci baru. Toko beserta isinya tetap utuh."
  },
  "help.top.mm_acct": {
    "t": "Akun meshmelo saya",
    "what": "Tautan ke halaman akun meshmelo. Hanya muncul pada situs yang dihosting meshmelo.",
    "when": "Buka untuk mengurus masuk dan kata sandi, penyimpanan lagu, penggunaan, domain sendiri, atau menghapus seluruh situs.",
    "click": "Akun meshmelo terbuka di tab baru. Halaman ini tetap terbuka.",
    "care": "Lagu, album, menu, tema, dan statistik diatur di sini, bukan di sana. Bingung harus membuka halaman mana? Tekan tanda ? di samping tautan ini.",
    "like": "Seperti kantor yang mengelola seluruh tokomu. Halaman admin ini adalah meja layanan satu toko."
  },
  "help.top.view_site": {
    "t": "Lihat situs",
    "what": "Membuka situsmu sendiri, yaitu halaman yang dilihat pengunjung.",
    "when": "Gunakan setelah mengubah sesuatu untuk melihat hasilnya.",
    "click": "Situs terbuka di tab baru. Halaman admin ini tetap terbuka.",
    "care": "Sebagian besar perubahan terlihat dalam sekitar 30 detik. Karena kamu sedang masuk, beberapa informasi khusus pemilik mungkin ikut terlihat, seperti jumlah putar pada tiap lagu.",
    "like": "Seperti keluar untuk melihat etalase tokomu dari sudut pandang orang di jalan."
  },
  "help.top.logout": {
    "t": "Keluar",
    "what": "Mengakhiri sesi masuk pada browser ini.",
    "when": "Gunakan saat memakai komputer bersama atau pinjaman, atau setelah selesai.",
    "click": "Kamu langsung kembali ke layar masuk. Lagu dan pengaturan tidak disentuh.",
    "care": "Hanya browser ini yang keluar. Perangkat lain tetap masuk. Untuk keluar di semua perangkat, ganti kata sandi di tab Info situs.",
    "like": "Seperti mengunci pintu belakang saat pulang. Kunci lain masih bisa dipakai."
  },
  "help.top.version": {
    "t": "Versi baru",
    "what": "Baris yang muncul jika tersedia versi program situs yang lebih baru. Menampilkan versimu dan versi terbaru.",
    "when": "Jika muncul, rencanakan pembaruan segera. Pemeriksaan dilakukan sekali sehari.",
    "click": "[[Cara memperbarui]] membuka panduan pembaruan. [[Apa yang baru]] menampilkan perubahan. Tidak ada yang berubah sebelum kamu memperbarui.",
    "care": "Pembaruan tidak pernah dipaksakan. Jika baris berwarna merah, versimu terlalu lama untuk aimusiclist.com; sebaiknya segera perbarui. Lagu dan pengaturan tetap ada. Pada versi PHP ada tombol pembaruan di sini.",
    "like": "Seperti pemberitahuan bahwa rak toko baru yang lebih baik sudah tersedia."
  },
  "help.top.aml": {
    "t": "Sambungan aimusiclist.com",
    "what": "Satu baris yang menunjukkan apakah situs terhubung ke aimusiclist.com. Hanya saat terhubung lagu publik bisa tampil dan mendapat peringkat di sana.",
    "when": "Periksa setelah pemasangan atau jika lagu tidak muncul di aimusiclist.com.",
    "click": "Ini hanya status: ✓ terhubung · … menghubungkan · ✗ tidak terhubung, disertai alasan dan waktu percobaan otomatis berikutnya.",
    "care": "Situs baru terhubung otomatis. Jika gagal, sistem mencoba tiap 10 menit hingga 20 kali sehari. Untuk beberapa kesalahan, percobaan berhenti; setelah memperbaiki penyebabnya, tekan [[Coba sekarang]]. Pada situs meshmelo yang dijeda, baris ini menunjukkan status dijeda.",
    "like": "Seperti jalan dari tokomu ke pasar besar. Jika jalannya terbuka, rekamanmu sampai ke etalase pasar."
  },
  "help.top.lang_missing": {
    "t": "Bahasa lagu belum diisi",
    "what": "Pemberitahuan bahwa beberapa lagu belum memiliki bahasa lagu. Biasanya ini lagu lama yang diunggah sebelum pengaturan tersebut ada.",
    "when": "Perbaiki saat sempat. Ini membantu pendengar di aimusiclist.com menemukan lagu berbahasa mereka.",
    "click": "Ini hanya pemberitahuan. Tekan [[Atur sekarang]] untuk memperbaiki semuanya sekaligus.",
    "care": "Tidak ada yang dipaksa. Sebelum diatur, aimusiclist.com menganggap bahasa lagu sama dengan bahasa utama situs. Pemberitahuan hilang setelah semua lagu punya bahasa.",
    "like": "Seperti piringan hitam di toko yang belum diberi label bahasa nyanyiannya."
  },
  "help.top.pubmin_note": {
    "t": "Lagu publik belum cukup",
    "what": "Pemberitahuan bahwa jumlah lagu publik di aimusiclist.com lebih sedikit dari ketentuan: minimal 10 lagu publik (atau semuanya jika jumlahnya kurang dari 10).",
    "when": "Muncul hanya jika jumlahnya di bawah batas, misalnya setelah menghapus lagu.",
    "click": "Ini hanya pemberitahuan. Tekan [[Pilih lagu]] untuk memperbaikinya.",
    "care": "Tidak ada lagu yang diubah otomatis. Namun sebelum jumlahnya cukup, kamu tidak bisa membuat lebih banyak lagu menjadi privat. Kamu memilih lagu yang dipublikasikan dan boleh menghapus lagu yang tidak ingin dibagikan.",
    "like": "Pasar besar meminta tiap toko memajang setidaknya 10 rekaman di etalase."
  },
  "help.top.profile_note": {
    "t": "Tambahkan foto profil",
    "what": "Saran yang muncul jika sudah ada lagu tetapi belum ada foto profil. Foto juga tampil di samping lagu pada aimusiclist.com.",
    "when": "Tambahkan jika bisa. Wajah atau logo membuat lagumu mudah diingat.",
    "click": "Ini hanya saran. Tekan [[Tambah foto]] untuk memilih gambar.",
    "care": "Tidak wajib. Saran ini hilang setelah foto profil disimpan.",
    "like": "Seperti memasang fotomu di pintu toko agar orang tahu pemiliknya."
  },
  "help.top.genre_sample": {
    "t": "Daftar genre bawaan",
    "what": "Pemberitahuan bahwa daftar genre tidak bisa dimuat dari aimusiclist.com, sehingga daftar bawaan program dipakai sementara.",
    "when": "Kamu tidak perlu melakukan apa pun. Biasanya hilang saat halaman admin dibuka kembali.",
    "click": "Ini hanya pemberitahuan.",
    "care": "Daftar bawaan mungkin belum berisi genre terbaru. Jika membutuhkannya, tunggu lalu muat ulang halaman. Genre pada lagu dan menu yang sudah diatur tetap sama.",
    "like": "Seperti memakai katalog cetak tahun lalu karena katalog pasar yang baru belum tiba."
  },
  "help.setup.token_open": {
    "t": "Buat di Cloudflare",
    "what": "Membuka halaman pembuatan kunci Cloudflare di tab baru, dengan nama dan dua izin yang sudah terisi.",
    "when": "Tekan pada langkah pertama panduan.",
    "click": "Cloudflare terbuka di tab baru (masuk jika diminta). Halaman ini tetap terbuka agar kamu bisa kembali dan menempel kunci.",
    "care": "Pastikan kedua izin ada: Account Analytics · Read dan Account Settings · Read. Jika masih kosong, tambahkan sendiri.",
    "like": "Seperti formulir pesanan yang sudah terisi. Kamu tinggal menandatanganinya."
  },
  "help.tracks.ai_tool": {
    "t": "Dibuat dengan",
    "what": "Alat AI yang kamu gunakan untuk membuat lagu, misalnya Suno. Ditampilkan sebagai label kecil “✦ nama” di samping lagu.",
    "when": "Pilih alat yang benar-benar kamu gunakan. Pada kartu unggahan, pilihan ini berlaku untuk semua lagu dalam unggahan tersebut.",
    "click": "Disimpan saat mengunggah atau menekan [[Simpan lagu]]. Saat mengunggah, browser ini mengingat pilihanmu untuk berikutnya.",
    "care": "Daftar alat berasal dari aimusiclist.com. Jika alatmu tidak ada, pilih “Lainnya” dan beri tahu admin@aimusiclist.com. Pilihan alat tidak memengaruhi peringkat.",
    "like": "Seperti catatan “dibuat di” pada bagian belakang rekaman."
  },
  "help.tracks.ai_fill": {
    "t": "Lagu tanpa alat AI",
    "what": "Catatan tentang jumlah lagu yang belum diberi nama alat AI. Muncul hanya jika masih ada lagu seperti itu.",
    "when": "Gunakan untuk mengisi alat AI pada semua lagu tersebut sekaligus.",
    "click": "Ini hanya catatan. Pilih alat di bawah lalu tekan [[Atur semuanya ke alat ini]].",
    "care": "Saat semua lagu sudah memiliki alat, catatan ini hilang sendiri.",
    "like": "Seperti catatan di meja toko: \"Lima rekaman belum diberi cap pembuat\"."
  },
  "help.tracks.ai_fill_btn": {
    "t": "Atur semuanya ke alat ini",
    "what": "Menerapkan alat pilihanmu ke semua lagu yang belum memiliki alat AI.",
    "when": "Gunakan jika sebagian besar lagu dibuat dengan alat yang sama, misalnya setelah mengunggah banyak lagu lama.",
    "click": "Kotak konfirmasi muncul terlebih dahulu. Jika kamu menyetujui, pilihan langsung disimpan dan nama alat ✦ muncul di samping lagu-lagu tersebut, di situsmu dan aimusiclist.com.",
    "care": "Hanya lagu yang belum memiliki alat yang berubah. Lagu lain tetap sama. Jika beberapa lagu dibuat dengan alat lain, perbaiki melalui **Alat AI lagu terpilih** atau tombol [[Edit]] pada tiap lagu.",
    "like": "Seperti memberi cap pembuat yang sama pada semua rekaman tanpa cap, sambil melewati yang sudah bercap."
  },
  "help.tracks.bulk_ai": {
    "t": "Alat AI lagu terpilih",
    "what": "Mengatur alat AI yang dipakai untuk membuat semua lagu yang dicentang (misalnya Suno) sekaligus.",
    "when": "Gunakan jika banyak lagu dibuat memakai alat yang sama atau ingin memperbaiki alat yang salah pada beberapa lagu.",
    "click": "Memilih alat belum menyimpan apa pun. Tekan [[Terapkan]] di sampingnya untuk menyimpan.",
    "care": "Jika memilih **Belum diatur** lalu menekan [[Terapkan]], nama alat dihapus dari lagu yang dicentang. Jika alatmu tidak ada, pilih **Lainnya** dan beri tahu admin@aimusiclist.com.",
    "like": "Seperti memberi cap \"dibuat dengan alat ini\" di belakang banyak rekaman sekaligus."
  },
  "help.tracks.bulk_ai_apply": {
    "t": "Terapkan",
    "what": "Menyimpan alat AI pilihanmu ke semua lagu yang dicentang.",
    "when": "Tekan setelah mencentang lagu dan memilih alat.",
    "click": "Perubahan langsung disimpan. Pesan singkat menunjukkan berapa lagu yang berubah dan semua centang dihapus. Nama alat kecil ✦ di samping lagu ikut berubah di situsmu dan aimusiclist.com.",
    "care": "Alat lama pada lagu diganti. Jika belum mencentang lagu, kamu hanya mendapat pengingat untuk memilih lagu terlebih dahulu.",
    "like": "Inilah saat cap benar-benar ditempelkan pada rekaman."
  },
  "help.tracks.genre_main": {
    "t": "Genre utama",
    "what": "Satu genre utama untuk lagu ini. Daftarnya sama dengan menu genre di aimusiclist.com.",
    "when": "Pilih genre yang paling cocok dengan lagu. Pilihan ini wajib.",
    "click": "Disimpan saat kamu menekan [[Simpan lagu]]. Jika lagunya publik, lagu akan tampil pada menu genre tersebut di aimusiclist.com.",
    "care": "Lagu tidak bisa disimpan tanpa genre utama. Dua kolom genre tambahan di sampingnya untuk unsur campuran.",
    "like": "Seperti bagian pasar besar tempat rekamanmu dipajang, misalnya sudut R&B."
  },
  "help.tracks.genre_sub": {
    "t": "Genre tambahan",
    "what": "Hingga dua genre lain yang ikut bercampur dalam lagu. Contohnya, lagu R&B yang memiliki rap bisa menambahkan Hip-hop.",
    "when": "Gunakan jika satu genre belum cukup. Ini tidak wajib.",
    "click": "Disimpan ketika menekan [[Simpan lagu]] (atau saat unggah). aimusiclist.com menampilkannya berurutan setelah genre utama, di samping judul.",
    "care": "Kamu dapat memilih genre apa pun yang dikelompokkan menurut genre utama. Memilih genre yang sama dua kali hanya dihitung sekali. Pilih “— Tidak ada —” untuk mengosongkan kolom.",
    "like": "Seperti catatan tambahan kecil pada label rak: “ada sedikit hip-hop”."
  },
  "help.tracks.lang": {
    "t": "Bahasa lagu",
    "what": "Bahasa yang dinyanyikan dalam lagu ini, bukan bahasa tampilan situsmu.",
    "when": "Pilih bahasa utama lirik. Jika tidak ada nyanyian, pilih “Instrumental (tanpa lirik)”.",
    "click": "Disimpan saat kamu menekan [[Simpan lagu]]. aimusiclist.com memakainya untuk tangga lagu berdasarkan bahasa.",
    "care": "Lagu lama mungkin bertuliskan “belum diatur (bahasa situs)”. Dalam hal ini bahasa bawaan situs digunakan. Memilih “Instrumental” mengunci kolom bahasa kedua.",
    "like": "Seperti catatan pada rekaman yang menyebut bahasa penyanyinya."
  },
  "help.tracks.lang2": {
    "t": "Bahasa kedua (opsional)",
    "what": "Bahasa kedua dalam lirik, misalnya lagu berbahasa Korea yang memiliki bagian berbahasa Inggris.",
    "when": "Gunakan hanya jika cukup banyak bagian lagu dinyanyikan dalam bahasa lain.",
    "click": "Disimpan saat menekan [[Simpan lagu]]. Pilih “— Tidak ada —” untuk menghapusnya.",
    "care": "Kolom ini terkunci sampai kamu memilih bahasa utama, dan juga saat lagu berupa “Instrumental”. Tidak boleh sama dengan bahasa utama.",
    "like": "Seperti catatan kedua pada rekaman: “juga sedikit bahasa Inggris”."
  },
  "help.tracks.ai_paste": {
    "t": "Tempel hasil AI",
    "what": "Kolom untuk menempel judul dari AI beserta bagian ( )-nya. Sistem membaca genre, suasana, dan bahasa dari sana. [[Ambil panduan]] membuka penjelasan cara meminta bantuan AI.",
    "when": "Gunakan jika sulit menentukan genre atau nama filemu tidak memiliki bagian ( ).",
    "click": "Menempel saja belum mengubah apa pun. Tekan [[Terapkan]] di sampingnya.",
    "care": "Fitur ini hanya mengisi kolom. Kamu tetap perlu menyimpan lewat tombol unggah atau [[Simpan lagu]].",
    "like": "Seperti memberi petugas toko catatan dari ahli musik untuk disalin ke label rak."
  },
  "help.tracks.ai_paste_btn": {
    "t": "Terapkan",
    "what": "Membaca teks yang kamu tempel lalu mengisi kolom genre, bahasa lagu, dan suasana.",
    "when": "Tekan setelah menempel judul dari AI.",
    "click": "Pada kartu unggah, data diisi untuk semua file yang belum diunggah. Pada formulir edit, hanya lagu ini yang diisi. Pesan di bawah menunjukkan hasilnya. Belum ada yang disimpan.",
    "care": "Kata yang tidak dikenali dilewati dan ditampilkan berwarna kuning. Jika genre utama tidak ada dalam daftar, kolom genre tetap seperti sebelumnya. Periksa isinya sebelum menyimpan.",
    "like": "Seperti petugas toko yang benar-benar menyalin catatan ahli ke label."
  },
  "help.site.ext": {
    "t": "Informasi tambahan",
    "what": "Kolom ekstra tentang situsmu secara keseluruhan. aimusiclist.com menentukan kolom yang tersedia dan menampilkan isinya di samping lagumu.",
    "when": "Isi kolom yang sesuai. Semuanya opsional, jadi boleh dilewati.",
    "click": "Disimpan bersama informasi lainnya saat kamu menekan [[Simpan info situs]]. Mengosongkan kolom akan menghapus jawaban itu.",
    "care": "Bagian ini hanya muncul jika aimusiclist.com menyediakan kolom untuk situs. Jika kolom meminta pembaruan program, kamu belum bisa mengisinya. Jawaban lama tetap aman.",
    "like": "Seperti formulir pertanyaan tambahan dari pasar besar (aimusiclist.com) agar kiosmu punya label informasi lain."
  },
  "help.tracks.ext": {
    "t": "Informasi tambahan",
    "what": "Kolom ekstra tentang lagu, seperti BPM atau catatan singkat. aimusiclist.com menentukan kolom yang tersedia dan menampilkan jawabannya di samping lagu.",
    "when": "Isi yang kamu ketahui. Semua kolom opsional.",
    "click": "Disimpan saat mengunggah atau menekan [[Simpan lagu]]. Pada kartu unggah, nilai yang sama berlaku untuk setiap lagu. Pada formulir edit, mengosongkan kolom lalu menyimpan akan menghapus nilainya.",
    "care": "Jika sebuah kolom meminta pembaruan program, kamu bisa memakainya setelah memperbarui situs. Kolom baru muncul setelah situs menerima daftarnya dari aimusiclist.com.",
    "like": "Seperti tulisan kecil di belakang sampul rekaman."
  },
  "help.img.editor": {
    "t": "Jendela gambar",
    "what": "Jendela kecil untuk menyesuaikan ukuran gambar: gambar lagu 100×100, sampul album 200×200, atau banner atas hingga 1600×400.",
    "when": "Terbuka otomatis setelah kamu memilih gambar lagu, sampul album, atau banner.",
    "click": "Pilih cara menyesuaikan gambar, lihat Hasil, lalu tekan [[Simpan gambar]]. [[Batal]] atau tombol Esc menutup jendela tanpa perubahan.",
    "care": "Yang diunggah hanya salinan kecil, bukan gambar asli. Setiap jenis punya batas ukuran (50 KB, 100 KB, atau 300 KB); gambar dikecilkan hingga sesuai.",
    "like": "Seperti bengkel kecil yang memangkas foto agar pas dengan bingkai di dinding toko."
  },
  "help.img.mode_crop": {
    "t": "Pangkas (geser bingkai)",
    "what": "Hanya mempertahankan bagian gambar di dalam bingkai terang dan membuang sisanya.",
    "when": "Gunakan jika gambar terlalu besar atau bentuknya kurang cocok dan kamu ingin mempertahankan bagian terbaik, misalnya wajah.",
    "click": "Bingkai terang muncul di atas gambar. Seret atau gunakan tombol panah untuk memilih bagian yang dipertahankan. Penggeser Ukuran bingkai mengubah besar-kecilnya. Hasil berubah saat bingkai digeser.",
    "care": "Bagian di luar bingkai tidak ikut disimpan.",
    "like": "Seperti memotong foto dengan gunting agar hanya bagian terbaik yang masuk ke sampul rekaman."
  },
  "help.img.mode_fit": {
    "t": "Kecilkan seluruh gambar",
    "what": "Mempertahankan seluruh gambar dengan mengecilkannya, bukan memangkasnya.",
    "when": "Gunakan jika tidak boleh ada bagian terpotong, misalnya logo atau gambar yang berisi tulisan.",
    "click": "Hasil menampilkan seluruh gambar sekaligus. Untuk gambar persegi (gambar lagu atau sampul), sisi kosong diisi warna rata-rata gambar. Untuk banner, bentuk gambar tetap dan disesuaikan ke dalam 1600×400.",
    "care": "Gambar yang sangat panjang dan tipis bisa tampak kecil dalam kotak persegi dengan tepi berwarna yang lebar.",
    "like": "Seperti memasukkan seluruh poster ke bingkai bertepi warna tanpa memotongnya."
  },
  "help.img.frame": {
    "t": "Ukuran bingkai",
    "what": "Penggeser untuk memperbesar atau memperkecil bingkai terang pemangkas gambar.",
    "when": "Kecilkan untuk mendekatkan tampilan pada bagian kecil seperti wajah. Besarkan agar lebih banyak gambar terlihat.",
    "click": "Bingkai dan Hasil berubah saat kamu menggeser. Di ujung kanan, bingkai sebesar mungkin sesuai gambar.",
    "care": "Bingkai yang sangat kecil pada gambar kecil bisa membuat hasil buram. Periksa Hasil sebelum menyimpan.",
    "like": "Seperti mendekatkan atau menjauhkan kaca pembesar dari foto."
  },
  "help.img.result": {
    "t": "Hasil",
    "what": "Pratinjau gambar persis seperti yang akan disimpan.",
    "when": "Lihat sebelum menekan [[Simpan gambar]].",
    "click": "Berubah otomatis setiap kali kamu menggeser bingkai atau mengganti cara penyesuaian. Ini hanya pratinjau; belum ada yang disimpan.",
    "care": "Gambar besar ditampilkan sedikit lebih kecil di sini, tetapi disimpan dalam ukuran penuh. Hasil yang disimpan mungkin sedikit lebih lembut karena ukuran filenya diperkecil.",
    "like": "Seperti cermin yang menunjukkan foto sudah berada di dalam bingkai."
  },
  "help.img.save": {
    "t": "Simpan gambar",
    "what": "Membuat gambar kecil hasil akhir dan menggunakannya.",
    "when": "Tekan jika Hasil sudah sesuai.",
    "click": "Gambar lagu atau banner langsung disimpan dan tampil di situsmu; gambar lagu juga muncul di aimusiclist.com jika lagunya publik. Sampul album hanya dimasukkan ke kolom album dan baru disimpan saat kamu menekan [[Simpan album]].",
    "care": "Jika gambar masih terlalu besar atau browser tidak bisa memproses jenis gambar itu, muncul pesan merah. Coba gambar yang lebih sederhana atau bingkai lebih kecil, atau pakai Chrome, Edge, atau Firefox.",
    "like": "Seperti memasang foto yang sudah dipangkas ke bingkainya lalu menggantungnya di dinding toko."
  },
  "help.img.crop": {
    "t": "Foto profil",
    "what": "Jendela untuk menyesuaikan foto profil ke dalam lingkaran. Foto profil adalah wajah atau logomu yang ditampilkan bulat di situs dan aimusiclist.com.",
    "when": "Terbuka otomatis setelah kamu memilih foto profil.",
    "click": "Lingkaran tetap di tengah dan kamu menggeser foto di belakangnya. Seret foto, gunakan penggeser zoom, roda mouse atau dua jari, atau tombol panah dan + / −. Tekan [[Terapkan]] untuk menyimpan, atau [[Batal]] / Esc untuk menutup tanpa perubahan.",
    "care": "Hanya bagian dalam lingkaran yang dipakai. Yang diunggah salinan kecil 200×200, bukan foto asli.",
    "like": "Seperti menggeser foto di balik jendela bundar sampai wajahmu tepat di tengah."
  },
  "help.img.crop_zoom": {
    "t": "Perbesar/perkecil",
    "what": "Penggeser (serta tombol − dan +) untuk memperbesar atau memperkecil foto di dalam lingkaran.",
    "when": "Perbesar jika wajah terlihat terlalu kecil dalam lingkaran. Perkecil untuk menampilkan lebih banyak.",
    "click": "Ukuran foto berubah dari pusat lingkaran. Di ujung kiri foto tepat memenuhi lingkaran. Di ujung kanan foto menjadi 4 kali lebih besar. Pratinjau di bawah juga berubah.",
    "care": "Foto tidak bisa lebih kecil dari lingkaran sehingga tidak ada tepi kosong. Memperbesar foto kecil terlalu banyak dapat membuatnya buram.",
    "like": "Seperti berjalan mendekati atau menjauhi kamera."
  },
  "help.img.crop_rotate": {
    "t": "Putar",
    "what": "Memutar foto seperempat putaran ke kanan.",
    "when": "Gunakan jika foto miring ke samping atau terbalik.",
    "click": "Setiap kali ditekan, foto berputar 90 derajat. Tekan empat kali untuk kembali ke awal. Setelah setiap putaran, foto kembali ke tengah, jadi geser lagi jika perlu.",
    "like": "Seperti memutar bingkai foto di dinding sampai posisinya lurus."
  },
  "help.img.crop_preview": {
    "t": "Pratinjau",
    "what": "Dua lingkaran kecil yang menunjukkan tampilan foto profil yang sebenarnya: satu besar dan satu sangat kecil.",
    "when": "Periksa keduanya sebelum menekan [[Terapkan]]. Ukuran yang kecil sering terlihat pada daftar.",
    "click": "Berubah otomatis saat kamu menggeser, memperbesar, atau memutar foto. Belum ada yang disimpan.",
    "care": "Jika wajah sulit terlihat dalam lingkaran kecil, perbesar sedikit.",
    "like": "Seperti mundur dari papan nama toko untuk melihat apakah orang di seberang jalan masih bisa membacanya."
  },
  "help.img.crop_apply": {
    "t": "Terapkan",
    "what": "Menyimpan bagian dalam lingkaran sebagai foto profilmu.",
    "when": "Tekan jika pratinjau sudah sesuai.",
    "click": "Langsung disimpan dan tampil di situsmu. aimusiclist.com menerimanya dalam satu atau dua menit. Warna bagian atas situs juga dipilih dari foto ini.",
    "care": "Foto profil lama diganti. Untuk mengubahnya lagi, pilih foto baru.",
    "like": "Seperti menggantung potret barumu di etalase toko."
  },
  "help.top.profile_go": {
    "t": "Tambah foto",
    "what": "Memulai proses menambahkan foto profilmu.",
    "when": "Tekan dari saran foto profil.",
    "click": "Tab Info situs terbuka dan perangkat meminta kamu memilih gambar. Setelah itu pangkas gambar dan simpan dengan menekan Terapkan. Pengunjung dan aimusiclist.com segera dapat melihatnya.",
    "care": "Kamu bisa mengganti atau menghapusnya nanti di Info situs.",
    "like": "Seperti memberikan foto kepada pembuat papan nama toko."
  },
  "help.tab.tracks": {
    "t": "Lagu",
    "what": "Tempat mengurus lagu: mengunggah, memperbaiki judul, genre, bahasa, gambar dan lirik, serta memilih lagu publik di aimusiclist.com.",
    "when": "Buka untuk menambah lagu baru atau mengubah lagu lama.",
    "click": "Menekan tab hanya mengganti tampilan. Di dalamnya sebagian besar perubahan langsung tersimpan.",
    "care": "Sekali unggah maksimal 20 lagu, masing-masing 15 MB dan berdurasi 30 detik hingga 15 menit. Setiap lagu memiliki genre utama dan maksimal 2 tambahan. Setidaknya 10 lagu harus tetap publik (semuanya jika jumlahnya kurang dari 10). Lagu yang dihapus tidak bisa dikembalikan.",
    "like": "Seperti gudang tempat menerima rekaman, memberi label, dan memilih yang akan dipajang di pasar."
  },
  "help.tab.albums": {
    "t": "Album",
    "what": "Tempat mengelompokkan lagu menjadi album dengan judul, gambar sampul, dan deskripsi pendek.",
    "when": "Buka jika ingin menampilkan beberapa lagu sebagai satu kumpulan.",
    "click": "Menekan tab hanya mengganti tampilan. Album berisi 6–35 lagu yang semuanya memiliki audio dapat diterbitkan di aimusiclist.com setelah disimpan atau pada waktu pilihanmu.",
    "care": "Album dengan kurang dari 6 lagu bisa dibuat, tetapi tetap privat. Deskripsi maksimal 200 karakter. Saat album publik, lagunya tidak bisa diubah menjadi privat.",
    "like": "Seperti menaruh beberapa rekaman dalam satu kotak dengan sampul sendiri."
  },
  "help.tab.skins": {
    "t": "Tema",
    "what": "Tempat mengatur tampilan situs: warna, huruf, dan tata letak. Kamu bisa memakai tema bawaan, memasang dari galeri, atau mengunggah sendiri.",
    "when": "Buka jika ingin mengganti tampilan atau melihat tanda pembaruan tema.",
    "click": "Menekan tab hanya mengganti tampilan. Tema baru akan terlihat oleh pengunjung dalam sekitar 30 detik, dan kamu bisa kembali ke tema sebelumnya.",
    "care": "Tema Terang dan Gelap selalu tersedia, ditambah paling banyak 20 tema lain. Tema yang diunggah berupa satu file maksimal 100 KB. Mengganti tema tidak memengaruhi lagu atau pengaturan.",
    "like": "Seperti mengecat ulang toko dan mengganti rak; rekamannya tetap sama."
  },
  "help.tab.site": {
    "t": "Info situs",
    "what": "Semua pengaturan situs: nama, nama artis, bahasa utama, deskripsi, tautan sosial, gambar, tombol pengunjung, iklan, daftar artis, akun masuk, dan kunci penggunaan.",
    "when": "Buka setelah pemasangan dan kapan pun ingin mengubah cara situs memperkenalkanmu.",
    "click": "Menekan tab hanya mengganti tampilan. Beberapa kartu disimpan lewat tombolnya sendiri, sedangkan tombol pilihan langsung menyimpan.",
    "care": "Nama penyanyi atau grup terkenal tidak boleh digunakan. Nama situs dan artis juga terlihat di aimusiclist.com. Mengganti kata sandi membuatmu keluar di semua perangkat.",
    "like": "Seperti papan nama, lencana pemilik, dan dokumen kantor toko yang tersimpan dalam satu laci."
  },
  "help.tab.guestbook": {
    "t": "Buku tamu",
    "what": "Tempat pengunjung menulis pesan singkat untukmu, baik untuk seluruh situs maupun satu lagu. Kamu bisa mengaktifkan, menutup, atau menghapus pesan.",
    "when": "Buka untuk membaca pesan pendengar atau menghapus pesan yang buruk.",
    "click": "Menekan tab memuat pesan, 20 tiap halaman. Membuka, menutup, dan menghapus langsung tersimpan.",
    "care": "Nama maksimal 20 karakter, pesan maksimal 500, tanpa tautan, dan maksimal 50 pesan per orang per hari. Pesan disimpan sampai dihapus dan tidak bisa dipulihkan. Menutup buku tamu tidak menghapus pesan.",
    "like": "Seperti buku catatan di pintu toko tempat pelanggan menulis beberapa kata."
  },
  "help.tab.domain": {
    "t": "Domain saya",
    "what": "Tempat menghubungkan alamat web milikmu (misalnya mymusic.com) sebagai pengganti alamat panjang dari pemasangan.",
    "when": "Buka setelah membeli domain dan ingin pengunjung menggunakannya.",
    "click": "Menekan tab hanya mengganti tampilan. Panduan menunjukkan langkahnya (sekitar 10 menit). Saat dihubungkan, alamat diperiksa dahulu, lalu aimusiclist.com diberi tahu alamat baru.",
    "care": "Pengunjung alamat lama diarahkan ke alamat baru, dan lagu dalam daftar putar tetap bisa diputar. Pada situs meshmelo, hubungkan domain lewat akun meshmelo.",
    "like": "Seperti memberi toko alamat jalan yang singkat dan mudah diingat."
  },
  "help.tab.stats": {
    "t": "Statistik",
    "what": "Angka tentang situsmu: kunjungan dan pemutaran harian, lagu dan album populer, negara, asal pengunjung, perangkat, dan bahasa. Angka dari aimusiclist.com juga tersedia.",
    "when": "Buka untuk mengetahui siapa mendengarkan apa dan apakah tautan yang kamu bagikan mendatangkan pengunjung.",
    "click": "Menekan tab memuat angka. Angka berubah sekali sehari. [[Segarkan sekarang]] menghitung angka hari ini, paling sering sekali per menit.",
    "care": "Kunjunganmu sendiri saat masuk tidak dihitung. Angka aimusiclist.com diperbarui pagi hari sekali sehari. Pada beberapa pengaturan, kunjungan atau putar tidak dapat dihitung; tab ini menjelaskan penyebab dan cara mengaktifkannya.",
    "like": "Seperti buku tamu dan catatan penjualan toko yang sudah dijumlahkan."
  },
  "help.tab.analysis": {
    "t": "Analisis",
    "what": "Melihat lebih jauh kinerja lagu di aimusiclist.com: perubahan peringkat, lagu yang naik, perkembangan lagu baru, jarak menuju Top 100, suka, tambahan daftar putar, dan peringkat genre. Berita aimusiclist juga ada di sini.",
    "when": "Buka untuk mengetahui lagu yang berkembang dan apa yang sebaiknya dibagikan berikutnya.",
    "click": "Menekan tab membuka angka tersimpan. Angka dikumpulkan sekali sehari, jadi membuka berkali-kali tidak mengubahnya. Titik pada tab berarti ada berita baru dari aimusiclist; titik hilang setelah tab dibuka.",
    "care": "Situs yang baru dibuat belum memiliki banyak data. Gambar dan grafik akan terisi seiring waktu.",
    "like": "Seperti laporan mingguan dari pasar besar tentang penjualan rekamanmu."
  },
  "help.top.mm_two_screens": {
    "t": "Ada dua tempat pengelolaan",
    "what": "Kartu kecil yang menjelaskan dua halaman pengelolaan: halaman admin situs ini dan akun meshmelo milikmu, beserta alamat dan kegunaannya.",
    "when": "Buka ketika tidak menemukan suatu pengaturan. Tekan tombol ? di atas untuk membuka atau menutup.",
    "click": "Membacanya tidak mengubah apa pun. Tombol di dalam membuka akun meshmelo di tab baru.",
    "care": "Kartu ini hanya ada di situs meshmelo.",
    "like": "Seperti papan petunjuk di lorong: 'Meja toko ke sini, kantor utama ke sana'."
  },
  "help.top.php_update": {
    "t": "Perbarui sekarang",
    "what": "Pada versi PHP, tombol ini memperbarui program situs ke versi terbaru secara otomatis.",
    "when": "Tekan saat pemberitahuan versi baru muncul dan kamu punya sedikit waktu.",
    "click": "Kamu diminta mengonfirmasi. Prosesnya sekitar satu menit, lalu halaman dimuat ulang. Jika gagal, sistem kembali sendiri ke versi lama.",
    "care": "Lagu, pengaturan, dan halaman tetap tersimpan. Jangan tutup halaman selama pembaruan berlangsung. Situs meshmelo tidak memiliki tombol ini; meshmelo memperbaruinya.",
    "like": "Seperti petugas mengganti rak toko pada malam hari, lalu mengembalikan semua rekaman ke tempat semula."
  },
  "help.top.usage_r2_storage": {
    "t": "Penyimpanan R2 (gratis 10 GB)",
    "what": "Jumlah ruang yang digunakan filemu di R2, tempat penyimpanan Cloudflare. Biasanya hampir seluruhnya terpakai oleh lagu.",
    "when": "Periksa sebelum mengunggah banyak lagu.",
    "click": "Ini hanya angka, diperbarui setiap 10 menit.",
    "care": "Lebih kecil lebih baik. Di atas 10 GB, Cloudflare menagih akunmu. Jika hampir penuh, hapus lagu yang tidak perlu atau pakai file lebih kecil (MP3, bukan WAV). Penyimpanan lain pada akun Cloudflare yang sama juga dihitung.",
    "like": "Seperti melihat seberapa penuh gudangmu. Rak menyediakan sekitar 10 GB ruang gratis."
  },
  "help.top.usage_class_a": {
    "t": "Penulisan R2 bulan ini (gratis 1 juta)",
    "what": "Jumlah penyimpanan atau perubahan di R2 bulan ini: unggahan, pengeditan, pergantian, dan perubahan lain.",
    "when": "Periksa pada bulan dengan banyak unggahan atau perubahan.",
    "click": "Ini hanya angka yang kembali ke 0 setiap bulan.",
    "care": "Lebih kecil lebih baik. Satu perubahan biasanya hanya beberapa penulisan, dan unggah 20 lagu sekaligus sekitar 60, jadi 1 juta sangat banyak. Menghapus gratis. Jika melewati jatah gratis, Cloudflare menagih akunmu.",
    "like": "Seperti jumlah pintu gudang dibuka untuk memasukkan barang selama sebulan."
  },
  "help.top.usage_class_b": {
    "t": "Pembacaan R2 bulan ini (gratis 10 juta)",
    "what": "Jumlah file yang dibaca dari R2 bulan ini. Kebanyakan terjadi ketika orang memutar lagu atau membuka situsmu.",
    "when": "Periksa jika lagumu sering diputar.",
    "click": "Ini hanya angka yang kembali ke 0 setiap bulan.",
    "care": "Angka yang bertambah berarti ada pendengar, itu bagus, tetapi jika melebihi 10 juta Cloudflare menagih akunmu. Jika naik sangat cepat, lihat tab Statistik untuk mengetahui asal pemutaran.",
    "like": "Seperti jumlah pintu gudang dibuka untuk mengambil rekaman dan memutarnya."
  },
  "help.top.usage_workers": {
    "t": "Permintaan Workers hari ini (gratis 100.000)",
    "what": "Jumlah permintaan yang dijawab situsmu hari ini. Membuka situs dan memutar setiap bagian lagu ikut dihitung.",
    "when": "Periksa pada hari ramai, misalnya setelah membagikan tautan.",
    "click": "Ini hanya angka yang kembali ke 0 tiap hari pada 00:00 UTC (09:00 waktu Korea).",
    "care": "Jika melebihi 100.000 sehari, situs berhenti sampai batas diatur ulang. Tidak ada biaya. Angka ini untuk seluruh akun Cloudflare. Pada versi PHP, yang dihitung adalah Worker audio sehingga lagu berhenti diputar jika batas terlewati. Situs meshmelo tidak menampilkan bilah ini.",
    "like": "Seperti jumlah pelanggan yang bisa dilayani petugas dalam sehari. Setelah penuh, toko tutup sampai besok."
  },
  "help.top.usage_disk_space": {
    "t": "Ruang untuk lagu dan halaman situs ini",
    "what": "Jumlah ruang hosting yang dipakai file situs ini. Lagu biasanya memakai paling banyak.",
    "when": "Periksa sebelum unggah besar.",
    "click": "Ini hanya angka (atau bilah jika batas paketmu sudah diatur).",
    "care": "Lebih kecil lebih baik. Jika mendekati batas paket, hapus lagu yang tidak diperlukan atau unggah MP3 lebih kecil. Situs lain di hosting yang sama tidak dihitung di sini.",
    "like": "Seperti luas lantai toko sewaan yang dipenuhi rekamanmu."
  },
  "help.top.usage_files": {
    "t": "File (inode)",
    "what": "Jumlah file situs ini pada hosting. Perusahaan hosting sering membatasi jumlah file, bukan hanya ruangnya.",
    "when": "Periksa jika memiliki banyak lagu atau mendapat peringatan tentang jumlah file.",
    "click": "Ini hanya angka (atau bilah jika batas paketmu diatur).",
    "care": "Lebih kecil lebih baik. Satu lagu membawa beberapa file (audio, gambar, lirik), sehingga menghapus lagu yang tidak dipakai mengurangi jumlahnya.",
    "like": "Seperti jumlah kotak di toko, tidak peduli seberapa kecil tiap kotaknya."
  },
  "help.top.usage_tracks": {
    "t": "Lagu",
    "what": "Jumlah lagu yang dimiliki situs ini.",
    "when": "Lihat sekilas untuk memperkirakan rata-rata ruang yang dipakai tiap lagu.",
    "click": "Ini hanya angka yang berubah saat kamu mengunggah atau menghapus lagu.",
    "care": "Tidak ada bilah batas untuk angka ini.",
    "like": "Seperti menghitung jumlah rekaman di tokomu."
  },
  "help.top.usage_disk": {
    "t": "Penggunaan hosting (situs ini)",
    "what": "Pada versi PHP yang menyimpan lagu di hosting sendiri, bagian ini menunjukkan ruang, jumlah file, dan lagu yang digunakan situs.",
    "when": "Periksa sebelum mengunggah banyak lagu karena paket hosting memiliki batas.",
    "click": "Ini judul. Angka diperiksa ulang setiap 10 menit. [[Segarkan]] membacanya sekarang.",
    "care": "Batas asli paketmu ada di cPanel → Statistics. Bilah persentase hanya muncul jika batas itu dimasukkan saat pemasangan situs. Jika tidak, hanya angka biasa yang terlihat.",
    "like": "Seperti meteran ruang toko sewaan. Kontrak pemilik gedung menentukan seberapa besar kamu boleh berkembang."
  },
  "help.top.usage": {
    "t": "Penggunaan gratis Cloudflare",
    "what": "Bilah yang menunjukkan penggunaan jatah gratis akun Cloudflare: penyimpanan, penulisan dan pembacaan bulan ini, serta permintaan hari ini.",
    "when": "Lihat sesekali, terutama ketika pengunjung ramai.",
    "click": "Ini judul. Angka diperiksa ulang setiap 10 menit. [[Segarkan]] membacanya sekarang.",
    "care": "Lebih kecil lebih baik. Bilah menjadi oranye pada 70% dan merah pada 90%. Melebihi jatah gratis R2 menimbulkan biaya. Melebihi jatah Workers menghentikan situs sampai akhir hari tanpa biaya. Angka menghitung seluruh akun Cloudflare, bukan hanya situs ini.",
    "like": "Seperti meteran listrik toko. Periksalah sebelum tagihan datang."
  },
  "help.top.usage_refresh": {
    "t": "Segarkan",
    "what": "Membaca angka penggunaan terbaru dari Cloudflare tanpa menunggu pembaruan 10 menit berikutnya.",
    "when": "Tekan setelah unggah besar atau setelah memasukkan kunci penggunaan baru.",
    "click": "Bilah segera diperbarui dan waktu di samping judul berubah.",
    "care": "Angka Cloudflare sendiri bisa sedikit terlambat, jadi pembacaan baru mungkin masih tampak sama untuk sementara.",
    "like": "Seperti pergi ke meteran dan membacanya sendiri, bukan menunggu petugas."
  },
  "help.top.usage_connect": {
    "t": "Hubungkan",
    "what": "Ditampilkan saat belum ada kunci penggunaan. Kunci membuat halaman ini bisa menampilkan batas gratis Cloudflare.",
    "when": "Tekan untuk menambahkan kunci; sekitar 2 menit.",
    "click": "Tab Info situs terbuka pada kartu **Lihat penggunaan**, siap untuk menempel kunci.",
    "care": "Tanpa kunci, situs tetap bekerja tetapi kamu tidak bisa melihat apakah hampir mencapai batas. Kunci hanya bisa membaca angka.",
    "like": "Seperti memasang meteran listrik. Lampu tetap menyala tanpa meteran, tetapi penggunaanmu tidak terlihat."
  },
  "help.top.usage_retoken": {
    "t": "Masukkan kunci lagi",
    "what": "Ditampilkan ketika kunci penggunaan tersimpan tetapi angkanya tidak bisa dibaca. Alasannya tertulis di atas.",
    "when": "Tekan jika kunci dihapus di Cloudflare, kedaluwarsa, atau kurang satu izin.",
    "click": "Tab Info situs terbuka pada kartu **Lihat penggunaan** untuk menempel kunci baru.",
    "care": "Pastikan dua hal: kunci dibuat di akun Cloudflare yang sama dengan situs ini, dan memiliki kedua izin (Account Analytics · Read dan Account Settings · Read). Bilah mungkin tetap menunjukkan angka terakhir yang berhasil dibaca hingga diperbaiki.",
    "like": "Seperti mengganti kunci meteran yang tidak bisa diputar lagi."
  },
  "help.top.usage_uploaded": {
    "t": "Audio yang diunggah lewat halaman admin",
    "what": "Total ukuran file lagu yang kamu unggah di sini. Hanya lagu situs ini yang dihitung.",
    "when": "Bandingkan dengan bilah penyimpanan. Jika jauh lebih besar, ada sesuatu yang lain di akun Cloudflare menggunakan ruang.",
    "click": "Ini hanya angka, berubah saat mengunggah atau menghapus lagu.",
    "care": "Baris di atas menjelaskan apa yang terjadi saat jatah gratis terlampaui. Pada versi PHP juga dijelaskan tempat menemukan batas paket hostingmu.",
    "like": "Seperti jumlah ruang gudang yang diisi rekamanmu sendiri, tanpa menghitung kotak tetangga."
  },
  "help.top.mm_upgrade": {
    "t": "Dapatkan ruang lebih (tingkatkan)",
    "what": "Tombol untuk meminta meshmelo menaikkan jatah penggunaan harian. Muncul dalam peringatan atas ketika penggunaan hari ini mencapai 80% atau lebih.",
    "when": "Tekan jika situs sering kehabisan jatah harian.",
    "click": "Halaman peningkatan meshmelo atau email kepada meshmelo terbuka. Belum ada yang berubah sampai meshmelo menyiapkannya.",
    "care": "Kebanyakan situs tidak memerlukannya. Satu hari ramai akan kembali normal setelah batas diatur ulang.",
    "like": "Seperti meminta sambungan listrik lebih besar saat toko menjadi ramai."
  },
  "help.top.mm_use": {
    "t": "Penggunaan hari ini",
    "what": "Pada situs meshmelo, satu persentase menunjukkan seberapa banyak jatah gratis harian yang sudah terpakai. Di bawahnya terlihat tujuh hari terakhir.",
    "when": "Lihat pada hari ramai, misalnya setelah membagikan tautan.",
    "click": "Ini hanya angka yang kembali ke 0% setiap hari pada waktu di bawah bilah.",
    "care": "Angka kecil lebih baik, tetapi angka besar juga berarti banyak pengunjung. Mulai 80% muncul peringatan. Pada 100%, pengunjung melihat halaman singkat 'segera kembali' sampai jatah diatur ulang. Halaman admin dan pemutaran di aimusiclist.com tetap bekerja.",
    "like": "Seperti meteran listrik toko untuk hari ini. Saat penuh, pintu depan tutup sampai besok."
  },
  "help.top.mm_use_notify": {
    "t": "Kirim email sekali sehari setelah melewati 80%",
    "what": "Kotak centang untuk menerima peringatan email ketika penggunaan hari ini melebihi 80%.",
    "when": "Aktifkan jika kamu tidak membuka halaman ini setiap hari.",
    "click": "Pilihan disimpan segera saat dicentang atau dilepas. Maksimal satu email sehari.",
    "care": "Hanya memberikan peringatan, tidak menghentikan apa pun. Kotak ini hanya muncul jika meshmelo sudah mengaktifkan email peringatan.",
    "like": "Seperti meminta petugas meteran mengirim pesan ketika meteran hampir penuh."
  },
  "help.top.aml_retry": {
    "t": "Coba sekarang",
    "what": "Langsung mencoba terhubung ke aimusiclist.com tanpa menunggu percobaan otomatis berikutnya.",
    "when": "Tekan jika status belum terhubung atau setelah memperbaiki penyebab yang ditampilkan.",
    "click": "Status berubah menjadi 'Menghubungkan…', lalu segera menampilkan hasil. Jika berhasil, lagu publikmu dikirim ke aimusiclist.com.",
    "care": "Jika masalah berasal dari aimusiclist.com, menekan berkali-kali tidak membantu. Tunggu sebentar lalu coba lagi.",
    "like": "Seperti menelepon pasar sendiri tanpa menunggu mereka menelepon balik."
  },
  "help.tracks.list": {
    "t": "Lagu saya",
    "what": "Daftar semua lagu di situsmu. Angka dalam tanda kurung menunjukkan jumlah lagu.",
    "when": "Buka untuk menemukan lagu, mengatur publik di aimusiclist.com, mendengarkan, mengedit, atau menghapusnya.",
    "click": "Semua yang terlihat adalah daftar tersimpan yang sebenarnya. Tombol dan sakelar tiap baris langsung bekerja.",
    "care": "Lagu tanpa file audio menunjukkan **Tidak ada audio**. Lagu itu tidak dihitung di mana pun sampai kamu menambahkan filenya.",
    "like": "Seperti daftar stok toko: setiap rekaman dan penanda apakah juga dipajang di pasar besar (aimusiclist.com)."
  },
  "help.tracks.search": {
    "t": "Cari judul lagu",
    "what": "Kolom untuk mencari lagu berdasarkan judul. Hanya lagu yang judulnya memuat kata ketikanmu yang tetap terlihat.",
    "when": "Gunakan jika lagu sudah banyak dan ingin cepat menemukan satu lagu atau memilih sekelompok lagu.",
    "click": "Daftar berubah saat kamu mengetik. Tidak ada yang disimpan atau diubah. Kosongkan kolom untuk melihat semua lagu lagi.",
    "care": "Pencarian hanya melihat judul, bukan genre atau nama artis. Huruf besar-kecil tidak berpengaruh. [[Pilih semua yang terlihat]] hanya memilih lagu yang tersisa setelah pencarian.",
    "like": "Seperti mencari rekaman di rak berdasarkan judul pada punggung sampulnya."
  },
  "help.tracks.nolang": {
    "t": "Hanya lagu tanpa bahasa",
    "what": "Kotak centang untuk menampilkan hanya lagu yang bahasa liriknya belum diatur.",
    "when": "Gunakan untuk mencari lagu lama yang perlu diberi bahasa, lalu perbaiki semuanya sekaligus.",
    "click": "Daftar langsung berubah tanpa menyimpan apa pun. Lepaskan centang untuk melihat semua lagu. Bisa dipakai bersama pencarian judul.",
    "care": "Sebelum diatur, aimusiclist.com menganggap bahasanya sama dengan bahasa utama situs. Cara cepat: centang ini, pilih semua lagu yang tampil lewat kotak atas, lalu gunakan **Bahasa lagu terpilih** dan [[Terapkan]].",
    "like": "Seperti mengeluarkan hanya rekaman yang belum memiliki label bahasa nyanyiannya."
  },
  "help.tracks.bulk": {
    "t": "Ubah banyak lagu sekaligus",
    "what": "Kotak untuk mengubah beberapa lagu bersama-sama. Jika belum ada lagu dipilih, terlihat petunjuk singkat. Jika kamu mencentang lagu, muncul jumlah pilihan dan alat pengubahannya.",
    "when": "Gunakan saat banyak lagu membutuhkan perubahan yang sama agar tidak perlu mengedit satu per satu.",
    "click": "Mencentang lagu belum menyimpan apa pun. Setiap alat baru menyimpan saat kamu menekan [[Terapkan]] atau tombolnya sendiri. Setelah itu centang akan dihapus.",
    "care": "Pilih lagu lewat kotak kecil di kiri tiap baris, atau kotak atas untuk semua yang terlihat. Alat tersedia untuk suasana (atau info tambahan), bahasa lagu, alat AI, dan jumlah putar yang ditampilkan kepada pengunjung (jika situs menghitungnya).",
    "like": "Seperti menempel stiker pada banyak rekaman sekaligus tanpa mendatangi setiap rak."
  },
  "help.tracks.bulk_lang": {
    "t": "Bahasa lagu terpilih",
    "what": "Mengatur bahasa lirik untuk semua lagu yang dicentang sekaligus. Kamu juga bisa menambahkan bahasa kedua.",
    "when": "Gunakan jika banyak lagu dinyanyikan dalam bahasa yang sama atau belum punya bahasa.",
    "click": "Memilih bahasa belum menyimpan. Tekan [[Terapkan]] di bawah untuk menyimpan.",
    "care": "Ini bahasa lirik, bukan bahasa situs. Jika tidak ada lirik, pilih **Instrumental (tanpa lirik)**. Tidak bisa dipadukan dengan bahasa lain. aimusiclist.com memakai ini untuk tangga lagu menurut bahasa.",
    "like": "Seperti menulis \"dinyanyikan dalam bahasa Korea\" pada banyak label rekaman sekaligus."
  },
  "help.tracks.bulk_lang_apply": {
    "t": "Terapkan",
    "what": "Menyimpan bahasa lagu yang dipilih ke semua lagu yang dicentang.",
    "when": "Tekan setelah memilih lagu dan bahasa.",
    "click": "Langsung disimpan, pesan menunjukkan jumlah lagu yang berubah, dan semua centang dibersihkan. Bahasa baru segera terlihat di aimusiclist.com.",
    "care": "Bahasa lama lagu diganti. Jika tidak ada yang dicentang, kamu hanya mendapat pengingat untuk memilih lagu terlebih dahulu.",
    "like": "Inilah saat label bahasa baru benar-benar ditempel pada rekaman."
  },
  "help.tracks.select": {
    "t": "Pilih lagu",
    "what": "Kotak di bagian atas memilih semua lagu yang terlihat. Kotak kecil tiap baris memilih satu lagu.",
    "when": "Gunakan sebelum mengubah banyak lagu sekaligus di kotak atas daftar.",
    "click": "Mencentang hanya menandai lagu, belum menyimpan. Kotak di atas menunjukkan jumlah terpilih dan membuka alat perubahan.",
    "care": "Kotak atas hanya memilih lagu yang saat ini terlihat. Jika kamu mencari atau memakai **Hanya lagu tanpa bahasa**, lagu yang tersembunyi tidak ikut dipilih.",
    "like": "Seperti menunjuk rekaman yang ingin diubah sebelum mengambil stikernya."
  },
  "help.tracks.pub": {
    "t": "Publik di aimusiclist",
    "what": "Sakelar di setiap baris menentukan apakah lagu ikut tampil di aimusiclist.com. Lagu selalu ada di situsmu sendiri, baik sakelar hidup maupun mati.",
    "when": "Aktifkan untuk lagu yang ingin kamu perdengarkan lebih luas. Matikan jika hanya ingin menyimpannya di situsmu.",
    "click": "Langsung tersimpan saat ditekan. Jika aktif, lagu muncul di aimusiclist.com dalam 1–2 menit. Jika dimatikan, lagu dihapus dari sana.",
    "care": "Jika punya setidaknya 10 lagu, 10 harus tetap publik sehingga tidak boleh mengurangi lebih jauh. Jika kurang dari 10, semuanya tetap publik (aturan saat ini terlihat pada baris kecil di bawah judul). Sakelar redup berarti lagu berada di album publik atau album yang dijadwalkan. Jadikan album privat terlebih dahulu.",
    "like": "Dari rekaman di tokomu, kamu memilih mana yang juga akan dipajang di rak pasar besar (aimusiclist.com)."
  },
  "help.tracks.col_title": {
    "t": "Judul",
    "what": "Menampilkan gambar, judul, dan artis lagu, serta bahasa dan label kecilnya.",
    "when": "Lihat untuk memeriksa rincian lagu sekilas.",
    "click": "Ini hanya informasi. Untuk mengubahnya, tekan [[Edit]] pada baris itu.",
    "care": "Arti label kecil: **SRT** = ada lirik berwaktu, **✦ nama** = alat AI pembuatnya, **Tidak ada audio** = file audio hilang, **Ada di album publik** = bagian dari album publik. Di ponsel, jumlah putar juga terlihat di sini.",
    "like": "Seperti bagian depan sampul rekaman: gambar, judul, dan pembuatnya."
  },
  "help.tracks.col_genres": {
    "t": "Genre",
    "what": "Menampilkan hingga tiga genre lagu. Yang pertama dan disorot adalah genre utama, sisanya genre tambahan.",
    "when": "Lihat untuk memastikan lagu berada di genre yang tepat.",
    "click": "Ini hanya informasi. Untuk mengubah genre, tekan [[Edit]] di baris itu.",
    "care": "Genre utama menentukan menu lagu di aimusiclist.com. Genre tambahan ditampilkan di samping judul. Kolom ini tersembunyi pada layar ponsel.",
    "like": "Seperti label rak yang memberi tahu pembeli sudut pasar mana tempat rekaman itu berada."
  },
  "help.tracks.col_length": {
    "t": "Durasi",
    "what": "Lama lagu dalam menit dan detik (misalnya 3:25).",
    "when": "Lihat untuk memastikan file yang diunggah benar, misalnya jika durasinya terlalu singkat.",
    "click": "Ini hanya informasi dari file audio. Untuk mengubahnya, unggah file baru melalui [[Edit]].",
    "care": "Durasi lagu harus antara 30 detik dan 15 menit. Kolom ini tersembunyi pada layar ponsel.",
    "like": "Seperti waktu putar yang dicetak di belakang sampul rekaman."
  },
  "help.tracks.col_plays": {
    "t": "Pemutaran",
    "what": "Jumlah total pemutaran lagu di situsmu sendiri. Arahkan penunjuk ke angka untuk melihat tujuh hari terakhir dan hari ini.",
    "when": "Gunakan untuk mengetahui lagu paling banyak didengar. Angka besar lebih baik dan bisa membantu memilih lagu publik atau album.",
    "click": "Ini hanya menampilkan angka. Diperbarui sekali sehari atau langsung ketika menekan [[Segarkan sekarang]] di tab Statistik.",
    "care": "Pemutaran di aimusiclist.com tidak termasuk. Hanya muncul jika situs menghitung pemutaran. Jika terlalu rendah, tunggu pembaruan harian atau tekan [[Segarkan sekarang]]. **Disembunyikan dari pengunjung** berarti pengunjung tidak melihat angkanya.",
    "like": "Seperti meteran setiap rekaman yang menunjukkan berapa kali diputar di tokomu."
  },
  "help.tracks.row_buttons": {
    "t": "Tombol lagu",
    "what": "Tombol di ujung tiap baris: [[Pratinjau]], [[Edit]], dan [[Hapus]].",
    "when": "Gunakan untuk mendengar lagu, mengubah detail, atau menghapusnya.",
    "click": "[[Pratinjau]] memutar lagu di sini (tekan [[Berhenti]] untuk berhenti). [[Edit]] membuka formulir lagu di atas halaman. [[Hapus]] meminta konfirmasi lalu langsung menghapus lagu beserta file audionya.",
    "care": "Penghapusan tidak dapat dibatalkan. Lagu juga hilang dari aimusiclist.com. [[Pratinjau]] hanya muncul jika ada file audio. Lagu dalam album publik tidak bisa dihapus jika jumlah lagu album menjadi kurang dari enam.",
    "like": "Seperti alat di meja toko: putar rekaman, perbaiki label, atau keluarkan dari toko selamanya."
  },
  "help.tracks.bulk_plays": {
    "t": "Jumlah putar untuk pengunjung",
    "what": "Menentukan apakah pengunjung bisa melihat jumlah pemutaran pada lagu yang dicentang.",
    "when": "Gunakan untuk menyembunyikan angka pada beberapa lagu (misalnya lagu baru), atau menampilkannya kembali.",
    "click": "Tekan [[Tampilkan]] atau [[Sembunyikan]] untuk langsung menyimpan pada semua lagu yang dicentang.",
    "care": "Pengunjung hanya melihat jumlah setelah **Tampilkan jumlah putar kepada pengunjung** diaktifkan di Info situs. Kotak ini hanya muncul jika situs menghitung pemutaran. Kamu selalu bisa melihat angka sendiri di sini.",
    "like": "Seperti memilih rekaman mana yang diberi stiker kecil \"terjual 120 kali\" di toko."
  },
  "help.tracks.bulk_plays_show": {
    "t": "Tampilkan",
    "what": "Mengizinkan pengunjung melihat jumlah putar lagu yang dicentang.",
    "when": "Tekan untuk lagu yang angkanya sebelumnya disembunyikan dan sekarang ingin ditampilkan.",
    "click": "Langsung disimpan untuk semua lagu terpilih dan centang dibersihkan. Tekan [[Sembunyikan]] kapan saja untuk membatalkannya.",
    "care": "Tidak ada angka yang terlihat oleh pengunjung jika **Tampilkan jumlah putar kepada pengunjung** dimatikan di Info situs.",
    "like": "Seperti memasang kembali stiker \"sudah diputar sekian kali\" pada rekaman."
  },
  "help.tracks.bulk_plays_hide": {
    "t": "Sembunyikan",
    "what": "Menyembunyikan jumlah putar lagu terpilih dari pengunjung.",
    "when": "Tekan untuk lagu yang angkanya belum ingin kamu tampilkan, misalnya lagu yang baru diunggah.",
    "click": "Langsung disimpan dan semua centang dibersihkan. Jika sakelar Info situs aktif, lagu itu menampilkan **Disembunyikan dari pengunjung** di bawah angka pada daftar ini. Tekan [[Tampilkan]] kapan saja untuk membatalkannya.",
    "care": "Hanya angka yang disembunyikan. Lagu tetap dapat diputar dan pemutaran tetap dihitung.",
    "like": "Seperti melepas stiker \"sudah diputar sekian kali\" dari beberapa rekaman. Rekamannya tetap di rak."
  },
  "help.tracks.plays_show": {
    "t": "Tampilkan jumlah putar lagu ini",
    "what": "Menentukan apakah pengunjung melihat berapa kali lagu diputar di situsmu, misalnya “1.234 pemutaran”.",
    "when": "Lepas centang jika ingin menyimpan angka suatu lagu untuk diri sendiri.",
    "click": "Disimpan saat menekan [[Simpan lagu]]. Angka yang dilihat pengunjung diperbarui sekali sehari.",
    "care": "Pengunjung hanya melihatnya jika “Tampilkan jumlah putar kepada pengunjung” aktif di Info situs. Ketika mengunjungi situs sambil masuk, kamu sendiri melihat semua angka.",
    "like": "Seperti memilih apakah jumlah \"terjual\" kecil digantung pada rekaman ini di toko."
  },
  "help.site.plays": {
    "t": "Jumlah putar",
    "what": "Pengaturan angka banyaknya pemutaran tiap lagu di situsmu. Pemutaran pada halaman aimusiclist.com tidak termasuk.",
    "when": "Buka untuk menentukan apakah pengunjung dapat melihat angka itu.",
    "click": "Judul ini hanya menjelaskan kartu. Jika kartu menyebut angka putar akan muncul setelah situs mulai menghitung, statistik belum aktif — tab Statistik menjelaskan cara mengaktifkannya.",
    "care": "Angka ini hanya untuk situsmu sendiri. Tidak dikirim ke aimusiclist.com dan tidak memengaruhi peringkat di sana.",
    "like": "Seperti penghitung kecil pada pemutar rekaman toko, yang bertambah setiap kali sebuah rekaman diputar."
  },
  "help.site.plays_switch": {
    "t": "Tampilkan jumlah putar kepada pengunjung",
    "what": "Jika aktif, tiap lagu menampilkan angka seperti \"1.234 pemutaran\". Awalnya tidak aktif.",
    "when": "Aktifkan jika angka ini berguna, misalnya untuk menunjukkan lagu populer. Biarkan mati jika tidak ingin menunjukkannya.",
    "click": "Langsung disimpan saat diklik. Angka berubah sekali sehari, atau segera setelah menekan [[Segarkan sekarang]] di tab Statistik. Angka lebih besar berarti lebih banyak didengar. Untuk menyembunyikan beberapa lagu saja, gunakan daftar atau layar edit lagu.",
    "care": "Saat kamu masuk, semua angka terlihat olehmu di situs, termasuk yang disembunyikan. Hanya kamu yang melihatnya, bukan pengunjung.",
    "like": "Seperti menaruh penghitung pemutar rekaman di tempat yang terlihat oleh pelanggan."
  },
  "help.site.likes": {
    "t": "Suka",
    "what": "Pengaturan tombol ♥ pada lagu. Pengunjung menekannya untuk menyatakan suka.",
    "when": "Buka untuk menampilkan atau menyembunyikan tombol itu di seluruh situs.",
    "click": "Judul ini hanya menjelaskan kartu. Sakelar di bawah yang bekerja. Jika kartu meminta statistik diaktifkan, suka belum bisa dihitung — lihat tab Statistik.",
    "care": "Suka hanya dihitung pada situsmu. Tidak dikirim ke aimusiclist.com dan tidak mengubah peringkatnya.",
    "like": "Seperti papan stiker hati di toko tempat pelanggan menandai rekaman kesukaan mereka."
  },
  "help.site.likes_switch": {
    "t": "Tampilkan tombol suka",
    "what": "Menampilkan atau menyembunyikan tombol ♥ di setiap lagu situsmu. Awalnya aktif.",
    "when": "Biarkan aktif untuk melihat lagu yang disukai pengunjung. Matikan jika tidak ingin hati di situs.",
    "click": "Langsung disimpan saat diklik. Pengunjung bisa menekan ♥ tanpa masuk, dan menekan lagi untuk membatalkan. Angka berubah sekali sehari. Angka lebih besar berarti lebih banyak yang suka.",
    "care": "Tombol hanya tampil jika statistik aktif. Mematikannya menyembunyikan tombol tetapi mempertahankan hati yang sudah diberikan. Saat diaktifkan lagi, hati akan muncul kembali.",
    "like": "Seperti memasang atau menurunkan papan stiker hati di toko."
  },
  "help.site.add": {
    "t": "Tambahkan ke aimusiclist",
    "what": "Pengaturan tombol \"+ aimusiclist\" agar pengunjung dapat memasukkan lagu ke daftar putar mereka di aimusiclist.com.",
    "when": "Buka untuk menampilkan atau menyembunyikan tombol itu di situsmu.",
    "click": "Judul ini hanya menjelaskan kartu. Sakelar di bawah yang bekerja. Jika kartu meminta sambungan dahulu, situs belum terhubung ke aimusiclist sehingga tombol belum dapat muncul.",
    "like": "Seperti label \"bawa ke pasar besar\" pada rekaman, agar pelanggan bisa memasukkan lagu ke keranjang mereka di aimusiclist.com."
  },
  "help.site.add_switch": {
    "t": "Tampilkan tombol \"+ aimusiclist\"",
    "what": "Menampilkan atau menyembunyikan tombol \"+ aimusiclist\" di samping lagu dan pada pemutar. Awalnya aktif.",
    "when": "Biarkan aktif agar pendengar dapat menyimpan lagu di daftar putar aimusiclist mereka. Matikan jika tidak menginginkan tombol ini.",
    "click": "Pilihan langsung tersimpan. Ketika pengunjung menekannya, jendela kecil aimusiclist terbuka (tab baru di ponsel) dan mereka memilih daftar putar tanpa masuk.",
    "care": "Tombol hanya muncul pada lagu yang publik di aimusiclist dan jika situs sudah terhubung. Sakelar ini tidak mengubah lagu menjadi publik atau privat.",
    "like": "Seperti memasang tombol kecil \"masukkan ke keranjang\" pada rekaman yang juga ada di pasar besar."
  },
  "help.tracks.bulk_mood": {
    "t": "Ubah suasana lagu terpilih",
    "what": "Mengatur suasana (misalnya Tenang atau Bersemangat) semua lagu yang dicentang sekaligus. Jika kamu memilih item lain di **Yang ingin diubah**, informasi tambahan itulah yang diatur.",
    "when": "Gunakan setelah mengunggah banyak lagu atau ketika ingin mengelompokkan lagu menurut perasaan.",
    "click": "Belum ada yang berubah sampai kamu menekan [[Terapkan]]. Kemudian semua lagu terpilih mendapat nilai yang sama dan tersimpan. Sebentar lagi informasi muncul di samping tiap lagu pada situs dan aimusiclist.com.",
    "care": "Nilai lama lagu tersebut diganti. Kotak ini hanya muncul jika aimusiclist.com menyediakan pilihan informasi tambahan.",
    "like": "Seperti memasang label warna sama, misalnya \"tenang\", pada banyak rekaman agar pembeli mudah mencari menurut suasana."
  },
  "help.tracks.bulk_mood_field": {
    "t": "Yang ingin diubah",
    "what": "Memilih informasi tambahan apa yang ingin kamu atur untuk lagu yang dicentang. Pilihan awalnya suasana.",
    "when": "Ganti jika ingin mengatur hal selain suasana pada banyak lagu.",
    "click": "Pilihan di sini hanya mengubah daftar di bawah. Belum tersimpan sampai kamu menekan [[Terapkan]].",
    "care": "Daftar berasal dari aimusiclist.com dan bisa bertambah. Hanya informasi yang memiliki daftar pilihan yang muncul di sini.",
    "like": "Seperti memilih jenis label yang akan ditempel: suasana atau informasi lainnya."
  },
  "help.tracks.bulk_mood_apply": {
    "t": "Terapkan",
    "what": "Menyimpan nilai pilihanmu ke semua lagu yang dicentang.",
    "when": "Tekan setelah memilih lagu dan nilai.",
    "click": "Langsung tersimpan, lalu pesan menunjukkan jumlah lagu yang diubah. Semua centang dihapus, dan aimusiclist.com segera menampilkan perubahan.",
    "care": "Jika memilih **— kosongkan (tanpa nilai) —** atau tidak mencentang pilihan dalam item multi-pilih, nilai akan dihapus dari lagu-lagu tersebut. Jika belum memilih lagu, kamu hanya diingatkan untuk mencentang dulu.",
    "like": "Inilah saat label benar-benar ditempelkan pada rekaman."
  },
  "help.top.lang_fix": {
    "t": "Atur sekarang",
    "what": "Memilih semua lagu tanpa bahasa agar kamu bisa mengaturnya sekaligus.",
    "when": "Tekan dari pemberitahuan bahasa lagu.",
    "click": "Tab Lagu terbuka, hanya lagu tersebut yang terlihat dan sudah dicentang. Kotak ubah banyak lagu terbuka pada kolom bahasa. Pilih bahasa lalu terapkan. Belum ada yang disimpan sebelum itu.",
    "care": "Jika lagu-lagunya berbahasa berbeda, lepaskan beberapa centang lalu lakukan dalam beberapa putaran.",
    "like": "Seperti mengumpulkan semua rekaman tanpa label di satu meja untuk diberi label sekaligus."
  },
  "help.tracks.aml_box": {
    "t": "Juga terbitkan di aimusiclist.com",
    "what": "Menentukan apakah lagu ini juga dikirim ke aimusiclist.com. Situsmu sendiri tetap menampilkan lagunya.",
    "when": "Biarkan dicentang jika ingin lagu didengar dunia dan punya peluang masuk Top 100. Lepaskan jika hanya ingin lagunya di situsmu.",
    "click": "Disimpan ketika mengunggah atau menekan [[Simpan lagu]]. Lagu publik muncul di aimusiclist.com beberapa menit kemudian. Kamu bisa mengubahnya nanti di daftar lagu.",
    "care": "Setidaknya 10 lagu harus tetap publik (semua lagu jika jumlahnya kurang dari 10). Karena itu, lagu baru mungkin tetap diterbitkan meskipun tidak dicentang, atau penyimpanan bisa ditolak. Jika lagu berada dalam album publik, kotak tetap dicentang sampai album dijadikan privat.",
    "like": "Seperti memilih rekaman dari tokomu yang juga akan ditempatkan di rak pasar besar."
  },
  "help.tracks.upload": {
    "t": "Unggah lagu",
    "what": "Tempat menambahkan lagu baru ke situs. Pilih file audio, isi beberapa kolom tiap lagu, lalu tekan tombol unggah.",
    "when": "Gunakan setiap kali memiliki lagu baru. Maksimal 20 lagu sekaligus.",
    "click": "Memilih file hanya memasukkannya ke daftar di sini. Belum disimpan sampai kamu menekan [[Unggah … lagu]]. Sesudah itu, lagu langsung ada di situs.",
    "care": "File boleh MP3, M4A, atau WAV. Durasi setiap lagu antara 30 detik dan 15 menit, ukuran paling besar 15 MB.",
    "like": "Seperti pintu belakang toko tempat rekaman baru masuk sebelum disusun di rak."
  },
  "help.tracks.choose": {
    "t": "Pilih file",
    "what": "Membuka jendela untuk memilih file audio dari komputer. Kamu juga bisa menyeret file ke kotak ini.",
    "when": "Gunakan untuk memulai unggahan. Banyak file bisa dipilih sekaligus.",
    "click": "File ditambahkan ke daftar di bawah. Belum ada yang diunggah. File dengan jenis salah langsung diberi tanda “Gagal”.",
    "care": "Daftar maksimal 20 file; selebihnya tidak dimasukkan. MP3 dan M4A harus paling besar 15 MB. WAV diubah menjadi MP3 320 kbps, dan MP3 hasilnya juga maksimal 15 MB (sekitar 6½ menit). Durasi semua lagu antara 30 detik dan 15 menit.",
    "like": "Seperti memasukkan rekaman ke keranjang. Rekaman belum ada di rak sampai keranjang dibawa masuk."
  },
  "help.tracks.name_tags": {
    "t": "Baca genre, suasana, dan bahasa dari ( ) pada nama file",
    "what": "Jika aktif, nama file seperti “Midnight Rain (R&B, Neo Soul; Romantic, en)” mengisi kolom secara otomatis. Judul menjadi “Midnight Rain”.",
    "when": "Biarkan aktif jika kamu menamai lagu memakai panduan AI. Matikan jika tanda ( ) merupakan bagian judul sebenarnya.",
    "click": "Daftar langsung dibaca ulang. Hanya file yang kolomnya belum kamu ubah sendiri yang diisi kembali. Browser mengingat pilihan ini.",
    "care": "Bagian sebelum “;” berisi genre (yang pertama adalah genre utama). Sesudahnya berisi suasana dan kode bahasa. Kata tak dikenal dilewati dan ditampilkan abu-abu. Bagian seperti (Live) atau (feat. X) tetap berada di judul.",
    "like": "Seperti petugas membaca stiker pada kotak rekaman dan mengisi label rak untukmu."
  },
  "help.tracks.common": {
    "t": "Terapkan ke semua lagu dalam unggahan ini",
    "what": "Kolom di bawah judul ini berlaku untuk setiap lagu yang kamu unggah sekarang: alat AI, artis, informasi tambahan, dan publikasi di aimusiclist.com.",
    "when": "Atur sekali sebelum menekan tombol unggah.",
    "click": "Belum ada yang disimpan sampai kamu mengunggah. Genre, suasana, dan bahasa lagu tidak ada di sini karena dipilih untuk tiap file di atas.",
    "care": "Jika satu lagu memerlukan nilai berbeda, unggah dulu lalu ubah dengan [[Edit]] pada daftar lagu.",
    "like": "Seperti stiker untuk seluruh keranjang, bukan untuk setiap rekaman."
  },
  "help.tracks.artist": {
    "t": "Artis",
    "what": "Nama penyanyi atau pembuat lagu yang ditampilkan. Pilihan pertama adalah nama situsmu.",
    "when": "Gunakan nama situs untuk kebanyakan lagu. Pilih nama lain jika lagu memakai nama artis lain milikmu.",
    "click": "Disimpan saat unggah atau menekan [[Simpan lagu]]. Jika memakai nama situs lalu mengganti nama situs, nama artis pada lagu ikut berubah.",
    "care": "Nama lain berasal dari kartu “Artis lain” pada tab Info situs (maksimal 20 nama). Tambahkan namanya di sana lebih dahulu.",
    "like": "Seperti nama yang tercetak di sampul rekaman, di bawah judul."
  },
  "help.tracks.up_start": {
    "t": "Unggah … lagu",
    "what": "Mengirim file yang menunggu ke situs satu per satu. Angka pada tombol menunjukkan jumlah lagu yang menunggu.",
    "when": "Tekan jika semua file sudah memiliki genre utama dan bahasa lagu.",
    "click": "Setiap baris menunjukkan kemajuan. Setelah selesai, lagu langsung ada di situsmu dan yang publik dikirim ke aimusiclist.com sekali pada akhir proses.",
    "care": "Tombol terkunci jika kolom wajib kosong. Biarkan halaman terbuka sampai selesai karena halaman ini mengirim filenya. Jika beberapa gagal, lagu lain tetap tersimpan.",
    "like": "Seperti membawa keranjang masuk ke toko dan menyusun rekaman di rak."
  },
  "help.tracks.up_retry": {
    "t": "Coba ulang lagu gagal",
    "what": "Mengirim ulang hanya lagu yang gagal, misalnya karena sambungan terputus.",
    "when": "Muncul jika ada lagu yang gagal. Tekan setelah memeriksa internet.",
    "click": "Lagu yang gagal dikirim lagi. Jika lagu sudah terdaftar, yang dikirim ulang hanya audionya sehingga tidak dibuat dua kali.",
    "care": "Jenis file yang salah tidak bisa dicoba ulang. Jika gagal karena ukuran atau durasi, perbaiki file, hapus barisnya, lalu tambahkan lagi.",
    "like": "Seperti kembali mengambil rekaman yang jatuh dari keranjang."
  },
  "help.tracks.up_clear": {
    "t": "Kosongkan daftar",
    "what": "Mengosongkan seluruh daftar unggahan sekaligus.",
    "when": "Gunakan setelah unggahan selesai atau saat ingin mengulang dari awal.",
    "click": "Semua baris langsung hilang. Lagu yang sudah diunggah tetap ada di situs.",
    "care": "Tombol tidak bisa ditekan saat unggahan berjalan. Isian file yang belum diunggah akan hilang.",
    "like": "Seperti mengosongkan keranjang. Rekaman yang sudah di rak tetap ada."
  },
  "help.tracks.edit": {
    "t": "Edit",
    "what": "Formulir untuk mengubah satu lagu yang sudah diunggah. Terbuka saat menekan [[Edit]] pada baris daftar lagu.",
    "when": "Gunakan untuk memperbaiki judul, genre, bahasa, artis, dan lainnya, atau mengganti file audio.",
    "click": "Perubahan bagian atas hanya tersimpan dengan [[Simpan lagu]]. Gambar dan lirik di bawah langsung disimpan saat diubah.",
    "care": "Saat formulir ini terbuka, kartu unggah digantikannya. Tekan [[Batal]] atau simpan untuk mengembalikan kartu unggah.",
    "like": "Seperti mengambil satu rekaman dari rak untuk memperbaiki label."
  },
  "help.tracks.title": {
    "t": "Judul",
    "what": "Nama lagu yang ditampilkan di situsmu dan aimusiclist.com.",
    "when": "Ubah jika judul dari nama file salah atau perlu diperbaiki.",
    "click": "Disimpan saat kamu menekan [[Simpan lagu]]. Judul baru lagu publik terlihat di aimusiclist.com sesaat kemudian.",
    "care": "Judul tidak boleh kosong dan maksimal 100 karakter.",
    "like": "Seperti tulisan nama besar pada sampul rekaman."
  },
  "help.tracks.replace_audio": {
    "t": "Ganti audio (opsional)",
    "what": "Pilih file audio baru untuk mengganti suara lagu. Judul, genre, gambar, dan lirik tetap sama.",
    "when": "Gunakan jika membuat versi lebih baik atau mengunggah file yang salah.",
    "click": "Belum berubah sampai menekan [[Simpan lagu]]. Setelah itu file baru dikirim dan menggantikan audio lama.",
    "care": "Audio lama hilang setelah disimpan, jadi simpan salinan di komputer. Aturan sama dengan unggah: MP3, M4A, atau WAV, 30 detik sampai 15 menit, maksimal 15 MB.",
    "like": "Seperti memasukkan rekaman baru ke sampul yang sama."
  },
  "help.tracks.save": {
    "t": "Simpan lagu",
    "what": "Menyimpan semua perubahan pada formulir edit di atas.",
    "when": "Tekan setelah selesai mengubah judul, genre, bahasa, dan kolom lain.",
    "click": "Perubahan tersimpan dan formulir ditutup. Situsmu langsung menampilkannya, aimusiclist.com menyusul untuk lagu publik. Jika memilih audio baru, file itu juga dikirim dengan indikator kemajuan.",
    "care": "Penyimpanan bisa ditolak, misalnya tanpa genre utama atau jika menjadikan lagu privat membuat jumlah publik kurang dari 10. Pesan merah menjelaskan penyebab dan tidak ada perubahan disimpan.",
    "like": "Seperti mengembalikan rekaman ke rak dengan label yang telah diperbaiki."
  },
  "help.tracks.cancel": {
    "t": "Batal",
    "what": "Menutup formulir edit tanpa menyimpan kolom di atas.",
    "when": "Gunakan jika salah membuka lagu atau berubah pikiran.",
    "click": "Formulir langsung tertutup dan kartu unggah kembali. Perubahan yang belum disimpan dibuang.",
    "care": "Gambar dan lirik lagu langsung disimpan saat diubah, jadi Batal tidak membatalkan perubahan tersebut.",
    "like": "Seperti mengembalikan rekaman ke rak tanpa mengubah label."
  },
  "help.tracks.image": {
    "t": "Gambar lagu",
    "what": "Gambar kecil lagu, ditampilkan di belakang tombol putar pada situs dan aimusiclist.com.",
    "when": "Ubah jika ingin lagu memakai gambar sendiri, bukan gambar bawaan.",
    "click": "Tombol di bawah langsung bekerja. Tidak menunggu [[Simpan lagu]].",
    "care": "Setiap lagu mendapat gambar bawaan saat diunggah. Gambar pilihanmu disimpan sebagai kotak kecil 100×100, dan versi lebih besar jika gambar cukup besar.",
    "like": "Seperti sampul rekaman yang dilihat orang sebelum menekan putar."
  },
  "help.tracks.image_lg": {
    "t": "Tajamkan gambar pada kartu besar",
    "what": "Catatan ini berarti gambar lagu hanya punya versi kecil sehingga bisa buram pada kartu besar di aimusiclist.com, seperti bagian atas Top 100.",
    "when": "Muncul pada lagu yang gambarnya diunggah sebelum gambar besar didukung atau berasal dari gambar terlalu kecil.",
    "click": "Tekan [[Ganti gambar]] lalu unggah gambar lagi. Catatan hilang setelah versi besar tersimpan.",
    "care": "Gunakan gambar dengan bagian terpangkas minimal 200 piksel lebar. Gambar lebih kecil tidak bisa menghasilkan versi besar.",
    "like": "Seperti mencetak ulang sampul kecil menjadi poster untuk etalase toko."
  },
  "help.tracks.image_change": {
    "t": "Ganti gambar",
    "what": "Memilih gambar dari komputer untuk digunakan sebagai gambar lagu.",
    "when": "Gunakan untuk memberi gambar khusus atau mengganti gambar lama.",
    "click": "Jendela terbuka untuk memangkas atau mengecilkan gambar. Setelah menekan [[Simpan gambar]], gambar langsung disimpan dan tampil di situs. Lagu publik menampilkannya di aimusiclist.com sesaat kemudian.",
    "care": "Boleh JPG, PNG, WebP, atau GIF maksimal 2 MB. Hanya gambar yang diperkecil yang diunggah, bukan file asli.",
    "like": "Seperti memasangkan sampul baru pada rekaman."
  },
  "help.tracks.image_reset": {
    "t": "Kembali ke gambar bawaan",
    "what": "Menghapus gambar unggahanmu dan mengembalikan gambar bawaan lagu.",
    "when": "Gunakan jika tidak ingin lagi memakai gambar pribadi untuk lagu ini.",
    "click": "Langsung terjadi tanpa bertanya. Situs langsung menampilkan gambar bawaan.",
    "care": "Gambar unggahan dihapus, termasuk versi besarnya. Untuk memakai lagi, unggah ulang lewat [[Ganti gambar]].",
    "like": "Seperti melepas sampul khusus dan mengembalikan sampul polos toko."
  },
  "help.tracks.lyrics": {
    "t": "Lirik (.srt)",
    "what": "Kata-kata lagu dalam file .srt. File .srt berisi baris lirik beserta waktunya.",
    "when": "Tambahkan agar pendengar bisa ikut membaca. Banyak alat musik AI menyediakan file .srt.",
    "click": "Mengunggah atau menghapus langsung berlaku tanpa [[Simpan lagu]]. Di situs, pengunjung menekan SRT pada lagu untuk membaca lirik tanpa waktu.",
    "care": "File harus berakhiran .srt, disimpan sebagai teks UTF-8, maksimal 100 KB, dan memiliki baris waktu seperti 00:00:01,000 --> 00:00:04,000.",
    "like": "Seperti lembar lirik yang diselipkan dalam sampul rekaman."
  },
  "help.tracks.lyrics_upload": {
    "t": "Unggah .srt / Ganti .srt",
    "what": "Memilih file lirik .srt dari komputer untuk lagu ini. Jika sudah ada lirik, tombol bertuliskan Ganti.",
    "when": "Gunakan untuk menambah lirik atau memperbaiki dengan file baru.",
    "click": "Begitu dipilih, file langsung diperiksa dan disimpan. Lirik lama diganti. Pesan merah muncul jika file tidak benar.",
    "care": "Hanya file .srt maksimal 100 KB dengan teks UTF-8. File tanpa baris waktu ditolak.",
    "like": "Seperti menyelipkan lembar lirik baru ke sampul."
  },
  "help.tracks.lyrics_view": {
    "t": "Lihat file",
    "what": "Membuka file lirik yang tersimpan untuk lagu ini.",
    "when": "Gunakan untuk memeriksa apakah lirik yang benar sudah disimpan.",
    "click": "File dibuka di tab baru bersama waktu liriknya. Tidak ada yang berubah.",
    "like": "Seperti mengeluarkan lembar lirik dari sampul untuk membacanya."
  },
  "help.tracks.lyrics_delete": {
    "t": "Hapus lirik",
    "what": "Menghapus lirik dari lagu ini.",
    "when": "Gunakan jika lirik salah dan belum ada pengganti, atau lagu memang tidak perlu lirik.",
    "click": "Pertanyaan konfirmasi akan muncul. Jika kamu setuju, lirik langsung dihapus dan tanda SRT hilang dari lagu.",
    "care": "Tidak bisa dibatalkan. Untuk mengembalikan lirik, unggah kembali file .srt.",
    "like": "Seperti mengeluarkan lembar lirik dari sampul lalu membuangnya."
  },
  "help.tracks.upguide": {
    "t": "Isi genre dan suasana otomatis",
    "what": "Panduan singkat agar kamu tidak perlu memilih genre, suasana, dan bahasa setiap lagu satu per satu. Berikan file panduan kepada AI gratis agar AI menamai lagu dengan format khusus.",
    "when": "Baca sekali sebelum membuat lagu berikutnya. Terutama berguna saat mengunggah banyak lagu.",
    "click": "Tanda ✕ melipat panduan menjadi tombol kecil; tombol itu membukanya kembali. Browser ini mengingat pilihanmu.",
    "care": "Panduan tidak mengubah cara membuat musik, hanya format judul lagu.",
    "like": "Seperti menulis label rak pada kotak rekaman sebelum dikirim, agar tidak perlu memilahnya saat tiba."
  },
  "help.tracks.upguide_dl": {
    "t": "Ambil file panduan untuk AI",
    "what": "Mengunduh file panduan dari aimusiclist.com, berupa teks biasa yang bisa dibaca AI.",
    "when": "Sebelum membuat lagu, lampirkan file ini ke ChatGPT, Claude, atau Gemini (paket gratis juga bisa), lalu minta AI membuat judul lagu.",
    "click": "File disimpan di komputermu. Tidak ada perubahan pada situs.",
    "care": "Pertahankan nama file yang diberikan AI musik saat mengunduh lagu. Bagian ( ) dari nama itulah yang mengisi kolom di sini.",
    "like": "Seperti kartu resep untuk asisten agar label selalu dibuat dengan cara yang sama."
  },
  "help.tracks.uf_all": {
    "t": "Gunakan untuk semua file",
    "what": "Menyalin nilai kolom ini ke kolom yang sama pada semua file lain dalam daftar.",
    "when": "Gunakan jika banyak lagu memiliki genre, suasana, atau bahasa sama. Isi yang pertama lalu tekan tombol ini.",
    "click": "File lain langsung berubah dan pesan menunjukkan jumlahnya. File yang sudah diunggah tidak disentuh.",
    "care": "Pilihan lama pada file lain akan ditimpa. Kamu masih bisa mengubah tiap file secara manual setelahnya.",
    "like": "Seperti stempel karet untuk menandai semua kotak sekaligus."
  },
  "help.tracks.uf_mood": {
    "t": "Suasana",
    "what": "Perasaan lagu ini, seperti Sedih atau Romantis. aimusiclist.com menentukan pilihan suasana dalam daftar.",
    "when": "Centang suasana yang cocok. Ini opsional.",
    "click": "Centang berlaku hanya untuk file ini dan disimpan saat unggah. Ketika mencapai batas yang terlihat di ( ), kotak lain terkunci sampai satu pilihan dilepas.",
    "care": "Kolom hanya muncul setelah situs menerima daftar pilihan dari aimusiclist.com.",
    "like": "Seperti stiker warna kecil pada rekaman untuk memberitahu pendengar suasananya sebelum memutar."
  },
  "help.tracks.uf_genre": {
    "t": "Genre",
    "what": "Genre satu lagu ini: satu utama dan hingga dua genre tambahan.",
    "when": "Pilih untuk setiap file. Genre utama wajib.",
    "click": "Pilihan hanya berlaku untuk file ini dan tersimpan saat unggah.",
    "care": "Genre utama menentukan menu di aimusiclist.com. Genre tambahan terlihat di samping judul.",
    "like": "Seperti label rak pada satu rekaman: bagian besar lebih dulu lalu dua catatan kecil."
  },
  "help.tracks.uf_lang": {
    "t": "Bahasa lagu",
    "what": "Bahasa nyanyian pada lagu ini. Kamu boleh menambahkan bahasa kedua.",
    "when": "Pilih untuk setiap file. Jika tidak ada nyanyian, pilih “Instrumental (tanpa lirik)”.",
    "click": "Pilihan hanya berlaku untuk file ini dan tersimpan saat unggah.",
    "care": "Ini bukan bahasa tampilan situs. “Instrumental” harus berdiri sendiri, jadi kolom kedua terkunci. aimusiclist.com memakainya untuk tangga lagu berdasarkan bahasa.",
    "like": "Seperti catatan pada rekaman yang menunjukkan bahasa penyanyinya."
  },
  "help.tracks.queue": {
    "t": "File untuk diunggah",
    "what": "Daftar file yang kamu pilih. Tiap baris berisi judul, nama dan ukuran file, status, serta kolom untuk lagunya.",
    "when": "Periksa sebelum mengunggah. Setiap lagu memerlukan genre utama dan bahasa lagu.",
    "click": "Perubahan kolom tetap di sini sampai unggah. Label hijau “Diisi dari nama file” berarti data berasal dari ( ). “Pilih di bawah” berarti kamu harus mengisinya sendiri.",
    "care": "Baris yang memiliki kolom kosong ditandai merah. Selama unggahan berjalan, kolom berubah menjadi ringkasan dan tidak bisa diubah.",
    "like": "Seperti daftar kiriman di pintu belakang: periksa setiap kotak sebelum masuk ke rak."
  },
  "help.tracks.up_remove": {
    "t": "Keluarkan",
    "what": "Mengeluarkan satu file dari daftar unggahan.",
    "when": "Gunakan jika salah memilih file atau file bertanda “Gagal” karena jenis atau durasinya.",
    "click": "Baris langsung hilang. File pada komputermu tidak dihapus.",
    "care": "Tombol tersembunyi selama unggahan berjalan dan pada file yang sudah diunggah. Untuk menghapus lagu terunggah, gunakan daftar lagu.",
    "like": "Seperti mengambil kembali satu rekaman dari keranjang sebelum masuk toko."
  },
  "help.tracks.up_need": {
    "t": "Kolom kosong",
    "what": "Peringatan yang mencantumkan file dengan genre utama atau bahasa lagu yang masih kosong.",
    "when": "Muncul otomatis jika ada kolom wajib kosong. Tombol unggah terkunci sampai semuanya terisi.",
    "click": "Tekan satu baris untuk langsung menuju kolom kosong. Peringatan hilang setelah semuanya terisi.",
    "care": "Hanya 12 kolom kosong pertama yang dicantumkan. Angka di atas menghitung semuanya.",
    "like": "Seperti daftar centang di pintu: kiriman belum boleh masuk sebelum semuanya lengkap."
  },
  "help.tracks.up_after": {
    "t": "Periksa Baru di aimusiclist.com",
    "what": "Catatan yang muncul setelah unggah dan memberitahu tempat melihat lagu publik baru.",
    "when": "Hanya muncul jika situs terhubung ke aimusiclist.com dan sedikitnya satu lagu baru bersifat publik.",
    "click": "Tautan membuka halaman Baru di aimusiclist.com pada tab baru.",
    "care": "aimusiclist.com memerlukan beberapa menit untuk mengambil lagu baru. Jika belum muncul setelah sekitar 5 menit, periksa lagi nanti.",
    "like": "Seperti berjalan ke pasar besar untuk melihat rekaman barumu di rak."
  },
  "help.tracks.pubmin": {
    "t": "Publik: n · Minimum: n",
    "what": "Angka pertama adalah jumlah lagu publikmu saat ini di aimusiclist.com. Angka kedua adalah jumlah terkecil yang harus tetap publik.",
    "when": "Lihat sebelum mematikan publikasi lagu agar tahu berapa banyak yang masih boleh dimatikan.",
    "click": "Ini hanya angka yang berubah otomatis saat lagu diterbitkan atau diprivatkan.",
    "care": "Aturannya: jika punya 10 lagu atau lebih, sedikitnya 10 harus publik. Jika kurang, semuanya harus publik. Hanya lagu dengan file audio yang dihitung. Lagu dalam album publik dihitung publik. Album terjadwal baru dihitung setelah terbit.\nJika angka pertama lebih kecil daripada kedua, kotak kuning memintamu menerbitkan lebih banyak lagu. Kamu sendiri yang memilih. Menghapus lagu tetap boleh.",
    "like": "Pasar besar (aimusiclist.com) meminta setiap toko menaruh sedikitnya 10 rekaman di rak. Angka ini menunjukkan jumlah rekamanmu di sana."
  },
  "help.top.pubmin_go": {
    "t": "Pilih lagu",
    "what": "Membawamu ke tempat memilih lagu yang ingin diterbitkan.",
    "when": "Tekan dari peringatan jumlah lagu publik yang kurang.",
    "click": "Tab Lagu membuka bagian 'Publik · Minimum'. Aktifkan sakelar publik pada lagu pilihanmu. Tiap sakelar langsung menyimpan.",
    "care": "Lagu tanpa audio tidak dihitung. Peringatan menghilang otomatis setelah jumlah minimum tercapai.",
    "like": "Seperti langsung menuju etalase untuk menaruh beberapa rekaman tambahan."
  },
  "help.tracks.pub_tip": {
    "t": "Petunjuk sakelar publik",
    "what": "Catatan singkat yang muncul saat pertama kali memakai sakelar publik. Menjelaskan kapan lagu terlihat di aimusiclist.com.",
    "when": "Baca sekali. Hanya muncul sesudah sakelar pertama kali ditekan di browser ini.",
    "click": "[[Jangan tampilkan lagi]] menyembunyikannya selamanya di browser ini. [[Tutup]] hanya menyembunyikannya sampai kamu membuka admin lagi.",
    "care": "Menyembunyikan catatan tidak mengubah lagu apa pun.",
    "like": "Seperti papan kecil di dekat rak: \"Rekaman yang diletakkan di sini muncul di pasar besar dalam satu atau dua menit\"."
  },
  "help.albums.form": {
    "t": "Album baru / Edit album",
    "what": "Kotak untuk membuat atau mengubah album. Album adalah kumpulan lagu berurutan dengan judul, sampul, dan pengantar singkat.",
    "when": "Gunakan untuk mengelompokkan lagu seperti rekaman sungguhan. Album muncul di situs, dan yang publik juga muncul di aimusiclist.com.",
    "click": "Belum ada isian yang disimpan saat mengetik. Semuanya disimpan bersama saat menekan [[Simpan album]]. [[Batal]] menutup kotak dan membuang perubahan.",
    "care": "Album bisa berisi hingga 35 lagu. Untuk publik, harus 6–35 lagu dan semuanya punya file audio. Album lebih kecil bisa disimpan, tetapi tetap privat.",
    "like": "Seperti menyusun rekaman: memilih lagu, menentukan urutan, dan memasang sampul."
  },
  "help.albums.title": {
    "t": "Judul album",
    "what": "Nama album yang dilihat pengunjung di situs dan di aimusiclist.com jika publik.",
    "when": "Isi setiap kali membuat album. Album tidak bisa disimpan tanpa judul.",
    "click": "Disimpan saat menekan [[Simpan album]]. Kamu bisa mengubahnya nanti lewat [[Edit]] pada daftar album.",
    "care": "Maksimal 100 karakter.",
    "like": "Seperti nama besar di bagian depan sampul rekaman."
  },
  "help.albums.artist": {
    "t": "Artis",
    "what": "Nama artis pemilik album. Pilihan pertama nama situs; lainnya adalah nama yang kamu tambahkan di bagian Artis lain pada tab Info situs.",
    "when": "Biarkan nama situs jika album memakai nama biasamu. Pilih nama lain untuk proyek sampingan atau nama artis lain milikmu.",
    "click": "Disimpan saat menekan [[Simpan album]]. Nama terlihat di bawah judul album pada situs dan aimusiclist.com.",
    "care": "Jika memakai pilihan pertama, nama artis album mengikuti nama situs ketika diganti. Nama penyanyi terkenal tidak boleh digunakan.",
    "like": "Seperti label nama musisi yang membuat album di tokomu."
  },
  "help.albums.desc": {
    "t": "Pengantar album",
    "what": "Beberapa kalimat tentang album, ditampilkan tepat di bawah judul pada situs dan aimusiclist.com.",
    "when": "Tulis jika ingin memberi tahu pendengar tema album, cara pembuatannya, atau suasananya. Boleh dikosongkan.",
    "click": "Disimpan saat menekan [[Simpan album]]. Angka di bawah kolom menunjukkan sisa karakter.",
    "care": "Maksimal 200 karakter. Setelah 200, kamu tidak bisa mengetik lagi. Satu emoji dihitung satu karakter. Boleh memakai baris baru, tetapi hanya teks biasa (tanpa gambar atau tautan).",
    "like": "Seperti catatan singkat yang dicetak di belakang sampul rekaman."
  },
  "help.albums.pub": {
    "t": "Waktu penerbitan",
    "what": "Memilih kapan album diterbitkan: segera atau pada tanggal dan jam pilihanmu.",
    "when": "Pilih [[Sekarang]] untuk kebanyakan album. Pilih tanggal dan waktu jika ingin merencanakan hari rilis dan mengabari penggemar sebelumnya.",
    "click": "Pilihan digunakan saat menekan [[Simpan album]]. Album hanya publik jika memiliki 6–35 lagu dan semuanya berisi audio; jika tidak, disimpan privat.",
    "care": "Untuk album baru ini berlaku otomatis. Saat mengedit, sakelar publik tetap seperti sebelumnya. Kamu bisa mengubah publik atau privat lewat sakelar pada daftar album kapan pun.",
    "like": "Seperti memilih hari rilis rekaman baru: pajang hari ini atau pada tanggal yang dilingkari di kalender."
  },
  "help.albums.pub_now": {
    "t": "Sekarang",
    "what": "Album diterbitkan segera setelah disimpan.",
    "when": "Pilih jika album siap dan ingin didengar orang hari ini.",
    "click": "Setelah menekan [[Simpan album]], album baru berisi 6–35 lagu (semua punya audio) langsung publik. Dalam satu atau dua menit muncul di aimusiclist.com. Jika sebelumnya dijadwalkan, memilih Sekarang membatalkan tanggal itu.",
    "care": "Jika kurang dari 6 lagu atau ada lagu tanpa audio, album disimpan privat. Pesan setelah menyimpan menjelaskan hasilnya.",
    "like": "Seperti menaruh rekaman baru di rak pasar begitu selesai dibuat."
  },
  "help.albums.pub_at": {
    "t": "Pada tanggal dan waktu pilihan saya",
    "what": "Album menunggu lalu diterbitkan otomatis pada tanggal dan waktu yang kamu pilih.",
    "when": "Gunakan untuk merencanakan rilis, misalnya Jumat depan pukul 8 malam, sehingga penggemar tahu sebelumnya.",
    "click": "Kolom tanggal dan waktu terbuka. Waktu mengikuti zona waktu perangkat ini. Sesudah menekan [[Simpan album]], jadwal muncul di daftar. Sebelumnya album tersembunyi pada situs dan aimusiclist.com. Sekitar satu menit setelah waktu itu, album muncul di keduanya.",
    "care": "Pilih waktu setelah sekarang dan paling jauh 366 hari ke depan. Selama menunggu, lagu album tidak bisa dibuat privat. Album tetap perlu 6–35 lagu dengan audio. Pada versi PHP mungkin diperlukan hingga sekitar 5 menit.",
    "like": "Seperti toko yang menyetel alarm: ketika berbunyi, rekaman baru otomatis dipajang di etalase."
  },
  "help.albums.cover": {
    "t": "Gambar sampul",
    "what": "Gambar persegi untuk album, terlihat di situs dan di aimusiclist.com jika album publik.",
    "when": "Tambahkan jika bisa. Sampul membantu album mudah dilihat dan diingat. Ini opsional.",
    "click": "Tekan [[Pilih sampul]] untuk memilih gambar dan menyesuaikannya menjadi persegi. Sampul baru disimpan bersama album saat menekan [[Simpan album]].",
    "care": "Disimpan sebagai gambar kecil 200×200. Menghapus album hanya menghapus sampulnya, bukan lagu.",
    "like": "Seperti sampul rekaman: hal pertama yang dilihat orang di rak."
  },
  "help.albums.pick": {
    "t": "Pilih lagu (berurutan)",
    "what": "Di sini kamu menyusun lagu album. Bagian kiri (di ponsel: atas) berisi semua lagu. Bagian kanan (di ponsel: bawah) berisi lagu album dalam urutan putar.",
    "when": "Gunakan saat membuat album atau mengganti lagunya. Tetap mudah meski ada ratusan lagu.",
    "click": "Cari lagu di kiri, centang, lalu tekan [[Tambahkan pilihan →]]. Lagu ditambahkan ke akhir daftar kanan. Lagu yang sudah masuk album tidak lagi terlihat di kiri. Belum disimpan hingga menekan [[Simpan album]].",
    "care": "Maksimal 35 lagu. Satu lagu boleh berada di beberapa album; label kecil menampilkan nama album lain. Lagu bertanda 'Tidak ada audio' tidak memiliki file suara, sehingga album dengannya tidak bisa publik.",
    "like": "Bagian kiri seperti rak gudang; kanan seperti album yang sedang kamu isi satu lagu demi satu."
  },
  "help.albums.save": {
    "t": "Simpan album",
    "what": "Menyimpan sekaligus judul, artis, pengantar, waktu rilis, sampul, dan lagu album.",
    "when": "Tekan setelah selesai membuat atau mengubah album.",
    "click": "Pesan menjelaskan hasilnya: publik sekarang, dijadwalkan, atau disimpan privat karena kurang dari 6–35 lagu yang punya audio. Album lalu terlihat di daftar bawah. Album publik tiba di aimusiclist.com dalam satu atau dua menit.",
    "care": "Judul wajib. Tanggal dan waktu yang dipilih harus setelah sekarang. Beberapa perubahan bisa ditolak, misalnya jika menyisakan kurang dari 10 lagu publik di situs; pesan merah menjelaskan sebabnya.",
    "like": "Seperti membungkus rekaman jadi dan meletakkannya di rak."
  },
  "help.albums.cancel": {
    "t": "Batal",
    "what": "Menutup kotak album tanpa menyimpan.",
    "when": "Gunakan jika berubah pikiran atau ingin mengulang dari awal.",
    "click": "Kotak langsung tertutup. Semua perubahan sejak dibuka dibuang, termasuk sampul baru yang dipilih. Album tetap seperti terakhir disimpan.",
    "care": "Tidak ada pertanyaan konfirmasi. Perubahan yang belum disimpan hilang.",
    "like": "Seperti menyimpan rekaman yang belum selesai ke laci tanpa mengubah rekaman di rak."
  },
  "help.albums.new": {
    "t": "Album baru",
    "what": "Membuka kotak album kosong untuk membuat album baru.",
    "when": "Tekan jika ingin mengumpulkan beberapa lagu menjadi satu album.",
    "click": "Kotak album muncul di atas daftar. Album belum dibuat sampai kamu menekan [[Simpan album]].",
    "care": "Saat kotak album terbuka, tombol ini tersembunyi. Simpan atau batalkan dahulu.",
    "like": "Seperti mengambil sampul rekaman baru yang masih kosong."
  },
  "help.albums.list": {
    "t": "Album saya",
    "what": "Semua album yang kamu buat. Setiap album tampil di situsmu. Album dengan sakelar aktif juga tampil di aimusiclist.com, dan lagunya ikut publik.",
    "when": "Lihat untuk mengetahui album publik, mengubah, atau menghapus album.",
    "click": "Setiap baris berisi sakelar publik, judul, jumlah lagu, serta tombol [[Edit]] / [[Hapus]].",
    "care": "Album terjadwal disembunyikan di mana pun, termasuk situsmu, sampai waktu rilis. Selama album publik atau menunggu rilis, lagunya tidak bisa dibuat privat satu per satu.",
    "like": "Seperti rak album di toko. Sakelar menentukan album mana yang juga dijual di pasar besar."
  },
  "help.albums.pub_switch": {
    "t": "Publik di aimusiclist",
    "what": "Sakelar tiap baris menentukan apakah album tampil di aimusiclist.com. Album tetap ada di situsmu.",
    "when": "Aktifkan untuk album yang ingin lebih mudah ditemukan. Matikan untuk menarik album dari aimusiclist.com.",
    "click": "Langsung disimpan. Aktif: album beserta seluruh lagunya muncul di aimusiclist.com dalam satu atau dua menit. Mati: album hilang dari sana. Lagu yang kamu terbitkan sendiri tetap publik.",
    "care": "Sakelar abu-abu berarti album perlu 6–35 lagu dan semuanya punya audio; tekan untuk melihat sebabnya. Mematikannya bisa ditolak jika jumlah lagu publik situs menjadi kurang dari 10.",
    "like": "Kamu memilih rekaman dari tokomu yang juga akan dipajang di pasar besar."
  },
  "help.albums.col_title": {
    "t": "Judul album",
    "what": "Kolom ini menampilkan judul dan nama artis di bawahnya. Kadang muncul label kecil di sampingnya.",
    "when": "Lihat untuk memeriksa status album sekilas.",
    "click": "'Akan publik …' berarti album menunggu tanggal dan waktu yang kamu tentukan. 'Perlu 6–35 lagu dengan audio' berarti album belum bisa publik: tambah atau kurangi lagu, atau unggah audio yang kurang.",
    "like": "Seperti label pada sisi setiap album di rak."
  },
  "help.albums.col_count": {
    "t": "Jumlah lagu",
    "what": "Jumlah lagu dalam setiap album.",
    "when": "Lihat apakah album memenuhi syarat publik, yaitu 6 sampai 35 lagu.",
    "click": "Jika kurang dari 6, tekan [[Edit]] lalu tambahkan lagu. Album maksimal memuat 35 lagu.",
    "like": "Seperti menghitung daftar lagu di belakang sampul album."
  },
  "help.albums.row_buttons": {
    "t": "Edit / Hapus",
    "what": "Tombol di ujung setiap baris. [[Edit]] membuka album untuk diubah. [[Hapus]] menghapus album.",
    "when": "Gunakan Edit untuk mengganti lagu, urutan, judul, sampul, atau waktu rilis. Gunakan Hapus jika album tidak diperlukan lagi.",
    "click": "Edit membuka kotak album di atas. Hapus meminta konfirmasi, lalu menghapus album dan sampulnya. Lagu tetap ada di situs.",
    "care": "Penghapusan tidak bisa dibatalkan. Menghapus album publik bisa ditolak jika jumlah lagu publik situs tinggal kurang dari 10.",
    "like": "Edit seperti mengambil album untuk diperbaiki. Hapus seperti membuang sampul dan daftar lagu, sementara lagu kembali ke gudang."
  },
  "help.albums.pick_search": {
    "t": "Cari judul lagu",
    "what": "Ketik sebagian judul untuk menampilkan lagu yang cocok di sebelah kiri.",
    "when": "Gunakan jika ada banyak lagu dan kamu tahu nama yang dicari.",
    "click": "Daftar berubah saat mengetik. Huruf besar atau kecil tidak penting. Kosongkan kolom untuk melihat semua lagu.",
    "care": "Pencarian hanya memeriksa judul, bukan artis atau lirik.",
    "like": "Seperti bertanya kepada penjaga gudang: 'Di mana lagu yang berjudul …?'"
  },
  "help.albums.pick_genre": {
    "t": "Genre",
    "what": "Menampilkan hanya lagu dengan genre utama tertentu di kiri. Daftar berisi genre utama yang kamu gunakan.",
    "when": "Gunakan saat membuat album dengan satu gaya, misalnya hanya R&B.",
    "click": "Daftar kiri langsung berubah. Lagu muncul jika salah satu genrenya sesuai atau merupakan bagian genre tersebut. Pilih Semua genre untuk melihat semuanya.",
    "care": "Ini hanya membantu mencari; genre lagu tidak diubah.",
    "like": "Seperti berjalan ke satu lorong gudang, yaitu lorong R&B."
  },
  "help.albums.pick_sort": {
    "t": "Urutan",
    "what": "Mengatur urutan lagu di kiri: unggahan terbaru, terlama, atau berdasarkan judul.",
    "when": "Gunakan Terbaru untuk mencari lagu yang baru dibuat, atau Judul A–Z untuk mencari nama.",
    "click": "Daftar kiri langsung diurutkan ulang. Urutan di dalam album tidak berubah karena diatur di sisi kanan.",
    "like": "Seperti menyusun rak gudang berdasarkan tanggal atau nama."
  },
  "help.albums.pick_all": {
    "t": "Pilih semua yang terlihat",
    "what": "Mencentang semua lagu yang sesuai dengan pencarian dan genre sekarang. Angka menunjukkan jumlahnya.",
    "when": "Gunakan setelah menyaring daftar, misalnya untuk memilih semua lagu satu genre sekaligus.",
    "click": "Semua lagu yang cocok dicentang, termasuk yang ada lebih bawah. Tekan lagi (sekarang bertuliskan Hapus pilihan) untuk membatalkannya. Lagu belum ditambahkan; tekan [[Tambahkan pilihan →]] berikutnya.",
    "care": "Album maksimal 35 lagu. Jika kamu memilih lebih banyak, hanya lagu pertama yang masih muat yang ditambahkan.",
    "like": "Seperti berkata 'semua isi rak ini, ya' daripada menunjuk satu per satu."
  },
  "help.albums.pick_add": {
    "t": "Tambahkan pilihan →",
    "what": "Memasukkan lagu yang dicentang ke album. Angka menunjukkan banyaknya yang dipilih.",
    "when": "Tekan setelah mencentang lagu di sebelah kiri.",
    "click": "Lagu dipindahkan ke akhir daftar kanan menurut urutan pada daftar kiri. Lagu hilang dari daftar kiri, dan kamu bisa mengubah urutannya di kanan. Album baru tersimpan saat menekan [[Simpan album]].",
    "care": "Tombol abu-abu jika belum ada pilihan atau album sudah berisi 35 lagu. Jika tidak semuanya muat, pesan menunjukkan jumlah yang dilewati.",
    "like": "Seperti membawa lagu pilihan dari rak gudang ke dalam album."
  },
  "help.albums.pick_recent": {
    "t": "Tambahkan lagu terbaru",
    "what": "Menambahkan lagu paling baru diunggah dalam satu langkah. Kamu memilih jumlahnya di kotak angka kecil (1–35, awalnya 10).",
    "when": "Gunakan setelah mengunggah satu kumpulan lagu baru dan ingin menjadikannya album.",
    "click": "Lagu terbaru dengan audio yang belum masuk album ditambahkan ke akhir daftar kanan, yang terbaru dulu. Pencarian dan genre di kiri tidak berpengaruh. Belum disimpan sampai [[Simpan album]].",
    "care": "Lagu tanpa audio dilewati. Album tetap maksimal 35 lagu. Tombol menjadi abu-abu jika album penuh.",
    "like": "Seperti berkata 'ambilkan 10 rekaman terakhir yang masuk gudang'."
  },
  "help.albums.picked": {
    "t": "Di dalam album ini",
    "what": "Daftar lagu album menurut urutan putar. Di sampingnya terlihat jumlah lagu. Angka merah jika jumlahnya bukan antara 6 dan 35.",
    "when": "Gunakan untuk memeriksa lagu dan menentukan urutan.",
    "click": "Tahan ⠿ lalu seret lagu ke atas atau bawah, atau gunakan ▲ ▼. ✕ mengeluarkan lagu dari album (tetap ada di situs). Perubahan disimpan saat menekan [[Simpan album]].",
    "care": "Album publik memerlukan 6–35 lagu dengan file audio. Lagu 'Tidak ada audio' menghalangi publikasi. Album yang sudah publik tidak bisa disimpan jika kurang dari 6 lagu.",
    "like": "Seperti daftar lagu di belakang album: lagu 1, lagu 2, lagu 3…"
  },
  "help.albums.pick_clear": {
    "t": "Keluarkan semua",
    "what": "Mengeluarkan seluruh lagu dari album sekaligus agar kamu bisa memilih ulang.",
    "when": "Gunakan jika ingin menyusun daftar lagu dari awal.",
    "click": "Sistem meminta konfirmasi. Setelah itu daftar kanan kosong dan lagu kembali ke kiri. Belum disimpan sampai [[Simpan album]]; tekan [[Batal]] untuk menjaga album seperti semula.",
    "care": "Lagunya sendiri tidak dihapus dan tetap ada di situsmu.",
    "like": "Seperti mengeluarkan semua lagu dari album lalu mengembalikannya ke rak gudang."
  },
  "help.albums.cover_pick": {
    "t": "Pilih sampul",
    "what": "Membuka gambar di perangkatmu untuk memilih sampul, lalu jendela kecil membantu menentukan bagian gambar yang digunakan.",
    "when": "Tekan untuk menambah atau mengganti sampul.",
    "click": "Setelah menekan [[Simpan gambar]], sampul baru terlihat di sini dengan tulisan 'Sampul baru'. Belum tersimpan sampai menekan [[Simpan album]]. [[Batal]] di sampingnya membuang gambar baru.",
    "care": "Kamu boleh memilih JPG, PNG, WebP, atau GIF maksimal 2 MB. Hanya salinan kecil yang diunggah, bukan gambar asli.",
    "like": "Seperti memilih foto dan memangkasnya agar pas pada sampul album."
  },
  "help.albums.cover_delete": {
    "t": "Hapus sampul",
    "what": "Menghapus gambar sampul dari album. Album dan lagunya tetap ada.",
    "when": "Gunakan jika tidak ingin memakai gambar itu lagi, misalnya sambil membuat sampul baru.",
    "click": "Sistem meminta konfirmasi. Jika disetujui, sampul langsung dihapus tanpa menekan [[Simpan album]]. Pengunjung kemudian melihat kotak kosong.",
    "care": "Tidak dapat dibatalkan. Untuk mengembalikan sampul, pilih gambar lagi.",
    "like": "Seperti melepas sampul dari album, tetapi rekaman di dalamnya tetap ada."
  },
  "help.skins.use": {
    "t": "Gunakan tema ini",
    "what": "Memasang tema yang sudah terinstal di situsmu. Tema sebelumnya tetap diingat.",
    "when": "Gunakan saat ingin pengunjung melihat tema ini.",
    "click": "Langsung disimpan. Pengunjung melihat tampilan baru dalam sekitar 30 detik. Untuk membatalkan, tekan [[Kembali ke tema sebelumnya]] atau pilih tema lain.",
    "care": "Tema yang sedang aktif tidak memiliki tombol ini karena sudah digunakan. Lagu dan menu tidak berubah.",
    "like": "Seperti mengambil pakaian dari lemari lalu memakainya pada toko."
  },
  "help.skins.update": {
    "t": "Perbarui",
    "what": "Pembuat tema galeri yang sudah kamu pasang mengeluarkan versi baru. Tombol ini mengambilnya dan muncul di samping label **Versi baru**.",
    "when": "Gunakan jika ingin desain terbaru beserta perbaikannya.",
    "click": "Versi baru diperiksa lalu menggantikan yang lama. Tema aktif situs tidak berubah. Jika tema ini sedang dipakai, pengunjung melihat versi baru dalam sekitar 30 detik.",
    "care": "Ini hanya pembaruan desain tema, terpisah dari pembaruan program situs. Tema buatan sendiri tidak memiliki tombol ini.",
    "like": "Seperti penjahit yang mengirim pakaian versi lebih pas."
  },
  "help.skins.download": {
    "t": "Unduh (untuk diedit)",
    "what": "Menyimpan salinan tema bawaan (Terang atau Gelap) ke komputer agar kamu bisa menjadikannya dasar tema sendiri.",
    "when": "Gunakan saat ingin membuat tema. Berikan salinan kepada AI gratis (ChatGPT atau Claude) untuk mengubah warna atau tata letak.",
    "click": "Browser menyimpan file tema. Situsmu tidak berubah.",
    "care": "Tema bawaan tidak bisa diubah langsung. Unggah salinan edit dengan nama baru lewat **Unggah tema**, lalu tekan [[Gunakan tema ini]].",
    "like": "Seperti membawa pulang pola jahit agar bisa membuat pakaian sendiri."
  },
  "help.skins.delete": {
    "t": "Hapus",
    "what": "Menghapus tema yang kamu unggah atau pasang dari galeri. Tema bawaan (Terang, Gelap) tidak bisa dihapus, sehingga menampilkan [[Unduh (untuk diedit)]] sebagai gantinya.",
    "when": "Gunakan jika tema tidak diperlukan atau sudah mencapai 20 tema dan butuh tempat.",
    "click": "Konfirmasi diminta, kemudian tema langsung hilang. Jika tema itu sedang digunakan, situs kembali ke Terang.",
    "care": "Tidak bisa dibatalkan. Tema galeri bisa dipasang ulang dari **Jelajahi**. Tema unggahan sendiri hilang kecuali kamu menyimpan filenya.",
    "like": "Seperti membuang pakaian dari lemari; simpan pola buatanmu jika mungkin diperlukan lagi."
  },
  "help.skins.revert": {
    "t": "Kembali ke tema sebelumnya",
    "what": "Mengembalikan tema yang digunakan tepat sebelumnya. Nama tema terlihat pada tombol.",
    "when": "Gunakan setelah mencoba tema baru tetapi lebih suka yang lama.",
    "click": "Langsung disimpan dan pengunjung melihatnya dalam sekitar 30 detik. Tema yang kamu tinggalkan menjadi tema sebelumnya, jadi menekan lagi akan bertukar kembali.",
    "care": "Hanya satu langkah sebelumnya yang diingat. Jika tema sebelumnya dihapus, tombol ini hilang.",
    "like": "Seperti melepas pakaian baru dan memakai pakaian kemarin."
  },
  "help.skins.title": {
    "t": "Tema",
    "what": "Tema adalah pakaian situsmu: warna, huruf, dan tata letak. Mengubah tema tidak pernah mengubah lagu, album, atau pengaturan.",
    "when": "Buka jika ingin mengganti tampilan atau ada versi baru tema.",
    "click": "Ini hanya judul. Tombol di bawah yang bekerja. Situs selalu memiliki dua tema bawaan, **Terang** dan **Gelap**, dan kamu bisa menambahkan hingga 20 lagi.",
    "care": "Pengunjung melihat tema baru dalam sekitar 30 detik. Jika tema aktif dihapus, situs kembali ke Terang.",
    "like": "Seperti mengganti cat dan rak toko; rekaman di rak tetap sama."
  },
  "help.skins.view": {
    "t": "Terpasang / Jelajahi",
    "what": "Dua tampilan tab Tema. **Terpasang** berisi tema yang sudah dimiliki situs. **Jelajahi** menampilkan galeri untuk mencoba dan menambahkan tema buatan orang lain.",
    "when": "Gunakan Terpasang untuk berpindah, memperbarui, menghapus, atau mengunggah tema sendiri. Gunakan Jelajahi untuk menemukan tampilan baru.",
    "click": "Hanya mengganti tampilan pengaturan. Situsmu tidak berubah. Saat Jelajahi dibuka pertama kali, daftar tema dimuat.",
    "like": "Terpasang seperti lemari pakaianmu; Jelajahi seperti toko pakaian sebelah."
  },
  "help.skins.upload": {
    "t": "Unggah tema",
    "what": "Menambahkan tema buatanmu sendiri. Tema berupa satu file halaman web (.html) yang mengikuti panduan. AI gratis bisa membuatnya.",
    "when": "Gunakan jika ingin desain yang tidak ada di galeri. Kamu bisa mulai dari tema bawaan melalui [[Unduh (untuk diedit)]].",
    "click": "Isi nama dan file, lalu tekan [[Unggah tema]]. Tema masuk daftar tetapi belum aktif. Tekan [[Gunakan tema ini]] untuk memakainya.",
    "care": "File diperiksa terlebih dahulu. Ukuran maksimal 100 KB; tempat menu, isi, dan pemutar harus ada sekali saja; baris **Powered by aimusiclist.com** tidak boleh disembunyikan. Kode bergerak dan gambar dari situs lain tidak diizinkan.",
    "like": "Seperti menjahit pakaian sendiri lalu menggantungnya di lemari."
  },
  "help.skins.upload_name": {
    "t": "Nama tema",
    "what": "Nama tema di daftar. Gunakan 1–32 huruf kecil (a–z), angka, - atau _.",
    "when": "Isi sebelum mengunggah. Pilih nama singkat yang mudah dikenali, misalnya my-blue.",
    "click": "Belum disimpan sampai menekan [[Unggah tema]].",
    "care": "Huruf kapital dan spasi tidak boleh. **light** dan **dark** sudah dipakai tema bawaan. Nama yang sama akan menggantikan tema lama. Jika tema aktif diganti, pengunjung melihatnya dalam sekitar 30 detik.",
    "like": "Seperti label nama yang dijahit pada pakaian."
  },
  "help.skins.upload_file": {
    "t": "File tema",
    "what": "File tema di komputermu, satu file .html maksimal 100 KB.",
    "when": "Pilih setelah membuat atau mengedit tema, misalnya dengan AI gratis.",
    "click": "Ini hanya memilih file. Belum dikirim sampai menekan [[Unggah tema]].",
    "care": "Hanya satu file. Gambar dalam tema tidak boleh berasal dari situs lain. Jika terlalu besar, minta AI mempersingkatnya.",
    "like": "Seperti mengambil pakaian jadi sebelum menggantungnya di lemari."
  },
  "help.skins.upload_btn": {
    "t": "Unggah tema",
    "what": "Mengirim file tema dan memeriksanya.",
    "when": "Setelah mengisi nama dan memilih file.",
    "click": "Jika ada masalah, pesan merah menunjukkan yang perlu diperbaiki dan tidak ada yang disimpan. Jika lolos, muncul **Tersimpan** dan tema masuk daftar. Tema belum aktif sampai kamu menekan [[Gunakan tema ini]].",
    "care": "Maksimal 20 tema selain Terang dan Gelap. Hapus satu dulu jika penuh. Mengunggah memakai nama tema galeri akan menjadikannya tema pribadi tanpa pembaruan berikutnya.",
    "like": "Seperti petugas toko memeriksa pakaian sebelum dimasukkan ke lemari."
  },
  "help.skins.gallery": {
    "t": "Galeri tema",
    "what": "Rak bersama berisi tema siap pakai. Tiap kartu menampilkan gambar, pembuat, terang atau gelap, serta versi. Tema terbaru di atas.",
    "when": "Gunakan untuk mendapat tampilan baru dengan satu klik tanpa membuat sendiri.",
    "click": "Tekan gambar atau [[Pratinjau]] untuk mencoba tema pada situsmu. Tekan [[Terapkan]] untuk menambah dan memakainya.",
    "care": "Jika kartu menampilkan **Perbarui situsmu untuk memakai tema ini.**, kamu harus memperbarui situs dahulu.",
    "like": "Seperti toko pakaian tempat kamu bisa mencoba pakaian pada toko sendiri sebelum membawanya pulang."
  },
  "help.skins.gal_reload": {
    "t": "Segarkan",
    "what": "Memuat ulang daftar galeri tema.",
    "when": "Gunakan jika mungkin ada tema baru atau daftar gagal dimuat.",
    "click": "Daftar segera dimuat ulang. Versi baru tema terpasang juga diperiksa. Situsmu tidak berubah.",
    "care": "Jika muncul **Daftar tema belum bisa dimuat sekarang.**, tunggu sebentar lalu tekan [[Coba lagi]].",
    "like": "Seperti meminta katalog terbaru di toko pakaian."
  },
  "help.skins.gal_filter": {
    "t": "Penyaring tema",
    "what": "Tombol untuk menampilkan beberapa tema saja: **Semua**, **Terang** (latar cerah), **Gelap** (latar gelap), dan #kata yang menggambarkan gaya.",
    "when": "Gunakan saat banyak pilihan tema dan kamu mencari suasana tertentu.",
    "click": "Hanya kartu yang terlihat berubah. Tekan **Semua** untuk melihat seluruhnya lagi. Tidak ada yang disimpan.",
    "care": "#kata hanya muncul jika dipakai setidaknya dua tema. Jika tidak cocok, muncul **Tidak ada tema yang cocok dengan filter ini.**",
    "like": "Seperti penunjuk di toko pakaian: jaket ke sini, kemeja ke sana."
  },
  "help.skins.gal_preview": {
    "t": "Pratinjau",
    "what": "Menampilkan situsmu dengan lagu dan profil memakai tema ini. Kamu juga bisa menekan gambarnya.",
    "when": "Gunakan sebelum menerapkan tema untuk melihat tampilannya di situsmu.",
    "click": "Jendela terbuka tanpa menyimpan apa pun, dan pengunjung tidak melihatnya. Tutup dengan [[Tutup]] atau Esc. Tema bisa diterapkan dari jendela itu.",
    "care": "Lagu tidak diputar dan iklan tidak muncul dalam pratinjau. Jika kartu menampilkan **Perbarui situsmu untuk memakai tema ini.**, pratinjau baru tersedia setelah situs diperbarui.",
    "like": "Seperti ruang ganti: coba pakaian, lalu boleh dikembalikan."
  },
  "help.skins.gal_apply": {
    "t": "Terapkan / Terapkan tema ini",
    "what": "Menambahkan tema galeri dan langsung memasangnya di situs. Tombol ada di kartu dan jendela pratinjau.",
    "when": "Gunakan ketika menyukai tema dan ingin pengunjung melihatnya.",
    "click": "Tema diperiksa, ditambahkan ke **Terpasang**, lalu langsung aktif. Pengunjung melihatnya dalam sekitar 30 detik. Untuk kembali, tekan [[Kembali ke tema sebelumnya]].",
    "care": "Maksimal 20 tema selain Terang dan Gelap. Jika ada tema pribadi bernama sama, kamu diminta konfirmasi sebelum diganti. Tema bertanda **Perbarui situsmu untuk memakai tema ini.** belum bisa diterapkan.",
    "like": "Seperti membeli pakaian lalu langsung memakainya keluar toko."
  },
  "help.skins.pv_mode": {
    "t": "Desktop / Ponsel",
    "what": "Mengubah ukuran pratinjau. **Desktop** menunjukkan layar komputer lebar, **Ponsel** menunjukkan layar ponsel sempit.",
    "when": "Periksa keduanya sebelum menerapkan karena banyak pendengar menggunakan ponsel.",
    "click": "Hanya ukuran pratinjau yang berubah. Tidak ada yang disimpan.",
    "like": "Seperti melihat etalase toko dari jalan lalu dari dekat."
  },
  "help.site.artist_del": {
    "t": "Hapus",
    "what": "Mengeluarkan nama ini dari daftar artis lain.",
    "when": "Gunakan jika tidak ingin memilih nama ini lagi untuk lagu baru.",
    "click": "Kamu diminta konfirmasi, lalu langsung disimpan. Lagu yang sudah memakai nama ini tetap sama. Hanya pilihan untuk lagu baru yang hilang.",
    "care": "Untuk mengubah artis lagu lama, edit lagunya. Nama yang sama boleh ditambahkan kembali nanti.",
    "like": "Seperti mengeluarkan label nama dari laci. Lagu yang sudah memakainya tetap memakai label itu."
  },
  "help.site.info": {
    "t": "Info situs",
    "what": "Kartu ini memuat informasi dasar situs: nama, nama artis, bahasa utama, deskripsi singkat, negara, dan teks bawah.",
    "when": "Isi sekali di awal. Kembali saat ingin mengganti nama atau cara situs memperkenalkan diri.",
    "click": "Belum disimpan saat mengetik. Tekan [[Simpan info situs]] di bawah kartu untuk menyimpan semuanya sekaligus. Situs langsung berubah dan aimusiclist.com menerima nama serta deskripsi baru sesaat kemudian.",
    "care": "Kartu lain di tab ini (SNS, jumlah putar, suka, gambar …) tersimpan sendiri. Hanya kartu ini perlu tombol simpan. Jika keluar dari tab tanpa menekannya, ketikanmu hilang.",
    "like": "Seperti formulir pendaftaran toko: papan nama, perkenalan singkat, dan lokasi toko."
  },
  "help.site.name": {
    "t": "Nama situs",
    "what": "Nama situs sepanjang 1–40 karakter. Ini judul besar pada situs, juga terlihat di bawah lagu pada aimusiclist.com dan bisa diklik untuk mengunjungimu.",
    "when": "Pilih saat memulai. Ganti hanya jika benar-benar ingin nama baru karena pendengar akan mengingat nama itu.",
    "click": "Disimpan saat menekan [[Simpan info situs]]. Jika nama artis sama dengan nama situs lama, nama artis ikut berubah.",
    "care": "Nama penyanyi atau grup terkenal, termasuk yang mirip, tidak boleh dipakai. Penyimpanan ditolak jika cocok dengan nama yang kami kenali. Jika nama terlanjur lolos lalu ditemukan, situs dapat dihapus dari aimusiclist.",
    "like": "Seperti papan nama toko yang dibaca pengunjung pasar besar untuk menemukan tempatmu."
  },
  "help.site.artist": {
    "t": "Nama artis",
    "what": "Nama orang atau grup pembuat musik di situs ini. Boleh sama atau berbeda dari nama situs.",
    "when": "Isi jika nama musikmu berbeda dari situs, misalnya situs bernama My Music Room tetapi kamu bernyanyi sebagai Luna.",
    "click": "Disimpan saat menekan [[Simpan info situs]]. Jika berbeda, pengunjung melihatnya di bawah nama situs pada halaman depan. aimusiclist.com juga menerimanya dalam satu atau dua menit.",
    "care": "Maksimal 40 karakter. Nama penyanyi atau grup terkenal maupun yang mirip tidak boleh dipakai. Jika mengganti nama situs dan kolom ini masih memakai nama lama, keduanya berubah bersama.",
    "like": "Papan toko menunjukkan nama toko, sedangkan ini label nama musisi yang bekerja di dalamnya."
  },
  "help.site.lang": {
    "t": "Bahasa utama situs",
    "what": "Bahasa yang digunakan situs jika tidak mengetahui bahasa yang diinginkan pengunjung. aimusiclist.com juga mendapat informasi bahasa ini.",
    "when": "Pilih bahasa yang paling banyak dibaca pendengar atau bahasa yang kamu pakai dalam deskripsi.",
    "click": "Disimpan saat menekan [[Simpan info situs]]. Setiap pengunjung tetap melihat bahasa browser atau pilihan sendiri jika tersedia. Jika tidak, bahasa ini yang dipakai.",
    "care": "Tidak mengubah bahasa halaman admin, dan tidak menerjemahkan judul atau deskripsi lagu yang kamu tulis.",
    "like": "Seperti bahasa pada papan sambutan toko. Tamu dari bahasa lain masih bisa meminta menu dalam bahasa mereka."
  },
  "help.site.desc": {
    "t": "Deskripsi singkat",
    "what": "Perkenalan pendek tentang kamu dan musikmu, maksimal 200 karakter. Muncul pada situs dan dikirim ke aimusiclist.com bersama nama situs.",
    "when": "Tulis satu atau dua kalimat mengenai musik yang kamu buat. Boleh diubah kapan saja.",
    "click": "Disimpan saat menekan [[Simpan info situs]]. aimusiclist.com menerima teks baru sesaat kemudian. Kosongkan jika tidak ingin deskripsi.",
    "care": "Buat singkat dan sederhana. Jangan memakai nama penyanyi terkenal untuk menggambarkan dirimu, misalnya \"[nama terkenal] yang baru\".",
    "like": "Seperti kartu kecil di bawah papan nama yang menjelaskan barang jualan toko."
  },
  "help.site.footer": {
    "t": "Teks bawah",
    "what": "Satu baris teks pada bagian paling bawah setiap halaman situs, maksimal 200 karakter. Hanya teks, tanpa gambar atau tautan.",
    "when": "Gunakan untuk catatan pendek seperti hak cipta atau terima kasih.",
    "click": "Disimpan saat menekan [[Simpan info situs]] dan langsung tampil. Jika kosong, situs menampilkan \"© tahun ini + nama situs\". Jika mengetik {year}, sistem menggantinya otomatis menjadi tahun sekarang.",
    "care": "Baris baru dijadikan spasi. Tulisan \"Powered by aimusiclist.com\" di sebelahnya selalu ada dan tidak bisa dihapus lewat kolom ini.",
    "like": "Seperti tulisan kecil di bagian bawah struk toko."
  },
  "help.site.save": {
    "t": "Simpan info situs",
    "what": "Menyimpan sekaligus nama, bahasa, deskripsi, negara, teks bawah, dan informasi tambahan pada kartu Info situs.",
    "when": "Tekan setelah mengubah isi kartu.",
    "click": "Perubahan langsung terlihat di situs. aimusiclist.com menerima nama dan deskripsi baru sesaat kemudian. Jika salah, pesan merah muncul di samping tombol dan tidak ada yang tersimpan.",
    "care": "Penyimpanan ditolak jika nama yang diganti cocok dengan musisi terkenal. Pilih nama lain lalu tekan lagi.",
    "like": "Seperti stempel pada formulir pendaftaran toko; sebelum distempel, perubahan masih berupa rancangan."
  },
  "help.site.artists": {
    "t": "Artis lain",
    "what": "Daftar nama artis tambahan yang bisa dipilih untuk sebuah lagu. Jika tidak memilih, lagu memakai nama situs sebagai artis.",
    "when": "Gunakan jika satu situs memiliki lagu dengan beberapa nama artis, misalnya duo atau proyek sampingan.",
    "click": "Nama tambahan muncul sebagai pilihan artis saat unggah atau edit lagu maupun album. Artis lagu ditampilkan di situs dan aimusiclist.com.",
    "care": "Maksimal 20 nama. Jika penuh, tombol Tambah menjadi abu-abu. Nama penyanyi terkenal tidak boleh dipakai.",
    "like": "Satu toko dengan beberapa label nama di laci. Setiap lagu memakai label pembuatnya."
  },
  "help.site.artist_add": {
    "t": "Tambah",
    "what": "Memasukkan nama yang kamu ketik ke daftar artis lain.",
    "when": "Ketik nama artis baru di kolom kiri, lalu tekan.",
    "click": "Langsung disimpan. Mulai sekarang nama ini bisa dipilih saat unggah atau edit lagu.",
    "care": "Maksimal 60 karakter. Nama yang sudah ada atau sama dengan nama situs tidak ditambahkan. Nama penyanyi atau grup terkenal ditolak.",
    "like": "Seperti membuat label nama baru dan menyimpannya dalam laci."
  },
  "help.site.account": {
    "t": "Akun admin",
    "what": "Email dan kata sandi untuk masuk ke halaman admin ini. Baris atas menunjukkan email yang digunakan sekarang.",
    "when": "Gunakan untuk mengganti email masuk atau kata sandi.",
    "click": "Belum ada perubahan sampai kamu mengisi kolom, memasukkan kata sandi sekarang, dan menekan [[Simpan akun]].",
    "care": "Pada situs meshmelo, email hanya bisa diganti dari akun meshmelo, sehingga kolom email tidak muncul di sini.",
    "like": "Seperti kunci pintu belakang toko yang hanya boleh kamu miliki."
  },
  "help.site.account_email": {
    "t": "Email baru (opsional)",
    "what": "Email baru untuk masuk. Kosongkan agar tetap memakai email lama.",
    "when": "Gunakan saat berhenti memakai email lama atau ingin masuk dengan alamat berbeda.",
    "click": "Berubah hanya setelah memasukkan kata sandi sekarang dan menekan [[Simpan akun]]. Saat masuk berikutnya, gunakan email baru.",
    "care": "Periksa ejaan dengan cermat. Jika salah, masuk akan sulit. Kolom ini tidak tampil di situs meshmelo.",
    "like": "Seperti mengganti nama pada kunci pintu belakang."
  },
  "help.site.account_pw": {
    "t": "Kata sandi baru (opsional)",
    "what": "Kata sandi baru untuk halaman admin. Kosongkan jika ingin mempertahankan yang lama.",
    "when": "Gunakan jika seseorang mungkin mengetahui kata sandimu atau kamu ingin menggantinya.",
    "click": "Berubah setelah mengetiknya lagi di kolom berikutnya, memasukkan kata sandi sekarang, lalu menekan [[Simpan akun]]. Perangkat lain keluar, tetapi browser ini tetap masuk.",
    "care": "Minimal 6 karakter. Catat di tempat aman. Pada situs meshmelo, akun meshmelo mendapat kata sandi baru yang sama.",
    "like": "Seperti mengganti kunci pintu belakang. Salinan kunci lama tidak bekerja lagi."
  },
  "help.site.account_pw2": {
    "t": "Ulangi kata sandi baru",
    "what": "Ketik kata sandi baru yang sama sekali lagi.",
    "when": "Gunakan setiap kali mengisi kolom kata sandi baru.",
    "click": "Saat menekan [[Simpan akun]], kedua kolom dibandingkan. Jika berbeda, tidak ada yang tersimpan dan pesan muncul.",
    "care": "Ini mencegah salah ketik. Jika lupa apa yang diketik, kosongkan kedua kolom lalu isi perlahan lagi.",
    "like": "Seperti mencoba kunci baru sekali sebelum pulang."
  },
  "help.site.account_cur": {
    "t": "Kata sandi sekarang (wajib untuk perubahan)",
    "what": "Kata sandi yang dipakai sekarang untuk membuktikan bahwa benar kamu yang ingin mengganti email atau sandi.",
    "when": "Selalu isi saat mengubah email atau kata sandi.",
    "click": "Mengetiknya saja tidak mengubah apa pun. Diperiksa setelah menekan [[Simpan akun]].",
    "care": "Setelah lima kali salah, perubahan diblokir selama 15 menit. Jika lupa, buka [[Lupa kata sandi?]] di bawah.",
    "like": "Seperti menunjukkan kunci lama sebelum tukang kunci membuat yang baru."
  },
  "help.site.account_save": {
    "t": "Simpan akun",
    "what": "Menyimpan email baru dan/atau kata sandi baru yang kamu masukkan.",
    "when": "Tekan setelah mengisi hal yang ingin diganti dan kata sandi sekarang.",
    "click": "Langsung tersimpan. Kata sandi baru mengeluarkan perangkat lain, tetapi tidak browser ini. Jika kedua kolom baru kosong, tidak terjadi apa-apa.",
    "care": "Kunci penggunaan tidak disimpan di sini; ada tombol [[Simpan kunci]] tersendiri di bawah.",
    "like": "Seperti menyerahkan kunci baru ke tukang kunci dan berkata: ya, ganti kuncinya sekarang."
  },
  "help.site.forgot": {
    "t": "Lupa kata sandi?",
    "what": "Langkah untuk kembali masuk ke halaman admin jika lupa kata sandi. Tekan judul untuk membuka petunjuk.",
    "when": "Gunakan saat tidak bisa masuk atau kolom kata sandi saat ini terus mengatakan salah.",
    "click": "Membukanya tidak mengubah apa pun, hanya memperlihatkan langkah. Caranya berbeda menurut jenis situs: lewat Cloudflare, pengelola file hosting, atau email di meshmelo.",
    "care": "Ikuti langkah dengan tepat dan hapus hanya yang disebut. Lagu, album, dan sambungan aimusiclist.com tetap seperti semula.",
    "like": "Seperti petunjuk kunci cadangan yang ditempel di dalam toko untuk saat kamu kehilangan kunci."
  },
  "help.site.token_open": {
    "t": "Buat di Cloudflare",
    "what": "Membuka halaman Cloudflare untuk membuat kunci penggunaan di tab baru. Sebagian besar kolom sudah diisi.",
    "when": "Gunakan pada langkah pertama jika belum memiliki kunci penggunaan.",
    "click": "Cloudflare membuka [[Create Token]]. Masuk jika diminta. Belum ada yang disimpan di sini sampai kamu kembali, menempel kunci, dan menekan [[Simpan kunci]].",
    "care": "Cloudflare menampilkan kunci hanya sekali. Langsung tekan [[Copy]]. Jika baris izin kosong, tambahkan dua izin sesuai petunjuk.",
    "like": "Seperti pergi ke toko kunci membawa catatan jenis kunci yang diperlukan."
  },
  "help.site.token": {
    "t": "Lihat penggunaan (opsional)",
    "what": "Tempat menyimpan kunci penggunaan Cloudflare. Dengan kunci itu, halaman ini dapat menampilkan penggunaan jatah gratis Cloudflare di atas.",
    "when": "Gunakan jika ingin memeriksa penggunaan jatah gratis, seperti ruang penyimpanan dan pemutaran.",
    "click": "Setelah kunci disimpan, kotak penggunaan di bagian atas langsung terisi. Menyimpan kunci tidak membuatmu keluar.",
    "care": "Buat kunci pada akun Cloudflare yang sama dengan tempat lagumu disimpan. Kunci dari akun lain tidak dapat membaca angkanya. Tanpa kunci, situs tetap bekerja; hanya angka penggunaannya tidak terlihat.",
    "like": "Seperti kunci untuk membaca meteran listrik. Kamu bisa melihat angka, tidak lebih."
  },
  "help.site.token_change": {
    "t": "Ubah",
    "what": "Kunci sudah tersimpan. Hanya bagian awal dan akhirnya ditampilkan agar orang tidak bisa menyalinnya. Tombol ini untuk memasukkan kunci lain.",
    "when": "Gunakan jika angka penggunaan hilang, kunci dihapus di Cloudflare, atau lagu dipindahkan ke akun Cloudflare lain.",
    "click": "Kolom kunci terbuka. Kunci lama tetap bekerja sampai kunci baru disimpan. Tekan [[Batal]] untuk mempertahankan kunci lama.",
    "care": "Jika tulisan merah mengatakan penyimpanan lagumu ada di akun lain, buat kunci baru pada akun tersebut.",
    "like": "Seperti mengganti kunci pembaca meteran. Sebelum menyerahkan yang baru, kunci lama tetap bekerja."
  },
  "help.site.token_input": {
    "t": "Kunci penggunaan",
    "what": "Kolom untuk menempel kunci yang disalin dari Cloudflare. Karakternya disembunyikan saat ditempel.",
    "when": "Gunakan segera setelah membuat kunci di Cloudflare dan menekan [[Copy]].",
    "click": "Menempel saja belum menyimpan apa pun. Tekan [[Simpan kunci]] di sampingnya.",
    "care": "Tempel seluruh kunci tanpa spasi. Kunci hanya dapat membaca angka dan nama akun, tidak bisa mengubah atau menghapus apa pun. Tetap jangan bagikan kepada orang lain.",
    "like": "Seperti lubang tempat memasukkan kunci pembaca meteran."
  },
  "help.site.token_save": {
    "t": "Simpan kunci",
    "what": "Memeriksa kunci lewat Cloudflare lalu menyimpannya.",
    "when": "Tekan setelah menempel kunci penggunaan di kolom.",
    "click": "Kunci diuji lebih dahulu. Jika berfungsi, kunci disimpan dan angka penggunaan di atas langsung tampil. Kamu tetap masuk. Jika salah, pesan merah menjelaskan yang perlu diperbaiki.",
    "care": "Jika pesan mengatakan kunci tidak bisa melihat daftar akun, kolom baru meminta Cloudflare Account ID. Isi lalu tekan lagi. Kunci dari akun Cloudflare lain akan ditolak.",
    "like": "Seperti mencoba kunci pada kotak meteran. Jika bisa diputar, kunci itu disimpan."
  },
  "help.site.token_account_id": {
    "t": "Cloudflare Account ID (jika diminta)",
    "what": "Nomor akun Cloudflare sepanjang 32 huruf dan angka. Hanya muncul jika kunci tidak dapat menemukan akun secara otomatis.",
    "when": "Isi jika saat menyimpan muncul pesan bahwa kunci tidak bisa melihat daftar akun. Biasanya kunci memiliki satu izin, bukan dua.",
    "click": "Isi lalu tekan [[Simpan kunci]] lagi. Jika nomor dan kunci cocok, kunci akan disimpan.",
    "care": "Gunakan hanya 0–9 dan a–f, tepat 32 karakter. Cara mudahnya sering kali membuat kunci lagi melalui [[Buat di Cloudflare]] agar kedua izin terisi.",
    "like": "Seperti menuliskan nomor rumah pada kunci meteran karena kunci tidak bisa menemukan rumah sendiri."
  },
  "help.site.token_howto": {
    "t": "Cara membuat kunci penggunaan (2 menit)",
    "what": "Panduan langkah demi langkah membuat kunci penggunaan di Cloudflare. Tekan judul untuk membuka atau menutup.",
    "when": "Gunakan saat pertama kali membuat kunci atau ketika angka penggunaan di atas tidak muncul.",
    "click": "Membuka petunjuk tidak mengubah apa pun. Petunjuk terbuka sendiri sampai kunci disimpan, lalu terlipat.",
    "care": "Kunci memerlukan dua izin: Account Analytics Read dan Account Settings Read. Cloudflare menampilkannya sekali saja, jadi langsung salin.",
    "like": "Seperti peta kecil menuju toko kunci, lengkap dengan tanda meja pelayanannya."
  },
  "help.site.mm_r2": {
    "t": "Penyimpanan lagu (R2)",
    "what": "Menunjukkan tempat lagu dan gambar disimpan: nama penyimpanan dan nomor akun Cloudflare. Penyimpanan ini milikmu, bukan meshmelo.",
    "when": "Lihat saat ingin memeriksa akun Cloudflare dan tempat penyimpanan yang dipakai situs.",
    "click": "Kartu ini hanya menampilkan informasi. Untuk menggantinya, gunakan [[Ganti penyimpanan]].",
    "care": "Jangan hapus tempat penyimpanan ini di Cloudflare. Jika dihapus, lagu berhenti diputar di mana pun.",
    "like": "Seperti alamat gudangmu sendiri tempat semua rekaman toko disimpan."
  },
  "help.site.mm_r2_change": {
    "t": "Ganti penyimpanan",
    "what": "Membuka halaman meshmelo di tab baru. Di sana kamu bisa beralih ke penyimpanan lain atau akun Cloudflare lain.",
    "when": "Gunakan jika memindahkan lagu ke penyimpanan baru atau akun Cloudflare berbeda.",
    "click": "Hanya tab baru yang terbuka. Tidak ada yang berubah sebelum kamu menyelesaikan langkah di meshmelo.",
    "care": "Pindah ke akun Cloudflare lain? Buat juga kunci penggunaan baru di sana, lalu simpan pada kartu di bawah. Kunci lama tidak bisa membaca akun baru.",
    "like": "Seperti menelepon jasa pindahan untuk membawa rekaman ke gudang baru."
  },
  "help.site.mm_card": {
    "t": "Situs meshmelo milikmu",
    "what": "Situsmu berada di meshmelo, tetapi lagu dan gambar disimpan di tempat milikmu sendiri. Kartu ini membantumu membawa situs ke tempat lain atau menutupnya.",
    "when": "Gunakan saat ingin mencadangkan, pindah ke hosting sendiri, atau berhenti memakai meshmelo.",
    "click": "Kartu ini tidak melakukan apa-apa sendiri. Gunakan [[Ekspor situs saya]] untuk mengunduh salinan atau [[Akun meshmelo saya]] untuk membuka halaman akun.",
    "like": "Seperti menyewa toko di pusat belanja, tetapi rekaman di gudang tetap milikmu. Kamu bebas berkemas dan pindah."
  },
  "help.site.mm_export": {
    "t": "Ekspor situs saya",
    "what": "Mengunduh satu file ZIP berisi daftar lagu, album, pengaturan, tema, dan buku tamu. File audio dan gambar tidak termasuk karena sudah berada di penyimpanan milikmu.",
    "when": "Gunakan untuk mencadangkan sesekali atau sebelum memindahkan situs ke hosting sendiri.",
    "click": "Unduhan langsung dimulai. Situsmu tidak berubah.",
    "care": "Simpan file ini secara pribadi. File ini berisi informasi masuk dan rahasia penghubung situs ke aimusiclist.com. Ekspor tetap dapat dilakukan saat situs dijeda.",
    "like": "Seperti fotokopi seluruh catatan toko agar kamu bisa membuka toko yang sama di tempat lain."
  },
  "help.site.mm_delete": {
    "t": "Hapus situs saya",
    "what": "Menutup situs meshmelo selamanya: halaman, pengaturan, dan daftar lagu dihapus. Tekan judul untuk membuka kotak penghapusan.",
    "when": "Gunakan hanya jika benar-benar ingin berhenti. Jika ingin pindah, tekan [[Ekspor situs saya]] lebih dulu.",
    "click": "Membuka kotak tidak mengubah apa pun. Untuk menghapus, ketik nama situs dan kata sandi, lalu tekan tombol merah.",
    "care": "Tidak dapat dibatalkan. Lagu segera hilang dari aimusiclist.com. File di penyimpanan milikmu tidak disentuh. Nama situsmu tidak akan diberikan lagi kepada orang lain.",
    "like": "Seperti mengembalikan kunci toko sewaan. Rekaman di gudangmu sendiri tetap menjadi milikmu."
  },
  "help.site.mm_delete_name": {
    "t": "Ketik nama situs untuk konfirmasi",
    "what": "Ketik nama situs di sini persis seperti yang ditampilkan untuk memastikan kamu benar-benar ingin menghapusnya.",
    "when": "Gunakan hanya saat menghapus situs.",
    "click": "Mengetik saja tidak mengubah apa pun. Diperiksa saat tombol hapus merah ditekan.",
    "care": "Nama harus cocok huruf demi huruf. Jika berbeda, situs tidak dihapus dan kamu melihat pesan.",
    "like": "Seperti menandatangani formulir penutupan toko."
  },
  "help.site.mm_delete_btn": {
    "t": "Hapus situs saya",
    "what": "Tombol terakhir yang benar-benar menghapus situs meshmelo.",
    "when": "Gunakan setelah mengetik nama situs dan kata sandi saat ini di atas.",
    "click": "Sistem meminta konfirmasi sekali lagi. Jika setuju, situs langsung dihapus, kamu dikeluarkan, dan halaman meshmelo terbuka.",
    "care": "Tidak bisa dibatalkan. Ekspor dahulu jika mungkin masih membutuhkan data nanti. Setelah lima kata sandi salah, kamu harus menunggu satu jam.",
    "like": "Seperti memadamkan lampu toko dan mengunci pintu untuk terakhir kalinya."
  },
  "help.site.images": {
    "t": "Banner dan foto profil",
    "what": "Dua gambar untuk situsmu: banner lebar di paling atas dan foto profil berbentuk lingkaran.",
    "when": "Tambahkan agar situs memiliki ciri khasmu. Kamu bisa menggantinya kapan saja.",
    "click": "Setiap gambar langsung disimpan setelah dipilih dan kamu menekan simpan pada jendela gambar. Kartu ini tidak punya tombol simpan terpisah.",
    "care": "Pilih gambar maksimal 2 MB (JPG, PNG, WebP, atau GIF). Hanya gambar akhir yang kecil yang diunggah, bukan gambar asli.",
    "like": "Seperti kanopi di atas pintu toko dan foto pemilik di dekat meja layanan."
  },
  "help.site.banner": {
    "t": "Banner atas",
    "what": "Gambar lebar di atas judul situsmu, dengan ukuran hingga 1600×400.",
    "when": "Gunakan gambar lebar dan tidak terlalu tinggi, seperti pemandangan atau karya seni mendatar.",
    "click": "Tekan [[Pilih gambar]]. Pada jendela gambar, geser bingkai untuk memangkas atau kecilkan seluruh gambar tanpa mengubah bentuknya. Tekan [[Simpan gambar]] dan hasilnya langsung tampil di situs.",
    "care": "Gambar disimpan dengan ukuran hingga 300 KB. Gambar tinggi akan banyak terpotong, jadi yang lebar lebih cocok. Tanpa gambar, ruang banner tidak ditampilkan.",
    "like": "Seperti kanopi besar yang dicat di atas etalase toko."
  },
  "help.site.image_choose": {
    "t": "Pilih gambar",
    "what": "Membuka pemilih gambar di perangkatmu untuk banner atau foto profil.",
    "when": "Gunakan untuk menambahkan pertama kali atau mengganti gambar lama.",
    "click": "Setelah memilih gambar, jendela edit terbuka. Belum ada perubahan sampai menekan tombol di jendela itu ([[Simpan gambar]] untuk banner, [[Terapkan]] untuk profil). Setelah itu gambar baru langsung menggantikan yang lama.",
    "care": "Pilih JPG, PNG, WebP, atau GIF maksimal 2 MB. GIF bergerak menjadi gambar diam. Gunakan Chrome, Edge, atau Firefox jika browser tidak dapat mengolahnya.",
    "like": "Seperti mengambil foto baru dari tas untuk dipasang pada bingkai toko."
  },
  "help.site.image_delete": {
    "t": "Hapus",
    "what": "Menghapus banner atau foto profil dari situsmu.",
    "when": "Gunakan jika tidak ingin menampilkan gambar di sana.",
    "click": "Sistem meminta konfirmasi sekali. Jika setuju, gambar langsung hilang dari situs. Foto profil yang dihapus juga segera hilang dari aimusiclist.com.",
    "care": "Tidak dapat dibatalkan. Untuk menampilkan gambar lagi, pilih kembali melalui [[Pilih gambar]]. Tidak perlu menghapus gambar lama sebelum mengganti; cukup pilih yang baru.",
    "like": "Seperti mengeluarkan foto dari bingkai toko dan membiarkan bingkainya kosong."
  },
  "help.site.profile": {
    "t": "Foto profil",
    "what": "Gambar diri atau logo berukuran 200×200 yang ditampilkan bulat. aimusiclist.com juga menampilkannya pada \"Artis baru\" dan di samping situsmu.",
    "when": "Tambahkan wajah atau logo yang jelas meskipun terlihat kecil.",
    "click": "Tekan [[Pilih gambar]]. Geser foto, perbesar atau putar, lalu tekan [[Terapkan]]. Gambar langsung disimpan. Situs juga memilih warna latar yang cocok. aimusiclist.com menerima gambar baru sesaat kemudian.",
    "care": "Sudut foto terpotong oleh lingkaran, jadi letakkan bagian penting di tengah. Ukuran gambar akhir maksimal 100 KB.",
    "like": "Seperti foto pemilik pada kartu nama toko yang juga dibagikan di pasar besar."
  },
  "help.site.ads": {
    "t": "Google AdSense",
    "what": "Mengizinkan iklan Google tampil di situsmu agar kamu bisa mendapat penghasilan. Cukup masukkan nomor dari akun AdSense; situs membuat tampilan iklan sendiri.",
    "when": "Gunakan setelah Google menyetujui situsmu di AdSense.",
    "click": "Isi kolom, centang [[Tampilkan iklan di situs saya]], lalu tekan [[Simpan AdSense]]. Iklan tidak pernah muncul pada halaman admin, hanya di situs.",
    "care": "Google hanya menyetujui situs dengan alamat sendiri. Jika masih memakai alamat workers.dev, hubungkan domain sendiri dulu di tab Domain saya. Jangan tempel kode iklan di sini — hanya ID.",
    "like": "Seperti menyewakan sebagian kecil etalase toko untuk poster pengiklan yang membayarmu."
  },
  "help.site.ads_client": {
    "t": "ID penerbit (ca-pub-…)",
    "what": "Nomor milikmu di AdSense. Dimulai dengan ca-pub- diikuti 16 angka.",
    "when": "Temukan di akun AdSense lalu salin ke sini. Nomor diperlukan agar iklan bisa tampil.",
    "click": "Disimpan saat menekan [[Simpan AdSense]]. Halaman ads.txt juga dibuat secara otomatis.",
    "care": "Salin tepat: ca-pub- dan 16 angka, tanpa tambahan apa pun. Jika bentuknya berbeda, muncul pesan merah dan tidak ada yang disimpan.",
    "like": "Seperti nomor akun di perusahaan iklan agar mereka tahu poster dipasang di etalase toko siapa."
  },
  "help.site.ads_top": {
    "t": "ID iklan atas",
    "what": "Nomor ruang iklan di dekat bagian atas situs, tepat di bawah banner.",
    "when": "Buat unit iklan di akun AdSense lalu salin nomornya ke sini.",
    "click": "Disimpan saat menekan [[Simpan AdSense]]. Jika kosong, tidak ada iklan di atas.",
    "care": "Hanya angka, 6–20 digit. Jangan tempel seluruh kode iklan.",
    "like": "Seperti nomor bingkai poster yang digantung di bawah kanopi toko."
  },
  "help.site.ads_left": {
    "t": "ID iklan kiri (opsional)",
    "what": "Nomor ruang iklan kedua pada kolom kiri situsmu.",
    "when": "Isi hanya jika temamu punya kolom kiri, misalnya tema gelap.",
    "click": "Disimpan saat menekan [[Simpan AdSense]]. Jika tema tidak memiliki kolom kiri, iklan tidak muncul meskipun ada nomor di sini.",
    "care": "Hanya angka, 6–20 digit. Jika nanti mengganti ke tema tanpa kolom kiri, iklan hilang otomatis.",
    "like": "Seperti bingkai poster kedua yang hanya muat di toko dengan dinding samping."
  },
  "help.site.ads_on": {
    "t": "Tampilkan iklan di situs saya",
    "what": "Sakelar untuk mengaktifkan atau mematikan semua iklan di situsmu.",
    "when": "Centang jika ID sudah siap. Lepas untuk menghentikan iklan sementara tanpa kehilangan ID.",
    "click": "Belum berubah sampai kamu menekan [[Simpan AdSense]]. Setelah disimpan, iklan muncul dalam 30 detik atau hilang jika kamu mematikannya.",
    "care": "Tidak bisa diaktifkan tanpa ID penerbit. ID tetap berada di kolom meskipun iklan dimatikan.",
    "like": "Seperti sakelar lampu pada bingkai poster di etalase."
  },
  "help.site.ads_save": {
    "t": "Simpan AdSense",
    "what": "Menyimpan semua pengaturan Google AdSense: tiga ID dan sakelar aktif/mati.",
    "when": "Tekan setelah mengubah isi kartu ini.",
    "click": "Nomor diperiksa dahulu. Jika ada yang salah, muncul pesan merah dan tidak ada yang disimpan. Jika benar, iklan muncul atau berhenti di situs dalam 30 detik.",
    "care": "Iklan mungkin tetap kosong untuk beberapa waktu setelah disimpan. Itu keputusan Google, bukan situsmu. Periksa akun AdSense jika iklan tidak pernah muncul.",
    "like": "Seperti menyerahkan kontrak poster yang sudah ditandatangani kepada pengiklan."
  },
  "help.site.ads_txt": {
    "t": "ads.txt",
    "what": "Halaman kecil yang diperiksa Google untuk memastikan iklan situs benar-benar milikmu. Situs membuatnya otomatis dari ID penerbit.",
    "when": "Kamu tidak perlu melakukan apa pun. Buka tautannya jika AdSense memintamu memeriksa.",
    "click": "Tautan membuka halaman itu di tab baru. Di dalamnya ada satu baris ID penerbit. Tidak bisa diedit di sini karena mengikuti ID yang kamu simpan.",
    "care": "Jika ID penerbit belum disimpan, halaman kosong. Setelah mengganti ID, Google mungkin memerlukan waktu untuk mengetahuinya.",
    "like": "Seperti izin yang ditempel di balik etalase sebagai bukti poster iklan boleh dipasang."
  },
  "help.site.country": {
    "t": "Negara tempat kamu berkarya",
    "what": "Negara tempat kamu membuat musik. aimusiclist.com memakainya untuk memasukkanmu dalam peringkat Artis di negara itu.",
    "when": "Pilih jika ingin masuk peringkat negara sendiri. Ini opsional.",
    "click": "Disimpan saat menekan [[Simpan info situs]]. Jika membiarkan “— Belum diatur —”, kamu hanya masuk peringkat Global.",
    "care": "Pilih satu negara saja, yaitu tempat kamu benar-benar berkarya. Bisa diubah nanti.",
    "like": "Seperti bendera negara di kios pasar besar (aimusiclist.com) agar pendengar senegara mudah menemukanmu."
  },
  "help.site.fields": {
    "t": "Kolom tambahan (dari aimusiclist.com)",
    "what": "Menunjukkan daftar kolom ekstra (misalnya Suasana) yang diterima situs dari aimusiclist.com. Kolom itu tampil di bagian \"Informasi tambahan\" saat unggah/edit lagu dan di Info situs.",
    "when": "Lihat jika kamu ingin tahu mengapa kolom baru muncul atau kolom yang diharapkan tidak ada.",
    "click": "Kartu ini hanya menunjukkan status: versi daftar, jumlah kolom, dan waktu pemeriksaan terakhir. Situs memeriksa otomatis sekali sehari.",
    "care": "Jika gagal mengambil daftar, pesan merah menjelaskan alasan. Situs tetap memakai daftar terakhir yang berhasil dan unggahan terus bekerja.",
    "like": "Seperti formulir dari pasar besar (aimusiclist.com) untuk tiap toko tentang label yang harus ditempel pada rekaman."
  },
  "help.site.fields_update": {
    "t": "Perbarui kolom",
    "what": "Meminta daftar kolom tambahan terbaru dari aimusiclist.com sekarang, tanpa menunggu pemeriksaan harian.",
    "when": "Tekan jika aimusiclist.com mengumumkan kolom baru dan kamu ingin langsung memakainya.",
    "click": "Pesan singkat menunjukkan hasil: diperbarui beserta versi, sudah terbaru, atau penyebab kegagalan. Jika daftar berubah, layar diperbarui agar kolom baru muncul.",
    "care": "Boleh ditekan sekali per menit. Jika terlalu cepat, pesan menunjukkan berapa detik perlu menunggu. Jawaban di kolom lama tidak pernah hilang.",
    "like": "Seperti menelepon pasar besar untuk bertanya 'Ada formulir baru?' tanpa menunggu surat pagi."
  },
  "help.site.sns": {
    "t": "SNS",
    "what": "Alamat media sosialmu. Lima kolom pertama tetap: YouTube, Instagram, TikTok, Facebook, dan X.",
    "when": "Tambahkan tempat kamu membagikan musik atau berbicara dengan penggemar. Kosongkan jika tidak digunakan.",
    "click": "Ketik alamat lengkap yang dimulai https:// lalu klik di luar kolom. Alamat otomatis disimpan. Pengunjung menemukannya di halaman \"Tautan\" situs. aimusiclist.com menampilkan ikon kecil di samping lagu. Kosongkan kolom untuk menghapus.",
    "care": "Alamat harus sesuai layanan. Misalnya kolom YouTube hanya menerima alamat YouTube. Maksimal 200 karakter. Alamat salah menjadi merah dan tidak disimpan; alamat benar terakhir tetap ada.",
    "like": "Seperti papan kecil di pintu toko: \"Kami juga ada di sini\"."
  },
  "help.site.sns_tools": {
    "t": "Naik · Turun · Hapus",
    "what": "Tombol pada setiap baris \"SNS lainnya\". [[Naik]] dan [[Turun]] mengubah urutan; [[Hapus]] menghilangkan baris.",
    "when": "Gunakan untuk menaruh layanan terpenting di depan atau menghapus yang tidak dipakai.",
    "click": "Perubahan langsung tersimpan dan halaman \"Tautan\" mengikuti urutan baru. [[Hapus]] langsung menghapus baris tanpa bertanya.",
    "care": "Alamat yang dihapus hilang. Untuk memulihkannya, tambahkan baris lalu ketik alamat lagi. Lima kolom tetap tidak bisa dipindah dan selalu berada paling depan.",
    "like": "Seperti memindahkan catatan pada papan di pintu atau mencabut satu."
  },
  "help.site.sns_more": {
    "t": "SNS lainnya",
    "what": "Tempat untuk maksimal lima layanan sosial selain lima yang tetap, seperti SoundCloud, Spotify, Threads, atau Discord.",
    "when": "Gunakan jika aktif di layanan selain lima utama.",
    "click": "Pada tiap baris, pilih layanan lalu ketik alamatnya. Otomatis tersimpan setelah kamu klik di luar kolom. Semuanya muncul pada halaman \"Tautan\" sesuai urutan. Di aimusiclist.com semuanya berbagi ikon 🔗.",
    "care": "Setiap layanan hanya boleh dipilih sekali. Kolom alamat terkunci sampai memilih layanan. Mengganti layanan dalam baris akan menghapus alamat tersimpan, jadi isi lagi.",
    "like": "Seperti ruang tambahan pada papan di pintu untuk tempat lain pengunjung bisa menemukanmu."
  },
  "help.site.sns_add": {
    "t": "+ Tambah SNS lainnya",
    "what": "Menambahkan satu baris kosong di bawah bagian \"SNS lainnya\".",
    "when": "Tekan jika ingin menambah layanan yang tidak termasuk lima kolom tetap.",
    "click": "Baris baru muncul dengan daftar layanan untuk dipilih. Belum disimpan sampai memilih layanan dan mengetik alamat. Jika sudah lima baris, tombol menjadi abu-abu.",
    "care": "Baris kosong yang dibiarkan tidak disimpan dan menghilang saat halaman dibuka lagi.",
    "like": "Seperti menyematkan kertas kosong pada papan di pintu untuk ditulisi nanti."
  },
  "help.site.sns_view": {
    "t": "Lihat halaman Tautan",
    "what": "Membuka halaman \"Tautan\" situsmu yang memperlihatkan seluruh SNS kepada pengunjung.",
    "when": "Gunakan untuk memeriksa tampilan daftar SNS dari sisi pengunjung.",
    "click": "Halaman terbuka di tab baru. Tidak mengubah apa pun di sini. Tombol muncul hanya setelah setidaknya satu alamat SNS disimpan.",
    "like": "Seperti keluar toko untuk melihat papan di pintu dari sudut pandang pelanggan."
  },
  "help.guestbook.title": {
    "t": "Buku tamu",
    "what": "Tempat pengunjung meninggalkan pesan pendek tentang situs secara keseluruhan atau suatu lagu.",
    "when": "Gunakan jika ingin mendengar pendapat pendengar atau memeriksa dan membersihkan pesan.",
    "click": "Ini hanya judul. Gunakan [[Buka buku tamu]] untuk mengaktifkan atau mematikan, serta daftar di bawah untuk membaca dan menghapus.",
    "like": "Seperti buku catatan di pintu toko untuk tamu menulis pesan baik."
  },
  "help.guestbook.on": {
    "t": "Buka buku tamu",
    "what": "Mengaktifkan atau mematikan buku tamu bagi pengunjung. Saat aktif, pengunjung melihat **Buku tamu** di menu dan tombol 💬 pada tiap lagu.",
    "when": "Aktifkan agar pendengar bisa menulis pesan. Matikan jika terlalu banyak pesan tak diinginkan atau ingin beristirahat.",
    "click": "Langsung tersimpan. Pengunjung melihat perubahan dalam sekitar 30 detik. Kamu dapat mengaktifkan kembali kapan saja.",
    "care": "Mematikan hanya menyembunyikannya. Pesan lama tetap ada dan masih bisa kamu baca atau hapus di sini.",
    "like": "Seperti meletakkan buku tamu di pintu toko atau menyimpannya sebentar."
  },
  "help.guestbook.list": {
    "t": "Pesan",
    "what": "Semua pesan buku tamu, yang terbaru lebih dulu, 20 per halaman. Tiap pesan memuat nama, waktu, dan lagu terkait (♪). Angka di judul menunjukkan total.",
    "when": "Periksa sesekali untuk membaca pesan baru dan menghapus yang buruk.",
    "click": "Gunakan tombol halaman di bawah untuk melihat pesan lama. Kamu tidak bisa mengedit atau membalas di sini, hanya menghapus.",
    "care": "Pengunjung bisa menulis nama maksimal 20 karakter dan pesan maksimal 500 karakter tanpa tautan; paling banyak 50 pesan per orang sehari. Pesan tetap ada sampai dihapus, meskipun buku tamu dimatikan. **Lagu dihapus** berarti lagu terkait sudah dihapus.",
    "like": "Seperti membalik halaman buku tamu di pintu toko, mulai dari yang terbaru."
  },
  "help.guestbook.delete": {
    "t": "Hapus",
    "what": "Menghapus satu pesan buku tamu.",
    "when": "Gunakan untuk pesan kasar, sampah, atau pesan apa pun yang tidak ingin ditampilkan kepada pengunjung.",
    "click": "Sistem meminta konfirmasi, lalu pesan langsung hilang dari situs dan daftar diperbarui.",
    "care": "Tidak bisa dibatalkan. Menghapus pesan tidak mencegah orang tersebut menulis lagi.",
    "like": "Seperti merobek satu halaman dari buku tamu di pintu toko."
  },
  "help.domain.mm": {
    "t": "Domain saya",
    "what": "Menampilkan alamat situs sekarang. Karena situs dihosting meshmelo, domain sendiri dihubungkan melalui portal meshmelo, bukan di sini.",
    "when": "Gunakan untuk melihat alamat atau ingin memakai domain sendiri seperti mymusic.com.",
    "click": "Tidak ada tombol di sini. Buka my.meshmelo.com → Situs saya → Domain saya. Jika belum terlihat, fitur akan segera tersedia.",
    "care": "Alamat sekarang tetap berfungsi sehingga aman dibagikan.",
    "like": "Seperti menyewa toko di mal besar: kantor mal mengurus papan alamat jalan yang baru."
  },
  "help.domain.title": {
    "t": "Domain saya",
    "what": "Menampilkan alamat situs saat ini dan memungkinkan memakai alamat sendiri (domain), misalnya mymusic.com, sebagai pengganti alamat gratis yang panjang.",
    "when": "Gunakan jika sudah membeli domain atau ingin alamat pendek yang mudah diingat. Google AdSense juga meminta domain sendiri.",
    "click": "Ini hanya judul. Ikuti panduan di bawah, masukkan domain, lalu tekan [[Hubungkan]]. Setelah terhubung, tanda ✓ dan domainmu tampil.",
    "care": "Jika layar mengatakan alamat ditetapkan di pengaturan Cloudflare, kamu tidak bisa menggantinya di sini dan kolom menjadi abu-abu.",
    "like": "Seperti memindahkan papan nama toko dari gang dengan nomor panjang ke alamat jalan utama yang sederhana."
  },
  "help.domain.guide": {
    "t": "Cara menghubungkan domain sendiri",
    "what": "Panduan langkah demi langkah membeli domain dan mengarahkannya ke situs, sekitar 10 menit.",
    "when": "Baca sebelum menekan [[Hubungkan]]. Langkah pada layar Cloudflare harus diselesaikan terlebih dahulu.",
    "click": "Tekan judul untuk membuka atau menutup langkah. Petunjuk tetap terbuka sampai domain terhubung.",
    "care": "Kamu membayar biaya domain sendiri. Nama menu Cloudflare mungkin berubah, cari yang paling mirip. Jika memakai versi hosting, ikuti langkah panel hosting sebagai gantinya.",
    "like": "Seperti peta cara memasang papan nama toko pada alamat baru."
  },
  "help.domain.input": {
    "t": "Domain saya (kolom)",
    "what": "Ketik domain yang kamu beli, misalnya mymusic.com.",
    "when": "Gunakan setelah menyelesaikan petunjuk dan situsmu sudah terbuka melalui domain itu.",
    "click": "Belum terjadi apa-apa sampai menekan [[Hubungkan]].",
    "care": "Masukkan hanya domain, tanpa http://, https://, atau / beserta kata setelahnya. Untuk pindah domain lagi, isi yang baru dan hubungkan kembali.",
    "like": "Seperti menulis alamat jalan baru pada papan nama toko."
  },
  "help.domain.connect": {
    "t": "Hubungkan",
    "what": "Memeriksa apakah situsmu benar-benar dapat dibuka lewat domain tersebut, lalu menjadikannya alamat utama.",
    "when": "Tekan setelah memasukkan domain di kolom.",
    "click": "Pemeriksaan dapat memakan hingga 30 detik. Jika berhasil, domain tersimpan dan aimusiclist.com memperbarui alamat otomatis. Pengunjung alamat gratis lama diarahkan ke domainmu. Pada versi hosting, alamat lama tetap bekerja.",
    "care": "Jika gagal, mungkin situs belum terbuka di domain itu atau domain membuka situs lain. Periksa panduan, tunggu beberapa menit, lalu coba lagi. Lagu yang sudah ada pada daftar putar orang tetap bisa diputar.",
    "like": "Seperti kantor pos memeriksa alamat toko baru sebelum meneruskan surat ke sana."
  },
  "help.menus.form": {
    "t": "Tambah menu / Edit menu",
    "what": "Tempat membuat tombol menu di bagian atas situs untuk pengunjung. Setiap menu menampilkan lagu dari satu genre.",
    "when": "Gunakan jika ingin pengunjung menemukan lagu menurut gaya, misalnya menu R&B dan Hip-hop.",
    "click": "Pilih 1. genre utama, 2. genre khusus jika perlu, 3. nama jika ingin, lalu tekan [[Simpan menu]]. Angka di samping tombol menunjukkan berapa lagu yang cocok.",
    "care": "Genre berasal dari daftar aimusiclist.com sehingga menu sesuai dengan situs utama. Maksimal 30 menu dan hanya satu menu untuk setiap genre.",
    "like": "Seperti memasang label rak toko: 'R&B di sini', 'Hip-hop di sana'."
  },
  "help.menus.main": {
    "t": "1. Genre utama",
    "what": "Genre besar untuk menu ini, seperti R&B, Hip-hop, atau Dance. Daftarnya sama dengan aimusiclist.com.",
    "when": "Selalu pilih ini lebih dulu. Menu tidak bisa disimpan tanpanya.",
    "click": "Setelah dipilih, daftar genre khusus terbuka dengan pilihan di bawah genre utama, dan jumlah lagu cocok terlihat.",
    "care": "Jika hanya memilih genre utama, menu menampilkan lagu yang memakai genre tersebut pada salah satu dari tiga kolom genre.",
    "like": "Seperti papan besar di atas lorong toko, misalnya 'R&B'."
  },
  "help.menus.sub": {
    "t": "2. Genre khusus",
    "what": "Genre yang lebih kecil dalam genre utama agar isi menu lebih khusus. Ini opsional.",
    "when": "Gunakan jika memiliki banyak lagu dalam satu genre dan ingin menu khusus satu gaya.",
    "click": "Daftar hanya menunjukkan genre khusus dari genre utama pilihanmu. Biarkan pada 'Semua …' untuk memakai genre utama. Jumlah lagu di samping [[Simpan menu]] langsung berubah.",
    "care": "Kolom abu-abu sampai kamu memilih genre utama. Jika memilih genre khusus, menu hanya menampilkan lagu yang memiliki genre itu pada salah satu kolom genre.",
    "like": "Seperti label kecil pada satu rak di dalam lorong toko."
  },
  "help.menus.label": {
    "t": "3. Nama menu",
    "what": "Kata-kata yang dilihat pengunjung pada tombol menu. Ini opsional.",
    "when": "Tulis nama sendiri jika ingin yang lebih ramah, misalnya 'Lagu Malam'. Kosongkan untuk memakai nama genre.",
    "click": "Disimpan saat menekan [[Simpan menu]]. Jika kosong, tombol menampilkan nama genre yang berubah mengikuti bahasa pengunjung.",
    "care": "Maksimal 30 karakter. Nama buatanmu ditampilkan sama pada semua bahasa.",
    "like": "Seperti tulisan yang kamu buat sendiri pada label rak."
  },
  "help.menus.save": {
    "t": "Simpan menu",
    "what": "Menyimpan menu yang sudah kamu atur di atas.",
    "when": "Tekan setelah memilih genre dan nama jika diinginkan.",
    "click": "Langsung disimpan. Menu baru ditambahkan di akhir daftar. Pengunjung melihatnya dalam 30 detik.",
    "care": "Tidak boleh membuat dua menu untuk genre sama. Setelah memiliki 30 menu, kamu tidak bisa menambah lagi. Pesan merah menjelaskan penyebabnya.",
    "like": "Seperti menempel label yang sudah selesai dibuat pada rak."
  },
  "help.menus.order": {
    "t": "Naik / Turun",
    "what": "Memindahkan menu satu posisi lebih awal atau lebih akhir dalam urutan.",
    "when": "Gunakan untuk menaruh menu terpenting di depan.",
    "click": "Langsung tersimpan. Pengunjung melihat urutan baru dalam 30 detik.",
    "care": "Menu pertama tidak bisa naik dan yang terakhir tidak bisa turun, sehingga tombol tersebut abu-abu.",
    "like": "Seperti menukar posisi dua label rak agar yang populer berada di depan."
  },
  "help.menus.edit": {
    "t": "Edit",
    "what": "Membuka menu ini pada kotak di atas agar kamu bisa mengubah genre atau nama.",
    "when": "Gunakan untuk mengganti nama menu atau mengarahkannya ke genre lain.",
    "click": "Halaman bergulir ke kotak berisi menu ini. Ubah lalu tekan [[Simpan menu]]; posisinya tetap. [[Batal]] menutup tanpa perubahan.",
    "like": "Seperti melepas label rak, menulis ulang, lalu memasangnya kembali di tempat semula."
  },
  "help.menus.delete": {
    "t": "Hapus",
    "what": "Menghapus menu ini dari situs.",
    "when": "Gunakan jika menu tidak diperlukan lagi.",
    "click": "Sistem meminta konfirmasi. Menu langsung dihapus dan tidak terlihat lagi oleh pengunjung dalam 30 detik.",
    "care": "Hanya menunya yang hilang. Lagu tetap di situs dan dapat ditemukan pada Beranda atau menu lain. Tidak dapat dibatalkan, tetapi menu bisa dibuat lagi.",
    "like": "Seperti melepas label rak; rekaman di rak tetap berada di tempatnya."
  },
  "help.menus.list": {
    "t": "Menu di situsmu",
    "what": "Semua menu menurut urutan yang dilihat pengunjung di bagian atas situs. Angka dalam kurung menunjukkan jumlah menu dari batas 30.",
    "when": "Lihat untuk memeriksa, mengurutkan, mengubah, atau menghapus menu.",
    "click": "Setiap baris menampilkan nama menu, genre, dan jumlah lagu. Pengunjung selalu melihat 'Beranda' paling awal serta 'Album' jika kamu punya album.",
    "care": "'Genre tidak ada di daftar' berarti aimusiclist.com sudah tidak memiliki genre itu. Tekan [[Edit]] dan pilih genre lain. Menu tanpa lagu tetap tampil tetapi kosong.",
    "like": "Seperti deretan label rak dari kiri ke kanan di toko."
  },
  "help.tab.menus": {
    "t": "Menu",
    "what": "Tempat mengatur menu situs. Setiap menu menampilkan lagu satu genre yang dipilih dari daftar aimusiclist.com.",
    "when": "Buka untuk menentukan menu yang dilihat pengunjung beserta urutannya.",
    "click": "Menekan tab hanya mengganti tampilan. Menambahkan, mengedit, memindahkan, atau menghapus menu akan langsung tersimpan.",
    "care": "Maksimal 30 menu. Pilih genre utama, genre tambahan jika ingin, dan nama (maksimal 30 karakter, opsional). Memakai genre aimusiclist.com membuat pengelompokan di kedua situs konsisten.",
    "like": "Seperti label rak toko: 'R&B di sini, Hip-hop di sana'."
  },
  "help.stats.title": {
    "t": "Statistik situs",
    "what": "Tab ini menunjukkan jumlah orang yang mengunjungi situs dan jumlah pemutaran lagu. Angka dari aimusiclist.com juga tersedia.",
    "when": "Buka sekali sehari atau seminggu untuk melihat lagu yang disukai dan perkembangan situs.",
    "click": "Melihat angka tidak mengubah apa pun pada situs. Pilih periode di atas dan semua kartu akan menampilkan angka untuk periode itu.",
    "care": "Sebagian besar angka dihitung **sekali sehari** (pagi hari menurut waktu UTC). Lagu yang diunggah hari ini masuk perhitungan mulai besok.",
    "like": "Seperti buku catatan pemilik toko yang mencatat pengunjung dan lagu yang didengarkan setiap pagi."
  },
  "help.stats.period": {
    "t": "Periode (7 / 30 / 90 hari)",
    "what": "Tombol untuk memilih rentang perhitungan: 7, 30, atau 90 hari.",
    "when": "Pilih 7 hari untuk melihat minggu ini, atau 90 hari untuk gambaran besar sekitar tiga bulan.",
    "click": "Angka, grafik, dan tabel pada tab ini langsung berubah. Tombol berwarna menunjukkan pilihan aktif. Tidak ada yang disimpan atau dikirim.",
    "care": "Periode berakhir **kemarin** (UTC). Hari ini ditampilkan terpisah pada baris kecil **Hari ini** setiap kartu. Panah **dibanding hari sebelumnya** membandingkan dengan jumlah hari yang sama tepat sebelumnya.",
    "like": "Seperti memilih berapa halaman buku toko yang dibaca sekaligus: seminggu, sebulan, atau tiga bulan."
  },
  "help.stats.note.off": {
    "t": "Pemutaran di situs saya tidak dihitung",
    "what": "Pada jenis hosting ini, pemutaran di situs sendiri belum bisa dihitung. Karena itu urutan **Populer** situs menggunakan pemutaran aimusiclist sebagai gantinya.",
    "when": "Pesan muncul otomatis. Tidak perlu berbuat apa-apa jika angka aimusiclist sudah cukup.",
    "click": "Baca pesannya. Jika menyebut langkah penyiapan (misalnya menghubungkan Worker audio), lakukan untuk mengaktifkan perhitungan. Angka mulai tersedia keesokan hari.",
    "care": "Angka sebelum perhitungan diaktifkan tidak dapat diisi kembali.",
    "like": "Seperti toko tanpa penghitung pintu. Karena jumlah tamu tak diketahui, kamu memakai angka pasar besar."
  },
  "help.stats.note.dataset": {
    "t": "Pencatatan statistik belum aktif",
    "what": "Situsmu belum mencatat kunjungan dan pemutaran. Aktifkan perhitungan satu kali pada akun Cloudflare.",
    "when": "Lakukan sekali jika ingin melihat angka situs sendiri.",
    "click": "Ikuti petunjuk: buat penyimpanan statistik di Cloudflare dengan nama yang ditampilkan persis. Lalu pada halaman GitHub situsmu, hapus tanda \"# \" di awal tiga baris yang ditunjukkan dan tekan [[Commit changes]]. Situs diperbarui dalam 1–3 menit. Angka muncul pada perhitungan harian berikutnya.",
    "care": "Nama harus tepat **aml_site_stats**. Jika langkah Cloudflare dilewati dan tiga baris saja diubah, pembaruan situs gagal. Kembalikan tanda \"# \" jika itu terjadi.",
    "like": "Seperti memasang alat penghitung tamu di pintu toko. Sebelum dipasang, tidak ada yang dihitung."
  },
  "help.stats.note.token": {
    "t": "Kunci penggunaan belum ada",
    "what": "Untuk membaca angka situs sendiri, kamu memerlukan kunci penggunaan Cloudflare yang belum ditambahkan.",
    "when": "Tambahkan sekali. Kunci yang sama juga memperlihatkan sisa kapasitas paket gratis di bagian atas halaman admin.",
    "click": "Buka tab **Info situs** lalu tempel kunci di sana. Kunci memerlukan izin yang ditunjukkan pada pesan. Angka muncul mulai perhitungan harian berikutnya.",
    "care": "Buat kunci pada **akun Cloudflare yang sama** dengan situs ini. Rahasiakan kunci dan jangan unggah ke mana pun.",
    "like": "Seperti kunci ruang meteran. Tanpa kunci kamu tidak bisa membaca angkanya, meskipun meteran bekerja."
  },
  "help.stats.note.no_visits": {
    "t": "Kunjungan tidak dihitung",
    "what": "Pada hosting ini, halaman dikirim sebagai file yang sudah jadi. Karena itu kunjungan tidak bisa dihitung, tetapi pemutaran bisa.",
    "when": "Pesan muncul otomatis dan merupakan hal normal untuk jenis hosting ini.",
    "click": "Tidak ada yang perlu ditekan. Kartu dan grafik **Kunjungan** disembunyikan. Negara, perangkat, dan bahasa dihitung berdasarkan pemutaran.",
    "like": "Seperti toko yang tidak bisa menghitung orang masuk tetapi bisa menghitung setiap rekaman yang diputar."
  },
  "help.stats.note.error": {
    "t": "Statistik tidak bisa dibaca",
    "what": "Perhitungan terakhir gagal. Alasannya tertulis pada pesan.",
    "when": "Pesan muncul otomatis saat terjadi masalah.",
    "click": "Jika tertulis **Menampilkan angka terakhir tersimpan**, kamu melihat angka terakhir yang berhasil. Biasanya perhitungan harian berikutnya memperbaikinya. Jika pesan bertahan berhari-hari, periksa kunci penggunaan di **Info situs**.",
    "care": "Hari yang terlewat tidak hilang jika perhitungan segera kembali. Hari yang sangat lama mungkin tidak dapat dipulihkan.",
    "like": "Seperti pagi saat petugas meteran tidak datang. Angka kemarin tetap dipajang sampai pemeriksaan berikutnya."
  },
  "help.stats.updated": {
    "t": "Waktu angka dibuat",
    "what": "Baris ini menunjukkan waktu angka terakhir dihitung. Juga memberi tahu bahwa angka merupakan perkiraan, bukan hitungan mutlak.",
    "when": "Lihat jika angka terasa lama. Jika waktunya kemarin, perhitungan berikutnya belum berlangsung.",
    "care": "Angka dihitung sekali sehari, sedikit setelah 00:00 UTC. Setiap situs mendapatkan menit pemeriksaan sendiri yang ditampilkan di sini. **Bot** (program otomatis) dan **kunjunganmu sendiri** saat masuk tidak dihitung, sehingga angka lebih kecil daripada semua klik.",
    "like": "Seperti tanggal yang dicetak pada struk untuk menunjukkan kapan perhitungan dilakukan."
  },
  "help.stats.csv.days": {
    "t": "Unduh CSV harian",
    "what": "Menyimpan file berisi satu baris untuk tiap hari periode pilihan: kunjungan, pemutaran, pemutaran dari aimusiclist, pesan buku tamu, dan angka aimusiclist.",
    "when": "Gunakan untuk menyimpan angka atau membuat grafik sendiri di Excel atau Google Sheets.",
    "click": "File dibuat di browser dan disimpan ke folder unduhan. Situs tidak berubah.",
    "care": "Hari mengikuti waktu UTC. Pilih periode dahulu (7, 30, atau 90 hari) karena file menyesuaikannya.",
    "like": "Seperti memfotokopi halaman buku toko untuk disimpan di rumah."
  },
  "help.stats.csv.tracks": {
    "t": "Unduh CSV lagu",
    "what": "Menyimpan file berisi satu baris tiap lagu: peringkat, perubahan peringkat, pemutaran, pemutaran dari aimusiclist, serta angka dan peringkat aimusiclist.",
    "when": "Gunakan untuk membandingkan lagu lewat spreadsheet atau menyimpan catatan kinerjanya.",
    "click": "File dibuat di browser dan disimpan ke folder unduhan. Situs tidak berubah.",
    "care": "Pemutaran mengikuti periode pilihanmu. Angka aimusiclist selalu untuk 7 hari terakhir. Sel kosong berarti tidak ada angka.",
    "like": "Seperti menyalin daftar lagu terlaris dari dinding toko ke buku pribadi."
  },
  "help.stats.refresh": {
    "t": "Segarkan sekarang",
    "what": "Menghitung ulang kunjungan dan pemutaran situsmu, termasuk hari ini, saat ini juga.",
    "when": "Gunakan setelah membagikan lagu dan ingin tahu apakah pengunjung datang. Tanpa ini, angka hanya berubah sekali sehari.",
    "click": "Dalam beberapa detik angka pada tab berubah. Jumlah putar pada daftar lagu dan situs juga berubah. Lalu tombol menunggu **1 menit** sebelum bisa ditekan lagi.",
    "care": "Ada batas harian: **200 kali** untuk situs yang dipasang sendiri dan **30 kali** pada meshmelo. Angka aimusiclist tidak berubah melalui tombol ini; tetap sehari sekali. Jika tombol tidak ada, hostingmu belum bisa menghitungnya.",
    "like": "Seperti membaca meteran listrik sendiri di siang hari tanpa menunggu pemeriksaan esok pagi."
  },
  "help.stats.tile.visits": {
    "t": "Kunjungan",
    "what": "Jumlah pengunjung membuka situs dalam periode pilihan. Ditampilkan sebagai **sekitar** suatu angka karena hanya perkiraan.",
    "when": "Lihat untuk mengetahui apakah berbagi di media sosial mendatangkan orang.",
    "click": "Di bawah angka besar ada panah: naik (▲) berarti lebih banyak daripada periode sebelumnya, turun (▼) berarti lebih sedikit. **Hari ini** muncul setelah [[Segarkan sekarang]], atau – jika belum dihitung.",
    "care": "Lebih besar biasanya lebih baik. Bot dan kunjunganmu sendiri tidak dihitung. Jika satu hari tiba-tiba melonjak, periksa **Asal pengunjung** di bawah untuk mencari penyebab.",
    "like": "Seperti jumlah tamu yang masuk melalui pintu toko."
  },
  "help.stats.tile.plays": {
    "t": "Pemutaran dimulai",
    "what": "Jumlah lagu mulai diputar dari awal di situsmu selama periode pilihan.",
    "when": "Ini salah satu angka terpenting untuk musik. Periksa setelah mengunggah lagu baru.",
    "click": "Panah membandingkan dengan periode sebelumnya. **Hari ini** menunjukkan angka hari ini setelah [[Segarkan sekarang]].",
    "care": "Lebih besar lebih baik. Satu putar dihitung ketika lagu **dimulai**, meskipun pendengar segera berhenti. Putarmu sendiri saat masuk tidak dihitung. Jika 0 berhari-hari, lihat pemberitahuan di atas kartu.",
    "like": "Seperti jumlah rekaman yang diletakkan pada pemutar di tokomu."
  },
  "help.stats.tile.plays_aml": {
    "t": "Pemutaran dari aimusiclist",
    "what": "Lagu yang diputar di aimusiclist.com dikirim dari situsmu sendiri. Angka ini menghitung pemutaran tersebut.",
    "when": "Lihat untuk mengetahui seberapa banyak pasar besar membantu musikmu didengar.",
    "click": "Melihat angka tidak mengubah apa pun. Panah membandingkan dengan periode sebelumnya.",
    "care": "Lebih besar lebih baik. Pemutaran ini **tidak** digunakan untuk urutan **Populer** situs. aimusiclist punya tangga lagu sendiri. Angka ini mungkin sedikit berbeda dari kartu aimusiclist di bawah karena cara menghitungnya berbeda.",
    "like": "Rekaman diputar di kios pasar besar, tetapi suaranya berasal dari gudangmu. Angka ini menghitung kejadian itu."
  },
  "help.stats.tile.gb": {
    "t": "Pesan buku tamu",
    "what": "Jumlah pesan baru di buku tamu selama periode pilihan.",
    "when": "Lihat untuk mengetahui banyaknya penggemar yang menyapa.",
    "click": "Melihat angka tidak mengubah apa pun. Panah membandingkan dengan periode sebelumnya.",
    "care": "Lebih besar biasanya berarti lebih banyak penggemar. Pesanmu sendiri tidak dihitung. Jika melonjak tajam, periksa buku tamu untuk spam.",
    "like": "Seperti jumlah catatan yang ditinggalkan pengunjung dalam buku tamu di pintu toko."
  },
  "help.stats.trend": {
    "t": "Grafik per hari",
    "what": "Setiap batang mewakili satu hari. Batang lebih tinggi berarti lebih banyak pemutaran (atau kunjungan) pada hari itu.",
    "when": "Gunakan untuk menemukan hari-hari ramai, misalnya setelah membagikan lagu di media sosial.",
    "click": "Arahkan mouse ke batang (atau sentuh) untuk melihat tanggal dan angka. Sisi kiri menunjukkan skala.",
    "care": "Hari mengikuti waktu UTC, jadi awal hari bisa terjadi pada pagi atau malam di tempatmu. Ruang kosong berarti 0 atau tidak dihitung pada hari itu.",
    "like": "Seperti tumpukan koin untuk tiap hari. Tumpukan tinggi berarti lebih ramai."
  },
  "help.stats.table_view": {
    "t": "Tampilkan sebagai tabel",
    "what": "Membuka angka yang sama dalam tabel: satu baris setiap hari, mulai dari yang terbaru.",
    "when": "Gunakan jika ingin angka pasti suatu hari atau sulit membaca grafik.",
    "click": "Tekan untuk membuka atau menutup tabel. Tidak ada yang disimpan.",
    "care": "Hanya periode pilihan yang ditampilkan. Untuk menyimpan angka, gunakan [[Unduh CSV harian]] di bawah.",
    "like": "Seperti buku toko yang sama, tetapi gambar diganti baris angka biasa."
  },
  "help.stats.col.date": {
    "t": "Tanggal (UTC)",
    "what": "Hari yang dihitung oleh tiap baris. Mengikuti **UTC**, waktu standar dunia.",
    "when": "Gunakan untuk mencocokkan suatu hari dengan kegiatanmu, seperti membagikan lagu.",
    "care": "UTC berbeda dari waktu setempat. Di Korea, hari UTC dimulai pukul 9 pagi. Lagu yang dibagikan larut malam mungkin masuk hari sebelum atau sesudahnya.",
    "like": "Seperti buku toko yang selalu memakai jam dunia yang sama agar semua toko di pasar menulis tanggal seragam."
  },
  "help.stats.col.rank": {
    "t": "Peringkat",
    "what": "Posisi lagu dalam urutan **Populer** situs. Di sampingnya bisa terlihat perubahan dibanding hari sebelumnya.",
    "when": "Lihat untuk menemukan lagu paling populer.",
    "click": "Tidak ada yang perlu ditekan. ▲ berarti naik sejumlah posisi, ▼ turun, – tetap. **NEW** berarti baru masuk. **RE** berarti masuk lagi setelah keluar dari daftar.",
    "care": "Angka lebih kecil lebih baik (1 tertinggi). – berarti lagu tidak punya peringkat karena tidak diputar dalam 7 hari terakhir.",
    "like": "Seperti nomor pada daftar rekaman terlaris di etalase."
  },
  "help.stats.col.plays": {
    "t": "Pemutaran (hari pilihan)",
    "what": "Jumlah lagu mulai diputar di situsmu selama periode pilihan.",
    "when": "Gunakan untuk membandingkan lagu satu sama lain.",
    "care": "Lebih besar lebih baik. Pemutaran melalui aimusiclist ada di kolom berikutnya, bukan di sini. Jika lagu baru menunjukkan 0, tunggu perhitungan harian berikutnya.",
    "like": "Seperti jumlah satu rekaman diputar di pemutar tokomu."
  },
  "help.stats.col.plays_aml": {
    "t": "Dari aimusiclist",
    "what": "Jumlah lagu ini diputar di aimusiclist.com selama periode pilihan, dikirim dari situsmu.",
    "when": "Gunakan untuk melihat lagu yang ditemukan pendengar di pasar besar.",
    "care": "Lebih besar lebih baik. Pemutaran ini tidak mengubah urutan Populer situs. Angka bisa sedikit berbeda dari **pemutaran aimusiclist (7 hari)** karena cara menghitungnya berbeda.",
    "like": "Seperti jumlah rekamanmu dibawa dari gudang untuk diputar di pasar besar."
  },
  "help.stats.col.likes": {
    "t": "Suka ♥",
    "what": "Jumlah ♥ yang diterima lagu ini di situsmu sendiri sejak pertama kali hingga sekarang.",
    "when": "Gunakan untuk mengetahui lagu yang paling disukai penggemar.",
    "care": "Ini adalah **jumlah sepanjang waktu**, bukan periode pilihan. Dihitung sekali sehari. Suka dari aimusiclist dihitung terpisah pada kartu aimusiclist.",
    "like": "Seperti menghitung gambar hati yang ditinggalkan penggemar pada kartu lagu di toko."
  },
  "help.stats.col.aml_plays7": {
    "t": "Pemutaran aimusiclist (7 hari)",
    "what": "Jumlah lagu ini diputar di aimusiclist.com dalam 7 hari terakhir menurut hitungan aimusiclist.",
    "when": "Gunakan untuk melihat perkembangan lagumu di pasar besar minggu ini.",
    "care": "Selalu **7 hari**, apa pun periode pilihanmu. Angka datang sekali sehari. Lebih besar lebih baik.",
    "like": "Seperti catatan pasar besar tentang berapa kali rekamanmu diputar minggu ini."
  },
  "help.stats.col.aml_valid7": {
    "t": "Pemutaran valid (7 hari)",
    "what": "Pemutaran di aimusiclist dalam 7 hari terakhir saat orang mendengarkan **30 detik atau lebih**.",
    "when": "Gunakan untuk mengetahui pendengar sungguhan. Lagu yang langsung dilewati tidak dihitung valid.",
    "care": "Angka lebih besar lebih baik. Biasanya sedikit lebih kecil daripada semua putar. Jika jauh lebih kecil, pendengar mungkin cepat melewati lagu. Cobalah pembukaan lagu lebih menarik atau sampul lebih baik. aimusiclist memakai putar valid untuk peringkat yang adil.",
    "like": "Seperti tamu yang berhenti cukup lama untuk mendengarkan di kios, bukan yang sekadar lewat."
  },
  "help.stats.col.chart": {
    "t": "Peringkat tangga lagu",
    "what": "Posisi lagu pada tangga mingguan aimusiclist (Top 100). Di sampingnya terlihat perubahan sejak tangga sebelumnya.",
    "when": "Lihat untuk mengetahui apakah lagumu masuk tangga besar.",
    "care": "Angka lebih kecil lebih baik. **NEW** berarti baru masuk. – berarti belum masuk tangga saat ini; itu normal untuk kebanyakan lagu.",
    "like": "Seperti posisi rekaman di papan terlaris utama pasar besar."
  },
  "help.stats.col.genre_rank": {
    "t": "Peringkat genre",
    "what": "Posisi lagu pada tangga aimusiclist untuk genrenya sendiri (misalnya R&B atau Hip-hop).",
    "when": "Gunakan untuk membandingkan dengan lagu-lagu bergaya sama.",
    "care": "Angka lebih kecil lebih baik. Tangga genre lebih kecil daripada tangga utama sehingga lebih mudah mendapat peringkat. – berarti belum memiliki peringkat genre.",
    "like": "Seperti posisi rekamanmu pada satu rak khusus R&B di pasar besar."
  },
  "help.stats.col.all_rank": {
    "t": "Peringkat semua lagu",
    "what": "Posisi lagu di antara **semua lagu** yang didengarkan di aimusiclist minggu ini (Jumat sampai Kamis). Di bawahnya terlihat peringkat terbaik sepanjang waktu.",
    "when": "Gunakan meskipun lagu belum masuk Top 100. Kamu masih bisa melihatnya naik.",
    "click": "Tidak ada yang perlu ditekan. ▲ dan angka menunjukkan berapa posisi naik sejak minggu lalu, ▼ menunjukkan penurunan.",
    "care": "Angka lebih kecil lebih baik. Berubah **setiap Jumat**. Lagu yang tidak diputar minggu ini menunjukkan –.",
    "like": "Meski rekaman belum ada di papan utama, kamu bisa melihat nomornya pada daftar lengkap pasar besar."
  },
  "help.stats.tracks": {
    "t": "Lagu populer",
    "what": "Tabel berisi lagu, jumlah putar, dan peringkatnya. Menampilkan hingga 100 lagu dengan peringkat terbaik di atas.",
    "when": "Gunakan untuk melihat lagu yang sedang berhasil dan lagu yang membutuhkan lebih banyak perhatian.",
    "click": "Melihatnya tidak mengubah apa pun. Kolom **Pemutaran** mengikuti periode pilihan di atas. Kolom aimusiclist selalu 7 hari terakhir.",
    "care": "Peringkat di sini sama dengan urutan **Populer** di situsmu. Berubah sehari sekali. Kolom aimusiclist hanya muncul jika aimusiclist.com mengirim datanya.",
    "like": "Seperti daftar rekaman terlaris yang digantung pada dinding toko."
  },
  "help.stats.rank_basis": {
    "t": "Cara urutan Populer ditentukan",
    "what": "Baris ini menjelaskan dasar urutan **Populer** situs: pemutaran di situs sendiri atau, jika tidak bisa dihitung, pemutaran aimusiclist.",
    "when": "Baca jika bertanya-tanya mengapa satu lagu berada di atas yang lain.",
    "care": "Hanya **7 hari terakhir** yang dihitung dan hanya lagu yang diputar mendapat peringkat (maksimal 100). Jika jumlah sama, pemutaran valid aimusiclist lalu unggahan terbaru didahulukan. Pemutaran melalui aimusiclist tidak digunakan di sini.",
    "like": "Seperti kartu aturan di sebelah daftar terlaris yang menjelaskan cara penyusunannya."
  },
  "help.stats.albums": {
    "t": "Album",
    "what": "Tabel album milikmu. Setiap baris menjumlahkan pemutaran seluruh lagu di album.",
    "when": "Gunakan untuk melihat album paling banyak didengarkan.",
    "care": "Tabel diurutkan mulai dari album paling sering diputar. Lagu dalam dua album dihitung pada keduanya.",
    "like": "Seperti menghitung penjualan per kotak album, bukan per rekaman tunggal."
  },
  "help.stats.album.plays": {
    "t": "Pemutaran album (hari pilihan)",
    "what": "Total pemutaran lagu-lagu album selama periode pilihan, termasuk pemutaran di situsmu **dan** melalui aimusiclist.",
    "when": "Gunakan untuk membandingkan album.",
    "care": "Lebih besar lebih baik. Album dengan banyak lagu mungkin tampak besar hanya karena jumlah lagunya. Lihat juga kolom **Lagu**.",
    "like": "Seperti jumlah semua rekaman dalam satu kotak album yang diputar di toko dan kios pasar besar."
  },
  "help.stats.album.aml_plays7": {
    "t": "Pemutaran album di aimusiclist (7 hari)",
    "what": "Total pemutaran lagu album di aimusiclist selama 7 hari terakhir menurut hitungan aimusiclist.",
    "when": "Gunakan untuk melihat album populer di pasar besar minggu ini.",
    "care": "Selalu **7 hari** meskipun memilih periode lain. Lebih besar lebih baik.",
    "like": "Seperti hitungan pasar besar untuk seluruh album koleksimu minggu ini."
  },
  "help.stats.listeners": {
    "t": "Pendengar (berdasarkan pemutaran)",
    "what": "Kartu ini menunjukkan asal pendengar: negara, perangkat, bahasa, dan jam mendengarkan.",
    "when": "Gunakan untuk memilih tempat berbagi musik dan bahasa tulisan.",
    "care": "Hostingmu tidak bisa menghitung kunjungan, jadi kartu ini berdasarkan **pemutaran**, bukan kunjungan. Tidak menyimpan informasi pribadi. Persentase menunjukkan bagian dari daftar yang terlihat.",
    "like": "Seperti memperhatikan kota asal orang-orang yang memutar rekamanmu."
  },
  "help.stats.countries": {
    "t": "Negara",
    "what": "Negara asal pendengar atau pengunjung. Sepuluh teratas terlihat, mulai dari yang terbanyak.",
    "when": "Gunakan untuk memilih bahasa judul lagu atau merencanakan berbagi ke negara tertentu.",
    "care": "**Tidak diketahui** berarti negara tidak dapat ditemukan. Sedikit persentase yang tidak diketahui adalah hal wajar.",
    "like": "Seperti jarum pada peta dunia di toko yang menandai negara asal tamu."
  },
  "help.stats.devices": {
    "t": "Perangkat",
    "what": "Perangkat yang digunakan untuk membuka situs: ponsel, tablet, atau komputer.",
    "when": "Gunakan saat memilih tema. Jika kebanyakan pengunjung memakai ponsel, periksa tampilan situs di ponsel.",
    "care": "Perangkat yang jenisnya tidak bisa diketahui tidak ditampilkan.",
    "like": "Seperti memperhatikan apakah tamu datang berjalan kaki, bersepeda, atau bermobil."
  },
  "help.stats.langs": {
    "t": "Bahasa",
    "what": "Bahasa yang diatur pada ponsel atau komputer pengunjung. Sepuluh teratas ditampilkan.",
    "when": "Gunakan untuk memilih bahasa teks situs dan judul lagu.",
    "care": "Ini bahasa perangkat, belum tentu bahasa yang paling mereka kuasai. **Tidak diketahui** berarti perangkat tidak memberi tahu.",
    "like": "Seperti mendengar bahasa apa yang diucapkan tamu ketika masuk."
  },
  "help.stats.audience": {
    "t": "Pengunjung",
    "what": "Kartu ini menunjukkan negara pengunjung, asal kedatangan, perangkat, bahasa, dan jam kunjungan.",
    "when": "Gunakan untuk memilih tempat membagikan musik dan bahasa tulisan.",
    "click": "Melihatnya tidak mengubah apa pun. Setiap daftar mengikuti periode pilihanmu.",
    "care": "Tidak ada informasi pribadi yang disimpan. Hanya kelompok besar yang dihitung, misalnya \"Korea\" atau \"Ponsel\". Persentase menunjukkan bagian dari daftar yang terlihat.",
    "like": "Seperti pemilik toko yang melihat banyak tamu hari ini datang dari kota sebelah pada malam hari."
  },
  "help.stats.refs": {
    "t": "Asal pengunjung",
    "what": "Cara orang menemukan situsmu, dikelompokkan menjadi alamat langsung atau bookmark, pencarian, sosial dan aplikasi musik, aimusiclist.com, situs lain, serta perpindahan di dalam situs.",
    "when": "Gunakan untuk mengetahui cara membagikan musik yang paling berhasil.",
    "care": "**Langsung / bookmark** termasuk tautan dari aplikasi chat yang tidak memberitahu sumber. **Di dalam situs** berarti berpindah antara halaman dalam situsmu.",
    "like": "Seperti bertanya pada tiap tamu di pintu, 'Dari mana kamu tahu toko saya?'"
  },
  "help.stats.domains": {
    "t": "Situs perujuk teratas",
    "what": "Nama situs web yang paling banyak mengirim pengunjung ke situsmu. Hingga 10 ditampilkan.",
    "when": "Gunakan untuk mengetahui unggahan atau halaman yang mendatangkan orang, lalu mengucapkan terima kasih atau membagikan di sana lagi.",
    "care": "Hanya nama situs yang ditampilkan, bukan halaman tepatnya. Kunjungan dari dalam situsmu sendiri tidak termasuk.",
    "like": "Seperti daftar toko tetangga yang papannya menunjukkan jalan ke tokomu."
  },
  "help.stats.hours": {
    "t": "Waktu dalam sehari",
    "what": "Setiap batang adalah satu jam (0:00 sampai 23:00). Batang tinggi berarti lebih banyak pemutaran atau kunjungan pada jam itu selama periode pilihan.",
    "when": "Gunakan untuk memilih waktu membagikan lagu baru. Bagikan sedikit sebelum jam tersibuk.",
    "click": "Arahkan mouse atau ketuk batang untuk melihat jam dan angkanya.",
    "care": "Jam ditampilkan menurut **waktu komputermu**. Judul menunjukkan selisihnya dari UTC. Di beberapa tempat dengan zona waktu setengah jam, angka tetap memakai UTC.",
    "like": "Seperti mengetahui toko paling ramai saat makan siang dan sepulang sekolah."
  },
  "help.stats.aml.title": {
    "t": "Di aimusiclist.com",
    "what": "Kartu ini memperlihatkan angka lagu di aimusiclist.com: pemutaran, putar valid, suka, tambahan daftar putar, grafik harian, dan negara.",
    "when": "Gunakan untuk melihat kinerja lagu publik di pasar besar.",
    "click": "Melihatnya tidak mengubah apa pun. Kartu angka mengikuti periode pilihan di bagian atas.",
    "care": "Angka diperbarui **sekali sehari** (pagi hari). [[Segarkan sekarang]] tidak mengubahnya. Jika terlihat \"Tidak terhubung\", hubungkan situs ke aimusiclist.com terlebih dahulu. Hanya lagu publik di aimusiclist yang dihitung.",
    "like": "Seperti laporan dari pasar besar tentang kiosmu setiap pagi."
  },
  "help.stats.aml.plays": {
    "t": "Pemutaran aimusiclist",
    "what": "Jumlah lagu-lagumu diputar di aimusiclist.com selama periode pilihan.",
    "when": "Gunakan untuk mengetahui apakah semakin banyak orang mendengarkanmu di pasar besar.",
    "care": "Lebih besar lebih baik. Panah membandingkan dengan hari sebelumnya. Hanya lagu publik di aimusiclist yang dihitung. Jika tiba-tiba menjadi 0, periksa apakah lagu masih publik dan situs masih terhubung.",
    "like": "Seperti jumlah rekaman yang diputar di kiosmu di pasar besar."
  },
  "help.stats.aml.valid": {
    "t": "Pemutaran valid (30 dtk+)",
    "what": "Pemutaran aimusiclist ketika orang mendengarkan sedikitnya 30 detik selama periode pilihan.",
    "when": "Gunakan untuk melihat pendengar sungguhan, bukan yang cepat melewati lagu.",
    "care": "Lebih besar lebih baik. Jika jauh lebih kecil daripada **Pemutaran**, banyak pendengar melewati lagu lebih awal. aimusiclist memakai putar valid untuk tangga yang adil, jadi angka ini penting untuk peringkatmu.",
    "like": "Seperti tamu yang tinggal cukup lama di kios untuk benar-benar mendengar lagu."
  },
  "help.stats.aml.likes": {
    "t": "Suka di aimusiclist",
    "what": "Jumlah suka yang diterima lagu-lagumu di aimusiclist.com selama periode pilihan.",
    "when": "Gunakan untuk mengetahui tanggapan penggemar terhadap lagu baru.",
    "care": "Lebih besar lebih baik. Ini suka di aimusiclist, bukan di situs sendiri. Suka situsmu ada pada kolom **Suka ♥** di tabel Lagu populer.",
    "like": "Seperti hati yang ditinggalkan orang pada papan kiosmu di pasar besar."
  },
  "help.stats.aml.adds": {
    "t": "Ditambahkan ke daftar putar",
    "what": "Jumlah orang memasukkan lagumu ke daftar putar mereka di aimusiclist.com selama periode pilihan.",
    "when": "Gunakan untuk melihat apakah orang ingin mendengarkan lagumu lagi dan lagi.",
    "care": "Lebih besar lebih baik. Menambahkan ke daftar putar adalah tanda kuat seseorang berencana kembali mendengarkan lagu.",
    "like": "Seperti tamu membeli rekaman untuk dibawa pulang, bukan hanya mendengarnya sekali di kios."
  },
  "help.stats.aml.trend": {
    "t": "Pemutaran aimusiclist per hari",
    "what": "Setiap batang mewakili satu hari pemutaran di aimusiclist.com. Batang tinggi berarti lebih banyak pemutaran.",
    "when": "Gunakan untuk melihat hari lagu populer di pasar besar, misalnya minggu lagu masuk tangga.",
    "click": "Arahkan mouse atau ketuk batang untuk melihat tanggal dan angka.",
    "care": "Grafik berakhir pada hari yang sama dengan angka situsmu (kemarin, UTC). Bagian kosong berarti 0 atau tidak ada angka hari itu.",
    "like": "Seperti tumpukan koin untuk kios di pasar besar, satu tumpukan per hari."
  },
  "help.stats.aml.countries": {
    "t": "Negara pendengar aimusiclist",
    "what": "Negara asal orang yang memutar lagumu di aimusiclist.com. Ditampilkan hingga 10, yang terbanyak lebih dulu.",
    "when": "Gunakan untuk menemukan negara tempat musikmu berkembang di pasar besar.",
    "care": "Daftar dibuat oleh aimusiclist dan datang sekali sehari. Bisa berbeda dari negara pengunjung situsmu sendiri.",
    "like": "Seperti pasar besar memberi tahu negara asal tamu kiosmu."
  },
  "help.stats.free.r2_storage": {
    "t": "Ruang penyimpanan",
    "what": "Jumlah ruang yang dipakai lagu dan gambar di penyimpanan Cloudflare. Paket gratis memberi **10 GB**.",
    "when": "Periksa sebelum mengunggah banyak lagu atau file sangat besar.",
    "care": "Jika melebihi jatah gratis, Cloudflare menagih akunmu. Menghapus lagu yang tak diperlukan membebaskan ruang. WAV jauh lebih besar daripada MP3.",
    "like": "Seperti melihat seberapa penuh gudangmu."
  },
  "help.stats.free.workers": {
    "t": "Permintaan situs hari ini",
    "what": "Jumlah permintaan ke situsmu hari ini (halaman, lagu, gambar). Paket gratis mengizinkan **100.000 sehari**.",
    "when": "Periksa saat banyak pengunjung datang, misalnya setelah membagikan tautan secara luas.",
    "care": "Jika melebihi 100.000 sehari, situs **berhenti selama sisa hari itu** (tanpa biaya). Mulai lagi pukul 00:00 UTC (09.00 di Korea).",
    "like": "Seperti pintu toko yang hanya bisa dibuka sekian kali sehari. Setelah penuh, pintu tertutup sampai besok."
  },
  "help.stats.free.r2_class_a": {
    "t": "Penulisan penyimpanan bulan ini",
    "what": "Jumlah penyimpanan ke gudang bulan ini, misalnya saat unggah lagu atau mengubah pengaturan. Paket gratis mencakup **1 juta sebulan**.",
    "when": "Periksa jika sering mengunggah atau mengubah sesuatu.",
    "care": "Penggunaan biasa jauh di bawah batas. Jika terlewati, Cloudflare menagih akunmu. Hitungan dimulai dari awal tiap bulan.",
    "like": "Seperti jumlah kotak yang dimasukkan ke gudang bulan ini."
  },
  "help.stats.free.r2_class_b": {
    "t": "Pembacaan penyimpanan bulan ini",
    "what": "Jumlah pengambilan dari penyimpanan bulan ini, biasanya saat lagu diputar. Paket gratis mencakup **10 juta sebulan**.",
    "when": "Periksa saat lagumu banyak diputar.",
    "care": "Jika terlewati, Cloudflare menagih akunmu. Hitungan diulang tiap bulan. Banyak putar adalah hal baik, jadi bilah bertambah saat kamu populer.",
    "like": "Seperti jumlah rekaman yang diambil dari gudang bulan ini."
  },
  "help.stats.free.ae": {
    "t": "Catatan statistik hari ini",
    "what": "Jumlah baris yang ditulis situs pada buku statistik hari ini (satu baris untuk tiap kunjungan, putar, atau pesan buku tamu). Jatah gratis **100.000 baris sehari**.",
    "when": "Periksa pada hari yang sangat ramai.",
    "care": "Bilah hanya muncul setelah angka hari ini dihitung, misalnya sesudah [[Segarkan sekarang]]. Situs biasa jauh di bawah jatah gratis. Halaman pengunjung dan lagu tidak bergantung pada bilah ini.",
    "like": "Seperti jumlah baris yang ditulis alat penghitung tamu pada buku hari ini."
  },
  "help.stats.free.title": {
    "t": "Sisa paket gratis",
    "what": "Bilah yang menunjukkan besarnya penggunaan paket gratis Cloudflare. Situs berjalan gratis selama semua bilah di bawah 100%.",
    "when": "Lihat sesekali, terutama setelah mengunggah banyak lagu.",
    "click": "Melihatnya tidak mengubah apa pun. Bilah berubah menjadi warna peringatan pada **70%** dan warna bahaya pada **90%**.",
    "care": "Jika mendekati 100%, berhenti mengunggah file besar dan periksa bilah yang penuh. Paket gratis cukup untuk sekitar 1.000 lagu (sekitar 10 MB per lagu) dan beberapa ribu pengunjung sehari.",
    "like": "Seperti meteran air dan listrik toko. Selama masih dalam jatah gratis, tidak ada biaya."
  },
  "help.an.title": {
    "t": "Analisis",
    "what": "Tab ini menunjukkan perubahan lagu dari waktu ke waktu: peringkat naik-turun, lagu yang berkembang, dan berita aimusiclist.com.",
    "when": "Buka sekali seminggu untuk melihat arah perkembangan. Tab **Statistik** menjawab \"berapa banyak\", sedangkan tab ini menjawab \"naik atau turun\".",
    "click": "Melihatnya tidak mengubah situs. Pilih periode di atas agar grafik dan tabel mengikuti.",
    "care": "Situs mencatat satu baris sehari. Karena itu hari pertama belum ada grafik. Mulai esok pagi, grafik terisi hari demi hari. Catatan lebih lama daripada sekitar dua tahun dihapus.",
    "like": "Seperti buku harian toko. Setelah beberapa minggu kamu bisa membacanya kembali untuk melihat perubahan."
  },
  "help.an.period": {
    "t": "Periode (7 / 30 / 90 hari / Semua)",
    "what": "Tombol untuk memilih rentang grafik dan tabel. **Semua** menampilkan seluruh hari yang pernah dicatat.",
    "when": "Pilih 7 hari untuk minggu ini, 30 atau 90 hari untuk pandangan lebih panjang, dan **Semua** untuk riwayat lengkap lagu.",
    "click": "Grafik dan tabel langsung berubah. **Semua** mungkin memerlukan beberapa detik pertama kali karena catatan lama juga dibuka.",
    "care": "Beberapa kotak selalu memakai 7 hari terakhir apa pun pilihanmu: **Lagu saya yang naik**, kolom **Perubahan 7 hari**, dan angka aimusiclist. **Suka dan tambahan daftar putar** paling lama 90 hari.",
    "like": "Seperti memilih jumlah halaman buku harian toko yang dibaca sekaligus."
  },
  "help.an.note.start": {
    "t": "Pencatatan dimulai hari ini",
    "what": "Situsmu baru mulai menulis catatan harian sehingga belum ada riwayat sebelumnya.",
    "when": "Pesan muncul pada hari pertama setelah fitur tersedia.",
    "click": "Tidak perlu melakukan apa pun. Kembali besok. Setiap pagi satu hari ditambahkan pada grafik.",
    "care": "Hari sebelum hari ini tidak dapat diisi belakangan, sehingga grafik dimulai hari ini.",
    "like": "Seperti halaman pertama buku harian baru. Besok ada satu baris tambahan."
  },
  "help.an.note.since": {
    "t": "Dicatat sejak",
    "what": "Hari pertama situs mulai menyimpan catatan harian. Grafik tidak bisa menampilkan hari sebelum tanggal ini.",
    "when": "Lihat jika grafik tampak dimulai terlalu baru.",
    "care": "Catatan disimpan sekitar dua tahun. Bulan yang lebih lama otomatis dihapus.",
    "like": "Seperti tanggal pada halaman pertama buku harian toko."
  },
  "help.an.note.feed": {
    "t": "Data aimusiclist",
    "what": "Sekali sehari situs mengambil laporan kecil dari aimusiclist.com: lagu yang naik, garis tangga, dan berita. Baris ini menunjukkan tanggal laporan yang tersedia.",
    "when": "Lihat jika daftar lagu naik atau berita tampak lama.",
    "click": "Tidak ada yang perlu ditekan. Laporan datang otomatis sekali sehari. Jika belum tiba, periksa lagi besok.",
    "care": "Membuka tab berkali-kali tidak meminta laporan ulang. Hanya laporan tersimpan yang ditampilkan sehingga tidak menambah biaya.",
    "like": "Seperti koran yang diantar pasar besar ke pintu toko tiap pagi."
  },
  "help.an.note.feed_old": {
    "t": "Data hari ini belum tiba",
    "what": "Situs mencoba mengambil laporan hari ini dari aimusiclist.com tetapi gagal. Laporan terakhir tetap ditampilkan.",
    "when": "Pesan ini muncul otomatis.",
    "click": "Tidak perlu melakukan apa pun. Situs mencoba lagi sendiri besok.",
    "care": "Angka situs sendiri tidak terpengaruh. Hanya kotak aimusiclist mungkin tertinggal sehari. Jika berhari-hari, periksa sambungan ke aimusiclist.com.",
    "like": "Seperti pagi ketika koran tidak datang. Koran kemarin masih ada di meja."
  },
  "help.an.news": {
    "t": "Berita aimusiclist",
    "what": "Lima pesan terbaru dari aimusiclist.com. **Laporan tangga** menjelaskan peringkat; **Pengumuman** menjelaskan perubahan layanan.",
    "when": "Baca jika ada titik pada tab **Analisis**. Titik berarti berita baru.",
    "click": "Tekan **Baca selengkapnya** untuk membuka berita lengkap di aimusiclist.com pada tab baru. Membuka tab ini menghapus titik.",
    "care": "Berita datang sekali sehari bersama data aimusiclist. Gambar tidak ditampilkan agar halaman tetap ringan.",
    "like": "Seperti papan pengumuman pasar besar dengan lima poster terbaru."
  },
  "help.an.rank.basis": {
    "t": "Peringkat yang ingin digambar",
    "what": "Pilih dasar peringkat untuk grafik. **Peringkat aimusiclist** adalah posisi di antara semua lagu aimusiclist. **Peringkat situs saya** adalah urutan Populer situsmu. **Keduanya** menggambar dua grafik.",
    "when": "Gunakan peringkat aimusiclist untuk perkembangan di pasar besar, atau peringkat situs untuk kesukaan pengunjung sendiri.",
    "click": "Grafik langsung berubah. Pilihan lagu kembali ke tiga teratas. Pilihan ini juga mengubah **Lagu saya yang naik** dan kolom **Perubahan 7 hari**.",
    "care": "Awalnya memakai peringkat aimusiclist jika ada. Lagu yang tidak pernah punya peringkat tidak muncul dalam daftar pilihan.",
    "like": "Seperti memilih antara papan peringkat pasar besar atau papan toko sendiri."
  },
  "help.an.rank": {
    "t": "Perubahan peringkat",
    "what": "Grafik garis peringkat lagu hari demi hari. Tiap lagu memiliki warna, bentuk garis, dan titik sendiri.",
    "when": "Gunakan untuk melihat lagu naik, turun, atau tetap dan membandingkan beberapa lagu.",
    "click": "Pilih lagu di bawah judul. Arahkan mouse atau ketuk titik untuk melihat lagu, tanggal, dan peringkat.",
    "care": "**Semakin tinggi di grafik semakin baik** (nomor 1 paling atas). Jika jarak peringkat sangat jauh, skala dipadatkan agar semua garis muat; jarak antargaris skala jadi tidak sama.",
    "like": "Seperti peta pendakian gunung. Setiap lagu adalah pendaki dan puncak grafik adalah puncak gunung."
  },
  "help.an.rank.pick": {
    "t": "Pilih lagu",
    "what": "Nama lagu di bawah bagian ini merupakan sakelar. Lagu yang dicentang memiliki garis pada grafik.",
    "when": "Pilih beberapa lagu untuk dibandingkan, seperti lagu terbaru dan terbaik.",
    "click": "Ketuk nama lagu untuk menambah atau menghapusnya. Grafik langsung berubah. Awalnya tiga lagu berperingkat terbaik dipilih.",
    "care": "Kamu bisa memilih **maksimal 8 lagu**. Setelah delapan, nama lain tidak dapat dipilih sampai satu dilepas. Pilihan tidak disimpan dan diatur ulang saat mengganti jenis peringkat.",
    "like": "Seperti memilih pendaki mana yang ingin diikuti pada peta gunung."
  },
  "help.an.rank.gap": {
    "t": "Garis terputus",
    "what": "Garis yang terputus berarti lagu tersebut tidak punya peringkat pada hari itu.",
    "when": "Baca jika garis berhenti lalu dimulai lagi.",
    "care": "Ini normal. Lagu tidak mendapat peringkat jika tidak diputar dalam tujuh hari terakhir atau data harian tidak tiba. Satu titik tanpa garis berarti hanya satu hari mempunyai peringkat.",
    "like": "Seperti pendaki keluar jalur sebentar lalu kembali."
  },
  "help.an.sort": {
    "t": "Urutkan",
    "what": "Memilih urutan tabel: **Paling banyak diputar**, **Waktu mendengarkan**, **Naik** (lonjakan peringkat terbesar minggu ini), atau **Terbaru** (unggahan terbaru dulu).",
    "when": "Gunakan Naik untuk menemukan lagu yang cocok dibagikan sekarang, atau Terbaru untuk memeriksa lagu baru.",
    "click": "Urutan tabel langsung berubah. Tidak ada yang disimpan.",
    "care": "Lagu dengan nilai sama diurutkan menurut judul. Dalam **Naik**, lagu yang baru mendapat peringkat (NEW) berada setelah lagu dengan perubahan nyata, dan yang tidak berperingkat paling belakang.",
    "like": "Seperti menyusun rak berdasarkan penjualan, durasi mendengarkan, tren, atau tanggal masuk."
  },
  "help.an.table": {
    "t": "Sekilas lagu saya",
    "what": "Tabel semua lagu beserta pemutaran, waktu mendengarkan, peringkat aimusiclist, perubahan tujuh hari, dan tanggal unggah.",
    "when": "Gunakan untuk menemukan lagu terkuat dan lagu yang mulai naik.",
    "click": "Gunakan tombol urutan di samping judul. Maksimal 200 lagu ditampilkan.",
    "care": "Hanya lagu dengan audio yang ditampilkan. Pada ponsel kecil, kolom **Diunggah** disembunyikan agar cukup ruang.",
    "like": "Seperti daftar lengkap harga setiap rekaman pada rak toko."
  },
  "help.an.own_off": {
    "t": "Pemutaran situs saya tidak dihitung",
    "what": "Situsmu belum bisa menghitung pemutaran sendiri. Karena itu kolom **Pemutaran** memakai angka aimusiclist tujuh hari terakhir sebagai gantinya.",
    "when": "Pesan muncul otomatis.",
    "click": "Tidak ada yang perlu ditekan. Jika mengaktifkan perhitungan putar (lihat pemberitahuan pada tab **Statistik**), kolom beralih ke angka situs sendiri.",
    "care": "Dalam keadaan ini Pemutaran tidak mengikuti tombol periode. Selalu memakai tujuh hari terakhir.",
    "like": "Toko tanpa penghitung pintu meminjam angka pasar besar untuk sementara."
  },
  "help.an.col.plays": {
    "t": "Pemutaran",
    "what": "Jumlah lagu diputar di situsmu selama periode pilihan.",
    "when": "Gunakan untuk menemukan lagu paling sering didengarkan.",
    "care": "Lebih besar lebih baik. Pemutaran melalui aimusiclist tidak termasuk. – berarti tidak ada angka untuk lagu ini.",
    "like": "Seperti jumlah rekaman diputar di pemutar toko."
  },
  "help.an.col.time": {
    "t": "Waktu mendengarkan",
    "what": "Perkiraan total waktu orang mendengarkan lagu. Dihitung dengan **pemutaran × durasi lagu**.",
    "when": "Gunakan untuk membandingkan lagu pendek dan panjang dengan lebih adil.",
    "care": "Ini hanya **perkiraan**. Situs tidak tahu jika pendengar berhenti di tengah lagu sehingga waktu sebenarnya bisa lebih pendek. Lagu tanpa durasi tersimpan menunjukkan –.",
    "like": "Seperti memperkirakan lama pemutar bekerja: jumlah putar dikali durasi satu rekaman."
  },
  "help.an.col.rank": {
    "t": "Peringkat aimusiclist",
    "what": "Posisi terakhir lagu di antara semua lagu aimusiclist.",
    "when": "Gunakan untuk melihat lagu mana yang paling baik di pasar besar.",
    "care": "Angka lebih kecil lebih baik. Berubah sekali seminggu (Jumat). – berarti belum ada peringkat, normal bagi lagu yang tak diputar minggu ini.",
    "like": "Seperti nomor rekamanmu pada daftar lengkap pasar besar."
  },
  "help.an.col.rise": {
    "t": "Perubahan 7 hari",
    "what": "Jumlah posisi peringkat lagu bergerak dibanding tujuh hari lalu.",
    "when": "Gunakan untuk menemukan lagu yang mulai naik.",
    "click": "Tidak ada yang perlu ditekan. ▲ berarti naik sekian posisi, ▼ berarti turun, – tetap. **NEW** berarti belum berperingkat tujuh hari lalu.",
    "care": "▲ adalah hasil baik. Memakai jenis peringkat pilihan di **Perubahan peringkat** (aimusiclist atau situs saya). Jika data satu hari hilang, digunakan hari terdekat dari tiga hari sebelumnya.",
    "like": "Seperti melihat berapa anak tangga gunung yang dinaiki pendaki minggu ini."
  },
  "help.an.col.uploaded": {
    "t": "Diunggah",
    "what": "Tanggal lagu diunggah ke situsmu.",
    "when": "Gunakan untuk membandingkan lagu baru dan lagu lama.",
    "care": "Pada layar ponsel kecil, kolom ini tersembunyi. Putar ponsel mendatar atau gunakan komputer untuk melihatnya.",
    "like": "Seperti tanggal yang dicap pada kotak rekaman ketika tiba di toko."
  },
  "help.an.mine": {
    "t": "Lagu saya yang naik",
    "what": "Maksimal lima lagumu yang peringkatnya paling banyak naik minggu ini, dengan grafik kecil 14 hari terakhir.",
    "when": "Gunakan untuk memilih lagu yang sebaiknya dibagikan sekarang. Lagu yang sudah naik bisa berkembang lebih cepat dengan sedikit dorongan.",
    "click": "Tidak ada yang perlu ditekan. Setiap kartu menunjukkan kenaikan posisi dan peringkat dari tujuh hari lalu sampai sekarang.",
    "care": "Selalu memakai **7 hari terakhir**. Mengikuti jenis peringkat pilihanmu pada **Perubahan peringkat**, seperti ditulis di akhir baris kecil bawah judul. Hanya lagu yang benar-benar naik yang ditampilkan.",
    "like": "Seperti sudut \"sedang populer minggu ini\" di tokomu."
  },
  "help.an.aml.genre": {
    "t": "Genre",
    "what": "Memilih genre untuk melihat hanya lagu yang naik dalam genre tersebut. **Semua genre** menunjukkan seluruh daftar.",
    "when": "Pilih genremu untuk melihat lagu yang menjadi pesaing.",
    "click": "Daftar langsung berubah. Tidak ada yang disimpan.",
    "care": "Hanya genre yang memiliki lagu naik hari ini yang muncul.",
    "like": "Seperti berjalan di lorong R&B saja di pasar besar."
  },
  "help.an.aml": {
    "t": "Sedang naik di aimusiclist",
    "what": "Lagu semua orang di aimusiclist yang saat ini cepat naik peringkat. Lagumu sendiri ditandai **Lagu saya**.",
    "when": "Gunakan untuk mengetahui gaya musik yang sedang populer dan menemukan artis untuk dipelajari.",
    "click": "Tekan judul untuk membuka halaman lagu di aimusiclist pada tab baru dan mendengarkannya. Lagu tidak diputar pada halaman ini.",
    "care": "Daftar datang sekali sehari bersama data aimusiclist. ▲ menunjukkan jumlah posisi naik, **NEW** berarti baru masuk. Angka pendengar menunjukkan jumlah orang yang mendengarkan.",
    "like": "Seperti berjalan di pasar besar untuk melihat kios mana yang antreannya panjang hari ini."
  },
  "help.an.s1": {
    "t": "Awal perkembangan lagu baru",
    "what": "Grafik jumlah pemutaran di situsmu yang terkumpul selama tujuh hari pertama setelah setiap lagu diunggah. Menampilkan hingga enam lagu terbaru.",
    "when": "Gunakan untuk membandingkan awal lagu baru dengan lagu sebelumnya. Apakah awal lagu ini lebih kuat?",
    "click": "Arahkan mouse atau ketuk titik untuk melihat lagu, hari, dan total putar. Daftar di bawah grafik menunjukkan garis untuk tiap lagu.",
    "care": "Hanya lagu yang diunggah **setelah pencatatan dimulai** yang muncul. Jika situs belum bisa menghitung pemutaran sendiri, kotak ini kosong.",
    "like": "Seperti perlombaan saat setiap rekaman baru mulai dari nol dan kamu melihat siapa yang melaju paling jauh dalam minggu pertama."
  },
  "help.an.s2": {
    "t": "Jarak ke Top 100",
    "what": "Untuk hingga lima lagumu, bagian ini memperkirakan seberapa jauh lagu dari tangga Top 100 aimusiclist.",
    "when": "Gunakan untuk membuat target, misalnya \"sekitar 20 pendengar lagi minggu ini\".",
    "click": "Tidak ada yang perlu ditekan. Setiap baris menunjukkan apakah lagu sudah masuk Top 100, kira-kira berapa pendengar lagi yang diperlukan, atau apakah sudah dekat.",
    "care": "Ini hanya **perkiraan**, bukan janji. Tangga lagu sesungguhnya mempertimbangkan hal lain, jadi lagu yang dekat belum tentu masuk. Jika Top 100 belum penuh, lagu yang memenuhi ketentuan bisa masuk.",
    "like": "Seperti papan di jalur mendaki: \"sekitar 200 langkah lagi ke puncak\"."
  },
  "help.an.s2.note": {
    "t": "Mengapa hanya perkiraan",
    "what": "aimusiclist tidak memberi tahu situsmu jumlah pendengar yang tepat. Jadi bagian ini memperkirakan dari **pemutaran valid** aimusiclist selama tujuh hari terakhir.",
    "when": "Baca jika angka di kotak ini terasa aneh.",
    "care": "aimusiclist menghitung **satu pemutaran per orang per hari**. Jadi jumlah pendengar berbeda yang sebenarnya bisa lebih kecil dari jumlah putar. Anggap hasil ini petunjuk kasar saja.",
    "like": "Seperti memperkirakan jumlah pengunjung dari jejak kaki. Ada orang yang lewat dua kali."
  },
  "help.an.s3": {
    "t": "Suka dan tambahan daftar putar",
    "what": "Jumlah suka dan tambahan daftar putar yang diterima lagu-lagumu di aimusiclist hari demi hari, dan lagu mana yang terbanyak.",
    "when": "Gunakan untuk menemukan lagu yang benar-benar disukai, bukan sekadar sekali didengar.",
    "click": "Arahkan mouse atau ketuk batang untuk melihat tanggal dan angka.",
    "care": "Angka lebih besar lebih baik. Menampilkan paling lama **90 hari terakhir**, meskipun kamu memilih **Semua**. Angka datang sekali sehari dari aimusiclist.",
    "like": "Seperti menghitung hati dan stiker \"bawa pulang\" pada kiosmu di pasar besar."
  },
  "help.an.s3.likes": {
    "t": "Suka di aimusiclist",
    "what": "Setiap batang mewakili satu hari dan menunjukkan jumlah suka untuk semua lagumu di aimusiclist pada hari itu.",
    "when": "Gunakan untuk melihat apakah suka bertambah setelah merilis atau membagikan lagu.",
    "care": "Lebih besar lebih baik. Ini hanya suka di aimusiclist. Suka di situsmu sendiri ada di tab **Statistik**.",
    "like": "Seperti hitungan hati harian pada papan kios."
  },
  "help.an.s3.adds": {
    "t": "Ditambahkan ke daftar putar",
    "what": "Setiap batang mewakili satu hari dan menunjukkan berapa kali orang menambahkan lagumu ke daftar putar aimusiclist hari itu.",
    "when": "Gunakan untuk mengetahui apakah orang ingin menyimpan dan mendengarkan kembali lagu-lagumu.",
    "care": "Lebih besar lebih baik. Penambahan ke daftar putar merupakan salah satu tanda terkuat bahwa orang menyukai lagu.",
    "like": "Seperti menghitung tamu yang membeli rekaman untuk dibawa pulang setiap hari."
  },
  "help.an.s3.top": {
    "t": "Paling banyak disukai dan ditambahkan",
    "what": "Hingga lima lagumu yang memperoleh suka (♥) dan tambahan daftar putar (+) terbanyak di aimusiclist selama tujuh hari terakhir.",
    "when": "Gunakan untuk memilih lagu untuk unggahan berikutnya atau menaruhnya di urutan awal album.",
    "care": "Selalu memakai **7 hari terakhir**. Lagu diurutkan berdasarkan jumlah suka dan tambahan daftar putar yang digabung.",
    "like": "Seperti rak \"favorit penggemar\" di tokomu."
  },
  "help.an.s4": {
    "t": "Posisi saya dalam genre",
    "what": "Untuk hingga enam lagu, bagian ini menunjukkan peringkat di tangga aimusiclist sesuai genre masing-masing dan persentase teratas di antara lagu.",
    "when": "Gunakan untuk melihat seberapa kuat lagumu dibandingkan lagu dengan gaya yang sama.",
    "click": "Tidak ada yang perlu ditekan. **di Top 20** ditambahkan jika lagu masuk 20 besar dalam genrenya.",
    "care": "Peringkat dan persentase lebih kecil lebih baik (1% teratas sangat bagus). Jika ukuran genre tidak diketahui, persentase dihitung di antara semua lagu aimusiclist. Lagu tanpa peringkat genre akan diberi keterangan.",
    "like": "Seperti mengetahui posisimu di rak R&B pasar besar, bukan keseluruhan pasar."
  },
  "help.site.seo": {
    "t": "Tampilkan situs di hasil pencarian (Google)",
    "what": "Pengaturan untuk mesin pencari seperti Google. Setiap lagu dan album di situsmu punya halaman sendiri yang bisa ditemukan lewat pencarian.",
    "when": "Buka bagian ini jika ingin menyembunyikan situsmu dari hasil pencarian atau mendaftarkannya ke Google Search Console.",
    "click": "Judul ini hanya menjelaskan kartu pengaturan. Sakelar dan langkah-langkah di bawah yang bisa digunakan.",
    "care": "Situsmu mungkin baru muncul di Google setelah beberapa hari hingga beberapa minggu. Ini tidak mengubah apa pun di aimusiclist.com.",
    "like": "Seperti menaruh nama toko dan setiap rekamanmu di peta kota."
  },
  "help.site.seo_switch": {
    "t": "Tampilkan lagu dan album saya di hasil pencarian",
    "what": "Mengizinkan mesin pencari menampilkan halaman beranda, lagu, dan albummu. Awalnya ini aktif.",
    "when": "Biarkan aktif jika kamu ingin pendengar baru menemukanmu lewat pencarian. Matikan hanya jika kamu ingin situsmu lebih privat.",
    "click": "Perubahan langsung tersimpan saat diklik. Saat nonaktif, halamanmu meminta mesin pencari agar tidak menampilkannya, dan peta situs untuk pencarian akan dihapus.",
    "care": "Halaman yang sudah muncul di hasil pencarian mungkin butuh waktu untuk hilang. Orang yang tahu alamat situsmu tetap bisa mengunjunginya.",
    "like": "Seperti papan \"terbuka untuk umum\" di pintu toko."
  },
  "help.site.gsc": {
    "t": "Daftarkan situs saya ke Google Search Console",
    "what": "Petunjuk langkah demi langkah untuk memberi tahu Google tentang situsmu lewat akun Google milikmu.",
    "when": "Lakukan sekali jika ingin Google lebih cepat menemukan lagu baru dan ingin tahu bagaimana orang mencarimu.",
    "click": "Buka petunjuknya lalu ikuti dari atas ke bawah. Kamu hanya perlu melakukannya sekali.",
    "care": "Kamu memerlukan akun Google. Jika ada masalah, ulangi langkahnya — situsmu tidak akan rusak.",
    "like": "Seperti mengisi buku tamu di kantor peta kota supaya mereka lebih sering memeriksa tokomu."
  },
  "help.site.gsc_open": {
    "t": "Buka Google Search Console",
    "what": "Membuka halaman milik Google di tab baru.",
    "when": "Tekan pada langkah pertama.",
    "click": "Masuk di sana dengan akun Google milikmu, lalu kembali ke tab ini untuk langkah berikutnya.",
    "care": "Ini halaman Google, bukan bagian dari situsmu."
  },
  "help.site.gsc_copy": {
    "t": "Salin",
    "what": "Menyalin alamat yang ada di sebelahnya.",
    "when": "Tekan saat langkahnya meminta kamu menempel alamat situs atau alamat peta situs.",
    "click": "Lalu tempel di kotak pada halaman Search Console.",
    "care": "Jika fitur salin tidak bekerja di perangkatmu, jendela kecil akan menampilkan alamat itu agar bisa kamu salin sendiri."
  },
  "help.site.gsc_input": {
    "t": "Tag verifikasi Google",
    "what": "Kotak untuk teks dari Google yang membuktikan situs ini milikmu.",
    "when": "Tempel di sini teks yang kamu salin dari [[HTML tag]] di Search Console.",
    "click": "Kamu bisa menempel seluruh teks tanpa mengubahnya. Situsmu hanya menyimpan bagian yang diperlukan.",
    "care": "Kosongkan kotak lalu tekan Simpan untuk menghapusnya.",
    "like": "Seperti tanda nama yang memberi tahu Google bahwa toko ini milikmu."
  },
  "help.site.gsc_save": {
    "t": "Simpan",
    "what": "Menyimpan teks verifikasi dan memasangnya di beranda situsmu.",
    "when": "Tekan setelah menempel teks, sebelum menekan [[Verify]] di Search Console.",
    "click": "Sebentar lagi tanda centang akan muncul. Lalu kembali ke Search Console dan tekan [[Verify]].",
    "care": "Jika muncul pesan merah, salin lagi teks [[HTML tag]] dan tempel seluruhnya."
  },
});
