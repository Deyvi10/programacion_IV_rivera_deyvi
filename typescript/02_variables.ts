//Constantes

//Numerico
const PI: number = 3.1416;
console.log("PI:", PI);

const IVA: number = 15;
console.log("I.V.A:", IVA);

//Texto
const SERVICIO_API: string = "apiService";
console.log("NOMBRE DEL SERVICIO:", SERVICIO_API);

//Booleano
const ACTIVE: boolean = true;
console.log("PRODUCTO ACTIVO:", ACTIVE);

//Variables

//LET
let contador: number=0;
console.log(contador);
contador=5;
console.log(contador);
contador++;
console.log(contador);
contador+=5;
console.log(contador);
contador=contador+3;
console.log(contador);
let alumno: string="Juan";
let caducado: boolean=false;
console.log(alumno);
console.log(caducado);

let equipo : string[]=["PIKACHU","CHARMANDER","BULBASAUR"];
console.log(equipo);

let pokemonCapturado: string | null = null;

let pokemonInicial: string | undefined;

let experienciaAcumulada: bigint= 9876543222433667n;

//tipo symbol 
let pokemon1: symbol=Symbol("Pikachu");
console.log(pokemon1.description);
let pokemon2: symbol=Symbol("Pikachu");
console.log(pokemon2.description);  
console.log(pokemon1==pokemon2); 


let pikachu: {
    nombre: string;
    nivel: number;
    vida: number;
    esLegendario: boolean;
}={
    nombre:"Pikachu",
    nivel: 5,
    vida: 100,
    esLegendario: false
};
console.log(pikachu);
