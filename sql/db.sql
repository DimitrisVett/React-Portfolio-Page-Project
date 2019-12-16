CREATE TABLE users(
    id SERIAL PRIMARY KEY,,
    imgUrl VARCHAR,
    title VARCHAR,
    discription,
    photo BOOLEAN,
    paint BOOLEAN,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
