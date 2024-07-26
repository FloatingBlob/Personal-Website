import React from "react";
import "./dusk.css";
import steam from"../../assets/steam.png";
import lunartear from"../../assets/lunartear.png";
import wordle from"../../assets/wordle.png";
import idiot from"../../assets/idiot.png";
import turnip from"../../assets/turnip.png";
import thumbsup from"../../assets/thumbsup.png";

export default function Achievements() {
    return(
        <div className="achievements">
            <div className="background">
                <div className="container">
                    <div className="part"><img src={steam} alt="steam" /></div>
                    <div className="part"><img src={lunartear} alt="white moonflower" /></div>
                    <div className="part"><img src={wordle} alt="wordle" /></div>
                    <div className="part"><img src={idiot} alt="idiot island" /></div>
                    <div className="part"><img src={turnip} alt="turnip boy" /></div>
                    <div className="part"><img src={thumbsup} alt="fuse thumbs up" /></div>
                </div>
            </div>
        </div>
    )
}