var express = require('express');
var router = express.Router();
const purchasesController = require("../controllers/purchasesController");

router.get('/requests', purchasesController.getRequests);

module.exports = router;