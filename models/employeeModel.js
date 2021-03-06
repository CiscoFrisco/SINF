const utils = require("../utils");
const pool = require("../config");

const getEmployees = async () => {
  const query = `SELECT id, username, email
      FROM employee
      WHERE isManager = FALSE`;

  const res = await pool.query(query);

  return res["rows"];
};

const getEmployeebyID = async (id_employee) => {
  const employee = `SELECT id, username, email
      FROM employee
      WHERE id = $1`;

  const values = [id_employee];

  const res = await pool.query(employee, values);

  return res.rows[0];
};

const signup = async (email, password) => {
  const createQuery = `INSERT INTO
      employee(email, password)
      VALUES($1, $2)
      returning *`;
  const values = [email, password];

  const { rows } = await pool.query(createQuery, values);

  const token = utils.generateToken(rows[0].id);

  return token;
};

const login = async email => {
  const text = "SELECT * FROM employee WHERE email = $1";

  const { rows } = await pool.query(text, [email]);

  return rows;
};

const del = async email => {
  const deleteQuery = "DELETE FROM employee WHERE email=$1 returning *";

  const { rows } = await pool.query(deleteQuery, [email]);
  return rows;
};

module.exports = { getEmployees, getEmployeebyID, signup, login, del };
