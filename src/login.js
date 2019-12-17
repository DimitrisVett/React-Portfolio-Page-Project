import React, { useEffect, useState } from "react";
import axios from "./axios";
import { Link } from "react-router-dom";
export default function Login() {
    const [inputName, setInputName] = useState("name");
    const [inputValue, setInputValue] = useState("value");

    function submit() {
        axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(({ data }) => {
                if (data.success) {
                    //set state to logged in and pass the data to App to toggle upoloder
                    location.replace("/");
                } else {
                    this.setState({
                        error: true
                    });
                }
            });
    }
    function handleChange(inputElement) {
        //how do i do that with hooks ?
        console.log("inputElement", inputElement.name);
        // this.setState({
        //     [inputElement.name]: inputElement.value
        // });
    }
    return (
        <div className="login">
            <div className="inputs">
                <input
                    name="email"
                    placeholder="email"
                    onChange={e => this.handleChange(e.target)}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="password"
                    onChange={e => handleChange(e.target)}
                />
            </div>
            <button onClick={() => submit()}>Sign Up</button>
            <Link to="/">Take me to register</Link>
        </div>
    );
}
