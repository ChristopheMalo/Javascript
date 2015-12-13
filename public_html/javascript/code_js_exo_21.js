/* 
 * Code Javascript exercice 21 - Fonction de création d'élément
 * 
 */
// La fonction
function createSimpleNode(name, options, text) {
    var node = document.createElement(name); // Création de l'élément
	
    for (var o in options) { // Boucle pour les attributs
        node.setAttribute(o, options[o]);
    }
	
    if (text) { // Si texte -> insertion
        node.innerHTML = text;
    }
	
    return node; // Afficher l'élément
}



// Création d'éléments en utilisant la fonction
// Une image
var image = createSimpleNode('img', {
                              src: '../images/apple-1051018.jpg',
                              alt: 'Une pomme'
                           });

// Un lien
var link  = createSimpleNode('a', {
                             'class': 'testClass',
                              href: 'www.christophe-malo.com'
                          }, 'Lien vers le site de Christophe Malo'
                            );
                    
// Un saut de ligne
var br = createSimpleNode('br');

// Insérer éléments dans le div container
var baseContainer = document.getElementById('baseContainer');
baseContainer.appendChild(image);  // l'image
baseContainer.appendChild(br); // Un saut de ligne
baseContainer.appendChild(link);   // Le lien