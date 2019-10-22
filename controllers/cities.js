const express = require("express");
const router = express.Router();

const Cities = require("../models/Cities");

// Get list of cities
router.get("/", (req, res) => {
    Cities.find({}).then(city => {
        res.json(city)
    })
});

// Get a single city by ID
router.get('/:id', (req, res) => {
    Cities.findOne({_id: req.params.id}).then(city => {
        res.json(city);
    })
})


module.exports = router;