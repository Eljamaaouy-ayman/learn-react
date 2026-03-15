import React from 'react'
import { connect } from 'react-redux'
import { COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET } from './CounterReducer'

function Counter({counter, onIncrement, onDecrement, Reset}) {

    const increment = () => onIncrement()
    const decrement = () => onDecrement()
    const reset = () => Reset(3)
  return (
    <div className='my-5'>
        <div className="text-center my-2">
            {console.log("the counter : " + counter)}
        {counter}
        <span className='badge badge-primary'></span>
        </div>
        <div className='btn-group align-center' role='group' aria-label='Basic example'>
            <button className="btn btn-primary" type='button' onClick={decrement}>&lt; decrement </button>
            <button className="btn btn-primary" type='button' onClick={reset}> reset </button>
            <button className="btn btn-primary" type='button' onClick={increment}> increment &gt;</button>
        </div>
    </div>
  )
}

const CounterStore = connect(
    (state) => ({
        counter : state.value
    }),
    dispatch => ({
        onIncrement: value => dispatch ({
            type : COUNTER_INCREMENT,
            payload : value
        }),
        onDecrement: value => dispatch ({
            type : COUNTER_DECREMENT,
            payload : value
        }),
        Reset: value => dispatch ({
            type : COUNTER_RESET,
            payload : {value}
        })
    })
)(Counter)


export default CounterStore