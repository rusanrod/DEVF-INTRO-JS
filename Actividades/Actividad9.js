//Actividad 9:
/**
 * Escriba una función de JavaScript que tomará una serie de números almacenados
 * y encontrará el segundo número más bajos y segundos más altos, respectivamente
 * del siguiente arreglo:  const arr = [3,4,6,1,5,2,9,10,23,12]
 */
const arr = [3,4,6,1,5,2,9,10,23,12]
let lower = 100
let higher = 0
let iterator = 0
let sHigher = 0
let sLower = 0
arr.forEach((item) => {
    if(item > higher){
        higher = item
        sHigher = higher - 1
    }
    else if(item < lower){
        lower = item
        sLower = lower + 1
    }
    iterator++
    if(iterator == arr.length){
        while(!arr.includes(sHigher)){
            sHigher--
        }
        while(!arr.includes(sLower)){
            sLower++
        }
    }
})
console.log("El segundo valor mas bajo en el arreglo es: "+sLower)
console.log("El segundo valor mas alto en el arreglo es: "+sHigher)



// const coleccion = [
//     {a: 11, b:224, name: "M48 Bulldog"},
//     {a:23, b:56, name: "Object 140"},
//     {a: 32, b:75, name: "T57 Heavy"}
// ];

// Hacer una función para que reciba ese arreglo de objetos
// y que retorne la suma de "a" y "b" de cada objeto y concatenarlo
// al String "name" para que devuelva algo así: 
// ["235 M48 Bulldog-=-79 Object 140-=-107 T57 Heavy" ]
const coleccion = [
    {a: 11, b:224, name: "M48 Bulldog"},
    {a:23, b:56, name: "Object 140"},
    {a: 32, b:75, name: "T57 Heavy"}
];
let suma=0
let cadena=""
let subs=""
let iter=0
coleccion.forEach((element)=>{
    // console.log(element)
    iter==coleccion.length-1?subs=="":subs="-=-"
    suma = element['a'] + element['b']
    // console.log(suma)
    cadena += String(suma) +" "+ element.name + subs 
    iter++   
})
console.log(cadena)