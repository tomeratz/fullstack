// const rentalModels = require('./models/rentalModels');
// const Car = rentalModels.Car;
// שתי השורות האלה יוצרות הגדרות לדאטה בייס שיושבות בקובץ rentalModels.js


const rentalModels = require('./models/rentalModels');
ObjectId = require('mongodb').ObjectID;

const Car = rentalModels.Car;
const Customer = rentalModels.Customer;




// Update info of a car by its id
const updateCarByID = async (carID, carInfo) => {
    const x = await Car.updateOne({ _id: carID }, carInfo);
    console.log("updateCarByID x:" + x);
    // updateOne ===> update the first record it finds
    console.log(`updateCarByID ${JSON.stringify(x)}`);
    return JSON.stringify(x);
};
module.exports.updateCarByID = updateCarByID;
//------------------------------------------
// Get all cars
const getAllCars = async () => {
    const x = await Car.find();
    console.log("getAllCars x:" + x)
    console.log(`getAllCars ${JSON.stringify(x)}`);
    return JSON.parse(JSON.stringify(x));
};
module.exports.getAllCars = getAllCars;
//------------------------------------------
// Get info of a car by its id
const getCarByID = async (theID) => {
    const x = await Car.findOne({ _id: theID });
    console.log("getCarByID x:" + x)

    console.log(`getCarByID ${JSON.stringify(x)}`);
    return x;
};
module.exports.getCarByID = getCarByID;
//------------------------------------------
// Delete a car by its id
const deleteCarByID = async (theID) => {
    const x = await Car.deleteOne({ _id: theID });
    console.log("deleteCarByID x:" + x)
    // deleteOne() ===> delete the first record it finds
    console.log(`deleteCarByID ${JSON.stringify(x)}`);
    return (`deleted ${x.n} documents`);
};
module.exports.deleteCarByID = deleteCarByID;
//------------------------------------------
// Add a car
const addNewCar = async (carInfo) => {
    console.log("--", JSON.stringify(carInfo));
    const newCar = new Car(carInfo);
    // const newCustomer = new Customer({ name: 'kate', dl: 'abc123' });
    // const y = await newCustomer.save();
    // newCar.renter = y;
    const x = await newCar.save();
    console.log(`addNewCar ${JSON.stringify(x)}`);
    return (`added new car with id ${x._id}`);
};
module.exports.addNewCar = addNewCar;
//------------------------------------------