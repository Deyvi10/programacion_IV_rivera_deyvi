// Control de Inventario — Deyvi Rivera
// Condicionales simples, dobles, múltiples, anidados y compuestos aplicados al stock

//Condicionales

let nivel : number = 5;

if (nivel < 5) {
    console.log("El producto puede ser registrado en el inventario");
}

//Condicionales dobles
if (nivel >= 16) {
    console.log("El producto puede recibir reposición mayor");
} else {
    console.log("El producto no puede recibir reposición mayor");
}

//Condicionales multiples

if (nivel >= 16) {
    console.log("El producto puede recibir reposición mayor");
} else if (nivel >= 8) {
    console.log("El producto puede recibir revisión de inventario");
} else {
    console.log("El producto no puede recibir revisión de inventario ni reposición mayor");
}

//Condicional Anidados

if (nivel >= 16) {
    console.log("El producto puede recibir reposición mayor");
} else {
    if (nivel >= 8) {
        console.log("El producto puede recibir revisión de inventario");
    } else {
        console.log("El producto no puede recibir revisión de inventario ni reposición mayor");
    }
}

//Condicional if con operador logico

nivel = -20;
let demanda: number = 25;

if (nivel >= 8 && nivel < 16 && demanda >= 20) {
    console.log("El producto puede recibir reposición programada");

} else if (nivel >= 16) {
    console.log("El producto puede recibir reposición mayor");

} else {
    console.log("El producto no puede recibir revisión de inventario ni reposición mayor");
}

//Condicional if con operador logico or

nivel = 5;
demanda = 56;

if (nivel >= 8 || demanda >= 20) {
    console.log("El producto puede recibir revisión de inventario");

} else if (nivel >= 16) {
    console.log("El producto puede recibir reposición mayor");

} else {
    console.log("El producto no puede recibir revisión de inventario ni reposición mayor");
}


/*Ejercicio en clase

Desarrolla un programa en TypeScript que determine si un proveedor puede abastecer la bodega.
Para ingresar, debe tener al menos 8 años de experiencia, ser mayor o igual a 12 años y no estar suspendido.
Si cumple estos requisitos, verifica mediante condicionales anidados que su producto tenga nivel mínimo 40,
precio mayor a 0 y sea de tipo Ferretería, Papelería o Limpieza. Finalmente, clasifica el producto como Maestro
(nivel ≥ 80, capacidad ≥ 90 y precio ≥ 100), Élite (nivel ≥ 60 y capacidad ≥ 75 o rotación ≥ 80) o
Avanzado (nivel ≥ 40, capacidad ≥ 50 y precio > 0). Utiliza if, else if, else y operadores &&, || y !,
mostrando un mensaje cuando no se cumplan los requisitos.*/

type CategoriaProducto = "Ferreteria" | "Papeleria" | "Limpieza" | "Electronicos";

interface Proveedor {
  nombre: string;
  edad: number;
  experiencia: number;
  suspendido: boolean;
}

interface Producto {
  nombre: string;
  tipo: CategoriaProducto;
  nivel: number;
  precio: number;
  capacidad: number;
  rotacion: number;
}

const proveedor: Proveedor = {
  nombre: "Deyvi Rivera",
  edad: 35,
  experiencia: 8,
  suspendido: false
};

const producto: Producto = {
  nombre: "Taladro 01",
  tipo: "Ferreteria",
  nivel: 85,
  precio: 120,
  capacidad: 95,
  rotacion: 78
};

if (
  proveedor.experiencia >= 8 &&
  proveedor.edad >= 12 &&
  !proveedor.suspendido
) {
  console.log("Proveedor autorizado");

  if (
    producto.nivel >= 40 &&
    producto.precio > 0 &&
    (
      producto.tipo === "Ferreteria" ||
      producto.tipo === "Papeleria" ||
      producto.tipo === "Limpieza"
    )
  ) {
    console.log("Producto autorizado");

    if (
      producto.nivel >= 80 &&
      producto.capacidad >= 90 &&
      producto.precio >= 100
    ) {
      console.log("Categoría Maestro");

    } else if (
      producto.nivel >= 60 &&
      (
        producto.capacidad >= 75 ||
        producto.rotacion >= 80
      )
    ) {
      console.log("Categoría Élite");

    } else if (
      producto.nivel >= 40 &&
      producto.capacidad >= 50 &&
      producto.precio > 0
    ) {
      console.log("Categoría Avanzado");

    } else {
      console.log("Sin categoría asignada");
    }

  } else {
    console.log("El producto no cumple los requisitos");
  }

} else {
  console.log("Proveedor no autorizado");
}
