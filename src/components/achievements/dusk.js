import React from "react";
import "./dusk.css";
import { useFlipCard } from "../../hooks/flip.js";

export default function Achievements() {
    const steam = "/assets/steam.png";
    const lunartear = "/assets/lunartear.png";
    const wordle = "/assets/wordle.png";
    const idiot = "/assets/idiot.png";
    const turnip = "/assets/turnip.png";
    const thumbsup = "/assets/thumbsup.png";
    useFlipCard();

    return(
        <div className="achievements">
            <div className="layout">
                <div className="box">
                    <div className="card">
                        <div className="front"><img src={steam} alt="steam" /></div>
                        <div className="back"><p>117.3 hours over past 2 weeks, Terraria got to me</p></div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front"><img src={lunartear} alt="white moonflower" /></div>
                        <div className="back"><p>After many hours of breeding, behold the "Lunar Tear"</p></div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front"><img src={wordle} alt="wordle" /></div>
                        <div className="back"><p>I love wordle</p></div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front"><img src={idiot} alt="idiot island" /></div>
                        <div className="back"><p>The game got me</p></div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front"><img src={turnip} alt="turnip boy" /></div>
                        <div className="back"><p>They still call me the best MS Paint artist out there</p></div>
                    </div>
                </div>
                <div className="box">
                    <div className="card">
                        <div className="front"><img src={thumbsup} alt="fuse thumbs up" /></div>
                        <div className="back"><p>U+1F44D</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}