// Control de Inventario — Deyvi Rivera
// Herencia de clases para productos y sistemas de bodega

class Producto {
    registrarEntrada(): void {
        console.log("Registro básico de entrada al inventario");
    }
}

class ProductoFerreteria extends Producto {
    precioMayoreo(): void {
        console.log("El producto de ferretería aplica precio de mayoreo");
    }
}

class ProductoPapeleria extends Producto{
    descuentoProveedor(): void {
        console.log("El producto de papelería aplica descuento de proveedor");

    }
}


const ferreteria01 = new ProductoFerreteria();
ferreteria01.registrarEntrada();
ferreteria01.precioMayoreo();
const papeleria01 = new ProductoPapeleria();
papeleria01.registrarEntrada();
papeleria01.descuentoProveedor();



class SistemaBodega {
    sincronizar(): void {
        console.log("La bodega realiza una sincronización básica de pasillos");
    }
}

class BodegaFrio extends SistemaBodega {
    controlTemperatura(): void {
        console.log("La bodega fría activa el control de temperatura");
    }
}

class BodegaSeca extends SistemaBodega {
    controlHumedad(): void {
        console.log("La bodega seca activa el control de humedad");
    }
}

const bodegaFrio01 = new BodegaFrio();
bodegaFrio01.sincronizar();
bodegaFrio01.controlTemperatura();
const bodegaSeca02 = new BodegaSeca();
bodegaSeca02.sincronizar();
bodegaSeca02.controlHumedad();
