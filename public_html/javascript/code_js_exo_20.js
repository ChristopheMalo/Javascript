/* 
 * Code Javascript exercice 20 - Supprimer les éléments child d'un div
 * 
 */
// Méthode avec while et firstChild
var toSupprimer01 = document.getElementById('toSupprimer01');
var child = toSupprimer01.firstChild;

while (child) {
    toSupprimer01.removeChild(child);
    child = toSupprimer01.firstChild;
}

// Plus direct
//var toSupprimer01 = document.getElementById('toSupprimer01');
//var child;
//
//while (child = toSupprimer01.firstChild) {
//    toSupprimer01.removeChild(child);
//}


// Méthode hasChildNodes
var toSupprimer02 = document.getElementById('toSupprimer02');

while (toSupprimer02.hasChildNodes()) {
    toSupprimer02.removeChild(toSupprimer02.firstChild);
}