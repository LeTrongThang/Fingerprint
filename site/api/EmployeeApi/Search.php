<?php
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Name = mysqli_real_escape_string($conn, $input->Name);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Email = mysqli_real_escape_string($conn, $input->$Email);
$PhoneNumber = mysqli_real_escape_string($conn, $input->PhoneNumber);

$EmployeeIDModel = intval($EmployeeID);
$query = "SELECT * FROM history WHERE employeeID = '$EmployeeIDModel' AND name = '$Name'";

$data = array();

// retrieve data responses
$result = mysqli_query($conn, $query) or die(mysql_error());
while($row = mysqli_fetch_array($result)) {
        $data[] = array("historyId"=>$row['historyId'],"employeeID"=>$row['employeeID'],"name"=>$row['name'],"status"=>$row['status'], "date"=>$row['date'] );
}
echo json_encode($data);
?>