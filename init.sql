DROP TABLE IF EXISTS waveItem;
DROP TABLE IF EXISTS wave;
DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS section;

CREATE TABLE IF NOT EXISTS employee (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255),
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
  id VARCHAR(255),
  prodName VARCHAR(255),
  quantity INTEGER,
  wave_id INTEGER REFERENCES wave(id),
  section_id INTEGER REFERENCES section(id),
  completed BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id, wave_id)
);

INSERT INTO employee(username, isManager, email, password) VALUES('Bruno Sousa', false,'brunosousa@slgba.com', '$2y$08$9ZzIAg9Jx7JqJ7zkwS0CcudQkfy5nbgxIPSrlREQdlV6oo.9vi30e'); --pass: bruno
INSERT INTO employee(username, isManager, email, password) VALUES('Francisco Filipe', false,'fransiscofilipe@slgba.com', '$2y$08$XAriZDL8DpfnTcETSVdFvOZ3/HHbyzqmtfw5/arGXTDJmZM7tzIoe'); --pass: chico
INSERT INTO employee(username, isManager, email, password) VALUES('Joao Goncalves', false,'joaogoncalves@slgba.com', '$$2y$08$PIZap1C.D.C4YRmFLz3SyuaX4M38A3fAyyM8qZeU88Rnrf4SsX.H.'); --pass: joao
INSERT INTO employee(username, isManager, email, password) VALUES('Luis Silva', false,'luissilva@slgba.com', '$2y$08$8sHf8UryWgotwygopit4wuDijK7rpymDDDGHD08dEPOI.LlFOieD6'); --pass: luis
INSERT INTO employee(username, isManager, email, password) VALUES('Manager', true, 'manager@slgba.com', '$2y$08$poNf1pHEgzjaKMUU3cp56.vX3aXfHULFNiScZMI/gqrir30eSRTVS'); --pass: manager

INSERT INTO section(warehouse, x, y) VALUES('Section A', 10, 10);
INSERT INTO section(warehouse, x, y) VALUES('Section B', 100, 100);
INSERT INTO section(warehouse, x, y) VALUES('Section C', 99, 99);
INSERT INTO section(warehouse, x, y) VALUES('Section D', 1000, 1000);

INSERT INTO product(id, section_id) VALUES('AAA', 1);
INSERT INTO product(id, section_id) VALUES('MAD', 2);
INSERT INTO product(id, section_id) VALUES('CAD', 3);