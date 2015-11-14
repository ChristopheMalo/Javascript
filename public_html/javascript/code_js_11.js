/* 
 * Code Javascript - Cours - Chapitre 11 - Manipuler le code HTML partie 2
 */
/* 
 * Naviguer entre les noeuds
 * 
 */
var paragraph = document.getElementById('myP');
console.log(paragraph);
var blockquote = paragraph.parentNode;
console.log(blockquote);
console.log('nodeType : ' + paragraph.nodeType);
console.log('nodeName : ' + paragraph.nodeName.toLowerCase());

var paragraph2  = document.getElementById('myP2');
var firstchild  = paragraph2.firstChild;
var lastchild   = paragraph2.lastChild;
console.log('firstchild : ' + firstchild.nodeName.toLowerCase());
console.log('lastchild : ' + lastchild.nodeName.toLowerCase());
console.log('nodeValue : ' + firstchild.nodeValue);
console.log('data : ' + lastchild.firstChild.data);

var children = paragraph2.childNodes;
for (var i = 0, c = children.length; i < c; i++) {
    if (children[i].nodeType === 1) { // Element HTML
        console.log('children firstchild data : ' +children[i].firstChild.data);
    } else { // Noeud textuel
        console.log('children data : ' + children[i].data);
    }
}

var next = firstchild.nextSibling;
console.log('nextsibling : ' + next.firstChild.data);

var child = paragraph2.lastChild; // Récupérer le dernier enfant
while (child) {
    if (child.nodeType === 1) { // Element HTML
        console.log('child.firstChild.data : ' + child.firstChild.data);
    } else { // Noeud textuel
        console.log('child.data : ' + child.data);
    }
    
    child = child.previousSibling;
    
}


/*
 * Créer et insérer des éléments
 * 
 */
// Création d'un retour à la ligne
var retourLigne = document.createElement('br');
// Création de l'élément
var nouveauLien = document.createElement('a');
// Création du texte du lien
var nouveauLienTexte = document.createTextNode('Portfolio de Christophe Malo');

// Affection des attributs
nouveauLien.id      = 'nom_id';
nouveauLien.href    = 'http://www.christophe-malo.com';
nouveauLien.title   = 'Portfolio de Christophe Malo';
nouveauLien.setAttribute('tabindex', '10');

// Insérer le retour à la ligne
document.getElementById('myP2').appendChild(retourLigne);
// Insertion du texte
nouveauLien.appendChild(nouveauLienTexte);
// Insertion du lien
document.getElementById('myP2').appendChild(nouveauLien);


var span = document.body.appendChild((document.createElement('span')));
span.innerHTML = 'Du texte en plus pour un simple test.';


/*
 * Notions sur les références
 *
 */
var retourLigne2 = document.createElement('br');
var nouveauLien2 = document.createElement('a');
var nouveauLienTexte2 = document.createTextNode('Un 2ème lien de test');

nouveauLien2.id = 'Lien_test2';
nouveauLien2.href = 'http://www.christophe-malo.com';

document.getElementById('myP2').appendChild(retourLigne2);
nouveauLien2.appendChild(nouveauLienTexte2);
document.getElementById('myP2').appendChild(nouveauLien2);

// récupérer l'élément créé via son ID
var lienTest2 = document.getElementById('Lien_test2');
lienTest2.href = 'http://www.christophe-malo.com/cv';

console.log(nouveauLien2.href);


/*
 * Cloner, remplacer, supprimer
 * 
 */
// Création d'un élément
var hr1 = document.createElement('hr');
// Insertion de l'élement
document.getElementById('myP').appendChild(hr1);
// Création d'un élément par clonage - sans enfants
var hr2 = hr1.cloneNode(false);
// insertion du clône
document.getElementById('myP2').appendChild(hr2);

// Cloner un élément existant
var paragraph3 = document.getElementById('myP2');
var paragraph4 = paragraph3.cloneNode(true);
// Insertion du clône
paragraph3.parentNode.appendChild(paragraph4);


// Remplacer un élément
var lien = document.querySelector('a');
var nouveauLabel = document.createTextNode('et un hyperlien');
lien.replaceChild(nouveauLabel, lien.firstChild);


// Supprimer un élément
var hr3 = document.querySelector('hr');
var oldHr = hr3.parentNode.removeChild(hr3);
document.body.appendChild(oldHr);


/*
 * Diverses actions
 * 
 */
// Vérifier présence enfants
var paragraph5 = document.querySelector('p');
console.log(paragraph5.hasChildNodes());

// Insérer un élément
var paragraph6   = document.querySelector('p');
var emphasis     = document.createElement('em'),
    emphasisText = document.createTextNode('En emphase de test. ');
    
    emphasis.appendChild(emphasisText);
    
    paragraph6.insertBefore(emphasis, paragraph6.lastChild);
    
    
// insertAfter n'existe pas
// Création d'une fonction insertAfter
function insertAfter(newElement, positionAfterElement) {
    var parent = positionAfterElement.parentNode;
    
    if (parent.lastChild === positionAfterElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, positionAfterElement.nextSibling);
    }
}