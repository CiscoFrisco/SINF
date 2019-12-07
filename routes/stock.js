var express = require('express');
var router = express.Router();
const stockController = require("../controllers/stockController");

router.get('/incoming', stockController.getIncoming);
router.get('/delivery', stockController.getDelivery);
router.get('/', stockController.getStock);

module.exports = router;