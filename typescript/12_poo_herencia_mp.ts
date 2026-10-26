// herencia aplicada al control de inventario

class Producto {
    constructor(
        public nombre: string,
        public precio: number,
        public stock: number
    ) {}

    vender(): void {
        console.log(`${this.nombre} fue vendido del inventario.`);
    }

    mostrarProducto(): void {
        console.log(`Producto: ${this.nombre} | Precio: $${this.precio} | Stock: ${this.stock}`);
    }
}

class Perecedero extends Producto {
    constructor(
        nombre: string,
        precio: number,
        stock: number,
        public fechaVencimiento: string
    ) {
        super(nombre, precio, stock);
    }

    verificarVencimiento(): void {
        console.log(`${this.nombre} vence el ${this.fechaVencimiento}.`);
    }
}

class Electronico extends Producto {
    constructor(
        nombre: string,
        precio: number,
        stock: number,
        public mesesGarantia: number
    ) {
        super(nombre, precio, stock);
    }

    aplicarGarantia(): void {
        console.log(`${this.nombre} tiene ${this.mesesGarantia} meses de garantía.`);
    }
}

const leche = new Perecedero("Leche Entera", 1.25, 40, "2026-11-15");
leche.mostrarProducto();
leche.vender();
leche.verificarVencimiento();

const audifonos = new Electronico("Audífonos Bluetooth", 35, 10, 12);
audifonos.mostrarProducto();
audifonos.vender();
audifonos.aplicarGarantia();
