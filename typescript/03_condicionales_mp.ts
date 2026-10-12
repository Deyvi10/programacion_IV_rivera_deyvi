// condicionales aplicadas al control de inventario

let stock: number = 5;
let stockMinimo: number = 10;
let stockCritico: number = 3;

// condicional simple
if (stock < stockMinimo) {
    console.log("El producto está por debajo del stock mínimo.");
}

// condicional doble o de dos caminos
if (stock >= stockMinimo) {
    console.log("El producto tiene stock suficiente.");
} else {
    console.log("El producto necesita reposición.");
}

// condicional múltiple o de varios caminos
if (stock < stockCritico) {
    console.log("¡ALERTA CRÍTICA! Stock casi agotado.");
} else if (stock < stockMinimo) {
    console.log("ALERTA: Stock por debajo del mínimo.");
} else {
    console.log("Inventario en niveles normales.");
}

// condicional anidado
if (stock < stockMinimo) {
    if (stock < stockCritico) {
        console.log("Requiere reposición URGENTE.");
    } else {
        console.log("Requiere reposición.");
    }
} else {
    console.log("No requiere reposición.");
}

// condicional con operadores lógicos AND (&&)
let precioUnitario: number = 150;
let precioMayorista: number = 100;
let tienePromocion: boolean = true;

if (stock >= stockMinimo && precioUnitario >= precioMayorista) {
    console.log("Producto con stock suficiente y precio mayorista.");
} else {
    console.log("El producto no cumple ambas condiciones.");
}

// condicional con operadores lógicos OR (||)
if (stock <= stockCritico || tienePromocion) {
    console.log("Programar reposición o aplicar promoción.");
} else {
    console.log("El producto no necesita acciones especiales.");
}

// condicional compuesto final
stock = 12;
let estaVencido: boolean = false;

if (stock >= stockMinimo && !estaVencido) {
    console.log("El producto puede salir a la venta.");
} else {
    if (stock < stockCritico) {
        console.log("Producto agotado, reponer inmediatamente.");
    } else {
        console.log("El producto no está listo para la venta.");
    }
}