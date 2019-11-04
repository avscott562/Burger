-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;

-- Create the burgers_db.
CREATE DATABASE burgers_db;

-- Switch to or use the burgers_db.
USE burgers_db;

-- Create a burgers table with these fields:
CREATE TABLE burgers (
-- id: an auto incrementing int that serves as the primary key.
id INTEGER AUTO_INCREMENT NOT NULL,

-- burger_name: a string.
burger_name VARCHAR(25) NOT NULL,

-- devoured: a boolean.
devoured BOOLEAN DEFAULT false,

PRIMARY KEY(id)

);