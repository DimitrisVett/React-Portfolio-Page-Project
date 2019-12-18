import React, { useState, useEffect } from "react";
import axios from "./axios";
import PaintModal from "./paintmodal";
export default function Paintings() {
    const [paintings, setPaintings] = useState([]);
    const [modal, setModal] = useState(false);
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
            {paintings.map(paintings => (
                <div onClick={toggle} key={paintings.id}>
                    <h1>{paintings.title}</h1>
                    <img src={paintings.imgurl || "/assets/default.png"} />
                    {modal && <PaintModal paintings={paintings} />}
                </div>
            ))}
        </div>
    );
}
