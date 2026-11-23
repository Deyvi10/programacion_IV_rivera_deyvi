// Control de Inventario — Deyvi Rivera
// Evaluación de productos según antigüedad y capacidad de bodega

let producto: string = "Ferreteria";
let antiguedad: number = 5;
let capacidad: number = 85;

if (producto === "Ferreteria" || producto === "Papeleria" || producto === "Limpieza") {
    if (antiguedad >= 18 && capacidad >= 80) {
        console.log(`${producto} es un producto con alta rotación pero antiguo.`);
    } else if (antiguedad < 18 && capacidad >= 80) {
        console.log(`${producto} es un producto nuevo y con alta rotación.`);
    } else if (antiguedad >= 18 && capacidad < 80) {
        console.log(`${producto} es un producto antiguo y de poca rotación.`);
    } else {
        console.log(`${producto} es un producto nuevo pero de poca rotación.`);
    }
} else {
    console.log("Categoría de producto desconocida.");
}
