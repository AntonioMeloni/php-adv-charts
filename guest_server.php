<?php

    include 'data2.php';
    $guest_access[] = $graphs['fatturato'];
    header('Content-Type: application/json');
    echo json_encode($guest_access);

?>
