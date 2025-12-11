-- CREATE DATABASE schooldb;

-- USE schooldb;

-- CREATE TABLE schools (
--  id INT AUTO_INCREMENT PRIMARY KEY,
--  name TEXT,
--  address TEXT,
--  city TEXT,
--  state TEXT,
--  contact VARCHAR(50) UNIQUE,
--  image TEXT,
--  email_id TEXT
-- );

ALTER TABLE schools
MODIFY COLUMN id INT NOT NULL AUTO_INCREMENT;