var express = require('express');
var router = express.Router();
const salesController = require("../controllers/salesController");

router.get('/orders', salesController.getOrders);
router.get('/delivered', salesController.getDelivered);

module.exports = router;