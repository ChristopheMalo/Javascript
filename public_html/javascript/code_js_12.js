/* 
 * Code Javascript - Cours - Chapitre 12 - Les évènements
 * 
 * 
 */
/*
 * DOM-0
 * 
 */
var element = document.getElementById('clicButton');

element.onclick = function() {
    console.log('Tu as cliqué clicButton');
};


/*
 * DOM-2
 * 
 */
var element2 = document.getElementById('clicButton2');

// Création de l'évènement
element2.addEventListener('click', function() {
    console.log('Tu as cliqué - DOM-2');
}, false);

// Supression de l'évènement
//element2.removeEventListener('click', function() {
//    console.log('Tu as cliqué - DOM-2');
//}, false);


// DOM-2 - Plusieurs évènements
var element3 = document.getElementById('clicButton3');

element3.addEventListener('click', function() {
    console.log('Premier évènement !!!');
}, false);

element3.addEventListener('click', function() {
    ;console.log('Deuxième évènement !!!');
}, false);


/* 
 * Capture - Bouillonnement
 * 
 */
var capture1        = document.getElementById('capture1');
var capture2        = document.getElementById('capture2');
var bouillonnement1 = document.getElementById('bouillonnement1');
var bouillonnement2 = document.getElementById('bouillonnement2');

capture1.addEventListener('click', function() {
    console.log('Déclenchement évènement div - capture 1');
}, true);

capture2.addEventListener('click', function() {
    console.log('Déclenchement évènement span - capture 2');
}, true);

bouillonnement1.addEventListener('click', function() {
    console.log('Déclenchement évènement div - bouillonnement 1');
}, false);

bouillonnement2.addEventListener('click', function() {
    console.log('Déclenchement évènement div - bouillonnement 2');
}, false);


/* 
 * Objet Event
 * 
 */
// Récupérer l'élément de l'évènement
var event1 = document.getElementById('event1');
var event2 = document.getElementById('event2');

// DOM-0
event1.onclick = function(e) {
    console.log('DOM-0 : ' + e.type);
};

// DOM-2
event2.addEventListener('click', function(e) {
    console.log('DOM-2 : ' + e.type);
}, false);


// Récupérer l'élément à l'origine de l'évènement
var parent      = document.getElementById('parent'),
    resultat    = document.getElementById('resultat');

// target ou currentTarget
parent.addEventListener('mouseover', function(e) {
    resultat.innerHTML = 'L\'élément déclencheur de l\'évènement \'mouseover\' possède l\'ID ' + e.target.id;
}, false);


// Récupérer la position du curseur
var positionCurseur = document.getElementById('position');

document.addEventListener('mousemove', function(e) {
    positionCurseur.innerHTML = 'Position X : ' + e.clientX + 'px<br>Position Y : ' + e.clientY + 'px';
}, false);


// Récupérer l'élément en relation avec un évènement de souris
var child1B     = document.getElementById('child1B'),
    child2B     = document.getElementById('child2B'),
    resultat2   = document.getElementById('resultat2');
    
child1B.addEventListener('mouseover', function(e) {
    resultat2.innerHTML = 'L\'élément quitté juste avant que le curseur n\'entre sur l\'enfant 1 est : ' + e.relatedTarget.id;
}, false);

child2B.addEventListener('mouseout', function(e) {
    resultat2.innerHTML = 'L\'élément survolé juste après que le curseur ait quitté l\'enfant 2 est : ' + e.relatedTarget.id;
}, false);


// Récupérer les touches frappées par l'utilisateur
var field   = document.getElementById('field');
var down    = document.getElementById('down');
var press   = document.getElementById('press');
var up      = document.getElementById('up');

document.addEventListener('keydown', function(e) {
    down.innerHTML = e.keyCode;
}, false);

document.addEventListener('keypress', function(e) {
    press.innerHTML = e.keyCode;
}, false);

document.addEventListener('up', function(e) {
    up.innerHTML = e.keyCode;
}, false);

// Retourne le mot Test
console.log(String.fromCharCode(84, 101, 115, 116));


// BLoquer une action par défaut
var link2 = document.getElementById('link2');

link2.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('Tu as cliqué et l\'action est bloqué');
}, false);


// Problèmes d'héritage
var divHeritage = document.getElementById('div-heritage');
var resultat3   = document.getElementById('resultat3');

// Test 1
//divHeritage.addEventListener('mouseover', function() {
//    resultat3.innerHTML += 'Le curseur vient d\'entrer.<br>';
//}, false);
//
//divHeritage.addEventListener('mouseout', function() {
//    resultat3.innerHTML += 'Le curseur vient de sortir.<br>';
//}, false);

// Test 2
divHeritage.addEventListener('mouseover', function(e) {
    var relatedTarget = e.relatedTarget;
    
    while (relatedTarget !== divHeritage && relatedTarget.nodeName !=='BODY' && relatedTarget !== document) {
        relatedTarget = relatedTarget.parentNode;
    }
    
    if (relatedTarget !== divHeritage) {
        resultat3.innerHTML += 'Le curseur vient d\'entrer.<br>';
    }
}, false);


divHeritage.addEventListener('mouseout', function(e) {
    var relatedTarget = e.relatedTarget;
    
    while (relatedTarget !== divHeritage && relatedTarget.nodeName !=='BODY' && relatedTarget !== document) {
        relatedTarget = relatedTarget.parentNode;
    }
    
    if (relatedTarget !== divHeritage) {
        resultat3.innerHTML += 'Le curseur vient de sortir.<br>';
    }
}, false);