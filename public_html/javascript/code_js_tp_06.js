/* 
 * Code Javascript TP 06 - Recréer une structure DOM - 03
 * 
 * 
 */
// Création de l'élément conteneur
var conteneurDiv = document.createElement('div');
    conteneurDiv.id = 'conteneurDivId_TP3';
    
    
    
// Création du noeud 'texte' p
var texteP = document.createTextNode('Langages basés sur ECMAScript :');
// Création du paragraph
var p = document.createElement('p');
// Assigner et insérer texte au paragraph
p.appendChild(texteP);



// Création des textes dans des objets -> objets dans un tableau textesDL
var textesDL = [
    { dt: 'JavaScript', 
      dd: 'JavaScript est un langage de programmation de scripts principalement utilisé dans les pages web interactives mais aussi coté serveur.' },
    { dt: 'JScript', 
      dd: 'JScript est le nom générique de plusieurs implémentations d\'ECMAScript 3 créées par Microsoft.' },
    { dt: 'ActionScript',
      dd: 'ActionScript est le langage de programmation utilisé au sein d\'applications clientes (Adobe Flash, Adobe Flex) et serveur (Flash media server, JRun, Macromedia Generator).' },
    { dt: 'EX4', 
      dd: 'ECMAScript for XML (E4X) est une extension XML au langage ECMAScript.' }
];



// Création de la description liste
var dl = document.createElement('dl'),
    dt, texteDT,
    dd, texteDD;
    
// Création des noeuds
for (var i = 0, c = textesDL.length; i < c; i++) {
    dt = document.createElement('dt'); // Création de l'élément dt
    dd = document.createElement('dd'); // Création de l'élément dd
    
    texteDT = document.createTextNode(textesDL[i].dt); // Création des noeuds dt
    texteDD = document.createTextNode(textesDL[i].dd); // Créations des noeuds dd
    
    dt.appendChild(texteDT); // Assigner les textes aux dt
    dd.appendChild(texteDD); // Assigner les textes aux dd
    
    dl.appendChild(dt); // Assigner les dt au dl
    dl.appendChild(dd); // Assigner les dt au dl
}



// Insertion des éléments dans le div
conteneurDiv.appendChild(p);    // le paragraph
conteneurDiv.appendChild(dl);   // la description list
    
    

// Insertion du div et des éléments dans le div class .container
document.getElementsByClassName('container')[0].appendChild(conteneurDiv);