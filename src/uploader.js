import React from "react";

export default function Contact() {
    return (
        <div>
            <input type="text" name="title" placeholder="Give a title " />
            <input
                type="text"
                name="discription"
                placeholder="Write a discription "
            />
            <input type="radio" name="img" value="photo" />
            Photograph
            <input type="radio" name="img" value="paint" />
            Painting
            <input type="file" name="file" accept="image/*" />
        </div>
    );
}
