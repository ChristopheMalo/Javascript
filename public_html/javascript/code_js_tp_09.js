/* 
 * Code Javascript TP 09 - Un formulaire interactif
 * 
 * 
 */
// Récupérer tous les id des éléments du formulaire
var dataPrenom          = document.getElementById('prenom'),
    dataNom             = document.getElementById('nom'),
    dataAge             = document.getElementById('age'),
    dataPseudo          = document.getElementById('pseudo'),
    dataPassword        = document.getElementById('password'),
    dataConfirmPassword = document.getElementById('confirmpassword'),
    dataCountry         = document.getElementById('country');
        

// Insérer le data-content de chaque élément du formulaire
dataPrenom.setAttribute('data-content', 'Ton prénom ne peut pas faire moins de 2 caractères');
dataNom.setAttribute('data-content', 'Ton nom ne peut pas faire moins de 2 caractères');
dataAge.setAttribute('data-content', 'Ton âge doit être compris entre 5 et 140 ans');
dataPseudo.setAttribute('data-content', 'Le pseudo ne peut pas faire moins de 4 caractères');
//dataPassword.setAttribute('Le mot de passe ne doit pas faire moins de 6 caractères');
//dataConfirmPassword.setAttribute('Le mot de passe de confirmation doit être identique à celui d\'origine');


$(document).ready(function() {
    // Créer la dynamiquement la création des popover informations des champs du formulaire
    $('input').popover({
        container: 'form', // Spécifier le container global -> permet au popover de prendre une largeur plus importante
        toggle: 'popover',
        placement: 'top',
        trigger  : 'hover'
    });
   
   
    // Fonctions de vérification
    $('#form input[type=text]').on('change invalid', function() {
        var textfield = $(this).get(0);

        // 'setCustomValidity not only sets the message, but also marks
        // the field as invalid. In order to see whether the field really is
        // invalid, we have to remove the message first
        textfield.setCustomValidity('');

        if (!textfield.validity.valid) {
          textfield.setCustomValidity('MEssage erreur');  
        }
    });
   
   
});