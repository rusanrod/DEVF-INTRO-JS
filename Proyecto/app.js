let inputString = "" //lo que se visualiza en pantalla
let input = ""        //lo que en realidad esta pasando
let cState = 0      //current state
let nState = 1      //next state
let borrar = false  
let message = document.getElementById("mensaje") 
let data = document.getElementById("vis_data")
let clientID = 0    //client ID from input 
let clientNIP = 0   //client NIP from input
let cliente         //client account
let dataEditable = false
// console.log(data)

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
function key_pressed(clicked){
    if(dataEditable){
        cState == 2 ? inputString += "*" : inputString += clicked
        input += clicked
        data.textContent = inputString
    }
}
function del(){
    if(dataEditable){
        inputString = ""
        input = ""
        data.textContent = inputString
    } 
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
            dataEditable = false
            cState = 0
            mensaje.textContent = "Hello! Press check key to start."
            data.textContent = "_"
            nState = 1
        break;
        case 1:
            dataEditable = true
            cState = 1
            input = ""
            mensaje.textContent = "Type your client ID"
            data.textContent = "_"
            nState = 2
        break;
        case 2:
            dataEditable = true
            cState = 2
            cliente ? clientID:clientID = input 
            input = ""
            mensaje.textContent = "Type your NIP"
            data.textContent = "_"
            nState = 3
        break;
        case 3:
            dataEditable = false
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
            dataEditable = false
            cState = 4
            dataEditable=false
            mensaje.textContent = "Hello " + cliente.name + " your balance is:" 
            data.textContent = "$" + cliente.saldo
            cliente=undefined
            nState = 0
        break;
        case 5:
            dataEditable = false
            cState = 5
            mensaje.textContent = "Wrong NIP"
            data.textContent = "XXXX"
            nState = 2
        break;
        case 6:
            dataEditable = false
            cState = 6
            mensaje.textContent = "Client not found"
            data.textContent = "XXXXXX"
            nState = 1
        break;
    }
}