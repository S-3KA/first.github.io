"use strict"

let menuIcon = document.getElementById("open_menu")
let getMenu = document.getElementById("menu")

function open__menu(){
    menuIcon.classList.toggle("icon_open");
    menuIcon.classList.toggle("icon_close");

    getMenu.classList.toggle("menu_open");
    getMenu.classList.toggle("menu_close");
}