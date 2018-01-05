<?php
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));
$Month = mysqli_real_escape_string($conn, $input->Month);
$Year = mysqli_real_escape_string($conn, $input->Year);

$query = "SELECT * FROM employee";
$result = $conn->query($query);
if(mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)){
        $EmployeeID = $row["EmployeeID"];
        $Name = $row["Name"];
        $Salary = $row["Salary"];
        $Bonus = $row["Bonus"];
        $Position = $row["Position"];
       
        // Save salary of all employees into salaty
         $querySave = "INSERT INTO salary(Name, EmployeeID, Salary, Bonus, Position, Month, Year)
                       VALUES ('$Name','$EmployeeID','$Salary','$Bonus','$Position', '$Month', '$Year')";
        $conn->query($querySave);
     }
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
