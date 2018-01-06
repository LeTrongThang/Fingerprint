<?php
require "../../../admin/database/database.php";
include('./../CheckSessionRedirectClient.php');

$query = "SELECT * FROM history";
$sel = mysqli_query($conn,$query);
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("HistoryId"=>$row['HistoryId'],"EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Status"=>$row['Status'], "Date"=>$row['Date'] );
}
$json = json_encode($data);
echo $json;
?>
