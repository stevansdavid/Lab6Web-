
const inputTugas = document.getElementById("inputTugas");
const tambahTugas = document.getElementById("tambahTugas");
const daftarTugas = document.getElementById("daftarTugas");
const pesanTugas = document.getElementById("pesanTugas");

tambahTugas.addEventListener("click", function () {
    const tugas = inputTugas.value.trim();

    if (tugas === "") {
        pesanTugas.textContent = "Tulis tugas terlebih dahulu.";
        return;
    }

    const item = document.createElement("li");
    const teks = document.createElement("span");
    const tombolSelesai = document.createElement("button");
    const tombolHapus = document.createElement("button");

    teks.textContent = tugas;
    tombolSelesai.textContent = "Tandai selesai";
    tombolHapus.textContent = "Hapus";

    tombolSelesai.addEventListener("click", function () {
        item.classList.toggle("selesai");

        if (item.classList.contains("selesai")) {
            tombolSelesai.textContent = "Batalkan selesai";
        } else {
            tombolSelesai.textContent = "Tandai selesai";
        }
    });

    tombolHapus.addEventListener("click", function () {
        item.remove();
        pesanTugas.textContent = "Tugas berhasil dihapus.";
    });

    item.appendChild(teks);
    item.appendChild(tombolSelesai);
    item.appendChild(tombolHapus);
    daftarTugas.appendChild(item);

    inputTugas.value = "";
    pesanTugas.textContent = "Tugas berhasil ditambahkan.";
    inputTugas.focus();
});
