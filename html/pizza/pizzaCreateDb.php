<?php
session_start();
try {
    $con = new PDO("mysql:host=localhost;dbname=ofra_new", "ofra", "1234");


    // To Create table using PHP code instead of from the PHPMyAdmin Dashboard:
    $createTable =
        $con->prepare("CREATE TABLE IF NOT EXISTS members (
            id int(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
             name varchar(60) DEFAULT NULL,
             phone varchar(14) DEFAULT NULL,
             city varchar(60) DEFAULT NULL,
             date_added date DEFAULT NULL,
            PRIMARY KEY (id)
         );");
    $createTable->execute();

          catch (PDOException $e) {
    echo "error" . $e->getMessage();
}