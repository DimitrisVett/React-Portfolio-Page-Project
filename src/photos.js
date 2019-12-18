import React, { useState, useEffect } from "react";
import axios from "./axios";

export default function Photos() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        console.log(photos);

        axios
            .get("/photos.json")
            .then(({ data }) => {
                console.log(data);
                setPhotos(data);
            })
            .catch(err => console.log("err in find people: ", err));
    }, []);
    return (
        <div>
            {photos.map(photo => (
                <div key={photo.id}>
                    <h1>{photo.title}</h1>
                    <img src={photo.imgurl || "/assets/default.png"} />
                </div>
            ))}
        </div>
    );
}
