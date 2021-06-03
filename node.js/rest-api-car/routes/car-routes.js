
const express = require('express');
const router = express.Router();
const myrepository = require('../my-repository');

/// Routing
router.get('/', function (req, res) {
    res.send(myrepository.getAllCars());
});

router.get('/:id', function (req, res) {
    // console.log(req.params.id);
    res.send(myrepository.getCarById(req.params.id));
});

router.put('/:id', function (req, res) {
    // console.log('router.js id:' + req.params.id);
    res.send(myrepository.updateCarById(req.params.id, req.body));
});

router.delete('/:id', function (req, res) {
    console.log(req.params.id);
    res.send(myrepository.deleteCarById(req.params.id));
});

router.post('/', function (req, res) {
    console.log(req.body);
    res.send(myrepository.addNewCar(req.body));
});

module.exports = router;