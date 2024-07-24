document.addEventListener("DOMContentLoaded", function () {
    const hamburguesa = document.querySelector(".hamburguesa");
    const enlaces = document.querySelector(".enlaces");

    hamburguesa.addEventListener("click", function () {
        enlaces.classList.toggle("show");
    });
});