var express = require('express');
var router = express.Router();
const employeeController = require("../controllers/employeeController");

/* GET employees listing. */
router.get('/', employeeController.getEmployeeController);
router.post('/signup', employeeController.signupEmployeeController);
router.post('/login', employeeController.loginEmployeeController);
router.post('/delete', employeeController.deleteEmployeeController);

module.exports = router;
