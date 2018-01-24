app.controller('HistoryController', ['$scope', '$uibModal', '$http', '$timeout', '$interval',
 function ($scope, $uibModal ,$http, $timeout, $interval) {
    console.log("Started history controller");
    $scope.init = function () {
        $scope.historys = [];
        $scope.SearchModel = {
            FromDate: new Date(),
            ToDate: new Date(),
            Name: '',
            EmployeeID: ''
        }
        $scope.PublishScan = './site/api/mqtt/PublishCheckScan.php';
        $scope.getHistory();
    };
    $scope.HistorySubscribe = function () {
        $http.get(urlSubscribe, configSubscribe)
            .then(function (data) {
                if (data.data.isLogin == 'false') {
                    window.location = './login.php';
                } else {
                    console.log("Subscribing...");
                    $scope.HistoryInfo = data.data;
                    console.log(data.data);
                    if (data.data == null || data.data == " ") { // check if data empty
                        return '';
                    } else {
                        // Processing string to save to  DB
                        var stringhistory = data.data.trim();
                    	var EmployeeID = stringhistory.substring(0,4);
                        var DateHistory = stringhistory.substring(5,stringhistory.length - 2);
                        var Status = stringhistory.substring(stringhistory.length -1 ,stringhistory.length);
                        var res = $http.post('./site/api/HistoryApi/SaveHistory.php',
                            {
                                'EmployeeID': EmployeeID,
                                'Status': Status,
                                'Date': DateHistory
                            }).then(function (dataDB) {
                                  if ( dataDB.data != null) {
                                      $scope.a = true;
                                  }
                                });
                            // PUBLISH SCAN
                            if ($scope.a) {
                                $http.get($scope.PublishScan,configSubscribe )
                                    .then (function(data){});
                            }
                            // DELAY 1s
                            var delayInMilliseconds = 1000; //1 second
                            setTimeout(function() {
                            //your code to be executed after 1 second
                            }, delayInMilliseconds);
                        $scope.getHistory();
                    }
                }
            });
    };

    $interval(function () {
        $scope.HistorySubscribe();
    }, 5 * 1000);

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
    var urlSubscribe = './site/api/mqtt/HistorySubscribe.php';
    var configSubscribe = {
        headers: {
            'Accept': 'application/json',
            'requestType': 'angularJS',
            'Cache-Control': 'no-cach, no-store, must-revalidate',
            'Pragame': 'no-catch',
            'Expries': 0,
            action: 's',
        },
    };

    var url = './site/api/HistoryApi/GetHistory.php';

    $scope.getHistory = function() {
      $http.get(url, config)
      .then(function(data){
          $scope.historys = data.data;
      });
    };
    
    $scope.DeleteHistory = function () {
        $scope.modalInstance = $uibModal.open({
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'site/view/DeleteHistory.html',
            controller:'DeleteHistoryController',
            size: 'lg',
            resolve: {
                parent : function(){
                     return $scope;
                }
            }
        });
    }
    $scope.Search = function () {
        var FromDate = moment($scope.SearchModel.FromDate).format("YYYY-MM-DD HH:mm");
        var ToDate = moment($scope.SearchModel.ToDate).format("YYYY-MM-DD HH:mm");
        var res = $http.post(
            './site/api/HistoryApi/Search.php', {
                'Name': $scope.SearchModel.Name,
                'EmployeeID': $scope.SearchModel.EmployeeID,
                'FromDate': FromDate,
                'ToDate': ToDate
            }
        ).then(function (data) {
            if (data.data.isLogin == 'false') {
                window.location = './login.php';
            } else {
                $scope.historys = data.data;
            }
        });
    };

    $scope.init();
}]);

app.controller('DeleteHistoryController', ['$scope', '$uibModalInstance', '$http', 'parent',
function ($scope, $uibModalInstance, $http, parent) {
    $scope.init = function() {
        $scope.DeleteModel = {
            EmployeeID: '',
            FromDate : new Date(),
            ToDate : new Date(),
        };
    };

  $scope.Delete = function() {
    var FromDate = moment($scope.DeleteModel.FromDate).format("YYYY-MM-DD HH:mm");
    var ToDate = moment($scope.DeleteModel.ToDate).format("YYYY-MM-DD HH:mm");
    var res = $http.post(
        './site/api/HistoryApi/Delete.php', {
            'EmployeeID': $scope.DeleteModel.EmployeeID,
            'FromDate': FromDate,
            'ToDate':   ToDate,
        }
    ).then(function (data) {
        if (parseInt(data.data) == 1) {
            swal("Deleted Successful");
            parent.getHistory();
        } else {
            swal("Deleted fail");
        }
    });
  }

  $scope.Close = function () {
    $uibModalInstance.close('save');
}
// $scope.Disable = function() {
//     if($scope.DeleteModel.EmployeeID == ''|| $scope.DeleteModel.EmployeeID == null) 
//     return true;
// }

$scope.init();
}]);