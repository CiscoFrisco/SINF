var express = require('express');
var router = express.Router();
const wavesController = require("../controllers/wavesController");

router.post('/', wavesController.postWave);
router.get('/', wavesController.getWaves);

module.exports = router;