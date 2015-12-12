/* 
 * Code Javascript exercice 18 - Remplacer un élément par un autre
 * 
 */
// Méthode 1
var toRemplacer01 = document.getElementById('toRemplacer01');

if (toRemplacer01) {
    var figure      = document.createElement('figure');
    var img         = document.createElement('img');
    var figcaption  = document.createElement('figcaption');
    
    img.src = '../images/apple-1051018.jpg';
    img.alt = figcaption.innerHTML = 'Une pomme verte';
    
    figure.appendChild(img);
    figure.appendChild(figcaption);
    
    toRemplacer01.parentNode.replaceChild(figure, toRemplacer01);
}


// Méthode 2 - Plus courte
var toRemplacer02 = document.getElementById('toRemplacer02');
var figure;

if (toRemplacer02) {
    figure = document.createElement('figure');
    figure.innerHTML = '<img src="../images/1_min.jpg" alt="Un paysage">' +
                       '<figcaption>Un paysage</figcaption>';
               
    toRemplacer02.parentNode.replaceChild(figure, toRemplacer02);
}