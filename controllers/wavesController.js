const wavesModel = require("../models/wavesModel");

const postWave = async (req, res, next) => {
    const wave = await wavesModel.createWave(req.body);

    res.status(201).send(JSON.stringify(wave));
}

module.exports = { postWave }