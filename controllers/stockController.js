const request = require("request");
const { getProductSections } = require("../models/warehouseModel");

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

const getStock = async (req, res, next) => {
    const productSections = await getProductSections();
    console.log(productSections);
    console.log(productSections.find(section => section.id === 'AAA'));
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/materialscore/materialsitems`,
    };

    request(options, (error, response, body) => {
        if(error) {
            res.status(response.statusCode).send(error);
        }

        let stock = [];

        JSON.parse(body).forEach((element) => {
            stock.push({
                id: element.itemKey,
                name: element.description,
                quantity: element.materialsItemWarehouses[0].stockBalance,
                section: productSections.find(section => section.id === element.itemKey) ? 
                productSections.find(section => section.id === element.itemKey).section_id :
                null
            });
        });
        
        console.log(stock);
        res.status(response.statusCode).send(JSON.stringify(stock));
    });
}

module.exports = { getIncoming, getDelivery, getStock }