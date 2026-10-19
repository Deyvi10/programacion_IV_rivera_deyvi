// POO - Abstracción aplicada al control de inventario

abstract class Producto {
    abstract reabastecer(): void;
    registrarEntrada(): void {
        console.log("Entrada de mercancía registrada en el sistema");
    }
}

class ProductoElectronico extends Producto {
    reabastecer(): void {
        console.log("Reabasteciendo productos electrónicos desde proveedor de tecnología");
    }
}

class ProductoAlimenticio extends Producto {
    reabastecer(): void {
        console.log("Reabasteciendo productos alimenticios desde proveedor de alimentos");
    }
}

const productos: Producto[] = [
    new ProductoElectronico(),
    new ProductoAlimenticio()
];

console.log(productos);
productos.forEach(producto => producto.reabastecer());

// Ejemplo adicional
abstract class Almacen {
    abstract clasificar(): void;
    auditar(): void {
        console.log("Realizando auditoría de inventario");
    }
}

class AlmacenGeneral extends Almacen {
    clasificar(): void {
        console.log("Clasificando productos por categoría general");
    }
}

class AlmacenFrio extends Almacen {
    clasificar(): void {
        console.log("Clasificando productos refrigerados según temperatura");
    }
}

const almacenes: Almacen[] = [
    new AlmacenGeneral(),
    new AlmacenFrio()
];

console.log(almacenes);
almacenes.forEach(almacen => almacen.clasificar());