// Calcular precio con IVA

// Variables
//  Calcular el precio con IVA de un producto
//  Mostrar textos con precios con y sin IVA

// Funciones
//  Crear funciones para calcular cuota de IVA e importe total


let ivaNormal = 10;
let precio = 50;

let importe;

function calcularCuota (base, iva = 21) {
    return base * iva /100;
}

function calcularPrecio (base, cuota) {

    return base + cuota;
}

// importe = precio + (precio * ivaNormal/100);

// console.log("El precio del producto sin IVA es: " + precio);
// console.log("El precio del producto con IVA es: " + importe);

let cuota = calcularCuota(precio, ivaNormal);
calcularPrecio(precio, cuota);

console.log (calcularCuota(precio, ivaNormal));
console.log (calcularPrecio(precio, cuota));