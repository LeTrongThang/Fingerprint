<?php
header('Content-Type: text/html; charset=utf-8');
require "../../../admin/database/database.php";
require("phpMQTT.php");

$server = "m14.cloudmqtt.com";
$port = 16326;                     // change if necessary
$username = "zqlvxntw";                   // set your username
$password = "IFM6FooHb29I";                   // set your password
$client_id = "fingerprint"; // make sure this is unique for connecting to sever - you could use uniqid()
set_time_limit(0);
$mqtt = new phpMQTT($server, $port, $client_id);
if(!$mqtt->connect(true, NULL, $username, $password)) {
	exit(1);
}

$topics['fingerprint/scan'] = array("qos" => 0, "function" => "procmsg");
$mqtt->subscribe($topics, 0);

// while($mqtt->proc()){
// }
// $mqtt->close();
$done = 0;
$start_time = time();
 while (!$done && !hasTimedout() && $mqtt->proc()) {
	 
}
 $mqtt->close();
function procmsg($topic,$msg) {
	 global $done;
	 $done = 1; 
	//json_decode($msg);
	// echo "Msg Recieved: $msg";
	// var_dump("Msg Recieved: $msg");
	echo $msg;
 } 
function hasTimedout() {
 global $start_time;
  return (time() - $start_time > 10);//waits up to 10 sec 
} 
?>
 