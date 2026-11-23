let memoriaDroide = 1024;
let memoriaDroideMax = 2048;

while (memoriaDroide < memoriaDroideMax) {
    console.log(`Memoria del droide: ${memoriaDroide}`);
    memoriaDroide += 256;
}

let disparosNave = 0;
let aciertosNave = 0;

while (disparosNave < 10) {
    disparosNave++;
    let acierto = Math.random() < 0.5;
    if (acierto) {
        aciertosNave++;
        console.log(`Disparo ${disparosNave}: ¡Acierto! Total de aciertos: ${aciertosNave}`);
    } else {
        console.log(`Disparo ${disparosNave}: Fallo. Total de aciertos: ${aciertosNave}`);
    }
}

let guerras = 0;
do {
    guerras++;
    console.log(`Guerra número: ${guerras}`);
} while (guerras < 5);

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const navesEscanadas: Nave[] = [
    { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1050 },
    { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
    { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 900 },
    { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 800 },
];

let indice = 0;
while (indice < navesEscanadas.length) {
    const nave = navesEscanadas[indice];
    if (nave?.tipo === "Caza estelar") {
        indice++;
        continue;
    }
    if (nave?.velocidad < 1000) {
        break;
    }
    console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
    indice++;
}