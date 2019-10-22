const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MvReviewSchema = Schema({
    name: String,
    comment: String,
    city: [
        {
            type: Schema.Types.ObjectId,
            ref: "MVCities"
        }
    ]
});

const MVReviews = mongoose.model("MVReviews", MvReviewSchema)

module.exports = MVReviews;
