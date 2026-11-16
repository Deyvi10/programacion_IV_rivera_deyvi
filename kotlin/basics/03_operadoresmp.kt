// Control de Inventario — Deyvi Rivera
fun main() {
    println("Operadores")
    println("Operadores Aritmeticos")

    var stockBodega1: Double = 10.50
    var stockBodega2: Double = 5.50
    val suma: Double = stockBodega1 + stockBodega2

    println("Suma +: $stockBodega1 + $stockBodega2 = ${stockBodega1 + stockBodega2}")
    println("Suma +: $stockBodega1 + $stockBodega2 = $suma")
    println("Resta -: $stockBodega1 - $stockBodega2 = ${stockBodega1 - stockBodega2}")
    println("Multiplicacion *: $stockBodega1 * $stockBodega2 = ${stockBodega1 * stockBodega2}")
    println("Division /: $stockBodega1 / $stockBodega2 = ${stockBodega1 / stockBodega2}")
    println("Residuo %: $stockBodega1 % $stockBodega2 = ${stockBodega1 % stockBodega2}")

    println("Prioridades de los operadores aritmeticos")
    println("1()")
    println("2 *,/,%")
    println("3+,-")
    val movimientos = 10 + 3 * 5 + 5
    println("Movimientos: $movimientos")
    val stockTotal = 15 / 5 * 5
    println("Stock total : $stockTotal")
    val valorizacion = 100 + 20 / 4 * 3 - 10 % 3
    println("valorizacion : $valorizacion")

    println("Operadores de Comparación")
    println("Igual a == ${10 == 10}")
    println("Igual a == ${10 == 11}")
    println("Diferente de != ${5 != 10}")
    println("Diferente de != ${10 != 10}")
    println("Mayor que > ${5 > 10}")
    println("Mayor que > ${15 > 10}")
    println("Menor que < ${5 < 10}")
    println("Menor que < ${15 < 10}")
    println("Mayor igual >= ${10 >= 10}")
    println("Mayor igual >= ${15 >= 10}")
    println("Mayor igual >= ${5 >= 10}")
    println("Menor igual <= ${10 <= 10}")
    println("Menor igual <= ${15 <= 10}")
    println("Menor igual <= ${5 <= 10}")
}
