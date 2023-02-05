<?php 

include_once("EmployeePhp.php");



?>


<!DOCTYPE html>
<html lang="en">
<head>
  <title>RDBMS</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
</head>
<body>
  
   <div class="container">
      <h2 style="color:red; font-size:40px;">Employee</h2>
      
   
      <a style="margin-bottom:20px; "href="addEmployee.php" class="btn btn-success btn-sm">
                 <span class="glyphicon glyphicon-plus"></span> Add Record
       </a>
      
      <table class="table table-bordered  table-hover">
       
        <thead>
            <tr>
                <th>Emploee_id</th>
                <th>Employee_name</th>
                <th>Employee_designation</th>
                <th >Employee_salary</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
        <?php

        foreach($employees as $employee)
        {?>
              <tr>
                <td ><?php echo $employee['id'] ?></td>
                <td><?php echo $employee['employee_name'] ?></td>
                <td><?php echo $employee['employee_designation'] ?></td>
                <td><?php echo $employee['employee_salary'] ?> </td>  
                    
                <td>  <a href="employee.php?id=<?php echo $employee['id'];?>&isDel=1" " class="btn btn-danger btn-sm">
                <span class="glyphicon glyphicon-remove"></span> Remove 
                </a></td>                                                                           
                
                
                 <td><a href="updateEmployee.php?id=<?php echo $employee['id'];?>" class="btn btn-info btn-sm">
                 <span class="glyphicon glyphicon-edit"></span> Edit
                  </a></td>
              </tr>
        <?php  }?>
        </tbody>
        </table>
    </div>