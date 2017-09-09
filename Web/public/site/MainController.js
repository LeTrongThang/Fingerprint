

var app = angular.module("Fingerprint", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        template : "<h1>Fingerprint<h1>"
    })
    .when("/salary", {
        templateUrl : "public/site/test1.html"
        // controller : "SalaryController"
    })
    .when("/employee", {
        template : "<h1>Employee<h1>"
    })
    .when("/calendar", {
        template : "<h1>CALENDAR<h1>"
    })
    .when("/history", {
        template : "<h1>history<h1>"
    })
    .otherwise({
        redirectTo: "/"
    });
});
// app.controller('SalaryController', function($scope) {
//     $scope.employees = [
//       {Name: 'huy', Room : 'A1' , Salary : 11},
//       {Name: 'le', Room : 'A1' , Salary : 11}
//     ];
// });