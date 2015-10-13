/* 
 * Code Javascript exercice 04 - La factorielle du mot
 * contrôle effectué sur la saisie de l'internaute
 * utilisation de la fonction de calcul de la factorielle de l'exercice 3
 */
function chooseWordAndReturnFactorielle() {
    /* Déclaration des variables */
    var chaineSaisie;
    
    while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
        chaineSaisie = prompt('Saisis un mot inférieur à 15 caractères : ');   // Récupérer le texte saisi
        //nombre = chaineSaisie.length;
       
       if (chaineSaisie === null) { // si l'internaute clique sur annuler - gestion erreur length null

           break;
           
       } else {
           
            nombre = chaineSaisie.length;
           
            /* Contrôler la saisie de l'utilisateur grâce aux conditions */
            if (nombre == 0) {

                alert('Tu dois saisir un mot avec au moins 1 caractère !');

            } else if (1 <= nombre && nombre <= 15) { // Vérification si la saisie est un mot compris entre 1 et 15 caractères

                /* Rappel du mot saisi, longueur de la chaine et calcul de la factorielle par appel de la fonction calculFactoriel */
                var finalNumber = alert('Le mot saisi est ' + chaineSaisie + '\n' +
                                        'Le nombre de caractères de la chaîne : ' + nombre + '\n' +
                                        'Sa factorielle : ' + calculFactoriel(nombre)
                                        );
                return finalNumber;

            } else { // Si mot supérieur à 15 caractères

                alert ('Le mot saisi doit être inférieur à 15 caractères !');

            }
        }
    }
}


/* Fonction de calcul de la factorielle */
function calculFactoriel(arg) {
    var n = 1;
    for (var i = 2; i <= arg; i++) {
        n = n * i;
    }
    return n;
}


chooseWordAndReturnFactorielle();