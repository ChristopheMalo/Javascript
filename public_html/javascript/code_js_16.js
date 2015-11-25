/* 
 * Code Javascript - Cours - Chapitre 16 - Les chaines de caractères
 * 
 * 
 */
// Création d'une chaine de caratères primitive
var myPrimitiveString01 = 'TEST de caractères 01';

// Instancier un objet String
var myString01 = new String('Test réel de caractères');


/* Valable pour tous les objets */
var myArray = []; // Tableau primitif
var myRealArray = new Array(); 

var myObject = {}; // Objet primitif
var myRealObject = new Object();

var myBoolean = true; // Booléen primitif
var myRealBoolean = new Boolean("true");

var myNumber = 42; // Nombre primitif
var myRealNumber = new Number("42");

// Le plus simple et préférable -> Utliser les types primitifs - Recommandation


// L'objet String
// Propriétés
// Longueur d'une chaine
console.log('Longueur de la primitive  \'' + myPrimitiveString01 + '\' est ' + myPrimitiveString01.length);

// La casse
var chainePetiteCasse, chaineGrandeCasse;
chainePetiteCasse = myPrimitiveString01.toLowerCase();
console.log('toLowerCase : ' + chainePetiteCasse);

chaineGrandeCasse = chainePetiteCasse.toUpperCase();
console.log('toUpperCase : ' + chaineGrandeCasse);


// Accéder aux caractères
var firstChar   = myPrimitiveString01.charAt(0);
var lastChar    = myPrimitiveString01.charAt(myPrimitiveString01.length - 1);
console.log('Premier char : ' + firstChar);
console.log('Dernier char : ' + lastChar);


// Obtenir le caractère en ASCII
var firstCharAscii   = myPrimitiveString01.charCodeAt(0);
var lastCharAscii    = myPrimitiveString01.charCodeAt(myPrimitiveString01.length - 1);
console.log('Premier char ASCII : ' + firstCharAscii);
console.log('Dernier char ASCII : ' + lastCharAscii);

// Inverse - Il faut ici impérativement utiliser l'objet String
var asciiToString = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116);
console.log('fromCharCode : ' + asciiToString);


// Fonction de détection d'une touche
function detectKey(event) {
    var key = event.keyCode; // Utilisation de l'objet event 

    console.log('La touche numéro ' + key + ' a été pressée. Le caractère ' + String.fromCharCode(key) + ' a été inséré.');
}


// Rechercher - couper - extraire
var charSearch = 'car';
var search = myPrimitiveString01.indexOf(charSearch);

if (search > -1) { // Pour mémo -> if (~myString.indexOf('JavaScript'))
    console.log('La chaine contient l\'ensemble de caractères \'' + charSearch + '\' qui débute à la position ' + search);
}


// Extraire une chaine
var extract01 = myPrimitiveString01.substring(0, myPrimitiveString01.indexOf(' '));
var extract02 = myPrimitiveString01.substring(myPrimitiveString01.lastIndexOf(' ') + 1); // le + 1 permet de récupérer le mot sans l'espace devant
var extract03 = myPrimitiveString01.slice(7, -3);
console.log('Test extract 01 : ' + extract01); // Retourne TEST
console.log('Test extract 02 : ' + extract02); // Retourne 01
console.log('Test extract 03 : ' + extract03); // Retourne caractères


// Couper une chaine en un tableau avec split()
var myContacts = 'Pierre,Thomas,Guillaume,Bernard'; // Provenant d'un export CSV par exemple
var useSPlit   = myContacts.split(','); // chaine coupé à chauqe ,
console.log(myContacts);
console.log(useSPlit);


// Tester l'existence d'une chaine
var string01 = new String('TestString01');
var string02 = string01.valueOf();
console.log(typeof string01); // Retourne object -> Instance de String
console.log(typeof string02); // Retourne string -> Valeur primitive


// Fonction pour vérifier si une variable contient une chaine de caractères
function isString(variable) {
    return typeof  variable.valueOf() === 'string'; // Retourne true si valeur primitive est string
}

console.log(isString('Peu importe la string'));                 // Retourne true
console.log(isString(new String('Peu importe la string TOO'))); // Retourne true
console.log(isString(4));                                       // Retourne false