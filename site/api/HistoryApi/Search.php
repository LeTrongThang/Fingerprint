<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Name = mysqli_real_escape_string($conn, $input->Name);
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$FromDate = mysqli_real_escape_string($conn, $input->FromDate);
$ToDate = mysqli_real_escape_string($conn, $input->ToDate);

function IsNullOrEmptyString($question){
        return (!isset($question) || trim($question)==='');
}

$query = "SELECT * FROM history WHERE Date BETWEEN '$FromDate' AND '$ToDate'";

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
        $data[] = array("HistoryId"=>$row['HistoryId'],"EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Status"=>$row['Status'], "Date"=>$row['Date'] );
}
echo json_encode($data);
?>