/* 
 * Code Javascript - Cours - Chapitre 23 - Les polyfills et les wrappers
 * 
 * 
 */
// Introduction aux polyfills

// Exemple de polyfill
// alternative au (ancien) navigateur qui ne supporte pas une méthode ou une proprété
// Permet la prise ne charge d'une méthode si celle ci n'est pas supportée par un navigateur
// Le polyfill permet de contourner ce problème

// Polyfill Array
//if (!Array.isArray) { // Si isArray() n'existe pas, alors on crée notre méthode alternative :
//    Array.isArray = function(element) {
//        return Object.prototype.toString.call(element) === '[object Array]';
//    };
//}
//
//alert(Array.isArray([])); // Affiche : « true »
//alert(Array.isArray({})); // Affiche : « false »
//

//// Polyfill Trim
//if (!String.prototype.trim) {
//  String.prototype.trim = function () {
//    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
//  };
//}


// Introduction aux wrappers
// Le wrapper permet d'encadrer l'utilisation de certains éléments
// Ajouter des méthodes et propriétés complémentaires aux objets natifs
// Surcouche pour contrôler les éléments
// Se présente sous forme d'objet instancié à la place de l'objet natif
// 
// Exemple de wrappper avec le DOM-0 
// Permettre le support de la propriété Complete de l'objet Image
function Img(src) {

    var obj = this; // Nous faisons une petite référence vers notre objet Img. Cela nous facilitera la tâche.
    
    this.originalImg = new Image(); // On instancie l'objet original, le Wrapper servira alors d'intermédiaire.
    
    this.complete = false;
    this.onload = function() {}; // Voici l'événement que les développeurs pourront modifier.
    
    this.originalImg.onload = function() {

        obj.complete = true; // L'image est chargée !
        obj.onload(); // On exécute l'événement éventuellement spécifié par le développeur.

    };

    if (src) {
        this.originalImg.src = src; // Si elle est spécifiée, on défini alors la propriété src.
    }
    
}

Img.prototype.set = function(name, value) {

    var allowed = ['width', 'height', 'src'], // On spécifie les propriétés dont on autorise la modification.
        wrapperProperties = ['complete', 'onload'];
    
    if (allowed.indexOf(name) !== -1) {
        this.originalImg[name] = value; // Si la propriété est autorisée alors on la modifie.
    }

    else if (wrapperProperties.indexOf(name) !== -1) {
        this[name] = value; // Ici, la propriété appartient au wrapper et non pas à l'objet original.
    }

};

Img.prototype.get = function(name) {

    // Si la propriété n'existe pas sur le Wrapper, on essaye alors sur l'objet original :
    return typeof this[name] !== 'undefined' ? this[name] : this.originalImg[name];

};

// Utilisation du wrapper
var myImg = new Img(); // On crée notre objet Img.

alert('complete : ' + myImg.get('complete')); // Vérification de la propriété complete : elle est bien à false.

myImg.set('onload', function() { // Affichage de diverses informations une fois l'image chargée.
    alert(
        'complete : ' + this.get('complete') + '\n' +
        'width : ' + this.get('width') + ' px\n' +
        'height : ' + this.get('height') + ' px'
    );
});

myImg.set('src', 'http://www.christophe-malo.com/OpenClassrooms/Uploads/apple-1051018_1920.jpg'); // On spécifie l'adresse de l'image.