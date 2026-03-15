export const COUNTER_INCREMENT = 'counter/increment'
export const COUNTER_DECREMENT = 'counter/decrement'
export const COUNTER_RESET = 'counter/reset'

export const CounterReducer = (state = {value: 0}, action) => {
    console.log( "action" + action.payload)
    switch(action.type){
        case 'counter/increment' : return {value : state.value + 1}
        case 'counter/decrement' : return {value : state.value - 1}
        case 'counter/reset' : return {value : action.payload.value}
        default :
            return state
    }
}