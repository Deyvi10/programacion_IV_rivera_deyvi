interface ParticipanteTorneo{
    nombre: string;
    nivelPoder: number;
    presentarTecnica(): void;
    transformarse(): void{
        console.log("Personaje Transformado");
    }
}

class Goku implements ParticipanteTorneo{
    nombre = "Goku";
    nivelPoder= 9000;
    presentarTecnica(): void {
        console.log("Goku utiliza el kamehameha")
    }
    transformarse(): void {
        console.log("Transformacion")
    }

}

class Vegeta implements ParticipanteTorneo{
    nombre= "Vegeta";
    nivelPoder= 8500;
    presentarTecnica(): void {
        console.log("Vegeta utiliza el final flash")
    }
        transformarse(): void {
        console.log("Transformacion")
    }
}

const goku=new Goku();
const vegeta=new Vegeta();

goku.presentarTecnica();
vegeta.presentarTecnica();