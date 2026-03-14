import React, { createContext, useContext, useState } from 'react'
import UsersTable from './UsersTable'
import UserAdd from './UserAdd'
import UsersLayout from './UsersLayout'

const INITIAL_DATA = [

]
export const usersContext = createContext({
    users: {},
    lastId: 0,
    userAdd: () => null,
    userUpdate: () => null,
    userDelete: () => null
})

export default function UsersApp() {
    const [users, setUsers] = useState([])
    const [lastId, setLastId] = useState(0)
    const userAdd = (payload) => {
        setUsers(prevState => [...prevState, {
            id: lastId+1,
            fullName: payload.payload.fullName,
            country: payload.payload.country
        }])
        setLastId(prevState => prevState + 1)
        window.history.back()

    }

    const userDelete = (payload) => {
        setUsers(prevState => prevState.filter(user => user.id !== parseInt(payload.payload.id)))
        window.history.back()

    }

    const userUpdate = (payload) => {
        const {id, ...rest} = payload.payload
        setUsers(prevState => prevState.map(user => {
            if (id === user.id)
                return {id : user.id, ...rest}
            else
                return user
        }))
        window.history.back()
    }
  return (
    <>
        <usersContext.Provider value={{
            users: users,
            lastId : lastId,
            userAdd: userAdd,
            userUpdate: userUpdate,
            userDelete: userDelete
        }}>
        <UsersLayout users={users}></UsersLayout>
        </usersContext.Provider>
    </>
  )
}
