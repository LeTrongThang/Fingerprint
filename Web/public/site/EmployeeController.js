app.controller('EmployeeController', function ($scope){
 
  $scope.Position = ["Team Leader", "Member", "Manager"];
  $scope.employees =[
      { Name: 'huy',Position : 'Member',Email : 'huyle@gmail.com', PhoneNumber : '0957435290',Address:'9 nguyen thi minh khai, quan 1' ,Salary: 113,Bonus : 220, StartingDate : '2/10/2017' }
  ];
});
