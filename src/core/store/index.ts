import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./User.store";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
