// ciclos while aplicados al control de inventario

let stockActual = 10;
let stockMaximo = 50;

while (stockActual < stockMaximo) {
    console.log("Stock actual: ", stockActual);
    stockActual += 10;
}

let revisionAlmacen = 1;

while (revisionAlmacen <= 5) {
    console.log("Revisión de almacén número: ", revisionAlmacen);
    revisionAlmacen++;
}

let movimientos = 0;
let ingresosRegistrados = 0;
while (movimientos < 10) {
    movimientos++;
    let ingreso = Math.random() < 0.5;
    if (ingreso) {
        ingresosRegistrados++;
        console.log(`Movimiento ${movimientos}: Ingreso registrado. Total ingresos: ${ingresosRegistrados}`);
    } else {
        console.log(`Movimiento ${movimientos}: Salida registrada. Total ingresos: ${ingresosRegistrados}`);
    }
}

let lotesProcesados = 0;
do {
    lotesProcesados++;
    console.log(`Lote procesado número: ${lotesProcesados}`);
} while (lotesProcesados < 5);

interface ProductoInventario {
    codigo: string;
    nombre: string;
    categoria: string;
    stock: number;
}

const productosEscaneados: ProductoInventario[] = [
    { codigo: "PROD001", nombre: "Camiseta Sport", categoria: "Ropa", stock: 25 },
    { codigo: "PROD002", nombre: "Laptop HP", categoria: "Electrónica", stock: 5 },
    { codigo: "PROD003", nombre: "Lápiz HB", categoria: "Papelería", stock: 150 },
    { codigo: "PROD004", nombre: "Audífonos", categoria: "Electrónica", stock: 8 }
];

let indice = 0;
while (indice < productosEscaneados.length) {
    const producto = productosEscaneados[indice];
    if (producto?.categoria === "Electrónica") {
        console.log(`Producto: ${producto.nombre}, Código: ${producto.codigo}, Stock: ${producto.stock}`);
        indice++;
        continue;
    }

    if (producto?.stock < 10) {
        console.log(`Producto: ${producto.nombre}, Código: ${producto.codigo}, Stock: ${producto.stock} - REPOSICIÓN URGENTE`);
        break;
    }
    indice++;
}