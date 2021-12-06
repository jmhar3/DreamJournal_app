import React from "react"
import "../css/colour_mode.css"

const ColourMode = () => {
    const clicked = document.getElementsByClassName("clicked");
    const theme = localStorage.getItem("theme");
    const body = document.body;

    if (theme === "pink") {
        body.classList.add('pink')
    }

    const switchTheme = (e, colour) => {
        body.classList.replace(theme, colour)
        localStorage.setItem("theme", colour)
        // clicked.classList.remove("clicked")
        // e.target.classList.add("clicked")
    }

    return (
        <section id="colour_modes">
            <button
                className="pink_mode clicked"
                onClick={e => switchTheme(e, "pink")}
            ></button>
            <button
                className="blue_mode"
                onClick={e => switchTheme(e, "blue")}
            ></button>
            <button
                className="dark_mode"
                onClick={e => switchTheme(e, "dark")}
            ></button>
        </section>
        
    )
}

export default ColourMode;