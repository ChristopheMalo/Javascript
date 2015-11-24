/* 
 * Code Javascript - Cours - Chapitre 15 - Les objets
 * 
 * 
 */
// Crétion d'un objet - Le constructeur
function Personne(prenom, age, sexe, parent, travail, amis) {
    this.prenom  = prenom;
    this.age     = age;
    this.sexe    = sexe;
    this.parent  = parent;
    this.travail = travail;
    this.amis    = amis;
    
    // Définition d'une méthode ajouterAmi dans le constructeur
    this.ajouterAmi = function (prenom, age, sexe, parent, travail, amis) {
        this.amis.push(new Personne(prenom, age, sexe, parent, travail, amis));
    };
    
}

// Création d'une variable en instanciant l'objet Personne
var chris = new Personne('Christophe', 45, 'm', '', 'Développeur Web', []);

console.log(chris);
console.log('Amis : ' + chris.amis);

console.log(chris instanceof Personne); // Retourne true

// Modifier les propriétés de la variable
chris.age = 46;
console.log(chris.prenom + ' a maintenant ' + chris.age + ' ans.');


// Création d'un tableau avec des objets - en utilisant l'objet Personne
var maFamille = [
    new Personne('Sébastien', 23, 'm', 'aîné', 'Développeur Web', []),
    new Personne('Laurence', 19, 'f', 'soeur', 'Professeur', []),
    new Personne('Ludovic', 9, 'm', 'frère', 'Etudiant', []),
    new Personne('Pauline', 16, 'f', 'cousine', 'Etudiante', []),
    new Personne('Guillaume', 16, 'm', 'cousin', 'Dessinateur', [])
];

console.log(maFamille[2].prenom + ' est ' + maFamille[2].travail + '.');

console.log(maFamille);

// Ajouter des méthodes
// Ajouter un ami
maFamille[4].ajouterAmi('André', 15, 'm', 'ami', 'étudiant', []);

// Tester le résultat
console.log(maFamille[4]);                  // Retourne Les détails de Guillaume
console.log(maFamille[4].prenom);           // Retourne Guillaume
console.log(maFamille[4].amis[0].prenom);   // Retourne André (ami de Guillaume


// Ajouter une méthode par prototype - exemple
Personne.prototype.addFriend = function(prenom, age, sexe, parent, travail, amis) {
    this.amis.push(new Personne(prenom, age, sexe, parent, travail, amis));
};

maFamille[3].addFriend('Bernard', 15, 'm', 'ami', 'étudiant', []);
console.log(maFamille[3]);


// AJout de méthodes aux objets natifs
var family = {
    self:     'Sébastien',
    sister:   'Laurence',
    brother:  'Pierre',
    cousin_1: 'Pauline',
    cousin_2: 'Guillaume'
};

if (!Object.prototype.debug) {

    // Création de la méthode debug - Juste pour le debug
    // Car le maintien de cet methode ajouter à Object retourne toutes erreurs
    // String, array etc...peuvent recevoir des méthodes personnalisées
    // 
    // Dans le cas de développement d'extensions pour Firefox
    // Attention aux modifications natives qui risquent de ne pas fonctionner avec d'autres extensions
    Object.prototype.debug = function() {
        var text = 'Object {\n';
        
        for (var i in this) {
            if (i !== 'debug') {   
                text += '    [' + i + '] => ' + this[i] + '\n';    
            }
        }
        
        console.log(text + '}');
    };

}

family.debug();


// Namespaces
var monNameSpace = {
    maFonction: function() {
        console.log('Test du namespace');
    }
};

// Exécuter la fonction maFonction
monNameSpace.maFonction();


// Exemple de namespace gérant un webmail - Non fonctionnel en l'état
var thundersebWebMail = {
    // Propriétés
    version: 1.42,
    lang: 'english',

    // Méthode d'initialisation
    init : function() { /* initialisation */ },

    // Gestion des mails - Sous-namespace
    mails: {
        list: function() { /* affiche la liste des mails */ },
        show: function() { /* affiche un mail */ },
        trash: function() { /* supprime un mail */ }
        // et cætera…
    },

    // Gestion des contacts - Sous-namespace
    contacts: {
        list: function() { /* affiche la liste des contacts */ },
        edit: function() { /* édite un contact */ }
        // et cætera…
    }
};


// Test d'un namesapce avec un sous-namespace - fonctionnel
var monNameSpace2 = {
    test: function() {
        console.log('Test depuis un sous-namespace');
    },
    
    sousNameSpace: {
        init: function() {
            monNameSpace2.test();
        }
    }
};

monNameSpace2.sousNameSpace.init(); // Retourne 'Test depuis un sous-namespace'


// Tester l'existence de l'objet monNaemespace2
if (typeof monNameSpace2 === 'undefined') {
    
    var monNameSpace2 = {
        // Code
    };
    
} else {
    console.log('monNameSpace2 existe déjà. Utilise un autre nom.');
}

// Modifier le contexte d'une méthode
console.log(['test']);      // Retourne array ["test"]
//alert(['test']);          // Retourne test
console.log({0: 'test'});   // Retourne Object [ "test" ]
//alert({0: 'test'});       // Retourne [object Object]

var result = Object.prototype.toString(['test']);
// alert(result); // Retourne [object Obect]
console.log(result); // Retourne [object Object]

result = Object.prototype.toString.call(['test']);
console.log(result); // Retourne [object Array]

var monTableau = [];
monTableau.push.apply(monTableau, [1, 2, 3]);
console.log(monTableau);

monTableau = [];

monTableau.push.call(monTableau, 1, 2, 3);
console.log(monTableau);



// Héritage
function Vehicule(plaqueImmat, reservoir) {
    this.demarrerMoteur = false;             // Moteur en action ?
    this.plaqueImmat = plaqueImmat;   // Plaque d'immatriculation du véhicule
    this.reservoir = reservoir;
}

// Ajout d'une methode par prototype
// Permet de démarrer le véhicule
Vehicule.prototype.demarrer = function() {
    this.demarrerMoteur = true;
};

// Ajout d'une méthode par prototype
Vehicule.prototype.arreter = function() {
    this.demarrerMoteur = false;
};

// Création d'objet par héritage
// Création d'une voiture
function Voiture(plaqueImmat, reservoir, coffre) {
    // Appel du contructeur de Vehicule par la methode call()
    // pour affecter de nouvelle propriétés à Voiture
    Vehicule.call(this, plaqueImmat, reservoir);
    
    // Initialisation de l'objet une fois le contructeur appelé
    this.ouvertureCoffre = false;    // Coffre ouvert ?
    this.coffre          = coffre;   // Taille du coffre
}

// Copier Objet prototype de Vehicule au sein du prototype Voiture
// Permet à Voiture de bénéficier des méthodes de Vehicule
Voiture.prototype = Object.create(Vehicule.prototype);

// Ajouter des nouvelles methodes
Voiture.prototype.coffreOuvert = function() {
    this.ouvertureCoffre = true;
};

Voiture.prototype.coffreFermer = function() {
    this.ouvertureCoffre = false;
};

// Instancier une voiture
var voitureUne = new Voiture('AA-777-CHMOD', 50, 2.5);
console.log(voitureUne);


// Création d'objet par héritage
// Création d'un camion
function Camion(plaqueImmat, reservoir, nbreRemorques) {
    Vehicule.call(this, plaqueImmat, reservoir);
    
    this.nbreRemorques = nbreRemorques; // Remorques attachés au camion
}

// Copier Objet prototype de Vehicule au sein du prototype Camion
// Permet à Camion de bénéficier des méthodes de Vehicule
Camion.prototype = Object.create(Vehicule.prototype);

// Ajouter nouvelle méthodes
Camion.prototype.ajouterRemorque = function() {
    this.nbreRemorques++;
};

Camion.prototype.supprimerRemorque = function() {
    this.nbreRemorques--;
};

// Instancier un camion
var camionUn = new Camion('BC-777-HJK', 120, 2);
console.log(camionUn);
camionUn.ajouterRemorque();
console.log('On ajoute une remorque en appelant la methode ajouterRemorque');
console.log(camionUn);
