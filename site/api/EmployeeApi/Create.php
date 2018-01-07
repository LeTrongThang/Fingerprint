<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Name = mysqli_real_escape_string($conn, $input->Name);
$Position = mysqli_real_escape_string($conn, $input->Position);
$Email = mysqli_real_escape_string($conn, $input->Email);
$PhoneNumber = mysqli_real_escape_string($conn, $input->PhoneNumber);
$Address = mysqli_real_escape_string($conn, $input->Address);
$Salary = mysqli_real_escape_string($conn, $input->Salary);
$Bonus = mysqli_real_escape_string($conn, $input->Bonus);
$StartingDate = mysqli_real_escape_string($conn, $input->StartingDate);
$InsuranceID = mysqli_real_escape_string($conn, $input->InsuranceID);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);

$query = "INSERT INTO employee(EmployeeID, Name, Position, Email, Address, PhoneNumber, StartingDate, InsuranceID, Salary, Bonus)
          VALUES ('$EmployeeID', '$Name','$Position','$Email','$Address','$PhoneNumber','$StartingDate','$InsuranceID','$Salary','$Bonus')";

// query for inserting 
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