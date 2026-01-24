import { Component } from "react";
import HelloWorld from "../helloworld/helloworld";

export default class Toggle extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            displayName : true
        }
    }
    handleToggleName = () => {
        this.setState(prevState => {return {displayName: !prevState.displayName}})
        console.log(this.state.displayName)
    }
    render()
    {
        return <div>
            {
                this.state.displayName === true ?
                <HelloWorld lastname='eljamaaouy'></HelloWorld>
                :
                undefined
            }
            <button onClick={this.handleToggleName}>{this.state.displayName.toString()}</button>
        </div>
    }
}