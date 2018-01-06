<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName   = "fingerprint";

$conn = mysqli_connect($servername, $username, $password) or die ("could not connect to mysql");
$db = mysqli_select_db($conn, $dbName) or die ("no database"); 
?>