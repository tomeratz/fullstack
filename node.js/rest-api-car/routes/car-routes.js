
const express = require('express');
const router = express.Router();
const myrepository = require('../my-repository');

/// Routing
router.get('/', async (req, res) => {
    res.send(await myrepository.getAllCars());
});

router.get('/:id', async (req, res) => {
    // console.log(req.params.id);
    res.send(await myrepository.getCarById(req.params.id));
});

router.put('/:id', async (req, res) => {
    // console.log('router.js id:' + req.params.id);
    res.send(await myrepository.updateCarById(req.params.id, req.body));
});

router.delete('/:id', async (req, res) => {
    // console.log(req.params.id);
    res.send(await myrepository.deleteCarById(req.params.id));
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const x = await myrepository.addNewCar(req.body)
    res.send(x);
});

module.exports = router;