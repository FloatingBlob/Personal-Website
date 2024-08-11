import React from "react";
import "./Navbar.css";
import { SiSpotify, SiSteam } from "react-icons/si";
import Icon from "../../assets/icon.png";
import Toggle from "./Toggle.js";

export default function NavBar ({ setDarkMode, darkMode }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#dawn"><img src={Icon} className="icon" alt="Floor of philosophy icon" /></a>
                </li>
                <li>
                    <a href="https://open.spotify.com/user/36n2d2ubsuni1jrat4kuxrk70" target="_blank" rel="noopener noreferrer" > <SiSpotify  /></a>
                </li>
                <li >
                    <a href="https://steamcommunity.com/id/Floto/" target="_blank" rel="noopener noreferrer" > <SiSteam  /></a>
                </li>
                <li>
                    <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
                </li>
            </ul>
        </nav>
    )
}
  