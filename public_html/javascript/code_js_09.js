/* 
 * Exemples de code pour tester les outils de débug - avec Chrome
 */
/* Exemple 1 */
for (var i = 1; i <= 20; i++) {
    // Affiche valeurs boucle dans la console de debug
    console.log('La valeur de notre boucle est : ' + i);
}


/* Exemple 2 */
// Création d'un objet
var simpleObject = {
    english: 'Hello',
    french: 'Bonjour',
    spanish: 'Hola'
};

// Et on l'affiche.
console.log(simpleObject);

// Tant qu'à faire, on affiche aussi un tableau.
var simpleArray = ['Hello', 'Bonjour', 'Hola'];

console.log(simpleArray);


/* Exemple 3 - Breaking point */
// La fonction « a » affiche la valeur qu'elle reçoit de « b ».
function a(value) {
    console.log(value);
}
    
// La fonction « b » incrémente la valeur reçue par « c » puis la passe en paramètre à « a ».
function b(value) {
    a(value + 1);
}
    
// La fonction « c » incrémente la valeur reçue par la boucle for puis la passe en paramètre à « b ».
function c(value) {
    b(value + 1);
}
    
// Pour chaque itération, cette boucle passe en paramètre la valeur de « i » à la fonction « c ».
for (var i = 0 ; i < 10; i++) {
    c(i);
}


/* Exemple 4 */
// Fonction anonyme - IIFE - donner un nom à une fonction anonyme pour la retrouver dans la pile debug
(function fonctionAnonyme() {
    console.log('Hi!');
})();