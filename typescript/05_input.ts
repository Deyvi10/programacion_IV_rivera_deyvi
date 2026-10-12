import { readSync } from "node:fs";

const stdinFd = 0;

function question(texto: string): string {
    process.stdout.write(texto);
    let linea = "";
    const buffer = Buffer.alloc(1);
    while (true) {
        const bytes = readSync(stdinFd, buffer, 0, 1, null);
        if (bytes === 0) break;
        const caracter = buffer.toString("utf8");
        if (caracter === "\n") break;
        linea += caracter;
    }
    return linea.replace(/\r$/, "");
}

const personaje = question("Ingrese personaje (Luke, Vader, Organa, Han Solo, Yoda):");
const edad = Number(question("Ingrese edad del personaje:"));
const fuerza = Number(question("Ingrese nivel de fuerza del personaje (0-100):"));

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