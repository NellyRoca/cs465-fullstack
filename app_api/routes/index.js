const express = require('express');
const router = express.Router();
const cors = require('cors');

router.use(cors());

const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');
const auth = require('../config/authentication');

// TEST
router.get('/test', (req, res) => {
  res.json({ status: "API working" });
});

// AUTH
router.post('/register', authController.register);
router.post('/login', authController.login);

// PUBLIC
router.get('/trips', tripsController.tripsList);
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

// PROTECTED
router.post('/trips', auth, tripsController.tripsAddTrip);
router.put('/trips/:tripCode', auth, tripsController.tripsUpdateTrip);

module.exports = router;