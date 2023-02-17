CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstName varchar(25),
    secondName varchar(25),
    email varchar(100),
    password varchar(100)
);