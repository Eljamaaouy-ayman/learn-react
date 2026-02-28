import React, { useContext } from 'react';
import { DarkModeContext } from '../App'; // Import the context

export default function PageNotFound() {
    // 4. Call useContext INSIDE the component
    const darkMode = useContext(DarkModeContext);
    
    console.log('Dark mode context:', darkMode); // Check what you get
    
    return (
        <>
            <h1 className = {darkMode.isDarkMode ? 'bg-danger' : 'bg-white'}>404 page not found</h1>
            {/* Example using context value */}
            <p>Dark mode is: {darkMode.isDarkMode ? 'ON' : 'OFF'}</p>
        </>
    );
}