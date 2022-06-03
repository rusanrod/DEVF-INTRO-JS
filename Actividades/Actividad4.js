//Actividad 4, Ejercicio 1
//Numeros multiplos de 5 con While
var num = prompt("Escribe un número");
var control = 1;
var numeros = ""
while(control <= Number(num)){
    if(control % 5 == 0){
        numeros = numeros + control + " " 
    }
    control++
}
alert("Los números son: " + numeros)

//Actividad 4, Ejercicio 2
//Numeros multiplos de 5 con Do While
var num = prompt("Escribe un número");
var control = 1;
var numeros = ""
do{
    if(control % 5 == 0){
        numeros = numeros + control + " " 
    }
    control++
}
while(control <= Number(num));
alert("Los números son: " + numeros)

//Actividad 4, Ejercicio 3
var numeros = ""
for (var i = 1; i <= 50; i+=2){
    numeros = numeros + " " + i
}
alert("Numeros impares del 1 al 50: " + numeros)