const { Router } = require('express');
const express = require('express');
const app = express();
const router = express.Router()

// npm i mysql






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
app.get('/sql/users/add_many', async (req, res) => {
    console.log('inside add many');
    let y = await insertData();

    res.send(y)
})

// GET all users
app.get('/sql/users', async (req, res) => {
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

module.exports = router

