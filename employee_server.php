<?php

    include 'data2.php';
    $employee_access[] = $graphs['fatturato_by_agent'];
    header('Content-Type: application/json');
    echo json_encode($employee_access);

?>
