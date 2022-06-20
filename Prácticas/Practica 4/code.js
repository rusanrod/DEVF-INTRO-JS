
//01. Captura de variables

const formBusqueda = document.querySelector("#form-busqueda")
const inputName = document.querySelector("#inputName")
const inputGenero = document.querySelector("#inputGenre")
const inputYear = document.querySelector("#inputYear")
const boxPeliculas = document.querySelector("#box-peliculas")

// 05. Crear objeto que guarde la seleccion de busqueda del usuario

const datosBusqueda = {
    nombre: '',
    genero: '',
    año: ''
}

//02. Crear el evento para mostrar informacion al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarHTML(peliculas)
    
})

// 03. Crear función que muestra contenido

function mostrarHTML(peliculas){

    limpiarHTML();
    peliculas.forEach(pelicula => {

        const {nombre, genero, año, descripcion, imagen} = pelicula
        // console.log(pelicula.nombre)
        // console.log(pelicula.genero)
        const cardPelicula =document.createElement('div')
        cardPelicula.classList.add("col", "mb-3")
        cardPelicula.innerHTML= `
                    <div class="card bg-secondary flex-row">
                        <div class="w-50">
                            <img src=${imagen} alt="" class="img-fluid">
                        </div>
                        <div class="card-body">
                            <h2 class="card-title">${nombre}</h2>
                            <p class="card-text mb-1">Género: ${genero}</p>
                            <p class="card-text mb-0">Año: ${año}</p>
                            <p>Descripción: <span>${descripcion}</span> </p>
                        </div>
                    </div>
        `
        
        boxPeliculas.appendChild(cardPelicula)
    })
    
}

// 04. Crear el evento de envio. Aqui vamos a hacer el filtro

formBusqueda.addEventListener('submit', (e) => {
    e.preventDefault()
    datosBusqueda.nombre = inputName.value.toLowerCase()
    datosBusqueda.genero = inputGenero.value
    datosBusqueda.año = inputYear.value
    console.log(datosBusqueda)
    formBusqueda.reset()

    filtrarPeliculas() //llama a la funcion que filtra los datos de busqueda
})

// 06. Crear funcion de filtro de peliculas
function filtrarPeliculas(){
    const resultado = peliculas.filter( filtrarName ).filter( filtrarGenero ).filter( filtrarAño )
    // console.log(resultado)
    
    // trabajar cuando no hay resultados
    const {nombre, genero, año} = datosBusqueda
    if(nombre == "" && genero == "" && año == ""){
        sinResultado()
    }
    else{
        if(resultado.length){
            mostrarHTML(resultado)
        }
        else{
            sinResultado()
        }
    }
    
}

//07. Generar las funciones que recibe el filter
function filtrarName(pelicula){
    const {nombre} = datosBusqueda
    if(nombre){
        return pelicula.nombre.toLowerCase() == nombre
    }
    else{
        return peliculas
    }
    
}
function filtrarGenero(pelicula){
    const {genero} = datosBusqueda
    if(genero){
        return pelicula.genero == genero
    }
    else{
        return peliculas
    }
    
}
function filtrarAño(pelicula){
    const {año} = datosBusqueda
    if(año){
        return pelicula.año == año
    }
    else{
        return peliculas
    }
    
}

//08 funcion que limpia el espacio de tarjetas

function limpiarHTML(){
    boxPeliculas.innerHTML = "";
    while(boxPeliculas.firstChild){
        boxPeliculas.firstChild.remove()
    }
    if(boxPeliculas.parentElement.childElementCount==2){
        boxPeliculas.parentElement.lastChild.remove()
    }
}

//09 Creacion de funcion cuando no se encuentran resultados
function sinResultado(){
    limpiarHTML()

    const sinResultado =document.createElement('div')
    sinResultado.classList.add('bg-danger', 'text-white','border','p-4','text-center')
    sinResultado.textContent = 'No hay resultados de busqueda'

    // if(!boxPeliculas.parentElement)
    // 

    boxPeliculas.parentElement.appendChild(sinResultado)
    }