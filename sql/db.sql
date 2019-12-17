CREATE TABLE imgs(
    id SERIAL PRIMARY KEY,,
    imgUrl VARCHAR NOT NULL,
    title VARCHAR,
    discription,
    photo BOOLEAN,
    paint BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
