/* 
 * Code Javascript - Cours - Chapitre 15 - Les objets
 * 
 * 
 */
// Crétion d'un objet - Le constructeur
function Personne(prenom, age, sexe, parent, travail, amis) {
    this.surnom  = prenom;
    this.age     = age;
    this.sexe    = sexe;
    this.parent  = parent;
    this.travail = travail;
    this.amis    = amis;
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

console.log(maFamille[2].surnom + ' est ' + maFamille[2].travail + '.');

// Ajaouter des méthodes