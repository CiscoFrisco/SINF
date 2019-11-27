const express = require('express');
const router = express.Router();
const wareHouseController = require("../controllers/wareHouseController");

/* GET warehouses listing. */
router.get('/', wareHouseController.getWarehousesController);

module.exports = router;