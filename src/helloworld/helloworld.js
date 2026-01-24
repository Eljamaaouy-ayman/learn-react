// function HelloWorld({lastname}) {
//     const age = 18

//     return (<h1>Hello {lastname} {age >= 18 ? 'adult' : 'minor'}!</h1>)
// }

// export default HelloWorld;
import {Component} from 'react';
export default class HelloWorld extends Component{

    age = 18

    componentDidMount()
    {
        console.log('component mounted')
    }

    componentDidUpdate()
    {
        console.log('conponent updated')
    }

    
    componentWillUnmount()
    {
        console.log('the conponent is dead')
    }
    render(){
        // console.log(this);
        return <h1>hello {this.props.firstname} {this.props.lastname} {this.age >= 18 ? 'adult' : 'minor'}</h1>
    }

}