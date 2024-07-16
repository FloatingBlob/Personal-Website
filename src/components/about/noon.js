import React from "react";
import "./noon.css";
import ihwa from"../../assets/ihwa.png"

export default function About() {
    return(
        <div className="about">
            <div className="left">
                <img src={ihwa} className="ihwa" alt="ihwa" />
            </div>
            <div className="right">
                <div>
                    <p>Greetings.</p>
                    <p>Welcome to my website</p>
                    <br></br>
                    <p>You've <span className="highlight">returned</span>.</p>
                    <p className="indent-text">I'm <span className="highlight">Laziness</span></p>
                    <br></br>
                    <p>also known as...</p>
                </div>
            </div>
        </div> 
    )
}