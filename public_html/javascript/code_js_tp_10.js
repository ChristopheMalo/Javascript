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
    initCaracteristiques: function (pdv, vm, colX, lineY) {
        this.pdv    = pdv;      // Point de vie
        this.vm     = vm;       // Vitesse maximale
        
        this.colX = colX;   // Position x
        this.lineY = lineY;   // Position y
        // this.pos    = [colX,lineY];    // Position d'origine sous forme d'array
        // ou this.pos = [this.colX, this.lineY];
    },
    
    // Fonstion pour récupérer les coordonnées du robot
    getActivesCoordonnees: function () {
        return this.pos = [this.colX, this.lineY];
    },
    
    // Présentation du robot
    sePresenter: function () {
        var optionCase = '';
        
        if (this.vm === 1) {
            optionCase = 'case';  // Gérer le singulier du mot case
        } else {
            optionCase = 'cases'; // ou le pluriel
        }
        
        var description = 'Bonjour, je suis un robot et je m\'appelle ' + this.nom
                        + '. J\'ai '  + this.pdv + ' points de vie.'
                        + ' Ma vitesse de déplacement est de ' + this.vm + ' ' + optionCase + ' par seconde.'
                        + ' Ma position actuelle est à la case de coordonnées (' + this.getActivesCoordonnees() + ').'; // ou à la place de this.pos --> this.arrayCoordonnees()
        return  description;
    },
    
    // Fonction déplacement une case
    seDeplacer: function(direction) {
        console.log('fonction seDeplacer recup activeCoords : ' + this.getActivesCoordonnees()); // debug
        var activeCoord = this.getActivesCoordonnees();
        
        var x = activeCoord[0];
        console.log('x : ' + x); // debug
        
        var y = activeCoord[1];
        console.log('y : ' + y); // debug
        
        /* Arguments : correspondance des déplacements */
        // Deplacement bas :        +y (0)
        // Deplacement gauche :     -x (1)
        // Deplacement droite :     +x (2)
        // Deplacement haut :       -y (3)

        
        var theDirection = '';
        var theDirectionCoord = [];
        switch (direction) {
            case 0:
                y++;
                theDirection = 'bas';
                theDirectionCoord = [x,y];
                this.colX   = x;
                console.log('colX : ' + this.colX); // Debug
                this.lineY  = y;
                console.log('lineY : ' + this.lineY); // Debug
                break;
            case 1:
                x--;
                theDirection = 'gauche';
                theDirectionCoord = [x,y];
                this.colX   = x;
                console.log('colX : ' + this.colX); // Debug
                this.lineY  = y;
                console.log('lineY : ' + this.lineY); // Debug
                break;
            case 2:
                x++;
                theDirection = 'droite';
                theDirectionCoord = [x,y];
                this.colX   = x;
                console.log('colX : ' + this.colX); // Debug
                this.lineY  = y;
                console.log('lineY : ' + this.lineY); // Debug
                break;
            case 3:
                y--;
                theDirection = 'haut';
                theDirectionCoord = [x,y];
                this.colX   = x;
                console.log('colX : ' + this.colX); // Debug
                this.lineY  = y;
                console.log('lineY : ' + this.lineY); // Debug
                break;
        }
        
        // return theDirection;
        console.log('Deplacement vers : ' + theDirection); // Debug
        return theDirectionCoord;

        // return this.getActivesCoordonnees(); // Debug
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
terminator.initCaracteristiques(50, 3, 8, 7);
console.log(terminator.sePresenter());

var androidMan = Object.create(Robot);
androidMan.init('Android Man', 10, 10);
androidMan.initCaracteristiques(80, 3, 10, 10);

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

console.log('\nDéplacement d\'une seule case - Horizontale ou verticale - Distance de manhattan');
console.log('terminator se deplace en : (' + terminator.seDeplacer(0) + ')'); // déplacement vers le bas
console.log('terminator se deplace en : (' + terminator.seDeplacer(2) + ')'); // déplacement vers la droite
console.log('terminator se deplace en : (' + terminator.seDeplacer(2) + ')'); // déplacement vers la droite
console.log('terminator se deplace en : (' + terminator.seDeplacer(3) + ')'); // déplacement vers le haut
console.log('terminator se deplace en : (' + terminator.seDeplacer(1) + ')'); // déplacement vers la gauche