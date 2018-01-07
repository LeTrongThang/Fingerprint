app.controller('HistoryController', ['$scope', '$http', '$timeout', '$interval', function ($scope, $http, $timeout, $interval) {
    console.log("Started history controller");

    $scope.init = function () {
        $scope.historys = [];
        $scope.SearchModel = {
            FromDate: new Date(),
            ToDate: new Date(),
            Name: '',
            EmployeeID: ''
        }
        $scope.HistorySubscribe();
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
                        // response to hardware to check scan

                        var urlCheckScan = './site/api/mqtt/PublishCheckScan.php';
                        $http.get(urlCheckScan, configSubscribe).then(function (data) { });
                        console.log("Saving into History...");
                        // Processing string to save to  DB
                        var stringhistory = data.data;
                    	var EmployeeID = stringhistory.substring(0,4);
                        var DateHistory = stringhistory.substring(5,stringhistory.length - 2);
                        var Status = stringhistory.substring(stringhistory.length -1 ,stringhistory.length);
                        var res = $http.post('./site/api/HistoryApi/SaveHistory.php',
                            {
                                'EmployeeID': EmployeeID,
                                'Status': Status,
                                'Date': DateHistory
                            }).then(function (data) {
                                if (data.data.isLogin == 'false') {
                                    window.location = './login.php';
                                } else {

                                }
                            });
                    }
                }
            });
    };

    $interval(function () {
        //$scope.theTime = new Date().toLocaleTimeString();
        $scope.HistorySubscribe();
        //alert("aa");
    }, 30 * 1000);

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

    // $scope.getHistory = function() {
    //   $http.get(url, config)
    //   .then(function(data){
    //       $scope.historys = data.data;
    //   });
    // };

    $scope.Search = function () {
        var res = $http.post(
            './site/api/HistoryApi/Search.php', {
                'Name': $scope.SearchModel.Name,
                'EmployeeID': $scope.SearchModel.EmployeeID,
                'FromDate': $scope.SearchModel.FromDate,
                'ToDate': $scope.SearchModel.ToDate
            }
        ).then(function (data) {
            if (data.data.isLogin == 'false') {
                window.location = './login.php';
            } else {
                $scope.historys = data.data;
            }
        });
    };
    //$scope.Get();
    $scope.init();
}]);