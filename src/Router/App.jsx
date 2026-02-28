import React, { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import HomePage from './pages/homePage';
import PageNotFound from './pages/pageNotFound';

// 1. Create and export the context
export const DarkModeContext = createContext();

export default function App() {
    // 2. Create the value you want to share
    const darkModeValue = {
        isDarkMode: true,
        toggleDarkMode: () => {},
        backgroundColor: '#333',
        textColor: '#fff'
    };

    return (
        // 3. Provide the VALUE, not the context itself
        <DarkModeContext.Provider value={darkModeValue}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout />}>
                        <Route path='contact' element={<Contact />} />
                        <Route index element={<HomePage />} />
                        <Route path='blogs' element={<Blogs />} />
                        <Route path='*' element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </DarkModeContext.Provider>
    );
}