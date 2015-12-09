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
context04.fillStyle = 'rgb(23, 145, 167)';
context04.fill();

context04.font = '68px Calibri,Geneva,Arial'; // Texte
context04.fillStyle = 'white';
context04.fillText('js', 84, 115);


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


// Les lignes et dégradés
// Lignes
var canvas09 = document.getElementById('canvas09');
var context09 = canvas09.getContext('2d');

context09.lineWidth = '10';

context09.beginPath();
context09.lineCap = 'butt';
context09.moveTo(35, 20);
context09.lineTo(35, 130);
context09.strokeStyle = 'rgb(23, 145, 167)';
context09.stroke();

context09.beginPath();
context09.lineCap = 'round';
context09.moveTo(75, 20);
context09.lineTo(75, 130);
context09.strokeStyle = 'rgb(0, 0, 0)';
context09.stroke();

context09.beginPath();
context09.lineCap = 'square';
context09.moveTo(115, 20);
context09.lineTo(115, 130);
context09.strokeStyle = 'rgb(23, 145, 167)';
context09.stroke();


// Lignes brisées
window.onload = function() {
    var canvas10  = document.querySelector('#canvas10');
    var context10 = canvas10.getContext('2d');
    var y, top = 20, left = 15;      

    context10.lineWidth = 10;
    context09.strokeStyle = 'rgb(0, 0, 0)';

    y = top;
    context10.beginPath();
    context10.lineJoin = 'round';
    context10.moveTo(left + 0, y + 0);
    context10.lineTo(left + 30, y + 30);
    context10.lineTo(left + 60, y + 0);
    context10.lineTo(left + 90, y + 30);
    context10.lineTo(left + 120, y + 0);
    context10.stroke();

    y = top + 40;
    context10.beginPath();
    context10.lineJoin = 'bevel';
    context10.moveTo(left + 0, y + 0);
    context10.lineTo(left + 30, y + 30);
    context10.lineTo(left + 60, y + 0);
    context10.lineTo(left + 90, y + 30);
    context10.lineTo(left + 120, y + 0);
    context10.stroke();        

    y = top + 80;
    context10.beginPath();
    context10.lineJoin = 'miter';
    context10.moveTo(left + 0, y + 0);
    context10.lineTo(left + 30, y + 30);
    context10.lineTo(left + 60, y + 0);
    context10.lineTo(left + 90, y + 30);
    context10.lineTo(left + 120, y + 0);
    context10.stroke();
};


// dégradés linéaires
var canvas11  = document.getElementById('canvas11');
var context11 = canvas11.getContext('2d');

var linear = context11.createLinearGradient(0, 0, 0, 150);
linear.addColorStop(0, 'orange');
linear.addColorStop(0.5, '#ccc');
linear.addColorStop(0.5, 'red');
linear.addColorStop(1, '#000');

context11.fillStyle = linear;
context11.fillRect(10, 10, 130, 130);


// Dégradés radiaux
var canvas12  = document.getElementById('canvas12');
var context12 = canvas12.getContext('2d');

var radial1 = context12.createRadialGradient(0, 0, 10, 100, 20, 150); // fond
radial1.addColorStop(0, '#ddf5f9');
radial1.addColorStop(1, '#000');
context12.fillStyle = radial1;
context12.fillRect(10, 10, 130, 130);

var radial2 = context12.createRadialGradient(75, 75, 10, 82, 70, 30); // bulle 1
radial2.addColorStop(0, '#ffc55c');
radial2.addColorStop(0.9, '#ffa500');
radial2.addColorStop(1, 'rgba(245,160,6,0)');
context12.fillStyle = radial2;
context12.fillRect(10, 10, 130, 130);

var radial3 = context12.createRadialGradient(30, 30, 80, 50, 60, 40); // bulle turquoise
radial3.addColorStop(0, '#86cad2');
radial3.addColorStop(0.9, '#61aeb6');
radial3.addColorStop(1, 'rgba(159,209,216,0)');
context12.fillStyle = radial3;
context12.fillRect(10, 10, 130, 130);


// Opérations
// Translations
var canvas13  = document.getElementById('canvas13');
var context13 = canvas13.getContext('2d');

context13.save();
context13.translate(80, 80); // Déplacer le repère d'axe

context13.fillStyle = '#aaa';
context13.fillRect(0, 0, 60, 60);

context13.restore(); // Replacer le repère d'axe

context13.fillStyle = 'red';
context13.fillRect(0, 0, 60, 60);


// Rotations
var canvas14  = document.getElementById('canvas14');
var context14 = canvas14.getContext('2d');
context14.translate(75,75); // Possibilité de combiner translation et rotation

context14.fillStyle = "teal";
context14.rotate((Math.PI / 180) * 45); // Méthode rotate() en radians     
context14.fillRect(0, 0, 50, 50);

context14.fillStyle = "orange";
context14.rotate(Math.PI / 2);        
context14.fillRect(0, 0, 50, 50);          

context14.fillStyle = "teal";
context14.rotate(Math.PI / 2);        
context14.fillRect(0, 0, 50, 50);      

context14.fillStyle = "orange";
context14.rotate(Math.PI / 2);        
context14.fillRect(0, 0, 50, 50);


// Animations
window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||          // La forme standardisée
           window.webkitRequestAnimationFrame ||    // Pour Chrome et Safari
           window.mozRequestAnimationFrame ||       // Pour Firefox
           window.oRequestAnimationFrame ||         // Pour Opera
           window.msRequestAnimationFrame ||        // Pour Internet Explorer
           function (callback) {
                window.setTimeout(callback, 1000 / 60);
           };
    })();

window.addEventListener('load', function () {
    var canvas15  = document.querySelector('#canvas15');
    var context15 = canvas15.getContext('2d');

    function draw(angle) {
        context15.save();
        context15.clearRect(0, 0, 150, 150);
        context15.translate(75, 75);

        context15.fillStyle = "teal";
        context15.rotate((Math.PI / 180) * (45 + angle));
        context15.fillRect(0, 0, 50, 50);

        context15.fillStyle = "orange";
        context15.rotate(Math.PI / 2);
        context15.fillRect(0, 0, 50, 50);

        context15.fillStyle = "teal";
        context15.rotate(Math.PI / 2);
        context15.fillRect(0, 0, 50, 50);

        context15.fillStyle = "orange";
        context15.rotate(Math.PI / 2);
        context15.fillRect(0, 0, 50, 50);

        context15.restore();

        angle = angle + 2;

        if (angle >= 360)
            angle = 0;

        window.requestAnimFrame(function () {
            draw(angle);
        });
    }

    draw(0);
}, false);