// Control de Inventario — Deyvi Rivera
data class Validador(
    var stock: Int,
    var activo: Boolean
)

data class Proveedor(
    var nombre: String,
    var calificacion: Int
)

data class Producto(
    val stock: Int,
    val bodegaActiva: Boolean,
    val autorizado: Boolean
)

fun main() {
    val validador = Validador(40, true)
    if (validador.stock >= 50 && validador.activo) {
        println("El producto es apto para reposición en bodega")
    }

    val stockPorBodega = arrayOf(20, 45, 85, 30, 60)
    if (stockPorBodega[2] > 70) {
        println("¡Alerta! Bodega con excedente de stock")
    } else {
        println("Stock moderado en bodega")
    }

    val conteosInventario = arrayOf(80, 65, 90)
    val suma = conteosInventario[0] + conteosInventario[1] + conteosInventario[2]
    val promedio = suma / 3.0
    if (promedio >= 70) {
        println("Inventario estable en bodega")
    } else {
        println("Inventario con discrepancia")
    }

    val proveedor = Proveedor("Deyvi Rivera", 65)
    println("Nombre del proveedor ${proveedor.nombre}")
    if (proveedor.calificacion >= 80) {
        println("Proveedor con desempeño óptimo")
    } else if (proveedor.calificacion >= 20) {
        println("Proveedor con desempeño normal")
    } else if (proveedor.calificacion >= 20) {
        println("Proveedor cercano al límite de evaluación")
    } else {
        println("Proveedor requiere revisión")
    }

    val producto = Producto(120, true, false)
    if (producto.stock >= 100) {
        if (producto.bodegaActiva) {
            if (producto.autorizado) {
                println("Salida de producto autorizada")
            } else {
                println("Producto sin autorización de despacho")
            }
        }
    } else {
        println("Stock insuficiente para despacho")
    }
}
