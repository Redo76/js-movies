const title = document.querySelector("h1");
const button = document.querySelector("button");
const backdrop = document.querySelector(".backdrop");


button.addEventListener("click", function (){
    title.classList.toggle("h1blue");
})



backdrop.addEventListener("click", function (){
    backdrop.style.display = "none";
})
