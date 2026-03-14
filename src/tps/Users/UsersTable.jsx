import React, { useContext, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { usersContext } from './UsersApp'

export default function UsersTable() {
    const context = useContext(usersContext)
    
  return (
    <>
        <h1>Users</h1>
        <table className='table table-striped table-inverse table-responsive'>
            <thead className='thead-inverse'>
                <tr>
                    <th>#ID</th>
                    <th>Full Name</th>
                    <th>Country</th>
                    <th>operations</th>
                </tr>
            </thead>
            <tbody>
            {
                (context.users?.length > 0) ? context.users.map((user, key) =>
                    <tr key={key}>
                        <td>{user.id}</td>
                        <td>{user.fullName}</td>
                        <td>{user.country}</td>
                        <td>
                            <Link to={`/user/${user.id}/edit`} className={'btn btn-primary mx-1'}>Update</Link>
                            <Link to={`/user/${user.id}/delete`} className={'btn btn-danger'}>delete</Link>
                        </td>
                    </tr>
                ) : <tr>
                    <td colSpan="4" className="text-center">
                        <h2 className="text-muted">No users found</h2>
                    </td>
                </tr>
            }
            </tbody>
        </table>
    </>
  )
}
