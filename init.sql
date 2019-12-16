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

INSERT INTO employee(username, isManager, email, password) VALUES('email', false,'email@email.email', '$2a$08$PaAprgLos9T90uGnSHa8GuqjKBanidqgddCQ0tuplPt1gh5d0GZtW');
INSERT INTO employee(username, isManager, email, password) VALUES('a', true, 'a@a.a', '$2a$08$PaAprgLos9T90uGnSHa8GuqjKBanidqgddCQ0tuplPt1gh5d0GZtW');
INSERT INTO employee(username, isManager, email, password) VALUES('ola', true, 'ola@ola.ola', '$2y$08$kWu60qEQ9x5VO1EwfxYX0eJ/mtW6aoQKUSVeDgim9mlJBP906YYui');
INSERT INTO section(warehouse, x, y) VALUES('ali ao lado', 10, 10);
INSERT INTO section(warehouse, x, y) VALUES('la longe', 100, 100);
INSERT INTO section(warehouse, x, y) VALUES('la perto de longe', 99, 99);
INSERT INTO section(warehouse, x, y) VALUES('ainda mais longe', 1000, 1000);
INSERT INTO product(id, section_id) VALUES('AAA', 1);
INSERT INTO product(id, section_id) VALUES('MAD', 2);
INSERT INTO product(id, section_id) VALUES('CAD', 3);
INSERT INTO wave(ref, party, id_employee) VALUES('ECF.2019.4', 'Teste', 1);
INSERT INTO wave(ref, party, id_employee) VALUES('ECF.2019.5', 'Teste', 2);
INSERT INTO waveItem(id, prodName, quantity, wave_id, section_id) VALUES('AAA', 'aaa', 5, 1, 1);
INSERT INTO waveItem(id, prodName, quantity, wave_id, section_id) VALUES('MAD', 'Madeira', 7, 1, 2);
INSERT INTO waveItem(id, prodName, quantity, wave_id, section_id) VALUES('CAD', 'Cadeiras', 13, 1, 3);
INSERT INTO waveItem(id, prodName, quantity, wave_id, section_id) VALUES('CAD', 'Cadeiras', 13, 2, 3);