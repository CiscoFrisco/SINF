const wavesModel = require("../models/wavesModel");
const request = require("request");

let pageIndex = 1;
const pageSize = 1000;
const company = "SLGBA";

const postWave = async (req, res, next) => {
    const wave = await wavesModel.createWave(req.body);

    res.status(201).send(JSON.stringify(wave));
}

const checkWave = async (req, res, next) => {
    const wave = await wavesModel.checkWave(req.body);

    res.status(200).send(JSON.stringify(wave));
}

const generateGoodsReceiptorDelivery = (req, res, next, wave) => {
    const type = wave.includes("ECF") ? "goodsReceipt/processOrders" : "shipping/processOrders"

    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/${type}/${pageIndex}/${pageSize}?company=${company}`,
    };

    request(options, (error, response, body) => {
        if (error) {
            res.status(response.statusCode).send(error);
        }

        const requestBody = [];

        JSON.parse(body).forEach((line) => {
            if (line.sourceDocKey === wave) {
                requestBody.push({
                    SourceDocKey: line.sourceDocKey,
                    SourceDocLineNumber: line.sourceDocLineNumber,
                    quantity: line.quantity
                });
            }
        });

        options = {
            headers: {
                Authorization: process.env.PRIMAVERA_TOKEN,
                "Content-Type": "application/json",
            },
            method: 'POST',
            url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/${type}/${company}`,
            body: requestBody,
            json: true
        }

        request(options, (error, response, body) => {
            if (error) {
                res.status(500).send(error);
            }

            res.status(200).send(requestBody);
        });
    });
}

const completeWave = async (req, res, next) => {
    const wave = await wavesModel.completeWave(req.body);

    generateGoodsReceiptorDelivery(req, res, next, wave[0].ref);
}

const getWaves = async (req, res, next) => {
    const waves = await wavesModel.getWaves();
    
    res.status(200).send(JSON.stringify(waves));
}

module.exports = { postWave, checkWave, completeWave, getWaves }