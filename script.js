// Déclaration des variables ************************************************************************************
const main = document.querySelector("main");
const backdrop = document.getElementById("backdrop");
const addMovie = document.getElementById("addMovie");
const addModal = document.getElementById("add-modal");
const suppMovie = document.createElement("div");
const deleteModal = document.getElementById("delete-modal");

const cancel = document.getElementsByClassName("btn--passive");
const add = document.querySelector(".btn--success");
const entryText = document.getElementById("entry-text");
const section = document.createElement("section");


// Déclaration des fonctions *************************************************************************************

/*On crée une fonction qui permet de fermer la modal */
function removeModal() {
    addModal.style.display = "none";
    backdrop.style.display = "none";
}

function retirerMovie() {
    entryText.style.display = "none";
}

function ajouterMovie() {
    let title = document.getElementById("title").value;
    let imageUrl = document.getElementById("image-url").value;
    let rating = document.getElementById("rating").value;
    

    main.appendChild(section);
    section.setAttribute("class", "movie-element");
    section.setAttribute("id", "entry-text");
    
    const img = document.createElement("img");
    img.setAttribute("class", "movie-element__image");
    img.innerHTML = imageUrl;
    section.appendChild(img);

    const h2 = document.createElement("h2");
    h2.setAttribute("class", "h2");
    h2.innerHTML = title;
    section.appendChild(h2);

    const p = document.createElement("p");
    p.setAttribute("class", "p");
    p.innerHTML = `${rating}/5 stars`;
    section.appendChild(p);

    suppMovie.style.width = "30%";
    suppMovie.style.height = "100%";
    section.appendChild(suppMovie);

    removeModal();
}

// Début du code ****************************************************************************************************

/* Lorqu'on clique sur le bouton cancel de la modal, on appele la fonction removeModal() qui ferme la modal.*/
cancel[0].addEventListener("click", () =>{  // cancel[0] est le premier bouton du tableau cancel.
    removeModal();
})

/* Lorsqu'on clique sur la page web*/
document.addEventListener("click", (e) =>{
    /*Lorsqu'on clique sur ADD MOVIE, la modale ainsi que le fond transparent apparait.*/
    if (e.target === addMovie){
        backdrop.style.display = "block";
        addModal.style.display = "block";
    } 
    /* Lorsque'on clique sur le bouton cancel OU que l'on clique sur n'importe quel élément qui n'est pas la modal, on ferme la modal.*/
    else if (e.target == cancel || !e.target.closest("#add-modal")){ // La méthode closest récupére l'ancetre le plus proche ou le parent de l'élément correspondant aux sélecterus
        removeModal();
    }
})

add.addEventListener("click", () =>{
    let rating = document.getElementById("rating").value;
    if (rating <= 0 || rating > 5){
        alert("Please enter valid values (rating between 1 and 5).")
    } else {
        retirerMovie();
        ajouterMovie();
    }
    
})

section.addEventListener("click", () =>{
    deleteModal.style.display = "block";
    backdrop.style.display = "block";
})

cancel[1].addEventListener("click", () =>{
    
})

