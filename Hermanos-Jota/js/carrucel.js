let btnIzq = Array.from(document.getElementsByClassName("btn-carru-iz")),
    btnDer = Array.from(document.getElementsByClassName("btn-carru-de")),
    carruselItemsSinfilter = Array.from(document.getElementsByClassName("conteiner-carrusel-img")),
    step = 295;

// un contador para cada carrusel
let contadores = [];

function Carru(direcc, i) {
    let carruselItems = carruselItemsSinfilter.filter(value =>
        value.classList.contains(`n${i}`)
    );

    // inicializar contador si no existe
    if (contadores[i] === undefined) contadores[i] = 0;

    // calcular nuevo cont
    let nuevoCont = contadores[i] + step * direcc;

    // limitar movimiento
    const maxCont = (carruselItems.length - 1) * step;
    nuevoCont = Math.max(0, Math.min(nuevoCont, maxCont));

    // aplicar transformación a cada <a>
    carruselItems.forEach(item => {
        item.style.transform = `translateX(-${nuevoCont}px)`;
        item.style.transition = "transform 0.5s";
    });

    // actualizar cont
    contadores[i] = nuevoCont;
}

// asignar eventos
btnIzq.forEach((value, i) => {
    value.addEventListener("click", () => Carru(-1, i));
});
btnDer.forEach((value, i) => {
    value.addEventListener("click", () => Carru(1, i));
});
