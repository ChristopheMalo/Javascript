/* 
 * Développer des fonctions javascript personnalisées
 * Tester des fonctions javascript natives
 */
/* Exemple 1 */
function showMessage() {
    alert('Exemple 1 - Une première fonction personnalisée...');
}

showMessage();


/* Exemple 2 */
function multiplicationBy2() {
    var resultat = parseInt(prompt('Exemple 2 - Saisis un nombre à multiplier par 2 : '));
    alert(resultat * 2);
}

multiplicationBy2();

alert('Exemple 2 - Encore une opération à venir');

multiplicationBy2();


/* Exemple 3 */
var message = 'Variable globale - Exemple 3';

function showMessage2() {
    var message = 'Variable locale - Exemple 3';
    alert(message);
}

showMessage2();

alert(message);


/* Exemple 4 */
function calculMultiplication(number1, number2) {
    var number1, number2;
    alert('Exemple 4 - Resultat de la multiplication : ' + number1 * number2);
}

calculMultiplication(2,3);
calculMultiplication(3,3);


/* Exemple 5 */
function personalFunction(personalArgument) {
    alert('Exemple 5 - Argument personnel : ' + personalArgument);
}

personalFunction('Exemple 5 - Mon argument personnel');


/* Exemple 6 */
function personalFunction2(personalArgument) {
    alert('Exemple 6 - Argument personnel : ' + personalArgument);
}

personalFunction2(prompt('Exemple 6 - Saisis ton propre argument de fonction :'));


/* Exemple 7 */
function personalFunction3(arg1, arg2) {
    alert('Exemple 7 - Argument 1 : ' + arg1);
    alert('Exemple 7 - Argument 2 : ' + arg2);
}

personalFunction3(
        prompt('Exemple 7 - Saisis ton premier argument :'),
        prompt('Exemple 7 - Saisis ton 2ème argument :')
                );


/* Exemple 8 - return */
function testRetour() {
    return 'Exemple 8 - Test du return';
}

alert(testRetour());