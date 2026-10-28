
const judul = document.getElementById("judul");
const pesan = document.getElementById("pesan");
const tombol = document.getElementById("tombol");

judul.textContent = "Belajar JavaScript DOM";
pesan.textContent = "Konten berhasil diubah oleh JavaScript.";

tombol.addEventListener("click", function () {
    pesan.textContent =
        "Tombol diklik pada " + new Date().toLocaleTimeString();
});
