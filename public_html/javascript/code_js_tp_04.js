/* 
 * Code Javascript TP 04 - Recréer une structure DOM - 01
 * 
 * 
 */
// Création de l'élément conteneur
var conteneurDiv = document.createElement('div');
    conteneurDiv.id = 'conteneurDivID';
    
    
// Création des noeuds 'texte' - Utilisation d'un tableau
var noeudsTextes = [
    document.createTextNode('Le '),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('organisme de standardisation'),
    document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibilité des technologies du '),
    document.createTextNode('World Wide Web'),
    document.createTextNode('.')
];


// Création des strong
var strong1 = document.createElement('strong');
var strong2 = document.createElement('strong');

// Assigner et insérer les strong aux 2 noeuds 'texte'
strong1.appendChild(noeudsTextes[1]);
strong2.appendChild(noeudsTextes[3]);


// Création des liens
var lien1 = document.createElement('a');
lien1.href  = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
lien1.title = 'Organisme de normalisation';

var lien2 = document.createElement('a');
lien2.href  = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
lien2.title = 'World Wide Web';

// Assigner et insérer lesl iens aux 2 noeuds 'texte'
lien1.appendChild(noeudsTextes[5]);
lien2.appendChild(noeudsTextes[7]);


// Insertion des textes dans le div
conteneurDiv.appendChild(noeudsTextes[0]);
conteneurDiv.appendChild(strong1);
conteneurDiv.appendChild(noeudsTextes[2]);
conteneurDiv.appendChild(strong2);
conteneurDiv.appendChild(noeudsTextes[4]);
conteneurDiv.appendChild(lien1);
conteneurDiv.appendChild(noeudsTextes[6]);
conteneurDiv.appendChild(lien2);
conteneurDiv.appendChild(noeudsTextes[8]);
    
    
// Insertion du contenenur et des éléments dans le body
// document.body.appendChild(conteneurDiv);

// Plus précis - dans le div class .container
document.getElementsByClassName('container')[0].appendChild(conteneurDiv);