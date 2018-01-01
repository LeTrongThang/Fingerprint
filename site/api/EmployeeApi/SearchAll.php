<?php
require "../../../admin/database/database.php";

$query = "SELECT * FROM employee";
$sel = mysqli_query($conn,$query);
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] =  array("EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Position"=>$row['Position'], "Email"=>$row['Email'],
 "PhoneNumber"=>$row['PhoneNumber'],
 "StartingDate"=>$row['StartingDate'],
 "InsuranceID"=>$row['InsuranceID'],
 "Salary"=>$row['Salary'],
 "Address"=>$row['Address'],
);
}
$json = json_encode($data);
echo $json;
?>
