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
        if (error) {
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
        if (error) {
            res.status(response.statusCode).send(error);
        }

        let incomingDeliveries = [];

        JSON.parse(body).forEach((element) => incomingDeliveries.push(element.sourceDocKey));

        res.status(response.statusCode).send(JSON.stringify(incomingDeliveries));
    });
}

const getStock = async (req, res, next) => {
    const productSections = await getProductSections();
    var options = {
        method: 'GET',
        url: `${req.protocol}://${req.get('host')}/api/purchases/requests`,
    };

    request(options, (error, response, body) => {
        incomingOrders = JSON.parse(body);

        var options = {
            method: 'GET',
            url: `${req.protocol}://${req.get('host')}/api/sales/orders`,
        };

        request(options, (error, response, body) => {
            deliveryOrders = JSON.parse(body);

            var options = {
                headers: {
                    Authorization: process.env.PRIMAVERA_TOKEN,
                    "Content-Type": "application/json",
                },
                method: 'GET',
                url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/materialscore/materialsitems`,
            };

            request(options, (error, response, body) => {
                incomingOrders = incomingOrders.filter(x => new Date(x.date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));
                deliveryOrders = deliveryOrders.filter(x => new Date(x.date).setHours(0, 0, 0, 0) >= new Date().setHours(0, 0, 0, 0));

                if (error) {
                    res.status(response.statusCode).send(error);
                }

                let stock = [];

                JSON.parse(body).forEach((element) => {
                    var balance = 0;

                    incomingOrders.forEach(order => {
                        order.productList.forEach(product => {
                            if (product.name == element.description)
                                balance += product.quantity;
                        });
                    });

                    deliveryOrders.forEach(order => {
                        order.productList.forEach(product => {
                            if (product.name == element.description)
                                balance -= product.quantity;
                        });
                    });

                    stock.push({
                        id: element.itemKey,
                        name: element.description,
                        quantity: element.materialsItemWarehouses[0].stockBalance,
                        danger: (element.materialsItemWarehouses[0].stockBalance + balance < 0 ? "true" : "false"),
                        section: productSections.find(section => section.id === element.itemKey) ?
                            productSections.find(section => section.id === element.itemKey).section_id :
                            null
                    });
                });

                res.status(response.statusCode).send(JSON.stringify(stock));

            });
        });
    });

}

module.exports = { getIncoming, getDelivery, getStock }