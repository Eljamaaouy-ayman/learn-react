import { useEffect, useRef, useState } from "react"

export default function FormValidation(){
    const name = useRef()
    const email = useRef()
    const acceptConditions = useRef()
    const message = useRef()

    const [formSent, setFormSent] = useState(false)
    const [errors, setErrors] = useState({})
    const [isFormValid, setIsFormValid] = useState(true)

    const removeError = (fieldName) => {
        setErrors(prevState => {
            const newErrors = {...prevState}
            delete newErrors[fieldName]
            return newErrors
        })
    }

    const validateForm = () => {
        const nameValue = name.current.value
        const emailValue = email.current.value
        const messageValue = message.current.value
        const acceptConditionsValue = acceptConditions.current.checked

        let isformValid = true

        // console.log(nameValue,
        //     emailValue,
        //     messageValue,
        //     acceptConditionsValue
        // )

        if (nameValue.trim() === ''){
            setErrors(prevState => {return {...prevState,...{name : "name required"}}})
            isformValid = false
            // displayError(name)
        }
        else 
            removeError('name')
        if (emailValue.trim() === ''){
            setErrors(prevState => {return {...prevState,...{email : "email required"}}})
            isformValid = false
            // displayError(email)
        }
        else if (!emailValue.match(/^\S+@\S+\.\S+$/)){
            setErrors(prevState => {return {...prevState,...{email : "email format is unvalid"}}})
            isformValid = false
            // displayError(email)
        }
        else 
            removeError('email')
        if (messageValue.trim() === ''){
            setErrors(prevState => {return {...prevState,...{message : "message required"}}})
            isformValid = false
            // displayError(message)
        }
        else if (messageValue.length < 200){
            setErrors(prevState => {return {...prevState,...{message : `the length is lower than 200 (${messageValue.length}/200)`}}})
            isformValid = false
        }
        else 
            removeError('message')
        if (acceptConditionsValue === false){
            setErrors(prevState => {return {...prevState,...{acceptConditions : "accept conditions required"}}})
            isformValid = false
            // displayError(acceptConditions)
        }
        else 
            removeError('acceptConditions')
        setIsFormValid(!isformValid)
        return isformValid
        
    }

    // useEffect(() => {
    //     validateForm()
    // }, [errors])

    const displayError = (fieldName) => {
        const Error = errors[fieldName]
        // console.log(field)
        const field = document.querySelector(`#${fieldName}`)
        if (Error !== undefined){
            field.style.border = '1px solid red'
            return <div className="text-danger">{Error}</div>
        }
        if (field !== null)
            field.removeAttribute('style')
        // console.log(errors, fieldName)
    }

    const displayErrors = () => {
        return Object.entries(errors).map((error, key) => {
            const [field, message] = error
            return <li key={key}>{field} : {message}</li>
        })
    }

    const resetForm = () => {
        name.current.value = ''
        email.current.value = ''
        message.current.value = ''
        acceptConditions.current.checked = false
    }

    const handleChange = () => {
        validateForm()
    }

    const submitForm = (e) => {
        e.preventDefault()

        // const nameValue = name.current.value
        // const emailValue = email.current.value
        // const messageValue = message.current.value
        // const acceptConditionsValue = acceptConditions.current.checked

        // console.log(nameValue,
        //     emailValue,
        //     messageValue,
        //     acceptConditionsValue
        // )
        setFormSent(false)
        setErrors('')
        if (validateForm()){
            setFormSent(true)
            resetForm()
        }
        // console.log(errors)
    }

    return <div className={"container-fluid w-75 mx-auto my-5"}>
        {/* {Object.keys(errors).length > 0 ?
        <div className="alert alert-danger" role="alert">
            <strong>Errors</strong>
            <ul>{displayErrors()}</ul>
        </div>
        : ''} */}
        {formSent?
        <div>
        <div className="alert alert-success" role="alert">
            <strong>success</strong> the form sent successfully!
        </div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">thank you for sending the message</h1>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="." role="button">return to home page</a>
                    </p>
                </div>
            </div>
        </div>
        :
        <form onSubmit={submitForm} onChange={handleChange}>
            <h1>Contract form</h1>
            <hr />

            <div className="form-group">
                <label>name</label>
                <input type="text" id="name" className='form-control' ref={name}/>
                {displayError('name')}
            </div>
            <div className="form-group">
                <label>email address</label>
                <input type="text" id="email" className='form-control' ref={email}/>
                {displayError('email')}
                </div>
            <div className="form-group">
                <label>message</label>
                <input type="text" id="message" className='form-control'ref={message}/>
                {displayError('message')}
                </div>
            <div className="form-check">
                <input type="checkbox" id="acceptConditions" className="form-check-input" ref={acceptConditions}/>
                <label htmlFor="accept" className="form-check-label">accept conditions</label>
                {displayError('acceptConditions')}
                </div>
            <div className="form-check">
                <button disabled={isFormValid} className="btn btn-primary" >Submit</button>
            </div>
        </form>
        }

        
    </div>
}