/* 
 * Code Javascript exercice 16 - Insérer des éléments dans une liste
 * 
 */
// Récupérer nom de OL pour positionner les li
var ol = document.getElementById('name_ol_id');

// Création des textes
var textesLi = [
    document.createTextNode('Élement li insertion position after 5'),
    document.createTextNode('Élement li insertion last position')
];

// Création des éléments
var li1 = document.createElement('li');
var li2 = document.createElement('li');

// Insertion des textes dans les éléments
li1.appendChild(textesLi[0]);
li2.appendChild(textesLi[1]);

// Récupérer position li
var liPosition = ol.getElementsByTagName('li');

// Insertion des éléments dans le 'conteneur' OL
ol.insertBefore(li1, liPosition[5]);
ol.appendChild(li2);