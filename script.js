// ==========================
// MESSAGE D'ACCUEIL
// ==========================

window.onload = function(){
    console.log("Bienvenue dans l'arbre généalogique de la famille !");
};


// ==========================
// AFFICHER / CACHER LES INFORMATIONS
// ==========================

let cartes = document.querySelectorAll(".carte");

cartes.forEach(function(carte){

    carte.addEventListener("click", function(){

        let liste = carte.querySelector("ul");

        if(liste){

            if(liste.style.display === "none"){
                liste.style.display = "block";
            }
            else{
                liste.style.display = "none";
            }

        }

    });

});


// ==========================
// RECHERCHE D'UN MEMBRE
// ==========================

function rechercher(){

    let recherche = document
    .getElementById("recherche")
    .value
    .toLowerCase();


    let membres = document.querySelectorAll(".carte");


    membres.forEach(function(membre){

        let nom = membre
        .querySelector("h3")
        .textContent
        .toLowerCase();


        if(nom.includes(recherche)){

            membre.style.display="block";

        }else{

            membre.style.display="none";

        }

    });

}


// ==========================
// AJOUTER UNE ANIMATION
// ==========================

cartes.forEach(function(carte){

    carte.addEventListener("mouseenter", function(){

        carte.style.cursor="pointer";

    });

});


// ==========================
// CONFIRMATION AVANT FERMETURE
// ==========================

window.onbeforeunload = function(){

    console.log("Merci d'avoir visité notre arbre familial.");

};