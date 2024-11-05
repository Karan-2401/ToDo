import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    value:{
        memory:localStorage,
        Jarvis:[]
    }
}

export const TaskManager = createSlice({
    name:'taskmanger',
    initialState,
    reducers:{
        Add:(state,action)=>{
            const {Task,Time} = action.payload
            state.value.Jarvis[state.value.Jarvis.length]={task:Task,
             time:Time   
            }
        },
        del:(state,action)=>{
            let {k} = action.payload;

            for(
                k; k <= state.value.Jarvis.length ;k++
            )
            {
                state.value.Jarvis[k] = state.value.Jarvis[k+1]
                state.value.Jarvis.pop();
                
            }
        },
        edit:(state,action)=>{
            const {Task,Time,s} =action.payload
            state.value.Jarvis[s]={task:Task,time:Time}
        }
    }
})

export const {Add,del,edit} = TaskManager.actions

export default TaskManager.reducer