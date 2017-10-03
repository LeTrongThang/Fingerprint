

var app = angular.module("Fingerprint", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Fingerprint<h1>"
        })
        .when("/salary", {
            templateUrl: "site/widget/salary.html",
            //controller: "SalaryController"
        })
        .when("/employee", {
            templateUrl: "site/widget/employee.html",
        })
        .when("/calendar", {
            template: "<h1>CALENDAR<h1>"
        })
        .when("/history", {
            templateUrl: "site/widget/history.html",
        })
        .otherwise({
            redirectTo: "/"
        });
});