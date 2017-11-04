<?php
include dirname(__FILE__).'/../../admin/database/database.php';

$sel = mysqli_query($con,"select * from historys");
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("historyId"=>$row['historyId'],"employeeID"=>$row['employeeID'],"name"=>$row['name'],"status"=>$row['status'] );
}
echo json_encode($data);
?>