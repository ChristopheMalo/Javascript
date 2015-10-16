/* 
 * Exemples de code pour tester les objets et les tableaux
 */
/* Objets - Introduction */
/* Exemple 1 */
var stringSaisie = 'Test chaine de caracteres pour exemple 1';
// alert('Exemple 1 (Objets - Introduction) - Nombre de caractères : ' + stringSaisie.length); // Calcul du nombre de caractères
console.log('Exemple 1 (Objets - Introduction) - Nombre de caractères : ' + stringSaisie.length); // Calcul du nombre de caractères
//alert('Passage en majuscule : ' + stringSaisie.toUpperCase()); // Transformer la chaine de caractères en majuscule
console.log('Passage en majuscule : ' + stringSaisie.toUpperCase()); // Transformer la chaine de caractères en majuscule


/* Exemple 2 */
stringSaisie = 'EXEMple 2';
console.log('Exemple 2 (Objets - Introduction) - nombre de caractères, var name identique à exemple 1 : ' + stringSaisie.length + ' - Chaine saisie : ' + stringSaisie);
console.log('Passage en minuscule : ' + stringSaisie.toLowerCase());


/* Tableaux */
/* Exemple 3 - Ajouter des items - Déclaration tableaux */
var testTableau = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Déclaration d'un tableau
console.log('Index 4 du tableau : ' + testTableau[4]); // Affiche item 5

testTableau[4] = 'New item 5';

console.log(testTableau[4]); // New item 5

testTableau.push('Item 6', 'Item 7');

console.log(testTableau);

// Reprendre à Ajouter et supprimer des items

/* Exemple 4 */
var testSplit   = "Je teste la méthode Split dans cet exemple 4",
    splitArray  = testSplit.split(' ');
    
console.log('La chaine de caractère : ' + testSplit);
console.log('La chaine en tableau : ' + splitArray);
console.log(splitArray);
    
var joinArray = splitArray.join(' ');

console.log('Retour à la chaine de base avec join : ' + joinArray);
console.log(joinArray);

/* Exemple 5 - parcourir un tableau */
var parcourirTableau = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']; // Création d'un tableau

for (var i = 0, count = parcourirTableau.length; i < count; i++) {
    console.log(parcourirTableau[i]);
}

/* Exemple 6 - Objets litéraux */
var objetsLiteraux = { // Création d'un objet
    valeur1:    'ItemOL 1',
    valeur2:    'ItemOL 2',
    valeur3:    'ItemOL 3',
    valeur4:    'ItemOL 4',
    valeur5:    'ItemOL 5'
};

console.log(objetsLiteraux);

// accéder aux items de l'objet
console.log(objetsLiteraux.valeur4);
console.log(objetsLiteraux['valeur1']);

var valeurX = 'valeur2';
console.log(objetsLiteraux[valeurX]);

// Ajouter des items à l'objet
objetsLiteraux['valeur6'] = 'ItemOL 6';
objetsLiteraux.valeur7  = 'ItemOL 7';

console.log(objetsLiteraux);

// Parcourir l'objet
for (var parcourirID in objetsLiteraux) {
    console.log(objetsLiteraux[parcourirID]);
}

// Test fonction simple
function obtenirCoordonnees() {
    return { x: 17,
             y: 18
           };
}

var coordonnees = obtenirCoordonnees();

console.log(coordonnees.x); // Affiche 17
console.log(coordonnees.y); // Affiche 18