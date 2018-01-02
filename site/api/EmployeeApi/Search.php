<?php
// Search Employee
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Name = mysqli_real_escape_string($conn, $input->Name);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Email = mysqli_real_escape_string($conn, $input->Email);
$PhoneNumber = mysqli_real_escape_string($conn, $input->PhoneNumber);

function IsNullOrEmptyString($question){
        return (!isset($question) || trim($question)==='');
    }

$query = "SELECT * FROM employee WHERE 1=1 ";

if (!IsNullOrEmptyString($EmployeeID)){
        $query = $query . "AND EmployeeID = '$EmployeeID'";
}

if (!IsNullOrEmptyString($Name)) {
        $query = $query . "AND Name = '$Name'";
}
if (!IsNullOrEmptyString($Email)) {
        $query = $query . "AND Email = '$Email'";
}
if (!IsNullOrEmptyString($PhoneNumber)) {
        $query = $query . "AND PhoneNumber = '$PhoneNumber'";
} 

$data = array();

// retrieve data responses
$result = mysqli_query($conn, $query) or die(mysql_error());
while($row = mysqli_fetch_array($result)) {
        $data[] =  array("EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Position"=>$row['Position'], "Email"=>$row['Email'],
        "PhoneNumber"=>$row['PhoneNumber'],
        "StartingDate"=>$row['StartingDate'],
        "InsuranceID"=>$row['InsuranceID'],
        "Salary"=>$row['Salary'],
        "Address"=>$row['Address'],
       );
}
echo json_encode($data);
?>