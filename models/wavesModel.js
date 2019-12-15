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
    waveItem(id, prodName, quantity, wave_id, section_id)
    VALUES($1, $2, $3, $4, $5)
    returning *`;

    const items = [];

    for (let i = 0; i < wave.waveItems.length; i++) {
        const item = wave.waveItems[i];
        values = [
            item.id,
            item.name,
            item.quantity,
            waveId,
            item.section
        ];

        const { rows } = await pool.query(waveItemsQuery, values);
        items.push(rows[0]);
    }

    return {
        wave: waveRows,
        waveItems: items
    };
}

const getSortedProductList = async (waveID, lastProduct) => {
    const query = `SELECT *
    FROM waveItem
    WHERE wave_id = $1
    ORDER BY completed`;

    const values = [
        waveID
    ];

    const { rows } = await pool.query(query, values);

    const productList = [];

    rows.forEach((row) => {
        productList.push({
            id: row.id,
            name: row.prodname,
            quantity: row.quantity,
            section: row.section,
            completed: row.completed
        });
    });

    return productList;
}

const checkWave = async (wave) => {
    const query = `UPDATE waveItem
      SET completed = $3
      WHERE wave_id = $1
      AND id = $2
      RETURNING *`;

    const values = [
        wave.id,
        wave.item_id,
        !wave.completed
    ];

    await pool.query(query, values);

    return await getSortedProductList(wave.id, wave.item_id);
}

const completeWave = async (wave) => {
    const query = `UPDATE wave
      SET completed = true
      WHERE id = $1
      RETURNING *`;

    const values = [
        wave.id,
    ];

    const { rows } = await pool.query(query, values);

    return rows;
}

const getWaves = async () => {
    const query = `SELECT *
      FROM wave, waveItem
      WHERE wave.id = waveItem.wave_id AND wave.completed <> true`;

    const { rows } = await pool.query(query);

    const waves = [];

    rows.forEach((row) => {
        let found = false;

        waves.forEach((wave) => {
            if(wave.wave_id === row.wave_id) {
                found = true;
                wave.productList.push({
                    id: row.id,
                    name: row.prodname,
                    quantity: row.quantity,
                    section: row.section,
                    completed: row.completed
                });
            }
        })

        if(!found)
            waves.push({
                wave_id: row.wave_id,
                id_employee: row.id_employee,
                ref: row.ref,
                type: row.ref.includes("ECF") ? "Request" : "Order",
                productList: [{
                    id: row.id,
                    name: row.prodname,
                    quantity: row.quantity,
                    section: row.section,
                    completed: row.completed
                }]
            })
    })

    return waves;
}

module.exports = { createWave, checkWave, completeWave, getWaves }