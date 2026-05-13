import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const themes = {
        dark: {
            background: '#2b2b2b',
            primary: '#ffffff'
        },
        light: {
            background: '#e4e4e4',
            primary: '#000000'
        }
    }
    const [currentTheme, setCurrentTheme] = useState("dark");
    const [theme, setTheme] = useState(themes[currentTheme]);

    useEffect(() => {
        setCSSvars(theme);
    }, [theme]);

    const changeTheme = () => {
        if (currentTheme === "dark") {
            setTheme(themes.light);
            setCurrentTheme("light");
            console.log(theme);
        }
        else {
            setTheme(themes.dark);
            setCurrentTheme("dark");
            console.log(theme);
        }
    }

    const setCSSvars = theme => {
        for (const value in theme) {
            document.documentElement.style.setProperty(`--${value}`, theme[value])
        }
    }

    return <ThemeContext.Provider value={{changeTheme, currentTheme}}>
        { children }
    </ThemeContext.Provider>
}

export default ThemeProvider;