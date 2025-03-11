import React from "react";
import "./quotes.css";

const quotes = [
    "It was good, though. Exquisite, even. No wonder humans used to eat them...",
    "From break and ruin, the most beautiful performance begins.",
    "May your woes be many, and your days few.",
    "Hesitation is defeat.",
    "Be prepared; for today, a Star of the City shall be gone",
    "I fucking love air-conditioning"
];

const fonts = [
    "nier automata",
    "lobotomy corporation",
    "ultrakill",
    "sekiro",
    "library of ruina",
    "omori",
];

let lastQuoteIndex = -1;

function getRandomQuote() {
    let randomNumber;
    let newQuoteIndex;

    do {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        if (randomNumber <= 19) newQuoteIndex = 0;
        else if (randomNumber <= 38) newQuoteIndex = 1;
        else if (randomNumber <= 57) newQuoteIndex = 2;
        else if (randomNumber <= 76) newQuoteIndex = 3;
        else if (randomNumber <= 95) newQuoteIndex = 4;
        else newQuoteIndex = 5;
    } while (newQuoteIndex === lastQuoteIndex);

    lastQuoteIndex = newQuoteIndex;
    return { quote: quotes[newQuoteIndex], font: fonts[newQuoteIndex] };
}

export default function Quotes() {
    const { quote, font } = getRandomQuote();

    return (
        <div style={{ fontFamily: font }}>
            &ldquo;{quote}&rdquo;
        </div>
    );
}