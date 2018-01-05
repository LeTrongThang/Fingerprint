<?php
require "../../../admin/database/database.php";
if(!$conn) {
    echo "Kết nối tới database thất bại";
}
$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Name = mysqli_real_escape_string($conn, $input->Name);
$Status = mysqli_real_escape_string($conn, $input->Status);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);

$querySelect = "SELECT *from employee WHERE EmployeeID = '$EmployeeID'";
if(mysqli_query($conn, $query)) {
    $Employee =  array("EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Position"=>$row['Position']);
}
var_dump($Employee);
die();
$querySave = "INSERT INTO history(EmployeeID, Name, Status, Date )
          VALUES ('$EmployeeID', '$Name','$Position','$Email')";

// query for inserting 

if(mysqli_query($conn, $querySave)){
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