const pool = require('../config');

const createWave = async (wave) => {
    const waveQuery = `INSERT INTO
    wave(ref, party, id_employee)
    VALUES($1, $2, $3)
    returning *`;

    const values = [
        wave.ref,
        wave.party,
        wave.id_employee
    ];

    const { rows } = await pool.query(waveQuery, values);

    return rows;
}

module.exports = { createWave }