var express = require('express');
var router = express.Router();
const employeeController = require("../controllers/employeeController");

/* GET employees listing. */
router.get('/', employeeController.getEmployeeController);
router.post('/signup', employeeController.signupEmployeeController);

module.exports = router;
