import React, { useEffect, useRef } from "react";
import "./midnight.css";
import donttouchme from "../../assets/donttouchme.png";

export default function Other() {
    const letters = "ⱥƀȼđēӻꞡħīɉҟłᵯꞥꝋꝑꝗɍꞩⱦᵾꝟⱳӿɏƶ";
    const distortRef = useRef(null);

    useEffect(() => {
        let interval = null;

        const distortText = (element) => {
            let iterations = 0;
            const originalText = element.dataset.value;

            clearInterval(interval);

            interval = setInterval(() => {
                element.innerText = originalText.split("").map((char, index) => {
                    if (index < iterations) {
                        return char;
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                }).join("");

                if (iterations >= originalText.length) {
                    clearInterval(interval);
                }

                iterations += 2 / 5;
            }, 50);
        };

        const handleInteraction = (event) => {
            distortRef.current.classList.toggle("tap");
            distortText(event.target);
        };

        const distortElement = distortRef.current;
        distortElement.addEventListener("mouseover", distortText.bind(null, distortElement));
        distortElement.addEventListener("click", handleInteraction);

        return () => {
            clearInterval(interval);
            distortElement.removeEventListener("mouseover", distortText.bind(null, distortElement));
            distortElement.removeEventListener("click", handleInteraction);
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
