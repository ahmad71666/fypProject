<?php

function queryString($key)
{ 
    if (isset($_GET[$key]))
    {
        $valueToBeReturn = $_GET[$key];
                
        return $valueToBeReturn;
    }
}
function fieldsValue($key)
{ 
    if (isset($_POST[$key]))
    {
        $valueToBeReturn = $_POST[$key]; 
        
        return $valueToBeReturn;
    }
}

?>
    