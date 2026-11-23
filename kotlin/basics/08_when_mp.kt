// Control de Inventario — Deyvi Rivera
fun main(){
    val bodega = 2
    when(bodega){
        1-> println("Bodega: Central")
        2-> println("Bodega: Norte")
        3-> println("Bodega: Sur")
        else-> println("Bodega no disponible")
    }

    println("Incluya el día de conteo (1-7)")
    val dia = readLine()!!.toInt()
    when(dia){
        1,2,3,4,5-> println("Día laborable de alta rotación")
        6,7-> println("Día de inventario reducido")
        else-> println("Día inválido")
    }

    println("Ingrese el stock disponible del producto")
    val stock = readLine()!!.toInt()
    when(stock){
        in 0..39-> println("Stock bajo")
        in 40..79-> println("Stock medio")
        in 80..100-> println("Stock completo")
        else-> println("Nivel de stock inválido")
    }

    val stockProducto = 80
    val bodegaActiva = true
    val stockMinimo = 40
    when{
        stockProducto >= stockMinimo && bodegaActiva -> {
            val restante = stockProducto - stockMinimo
            println("Reposición autorizada")
            println("Stock restante: $restante")
        }
        stockProducto < stockMinimo && bodegaActiva -> println("Stock insuficiente")
        stockProducto >= stockMinimo && !bodegaActiva -> println("Bodega inactiva")
        else-> println("Reposición no autorizada")
    }
}
