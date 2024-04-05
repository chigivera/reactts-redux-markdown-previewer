import { configureStore } from "@reduxjs/toolkit";
import markReducer from "./markdown/mark";

const store = configureStore({
    reducer: {
        mark: markReducer 
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
