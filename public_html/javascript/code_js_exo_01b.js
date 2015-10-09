/* 
 * Code Javascript exercice 01B - Dis bonjour
 * à ce stade aucun contrôle n'est effectué sur la saisie de l'internaute
 * Utilisation de variable pour l'ensemble des mots
 * Concaténation des mots dans une variable pour affichage du résultat
 */
/* Déclaration des variables */
var sayWelcome = 'Bonjour ', userFirstname, endOfSentence = '.', sayHelloFirstname;

/* Demander le prénom */
userFirstname = prompt('Entre ton prénom :');

/* Concaténer toutes les variables */
sayHelloFirstname = sayWelcome + userFirstname + endOfSentence;

/* Afficher la phrase  */
alert(sayHelloFirstname);