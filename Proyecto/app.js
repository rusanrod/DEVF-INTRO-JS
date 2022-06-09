let inputString = "" //lo que se visualiza en pantalla
let input = ""        //lo que en realidad esta pasando
let cState = 0      //current state
let nState = 0      //next state
let borrar = false  
let message = document.getElementById("mensaje") 
let data = document.getElementById("vis_data")
let clientID = 0    //client ID from input 
let clientNIP = 0   //client NIP from input
let cliente         //client account
console.log(data)

const clients =[
    {
        name: "Ruben Sandoval",
        ID: 561177,
        NIP: 2811,
        saldo: 15405
    },
    {
        name: "Ximena Cervantes",
        ID: 547896,
        NIP: 2020,
        saldo: 2514
    },
    {
        name:"Abigail Rodríguez",
        ID: 554027,
        NIP: 1502,
        saldo: 7845
    }
]
function one(){
    cState == 2 ? inputString += "*" : inputString += "1"
    input += "1"
    data.textContent = inputString
}
function two(){
    cState == 2 ? inputString += "*" : inputString += "2"
    input += "2"
    data.textContent = inputString
}
function three(){
    cState == 2 ? inputString += "*" : inputString += "3"
    input += "3"
    data.textContent = inputString
}
function four(){
    cState == 2 ? inputString += "*" : inputString += "4"
    input += "4"
    data.textContent = inputString
}
function five(){
    cState == 2 ? inputString += "*" : inputString += "5"
    input += "5"
    data.textContent = inputString
}
function six(){
    cState == 2 ? inputString += "*" : inputString += "6"
    input += "6"
    data.textContent = inputString
}
function seven(){
    cState == 2 ? inputString += "*" : inputString += "7"
    input += "7"
    data.textContent = inputString
}
function eight(){
    cState == 2 ? inputString += "*" : inputString += "8"
    input += "8"
    data.textContent = inputString
}
function nine(){
    cState == 2 ? inputString += "*" : inputString += "9"
    input += "9"
    data.textContent = inputString
}
function zero(){
    cState == 2 ? inputString += "*" : inputString += "0"
    input += "0"
    data.textContent = inputString
}
function del(){
    inputString = ""
    input = ""
    data.textContent = inputString
}
function check(){
    inputString = ""
    data.textContent = inputString
    //cState++
    state_machine(nState)
}
function state_machine(state){
    switch(state){
        case 0:
            cState = 0
            mensaje.textContent = "Hello! Press check key to start."
            data.textContent = "_"
            nState = 1
        break;
        case 1:
            cState = 1
            input = ""
            mensaje.textContent = "Type your client ID"
            data.textContent = "_"
            nState = 2
        break;
        case 2:
            cState = 2
            cliente? clientID:clientID = input 
            input = ""
            mensaje.textContent = "Type your NIP"
            data.textContent = "_"
            nState = 3
        break;
        case 3:
            cState = 3
            clientNIP = input
            input = ""
            mensaje.textContent = "Validating"
            data.textContent = "_"
            cliente=(clients.filter(item=>item.ID==clientID))[0]
            if(cliente){    //ID correcto
                if(cliente.NIP==clientNIP){ 
                    nState = 4 //NIP correcto
                }
                else{
                    nState = 5 //NIP incorrecto
                }
            }
            else{   //ID incorrecto
                console.log("entra")
                nState = 6 
            }
        break;
        case 4:
            cState = 4
            mensaje.textContent = "Hello " + cliente.name + " your balance is:" 
            data.textContent = cliente.saldo
            cliente=undefined
            nState = 0
        break;
        case 5:
            cState = 5
            mensaje.textContent = "Wrong NIP"
            data.textContent = "XXXX"
            nState = 2
        break;
        case 6:
            cState = 6
            mensaje.textContent = "Client not found"
            data.textContent = "XXXXXX"
            nState = 1
        break;
    }
}