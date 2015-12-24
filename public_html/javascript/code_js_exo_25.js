/* 
 * Code Javascript Exercice 25 - Calculer déplacement entre points
 *
 */
// Initialisation du tableau multidimension (array)
tableauPoints = [
    [5,7],
    [5,8],
    [2,8]
];

//tableauPoints = [ /* Sous forme coordonnées du point [x,y) */
//    [0,8],
//    [1,8],
//    [2,8],
//    [3,8],
//    [3,5],
//    [3,8]
//];

//tableauPoints = [
//    [10,10],
//    [12,12]
//];


// Fonction de Calcul de déplacement entre 2 points
// Arguments coordonnées (x,y) de 2 points (1,2)
function calculDeplacement2points (x1, y1, x2, y2) {
    
    var result = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    return result;
    
}


// Fonction de calcul de déplacement
// Argument : un tableau multipoints
function calculDeplacement (tableau) {
    
    // Initialiser variables
    var deplacement,    // Variable pour calculer le deplacement
        total = [];     // Array pour comptabiliser les déplacement
    
    // Parcourir le tableau (array) en argument
    for (var i = 0; i < tableau.length - 1; i++) {
        
        // Appel de la fonction de calcul de distance entre 2 points
        deplacement = calculDeplacement2points(tableau[i][0], tableau[i][1], tableau[i+1][0], tableau[i+1][1]);
        total.push(deplacement); // Ajouter les déplacements dans array total
       
    }
    
    
    var result = 0; // Initialisation de la variable de résultat du calcul des déplacements
    
    // Parcourir array total pour calcul total des déplacements
    for (var i = 0; i < total.length; i++){
        
        result += total[i]; // Calcul
    
    }
    
    
    return result; // Retourne le résultat

}


// Appel de la fonction pour afficher le deplacement entre les points
console.log('La distance est : ' + calculDeplacement(tableauPoints)); // Retourne 4