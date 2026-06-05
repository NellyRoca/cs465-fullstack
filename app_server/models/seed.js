// Bring DB Connection w/ Trip Schema
const Mongoose = require('./db');
const Trip = require('./travlr');

// Reads seed data from json file
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

//delete any recors, then insert seed data
const seedDB = async () => {
    await Trip.deleteMany({});
    await Trip.insertMany(trips);
};

//Close MongoDB connection/Exit
seedDB().then(async () => {
    await Mongoose.connection.close();
    process.exit(0);
});
