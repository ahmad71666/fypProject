<?php 
//include_once("dbconnection.php");
include_once("mysql-helper.php");
include_once("requestHelper.php");



	// // $EncodedData = file_get_contents('php://input');
	// // $DecodedData= json_decode($EncodedData,true);
		
		
	   // // $FirstName = $DecodedData=('FirstName');
      // // $LastName = $DecodedData=('LastName');
    // // $Contact = $DecodedData=('Contact');
      // // $Email = $DecodedData=('Email');
      // // $Password = $DecodedData=('Password');
    	
		
		
      // $FirstName = fieldsValue('FirstName');
      // $LastName = fieldsValue('LastName');
      // $Contact = fieldsValue('Contact');
      // $Email = fieldsValue('Email');
      // $Password = fieldsValue('Password');
    
    
        // $record = array("FirstName"=>$FirstName, "LastName"=>$LastName,"Contact"=>$Contact,"Email"=>$Email,"Password"=>$Password);
        
		// $isAdded =  addRecord($record,'patient');
     
	 // print_r($record);



















$servername = "localhost";
$username = "root";
$password = "";
$dbname = "esmart";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}


       $FirstName = fieldsValue('FirstName');
      $LastName = fieldsValue('LastName');
      $Contact = fieldsValue('Contact');
      $Email = fieldsValue('Email');
      $Password = fieldsValue('Password');


$sql = "INSERT INTO patient (FirstName, LastName, Contact,Email,Password)
VALUES ('$FirstName', '$LastName', '$Contact','$Email','$Password')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>









?>