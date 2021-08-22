<?php
session_start();
try {
    $con = new PDO("mysql:host=localhost;dbname=pizza", "tomeratz", "1234");

    $insertQuery = "INSERT INTO `customer`
(`phoneNo`,`customerName`,`address`)
VALUES
(:phoneNo,:customerName,:city)";

    $query = $con->prepare($insertQuery);
    $query->bindParam(':phoneNo', $phone);
    $query->bindParam(':customerName', $name);
    $query->bindParam(':city', $city);

    // we can add records using an array
    $userData = array(
        array('052-5432623', 'Lucy Mandes', '17 Eshel st, Haifa'),
        array('054-5432623', 'Claudia Reinnes', '35 Nof st, Haifa'),
        array('053-5432623', 'Chris Brook', '5 Limon st, Haifa'),
        array('052-5432623', 'Terry Black', '56 Orange st, Haifa'),
        array('054-5432623', 'Don Meisner', '111 Truman st, Haifa'),
        array('053-5432623', 'Bill Orion', '206 Bluman st, Haifa'),
        array('052-5432623', 'Flicity Dorfner', '64 Cherry st, Haifa'),
        array('052-5432623', 'Samih', '64 Cherry st, Haifa'),
    );

    // Perform the query within a loop
    foreach ($userData as $key => $value) {
        $phone = $value[0];
        $name = $value[1];
        $city = $value[2];
        $query->execute();
        $lastInsertId = $con->lastInsertId();
        if ($lastInsertId > 0) {
            echo "<br>OK";
        } else {
            echo "<br>not OK";
        }
    }

    $insertQuery = "INSERT INTO `orders`
(customerId)
VALUES
(:customerId)";
    $query = $con->prepare($insertQuery);
    $query->bindParam(':customerId', $customerId);

    $ordersData = array(
        array(1),
        array(2),
        array(2),
        array(2),
        array(3),
        array(4),
        array(4),
        array(4),
        array(4),
        array(5),
        array(6),
        array(7),
        array(7),
        array(7),
        array(7),
        array(8),
    );

    foreach ($ordersData as $key => $value) {
        $customerId = $value[0];
        $query->execute();
        $lastInsertId = $con->lastInsertId();
        if ($lastInsertId > 0) {
            echo "<br>OK";
        } else {
            echo "<br>not OK";
        }
    }
} //end of "try" (from the try-catch structure)

catch (PDOException $e) {
    echo "error" . $e->getMessage();
}
