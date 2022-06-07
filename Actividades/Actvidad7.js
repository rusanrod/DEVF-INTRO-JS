//Actividad 7, Ejercicio 1
function buscaPalabra(oracion, palabra){
    var array = oracion.split(" ")
    var exists = false
    console.log(array)
    for(var i = 0 ; i < array.length; i++){
        if(array[i] == palabra){
            exists = true
            break
        }
    }
    return exists
}

//Actividad 7, Ejercicio 2

function sumarArray(){
    const numbers = [1,2,3,4,10,11]
    var suma = 0
    for(var i = 0; i < numbers.length; i++){
        suma = suma + numbers[i]
    }
    return suma
}

//Actividad 7, Ejercicio 3
function esPalindromo(palabra){
    var word = palabra.split("").reverse()
    var reverseWord=""
    for(var i =0; i<word.length;i++){
        reverseWord = reverseWord + word[i]
    }
    //console.log(word)
    if(palabra==reverseWord){
        return true
    }
    else{return false}
}

//Actividad 7, Ejercicio 4
function convertTemperatures(cel,fah){
    retfah = cel*(9/5)+32
    retcel=(fah-32)*5/9
    console.log(cel + "°C son: " + retfah + "°F")
    console.log(fah + "°F son: " + retcel + "°C")
}
