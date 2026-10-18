// Control de Inventario — Deyvi Rivera
// Funciones simples, opcionales, flecha, overloads y closures aplicadas al inventario

//Funciones Simples
function sumarStock(stock1: number, stock2: number): number {
    return stock1 + stock2;
}

const totalStock: number = sumarStock(10, 20);

console.log(`Total de unidades en stock: ${totalStock}`);

//Sin devolver un valor

function mostrarBodega(nombre: string): void {
    console.log(`Bodega: ${nombre}`);

    const productos: string[] = ["Taladro", "Papel Bond", "Detergente"];

    for (const producto of productos) {
        console.log(`Producto disponible: ${producto}`);
    }
}

mostrarBodega("Bodega Central");

//Funciones con parámetros opcionales
function registrarProducto(nombre: string, nivel?: number): void {
    if (nivel) {
        console.log(`El producto ${nombre} está registrado con stock ${nivel}`);
    } else {
        console.log(`El producto ${nombre} está registrado`);
        nivel = 1;
        console.log(`Stock por defecto: ${nivel}`);
    }
}

registrarProducto("Taladro 01", 5);
registrarProducto("Papel Bond 02");


function registrarProducto2(nombre: string, nivel: number = 1): void {
    console.log(`El producto ${nombre} está registrado con stock ${nivel}`);
}

registrarProducto2("Detergente 03", 5);
registrarProducto2("Brocha 04");

//Funciones Flecha

function potenciarValor(valor: number): number {
    return valor * 2;
}

const potenciarValorFlecha = (valor: number): number => valor * 2;

const valorOriginal: number = 50;
const valorPotenciado: number = potenciarValor(valorOriginal);

console.log(`Valor original: ${valorOriginal}, Valor potenciado: ${valorPotenciado}`);

const valorPotenciadoFlecha: number = potenciarValorFlecha(valorOriginal);
console.log(`Valor original: ${valorOriginal}, Valor potenciado: ${valorPotenciadoFlecha}`);


//FUNCIONES OVERLOADS

function formatear(valor: number): string;
function formatear(valor: string): string;
function formatear(valor: boolean): string;

function formatear(valor: number | string | boolean): string {
    if(typeof valor === "number"){
        return valor.toLocaleString("es-MX",{ minimumFractionDigits: 2})
    }
    if(typeof valor === "boolean"){
        return valor? "si":"no"
    }
    return `"${valor}"`
}

console.log(formatear(1233434.5))
console.log(formatear(true))
console.log(formatear("activo"))



//Closures

function crearContadorStock(inicio: number = 0){
    let cuenta = inicio;
    return{
        incrementar : () => ++cuenta,
        decrementar :() => --cuenta,
        valor:()=> cuenta,
        resetear: () => {cuenta = inicio;}
    }
}

const c1 = crearContadorStock();
const c2 = crearContadorStock(10);

c1.incrementar();
c1.incrementar();
c1.incrementar();
c2.incrementar();

console.log(c1.valor());
console.log(c2.valor());

c1.resetear()
console.log(c1.valor());
