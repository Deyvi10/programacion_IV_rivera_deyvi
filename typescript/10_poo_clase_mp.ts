// Control de Inventario — Deyvi Rivera
// Clases, constructor y métodos para gestionar el stock de un producto

class Producto {
    public nombre: string;
    public stock: number;
    public capacidadMaxima: number;

    constructor(
        nombre: string,
        stock: number,
        capacidadMaxima: number,
    ){
        this.nombre = nombre;
        this.stock = stock;
        this.capacidadMaxima = capacidadMaxima;

    }
    vender (): void{
        this.stock -= 5;
        console.log(`${this.nombre} registra una salida de inventario`);
    }

    ampliarCapacidad(): void{
        this.capacidadMaxima += 10;
        console.log(`${this.nombre} ha ampliado su capacidad de almacenamiento`);
    }
}

const taladro = new Producto("Taladro 01", 80, 100);
const papelBond = new Producto("Papel Bond 02", 90, 100);

taladro.vender();
console.log(papelBond.stock);
papelBond.ampliarCapacidad();
papelBond.ampliarCapacidad();
console.log(papelBond.capacidadMaxima);
papelBond.vender();
papelBond.vender();
console.log(papelBond.stock);
