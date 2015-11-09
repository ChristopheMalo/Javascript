/* 
 * Code Javascript exercice 09 - Nombre X et #
 * Contrôle de saisie de l'utilisateur
 * 
 */
/* Déclaration des variables */
var chaineSaisie, nombre;

while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
    chaineSaisie = prompt('Saisis un nombre entre 1 et 5 : ');   // Récupérer le texte saisi       

    if (chaineSaisie === null) {

        break;

    } else {

        nombre = parseInt(chaineSaisie); // transformer le texte en nombre

        /* Contrôler la saisie de l'utilisateur grâce aux conditions */
        if (nombre <= 0) {

            alert('Le nombre saisi doit être égal ou supérieur à 1 et positif !');

        } else if (1 <= nombre && nombre <= 5) { // Vérification si la saisie est un nombre compris entre 1 et 15

            /* Rappel du nombre saisi et calcul de la factoriell par appel de la fonction calculFactoriel */
            console.log('Le nombre saisi est ' + nombre);

            // Afficher le résultat
            var motDiese = '';
            
            for (var i = 0; i < nombre; i++) {
                motDiese += '#';
                //console.log(motDiese); // Affichage en escalier
            }
            
            // Avec un switch - Firefox affiche correctement chaque ligne
            console.log('Avec un switch');
            switch (nombre) {
                case 1:
                    console.log(motDiese);
                    break;
                case 2:
                    console.log(motDiese);
                    console.log(motDiese);
                    break;
                case 3:
                    console.log(motDiese);
                    console.log(motDiese);
                    console.log(motDiese);
                    break;
                case 4 :
                    console.log(motDiese);
                    console.log(motDiese);
                    console.log(motDiese);
                    console.log(motDiese);
                    break;
                case 5 :
                    console.log(motDiese);
                    console.log(motDiese);
                    console.log(motDiese);
                    console.log(motDiese);
                    console.log(motDiese)
                    break;
            }
            
            console.log('\n');
            
            // Avec un for => les occurences sont concentrées en 1 ligne
            console.log('Avec un for');
            for (var i = 0; i < nombre; i++) {
                console.log(motDiese);
            }
            
            
            

        } else if (nombre > 5) {

            alert ('Le nombre saisi doit être inférieur ou égal à 5 !');

        } else {

            alert ('Tu dois saisir un nombre !!!'); // Message si pas un nombre
        }
    }
}

console.log('Au revoir et merci :)');