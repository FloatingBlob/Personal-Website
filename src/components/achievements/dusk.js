import React, { useEffect } from "react";
import "./dusk.css";
import steam from"../../assets/steam.png";
import lunartear from"../../assets/lunartear.png";
import wordle from"../../assets/wordle.png";
import idiot from"../../assets/idiot.png";
import turnip from"../../assets/turnip.png";
import thumbsup from"../../assets/thumbsup.png";

export default function Achievements() {
    useEffect(() => {
        const cards = document.querySelectorAll('.box .card');
        
        const tap = (event) => {
            event.currentTarget.classList.toggle('is-flipped');
        };

        cards.forEach(card => {
            card.addEventListener('click', tap);
        });

        return () => {
            cards.forEach(card => {
                card.removeEventListener('click', tap);
            });
        };
    }, []);

    return(
        <div className="achievements">
            <div className="background">
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
        </div>
    )
}