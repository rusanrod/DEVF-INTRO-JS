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
function convertC2F(cel){
    fah = cel*(9/5)+32
    return fah
}

function convertF2C(fah){
    cel=(fah-32)*5/9
    return cel
}