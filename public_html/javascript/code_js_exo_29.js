/* 
 * Code Javascript Exercice 29 - Afficher un tableau à 2 dimensions
 *
 */
var arrayPlateau = [
  [5, 10, 3, 9],
  [0, 56, 7, 10],
  [5, 99, 1, 3]
];

console.log('Reponse à l\'exercice');
for (var i = 0; i < arrayPlateau.length; i++) {
    console.log(arrayPlateau[i].join(' '));
}


console.log('\n');

/* Use console.table() */
console.table(arrayPlateau);
//----------------------------------------------------------------



console.log('\n');



//----------------------------------------------------------------
/*
 * Exemples manipulation de tableau 
 * 
 */
var arrayPlateau = [
  [5, 10, 3, 9],
  [0, 56, 7, 10],
  [5, 99, 1, 3]
];

console.log('\n');

/* Acccéder aux index du tableau */
console.log('Acccéder aux index du tableau');
console.log(arrayPlateau.length); // Retourne 3
console.log(arrayPlateau[0].length); // Retourne 4


console.log('\n');


/* Parcourir le tableau */
console.log('Parcourir et afficher un array avec 2 boucles');
for (var i = 0; i < arrayPlateau.length; i++) {
    for (var j = 0; j < arrayPlateau[i].length; j++) {
        //console.log(arrayPlateau[i].join(' '));
        console.log(arrayPlateau[i][j]);
    }
}
//----------------------------------------------------------------


console.log('\n');
console.log('\n');


//----------------------------------------------------------------
/* Create a multidimensional array - Other way - Table de multiplication */
console.log('Table de multiplication');
var table = new Array(10);               // 10 rows of the table

for (var i = 0; i < table.length; i++) {
    table[i] = new Array(10);            // Each row has 10 columns
}

// Initialize the array
for (var row = 0; row < table.length; row++) {
    for(var col = 0; col < table[row].length; col++) {
        table[row][col] = row*col;
        console.log(table[row][col]);
    }
}

console.log('\n');

console.table(table);

// Use the multidimensional array to compute 5*7
var product = table[5][7];  // 35
console.log('Produit : ' + product);
//----------------------------------------------------------------


console.log('\n');


//----------------------------------------------------------------
/* Creation d'une grille */
console.log('Creation d\'une grille');
var grille = []; // Création du tableau général
console.log(grille);

//for (var i = 0; i < 3; i++) { // Création des lignes horizontales
//    grille[i] = [];
//    console.log(grille[i]);
//}


for (var i = 0; i < 9; i++) {
    grille[i] = [];
    for (var j = 0; j < 9; j++) { // Création des colonnes 
       grille[i][j] = 0;
       //"Case "+ i + "-" + j +" : "+ grille[i][j];
    }
}

console.log(grille.join('\n'));
//----------------------------------------------------------------



console.log('\n');



//----------------------------------------------------------------
var arrayPlateau = [
  [5, 10, 3, 9],
  [0, 56, 7, 10],
  [5, 99, 1, 3]
];

console.log(arrayPlateau);

console.log('Afficher un tableau');
for (var i = 0; i < arrayPlateau.length; i++) {
    for (var j = 0; j < arrayPlateau.length; j++) {
        console.log(arrayPlateau[i][j]);
    }
}
//----------------------------------------------------------------



console.log('\n');



//----------------------------------------------------------------
console.log('Fonction de creation de tableau');
function Create2DArray(rows) {
  var arr = [];

  for (var i=0;i<rows;i++) {
     arr[i] = [];
  }

  return arr;
}

console.log(Create2DArray(10));
//----------------------------------------------------------------



console.log('\n');



//----------------------------------------------------------------
console.log('Afficher un tableau');
var a = new Array(4);
for (i = 0; i < 4; i++) {
  a[i] = new Array(4);
  for (j = 0; j < 4; j++) {
    a[i][j] = "[" + i + "," + j + "]";
  }
}

console.log(a.join('\n'));
//----------------------------------------------------------------



console.log('\n');



//----------------------------------------------------------------
console.log('Ajouter lignes et colonnes à un tableau');
var myArray = [
    [1,1,1,1,1],
    [1,1,1,1,1],
    [1,1,1,1,1]
];

var r = 3; //start from rows 3
var c = 5; //start from col 5

var rows = 8;
var cols = 7;

// expand to have the correct amount or rows
for( var i=r; i<rows; i++ ) {
  myArray.push( [] );
}

// expand all rows to have the correct amount of cols
for (var i = 0; i < rows; i++)
{
    for (var j =  myArray[i].length; j < cols; j++)
    {
        myArray[i].push(0);
    }
}

console.log(myArray.join('\n'));
//----------------------------------------------------------------



console.log('\n');



//----------------------------------------------------------------
console.log('Fonction matrice tableau');
Array.matrix = function(numrows, numcols, initial){
   var arr = [];
   for (var i = 0; i < numrows; ++i){
      var columns = [];
      for (var j = 0; j < numcols; ++j){
         columns[j] = initial;
      }
      arr[i] = columns;
    }
    return arr;
};

//create a 8x8 matrix, with all values set to 0
var my2Darray = Array.matrix(8,8,0);
 
console.log(my2Darray[3][3]); // displays 0
console.log(my2Darray.join('\n')); // display matrix
//----------------------------------------------------------------