<?php
require "../../../admin/database/database.php";
require("phpMQTT.php");
require("mqttinit.php");
$client_id = "fingerprint"; // make sure this is unique for connecting to sever - you could use uniqid()

// Received data when calling publish
$input = json_decode(file_get_contents("php://input"));
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Position = mysqli_real_escape_string($conn, $input->Position);
$Name = mysqli_real_escape_string($conn, $input->Name);

$Buffer = $EmployeeID.",".$Name.",".$Position;
$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/update", $Buffer, 0);
	$mqtt->close();
} else {
    echo "Time out!\n";
}