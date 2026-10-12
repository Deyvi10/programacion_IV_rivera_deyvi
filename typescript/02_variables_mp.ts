// variables para el control de inventario

let stock: number = 25;
let precioUnitario: number = 12.5;
let disponible: boolean = true;
const nombreProducto: string = "Camiseta Sport";

let valorTotal: number = stock * precioUnitario;

console.log(`Producto: ${nombreProducto}`);
console.log(`Stock: ${stock} unidades`);
console.log(`Precio unitario: $${precioUnitario}`);
console.log(`Valor total del inventario: $${valorTotal}`);
console.log(`Producto disponible: ${disponible}`);

stock = 40;
valorTotal = stock * precioUnitario;
console.log(`Stock actualizado: ${stock}`);
console.log(`Nuevo valor total del inventario: $${valorTotal}`);