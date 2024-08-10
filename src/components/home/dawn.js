import React, { useEffect, useState } from "react";
import "./dawn.css";
import zena from"../../assets/zena.png";
import nier from"../../assets/nier.png";
import Type from "./type";

export default function Home({ darkMode }) {
    const [isFirstVisit, setIsFirstVisit] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
        if (!hasVisited) {
            setIsFirstVisit(true);
            localStorage.setItem("hasVisited", "true");
        }
    }, []);

    return (
        <div className="home">
            <div className="left">
                <div>
                    <p>Greetings, dear <span className="highlight">guests</span>.</p>
                    <br></br>
                    <p>You've <span className="highlight">returned</span>{isFirstVisit ? "?" : "."}</p>
                    <p className="indent-text">I'm <span className="highlight">Lazine</span>(ss)</p>
                    <br></br>
                    <p>also known as . . .</p>
                    <div className="indent-text">
                        <span className="highlight"><Type /></span>
                    </div>
                </div>
            </div>
            <div className="right">
                <img src={darkMode ? zena : nier} className="home-img" alt={darkMode ? "zena and claw" : "2b on boar"}/>
            </div>
        </div> 
    );
}