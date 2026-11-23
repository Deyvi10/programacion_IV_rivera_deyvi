// Control de Inventario — Deyvi Rivera
fun calcularTotal(costos: List<Int>): Int {
    var total = 0
    for (costo in costos) {
        total += costo
        if (costo > 150) {
            println("Costo de reposición elevado")
        }
    }
    return total
}

fun main(){
    val bodegas = listOf("Central", "Norte", "Sur")
    var iteracion: Int = 1
    for(bodega in bodegas){
        println("Bodega $iteracion: $bodega")
        iteracion++
    }
    val costos = listOf(100, 150, 200, 80, 120)
    val total = calcularTotal(costos)
    println("Costo total de inventario de Deyvi Rivera: $total")
}
