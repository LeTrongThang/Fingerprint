<?php
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));

// get parameter from angularjs
$Message = mysqli_real_escape_string($conn, $input->Message);

$query = "INSERT INTO message(message)
          VALUES ('$Message')";

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