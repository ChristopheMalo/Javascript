/* 
 * Code Javascript - Cours - Chapitre 24 - Les closures
 * 
 * 
 */
// Closure :  fonction ayant pour but de capter des données susceptibles
// de changer au cours du temps, de les enregistrer dans son espace fonctionnel
// et de les fournir en cas de besoin.
// Les variables et leur accès
function testAccess() {

    var varAccess = 1;

    function show() {
        console.log(varAccess);
    }

    setTimeout(show, 100);

}

testAccess(); // Retourne 1


var number = 1;

setTimeout(function() {
    console.log(number); // Retourne 2
}, 200);

number++;


// Sans closure - Erreur undefined
//var divs = document.getElementsByTagName('div'),
//    divsLen = divs.length;
//
//for (var i = 0 ; i < divsLen ; i++) {
//
//    setTimeout(function() {
//        divs[i].style.display = 'block';
//    }, 400 * i); // Le temps augmentera de 200 ms à chaque élément
//
//}

// Avec Closure
//var divs = document.getElementsByTagName('div'),
//    divsLen = divs.length;
//
//for (var i = 0 ; i < divsLen ; i++) {
//
//    (function() {
//
//        var currentI = i;
//
//        setTimeout(function() {
//            divs[currentI].style.display = 'block';
//        }, 400 * i);
//
//    })();
//
//}

// Autre closure
var divs = document.getElementsByTagName('div'),
    divsLen = divs.length;

for (var i = 0 ; i < divsLen ; i++) {

    (function(i) {

        setTimeout(function() {
            divs[i].style.display = 'block';
        }, 100 * i);

    })(i);

}

// Les variables statiques
// Exemple 1
//var myVar = 0;
//
//function display(value) {
//
//    if(typeof value !== 'undefined') {
//        myVar = value;
//    }
//
//    console.log(myVar);
//
//}
//
//display();   // Affiche : 0
//display(42); // Affiche : 42
//display();   // Affiche : 42

// Exemple 2 -- Génére une erreur -- static est réservé et non utilisé
//function display(value) {
//
//    static var myVar = 0;
//
//    if(typeof value !== 'undefined') {
//        myVar = value;
//    }
//
//    console.log(myVar);
//
//}
//
//display();   // Affiche : 0
//display(42); // Affiche : 42
//display();   // Affiche : 42

// Exemple 3 -- avec closure
var display = (function() {

    var myVar = 0; // Déclaration de la variable pseudo-statique

    return function(value) {

        if(typeof value !== 'undefined') {
            myVar = value;
        }

        console.log(myVar);

    };

})();

display();   // Affiche : 0
display(42); // Affiche : 42
display();   // Affiche : 42