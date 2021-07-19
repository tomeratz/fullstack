const express = require('express');
const router = express.Router();
const myCarRepository = require('../repositories/cars-db-helper');

router.get('/', (req, res) => {
    console.log('get all cars');
    res.status(204).send(myCarRepository.getAllCars());
});

router.get('/:id', (req, res) => {
    console.log('get car by id')
    res.status(204).send(myCarRepository.getCarById(req.params.id));
})

router.post('/', (req, res) => {
    console.log('add new car', req.body)
    res.status(204).send(myCarRepository.postNewCar(req.body));
})

router.delete('/:id', (req, res) => {
    console.log('delete car by id', req.params.id)
    res.status(204).send(myCarRepository.deleteCarById(req.params.id));
})

router.put('/', (req, res) => {
    console.log('update car by id', req.body)
    res.status(204).send(myCarRepository.updateCarById(req.body));
})

module.exports = router;