<?php

    include 'data2.php';
    $clevel_access[] = $graphs['team_efficiency'];
    header('Content-Type: application/json');
    echo json_encode($clevel_access);

?>
