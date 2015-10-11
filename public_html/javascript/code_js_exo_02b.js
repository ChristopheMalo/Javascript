/* 
 * Code Javascript exercice 02b - Dis bonjour multiple
 * contrôle effectué sur la saisie de l'internaute
 * Utilisation d'une fonction personnalisée
 */
function chooseNumberAndSayBonjour() {
    /* Déclaration des variables */
    var chaineSaisie, nombre;
    var disBonjour = 'Bonjour n°';
    
    while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
        chaineSaisie = prompt('Saisis un nombre entre 1 et 10 : ');   // Récupérer le texte saisi
        nombre = parseInt(chaineSaisie);                              // transformer le texte en nombre
        
        /* Contrôler la saisie de l'utilisateur grâce aux conditions */
        if (nombre <= 0) {
            
            alert('Le nombre saisi doit être égal ou supérieur à 1 et positif !');
            
        } else if (1 <= nombre && nombre <= 10) { // Vérification si la saisie est un nombre compris entre 1 et 15
            
            // Test debug pour valider le nombre saisi
            console.log('Ok - Le nombre saisi : ' + nombre);
    
            /* Boucle Afficher le nombre exact de bonjour - entre 1 et 10 */
            for (var i = 1; i <= nombre; i++) {
                alert(disBonjour + i);
            }
            break;
            
        } else if (nombre > 10) {
            
            alert ('Le nombre saisi doit être inférieur à 10 !');
            
        } else {
            
            alert ('Tu dois saisir un nombre !!!'); // Message si pas un nombre
            
        }
    }
}

chooseNumberAndSayBonjour();