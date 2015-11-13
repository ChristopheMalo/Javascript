/* 
 * Tester les conditions
 */
/* Variables pour test opérateurs de comparaison */
var number01 = 1, number02 = 1, number03 = 3, number04 = 4, myText = '4', resultNumber;

/* Variables pour test opérateurs logiques */
var condition01, condition02, resultLogique;

resultNumber = number01 === number02;
alert('Résultat de la condition 1 : ' + resultNumber); // True

resultNumber = number04 === myText;
alert('Résultat de la condition 2 : ' + resultNumber); // True

resultNumber = number04 === myText;
alert('Résultat de la condition 3 : ' + resultNumber); // False

resultNumber = number04 !== myText;
alert('Résultat de la condition 4 : ' + resultNumber); // True

resultNumber = number03 > myText;
alert('Résultat de la condition 5 : ' + resultNumber); // False

resultNumber = number03 < number04;
alert('Résultat de la condition 6 : ' + resultNumber); // True

resultNumber = number01 > number04;
alert('Résultat de la condition 7 : ' + resultNumber); // False


condition01 = number02 > number03; // False
condition02 = number03 < number04; // True

resultLogique = condition01 && condition02;
alert('Résultat de la condition logique 1 : ' + resultLogique); // False

resultLogique = condition01 || condition02;
alert('Résultat de la condition logique 2 : ' + resultLogique); // True

/* if else */
if (condition01 && condition02) {
    
    alert('Les conditions 01 et 02 sont vérifiées.');

} else {
    
    alert('Les conditions 01 et 02 ne sont pas vérifiées.');
    
}


/* switch case */
var nbreChoice = parseInt(prompt('Saisissez un chiffre entre 1 et 4 : '));

switch (nbreChoice) {
    case 1:
        alert('Tu as saisi 1.');
        break;
        
    case 2:
        alert('Tu as saisi 2.');
        break;
        
    case 3:
        alert('Tu as saisi 3.');
        break;
        
    case 4:
        alert('Tu as saisi 4.');
        break;
        
    default:
        alert("J'ai dit entre 1 et 4 !!!");
}

/* ternaire */
var introMessage = 'La condition resultLogique est ',
    finalMessageTernaire = resultLogique ? true : false;
    
alert(introMessage + finalMessageTernaire);