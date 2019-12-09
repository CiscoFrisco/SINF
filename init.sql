DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS section;

CREATE TABLE employee (
  id SERIAL PRIMARY KEY,
  isManager BOOLEAN DEFAULT FALSE, 
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE section (
  id SERIAL PRIMARY KEY,
  warehouse VARCHAR(255)
);

CREATE TABLE product (
  id VARCHAR(255) PRIMARY KEY,
  section_id SERIAL REFERENCES section(id)
);

INSERT INTO employee(email, password) VALUES('email@email.email', '$2a$08$PaAprgLos9T90uGnSHa8GuqjKBanidqgddCQ0tuplPt1gh5d0GZtW');
INSERT INTO section(warehouse) VALUES('ali ao lado');
INSERT INTO product(id, section_id) VALUES('AAA', 1);