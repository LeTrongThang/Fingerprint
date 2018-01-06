<?php
require "../../../admin/database/database.php";
include('./../CheckSessionRedirectClient.php');

$query = "SELECT * FROM salary";
$sel = mysqli_query($conn,$query);
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] =  array("EmployeeID"=>$row['EmployeeID'],
                  "Name"=>$row['Name'],
                   "Position"=>$row['Position'],
                  "ID"=>$row['ID'],
                  "Salary"=>$row['Salary'],
                  "Bonus"=>$row['Bonus'],
);
}
$json = json_encode($data);
echo $json;
?>
