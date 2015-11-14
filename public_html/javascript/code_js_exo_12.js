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
            gererNageurs();
            //nageurs = nageurs + 1; // gère le nombre de personne entrant dans la piscine
            //console.log('Il y a présent ' + nageurs + ' nageur(s) dans la piscine.');
        
        } else {
            
            infoNageurs();
            //console.log('Tu ne peux pas entrer pour le moment, il y a ' + nageurs + ' nageurs dans la piscine.');
        
        }
            
        
    } else if (reponse === 'non') {

        // direction la boutique
        console.log('Tu dois acheter un maillot de bain avant d\'entrée');

        // quel âge ? majeur - mineur
        // Annonce prix maillot de bain
        while (true) {
            
            var prixMaillotMineur = 15;
            var prixMaillotMajeur = 25;
            var age = parseInt(prompt('Quel est ton âge ?'));
                
            if (1 <= age && age < 18) {
                    
                console.log('Le prix du maillot pour un mineur est de ' + prixMaillotMineur + ' euros');
                break;
                
            } else if (age >= 18) {
                    
                console.log('Le prix du maillot pour un majeur est de ' + prixMaillotMajeur + ' euros');
                break;
                
            } else {
            
                console.log('Tu dois saisir un âge correct;');
            
            }
        
        }

        // Achat + Entrée dans la piscine
        if (nageurs < 10) {
            
            console.log('Merci pour ton achat, tu peux entrer dans la piscine');
            gererNageurs();
            //nageurs = nageurs + 1; // gère le nombre de personne entrant dans la piscine
            //console.log('Il y a présent ' + nageurs + ' nageur(s) dans la piscine.');
        
        } else {
            
            infoNageurs();
            //console.log('Tu ne peux pas entrer pour le moment, il y a ' + nageurs + ' nageurs dans la piscine.');
        
        }
        
    } else { // ((!minReponse) || (minReponse.trim() === '') || (minReponse !== 'oui') || (minReponse !== 'non'))
        
        console.log('Tu dois saisir une réponse correcte (oui ou non en minuscule) !!!');
        
    } // Fin boucle if - else if - else
    
} // Fin du while

console.log('Au revoir et à bientôt'); // Fin du programme


/* Les fonctions */
function gererNageurs () {
    nageurs = nageurs + 1;
    console.log('Il y a présent ' + nageurs + ' nageur(s) dans la piscine.');
}

function infoNageurs() {
    console.log('Tu ne peux pas entrer pour le moment, il y a ' + nageurs + ' nageurs dans la piscine.');
}