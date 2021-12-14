import React from "react"

const ColourMode = () => {
    const theme = localStorage.getItem("theme");
    const body = document.body;

    body.className = theme

    const switchTheme = (e, colour) => {
        localStorage.setItem("theme", colour)
        body.className = theme
        window.location.reload();
    }

    return (
        <section id="colour_modes">
            <button
                id="pink_mode"
                onClick={e => switchTheme(e, "pink")}
            ></button>
            <button
                id="orange_mode"
                onClick={e => switchTheme(e, "orange")}
            ></button>
            <button
                id="green_mode"
                onClick={e => switchTheme(e, "green")}
            ></button>
            <button
                id="blue_mode"
                onClick={e => switchTheme(e, "blue")}
            ></button>
            <button
                id="purple_mode"
                onClick={e => switchTheme(e, "purple")}
            ></button>
            <button
                id="dark_mode"
                onClick={e => switchTheme(e, "dark")}
            ></button>
        </section>
        
    )
}

export default ColourMode;