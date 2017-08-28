var app = angular.module("Fingerprint", ["ngRoute"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Main</h1><p>This is Main .</p>",
            controller: "mainCtrl"
        })
        .when("/info", {
            template: "<h1>Info</h1><p>This is Info Employer.</p>",
            controller: "infoCtrl"
        })
        .when("/history", {
            template: "<h1>History</h1><p>This is History.</p>"
            //controller: "historyCtrl"
        })
        .when("/salary", {
            template: "<h1>Salary</h1><p>This is Salary.</p>",
            controller: "paymentCtrl"
        });
});
