const utils = require('../utils');

const employeeModel = require("../models/employeeModel");

const getEmployeeController = async (req, res, next) => {
    const employees = await employeeModel.getEmployees();

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

const loginEmployeeController = async (req, res, next) => {
    if (!req.body.email || !req.body.password) {
        return res.status(400).send({ 'message': 'Some values are missing' });
    }
    if (!utils.isValidEmail(req.body.email)) {
        return res.status(400).send({ 'message': 'Please enter a valid email address' });
    }

    try {
        const rows = await employeeModel.login(req.body.email);
        if (!rows[0]) {
            return res.status(400).send({ 'message': 'The credentials you provided are incorrect' });
        }
        if (!utils.comparePassword(rows[0].password, req.body.password)) {
            return res.status(400).send({ 'message': 'The credentials you provided are incorrect' });
        }
        const token = utils.generateToken(rows[0].id);
        return res.status(200).send({ token });
    } catch (error) {
        return res.status(400).send(error);
    }
}

const deleteEmployeeController = async (req, res, next) => {
    try {
        const rows = await employeeModel.del(req.body.email);
        if (!rows[0]) {
            return res.status(404).send({ 'message': 'user not found' });
        }
        return res.status(204).send({ 'message': 'deleted' });
    } catch (error) {
        return res.status(400).send(error);
    }
}

module.exports = { getEmployeeController, signupEmployeeController, loginEmployeeController, deleteEmployeeController }