import { useEffect, useRef, useState } from "react"

export default function Form (){

    const inputNameRef = useRef()
    const inputCityRef = useRef()
    const inputDateRef = useRef()
    const inputCountryRef = useRef()
    const inputAcceptRef = useRef()

    const [formValues, setFormValues] = useState({
        name:'',
        city:'',
        date:undefined,
        country:'MA',
        acceptConditions:false
    })

    const saveData = (e) => {
        e.preventDefault()
        const values = {
            name : inputNameRef.current.value,
            date : inputDateRef.current.value,
            city : inputCityRef.current.value,
            acceptConditions : inputAcceptRef.current.checked,
            country : inputCountryRef.current.value
        }
        setFormValues({
            name : inputNameRef.current.value,
            date : inputDateRef.current.value,
            city : inputCityRef.current.value,
            acceptConditions : inputAcceptRef.current.checked,
            country : inputCountryRef.current.value
        })
        console.log(values)
    }

    useEffect(() => {
        inputNameRef.current.value = 'ayman'
        inputCountryRef.current.selectedIndex = 3
        inputCityRef.current.focus()
        inputDateRef.current.value = new Date().toISOString().substring(0, 10)
    })

    // const handleChange = (e) => {
    //     const currentTarget = e.currentTarget
    //     const id = currentTarget.id
    //     let value = undefined
    //     console.log(currentTarget.type)
    //     switch(currentTarget.type){
    //         case 'text' :
    //             value = currentTarget.value
    //             break
    //         case 'checkbox' :
    //             value = currentTarget.checked
    //             break
    //         case 'select-one' :
    //             value = currentTarget.value
    //             break
    //         default :
    //             console.error('unvalid type')
    //     }

    //     setFormValues(prevState => {
    //         console.log(prevState)
    //         return {...prevState, ...{[id]: value}}
    //     })
    //     console.log(formValues)
    // }


    return <div className={"container my-4"}>
        <form>
            {Date().substring(0, 24)}
            {JSON.stringify(formValues)}
            <div className="form-group">
                <label>name</label>
                <input type="text" id="name" className='form-control' ref={inputNameRef}/>
            </div>
            <div className="form-group">
                <label>city</label>
                <input type="text" id="city" className='form-control' ref={inputCityRef}/>
            </div>
            <div className="form-group">
                <label>date</label>
                <input type="date" id="date" className="form-control" ref={inputDateRef}/>
            </div> 
            <div className="form-group">
                <label>country</label>
                <label htmlFor="country"></label>
                <select className="form-control" id="country" ref={inputCountryRef}>
                    <option value="MA">maroc</option>
                    <option value="DZ">algerie</option>
                    <option value="TN">tunisia</option>
                    <option value="OTHER">other</option>
                </select>    
            </div>   
            <div className="form-check">
                <input type="checkbox" id="acceptConditions" className="form-check-input" ref={inputAcceptRef}/>
                <label htmlFor="accept" className="form-check-label">accept</label>
            </div>

            <div className="form-check">
                <button className="btn btn-primary" onClick={saveData}>Save</button>
            </div>
        </form>
    </div>
}