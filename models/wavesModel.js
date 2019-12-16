const pool = require('../config');
const { getSections } = require('./warehouseModel')

const assignSection = async (itemID, isRequest) => {
    let query = `SELECT section_id
    FROM product
    WHERE id = $1`;

    let values = [
        itemID
    ];

    const { rows } = await pool.query(query, values);

    if (rows.length > 0)
        return rows[0].section_id;

    if (!isRequest)
        return null;

    query = `SELECT product.section_id, COUNT(*) as count
    FROM product, section
    WHERE product.section_id = section.id
    GROUP BY product.section_id`;

    const sectionCount = await pool.query(query);
    const sections = await getSections();

    sections.forEach((section) => {
        let found = false;

        sectionCount.rows.forEach((sc) => {
            if (section.id == sc.section_id) {
                found = true;
                section.itemCount = parseInt(sc.count);
            }
        });

        if (!found)
            section.itemCount = 0;
    })

    sections.sort((a, b) => {
        return a.itemCount > b.itemCount;
    });

    const newSection = sections[0].id;

    query = `INSERT INTO
    product(id, section_id)
    VALUES($1, $2)`;

    values = [
        itemID,
        newSection
    ]

    await pool.query(query, values);

    return newSection;
}

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
        const section = await assignSection(item.id, wave.ref.includes("ECF"));
        values = [
            item.id,
            item.name,
            item.quantity,
            waveId,
            section
        ];

        const { rows } = await pool.query(waveItemsQuery, values);
        items.push(rows[0]);
    }

    return {
        wave: waveRows,
        waveItems: items
    };
}

const distance = (l1, l2) => Math.sqrt(Math.pow(l2[0] - l1[0], 2) + Math.pow(l2[1] - l1[1], 2));

const getSortedProductList = async (waveID, currentSection) => {
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
            section: row.section_id,
            completed: row.completed
        });
    });

    const sections = await getSections();
    let currentLocation = [0, 0];
    sections.forEach((section) => {
        if (section.id === currentSection)
            currentLocation = [
                section.x,
                section.y
            ];
    });

    productList.forEach((product) => {
        let productLocation = [];

        sections.forEach((section) => {
            if (section.id === product.section)
                productLocation = [
                    section.x,
                    section.y
                ];
        });

        product.distance = distance(currentLocation, productLocation);
    });

    productList.sort((a, b) => {
        if (a.completed && !b.completed)
            return 1;

        if (!a.completed && b.completed)
            return -1;

        if (a.completed && b.completed)
            return 0;

        return a.distance > b.distance;
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

    return await getSortedProductList(wave.id, wave.section_id);
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
            if (wave.wave_id === row.wave_id) {
                found = true;
                wave.productList.push({
                    id: row.id,
                    name: row.prodname,
                    quantity: row.quantity,
                    section: row.section_id,
                    completed: row.completed
                });
            }
        })

        if (!found)
            waves.push({
                wave_id: row.wave_id,
                id_employee: row.id_employee,
                ref: row.ref,
                type: row.ref.includes("ECF") ? "Request" : "Order",
                productList: [{
                    id: row.id,
                    name: row.prodname,
                    quantity: row.quantity,
                    section: row.section_id,
                    completed: row.completed
                }]
            })
    })

    return waves;
}

module.exports = { createWave, checkWave, completeWave, getWaves }