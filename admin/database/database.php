<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName   = "fingerprint";

$conn = mysql_connect($servername, $username, $password);
$db = mysql_select_db($dbName, $conn);
?>