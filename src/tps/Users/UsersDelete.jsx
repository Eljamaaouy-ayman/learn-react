import React, { useContext, useEffect, useRef } from 'react'
import { usersContext } from './UsersApp'
import { useParams } from 'react-router-dom'

export default function UsersDelete() {
    const context = useContext(usersContext)
    const params = useParams()
    const handleSubmit = (e) => {
        e.preventDefault()
        context.userDelete({
            payload:{
                id: params.id
            }
        })
    }
  return (
    <>
        <button className='btn btn-danger' type='submit' onClick={handleSubmit}>DELETE</button>

    </>
  )
}
