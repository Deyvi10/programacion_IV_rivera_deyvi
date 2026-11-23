// Control de Inventario — Deyvi Rivera
fun main() {
    val productos = mutableListOf("SKU-001", "SKU-002", "SKU-003")

    var option: Int?
    do {
        println("\nControl de Inventario — Bodega Deyvi Rivera")
        println("1. Agregar Producto")
        println("2. Mostrar Productos")
        println("3. Modificar Producto")
        println("4. Eliminar Producto")
        println("5. Salir")
        print("Seleccione una opción: ")
        option = readLine()?.toIntOrNull()

        when (option) {
            1 -> {
                print("SKU del nuevo producto: ")
                val nombre = readLine() ?: ""
                if (nombre.isNotBlank()) {
                    productos.add(nombre)
                    println("Producto incluido")
                } else {
                    println("El SKU no puede estar vacío")
                }
            }
            2 -> {
                println("Productos:")
                for ((i, producto) in productos.withIndex()) {
                    println("[$i] Producto: $producto")
                }
            }
            3 -> {
                println("Actualizar")
                print("Índice a modificar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in productos.indices) {
                    print("Nuevo SKU: ")
                    val nuevoNombre = readLine() ?: ""
                    if (nuevoNombre.isNotBlank()) {
                        productos[indice] = nuevoNombre
                        println("Producto Actualizado")
                    } else {
                        println("SKU no válido")
                    }
                } else {
                    println("Índice no válido")
                }
            }
            4 -> {
                println("Eliminar")
                print("Índice a eliminar: ")
                val indice = readLine()?.toIntOrNull()
                if (indice != null && indice in productos.indices) {
                    productos.removeAt(indice)
                    println("Producto Eliminado")
                } else {
                    println("Índice no válido")
                }
            }
            5 -> println("Saliendo del sistema de control de inventario...")
            else -> println("Opción no válida")
        }
    } while (option != 5)
}
