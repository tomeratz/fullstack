//Require
const express = require('express');
const app = express();
const carsRoutes = require('./routes/car-routes');
const mongoose = require('mongoose');

var url = `mongodb+srv://${process.env.USERNAMEATLAS}:${process.env.PASSWORDATLAS}@cluster0.73pfz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

 .then(() => console.log('Connected successfully to MongoDB!'))
 .catch(err => console.error('Something went wrong', err));

 console.log(url);
// var fs = require('fs');
// var path = require('path');

//Uses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/cars', carsRoutes);
app.use(express.static('public'));
//=========================
const port = process.env.PORT || 5050;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
