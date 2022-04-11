// Déclaration des variables :
const main = document.querySelector("main");
const backdrop = document.getElementById("backdrop");
const addMovie = document.getElementById("addMovie");
const modal = document.getElementById("add-modal");
const cancel = document.getElementsByClassName("btn--passive");
const add = document.querySelector(".btn--success");
const entryText = document.getElementById("entry-text");


// Déclaration des fonctions :

/*On crée une fonction qui permet de fermer la modal */
function removeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}

function retirerMovie() {
    entryText.style.display = "none";
}

function ajouterMovie() {
    let title = document.getElementById("title").value;
    let imageUrl = document.getElementById("image-url").value;
    let rating = document.getElementById("rating").value;
    const section = document.createElement("section");
    
    main.appendChild(section);
    section
    section.classList.add("#entry-text");
    section.innerHTML = `${imageUrl} ${title} ${rating}`;
    removeModal();
}

// Début du code :

// /*Lorsqu'on clique sur ADD MOVIE la modale ainsi que le fond transparent apparait.*/
// addMovie.addEventListener("click", () =>{
//     backdrop.style.display = "block";
//     modal.style.display = "block";
// })

/* Lorqu'on clique sur le bouton cancel de la modal, on appele la fonction removeModal() qui ferme la modal.*/
cancel[0].addEventListener("click", () =>{
    removeModal();
})

/* Lorsqu'on clique sur la page web*/
document.addEventListener("click", (e) =>{
    /*Lorsqu'on clique sur ADD MOVIE, la modale ainsi que le fond transparent apparait.*/
    if (e.target == addMovie){
        backdrop.style.display = "block";
        modal.style.display = "block";
    } 
    /* Lorsque'on clique sur le bouton cancel OU que l'on clique sur n'importe quel élément qui n'est pas la modal, on ferme la modal.*/
    else if (e.target == cancel || !e.target.closest("#add-modal")){ // La méthode closest récupére l'ancetre le plus proche ou le parent de l'élément correspondant aux sélecterus
        removeModal();
    }
})

add.addEventListener("click", () =>{
    let rating = document.getElementById("rating").value;
    if (rating == "" || rating > 5){
        alert("Please enter valid values (rating between 1 and 5).")
    } else {
        retirerMovie();
        ajouterMovie();
    }
    
})

