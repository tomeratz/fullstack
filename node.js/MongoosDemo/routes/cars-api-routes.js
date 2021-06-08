
const express = require('express');
const router = express.Router();

const myrepository = require('../my-repository');
//trim()  ====> cut the white tags(spaces) of a string 
// Update info of a car by its id
router.put("/:id", async (req, res) => {
    const x = await myrepository.updateCarByID((req.params.id).trim(), req.body);
    res.send(x);
});
//--------------------------------------
// Get all cars
router.get("/", async (req, res) => {
    const x = await myrepository.getAllCars();
    res.send(x);
});
//--------------------------------------
// Get info of a car by its id 
router.get("/:id", async (req, res) => {
    const x = await myrepository.getCarByID(req.params.id);
    res.send(x);
});
//--------------------------------------
// Delete a car by its id 
router.delete("/:id", async (req, res) => {
    const x = await myrepository.deleteCarByID(req.params.id);
    res.send(x);
});
//--------------------------------------
// Add a car 
router.post("/", async (req, res) => {
    console.log("---", req.body);
    const x = await myrepository.addNewCar(req.body);
    res.send(x);
});
//--------------------------------------

// בגלל שרשמנו לכל הפונקציות 
// router.pots... 
// אנחנו יכולים לייצא באמצעות השורה הבאה
module.exports = router;