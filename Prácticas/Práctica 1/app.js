let count = 0
let value =document.getElementById("contador")
function incrementar(){
    count++
    value.textContent = count
}
function decrementar(){
    if(count>0){
        count--
        value.textContent = count
    }
}