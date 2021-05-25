// Calcular precio con IVA

// Variables

//  Calcular el precio con IVA de un producto
//  Mostrar textos con precios con y sin IVA


let ivaNormal = 10;
let precio = 50;

let importe;

importe = precio + (precio * ivaNormal/100);

console.log("El precio del producto sin IVA es: " + precio);
console.log("El precio del producto con IVA es: " + importe);

