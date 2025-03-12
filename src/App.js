import React from "react";
import "swiper/css";
import "./App.css";
import { useLocalStorage } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, Navigation, History } from "swiper/modules";
import NavBar from "./components/navbar/Navbar.js";
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
            
            <Swiper 
                direction={"vertical"} 
                slidesPerView={1} 
                mousewheel={true} 
                history={{key: ""}}
                pagination={{clickable: true}} 
                speed={750}
                modules={[Mousewheel, Pagination, Navigation, History]}
            >
                <SwiperSlide data-history="dawn"><Home darkMode={darkMode} /></SwiperSlide>
                <SwiperSlide data-history="noon"><About darkMode={darkMode} /></SwiperSlide>
                <SwiperSlide data-history="dusk"><Achievements /></SwiperSlide>
                <SwiperSlide data-history="midnight"><Other /></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default App;