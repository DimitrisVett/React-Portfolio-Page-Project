import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h1> i m the menu</h1>
            <div className="menu">
                <Link to="/about">
                    <h2>About</h2>
                </Link>
                <Link to="/">
                    <h2>Contact</h2>
                </Link>
                <Link to="/photos">
                    <h2>Photography</h2>
                </Link>
                <Link to="/paintings">
                    <h2>Painting</h2>
                </Link>
            </div>
        </div>
    );
}
