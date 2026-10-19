// POO - Encapsulamiento aplicado al control de inventario

class Producto {
    private stock: number = 0;
    private precioUnitario: number;

    constructor(precioUnitario: number, stockInicial: number = 0) {
        this.precioUnitario = precioUnitario;
        this.stock = stockInicial;
    }

    agregarStock(cantidad: number): void {
        if (cantidad > 0) {
            this.stock += cantidad;
        }
    }

    vender(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.stock) {
            this.stock -= cantidad;
        }
    }

    consultarStock(): number {
        return this.stock;
    }

    consultarPrecio(): number {
        return this.precioUnitario;
    }

    valorTotal(): number {
        return this.stock * this.precioUnitario;
    }
}

const mouse = new Producto(25.50, 30);
mouse.vender(10);
console.log("Stock actual:", mouse.consultarStock());
mouse.vender(5);
console.log("Stock actual:", mouse.consultarStock());
console.log("Valor total:", mouse.valorTotal());