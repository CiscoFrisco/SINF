const request = require("request");

let pageIndex = 1;
const pageSize = 1000;
const company = "SLGBA";

const getIncoming = (req, res, next) => {
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/goodsReceipt/processOrders/${pageIndex}/${pageSize}?company=${company}`,
    };

    request(options, (error, response, body) => {
        if(error) {
            res.status(response.statusCode).send(error);
        }

        let incomingOrders = [];

        JSON.parse(body).forEach((element) => incomingOrders.push(element.sourceDocKey));
        
        res.status(response.statusCode).send(JSON.stringify(incomingOrders));
    });
}

const getDelivery = (req, res, next) => {
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/shipping/processOrders/${pageIndex}/${pageSize}?company=${company}`,
    };

    request(options, (error, response, body) => {
        if(error) {
            res.status(response.statusCode).send(error);
        }

        let incomingDeliveries = [];

        JSON.parse(body).forEach((element) => incomingDeliveries.push(element.sourceDocKey));
        
        res.status(response.statusCode).send(JSON.stringify(incomingDeliveries));
    });
}

module.exports = { getIncoming, getDelivery }