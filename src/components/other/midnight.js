import React, { useEffect, useRef } from "react";
import "./midnight.css";
import donttouchme from "../../assets/donttouchme.png";

export default function Other() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const distortRef = useRef(null);

    useEffect(() => {
        let interval = null;
        
        const handleMouseOver = (event) => {
            let iterations = 0;

            clearInterval(interval);

            interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split("")
                    .map((letter, index) => {
                        if (index < iterations) {
                            return event.target.dataset.value[index];
                        }
                        
                        return letters[Math.floor(Math.random() * 26)];
                    }).join("");

                if (iterations >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 3;
            }, 30);
        };

        const handleTap = event => {
            distortRef.current.classList.toggle("tap");
            handleMouseOver(event);
        };

        const distortElement = distortRef.current;
        distortElement.addEventListener("mouseover", handleMouseOver);
        distortElement.addEventListener("click", handleTap);

        return () => {
            distortElement.removeEventListener("mouseover", handleMouseOver);
            distortElement.removeEventListener("click", handleTap);
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="other">
            <div className="left">
                <div>
                    <p className="title"><b><span className="highlight"><del>Fun</del></span> sad fact</b></p>
                    <br />
                    <p>When a coin is tossed,</p>
                    <p><span className="highlight">50%</span> of the time, it will land on heads,</p>
                    <p><span className="highlight">49%</span> of the time, it will land on tails,</p>
                    <p>and <span className="highlight">1%</span> of the time, it <span ref={distortRef} className="distort" data-value="distorts itself">distorts itself</span>.</p>
                    <br />
                    <p>That's why <span className="highlight">heads</span> is more commonly picked in a coin flip.</p>
                    <br />
                    <p>(images and their artists <a href="/references.html" target="_blank" rel="noopener noreferrer">here</a>)</p>
                </div>
            </div>
            <div className="right">
                <img src={donttouchme} alt="funny button" />
            </div>
        </div>
    );
}
