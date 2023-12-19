<?php
require_once 'models/Model.class.php'; 
$dataModel = new Model();
$data = $dataModel->getData();

header('Content-Type: application/json');
echo json_encode($data);
?>

