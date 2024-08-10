import React from "react";
import "./midnight.css";
import donttouchme from"../../assets/donttouchme.png";

export default function Other() {
    return(
         <div className="other">
            <div className="left">
                <div>
                    <p className="title"><b><span className="highlight"><del>Fun</del></span> sad fact</b></p>
                    <br></br>
                    <p>When a coin is tossed,</p>
                    <p><span className="highlight">50%</span> of the time, it will land on heads,</p>
                    <p><span className="highlight">49%</span> of the time, it will land on tails,</p>
                    <p>and <span className="highlight">1%</span> of the time, it distorts itself.</p>
                    <br></br>
                    <p>That's why <span className="highlight">heads</span> is more commonly picked in a coin flip.</p>
                    <br></br>
                    <p>(images and their artists <a href="/references.html" target="_blank" rel="noopener noreferrer">here</a>)</p>
                </div>
            </div>
            <div className="right">
                <img src={donttouchme} alt="funny button" />
            </div>
         </div>
    )
}