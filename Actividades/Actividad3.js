//Actividad 3, Ejercicio 1
var edad = prompt("Dime tu edad");
var nombre = prompt("Dime tu nombre");

if(Number(edad) >= 18){
    if(nombre == ('Mario'||'Carlos')){
        alert("Puede ingresar a la zona VIP de la discoteca");
    }
    else{alert("Puede acceder a la zona general de la discoteca")}
}
else{alert("No puede acceder a la discoteca")}

//Actividad 3, Ejercicio 2
//Juego Piedra, Papel o Tijeras
var jug1 = prompt("Jugador 1: Elige Piedra, Papel o Tijeras")
var jug2 = prompt("Jugador 2: Elige Piedra, Papel o Tijeras")
var juego = ["Piedra","Papel","Tijeras"];
var sel1 = juego.indexOf(jug1); //0, 1, 2
var sel2 = juego.indexOf(jug2); //0, 1, 2
var resta = sel2 - sel1;
if (resta == 0){
    alert("Empate") 
}
else if(resta == (1 || (-2))){
    alert("Ganó el Jugador 2" )
}
else{alert("Ganó el Jugador 1")}
