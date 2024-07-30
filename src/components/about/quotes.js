import React from "react";
import "./quotes.css";

const quotes = [
    "It was good, though. Exquisite, even. No wonder humans used to eat them...",
    "From break and ruin, the most beautiful performance begins.",
    "May your woes be many, and your days few.",
    "Hesitation is defeat.",
    "YOU HAVE BEEN LIVING HERE FOR AS LONG AS YOU CAN REMEMBER . ."
];

const fonts = [
    "nier automata",
    "lobotomy corporation",
    "ultrakill",
    "sekiro",
    "omori",
];

function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 24) return { quote: quotes[0], font: fonts[0] };
    if (randomNumber <= 48) return { quote: quotes[1], font: fonts[1] };
    if (randomNumber <= 72) return { quote: quotes[2], font: fonts[2] };
    if (randomNumber <= 96) return { quote: quotes[3], font: fonts[3] };
    return { quote: quotes[4], font: fonts[4] };
}

export default function Quotes() {
    const { quote, font } = getRandomQuote();

    return (
        <div style={{ fontFamily: font }}>
            &ldquo;{quote}&rdquo;
        </div>
    );
}