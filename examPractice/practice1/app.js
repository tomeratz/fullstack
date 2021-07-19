const express = require('express');
const app = express();
const carRoutes = require('./routes/carRoutes')
const mongoose = require('mongoose')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/cars", carRoutes);
app.use(express.static('public'));
//=========================
const port = process.env.PORT || 4000;

app.listen(port, function () {
    console.log(`My app is listening on port ${port}!`);
});