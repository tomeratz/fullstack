
const express = require('express');
const app = express();
const mysql = require('mysql');
const fs = require('fs');

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
    database: 'priority'
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
                        console.log('Error queryng database!', errQuery);
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

async function insertData(req, res, next) {
    let sql = `INSERT INTO orders (${req[0]})  VALUES (${req.shift()})`;
    var values = [[
        req
    ]];
    return await myDoQuery(sql, values);
}

async function json2sql(req, res, next) {
    var sourceFile = './orders.json'
    var data = fs.readFileSync(sourceFile)
    var xlData = JSON.parse(data)

    let sql = `SELECT * FROM OPENJSON ('./orders.json')`;
    var values = [[
        req
    ]];
    return await myDoQuery(sql, values);
}

module.exports = { insertData, json2sql }