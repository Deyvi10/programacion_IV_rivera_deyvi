// condicionales 
let nivel : number=5;
if (nivel<5){
    console.log("El charmander puede evolucionar a Charmeleon");
}

//condicional dobles o dos caminos
if (nivel>=16){
    console.log("El charmander puede evolucionar a Charmeleon");
} else {
    console.log("El charmander no puede evolucionar a Charmeleon");
}

//condicional multiples o varios caminos
if (nivel>=16){
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel>=8){
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a ningun otro pokemon");
}


// condicional anidados

if (nivel>=16){
    console.log("El charmander puede evolucionar a Charmeleon");
} else {
    if (nivel>=8){
        console.log("El charmander puede evolucionar a Charizard");
    } else {
        console.log("El charmander no puede evolucionar a ningun otro pokemon");
    }
}


nivel= -20;
let poder: number= 25;
//condicional if con operadores logicos

if (nivel>=8 && nivel<=16 && poder>=20){
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel<16){
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a ningun otro pokemon");
}

//condicional if con operadores logicos or 
nivel= 5;
poder= 25;

if (nivel>=8 || nivel>=20 ){
    console.log("El charmander puede evolucionar a Charmeleon");
} else if (nivel>=16){
    console.log("El charmander puede evolucionar a Charizard");
} else {
    console.log("El charmander no puede evolucionar a ningun otro pokemon");
}


/*

*/
let medallas = 4;
let edad = 15;
let suspendido = false;

if(medallas >= 8 && edad >=12 && suspendido == false){  
    console. log("El entrenador puede participar en el torneo liga Pokemon");
} else {
    if(nivel >= 40 && vida >100 && )