import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { api } from "./requests";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware, api.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
