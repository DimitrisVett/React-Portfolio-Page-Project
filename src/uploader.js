import React, { useEffect, useState } from "react";
import axios from "./axios";

export default function uploader() {
    const [text, setText] = useState("text");
    const [discr, setDiscr] = useState("discription");
    const [radioPhoto, setPhoto] = useState("false");
    const [radioPaint, setPaint] = useState(false);
    const [file, setFile] = useState("");
    const [msg, setmsg] = useState("");

    useEffect(() => {});

    function submit() {
        console.log("sumbit button");
        console.log(file, text, radioPaint);
        var fd = new FormData();
        fd.append("file", file);
        fd.append("title", text);
        fd.append("description", discr);
        fd.append("paint", radioPaint);
        fd.append("photo", radioPhoto);

        for (var p of fd) {
            console.log("fd after append", p);
        }
        axios
            .post("/upload", fd)
            .then(({ data }) => {
                if (data) {
                    setmsg(data.success);
                }
            })
            .catch(e => {
                console.log(e);
            });
    }
    return (
        <div>
            {msg && <div>Upload finished </div>}
            <input
                type="text"
                name="title"
                placeholder="Give a title "
                onChange={e => setText(e.target.value)}
            />
            <input
                type="text"
                name="discription"
                placeholder="Write a discription "
                onChange={e => setDiscr(e.target.value)}
            />
            <input
                required
                type="radio"
                name="img"
                onChange={e => setPhoto(e.target.checked)}
            />
            Photograph
            <input
                type="radio"
                name="img"
                onChange={e => setPaint(e.target.checked)}
            />
            Painting
            <input
                type="file"
                name="file"
                accept="image/*"
                onChange={e => setFile(e.target.files[0])}
            />
            <button onClick={submit}> sumbit </button>
        </div>
    );
}
