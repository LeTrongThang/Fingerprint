app.controller('SalaryController', ['$scope', '$http','$uibModal',
    function ($scope, $http, $uibModal) {
        
        $scope.init = function () {
            console.log("Start SalaryController");
            $scope.Month = new Date().getMonth() + 1;
            $scope.Year = new Date().getFullYear();
            $scope.SearchModel = {
                Month:  '-1',
                Year: '-1',
                Name: '',
                EmployeeID:''
            }
            $scope.getAllSalary();
        }

        var config = {
            headers: {
                'Accept': 'application/json',
                'requestType': 'angularJS',
                'Cache-Control': 'no-cach, no-store, must-revalidate',
                'Pragame': 'no-catch',
                'Expries': 0,
                action: 's',
            },
        };
        
        var url = './site/api/SalaryApi/GetAllSalary.php';
        $scope.getAllSalary = function () {
            $http.get(url, config)
                .then(function (data) {
                	if (data.data.isLogin == 'false') {
                		window.location = './login.php';
                	} else {
                		$scope.Salarys = data.data;
                	}
                });
        }

        $scope.Search = function () {
            var res = $http.post(
                './site/api/SalaryApi/Search.php', {
                    'Month': $scope.SearchModel.Month,
                    'Year': $scope.SearchModel.Year,
                    'EmployeeID': $scope.SearchModel.EmployeeID,
                    'Name': $scope.SearchModel.Name
                }
            ).then(function (data) {
            	if (data.data.isLogin == 'false') {
            		window.location = './login.php';
            	} else {
            		$scope.Salarys = data.data;
            	}
            });
        }
        
        $scope.DeleteSalary = function(){
            $scope.modalInstance = $uibModal.open({
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'site/view/DeleteSalary.html',
                controller: 'DeleteSalaryController',
                size: 'lg',
                resolve: {
                    parent : function(){
                        return $scope;
                    }
                }
            });
        }
        $scope.init();
    }]);

app.controller('DeleteSalaryController',['$scope','$uibModalInstance', '$http','parent',
 function($scope, $uibModalInstance, $http, parent){
    console.log("Start DeleteSalaryController");
    $scope.init = function() {
        $scope.DeleteModel = {
            Month : '-1',
            Year : '-1',
        };
    };
    $scope.Delete = function() {
        var Year;
        if ($scope.DeleteModel.Year == '-1') {
            Year =  null;
        } 
        else {
            Year = parseInt($scope.DeleteModel.Year);
        }
        var Month;
        if ($scope.DeleteModel.Month == '-1') {
            Month =  null;
        } 
        else {
            Month = parseInt($scope.DeleteModel.Month);
        }
        var res = $http.post(
            './site/api/SalaryApi/Delete.php', { 'Month': Month,
                                               'Year': Year })
        .then(function (data) {
            if(parseInt(data.data) == 1 ){
                $scope.Close();
                swal("Delete  Salary Successfull!");
                parent.getAllSalary();
            }
        });
    }

    $scope.Close = function () {
        $uibModalInstance.close('save');
    }
    $scope.Disable = function() {
        if($scope.DeleteModel.Month == '-1' && $scope.DeleteModel.Year == '-1') 
        return true;
    }
    $scope.init();
}]);
    