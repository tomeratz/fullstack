const express = require('express');
const app = express();

// This is needed to parse info which comes in the body of the request
//   the first is for body with json , 
//     the second is for body that came from a submition of a form by a browser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Let express know we have more files with code to handle more routes
const carsApiRoutes = require('./routes/cars-api-routes');
app.use('/api/cars', carsApiRoutes);

// We will use a folder named 'public' in our project to serve our 'publicly available' files
app.use(express.static("public"));

const port = process.env.PORT || 5051;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});