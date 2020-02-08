import React, { useState, useEffect } from "react";
import axios from "./axios";
import PhotoModal from "./photomodal";

export default function Photos() {
    const [photos, setPhotos] = useState([]);
    const [modal, setModal] = useState(false);
    const [imgId, setImgId] = useState("");

    useEffect(() => {
        axios
            .get("/photos.json")
            .then(({ data }) => {
                console.log(data);
                setPhotos(data);
            })
            .catch(err => console.log("err in axios /photos : ", err));
    }, []);

    function toggle() {
        setModal(!modal);
    }

    return (
        <div className="img-container">
            {photos.map(photo => (
                <div
                    onClick={() => {
                        toggle();
                        setImgId(photo.id);
                    }}
                    key={photo.id}
                >
                    <div className="card">
                        <h1>{photo.title}</h1>
                        <img src={photo.imgurl || "/assets/default.png"} />
                    </div>
                </div>
            ))}
            {modal && <PhotoModal imgId={imgId} toggle={toggle} />}
        </div>
    );
}
