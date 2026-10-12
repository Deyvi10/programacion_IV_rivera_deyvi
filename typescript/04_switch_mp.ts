// Control de Inventario — Deyvi Rivera
// Selector de categorías de productos con switch

type CategoriaProducto =
    | "Ferreteria"
    | "Papeleria"
    | "Limpieza"
    | "Electronicos"
    | "Alimentos";

let categoria: CategoriaProducto = "Ferreteria";

switch (categoria) {
    case "Ferreteria":
        console.log("La ferretería se almacena en la bodega general");
        break;
    case "Papeleria":
        console.log("La papelería se organiza por presentación y peso");
        break;
    case "Limpieza":
        console.log("La limpieza requiere control de caducidad");
        break;
    case "Electronicos":
        console.log("Los electrónicos requieren control de garantía");
        break;
    case "Alimentos":
        console.log("Los alimentos requieren control de temperatura");
        break;
    default:
        console.log("Categoría de producto desconocida");
}


type TiposProducto = "Ferreteria" | "Papeleria" | "Limpieza";

let producto: TiposProducto = "Ferreteria";
let nivelStock: number = 100;
let tieneProveedor : boolean = true;

switch (producto) {
    case "Ferreteria":
        if (nivelStock >= 80 && tieneProveedor) {
            console.log("La ferretería cuenta con alto stock");
        } else {
            console.log("La ferretería no cuenta con alto stock");
        }
        break;
    case "Papeleria":
        if (nivelStock >= 90 && tieneProveedor) {
            console.log("La papelería cuenta con alto stock");
        } else {
            console.log("La papelería no cuenta con alto stock");
        }
        break;
    case "Limpieza":
        if (nivelStock >= 95 && tieneProveedor) {
            console.log("La limpieza cuenta con alto stock");
        } else {
            console.log("La limpieza no cuenta con alto stock");
        }
        break;
    default:
        console.log("Categoría de producto desconocida");
}
