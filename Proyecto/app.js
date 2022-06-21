let inputString = "" //lo que se visualiza en pantalla
let input = ""        //lo que en realidad esta pasando
let cState = 0      //current state
let nState = 1      //next state 
const message = document.getElementById("mensaje") 
const data1 = document.getElementById("vis_data1")
const data2 = document.getElementById("vis_data2")
const data3 = document.getElementById("vis_data3")
const vis_data = document.querySelector("#vis_data")
let clientNIP = 0   //client NIP from input
let cliente         //client account
let dataEditable = false //allow to click any key from the main keyboard
let lat_data = false //allow to click any key from the lateral keyboard
let btn_input = 0
let operation = 0 //by default 0:"check balance", 1: "deposit money", 2:"cash withdrawal"
let clientsStored
let cancelable = false

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
document.addEventListener('keydown', (event) => {
    var keyValue = event.key;
    var codeValue = event.code;
   
    console.log("keyValue: " + keyValue);
    console.log("codeValue: " + codeValue);
  }, false);
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

function logOut(){
    inputString = "" //lo que se visualiza en pantalla
    input = ""        //lo que en realidad esta pasando
    cState = 0      //current state
    nState = 40      //next state 
    clientNIP = 0
    cliente         //client account
    dataEditable = false //allow to click any key from the main keyboard
    lat_data = false //allow to click any key from the lateral keyboard
    btn_input = 0
    operation = 0    //by default 0:"check balance", 1: "deposit money", 2:"cash withdrawal"
    state_machine(nState)
}

function cancel(){
    if(cancelable){
        cState -=1
        state_machine(cState)
    }
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
function align2start(){
    // console.log(vis_data.children)
    Array.from(vis_data.children).forEach((child)=>{
        // console.log(child)
        child.classList.replace('text-center','text-start')

    })
}
function align2center(){
    // console.log(vis_data.children)
    Array.from(vis_data.children).forEach((child)=>{
        // console.log(child)
        child.classList.replace('text-start','text-center')

    })
}

function state_machine(state){
    switch(state){
        case 0: //Start
            dataEditable = false
            lat_data = false
            cancelable = false 
            cState = 0
            align2center()
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
            cancelable = true
            align2start()
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
            cancelable = true
            // cliente ? clientID:clientID = input 
            align2center()
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
            cancelable = false
            cState = 3
            align2center()
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
            cancelable = false
            cState = 4
            align2start()
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
            cancelable = false
            cState = 5
            operation = btn_input
            console.log(operation)
            align2center()
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
                cancelable = true
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
                cancelable = true
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
            cancelable = false
            align2center()
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
            dataEditable = false
            lat_data = false
            cancelable = false
            align2center()
            let movement = ""
            operation == 1 ? movement = "Your deposit" : movement = "Your withdrawal"
            message.textContent = ""
            data1.textContent = `${movement}: ${input}`
            data2.textContent = ""
            data3.textContent = `New balance: ${cliente.saldo}`
            nState = 4
            setTimeout(()=>state_machine(nState),5000)
        break;

        case 20: // wrong nip
            dataEditable = false
            lat_data = false
            cancelable = false
            align2center()
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
            cState = 30
            cancelable = false
            align2center()
            message.textContent = "Error: no puedes tener mas de $990 ni menos de $10"
            data1.textContent = ""
            data2.textContent = "XXXX"
            data3.textContent = ""
            nState = 5 
            setTimeout(()=>state_machine(nState),3000)
        break;
        case 40:
            // bye bye!
            dataEditable = false
            lat_data = false
            cancelable = false
            cState = 40
            align2center()
            message.textContent = "Bye bye!"
            data1.textContent = ""
            data2.textContent = ""
            data3.textContent = ""
            nState = 0
            setTimeout(()=>state_machine(nState),1500)
        break;

    }
}