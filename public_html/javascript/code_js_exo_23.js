/* 
 * Code Javascript Exercice 23 - Plus ou moins mode challenge
 *
 */
console.log("Bienvenue dans le jeu du plus ou moins !");

// Initialiser tranche nombre à trouver
var limiteDown  = 1;
var limiteUp    = 100;

// Générer aléatoirement un nombre entre limitDown et limiteUp inclus - donc +1 soit ici 101
var solution = Math.floor(Math.random() * 100) + 1;

// Debug pour tester la réponse
// console.log("(La solution est " + solution + ")");

// Initialisation des variables pour lancer la boucle + gestion compteur
var nombreSaisi     = 0,
    compteurEssai   = 0,
    compteurMax     = 8;
    coupsRestants   = compteurMax;

console.log('Tu dois trouver un nombre compris entre ' + limiteDown + ' et ' + limiteUp + ' en ' + compteurMax + ' essais.');

while ((nombreSaisi !== solution) && (compteurEssai < compteurMax)) { // Tant que la solution n'est pas trouvée et essai(s) inférieur ou égal à compteurMax
    
    nombreSaisi = Number(prompt('Saisissez un nombre entre ' + limiteDown + ' et ' + limiteUp + '.')); // Demander un nombre à l'utilisateur
    compteurEssai++; // Incrémenter le compteur d'essai - même en cas d'erreur de saisie
    coupsRestants--; // Décrémenter les coups restants
    
    // Vérifier si nombreSaisi correcte (Intervalle limiteDown à limiteUp, gestion bouton annuler === 0 et pas de caractères)
    if ((nombreSaisi < limiteDown) || (nombreSaisi > limiteUp) || isNaN(nombreSaisi)) {
        
        console.log('Tu dois saisir un nombre entre ' + limiteDown + ' et ' + limiteUp + '.');
        console.log('Il reste ' + coupsRestants + ' essai(s).');
    
    } else if (nombreSaisi > solution) { // Le nombre saisi est supérieur à la solution

            console.log(nombreSaisi + ' est trop grand. C\'est moins.');
            console.log('Il reste ' + coupsRestants + ' essai(s).');

    } else if (nombreSaisi < solution) { // Le nombre saisi est inférieur à la solution

        console.log(nombreSaisi + ' est trop petit. C\'est plus.');
        console.log('Il reste ' + coupsRestants + ' essai(s).');
        
    }
}


if (nombreSaisi === solution) { // nombreSaisi === solution - Bonne réponse
    
    console.log('Bravo ! Tu as trouvé le nombre. La solution était ' + solution + '.');
    console.log('Tu as trouvé en ' + compteurEssai + ' essai(s).');

} else { // 6 coups utilisés + mauvaise réponse
    
    console.log('Désolé, tu as perdu. Tu as utilisé tes ' + compteurEssai + ' essais.');
    console.log('La solution était ' + solution + '.');

}