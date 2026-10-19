// POO - Polimorfismo aplicado al control de inventario

class Producto {
    verificar(): void {
        console.log("Verificación básica de producto");
    }
}

class ProductoElectronico extends Producto {
    override verificar(): void {
        console.log("Verificando estado técnico y garantía");
    }
}

class ProductoAlimenticio extends Producto {
    override verificar(): void {
        console.log("Verificando fecha de caducidad y condiciones de almacenamiento");
    }
}

class ProductoRopa extends Producto {
    override verificar(): void {
        console.log("Verificando calidad, etiquetas y tallas");
    }
}

const productos: Producto[] = [
    new ProductoElectronico(),
    new ProductoAlimenticio(),
    new ProductoRopa(),
    new ProductoAlimenticio()
];

productos.forEach(producto => producto.verificar());