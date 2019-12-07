var express = require('express');
var router = express.Router();
const stockController = require("../controllers/stockController");

router.get('/incoming', stockController.getIncoming);

module.exports = router;