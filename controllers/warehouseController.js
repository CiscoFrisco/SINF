const request = require("request");
const warehouseModel = require("../models/warehouseModel");

const getSections = async (req, res, next) => {
    const sections = await warehouseModel.getSections();
    sections.forEach((section) => section.items = []);
    sections.push({
        id: 0,
        warehouse: "other",
        items: []
    });

    const productSections = await warehouseModel.getProductSections();

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

        JSON.parse(body).forEach((element) => {
            let sectionID;

            productSections.forEach((section) => {
                if(section.id === element.itemKey)
                    sectionID = section.section_id;
            });

            if(!sectionID)
                sectionID = 0;

            sections.forEach((section) => {
                if(section.id == sectionID)
                    section.items.push({
                        id: element.itemKey,
                        name: element.description,
                        quantity: element.materialsItemWarehouses[0].stockBalance,
                    });
            })
        });

        res.status(response.statusCode).send(JSON.stringify(sections));
    });
}

module.exports = { getSections }