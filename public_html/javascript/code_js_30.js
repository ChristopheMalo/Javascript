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

context04.font = "68px Calibri,Geneva,Arial";
context04.fillStyle = "white";
context04.fillText("js", 84, 115);