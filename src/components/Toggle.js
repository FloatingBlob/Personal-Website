import React from "react";
import "./Toggle.css";
import { RxSun, RxMoon } from "react-icons/rx";

export default function Toggle({ setDarkMode, darkMode }) {
    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <RxSun /> : <RxMoon />}
        </button>
    );
}