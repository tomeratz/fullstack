<?php
session_start();
echo "start" . "</br>";
try {
    $con = new PDO("mysql:host=localhost;dbname=pizza", "tomeratz", "1234");
    // To Create table using PHP code instead of from the PHPMyAdmin Dashboard:
    $createTable =
        $con->prepare("CREATE TABLE SoldExtars 
        (
           id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
           extraId int NOT NULL,
           pizzaId int NOT NULL,
           FOREIGN KEY (extraId) REFERENCES ExtraDescript(id),
           FOREIGN KEY (pizzaId) REFERENCES PizzaOrd(id)
           

         );");
    echo "end";

    $createTable->execute();
} //end of "try" (from the try-catch structure)

catch (PDOException $e) {
    echo "error" . $e->getMessage();
}