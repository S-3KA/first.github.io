"use strict"

let calcValue = document.getElementById("calcu").innerHTML;
 
function fclick(){
    if (event.target.innerHTML === "="){
        // alert(eval(calcValue));
        calcValue = (eval(document.getElementById("calcu").innerHTML))
        calcu.innerHTML = calcValue
    }else if (event.target.innerHTML === "c"){
        calcu.innerHTML = ""
    }else {
        calcu.innerHTML += event.target.innerHTML
    }
}