/*-----------Constants-----------*/
const operators={
    "+": (x, y) = {return x + y},
    "-": (x, y)= {return x - y } 
}
/*-------------Variables------------*/

let count = 0
/*------------Cached Element References-------*/
let display = document.querySelector('numberDisplay')
let number = document.getElementById('numberInput')
let addingBtn = document.getElementById('plus')
let subtractingBtn = document.getElementById('minus')

/*------------Event Listener--------*/

addBtn.addEventListener('click',(evt)=>
 display.value = operators[evt.target.innerText](parseInt(number.value) + parseInt(display.value))
)

subtractingBtn.addEventListener('click', (evt)=>
display.value = operators[evt.target.innerText](parseInt(number.value) - parseInt(display.value))
)

