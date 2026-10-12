for (let i = 2; i <50; i+=5) {
    console.log(`Entrenamiento Jedi: ${i}`);
}

for (let i = 50; i >0; i-=5) {
    console.log(`ola Jedi: ${i}`);
}

for(let i=40; i>0; i-=5){
    if(i === 20){
        console.log("El entrenamiento Jedi ha terminado");
        break;
    }
    if (i=== 30){
        console.log("El entrenamiento Jedi ha sido interrumpido");
        continue;
    }
    console.log(`Entrenamiento Jedi: ${i}`);
}


const personajes: string[] = ["Luke Skywalker", "Darth Vader", "Leia Organa", "Han Solo", "Yoda"];
for (let i = 0; i < personajes.length; i++) {
    console.log(`Personaje: ${personajes[i]}`);
} 

for (const personaje of personajes) {
    console.log(`Personaje: ${personaje}`);
}

const cineMovie:string="Star Wars: A New Hope";
for (const letra of cineMovie) {
    console.log(`Letra: ${letra}`);
}


interface Jedi {
    nombre: string;
    nivelFuerza: number;
    tieneSableLuz: boolean;
}

const jedis: Jedi[] = [
    { nombre: "Luke Skywalker", nivelFuerza: 90, tieneSableLuz: true },
    { nombre: "Yoda", nivelFuerza: 100, tieneSableLuz: true },
    { nombre: "Obi-Wan Kenobi", nivelFuerza: 85, tieneSableLuz: true },
    { nombre: "Mace Windu", nivelFuerza: 95, tieneSableLuz: true },
    { nombre: "Darth Vader", nivelFuerza: 80, tieneSableLuz: false }
];


for (const jedi of jedis) {
    console.log(`Jedi: ${jedi.nombre}, Nivel de fuerza: ${jedi.nivelFuerza}, Tiene sable de luz: ${jedi.tieneSableLuz}`);
}


interface Nave {
    nombre: string;
    tipo: string;
    velocidad: number;
}

const naves: Nave[] = [
    { nombre: "X-Wing", tipo: "Caza estelar", velocidad: 1050 },
    { nombre: "TIE Fighter", tipo: "Caza estelar", velocidad: 1200 },
    { nombre: "Millennium Falcon", tipo: "Carguero ligero", velocidad: 1050 },
    { nombre: "Star Destroyer", tipo: "Destructor estelar", velocidad: 975 },
    { nombre: "Slave I", tipo: "Caza estelar", velocidad: 1100 }
];

for (const nave of naves) {
    console.log(`Nave: ${nave.nombre}, Tipo: ${nave.tipo}, Velocidad: ${nave.velocidad}`);
}


const planetas: Record<string, number> ={
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 2000
};

for (const planeta in planetas) {
    console.log(`Planeta: ${planeta}, Distancia: ${planetas[planeta]}`);
}

const distancias: Record<string, number> ={
    "Tatooine": 1000,
    "Hoth": 500,
    "Endor": 2000
};

const criaturasStarWars: string[] = ["Wampa", "Tauntaun", "Rancor", "Sarlacc", "Ewok"];

criaturasStarWars.forEach((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});

criaturasStarWars.map((criatura, index) => {
    console.log(`Criatura ${index + 1}: ${criatura}`);
});
