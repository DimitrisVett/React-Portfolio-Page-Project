import React, { useEffect, useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
export default function Login() {
    const [email, setEmail] = useState("name");
    const [password, setPass] = useState("value");

    /////////////// fix login ////////////////
    function submit() {
        axios.post("/login", { email, password }).then(({ data }) => {
            console.log(data);
            if (data.success) {
                location.replace("/");
            } else {
                console.log("req failed in login");
            }
        });
    }

    return (
        <div className="login">
            <div className="inputs">
                <input
                    name="email"
                    placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={e => setPass(e.target.value)}
                />
            </div>
            <button onClick={() => submit()}>Sign Up</button>
            <Link to="/">close</Link>
        </div>
    );
}
