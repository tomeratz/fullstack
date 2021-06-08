//Require

const mongoose = require('mongoose');
var url = `mongodb+srv://${process.env.USERNAMEATLAS}:${process.env.PASSWORDATLAS}@cluster0.73pfz.mongodb.net/CarsDb?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

    .then(() => console.log('Connected successfully to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));

console.log(url);

const carsSchema = new mongoose.Schema({
    manufacturer: String,
    model: String,
    year: {
        type: Number,
        min: 1920,
        max: 2021
    },
    plate: {
        type: String,
        required: [true, 'This is Required Field']
    },
    ownerFirstName: {
        type: String,
        required: [true, 'This is Required Field']
    },
    ownerLasttName: {
        type: String,
        required: [true, 'This is Required Field']
    }
});

// create Model from the schema we created above
// module.exports.Customer = mongoose.model('Customer', customersSchema);
module.exports.Car = mongoose.model('Car', carsSchema);
