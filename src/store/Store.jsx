import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import taskReducer from "./slices/taskManager"

export const store = configureStore({
    reducer:{
        user: userReducer,
        Task : taskReducer
    },
})