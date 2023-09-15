const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".open-btn")
const nav = document.querySelector("nav")
let toggle = false;

function toggleHandler(){
    toggle = !toggle

    if(toggle){
        nav.classList.add("nav-open")
    }else{
        nav.classList.remove("nav-open")
    }
}

closeButton.addEventListener("click", toggleHandler)
openButton.addEventListener("click", toggleHandler)
