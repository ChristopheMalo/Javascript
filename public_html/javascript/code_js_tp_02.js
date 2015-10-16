/* 
 * Code Javascript TP 02 - Stocker des prénoms dans un tableau
 */
/* Ma proposition */
var firstnamesArray = [];   // Création du tableau
var firstname;              // Déclaration de la variable pour stocker temporairement le prénom saisi


while (true) {
    firstName = prompt('Saisis un prénom : ');
    
    if (firstName) {                        // Si un prénom est saisi
        firstnamesArray.push(firstName);    // Alors ajoute prénom au tableau
    } else {
        break; // Quitte la boucle si aucune saisi ou utilisation du bouton annuler
    }
}

if (firstnamesArray != '') {            // Si tableau possède des entrées
    alert(firstnamesArray.join(' '));   // alors Affiche la liste des prénoms
}

/* 
 * 
 * La correction
 * adaptée à mes termes (variables, tableau etc.)
 * 
 */
//var firstnamesArray = [], // Création du tableau vide
//    firstname;
//
//while (firstname = prompt('Entrez un prénom :')) { // Si la valeur assignée à la variable « nick » est valide (différente de « null ») alors la boucle s'exécute
//    firstnamesArray.push(firstname); // Ajoute le nouveau prénom au tableau
//}
//
//if (firstnamesArray.length > 0) { // On regarde le nombre d'items
//    alert(firstnamesArray.join(' ')); // Affiche les prénoms à la suite
//} else {
//    alert('Il n\'y a aucun prénom en mémoire !');
//}
        