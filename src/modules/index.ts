import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auths";

export interface State {
  status : 'idle' | 'pending' | 'succeeded' | 'failed'
}

const reducer = combineReducers({ authReducer });

const rootStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof rootStore.dispatch;
export type RootState = ReturnType<typeof rootStore.getState>;

export default rootStore;