<?php
require "../../../admin/database/database.php";
require("phpMQTT.php");

$server = "m14.cloudmqtt.com";
$port = 16326;              
$username = "zqlvxntw";     
$password = "IFM6FooHb29I"; 
$client_id = "fingerprint"; 
set_time_limit(0);
$mqtt = new phpMQTT($server, $port, $client_id);
if(!$mqtt->connect(true, NULL, $username, $password)) {
	exit(1);
}

$topics['fingerprint/checksystemresult'] = array("qos" => 0, "function" => "procmsg");
$mqtt->subscribe($topics, 0);

$done = 0;
$start_time = time();
 while (!$done && !hasTimedout() && $mqtt->proc()) {
}
 $mqtt->close();
function procmsg($topic,$msg) {
	echo $msg;
 } 
function hasTimedout() {
 global $start_time;
  return (time() - $start_time > 10);//waits up to 10 sec 
} 
?>
 