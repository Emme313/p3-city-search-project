const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:4000")

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});