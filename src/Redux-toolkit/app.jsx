import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store/store'
import User from './User'
import UserForm from './UserForm'

export default function App() {
  return (
    <div>
        <Provider store={store} >
            <User></User>
            <UserForm></UserForm>
        </Provider>
    </div>
  )
}

