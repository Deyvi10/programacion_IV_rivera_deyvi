// Control de Inventario — Deyvi Rivera
// Declaración de constantes y variables para el control de inventario

//Constantes

//Numerico
const STOCK_MINIMO: number = 15;
console.log("STOCK MÍNIMO:", STOCK_MINIMO);

const COSTO_UNITARIO_BASE: number = 15;
console.log("COSTO UNITARIO BASE:", COSTO_UNITARIO_BASE);

//Texto
const NOMBRE_BODEGA: string = "Bodega Central";
console.log("NOMBRE DE LA BODEGA:", NOMBRE_BODEGA);

//Booleano
const PRODUCTO_ACTIVO: boolean = true;
console.log("PRODUCTO ACTIVO:", PRODUCTO_ACTIVO);

//Variables

//LET
let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let responsable: string="Deyvi Rivera";
let agotado: boolean=false;
console.log(responsable);
console.log(agotado);

let categorias: string[]=["Ferretería","Papelería","Limpieza"];
console.log(categorias);

let proveedorAsignado: string | null = null;

let siguienteMovimiento: string | undefined;

let valorizacionAcumulada: bigint= 9876543222433667n;

//tipo symbol
let producto1: symbol=Symbol("SKU001");
console.log(producto1.description);
let producto2: symbol=Symbol("SKU001");
console.log(producto2.description);
console.log(producto1==producto2);


let producto: {
    sku: string;
    stock: number;
    vidaUtil: number;
    esCritico: boolean;
}={
    sku:"SKU001",
    stock: 5,
    vidaUtil: 100,
    esCritico: false
};
console.log(producto);
