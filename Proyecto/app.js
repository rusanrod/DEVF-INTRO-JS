let inputString = "" //lo que se visualiza en pantalla
let input = ""        //lo que en realidad esta pasando
let cState = 0      //current state
let nState = 1      //next state
let borrar = false  
const message = document.getElementById("mensaje") 
const data1 = document.getElementById("vis_data1")
const data2 = document.getElementById("vis_data2")
const data3 = document.getElementById("vis_data3")
// const btn_left = document.querySelector("#btn_left")
let clientID = 0
let clientNIP = 0   //client NIP from input
let cliente         //client account
let dataEditable = false //allow to click any key from the main keyboard
let lat_data = false //allow to click any key from the lateral keyboard
let btn_input = 0
let operation = 0 //by default 0:"check balance", 1: "deposit money", 2:"cash withdrawal"
let clientsStored
// console.log(data)

// document.addEventListener('DOMContentLoaded',() => {
//     console.log(cState)
// })
document.addEventListener("DOMContentLoaded", () => {
    clientsStored = JSON.parse(localStorage.getItem('clients'))
    if(!clientsStored){
            //add
        console.log("no hay, pero ahora si")
        localStorage.setItem('clients', JSON.stringify(clients))
        clientsStored = JSON.parse(localStorage.getItem('clients'))
    }


    
})
function key_pressed(clicked){
    if(dataEditable){
        cState == 2 ? inputString += "*" : inputString += clicked
        input += clicked
        data2.textContent = inputString
    }
}
function del(){
    if(dataEditable){
        inputString = ""
        input = ""
        data2.textContent = inputString
    } 
}
function check(){
    inputString = ""
    data2.textContent = inputString
    //cState++
    state_machine(nState)
}

// btn_left.addEventListener("click", () => {
//     console.log("click")
// })
function left_pressed(clicked){
    if(lat_data){
        let arr = ["l1", "l2", "l3"]
        btn_input = arr.indexOf(clicked)
        // console.log(btn_input)
        state_machine(nState)
    }
}

// function sleep(milliseconds) {
//     const date = Date.now();
//     let currentDate = null;
//     do {
//       currentDate = Date.now();
//     } while (currentDate - date < milliseconds);
// }

function state_machine(state){
    switch(state){
        case 0: //Start
            dataEditable = false
            lat_data = false
            cState = 0
            message.textContent = "Hello! Press check key to start."
            data1.textContent = ""
            data2.textContent = "_"
            data3.textContent = ""
            nState = 1
        break;
        case 1: //Pick a name
            dataEditable = false
            lat_data = true
            cState = 1
            // input = ""
            message.textContent = "Choose your name:"
            // data.textContent = "Ruben Sandoval"
            data1.textContent = `-${clientsStored[0].name}`
            data2.textContent = `-${clientsStored[1].name} `
            data3.textContent = `-${clientsStored[2].name} `
            nState = 2
        break;
        case 2: //Type nip
            dataEditable = true
            lat_data = false
            cState = 2
            // cliente ? clientID:clientID = input 
            input = ""
            message.textContent = "Type your NIP"
            data1.textContent = ""
            data2.textContent = "_"
            data3.textContent = ""
            nState = 3
        break;
        case 3: // nip validation
            dataEditable = false
            lat_data = false
            cState = 3
            clientNIP = input
            input = ""
            message.textContent = "Validating" //cambio por tiempo
            data1.textContent = ""
            data2.textContent = "_"
            data3.textContent = ""
            // cliente=(clients.filter(item=>item.ID==clientID))[0]
            cliente = clientsStored[btn_input]
            if(cliente){    //ID correcto
                if(cliente.NIP == clientNIP){ 
                    nState = 4 //NIP correcto
                }
                else{
                    nState = 20 //NIP incorrecto
                }
            }
            setTimeout(()=>state_machine(nState),1500)
            // clearTimeout(time)
        break;
        case 4: //account operations
            dataEditable = false
            lat_data = true
            cState = 4
            message.textContent = "Hello " + cliente.name + "!"
            data1.textContent = "-Check balance"
            data2.textContent = "-Deposit money"
            data3.textContent = "-Cash withdrawal"
            // cliente=undefined
            nState = 5
        break;
        case 5: //operation validation 
            dataEditable = false
            lat_data = false
            cState = 5
            operation = btn_input
            console.log(operation)
            if(operation == 0){
                // check balance
                dataEditable = false
                lat_data = false
                message.textContent = "Your balance is:"
                data1.textContent = ""
                data2.textContent = "$" + cliente.saldo
                data3.textContent = ""
                nState = 4
                setTimeout(()=>state_machine(nState),2500)
            }
            else if (operation == 1){
                // deposit money
                input = ""
                dataEditable = true
                lat_data = false
                message.textContent = "Type your deposit:"
                data1.textContent=""
                data2.textContent = "_"
                data3.textContent = ""
                nState = 6
            }
            else{
                // cash withdrawal
                input = ""
                dataEditable = true
                lat_data = false
                message.textContent = "Type your withdrawal:"
                data1.textContent=""
                data2.textContent = "_"
                data3.textContent = ""
                nState = 6
            }

            break;

        case 6: //operation validation
            dataEditable = false
            lat_data = false
            let nuevoSaldo = 0
            operation == 1 ? nuevoSaldo = cliente.saldo + Number(input) : nuevoSaldo = cliente.saldo - Number(input)
            if(nuevoSaldo > 990 || nuevoSaldo < 10){
                nState = 30 //error
            }
            else{
                cliente.saldo = nuevoSaldo
                console.log(clientsStored)
                localStorage.setItem('clients', JSON.stringify(clientsStored))
                nState = 7
            }
            setTimeout(()=>state_machine(nState),500)
        break;

        case 7:
            
        break;

        case 20: // wrong nip
            dataEditable = false
            lat_data = false
            cState = 20
            message.textContent = "Wrong NIP"
            data1.textContent = ""
            data2.textContent = "XXXX"
            data3.textContent = ""
            nState = 2
            setTimeout(()=>state_machine(nState),2000)
        break;
        case 30: // error
            dataEditable = false
            lat_data = false
            cState = 20
            message.textContent = "Error: no puedes tener mas de $990 ni menos de $10"
            data1.textContent = ""
            data2.textContent = "XXXX"
            data3.textContent = ""
            nState = 5 
            setTimeout(()=>state_machine(nState),3000)
        break;

    }
}