var express = require('express');
var router = express.Router();
const salesController = require("../controllers/salesController");

/* GET employees listing. */
router.get('/orders', salesController.getSales);
// router.get('/deliveries', salesController.getDeliveres);
// router.get('/stock', salesController.getStock);

module.exports = router;