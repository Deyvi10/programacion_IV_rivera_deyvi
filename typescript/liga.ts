// 1. Datos iniciales del Entrenador
let medallas: number = 8;
let edad: number = 15;
let suspendido: boolean = false;

// Datos iniciales del Pokémon
let nivel: number = 65;
let vida: number = 120;
let tipo: string = "Fuego";
let ataque: number = 80;
let defensa: number = 85;

// 2. Validación de los requisitos del Entrenador
if (medallas >= 8 && edad >= 12 && !suspendido) {
    
    // 3. Validación de los requisitos básicos del Pokémon (Condicional Anidado)
    if (nivel >= 40 && vida > 0 && (tipo === "Fuego" || tipo === "Agua" || tipo === "Eléctrico")) {
        
        console.log("¡Felicidades! El entrenador y su Pokémon han sido aceptados en la Liga.");

        // 4. Clasificación del Pokémon
        if (nivel >= 80 && ataque >= 90 && vida >= 100) {
            console.log("Categoría del Pokémon: Maestro");
        } else if (nivel >= 60 && (ataque >= 75 || defensa >= 80)) {
            console.log("Categoría del Pokémon: Élite");
        } else if (nivel >= 40 && ataque >= 50 && vida > 0) {
            console.log("Categoría del Pokémon: Avanzado");
        } else {
            console.log("El Pokémon es apto para participar, pero no alcanzó estadísticas para clasificar en una categoría superior.");
        }

    } else {
        // Mensaje si el Pokémon no cumple
        console.log("Lo sentimos, tu Pokémon no cumple los requisitos mínimos (necesita nivel >= 40, vida > 0 y ser tipo Fuego, Agua o Eléctrico).");
    }

} else {
    // Mensaje si el entrenador no cumple
    console.log("El entrenador no cumple los requisitos (necesita al menos 8 medallas, ser mayor de 12 años y no estar suspendido).");
}