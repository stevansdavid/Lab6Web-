const teksGaya = document.getElementById("teksGaya");
const tombolGaya = document.getElementById("tombolGaya");

tombolGaya.addEventListener("click", function () {
    teksGaya.classList.toggle("highlight");
    teksGaya.classList.toggle("teks-besar");
});