<?php
class Model{
    private $jsonData;
  
    public function __construct() {
        $this->jsonData = json_decode(file_get_contents('assets/data.json'), true);
    }

    public function getData() {
        return $this->jsonData;
    }
}
?>
