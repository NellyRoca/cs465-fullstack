var express = require('express');
var router = express.Router();
var controller = require('../controllers/travel');
var fs = require('fs');
var trips = JSON.parse(fs.readFileSync('./data/trips.json','utf8'));

/* GET travel page. */
router.get('/', controller.travel);

module.exports = router;
