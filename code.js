
let nombre;
let edadUser;
let nameUser;
let contador = 0;

nameUser = prompt("Ingrese su nombre");
while(!isNaN(nameUser)){
    nameUser=prompt("Ingrese su nombre para acceder");
}

edadUser=prompt("Ingrese su edad")
while(isNaN(edadUser)){
    edadUser=ptompt("Ingrese una edad correcta")
}


nombre =prompt("Ingrese el nombre del creador para tener acceso");
while(nombre!="Nicolas" && nombre!="nicolas" && nombre!="Nicolás" && nombre!="nicolás" || contador == 4){
    contador++;
    nombre = prompt("Nombre incorrecto, tiene 3 intentos más.");
    while(nombre!="Nicolas" && nombre!="nicolas" && nombre!="Nicolás" && nombre!="nicolás" || contador == 4){
        contador++;
        nombre = prompt("Nombre incorrecto, tiene 2 intentos más.");
        while(nombre!="Nicolas" && nombre!="nicolas" && nombre!="Nicolás" && nombre!="nicolás" || contador == 4){
            contador++;
            nombre =prompt("Nombre incorrecto, tiene 1 intento más.");
            while(nombre!="Nicolas" && nombre!="nicolas" && nombre!="Nicolás" && nombre!="nicolás" || contador == 4){
                alert("Demasiados intentos fallidos, no tiene acceso.");
            }
        }
    }
}
alert("Nombre correcto. Bienvenido/a "+nameUser+", puede operar.");

document.getElementById("nombreU").value = nameUser;
document.getElementById("edadU").value = edadUser;