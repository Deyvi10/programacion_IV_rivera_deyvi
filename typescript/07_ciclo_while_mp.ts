// ciclos while y do-while aplicados al control de inventario

// reposición de stock hasta alcanzar el máximo del almacén
let stock: number = 100;
const stockMaximo: number = 500;

while (stock < stockMaximo) {
    stock += 100;
    console.log(`Reponiendo inventario: ${stock} unidades en almacén.`);
}

// auditoría por niveles del inventario
let nivelAuditoria: number = 1;

while (nivelAuditoria <= 5) {
    console.log(`Nivel de auditoría de inventario: ${nivelAuditoria}`);
    nivelAuditoria++;
}

// despachos con validación aleatoria de disponibilidad
let despachos: number = 0;
let despachosExitosos: number = 0;

while (despachos < 10) {
    despachos++;
    const disponible = Math.random() < 0.5;
    if (disponible) {
        despachosExitosos++;
        console.log(`Despacho ${despachos}: producto entregado. Total de entregas: ${despachosExitosos}`);
    } else {
        console.log(`Despacho ${despachos}: sin stock. Total de entregas: ${despachosExitosos}`);
    }
}

// intentos de reposición con do-while
let intentosReposicion: number = 0;

do {
    intentosReposicion++;
    console.log(`Intento de reposición número: ${intentosReposicion}`);
} while (intentosReposicion < 3);

// recorrido de productos con continue y break
interface Producto {
    nombre: string;
    categoria: string;
    stock: number;
}

const productosInventario: Producto[] = [
    { nombre: "Camiseta Sport", categoria: "Ropa", stock: 40 },
    { nombre: "Audífonos Bluetooth", categoria: "Electrónica", stock: 8 },
    { nombre: "Teclado Mecánico", categoria: "Electrónica", stock: 0 },
    { nombre: "Mochila Urbana", categoria: "Accesorios", stock: 15 },
];

let indice: number = 0;

while (indice < productosInventario.length) {
    const producto = productosInventario[indice];
    if (!producto) break;

    if (producto.categoria === "Electrónica") {
        console.log(`Producto: ${producto.nombre}, Stock: ${producto.stock}`);
        indice++;
        continue;
    }

    if (producto.stock === 0) {
        console.log(`Sin stock: ${producto.nombre}`);
        break;
    }

    indice++;
}
