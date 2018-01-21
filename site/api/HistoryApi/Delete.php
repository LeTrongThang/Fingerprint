<?php
// History
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$FromDate = mysqli_real_escape_string($conn, $input->FromDate);
$ToDate = mysqli_real_escape_string($conn, $input->ToDate);

function IsNullOrEmptyString($question){
    return (!isset($question) || trim($question)==='');
}

$query = "DELETE  FROM history WHERE Date BETWEEN '$FromDate' AND '$ToDate'";
if (!IsNullOrEmptyString($EmployeeID)){
        $query = $query . "AND EmployeeID = '$EmployeeID'";
}

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
