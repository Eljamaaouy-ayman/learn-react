import { useState } from "react"

export default function Form()
{
    const [formValues, setFormValues] = useState({
        name:'',
        city:'',
        age:'',
        country:'MA',
        accept:'false'
    })
    

    const inputChange = (e) => {
        const currentTarget = e.currentTarget
        const id = currentTarget.id
        let value = currentTarget.value

        if (currentTarget.type == 'checkbox')
            value = currentTarget.checked

        setFormValues(prevState => {
            return {...prevState, ...{[id]: value}}
        })
    }
    return <div className={'container my-4'} >
        <form>
        {JSON.stringify(formValues)}
            <div className="form-group">
                <label>Name :</label>
                <input type="text" id="name" className="form-control" onChange={inputChange}/>
            </div>

            <div className="form-group">
                <label>City :</label>
                <input type="text" id="city" className="form-control" onChange={inputChange}/>
            </div>
            
            <div className="form-group">
                <label>Age :</label>
                <input type="text" id="age" className="form-control" onChange={inputChange}/>
            </div>

            <div className="form-group">
                <label>Country :</label>
                <label htmlFor="country"></label>
                <select className="form-control" id="country" onChange={inputChange}>
                    <option value="MA">morocco</option>
                    <option value="TN">tunisie</option>
                    <option value="DZ">algerie</option>
                    <option value="OTHER">other</option>
                </select>
            </div> 
            
            <div className="form-check">
                <input type="checkbox" id="accept" className="form-check-input" onChange={inputChange}/>
                <label htmlFor="accept" className="form-check-label">accept the rules</label>
            </div>
            <div className="form-group">
                <div className="btn btn-primary">save</div>
            </div>

        </form>
    </div>
}