"use stroct"

let getElemetId1 = document.getElementById("prompt_elem1")
let getElemetId2 = document.getElementById("prompt_elem2")
let getElemetId3 = document.getElementById("prompt_elem3")
let getElemetId4 = document.getElementById("prompt_elem4")
let getElemetId5 = document.getElementById("prompt_elem5")

let menuIcon = document.getElementById("open_menu")
let getMenu = document.getElementById("menu")

function open__menu(){
    menuIcon.classList.toggle("icon_open");
    menuIcon.classList.toggle("icon_close");

    getMenu.classList.toggle("menu_open");
    getMenu.classList.toggle("menu_close");
}

function swap1(){
    getElemetId1.classList.toggle("visable");
    getElemetId1.classList.toggle("zindex");

}

function swap2(){
    getElemetId2.classList.toggle("visable");
    getElemetId2.classList.toggle("zindex");

}

function swap3(){
    getElemetId3.classList.toggle("visable");
    getElemetId3.classList.toggle("zindex");

}

function swap4(){
    getElemetId4.classList.toggle("visable");
    getElemetId4.classList.toggle("zindex");

}
function swap5(){
    getElemetId5.classList.toggle("visable");
    getElemetId5.classList.toggle("zindex");

}