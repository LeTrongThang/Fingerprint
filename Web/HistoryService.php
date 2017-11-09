<?php
require "./admin/database/database.php";

$query = "SELECT * FROM history";
$sel = mysqli_query($conn,$query);
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("historyId"=>$row['historyId'],"employeeID"=>$row['employeeID'],"name"=>$row['name'],"status"=>$row['status'], "date"=>$row['date'] );
}
$json = json_encode($data);
echo $json;
