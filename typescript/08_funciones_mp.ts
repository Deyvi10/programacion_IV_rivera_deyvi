// funciones aplicadas al control de inventario

// funciones simples
function sumarStock(stockActual: number, stockIngresado: number): number {
    return stockActual + stockIngresado;
}

const stockTotal: number = sumarStock(25, 15);
console.log(`Stock total: ${stockTotal} unidades`);

// función sin devolver un valor
function mostrarCatalogo(categoria: string): void {
    console.log(`Categoría: ${categoria}`);
    const productos: string[] = ["Camiseta Sport", "Audífonos Bluetooth", "Mochila Urbana"];
    for (const producto of productos) {
        console.log(`Producto disponible: ${producto}`);
    }
}

mostrarCatalogo("Accesorios");

// funciones con parámetros opcionales
function registrarProducto(nombre: string, stock?: number): void {
    if (stock !== undefined) {
        console.log(`Producto ${nombre} registrado con ${stock} unidades.`);
    } else {
        console.log(`Producto ${nombre} registrado sin stock inicial.`);
        stock = 0;
        console.log(`Stock por defecto: ${stock}`);
    }
}

registrarProducto("Gorra Deportiva", 20);
registrarProducto("Bufanda Invernal");

// funciones con parámetros por defecto
function aplicarDescuento(precio: number, porcentaje: number = 10): number {
    return precio - (precio * porcentaje) / 100;
}

console.log(`Precio con descuento: $${aplicarDescuento(150)}`);
console.log(`Precio con descuento: $${aplicarDescuento(150, 25)}`);

// funciones flecha
function calcularValorInventario(stock: number, precio: number): number {
    return stock * precio;
}

const calcularValorInventarioFlecha = (stock: number, precio: number): number => stock * precio;

const stockCamisetas: number = 25;
const precioCamiseta: number = 12.5;
const valorCamisetas: number = calcularValorInventario(stockCamisetas, precioCamiseta);
console.log(`Valor inventario: $${valorCamisetas}`);

const valorCamisetasFlecha: number = calcularValorInventarioFlecha(stockCamisetas, precioCamiseta);
console.log(`Valor inventario (flecha): $${valorCamisetasFlecha}`);

// funciones overloads
function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

function formatear(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-EC", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "disponible" : "agotado";
    }
    return `"${valor}"`;
}

console.log(formatear(1250.5));
console.log(formatear(true));
console.log(formatear("Camiseta Sport"));

// closures
function crearContadorStock(inicio: number = 0) {
    let stock = inicio;
    return {
        incrementar: () => ++stock,
        decrementar: () => --stock,
        valor: () => stock,
        resetear: () => { stock = inicio; },
    };
}

const contadorA = crearContadorStock();
const contadorB = crearContadorStock(50);

contadorA.incrementar();
contadorA.incrementar();
contadorA.decrementar();
console.log(`Stock contador A: ${contadorA.valor()}`);
console.log(`Stock contador B: ${contadorB.valor()}`);

contadorA.resetear();
console.log(`Stock contador A después de resetear: ${contadorA.valor()}`);
