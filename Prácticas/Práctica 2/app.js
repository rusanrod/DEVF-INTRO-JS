let inputString = "" //lo que se visualiza en pantalla
let data = document.getElementById("vis_data")
let num1 = 0
let num2 = 0
let operation = 0 //1-- suma 2--resta  3-division
let ready = false //false - num1  true -num2
let op=""
let result=0
let done=false
function key_pressed(clicked){
    if(done){
        del()
    }
    if(!ready){
        switch(clicked){
            case "+":
            op=clicked
            num1=Number(data.textContent)
            console.log(num1)
            operation = 1
            ready=true
            break
            case "-":
            op=clicked
            num1=Number(data.textContent)
            operation = 2
            ready=true
            break
            case "/":
            op=clicked
            num1=Number(data.textContent)
            operation = 3
            ready=true
            break
        }
    }
    // console.log(operation)
    inputString += clicked
    data.textContent = inputString
}
function del(){
    inputString=""
    data.textContent = inputString
    num1 = 0
    num2 = 0
    operation = 0
    ready=false
    result=0
    done=false
}
function operator(){
    inputString += "="
    let indexOp = inputString.indexOf(op)
    let indexIq = inputString.indexOf("=")
    num2 = Number(inputString.slice(indexOp+1,indexIq))
    console.log(num2)
    if(operation==1){
        result=num1 + num2 
    }
    if(operation==2){
        result=num1 - num2
        console.log(result)
    }
    if(operation==3) {
        result=num1 / num2
    }
    inputString+=String(result)
    data.textContent = inputString
    ready=false
    done=true
    result=0
}