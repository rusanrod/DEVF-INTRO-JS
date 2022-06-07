//Actividad 5, Ejercicio 1
var ar = [1,4,6,10,22,55,46,2,5,0]
for (var i=0; i<ar.length;i++){
    if(ar[i]>3){
        console.log("El numero " + ar[i] + " es mayor a 3")
    }
}

//Actividad 5, Ejercicio 2
var array=[]
var i = 0
while(i < 5){
    var num = 5-i
    array.push(num)
    i++;
}
console.log(array) //array=[5,4,3,2,1]

//Actividad 5, Ejercicio 3
//Ordena los elemenos del array del ejercicio 2
var newArray=[]
var anterior=0
for(var j=0; j<array.length;j++){
    menor = array[0]
    for(var i = 0 ; i < array.length;i++){ 
    
        if(array[i] < menor && array[i]>anterior){
            menor = array[i]
        }
    }
    newArray.push(menor)
    anterior=menor
}
console.log(newArray) //newArray=[1,2,3,4,5]