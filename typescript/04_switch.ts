// Ejemplo de switch con las evoluciones de Charmander según su nivel

let nivel: number = 25;
let poder: number = 56;

switch (true) {
    case nivel >= 80:
        console.log("¡Evolucionaste a Charizard!");
        break;
    case nivel >= 50:
        console.log("¡Evolucionaste a Charmeleon!");
        break;
    case nivel >= 30:
        console.log("Tu Charmander está cerca de evolucionar.");
        break;
    default:
        console.log("Tu Charmander aún es muy joven.");
}

// switch clásico con valores exactos

let personaje: string = "Yoda";

switch (personaje) {
    case "Luke":
    case "Yoda":
        console.log(`${personaje} domina la Fuerza.`);
        break;
    case "Vader":
        console.log(`${personaje} cayó al lado oscuro.`);
        break;
    default:
        console.log(`${personaje} tiene un camino por recorrer.`);
}

// switch numérico clásico

let nivelBatalla: number = 3;

switch (nivelBatalla) {
    case 1:
        console.log("Nivel de batalla: novato");
        break;
    case 2:
        console.log("Nivel de batalla: intermedio");
        break;
    case 3:
        console.log("Nivel de batalla: avanzado");
        break;
    default:
        console.log("Nivel de batalla: desconocido");
}