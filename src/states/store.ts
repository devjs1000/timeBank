import { configureStore } from "@reduxjs/toolkit";
import process from "./process";
import history from "./history";

const store = configureStore({
    reducer: {
        process,
        history
    },
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export default store;