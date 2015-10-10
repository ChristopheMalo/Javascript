/* 
 * Tester les boucles
 */

/*
 * Boucle While - Tant que
 */
/* Exemple 1 */
/* Déclarer les variables */
var number01 = 1;

while (number01 < 5) {
    number01++;
}

alert(number01); // Affiche 5


/* Exemple 2 */
var firstNames = '', firstName;

while (true) {
    firstName = prompt('Test 1 - Saisis un prénom : ');
    
    if (firstName) { // Si un prénom est saisi
        firstNames += firstName + '\n'; // Alors ajoute prénom à la variable firstNames + un retour à la ligne
    } else {
        break; // Quitte la boucle si aucune saisi ou utilisation du bouton annuler
    }
}

alert(firstNames); // Affiche la liste des prénoms


/* Exemple 3 - Plus propre avec une boucle for */
var index = 0; // ou var index = 1
		
while (index < 10) { // Ici, si var index = 1 alors condition -> index <= 10
    alert('Passage dans la boucle numéro ' + (++index)); // incrémentation avant pemret de démarrer affichage avec 1 et non 0.
}


/* Exemple 4 */
var texteSaisi = '';

while (!texteSaisi) {
    texteSaisi = prompt('Saisis obligatoirement quelque chose de correct');
}

alert(texteSaisi);


/*
 * For - incrémentation
 */
/* Exemple 1 */ 
for (var i = 0, firstNames = '', firstName; true; i++) {
    firstName = prompt('Test 2 - Saisis un prénom :');
    
    if (firstName) {
        firstNames += firstName + '\n';
    } else {
        break;
    }
}

alert('Tu as saisi ' + i + ' prénoms :\n' + firstNames);