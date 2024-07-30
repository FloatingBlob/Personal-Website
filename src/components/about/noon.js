import React from "react";
import "./noon.css";
import ihwa from"../../assets/ihwa.png";
import Quotes from "./quotes";

export default function About() {
    return(
        <div className="about">
            <div className="left">
                <img src={ihwa} className="ihwa" alt="ihwa" />
            </div>
            <div className="right">
                <div>
                    <p className="title">More <span className="highlight">about</span> me</p>
                    <br></br>
                    <p>My name is <span className="highlight">Joe</span> and I'm <span className="highlight">78</span> years old.</p>
                    <p>I live in <span className="highlight">Djibouti City</span> located in <span className="highlight">Djibouti</span>.</p>
                    <br></br>
                    <p>I like to think myself as:</p>
                    <p className="indent-text">- An <span className="highlight">indie</span> video game enjoyer</p>
                    <p className="indent-text">- A <del>good</del> programmer</p>
                    <p className="indent-text">- Lord of <span className="highlight">Toast</span></p>
                    <br></br>
                    <p>Favourite Quote:</p> 
                    <p className="indent-text"><Quotes /></p>
                </div>
            </div>
        </div> 
    )
}