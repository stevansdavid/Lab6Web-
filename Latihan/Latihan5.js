
const form = document.getElementById("formPendaftaran");
const pesanForm = document.getElementById("pesanForm");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const email = document.getElementById("email").value.trim();
    const inputUsia = document.getElementById("usia").value.trim();
    const usia = Number(inputUsia);
    const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nama === "") {
        pesanForm.textContent = "Nama wajib diisi.";
    } else if (!polaEmail.test(email)) {
        pesanForm.textContent = "Format email tidak valid.";
    } else if (
        inputUsia === "" ||
        !Number.isInteger(usia) ||
        usia < 17 ||
        usia > 100
    ) {
        pesanForm.textContent = "Usia harus antara 17 sampai 100 tahun.";
    } else {
        pesanForm.textContent =
            "Pendaftaran berhasil! Data kamu valid.";
        form.reset();
    }
});
