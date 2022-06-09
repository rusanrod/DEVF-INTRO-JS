/**
 * Crea una función para encuentrar la diferencia de edad entre el miembro mas viejo y el más jóven de la familia
 * y regresa como resultado, sus respectivas edades y la diferencia de edad. 
 * 
 */

 const Family = [
    {
      name: 'John',
      age: 13
    },
    {
      name: 'Mark',
      age: 56
    },
    {
      name: 'Rachel',
      age: 45
    },
    {
      name: 'Nate',
      age: 67
    },
    {
      name: 'Jeniffer',
      age: 65
    },
    {
      name: 'Martha',
      age: 25
    }
  ];
function edades(fam){
    let younger=100
    let older=0
    let difference=0
    fam.forEach(item => {
        if(item.age > older){
            older = item.age
            // console.log(older)
        }
        if(item.age < younger){
            younger = item.age
            console.log(younger)
        }
        difference=older-younger
        
    });
    return [younger,older,difference ]
}
arr=edades(Family)
console.log("El mas joven tiene: "+arr[0]+" años. El más viejo tiene: "+arr[1]+" años. Y su diferencia es: "+arr[2]+" años.")

/**
 * Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos. 
 */

 const numbers = [ 1, -4, 12, 0, -3, 29, -150];
function positives(nums){
    let pos=[]
    nums.forEach(item=>{
        if(item>0)
        pos.push(item)
    })
    return pos
}
console.log(positives(numbers))

/*
*
* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.

  Ejemplo

  La matriz es la lista original. Los números que faltan son

  matriz = [7,2,5,3,5,3]

  br = [7,2,5,4,6,3,5,3]

Los números que faltan en arr son [4,6]
*/
let matriz = [7,2,5,3,5,3]
let br = [7,2,5,4,6,3,5,3]

function faltantes(m1,m2){
    let arr=[]
    let shift=0
    for(let i =0; i < m1.length;i++ ){
            while(!(m1[i]==m2[i+shift])){
                arr.push(m2[i+shift])
                shift++
            }
    }
    return arr
}
console.log(faltantes(matriz,br))


/**
 * Del siguiente arreglo, retorna un objeto donde retorne unicamente los elementos sin repetir y el valor sea las ocurrencias
 * que encontró dentro de ese arreglo. 
 * 
 * 
 * Resultado esperado:
 *  {
      one: 4,
      two: 3,
      three: 1,
      ...
    }
 */

 const arr = ['one', 'two', 'one', 'one', 'two', 'three', 'five', 'seven', 'five', 'ten', 'nine', 'one', 'two', 'four'];

function sorter(array){
    // let sorted= array.sort()
    let justOne=[] //arreglo que guarda solo una vez cada elemento del arr
    // justOne.push(sorted[0])
    let num
    const obj={}
    var u=0
    for(var i=0;i<array.length;i++){
        if(!justOne.includes(array[i])){    //verifica si el elemento ya existe
            justOne.push(array[i])  //agrega a justOne el elemento
            num = array.filter(item=>item==array[i]) //cuantos elementos hay
            Object.defineProperty(obj,justOne[u], {
                enumerable: true,
                writable: true,
                value: num.length
              })
            u++
        }
    }
    console.log(justOne)
    return(obj)
}
console.log(sorter(arr))

 /**
  * Write a function that combines two lists by alternatingly taking elements, e.g. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
  * Escribe una funcion que combine dos listas de arreglos alternando los elementos de cada una:
  * const a = [1,2,3]
  * const b = [a,b,c]
  * 
  * Resultado esperado:
  * 
  * 
  * [1,a,2,b,3,c]
  */
 const a = [1,2,3]
 const b = ["a","b","c"]
 function combine(list1,list2){
    let out=[]
    for(let i=0; i<list1.length;i++){
        out.push(list1[i])
        out.push(list2[i])
    }
    return out
 }

 console.log(combine(a,b))