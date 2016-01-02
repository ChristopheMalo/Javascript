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
     
    // Initialisation du robot
    init: function (nom) {
        this.nom    = nom;      // Nom du personnage
        
        // OU Caractéristiques identiques pour tous les robots
        // Préference d'intiialisation de toutes les propriétés dans la fonction d'initialisation
        this.pdv    = 100;      // Point de vie initial
        this.vm     = 3;        // Vitesse maximale
        this.pos    = [0,0];    // Position d'origine
    },
    
    // Description du robot
    sePresenter: function () {
        var description = 'Bonjour, je suis un robot et je m\'appelle ' + this.nom
                        + '. J\'ai '  + this.pdv + ' points de vie.'
                        + ' Ma vitesse de déplacement est de ' + this.vm + ' cases par seconde.'
                        + ' Ma position actuelle est à la case de coordonnées (' + this.pos + ').';
        return  description;
    }
    
};

// Création d'un robot - R2D2
var r2d2 = Object.create(Robot);
r2d2.init('R2D2');

// Gestion affichage un robot
console.log(r2d2.sePresenter());

// Création d'un robot Terminator
var terminator = Object.create(Robot);
terminator.init('Terminator');
console.log(terminator.sePresenter());

var androidMan = Object.create(Robot);
androidMan.init('Android Man');

var lukeSkyWalker = Object.create(Robot);
lukeSkyWalker.init('Luke Sky-Walker');

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
