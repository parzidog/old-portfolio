import React from 'react';
import { useState, useEffect } from 'react'


export default function Button() {
    const [theme, settheme] = useState("dark")
    
    const storeUserSetPreference = (pref) => {
        localStorage.setItem("theme", pref);
    };
    
    const getUserSetPreference = () => {
        return localStorage.getItem("theme");
    };
    
    const handleToggle = () => {
        const newTheme = theme === "light" ? "dark" : "light"
        settheme(newTheme)
        storeUserSetPreference(newTheme)
        document.body.dataset.theme = theme
    }

    useEffect(() => {
        const userSetPreference = getUserSetPreference();
        const mediaQueryPreference = getMediaQueryPreference();
    
        if (userSetPreference) {
            settheme(userSetPreference)
        } else {
            settheme(mediaQueryPreference)
        }
    
        document.body.dataset.theme = theme
    }, [theme])

    const getMediaQueryPreference = () => {
        const mediaQuery = "(prefers-color-scheme: dark)";
        const mql = window.matchMedia(mediaQuery);
        const preference = typeof mql.matches === "boolean";
        
        if (preference) {
            return mql.matches ? "dark" : "light";
        }
    };

    return (
        <>
            <button onClick={handleToggle}>
                <span>Change Theme</span>
            </button>
        </>
    )
}