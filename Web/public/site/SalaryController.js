
var yearArray = new Array();
var currentTime = new Date();
var currentYear = currentTime.getFullYear();
var currentMonth = currentTime.getMonth();
function createYearArray() {
    
    var year;
    var firstYear = 2010;
    while (firstYear <= currentYear) {
       year =  yearArray.push(firstYear);
        firstYear++;
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

    $scope.years = createYearArray( );

});