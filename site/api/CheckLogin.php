<?php
require "./admin/database/database.php";
$accountError='';
$username = '';
$password = '';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST['username']) || empty($_POST['password'])) {
        $accountError = "Username or password is incorrect!";
    } else {
        $username= $_POST['username'] ;
        $password= $_POST['password'];
        $username = stripslashes($username);
        $password = stripslashes($password);
        $username = mysqli_real_escape_string($conn, $username);
        $password = mysqli_real_escape_string($conn, $password);
        $query = mysqli_query($conn, "select * from user where Username = '$username' AND Password = '$password'");
        $size = mysqli_num_rows($query);
        if ($size >= 1) {
            session_start();
            $_SESSION['login_user'] = $username;
            header('Location: ./index.php');
        } else {
            $accountError = "Username or password is incorrect!";
        }
        mysqli_close($conn);
    }
}



?>