/* 
 * Code Javascript exercice 02 - Dis bonjour multiple
 * contrôle effectué sur la saisie de l'internaute
 */
/* Déclaration des variables */
var nbreSaisi = parseInt(prompt('Saisis un nombre entre 1 et 10 :'));
var sayWelcome = 'Bonjour n°';

/* Contrôler la saisie de l'utilisateur grâce aux conditions */
if (nbreSaisi <= 0 ){
    
    alert('Le nombre saisi doit être égal ou supérieur à 1 et positif !');
    window.location.reload(); // Charge à nouveau la page

} else if (nbreSaisi >= 1 && nbreSaisi <= 10) {
    
    // Test debug pour valider le nombre saisi
    // alert('Ok' + ' - Le nombre saisi : ' + nbreSaisi);
    
    // Boucle Afficher le nombre exact de bonjour - entre 1 et 10
    for (var i = 1; i <= nbreSaisi; i++) {
        alert(sayWelcome + i);
    }

} else if (nbreSaisi > 10) {

    alert ('Le nombre saisi doit être inférieur à 10 !');
    window.location.reload();

} else {
    
    alert ('Tu dois saisir un nombre !!!'); // Si saisie différent d'un nombre
    window.location.reload();
 
}