 <?php
 
 // Đường dẫn tới hệ  thống
define('PATH_SYSTEM', __DIR__ .'/system');
define('PATH_APPLICATION', __DIR__ . '/site');
require "./admin/database/database.php";
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
    <!-- <link rel="stylesheet" href="/node_modules/footable/css/footable.standalone.min.css"> -->
    <!-- AngularJS Material -->
    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css">

    <link rel="stylesheet" href="public/css/layout.css" />
</head>
<body ng-app="Fingerprint">
    <header id="header">
        <nav class="navbar navbar-default fix-border">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 hidden-xs col-sm-3">
                        <div class="navbar-header">
                            <a class="navbar-brand hidden-xs" href="#!home">Fingerprint</a>
                        </div>
                    </div>
                    <div class="col-lg-6 col-xs-9 col-sm-6">
                        <div class="custom">
                            <ul class="nav navbar-nav navbar-center">
                                <li >
                                    <a href="#!salary">
                                        <span class="scope">
                                            <i class="glyphicon glyphicon-euro"></i>
                                            <span class="title-function hidden-xs">SALARY</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!employee">
                                            <span class="scope">
                                                <i class="glyphicon glyphicon-user"></i>
                                                <span class="title-function hidden-xs">EMPLOYEE</span>
                                            </span>
                                        </a>
                                </li>
                                <li>
                                    <a href="#!history">
                                            <span class="scope">
                                                <i class="glyphicon glyphicon-list-alt"></i>
                                                <span class="title-function hidden-xs">HISTORY</span>
                                            </span>
                                        </a>
                                </li>
                                <li>
                                    <a href="#!calendar">
                                            <span class="scope">
                                                <i class="glyphicon glyphicon-calendar"></i>
                                                <span class="title-function hidden-xs">CALENDAR</span>
                                            </span>
                                        </a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                    <div class="col-lg-3 col-xs-3 col-sm-3">
                        <ul class="nav navbar-nav navbar-right">
                            <li>
                                <a href="./site/api/Logout.php">
                                        <span class="scope">
                                            <i class="glyphicon glyphicon-log-in"></i>
                                            <span class="title-function hidden-sm hidden-xs">LOGOUT</span>
                                        </span>
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    </header>
    <div ng-view></div>
    <!-- JQuery -->
    <script type="text/javascript" src="Libs/Jquery/jquery-3.2.1.min.js"></script>
    <!-- AngularJS And Material -->
    <script type="text/javascript" src="node_modules/angular/angular.min.js"></script>
    <script src="node_modules/angular-route/angular-route.js"></script>

    <script type="text/javascript" src="node_modules/angular-aria/angular-aria.js"></script> 
    <script type="text/javascript" src="node_modules/angular-animate/angular-animate.js"></script> 
    <script type="text/javascript" src="node_modules/angular-material/angular-material.js"></script> 
    <script type="text/javascript" src="node_modules/angular-touch/angular-touch.js"></script> 
    
     <!-- Footable -->
    <!-- <script type="text/javascript" src="node_modules/footable/js/footable.min.js"></script> -->
    <!-- Angular Footable -->
    <!-- <script type="text/javascript" src="node_modules/angular-footable/dist/angular-footable.min.js"></script> -->

    <!-- Bootstrap -->
    <script type="text/javascript" src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>

    <!-- Angular UI Bootstrap -->
    <script type="text/javascript" src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script>
    <!-- <script type="text/javascript" src="node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js"></script> -->

     <!-- Moment -->
    <script type="text/javascript" src="node_modules/moment/min/moment.min.js"></script>
    <!-- SweetAlert -->
    <!-- <script type="text/javascript" src="node_modules/sweetalert/dist/sweetalert.min.js"></script> -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
     <!-- ngsweetalert -->
    <!-- <script type="text/javascript" src="node_modules/ngsweetalert/ngSweetAlert.js"></script> -->
    <!-- Controller -->
    <script type="text/javascript" src = "site/controller/MainController.js"></script>
</body>
</html>