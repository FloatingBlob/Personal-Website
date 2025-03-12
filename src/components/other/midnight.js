import React from "react";
import "./midnight.css";
import { useDistortEffect } from "../../hooks/distortion.js";

export default function Other() {
    const donttouchme = "/assets/donttouchme.png";
    const distortRef = useDistortEffect();

    return (
        <div className="other">
            <div className="left">
                <p className="title"><b><span className="highlight"><del>Fun</del></span> sad fact</b></p>
                <br />
                <p>When a coin is tossed,</p>
                <p><span className="highlight">50%</span> of the time, it will land on heads,</p>
                <p><span className="highlight">49%</span> of the time, it will land on tails,</p>
                <p>and <span className="highlight">1%</span> of the time, it <span ref={distortRef} data-value="distorts itself">distorts itself</span>.</p>
                <br />
                <p>That's why <span className="highlight">heads</span> is more commonly picked in a coin flip.</p>
                <br />
                <p>(images used in the website <a href="/references.html" target="_blank" rel="noopener noreferrer">here</a>)</p>
            </div>
            <div className="right">
                <img src={donttouchme} alt="funny button" />
            </div>
        </div>
    );
}
