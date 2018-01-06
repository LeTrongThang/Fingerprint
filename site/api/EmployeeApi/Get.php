<?php
require "../../../admin/database/database.php";
include('./../CheckSessionRedirectClient.php');

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);

$query = "SELECT * FROM employee WHERE EmployeeID = '$EmployeeID'";

//$data = array();

// retrieve data responses
$result = mysqli_query($conn, $query) or die(mysql_error());
while($row = mysqli_fetch_array($result)) {
    $data = array("EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Position"=>$row['Position'], "Email"=>$row['Email'],
    "PhoneNumber"=>$row['PhoneNumber'],
    "Address"=>$row['Address'],
    "StartingDate"=>$row['StartingDate'],
    "InsuranceID"=>$row['InsuranceID'],
    "Salary"=>$row['Salary'],);
}
echo json_encode($data);
?>