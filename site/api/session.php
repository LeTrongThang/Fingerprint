<?php
    session_start();
    $user_check=$_SESSION['login_user'];
    $ses_sql=mysql_query("select Username from user where Username='$user_check'", $conn);
	$row = mysql_fetch_assoc($ses_sql);
	$login_session =$row['Username'];
	if(!isset($login_session)){
		mysql_close($conn);
		header('Location: ./index.php');
	}
?>