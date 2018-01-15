<?php
// Search Salary
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Year = intval(mysqli_real_escape_string($conn, $input->Year));
$Month = intval(mysqli_real_escape_string($conn, $input->Month));
$Name = mysqli_real_escape_string($conn, $input->Name);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
function IsNullOrEmptyString($question){
        return (!isset($question) || trim($question)==='');
}
$query = "SELECT * FROM salary WHERE 1=1";
if ($Year != -1){
        $query = $query . " AND Year = '$Year'";
}
if ($Month != -1){
        $query = $query . " AND Month = '$Month'";
}
if (!IsNullOrEmptyString($EmployeeID)){
        $query = $query . " AND EmployeeID = '$EmployeeID'";
}

if (!IsNullOrEmptyString($Name)) {
        $query = $query . " AND Name = '$Name'";
}
$data = array();

// retrieve data responses
$result = mysqli_query($conn, $query) or die(mysql_error());
while($row = mysqli_fetch_array($result)) {
        $data[] =  array("Name"=>$row['Name'],"Position"=>$row['Position'],
                         "Salary"=>$row['Salary'],
                         "Bonus"=>$row['Bonus'],
       );
}
echo json_encode($data);
?>