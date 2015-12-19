/* 
 * Code Javascript Exercice 27 - Calcul sur un tableau
 *
 */
// Initialisation d'un tableau - avec uniquement des nombres
tableauNombres01 = [4, 8, 5, 20, 3, 6];       // Total 46

// Initialisation d'un tableau - avec des nombres et string
tableauNombres02 = [4, 'toto', 5, 20, 3, 6];  // Null


// Fonction calcul de la somme - argument : un tableau
function calculSomme (tableau) {
    var somme = 0; // Initialiser la somme à 0 pour effectuer le calcul sinon NaN est retournés
    
    for (var i = 0; i < tableau.length; i++) {
        somme += Number(tableau[i]);
    }
    
    if (isNaN(somme)) {
        
        return 'null';
    
    } else {
    
        return somme;
    
    }
}

// Appel de la fonction et calcul somme
console.log('La somme des nombres du tableau01 [' + tableauNombres01 + '] est ' + calculSomme(tableauNombres01));
console.log('La somme des nombres du tableau02 [' + tableauNombres02 + '] est ' + calculSomme(tableauNombres02));