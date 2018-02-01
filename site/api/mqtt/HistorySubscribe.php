<?php
header('Content-Type: text/html; charset=utf-8');
require "../../../admin/database/database.php";
require("phpMQTT.php");
require("mqttinit.php");

$client_id = "fingerprint"; 
set_time_limit(0);
$mqtt = new phpMQTT($server, $port, $client_id);
if(!$mqtt->connect(true, NULL, $username, $password)) {
	exit(1);
}

$topics['fingerprint/scan'] = array("qos" => 0, "function" => "procmsg");
$mqtt->subscribe($topics, 0);

$done = 0;
$start_time = time();
 while (!$done && !hasTimedout() && $mqtt->proc()) {
}
 $mqtt->close();
function procmsg($topic,$msg) {
	 global $done;
	 $done = 1; 
	echo $msg;
 } 
function hasTimedout() {
 global $start_time;
  return (time() - $start_time > 10);//waits up to 10 sec 
} 
?>
 