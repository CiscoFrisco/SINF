var express = require('express');
var router = express.Router();
const purchasesController = require("../controllers/purchasesController");

/* GET employees listing. */
router.get('/requests', purchasesController.getRequests);
// router.get('/deliveries', purchasesController.getDeliveres);
// router.get('/stock', purchasesController.getStock);

module.exports = router;