// Funciones aplicadas al control de inventario

// Funciones Simples
function calcularValorInventario(stock: number, precioUnitario: number): number {
    return stock * precioUnitario;
}

const totalInventario: number = calcularValorInventario(50, 15.75);
console.log(`Valor total del inventario: $${totalInventario}`);

// Sin devolver un valor
function mostrarProductosEnAlmacen(nombreAlmacen: string): void {
    console.log(`Almacén: ${nombreAlmacen}`);
    const productos: string[] = ["Camiseta Sport", "Laptop HP", "Audífonos", "Mouse"];
    for (const producto of productos) {
        console.log(`Producto disponible: ${producto}`);
    }
}

mostrarProductosEnAlmacen("Almacén Sur");

// Funciones con parámetros opcionales
function registrarProducto(nombre: string, stock?: number): void {
    if (stock) {
        console.log(`Producto ${nombre} registrado con ${stock} unidades.`);
    } else {
        console.log(`Producto ${nombre} registrado.`);
        stock = 0;
        console.log(`Stock por defecto: ${stock} unidades`);
    }
}

registrarProducto("Teclado", 20);
registrarProducto("Monitor");

// Funciones con parámetro por defecto
function registrarProducto2(nombre: string, stock: number = 0): void {
    console.log(`Producto ${nombre} registrado con ${stock} unidades.`);
}

registrarProducto2("Impresora", 5);
registrarProducto2("Cargador");

// Funciones flecha
function calcularReposicion(falta: number): number {
    return falta * 1;
}

const calcularReposicionFlecha = (falta: number): number => falta * 2;

const unidadesFaltantes: number = 15;
const unidadesRecomendadas: number = calcularReposicion(unidadesFaltantes);
console.log(`Unidades faltantes: ${unidadesFaltantes}, Unidades a reponer: ${unidadesRecomendadas}`);

const unidadesRecomendadasFlecha: number = calcularReposicionFlecha(unidadesFaltantes);
console.log(`Unidades faltantes: ${unidadesFaltantes}, Unidades a reponer: ${unidadesRecomendadasFlecha}`);

// Funciones Overloads
function formatearInventario(valor: number): string;
function formatearInventario(valor: string): string;
function formatearInventario(valor: boolean): string;

function formatearInventario(valor: number | string | boolean): string {
    if (typeof valor === "number") {
        return valor.toLocaleString("es-MX", { minimumFractionDigits: 2 });
    }
    if (typeof valor === "boolean") {
        return valor ? "Disponible" : "No disponible";
    }
    return `"${valor}"`;
}

console.log(formatearInventario(12345.5));
console.log(formatearInventario(true));
console.log(formatearInventario("En revisión"));

// Closures
function crearContadorStock(inicio: number = 0) {
    let cuenta = inicio;
    return {
        incrementar: () => ++cuenta,
        decrementar: () => --cuenta,
        valor: () => cuenta,
        resetear: () => { cuenta = inicio; },
    };
}

const contador1 = crearContadorStock();
const contador2 = crearContadorStock(10);

contador1.incrementar();
contador1.decrementar();
contador1.valor();
contador1.resetear();

console.log(contador1.valor());
console.log(contador2.valor());

contador1.resetear();
console.log(contador1.valor());