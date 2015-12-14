/* 
 * Code Javascript Exercice 24 - Plus ou moins mode challenge avec difficultés
 *
 */
console.log("Bienvenue dans le jeu du plus ou moins !");

// Initialisation du niveau de difficulté
var chaineSaisie; // Chaine string saisie par le user pour la difficulté
var difficult;    // La difficulté -> Number

// Initialiser tranche et nombre à trouver
var limiteDown  = 1;    // Limite basse
var limiteUp;           // Limite haute
var solution;           // Nombre alétoire à trouver

var compteurMax;        // Gestion du compteur - essais maximum - selon diffuclté


while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
    chaineSaisie = prompt('Saisis une difficulté entre 1 et 3 :\n' +
                          '1 : trouver un nombre entre 1 et 10\n' +
                          '2 : trouver un nombre entre 1 et 100\n' +
                          '3 : trouver un nombre entre 1 et 1000'
                         );   // Récupérer le texte saisi       
    
    if (chaineSaisie === null) {
        
        console.log('Tu n\'as rien saisi');

    } else {

        difficult = parseInt(chaineSaisie); // transformer la chaine siasie en nombre

        /* Puis contrôler la saisie de l'utilisateur grâce aux conditions */
        if (1 <= difficult && difficult <= 3) {
            
            if (difficult === 1) {
                
                // console.log ('Difficult = 1'); // Debug
                limiteUp    = 10;                                           // Configurer la limite haute
                solution    = Math.floor(Math.random() * limiteUp) + 1;     // Retourner la solution aléatoire
                compteurMax = 4;                                            // Fixe le nombre d'essais Max
                break;                                                      // Quitte la boucle pour démarrer le jeu
            
            } else if (difficult === 2) {
            
                // console.log ('Difficult = 2'); // Debug
                limiteUp    = 100;
                solution    = Math.floor(Math.random() * limiteUp) + 1;
                compteurMax = 8;
                break;
            
            } else { // difficult === 3
            
                // console.log ('Difficult = 3'); // Debug
                limiteUp    = 1000;
                solution    = Math.floor(Math.random() * limiteUp) + 1;
                compteurMax = 20;
                break;
            
            }

        } else { // si saisie d'un nombre en dehors de la tranche
            
            console.log('Tu as saisi : ' + chaineSaisie);
            console.log('Tu dois saisir un nombre compris entre 1 et 3 !!!');

        }
    }
}

// Debug pour tester la réponse
// console.log('(La solution est ' + solution + ')');

// Initialisation des variables pour lancer la boucle + gestion compteur
var nombreSaisi     = 0,            // Nombre saisi par le user
    compteurEssai   = 0,            // Le compteur pour calculer le nombre d'essai
    coupsRestants   = compteurMax;  // Le compteur gérant les essais restants

console.log('Tu dois trouver un nombre compris entre ' + limiteDown + ' et ' + limiteUp + ' en ' + compteurMax + ' essais.');

while ((nombreSaisi !== solution) && (compteurEssai < compteurMax)) { // Tant que la solution n'est pas trouvée et essai(s) inférieur ou égal à compteurMax
    
    nombreSaisi = Number(prompt('Saisissez un nombre entre ' + limiteDown + ' et ' + limiteUp + '.')); // Demander un nombre à l'utilisateur
    compteurEssai++; // Incrémenter le compteur d'essai - même en cas d'erreur de saisie
    coupsRestants--; // Décrémenter les coups restants
    
    // Vérifier si nombreSaisi correcte (Intervalle limiteDown à limiteUp, gestion bouton annuler === 0 et pas de caractères)
    if ((nombreSaisi < limiteDown) || (nombreSaisi > limiteUp) || isNaN(nombreSaisi)) {
        
        console.log('Tu dois saisir un nombre entre ' + limiteDown + ' et ' + limiteUp + '.');
        console.log('Il reste ' + coupsRestants + ' essai(s).');
    
    } else if (nombreSaisi > solution) { // Le nombre saisi est supérieur à la solution

            console.log(nombreSaisi + ' est trop grand. C\'est moins.');
            console.log('Il reste ' + coupsRestants + ' essai(s).');

    } else if (nombreSaisi < solution) { // Le nombre saisi est inférieur à la solution

        console.log(nombreSaisi + ' est trop petit. C\'est plus.');
        console.log('Il reste ' + coupsRestants + ' essai(s).');
        
    }
}


if (nombreSaisi === solution) { // nombreSaisi === solution - Bonne réponse
    
    console.log('Bravo ! Tu as trouvé le nombre. La solution était ' + solution + '.');
    console.log('Tu as trouvé en ' + compteurEssai + ' essai(s).');

} else { // 6 coups utilisés + mauvaise réponse
    
    console.log('Désolé, tu as perdu. Tu as utilisé tes ' + compteurEssai + ' essais.');
    console.log('La solution était ' + solution + '.');

}