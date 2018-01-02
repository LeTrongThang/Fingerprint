<?php
require "../../../admin/database/database.php";
require("phpMQTT.php");

$server = "m14.cloudmqtt.com";
$port = 16559;                     // change if necessary
$username = "aqdtlsiy";                   // set your username
$password = "2NjLYbDRbQZi";                   // set your password
$client_id = "fingerprint"; // make sure this is unique for connecting to sever - you could use uniqid()

$mqtt = new phpMQTT($server, $port, $client_id);
if(!$mqtt->connect(true, NULL, $username, $password)) {
	exit(1);
}
$topics['fingerprint/scan'] = array("qos" => 0, "function" => "procmsg");
$mqtt->subscribe($topics, 0);
while($mqtt->proc()){
		
}
$mqtt->close();
function procmsg($topic, $msg){
		echo "Msg Recieved: " . date("r") . "\n";
		echo "Topic: {$topic}\n\n";
		//echo "\t$msg\n\n";
		var_dump($msg);
		die;
		json_decode($msg);
}