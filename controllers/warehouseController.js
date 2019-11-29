const request = require("request");

const getWarehousesController = (req, res, next) => {
    var options = {
        headers: {
            Authorization: process.env.PRIMAVERA_TOKEN,
            "Content-Type": "application/json",
        },
        method: 'GET',
        url: `https://${process.env.PRIMAVERA_URL}/api/${process.env.PRIMAVERA_TENANT}/${process.env.PRIMAVERA_ORGANIZATION}/materialsCore/warehouses/d577175c-feeb-e911-b862-0003ff291f34`,
    };

    request(options, (error, response, body) => {
        if(error) {
            res.status(response.statusCode).send(error);
        }
        else res.status(response.statusCode).send(body);
    });
}

module.exports = { getWarehousesController }