import { useEffect, useRef } from "react";

const letters = "ⱥƀȼđēӻꞡħīɉҟłᵯꞥꝋꝑꝗɍꞩⱦᵾꝟⱳӿɏƶ";

export const useDistortEffect = () => { 
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

    return distortRef;
};