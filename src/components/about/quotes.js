import React from "react";
import "./quotes.css";

const quotes = [
    "It was good, though. Exquisite, even. No wonder humans used to eat them...",
    "From break and ruin, the most beautiful performance begins.",
    "May your woes be many, and your days few.",
    "Hesitation is defeat.",
    "May you find your book in this place.",
    "YOU HAVE BEEN LIVING HERE FOR AS LONG AS YOU CAN REMEMBER . ."
];

const fonts = [
    "nier automata",
    "lobotomy corporation",
    "ultrakill",
    "sekiro",
    "library of ruina",
    "omori",
];

function getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber <= 19.2) return { quote: quotes[0], font: fonts[0] };
    if (randomNumber <= 38.4) return { quote: quotes[1], font: fonts[1] };
    if (randomNumber <= 57.6) return { quote: quotes[2], font: fonts[2] };
    if (randomNumber <= 76.8) return { quote: quotes[3], font: fonts[3] };
    if (randomNumber <= 96) return { quote: quotes[4], font: fonts[4] };
    return { quote: quotes[5], font: fonts[5] };
}

export default function Quotes() {
    const { quote, font } = getRandomQuote();

    return (
        <div style={{ fontFamily: font }}>
            &ldquo;{quote}&rdquo;
        </div>
    );
}