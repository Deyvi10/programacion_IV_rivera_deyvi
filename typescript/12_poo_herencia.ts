class Boxeador{
    golpear(): void{
        console.log("golpe básico")
    }
}

class Rocky extends Boxeador {
    golpeEspecial(): void{
        console.log("Rocky lanza un poderoso gancho");
    }
}

class Apollo extends Boxeador{
    golpeRapido(): void{
        console.log("Apollo lanza un jab veloz");

    }
}


const rocky=new Rocky();
rocky.golpear();
rocky.golpeEspecial();
const apolloCreek = new Apollo();
apolloCreek.golpear();
apolloCreek.golpeRapido();



class Guerrero {
    atacar(): void{
        console.log("El guerrero realiza un ataque básico")
    }
}

class Goku extends Guerrero{
    kamehameha(): void{
        console.log("Goku lanza un poderoso Kamehameha")
    }
}

class Vegueta extends Guerrero{
    finalflash(): void{
        console.log("Vegueta utiliza su poderoso Final Flash")
    }
}

const goku=new Goku();
goku.atacar();
goku.kamehameha();
const vegueta=new Vegueta();
vegueta.atacar();
vegueta.finalflash();