"use strict"
let menuIcon = document.getElementById("open_menu")
let getMenu = document.getElementById("menu")

let getWelcome = document.getElementById("hi")

const blockPosition = document.getElementsByClassName("content")[0].getBoundingClientRect();
console.log(blockPosition.top)
console.log(blockPosition.y / 100 * 70)

let blocks = document.getElementsByClassName("aligen")[0]
let _span = document.getElementById("span")

function open__menu(){
    menuIcon.classList.toggle("icon_open");
    menuIcon.classList.toggle("icon_close");

    getMenu.classList.toggle("menu_open");
    getMenu.classList.toggle("menu_close");
}



function screenLoad(){
    setTimeout(function(){
        
        document.getElementsByClassName("hi_hide")[0].style.transform = "translate(0,0)"

        setTimeout(function(){
            document.getElementsByClassName("hi_outLine")[0].style.width = "100%";
        },1400)
        setTimeout(function(){
            document.getElementsByClassName("hi_outLine")[0].style.margin = "0 0 0 100%";
            document.getElementsByClassName("hi_outLine")[0].style.width = "0px";
        },2700)
    },200)
}

document.addEventListener("DOMContentLoaded", screenLoad);

document.addEventListener("scroll", () => {

    const maxWiondowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrolled);
    console.log(blockPosition.y);

    if (blockPosition.y/ 100 * 50 <= scrolled){
        setTimeout(()=>{
            // document.getElementsByClassName("open_effect")[0].style.transform = "translate(0,-120%)"
            document.getElementsByClassName("block__3")[0].style.transform = "translate(0,0)"
            document.getElementsByClassName("top_block")[0].style.background = "#7289d9"
        },500)
        setTimeout(()=>{
            // document.getElementsByClassName("open_effect")[1].style.transform = "translate(0,-120%)"
            document.getElementsByClassName("block__3")[1].style.transform = "translate(0,0)"
            document.getElementsByClassName("top_block")[1].style.background = "#171a21"
            
        },1000)
        setTimeout(()=>{
            // document.getElementsByClassName("open_effect")[2].style.transform = "translate(0,-120%)"
            document.getElementsByClassName("block__3")[2].style.transform = "translate(0,0)"
            document.getElementsByClassName("top_block")[2].style.background = "#d14439"
        },1500)
    }

})
