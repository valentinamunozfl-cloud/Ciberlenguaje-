// Menú hamburguesa para celular y tableta
const boton = document.querySelector(".menu-boton");
const menu = document.querySelector("#menu-principal");

if (boton && menu) {
  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto);
  });
}
