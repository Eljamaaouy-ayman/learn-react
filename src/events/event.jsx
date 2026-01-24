export default function Event(){
    const handleClick = () => {
        console.log(this)
        alert("Boom!!")
    }

// import { Component } from "react"

    return <div>
        <button onClick={handleClick}>
            click
        </button>
    </div>
}
// export default class Event extends Component{
//     handleClick = () => {
//         console.log(this)
//         alert("Boom!!")
//     };
//     render(){
//         return <div>
//             <button onClick={this.handleClick}>
//                 click
//             </button>
//         </div>
//     }
// }