/* 
 * Code Javascript exercice 08 - Prénom x nombre de lettres
 * Pas de Contrôle de saisie de l'utilisateur
 * 
 */
var prenom = prompt('Saisis ton prénom ?');

var nbreLettres = prenom.length;

console.log('Prénom saisi : ' + prenom);
console.log('Nombre de lettres : ' + nbreLettres );

var prenoms = '';

for (var i = 0; i < nbreLettres; i++) {
   prenoms += (prenom + ' ');
}

console.log(prenoms);