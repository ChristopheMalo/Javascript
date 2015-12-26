/* 
 * Code Javascript Exercice 26 - Calculer déplacement entre points avec saisie
 *
 */
// Initialisation
var tableauPoints = [];                         // Tableau pour recevoir les coordonnées
var regexCoord = /^[0-9]{1,2}[-][0-9]{1,2}$/;   // Regex pour vérifier les coordonnées saisies
var result;                                     // Variable pour recevoir la regex et valider la saisie

while (true) {
    var chaineSaisie = prompt('Saisis les coordonnées d\'un point du type x-y\nIl faut saisir des coordonnées correctes, exemple : 5-7 (maximum coordonnées à 2 chiffres)');
    
    if (regexCoord.test(chaineSaisie)) {
        
        console.log('Tu as saisi : ' + chaineSaisie); // Rappeler la saisie de l'utilisateur 
        
        // récupérer la chaine saisie et transformer en array nombre
        var splitReg = /[-]/;           // Rechercher le trait d'union pour spliter les 2 nombres saisis
        var tableauNumberDef = [];      // Tableau pour récuprer les 2 nombres
        tableauNumberDef = chaineSaisie.split(splitReg); // Séparer les 2 nombres
               
//      // Debug pour vérifier que les 2 nombres sont bien récupérés
//        for (var i = 0; i < tableauNumberDef.length; i++) {
//           console.log('tabNumDef[' + i + '] = ' + tableauNumberDef[i]);
//        }
        
        tableauPoints.push(tableauNumberDef); // Ajouter le tableau de 2 nombres au tableau des nombres servant au calcul de la distance
        // console.log('tableauPointsDef : ' + tableauPoints); // debug
        
    } else {
        
        if (chaineSaisie === null && tableauPoints.length >= 2) {

            /* Debug */
            // console.log('Calcul lancé');
            // console.log('On calcule');
            // console.log(tableauPoints);
            // console.log('Points[1][1]' + tableauPoints[1][1]);
            // console.log('Longueur : ' + tableauPoints.length);
            /* Fin debug */
            
            // Calculer le resultat
            console.log('La distance de déplacement entre les points saisis est : ' + calculDeplacement(tableauPoints)); // Retourne résultat calcul deplacement
            break; // Termine le programme
            
        } else if (chaineSaisie === null && tableauPoints.length < 2) {
            
            console.log('Tu dois saisir au moins 2 points');
            
        } else {
            
            console.log('Les coordonnées ne sont pas valides, il faut saisir des coordonnées correctes, exemple : 5-7 (maximum coordonnées à 2 chiffres)');
            
        }
    }
}
  
    
// Fonction de calcul de déplacement
// Argument : un tableau multipoints
function calculDeplacement (tableau) {
    
    // Initialiser variables
    var deplacement,    // Variable pour calculer le deplacement
        total = [];     // Array pour comptabiliser les déplacements
    
    // Parcourir le tableau (array) en argument
    for (var i = 0; i < tableau.length - 1; i++) {
        
        // Appel de la fonction de calcul de distance entre 2 points
        deplacement = calculDeplacement2points(tableau[i][0], tableau[i][1], tableau[i+1][0], tableau[i+1][1]);
        total.push(deplacement); // Ajouter les déplacements dans array total pour calculer la distance
        // console.log('Deplacement : ' + deplacement); // Debug
       
    }
    
    
    var result = 0; // Initialisation de la variable de résultat du calcul des déplacements
    
    // Parcourir array total pour calcul total des déplacements
    for (var i = 0; i < total.length; i++){
        
        result += total[i]; // Calcul
    
    }
    
    
    return result; // Retourne le résultat

}


// Fonction de Calcul de déplacement entre 2 points
// Arguments coordonnées (x,y) de 2 points (1,2)
function calculDeplacement2points (x1, y1, x2, y2) {
    
    var result = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    // console.log('Resultat : ' + result); // Debug
    return result;
    
}