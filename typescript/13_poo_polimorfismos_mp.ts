// polimorfismo aplicado al control de inventario

class Producto {
    constructor(
        public nombre: string,
        public precio: number
    ) {}

    calcularPrecioFinal(): number {
        return this.precio;
    }

    mostrarPrecio(): void {
        console.log(`${this.nombre}: $${this.calcularPrecioFinal().toFixed(2)}`);
    }
}

class ProductoPerecedero extends Producto {
    override calcularPrecioFinal(): number {
        return this.precio * 0.8;
    }
}

class ProductoElectronico extends Producto {
    override calcularPrecioFinal(): number {
        return this.precio * 1.15;
    }
}

const productos: Producto[] = [
    new Producto("Mochila Urbana", 25),
    new ProductoPerecedero("Yogurt Natural", 2.1),
    new ProductoElectronico("Audífonos Bluetooth", 35),
];

productos.forEach((producto) => producto.mostrarPrecio());
