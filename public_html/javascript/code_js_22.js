/* 
 * Code Javascript - Cours - Chapitre 22 - Les images
 * 
 * 
 */
// Le constructeur - aucun argument en paramètre
var testImg = new Image();

// Propriétés
// width, height, src

// Évènements - 1 seul et unique
// load

// Exemple code
//testImg.addEventListener('load', function() {
//    
//}, false);

testImg.src = '../images/apple-1051018.jpg';

var containerId = document.getElementById('containerImg');
containerId.appendChild(testImg);


/*
 * Lightbox basique - NE PAS UTILISER EN PRODUCTION
 * Il faut ajouter plusieurs fonctions
 * Ceci est un exercice basique pour appréhender l'objet Image
 *
 */
var links       = document.getElementsByClassName('linkLB');
var linksLength = links.length;

for (var i = 0; i < linksLength; i++) {
    links[i].addEventListener('click', function(e) {
        e.preventDefault(); // Bloquer la redirection
        
        // Appel de la fonction
        displayImage(e.currentTarget); // Cibler le lien
    }, false);
}

function displayImage(link) {
    var image   = new Image();
    var overlay = document.getElementById('overlay');
    
    image.addEventListener('load', function() {
        overlay.innerhtml = '';
        overlay.appendChild(image);
    }, false);
    
    image.src = link.href;
    overlay.style.display = 'block';
    overlay.innerHTML = '<span>Chargement en cours...</span>'
}

document.getElementById('overlay').addEventListener('click', function(e) {
    e.currentTarget.style.display = 'none';
}, false);