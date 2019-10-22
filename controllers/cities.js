const express = require("express");
const router = express.Router();

const Cities = require("../models/City");


// Get list of cities
router.get("/", (req, res) => {
    // console.log(Parent);
    Cities.find({}).then(city => {
        res.json(city);
    })
});

// From show page, add comment

// From show page go to edit or delete comment route

// From Edit page, edit comment action/route

// From Edit page, delete comment action/route


// Getting children by parent
router.get('/:id/children', (req, res) => {
    Cities.findOne({ _id: req.params.id }).then(reviews => {
        res.json(reviews.children);
    })
});

// Get a single city by ID
router.get('/:id', (req, res) => {
    Cities.findOne({ _id: req.params.id }).then(city => {
        res.json(city);
    })
});

module.exports = router;