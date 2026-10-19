abstract class Boxeador{
    abstract atacar(): void;
    descansar(): void{
        console.log("EL boxeador recupera energia")
    }
}

class Rocky extends Boxeador{
    atacar(): void{
        console.log("Rocky lanza un gancho")
    }
}


class Apollo extends Boxeador{
    atacar(): void{
        console.log("Apolli lanza un upper ")
    }
}

const boxeadores: Boxeador[]=[
    new Rocky(),
    new Apollo()
]

console.log(boxeadores);
boxeadores.forEach(boxeador=>boxeador.atacar())



abstract class Sayajin{
    abstract transformarse(): void;
    detectarKi(): void{
        console.log("Detectando el nivel de energia del enemigo")
    }
}

class Goku extends Sayajin{
    transformarse(): void{
        console.log("Goku se transforma en super sayajin blue")
    }
}


class Vegeta extends Sayajin{
    transformarse(): void{
        console.log("Vegeta alcanza el ultra ego")
    }
}

const sayajins: Sayajin[]=[
    new Goku(),
    new Vegeta()
]

console.log(sayajins);
sayajins.forEach(sayajin=>sayajin.transformarse())