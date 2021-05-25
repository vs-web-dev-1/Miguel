let radioMedio = 40;
const PI = 3.1416;
let rueda = 2 * PI * radioMedio;

const bici = {
    marca : 'BH',
    precio : 89,
    radio : radioMedio,
    rueda : 2 * PI * radioMedio,
}

//console.log(bici);
console.log("Mi bici " + bici.marca + " tiene una rueda de " + bici.rueda + "cm.");

let biciRadioMedio = bici.radio == radioMedio;

console.log(biciRadioMedio);

let uno = 1;
let dos = 2;
let mayor = dos > uno;
let menor = uno < dos;
let mayorIgual = dos >= dos;
let distinto = uno != dos;
let superDistindo =uno !== dos;
let superIgual =uno ===uno;
let cierto = true;
cierto = 1;
let falso = false;
falso = 0;
falso = !cierto;