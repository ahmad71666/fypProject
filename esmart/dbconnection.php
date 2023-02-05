<?php


$server = "localhost";
    
$serverName = "root";
    
$password ="";
    
$database = "esmart";

$connection = null;
    
try 
{
$connection =mysqli_connect($server,$serverName,$password,$database);

if($connection)
{
    //echo "Data base connection successFull";
}

}catch (Exception $errormessage){
    
    echo $errormessage->getMessage();
}

?>