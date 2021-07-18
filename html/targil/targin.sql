SELECT o.CustomerID, o.OrderDate, o.ShipVia, s.CompanyName,c.CompanyName from orders o , shippers s, customers c
WHERE o.ShipVia = 3
order by o.CustomerID


-- q1
SELECT COUNT(c.CustomerID)
from customers AS c

-- q2
SELECT COUNT(c.CustomerID)
from customers AS c
WHERE c.CompanyName LIKE 'b%'	

-- q3
SELECT DISTINCT(c.City),COUNT(*) as total from customerg AS c  
GROUP BY c.City 
ORDER BY `c`.`City`  DESC

-- q4
SELECT MONTH(e.BirthDate),COUNT(*) from employees e
GROUP by MONTH(e.BirthDate)

SELECT e.LastName from employees e
WHERE MONTH(e.BirthDate) = 7


-- q5
SELECT o.ShipCountry, count(*) as CountOrders from orders o
GROUP BY o.ShipCountry
order by CountOrders DESC
LIMIT 3

-- q6
SELECT e.EmployeeID,e.LastName,e.FirstName,e.BirthDate,e.City,e.ReportsTo from employees e

-- q7
SELECT products.ProductName, od.Quantity*od.UnitPrice as total from `order details` as od 
INNER JOIN products on products.ProductID = od.ProductID
GROUP BY products.ProductName
order by total DESC
limit 5

-- q8
SELECT AVG(Total_sales) from (SELECT od.OrderID,SUM(od.Quantity*od.UnitPrice) as Total_sales from `order details` as od GROUP by od.OrderID  
ORDER BY `Total_sales`  DESC) as sp

--q9
SELECT products.ProductID,products.ProductName,suppliers.CompanyName as "Supplier name",categories.CategoryName as Product_Category 
FROM products INNER JOIN categories ON categories.CategoryID = products.CategoryID
INNER JOIN suppliers WHERE suppliers.SupplierID = products.SupplierID
ORDER BY products.CategoryID