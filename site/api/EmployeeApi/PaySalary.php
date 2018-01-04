<?php
require "../../../admin/database/database.php";

$input = json_decode(file_get_contents("php://input"));
$Month = mysqli_real_escape_string($conn, $input->Month);
$Year = mysqli_real_escape_string($conn, $input->Year);


$query = "SELECT * FROM employee";
$result = $conn->query($query);
// while ($row = mysqli_fetch_assoc($result)){
//    var_dump($row);
// }
// while ($row = mysqli_fetch_array($sel)) {
//  $data[] =  array("EmployeeID"=>$row['EmployeeID'],"Name"=>$row['Name'],"Position"=>$row['Position'], "Email"=>$row['Email'],
//  "PhoneNumber"=>$row['PhoneNumber'],
//  "StartingDate"=>$row['StartingDate'],
//  "InsuranceID"=>$row['InsuranceID'],
//  "Salary"=>$row['Salary'],
//  "Address"=>$row['Address'],
//  "Bonus"=>$row['Bonus'],
// );
// }
foreach(mysqli_fetch_assoc($result) as $employee){
   // save a employee into salary
   var_dump($employee);
    die();
    //  $querySave = "INSERT INTO employee(EmployeeID, Name, Position, , Salary, Bonus, Month, Year)
    //  VALUES ('$EmployeeID', '$EmployeeID.Name','$Salary','$Bonus', '$Month', '$Year')";
}

// Save salary of all employees into salaty

// $json = json_encode($data);
// echo $json;
?>
