// POO - Herencia aplicada al control de inventario

class Producto {
    agregarStock(cantidad: number): void {
        console.log(`Stock agregado: ${cantidad} unidades`);
    }

    mostrarInfo(): void {
        console.log("Producto genérico");
    }
}

class ProductoElectronico extends Producto {
    garantia(): void {
        console.log("Producto electrónico con garantía de 12 meses");
    }
}

class ProductoAlimenticio extends Producto {
    fechaCaducidad(): void {
        console.log("Producto alimenticio con fecha de caducidad registrada");
    }
}

const laptop = new ProductoElectronico();
laptop.mostrarInfo();
laptop.agregarStock(5);
laptop.garantia();

const pan = new ProductoAlimenticio();
pan.mostrarInfo();
pan.agregarStock(20);
pan.fechaCaducidad();

// Ejemplo adicional
class Articulo {
    recibirMercancia(): void {
        console.log("Mercancía recibida en almacén");
    }
}

class Ropa extends Articulo {
    verificarTalla(): void {
        console.log("Verificando disponibilidad por tallas");
    }
}

class Calzado extends Articulo {
    verificarNumero(): void {
        console.log("Verificando disponibilidad por número");
    }
}

const camiseta = new Ropa();
camiseta.recibirMercancia();
camiseta.verificarTalla();

const zapato = new Calzado();
zapato.recibirMercancia();
zapato.verificarNumero();