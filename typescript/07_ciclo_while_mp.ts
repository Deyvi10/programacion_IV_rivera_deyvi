// Control de Inventario — Deyvi Rivera
// Ciclos while y do-while para el control de stock y conteos de bodega

let stockActual = 1024;
let stockMaximo = 2048;

while (stockActual < stockMaximo) {
    console.log(`Capacidad de la bodega: ${stockActual}`);
    stockActual += 256;
}

let movimientos = 0;
let entradasAprobadas = 0;

while (movimientos < 10) {
    movimientos++;
    let aprobado = Math.random() < 0.5;
    if (aprobado) {
        entradasAprobadas++;
        console.log(`Validación ${movimientos}: ¡Aprobada! Total aprobadas: ${entradasAprobadas}`);
    } else {
        console.log(`Validación ${movimientos}: Rechazada. Total aprobadas: ${entradasAprobadas}`);
    }
}

let conteos = 0;
do {
    conteos++;
    console.log(`Conteo físico número: ${conteos}`);
} while (conteos < 5);

interface Bodega {
    nombre: string;
    tipo: string;
    capacidad: number;
}

const bodegasEscaneadas: Bodega[] = [
    { nombre: "Bodega Norte", tipo: "Ferretería", capacidad: 1050 },
    { nombre: "Bodega Centro", tipo: "Papelería", capacidad: 1200 },
    { nombre: "Bodega Frío", tipo: "Alimentos", capacidad: 900 },
    { nombre: "Bodega Seca", tipo: "Limpieza", capacidad: 800 },
];

let indice = 0;
while (indice < bodegasEscaneadas.length) {
    const bodega = bodegasEscaneadas[indice];
    if (bodega?.tipo === "Ferretería") {
        indice++;
        continue;
    }
    if (bodega?.capacidad < 1000) {
        break;
    }
    console.log(`Bodega: ${bodega.nombre}, Tipo: ${bodega.tipo}, Capacidad: ${bodega.capacidad}`);
    indice++;
}
