/* 
 * Code Javascript - Cours - Chapitre 31 - L'API File
 * 
 * 
 */
// 1ères utilisations
document.querySelector('#file01').addEventListener('change', function() {
    // Obtenir le nom du 1er fichier séléctionnée
    console.log(this.files[0].name);
}, false);


// Mise en pratique
// Prévisualisation
// Fonction anonyme
(function () {
    
    // Function afficher les images
    function createThumbnail(file) {

        var reader = new FileReader();

        reader.addEventListener('load', function() {

        var imgElement = document.createElement('img');
            imgElement.style.maxWidth = '150px';
            imgElement.style.maxHeight = '150px';
            imgElement.src = this.result;
            prev.appendChild(imgElement);

        }, false);

        reader.readAsDataURL(file);

    }
    
    // Déclarations des variables
    var allowedTypes = ['png', 'jpg', 'jpeg', 'gif'], // Extensions autorisées
        fileInput = document.querySelector('#file'),
        prev = document.querySelector('#prev');

    fileInput.addEventListener('change', function() {
  
        var files = this.files,
            filesLen = files.length,
            imgType;

        for (var i = 0 ; i < filesLen ; i++) {

            imgType = files[i].name.split('.'); // Analyse et parcours des images sélectionnées
            imgType = imgType[imgType.length - 1].toLowerCase(); // On utilise toLowerCase() pour éviter les extensions en majuscules

            if(allowedTypes.indexOf(imgType) !== -1) {

                createThumbnail(files[i]); // Afficher les images

            }

        }

    }, false);

})();


// ************** Codes exemples *******************************


// Upload via XMLHttpRequest - Pas de test fonctionnel en HTML
// Coté HTML  --> <input id="file" type="file" />
var fileInput = document.querySelector('#file');

fileInput.addEventListener('change', function() {

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'http://exemple.com'); // Rappelons qu'il est obligatoire d'utiliser la méthode POST quand on souhaite utiliser un FormData

    xhr.addEventListener('load', function() {
        alert('Upload terminé !');
    }, false);

    // Upload du fichier
    var form = new FormData();

    form.append('file', fileInput.files[0]);

    xhr.send(form);

}, false);



// Avec une progress bar
// Côté HTML
// <input id="file" type="file" />
// <progress id="progress"></progress>
var fileInput = document.querySelector('#file'),
    progress = document.querySelector('#progress');

fileInput.addEventListener('change', function() {

    var xhr = new XMLHttpRequest();

    xhr.open('POST', 'upload.html');

    xhr.upload.addEventListener('progress', function(e) {
        progress.value = e.loaded;
        progress.max = e.total;
    }, false);

    xhr.addEventListener('load', function() {
        alert('Upload terminé !');
    }, false);

    var form = new FormData();
    form.append('file', fileInput.files[0]);

    xhr.send(form);

}, false);