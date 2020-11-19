
/*-------------Variables------------*/

var count = 0

/*------------Cached Element References-------*/
let plusBtn= document.getElementById('plus')
let minusBtn=document.getElementById('minus')
let counter= document.querySelector('.numberDisplay')
let inputValue = document.getElementById('numberInput')


/*----------Function------------*/
plusBtn.addEventListener('click',()=>{
 
    counter.innerText=parseInt(inputValue.value) + parseInt(counter.innerText) 
    
})

minusBtn.addEventListener('click',()=>{
 
    counter.innerText= parseInt(counter.innerText)- parseInt(inputValue.value)
    
})







