/* 
 * Code Javascript exercice 06 - Les opérations sur 2 nombres
 * contrôle effectué sur la saisie de l'internaute
 */
var chaineSaisie1, chaineSaisie2, nombre1, nombre2;

console.log('Ce programme te demande 2 nombres puis te retourne le résultat des 4 opérations de base');

// Pour quitter la boucle il faut cliquer sur annuler
while (true) { // Tant que la boucle est true - CAD mauvaise saisie ou pas de clic sur annuler alors => affichage de la boite de dialogue de saisie
    chaineSaisie1 = prompt('Saisis un premier nombre : '); // Récupérer la première chaine saisie
    

    if (chaineSaisie1 === null) { // si l'internaute clique sur annuler => sortie de la boucle while

        break;

    } else if ((!chaineSaisie1) || (chaineSaisie1.trim() === '') || (isNaN(chaineSaisie1))) { // Gérer la chaîne vide et la chaîne avec des espaces
        
        console.log('Tu dois saisir un nombre');
            
    } else {
        
        while (true) {
            chaineSaisie2 = prompt('Saisis un deuxième nombre : ');  // Récupérer la 2ème chaine saisie

            if (chaineSaisie2 === null) {

                break;

            } else if ((!chaineSaisie2) || (chaineSaisie2.trim() === '') || (isNaN(chaineSaisie2))) {

                console.log(('Tu dois saisir un nombre'));

            } else {

                nombre1 = parseInt(chaineSaisie1); // Convertir la chaine saisie en nombre
                nombre2 = parseInt(chaineSaisie2); // Convertir la chaine saisie en nombre

                // Appel de la fonction
                console.log('Les 2 nombres saisis : ' + nombre1 + ' et ' + nombre2);
                console.log('Résultat de l\'addition : '        + addition(nombre1, nombre2));
                console.log('Résultat de la soustraction : '    + soustraction(nombre1, nombre2));
                console.log('Résultat de la multiplication : '  + multiplication(nombre1, nombre2));
                console.log('Résultat de la division : '        + division(nombre1, nombre2) + '\n');

                break; // Sortir de la 2ème boucle while - Retour saisie nombre 1

            }
        }
    }
}

console.log('Merci et à bientôt');


// Fonction addition avec 2 arguments - les 2 nombres à ajouter
function addition (nombre1, nombre2) {
    return resultat = nombre1 + nombre2;
};

// Fonction soustraction avec 2 arguments
function soustraction (nombre1, nombre2) {
    return resultat = nombre1 - nombre2;
}

// Fonction multiplication avec 2 arguments
function multiplication (nombre1, nombre2) {
    return resultat = nombre1 * nombre2;
}

// Fonction division avec 2 arguments
function division (nombre1, nombre2) {
    return resultat = nombre1 / nombre2;
}