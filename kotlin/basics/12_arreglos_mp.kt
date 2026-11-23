// Control de Inventario — Deyvi Rivera
fun main(){
    val stockBodega = arrayOf(30, 50, 80, 100, 60)
    println(stockBodega[0])
    println(stockBodega[2])
    println(stockBodega[4])
    stockBodega[4] = 150
    println(stockBodega[4])
    for (stock in stockBodega){
        println("Stock")
        val stockDoble = stock * 2
        println("Stock doble $stockDoble")
        if (stockDoble >= 150){
            val stockReducidos = stockDoble - 70
            println("Stock en bodega reducido: $stockReducidos")
        }
    }
}
