import {createSlice} from "@reduxjs/toolkit";

const user  = {
    name : 'ayman',
    country : 'ma',
    age : 23
}


const userSlice = createSlice({
    name : 'user',
    initialState : user,
    reducers : {
        resetUser: (state) => {
            state.name = undefined
            state.country = undefined
            state.age = undefined

        },
        updateUser: (state, action) => {
            const {name,country,age} = action.payload
            state.name = name 
            state.age = age 
            state.country = country 
        }
    }
})
export const {resetUser, updateUser} = userSlice.actions
export default userSlice.reducer