import React from "react";
import "./App.css";
import Main from "./components/home/dawn.js"
import NavBar from "./components/Navbar.js";
import { useLocalStorage } from 'react-use';

function App() {
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [darkMode, setdarkMode] = useLocalStorage("darkMode", preference);

    return (
        <div theme={darkMode ? "dark" : "light"}>
	        <NavBar setDarkMode={setdarkMode} darkMode={darkMode} />
            <Main />
        </div>
    );
}

export default App;