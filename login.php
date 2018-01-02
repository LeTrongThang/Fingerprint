<?php
define('PATH_SYSTEM', __DIR__ .'/system');
define('PATH_APPLICATION', __DIR__ . '/site');
include('./site/api/CommonCheckSession.php');
if(isset($_SESSION['login_user'])){
    header('Location: ./index.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <title> Fingerprint </title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1" />

    <!-- bootstraps library -->
    <link rel="stylesheet" href="Libs/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="Libs/bootstrap/css/bootstrap-theme.min.css">

    <!-- footable -->
    <link rel="stylesheet" href="/node_modules/footable/css/footable.standalone.min.css">

    <!-- AngularJS Material -->
    <link rel="stylesheet" href="/node_modules/angular-material/angular-material.css">

    <link rel="stylesheet" href="public/css/layout.css" />
    <style type="text/css">
        .invalid-validate {
            color: red;
        }
    </style>
</head>
<body>
    <header id="header">
        <nav class="navbar navbar-default fix-border">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 hidden-xs col-sm-3">
                        <div class="navbar-header">
                            <a class="navbar-brand hidden-xs" href="/login.html">Fingerprint</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    <div>
    	<div>
			<div class="modal" tabindex="-1" role="dialog">
			    <div class="modal-dialog" role="document">
			        <form action="" id="myLogin" method="post">
			          <div class="modal-content">
			            <div class="modal-header">
			              <h5 class="modal-title">Login</h5>
			            </div>
			            <div class="modal-body">
			              <div class="form-group">
			                  <label for="exampleInputEmail1">User name</label>
			                  <input type="text" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" value="<?php echo $username;?>" required>
			              </div>
			              <div class="form-group">
			                <label for="exampleInputPassword1">Password</label>
			                <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value="<?php echo $password;?>" required>
			              </div>
			              <div style="text-align: center;"><span class="invalid-validate"><?php echo $accountError;?></span></div>
			            </div>
			            <div class="modal-footer">
			              <button type="submit" class="btn btn-primary">Submit</button>
			            </div>
			          </div>
			        </form>
			    </div>
			  </div>
		</div>
    </div>
    <!-- JQuery -->
    <script type="text/javascript" src="Libs/Jquery/jquery-3.2.1.min.js"></script>
    <!-- Bootstrap -->
    <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
</body>
</html>