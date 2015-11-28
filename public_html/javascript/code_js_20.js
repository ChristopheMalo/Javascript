/* 
 * Code Javascript - Cours - Chapitre 20 - La gestion du temps
 * 
 * 
 */
// Système de datation - Objet Date
var myDate = new Date();
console.log(myDate);

// Les méthodes
console.log(myDate.getFullYear());      // année sur 4 chiffres
console.log(myDate.getMonth());         // mois de 0 à 11 -- ex : nov -> 10
console.log(myDate.getDate());          // jour du mois 1 à 31
console.log(myDate.getDay());           // jour de la semaine de 0 à 6 - Début semaine : Dimanche
console.log(myDate.getHours());         // heure de 0 à 23
console.log(myDate.getMinutes());       // minutes de 0 à 59
console.log(myDate.getSeconds());       // secondes de 0 à 59
console.log(myDate.getMilliseconds());  // millisecondes de 0 à 999
console.log(myDate.getTime());          // timestamp de la date

var timestamp = Date.parse('Sat, 04 May 1991 20:00:00 GMT+02:00'); // Timestamp de la date passée en argument
console.log(timestamp);

//// Calculer le temps d'exécution d'un script
//var firstTimestamp = new Date().getTime(); // On obtient le timestamp avant l'exécution
//
//slow(); // La fonction exemple à tester
//
//var secondTimestamp = new Date().getTime(), // On récupère le timestamp après l'exécution
//    result = secondTimestamp - firstTimestamp; // On fait la soustraction
//
//alert("Le temps d'exécution est de : " + result + " millisecondes.");


// setTimeout() -> Déclenche un code à un temps donné - en millisecondes
// setTimeout(myFunction; 4000)         -> La fontion myFonction est déclenché à 4 secondes
// setTimeout(function() {...}, 4000);  -> fonction anonyme
// setTimeout('myFunction()', 2000);    -> à bannir
// 
// setTimeout(function() {
//        myFunction(param1, param2);
// }, 2000);
// 
// setInterval() -> Déclenche un code à un intervalle régulier - en millisecondes


// Annuler un compte à rebours
/**** FONCTION à réactiver ****/
//(function() {
//    var button = document.getElementById('myButton');
//
//    var timerID = setTimeout(function() { // On crée notre compte à rebours
//        alert("Vous n'êtes pas très réactif vous !");
//    }, 5000);
//
//    button.addEventListener('click', function() {
//        clearTimeout(timerID); // Le compte à rebours est annulé
//        alert("Le compte à rebours a bien été annulé."); // Et on prévient l'utilisateur
//    }, false);
//})();


/**** FONCTION à réactiver ****/
//(function() {
//
//        var button = document.getElementById('myButton2'),
//            timeLeft = 5;
//
//        var timerID = setTimeout(function() { // On crée notre compte à rebours
//            clearInterval(intervalID);
//            button.innerHTML = "Annuler le compte à rebours (0s)";
//            alert("Vous n'êtes pas très réactif vous !");
//        }, 5000);
//
//        var intervalID = setInterval(function() { // On met en place l'intervalle pour afficher la progression du temps
//            button.innerHTML = "Annuler le compte à rebours (" + --timeLeft + "s)";
//        }, 1000);
//
//        button.addEventListener('click', function() {
//            clearTimeout(timerID); // On annule le compte à rebours
//            clearInterval(intervalID); // Et l'intervalle
//            alert("Le compte à rebours a bien été annulé.");
//        }, false);
//
//    })();
    
    
// les animations
// Changer l'opacité immédiatement
var img01 = document.getElementById('img01');
img01.style.opacity = 0.2;


// Changer l'opacité progressivement
// Le style opacity doit être défini dans la partie HTML
var img02 = document.getElementById('img02');

function changeOpacity() {
    var op = img02.style;
    var opFin = op.opacity = parseFloat(op.opacity) - 0.1;
    
    if (opFin > 0.2) {
        setTimeout(changeOpacity, 50); // Appel de la fonction si le changement n'est pas terminé
    }
}

changeOpacity(); // Lancer la fonction