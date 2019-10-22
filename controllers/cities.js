const express = require("express");
const router = express.Router();

const Cities = require("../models/City");

// Get list of cities
router.get("/", (req, res) => {
  // console.log(Parent);
  Cities.find({}).then(city => {
    res.json(city);
  });
});

// From show page, add comment
router.put("/:city", (req, res) => {
  // Cities.findOne({ city: req.params.city }).then(city => {
  //     city.reviews.push(req.body.reviews)
  //     city.save()
  //     res.send(200)
  //     console.log(city);
  // })
  // console.log("test");
  Cities.findOneAndUpdate(
    { city: req.params.city },
    {
      $push: { reviews: req.body.reviews }
    }
  ).then(() => res.send(200));
});

// From show page go to edit or delete comment route

// From Edit page, edit comment action/route

// From Edit page, delete comment action/route

// Getting children by parent
router.get("/:city/reviews", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(reviews => {
    res.json(reviews.reviews);
  });
});

// Get a single city by city name (show page)
router.get("/:city", (req, res) => {
  Cities.findOne({ city: req.params.city }).then(city => {
    res.json(city);
  });
});

module.exports = router;
