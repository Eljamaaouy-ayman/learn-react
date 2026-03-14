import React, { useContext, useEffect, useRef, useState } from 'react'
import { usersContext } from './UsersApp'
import { useParams } from 'react-router-dom'

export default function UsersEdit({lastId, onAddUser}) {
    const context = useContext(usersContext)
    const fullName = useRef()
    const country = useRef()
    const [currentUser, setCurrentUser] = useState({})
    const params = useParams()
    useEffect(() => {
        if (!context?.users) return;
        
        const { id } = params;
        // ✅ Fix 1: Find the user correctly
        const user = context.users.find(user => user.id === parseInt(id));
        
        if (user) {
            setCurrentUser(user);
            console.log('User found:', user);
        } else {
            console.error("User not found with id:", id);
        }
    }, [params.id, context.users]);

    // if (!currentUser) {
    //     return <div className="alert alert-info">Loading user data...</div>;
    // }
    console.log(currentUser)
    const handleSubmit = (e) => {
        e.preventDefault()
        context.userUpdate({
            payload:{
                fullName:fullName.current.value,
                country:country.current.value,
                id: parseInt(params.id)
            }
        })
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <h1>User Add</h1>
        <div className="mb-3 row">
            <label htmlFor="currentId" className='col-sm-2 col-form-label'>Current id</label>
            <div className="col-sm-10">
                <input type="text" readOnly className='form-control-plaintext' id='currentId' defaultValue={currentUser?.id}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="fullName" className='col-sm-2 col-form-label'>full name</label>
            <div className="col-sm-10">
                <input type="text" className='form-control' id='fullName' ref={fullName} defaultValue={currentUser?.fullName}/>
            </div>
        </div>
        <div className="mb-3 row">
            <label htmlFor="country" className='col-sm-2 col-form-label'>country</label>
            <div className="col-sm-10">
                <select className="form-select" id='country' name='country' ref={country} defaultValue={currentUser?.country} key={currentUser?.country}>
                    <option value="">select your country</option>
                    <option value="1">Morocco</option>
                    <option value="2">Egypt</option>
                    <option value="3">Tunisie</option>
                </select>
            </div>
        </div>
        <div className="d-grid gap-2">
            <button className='btn btn-primary' type='submit'>UPDATE</button>
        </div>
    </form>
    </>
  )
}
