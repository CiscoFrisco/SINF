var express = require('express');
var router = express.Router();
const stockController = require("../controllers/stockController");

router.get('/incoming', stockController.getIncoming);
router.get('/delivery', stockController.getDelivery);

module.exports = router;