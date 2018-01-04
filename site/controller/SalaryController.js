app.controller('SalaryController',['$scope','$http', 
function ($scope, $http) {
  $scope.init = function(){
  $scope.currentTime = new Date();
  $scope.currentYear = $scope.currentTime.getFullYear();
  $scope.currentMonth = $scope.currentTime.getMonth();
      $scope.SearchModel = {
          Month: $scope.currentMonth + 1,
          Year: $scope.currentYear,
          Name: ''
      };
      $scope.years = $scope.createYearArray();

      $scope.getAllSalary();
  }
  $scope.config = {
      headers:{
          'Accept': 'application/json',
          'requestType':'angularJS',
          'Cache-Control': 'no-cach, no-store, must-revalidate',
          'Pragame':'no-catch',
          'Expries': 0,
          action: 's',
         },
  };
  $scope.createYearArray =  function (){
      var year;
      var firstYear = 2010;
      var temp = true;
      $scope.yearArray = new Array();
      if ($scope.yearArray.length == 0) {
          while (firstYear <= $scope.currentYear) {
              year = $scope.yearArray.push(firstYear);
              firstYear++;
          }
      }
      return $scope.yearArray;
  }
  var url = './site/api/SalaryApi/GetAllSalary.php';
  $scope.getAllSalary = function() {
      $http.get(url, $scope.config)
      .then(function(data){
          $scope.Salarys = data.data;
      });
  };
  $scope.Search = function(){

  }
  $scope.init();
}]);