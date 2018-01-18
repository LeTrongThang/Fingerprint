app.controller("SystemController", ['$scope', function($scope){
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
    }
    $scope.init();
}]);