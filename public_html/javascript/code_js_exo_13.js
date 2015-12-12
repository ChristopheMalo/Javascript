/* 
 * Code Javascript exercice 09 - Nombre X et #
 * Contrôle de saisie de l'utilisateur
 * 
 * 
 * 
 */
/* Déclaration des variables */
var chaineSaisie, nombre,
    limiteZero  = 0;
    limiteDown  = 1,
    limiteUp    = 9,
    motDiese    = '#';
    
while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
    chaineSaisie = prompt('Saisis un nombre entre ' + limiteDown + ' et ' + limiteUp + ' : ');   // Récupérer le texte saisi       

    if (chaineSaisie === null) {

        break;

    } else {

        nombre = parseInt(chaineSaisie); // transformer le texte en nombre

        /* Contrôler la saisie de l'utilisateur grâce aux conditions */
        if (nombre <= limiteZero) {

            alert('Le nombre saisi doit être égal ou supérieur à ' + limiteDown + 'et positif !');

        } else if (limiteDown <= nombre && nombre <= limiteUp) { // Vérification si la saisie est un nombre compris entre limiteDown et Up

            /* Rappel du nombre saisi */
            console.log('Le nombre saisi est ' + nombre);
            
            // Afficher le résultat            
            /*** Construction de la ligne dans une variable pour utilisation multiple ***/
            // var ligne = (Array(nombre + 1).join(motDiese) + '\n'); // Construction de la ligne
            var ligne = (motDiese.repeat(nombre) + '\n'); // Autre façon de construire de la ligne
            
            /*** Construction des lignes ***/
             // Avec un for => les occurences sont concentrées en 1 ligne sur les nouveaux navigateurs
             // Le for serait pourtant la solution
            console.log('Avec un for, les occurences sont concentrées sur une ligne sur les nouveaux navigateurs - date exercice : 2015.\nExemple :');
            for (var i = 1; i < nombre + 1; i++) {
                console.log(ligne); // Obligation de lister les lignes pour afficher le resultat en console
            }
            
            // For avec numero de ligne
            console.log('Pour afficher les lignes j\'indique un numéro de ligne, mais cela ne répond pas correctement à l\'exercice');
            for (var i = 1; i < nombre + 1; i++) {
                console.log(i + ' ' + ligne); // Obligation de lister les lignes pour afficher le resultat en console
            }
            
            /******************************* 
             * 
             * LA SOLUTION : avec un switch
             * 
             * *****************************/
            console.log('Solution : utiliser un switch \'dynamique\' - Le Switch retourne chaque ligne');
            switch (nombre) {
                case nombre:
                    console.log(ligne.repeat(nombre)); // On retourne la ligne x fois selon le nombre saisi
                    break;                 
            }
            

        } else if (nombre > limiteUp) {

            alert ('Le nombre saisi doit être inférieur ou égal à ' + limiteUp + ' !');

        } else {

            alert ('Tu dois saisir un nombre !!!'); // Message si pas un nombre
        }
    }
}

console.log('Au revoir et merci :)');