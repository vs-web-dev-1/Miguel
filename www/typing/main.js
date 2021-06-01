const frase = "En un lugar de la Mancha...";
let inicio = Date.now();
let haTerminado = false;

const nodoMensaje = document.getElementById("mensaje");
const nodoFrase = document.getElementById("frase");
const botonEmpezar = document.getElementById("empezar");
const inputLoTecleado = document.getElementById("lo-tecleado");

nodoMensaje.innerText = "";
nodoFrase.innerText = frase;

botonEmpezar.addEventListener('click',() => {
    inputLoTecleado.value = "";
    inicio = Date.now;
    haTerminado = false;
    });
inputLoTecleado.addEventListener("input", () => {
    if (haTerminado) return;
    const ahora = Date.now();
    const tiempo = (ahora - inicio) / 1000;
    const loTecleado = inputLoTecleado.value;
    if (loTecleado === frase) {
        nodoMensaje.innerText ="¡¡Noraboa!! has tardado " + tiempo;
        haTerminado = true;
    } else {
        if (frase.startsWith(loTecleado)) {
            nodoMensaje.innerText ="No va bien. Llevas " + tiempo;
        } else {
            nodoMensaje.innerText ="¡¡Vas muy mal!!Llevas " + tiempo;
        }
    }
});