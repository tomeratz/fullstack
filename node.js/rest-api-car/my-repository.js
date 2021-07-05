const rentalModels = require('./models/rentalModels');
const ObjectId = require('mongodb').ObjectID;
// const { Console } = require('console');
// const { parse } = require('path');

const Car = rentalModels.Car

module.exports = {

    async getAllCars() {
        const data = await Car.find({});
        // console.log('getAllCars data: ' + JSON.stringify(data));
        return data;
    },

    async getCarById(theId) {
        // const data = await Car.find({});
        const result = await Car.findOne({ _id: theId });
        console.log('result' + result);
        return `success getCarById  ${result}`;
    },

    async deleteCarById(theId) {
        const result = await Car.deleteOne({ _id: theId });
        console.log('deteted successfuly id ' + theId);
        return ` ${theId} car deteted successfuly!`;
    },

    async addNewCar(carInfo) {
        console.log(carInfo);
        const data = new Car(carInfo);
        const result = await data.save();
        console.log('result' + result);
        return (`New car updated successfuly!` + result._id);
    },

    async updateCarById(theId, carInfo) {
        console.log('carinfo: ' + theId + carInfo);
        const result = await Car.updateOne({ _id: theId }, carInfo);
        console.log('updated' + carInfo);
        return ('The info was successfuly updated' + (carInfo));
    }
};




