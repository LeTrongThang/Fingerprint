<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');
require("phpMQTT.php");

$server = "m14.cloudmqtt.com";
$port = 16326;                     
$username = "zqlvxntw";                   
$password = "IFM6FooHb29I";                   
$client_id = "fingerprint"; 
$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/checksystem", "1", 0);
	$mqtt->close();
} else {
    echo "Time out!\n";
}
