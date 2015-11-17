/* 
 * Code Javascript exercice 17 - Modifier un tableau
 * 
 */
// Récupérer div conteneur pour insérer le tr final
var table_datas = document.getElementById('table_datas');

// Création des textes
var textesTable = [
  document.createTextNode('Firefox'),
  document.createTextNode('Mozilla'),
  document.createTextNode('27,8%')
];

// Création des éléments
var tr  = document.createElement('tr');
var th  = document.createElement('th');
var td1 = document.createElement('td');
var td2 = document.createElement('td');

// Insérer textes dans les éléments
th.appendChild(textesTable[0]);
td1.appendChild(textesTable[1]);
td2.appendChild(textesTable[2]);

// Insérer éléments dans le tr
tr.appendChild(th);
tr.appendChild(td1);
tr.appendChild(td2);

// Récupérer position du tr
trPosition = table_datas.getElementsByTagName('tr');
// console.log(trPosition); // Debug

// Insérer TR dans table
trPosition[2].parentNode.insertBefore(tr, trPosition[2]);