import React, { useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
export default function Login(props) {
    const [email, setEmail] = useState("name");
    const [password, setPass] = useState("value");

    function submit() {
        axios.post("/login", { email, password }).then(({ data }) => {
            if (data.success) {
                props.loggin(true);
                // location.replace("/");
            } else {
                console.log("req failed in login-data:", data);
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
            <button onClick={() => submit()}>Log In</button>
            <Link to="/">close</Link>
        </div>
    );
}
