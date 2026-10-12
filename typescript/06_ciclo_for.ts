for (let i = 2; i < 50; i += 5) {
    console.log(`Entrenamiento Jedi: ${i}`);
}

for (let i = 50; i > 0; i -= 5) {
    console.log(`ola Jedi: ${i}`);
}

for (let i = 40; i > 0; i -= 5) {

    if (i === 20) {
        console.log("El entrenamiento jedi ah terminado");
        break;
    }
    if (i === 30) {
        console.log("El entrenamiento jedi ah sido interrumpido");
        continue;
    }

    console.log(`Entrenamiento jedi: ${i}`);
}

const personajes: string[] = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje: ${personajes[i]}`);
}

for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}

const cineMovie: string = "Star Wars: A New Hope";
for (const letra of cineMovie) {
    console.log('Letra; $ {letra}');
}

interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSable: boolean;
}

const jedis: Jedi[] = [
    { nombre: "Luke Skywalker", nivelFuerza: 100, tieneSable: true },
    { nombre: "Darth Vader", nivelFuerza: 90, tieneSable: true },
    { nombre: "Leia Organa", nivelFuerza: 80, tieneSable: false },
    { nombre: "Han Solo", nivelFuerza: 70, tieneSable: false },
    { nombre: "Yoda", nivelFuerza: 120, tieneSable: true }
];

for (const jedi of jedis) {
    console.log(`Jedi: ${jedi.nombre}, Nivel de Fuerza: ${jedi.nivelFuerza}, Tiene Sable: ${jedi.tieneSable}`);
}

interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const planetas: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
};

for (const planeta in planetas) {
    console.log(`Planeta: ${planeta}, Distancia: ${planetas[planeta]}`);
}

const distancias: Record<string, number> = {
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 800
};

for (const lugar in distancias) {
    console.log(`Lugar: ${lugar}, Distancia: ${distancias[lugar]}`);
}

const criaturasStarWars: string[] = ["Wampa", "Tauntaun", "Rancor", "Sarlacc", "Ewok"];
criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});

