const express = require('express');
const app = express();
// npm i mysql
//const mysql = require('mysql');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(function (req, res, next) {
    console.log(`received Request: ${req.method} , ${req.url}`);
    next();
});


const dbpool = require('mysql').createPool({
    connectionLimit: 10,
    acquireTimeout: 30000,
    waitForConnections: false,
    host: 'localhost',
    port: '3306',
    multipleStatements: true,
    user: 'tomeratz',
    password: '1234',
    database: 'pizzashop'
})

const myDoQuery = (sqlStr, valuesArr) => {
    return new Promise((resolve, reject) => {
        dbpool.getConnection((err, con) => {
            if (err) {
                console.log('error connecting.');
                reject(err)
            } else {
                console.log("New DB connection was established with ID" + con.threadId);
                con.query(sqlStr, valuesArr, (errQuery, results) => {
                    con.release();
                    if (errQuery) {
                        console.log('Error queryng database!');
                        reject(errQuery)
                    } else {
                        console.log('Successfuly querid database.');
                        resolve(results);
                    }
                });
            }
        });
    }
    )
}


//createTable();
function createTable() {
    let sql = `
        CREATE TABLE IF NOT EXISTS users1
        (id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        firstName VARCHAR(50) NULL,
        lastName VARCHAR(50) NULL,
        phone VARCHAR(50) NULL,
        email VARCHAR(50) NULL);`;
    return myDoQuery(sql, null);
}

function insertNewUser(obj) {
    let sql = "INSERT INTO users1 (firstName, lastName, phone, email) VALUES ?";

    // Watchout from SQL Injection
    //let sql2 = `INSERT INTO users1 (firstName, lastName, phone, email)
    //VALUES ${obj.firstName},${obj.lastName},${obj.phone},${obj.email} `;
    // "john","doe","052-4372416", "jd@gmail.com"; SELECT * from users1;
    // let sq3l3 = `INSERT INTO users1 (firstName, lastName, phone, email)
    // VALUES "john","doe","052-4372416", "jd@gmail.com"; DELETE from users1;
    //,${obj.lastName},${obj.phone},${obj.email} `

    var values = [[[obj.firstName, obj.lastName, obj.phone, obj.email]]];
    return myDoQuery(sql, values);
}

// insertData();
function insertData() {
    let sql = "INSERT INTO users1 (firstName, lastName, phone, email) VALUES ?";
    var values = [[
        ['John', 'Doe', '052-55555544', 'email123@gmail.com'],
        ['Jane', 'Doe', '052-55555544', 'email123@gmail.com'],
        ['Kate', 'Doe', '052-55555544', 'email123@gmail.com'],
        ['Jenny', 'Doe', '052-55555544', 'email123@gmail.com'],
        ['Graham', 'Doe', '052-55555544', 'email123@gmail.com'],
        ['Jason', 'Doe', '052-55555544', 'email123@gmail.com'],
        ['Shilla', 'Doe', '052-55555544', 'email123@gmail.com'],

    ]];
    return myDoQuery(sql, values);
}

//deleteById(2)
function deleteById(theId) {
    let sql = `DELETE FROM users1 WHERE id=?`;
    return myDoQuery(sql, theId);
}

//getAllUsers();
function getAllUsers() {
    let sql = `SELECT * FROM users1`;
    return myDoQuery(sql, null);
}

//getUserById(3);
function getUserById(theId) {
    let sql = `SELECT * FROM users1 WHERE id = ?`;
    let values = [[[theId]]]
    return myDoQuery(sql, values);
}

// ================== Routes =====================


// ADD Many
app.get('/api/users/add_many', async (req, res) => {
    console.log('inside add many');
    let y = await insertData();

    res.send(y)
})

// GET all users
app.get('/api/users', async (req, res) => {
    let y = await getAllUsers();
    res.send(y)
});

// POST new user
app.post('/api/users', async (req, res) => {
    let y = await insertNewUser(req.body);
    res.send(y)
});

// GET Create New Table
app.get('/create_table', async (req, res) => {
    let y = await createTable();
    res.send(y);
});

// POST new user
app.post('/api/users', async (req, res) => {
    let y = await insertNewUser(req.body);
    res.send(y)
});

// DELETE user by id
app.delete('/api/users/:id', async (req, res) => {
    let y = await deleteById(req.params.id);
    res.send(y);
});

// GET user by id
app.get('/api/users/:id', async (req, res) => {
    let y = await getUserById(req.params.id);
    res.send(y)
});



app.use(express.static('public'));
// =========================
var port = 3005
app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});
