// Control de Inventario — Deyvi Rivera
data class Validador(
    val stock: Int,
    val activo: Boolean
)

fun main(){
    for (i in 1..5){
        println("Revisando producto $i")
    }

    for (i in 10 downTo(5)){
        println("Revisando producto $i")
    }

    for (i in 1..20 step 2){
        println("Revisando producto $i")
    }

    for (i in 1..10){
        val resultado = 3 * i
        println("3 * $i = $resultado")
        println("3 * $i = ${i * 3}")
    }
}
