CREATE TABLE useList (
    id SERIAL PRIMARY KEY,
    useID INT REFERENCES users(id),
    movieID INT 
);
