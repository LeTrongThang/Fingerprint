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

    <script src="Libs/bootstrap/js/bootstrap.min.js"></script>
    <script src="Libs/Jquery/jquery-3.2.1.min.js"></script>
    
    <!-- <script src = "Libs/angulajs/angular.js"> </script> -->
    <script src = "Libs\angularjs\angular.min.js"> </script>
    <script src = "Libs\angularjs\angular-route.js"> </script>
    

    <script src = "site/controller/MainController.js"></script>
    <!-- <script src = "public/site/SalaryController.js"></script>
    <script src = "public/site/EmployeeController.js"></script> -->
    <link rel="stylesheet" href="public/css/layout.css" />
    
</head>

<body ng-app="Fingerprint">
    <header id="header">
        <nav class="navbar navbar-default fix-border">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-3 hidden-xs col-sm-3">
                        <div class="navbar-header">
                            <a class="navbar-brand hidden-xs" href="#/!">Fingerprint</a>
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
                                <a href="#">
                                        <span class="scope">
                                            <i class="glyphicon glyphicon-log-in"></i>
                                            <span class="title-function hidden-sm hidden-xs">LOGIN</span>
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
</body>
</html>