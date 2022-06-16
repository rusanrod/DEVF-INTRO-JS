//variables

const titulo = document.querySelector('#paragraph')
const pantalla = document.querySelector('#bigImage')
const contMiniaturas = document.querySelector('#imgsContainer')

contMiniaturas.addEventListener( 'click', (e) => {
    console.log(e.target.src)
    if(Boolean(e.target.src)){
        pantalla.src= e.target.src
        titulo.textContent = e.target.name
    }

})