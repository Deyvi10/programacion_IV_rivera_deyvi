// tipos personalizados aplicados al control de inventario

type ID = string | number;
type Precio = number;
type Ubicacion = [pasillo: number, estante: number];

type Punto = {
    pasillo: number;
    estante: number;
};

const origen: Punto = { pasillo: 0, estante: 0 };
const idProducto: ID = 42;
const idProveedor: ID = "PRV-001";
const ubicacionCamiseta: Ubicacion = [2, 4];

type ProductoBase = Punto & {
    zona: string;
};

const productoBase: ProductoBase = { pasillo: 2, estante: 3, zona: "Bodega Norte" };

interface Producto {
    readonly id: number;
    nombre: string;
    precio: Precio;
    stock: number;
    categoria?: string;
}

interface ProductoPerecedero extends Producto {
    fechaVencimiento: string;
}

const producto1: Producto = {
    id: 1,
    nombre: "Camiseta Sport",
    precio: 12.5,
    stock: 25,
    categoria: "Ropa",
};

const producto2: Producto = {
    id: 2,
    nombre: "Leche Entera",
    precio: 1.25,
    stock: 40,
};

const producto3: ProductoPerecedero = {
    id: 3,
    nombre: "Yogurt Natural",
    precio: 2.1,
    stock: 18,
    categoria: "Alimentos",
    fechaVencimiento: "2026-11-15",
};

console.log(origen);
console.log(idProducto);
console.log(idProveedor);
console.log(ubicacionCamiseta);
console.log(productoBase);
console.log(producto1);
console.log(producto2);
console.log(producto3);
