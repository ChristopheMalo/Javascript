/* 
 * Code Javascript TP 10 - Robot POO
 * 
 * 
 */
// Création du Robot - Utilisation d'un namespace
var Robot = {
//    // Caractéristiques identiques pour tous les robots
//    pdv : 100,      // Point de vie initial
//    vm  : 3,      // Vitesse maximale
//    pos : [0,0],    // Position d'origine
     
    // Initialisation du nom du rot du robot
    init: function (nom) {
        this.nom    = nom;      // Nom du personnage
        
    },
    
    // 2ème constructeur pour initialiser les caracteristiques du robot
    // Ce constructeur peut-être rassembler dans le init
    initCaracteristiques: function (pdv, vm, coordX, coordY) {
        this.pdv    = pdv;      // Point de vie
        this.vm     = vm;       // Vitesse maximale
        
        this.coordX = coordX;   // Position x
        this.coordY = coordY;   // Position y
        // this.pos    = [coordX,coordY];    // Position d'origine sous forme d'array
        // ou this.pos = [this.x, this.y];
    },
    
    // Fonstion pour récupérer les coordonnées du robot
    arrayCoordonnees: function () {
        return this.pos = [this.coordX, this.coordY];
    },
    
    // Présentation du robot
    sePresenter: function () {
        var optionCase = '';
            
        if (this.vm === 1) {
            optionCase = 'case';
        } else {
            optionCase = 'cases';
        }
        
        var description = 'Bonjour, je suis un robot et je m\'appelle ' + this.nom
                        + '. J\'ai '  + this.pdv + ' points de vie.'
                        + ' Ma vitesse de déplacement est de ' + this.vm + ' ' + optionCase + ' par seconde.'
                        + ' Ma position actuelle est à la case de coordonnées (' + this.arrayCoordonnees() + ').'; // ou à la place de this.pos --> this.arrayCoordonnees()
        return  description;
    }
    
};

// Création d'un robot - R2D2
var r2d2 = Object.create(Robot);
r2d2.init('R2D2');
r2d2.initCaracteristiques(100, 3, 0,0);

// Gestion affichage un robot
console.log(r2d2.sePresenter());

// Création d'un robot Terminator
var terminator = Object.create(Robot);
terminator.init('Terminator');
terminator.initCaracteristiques(50, 1, 8, 7);
console.log(terminator.sePresenter());

var androidMan = Object.create(Robot);
androidMan.init('Android Man', 10, 10);
androidMan.initCaracteristiques(80, 2, 10, 10);

var lukeSkyWalker = Object.create(Robot);
lukeSkyWalker.init('Luke Sky-Walker', 7, 7);
lukeSkyWalker.initCaracteristiques(90, 3, 7, 7);

// Création d'un array (Tableau) + Ajouter les robots créés au tableau
var armyRobots = [r2d2, terminator, androidMan, lukeSkyWalker];

// ou
// var armyRobots = [];
// armyRobots.push(r2d2);
// armyRobots.push(terminator);
// armyRobots.push(androidMan);
// armyRobots.push(lukeSkyWlaker);

// Afficher le nombre de robots
console.log('\nL\'armée de robots est composée de ' + armyRobots.length + ' robot(s)');

// Parcourir le tableau pour afficher les présentations
armyRobots.forEach(function (robot) {
   console.log(robot.sePresenter()); 
}); 
