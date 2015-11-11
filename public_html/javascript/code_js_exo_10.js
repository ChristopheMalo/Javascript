/* 
 * Code Javascript exercice 10 - Le professeur généreux et la canicule
 * Contrôle de saisie de l'utilisateur
 * 
 */
while (true) {
    // Demander sa note à l'utilisateur
    var chaineSaisie = prompt('Quel est ta note donnée par ton professeur ?');

    if (chaineSaisie === null) {
        
        console.log('Tu n\'as rien saisi');
        break;
    
    } else {
        
        var note = parseInt(chaineSaisie); // Transformer la chaine saisie en nombre
        
        if (1 <= note && note <= 10) {
            
            console.log('Ta note reçue par le professeur : ' + note);
            var noteFinale = note + 10; // Ajouter 10 à la note reçue
            console.log('Ta note finale : ' + noteFinale + ' sur 20');
            
        } else {
        
            console.log('Tu dois saisir une note entre 1 et 10.');
        
        }
    }
}

console.log('Au revoir et merci :)'); // Quitter le programme