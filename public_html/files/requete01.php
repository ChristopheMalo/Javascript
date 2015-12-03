<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script>
        window.top.window.receiveData("<?php echo htmlentities($_POST['prenom']); ?>");
    </script>
  </body>
</html>