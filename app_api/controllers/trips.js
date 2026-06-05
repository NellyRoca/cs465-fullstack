//Getting errors in this .js file, I will correct it 
//Will be different from guide but works instead

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

// GET one trip by tripCode
const tripsFindByCode = async (req, res) => {
    try {
        const q = await Model.findOne({
            tripCode: req.params.tripCode
        }).exec();

        if (!q) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }

        return res.status(200).json(q);

    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};