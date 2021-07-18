CREATE TABLE ExtraDescript (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    eName varchar(255),
    ePrice int NOT NULL
);

CREATE TABLE Size
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sPrice int NOT NULL,
    sName varchar(255)
);

CREATE TABLE Customer
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    phoneNo varchar(255) NOT NULL,
    customerName varchar(255) NOT NULL,
    adress varchar(255)
);

CREATE TABLE Orders
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    orderDate DATETIME NOT NULL DEFAULT NOW(),
    customerId int NOT NULL,
    FOREIGN KEY (customerId) REFERENCES Customer(id)
);

CREATE TABLE pizzaOrd
 (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    sizeId int NOT NULL,
    orderId int NOT NULL,
	FOREIGN KEY (sizeId) REFERENCES Size(id),
    FOREIGN KEY (orderId) REFERENCES Orders(id)
);

CREATE TABLE soldextars (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    pizzaId int,
    extraId int,
	FOREIGN KEY (pizzaId) REFERENCES pizzaOrd(id),
	FOREIGN KEY (extraId) REFERENCES ExtraDescript(id)
);

INSERT INTO Size (sPrice, sName) VALUES (20, 'S');
INSERT INTO Size (sPrice, sName) VALUES (30, 'M');
INSERT INTO Size (sPrice, sName) VALUES (40, 'L');

INSERT INTO ExtraDescript(eName, ePrice) VALUES ('corn',3);
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('onion',4);
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('mashrooms',6);
INSERT INTO ExtraDescript(eName, ePrice) VALUES ('olives',6);

INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Lucy Mandes', '17 Eshel st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('054-5432623','Claudia Reinnes', '35 Nof st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('053-5432623','Chris Brook', '5 Limon st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Terry Black', '56 Orange st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('054-5432623','Don Meisner', '111 Truman st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('053-5432623','Bill Orion', '206 Bluman st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Flicity Dorfner', '64 Cherry st, Haifa');
INSERT INTO Customer(phoneNo, customerName, adress) VALUES ('052-5432623','Samih', '64 Cherry st, Haifa');

INSERT INTO Orders(customerId) VALUES (1);
INSERT INTO Orders(customerId) VALUES (2);
INSERT INTO Orders(customerId) VALUES (2);
INSERT INTO Orders(customerId) VALUES (2);
INSERT INTO Orders(customerId) VALUES (3);
INSERT INTO Orders(customerId) VALUES (4);
INSERT INTO Orders(customerId) VALUES (4);
INSERT INTO Orders(customerId) VALUES (4);
INSERT INTO Orders(customerId) VALUES (4);
INSERT INTO Orders(customerId) VALUES (5);
INSERT INTO Orders(customerId) VALUES (6);
INSERT INTO Orders(customerId) VALUES (7);
INSERT INTO Orders(customerId) VALUES (7);
INSERT INTO Orders(customerId) VALUES (7);
INSERT INTO Orders(customerId) VALUES (7);
INSERT INTO Orders(customerId) VALUES (8);

INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 1);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 1);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 2);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 2);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 2);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 3);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 3);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 3);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 4);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 4);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 4);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 5);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 6);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 7);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 8);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 8);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 9);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 9);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 10);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 11);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 11);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 12);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 12);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 13);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 14);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 14);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 15);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 16);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 16);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 16);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 16);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (3, 16);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 17);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (2, 17);
INSERT INTO pizzaOrd(sizeId, orderId) VALUES (1, 17);

INSERT INTO soldextars(pizzaId, extraId ) VALUES (1, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (1, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (1, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (2, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (2, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (3, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (3, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (3, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (4, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (4, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (4, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (5, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (5, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (5, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (6, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (7, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (7, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (8, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (8, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (8, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (9, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (9, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (9, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (10, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (10, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (10, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (10, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (11, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (11, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (11, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (11, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (12, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (12, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (12, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (13, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (13, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (13, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (13, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (14, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (14, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (15, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (15, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (16, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (16, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (17, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (17, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (18, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (18, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (19, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (19, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (20, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (21, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (22, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (23, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (24, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (24, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (24, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (24, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (25, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (26, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (27, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (28, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (29, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (30, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (30, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (31, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (34, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (34, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (32, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (32, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (104, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (104, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (104, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (105, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (105, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (106, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (106, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (106, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (107, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (107, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (107, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (108, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (108, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (108, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (109, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (110, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (110, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (111, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (111, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (111, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (112, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (112, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (112, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (113, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (113, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (113, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (113, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (114, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (114, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (114, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (114, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (115, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (115, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (115, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (116, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (116, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (116, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (116, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (117, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (117, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (118, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (118, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (119, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (119, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (120, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (120, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (121, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (121, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (122, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (122, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (123, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (124, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (125, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (126, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (127, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (127, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (127, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (127, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (128, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (129, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (130, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (131, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (132, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (133, 1);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (133, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (134, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (137, 4);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (137, 3);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (135, 2);
INSERT INTO soldextars(pizzaId, extraId ) VALUES (135, 3);
