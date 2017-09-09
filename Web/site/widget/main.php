<!DOCTYPE html>
<html lang="en">

<head>
    <title> Fingerprint </title>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="viewport" content="initial-scale=1" />
    <!-- bootstraps library -->
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">

    <!-- Optional theme -->
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap-theme.min.css">

    <!-- Latest compiled and minified JavaScript -->
    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <link rel='stylesheet' href='http://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic'>

    <!-- Angular Material requires Angular.js Libraries -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>
    
    <!-- angular routing -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular-route.js"></script>
    <!-- Angular Material Library -->

    <script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=RobotoDraft:300,400,500,700,400italic">

    <!-- Angular Material style sheet -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
    <link rel="stylesheet" href="public/site/layout.css" />
    <script src="public/site/MainController.js"></script>

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