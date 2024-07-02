import React from "react";
import Icon from "../assets/icon.png";
import "./Navbar.css";
import Toggle from "./Toggle.js";

export default function NavBar ({ setDarkMode, darkMode }) {
    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <img src={Icon} alt="Icon" />
                    </a>
                </li>
                <li>
                    <Toggle setDarkMode={setDarkMode} darkMode={darkMode} />
                </li>
            </ul>
        </nav>
    )
  }
  