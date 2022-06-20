
let nombre = 'Pepe'

let items = ['uno','dos','tres', 'cuatro']

let persona = {
    nombre:'Ruben',
    edad: 24,
    país:"México"
}

const textAbout = document.querySelector("#textoAbout")
// localStorage.setItem(key,value)

function add(){
    localStorage.setItem('pais', nombre)
    localStorage.setItem('items', JSON.stringify(items))
    localStorage.setItem('persona', JSON.stringify(persona))
}

function obtenerDatos(){
    let nombre = localStorage.getItem('pais')
    let items = JSON.parse(localStorage.getItem('items'))
    let obj =JSON.parse(localStorage.getItem('persona'))
    console.log(nombre)
    console.log(items)
    console.log(obj)


}

function eliminarDato(e){
    localStorage.removeItem(e)
}

function eliminarTodo(){
    localStorage.clear();
}

function actualizarContenido(){
    let titulo = localStorage.getItem('pais')
    let obj = JSON.parse(localStorage.getItem('persona'))
    textAbout.textContent = "Conoce mas sobre " + String(titulo) + "que tiene "+ String(obj.edad) + " años"
    
}
// localStorage.setItem('pais', 'Colombia')
// add()
obtenerDatos()
// eliminarDato('pais')
// eliminarTodo()
actualizarContenido()