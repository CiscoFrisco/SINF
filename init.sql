DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255),
  password VARCHAR(255)
);