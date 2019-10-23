const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const citiesController = require("./controllers/cities")


const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
  }

app.use(cors());
app.use(bodyParser.json());

app.use('/', cors(corsOptions), citiesController);


// app.listen(4000, () => {
//     console.log("We are connected.");
// });

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`PORT: ${app.get("port")}`);
});