/* 
 * Code Javascript Exercice 22 - Plus ou moins
 *
 */
console.log("Bienvenue dans le jeu du plus ou moins !");

// Initialiser tranche nombre à trouver
var limiteDown  = 1;
var limiteUp    = 100;

// Générer aléatoirement un nombre entre limitDown et limiteUp inclus - donc +1 soit ici 101
var solution = Math.floor(Math.random() * limiteUp) + 1;

// Debug pour tester la réponse
// console.log("(La solution est " + solution + ")");

// Initialisation du nombre saisi pour lancer la boucle
var nombreSaisi = 0;

console.log('Tu dois trouver un nombre compris entre ' + limiteDown + ' et ' + limiteUp + '.');

while (nombreSaisi !== solution) { // Tant que la solution n'est pas trouvée
    
    nombreSaisi = Number(prompt('Saisis un nombre entre ' + limiteDown + ' et ' + limiteUp + '.')); // Demander un nombre à l'utilisateur
    
    // Vérifier si nombreSaisi correcte (Intervalle limiteDown à limiteUp, gestion bouton annuler === 0 et pas de caractères)
    if ((nombreSaisi < limiteDown) || (nombreSaisi > limiteUp) || isNaN(nombreSaisi)) {
        
        console.log('Tu dois saisir un nombre entre ' + limiteDown + ' et ' + limiteUp + '.');
    
    } else if (nombreSaisi > solution) { // Le nombre saisi est supérieur à la solution

            console.log(nombreSaisi + ' est trop grand. C\'est moins.');

    } else if (nombreSaisi < solution) { // Le nombre saisi est inférieur à la solution

        console.log(nombreSaisi + ' est trop petit. C\'est plus.');
    }
}


if (nombreSaisi === solution) { // nombreSaisi === solution - Bonne réponse
    
    console.log('Bravo ! Tu as trouvé le nombre. La solution était ' + solution + '.');

}