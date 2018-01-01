<?php
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Name = mysqli_real_escape_string($conn, $input->Name);
$Position = mysqli_real_escape_string($conn, $input->Position);
$Email = mysqli_real_escape_string($conn, $input->Email);
$PhoneNumber = mysqli_real_escape_string($conn, $input->PhoneNumber);
$Address = mysqli_real_escape_string($conn, $input->Address);
$Salary = mysqli_real_escape_string($conn, $input->Salary);
//$Bonus = mysqli_real_escape_string($conn, $input->Bonus);
$StartingDate = mysqli_real_escape_string($conn, $input->StartingDate);
$InsuranceID = mysqli_real_escape_string($conn, $input->InsuranceID);

$query = "UPDATE employee SET   Name = '".$Name."', 
                                Position = '".$Position."',
                                Email = '".$Email."',
                                PhoneNumber = '".$PhoneNumber."',
                                Address = '".$Address."',
                                Salary = '".$Salary."',
                                StartingDate = '".$StartingDate."',
                                InsuranceID = '".$InsuranceID."'
        WHERE EmployeeID ='$EmployeeID'";

if(mysqli_query($conn, $query)) {
    $data = 1;
    return $data;
}
else {
    $data = 0;
    return $data;
}
?>