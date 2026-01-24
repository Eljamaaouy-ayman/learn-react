import { useState } from "react"

export default function Fruit()
{
    const [fruit, setFruit] = useState('')
    const [fruitList, setFruitList] = useState([])
    const displayFruits = () => fruitList.map((fruit, key) => <li key={key}>{fruit}</li>)

    const handleInput = () => {
        const fruitVal = document.querySelector('#fruit').value
        setFruit(fruitVal)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setFruitList([...fruitList, fruit])
    }
    return <>
        <span>
            <form>
                <input type="text" onChange={handleInput} id="fruit" />
                <input onClick={handleSubmit} type="submit" value='add fruit'/>
            </form>
        </span>
        <h1 className='h1'>fruits :</h1>
        <ul>
            {displayFruits()}
        </ul>
    </> 
    
}