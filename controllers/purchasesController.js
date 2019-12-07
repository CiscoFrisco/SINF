const request = require("request");
let incomingOrders = [];

const getRequests = (req, res, next) => {
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
                if (!element.isDeleted && !element.naturalKey.includes("SYS") && incomingOrders.includes(element.naturalKey)) {
                    const order = {
                        id: element.naturalKey,
                        name: element.sellerSupplierPartyName,
                        date: element.unloadingDateTime,
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
                        date: element.unloadingDateTime,
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

module.exports = { getRequests, getDelivered }