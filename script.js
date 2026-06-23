const validCodes = [
    "JAGAD-SUKMA-001", "SASMITA-JATI-002", "WAHYU-AGUNG-003", "PUSAKA-KALA-004", "AKSA-PADMA-005",
    "CAKRA-MANTRA-006", "BUMI-LANGIT-007", "KANJENG-DEWA-008", "HYANG-SUCI-009", "MISTIK-ARKA-010",
    "JAGAD-KEMBANG-011", "SASMITA-WETON-012", "WAHYU-SARI-013", "PUSAKA-BANYU-014", "AKSA-KENCANA-015",
    "CAKRA-BUANA-016", "BUMI-MAYA-017", "KANJENG-RATU-018", "HYANG-WIDHI-019", "MISTIK-BAYU-020",
    "JAGAD-PRAMANA-021", "SASMITA-KUNCORO-022", "WAHYU-LINTANG-023", "PUSAKA-SANG-024", "AKSA-GIRI-025",
    "CAKRA-NUR-026", "BUMI-AMERTA-027", "KANJENG-PRABU-028", "HYANG-AGNI-029", "MISTIK-KALA-030",
    "JAGAD-WICAKSANA-031", "SASMITA-PAGELARAN-032", "WAHYU-SEMBODRO-033", "PUSAKA-RATU-034", "AKSA-WANARA-035",
    "CAKRA-TUNGGAL-036", "BUMI-KENCANA-037", "KANJENG-RAJA-038", "HYANG-WENANG-039", "MISTIK-GARDA-040",
    "JAGAD-BASKARA-041", "SASMITA-GATRA-042", "WAHYU-PRAMESTI-043", "PUSAKA-BAYA-044", "AKSA-WIRA-045",
    "CAKRA-JALA-046", "BUMI-KUSUMA-047", "KANJENG-SUKMA-048", "HYANG-KUSUMO-049", "MISTIK-GURU-050",
    "JAGAD-KUSUMA-051", "SASMITA-LOKA-052", "WAHYU-KUSUMA-053", "PUSAKA-NAGA-054", "AKSA-DIPA-055",
    "CAKRA-YOGA-056", "BUMI-WIRA-057", "KANJENG-AJI-058", "HYANG-BUANA-059", "MISTIK-PURI-060",
    "JAGAD-WIRA-061", "SASMITA-WIRA-062", "WAHYU-JAYA-063", "PUSAKA-SARI-064", "AKSA-NUR-065",
    "CAKRA-SARI-066", "BUMI-JAYA-067", "KANJENG-GIRI-068", "HYANG-JATI-069", "MISTIK-KUSUMA-070",
    "JAGAD-TUNGGAL-071", "SASMITA-KALA-072", "WAHYU-BUANA-073", "PUSAKA-WIRA-074", "AKSA-BANYU-075",
    "CAKRA-WIRA-076", "BUMI-GIRI-077", "KANJENG-NAGA-078", "HYANG-GURU-079", "MISTIK-WIRA-080",
    "JAGAD-NUR-081", "SASMITA-SARI-082", "WAHYU-GIRI-083", "PUSAKA-JAYA-084", "AKSA-KALA-085",
    "CAKRA-BUANA-086", "BUMI-SARI-087", "KANJENG-WIRA-088", "HYANG-WIRA-089", "MISTIK-JATI-090",
    "JAGAD-SARI-091", "SASMITA-NAGA-092", "WAHYU-WIRA-093", "PUSAKA-GIRI-094", "AKSA-JATI-095",
    "CAKRA-WIRA-096", "BUMI-WIRA-097", "KANJENG-SARI-098", "HYANG-NAGA-099", "MISTIK-SARI-100", "SATRIA-UTAMA-1042"
];

document.addEventListener("DOMContentLoaded", () => {
    
    // --- FITUR WAKTU REAL-TIME (INDONESIA) ---
    const timeDisplay = document.getElementById("realTimeDisplay");
    
    const updateTime = () => {
        const now = new Date();
        const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
        const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
        
        const dayName = days[now.getDay()];
        const day = now.getDate();
        const monthName = months[now.getMonth()];
        const year = now.getFullYear();
        
        // Memastikan jam dan menit selalu 2 digit (misal: 09.05)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        
        timeDisplay.textContent = `${dayName}, ${day} ${monthName} ${year} Pukul ${hours}.${minutes} WIB`;
    };

    // Jika elemen waktu ada, jalankan fungsinya setiap 1 detik
    if (timeDisplay) {
        updateTime(); // Panggil pertama kali agar tidak kosong
        setInterval(updateTime, 1000); // Perbarui detik demi detik
    }
    // -----------------------------------------
    // Matikan fitur penghapus memori ini dengan menambahkan tanda // di depannya
    // agar pembeli tidak perlu login terus-menerus setiap buka aplikasi
    // localStorage.removeItem("kamusMimpiUnlocked"); 
// --- AMBIL ELEMEN DARI HTML ---
    const unlockScreen = document.getElementById("unlockScreen");
    const unlockBtn = document.getElementById("unlockBtn");
    const unlockInput = document.getElementById("unlockCodeInput");
    const unlockError = document.getElementById("unlockError");
    
    // Elemen Onboarding VIP Baru
    const onboardingScreen = document.getElementById("onboardingScreen");
    const startAppBtn = document.getElementById("startAppBtn");

    // --- LOGIKA UNTUK MEMBUKA APLIKASI UTAMA ---
    const tampilkanKontenAplikasi = () => {
        document.body.classList.remove("locked"); // Lepas kunci body
        
        // Paksa semua elemen utama muncul
        const mainContainer = document.querySelector(".container");
        const footer = document.querySelector("footer");
        const themeBtn = document.getElementById("themeBtn");
        
        if (mainContainer) mainContainer.style.display = "block";
        if (footer) footer.style.display = "block";
        if (themeBtn) themeBtn.style.display = "block";
    };

    // --- LOGIKA UTAMA SETELAH KODE SUKSES ---
    const bukaAplikasi = () => {
        unlockScreen.style.display = "none"; 
        
        // UBAH BAGIAN INI: 
        // Kita paksa onboarding muncul setiap saat, 
        // jadi kita hapus pengecekan localStorage.getItem("onboardingDone")
        
        if (onboardingScreen) {
            onboardingScreen.style.display = "flex"; // Selalu munculkan sambutan
        } else {
            tampilkanKontenAplikasi(); // Jika onboarding tidak ada, langsung buka
        }
    };

    // --- AKSI SAAT TOMBOL "MULAI PENJELAJAHAN" DI LAYAR SAMBUTAN VIP DITEKAN ---
    if (startAppBtn) {
        startAppBtn.addEventListener("click", () => {
            localStorage.setItem("onboardingDone", "true"); // Catat di memori HP agar tidak muncul lagi
            if (onboardingScreen) onboardingScreen.style.display = "none"; // Sembunyikan sambutan VIP
            tampilkanKontenAplikasi(); // Buka aplikasi utamanya
        });
    }

    // Cek apakah HP ini sudah punya izin (sudah pernah masuk)
    if (localStorage.getItem("kamusMimpiUnlocked") === "true") {
        bukaAplikasi();
    } else {
        document.body.classList.add("locked");
        unlockScreen.style.display = "flex";
    }

    // Ketika Tombol Ditekan
    unlockBtn.addEventListener("click", () => {
        const userCode = unlockInput.value.trim().toUpperCase();
        
        if (validCodes.includes(userCode)) {
            // Jika Benar
            localStorage.setItem("kamusMimpiUnlocked", "true");
            bukaAplikasi(); // Buka mulus tanpa alert agar tidak freeze
        } else {
            // Jika Salah
            unlockError.textContent = "Kode tidak valid! Silakan periksa kembali atau hubungi Ki Sasmita Jati.";
            unlockError.style.display = "block";
        }
    });
});

// DATABASE UTAMA ARTI MIMPI - MULAI DARI NOL
const dreamData = [
    { title: "Mimpi Rambutnya Putih", category: "tubuh", desc: "Akan cepat beruntung dalam usaha dan akan berumur panjang." },
    { title: "Mimpi Rambutnya Merah", category: "tubuh", desc: "Akan mempunyai perasaan hati yang tidak enak." },
    { title: "Mimpi Rambut Menutup Mata", category: "tubuh", desc: "Akan mengalami celaan atau ejekan mendadak." },
    { title: "Mimpi Melihat Rambut Palsu", category: "tubuh", desc: "Akan ditipu orang yang disangka teman sendiri." },
    { title: "Mimpi Rambut Seketika Lebat", category: "tubuh", desc: "Akan memperoleh kegembiraan, bila sudah berkeluarga akan memperoleh anak." },
    { title: "Mimpi Rambut Berjatuhan", category: "tubuh", desc: "Alamat kurang baik, akan bersedih hati." },
    { title: "Mimpi Potong Rambut (Bercukur)", category: "tubuh", desc: "Ada diantara sanak famili yang terganggu kesehatannya atau akan terpisah / bercerai dengan kekasihnya." },
    { title: "Mimpi Menyisir Rambut", category: "tubuh", desc: "Kesengsaraan dirinya akan segera berubah." },
    { title: "Mimpi Mencat/Mewarnai Rambut Orang Lain", category: "tubuh", desc: "Akan memperjuangkan sesuatu tetapi sia-sia." },
    { title: "Mimpi Mencat/Mewarnai Rambut Sendiri", category: "tubuh", desc: "Harapan-harapan yang baik dalam bidang usaha." },
    { title: "Mimpi Mencuci Rambut (Keramas)", category: "tubuh", desc: "Akan mendapat gangguan hidup." },
    { title: "Mimpi Memotong Rambut Orang Lain", category: "tubuh", desc: "Akan memperoleh keuntungan atas biaya orang lain." },
    { title: "Mimpi Memiliki Rambut Hitam Lebat", category: "tubuh", desc: "Akan memperoleh kesehatan yang baik." },
    { title: "Mimpi Mengepang Rambut", category: "tubuh", desc: "Suatu persahabatan yang retak akan pulih kembali." },
    { title: "Mimpi Melihat Rambut Tumbuh di Tangan", category: "tubuh", desc: "Suatu alamat kurang baik." },
    { title: "Mimpi Melihat Rambut Keriting", category: "tubuh", desc: "Akan memperoleh keberhasilan dalam masalah cinta." },
    { title: "Mimpi Melihat Lelaki Botak", category: "tubuh", desc: "Akan memperoleh penghargaan dan kekayaan." },
    { title: "Mimpi Melihat Wanita Botak", category: "tubuh", desc: "Tanda kebencian." },
    { title: "Mimpi Kepala Timbul Luka Banyak", category: "tubuh", desc: "Akan memperoleh keuntungan." },
    { title: "Mimpi Kepala Keluar Tanduk", category: "tubuh", desc: "Akan ada perselisihan faham." },
    { title: "Mimpi Muka Masam atau Cemberut", category: "tubuh", desc: "Akan mengalami kerugian." },
    { title: "Mimpi Muka Cantik Molek", category: "tubuh", desc: "Akan bercinta dan bahagia." },
    { title: "Mimpi Muka Hitam / Bernoda Hitam", category: "tubuh", desc: "Akan kurang baik dalam sehari dua hari." },
    { title: "Mimpi Bercermin Muka", category: "tubuh", desc: "Harus berhati-hati dalam segala tindakan." },
    { title: "Mimpi Melihat Wajah Sendiri", category: "tubuh", desc: "Akan muncul kesedihan." },
    { title: "Mimpi Melihat Wajah yang Hitam", category: "tubuh", desc: "Akan panjang umur." },
    { title: "Mimpi Wajah yang Tersenyum", category: "tubuh", desc: "Akan memperoleh kesenangan dan teman baru." },
    { title: "Mimpi Melihat Wajah Jelek Tidak Karuan", category: "tubuh", desc: "Akan muncul bencana." },
    { title: "Mimpi Membasuh Wajah Sendiri", category: "tubuh", desc: "Akan memperoleh masa depan yang lebih baik." },
    { title: "Mimpi Melihat Wajah Sendiri Merah Padam", category: "tubuh", desc: "Anda sedang jatuh cinta, tetapi dirahasiakan." },
    { title: "Mimpi Melihat Wajah Orang Merah Padam", category: "tubuh", desc: "Seseorang akan menyatakan cinta kepada anda." },
    { title: "Mimpi Berjenggot Panjang", category: "tubuh", desc: "Akan bertapa atau berpuasa." },
    { title: "Mimpi Rambutnya Digunting Orang", category: "tubuh", desc: "Akan berpisah dengan kekasihnya." },
    { title: "Mimpi Melihat Mukanya Bergerak-gerak", category: "tubuh", desc: "Akan kesukaran memperoleh rezeki." },
    { title: "Mimpi Mempunyai Janggut", category: "tubuh", desc: "Akan sehat, segar bugar." },
    { title: "Mimpi Memotong Janggut", category: "tubuh", desc: "Akan terjadi beberapa kerugian." },
    { title: "Mimpi Melihat Janggut Berwarna Merah", category: "tubuh", desc: "Waspadalah terhadap gangguan dari teman berhati palsu (pengkhianat)." },
    { title: "Mimpi Sepasang Mata Biru", category: "tubuh", desc: "Akan merasakan atau mendapatkan kasih sayang yang agung." },
    { title: "Mimpi Sepasang Mata Hitam", category: "tubuh", desc: "Peringatan agar anda waspada / berhati-hati." },
    { title: "Mimpi Sepasang Mata Juling", category: "tubuh", desc: "Akan kekurangan uang." },
    { title: "Mimpi Pancaran Mata Hangat/Bernafsu", category: "tubuh", desc: "Akan kecewa dalam bercinta." },
    { title: "Mimpi Sepasang Mata Hijau", category: "tubuh", desc: "Akan memperoleh teman yang setia." },
    { title: "Mimpi Tidak Mempunyai Mata", category: "tubuh", desc: "Alamat sudah dekat ajalnya." },
    { title: "Mimpi Melihat Mata Orang Lain", category: "tubuh", desc: "Akan memperoleh emas atau perak." },
    { title: "Mimpi Melihat Seorang yang Buta", category: "tubuh", desc: "Akan ada sahabat yang meminta pertolongan pada anda." },
    { title: "Mimpi Diri Sendiri Bermata Buta", category: "tubuh", desc: "Anda harus berhati-hati dalam pekerjaan." },
    { title: "Mimpi Bermacam-macam (Berubah Rupa)", category: "kejadian", desc: "Akan bermain cinta kepada dengan orang yang diidam-idamkan (lama dirindukan)." },
    { title: "Mimpi Hidung Berdarah (Mimisan)", category: "tubuh", desc: "Akan mengalami keberuntungan walau sekedarnya." },
    { title: "Mimpi Melihat Seseorang Berhidung Besar", category: "tubuh", desc: "Alamat anda harus memikirkan diri sendiri." },
    { title: "Mimpi Melihat Diri Sendiri Berhidung Besar", category: "tubuh", desc: "Anda jangan pedulikan orang lain marah, sewaktu anda sedang menyelesaikan tugas yang sulit." },
    { title: "Mimpi Sukar Bernafas Melalui Hidung", category: "tubuh", desc: "Akan memperoleh kesulitan tertentu." },
    { title: "Mimpi Melihat Bibir Merah Tersenyum", category: "tubuh", desc: "Akan terjadi persahabatan yang hangat atau percintaan yang mesra." },
    { title: "Mimpi Melihat Bibir Jelek / Cemberut", category: "tubuh", desc: "Akan terjadi persahabatan atau cinta yang memudar." },
    { title: "Mimpi Melihat Bibir Terkatub Rapat", category: "tubuh", desc: "Akan menderita kerugian karena rasa iri hati." },
    { title: "Mimpi Melihat Mulut Seorang Bayi", category: "tubuh", desc: "Akan memperoleh teman yang setia." },
    { title: "Mimpi Melihat Bibirnya Sendiri", category: "tubuh", desc: "Alamat harus waspada dalam berbicara." },
    { title: "Mimpi Tak Bisa Berbicara (Bisu)", category: "tubuh", desc: "Kata-kata anda tidak dipercaya oleh orang lain." },
    { title: "Mimpi Melihat Telinga", category: "tubuh", desc: "Akan didesas-desuskan orang lain tentang anda." },
    { title: "Mimpi Melihat Seorang Bertelinga Lebar", category: "tubuh", desc: "Permohonan anda akan dikabulkan." },
    { title: "Mimpi Diri Sendiri Bertelinga Besar", category: "tubuh", desc: "Akan memperoleh kegembiraan." },
    { title: "Mimpi Telinga Sendiri Diperban", category: "tubuh", desc: "Kepercayaan anda akan disalahgunakan orang." },
    { title: "Mimpi Membersihkan Telinga Sendiri", category: "tubuh", desc: "Persoalan anda akan terbukti." },
    { title: "Mimpi Menjewer Telinga Seseorang", category: "tubuh", desc: "Akan susah, karena kejahatan kekasih anda." },
    { title: "Mimpi Telinga Anda Dijewer", category: "tubuh", desc: "Peringatan suatu janji yang tidak anda tepati." },
    { title: "Mimpi Mempunyai Pipi Merah Segar", category: "tubuh", desc: "Akan memperoleh harapan yang baik." },
    { title: "Mimpi Mempunyai Pipi Pucat", category: "tubuh", desc: "Akan merasa kekhawatiran atau kesedihan." },
    { title: "Mimpi Memakai Lipstik (Pemerah Bibir)", category: "tubuh", desc: "Akan memperoleh sesuatu yang kurang menyenangkan." },
    { title: "Mimpi Mencabut/Mencukur Bulu Ketiak", category: "tubuh", desc: "Alamat lepas dari hutangnya." },
    { title: "Mimpi Air Ludah Bercampur Riyak", category: "tubuh", desc: "Alamat akan kehilangan harta." },
    { title: "Mimpi Tangan Anda Terbakar", category: "tubuh", desc: "Akan ada orang yang iri kepada anda." },
    { title: "Mimpi Memandang Tangan Sendiri", category: "tubuh", desc: "Akan muncul kesedihan atau duka cita." },
    { title: "Mimpi Memiliki Tangan Kuat dan Indah", category: "tubuh", desc: "Akan dapat menyelesaikan usaha yang menguntungkan." },
    { title: "Mimpi Melihat Tangan yang Kecil", category: "tubuh", desc: "Akan mempunyai teman atau pelayan yang curang." },
    { title: "Mimpi Mencuci Tangan", category: "tubuh", desc: "Akan memperoleh nama baik yang termasyhur." },
    { title: "Mimpi Memiliki Tangan yang Bengkak", category: "tubuh", desc: "Akan cepat tersinggung dan marah." },
    { title: "Mimpi Melihat Tangan yang Terluka", category: "tubuh", desc: "Akan mengalami keadaan yang kurang menguntungkan atau merugikan." },
    { title: "Mimpi Kehilangan Tangan Kiri", category: "tubuh", desc: "Akan kehilangan ibu." },
    { title: "Mimpi Kehilangan Tangan Kanan", category: "tubuh", desc: "Akan kehilangan ayah." },
    { title: "Mimpi Menjabat Tangan Seseorang", category: "tubuh", desc: "Akan memperoleh sahabat yang baik." },
    { title: "Mimpi Memegang Tangan di Muka", category: "tubuh", desc: "Alamat mempercayai seseorang yang tidak ada gunanya (karena tidak bisa dipercaya)." },
    { title: "Mimpi Melihat Kuku Tangan/Kaki", category: "tubuh", desc: "Akan memperoleh kepuasan keuangan." },
    { title: "Mimpi Melihat Kuku yang Panjang", category: "tubuh", desc: "Akan melakukan spekulasi yang tak menentu." },
    { title: "Mimpi Memotong/Mematahkan Kuku", category: "tubuh", desc: "Akan terjadi kerugian keuangan pada diri anda." },
    { title: "Mimpi Mencat Kuku", category: "tubuh", desc: "Akan dicap orang karena tingkah laku anda yang kurang baik." },
    { title: "Mimpi Memelihara Kuku", category: "tubuh", desc: "Akan memperoleh kesuksesan yang baik." },
    { title: "Mimpi Melihat Orang Memelihara Kuku", category: "tubuh", desc: "Berhati-hatilah terhadap orang yang suka menipu." },
    { title: "Mimpi Merawat Kuku Orang Lain", category: "tubuh", desc: "Alamat ada tipu daya yang direncanakan." },
    { title: "Mimpi Melihat Jari yang Kotor", category: "tubuh", desc: "Anda akan terlibat dalam usaha yang kotor." },
    { title: "Mimpi Jari Anda Terpotong", category: "tubuh", desc: "Akan didesas-desuskan orang." },
    { title: "Mimpi Menunjukkan Jari Kepada Seseorang", category: "tubuh", desc: "Teman-teman anda akan melupakan anda." },
    { title: "Mimpi Merasa Sakit Tenggorokan", category: "tubuh", desc: "Alamat akan ada perubahan cuaca atau keadaan." },
    { title: "Mimpi Memiliki Tenggorokan Kecil", category: "tubuh", desc: "Akan gagal usaha anda." },
    { title: "Mimpi Memiliki Tenggorokan Besar", category: "tubuh", desc: "Akan sukses usaha anda." },
    { title: "Mimpi Tenggorokan yang Hidup", category: "tubuh", desc: "Akan mengalami kebahagiaan." },
    { title: "Mimpi Menandatangani Surat / Dokumen", category: "kejadian", desc: "Akan memperoleh pekerjaan dengan gaji yang kecil." },
    { title: "Mimpi Menandatangani Selembar Cek", category: "kejadian", desc: "Akan memperoleh kemakmuran." },
    { title: "Mimpi Badannya Berkeringat", category: "tubuh", desc: "Akan memperoleh rezeki atau kebahagiaan." },
    { title: "Mimpi Berbadan Gemuk atau Kuat", category: "tubuh", desc: "Akan dimuliakan orang." },
    { title: "Mimpi Berbadan Kurus", category: "tubuh", desc: "Akan menderita dan kekurangan." },
    { title: "Mimpi Badan Keluar Kutu / Luka", category: "tubuh", desc: "Akan memperoieh rezeki atau sakitnya akan sembuh." }
    ];

const dreamList = document.getElementById('dreamList');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeBtn = document.getElementById('themeBtn');

// --- FITUR DARK MODE ---
const currentTheme = localStorage.getItem('primbonTheme') || 'light';
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
}
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('primbonTheme', 'dark');
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        localStorage.setItem('primbonTheme', 'light');
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// --- FITUR INDEXED DB (PENYIMPANAN BOOKMARK) ---
let db;
let bookmarkedTitles = new Set();
const request = indexedDB.open("PrimbonBookmarksDB", 1);

request.onupgradeneeded = (e) => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("bookmarks")) {
        db.createObjectStore("bookmarks", { keyPath: "title" });
    }
};

request.onsuccess = (e) => {
    db = e.target.result;
    loadBookmarks();
};

function loadBookmarks() {
    const tx = db.transaction("bookmarks", "readonly");
    const store = tx.objectStore("bookmarks");
    store.getAllKeys().onsuccess = (e) => {
        bookmarkedTitles = new Set(e.target.result);
        // Render ulang UI agar ikon bookmark menyala sesuai data tersimpan
        const activeBtn = document.querySelector('.filter-btn.active');
        if(activeBtn) activeBtn.click(); 
    };
}

// Fungsi Toggle Simpan/Hapus Bookmark
window.toggleBookmark = function(title, btn) {
    const tx = db.transaction("bookmarks", "readwrite");
    const store = tx.objectStore("bookmarks");
    const icon = btn.querySelector('i');
    
    if (bookmarkedTitles.has(title)) {
        store.delete(title);
        bookmarkedTitles.delete(title);
        icon.className = 'fa-regular fa-bookmark';
        btn.classList.remove('active-bookmark');
    } else {
        const item = dreamData.find(d => d.title === title);
        store.put(item);
        bookmarkedTitles.add(title);
        icon.className = 'fa-solid fa-bookmark';
        btn.classList.add('active-bookmark');
    }
    
    // Jika sedang di tab "Tersimpan", langsung sembunyikan card saat di-unbookmark
    const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');
    if(activeCategory === 'tersimpan' && !bookmarkedTitles.has(title)){
        btn.closest('.dream-card').remove();
    }
};

// --- FUNGSI RENDER TAMPILAN ---
function displayDreams(data) {
    dreamList.innerHTML = '';
    if (data.length === 0) {
        dreamList.innerHTML = '<p style="grid-column: 1/-1; text-align: center; font-size: 1.2rem; opacity: 0.6;">Data mimpi tidak ditemukan / Belum ada yang disimpan...</p>';
        return;
    }

    data.forEach(item => {
        const isBookmarked = bookmarkedTitles.has(item.title);
        const card = document.createElement('div');
        card.className = 'dream-card';
        // Menyisipkan tombol pita (bookmark) pada setiap kartu
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start;">
                <h3>${item.title}</h3>
                <button class="bookmark-btn ${isBookmarked ? 'active-bookmark' : ''}" onclick="toggleBookmark('${item.title.replace(/'/g, "\\'")}', this)">
                    <i class="${isBookmarked ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                </button>
            </div>
            <p>${item.desc}</p>
            <span class="tag">${item.category}</span>
        `;
        dreamList.appendChild(card);
    });
}

// Fungsi Pencarian
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').getAttribute('data-category');
    
    let filtered = dreamData;
    
    // Sesuaikan pencarian di dalam tab yang sedang aktif
    if(activeCategory === 'tersimpan'){
        filtered = dreamData.filter(item => bookmarkedTitles.has(item.title));
    } else if (activeCategory !== 'semua') {
        filtered = dreamData.filter(item => item.category === activeCategory);
    }

    filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(keyword) || 
        item.desc.toLowerCase().includes(keyword)
    );
    displayDreams(filtered);
});

// Fungsi Filter Kategori
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');
        searchInput.value = ''; // Reset kotak pencarian saat pindah tab

        if (category === 'semua') {
            displayDreams(dreamData);
        } else if (category === 'tersimpan') {
            // Tampilkan hanya dari IndexedDB/Set
            const savedDreams = dreamData.filter(item => bookmarkedTitles.has(item.title));
            displayDreams(savedDreams);
        } else {
            const filtered = dreamData.filter(item => item.category === category);
            displayDreams(filtered);
        }
    });
});

displayDreams(dreamData);

// =========================================================================
// DATA ARRAY DI BAWAH INI JANGAN DIHAPUS (BATCH 1 - 9)
// =========================================================================

// Inisialisasi awal (kosong)
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 100 DATA KEDUA (Anggota Tubuh, Kejadian & Hal Gaib)
// =========================================================================

const tambahanMimpiBatch2 = [
    { title: "Mimpi Melihat Perutnya Sendiri", category: "tubuh", desc: "Akan terhindar atau terlepas dari kesukaran." },
    { title: "Mimpi Sakit Perut", category: "tubuh", desc: "Akan segar bugar dalam waktu yang lama." },
    { title: "Mimpi Badannya Terikat Rantai", category: "tubuh", desc: "Akan mengalami sakit." },
    { title: "Mimpi Kaki atau Tangan Kena Kotoran", category: "tubuh", desc: "Akan mengalami keberuntungan." },
    { title: "Mimpi Kemaluannya Terlepas", category: "tubuh", desc: "Akan menderita kesusahan yang besar." },
    { title: "Mimpi Kemaluannya Berubah ke Kelamin Lain", category: "tubuh", desc: "Akan dikaruniai anak atau harta kekayaan." },
    { title: "Mimpi Kakinya Mengeluarkan Air", category: "tubuh", desc: "Alamat akan menjadi penghulu." },
    { title: "Mimpi Giginya Tanggal Sendiri (Atas)", category: "tubuh", desc: "Akan berduka cita, karena orang tua ditimpa kemalangan." },
    { title: "Mimpi Gigi Bagian Bawah Tanggal", category: "tubuh", desc: "Akan berduka cita, karena anak atau istrinya meninggal dunia." },
    { title: "Mimpi Mencabut Gigi Seseorang", category: "tubuh", desc: "Akan memanfaatkan kesusahan seseorang." },
    { title: "Mimpi Melihat Deretan Gigi Indah pada Mulut Seseorang", category: "tubuh", desc: "Akan terjadi suatu persahabatan yang menarik terhadap lawan jenis anda." },
    { title: "Mimpi Memiliki Deretan Gigi yang Indah", category: "tubuh", desc: "Akan muncul keuntungan di masa depan." },
    { title: "Mimpi Melihat Gigi Seseorang yang Goyah", category: "tubuh", desc: "Akan terjadi kerugian keuangan." },
    { title: "Mimpi Melihat Gigi Palsu pada Seseorang", category: "tubuh", desc: "Waspadalah pada incaran orang yang akan menipu anda." },
    { title: "Mimpi Memiliki Gigi Palsu", category: "tubuh", desc: "Tampaknya akan memperoleh keuntungan, tetapi sebenarnya anda akan rugi." },
    { title: "Mimpi Badan Terasa Payah atau Letih", category: "tubuh", desc: "Alamat segala usaha tidak berhasil." },
    { title: "Mimpi Melihat Bibir Lawan Jenisnya", category: "tubuh", desc: "Akan memperoleh jodoh atau pasangan hidup." },
    { title: "Mimpi Sakit Demam", category: "tubuh", desc: "Akan menerima surat dari teman atau kekasih." },
    { title: "Mimpi Berduka Cita", category: "kejadian", desc: "Akan bersuka ria dan sehat." },
    { title: "Mimpi Terserang Penyakit Hati", category: "tubuh", desc: "Akan merasa sehat tubuhnya." },
    { title: "Mimpi Dirinya Bertelanjang", category: "tubuh", desc: "Alamat akan terlepas dari kesukaran." },
    { title: "Mimpikan Seseorang Bertelanjang", category: "kejadian", desc: "Alamat orang yang dimimpikan akan mendapatkan malu." },
    { title: "Mimpi Melihat Anak-anak yang Telanjang", category: "kejadian", desc: "Akan memperoleh kebahagiaan." },
    { title: "Mimpi Dirinya Menjadi Raja", category: "kejadian", desc: "Alamat menjadi orang yang kejam." },
    { title: "Mimpi Diajak Orang Pergi ke Pekuburan", category: "kejadian", desc: "Akan memperoleh kekayaan." },
    { title: "Mimpi Dirinya Meratap-ratap", category: "kejadian", desc: "Akan memperoleh keberuntungan." },
    { title: "Mimpi Dirinya Bersumpah", category: "kejadian", desc: "Alamat kurang baik pekerjaannya." },
    { title: "Mimpi Dirinya (Laki-laki) Menjadi Orang Perempuan", category: "kejadian", desc: "Akan senang dan mendapat harta." },
    { title: "Mimpi Dirinya Gila", category: "kejadian", desc: "Alamat sembuh dari penyakit." },
    { title: "Mimpi Dirinya Jadi Pendek", category: "tubuh", desc: "Alamat sukar pekerjaannya." },
    { title: "Mimpi Dirinya Membuang Darah", category: "tubuh", desc: "Alamat akan sembuh dari sakitnya." },
    { title: "Mimpi Terbang Lalu Hinggap di Pohon Kayu", category: "kejadian", desc: "Alamat akan bercerai dengan pasangannya." },
    { title: "Mimpi Terbang di Udara", category: "kejadian", desc: "Alamat akan menuntut ilmu." },
    { title: "Mimpi Jalan Beriring dengan Guru", category: "kejadian", desc: "Alamat mendapat pemeliharaan Tuhan." },
    { title: "Mimpi Dimurkai Guru", category: "kejadian", desc: "Alamat akan dimarahi oleh atasannya." },
    { title: "Mimpi Duduk-duduk dengan Kepala Negara", category: "kejadian", desc: "Alamat segala perkataannya dituruti orang." },
    { title: "Mimpi Dirinya Digantung oleh Orang Lain", category: "kejadian", desc: "Alamat akan bebas dari hutang piutangnya." },
    { title: "Mimpi Dirinya Diperbudak", category: "kejadian", desc: "Alamat akan mendapat harta." },
    { title: "Mimpi Melihat Gambar Hati Lambang Cinta", category: "kejadian", desc: "Untuk bujangan akan lekas kawin, berumah tangga." },
    { title: "Mimpi Mendengar Suara Detak Jantung", category: "tubuh", desc: "Akan mendengar kabar baik." },
    { title: "Mimpi Melihat Paku", category: "kejadian", desc: "Akan mendapat warisan." },
    { title: "Mimpi (Untuk Wanita) Jatuh Cinta pada Pria Berkumis", category: "kejadian", desc: "Akan beruntung dalam perkawinannya kapan saja." },
    { title: "Mimpi Pingsan", category: "kejadian", desc: "Rencananya akan gagal." },
    { title: "Mimpikan Seorang Wanita Pingsan", category: "kejadian", desc: "Akan cepat ketemu jodoh." },
    { title: "Mimpi Kaki Anda Pincang", category: "tubuh", desc: "Akan lekas pergi atau pindah tempat." },
    { title: "Mimpi Diri Anda Sakit", category: "tubuh", desc: "Akan ada godaan besar yang menimpa anda." },
    { title: "Mimpi Siku Anda Luka Kecil", category: "tubuh", desc: "Akan memperoleh problem yang akan anda hadapi." },
    { title: "Mimpi Timbul Luka-luka Bacokan", category: "tubuh", desc: "Akan memperoleh keuntungan." },
    { title: "Mimpi Kepala Keluar Tanduk", category: "tubuh", desc: "Akan ada perselisihan." },
    { title: "Mimpi Melihat Allah SWT", category: "kejadian", desc: "Akan dikabulkan segala cita-citanya oleh Allah SWT baik mengenai segala urusan di dunia dan akhirat." },
    { title: "Mimpi Melihat Nabi Muhammad SAW", category: "kejadian", desc: "Akan mendapat derajat yang mulia dunia dan akhirat jika dia orang lain agama, maka dia akan masuk agama Islam." },
    { title: "Mimpi Melihat Sorga atau Melihat Arsy", category: "kejadian", desc: "Akan bertambah kebajikannya dan apa hajatnya akan dikabulkan Tuhan." },
    { title: "Mimpi Melihat Neraka", category: "kejadian", desc: "Akan bermaksiat kepada Allah / melakukan dosa." },
    { title: "Mimpi Melihat Jembatan Sirotol Mustaqim di Hari Kiamat", category: "kejadian", desc: "Apa yang dikerjakan akan membawa hasil baik dan menyenangkan." },
    { title: "Mimpi Melihat Lauhil-mahfuzh", category: "kejadian", desc: "Akan menjadi Qori dan dapat menghafal Al-Qur'an." },
    { title: "Mimpi Bertemu dengan Sahabat Nabi", category: "kejadian", desc: "Akan menjadi alim ulama." },
    { title: "Mimpi Mengalami Hari Kiamat", category: "kejadian", desc: "Akan terlepas dari mara bahaya dan akan mendapat sukacita." },
    { title: "Mimpi Naik ke Udara", category: "kejadian", desc: "Akan mendapat kesenangan dan rejekinya bertambah." },
    { title: "Mimpi Bertemu Malaikat Jibril", category: "kejadian", desc: "Akan memperoleh kebahagiaan dunia dan akhirat. Segala pekerjaannya berhasil baik dan berkah, serta akan memperoleh kekayaan." },
    { title: "Mimpi Melihat Malaikat yang Tidak Dikenal", category: "kejadian", desc: "Akan memperoleh kemuliaan dan menjadi orang shaleh serta berbudi." },
    { title: "Mimpi Masuk Sorga", category: "kejadian", desc: "Akan menjadi seorang pemimpin atau akan memperoleh kedudukan yang baik." },
    { title: "Mimpi Berjumpa dengan Bidadari", category: "kejadian", desc: "Akan memperoleh pangkat atau jabatan." },
    { title: "Mimpi Berhisab di Hari Kiamat di Hadirat Ilahi", category: "kejadian", desc: "Akan mendapat kesentosaan dan pekerjaannya berhasil." },
    { title: "Mimpi Melihat Hakim yang Adil", category: "kejadian", desc: "Segala usahanya akan berhasil baik, berkah." },
    { title: "Mimpi Melihat Pendeta atau Ulama", category: "kejadian", desc: "Akan mendapat karunia Allah yang menyenangkan." },
    { title: "Mimpi Melihat Ulama Banyak yang Mati", category: "kejadian", desc: "Alamat binasanya agama Islam di daerah anda." },
    { title: "Mimpi Melihat Iblis atau Sejenisnya", category: "kejadian", desc: "Akan melakukan sesuatu dengan penuh gairah, padahal dalam keadaan biasa hal itu tidak bisa dilakukan." },
    { title: "Mimpi Memukul Iblis", category: "kejadian", desc: "Akan bisa mengalahkan lawan-lawannya." },
    { title: "Mimpi Mendengar Iblis Berbicara dengan Anda", category: "kejadian", desc: "Akan digoda atau tergoda." },
    { title: "Mimpi Melihat Banyak Kuburan", category: "kejadian", desc: "Akan terjadi huru-hara di dalam negeri." },
    { title: "Mimpi Mati (Dirinya Mati)", category: "kejadian", desc: "Akan lanjut usia." },
    { title: "Mimpi Mati Lalu Hidup Kembali", category: "kejadian", desc: "Segala hajatnya akan berhasil." },
    { title: "Mimpi Melihat Bangkai Manusia", category: "kejadian", desc: "Akan mendapat harta." },
    { title: "Mimpi Dirinya Bercakap-cakap dengan Orang Mati", category: "kejadian", desc: "Akan sia-sia pekerjaannya dan cita-citanya gagal." },
    { title: "Mimpi Melihat Orang Mati atau Telah Mati", category: "kejadian", desc: "Akan muncul bantuan yang tidak disangka-sangka dalam keadaan yang sulit atau akan datang berita baik." },
    { title: "Mimpi Menyaksikan Pembakaran Mayat", category: "kejadian", desc: "Akan melakukan perjalanan menyenangkan bersama teman-teman atau rekan-rekan yang menyenangkan pula." },
    { title: "Mimpi Berada di Tempat Penyimpanan Mayat", category: "kejadian", desc: "Berhati-hatilah dengan apa yang anda kerjakan dan perhatikan kesehatan anda." },
    { title: "Mimpi Melihat Dukun (Tukang Sihir)", category: "kejadian", desc: "Anda akan memperoleh penyelesaian yang mudah untuk problem atau masalah yang sulit." },
    { title: "Mimpi Menjadi Tukang Sihir", category: "kejadian", desc: "Akan mendapat suatu pengalaman yang menyedihkan atau yang kurang baik." },
    { title: "Mimpi Melihat Pintu Sorga Terbuka", category: "kejadian", desc: "Akan ditolong oleh orang yang berpangkat." },
    { title: "Mimpi Melihat Nur (Cahaya)", category: "alam", desc: "Akan memperoleh penghidupan yang lebih baik lagi." },
    { title: "Mimpi Melihat Tempat yang Suci", category: "kejadian", desc: "Akan memperoleh rejeki yang banyak." },
    { title: "Mimpi Mendengar Gema", category: "alam", desc: "Akan mendekati masa romantis." },
    { title: "Mimpi Menghadiri Suatu Pertemuan Ghaib", category: "kejadian", desc: "Akan mendapat kritikan." },
    { title: "Mimpi Melihat Seorang Biarawan", category: "kejadian", desc: "Akan memperoleh nasihat, pandangan dan bantuan yang tidak disangka-sangka." },
    { title: "Mimpi Menjadi Seorang Biarawan", category: "kejadian", desc: "Peringatan untuk anda karena ada kesulitan yang akan mengancam." },
    { title: "Mimpi Melihat Seorang Biarawati", category: "kejadian", desc: "Waspadalah terhadap orang-orang yang munafik." },
    { title: "Mimpi Berurusan dengan Seorang Biarawati", category: "kejadian", desc: "Akan terjadi suatu perubahan dalam kedudukan atau pekerjaan." },
    { title: "Mimpi Melompati Titian Sirotol Mustakim", category: "kejadian", desc: "Akan diluputkan segala kesukaran-kesukarannya dan akan kaya dari harta benda yang selama ini dicari-cari." },
    { title: "Mimpi Berwudhu'", category: "kejadian", desc: "Akan mengerjakan pekerjaan mulia." },
    { title: "Mimpi Bersembayang atau Mengerjakan Shalat", category: "kejadian", desc: "Akan terhapus dosa-dosanya. Bisa juga akan menjadi modin atau pegawai agama." },
    { title: "Mimpi Memberi Zakat Kepada Fakir Miskin", category: "kejadian", desc: "Tidak akan kekurangan uang." },
    { title: "Mimpi Berziarah ke Tempat Keramat atau Kuburan", category: "kejadian", desc: "Akan menjadi seorang yang mulia dan bahagia." },
    { title: "Mimpi Melihat Hantu", category: "kejadian", desc: "Segala usaha akan sukses dalam beberapa hari lagi." },
    { title: "Mimpi Berbicara dengan Hantu", category: "kejadian", desc: "Keuangan anda akan meningkat." },
    { title: "Mimpi Menolong Seorang Pengemis", category: "kejadian", desc: "Akan mendapat kemajuan dalam penghidupan dan cinta." },
    { title: "Mimpi Bertemu dengan Seorang Pengarang", category: "kejadian", desc: "Akan bertemu dengan orang-orang penting." },
    { title: "Mimpi Jadi Pengarang", category: "kejadian", desc: "Akan beruntung dengan pekerjaan anda." },
    { title: "Mimpi Bertemu dengan Orang Suci", category: "kejadian", desc: "Kehidupan anda akan aman dan damai." }
];

// Menggabungkan 100 data kedua ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch2);

// Segarkan tampilan UI agar 200 data total (Batch 1 + Batch 2) langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 100 DATA KETIGA (Interaksi Sosial, Keluarga & Profesi)
// =========================================================================

const tambahanMimpiBatch3 = [
    { title: "Mimpi Bertemu dengan Seorang Wanita", category: "kejadian", desc: "Akan mendapat senjata dalam perjuangan anda." },
    { title: "Mimpi Melihat Ibu", category: "kejadian", desc: "Akan sukses usaha anda." },
    { title: "Mimpi Mendengar Suara Ibu", category: "kejadian", desc: "Akan menerima berita berharga bagi anda." },
    { title: "Mimpi Menulis Surat untuk Ibu", category: "kejadian", desc: "Akan menerima banyak jasa dan kehormatan." },
    { title: "Mimpi Bertemu Almarhumah Ibu", category: "kejadian", desc: "Suatu peringatan agar anda jangan ceroboh." },
    { title: "Mimpi Kehilangan Ibu", category: "kejadian", desc: "Anda merasa berdosa dalam suatu hal." },
    { title: "Mimpi Melihat Ibu Sedang Berduka atau Bersedih", category: "kejadian", desc: "Akan turut terlibat dalam kesulitan orang lain." },
    { title: "Mimpi Melihat Ibu Sedang Menyenangkan Anaknya", category: "kejadian", desc: "Akan memperoleh keuntungan atau kebahagiaan." },
    { title: "Mimpi Bersetubuh dengan Ibu", category: "kejadian", desc: "Akan memperoleh harta atau kebahagiaan." },
    { title: "Mimpi Bersetubuh dengan Anak Kandung Sendiri", category: "kejadian", desc: "Akan memperoleh kesenangan dunia dan akhirat." },
    { title: "Mimpi Bersetubuh dengan Saudara Kandung", category: "kejadian", desc: "Akan memperoleh harta dan sukses usaha anda." },
    { title: "Mimpi Diberi Anak Kecil atau Bayi", category: "kejadian", desc: "Akan memperoleh rezeki besar." },
    { title: "Mimpi Melihat Almarhum Ayah", category: "kejadian", desc: "Akan memperoleh kegembiraan yang tidak disangka-sangka." },
    { title: "Mimpi Kawin dengan Isteri Orang", category: "kejadian", desc: "Alamat kurang baik, ada pejabat yang sewenang-wenang dalam menangani khasus." },
    { title: "Mimpi Menerima Surat", category: "kejadian", desc: "Alamat akan lanjut usia, juga bisa usaha anda berkembang dengan baik." },
    { title: "Mimpi Menerima Surat Berisi Berita Buruk", category: "kejadian", desc: "Alamat akan kecewa." },
    { title: "Mimpi Menulis Sepucuk Surat Cinta", category: "kejadian", desc: "Akan menyesali sesuatu yang terlambat." },
    { title: "Mimpi Membakar atau Merobek-robek Surat", category: "kejadian", desc: "Akan ada kemunduran dalam hal keuangan." },
    { title: "Mimpi Membaca Surat Milik Orang Lain", category: "kejadian", desc: "Akan menderita rasa malu." },
    { title: "Mimpi Merobek Surat Penting / Dokumen", category: "kejadian", desc: "Akan datang berita buruk." },
    { title: "Mimpi Melihat atau Membaca Surat Kabar", category: "kejadian", desc: "Akan menghadapi masalah yang membingungkan." },
    { title: "Mimpi Membeli Surat Kabar", category: "kejadian", desc: "Akan datang suatu kejutan mendadak." },
    { title: "Mimpi Dirinya Dipukul Orang", category: "kejadian", desc: "Akan mendapat harta." },
    { title: "Mimpi Dipenjarakan dan Lambat Keluarnya", category: "kejadian", desc: "Akan bangkrut dan jatuh miskin." },
    { title: "Mimpi Melihat Sebuah Penjara", category: "kejadian", desc: "Akan muncul kedamaian dalam hidup anda." },
    { title: "Mimpi Dibebaskan dari Penjara", category: "kejadian", desc: "Akan memulai masalah baru dalam hidup anda." },
    { title: "Mimpi Dipenjarakan Secara Tidak Adil", category: "kejadian", desc: "Alamat orang lain tidak mempercayai anda." },
    { title: "Mimpi Pergi ke Penjara", category: "kejadian", desc: "Akan ketahuan kebohongan anda." },
    { title: "Mimpi Dikurung dalam Sebuah Penjara Bawah Tanah", category: "kejadian", desc: "Alamat akan dikunjungi famili yang dibenci." },
    { title: "Mimpi Melihat Pesakitan Masuk Penjara", category: "kejadian", desc: "Jaga kesehatan anda baik-baik." },
    { title: "Mimpi Melihat atau Berbicara dengan Hakim", category: "kejadian", desc: "Alamat diawasi orang setiap saat, anda harus berhati-hati." },
    { title: "Mimpi Berurusan dengan Seorang Hakim", category: "kejadian", desc: "Akan menerima imbalan yang pantas untuk suatu usaha yang anda kerjakan." },
    { title: "Mimpi Menjadi Hakim", category: "kejadian", desc: "Akan menyelesaikan masalah." },
    { title: "Mimpi Menjadi Terdakwa dalam Pengadilan", category: "kejadian", desc: "Akan berbuat tegas penuh tanggung jawab." },
    { title: "Mimpi Menjadi Orang Pendakwa dalam Pengadilan", category: "kejadian", desc: "Akan muncul suasana yang memalukan." },
    { title: "Mimpi Melihat Sebuah Pengadilan", category: "kejadian", desc: "Akan memeriukan nasihat atau saran-saran dari kerabat dekat." },
    { title: "Mimpi Menerima Surat Panggilan dari Pengadilan", category: "kejadian", desc: "Alamat ada orang yang akan mencelakai anda." },
    { title: "Mimpi Menjadi Seorang Saksi di Pengadilan", category: "kejadian", desc: "Akan menolong seseorang yang dalam kesulitan." },
    { title: "Mimpi Melihat Lebih Banyak Orang Pria daripada Wanita", category: "kejadian", desc: "Alamat akan sentosa penduduk negeri." },
    { title: "Mimpi Melihat Lebih Banyak Anak Kecil daripada Orang Dewasa", category: "kejadian", desc: "Alamat akan mendapat kesenangan." },
    { title: "Mimpi Sembuh dari Sakitnya", category: "tubuh", desc: "Akan berhasil apa yang dimaksud." },
    { title: "Mimpi Kawin Lagi", category: "kejadian", desc: "Akan bertambah kesibukan." },
    { title: "Mimpi Kepalanya Dipegang Orang", category: "tubuh", desc: "Bagi bujangan akan mendapat jodoh dan dapat rezeki." },
    { title: "Mimpi Menimbang dengan Timbangan yang Jujur", category: "kejadian", desc: "Alamat akan memberi nasehat kepada orang lain." },
    { title: "Mimpi Menimbang Tetapi Timbangannya Patah", category: "kejadian", desc: "Alamat disakiti orang atau dekat ajalnya." },
    { title: "Mimpi Memegang Pena / Pensil", category: "kejadian", desc: "Alamat akan dapat jodoh atau harta yang halal." },
    { title: "Mimpi Mencabut Pusatnya", category: "tubuh", desc: "Alamat berpisah Ibu / Bapaknya." },
    { title: "Mimpi Menimbang Terlalu Berat atau Ringan", category: "kejadian", desc: "Alamat akan salah pilih." },
    { title: "Mimpi Melihat Timbangan", category: "kejadian", desc: "Alamat akan mengambil keputusan." },
    { title: "Mimpi Menimbang Tubuh Sendiri", category: "tubuh", desc: "Alamat didesas-desuskan orang." },
    { title: "Mimpi Suami dan Isteri Berkelahi", category: "kejadian", desc: "Akan membahas urusan penting." },
    { title: "Mimpi Anaknya Meninggal Dunia", category: "kejadian", desc: "Akan timbul pertengkaran dalam rumah tangga." },
    { title: "Mimpi Melihat Anak-anak Lelaki Berkelahi", category: "kejadian", desc: "Alamat baik bagi yang bermimpi." },
    { title: "Mimpi Melihat Anak Lelaki Bermain dengan Anak Perempuan", category: "kejadian", desc: "Alamat berbahagia dalam percintaan atau perkawinan." },
    { title: "Mimpi Melihat Seorang Anak Lelaki Sedang Bekerja", category: "kejadian", desc: "Alamat menguntungkan bagi yang bermimpi." },
    { title: "Mimpi Hidup Bahagia dalam Berkeluarga", category: "kejadian", desc: "Akan beruntung keluarga anda." },
    { title: "Mimpi Isterinya Mengandung", category: "kejadian", desc: "Alamat kurang baik bagi yang mimpi." },
    { title: "Mimpi Memeluk Isteri Sendiri", category: "kejadian", desc: "Akan memperoleh rezeki atau harta." },
    { title: "Mimpi Memeluk Isteri Orang Lain", category: "kejadian", desc: "Akan dapat keuntungan besar." },
    { title: "Mimpi Isteri Bersalin (Melahirkan)", category: "kejadian", desc: "Akan dapat rejeki besar." },
    { title: "Mimpi Berjalan-jalan dengan Isteri", category: "kejadian", desc: "Alamat kurang baik, akan ada perselisihan." },
    { title: "Mimpi Bertengkar dengan Isteri", category: "kejadian", desc: "Akan terganggu kesehatannya." },
    { title: "Mimpi Suami-Isteri Sama-sama di Air", category: "kejadian", desc: "Akan beruntung dalam usahanya." },
    { title: "Mimpi Melihat Anak Yatim", category: "kejadian", desc: "Akan mendapat hidup bahagia." },
    { title: "Mimpi Memungut Anak Yatim", category: "kejadian", desc: "Akan memperoleh rezeki dan harta terus-menerus." },
    { title: "Mimpi Mengunjungi Rumah Yatim", category: "kejadian", desc: "Akan menerima kabar baik." },
    { title: "Mimpi Melihat Seorang Gadis", category: "kejadian", desc: "Akan datang jamuan yang menggembirakan." },
    { title: "Mimpi Melihat Gadis-gadis yang Berpakaian Serba Putih", category: "kejadian", desc: "Akan berkobar gairah cintanya." },
    { title: "Mimpi Dikelilingi Gadis-gadis yang Tertawa", category: "kejadian", desc: "Akan dicemooh orang." },
    { title: "Mimpi Mencium Gadis-gadis Muda", category: "kejadian", desc: "Alamat harus berhati-hati dengan kecerobohan." },
    { title: "Mimpi Dicium dengan Gadis-gadis Muda", category: "kejadian", desc: "Alamat akan kecewa." },
    { title: "Mimpi Bersetubuh oleh Seorang Gadis Remaja", category: "kejadian", desc: "Akan memperoleh rezeki yang besar." },
    { title: "Mimpi Bercakap-cakap dengan Seorang Petani", category: "kejadian", desc: "Akan disegani orang karena kepandaian anda." },
    { title: "Mimpi Anak Kecil Menjadi Besar", category: "kejadian", desc: "Akan memperoleh kegembiraan." },
    { title: "Mimpi Anak Kecil Sudah Berumah Tangga", category: "kejadian", desc: "Akan mendapat kesusahan." },
    { title: "Mimpi Melihat Bidadari", category: "kejadian", desc: "Akan naik derajatnya." },
    { title: "Mimpi Melihat Orang Banyak", category: "kejadian", desc: "Alamat usahanya akan sia-sia." },
    { title: "Mimpi Bertemu dengan Polisi", category: "kejadian", desc: "Akan terlindung dari kegaduhan." },
    { title: "Mimpi Melihat Seorang Polisi Gadungan", category: "kejadian", desc: "Akan mendapat kesalahan dalam pekerjaan." },
    { title: "Mimpi Berurusan dengan Polisi", category: "kejadian", desc: "Alamat terjadi perselisihan paham." },
    { title: "Mimpi Ditolong Seorang Polisi", category: "kejadian", desc: "Alamat suatu masalah akan berakhir dengan baik." },
    { title: "Mimpi Bertemu dengan Presiden/Ratu", category: "kejadian", desc: "Alamat baik, sukses dalam usaha." },
    { title: "Mimpi Melihat Seorang Raja", category: "kejadian", desc: "Alamat usaha anda akan beruntung." },
    { title: "Mimpi Menjadi Seorang Raja", category: "kejadian", desc: "Alamat terlalu egois." },
    { title: "Mimpi Menghadiri Pemakaman Raja/Sultan", category: "kejadian", desc: "Akan menerima rezeki atau warisan." },
    { title: "Mimpi Melihat Penobatan Raja / Ratu", category: "kejadian", desc: "Alamat baik, tanda kebahagiaan." },
    { title: "Mimpi Anda Dilantik Menjadi Raja", category: "kejadian", desc: "Akan sukses semua usaha anda." },
    { title: "Mimpi Menjadi Tentara", category: "kejadian", desc: "Akan mengalami perubahan hidup dan sukses." },
    { title: "Mimpi Melihat Sepasukan Tentara", category: "kejadian", desc: "Akan mengkhawatirkan nasib anda di masa depan." },
    { title: "Mimpi Mendengar Tepuk Tangan", category: "kejadian", desc: "Alamat anda akan mendapat sedikit warisan." },
    { title: "Mimpi Disambut dengan Tepuk Tangan", category: "kejadian", desc: "Akan memperoleh sukses dalam usaha baru." },
    { title: "Mimpi Anda Bertepuk Tangan", category: "kejadian", desc: "Alamat anda segar-bugar." },
    { title: "Mimpi Melihat Sebuah Tengkorak", category: "kejadian", desc: "Alamat keberhasilan anda dalam usaha." },
    { title: "Mimpi Memperoleh Tengkorak dari Parit", category: "kejadian", desc: "Akan memperoleh rezeki besar." },
    { title: "Mimpi Melihat Sebuah Tengkorak (Kedua)", category: "kejadian", desc: "Akan berhasil dalam usaha anda." },
    { title: "Mimpi Bertengkar dengan Seorang Tetangga", category: "kejadian", desc: "Suatu tanda peringatan jangan mudah marah." },
    { title: "Mimpi Menolong Seorang Tetangga", category: "kejadian", desc: "Akan menerima sedikit warisan." },
    { title: "Mimpi Meneteskan Air Mata", category: "tubuh", desc: "Akan memperoleh kebahagiaan." },
    { title: "Mimpi Melihat Orang Menangis", category: "kejadian", desc: "Akan datang bantuan dari teman anda." },
    { title: "Mimpi Melihat Aktor / Artis", category: "kejadian", desc: "Akan mencapai sesuatu yang luar biasa." }
];

// Menggabungkan 100 data ketiga ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch3);

// Segarkan tampilan UI agar 300 data total langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 100 DATA KEEMPAT (Pekerjaan, Aktivitas, & Bangunan)
// =========================================================================

const tambahanMimpiBatch4 = [
    { title: "Mimpi Menjadi Seorang Akuntan", category: "kejadian", desc: "Akan mengalami kesulitan dalam pekerjaan." },
    { title: "Mimpi Membuat Neraca Pembukuan dengan Baik", category: "kejadian", desc: "Akan berhasil usaha anda." },
    { title: "Mimpi Melihat Anak yang Sedang Tidur", category: "kejadian", desc: "Alamat baik, masa depan yang menyenangkan." },
    { title: "Mimpi Mendengar Suara Anak Menangis", category: "kejadian", desc: "Ada kerugian dalam usaha anda." },
    { title: "Mimpi Memungut Anak", category: "kejadian", desc: "Akan ada keuntungan di pihak anda." },
    { title: "Mimpi Melihat Anak yang Kotor", category: "kejadian", desc: "Akan ada kesuksesan yang tak disangka-sangka." },
    { title: "Mimpi Melihat Badut", category: "kejadian", desc: "Akan menerima hadiah." },
    { title: "Mimpi Menjadi Badut", category: "kejadian", desc: "Alamat teman anda tidak memahami pribadi anda." },
    { title: "Mimpi Lolos dari Suatu Bahaya", category: "kejadian", desc: "Akan segera sembuh dari sakit." },
    { title: "Mimpi Melihat Orang Lain Terhindar dari Bahaya", category: "kejadian", desc: "Akan memperoleh uang yang tak disangka-sangka." },
    { title: "Mimpi Berurusan dengan Bajak Laut", category: "kejadian", desc: "Alamat anda harus berhati-hati." },
    { title: "Mimpi Berdiri di Atas Sebuah Balkon", category: "kejadian", desc: "Akan mendapatkan seorang teman yang baik." },
    { title: "Mimpi Melihat Sebuah Balkon yang Runtuh", category: "kejadian", desc: "Akan gagal semua usaha anda." },
    { title: "Mimpi Menyimpan Uang di Bank", category: "kejadian", desc: "Suatu keinginan yang terpendam akan terpenuhi." },
    { title: "Mimpi Mengambil Uang di Bank", category: "kejadian", desc: "Alamat anda kekurangan uang." },
    { title: "Mimpi Bekerja di Sebuah Kapal", category: "kejadian", desc: "Alamat hidup anda akan tambah baik." },
    { title: "Mimpi Melihat Bayangan Beberapa Benda", category: "kejadian", desc: "Alamat akan ketakutan pada bayangan sendiri." },
    { title: "Mimpi Melihat Bayi yang Mungil", category: "kejadian", desc: "Alamat keberhasilan dalam bercinta, atau munculnya hal-hal yang menyenangkan." },
    { title: "Mimpi Memberi Makan Bayi", category: "kejadian", desc: "Akan terjadi suatu pertemuan keluarga yang menggembirakan." },
    { title: "Mimpi Memandikan Bayi", category: "kejadian", desc: "Alamat bagi kebahagiaan keluarga." },
    { title: "Mimpi Menyusui Bayi", category: "kejadian", desc: "Suatu peringatan untuk waspada terhadap penipuan." },
    { title: "Mimpi Mendengar Bayi Menangis", category: "kejadian", desc: "Suatu peringatan adanya penyakit atau kegagalan." },
    { title: "Mimpi Menemukan Bayi yang Dibuang", category: "kejadian", desc: "Akan memperoleh ketenteraman jiwa." },
    { title: "Mimpi Anda Sedang Dioperasi (Dibedah)", category: "tubuh", desc: "Akan mendapat ujian atau cobaan." },
    { title: "Mimpi Melihat Orang Dioperasi", category: "kejadian", desc: "Akan menyelesaikan tugas sulit untuk orang banyak." },
    { title: "Mimpi Menerima Peringatan Belasungkawa", category: "kejadian", desc: "Alamat harapan yang cerah di masa depan." },
    { title: "Mimpi Menolong Orang yang Kena Bencana", category: "kejadian", desc: "Alamat punya masa depan yang cerah." },
    { title: "Mimpi Sakit Bengkak dan Bernanah", category: "tubuh", desc: "Akan merasa sedih atau murung." },
    { title: "Mimpi Melihat Orang Lain Sakit Bengkak", category: "kejadian", desc: "Akan mengatasi banyak rintangan." },
    { title: "Mimpi Anda Sedang Berguru", category: "kejadian", desc: "Akan datang bahaya penyakit." },
    { title: "Mimpi Menerima Kabar/Berita Baik", category: "kejadian", desc: "Akan ada keberuntungan." },
    { title: "Mimpi Menerima Kabar/Berita Buruk", category: "kejadian", desc: "Akan ada hal yang menyusahkan." },
    { title: "Mimpi Menaiki Sebuah Bus", category: "kejadian", desc: "Akan berhadapan dengan masalah yang sulit." },
    { title: "Mimpi Kecelakaan Sewaktu Naik Bus", category: "kejadian", desc: "Akan memperoleh kesusahan keuangan." },
    { title: "Mimpi Memecah/Mencungkil Bisul", category: "tubuh", desc: "Akan terjadi kerusuhan/kesusahan dengan keluarga anda." },
    { title: "Mimpi Berbohong", category: "kejadian", desc: "Akan ada kemajuan keuangan." },
    { title: "Mimpi Dicap Orang Sebagai Pembohong", category: "kejadian", desc: "Akan muncul pertengkaran-pertengkaran." },
    { title: "Mimpi Melihat Buaian yang Kosong", category: "kejadian", desc: "Akan ada bahaya penyakit." },
    { title: "Mimpi Mengayunkan Buaian Berisi Bayi", category: "kejadian", desc: "Akan berhasil dalam rumah tangga dan usaha." },
    { title: "Mimpi Melihat Bulu-bulu Berwarna Putih", category: "kejadian", desc: "Akan dicurigai orang, padahal tidak salah." },
    { title: "Mimpi Melihat Sebuah Bulu Terapung di Air", category: "kejadian", desc: "Anda menanti nasib baik, tetapi sia-sia." },
    { title: "Mimpi Menghiasi dengan Bulu-bulu", category: "kejadian", desc: "Akan melakukan perjalanan yang jauh." },
    { title: "Mimpi Melihat Bulu-bulu yang Berwarna Hitam", category: "kejadian", desc: "Akan merasakan berduka cita." },
    { title: "Mimpi Melihat Bulu Mata yang Panjang dan Halus", category: "tubuh", desc: "Akan terkejut setelah mengetahui hal aslinya." },
    { title: "Mimpi Melihat Orang Bungkuk", category: "kejadian", desc: "Akan mendapai suatu keberuntungan." },
    { title: "Mimpi Badan Anda Bungkuk", category: "tubuh", desc: "Akan berbadan sehat menyenangkan." },
    { title: "Mimpi Membawa Bungkusan", category: "kejadian", desc: "Akan sukses pula akhirnya pekerjaan anda." },
    { title: "Mimpi Menerima Sebuah Bungkusan", category: "kejadian", desc: "Waspadalah terhadap teman-teman palsu." },
    { title: "Mimpi Mendapat Penyakit Cacar", category: "tubuh", desc: "Akan muncul suatu pengalaman yang penting." },
    { title: "Mimpi Merasa Cemburu", category: "kejadian", desc: "Akan bersedih tetap hanya sebentar." },
    { title: "Mimpi Jatuh Cinta atau Punya Rasa Cinta", category: "kejadian", desc: "Akan datang kebahagiaan dan kepuasan." },
    { title: "Mimpi Melihat Orang Sedang Bercinta", category: "kejadian", desc: "Usaha anda yang untung-untungan akan berhasil." },
    { title: "Mimpi Memberi Ciuman pada Wanita", category: "kejadian", desc: "Alamat pihak lawan jenis mencintai anda." },
    { title: "Mimpi Mencium Tanah", category: "kejadian", desc: "Akan datang duka cita." },
    { title: "Mimpi Mencium Ibu", category: "kejadian", desc: "Anda merindukan kelembutan." },
    { title: "Mimpi Mencium Seorang Tua", category: "kejadian", desc: "Akan kecewa dalam percintaan." },
    { title: "Mimpi Menerima Sebuah Ciuman", category: "kejadian", desc: "Akan dihargai dan dihormati orang." },
    { title: "Mimpi Mencuci Pakaian yang Kotor", category: "kejadian", desc: "Ada orang yang menjengkelkan anda." },
    { title: "Mimpi Anda Diculik", category: "kejadian", desc: "Berhati-hatilah dalam masalah perkawinan." },
    { title: "Mimpi Menculik Seseorang", category: "kejadian", desc: "Awas, akan kehilangan (dirampok orang)." },
    { title: "Mimpi Bermain Dadu", category: "kejadian", desc: "Akan mendapat kerugian besar." },
    { title: "Mimpi Melihat Seorang Dokter", category: "kejadian", desc: "Alamat adanya ancaman penyakit." },
    { title: "Mimpi Berbicara dengan Seorang Dokter", category: "kejadian", desc: "Sesuatu keinginan yang sudah lama akan terkabul." },
    { title: "Mimpi Menjadi Dokter", category: "kejadian", desc: "Akan berhasil usaha anda." },
    { title: "Mimpi Menjadi Dokter Bedah", category: "kejadian", desc: "Akan ada tingkatan kedudukan anda." },
    { title: "Mimpi Melihat Drama / Sandiwara di Panggung", category: "kejadian", desc: "Akan muncul suatu masalah yang tidak menyenangkan." },
    { title: "Mimpi Menulis Skenario Drama", category: "kejadian", desc: "Akan dicemooh teman." },
    { title: "Mimpi Menjadi Sutradara Drama", category: "kejadian", desc: "Akan memperoleh kehidupan rumah tangga yang bahagia." },
    { title: "Mimpi Melihat Seorang Duda atau Janda", category: "kejadian", desc: "Akan memperoleh uang." },
    { title: "Mimpi Berduka Cita / Dirundung Duka Cita", category: "kejadian", desc: "Akan memperoleh keberuntungan." },
    { title: "Mimpi Ikut Suatu Festival", category: "kejadian", desc: "Sahabat anda akan beruntung." },
    { title: "Mimpi Mendengarkan Musik / Gitar", category: "kejadian", desc: "Akan memperoleh harta atau keberuntungan." },
    { title: "Mimpi Melihat Galangan Kapal", category: "kejadian", desc: "Akan datang berita yang menyenangkan." },
    { title: "Mimpi Berada di Galangan Kapal", category: "kejadian", desc: "Ada harapan baik di bidang usaha dan kesehatan." },
    { title: "Mimpi Melihat Gambar / Lukisan Diri Sendiri", category: "kejadian", desc: "Ada harapan kebahagiaan." },
    { title: "Mimpi Melihat Gambar Almarhum Orang Tua", category: "kejadian", desc: "Akan ada bantuan dan terbebas dari kesulitan." },
    { title: "Mimpi Melintasi Gang yang Gelap", category: "alam", desc: "Akan kehilangan kekasih." },
    { title: "Mimpi Tiba di Gang Buntu", category: "alam", desc: "Usahanya sia-sia / gagal." },
    { title: "Mimpi Dikejar Orang Jahat di Sebuah Gang", category: "kejadian", desc: "Akan muncul sesuatu yang kurang baik / memalukan." },
    { title: "Mimpi Melihat Garam", category: "kejadian", desc: "Usaha anda mendapat angin baik." },
    { title: "Mimpi Menaburkan Garam", category: "kejadian", desc: "Akan datang nasib buruk tetapi hanya sebentar." },
    { title: "Mimpi Menjadi Garong / Perampok", category: "kejadian", desc: "Akan ada kesulitan soal keuangan." },
    { title: "Mimpi Melihat Gedung yang Sedang Dibangun", category: "kejadian", desc: "Akan menerima penghargaan tinggi." },
    { title: "Mimpi Melihat Gedung yang Runtuh", category: "kejadian", desc: "Alamat suatu maksud akan dibatalkan." },
    { title: "Mimpi Melihat Gedung Bertingkat", category: "kejadian", desc: "Akan memiliki uang yang banyak." },
    { title: "Mimpi Melihat Gedung Tua dan Rusak", category: "kejadian", desc: "Akan ada kemalangan dan kesusahan." },
    { title: "Mimpi Melihat Cuaca yang Gelap", category: "alam", desc: "Ada berita yang tak diduga-duga." },
    { title: "Mimpi Berada di Tempat Gelap", category: "alam", desc: "Ada nasehat yang berguna bagi anda." },
    { title: "Mimpi Menghadiri Wisuda Sarjana di Universitas", category: "kejadian", desc: "Situasi keuangan semakin membaik." },
    { title: "Mimpi Memasuki Masjid", category: "kejadian", desc: "Akan menjadi orang yang taqwa." },
    { title: "Mimpi Shalat (Sembahyang) di Dalam Masjid", category: "kejadian", desc: "Akan memiliki masa depan yang cerah." },
    { title: "Mimpi Mendorong Gerobak Dorong", category: "kejadian", desc: "Akan menjalin persahabatan yang menyenangkan." },
    { title: "Mimpi Menarik Gerobak Dorong", category: "kejadian", desc: "Akan muncul peristiwa yang menyedihkan di lingkungan teman-teman anda." },
    { title: "Mimpi Melihat Gerobak Terbalik", category: "kejadian", desc: "Akan memikul sesuatu beban berat." },
    { title: "Mimpi Menggosipkan Orang", category: "kejadian", desc: "Akan terseret ke dalam kasus cinta orang lain." },
    { title: "Mimpi Berada di Gua", category: "alam", desc: "Akan mengalami perubahan tentang hidup anda." },
    { title: "Mimpi Keluar dari Gua ke Tempat Terang Terbuka", category: "alam", desc: "Akan ada perubahan yang lebih baik." },
    { title: "Mimpi Melihat Jalan Masuk ke Gua Sewaktu Malam", category: "alam", desc: "Berhati-hati dengan kesehatan anda." },
    { title: "Mimpi Melihat Gudang Penuh Barang", category: "kejadian", desc: "Akan ada kemakmuran di rumah anda." },
    { title: "Mimpi Melihat Gudang yang Kosong", category: "kejadian", desc: "Akan ada kemiskinan yang anda derita." }
];

// Menggabungkan 100 data keempat ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch4);

// Segarkan tampilan UI agar 400 data total langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 100 DATA KELIMA (Karir, Transportasi, & Kehidupan Sosial)
// =========================================================================

const tambahanMimpiBatch5 = [
    { title: "Mimpi Menonton Gulat", category: "kejadian", desc: "Akan timbul perselisihan dengan teman." },
    { title: "Mimpi Menjadi Guru", category: "kejadian", desc: "Akan muncul hal-hal yang mengkhawatirkan." },
    { title: "Mimpi Melihat Seorang Guru", category: "kejadian", desc: "Akan diminta sumbangan sukarela." },
    { title: "Mimpi Diberi Hadiah", category: "kejadian", desc: "Akan berhasil segala usaha anda, akan beruntung." },
    { title: "Mimpi Memberi Hadiah", category: "kejadian", desc: "Akan anda terima sedikit warisan." },
    { title: "Mimpi Hamil (Bila Wanita)", category: "kejadian", desc: "Akan terwujud keinginan anda." },
    { title: "Mimpi Bertemu Banyak Orang Hamil", category: "kejadian", desc: "Akan memperoleh tambahan uang." },
    { title: "Mimpi Merayakan Ulang Tahun", category: "kejadian", desc: "Akan memperoleh kebahagiaan." },
    { title: "Mimpi Merayakan Pernikahan", category: "kejadian", desc: "Akan ada pertemuan keluarga yang menyenangkan." },
    { title: "Mimpi Menjadi Seorang Konglomerat", category: "kejadian", desc: "Akan memperoleh kemujuran." },
    { title: "Mimpi Menghipnotis Orang", category: "kejadian", desc: "Akan kesulitan membayar hutang." },
    { title: "Mimpi Dihipnotis Orang", category: "kejadian", desc: "Akan membuka rahasia, penjelasan dengan terpaksa." },
    { title: "Mimpi Membayar Hutang", category: "kejadian", desc: "Suatu tanda yang baik." },
    { title: "Mimpi Dihormati Anak-anak", category: "kejadian", desc: "Ada peristiwa yang membahagiakan dalam keluarga." },
    { title: "Mimpi Menghormati Pejabat", category: "kejadian", desc: "Akan ada tamu yang menyenangkan." },
    { title: "Mimpi Bertemu Ipar", category: "kejadian", desc: "Ada rasa tidak puas terhadap sanak keluarga." },
    { title: "Mimpi Melihat Istana Lengkap dengan Raja dan Ratu", category: "kejadian", desc: "Akan menerima kepuasaan atau kesenangan." },
    { title: "Mimpi Melihat Jalan yang Panjang Lurus", category: "alam", desc: "Akan beruntung." },
    { title: "Mimpi Melihat Jalan yang Berbelok-belok", category: "alam", desc: "Akan berhasil setelah menempuh kesulitan." },
    { title: "Mimpi Tersesat ke Jalan Kecil Berliku-liku", category: "alam", desc: "Akan timbul kecemasan." },
    { title: "Mimpi Sebuah Jalan Raya yang Gelap", category: "alam", desc: "Suatu tanda kekecewaan." },
    { title: "Mimpi Jatuh dari Tempat yang Tinggi", category: "kejadian", desc: "Masa kejayaan anda akan lenyap." },
    { title: "Mimpi Jatuh ke Dalam Sebuah Selokan", category: "kejadian", desc: "Akan memperoleh nama jelek." },
    { title: "Mimpi Jatuh Menimpa Sesuatu", category: "kejadian", desc: "Akan ada kabar penting." },
    { title: "Mimpi Melihat Sebuah Jendela yang Terbuka", category: "kejadian", desc: "Akan memperoleh kepuasan batin." },
    { title: "Mimpi Meloncat Lewat Jendela", category: "kejadian", desc: "Akan rugi di bidang keuangan." },
    { title: "Mimpi Melihat Seorang Menteri atau Jenderal", category: "kejadian", desc: "Akan memperoleh suatu kehormatan." },
    { title: "Mimpi Menjadi Jenderal", category: "kejadian", desc: "Akan memperoleh tugas berat." },
    { title: "Mimpi Berhubungan dengan Seorang Jenderal", category: "kejadian", desc: "Usaha anda akan berhasil, karena ada bantuan dari luar." },
    { title: "Mimpi Melihat Joki", category: "kejadian", desc: "Ada kemajuan dalam usaha." },
    { title: "Mimpi Duduk Sebagai Juri", category: "kejadian", desc: "Akan berselisih dengan orang yang dicintainya." },
    { title: "Mimpi Menjadi Seorang Koki (Juru Masak)", category: "kejadian", desc: "Alamat baik, disenangi orang, usaha berhasil." },
    { title: "Mimpi Dilantik Jadi Juru Rawat", category: "kejadian", desc: "Akan memperoleh jodoh yang menyenangkan." },
    { title: "Mimpi Melihat Juru Rawat", category: "kejadian", desc: "Ada usaha baru yang lebih baik." },
    { title: "Mimpi Jatuh Cinta Pada Juru Rawat", category: "kejadian", desc: "Usaha anda berhasil dengan menyenangkan." },
    { title: "Mimpi Berada di Dalam Kabin Kapal", category: "kejadian", desc: "Ada kesulitan dalam hal hukum." },
    { title: "Mimpi Memasang Kaca di Jendela", category: "kejadian", desc: "Akan terasa suatu kepuasan." },
    { title: "Mimpi Memakai Kacamata", category: "kejadian", desc: "Akan bisa menyelesaikan kewajiban dengan baik." },
    { title: "Mimpi Melihat Kaca Pembesar", category: "kejadian", desc: "Akan memperoleh uang." },
    { title: "Mimpi Duduk Semeja dengan Kakek dan Nenek", category: "kejadian", desc: "Akan panjang umur." },
    { title: "Mimpi Menerima Hadiah dari Kakek atau Nenek", category: "kejadian", desc: "Tanda bagi suatu warisan." },
    { title: "Mimpi Melihat Kamar Tidur yang Asing", category: "kejadian", desc: "Akan ada persahabatan baru." },
    { title: "Mimpi Melihat Kamar Tidur Sendiri", category: "kejadian", desc: "Akan merasa kecewa." },
    { title: "Mimpi Dalam Kapal Penjelajah", category: "kejadian", desc: "Akan berhasil dalam segala usaha." },
    { title: "Mimpi Melihat Kecelakaan Pesawat Terbang", category: "kejadian", desc: "Akan bersedih atau kecewa." },
    { title: "Mimpi Menjadi Pilot Pesawat Terbang", category: "kejadian", desc: "Akan memperoleh imbalan yang besar." },
    { title: "Mimpi Jatuh dari Pesawat Terbang", category: "kejadian", desc: "Alamat suatu musibah / kemalangan." },
    { title: "Mimpi Menjadi Kapten Tentara atau Kapten Kapal", category: "kejadian", desc: "Keberuntungan anda semakin baik." },
    { title: "Mimpi Bergurau dengan Kawan", category: "kejadian", desc: "Akan terjadi perpisahan." },
    { title: "Mimpi Menolong Seorang Kawan", category: "kejadian", desc: "Ada bantuan dari pihak teman." },
    { title: "Mimpi Melihat Kawat Berduri", category: "kejadian", desc: "Akan disukai lawan jenis anda." },
    { title: "Mimpi Terluka Kawat Berduri", category: "kejadian", desc: "Akan memperoleh kekasih baru." },
    { title: "Mimpi Melihat Kecelakaan Mobil", category: "kejadian", desc: "Berhati-hatilah di jalan, kalau bisa selama 24 jam jangan bepergian mengendarai mobil." },
    { title: "Mimpi Terluka Dalam Suatu Kecelakaan", category: "kejadian", desc: "Berhati-hatilah di dalam usaha." },
    { title: "Mimpi Merasakan Kecewa", category: "kejadian", desc: "Akan terpenuhi semua harapan anda." },
    { title: "Mimpi Melakukan Suatu Kejahatan", category: "kejadian", desc: "Alamat harus tetap sabar jangan terburu nafsu." },
    { title: "Mimpi Terkejut", category: "kejadian", desc: "Akan memperoleh kepuasan, keberuntungan." },
    { title: "Mimpi Mengejutkan Orang Lain", category: "kejadian", desc: "Usaha anda mengalami kemunduran." },
    { title: "Mimpi Melihat Suatu Kekejaman", category: "kejadian", desc: "Akan terjadi suatu perubahan di lingkungan anda." },
    { title: "Mimpi Melakukan Kekeliruan Ringan", category: "kejadian", desc: "Segala kesulitan bisa teratasi." },
    { title: "Mimpi Melihat Orang Lain Melakukan Kekeliruan", category: "kejadian", desc: "Akan ada hal yang mengecewakan." },
    { title: "Mimpi Terlibat Dalam Suatu Perkelahian", category: "kejadian", desc: "Akan mendapat penghargaan diri." },
    { title: "Mimpi Melihat Orang Berkelahi", category: "kejadian", desc: "Akan memperoleh keberuntunaan." },
    { title: "Mimpi Mendengar Kelakar Orang", category: "kejadian", desc: "Akan datang seorang tamu yang tidak disukai." },
    { title: "Mimpi Melihat Sebuah Kereta Api", category: "kejadian", desc: "Seorang teman akan meninggalkan anda." },
    { title: "Mimpi Melihat Rangkaian Kereta Api yang Lurus", category: "kejadian", desc: "Akan ada pertolongan dari seorang teman." },
    { title: "Mimpi Bepergian Naik Kereta Api", category: "kejadian", desc: "Akan ada perkembangan baik dan cepat." },
    { title: "Mimpi Jadi Masinis Kereta Api", category: "kejadian", desc: "Akan menemukan hobbi baru." },
    { title: "Mimpi Keluar dari Kereta Api", category: "kejadian", desc: "Akan tercapai cita-cita anda." },
    { title: "Mimpi Naik Lokomotif Kereta Api", category: "kejadian", desc: "Ada harapan-harapan baik dalam usaha anda." },
    { title: "Mimpi Melihat Orang Kerdil", category: "kejadian", desc: "Akan memperoleh kesehatan badan dan makmur." },
    { title: "Mimpi Memakai Kerudung atau Tudung", category: "kejadian", desc: "Akan merasa kesepian." },
    { title: "Mimpi Merasa Kesepian", category: "kejadian", desc: "Akan senang banyak teman." },
    { title: "Mimpi Melihat Kota Besar", category: "alam", desc: "Akan tidak puas dengan usaha-usaha anda." },
    { title: "Mimpi Melihat Kota Kecil", category: "alam", desc: "Akan mendapatkan kepuasan dan kedamaian." },
    { title: "Mimpi Melihat Laksamana", category: "kejadian", desc: "Akan sukses semua usaha dan karir anda." },
    { title: "Mimpi Melihat Lapangan Berumput", category: "alam", desc: "Akan bahagia dalam rumah tangga." },
    { title: "Mimpi Melihat Lapangan Berumput Kering", category: "alam", desc: "Akan datang suatu penyakit." },
    { title: "Mimpi Melakukan Lawatan / Perjalanan", category: "kejadian", desc: "Akan muncul perkembangan keuangan." },
    { title: "Mimpi Memakai Lencana", category: "kejadian", desc: "Akan sukses usaha anda." },
    { title: "Mimpi Meludah atau Diludahi", category: "tubuh", desc: "Akan bahagia dan sukses usaha anda." },
    { title: "Mimpi Membeli Lembaran Lotere", category: "kejadian", desc: "Akan banyak dimusuhi orang." },
    { title: "Mimpi Memenangkan Lotere", category: "kejadian", desc: "Akan terjadi cekcok dengan sanak keluarga." },
    { title: "Mimpi Menggambar Lingkaran", category: "kejadian", desc: "Akan timbul sesuatu yang membingungkan." },
    { title: "Mimpi Mendengarkan Lonceng atau Genta Berbunyi", category: "kejadian", desc: "Alamat kematian seorang teman." },
    { title: "Mimpi Melihat Lonceng Tak Berbunyi", category: "kejadian", desc: "Akan terjadi kegagalan." },
    { title: "Mimpi Turun dengan Lift", category: "kejadian", desc: "Tanda kemerosotan dalam usaha." },
    { title: "Mimpi Naik ke Puncak Gedung dengan Lift", category: "kejadian", desc: "Tanda harapan baik menyenangkan." },
    { title: "Mimpi Melihat Suatu Lubang", category: "alam", desc: "Suatu peringatan jangan teledor." },
    { title: "Mimpi Bekerja Dalam Lubang Galian", category: "kejadian", desc: "Harus bekerja dengan hasil yang sedikit." },
    { title: "Mimpi Memberi Mainan Pada Anak Kecil", category: "kejadian", desc: "Anda sangat dicintai keluarga dan teman." },
    { title: "Mimpi Mendengar Suara Mandolin", category: "kejadian", desc: "Tanda baik tentang cinta dan keberuntungan." },
    { title: "Mimpi Mandi Air Panas", category: "kejadian", desc: "Alamat kena penyakit (sakit)." },
    { title: "Mimpi Mandi Air Dingin", category: "kejadian", desc: "Akan dapat mengalahkan musuh-musuhnya." },
    { title: "Mimpi Mandi di Tempat Terbuka", category: "kejadian", desc: "Alamat bisa tabah." },
    { title: "Mimpi Mandi Air yang Keruh", category: "kejadian", desc: "Akan sakit atau rugi." },
    { title: "Mimpi Mandi Air Jernih Sekali", category: "kejadian", desc: "Alamat suatu kebahagiaan." },
    { title: "Mimpi Melihat Matador Main dengan Banteng", category: "kejadian", desc: "Akan mendapat teman baru yang menarik hati." },
    { title: "Mimpi Melihat Mata Kaki Wanita", category: "tubuh", desc: "Akan terjadi kisah cinta." },
    { title: "Mimpi Duduk Menghadapi Meja Kantor", category: "kejadian", desc: "Alamat baik, naik jabatan atau keberuntungan." }
];

// Menggabungkan 100 data kelima ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch5);

// Segarkan tampilan UI agar 500 data total langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 100 DATA KEENAM (Tumbuhan, Buah, Bunga, & Makanan)
// =========================================================================

const tambahanMimpiBatch6 = [
    { title: "Mimpi Duduk Menghadapi Meja Makan", category: "kejadian", desc: "Alamat baik akan beruntung dalam usaha." },
    { title: "Mimpi Menangis", category: "kejadian", desc: "Alamat baik yang membahagiakan." },
    { title: "Mimpi Mendengar Tangisan Bayi", category: "kejadian", desc: "Akan datang berita yang mengejutkan." },
    { title: "Mimpi Melihat Menara yang Runtuh", category: "kejadian", desc: "Usaha anda akan gagal." },
    { title: "Mimpi Menaiki Tangga di Lantai Bangunan", category: "kejadian", desc: "Akan ada peningkatan keuangan." },
    { title: "Mimpi Menggali Tanah", category: "kejadian", desc: "Akan beruntung atau sukses dalam usaha." },
    { title: "Mimpi Mendatangkan Orang Menyanyi", category: "kejadian", desc: "Ada berita menyenangkan." },
    { title: "Mimpi Merajut Benang", category: "kejadian", desc: "Akan memperoleh anak atau cucu." },
    { title: "Mimpi Melihat Nyala Lampu Mercusuar", category: "kejadian", desc: "Akan beruntung dalam usaha dan cinta." },
    { title: "Mimpi Melihat Mercusuar di Siang Hari", category: "kejadian", desc: "Akan ada petualangan yang menarik." },
    { title: "Mimpi Bertengkar dengan Ibu Mertua", category: "kejadian", desc: "Harus sabar dan berhati-hati dalam pekerjaan." },
    { title: "Mimpi Mengetik", category: "kejadian", desc: "Akan sukses dalam bidang baru." },
    { title: "Mimpi Melihat Mumi", category: "kejadian", desc: "Akan ada untung besar dalam usaha anda." },
    { title: "Mimpi Melihat Minyak", category: "kejadian", desc: "Akan datang kedamaian dan kebahagiaan." },
    { title: "Mimpi Minum Minyak", category: "kejadian", desc: "Akan membenci orang yang suka bergaya." },
    { title: "Mimpi Minyak Terbakar, Menyala Tanpa Asap", category: "kejadian", desc: "Alamat baik, dapat bingkisan yang menyenangkan." },
    { title: "Mimpi Bekerja dengan Memakai Serba Minyak", category: "kejadian", desc: "Akan dapat menghalau semua rintangan." },
    { title: "Mimpi Mengendarai Mobil pada Jalur yang Salah", category: "kejadian", desc: "Akan melakukan perjalanan ke luar daerah atau ke luar negeri." },
    { title: "Mimpi Naik Mobil Mogok", category: "kejadian", desc: "Akan kecewa dalam bercinta." },
    { title: "Mimpi Mengendarai Mobil dengan Kekuatan Sedang", category: "kejadian", desc: "Alamat kesuksesan dan kebahagiaan." },
    { title: "Mimpi Mengalahkan Seorang Musuh", category: "kejadian", desc: "Suatu alamat yang baik." },
    { title: "Mimpi Dikalahkan oleh Musuh", category: "kejadian", desc: "Harus hati-hati, rencana anda bisa gagal." },
    { title: "Mimpi Menyalakan Bola Lampu Listrik", category: "kejadian", desc: "Alamat baik, beruntung dalam usaha." },
    { title: "Mimpi Melihat Buah Mangga", category: "alam", desc: "Alamat akan bersuka cita." },
    { title: "Mimpi Memetik Buah Pepaya yang Masak", category: "alam", desc: "Akan memperoleh uang banyak." },
    { title: "Mimpi Mengupas Buah Pepaya", category: "alam", desc: "Akan beruntung dalam usaha." },
    { title: "Mimpi Makan Buah Pepaya yang Matang", category: "alam", desc: "Akan memperoleh harta." },
    { title: "Mimpi Memakan Jeruk Manis atau Jeruk Lainnya", category: "alam", desc: "Alamat akan bergirang hati." },
    { title: "Mimpi Melihat Buah-buahan Jeruk", category: "alam", desc: "Alamat kesehatannya menurun." },
    { title: "Mimpi Meminum Air Jeruk", category: "alam", desc: "Alamat akan sukses dan bersenang-senang." },
    { title: "Mimpi Melihat Pohon Jeruk Berbuah Banyak", category: "alam", desc: "Akan terjadi peristiwa yang menyenangkan." },
    { title: "Mimpi Melihat Buah Jeruk Liman Segar-segar", category: "alam", desc: "Alamat baik, usaha berhasil." },
    { title: "Mimpi Melihat Buah-buahan", category: "alam", desc: "Akan mendapat untung dalam usaha." },
    { title: "Mimpi Memiliki Banyak Buah-buahan", category: "alam", desc: "Akan mendapat untung banyak." },
    { title: "Mimpi Makan Buah Delima Manis", category: "alam", desc: "Alamat akan bergirang hati." },
    { title: "Mimpi Melihat Buah Ketimun", category: "alam", desc: "Alamat akan ketemu orang berilmu." },
    { title: "Mimpi Makan Buah Apel", category: "alam", desc: "Alamat akan menghadapi sukses." },
    { title: "Mimpi Melihat Buah Apel", category: "alam", desc: "Alamat akan bahagia dalam hidup." },
    { title: "Mimpi Duduk di Atas Buah Apel", category: "alam", desc: "Akan mendengarkan kabar baik." },
    { title: "Mimpi Melihat atau Makan Bawang", category: "alam", desc: "Alamat badan anda akan sehat." },
    { title: "Mimpi Makan Nasi", category: "kejadian", desc: "Akan memperoleh harta." },
    { title: "Mimpi Memetik Buah-buahan", category: "alam", desc: "Alamat akan banyak rezeki." },
    { title: "Mimpi Memperoleh Buah Lontar", category: "alam", desc: "Alamat akan memperoleh apa yang dicari." },
    { title: "Mimpi Daun Jatuh di Tanah", category: "alam", desc: "Segala yang dikehendaki akan tercapai." },
    { title: "Mimpi Daun Jatuh Tidak di Tanah", category: "alam", desc: "Harus berhati-hati dalam bicara." },
    { title: "Mimpi Makan Buah Anggur", category: "alam", desc: "Akan menerima pusaka, ditawari kedudukan baik." },
    { title: "Mimpi Makan Buncis", category: "alam", desc: "Akan ada kesukaran dengan teman." },
    { title: "Mimpi Melihat Bunga", category: "alam", desc: "Akan datang keberuntungan." },
    { title: "Mimpi Melihat Tanaman Bunga Tumbuh Liar", category: "alam", desc: "Akan bertualangan penuh bahaya." },
    { title: "Mimpi Melihat Bunga Layu", category: "alam", desc: "Akan timbul kegagalan." },
    { title: "Mimpi Melihat Pohon-pohon Berbunga", category: "alam", desc: "Akan hidup makmur dan bahagia." },
    { title: "Mimpi Melihat Seikat Bunga Segar", category: "alam", desc: "Akan bercinta dan bahagia." },
    { title: "Mimpi Menyusun Bunga di Vas", category: "alam", desc: "Akan mengawali hidup baru." },
    { title: "Mimpi Melihat Bunga Mawar Berkembang", category: "alam", desc: "Akan jatuh cinta dan bahagia." },
    { title: "Mimpi Memegang Setangkai Bunga Bakung", category: "alam", desc: "Akan dicintai dan dihormati." },
    { title: "Mimpi Melihat Ada Bunga di Dalam Rumahnya", category: "alam", desc: "Akan datang orang yang mondok." },
    { title: "Mimpi Memakai Bunga di Kepala", category: "alam", desc: "Akan jadi buah bibir orang." },
    { title: "Mimpi Melihat atau Memegang Daun Bunga", category: "alam", desc: "Alamat berbahagia dalam cinta atau perkawinan." },
    { title: "Mimpi Makan Jagung", category: "alam", desc: "Alamat beruntung dan menyenangkan." },
    { title: "Mimpi Melihat Jerami", category: "alam", desc: "Alamat kemakmuran dalam perkawinan." },
    { title: "Mimpi Memotong Jerami", category: "alam", desc: "Alamat sukses dalam usaha." },
    { title: "Mimpi Ditumbuhi Rumput Kering", category: "alam", desc: "Akan mendapat anak yang sehat." },
    { title: "Mimpi Tertusuk Duri", category: "alam", desc: "Alamat jelek dapat kesukaran." },
    { title: "Mimpi Melihat Kentang", category: "alam", desc: "Akan beruntung dalam keuangan." },
    { title: "Mimpi Menanam Kentang", category: "alam", desc: "Akan memperoleh harta." },
    { title: "Mimpi Minum Kopi", category: "kejadian", desc: "Akan beruntung dalam waktu singkat." },
    { title: "Mimpi Makan Kobis", category: "alam", desc: "Anda akan segera kawin." },
    { title: "Mimpi Makan Lada", category: "alam", desc: "Akan bercinta atau hidup romantis." },
    { title: "Mimpi Melihat Bunga Melur", category: "alam", desc: "Akan dibanjiri rezeki." },
    { title: "Mimpi Minum Teh", category: "kejadian", desc: "Akan bermurah hati." },
    { title: "Mimpi Berada di Taman Bunga", category: "alam", desc: "Akan memperoleh kepuasan hidup." },
    { title: "Mimpi Melihat Anak Kecil di Taman Bunga", category: "alam", desc: "Akan kawin dengan orang yang setia." },
    { title: "Mimpi Makan Buah Tomat", category: "alam", desc: "Keluarga anda sehat dan bahagia." },
    { title: "Mimpi Makan Buah Peer", category: "alam", desc: "Alamat memperoleh kerugian." },
    { title: "Mimpi Makan Buah Keledung", category: "alam", desc: "Alamat kesehatan badan terganggu." },
    { title: "Mimpi Makan Buah Sarangan", category: "alam", desc: "Alamat akan dapat anak yang baik." },
    { title: "Mimpi Melihat Buah Bergelantung di Pohonnya", category: "alam", desc: "Pinangan anda diterima." },
    { title: "Mimpi Minum Air Buah-buahan", category: "alam", desc: "Keuangan anda akan membaik." },
    { title: "Mimpi Melihat Serumpun Bambu", category: "alam", desc: "Memperoleh teman baik." },
    { title: "Mimpi Menaburkan Padi", category: "alam", desc: "Akan datang berita baik." },
    { title: "Mimpi Makan Wortel", category: "alam", desc: "Akan hidup sehat bahagia." },
    { title: "Mimpi Menanam Wortel", category: "alam", desc: "Nasib baik dan kesehatan bagus." },
    { title: "Mimpi Melihat Pisang Goreng", category: "kejadian", desc: "Akan ada suatu perubahan yang memuaskan." },
    { title: "Mimpi Merebus Buah Pisang", category: "kejadian", desc: "Akan ada keuntungan besar dalam spekulasi anda." },
    { title: "Mimpi Menggoreng Buah Sukun", category: "kejadian", desc: "Ada harapan keuntungan usaha." },
    { title: "Mimpi Memakan Pisang Goreng", category: "kejadian", desc: "Akan memperoleh harta cukup banyak." },
    { title: "Mimpi Sukun Goreng", category: "kejadian", desc: "Ada tambahan uang masuk." },
    { title: "Mimpi Makan Bubur", category: "kejadian", desc: "Akan mempunyai banyak teman." },
    { title: "Mimpi Makan Coklat", category: "kejadian", desc: "Akan sehat dan kuat." },
    { title: "Mimpi Memberikan Coklat Kepada Seseorang", category: "kejadian", desc: "Akan sukses usaha anda." },
    { title: "Mimpi Ditawari Coklat Seseorang", category: "kejadian", desc: "Akan mendapat teman yang baik." },
    { title: "Mimpi Melihat Daun yang Hijau Subur", category: "alam", desc: "Keinginan anda akan terkabul." },
    { title: "Mimpi Melihat Daun Berguguran", category: "alam", desc: "Alamat akan kesulitan." },
    { title: "Mimpi Melihat Daun Layu atau Mengering", category: "alam", desc: "Alamat akan kecewa atau khawatir." },
    { title: "Mimpi Melihat Suatu Ladang Gandum", category: "alam", desc: "Anda akan kaya dan sehat walafiat." },
    { title: "Mimpi Melihat Ladang Jagung yang Hijau", category: "alam", desc: "Akan bahagia rumah tangga anda." },
    { title: "Mimpi Makan Jagung Bakar", category: "kejadian", desc: "Ada harapan baik usaha anda." },
    { title: "Mimpi Makan Jahe", category: "alam", desc: "Kisah cinta anda beralih secara mendadak." },
    { title: "Mimpi Melihat Jamur", category: "alam", desc: "Alamat kurang baik dalam bergaul." },
    { title: "Mimpi Makan Jamur Merang", category: "alam", desc: "Ada harapan-harapan yang baik." }
];

// Menggabungkan 100 data keenam ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch6);

// Segarkan tampilan UI agar 600 data total langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 100 DATA KETUJUH (Hewan, Buah & Tanaman Lanjutan)
// =========================================================================

const tambahanMimpiBatch7 = [
    { title: "Mimpi Makan Jamur Beracun", category: "alam", desc: "Alamat ada kerugian besar." },
    { title: "Mimpi Makan Kacang Goreng", category: "alam", desc: "Akan menjengkelkan kawan sendiri." },
    { title: "Mimpi Memetik Kacang Panjang", category: "alam", desc: "Ada keberhasilan dalam usaha." },
    { title: "Mimpi Makan Buah Kelapa", category: "alam", desc: "Akan teguh dan tabah dalam menghadapi musibah." },
    { title: "Mimpi Membelah Buah Kelapa", category: "alam", desc: "Akan dapat sedikit uang." },
    { title: "Mimpi Makan Kentang Rebus", category: "alam", desc: "Akan puas dan hidup makmur." },
    { title: "Mimpi Mengumpulkan Kentang", category: "alam", desc: "Alamat rumah tangga anda harmonis." },
    { title: "Mimpi Makan Buah Kurma", category: "alam", desc: "Anda sedang dicintai seseorang." },
    { title: "Mimpi Memetik Buah Kurma", category: "alam", desc: "Anda sedang merindukan cinta." },
    { title: "Mimpi Menyuguhkan Kurma", category: "alam", desc: "Anda akan dicium." },
    { title: "Mimpi Memegang Setangkai Bunga Lili", category: "alam", desc: "Akan dicintai dan dihormati orang." },
    { title: "Mimpi Makan Buah Nanas", category: "alam", desc: "Alamat anda bersuka cita." },
    { title: "Mimpi Membeli Buah Nanas", category: "alam", desc: "Akan berbahagia dalam hidup anda." },
    { title: "Mimpi Melihat Pisang", category: "alam", desc: "Akan menjalin persahabatan yang baik." },
    { title: "Mimpi Duduk di Atas Pohon atau Memanjat Pohon", category: "alam", desc: "Akan mendapat kedudukan yang baik." },
    { title: "Mimpi Menebang Pohon Sampai Roboh", category: "alam", desc: "Alamat tidak baik dalam hal cinta." },
    { title: "Mimpi Ada Pohon Roboh di Atas Bukit", category: "alam", desc: "Alamat akan turut pangkat atau derajat." },
    { title: "Mimpi Melihat Pohon Tebu", category: "alam", desc: "Alamat rezekinya mudah." },
    { title: "Mimpi Melihat Pohon Kurma", category: "alam", desc: "Akan memperoleh rezeki." },
    { title: "Mimpi Melihat Pohon Delima Berbuah Banyak", category: "alam", desc: "Akan diberi harta dan kesantosaan." },
    { title: "Mimpi Bercocok Tanam Tumbuh Subur", category: "alam", desc: "Usaha anda akan berhasil dan beruntung besar." },
    { title: "Mimpi Menanam Pohon Asam", category: "alam", desc: "Akan menyesal dan kecewa." },
    { title: "Mimpi Menanam Pohon Kelengkeng", category: "alam", desc: "Alamat baik akan mendapat kebahagiaan." },
    { title: "Mimpi Bersawah Ladang", category: "alam", desc: "Mudah memperoleh rezeki." },
    { title: "Mimpi Orang Mengantarkan Kayu Bakar ke Rumah Anda", category: "kejadian", desc: "Alamat akan makmur rezekinya." },
    { title: "Mimpi Banyak Kayu Bakar di Dalam Rumah", category: "kejadian", desc: "Akan mendapat untung." },
    { title: "Mimpi Menanam Tanaman Hias", category: "alam", desc: "Usahanya berhasil dengan baik." },
    { title: "Mimpi Menanam Pohon Kapas", category: "alam", desc: "Usahanya membawa hasil terputus-putus." },
    { title: "Mimpi Makan Rumput-rumputan (Tanaman Obat)", category: "alam", desc: "Akan mendapat faedah dan keuntungan." },
    { title: "Mimpi Memilih Tanaman Obat Menurut Jenisnya", category: "alam", desc: "Ada yang bermanfaat untuk masyarakat." },
    { title: "Mimpi Mencari Rumput-rumputan Atau Tanaman Obat", category: "alam", desc: "Anda akan merawat orang sakit." },
    { title: "Mimpi Makan Sayur-mayur", category: "alam", desc: "Akan memperoleh kenikmatan yang lama dilewatkan." },
    { title: "Mimpi Menanam Sayur-mayur (Bayam, Kobis)", category: "alam", desc: "Akan sehat dan bahagia." },
    { title: "Mimpi Melihat Tanaman Seledri", category: "alam", desc: "Akan terkenal dan kaya." },
    { title: "Mimpi Makan Daun Seledri", category: "alam", desc: "Akan dicintai orang banyak." },
    { title: "Mimpi Makan Buah Tomat", category: "alam", desc: "Akan diberi pekerjaan yang menyenangkan." },
    { title: "Mimpi Minum Air Tomat", category: "alam", desc: "Akan bepergian dengan pesawat terbang." },
    { title: "Mimpi Melihat Angsa", category: "hewan", desc: "Alamat keberuntungan untuk memperoleh kekasih." },
    { title: "Mimpi Memberi Makan Angsa", category: "hewan", desc: "Akan mendapat kawan setia." },
    { title: "Mimpi Melihat Banyak Kambing", category: "hewan", desc: "Usaha yang sukses dan dapat rezeki yang halal." },
    { title: "Mimpi Makan Daging Kambing", category: "hewan", desc: "Akan mendapat rezeki yang halal." },
    { title: "Mimpi Melihat Urat Pada Pipi Kambing", category: "hewan", desc: "Akan banyak hujan." },
    { title: "Mimpi Memerah Air Susu Kambing", category: "hewan", desc: "Akan merasa jengkel sebentar." },
    { title: "Mimpi Naik Kerbau atau Sapi", category: "hewan", desc: "Akan dapat kemuliaan dan kekayaan." },
    { title: "Mimpi Naik Seekor Kuda", category: "hewan", desc: "Akan berhasil tujuannya." },
    { title: "Mimpi Naik Seekor Onta", category: "hewan", desc: "Akan memperoleh kehormatan dan sukses pekerjaan anda." },
    { title: "Mimpi Naik Gajah", category: "hewan", desc: "Akan menjadi pejabat atau pemimpin." },
    { title: "Mimpi Naik Seekor Gajah yang Dihiasi Indah", category: "hewan", desc: "Akan disayangi orang besar atau orang kaya." },
    { title: "Mimpi Membunuh Gajah", category: "hewan", desc: "Akan ditaati orang." },
    { title: "Mimpi Melihat Gajah Berkelahi Dengan Gajah", category: "hewan", desc: "Alamat pejabat cekcok dengan pejabat." },
    { title: "Mimpi Melihat Gajah di Sebuah Sirkus", category: "hewan", desc: "Akan melakukan kebodohan." },
    { title: "Mimpi Melihat Induk Gajah Bersama Anaknya", category: "hewan", desc: "Keluarga anda akan hidup damai." },
    { title: "Mimpi Menyembelih Kambing", category: "hewan", desc: "Akan mendapat untung dalam usaha." },
    { title: "Mimpi Melihat Kijang Masuk Rumah Anda", category: "hewan", desc: "Alamat akan mendapat jodoh." },
    { title: "Mimpi Melihat Setan", category: "kejadian", desc: "Akan mengerjakan pekerjaan buruk." },
    { title: "Mimpi Membunuh Seekor Anjing", category: "hewan", desc: "Akan mendapat kemenangan dari musuhnya." },
    { title: "Mimpi Bermain-main Dengan Tikus", category: "hewan", desc: "Alamat akan dipermainkan musuhnya." },
    { title: "Mimpi Membunuh Tikus", category: "hewan", desc: "Akan bisa mengalahkan lawan-lawan anda." },
    { title: "Mimpi Melihat Binatang Ternak Kurus-kurus", category: "hewan", desc: "Akan mahal sandang pangan." },
    { title: "Mimpi Melihat Binatang Ternak Gemuk-gemuk", category: "hewan", desc: "Akan makmur dan murah sandang pangan." },
    { title: "Mimpi Bercakap-cakap Dengan Binatang", category: "hewan", desc: "Alamat akan memegang pekerjaan pembesar." },
    { title: "Mimpi Mengikuti Binatang Liar", category: "hewan", desc: "Alamat akan lanjut usia." },
    { title: "Mimpi Naik Kuda Berbaju Besi", category: "hewan", desc: "Alamat lepas dari malapetaka." },
    { title: "Mimpi Naik Kuda Putih", category: "hewan", desc: "Alamat akan mendapat kebahagiaan dunia akhirat." },
    { title: "Mimpi Makan Daging Kuda", category: "hewan", desc: "Alamat akan memperoleh kekayaan." },
    { title: "Mimpi Kucing Masuk Ke Rumah Anda", category: "hewan", desc: "Alamat ada orang yang mau menumpang ke rumah anda." },
    { title: "Mimpi Orang Ditangkap Serigala", category: "hewan", desc: "Alamat akan ditipu orang." },
    { title: "Mimpi Harimau Masuk Ke Kota", category: "hewan", desc: "Alamat negeri akan diserang musuh." },
    { title: "Mimpi Menjinakkan Harimau", category: "hewan", desc: "Alamat mendapat harta yang tidak halal." },
    { title: "Mimpi Minum Susu Sapi", category: "hewan", desc: "Alamat akan sejahtera." },
    { title: "Mimpi Minum Susu Kuda", category: "hewan", desc: "Alamat akan kaya dan lanjut usia." },
    { title: "Mimpi Melihat Banyak Ayam", category: "hewan", desc: "Akan puas hidupnya." },
    { title: "Mimpi Mengejar-ngejar Ayam", category: "hewan", desc: "Akan memperoleh pembantu." },
    { title: "Mimpi Menyembelih Ayam", category: "hewan", desc: "Akan menjadi orang mulia." },
    { title: "Mimpi Memperoleh Ayam", category: "hewan", desc: "Akan memperoleh anak / keturunan." },
    { title: "Mimpi Makan Daging Ayam", category: "hewan", desc: "Akan memperoleh harta." },
    { title: "Mimpi Kehilangan Ayam", category: "hewan", desc: "Akan kehilangan anak dan sanak keluarga." },
    { title: "Mimpi Memberi Makan Kepada Ayam", category: "hewan", desc: "Akan sukses pekerjaan anda." },
    { title: "Mimpi Dicakar Anak Kucing", category: "hewan", desc: "Akan diomong-kosongkan orang bodoh." },
    { title: "Mimpi Melihat Anjing Peliharaan", category: "hewan", desc: "Alamat akan bahagia." },
    { title: "Mimpi Melihat Anjing Menggoyang Buntutnya", category: "hewan", desc: "Alamat dengan mudah menyelesaikan urusan penting." },
    { title: "Mimpi Melihat Anjing Berkelahi", category: "hewan", desc: "Akan berdamai dengan lawan pertikaian anda." },
    { title: "Mimpi Digigit Seekor Anjing", category: "hewan", desc: "Peringatan agar anda waspada." },
    { title: "Mimpi Melihat Anjing Peliharaan Berbulu Putih", category: "hewan", desc: "Akan bersahabat dengan orang jujur dan setia." },
    { title: "Mimpi Melihat Anjing Menyalak", category: "hewan", desc: "Waspadalah banyak bahaya di sekitar anda." },
    { title: "Mimpi Melihat Seekor Domba yang Gemuk", category: "hewan", desc: "Alamat baik, mempunyai keluarga yang bahagia." },
    { title: "Mimpi Makan Belalang", category: "hewan", desc: "Alamat memperoleh uang yang halal." },
    { title: "Mimpi Ada Belalang Makan Padi", category: "hewan", desc: "Alamat akan senang, bahagia." },
    { title: "Mimpi Memegang Seekor Belibis", category: "hewan", desc: "Akan dikaruniai anak haram." },
    { title: "Mimpi Memegang Burung Perkutut", category: "hewan", desc: "Akan dikaruniai anak yang baik." },
    { title: "Mimpi Melihat Seekor Badak", category: "hewan", desc: "Akan berpengaruh besar dalam masyarakat." },
    { title: "Mimpi Menangkap Ikan", category: "hewan", desc: "Akan memperoleh uang tapi cepat habisnya." },
    { title: "Mimpi Makan Ikan", category: "hewan", desc: "Akan memperoleh uang yang halal." },
    { title: "Mimpi Melihat Ikan Paus", category: "hewan", desc: "Sahabat dekat anda akan pergi." },
    { title: "Mimpi Menangkap Ikan dari Air Jernih", category: "hewan", desc: "Akan berhasil dalam usaha anda." },
    { title: "Mimpi Melihat Orang Menangkap Ikan", category: "hewan", desc: "Akan memperoleh kembali keseimbangan batin." },
    { title: "Mimpi Melihat Ikan-ikan Besar", category: "hewan", desc: "Ada peningkatan keuangan." },
    { title: "Mimpi Melihat Ikan Kecil-kecil", category: "hewan", desc: "Hati anda akan kecewa." },
    { title: "Mimpi Melihat Ikan Emas", category: "hewan", desc: "Akan muncul pengantin yang kaya." },
    { title: "Mimpi Menangkap Ikan Emas", category: "hewan", desc: "Alamat kemujuran menyertai anda." }
];

// Menggabungkan 100 data ketujuh ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch7);

// Segarkan tampilan UI agar 700 data total langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 97 DATA KEDELAPAN (Hewan Lanjutan & Fenomena Alam)
// =========================================================================

const tambahanMimpiBatch8 = [
    { title: "Mimpi Makan Pepes Ikan Emas", category: "hewan", desc: "Akan memperoleh uang yang banyak." },
    { title: "Mimpi Melihat Kanguru dari Australia", category: "hewan", desc: "Usaha dagang anda akan berhasil baik." },
    { title: "Mimpi Melihat Jangkrik", category: "hewan", desc: "Alamat kehidupan anda akan baik." },
    { title: "Mimpi Bermain dengan Jangkrik", category: "hewan", desc: "Alamat kesehatan yang memuaskan." },
    { title: "Mimpi Melihat Seekor Katak", category: "hewan", desc: "Akan memperoleh uang banyak." },
    { title: "Mimpi Mendengar Katak Bernyanyi", category: "hewan", desc: "Akan mendapat pujian orang." },
    { title: "Mimpi Makan Katak Hidup", category: "hewan", desc: "Akan muncul penyakit." },
    { title: "Mimpi Membunuh Seekor Katak", category: "hewan", desc: "Akan rugi usaha anda." },
    { title: "Mimpi Menggenggam Seekor Katak", category: "hewan", desc: "Akan ada tambahan pemasukan." },
    { title: "Mimpi Melihat Seekor Kalajengking", category: "hewan", desc: "Ada orang yang mengancam anda." },
    { title: "Mimpi Disengat Seekor Kalajengking", category: "hewan", desc: "Dikhianati teman sendiri." },
    { title: "Mimpi Melihat Seekor Kadal", category: "hewan", desc: "Awas ada musuh dalam selimut." },
    { title: "Mimpi Melihat Kadal Hijau", category: "hewan", desc: "Kesalahpahaman dapat dijernihkan." },
    { title: "Mimpi Mengunjungi Sebuah Kebun Binatang", category: "kejadian", desc: "Akan berlibur di luar daerah atau luar negeri." },
    { title: "Mimpi Membawa Anak ke Kebun Binatang", category: "kejadian", desc: "Akan beruntung dalam masalah keuangan." },
    { title: "Mimpi Melihat Kelabang", category: "hewan", desc: "Akan merasa khawatir." },
    { title: "Mimpi Menunggang Keledai", category: "hewan", desc: "Akan dicemooh orang." },
    { title: "Mimpi Ditendang Seekor Keledai", category: "hewan", desc: "Akan ragu-ragu dalam bercinta." },
    { title: "Mimpi Melihat Keledai Berbulu Putih", category: "hewan", desc: "Akan sukses dalam urusan pribadi." },
    { title: "Mimpi Menangkap Seekor Kelinci", category: "hewan", desc: "Akan berkenalan dengan orang muda." },
    { title: "Mimpi Melihat Kelinci Putih", category: "hewan", desc: "Akan merasa bergembira dan sukses dalam usaha anda." },
    { title: "Mimpi Makan Kepiting Goreng", category: "hewan", desc: "Ada peningkatan keuangan." },
    { title: "Mimpi Merebus Kepiting", category: "hewan", desc: "Ada kecelakaan ringan." },
    { title: "Mimpi Melihat Kepiting", category: "hewan", desc: "Alamat usaha anda akan merugi." },
    { title: "Mimpi Membunuh Kijang", category: "hewan", desc: "Akan terjadi perpisahan." },
    { title: "Mimpi Melihat Seekor Kijang Makan Rumput", category: "hewan", desc: "Ada rasa cinta pada seseorang." },
    { title: "Mimpi Melihat Seekor Kucing Tertidur", category: "hewan", desc: "Ada kepuasan dalam cinta." },
    { title: "Mimpi Melihat Kumbang Merayap di Tubuh Anda", category: "hewan", desc: "Akan muncul kesulitan dalam masalah keuangan." },
    { title: "Mimpi Membunuh Seekor Kumbang", category: "hewan", desc: "Akan bisa mengatasi masalah keuangan." },
    { title: "Mimpi Melihat Seekor Kura-kura", category: "hewan", desc: "Akan ada yang membimbing anda." },
    { title: "Mimpi Menemukan Bangkai Seekor Kura-kura", category: "hewan", desc: "Akan kehilangan seorang kawan." },
    { title: "Mimpi Digigit Kutu Binatang", category: "hewan", desc: "Ada orang yang menagih hutang." },
    { title: "Mimpi Melihat Kutu di Tubuh Orang Lain", category: "hewan", desc: "Akan muncul suatu kekecewaan." },
    { title: "Mimpi Membunuh Seekor Kutu Binatang", category: "hewan", desc: "Akan untung besar usaha anda." },
    { title: "Mimpi Melihat Laba-laba", category: "hewan", desc: "Nasib anda sangat diragukan." },
    { title: "Mimpi Membersihkan Sarang Laba-laba", category: "hewan", desc: "Persahabatan akan retak." },
    { title: "Mimpi Melihat Sarang Laba-laba", category: "hewan", desc: "Jagalah perasaan anda dalam menghadapi lawan jenis anda." },
    { title: "Mimpi Melihat Burung Merpati Putih", category: "hewan", desc: "Harapan baik dalam usaha dan kebahagiaan dalam rumah tangga." },
    { title: "Mimpi Memakan Daging Merpati Goreng", category: "hewan", desc: "Akan memperoleh harta." },
    { title: "Mimpi Melihat Serombongan Merpati", category: "hewan", desc: "Anda akan melakukan suatu perjalanan." },
    { title: "Mimpi Melihat Seekor Merpati Bercumbu-cumbuan", category: "hewan", desc: "Akan bercinta dengan penuh kebahagiaan." },
    { title: "Mimpi Melihat Seekor Monyet", category: "hewan", desc: "Waspadalah terhadap para penipu." },
    { title: "Mimpi Memelihara Seekor Monyet", category: "hewan", desc: "Akan ada yang berkhianat." },
    { title: "Mimpi Melihat Monyet Memanjat Pohon", category: "hewan", desc: "Harapan yang cerah dalam masalah cinta." },
    { title: "Mimpi Melihat Seekor Naga yang Bengis", category: "hewan", desc: "Alamat akan rugi atau kehilangan." },
    { title: "Mimpi Membunuh Seekor Naga", category: "hewan", desc: "Anda terlepas dari kesulitan." },
    { title: "Mimpi Digigit Seekor Nyamuk", category: "hewan", desc: "Alamat akan bersedih." },
    { title: "Mimpi Membunuh Seekor Nyamuk", category: "hewan", desc: "Akan bisa mengatasi semua kesulitan." },
    { title: "Mimpi Melihat Ikan Paus", category: "hewan", desc: "Anda mengkhawatirkan sesuatu masalah." },
    { title: "Mimpi Membunuh Rusa", category: "hewan", desc: "Tanda perpisahan." },
    { title: "Mimpi Melihat Rusa Berlari-lari", category: "hewan", desc: "Terjadi kesalah-pahaman di antara kawan-kawan." },
    { title: "Mimpi Melihat Rusa Makan Rumput", category: "hewan", desc: "Akan jatuh cinta, tertarik lawan jenis." },
    { title: "Mimpi Melihat Sebuah Kandang Sapi", category: "hewan", desc: "Tanda kesembuhan suatu penyakit." },
    { title: "Mimpi Melihat Bangkai Sapi", category: "hewan", desc: "Akan rugi usaha anda." },
    { title: "Mimpi Memerah Susu Sapi", category: "hewan", desc: "Akan memperoleh uang banyak dengan mudah." },
    { title: "Mimpi Memakan Hidangan dari Daging Sapi", category: "hewan", desc: "Akan memperoleh harta dan kebahagiaan." },
    { title: "Mimpi Membeli Sapi Jantan", category: "hewan", desc: "Akan bersahabat dengan orang kaya." },
    { title: "Mimpi Melihat Sapi Jantan Berbulu Putih", category: "hewan", desc: "Akan maju dalam usaha." },
    { title: "Mimpi Melihat Awan Putih Berarak", category: "alam", desc: "Alamat sukses dalam segala usaha." },
    { title: "Mimpi Melihat Pemandangan yang Luas Dalam Suatu Jarak yang Tinggi", category: "alam", desc: "Akan mudah memperoleh rezeki dan kemuliaan." },
    { title: "Mimpi Melihat Awan Gelap dan Tebal", category: "alam", desc: "Akan menemui kesukaran dan jalan buntu." },
    { title: "Mimpi Dirinya Diliputi Awan Putih", category: "alam", desc: "Alamat akan diliputi rezeki yang banyak." },
    { title: "Mimpi Melihat Bintang di Langit", category: "alam", desc: "Alamat akan beroleh pengetahuan yang baik." },
    { title: "Mimpi Melihat Bintang Turun di Rumahnya", category: "alam", desc: "Akan memperoleh rezeki yang halal." },
    { title: "Mimpi Melihat Bintang-bintang di Langit Cerah", category: "alam", desc: "Alamat akan kecukupan segala keperluannya." },
    { title: "Mimpi Melihat Bulan Purnama", category: "alam", desc: "Usaha baik dan dikasihi orang agung." },
    { title: "Mimpi Melihat Gerhana Bulan", category: "alam", desc: "Akan sedih hatinya." },
    { title: "Mimpi Menelan Bulan", category: "alam", desc: "Akan tinggi derajatnya melebihi orang lain." },
    { title: "Mimpi Bulan Sabit", category: "alam", desc: "Akan ada orang kesusahan." },
    { title: "Mimpi Bulan Kembar", category: "alam", desc: "Alamat ada raja berlaga/berkelahi dengan raja." },
    { title: "Mimpi Kejatuhan Bulan", category: "alam", desc: "Akan terima rezeki nomplok." },
    { title: "Mimpi Mendarat di Bulan", category: "alam", desc: "Akan tercapai segala cita-cita." },
    { title: "Mimpi Melihat Matahari Berwarna Keemasan", category: "alam", desc: "Akan terjadi peristiwa yang sangat membahagiakan." },
    { title: "Mimpi Melihat Matahari Bersinar Cerah", category: "alam", desc: "Akan datang hari-hari yang memuaskan." },
    { title: "Mimpi Melihat Matahari Menyoroti Dalam Rumah", category: "alam", desc: "Akan terasa kebahagiaan di rumah." },
    { title: "Mimpi Melihat Matahari Tercermin di Air Tenang", category: "alam", desc: "Keberhasilan yang sebagian saja." },
    { title: "Mimpi Melihat Matahari Terbelah Dua", category: "alam", desc: "Alamat akan ada raja yang akan meninggal dunia." },
    { title: "Mimpi Melihat Dua Matahari", category: "alam", desc: "Ada dua kekuasaan di dalam negeri yang saling berhadapan dan akan terjadi bentrokan." },
    { title: "Mimpi Bulan Turun ke Pangkuannya", category: "alam", desc: "Alamat akan menjadi orang besar." },
    { title: "Mimpi Melihat Hujan Lebat", category: "alam", desc: "Akan ada saingan berat dalam bercinta." },
    { title: "Mimpi Melihat Hujan Gerimis", category: "alam", desc: "Alamat rezeki anda akan bertambah." },
    { title: "Mimpi Disambar Halilintar", category: "alam", desc: "Alamat akan diberi kemakmuran, tapi petaka bagi orang lain." },
    { title: "Mimpi Melihat Guruh Atau Kilat", category: "alam", desc: "Alamat akan berkurang rezekinya." },
    { title: "Mimpi Melihat Gunung Berapi", category: "alam", desc: "Alamat kurang baik bagi anda." },
    { title: "Mimpi Mendaki Gunung Tidak Pernah Jatuh", category: "alam", desc: "Akan sukses dalam usaha anda." },
    { title: "Mimpi Melihat Gunung dari Jauh", category: "alam", desc: "Ada problem tapi bisa diatasi, akan sentosa." },
    { title: "Mimpi Berada di Puncak Gunung", category: "alam", desc: "Alamat akan memperoleh kekayaan atau akan jadi kepala." },
    { title: "Mimpi Menuruni Sebuah Gunung", category: "alam", desc: "Usaha anda akan merugi." },
    { title: "Mimpi Jatuh dari Gunung", category: "alam", desc: "Alamat kurang baik, atau berbahaya bagi anda." },
    { title: "Mimpi Menggali Tanah di Gunung", category: "alam", desc: "Akan memperoleh sesuatu." },
    { title: "Mimpi Berada di Atas Bukit", category: "alam", desc: "Akan memperoleh harta." },
    { title: "Mimpi Melihat Hujan Lama Sekali Tidak Reda", category: "alam", desc: "Akan datang kemurahan rejekinya." },
    { title: "Mimpi Melihat Cahaya dari Langit", category: "alam", desc: "Ada harapan baik bagi penghidupan anda." },
    { title: "Mimpi Melihat Padang yang Luas", category: "alam", desc: "Akan memperoleh rezeki yang banyak." },
    { title: "Mimpi Merasa Pagi Hari", category: "kejadian", desc: "Alamat akan mendapat kebajikan." },
    { title: "Mimpi Melihat Sebuah Kolam", category: "alam", desc: "Alamat untung dalam usaha." },
    { title: "Mimpi Melihat Kolam Airnya Jernih", category: "alam", desc: "Alamat usaha yang sukses dan menguntungkan." },
    { title: "Mimpi Melihat Air Kotor, Berlumpur", category: "alam", desc: "Alamat tidak tenteram." }
];

// Menggabungkan 97 data kedelapan ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch8);

// Segarkan tampilan UI agar 797 data total langsung ter-render
displayDreams(dreamData);

// =========================================================================
// SCRIPT TAMBAHAN: 66 DATA KESEMBILAN (Air, Alam & Perhiasan) - BATCH TERAKHIR!
// =========================================================================

const tambahanMimpiBatch9 = [
    { title: "Mimpi Minum Air Jernih", category: "alam", desc: "Alamat akan beruntung, memperoleh ilmu." },
    { title: "Mimpi Mendengar Suara Guntur", category: "alam", desc: "Akan muncul pertengkaran atau kekhawatiran." },
    { title: "Mimpi Melihat Gurun Pasir", category: "alam", desc: "Anda akan sering menyendiri." },
    { title: "Mimpi Berada di Gurun Pasir", category: "alam", desc: "Akan meninggalkan kenikmatan atau kesenangan." },
    { title: "Mimpi Berada di Dalam Gua", category: "alam", desc: "Akan ada perubahan di lingkungan anda." },
    { title: "Mimpi Melihat Gelombang Tinggi", category: "alam", desc: "Akan hampa dalam percintaan." },
    { title: "Mimpi Melihat Riak-riak Gelombang di Pantai", category: "alam", desc: "Akan timbul semangat bekerja." },
    { title: "Mimpi Melihat Tanah Datar yang Luas", category: "alam", desc: "Alamat kegembiraan dan kebahagiaan." },
    { title: "Mimpi Berjalan di Tanah Datar", category: "alam", desc: "Perkembangan yang baik." },
    { title: "Mimpi Mengamati Sebuah Dataran dari Atas Bukit", category: "alam", desc: "Akan ada kemauan dalam usaha." },
    { title: "Mimpi Makan Tanah Liat", category: "kejadian", desc: "Alamat akan mendapat harta banyak." },
    { title: "Mimpi Melihat Tanah Liat", category: "alam", desc: "Alamat akan berduka cita." },
    { title: "Mimpi Melihat Batu Kecil-kecil", category: "alam", desc: "Akan terlepas dari kesukaran." },
    { title: "Mimpi Melihat Batu Besar", category: "alam", desc: "Akan dapat harta banyak." },
    { title: "Mimpi Melihat Benda-benda dari Batu", category: "alam", desc: "Dalam usaha atau perdagangan akan untung banyak." },
    { title: "Mimpi Dilempari Orang dengan Batu", category: "kejadian", desc: "Akan memperoleh harta yang tak diduga-duga." },
    { title: "Mimpi Melihat Sungai Airnya Jernih", category: "alam", desc: "Akan memperoleh ketenangan jiwa." },
    { title: "Mimpi Melihat Sungai Airnya Melimpah-limpah", category: "alam", desc: "Alamat murah sandang-pangan." },
    { title: "Mimpi Melihat Sungai Airnya Keruh", category: "alam", desc: "Alamat akan berpuasa / bertapa." },
    { title: "Mimpi Mandi di Sungai", category: "kejadian", desc: "Akan mendapat keberkatan." },
    { title: "Mimpi Menyelam di Sungai yang Airnya Sejuk", category: "kejadian", desc: "Akan mendapat bahagia dunia akhirat." },
    { title: "Mimpi Merasakan Air Laut Berubah Menjadi Tawar", category: "alam", desc: "Akan selamat dari marabahaya." },
    { title: "Mimpi Melihat Ombak Laut Naik ke Rumah Anda", category: "alam", desc: "Alamat akan beristeri / mendapat jodoh." },
    { title: "Mimpi Melihat Air Sungai Hilir-mudik atau Bolak-balik", category: "alam", desc: "Alamat akan mendapat harta." },
    { title: "Mimpi Melihat Air Sungai Bercampur Darah", category: "alam", desc: "Alamat penduduk menderita kesukaran." },
    { title: "Mimpi Kolam di Halaman Rumah Penuh Kotoran Orang", category: "kejadian", desc: "Akan dapat uang banyak tak diduga-duga." },
    { title: "Mimpi Melihat Pasir di Dalam Kali", category: "alam", desc: "Alamat akan untung dalam usaha." },
    { title: "Mimpi Melihat Bianglala Bersinar Merah", category: "alam", desc: "Alamat segala kemauannya akan terkabul." },
    { title: "Mimpi Melihat Telaga Banyak Airnya", category: "alam", desc: "Alamat akan memperoleh harta benda." },
    { title: "Mimpi Tenggelam di Dalam Telaga", category: "kejadian", desc: "Akan bebas dari kekuasaan orang." },
    { title: "Mimpi Mandi di Tepi Laut", category: "kejadian", desc: "Akan menemui suatu keasyikan bercinta." },
    { title: "Mimpi Berenang di Kolam", category: "kejadian", desc: "Alamat akan menghadapi kesukaran hidup." },
    { title: "Mimpi Berenang di Sungai Bisa Sampai ke Tepi", category: "kejadian", desc: "Akan sembuh dari sakit." },
    { title: "Mimpi Lebah Bersarang di Tepi Telaga dan Jauh ke Telaga", category: "alam", desc: "Alamat yang mimpi mendapat kemuliaan didukung oleh orang banyak." },
    { title: "Mimpi Matahari dan Bulan Sujud Kepada Anda", category: "alam", desc: "Alamat dapat pangkat tinggi, kedudukan baik." },
    { title: "Mimpi Angin Bertiup Sepoi-sepoi Basah", category: "alam", desc: "Alamat di dalam negeri aman sentosa." },
    { title: "Mimpi Berenang Tidak Sampai-sampai ke Tepian", category: "kejadian", desc: "Alamat mendapat kegagalan." },
    { title: "Mimpi Naik ke Udara Bebas", category: "kejadian", desc: "Akan senang dan rezekinya bertambah." },
    { title: "Mimpi Melompati Sungai yang Besar", category: "kejadian", desc: "Alamat ajalnya sudah dekat." },
    { title: "Mimpi Naik Perahu Tenggelam", category: "kejadian", desc: "Alamat sudah dekat ajalnya." },
    { title: "Mimpi Berlayar Antar Pulau untuk Berniaga", category: "kejadian", desc: "Alamat akan untung besar." },
    { title: "Mimpi Membuat Batu Bata", category: "kejadian", desc: "Akan memperoleh rezeki sedikit." },
    { title: "Mimpi Melihat Tumpukan Batu Bata", category: "kejadian", desc: "Kemantapan dalam usaha." },
    { title: "Mimpi Melihat Pelangi di Langit", category: "alam", desc: "Akan berdamai dengan lawan." },
    { title: "Mimpi Melihat Pulau di Tengah Samudera Luas", category: "alam", desc: "Akan merasa kesepian." },
    { title: "Mimpi Berada di Sebuah Pulau", category: "alam", desc: "Akan dapat pekerjaan baru." },
    { title: "Mimpi Melihat Komet (Bintang Berekor)", category: "alam", desc: "Akan terjadi kerusuhan." },
    { title: "Mimpi Melihat Bintang Beralih (Meteor)", category: "alam", desc: "Keinginan terbesar akan terkabul." },
    { title: "Mimpi Memakai Ikat Pinggang", category: "kejadian", desc: "Alamat akan lanjut usia." },
    { title: "Mimpi Memakai Gelang Besi di Lengan Kanan", category: "kejadian", desc: "Alamat kurang baik, akan bekerja berat." },
    { title: "Mimpi Memakai Gelang Perak di Kaki", category: "kejadian", desc: "Alamat akan mendapat kebahagiaan." },
    { title: "Mimpi Memakai Permata Mutu Manikam", category: "kejadian", desc: "Alamat baik dapat harta, dapat pusaka atau anak." },
    { title: "Mimpi Melihat Emas, Perak Atau Timah", category: "kejadian", desc: "Akan gagal usaha anda." },
    { title: "Mimpi Melihat di Rumah Banyak Emas dan Perak", category: "kejadian", desc: "Alamat bebas dari segala hutang." },
    { title: "Mimpi Memakai Gelang Tangan", category: "kejadian", desc: "Akan tersesat dari tujuan semula." },
    { title: "Mimpi Memakai Giwang Atau Anting", category: "kejadian", desc: "Akan membaik kehidupannya." },
    { title: "Mimpi Memberi Giwang", category: "kejadian", desc: "Usaha anda akan macet." },
    { title: "Mimpi Memakai Kalung", category: "kejadian", desc: "Akan mempunyai pasangan hidup yang baik dan jujur." },
    { title: "Mimpi Diberi Kalung Orang", category: "kejadian", desc: "Alamat punya teman yang jujur." },
    { title: "Mimpi Diberi Cincin", category: "kejadian", desc: "Akan segera berumah tangga." },
    { title: "Mimpi Kehilangan Cincin", category: "kejadian", desc: "Akan bercerai atau kehilangan pasangan." },
    { title: "Mimpi Memakai Kalung Mutiara", category: "kejadian", desc: "Akan hidup bahagia." },
    { title: "Mimpi Menerima Perhiasan Mutiara", category: "kejadian", desc: "Alamat kurang baik, akan cemas atau berduka." },
    { title: "Mimpi Melihat Banyak Mutiara", category: "kejadian", desc: "Akan bersedih hati." },
    { title: "Mimpi Melihat Butir-butir Intan", category: "kejadian", desc: "Ada hubungannya dengan perkawinan dan kekayaan." },
    { title: "Mimpi Berpakaian Serba Indah Seperti Ratu", category: "kejadian", desc: "Akan memperoleh keuntungan / sukses usaha anda." }
];

// Menggabungkan 66 data terakhir ini ke dalam array utama
dreamData.push(...tambahanMimpiBatch9);

// Segarkan tampilan UI agar 863 DATA TOTAL langsung ter-render
displayDreams(dreamData);

// =========================================================================
// TAMAT - SELURUH DATA TELAH BERHASIL DIMASUKKAN
// =========================================================================
