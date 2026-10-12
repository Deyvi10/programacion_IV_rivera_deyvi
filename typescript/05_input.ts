let personaje: string = "Luke";
let edad: number = 25;
let fuerza: number = 85;

if (personaje === "Luke" || personaje === "Vader" || personaje === "Yoda") {
    if (edad >= 18 && fuerza >= 80) {
        console.log(`${personaje} es un personaje poderoso y adulto.`);
    } else if (edad < 18 && fuerza >= 80) {
        console.log(`${personaje} es un personaje poderoso pero menor de edad.`);
    } else if (edad >= 18 && fuerza < 80) {
        console.log(`${personaje} es un personaje adulto pero no muy fuerte.`);
    } else {
        console.log(`${personaje} es un personaje menor de edad y no muy fuerte.`);
    }
} else {
    console.log("Personaje desconocido.");
}