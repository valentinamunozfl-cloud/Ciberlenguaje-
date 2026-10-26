// Compra de boletas: ventana de compra con cálculo de total y descuento por grupo
const ventana = document.querySelector("#ventana-compra");
const formCompra = document.querySelector("#form-compra");

if (ventana && formCompra) {
  const selectPase = formCompra.querySelector("#pase");
  const cantidad = formCompra.querySelector("#cantidad");
  const totalTexto = document.querySelector("#total-compra");
  const detalleTexto = document.querySelector("#detalle-compra");
  const confirmacion = document.querySelector("#confirmacion-compra");
  const moneda = new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 });

  const calcular = () => {
    const precio = Number(selectPase.selectedOptions[0].dataset.precio);
    const n = Math.max(1, Math.min(10, Number(cantidad.value) || 1));
    const descuentoGrupo = n >= 4 ? 0.1 : 0;
    const total = precio * n * (1 - descuentoGrupo);
    totalTexto.textContent = moneda.format(total);
    detalleTexto.textContent = descuentoGrupo
      ? `${n} boletas con 10% de descuento por grupo`
      : `${n} boleta${n > 1 ? "s" : ""} (con 4 o más: 10% de descuento por grupo)`;
  };

  document.querySelectorAll("[data-comprar]").forEach((boton) => {
    boton.addEventListener("click", () => {
      selectPase.value = boton.dataset.comprar;
      confirmacion.hidden = true;
      formCompra.hidden = false;
      calcular();
      ventana.showModal();
    });
  });

  selectPase.addEventListener("change", calcular);
  cantidad.addEventListener("input", calcular);

  ventana.querySelectorAll("[data-cerrar]").forEach((b) => b.addEventListener("click", () => ventana.close()));

  formCompra.addEventListener("submit", (evento) => {
    evento.preventDefault();
    // Simulación académica: aquí se conectaría la pasarela de pago real
    formCompra.hidden = true;
    confirmacion.hidden = false;
  });
}
