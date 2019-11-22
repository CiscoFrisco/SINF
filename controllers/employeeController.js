const emplyeeModel = require("../models/employeeModel");

const getEmployeeController = (req, res, next) => {
    const employees = emplyeeModel.getEmployees();

    res.json({employees});
}

module.exports = { getEmployeeController }