/* 
 * Code Javascript - Cours - Chapitre 30 - L'élément Canvas
 * 
 * 
 */
// 1ères manipulations
// var canvas01 = document.getElementById('canvas01');
// Ou
var canvas01  = document.querySelector('#canvas01');
var context01 = canvas01.getContext('2d');

context01.fillStyle = 'red';
context01.fillRect(10, 10, 50, 80); // Tracer un rectangle de 50 x 80 pixels

context01.fillStyle = '#ccc';
context01.fillRect(50, 50, 50, 50); // Un carré gris centré

context01.lineWidth = '3';
context01.strokeStyle = '#aaa';
context01.strokeRect(80, 35, 40, 90); // Un rectangle avec un simple contour

context01.fillStyle = 'rgba(23, 145, 167, 0.5)';
context01.fillRect(50, 25, 80, 40); // Rectangle avec transparence

context01.clearRect(45, 40, 30, 10); // Efface une partie du canvas

// Formes géométriques
var canvas02  = document.getElementById('canvas02');
var context02 = canvas02.getContext('2d');

context02.strokeStyle = 'rgb(23, 145, 167)';
context02.beginPath();
context02.moveTo(20, 20);  // 1er point
context02.lineTo(130, 20); // 2e point
context02.lineTo(130, 50); // 3e
context02.lineTo(75, 130); // 4e
context02.lineTo(20, 50);  // 5e
context02.closePath();     // On relie le 5e au 1er // Inutile si utilisation de fill()
context02.stroke();

// Arcs
var canvas03  = document.getElementById('canvas03');
var context03 = canvas03.getContext('2d');

context03.fillStyle = 'rgb(23, 145, 167)';
context03.lineWidth = '2';
context03.strokeStyle = 'rgb(23, 145, 167)';
context03.beginPath(); // Le cercle extérieur
context03.arc(75, 75, 50, 0, Math.PI * 2); // Ici le calcul est simplifié
context03.stroke();

context03.beginPath(); // La bouche, un arc de cercle
context03.arc(75, 75, 40, 0, Math.PI); // Ici aussi
context03.fill();

context03.beginPath(); // L'œil gauche
context03.arc(55, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context03.stroke();

context03.beginPath(); // L'œil droit
context03.arc(95, 70, 20, (Math.PI / 180) * 220, (Math.PI / 180) * 320);
context03.stroke();

// moveTo() -> effectuer des 'levées de crayon'

// Courbes de béziers
// quadraticCurveTo() - bezierCurveTo()
// Le logo Javascript
var canvas04  = document.getElementById('canvas04');
var context04 = canvas04.getContext('2d');
context04.beginPath();
context04.moveTo(131, 119);
context04.bezierCurveTo(131, 126, 126, 131, 119, 131);
context04.lineTo(30, 131);
context04.bezierCurveTo(23, 131, 18, 126, 18, 119);
context04.lineTo(18, 30);
context04.bezierCurveTo(18, 23, 23, 18, 30, 18);
context04.lineTo(119, 18);
context04.bezierCurveTo(126, 18, 131, 23, 131, 30);
context04.lineTo(131, 119);
context04.closePath();
context04.fillStyle = "rgb(23, 145, 167)";
context04.fill();

context04.font = "68px Calibri,Geneva,Arial"; // Texte
context04.fillStyle = "white";
context04.fillText("js", 84, 115);


// Images et textes
/* Image simple */
var canvas05 = document.getElementById('canvas05');
var context05 = canvas05.getContext('2d');
var image01 = new Image();
image01.src = '../images/apple-1051018.jpg'; // Indiquer la source
// var imageX = document.querySelector('#nom_id_imageX'); // Ou prendre une image dans la page
image01.addEventListener('load', function() { // Affficher l'image une fois chargée
    context05.drawImage(image01, 0, 0); // Position
}, false);


// Image retaillée
var canvas06 = document.getElementById('canvas06');
var context06 = canvas06.getContext('2d');
var image02 = new Image();
image02.src = '../images/2.jpg';
image02.addEventListener('load', function() { // Affficher l'image une fois chargée
    context06.drawImage(image02, 0, 0, 150, 150); // Position - Taille (Facultatif)
}, false);


// Image recadrée
var canvas07 = document.getElementById('canvas07');
var context07 = canvas07.getContext('2d');
var image03 = new Image();
image03.src = '../images/2.jpg';
image03.addEventListener('load', function() { // Affficher l'image une fois chargée
    context07.drawImage(image03, 30, 30, 150, 150, 0, 0, 150, 150);
}, false);


// Image pattern
var canvas08 = document.getElementById('canvas08');
var context08 = canvas08.getContext('2d');
var image04 = new Image();
image04.src = '../images/4_min.jpg';
image04.addEventListener('load', function() { // Affficher l'image une fois chargée
    var pattern = context08.createPattern(image04, 'repeat');
    context08.fillStyle = pattern;
    context08.fillRect(0, 0, 150, 150);
}, false);