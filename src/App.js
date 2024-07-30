import React from "react";
import "./App.css";
import { useLocalStorage } from 'react-use';
import NavBar from "./components/Navbar.js";
import Home from "./components/home/dawn.js"
import About from "./components/about/noon.js";
import Achievements from "./components/achievements/dusk.js";
import Other from "./components/other/midnight.js";

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode, setdarkMode] = useLocalStorage("darkMode", preference);

    return (
        <div theme={darkMode ? "dark" : "light"}>
	        <NavBar setDarkMode={setdarkMode} darkMode={darkMode} />
            <div className="container">
                <section><Home darkMode={darkMode} /></section>
                <section><About darkMode={darkMode} /></section>
                <section><Achievements /></section>
                <section><Other /></section>
            </div>
        </div>
    );
}

export default App;