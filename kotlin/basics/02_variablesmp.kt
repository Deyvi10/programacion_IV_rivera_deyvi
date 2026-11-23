// Control de Inventario — Deyvi Rivera
const val MAX_BODEGAS = 10

fun main() {
    var productos = 100
    println(productos)
    println("Autor: Deyvi Rivera")
    productos = 80 
    println("productos")
    println(productos)
    println("Tipos de variables en Kotlin")
    println("Tipo Integer o entero")
    var sku: Int = 14
    var stock: Int = 10
    println("sku : $sku")
    println("stock : $stock")

    println("Tipo LONG")
    var movimientos: Long = 9000000000000L
    println("movimientos : $movimientos")

    println("Tipo float")
    var peso: Float = 45.5f
    println("peso : $peso")

    println("Tipo double")
    var valorizacion: Double = 45.5
    println("valorizacion : $valorizacion")

    println("Tipo char un caracter")
    var categoria: Char = 'A'
    println("categoria : $categoria")

    println("Tipo String")
    var nombreProducto: String = "SKU-001"
    var bodega: String = "Bodega Central"
    println("nombreProducto : $nombreProducto, bodega : $bodega")

    println("Tipo Boolean")
    var productoActivo: Boolean = true
    println("productoActivo : $productoActivo")

    println("Val CONST VAR")
    val responsable = "Deyvi Rivera"
    var stockDisponible = 10
    println("responsable : $responsable")
    println("stockDisponible : $stockDisponible")
    println("MAX_BODEGAS : $MAX_BODEGAS")
}
