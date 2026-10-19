// Types aplicados al control de inventario

type IDProducto = string | number;
type Categoria = string;
type CoordenadasAlmacen = [number, number];
type Ubicacion = {
    pasillo: number;
    estante: number;
};

const origenAlmacen: Ubicacion = { pasillo: 1, estante: 0 };
const idProd: IDProducto = 1001;
const idProd2: IDProducto = "PROD-002";

type ProductoCompleto = Ubicacion & {
    codigo: IDProducto;
    stock: number;
};

interface Producto {
    readonly codigo: IDProducto;
    nombre: string;
    categoria: Categoria;
    stock: number;
    disponible?: boolean;
}

interface ProductoElectronico extends Producto {
    garantia: string;
    marca: string;
}

const producto1: Producto = {
    codigo: 1001,
    nombre: "Camiseta Sport",
    categoria: "Ropa",
    stock: 25
};

const producto2: Producto = {
    codigo: "PROD-002",
    nombre: "Laptop HP",
    categoria: "Electrónica",
    stock: 5,
    disponible: true
};

console.log(producto1);
console.log(producto2);

const laptop: ProductoElectronico = {
    codigo: "PROD-003",
    nombre: "Laptop Dell",
    categoria: "Electrónica",
    stock: 10,
    garantia: "1 año",
    marca: "Dell"
};

console.log(laptop);