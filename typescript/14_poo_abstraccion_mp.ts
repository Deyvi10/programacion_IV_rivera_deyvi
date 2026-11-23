// Control de Inventario — Deyvi Rivera
// Abstracción: clases abstractas para productos y sistemas de bodega

abstract class Producto{
    abstract mover(): void;
    revisarStock(): void{
        console.log("El producto entra en revisión de stock mínimo")
    }
}

class ProductoFerreteria extends Producto{
    mover(): void{
        console.log("El producto de ferretería registra salida desde la bodega general")
    }
}


class ProductoPapeleria extends Producto{
    mover(): void{
        console.log("El producto de papelería registra entrada desde el proveedor")
    }
}

const productos: Producto[]=[
    new ProductoFerreteria(),
    new ProductoPapeleria()
]

console.log(productos);
productos.forEach(producto => producto.mover())



abstract class SistemaBodega{
    abstract sincronizar(): void;
    detectarSeñal(): void{
        console.log("Detectando el estado del stock y las alertas de reposición")
    }
}

class BodegaFrio extends SistemaBodega{
    sincronizar(): void{
        console.log("La bodega fría sincroniza el control de temperatura")
    }
}


class BodegaSeca extends SistemaBodega{
    sincronizar(): void{
        console.log("La bodega seca sincroniza el control de humedad")
    }
}

const sistemas: SistemaBodega[]=[
    new BodegaFrio(),
    new BodegaSeca()
]

console.log(sistemas);
sistemas.forEach(sistema => sistema.sincronizar())
