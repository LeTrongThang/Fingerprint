<?php
require "../../../admin/database/database.php";
include('./../CheckSessionRedirectClient.php');

if(!$conn) {
    echo "Kết nối tới database thất bại";
}
$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Status = mysqli_real_escape_string($conn, $input->Status);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Date = mysqli_real_escape_string($conn, $input->Date);

// get Employee from employeetable
$querySelect = "SELECT *from employee WHERE EmployeeID = '$EmployeeID'";
$result = $conn->query($querySelect);
if(mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)){
        $Name = $row["Name"];
        // Save into history
         $querySave = "INSERT INTO history(Name, EmployeeID, Status, Date)
                       VALUES ('$Name','$EmployeeID', '$Date')";
        $conn->query($querySave);
     }
}
?>