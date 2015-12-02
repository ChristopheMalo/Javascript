/* 
 * Code Javascript - Cours - Chapitre 25 - Qu'est-ce que l'Ajax ?
 * 
 * 
 */
// Définition Ajax (Asynchronous JavaScript and XML) : ensemble de technologies visant à effectuer des transferts de données
// L'ajax permet de charger des données sans recharger la page
// Les 2 formats plébiscités : XML et JSON
// XML peut être traité avec des méthodes DOM
// JSON : données accessibles en tant qu'objets littéraux
// Exemple de représentation d'un tableau en XML (eXtensible Markup Language)
//<?xml version="1.0" encoding="utf-8"?>
//<table>
//
//  <line>
//    <cel>Ligne 1 - Colonne 1</cel>
//    <cel>Ligne 1 - Colonne 2</cel>
//    <cel>Ligne 1 - Colonne 3</cel>
//  </line>
//
//  <line>
//    <cel>Ligne 2 - Colonne 1</cel>
//    <cel>Ligne 2 - Colonne 2</cel>
//    <cel>Ligne 2 - Colonne 3</cel>
//  </line>
//
//  <line>
//    <cel>Ligne 3 - Colonne 1</cel>
//    <cel>Ligne 3 - Colonne 2</cel>
//    <cel>Ligne 3 - Colonne 3</cel>
//  </line>
//
//</table>

// Exemple JSON (JavaScript Object Notation)
//{
//
//  Membre1: {
//    posts: 6230,
//    inscription: '22/08/2003'
//  },
//
//  Membre2: {
//    posts: 200,
//    inscription: '04/06/2011'
//  }
//
//}

var testObj = {index: 'Mon contenu personnalisé' };
var chaineText;

chaineText = JSON.stringify(testObj);
console.log(typeof chaineText + ' : ' + chaineText ); // retourne string : {"index":"Mon contenu personnalisé"}

testObj = JSON.parse(chaineText);
console.log(typeof testObj + ' : ' + testObj); // retourne object : [object Object]