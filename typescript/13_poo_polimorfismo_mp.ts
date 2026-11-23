// Control de Inventario — Deyvi Rivera
// Polimorfismo: distintos productos registran movimientos de forma propia

class Producto{
    mover(): void {
        console.log("Movimiento básico de inventario");
    }
}

class ProductoFerreteria extends Producto {
    override mover(): void {
        console.log("El producto de ferretería registra una salida por venta");
    }
}

class ProductoPapeleria extends Producto{
    override mover(): void {
        console.log("El producto de papelería registra una entrada por reposición");
    }
}

const productos: Producto[]=[
    new ProductoFerreteria(),
    new ProductoPapeleria(),
    new ProductoPapeleria()
]

productos.forEach(producto => producto.mover())
