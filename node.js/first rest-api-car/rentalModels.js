// npm i mongoose

const mongoose = require('mongoose');
var url = 'mongodb+srv://Admin:Ta123456@cluster0.5en42.mongodb.net/DBNAME?retryWrites=true&w=majority';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
 .then(() => console.log('Connected successfully to MongoDB!'))
 .catch(err => console.error('Something went wrong', err));

// dates
// https://mongoosejs.com/docs/tutorials/dates.html
// https://masteringjs.io/tutorials/mongoose/timestamps

//
// Reference Based Relationships (Normalization) discouraged in MongoDB
//VS
//Embedded Documents Relationships(Denormalization)
//--------
// let person = {
//  id: '3838452',
//  name:'John'
// }
// let car = {
//  ownerId: '3838452' // this is referencing
// }
//--------
// let car = {
//    person:{        // this is embedding
//      id: '3838452',
//      name:'John'
//    }
// }
//
// more explanation:
// https://mongoosejs.com/docs/populate.html
// https://zellwk.com/blog/mongoose-population/
//-----------------------------------------
// Types and restrictions
// eggs: {
//     type: Number,
//     min: [6, 'Too few eggs'],
//     max: 12
//   },
//   bacon: {
//     type: Number,
//     required: [true, 'Why no bacon?']
//   },
//-----------------------------------------

//  Defining schema for a customer
const customersSchema = new mongoose.Schema({
 name: String,
 dl: String
});


//  Defining schema for a car
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
 required: [true, 'the plate value is required']
 },
 // renter: {
 //     type: mongoose.Schema.Types.ObjectId,
 //     ref: 'Customer'
 // },
 person: {
 name: { type: String },
 dl: { type: String }
 }
});

// create Model from the schema we created above
module.exports.Customer = mongoose.model('Customer', customersSchema);
module.exports.Car = mongoose.model('Car', carsSchema);