<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');
require("phpMQTT.php");

$server = "m14.cloudmqtt.com";
$port = 16326;                     // change if necessary
$username = "zqlvxntw";                   // set your username
$password = "IFM6FooHb29I";                   // set your password
$client_id = "fingerprint"; // make sure this is unique for connecting to sever - you could use uniqid()

$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/checksystemresult", "", 0,1);
	$mqtt->close();
} else {
    echo "Time out!\n";
}