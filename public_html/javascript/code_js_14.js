/* 
 * Code Javascript - Cours - Chapitre 14 - MANIPULER LE CSS
 * 
 * 
 */
// Editer les styles
var rappel = document.getElementById('rappel');
rappel.style.border = 'solid 1px #000';
rappel.style.backgroundColor = '#ccc';
rappel.style.margin = '20px 0';


console.log('Selon le Javascript, la couleur du texte du div est (n\'affiche rien) : ' + rappel.style.color);

var stylePrioritaire = document.getElementById('stylePrioritaire');
console.log('Selon le Javascript, la couleur du texte du p prioritaire est : ' + stylePrioritaire.style.color);

var color = getComputedStyle(rappel).color;
console.log('Retourne la couleur avec getComputed : ' + color);


// Les propriétés de type offset
console.log('Hauteur du div ' + rappel.id + ' : ' + rappel.offsetHeight + 'px');
console.log('Largeur du div ' + rappel.id + ' : ' + rappel.offsetWidth + 'px');
console.log('Position du div de ' + rappel.id + ' : ' + rappel.offsetLeft + 'px (par rapport au bord gauche de son parent)');
console.log('offsetParent de ' + rappel.id + ' : ' + rappel.offsetParent);


// Parent / Child / offset
var parent  = document.getElementById('parent'),
    child   = document.getElementById('child');
    
console.log('Sans la fonction de calcul, la position de l\'élément enfant est : \n' +
            'offsetTop : '  + child.offsetTop  + 'px\n' +
            'offsetLeft : ' + child.offsetLeft + 'px');
    
// Fonction pour calculer le positionnement
function calculPosition(elementHTML) {
    var positionTop = 0, positionLeft = 0;
    
    do {
        positionTop  += elementHTML.offsetTop;
        positionLeft += elementHTML.offsetLeft;
    } while (elementHTML = elementHTML.offsetParent);
    
    return {
      positionTop: positionTop,
      positionLeft: positionLeft
    };
}

console.log('Avec la fonction de calcul, la position de l\'élément enfant est : \n' +
            'offsetTop : '  + calculPosition(child).positionTop  + 'px\n' +
            'offsetLeft : ' + calculPosition(child).positionLeft + 'px');
    
    
// Test Ofsset Width
// Avec boostrap offsetWidth ne prend que le width du div
var testOffset = document.getElementById('testOffset');
console.log('offsetWidth de ' + testOffset.id + ' : ' + testOffset.offsetWidth);