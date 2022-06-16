

const botones = document.querySelector("#buttons");
const pantalla = document.querySelector("#image");
const titulo = document.querySelector("#title");
const parrafo = document.querySelector("#paragraph");

botones.addEventListener( 'click', (e) => {
    // console.log(e.target.textContent)
    menu.forEach( plato => {
        if(plato.id==e.target.textContent){
            pantalla.src = (plato.imagen)
            titulo.textContent = plato.titulo
            parrafo.textContent = plato.descripcion
        }
    } )
})
