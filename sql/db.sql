DROP TABLE imgs;
DROP TABLE IF EXISTS admin;
CREATE TABLE imgs(
    id SERIAL PRIMARY KEY,
    imgurl VARCHAR NOT NULL,
    title VARCHAR,
    description VARCHAR,
    photo BOOLEAN,
    paint BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE admin(
    email VARCHAR NOT null,
    password VARCHAR NOT NULL

);


INSERT INTO admin (email ,password) VALUES ('test@test','test');
