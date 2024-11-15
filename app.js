const btnEl = document.getElementById("btn");
const randomNum1El = document.getElementById("randomNum1");
const randomNum2El = document.getElementById("randomNum2");
const randomNum3El = document.getElementById("randomNum3");
const arrayEl = document.getElementById("array");
const sumEl = document.getElementById("sum");


btnEl.addEventListener("click",()=>{
    const num1 = Math.floor(Math.random()*100);
    randomNum1El.innerText = num1;
    const num2 = Math.floor(Math.random()*100);
    randomNum2El.innerText = num2;
    const num3 = Math.floor(Math.random()*100);
    randomNum3El.innerText = num3;
    let array =[num1, num2, num3];
    let sum = 0;
    for(let i = 0; i<array.length; i++){
        sum = sum + parseInt(array[i]);
    }
    arrayEl.innerText = array;
    sumEl.innerText = sum;
   
});



