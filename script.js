let num =  document.getElementsByClassName("nums")
const divide = document.getElementById('divide')
const multiply = document.getElementById('multiply')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')
const dot = document.getElementById('dot')
const clr = document.getElementById('clr')
const ans = document.getElementById('ans')
const result = document.getElementById('result')
// console.log(num)
let input = document.getElementById("input");
for(let i=0 ; i< num.length ; i++){
    num[i].addEventListener("click", ()=>{
      input.value += num[i].innerHTML;
    })
}
plus.addEventListener("click", ()=>{
    input.value += '+';
})
minus.addEventListener("click", ()=>{
    input.value += '-';
})
multiply.addEventListener("click", ()=>{
    input.value += '*';
})
divide.addEventListener("click", ()=>{
    input.value += '/';
})
dot.addEventListener("click", ()=>{
    input.value += '.'
})
clr.addEventListener("click", ()=>{
    input.value = ""
})
ans.addEventListener("click", ()=>{
    let c = eval(input.value)
    result.value = c;
    
})