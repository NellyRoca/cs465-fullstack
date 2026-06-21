const express = require('express'); // Express App
const router = express.Router(); // Router logic
var cors = require('cors');
router.use(cors());

// Importing controllers to route
const tripsController = require("../controllers/trips");

// Define route for trips endpoint
router
    .route('/trips')
    .get(tripsController.tripsList); // GET Method routes tripList

// GET Method routes tripsFindByCode - requires parameter
router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode);

module.exports = router;