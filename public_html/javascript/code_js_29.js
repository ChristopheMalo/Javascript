/* 
 * Code Javascript - Cours - Chapitre 29 - L'audio et la video
 * 
 * 
 */

// Les fonctions de contrôles
// Lecture / Pause
function play(player, control) {
    var softPlayer = document.querySelector('#' + player);
    
    if (softPlayer.paused) {
        softPlayer.play();
        control.textContent = 'Pause';
    } else {
        softPlayer.pause();
        control.textContent = 'Play';
    }
}

// Stop
// Amélioration du cours - Retour à l'état play après Stop pour le bouton id=play
function resume(player, control) {
    var softPlayer = document.querySelector('#' + player);
    var control = document.querySelector('#' + control);
    
    softPlayer.currentTime = 0;
    softPlayer.pause();
    control.textContent = 'Play';
}

// Le volume
function volume(player, volume) {
    var softPlayer = document.querySelector('#' + player);
    
    softPlayer.volume = volume;    
}

// BArre de progression et timer
function update(player) {
    var duration = player.duration;    // Durée totale
    var time     = player.currentTime; // Temps écoulé
    var fraction = time / duration;
    var percent  = Math.ceil(fraction * 100);

    var progress = document.querySelector('#progressBar');
    
    progress.style.width = percent + '%';
    progress.textContent = percent + '%';

    document.querySelector('#progressTime').textContent = formatTime(time);

}

// Afficher le temps écoulé
function formatTime(time) {
    var hours = Math.floor(time / 3600);
    var mins  = Math.floor((time % 3600) / 60);
    var secs  = Math.floor(time % 60);
    
    if (secs < 10) {
        secs = "0" + secs;
    }
    
    if (hours) {
        if (mins < 10) {
            mins = "0" + mins;
        }
        
        return hours + ":" + mins + ":" + secs; // hh:mm:ss
    } else {
        return mins + ":" + secs; // mm:ss
    }
}

// Barre de progression cliquable pour reculer la tête de lecture
function getMousePosition(event) {
    return {
        x: event.pageX,
        y: event.pageY
    };
}

function getPosition(element){
    var top = 0, left = 0;
    
    do {
        top  += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);
    
    return { x: left, y: top };
}

function clickProgress(player, control, event) {
    var parent = getPosition(control);    // La position absolue de la progressBar
    var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
    var player = document.querySelector('#' + player);
  
    var x = target.x - parent.x; 
    var wrapperWidth = document.querySelector('#progressBarControl').offsetWidth;
    
    var percent = Math.ceil((x / wrapperWidth) * 100);    
    var duration = player.duration;
    
    player.currentTime = (duration * percent) / 100;
}

// Pour les videos
// Identique audio mais -> <video>

// Recommandation -> Utilisation d'un framework (popcorn.js, video.js ou projekktor