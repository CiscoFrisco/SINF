DROP TABLE IF EXISTS waveItem;
DROP TABLE IF EXISTS wave;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS section;

CREATE TABLE IF NOT EXISTS employee (
  id SERIAL PRIMARY KEY,
  isManager BOOLEAN DEFAULT FALSE, 
  email VARCHAR(255) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS section (
  id SERIAL PRIMARY KEY,
  warehouse VARCHAR(255),
  x INTEGER,
  y INTEGER
);

CREATE TABLE IF NOT EXISTS product (
  id VARCHAR(255) PRIMARY KEY,
  section_id INTEGER REFERENCES section(id)
);

CREATE TABLE IF NOT EXISTS wave (
  id SERIAL PRIMARY KEY,
  ref VARCHAR(255) UNIQUE,
  party VARCHAR(255),
  id_employee INTEGER REFERENCES employee(id),
  completed BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS waveItem (
  id VARCHAR(255) PRIMARY KEY,
  quantity INTEGER,
  wave_id INTEGER REFERENCES wave(id),
  section_id INTEGER REFERENCES section(id),
  completed BOOLEAN DEFAULT FALSE
);

INSERT INTO employee(email, password) VALUES('email@email.email', '$2a$08$PaAprgLos9T90uGnSHa8GuqjKBanidqgddCQ0tuplPt1gh5d0GZtW');
INSERT INTO section(warehouse,x,y) VALUES('ali ao lado',10,10);
INSERT INTO product(id, section_id) VALUES('AAA', 1);