<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');
require("phpMQTT.php");
require("mqttinit.php");
                   
$client_id = "fingerprint"; 
$mqtt = new phpMQTT($server, $port, $client_id);

// Received data when calling publish
$input = json_decode(file_get_contents("php://input"));
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Name = mysqli_real_escape_string($conn, $input->Name);
$Position = mysqli_real_escape_string($conn, $input->Position);
$Buffer = $EmployeeID.",".$Name.",".$Position;
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/create", $Buffer, 0,1);
	$mqtt->close();
} else {
    echo "Time out!\n";
}
