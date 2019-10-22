const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    name: String,
    comment: String,
    reviews: [
        {
            ref: "Cities",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
});

const theReviews = mongoose.model("theReviews", reviewSchema)

module.exports = theReviews;
