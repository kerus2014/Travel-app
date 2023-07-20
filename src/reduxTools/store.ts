import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import thunkMiddleware from "redux-thunk";
import { api } from "./requests/apiRequests";
import { apiRate } from "./requests/apiRate";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkMiddleware, api.middleware, apiRate.middleware),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
