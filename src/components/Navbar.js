import React from "react";
import "./Navbar.css";
import { SiSpotify, SiSteam } from "react-icons/si";
import Icon from "../assets/icon.png";
import Toggle from "./Toggle.js";

export default function NavBar ({ setDarkMode, darkMode }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <img src={Icon} alt="Floor of philosophy icon" />
                    </a>
                </li>
                <li>
                    <SiSpotify className="links"/>
                </li>
                <li> 
                    <SiSteam className="links"/>
                </li>
                <li>
                    <Toggle setDarkMode={setDarkMode} darkMode={darkMode} className="links" />
                </li>
            </ul>
        </nav>
    )
  }
  