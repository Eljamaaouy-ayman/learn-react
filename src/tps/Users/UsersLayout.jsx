import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom'
import UsersTable from './UsersTable'
import UserAdd from './UserAdd'
import UsersEdit from './UsersEdit'
import UsersDelete from './UsersDelete'

export default function UsersLayout({users}) {
  return (
    <>
        <BrowserRouter>
        <nav>

            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link to={'/'} className='nav-link' >users list</Link>
                </li>
                <li className="nav-item">
                    <Link to={'/user/create'} className='nav-link' >add user</Link>
                </li>
            </ul>
        </nav>
        <Routes>
            <Route index element={<UsersTable users={users}></UsersTable>}></Route>
            <Route path={'/user/create'} element={<UserAdd></UserAdd>}></Route>
            <Route path={'/user/:id/edit'} element={<UsersEdit></UsersEdit>}></Route>
            <Route path={'/user/:id/delete'} element={<UsersDelete></UsersDelete>}></Route>
        </Routes>
        </BrowserRouter>

        <Outlet></Outlet>
    </>
  )
}
