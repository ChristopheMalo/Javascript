/* 
 * Code Javascript - Cours - Chapitre 17 - Les expressions régulières Partie 1
 * 
 * 
 */
// Utilisaation de la méthode test() de l'objet RegExp
// i : ignorer les majuscules
// | : ou
// ^ $ : début et fin d'une chaine
var regex01 = /^Annecy|Savoie$/i;
var phrase01 = 'Il y a un lac dans la ville d\'annecy';

if (regex01.test(phrase01)) {
    console.log('Le mot ' + regex01 + ' est trouvé dans la phrase : ' + phrase01);
} else {
    console.log('Le mot n\'est pas trouvé');
}


var regex02 = /gr[ao]nde/; // grande - gronde
var phrase02 = 'Elle est très grande';

if (regex02.test(phrase02)) {
    console.log('Un des mots est trouvé');
} else {
    console.log('Le mot n\'est pas trouvé');
}

// Les classes d'intervalles :
// Recherche
// [a-o] -> de a à o
// [a-zA-Z] -> tous l'alphabet minuscule et majuscule - sans accent
// [0-9a-z] -> Chiffres et lettres alphabet minuscule - sans accent
// [âéàè] -> avec accent
// /[a-zâäàéèùêëîïôöçñ]/i -> avec accent maj et minuscule
// [gr.s] -> le point permet de trouver n'importe quel caractère
//
// Exclure de la recherche
// [^aeiouy] -> classe d'intervalle ignorant les voyelles
// [^b-y] -> un intervalle


// les quantificateurs
// /teste?ur/ -> présence de 0 ou 1 'e'
// /teste+ur/ -> présence 1 ou plusieurs fois du 'e'
// /teste*ur/ -> infini de e

// Les accolades
// /teste{0,3}ur -> de 0 à 3 e
// {n,m} de n à m fois
// {n} n fois
// {n,} n fois à l'infini


// Les métacaractères 'interdits' dans les regex :
//     ! ^ $ ( ) [ ] { } ? + * . / \ |
// Pour effectuer une recherche avec ces caractères il faut les échapper
// Exemples :
// /Recherche sur les accolades \{échappées\}

// à l'intérieur de crochets pas d'échappement sauf pour trouver un /\
// pas déchaoppement pour trouver le - si placer en début ou fin de chaine
// Des exemples :
//     /[a-z!?]/
//     /[a-z!?\/\\]/


// Les types génériques
// \d
// Trouve un caractère décimal (un chiffre)
// 
// \D
// Trouve un caractère qui n'est pas décimal (donc pas un chiffre)
// 
// \s
// Trouve un caractère blanc
// 
// \S
// Trouve un caractère qui n'est pas un caractère blanc
// 
// \w
// Trouve un caractère « de mot » : une lettre, accentuée ou non, ainsi que l'underscore
// 
// \W
// Trouve un caractère qui n'est pas un caractère « de mot »
//
// \n
// Trouve un retour à la ligne
//
// \t
// Trouve une tabulation


// Les assertions
// \b
// Trouve une limite de mot
//
// \B
// Ne trouve pas de limite de mot
