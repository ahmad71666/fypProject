<?php 
include_once("dbconnection.php");

//Returns count of a mysql table based on the table name passed in as a parameter

function getCount($table_name)
{
    global $connection;
    
    $query_select= "SELECT COUNT(*) FROM .$table_name";
    
    $query =mysqli_query($connection,$query_select);
  
    return mysqli_fetch_array($query)[0];
}

//Returns records  for a particular my sql  table

function getRecords($table_name)
{
    global $connection; 
    
    $data = array();
    
    $query_select= "SELECT * FROM $table_name";
    
        $query_select  = "SELECT * FROM $table_name";    
         
    $query =mysqli_query($connection,$query_select);
  
    while($row =  mysqli_fetch_assoc($query)){
        $data[]=$row;
    }
    
    return $data;

}

//Returns single record based on id  for a particular my sql  table

function getSingleRecord($table_name,$id)
{
    global $connection;        
      
    $querySingle = "SELECT * from  $table_name  WHERE id=".$id;

    $query =  mysqli_query($connection,$querySingle);
    
    return  mysqli_fetch_assoc($query);      
    
}
function deleteRecord($table_name,$id)
{
    global $connection;
    
   // $id = $_GET['id'];
   
   
    $querydel="DELETE FROM $table_name WHERE id=" . $id;
	

    $isDeleted =  mysqli_query($connection,$querydel);   
    
    return $isDeleted;
    
}

function addRecord($record,$table) {
   
    global $connection;

    $keys = array_keys($record);
    $values = array_values($record);
    $concatinateValues='';
    $concatinateKeys='';


    for($i=0;$i<count($values);$i++)
    {

        $concatinateKeys.=$keys[$i].",";
        $concatinateValues .="'$values[$i]'".",";  

    }
    
    $valuesLength = strlen( $concatinateValues );

    $concatinateValues  = substr( $concatinateValues , 0,$valuesLength-1 );  
    
    $keysLength = strlen( $concatinateKeys );

    $concatinateKeys  = substr( $concatinateKeys , 0,$keysLength-1 );  

    
    $query="INSERT INTO $table ($concatinateKeys) VALUES ($concatinateValues)";
	
	echo $query .'<br>';
	
	print_r(mysqli_query($connection,$query));
            
    return mysqli_query($connection,$query);
}

function updateRecord($record,$table,$id)
{
    global $connection;
    
    $keys = array_keys($record);
    $values = array_values($record);
    $concatinateResult='';

    for($i=0;$i<count($values);$i++)
    {
       $concatinateResult.=$keys[$i]."="."'$values[$i]'".",";

    }    
    $valuesLength = strlen( $concatinateResult );

    $concatinateResult  = substr( $concatinateResult , 0,$valuesLength-1 );  
    
    
    $query="UPDATE $table SET $concatinateResult WHERE id =".$id;
	
	echo $query;
	//$querydel="DELETE FROM $table_name WHERE $idField=" . $id;


    return mysqli_query($connection,$query);
}

/*function verifyUser($table_name,$username,$password)
{
    global $connection;        
    
    $query_select= "SELECT COUNT(*) FROM $table_name WHERE email='$username' and password='$password'";
    
    $execute =  mysqli_query($connection,$query_select); 
              
    return mysqli_fetch_array($execute)[0];
}*/
function verifyUser($table_name,$userName)
{
    global $connection;        
    
    $query_select= "SELECT isVerify FROM $table_name WHERE email='$userName'";
    
    //echo $query_select; 
    $execute =  mysqli_query($connection,$query_select); 
              
    return mysqli_fetch_array($execute)[0];
}
function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
function getLogedInUserName($userName,$tableName)    
{
    global $connection;        

    $Get_full_Name = "SELECT full_Name FROM $tableName Where email='$userName'";
    
    $query =mysqli_query($connection,$Get_full_Name);
  
     return mysqli_fetch_array($query)[0]; 
}
function updateGuid($table_name,$guid)
{
    global $connection;
    
    $query="UPDATE $table_name SET isVerify = 1 WHERE Guid='$guid'";
    
    mysqli_query($connection,$query);
}
?>