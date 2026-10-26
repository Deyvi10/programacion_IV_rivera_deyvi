// clases aplicadas al control de inventario

class Producto {
    nombre: string;
    precio: number;
    stock: number;

    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    vender(cantidad: number): void {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}.`);
            console.log(`Stock restante: ${this.stock}`);
        } else {
            console.log(`No hay stock suficiente de ${this.nombre}.`);
            console.log(`Stock disponible: ${this.stock}`);
        }
    }

    mostrarFicha(): void {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Stock: ${this.stock} unidades`);
    }
}

const camiseta = new Producto("Camiseta Sport", 12.5, 25);
camiseta.mostrarFicha();
camiseta.vender(5);
camiseta.vender(30);

// clase usando parámetros del constructor como propiedades
class Proveedor {
    constructor(
        public nombre: string,
        public pais: string,
        public productos: number
    ) {}

    mostrarProveedor(): void {
        console.log(`Proveedor: ${this.nombre}`);
        console.log(`País: ${this.pais}`);
        console.log(`Productos suministrados: ${this.productos}`);
    }
}

const proveedor = new Proveedor("SportTex", "Ecuador", 12);
proveedor.mostrarProveedor();
