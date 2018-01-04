app.controller('HistoryController',['$scope', '$http', '$timeout', '$interval', function ($scope, $http, $timeout,$interval) {
    console.log("Started history controller");
  
    $scope.init = function(){
      $scope.historys = [];
      $scope.SearchModel = {
          FromDate : new Date(),
          ToDate: new Date(),
          Name :'',
          EmployeeID: ''
      }
      $scope.HistorySubscribe();
      };
      $scope.HistorySubscribe = function() {
          $http.get(urlSubscribe, configSubscribe)
          .then(function(data){
              console.log("Subscribing...");
              $scope.HistoryInfo = data.data;
              console.log(data.data);
              if(data.data == null || data.data == '') { // check if data empty
                 
              } else {
              // Processing string to save to  DB
              var res = $http.post(
                  './site/api/HistoryApi/Message.php',{'Message': data.data
                                              }
            ).then(function(data){});
          }}
      );
      };
      
      // $interval(function () {
      //     //$scope.theTime = new Date().toLocaleTimeString();
      //     $scope.HistorySubscribe();
      //     //alert("aa");
      // }, 30*1000);
      
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
      var urlSubscribe ='./site/api/mqtt/HistorySubscribe.php';
      var configSubscribe = {
          headers:{
              'Accept': 'application/json',
              'requestType':'angularJS',
              'Cache-Control': 'no-cach, no-store, must-revalidate',
              'Pragame':'no-catch',
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
  
      $scope.Search = function(){
         var res = $http.post(
             './site/api/HistoryApi/Search.php', {'Name': $scope.SearchModel.Name,
                                                  'EmployeeID':$scope.SearchModel.EmployeeID,
                                                  'FromDate':$scope.SearchModel.FromDate,
                                                  'ToDate':$scope.SearchModel.ToDate} 
           ).then(function(data){
              $scope.historys = data.data;
          });
      };
      //$scope.Get();
      $scope.init();
  }]);