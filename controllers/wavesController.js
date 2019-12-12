const wavesModel = require("../models/wavesModel");

const postWave = async (req, res, next) => {
    const wave = await wavesModel.createWave(req.body);

    res.status(201).send(JSON.stringify(wave));
}

const getWaves = async (req, res, next) => {
    const waves = await wavesModel.getWaves();

    res.status(200).send(JSON.stringify(waves));
}

module.exports = { postWave, getWaves }