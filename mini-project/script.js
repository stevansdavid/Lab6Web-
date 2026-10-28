
const formWorkshop = document.getElementById("formWorkshop");
const namaWorkshop = document.getElementById("nama");
const emailWorkshop = document.getElementById("email");
const sesiWorkshop = document.getElementById("sesi");
const hitungNama = document.getElementById("hitungNama");
const ringkasan = document.getElementById("ringkasan");
const pesanWorkshop = document.getElementById("pesan");

// Menghitung karakter nama
namaWorkshop.addEventListener("input", function () {
    hitungNama.textContent =
        namaWorkshop.value.length + "/40 karakter";
});

// Menampilkan sesi yang dipilih
sesiWorkshop.addEventListener("change", function () {
    if (sesiWorkshop.value === "") {
        ringkasan.textContent = "Belum ada sesi yang dipilih.";
    } else {
        ringkasan.textContent =
            "Sesi yang dipilih: " + sesiWorkshop.value;
    }
});

// Validasi formulir
formWorkshop.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = namaWorkshop.value.trim();
    const email = emailWorkshop.value.trim();
    const sesi = sesiWorkshop.value;
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama.length < 3) {
        pesanWorkshop.textContent =
            "Nama minimal 3 karakter.";
    } else if (!polaEmail.test(email)) {
        pesanWorkshop.textContent =
            "Masukkan email yang valid.";
    } else if (sesi === "") {
        pesanWorkshop.textContent =
            "Silakan pilih sesi workshop.";
    } else {
        pesanWorkshop.textContent =
            "Pendaftaran berhasil. Terima kasih, " + nama + "!";
    }
});

// Reset formulir
formWorkshop.addEventListener("reset", function () {
    pesanWorkshop.textContent = "";
    ringkasan.textContent = "";
    hitungNama.textContent = "0/40 karakter";
});
