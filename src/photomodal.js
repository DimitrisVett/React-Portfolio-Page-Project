import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function PhotoModal(props) {
    const [photo, setPhoto] = useState({});

    useEffect(() => {
        console.log("props in photo", props);
        axios
            .get(`/photo.json/${props.imgId}`)
            .then(({ data }) => {
                console.log("data!!!!!", data);
                setPhoto(data[0]);
            })
            .catch(err => console.log("err in find people: ", err));
    }, []);
    return (
        <div className="modal">
            <div onClick={props.toggle} className="outer">
                <div className="inner">
                    <label>Back</label>
                </div>
            </div>
            <h1>{photo.title}</h1>
            <img src={photo.imgurl || "/assets/default.png"} />
            <p>{photo.description}</p>
        </div>
    );
}
