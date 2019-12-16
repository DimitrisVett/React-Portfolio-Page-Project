var spicedPg = require("spiced-pg");
var db = spicedPg(
    process.env.DATABASE_URL ||
        "postgres:postgres:postgres@localhost:5432/socialmedia"
);

module.exports.getImg = function getImg() {
    return db.query("SELECT *  FROM users WHERE  paint=true");
};
