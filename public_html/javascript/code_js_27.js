/* 
 * Code Javascript - Cours - Chapitre 27 - Upload via une iframe
 * 
 * 
 */
// Manipulation des iframes
// Accéder au contenu
var testFrame = document.getElementById('testFrame').contentDocument;

var frameDivs = testFrame.getElementsByTagName('div').length;
console.log('frameDivs length : ' + frameDivs);


// Charger une iframe en JS
// EN changeant l'url
document.getElementById('testFrame').src = '../files/fileTest02.html';


// Détecter le chargement avec l'évènement load 
function trigger() {
    var testFrame02 = document.getElementById('testFrame').contentDocument;
    console.log(testFrame02.body.textContent);
}


// Récupérer du contenu
function sendForm() {
    var prenom = document.getElementById('prenom').value;

    if (prenom) {
        document.getElementById("testForm").submit(); // Envoyer le formulaire
    }
}

function receiveData(data) {
    console.log('Votre prénom est "' + data + '"');
}


// Upload de fichier
function uploadEnd(error, path) {
    if (error === 'OK') {
        document.getElementById('uploadStatus').innerHTML = '<a href="' + path + '">Upload done !</a><br /><br /><a href="' + path + '"><img src="' + path + '" /></a>';
    } else {
        document.getElementById('uploadStatus').innerHTML = error;
    }
}

document.getElementById('uploadForm').addEventListener('submit', function() {
    document.getElementById('uploadStatus').innerHTML = 'Loading...';
}, true);