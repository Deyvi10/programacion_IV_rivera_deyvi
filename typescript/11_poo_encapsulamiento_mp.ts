// Control de Inventario — Deyvi Rivera
// Encapsulamiento: proteger el stock de un producto

//Encapsulamiento
class Producto{
    private stock: number = 100;

    registrarSalida(cantidad: number): void {
        if (cantidad > 0) {
            this.stock = Math.max(0, this.stock - cantidad);
        }
    }
    consultarStock(): number {
        return this.stock;
    }
}
const producto01 = new Producto();
producto01.registrarSalida(50);
console.log(producto01.consultarStock());
producto01.registrarSalida(25);
console.log(producto01.consultarStock());
