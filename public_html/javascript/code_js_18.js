/* 
 * Code Javascript - Cours - Chapitre 18 - Les expressions régulières Partie 2
 * 
 * 
 */
// Construire une regex pour vérifier si chaine de caractère est un email valide
// Un email est déjà renseigné pour le test
var email = prompt('Saisis ton email : ', 'test_email@test.com');

// Déclaration de la regex par le type primitif
var regex01 = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/;

// ou pas l'objet RegExp
// var regex01 = new RegExp(...);
// Passer par l'objet RegExp permet d'intégrer des variables dans la regex
// Le type primitif ne le permet pas

if (regex01.test(email)) {
    console.log('Adresse email valide !');
} else {
    console.log('Adresse email non valide');
}


// Méthodes de RegExp : test() et exec()
var phrase01 = "Il es un gentil ton tonton.";
var trouverMot = /\bton\b/.exec(phrase01);

if (trouverMot) {
    console.log(trouverMot);
} else {
    console.log('Le mot n\'est pas trouvé.');
}


// Propriété au total 9 : $1 à $9
var anniversaire = 'Je suis né en janvier';
/^Je suis né en (\S+)$/.exec(anniversaire);
console.log(RegExp.$1); // Retourne janvier


// Décomposer une adresse email - Utiliser les ( ) - Parenthèses capturantes
var email02 = prompt('Saisis ton email : ', 'test_email@test.com');

if (/^([a-z0-9._-]+)@([a-z0-9._-]+)\.([a-z]{2,6})$/.test(email02)) {
    console.log('Partie locale : ' + RegExp.$1 + 
                '\nDomaine : '     + RegExp.$2 +
                '\nExtension : '   + RegExp.$3); 
} else {
    console.log('Adresse email invalide');
}


// Les parenthèses non capturantes avec ?
// Exemple : /(?:https|http|ftp|steam):\/\//


// Les recherches non-greedy (non-gourmand) grâce à ?
var html = '<a href="www.adresse-site-test.com">Site test</a>';
/<a href="(.+)">/.exec(html);
console.log(RegExp.$1);

var html2 = '<a href="www.adresse-site-test.com"><strong class="color">Site test</strong></a>';
/<a href="(.+)">/.exec(html2);
console.log(RegExp.$1);

var html3 = '<a href="www.adresse-site-test.com"><strong class="color">Site test</strong></a>';
/<a href="(.+?)">/.exec(html3);
console.log(RegExp.$1);


// Rechercher et remplacer
var phrase02 = 'My name is Bond';
var resultat = phrase02.replace(/bond/i, 'Christophe');
console.log(resultat);

var phrase02 = 'My name is Bond, James Bond 007';
var resultat = phrase02.replace(/bond/i, 'Christophe');
console.log(resultat);

var phrase02 = 'My name is Bond, James Bond 007';
var resultat = phrase02.replace(/bond/ig, 'Christophe');
console.log(resultat);


// Rechercher et capturer
var birthDate = '01/17/1970';
birthDate = birthDate.replace(/^(\d{2})\/(\d{2})\/(\d{4})$/, 'Le $2/$1/$3');
console.log(birthDate);


var argentliquide = 'J\'ai 25 dollars en poche';
console.log(argentliquide.replace(/dollars?/, '$$'));


var text = 'bla bla [b]un peu de texte[/b] bla [b]bla bla en gras[/b] bla bla';
text = text.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>');
console.log(text);


function preview() {
    var value = document.getElementById("text").value;
	
    value = value.replace(/\[b\]([\s\S]*?)\[\/b\]/g, '<strong>$1</strong>'); // Gras
    value = value.replace(/\[i\]([\s\S]*?)\[\/i\]/g, '<em>$1</em>'); // Italique
    value = value.replace(/\[s\]([\s\S]*?)\[\/s\]/g, '<del>$1</del>'); // Barré
    value = value.replace(/\[u\]([\s\S]*?)\[\/u\]/g, '<span style="text-decoration: underline">$1</span>'); // Souligné
	
    document.getElementById("output").innerHTML = value;
}


//// Fonction de conversion - Exemple 1
//// Utiliser la fonction de conversion du TP 1
//var sentence = 'Dans 22 jours, j\'aurai 24 ans';
//
//var result = sentence.replace(/(\d+)/g, function(str, p1) {
//    p1 = parseInt(p1);
//
//    if (!isNaN(p1)) {
//        return num2Letters(p1);
//    }    
//});
//
//alert(result); // Affiche : « Dans vingt-deux jours, j'aurai vingt-quatre ans »


//// Fonction de conversion - Exemple 2
//// Utiliser la fonction de conversion du TP 1
//function convertNumbers(str) {
//    str = parseInt(str);
//
//    if (!isNaN(str)) {
//        return num2Letters(str);
//    }    
//}
//
//var sentence = 'Dans 22 jours, j\'aurai 24 ans';
//
//var result = sentence.replace(/(\d+)/g, convertNumbers);


// Autres recherches
// Couper avec une regex
var famille01 = 'Guillaume,Pauline;Clarisse:Arnaud;Benoît;Maxime';
console.log(famille01);
var resultat01 = famille01.split(/[,:;]/);
console.log(resultat01);


var sentence = 'Si ton tonton';
var result = sentence.search(/\bton\b/);
if (result > -1) { // On vérifie que quelque chose a été trouvé
    console.log('La position est ' + result); // 3
}


var sentence = 'Si ton tonton tond ton tonton, ton tonton tondu sera tondu';
var result = sentence.match(/\btonton\b/g);
console.log('Il y a ' + result.length + ' "tonton" :\n\n' + result);