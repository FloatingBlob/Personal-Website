import React from "react";
import "./dawn.css";
import Type from "./type";
import { useFirstVisit } from "../../hooks/visit.js";
import { useIndentToggle } from "../../hooks/indent.js";

export default function Home({ darkMode }) {
    const zena = "/assets/zena.png";
    const nier = "/assets/nier.png";

    const isFirstVisit = useFirstVisit();
    useIndentToggle();

    const SoulSociety = () => (
        <p>Welcome to my <span className="highlight">soul society</span>.</p>
    );
    const Returned = () => (
        <p className="indent-text">You've <span className="highlight">returned</span>.</p>
    );

    return (
        <div className="home">
            <div className="left">
                <p>Greetings, dear <span className="highlight">guest</span>.</p>
                {isFirstVisit ? <SoulSociety /> : <Returned />}
                <br />
                <p>You can call me <span className="highlight">Lazi</span>.</p>
                <br />
                <p>Known as . . .</p>
                <div className="indent-text"><span className="highlight"><Type /></span></div>
            </div>
            <div className="right">
                <img src={darkMode ? zena : nier} className="home-img" alt={darkMode ? "zena and claw" : "2b on boar"}/>
            </div>
        </div> 
    );
}