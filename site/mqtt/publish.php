<?php
require("phpMQTT.php");
$server = "m14.cloudmqtt.com";
$port = 16559;                     // change if necessary
$username = "aqdtlsiy";                   // set your username
$password = "2NjLYbDRbQZi";                   // set your password
$client_id = "phpMQTT-publisher"; // make sure this is unique for connecting to sever - you could use uniqid()
$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("bluerhinos/phpMQTT/examples/publishtest", "Hello World! at " . date("r"), 0);
	$mqtt->close();
} else {
    echo "Time out!\n";
}