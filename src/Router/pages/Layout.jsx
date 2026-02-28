import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { DarkModeContext } from '../App'

export default function Layout() {
    const darkMode = useContext(DarkModeContext)
  return (
    <>
        <nav className='bg-primary'>
            <ul className="nav justify-content-center">
                <li className="nav-item ">
                    <Link to='/' className="nav-link text-white">home</Link>
                </li>
                <li className="nav-item">
                <Link to='/blogs' className="nav-link text-white">blogs</Link>
                </li>
                <li className="nav-item">
                <Link to='/contact' className="nav-link text-white">contact</Link>
                </li>
            </ul>
        </nav>
        <div className={darkMode.isDarkMode ? "container-fluid w-75 mx-auto" : "bg-black"}>
            <Outlet></Outlet>
        </div>
    </>
  )
}
