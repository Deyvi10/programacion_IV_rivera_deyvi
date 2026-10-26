// encapsulamiento aplicado al control de inventario

class Producto {
    private nombre: string;
    private precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    getStock(): number {
        return this.stock;
    }

    setPrecio(precio: number): void {
        if (precio > 0) {
            this.precio = precio;
        } else {
            console.log("El precio debe ser mayor que cero.");
        }
    }

    setStock(stock: number): void {
        if (stock >= 0) {
            this.stock = stock;
        } else {
            console.log("El stock no puede ser negativo.");
        }
    }

    vender(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a vender debe ser mayor que cero.");
            return;
        }

        if (cantidad > this.stock) {
            console.log(`No hay stock suficiente de ${this.nombre}.`);
            console.log(`Stock disponible: ${this.stock}`);
            return;
        }

        this.stock -= cantidad;
        console.log(`Venta realizada: ${cantidad} unidades de ${this.nombre}.`);
        console.log(`Stock restante: ${this.stock}`);
    }

    mostrarFicha(): void {
        console.log(`Producto: ${this.nombre}`);
        console.log(`Precio: $${this.precio}`);
        console.log(`Stock: ${this.stock} unidades`);
    }
}

const producto = new Producto("Camiseta Sport", 12.5, 25);
producto.mostrarFicha();

producto.setPrecio(-5);
producto.setStock(-3);

producto.vender(5);
producto.vender(50);

producto.setPrecio(14);
producto.setStock(30);
producto.mostrarFicha();
