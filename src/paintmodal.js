import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function PaintModal(props) {
    const [painting, setPainting] = useState({});

    useEffect(() => {
        console.log(painting);
        axios
            .get(`/painting.json/${props.paintings.id}`)
            .then(({ data }) => {
                console.log("data!!!!!", data);
                setPainting(data[0]);
            })
            .catch(err => console.log("err in find people: ", err));
    }, []);
    return (
        <div className="imgModal">
            <h1>{painting.title}</h1>
            <img src={painting.imgurl || "/assets/default.png"} />
            <p>{painting.description}</p>
        </div>
    );
}
