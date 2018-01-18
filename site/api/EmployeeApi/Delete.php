<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);

$query = "DELETE FROM employee WHERE EmployeeID = '$EmployeeID'";
$queryHistory = "DELETE FROM history WHERE EmployeeID = '$EmployeeID'";
$querySalary = "DELETE FROM salary WHERE EmployeeID = '$EmployeeID'";
//$queryCalendar = "DELETE FROM employee WHERE EmployeeID = '$EmployeeID'";

if(mysqli_query($conn, $queryHistory)){}
if(mysqli_query($conn, $querySalary)){}
//if(mysqli_query($conn, $queryCalendar)){}
// query for deleteing 

if(mysqli_query($conn, $query)){
    $data = 1;  
    $json = json_encode($data);
    echo $json;
}
else {
    $data = 0;
    $json = json_encode($data);
    echo $json;
}
?>