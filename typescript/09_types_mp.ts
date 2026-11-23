// Control de Inventario — Deyvi Rivera
// Tipos alias, intersecciones e interfaces para productos de inventario

type CodigoProducto = string | number;
type SKU = string;
type CoordenadasBodega = [number, number];
type Ubicacion = {
    pasillo: number;
    estante: number;
};

const ubicacionOrigen: Ubicacion = { pasillo: 0, estante: 0 };
const codigoProducto: CodigoProducto = 42;
const codigoProducto2: CodigoProducto = "SKU.001";

type UbicacionExtendida = Ubicacion & {
    nivel: number;
};

interface Producto {
    readonly id: number;
    nombre: string;
    categoria: string;
    foto?: string;
}

interface ProductoRefrigerado extends Producto {
    temperatura: string;
}

const p: Producto = {
    id: 1,
    nombre: "Taladro 01",
    categoria: "Ferretería"
};

const p2: Producto = {
    id: 2,
    nombre: "Papel Bond 02",
    categoria: "Papelería",
    foto: "foto_producto.png"
};

console.log(p);
console.log(p2);

const productoEspecial: ProductoRefrigerado = {
    id: 3,
    nombre: "Leche 03",
    categoria: "Alimentos",
    temperatura: "Refrigeración"
};
