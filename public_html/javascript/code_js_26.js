/* 
 * Code Javascript - Cours - Chapitre 26 - XMLHttpRequest
 * 
 * 
 */
// VERSION 1
// Abrégé de l'objet XMLHttpRequest -> XHR
//// ENVOYER DES DONNÉES
//// EXEMPLE 1 - BASIQUE
//// Instancier un objet XHR
//var xhr = new XMLHttpRequest();
//
//// Préparation de la requête
//xhr.open('GET', 'http://www.christophe-malo.com/Openclassrooms/Uploads/ajax.php');
//
//// Envoyer la requete
//xhr.send(null);

//// EXEMPLE 2
//// Avec la méthode GET
//// Encoder les caractères envoyés
//var xhr2 = new XMLHttpRequest();
//
//var valeur1 = encodeURIComponent('ExempleValeur1');
//var valeur2 = encodeURIComponent('ExempleValeur2');
//
//xhr2.open('GET', 'http://www.christophe-malo.com/Openclassrooms/Uploads/ajax.php?param1=' + valeur1 + '&param2=' + valeur2);
//xhr2.send(null);



//// EXEMPLE 3
//// Avec la méthode POST
//var xhr3 = new XMLHttpRequest();
//
//var valeur3 = encodeURIComponent('ExempleValeur3');
//var valeur4 = encodeURIComponent('ExempleValeur4');
//xhr3('POST', 'http://www.christophe-malo.com/Openclassrooms/Uploads/ajax.php');
//xhr3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//xhr3.send('param1=' + valeur3 + '&param2=' + valeur4);




//// RECEVOIR DES DONNÉES - Requete asynchrone
//var xhr4 = new XMLHttpRequest();
//
//xhr4.addEventListener('readystatechange', function() {
//    if (xhr.readyState === 4 && xhr.status === 200) {
//        // Code
//    }
//}, false);




//// Traitement des données avec responseXML ou responseText
//// Exemple données reçues en JSON --> JSON.parse(xhr4.responseText)
//
//// Exemple de données reçus en XML
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

//// Traitement - exemple récupérer les <cel>
//var cels = xhr.responseText.getElementsByTagName('cel');


// Récupérer les en-têtes de réponse
//var xhr5 = new XMLHttpRequest();
//xhr5.open('HEAD', 'http://www.test.com', false);
//xhr5.send(null);
//console.log(xhr5.getResponseHeader('Content-type'));


// Mise en pratique - Load File
function loadFile(file) {
  
    var xhr = new XMLHttpRequest();

    // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement :
    xhr.open('GET', file);

    xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

        if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 0)) { // Si le fichier est chargé sans erreur

            document.getElementById('fileContent').innerHTML = '<span>' + xhr.responseText + '</span>'; // Et on affiche !

        } else if (xhr.readyState === 4 && xhr.status !== 200) { // En cas d'erreur !
    
            console.log('Une erreur est survenue !\n\nCode :' + xhr.status + '\nTexte : ' + xhr.statusText);
        
        }

    }, false);

    xhr.send(null); // La requête est prête, on envoie tout !

}

(function() { // Comme d'habitude, une IIFE pour éviter les variables globales

    var inputs = document.getElementsByTagName('input'),
        inputsLen = inputs.length;
  
    for (var i = 0 ; i < inputsLen ; i++) {
    
        inputs[i].addEventListener('click', function() {
            loadFile(this.value); // À chaque clique, un fichier sera chargé dans la page
        }, false);

    }

})();



// VERSION 2 - XHR2
// Autorisation des requêtes cross-domain
// Page de test : http://www.example.com/dir/page.html

//// Forcer le type de contenu
//var xhr = new XMLHttpRequest();
//xhr.open('GET', 'http://example.com');
//xhr.overrideMimeType('text/xml');

//// évènement progress
//xhr.addEventListener('progress', function(e) {
//
//    element.innerHTML = e.loaded +' / '+ e.total;
//
//}, false);


// Progresse bar     
// Utiliser l'XHR2 implique d'avoir un navigateur très récent
document.querySelector('#loadButton').onclick = function() {

    var progression = document.querySelector('#progression div').style,
        xhr = new XMLHttpRequest();

    progression.width = 0; // Dans le cas de plusieurs essais, vider la progress bar

    xhr.open('GET', 'img.jpg');

    xhr.onprogress = function(e) {

        progression.width = e.loaded * 100 / e.total + '%'; // Un simple calcul de pourcentage et c'est tout bon !

    };

    xhr.onload = function() { // utilisation d'un évènement spécifique à XHR2

        progression.width = '100%';
        alert('Chargement terminé !');

    };

    xhr.send(null);

};


//// Envoir de donnée - POST
//var form = new FormData();
//form.append('champ1', 'valeur1');
//form.append('champ2', 'valeur2');
//var xhr = new XMLHttpRequest();
//
//xhr.open('POST', 'script.php');
//
//var form = new FormData();
//form.append('champ1', 'valeur1');
//form.append('champ2', 'valeur2');
//
//xhr.send(form);

var xhr = new XMLHttpRequest();

  xhr.open('POST', 'script.php');

  var myForm = document.getElementById('myForm'),
      form = new FormData(myForm);

  xhr.send(form);