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
             var position;
             switch($scope.newEmployeeModel.Position){
                 case "Staff":  
                   position = 1;
                   break;
                 case "Leader":  
                   position = 2;
                   break;
                 case "Manager":  
                   position = 3;
                   break;
             }
             var res = $http.post(
                './site/api/mqtt/CreateEmployeePublish.php', {'EmployeeID': $scope.newEmployeeModel.EmployeeID,
                                                'Name': $scope.newEmployeeModel.Name,
                                                'Position':position,}
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