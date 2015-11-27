/* 
 * Code Javascript - Cours - Chapitre 19 - Les objets numériques
 * 
 * 
 */
// Objet Number mais parseInt et parseFloat sont à privilégier
// pour la conversion de chaine de caractères en nombre
var number01 = new Number('3');
var testNumber = parseFloat(number01);
console.log(number01);
console.log(testNumber);

var cinq = '5';
var number02 = parseFloat(cinq);
console.log(number02);

var floatNumber = '10.58';
var number03 = parseInt(floatNumber);
var number04 = parseFloat(floatNumber);
console.log(number03);
console.log(number04);


var max = Number.MAX_VALUE,
    inf = Number.POSITIVE_INFINITY;

if (max < inf) {
    console.log('La valeur maximum est inférieure à l\'infini !');
}


// Objet Math
// Propriétés
console.log('PI : '     + Math.PI);
console.log('E : '      + Math.E);
console.log('LOG10E : ' + Math.LOG10E);

// Méthodes
// Arrondir et tronquer
console.log('Floor 43.45 : ' + Math.floor(43.45)); // Retourne 43
console.log('Floor 45.99 : ' + Math.floor(45.99)); // Retourne 45
console.log('Floor 54 : '    + Math.floor(54));    // Retourne 54

console.log('Ceil 43.45 : '  + Math.ceil(43.45));  // Retourne 44
console.log('Ceil 45.99 : '  + Math.ceil(45.99));  // Retourne 46
console.log('Ceil 54 : '     + Math.ceil(54));     // Retourne 54

console.log('Round 43.45 : ' + Math.round(43.45)); // Retourne 43
console.log('Round 45.99 : ' + Math.round(45.99)); // Retourne 46
console.log('Round 54 : '    + Math.round(54));    // Retourne 54

// Calcul de puissance et de racine carrée
console.log('Puissance (3, 3) : ' + Math.pow(3, 3)); // Retourne 27
console.log('Racine carré de 9 : ' + Math.sqrt(9));  // Retourne 3

// Cosinus et sinus
console.log('Cosinus de PI : ' + Math.cos(Math.PI)); // Retourne -1 exprimé en radians
console.log('Sinus de PI : '   + Math.sin(Math.PI)); // Retourne 1.22... exprimé en radians

// Retrouver valeurs max ou minimum
console.log('Valeur maximum 55, 87, 456, 3999, 7, 12 : ' + Math.max(55, 87, 456, 3999, 7, 12));
console.log('Valeur minimum 55, 87, 456, 3999, 7, 12 : ' + Math.min(55, 87, 456, 3999, 7, 12));

// Choisir un nombre aléatoire
console.log('Random : ' + Math.random()); // Retourne un nombre aléatoire entre 0 (inclus) et 1 (exclu)

// Fonction aléatoire
function nombreAleatoire(min, max, integer) {
    if (!integer) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

console.log('Nombre aléatoire entre 10 et 100 - entier : ' + nombreAleatoire(10, 100, 1));

var stringNumber = '08';
console.log(parseInt(stringNumber));        // Retourne 8
console.log(parseInt(stringNumber, 10));    // Retourne 8


// Fonctions de contrôle
var string = 'Test';

if (isNaN(string)) {
    console.log('Cette variable ne contient pas de nombre.');
} else {
    console.log('Cette variable contient un nombre.');
}