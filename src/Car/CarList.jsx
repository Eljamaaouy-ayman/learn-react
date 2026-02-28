import React, { useState } from 'react';

let cars = [
    {
        "brand": "mercedes",
        "model": "A class",
        "car body": "hach back",
        "color": "red",
        "year": 2020,
        "price": "20000$"
    },
    {
        "brand": "toyota",
        "model": "rav 4",
        "car body": "4*4",
        "color": "gray",
        "year": 2020,
        "price": "18000$"
    },
    {
        "brand": "bmw",
        "model": "serie 4",
        "car body": "cedan",
        "color": "bleu",
        "year": 2024,
        "price": "40000$"
    }
];
// cars = []

// ✅ Fixed: Props as object with destructuring
function Car({ brand, model, color, year, price, body }) {
    return (
        <tr>
        <td scope="row">{brand}</td>
        <td>{model}</td>
        <td>{color}</td>
        <td>{year}</td>
        <td>{price}</td>
        <td>{body}</td>
    </tr>
    );
}

export default function CarList() {
    const [loggedIn, isLoggedIn] = useState(true)
    const displayCars = () => {
        return cars.map((car, key) => {
            const {brand, model, color, year, price, "car body" : carBody} = car
            return <Car brand={brand} model={model} color={color} year={year} price={price} body={carBody} key={key}/>
        })
    };
    
    return (
        <div>
            {loggedIn && cars.length > 0 ?
            <table className="table">
                <thead>
                    <tr>
                        <th>brand</th>
                        <th>model</th>
                        <th>color</th>
                        <th>year</th>
                        <th>price</th>
                        <th>car body</th>
                    </tr>
                </thead>
                <tbody>
                    {displayCars()}
                </tbody>
            </table>
            :
            <a className='btn btn-primary' href="#">log in</a>
            }
        </div>
    );
}