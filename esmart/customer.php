<?php 

include_once("customerPhp.php");



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
      <h2 style="color:red; font-size:40px;">Customer</h2>
      
   
      <a style="margin-bottom:20px; "href="addCustomer.php" class="btn btn-success btn-sm">
                 <span class="glyphicon glyphicon-plus"></span> Add Another Product
       </a>
      
      <table class="table table-bordered  table-hover">
       
        <thead>
            <tr>
                <th>Customer Id</th>
                <th>Customer Name</th>
                <th>Customer Address</th>
                <th >Customer Mobile Number</th>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
            </tr>
        </thead>
        <tbody>
        <?php

        foreach($customers as $customer)
        {?>
              <tr>
                <td ><?php echo $customer['id'] ?></td>
                <td><?php echo $customer['customer_name'] ?></td>
                <td><?php echo $customer['customer_address'] ?></td>
                <td><?php echo $customer['customer_phone'] ?> </td>  
                    
                <td>  <a href="customer.php?id=<?php echo $customer['id'];?>&isDel=1" " class="btn btn-danger btn-sm">
                <span class="glyphicon glyphicon-remove"></span> Remove 
                </a></td>                                                                           
                
                 <td><a href="updateCustomer.php?id=<?php echo $customer['id'];?>" class="btn btn-info btn-sm">
                 <span class="glyphicon glyphicon-edit"></span> Edit
                  </a></td>
              </tr>
        <?php  }?>
        </tbody>
        </table>
    </div>