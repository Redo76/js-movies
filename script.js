// Déclaration des variables :
const main = document.querySelector("main");
const backdrop = document.getElementById("backdrop");
const addMovie = document.getElementById("addMovie");
const modal = document.getElementById("add-modal");
const cancel = document.getElementsByClassName("btn--passive");
const add = document.querySelector(".btn--success");
const entryText = document.getElementById("entry-text");
const section = document.createElement("section");

// Déclaration des fonctions :
function removeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}

function ajouterMovie() {
    let title = document.getElementById("title").value;
    let imageUrl = document.getElementById("image-url").value;
    let rating = document.getElementById("rating").value;
    document.main.appendChild(section);
    section.classList.add("movie-element");
    section.innerHTML = `${imageUrl} ${title} ${rating}`;
    removeModal();
}
// Début du code :

/*Lorsqu'on clique sur ADD MOVIE la modale ainsi que le fond transparent apparait.*/
addMovie.addEventListener("click", () =>{
    backdrop.style.display = "block";
    modal.style.display = "block";
})

/* Lorqu'on clique sur le bouton cancel de la modale, on appele la fonction removeModal() qui ferme la modale.*/
cancel[0].addEventListener("click", () =>{
    removeModal();
})


add.addEventListener("click", () =>{
    let rating = document.getElementById("rating").value;
    if (rating === "" || rating > 5){
        alert("Please enter valid values (rating between 1 and 5).")
    }
    ajouterMovie();
})

