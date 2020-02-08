const express = require("express");
const app = express();
const compression = require("compression");
const db = require("./db");
var cookieSession = require("cookie-session");
const multer = require("multer");
const uidSafe = require("uid-safe");
const s3 = require("./s3.js");
const { s3Url } = require("./config.json");
const path = require("path");

//////////////////////////uploader //////////////////////////////////
// do csurf before publish
const diskStorage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, __dirname + "/uploads");
    },
    filename: function(req, file, callback) {
        uidSafe(24).then(function(uid) {
            callback(null, uid + path.extname(file.originalname));
        });
    }
});

const uploader = multer({
    storage: diskStorage,
    limits: {
        fileSize: 2097152
    }
});
//////////////////////////middlewares//////////////////////////////
app.use(compression());
app.use(
    cookieSession({
        secret: `no sure what is that`,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 41
    })
);
app.use(express.json());
app.use(express.static("public"));

///////////////////////////bundle///////////////////////////////////////
if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

////////////////////////////////////routes///////////////////////////////
app.post("/login", (req, res) => {
    if (req.body.email && req.body.password) {
        db.login()
            .then(({ rows }) => {
                if (
                    rows[0].password == req.body.password &&
                    rows[0].email == req.body.email
                ) {
                    req.session.admin = true;
                    res.json({ success: true });
                }
            })
            .catch(er => {
                console.log(er);
                res.json({ error: er });
            });
    } else {
        res.json({ error: "smth went wrong" });
    }
});

app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
    const { title, description, photo, paint } = req.body;

    const imageUrl = `${s3Url}${req.file.filename}`;
    db.addImage(imageUrl, title, description, photo, paint)
        .then(({ rows }) => {
            res.json({
                image: rows[0],
                success: true
            });
        })
        .catch(er => console.log(er));
});

app.get("/photos.json", (req, res) => {
    db.getPhotos()
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch(err => console.log("error in get Img ", err));
});

app.get("/paintings.json", (req, res) => {
    db.getPaints()
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch(err => console.log("error in get paintings ", err));
});

app.get("/painting.json/:id", (req, res) => {
    db.getPaint(req.params.id)
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch(err => console.log("error in get painting ", err));
});

app.get("/photos.json", (req, res) => {
    db.getPhotos()
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch(err => console.log("error in get photos ", err));
});

app.get("/photo.json/:id", (req, res) => {
    db.getPhoto(req.params.id)
        .then(({ rows }) => {
            res.json(rows);
        })
        .catch(err => console.log("error in get photo ", err));
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
