app.controller('SalaryController', ['$scope', '$http',
    function ($scope, $http) {
        
        $scope.init = function () {
            console.log("Start SalaryController");
            $scope.SearchModel = {
                Month:  new Date().getMonth() + 1,
                Year: new Date().getFullYear(),
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
                    $scope.Salarys = data.data;
                });
        };
        $scope.Search = function () {
            var res = $http.post(
                './site/api/SalaryApi/Search.php', {
                    'Month': $scope.SearchModel.Month,
                    'Year': $scope.SearchModel.Year,
                    'EmployeeID': $scope.SearchModel.EmployeeID,
                    'Name': $scope.SearchModel.Name
                }
            ).then(function (data) {
                $scope.Salarys = data.data;
            });
        }
        $scope.init();
    }]);