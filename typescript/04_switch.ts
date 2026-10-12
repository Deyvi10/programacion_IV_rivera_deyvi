type Personaje =
    | "Luke Skywalker"
    | "Leia Organa"
    | "Han Solo"
    | "Darth Vader"
    | "Yoda"

let personaje: Personaje = "Luke Skywalker";

switch (personaje) {
    case "Luke Skywalker":
        console.log("Luke Skywalker es un Jedi");
        break;
    case "Leia Organa":
        console.log("Leia Organa es una princesa");             
        break;
    case "Han Solo":
        console.log("Han Solo es un contrabandista");
        break;
    case "Darth Vader":
        console.log("Darth Vader es un Sith");
        break;
    case "Yoda":
        console.log("Yoda es un maestro Jedi");
        break;
    default:
        console.log("Personaje desconocido");
}


type Jedis = "Luke" | "Vader" | "Yoda";

let jedi: Jedis = "Luke";
let nivelFuerza: number = 100;
let tieneSable : boolean = true;

switch (jedi) { 
    case "Luke":
        if (nivelFuerza >= 80 && tieneSable) {
            console.log("Luke es un Jedi poderoso");
        } else {
            console.log("Luke no es un Jedi poderoso");
        }
        break;
    case "Vader":
        if (nivelFuerza >= 90 && tieneSable) {
            console.log("Vader es un Sith temible");
        } else {
            console.log("Vader no es un Sith temible");
        }
        break;
    case "Yoda":
        if (nivelFuerza >= 95 && tieneSable) {
            console.log("Yoda es un maestro Jedi legendario");
        } else {
            console.log("Yoda no es un maestro Jedi legendario");
        }
        break;
    default:
        console.log("Jedi desconocido");
}