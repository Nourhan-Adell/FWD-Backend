CREATE TABLE movieList (
    uselistID INT REFERENCES useList(id),
    movieID INT REFERENCES movies(id),
    name varchar(25),
    PRIMARY KEY(uselistID, movieID)
);
 