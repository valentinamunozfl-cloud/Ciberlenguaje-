// Cuenta regresiva hacia el inicio del festival (hora de Colombia, UTC-5)
const reloj = document.querySelector(".cuenta__reloj");

if (reloj) {
  const destino = new Date(reloj.dataset.fecha).getTime();
  const campos = {
    dias: reloj.querySelector("[data-unidad='dias']"),
    horas: reloj.querySelector("[data-unidad='horas']"),
    minutos: reloj.querySelector("[data-unidad='minutos']"),
    segundos: reloj.querySelector("[data-unidad='segundos']"),
  };
  const cero = (n) => String(n).padStart(2, "0");

  const actualizar = () => {
    const falta = destino - Date.now();
    if (falta <= 0) {
      reloj.innerHTML = "<p class='cuenta__fin'>¡El festival ya comenzó!</p>";
      clearInterval(temporizador);
      return;
    }
    campos.dias.textContent = cero(Math.floor(falta / 86400000));
    campos.horas.textContent = cero(Math.floor(falta / 3600000) % 24);
    campos.minutos.textContent = cero(Math.floor(falta / 60000) % 60);
    campos.segundos.textContent = cero(Math.floor(falta / 1000) % 60);
  };

  const temporizador = setInterval(actualizar, 1000);
  actualizar();
}
