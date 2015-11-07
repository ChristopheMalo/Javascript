/* 
 * Code Javascript - Cours - Chapitre 10 - Manipuler le code HTML partie 1
 */
/* Window */
var text = 'Variable globale accessible par window !';

// Utilisation d'une IIFE pour isoler le code
(function () {
    var text = 'variable locale !';
    varNonDeclared = 'Variable non déclarée avec assignation valeur directe'; // Fonctionne mais ne pas utiliser cette méthode d'initialisation
    
    console.log(text);
    
    console.log(window.text);
    
    console.log('Sans window ' + varNonDeclared);
    console.log('Avec window ' + window.varNonDeclared);
})();


/* Document - Sous objet de window */
var div1 = document.getElementById('descriptif');
var div2 = document.getElementById('descriptif-text');
console.log('Div sélectionnée : ' + div1);
console.log('Div sélectionnée : ' + div2);

var allDivs = document.getElementsByTagName('div');

for (var i = 0, c = allDivs.length; i < c; i++) {
    console.log('Element n° ' + (i +1) + ' : ' + allDivs[i]);
}

var bodyName = document.getElementsByTagName('body');
console.log('Type body : ' + bodyName);

var htmlName = document.getElementsByTagName('html');
console.log('Type html : ' + htmlName);

var query = document.querySelector('#main .row li');
console.log('Var query : ' + query.innerHTML);

var queries = document.querySelectorAll('#main .row li');
console.log('Var queries : ' + queries[0].innerHTML + ' - ' + queries[1].innerHTML);

var link1 = document.getElementById('link1');
var href1 = link1.getAttribute('href'); // récupérer l'attribut href
console.log('Attribut href de link1 : ' + href1);

// Modifier l'attribut href
link1.setAttribute('href', 'http://www.christophe-malo.com');

// methode direct de modification
var href1b = link1.href;
console.log('href1b : ' + href1b);
link1.href = 'http://www.christophe-malo.fr';


// Assigner une class dynamiquement
document.getElementById('classDyn').className = 'color1';


// Récupérer toute les classe d'un élément
var allClasses = document.getElementById('link1').className;
var arrayClasses = [];
allClasses = allClasses.split(' ');

for (var i = 0, countClasses = allClasses.length; i < countClasses; i++) {
    arrayClasses.push(allClasses[i]);
}
console.log('Tableau de classes : ' + arrayClasses);


// classList - Fontionne à partir de IE10
var recupH1 = document.querySelector('div div h1');
console.log('Var recupH1 : ' + recupH1.innerHTML);

// Ajoute une nouvelle classe
recupH1.classList.add('new-class');
recupH1.classList.add('new-class2');

// Retire une classe
recupH1.classList.remove('new-class');

// Retire une classe si présente ou ajoute la classe si absente
recupH1.classList.toggle('toggled-classe');

// Indiquer la présence d'une classe
if (recupH1.classList.contains('new-class')) {
    console.log('La classe new-class est présente');
} else {
    console.log('La classe new-class n\'est pas présente');
}

recupH1.classList.add('new-class4');

// Parcourir et afficher les classes
var resultat = '';

for (var i = 0; i < recupH1.classList.length; i++) {
    resultat += ' . ' + recupH1.classList[i] + '\n';
}

console.log('Resultat parcourir classes : \n' + resultat);


// Récupérer contenu texte d'un élément
var recupText = document.getElementById('liLink1');
console.log('Récuperer texte avec innerHTML : ' + recupText.innerHTML);


// Ajouter ou éditer du HTML
// Si remplacer complètement le texte alors il faut utiliser =
// Pour un ajout il faut utiliser +=
document.getElementById('addContenu').innerHTML += ' et du texte en plus grâce à innerHTML.';


// Récupérer uniquemen texte et non tout le contenu d'un élément
// innerText pour IE - donc undefined pour Firefox par exemple
var recupText2 = document.getElementById('liLink1');
console.log('Récupérer que le texte, sans les balises avec innerText: ' + recupText2.innerText);

// textContent - Le standard de innerText
console.log('Récupérer que le texte, sans les balises avec textContent (Standard) : ' + recupText2.textContent);


// Tester le navigateur
var recupText3 = document.getElementById('liLink1');
var texte = '';

if (recupText3.textContent) {
    texte = recupText3.textContent;
} else if (recupText3.innerText) {
    texte = recupText3.innerText;
} else {
    texte = '';
}

// OU en raccourci
// texte = recupText3.textContent || recupText3.innerText || '';

console.log('Détecter le navivateur et afficher : ' + texte);


/*
 * Exercices fin de cours
 */
// Exercice 1 : Accéder à href sans id sur le a mais un id sur le li
// Methode 1
var lilink2 = document.querySelector('#liLink2 a');
console.log('lilink2 : ' + lilink2);

if (lilink2) {
    lilink2.href = 'http://www.christophe-malo.com';
}

// Méthode 2
var lilink3 = document.getElementById('liLink3');
console.log('lilink3 : ' + lilink3);
var newlink3 = lilink3.getElementsByTagName('a')[0];
console.log('newLink3 : ' + newlink3);
newlink3.href = 'http://www.christophe-malo.com';

// Méthode 3 - avec gestion de erreurs
var lilink4 = document.getElementById('liLink4');

if (lilink4 ) {
    var newlink4 = lilink4.getElementsByTagName('a')[0];
    if (newlink4) {
        newlink4.href = 'http://www.christophe-malo.com';
    }
}


// Exercice 2 : Modifier attribut de manière générique
var lilink5 = document.getElementById('liLink5');
console.log('liLink 5 : ' + lilink5);

if (lilink5) {
    lilink5.setAttribute('nom-attribut', 'valeur-attribut');
}


// Exerice 3 : Utilisation de innerHTML
var recupClassDyn = document.getElementById('classDyn').innerHTML;
console.log('recupClassDyn : ' + recupClassDyn);
document.getElementById('classDyn').innerHTML = '<strong>' + recupClassDyn + '</strong>';