<?php
// Salary
require "../../../admin/database/database.php";
//include('./../CheckSessionRedirectClient.php');

$input = json_decode(file_get_contents("php://input"));
$Month = mysqli_real_escape_string($conn, $input->Month);
$Year = mysqli_real_escape_string($conn, $input->Year);

function IsNullOrEmptyString($question){
    return (!isset($question) || trim($question)==='');
}

$query = "DELETE  FROM salary WHERE 1=1 ";
if (!IsNullOrEmptyString($Month)){
        $query = $query . " AND Month = '$Month'";
}
if (!IsNullOrEmptyString($Year)){
    $query = $query . " AND Year = '$Year'";
}
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
