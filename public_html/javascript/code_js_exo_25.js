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

// Fonction de Calcul de déplacement entre 2 points
// Arguments coordonnées (x,y) de 2 points (1,2)
function calculDeplacement2points (x1, y1, x2, y2) {
    var result = Math.abs(x1 - x2) + Math.abs(y1 - y2);
    return result;
}


// Fonction de calcul de distance
// Argument : un tableau multipoints
function calculDeplacement (tableau) {
    // Initialiser variable du résultat
    var deplacement;
    
    // Parcourir le tableau (array) en argument
    for (var i = 0; i < tableau.length - 1; i++) {
        
        // Appel de la fonction de calcul de distance entre 2 points
        deplacement = calculDeplacement2points(tableau[i][0], tableau[i][1], tableau[i+1][0], tableau[i+1][1]);
        deplacement++;
    
    }
    
    return deplacement;

    }

// Appel de la fonction pour afficher le deplacement entre les points
console.log('La distance est : ' + calculDeplacement(tableauPoints)); // Retourne 4