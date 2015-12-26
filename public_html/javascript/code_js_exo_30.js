/* 
 * Code Javascript Exercice 30 - Trier un tableau
 *
 */
// Initialisation des tableaux (array)
tableauNombres01 = [6, 10, 21, 2, 1, 50];
tableauNombres02 = [6, 10, 'toto', 21, 2, 1, 50];

// Afficher les tableaux avant le tri
console.log('Avant le tri');
console.log('Array 01');
console.log(tableauNombres01);
console.log('Array 2');
console.log(tableauNombres02);

// Les fonctions
// Fonction de tri du tableau
function trierArray (tableau) {
    
    var tableauTrier;
    
    if (detectLetters(tableau)) { // Appel de la fonction pour détecter si nombre
        
        return 'null';
        
    } else { // SI que des nombres, appeler la fonction de comparaison pour trier le tableau
        
        return tableauTrier = tableau.sort(compareNumber);
    }
    
}


// Comparer les nombres et les trier ascendant ou descandant et non alphabétique
function compareNumber(a,b) {
    
    return a - b; // Du plus petit au plus grand
    
}


// Fonction pour détecter si array contient uniquement des nombres
function detectLetters (tableau) {
    
    var letter = /[a-zA-Z]/; // Déclarer une RegEx
    
    for (var i = 0; i < tableau.length; i++) {
        
        if (letter.test(tableau)) { // Utilisation de la RegEx
        
            // console.log(tableau + ' ne peut être trier car contient des lettres.'); // Debug
            return true;
            
        } else {
            
            // console.log(tableau + ' ne contient pas de lettres.'); // Debug
            return false;
            
        }
    }
}

// Debug
//console.log('\nDetect letters : ');
//detectLetters(tableauNombres01);
//detectLetters(tableauNombres02);


// Afficher les tableaux après le tri
console.log('\nTrier');
console.log('Array 01');
console.log(trierArray(tableauNombres01));
console.log('Array 2');
console.log(trierArray(tableauNombres02));