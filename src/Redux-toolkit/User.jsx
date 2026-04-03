import React from 'react'
import { useSelector } from 'react-redux'
import { userSelectors } from './store/userSelectors'

export default function User() {
    const user = useSelector(userSelectors)
  return (
    <>
    <div className="px-4 pt-5 my-5 text-center border-bottom">
        <h1 className="display-4 fw-fold">{user.name} {user.age} years old</h1>
        <div className="mx-auto">
            <p className="lead mb-4">
                <img src={`https://flagcdn.com/48×36/${user.country}.png`}/>
            </p>
        </div>
    </div>
    </>
  )
}
