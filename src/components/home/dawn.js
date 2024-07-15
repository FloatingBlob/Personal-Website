import React from "react";
import "./dawn.css";
import zena from"../../assets/zena.png"
import Type from "./type";

export default function Home() {
    return (
        <div className="row">
            <div className="left">
                <div className="content">
                    <p>Greetings.</p>
                    <p>Welcome to my website</p>
                    <br></br>
                    <p>You've <span className="highlight">returned</span>.</p>
                    <p className="indent-text">I'm <span className="highlight">Laziness</span></p>
                    <br></br>
                    <p>also known as...</p>
                    <div className="indent-text">
                        <span className="highlight"><Type /></span>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={zena} className="zena" alt="zena and claw" />
            </div>
        </div> 
    );
}