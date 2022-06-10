let count = 0
let value =document.getElementById("contador")

//event handler
// function incrementar(){
//     count++
//     value.textContent = count
// }
// function decrementar(){
//     if(count>0){
//         count--
//         value.textContent = count
//     }
// }

//event listener
const button = document.getElementById("incrementar")

button.addEventListener('click',function(){
    count++
    value.textContent = count
})