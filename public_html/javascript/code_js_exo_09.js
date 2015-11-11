/* 
 * Code Javascript exercice 09 - La température dans ton quartier
 * Contrôle de saisie de l'utilisateur
 * 
 */
while (true) {
    var chaineSaisie = prompt('Quel est la température dans ton quartier ?');

    if (chaineSaisie === null) {
        
        console.log('Tu n\'as rien saisi');
        break;
    
    } else {
        
        var temperature = parseInt(chaineSaisie);
        
        if (0 <= temperature && temperature <= 12) {
            
            console.log('Ça caille !');
            
        } else if (13 <= temperature && temperature <= 24) {
                
            console.log('Un petit apéro les amis');
        
        } else if (25 <= temperature && temperature <= 45) {
        
            console.log('Ça crame ici, on va mourir !');
        
        } else {
        
            console.log('Tu dois saisir une température entre 0 et 45°.');
        
        }
    }
}

console.log('Au revoir et merci :)'); // Quitter le programme