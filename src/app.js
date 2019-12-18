import React from "react";
import { BrowserRouter, Route } from "react-router-DOM";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Login from "./login";
import Uploader from "./uploader";
import Photos from "./photos";
import Paintings from "./paintings";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <h1> i m the app </h1>
                <Header />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" component={Login} />
                <Route path="/photos" component={Photos} />
                <Route path="/paintings" component={Paintings} />

                <Uploader />
            </BrowserRouter>
        </div>
    );
}

// {this.state.loggedin && (
// )}
