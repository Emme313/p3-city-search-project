const Cities = require ("../models/MVCities");
const seedData = require ("./Cities.json");

Cities.deleteMany({})
.then(() => {
    return Cities.insertMany(seedData);
})
.then(() => {
    console.log("There is seed data")
    process.exit();
});