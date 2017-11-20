

var app = angular.module("Fingerprint", ["ngRoute","ngMaterial","ngMessages","ui.bootstrap"]);
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
app.controller('EmployeeController', ['$modal',function ($scope, $modal) {

    $scope.Position = ["Team Leader", "Member", "Manager"];
    $scope.employees = [
        {EmployeeID: 'NV01', Name: 'huy', Position: 'Member', Email: 'huyle@gmail.com', PhoneNumber: '0957435290', Address: '9 nguyen thi minh khai, quan 1', Salary: 113, Bonus: 220, StartingDate: '2/10/2017' }
    ];
    $scope.user
    this.myDate = new Date();
    this.isOpen = false;

    $scope.ShowDetail = function($employee){
         $scope.modalInstance = $modal.open({
                templateUrl: '/Html/Config/Message/Detail' + ver,
                controller: $MessageID > 0 ? 'UpdateEmployeeController' : 'CreateEmployeeController',
                windowClass: "hmodal-info",
                animation: false,
                size: 'lg',
                backdrop: 'static',
                keyboard: false,
                resolve: {
                    MessageID: function () {
                        return $MessageID;
                    },
                    Message: function () {
                        return $Message;
                    }
                }
            });

    };
});
app.controller('CreateEmployeeController', ['$scope', '$modalInstance', function($scope, modalInstance){
$scope.close = function () {
            $modalInstance.dismiss('cancel');
        };
    $scope.Change = function () {
            if ($scope.form.$invalid)
                return true;
        }
}]);
app.controller('UpdateEmployeeController', ['$scope', function($scope){}]);
app.controller('HistoryController',['$scope', '$http', function ($scope, $http) {
  console.log("Started history controller");
  var config = {
    headers:{
        'Accept': 'application/json',
        'requestType':'angularJS',
        'Cache-Control': 'no-cach, no-store, must-revalidate',
        'Pragame':'no-catch',
        'Expries': 0,
        action: 's',
       },
    };
   var url = 'HistoryService.php';
   $scope.init = function(){
    $scope.historys = [];
    $scope.FromDate = new Date(); 
    $scope.ToDate = new Date();
   };
  $scope.getHistory = function() {
      $http.get(url, config)
      .then(function(data){
          $scope.historys = data;
      });
  };
  $scope.init();
  $scope.getHistory();  
}]);

