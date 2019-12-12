const pool = require('../config');

const createWave = async (wave) => {
    const waveQuery = `INSERT INTO
    wave(ref, party, id_employee)
    VALUES($1, $2, $3)
    returning *`;

    let values = [
        wave.ref,
        wave.party,
        wave.id_employee
    ];

    const { rows } = await pool.query(waveQuery, values);
    const waveRows = rows;
    const waveId = rows[0].id;

    const waveItemsQuery = `INSERT INTO
    waveItem(id, quantity, wave_id)
    VALUES($1, $2, $3)
    returning *`;

    const items = [];

    for(let i = 0; i < wave.waveItems.length; i++) {
        const item = wave.waveItems[i];
        values = [
            item.id,
            item.quantity,
            waveId
        ];

        const { rows } = await pool.query(waveItemsQuery, values);
        items.push(rows[0]);
    }

    return {
        wave: waveRows,
        waveItems: items
    };
}

module.exports = { createWave }