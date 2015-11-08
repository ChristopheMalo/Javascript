/* 
 * Code Javascript exercice 05 - Additionner 2 nombres
 * contrôle effectué sur la saisie de l'internaute
 */
var chaineSaisie1, chaineSaisie2, nombre1, nombre2;

console.log('Ce programme te demande 2 nombres puis te retourne le résultat de l\'addition');

// Pour quitter la boucle il faut cliquer sur annuler
while (true) { // Tant que la boucle est true - CAD mauvaise saisie ou pas de clic sur annuler alors => affichage de la boite de dialogue de saisie
    chaineSaisie1 = prompt('Saisis un premier nombre : '); // Récupérer la première chaine saisie
    

    if (chaineSaisie1 === null) { // si l'internaute clique sur annuler => sortie de la boucle while

        break;

    } else if ((!chaineSaisie1) || (chaineSaisie1.trim() === '') || (isNaN(chaineSaisie1))) { // Gérer la chaîne vide et la chaîne avec des espaces
        
        console.log('Tu dois saisir un nombre');
            
    } else {
        
        chaineSaisie2 = prompt('Saisis un deuxième nombre : ');  // Récupérer la 2ème chaine saisie
        
        if (chaineSaisie2 === null) {
            
            break;
            
        } else if ((!chaineSaisie2) || (chaineSaisie2.trim() === '') || (isNaN(chaineSaisie2))) {
            
            console.log(('Tu dois saisir un nombre'));
            
        } else {
        
            nombre1 = parseInt(chaineSaisie1); // Convertir la chaine saisie en nombre
            nombre2 = parseInt(chaineSaisie2); // Convertir la chaine saisie en nombre
            
            // Appel de la fonction
            console.log('Résultat de l\'addition de ' + nombre1 + ' + ' + nombre2 + ' : ' + addition(nombre1, nombre2));
        
            //break; // Activer le break si souhait d'une seule addition
            
        }
    }
}

console.log('Merci et à bientôt');


// Fonction addition avec 2 arguments - les 2 nombres à ajouter
function addition (nombre1, nombre2) {
    
    var resultat = nombre1 + nombre2;
    
    return resultat;
};