// db-comprehensive-code-examples.php
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


    $insertQuery = "INSERT INTO `members`
            (`name`, `phone`, `city`, `date_added`)
 VALUES
            (:name,:phone,:city,:date)";

    $query = $con->prepare($insertQuery);
    $query->bindParam(':name', $name);
    $query->bindParam(':phone', $phone);
    $query->bindParam(':city', $city);
    $query->bindParam(':date', $date);

    // we can add records one by one... (or... see below)
    $name = "Joe";
    $phone = "1231234567";
    $city = "New York";
    $date = date('Y-m-d');
    // Execute the query:
    $query->execute();
    // Check that the insertion really worked:
    $lastInsertId = $con->lastInsertId();
    if ($lastInsertId > 0) {
        echo "<br>OK";
    } else {
        echo "<br>not OK";
    }

    // we can add records using an array
    // Provide the data to the loop within an array
    $date = date('Y-m-d');
    $userData = array(
        array("Jane", "1232345678", "New York", $date),
        array("Gaby", "0522123456", "Tel Aviv", $date),
        array("Karley", "0523134567", "Haifa", $date)
    );
    // Perform the query within a loop
    foreach ($userData as $key => $value) {
        $name = $value[0];
        $phone = $value[1];
        $city = $value[2];
        $date = $value[3];
        $query->execute();
        $lastInsertId = $con->lastInsertId();
        if ($lastInsertId > 0) {
            echo "<br>OK";
        } else {
            echo "<br>not OK";
        }
    }

    // we can fetch the records
    $sqlStr = "SELECT * FROM members WHERE city = :city";
    // Prepare the query:
    $query = $con->prepare($sqlStr);
    // Bind the parameters:
    $query->bindParam(':city', $city, PDO::PARAM_STR);
    // Define the bound value:
    $city = "New York";
    // Execute the query:
    $query->execute();
    // Assign the data which you pulled from the database 
    //   (in the preceding step) to a variable.
    $results = $query->fetchAll(PDO::FETCH_OBJ);
    // Here we used the parameter PDO::FETCH_OBJ that returns the fetched data as an object. 
    //  If you’d like to fetch the data in the form of an array, use: PDO::FETCH_ASSOC.

    echo "<br>";
    // Make sure that we were able to retrieve the data from the database, 
    //by counting the number of records.
    if ($query->rowCount() > 0) {
    }
    // In case that the query returned at least one record, 
    //         we can echo the records within a foreach loop:
    if ($query->rowCount() > 0) {
        foreach ($results as $result) {
            echo $result->name . ", ";
            echo $result->city . ", ";
            echo $result->date_added;
            echo "<br>";
        }
    }

    // we can update records
    $sqlStr = "UPDATE `members`
 SET `city`= :city, `phone` = :tel
 WHERE `id` = :id";
    // Prepare the query:
    $query = $con->prepare($sqlStr);
    // Bind the parameters:
    $query->bindParam(':city', $city, PDO::PARAM_STR);
    $query->bindParam(':tel', $tel, PDO::PARAM_INT);
    $query->bindParam(':id', $id, PDO::PARAM_INT);
    // Define the bound values:
    $tel = '06901234567';
    $city = 'Paris';
    $id = 1;
    // Execute the query:
    $query->execute();
    // Check that the query has been performed 
    //      and that the database has been successfully updated.
    if ($query->rowCount() > 0) {
        $count = $query->rowCount();
        echo "<br>" . $count . " rows were affected.";
    } else {
        echo "<br>" . "No affected rows.";
    }


    // we can delete records
    // Write the delete statement:
    $sqlStr = "DELETE FROM `members` WHERE `id`=:id";
    // Prepare the query:
    $query = $con->prepare($sqlStr);
    // Bind the parameters:
    $query->bindParam(':id', $id, PDO::PARAM_INT);
    // Define the bound values:
    $id = 1;
    // Execute the query:
    $query->execute();
    // Check that the query has been performed 
    //   and that the records have been successfully deleted
    //    from the database.
    if ($query->rowCount() > 0) {
        $count = $query->rowCount();
        echo "<br>" . $count . " rows were affected.";
    } else {
        echo "<br>" . "No affected rows.";
    }
    //====================================================


    if (isset($_POST['signup'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $pass = $_POST['pass'];
        $day = $_POST['day'];
        $month = $_POST['month'];
        $year = $_POST['year'];

        $insert = $con->prepare("INSERT INTO users (name,email,pass,day,month,year)
 values(:name,:email,:pass,:day,:month,:year) ");
        $insert->bindParam(':name', $name);
        $insert->bindParam(':email', $email);
        $insert->bindParam(':pass', $pass);
        $insert->bindParam(':day', $day);
        $insert->bindParam(':month', $month);
        $insert->bindParam(':year', $year);
        $insert->execute();
    } elseif (isset($_POST['signin'])) {
        $email = $_POST['email'];
        $pass = $_POST['pass'];

        $select = $con->prepare("SELECT * FROM users 
 WHERE email='$email' and pass='$pass'");
        $select->setFetchMode(PDO::FETCH_ASSOC);
        $select->execute();
        $data = $select->fetch();
        if ($data['email'] != $email and $data['pass'] != $pass) {
            echo "invalid email or password";
        } elseif ($data['email'] == $email and $data['pass'] == $pass) {
            $_SESSION['email'] = $data['email'];
            $_SESSION['name'] = $data['name'];
            header("location:profile.php");
        }
    }
} //end of "try" (from the try-catch structure)

catch (PDOException $e) {
    echo "error" . $e->getMessage();
}

?>

<?php
//=========================================================
?>

<head>
    <title>Members</title>
</head>

<body>
    <?php
    echo "<hr>";
    ?>
    <div class="main1">
        <h2>Not Registered Yet? <br> Create New Account</h2>
        <form method="post">
            <input type="text" name="name" placeholder="User Name"><br><br>
            <input type="text" name="email" placeholder="example@example.com"><br><br>
            <input type="text" name="pass" placeholder="**********"><br><br>
            <select name="day">
                <option value="day">Day</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
                <option value="06">06</option>
                <option value="07">07</option>
                <option value="08">08</option>
                <option value="09">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
            </select>

            <select name="month">
                <option value="MONTH">MONTH</option>
                <option value="1">JAN</option>
                <option value="2">FEB</option>
                <option value="3">MAR</option>
                <option value="4">APR</option>
                <option value="5">MAY</option>
                <option value="6">JUN</option>
                <option value="7">JUL</option>
                <option value="8">AUG</option>
                <option value="9">SEP</option>
                <option value="10">OCT</option>
                <option value="11">NOV</option>
                <option value="12">DEC</option>


            </select>
            <select name="year">
                <option value="YEAR">YEAR</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
            </select><br><br>

            <input type="submit" name="signup" value="SIGN UP">
        </form>
    </div>
    </div>
    </div>


    <?php
    echo "<hr>";
    ?>
    <div class="main2">
        <h2>Log In</h2>
        <form method="post">
            <input type="text" name="email" placeholder="example@example.com"><br><br>
            <input type="text" name="pass" placeholder="**********"><br><br>
            <input type="submit" name="signin" value="SIGN IN">
        </form>
    </div>
    </div>
    </div>
</body>
<?php
echo "<hr>";
?>