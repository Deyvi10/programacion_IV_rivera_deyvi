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