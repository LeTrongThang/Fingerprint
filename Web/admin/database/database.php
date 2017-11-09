<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName   = "fingerprint";
// try {
//     $conn = new PDO("mysql:host=$servername;dbname=fingerprint", $username, $password);
//     set the PDO error mode to exception
//     $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     return $conn;
//     }
// catch(PDOException $e)
//     {
//     echo "Connection failed: " . $e->getMessage();
//     }
// 
$conn = mysqli_connect($servername, $username, $password, $dbName);
//mysqli_query($conn, );
?>