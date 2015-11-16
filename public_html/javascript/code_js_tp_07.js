/* 
 * Code Javascript TP 07 - Recréer une structure DOM - 04
 * 
 * 
 */
// Je 'déroule' la création (dans l'ordre) de la page
// Création de l'élément conteneur
var conteneurDiv = document.createElement('div');
    conteneurDiv.id = 'conteneurDivId_TP4';


// Création de l'élément form
var form = document.createElement('form');
    form.enctype = 'multipart/form-data';
    form.method = 'post';
    form.action = 'upload.php';
    
 
// Création de l'élément fieldset
var fieldset = document.createElement('fieldset');
form.appendChild(fieldset); // Inserer du fieldset dans le form


// Création du legend
var legendText = document.createTextNode('Uploader une image'); // Création du noeud texte
var legend = document.createElement('legend'); // Création de l'élément legend
legend.appendChild(legendText); // Assigner et insérer le texte à legend
fieldset.appendChild(legend); // Insérer legend au fieldset



/* Création des input */
var divForInput = document.createElement('div'); // Création du contenur div englobant les input
    divForInput.style = 'text-align: left';

// Label 1
var textForLabelForInputLoad = document.createTextNode('Image à uploader :'); // Création du noeud texte
var labelForInputUpload = document.createElement('label'); // création de l'élément
    labelForInputUpload.for = 'inputUpload';
labelForInputUpload.appendChild(textForLabelForInputLoad); // Insérer le texte dans le label
divForInput.appendChild(labelForInputUpload); // Insérer le div

// Input 1
var input1 = document.createElement('input'); // Création de l'élément
    input1.type     = 'file';
    input1.name     = 'inputUpload';
    input1.id       = 'inputUpload';
divForInput.appendChild(input1); // Insérer l'input dans le div

// br
var br = document.createElement('br'); // Création de l'élément
divForInput.appendChild(br); // Insérer un br dans le div
divForInput.appendChild(br.cloneNode(false)); // Insérer un 2ème br

// input 2
var input2 = document.createElement('input'); // Création de l'élément
    input2.type     = 'submit';
    input2.value    = 'Envoyer';
divForInput.appendChild(input2); // Insérer l'élément


fieldset.appendChild(divForInput); // Insérer le div dans le fieldset




// Insertion du form complet dans le div
conteneurDiv.appendChild(form); // Le form


// Insertion du div et des éléménets dans le div class .container
document.getElementsByClassName('container')[0].appendChild(conteneurDiv);