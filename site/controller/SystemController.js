app.controller("SystemController", ['$scope', '$http', function($scope, $http){
    $scope.init = function(){
        $scope.System = false;
        $scope.SystemModel = {
            Wifi : '',
            Esp8266: '',
            R307: '',
            Microsd:'',
            Battery: ''
        };
        $scope.Date = new Date();
        $scope.DateSystem = moment($scope.Date).format('YYYY-MM-DD');
        
        $scope.SearclAllSystem();
    };
   
    $scope.SearclAllSystem = function() {
        var res = $http.get('./site/api/SystemApi/GetAll.php')
                       .then(function (data){
                           $scope.systems = data.data;
                  });
    }

    $scope.GetSystem = function(){
        $scope.System = true;
        var res = $http.post(
            './site/api/mqtt/PublishGetSystem.php', {
            }
        ).then(function (data) { });
         
        
        var resSystem = $http.post(
            './site/api/mqtt/SubscribeGetSystem.php', {
            }
        ).then(function (data) { 
            var string = data.data.trim();
            $scope.SystemModel.R307 = string.substring(string.length -1, string.length);
            $scope.SystemModel.Microsd = string.substring(string.length -3, string.length - 2) 
            $scope.SystemModel.Esp8266 = string.substring(string.length -5, string.length - 4);
            $scope.SystemModel.Battery = string.substring(string.length -8, string.length - 6);
            $scope.SystemModel.Wifi = string.substring(0, string.length - 9);
        });
    }
        // Save info system to Database
        if ($scope.System) {
            var resDB = $http.post('./site/api/SystemApi/CreateSystemInfo.php',{
                        'R307':  $scope.SystemModel.R307,
                        'Microsd':  $scope.SystemModel.Microsd,
                        'Esp8266':  $scope.SystemModel.Esp8266,
                        'Battery':  $scope.SystemModel.R307,
                        'Wifi':  $scope.SystemModel.Wifi,
                        'Date':  $scope.DateSystem,
            }).then(function (data){
            });
        }

    $scope.init();
}]);