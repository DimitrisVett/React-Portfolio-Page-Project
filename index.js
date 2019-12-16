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
//////////////////////////////////////////////////////////////////
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

app.post("/upload", uploader.single("file"), s3.upload, (req, res) => {
    const imgUrl = `${s3Url}${req.file.filename}`;
    db.addProfPic(imgUrl, req.session.userId)
        .then(() => {
            res.json({ imgUrl: imgUrl });
        })
        .catch(er => {
            console.log(er);
            res.json({ error: er });
        });
});

app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080, function() {
    console.log("I'm listening.");
});
