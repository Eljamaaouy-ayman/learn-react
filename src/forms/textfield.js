export default function Textfield(props){
    return (
        <>
            <label>{props.inputLabel}</label>
            <input name={props.inputname} type="text" />
            <div>{props.children}</div>
        </>
    )
}

// import { Component } from "react"

// export default class Textfield extends Component{
//     render(){
//         return 
//         <>
//             <label>{this.props.inputLabel}</label>
//             <input name={this.props.inputname} type="text" />
//             <div>{this.props.children}</div>
//         </>
//     }
// }