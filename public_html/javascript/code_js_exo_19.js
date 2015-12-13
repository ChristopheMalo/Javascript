/* 
 * Code Javascript exercice 19 - Supprimer les éléments br
 * 
 */
// Méthode avec for inversé
var toSupprimer01 = document.getElementById('toSupprimer01');
var sautsLigne01  = toSupprimer01.getElementsByTagName('br');

for (var i = sautsLigne01.length; i > 0; i--) {
    sautsLigne01[i - 1].parentNode.removeChild(sautsLigne01[i - 1]);
}
    

// Méthode avec while
var toSupprimer02 = document.getElementById('toSupprimer02');
var sautsLigne02  = toSupprimer02.getElementsByTagName('br');

while (sautsLigne02.length !== 0) {
    sautsLigne02[0].parentNode.removeChild(sautsLigne02[0]);
}