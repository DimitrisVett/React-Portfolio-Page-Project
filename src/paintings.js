import React, { useState, useEffect } from "react";
import axios from "./axios";
import PaintModal from "./paintmodal";
export default function Paintings() {
    const [paintings, setPaintings] = useState([]);
    const [modal, setModal] = useState(false);
    const [imgId, setImgId] = useState("");

    useEffect(() => {
        console.log("modal", modal);

        axios
            .get("/paintings.json")
            .then(({ data }) => {
                console.log(data);
                setPaintings(data);
            })
            .catch(err => console.log("err in find people: ", err));
    }, []);

    function toggle() {
        setModal(!modal);
    }

    return (
        <div>
            {paintings.map(painting => (
                <div
                    onClick={() => {
                        toggle();
                        setImgId(painting.id);
                    }}
                    key={painting.id}
                >
                    <h1>{painting.title}</h1>
                    <img src={painting.imgurl || "/assets/default.png"} />
                </div>
            ))}
            {modal && <PaintModal imgId={imgId} toggle={toggle} />}
        </div>
    );
}
