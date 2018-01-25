<?php
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$R307 = mysqli_real_escape_string($conn, $input->R307);
$Esp8266 = mysqli_real_escape_string($conn, $input->Esp8266);
$Wifi = mysqli_real_escape_string($conn, $input->Wifi);
$Battery = mysqli_real_escape_string($conn, $input->Battery);
$MicroSd = mysqli_real_escape_string($conn, $input->Microsd);
$Date = mysqli_real_escape_string($conn, $input->Date);

$query = "INSERT INTO system(Esp8266, R307, Battery, MicroSDCard, WifiStatus, Date)
          VALUES ('$Esp8266', '$R307','$Battery','$MicroSd','$Wifi','$Date')";

// query for inserting 
if(mysqli_query($conn, $query)){
    $data = 1;
    $json = json_encode($data);
    echo $json;
}
    else {
    $data = 0;
    $json = json_encode($data);
    echo $json;
}
?>