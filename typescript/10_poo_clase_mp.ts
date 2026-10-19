// POO - Clase aplicada al control de inventario

class Producto {
    public codigo: string;
    public nombre: string;
    public stock: number;
    public precioUnitario: number;

    constructor(
        codigo: string,
        nombre: string,
        stock: number,
        precioUnitario: number,
    ) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.stock = stock;
        this.precioUnitario = precioUnitario;
    }

    agregarStock(cantidad: number): void {
        this.stock += cantidad;
        console.log(`${this.nombre} - Stock actualizado: ${this.stock} unidades`);
    }

    vender(cantidad: number): void {
        if (cantidad <= this.stock) {
            this.stock -= cantidad;
            console.log(`${this.nombre} - Venta realizada. Stock restante: ${this.stock} unidades`);
        } else {
            console.log(`${this.nombre} - Stock insuficiente. Stock actual: ${this.stock} unidades`);
        }
    }

    calcularValor(): number {
        return this.stock * this.precioUnitario;
    }
}

const camiseta = new Producto("PROD001", "Camiseta Sport", 50, 15.50);
const laptop = new Producto("PROD002", "Laptop HP", 10, 850.00);

camiseta.vender(5);
console.log("Valor de inventario:", camiseta.calcularValor());
laptop.agregarStock(3);
laptop.agregarStock(2);
console.log("Valor de inventario:", laptop.calcularValor());
laptop.vender(5);
laptop.vender(10);
console.log("Stock final:", laptop.stock);