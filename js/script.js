"use strict"

let menuIcon = document.getElementById("open_menu")
let getMenu = document.getElementById("menu")

let getWelcome = document.getElementById("hi")

function open__menu(){
    menuIcon.classList.toggle("icon_open");
    menuIcon.classList.toggle("icon_close");

    getMenu.classList.toggle("menu_open");
    getMenu.classList.toggle("menu_close");
}

setTimeout(function(){
    getWelcome.classList.toggle("hi_hide")

    setTimeout(function(){
        document.getElementsByClassName("hi_outLine")[0].style.width = "100%"
    },1400)
    setTimeout(function(){
        document.getElementsByClassName("hi_outLine")[0].style.margin = "0 0 0 100%"
        document.getElementsByClassName("hi_outLine")[0].style.width = "0px"
    },2700)
},20)

document.addEventListener("DOMContentLoaded", ready);