/* 
 * Code Javascript TP 03 - Convertir un nombre en toutes lettres
 * 
 * EN COURS DE DÉVELOPPEMENT
 * 
 */

while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
    var nombre = parseInt(prompt('Saisis un nombre entre 0 et 999')); // Transforme une chaine en nombre
    
    // Contrôler la saisie de l'utilisateur
    if (nombre < 0) {
        
        console.log('Le nombre saisi doit être égal ou supérieur à 0 et positif !');
    
    } else if (0 <= nombre && nombre <= 999) {

        console.log('Appel de la fonction');
        var conversion = console.log('Le nombre saisi est ' + nombre + ' et en toutes lettres ' + convertirNombreToLettres(nombre));
        
        var unite, dizaine, centaine;
        
        
        unite = nombre % 10;
        dizaine = ((nombre % 100) - unite);
        centaine = (((nombre % 1000) - dizaine - unite));
        
        if (dizaine === 10) {
            uniteDiz = unite + dizaine;
            console.log('unitéDiz' + uniteDiz);
            console.log('centaine ' + centaine);
            
            console.log('Convert ' + centaine + '-' + uniteDiz);
            
        } else {
            console.log('unité ' + unite);
            console.log('dizaine ' + dizaine);
            console.log('centaine ' + centaine);
            
            console.log('Convert' + centaine + '-' + convertDizaine(dizaine) + '-' + unite);
        }
        
        
    }  else if (nombre > 999) {
        
        // Rappel du nombre saisi et conversion par appel de la fonction
        console.log('Le nombre saisi doit être inférieur ou égal à 999'); 
        
    } else {
        
        console.log('Tu dois saisir un nombre !!!');
        
    }
}


function convertDizaine (dizaine) {
    switch (dizaine) {
        case 10:
            return 'dix';
            break;
        case 20:
            return 'vingt';
            break;
        case 30:
            return 'trente';
            break;
        case 40:
            return 'quarante';
            break;
        case 50:
            return 'cinquante';
            break;
        case 60:
            return 'soixante';
            break;
        case 70:
            return 'soixante-dix';
            break;
        case 80:
            return 'quatre-vingt';
            break;
        case 90:
            return 'quatre-vingt-dix';
    }
}
 
// Fonction de conversion
function convertirNombreToLettres (nombre) {
    // Ici le code de la fonction
    resultat = nombre % 100;
    return resultat;
}