var express = require('express');
var router = express.Router();
const salesController = require("../controllers/salesController");

router.get('/orders', salesController.getSales);

module.exports = router;