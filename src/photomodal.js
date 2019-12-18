import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function PhotoModal(props) {
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        axios
            .get(`/painting.json/${props.photos.id}`)
            .then(({ data }) => {
                console.log("data!!!!!", data);
                setPhoto(data[0]);
            })
            .catch(err => console.log("err in find people: ", err));
    }, []);
    return (
        <div className="imgModal">
            <h1>{photo.title}</h1>
            <img src={photo.imgurl || "/assets/default.png"} />
            <p>{photo.description}</p>
        </div>
    );
}
