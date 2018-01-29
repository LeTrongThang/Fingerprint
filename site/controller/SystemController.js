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
        $scope.DateSystem = moment($scope.Date).format('YYYY-MM-DD h:mm:ss');
        $scope.InvalidData = true;
        $scope.SearchAllSystem();
    };
   
    $scope.SearchAllSystem = function() {
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
         
        // DELAY 1s
        var delayInMilliseconds = 2000; //1 second
        setTimeout(function() {
            //your code to be executed after 1 second
            // Processing string to save to  DB
            var resSystem = $http.post(
                './site/api/mqtt/SubscribeGetSystem.php', {
                }
            ).then(function (data) { 
                var string = data.data.trim();
                if (data.data == null || data.data == " " || data.data == "") { // check if data empty
                    $scope.InvalidData = true;
                    return '';
                } else {
                $scope.InvalidData = false;
                $scope.SystemModel.R307 = string.substring(string.length -1, string.length);
                $scope.SystemModel.Microsd = string.substring(string.length -3, string.length - 2) 
                $scope.SystemModel.Esp8266 = string.substring(string.length -5, string.length - 4);
                $scope.SystemModel.Battery = string.substring(string.length -8, string.length - 6);
                $scope.SystemModel.Wifi = string.substring(0, string.length - 9); 
                // Publish  to delete scan
                var resSystem = $http.post(
                    './site/api/mqtt/PublishSystem.php', {
                    }
                ).then(function (data) { });
        
                // Save info system to Database
                if ($scope.System) {
                    var resDB = $http.post('./site/api/SystemApi/CreateSystemInfo.php',{
                                'R307':  $scope.SystemModel.R307,
                                'Microsd':  $scope.SystemModel.Microsd,
                                'Esp8266':  $scope.SystemModel.Esp8266,
                                'Battery':  $scope.SystemModel.Battery,
                                'Wifi':  $scope.SystemModel.Wifi,
                                'Date':  $scope.DateSystem,
                      }).then(function (data){
                    });
                   } 
                 }
            });   
        }, delayInMilliseconds);
        
        $scope.SearchAllSystem();
        
       }
    $scope.init();
}]);