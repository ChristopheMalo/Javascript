/* 
 * Code Javascript exercice 12 - La piscine et la canicule
 * Contrôle de saisie de l'utilisateur
 * 
 */
var nageurs = 0;
var reponse = '';

while (true) {
    reponse = prompt('As-tu un maillot de bain ? (oui ou non)');
    
    if (reponse === null) {
        
        break;
        
    } else if (reponse === 'oui') {
        
        // Entrée à la piscine
        if (nageurs < 10) {
        
            console.log('Tu peux entrer.');
            nageurs = nageurs + 1; // gère le nombre de personne entrant dans la piscine
            console.log('Il y a présent ' + nageurs + ' nageur(s) dans la piscine.');
        
        } else {
            
            console.log('Tu ne peux pas entrer pour le moment, il y a ' + nageurs + ' nageurs dans la piscine.');
        
        }
            
        
    } else if (reponse === 'non') {
        
        
        // direction la boutique
        console.log('Tu dois acheter un maillot de bain');

        // quel âge ? majeur - mineur

        // Annonce prix maillot de bain

        // Entrée dans la piscine
        
       
    } else { // ((!minReponse) || (minReponse.trim() === '') || (minReponse !== 'oui') || (minReponse !== 'non'))
        
        console.log('Tu dois saisir une réponse correcte (oui ou non en minuscule) !!!');

    
    } // Fin boucle if - else if - else
    
} // Fin du while

console.log('Au revoir et à bientôt');