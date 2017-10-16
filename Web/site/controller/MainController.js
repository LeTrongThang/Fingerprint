

var app = angular.module("Fingerprint", ["ngRoute","ngMaterial","ngMessages"]);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            template: "<h1>Fingerprint<h1>"
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


var yearArray = new Array();
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
var currentMonth = currentTime.getMonth();
function createYearArray() {

    var year;
    var firstYear = 2010;
    var temp = true;
    if (yearArray.length == 0) {
        while (firstYear <= currentYear) {
            year = yearArray.push(firstYear);
            firstYear++;
        }
    }
    return yearArray;
}

app.controller('SalaryController', function ($scope) {

    $scope.employees = [
        { Name: 'huy', Room: 'A3', Salary: 113 },
        { Name: 'le', Room: 'A2', Salary: 11 }
    ];
    $scope.selectedYear = currentYear;

    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[currentTime.getMonth()];
    $scope.selectedMonth = n;
    $scope.months = month;

    $scope.years = createYearArray();

});
app.controller('EmployeeController', function ($scope) {

    $scope.Position = ["Team Leader", "Member", "Manager"];
    $scope.employees = [
        {EmployeeID: 'NV01', Name: 'huy', Position: 'Member', Email: 'huyle@gmail.com', PhoneNumber: '0957435290', Address: '9 nguyen thi minh khai, quan 1', Salary: 113, Bonus: 220, StartingDate: '2/10/2017' }
    ];
    $scope.user
    this.myDate = new Date();
    this.isOpen = false;
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("btnCreate");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }
    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
app.controller('HistoryController', function ($scope) {
    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

