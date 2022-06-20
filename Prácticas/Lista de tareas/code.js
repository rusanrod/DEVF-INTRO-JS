//01. Captura de variables

const formInput = document.querySelector('#newTask')
const inputTask = document.querySelector('#new')
const boxTareas = document.querySelector('#box-task')

let tareas = []

//02. Crear el evento para mostrar informacion al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    // console.log("hola")
    // console.log(inputTask)
    tareas = leerTareas()
    mostrarHTML(tareas)

    
})

function leerTareas(){
    tareas = JSON.parse(localStorage.getItem('tasks'))
    if(!tareas){
        localStorage.setItem('tasks',JSON.stringify([]))
        tareas = JSON.parse(localStorage.getItem('tasks'))
    }
    return tareas
    
}

function mostrarHTML(tareas){

    limpiarHTML();
    if(tareas){
        tareas.forEach(tarea => {
            console.log(tarea)
            // const {nombre, precio, tema, imagen} = producto
            const cardTarea = document.createElement('div')
            // cardTarea.classList.add("col", "mb-3")
            cardTarea.innerHTML= `
                <p class="form-control">${tarea}</p>
            `
            
            boxTareas.appendChild(cardTarea)
        })
    }
    
    
}

// 04. Crear el evento de envio. Aqui vamos a hacer el filtro

formInput.addEventListener('submit', (e) => {
    e.preventDefault()
    // console.log(inputTask.value)
    tareas.push(inputTask.value)
    // console.log(tareas)
    localStorage.setItem('tasks', JSON.stringify(tareas))
    mostrarHTML(tareas)
    // datosBusqueda.nombre = inputName.value.toLowerCase()
    // console.log(datosBusqueda)
    formInput.reset()

    // filtrarProductos() //llama a la funcion que filtra los datos de busqueda
})


function limpiarHTML(){
    boxTareas.innerHTML = "";
    // console.log("estoy limpiando")
    while(boxTareas.firstChild){
        boxTareas.firstChild.remove()
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