USE ofra_new;


/* Prints all tables, so we'll be able to copy and use it to drop all tables */
/*
SELECT concat('DROP TABLE IF EXISTS `', table_name, '`;')
FROM information_schema.tables
WHERE table_schema = 'ofra_new';
*/

/* Tables MUST be dropped exactly in this order */
/* 
/* DROP TABLE IF EXISTS `SoldExtra`; */
/*
DROP TABLE IF EXISTS `ExtraDescript`; 
DROP TABLE IF EXISTS `Pizza`; 
DROP TABLE IF EXISTS `Size`;
DROP TABLE IF EXISTS `Ordr`;
DROP TABLE IF EXISTS `Customer`;
*/


CREATE TABLE IF NOT EXISTS ExtraDescript (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    eName varchar(255),
    ePrice int NOT NULL
);

CREATE TABLE IF NOT EXISTS Size
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    price int NOT NULL,
    sizeName varchar(255)
);

CREATE TABLE IF NOT EXISTS Customer
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    phoneNo varchar(255) NOT NULL,
    customerName varchar(255) NOT NULL,
    adress varchar(255)
);

CREATE TABLE IF NOT EXISTS Ordr
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    orderDate DATETIME NOT NULL DEFAULT NOW(),
    customerId int NOT NULL,
    FOREIGN KEY (customerId) REFERENCES Customer(id)
);

CREATE TABLE IF NOT EXISTS Pizza
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sizeId int NOT NULL,
    orderId int NOT NULL,
	FOREIGN KEY (sizeId) REFERENCES Size(id),
    FOREIGN KEY (orderId) REFERENCES Ordr(id)

);

CREATE TABLE IF NOT EXISTS SoldExtra (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    pizzaId int,
    eId int,
	FOREIGN KEY (pizzaId) REFERENCES Pizza(id),
	FOREIGN KEY (eId) REFERENCES ExtraDescript(id)

);

/*CREATE UNIQUE INDEX indx1
ON Pizza (orderId);*/

/* --------------------------------------------------------- */
INSERT INTO Size (price, sizeName) VALUES (20, 'S');
INSERT INTO Size (price, sizeName) VALUES (30, 'M');
INSERT INTO Size (price, sizeName) VALUES (40, 'L');

/* --------------------------------------------------------- */
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('corn',3);
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('onion',4);
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('mashrooms',6);
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('olives',6);

/* --------------------------------------------------------- */
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Lucy Mandes', '17 Eshel st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('054-5432623','Claudia Reinnes', '35 Nof st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('053-5432623','Chris Brook', '5 Limon st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Terry Black', '56 Orange st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('054-5432623','Don Meisner', '111 Truman st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('053-5432623','Bill Orion', '206 Bluman st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Flicity Dorfner', '64 Cherry st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Samih', '64 Cherry st, Haifa');



/* --------------------------------------------------------- */
INSERT INTO Ordr(orderDate,customerId) VALUES ('2019-05-15',1);
INSERT INTO Ordr(customerId) VALUES (1);
INSERT INTO Ordr(customerId) VALUES (2);
INSERT INTO Ordr(customerId) VALUES (2);
INSERT INTO Ordr(customerId) VALUES (2);
INSERT INTO Ordr(customerId) VALUES (3);
INSERT INTO Ordr(customerId) VALUES (4);
INSERT INTO Ordr(customerId) VALUES (4);
INSERT INTO Ordr(customerId) VALUES (4);
INSERT INTO Ordr(customerId) VALUES (4);
INSERT INTO Ordr(customerId) VALUES (5);
INSERT INTO Ordr(customerId) VALUES (6);
INSERT INTO Ordr(customerId) VALUES (7);
INSERT INTO Ordr(customerId) VALUES (7);
INSERT INTO Ordr(customerId) VALUES (7);
INSERT INTO Ordr(customerId) VALUES (7);
INSERT INTO Ordr(customerId) VALUES (8);



/* --------------------------------------------------------- */
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 1);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 1);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 2);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 2);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 2);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 3);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 3);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 3);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 4);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 4);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 4);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 5);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 6);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 7);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 8);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 8);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 9);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 9);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 10);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 11);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 11);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 12);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 12);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 13);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 14);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 14);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 15);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 16);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 16);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 16);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 16);
INSERT INTO Pizza(sizeId, orderId) VALUES (3, 16);

INSERT INTO Pizza(sizeId, orderId) VALUES (2, 17);
INSERT INTO Pizza(sizeId, orderId) VALUES (2, 17);
INSERT INTO Pizza(sizeId, orderId) VALUES (1, 17);




/* --------------------------------------------------------- */
INSERT INTO SoldExtra(pizzaId, eId) VALUES (1, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (1, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (1, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (2, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (2, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (3, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (3, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (3, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (4, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (4, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (4, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (5, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (5, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (5, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (6, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (7, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (7, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (8, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (8, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (8, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (9, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (9, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (9, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (10, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (10, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (10, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (10, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (11, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (11, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (11, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (11, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (12, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (12, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (12, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (13, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (13, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (13, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (13, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (14, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (14, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (15, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (15, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (16, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (16, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (17, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (17, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (18, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (18, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (19, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (19, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (20, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (21, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (22, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (23, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (24, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (24, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (24, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (24, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (25, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (26, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (27, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (28, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (29, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (30, 1);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (30, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (31, 3);

INSERT INTO SoldExtra(pizzaId, eId) VALUES (34, 4);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (34, 3);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (32, 2);
INSERT INTO SoldExtra(pizzaId, eId) VALUES (32, 3);
/* samih  didnt want any extras for his 2nd pizza (pizza with id = 33) */


/* --------------------------------------------------------- */


/* below are Some query examples */



/* list all orders and the name of the customer who ordered it */
SELECT Customer.customerName, Ordr.id 
FROM Customer INNER JOIN Ordr
WHERE Customer.id = Ordr.customerId;


/* list all customers and how many orders they made in total */
SELECT count(Customer.id) AS 'Number of orders', Customer.customerName
FROM Customer INNER JOIN Ordr
WHERE Customer.id = Ordr.customerId
GROUP BY Customer.id;

/* list all customers and for each show all his orders, order by date Ascending */
SELECT Customer.customerName, Ordr.id, Ordr.orderDate
FROM Customer INNER JOIN Ordr
WHERE Customer.id = Ordr.customerId
ORDER BY Customer.id, Ordr.orderDate ASC;


/* list all customers and for each show only his most recent order */
SELECT Customer.customerName, Ordr.id, MAX(Ordr.orderDate)
FROM Customer INNER JOIN Ordr
WHERE Customer.id = Ordr.customerId
GROUP BY Customer.id;
/* show for all customers all orders ordered Descending by date */
SELECT Customer.customerName, Ordr.id, Ordr.orderDate
FROM Customer INNER JOIN Ordr
WHERE Customer.id = Ordr.customerId
ORDER BY Customer.id, Ordr.orderDate DESC;


/* list all orders and how many pizzas in each */
SELECT Ordr.id, COUNT(Pizza.id)
FROM Pizza INNER JOIN Ordr 
WHERE Pizza.orderId = Ordr.id
GROUP BY Ordr.id


SELECT * FROM (SELECT Ordr.id, Ordr.orderDate, COUNT(Pizza.id)
FROM Pizza INNER JOIN Ordr 
WHERE Pizza.orderId = Ordr.id
GROUP BY Ordr.id) 


/* how many orders for each customer */
SELECT 
    Ordr.customerId, 
    Customer.customerName,
    COUNT(Ordr.customerId) AS 'how many orders'
FROM
    Customer INNER JOIN Ordr
WHERE Customer.id = Ordr.customerId
GROUP BY Ordr.customerId;



SELECT Customer.customerName, Ordr.id, MAX(Ordr.orderDate), COUNT(Pizza.id)
FROM 
Customer INNER JOIN Ordr ON Customer.id = Ordr.customerId
  INNER JOIN Pizza ON Pizza.orderId = Ordr.id
GROUP BY Customer.id;


SELECT Ordr.id, COUNT(Pizza.id)
FROM 
Ordr INNER JOIN Pizza WHERE Ordr.id=Pizza.orderId
GROUP BY Ordr.id



SELECT Ordr.customerId, Ordr.id, COUNT(Pizza.id), Ordr.orderDate
FROM 
Ordr INNER JOIN Pizza WHERE Ordr.id=Pizza.orderId
GROUP BY Ordr.id


SELECT c1 FROM t1 WHERE c1 IN (SELECT c1 FROM t2);
SELECT cnt, MAX(ordrDt) FROM
(SELECT Ordr.customerId as ordrCstId, Ordr.id, COUNT(Pizza.id) As cnt, Ordr.orderDate as ordrDt
FROM 
Ordr INNER JOIN Pizza WHERE Ordr.id=Pizza.orderId
GROUP BY Ordr.id)

GROUP BY ordrCstId


SELECT MAX(Ordr.orderDate) FROM Ordr WHERE Ordr.customerId IN 
(SELECT Ordr.orderDate
FROM 
Ordr INNER JOIN Pizza WHERE Ordr.id=Pizza.orderId
GROUP BY Ordr.id)

/*
SELECT Customer.id, MAX(Ordr.orderDate)
FROM 
Ordr INNER JOIN Customer WHERE Ordr.customerId=Customer.id
GROUP BY Customer.id

SELECT Customer.id, Ordr.orderDate 
FROM Ordr INNER JOIN Customer WHERE Ordr.customerId=Customer.id 
ORDER BY Customer.id, Ordr.orderDate DESC

SELECT MAX(Ordr.orderDate) 
FROM Ordr WHERE Ordr.customerId IN 
(SELECT Ordr.orderDate FROM Ordr INNER JOIN Pizza WHERE Ordr.id=Pizza.orderId GROUP BY Ordr.id)

*/

/*
SELECT Ordr.id AS orderID, Ordr.orderDate , Pizza.id AS PizzaId
FROM Ordr INNER JOIN Pizza ON Ordr.id = Pizza.orderId
WHERE Ordr.orderDate IN 
(

SELECT MAX(Ordr.orderDate) As ordDate
FROM 
Ordr INNER JOIN Customer WHERE Ordr.customerId=Customer.id
GROUP BY Customer.id
    
)
*/


/*
SELECT Ordr.id AS orderID, Ordr.orderDate , count(Pizza.id)
FROM Ordr INNER JOIN Pizza ON Ordr.id = Pizza.orderId
WHERE Ordr.orderDate IN 
(

SELECT MAX(Ordr.orderDate) As ordDate
FROM 
Ordr INNER JOIN Customer WHERE Ordr.customerId=Customer.id
GROUP BY Customer.id
    
)
GROUP BY Ordr.id
*/


/*
SELECT Ordr.id AS orderID, Ordr.orderDate , count(Pizza.id)
FROM Ordr INNER JOIN Pizza ON Ordr.id = Pizza.orderId
WHERE Ordr.orderDate IN 
(

SELECT MAX(Ordr.orderDate) As ordDate
FROM 
Ordr INNER JOIN Customer WHERE Ordr.customerId=Customer.id
GROUP BY Customer.id
    
)
GROUP BY Ordr.id;

*/







