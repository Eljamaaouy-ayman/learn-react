import { Component, useEffect, useState } from "react"

export default function Counter({initialval = 0, step = 1})
{
    const [count, setCount] = useState(initialval, 0)
    const [age, setAge] = useState()
    const [time, setTime] = useState(new Date())
    let timer = null
    
    
    useEffect(() => {
        console.log("component did mount")
        timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => {
            clearInterval(timer)
        }
    },[])
    useEffect(() => {
        console.log("after render")
    })

    useEffect(() => {
        console.log("count changed!!")
    }, [count])
    useEffect(() => {
        console.log('age changed!!')
    }, [age])

    return <div>
        <span>
            time : <span>{time.toLocaleString()}</span>
        <button onClick={() => {
            setCount(prevState => { return prevState + step})
        }}>increment</button>
        <button onClick={() => {
            setCount(0)
        }}>reset</button>
        it's been {count} secondes
        </span>
    </div>
}
/*
import { Component } from "react";

export default class Counter extends Component 
{
    constructor(props){
        super(props)
        this.state = {counter:0,
            date:undefined
        }
        console.log('hi from constructor')
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log(prevState, this.state)
        console.log('component updated')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        if (nextState.counter != this.counter)
            return true
        return false
    }
    componentDidMount()
    {
        console.log('hi from component did mount')
    }
    handleClick = () =>
    {
        this.setState(
            prevState => {
                return {counter:prevState.counter+1}
            }
        )
    }
    handleReset = () =>
    {
        this.setState({counter:0})
    }

    render()
    {
        console.log('hi from render function')
        return <div>
            <button onClick={this.handleClick}>increment</button>
            <button onClick={this.handleReset}>reset</button>
            it's been {this.state.counter} secondes

        </div>
    }
}*/