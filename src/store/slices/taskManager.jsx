import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    value:{
        memory:localStorage.getItem('Task'),
        Jarvis:[]
    }
}

export const TaskManager = createSlice({
    name:'taskmanger',
    initialState,
    reducers:{
        Add:(state,action)=>{
            const {Task,Time} = action.payload  
            //const a = state.value.Jarvis;
            //const aa =a[a.length+1] = {Task,Time}
            //localStorage.setItem('Task',JSON.stringify(aa))
            
        }
    }
})

export const {Add} = TaskManager.actions

export default TaskManager.reducer