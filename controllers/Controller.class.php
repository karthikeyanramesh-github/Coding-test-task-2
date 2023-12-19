<?php
require_once 'models/Model.class.php';

class Controller {
    public function handleRequest() {
        $dataModel = new Model();
        $data = $dataModel->getData();
        include 'views/index.php';
    }
}
?>
