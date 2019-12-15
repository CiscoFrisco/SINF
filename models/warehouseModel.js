const pool = require('../config');

const getProductSections = async () => {
    const query = `SELECT id, section_id
      FROM product`;

    const res = await pool.query(query);

    return res["rows"];
}

const getSections = async () => {
    const query = `SELECT id, warehouse, x, y
    FROM section`;

    const res = await pool.query(query);

    return res["rows"];
}

module.exports = { getProductSections, getSections }