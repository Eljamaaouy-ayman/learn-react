import { useRef, useState } from "react"

export default function FormValidationBeginner(){

    const nameField = useRef()
    const emailField = useRef()
    const messageField = useRef()
    const countryField = useRef()
    const acceptField = useRef()
    const [errors, setErrors] = useState([])

    const validateForm = () => {
        const nameValue = nameField.current.value
        const emailValue = emailField.current.value
        const messageValue = messageField.current.value
        const countryValue = countryField.current.value
        const acceptValue = acceptField.current.checked

        let isFormValid = true

        setErrors([])
        // console.log(nameValue)
        if (nameValue.trim() === ''){
            setErrors(prevState => {
                return [...prevState, 'name required']
            })
            isFormValid = false
        }

        if (emailValue.trim() === ''){
            setErrors(prevState => {
                return [...prevState, 'email required']
            })
            isFormValid = false
        }
        else if (!emailValue.match(/^\S+@\S+\.\S+$/))
        {
            setErrors(prevState => {
                return [...prevState, 'email format is unvalid']
            })
            isFormValid = false
        }

        if (messageValue.trim() === ''){
            setErrors(prevState => {
                return [...prevState, 'message required']
            })
            isFormValid = false
        }

        if (countryValue.trim() === ''){
            setErrors(prevState => {
                return [...prevState, 'country required']
            })
            isFormValid = false
        }

        if (!acceptValue){
            setErrors(prevState => {
                return [...prevState, 'accept conditions required']
            })
            isFormValid = false
        }
        // console.log(errors.length)
        return isFormValid
    }
    const handleSubmit = (e) => {
        // console.log(e)
        if (!validateForm())
            e.preventDefault()
        
        // validateForm()

    }

    return <div className={'container-fluid w-75 mx-auto my-5'}>
        {
            errors.length > 0 ?
            <div className="alert alert-danger" role="alert">
                <strong>Errors</strong>
                <ul>
                {errors.map((error, key) => <li key={key}>{error}</li>)}
                </ul>
            </div> 
            
            : ''
        }
        <form onSubmit={handleSubmit}>
            <h1>Contract form</h1>
            <hr />

            <div className="form-group">
                <label>name</label>
                <input type="text" id="name" className='form-control' ref={nameField}/>
            </div>
            <div className="form-group">
                <label>email address</label>
                <input type="text" id="email address" className='form-control' ref={emailField}/>
            </div>
            <div className="form-group">
                <label>message</label>
                <input type="text" id="message" className='form-control' ref={messageField}/>
            </div>
            <div className="form-group">
                <label>country</label>
                <label htmlFor="country"></label>
                <select className="form-control" id="country" ref={countryField}>
                    <option value="MA">maroc</option>
                    <option value="DZ">algerie</option>
                    <option value="TN">tunisia</option>
                    <option value="OTHER">other</option>
                </select>    
            </div>  
            <div className="form-check">
                <input type="checkbox" id="acceptConditions" className="form-check-input" ref={acceptField}/>
                <label htmlFor="accept" className="form-check-label">accept conditions</label>
            </div>
            <div className="form-check">
                <button className="btn btn-primary" >Submit</button>
            </div>
        </form>
    </div>
}