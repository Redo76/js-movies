// Déclaration des variables:
const backdrop = document.getElementById("backdrop");
const addMovie = document.getElementById("addMovie");
const modal = document.getElementById("add-modal");
const cancel = document.getElementsByClassName("btn--passive");
const title = document.getElementById("title");
const imageUrl = document.getElementById("image-url");


function removeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}

addMovie.addEventListener("click", () =>{
    backdrop.style.display = "block";
    modal.style.display = "block";
})

cancel[0].addEventListener("click", () =>{
    removeModal();
})


