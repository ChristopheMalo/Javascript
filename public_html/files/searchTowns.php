<?php
$searchTowns = unserialize(file_get_contents('towns.txt')); // Récupérer de la liste complète des villes
$searchTownsLength = count($searchTowns);

sort($searchTowns); // Trier les villes dans l'ordre alphabétique

$searchResults = array(); // Initialiser Le tableau pour stocker les résultats de la recherche

// Parcourir le tableau $searchTowns, jusqu'à un maximum de 15 résultats
for ($i = 0 ; $i < $searchTownsLength && count($searchResults) < 15 ; $i++) {
    
    // filter_input(INPUT_GET, 'var_name') à la place de $_GET['var_name']
    if (stripos($searchTowns[$i], filter_input(INPUT_GET, 's')) === 0) { // Si la valeur commence par les mêmes caractères que la recherche

        array_push($searchResults, $searchTowns[$i]); // alors ajouter le résultat à la liste à retourner

    }
    
}

echo implode('|', $searchResults); // Afficher les résultats séparés par une barre verticale |