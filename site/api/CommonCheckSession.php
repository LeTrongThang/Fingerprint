<?php
require "./admin/database/database.php";
session_start();
$accountError='';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['username']) || empty($_POST['password'])) {
        $accountError = "Username or password is incorrect!";
    } else {
        $username= $_POST['username'] ;
        $password= $_POST['password'];
        
        $username = stripslashes($username);
        $password = stripslashes($password);
        $username = mysql_real_escape_string($username);
        $password = mysql_real_escape_string($password);
        // $query = "SELECT * from user where Username = '$username' and Password = '$password'";
        $query = mysql_query("select * from user where Username = '$username' AND Password = '$password'", $conn);
        $rows = mysql_num_rows($query);
        if ($rows == 1) {
            $_SESSION['login_user']=$username;
            header('Location: ./index.php');
        } else {
            $accountError = "Username or password is incorrect!";
        }
        mysql_close($conn);
    }
}



?>