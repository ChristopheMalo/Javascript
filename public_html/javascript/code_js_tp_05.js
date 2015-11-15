/* 
 * Code Javascript TP 05 - Recréer une structure DOM - 02
 * 
 * 
 */
// Création de l'élément conteneur
var conteneurDiv = document.createElement('div');
    conteneurDiv.id = 'conteneurDivId_TP2';
    

// Création du noeud 'texte' p
var texteP = document.createTextNode('Langages basés sur ECMAScript :');

// Création des noeuds 'texte' li
var texteUL = [
    document.createTextNode('Javascript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];


// Création du paragraph
var p = document.createElement('p');
// Assigner et insérer texte au paragraph
p.appendChild(texteP);
    

// Création du UL
var ul = document.createElement('ul');
// Déclaration variable pour les li

// Boucle pour assigner li(s) au ul
for (var i = 0; i < texteUL.length; i++) {
    // Création de l'élément li
    li = document.createElement('li');
    // Assigner texte au li
    li.appendChild(texteUL[i]);
    // Assigner li au ul
    ul.appendChild(li);
}



// Insertion des éléments dans le div
conteneurDiv.appendChild(p);    // le p avec le texte
conteneurDiv.appendChild(ul);   // le ul avec les li

// Insertion du div et des éléments dans le div class .container
document.getElementsByClassName('container')[0].appendChild(conteneurDiv);