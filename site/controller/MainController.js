'use strict';
var app = angular.module('Fingerprint', ['ngRoute','ngMaterial','ngTouch','ngAnimate','ui.bootstrap']);
app.config(function ($routeProvider) {
    $routeProvider
        /*.when("/login", {
            templateUrl: "site/view/login.html",
            controller: "LoginController"
        })*/
        .when("/", {
            templateUrl: "site/view/fingerprint.html",
            controller: "FingerprintController"
        })
        .when("/salary", {
            templateUrl: "site/view/salary.html",
            controller: "SalaryController"
        })
        .when("/employee", {
            templateUrl: "site/view/employee.html",
            controller: "EmployeeController"
        })
        .when("/calendar", {
            template: "<h1>CALENDAR<h1>"
        })
        .when("/history", {
            templateUrl: "site/view/history.html",
            controller: "HistoryController"
        })
        .otherwise({
            redirectTo: "/"
        });
});

