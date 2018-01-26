<?php
require "../../../admin/database/database.php";

$query = "SELECT * FROM system";
$sel = mysqli_query($conn,$query);
$data = array();

while ($row = mysqli_fetch_array($sel)) {
 $data[] = array("Esp8266"=>$row['Esp8266'],"R307"=>$row['R307'],"Battery"=>$row['Battery'],"MicroSDCard"=>$row['MicroSDCard'], "WifiStatus"=>$row['WifiStatus'], "Date"=>$row['Date']);
}
$json = json_encode($data);
echo $json;
?>
