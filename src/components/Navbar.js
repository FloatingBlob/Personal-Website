import React from "react";
import Icon from "../assets/icon.png";
import { RxSun, RxMoon } from "react-icons/rx";
import { Button } from "react-bootstrap";
import "./Navbar.css";

export default function NavBar (props) {
    function changeTheme() {
        if (props.theme === "dark") {
            props.setTheme("light");
        } 
        else {
            props.setTheme("dark");
        }
    };

    const mode = props.theme === "dark" ? <RxMoon size={40} /> : <RxSun size = {40} />;

    return (
        <nav>
            <ul>
                <li>
                    <a href="/">
                        <img src={Icon} alt="Icon" />
                    </a>
                </li>
                <li>
                    <Button onClick={changeTheme}>
                        {mode}
                    </Button>
                </li>
            </ul>
        </nav>
    )
  }
  