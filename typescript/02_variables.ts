// condicionales

let nivel: number = 5;
if (nivel < 5){
    console.log("El charmander puede evolucionar a Charmeleon");
}


// condicionales dobles o dos caminos
if (nivel >= 16) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charizard");
}


if (nivel >= 20) {
    console.log("El charmander puede evolucionar a charizard");
}else if(nivel >=8) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charizard");
}



//condicion anidado

if (nivel >= 20) {
    console.log("El charmander puede evolucionar a charizard");
}else {
        if(nivel >=8) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charizard");
}
}
    
nivel = 15;
let poder: number =25 
//condicional if con operadores logicos

if (nivel >= 8 && nivel > 16 && poder >=20) {
    console.log("El charmander puede evolucionar a charmeleon");
}else if(nivel >=16) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charmeleon ni a charizard");
}


nivel = 5;
poder =56;
if (nivel >= 8 ||  poder >=20) {
    console.log("El charmander puede evolucionar a charmeleon");
}else if(nivel >=16) {
    console.log("El charmander puede evolucionar a charizard");
} else {
     console.log("El charmander no puede evolucionar a charmeleon ni a charizard");
}


/*

*/