<?php
    session_start();
    $loginUser = $_SESSION['login_user'];
    $ses_sql = mysqli_query($conn, "select Username from user where Username='$loginUser'");
	$size = mysqli_num_rows($ses_sql );
	if($size <= 0){
	    session_destroy();
	    mysqli_close($conn);
	    header('Location: ./login.php');
	}
?>