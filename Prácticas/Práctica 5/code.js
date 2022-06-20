//01. Captura de variables

const formBusqueda = document.querySelector("#form-filtro")
const inputName = document.querySelector("#search")
const inputThemes = document.querySelector("#themes")
const boxProductos = document.querySelector("#box-productos")

// 05. Crear objeto que guarde la seleccion de busqueda del usuario

const datosBusqueda = {
    nombre: '',
    tema: ''
}

//02. Crear el evento para mostrar informacion al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // console.log("hola")
    mostrarHTML(productos)

    
})

// 03. Crear función que muestra contenido

function mostrarHTML(productos){

    limpiarHTML();
    productos.forEach(producto => {

        const {nombre, precio, tema, imagen} = producto
        const cardProducto = document.createElement('div')
        cardProducto.classList.add("col", "mb-3")
        cardProducto.innerHTML= `
            <div class="card" style="width: 18rem;">
                <div class="w-80">
                    <img src=${imagen} class="card-img-top img-fluid" alt="Imagen">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-center">${nombre}</h5>
                    <p class="card-text text-center">$ ${precio}</p>
                </div>
            </div>
        `
        
        boxProductos.appendChild(cardProducto)
    })
    
}

// 04. Crear el evento de envio. Aqui vamos a hacer el filtro

formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault()
    datosBusqueda.nombre = inputName.value.toLowerCase()
    console.log(datosBusqueda)
    formBusqueda.reset()

    filtrarProductos() //llama a la funcion que filtra los datos de busqueda
})

inputThemes.addEventListener('click', (e) => {
    // filtrarTema(e.target.textContent)
    datosBusqueda.tema = e.target.textContent.toLowerCase() 
    console.log(datosBusqueda.tema)

        const resultado = productos.filter( filtrarTema )
        // console.log(datosBusqueda.tema)
        // console.log(resultado)
        // trabajar cuando no hay resultados
        // const {nombre} = datosBusqueda
        mostrarHTML(resultado)

})

// 06. Crear funcion de filtro de peliculas
function filtrarProductos(){
    const resultado = productos.filter( filtrarName )
    // console.log(resultado)
    
    // trabajar cuando no hay resultados
    const {nombre} = datosBusqueda

        if(resultado.length){
            mostrarHTML(resultado)
        }
        else{
            sinResultado()
        }
    
}

//07. Generar las funciones que recibe el filter

function filtrarName(producto){
    const {nombre} = datosBusqueda
    if(nombre){
        return producto.nombre.toLowerCase() == nombre
    }
    else{
        return productos
    }
}

function filtrarTema(producto){
    const {tema} = datosBusqueda
    if(tema){
        return producto.tema == tema
    }
    else{
        return productos
    }
}

//08 funcion que limpia el espacio de tarjetas

function limpiarHTML(){
    boxProductos.innerHTML = "";
    // console.log("estoy limpiando")
    while(boxProductos.firstChild){
        boxProductos.firstChild.remove()
    }
    // if(boxPeliculas.parentElement.childElementCount==2){
    //     boxPeliculas.parentElement.lastChild.remove()
    // }
}

//09 Creacion de funcion cuando no se encuentran resultados
// function sinResultado(){
//     limpiarHTML()

//     const sinResultado =document.createElement('div')
//     sinResultado.classList.add('bg-danger', 'text-white','border','p-4','text-center')
//     sinResultado.textContent = 'No hay resultados de busqueda'

//     // if(!boxPeliculas.parentElement)
//     // 

//     boxPeliculas.parentElement.appendChild(sinResultado)
//     }