/* 
 * Code Javascript exercice 07 - Nombre de frères et soeurs
 * Pas de Contrôle de saisie de l'utilisateur
 * 
 */

/* Méthode simple sans contrôle de saisie */
var chaineSaisie = prompt('Combien as-tu de frères et soeurs ?');
var nombre = parseInt(chaineSaisie); // Transformer la chaine saisie en nombre

var prenoms = []; // Initialiser un tableau pour recevoir les prénoms saisis
for (var i = 1; i <= nombre; i++) {
    var prenom = prompt('Quel est est le prénom de la personne ' + i + '?');
    prenoms.push(prenom);
}

// console.log(prenoms); // Debug pour controler le tableau

// Boucle pour afficher bonjour [prenom] pour chaque prenom saisi
for (var i = 0, count = prenoms.length; i < count; i++) {
    console.log('Bonjour ' + prenoms[i]);
}





/* Méthode avec contrôle de saisie - en cours de développement */
//// Pour quitter la boucle il faut cliquer sur annuler
//while (true) { // Tant que la boucle est true - CAD mauvaise saisie ou pas de clic sur annuler alors => affichage de la boite de dialogue de saisie
//    var chaineSaisie = prompt('Combien as-tu de frères et soeurs ?');
//
//    if (chaineSaisie === null) { // si l'internaute clique sur annuler => sortie de la boucle while
//
//        break;
//
//    } else if ((!chaineSaisie) || (chaineSaisie.trim() === '') || (isNaN(chaineSaisie))) { // Gérer la chaîne vide et la chaîne avec des espaces
//
//        console.log('Tu dois saisir un nombre');
//
//    } else {
//
//        var nombre = parseInt(chaineSaisie); // Transformer la chaine saisie en nombre
//
//        if (nombre <= 0) { // Vérifier si le nombre saisi est supérieur ou égal à 1
//                
//            /******** Amélioration : demander à nouveau le nombre de frère et soeur ****/
//            console.log('Tu dois saisir un nombre supérieur ou égal à 1.');
//            break; // Le programme quitte
//
//        } else {
//
//            // Initialiser un tableau pour recevoir les prénoms saisis
//            var prenoms = [];
//            
//            /****** Amélioration : contrôler la siasie de l'utilisateur  ******/
//            for (var i = 1; i <= nombre; i++) {
//                var prenom = prompt('Quel est est le prénom de la personne ' + i + '?');
//                prenoms.push(prenom);
//            }
//        }
//
//
//        // console.log(prenoms); // Debug pour controler le tableau
//
//        // Boucle pour afficher bonjour [prenom] pour chaque prenom saisi
//        for (var i = 0, count = prenoms.length; i < count; i++) {
//            console.log('Bonjour ' + prenoms[i]);
//        }
//
//    }
//}
//
//console.log('Merci et au revoir :)');