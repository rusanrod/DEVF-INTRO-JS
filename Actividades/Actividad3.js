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

//Actividad 3, Ejercicio 3
var num = prompt("Ingrese un número")
Number(num) % 2 == 0 ? alert(num + " es divisible entre 2") : alert(num + " no es divisible entre 2")

//Actividad 3, Ejercicio 4
var num = prompt("Ingrese un número")
Number(num) % 2 == 0 ? alert(num + " es par") : alert(num + " es impar")

//Actividad 3, Ejercicio 5
var num = prompt("Ingrese un número")
Number(num) == 1000 ? alert("Ganaste un premio") : alert(num + " Lo sentimos, sigue participando")

//Actividad 3, Ejercicio 6
var num1 = prompt("Ingrese un número")
var num2 = prompt("Ingrese otro número")
Number(num1) > Number(num2) ? alert("El número mayor es " + num1) : alert("El número mayor es " + num2)

//Actividad 3, Ejercicio 7
var num1 = prompt("Ingrese un número")
var num2 = prompt("Ingrese otro número")
var num3 = prompt("Ingrese otro número")
var mayor = Number(num1)
if(mayor <= Number(num2)){
    mayor = Number(num2)
}
if(mayor <= Number(num3)){
    mayor = Number(num3)
}
alert("El número mayor es " + mayor)