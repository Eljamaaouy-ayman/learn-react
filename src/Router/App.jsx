import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Contact from './pages/Contact'
import Blogs from './pages/Blogs'
import HomePage from './pages/homePage'
import PageNotFound from './pages/pageNotFound'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='contact' element={<Contact />}></Route>
                <Route index element={<HomePage />}></Route>
                <Route path='blogs' element={<Blogs />}></Route>
                <Route path='*' element={<PageNotFound />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
