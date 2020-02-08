import React, { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-DOM";
import Header from "./header";
import About from "./about";
import Contact from "./contact";
import Login from "./login";
import Uploader from "./uploader";
import Photos from "./photos";
import Paintings from "./paintings";

export default function App() {
    const [loggedin, setLoggedin] = useState(false);
    useEffect(() => {}, []);
    // useEffect(() => {
    //     console.log("loggedin", loggedin);
    // }, []);
    //useEffect only to check if loggin works
    function loggin(arg) {
        setLoggedin(arg);
    }
    return (
        <div className="wrapper">
            <div className="video-container">
                <video autoPlay muted>
                    <source src="assets/spil.mp4" type="video/mp4" />
                </video>
            </div>
            <BrowserRouter>
                <Header />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/login" render={() => <Login loggin={loggin} />} />
                <Route path="/photos" component={Photos} />
                <Route path="/paintings" component={Paintings} />

                {loggedin && <Uploader logout={loggin} />}
            </BrowserRouter>
        </div>
    );
}

//next steps
//add a feature for editing the images (add or change description or tilte or delete img.)
//there is a bug with video elements. propably something with the virtual dom
//add background video to setModal
