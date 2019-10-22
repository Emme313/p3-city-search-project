const express = require("express");
const router = express.Router();

// const Cities = require("../models/Cities");
// const Reviews = require("../models/Review");

const Parent = require("../models/MVCities");
// const MVReviews = require("../models/MVCities");
const Children = Parent.children;


// Get list of cities
router.get("/", (req, res) => {
    console.log(Parent);
    Parent.find({}).then(city => {
        res.json(city);
    })
});

// Getting children by parent
router.get('/:id/children', (req, res) => {
    Parent.findOne({ _id: req.params.id }).then(reviews => {
        res.json(reviews.children);
    })
});

// router.get('/children/:id/', (req, res) => {
//     Children.findOne({ _id: req.params.id}).then(review => {
//         res.json(review);
//     })
// });

// Get a single city by ID
router.get('/:id', (req, res) => {
    Parent.findOne({ _id: req.params.id }).then(city => {
        res.json(city);
    })
});

module.exports = router;