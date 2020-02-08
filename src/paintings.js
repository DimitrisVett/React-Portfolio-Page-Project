import React, { useState, useEffect } from "react";
import axios from "./axios";
import PaintModal from "./paintmodal";

export default function Paintings() {
    const [paintings, setPaintings] = useState([]);
    const [modal, setModal] = useState(false);
    const [imgId, setImgId] = useState("");

    useEffect(() => {
        axios
            .get("/paintings.json")
            .then(({ data }) => {
                console.log(data);
                setPaintings(data);
            })
            .catch(err => console.log("err in axios /paintings :", err));
    }, []);

    function toggle() {
        setModal(!modal);
    }

    return (
        <div className="img-container">
            <div className="video-container">
                <video autoPlay muted>
                    <source src="assets/img.mp4" type="video/mp4" />
                </video>
            </div>
            {paintings.map(painting => (
                <div
                    onClick={() => {
                        toggle();
                        setImgId(painting.id);
                    }}
                    key={painting.id}
                >
                    <div className="card">
                        <h1>{painting.title}</h1>
                        <img src={painting.imgurl || "/assets/default.png"} />
                    </div>
                </div>
            ))}
            {modal && <PaintModal imgId={imgId} toggle={toggle} />}
        </div>
    );
}
