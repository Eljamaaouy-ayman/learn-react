import React, { useContext, useEffect, useRef } from 'react'
import { usersContext } from './UsersApp'

export default function UserAdd({lastId, onAddUser}) {
    const fullName = useRef()
    const country = useRef()
    const context = useContext(usersContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        context.userAdd({
            payload:{
                fullName:fullName.current.value,
                country:country.current.value
            }
        })
        fullName.current.value = ''
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>User Add</h1>
        <div className="mb-3 row">
            <label htmlFor="currentId" className='col-sm-2 col-form-label'>Current id</label>
            <div className="col-sm-10">
                <input type="text" readOnly className='form-control-plaintext' id='currentId' value={context.lastId + 1}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="fullName" className='col-sm-2 col-form-label'>full name</label>
            <div className="col-sm-10">
                <input type="text" className='form-control' id='fullName' ref={fullName}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="country" className='col-sm-2 col-form-label'>country</label>
            <div className="col-sm-10">
                <select className="form-select" id='country' name='country' ref={country}>
                    <option val="">select your country</option>
                    <option val="1">Morocco</option>
                    <option val="2">Egypt</option>
                    <option val="3">Tunisie</option>
                </select>
            </div>
        </div>
        <div className="d-grid gap-2">
            <button className='btn btn-primary' type='submit'>ADD</button>
        </div>
    </form>
    </>
  )
}
