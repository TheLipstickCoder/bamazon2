DROP DATABASE IF EXISTS inventory_db;

CREATE DATABASE inventory_db;

USE inventory_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT NOT NULL,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(4,2) NOT NULL,
  stock_quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO songs (item_id, product_name, department_name, price, stock_quantity)
VALUES (123, 'beyonce album', 'music', 15.99, 20)
, (124, 'travis scott album', 'music', 13.99, 10)
, (125, 'strip eyelash style 1', 'makeup', 8.99, 20);
, (126, 'strip eyelash style 2', 'makeup', 9.99, 15);
, (127, 'foundation shade dark', 'makeup', 39.99, 10);
, (128, 'foundation shade deepest dark', 'makeup', 39.99, 10);
, (129, 'eyeshadow palette', 'makeup', 29.99, 10);
, (130, 'highlighter shade 1', 'makeup', 19.99, 5);
, (131, 'highlighter shade 2', 'makeup', 19.99, 10);
, (132, 'anita baker album', 'music', 10.99, 10);
, (133, 'eyebrow pencil shade brown', 'makeup', 24.99, 15);