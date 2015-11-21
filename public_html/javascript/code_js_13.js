/* 
 * Code Javascript - Cours - Chapitre 13 - Les formulaires
 * 
 * 
 */
// Les propriétés
// Value
var texte = document.getElementById('texte');

texte.addEventListener('focus', function(e) {
    e.target.value = 'Tu as le focus !';
}, false);

texte.addEventListener('blur', function(e) {
    e.target.value = 'Tu n\'as pas le focus !';
}, false);


// Les booléens - disabled
var texte2 = document.getElementById('texte2');

texte2.disabled = true;


// Les boléens - checked et readonly
function checkCase1() {
    var inputs          = document.getElementsByTagName('input');
    var inputslength    = inputs.length;
    
    for (var i = 0; i < inputslength; i++) {
        if (inputs[i].type === 'radio' && inputs[i].checked) {
            console.log('La case cochée est la n° ' + inputs[i].value);
        }
    }
}

function checkCase2() {
    var inputs          = document.querySelectorAll('input[type=radio]:checked');
    var inputsLength    = inputs.length;
    
    for (var i = 0; i < inputsLength; i++) {
        console.log('La case à cocher est la n° ' + inputs[i].value);
    }
};


// Liste déroulante
var country = document.getElementById('country');

country.addEventListener('change', function() {
    console.log('Tu as choisi : ' + country.options[country.selectedIndex].innerHTML);
}, true);


// Méthodes et évènements
// Form
var testForm = document.getElementById('testForm');

testForm.addEventListener('submit', function(e) {
    console.log('Ton formulaire est bien envoyé !\n\nMais il a été bloqué pour conserver la page en cours.');
    e.preventDefault();
}, true);

testForm.addEventListener('reset', function(e) {
    console.log('Tu as réinitialisé le formulaire.');
}, false);


// Gestion du focus et de la sélection
// LE code est dans le fichier HTML - directement dans les tags button    