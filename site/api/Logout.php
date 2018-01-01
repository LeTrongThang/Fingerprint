<?php
    session_unset('loggedin');
    session_unset('username');
    header('Location: ./../../login.php');
?>