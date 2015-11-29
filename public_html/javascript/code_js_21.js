/* 
 * Code Javascript - Cours - Chapitre 21 - Les tableaux
 * 
 * 
 */
// L'objet Array
// Création de tableau en instanciant l'objet primitif`
var array01 = new Array(); // Un tableau vide
var array02 = new Array('Value1', 'Value2', 45, 'ValueX');

// Création de tableau en utilisant son type primitif
var array03 = ['Value1', 'Value2', 45, 'ValueX', 32, 'Toto'];

console.log(array01 + '\n' + array02 + '\n' + array03);


/* La propriété - unique - d'un tableau */
console.log('Longueur array01 : ' + array01.length);
console.log('Longueur array02 : ' + array02.length);
console.log('Longueur array03 : ' + array03.length);


/* les méthodes */
// Concaténer 2 tableaux
var concatArray01 = ['Value1', 'Value2'].concat(['Value3', 'Value4']);
console.log(concatArray01);


// Parcourir un tableau...
var parcourirArray  = ['Value1', 'Value2', 'Value3'];;
var length          = parcourirArray.length;

// ...avec for
console.log('\nParcourir avec for');
for (var i = 0; i < length; i++) {
    console.log(
        'Index : ' + i + '\n' +
        'Valeur : ' + parcourirArray[i]
    );
}

// ...avec foreach
console.log('\nParcourir avec foreach');
parcourirArray.forEach(function(value, index) {
    console.log(
        'Index : '  + index + '\n' +
        'Valeur : ' + value
    );
});


// Rechercher un élément dans un tableau
var part1   = ['value1'];
var array04 = ['value1', part1];
console.log(array04);
console.log(array04.indexOf(part1)); // Retourne 1 - index / position de part1 (la recherche)


// Trier un tableau...
// ... avec la méthode reverse() - inverser l'ordre des valeurs du tableau
var testReverse = [1, 2, 3, 4, 5];
console.log(testReverse.reverse());

// /...avec la méthode sort - par ordre alphabétique
// Dans le cas de nombre, la méthode applique des caractères aux nombre pour les trier
var testSort = [45, 1, 24, 4, 9, 2, 999];
console.log('testSort non trié : ' + testSort);
console.log('testSort trié : ' + testSort.sort());

// pour trier croissant ou décroissant, il faut développer une fonction
// Croissant -> a,b --- Décroissant -> b,a
testSort.sort(function (a, b) {
    
    if (a < b) {
     
        return -1;
    
    } else if (a > b) {
    
        return 1;
    
    } else {
    
        return 0;
    
    }
    
});

console.log('Fonction sort : ' + testSort);


// Extraire une partie de tableau
console.log('\nFonction extraire : splice');
var testExtraire = ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'];
console.log('testExtraire au départ : ' + testExtraire);
var extract = testExtraire.splice(1, 3);
console.log('Extract : ' + extract);
console.log('testExtraire après extract : ' + testExtraire);


// Tester si la variable passée en paramètre contien un tableau
console.log(Array.isArray(testSort)); // Retorune true

/*
 * Les piles et les files pour stocker et accéder
 * à de grandes quantités de données efficacement
 * 
 */
/* Les piles */
// push() et pop()
console.log('\nPiles : push() et pop()');
var pileTest = ['Pile 1'];
var piles = pileTest.push('Pile 2', 'Pile 3', 'Pile 4');
console.log(pileTest);  // Retourne Array [ "Pile 1", "Pile 2", "Pile 3", "Pile 4" ]
console.log(piles);    // Retourne 4

piles = pileTest.pop();
console.log(pileTest); // Retourne Array [ "Pile 1", "Pile 2", "Pile 3" ]
console.log(piles);    // Retourne Pile 4

// unshift() et shift()
console.log('\nPiles : unshift() et shift()');
var pileTest02 = ['Pile 1'];
var piles02 = pileTest02.unshift('Pile 2', 'Pile 3', 'Pile 4');
console.log(pileTest02);  // Retourne Array [ "Pile 2", "Pile 3", "Pile 4", "Pile 1" ]
console.log(piles02);    // Retourne 4

piles = pileTest02.shift();
console.log(pileTest02); // Retourne Array [ "Pile 3", "Pile 4", "Pile 1" ]
console.log(piles02);    // Retourne 4


/* Les files */
// push() et shift()
console.log('\nFiles : push() et shift()');
var fileTest = ['File 1'];
var files = fileTest.push('File 2', 'File 3', 'File 4');
console.log(fileTest);  // Retourne Array [ "File 1", "File 2", "File 3", "File 4" ] 
console.log(files);    // Retourne 4

files = fileTest.shift();
console.log(fileTest); // Retourne Array [ "File 2", "File 3", "File 4" ]
console.log(files);    // Retourne File 1

// push() et shift()
console.log('\nFiles : unshift() et pop()');
var fileTest02 = ['File 1'];
var files02 = fileTest02.unshift('File 2', 'File 3', 'File 4');
console.log(fileTest02);  // Retourne Array [ "File 2", "File 3", "File 4", "File 1" ] 
console.log(files02);    // Retourne 4

files02 = fileTest02.pop();
console.log(fileTest02); // Retourne Array [ "File 2", "File 3", "File 4" ]
console.log(files02);    // Retourne File 1
