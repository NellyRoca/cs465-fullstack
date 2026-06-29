const mongoose = require('mongoose');
require('../models/travlr');

const Model = mongoose.model('trips');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const q = await Model.find({}).exec();
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// GET one trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const q = await Model.findOne({
      code: req.params.tripCode
    }).exec();

    if (!q) {
      return res.status(404).json({ message: 'Trip not found' });
    }

    return res.status(200).json(q);

  } catch (err) {
    return res.status(500).json(err);
  }
};

// ADD trip
const tripsAddTrip = async (req, res) => {
  try {
    const newTrip = new Model({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    const q = await newTrip.save();
    return res.status(201).json(q);

  } catch (err) {
    return res.status(400).json({
      message: 'Failed to create trip',
      error: err
    });
  }
};

// UPDATE trip
const tripsUpdateTrip = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);

    const q = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true }
    ).exec();

    if (!q) {
      return res.status(404).json({
        message: 'Trip not found'
      });
    }

    return res.status(200).json(q);

  } catch (err) {
    return res.status(500).json({
      message: 'Update failed',
      error: err
    });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode,
  tripsAddTrip,
  tripsUpdateTrip
};