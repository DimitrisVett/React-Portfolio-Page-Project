import React from "react";

import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header">
            <div className="menu">
                <Link to="/">
                    <h2>Home</h2>
                </Link>
                <Link to="/about">
                    <h2>About</h2>
                </Link>
                <Link to="/contact">
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
