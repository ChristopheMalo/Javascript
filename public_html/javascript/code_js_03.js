/* 
 * Tester les opérateurs arithmétiques
 * Approfondir l'utilisation des variables
 */
var result01 = 3 + 2;
var nbre01 = 3, nbre02 = 3, result02;

result02 = nbre01 * nbre02;

result03 = result02;
result03 += 5;

alert('result01 : 3 + 2 = ' + result01 + '\n' +
      'result02 : nbre01 (3) x nbre02 (3) = ' + result02 + '\n' +
      'result03 : result02 + 5 = ' + result03
       );