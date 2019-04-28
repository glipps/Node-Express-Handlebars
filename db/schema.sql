CREATE DATABASE pizzas_db;
USE pizzas_db;

CREATE TABLE pizzas(
  id INT NOT NULL AUTO_INCREMENT,
  pizza_name VARCHAR(1000) NOT NULL,
  devoured BOOLEAN DEFAULT false,
  PRIMARY KEY (id)
);