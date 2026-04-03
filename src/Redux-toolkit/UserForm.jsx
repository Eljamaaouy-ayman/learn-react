import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetUser, updateUser } from './features/UserSlice'
import { userSelectors } from './store/userSelectors'

export default function UserForm() {
    const name = useRef(null)
    const age = useRef(null)
    const country = useRef(null)
    const user = useSelector(userSelectors)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        // e.preventDefault()
        
        dispatch(updateUser({
            name : name.current.value,
            age : age.current.value,
            country : country.current.value
        }))
    }

    const resetUserCallback = (e) => {
        dispatch(resetUser())
    }
  return (
    <>
        <div className="container">
            <div className="d-grid gap-2 d-flex justify-content-center mb-5">
                <button type='button' className="btn btn-primary btn-lg px-4 me-ms-3" data-bs-toggle="modal" data-bs-target="#exampleModal">update your profile</button>
                <button type='button' className="btn btn-outline-danger btn-lg px-4" onClick={resetUserCallback}>delete your profile</button>
            </div>
        </div>
        <div>
            <div>
                <h5>user update</h5>
                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="mb-3 row">
                        <label htmlFor="fullName">full name</label>
                        <div className="col-sm-10">
                            <input type="text" className='form-control' id="fullName" defaultValue={user?.name} name='fullName' ref={name}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="age">age</label>
                        <div className="col-sm-10">
                            <input type="text" className='form-control' id="age" defaultValue={user?.age} name='age' ref={age}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="country">country</label>
                        <div className="col-sm-10">
                            <input type="text" className='form-control' id="country" defaultValue={user?.country} name='country' ref={country}/>
                        </div>
                    </div>
                    <button className='btn btn-primary' onClick={handleSubmit} data-bs-dismiss="modal">update user</button>
                    <button className='btn btn-secondary' data-bs-dismiss="modal">close</button>
                </form>
            </div>
        </div>
    </>
  )
}

