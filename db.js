var spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/final"
);

module.exports.getPaints = function getPaint() {
    return db.query("SELECT *  FROM imgs WHERE  paint=true");
};

module.exports.getPaint = function getPaint(id) {
    return db.query("SELECT *  FROM imgs WHERE  id=$1", [id]);
};

module.exports.getPhotos = function getPhotos() {
    return db.query("SELECT *  FROM imgs WHERE  photo=true");
};

module.exports.getPhoto = function getPhoto(id) {
    return db.query("SELECT *  FROM imgs WHERE  id=$1", [id]);
};

module.exports.addImage = function addImage(
    imgUrl,
    title,
    description,
    photo,
    paint
) {
    return db.query(
        "INSERT INTO imgs (imgurl, title, description, photo, paint) VALUES ($1, $2, $3, $4, $5) returning *",
        [imgUrl, title, description, photo, paint]
    );
};
module.exports.login = function login() {
    return db.query("SELECT *  FROM admin ");
};
