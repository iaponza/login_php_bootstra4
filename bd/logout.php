<?php 
   session_start();
   session_unset($_SESSION['s_usuario']);
   session_destroy();
   header("Location:../index.php");

?>
