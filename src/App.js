import React from "react";
import { useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import "./App.css";
import Main from "./components/home/dawn.js"
import NavBar from "./components/Navbar.js";

const LightTheme = {
    pageBackground: "#f0f0f0",
    titleColor: "#000000",
    tagLineColor: "#caa52b"
}

const DarkTheme = {
    pageBackground: "#101010",
    titleColor: "#ffffff",
    tagLineColor: "#d4af37"
}

const themes = {
    light: LightTheme,
    dark: DarkTheme
}

function App() {
    const [theme, setTheme] = useState("dark")

    return (
        <ThemeProvider theme={themes[theme]}>
	        <NavBar theme={theme} setTheme={setTheme} />
            <Main theme={theme} />
        </ThemeProvider>
    );
}

export default App;