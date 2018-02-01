<?php
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');
require("phpMQTT.php");
require("mqttinit.php");
                
$client_id = "fingerprint"; 
$mqtt = new phpMQTT($server, $port, $client_id);
if ($mqtt->connect(true, NULL, $username, $password)) {
	$mqtt->publish("fingerprint/checksystem", "1", 0);
	$mqtt->close();
} else {
    echo "Time out!\n";
}
