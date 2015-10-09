/* 
 * Code Javascript TP 01 - Commentaires selon l'âge
 */
/* Déclaration des variables + affichage de la boite de dialogie pour saisie */
ageSaisi = parseInt(prompt('Quel âge avez-vous ?'));

/* Renvoyer un commentaire selon l'âge */
if (ageSaisi <= 0) {
    
    alert('Votre âge est impossible');
    window.location.reload();
    
} else if (ageSaisi >= 1 && ageSaisi <= 17) {
    
    alert("Vous n'êtes pas encore majeur.");

} else if (ageSaisi >= 18 && ageSaisi <= 49) {
    
    alert('Vous êtes majeur mais pas encore senior.');
    
} else if (ageSaisi >= 50 && ageSaisi <= 59) {
    
    alert('Vous êtes senior mais pas encore retraité.');
    
} else if (ageSaisi >= 60 && ageSaisi <= 120) {
    
    alert('Vous êtes retraité, profitez de votre temps libre ! ');
    
} else if (ageSaisi > 120) {
    
    alert('Vous êtes encore devant un ordinateur...plus de 120 ans ???!!! ');
    window.location.reload();

} else {
    
    alert('Vous devez saisir un nombre.');
    window.location.reload();
    
}