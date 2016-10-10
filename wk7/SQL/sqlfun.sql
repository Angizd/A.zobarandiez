DROP TABLE IF EXISTS superheroes;
CREATE TABLE superheroes(
    id SERIAL primary key,
    name Varchar(225) not null,
    secret_identity VARCHAR(255),
    Weakness VARCHAR(255)
);

ALTER TABLE superheroes ADD COLUMN universe VARCHAR(6);
ALTER TABLE superheroes DROP COLUM weakness;

INSERT INTO superheroes (name, secret_identity, universe) VALUES ('Batman', 'Bruce Wayne', 'DC');
INSERT INTO superheroes (name, secret_identity, universe) VALUES ('Superman', 'Clark Kent', 'DC');
INSERT INTO superheroes (name, secret_identity, universe) VALUES ('Wonder Woman', 'Diana Prince', 'DC');
INSERT INTO superheroes (name, secret_identity, universe) VALUES ('Hulk', 'Bruce Banner', 'Marvel');
INSERT INTO superheroes (name, secret_identity, universe) VALUES ('Spiderman', 'Peter Porker', 'Marvel');


UPDATE superheroes SET secret_identity='Peter Parker' WHERE secret_identity='Peter Porker';
