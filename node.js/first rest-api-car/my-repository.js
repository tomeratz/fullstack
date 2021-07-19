// const { Console } = require('console');
const fs = require('fs');
// const { parse } = require('path');
const ShortUniqueId = require('short-unique-id');
const ObjectId = require('mongodb').ObjectID;
const mongoose = require('mongoose');



function newUID() {
    const uid = new ShortUniqueId();
    const uidWithTimestamp = uid.stamp(24);
    // console.log(uidWithTimestamp);
    return uidWithTimestamp
}

function newOwnerUID() {
    const uid = new ShortUniqueId();
    uid.setDictionary('number');
    const uidWithTimestamp = uid.stamp(10);
    // console.log(uidWithTimestamp);
    return uidWithTimestamp
}

module.exports = {

    async getAllCars() {
        const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        // const data = await MyModel.find({});
        return data
    },

    getCarById(theId) {
        const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        const result = data.filter(car => car["_id"] === theId)
        return result
    },

    deleteCarById(theId) {
        const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        const result = data.filter(car => car["_id"] !== theId)
        if (result.length === data.length) {

            return 'Id incoreect'
        } else {
            fs.writeFileSync('./cars.json', JSON.stringify(result))

            return ` ${theId} car deteted successfuly!`
        }

    },

    addNewCar(carInfo) {
        console.log(carInfo);
        const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        let newID = newUID();
        console.log(newID);
        const idCeckData = data.filter(car => car["_id"] === newID);
        var idCeckDataLength = idCeckData.length
        console.log(idCeckData.length);

        while (idCeckDataLength > 0) {
            newID = newUID();
            // console.log(newID);
            idCeckData1 = data.filter(car => car["_id"] === newID);
            idCeckDataLength = idCeckData1.length
            console.log('length: ' + idCeckDataLength);
        }

        var newOwnerId = newOwnerUID();
        const idCeckData2 = data.filter(car => car["ownerID"] === newOwnerId);
        idCeckDataLength = idCeckData2.length
        console.log(idCeckDataLength);

        while (idCeckDataLength > 0) {
            newOwnerId = newOwnerUID();
            console.log(newOwnerId);
            var idCeckData3 = data.filter(car => car["ownerID"] === newOwnerId);
            idCeckDataLength = idCeckData3.length
            console.log(idCeckDataLength);
        }
        console.log(carInfo);
        carInfo["_id"] = newID
        carInfo["ownerID"] = newOwnerId

        data.push(carInfo)
        fs.writeFileSync('./cars.json', JSON.stringify(data))

        return `New car updated successfuly!`
    },

    updateCarById(theId, carInfo) {
        const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        const result = data.filter(car => car["_id"] !== theId)
        console.log(result.length);

        if (result.length === data.length) {
            return 'error - Couldent find the ID '
        } else {
            result.push(carInfo)
            fs.writeFileSync('./cars.json', JSON.stringify(result))

            return 'The info was successfuly updated'
        }
    }
};




