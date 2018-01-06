<?php
require "../../../admin/database/database.php";
include('./../CheckSessionRedirectClient.php');
require("phpMQTT.php");

$server = "m14.cloudmqtt.com";
$port = 16559;                     // change if necessary
$username = "aqdtlsiy";                   // set your username
$password = "2NjLYbDRbQZi";                   // set your password
$client_id = "fingerprint"; // make sure this is unique for connecting to sever - you could use uniqid()

// Received data when calling publish
$input = json_decode(file_get_contents("php://input"));
$EmployeeID = mysqli_real_escape_string($conn, $input->EmployeeID);
$Name = mysqli_real_escape_string($conn, $input->Name);
$Position = mysqli_real_escape_string($conn, $input->Position);
$Buffer = $EmployeeID.",".$Name.",".$Position;
$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/create", $Buffer, 0);
	$mqtt->close();
} else {
    echo "Time out!\n";
}