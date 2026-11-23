// Control de Inventario — Deyvi Rivera
fun activarSistema(){
    println("Activando sistema de control de inventario")
    println("Conteo regresivo")
    println("1")
    println("2")
    println("3")
    println("Deyvi Rivera activó el sistema")
}

fun operarRuta(bodega: String, unidades: Int, productos: Int){
    println("Operando movimiento de picking en la bodega $bodega")
    val total = unidades * productos
    println("Total de productos movilizados: $total")
}

fun calcularTarifa(precio: Double): Double{
    var descuento: Double = 0.0
    if(precio >= 100){
        descuento = precio * 0.15
    }
    return descuento
}

fun calcularPasajerosTotales(stockPorBodega: Array<Int>): Int{
    var total = 0
    for(unidades in stockPorBodega){
        total += unidades
        if(unidades >= 100){
            println("Stock alto registrado: $unidades")
        }
    }
    return total
}

fun main(){
    activarSistema()
    activarSistema()
    operarRuta("Central", 5, 4)
    operarRuta("Norte", 4, 7)
    val descuentoProveedor = calcularTarifa(123.5)
    println("El proveedor Deyvi Rivera tiene un descuento en tarifa de $descuentoProveedor")
}
