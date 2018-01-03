
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

// Fingerprint Controller
app.controller("FingerprintController", ['$scope', function($scope){
    $scope.init = function(){
        $('.carousel').carousel();
    };
    $scope.init();
}]);

//Login Controller
/*app.controller('LoginController',['$scope','$http','$location',
 function ($scope, $http, $location) {
    console.log("Login Controller");
    $scope.init = function(){
        $scope.User = {
            Username:'',
            Password:''
        };
    }
    var url = './site/api/LoginApi.php';
    $scope.Login = function(){
        var res = $http.post(
            url, {'Username': $scope.User.Username,
                  'Password': $scope.User.Password
                 } 
          ).then(function(data){
        	  if (data.loggedIn == 'true') {
        		  $location.path('/home');
        	  } else {
        		  $location.path('/login');
        	  }
              
         });
    };
    $scope.init();
}]);*/

// Salary Controller
app.controller('SalaryController',['$scope','$http', 
  function ($scope, $http) {
    $scope.init = function(){
    $scope.currentTime = new Date();
    $scope.currentYear = $scope.currentTime.getFullYear();
    $scope.currentMonth = $scope.currentTime.getMonth();
        $scope.SearchModel = {
            Month: $scope.currentMonth + 1,
            Year: $scope.currentYear,
            Name: ''
        };
        $scope.years = $scope.createYearArray();

        $scope.getAllSalary();
    }
    $scope.config = {
        headers:{
            'Accept': 'application/json',
            'requestType':'angularJS',
            'Cache-Control': 'no-cach, no-store, must-revalidate',
            'Pragame':'no-catch',
            'Expries': 0,
            action: 's',
           },
    };
    $scope.createYearArray =  function (){
        var year;
        var firstYear = 2010;
        var temp = true;
        $scope.yearArray = new Array();
        if ($scope.yearArray.length == 0) {
            while (firstYear <= $scope.currentYear) {
                year = $scope.yearArray.push(firstYear);
                firstYear++;
            }
        }
        return $scope.yearArray;
    }
    var url = './site/api/SalaryApi/GetAllSalary.php';
    $scope.getAllSalary = function() {
        $http.get(url, $scope.config)
        .then(function(data){
            $scope.Salarys = data.data;
        });
    };
    $scope.Search = function(){

    }
    $scope.init();
}]);

// Employee Controller
app.controller('EmployeeController', ['$scope','$uibModal','$http',
    function ($scope, $uibModal, $http) {
    $scope.init = function(){
        console.log('Start EmployeeController');
        this.StartingDate = new Date();
        this.isOpen = false;
        $scope.SearchModel = {
            Name : '',
            EmployeeID : '',
            PhoneNumber : '',
            Email : '',
        };
        $scope.getAllEmployee();         
    };
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
    var url = './site/api/EmployeeApi/SearchAll.php';
    $scope.getAllEmployee = function() {
        $http.get(url, config)
        .then(function(data){
            $scope.employees = data.data;
        });
    };

    $scope.ShowEmployee = function(EmployeeID){
        $scope.modalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'site/view/DetailEmployee.html',
            controller: EmployeeID == 0? 'CreateEmployeeController' :'UpdateEmployeeController',
            size: 'lg',
            resolve: {
                EmployeeID: function () {
                    return EmployeeID;
                },
                parent : function(){
                    return $scope;
                }
            }
        });
    }

    $scope.Search = function(){
        var res = $http.post(
            './site/api/EmployeeApi/Search.php', {'Name': $scope.SearchModel.Name,
                                                 'EmployeeID':$scope.SearchModel.EmployeeID,
                                                 'PhoneNumber':$scope.SearchModel.PhoneNumber,
                                                 'Email':$scope.SearchModel.Email} 
          ).then(function(data){
             $scope.employees = data.data;
         });
    }
    $scope.init();
}]);

app.controller('CreateEmployeeController',['$scope','parent','$uibModalInstance','$http',function($scope,parent,$uibModalInstance,$http){
    console.log("Started CreateEmployee controller");
     $scope.IsEdit = false;
    $scope.init = function(){
        $scope.parent = parent;
        $scope.newEmployeeModel = {
            Name : '',
            Position: 'All',
            Email:'',
            PhoneNumber:'',
            Address:'',
            Salary:'',
            InsuranceID:'',
            Bonus:'',
            EmployeeID:'',
            StartingDate : new Date()
        };
    };

    $scope.Create = function(){
        $scope.StartingDate = moment($scope.newEmployeeModel.StartingDate).format('YYYY-MM-DD');
        var res = $http.post(
                './site/api/EmployeeApi/Create.php',{'Name': $scope.newEmployeeModel.Name,
                                                    'Position':$scope.newEmployeeModel.Position,
                                                    'Email':$scope.newEmployeeModel.Email,
                                                    'PhoneNumber':$scope.newEmployeeModel.PhoneNumber,
                                                    'Address':$scope.newEmployeeModel.Address,
                                                    'Salary':$scope.newEmployeeModel.Salary,
                                                    'Bonus':$scope.newEmployeeModel.Bonus,
                                                    'StartingDate':$scope.StartingDate,
                                                    'InsuranceID':$scope.newEmployeeModel.InsuranceID,
                                                    'EmployeeID':$scope.newEmployeeModel.EmployeeID,
                                                } 
          ).then(function(data){
             if(parseInt(data.data) == 1)  // if create succesfful
             {
                 $scope.Close();
                 swal("Create Employee Info Successfull. Sending to Fingerprint System!");
                 parent.getAllEmployee();
                 // Send to NodeMCU
                 var res = $http.post(
                    './site/api/mqtt/CreateEmployeePublish.php', {'EmployeeID': $scope.newEmployeeModel.EmployeeID,
                                                    'Name': $scope.newEmployeeModel.Name,
                                                    'Position':$scope.newEmployeeModel.Position,}
                  ).then(function(data){

                 });
             } else {
                swal("Create Employee Info fail. Please do again or contacting maanger!");
             }
         });
    }
     
    $scope.Change = function () {
            if ($scope.form.$invalid && $scope.newEmployeeModel.Position == 'All') 
                return true;
    }

    $scope.Close = function(){
        $uibModalInstance.close('save');
    }
    $scope.init();
    
}]);

app.controller('UpdateEmployeeController', ['$scope', '$uibModalInstance', 'EmployeeID','$http',
 function($scope, $uibModalInstance, EmployeeID, $http) {
    console.log("Started UpdateEmployee controller");
    $scope.IsEdit = true;
    $scope.init  = function(){
        $scope.newEmployeeModel = {
            Name : '',
            Position: 'All',
            Email:'',
            PhoneNumber:'',
            Address:'',
            Salary:'',
            InsuranceID:'',
            Bonus:'',
            EmployeeID:'',
        };
        $scope.EmployeeID = EmployeeID;
        $scope.GetEmployee();
    };
    $scope.GetEmployee = function(){
        var res = $http.post(
            './site/api/EmployeeApi/Get.php', {'EmployeeID': $scope.EmployeeID}
          ).then(function(data){
                 $scope.newEmployeeModel = data.data;
                 $scope.newEmployeeModel.StartingDate = new Date($scope.newEmployeeModel.StartingDate);
                 $scope.EmployeeModel = angular.copy($scope.newEmployeeModel);
         });
    }
    $scope.Change = function () {
        if ($scope.form.$invalid && angular.equals($scope.EmployeeModel, $scope.newEmployeeModel)) 
            return true;
    }

    $scope.Close = function(){
        $uibModalInstance.close('save');
    }

    $scope.Update = function() {
        //$scope.StartingDate = moment($scope.newEmployeeModel.StartingDate).format('YYYY-MM-DD');
        var res = $http.post(
            './site/api/EmployeeApi/Update.php', {  'Name': $scope.newEmployeeModel.Name,
                                                    'Position':$scope.newEmployeeModel.Position,
                                                    'Email':$scope.newEmployeeModel.Email,
                                                    'PhoneNumber':$scope.newEmployeeModel.PhoneNumber,
                                                    'Address':$scope.newEmployeeModel.Address,
                                                    'Salary':$scope.newEmployeeModel.Salary,
                                                    //'Bonus':$scope.newEmployeeModel.Bonus,
                                                    'StartingDate':$scope.newEmployeeModel.StartingDate,
                                                    'InsuranceID':$scope.newEmployeeModel.InsuranceID,
                                                    'EmployeeID':$scope.newEmployeeModel.EmployeeID,
                                                } 
            ).then(function(data){
                if(parseInt(data.data) == 1) {
                    $scope.Close();
                    swal("Update Employee Info Successfull!");
                    parent.getAllEmployee();
                    // Notify update employee info successfully
                }
                else {
                    swal("Update Employee Info fail. Please do again or contacting maanger!");
                 }
            });
    };
    
    $scope.init();
}]);

app.controller('HistoryController',['$scope', '$http', '$timeout', '$interval', function ($scope, $http, $timeout,$interval) {
  console.log("Started history controller");

  $scope.init = function(){
    $scope.historys = [];
    $scope.SearchModel = {
        FromDate : new Date(),
        ToDate: new Date(),
        Name :'',
        EmployeeID: ''
    }
    };
    $scope.HistorySubscribe = function() {
        $http.get(urlSubscribe, configSubscribe)
        .then(function(data){
            $scope.HistoryInfo = data.msg;
            // Processing string to save to  DB
            console.log(data);
            //$scope.historys = $scope.historys.concat($scope.history);
        });
    };
    
    $interval(function () {
        //$scope.theTime = new Date().toLocaleTimeString();
        $scope.HistorySubscribe();
        //alert("aa");
    }, 10*1000);
    
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
    var urlSubscribe ='./site/api/mqtt/HistorySubscribe.php';
    var configSubscribe = {
        headers:{
            'Accept': 'application/json',
            'requestType':'angularJS',
            'Cache-Control': 'no-cach, no-store, must-revalidate',
            'Pragame':'no-catch',
            'Expries': 0,
            action: 's',
           },
    };
    
   var url = './site/api/HistoryApi/GetHistory.php';
   
    // $scope.getHistory = function() {
    //   $http.get(url, config)
    //   .then(function(data){
    //       $scope.historys = data.data;
    //   });
    // };

    $scope.Search = function(){
       var res = $http.post(
           './site/api/HistoryApi/Search.php', {'Name': $scope.SearchModel.Name,
                                                'EmployeeID':$scope.SearchModel.EmployeeID,
                                                'FromDate':$scope.SearchModel.FromDate,
                                                'ToDate':$scope.SearchModel.ToDate} 
         ).then(function(data){
            $scope.historys = data.data;
        });
    };
    //$scope.Get();
    $scope.init();
}]);

