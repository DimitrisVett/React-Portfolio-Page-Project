import React from "react";

export default function Contact() {
    return (
        <div>
            <div className="video-container">
                <video autoPlay muted className="aboutvideo">
                    <source src="assets/timeremap.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="contact">
                <h2> Contact </h2>
                <h3> instagram : @blablaba </h3>
                <p> e mail : blabla@blabla.com </p>
            </div>
        </div>
    );
}
