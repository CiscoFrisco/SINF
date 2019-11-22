const utils = require('../utils');

const employeeModel = require("../models/employeeModel");

const getEmployeeController = (req, res, next) => {
    const employees = employeeModel.getEmployees();

    res.json(employees);
}

const signupEmployeeController = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'message': 'Some values are missing' });
    }
    if (!utils.isValidEmail(req.body.email)) {
        return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }

    const hashPassword = utils.hashPassword(req.body.password);

    try {
        const token = await employeeModel.signup(req.body.email, hashPassword);
        return res.status(201).send({ token });
    } catch (error) {
        if (error.routine === '_bt_check_unique') {
            return res.status(400).send({ 'message': 'User with that EMAIL already exist' })
        }
        return res.status(400).send(error);
    }
}

module.exports = { getEmployeeController, signupEmployeeController }