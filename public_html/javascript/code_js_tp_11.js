/* 
 * Code Javascript TP 11 - Auto completion
 * 
 * 
 */
(function () {
    // Déclaration des variables dans une IIFE
    var searchElement = document.getElementById('search'),
            results = document.getElementById('results'),
            selectedResult = -1, // Connaitre le résultat sélectionné : -1 signifie "aucune sélection"
            previousRequest, // Stocker notre précédente requête dans cette variable
            previousValue = searchElement.value; // Stocker la précédente valeur



    function getResults(keywords) { // Effectuer une requête et récupèrer les résultats

        var xhr = new XMLHttpRequest();
        // Appeler le fichier PHP de gestion de la liste
        xhr.open('GET', '../files/searchTowns.php?s=' + encodeURIComponent(keywords));

        xhr.addEventListener('readystatechange', function () {
            if (xhr.readyState === 4 && xhr.status === 200) {

                displayResults(xhr.responseText);

            }
        }, false);

        xhr.send(null);

        return xhr;

    }

    function displayResults(response) { // Afficher les résultats d'une requête

        // Ternaire -> Affficher le div si résultat, le cacher le div conteneur si aucun résultat
        results.style.display = response.length ? 'block' : 'none';

        if (response.length) { // On ne modifie les résultats que si on en a obtenu

            response = response.split('|');
            var responseLen = response.length;

            results.innerHTML = ''; // On vide les résultats

            for (var i = 0, div; i < responseLen; i++) {

                div = results.appendChild(document.createElement('div'));
                div.innerHTML = response[i];

                div.addEventListener('click', function (e) {
                    chooseResult(e.target);
                }, false);

            }

        }

    }

    function chooseResult(result) { // Choisi un des résultats d'une requête et gère tout ce qui y est attaché

        searchElement.value = previousValue = result.innerHTML; // On change le contenu du champ de recherche et on enregistre en tant que précédente valeur
        results.style.display = 'none'; // On cache les résultats
        result.className = ''; // On supprime l'effet de focus
        selectedResult = -1; // On remet la sélection à "zéro"
        searchElement.focus(); // Si le résultat a été choisi par le biais d'un clique alors le focus est perdu, donc on le réattribue

    }



    searchElement.addEventListener('keyup', function (e) {

        var divs = results.getElementsByTagName('div');

        if (e.keyCode === 38 && selectedResult > -1) { // Si la touche pressée est la flèche "haut"

            divs[selectedResult--].className = '';

            if (selectedResult > -1) { // Cette condition évite une modification de childNodes[-1], qui n'existe pas, bien entendu
                divs[selectedResult].className = 'result_focus';
            }

        } else if (e.keyCode === 40 && selectedResult < divs.length - 1) { // Si la touche pressée est la flèche "bas"

            results.style.display = 'block'; // On affiche les résultats

            if (selectedResult > -1) { // Cette condition évite une modification de childNodes[-1], qui n'existe pas, bien entendu
                divs[selectedResult].className = '';
            }

            divs[++selectedResult].className = 'result_focus';

        } else if (e.keyCode === 13 && selectedResult > -1) { // Si la touche pressée est "Entrée"

            chooseResult(divs[selectedResult]);

        } else if (searchElement.value !== previousValue) { // Si le contenu du champ de recherche a changé

            previousValue = searchElement.value;

            if (previousRequest && previousRequest.readyState < 4) {
                previousRequest.abort(); // Si on a toujours une requête en cours, on l'arrête
            }

            previousRequest = getResults(previousValue); // On stocke la nouvelle requête

            selectedResult = -1; // On remet la sélection à "zéro" à chaque caractère écrit

        }

    }, false);

})();