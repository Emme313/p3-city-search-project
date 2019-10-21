const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// mongoose.Promise = Promise;
const citiesRoutes = express.Router();
const PORT = 4000;

let theCities = require("./models/Cities");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/cities", {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once("open", function() {
    console.log("MongoDB database connection established successfully.");
})

// Endpoints
citiesRoutes.route("/")

// Router
app.use("/cities", citiesRoutes);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});