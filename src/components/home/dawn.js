import React from "react";
import "./dawn.css";

export default function Main({ theme }) {
    return (
        <div className="container">
            <section>
                <h1 style={{ color: theme.titleColor }}>First Page</h1>
            </section>
            
            <section>
                <h1 style={{ color: theme.titleColor }}>Second Page</h1>
            </section>

            <section>
                <h1 style={{ color: theme.titleColor }}>Third Page</h1>
            </section>

            <section>
                <h1 style={{ color: theme.titleColor }}>Fourth Page</h1>
            </section>
        </div>
    );
}