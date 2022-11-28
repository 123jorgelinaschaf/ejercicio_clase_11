//ejercicio 1
let diaSemana = prompt("Qué día es hoy?");

switch (diaSemana) {
    case "lunes":
        alert("Hoy es lunes. Tienes que correr 2km");
        break;
    case "martes":
        alert("Hoy es martes. Tienes que andar 30 minutos de bicicleta");
        break;
    case "miércoles":
        alert("Hoy es miércoles. Tienes que caminar 7km");
        break;
    case "jueves":
        alert("Hoy es jueves. Tienes que saltar a la soga 20 minutos");
        break;
    case "viernes":
        alert("Hoy es viernes. Tienes que meditar 10 minutos");
        break;
    case "sábado":
        alert("Hoy es sábado. Tienes que correr 3km ");
        break;
    case "domingo":
        alert("Hoy es domingo. Puedes descansar");
        break;
    default:
        alert("escribe el día de la semana en minúscula");
}
//ejercicio 2
for (i = 20; i <= 70; i++) {
    document.write("El numero es:" + i + "<br>");
}

//ejercicio 3
let repeticiones = parseInt(prompt("Ingrese cantidad de iteraciones"));

for (i = 0; i < repeticiones; i++) {
    console.log("Hola mundo!");
}