const { json } = require('express');
const fs = require('fs');


function getNewId() {
    const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
    newId = data.length + 1
    return newId;
}


module.exports = {
    async getAllCars() {
        console.log('my repository getallcars');
        const data = await JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        return data;
    },
    async getCarById(theId) {
        console.log('my repository getacarbyid', theId);
        const data = await JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        const dataResutlts = await data.filter(car => car['id'] === theId)
        return dataResutlts;
    },

    async postNewCar(params) {
        const data = await JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        params.id = getNewId()
        data.push(params)
        console.log(data);
        await fs.writeFileSync('./cars.json', JSON.stringify(data))
        const Newdata = await JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        // console.log(data);
        console.log(Newdata);
        return 'New car added'
    },

    async deleteCarById(theId) {
        console.log('my repository deleteCarById', theId);
        const data = await JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        const dataResults = data.filter(car => car['id'] !== theId)
        if (dataResults.length === data.length) {
            return 'wrong id'
        } else {
            await fs.writeFileSync('./cars.json', JSON.stringify(dataResults))
            console.log(dataResults);
            return 'car was deleted';
        }

    },

    async updateCarById(params) {
        const theId = params.id
        console.log('my repository updateCarById', theId);
        const data = await JSON.parse(fs.readFileSync('./cars.json', 'utf8'))
        let dataResults = data.filter(car => car['id'] !== theId)
        if (dataResults.length === data.length) {
            return 'wrong id'
        } else {
            dataResults.push(params)
            await fs.writeFileSync('./cars.json', JSON.stringify(dataResults))
            console.log(dataResults);
            return 'car was updated';
        }

    }

}