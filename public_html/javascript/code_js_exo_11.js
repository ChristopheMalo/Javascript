/* 
 * Code Javascript exercice 11 - Mateo et la canicule
 * Pas de contrôle de saisie de l'utilisateur
 * 
 */
// Initialiser le tableau d'origine
var prenoms = ['Pierre', 'Julien', 'Thomas'];

// La boucle demande 2 prénoms
while (prenoms.length < 5) {
    prenom = prompt('Ajoute un prénom à la liste : ');
    prenoms.push(prenom);
}

// console.log(prenoms); // Debug

// Parcourir le tableau et afficher les 3 prénoms
for (var person in prenoms) {
    console.log(prenoms[person]);
}