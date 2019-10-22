const Cities = require ("../models/Cities");
const seedData = require ("./Cities.json");

Cities.deleteMany({})
.then(() => {
    return Cities.insertMany(seedData);
})
.then(() => {
    console.log("There is seed data")
    process.exit();
});