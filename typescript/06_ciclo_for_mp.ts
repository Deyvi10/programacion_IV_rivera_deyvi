// ciclos for aplicados al control de inventario

// conteo de unidades ascendente
for (let i = 0; i < 50; i += 5) {
    console.log(`Verificación de inventario: ${i} unidades contadas.`);
}

// conteo de unidades descendente (despacho de mercancía)
for (let i = 50; i > 0; i -= 5) {
    console.log(`Despacho de mercancía: quedan ${i} unidades en el almacén.`);
}