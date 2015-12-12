/* 
 * Code Javascript TP 03 - Convertir un nombre en toutes lettres
 * 
 * 
 */
// Correction
function num2Letters(number) {
    
	if (isNaN(number) || number < 0 || 999 < number) {
	return 'Veuillez entrer un nombre entier compris entre 0 et 999.';
	}
	
        // Déclarer les chiffres en lettres
	var units2Letters = ['', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'],
	tens2Letters = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante', 'soixante', 'quatre-vingt', 'quatre-vingt'];
	
        // Extraire les unités, dizaines et centaines
	var units = number % 10,
	tens = (number % 100 - units) / 10,
	hundreds = (number % 1000 - number % 100) / 100;
	
        // Créer les variables qui contiendront les unités, dizaines, centaines
        // Conversion
	var unitsOut, tensOut, hundredsOut;
	
	
	if (number === 0) {
	
	return 'zéro';
	
	} else {
	
	// Traitement des unités
	
	unitsOut = (units === 1 && tens > 0 && tens !== 8 ? 'et-' : '') + units2Letters[units]; // Ternaire
	
	// Traitement des dizaines
	
	if (tens === 1 && units > 0) {
	
	tensOut = units2Letters[10 + units];
	unitsOut = '';
	
	} else if (tens === 7 || tens === 9) {
	
	tensOut = tens2Letters[tens] +'-'+ (tens === 7 && units === 1 ? 'et-' : '') + units2Letters[10 + units];
	unitsOut = '';
	
	} else {
	
	tensOut = tens2Letters[tens];
	
	}
	
	tensOut += (units === 0 && tens === 8 ? 's' : '');
	
	// Traitement des centaines
	
	hundredsOut = (hundreds > 1 ? units2Letters[hundreds] + '-' : '') + (hundreds > 0 ? 'cent' : '') + (hundreds > 1 && tens == 0 && units == 0 ? 's' : '');
	
	// Retour du total - concaténation e nséparant avec le signe '-'
	
	return hundredsOut + (hundredsOut && tensOut ? '-': '') + tensOut + (hundredsOut && unitsOut || tensOut && unitsOut ? '-': '') + unitsOut;
	}
	
	}
	
	
	
	var userEntry;
	
	while (userEntry = prompt('Indiquez le nombre à écrire en toutes lettres (entre 0 et 999) :')) {
	
	alert(num2Letters(parseInt(userEntry, 10)));
	
	}

/************* Piste de reflexion ****************/
//while (true) { // Tant que la boucle est true - CAD mauvaise saisie alors => affichage de la boite de dialogue de saisie
//    var nombre = parseInt(prompt('Saisis un nombre entre 0 et 999')); // Transforme une chaine en nombre
//    
//    // Contrôler la saisie de l'utilisateur
//    if (nombre < 0) {
//        
//        console.log('Le nombre saisi doit être égal ou supérieur à 0 et positif !');
//    
//    } else if (0 <= nombre && nombre <= 999) {
//
//        console.log('Appel de la fonction');
//        var conversion = console.log('Le nombre saisi est ' + nombre + ' et en toutes lettres ' + convertirNombreToLettres(nombre));
//        
//        var unite, dizaine, centaine;
//        
//        
//        unite = nombre % 10;
//        dizaine = ((nombre % 100) - unite);
//        centaine = (((nombre % 1000) - dizaine - unite));
//        
//        if (dizaine === 10) {
//            uniteDiz = unite + dizaine;
//            console.log('unitéDiz' + uniteDiz);
//            console.log('centaine ' + centaine);
//            
//            console.log('Convert ' + centaine + '-' + uniteDiz);
//            
//        } else {
//            console.log('unité ' + unite);
//            console.log('dizaine ' + dizaine);
//            console.log('centaine ' + centaine);
//            
//            console.log('Convert' + centaine + '-' + convertDizaine(dizaine) + '-' + unite);
//        }
//        
//        
//    }  else if (nombre > 999) {
//        
//        // Rappel du nombre saisi et conversion par appel de la fonction
//        console.log('Le nombre saisi doit être inférieur ou égal à 999'); 
//        
//    } else {
//        
//        console.log('Tu dois saisir un nombre !!!');
//        
//    }
//}
//
//
//function convertDizaine (dizaine) {
//    switch (dizaine) {
//        case 10:
//            return 'dix';
//            break;
//        case 20:
//            return 'vingt';
//            break;
//        case 30:
//            return 'trente';
//            break;
//        case 40:
//            return 'quarante';
//            break;
//        case 50:
//            return 'cinquante';
//            break;
//        case 60:
//            return 'soixante';
//            break;
//        case 70:
//            return 'soixante-dix';
//            break;
//        case 80:
//            return 'quatre-vingt';
//            break;
//        case 90:
//            return 'quatre-vingt-dix';
//    }
//}
// 
//// Fonction de conversion
//function convertirNombreToLettres (nombre) {
//    // Ici le code de la fonction
//    resultat = nombre % 100;
//    return resultat;
//}