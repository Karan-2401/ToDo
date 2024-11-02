import { createSlice } from "@reduxjs/toolkit";
import { BsPass } from "react-icons/bs";

const initialState = {
    value: {
        users :localStorage,
        admin : null,
        newPage:false,
    },
}

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        addUser :(state,action)=>{
            const {name1 ,pass}= action.payload;
            state.value.users.setItem('user',name1)
            state.value.users.setItem('password',pass)
            state.value.admin = name1
        },
        logIn : ()=>{

        },
        removeUser : (state)=>{
            localStorage.clear()
            state.value.admin = ''
            state.value.newPage = false
        },
        Newpage : (state)=>{
            console.log('run')
            state.value.newPage = true
        },

    }
})

export const {addUser,logIn,removeUser,Newpage} = userSlice.actions

export default userSlice.reducer