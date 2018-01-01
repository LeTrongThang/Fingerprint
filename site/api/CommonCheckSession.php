<?php
$checkSession = false;
if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    $checkSession = true;
}
?>