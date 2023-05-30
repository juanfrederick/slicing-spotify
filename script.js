const titik = document.querySelector(".smallSizedDot");
const titik2 = document.querySelector(".dot");
const nav = document.querySelector(".samping");

titik.addEventListener("click", function(){
    nav.classList.toggle("hiddenA");
})

titik2.addEventListener("click", function(){
    nav.classList.toggle("hiddenA");
})