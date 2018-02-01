<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');
require("phpMQTT.php");
require("mqttinit.php");

$client_id = "fingerprint"; // make sure this is unique for connecting to sever - you could use uniqid()

$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/scan", "", 0,1);
	$mqtt->close();
} else {
    echo "Time out!\n";
}