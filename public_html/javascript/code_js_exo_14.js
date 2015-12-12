/* 
 * Code Javascript exercice 14 - Les obstacles
 * Contrôle de saisie de l'utilisateur
 * 
 */
/* Déclaration des variables */
var chaineSaisie, nombre;

while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
    chaineSaisie = prompt('Saisis un nombre entre 3 et 10 : ');   // Récupérer le texte saisi       
    
    if (chaineSaisie === null) {
        console.log('Tu n\'as rien saisi');
        break;

    } else {

        nombre = parseInt(chaineSaisie); // transformer le texte en nombre

        /* Puis contrôler la saisie de l'utilisateur grâce aux conditions */
        if (3 <= nombre && nombre <= 10) {

            console.log(creerLigne(nombre));

        } else {
            
            console.log('Tu as saisi : ' + chaineSaisie);
            console.log('Tu dois saisir un nombre compris entre 3 et 10 !!!');
            alert ('Tu dois saisir un nombre compris entre 3 et 10 !!!');

        }
    }
}

console.log('Au revoir et merci :)'); // Quitter le programme




/* Fonction de création de la ligne */
function creerLigne (nombre) {
    // Rappel du nombre saisi
    console.log('Tu as saisi : ' + nombre);

    var ligne1 = ''; // Initialiser la ligne de caractères
    var charTotal = 100 ; // Nombre de charactères totales de la ligne

    // Selon le nombre saisi, dessiner les premiers _
    for (var i = 1; i < nombre; i++) {
        ligne1 += '_';
    }

    // console.log('Ligne 1 : ' + ligne1); // Debug

    // Ajouter le signe # en position [nombre]
    var ligne2 = '#';
    var ligne3 = ligne1 + ligne2;
    // console.log('Ligne 3 : ' + ligne3); // Debug

    // Déterminer la répétition de la ligne créée
    var nbreFois = Math.floor(charTotal / ligne3.length);
    // console.log('Nombre fois : ' + nbreFois); // Debug
    var chaineAllLignes = ligne3.repeat(nbreFois);
    // console.log(chaineAllLignes); // Debug

    // Déterminer le nombre de caractères restant à ajouter
    var charRest = (charTotal - (nbreFois * ligne3.length));
    // console.log('charRest : ' + charRest); // Debug

    // Insérer les caractères _ restants
    var chaineCharRest = '';
    for (var i = 0; i < charRest; i++) {
        chaineCharRest += '_';
    }

    // Concaténer la ligne créée et les caractères restants
    var chaineFinale = chaineAllLignes + chaineCharRest;

    return chaineFinale; // Afficher la ligne créée - finale
}