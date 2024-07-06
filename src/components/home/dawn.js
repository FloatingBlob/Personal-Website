import React from "react";
import "./dawn.css";
import zena from"../../assets/zena.png"

export default function Home() {
    return (
        <div className="row">
            <div className="right">
                <img src={zena} alt="zena and claw"></img>
            </div>
            <div className="left">
                <div className="content">
                    <p>Hello</p>
                    <p>Welcome to my website.</p>
                    <br></br>
                    <p>You've <span className="highlight">returned.</span></p>
                    <br></br>
                    <p>I'm <span className="highlight">Laziness</span></p>
                    <p>Also known as...</p>
                    <p>Unlazy</p>
                </div>
            </div>
        </div> 
    );
}