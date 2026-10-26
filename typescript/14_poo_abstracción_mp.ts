// abstracción aplicada al control de inventario

abstract class Producto {
    constructor(
        public nombre: string,
        public precio: number
    ) {}

    abstract calcularPrecioFinal(): number;

    mostrarFicha(): void {
        console.log(`${this.nombre} — Precio final: $${this.calcularPrecioFinal().toFixed(2)}`);
    }
}

class ProductoPerecedero extends Producto {
    calcularPrecioFinal(): number {
        return this.precio * 0.75;
    }
}

class ProductoElectronico extends Producto {
    calcularPrecioFinal(): number {
        return this.precio * 1.2;
    }
}

const productos: Producto[] = [
    new ProductoPerecedero("Leche Entera", 1.25),
    new ProductoElectronico("Teclado Mecánico", 45),
];

productos.forEach((producto) => producto.mostrarFicha());

abstract class MovimientoInventario {
    constructor(public producto: string) {}

    abstract ejecutar(): void;

    registrar(): void {
        console.log(`Registrando movimiento de ${this.producto}...`);
    }
}

class Entrada extends MovimientoInventario {
    ejecutar(): void {
        console.log(`Entrada de stock: ${this.producto}`);
    }
}

class Salida extends MovimientoInventario {
    ejecutar(): void {
        console.log(`Salida de stock: ${this.producto}`);
    }
}

const movimientos: MovimientoInventario[] = [
    new Entrada("Camiseta Sport"),
    new Salida("Audífonos Bluetooth"),
];

movimientos.forEach((movimiento) => {
    movimiento.registrar();
    movimiento.ejecutar();
});
