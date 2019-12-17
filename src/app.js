import React from "react";
import { BrowserRouter, Route } from "react-router-DOM";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Login from "./login";
import Uploader from "./uploader";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <h1> i m the app </h1>
                <Header />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />

                <Uploader />
            </BrowserRouter>
        </div>
    );
}

// {this.state.loggedin && (
// )}
