import { combineReducers, configureStore } from "@reduxjs/toolkit";
import users from "modules/auths";

const reducer = combineReducers({ users });

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
