const wavesModel = require("../models/wavesModel");
const request = require("request");
let incomingOrders = [];

const getRequests = async (req, res, next) => {
    const waves = await wavesModel.getWaves();

    var options = {
        method: 'GET',
        url: `${req.protocol}://${req.get('host')}/api/stock/incoming`,
    };

    request(options, (error, response, body) => {
        incomingOrders = JSON.parse(body);

        options = {
            headers: {
                Authorization: process.env.PRIMAVERA_TOKEN,
                "Content-Type": "application/json",
            },
            method: 'GET',
            url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/purchases/orders`,
        };

        request(options, (error, response, body) => {
            if (error) {
                res.status(response.statusCode).send(error);
            }

            const orders = [];

            JSON.parse(body).forEach((element) => {
                let found = false;

                waves.forEach((wave) => {
                    if(wave.ref === element.naturalKey)
                        found = true;
                })

                if (!element.isDeleted && !element.naturalKey.includes("SYS") && incomingOrders.includes(element.naturalKey)) {
                    const order = {
                        id: element.naturalKey,
                        name: element.sellerSupplierPartyName,
                        date: element.postingDate,
                        wave: found,
                        productList: [],
                    };

                    element.documentLines.forEach((line) => {
                        order.productList.push({
                            id: line.purchasesItem,
                            name: line.description,
                            quantity: line.quantity,
                        });
                    })

                    orders.push(order);
                }
            });

            res.status(response.statusCode).send(JSON.stringify(orders));
        });
    });
}

const getDelivered = (req, res, next) => {
    var options = {
        method: 'GET',
        url: `${req.protocol}://${req.get('host')}/api/stock/incoming`,
    };

    request(options, (error, response, body) => {
        incomingOrders = JSON.parse(body);

        options = {
            headers: {
                Authorization: process.env.PRIMAVERA_TOKEN,
                "Content-Type": "application/json",
            },
            method: 'GET',
            url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/purchases/orders`,
        };

        request(options, (error, response, body) => {
            if (error) {
                res.status(response.statusCode).send(error);
            }

            const orders = [];

            JSON.parse(body).forEach((element) => {
                if (!element.isDeleted && !element.naturalKey.includes("SYS") && !incomingOrders.includes(element.naturalKey)) {
                    const order = {
                        id: element.naturalKey,
                        name: element.sellerSupplierPartyName,
                        date: element.postingDate,
                        productList: [],
                    };

                    element.documentLines.forEach((line) => {
                        order.productList.push({
                            id: line.purchasesItem,
                            name: line.description,
                            quantity: line.quantity,
                        });
                    })

                    orders.push(order);
                }
            });

            res.status(response.statusCode).send(JSON.stringify(orders));
        });
    });
}

const getSuppliers = (req, res, next) => {
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/purchasesCore/supplierParties/
        `,
    };

    request(options, (error, response, body) => {
        if(error) {
            res.status(response.statusCode).send(error);
        }

        let suppliers = [];

        JSON.parse(body).forEach((element) => suppliers.push({
            id: element.partyKey,
            name: element.name
        }));
        res.status(response.statusCode).send(JSON.stringify([...new Set(suppliers)]));
    });
}

const getItems = (req, res, next) => {
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/businessCore/items
        `,
    };

    request(options, (error, response, body) => {
        if(error) {
            res.status(response.statusCode).send(error);
        }

        let items = [];

        JSON.parse(body).forEach((element) => items.push(element));
        res.status(response.statusCode).send(JSON.stringify([...new Set(items)]));
    });
}

const postOrder = (req, res, next) => {
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'POST',
        json: true,
        body: req.body,
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/purchases/orders
        `,
    };

    request(options, (error, response, body) => {
        console.log(response.statusCode);
        if(error) {
            res.status(response.statusCode).send(error);
        }

        res.status(response.statusCode).send(response);
    });
}

module.exports = { getRequests, getDelivered, getSuppliers, getItems, postOrder }