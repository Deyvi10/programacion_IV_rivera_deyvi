// Control de Inventario — Deyvi Rivera
// Diferentes formas del ciclo for aplicadas al conteo de inventario

for (let i = 2; i < 50; i += 5) {
    console.log(`Reposición programada: ${i} unidades`);
}

for (let i = 50; i > 0; i -= 5) {
    console.log(`Control de inventario: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {
    if (i === 20) {
        console.log("El conteo de inventario ha terminado");
        break;
    }
    if (i === 30) {
        console.log("El conteo de inventario ha sido interrumpido");
        continue;
    }
    console.log(`Reposición programada: ${i} unidades`);
}

const productos: string[] = ["Taladro 01", "Papel Bond 05", "Detergente 02", "Resma 12", "Brocha 08"];
for (let i = 0; i < productos.length; i++) {
    console.log(`Producto: ${productos[i]}`);
}

for (const producto of productos) {
    console.log(`Producto: ${producto}`);
}

const nombreBodega: string = "Control de Inventario";
for (const letra of nombreBodega) {
    console.log(`Letra: ${letra}`);
}


interface Producto {
    nombre: string;
    nivelStock: number;
    tieneProveedor: boolean;
}

const inventario: Producto[] = [
    { nombre: "Taladro 01", nivelStock: 90, tieneProveedor: true },
    { nombre: "Taladro 02", nivelStock: 100, tieneProveedor: true },
    { nombre: "Papel Bond 03", nivelStock: 85, tieneProveedor: true },
    { nombre: "Detergente 04", nivelStock: 95, tieneProveedor: true },
    { nombre: "Brocha 05", nivelStock: 80, tieneProveedor: false }
];


for (const producto of inventario) {
    console.log(`Producto: ${producto.nombre}, Stock: ${producto.nivelStock}, Proveedor asignado: ${producto.tieneProveedor}`);
}


interface Bodega {
    nombre: string;
    tipo: string;
    capacidad: number;
}

const bodegas: Bodega[] = [
    { nombre: "Bodega Norte", tipo: "Ferretería", capacidad: 60 },
    { nombre: "Bodega Centro", tipo: "Papelería", capacidad: 50 },
    { nombre: "Bodega Frío", tipo: "Alimentos", capacidad: 80 },
    { nombre: "Bodega Seca", tipo: "Limpieza", capacidad: 45 },
    { nombre: "Bodega General", tipo: "Electrónicos", capacidad: 55 }
];

for (const bodega of bodegas) {
    console.log(`Bodega: ${bodega.nombre}, Tipo: ${bodega.tipo}, Capacidad: ${bodega.capacidad}`);
}


const stockPorBodega: Record<string, number> = {
    "Bodega Norte": 1000,
    "Bodega Centro": 500,
    "Bodega Sur": 2000
};

for (const bodega in stockPorBodega) {
    console.log(`Bodega: ${bodega}, Stock: ${stockPorBodega[bodega]}`);
}

const valoresPorBodega: Record<string, number> = {
    "Bodega Norte": 1000,
    "Bodega Centro": 500,
    "Bodega Sur": 2000
};

const movimientos: string[] = ["Entrada 1", "Entrada 2", "Salida 3", "Salida 4", "Ajuste 5"];

movimientos.forEach((movimiento, index) => {
    console.log(`Movimiento ${index + 1}: ${movimiento}`);
});

movimientos.map((movimiento, index) => {
    console.log(`Movimiento ${index + 1}: ${movimiento}`);
});
