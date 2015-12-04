<?php header("Content-type: text/javascript"); ?>
<!-- le header indique au navigateur que le code suivant est du javascript -->

var string = 'Bonjour <?php echo $_GET['prenom'] ?> !';

receiveMessage02(string);