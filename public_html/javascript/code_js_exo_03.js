/* 
 * Code Javascript exercice 03 - La factorielle
 * contrôle effectué sur la saisie de l'internaute
 */
function chooseNumberAndReturnFactorielle() {
    /* Déclaration des variables */
    var chaineSaisie, nombre;
    
    while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
        chaineSaisie = prompt('Saisis un nombre entre 1 et 15 : ');   // Récupérer le texte saisi
        nombre = parseInt(chaineSaisie);                              // transformer le texte en nombre
        
        /* Contrôler la saisie de l'utilisateur grâce aux conditions */
        if (nombre <= 0) {
            
            alert('Le nombre saisi doit être égal ou supérieur à 1 et positif !');
            
        } else if (1 <= nombre && nombre <= 15) { // Vérification si la saisie est un nombre compris entre 1 et 15
            
            /* Rappel du nombre saisi et calcul de la factoriell par appel de la fonction calculFactoriel */
            var finalNumber = alert('Le nombre saisi est ' + nombre + ' et sa factorielle : ' + calculFactoriel(nombre));
            return finalNumber;
            
        } else if (nombre > 15) {
            
            alert ('Le nombre saisi doit être inférieur à 15 !');
            
        } else {
            
            alert ('Tu dois saisir un nombre !!!'); // Message si pas un nombre
            
        }
    }
}

/* Fonction de calcul de la factorielle */
function calculFactoriel(arg) {
    if (arg === 0) {
        return 1;
    } else {
        return arg * calculFactoriel(arg - 1);
    }
}

/* Appel de la fonction */
chooseNumberAndReturnFactorielle();