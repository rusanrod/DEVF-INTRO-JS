const form = document.querySelector('#signup')
const usr = document.querySelector('#usuario')
const pass = document.querySelector('#contraseña')

const usuarios = [
    {
        user: "rusanrod",
        password: "12345"
    }
]

form.addEventListener('submit',(e) => {
    e.preventDefault()
    const user=usr.textContent
    console.log(usr)
    const pas = pass.textContent
    let u=usuarios.filter(usuario => usuario.user==user)
    console.log(u)
    // window.location = "./saludo.html"

    
})
