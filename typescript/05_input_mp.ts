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

const producto = question("Ingrese nombre del producto:");
const cantidad = Number(question("Ingrese cantidad en stock:"));
const precioUnitario = Number(question("Ingrese precio unitario (USD):"));

const valorTotal = cantidad * precioUnitario;

if (cantidad >= 50) {
    console.log(`${producto}: stock óptimo. Valor total: $${valorTotal}`);
} else if (cantidad >= 10) {
    console.log(`${producto}: stock bajo. Valor total: $${valorTotal}`);
} else {
    console.log(`${producto}: stock crítico. Valor total: $${valorTotal}`);
}