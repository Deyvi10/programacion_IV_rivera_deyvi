// Control de Inventario — Deyvi Rivera
data class Bodega(
    val nombre: String,
    val stock: Int
)

fun main(){
    var presupuestoTotal = 0.0
    println("Presupuesto de Reposición de Inventario")
    for (pedido in 1..6){
        val costoOriginal = pedido * 25
        var descuento = 0.0
        if (costoOriginal >= 100){
            descuento = costoOriginal * 0.20
        }
        val costoFinal = costoOriginal - descuento
        println("Pedido $pedido")
        println("Costo original: $costoOriginal")
        println("Descuento aplicado: $descuento")
        println("Costo final: $costoFinal")
        presupuestoTotal += costoFinal
    }
    println("Presupuesto total de reposición %1f créditos".format(presupuestoTotal))

    val bodegas = arrayOf(
        Bodega("Central", 30),
        Bodega("Norte", 65),
        Bodega("Sur", 95),
        Bodega("Occidente", 130),
        Bodega("Oriente", 45),
        Bodega("Deyvi Rivera", 89),
        Bodega("Principal", 75)
    )
    val stockMinimo = 50;
    for (bodega in bodegas){
        println("Bodega: ${bodega.nombre}")
        println("Stock: ${bodega.stock}")
        when{
            bodega.stock < 50 -> {
                println("Estado: STOCK CRÍTICO")
                println("Se requiere reposición urgente")
            }
            bodega.stock < 80 -> {
                println("Estado: STOCK BAJO")
            }
            bodega.stock < 120 -> {
                println("Estado: STOCK ESTABLE")
                println("No se requiere reposición")
            }
            else -> {
                println("Estado: EXCEDENTE DE STOCK")
            }
        }
        if (bodega.stock >= stockMinimo){
            val restante = bodega.stock - stockMinimo
            println("Despacho autorizado")
            println("Stock restante en bodega: $restante")
        }
    }
}
