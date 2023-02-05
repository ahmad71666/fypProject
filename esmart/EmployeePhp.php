<?php 


include_once("mysql-helper.php");
include_once("requestHelper.php");

$isDelete = false;
$isDeleted = false;

$isDelete=queryString('isDel');


if($isDelete)
{
    $isDelete = true;
}
 
$id=queryString('id');


 if($isDelete)
 {
    $isDeleted = deleteRecord('employee',$id);  
 }

$employees = getRecords('employee');
?>