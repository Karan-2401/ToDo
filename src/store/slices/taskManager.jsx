import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    value:'karan'
}

export const TaskManager = createSlice({
    name:'taskmanger',
    initialState,
    reducers:{
        Add:(state,action)=>{
            const {Task,Time} = action.payload
            
        }
    }
})

export const {Add} = TaskManager.actions

export default TaskManager.reducer