app.controller("SystemController", ['$scope', '$http', function($scope, $http){
    $scope.init = function(){
        $scope.System = false;
        $scope.SystemModel = {
            Wifi : 'UIT-Public',
            Esp8266: 'Available',
            R307: 'Available',
            Microsd:'Available',
            Battery: '92%'
        };
    };
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
            var string = data.$msg;
            var r307 = string.substring(string.length -1, string.length);
            var sdcard = string.substring(string.length -3, string.length - 2) 
            var esp = string.substring(string.length -5, string.length - 4);
            var battery = string.substring(string.length -8, string.length - 6);
            var wifiname = string.substring(0, string.length - 9);
        });
    }

    $scope.init();
}]);