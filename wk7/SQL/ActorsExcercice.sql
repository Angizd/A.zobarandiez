DROP TABLE IF EXISTS actors;
CREATE TABLE actors(
    Name Varchar(225)  not null,
    Age INTEGER,
    Oscars INTEGER
);

INSERT INTO actors(Name, Age, Oscars) VALUES ('Leonardo DiCapri','41','1');
INSERT INTO actors(Name, Age, Oscars) VALUES ('Jennifer Lawrence','25','1');
INSERT INTO actors(Name, Age, Oscars) VALUES ('Samuel L. Jackson','67','0');
INSERT INTO actors(Name, Age, Oscars) VALUES ('Meryl Streep','66','3');
INSERT INTO actors(Name, Age, Oscars) VALUES ('John Cho','43','0');

SELECT * FROM actors;
SELECT * FROM actors WHERE oscars > 1;
SELECT * FROM actors WHERE age > 30;
