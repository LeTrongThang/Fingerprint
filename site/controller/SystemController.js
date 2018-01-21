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
    }
    $scope.init();
}]);