const utils = require('../utils');
const { pool } = require('../config');

const getEmployees = () => {
    return {
        "ola": "bom dia"
    };
}

const signup = async (email, password) => {
    const createQuery = `INSERT INTO
      employee(email, password)
      VALUES($1, $2)
      returning *`;
    const values = [
        email,
        password
    ];

    const { rows } = await pool.query(createQuery, values);
    const token = utils.generateToken(rows[0].id);
    return token;
}

module.exports = { getEmployees, signup }