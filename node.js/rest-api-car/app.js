//Require
const express = require('express');
const app = express();
const carsRoutes = require('./routes/car-routes');




// var fs = require('fs');
// var path = require('path');

//Uses
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.use('/api/cars', carsRoutes);
app.use(express.static('public'));
//=========================
const port = process.env.PORT || 5055;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
