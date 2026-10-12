// switch aplicado al control de inventario

// switch con rangos usando switch(true)
let nivelStock: number = 45;

switch (true) {
    case nivelStock >= 100:
        console.log("Nivel de stock: Excedente");
        break;
    case nivelStock >= 50:
        console.log("Nivel de stock: Óptimo");
        break;
    case nivelStock >= 10:
        console.log("Nivel de stock: Bajo");
        break;
    default:
        console.log("Nivel de stock: Crítico");
}

// switch clásico con categorías de producto
let categoria: string = "Electrónica";

switch (categoria) {
    case "Alimentos":
        console.log("Requiere control de caducidad.");
        break;
    case "Electrónica":
        console.log("Requiere control de garantía.");
        break;
    case "Ropa":
        console.log("Requiere control por tallas.");
        break;
    default:
        console.log("Categoría sin requisitos especiales.");
}

// switch numérico clásico
let almacen: number = 2;

switch (almacen) {
    case 1:
        console.log("Almacén Norte");
        break;
    case 2:
        console.log("Almacén Sur");
        break;
    case 3:
        console.log("Almacén Centro");
        break;
    default:
        console.log("Almacén desconocido");
}