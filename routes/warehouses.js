const express = require('express');
const router = express.Router();
const wareHouseController = require("../controllers/wareHouseController");

/* GET warehouses listing. */
router.get('/', wareHouseController.getSections);

module.exports = router;