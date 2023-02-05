<?php
include_once("mysql-helper.php");
include_once("requestHelper.php");
include_once("dbconnection.php");



if(isset($_POST['submitt']))
{

     $emp_name = fieldsValue('employee_name');
     $emp_desig = fieldsValue('employee_designation');
     $emp_salary = fieldsValue('employee_salary');
    
    
     $record = array("employee_name"=>$emp_name, "employee_designation"=>$emp_desig,"employee_salary"=>$emp_salary);
        
    $isAdded =  addRecord($record,'employee');
     
	 print_r($record);
    if($isAdded)     
        header("location:employee.php"); 
}
$error= '';

if(array_key_exists('error', $_GET))
    $error= $_GET['error'];
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
<title>Add Record Form</title>
</head>
<body>
<?php if($error) {?>
    <div class="alert alert-danger"><?php echo $error;?></div>
<?php }?>
<div class="container">
  <h2>Add Student</h2>
  <form class="form-horizontal" action="addEmployee.php" method="post">
    <div class="form-group">
      <label class="control-label col-sm-2" for="emp-name">Employee Name:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="emp-name" placeholder="Enter Name" name="employee_name">
      </div>
    </div>
        <div class="form-group">
      <label class="control-label col-sm-2" for="emp-desig">Employee Designation:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="emp-desig" placeholder="Enter Employee Designation" name="employee_designation">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="emp-salary">Employee Salary:</label>
      <div class="col-sm-10">          
        <input type="text" class="form-control" id="emp-salary" placeholder="Enter Employee Salary" name="employee_salary">
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox" name="remember"> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default" name="submitt">Submit</button>
      </div>
    </div>
  </form>
</div>
</body>
</html>