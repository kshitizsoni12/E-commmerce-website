let bar = document.querySelector(".bar");
let nav = document.querySelector(".nav-links");
let close = document.querySelector("#close-menu");

bar.addEventListener("click" , function(event){
    nav.classList.add("active")
})

close.addEventListener("click" , function(event){
    nav.classList.remove("active")
})