/* 
 * Code Javascript TP 08 - Drag and Drop
 * 
 * 
 */
// Utilisation d'une IIFE pour ne pas interférer avec l'espace global
(function() {
    
    var stockTemp = {}; // Contient DIV en cours de déplacement
    
    //Fonction d'initialisation  
    function init() {
        
        var elementsToMove = document.querySelectorAll('.boxToMove');
        var elementsToMoveLength = elementsToMove.length;

        for (var i = 0; i < elementsToMoveLength; i++) {
            
            //Initialise le drag and drop
            elementsToMove[i].addEventListener('mousedown', function(e) {
            
                var st = stockTemp;
                st.target = e.target;
                st.offsetX = e.clientX - st.target.offsetLeft;
                st.offsetY = e.clientY - st.target.offsetTop;
            
            }, false);
            
            // Termine le drag end drop
            elementsToMove[i].addEventListener('mouseup', function() {
            
                stockTemp = {};
            
            }, false);
        }
        
        // Suivi du drag and drop
        document.addEventListener('mousemove', function(e) {
            
            var targetDuringMove = stockTemp.target;
            
            
            if (targetDuringMove) {
            
                targetDuringMove.style.top = e.clientY - stockTemp.offsetY + 'px';
                targetDuringMove.style.left = e.clientX - stockTemp.offsetX + 'px';
            
            }
        
        }, false);
    
    }
    
    init();
    
})();